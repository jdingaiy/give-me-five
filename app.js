'use strict';
const PEOPLE={cheng:{name:'阿橙',avatar:'cheng'},lin:{name:'小林',avatar:'lin'},qing:{name:'阿青',avatar:'qing'},xia:{name:'小夏',avatar:'friend'},mei:{name:'阿栗',avatar:'mei'},zhou:{name:'小舟',avatar:'zhou'}};
const NOTE={id:'camera-note',author:'cheng',title:'终于入手新相机！带它记录日常 📷',text:'纠结了好久，终于把这台小相机带回家啦。\n轻便、好带，直出的颜色也很喜欢。今天带它去咖啡店坐了一会儿，慢慢找回认真拍照的感觉。\n大家最近都在拍什么？欢迎来评论区聊聊～',tags:'#我的新相机 #摄影日常 #相机分享',image:'assets/camera.jpg'};
const SEED={version:1,comments:[
 {id:'c1',author:'cheng',text:'最近在练习拍日常，欢迎大家在评论区交流～',time:'昨天',place:'上海',pinned:true,baseLikes:12,likedBy:[]},
 {id:'c2',author:'lin',text:'刚入手同款，周末准备去试拍！拍完回来分享样片 📷',time:'昨天',place:'浙江',baseLikes:8,likedBy:['qing','cheng']},
 {id:'r1',author:'qing',text:'我对这台也很感兴趣，想看看逆光的人像表现，蹲你的样片！',parent:'c2',replyTo:'c2',time:'昨天',place:'上海',baseLikes:3,likedBy:['lin']},
 {id:'r2',author:'lin',text:'好呀，我准备去公园拍一组，到时候回来发～',parent:'c2',replyTo:'r1',time:'昨天',place:'浙江',baseLikes:2,likedBy:['qing']},
 {id:'r3',author:'qing',text:'太好了！我最近也在纠结要不要入手，等你分享。',parent:'c2',replyTo:'r2',time:'2小时前',place:'上海',baseLikes:1,likedBy:[]},
 {id:'c3',author:'qing',text:'这个大小看起来很适合随身带，想问问日常拍照续航怎么样？',time:'昨天',place:'上海',baseLikes:5,likedBy:['lin','cheng']},
 {id:'r4',author:'cheng',text:'我一天随手拍下来够用，不过出门旅行还是会带一块备用电池。',parent:'c3',replyTo:'c3',time:'昨天',place:'上海',baseLikes:4,likedBy:[]},
 {id:'r5',author:'lin',text:'我准备周末实测一下续航，拍完也回来反馈！',parent:'c3',replyTo:'c3',time:'3小时前',place:'浙江',baseLikes:1,likedBy:['qing']},
 {id:'c4',author:'lin',text:'银色真的好看，看到这篇更期待周末了。',time:'昨天',place:'浙江',baseLikes:2,likedBy:[]},
 {id:'c5',author:'qing',text:'喜欢这种随手记录生活的感觉 ☕️',time:'昨天',place:'上海',baseLikes:3,likedBy:['lin']}
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
 {id:'n13',kind:'like',actor:'lin',recipient:'qing',commentId:'c5',time:'昨天 18:10'}
],chats:{'lin-qing':[
 {id:'m1',sender:'qing',text:'在阿橙的评论区看到你也入手了同款！',time:'昨天 19:30'},
 {id:'m2',sender:'lin',text:'对呀，周末准备试拍，拍完回来分享样片。',time:'昨天 19:31'},
 {id:'m3',sender:'qing',text:'好呀，我很想看看逆光的人像效果～',time:'昨天 19:32'}
],'cheng-lin':[{id:'m4',sender:'lin',text:'你好，想问问你平时用什么模式拍日常？',time:'昨天 18:55'},{id:'m5',sender:'cheng',text:'大多用光圈优先，也会试试自动模式。先多拍，再找自己喜欢的感觉～',time:'昨天 19:02'}],
'cheng-qing':[{id:'m6',sender:'qing',text:'谢谢你分享新相机的使用感受！',time:'昨天 20:20'},{id:'m7',sender:'cheng',text:'不客气，一起记录生活 📷',time:'昨天 20:22'}]},noteLikes:[],noteSaves:[],follows:[]};
const MULTI_PALM_DEMO={id:'demo-multi-palm',author:'xia',text:'周末带相机去海边试拍，回来分享逆光样片，想看的可以击掌～',time:'1小时前',place:'福建',baseLikes:6,likedBy:[],palm:{status:'open',participants:['cheng','mei','zhou'],history:['cheng','mei','zhou']}};
SEED.comments.push(structuredClone(MULTI_PALM_DEMO));
const STORAGE='rednote-community-base-v1';
let data=structuredClone(SEED);
try{const saved=JSON.parse(localStorage.getItem(STORAGE));if(saved?.version===1&&Array.isArray(saved.comments)&&Array.isArray(saved.notifications)&&saved.chats)data=saved;}catch{}
if(!data.comments.some(c=>c.id===MULTI_PALM_DEMO.id))data.comments.push(structuredClone(MULTI_PALM_DEMO));
let role='lin',page=readRoute(),chatPeer=page.peer||'qing',replyTarget=null,toastTimer,uid=0;
const scrollPositions={},expanded=new Set(),drafts=new Map();
const app=document.getElementById('app');
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function icon(name,size=24,filled=false){
 const symbol=XHS_ICONS[name];
 if(!symbol)return fallbackIcon(name,size,filled);
 const content=symbol[filled?'filled':'outline']||symbol.outline;
 return `<svg class="xhs-icon" data-xhs-icon="${name}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${content}</svg>`;
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
function render(options={}){clearPalmMotion();app.innerHTML=({note:renderNote,messages:renderMessages,likes:()=>renderNotifications('like'),comments:()=>renderNotifications('reply'),chat:renderChat}[page.name]||renderNote)();bindApp();document.querySelectorAll('[data-jump]').forEach(b=>{b.classList.toggle('selected',b.dataset.jump===(page.name==='note'?'note':'messages'));});const s=app.querySelector('.scroll');if(s){s.scrollTop=options.scroll??scrollPositions[routeKey()]??0;if(page.name==='chat')s.scrollTop=s.scrollHeight;}if(options.target){const c=findComment(options.target);if(c?.parent&&!expanded.has(c.parent)){expanded.add(c.parent);render({target:options.target});return;}const target=document.getElementById(`comment-${options.target}`)||document.getElementById('comments');target?.scrollIntoView({block:'center',behavior:'instant'});if(target?.id.startsWith('comment-')){target.classList.add('target-comment');}}}
function renderNote(){const liked=data.noteLikes.includes(role),saved=data.noteSaves.includes(role),followed=data.follows.includes(role);return `<header class="topbar"><button class="back" data-action="back" aria-label="返回消息">${icon('back',24)}</button><div class="note-author">${avatar('cheng','top')}<span>阿橙</span></div><button class="follow ${followed?'followed':''}" data-action="follow">${followed?'已关注':'关注'}</button><button data-action="share" aria-label="分享">${icon('share',26)}</button></header><div class="scroll" id="note-scroll"><div class="note-photo-wrap"><img class="note-photo" src="${NOTE.image}" alt="阿橙的新相机，银黑色相机放在咖啡店的木桌上"></div><article class="note-body"><h1>${NOTE.title}</h1><p>${esc(NOTE.text).replaceAll('\n','<br>')}</p><div class="tags">${NOTE.tags}</div><div class="search-chip">${icon('search',16)}<span>猜你想搜&nbsp; 随身相机</span></div><div class="note-meta"><span>昨天 18:30 上海</span><button class="dislike" data-action="unavailable">${icon('neutral',14)}不喜欢</button></div></article><section class="comments" id="comments"><div class="comment-count">共 ${visibleComments().length} 条评论 ${icon('sort',15)}</div><div class="inline-input">${avatar(role)}<button data-action="compose"><span>有话要说，快来评论</span>${icon('mic',18)}${icon('image',18)}</button></div>${visibleComments().filter(c=>!c.parent).map(renderComment).join('')}</section></div><footer class="note-footer"><button class="write-trigger" data-action="compose">${icon('pen',17)}说点什么...</button><button class="stat-btn ${liked?'active':''}" data-action="note-like" aria-label="${liked?'取消赞':'点赞笔记'}" aria-pressed="${liked}">${icon('heart',27,liked)}${128+data.noteLikes.length}</button><button class="stat-btn ${saved?'active saved':''}" data-action="note-save" aria-label="${saved?'取消收藏':'收藏笔记'}" aria-pressed="${saved}">${icon('star',26,saved)}${36+data.noteSaves.length}</button><button class="stat-btn" data-action="to-comments" aria-label="查看评论">${icon('chat',27)}${visibleComments().length}</button></footer>`;}
function commentSurface(c){return `<div class="comment-swipe" data-swipe-comment="${c.id}"><div class="swipe-reveal" aria-hidden="true">${avatar(role)}<span>右滑击掌</span></div><div class="comment-swipe-surface">${avatar(c.author,c.parent?'small':'')}<div class="comment-main">${commentContent(c)}</div></div><div class="comment-fixed-meta">${commentInteractions(c)}${c.pinned?'<span class="pinned">置顶评论</span>':''}</div></div>`;}
function renderComment(c){const replies=visibleComments().filter(r=>r.parent===c.id),showAll=expanded.has(c.id),visible=showAll?replies:replies.slice(0,2);return `<article class="comment" id="comment-${c.id}">${commentSurface(c)}<div class="comment-replies">${visible.map(r=>`<div class="reply" id="comment-${r.id}">${commentSurface(r)}</div>`).join('')}${replies.length>2?`<button class="expand-replies" data-action="expand" data-id="${c.id}">${showAll?'收起回复':`展开 ${replies.length} 条回复`}</button>`:''}</div></article>`;}
function commentContent(c){const liked=c.likedBy.includes(role),to=c.replyTo&&findComment(c.replyTo);return `<div class="comment-name">${PEOPLE[c.author].name}${c.author==='cheng'?'<span class="author-badge">作者</span>':''}</div><div class="comment-text" data-comment-menu="${c.id}" tabindex="0" aria-label="${PEOPLE[c.author].name}的评论，长按打开操作">${to&&to.id!==c.parent?`<span class="reply-person">回复 ${PEOPLE[to.author].name}：</span>`:''}${esc(c.text)}</div>`;}
function commentInteractions(c){const liked=c.likedBy.includes(role);return `<div class="comment-meta"><span>${esc(c.time)} ${esc(c.place)}</span><button class="reply-action" data-action="reply" data-id="${c.id}">回复</button><button class="comment-likes ${liked?'active':''}" data-action="comment-like" data-id="${c.id}" aria-label="${liked?'取消赞':'赞'}${PEOPLE[c.author].name}的评论" aria-pressed="${liked}">${icon('heart',18,liked)}${c.baseLikes+c.likedBy.length||''}</button><button class="reaction-icon" data-action="unavailable" aria-label="评论表情">${icon('neutral',17)}</button></div>${c.palmResponse?'<span class="pinned palm-response-badge">回应了参与者</span>':''}${c.palm?renderPalm(c):''}`;}
function renderMessages(){const peer=role==='lin'?'qing':'lin';const rows=[peer,'cheng'].map(id=>{const msgs=data.chats[keyChat(role,id)]||[],last=msgs.at(-1);return `<button class="conversation-row" data-action="chat" data-peer="${id}">${avatar(id,'large')}<div class="conversation-main"><div class="conversation-heading"><span class="conversation-name">${PEOPLE[id].name}</span><span class="conversation-time">${esc(last?.time.startsWith('昨天')?'昨天':last?.time||'')}</span></div><div class="conversation-preview">${esc(last?.kind==='palm-dm'?'[击掌] 来，击个掌！':last?.text||'')}</div></div></button>`;}).join('');return `<header class="topbar messages-head"><span class="title">消息</span><div class="right"><button data-action="unavailable" aria-label="搜索消息">${icon('search',26)}</button><button data-action="unavailable" aria-label="添加会话">${icon('plus',25)}</button></div></header><div class="scroll"><div class="notification-menu"><button data-action="navigate" data-page="likes"><span class="menu-icon red">${icon('heart',28,true)}</span><span>赞和收藏</span></button><button aria-label="新增关注，保留入口样式" data-action="unavailable"><span class="menu-icon blue">${icon('person',27,true)}</span><span>新增关注</span></button><button data-action="navigate" data-page="comments"><span class="menu-icon green">${icon('chat',28,true)}</span><span>评论和@</span></button></div>${rows}<div class="conversation-row"><span class="official-avatar">${icon('official',25,true)}</span><div class="conversation-main"><div class="conversation-heading"><span class="conversation-name">活动消息</span><span class="conversation-time">昨天</span></div><div class="conversation-preview">记录生活，分享你的日常</div></div></div></div><nav class="bottom-nav" aria-label="底部导航"><button data-action="navigate" data-page="note">首页</button><button data-action="unavailable">市集</button><button class="publish-plus" data-action="unavailable" aria-label="发布笔记">${icon('add',29)}</button><button class="active" data-action="navigate" data-page="messages">消息</button><button data-action="unavailable">我</button></nav>`;}
function renderNotifications(kind){
 const list=data.notifications.filter(n=>n.recipient===role&&(kind==='like'?['like','palm'].includes(n.kind):['reply','palm-response'].includes(n.kind)));
 return `<header class="topbar bordered"><button class="back" data-action="back" aria-label="返回消息">${icon('back',25)}</button><span class="title">${kind==='like'?'收到的赞和收藏':'收到的评论和@'}</span></header><div class="scroll"><div class="notification-list">${list.map(n=>{
 const c=findComment(n.commentId),ref=findComment(n.refId),deleted=!c,liked=c?.likedBy.includes(role),actors=n.actors||[n.actor];
 const description=n.kind==='palm'?`${PEOPLE[n.actor].name}${actors.length>1?'等'+actors.length+'人':''}向你的评论击了个掌`:n.kind==='palm-response'?`${PEOPLE[n.actor].name}回应了你参与的评论`:n.kind==='like'?'赞了你的评论':'回复了你的评论';
 const content=deleted?'<div class="quote deleted-comment">原评论已删除</div>':kind==='like'?`<div class="quote">${esc(c.text)}</div>`:`<div class="notification-content">${esc(c.text)}</div>${ref?`<div class="quote">${PEOPLE[ref.author].name}：${esc(ref.text)}</div>`:''}<div class="notification-actions"><button class="pill" data-action="reply" data-id="${c.id}">${icon('chat',15)}回复</button><button class="pill ${liked?'active':''}" data-action="comment-like" data-id="${c.id}" aria-pressed="${!!liked}">${icon('heart',15,liked)}赞</button></div>`;
 return `<article class="notification-row notification-click" data-notification="${n.id}" role="link" tabindex="0" aria-label="${esc(description)}">${avatar(n.actor)}<div class="notification-main"><div class="notification-intro"><span class="notification-name">${PEOPLE[n.actor].name}</span>${n.actor==='cheng'?'<span class="friend-badge">作者</span>':'<span class="friend-badge">你的好友</span>'}</div><div class="notification-meta">${description}&nbsp; ${esc(n.time)}</div>${content}${n.kind==='palm'?renderPalmDMAction(n):''}</div><button class="note-thumb" data-action="open-notification" data-id="${n.id}" aria-label="查看原笔记"><img src="${NOTE.image}" alt="新相机笔记缩略图"></button></article>`;
 }).join('')||'<div class="empty">暂时没有新消息</div>'}</div></div>`;
}
function renderChat(){if(chatPeer===role||!PEOPLE[chatPeer])chatPeer=role==='lin'?'qing':'lin';const messages=data.chats[keyChat(role,chatPeer)]||[];let lastTime='';return `<header class="topbar"><button class="back" data-action="back" aria-label="返回消息">${icon('back',24)}</button><div class="note-author">${avatar(chatPeer,'top')}<span>${PEOPLE[chatPeer].name}</span></div><div class="right"><button data-action="unavailable" aria-label="会话设置">${icon('grid',23)}</button></div></header><div class="scroll chat-scroll">${messages.map(m=>{const time=m.time!==lastTime?`<div class="chat-time">${esc(m.time)}</div>`:'';lastTime=m.time;return `${time}<div class="chat-line ${m.sender===role?'mine':''}">${avatar(m.sender,'chat-avatar')}<div class="${m.kind==='palm-dm'?'palm-dm-message':'bubble'}">${m.kind==='palm-dm'?renderPalmDM(m):esc(m.text)}</div></div>`;}).join('')}</div><footer class="chat-bottom"><div class="emoji-shortcuts">${[['👍','棒'],['😂','笑哭了'],['😍','心心眼'],['🐱','呢'],['🥹','抽泣']].map(([e,t])=>`<button data-action="emoji" data-emoji="${e}">${e} ${t}</button>`).join('')}</div><form class="chat-input" id="chat-form"><button type="button" data-action="unavailable" aria-label="语音消息">${icon('voice',25)}</button><textarea id="chat-text" rows="1" maxlength="2000" aria-label="发消息" placeholder="发消息...">${esc(drafts.get('chat:'+role+':'+chatPeer)||'')}</textarea><button type="button" id="chat-face" data-action="emoji" data-emoji="😊" aria-label="表情">${icon('smile',25)}</button><button type="button" id="chat-plus" data-action="unavailable" aria-label="更多消息类型">${icon('plus',25)}</button><button type="submit" id="chat-send" class="chat-send" hidden>发送</button></form></footer>`;}
function toggleList(list,value){const i=list.indexOf(value);i<0?list.push(value):list.splice(i,1);}
function toggleCommentLike(id){const c=findComment(id);if(!c)return;const had=c.likedBy.includes(role);toggleList(c.likedBy,role);if(c.author!==role){if(had){data.notifications=data.notifications.filter(n=>!(n.kind==='like'&&n.actor===role&&n.commentId===id));}else{data.notifications.unshift({id:newId('n'),kind:'like',actor:role,recipient:c.author,commentId:id,time:'刚刚'});}}save();recordScroll();render();}
function bindApp(){bindCommentMenus();app.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const id=el.dataset.id;switch(el.dataset.action){case'palm-dm-select':openPalmDM(id,true);break;case'palm-dm':openPalmDM(id);break;case'play-palm-dm':playPalmDM(el);break;case'palm-source':openPalmSource(id);break;case'palm':togglePalm(id);break;case'participants':openParticipants(id);break;case'respond':openEditor(id,true);break;case'open-notification':openNotification(id);break;case'back':goBack();break;case'navigate':navigate(el.dataset.page);break;case'compose':openEditor();break;case'reply':openEditor(id);break;case'chat':navigate('chat',{peer:el.dataset.peer});break;case'open-note':navigate('note',{target:id});break;case'to-comments':document.getElementById('comments')?.scrollIntoView({block:'start',behavior:'instant'});break;case'expand':recordScroll();expanded.has(id)?expanded.delete(id):expanded.add(id);render();break;case'comment-like':toggleCommentLike(id);break;case'note-like':recordScroll();toggleList(data.noteLikes,role);save();render();break;case'note-save':recordScroll();toggleList(data.noteSaves,role);save();render();break;case'follow':recordScroll();toggleList(data.follows,role);save();render();break;case'emoji':{const t=document.getElementById('chat-text');if(t){t.value+=el.dataset.emoji;drafts.set('chat:'+role+':'+chatPeer,t.value);updateChatInput();t.focus();}break;}case'share':showToast('演示原型暂未模拟分享');break;case'unavailable':showToast('已保留入口，本轮暂未模拟');break;}}));app.querySelectorAll('[data-notification]').forEach(el=>{const open=()=>{const n=data.notifications.find(n=>n.id===el.dataset.notification);if(n)openNotification(n.id);};el.addEventListener('click',open);el.addEventListener('keydown',e=>{if(e.target===el&&(e.key==='Enter'||e.key===' ')){e.preventDefault();open();}});});const text=document.getElementById('chat-text');if(text){text.addEventListener('input',()=>{drafts.set('chat:'+role+':'+chatPeer,text.value);updateChatInput();});text.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();sendMessage(text.value);}});document.getElementById('chat-form').addEventListener('submit',e=>{e.preventDefault();sendMessage(text.value);});updateChatInput();}}
function updateChatInput(){const t=document.getElementById('chat-text');if(!t)return;const ready=!!t.value.trim();document.getElementById('chat-send').hidden=!ready;document.getElementById('chat-plus').hidden=ready;t.style.height='27px';t.style.height=Math.min(t.scrollHeight,100)+'px';}
function sendMessage(text){const value=text.trim();if(!value||value.length>2000)return false;const key=keyChat(role,chatPeer);(data.chats[key]??=[]).push({id:newId('m'),sender:role,text:value,time:timeNow()});drafts.delete('chat:'+role+':'+chatPeer);save();render();document.getElementById('chat-text')?.focus();return true;}
function timeNow(){return new Intl.DateTimeFormat('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());}
function openEditor(id=null,respond=false,editing=false){
 const target=findComment(id);if(id&&!target){showToast('原评论已删除');return;}
 if(editing&&target?.author!==role)return;
 closeEditor();replyTarget=id;const draftKey=role+':'+(editing?'edit:':respond?'response:':'')+(id||'new'),root=document.getElementById('editor-root');
 const responding=respond&&target?.palm&&target.author===role;
 const count=responding?target.palm.participants.length:0,canNotify=responding&&count>0&&target.palm.status==='open';
 root.innerHTML=`<div class="composer-overlay"><form class="composer comment-composer" role="dialog" aria-modal="true" aria-label="${editing?'编辑评论':responding?'回应大家':target?'回复评论':'发表评论'}"><textarea id="comment-text" aria-label="${editing?'评论内容':target?'回复内容':'评论内容'}" maxlength="2000" placeholder="${target&&!editing?'回复 @'+PEOPLE[target.author].name:'说点什么...'}">${esc(drafts.get(draftKey)??(editing?target.text:responding?'样片来啦！阴天肤色挺自然，已经补在笔记里了。':''))}</textarea><div class="composer-footer"><button type="button" id="comment-voice" aria-label="语音评论">${icon('mic',24)}</button><button type="button" id="comment-image" aria-label="添加图片">${icon('image',24)}</button><button type="button" id="comment-mention" class="mention-icon" aria-label="提及用户">@</button><button type="button" id="comment-emoji" aria-label="评论表情">${icon('smile',25)}</button><button type="button" id="comment-plus" aria-label="更多评论选项">${icon('plus',24)}</button>${!target?`<label class="palm-toolbar-toggle" title="击掌评论"><input id="leave-palm" type="checkbox" role="switch" aria-label="击掌评论"><span aria-hidden="true">${menuGlyph('hand',24)}</span></label>`:''}<span class="counter" id="comment-counter" hidden></span><button class="send" id="send-comment" disabled>${editing?'保存':'发送'}</button></div>${!target?'<p class="palm-help" id="palm-help" hidden>击掌评论：别人可右滑击掌，有进展时可提醒参与者。</p>':''}${responding?`<label class="palm-reminder"><input id="notify-palm" type="checkbox" ${canNotify?'checked':'disabled'}>提醒${count}位参与者</label>${target.palm.status!=='open'?'<p class="palm-help">击掌已关闭，不再发送群体提醒。</p>':!count?'<p class="palm-help">暂无击掌，先发布公开回复。</p>':''}`:''}<div class="composer-emoji-strip">${['😂','😭','😡','🥰','😘','🥳','😤','🥺'].map(emoji=>`<button type="button" data-comment-emoji="${emoji}" aria-label="添加${emoji}">${emoji}</button>`).join('')}</div></form></div>`;
 const text=document.getElementById('comment-text'),toggle=document.getElementById('leave-palm');
 const update=()=>{drafts.set(draftKey,text.value);document.getElementById('send-comment').disabled=!text.value.trim();document.getElementById('comment-counter').textContent=`${text.value.length} / 2000`;};
 if(toggle)toggle.onchange=()=>{document.getElementById('palm-help').hidden=!toggle.checked;if(toggle.checked&&!text.value.trim())text.value='周末去试拍，回来补样片，想看的来击掌～';update();};
 text.addEventListener('input',update);root.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const success=editing?editComment(id,text.value):publishComment(text.value,{leavePalm:!!toggle?.checked,responding,notify:!!document.getElementById('notify-palm')?.checked});if(success)drafts.delete(draftKey);});
 root.querySelector('.composer-overlay').addEventListener('click',e=>{if(e.target.classList.contains('composer-overlay'))closeEditor();});
 const insert=value=>{const start=text.selectionStart,end=text.selectionEnd;text.setRangeText(value,start,end,'end');update();text.focus();};
 document.getElementById('comment-emoji').onclick=()=>insert('😊');document.getElementById('comment-mention').onclick=()=>insert('@');root.querySelectorAll('[data-comment-emoji]').forEach(button=>button.onclick=()=>insert(button.dataset.commentEmoji));
 document.getElementById('comment-image').onclick=()=>showToast('本轮仅模拟文字评论');document.getElementById('comment-voice').onclick=()=>showToast('本轮仅模拟文字评论');document.getElementById('comment-plus').onclick=()=>showToast('本轮仅模拟文字评论');
 root.onkeydown=e=>{if(e.key==='Escape')closeEditor();if(e.key==='Tab'){const nodes=[...root.querySelectorAll('button:not(:disabled),textarea,input:not(:disabled)')];if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0].focus();}}};update();text.focus();
}
function editComment(id,text){const c=findComment(id),value=text.trim();if(!c||c.author!==role||!value||value.length>2000)return false;c.text=value;c.time='刚刚';save();closeEditor();if(page.name!=='note')navigate('note',{target:id});else render({target:id});showToast('评论已更新');return true;}

