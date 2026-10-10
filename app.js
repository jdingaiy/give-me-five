'use strict';
const PEOPLE={cheng:{name:'阿橙',avatar:'cheng'},lin:{name:'小林',avatar:'lin'},qing:{name:'阿青',avatar:'qing'},xia:{name:'小夏',avatar:'friend'},mei:{name:'阿栗',avatar:'mei'},zhou:{name:'小舟',avatar:'zhou'}};
const NOTE={id:'climbing-note',author:'cheng',title:'第一次去这家岩馆，新手体验怎么样？',text:'第一次来这家岩馆，整体比想象中轻松，新手也能找到自己的节奏。\n线路从低难度到进阶都有，简单线路的抓点比较大，工作人员会介绍起步方法和安全落地，新手区也不太拥挤。\n租鞋尺码挺全，刚穿会有一点紧，换了大半码舒服不少。休息区有长凳和饮水，爬累了坐着看看别人解线也很有意思。\n我这次主要试了几条新手线路，推荐先从直墙开始。你们喜欢自己去，还是和朋友一起？',tags:'#岩馆测评 #攀岩新手 #一个人也能攀岩',image:'assets/climbing-gym.jpg'};
const SEED={version:2,comments:[
 {id:'c1',author:'cheng',text:'第一次来可以先找工作人员了解新手线路，记得热身和练习安全落地～',time:'昨天',place:'上海',pinned:true,baseLikes:12,likedBy:[]},
 {id:'c2',author:'lin',text:'有没有也喜欢一个人去攀岩的？最近刚开始，想交流一下新手线路～',time:'昨天',place:'浙江',baseLikes:8,likedBy:['qing','cheng']},
 {id:'r1',author:'qing',text:'我也是！一个人去反而更专注，累了就坐着看别人爬。',parent:'c2',replyTo:'c2',time:'昨天',place:'上海',baseLikes:3,likedBy:['lin']},
 {id:'r2',author:'lin',text:'我刚开始练直墙，想先把基础动作练顺一点～',parent:'c2',replyTo:'r1',time:'昨天',place:'浙江',baseLikes:2,likedBy:['qing']},
 {id:'r3',author:'qing',text:'我也刚开始！有机会交流一下踩点和发力的感觉。',parent:'c2',replyTo:'r2',time:'2小时前',place:'上海',baseLikes:1,likedBy:[]},
 {id:'c3',author:'qing',text:'租鞋舒服吗？第一次去需要自己买鞋吗？',time:'昨天',place:'上海',baseLikes:5,likedBy:['lin','cheng']},
 {id:'r4',author:'cheng',text:'可以先租鞋体验，尺码不舒服就找工作人员换，不用急着买。',parent:'c3',replyTo:'c3',time:'昨天',place:'上海',baseLikes:4,likedBy:[]},
 {id:'r5',author:'lin',text:'我上次换大半码之后舒服多了，脚趾微弯就好。',parent:'c3',replyTo:'c3',time:'3小时前',place:'浙江',baseLikes:1,likedBy:['qing']},
 {id:'c4',author:'zhou',text:'新手线路多不多？希望能找到几条有成就感的。',time:'昨天',place:'浙江',baseLikes:2,likedBy:[]},
 {id:'c5',author:'mei',text:'休息区看起来不错，爬累了坐着看别人解线也很开心 🧗',time:'昨天',place:'上海',baseLikes:3,likedBy:['lin']}
],notifications:[
 {id:'n1',kind:'reply',actor:'qing',recipient:'lin',commentId:'r3',refId:'r2',time:'2小时前'},
 {id:'n2',kind:'like',actor:'qing',recipient:'lin',commentId:'c2',time:'3小时前'},
 {id:'n3',kind:'like',actor:'cheng',recipient:'lin',commentId:'c2',time:'昨天 20:10'},
 {id:'n4',kind:'reply',actor:'qing',recipient:'lin',commentId:'r1',refId:'c2',time:'昨天 19:24'},
 {id:'n5',kind:'like',actor:'qing',recipient:'lin',commentId:'r2',time:'昨天 19:20'},
 {id:'n6',kind:'reply',actor:'lin',recipient:'qing',commentId:'r5',refId:'c3',time:'3小时前'},
 {id:'n7',kind:'like',actor:'lin',recipient:'qing',commentId:'c3',time:'昨天 21:15'},
 {id:'n8',kind:'like',actor:'cheng',recipient:'qing',commentId:'c3',time:'昨天 20:10'},
 {id:'n9',kind:'reply',actor:'cheng',recipient:'qing',commentId:'r4',refId:'c3',time:'昨天 20:08'},
 {id:'n10',kind:'reply',actor:'lin',recipient:'qing',commentId:'r2',refId:'r1',time:'昨天 19:26'},
 {id:'n11',kind:'like',actor:'lin',recipient:'qing',commentId:'r1',time:'昨天 19:25'},
 {id:'n12',kind:'like',actor:'qing',recipient:'lin',commentId:'r5',time:'2小时前'},
 {id:'n13',kind:'like',actor:'lin',recipient:'mei',commentId:'c5',time:'昨天 18:10'}
],chats:{'lin-qing':[
 {id:'m1',sender:'qing',text:'在阿橙的评论区看到你也喜欢一个人攀岩！',time:'昨天 19:30'},
 {id:'m2',sender:'lin',text:'对呀，刚开始练新手线路，一个人去也挺自在。',time:'昨天 19:31'},
 {id:'m3',sender:'qing',text:'我也是！可以交流一下新手线路怎么踩点～',time:'昨天 19:32'}
],'cheng-lin':[{id:'m4',sender:'lin',text:'你好，想问问这家岩馆周末的新手区挤不挤？',time:'昨天 18:55'},{id:'m5',sender:'cheng',text:'下午会热闹一点，刚开始可以挑人少的时候，慢慢练～',time:'昨天 19:02'}],
'cheng-qing':[{id:'m6',sender:'qing',text:'谢谢你分享这家岩馆的新手体验！',time:'昨天 20:20'},{id:'m7',sender:'cheng',text:'不客气，希望你也玩得开心 🧗',time:'昨天 20:22'}]},noteLikes:[],noteSaves:[],follows:[]};
const MULTI_PALM_DEMO={id:'demo-multi-palm',author:'xia',text:'有没有也喜欢一个人去攀岩的？',time:'1小时前',place:'福建',baseLikes:6,likedBy:[],palm:{status:'open',participants:[],history:[]}};
const EXTRA_COMMENTS=[
 {id:'r6',author:'mei',text:'新手区有几条大抓点的直墙，我第一次去也完成了两条，很有成就感！',parent:'c4',replyTo:'c4',time:'1小时前',place:'上海',baseLikes:2,likedBy:[]},
 {id:'r7',author:'xia',text:'我也会在休息区看别人解线，经常能发现新的踩点方法。',parent:'c5',replyTo:'c5',time:'45分钟前',place:'福建',baseLikes:1,likedBy:[]}
];
SEED.comments.splice(1,0,structuredClone(MULTI_PALM_DEMO));SEED.comments.push(...structuredClone(EXTRA_COMMENTS));
const STORAGE='rednote-community-base-v1';
let data=structuredClone(SEED);
try{const saved=JSON.parse(localStorage.getItem(STORAGE));if(saved?.version===2&&Array.isArray(saved.comments)&&Array.isArray(saved.notifications)&&saved.chats)data=saved;}catch{}
if(!data.comments.some(c=>c.id===MULTI_PALM_DEMO.id))data.comments.push(structuredClone(MULTI_PALM_DEMO));
for(const c of EXTRA_COMMENTS)if(!data.comments.some(existing=>existing.id===c.id))data.comments.push(structuredClone(c));
for(const id of ['c4','c5']){const c=data.comments.find(c=>c.id===id),seed=SEED.comments.find(c=>c.id===id);if(c&&c.text===seed.text)c.author=seed.author;}
const oldLike=data.notifications.find(n=>n.id==='n13');if(oldLike)oldLike.recipient='mei';
const demoIndex=data.comments.findIndex(c=>c.id===MULTI_PALM_DEMO.id),demo=data.comments.splice(demoIndex,1)[0],firstUnpinned=data.comments.findIndex(c=>!c.parent&&!c.pinned);data.comments.splice(firstUnpinned<0?data.comments.length:firstUnpinned,0,demo);
let role='lin',page=readRoute(),chatPeer=page.peer||'qing',replyTarget=null,toastTimer,uid=0;
const scrollPositions={},expanded=new Set(),drafts=new Map();
const app=document.getElementById('app');
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function icon(name,size=24,filled=false){
 const aliases={back:'caret-left',chevron:'caret-down',chat:'chat-circle-dots',search:'magnifying-glass',plus:'plus-circle',add:'plus',smile:'smiley',neutral:'smiley-sad',share:'share-fat',pen:'pencil-simple-line',image:'image-square',mic:'microphone',voice:'wifi-medium',grid:'squares-four',sort:'list',person:'user',official:'chat-circle-dots',hand:'hands-clapping',quote:'quotes',send:'paper-plane-tilt',report:'warning',delete:'trash',wechat:'wechat-logo'};
 const glyph=aliases[name]||name,weight=filled?'fill':'regular',symbol=PHOSPHOR_ICONS[glyph];
 if(!symbol?.[weight])throw new Error(`Missing official Phosphor icon: ${glyph}/${weight}`);
 return `<svg class="phosphor-icon" data-phosphor-icon="${glyph}" data-weight="${weight}" width="${size}" height="${size}" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">${symbol[weight]}</svg>`;
}
function avatar(who,cls=''){return `<img class="avatar ${cls}" src="assets/${PEOPLE[who].avatar}.${['mei','zhou'].includes(who)?'svg':'jpg'}" alt="${PEOPLE[who].name}的头像">`;}
const rawComment=id=>data.comments.find(c=>c.id===id);
const available=c=>!!c&&!c.deleted&&(!c.parent||!rawComment(c.parent)?.deleted);
const findComment=id=>{const c=rawComment(id);return available(c)?c:undefined;};
const visibleComments=()=>data.comments.filter(available);
const keyChat=(a,b)=>[a,b].sort().join('-');
const newId=prefix=>`${prefix}-${Date.now()}-${uid++}`;
function save(){try{localStorage.setItem(STORAGE,JSON.stringify(data));}catch{}}
function readRoute(){const raw=location.hash.slice(1).split('/');return ['note','messages','likes','comments','chat'].includes(raw[0])?{name:raw[0],peer:raw[1]}:{name:'note'};}
function routeKey(){return `${role}:${page.name}:${chatPeer}`;}
function recordScroll(){const s=app.querySelector('.scroll');if(s)scrollPositions[routeKey()]=s.scrollTop;}
function navigate(name,options={}){recordScroll();closeEditor();if(name==='chat')chatPeer=options.peer|| (role==='lin'?'qing':'lin');page={name,peer:name==='chat'?chatPeer:undefined};history.pushState({prototype:true},'',`#${name}${name==='chat'?'/'+chatPeer:''}`);render({target:options.target,scroll:options.scroll});}
function goBack(){if(history.state?.prototype)history.back();else navigate('messages');}
window.addEventListener('popstate',()=>{recordScroll();closeEditor();page=readRoute();if(page.peer)chatPeer=page.peer;render();});
function render(options={}){clearPalmMotion();app.innerHTML=({note:renderNote,messages:renderMessages,likes:()=>renderNotifications('like'),comments:()=>renderNotifications('reply'),chat:renderChat}[page.name]||renderNote)();bindApp();document.querySelectorAll('[data-jump]').forEach(b=>{b.classList.toggle('selected',b.dataset.jump===(page.name==='note'?'note':'messages'));});const s=app.querySelector('.scroll');if(s){s.scrollTop=options.scroll??scrollPositions[routeKey()]??0;if(page.name==='chat')s.scrollTop=s.scrollHeight;}if(options.target){const c=findComment(options.target);if(c?.parent&&!expanded.has(c.parent)){expanded.add(c.parent);render({target:options.target});return;}const target=document.getElementById(`comment-${options.target}`)||document.getElementById('comments');target?.scrollIntoView({block:'center',behavior:'instant'});if(target?.id.startsWith('comment-')){target.classList.add('target-comment');setTimeout(()=>target.classList.remove('target-comment'),2000);}}}
function renderNote(){const liked=data.noteLikes.includes(role),saved=data.noteSaves.includes(role),followed=data.follows.includes(role);return `<header class="topbar"><button class="back" data-action="back" aria-label="返回消息">${icon('back',24)}</button><div class="note-author">${avatar('cheng','top')}<span>阿橙</span></div><button class="follow ${followed?'followed':''}" data-action="follow">${followed?'已关注':'关注'}</button><button data-action="share" aria-label="分享">${icon('share',26)}</button></header><div class="scroll" id="note-scroll"><div class="note-photo-wrap"><img class="note-photo" src="${NOTE.image}" alt="室内攀岩馆的新手线路、彩色岩点与休息区域"></div><article class="note-body"><h1>${NOTE.title}</h1><p>${esc(NOTE.text).replaceAll('\n','<br>')}</p><div class="tags">${NOTE.tags}</div><div class="search-chip">${icon('search',16)}<span>猜你想搜&nbsp; 攀岩新手入门</span></div><div class="note-meta"><span>昨天 18:30 上海</span><button class="dislike" data-action="unavailable">${icon('neutral',14)}不喜欢</button></div></article><section class="comments" id="comments"><div class="comment-count">共 ${visibleComments().length} 条评论 ${icon('sort',15)}</div><div class="inline-input">${avatar(role)}<button data-action="compose"><span>有话要说，快来评论</span>${icon('mic',18)}${icon('image',18)}</button></div>${visibleComments().filter(c=>!c.parent).map(renderComment).join('')}</section></div><footer class="note-footer"><button class="write-trigger" data-action="compose">${icon('pen',17)}说点什么...</button><button class="stat-btn ${liked?'active':''}" data-action="note-like" aria-label="${liked?'取消赞':'点赞笔记'}" aria-pressed="${liked}">${icon('heart',27,liked)}${128+data.noteLikes.length}</button><button class="stat-btn ${saved?'active saved':''}" data-action="note-save" aria-label="${saved?'取消收藏':'收藏笔记'}" aria-pressed="${saved}">${icon('star',26,saved)}${36+data.noteSaves.length}</button><button class="stat-btn" data-action="to-comments" aria-label="查看评论">${icon('chat',27)}${visibleComments().length}</button></footer>`;}
function commentSurface(c){return `<div class="comment-swipe" data-swipe-comment="${c.id}"><div class="swipe-reveal" aria-hidden="true">${avatar(role)}<span></span></div><div class="comment-swipe-surface">${avatar(c.author,c.parent?'small':'')}<div class="comment-main">${commentContent(c)}</div></div><div class="comment-fixed-meta">${commentInteractions(c)}${c.pinned?'<span class="pinned">置顶评论</span>':''}</div></div>`;}
function renderComment(c){const replies=visibleComments().filter(r=>r.parent===c.id),showAll=expanded.has(c.id),visible=showAll?replies:replies.slice(0,2);return `<article class="comment" id="comment-${c.id}">${commentSurface(c)}<div class="comment-replies">${visible.map(r=>`<div class="reply" id="comment-${r.id}">${commentSurface(r)}</div>`).join('')}${replies.length>2?`<button class="expand-replies" data-action="expand" data-id="${c.id}">${showAll?'收起回复':`展开 ${replies.length} 条回复`}</button>`:''}</div></article>`;}
function commentContent(c){const liked=c.likedBy.includes(role),to=c.replyTo&&findComment(c.replyTo);return `<div class="comment-name">${PEOPLE[c.author].name}${c.author==='cheng'?'<span class="author-badge">作者</span>':''}</div><div class="comment-text" data-comment-menu="${c.id}" tabindex="0" aria-label="${PEOPLE[c.author].name}的评论，长按打开操作">${to&&to.id!==c.parent?`<span class="reply-person">回复 ${PEOPLE[to.author].name}：</span>`:''}${esc(c.text)}</div>`;}
function commentInteractions(c){const liked=c.likedBy.includes(role);return `<div class="comment-meta"><span>${esc(c.time)} ${esc(c.place)}</span><button class="reply-action" data-action="reply" data-id="${c.id}">回复</button><button class="comment-likes ${liked?'active':''}" data-action="comment-like" data-id="${c.id}" aria-label="${liked?'取消赞':'赞'}${PEOPLE[c.author].name}的评论" aria-pressed="${liked}">${icon('heart',18,liked)}${c.baseLikes+c.likedBy.length||''}</button>${c.author!==role?`<button class="reaction-icon" data-action="unavailable" aria-label="不喜欢这条评论">${icon('neutral',17)}</button>`:''}</div>${c.palmNotified?.length&&c.author===role?'<span class="palm-notified-state">已通知击掌的人</span>':''}${c.palm?renderPalm(c):''}`;}
function renderMessages(){const peer=role==='lin'?'qing':'lin';const rows=[peer,'cheng'].map(id=>{const msgs=data.chats[keyChat(role,id)]||[],last=msgs.at(-1);return `<button class="conversation-row" data-action="chat" data-peer="${id}">${avatar(id,'large')}<div class="conversation-main"><div class="conversation-heading"><span class="conversation-name">${PEOPLE[id].name}</span><span class="conversation-time">${esc(last?.time.startsWith('昨天')?'昨天':last?.time||'')}</span></div><div class="conversation-preview">${esc(last?.kind==='palm-dm'?'[击掌] 来，击个掌！':last?.text||'')}</div></div></button>`;}).join('');return `<header class="topbar messages-head"><span class="title">消息</span><div class="right"><button data-action="unavailable" aria-label="搜索消息">${icon('search',26)}</button><button data-action="unavailable" aria-label="添加会话">${icon('plus',25)}</button></div></header><div class="scroll"><div class="notification-menu"><button data-action="navigate" data-page="likes"><span class="menu-icon red">${icon('heart',28,true)}</span><span>赞和收藏</span></button><button aria-label="新增关注，保留入口样式" data-action="unavailable"><span class="menu-icon blue">${icon('person',27,true)}</span><span>新增关注</span></button><button data-action="navigate" data-page="comments"><span class="menu-icon green">${icon('chat',28,true)}</span><span>评论和@</span></button></div>${rows}<div class="conversation-row"><span class="official-avatar">${icon('official',25,true)}</span><div class="conversation-main"><div class="conversation-heading"><span class="conversation-name">活动消息</span><span class="conversation-time">昨天</span></div><div class="conversation-preview">记录生活，分享你的日常</div></div></div></div><nav class="bottom-nav" aria-label="底部导航"><button data-action="navigate" data-page="note">首页</button><button data-action="unavailable">市集</button><button class="publish-plus" data-action="unavailable" aria-label="发布笔记">${icon('add',29)}</button><button class="active" data-action="navigate" data-page="messages">消息</button><button data-action="unavailable">我</button></nav>`;}
function renderNotifications(kind){
 const list=data.notifications.filter(n=>n.recipient===role&&(kind==='like'?['like','palm'].includes(n.kind):['reply','palm-response'].includes(n.kind)));
 return `<header class="topbar bordered"><button class="back" data-action="back" aria-label="返回消息">${icon('back',25)}</button><span class="title">${kind==='like'?'收到的赞和收藏':'收到的评论和@'}</span></header><div class="scroll"><div class="notification-list">${list.map(n=>{
 const c=findComment(n.commentId),ref=findComment(n.refId),deleted=!c,liked=c?.likedBy.includes(role),actors=n.actors||[n.actor];
 const description=n.kind==='palm'?`${PEOPLE[n.actor].name}${actors.length>1?'等'+actors.length+'人':''}向你击了个掌`:n.kind==='palm-response'?`${PEOPLE[n.actor].name}回应了你参与的评论`:n.kind==='like'?'赞了你的评论':'回复了你的评论';
 const content=deleted?'<div class="quote deleted-comment">原评论已删除</div>':kind==='like'?`<div class="quote">${esc(c.text)}</div>`:`<div class="notification-content">${esc(c.text)}</div>${ref?`<div class="quote">${PEOPLE[ref.author].name}：${esc(ref.text)}</div>`:''}<div class="notification-actions"><button class="pill" data-action="reply" data-id="${c.id}">${icon('chat',15)}回复</button><button class="pill ${liked?'active':''}" data-action="comment-like" data-id="${c.id}" aria-pressed="${!!liked}">${icon('heart',15,liked)}赞</button></div>`;
 return `<article class="notification-row notification-click" data-notification="${n.id}" role="link" tabindex="0" aria-label="${esc(description)}">${avatar(n.actor)}<div class="notification-main"><div class="notification-intro"><span class="notification-name">${PEOPLE[n.actor].name}</span>${n.actor==='cheng'?'<span class="friend-badge">作者</span>':'<span class="friend-badge">你的好友</span>'}</div><div class="notification-meta">${description}&nbsp; ${esc(n.time)}</div>${content}${n.kind==='palm'?renderPalmDMAction(n):''}</div><button class="note-thumb" data-action="open-notification" data-id="${n.id}" aria-label="查看原笔记"><img src="${NOTE.image}" alt="岩馆测评笔记缩略图"></button></article>`;
 }).join('')||'<div class="empty">暂时没有新消息</div>'}</div></div>`;
}
function renderChat(){if(chatPeer===role||!PEOPLE[chatPeer])chatPeer=role==='lin'?'qing':'lin';const messages=data.chats[keyChat(role,chatPeer)]||[];let lastTime='';return `<header class="topbar"><button class="back" data-action="back" aria-label="返回消息">${icon('back',24)}</button><div class="note-author">${avatar(chatPeer,'top')}<span>${PEOPLE[chatPeer].name}</span></div><div class="right"><button data-action="unavailable" aria-label="会话设置">${icon('grid',23)}</button></div></header><div class="scroll chat-scroll">${messages.map(m=>{const time=m.time!==lastTime?`<div class="chat-time">${esc(m.time)}</div>`:'';lastTime=m.time;return `${time}<div class="chat-line ${m.sender===role?'mine':''}">${avatar(m.sender,'chat-avatar')}<div class="${m.kind==='palm-dm'?'palm-dm-message':'bubble'}">${m.kind==='palm-dm'?renderPalmDM(m):esc(m.text)}</div></div>`;}).join('')}</div><footer class="chat-bottom"><div class="emoji-shortcuts">${[['👍','棒'],['😂','笑哭了'],['😍','心心眼'],['🐱','呢'],['🥹','抽泣']].map(([e,t])=>`<button data-action="emoji" data-emoji="${e}">${e} ${t}</button>`).join('')}</div><form class="chat-input" id="chat-form"><button type="button" data-action="unavailable" aria-label="语音消息">${icon('voice',25)}</button><textarea id="chat-text" rows="1" maxlength="2000" aria-label="发消息" placeholder="发消息...">${esc(drafts.get('chat:'+role+':'+chatPeer)||'')}</textarea><button type="button" id="chat-face" data-action="emoji" data-emoji="😊" aria-label="表情">${icon('smile',25)}</button><button type="button" id="chat-plus" data-action="unavailable" aria-label="更多消息类型">${icon('plus',25)}</button><button type="submit" id="chat-send" class="chat-send" hidden>发送</button></form></footer>`;}
function toggleList(list,value){const i=list.indexOf(value);i<0?list.push(value):list.splice(i,1);}
function toggleCommentLike(id){const c=findComment(id);if(!c)return;const had=c.likedBy.includes(role);toggleList(c.likedBy,role);if(c.author!==role){if(had){data.notifications=data.notifications.filter(n=>!(n.kind==='like'&&n.actor===role&&n.commentId===id));}else{data.notifications.unshift({id:newId('n'),kind:'like',actor:role,recipient:c.author,commentId:id,time:'刚刚'});}}save();recordScroll();render();}
function bindApp(){bindCommentMenus();app.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const id=el.dataset.id;switch(el.dataset.action){case'palm-dm-select':openPalmDM(id,true);break;case'palm-dm':openPalmDM(id);break;case'play-palm-dm':playPalmDM(el);break;case'palm-source':openPalmSource(id);break;case'palm':togglePalm(id,{source:'tap'});break;case'participants':openParticipants(id);break;case'respond':openEditor(id,true);break;case'open-notification':openNotification(id);break;case'back':goBack();break;case'navigate':navigate(el.dataset.page);break;case'compose':openEditor();break;case'reply':openEditor(id);break;case'chat':navigate('chat',{peer:el.dataset.peer});break;case'open-note':navigate('note',{target:id});break;case'to-comments':document.getElementById('comments')?.scrollIntoView({block:'start',behavior:'instant'});break;case'expand':recordScroll();expanded.has(id)?expanded.delete(id):expanded.add(id);render();break;case'comment-like':toggleCommentLike(id);break;case'note-like':recordScroll();toggleList(data.noteLikes,role);save();render();break;case'note-save':recordScroll();toggleList(data.noteSaves,role);save();render();break;case'follow':recordScroll();toggleList(data.follows,role);save();render();break;case'emoji':{const t=document.getElementById('chat-text');if(t){t.value+=el.dataset.emoji;drafts.set('chat:'+role+':'+chatPeer,t.value);updateChatInput();t.focus();}break;}case'share':showToast('演示原型暂未模拟分享');break;case'unavailable':showToast('已保留入口，本轮暂未模拟');break;}}));app.querySelectorAll('[data-notification]').forEach(el=>{const open=()=>{const n=data.notifications.find(n=>n.id===el.dataset.notification);if(n)openNotification(n.id);};el.addEventListener('click',open);el.addEventListener('keydown',e=>{if(e.target===el&&(e.key==='Enter'||e.key===' ')){e.preventDefault();open();}});});const text=document.getElementById('chat-text');if(text){text.addEventListener('input',()=>{drafts.set('chat:'+role+':'+chatPeer,text.value);updateChatInput();});text.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();sendMessage(text.value);}});document.getElementById('chat-form').addEventListener('submit',e=>{e.preventDefault();sendMessage(text.value);});updateChatInput();}}
function updateChatInput(){const t=document.getElementById('chat-text');if(!t)return;const ready=!!t.value.trim();document.getElementById('chat-send').hidden=!ready;document.getElementById('chat-plus').hidden=ready;t.style.height='27px';t.style.height=Math.min(t.scrollHeight,100)+'px';}
function sendMessage(text){const value=text.trim();if(!value||value.length>2000)return false;const key=keyChat(role,chatPeer);(data.chats[key]??=[]).push({id:newId('m'),sender:role,text:value,time:timeNow()});drafts.delete('chat:'+role+':'+chatPeer);save();render();document.getElementById('chat-text')?.focus();return true;}
function timeNow(){return new Intl.DateTimeFormat('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());}
function openEditor(id=null,respond=false,editing=false){
 const target=findComment(id);if(id&&!target){showToast('原评论已删除');return;}
 if(editing&&target?.author!==role)return;
 const editorRoot=document.getElementById('editor-root'),underlay=respond?editorRoot.querySelector('.participants-sheet'):null,stacked=underlay?.dataset.commentId===id;
 let root=editorRoot,restoreKeys=null;
 if(stacked){restoreKeys=editorRoot.onkeydown;editorRoot.onkeydown=null;underlay.closest('.composer-overlay').inert=true;underlay.closest('.composer-overlay').setAttribute('aria-hidden','true');underlay.setAttribute('aria-modal','false');root=document.createElement('div');root.className='response-editor-layer';editorRoot.append(root);}else closeEditor();
 const dismiss=()=>{if(!stacked){closeEditor();return;}root.remove();const backdrop=underlay.closest('.composer-overlay');backdrop.inert=false;backdrop.removeAttribute('aria-hidden');underlay.setAttribute('aria-modal','true');editorRoot.onkeydown=restoreKeys;replyTarget=null;underlay.querySelector('#respond-participants')?.focus();};
 replyTarget=id;const draftKey=role+':'+(editing?'edit:':'')+(id||'new');
 const responding=!editing&&target?.palm&&target.author===role;
 const participants=responding?[...new Set(target.palm.participants)].filter(person=>person!==role&&PEOPLE[person]):[],canNotify=responding&&participants.length>0&&target.palm.status==='open';
 root.innerHTML=`<div class="composer-overlay"><form class="composer comment-composer" role="dialog" aria-modal="true" aria-label="${editing?'编辑评论':responding?'回应大家':target?'回复评论':'发表评论'}"><textarea id="comment-text" aria-label="${editing?'评论内容':target?'回复内容':'评论内容'}" maxlength="2000" placeholder="${target&&!editing?'回复 @'+PEOPLE[target.author].name:'说点什么...'}">${esc(drafts.get(draftKey)??(editing?target.text:responding?'原来这么多同好！我周六下午准备再去，回来给大家分享几条适合新手的线路～':''))}</textarea><div class="composer-footer"><button type="button" id="comment-voice" aria-label="语音评论">${icon('mic',24)}</button><button type="button" id="comment-image" aria-label="添加图片">${icon('image',24)}</button><button type="button" id="comment-mention" class="mention-icon" aria-label="提及用户">${icon('at',24)}</button><button type="button" id="comment-emoji" aria-label="评论表情">${icon('smile',25)}</button><button type="button" id="comment-plus" aria-label="更多评论选项">${icon('plus',24)}</button>${!target?`<label class="palm-toolbar-toggle" title="邀请击掌"><input id="leave-palm" type="checkbox" role="switch" aria-label="邀请击掌"><span aria-hidden="true">${menuGlyph('hand',24)}</span></label>`:''}<span class="counter" id="comment-counter" hidden></span><button class="send" id="send-comment" disabled>${editing?'保存':'发送'}</button></div>${canNotify?`<label class="palm-reminder"><input id="notify-palm" type="checkbox" ${respond?'checked':''}>通知击掌的人</label>`:''}<div class="composer-emoji-strip">${['😂','😭','😡','🥰','😘','🥳','😤','🥺'].map(emoji=>`<button type="button" data-comment-emoji="${emoji}" aria-label="添加${emoji}">${emoji}</button>`).join('')}</div></form></div>`;
 if(respond&&canNotify){const form=root.querySelector('form');form.classList.add('group-response-composer');form.insertAdjacentHTML('afterbegin',`<div class="response-recipients"><span>回应给：</span><div class="response-recipient-avatars">${participants.map(person=>avatar(person)).join('')}</div></div>`);const reminder=root.querySelector('.palm-reminder');reminder.hidden=true;document.getElementById('notify-palm').checked=true;}
 const text=document.getElementById('comment-text'),toggle=document.getElementById('leave-palm');
 const update=()=>{drafts.set(draftKey,text.value);document.getElementById('send-comment').disabled=!text.value.trim();document.getElementById('comment-counter').textContent=`${text.value.length} / 2000`;};
 if(toggle)toggle.onchange=()=>{if(toggle.checked&&!text.value.trim())text.value='有没有也喜欢一个人去攀岩的？最近刚开始，想交流一下新手线路～';update();};
 text.addEventListener('input',update);root.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const success=editing?editComment(id,text.value):publishComment(text.value,{leavePalm:!!toggle?.checked,responding,notify:!!document.getElementById('notify-palm')?.checked});if(success)drafts.delete(draftKey);});
 root.querySelector('.composer-overlay').addEventListener('click',e=>{if(e.target.classList.contains('composer-overlay'))dismiss();});
 const insert=value=>{const start=text.selectionStart,end=text.selectionEnd;text.setRangeText(value,start,end,'end');update();text.focus();};
 if(document.getElementById('comment-emoji'))document.getElementById('comment-emoji').onclick=()=>insert('😊');if(document.getElementById('comment-mention'))document.getElementById('comment-mention').onclick=()=>insert('@');root.querySelectorAll('[data-comment-emoji]').forEach(button=>button.onclick=()=>insert(button.dataset.commentEmoji));
 if(document.getElementById('comment-image'))document.getElementById('comment-image').onclick=()=>showToast('本轮仅模拟文字评论');if(document.getElementById('comment-voice'))document.getElementById('comment-voice').onclick=()=>showToast('本轮仅模拟文字评论');if(document.getElementById('comment-plus'))document.getElementById('comment-plus').onclick=()=>showToast('本轮仅模拟文字评论');
 root.onkeydown=e=>{if(stacked)e.stopPropagation();if(e.key==='Escape')dismiss();if(e.key==='Tab'){const nodes=[...root.querySelectorAll('button:not(:disabled),textarea,input:not(:disabled)')];if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0].focus();}}};update();text.focus();
}
function editComment(id,text){const c=findComment(id),value=text.trim();if(!c||c.author!==role||!value||value.length>2000)return false;c.text=value;c.time='刚刚';save();closeEditor();if(page.name!=='note')navigate('note',{target:id});else render({target:id});showToast('评论已更新');return true;}

