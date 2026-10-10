const {JSDOM}=require('jsdom'),fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const root=require('path').resolve(__dirname,fs.existsSync(require('path').resolve(__dirname,'../dist/index.html'))?'../dist':'..')+'/';
const dom=new JSDOM(fs.readFileSync(root+'index.html','utf8'),{url:'https://prototype.test/#note',runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window,d=w.document;
w.structuredClone=structuredClone;w.HTMLElement.prototype.scrollIntoView=function(){};
const context=dom.getInternalVMContext(),ev=s=>vm.runInContext(s,context),pause=ms=>new Promise(r=>setTimeout(r,ms));
for(const file of ['phosphor-icons.js','app.js'])ev(fs.readFileSync(root+file,'utf8'));
(async()=>{
 ev("findComment('c2').palm={status:'open',participants:[],history:[]};switchRole('qing')");
 const surface=d.querySelector('[data-swipe-comment="c2"] .comment-swipe-surface'),text=surface.querySelector('.comment-text').textContent;
 assert(ev("togglePalm('c2',{source:'tap'})"));assert(!d.querySelector('.swipe-collision'));assert(!d.querySelector('.bound-palm'));const effect=d.querySelector('.palm-contact-svg');assert(effect);assert.equal(effect.querySelectorAll('img').length,2);assert(effect.firstElementChild.classList.contains('contact-hand-back'));assert(effect.lastElementChild.classList.contains('contact-hand-palm'));for(const img of effect.querySelectorAll('img')){assert(fs.existsSync(root+img.getAttribute('src')));assert(!img.draggable)}assert(!w.lottie);assert(!d.querySelector('script[src*="lottie"]'));
 await pause(220);assert.equal(surface.style.transform,'');assert.equal(surface.querySelector('.comment-text').textContent,text);assert.equal(ev("findComment('c2').palm.participants.length"),1);assert.equal(d.querySelectorAll('.palm-contact-rays i').length,3);
 await pause(150);assert(d.querySelector('.palm-cancel'));
 await pause(240);assert(!d.querySelector('.palm-motion-layer'));const notifications=ev('JSON.stringify(data.notifications)');d.querySelector('#palm-c2 .palm-cancel').click();assert(!d.querySelector('.palm-motion-layer'));assert.equal(ev('JSON.stringify(data.notifications)'),notifications);
 const css=fs.readFileSync(root+'style.css','utf8');assert(css.includes('transform:scale(.94,1.04)'));assert(css.includes('transform-origin:100% 50%'));assert(css.includes('transform-origin:0% 50%'));assert(css.includes('var(--b-hit) - 4px'));assert(css.includes('var(--a-hit) + 4px'));
 ev("togglePalm('c2',{source:'tap'});switchRole('lin')");assert(!d.querySelector('.palm-contact-svg'));await pause(600);assert.equal(ev('role'),'lin');
 w.matchMedia=()=>({matches:true});ev("switchRole('qing');togglePalm('c2');togglePalm('c2',{source:'tap'})");assert(!d.querySelector('.palm-contact-svg'));await pause(30);assert(d.querySelector('#palm-c2 .palm-cancel'));
 console.log('PASS: supplied SVG hands, front/back layer order, synchronized contact, no Lottie dependency, cleanup on completion/role switch, stable tap text, cancel and reduced-motion states');dom.window.close();
})().catch(error=>{console.error(error);dom.window.close();process.exitCode=1;});