function closeEditor(){const root=document.getElementById('editor-root');root.innerHTML='';root.onkeydown=null;replyTarget=null;}
function publishComment(text,options={}){
 const value=text.trim();if(!value||value.length>2000)return false;
 const target=findComment(replyTarget);if(replyTarget&&!target){showToast('原评论已删除');return false;}
 const c={id:newId('c'),author:role,text:value,time:'刚刚',place:role==='lin'?'浙江':'上海',baseLikes:0,likedBy:[]};
 if(target){c.parent=target.parent||target.id;c.replyTo=target.id;expanded.add(c.parent);
 if(options.responding&&target.palm&&target.author===role){c.palmResponse=true;
 // Snapshot only current participants: cancellation and later joins never backfill notifications.
 if(options.notify&&target.palm.status==='open')for(const person of new Set(target.palm.participants)){if(person!==role)data.notifications.unshift({id:newId('n'),kind:'palm-response',actor:role,recipient:person,commentId:c.id,refId:target.id,time:'刚刚'});}
 }else if(target.author!==role)data.notifications.unshift({id:newId('n'),kind:'reply',actor:role,recipient:target.author,commentId:c.id,refId:target.id,time:'刚刚'});
 }else{if(options.leavePalm)c.palm={status:'open',participants:[],history:[]};data.notifications.unshift({id:newId('n'),kind:'reply',actor:role,recipient:'cheng',commentId:c.id,time:'刚刚'});}
 data.comments.push(c);drafts.delete(role+':'+(replyTarget||'new'));save();closeEditor();if(page.name!=='note')navigate('note',{target:c.id});else{recordScroll();render({target:c.id});}showToast(target?'回复已发布':'评论已发布');return true;
}