function closeEditor(){const root=document.getElementById('editor-root');root.innerHTML='';root.onkeydown=null;replyTarget=null;}
function publishComment(text,options={}){
 const value=text.trim();if(!value||value.length>2000)return false;
 const target=findComment(replyTarget);if(replyTarget&&!target){showToast('原评论已删除');return false;}
 const c={id:newId('c'),author:role,text:value,time:'刚刚',place:role==='lin'?'浙江':'上海',baseLikes:0,likedBy:[]};
 if(target){c.parent=target.parent||target.id;c.replyTo=target.id;expanded.add(c.parent);
 if(options.notify&&target.palm&&target.author===role&&target.palm.status==='open'){
 const recipients=[...new Set(target.palm.participants)].filter(person=>person!==role&&PEOPLE[person]);
 if(recipients.length){c.palmNotified=recipients;for(const person of recipients)data.notifications.unshift({id:newId('n'),kind:'palm-response',actor:role,recipient:person,commentId:c.id,refId:target.id,time:'刚刚'});}
 }else if(target.author!==role)data.notifications.unshift({id:newId('n'),kind:'reply',actor:role,recipient:target.author,commentId:c.id,refId:target.id,time:'刚刚'});
 }else{if(options.leavePalm)c.palm={status:'open',participants:[],history:[]};data.notifications.unshift({id:newId('n'),kind:'reply',actor:role,recipient:'cheng',commentId:c.id,time:'刚刚'});}
 data.comments.push(c);drafts.delete(role+':'+(replyTarget||'new'));save();closeEditor();if(page.name!=='note')navigate('note',{target:c.id});else{recordScroll();render({target:c.id});}showToast(target?'回复已发布':'评论已发布');return true;
}

