const {JSDOM}=require('jsdom'),fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=require('node:path').resolve(__dirname,fs.existsSync(require('node:path').resolve(__dirname,'../dist/index.html'))?'../dist':'..')+'/';
function setup(saved){const dom=new JSDOM(fs.readFileSync(root+'index.html','utf8'),{url:'https://prototype.test/#note',runScripts:'outside-only',pretendToBeVisual:true});const w=dom.window;w.structuredClone=structuredClone;w.HTMLElement.prototype.scrollIntoView=function(){this.dataset.located='true'};if(saved)w.localStorage.setItem('rednote-community-base-v1',saved);const context=dom.getInternalVMContext();vm.runInContext(fs.readFileSync(root+'phosphor-icons.js','utf8'),context);vm.runInContext(fs.readFileSync(root+'app.js','utf8'),context);return {dom,w,d:w.document,ev:s=>vm.runInContext(s,context)};}

const {dom,w,d,ev}=setup();
const dm=()=>JSON.parse(ev('JSON.stringify(data)')).chats['lin-qing'].filter(m=>m.kind==='palm-dm');
assert.deepEqual(JSON.parse(ev("JSON.stringify(findComment('demo-multi-palm').palm.participants)")),['mei','zhou','cheng']);
ev("switchRole('qing');togglePalm('demo-multi-palm');render()");
assert.deepEqual(JSON.parse(ev("JSON.stringify(findComment('demo-multi-palm').palm.participants)")),['qing','mei','zhou','cheng']);
assert(d.querySelector('#palm-demo-multi-palm .palm-avatar-stack img').alt.startsWith('阿青'));
ev("togglePalm('demo-multi-palm');switchRole('lin');setPalmType('c2',true);switchRole('qing');togglePalm('c2');switchRole('lin');openParticipants('c2')");
const sheet=d.querySelector('.participants-sheet'),notifications=ev('data.notifications.length');sheet.scrollTop=19;
d.querySelector('[data-participant-private="qing"]').click();
assert.equal(dm().length,0);assert(sheet.isConnected);assert(sheet.closest('.composer-overlay').inert);
assert.equal(d.querySelector('#private-palm-text').value,'看到你也有同感，找到同好了～');
assert.equal(d.querySelector('.private-palm-heading span').textContent,'私信回应阿青的击掌');
assert.equal(d.querySelector('#private-palm-text').tagName,'INPUT');
const text=d.querySelector('#private-palm-text');text.value='  ';text.dispatchEvent(new w.Event('input'));assert(d.querySelector('#send-private-palm').disabled);
text.value='原来你也喜欢一个人爬！周末交流一下～';text.dispatchEvent(new w.Event('input'));
d.querySelector('.response-editor-layer .composer-overlay').click();
assert.equal(dm().length,0);assert(sheet.isConnected);assert(!sheet.closest('.composer-overlay').inert);assert.equal(sheet.scrollTop,19);
d.querySelector('[data-participant-private="qing"]').click();assert.equal(d.querySelector('#private-palm-text').value,text.value);
d.querySelector('#send-private-palm').click();assert.equal(dm().length,1);assert.equal(ev('data.notifications.length'),notifications);
const msg=dm()[0];assert.equal(ev(`data.chats['lin-qing'].find(m=>m.palmDMParent==='${msg.id}').text`),text.value);
ev("navigate('note');openParticipants('c2')");d.querySelector('[data-participant-private="qing"]').click();assert.equal(ev('page.name'),'chat');assert(!d.querySelector('#private-palm-text'));assert.equal(dm().length,1);
// Canceling membership while the draft is open invalidates delivery at send time.
ev("navigate('note');publishComment('再来一条邀请',{leavePalm:true})");const id=ev('data.comments.at(-1).id');ev(`switchRole('qing');togglePalm('${id}');switchRole('lin');sendPalmDM('${id}','qing');findComment('${id}').palm.participants=[]`);d.querySelector('#send-private-palm').click();assert.equal(dm().length,1);assert(d.querySelector('#toast').textContent.includes('取消'));
dom.window.close();console.log('Private draft, layered dismissal, edited send, deduplication and newest-first multi-person stack passed');