function palmHistory(c){return [...new Set([...(c.palm?.history||[]),...(c.palm?.historyParticipants||[]),...(c.palm?.participants||[])])];}
function palmStatusIcon(filled=false){return `<svg class="palm-status-icon" data-filled="${filled}" width="18" height="18" viewBox="0 0 24 24" fill="${filled?'currentColor':'none'}" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 12V5a1.5 1.5 0 0 1 3 0V3a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1 3 0v7c0 4-2 6-6 6h-1c-2 0-3.6-1-4.7-2.6L4.2 14a1.6 1.6 0 0 1 2.5-2l1.3 1.3Z"/>${filled?'':'<path d="M11 5v6m3-6v6m3-2v3"/>'}</svg>`;}
function renderPalm(c){
 const p=c.palm,own=c.author===role,joined=p.participants.includes(role),closed=p.status!=='open';
 const people=closed?palmHistory(c):p.participants,count=people.length;
 if(closed&&!count)return '';
 const stack=count?`<span class="palm-avatar-stack" aria-hidden="true">${people.slice(0,3).map(person=>avatar(person,'palm-avatar')).join('')}</span>`:'';
 const label=closed?`${count}人曾击掌`:count?`${count}人击掌`:'击掌评论';
 return `<div class="palm-row" id="palm-${c.id}">${!own&&(joined||!closed)?`<button class="palm-mark ${joined?'palm-cancel':'palm-join'}" data-action="palm" data-id="${c.id}" aria-label="${joined?'取消击掌':'击掌'}" aria-pressed="${joined}">${palmStatusIcon(joined)}</button>`:`<span class="palm-mark" aria-hidden="true">${palmStatusIcon()}</span>`}${own?`<button class="palm-count" data-action="participants" data-id="${c.id}" ${count?'':'disabled'}>${stack}<span>${label}</span></button><button class="palm-respond" data-action="respond" data-id="${c.id}">回应大家</button>`:`<span class="palm-status ${joined?'joined':''}">${stack}${joined?`<span>已击掌</span><span> · ${count}人${closed?'曾击掌':''}</span>`:`<span>${label}</span>`}</span>`}</div>`;
}
function canJoinPalm(c){return !!c?.palm&&c.author!==role&&c.palm.status==='open'&&!c.palm.participants.includes(role);}
function togglePalm(id,options={}){
 const c=findComment(id);if(!c?.palm||c.author===role)return false;
 const joined=c.palm.participants.includes(role);
 if(options.joinOnly&&joined||!joined&&c.palm.status!=='open')return false;
 const before=structuredClone(data);c.palm.history=palmHistory(c);
 toggleList(c.palm.participants,role);
 if(!joined){
  c.palm.history=[...new Set([...c.palm.history,role])];
  let n=data.notifications.find(n=>n.kind==='palm'&&n.commentId===id);
  if(!n){n={id:newId('n'),kind:'palm',recipient:c.author,commentId:id,actors:[]};data.notifications.unshift(n);}
  n.actors=[...new Set([...(n.actors||[n.actor]).filter(Boolean),role])];n.actor=role;n.time='刚刚';
 }
 // Cancellation keeps previously delivered notifications and all conversations intact.
 try{localStorage.setItem(STORAGE,JSON.stringify(data));}catch{data=before;showToast('击掌未提交成功，请重试');return false;}
 if(!options.deferRender){recordScroll();render();if(!joined)animatePalmCollision(id);}
 showToast(joined?'已取消击掌，不再接收后续提醒':'已击掌，有进展时会收到提醒');return true;
}
let activePalmMotion;
function clearPalmMotion(){if(activePalmMotion){activePalmMotion.layer.remove();activePalmMotion.host?.classList.remove('colliding','swipe-collision');activePalmMotion=null;}}
function palmGeometry(host,dx=0){
 const phone=document.querySelector('.phone').getBoundingClientRect(),source=host.querySelector('.comment-swipe-surface>.avatar'),rect=source.getBoundingClientRect(),base=host.getBoundingClientRect();
 return {x:(rect.width?rect.left:base.left+dx)-phone.left,y:(rect.width?rect.top:base.top)-phone.top,size:rect.width||(source.classList.contains('small')?24:39)};
}
function createPalmMotion(host){
 clearPalmMotion();const layer=document.createElement('div');layer.className='palm-motion-layer';layer.setAttribute('aria-hidden','true');layer.innerHTML=avatar(role,'collision-b')+'<span class="palm-drag-prompt palm-enter-prompt">右滑击掌</span><span class="palm-drag-prompt palm-release-prompt" hidden>松手击掌</span>';document.querySelector('.phone').append(layer);
 activePalmMotion={host,layer,b:layer.querySelector('img'),prompt:layer.querySelector('.palm-enter-prompt'),releasePrompt:layer.querySelector('.palm-release-prompt')};return activePalmMotion;
}
function updatePalmDrag(host,motion,dx){
 const g=palmGeometry(host,dx),base=g.x-dx,entry=g.size+21,travel=entry*Math.min(1,dx/88);
 motion.g=g;motion.base=base;motion.bx=base-entry+travel;const b=motion.b;b.style.left=base+'px';b.style.top=g.y+'px';b.style.width=b.style.height=g.size+'px';b.style.transform=`translateX(${travel-entry}px)`;
 const progress=Math.min(1,dx/88),settled=dx>=88;
 b.style.filter=`blur(${(4*(1-progress)).toFixed(2)}px)`;
 const prompt=motion.prompt,release=motion.releasePrompt;
 const position=motion.promptPosition??={enterX:Math.max(24,base+g.size/2),releaseX:base+g.size+8,y:g.y+g.size/2};
 // Wait for space beside the moving author avatar; both prompts retain their own anchors.
 prompt.hidden=settled||g.x<position.enterX+(prompt.offsetWidth||44)/2+8;release.hidden=!settled;
 prompt.style.left=position.enterX+'px';prompt.style.top=position.y+'px';prompt.dataset.phase='entering';
 release.style.left=position.releaseX+'px';release.style.top=position.y+'px';release.dataset.phase='settled';


}
function retreatPalmMotion(host,motion){
 if(!motion)return;motion.prompt.hidden=true;motion.releasePrompt.hidden=true;const g=motion.g||palmGeometry(host);motion.b.style.transition='transform .28s cubic-bezier(.2,.8,.2,1)';motion.b.style.transform=`translateX(${-g.size-21}px)`;
 setTimeout(()=>{if(activePalmMotion===motion)clearPalmMotion();},290);
}
function animatePalmCollision(id,finish=()=>{},distance=0,motion=null){
 const host=app.querySelector(`[data-swipe-comment="${id}"]`),c=findComment(id);if(!host||!c){finish();return;}
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 motion??=createPalmMotion(host);const g=palmGeometry(host,distance);
 const base=motion.base??g.x-distance,bstart=motion.bx??base-g.size-21,bhit=base+2,ahit=base+g.size-6;
 motion.prompt.hidden=true;motion.releasePrompt.hidden=true;motion.b.style.filter='';const layer=motion.layer;layer.classList.add('palm-collision');host.classList.add('colliding');host.classList.toggle('swipe-collision',distance>0);
 layer.style.setProperty('--b-start',bstart+'px');layer.style.setProperty('--a-start',g.x+'px');layer.style.setProperty('--b-hit',bhit+'px');layer.style.setProperty('--a-hit',ahit+'px');layer.style.setProperty('--a-rest',base+'px');layer.style.setProperty('--b-exit',(base-g.size-21)+'px');host.style.setProperty('--swipe-distance',distance+'px');
 const b=motion.b;b.style.left='0';b.style.top=g.y+'px';b.style.width=b.style.height=g.size+'px';b.style.transform='';b.classList.add('avatar-hit-b');
 layer.insertAdjacentHTML('beforeend',`${avatar(c.author,'collision-a avatar-hit-a')}<span class="collision-hands"><span>✋</span><span>🤚</span></span>`);
 const a=layer.querySelector('.collision-a');a.style.top=g.y+'px';a.style.width=a.style.height=g.size+'px';const hands=layer.querySelector('.collision-hands');hands.style.left=(base+g.size-22)+'px';hands.style.top=(g.y+g.size*.25)+'px';
 setTimeout(()=>{if(activePalmMotion===motion)clearPalmMotion();host.classList.remove('colliding','swipe-collision');finish();},reduced?20:640);
}
function openNotification(id){const n=data.notifications.find(n=>n.id===id);if(!n)return;if(!findComment(n.commentId)){navigate('note');showToast('原评论已删除');return;}navigate('note',{target:n.commentId});}
function openSheet(title,body,half=false){closeEditor();const root=document.getElementById('editor-root');root.innerHTML=`<div class="composer-overlay"><section class="composer palm-sheet ${half?'comment-actions-sheet':''}" role="dialog" aria-modal="true" aria-label="${title}">${half?'<div class="sheet-handle" aria-hidden="true"></div>':`<div class="composer-head"><span>${title}</span><button id="close-sheet" class="close">关闭</button></div>`}${body}</section></div>`;const close=document.getElementById('close-sheet');if(close)close.onclick=closeEditor;root.querySelector('.composer-overlay').onclick=e=>{if(e.target.classList.contains('composer-overlay'))closeEditor();};root.onkeydown=e=>{if(e.key==='Escape')closeEditor();if(e.key==='Tab'){const nodes=[...root.querySelectorAll('button:not(:disabled),input:not(:disabled)')];if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0].focus();}}};root.querySelector('button')?.focus();}
let palmHintObserver;
function bindCommentMenus(){
 palmHintObserver?.disconnect();
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
   dragging=true;host.classList.add('dragging');motion=createPalmMotion(host);host.setPointerCapture?.(e.pointerId);
  }
  e.preventDefault();dx=Math.max(0,Math.min(136,x));surface.style.transform=`translateX(${dx}px)`;
  updatePalmDrag(host,motion,dx);reveal.style.opacity='0';host.classList.toggle('swipe-ready',dx>=88);label.textContent=dx>=88?'松手击掌':'右滑击掌';
 },{passive:false});
 host.addEventListener('pointerup',e=>{
  if(!start||e.pointerId!==start.pointer)return;
  cancelHold();const submit=dragging&&dx>=88,distance=dx;const didDrag=dragging;start=null;
  if(didDrag)suppressUntil=Date.now()+500;
  if(!submit){reset();return;}
  if(!togglePalm(id,{joinOnly:true,deferRender:true})){reset();return;}
  host.querySelector('.palm-swipe-hint')?.remove();
  const currentRole=role;animatePalmCollision(id,()=>{motion=null;reset();setTimeout(()=>{if(host.isConnected&&role===currentRole){recordScroll();render();}},280);},distance,motion);
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
  if(first){const hint=document.createElement('div');hint.className='palm-swipe-hint';hint.textContent='右滑头像、昵称或评论正文，即可击掌 →';first.querySelector('.comment-fixed-meta').append(hint);
   const mark=()=>{(data.palmHints??={})[role]=true;save();palmHintObserver?.disconnect();};
   if(window.IntersectionObserver){palmHintObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))mark();},{root:app.querySelector('.scroll'),threshold:.5});palmHintObserver.observe(hint);}else mark();
  }
 }
}