function palmHistory(c){return [...new Set([...(c.palm?.history||[]),...(c.palm?.historyParticipants||[]),...(c.palm?.participants||[])])];}
function palmStatusIcon(filled=false){return icon('hand',18,filled).replace('class="phosphor-icon"',`class="phosphor-icon palm-status-icon" data-filled="${filled}"`);}
function renderPalm(c){
 const p=c.palm,own=c.author===role,joined=p.participants.includes(role),closed=p.status!=='open';
 const people=closed?palmHistory(c):p.participants,count=people.length;
 if(closed&&!count)return '';
 const stack=count?`<span class="palm-avatar-stack" aria-hidden="true">${people.slice(0,3).map(person=>avatar(person,'palm-avatar')).join('')}</span>`:'';
 const label=closed?`${count}人曾击掌`:`${count}人击掌`;
 if(own)return `<div class="palm-row" id="palm-${c.id}">${count?`<button class="palm-count" data-action="participants" data-id="${c.id}">${stack}<span>${label}</span></button>`:'<span class="palm-owner-state">已邀请击掌</span>'}</div>`;
 return `<div class="palm-row" id="palm-${c.id}">${!closed?`<button class="palm-mark ${joined?'palm-cancel':'palm-join'}" data-action="palm" data-id="${c.id}" aria-label="${joined?'取消击掌':'击掌'}" aria-pressed="${joined}">${palmStatusIcon(joined)}</button>`:''}<span class="palm-status ${joined&&!closed?'joined':''}">${stack}<span>${joined&&!closed?`已击掌 · ${count}人`:label}</span></span></div>`;
}
function canJoinPalm(c){return !!c?.palm&&c.author!==role&&c.palm.status==='open'&&!c.palm.participants.includes(role);}
function togglePalm(id,options={}){
 const c=findComment(id);if(!c?.palm||c.author===role||activePalmMotion?.host?.classList.contains('colliding'))return false;
 const joined=c.palm.participants.includes(role);
 if(options.joinOnly&&joined||!joined&&c.palm.status!=='open')return false;
 const before=structuredClone(data),actingRole=role,firstSuccess=!joined&&!data.palmSuccessHints?.[role];c.palm.history=palmHistory(c);
 toggleList(c.palm.participants,role);
 if(!joined){
  c.palm.history=[...new Set([...c.palm.history,role])];
  let n=data.notifications.find(n=>n.kind==='palm'&&n.commentId===id);
  if(!n){n={id:newId('n'),kind:'palm',recipient:c.author,commentId:id,actors:[]};data.notifications.unshift(n);}
  n.actors=[...new Set([...(n.actors||[n.actor]).filter(Boolean),role])];n.actor=role;n.time='刚刚';
 }
 if(!joined){
  (data.palmSuccessHints??={})[role]=true;
  (data.palmHints??={})[role]=true;
  if(options.source==='tap'){
   if(!data.palmTapLearning?.[role])(data.palmTapLearning??={})[role]={commentId:id,notBefore:Date.now()+2400};
  }
  if(options.source==='swipe')(data.palmSwipeHints??={})[role]=true;
 }
 // Cancellation keeps previously delivered notifications and all conversations intact.
 try{localStorage.setItem(STORAGE,JSON.stringify(data));}catch{data=before;showToast('击掌未提交成功，请重试');return false;}
 if(!options.deferRender){recordScroll();if(joined)render();else animatePalmCollision(id,()=>{if(role===actingRole)render();});}
 if(joined)showToast('已取消击掌');else setTimeout(()=>{if(role===actingRole)showToast(firstSuccess?'对方回应大家时，会通知你。':'已击掌');},560);return true;
}
const PALM_SWIPE_THRESHOLD=88;
let activePalmMotion;
function clearPalmMotion(){if(activePalmMotion){cancelAnimationFrame(activePalmMotion.effectFrame);activePalmMotion.effectPlayer?.destroy();activePalmMotion.layer.remove();activePalmMotion.host?.classList.remove('colliding','swipe-collision');activePalmMotion=null;}}
function mountPalmContact(motion,g,contactX,reduced){
 if(reduced)return;
 const size=g.size*1.9,effect=document.createElement('div');effect.className='palm-contact-lottie';effect.style.cssText=`left:${contactX-size/2}px;top:${g.y-size+8}px;width:${size}px;height:${size}px`;
 motion.layer.append(effect);
 const rays=document.createElement('div');rays.className='palm-contact-rays';rays.style.left=contactX+'px';rays.style.top=(g.y-size*.45)+'px';rays.innerHTML='<i></i><i></i><i></i>';motion.layer.append(rays);
 if(!window.lottie||typeof HIGH_FIVE_ANIMATION==='undefined')return;
 const animationData=structuredClone(HIGH_FIVE_ANIMATION);animationData.layers=animationData.layers.filter(layer=>layer.nm!=='Background');
 const player=motion.effectPlayer=window.lottie.loadAnimation({container:effect,renderer:'svg',loop:false,autoplay:false,animationData,rendererSettings:{preserveAspectRatio:'xMidYMid meet'}});
 const start=performance.now();
 const tick=now=>{if(activePalmMotion!==motion)return;const elapsed=now-start;
  // First contact is frame 15.3. Hold it with compression, then use only the first recoil.
  const frame=elapsed<190?15.3*elapsed/190:elapsed<241?15.3:Math.min(27.6,15.3+(elapsed-241)/89*12.3);
  if(player.isLoaded)player.goToAndStop(frame,true);
  if(elapsed<560)motion.effectFrame=requestAnimationFrame(tick);
 };motion.effectFrame=requestAnimationFrame(tick);
}
function palmGeometry(host,dx=0){
 const phone=document.querySelector('.phone').getBoundingClientRect(),source=host.querySelector('.comment-swipe-surface>.avatar'),rect=source.getBoundingClientRect(),base=host.getBoundingClientRect();
 return {x:(rect.width?rect.left:base.left+dx)-phone.left,y:(rect.width?rect.top:base.top)-phone.top,size:rect.width||(source.classList.contains('small')?24:39)};
}
function createPalmMotion(host){
 clearPalmMotion();const layer=document.createElement('div');layer.className='palm-motion-layer';layer.setAttribute('aria-hidden','true');layer.innerHTML='<div class="palm-avatar-unit unit-b">'+avatar(role,'collision-b')+'</div>'+'<span class="palm-drag-prompt palm-release-prompt" hidden>松手击掌</span>';document.querySelector('.phone').append(layer);
 activePalmMotion={host,layer,b:layer.querySelector('.unit-b'),releasePrompt:layer.querySelector('.palm-release-prompt')};return activePalmMotion;
}
function updatePalmDrag(host,motion,dx){
 const g=palmGeometry(host,dx),base=g.x-dx,entry=g.size+21,travel=entry*Math.min(1,dx/PALM_SWIPE_THRESHOLD);
 motion.g=g;motion.base=base;motion.bx=base-entry+travel;const b=motion.b;b.style.left=base+'px';b.style.top=g.y+'px';b.style.width=b.style.height=g.size+'px';b.style.transform=`translateX(${travel-entry}px)`;
 const progress=Math.min(1,dx/PALM_SWIPE_THRESHOLD),settled=dx>=PALM_SWIPE_THRESHOLD;
 motion.ready=settled;
 b.style.filter=`blur(${(4*(1-progress)).toFixed(2)}px)`;
 const release=motion.releasePrompt;
 const position=motion.promptPosition??={releaseX:base+g.size+8,y:g.y+g.size/2};
 // The release prompt keeps a fixed anchor beside the fully revealed avatar.
 release.hidden=!settled;
 release.style.left=position.releaseX+'px';release.style.top=position.y+'px';release.dataset.phase='settled';


}
function retreatPalmMotion(host,motion){
 if(!motion)return;motion.releasePrompt.hidden=true;const g=motion.g||palmGeometry(host);motion.b.style.transition='transform .28s cubic-bezier(.2,.8,.2,1)';motion.b.style.transform=`translateX(${-g.size-21}px)`;
 setTimeout(()=>{if(activePalmMotion===motion)clearPalmMotion();},290);
}
function animatePalmCollision(id,finish=()=>{},distance=0,motion=null){
 const host=app.querySelector(`[data-swipe-comment="${id}"]`),c=findComment(id);if(!host||!c){finish();return;}
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 motion??=createPalmMotion(host);const g=palmGeometry(host,distance),swiped=distance>0;
 const base=motion.base??g.x-distance,bstart=motion.bx??base-g.size-21;
 const bhit=swiped?base+2:Math.max(0,base-g.size+2),ahit=bhit+g.size-2;
 motion.releasePrompt.hidden=true;motion.b.style.filter='';
 const layer=motion.layer;layer.classList.add('palm-collision');host.classList.add('colliding');host.classList.toggle('swipe-collision',swiped);
 for(const [key,value] of Object.entries({'b-start':bstart,'a-start':g.x,'b-hit':bhit,'a-hit':ahit,'a-rest':base,'b-exit':base-g.size-21}))layer.style.setProperty('--'+key,value+'px');
 host.style.setProperty('--swipe-distance',distance+'px');layer.style.setProperty('--avatar-size',g.size+'px');
 const b=motion.b;b.style.left='0';b.style.top=g.y+'px';b.style.width=b.style.height=g.size+'px';b.style.transform='';b.classList.add('avatar-hit-b');
 layer.insertAdjacentHTML('beforeend',`<div class="palm-avatar-unit unit-a avatar-hit-a">${avatar(c.author,'collision-a')}</div>`);
 const a=layer.querySelector('.unit-a');a.style.top=g.y+'px';a.style.width=a.style.height=g.size+'px';
 mountPalmContact(motion,g,bhit+g.size-1,reduced);
 setTimeout(()=>{if(activePalmMotion!==motion||!host.isConnected)return;const row=host.querySelector('.palm-row');if(row){row.outerHTML=renderPalm(c);const control=host.querySelector('.palm-mark[data-action="palm"]');if(control)control.onclick=e=>{e.stopPropagation();togglePalm(id,{source:'tap'});};}},reduced?10:350);
 setTimeout(()=>{if(activePalmMotion===motion)clearPalmMotion();host.classList.remove('colliding','swipe-collision');finish();},reduced?20:560);
}
function openNotification(id){const n=data.notifications.find(n=>n.id===id);if(!n)return;if(!findComment(n.commentId)){navigate('note');showToast('原评论已删除');return;}navigate('note',{target:n.commentId});}
function openSheet(title,body,half=false){closeEditor();const root=document.getElementById('editor-root');root.innerHTML=`<div class="composer-overlay"><section class="composer palm-sheet ${half?'comment-actions-sheet':''}" role="dialog" aria-modal="true" aria-label="${title}">${half?'<div class="sheet-fixed-top"><div class="sheet-handle" aria-hidden="true"></div></div>':`<div class="composer-head"><span>${title}</span><button id="close-sheet" class="close">关闭</button></div>`}${half?`<div class="sheet-scroll-body">${body}</div>`:body}</section></div>`;const close=document.getElementById('close-sheet');if(close)close.onclick=closeEditor;root.querySelector('.composer-overlay').onclick=e=>{if(e.target.classList.contains('composer-overlay'))closeEditor();};root.onkeydown=e=>{if(e.key==='Escape')closeEditor();if(e.key==='Tab'){const nodes=[...root.querySelectorAll('button:not(:disabled),input:not(:disabled)')];if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0].focus();}}};root.querySelector('button')?.focus();}
let palmHintObserver,palmSwipeHintObserver;
function bindCommentMenus(){
 palmHintObserver?.disconnect();palmSwipeHintObserver?.disconnect();
 app.querySelectorAll('[data-swipe-comment]').forEach(host=>{
 const id=host.dataset.swipeComment,surface=host.querySelector('.comment-swipe-surface'),reveal=host.querySelector('.swipe-reveal'),label=reveal.querySelector('span');
 let timer,start,dragging=false,blocked=false,dx=0,suppressUntil=0,motion;
 const cancelHold=()=>{clearTimeout(timer);timer=null;};
 const reset=()=>{cancelHold();start=null;dragging=false;dx=0;host.classList.remove('dragging','swipe-ready');surface.style.transform='';reveal.style.opacity='';retreatPalmMotion(host,motion);motion=null;};
 const menu=()=>{reset();suppressUntil=Date.now()+700;openPalmMenu(id);};
 host.addEventListener('pointerdown',e=>{
  if(e.button!==0||e.isPrimary===false||(host.classList.contains('colliding')||activePalmMotion)||e.target.closest('button,a,input,textarea')||e.target.closest('img')&&!e.target.matches('.comment-swipe-surface>.avatar'))return;
  cancelHold();start={x:e.clientX,y:e.clientY,pointer:e.pointerId,swipe:!!(e.target.closest('.comment-name,.comment-text')||e.target.matches('.comment-swipe-surface>.avatar'))};dragging=false;blocked=false;dx=0;
  timer=setTimeout(()=>{if(host.isConnected){menu();}},500);
 });
 host.addEventListener('pointermove',e=>{
  if(!start||e.pointerId!==start.pointer)return;
  const x=e.clientX-start.x,y=e.clientY-start.y;
  if(Math.hypot(x,y)>8)cancelHold();
  if(blocked)return;
  if(!dragging){if(Math.max(Math.abs(x),Math.abs(y))<10)return;
   if(!start.swipe||x<=0||Math.abs(x)<Math.abs(y)*1.4||!canJoinPalm(findComment(id))){blocked=true;return;}
   dragging=true;app.querySelectorAll('.palm-swipe-hint').forEach(hint=>hint.remove());palmHintObserver?.disconnect();palmSwipeHintObserver?.disconnect();host.classList.add('dragging');motion=createPalmMotion(host);host.setPointerCapture?.(e.pointerId);
  }
  e.preventDefault();dx=Math.max(0,Math.min(136,x));surface.style.transform=`translateX(${dx}px)`;
  updatePalmDrag(host,motion,dx);reveal.style.opacity='0';host.classList.toggle('swipe-ready',motion.ready);label.textContent=motion.ready?'松手击掌':'';
 },{passive:false});
 host.addEventListener('pointerup',e=>{
  if(!start||e.pointerId!==start.pointer)return;
  cancelHold();const submit=dragging&&motion?.ready,distance=dx;const didDrag=dragging;start=null;
  if(didDrag)suppressUntil=Date.now()+500;
  if(!submit){reset();return;}
  if(!togglePalm(id,{joinOnly:true,deferRender:true,source:'swipe'})){reset();return;}
  host.querySelector('.palm-swipe-hint')?.remove();
  const currentRole=role;animatePalmCollision(id,()=>{motion=null;reset();if(host.isConnected&&role===currentRole){recordScroll();render();}},distance,motion);
 });
 host.addEventListener('pointercancel',reset);
 host.addEventListener('lostpointercapture',()=>{if(start)reset();});
 host.addEventListener('pointerleave',()=>{if(!dragging){cancelHold();start=null;}});
 host.addEventListener('click',e=>{if(Date.now()<suppressUntil){e.preventDefault();e.stopImmediatePropagation();}},true);
 host.addEventListener('contextmenu',e=>{if(e.target.closest('a,img'))return;e.preventDefault();if(dragging||host.classList.contains('colliding'))return;menu();});
 host.addEventListener('keydown',e=>{if(e.key==='ContextMenu'||e.key==='F10'&&e.shiftKey){e.preventDefault();menu();}});
 });
 if(!data.palmHints?.[role]){
  const first=[...app.querySelectorAll('[data-swipe-comment]')].find(el=>canJoinPalm(findComment(el.dataset.swipeComment)));
  if(first){const hint=document.createElement('div');hint.className='palm-swipe-hint';hint.textContent='有共鸣？击个掌';first.querySelector('.palm-row').append(hint);
   const mark=()=>{if(!hint.isConnected)return;hint.classList.add('is-visible');(data.palmHints??={})[role]=true;save();palmHintObserver?.disconnect();setTimeout(()=>{hint.classList.remove('is-visible');setTimeout(()=>hint.remove(),180);},3200);};
   if(window.IntersectionObserver){palmHintObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))mark();},{root:app.querySelector('.scroll'),threshold:.5});palmHintObserver.observe(first.querySelector('.palm-mark[data-action="palm"]'));}else mark();
  }
 }
 bindSwipeDiscovery();
}

