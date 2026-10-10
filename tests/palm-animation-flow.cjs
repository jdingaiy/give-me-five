const {JSDOM}=require('jsdom'),fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const root=require('path').resolve(__dirname,fs.existsSync(require('path').resolve(__dirname,'../dist/index.html'))?'../dist':'..')+'/';
const dom=new JSDOM(fs.readFileSync(root+'index.html','utf8'),{url:'https://prototype.test/#note',runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window,d=w.document;
w.structuredClone=structuredClone;w.HTMLElement.prototype.scrollIntoView=function(){};w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},measureText(){return{width:0}}});
const context=dom.getInternalVMContext(),ev=s=>vm.runInContext(s,context),pause=ms=>new Promise(r=>setTimeout(r,ms));
for(const file of ['phosphor-icons.js','vendor/lottie-svg.min.js','assets/high-five-data.js','app.js'])ev(fs.readFileSync(root+file,'utf8'));
const frames=[],load=w.lottie.loadAnimation;let player,config,destroyed=false;
w.lottie.loadAnimation=options=>{config=options;player=load(options);const frame=player.goToAndStop.bind(player),destroy=player.destroy.bind(player);player.goToAndStop=(f,unit)=>{frames.push(f);return frame(f,unit)};player.destroy=()=>{destroyed=true;return destroy()};return player;};
(async()=>{
 ev("findComment('c2').palm={status:'open',participants:[],history:[]};switchRole('qing')");
 const surface=d.querySelector('[data-swipe-comment="c2"] .comment-swipe-surface'),text=surface.querySelector('.comment-text').textContent;
 assert(ev("togglePalm('c2',{source:'tap'})"));assert(!d.querySelector('.swipe-collision'));assert(!d.querySelector('.bound-palm'));assert(d.querySelector('.palm-contact-lottie'));assert.equal(config.renderer,'svg');assert.equal(config.loop,false);assert(!config.animationData.layers.some(l=>l.nm==='Background'));assert(ev("HIGH_FIVE_ANIMATION.layers.some(l=>l.nm==='Background')"));
 await pause(220);assert(d.querySelector('.palm-contact-lottie svg path'));assert(frames.some(f=>f>=15&&f<=15.4));assert.equal(surface.style.transform,'');assert.equal(surface.querySelector('.comment-text').textContent,text);assert.equal(ev("findComment('c2').palm.participants.length"),1);
 await pause(150);assert(frames.every(f=>f<=27.6));assert(d.querySelector('.palm-cancel'));
 await pause(240);assert(destroyed);assert(!d.querySelector('.palm-motion-layer'));const notifications=ev('JSON.stringify(data.notifications)');d.querySelector('#palm-c2 .palm-cancel').click();assert(!d.querySelector('.palm-motion-layer'));assert.equal(ev('JSON.stringify(data.notifications)'),notifications);
 const css=fs.readFileSync(root+'style.css','utf8');assert(css.includes('transform:scale(.94,1.04)'));assert(css.includes('transform-origin:100% 50%'));assert(css.includes('transform-origin:0% 50%'));assert(css.includes('var(--b-hit) - 4px'));assert(css.includes('var(--a-hit) + 4px'));
 console.log('PASS: actual supplied Lottie SVG rendering, transparent background, synchronized first contact and single recoil, cleanup, stable tap text, no animation on cancel');dom.window.close();
})().catch(error=>{console.error(error);dom.window.close();process.exitCode=1;});
