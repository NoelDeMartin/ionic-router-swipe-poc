(self.webpackChunkionic_router_swipe_poc=self.webpackChunkionic_router_swipe_poc||[]).push([[3272],{3272:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createSwipeBackGesture:()=>a});var n=r(2377),o=r(9461);r(960);const a=(e,t,r,a,i)=>{const s=e.ownerDocument.defaultView;return(0,o.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:r,onMove:e=>{a(e.deltaX/s.innerWidth)},onEnd:e=>{const t=s.innerWidth,r=e.deltaX/t,o=e.velocityX,a=o>=0&&(o>.2||e.deltaX>t/2),c=(a?1-r:r)*t;let u=0;if(c>5){const e=c/Math.abs(o);u=Math.min(e,540)}i(a,r<=0?.01:(0,n.j)(0,r,.9999),u)}})}}}]);