function bindSwipeDiscovery(){
 const reader=role,lesson=data.palmTapLearning?.[reader];
 if(!lesson||data.palmSwipeHints?.[reader]||!window.IntersectionObserver)return;
 const candidates=[...app.querySelectorAll('[data-swipe-comment]')].filter(host=>host.dataset.swipeComment!==lesson.commentId&&canJoinPalm(findComment(host.dataset.swipeComment)));
 if(!candidates.length)return;
 const armed=new Map();
 palmSwipeHintObserver=new IntersectionObserver(entries=>{
  for(const entry of entries){
   const host=entry.target,id=host.dataset.swipeComment;
   if(!entry.isIntersecting){armed.set(host,true);continue;}
   // Already-visible comments at binding time are not a new encounter.
   if(!armed.get(host)){armed.set(host,false);continue;}
   armed.set(host,false);
   if(role!==reader||Date.now()<lesson.notBefore||activePalmMotion||data.palmSwipeHints?.[reader]||!canJoinPalm(findComment(id)))continue;
   app.querySelectorAll('.palm-swipe-hint').forEach(hint=>hint.remove());
   const hint=document.createElement('div');hint.className='palm-swipe-hint palm-gesture-hint';hint.textContent='试试右滑评论击掌 →';host.querySelector('.comment-text').append(hint);
   hint.classList.add('is-visible');(data.palmSwipeHints??={})[reader]=true;save();palmSwipeHintObserver.disconnect();
   setTimeout(()=>{hint.classList.remove('is-visible');setTimeout(()=>hint.remove(),180);},3200);break;
  }
 },{root:app.querySelector('.scroll'),threshold:.6});
 candidates.forEach(host=>palmSwipeHintObserver.observe(host));
}

