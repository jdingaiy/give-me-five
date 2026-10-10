const {JSDOM}=require('jsdom'),fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=require('node:path').resolve(__dirname,fs.existsSync(require('node:path').resolve(__dirname,'../dist/index.html'))?'../dist':'..')+'/';
const dom=new JSDOM(fs.readFileSync(root+'index.html','utf8'),{url:'https://prototype.test/#note',runScripts:'outside-only',pretendToBeVisual:true});
const w=dom.window,d=w.document;w.structuredClone=structuredClone;w.HTMLElement.prototype.scrollIntoView=function(){this.dataset.located='true'};
const context=dom.getInternalVMContext();for(const file of ['xhs-icons.js','app.js'])vm.runInContext(fs.readFileSync(root+file,'utf8'),context);
const ev=s=>vm.runInContext(s,context),click=s=>{const el=d.querySelector(s);assert(el,'missing '+s);el.click();},state=()=>JSON.parse(ev('JSON.stringify(data)'));
const pointer=(el,type,x=0,y=0)=>el.dispatchEvent(new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x,clientY:y}));
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const host=()=>d.querySelector('[data-swipe-comment="c2"]'),text=()=>host().querySelector('[data-comment-menu]');
const menu=()=>text().dispatchEvent(new w.Event('contextmenu',{bubbles:true,cancelable:true}));
const swipe=(x,y=0,type='pointerup')=>{const el=text();pointer(el,'pointerdown');pointer(el,'pointermove',x,y);pointer(el,type,x,y);};
const participants=()=>state().comments.find(c=>c.id==='c2').palm.participants;
(async()=>{
 // Start with an existing ordinary comment with replies and preserve all its fields.
 const initialCount=state().comments.length;const before=state().comments.find(c=>c.id==='c2'),replies=state().comments.filter(c=>c.parent==='c2');
 ev("rawComment('c2').images=['assets/climbing-gym.jpg']");menu();assert.equal(d.querySelector('.palm-setting-row>span').textContent,'邀请击掌');assert(!d.querySelector('#toggle-palm-type').checked);click('#toggle-palm-type');click('.composer-overlay');
 assert.equal(state().comments.length,initialCount);assert.equal(state().comments.find(c=>c.id==='c2').text,before.text);assert.deepEqual(state().comments.filter(c=>c.parent==='c2'),replies);assert.deepEqual(state().comments.find(c=>c.id==='c2').images,['assets/climbing-gym.jpg']);assert.deepEqual(participants(),[]);
 swipe(120);assert.deepEqual(participants(),[]); // own comment cannot join
 ev("switchRole('qing')");assert(d.querySelector('.palm-swipe-hint'));assert(d.querySelector('#palm-c2 [data-action="palm"] svg')); assert.equal(ev("setPalmType('c2',false)"),false);
 menu();assert(!d.querySelector('#toggle-palm-type'));assert(d.querySelector('#menu-palm'));click('.composer-overlay');
 // Vertical/left/short/cancel gestures do not submit or open long-press menu.
 swipe(8,100);swipe(-120);swipe(45);await pause(310);swipe(120,0,'pointercancel');await pause(310);assert.deepEqual(participants(),[]);assert(!host().classList.contains('dragging'));
 const el=text();pointer(el,'pointerdown');pointer(el,'pointermove',50,2);assert(host().classList.contains('dragging'));assert.equal(host().querySelector('.swipe-reveal span').textContent,'右滑击掌');assert.equal(host().querySelector('.comment-swipe-surface').style.transform,'translateX(50px)');await pause(550);assert.equal(d.querySelector('#editor-root').childElementCount,0);
 pointer(el,'pointermove',110,4);assert(host().classList.contains('swipe-ready'));assert.equal(host().querySelector('.swipe-reveal span').textContent,'松手击掌');pointer(el,'pointerup',110,4);
 assert.deepEqual(participants(),['qing']);assert.equal(state().notifications.filter(n=>n.kind==='palm').length,1);assert(d.querySelector('.palm-collision .collision-a'));assert(d.querySelector('.palm-collision .collision-b'));await pause(1000);assert(d.querySelector('#palm-c2').textContent.replace(/\s+/g,' ').includes('已击掌 · 1人'));
 assert.equal(host().querySelector('.comment-swipe-surface').style.transform,'');assert(!d.querySelector('.palm-swipe-hint'));swipe(125);assert.deepEqual(participants(),['qing']);assert.equal(state().notifications.filter(n=>n.kind==='palm').length,1);
 // No automatic private message; original public and private flows still connect.
 assert.equal(Object.values(state().chats).flat().filter(m=>m.kind==='palm-dm').length,0);
 ev("switchRole('lin');navigate('likes')");assert(d.querySelector('#app').textContent.includes('阿青向你击了个掌'));click('[data-action="palm-dm"]');const chats=JSON.stringify(state().chats);assert.equal(Object.values(state().chats).flat().filter(m=>m.kind==='palm-dm').length,1);assert(!d.querySelector('.palm-dm-note-title'));
 ev("navigate('note');openEditor('c2',true)");assert(d.querySelector('#notify-palm').checked);ev("publishComment('新手线路整理好啦！',{responding:true,notify:true})");const notices=state().notifications.filter(n=>n.kind==='palm-response').length;
 // Closing preserves records, replies and private messages; suppresses reminders; reopening doesn't backfill.
 menu();click('#toggle-palm-type');click('.composer-overlay');assert.equal(ev("findComment('c2').palm.status"),'closed');assert.deepEqual(participants(),['qing']);assert.equal(JSON.stringify(state().chats),chats);
 ev("openEditor('c2',true)");assert(!d.querySelector('#notify-palm'));ev("publishComment('关闭期间的更新',{responding:true,notify:true})");assert.equal(state().notifications.filter(n=>n.kind==='palm-response').length,notices);
 ev("switchRole('qing')");menu();assert.equal(d.querySelector('#menu-palm').textContent.trim(),'取消击掌');click('#menu-palm');assert.deepEqual(participants(),[]);menu();assert(!d.querySelector('#menu-palm'));click('.composer-overlay');swipe(120);assert.deepEqual(participants(),[]);
 ev("switchRole('lin')");menu();click('#toggle-palm-type');click('.composer-overlay');assert.equal(ev("findComment('c2').palm.status"),'open');assert.equal(state().notifications.filter(n=>n.kind==='palm-response').length,notices);
 ev("switchRole('qing')");
 // A persistence failure rolls back count + notifications, with no success animation, then retry works.
 const originalSet=w.Storage.prototype.setItem;w.Storage.prototype.setItem=function(){throw Error('storage full')};const nBefore=JSON.stringify(state().notifications);swipe(120);assert.deepEqual(participants(),[]);assert.equal(JSON.stringify(state().notifications),nBefore);assert(!d.querySelector('.palm-collision'));assert(d.querySelector('#toast').textContent.includes('请重试'));assert.equal(host().querySelector('.comment-swipe-surface').style.transform,'');w.Storage.prototype.setItem=originalSet;await pause(310);
 menu();click('#menu-palm');assert.deepEqual(participants(),['qing']);assert.equal(state().notifications.filter(n=>n.kind==='palm-response').length,notices);await pause(820);
 // Existing links/images receive clicks and never start a swipe.
 const link=d.createElement('a');link.href='#';link.textContent='图片来源';text().append(link);let clicked=false;link.onclick=e=>{e.preventDefault();clicked=true};pointer(link,'pointerdown');pointer(link,'pointermove',120);pointer(link,'pointerup',120);link.click();assert(clicked);
 ev("switchRole('lin');openEditor('c2',true);publishComment('再次开启后的更新',{responding:true,notify:true});switchRole('qing');navigate('comments')");assert.equal(state().notifications.filter(n=>n.kind==='palm-response').length,notices+1);click('[data-notification]');assert.equal(ev('page.name'),'note');assert(d.querySelector('.target-comment'));click('.target-comment [data-action="reply"]');ev("publishComment('收到！')");assert(state().notifications.some(n=>n.kind==='reply'&&n.recipient==='lin'&&n.commentId===state().comments.at(-1).id));
 console.log('PASS: published-comment conversion, permissions, preserved replies/images, directional swipe thresholds, long-press arbitration, avatar collision, deduplication, closed/reopened lifecycle, failure rollback, menu fallback, links, public/private continuity');w.close();
})().catch(error=>{console.error(error);w.close();process.exitCode=1});
