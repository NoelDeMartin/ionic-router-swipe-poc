(self.webpackChunkionic_router_swipe_poc=self.webpackChunkionic_router_swipe_poc||[]).push([[8991],{8991:(e,t,o)=>{"use strict";o.r(t),o.d(t,{startTapClick:()=>i});var n=o(2377);const i=e=>{let t,o,i,v,p=10*-u,f=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,h=e=>{p=(0,n.o)(e),g(e)},w=()=>{clearTimeout(v),v=void 0,o&&(b(!1),o=void 0)},E=e=>{o||void 0!==t&&null!==t.parentElement||(t=void 0,k(s(e),e))},g=e=>{k(void 0,e)},k=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:i,y:s}=(0,n.p)(t);if(o){if(m.has(o))throw new Error("internal error");o.classList.contains(c)||T(o,i,s),b(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const o=a(e)?0:d;e.classList.remove(c),v=setTimeout(()=>{T(e,i,s),v=void 0},o)}o=e},T=(e,t,o)=>{f=Date.now(),e.classList.add(c);const n=L&&r(e);n&&n.addRipple&&(_(),i=n.addRipple(t,o))},_=()=>{void 0!==i&&(i.then(e=>e()),i=void 0)},b=e=>{_();const t=o;if(!t)return;const n=l-Date.now()+f;if(e&&n>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(c),m.delete(t)},l);m.set(t,e)}else t.classList.remove(c)},S=document;S.addEventListener("ionScrollStart",e=>{t=e.target,w()}),S.addEventListener("ionScrollEnd",()=>{t=void 0}),S.addEventListener("ionGestureCaptured",w),S.addEventListener("touchstart",e=>{p=(0,n.o)(e),E(e)},!0),S.addEventListener("touchcancel",h,!0),S.addEventListener("touchend",h,!0),S.addEventListener("mousedown",e=>{const t=(0,n.o)(e)-u;p<t&&E(e)},!0),S.addEventListener("mouseup",e=>{const t=(0,n.o)(e)-u;p<t&&g(e)},!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);