function openParticipants(id){const c=findComment(id);if(!c?.palm||c.author!==role)return;const people=c.palm.status==='open'?c.palm.participants:palmHistory(c),canRespond=c.palm.status==='open'&&c.palm.participants.some(person=>person!==role&&PEOPLE[person]);openSheet(`${people.length}人${c.palm.status==='open'?'':'曾'}击掌`,(people.map(person=>`<div class="palm-person">${avatar(person)}<span>${PEOPLE[person].name}</span></div>`).join('')||'<div class="empty">暂无击掌</div>')+(canRespond?'<button class="participants-respond" id="respond-participants">回应大家</button>':''),true);const sheet=document.querySelector('.comment-actions-sheet');sheet.classList.add('participants-sheet');sheet.dataset.commentId=id;const respond=document.getElementById('respond-participants');if(respond){const footer=document.createElement('div');footer.className='participants-footer';footer.append(respond);sheet.append(footer);respond.onclick=()=>openEditor(id,true);}}

function menuGlyph(name,size=23){return icon(name,size);}
function openPalmMenu(id){
 const c=findComment(id);if(!c)return;const own=c.author===role,joined=c.palm?.participants.includes(role);
 const row=(name,text,key,extra='')=>`<button class="palm-menu-action ${extra}" id="${key}">${menuGlyph(name)}<span>${text}</span></button>`;
 openSheet('评论操作',`<div class="sheet-share-people">${Object.keys(PEOPLE).filter(p=>p!==role).map(p=>`<button data-sheet-peer="${p}">${avatar(p)}<span>${PEOPLE[p].name}</span></button>`).join('')}</div><div class="comment-action-group share-actions">${row('wechat','分享到微信','menu-wechat')}${row('chat-teardrop','问点点','menu-ask')}${row('search','搜索','menu-search')}</div>${own?`<div class="comment-action-group palm-setting-group"><label class="palm-setting-row">${menuGlyph('hand')}<span>邀请击掌</span><input id="toggle-palm-type" type="checkbox" role="switch" aria-label="邀请击掌" ${c.palm?.status==='open'?'checked':''}><i class="setting-switch" aria-hidden="true"></i></label></div>`:c.palm&&(joined||c.palm.status==='open')?`<div class="comment-action-group">${row('hand',joined?'取消击掌':'击掌','menu-palm')}</div>`:''}<div class="comment-action-group regular-actions">${row('chat','回复','menu-reply')}${row('star',c.savedBy?.includes(role)?'取消收藏':'收藏','menu-save')}${row('copy','复制','menu-copy')}${row('quote','引用发笔记','menu-quote')}${row('send','私信','menu-private')}</div><div class="comment-action-group">${own?row('pen','编辑评论','edit-comment')+row('delete','删除评论','delete-palm','danger'):row('heart',c.likedBy.includes(role)?'取消点赞':'点赞','menu-like')+row('neutral','不喜欢','menu-dislike')+row('report','举报','menu-report')}</div>`,true);
 document.getElementById('menu-reply').onclick=()=>openEditor(id);
 const edit=document.getElementById('edit-comment');if(edit)edit.onclick=()=>openEditor(id,false,true);
 const type=document.getElementById('toggle-palm-type');if(type)type.onchange=()=>setPalmType(id,type.checked,{keepSheet:true});
 const remove=document.getElementById('delete-palm');if(remove)remove.onclick=()=>deletePalm(id);
 const like=document.getElementById('menu-like');if(like)like.onclick=()=>{closeEditor();toggleCommentLike(id);};
 const palm=document.getElementById('menu-palm');if(palm)palm.onclick=()=>{closeEditor();togglePalm(id);};
 document.getElementById('menu-save').onclick=()=>{c.savedBy??=[];toggleList(c.savedBy,role);save();openPalmMenu(id);};
 document.getElementById('menu-copy').onclick=async()=>{try{await navigator.clipboard.writeText(c.text);showToast('评论已复制');}catch{showToast('当前浏览器暂不支持复制');}};
 document.getElementById('menu-private').onclick=()=>{if(c.author===role)showToast('这是你自己的评论');else navigate('chat',{peer:c.author});};
 document.querySelectorAll('[data-sheet-peer]').forEach(el=>el.onclick=()=>navigate('chat',{peer:el.dataset.sheetPeer}));
 for(const key of ['menu-wechat','menu-ask','menu-search','menu-quote','menu-dislike','menu-report']){const el=document.getElementById(key);if(el)el.onclick=()=>showToast('已保留入口，本轮暂未模拟');}
}
function setPalmType(id,enabled,options={}){
 const c=findComment(id);if(!c||c.author!==role)return false;
 const before=structuredClone(data),scroll=document.querySelector('.comment-actions-sheet')?.scrollTop||0;c.palm??={status:'open',participants:[],history:[]};c.palm.history=palmHistory(c);
 if(!enabled&&!c.palm.history.length)delete c.palm;else c.palm.status=enabled?'open':'closed';
 try{localStorage.setItem(STORAGE,JSON.stringify(data));}catch{data=before;showToast('设置未保存，请重试');return false;}
 closeEditor();recordScroll();render();if(options.keepSheet){openPalmMenu(id);document.querySelector('.comment-actions-sheet').scrollTop=scroll;}
 showToast(enabled?'已开启邀请击掌':c.palm?'已关闭击掌，历史记录与交流已保留':'已恢复普通评论');return true;
}
function endPalm(id){return setPalmType(id,false);}
function deletePalm(id){const c=findComment(id);if(!c||c.author!==role)return false;c.deleted=true;if(c.palm)c.palm.status='closed';save();closeEditor();recordScroll();render();showToast(c.palm?'评论已删除，击掌已失效':'评论已删除');return true;}