function openParticipants(id){const c=findComment(id);if(!c?.palm)return;const people=c.palm.status==='open'?c.palm.participants:palmHistory(c);openSheet(`${people.length}人${c.palm.status==='open'?'':'曾'}击掌`,people.map(person=>`<div class="palm-person">${avatar(person)}<span>${PEOPLE[person].name}</span></div>`).join('')||'<div class="empty">暂无击掌</div>');}
function menuGlyph(name,size=23){
 const paths={hand:'<path d="M8 12V5a1.5 1.5 0 0 1 3 0v6-8a1.5 1.5 0 0 1 3 0v8-6a1.5 1.5 0 0 1 3 0v7-3a1.5 1.5 0 0 1 3 0v7c0 4-2 6-6 6h-1c-2 0-3.6-1-4.7-2.6L4.2 14a1.6 1.6 0 0 1 2.5-2l2 2"/>',copy:'<rect x="4" y="6" width="14" height="16" rx="3"/><path d="M8 3h9a4 4 0 0 1 4 4v9M8 11h6M8 15h6"/>',quote:'<path d="M5 4h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-5l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M8 9h2v3l-2 2m6-5h2v3l-2 2"/>',send:'<path d="m21 3-7 19-4-9-9-4 20-6Z"/><path d="m10 13 11-10"/>',report:'<path d="m10 3-9 17a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1L14 3a2 2 0 0 0-4 0Z"/><path d="M12 8v6m0 3v.1"/>',delete:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>'};
 return paths[name]?`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`:icon(name,size);
}
function openPalmMenu(id){
 const c=findComment(id);if(!c)return;const own=c.author===role,joined=c.palm?.participants.includes(role);
 const row=(name,text,key,extra='')=>`<button class="palm-menu-action ${extra}" id="${key}">${menuGlyph(name)}<span>${text}</span></button>`;
 openSheet('评论操作',`<div class="sheet-share-people">${Object.keys(PEOPLE).filter(p=>p!==role).map(p=>`<button data-sheet-peer="${p}">${avatar(p)}<span>${PEOPLE[p].name}</span></button>`).join('')}</div><div class="comment-action-group share-actions">${row('chat','分享到微信','menu-wechat')}${row('chat','问点点','menu-ask')}${row('search','搜索','menu-search')}</div>${own?`<div class="comment-action-group palm-setting-group"><label class="palm-setting-row">${menuGlyph('hand')}<span>击掌评论</span><input id="toggle-palm-type" type="checkbox" role="switch" aria-label="击掌评论" ${c.palm?.status==='open'?'checked':''}><i class="setting-switch" aria-hidden="true"></i></label></div>`:c.palm&&(joined||c.palm.status==='open')?`<div class="comment-action-group">${row('hand',joined?'取消击掌':'击掌','menu-palm')}</div>`:''}<div class="comment-action-group regular-actions">${row('chat','回复','menu-reply')}${row('star',c.savedBy?.includes(role)?'取消收藏':'收藏','menu-save')}${row('copy','复制','menu-copy')}${row('quote','引用发笔记','menu-quote')}${row('send','私信','menu-private')}</div><div class="comment-action-group">${own?row('pen','编辑评论','edit-comment')+row('delete','删除评论','delete-palm','danger'):row('heart',c.likedBy.includes(role)?'取消点赞':'点赞','menu-like')+row('neutral','不喜欢','menu-dislike')+row('report','举报','menu-report')}</div>`,true);
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
 showToast(enabled?'已设为击掌评论':c.palm?'已关闭击掌，历史记录与交流已保留':'已恢复普通评论');return true;
}
function endPalm(id){return setPalmType(id,false);}
function deletePalm(id){const c=findComment(id);if(!c||c.author!==role)return false;c.deleted=true;if(c.palm)c.palm.status='closed';save();closeEditor();recordScroll();render();showToast(c.palm?'评论已删除，击掌已失效':'评论已删除');return true;}


// Private palm replies are chat messages, never interaction notifications.
function findPalmDM(commentId,person){return (data.chats[keyChat(role,person)]||[]).find(m=>m.kind==='palm-dm'&&m.commentId===commentId&&m.sender===role&&m.recipient===person);}
function palmDMIcon(sent){return sent?'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="m21 3-7 18-4-8-8-4 19-6Z"/><path d="m10 13 11-10"/></svg>':'<span class="palm-dm-symbol" aria-hidden="true">🙌</span>';}
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
 return `<div class="palm-dm-reference"><div class="palm-dm-title">来自这条评论</div><button class="palm-dm-source" data-action="palm-source" data-id="${m.commentId}" aria-label="返回笔记并定位原击掌评论"><img src="${esc(m.noteImage)}" alt="原笔记缩略图"><span><span class="palm-dm-quote ${deleted?'deleted-comment':''}">${deleted?'原评论已删除':esc(m.commentSummary)}</span></span></button></div><button class="palm-dm-play" data-action="play-palm-dm" data-id="${m.id}" aria-label="播放击掌动画，可点击重播"><span class="palm-dm-hands" aria-hidden="true"><span>✋</span><span>🤚</span></span><span>来，击个掌！</span></button>`;
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
