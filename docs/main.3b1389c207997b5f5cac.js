(()=>{"use strict";const e="transitionend",t=t=>{t.dispatchEvent(new Event(e))},n=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),i=e=>n(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,s=e=>!(!n(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),r=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},o=[],a=()=>"rtl"===document.documentElement.dir,l=e=>{"function"==typeof e&&e()},c=/[^.]*(?=\..*)\.|.*/,u=/\..*/,d=/::\d+$/,h={};let f=1;const m={mouseenter:"mouseover",mouseleave:"mouseout"},g=/^(mouseenter|mouseleave)/i,p=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function _(e,t){return t&&`${t}::${f++}`||e.uidEvent||f++}function v(e){const t=_(e);return e.uidEvent=t,h[t]=h[t]||{},h[t]}function b(e,t,n=null){const i=Object.keys(e);for(let s=0,r=i.length;s<r;s++){const r=e[i[s]];if(r.originalHandler===t&&r.delegationSelector===n)return r}return null}function E(e,t,n){const i="string"==typeof t,s=i?n:t;let r=w(e);return p.has(r)||(r=e),[i,s,r]}function y(e,t,n,i,s){if("string"!=typeof t||!e)return;if(n||(n=i,i=null),g.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i?i=e(i):n=e(n)}const[r,o,a]=E(t,n,i),l=v(e),u=l[a]||(l[a]={}),d=b(u,o,r?n:null);if(d)return void(d.oneOff=d.oneOff&&s);const h=_(o,t.replace(c,"")),f=r?function(e,t,n){return function i(s){const r=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(let a=r.length;a--;)if(r[a]===o)return s.delegateTarget=o,i.oneOff&&I.off(e,s.type,t,n),n.apply(o,[s]);return null}}(e,n,i):function(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&I.off(e,i.type,t),t.apply(e,[i])}}(e,n);f.delegationSelector=r?n:null,f.originalHandler=o,f.oneOff=s,f.uidEvent=h,u[h]=f,e.addEventListener(a,f,r)}function A(e,t,n,i,s){const r=b(t[n],i,s);r&&(e.removeEventListener(n,r,Boolean(s)),delete t[n][r.uidEvent])}function w(e){return e=e.replace(u,""),m[e]||e}const I={on(e,t,n,i){y(e,t,n,i,!1)},one(e,t,n,i){y(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[s,r,o]=E(t,n,i),a=o!==t,l=v(e),c=t.startsWith(".");if(void 0!==r){if(!l||!l[o])return;return void A(e,l,o,r,s?n:null)}c&&Object.keys(l).forEach((n=>{!function(e,t,n,i){const s=t[n]||{};Object.keys(s).forEach((r=>{if(r.includes(i)){const i=s[r];A(e,t,n,i.originalHandler,i.delegationSelector)}}))}(e,l,n,t.slice(1))}));const u=l[o]||{};Object.keys(u).forEach((n=>{const i=n.replace(d,"");if(!a||t.includes(i)){const t=u[n];A(e,l,o,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!=typeof t||!e)return null;const i=r(),s=w(t),o=t!==s,a=p.has(s);let l,c=!0,u=!0,d=!1,h=null;return o&&i&&(l=i.Event(t,n),i(e).trigger(l),c=!l.isPropagationStopped(),u=!l.isImmediatePropagationStopped(),d=l.isDefaultPrevented()),a?(h=document.createEvent("HTMLEvents"),h.initEvent(s,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((e=>{Object.defineProperty(h,e,{get:()=>n[e]})})),d&&h.preventDefault(),u&&e.dispatchEvent(h),h.defaultPrevented&&void 0!==l&&l.preventDefault(),h}},T=I;function S(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function O(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const D={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${O(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${O(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=S(e.dataset[n])})),t},getDataAttribute:(e,t)=>S(e.getAttribute(`data-bs-${O(t)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})},L={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let i=e.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(t)&&n.push(i),i=i.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!(e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")))(e)&&s(e)))}},x=new Map,N={set(e,t,n){x.has(e)||x.set(e,new Map);const i=x.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(e,t)=>x.has(e)&&x.get(e).get(t)||null,remove(e,t){if(!x.has(e))return;const n=x.get(e);n.delete(t),0===n.size&&x.delete(e)}},k="carousel",C={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},j={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},$="next",M="prev",X="left",P="right",q={ArrowLeft:P,ArrowRight:X},Y="slid.bs.carousel",B="active",H=".active.carousel-item";class K extends class{constructor(e){(e=i(e))&&(this._element=e,N.set(this._element,this.constructor.DATA_KEY,this))}dispose(){N.remove(this._element,this.constructor.DATA_KEY),T.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(n,i,s=!0){((n,i,s=!0)=>{if(!s)return void l(n);const r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(i)+5;let o=!1;const a=({target:t})=>{t===i&&(o=!0,i.removeEventListener(e,a),l(n))};i.addEventListener(e,a),setTimeout((()=>{o||t(i)}),r)})(n,i,s)}static getInstance(e){return N.get(i(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=L.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return C}static get NAME(){return k}next(){this._slide($)}nextWhenVisible(){!document.hidden&&s(this._element)&&this.next()}prev(){this._slide(M)}pause(e){e||(this._isPaused=!0),L.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(t(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=L.findOne(H,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void T.one(this._element,Y,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const n=e>t?$:M;this._slide(n,this._items[e])}_getConfig(e){return e={...C,...D.getDataAttributes(this._element),..."object"==typeof e?e:{}},((e,t,i)=>{Object.keys(i).forEach((s=>{const r=i[s],o=t[s],a=o&&n(o)?"element":null==(l=o)?`${l}`:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(r).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${r}".`)}))})(k,e,j),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=40)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?P:X)}_addEventListeners(){this._config.keyboard&&T.on(this._element,"keydown.bs.carousel",(e=>this._keydown(e))),"hover"===this._config.pause&&(T.on(this._element,"mouseenter.bs.carousel",(e=>this.pause(e))),T.on(this._element,"mouseleave.bs.carousel",(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&("pen"===e.pointerType||"touch"===e.pointerType),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},i=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),500+this._config.interval))};L.find(".carousel-item img",this._element).forEach((e=>{T.on(e,"dragstart.bs.carousel",(e=>e.preventDefault()))})),this._pointerEvent?(T.on(this._element,"pointerdown.bs.carousel",(e=>t(e))),T.on(this._element,"pointerup.bs.carousel",(e=>i(e))),this._element.classList.add("pointer-event")):(T.on(this._element,"touchstart.bs.carousel",(e=>t(e))),T.on(this._element,"touchmove.bs.carousel",(e=>n(e))),T.on(this._element,"touchend.bs.carousel",(e=>i(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=q[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?L.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===$;return((e,t,n,i)=>{let s=e.indexOf(t);if(-1===s)return e[!n&&i?e.length-1:0];const r=e.length;return s+=n?1:-1,i&&(s=(s+r)%r),e[Math.max(0,Math.min(s,r-1))]})(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),i=this._getItemIndex(L.findOne(H,this._element));return T.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:t,from:i,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=L.findOne(".active",this._indicatorsElement);t.classList.remove(B),t.removeAttribute("aria-current");const n=L.find("[data-bs-target]",this._indicatorsElement);for(let t=0;t<n.length;t++)if(Number.parseInt(n[t].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[t].classList.add(B),n[t].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||L.findOne(H,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),i=L.findOne(H,this._element),s=this._getItemIndex(i),r=t||this._getItemByOrder(n,i),o=this._getItemIndex(r),a=Boolean(this._interval),l=n===$,c=l?"carousel-item-start":"carousel-item-end",u=l?"carousel-item-next":"carousel-item-prev",d=this._orderToDirection(n);if(r&&r.classList.contains(B))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,d).defaultPrevented)return;if(!i||!r)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const h=()=>{T.trigger(this._element,Y,{relatedTarget:r,direction:d,from:s,to:o})};if(this._element.classList.contains("slide")){r.classList.add(u),(e=>{e.offsetHeight})(r),i.classList.add(c),r.classList.add(c);const e=()=>{r.classList.remove(c,u),r.classList.add(B),i.classList.remove(B,u,c),this._isSliding=!1,setTimeout(h,0)};this._queueCallback(e,i,!0)}else i.classList.remove(B),r.classList.add(B),this._isSliding=!1,h();a&&this.cycle()}_directionToOrder(e){return[P,X].includes(e)?a()?e===X?M:$:e===X?$:M:e}_orderToDirection(e){return[$,M].includes(e)?a()?e===M?X:P:e===M?P:X:e}static carouselInterface(e,t){const n=K.getOrCreateInstance(e,t);let{_config:i}=n;"object"==typeof t&&(i={...i,...t});const s="string"==typeof t?t:i.slide;if("number"==typeof t)n.to(t);else if("string"==typeof s){if(void 0===n[s])throw new TypeError(`No method named "${s}"`);n[s]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){K.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=(e=>{const t=(e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t})(this);return t?document.querySelector(t):null})();if(!t||!t.classList.contains("carousel"))return;const n={...D.getDataAttributes(t),...D.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),K.carouselInterface(t,n),i&&K.getInstance(t).to(i),e.preventDefault()}}var V,W;T.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",K.dataApiClickHandler),T.on(window,"load.bs.carousel.data-api",(()=>{const e=L.find('[data-bs-ride="carousel"]');for(let t=0,n=e.length;t<n;t++)K.carouselInterface(e[t],K.getInstance(e[t]))})),V=K,W=()=>{const e=r();if(e){const t=V.NAME,n=e.fn[t];e.fn[t]=V.jQueryInterface,e.fn[t].Constructor=V,e.fn[t].noConflict=()=>(e.fn[t]=n,V.jQueryInterface)}},"loading"===document.readyState?(o.length||document.addEventListener("DOMContentLoaded",(()=>{o.forEach((e=>e()))})),o.push(W)):W()})();