// Private palm replies are chat messages, never interaction notifications.
function findPalmDM(commentId,person){return (data.chats[keyChat(role,person)]||[]).find(m=>m.kind==='palm-dm'&&m.commentId===commentId&&m.sender===role&&m.recipient===person);}
function palmDMIcon(sent){return sent?icon('send',16):`<span class="palm-dm-symbol" aria-hidden="true">${icon('hand',16)}</span>`;}
function renderPalmDMAction(n){
 const sent=(n.actors||[n.actor]).some(person=>findPalmDM(n.commentId,person));
 if(!findComment(n.commentId)&&!sent)return '';
 const multiple=(n.actors||[n.actor]).length>1;
 return `<div class="notification-actions palm-dm-actions"><button class="pill" data-action="palm-dm" data-id="${n.id}" aria-label="${sent?'查看已有私信会话':multiple?'选择一位参与者，发送击掌私信':'向'+PEOPLE[n.actor].name+'发送击掌私信'}">${palmDMIcon(sent)}${sent?'查看私信':'私信击掌'}</button>${sent&&multiple?`<button class="palm-dm-other" data-action="palm-dm-select" data-id="${n.id}">选择其他人</button>`:''}</div>`;
}
function openPalmDM(notificationId,choose=false){
 const n=data.notifications.find(n=>n.id===notificationId);
 if(!n||n.kind!=='palm'||n.recipient!==role)return false;
 const actors=[...new Set(n.actors||[n.actor])].filter(person=>PEOPLE[person]&&person!==role);
 const existingPeer=actors.includes(n.privatePeer)&&findPalmDM(n.commentId,n.privatePeer)?n.privatePeer:actors.find(person=>findPalmDM(n.commentId,person));
 if(existingPeer&&!choose){navigate('chat',{peer:existingPeer});return true;}
 if(actors.length===1)return sendPalmDM(n.commentId,actors[0]);
 if(!actors.length)return false;
 openSheet('选择私信击掌的参与者',`<p class="palm-help">只向你选择的人发送一条击掌私信。</p>${actors.map(person=>{const sent=findPalmDM(n.commentId,person),available=!!findComment(n.commentId);return `<div class="palm-dm-person">${avatar(person)}<span>${PEOPLE[person].name}</span><button class="pill" data-private-peer="${person}" ${!available&&!sent?'disabled':''}>${palmDMIcon(sent)}${sent?'查看私信':'私信击掌'}</button></div>`;}).join('')}`);
 document.getElementById('editor-root').querySelectorAll('[data-private-peer]').forEach(button=>button.onclick=()=>sendPalmDM(n.commentId,button.dataset.privatePeer));return true;
}
function sendPalmDM(commentId,person){
 const existing=findPalmDM(commentId,person);
 if(existing){rememberPrivatePeer(commentId,person);navigate('chat',{peer:person});return true;}
 const c=findComment(commentId);
 if(!c?.palm||c.author!==role||person===role||!PEOPLE[person]||!c.palm.participants.includes(person)){showToast(c?'对方已取消击掌':'原评论已删除');return false;}
 const message={id:newId('m'),kind:'palm-dm',sender:role,recipient:person,commentId,text:'[击掌] 来，击个掌！',commentSummary:[...c.text].length>80?[...c.text].slice(0,80).join('')+'…':c.text,noteId:NOTE.id,noteTitle:NOTE.title,noteImage:NOTE.image,time:timeNow()};
 (data.chats[keyChat(role,person)]??=[]).push(message);rememberPrivatePeer(commentId,person);save();navigate('chat',{peer:person});showToast('已向'+PEOPLE[person].name+'发送击掌私信');return true;
}
function rememberPrivatePeer(commentId,person){const n=data.notifications.find(n=>n.kind==='palm'&&n.commentId===commentId&&n.recipient===role);if(n){n.privatePeer=person;save();}}
function renderPalmDM(m){
 const deleted=!findComment(m.commentId);
 return `<div class="palm-dm-reference"><div class="palm-dm-title">来自这条评论</div><button class="palm-dm-source" data-action="palm-source" data-id="${m.commentId}" aria-label="返回笔记并定位原评论"><img src="${esc(m.noteImage)}" alt="原笔记缩略图"><span><span class="palm-dm-quote ${deleted?'deleted-comment':''}">${deleted?'原评论已删除':esc(m.commentSummary)}</span></span></button></div><button class="palm-dm-play" data-action="play-palm-dm" data-id="${m.id}" aria-label="播放击掌动画，可点击重播"><span class="palm-dm-hands" aria-hidden="true"><span>✋</span><span>🤚</span></span><span>来，击个掌！</span></button>`;
}
function playPalmDM(button){
 if(button.classList.contains('playing'))return;
 button.classList.add('playing');
 setTimeout(()=>button.classList.remove('playing'),850);
}
function openPalmSource(id){if(findComment(id))navigate('note',{target:id});else{navigate('note');showToast('原评论已删除');}}

function showToast(msg){const t=document.getElementById('toast');clearTimeout(toastTimer);t.textContent=msg;t.classList.add('visible');toastTimer=setTimeout(()=>t.classList.remove('visible'),1800);}
function switchRole(next){if(!['lin','qing'].includes(next)||next===role)return;recordScroll();closeEditor();const previous=role;role=next;if(page.name==='chat'&&chatPeer===role){chatPeer=previous;page.peer=chatPeer;history.replaceState({prototype:true},'',`#chat/${chatPeer}`);}document.querySelectorAll('[data-role]').forEach(b=>{b.classList.toggle('selected',b.dataset.role===role);b.setAttribute('aria-pressed',String(b.dataset.role===role));});render();}
function resetDemo(){
 closeEditor();data=structuredClone(SEED);drafts.clear();expanded.clear();for(const key of Object.keys(scrollPositions))delete scrollPositions[key];
 role='lin';page={name:'note'};chatPeer='qing';save();history.replaceState({prototype:true},'','#note');
 document.querySelectorAll('[data-role]').forEach(b=>{b.classList.toggle('selected',b.dataset.role===role);b.setAttribute('aria-pressed',String(b.dataset.role===role));});render({scroll:0});showToast('已重置双方交互，恢复初始演示');
}
document.getElementById('reset-demo').onclick=resetDemo;
document.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>switchRole(b.dataset.role));document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>navigate(b.dataset.jump));
// Optional browser agent API uses the very same state and actions as the UI.
if(document.modelContext?.registerTool){const lifecycle=new AbortController();window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};register({name:'read_prototype_state',description:'Read the current simulated role, page, comments and conversation.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:()=>({role,page:page.name,comments:data.comments,chats:data.chats})});register({name:'publish_simulated_comment',description:'Publish an ordinary comment or reply into the shared frontend simulation.',inputSchema:{type:'object',properties:{text:{type:'string',minLength:1,maxLength:2000},replyTo:{type:'string'}},required:['text'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{if(!input||typeof input.text!=='string'||!input.text.trim()||input.text.length>2000||input.replyTo&&!findComment(input.replyTo))throw Error('Invalid comment or reply target');replyTarget=input.replyTo||null;publishComment(input.text);return {id:data.comments.at(-1).id,author:role};}});}
render();
