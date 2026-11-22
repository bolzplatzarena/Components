var jm=Object.defineProperty;var k_=Object.defineProperties;var O_=Object.getOwnPropertyDescriptors;var Zi=Object.getOwnPropertySymbols;var Bm=Object.prototype.hasOwnProperty;var Vm=Object.prototype.propertyIsEnumerable;var Pm=(e,t,n)=>t in e?jm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R$1=(e,t)=>{for(var n in t||={})Bm.call(t,n)&&Pm(e,n,t[n]);if(Zi)for(var n of Zi(t))Vm.call(t,n)&&Pm(e,n,t[n]);return e};var ae$3=(e,t)=>k_(e,O_(t));var WO=e=>typeof e==`symbol`?e:e+``;var R_=(e,t)=>{var n={};for(var r in e)Bm.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Zi)for(var r of Zi(e))t.indexOf(r)<0&&Vm.call(e,r)&&(n[r]=e[r]);return n};var GO=(e,t)=>{for(var n in t)jm(e,n,{get:t[n],enumerable:!0})};var Er=(e,t,n)=>new Promise((r,o)=>{var i=c=>{try{s(n.next(c))}catch(l){o(l)}},a=c=>{try{s(n.throw(c))}catch(l){o(l)}},s=c=>c.done?r(c.value):Promise.resolve(c.value).then(i,a);s((n=n.apply(e,t)).next())});function A$2(e){return typeof e==`function`}function Ki(e){return e&&A$2(e.schedule)}function Gc(e){return e[e.length-1]}function Qi(e){return A$2(Gc(e))?e.pop():void 0}function ht$3(e){return Ki(Gc(e))?e.pop():void 0}function Hm(e,t){return typeof Gc(e)==`number`?e.pop():t}function Um(e,t,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function s(u){try{l(r.next(u))}catch(d){a(d)}}function c(u){try{l(r.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):o(u.value).then(s,c)}l((r=r.apply(e,t||[])).next())})}function $m(e){var t=typeof Symbol==`function`&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length==`number`)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?`Object is not iterable.`:`Symbol.iterator is not defined.`)}function Mn(e){return this instanceof Mn?(this.v=e,this):new Mn(e)}function zm(e,t,n){if(!Symbol.asyncIterator)throw new TypeError(`Symbol.asyncIterator is not defined.`);var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator==`function`?AsyncIterator:Object).prototype),s(`next`),s(`throw`),s(`return`,a),o[Symbol.asyncIterator]=function(){return this},o;function a(f){return function(h){return Promise.resolve(h).then(f,d)}}function s(f,h){r[f]&&(o[f]=function(g){return new Promise(function(v,y){i.push([f,g,v,y])>1||c(f,g)})},h&&(o[f]=h(o[f])))}function c(f,h){try{l(r[f](h))}catch(g){m(i[0][3],g)}}function l(f){f.value instanceof Mn?Promise.resolve(f.value.v).then(u,d):m(i[0][2],f)}function u(f){c(`next`,f)}function d(f){c(`throw`,f)}function m(f,h){f(h),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Wm(e){if(!Symbol.asyncIterator)throw new TypeError(`Symbol.asyncIterator is not defined.`);var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof $m==`function`?$m(e):e[Symbol.iterator](),n={},r(`next`),r(`throw`),r(`return`),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(a){return new Promise(function(s,c){a=e[i](a),o(s,c,a.done,a.value)})}}function o(i,a,s,c){Promise.resolve(c).then(function(l){i({value:l,done:s})},a)}}var Xi=(e=>e&&typeof e.length==`number`&&typeof e!=`function`);function Ji(e){return A$2(e?.then)}function _r(e){let n=e(r=>{Error.call(r),r.stack=(/* @__PURE__ */ new Error()).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var ea$1=_r(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:``,this.name=`UnsubscriptionError`,this.errors=n});function An$1(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var te$1=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(A$2(r))try{r()}catch(i){t=i instanceof ea$1?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Gm(i)}catch(a){t=t??[],a instanceof ea$1?t=[...t,...a.errors]:t.push(a)}}if(t)throw new ea$1(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Gm(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&An$1(n,t)}remove(t){let{_finalizers:n}=this;n&&An$1(n,t),t instanceof e&&t._removeParent(this)}};te$1.EMPTY=(()=>{let e=new te$1;return e.closed=!0,e})();var qc=te$1.EMPTY;function ta$1(e){return e instanceof te$1||e&&`closed`in e&&A$2(e.remove)&&A$2(e.add)&&A$2(e.unsubscribe)}function Gm(e){A$2(e)?e():e.unsubscribe()}var et$1={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ir={setTimeout(e,t,...n){let{delegate:r}=Ir;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=Ir;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function na$1(e){Ir.setTimeout(()=>{let{onUnhandledError:t}=et$1;if(t)t(e);else throw e})}function kn$1(){}var qm=Yc(`C`,void 0,void 0);function Ym(e){return Yc(`E`,void 0,e)}function Zm(e){return Yc(`N`,e,void 0)}function Yc(e,t,n){return{kind:e,value:t,error:n}}var On=null;function wr(e){if(et$1.useDeprecatedSynchronousErrorHandling){let t=!On;if(t&&(On={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=On;if(On=null,n)throw r}}else e()}function Km(e){et$1.useDeprecatedSynchronousErrorHandling&&On&&(On.errorThrown=!0,On.error=e)}var Rn$1=class extends te$1{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,ta$1(t)&&t.add(this)):this.destination=P_}static create(t,n,r){return new tt$1(t,n,r)}next(t){this.isStopped?Kc(Zm(t),this):this._next(t)}error(t){this.isStopped?Kc(Ym(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Kc(qm,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}};var F_=Function.prototype.bind;function Zc(e,t){return F_.call(e,t)}var Qc=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){ra$1(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){ra$1(r)}else ra$1(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){ra$1(n)}}};var tt$1=class extends Rn$1{constructor(t,n,r){super();let o;if(A$2(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&et$1.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Zc(t.next,i),error:t.error&&Zc(t.error,i),complete:t.complete&&Zc(t.complete,i)}):o=t}this.destination=new Qc(o)}};function ra$1(e){et$1.useDeprecatedSynchronousErrorHandling?Km(e):na$1(e)}function L_(e){throw e}function Kc(e,t){let{onStoppedNotification:n}=et$1;n&&Ir.setTimeout(()=>n(e,t))}var P_={closed:!0,next:kn$1,error:L_,complete:kn$1};var Sr=typeof Symbol==`function`&&Symbol.observable||`@@observable`;function je$3(e){return e}function Qm(e){return e.length===0?je$3:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var k$2=class e{constructor(t){t&&(this._subscribe=t)}lift(t){let n=new e;return n.source=this,n.operator=t,n}subscribe(t,n,r){let o=B_(t)?t:new tt$1(t,n,r);return wr(()=>{let{operator:i,source:a}=this;o.add(i?i.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(n){t.error(n)}}forEach(t,n){return n=Xm(n),new n((r,o)=>{let i=new tt$1({next:a=>{try{t(a)}catch(s){o(s),i.unsubscribe()}},error:o,complete:r});this.subscribe(i)})}_subscribe(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)}[Sr](){return this}pipe(...t){return Qm(t)(this)}toPromise(t){return t=Xm(t),new t((n,r)=>{let o;this.subscribe(i=>o=i,i=>r(i),()=>n(o))})}};k$2.create=e=>new k$2(e);function Xm(e){var t;return(t=e??et$1.Promise)!==null&&t!==void 0?t:Promise}function j_(e){return e&&A$2(e.next)&&A$2(e.error)&&A$2(e.complete)}function B_(e){return e&&e instanceof Rn$1||j_(e)&&ta$1(e)}function oa$1(e){return A$2(e[Sr])}function ia$1(e){return Symbol.asyncIterator&&A$2(e?.[Symbol.asyncIterator])}function aa$1(e){return/* @__PURE__ */ new TypeError(`You provided ${e!==null&&typeof e==`object`?`an invalid object`:`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function V_(){return typeof Symbol!=`function`||!Symbol.iterator?`@@iterator`:Symbol.iterator}var sa$2=V_();function ca$2(e){return A$2(e?.[sa$2])}function la$2(e){return zm(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield Mn(n.read());if(o)return yield Mn(void 0);yield yield Mn(r)}}finally{n.releaseLock()}})}function ua$2(e){return A$2(e?.getReader)}function $$2(e){if(e instanceof k$2)return e;if(e!=null){if(oa$1(e))return H_(e);if(Xi(e))return $_(e);if(Ji(e))return U_(e);if(ia$1(e))return Jm(e);if(ca$2(e))return z_(e);if(ua$2(e))return W_(e)}throw aa$1(e)}function H_(e){return new k$2(t=>{let n=e[Sr]();if(A$2(n.subscribe))return n.subscribe(t);throw new TypeError(`Provided object does not correctly implement Symbol.observable`)})}function $_(e){return new k$2(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function U_(e){return new k$2(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,na$1)})}function z_(e){return new k$2(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function Jm(e){return new k$2(t=>{G_(e,t).catch(n=>t.error(n))})}function W_(e){return Jm(la$2(e))}function G_(e,t){var n,r,o,i;return Um(this,void 0,void 0,function*(){try{for(n=Wm(e);r=yield n.next(),!r.done;){let a=r.value;if(t.next(a),t.closed)return}}catch(a){o={error:a}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function Ae$1(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Xc(e){return A$2(e?.lift)}function M$1(e){return t=>{if(Xc(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError(`Unable to lift unknown Observable type`)}}function T(e,t,n,r,o){return new Jc(e,t,n,r,o)}var Jc=class extends Rn$1{constructor(t,n,r,o,i,a){super(t),this.onFinalize=i,this.shouldUnsubscribe=a,this._next=n?function(s){try{n(s)}catch(c){t.error(c)}}:super._next,this._error=o?function(s){try{o(s)}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(s){t.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function da$2(e,t=0){return M$1((n,r)=>{n.subscribe(T(r,o=>Ae$1(r,e,()=>r.next(o),t),()=>Ae$1(r,e,()=>r.complete(),t),o=>Ae$1(r,e,()=>r.error(o),t)))})}function fa$2(e,t=0){return M$1((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function ep(e,t){return $$2(e).pipe(fa$2(t),da$2(t))}function tp(e,t){return $$2(e).pipe(fa$2(t),da$2(t))}function np(e,t){return new k$2(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function rp(e,t){return new k$2(n=>{let r;return Ae$1(n,t,()=>{r=e[sa$2](),Ae$1(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(a){n.error(a);return}i?n.complete():n.next(o)},0,!0)}),()=>A$2(r?.return)&&r.return()})}function ma$2(e,t){if(!e)throw new Error(`Iterable cannot be null`);return new k$2(n=>{Ae$1(n,t,()=>{let r=e[Symbol.asyncIterator]();Ae$1(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function op(e,t){return ma$2(la$2(e),t)}function ip(e,t){if(e!=null){if(oa$1(e))return ep(e,t);if(Xi(e))return np(e,t);if(Ji(e))return tp(e,t);if(ia$1(e))return ma$2(e,t);if(ca$2(e))return rp(e,t);if(ua$2(e))return op(e,t)}throw aa$1(e)}function gt$3(e,t){return t?ip(e,t):$$2(e)}function el(...e){return gt$3(e,ht$3(e))}function ge$1(e,t){return M$1((n,r)=>{let o=0;n.subscribe(T(r,i=>{r.next(e.call(t,i,o++))}))})}function ap(e,t,n,r,o,i,a,s){let c=[],l=0,u=0,d=!1,m=()=>{d&&!c.length&&!l&&t.complete()},f=g=>l<r?h(g):c.push(g),h=g=>{i&&t.next(g),l++;let v=!1;$$2(n(g,u++)).subscribe(T(t,y=>{o?.(y),i?f(y):t.next(y)},()=>{v=!0},void 0,()=>{if(v)try{for(l--;c.length&&l<r;){let y=c.shift();a?Ae$1(t,a,()=>h(y)):h(y)}m()}catch(y){t.error(y)}}))};return e.subscribe(T(t,f,()=>{d=!0,m()})),()=>{s?.()}}function Tt$2(e,t,n=1/0){return A$2(t)?Tt$2((r,o)=>ge$1((i,a)=>t(r,i,o,a))($$2(e(r,o))),n):(typeof t==`number`&&(n=t),M$1((r,o)=>ap(r,o,e,n)))}var pa$2=class extends te$1{constructor(t,n){super()}schedule(t,n=0){return this}};var wo={setInterval(e,t,...n){let{delegate:r}=wo;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){let{delegate:t}=wo;return(t?.clearInterval||clearInterval)(e)},delegate:void 0};var Xt=class extends pa$2{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;let o=this.id,i=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return wo.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&wo.clearInterval(n)}execute(t,n){if(this.closed)return/* @__PURE__ */ new Error(`executing a cancelled action`);this.pending=!1;let r=this._execute(t,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let r=!1,o;try{this.work(t)}catch(i){r=!0,o=i||/* @__PURE__ */ new Error(`Scheduled action threw falsy error`)}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,An$1(r,this),t!=null&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}};var So={now(){return(So.delegate||Date).now()},delegate:void 0};var Cr=class e{constructor(t,n=e.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}};Cr.now=So.now;var Jt=class extends Cr{constructor(t,n=Cr.now){super(t,n),this.actions=[],this._active=!1}flush(t){let{actions:n}=this;if(this._active){n.push(t);return}let r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}};var Mt$1=new Jt(Xt);var sp=Mt$1;function cp(e){return e instanceof Date&&!isNaN(e)}function At$3(e=0,t,n=sp){let r=-1;return t!=null&&(Ki(t)?n=t:r=t),new k$2(o=>{let i=cp(e)?+e-n.now():e;i<0&&(i=0);let a=0;return n.schedule(function(){o.closed||(o.next(a++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function q_(e=0,t=Mt$1){return e<0&&(e=0),At$3(e,e,t)}function ha$2(e=1/0){return Tt$2(je$3,e)}function lp(){return ha$2(1)}function en(...e){return lp()(gt$3(e,ht$3(e)))}var Co=new k$2(e=>e.complete());function xr(e){return e<=0?()=>Co:M$1((t,n)=>{let r=0;t.subscribe(T(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function up(){return M$1((e,t)=>{e.subscribe(T(t,kn$1))})}function dp(e){return ge$1(()=>e)}function tl(e,t){return t?n=>en(t.pipe(xr(1),up()),n.pipe(tl(e))):Tt$2((n,r)=>$$2(e(n,r)).pipe(xr(1),dp(n)))}function Y_(e,t=Mt$1){let n=At$3(e,t);return tl(()=>n)}function ga$2(...e){let t=ht$3(e);return M$1((n,r)=>{(t?en(e,n,t):en(e,n)).subscribe(r)})}function fp(){return M$1((e,t)=>{let n=null;e._refCount++;let r=T(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var xo$1=class extends k$2{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Xc(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new te$1;let n=this.getSubject();t.add(this.source.subscribe(T(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=te$1.EMPTY)}return t}refCount(){return fp()(this)}};var Nr={schedule(e){let t=requestAnimationFrame,n=cancelAnimationFrame,{delegate:r}=Nr;r&&(t=r.requestAnimationFrame,n=r.cancelAnimationFrame);let o=t(i=>{n=void 0,e(i)});return new te$1(()=>n?.(o))},requestAnimationFrame(...e){let{delegate:t}=Nr;return(t?.requestAnimationFrame||requestAnimationFrame)(...e)},cancelAnimationFrame(...e){let{delegate:t}=Nr;return(t?.cancelAnimationFrame||cancelAnimationFrame)(...e)},delegate:void 0};var mp=_r(e=>function(){e(this),this.name=`ObjectUnsubscribedError`,this.message=`object unsubscribed`});var U$1=class extends k$2{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let n=new ba$2(this,this);return n.operator=t,n}_throwIfClosed(){if(this.closed)throw new mp}next(t){wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(t)}})}error(t){wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:n}=this;for(;n.length;)n.shift().error(t)}})}complete(){wr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:n,isStopped:r,observers:o}=this;return n||r?qc:(this.currentObservers=null,o.push(t),new te$1(()=>{this.currentObservers=null,An$1(o,t)}))}_checkFinalizedStatuses(t){let{hasError:n,thrownError:r,isStopped:o}=this;n?t.error(r):o&&t.complete()}asObservable(){let t=new k$2;return t.source=this,t}};U$1.create=(e,t)=>new ba$2(e,t);var ba$2=class extends U$1{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:qc}};var Fn$1=class extends U$1{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var No=class extends U$1{constructor(t=1/0,n=1/0,r=So){super(),this._bufferSize=t,this._windowTime=n,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,n)}next(t){let{isStopped:n,_buffer:r,_infiniteTimeWindow:o,_timestampProvider:i,_windowTime:a}=this;n||(r.push(t),!o&&r.push(i.now()+a)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();let n=this._innerSubscribe(t),{_infiniteTimeWindow:r,_buffer:o}=this,i=o.slice();for(let a=0;a<i.length&&!t.closed;a+=r?1:2)t.next(i[a]);return this._checkFinalizedStatuses(t),n}_trimBuffer(){let{_bufferSize:t,_timestampProvider:n,_buffer:r,_infiniteTimeWindow:o}=this,i=(o?1:2)*t;if(t<1/0&&i<r.length&&r.splice(0,r.length-i),!o){let a=n.now(),s=0;for(let c=1;c<r.length&&r[c]<=a;c+=2)s=c;s&&r.splice(0,s+1)}}};var Z_=1;var nl;var rl={};function pp(e){return e in rl?(delete rl[e],!0):!1}var{setImmediate:K_,clearImmediate:Q_}={setImmediate(e){let t=Z_++;return rl[t]=!0,nl||(nl=Promise.resolve()),nl.then(()=>pp(t)&&e()),t},clearImmediate(e){pp(e)}},To={setImmediate(...e){let{delegate:t}=To;return(t?.setImmediate||K_)(...e)},clearImmediate(e){let{delegate:t}=To;return(t?.clearImmediate||Q_)(e)},delegate:void 0};var va$2=class extends Xt{constructor(t,n){super(t,n),this.scheduler=t,this.work=n}requestAsyncId(t,n,r=0){return r!==null&&r>0?super.requestAsyncId(t,n,r):(t.actions.push(this),t._scheduled||(t._scheduled=To.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,n,r=0){var o;if(r!=null?r>0:this.delay>0)return super.recycleAsyncId(t,n,r);let{actions:i}=t;n!=null&&((o=i[i.length-1])===null||o===void 0?void 0:o.id)!==n&&(To.clearImmediate(n),t._scheduled===n&&(t._scheduled=void 0))}};var ya$2=class extends Jt{flush(t){this._active=!0;let n=this._scheduled;this._scheduled=void 0;let{actions:r}=this,o;t=t||r.shift();do if(o=t.execute(t.state,t.delay))break;while((t=r[0])&&t.id===n&&r.shift());if(this._active=!1,o){for(;(t=r[0])&&t.id===n&&r.shift();)t.unsubscribe();throw o}}};var X_=new ya$2(va$2);var Da$1=class extends Xt{constructor(t,n){super(t,n),this.scheduler=t,this.work=n}requestAsyncId(t,n,r=0){return r!==null&&r>0?super.requestAsyncId(t,n,r):(t.actions.push(this),t._scheduled||(t._scheduled=Nr.requestAnimationFrame(()=>t.flush(void 0))))}recycleAsyncId(t,n,r=0){var o;if(r!=null?r>0:this.delay>0)return super.recycleAsyncId(t,n,r);let{actions:i}=t;n!=null&&n===t._scheduled&&((o=i[i.length-1])===null||o===void 0?void 0:o.id)!==n&&(Nr.cancelAnimationFrame(n),t._scheduled=void 0)}};var Ea$1=class extends Jt{flush(t){this._active=!0;let n;t?n=t.id:(n=this._scheduled,this._scheduled=void 0);let{actions:r}=this,o;t=t||r.shift();do if(o=t.execute(t.state,t.delay))break;while((t=r[0])&&t.id===n&&r.shift());if(this._active=!1,o){for(;(t=r[0])&&t.id===n&&r.shift();)t.unsubscribe();throw o}}};var J_=new Ea$1(Da$1);function eI(e,t){let n=A$2(e)?e:()=>e,r=o=>o.error(n());return new k$2(t?o=>t.schedule(r,0,o):r)}function tI(e){return!!e&&(e instanceof k$2||A$2(e.lift)&&A$2(e.subscribe))}var gp=_r(e=>function(){e(this),this.name=`EmptyError`,this.message=`no elements in sequence`});function nI(e,t){let n=typeof t==`object`;return new Promise((r,o)=>{let i=new tt$1({next:a=>{r(a),i.unsubscribe()},error:o,complete:()=>{n?r(t.defaultValue):o(new gp)}});e.subscribe(i)})}var{isArray:rI}=Array;function oI(e,t){return rI(t)?e(...t):e(t)}function _a$2(e){return ge$1(t=>oI(e,t))}var{isArray:iI}=Array,{getPrototypeOf:aI,prototype:sI,keys:cI}=Object;function Ia$2(e){if(e.length===1){let t=e[0];if(iI(t))return{args:t,keys:null};if(lI(t)){let n=cI(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function lI(e){return e&&typeof e==`object`&&aI(e)===sI}function wa$2(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function ol(...e){let t=ht$3(e),n=Qi(e),{args:r,keys:o}=Ia$2(e);if(r.length===0)return gt$3([],t);let i=new k$2(uI(r,t,o?a=>wa$2(o,a):je$3));return n?i.pipe(_a$2(n)):i}function uI(e,t,n=je$3){return r=>{bp(t,()=>{let{length:o}=e,i=new Array(o),a=o,s=o;for(let c=0;c<o;c++)bp(t,()=>{let l=gt$3(e[c],t),u=!1;l.subscribe(T(r,d=>{i[c]=d,u||(u=!0,s--),s||r.next(n(i.slice()))},()=>{--a||r.complete()}))},r)},r)}}function bp(e,t,n){e?Ae$1(n,e,t):t()}function dI(e){return new k$2(t=>{$$2(e()).subscribe(t)})}function fI(...e){let t=Qi(e),{args:n,keys:r}=Ia$2(e),o=new k$2(i=>{let{length:a}=n;if(!a){i.complete();return}let s=new Array(a),c=a,l=a;for(let u=0;u<a;u++){let d=!1;$$2(n[u]).subscribe(T(i,m=>{d||(d=!0,l--),s[u]=m},()=>c--,void 0,()=>{(!c||!d)&&(l||i.next(r?wa$2(r,s):s),i.complete())}))}});return t?o.pipe(_a$2(t)):o}function mI(...e){let t=ht$3(e),n=Hm(e,1/0),r=e;return r.length?r.length===1?$$2(r[0]):ha$2(n)(gt$3(r,t)):Co}function Ln$1(e,t){return M$1((n,r)=>{let o=0;n.subscribe(T(r,i=>e.call(t,i,o++)&&r.next(i)))})}function vp(e){return M$1((t,n)=>{let r=!1,o=null,i=null,a=!1,s=()=>{if(i?.unsubscribe(),i=null,r){r=!1;let l=o;o=null,n.next(l)}a&&n.complete()},c=()=>{i=null,a&&n.complete()};t.subscribe(T(n,l=>{r=!0,o=l,i||$$2(e(l)).subscribe(i=T(n,s,c))},()=>{a=!0,(!r||!i||i.closed)&&n.complete()}))})}function pI(e,t=Mt$1){return vp(()=>At$3(e,t))}function yp(e){return M$1((t,n)=>{let r=null,o=!1,i;r=t.subscribe(T(n,void 0,void 0,a=>{i=$$2(e(a,yp(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function hI(e,t){return A$2(t)?Tt$2(e,t,1):Tt$2(e,1)}function Pn$1(e,t=Mt$1){return M$1((n,r)=>{let o=null,i=null,a=null,s=()=>{if(o){o.unsubscribe(),o=null;let l=i;i=null,r.next(l)}};function c(){let l=a+e,u=t.now();if(u<l){o=this.schedule(void 0,l-u),r.add(o);return}s()}n.subscribe(T(r,l=>{i=l,a=t.now(),o||(o=t.schedule(c,e),r.add(o))},()=>{s(),r.complete()},void 0,()=>{i=o=null}))})}function gI(e){return M$1((t,n)=>{let r=!1;t.subscribe(T(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function il(e,t=je$3){return e=e??bI,M$1((n,r)=>{let o,i=!0;n.subscribe(T(r,a=>{let s=t(a);(i||!e(o,s))&&(i=!1,o=s,r.next(a))}))})}function bI(e,t){return e===t}function vI(e){return M$1((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function yI(){return M$1((e,t)=>{let n,r=!1;e.subscribe(T(t,o=>{let i=n;n=o,r&&t.next([i,o]),r=!0}))})}function DI(e=1/0){let t;e&&typeof e==`object`?t=e:t={count:e};let{count:n=1/0,delay:r,resetOnSuccess:o=!1}=t;return n<=0?je$3:M$1((i,a)=>{let s=0,c,l=()=>{let u=!1;c=i.subscribe(T(a,d=>{o&&(s=0),a.next(d)},void 0,d=>{if(s++<n){let m=()=>{c?(c.unsubscribe(),c=null,l()):u=!0};if(r!=null){let f=typeof r==`number`?At$3(r):$$2(r(d,s)),h=T(a,()=>{h.unsubscribe(),m()},()=>{a.complete()});f.subscribe(h)}else m()}else a.error(d)})),u&&(c.unsubscribe(),c=null,l())};l()})}function sl(e={}){let{connector:t=()=>new U$1,resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let a,s,c,l=0,u=!1,d=!1,m=()=>{s?.unsubscribe(),s=void 0},f=()=>{m(),a=c=void 0,u=d=!1},h=()=>{let g=a;f(),g?.unsubscribe()};return M$1((g,v)=>{l++,!d&&!u&&m();let y=c=c??t();v.add(()=>{l--,l===0&&!d&&!u&&(s=al(h,o))}),y.subscribe(v),!a&&l>0&&(a=new tt$1({next:w=>y.next(w),error:w=>{d=!0,m(),s=al(f,n,w),y.error(w)},complete:()=>{u=!0,m(),s=al(f,r),y.complete()}}),$$2(g).subscribe(a))})(i)}}function al(e,t,...n){if(t===!0){e();return}if(t===!1)return;let r=new tt$1({next:()=>{r.unsubscribe(),e()}});return $$2(t(...n)).subscribe(r)}function EI(e,t,n){let r,o=!1;return e&&typeof e==`object`?{bufferSize:r=1/0,windowTime:t=1/0,refCount:o=!1,scheduler:n}=e:r=e??1/0,sl({connector:()=>new No(r,t,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}function Mo(e){return Ln$1((t,n)=>e<=n)}function Dp(e,t){return M$1((n,r)=>{let o=null,i=0,a=!1,s=()=>a&&!o&&r.complete();n.subscribe(T(r,c=>{o?.unsubscribe();let l=0,u=i++;$$2(e(c,u)).subscribe(o=T(r,d=>r.next(t?t(c,d,u,l++):d),()=>{o=null,s()}))},()=>{a=!0,s()}))})}function Ao(e){return M$1((t,n)=>{$$2(e).subscribe(T(n,()=>n.complete(),kn$1)),!n.closed&&t.subscribe(n)})}function _I(e,t=!1){return M$1((n,r)=>{let o=0;n.subscribe(T(r,i=>{let a=e(i,o++);(a||t)&&r.next(i),!a&&r.complete()}))})}function Sa$2(e,t,n){let r=A$2(e)||t||n?{next:e,error:t,complete:n}:e;return r?M$1((o,i)=>{var a;(a=r.subscribe)===null||a===void 0||a.call(r);let s=!0;o.subscribe(T(i,c=>{var l;(l=r.next)===null||l===void 0||l.call(r,c),i.next(c)},()=>{var c;s=!1,(c=r.complete)===null||c===void 0||c.call(r),i.complete()},c=>{var l;s=!1,(l=r.error)===null||l===void 0||l.call(r,c),i.error(c)},()=>{var c,l;s&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):je$3}var ko=[null];var Ca$2=[!1];var jn$1=1;var II=null;var ce$2=Symbol(`SIGNAL`);function I$3(e){let t=ko[0];return ko[0]=e,t}function Ma$1(){return ko[0]}var Vn$2={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:`unknown`,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function kt$1(e){if(Ca$2[0])throw new Error(``);let t=ko[0];if(t===null)return;t.consumerOnSignalRead(e);let n=t.producersTail;if(n!==void 0&&n.producer===e)return;let r,o=t.recomputing;if(o&&(r=n!==void 0?n.nextProducer:t.producers,r!==void 0&&r.producer===e)){t.producersTail=r,r.lastReadVersion=e.version,r.knownValidAtEpoch=jn$1;return}let i=e.consumersTail;if(i!==void 0&&i.consumer===t&&(!o||i.knownValidAtEpoch===jn$1))return;let a=Mr(t),s={producer:e,consumer:t,nextProducer:r,prevConsumer:void 0,knownValidAtEpoch:jn$1,lastReadVersion:e.version,nextConsumer:void 0};t.producersTail=s,n!==void 0?n.nextProducer=s:t.producers=s,a&&wp(e,s)}function Ep(){jn$1++}function Oo(e){if(!(Mr(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===jn$1)){if(!e.producerMustRecompute(e)&&!Tr(e)){Ta$2(e);return}e.producerRecomputeValue(e),Ta$2(e)}}function cl(e){if(e.consumers===void 0)return;let t=Ca$2[0];Ca$2[0]=!0;try{for(let n=e.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||wI(r)}}finally{Ca$2[0]=t}}function ll(){return ko[0]?.consumerAllowSignalWrites!==!1}function wI(e){e.dirty=!0,cl(e),e.consumerMarkedDirty?.(e)}function Ta$2(e){e.dirty=!1,e.lastCleanEpoch=jn$1}function tn(e){return e&&_p(e),I$3(e)}function _p(e){if(e.producersTail?.knownValidAtEpoch===jn$1){let t=e.producers;for(;t!==void 0;)t.knownValidAtEpoch=null,t=t.nextProducer}e.producersTail=void 0,e.recomputing=!0}function Hn$1(e,t){I$3(t),e&&Ip(e)}function Ip(e){e.recomputing=!1;let t=e.producersTail,n=t!==void 0?t.nextProducer:e.producers;if(n!==void 0){if(Mr(e))do n=ul(n);while(n!==void 0);t!==void 0?t.nextProducer=void 0:e.producers=void 0}}function Tr(e){for(let t=e.producers;t!==void 0;t=t.nextProducer){let n=t.producer,r=t.lastReadVersion;if(r!==n.version||(Oo(n),r!==n.version))return!0}return!1}function nn(e){if(Mr(e)){let t=e.producers;for(;t!==void 0;)t=ul(t)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function wp(e,t){let n=e.consumersTail,r=Mr(e);if(n!==void 0?(t.nextConsumer=n.nextConsumer,n.nextConsumer=t):(t.nextConsumer=void 0,e.consumers=t),t.prevConsumer=n,e.consumersTail=t,!r)for(let o=e.producers;o!==void 0;o=o.nextProducer)wp(o.producer,o)}function ul(e){let t=e.producer,n=e.nextProducer,r=e.nextConsumer,o=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:t.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(t.consumers=r,!Mr(t)){let i=t.producers;for(;i!==void 0;)i=ul(i)}return n}function Mr(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function Aa$1(e){II?.(e)}function ka$2(e,t){return Object.is(e,t)}function Ro(e,t){let n=Object.create(SI);n.computation=e,t!==void 0&&(n.equal=t);let r=()=>{if(Oo(n),kt$1(n),n.value===Bn$1)throw n.error;return n.value};return r[ce$2]=n,Aa$1(n),r}var xa$2=Symbol(`UNSET`);var Na$1=Symbol(`COMPUTING`);var Bn$1=Symbol(`ERRORED`);var SI=ae$3(R$1({},Vn$2),{value:xa$2,dirty:!0,error:null,equal:ka$2,kind:`computed`,producerMustRecompute(e){return e.value===xa$2||e.value===Na$1},producerRecomputeValue(e){if(e.value===Na$1)throw new Error(``);let t=e.value;e.value=Na$1;let n=tn(e),r,o=!1;try{r=e.computation(),I$3(null),o=t!==xa$2&&t!==Bn$1&&r!==Bn$1&&e.equal(t,r),e.error=null}catch(i){r=Bn$1,e.error=i}finally{Hn$1(e,n)}if(o){e.value=t;return}e.value=r,e.version++}});function CI(){throw new Error}var Sp=CI;function Cp(e){Sp(e)}function dl(e){Sp=e}var xI=null;function fl(e,t){let n=Object.create(Ar);n.value=e,t!==void 0&&(n.equal=t);let r=()=>xp(n);return r[ce$2]=n,Aa$1(n),[r,a=>rn(n,a),a=>ml(n,a)]}function xp(e){return kt$1(e),e.value}function rn(e,t){ll()||Cp(e),e.equal(e.value,t)||(e.value=t,NI(e))}function ml(e,t){ll()||Cp(e),rn(e,t(e.value))}var Ar=ae$3(R$1({},Vn$2),{equal:ka$2,value:void 0,kind:`signal`});function NI(e){e.version++,Ep(),cl(e),xI?.(e)}var pl=ae$3(R$1({},Vn$2),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:`effect`});function hl(e){if(e.dirty=!1,e.version>0&&!Tr(e))return;e.version++;let t=tn(e);try{e.cleanup(),e.fn()}finally{Hn$1(e,t)}}var gl=[void 0];function Oa$1(){return gl[0]}function bt$4(e){let t=gl[0];return gl[0]=e,t}var Np=Symbol(`NotFound`);function kr(e){return e===Np||e?.name===`ɵNotFound`}function Tp(e){let t=I$3(null);try{return e()}finally{I$3(t)}}var kl=`https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss`;var _=class extends Error{code;constructor(t,n){super(sn$1(t,n)),this.code=t}};function TI(e){return`NG0${Math.abs(e)}`}function sn$1(e,t){return`${TI(e)}${t?`: `+t:``}`}function z$1(e){for(let t in e)if(e[t]===z$1)return t;throw Error(``)}function Fp(e,t){for(let n in t)Object.hasOwn(t,n)&&!Object.hasOwn(e,n)&&(e[n]=t[n])}function Va(e){if(typeof e==`string`)return e;if(Array.isArray(e))return`[${e.map(Va).join(`, `)}]`;if(e==null)return``+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return``+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function Ha(e,t){return e?t?`${e} ${t}`:e:t||``}var MI=z$1({__forward_ref__:z$1});function $a$1(e){return e.__forward_ref__=$a$1,e}function fe$2(e){return Ol(e)?e():e}function Ol(e){return typeof e==`function`&&Object.hasOwn(e,MI)&&e.__forward_ref__===$a$1}function L$1(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function _e$1(e){return{providers:e.providers||[],imports:e.imports||[]}}function Ua$1(e){return AI(e,za)}function AI(e,t){return Object.hasOwn(e,t)&&e[t]||null}function kI(e){return(e?.[za]??null)||null}function vl(e){return e&&Object.hasOwn(e,Fa$1)?e[Fa$1]:null}var za=z$1({ɵprov:z$1});var Fa$1=z$1({ɵinj:z$1});var D=class{_desc;ngMetadataName=`InjectionToken`;ɵprov;constructor(t,n){this._desc=t,this.ɵprov=void 0,typeof n==`number`?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.ɵprov=L$1({token:this,providedIn:n.providedIn||`root`,factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Rl(e){return e&&!!e.ɵproviders}var Vo=z$1({ɵcmp:z$1});var Ho=z$1({ɵdir:z$1});var Fl=z$1({ɵpipe:z$1});var Po=z$1({ɵfac:z$1});var qn$1=z$1({__NG_ELEMENT_ID__:z$1});var Mp=z$1({__NG_ENV_ID__:z$1});function Lt$3(e){return Pl(e,`@Component`),e[Vo]||null}function Fr(e){return Pl(e,`@Directive`),e[Ho]||null}function Ll(e){return Pl(e,`@Pipe`),e[Fl]||null}function Pl(e,t){if(e==null)throw new _(-919,!1)}function $o(e){return typeof e==`string`?e:e==null?``:String(e)}var Lp=z$1({ngErrorCode:z$1});var OI=z$1({ngErrorMessage:z$1});var RI=z$1({ngTokenPath:z$1});function jl(e,t){return Pp(``,-200,t)}function Wa(e,t){throw new _(-201,!1)}function Pp(e,t,n){let r=new _(t,e);return r[Lp]=t,r[OI]=e,n&&(r[RI]=n),r}function FI(e){return e[Lp]}var yl;function jp(){return yl}function Se(e){let t=yl;return yl=e,t}function Bl(e,t,n){let r=Ua$1(e);if(r&&r.providedIn==`root`)return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(t!==void 0)return t;Wa(e,``)}var qe$1=globalThis;var $n$1={};var PI=`__NG_DI_FLAG__`;var Dl=class{injector;constructor(t){this.injector=t}retrieve(t,n){let r=Un$1(n)||0;try{return this.injector.get(t,r&8?null:$n$1,r)}catch(o){if(kr(o))return o;throw o}}};function jI(e,t=0){let n=Oa$1();if(n===void 0)throw new _(-203,!1);if(n===null)return Bl(e,void 0,t);{let r=BI(t),o=n.retrieve(e,r);if(kr(o)){if(r.optional)return null;throw o}return o}}function F$1(e,t=0){return(jp()||jI)(fe$2(e),t)}function p$1(e,t){return F$1(e,Un$1(t))}function Un$1(e){return typeof e>`u`||typeof e==`number`?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function BI(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function El(e){let t=[];for(let n=0;n<e.length;n++){let r=fe$2(e[n]);if(Array.isArray(r)){if(r.length===0)throw new _(900,!1);let o,i=0;for(let a=0;a<r.length;a++){let s=r[a],c=VI(s);typeof c==`number`?c===-1?o=s.token:i|=c:o=s}t.push(F$1(o,i))}else t.push(F$1(r))}return t}function VI(e){return e[PI]}function an(e,t){return Object.hasOwn(e,Po)?e[Po]:null}function Bp(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}function Vp(e){return e.flat(Number.POSITIVE_INFINITY)}function Ga$1(e,t){e.forEach(n=>Array.isArray(n)?Ga$1(n,t):t(n))}function Vl(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Uo(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Hp(e,t){let n=[];for(let r=0;r<e;r++)n.push(t);return n}function $p(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(o===1)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;){let i=o-2;e[o]=e[i],o--}e[t]=n,e[t+1]=r}}function zo(e,t,n){let r=Lr(e,t);return r>=0?e[r|1]=n:(r=~r,$p(e,r,t,n)),r}function qa$1(e,t){let n=Lr(e,t);if(n>=0)return e[n|1]}function Lr(e,t){return HI(e,t,1)}function HI(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){let i=r+(o-r>>1),a=e[i<<n];if(t===a)return i<<n;a>t?o=i:r=i+1}return~(o<<n)}var cn$1={};var Ee$1=[];var Pr=new D(``);var Hl=new D(``,-1);var $l=new D(``);var Rr=class{get(t,n=$n$1){if(n===$n$1){let o=Pp(``,-201);throw o.name=`ɵNotFound`,o}return n}};function Ya$1(e){return{ɵproviders:e}}function Up(...e){return{ɵproviders:Za$1(!0,e),ɵfromNgModule:!0}}function Za$1(e,...t){let n=[],r=/* @__PURE__ */ new Set,o,i=a=>{n.push(a)};return Ga$1(t,a=>{let s=a;La(s,i,[],r)&&(o||=[],o.push(s))}),o!==void 0&&zp(o,i),n}function zp(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];Ul(o,i=>{t(i,r)})}}function La(e,t,n,r){if(e=fe$2(e),!e)return!1;let o=null,i=vl(e),a=!i&&Lt$3(e);if(!i&&!a){let c=e.ngModule;if(i=vl(c),i)o=c;else return!1}else{if(a&&!a.standalone)return!1;o=e}let s=r.has(o);if(a){if(s)return!1;if(r.add(o),a.dependencies){let c=typeof a.dependencies==`function`?a.dependencies():a.dependencies;for(let l of c)La(l,t,n,r)}}else if(i){if(i.imports!=null&&!s){r.add(o);let l;Ga$1(i.imports,u=>{La(u,t,n,r)&&(l||=[],l.push(u))}),l!==void 0&&zp(l,t)}if(!s){let l=an(o)||(()=>new o);t({provide:o,useFactory:l,deps:Ee$1},o),t({provide:$l,useValue:o,multi:!0},o),t({provide:Pr,useValue:()=>F$1(o),multi:!0},o)}let c=i.providers;if(c!=null&&!s){let l=e;Ul(c,u=>{t(u,l)})}}else return!1;return o!==e&&e.providers!==void 0}function Ul(e,t){for(let n of e)Rl(n)&&(n=n.ɵproviders),Array.isArray(n)?Ul(n,t):t(n)}var $I=z$1({provide:String,useValue:z$1});function Wp(e){return e!==null&&typeof e==`object`&&$I in e}function UI(e){return!!(e&&e.useExisting)}function zI(e){return!!(e&&e.useFactory)}function zn$1(e){return typeof e==`function`}function Gp(e){return!!e.useClass}var Wo=new D(``);var Ra$1={};var Ap={};var bl;function jr(){return bl===void 0&&(bl=new Rr),bl}var ke$1=class{};var Wn$1=class extends ke$1{parent;source;scopes;records=/* @__PURE__ */ new Map;_ngOnDestroyHooks=/* @__PURE__ */ new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,Il(t,a=>this.processProvider(a)),this.records.set(Hl,Or(void 0,this)),o.has(`environment`)&&this.records.set(ke$1,Or(void 0,this));let i=this.records.get(Wo);i!=null&&typeof i.value==`string`&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get($l,Ee$1,{self:!0}))}retrieve(t,n){let r=Un$1(n)||0;try{return this.get(t,$n$1,r)}catch(o){if(kr(o))return o;throw o}}destroy(){Fo(this),this._destroyed=!0;let t=I$3(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),I$3(t)}}onDestroy(t){return Fo(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){Fo(this);let n=bt$4(this),r=Se(void 0);try{return t()}finally{bt$4(n),Se(r)}}get(t,n=$n$1,r){if(Fo(this),Object.hasOwn(t,Mp))return t[Mp](this);let o=Un$1(r),a=bt$4(this),s=Se(void 0);try{if(!(o&4)){let l=this.records.get(t);if(l===void 0){let u=ZI(t)&&Ua$1(t);u&&this.injectableDefInScope(u)?l=Or(_l(t),Ra$1):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l,o)}let c=o&2?jr():this.parent;return n=o&8&&n===$n$1?null:n,c.get(t,n)}catch(c){let l=FI(c);throw l===-200||l===-201?new _(l,null):c}finally{Se(s),bt$4(a)}}resolveInjectorInitializers(){let t=I$3(null),n=bt$4(this),r=Se(void 0);try{let i=this.get(Pr,Ee$1,{self:!0});for(let a of i)a()}finally{bt$4(n),Se(r),I$3(t)}}toString(){return`R3Injector[...]`}processProvider(t){t=fe$2(t);let n=zn$1(t)?t:fe$2(t&&t.provide),r=GI(t);if(!zn$1(t)&&t.multi===!0){let o=this.records.get(n);o||(o=Or(void 0,Ra$1,!0),o.factory=()=>El(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n,r){let o=I$3(null);try{if(n.value===Ap)throw jl(``);return n.value===Ra$1&&(n.value=Ap,n.value=n.factory(void 0,r)),typeof n.value==`object`&&n.value&&YI(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{I$3(o)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=fe$2(t.providedIn);return typeof n==`string`?n===`any`||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function _l(e){let t=Ua$1(e),n=t!==null?t.factory:an(e);if(n!==null)return n;if(e instanceof D)throw new _(-204,!1);if(e instanceof Function)return WI(e);throw new _(-204,!1)}function WI(e){if(e.length>0)throw new _(-204,!1);let n=kI(e);return n!==null?()=>n.factory(e):()=>new e}function GI(e){if(Wp(e))return Or(void 0,e.useValue);return Or(zl(e),Ra$1)}function zl(e,t,n){let r;if(zn$1(e)){let o=fe$2(e);return an(o)||_l(o)}else if(Wp(e))r=()=>fe$2(e.useValue);else if(zI(e))r=()=>e.useFactory(...El(e.deps||[]));else if(UI(e))r=(o,i)=>F$1(fe$2(e.useExisting),i!==void 0&&i&8?8:void 0);else{let o=fe$2(e&&(e.useClass||e.provide));if(qI(e))r=()=>new o(...El(e.deps));else return an(o)||_l(o)}return r}function Fo(e){if(e.destroyed)throw new _(-205,!1)}function Or(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function qI(e){return!!e.deps}function YI(e){return e!==null&&typeof e==`object`&&typeof e.ngOnDestroy==`function`}function ZI(e){return typeof e==`function`||typeof e==`object`&&e.ngMetadataName===`InjectionToken`}function Il(e,t){for(let n of e)Array.isArray(n)?Il(n,t):n&&Rl(n)?Il(n.ɵproviders,t):t(n)}function Ka(e,t){let n;e instanceof Wn$1?(Fo(e),n=e):n=new Dl(e);let o=bt$4(n),i=Se(void 0);try{return t()}finally{bt$4(o),Se(i)}}function qp(){return jp()!==void 0||Oa$1()!=null}var nt$1=0;var E$1=1;var N$1=2;var re$1=3;var Ye$2=4;var he$2=5;var Yn$2=6;var Br=7;var oe$3=8;var xe$2=9;var rt$1=10;var Y$1=11;var Vr=12;var Wl=13;var ln=14;var be=15;var un$1=16;var Zn$1=17;var yt$4=18;var Go=19;var Gl=20;var Ot$2=21;var Qa=22;var Rt$1=23;var Ve$1=24;var Kn$1=25;var Yp=26;var Hr=27;var W$1=28;var Zp=1;var dn$1=6;var Qn$1=7;var qo=8;var Xn$2=9;var ie$2=10;function Pt$2(e){return Array.isArray(e)&&typeof e[Zp]==`object`}function Ze$2(e){return Array.isArray(e)&&e[Zp]===!0}function ql(e){return(e.flags&4)!==0}function Dt$1(e){return e.componentOffset>-1}function $r(e){return(e.flags&1)===1}function Et$2(e){return!!e.template}function Ur(e){return(e[N$1]&512)!==0}function fn$1(e){return(e[N$1]&256)===256}var Q$1=(function(e){return e[e.NONE=0]=`NONE`,e[e.HTML=1]=`HTML`,e[e.STYLE=2]=`STYLE`,e[e.SCRIPT=3]=`SCRIPT`,e[e.URL=4]=`URL`,e[e.RESOURCE_URL=5]=`RESOURCE_URL`,e[e.ATTRIBUTE_NO_BINDING=6]=`ATTRIBUTE_NO_BINDING`,e})(Q$1||{});var Lo;var Gn$1=`svg`;var Xa$1=`math`;var wl=``;var kp=`*`;var Sl=()=>Object.create(null);function KI(){return Lo||(Lo=Sl(),on(Q$1.HTML,void 0,[[`iframe`,[`srcdoc`]],[`*`,[`innerHTML`,`outerHTML`]]]),on(Q$1.STYLE,void 0,[[`*`,[`style`]]]),on(Q$1.URL,void 0,[[`*`,[`formAction`]],[`area`,[`href`]],[`a`,[`href`,`xlink:href`]],[`form`,[`action`]]]),on(Q$1.URL,Xa$1,[[`*`,[`href`,`xlink:href`]]]),on(Q$1.RESOURCE_URL,void 0,[[`base`,[`href`]],[`embed`,[`src`]],[`frame`,[`src`]],[`iframe`,[`src`]],[`link`,[`href`]],[`object`,[`codebase`,`data`]]]),on(Q$1.URL,Gn$1,[[`a`,[`href`,`xlink:href`]]]),on(Q$1.ATTRIBUTE_NO_BINDING,Gn$1,[[`animate`,[`attributeName`,`values`,`to`,`from`]],[`set`,[`to`,`attributeName`]],[`animateMotion`,[`attributeName`]],[`animateTransform`,[`attributeName`]]]),on(Q$1.ATTRIBUTE_NO_BINDING,void 0,[[`unknown`,[`attributeName`,`values`,`to`,`from`,`sandbox`,`allow`,`allowFullscreen`,`referrerPolicy`,`csp`,`fetchPriority`,`credentialless`]],[`iframe`,[`sandbox`,`allow`,`allowFullscreen`,`referrerPolicy`,`csp`,`fetchPriority`,`credentialless`]]]),Lo)}function on(e,t,n){let r=t??wl;for(let[o,i]of n){let a=o.toLowerCase();for(let s of i){let c=s.toLowerCase(),l=Lo[c]??=Sl(),u=l[r]??=Sl();u[a]=e}}}function Kp(e,t,n){let i=KI()[t.replace(/^:+/,``).toLowerCase()];if(!i)return Q$1.NONE;let a=e.toLowerCase(),s;if(n){let c=i[n];c&&(s=c[a]??c[kp])}if(s===void 0){let c=i[wl];c&&(s=c[a]??c[kp])}if(s===void 0&&(!n||n===wl)){let c=i[Gn$1];c&&(s=c[a])}return s??Q$1.NONE}function ve(e){for(;Array.isArray(e);)e=e[nt$1];return e}function Yl(e,t){return ve(t[e])}function Oe$1(e,t){return ve(t[e.index])}function zr(e,t){return e.data[t]}function Ja(e,t){return e[t]}function Zl(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}function Ke$2(e,t){let n=t[e];return Pt$2(n)?n:n[nt$1]}function Qp(e){return(e[N$1]&4)===4}function es(e){return(e[N$1]&128)===128}function Xp(e){return Ze$2(e[re$1])}function He$2(e,t){return t==null?null:e[t]}function Kl(e){e[Zn$1]=0}function ts(e){e[N$1]&1024||(e[N$1]|=1024,es(e)&&Jn$1(e))}function Jp(e,t){for(;e>0;)t=t[ln],e--;return t}function Yo(e){return!!(e[N$1]&5120||e[Ve$1]?.dirty)}function ns(e){e[rt$1].changeDetectionScheduler?.notify(8),e[N$1]&64&&(e[N$1]|=1024),Yo(e)&&Jn$1(e)}function Jn$1(e){e[rt$1].changeDetectionScheduler?.notify(0);let t=Ft$2(e);for(;t!==null&&!(t[N$1]&4096||(t[N$1]|=4096,!es(t)));)t=Ft$2(t)}function Zo(e,t){if(fn$1(e))throw new _(911,!1);e[Ot$2]===null&&(e[Ot$2]=[]),e[Ot$2].push(t)}function Ql(e,t){if(e[Ot$2]===null)return;let n=e[Ot$2].indexOf(t);n!==-1&&e[Ot$2].splice(n,1)}function Ft$2(e){let t=e[re$1];return Ze$2(t)?t[re$1]:t}function Xl(e){return e[Br]??=[]}function Jl(e){return e.cleanup??=[]}function eh(e,t,n,r){let o=Xl(t);o.push(n),e.firstCreatePass&&Jl(e).push(r,o.length-1)}var O$1={lFrame:mh(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Cl=!1;function th(){return O$1.lFrame.elementDepthCount}function nh(){O$1.lFrame.elementDepthCount++}function eu(){O$1.lFrame.elementDepthCount--}function rs(){return O$1.bindingsEnabled}function tu(){return O$1.skipHydrationRootTNode!==null}function nu(e){return O$1.skipHydrationRootTNode===e}function ru(){O$1.skipHydrationRootTNode=null}function S$1(){return O$1.lFrame.lView}function G$1(){return O$1.lFrame.tView}function rh(e){return O$1.lFrame.contextLView=e,e[oe$3]}function oh(e){return O$1.lFrame.contextLView=null,e}function se$3(){let e=ou();for(;e!==null&&e.type===64;)e=e.parent;return e}function ou(){return O$1.lFrame.currentTNode}function ih(){let e=O$1.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function Wr(e,t){let n=O$1.lFrame;n.currentTNode=e,n.isParent=t}function iu(){return O$1.lFrame.isParent}function au(){O$1.lFrame.isParent=!1}function ah(){return O$1.lFrame.contextLView}function su(){return Cl}function jo(e){let t=Cl;return Cl=e,t}function Ko(){let e=O$1.lFrame,t=e.bindingRootIndex;return t===-1&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function sh(e){return O$1.lFrame.bindingIndex=e}function mn$3(){return O$1.lFrame.bindingIndex++}function cu(e){let t=O$1.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function ch(){return O$1.lFrame.inI18n}function lh(e,t){let n=O$1.lFrame;n.bindingIndex=n.bindingRootIndex=e,os(t)}function uh(){return O$1.lFrame.currentDirectiveIndex}function os(e){O$1.lFrame.currentDirectiveIndex=e}function dh(e){let t=O$1.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function is(){return O$1.lFrame.currentQueryIndex}function Qo(e){O$1.lFrame.currentQueryIndex=e}function QI(e){let t=e[E$1];return t.type===2?t.declTNode:t.type===1?e[he$2]:null}function lu(e,t,n){if(n&4){let o=t,i=e;for(;o=o.parent,o===null&&!(n&1);)if(o=QI(i),o===null||(i=i[ln],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=O$1.lFrame=fh();return r.currentTNode=t,r.lView=e,!0}function as(e){let t=fh(),n=e[E$1];O$1.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function fh(){let e=O$1.lFrame,t=e===null?null:e.child;return t===null?mh(e):t}function mh(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function ph(){let e=O$1.lFrame;return O$1.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var uu=ph;function ss(){let e=ph();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function hh(e){return(O$1.lFrame.contextLView=Jp(e,O$1.lFrame.contextLView))[oe$3]}function _t$4(){return O$1.lFrame.selectedIndex}function pn$1(e){O$1.lFrame.selectedIndex=e}function er(){let e=O$1.lFrame;return zr(e.tView,e.selectedIndex)}function gh(){O$1.lFrame.currentNamespace=Gn$1}function bh(){XI()}function XI(){O$1.lFrame.currentNamespace=null}function du(){return O$1.lFrame.currentNamespace}var vh=!0;function cs(){return vh}function Xo(e){vh=e}function xl(e,t=null,n=null,r){let o=yh(e,t,n,r);return o.resolveInjectorInitializers(),o}function yh(e,t=null,n=null,r,o=/* @__PURE__ */ new Set){return new Wn$1([n||Ee$1,Up(e)],t||jr(),null,o)}var Z$2=class e{static THROW_IF_NOT_FOUND=$n$1;static NULL=new Rr;static create(t,n){if(Array.isArray(t))return xl({name:``},n,t,``);{let r=t.name??``;return xl({name:r},t.parent,t.providers,r)}}static ɵprov=L$1({token:e,providedIn:`any`,factory:()=>F$1(Hl)});static __NG_ELEMENT_ID__=-1};var j$1=new D(``);var Be$1=class{static __NG_ELEMENT_ID__=JI;static __NG_ENV_ID__=t=>t};var Pa$1=class extends Be$1{_lView;constructor(t){super(),this._lView=t}get destroyed(){return fn$1(this._lView)}onDestroy(t){let n=this._lView;return Zo(n,t),()=>Ql(n,t)}};function JI(){return new Pa$1(S$1())}var Dh=!1;var Eh=new D(``);var tr=(()=>{class e{taskId=0;pendingTasks=/* @__PURE__ */ new Set;destroyed=!1;pendingTask=new Fn$1(!1);debugTaskTracker=p$1(Eh,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new k$2(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static ɵprov=L$1({token:e,providedIn:`root`,factory:()=>new e})}return e})();var Nl=class extends U$1{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,qp()&&(this.destroyRef=p$1(Be$1,{optional:!0})??void 0,this.pendingTasks=p$1(tr,{optional:!0})??void 0)}emit(t){let n=I$3(null);try{super.next(t)}finally{I$3(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),a=r;if(t&&typeof t==`object`){let c=t;o=c.next?.bind(c),i=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:o,error:i,complete:a});return t instanceof te$1&&t.add(s),s}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}};var Ce=Nl;function ja$1(...e){}function fu(e){let t,n;function r(){e=ja$1;try{n!==void 0&&typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch(o){}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame==`function`&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}function _h(e){return queueMicrotask(()=>e()),()=>{e=ja$1}}var Ih=`isAngularZone`;var V=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Ce(!1);onMicrotaskEmpty=new Ce(!1);onStable=new Ce(!1);onError=new Ce(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Dh}=t;if(typeof Zone>`u`)throw new _(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!o&&r,a.shouldCoalesceRunChangeDetection=o,a.callbackScheduled=!1,a.scheduleInRootZone=i,nw(a)}static isInAngularZone(){return typeof Zone<`u`&&Zone.current.get(Ih)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new _(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new _(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,a=i.scheduleEventTask(`NgZoneEvent: `+o,t,ew,ja$1,ja$1);try{return i.runTask(a,n,r)}finally{i.cancelTask(a)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}};var ew={};function mu(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function tw(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){fu(()=>{e.callbackScheduled=!1,Tl(e),e.isCheckStableRunning=!0,mu(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),Tl(e)}function nw(e){let t=()=>{tw(e)};e._inner=e._inner.fork({name:`angular`,properties:{[Ih]:!0},onInvokeTask:(n,r,o,i,a,s)=>{if(rw(s))return n.invokeTask(o,i,a,s);try{return Op(e),n.invokeTask(o,i,a,s)}finally{(e.shouldCoalesceEventChangeDetection&&i.type===`eventTask`||e.shouldCoalesceRunChangeDetection)&&t(),Rp(e)}},onInvoke:(n,r,o,i,a,s,c)=>{try{return Op(e),n.invoke(o,i,a,s,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!ow(s)&&t(),Rp(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&(i.change==`microTask`?(e._hasPendingMicrotasks=i.microTask,Tl(e),mu(e)):i.change==`macroTask`&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}function Tl(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Op(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Rp(e){e._nesting--,mu(e)}var Bo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Ce;onMicrotaskEmpty=new Ce;onStable=new Ce;onError=new Ce;run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function rw(e){return wh(e,`__ignore_ng_zone__`)}function ow(e){return wh(e,`__scheduler_tick__`)}function wh(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var Ge$2=class{_console=console;handleError(t){this._console.error(`ERROR`,t)}};function Sh(e){return Ch(e)?e:new Ml(e)}function Ch(e){return e instanceof Error||typeof e==`object`&&e!==null&&typeof e.name==`string`&&typeof e.message==`string`}var Ml=class extends Error{constructor(t){super(String(t),{cause:t}),this.name=`ErrorBoundaryWrappedError`}};var jt$1=new D(``,{factory:()=>{let e=p$1(V),t=p$1(ke$1),n;return r=>{e.runOutsideAngular(()=>{t.destroyed&&!n?setTimeout(()=>{throw r}):(n??=t.get(Ge$2),n.handleError(r))})}}});var xh={provide:Pr,useValue:()=>{p$1(Ge$2,{optional:!0})},multi:!0};function Bt$2(e,t){let[n,r,o]=fl(e,t?.equal),i=n;i[ce$2];return i.set=r,i.update=o,i.asReadonly=ls.bind(i),i}function ls(){let e=this[ce$2];if(e.readonlyFn===void 0){let t=()=>this();t[ce$2]=e,e.readonlyFn=t}return e.readonlyFn}var Vt$2=new D(``,{factory:()=>iw});var iw=`ng`;var us=new D(``);var nr=new D(``,{providedIn:`platform`,factory:()=>`unknown`});var pu=new D(``);var hn$1=new D(``,{factory:()=>p$1(j$1).body?.querySelector(`[ngCspNonce]`)?.getAttribute(`ngCspNonce`)||null});var ds={breakpoints:[16,32,48,64,96,128,256,384,640,750,828,1080,1200,1920,2048,3840],placeholderResolution:30,disableImageSizeWarning:!1,disableImageLazyLoadWarning:!1};var fs=new D(``,{factory:()=>ds});var Gr=(()=>{class e{view;node;constructor(n,r){this.view=n,this.node=r}static __NG_ELEMENT_ID__=aw}return e})();function aw(){return new Gr(S$1(),se$3())}var vt$3=class{};var Jo=new D(``,{factory:()=>!0});var hu=new D(``);var ms=(()=>{class e{static ɵprov=L$1({token:e,providedIn:`root`,factory:()=>new Al})}return e})();var Al=class{dirtyEffectCount=0;queues=/* @__PURE__ */ new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let n=t.zone,r=this.queues.get(n);r.has(t)&&(r.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,/* @__PURE__ */ new Set);let r=this.queues.get(n);r.has(t)||r.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[n,r]of this.queues)n===null?t||=this.flushQueue(r):t||=n.run(()=>this.flushQueue(r));t||(this.dirtyEffectCount=0)}}flushQueue(t){let n=!1;for(let r of t)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}};var Ba=class{constructor(t){this[ce$2]=t}destroy(){this[ce$2].destroy()}};function qr(e,t){let n=t?.injector??p$1(Z$2),r=t?.manualCleanup!==!0?n.get(Be$1):null,o,i=n.get(Gr,null,{optional:!0}),a=n.get(vt$3);return i!==null?(o=Th(i.view,a,e),r instanceof Pa$1&&r._lView===i.view&&(r=null)):o=lw(e,n.get(ms),a),o.injector=n,r!==null&&(o.onDestroyFns=[r.onDestroy(()=>o.destroy())]),new Ba(o)}var Nh=ae$3(R$1({},pl),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let e=jo(!1);try{hl(this)}finally{jo(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=I$3(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],I$3(e)}}});var sw=ae$3(R$1({},Nh),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(nn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}});var cw=ae$3(R$1({},Nh),{consumerMarkedDirty(){this.view[N$1]|=4096,Jn$1(this.view),this.notifier.notify(13)},destroy(){if(nn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.view[Rt$1]?.delete(this)}});function Th(e,t,n){let r=Object.create(cw);return r.view=e,r.zone=typeof Zone<`u`?Zone.current:null,r.notifier=t,r.userFn=n,r.fn=Mh(r,n),e[Rt$1]??=/* @__PURE__ */ new Set,e[Rt$1].add(r),r.consumerMarkedDirty(r),r}function lw(e,t,n){let r=Object.create(sw);return r.userFn=e,r.fn=Mh(r,e),r.scheduler=t,r.notifier=n,r.zone=typeof Zone<`u`?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function Mh(e,t){return()=>{t(n=>(e.cleanupFns??=[]).push(n))}}function rr(e){return typeof e==`function`&&e[ce$2]!==void 0}var ps=(()=>{class e{internalPendingTasks=p$1(tr);scheduler=p$1(vt$3);errorHandler=p$1(jt$1);add(){let n=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(n)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(n))}}run(n){let r=this.add();try{n().catch(this.errorHandler).finally(r)}catch(o){this.errorHandler(o),r()}}static ɵprov=L$1({token:e,providedIn:`root`,factory:()=>new e})}return e})();var oo=Symbol(`InputSignalNode#UNSET`);var md=ae$3(R$1({},Ar),{transformFn:void 0,applyValueToInputSignal(e,t){rn(e,t)}});function ui(e){return{toString:e}.toString()}var P=(function(e){return e[e.TemplateCreateStart=0]=`TemplateCreateStart`,e[e.TemplateCreateEnd=1]=`TemplateCreateEnd`,e[e.TemplateUpdateStart=2]=`TemplateUpdateStart`,e[e.TemplateUpdateEnd=3]=`TemplateUpdateEnd`,e[e.LifecycleHookStart=4]=`LifecycleHookStart`,e[e.LifecycleHookEnd=5]=`LifecycleHookEnd`,e[e.OutputStart=6]=`OutputStart`,e[e.OutputEnd=7]=`OutputEnd`,e[e.BootstrapApplicationStart=8]=`BootstrapApplicationStart`,e[e.BootstrapApplicationEnd=9]=`BootstrapApplicationEnd`,e[e.BootstrapComponentStart=10]=`BootstrapComponentStart`,e[e.BootstrapComponentEnd=11]=`BootstrapComponentEnd`,e[e.ChangeDetectionStart=12]=`ChangeDetectionStart`,e[e.ChangeDetectionEnd=13]=`ChangeDetectionEnd`,e[e.ChangeDetectionSyncStart=14]=`ChangeDetectionSyncStart`,e[e.ChangeDetectionSyncEnd=15]=`ChangeDetectionSyncEnd`,e[e.AfterRenderHooksStart=16]=`AfterRenderHooksStart`,e[e.AfterRenderHooksEnd=17]=`AfterRenderHooksEnd`,e[e.ComponentStart=18]=`ComponentStart`,e[e.ComponentEnd=19]=`ComponentEnd`,e[e.DeferBlockStateStart=20]=`DeferBlockStateStart`,e[e.DeferBlockStateEnd=21]=`DeferBlockStateEnd`,e[e.DynamicComponentStart=22]=`DynamicComponentStart`,e[e.DynamicComponentEnd=23]=`DynamicComponentEnd`,e[e.HostBindingsUpdateStart=24]=`HostBindingsUpdateStart`,e[e.HostBindingsUpdateEnd=25]=`HostBindingsUpdateEnd`,e})(P||{});var ws=class{previousValue;currentValue;firstChange;constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function xg(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}var Ng=null;var io=(()=>{Ng=Ah;let e=()=>Ah;return e.ngInherit=!0,e})();function _w(){return Ng}function Ah(e){return e.type.prototype.ngOnChanges&&(e.setInput=ww),Iw}function Iw(){let e=Tg(this),t=e?.current;if(t){let n=e.previous;if(n===cn$1)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function ww(e,t,n,r,o){let i=this.declaredInputs[r],a=Tg(e)||Sw(e,{previous:cn$1,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[i];s[i]=new ws(l&&l.currentValue,n,c===cn$1),xg(e,t,o,n)}var Tu=`__ngSimpleChanges__`;function Tg(e){return Object.hasOwn(e,Tu)&&e[Tu]||null}function Sw(e,t){return e[Tu]=t}var kh=[];var H$2=function(e,t=null,n){for(let r=0;r<kh.length;r++){let o=kh[r];o(e,t,n)}};function Cw(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let a=_w()(t);(n.preOrderHooks??=[]).push(e,a),(n.preOrderCheckHooks??=[]).push(e,a)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function Mg(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=e.data[n].type.prototype;a&&(e.contentHooks??=[]).push(-n,a),s&&((e.contentHooks??=[]).push(n,s),(e.contentCheckHooks??=[]).push(n,s)),c&&(e.viewHooks??=[]).push(-n,c),l&&((e.viewHooks??=[]).push(n,l),(e.viewCheckHooks??=[]).push(n,l)),u!=null&&(e.destroyHooks??=[]).push(n,u)}}function ys(e,t,n){Ag(e,t,3,n)}function Ds(e,t,n,r){(e[N$1]&3)===n&&Ag(e,t,n,r)}function gu(e,t){let n=e[N$1];(n&3)===t&&(n&=8191,n+=1,e[N$1]=n)}function Ag(e,t,n,r){let o=r!==void 0?e[Zn$1]&65535:0,i=r??-1,a=t.length-1,s=0;for(let c=o;c<a;c++)if(typeof t[c+1]==`number`){if(s=t[c],r!=null&&s>=r)break}else t[c]<0&&(e[Zn$1]+=65536),(s<i||i==-1)&&(xw(e,n,t,c),e[Zn$1]=(e[Zn$1]&4294901760)+c+2),c++}function Oh(e,t){H$2(P.LifecycleHookStart,e,t);let n=I$3(null);try{t.call(e)}finally{I$3(n),H$2(P.LifecycleHookEnd,e,t)}}function xw(e,t,n,r){let o=n[r]<0,i=n[r+1],s=e[o?-n[r]:n[r]];o?e[N$1]>>13<e[Zn$1]>>16&&(e[N$1]&3)===t&&(e[N$1]+=8192,Oh(s,i)):Oh(s,i)}var Kr=-1;var ar=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,r,o){this.factory=t,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};function Nw(e){return(e.flags&8)!==0}function Tw(e){return(e.flags&16)!==0}function Mw(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o==`number`){if(o!==0)break;r++;let i=n[r++],a=n[r++],s=n[r++];e.setAttribute(t,a,s,i)}else{let i=o,a=n[++r];Aw(i)?e.setProperty(t,i,a):e.setAttribute(t,i,a),r++}}return r}function kg(e){return e===3||e===4||e===6}function Aw(e){return e.charCodeAt(0)===64}function Xr(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o==`number`?n=o:n===0||(n===-1||n===2?Rh(e,n,o,null,t[++r]):Rh(e,n,o,null,null))}}return e}function Rh(e,t,n,r,o){let i=0,a=e.length;if(t===-1)a=-1;else for(;i<e.length;){let s=e[i++];if(typeof s==`number`){if(s===t){a=-1;break}else if(s>t){a=i-1;break}}}for(;i<e.length;){let s=e[i];if(typeof s==`number`)break;if(s===n){o!==null&&(e[i+1]=o);return}i++,o!==null&&i++}a!==-1&&(e.splice(a,0,t),i=a+1),e.splice(i++,0,n),o!==null&&e.splice(i++,0,o)}function Og(e){return e!==Kr}function Ss(e){return e&32767}function kw(e){return e>>16}function Cs(e,t){let n=kw(e),r=t;for(;n>0;)r=r[ln],n--;return r}var Mu=!0;function xs(e){let t=Mu;return Mu=e,t}var Rg=255;var Fg=5;var Rw=0;var It$2={};function Fw(e,t,n){let r;typeof n==`string`?r=n.charCodeAt(0)||0:Object.hasOwn(n,qn$1)&&(r=n[qn$1]),r??=n[qn$1]=Rw++;let o=r&Rg,i=1<<o;t.data[e+(o>>Fg)]|=i}function Ns(e,t){let n=Lg(e,t);if(n!==-1)return n;let r=t[E$1];r.firstCreatePass&&(e.injectorIndex=t.length,bu(r.data,e),bu(t,null),bu(r.blueprint,null));let o=pd(e,t),i=e.injectorIndex;if(Og(o)){let a=Ss(o),s=Cs(o,t),c=s[E$1].data;for(let l=0;l<8;l++)t[i+l]=s[a+l]|c[a+l]}return t[i+8]=o,i}function bu(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Lg(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function pd(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=Hg(o),r===null)return Kr;if(n++,o=o[ln],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Kr}function Au(e,t,n){Fw(e,t,n)}function Lw(e,t){if(t===`class`)return e.classes;if(t===`style`)return e.styles;let n=e.attrs;if(n){let r=n.length,o=0;for(;o<r;){let i=n[o];if(kg(i))break;if(i===0)o=o+2;else if(typeof i==`number`)for(o++;o<r&&typeof n[o]==`string`;)o++;else{if(i===t)return n[o+1];o=o+2}}}return null}function Pg(e,t,n){if(n&8||e!==void 0)return e;Wa(t,`NodeInjector`)}function jg(e,t,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=e[xe$2],i=Se(void 0);try{return o?o.get(t,r,n&8):Bl(t,r,n&8)}finally{Se(i)}}return Pg(r,t,n)}function Bg(e,t,n,r=0,o){if(e!==null){if(t[N$1]&2048&&!(r&2)){let a=Vw(e,t,n,r,It$2);if(a!==It$2)return a}let i=Vg(e,t,n,r,It$2);if(i!==It$2)return i}return jg(t,n,r,o)}function Vg(e,t,n,r,o){let i=jw(n);if(typeof i==`function`){if(!lu(t,e,r))return r&1?Pg(o,n,r):jg(t,n,r,o);try{let a;if(a=i(r),a==null&&!(r&8))Wa(n);else return a}finally{uu()}}else if(typeof i==`number`){let a=null,s=Lg(e,t),c=Kr,l=r&1?t[be][he$2]:null;for((s===-1||r&4)&&(c=s===-1?pd(e,t):t[s+8],c===Kr||!Lh(r,!1)?s=-1:(a=t[E$1],s=Ss(c),t=Cs(c,t)));s!==-1;){let u=t[E$1];if(Fh(i,s,u.data)){let d=Pw(s,t,n,a,r,l);if(d!==It$2)return d}c=t[s+8],c!==Kr&&Lh(r,t[E$1].data[s+8]===l)&&Fh(i,s,t)?(a=u,s=Ss(c),t=Cs(c,t)):s=-1}}return o}function Pw(e,t,n,r,o,i){let a=t[E$1],s=a.data[e+8],u=Es(s,a,n,r==null?Dt$1(s)&&Mu:r!=a&&(s.type&3)!==0,o&1&&i===s);return u!==null?ri(t,a,u,s,o):It$2}function Es(e,t,n,r,o){let i=e.providerIndexes,a=t.data,s=i&1048575,c=e.directiveStart,l=e.directiveEnd,u=i>>20,d=r?s:s+u,m=o?s+u:l;for(let f=d;f<m;f++){let h=a[f];if(f<c&&n===h||f>=c&&h.type===n)return f}if(o){let f=a[c];if(f&&Et$2(f)&&f.type===n)return c}return null}function ri(e,t,n,r,o){let i=e[n],a=t.data;if(i instanceof ar){let s=i;if(s.resolving)throw jl(``);let c=xs(s.canSeeViewProviders);s.resolving=!0;a[n].type||a[n];let d=s.injectImpl?Se(s.injectImpl):null;lu(e,r,0);try{i=e[n]=s.factory(void 0,o,a,e,r),t.firstCreatePass&&n>=r.directiveStart&&Cw(n,a[n],t)}finally{d!==null&&Se(d),xs(c),s.resolving=!1,uu()}}return i}function jw(e){if(typeof e==`string`)return e.charCodeAt(0)||0;let t=Object.hasOwn(e,qn$1)?e[qn$1]:void 0;return typeof t==`number`?t>=0?t&Rg:Bw:t}function Fh(e,t,n){let r=1<<e;return!!(n[t+(e>>Fg)]&r)}function Lh(e,t){return!(e&2)&&!(e&1&&t)}var Ht$2=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Bg(this._tNode,this._lView,t,Un$1(r),n)}};function Bw(){return new Ht$2(se$3(),S$1())}function hd(e){return ui(()=>{let t=e.prototype.constructor,n=t[Po]||ku(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[Po]||ku(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function ku(e){return Ol(e)?()=>{let t=ku(fe$2(e));return t&&t()}:an(e)}function Vw(e,t,n,r,o){let i=e,a=t,s=r&1?t[be][he$2]:null;for(;i!==null&&a!==null&&a[N$1]&2048&&!Ur(a);){let c=Vg(i,a,n,r|2,It$2);if(c!==It$2)return c;if(r&=-5,r&1&&i===s)return o;let l=i.parent;if(!l){let u=a[Gl];if(u){let d=u.get(n,It$2,r);if(d!==It$2)return d}l=Hg(a),a=a[ln]}i=l}return o}function Hg(e){let t=e[E$1],n=t.type;return n===2?t.declTNode:n===1?e[he$2]:null}function gd(e){return Lw(se$3(),e)}var Hw=()=>(typeof requestIdleCallback<`u`?requestIdleCallback:e=>setTimeout(e)).bind(globalThis);var $w=()=>(typeof requestIdleCallback<`u`?cancelIdleCallback:clearTimeout).bind(globalThis);var $g=new D(``,{factory:()=>new Ou});var Ou=class{requestIdleCallback=Hw();cancelIdleCallback=$w();requestOnIdle(t,n){return this.requestIdleCallback(t,n)}cancelOnIdle(t){return this.cancelIdleCallback(t)}};function B$2(e){return{token:e.token,providedIn:e.autoProvided===!1?null:`root`,factory:e.factory,value:void 0}}function Uw(){return ao(se$3(),S$1())}function ao(e,t){return new pe$2(Oe$1(e,t))}var pe$2=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=Uw}return e})();function Ug(e){return e instanceof pe$2?e.nativeElement:e}function zw(){return this._results[Symbol.iterator]()}var sr=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new U$1}constructor(t=!1){this._emitDistinctChangesOnly=t}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){this.dirty=!1;let r=Vp(t);(this._changesDetected=!Bp(this._results,r,n))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(t){this._onDirty=t}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=zw};var Ww=/(^-?|--!?)>|<(?=!--|!-$)/g;var Gw=/(<|>)/g;var qw=`​$1​`;function Yw(e){return e.replace(Ww,t=>t.replace(Gw,qw))}function zg(e){let t=e.nextSibling;if(t&&e!==t.previousSibling)throw Wg(t);return t}function Zw(e){let t=e.firstChild;if(t&&(t.parentNode!==e||t.previousSibling!==null))throw Wg(t);return t}function Ph(e){let t=e.nodeName;return typeof t==`string`?t:`FORM`}function Wg(e){return/* @__PURE__ */ new Error(`Action failed because the element is clobbered: ${e.outerHTML}`)}function Gg(e){return(e.flags&128)===128}var bd=(function(e){return e[e.OnPush=0]=`OnPush`,e[e.Eager=1]=`Eager`,e[e.Default=1]=`Default`,e})(bd||{});var qg=/* @__PURE__ */ new Map;var Kw=0;function Qw(){return Kw++}function Xw(e){qg.set(e[Go],e)}function Ru(e){qg.delete(e[Go])}var jh=`__ngContext__`;function Jr(e,t){Pt$2(t)?(e[jh]=t[Go],Xw(t)):e[jh]=t}function Yg(e){return Kg(e[Vr])}function Zg(e){return Kg(e[Ye$2])}function Kg(e){for(;e!==null&&!Ze$2(e);)e=e[Ye$2];return e}var Fu;function vd(e){Fu=e}function yd(){if(Fu!==void 0)return Fu;if(typeof document<`u`)return document;throw new _(210,!1)}var Qg=`r`;var Dd=`di`;var Ed=`s`;var Xg=!1;var Jg=new D(``,{factory:()=>Xg});var eb=new D(``);var Bh=/* @__PURE__ */ new WeakMap;function Jw(e,t){if(e==null||typeof e!=`object`)return;let n=Bh.get(e);n||(n=/* @__PURE__ */ new WeakSet,Bh.set(e,n)),n.add(t)}var tb=new D(``);function Bs(e){return(e.flags&32)===32}var n0=()=>null;function nb(e,t,n=!1){return n0(e,t,n)}function _d(e){return e.get(eb,!1,{optional:!0})}function rb(e,t){let n=e.contentQueries;if(n!==null){let r=I$3(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],a=n[o+1];if(a!==-1){let s=e.data[a];Qo(i),s.contentQueries(2,t[a],a)}}}finally{I$3(r)}}}function Lu(e,t,n){Qo(0);let r=I$3(null);try{t(e,n)}finally{I$3(r)}}function Id(e,t,n){if(ql(t)){let r=I$3(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let a=o;a<i;a++){let s=e.data[a];if(s.contentQueries){let c=n[a];s.contentQueries(1,c,a)}}}finally{I$3(r)}}}var it$1=(function(e){return e[e.Emulated=0]=`Emulated`,e[e.None=2]=`None`,e[e.ShadowDom=3]=`ShadowDom`,e[e.ExperimentalIsolatedShadowDom=4]=`ExperimentalIsolatedShadowDom`,e})(it$1||{});var $t$1=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}`}};var Pu=class extends $t$1{getTypeName(){return`HTML`}};var ju=class extends $t$1{getTypeName(){return`Style`}};var Bu=class extends $t$1{getTypeName(){return`Script`}};var Vu=class extends $t$1{getTypeName(){return`URL`}};var Hu=class extends $t$1{getTypeName(){return`ResourceURL`}};function Ie(e){return e instanceof $t$1?e.changingThisBreaksApplicationSecurity:e}function Ut$1(e,t){let n=ob(e);if(n!=null&&n!==t){if(n===`ResourceURL`&&t===`URL`)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${kl})`)}return n===t}function ob(e){return e instanceof $t$1&&e.getTypeName()||null}function wd(e){return new Pu(e)}function Sd(e){return new ju(e)}function Cd(e){return new Bu(e)}function xd(e){return new Vu(e)}function Nd(e){return new Hu(e)}var r0={"http://www.w3.org/2000/svg":Gn$1,"http://www.w3.org/1998/Math/MathML":Xa$1};var hs;function o0(){if(hs===void 0&&(hs=null,qe$1.trustedTypes))try{hs=qe$1.trustedTypes.createPolicy(`angular`,{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch(e){}return hs}function Vs(e){return o0()?.createHTML(e)||e}var gs;function i0(){if(gs===void 0&&(gs=null,qe$1.trustedTypes))try{gs=qe$1.trustedTypes.createPolicy(`angular#unsafe-bypass`,{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch(e){}return gs}function Vh(e){return i0()?.createHTML(e)||e}function a0(e){let t=new Uu(e);return s0()?new $u(t):t}var $u=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t=`<body><remove></remove>`+t;try{let n=new window.DOMParser().parseFromString(Vs(t),`text/html`).body;return n===null?this.inertDocumentHelper.getInertBodyElement(t):(n.firstChild?.remove(),n)}catch(n){return null}}};var Uu=class{inertDocument;constructor(t){this.inertDocument=t.implementation.createHTMLDocument(`sanitization-inert`)}getInertBodyElement(t){let n=this.inertDocument.createElement(`template`);return n.innerHTML=Vs(t),n}};function s0(){try{return!!new window.DOMParser().parseFromString(Vs(``),`text/html`)}catch(e){return!1}}var c0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function di(e){return e=String(e),e.match(c0)?e:`unsafe:`+e}function zt$2(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=!0;return t}function fi(...e){let t=Object.create(null);for(let n of e)for(let r in n)Object.hasOwn(n,r)&&(t[r]=!0);return t}var ib=zt$2(`area,br,col,hr,img,wbr`);var ab=zt$2(`colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr`);var sb=zt$2(`rp,rt`);var l0=fi(sb,ab);var Hh=fi(ib,fi(ab,zt$2(`address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul`)),fi(sb,zt$2(`a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video`)),l0);var cb=zt$2(`background,cite,href,itemtype,longdesc,poster,src,xlink:href`);var p0=fi(cb,zt$2(`abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width`),zt$2(`aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext`));var h0=zt$2(`script,style,template`);var zu=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let n=t.firstChild,r=!0,o=[];for(;n;){if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild){o.push(n),n=Zw(n);continue}for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let i=zg(n);if(i){n=i;break}n=o.pop()}}return this.buf.join(``)}startElement(t){let n=Ph(t).toLowerCase();if(!Object.hasOwn(Hh,n))return this.sanitizedSomething=!0,!Object.hasOwn(h0,n);this.buf.push(`<`),this.buf.push(n);let r=t.attributes;for(let o=0;o<r.length;o++){let i=r.item(o),a=i.name,s=a.toLowerCase();if(!Object.hasOwn(p0,s)){this.sanitizedSomething=!0;continue}let c=i.value;cb[s]&&(c=di(c)),this.buf.push(` `,a,`="`,$h(c),`"`)}return this.buf.push(`>`),!0}endElement(t){let n=Ph(t).toLowerCase();Object.hasOwn(Hh,n)&&!Object.hasOwn(ib,n)&&(this.buf.push(`</`),this.buf.push(n),this.buf.push(`>`))}chars(t){this.buf.push($h(t))}};var g0=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;var b0=/([^\#-~ |!])/g;function $h(e){return e.replace(/&/g,`&amp;`).replace(g0,function(t){let n=t.charCodeAt(0),r=t.charCodeAt(1);return`&#`+((n-55296)*1024+(r-56320)+65536)+`;`}).replace(b0,function(t){return`&#`+t.charCodeAt(0)+`;`}).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var bs;function Hs(e,t){let n=null;try{bs=bs||a0(e);let r=t?String(t):``;n=bs.getInertBodyElement(r);let o=5,i=r;do{if(o===0)throw new Error(`Failed to sanitize html because the input is unstable`);o--,r=i,i=n.innerHTML,Uh(n),n=null,n=bs.getInertBodyElement(r)}while(r!==i);return Vs(new zu().sanitizeChildren(lb(n)||n))}finally{n&&Uh(n)}}function Uh(e){let t=lb(e)||e;for(;t.firstChild;)t.firstChild.remove()}function lb(e){return`content`in e&&v0(e)?e.content:null}function v0(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName===`TEMPLATE`}function y0(e,t){return e.createText(t)}function D0(e,t,n){e.setValue(t,n)}function E0(e,t){return e.createComment(Yw(t))}function ub(e,t,n){return e.createElement(t,n)}function or(e,t,n,r,o){e.insertBefore(t,n,r,o)}function db(e,t,n){e.appendChild(t,n)}function zh(e,t,n,r,o){r!==null?or(e,t,n,r,o):db(e,t,n)}function fb(e,t,n,r){e.removeChild(null,t,n,r)}function mb(e,t,n,r,o,i,a){if(i==null)a?.(i,r||``,o),e.removeAttribute(t,o,n);else{let s=a==null?$o(i):a(i,r||``,o);e.setAttribute(t,o,s,n)}}function _0(e,t,n){e.setAttribute(t,`style`,n)}function I0$1(e,t,n){n===``?e.removeAttribute(t,`class`):e.setAttribute(t,`class`,n)}function pb(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&Mw(e,t,r),o!==null&&I0$1(e,t,o),i!==null&&_0(e,t,i)}function w0(e,t=!0){if(e[0]!=`:`)return[null,e];let n=e.indexOf(`:`,1);if(n===-1||n===1){if(t)throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);return[null,e]}return[e.slice(1,n),e.slice(n+1)]}function Td(e,t,n){if(t!==void 0&&n!==void 0&&C0(t,n)!==Q$1.HTML)return e;let r=hb();return r?Vh(r.sanitize(Q$1.HTML,e)||``):Ut$1(e,`HTML`)?Vh(Ie(e)):Hs(yd(),$o(e))}function S0(e){let t=hb();return t?t.sanitize(Q$1.URL,e)||``:Ut$1(e,`URL`)?Ie(e):di($o(e))}function hb(){let e=S$1();return e&&e[rt$1].sanitizer}function C0(e,t){let[n,r]=x0(e);return Kp(r,t,n)}function x0(e){e=e.toLowerCase();let t=w0(e,!1);if(t[0])return t;let r=_t$4()===-1?null:er(),o=r?.namespace;if(e===`#host`&&r?.type===2){let i=Oe$1(r,S$1());if(i.tagName&&(e=i.tagName.toLowerCase()),o==null){let a=i.namespaceURI;o=a&&r0[a]}}return[o,e]}function N0(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}var gb=`ng-template`;function T0(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]==`string`;o+=2)if(t[o]===`class`&&N0(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Md(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])==`string`;)if(i.toLowerCase()===n)return!0}return!1}function Md(e){return e.type===4&&e.value!==gb}function M0(e,t,n){return t===(e.type===4&&!n?gb:e.value)}function A0(e,t,n){let r=4,o=e.attrs,i=o!==null?R0$1(o):0,a=!1;for(let s=0;s<t.length;s++){let c=t[s];if(typeof c==`number`){if(!a&&!ot$1(r)&&!ot$1(c))return!1;if(a&&ot$1(c))continue;a=!1,r=c|r&1;continue}if(!a)if(r&4){if(r=2|r&1,c!==``&&!M0(e,c,n)||c===``&&t.length===1){if(ot$1(r))return!1;a=!0}}else if(r&8){if(o===null||!T0(e,o,c,n)){if(ot$1(r))return!1;a=!0}}else{let l=t[++s],u=k0(c,o,Md(e),n);if(u===-1){if(ot$1(r))return!1;a=!0;continue}if(l!==``){let d;if(u>i?d=``:d=o[u+1].toLowerCase(),r&2&&l!==d){if(ot$1(r))return!1;a=!0}}}}return ot$1(r)||a}function ot$1(e){return(e&1)===0}function k0(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let a=t[o];if(a===e)return o;if(a===3||a===6)i=!0;else if(a===1||a===2){let s=t[++o];for(;typeof s==`string`;)s=t[++o];continue}else{if(a===4)break;if(a===0){o+=4;continue}}o+=i?1:2}return-1}else return F0(t,e)}function bb(e,t,n=!1){for(let r=0;r<t.length;r++)if(A0(e,t[r],n))return!0;return!1}function O0(e){let t=e.attrs;if(t!=null){let n=t.indexOf(5);if((n&1)===0)return t[n+1]}return null}function R0$1(e){for(let t=0;t<e.length;t++){let n=e[t];if(kg(n))return t}return e.length}function F0(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r==`number`)return-1;if(r===t)return n;n++}return-1}function L0(e,t){e:for(let n=0;n<t.length;n++){let r=t[n];if(e.length===r.length){for(let o=0;o<e.length;o++)if(e[o]!==r[o])continue e;return!0}}return!1}function Wh(e,t){return e?`:not(`+t.trim()+`)`:t}function P0(e){let t=e[0],n=1,r=2,o=``,i=!1;for(;n<e.length;){let a=e[n];if(typeof a==`string`)if(r&2){let s=e[++n];o+=`[`+a+(s.length>0?`="`+s+`"`:``)+`]`}else r&8?o+=`.`+a:r&4&&(o+=` `+a);else o!==``&&!ot$1(a)&&(t+=Wh(i,o),o=``),r=a,i=i||!ot$1(r);n++}return o!==``&&(t+=Wh(i,o)),t}function j0(e){return e.map(P0).join(`,`)}function B0(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i==`string`)o===2?i!==``&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!ot$1(o))break;o=i}r++}return n.length&&t.push(1,...n),t}var $e$2={};var wt$2=(function(e){return e[e.Important=1]=`Important`,e[e.DashCase=2]=`DashCase`,e})(wt$2||{});var V0$1;function Ad(e,t){return V0$1(e,t)}var kd=/* @__PURE__ */ new Set;typeof document<`u`&&document?.documentElement?.getAnimations;var Wu=/* @__PURE__ */ new WeakMap;function vb(e){return e?e[ln]??e:null}var Yr=/* @__PURE__ */ new WeakSet;function H0(e,t,n){let r=Wu.get(e);if(!r||r.length===0)return;let o=t.parentNode,i=t.previousSibling,a=vb(n);for(let s=r.length-1;s>=0;s--){let{el:c,declarationView:l}=r[s],u=c.parentNode;c===t?(r.splice(s,1),Yr.add(c),c.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}}))):i&&c===i?(r.splice(s,1),c.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):u&&o&&u!==o&&(a===null||l===null||a===l)&&(r.splice(s,1),c.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function $0(e,t,n){let r=vb(n),o=Wu.get(e);o?o.some(i=>i.el===t)||o.push({el:t,declarationView:r}):Wu.set(e,[{el:t,declarationView:r}])}var $s=(function(e){return e[e.CHANGE_DETECTION=0]=`CHANGE_DETECTION`,e[e.AFTER_NEXT_RENDER=1]=`AFTER_NEXT_RENDER`,e})($s||{});var St$1=new D(``);var Gh=/* @__PURE__ */ new Set;function st$2(e){Gh.has(e)||(Gh.add(e),performance?.mark?.(`mark_feature_usage`,{detail:{feature:e}}))}var Us=(()=>{class e{impl=null;execute(){this.impl?.execute()}static ɵprov=L$1({token:e,providedIn:`root`,factory:()=>new e})}return e})();var Od=[0,1,2,3];var Rd=(()=>{class e{ngZone=p$1(V);scheduler=p$1(vt$3);errorHandler=p$1(Ge$2,{optional:!0});sequences=/* @__PURE__ */ new Set;deferredRegistrations=/* @__PURE__ */ new Set;executing=!1;constructor(){p$1(St$1,{optional:!0})}execute(){let n=this.sequences.size>0;n&&H$2(P.AfterRenderHooksStart),this.executing=!0;for(let r of Od)for(let o of this.sequences)if(!(o.erroredOrDestroyed||!o.hooks[r]))try{o.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let i=o.hooks[r];return i(o.pipelinedValue)},o.snapshot))}catch(i){o.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),n&&H$2(P.AfterRenderHooksEnd)}register(n){let{view:r}=n;r!==void 0?((r[Kn$1]??=[]).push(n),Jn$1(r),r[N$1]|=4096):this.addSequence(n)}addSequence(n){this.executing?this.deferredRegistrations.add(n):this.sequences.add(n),this.scheduler.notify(7)}unregister(n){this.executing&&this.sequences.has(n)?(n.erroredOrDestroyed=!0,n.pipelinedValue=void 0,n.once=!0):(this.sequences.delete(n),this.deferredRegistrations.delete(n))}maybeTrace(n,r){return r?r.run($s.AFTER_NEXT_RENDER,n):n()}static ɵprov=L$1({token:e,providedIn:`root`,factory:()=>new e})}return e})();var oi=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(t,n,r,o,i,a=null){this.impl=t,this.hooks=n,this.view=r,this.once=o,this.snapshot=a,this.unregisterOnDestroy=i?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let t=this.view?.[Kn$1];t&&(this.view[Kn$1]=t.filter(n=>n!==this))}};function Fd(e,t){let n=t?.injector??p$1(Z$2);return st$2(`NgAfterNextRender`),z0(e,n,t,!0)}function U0(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function z0(e,t,n,r){let o=t.get(Us);o.impl??=t.get(Rd);let i=t.get(St$1,null,{optional:!0}),a=n?.manualCleanup!==!0?t.get(Be$1):null,s=t.get(Gr,null,{optional:!0}),c=new oi(o.impl,U0(e),s?.view,r,a,i?.snapshot(null));return o.impl.register(c),c}var Gu=null;var yb=null;function qh(e,t,n,r){Gu?.maybeQueueEnterAnimation(e,t,n,r)}function Yh(e,t,n,r){Gu===null?r(!1):Gu.runLeaveAnimationsWithCallback(e,t,n,r)}function W0(e){yb?.initViewDetachAnimations(e)}function G0(e){yb?.clearViewDetachAnimations(e)}function Zr(e,t,n,r,o,i,a,s){if(o!=null){let c,l=!1;Ze$2(o)?c=o:Pt$2(o)&&(l=!0,o=o[nt$1]);let u=ve(o);e===0&&r!==null?(qh(s,r,i,n),a==null?db(t,r,u):or(t,r,u,a||null,!0)):e===1&&r!==null?(or(t,r,u,a||null,!0),H0(i,u,s),Yr.has(u)||qh(s,r,i,n)):e===2?(s?.[Yp]?.leave?.has(i.index)&&$0(i,u,s),Yr.delete(u),Yh(s,i,n,d=>{if(Yr.has(u)){Yr.delete(u);return}fb(t,u,l,d)})):e===3&&(Yr.delete(u),Yh(s,i,n,()=>{t.destroyNode(u)})),c!=null&&rS(t,e,n,c,i,r,a)}}function q0(e,t){Db(e,t),t[nt$1]=null,t[he$2]=null}function Y0(e,t,n,r,o,i){r[nt$1]=o,r[he$2]=t,Ws(e,r,n,1,o,i)}function Db(e,t){t[rt$1].changeDetectionScheduler?.notify(9),Ws(e,t,t[Y$1],2,null,null)}function Z0(e){let t=e[Vr];if(!t)return vu(e[E$1],e);for(;t;){let n=null;if(Pt$2(t))n=t[Vr];else{let r=t[ie$2];r&&(n=r)}if(!n){for(;t&&!t[Ye$2]&&t!==e;)Pt$2(t)&&vu(t[E$1],t),t=t[re$1];t===null&&(t=e),Pt$2(t)&&vu(t[E$1],t),n=t&&t[Ye$2]}t=n}}function Ld(e,t){let n=e[Xn$2],r=n.indexOf(t);n.splice(r,1)}function zs(e,t){if(fn$1(t))return;let n=t[Y$1];n.destroyNode&&Ws(e,t,n,3,null,null),Z0(t)}function vu(e,t){if(fn$1(t))return;let n=I$3(null);try{t[N$1]&=-129,t[N$1]|=256,t[Ve$1]&&nn(t[Ve$1]),Q0(e,t),K0(e,t),t[E$1].type===1&&t[Y$1].destroy();let r=t[un$1];if(r!==null&&Ze$2(t[re$1])){r!==t[re$1]&&Ld(r,t);let o=t[yt$4];o!==null&&o.detachView(e)}Ru(t)}finally{I$3(n)}}function K0(e,t){let n=e.cleanup,r=t[Br];if(n!==null)for(let a=0;a<n.length-1;a+=2)if(typeof n[a]==`string`){let s=n[a+3];s>=0?r[s]():r[-s].unsubscribe(),a+=2}else{let s=r[n[a+1]];n[a].call(s)}r!==null&&(t[Br]=null);let o=t[Ot$2];if(o!==null){t[Ot$2]=null;for(let a=0;a<o.length;a++){let s=o[a];s()}}let i=t[Rt$1];if(i!==null){t[Rt$1]=null;for(let a of i)a.destroy()}}function Q0(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof ar)){let i=n[r+1];if(Array.isArray(i))for(let a=0;a<i.length;a+=2){let s=o[i[a]],c=i[a+1];H$2(P.LifecycleHookStart,s,c);try{c.call(s)}finally{H$2(P.LifecycleHookEnd,s,c)}}else{H$2(P.LifecycleHookStart,o,i);try{i.call(o)}finally{H$2(P.LifecycleHookEnd,o,i)}}}}}function Eb(e,t,n){if(t===null)throw new _(510,!1);return X0(e,t.parent,n)}function X0(e,t,n){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return n[nt$1];if(Dt$1(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===it$1.None||o===it$1.Emulated)return null}return Oe$1(r,n)}function _b(e,t,n){return eS(e,t,n)}function J0(e,t,n){return e.type&40?Oe$1(e,n):null}var eS=J0;function Pd(e,t,n,r){let o=Eb(e,r,t),i=t[Y$1],s=_b(r.parent||t[he$2],r,t);if(o!=null)if(Array.isArray(n))for(let c=0;c<n.length;c++)zh(i,o,n[c],s,!1);else zh(i,o,n,s,!1)}function ti(e,t){if(t!==null){let n=t.type;if(n&3)return Oe$1(t,e);if(n&4)return qu(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return ti(e,r);{let o=e[t.index];return Ze$2(o)?qu(-1,o):ve(o)}}else{if(n&128)return ti(e,t.next);if(n&32)return Ad(t,e)()||ve(e[t.index]);{let r=Ib(e,t);if(r!==null){if(Array.isArray(r))return r[0];return ti(Ft$2(e[be]),r)}else return ti(e,t.next)}}}return null}function Ib(e,t){if(t!==null){let r=e[be][he$2],o=t.projection;return r.projection[o]}return null}function qu(e,t){let n=ie$2+e+1;if(n<t.length){let r=t[n],o=r[E$1].firstChild;if(o!==null)return ti(r,o)}return t[Qn$1]}function jd(e,t,n,r,o,i,a){for(;n!=null;){let s=r[xe$2];if(n.type===128){n=n.next;continue}let c=r[n.index],l=n.type;if(a&&t===0&&(c&&Jr(ve(c),r),n.flags|=2),!Bs(n))if(l&8)jd(e,t,n.child,r,o,i,!1),Zr(t,e,s,o,c,n,i,r);else if(l&32){let u=Ad(n,r),d;for(;d=u();)Zr(t,e,s,o,d,n,i,r);Zr(t,e,s,o,c,n,i,r)}else l&16?wb(e,t,r,n,o,i):Zr(t,e,s,o,c,n,i,r);n=a?n.projectionNext:n.next}}function Ws(e,t,n,r,o,i){e.type===3?tS(n,r,t,o,i):jd(n,r,e.firstChild,t,o,i,!1)}function tS(e,t,n,r,o){let a=n[E$1].firstChild,s=a.next,c=ve(n[a.index]),l=ve(n[s.index]),u=s.index+1,d=n[u];if(t===1||t===0)r!==null&&(d&&d.hasChildNodes()?or(e,r,d,o,!0):(or(e,r,c,o,!0),or(e,r,l,o,!0)));else if(t===2){if(d||(d=document.createDocumentFragment(),n[u]=d),c&&c.parentNode===d)return;let m=c;for(;m!==null;){let f=m.nextSibling;if(d.appendChild(m),m===l)break;m=f}}}function nS(e,t,n){let r=t[Y$1];wb(r,0,t,n,Eb(e,n,t),_b(n.parent||t[he$2],n,t))}function wb(e,t,n,r,o,i){let a=n[be],c=a[he$2].projection[r.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Zr(t,e,n[xe$2],o,u,r,i,n)}else{let l=c,u=a[re$1];Gg(r)&&(l.flags|=128),jd(e,t,l,u,o,i,!0)}}function rS(e,t,n,r,o,i,a){let s=r[Qn$1];if(s!==ve(r)&&Zr(t,e,n,i,s,o,a),(r[N$1]&4)===0)for(let l=ie$2;l<r.length;l++){let u=r[l];Ws(u[E$1],u,e,t,i,s)}}function oS(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=r.indexOf(`-`)===-1?void 0:wt$2.DashCase;o==null?e.removeStyle(n,r,i):(typeof o==`string`&&o.endsWith(`!important`)&&(o=o.slice(0,-10),i|=wt$2.Important),e.setStyle(n,r,o,i))}}function Bd(e,t,n,r,o,i,a,s,c,l,u){let d=W$1+r,m=d+o,f=iS(d,m),h=typeof l==`function`?l():l;return f[E$1]={type:e,blueprint:f,template:n,queries:null,viewQuery:s,declTNode:t,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i==`function`?i():i,pipeRegistry:typeof a==`function`?a():a,firstChild:null,schemas:c,consts:h,incompleteFirstPass:!1,ssrId:u}}function iS(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:$e$2);return n}function aS(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=Bd(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Vd(e,t,n,r,o,i,a,s,c,l,u){let d=t.blueprint.slice();return d[nt$1]=o,d[N$1]=r|1228,(l!==null||e&&e[N$1]&2048)&&(d[N$1]|=2048),Kl(d),d[re$1]=d[ln]=e,d[oe$3]=n,d[rt$1]=a||e&&e[rt$1],d[Y$1]=s||e&&e[Y$1],d[xe$2]=c||e&&e[xe$2]||null,d[he$2]=i,d[Go]=Qw(),d[Yn$2]=u,d[Gl]=l,d[be]=t.type==2?e[be]:d,d}function sS(e,t,n){let r=Oe$1(t,e),o=aS(n),i=e[rt$1].rendererFactory,a=Hd(e,Vd(e,o,null,Sb(n),r,t,null,i.createRenderer(r,n),null,null,null));return e[t.index]=a}function Sb(e){let t=16;return e.onPush&&(t=64),t}function Cb(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Hd(e,t){return e[Vr]?e[Wl][Ye$2]=t:e[Vr]=t,e[Wl]=t,t}function mi(e=1){xb(G$1(),S$1(),_t$4()+e,!1)}function xb(e,t,n,r){if(!r)if((t[N$1]&3)===3){let i=e.preOrderCheckHooks;i!==null&&ys(t,i,n)}else{let i=e.preOrderHooks;i!==null&&Ds(t,i,0,n)}pn$1(n)}var pi=(function(e){return e[e.None=0]=`None`,e[e.SignalBased=1]=`SignalBased`,e[e.HasDecoratorInputTransform=2]=`HasDecoratorInputTransform`,e})(pi||{});function cr(e,t,n,r){let o=I$3(null);try{let[i,a,s]=e.inputs[n],c=null;(a&pi.SignalBased)!==0&&(c=t[i][ce$2]),c!==null&&c.transformFn!==void 0?r=c.transformFn(r):s!==null&&(r=s.call(t,r)),e.setInput!==null?e.setInput(t,c,r,n,i):xg(t,c,i,r)}finally{I$3(o)}}function Nb(e,t,n,r,o){let i=_t$4(),a=r&2;try{pn$1(-1),a&&t.length>W$1&&xb(e,t,W$1,!1);H$2(a?P.TemplateUpdateStart:P.TemplateCreateStart,o,n),n(r,o)}finally{pn$1(i);H$2(a?P.TemplateUpdateEnd:P.TemplateCreateEnd,o,n)}}function Gs(e,t,n){mS(e,t,n),(n.flags&64)===64&&pS(e,t,n)}function hi(e,t,n=Oe$1){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let a=r[i+1],s=a===-1?n(t,e):e[a];e[o++]=s}}}function cS(e,t,n,r){let i=r.get(Jg,Xg)||n===it$1.ShadowDom||n===it$1.ExperimentalIsolatedShadowDom;return e.selectRootElement(t,i)}function dS(e){return e===`class`?`className`:e===`for`?`htmlFor`:e===`formaction`?`formAction`:e===`innerHtml`?`innerHTML`:e===`readonly`?`readOnly`:e===`tabindex`?`tabIndex`:e}function fS(e,t,n,r,o,i){let a=t[E$1];if(qs(e,a,t,n,r)){Dt$1(e)&&Ab(t,e.index);return}e.type&3&&(n=dS(n)),Tb(e,t,n,r,o,i)}function Tb(e,t,n,r,o,i){if(e.type&3){let a=Oe$1(e,t);r=i!=null?i(r,e.value||``,n):r,r=Mb(n,a,r),o.setProperty(a,n,r)}else e.type&12}function Mb(e,t,n,r=!1){return e===`src`&&(t.tagName===`IMG`||t.tagName===`VIDEO`)?n==null?r?n:``:Ie(n):n}function Ab(e,t){let n=Ke$2(t,e);n[N$1]&16||(n[N$1]|=64)}function mS(e,t,n){let r=n.directiveStart,o=n.directiveEnd;Dt$1(n)&&sS(t,n,e.data[r+n.componentOffset]),e.firstCreatePass||Ns(n,t);let i=n.initialInputs;for(let a=r;a<o;a++){let s=e.data[a],c=ri(t,e,a,n);if(Jr(c,t),i!==null&&bS(t,a-r,c,s,n,i),Et$2(s)){let l=Ke$2(n.index,t);l[oe$3]=ri(t,e,a,n)}}}function pS(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,a=uh();try{pn$1(i);for(let s=r;s<o;s++){let c=e.data[s],l=t[s];os(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&hS(c,l)}}finally{pn$1(-1),os(a)}}function hS(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function $d(e,t){let n=e.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];bb(t,i.selectors,!1)&&(r??=[],Et$2(i)?r.unshift(i):r.push(i))}return r}function gS(e,t,n,r,o,i){let a=Oe$1(e,t);r=Mb(n,a,r,!0),mb(t[Y$1],a,i,e.value,n,r,o)}function bS(e,t,n,r,o,i){let a=i[t];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];cr(r,n,c,l)}}function Ud(e,t,n,r,o){let i=W$1+n,a=t[E$1],s=o(a,t,e,r,n);t[i]=s,Wr(e,!0);let c=e.type===2;return c?(pb(t[Y$1],s,e),(th()===0||$r(e))&&Jr(s,t),nh()):Jr(s,t),cs()&&(!c||!Bs(e))&&Pd(a,t,s,e),e}function zd(e){let t=e;return iu()?au():(t=t.parent,Wr(t,!1)),t}function Wd(e,t){let n=e[xe$2];if(!n)return;let r;try{r=n.get(jt$1,null)}catch(o){r=null}r?.(t)}function qs(e,t,n,r,o){let i=e.inputs?.[r],a=e.hostDirectiveInputs?.[r],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],u=a[c+1],d=t.data[l];cr(d,n[l],u,o),s=!0}if(i)for(let c of i){let l=n[c],u=t.data[c];cr(u,l,r,o),s=!0}return s}function vS(e,t,n,r,o,i){let a=null,s=null,c=null,l=!1,u=e.directiveToIndex.get(r.type);if(typeof u==`number`?a=u:[a,s,c]=u,s!==null&&c!==null&&e.hostDirectiveInputs&&Object.hasOwn(e.hostDirectiveInputs,o)){let d=e.hostDirectiveInputs[o];for(let m=0;m<d.length;m+=2){let f=d[m];if(f>=s&&f<=c){let h=t.data[f],g=d[m+1];cr(h,n[f],g,i),l=!0}else if(f>c)break}}return a!==null&&Object.hasOwn(r.inputs,o)&&(cr(r,n[a],o,i),l=!0),l}function yS(e,t){let n=Ke$2(t,e),r=n[E$1];DS(r,n);let o=n[nt$1];o!==null&&n[Yn$2]===null&&(n[Yn$2]=nb(o,n[xe$2])),H$2(P.ComponentStart);try{Gd(r,n,n[oe$3])}finally{H$2(P.ComponentEnd,n[oe$3])}}function DS(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function Gd(e,t,n){as(t);try{let r=e.viewQuery;r!==null&&Lu(1,r,n);let o=e.template;o!==null&&Nb(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[yt$4]?.finishViewCreation(e),e.staticContentQueries&&rb(e,t),e.staticViewQueries&&Lu(2,e.viewQuery,n);let i=e.components;i!==null&&ES(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[N$1]&=-5,ss()}}function ES(e,t){for(let n=0;n<t.length;n++)yS(e,t[n])}function so(e,t,n,r){let o=I$3(null);try{let i=t.tView,a=Vd(e,i,n,16,null,t,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null);a[un$1]=e[t.index];let c=e[yt$4];return c!==null&&(a[yt$4]=c.createEmbeddedView(i)),Gd(i,a,n),a}finally{I$3(o)}}function lr(e,t){return!t||t.firstChild===null||Gg(e)}function ii(e,t,n,r,o=!1){if(e.type===3){let i=e.firstChild,a=i.next,s=ve(t[i.index]),c=ve(t[a.index]),l=s;for(;l!==null&&(r.push(l),l!==c);)l=l.nextSibling;return r}for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=t[n.index];if(i!==null)if(Ze$2(i)){let s=i[Qn$1];s!==i[nt$1]&&r.push(ve(i)),i[N$1]&4||kb(i,r),r.push(s)}else r.push(ve(i));let a=n.type;if(a&8)ii(e,t,n.child,r);else if(a&32){let s=Ad(n,t),c;for(;c=s();)r.push(c)}else if(a&16){let s=Ib(t,n);if(Array.isArray(s))r.push(...s);else{let c=Ft$2(t[be]);ii(c[E$1],c,s,r,!0)}}n=o?n.projectionNext:n.next}return r}function kb(e,t){for(let n=ie$2;n<e.length;n++){let r=e[n],o=r[E$1].firstChild;o!==null&&ii(r[E$1],r,o,t)}}function Ob(e){if(e[Kn$1]!==null){for(let t of e[Kn$1])t.impl.addSequence(t);e[Kn$1].length=0}}var Rb=[];function _S(e){return e[Ve$1]??IS(e)}function IS(e){let t=Rb.pop()??Object.create(SS);return t.lView=e,t}function wS(e){e.lView[Ve$1]!==e&&(e.lView=null,Rb.push(e))}var SS=ae$3(R$1({},Vn$2),{consumerIsAlwaysLive:!0,kind:`template`,consumerMarkedDirty:e=>{Jn$1(e.lView)},consumerOnSignalRead(){this.lView[Ve$1]=this}});function CS(e){let t=e[Ve$1]??Object.create(xS);return t.lView=e,t}var xS=ae$3(R$1({},Vn$2),{consumerIsAlwaysLive:!0,kind:`template`,consumerMarkedDirty:e=>{let t=Ft$2(e.lView);for(;t&&!Fb(t[E$1]);)t=Ft$2(t);t&&ts(t)},consumerOnSignalRead(){this.lView[Ve$1]=this}});function Fb(e){return e.type!==2}function Lb(e){if(e[Rt$1]===null)return;let t=!0;for(;t;){let n=!1;for(let r of e[Rt$1])if(r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()),e[Rt$1]===null))return;t=n&&!!(e[N$1]&4096)}}var NS=100;function Pb(e,t=0){let r=e[rt$1].rendererFactory;r.begin?.();try{TS(e,t)}finally{r.end?.()}}function TS(e,t){let n=su();try{jo(!0),Yu(e,t);let r=0;for(;Yo(e);){if(r===NS)throw new _(103,!1);r++,Yu(e,1)}}finally{jo(n)}}function MS(e,t,n,r){if(fn$1(t))return;let o=t[N$1],i=!1;as(t);let s=!0,c=null,l=null;Fb(e)?(l=_S(t),c=tn(l)):Ma$1()===null?(s=!1,l=CS(t),c=tn(l)):t[Ve$1]&&(nn(t[Ve$1]),t[Ve$1]=null);try{Kl(t),sh(e.bindingStartIndex),n!==null&&Nb(e,t,n,2,r);let u=(o&3)===3;if(u){let f=e.preOrderCheckHooks;f!==null&&ys(t,f,null)}else{let f=e.preOrderHooks;f!==null&&Ds(t,f,0,null),gu(t,0)}if(AS(t),Lb(t),Bb(t,0),e.contentQueries!==null&&rb(e,t),true)if(u){let f=e.contentCheckHooks;f!==null&&ys(t,f)}else{let f=e.contentHooks;f!==null&&Ds(t,f,1),gu(t,1)}OS(e,t);let d=e.components;d!==null&&Hb(t,d,0);let m=e.viewQuery;if(m!==null&&Lu(2,m,r),true)if(u){let f=e.viewCheckHooks;f!==null&&ys(t,f)}else{let f=e.viewHooks;f!==null&&Ds(t,f,2),gu(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Qa]){for(let f of t[Qa])f();t[Qa]=null}Ob(t),t[N$1]&=-73}catch(u){jb(t,u,i)}finally{l!==null&&(Hn$1(l,c),s&&wS(l)),ss()}}function jb(e,t,n){let r=!1,o=t,i=e,a=I$3(null);try{for(;i!==null;){if(Ze$2(i)){i=i[re$1];continue}let s=i[Hr];if(s)try{let c=e[be][oe$3],u={declarationInstance:c,declarationType:c?.constructor,caughtBy:s},d=I$3(null);try{s(Sh(o),u)}finally{I$3(d)}r=!0;break}catch(c){o=c}i=i[re$1]}}finally{I$3(a)}if(!r)throw n||Jn$1(e),o}function Bb(e,t){for(let n=Yg(e);n!==null;n=Zg(n))for(let r=ie$2;r<n.length;r++){let o=n[r];Vb(o,t)}}function AS(e){for(let t=Yg(e);t!==null;t=Zg(t)){if(!(t[N$1]&2))continue;let n=t[Xn$2];for(let r=0;r<n.length;r++){let o=n[r];ts(o)}}}function kS(e,t,n){H$2(P.ComponentStart);let r=Ke$2(t,e);try{Vb(r,n)}finally{H$2(P.ComponentEnd,r[oe$3])}}function Vb(e,t){es(e)&&Yu(e,t)}function Yu(e,t){let r=e[E$1],o=e[N$1],i=e[Ve$1],a=!!(t===0&&o&16);if(a||=!!(o&64&&t===0),a||=!!(o&1024),a||=!!(i?.dirty&&Tr(i)),a||=!1,i&&(i.dirty=!1),e[N$1]&=-5121,a)MS(r,e,r.template,e[oe$3]);else if(o&4096){let s=I$3(null);try{try{Lb(e)}catch(l){jb(e,l,!1)}Bb(e,1);let c=r.components;c!==null&&Hb(e,c,1),Ob(e)}finally{I$3(s)}}}function Hb(e,t,n){for(let r=0;r<t.length;r++)kS(e,t[r],n)}function OS(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)pn$1(~o);else{let i=o,a=n[++r],s=n[++r];lh(a,i);let c=t[i];H$2(P.HostBindingsUpdateStart,c);try{s(2,c)}finally{H$2(P.HostBindingsUpdateEnd,c)}}}}finally{pn$1(-1)}}function qd(e,t){let n=su()?64:1088;for(e[rt$1].changeDetectionScheduler?.notify(t);e;){e[N$1]|=n;let r=Ft$2(e);if(Ur(e)&&!r)return e;e=r}return null}function $b(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function Ub(e,t){let n=ie$2+t;if(n<e.length)return e[n]}function co(e,t,n,r=!0){let o=t[E$1];if(RS(o,t,e,n),r){let a=qu(n,e),s=t[Y$1],c=s.parentNode(e[Qn$1]);c!==null&&Y0(o,e[he$2],s,t,c,a)}let i=t[Yn$2];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function Yd(e,t){let n=ai$1(e,t);return n!==void 0&&zs(n[E$1],n),n}function ai$1(e,t){if(e.length<=ie$2)return;let n=ie$2+t,r=e[n];if(r){let o=r[un$1];o!==null&&o!==e&&Ld(o,r),t>0&&(e[n-1][Ye$2]=r[Ye$2]);let i=Uo(e,ie$2+t);q0(r[E$1],r);let a=i[yt$4];a!==null&&a.detachView(i[E$1]),r[re$1]=null,r[Ye$2]=null,r[N$1]&=-129}return r}function RS(e,t,n,r){let o=ie$2+r,i=n.length;r>0&&(n[o-1][Ye$2]=t),r<i-ie$2?(t[Ye$2]=n[o],Vl(n,ie$2+r,t)):(n.push(t),t[Ye$2]=null),t[re$1]=n;let a=t[un$1];a!==null&&n!==a&&zb(a,t);let s=t[yt$4];s!==null&&s.insertView(e),ns(t),t[N$1]|=128}function zb(e,t){let n=e[Xn$2],r=t[re$1];if(Pt$2(r))e[N$1]|=2;else{let o=r[re$1][be];t[be]!==o&&(e[N$1]|=2)}n===null?e[Xn$2]=[t]:n.push(t)}var bn$1=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,n=t[E$1];return ii(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n}get context(){return this._lView[oe$3]}set context(t){this._lView[oe$3]=t}get destroyed(){return fn$1(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[re$1];if(Ze$2(t)){let n=t[qo],r=n?n.indexOf(this):-1;r>-1&&(ai$1(t,r),Uo(n,r))}this._attachedToViewContainer=!1}zs(this._lView[E$1],this._lView)}onDestroy(t){Zo(this._lView,t)}markForCheck(){qd(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[N$1]&=-129}reattach(){ns(this._lView),this._lView[N$1]|=128}detectChanges(){this._lView[N$1]|=1024,Pb(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new _(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Ur(this._lView),n=this._lView[un$1];n!==null&&!t&&Ld(n,this._lView),Db(this._lView[E$1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new _(902,!1);this._appRef=t;let n=Ur(this._lView),r=this._lView[un$1];r!==null&&!n&&zb(r,this._lView),ns(this._lView)}};var eo=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=FS;constructor(n,r,o){this._declarationLView=n,this._declarationTContainer=r,this.elementRef=o}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(n,r){return this.createEmbeddedViewImpl(n,r)}createEmbeddedViewImpl(n,r,o){return new bn$1(so(this._declarationLView,this._declarationTContainer,n,{embeddedViewInjector:r,dehydratedView:o}))}}return e})();function FS(){return Ys(se$3(),S$1())}function Ys(e,t){return e.type&4?new eo(t,e,ao(e,t)):null}function lo(e,t,n,r,o){let i=e.data[t];if(i===null)i=LS(e,t,n,r,o),ch()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let a=ih();i.injectorIndex=a===null?-1:a.injectorIndex}return Wr(i,!0),i}function LS(e,t,n,r,o){let i=ou(),a=iu(),s=a?i:i&&i.parent,c=e.data[t]=jS(e,s,n,t,r,o);return PS(e,c,i,a),c}function PS(e,t,n,r){e.firstChild===null&&(e.firstChild=t),n!==null&&(r?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function jS(e,t,n,r,o,i){let a=t?t.injectorIndex:-1,s=0;return tu()&&(s|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:o,namespace:du(),attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function BS(e){let t=e[dn$1]??[],r=e[re$1][Y$1],o=[];for(let i of t)i.data[Dd]!==void 0?o.push(i):VS(i,r);e[dn$1]=o}function VS(e,t){let n=0,r=e.firstChild;if(r){let o=e.data[Qg];for(;n<o;){let i=zg(r);fb(t,r,!1),r=i,n++}}}var HS=()=>null;var $S=()=>null;function Ts(e,t){return HS(e,t)}function Wb(e,t,n){return $S(e,t,n)}var Gb=class{};var at$1=class{};var vn$1=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>US()};function US(){let e=S$1(),n=Ke$2(se$3().index,e);return(Pt$2(n)?n:e)[Y$1]}var qb=(()=>{class e{static ɵprov=L$1({token:e,providedIn:`root`,factory:()=>null})}return e})();function Yb(e){return e.debugInfo?.className||e.type.name||null}var _s={};var ir=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){let o=this.injector.get(t,_s,r);return o!==_s||n===_s?o:this.parentInjector.get(t,n,r)}};function Zd(e){return Kb(e)?Array.isArray(e)||!(e instanceof Map)&&Symbol.iterator in e:!1}function Zb(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{let n=e[Symbol.iterator](),r;for(;!(r=n.next()).done;)t(r.value)}}function Kb(e){return e!==null&&(typeof e==`function`||typeof e==`object`)}function Kd(e,t,n){return e[t]=n}function zS(e,t){return e[t]}function Qe$2(e,t,n){if(n===$e$2)return!1;let r=e[t];return Object.is(r,n)?!1:(e[t]=n,!0)}function WS(e,t,n,r){let o=Qe$2(e,t,n);return Qe$2(e,t+1,r)||o}function Qr(e,t,n){return function r(o){let i=r.__ngNativeEl__;i!==void 0&&Jw(o,i);qd(Dt$1(e)?Ke$2(e.index,t):t,5);let s=t[oe$3],c=Kh(t,s,n,o),l=r.__ngNextListenerFn__;for(;l;)c=Kh(t,s,l,o)&&c,l=l.__ngNextListenerFn__;return c}}function Kh(e,t,n,r){let o=I$3(null);try{return H$2(P.OutputStart,t,n),n(r)!==!1}catch(i){return Wd(e,i),!1}finally{H$2(P.OutputEnd,t,n),I$3(o)}}function Qb(e,t,n,r,o,i,a,s){let c=$r(e),l=!1,u=null;if(!r&&c&&(u=qS(t,n,i,e.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,l=!0}else{let d=Oe$1(e,n),m=r?r(d):d;r||(s.__ngNativeEl__=d);let f=o.listen(m,i,s);if(!GS(i))Xb(r?g=>r(ve(g[e.index])):e.index,t,n,i,s,f,!1)}return l}function GS(e){return e.startsWith(`animation`)||e.startsWith(`transition`)}function qS(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let a=o[i];if(a===n&&o[i+1]===r){let s=t[Br],c=o[i+2];return s&&s.length>c?s[c]:null}typeof a==`string`&&(i+=2)}return null}function Xb(e,t,n,r,o,i,a){let s=t.firstCreatePass?Jl(t):null,c=Xl(n),l=c.length;c.push(o,i),s&&s.push(r,e,l,(l+1)*(a?-1:1))}function Qh(e,t,n,r,o){let i=null,a=null,s=null,c=!1,l=e.directiveToIndex.get(n.type);if(typeof l==`number`?i=l:[i,a,s]=l,a!==null&&s!==null&&e.hostDirectiveOutputs&&Object.hasOwn(e.hostDirectiveOutputs,r)){let u=e.hostDirectiveOutputs[r];for(let d=0;d<u.length;d+=2){let m=u[d];if(m>=a&&m<=s)c=!0,Ms(e,t,m,u[d+1],r,o);else if(m>s)break}}return Object.hasOwn(n.outputs,r)&&(c=!0,Ms(e,t,i,r,r,o)),c}function Ms(e,t,n,r,o,i){let a=t[n],s=t[E$1],d=a[s.data[n].outputs[r]].subscribe(i);Xb(e.index,s,t,o,i,d,!0)}function YS(){ZS()}function ZS(){let e=S$1(),t=G$1(),n=se$3();if(t.firstCreatePass&&XS(t,n),n.controlDirectiveIndex===-1)return;st$2(`NgSignalForms`);let r=e[n.controlDirectiveIndex];t.data[n.controlDirectiveIndex].controlDef.create(r,new As(e,t,n))}function KS(){QS()}function QS(){let e=S$1(),t=G$1(),n=er();if(n.controlDirectiveIndex===-1)return;let r=t.data[n.controlDirectiveIndex].controlDef,o=e[n.controlDirectiveIndex];r.update(o,new As(e,t,n))}var As=class{lView;tView;tNode;hasPassThrough;constructor(t,n,r){this.lView=t,this.tView=n,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return Oe$1(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(t,n){let r=this.tView.data[this.tNode.customControlIndex];Qh(this.tNode,this.lView,r,t,Qr(this.tNode,this.lView,n))}listenToCustomControlModel(t){let n=this.tNode.flags&1024?`valueChange`:`checkedChange`,r=this.tView.data[this.tNode.customControlIndex];Qh(this.tNode,this.lView,r,n,Qr(this.tNode,this.lView,t))}setInputOnDirectives(t,n,r){let o=this.tNode.inputs?.[t],i=this.tNode.hostDirectiveInputs?.[t];if(!o&&!i)return!1;let a=!1;if(o)for(let s of o){if(s===this.tNode.controlDirectiveIndex)continue;let c=this.lView[s],l=this.tView.data[s];(!r||r(Jh(c,l,t),c))&&(cr(l,c,t,n),a=!0)}if(i)for(let s=0;s<i.length;s+=2){let c=i[s];if(c===this.tNode.controlDirectiveIndex)continue;let l=this.lView[c],u=i[s+1],d=this.tView.data[c];(!r||r(Jh(l,d,t),l))&&(cr(d,l,u,n),a=!0)}return a}setCustomControlModelInput(t){let n=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?`value`:`checked`;vS(this.tNode,this.tView,this.lView,n,r,t)}customControlHasInput(t){if(this.tNode.customControlIndex===-1)return!1;let n=this.tView.data[this.tNode.customControlIndex];return(n.signalFormsInputPresence??=this._buildCustomControlInputCache(n))[t]===!0}_buildCustomControlInputCache(t){let n={};for(let r in t.inputs)n[r]=!0;if(t.hostDirectives!==null){let r=[...t.hostDirectives];for(;r.length>0;){let o=r.shift();if(typeof o!=`function`){for(let a in o.inputs)n[o.inputs[a]]=!0;let i=Xh(o.directive);i!==null&&r.push(...i);continue}for(let i of o()){if(typeof i==`function`)continue;if(i.inputs)for(let s=0;s<i.inputs.length;s+=2){let c=i.inputs[s+1]||i.inputs[s];n[c]=!0}let a=Xh(i.directive);a!==null&&r.push(...a)}}}return n}};function Xh(e){return typeof e==`function`&&`ɵdir`in e?e.ɵdir.hostDirectives??null:null}function Jh(e,t,n){if(!t.inputs||!Object.hasOwn(t.inputs,n))return;let[r,o]=t.inputs[n];if((o&pi.SignalBased)!==0){let a=e[r][ce$2];return a.value===oo?void 0:a.value}return e[r]}function XS(e,t,n){for(let o=t.directiveStart;o<t.directiveEnd;o++)if(e.data[o].controlDef){t.controlDirectiveIndex=o;break}if(t.controlDirectiveIndex===-1)return;let r=e.data[t.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(t.inputs?.[r.passThroughInput]?.length??0)>1){t.flags|=4096;return}JS(e,t)}function JS(e,t){for(let n=t.directiveStart;n<t.directiveEnd;n++){let r=e.data[n];if(!(t.directiveToIndex&&!t.directiveToIndex.has(r.type))){if(eg(r,`value`)){t.flags|=1024,t.customControlIndex=n;return}if(eg(r,`checked`)){t.flags|=2048,t.customControlIndex=n;return}}}if(t.hostDirectiveInputs!==null&&t.hostDirectiveOutputs!==null&&t.directiveToIndex!==null){let n=(r,o)=>{let i=t.hostDirectiveInputs[r],a=t.hostDirectiveOutputs[r+`Change`];if(!i||!a)return!1;for(let s=0;s<i.length;s+=2){let c=i[s];for(let l=0;l<a.length;l+=2)if(c===a[l])for(let d of t.directiveToIndex.values()){if(!Array.isArray(d))continue;let[m,f,h]=d;if(c>=f&&c<=h)return t.flags|=o,t.customControlIndex=m,!0}}return!1};if(n(`value`,1024)||n(`checked`,2048))return}}function eg(e,t){return eC(e,t)&&tC(e,t+`Change`)}function eC(e,t){return t in e.inputs}function tC(e,t){return t in e.outputs}var Zu=Symbol(`BINDING`);var fr=new D(``);function ks(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let a=0;a<t.length;a++){let s=t[a];if(typeof s==`number`)i=s;else if(i==1)o=Ha(o,s);else if(i==2){let c=s,l=t[++a];r=Ha(r,c+`: `+l+`;`)}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function ct$2(e,t=0){let n=S$1();if(n===null)return F$1(e,t);return Bg(se$3(),n,fe$2(e),t)}function nC(){throw new Error(`invalid`)}function Jb(e,t,n,r,o){let i=r===null?null:{"":-1},a=o(e,n);if(a!==null){let s=a,c=null,l=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,c,l]=u.resolveHostDirectives(a);break}iC(e,t,n,s,i,c,l)}i!==null&&r!==null&&rC(n,r,i)}function rC(e,t,n){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new _(-301,!1);r.push(t[o],i)}}function oC(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function iC(e,t,n,r,o,i,a){let s=r.length,c=null;for(let m=0;m<s;m++){let f=r[m];c===null&&Et$2(f)&&(c=f,oC(e,n,m)),Au(Ns(n,t),e,f.type)}dC(n,e.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let m=0;m<s;m++){let f=r[m];f.providersResolver&&f.providersResolver(f)}let l=!1,u=!1,d=Cb(e,t,s,null);s>0&&(n.directiveToIndex=/* @__PURE__ */ new Map);for(let m=0;m<s;m++){let f=r[m];if(n.mergedAttrs=Xr(n.mergedAttrs,f.hostAttrs),sC(e,n,t,d,f),uC(d,f,o),a!==null&&a.has(f)){let[g,v]=a.get(f);n.directiveToIndex.set(f.type,[d,g+n.directiveStart,v+n.directiveStart])}else(i===null||!i.has(f))&&n.directiveToIndex.set(f.type,d);f.contentQueries!==null&&(n.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(n.flags|=64);let h=f.type.prototype;!l&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),l=!0),!u&&(h.ngOnChanges||h.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),u=!0),d++}aC(e,n,i)}function aC(e,t,n){for(let r=t.directiveStart;r<t.directiveEnd;r++){let o=e.data[r];if(n===null||!n.has(o))tg(0,t,o,r),tg(1,t,o,r),rg(t,r,!1);else{let i=n.get(o);ng(0,t,i,r),ng(1,t,i,r),rg(t,r,!0)}}}function tg(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(Object.hasOwn(o,i)){let a;e===0?(a=t.inputs??={},ev(t,i)):a=t.outputs??={},a[i]??=[],a[i].push(r)}}function ng(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(Object.hasOwn(o,i)){let a=o[i],s;e===0?(s=t.hostDirectiveInputs??={},ev(t,a)):s=t.hostDirectiveOutputs??={},s[a]??=[],s[a].push(r,i)}}function ev(e,t){t===`class`?e.flags|=8:t===`style`&&(e.flags|=16)}function rg(e,t,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=e;if(r===null||!n&&o===null||n&&i===null||Md(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let a=null,s=0;for(;s<r.length;){let c=r[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c==`number`)break;if(!n&&Object.hasOwn(o,c)){let l=o[c];for(let u of l)if(u===t){a??=[],a.push(c,r[s+1]);break}}else if(n&&Object.hasOwn(i,c)){let l=i[c];for(let u=0;u<l.length;u+=2)if(l[u]===t){a??=[],a.push(l[u+1],r[s+1]);break}}s+=2}e.initialInputs??=[],e.initialInputs.push(a)}function sC(e,t,n,r,o){e.data[r]=o;let a=new ar(o.factory||(o.factory=an(o.type,!0)),Et$2(o),ct$2,null);e.blueprint[r]=a,n[r]=a,cC(e,t,r,Cb(e,n,o.hostVars,$e$2),o)}function cC(e,t,n,r,o){let i=o.hostBindings;if(i){let a=e.hostBindingOpCodes;a===null&&(a=e.hostBindingOpCodes=[]);let s=~t.index;lC(a)!=s&&a.push(s),a.push(n,r,i)}}function lC(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n==`number`&&n<0)return n}return 0}function uC(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Et$2(t)&&(n[``]=e)}}function dC(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Qd(e,t,n,r,o,i,a,s){let c=t[E$1],l=c.consts,d=lo(c,e,n,r,He$2(l,a));return i&&Jb(c,t,d,He$2(l,s),o),d.mergedAttrs=Xr(d.mergedAttrs,d.attrs),d.attrs!==null&&ks(d,d.attrs,!1),d.mergedAttrs!==null&&ks(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function Xd(e,t){Mg(e,t),ql(t)&&e.queries.elementEnd(t)}function fC(e,t,n,r,o,i){let a=t.consts,c=lo(t,e,n,r,He$2(a,o));if(c.mergedAttrs=Xr(c.mergedAttrs,c.attrs),i!=null){let l=He$2(a,i);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&ks(c,c.attrs,!1),c.mergedAttrs!==null&&ks(c,c.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,c),c}var ei$1=void 0;function mC(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,``).length;return t===1&&n===0?1:5}var pC=[`en`,[[`a`,`p`],[`AM`,`PM`]],[[`AM`,`PM`]],[[`S`,`M`,`T`,`W`,`T`,`F`,`S`],[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`]],ei$1,[[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]],ei$1,[[`B`,`A`],[`BC`,`AD`],[`Before Christ`,`Anno Domini`]],0,[6,0],[`M/d/yy`,`MMM d, y`,`MMMM d, y`,`EEEE, MMMM d, y`],[`h:mm a`,`h:mm:ss a`,`h:mm:ss a z`,`h:mm:ss a zzzz`],[`{1}, {0}`,ei$1,ei$1,ei$1],[`.`,`,`,`;`,`%`,`+`,`-`,`E`,`×`,`‰`,`∞`,`NaN`,`:`],[`#,##0.###`,`#,##0%`,`¤#,##0.00`,`#E0`],`USD`,`$`,`US Dollar`,{},`ltr`,mC];var yu=Object.create(null);function Ue$2(e){let t=hC(e),n=og(t);if(n)return n;let r=t.split(`-`)[0];if(n=og(r),n)return n;if(r===`en`)return pC;throw new _(701,!1)}function og(e){if(!(e in yu)){let t=qe$1.ng&&qe$1.ng.common&&qe$1.ng.common.locales&&qe$1.ng.common.locales[e];return t!==void 0&&(yu[e]=t),t}return yu[e]}var ue$2={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};function hC(e){return e.toLowerCase().replace(/_/g,`-`)}var Jd=`en-US`;function gC(){return typeof $localize<`u`&&$localize.locale||Jd}var gi=new D(``,{factory:()=>p$1(gi,{optional:!0,skipSelf:!0})||gC()});var tv=typeof ShadowRoot<`u`;var bC=typeof Document<`u`;function vC(e){return Object.keys(e).map(t=>{let[n,r,o]=e[t],i={propName:n,templateName:t,isSignal:(r&pi.SignalBased)!==0};return o&&(i.transform=o),i})}function yC(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function DC(e,t,n){let r=t instanceof ke$1?t:t?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new ir(n,r):n}function EC(e){let t=e.get(at$1,null);if(t===null)throw new _(407,!1);return{rendererFactory:t,sanitizer:e.get(qb,null),changeDetectionScheduler:e.get(vt$3,null),ngReflect:!1,tracingService:e.get(St$1,null,{optional:!0}),locale:e.get(gi,Jd)}}function _C(e,t,n){let r=nv(e);return ub(t,r,r===`svg`?Gn$1:r===`math`?Xa$1:n)}function IC(e){if((e&&`localName`in e&&typeof e.localName==`string`?e.localName:e?.tagName)?.toLowerCase()===`script`)throw new _(905,!1)}function nv(e){return(e.selectors[0][0]||`div`).toLowerCase()}var to=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=vC(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=yC(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=j0(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,r,o,i,a,s,c){H$2(P.DynamicComponentStart);let l=I$3(null);try{let u=this.componentDef,d=DC(u,o||this.ngModule,t),m=EC(d),f=m.tracingService;return f&&f.componentCreate?f.componentCreate(Yb(u),()=>this.createComponentRef(m,d,n,r,i,a,s,c)):this.createComponentRef(m,d,n,r,i,a,s,c)}finally{I$3(l)}}createComponentRef(t,n,r,o,i,a,s,c){let l=this.componentDef,u=wC(o,l,a,i,c),d=t.rendererFactory.createRenderer(null,l),m=o?cS(d,o,l.encapsulation,n):_C(l,d,s??null);IC(m);let f=n.get(fr,null),h=SC(m,()=>n.get(j$1,null)??yd());f&&f.addHost(h);let g=a?.some(ig)||i?.some(w=>typeof w!=`function`&&w.bindings.some(ig)),v=Vd(null,u,null,512|Sb(l),null,null,t,d,n,null,nb(m,n,!0));f&&tv&&h instanceof ShadowRoot&&Zo(v,()=>{f.removeHost(h)}),v[W$1]=m,as(v);let y=null;try{let w=Qd(W$1,v,2,`#host`,()=>u.directiveRegistry,!0,0);pb(d,m,w),Jr(m,v),Gs(u,v,w),Id(u,w,v),Xd(u,w),r!==void 0&&xC(w,this.ngContentSelectors,r),y=Ke$2(w.index,v),v[oe$3]=y[oe$3],Gd(u,v,null)}catch(w){throw y!==null&&Ru(y),Ru(v),w}finally{H$2(P.DynamicComponentEnd),ss()}return new Os(this.componentType,v,!!g)}};function wC(e,t,n,r,o){let i=e?[`ng-version`,`22.3.0`]:B0(t.selectors[0]),a=null,s=null,c=0;if(n)for(let d of n)c+=d[Zu].requiredVars,d.create&&(d.targetIdx=0,(a??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let m=r[d];if(typeof m!=`function`)for(let f of m.bindings){c+=f[Zu].requiredVars;let h=d+1;f.create&&(f.targetIdx=h,(a??=[]).push(f)),f.update&&(f.targetIdx=h,(s??=[]).push(f))}}let l=[t];if(r)for(let d of r){let f=Fr(typeof d==`function`?d:d.type);l.push(f)}return Bd(0,null,CC(a,s),1,c,l,null,null,null,[i],null)}function SC(e,t){let n=e.getRootNode?.();return bC&&n instanceof Document?n.head:n&&tv&&n instanceof ShadowRoot?n:t().head}function CC(e,t){return!e&&!t?null:n=>{if(n&1&&e)for(let r of e)r.create();if(n&2&&t)for(let r of t)r.update()}}function ig(e){let t=e[Zu].kind;return t===`input`||t===`twoWay`}var Os=class extends Gb{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=zr(n[E$1],W$1),this.location=ao(this._tNode,n),this.instance=Ke$2(this._tNode.index,n)[oe$3],this.hostView=this.changeDetectorRef=new bn$1(n,void 0),this.componentType=t}setInput(t,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=/* @__PURE__ */ new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView;qs(r,o[E$1],o,t,n);this.previousInputValues.set(t,n);qd(Ke$2(r.index,o),1)}get injector(){return new Ht$2(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function xC(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var uo=(()=>{class e{static __NG_ELEMENT_ID__=NC}return e})();function NC(){return rv(se$3(),S$1())}var Ku=class e extends uo{_lContainer;_hostTNode;_hostLView;constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return ao(this._hostTNode,this._hostLView)}get injector(){return new Ht$2(this._hostTNode,this._hostLView)}get parentInjector(){let t=pd(this._hostTNode,this._hostLView);if(Og(t)){let n=Cs(t,this._hostLView),r=Ss(t),o=n[E$1].data[r+8];return new Ht$2(o,n)}else return new Ht$2(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=ag(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-ie$2}createEmbeddedView(t,n,r){let o,i,a;typeof r==`number`?o=r:r!=null&&(o=r.index,i=r.injector,a=r.onError);let s=Ts(this._lContainer,t.ssrId),c=t.createEmbeddedViewImpl(n||{},i,s);return a&&(c._lView[Hr]=a),this.insertImpl(c,o,lr(this._hostTNode,s)),c}createComponent(t,n,r,o,i,a,s){let c,l,u=n||{};c=u.index,r=u.injector,o=u.projectableNodes,i=u.environmentInjector||u.ngModuleRef,a=u.directives,s=u.bindings,l=u.onError;let d=new to(Lt$3(t)),m=r||this.parentInjector;if(!i&&d.ngModule==null){let w=this.parentInjector.get(ke$1,null);w&&(i=w)}let f=Lt$3(d.componentType??{}),h=Ts(this._lContainer,f?.id??null),g=h?.firstChild??null,v=d.create(m,o,g,i,a,s,this._getHostElementNamespace());return l&&(v.hostView._lView[Hr]=l),this.insertImpl(v.hostView,c,lr(this._hostTNode,h)),v}_getHostElementNamespace(){if(this._hostTNode.type&2){let t=this._hostTNode.parent??this._hostLView[he$2];return t!==null&&t.type&2&&typeof t.value==`string`&&t.value.toLowerCase()===`foreignobject`?null:t?.namespace??null}return this._hostTNode.namespace}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(Xp(o)){let s=this.indexOf(t);if(s!==-1)this.detach(s);else{let c=o[re$1],l=new e(c,c[he$2],c[re$1]);l.detach(l.indexOf(t))}}let i=this._adjustIndex(n),a=this._lContainer;return co(a,o,i,r),t.attachToViewContainerRef(),Vl(Du(a),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=ag(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=ai$1(this._lContainer,n);r&&(Uo(Du(this._lContainer),n),zs(r[E$1],r))}detach(t){let n=this._adjustIndex(t,-1),r=ai$1(this._lContainer,n);return r&&Uo(Du(this._lContainer),n)!=null?new bn$1(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function ag(e){return e[qo]}function Du(e){return e[qo]||(e[qo]=[])}function rv(e,t){let n,r=t[e.index];return Ze$2(r)?n=r:(n=$b(r,t,null,e),t[e.index]=n,Hd(t,n)),MC(n,t,e,r),new Ku(n,e,t)}function TC(e,t){let n=e[Y$1],r=n.createComment(``),o=Oe$1(t,e);return or(n,n.parentNode(o),r,n.nextSibling(o),!1),r}var MC=kC;var AC=()=>!1;function ov(e,t,n){return AC(e,t,n)}function kC(e,t,n,r){if(e[Qn$1])return;let o;n.type&8?o=ve(r):o=TC(t,n),e[Qn$1]=o}var Qu=class e{queryList;matches=null;constructor(t){this.queryList=t}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}};var Xu=class e{queries;constructor(t=[]){this.queries=t}createEmbeddedView(t){let n=t.queries;if(n!==null){let r=t.contentQueries!==null?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){let a=n.getByIndex(i),s=this.queries[a.indexInDeclarationView];o.push(s.clone())}return new e(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}finishViewCreation(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)tf(t,n).matches!==null&&this.queries[n].setDirty()}};var Rs=class{flags;read;predicate;constructor(t,n,r=null){this.flags=n,this.read=r,typeof t==`string`?this.predicate=PC(t):this.predicate=t}};var Ju=class e{queries;constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){let o=n!==null?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,n!==null?n.push(i):n=[i])}return n!==null?new e(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}};var ed=class e{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(t,n=-1){this.metadata=t,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new e(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,r=t.parent;for(;r!==null&&r.type&8&&r.index!==n;)r=r.parent;return n===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){let r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){let i=r[o];this.matchTNodeWithReadOption(t,n,OC(n,i)),this.matchTNodeWithReadOption(t,n,Es(n,t,i,!1,!1))}else r===eo?n.type&4&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Es(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(r!==null){let o=this.metadata.read;if(o!==null)if(o===pe$2||o===uo||o===Z$2||o===eo&&n.type&4)this.addMatch(n.index,-2);else{let i=Es(n,t,o,!1,!1);i!==null&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){this.matches===null?this.matches=[t,n]:this.matches.push(t,n)}};function OC(e,t){let n=e.localNames;if(n!==null){for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1]}return null}function RC(e,t){return e.type&11?ao(e,t):e.type&4?Ys(e,t):null}function FC(e,t,n,r){return n===-1?RC(t,e):n===-2?LC(e,t,r):ri(e,e[E$1],n,t)}function LC(e,t,n){if(n===pe$2)return ao(t,e);if(n===eo)return Ys(t,e);if(n===uo)return rv(t,e);if(n===Z$2)return new Ht$2(t,e)}function iv(e,t,n,r){let o=t[yt$4].queries[r];if(o.matches===null){let i=e.data,a=n.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let u=i[l];s.push(FC(t,u,a[c+1],n.metadata.read))}}o.matches=s}return o.matches}function td(e,t,n,r){let o=e.queries.getByIndex(n),i=o.matches;if(i!==null){let a=iv(e,t,o,n);for(let s=0;s<i.length;s+=2){let c=i[s];if(c>0)r.push(a[s/2]);else{let l=i[s+1],u=t[-c];for(let d=ie$2;d<u.length;d++){let m=u[d];m[un$1]===m[re$1]&&td(m[E$1],m,l,r)}if(u[Xn$2]!==null){let d=u[Xn$2];for(let m=0;m<d.length;m++){let f=d[m];td(f[E$1],f,l,r)}}}}}return r}function ef(e,t){return e[yt$4].queries[t].queryList}function av(e,t,n){let r=new sr((n&4)===4);return eh(e,t,r,r.destroy),(t[yt$4]??=new Xu).queries.push(new Qu(r))-1}function sv(e,t,n){let r=G$1();return r.firstCreatePass&&(lv(r,new Rs(e,t,n),-1),(t&2)===2&&(r.staticViewQueries=!0)),av(r,S$1(),t)}function cv(e,t,n,r){let o=G$1();if(o.firstCreatePass){let i=se$3();lv(o,new Rs(t,n,r),i.index),jC(o,e),(n&2)===2&&(o.staticContentQueries=!0)}return av(o,S$1(),n)}function PC(e){return e.split(`,`).map(t=>t.trim())}function lv(e,t,n){e.queries===null&&(e.queries=new Ju),e.queries.track(new ed(t,n))}function jC(e,t){let n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}function tf(e,t){return e.queries.getByIndex(t)}function uv(e,t){let n=e[E$1],r=tf(n,t);return r.crossesNgTemplate?td(n,e,t,[]):iv(n,e,r,t)}function dv(e,t,n){let r,o=Ro(()=>{r._dirtyCounter();let i=BC(r,e);if(t&&i===void 0)throw new _(-951,!1);return i});return r=o[ce$2],r._dirtyCounter=Bt$2(0),r._flatValue=void 0,o}function nf(e){return dv(!0,!1,e)}function rf(e){return dv(!0,!0,e)}function fv(e,t){let n=e[ce$2];n._lView=S$1(),n._queryIndex=t,n._queryList=ef(n._lView,t),n._queryList.onDirty(()=>n._dirtyCounter.update(r=>r+1))}function BC(e,t){let n=e._lView,r=e._queryIndex;if(n===void 0||r===void 0||n[N$1]&4)return t?void 0:Ee$1;let o=ef(n,r),i=uv(n,r);return o.reset(i,Ug),t?o.first:o._changesDetected||e._flatValue===void 0?e._flatValue=o.toArray():e._flatValue}function bi(e){return!!e&&typeof e.then==`function`}function Zs(e){return!!e&&typeof e.subscribe==`function`}var si=class{};var ci=class extends si{injector;instance=null;constructor(t){super();let n=new Wn$1([...t.providers,{provide:si,useValue:this}],t.parent||jr(),t.debugName,/* @__PURE__ */ new Set([`environment`]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function of(e,t,n=null){return new ci({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var VC=(()=>{class e{_injector;cachedInjectors=/* @__PURE__ */ new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Za$1(!1,n.type),o=r.length>0?of([r],this._injector,``):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static ɵprov=L$1({token:e,providedIn:`environment`,factory:()=>new e(F$1(ke$1))})}return e})();function Fe$1(e){return ui(()=>{let t=mv(e),n=ae$3(R$1({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection!==bd.Eager,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(VC).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,data:e.data||{},encapsulation:e.encapsulation||it$1.Emulated,styles:e.styles||Ee$1,_:null,schemas:e.schemas||null,tView:null,id:``});t.standalone&&st$2(`NgStandalone`),pv(n);let r=e.dependencies;return n.directiveDefs=sg(r,HC),n.pipeDefs=sg(r,Ll),n.id=zC(n),n})}function HC(e){return Lt$3(e)||Fr(e)}function Ne(e){return ui(()=>({type:e.type,bootstrap:e.bootstrap||Ee$1,declarations:e.declarations||Ee$1,imports:e.imports||Ee$1,exports:e.exports||Ee$1,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function $C(e,t){if(e==null)return cn$1;let n={};for(let r in e)if(Object.hasOwn(e,r)){let o=e[r],i,a,s,c;Array.isArray(o)?(s=o[0],i=o[1],a=o[2]??i,c=o[3]||null):(i=o,a=o,s=pi.None,c=null),n[i]=[r,s,c],t[i]=a}return n}function UC(e){if(e==null)return cn$1;let t={};for(let n in e)Object.hasOwn(e,n)&&(t[e[n]]=n);return t}function ye$2(e){return ui(()=>{let t=mv(e);return pv(t),t})}function fo(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone??!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function mv(e){let t={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||cn$1,exportAs:e.exportAs||null,standalone:e.standalone??!0,selectors:e.selectors||Ee$1,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:$C(e.inputs,t),outputs:UC(e.outputs),debugInfo:null}}function pv(e){e.features?.forEach(t=>t(e))}function sg(e,t){return e?()=>{let n=typeof e==`function`?e():e,r=[];for(let o of n){let i=t(o);i!==null&&r.push(i)}return r}:null}function zC(e){let t=0,n=typeof e.consts==`function`?``:e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join(`|`))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,`c`+t}var hv=new D(``);var af=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=p$1(hv,{optional:!0})??[];injector=p$1(Z$2);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=Ka(this.injector,o);if(bi(i))n.push(i);else if(Zs(i)){let a=new Promise((s,c)=>{i.subscribe({complete:s,error:c})});n.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();function WC(e){return t=>{t.controlDef={create:(n,r)=>{n?.ɵngControlCreate(r)},update:(n,r)=>{n?.ɵngControlUpdate?.(r)},passThroughInput:e}}}function GC(e){let t=n=>{let r=Array.isArray(e);n.hostDirectives===null?(n.resolveHostDirectives=qC,n.hostDirectives=r?e.map(nd):[e]):r?n.hostDirectives.unshift(...e.map(nd)):n.hostDirectives.unshift(e)};return t.ngInherit=!0,t}function qC(e){let t=[],n=!1,r=null,o=null;for(let i=0;i<e.length;i++){let a=e[i];if(a.hostDirectives!==null){let s=t.length;r??=/* @__PURE__ */ new Map,o??=/* @__PURE__ */ new Map,gv(a,t,r,e),o.set(a,[s,t.length-1])}i===0&&Et$2(a)&&(n=!0,t.push(a))}for(let i=n?1:0;i<e.length;i++)t.push(e[i]);return r!==null&&r.forEach((i,a)=>{YC(a.declaredInputs,i.inputs)}),[t,r,o]}function gv(e,t,n,r){if(e.hostDirectives!==null)for(let o of e.hostDirectives)if(typeof o==`function`){let i=o();for(let a of i)cg(nd(a),t,n,r)}else cg(o,t,n,r)}function cg(e,t,n,r){let o=Fr(e.directive);if(gv(o,t,n,r),n.has(o)){let i=n.get(o);lg(i,e.inputs,`input`),lg(i,e.outputs,`output`)}else r.includes(o)||(n.set(o,e),t.push(o))}function lg(e,t,n){let r=n===`input`?e.inputs:e.outputs;Object.keys(t).forEach(o=>{let i=t[o];(!Object.hasOwn(r,o)||r[o]===i)&&(r[o]=i)})}function nd(e){return typeof e==`function`?{directive:fe$2(e),inputs:{},outputs:{}}:{directive:fe$2(e.directive),inputs:ug(e.inputs),outputs:ug(e.outputs)}}function ug(e){let t={};if(e!==void 0&&e.length>0)for(let n=0;n<e.length;n+=2)t[e[n]]=e[n+1];return t}function YC(e,t){for(let n in t)if(Object.hasOwn(t,n)){let r=t[n];e[r]=e[n]}}function ZC(e){return Object.getPrototypeOf(e.prototype).constructor}function mr(e){let t=ZC(e.type),n=!0,r=[e];for(;t&&t!==Function.prototype&&t!==Object.prototype;){let o,i=Object.hasOwn(t,Vo)?t[Vo]:void 0,a=Object.hasOwn(t,Ho)?t[Ho]:void 0;if(Et$2(e))o=i??a;else{if(i&&e.selectors&&e.selectors.length>0)throw new _(903,!1);o=i??a}if(o){if(n){r.push(o);let c=e;c.inputs=Eu(e.inputs),c.declaredInputs=Eu(e.declaredInputs),c.outputs=Eu(e.outputs);let l=o.hostBindings;l&&ex(e,l);let u=o.viewQuery,d=o.contentQueries;u&&XC(e,u),d&&JC(e,d),KC(e,o),Fp(e.outputs,o.outputs);let m=o.data?.animation;if(m){let f=e.data??={};f.animation=(f.animation||[]).concat(m)}}let s=o.features;if(s)for(let c=0;c<s.length;c++){let l=s[c];l&&l.ngInherit&&l(e),l===mr&&(n=!1)}}t=Object.getPrototypeOf(t)}QC(r)}function KC(e,t){for(let n in t.inputs){if(!Object.hasOwn(t.inputs,n)||Object.hasOwn(e.inputs,n))continue;let r=t.inputs[n];r!==void 0&&(e.inputs[n]=r,e.declaredInputs[n]=t.declaredInputs[n])}}function QC(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){let o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=Xr(o.hostAttrs,n=Xr(n,o.hostAttrs))}}function Eu(e){return e===cn$1?{}:e===Ee$1?[]:e}function XC(e,t){let n=e.viewQuery;n?e.viewQuery=(r,o)=>{t(r,o),n(r,o)}:e.viewQuery=t}function JC(e,t){let n=e.contentQueries;n?e.contentQueries=(r,o,i)=>{t(r,o,i),n(r,o,i)}:e.contentQueries=t}function ex(e,t){let n=e.hostBindings;n?e.hostBindings=(r,o)=>{t(r,o),n(r,o)}:e.hostBindings=t}function bv(e,t,n,r,o,i,a,s){if(n.firstCreatePass){e.mergedAttrs=Xr(e.mergedAttrs,e.attrs);let u=e.tView=Bd(2,e,o,i,a,n.directiveRegistry,n.pipeRegistry,null,n.schemas,n.consts,null);n.queries!==null&&(n.queries.template(n,e),u.queries=n.queries.embeddedTView(e))}s&&(e.flags|=s),Wr(e,!1);let c=nx(n,t,e,r);cs()&&Pd(n,t,c,e),Jr(c,t);let l=$b(c,t,c,e);t[r+W$1]=l,Hd(t,l),ov(l,e,t)}function tx(e,t,n,r,o,i,a,s,c,l,u){let d=n+W$1,m;return t.firstCreatePass?(m=lo(t,d,4,a||null,s||null),rs()&&Jb(t,e,m,He$2(t.consts,l),$d),Mg(t,m)):m=t.data[d],bv(m,e,t,n,r,o,i,c),$r(m)&&Gs(t,e,m),l!=null&&hi(e,m,u),m}function ur(e,t,n,r,o,i,a,s,c,l,u){let d=n+W$1,m;if(t.firstCreatePass){if(m=lo(t,d,4,a||null,s||null),l!=null){let f=He$2(t.consts,l);m.localNames=[];for(let h=0;h<f.length;h+=2)m.localNames.push(f[h],-1)}}else m=t.data[d];return bv(m,e,t,n,r,o,i,c),l!=null&&hi(e,m,u),m}function vv(e,t,n,r,o,i,a,s){let c=S$1(),l=G$1();return tx(c,l,e,t,n,r,o,He$2(l.consts,i),void 0,a,s),vv}function yv(e,t,n,r,o,i,a,s){let c=S$1(),l=G$1();return ur(c,l,e,t,n,r,o,He$2(l.consts,i),void 0,a,s),yv}var nx=rx;function rx(e,t,n,r){return Xo(!0),t[Y$1].createComment(``)}var Re$1=(function(e){return e[e.NOT_STARTED=0]=`NOT_STARTED`,e[e.IN_PROGRESS=1]=`IN_PROGRESS`,e[e.COMPLETE=2]=`COMPLETE`,e[e.FAILED=3]=`FAILED`,e})(Re$1||{});var dg=0;var ox=1;var le$2=(function(e){return e[e.Placeholder=0]=`Placeholder`,e[e.Loading=1]=`Loading`,e[e.Complete=2]=`Complete`,e[e.Error=3]=`Error`,e})(le$2||{});var Dv=(function(e){return e[e.Initial=-1]=`Initial`,e})(Dv||{});var ix=0;var Ks=1;var ax=4;var sx=5;var cx=6;var lx=7;var _u=8;var ux=9;var sf=(function(e){return e[e.Manual=0]=`Manual`,e[e.Playthrough=1]=`Playthrough`,e})(sf||{});function Ev(e,t,n){let r=Iv(e);t[r]===null&&(t[r]=[]),t[r].push(n)}function Is(e,t){let n=Iv(e),r=t[n];if(r!==null){for(let o of r)o();t[n]=null}}function _v(e){Is(1,e),Is(0,e),Is(2,e)}function Iv(e){let t=ax;return e===1?t=sx:e===2&&(t=ux),t}function Qs(e){return e+1}function mo(e,t){e[E$1];return e[Qs(t.index)]}function dx(e,t,n){e[E$1];let o=Qs(t);e[o]=n}function po(e,t){let n=Qs(t.index);return e.data[n]}function fx(e,t,n){let r=Qs(t);e.data[r]=n}function mx(e,t,n){let r=t[E$1],o=po(r,n);switch(e){case le$2.Complete:return o.primaryTmplIndex;case le$2.Loading:return o.loadingTmplIndex;case le$2.Error:return o.errorTmplIndex;case le$2.Placeholder:return o.placeholderTmplIndex;default:return null}}function fg(e,t){return t===le$2.Placeholder?e.placeholderBlockConfig?.[dg]??null:t===le$2.Loading?e.loadingBlockConfig?.[dg]??null:null}function px(e){return e.loadingBlockConfig?.[ox]??null}function mg(e,t){if(!e||e.length===0)return t;let n=new Set(e);for(let r of t)n.add(r);return e.length===n.size?e:Array.from(n)}function hx(e,t){return zr(e,t.primaryTmplIndex+W$1)}var gx=(()=>{class e{cachedInjectors=/* @__PURE__ */ new Map;getOrCreateInjector(n,r,o,i){if(!this.cachedInjectors.has(n)){let a=o.length>0?of(o,r,i):null;this.cachedInjectors.set(n,a)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static ɵprov=L$1({token:e,providedIn:`environment`,factory:()=>new e})}return e})();var wv=new D(``);function Iu(e,t,n){return e.get(gx).getOrCreateInjector(t,e,n,``)}function bx(e,t,n){if(e instanceof ir){let o=e.injector,i=e.parentInjector;return new ir(o,Iu(i,t,n))}let r=e.get(ke$1);if(r!==e)return new ir(e,Iu(r,t,n));return Iu(e,t,n)}function gn$1(e,t,n,r=!1){let o=n[re$1],i=o[E$1];if(fn$1(o))return;let a=mo(o,t),s=a[Ks],c=a[lx];if(!(c!==null&&e<c)&&pg(s,e)&&pg(a[ix]??-1,e)){let l=po(i,t),d=!r&&(px(l)!==null||fg(l,le$2.Loading)!==null||fg(l,le$2.Placeholder))?Ex:yx;try{d(e,a,n,t,o)}catch(m){Wd(o,m)}}}function vx(e,t){let n=e[dn$1]?.findIndex(o=>o.data[Ed]===t[Ks])??-1;return{dehydratedView:n>-1?e[dn$1][n]:null,dehydratedViewIx:n}}function yx(e,t,n,r,o){H$2(P.DeferBlockStateStart);let i=mx(e,o,r);if(i!==null){t[Ks]=e;let a=o[E$1],c=zr(a,i+W$1),l=0;Yd(n,l);let u;if(e===le$2.Complete){let h=po(a,r),g=h.providers;g&&g.length>0&&(u=bx(o[xe$2],h,g))}let{dehydratedView:d,dehydratedViewIx:m}=vx(n,t),f=so(o,c,null,{injector:u,dehydratedView:d});if(co(n,f,l,lr(c,d)),ts(f),m>-1&&n[dn$1]?.splice(m,1),(e===le$2.Complete||e===le$2.Error)&&Array.isArray(t[_u])){for(let h of t[_u])h();t[_u]=null}}H$2(P.DeferBlockStateEnd)}function pg(e,t){return e<t}function Dx(e,t){let n=e[t.index];gn$1(le$2.Placeholder,t,n)}function hg(e,t,n){e.loadingPromise.then(()=>{e.loadingState===Re$1.COMPLETE?gn$1(le$2.Complete,t,n):e.loadingState===Re$1.FAILED&&gn$1(le$2.Error,t,n)})}var Ex=null;function Sv(e,t){return t[xe$2].get(wv,null,{optional:!0})?.behavior!==sf.Manual}var cf=new D(``);var lf=new D(``);function Cv(){dl(e=>{throw new _(-600,``)})}var _x=10;var yn$2=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=p$1(jt$1);afterRenderManager=p$1(Us);zonelessEnabled=p$1(Jo);rootEffectScheduler=p$1(ms);dirtyFlags=0;tracingSnapshot=null;allTestViews=/* @__PURE__ */ new Set;autoDetectTestViews=/* @__PURE__ */ new Set;includeAllTestViews=!1;afterTick=new U$1;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=p$1(tr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ge$1(n=>!n))}constructor(){p$1(St$1,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=p$1(ke$1);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=Z$2.NULL){return this._injector.get(V).run(()=>{if(H$2(P.BootstrapComponentStart),!this._injector.get(af).done)throw new _(405,``);let s=Lt$3(n),c=this._injector.get(si),l=new to(s,c);this.componentTypes.push(n);let{hostElement:u,directives:d,bindings:m}=Ix(r),f=u||l.selector,h=l.create(o,[],f,c.injector,d,m),g=h.location.nativeElement,v=h.injector.get(cf,null);return v?.registerApplication(g),h.onDestroy(()=>{this.detachView(h.hostView),ni$1(this.components,h),v?.unregisterApplication(g)}),this._loadComponent(h),H$2(P.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){H$2(P.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run($s.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw H$2(P.ChangeDetectionEnd),new _(101,!1);let n=I$3(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,I$3(n),this.afterTick.next(),H$2(P.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(at$1,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<_x;){H$2(P.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{H$2(P.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!Yo(o))continue;Pb(o,r&&!this.zonelessEnabled?0:1),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>Yo(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;ni$1(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(lf,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>ni$1(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new _(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();function Ix(e){return e===void 0||typeof e==`string`||e instanceof Element?{hostElement:e}:e}function ni$1(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function wx(e,t,n){let r=t.get(Cx),o=()=>r.remove(e);return r.add(e,n),o}function Sx(e){return(t,n)=>wx(t,n,e)}var Cx=(()=>{class e{buckets=/* @__PURE__ */ new Map;callbackBucket=/* @__PURE__ */ new Map;applicationRef=p$1(yn$2);ngZone=p$1(V);idleService=p$1($g);add(n,r){let o=gg(r);this.callbackBucket.set(n,o);let i=this.buckets.get(o);i??(i={idleId:null,queue:/* @__PURE__ */ new Set},this.buckets.set(o,i)),i.queue.add(n),this.scheduleBucket(i,r)}remove(n){let r=this.callbackBucket.get(n);if(r===void 0)return;this.callbackBucket.delete(n);let o=this.buckets.get(r);o&&(o.queue.delete(n),o.queue.size===0&&(this.cancelBucket(o),this.buckets.delete(r)))}scheduleBucket(n,r){if(n.idleId!==null)return;let o=gg(r),i=a=>{for(let s of n.queue)try{s(),this.applicationRef._tick()}finally{if(n.queue.delete(s),this.callbackBucket.delete(s),a&&a.timeRemaining()===0&&!a.didTimeout)break}n.idleId=null,n.queue.size>0?this.scheduleBucket(n,r):this.buckets.get(o)===n&&this.buckets.delete(o)};n.idleId=this.idleService.requestOnIdle(a=>this.ngZone.run(()=>i(a)),r)}cancelBucket(n){n.idleId!==null&&(this.idleService.cancelOnIdle(n.idleId),n.idleId=null)}ngOnDestroy(){for(let n of this.buckets.values())this.cancelBucket(n);this.buckets.clear(),this.callbackBucket.clear()}static ɵprov=L$1({token:e,providedIn:`root`,factory:()=>new e})}return e})();function gg(e){return!e||e.timeout==null?``:`${e.timeout}`}function xx(e){let t=S$1(),n=se$3();if(Dx(t,n),!Sv(0,t))return;let r=t[xe$2];Ev(0,mo(t,n),e(()=>Nx(0,t,n),r))}function xv(e,t,n){let r=t[xe$2],o=t[E$1];if(e.loadingState!==Re$1.NOT_STARTED)return e.loadingPromise??Promise.resolve();let i=mo(t,n),a=hx(o,e);e.loadingState=Re$1.IN_PROGRESS,Is(1,i);let s=e.dependencyResolverFn,c=r.get(ps).add();return s?(e.loadingPromise=Promise.allSettled(s()).then(l=>{let u=!1,m=[],f=[];for(let h=0;h<l.length;h++){let g=l[h];if(g.status===`fulfilled`){let v=g.value,y=Lt$3(v)||Fr(v);if(y)m.push(y);else{let w=Ll(v);w&&f.push(w)}}else{u=!0,g.reason instanceof Error?g.reason:new Error(String(g.reason));break}}if(u){if(e.loadingState=Re$1.FAILED,e.errorTmplIndex===null)Wd(t,new _(-750,``))}else{e.loadingState=Re$1.COMPLETE;let h=a.tView;if(m.length>0){h.directiveRegistry=mg(h.directiveRegistry,m);e.providers=Za$1(!1,...m.map(y=>y.type))}f.length>0&&(h.pipeRegistry=mg(h.pipeRegistry,f))}}),e.loadingPromise.finally(()=>{e.loadingPromise=null,c()})):(e.loadingPromise=Promise.resolve().then(()=>{e.loadingPromise=null,e.loadingState=Re$1.COMPLETE,c()}),e.loadingPromise)}function Nx(e,t,n){let r=t[E$1],o=t[n.index];if(!Sv(e,t))return;let i=mo(t,n),a=po(r,n);switch(_v(i),a.loadingState){case Re$1.NOT_STARTED:gn$1(le$2.Loading,n,o),xv(a,t,n),a.loadingState===Re$1.IN_PROGRESS&&hg(a,n,o);break;case Re$1.IN_PROGRESS:gn$1(le$2.Loading,n,o),hg(a,n,o);break;case Re$1.COMPLETE:gn$1(le$2.Complete,n,o);break;case Re$1.FAILED:gn$1(le$2.Error,n,o)}}function Tx(e,t,n){return e===0?bg(t,n):e===2?!bg(t,n):!0}function Mx(e){return e!=null&&(e&1)===1}function bg(e,t){let n=e[xe$2],r=po(e[E$1],t),o=_d(n),i=Mx(r.flags),s=mo(e,t)[cx]!==null;return!(i&&s&&o)}function Ax(e,t,n,r,o,i,a,s,c,l){let u=S$1(),d=G$1(),m=e+W$1,f=ur(u,d,e,null,0,0),h=u[xe$2],g=_d(h);if(d.firstCreatePass){st$2(`NgDefer`);let Nt={primaryTmplIndex:t,loadingTmplIndex:r??null,placeholderTmplIndex:o??null,errorTmplIndex:i??null,placeholderBlockConfig:null,loadingBlockConfig:null,dependencyResolverFn:n??null,loadingState:Re$1.NOT_STARTED,loadingPromise:null,providers:null,hydrateTriggers:null,debug:null,flags:l??0};c?.(d,Nt,s,a),fx(d,m,Nt)}let v=u[m];ov(v,f,u);let y=null,w=null;if(v[dn$1]?.length>0){let Nt=v[dn$1][0].data;w=Nt[Dd]??null,y=Nt[Ed]}let ne=[null,Dv.Initial,null,null,null,null,w,y,null,null];dx(u,m,ne);let pt=null;w!==null&&g&&(pt=h.get(tb),pt.add(w,{lView:u,tNode:f,lContainer:v}));let We=()=>{_v(ne),w!==null&&pt?.cleanup([w])};Ev(0,ne,()=>Ql(u,We)),Zo(u,We)}function kx(e){Tx(0,S$1(),se$3())&&xx(Sx({timeout:e}))}function Nv(e,t){let n=S$1();if(Qe$2(n,mn$3(),t)){let o=G$1(),i=er();if(qs(i,o,n,e,t))Dt$1(i)&&Ab(n,i.index);else{let s=Oe$1(i,n);mb(n[Y$1],s,null,i.value,e,t,null)}}return Nv}function pr(e,t,n,r){let o=S$1();if(Qe$2(o,mn$3(),t)){G$1();gS(er(),o,e,t,n,r)}return pr}var rd=class{destroy(t){}updateValue(t,n){}swap(t,n){let r=Math.min(t,n),o=Math.max(t,n),i=this.detach(o);if(o-r>1){let a=this.detach(r);this.attach(r,i),this.attach(o,a)}else this.attach(r,i)}move(t,n){this.attach(n,this.detach(t))}};function wu(e,t,n,r,o){return e===n&&Object.is(t,r)?1:Object.is(o(e,t),o(n,r))?-1:0}function Ox(e,t,n,r){let o,i,a=0,s=e.length-1;if(Array.isArray(t)){I$3(r);let l=t.length-1;for(I$3(null);a<=s&&a<=l;){let u=e.at(a),d=t[a],m=wu(a,u,a,d,n);if(m!==0){m<0&&e.updateValue(a,d),a++;continue}let f=e.at(s),h=t[l],g=wu(s,f,l,h,n);if(g!==0){g<0&&e.updateValue(s,h),s--,l--;continue}let v=n(a,u),y=n(s,f),w=n(a,d);if(Object.is(w,y)){let ne=n(l,h);Object.is(ne,v)?(e.swap(a,s),e.updateValue(s,h),l--,s--):e.move(s,a),e.updateValue(a,d),a++;continue}if(o??=new Fs,i??=yg(e,a,s,n),od(e,o,a,w))e.updateValue(a,d),a++,s++;else if(i.has(w))o.set(v,e.detach(a)),s--;else{let ne=e.create(a,t[a]);e.attach(a,ne),a++,s++}}for(;a<=l;)vg(e,o,n,a,t[a]),a++}else if(t!=null){I$3(r);let l=t[Symbol.iterator]();I$3(null);let u=l.next();for(;!u.done&&a<=s;){let d=e.at(a),m=u.value,f=wu(a,d,a,m,n);if(f!==0)f<0&&e.updateValue(a,m),a++,u=l.next();else{o??=new Fs,i??=yg(e,a,s,n);let h=n(a,m);if(od(e,o,a,h))e.updateValue(a,m),a++,s++,u=l.next();else if(!i.has(h))e.attach(a,e.create(a,m)),a++,s++,u=l.next();else{let g=n(a,d);o.set(g,e.detach(a)),s--}}}for(;!u.done;)vg(e,o,n,e.length,u.value),u=l.next()}for(;a<=s;)e.destroy(e.detach(s--));o?.forEach(l=>{e.destroy(l)})}function od(e,t,n,r){return t!==void 0&&t.has(r)?(e.attach(n,t.get(r)),t.delete(r),!0):!1}function vg(e,t,n,r,o){if(od(e,t,r,n(r,o)))e.updateValue(r,o);else{let i=e.create(r,o);e.attach(r,i)}}function yg(e,t,n,r){let o=/* @__PURE__ */ new Set;for(let i=t;i<=n;i++)o.add(r(i,e.at(i)));return o}var Fs=class{kvMap=/* @__PURE__ */ new Map;_vMap=void 0;has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let n=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(n)?(this.kvMap.set(t,this._vMap.get(n)),this._vMap.delete(n)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,n){if(this.kvMap.has(t)){let r=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=/* @__PURE__ */ new Map);let o=this._vMap;for(;o.has(r);)r=o.get(r);o.set(r,n)}else this.kvMap.set(t,n)}forEach(t){for(let[n,r]of this.kvMap)if(t(r,n),this._vMap!==void 0){let o=this._vMap;for(;o.has(r);)r=o.get(r),t(r,n)}}};function vi(e,t,n,r,o,i,a,s){st$2(`NgControlFlow`);let c=S$1(),l=G$1();return ur(c,l,e,t,n,r,o,He$2(l.consts,i),256,a,s),uf}function uf(e,t,n,r,o,i,a,s){return st$2(`NgControlFlow`),Rx(e,t,n,r,o,i,a,s),uf}function Rx(e,t,n,r,o,i,a,s){let c=S$1(),l=G$1();ur(c,l,e,t,n,r,o,He$2(l.consts,i),512,a,s)}function yi(e,t){st$2(`NgControlFlow`);let n=S$1(),r=mn$3(),o=n[r]!==$e$2?n[r]:-1,i=o!==-1?Ls(n,W$1+o):void 0,a=0;if(Qe$2(n,r,e)){let s=I$3(null);try{if(i!==void 0&&Yd(i,a),e!==-1){let c=W$1+e,l=Ls(n,c),u=cd(n[E$1],c),d=Wb(l,u,n);co(l,so(n,u,t,{dehydratedView:d}),a,lr(u,d))}}finally{I$3(s)}}else if(i!==void 0){let s=Ub(i,a);s!==void 0&&(s[oe$3]=t)}}var id=class{lContainer;$implicit;$index;constructor(t,n,r){this.lContainer=t,this.$implicit=n,this.$index=r}get $count(){return this.lContainer.length-ie$2}};function Fx(e){return e}function Lx(e,t){return t}var ad=class{hasEmptyBlock;trackByFn;liveCollection;constructor(t,n,r){this.hasEmptyBlock=t,this.trackByFn=n,this.liveCollection=r}};function Px(e,t,n,r,o,i,a,s,c,l,u,d,m){st$2(`NgControlFlow`);let f=S$1(),h=G$1(),g=c!==void 0,v=S$1(),w=new ad(g,s?a.bind(v[be][oe$3]):a);v[W$1+e]=w,ur(f,h,e+1,t,n,r,o,He$2(h.consts,i),256),g&&ur(f,h,e+2,c,l,u,d,He$2(h.consts,m),512)}var sd=class extends rd{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(t,n,r){super(),this.lContainer=t,this.hostLView=n,this.templateTNode=r}get length(){return this.lContainer.length-ie$2}at(t){return this.getLView(t)[oe$3].$implicit}attach(t,n){let r=n[Yn$2];this.needsIndexUpdate||=t!==this.length,co(this.lContainer,n,t,lr(this.templateTNode,r)),Bx(this.lContainer,t)}detach(t){return this.needsIndexUpdate||=t!==this.length-1,Vx(this.lContainer,t),Hx(this.lContainer,t)}create(t,n){let r=Ts(this.lContainer,this.templateTNode.tView.ssrId);return so(this.hostLView,this.templateTNode,new id(this.lContainer,n,t),{dehydratedView:r})}destroy(t){zs(t[E$1],t)}updateValue(t,n){this.getLView(t)[oe$3].$implicit=n}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[oe$3].$index=t}getLView(t){return $x(this.lContainer,t)}};function jx(e){let t=I$3(null),n=_t$4();try{let r=S$1(),o=r[E$1],i=r[n],a=n+1,s=Ls(r,a);if(i.liveCollection===void 0)i.liveCollection=new sd(s,r,cd(o,a));else i.liveCollection.reset();let c=i.liveCollection;if(Ox(c,e,i.trackByFn,t),c.updateIndexes(),i.hasEmptyBlock){let l=mn$3(),u=c.length===0;if(Qe$2(r,l,u)){let d=n+2,m=Ls(r,d);if(u){let f=cd(o,d),h=Wb(m,f,r);co(m,so(r,f,void 0,{dehydratedView:h}),0,lr(f,h))}else o.firstUpdatePass&&BS(m),Yd(m,0)}}}finally{I$3(t)}}function Ls(e,t){return e[t]}function Bx(e,t){if(e.length<=ie$2)return;let r=e[ie$2+t];r&&G0(r)}function Vx(e,t){if(e.length<=ie$2)return;let r=e[ie$2+t];r&&W0(r)}function Hx(e,t){return ai$1(e,t)}function $x(e,t){return Ub(e,t)}function cd(e,t){return zr(e,t)}function Tv(e,t,n){let r=S$1();if(Qe$2(r,mn$3(),t)){G$1();fS(er(),r,e,t,r[Y$1],n)}return Tv}function ld(e,t,n,r,o){qs(t,e,n,o?`class`:`style`,r)}function Ps(e,t,n,r){let o=S$1(),i=o[E$1],a=e+W$1,s=i.firstCreatePass?Qd(a,o,2,t,$d,rs(),n,r):i.data[a];if(Dt$1(s)){let c=o[rt$1].tracingService;if(c&&c.componentCreate){let l=i.data[s.directiveStart+s.componentOffset];return c.componentCreate(Yb(l),()=>(Dg(e,t,o,s,r),Ps))}}return Dg(e,t,o,s,r),Ps}function Dg(e,t,n,r,o){if(Ud(r,n,e,t,Av),$r(r)){let i=n[E$1];Gs(i,n,r),Id(i,r,n)}o!=null&&hi(n,r)}function df(){let e=G$1(),n=zd(se$3());return e.firstCreatePass&&Xd(e,n),nu(n)&&ru(),eu(),n.classesWithoutHost!=null&&Nw(n)&&ld(e,n,S$1(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&Tw(n)&&ld(e,n,S$1(),n.stylesWithoutHost,!1),df}function Mv(e,t,n,r){return Ps(e,t,n,r),df(),Mv}function Dn$1(e,t,n,r){let o=S$1(),i=o[E$1],a=e+W$1,s=i.firstCreatePass?fC(a,i,2,t,n,r):i.data[a];return Ud(s,o,e,t,Av),r!=null&&hi(o,s),Dn$1}function En$1(){return nu(zd(se$3()))&&ru(),eu(),En$1}function _n$2(e,t,n,r){return Dn$1(e,t,n,r),En$1(),_n$2}var Av=(e,t,n,r,o)=>(Xo(!0),ub(t[Y$1],r,du()));function ff(e,t,n){let r=S$1(),o=r[E$1],i=e+W$1,a=o.firstCreatePass?Qd(i,r,8,`ng-container`,$d,rs(),t,n):o.data[i];if(Ud(a,r,e,`ng-container`,Ux),$r(a)){let s=r[E$1];Gs(s,r,a),Id(s,a,r)}return n!=null&&hi(r,a),ff}function mf(){let e=G$1(),n=zd(se$3());return e.firstCreatePass&&Xd(e,n),mf}function kv(e,t,n){return ff(e,t,n),mf(),kv}var Ux=(e,t,n,r,o)=>(Xo(!0),E0(t[Y$1],``));function zx(){return S$1()}function Xs(e,t,n){let r=S$1();if(Qe$2(r,mn$3(),t)){G$1();Tb(er(),r,e,t,r[Y$1],n)}return Xs}function Ov(e,t,n){let r=S$1(),o=G$1(),i=se$3();return Wx(o,r,r[Y$1],i,e,t,n),Ov}function Rv(e,t,n){let r=S$1(),o=G$1(),i=se$3();return(i.type&3||n)&&Qb(i,o,r,n,r[Y$1],e,t,Qr(i,r,t)),Rv}function Wx(e,t,n,r,o,i,a){let s=!0,c=null;if((r.type&3||a)&&(c??=Qr(r,t,i),Qb(r,e,t,a,n,o,i,c)&&(s=!1)),s){let l=r.outputs?.[o],u=r.hostDirectiveOutputs?.[o];if(u&&u.length)for(let d=0;d<u.length;d+=2){let m=u[d],f=u[d+1];c??=Qr(r,t,i),Ms(r,t,m,f,o,c)}if(l&&l.length)for(let d of l)c??=Qr(r,t,i),Ms(r,t,d,o,o,c)}}function Gx(e=1){return hh(e)}function qx(e,t){let n=null,r=O0(e);for(let o=0;o<t.length;o++){let i=t[o];if(i===`*`){n=o;continue}if(r===null?bb(e,i,!0):L0(r,i))return o}return n}function hr(e){let t=S$1()[be][he$2];if(!t.projection){let r=t.projection=Hp(e?e.length:1,null),o=r.slice(),i=t.child;for(;i!==null;){if(i.type!==128){let a=e?qx(i,e):0;a!==null&&(o[a]?o[a].projectionNext=i:r[a]=i,o[a]=i)}i=i.next}}}function lt$2(e,t=0,n,r,o,i){let a=S$1(),s=G$1(),c=r?e+1:null;c!==null&&ur(a,s,c,r,o,i,null,n);let l=lo(s,W$1+e,16,null,n||null);l.projection===null&&(l.projection=t),au();let d=!a[Yn$2]||tu();a[be][he$2].projection[l.projection]===null&&c!==null?Yx(a,s,c):d&&!Bs(l)&&nS(s,a,l)}function Yx(e,t,n){let r=W$1+n,o=t.data[r],i=e[r],a=Ts(i,o.tView.ssrId);co(i,so(e,o,void 0,{dehydratedView:a}),0,lr(o,a))}function Fv(e,t,n,r){return cv(e,t,n,r),Fv}function Lv(e,t,n){return sv(e,t,n),Lv}function Zx(e){let t=S$1(),n=G$1(),r=is();Qo(r+1);let o=tf(n,r);if(e.dirty&&Qp(t)===((o.metadata.flags&2)===2)){if(o.matches===null)e.reset([]);else{let i=uv(t,r);e.reset(i,Ug),e.notifyOnChanges()}return!0}return!1}function Kx(){return ef(S$1(),is())}function Pv(e,t,n,r,o){return fv(t,cv(e,n,r,o)),Pv}function jv(e,t,n,r){return fv(e,sv(t,n,r)),jv}function Qx(e=1){Qo(is()+e)}function Xx(e){return Ja(ah(),W$1+e)}function vs(e,t){return e<<17|t<<2}function dr(e){return e>>17&32767}function Jx(e){return(e&2)==2}function eN(e,t){return e&131071|t<<17}function ud(e){return e|2}function no(e){return(e&131068)>>2}function Su(e,t){return e&-131069|t<<2}function tN(e){return(e&1)===1}function dd(e){return e|1}function nN(e,t,n,r,o,i){let a=i?t.classBindings:t.styleBindings,s=dr(a),c=no(a);e[r]=n;let l=!1,u;if(Array.isArray(n)){let d=n;u=d[1],(u===null||Lr(d,u)>0)&&(l=!0)}else u=n;if(o)if(c!==0){let m=dr(e[s+1]);e[r+1]=vs(m,s),m!==0&&(e[m+1]=Su(e[m+1],r)),e[s+1]=eN(e[s+1],r)}else e[r+1]=vs(s,0),s!==0&&(e[s+1]=Su(e[s+1],r)),s=r;else e[r+1]=vs(c,0),s===0?s=r:e[c+1]=Su(e[c+1],r),c=r;l&&(e[r+1]=ud(e[r+1])),Eg(e,u,r,!0),Eg(e,u,r,!1),rN(t,u,e,r,i),a=vs(s,c),i?t.classBindings=a:t.styleBindings=a}function rN(e,t,n,r,o){let i=o?e.residualClasses:e.residualStyles;i!=null&&typeof t==`string`&&Lr(i,t)>=0&&(n[r+1]=dd(n[r+1]))}function Eg(e,t,n,r){let o=e[n+1],i=t===null,a=r?dr(o):no(o),s=!1;for(;a!==0&&(s===!1||i);){let c=e[a],l=e[a+1];oN(c,t)&&(s=!0,e[a+1]=r?dd(l):ud(l)),a=r?dr(l):no(l)}s&&(e[n+1]=r?ud(o):dd(o))}function oN(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t==`string`?Lr(e,t)>=0:!1}var me$2={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Bv(e){return e.substring(me$2.key,me$2.keyEnd)}function iN(e){return e.substring(me$2.value,me$2.valueEnd)}function aN(e){return $v(e),Vv(e,ro(e,0,me$2.textEnd))}function Vv(e,t){let n=me$2.textEnd;return n===t?-1:(t=me$2.keyEnd=cN(e,me$2.key=t,n),ro(e,t,n))}function sN(e){return $v(e),Hv(e,ro(e,0,me$2.textEnd))}function Hv(e,t){let n=me$2.textEnd,r=me$2.key=ro(e,t,n);return n===r?-1:(r=me$2.keyEnd=lN(e,r,n),r=_g(e,r,n,58),r=me$2.value=ro(e,r,n),r=me$2.valueEnd=uN(e,r,n),_g(e,r,n,59))}function $v(e){me$2.key=0,me$2.keyEnd=0,me$2.value=0,me$2.valueEnd=0,me$2.textEnd=e.length}function ro(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function cN(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}function lN(e,t,n){let r;for(;t<n&&((r=e.charCodeAt(t))===45||r===95||(r&-33)>=65&&(r&-33)<=90||r>=48&&r<=57);)t++;return t}function _g(e,t,n,r){return t=ro(e,t,n),t<n&&t++,t}function uN(e,t,n){let r=-1,o=-1,i=-1,a=t,s=a;for(;a<n;){let c=e.charCodeAt(a++);if(c===59)return s;c===34||c===39?s=a=Ig(e,c,a,n):t===a-4&&i===85&&o===82&&r===76&&c===40?s=a=Ig(e,41,a,n):c>32&&(s=a),i=o,o=r,r=c&-33}return s}function Ig(e,t,n,r){let o=-1,i=n;for(;i<r;){let a=e.charCodeAt(i++);if(a==t&&o!==92)return i;a==92&&o===92?o=0:o=a}throw new Error}function Js(e,t,n){return Uv(e,t,n,!1),Js}function In(e,t){return Uv(e,t,null,!0),In}function dN(e){zv(qv,fN,e,!1)}function fN(e,t){for(let n=sN(t);n>=0;n=Hv(t,n))qv(e,Bv(t),iN(t))}function Di(e){zv(yN,mN,e,!0)}function mN(e,t){for(let n=aN(t);n>=0;n=Vv(t,n))zo(e,Bv(t),!0)}function Uv(e,t,n,r){let o=S$1(),i=G$1(),a=cu(2);if(i.firstUpdatePass&&Gv(i,e,a,r),t!==$e$2&&Qe$2(o,a,t)){let s=i.data[_t$4()];Yv(i,s,o,o[Y$1],e,o[a+1]=EN(t,n),r,a)}}function zv(e,t,n,r){let o=G$1(),i=cu(2);o.firstUpdatePass&&Gv(o,null,i,r);let a=S$1();if(n!==$e$2&&Qe$2(a,i,n)){let s=o.data[_t$4()];if(Zv(s,r)&&!Wv(o,i)){let c=r?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(n=Ha(c,n||``)),ld(o,s,a,n,r)}else DN(o,s,a,a[Y$1],a[i+1],a[i+1]=vN(e,t,n),r,i)}}function Wv(e,t){return t>=e.expandoStartIndex}function Gv(e,t,n,r){let o=e.data;if(o[n+1]===null){let i=o[_t$4()],a=Wv(e,n);Zv(i,r)&&t===null&&!a&&(t=!1),t=pN(o,i,t,r),nN(o,i,t,n,a,r)}}function pN(e,t,n,r){let o=dh(e),i=r?t.residualClasses:t.residualStyles;if(o===null)(r?t.classBindings:t.styleBindings)===0&&(n=Cu(null,e,t,n,r),n=li(n,t.attrs,r),i=null);else{let a=t.directiveStylingLast;if(a===-1||e[a]!==o)if(n=Cu(o,e,t,n,r),i===null){let c=hN(e,t,r);c!==void 0&&Array.isArray(c)&&(c=Cu(null,e,t,c[1],r),c=li(c,t.attrs,r),gN(e,t,r,c))}else i=bN(e,t,r)}return i!==void 0&&(r?t.residualClasses=i:t.residualStyles=i),n}function hN(e,t,n){let r=n?t.classBindings:t.styleBindings;if(no(r)!==0)return e[dr(r)]}function gN(e,t,n,r){let o=n?t.classBindings:t.styleBindings;e[dr(o)]=r}function bN(e,t,n){let r,o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++){let a=e[i].hostAttrs;r=li(r,a,n)}return li(r,t.attrs,n)}function Cu(e,t,n,r,o){let i=null,a=n.directiveEnd,s=n.directiveStylingLast;for(s===-1?s=n.directiveStart:s++;s<a&&(i=t[s],r=li(r,i.hostAttrs,o),i!==e);)s++;return e!==null&&(n.directiveStylingLast=s),r}function li(e,t,n){let r=n?1:2,o=-1;if(t!==null)for(let i=0;i<t.length;i++){let a=t[i];typeof a==`number`?o=a:o===r&&(Array.isArray(e)||(e=e===void 0?[]:[``,e]),zo(e,a,n?!0:t[++i]))}return e===void 0?null:e}function vN(e,t,n){if(n==null||n===``)return Ee$1;let r=[],o=Ie(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if(o instanceof Set)for(let i of o)e(r,i,!0);else if(typeof o==`object`)for(let i in o)Object.hasOwn(o,i)&&e(r,i,o[i]);else typeof o==`string`&&t(r,o);return r}function qv(e,t,n){zo(e,t,Ie(n))}function yN(e,t,n){let r=String(t);r!==``&&!r.includes(` `)&&zo(e,r,n)}function DN(e,t,n,r,o,i,a,s){o===$e$2&&(o=Ee$1);let c=0,l=0,u=0<o.length?o[0]:null,d=0<i.length?i[0]:null;for(;u!==null||d!==null;){let m=c<o.length?o[c+1]:void 0,f=l<i.length?i[l+1]:void 0,h=null,g;u===d?(c+=2,l+=2,m!==f&&(h=d,g=f)):d===null||u!==null&&u<d?(c+=2,h=u):(l+=2,h=d,g=f),h!==null&&Yv(e,t,n,r,h,g,a,s),u=c<o.length?o[c]:null,d=l<i.length?i[l]:null}}function Yv(e,t,n,r,o,i,a,s){if(!(t.type&3))return;let c=e.data,l=c[s+1];if(!js(tN(l)?wg(c,t,n,o,no(l),a):void 0)){js(i)||Jx(l)&&(i=wg(c,null,n,o,s,a));oS(r,a,Yl(_t$4(),n),o,i)}}function wg(e,t,n,r,o,i){let a=t===null,s;for(;o>0;){let c=e[o],l=Array.isArray(c),u=l?c[1]:c,d=u===null,m=n[o+1];m===$e$2&&(m=d?Ee$1:void 0);let f=d?qa$1(m,r):u===r?m:void 0;if(l&&!js(f)&&(f=qa$1(c,r)),js(f)&&(s=f,a))return s;let h=e[o+1];o=a?dr(h):no(h)}if(t!==null){let c=i?t.residualClasses:t.residualStyles;c!=null&&(s=qa$1(c,r))}return s}function js(e){return e!==void 0}function EN(e,t){return e==null||e===``||(typeof t==`string`?e=Ie(e)+t:typeof e==`object`&&(e=Va(Ie(e)))),e}function Zv(e,t){return(e.flags&(t?8:16))!==0}function _N(e,t=``){let n=S$1(),r=G$1(),o=e+W$1,i=r.firstCreatePass?lo(r,o,1,t,null):r.data[o],a=IN(r,n,i,t);n[o]=a,cs()&&Pd(r,n,a,i),Wr(i,!1)}var IN=(e,t,n,r)=>(Xo(!0),y0(t[Y$1],r));function wN(e,t,n,r=``){return Qe$2(e,mn$3(),n)?t+$o(n)+r:$e$2}function Kv(e){return pf(``,e),Kv}function pf(e,t,n){let r=S$1(),o=wN(r,e,t,n);return o!==$e$2&&SN(r,_t$4(),o),pf}function SN(e,t,n){let r=Yl(t,e);D0(e[Y$1],r,n)}function Sg(e,t,n){let r=G$1();r.firstCreatePass&&Qv(t,r.data,r.blueprint,Et$2(e),n)}function Qv(e,t,n,r,o){if(e=fe$2(e),Array.isArray(e))for(let i=0;i<e.length;i++)Qv(e[i],t,n,r,o);else{let i=G$1(),a=S$1(),s=se$3(),c=zn$1(e)?e:fe$2(e.provide),l=zl(e),u=s.providerIndexes&1048575,d=s.directiveStart,m=s.providerIndexes>>20;if(zn$1(e)||!e.multi){let f=new ar(l,o,ct$2,null),h=Nu(c,t,o?u:u+m,d);h===-1?(Au(Ns(s,a),i,c),xu(i,e,t.length),t.push(c),s.directiveStart++,s.directiveEnd++,o&&(s.providerIndexes+=1048576),n.push(f),a.push(f)):(n[h]=f,a[h]=f)}else{let f=Nu(c,t,u+m,d),h=Nu(c,t,u,u+m),g=f>=0&&n[f],v=h>=0&&n[h];if(o&&!v||!o&&!g){Au(Ns(s,a),i,c);let y=NN(o?xN:CN,n.length,o,r,l,e);!o&&v&&(n[h].providerFactory=y),xu(i,e,t.length,0),t.push(c),s.directiveStart++,s.directiveEnd++,o&&(s.providerIndexes+=1048576),n.push(y),a.push(y)}else{let y=Xv(n[o?h:f],l,!o&&r);xu(i,e,f>-1?f:h,y)}!o&&r&&v&&n[h].componentProviders++}}}function xu(e,t,n,r){let o=zn$1(t),i=Gp(t);if(o||i){let c=(i?fe$2(t.useClass):t).prototype.ngOnDestroy;if(c){let l=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){let u=l.indexOf(n);u===-1?l.push(n,[r,c]):l[u+1].push(r,c)}else l.push(n,c)}}}function Xv(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function Nu(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function CN(e,t,n,r,o){return fd(this.multi,[])}function xN(e,t,n,r,o){let i=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=ri(r,r[E$1],this.providerFactory.index,o);a=c.slice(0,s),fd(i,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],fd(i,a);return a}function fd(e,t){for(let n=0;n<e.length;n++){let r=e[n];t.push(r())}return t}function NN(e,t,n,r,o,i){let a=new ar(e,n,ct$2,null);return a.multi=[],a.index=t,a.componentProviders=0,Xv(a,o,r&&!n),a}function Jv(e,t){return n=>{n.providersResolver=(r,o)=>Sg(r,o?o(e):e,!1),t&&(n.viewProvidersResolver=(r,o)=>Sg(r,o?o(t):t,!0))}}function TN(e,t){let n=Ko()+e,r=S$1();return r[n]===$e$2?Kd(r,n,t()):zS(r,n)}function MN(e,t,n){return ty(S$1(),Ko(),e,t,n)}function ey(e,t){let n=e[t];return n===$e$2?void 0:n}function ty(e,t,n,r,o,i){let a=t+n;return Qe$2(e,a,o)?Kd(e,a+1,i?r.call(i,o):r(o)):ey(e,a+1)}function AN(e,t,n,r,o,i,a){let s=t+n;return WS(e,s,o,i)?Kd(e,s+2,a?r.call(a,o,i):r(o,i)):ey(e,s+2)}function kN(e,t){let n=G$1(),r,o=e+W$1;n.firstCreatePass?(r=ON(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks??=[]).push(o,r.onDestroy)):r=n.data[o];let i=r.factory||(r.factory=an(r.type,!0)),s=Se(ct$2);try{let c=xs(!1),l=i();return xs(c),Zl(n,S$1(),o,l),l}finally{Se(s)}}function ON(e,t){if(t)for(let n=t.length-1;n>=0;n--){let r=t[n];if(e===r.name)return r}}function RN(e,t,n){let r=e+W$1,o=S$1(),i=Ja(o,r);return ny(o,r)?ty(o,Ko(),t,i.transform,n,i):i.transform(n)}function FN(e,t,n,r){let o=e+W$1,i=S$1(),a=Ja(i,o);return ny(i,o)?AN(i,Ko(),t,a.transform,n,r,a):a.transform(n,r)}function ny(e,t){return e[E$1].data[t].pure}function LN(e,t){return Ys(e,t)}var ry=(()=>{class e{applicationErrorHandler=p$1(jt$1);appRef=p$1(yn$2);taskService=p$1(tr);ngZone=p$1(V);zonelessEnabled=p$1(Jo);tracing=p$1(St$1,{optional:!0});zoneIsDefined=typeof Zone<`u`&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new te$1;innerNgZone=this.zoneIsDefined?this.ngZone._inner??null:null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(p$1(hu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:case 2:this.appRef.dirtyFlags|=2;break;case 3:case 4:case 5:case 1:this.appRef.dirtyFlags|=4;break;case 6:this.appRef.dirtyFlags|=2;break;case 12:this.appRef.dirtyFlags|=16;break;case 13:this.appRef.dirtyFlags|=2;break;case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?_h:fu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.innerNgZone!==null&&this.isInNgZone())}isInNgZone(){let n=Zone.current;for(;n;){if(n===this.innerNgZone)return!0;n=n.parent}return!1}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();function oy(){return[{provide:vt$3,useExisting:ry},{provide:V,useClass:Bo},{provide:Jo,useValue:!0}]}var Ei=class{destroyed=!1;listeners=null;errorHandler=p$1(Ge$2,{optional:!0});isEmitting=!1;hasNullListeners=!1;destroyRef=p$1(Be$1);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(t){if(this.destroyed)throw new _(953,!1);return(this.listeners??=[]).push(t),{unsubscribe:()=>{let n=this.listeners?this.listeners.indexOf(t):-1;n>-1&&(this.isEmitting?(this.hasNullListeners=!0,this.listeners[n]=null):this.listeners.splice(n,1))}}}emit(t){if(this.destroyed){console.warn(sn$1(953,!1));return}if(this.listeners===null)return;this.isEmitting=!0;let n=I$3(null);try{for(let r of this.listeners)try{r!==null&&r(t)}catch(o){this.errorHandler?.handleError(o)}}finally{this.hasNullListeners&&(this.hasNullListeners=!1,this.listeners&&PN(this.listeners)),I$3(n),this.isEmitting=!1}}};function PN(e){let t=e.length-1;for(;t>-1;)e[t]===null&&e.splice(t,1),t--}function ec(e,t){return Ro(e,t?.equal)}function tc(e){return Tp(e)}function hy(e,t){let n=Object.create(md);n.value=e,n.transformFn=t?.transform;function r(){if(kt$1(n),n.value===oo)throw new _(-950,null);return n.value}return r[ce$2]=n,r}var iy=class{attributeName;constructor(t){this.attributeName=t}__NG_ELEMENT_ID__=()=>gd(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function a5(e){return new Ei}function ay(e,t){return hy(e,t)}function QN(e){return hy(oo,e)}var ho=(ay.required=QN,ay);function gy(e,t){let n=Object.create(md),r=new Ei;n.value=e;function o(){return kt$1(n),sy(n.value),n.value}return o[ce$2]=n,o.asReadonly=ls.bind(o),o.set=i=>{n.equal(n.value,i)||(rn(n,i),r.emit(i))},o.update=i=>{sy(n.value),o.set(i(n.value))},o.subscribe=r.subscribe.bind(r),o.destroyRef=r.destroyRef,o}function sy(e){if(e===oo)throw new _(952,!1)}function cy(e,t){return gy(e,t)}function XN(e){return gy(oo,e)}var Te$1=(cy.required=XN,cy);function ly(e,t){return nf(t)}function JN(e,t){return rf(t)}var s5=(ly.required=JN,ly);function uy(e,t){return nf(t)}function eT(e,t){return rf(t)}var c5=(uy.required=eT,uy);var gf=class{supports(t){return Zd(t)}create(t){return new bf(t)}};var nT=(e,t)=>t;var bf=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(t){this._trackByFn=t||nT}forEachItem(t){let n;for(n=this._itHead;n!==null;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){let a=!r||n&&n.currentIndex<dy(r,o,i)?n:r,s=dy(a,o,i),c=a.currentIndex;if(a===r)o--,r=r._nextRemoved;else if(n=n._next,a.previousIndex==null)o++;else{i||(i=[]);let l=s-o,u=c-o;if(l!=u){for(let m=0;m<l;m++){let f=m<i.length?i[m]:i[m]=0,h=f+m;u<=h&&h<l&&(i[m]=f+1)}let d=a.previousIndex;i[d]=u-l}}s!==c&&t(a,s,c)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;n!==null;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;n!==null;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;n!==null;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;n!==null;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;n!==null;n=n._nextIdentityChange)t(n)}diff(t){if(t??=[],!Zd(t))throw new _(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._itHead,r=!1,o,i,a;if(Array.isArray(t)){this.length=t.length;for(let s=0;s<this.length;s++)i=t[s],a=this._trackByFn(s,i),n===null||!Object.is(n.trackById,a)?(n=this._mismatch(n,i,a,s),r=!0):(r&&(n=this._verifyReinsertion(n,i,a,s)),Object.is(n.item,i)||this._addIdentityChange(n,i)),n=n._next}else o=0,Zb(t,s=>{a=this._trackByFn(o,s),n===null||!Object.is(n.trackById,a)?(n=this._mismatch(n,s,a,o),r=!0):(r&&(n=this._verifyReinsertion(n,s,a,o)),Object.is(n.item,s)||this._addIdentityChange(n,s)),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;t!==null;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;t!==null;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;t!==null;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return t===null?i=this._itTail:(i=t._prev,this._remove(t)),t=this._unlinkedRecords===null?null:this._unlinkedRecords.get(r,null),t!==null?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):(t=this._linkedRecords===null?null:this._linkedRecords.get(r,o),t!==null?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new vf(n,r),i,o)),t}_verifyReinsertion(t,n,r,o){let i=this._unlinkedRecords===null?null:this._unlinkedRecords.get(r,null);return i!==null?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;t!==null;){let n=t._next;this._addToRemovals(this._unlink(t)),t=n}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(t);let o=t._prevRemoved,i=t._nextRemoved;return o===null?this._removalsHead=i:o._nextRemoved=i,i===null?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail===null?this._additionsTail=this._additionsHead=t:this._additionsTail=this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){let o=n===null?this._itHead:n._next;return t._next=o,t._prev=n,o===null?this._itTail=t:o._prev=t,n===null?this._itHead=t:n._next=t,this._linkedRecords===null&&(this._linkedRecords=new rc),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){this._linkedRecords!==null&&this._linkedRecords.remove(t);let n=t._prev,r=t._next;return n===null?this._itHead=r:n._next=r,r===null?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail===null?this._movesTail=this._movesHead=t:this._movesTail=this._movesTail._nextMoved=t),t}_addToRemovals(t){return this._unlinkedRecords===null&&(this._unlinkedRecords=new rc),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=t:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=t,t}};var vf=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(t,n){this.item=t,this.trackById=n}};var yf=class{_head=null;_tail=null;add(t){this._head===null?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;r!==null;r=r._nextDup)if((n===null||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){let n=t._prevDup,r=t._nextDup;return n===null?this._head=r:n._nextDup=r,r===null?this._tail=n:r._prevDup=n,this._head===null}};var rc=class{map=/* @__PURE__ */ new Map;put(t){let n=t.trackById,r=this.map.get(n);r||(r=new yf,this.map.set(n,r)),r.add(t)}get(t,n){let r=t,o=this.map.get(r);return o?o.get(t,n):null}remove(t){let n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function dy(e,t,n){let r=e.previousIndex;if(r===null)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o}function fy(){return new by([new gf])}var by=(()=>{class e{factories;static ɵprov=L$1({token:e,providedIn:`root`,factory:fy});constructor(n){this.factories=n}static create(n,r){if(r!=null){let o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:()=>{let r=p$1(e,{optional:!0,skipSelf:!0});return e.create(n,r||fy())}}}find(n){let r=this.factories.find(o=>o.supports(n));if(r!=null)return r;throw new _(901,!1)}}return e})();var oc=(()=>{class e{static __NG_ELEMENT_ID__=rT}return e})();function rT(e){return oT(se$3(),S$1(),(e&16)===16)}function oT(e,t,n){if(Dt$1(e)&&!n){let r=Ke$2(e.index,t);return new bn$1(r,r)}else if(e.type&175){let r=t[be];return new bn$1(r,t)}return null}var Df=new D(``);var iT=new D(``);function _i(e){return!e.moduleRef}function aT(e){let t=_i(e)?e.r3Injector:e.moduleRef.injector,n=t.get(V);return n.run(()=>{_i(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=t.get(jt$1),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),_i(e)){let i=()=>t.destroy(),a=e.platformInjector.get(Df);a.add(i),t.onDestroy(()=>{o.unsubscribe(),a.delete(i)})}else{let i=()=>e.moduleRef.destroy(),a=e.platformInjector.get(Df);a.add(i),e.moduleRef.onDestroy(()=>{ni$1(e.allPlatformModules,e.moduleRef),o.unsubscribe(),a.delete(i)})}return cT(r,n,()=>{let i=t.get(tr),a=i.add(),s=t.get(af);return s.runInitializers(),s.donePromise.then(()=>{if(!t.get(iT,!0))return _i(e)?t.get(yn$2):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(_i(e)){let l=t.get(yn$2);return e.rootComponent!==void 0&&l.bootstrap(e.rootComponent),l}else return sT?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{i.remove(a)})})})}var sT;function cT(e,t,n){try{let r=n();return bi(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e(r)),r}}var nc=null;function lT(e=[],t){return Z$2.create({name:t,providers:[{provide:Wo,useValue:`platform`},{provide:Df,useValue:/* @__PURE__ */ new Set([()=>nc=null])},...e]})}function uT(e=[]){if(nc)return nc;let t=lT(e);return nc=t,Cv(),dT(t),t}function dT(e){let t=e.get(us,null);Ka(e,()=>{t?.forEach(n=>n())})}function vy(e){let{rootComponent:t,appProviders:n,platformProviders:r,platformRef:o}=e;H$2(P.BootstrapApplicationStart);try{let i=o?.injector??uT(r);return aT({r3Injector:new ci({providers:[oy(),xh,...n||[]],parent:i,debugName:``,runEnvironmentInitializers:!1}).injector,platformInjector:i,rootComponent:t})}catch(i){return Promise.reject(i)}finally{H$2(P.BootstrapApplicationEnd)}}function Le$1(e){return typeof e==`boolean`?e:e!=null&&e!==`false`}function Ii(e,t=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):t}var hf=Symbol(`NOT_SET`);var yy=/* @__PURE__ */ new Set;var fT=ae$3(R$1({},Ar),{kind:`afterRenderEffectPhase`,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:hf,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(e){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==hf&&!Tr(this))return this.signal;try{for(let o of this.cleanup??yy)o()}finally{this.cleanup?.clear()}let t=[];e!==void 0&&t.push(e),t.push(this.registerCleanupFn);let n=tn(this),r;try{r=this.userFn.apply(null,t)}finally{Hn$1(this,n)}return(this.value===hf||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}});var Ef=class extends oi{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(t,n,r,o,i,a=null,s){super(t,[void 0,void 0,void 0,void 0],r,!1,i.get(Be$1),a),this.scheduler=o;for(let c of Od){let l=n[c];if(l===void 0)continue;let u=Object.create(fT);u.sequence=this,u.phase=c,u.userFn=l,u.dirty=!0,u.signal=()=>(kt$1(u),u.value),u.signal[ce$2]=u,u.registerCleanupFn=d=>(u.cleanup??=/* @__PURE__ */ new Set).add(d),this.nodes[c]=u,this.hooks[c]=d=>u.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();super.destroy();for(let t of this.nodes)if(t)try{for(let n of t.cleanup??yy)n()}finally{nn(t)}}};function u5(e,t){let n=t?.injector??p$1(Z$2),r=n.get(vt$3),o=n.get(Us),i=n.get(St$1,null,{optional:!0});o.impl??=n.get(Rd);let a=e;typeof a==`function`&&(a={mixedReadWrite:e});let s=n.get(Gr,null,{optional:!0}),c=new Ef(o.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,r,n,i?.snapshot(null),void 0);return o.impl.register(c),c}function Dy(e,t){let n=Lt$3(e),r=t.elementInjector||jr(),i=new to(n).create(r,t.projectableNodes,t.hostElement,t.environmentInjector,t.directives,t.bindings);return t.onError&&(i.hostView._lView[Hr]=t.onError),i}var Ey=null;function Wt$1(){return Ey}function _f(e){Ey??=e}var wi=class{};var ic=(()=>{class e{historyGo(n){throw new Error(``)}static ɵfac=function(r){return new(r||e)};static ɵprov=L$1({token:e,factory:()=>p$1(_y),providedIn:`platform`})}return e})();var _y=(()=>{class e extends ic{_location;_history;_doc=p$1(j$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Wt$1().getBaseHref(this._doc)}onPopState(n){let r=Wt$1().getGlobalEventTarget(this._doc,`window`);return r.addEventListener(`popstate`,n,!1),()=>r.removeEventListener(`popstate`,n)}onHashChange(n){let r=Wt$1().getGlobalEventTarget(this._doc,`window`);return r.addEventListener(`hashchange`,n,!1),()=>r.removeEventListener(`hashchange`,n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static ɵfac=function(r){return new(r||e)};static ɵprov=L$1({token:e,factory:()=>new e,providedIn:`platform`})}return e})();function Sy(e,t){return e?t?e.endsWith(`/`)?t.startsWith(`/`)?e+t.slice(1):e+t:t.startsWith(`/`)?e+t:`${e}/${t}`:e:t}function Iy(e){let t=e.search(/#|\?|$/);return e[t-1]===`/`?e.slice(0,t-1)+e.slice(t):e}function wn$1(e){return e&&e[0]!==`?`?`?${e}`:e}var ac=(()=>{class e{historyGo(n){throw new Error(``)}static ɵfac=function(r){return new(r||e)};static ɵprov=L$1({token:e,factory:()=>p$1(pT),providedIn:`root`})}return e})();var mT=new D(``);var pT=(()=>{class e extends ac{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??p$1(j$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Sy(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+wn$1(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let a=this.prepareExternalUrl(o+wn$1(i));this._platformLocation.pushState(n,r,a)}replaceState(n,r,o,i){let a=this.prepareExternalUrl(o+wn$1(i));this._platformLocation.replaceState(n,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static ɵfac=function(r){return new(r||e)(F$1(ic),F$1(mT,8))};static ɵprov=L$1({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var Cy=(()=>{class e{_subject=new U$1;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=bT(Iy(wy(r))),this._locationStrategy.onPopState(o=>{let i={url:this.path(!0),pop:!0,state:o.state,type:o.type};o.hasUAVisualTransition&&(i.hasUAVisualTransition=!0),this._subject.next(i)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=``){return this.path()==this.normalize(n+wn$1(r))}normalize(n){return e.stripTrailingSlash(gT(this._basePath,wy(n)))}prepareExternalUrl(n){return n&&n[0]!==`/`&&(n=`/`+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r=``,o=null){this._locationStrategy.pushState(o,``,n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+wn$1(r)),o)}replaceState(n,r=``,o=null){this._locationStrategy.replaceState(o,``,n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+wn$1(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n=``,r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=wn$1;static joinWithSlash=Sy;static stripTrailingSlash=Iy;static ɵfac=function(r){return new(r||e)(F$1(ac))};static ɵprov=L$1({token:e,factory:()=>hT(),providedIn:`root`})}return e})();function hT(){return new Cy(F$1(ac))}function gT(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===``||[`/`,`;`,`?`,`#`].includes(n[0])?n:t}function wy(e){return e.replace(/\/index\.html$/,``)}function bT(e){if((/* @__PURE__ */ new RegExp(`^(https?:)?//`)).test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var we$1=(function(e){return e[e.Format=0]=`Format`,e[e.Standalone=1]=`Standalone`,e})(we$1||{});var q$1=(function(e){return e[e.Narrow=0]=`Narrow`,e[e.Abbreviated=1]=`Abbreviated`,e[e.Wide=2]=`Wide`,e[e.Short=3]=`Short`,e})(q$1||{});var Pe$1=(function(e){return e[e.Short=0]=`Short`,e[e.Medium=1]=`Medium`,e[e.Long=2]=`Long`,e[e.Full=3]=`Full`,e})(Pe$1||{});var qt$1={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ny(e){return Ue$2(e)[ue$2.LocaleId]}function Ty(e,t,n){let r=Ue$2(e);return Xe$3(Xe$3([r[ue$2.DayPeriodsFormat],r[ue$2.DayPeriodsStandalone]],t),n)}function My(e,t,n){let r=Ue$2(e);return Xe$3(Xe$3([r[ue$2.DaysFormat],r[ue$2.DaysStandalone]],t),n)}function Ay(e,t,n){let r=Ue$2(e);return Xe$3(Xe$3([r[ue$2.MonthsFormat],r[ue$2.MonthsStandalone]],t),n)}function ky(e,t){let r=Ue$2(e)[ue$2.Eras];return Xe$3(r,t)}function Si(e,t){return Xe$3(Ue$2(e)[ue$2.DateFormat],t)}function Ci(e,t){return Xe$3(Ue$2(e)[ue$2.TimeFormat],t)}function xi(e,t){let r=Ue$2(e)[ue$2.DateTimeFormat];return Xe$3(r,t)}function Ni(e,t){let n=Ue$2(e),r=n[ue$2.NumberSymbols][t];if(typeof r>`u`){if(t===qt$1.CurrencyDecimal)return n[ue$2.NumberSymbols][qt$1.Decimal];if(t===qt$1.CurrencyGroup)return n[ue$2.NumberSymbols][qt$1.Group]}return r}function Oy(e){if(!e[ue$2.ExtraData])throw new _(2303,!1)}function Ry(e){let t=Ue$2(e);return Oy(t),(t[ue$2.ExtraData][2]||[]).map(r=>typeof r==`string`?If(r):[If(r[0]),If(r[1])])}function Fy(e,t,n){let r=Ue$2(e);Oy(r);return Xe$3(Xe$3([r[ue$2.ExtraData][0],r[ue$2.ExtraData][1]],t)||[],n)||[]}function Xe$3(e,t){for(let n=t;n>-1;n--)if(typeof e[n]<`u`)return e[n];throw new _(2304,!1)}function If(e){let[t,n]=e.split(`:`);return{hours:+t,minutes:+n}}var vT=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;var sc=Object.create(null);var yT=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var DT=256;function Ly(e,t,n,r){let o=MT(e);ET(t),t=Gt$1(n,t)||t;let a=[],s;for(;t;)if(s=yT.exec(t),s){a=a.concat(s.slice(1));let u=a.pop();if(!u)break;t=u}else{a.push(t);break}let c=o.getTimezoneOffset();r&&(c=jy(r,c),o=TT(o,r));let l=``;return a.forEach(u=>{let d=xT(u);l+=d?d(o,n,c):u===`''`?`'`:u.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),l}function ET(e){if(e.length>DT)throw new _(2300,!1)}function fc(e,t,n){let r=/* @__PURE__ */ new Date(0);return r.setFullYear(e,t,n),r.setHours(0,0,0),r}function Gt$1(e,t){let n=Ny(e);if(sc[n]??=Object.create(null),sc[n][t])return sc[n][t];let r=``;switch(t){case`shortDate`:r=Si(e,Pe$1.Short);break;case`mediumDate`:r=Si(e,Pe$1.Medium);break;case`longDate`:r=Si(e,Pe$1.Long);break;case`fullDate`:r=Si(e,Pe$1.Full);break;case`shortTime`:r=Ci(e,Pe$1.Short);break;case`mediumTime`:r=Ci(e,Pe$1.Medium);break;case`longTime`:r=Ci(e,Pe$1.Long);break;case`fullTime`:r=Ci(e,Pe$1.Full);break;case`short`:let o=Gt$1(e,`shortTime`),i=Gt$1(e,`shortDate`);r=cc(xi(e,Pe$1.Short),[o,i]);break;case`medium`:let a=Gt$1(e,`mediumTime`),s=Gt$1(e,`mediumDate`);r=cc(xi(e,Pe$1.Medium),[a,s]);break;case`long`:let c=Gt$1(e,`longTime`),l=Gt$1(e,`longDate`);r=cc(xi(e,Pe$1.Long),[c,l]);break;case`full`:let u=Gt$1(e,`fullTime`),d=Gt$1(e,`fullDate`);r=cc(xi(e,Pe$1.Full),[u,d])}return r&&(sc[n][t]=r),r}function cc(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(n,r){return Object.hasOwn(t,r)?t[r]:n})),e}function ut$3(e,t,n=`-`,r,o){let i=``;(e<0||o&&e<=0)&&(o?e=-e+1:(e=-e,i=n));let a=String(e);for(;a.length<t;)a=`0`+a;return r&&(a=a.slice(a.length-t)),i+a}function _T(e,t){return ut$3(e,3).substring(0,t)}function de$2(e,t,n=0,r=!1,o=!1){return function(i,a){let s=IT(e,i);if((n>0||s>-n)&&(s+=n),e===3)s===0&&n===-12&&(s=12);else if(e===6)return _T(s,t);let c=Ni(a,qt$1.MinusSign);return ut$3(s,t,c,r,o)}}function IT(e,t){switch(e){case 0:return t.getFullYear();case 1:return t.getMonth();case 2:return t.getDate();case 3:return t.getHours();case 4:return t.getMinutes();case 5:return t.getSeconds();case 6:return t.getMilliseconds();case 7:return t.getDay();default:throw new _(2301,!1)}}function K(e,t,n=we$1.Format,r=!1){return function(o,i){return wT(o,i,e,t,n,r)}}function wT(e,t,n,r,o,i){switch(n){case 2:return Ay(t,o,r)[e.getMonth()];case 1:return My(t,o,r)[e.getDay()];case 0:let a=e.getHours(),s=e.getMinutes();if(i){let l=Ry(t),u=Fy(t,o,r),d=l.findIndex(m=>{if(Array.isArray(m)){let[f,h]=m,g=a>=f.hours&&s>=f.minutes,v=a<h.hours||a===h.hours&&s<h.minutes;if(f.hours<h.hours){if(g&&v)return!0}else if(g||v)return!0}else if(m.hours===a&&m.minutes===s)return!0;return!1});if(d!==-1)return u[d]}return Ty(t,o,r)[a<12?0:1];case 3:return ky(t,r)[e.getFullYear()<=0?0:1];default:throw new _(2302,!1)}}function lc(e){return function(t,n,r){let o=-1*r,i=Ni(n,qt$1.MinusSign),a=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case 0:return(o>=0?`+`:``)+ut$3(a,2,i)+ut$3(Math.abs(o%60),2,i);case 1:return`GMT`+(o>=0?`+`:``)+ut$3(a,1,i);case 2:return`GMT`+(o>=0?`+`:``)+ut$3(a,2,i)+`:`+ut$3(Math.abs(o%60),2,i);case 3:return r===0?`Z`:(o>=0?`+`:``)+ut$3(a,2,i)+`:`+ut$3(Math.abs(o%60),2,i);default:throw new _(2310,!1)}}}var ST=0;var dc=4;function CT(e){let t=fc(e,ST,1).getDay();return fc(e,0,1+(t<=dc?dc:dc+7)-t)}function Py(e){let t=e.getDay(),n=t===0?-3:dc-t;return fc(e.getFullYear(),e.getMonth(),e.getDate()+n)}function wf(e,t=!1){return function(n,r){let o;if(t){let i=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,a=n.getDate();o=1+Math.floor((a+i)/7)}else{let i=Py(n),a=CT(i.getFullYear()),s=i.getTime()-a.getTime();o=1+Math.round(s/6048e5)}return ut$3(o,e,Ni(r,qt$1.MinusSign))}}function uc(e,t=!1){return function(n,r){return ut$3(Py(n).getFullYear(),e,Ni(r,qt$1.MinusSign),t)}}var Sf=Object.create(null);function xT(e){if(Sf[e])return Sf[e];let t;switch(e){case`G`:case`GG`:case`GGG`:t=K(3,q$1.Abbreviated);break;case`GGGG`:t=K(3,q$1.Wide);break;case`GGGGG`:t=K(3,q$1.Narrow);break;case`y`:t=de$2(0,1,0,!1,!0);break;case`yy`:t=de$2(0,2,0,!0,!0);break;case`yyy`:t=de$2(0,3,0,!1,!0);break;case`yyyy`:t=de$2(0,4,0,!1,!0);break;case`Y`:t=uc(1);break;case`YY`:t=uc(2,!0);break;case`YYY`:t=uc(3);break;case`YYYY`:t=uc(4);break;case`M`:case`L`:t=de$2(1,1,1);break;case`MM`:case`LL`:t=de$2(1,2,1);break;case`MMM`:t=K(2,q$1.Abbreviated);break;case`MMMM`:t=K(2,q$1.Wide);break;case`MMMMM`:t=K(2,q$1.Narrow);break;case`LLL`:t=K(2,q$1.Abbreviated,we$1.Standalone);break;case`LLLL`:t=K(2,q$1.Wide,we$1.Standalone);break;case`LLLLL`:t=K(2,q$1.Narrow,we$1.Standalone);break;case`w`:t=wf(1);break;case`ww`:t=wf(2);break;case`W`:t=wf(1,!0);break;case`d`:t=de$2(2,1);break;case`dd`:t=de$2(2,2);break;case`c`:case`cc`:t=de$2(7,1);break;case`ccc`:t=K(1,q$1.Abbreviated,we$1.Standalone);break;case`cccc`:t=K(1,q$1.Wide,we$1.Standalone);break;case`ccccc`:t=K(1,q$1.Narrow,we$1.Standalone);break;case`cccccc`:t=K(1,q$1.Short,we$1.Standalone);break;case`E`:case`EE`:case`EEE`:t=K(1,q$1.Abbreviated);break;case`EEEE`:t=K(1,q$1.Wide);break;case`EEEEE`:t=K(1,q$1.Narrow);break;case`EEEEEE`:t=K(1,q$1.Short);break;case`a`:case`aa`:case`aaa`:t=K(0,q$1.Abbreviated);break;case`aaaa`:t=K(0,q$1.Wide);break;case`aaaaa`:t=K(0,q$1.Narrow);break;case`b`:case`bb`:case`bbb`:t=K(0,q$1.Abbreviated,we$1.Standalone,!0);break;case`bbbb`:t=K(0,q$1.Wide,we$1.Standalone,!0);break;case`bbbbb`:t=K(0,q$1.Narrow,we$1.Standalone,!0);break;case`B`:case`BB`:case`BBB`:t=K(0,q$1.Abbreviated,we$1.Format,!0);break;case`BBBB`:t=K(0,q$1.Wide,we$1.Format,!0);break;case`BBBBB`:t=K(0,q$1.Narrow,we$1.Format,!0);break;case`h`:t=de$2(3,1,-12);break;case`hh`:t=de$2(3,2,-12);break;case`H`:t=de$2(3,1);break;case`HH`:t=de$2(3,2);break;case`m`:t=de$2(4,1);break;case`mm`:t=de$2(4,2);break;case`s`:t=de$2(5,1);break;case`ss`:t=de$2(5,2);break;case`S`:t=de$2(6,1);break;case`SS`:t=de$2(6,2);break;case`SSS`:t=de$2(6,3);break;case`Z`:case`ZZ`:case`ZZZ`:t=lc(0);break;case`ZZZZZ`:t=lc(3);break;case`O`:case`OO`:case`OOO`:case`z`:case`zz`:case`zzz`:t=lc(1);break;case`OOOO`:case`ZZZZ`:case`zzzz`:t=lc(2);break;default:return null}return Sf[e]=t,t}function jy(e,t){e=e.replace(/:/g,``);let n=Date.parse(`Jan 01, 1970 00:00:00 `+e)/6e4;return isNaN(n)?t:n}function NT(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function TT(e,t,n){let o=e.getTimezoneOffset();return NT(e,-1*(jy(t,o)-o))}function MT(e){if(xy(e))return e;if(typeof e==`number`&&!isNaN(e))return new Date(e);if(typeof e==`string`){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[o,i=1,a=1]=e.split(`-`).map(s=>+s);return fc(o,i-1,a)}let n=parseFloat(e);if(!isNaN(e-n))return new Date(n);let r;if(r=e.match(vT))return AT(r)}let t=new Date(e);if(!xy(t))throw new _(2311,!1);return t}function AT(e){let t=/* @__PURE__ */ new Date(0),n=0,r=0,o=e[8]?t.setUTCFullYear:t.setFullYear,i=e[8]?t.setUTCHours:t.setHours;e[9]&&(n=Number(e[9]+e[10]),r=Number(e[9]+e[11])),o.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let a=Number(e[4]||0)-n,s=Number(e[5]||0)-r,c=Number(e[6]||0),l=Math.floor(parseFloat(`0.`+(e[7]||0))*1e3);return i.call(t,a,s,c,l),t}function xy(e){return e instanceof Date&&!isNaN(e.valueOf())}var kT=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=p$1(Z$2);constructor(n){this._viewContainerRef=n}ngOnChanges(n){if(this._shouldRecreateView(n)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,r,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,o):!1,get:(n,r,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,o)}})}static ɵfac=function(r){return new(r||e)(ct$2(uo))};static ɵdir=ye$2({type:e,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[io]})}return e})();function Nf(e,t){return new _(2100,!1)}var Cf=class{createSubscription(t,n,r){return tc(()=>t.subscribe({next:n,error:r}))}dispose(t){tc(()=>t.unsubscribe())}};var xf=class{createSubscription(t,n,r){return t.then(o=>n?.(o),o=>r?.(o)),{unsubscribe:()=>{n=null,r=null}}}dispose(t){t.unsubscribe()}};var OT=new xf;var RT=new Cf;var FT=(()=>{class e{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=p$1(jt$1);constructor(n){this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){if(!this._obj){if(n)try{this.markForCheckOnValueUpdate=!1,this._subscribe(n)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,r=>this._updateLatestValue(n,r),r=>this.applicationErrorHandler(r))}_selectStrategy(n){if(bi(n))return OT;if(Zs(n))return RT;throw Nf(e,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,r){n===this._obj&&(this._latestValue=r,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(r){return new(r||e)(ct$2(oc,16))};static ɵpipe=fo({name:`async`,type:e,pure:!1})}return e})();var LT=(()=>{class e{transform(n){return n==null?null:(PT(e,n),n.toLowerCase())}static ɵfac=function(r){return new(r||e)};static ɵpipe=fo({name:`lowercase`,type:e,pure:!0})}return e})();function PT(e,t){if(typeof t!=`string`)throw Nf(e,t)}var jT=`mediumDate`;var By=new D(``);var Vy=new D(``);var BT=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(n,r,o){this.locale=n,this.defaultTimezone=r,this.defaultOptions=o}transform(n,r,o,i){if(n==null||n===``||n!==n)return null;try{let a=r??this.defaultOptions?.dateFormat??jT,s=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ly(n,a,i||this.locale,s)}catch(a){throw Nf(e,a.message)}}static ɵfac=function(r){return new(r||e)(ct$2(gi,16),ct$2(By,24),ct$2(Vy,24))};static ɵpipe=fo({name:`date`,type:e,pure:!0})}return e})();var VT=(()=>{class e{transform(n){return JSON.stringify(n,null,2)}static ɵfac=function(r){return new(r||e)};static ɵpipe=fo({name:`json`,type:e,pure:!1})}return e})();function Tf(e,t){t=encodeURIComponent(t);for(let n of e.split(`;`)){let r=n.indexOf(`=`),[o,i]=r==-1?[n,``]:[n.slice(0,r),n.slice(r+1)];if(o.trim()!==t)continue;let a=i;try{a=decodeURIComponent(i)}catch(s){}return a.length>1&&a[0]===`"`&&a[a.length-1]===`"`&&(a=a.slice(1,-1)),a}return null}var Mf=`browser`;function Uy(e){return e===Mf}function Hy(e){return e.replace(/\\/g,`\\\\`).replace(/[\n\r\f\0]/g,``).replace(/"/g,`\\"`)}var zy=e=>e.src;var UT=new D(``,{factory:()=>zy});var $y=/^((\s*\d+w\s*(,|$)){1,})$/;var zT=[1,2];var WT=640;var GT=1920;var qT=1080;var RW=(()=>{class e{imageLoader=p$1(UT);config=YT(p$1(fs));renderer=p$1(vn$1);imgElement=p$1(pe$2).nativeElement;injector=p$1(Z$2);destroyRef=p$1(Be$1);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,`loading`)})}ngOnInit(){st$2(`NgOptimizedImage`),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||=`100vw`:(this.setHostAttribute(`width`,this.width.toString()),this.setHostAttribute(`height`,this.height.toString())),this.setHostAttribute(`loading`,this.getLoadingBehavior()),this.setHostAttribute(`fetchpriority`,this.getFetchPriority()),this.setHostAttribute(`decoding`,this.getDecoding()),this.setHostAttribute(`ng-img`,`true`);this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()===`lazy`?this.setHostAttribute(`sizes`,`auto, `+this.sizes):this.setHostAttribute(`sizes`,this.sizes):this.ngSrcset&&$y.test(this.ngSrcset)&&this.getLoadingBehavior()===`lazy`&&this.setHostAttribute(`sizes`,`auto, 100vw`)}ngOnChanges(n){if(n.ngSrc&&!n.ngSrc.isFirstChange()){this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(n){let r=n;this.loaderParams&&(r.loaderParams=this.loaderParams);let o=this.getAspectRatio();return o!==null&&r.width&&(r.height=Math.round(r.width/o)),this.imageLoader(r)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?`eager`:`lazy`}getFetchPriority(){return this.priority?`high`:`auto`}getDecoding(){return this.priority?`sync`:this.decoding??`auto`}getRewrittenSrc(){if(!this._renderedSrc){let n={src:this.ngSrc};this._renderedSrc=this.callImageLoader(n)}return this._renderedSrc}getRewrittenSrcset(){let n=$y.test(this.ngSrcset);return this.ngSrcset.split(`,`).filter(o=>o!==``).map(o=>{o=o.trim();let i=n?parseFloat(o):parseFloat(o)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:i})} ${o}`}).join(`, `)}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:n}=this.config,r=n;return this.sizes?.trim()===`100vw`&&(r=n.filter(i=>i>=WT)),r.map(i=>`${this.callImageLoader({src:this.ngSrc,width:i})} ${i}w`).join(`, `)}updateSrcAndSrcset(n=!1){n&&(this._renderedSrc=null);let r=this.getRewrittenSrc();this.setHostAttribute(`src`,r);let o;return this.ngSrcset?o=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(o=this.getAutomaticSrcset()),o?this.setHostAttribute(`srcset`,o):this.disableOptimizedSrcset&&this.srcset&&this.setHostAttribute(`srcset`,this.srcset),o}getFixedSrcset(){return zT.map(r=>`${this.callImageLoader({src:this.ngSrc,width:this.width*r})} ${r}x`).join(`, `)}shouldGenerateAutomaticSrcset(){let n=!1;return this.sizes||(n=this.width>GT||this.height>qT),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==zy&&!n}generatePlaceholder(n){let{placeholderResolution:r}=this.config;return n===!0?`url("${Hy(this.callImageLoader({src:this.ngSrc,width:r,isPlaceholder:!0}))}")`:typeof n==`string`?`url("${Hy(n)}")`:null}shouldBlurPlaceholder(n){return!n||!Object.hasOwn(n,`blur`)?!0:!!n.blur}removePlaceholderOnLoad(n){let r=()=>{let a=this.injector.get(oc);o(),i(),this.placeholder=!1,a.markForCheck()},o=this.renderer.listen(n,`load`,r),i=this.renderer.listen(n,`error`,r);this.destroyRef.onDestroy(()=>{o(),i()}),ZT(n,r)}setHostAttribute(n,r){this.renderer.setAttribute(this.imgElement,n,r)}static ɵfac=function(r){return new(r||e)};static ɵdir=ye$2({type:e,selectors:[[`img`,`ngSrc`,``]],hostVars:18,hostBindings:function(r,o){r&2&&Js(`position`,o.fill?`absolute`:null)(`width`,o.fill?`100%`:null)(`height`,o.fill?`100%`:null)(`inset`,o.fill?`0`:null)(`background-size`,o.placeholder?`cover`:null)(`background-position`,o.placeholder?`50% 50%`:null)(`background-repeat`,o.placeholder?`no-repeat`:null)(`background-image`,o.placeholder?o.generatePlaceholder(o.placeholder):null)(`filter`,o.placeholder&&o.shouldBlurPlaceholder(o.placeholderConfig)?`blur(15px)`:null)},inputs:{ngSrc:[2,`ngSrc`,`ngSrc`,KT],ngSrcset:`ngSrcset`,sizes:`sizes`,width:[2,`width`,`width`,Ii],height:[2,`height`,`height`,Ii],decoding:`decoding`,loading:`loading`,priority:[2,`priority`,`priority`,Le$1],loaderParams:`loaderParams`,disableOptimizedSrcset:[2,`disableOptimizedSrcset`,`disableOptimizedSrcset`,Le$1],fill:[2,`fill`,`fill`,Le$1],placeholder:[2,`placeholder`,`placeholder`,QT],placeholderConfig:`placeholderConfig`,src:`src`,srcset:`srcset`},features:[io]})}return e})();function YT(e){let t={};return e.breakpoints&&(t.breakpoints=e.breakpoints.sort((n,r)=>n-r)),Object.assign({},ds,e,t)}function ZT(e,t){e.complete&&e.naturalWidth&&t()}function KT(e){return typeof e==`string`?e:Ie(e)}function QT(e){return typeof e==`string`&&e!==`true`&&e!==`false`&&e!==``?e:Le$1(e)}var Ti=class{_doc;constructor(t){this._doc=t}manager};var mc=(()=>{class e extends Ti{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static ɵfac=function(r){return new(r||e)(F$1(j$1))};static ɵprov=L$1({token:e,factory:e.ɵfac})}return e})();var gc=new D(``);var Rf=(()=>{class e{_zone;_plugins;_eventNameToPlugin=/* @__PURE__ */ new Map;constructor(n,r){this._zone=r,n.forEach(a=>{a.manager=this});let o=n.filter(a=>!(a instanceof mc));this._plugins=o.slice().reverse();let i=n.find(a=>a instanceof mc);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new _(-5101,!1);return this._eventNameToPlugin.set(n,r),r}static ɵfac=function(r){return new(r||e)(F$1(gc),F$1(V))};static ɵprov=L$1({token:e,factory:e.ɵfac})}return e})();var Af=`ng-app-id`;function Wy(e){for(let t of e)t.remove()}function Gy(e,t){let n=t.createElement(`style`);return n.textContent=e,n}function XT(e,t,n,r){let o=e.head?.querySelectorAll(`style[${Af}="${t}"],link[${Af}="${t}"]`);if(!o||o.length===0)return!1;for(let i of o)i.removeAttribute(Af),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf(`/`)+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]});return!0}function Of(e,t){let n=t.createElement(`link`);return n.setAttribute(`rel`,`stylesheet`),n.setAttribute(`href`,e),n}var Ff=(()=>{class e{doc;appId;nonce;inline=/* @__PURE__ */ new Map;external=/* @__PURE__ */ new Map;hosts=/* @__PURE__ */ new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,XT(n,r,this.inline,this.external)&&this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,Gy);r?.forEach(o=>this.addUsage(o,this.external,Of))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(Wy(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])Wy(n);this.hosts.clear()}addHost(n){if(!this.hosts.has(n)){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,Gy(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,Of(r,this.doc)))}}removeHost(n){this.hosts.delete(n);for(let r of[...this.inline.values(),...this.external.values()]){let o=[];for(let i of r.elements)i.parentNode===n?i.remove():o.push(i);r.elements=o}}addElement(n,r){return this.nonce&&r.setAttribute(`nonce`,this.nonce),n.appendChild(r)}static ɵfac=function(r){return new(r||e)(F$1(j$1),F$1(Vt$2),F$1(hn$1,8),F$1(nr))};static ɵprov=L$1({token:e,factory:e.ɵfac})}return e})();var kf={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Lf=/%COMP%/g;var Yy=`%COMP%`;var JT=`_nghost-${Yy}`;var eM=`_ngcontent-${Yy}`;var tM=!0;var nM=new D(``,{factory:()=>tM});var rM=new D(``);function oM(e){return eM.replace(Lf,e)}function iM(e){return JT.replace(Lf,e)}function Zy(e,t){return t.map(n=>n.replace(Lf,e))}var Pf=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=/* @__PURE__ */ new Map;defaultRenderer;cssVarNamespace;constructor(n,r,o,i,a,s,c=null,l=null,u=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.cssVarNamespace=u??``,this.defaultRenderer=new Mi(n,a,s,this.tracingService,this.cssVarNamespace)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof hc?o.applyToHost(n):o instanceof Ai&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(r.encapsulation){case it$1.Emulated:i=new hc(c,l,r,this.appId,u,a,s,d,this.cssVarNamespace);break;case it$1.ShadowDom:return new pc(c,n,r,a,s,this.nonce,d,this.cssVarNamespace,l);case it$1.ExperimentalIsolatedShadowDom:return new pc(c,n,r,a,s,this.nonce,d,this.cssVarNamespace);default:i=new Ai(c,l,r,u,a,s,d,this.cssVarNamespace)}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static ɵfac=function(r){return new(r||e)(F$1(Rf),F$1(fr),F$1(Vt$2),F$1(nM),F$1(j$1),F$1(V),F$1(hn$1),F$1(St$1,8),F$1(rM,8))};static ɵprov=L$1({token:e,factory:e.ɵfac})}return e})();var Mi=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,r,o,i=``){this.eventManager=t,this.doc=n,this.ngZone=r,this.tracingService=o,this.cssVarNamespace=i}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(kf[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(qy(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){if(t){let o=qy(t)?t.content:t;if(r!=null&&r.parentNode!==o)throw new _(-5106,!1);o.insertBefore(n,r)}}removeChild(t,n){n.remove()}selectRootElement(t,n){let r=typeof t==`string`?this.doc.querySelector(t):t;if(!r)throw new _(-5104,!1);return n||(r.textContent=``),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+`:`+n;let i=kf[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=kf[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){let i=n.startsWith(`--`);i&&(n=n.replace(`%NS%`,this.cssVarNamespace)),i||o&(wt$2.DashCase|wt$2.Important)?t.style.setProperty(n,r,o&wt$2.Important?`important`:``):t.style[n]=r}removeStyle(t,n,r){let o=n.startsWith(`--`);o&&(n=n.replace(`%NS%`,this.cssVarNamespace)),o||r&wt$2.DashCase?t.style.removeProperty(n):t.style[n]=``}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r,o){if(typeof t==`string`&&(t=Wt$1().getGlobalEventTarget(this.doc,t),!t))throw new _(-5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,o)}decoratePreventDefault(t){return n=>{if(n===`__ngUnwrap__`)return t;t(n)===!1&&n.preventDefault()}}};function qy(e){return e.tagName===`TEMPLATE`&&e.content!==void 0}var pc=class extends Mi{hostEl;sharedStylesHost;shadowRoot;constructor(t,n,r,o,i,a,s,c,l){super(t,o,i,s,c),this.hostEl=n,this.sharedStylesHost=l,this.shadowRoot=n.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Zy(r.id,u).map(m=>m.replace(/%NS%/g,c));for(let m of u){let f=document.createElement(`style`);a&&f.setAttribute(`nonce`,a),f.textContent=m,this.shadowRoot.appendChild(f)}let d=r.getExternalStyles?.();if(d)for(let m of d){let f=Of(m,o);a&&f.setAttribute(`nonce`,a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Ai=class extends Mi{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,r,o,i,a,s,c,l){super(t,i,a,s,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let u=r.styles,d=l?Zy(l,u):u;this.styles=d.map(m=>m.replace(/%NS%/g,c)),this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&kd.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var hc=class extends Ai{contentAttr;hostAttr;constructor(t,n,r,o,i,a,s,c,l){let u=o+`-`+r.id;super(t,n,r,i,a,s,c,l,u),this.contentAttr=oM(u),this.hostAttr=iM(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,``)}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,``),r}};var bc=class e extends wi{supportsDOMEvents=!0;static makeCurrent(){_f(new e)}onAndCancel(t,n,r,o){return t.addEventListener(n,r,o),()=>{t.removeEventListener(n,r,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n===`window`?window:n===`document`?t:n===`body`?t.body:null}getBaseHref(t){let n=aM();return n==null?null:sM(n)}resetBaseElement(){ki=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Tf(document.cookie,t)}};var ki=null;function aM(){return ki=ki||document.head.querySelector(`base`),ki?ki.getAttribute(`href`):null}function sM(e){return new URL(e,document.baseURI).pathname}var Ky=[`alt`,`control`,`meta`,`shift`];var cM={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var lM={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};var Qy=(()=>{class e extends Ti{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o,i){let a=e.parseEventName(r),s=e.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Wt$1().onAndCancel(n,a.domEventName,s,i))}static parseEventName(n){let r=n.toLowerCase().split(`.`),o=r.shift();if(r.length===0||!(o===`keydown`||o===`keyup`))return null;let i=e._normalizeKey(r.pop()),a=``,s=r.indexOf(`code`);if(s>-1&&(r.splice(s,1),a=`code.`),Ky.forEach(l=>{let u=r.indexOf(l);u>-1&&(r.splice(u,1),a+=l+`.`)}),a+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=a,c}static matchEventFullKeyCode(n,r){let o=cM[n.key]||n.key,i=``;return r.indexOf(`code.`)>-1&&(o=n.code,i=`code.`),o==null||!o?!1:(o=o.toLowerCase(),o===` `?o=`space`:o===`.`&&(o=`dot`),Ky.forEach(a=>{if(a!==o){let s=lM[a];s(n)&&(i+=a+`.`)}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n===`esc`?`escape`:n}static ɵfac=function(r){return new(r||e)(F$1(j$1))};static ɵprov=L$1({token:e,factory:e.ɵfac})}return e})();function uM(e,t,n){return Er(this,null,function*(){return vy(R$1({rootComponent:e},dM(t,n)))})}function dM(e,t){return{platformRef:t?.platformRef,appProviders:[...gM,...e?.providers??[]],platformProviders:hM}}function fM(){bc.makeCurrent()}function mM(){return new Ge$2}function pM(){return vd(document),document}var hM=[{provide:nr,useValue:Mf},{provide:us,useValue:fM,multi:!0},{provide:j$1,useFactory:pM}];var gM=[{provide:Wo,useValue:`root`},{provide:Ge$2,useFactory:mM},{provide:gc,useClass:mc,multi:!0},{provide:gc,useClass:Qy,multi:!0},Pf,{provide:fr,useClass:Ff},{provide:Ff,useExisting:fr},Rf,{provide:at$1,useExisting:Pf},[]];var Oi=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵprov=L$1({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=F$1(bM),o},providedIn:`root`})}return e})();var bM=(()=>{class e extends Oi{_doc=p$1(j$1);sanitize(n,r){if(r==null)return null;switch(n){case Q$1.NONE:return r;case Q$1.HTML:return Ut$1(r,`HTML`)?Ie(r):Hs(this._doc,String(r)).toString();case Q$1.STYLE:return Ut$1(r,`Style`)?Ie(r):r;case Q$1.SCRIPT:if(Ut$1(r,`Script`))return Ie(r);throw new _(5200,!1);case Q$1.URL:return Ut$1(r,`URL`)?Ie(r):di(String(r));case Q$1.RESOURCE_URL:if(Ut$1(r,`ResourceURL`))return Ie(r);throw new _(-5201,!1);default:throw new _(5202,!1)}}bypassSecurityTrustHtml(n){return wd(n)}bypassSecurityTrustStyle(n){return Sd(n)}bypassSecurityTrustScript(n){return Cd(n)}bypassSecurityTrustUrl(n){return xd(n)}bypassSecurityTrustResourceUrl(n){return Nd(n)}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();function Ri(e){return e.buttons===0||e.detail===0}function Fi(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var jf;function Xy(){if(jf==null){let e=typeof document<`u`?document.head:null;jf=!!(e&&(e.createShadowRoot||e.attachShadow))}return jf}function Bf(e){if(Xy()){let t=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function vM(){let e=typeof document<`u`&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}function dt$1(e){if(e.composedPath)try{return e.composedPath()[0]}catch(t){}return e.target}var Vf;try{Vf=typeof Intl<`u`&&Intl.v8BreakIterator}catch(e){Vf=!1}var Me=(()=>{class e{_platformId=p$1(nr);isBrowser=this._platformId?Uy(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Vf)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var Li;function Jy(){if(Li==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Li=!0}))}finally{Li=Li||!1}return Li}function go(e){return Jy()?e:!!e.capture}function Hf(e,t=0){return eD(e)?Number(e):arguments.length===2?t:0}function eD(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function Ct$1(e){return e instanceof pe$2?e.nativeElement:e}var tD=new D(`cdk-input-modality-detector-options`);var nD={ignoreKeys:[18,17,224,91,16]};var rD=650;var $f={passive:!0,capture:!0};var oD=(()=>{class e{_platform=p$1(Me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Fn$1(null);_options;_lastTouchMs=0;_onKeydown=n=>{this._options?.ignoreKeys?.some(r=>r===n.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=dt$1(n))};_onMousedown=n=>{Date.now()-this._lastTouchMs<rD||(this._modality.next(Ri(n)?`keyboard`:`mouse`),this._mostRecentTarget=dt$1(n))};_onTouchstart=n=>{if(Fi(n)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=dt$1(n)};constructor(){let n=p$1(V),r=p$1(j$1),o=p$1(tD,{optional:!0});if(this._options=R$1(R$1({},nD),o),this.modalityDetected=this._modality.pipe(Mo(1)),this.modalityChanged=this.modalityDetected.pipe(il()),this._platform.isBrowser){let i=p$1(at$1).createRenderer(null,null);this._listenerCleanups=n.runOutsideAngular(()=>[i.listen(r,`keydown`,this._onKeydown,$f),i.listen(r,`mousedown`,this._onMousedown,$f),i.listen(r,`touchstart`,this._onTouchstart,$f)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(n=>n())}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var Pi=(function(e){return e[e.IMMEDIATE=0]=`IMMEDIATE`,e[e.EVENTUAL=1]=`EVENTUAL`,e})(Pi||{});var iD=new D(`cdk-focus-monitor-default-options`);var vc=go({passive:!0,capture:!0});var yc=(()=>{class e{_ngZone=p$1(V);_platform=p$1(Me);_inputModalityDetector=p$1(oD);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=p$1(j$1);_stopInputModalityDetector=new U$1;constructor(){let n=p$1(iD,{optional:!0});this._detectionMode=n?.detectionMode||Pi.IMMEDIATE}_rootNodeFocusAndBlurListener=n=>{let r=dt$1(n);for(let o=r;o;o=o.parentElement)n.type===`focus`?this._onFocus(n,o):this._onBlur(n,o)};monitor(n,r=!1){let o=Ct$1(n);if(!this._platform.isBrowser||o.nodeType!==1)return el();let i=Bf(o)||this._document,a=this._elementInfo.get(o);if(a)return r&&(a.checkChildren=!0),a.subject;let s={checkChildren:r,subject:new U$1,rootNode:i};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(n){let r=Ct$1(n),o=this._elementInfo.get(r);o&&(o.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(o))}focusVia(n,r,o){let i=Ct$1(n);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([s,c])=>this._originChanged(s,r,c)):(this._setOrigin(r),typeof i.focus==`function`&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((n,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(n){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(n)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:n&&this._isLastInteractionFromInputLabel(n)?`mouse`:`program`}_shouldBeAttributedToTouch(n){return this._detectionMode===Pi.EVENTUAL||!!n?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(n,r){n.classList.toggle(`cdk-focused`,!!r),n.classList.toggle(`cdk-touch-focused`,r===`touch`),n.classList.toggle(`cdk-keyboard-focused`,r===`keyboard`),n.classList.toggle(`cdk-mouse-focused`,r===`mouse`),n.classList.toggle(`cdk-program-focused`,r===`program`)}_setOrigin(n,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=n,this._originFromTouchInteraction=n===`touch`&&r,this._detectionMode===Pi.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?rD:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(n,r){let o=this._elementInfo.get(r),i=dt$1(n);!o||!o.checkChildren&&r!==i||this._originChanged(r,this._getFocusOrigin(i),o)}_onBlur(n,r){let o=this._elementInfo.get(r);!o||o.checkChildren&&n.relatedTarget instanceof Node&&r.contains(n.relatedTarget)||(this._setClasses(r),this._emitOrigin(o,null))}_emitOrigin(n,r){n.subject.observers.length&&this._ngZone.run(()=>n.subject.next(r))}_registerGlobalListeners(n){if(!this._platform.isBrowser)return;let r=n.rootNode,o=this._rootNodeFocusListenerCount.get(r)||0;o||this._ngZone.runOutsideAngular(()=>{r.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,vc),r.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,vc)}),this._rootNodeFocusListenerCount.set(r,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ao(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(n){let r=n.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let o=this._rootNodeFocusListenerCount.get(r);o>1?this._rootNodeFocusListenerCount.set(r,o-1):(r.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,vc),r.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,vc),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(n,r,o){this._setClasses(n,r),this._emitOrigin(o,r),this._lastFocusOrigin=r}_getClosestElementsInfo(n){let r=[];return this._elementInfo.forEach((o,i)=>{(i===n||o.checkChildren&&i.contains(n))&&r.push([i,o])}),r}_isLastInteractionFromInputLabel(n){let{_mostRecentTarget:r,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!r||r===n||n.nodeName!==`INPUT`&&n.nodeName!==`TEXTAREA`||n.disabled)return!1;let i=n.labels;if(i){for(let a=0;a<i.length;a++)if(i[a].contains(r))return!0}return!1}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var yM=(()=>{class e{_elementRef=p$1(pe$2);_focusMonitor=p$1(yc);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Ce;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let n=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(n,n.nodeType===1&&n.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(r=>{this._focusOrigin=r,this.cdkFocusChange.emit(r)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(r){return new(r||e)};static ɵdir=ye$2({type:e,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return e})();var Dc=/* @__PURE__ */ new WeakMap;var Yt=(()=>{class e{_appRef;_injector=p$1(Z$2);_environmentInjector=p$1(ke$1);load(n){let r=this._appRef=this._appRef||this._injector.get(yn$2),o=Dc.get(r);o||(o={loaders:/* @__PURE__ */ new Set,refs:[]},Dc.set(r,o),r.onDestroy(()=>{Dc.get(r)?.refs.forEach(i=>i.destroy()),Dc.delete(r)})),o.loaders.has(n)||(o.loaders.add(n),o.refs.push(Dy(n,{environmentInjector:this._environmentInjector})))}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var _c=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵcmp=Fe$1({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(r,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})();var Ec;function DM(){if(Ec===void 0&&(Ec=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{Ec=e.trustedTypes.createPolicy(`angular#components`,{createHTML:t=>t})}catch(t){console.error(t)}}return Ec}function EM(e){return DM()?.createHTML(e)||e}function aD(e,t,n){e.innerHTML=EM(n.sanitize(Q$1.HTML,t)||``)}function Uf(e){return Array.isArray(e)?e:[e]}var sD=/* @__PURE__ */ new Set;var gr;var Ic=(()=>{class e{_platform=p$1(Me);_nonce=p$1(hn$1,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):IM}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&_M(n,this._nonce),this._matchMedia(n)}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();function _M(e,t){if(!sD.has(e))try{gr||(gr=document.createElement(`style`),t&&gr.setAttribute(`nonce`,t),gr.setAttribute(`type`,`text/css`),document.head.appendChild(gr)),gr.sheet&&(gr.sheet.insertRule(`@media ${e.replace(/[{}]/g,``)} {body{ }}`,0),sD.add(e))}catch(n){console.error(n)}}function IM(e){return{matches:e===`all`||e===``,media:e,addListener:()=>{},removeListener:()=>{}}}var zf=(()=>{class e{_mediaMatcher=p$1(Ic);_zone=p$1(V);_queries=/* @__PURE__ */ new Map;_destroySubject=new U$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return cD(Uf(n)).some(o=>this._registerQuery(o).mql.matches)}observe(n){let i=ol(cD(Uf(n)).map(a=>this._registerQuery(a).observable));return i=en(i.pipe(xr(1)),i.pipe(Mo(1),Pn$1(0))),i.pipe(ge$1(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);let r=this._mediaMatcher.matchMedia(n),i={observable:new k$2(a=>{let s=c=>this._zone.run(()=>a.next(c));return r.addListener(s),()=>{r.removeListener(s)}}).pipe(ga$2(r),ge$1(({matches:a})=>({query:n,matches:a})),Ao(this._destroySubject)),mql:r};return this._queries.set(n,i),i}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();function cD(e){return e.map(t=>t.split(`,`)).reduce((t,n)=>t.concat(n)).map(t=>t.trim())}function wM(e){if(e.type===`characterData`&&e.target instanceof Comment)return!0;if(e.type===`childList`){for(let t=0;t<e.addedNodes.length;t++)if(!(e.addedNodes[t]instanceof Comment))return!1;for(let t=0;t<e.removedNodes.length;t++)if(!(e.removedNodes[t]instanceof Comment))return!1;return!0}return!1}var lD=(()=>{class e{create(n){return typeof MutationObserver>`u`?null:new MutationObserver(n)}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var uD=(()=>{class e{_mutationObserverFactory=p$1(lD);_observedElements=/* @__PURE__ */ new Map;_ngZone=p$1(V);ngOnDestroy(){this._observedElements.forEach((n,r)=>this._cleanupObserver(r))}observe(n){let r=Ct$1(n);return new k$2(o=>{let a=this._observeElement(r).pipe(ge$1(s=>s.filter(c=>!wM(c))),Ln$1(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{o.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(r)}})}_observeElement(n){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(n))this._observedElements.get(n).count++;else{let r=new U$1,o=this._mutationObserverFactory.create(i=>r.next(i));o&&o.observe(n,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(n,{observer:o,stream:r,count:1})}return this._observedElements.get(n).stream})}_unobserveElement(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))}_cleanupObserver(n){if(this._observedElements.has(n)){let{observer:r,stream:o}=this._observedElements.get(n);r&&r.disconnect(),o.complete(),this._observedElements.delete(n)}}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var SG=(()=>{class e{_contentObserver=p$1(uD);_elementRef=p$1(pe$2);event=new Ce;get disabled(){return this._disabled}set disabled(n){this._disabled=n,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(n){this._debounce=Hf(n),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let n=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?n.pipe(Pn$1(this.debounce)):n).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(r){return new(r||e)};static ɵdir=ye$2({type:e,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,Le$1],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return e})();var dD=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵmod=Ne({type:e});static ɵinj=_e$1({providers:[lD]})}return e})();var SM=(()=>{class e{_platform=p$1(Me);isDisabled(n){return n.hasAttribute(`disabled`)}isVisible(n){return xM(n)&&getComputedStyle(n).visibility===`visible`}isTabbable(n){if(!this._platform.isBrowser)return!1;let r=CM(FM(n));if(r&&(fD(r)===-1||!this.isVisible(r)))return!1;let o=n.nodeName.toLowerCase(),i=fD(n);return n.hasAttribute(`contenteditable`)?i!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!OM(n)?!1:o===`audio`?n.hasAttribute(`controls`)?i!==-1:!1:o===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||n.hasAttribute(`controls`):n.tabIndex>=0}isFocusable(n,r){return RM(n)&&!this.isDisabled(n)&&(r?.ignoreInert||!n.closest?.(`[inert]`))&&(r?.ignoreVisibility||this.isVisible(n))}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();function CM(e){try{return e.frameElement}catch(t){return null}}function xM(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function NM(e){let t=e.nodeName.toLowerCase();return t===`input`||t===`select`||t===`button`||t===`textarea`}function TM(e){return AM(e)&&e.type==`hidden`}function MM(e){return kM(e)&&e.hasAttribute(`href`)}function AM(e){return e.nodeName.toLowerCase()==`input`}function kM(e){return e.nodeName.toLowerCase()==`a`}function hD(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let t=e.getAttribute(`tabindex`);return!!(t&&!isNaN(parseInt(t,10)))}function fD(e){if(!hD(e))return null;let t=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(t)?-1:t}function OM(e){let t=e.nodeName.toLowerCase(),n=t===`input`&&e.type;return n===`text`||n===`password`||t===`select`||t===`textarea`}function RM(e){return TM(e)?!1:NM(e)||MM(e)||e.hasAttribute(`contenteditable`)||hD(e)}function FM(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var Gf=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(t){this._enabled=t,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_enabled=!0;constructor(t,n,r,o,i=!1,a){this._element=t,this._checker=n,this._ngZone=r,this._document=o,this._injector=a,i||this.attachAnchors()}destroy(){let t=this._startAnchor,n=this._endAnchor;t&&(t.removeEventListener(`focus`,this.startAnchorListener),t.remove()),n&&(n.removeEventListener(`focus`,this.endAnchorListener),n.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(t){return new Promise(n=>{this._executeOnStable(()=>n(this.focusInitialElement(t)))})}focusFirstTabbableElementWhenReady(t){return new Promise(n=>{this._executeOnStable(()=>n(this.focusFirstTabbableElement(t)))})}focusLastTabbableElementWhenReady(t){return new Promise(n=>{this._executeOnStable(()=>n(this.focusLastTabbableElement(t)))})}_getRegionBoundary(t){let n=this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);return t==`start`?n.length?n[0]:this._getFirstTabbableElement(this._element):n.length?n[n.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(t){let n=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(n){if(!this._checker.isFocusable(n)){let r=this._getFirstTabbableElement(n);return r?.focus(t),!!r}return n.focus(t),!0}return this.focusFirstTabbableElement(t)}focusFirstTabbableElement(t){let n=this._getRegionBoundary(`start`);return n&&n.focus(t),!!n}focusLastTabbableElement(t){let n=this._getRegionBoundary(`end`);return n&&n.focus(t),!!n}hasAttached(){return this._hasAttached}_getFirstTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let n=t.children;for(let r=0;r<n.length;r++){let o=n[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(n[r]):null;if(o)return o}return null}_getLastTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let n=t.children;for(let r=n.length-1;r>=0;r--){let o=n[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(n[r]):null;if(o)return o}return null}_createAnchor(){let t=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,t),t.classList.add(`cdk-visually-hidden`),t.classList.add(`cdk-focus-trap-anchor`),t.setAttribute(`aria-hidden`,`true`),t}_toggleAnchorTabIndex(t,n){t?n.setAttribute(`tabindex`,`0`):n.removeAttribute(`tabindex`)}toggleAnchors(t){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_executeOnStable(t){Fd(t,{injector:this._injector})}};var LM=(()=>{class e{_checker=p$1(SM);_ngZone=p$1(V);_document=p$1(j$1);_injector=p$1(Z$2);constructor(){p$1(Yt).load(_c)}create(n,r=!1){return new Gf(n,this._checker,this._ngZone,this._document,r,this._injector)}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var gD=new D(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var bD=new D(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var PM=0;var jM=(()=>{class e{_ngZone=p$1(V);_defaultOptions=p$1(bD,{optional:!0});_liveElement;_document=p$1(j$1);_sanitizer=p$1(Oi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let n=p$1(gD,{optional:!0});this._liveElement=n||this._createLiveElement()}announce(n,...r){let o=this._defaultOptions,i,a;return r.length===1&&typeof r[0]==`number`?a=r[0]:[i,a]=r,this.clear(),clearTimeout(this._previousTimeout),i||(i=o&&o.politeness?o.politeness:`polite`),a==null&&o&&(a=o.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!n||typeof n==`string`?this._liveElement.textContent=n:aD(this._liveElement,n,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let n=`cdk-live-announcer-element`,r=this._document.getElementsByClassName(n),o=this._document.createElement(`div`);for(let i=0;i<r.length;i++)r[i].remove();return o.classList.add(n),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${PM++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(n){let r=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<r.length;o++){let i=r[o],a=i.getAttribute(`aria-owns`);a?a.indexOf(n)===-1&&i.setAttribute(`aria-owns`,a+` `+n):i.setAttribute(`aria-owns`,n)}}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var Sn=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(Sn||{});var mD=`cdk-high-contrast-black-on-white`;var pD=`cdk-high-contrast-white-on-black`;var Wf=`cdk-high-contrast-active`;var vD=(()=>{class e{_platform=p$1(Me);_hasCheckedHighContrastMode=!1;_document=p$1(j$1);_breakpointSubscription;constructor(){this._breakpointSubscription=p$1(zf).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Sn.NONE;let n=this._document.createElement(`div`);n.style.backgroundColor=`rgb(1,2,3)`,n.style.position=`absolute`,this._document.body.appendChild(n);let r=this._document.defaultView||window,o=r&&r.getComputedStyle?r.getComputedStyle(n):null,i=(o&&o.backgroundColor||``).replace(/ /g,``);switch(n.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return Sn.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return Sn.BLACK_ON_WHITE}return Sn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let n=this._document.body.classList;n.remove(Wf,mD,pD),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===Sn.BLACK_ON_WHITE?n.add(Wf,mD):r===Sn.WHITE_ON_BLACK&&n.add(Wf,pD)}}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var BM=(()=>{class e{constructor(){p$1(vD)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(r){return new(r||e)};static ɵmod=Ne({type:e});static ɵinj=_e$1({imports:[dD]})}return e})();var VM=200;var wc=class{_letterKeyStream=new U$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new U$1;selectedItem=this._selectedItem;constructor(t,n){let r=typeof n?.debounceInterval==`number`?n.debounceInterval:VM;n?.skipPredicate&&(this._skipPredicateFn=n.skipPredicate),this.setItems(t),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let n=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(n>=65&&n<=90||n>=48&&n<=57)&&this._letterKeyStream.next(String.fromCharCode(n))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(Sa$2(n=>this._pressedLetters.push(n)),Pn$1(t),Ln$1(()=>this._pressedLetters.length>0),ge$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(n=>{for(let r=1;r<this._items.length+1;r++){let o=(this._selectedItemIndex+r)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(n)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function yD(e,...t){return t.length?t.some(n=>e[n]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var bo=class{_items;_activeItemIndex=Bt$2(-1);_activeItem=Bt$2(null);_wrap=!1;_typeaheadSubscription=te$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,n){this._items=t,t instanceof sr?this._itemChangesSubscription=t.changes.subscribe(r=>this._itemsChanged(r.toArray())):rr(t)&&(this._effectRef=qr(()=>this._itemsChanged(t()),{injector:n}))}tabOut=new U$1;change=new U$1;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let n=this._getItemsArray();return this._typeahead=new wc(n,{debounceInterval:typeof t==`number`?t:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,n=10){return this._pageUpAndDown={enabled:t,delta:n},this}setActiveItem(t){let n=this._activeItem();this.updateActiveItem(t),this._activeItem()!==n&&this.change.next(this._activeItemIndex())}onKeydown(t){let n=t.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!t[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(n){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(i<a?i:a-1,-1);break}else return;default:(o||yD(t,`shiftKey`))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let n=this._getItemsArray(),r=typeof t==`number`?t:n.indexOf(t),o=n[r];this._activeItem.set(o??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let n=this._getItemsArray();for(let r=1;r<=n.length;r++){let o=(this._activeItemIndex()+t*r+n.length)%n.length,i=n[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,n){let r=this._getItemsArray();if(r[t]){for(;this._skipPredicateFn(r[t]);)if(t+=n,!r[t])return;this.setActiveItem(t)}}_getItemsArray(){return rr(this._items)?this._items():this._items instanceof sr?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let n=this._activeItem();if(n){let r=t.indexOf(n);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var qf=class extends bo{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var Yf=class extends bo{_origin=`program`;setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}};var DD=/* @__PURE__ */ new Map;var Zf=class e{_appId=p$1(Vt$2);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,n=!1){this._appId!==`ng`&&(t+=this._appId);let r=DD.get(t);return r===void 0?r=0:r++,DD.set(t,r),`${t}${n?e._infix+`-`:``}${r}`}static ɵfac=function(n){return new(n||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})};var _D=` `;function HM(e,t,n){let r=Cc(e,t);n=n.trim(),!r.some(o=>o.trim()===n)&&(r.push(n),e.setAttribute(t,r.join(_D)))}function $M(e,t,n){let r=Cc(e,t);n=n.trim();let o=r.filter(i=>i!==n);o.length?e.setAttribute(t,o.join(_D)):e.removeAttribute(t)}function Cc(e,t){return e.getAttribute(t)?.match(/\S+/g)??[]}var ID=`cdk-describedby-message`;var Sc=`cdk-describedby-host`;var Qf=0;var _9=(()=>{class e{_platform=p$1(Me);_document=p$1(j$1);_messageRegistry=/* @__PURE__ */ new Map;_messagesContainer=null;_id=`${Qf++}`;constructor(){p$1(Yt).load(_c),this._id=p$1(Vt$2)+`-`+Qf++}describe(n,r,o){if(!this._canBeDescribed(n,r))return;let i=Kf(r,o);typeof r!=`string`?(ED(r,this._id),this._messageRegistry.set(i,{messageElement:r,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(r,o),this._isElementDescribedByMessage(n,i)||this._addMessageReference(n,i)}removeDescription(n,r,o){if(!r||!this._isElementNode(n))return;let i=Kf(r,o);if(this._isElementDescribedByMessage(n,i)&&this._removeMessageReference(n,i),typeof r==`string`){let a=this._messageRegistry.get(i);a&&a.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let n=this._document.querySelectorAll(`[${Sc}="${this._id}"]`);for(let r=0;r<n.length;r++)this._removeCdkDescribedByReferenceIds(n[r]),n[r].removeAttribute(Sc);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(n,r){let o=this._document.createElement(`div`);ED(o,this._id),o.textContent=n,r&&o.setAttribute(`role`,r),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Kf(n,r),{messageElement:o,referenceCount:0})}_deleteMessageElement(n){this._messageRegistry.get(n)?.messageElement?.remove(),this._messageRegistry.delete(n)}_createMessagesContainer(){if(this._messagesContainer)return;let n=`cdk-describedby-message-container`,r=this._document.querySelectorAll(`.${n}[platform="server"]`);for(let i=0;i<r.length;i++)r[i].remove();let o=this._document.createElement(`div`);o.style.visibility=`hidden`,o.classList.add(n),o.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||o.setAttribute(`platform`,`server`),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(n){let r=Cc(n,`aria-describedby`).filter(o=>o.indexOf(ID)!=0);n.setAttribute(`aria-describedby`,r.join(` `))}_addMessageReference(n,r){let o=this._messageRegistry.get(r);HM(n,`aria-describedby`,o.messageElement.id),n.setAttribute(Sc,this._id),o.referenceCount++}_removeMessageReference(n,r){let o=this._messageRegistry.get(r);o.referenceCount--,$M(n,`aria-describedby`,o.messageElement.id),n.removeAttribute(Sc)}_isElementDescribedByMessage(n,r){let o=Cc(n,`aria-describedby`),i=this._messageRegistry.get(r),a=i&&i.messageElement.id;return!!a&&o.indexOf(a)!=-1}_canBeDescribed(n,r){if(!this._isElementNode(n))return!1;if(r&&typeof r==`object`)return!0;let o=r==null?``:`${r}`.trim(),i=n.getAttribute(`aria-label`);return o?!i||i.trim()!==o:!1}_isElementNode(n){return n.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();function Kf(e,t){return typeof e==`string`?`${t||``}/${e}`:e}function ED(e,t){e.id||(e.id=`${ID}-${t}-${Qf++}`)}var ji=(function(e){return e[e.NORMAL=0]=`NORMAL`,e[e.NEGATED=1]=`NEGATED`,e[e.INVERTED=2]=`INVERTED`,e})(ji||{});var xc;var br;function M9(){if(br==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return br=!1,br;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)br=!0;else{let e=Element.prototype.scrollTo;e?br=!/\{\s*\[native code\]\s*\}/.test(e.toString()):br=!1}}return br}function A9(){if(typeof document!=`object`||!document)return ji.NORMAL;if(xc==null){let e=document.createElement(`div`),t=e.style;e.dir=`rtl`,t.width=`1px`,t.overflow=`auto`,t.visibility=`hidden`,t.pointerEvents=`none`,t.position=`absolute`;let n=document.createElement(`div`),r=n.style;r.width=`2px`,r.height=`1px`,e.appendChild(n),document.body.appendChild(e),xc=ji.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,xc=e.scrollLeft===0?ji.NEGATED:ji.INVERTED),e.remove()}return xc}function O9(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var vo;var wD=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function F9(){if(vo)return vo;if(typeof document!=`object`||!document)return vo=new Set(wD),vo;let e=document.createElement(`input`);return vo=new Set(wD.filter(t=>(e.setAttribute(`type`,t),e.type===t))),vo}var UM=new D(`MATERIAL_ANIMATIONS`);var SD=null;function zM(){return p$1(UM,{optional:!0})?.animationsDisabled||p$1(pu,{optional:!0})===`NoopAnimations`?`di-disabled`:(SD??=p$1(Ic).matchMedia(`(prefers-reduced-motion)`).matches,SD?`reduced-motion`:`enabled`)}function yo(){return zM()!==`enabled`}function W9(e){return e==null?``:typeof e==`string`?e:`${e}px`}function q9(e){return e!=null&&`${e}`!=`false`}var Je$1=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(Je$1||{});var Xf=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Je$1.HIDDEN;constructor(t,n,r,o=!1){this._renderer=t,this.element=n,this.config=r,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var CD=go({passive:!0,capture:!0});var Jf=class{_events=/* @__PURE__ */ new Map;addHandler(t,n,r,o){let i=this._events.get(n);if(i){let a=i.get(r);a?a.add(o):i.set(r,/* @__PURE__ */ new Set([o]))}else this._events.set(n,/* @__PURE__ */ new Map([[r,/* @__PURE__ */ new Set([o])]])),t.runOutsideAngular(()=>{document.addEventListener(n,this._delegateEventHandler,CD)})}removeHandler(t,n,r){let o=this._events.get(t);if(!o)return;let i=o.get(n);i&&(i.delete(r),i.size===0&&o.delete(n),o.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,CD)))}_delegateEventHandler=t=>{let n=dt$1(t);n&&this._events.get(t.type)?.forEach((r,o)=>{(o===n||o.contains(n))&&r.forEach(i=>i.handleEvent(t))})}};var Bi={enterDuration:225,exitDuration:150};var WM=800;var xD=go({passive:!0,capture:!0});var ND=[`mousedown`,`touchstart`];var TD=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var GM=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵcmp=Fe$1({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(r,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})();var Vi=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Jf;constructor(t,n,r,o,i){this._target=t,this._ngZone=n,this._platform=o,o.isBrowser&&(this._containerElement=Ct$1(r)),i&&i.get(Yt).load(GM)}fadeInRipple(t,n,r={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=R$1(R$1({},Bi),r.animation);r.centered&&(t=o.left+o.width/2,n=o.top+o.height/2);let a=r.radius||qM(t,n,o),s=t-o.left,c=n-o.top,l=i.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,r.color!=null&&(u.style.backgroundColor=r.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let d=window.getComputedStyle(u),m=d.transitionProperty,f=d.transitionDuration,h=m===`none`||f===`0s`||f===`0s, 0s`||o.width===0&&o.height===0,g=new Xf(this,u,r,h);u.style.transform=`scale3d(1, 1, 1)`,g.state=Je$1.FADING_IN,r.persistent||(this._mostRecentTransientRipple=g);let v=null;return!h&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let y=()=>{v&&(v.fallbackTimer=null),clearTimeout(ne),this._finishRippleTransition(g)},w=()=>this._destroyRipple(g),ne=setTimeout(w,l+100);u.addEventListener(`transitionend`,y),u.addEventListener(`transitioncancel`,w),v={onTransitionEnd:y,onTransitionCancel:w,fallbackTimer:ne}}),this._activeRipples.set(g,v),(h||!l)&&this._finishRippleTransition(g),g}fadeOutRipple(t){if(t.state===Je$1.FADING_OUT||t.state===Je$1.HIDDEN)return;let n=t.element,r=R$1(R$1({},Bi),t.config.animation);n.style.transitionDuration=`${r.exitDuration}ms`,n.style.opacity=`0`,t.state=Je$1.FADING_OUT,(t._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let n=Ct$1(t);!this._platform.isBrowser||!n||n===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=n,ND.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,n,this)}))}handleEvent(t){t.type===`mousedown`?this._onMousedown(t):t.type===`touchstart`?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{TD.forEach(n=>{this._triggerElement.addEventListener(n,this,xD)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===Je$1.FADING_IN?this._startFadeOutTransition(t):t.state===Je$1.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let n=t===this._mostRecentTransientRipple,{persistent:r}=t.config;t.state=Je$1.VISIBLE,!r&&(!n||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let n=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=Je$1.HIDDEN,n!==null&&(t.element.removeEventListener(`transitionend`,n.onTransitionEnd),t.element.removeEventListener(`transitioncancel`,n.onTransitionCancel),n.fallbackTimer!==null&&clearTimeout(n.fallbackTimer)),t.element.remove()}_onMousedown(t){let n=Ri(t),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+WM;!this._target.rippleDisabled&&!n&&!r&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Fi(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let n=t.changedTouches;if(n)for(let r=0;r<n.length;r++)this.fadeInRipple(n[r].clientX,n[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let n=t.state===Je$1.VISIBLE||t.config.terminateOnPointerUp&&t.state===Je$1.FADING_IN;!t.config.persistent&&n&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(ND.forEach(n=>e._eventManager.removeHandler(n,t,this)),this._pointerUpEventsRegistered&&(TD.forEach(n=>t.removeEventListener(n,this,xD)),this._pointerUpEventsRegistered=!1))}};function qM(e,t,n){let r=Math.max(Math.abs(e-n.left),Math.abs(e-n.right)),o=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(r*r+o*o)}var em=new D(`mat-ripple-global-options`);var a7=(()=>{class e{_elementRef=p$1(pe$2);_animationsDisabled=yo();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(n){n&&this.fadeOutAllNonPersistent(),this._disabled=n,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(n){this._trigger=n,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let n=p$1(V),r=p$1(Me),o=p$1(em,{optional:!0}),i=p$1(Z$2);this._globalOptions=o||{},this._rippleRenderer=new Vi(this,n,this._elementRef,r,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:R$1(R$1(R$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(n,r=0,o){return typeof n==`number`?this._rippleRenderer.fadeInRipple(n,r,R$1(R$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,R$1(R$1({},this.rippleConfig),n))}static ɵfac=function(r){return new(r||e)};static ɵdir=ye$2({type:e,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(r,o){r&2&&In(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return e})();var YM={capture:!0};var ZM=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var tm=`mat-ripple-loader-uninitialized`;var nm=`mat-ripple-loader-class-name`;var MD=`mat-ripple-loader-centered`;var Nc=`mat-ripple-loader-disabled`;var AD=(()=>{class e{_document=p$1(j$1);_animationsDisabled=yo();_globalRippleOptions=p$1(em,{optional:!0});_platform=p$1(Me);_ngZone=p$1(V);_injector=p$1(Z$2);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let n=p$1(at$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ZM.map(r=>n.listen(this._document,r,this._onInteraction,YM)))}ngOnDestroy(){let n=this._hosts.keys();for(let r of n)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(n,r){n.setAttribute(tm,this._globalRippleOptions?.namespace??``),(r.className||!n.hasAttribute(nm))&&n.setAttribute(nm,r.className||``),r.centered&&n.setAttribute(MD,``),r.disabled&&n.setAttribute(Nc,``)}setDisabled(n,r){let o=this._hosts.get(n);o?(o.target.rippleDisabled=r,!r&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(n))):r?n.setAttribute(Nc,``):n.removeAttribute(Nc)}_onInteraction=n=>{let r=dt$1(n);if(r instanceof HTMLElement){let o=r.closest(`[${tm}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(n){if(!this._document||this._hosts.has(n))return;n.querySelector(`.mat-ripple`)?.remove();let r=this._document.createElement(`span`);r.classList.add(`mat-ripple`,n.getAttribute(nm)),n.append(r);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??Bi.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Bi.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||n.hasAttribute(Nc),rippleConfig:{centered:n.hasAttribute(MD),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:a}}},c=new Vi(s,this._ngZone,r,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(n),this._hosts.set(n,{target:s,renderer:c,hasSetUpEvents:l}),n.removeAttribute(tm)}destroyRipple(n){let r=this._hosts.get(n);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(n))}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var kD=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵcmp=Fe$1({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(r,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var KM=new D(`MAT_BUTTON_CONFIG`);function OD(e){return e==null?void 0:Ii(e)}var rm=(()=>{class e{_elementRef=p$1(pe$2);_ngZone=p$1(V);_animationsDisabled=yo();_config=p$1(KM,{optional:!0});_focusMonitor=p$1(yc);_cleanupClick;_renderer=p$1(vn$1);_rippleLoader=p$1(AD);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(n){this._disableRipple=n,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(n){this._disabled=n,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(n){this.tabIndex=n}showProgress=ho(!1,{transform:Le$1});constructor(){p$1(Yt).load(kD);let n=this._elementRef.nativeElement;this._isAnchor=n.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(n,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(n=`program`,r){n?this._focusMonitor.focusVia(this._elementRef.nativeElement,n,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,n=>{this.disabled&&(n.preventDefault(),n.stopImmediatePropagation())}))}static ɵfac=function(r){return new(r||e)};static ɵdir=ye$2({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(r,o){r&2&&(pr(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),Di(o.color?`mat-`+o.color:``),In(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Le$1],disabled:[2,`disabled`,`disabled`,Le$1],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Le$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Le$1],tabIndex:[2,`tabIndex`,`tabIndex`,OD],_tabindex:[2,`tabindex`,`_tabindex`,OD],showProgress:[1,`showProgress`]}})}return e})();var QM=(()=>{class e extends rm{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(r){return new(r||e)};static ɵcmp=(function(){let n=[`*`,[[``,`progressIndicator`,``]]],r=[`*`,`[progressIndicator]`];function o(i,a){i&1&&(Dn$1(0,`div`,1),lt$2(1,1),En$1())}return Fe$1({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[mr],ngContentSelectors:r,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(hr(n),_n$2(0,`span`,0),lt$2(1),vi(2,o,2,0,`div`,1),_n$2(3,`span`,2)(4,`span`,3)),a&2&&(mi(2),yi(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();var XM=new D(`cdk-dir-doc`,{providedIn:`root`,factory:()=>p$1(j$1)});var JM=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function RD(e){let t=e?.toLowerCase()||``;return t===`auto`&&typeof navigator<`u`&&navigator?.language?JM.test(navigator.language)?`rtl`:`ltr`:t===`rtl`?`rtl`:`ltr`}var eA=(()=>{class e{get value(){return this.valueSignal()}valueSignal=Bt$2(`ltr`);change=new Ce;constructor(){let n=p$1(XM,{optional:!0});if(n){let r=n.body?n.body.dir:null,o=n.documentElement?n.documentElement.dir:null;this.valueSignal.set(RD(r||o||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(r){return new(r||e)};static ɵprov=B$2({token:e,factory:e.ɵfac})}return e})();var Tc=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵmod=Ne({type:e});static ɵinj=_e$1({})}return e})();var FD=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵmod=Ne({type:e});static ɵinj=_e$1({imports:[Tc]})}return e})();var LD=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var P7=(()=>{class e extends rm{get appearance(){return this._appearance}set appearance(n){this.setAppearance(n||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let n=tA(this._elementRef.nativeElement);n&&this.setAppearance(n)}setAppearance(n){if(n===this._appearance)return;let r=this._elementRef.nativeElement.classList,o=this._appearance?LD.get(this._appearance):null,i=LD.get(n);o&&r.remove(...o),r.add(...i),this._appearance=n}static ɵfac=function(r){return new(r||e)};static ɵcmp=(function(){let n=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],r=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(i,a){i&1&&(Dn$1(0,`div`,2),lt$2(1,3),En$1())}return Fe$1({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[mr],ngContentSelectors:r,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(hr(n),_n$2(0,`span`,0),lt$2(1),Dn$1(2,`span`,1),lt$2(3,1),En$1(),lt$2(4,2),vi(5,o,2,0,`div`,2),_n$2(6,`span`,3)(7,`span`,4)),a&2&&(In(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),mi(5),yi(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();function tA(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var j7=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵmod=Ne({type:e});static ɵinj=_e$1({imports:[FD,Tc]})}return e})();function lm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function nA(e){if(Array.isArray(e))return e}function rA(e){if(Array.isArray(e))return lm(e)}function oA(e,t){if(!(e instanceof t))throw new TypeError(`Cannot call a class as a function`)}function PD(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,hE(r.key),r)}}function iA(e,t,n){return t&&PD(e.prototype,t),n&&PD(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Rc(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=wm(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return a=c.done,c},e:function(c){s=!0,i=c},f:function(){try{a||n.return==null||n.return()}finally{if(s)throw i}}}}function x(e,t,n){return(t=hE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aA(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function sA(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}function cA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jD(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function b$1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jD(Object(n),!0).forEach(function(r){x(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jD(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vc(e,t){return nA(e)||sA(e,t)||wm(e,t)||cA()}function mt$1(e){return rA(e)||aA(e)||wm(e)||lA()}function uA(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw new TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function hE(e){var t=uA(e,`string`);return typeof t==`symbol`?t:t+``}function Pc(e){"@babel/helpers - typeof";return Pc=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(t){return typeof t}:function(t){return t&&typeof Symbol==`function`&&t.constructor===Symbol&&t!==Symbol.prototype?`symbol`:typeof t},Pc(e)}function wm(e,t){if(e){if(typeof e==`string`)return lm(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?lm(e,t):void 0}}var BD=function(){};var Sm={};var gE={};var bE=null;var vE={mark:BD,measure:BD};try{typeof window<`u`&&(Sm=window),typeof document<`u`&&(gE=document),typeof MutationObserver<`u`&&(bE=MutationObserver),typeof performance<`u`&&(vE=performance)}catch(e){}var VD=(Sm.navigator||{}).userAgent;var HD=VD===void 0?``:VD;var xn$1=Sm;var ee$1=gE;var $D=bE;var Mc=vE;xn$1.document;var Qt=!!ee$1.documentElement&&!!ee$1.head&&typeof ee$1.addEventListener==`function`&&typeof ee$1.createElement==`function`;var yE=~HD.indexOf(`MSIE`)||~HD.indexOf(`Trident/`);var Ac;var fA=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/;var mA=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i;var DE={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}};var pA={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`};var EE=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];var De=`classic`;var Wi=`duotone`;var _E=`sharp`;var IE=`sharp-duotone`;var wE=`chisel`;var SE=`etch`;var CE=`graphite`;var xE=`jelly`;var NE=`jelly-duo`;var TE=`jelly-fill`;var ME=`mosaic`;var AE=`notdog`;var kE=`notdog-duo`;var OE=`pixel`;var RE=`slab`;var FE=`slab-duo`;var LE=`slab-press`;var PE=`slab-press-duo`;var jE=`thumbprint`;var BE=`utility`;var VE=`utility-duo`;var HE=`utility-fill`;var $E=`vellum`;var UE=`whiteboard`;var hA=`Classic`;var gA=`Duotone`;var bA=`Sharp`;var vA=`Sharp Duotone`;var yA=`Chisel`;var DA=`Etch`;var EA=`Graphite`;var _A=`Jelly`;var IA=`Jelly Duo`;var wA=`Jelly Fill`;var SA=`Mosaic`;var CA=`Notdog`;var xA=`Notdog Duo`;var NA=`Pixel`;var TA=`Slab`;var MA=`Slab Duo`;var AA=`Slab Press`;var kA=`Slab Press Duo`;var OA=`Thumbprint`;var RA=`Utility`;var FA=`Utility Duo`;var LA=`Utility Fill`;var PA=`Vellum`;var jA=`Whiteboard`;var zE=[De,Wi,_E,IE,wE,SE,CE,xE,NE,TE,ME,AE,kE,OE,RE,FE,LE,PE,jE,BE,VE,HE,$E,UE];Ac={},x(x(x(x(x(x(x(x(x(x(Ac,De,hA),Wi,gA),_E,bA),IE,vA),wE,yA),SE,DA),CE,EA),xE,_A),NE,IA),TE,wA),x(x(x(x(x(x(x(x(x(x(Ac,ME,SA),AE,CA),kE,xA),OE,NA),RE,TA),FE,MA),LE,AA),PE,kA),jE,OA),BE,RA),x(x(x(x(Ac,VE,FA),HE,LA),$E,PA),UE,jA);var BA={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}};var VA={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}};var HA=/* @__PURE__ */ new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]);var $A={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}};var WE=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`];var UD={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}};var UA=[`kit`];x(x({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var YA={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}};var ZA={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}};var KA={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}};var zD={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}};var kc;var Oc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`};var QA=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];kc={},x(x(x(x(x(x(x(x(x(x(kc,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),x(x(x(x(x(x(x(x(x(x(kc,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),x(x(x(x(kc,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`);x(x({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var K1={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}};var Q1={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]};var um={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}};var GE=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,`faslr`,`faslpr`,`fasldr`,`faslpdr`,`fapr`,`fams`,`favs`,`fawsb`,`fatl`,`fans`,`fands`,`faes`,`fagt`,`fajr`,`fajfr`,`fajdr`,`facr`,`fausb`,`faudsb`,`faufsb`].concat(QA,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]);var J1=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`];var qE=[1,2,3,4,5,6,7,8,9,10];var ek=qE.concat([11,12,13,14,15,16,17,18,19,20]);var nk=[].concat(mt$1(Object.keys(Q1)),J1,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Oc.GROUP,Oc.SWAP_OPACITY,Oc.PRIMARY,Oc.SECONDARY]).concat(qE.map(function(e){return``.concat(e,`x`)})).concat(ek.map(function(e){return`w-`.concat(e)}));var rk={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}};var Zt=`___FONT_AWESOME___`;var dm=16;var YE=`fa`;var ZE=`svg-inline--fa`;var yr=`data-fa-i2svg`;var fm=`data-fa-pseudo-element`;var ok=`data-fa-pseudo-element-pending`;var Cm=`data-prefix`;var xm=`data-icon`;var WD=`fontawesome-i2svg`;var ik=`async`;var ak=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`];var KE=[`::before`,`::after`,`:before`,`:after`];var QE=(function(){try{return!0}catch(e){return!1}})();function Gi(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[De]}})}var XE=b$1({},DE);XE[De]=b$1(b$1(b$1(b$1({},{"fa-duotone":`duotone`}),DE[De]),UD.kit),UD[`kit-duotone`]);var sk=Gi(XE);var mm=b$1({},$A);mm[De]=b$1(b$1(b$1(b$1({},{duotone:`fad`}),mm[De]),zD.kit),zD[`kit-duotone`]);var GD=Gi(mm);var pm=b$1({},um);pm[De]=b$1(b$1({},pm[De]),KA.kit);var Nm=Gi(pm);var hm=b$1({},K1);hm[De]=b$1(b$1({},hm[De]),YA.kit);Gi(hm);var ck=fA;var JE=`fa-layers-text`;var lk=mA;Gi(b$1({},BA));var dk=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`];var om=pA;var fk=[].concat(mt$1(UA),mt$1(nk));var $i=xn$1.FontAwesomeConfig||{};function mk(e){var t=ee$1.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function pk(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}ee$1&&typeof ee$1.querySelector==`function`&&(qD=[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]],qD.forEach(function(e){var t=Vc(e,2),n=t[0],r=t[1],o=pk(mk(n));o!=null&&($i[r]=o)}));var qD;var e_={styleDefault:`solid`,familyDefault:De,cssPrefix:YE,replacementClass:ZE,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$i.familyPrefix&&($i.cssPrefix=$i.familyPrefix);var _o=b$1(b$1({},e_),$i);_o.autoReplaceSvg||(_o.observeMutations=!1);var C={};Object.keys(e_).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){_o[e]=n,Ui.forEach(function(r){return r(C)})},get:function(){return _o[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){_o.cssPrefix=t,Ui.forEach(function(n){return n(C)})},get:function(){return _o.cssPrefix}});xn$1.FontAwesomeConfig=C;var Ui=[];function hk(e){return Ui.push(e),function(){Ui.splice(Ui.indexOf(e),1)}}var Cn$1=dm;var xt$3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gk(e){if(!(!e||!Qt)){var t=ee$1.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=ee$1.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(a)>-1&&(r=i)}return ee$1.head.insertBefore(t,r),e}}var bk=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function YD(){for(var e=12,t=``;e-->0;)t+=bk[Math.random()*62|0];return t}function Io(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Tm(e){return e.classList?Io(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(t){return t})}function t_(e){return``.concat(e).replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function vk(e){return Object.keys(e||{}).reduce(function(t,n){return t+``.concat(n,`="`).concat(t_(e[n]),`" `)},``).trim()}function Hc(e){return Object.keys(e||{}).reduce(function(t,n){return t+``.concat(n,`: `).concat(e[n].trim(),`;`)},``)}function Mm(e){return e.size!==xt$3.size||e.x!==xt$3.x||e.y!==xt$3.y||e.rotate!==xt$3.rotate||e.flipX||e.flipY}function yk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:`translate(`.concat(n/2,` 256)`)},i=`translate(`.concat(t.x*32,`, `).concat(t.y*32,`) `),a=`scale(`.concat(t.size/16*(t.flipX?-1:1),`, `).concat(t.size/16*(t.flipY?-1:1),`) `),s=`rotate(`.concat(t.rotate,` 0 0)`);return{outer:o,inner:{transform:``.concat(i,` `).concat(a,` `).concat(s)},path:{transform:`translate(`.concat(r/2*-1,` -256)`)}}}function Dk(e){var t=e.transform,n=e.width,r=n===void 0?dm:n,o=e.height,i=o===void 0?dm:o,a=e.startCentered,s=a===void 0?!1:a,c=``;return s&&yE?c+=`translate(`.concat(t.x/Cn$1-r/2,`em, `).concat(t.y/Cn$1-i/2,`em) `):s?c+=`translate(calc(-50% + `.concat(t.x/Cn$1,`em), calc(-50% + `).concat(t.y/Cn$1,`em)) `):c+=`translate(`.concat(t.x/Cn$1,`em, `).concat(t.y/Cn$1,`em) `),c+=`scale(`.concat(t.size/Cn$1*(t.flipX?-1:1),`, `).concat(t.size/Cn$1*(t.flipY?-1:1),`) `),c+=`rotate(`.concat(t.rotate,`deg) `),c}var Ek=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function n_(){var e=YE,t=ZE,n=C.cssPrefix,r=C.replacementClass,o=Ek;if(n!==e||r!==t){var i=new RegExp(`\\.`.concat(e,`\\-`),`g`),a=new RegExp(`\\--`.concat(e,`\\-`),`g`),s=new RegExp(`\\.`.concat(t),`g`);o=o.replace(i,`.`.concat(n,`-`)).replace(a,`--`.concat(n,`-`)).replace(s,`.`.concat(r))}return o}var ZD=!1;function im(){C.autoAddCss&&!ZD&&(gk(n_()),ZD=!0)}var _k={mixout:function(){return{dom:{css:n_,insertCss:im}}},hooks:function(){return{beforeDOMElementCreation:function(){im()},beforeI2svg:function(){im()}}}};var Kt=xn$1||{};Kt[Zt]||(Kt[Zt]={});Kt[Zt].styles||(Kt[Zt].styles={});Kt[Zt].hooks||(Kt[Zt].hooks={});Kt[Zt].shims||(Kt[Zt].shims=[]);var ft$2=Kt[Zt];var r_=[];var o_=function(){ee$1.removeEventListener(`DOMContentLoaded`,o_),jc=1,r_.map(function(t){return t()})};var jc=!1;Qt&&(jc=(ee$1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee$1.readyState),jc||ee$1.addEventListener(`DOMContentLoaded`,o_));function Ik(e){Qt&&(jc?setTimeout(e,0):r_.push(e))}function qi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,i=o===void 0?[]:o;return typeof e==`string`?t_(e):`<`.concat(t,` `).concat(vk(r),`>`).concat(i.map(qi).join(``),`</`).concat(t,`>`)}function KD(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wk=function(t,n){return function(r,o,i,a){return t.call(n,r,o,i,a)}};var am=function(t,n,r,o){var i=Object.keys(t),a=i.length,s=o!==void 0?wk(n,o):n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<a;c++)l=i[c],u=s(u,t[l],l,t);return u};function i_(e){return mt$1(e).length!==1?null:e.codePointAt(0).toString(16)}function QD(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function gm(e,t){var r=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,o=r===void 0?!1:r,i=QD(t);typeof ft$2.hooks.addPack==`function`&&!o?ft$2.hooks.addPack(e,QD(t)):ft$2.styles[e]=b$1(b$1({},ft$2.styles[e]||{}),i),e===`fas`&&gm(`fa`,t)}var zi=ft$2.styles;var Sk=ft$2.shims;var a_=Object.keys(Nm);var Ck=a_.reduce(function(e,t){return e[t]=Object.keys(Nm[t]),e},{});var Am=null;var s_={};var c_={};var l_={};var u_={};var d_={};function xk(e){return~fk.indexOf(e)}function Nk(e,t){var n=t.split(`-`),r=n[0],o=n.slice(1).join(`-`);return r===e&&o!==``&&!xk(o)?o:null}var f_=function(){var t=function(i){return am(zi,function(a,s,c){return a[c]=am(s,i,{}),a},{})};s_=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2])i[2].filter(function(c){return typeof c==`number`}).forEach(function(c){o[c.toString(16)]=a});return o}),c_=t(function(o,i,a){if(o[a]=a,i[2])i[2].filter(function(c){return typeof c==`string`}).forEach(function(c){o[c]=a});return o}),d_=t(function(o,i,a){var s=i[2];return o[a]=a,s.forEach(function(c){o[c]=a}),o});var n=`far`in zi||C.autoFetchSvg,r=am(Sk,function(o,i){var a=i[0],s=i[1],c=i[2];return s===`far`&&!n&&(s=`fas`),typeof a==`string`&&(o.names[a]={prefix:s,iconName:c}),typeof a==`number`&&(o.unicodes[a.toString(16)]={prefix:s,iconName:c}),o},{names:{},unicodes:{}});l_=r.names,u_=r.unicodes,Am=$c(C.styleDefault,{family:C.familyDefault})};hk(function(e){Am=$c(e.styleDefault,{family:C.familyDefault})});f_();function km(e,t){return(s_[e]||{})[t]}function Tk(e,t){return(c_[e]||{})[t]}function vr(e,t){return(d_[e]||{})[t]}function m_(e){return l_[e]||{prefix:null,iconName:null}}function Mk(e){var t=u_[e],n=km(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Nn$1(){return Am}var p_=function(){return{prefix:null,iconName:null,rest:[]}};function Ak(e){var t=De,n=a_.reduce(function(r,o){return r[o]=``.concat(C.cssPrefix,`-`).concat(o),r},{});return zE.forEach(function(r){(e.includes(n[r])||e.some(function(o){return Ck[r].includes(o)}))&&(t=r)}),t}function $c(e){var n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,r=n===void 0?De:n,o=sk[r][e];if(r===Wi&&!e)return`fad`;var i=GD[r][e]||GD[r][o],a=e in ft$2.styles?e:null;return i||a||null}function kk(e){var t=[],n=null;return e.forEach(function(r){var o=Nk(C.cssPrefix,r);o?n=o:r&&t.push(r)}),{iconName:n,rest:t}}function XD(e){return e.sort().filter(function(t,n,r){return r.indexOf(t)===n})}var JD=GE.concat(WE);function Uc(e){var n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,r=n===void 0?!1:n,o=null,i=XD(e.filter(function(f){return JD.includes(f)})),a=XD(e.filter(function(f){return!JD.includes(f)})),l=Vc(i.filter(function(f){return o=f,!EE.includes(f)}),1)[0],u=l===void 0?null:l,d=Ak(i),m=b$1(b$1({},kk(a)),{},{prefix:$c(u,{family:d})});return b$1(b$1(b$1({},m),Lk({values:e,family:d,styles:zi,config:C,canonical:m,givenPrefix:o})),Ok(r,o,m))}function Ok(e,t,n){var r=n.prefix,o=n.iconName;if(e||!r||!o)return{prefix:r,iconName:o};var i=t===`fa`?m_(o):{},a=vr(r,o);return o=i.iconName||a||o,r=i.prefix||r,r===`far`&&!zi.far&&zi.fas&&!C.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:o}}var Rk=zE.filter(function(e){return e!==De||e!==Wi});var Fk=Object.keys(um).filter(function(e){return e!==De}).map(function(e){return Object.keys(um[e])}).flat();function Lk(e){var t=e.values,n=e.family,r=e.canonical,o=e.givenPrefix,i=o===void 0?``:o,a=e.styles,s=a===void 0?{}:a,c=e.config,l=c===void 0?{}:c,u=n===Wi,d=t.includes(`fa-duotone`)||t.includes(`fad`),m=l.familyDefault===`duotone`,f=r.prefix===`fad`||r.prefix===`fa-duotone`;if(!u&&(d||m||f)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Rk.includes(n)){if(Object.keys(s).find(function(v){return Fk.includes(v)})||l.autoFetchSvg)r.prefix=HA.get(n).defaultShortPrefixId,r.iconName=vr(r.prefix,r.iconName)||r.iconName}return(r.prefix===`fa`||i===`fa`)&&(r.prefix=Nn$1()||`fas`),r}var Pk=(function(){function e(){oA(this,e),this.definitions={}}return iA(e,[{key:`add`,value:function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=b$1(b$1({},n.definitions[s]||{}),a[s]),gm(s,a[s]);var c=Nm[De][s];c&&gm(c,a[s]),f_()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(i){var a=o[i],s=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(d){typeof d==`string`&&(n[s][d]=l)}),n[s][c]=l}),n}}])})();var eE=[];var Do$1={};var Eo={};var jk=Object.keys(Eo);function Bk(e,t){var n=t.mixoutsTo;return eE=e,Do$1={},Object.keys(Eo).forEach(function(r){jk.indexOf(r)===-1&&delete Eo[r]}),eE.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]==`function`&&(n[a]=o[a]),Pc(o[a])===`object`&&Object.keys(o[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=o[a][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(a){Do$1[a]||(Do$1[a]=[]),Do$1[a].push(i[a])})}r.provides&&r.provides(Eo)}),n}function bm(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return(Do$1[e]||[]).forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Dr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Do$1[e]||[]).forEach(function(i){i.apply(null,n)})}function Tn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Eo[e]?Eo[e].apply(null,t):void 0}function vm(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Nn$1();if(t)return t=vr(n,t)||t,KD(h_.definitions,n,t)||KD(ft$2.styles,n,t)}var h_=new Pk;var Vk=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,Dr(`noAuto`)};var ze$1={noAuto:Vk,config:C,dom:{i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qt?(Dr(`beforeI2svg`,t),Tn(`pseudoElements2svg`,t),Tn(`i2svg`,t)):Promise.reject(/* @__PURE__ */ new Error(`Operation requires a DOM of some kind.`))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Ik(function(){Uk({autoReplaceSvgRoot:n}),Dr(`watch`,t)})}},parse:{icon:function(t){if(t===null)return null;if(Pc(t)===`object`&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf(`fa-`)===0?t[1].slice(3):t[1],r=$c(t[0]);return{prefix:r,iconName:vr(r,n)||n}}if(typeof t==`string`&&(t.indexOf(``.concat(C.cssPrefix,`-`))>-1||t.match(ck))){var o=Uc(t.split(` `),{skipLookups:!0});return{prefix:o.prefix||Nn$1(),iconName:vr(o.prefix,o.iconName)||o.iconName}}if(typeof t==`string`){var i=Nn$1();return{prefix:i,iconName:vr(i,t)||t}}}},library:h_,findIconDefinition:vm,toHtml:qi};var Uk=function(){var n=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,r=n===void 0?ee$1:n;(Object.keys(ft$2.styles).length>0||C.autoFetchSvg)&&Qt&&C.autoReplaceSvg&&ze$1.dom.i2svg({node:r})};function zc(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Qt){var r=ee$1.createElement(`div`);return r.innerHTML=e.html,r.children}}}),e}function zk(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(Mm(a)&&n.found&&!r.found){var l={x:n.width/n.height/2,y:.5};o.style=Hc(b$1(b$1({},i),{},{"transform-origin":``.concat(l.x+a.x/16,`em `).concat(l.y+a.y/16,`em`)}))}return[{tag:`svg`,attributes:o,children:t}]}function Wk(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,i=e.symbol,a=i===!0?``.concat(t,`-`).concat(C.cssPrefix,`-`).concat(n):i;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:b$1(b$1({},o),{},{id:a}),children:r}]}]}function Gk(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(n){return n in e})}function Om(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,m=r.found?r:n,f=m.width,h=m.height,g=[C.replacementClass,i?``.concat(C.cssPrefix,`-`).concat(i):``].filter(function(We){return l.classes.indexOf(We)===-1}).filter(function(We){return We!==``||!!We}).concat(l.classes).join(` `),v={children:[],attributes:b$1(b$1({},l.attributes),{},{"data-prefix":o,"data-icon":i,class:g,role:l.attributes.role||`img`,viewBox:`0 0 `.concat(f,` `).concat(h)})};!Gk(l.attributes)&&!l.attributes[`aria-hidden`]&&(v.attributes[`aria-hidden`]=`true`),d&&(v.attributes[yr]=``);var y=b$1(b$1({},v),{},{prefix:o,iconName:i,main:n,mask:r,maskId:c,transform:a,symbol:s,styles:b$1({},l.styles)}),w=r.found&&n.found?Tn(`generateAbstractMask`,y)||{children:[],attributes:{}}:Tn(`generateAbstractIcon`,y)||{children:[],attributes:{}},ne=w.children,pt=w.attributes;return y.children=ne,y.attributes=pt,s?Wk(y):zk(y)}function tE(e){var t=e.content,n=e.width,r=e.height,o=e.transform,i=e.extra,a=e.watchable,s=a===void 0?!1:a,c=b$1(b$1({},i.attributes),{},{class:i.classes.join(` `)});s&&(c[yr]=``);var l=b$1({},i.styles);Mm(o)&&(l.transform=Dk({transform:o,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Hc(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function qk(e){var t=e.content,n=e.extra,r=b$1(b$1({},n.attributes),{},{class:n.classes.join(` `)}),o=Hc(n.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:`span`,attributes:r,children:[t]}),i}var sm=ft$2.styles;function ym(e){var t=e[0],n=e[1],i=Vc(e.slice(4),1)[0],a=null;return Array.isArray(i)?a={tag:`g`,attributes:{class:``.concat(C.cssPrefix,`-`).concat(om.GROUP)},children:[{tag:`path`,attributes:{class:``.concat(C.cssPrefix,`-`).concat(om.SECONDARY),fill:`currentColor`,d:i[0]}},{tag:`path`,attributes:{class:``.concat(C.cssPrefix,`-`).concat(om.PRIMARY),fill:`currentColor`,d:i[1]}}]}:a={tag:`path`,attributes:{fill:`currentColor`,d:i}},{found:!0,width:t,height:n,icon:a}}var Yk={found:!1,width:512,height:512};function Zk(e,t){!QE&&!C.showMissingIcons&&e&&console.error(`Icon with name "`.concat(e,`" and prefix "`).concat(t,`" is missing.`))}function Dm(e,t){var n=t;return t===`fa`&&C.styleDefault!==null&&(t=Nn$1()),new Promise(function(r,o){if(n===`fa`){var i=m_(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&sm[t]&&sm[t][e]){var a=sm[t][e];return r(ym(a))}Zk(e,t),r(b$1(b$1({},Yk),{},{icon:C.showMissingIcons&&e?Tn(`missingIconAbstract`)||{}:{}}))})}var nE=function(){};var Em=C.measurePerformance&&Mc&&Mc.mark&&Mc.measure?Mc:{mark:nE,measure:nE};var Hi=`FA "7.3.1"`;var Kk=function(t){return Em.mark(``.concat(Hi,` `).concat(t,` begins`)),function(){return g_(t)}};var g_=function(t){Em.mark(``.concat(Hi,` `).concat(t,` ends`)),Em.measure(``.concat(Hi,` `).concat(t),``.concat(Hi,` `).concat(t,` begins`),``.concat(Hi,` `).concat(t,` ends`))};var Rm={begin:Kk,end:g_};var Fc=function(){};function rE(e){return typeof(e.getAttribute?e.getAttribute(yr):null)==`string`}function Qk(e){var t=e.getAttribute?e.getAttribute(Cm):null,n=e.getAttribute?e.getAttribute(xm):null;return t&&n}function Xk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function Jk(){if(C.autoReplaceSvg===!0)return Lc.replace;return Lc[C.autoReplaceSvg]||Lc.replace}function eO(e){return ee$1.createElementNS(`http://www.w3.org/2000/svg`,e)}function tO(e){return ee$1.createElement(e)}function b_(e){var n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,r=n===void 0?e.tag===`svg`?eO:tO:n;if(typeof e==`string`)return ee$1.createTextNode(e);var o=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});return(e.children||[]).forEach(function(a){o.appendChild(b_(a,{ceFn:r}))}),o}function nO(e){var t=` `.concat(e.outerHTML,` `);return t=``.concat(t,`Font Awesome fontawesome.com `),t}var Lc={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(b_(o),n)}),n.getAttribute(yr)===null&&C.keepOriginalSource){var r=ee$1.createComment(nO(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Tm(n).indexOf(C.replacementClass))return Lc.replace(t);var o=new RegExp(``.concat(C.cssPrefix,`-.*`));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(` `).reduce(function(s,c){return c===C.replacementClass||c.match(o)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?n.removeAttribute(`class`):n.setAttribute(`class`,i.toNode.join(` `))}var a=r.map(function(s){return qi(s)}).join(`
`);n.setAttribute(yr,``),n.innerHTML=a}};function oE(e){e()}function v_(e,t){var n=typeof t==`function`?t:Fc;if(e.length===0)n();else{var r=oE;C.mutateApproach===ik&&(r=xn$1.requestAnimationFrame||oE),r(function(){var o=Jk(),i=Rm.begin(`mutate`);e.map(o),i(),n()})}}var Fm=!1;function y_(){Fm=!0}function _m(){Fm=!1}var Bc=null;function iE(e){if($D&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Fc:t,r=e.nodeCallback,o=r===void 0?Fc:r,i=e.pseudoElementsCallback,a=i===void 0?Fc:i,s=e.observeMutationsRoot,c=s===void 0?ee$1:s;Bc=new $D(function(l){if(!Fm){var u=Nn$1();Io(l).forEach(function(d){if(d.type===`childList`&&d.addedNodes.length>0&&!rE(d.addedNodes[0])&&(C.searchPseudoElements&&a(d.target),n(d.target)),d.type===`attributes`&&d.target.parentNode&&C.searchPseudoElements&&a([d.target],!0),d.type===`attributes`&&rE(d.target)&&~dk.indexOf(d.attributeName))if(d.attributeName===`class`&&Qk(d.target)){var m=Uc(Tm(d.target)),f=m.prefix,h=m.iconName;d.target.setAttribute(Cm,f||u),h&&d.target.setAttribute(xm,h)}else Xk(d.target)&&o(d.target)})}}),Qt&&Bc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rO(){Bc&&Bc.disconnect()}function oO(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(r,o){var i=o.split(`:`),a=i[0],s=i.slice(1);return a&&s.length>0&&(r[a]=s.join(`:`).trim()),r},{})),n}function iO(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText!==void 0?e.innerText.trim():``,o=Uc(Tm(e));return o.prefix||(o.prefix=Nn$1()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=Tk(o.prefix,e.innerText)||km(o.prefix,i_(e.innerText))),!o.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function aO(e){return Io(e.attributes).reduce(function(n,r){return n.name!==`class`&&n.name!==`style`&&(n[r.name]=r.value),n},{})}function sO(){return{iconName:null,prefix:null,transform:xt$3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function aE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=iO(e),r=n.iconName,o=n.prefix,i=n.rest,a=aO(e),s=bm(`parseNodeAttributes`,{},e);return b$1({iconName:r,prefix:o,transform:xt$3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:t.styleParser?oO(e):[],attributes:a}},s)}var cO=ft$2.styles;function D_(e){var t=C.autoReplaceSvg===`nest`?aE(e,{styleParser:!1}):aE(e);return~t.extra.classes.indexOf(JE)?Tn(`generateLayersText`,e,t):Tn(`generateSvgReplacementMutation`,e,t)}function lO(){return[].concat(mt$1(WE),mt$1(GE))}function sE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qt)return Promise.resolve();var n=ee$1.documentElement.classList,r=function(d){return n.add(``.concat(WD,`-`).concat(d))},o=function(d){return n.remove(``.concat(WD,`-`).concat(d))},i=C.autoFetchSvg?lO():EE.concat(Object.keys(cO));i.includes(`fa`)||i.push(`fa`);var a=[`.`.concat(JE,`:not([`).concat(yr,`])`)].concat(i.map(function(u){return`.`.concat(u,`:not([`).concat(yr,`])`)})).join(`, `);if(a.length===0)return Promise.resolve();var s=[];try{s=Io(e.querySelectorAll(a))}catch(u){}if(s.length>0)r(`pending`),o(`complete`);else return Promise.resolve();var c=Rm.begin(`onTree`),l=s.reduce(function(u,d){try{var m=D_(d);m&&u.push(m)}catch(f){QE||f.name===`MissingIcon`&&console.error(f)}return u},[]);return new Promise(function(u,d){Promise.all(l).then(function(m){v_(m,function(){r(`active`),r(`complete`),o(`pending`),typeof t==`function`&&t(),c(),u()})}).catch(function(m){c(),d(m)})})}function uO(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;D_(e).then(function(n){n&&v_([n],t)})}function dO(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:vm(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:vm(o||{})),e(r,b$1(b$1({},n),{},{mask:o}))}}var fO=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?xt$3:r,i=n.symbol,a=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,d=n.classes,m=d===void 0?[]:d,f=n.attributes,h=f===void 0?{}:f,g=n.styles,v=g===void 0?{}:g;if(t){var y=t.prefix,w=t.iconName,ne=t.icon;return zc(b$1({type:`icon`},t),function(){return Dr(`beforeDOMElementCreation`,{iconDefinition:t,params:n}),Om({icons:{main:ym(ne),mask:c?ym(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:w,transform:b$1(b$1({},xt$3),o),symbol:a,maskId:u,extra:{attributes:h,styles:v,classes:m}})})}};var mO={mixout:function(){return{icon:dO(fO)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=sE,n.nodeCallback=uO,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,o=r===void 0?ee$1:r,i=n.callback;return sE(o,i===void 0?function(){}:i)},t.generateSvgReplacementMutation=function(n,r){var o=r.iconName,i=r.prefix,a=r.transform,s=r.symbol,c=r.mask,l=r.maskId,u=r.extra;return new Promise(function(d,m){Promise.all([Dm(o,i),c.iconName?Dm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(f){var h=Vc(f,2),g=h[0],v=h[1];d([n,Om({icons:{main:g,mask:v},prefix:i,iconName:o,transform:a,symbol:s,maskId:l,extra:u,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.transform,s=n.styles,c=Hc(s);c.length>0&&(o.style=c);var l;return Mm(a)&&(l=Tn(`generateAbstractTransformGrouping`,{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:o}}}};var pO={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,i=o===void 0?[]:o;return zc({type:`layer`},function(){Dr(`beforeDOMElementCreation`,{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(c){a=a.concat(c.abstract)}):a=a.concat(s.abstract)}),[{tag:`span`,attributes:{class:[``.concat(C.cssPrefix,`-layers`)].concat(mt$1(i)).join(` `)},children:a}]})}}}};var hO={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.title,i=o===void 0?null:o,a=r.classes,s=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,d=u===void 0?{}:u;return zc({type:`counter`,content:n},function(){return Dr(`beforeDOMElementCreation`,{content:n,params:r}),qk({content:n.toString(),title:i,extra:{attributes:l,styles:d,classes:[``.concat(C.cssPrefix,`-layers-counter`)].concat(mt$1(s))}})})}}}};var gO={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,i=o===void 0?xt$3:o,a=r.classes,s=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,d=u===void 0?{}:u;return zc({type:`text`,content:n},function(){return Dr(`beforeDOMElementCreation`,{content:n,params:r}),tE({content:n,transform:b$1(b$1({},xt$3),i),extra:{attributes:l,styles:d,classes:[``.concat(C.cssPrefix,`-layers-text`)].concat(mt$1(s))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var o=r.transform,i=r.extra,a=null,s=null;if(yE){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/c,s=l.height/c}return Promise.resolve([n,tE({content:n.innerHTML,width:a,height:s,transform:o,extra:i,watchable:!0})])}}};var E_=new RegExp(`"`,`ug`);var cE=[1105920,1112319];var lE=b$1(b$1(b$1(b$1({},{FontAwesome:{normal:`fas`,400:`fas`}}),VA),rk),ZA);var Im=Object.keys(lE).reduce(function(e,t){return e[t.toLowerCase()]=lE[t],e},{});var bO=Object.keys(Im).reduce(function(e,t){var n=Im[t];return e[t]=n[900]||mt$1(Object.entries(n))[0][1],e},{});function vO(e){return i_(mt$1(e.replace(E_,``))[0]||``)}function yO(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),r=e.getPropertyValue(`content`).replace(E_,``),o=r.codePointAt(0),i=o>=cE[0]&&o<=cE[1],a=r.length===2?r[0]===r[1]:!1;return i||a||t}function DO(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),o=isNaN(r)?`normal`:r;return(Im[n]||{})[o]||bO[n]}function uE(e,t){var n=``.concat(ok).concat(t.replace(`:`,`-`));return new Promise(function(r,o){if(e.getAttribute(n)!==null)return r();var a=Io(e.children).filter(function(Nt){return Nt.getAttribute(fm)===t})[0],s=xn$1.getComputedStyle(e,t),c=s.getPropertyValue(`font-family`),l=c.match(lk),u=s.getPropertyValue(`font-weight`),d=s.getPropertyValue(`content`);if(a&&!l)return e.removeChild(a),r();if(l&&d!==`none`&&d!==``){var m=s.getPropertyValue(`content`),f=DO(c,u),h=vO(m),g=l[0].startsWith(`FontAwesome`),v=yO(s),y=km(f,h),w=y;if(g){var ne=Mk(h);ne.iconName&&ne.prefix&&(y=ne.iconName,f=ne.prefix)}if(y&&!v&&(!a||a.getAttribute(Cm)!==f||a.getAttribute(xm)!==w)){e.setAttribute(n,w),a&&e.removeChild(a);var pt=sO(),We=pt.extra;We.attributes[fm]=t,Dm(y,f).then(function(Nt){var M_=Om(b$1(b$1({},pt),{},{icons:{main:Nt,mask:p_()},prefix:f,iconName:w,extra:We,watchable:!0})),Wc=ee$1.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(Wc,e.firstChild):e.appendChild(Wc),Wc.outerHTML=M_.map(function(A_){return qi(A_)}).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function EO(e){return Promise.all([uE(e,`::before`),uE(e,`::after`)])}function _O(e){return e.parentNode!==document.head&&!~ak.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fm)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var IO=function(t){return!!t&&KE.some(function(n){return t.includes(n)})};var wO=function(t){if(!t)return[];var n=/* @__PURE__ */ new Set,r=t.split(/,(?![^()]*\))/).map(function(c){return c.trim()});r=r.flatMap(function(c){return c.includes(`(`)?c:c.split(`,`).map(function(l){return l.trim()})});var o=Rc(r),i;try{for(o.s();!(i=o.n()).done;){var a=i.value;if(IO(a)){var s=KE.reduce(function(c,l){return c.replace(l,``)},a);s!==``&&s!==`*`&&n.add(s)}}}catch(c){o.e(c)}finally{o.f()}return n};function dE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Qt){var n;if(t)n=e;else if(C.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=/* @__PURE__ */ new Set,o=Rc(document.styleSheets),i;try{for(o.s();!(i=o.n()).done;){var a=i.value;try{var s=Rc(a.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,d=Rc(wO(l.selectorText)),m;try{for(d.s();!(m=d.n()).done;){var f=m.value;r.add(f)}}catch(g){d.e(g)}finally{d.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){C.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: `.concat(a.href,` (`).concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){o.e(g)}finally{o.f()}if(!r.size)return;var h=Array.from(r).join(`, `);try{n=e.querySelectorAll(h)}catch(g){}}return new Promise(function(g,v){var y=Io(n).filter(_O).map(EO),w=Rm.begin(`searchPseudoElements`);y_(),Promise.all(y).then(function(){w(),_m(),g()}).catch(function(){w(),_m(),v()})})}}var SO={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=dE,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?ee$1:r;C.searchPseudoElements&&dE(o)}}};var fE=!1;var CO={mixout:function(){return{dom:{unwatch:function(){y_(),fE=!0}}}},hooks:function(){return{bootstrap:function(){iE(bm(`mutationObserverCallbacks`,{}))},noAuto:function(){rO()},watch:function(n){var r=n.observeMutationsRoot;fE?_m():iE(bm(`mutationObserverCallbacks`,{observeMutationsRoot:r}))}}}};var mE=function(t){return t.toLowerCase().split(` `).reduce(function(r,o){var i=o.toLowerCase().split(`-`),a=i[0],s=i.slice(1).join(`-`);if(a&&s===`h`)return r.flipX=!0,r;if(a&&s===`v`)return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case`grow`:r.size=r.size+s;break;case`shrink`:r.size=r.size-s;break;case`left`:r.x=r.x-s;break;case`right`:r.x=r.x+s;break;case`up`:r.y=r.y-s;break;case`down`:r.y=r.y+s;break;case`rotate`:r.rotate=r.rotate+s}return r},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})};var xO={mixout:function(){return{parse:{transform:function(n){return mE(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute(`data-fa-transform`);return o&&(n.transform=mE(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,i=n.containerWidth,a=n.iconWidth,s={transform:`translate(`.concat(i/2,` 256)`)},c=`translate(`.concat(o.x*32,`, `).concat(o.y*32,`) `),l=`scale(`.concat(o.size/16*(o.flipX?-1:1),`, `).concat(o.size/16*(o.flipY?-1:1),`) `),u=`rotate(`.concat(o.rotate,` 0 0)`),f={outer:s,inner:{transform:``.concat(c,` `).concat(l,` `).concat(u)},path:{transform:`translate(`.concat(a/2*-1,` -256)`)}};return{tag:`g`,attributes:b$1({},f.outer),children:[{tag:`g`,attributes:b$1({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b$1(b$1({},r.icon.attributes),f.path)}]}]}}}};var cm={x:0,y:0,width:`100%`,height:`100%`};function pE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function NO(e){return e.tag===`g`?e.children:[e]}Bk([_k,mO,pO,hO,gO,SO,CO,xO,{hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute(`data-fa-mask`),i=o?Uc(o.split(` `).map(function(a){return a.trim()})):p_();return i.prefix||(i.prefix=Nn$1()),n.mask=i,n.maskId=r.getAttribute(`data-fa-mask-id`),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.mask,s=n.maskId,c=n.transform,l=i.width,u=i.icon,d=a.width,m=a.icon,f=yk({transform:c,containerWidth:d,iconWidth:l}),h={tag:`rect`,attributes:b$1(b$1({},cm),{},{fill:`white`})},g=u.children?{children:u.children.map(pE)}:{},v={tag:`g`,attributes:b$1({},f.inner),children:[pE(b$1({tag:u.tag,attributes:b$1(b$1({},u.attributes),f.path)},g))]},y={tag:`g`,attributes:b$1({},f.outer),children:[v]},w=`mask-`.concat(s||YD()),ne=`clip-`.concat(s||YD()),pt={tag:`mask`,attributes:b$1(b$1({},cm),{},{id:w,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[h,y]},We={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:ne},children:NO(m)},pt]};return r.push(We,{tag:`rect`,attributes:b$1({fill:`currentColor`,"clip-path":`url(#`.concat(ne,`)`),mask:`url(#`.concat(w,`)`)},cm)}),{children:r,attributes:o}}}},{provides:function(t){var n=!1;xn$1.matchMedia&&(n=xn$1.matchMedia(`(prefers-reduced-motion: reduce)`).matches),t.missingIconAbstract=function(){var r=[],o={fill:`currentColor`},i={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};r.push({tag:`path`,attributes:b$1(b$1({},o),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var a=b$1(b$1({},i),{},{attributeName:`opacity`}),s={tag:`circle`,attributes:b$1(b$1({},o),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return n||s.children.push({tag:`animate`,attributes:b$1(b$1({},i),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:b$1(b$1({},a),{},{values:`1;0;1;1;0;1;`})}),r.push(s),r.push({tag:`path`,attributes:b$1(b$1({},o),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:n?[]:[{tag:`animate`,attributes:b$1(b$1({},a),{},{values:`1;0;0;0;0;1;`})}]}),n||r.push({tag:`path`,attributes:b$1(b$1({},o),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:b$1(b$1({},a),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:r}}}},{hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute(`data-fa-symbol`);return n.symbol=o===null?!1:o===``?!0:o,n}}}}],{mixoutsTo:ze$1});ze$1.noAuto;var __=ze$1.config;ze$1.library;var I_=ze$1.dom;var w_=ze$1.parse;ze$1.findIconDefinition;ze$1.toHtml;var S_=ze$1.icon;ze$1.layer;ze$1.text;ze$1.counter;var FO=(()=>{class e{defaultPrefix=`fas`;fallbackIcon=null;fixedWidth;set autoAddCss(n){__.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static ɵfac=function(r){return new(r||e)};static ɵprov=L$1({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var LO=(()=>{class e{definitions={};addIcons(...n){for(let r of n){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let o of r.icon[2])typeof o==`string`&&(this.definitions[r.prefix][o]=r)}}addIconPacks(...n){for(let r of n){let o=Object.keys(r).map(i=>r[i]);this.addIcons(...o)}}getIconDefinition(n,r){return n in this.definitions&&r in this.definitions[n]?this.definitions[n][r]:null}static ɵfac=function(r){return new(r||e)};static ɵprov=L$1({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var PO=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)};var jO=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")};var x_=e=>e!=null&&(e===90||e===180||e===270||e===`90`||e===`180`||e===`270`);var BO=e=>{let t=x_(e.rotate),n={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith(`spin`),"fa-spin":e.animation===`spin`||e.animation===`spin-reverse`,"fa-spin-pulse":e.animation===`spin-pulse`||e.animation===`spin-pulse-reverse`,"fa-spin-reverse":e.animation===`spin-reverse`||e.animation===`spin-pulse-reverse`,"fa-pulse":e.animation===`spin-pulse`||e.animation===`spin-pulse-reverse`,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`,[`fa-${e.size}`]:e.size!=null,[`fa-rotate-${e.rotate}`]:t,"fa-rotate-by":e.rotate!=null&&!t,[`fa-pull-${e.pull}`]:e.pull!=null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(n).map(r=>n[r]?r:null).filter(r=>r!=null)};var Lm=/* @__PURE__ */ new WeakSet;var C_=`fa-auto-css`;function VO(e,t,n){if(!t.autoAddCss||Lm.has(e))return;if(e.getElementById(C_)!=null){t.autoAddCss=!1,Lm.add(e);return}let r=e.createElement(`style`);r.setAttribute(`type`,`text/css`),r.setAttribute(`id`,C_),n&&r.setAttribute(`nonce`,n),r.innerHTML=I_.css();let o=e.head.childNodes,i=null;for(let a=o.length-1;a>-1;a--){let s=o[a],c=s.nodeName.toUpperCase();[`STYLE`,`LINK`].indexOf(c)>-1&&(i=s)}e.head.insertBefore(r,i),t.autoAddCss=!1,Lm.add(e)}var HO=e=>e.prefix!==void 0&&e.iconName!==void 0;var $O=(e,t)=>HO(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:t,iconName:e};var UO=(()=>{class e{stackItemSize=ho(`1x`);size=ho();_effect=qr(()=>{if(this.size())throw new Error(`fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.`)});static ɵfac=function(r){return new(r||e)};static ɵdir=ye$2({type:e,selectors:[[`fa-icon`,`stackItemSize`,``],[`fa-duotone-icon`,`stackItemSize`,``]],inputs:{stackItemSize:[1,`stackItemSize`],size:[1,`size`]}})}return e})();var zO=(()=>{class e{size=ho();classes=ec(()=>{let n=this.size();return ae$3(R$1({},n?{[`fa-${n}`]:!0}:{}),{"fa-stack":!0})});static ɵfac=function(r){return new(r||e)};static ɵcmp=(function(){return Fe$1({type:e,selectors:[[`fa-stack`]],hostVars:2,hostBindings:function(o,i){o&2&&Di(i.classes())},inputs:{size:[1,`size`]},ngContentSelectors:[`*`],decls:1,vars:0,template:function(o,i){o&1&&(hr(),lt$2(0))},encapsulation:2})})()}return e})();var sq=(()=>{class e{icon=Te$1();title=Te$1();animation=Te$1();mask=Te$1();flip=Te$1();size=Te$1();pull=Te$1();border=Te$1();inverse=Te$1();symbol=Te$1();rotate=Te$1();fixedWidth=Te$1();transform=Te$1();a11yRole=Te$1();renderedIconHTML=ec(()=>{let n=this.icon()??this.config.fallbackIcon;if(!n)return jO(),``;let r=this.findIconDefinition(n);if(!r)return``;let o=this.buildParams();VO(this.document,this.config,this.cspNonce);let i=S_(r,o);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});cspNonce=p$1(hn$1);document=p$1(j$1);sanitizer=p$1(Oi);config=p$1(FO);iconLibrary=p$1(LO);stackItem=p$1(UO,{optional:!0});stack=p$1(zO,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error(`FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.`)}findIconDefinition(n){let r=$O(n,this.config.defaultPrefix);if(`icon`in r)return r;return this.iconLibrary.getIconDefinition(r.prefix,r.iconName)??(PO(r),null)}buildParams(){let n=this.fixedWidth(),r={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof n==`boolean`?n:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},o=this.transform(),i=typeof o==`string`?w_.transform(o):o,a=this.mask(),s=a!=null?this.findIconDefinition(a):null,c={},l=this.a11yRole();l!=null&&(c.role=l);let u={};return r.rotate!=null&&!x_(r.rotate)&&(u[`--fa-rotate-angle`]=`${r.rotate}`),{title:this.title(),transform:i,classes:BO(r),mask:s??void 0,symbol:this.symbol(),attributes:c,styles:u}}static ɵfac=function(r){return new(r||e)};static ɵcmp=Fe$1({type:e,selectors:[[`fa-icon`]],hostAttrs:[1,`ng-fa-icon`],hostVars:2,hostBindings:function(r,o){r&2&&(Xs(`innerHTML`,o.renderedIconHTML(),Td),pr(`title`,o.title()??void 0))},inputs:{icon:[1,`icon`],title:[1,`title`],animation:[1,`animation`],mask:[1,`mask`],flip:[1,`flip`],size:[1,`size`],pull:[1,`pull`],border:[1,`border`],inverse:[1,`inverse`],symbol:[1,`symbol`],rotate:[1,`rotate`],fixedWidth:[1,`fixedWidth`],transform:[1,`transform`],a11yRole:[1,`a11yRole`]},outputs:{icon:`iconChange`,title:`titleChange`,animation:`animationChange`,mask:`maskChange`,flip:`flipChange`,size:`sizeChange`,pull:`pullChange`,border:`borderChange`,inverse:`inverseChange`,symbol:`symbolChange`,rotate:`rotateChange`,fixedWidth:`fixedWidthChange`,transform:`transformChange`,a11yRole:`a11yRoleChange`},decls:0,vars:0,template:function(r,o){},encapsulation:2})}return e})();var cq=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵmod=Ne({type:e});static ɵinj=_e$1({})}return e})();var N_=class{};function fq(e){return e&&typeof e.connect==`function`&&!(e instanceof xo$1)}var Yi=(function(e){return e[e.REPLACED=0]=`REPLACED`,e[e.INSERTED=1]=`INSERTED`,e[e.MOVED=2]=`MOVED`,e[e.REMOVED=3]=`REMOVED`,e})(Yi||{});var T_=class{viewCacheSize=20;_viewCache=[];applyChanges(t,n,r,o,i){t.forEachOperation((a,s,c)=>{let l,u;if(a.previousIndex==null){let d=()=>r(a,s,c);l=this._insertView(d,c,n,o(a)),u=l?Yi.INSERTED:Yi.REPLACED}else c==null?(this._detachAndCacheView(s,n),u=Yi.REMOVED):(l=this._moveView(s,c,n,o(a)),u=Yi.MOVED);i&&i({context:l?.context,operation:u,record:a})})}detach(){for(let t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,n,r,o){let i=this._insertViewFromCache(n,r);if(i){i.context.$implicit=o;return}let a=t();return r.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(t,n){let r=n.detach(t);this._maybeCacheView(r,n)}_moveView(t,n,r,o){let i=r.get(t);return r.move(i,n),i.context.$implicit=o,i}_maybeCacheView(t,n){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{let r=n.indexOf(t);r===-1?t.destroy():n.remove(r)}}_insertViewFromCache(t,n){let r=this._viewCache.pop();return r&&n.insert(r,t),r||null}};var je$2=Symbol(`FIELD_TREE`);function I$2(i){return typeof i==`function`&&i[je$2]===!0}var mn$2=new D(``);var ae$2=class{_box;_destroyed=new U$1;_resizeSubject=new U$1;_resizeObserver;_elementObservables=/* @__PURE__ */ new Map;constructor(d){this._box=d,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(d){return this._elementObservables.has(d)||this._elementObservables.set(d,new k$2(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(d,{box:this._box}),()=>{this._resizeObserver?.unobserve(d),t.unsubscribe(),this._elementObservables.delete(d)}}).pipe(ge$1(e=>e.filter(t=>t.target===d)),Ln$1(e=>e.length>0),EI({bufferSize:1,refCount:!0}),Ao(this._destroyed))),this._elementObservables.get(d)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var He$1=(()=>{class i{_cleanupErrorListener;_observers=/* @__PURE__ */ new Map;_ngZone=p$1(V);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new ae$2(r)),this._observers.get(r).observe(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var se$2=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=ye$2({type:i,selectors:[[`mat-label`]]})}return i})();var ut$2=new D(`MatError`);var ce$1=(()=>{class i{align=`start`;id=p$1(Zf).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||i)};static ɵdir=ye$2({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,r){t&2&&(Xs(`id`,r.id),pr(`align`,null),In(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var ht$2=new D(`MatPrefix`);var pt$2=new D(`MatSuffix`);var Qe$1=new D(`FloatingLabelParent`);var Ke$1=(()=>{class i{_elementRef=p$1(pe$2);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=p$1(He$1);_ngZone=p$1(V);_parent=p$1(Qe$1);_resizeSubscription=new te$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return gt$2(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||i)};static ɵdir=ye$2({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,r){t&2&&In(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function gt$2(i){let d=i;if(d.offsetParent!==null)return d.scrollWidth;let e=d.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Ue$1=`mdc-line-ripple--active`;var j=`mdc-line-ripple--deactivating`;var Ge$1=(()=>{class i{_elementRef=p$1(pe$2);_cleanupTransitionEnd;constructor(){let e=p$1(V),t=p$1(vn$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(j),e.add(Ue$1)}deactivate(){this._elementRef.nativeElement.classList.add(j)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(j);e.propertyName===`opacity`&&r&&t.remove(Ue$1,j)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||i)};static ɵdir=ye$2({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var We$1=(()=>{class i{_elementRef=p$1(pe$2);_ngZone=p$1(V);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`notch`];return Fe$1({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(s,f){if(s&1&&Lv(e,5),s&2){let y;Zx(y=Kx())&&(f._notch=y.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(s,f){s&2&&In(`mdc-notched-outline--notched`,f.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(s,f){s&1&&(hr(),_n$2(0,`div`,1),Dn$1(1,`div`,2,0),lt$2(3),En$1(),_n$2(4,`div`,3))},encapsulation:2})})()}return i})();var bt$3=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(t){return new(t||i)};static ɵdir=ye$2({type:i})}return i})();var xt$2=new D(`MatFormField`);var vt$2=new D(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var $e$1=`fill`;var yt$3=`auto`;var Ye$1=`fixed`;var _t$3=`translateY(-50%)`;var Xe$2=(()=>{class i{_elementRef=p$1(pe$2);_changeDetectorRef=p$1(oc);_platform=p$1(Me);_idGenerator=p$1(Zf);_ngZone=p$1(V);_defaults=p$1(vt$2,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return rr(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=s5(`iconPrefixContainer`);_textPrefixContainerSignal=s5(`textPrefixContainer`);_iconSuffixContainerSignal=s5(`iconSuffixContainer`);_textSuffixContainerSignal=s5(`textSuffixContainer`);_prefixSuffixContainers=ec(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=c5(se$2);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=q9(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||yt$3}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||$e$1;this._appearanceSignal.set(t)}_appearanceSignal=Bt$2($e$1);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ye$1}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ye$1}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new U$1;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=yo();constructor(){let e=this._defaults,t=p$1(eA);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),qr(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=I$2(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!I$2(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ec(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(ga$2([void 0,void 0]),ge$1(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),yI(),Ln$1(([[s,f],[y,R]])=>s!==y||f!==R)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!I$2(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(Ao(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),mI(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){u5({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ec(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(I$2(t)){let r=t();return e===`valid`?r.valid():e===`dirty`?r.dirty():e===`touched`?r.touched():e===`pending`?r.pending():e===`untouched`?!r.touched():e===`pristine`?!r.dirty():e===`invalid`?!r.valid():!1}else{let r=t;return e===`valid`?r.valid:e===`dirty`?r.dirty:e===`touched`?r.touched:e===`pending`?r.pending:e===`untouched`?r.untouched:e===`pristine`?r.pristine:e===`invalid`?r.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let s=this._hintChildren?this._hintChildren.find(y=>y.align===`start`):null,f=this._hintChildren?this._hintChildren.find(y=>y.align===`end`):null;s?e.push(s.id):this._hintLabel&&e.push(this._hintLabelId),f&&e.push(f.id)}else this._errorChildren&&e.push(...this._errorChildren.map(s=>s.id));let t=this._control.describedByIds,r;if(t){let s=this._describedByIds||e;r=e.concat(t.filter(f=>f&&!s.includes(f)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,s=this._textSuffixContainer?.nativeElement,f=e?.getBoundingClientRect().width??0,y=t?.getBoundingClientRect().width??0,R=r?.getBoundingClientRect().width??0,q=s?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${_t$3} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${f+y}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,f+y+R+q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],t=[`textPrefixContainer`],r=[`iconSuffixContainer`],s=[`textSuffixContainer`],f=[`textField`],y=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],R=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function q(o,a){o&1&&Mv(0,`span`,21)}function H(o,a){if(o&1&&(Ps(0,`label`,20),lt$2(1,1),vi(2,q,1,0,`span`,21),df()),o&2){let n=Gx(2);Tv(`floating`,n._shouldLabelFloat())(`monitorResize`,n._hasOutline())(`id`,n._labelId),pr(`for`,n._control.disableAutomaticLabeling?null:n._control.id),mi(2),yi(!n.hideRequiredMarker&&n._unwrapMaybeSignal(n._control.required)?2:-1)}}function K(o,a){if(o&1&&vi(0,H,3,5,`label`,20),o&2){let n=Gx();yi(n._hasFloatingLabel()?0:-1)}}function fe(o,a){o&1&&Mv(0,`div`,7)}function U(o,a){}function G(o,a){if(o&1&&vv(0,U,0,0,`ng-template`,13),o&2){Gx(2);let n=Xx(1);Tv(`ngTemplateOutlet`,n)}}function W(o,a){if(o&1&&(Ps(0,`div`,9),vi(1,G,1,1,null,13),df()),o&2){let n=Gx();Tv(`matFormFieldNotchedOutlineOpen`,n._shouldLabelFloat()),mi(),yi(n._forceDisplayInfixLabel()?-1:1)}}function Je(o,a){o&1&&(Ps(0,`div`,10,2),lt$2(2,2),df())}function et(o,a){o&1&&(Ps(0,`div`,11,3),lt$2(2,3),df())}function tt(o,a){}function nt(o,a){if(o&1&&vv(0,tt,0,0,`ng-template`,13),o&2){Gx();let n=Xx(1);Tv(`ngTemplateOutlet`,n)}}function it(o,a){o&1&&(Ps(0,`div`,14,4),lt$2(2,4),df())}function rt(o,a){o&1&&(Ps(0,`div`,15,5),lt$2(2,5),df())}function ot(o,a){o&1&&Mv(0,`div`,16)}function at(o,a){o&1&&(Ps(0,`div`,18),lt$2(1,6),df())}function lt(o,a){if(o&1&&(Ps(0,`mat-hint`,22),_N(1),df()),o&2){let n=Gx(2);Tv(`id`,n._hintLabelId),mi(),Kv(n.hintLabel)}}function dt(o,a){if(o&1&&(Ps(0,`div`,19),vi(1,lt,2,2,`mat-hint`,22),lt$2(2,7),Mv(3,`div`,23),lt$2(4,8),df()),o&2){let n=Gx();mi(),yi(n.hintLabel?1:-1)}}return Fe$1({type:i,selectors:[[`mat-form-field`]],contentQueries:function(a,n,l){if(a&1&&(Pv(l,n._labelChild,se$2,5),Fv(l,bt$3,5)(l,ht$2,5)(l,pt$2,5)(l,ut$2,5)(l,ce$1,5)),a&2){Qx();let u;Zx(u=Kx())&&(n._formFieldControl=u.first),Zx(u=Kx())&&(n._prefixChildren=u),Zx(u=Kx())&&(n._suffixChildren=u),Zx(u=Kx())&&(n._errorChildren=u),Zx(u=Kx())&&(n._hintChildren=u)}},viewQuery:function(a,n){if(a&1&&(jv(n._iconPrefixContainerSignal,e,5)(n._textPrefixContainerSignal,t,5)(n._iconSuffixContainerSignal,r,5)(n._textSuffixContainerSignal,s,5),Lv(f,5)(e,5)(t,5)(r,5)(s,5)(Ke$1,5)(We$1,5)(Ge$1,5)),a&2){Qx(4);let l;Zx(l=Kx())&&(n._textField=l.first),Zx(l=Kx())&&(n._iconPrefixContainer=l.first),Zx(l=Kx())&&(n._textPrefixContainer=l.first),Zx(l=Kx())&&(n._iconSuffixContainer=l.first),Zx(l=Kx())&&(n._textSuffixContainer=l.first),Zx(l=Kx())&&(n._floatingLabel=l.first),Zx(l=Kx())&&(n._notchedOutline=l.first),Zx(l=Kx())&&(n._lineRipple=l.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(a,n){a&2&&In(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._unwrapMaybeSignal(n._control.errorState))(`mat-form-field-disabled`,n._unwrapMaybeSignal(n._control.disabled))(`mat-form-field-autofilled`,n._unwrapMaybeSignal(n._control.autofilled))(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Jv([{provide:xt$2,useExisting:i},{provide:Qe$1,useExisting:i}])],ngContentSelectors:R,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(a,n){if(a&1&&(hr(y),vv(0,K,1,1,`ng-template`,null,0,LN),Ps(2,`div`,6,1),Ov(`click`,function(u){return n._control.onContainerClick(u)}),vi(4,fe,1,0,`div`,7),Ps(5,`div`,8),vi(6,W,2,2,`div`,9),vi(7,Je,3,0,`div`,10),vi(8,et,3,0,`div`,11),Ps(9,`div`,12),vi(10,nt,1,1,null,13),lt$2(11),df(),vi(12,it,3,0,`div`,14),vi(13,rt,3,0,`div`,15),df(),vi(14,ot,1,0,`div`,16),df(),Ps(15,`div`,17),vi(16,at,2,0,`div`,18)(17,dt,5,1,`div`,19),df()),a&2){let l,u=n._unwrapMaybeSignal(n._control.disabled);mi(2),In(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,u)(`mdc-text-field--invalid`,n._unwrapMaybeSignal(n._control.errorState)),mi(2),yi(!n._hasOutline()&&!u?4:-1),mi(2),yi(n._hasOutline()?6:-1),mi(),yi(n._hasIconPrefix?7:-1),mi(),yi(n._hasTextPrefix?8:-1),mi(2),yi(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),mi(2),yi(n._hasTextSuffix?12:-1),mi(),yi(n._hasIconSuffix?13:-1),mi(),yi(n._hasOutline()?-1:14),mi(),In(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let st=n._getSubscriptMessageType();mi(),yi((l=st)===`error`?16:l===`hint`?17:-1)}},dependencies:[Ke$1,We$1,kT,Ge$1,ce$1],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var Yn$1=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Ne({type:i});static ɵinj=_e$1({imports:[dD,Xe$2,Tc]})}return i})();var Xn$1=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static ɵfac=function(t){return new(t||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var Ze$1=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(d,e,t,r,s){this._defaultMatcher=d,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=s,e?rr(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let d=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==d&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(d){if(this.formField&&d?.isSignalErrorState)return d.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return d?.isErrorState(t,e)??!1}};var p=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new U$1;bulk={select:e=>this._select(e),deselect:e=>this._deselect(e),setSelection:e=>this._setSelection(e)};constructor(e=!1,t,o=!0,n){this._multiple=e,this._emitChanges=o,this.compareWith=n,t&&t.length&&(e?t.forEach(c=>this._markSelected(c)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){return this._select(e)}deselect(...e){return this._deselect(e)}setSelection(...e){return this._setSelection(e)}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();let t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_select(e){this._verifyValueAssignment(e),e.forEach(o=>this._markSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(e){this._verifyValueAssignment(e),e.forEach(o=>this._unmarkSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(e){this._verifyValueAssignment(e);let t=this.selected,o=new Set(e.map(c=>this._getConcreteValue(c)));e.forEach(c=>this._markSelected(c)),t.filter(c=>!o.has(this._getConcreteValue(c,o))).forEach(c=>this._unmarkSelected(c));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let o of t)if(this.compareWith(e,o))return o;return e}else return e}};var y$2=class{applyChanges(e,t,o,n,c){e.forEachOperation((d,l,m)=>{let s,i;if(d.previousIndex==null){let h=o(d,l,m);s=t.createEmbeddedView(h.templateRef,h.context,h.index),i=Yi.INSERTED}else m==null?(t.remove(l),i=Yi.REMOVED):(s=t.get(l),t.move(s,m),i=Yi.MOVED);c&&c({context:s?.context,operation:i,record:d})})}detach(){}};var I$1=(()=>{class a{_animationsDisabled=yo();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(o){return new(o||a)};static ɵcmp=Fe$1({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(o,n){o&2&&In(`mat-pseudo-checkbox-indeterminate`,n.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,n.state===`checked`)(`mat-pseudo-checkbox-disabled`,n.disabled)(`mat-pseudo-checkbox-minimal`,n.appearance===`minimal`)(`mat-pseudo-checkbox-full`,n.appearance===`full`)(`_mat-animation-noopable`,n._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(o,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return a})();var R=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[Tc]})}return a})();var ke=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(r){return new(r||n)(ct$2(vn$1),ct$2(pe$2))};static ɵdir=ye$2({type:n})}return n})();var st$1=(()=>{class n extends ke{static ɵfac=(()=>{let t;return function(i){return(t||(t=hd(n)))(i||n)}})();static ɵdir=ye$2({type:n,features:[mr]})}return n})();var Le=new D(``);var at={provide:Le,useExisting:$a$1(()=>Be),multi:!0};function lt$1(){let n=Wt$1()?Wt$1().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var ut$1=new D(``);var Be=(()=>{class n extends ke{_compositionMode;_composing=!1;constructor(t,r,i){super(t,r),this._compositionMode=i,this._compositionMode??=!lt$1()}writeValue(t){let r=t??``;this.setProperty(`value`,r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(r){return new(r||n)(ct$2(vn$1),ct$2(pe$2),ct$2(ut$1,8))};static ɵdir=ye$2({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(r,i){r&1&&Ov(`input`,function(s){return i._handleInput(s.target.value)})(`blur`,function(){return i.onTouched()})(`compositionstart`,function(){return i._compositionStart()})(`compositionend`,function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[Jv([at]),mr]})}return n})();function ue$1(n){return n==null||de$1(n)===0}function de$1(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var Y=new D(``);var ce=new D(``);var dt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var ie$1=class{static min(e){return ct$1(e)}static max(e){return ht$1(e)}static required(e){return Ue(e)}static requiredTrue(e){return pt$1(e)}static email(e){return ft$1(e)}static minLength(e){return gt$1(e)}static maxLength(e){return mt(e)}static pattern(e){return yt$2(e)}static nullValidator(e){return L()}static compose(e){return Ye(e)}static composeAsync(e){return Xe$1(e)}};function ct$1(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function ht$1(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Ue(n){return ue$1(n.value)?{required:!0}:null}function pt$1(n){return n.value===!0?null:{required:!0}}function ft$1(n){return ue$1(n.value)||dt.test(n.value)?null:{email:!0}}function gt$1(n){return e=>{let t=e.value?.length??de$1(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function mt(n){return e=>{let t=e.value?.length??de$1(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function yt$2(n){if(!n)return L;let e,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(ue$1(r.value))return null;let i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function L(n){return null}function He(n){return n!=null}function $e(n){return bi(n)?gt$3(n):n}function qe(n){let e={};return n.forEach(t=>{e=t!=null?R$1(R$1({},e),t):e}),Object.keys(e).length===0?null:e}function We(n,e){return e.map(t=>t(n))}function vt$1(n){return!n.validate}function ze(n){return n.map(e=>vt$1(e)?e:t=>e.validate(t))}function Ye(n){if(!n)return null;let e=n.filter(He);return e.length==0?null:function(t){return qe(We(t,e))}}function he$1(n){return n!=null?Ye(ze(n)):null}function Xe$1(n){if(!n)return null;let e=n.filter(He);return e.length==0?null:function(t){let r=We(t,e).map($e);return fI(r).pipe(ge$1(qe))}}function pe$1(n){return n!=null?Xe$1(ze(n)):null}function we(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Ze(n){return n._rawValidators}function Ke(n){return n._rawAsyncValidators}function oe$2(n){return n?Array.isArray(n)?n:[n]:[]}function B$1(n,e){return Array.isArray(n)?n.includes(e):n===e}function Re(n,e){let t=oe$2(e);return oe$2(n).forEach(i=>{B$1(t,i)||t.push(i)}),t}function xe$1(n,e){return oe$2(e).filter(t=>!B$1(n,t))}var U=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=he$1(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=pe$1(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var m=class extends U{name;get formDirective(){return null}get path(){return null}};var I=`VALID`;var G=`INVALID`;var A$1=`PENDING`;var S=`DISABLED`;var y$1=class{};var H$1=class extends y$1{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var O=class extends y$1{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var w=class extends y$1{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var b=class extends y$1{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var $$1=class extends y$1{source;constructor(e){super(),this.source=e}};var v=class extends y$1{source;constructor(e){super(),this.source=e}};function fe$1(n){return(X(n)?n.validators:n)||null}function _t$2(n){return Array.isArray(n)?he$1(n):n||null}function ge(n,e){return(X(e)?e.asyncValidators:n)||null}function Ct(n){return Array.isArray(n)?pe$1(n):n||null}function X(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function Qe(n,e,t){let r=n.controls;if(!(e?Object.keys(r):r).length)throw new _(1e3,``);if(!et(r,t))throw new _(1001,``)}function Je(n,e,t){n._forEachChild((r,i)=>{if(t[i]===void 0)throw new _(-1002,``)})}var Vt$1=Symbol();var M=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Bt$2(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this[Vt$1]=!0,this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return tc(this.statusReactive)}set status(e){tc(()=>this.statusReactive.set(e))}_status=ec(()=>this.statusReactive());statusReactive=Bt$2(void 0);get valid(){return this.status===I}get invalid(){return this.status===G}get pending(){return this.status===A$1}get disabled(){return this.status===S}get enabled(){return this.status!==S}get errors(){return tc(this.errorsReactive)}set errors(e){tc(()=>this.errorsReactive.set(e))}_errors=ec(()=>this.errorsReactive());errorsReactive=Bt$2(null);get pristine(){return tc(this.pristineReactive)}set pristine(e){tc(()=>this.pristineReactive.set(e))}_pristine=ec(()=>this.pristineReactive());pristineReactive=Bt$2(!0);get dirty(){return!this.pristine}get touched(){return tc(this.touchedReactive)}set touched(e){tc(()=>this.touchedReactive.set(e))}_touched=ec(()=>this.touchedReactive());touchedReactive=Bt$2(!1);get untouched(){return!this.touched}_events=new U$1;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe$1(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe$1(e,this._rawAsyncValidators))}hasValidator(e){return B$1(this._rawValidators,e)}hasAsyncValidator(e){return B$1(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let r=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(ae$3(R$1({},e),{sourceControl:r})),t&&e.emitEvent!==!1&&this._events.next(new w(!0,r))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=e.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:r})}),e.onlySelf||this._parent?._updateTouched(e,r),t&&e.emitEvent!==!1&&this._events.next(new w(!1,r))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let r=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(ae$3(R$1({},e),{sourceControl:r})),t&&e.emitEvent!==!1&&this._events.next(new O(!1,r))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=e.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,r),t&&e.emitEvent!==!1&&this._events.next(new O(!0,r))}markAsPending(e={}){this.status=A$1;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(ae$3(R$1({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(ae$3(R$1({},e),{onlySelf:!0}))}),this._updateValue();let r=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H$1(this.value,r)),this._events.next(new b(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ae$3(R$1({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(r=>{r.enable(ae$3(R$1({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(ae$3(R$1({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===A$1)&&this._runAsyncValidator(r,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H$1(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(ae$3(R$1({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=A$1,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let r=$e(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){let r=t?this.get(t):this;return r?.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,r){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||r)&&this._events.next(new b(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,r)}_initObservables(){this.valueChanges=new Ce,this.statusChanges=new Ce}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A$1)?A$1:this._anyControlsHaveStatus(G)?G:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,e.onlySelf||this._parent?._updatePristine(e,t),i&&this._events.next(new O(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new w(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=_t$2(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ct(this._rawAsyncValidators)}_updateHasRequiredValidator(){tc(()=>this._hasRequired.set(this.hasValidator(ie$1.required)))}};function et(n,e){return Object.hasOwn(n,e)}function Dt(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function At$2(n,e,t,r){switch(t){case`name`:n.setAttribute(e,t,r);break;case`disabled`:case`readonly`:case`required`:r?n.setAttribute(e,t,``):n.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:r!==void 0?n.setAttribute(e,t,r.toString()):n.removeAttribute(e,t)}}var se$1=class{kind;context;control;message;constructor({kind:e,context:t,control:r}){this.kind=e,this.context=t,this.control=r}};var bt$2=new D(``);var me$1=new D(``,{factory:()=>ye$1});var ye$1=`always`;function Mt(n,e){return[...e.path,n]}function Et$1(n,e,t=ye$1){Z$1(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t===`always`)&&e.valueAccessor.setDisabledState?.(n.disabled),It$1(n,e),Ft$1(n,e),St(n,e),Nt$1(n,e)}function Te(n,e,t=!0){let r=()=>{};e?.valueAccessor?.registerOnChange(r),e?.valueAccessor?.registerOnTouched(r),W(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function q(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Nt$1(n,e){if(e.valueAccessor.setDisabledState){let t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Z$1(n,e){let t=Ze(n);e.validator!==null?n.setValidators(we(t,e.validator)):typeof t==`function`&&n.setValidators([t]);let r=Ke(n);e.asyncValidator!==null?n.setAsyncValidators(we(r,e.asyncValidator)):typeof r==`function`&&n.setAsyncValidators([r]);let i=()=>n.updateValueAndValidity();q(e._rawValidators,i),q(e._rawAsyncValidators,i)}function W(n,e){let t=!1;if(n!==null){if(e.validator!==null){let i=Ze(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==e.validator);o.length!==i.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let i=Ke(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==e.asyncValidator);o.length!==i.length&&(t=!0,n.setAsyncValidators(o))}}}let r=()=>{};return q(e._rawValidators,r),q(e._rawAsyncValidators,r),t}function It$1(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&tt(n,e)})}function St(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&tt(n,e),n.updateOn!==`submit`&&n.markAsTouched()})}function tt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ft$1(n,e){let t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function nt(n,e){Z$1(n,e)}function Ot$1(n,e){return W(n,e)}function wt$1(n,e){if(!Object.hasOwn(n,`model`))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Rt(n){return Object.getPrototypeOf(n.constructor)===st$1}function rt(n,e){n._syncPendingControls(),e.forEach(t=>{let r=t.control;r.updateOn===`submit`&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function xt$1(n,e){if(!e)return null;let t,r,i;return e.forEach(o=>{o.constructor===Be?t=o:Rt(o)?r=o:i=o}),i||r||t||null}function Tt$1(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Pt$1=(()=>{class n{_validator=L;_onChange;get _enabled(){return this.enabledReactive()}enabledReactive=Bt$2(void 0);ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue),i=this.enabled(r);this.enabledReactive.set(i),this._validator=i?this.createValidator(r):L,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(r){return new(r||n)};static ɵdir=ye$2({type:n,features:[io]})}return n})();var jt={provide:Y,useExisting:$a$1(()=>it),multi:!0};var it=(()=>{class n extends Pt$1{required;inputName=`required`;normalizeInput=Le$1;createValidator=t=>Ue;enabled(t){return t}static ɵfac=(()=>{let t;return function(i){return(t||(t=hd(n)))(i||n)}})();static ɵdir=ye$2({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(r,i){r&2&&pr(`required`,i._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[Jv([jt]),mr]})}return n})();var Gt={provide:bt$2,useFactory:()=>{let n=p$1(E,{self:!0});return{setParseErrors:e=>{n.setParseErrorSource(e)},set onReset(e){n.onReset=e}}}};var E=class extends U{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof v&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=xt$1(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;pendingCustomValue=void 0;hasPendingCustomValue=!1;constructor(e,t,r){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=r,this.injector?.get(Be$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.control,t=this.injector?.get(oc);if(!e||!t)return;Z$1(e,this);let r=t.markForCheck.bind(t);if(this.subscription=new te$1,this.subscription.add(()=>this.discardPendingCustomValue(e)),typeof e.registerOnChange==`function`){let i=(o,s)=>{this.discardPendingCustomValue(e),s&&this.viewToModelUpdate(o),r()};e.registerOnChange(i),this.subscription.add(()=>e._unregisterOnChange(i))}this.subscription.add(e.valueChanges.subscribe(r)),this.subscription.add(e.statusChanges.subscribe(r)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=e.events.subscribe(i=>{i instanceof v&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&e.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(i=>{let o=this.control;o&&(o._pendingValue=i,o._pendingChange=!0,o._pendingDirty=!0,this.pendingCustomValue=i,this.hasPendingCustomValue=!0,o.updateOn===`change`&&this.updateControlFromCustom(o))}),e.listenToCustomControlOutput(`touch`,()=>{let i=this.control;i&&(i._pendingTouched=!0,i.updateOn===`blur`&&i._pendingChange&&this.updateControlFromCustom(i),i.updateOn!==`submit`&&i.markAsTouched())}),this.customControlBindings={},this.isNativeFormElement=Dt(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof it))}updateControlFromCustom(e){let t=e._pendingValue;e._pendingChange=!1,this.clearPendingCustomValue(),this.customControlBindings&&(this.customControlBindings.value=t),e._pendingDirty&&e.markAsDirty(),e.setValue(t,{emitModelToViewChange:!1}),this.viewToModelUpdate(e.value)}discardPendingCustomValue(e){this.hasPendingCustomValue&&(this.customControlBindings&&(this.customControlBindings.value=this.pendingCustomValue),this.clearPendingCustomValue(),e._pendingValue=e.value,e._pendingChange=!1,e._pendingDirty=!1)}clearPendingCustomValue(){this.pendingCustomValue=void 0,this.hasPendingCustomValue=!1}ngControlUpdate(e){if(!this.isCustomControlBased)return;let t=this.control,r=this.customControlBindings;if(!t||!r)return;this.hasPendingCustomValue&&!t._pendingChange&&(r.value=this.pendingCustomValue,this.clearPendingCustomValue()),t._status(),t._errors(),Object.is(r.value,t.value)||(this.discardPendingCustomValue(t),r.value=t.value,e.setCustomControlModelInput(t.value)),this.bindControlProperty(e,r,`touched`,t.touched),this.bindControlProperty(e,r,`dirty`,t.dirty),this.bindControlProperty(e,r,`valid`,t.valid),this.bindControlProperty(e,r,`invalid`,t.invalid),this.bindControlProperty(e,r,`pending`,t.pending),this.bindControlProperty(e,r,`disabled`,t.disabled);let i=this.requiredValidatorViaDi;if(i){let s=this.isRequired;e.setInputOnDirectives(`required`,s,(K,Q)=>Q!==i&&K!==s)}else this.bindControlProperty(e,r,`required`,this.isRequired);let o=t.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);e.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}bindControlProperty(e,t,r,i){if(t[r]===i)return;t[r]=i;let o=e.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r===`disabled`||r===`required`)&&this.renderer&&At$2(this.renderer,e.nativeElement,r,i)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([r,i])=>new se$1({context:i,kind:r,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,r=ec(()=>{let i=e();return i.length===0?null:i.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=()=>(t=tc(r),t),qr(()=>{let i=r();i!==t&&(t=i,this.control?.updateValueAndValidity({emitEvent:!1}),this.injector?.get(oc)?.markForCheck())},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var z=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var mn$1=(()=>{class n extends z{constructor(t){super(t)}static ɵfac=function(r){return new(r||n)(ct$2(E,2))};static ɵdir=ye$2({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(r,i){r&2&&In(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)},standalone:!1,features:[mr]})}return n})();var yn$1=(()=>{class n extends z{constructor(t){super(t)}static ɵfac=function(r){return new(r||n)(ct$2(m,10))};static ɵdir=ye$2({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(r,i){r&2&&In(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)(`ng-submitted`,i.isSubmitted)},standalone:!1,features:[mr]})}return n})();var N=class extends M{constructor(e,t,r){super(fe$1(t),ge(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this._find(e)||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){tc(()=>{Je(this,!0,e),Object.keys(e).forEach(r=>{Qe(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(r=>{let i=this._find(r);i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e?e[i]:null,ae$3(R$1({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new v(this))}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,o)=>{r=t(r,i,o)}),r}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return et(this.controls,e)?this.controls[e]:null}};var ae$1=class extends N{};var kt={provide:m,useExisting:$a$1(()=>Lt$2)};var F=Promise.resolve();var Lt$2=(()=>{class n extends m{callSetDisabledState;get submitted(){return tc(this.submittedReactive)}_submitted=ec(()=>this.submittedReactive());submittedReactive=Bt$2(!1);_directives=/* @__PURE__ */ new Set;form;ngSubmit=new Ce;options;constructor(t,r,i){super(),this.callSetDisabledState=i,this.form=new N({},he$1(t),pe$1(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){F.then(()=>{t.control=this._findContainer(t.path).registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){F.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){F.then(()=>{let r=this._findContainer(t.path),i=new N({});nt(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){F.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){F.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),rt(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new $$1(this.control)),t?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static ɵfac=function(r){return new(r||n)(ct$2(Y,10),ct$2(ce,10),ct$2(me$1,8))};static ɵdir=ye$2({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(r,i){r&1&&Ov(`submit`,function(s){return i.onSubmit(s)})(`reset`,function(){return i.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Jv([kt]),mr]})}return n})();function Pe(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function je$1(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var k$1=class extends M{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,r){super(fe$1(t),ge(r,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(t)&&(t.nonNullable||t.initialValueIsDefault)&&(je$1(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){tc(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new v(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){je$1(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Bt$1=n=>n instanceof k$1;var Ut=(()=>{class n extends m{callSetDisabledState;get submitted(){return tc(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=ec(()=>this._submittedReactive());_submittedReactive=Bt$2(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,r,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){if(!this.form)throw new _(1052,!1);Object.hasOwn(t,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let r=this.form.get(t.path);if(!r)throw new _(-1055,!1);return t._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){Te(t.control||null,t,!1),Tt$1(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,r){this.form.get(t.path).setValue(r)}onReset(){this.resetForm()}resetForm(t=void 0,r={}){this.form.reset(t,r),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,rt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new $$1(this.control)),t?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,i=this.form.get(t.path);r!==i&&(Te(r||null,t),Bt$1(i)&&t._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);nt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let r=this.form?.get(t.path);r&&Ot$1(r,t)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Z$1(this.form,this),this._oldForm&&W(this._oldForm,this)}static ɵfac=function(r){return new(r||n)(ct$2(Y,10),ct$2(ce,10),ct$2(me$1,8))};static ɵdir=ye$2({type:n,features:[mr,io]})}return n})();var Ht$1={provide:m,useExisting:$a$1(()=>$t)};var $t=(()=>{class n extends Ut{form=null;ngSubmit=new Ce;get control(){return this.form}static ɵfac=(()=>{let t;return function(i){return(t||(t=hd(n)))(i||n)}})();static ɵdir=ye$2({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(r,i){r&1&&Ov(`submit`,function(s){return i.onSubmit(s)})(`reset`,function(){return i.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Jv([Ht$1]),mr]})}return n})();var _n$1=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵdir=ye$2({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var le$1=class extends M{constructor(e,t,r){super(fe$1(t),ge(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){Array.isArray(e)?e.forEach(r=>{this.controls.push(r),this._registerControl(r)}):(this.controls.push(e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){tc(()=>{Je(this,!1,e),e.forEach((r,i)=>{Qe(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(e.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,i)=>{r.reset(e[i],ae$3(R$1({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new v(this))}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,r)=>r._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var ot=new D(``);var qt={provide:E,useExisting:$a$1(()=>Wt)};var Wt=(()=>{class n extends E{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new Ce;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,r,i,o,s,K,Q){super(Q,K,o),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}_setupWithForm(t,r){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Et$1(t,this,r))}ngOnChanges(t){this._added||this._setUpControl(),wt$1(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Mt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){if(this.isCustomControlBased){if(!this.control){let r=this.formDirective?.getControl(this);if(!r)return;this.control=r}super.ngControlUpdate(t)}}static ɵfac=function(r){return new(r||n)(ct$2(m,13),ct$2(Y,10),ct$2(ce,10),ct$2(Le,10),ct$2(ot,8),ct$2(vn$1,8),ct$2(Z$2,8))};static ɵdir=ye$2({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[Jv([qt,Gt]),mr,io,WC(null)]})}return n})();var zt$1=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵmod=Ne({type:n});static ɵinj=_e$1({})}return n})();function Ge(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Cn=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,r=null){let i=this._reduceControls(t),o={};return Ge(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new N(i,o)}record(t,r=null){return new ae$1(this._reduceControls(t),r)}control(t,r,i){let o={};return this.useNonNullable?(Ge(r)?o=r:(o.validators=r,o.asyncValidators=i),new k$1(t,ae$3(R$1({},o),{nonNullable:!0}))):new k$1(t,r,i)}array(t,r,i){return new le$1(t.map(s=>this._createControl(s)),r,i)}_reduceControls(t){let r={};return Object.keys(t).forEach(i=>{r[i]=this._createControl(t[i])}),r}_createControl(t){if(t instanceof k$1)return t;if(t instanceof M)return t;if(Array.isArray(t)){let r=t[0],i=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,i,o)}else return this.control(t)}static ɵfac=function(r){return new(r||n)};static ɵprov=B$2({token:n,factory:n.ɵfac})}return n})();var Vn$1=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ot,useValue:t.warnOnNgModelWithFormControl??`always`},{provide:me$1,useValue:t.callSetDisabledState??ye$1}]}}static ɵfac=function(r){return new(r||n)};static ɵmod=Ne({type:n});static ɵinj=_e$1({imports:[zt$1]})}return n})();function H(i){i||(i=p$1(Be$1));let a=new k$2(c=>{if(i.destroyed){c.next();return}return i.onDestroy(c.next.bind(c))});return c=>c.pipe(Ao(a))}function f4(i,a){let c={};for(let e of Object.keys(i))e!==a&&(c[e]=i[e]);return c}var V4=class{state=Bt$2({});hasAny=ec(()=>Object.keys(this.state()).length>0);isLoading(i){return this.state()[i]!==void 0}get(i){return this.state()[i]}set(i,a){this.state.update(c=>ae$3(R$1({},c),{[i]:a}))}clear(i){this.state.update(a=>f4(a,i))}clearIfOwner(i,a){this.state.update(c=>c[i]===a?f4(c,i):c)}};var p4=class{};var U4=class G2{handle(c){return c.key}static ɵfac=function(e){return new(e||G2)};static ɵprov=L$1({token:G2,factory:G2.ɵfac})};var b1=class{};var W4=class d2 extends b1{compile(c,e){return c}compileTranslations(c,e){return c}static ɵfac=(()=>{let c;return function(l){return(c||(c=hd(d2)))(l||d2)}})();static ɵprov=L$1({token:d2,factory:d2.ɵfac})};var w1=class{};var q4=class h2 extends w1{getTranslation(c){return el({})}static ɵfac=(()=>{let c;return function(l){return(c||(c=hd(h2)))(l||h2)}})();static ɵprov=L$1({token:h2,factory:h2.ɵfac})};function j2(i,a){if(i===a)return!0;if(i===null||a===null)return!1;if(i!==i&&a!==a)return!0;if(i instanceof Date||a instanceof Date)return i instanceof Date&&a instanceof Date&&j2(i.getTime(),a.getTime());let c=typeof i,e=typeof a,l;if(c==e&&c==`object`)if(Array.isArray(i)){if(!Array.isArray(a))return!1;if((l=i.length)==a.length){for(let s=0;s<l;s++)if(!j2(i[s],a[s]))return!1;return!0}}else{if(Array.isArray(a))return!1;if(A(i)&&A(a)){let s=Object.create(null);for(let t in i){if(!j2(i[t],a[t]))return!1;s[t]=!0}for(let t in a)if(!(t in s)&&typeof a[t]<`u`)return!1;return!0}}return!1}function k(i){return typeof i<`u`&&i!==null}function x1(i){return i!==void 0}function A(i){return M2(i)&&!Z(i)&&i!==null}function M2(i){return typeof i==`object`&&i!==null}function Z(i){return Array.isArray(i)}function Y2(i){return typeof i==`string`}function G4(i){return typeof i==`function`}function K2(i){if(Z(i))return i.map(a=>K2(a));if(A(i)){let a={};return Object.keys(i).forEach(c=>{a[c]=K2(i[c])}),a}else return i}function _1(i,a){if(!M2(i))return K2(a);let c=K2(i);return M2(c)&&M2(a)&&Object.keys(a).forEach(e=>{A(a[e])?e in i?c[e]=_1(i[e],a[e]):Object.assign(c,{[e]:a[e]}):Object.assign(c,{[e]:a[e]})}),c}function d4(i,a){let c=i,e=a,l=a.split(`.`);a=``;do{a+=l.shift();let s=!l.length;if(k(i)){if(A(i)&&x1(i[a])&&(A(i[a])||Z(i[a])||s)){i=i[a],a=``;continue}if(Z(i)){if(a===`length`&&s){i=i.length,a=``;continue}if(/^\d+$/.test(a)){let t=parseInt(a,10);if(x1(i[t])&&(A(i[t])||Z(i[t])||s)){i=i[t],a=``;continue}}}}if(s){i=void 0;continue}a+=`.`}while(l.length);return typeof i>`u`&&A(c)&&x1(c[e])?c[e]:i}function j4(i,a,c){return _1(i,X4(a,c))}function X4(i,a){return i.split(`.`).reduceRight((c,e)=>({[e]:c}),a)}var N1=class{};var Y4=class z2 extends N1{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(c,e,l){if(Y2(c))return this.interpolateString(c,e,l);if(G4(c))return this.interpolateFunction(c,e,l)}interpolateFunction(c,e,l){return c(e,l)}interpolateString(c,e,l){return e?c.replace(this.templateMatcher,(s,t)=>{let r=this.getInterpolationReplacement(e,t,l);return r!==void 0?r:s}):c}getInterpolationReplacement(c,e,l){return this.formatValue(d4(c,e),l)}formatValue(c,e){if(Y2(c))return c;if(typeof c==`number`||typeof c==`boolean`)return c.toString();if(c===null)return`null`;if(Z(c))return c.join(`, `);if(M2(c))return typeof c.toString==`function`&&c.toString!==Object.prototype.toString?c.toString():JSON.stringify(c)}static ɵfac=(()=>{let c;return function(l){return(c||(c=hd(z2)))(l||z2)}})();static ɵprov=L$1({token:z2,factory:z2.ɵfac})};var h4=class X2{_translations=Bt$2({});translations=this._translations.asReadonly();_languages=Bt$2([]);languages=this._languages.asReadonly();_lastTranslationChange=Bt$2(null);lastTranslationChange=this._lastTranslationChange.asReadonly();_translationChange$=new U$1;translationChange$=this._translationChange$.asObservable();constructor(){p$1(Be$1).onDestroy(()=>{this._translationChange$.complete()})}getTranslations(c){return this.translations()[c]}setTranslations(c,e,l){tc(()=>{this._translations.update(t=>ae$3(R$1({},t),{[c]:l&&this.hasTranslationFor(c)?_1(t[c],e):e})),this.addLanguages([c]);let s={lang:c,translations:this.getTranslations(c)};this._lastTranslationChange.set(s),this._translationChange$.next(s)})}getLanguages(){return this.languages()}addLanguages(c){this._languages.update(e=>Array.from(/* @__PURE__ */ new Set([...e,...c])))}removeLanguages(c){this._languages.update(e=>e.filter(l=>!c.includes(l)))}hasTranslationFor(c){return typeof this.translations()[c]<`u`}deleteTranslations(c){tc(()=>{if(!this.hasTranslationFor(c))return;this._translations.update(l=>{let r=l,{[c]:s}=r;return R_(r,[WO(c)])});let e={lang:c,translations:{}};this._lastTranslationChange.set(e),this._translationChange$.next(e)})}getTranslationValue(c,e){return d4(this.getTranslations(c),e)}static ɵfac=function(e){return new(e||X2)};static ɵprov=L$1({token:X2,factory:X2.ɵfac})};var z4=new D(`TRANSLATE_CONFIG`);var W2=i=>tI(i)?i:el(i);var K4=100;var $4=2**31-1;var y1=class ${loadingTranslations=new V4;loadCancellation=/* @__PURE__ */ new Map;languageRequestSequence=0;lastFallbackRequest=0;languageRequestIds=/* @__PURE__ */ new WeakMap;deletedLanguageRequests=/* @__PURE__ */ new Map;lastUseLanguage=null;retry;currentLoader=p$1(w1);compiler=p$1(b1);parser=p$1(N1);missingTranslationHandler=p$1(p4);store=p$1(h4);destroyRef=p$1(Be$1);parent;get isRoot(){return this.parent===null}_onLangChange=new U$1;_onFallbackLangChange=new U$1;_currentLang=Bt$2(null);_fallbackLang=Bt$2(null);_additionalFallbackLangs=Bt$2([]);_fallbackLangs=ec(()=>{let c=this._fallbackLang();return c===null?[]:[c,...this._additionalFallbackLangs()]});_onTranslationRefresh=null;_isLoading=ec(()=>this.loadingTranslations.hasAny()||(this.parent?.isLoading()??!1));getRoot(){let c=this;for(;c.parent;)c=c.parent;return c}getParent(){return this.parent}getActiveRequestedLang(){return this.getRoot().lastUseLanguage}hasTranslationInChain(c){for(let e=this;e;e=e.parent)if(e.store.hasTranslationFor(c))return!0;return!1}chainTranslationChange$(){let c=[];for(let e=this;e;e=e.parent)c.push(e.store.translationChange$);return c.length===1?c[0]:mI(...c)}get onTranslationChange(){return this.store.translationChange$}get onLangChange(){return this.isRoot?this._onLangChange.asObservable():this.parent?this.parent.onLangChange:Co}get onFallbackLangChange(){return this.isRoot?this._onFallbackLangChange.asObservable():this.parent?this.parent.onFallbackLangChange:Co}get onTranslationRefresh(){if(!this._onTranslationRefresh){let c=mI(this.onTranslationChange.pipe(Ln$1(e=>e.lang===this.getCurrentLang()||this.getFallbackLangs().includes(e.lang))),this.onLangChange,this.onFallbackLangChange).pipe(ge$1(()=>{}));this.isRoot?this._onTranslationRefresh=c:this._onTranslationRefresh=this.parent?mI(c,this.parent.onTranslationRefresh):c}return this._onTranslationRefresh}constructor(){let c=R$1({isRoot:!0,fallbackLang:null},p$1(z4,{optional:!0}));if(this.parent=c.isRoot?null:p$1($,{optional:!0,skipSelf:!0}),typeof c.retry==`object`){let{count:l,delay:s,shouldRetry:t}=c.retry;this.retry={count:l,delay:typeof s==`function`?s.bind(c.retry):s,shouldRetry:t?.bind(c.retry)}}else this.retry=Math.max(0,c.retry??0);let e=p$1(Be$1);if(this.isRoot)c.langs?.length&&this.addLangs(c.langs),c.lang&&this.use(c.lang),c.fallbackLangs!==void 0?this.setFallbackLangs(c.fallbackLangs):c.fallbackLang&&this.setFallbackLang(c.fallbackLang);else{let l=this.getCurrentLang();l&&this.loadOrExtendLanguage(l)?.pipe(H(e)).subscribe({error:s=>{console.warn(`@ngx-translate/core: child failed to load "${l}". Cause:`,s)}});for(let s of this.getFallbackLangs())s&&s!==l&&this.loadOrExtendLanguage(s)?.pipe(H(e)).subscribe({error:t=>{console.warn(`@ngx-translate/core: child failed to load "${s}". Cause:`,t)}})}this.onLangChange.pipe(H(e)).subscribe(l=>{!this.isRoot&&this.shouldLoadLanguage(l)&&this.loadOrExtendLanguage(l.lang)?.pipe(H(e)).subscribe({error:s=>{console.warn(`@ngx-translate/core: child failed to load "${l.lang}". Cause:`,s)}})}),this.onFallbackLangChange.pipe(H(e)).subscribe(l=>{if(!this.isRoot)for(let s of l.langs??[l.lang])this.shouldLoadLanguage(l,s)&&this.loadOrExtendLanguage(s)?.pipe(H(e)).subscribe({error:t=>{console.warn(`@ngx-translate/core: child failed to load "${s}". Cause:`,t)}})}),e.onDestroy(()=>{this._onLangChange.complete(),this._onFallbackLangChange.complete()})}shouldLoadLanguage(c,e=c.lang){let l=this.deletedLanguageRequests.get(e),s=this.getRoot().languageRequestIds.get(c);return l===void 0||s===void 0||s>l}setFallbackLang(c){return this.isRoot?this.setFallbackLangs([c]).pipe(ge$1(e=>e[0])):this.parent.setFallbackLang(c)}setFallbackLangs(c){return this.isRoot?tc(()=>{let e=[...new Set(c)],l=++this.languageRequestSequence;this.lastFallbackRequest=l,this._fallbackLang()===null&&this.setFallbackLanguageState(e);let s=e.length?fI(e.map(t=>(this.loadOrExtendLanguage(t)??el(this.store.getTranslations(t))).pipe(xr(1)))):el([]);return s.pipe(H(this.destroyRef)).subscribe({next:t=>{if(this.lastFallbackRequest!==l||e.some(o=>(this.deletedLanguageRequests.get(o)??-1)>=l))return;this.setFallbackLanguageState(e);let r=R$1({lang:e[0]??``,translations:t[0]??{}},e.length!==1&&{langs:this.getFallbackLangs()});this.languageRequestIds.set(r,l),this._onFallbackLangChange.next(r)},error:t=>{console.warn(`@ngx-translate/core: failed to load fallback "${e.join(`, `)}". Cause:`,t)}}),s}):this.parent.setFallbackLangs(c)}setFallbackLanguageState(c){this._additionalFallbackLangs.set(c.slice(1)),this._fallbackLang.set(c[0]??null)}get isLoading(){return this._isLoading}use(c){return this.isRoot?tc(()=>{let e=++this.languageRequestSequence,l=this._currentLang(),s=this.lastUseLanguage;this.lastUseLanguage=c,this._currentLang()||this._currentLang.set(c);let t=this.loadOrExtendLanguage(c);return tI(t)?(t.pipe(xr(1)).subscribe({next:()=>{this.changeLang(c,e)},error:r=>{this.lastUseLanguage===c&&(typeof this.retry==`number`||!this.store.hasTranslationFor(c))&&(this._currentLang.set(l),this.lastUseLanguage=s),console.warn(`@ngx-translate/core: failed to load "${c}". currentLang was NOT changed; remains "${l??`null`}". Cause:`,r)}}),t):(this.changeLang(c,e),el(this.store.getTranslations(c)))}):this.parent.use(c)}loadOrExtendLanguage(c){return this.store.hasTranslationFor(c)?el(this.store.getTranslations(c)):this.loadAndCompileTranslations(c)}getTranslations(c){return this.store.getTranslations(c)}changeLang(c,e){if(c!==this.lastUseLanguage)return;this._currentLang.set(c);let l={lang:c,translations:this.store.getTranslations(c)};e!==void 0&&this.languageRequestIds.set(l,e),this._onLangChange.next(l)}getCurrentLang(){return this.isRoot?this._currentLang():this.parent?.getCurrentLang()??null}loadAndCompileTranslations(c){let e=this.loadingTranslations.get(c);if(e)return e;let l=typeof this.retry==`number`?{count:this.retry}:this.retry,s=this.loadCancellation.get(c);s||(s=new No(1),this.loadCancellation.set(c,s));let t=dI(()=>{let f=this.currentLoader.getTranslation(c);return l.count>0?f.pipe(DI({count:l.count,delay:(p,d)=>{if(l.shouldRetry&&!l.shouldRetry(p))return eI(()=>p);let g=l.delay??K4,u=typeof g==`function`?g(p,d):g;if(!Number.isFinite(u)||u<0||u>$4)throw new RangeError(`@ngx-translate/core: retry delay must be a finite number between 0 and 2147483647 milliseconds.`);return At$3(u)}})):f}),r=!1,o=t.pipe(ge$1(f=>this.compiler.compileTranslations(f,c)),Ln$1(()=>this.loadCancellation.get(c)===s),Sa$2({next:f=>{this.store.setTranslations(c,f,!1),this.loadingTranslations.clearIfOwner(c,m)},error:()=>{typeof this.retry!=`number`&&this.loadingTranslations.clearIfOwner(c,m)}}),yp(f=>this.loadCancellation.get(c)===s?eI(()=>f):Co),Sa$2({complete:()=>{r=this.loadCancellation.get(c)===s}}),Ao(s),vI(()=>this.loadingTranslations.clearIfOwner(c,m)),sl({connector:()=>new No(1),resetOnError:typeof this.retry==`number`,resetOnComplete:!1,resetOnRefCountZero:!0})),m=dI(()=>r||this.loadCancellation.get(c)===s?o:Co);return this.loadingTranslations.set(c,m),m.pipe(H(this.destroyRef)).subscribe({error:()=>{}}),m}setTranslation(c,e,l=!1){let s=this.compiler.compileTranslations(e,c);this.store.setTranslations(c,s,l)}setCompiledTranslation(c,e,l=!1){this.store.setTranslations(c,e,l)}getLangs(){return this.store.getLanguages()}addLangs(c){this.store.addLanguages(c)}getParsedResultForKey(c,e,l){let s,t=this.getTextToInterpolate(c,l,o=>{s=o});if(k(t)){let o=s?.translation===t?s.context:{key:c};return this.runInterpolation(t,e,o)}let r=this.getMissingTranslationHandler().handle(R$1({key:c,translateService:this},e!==void 0&&{interpolateParams:e}));return r!==void 0?r:c}getMissingTranslationHandler(){return this.missingTranslationHandler}getFallbackLang(){return this.isRoot?this._fallbackLang():this.parent?.getFallbackLang()??null}getFallbackLangs(){return this.fallbackLangs()}getTextToInterpolate(c,e,l){if(e){let o=this.store.getTranslationValue(e,c);return o!==void 0?(l?.({translation:o,context:{key:c,lang:e}}),o):this.parent?.getTextToInterpolate(c,e,l)}let s=this.getCurrentLang(),t,r;s&&(t=this.store.getTranslationValue(s,c),r=s);for(let o of this.getFallbackLangs()){if(k(t))break;o!==s&&(t=this.store.getTranslationValue(o,c),r=o)}return t!==void 0?(l?.({translation:t,context:r===void 0?{key:c}:{key:c,lang:r}}),t):this.parent?.getTextToInterpolate(c,e,l)}runInterpolation(c,e,l){if(k(c))return Z(c)?this.runInterpolationOnArray(c,e,l):A(c)?this.runInterpolationOnDict(c,e,l):this.parser.interpolate(c,e,l)}runInterpolationOnArray(c,e,l){return c.map(s=>this.runInterpolation(s,e,l))}runInterpolationOnDict(c,e,l){let s={};for(let t in c){let r=this.runInterpolation(c[t],e,l);r!==void 0&&(s[t]=r)}return s}getParsedResult(c,e,l){return c instanceof Array?this.getParsedResultForArray(c,e,l):this.getParsedResultForKey(c,e,l)}getParsedResultForArray(c,e,l){let s={},t=!1;for(let o of c)s[o]=this.getParsedResultForKey(o,e,l),t=t||tI(s[o]);if(!t)return s;let r=c.map(o=>W2(s[o]));return fI(r).pipe(ge$1(o=>{let m={};return o.forEach((f,p)=>{m[c[p]]=f}),m}))}get(c,e,l){if(!k(c)||!c.length)return el(``);let s=l??this.getActiveRequestedLang()??this.getCurrentLang(),t=/* @__PURE__ */ new Set,r=()=>{let o=/* @__PURE__ */ new Set([...s?[s]:[],...l?[]:this.getFallbackLangs()]),m=[];for(let f=this;f;f=f.parent)for(let p of o){let d=f.loadingTranslations.get(p);d&&!t.has(d)&&(t.add(d),m.push(d.pipe(xr(1),gI(void 0))))}return m.length?fI(m).pipe(hI(r)):W2(this.getParsedResult(c,e,l))};return r()}getAsync(c,e,l){return nI(this.get(c,e,l))}getStreamOnTranslationChange(c,e,l){if(!k(c)||!c.length)throw new Error(`Parameter "key" is required and cannot be empty`);return en(dI(()=>this.get(c,e,l)),this.onTranslationChange.pipe(Dp(()=>{return W2(this.getParsedResult(c,e,l))})))}stream(c,e,l){if(!k(c)||!c.length)throw new Error(`Parameter "key" required`);let s=l?mI(this.onLangChange,this.chainTranslationChange$().pipe(Ln$1(t=>t.lang===l))):this.onLangChange;return en(dI(()=>this.get(c,e,l)),s.pipe(Dp(()=>{return W2(this.getParsedResult(c,e,l))})))}instant(c,e,l){if(!k(c)||c.length===0)return``;l&&!this.hasTranslationInChain(l)&&this.warnUnloadedInstantLang(l);let s=this.getParsedResult(c,e,l);return tI(s)?this.keyToObject(c):s}warnedUnloadedInstantLangs=/* @__PURE__ */ new Set;warnUnloadedInstantLang(c){let e=this.getRoot();if(e!==this){e.warnUnloadedInstantLang(c);return}this.warnedUnloadedInstantLangs.has(c)||tc(()=>{this.warnedUnloadedInstantLangs.add(c),console.warn(`@ngx-translate/core: instant() called with lang="${c}" but no translations are loaded for that language. Returning the key as fallback. Load with use("${c}") or setTranslation("${c}", ...) first.`)})}hasTranslationKey(c,e){return!k(c)||c.length===0?!1:k(this.getTextToInterpolate(c,e))}translate(c,e,l){return ec(()=>{let s=typeof c==`function`?c():c,t=typeof e==`function`?e():e,r=typeof l==`function`?l():l;return this.instant(s,t,r)})}keyToObject(c){return Array.isArray(c)?c.reduce((e,l)=>(e[l]=l,e),{}):c}set(c,e,l){tc(()=>{let s=l??this.getCurrentLang();this.store.setTranslations(s,j4(this.store.getTranslations(s),c,Y2(e)?this.compiler.compile(e,s):this.compiler.compileTranslations(e,s)),!1)})}reloadLang(c){return tc(()=>(this.resetLang(c),this.loadAndCompileTranslations(c)))}resetLang(c){this.loadingTranslations.clear(c),this.store.deleteTranslations(c)}deleteLanguage(c){tc(()=>{this.deletedLanguageRequests.set(c,this.getRoot().languageRequestSequence);let e=this.loadCancellation.get(c);this.loadCancellation.delete(c),this.loadingTranslations.clear(c),this.store.removeLanguages([c]),this.store.deleteTranslations(c),e?.next(),e?.complete()})}static getBrowserLang(){if(typeof window>`u`||!window.navigator)return;let c=this.getBrowserCultureLang();return c?c.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>`u`||typeof window.navigator>`u`))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return $.getBrowserLang()}getBrowserCultureLang(){return $.getBrowserCultureLang()}get currentLang(){return this.isRoot?this._currentLang.asReadonly():this.parent.currentLang}get fallbackLang(){return this.isRoot?this._fallbackLang.asReadonly():this.parent.fallbackLang}get fallbackLangs(){return this.isRoot?this._fallbackLangs:this.parent.fallbackLangs}static ɵfac=function(e){return new(e||$)};static ɵprov=L$1({token:$,factory:$.ɵfac})};var $3=class u2{translateService=p$1(y1);cachedSignal=null;lastKey=null;lastParams;transform(c,...e){if(!c||!c.length)return c;let l=this.parseArgs(e);return(c!==this.lastKey||!j2(l,this.lastParams))&&(this.cachedSignal=this.translateService.translate(c,l),this.lastKey=c,this.lastParams=l),this.cachedSignal()}parseArgs(c){if(!(!k(c[0])||!c.length)){if(Y2(c[0])&&c[0].length){let e=c[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,`"$2":`).replace(/:(\s)?(')(.*?)(')/g,`:"$3"`);try{return JSON.parse(e)}catch(l){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${c[0]}`,{cause:l})}}if(A(c[0]))return c[0]}}static ɵfac=function(e){return new(e||u2)};static ɵpipe=fo({name:`translate`,type:u2,pure:!1});static ɵprov=L$1({token:u2,factory:u2.ɵfac})};function u4(i){return/^class[{\s]/.test(Function.prototype.toString.call(i))}function m4(i,a){return u4(a)?{provide:i,useClass:a}:{provide:i,useFactory:a}}function Z3(i={}){return Z4(ae$3(R$1({},i),{isRoot:!0}))}function q2(i,a,c,e,l){if(a===void 0)return m4(i,c);if(typeof a==`function`){if(u4(a)){let s=a.name||`YourClass`;console.warn(`@ngx-translate/core: "${e}" received a bare class (${s}); auto-wrapping with ${l}(). For clarity, prefer ${e}: ${l}(${s}).`)}return m4(i,a)}return a}function Z4(i){let a=[],c=q2(w1,i.loader,q4,`loader`,`provideTranslateLoader`),e=q2(b1,i.compiler,W4,`compiler`,`provideTranslateCompiler`),l=q2(N1,i.parser,Y4,`parser`,`provideTranslateParser`),s=q2(p4,i.missingTranslationHandler,U4,`missingTranslationHandler`,`provideMissingTranslationHandler`);a.push(c,e,l,s),a.push(h4);let t=ae$3(R$1({fallbackLang:i.fallbackLang??null},i.fallbackLangs!==void 0&&{fallbackLangs:i.fallbackLangs}),{lang:i.lang,retry:i.retry,langs:i.langs,isRoot:i.isRoot});return a.push({provide:z4,useValue:t}),a.push({provide:y1,useClass:y1}),a}var Q4=20;var Q=(()=>{class i{_ngZone=p$1(V);_platform=p$1(Me);_renderer=p$1(at$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new U$1;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(c){this.scrollContainers.has(c)||this.scrollContainers.set(c,c.elementScrolled().subscribe(()=>this._scrolled.next(c)))}deregister(c){let e=this.scrollContainers.get(c);e&&(e.unsubscribe(),this.scrollContainers.delete(c))}scrolled(c=Q4){return this._platform.isBrowser?new k$2(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let l=c>0?this._scrolled.pipe(pI(c)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{l.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):el()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((c,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(c,e){let l=this.getAncestorScrollContainers(c);return this.scrolled(e).pipe(Ln$1(s=>!s||l.indexOf(s)>-1))}getAncestorScrollContainers(c){let e=[];return this.scrollContainers.forEach((l,s)=>{this._targetContainsElement(s,c)&&e.push(s)}),e}_targetContainsElement(c,e){let l=Ct$1(e),s=c.getElementRef().nativeElement;do if(l==s)return!0;while(l=l.parentElement);return!1}static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var J4=(()=>{class i{elementRef=p$1(pe$2);scrollDispatcher=p$1(Q);ngZone=p$1(V);dir=p$1(eA,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new U$1;_renderer=p$1(vn$1);_cleanupScroll;_elementScrolled=new U$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,c=>this._elementScrolled.next(c))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(c){let e=this.elementRef.nativeElement,l=this.dir&&this.dir.value==`rtl`;c.left??=l?c.end:c.start,c.right??=l?c.start:c.end,c.bottom!=null&&(c.top=e.scrollHeight-e.clientHeight-c.bottom),l&&A9()!=ji.NORMAL?(c.left!=null&&(c.right=e.scrollWidth-e.clientWidth-c.left),A9()==ji.INVERTED?c.left=c.right:A9()==ji.NEGATED&&(c.left=c.right?-c.right:c.right)):c.right!=null&&(c.left=e.scrollWidth-e.clientWidth-c.right),this._applyScrollToOptions(c)}_applyScrollToOptions(c){let e=this.elementRef.nativeElement;M9()?e.scrollTo(c):(c.top!=null&&(e.scrollTop=c.top),c.left!=null&&(e.scrollLeft=c.left))}measureScrollOffset(c){let e=`left`,l=`right`,s=this.elementRef.nativeElement;if(c==`top`)return s.scrollTop;if(c==`bottom`)return s.scrollHeight-s.clientHeight-s.scrollTop;let t=this.dir&&this.dir.value==`rtl`;return c==`start`?c=t?l:e:c==`end`&&(c=t?e:l),t&&A9()==ji.INVERTED?c==e?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:t&&A9()==ji.NEGATED?c==e?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:c==e?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}static ɵfac=function(e){return new(e||i)};static ɵdir=ye$2({type:i,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return i})();var c3=20;var t2=(()=>{class i{_platform=p$1(Me);_listeners;_viewportSize=null;_change=new U$1;_document=p$1(j$1);constructor(){let c=p$1(V),e=p$1(at$1).createRenderer(null,null);c.runOutsideAngular(()=>{if(this._platform.isBrowser){let l=s=>this._change.next(s);this._listeners=[e.listen(`window`,`resize`,l),e.listen(`window`,`orientationchange`,l)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(c=>c()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let c={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),c}getViewportRect(){let c=this.getViewportScrollPosition(),{width:e,height:l}=this.getViewportSize();return{top:c.top,left:c.left,bottom:c.top+l,right:c.left+e,height:l,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let c=this._document,e=this._getWindow(),l=c.documentElement,s=l.getBoundingClientRect();return{top:-s.top||c.body?.scrollTop||e.scrollY||l.scrollTop||0,left:-s.left||c.body?.scrollLeft||e.scrollX||l.scrollLeft||0}}change(c=c3){return c>0?this._change.pipe(pI(c)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let c=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:c.innerWidth,height:c.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var R0=new D(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var L2=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Ne({type:i});static ɵinj=_e$1({})}return i})();var k1=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Ne({type:i});static ɵinj=_e$1({imports:[Tc,L2,Tc,L2]})}return i})();var C2=class{_attachedHost=null;attach(a){return this._attachedHost=a,a.attach(this)}detach(){let a=this._attachedHost;a!=null&&(this._attachedHost=null,a.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(a){this._attachedHost=a}};var S2=class extends C2{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(a,c,e,l,s,t){super(),this.component=a,this.viewContainerRef=c,this.injector=e,this.projectableNodes=l,this.bindings=s||null,this.directives=t||null}};var r2=class extends C2{templateRef;viewContainerRef;context;injector;constructor(a,c,e,l){super(),this.templateRef=a,this.viewContainerRef=c,this.context=e,this.injector=l}get origin(){return this.templateRef.elementRef}attach(a,c=this.context){return this.context=c,super.attach(a)}detach(){return this.context=void 0,super.detach()}};var T1=class extends C2{element;constructor(a){super(),this.element=a instanceof pe$2?a.nativeElement:a}};var $2=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(a){if(a instanceof S2)return this._attachedPortal=a,this.attachComponentPortal(a);if(a instanceof r2)return this._attachedPortal=a,this.attachTemplatePortal(a);if(this.attachDomPortal&&a instanceof T1)return this._attachedPortal=a,this.attachDomPortal(a)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(a){this._disposeFn=a}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Z2=class extends $2{outletElement;_appRef;_defaultInjector;constructor(a,c,e){super(),this.outletElement=a,this._appRef=c,this._defaultInjector=e}attachComponentPortal(a){let c;if(a.viewContainerRef){let e=a.injector||a.viewContainerRef.injector,l=e.get(si,null,{optional:!0})||void 0;c=a.viewContainerRef.createComponent(a.component,{index:a.viewContainerRef.length,injector:e,ngModuleRef:l,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0,directives:a.directives||void 0}),this.setDisposeFn(()=>c.destroy())}else{let e=this._appRef,l=a.injector||this._defaultInjector||Z$2.NULL,s=l.get(ke$1,e.injector);c=Dy(a.component,{elementInjector:l,environmentInjector:s,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0,directives:a.directives||void 0}),e.attachView(c.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(c.hostView),c.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(c)),this._attachedPortal=a,c}attachTemplatePortal(a){let c=a.viewContainerRef,e=c.createEmbeddedView(a.templateRef,a.context,{injector:a.injector});return e.rootNodes.forEach(l=>this.outletElement.appendChild(l)),e.detectChanges(),this.setDisposeFn(()=>{let l=c.indexOf(e);l!==-1&&c.remove(l)}),this._attachedPortal=a,e}attachDomPortal=a=>{let c=a.element;c.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);c.parentNode.insertBefore(e,c),this.outletElement.appendChild(c),this._attachedPortal=a,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(c,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(a){return a.hostView.rootNodes[0]}};var I0=(()=>{class i extends r2{constructor(){let c=p$1(eo),e=p$1(uo);super(c,e)}static ɵfac=function(e){return new(e||i)};static ɵdir=ye$2({type:i,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[mr]})}return i})();var V0=(()=>{class i extends $2{_moduleRef=p$1(si,{optional:!0});_document=p$1(j$1);_viewContainerRef=p$1(uo);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(c){this.hasAttached()&&!c&&!this._isInitialized||(this.hasAttached()&&super.detach(),c&&super.attach(c),this._attachedPortal=c||null)}attached=new Ce;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(c){c.setAttachedHost(this);let e=c.viewContainerRef!=null?c.viewContainerRef:this._viewContainerRef,l=e.createComponent(c.component,{index:e.length,injector:c.injector||e.injector,projectableNodes:c.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:c.bindings||void 0,directives:c.directives||void 0});return e!==this._viewContainerRef&&this._insertContent(l.hostView.rootNodes[0]),super.setDisposeFn(()=>l.destroy()),this._attachedPortal=c,this._attachedRef=l,this.attached.emit(l),l}attachTemplatePortal(c){c.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(c.templateRef,c.context,{injector:c.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=c,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=c=>{let e=c.element;e.parentNode;let l=this._document.createComment(`dom-portal`);c.setAttachedHost(this),e.parentNode.insertBefore(l,e),this._insertContent(e),this._attachedPortal=c,super.setDisposeFn(()=>l.parentNode?.replaceChild(e,l))};_insertContent(c){let e=this._viewContainerRef.element.nativeElement;e.nodeType===e.ELEMENT_NODE?e.appendChild(c):e.parentNode?.insertBefore(c,e)}static ɵfac=(()=>{let c;return function(l){return(c||(c=hd(i)))(l||i)}})();static ɵdir=ye$2({type:i,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[mr]})}return i})();var M4=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Ne({type:i});static ɵinj=_e$1({})}return i})();var g4=M9();function w4(i){return new Q2(i.get(t2),i.get(j$1))}var Q2=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(a,c){this._viewportRuler=a,this._document=c}attach(){}enable(){if(this._canBeEnabled()){let a=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=a.style.left||``,this._previousHTMLStyles.top=a.style.top||``,a.style.left=W9(-this._previousScrollPosition.left),a.style.top=W9(-this._previousScrollPosition.top),a.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let a=this._document.documentElement,c=this._document.body,e=a.style,l=c.style,s=e.scrollBehavior||``,t=l.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,a.classList.remove(`cdk-global-scrollblock`),g4&&(e.scrollBehavior=l.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),g4&&(e.scrollBehavior=s,l.scrollBehavior=t)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let c=this._document.documentElement,e=this._viewportRuler.getViewportSize();return c.scrollHeight>e.height||c.scrollWidth>e.width}};function _4(i,a){return new J2(i.get(Q),i.get(V),i.get(t2),a)}var J2=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(a,c,e,l){this._scrollDispatcher=a,this._ngZone=c,this._viewportRuler=e,this._config=l}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(this._scrollSubscription)return;let a=this._scrollDispatcher.scrolled(0).pipe(Ln$1(c=>!c||!this._overlayRef.overlayElement.contains(c.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=a.subscribe(()=>{let c=this._viewportRuler.getViewportScrollPosition().top;Math.abs(c-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=a.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var x2=class{enable(){}disable(){}attach(){}};function A1(i,a){return a.some(c=>{let e=i.bottom<c.top,l=i.top>c.bottom,s=i.right<c.left,t=i.left>c.right;return e||l||s||t})}function v4(i,a){return a.some(c=>{let e=i.top<c.top,l=i.bottom>c.bottom,s=i.left<c.left,t=i.right>c.right;return e||l||s||t})}function b2(i,a){return new c1(i.get(Q),i.get(t2),i.get(V),a)}var c1=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(a,c,e,l){this._scrollDispatcher=a,this._viewportRuler=c,this._ngZone=e,this._config=l}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(!this._scrollSubscription){let a=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(a).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let c=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:l}=this._viewportRuler.getViewportSize();A1(c,[{width:e,height:l,bottom:l,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var N4=(()=>{class i{_injector=p$1(Z$2);noop=()=>new x2;close=c=>_4(this._injector,c);block=()=>w4(this._injector);reposition=c=>b2(this._injector,c);static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var y2=class{positionStrategy;scrollStrategy=new x2;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(a){if(a){let c=Object.keys(a);for(let e of c)a[e]!==void 0&&(this[e]=a[e])}}};var e1=class{connectionPair;scrollableViewProperties;constructor(a,c){this.connectionPair=a,this.scrollableViewProperties=c}};var k4=(()=>{class i{_attachedOverlays=[];_document=p$1(j$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(c){this.remove(c),this._attachedOverlays.push(c)}remove(c){let e=this._attachedOverlays.indexOf(c);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(c,e,l){return l.observers.length<1?!1:c.eventPredicate?c.eventPredicate(e):!0}static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var T4=(()=>{class i extends k4{_ngZone=p$1(V);_renderer=p$1(at$1).createRenderer(null,null);_cleanupKeydown;add(c){super.add(c),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=c=>{let e=this._attachedOverlays;for(let l=e.length-1;l>-1;l--){let s=e[l];if(this.canReceiveEvent(s,c,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(c));break}}};static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var P4=(()=>{class i extends k4{_platform=p$1(Me);_ngZone=p$1(V);_renderer=p$1(at$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(c){if(super.add(c),!this._isAttached){let e=this._document.body,l={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(e,`pointerdown`,this._pointerDownListener,l),s.listen(e,`click`,this._clickListener,l),s.listen(e,`auxclick`,this._clickListener,l),s.listen(e,`contextmenu`,this._clickListener,l)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(c=>c()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=c=>{this._pointerDownEventTarget=dt$1(c)};_clickListener=c=>{let e=dt$1(c),l=c.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let t=s.length-1;t>-1;t--){let r=s[t],o=r._outsidePointerEvents;if(!(!r.hasAttached()||!this.canReceiveEvent(r,c,o))){if(L4(r.overlayElement,e)||L4(r.overlayElement,l))break;this._ngZone?this._ngZone.run(()=>o.next(c)):o.next(c)}}};static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();function L4(i,a){let c=typeof ShadowRoot<`u`&&ShadowRoot,e=a;for(;e;){if(e===i)return!0;e=c&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var A4=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=Fe$1({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,l){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})();var R4=(()=>{class i{_platform=p$1(Me);_containerElement;_document=p$1(j$1);_styleLoader=p$1(Yt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let c=`cdk-overlay-container`;if(this._platform.isBrowser||O9()){let l=this._document.querySelectorAll(`.${c}[platform="server"], .${c}[platform="test"]`);for(let s=0;s<l.length;s++)l[s].remove()}let e=this._document.createElement(`div`);e.classList.add(c),O9()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(A4)}static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var R1=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(a,c,e,l){this._renderer=c,this._ngZone=e,this.element=a.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=c.listen(this.element,`click`,l)}detach(){this._ngZone.runOutsideAngular(()=>{let a=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(a,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),a.style.pointerEvents=`none`,a.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function B1(i){return i&&i.nodeType===1}var P1=Bt$2([]);var a1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new U$1;_attachments=new U$1;_detachments=new U$1;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new U$1;_outsidePointerEvents=new U$1;_afterNextRenderRef;constructor(a,c,e,l,s,t,r,o,m,f=!1,p,d){this._portalOutlet=a,this._host=c,this._pane=e,this._config=l,this._ngZone=s,this._keyboardDispatcher=t,this._document=r,this._location=o,this._outsideClickDispatcher=m,this._animationsDisabled=f,this._injector=p,this._renderer=d,l.scrollStrategy&&(this._scrollStrategy=l.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=l.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(a){if(this._disposed)return null;this._attachHost();let c=this._portalOutlet.attach(a);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),tc(()=>{P1.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Fd(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof c?.onDestroy==`function`&&c.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),c}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let a=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),tc(()=>{P1.update(c=>c.filter(e=>e!==this))}),a}dispose(){if(this._disposed)return;let a=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,a&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,tc(()=>{P1.update(c=>c.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(a){a!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=a,this.hasAttached()&&(a.attach(this),this.updatePosition()))}updateSize(a){this._config=R$1(R$1({},this._config),a),this._updateElementSize()}setDirection(a){this._config=ae$3(R$1({},this._config),{direction:a}),this._updateElementDirection()}addPanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!0)}removePanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!1)}getDirection(){let a=this._config.direction;return a?typeof a==`string`?a:a.value:`ltr`}updateScrollStrategy(a){a!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=a,this.hasAttached()&&(a.attach(this),a.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let a=this._pane.style;a.width=W9(this._config.width),a.height=W9(this._config.height),a.minWidth=W9(this._config.minWidth),a.minHeight=W9(this._config.minHeight),a.maxWidth=W9(this._config.maxWidth),a.maxHeight=W9(this._config.maxHeight)}_togglePointerEvents(a){this._pane.style.pointerEvents=a?``:`none`}_attachHost(){if(!this._host.parentElement){let a=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;B1(a)?a.after(this._host):a?.type===`parent`?a.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(a){}}_attachBackdrop(){let a=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new R1(this._document,this._renderer,this._ngZone,c=>{this._backdropClick.next(c)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(a))}):this._backdropRef.element.classList.add(a)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(a,c,e){let l=Uf(c||[]).filter(s=>!!s);l.length&&(e?a.classList.add(...l):a.classList.remove(...l))}_detachContentWhenEmpty(){let a=!1;try{this._detachContentAfterRenderRef=Fd(()=>{a=!0,this._detachContent()},{injector:this._injector})}catch(c){if(a)throw c;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let a=this._scrollStrategy;a?.disable(),a?.detach?.()}};var C4=`cdk-overlay-connected-position-bounding-box`;var e3=/([A-Za-z%]+)$/;function w2(i,a){return new l1(a,i.get(t2),i.get(j$1),i.get(Me),i.get(R4))}var l1=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new U$1;_resizeSubscription=te$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(a,c,e,l,s){this._viewportRuler=c,this._document=e,this._platform=l,this._overlayContainer=s,this.setOrigin(a)}attach(a){this._overlayRef&&this._overlayRef,this._validatePositions(),a.hostElement.classList.add(C4),this._overlayRef=a,this._boundingBox=a.hostElement,this._pane=a.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let a=this._originRect,c=this._overlayRect,e=this._viewportRect,l=this._containerRect,s=[],t;for(let r of this._preferredPositions){let o=this._getOriginPoint(a,l,r),m=this._getOverlayPoint(o,c,r),f=this._getOverlayFit(m,c,e,r);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(r,o);return}if(this._canFitWithFlexibleDimensions(f,m,e)){s.push({position:r,origin:o,overlayRect:c,boundingBoxRect:this._calculateBoundingBoxRect(o,r)});continue}(!t||t.overlayFit.visibleArea<f.visibleArea)&&(t={overlayFit:f,overlayPoint:m,originPoint:o,position:r,overlayRect:c})}if(s.length){let r=null,o=-1;for(let m of s){let f=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);f>o&&(o=f,r=m)}this._isPushed=!1,this._applyPosition(r.position,r.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(t.position,t.originPoint);return}this._applyPosition(t.position,t.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&J(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(C4),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let a=this._lastPosition;a?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(a,this._getOriginPoint(this._originRect,this._containerRect,a))):this.apply()}withScrollableContainers(a){return this._scrollables=a,this}withPositions(a){return this._preferredPositions=a,a.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(a){return this._viewportMargin=a,this}withFlexibleDimensions(a=!0){return this._hasFlexibleDimensions=a,this}withGrowAfterOpen(a=!0){return this._growAfterOpen=a,this}withPush(a=!0){return this._canPush=a,this}withLockedPosition(a=!0){return this._positionLocked=a,this}setOrigin(a){return this._origin=a,this}withDefaultOffsetX(a){return this._offsetX=a,this}withDefaultOffsetY(a){return this._offsetY=a,this}withTransformOriginOn(a){return this._transformOriginSelector=a,this}withPopoverLocation(a){return this._popoverLocation=a,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof pe$2?this._origin.nativeElement:B1(this._origin)?this._origin:null}_getOriginPoint(a,c,e){let l;if(e.originX==`center`)l=a.left+a.width/2;else{let t=this._isRtl()?a.right:a.left,r=this._isRtl()?a.left:a.right;l=e.originX==`start`?t:r}c.left<0&&(l-=c.left);let s;return e.originY==`center`?s=a.top+a.height/2:s=e.originY==`top`?a.top:a.bottom,c.top<0&&(s-=c.top),{x:l,y:s}}_getOverlayPoint(a,c,e){let l;e.overlayX==`center`?l=-c.width/2:e.overlayX===`start`?l=this._isRtl()?-c.width:0:l=this._isRtl()?0:-c.width;let s;return e.overlayY==`center`?s=-c.height/2:s=e.overlayY==`top`?0:-c.height,{x:a.x+l,y:a.y+s}}_getOverlayFit(a,c,e,l){let s=x4(c),{x:t,y:r}=a,o=this._getOffset(l,`x`),m=this._getOffset(l,`y`);o&&(t+=o),m&&(r+=m);let f=0-t,p=t+s.width-e.width,d=0-r,g=r+s.height-e.height,u=this._subtractOverflows(s.width,f,p),T=this._subtractOverflows(s.height,d,g),E1=u*T;return{visibleArea:E1,isCompletelyWithinViewport:s.width*s.height===E1,fitsInViewportVertically:T===s.height,fitsInViewportHorizontally:u==s.width}}_canFitWithFlexibleDimensions(a,c,e){if(this._hasFlexibleDimensions){let l=e.bottom-c.y,s=e.right-c.x,t=S4(this._overlayRef.getConfig().minHeight),r=S4(this._overlayRef.getConfig().minWidth),o=a.fitsInViewportVertically||t!=null&&t<=l,m=a.fitsInViewportHorizontally||r!=null&&r<=s;return o&&m}return!1}_pushOverlayOnScreen(a,c,e){if(this._previousPushAmount&&this._positionLocked)return{x:a.x+this._previousPushAmount.x,y:a.y+this._previousPushAmount.y};let l=x4(c),s=this._viewportRect,t=Math.max(a.x+l.width-s.width,0),r=Math.max(a.y+l.height-s.height,0),o=Math.max(s.top-e.top-a.y,0),m=Math.max(s.left-e.left-a.x,0),f=0,p=0;return l.width<=s.width?f=m||-t:f=a.x<this._getViewportMarginStart()?s.left-e.left-a.x:0,l.height<=s.height?p=o||-r:p=a.y<this._getViewportMarginTop()?s.top-e.top-a.y:0,this._previousPushAmount={x:f,y:p},{x:a.x+f,y:a.y+p}}_applyPosition(a,c){if(this._setTransformOrigin(a),this._setOverlayElementStyles(c,a),this._setBoundingBoxStyles(c,a),a.panelClass&&this._addPanelClasses(a.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(a!==this._lastPosition||!this._lastScrollVisibility||!a3(this._lastScrollVisibility,e)){let l=new e1(a,e);this._positionChanges.next(l)}this._lastScrollVisibility=e}this._lastPosition=a,this._isInitialRender=!1}_setTransformOrigin(a){if(!this._transformOriginSelector)return;let c=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,l=a.overlayY;a.overlayX===`center`?e=`center`:this._isRtl()?e=a.overlayX===`start`?`right`:`left`:e=a.overlayX===`start`?`left`:`right`;for(let s=0;s<c.length;s++)c[s].style.transformOrigin=`${e} ${l}`}_calculateBoundingBoxRect(a,c){let e=this._viewportRect,l=this._isRtl(),s,t,r;if(c.overlayY===`top`)t=a.y,s=e.height-t+this._getViewportMarginBottom();else if(c.overlayY===`bottom`)r=e.height-a.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=e.height-r+this._getViewportMarginTop();else{let g=Math.min(e.bottom-a.y+e.top,a.y),u=this._lastBoundingBoxSize.height;s=g*2,t=a.y-g,s>u&&!this._isInitialRender&&!this._growAfterOpen&&(t=a.y-u/2)}let o=c.overlayX===`start`&&!l||c.overlayX===`end`&&l,m=c.overlayX===`end`&&!l||c.overlayX===`start`&&l,f,p,d;if(m)d=e.width-a.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=a.x-this._getViewportMarginStart();else if(o)p=a.x,f=e.right-a.x-this._getViewportMarginEnd();else{let g=Math.min(e.right-a.x+e.left,a.x),u=this._lastBoundingBoxSize.width;f=g*2,p=a.x-g,f>u&&!this._isInitialRender&&!this._growAfterOpen&&(p=a.x-u/2)}return{top:t,left:p,bottom:r,right:d,width:f,height:s}}_setBoundingBoxStyles(a,c){let e=this._calculateBoundingBoxRect(a,c);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let l={};if(this._hasExactPosition())l.top=l.left=`0`,l.bottom=l.right=`auto`,l.maxHeight=l.maxWidth=``,l.width=l.height=`100%`;else{let s=this._overlayRef.getConfig().maxHeight,t=this._overlayRef.getConfig().maxWidth;l.width=W9(e.width),l.height=W9(e.height),l.top=W9(e.top)||`auto`,l.bottom=W9(e.bottom)||`auto`,l.left=W9(e.left)||`auto`,l.right=W9(e.right)||`auto`,c.overlayX===`center`?l.alignItems=`center`:l.alignItems=c.overlayX===`end`?`flex-end`:`flex-start`,c.overlayY===`center`?l.justifyContent=`center`:l.justifyContent=c.overlayY===`bottom`?`flex-end`:`flex-start`,s&&(l.maxHeight=W9(s)),t&&(l.maxWidth=W9(t))}this._lastBoundingBoxSize=e,J(this._boundingBox.style,l)}_resetBoundingBoxStyles(){J(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){J(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(a,c){let e={},l=this._hasExactPosition(),s=this._hasFlexibleDimensions,t=this._overlayRef.getConfig();if(l){let f=this._viewportRuler.getViewportScrollPosition();J(e,this._getExactOverlayY(c,a,f)),J(e,this._getExactOverlayX(c,a,f))}else e.position=`static`;let r=``,o=this._getOffset(c,`x`),m=this._getOffset(c,`y`);o&&(r+=`translateX(${o}px) `),m&&(r+=`translateY(${m}px)`),e.transform=r.trim(),t.maxHeight&&(l?e.maxHeight=W9(t.maxHeight):s&&(e.maxHeight=``)),t.maxWidth&&(l?e.maxWidth=W9(t.maxWidth):s&&(e.maxWidth=``)),J(this._pane.style,e)}_getExactOverlayY(a,c,e){let l={top:``,bottom:``},s=this._getOverlayPoint(c,this._overlayRect,a);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,e)),a.overlayY===`bottom`)l.bottom=`${this._document.documentElement.clientHeight-(s.y+this._overlayRect.height)}px`;else l.top=W9(s.y);return l}_getExactOverlayX(a,c,e){let l={left:``,right:``},s=this._getOverlayPoint(c,this._overlayRect,a);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,e));let t;if(this._isRtl()?t=a.overlayX===`end`?`left`:`right`:t=a.overlayX===`end`?`right`:`left`,t===`right`)l.right=`${this._document.documentElement.clientWidth-(s.x+this._overlayRect.width)}px`;else l.left=W9(s.x);return l}_getScrollVisibility(){let a=this._getOriginRect(),c=this._pane.getBoundingClientRect(),e=this._scrollables.map(l=>l.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:v4(a,e),isOriginOutsideView:A1(a,e),isOverlayClipped:v4(c,e),isOverlayOutsideView:A1(c,e)}}_subtractOverflows(a,...c){return c.reduce((e,l)=>e-Math.max(l,0),a)}_getNarrowedViewportRect(){let a=this._document.documentElement.clientWidth,c=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+a-this._getViewportMarginEnd(),bottom:e.top+c-this._getViewportMarginBottom(),width:a-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:c-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(a,c){return c===`x`?a.offsetX==null?this._offsetX:a.offsetX:a.offsetY==null?this._offsetY:a.offsetY}_validatePositions(){}_addPanelClasses(a){this._pane&&Uf(a).forEach(c=>{c!==``&&this._appliedPanelClasses.indexOf(c)===-1&&(this._appliedPanelClasses.push(c),this._pane.classList.add(c))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(a=>{this._pane.classList.remove(a)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let a=this._origin;if(a instanceof pe$2)return a.nativeElement.getBoundingClientRect();if(a instanceof Element)return a.getBoundingClientRect();let c=a.width||0,e=a.height||0;return{top:a.y,bottom:a.y+e,left:a.x,right:a.x+c,height:e,width:c}}_getContainerRect(){let a=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,c=this._overlayContainer.getContainerElement();a&&(c.style.display=`block`);let e=c.getBoundingClientRect();return a&&(c.style.display=``),e}};function J(i,a){for(let c in a)Object.hasOwn(a,c)&&(i[c]=a[c]);return i}function S4(i){if(typeof i!=`number`&&i!=null){let[a,c]=i.split(e3);return!c||c===`px`?parseFloat(a):null}return i||null}function x4(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function a3(i,a){return i===a?!0:i.isOriginClipped===a.isOriginClipped&&i.isOriginOutsideView===a.isOriginOutsideView&&i.isOverlayClipped===a.isOverlayClipped&&i.isOverlayOutsideView===a.isOverlayOutsideView}var y4=`cdk-global-overlay-wrapper`;function D4(i){return new i1}var i1=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(a){let c=a.getConfig();this._overlayRef=a,this._width&&!c.width&&a.updateSize({width:this._width}),this._height&&!c.height&&a.updateSize({height:this._height}),a.hostElement.classList.add(y4),this._isDisposed=!1}top(a=``){return this._bottomOffset=``,this._topOffset=a,this._alignItems=`flex-start`,this}left(a=``){return this._xOffset=a,this._xPosition=`left`,this}bottom(a=``){return this._topOffset=``,this._bottomOffset=a,this._alignItems=`flex-end`,this}right(a=``){return this._xOffset=a,this._xPosition=`right`,this}start(a=``){return this._xOffset=a,this._xPosition=`start`,this}end(a=``){return this._xOffset=a,this._xPosition=`end`,this}width(a=``){return this._overlayRef?this._overlayRef.updateSize({width:a}):this._width=a,this}height(a=``){return this._overlayRef?this._overlayRef.updateSize({height:a}):this._height=a,this}centerHorizontally(a=``){return this.left(a),this._xPosition=`center`,this}centerVertically(a=``){return this.top(a),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let a=this._overlayRef.overlayElement.style,c=this._overlayRef.hostElement.style,{width:l,height:s,maxWidth:t,maxHeight:r}=this._overlayRef.getConfig(),o=(l===`100%`||l===`100vw`)&&(!t||t===`100%`||t===`100vw`),m=(s===`100%`||s===`100vh`)&&(!r||r===`100%`||r===`100vh`),f=this._xPosition,p=this._xOffset,d=this._overlayRef.getConfig().direction===`rtl`,g=``,u=``,T=``;o?T=`flex-start`:f===`center`?(T=`center`,d?u=p:g=p):d?f===`left`||f===`end`?(T=`flex-end`,g=p):(f===`right`||f===`start`)&&(T=`flex-start`,u=p):f===`left`||f===`start`?(T=`flex-start`,g=p):(f===`right`||f===`end`)&&(T=`flex-end`,u=p),a.position=this._cssPosition,a.marginLeft=o?`0`:g,a.marginTop=m?`0`:this._topOffset,a.marginBottom=this._bottomOffset,a.marginRight=o?`0`:u,c.justifyContent=T,c.alignItems=m?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let a=this._overlayRef.overlayElement.style,c=this._overlayRef.hostElement,e=c.style;c.classList.remove(y4),e.justifyContent=e.alignItems=a.marginTop=a.marginBottom=a.marginLeft=a.marginRight=a.position=``,this._overlayRef=null,this._isDisposed=!0}};var B4=(()=>{class i{_injector=p$1(Z$2);global(){return D4()}flexibleConnectedTo(c){return w2(this._injector,c)}static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var O1=new D(`OVERLAY_DEFAULT_CONFIG`);function _2(i,a){i.get(Yt).load(A4);let c=i.get(R4),e=i.get(j$1),l=i.get(Zf),s=i.get(yn$2),t=i.get(eA),r=i.get(vn$1,null,{optional:!0})||i.get(at$1).createRenderer(null,null),o=new y2(a),m=i.get(O1,null,{optional:!0})?.usePopover??!0;o.direction=o.direction||t.value,!e.body||!(`showPopover`in e.body)?o.usePopover=!1:o.usePopover=a?.usePopover??m;let f=e.createElement(`div`),p=e.createElement(`div`);f.id=l.getId(`cdk-overlay-`),f.classList.add(`cdk-overlay-pane`),p.appendChild(f),o.usePopover&&(p.setAttribute(`popover`,`manual`),p.classList.add(`cdk-overlay-popover`));let d=o.usePopover?o.positionStrategy?.getPopoverInsertionPoint?.():null;return B1(d)?d.after(p):d?.type===`parent`?d.element.appendChild(p):c.getContainerElement().appendChild(p),new a1(new Z2(f,s,i),p,f,o,i.get(V),i.get(T4),e,i.get(Cy),i.get(P4),a?.disableAnimations??i.get(pu,null,{optional:!0})===`NoopAnimations`,i.get(ke$1),r)}var O4=(()=>{class i{scrollStrategies=p$1(N4);_positionBuilder=p$1(B4);_injector=p$1(Z$2);create(c){return _2(this._injector,c)}position(){return this._positionBuilder}static ɵfac=function(e){return new(e||i)};static ɵprov=B$2({token:i,factory:i.ɵfac})}return i})();var l3=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var i3=new D(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=p$1(Z$2);return()=>b2(i)}});var D1=(()=>{class i{elementRef=p$1(pe$2);static ɵfac=function(e){return new(e||i)};static ɵdir=ye$2({type:i,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return i})();var F4=new D(`cdk-connected-overlay-default-config`);var s3=(()=>{class i{_dir=p$1(eA,{optional:!0});_injector=p$1(Z$2);_overlayRef;_templatePortal;_backdropSubscription=te$1.EMPTY;_attachSubscription=te$1.EMPTY;_detachSubscription=te$1.EMPTY;_positionSubscription=te$1.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=p$1(i3);_ngZone=p$1(V);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(c){this._offsetX=c,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(c){this._offsetY=c,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(c){typeof c!=`string`&&this._assignConfig(c)}backdropClick=new Ce;positionChange=new Ce;attach=new Ce;detach=new Ce;overlayKeydown=new Ce;overlayOutsideClick=new Ce;constructor(){let c=p$1(eo),e=p$1(uo),l=p$1(F4,{optional:!0}),s=p$1(O1,{optional:!0});this.usePopover=s?.usePopover===!1?null:`global`,this._templatePortal=new r2(c,e),this.scrollStrategy=this._scrollStrategyFactory(),l&&this._assignConfig(l)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(c){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),c.origin&&this.open&&this._position.apply()),c.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=l3);let c=this._overlayRef=_2(this._injector,this._buildConfig());this._attachSubscription=c.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=c.detachments().subscribe(()=>this.detach.emit()),c.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!yD(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let l=this._getOriginElement(),s=dt$1(e);(!l||l!==s&&!l.contains(s))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let c=this._position=this.positionStrategy||this._createPositionStrategy(),e=new y2({direction:this._dir||`ltr`,positionStrategy:c,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(c){let e=this.positions.map(l=>({originX:l.originX,originY:l.originY,overlayX:l.overlayX,overlayY:l.overlayY,offsetX:l.offsetX||this.offsetX,offsetY:l.offsetY||this.offsetY,panelClass:l.panelClass||void 0}));return c.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let c=w2(this._injector,this._getOrigin());return this._updatePositionStrategy(c),c}_getOrigin(){return this.origin instanceof D1?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof D1?this.origin.elementRef.nativeElement:this.origin instanceof pe$2?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let c=this._overlayRef;c.getConfig().hasBackdrop=this.hasBackdrop,c.updateSize({width:this._getWidth()}),c.hasAttached()||c.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=c.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(_I(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(c){this.origin=c.origin??this.origin,this.positions=c.positions??this.positions,this.positionStrategy=c.positionStrategy??this.positionStrategy,this.offsetX=c.offsetX??this.offsetX,this.offsetY=c.offsetY??this.offsetY,this.width=c.width??this.width,this.height=c.height??this.height,this.minWidth=c.minWidth??this.minWidth,this.minHeight=c.minHeight??this.minHeight,this.backdropClass=c.backdropClass??this.backdropClass,this.panelClass=c.panelClass??this.panelClass,this.viewportMargin=c.viewportMargin??this.viewportMargin,this.scrollStrategy=c.scrollStrategy??this.scrollStrategy,this.disableClose=c.disableClose??this.disableClose,this.transformOriginSelector=c.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=c.hasBackdrop??this.hasBackdrop,this.lockPosition=c.lockPosition??this.lockPosition,this.flexibleDimensions=c.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=c.growAfterOpen??this.growAfterOpen,this.push=c.push??this.push,this.disposeOnNavigation=c.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=c.usePopover??this.usePopover,this.matchWidth=c.matchWidth??this.matchWidth}static ɵfac=function(e){return new(e||i)};static ɵdir=ye$2({type:i,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,Le$1],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,Le$1],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,Le$1],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,Le$1],push:[2,`cdkConnectedOverlayPush`,`push`,Le$1],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,c=>c===`url-change`||c===`pop-state`?c:Le$1(c)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,Le$1],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[io]})}return i})();var F1=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Ne({type:i});static ɵinj=_e$1({providers:[O4],imports:[Tc,M4,k1,k1]})}return i})();var t3=20;var r3=new D(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=p$1(Z$2);return()=>b2(i,{scrollThrottle:t3})}});var n3=new D(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var E4=`tooltip-panel`;var o3={passive:!0};var f3=8;var m3=8;var p3=24;var d3=200;var h3=(()=>{class i{_elementRef=p$1(pe$2);_ngZone=p$1(V);_platform=p$1(Me);_ariaDescriber=p$1(_9);_focusMonitor=p$1(yc);_dir=p$1(eA);_injector=p$1(Z$2);_viewContainerRef=p$1(uo);_mediaMatcher=p$1(Ic);_document=p$1(j$1);_renderer=p$1(vn$1);_animationsDisabled=yo();_defaultOptions=p$1(n3,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=H4;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(c){c!==this._position&&(this._position=c,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(c){this._positionAtOrigin=q9(c),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(c){let e=q9(c);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(c){this._showDelay=Hf(c)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(c){this._hideDelay=Hf(c),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(c){let e=this._message;this._message=c!=null?String(c).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(c){this._tooltipClass=c,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new U$1;_isDestroyed=!1;constructor(){let c=this._defaultOptions;c&&(this._showDelay=c.showDelay,this._hideDelay=c.hideDelay,c.position&&(this.position=c.position),c.positionAtOrigin&&(this.positionAtOrigin=c.positionAtOrigin),c.touchGestures&&(this.touchGestures=c.touchGestures),c.tooltipClass&&(this.tooltipClass=c.tooltipClass)),this._viewportMargin=f3}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ao(this._destroyed)).subscribe(c=>{c?c===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let c=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(c,this.message,`tooltip`),this._focusMonitor.stopMonitoring(c)}show(c=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let l=this._createOverlay(e);this._detach(),this._portal=this._portal||new S2(this._tooltipComponent,this._viewContainerRef);let s=this._tooltipInstance=l.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe(Ao(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(c)}hide(c=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(c):(e._cancelPendingAnimations(),this._detach()))}toggle(c){this._isTooltipVisible()?this.hide():this.show(void 0,c)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(c){if(this._overlayRef){let t=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!c)&&t._origin instanceof pe$2)return this._overlayRef;this._detach()}let e=this._injector.get(Q).getAncestorScrollContainers(this._elementRef),l=`${this._cssClassPrefix}-${E4}`,s=w2(this._injector,this.positionAtOrigin?c||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return s.positionChanges.pipe(Ao(this._destroyed)).subscribe(t=>{this._updateCurrentPositionClass(t.connectionPair),this._tooltipInstance&&t.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=_2(this._injector,{direction:this._dir,positionStrategy:s,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,l]:l,scrollStrategy:this._injector.get(r3)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ao(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ao(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ao(this._destroyed)).subscribe(t=>{t.preventDefault(),t.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ao(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(c){let e=c.getConfig().positionStrategy,l=this._getOrigin(),s=this._getOverlayPosition();e.withPositions([this._addOffset(R$1(R$1({},l.main),s.main)),this._addOffset(R$1(R$1({},l.fallback),s.fallback))])}_addOffset(c){let e=m3,l=!this._dir||this._dir.value==`ltr`;return c.originY===`top`?c.offsetY=-e:c.originY===`bottom`?c.offsetY=e:c.originX===`start`?c.offsetX=l?-e:e:c.originX===`end`&&(c.offsetX=l?e:-e),c}_getOrigin(){let c=!this._dir||this._dir.value==`ltr`,e=this.position,l;e==`above`||e==`below`?l={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&c||e==`right`&&!c?l={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&c||e==`left`&&!c)&&(l={originX:`end`,originY:`center`});let{x:s,y:t}=this._invertPosition(l.originX,l.originY);return{main:l,fallback:{originX:s,originY:t}}}_getOverlayPosition(){let c=!this._dir||this._dir.value==`ltr`,e=this.position,l;e==`above`?l={overlayX:`center`,overlayY:`bottom`}:e==`below`?l={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&c||e==`right`&&!c?l={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&c||e==`left`&&!c)&&(l={overlayX:`start`,overlayY:`center`});let{x:s,y:t}=this._invertPosition(l.overlayX,l.overlayY);return{main:l,fallback:{overlayX:s,overlayY:t}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Fd(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(c){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=c instanceof Set?Array.from(c):c,this._tooltipInstance._markForCheck())}_invertPosition(c,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):c===`end`?c=`start`:c===`start`&&(c=`end`),{x:c,y:e}}_updateCurrentPositionClass(c){let{overlayY:e,originX:l,originY:s}=c,t;if(e===`center`?this._dir&&this._dir.value===`rtl`?t=l===`end`?`left`:`right`:t=l===`start`?`left`:`right`:t=e===`bottom`&&s===`top`?`above`:`below`,t!==this._currentPosition){let r=this._overlayRef;if(r){let o=`${this._cssClassPrefix}-${E4}-`;r.removePanelClass(o+this._currentPosition),r.addPanelClass(o+t)}this._currentPosition=t}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,c=>{let e=c.targetTouches?.[0],l=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let s=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,l)},this._defaultOptions?.touchLongPressShowDelay??s)})):this._addListener(`mouseenter`,c=>{this._setupPointerExitEventsIfNeeded();let e;c.x!==void 0&&c.y!==void 0&&(e=c),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,c=>{let e=c.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,c=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(c.clientX,c.clientY),l=this._elementRef.nativeElement;e!==l&&!l.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let c=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,c),this._addListener(`touchcancel`,c)}}}_addListener(c,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,c,e,o3))}_isTouchPlatform(){let c=this._defaultOptions?.detectHoverCapability;return typeof c==`function`?!c():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!c&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let c=this.touchGestures;if(c!==`off`){let e=this._elementRef.nativeElement,l=e.style;(c===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(l.userSelect=l.msUserSelect=l.webkitUserSelect=l.MozUserSelect=`none`),(c===`on`||!e.draggable)&&(l.webkitUserDrag=`none`),l.touchAction=`none`,l.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(c){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,c,`tooltip`),this._isDestroyed||Fd({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=c=>c.type===`keydown`?this._isTooltipVisible()&&c.keyCode===27&&!yD(c):!0;static ɵfac=function(e){return new(e||i)};static ɵdir=ye$2({type:i,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,l){e&2&&In(`mat-mdc-tooltip-disabled`,l.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return i})();var H4=(()=>{class i{_changeDetectorRef=p$1(oc);_elementRef=p$1(pe$2);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=yo();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new U$1;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(c){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},c)}hide(c){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},c)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:c}){(!c||!this._triggerElement.contains(c))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let c=this._elementRef.nativeElement.getBoundingClientRect();return c.height>p3&&c.width>=d3}_handleAnimationEnd({animationName:c}){(c===this._showAnimation||c===this._hideAnimation)&&this._finalizeAnimation(c===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(c){c?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(c){let e=this._tooltip.nativeElement,l=this._showAnimation,s=this._hideAnimation;if(e.classList.remove(c?s:l),e.classList.add(c?l:s),this._isVisible!==c&&(this._isVisible=c,this._changeDetectorRef.markForCheck()),c&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let t=getComputedStyle(e);(t.getPropertyValue(`animation-duration`)===`0s`||t.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}c&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(c))}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){let c=[`tooltip`];return Fe$1({type:i,selectors:[[`mat-tooltip-component`]],viewQuery:function(l,s){if(l&1&&Lv(c,7),l&2){let t;Zx(t=Kx())&&(s._tooltip=t.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(l,s){l&1&&Ov(`mouseleave`,function(r){return s._handleMouseLeave(r)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(l,s){l&1&&(Dn$1(0,`div`,1,0),Rv(`animationend`,function(r){return s._handleAnimationEnd(r)}),Dn$1(2,`div`,2),_N(3),En$1()()),l&2&&(Di(s.tooltipClass),In(`mdc-tooltip--multiline`,s._isMultiline),mi(3),Kv(s.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return i})();var c8=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Ne({type:i});static ɵinj=_e$1({imports:[BM,F1,Tc,L2]})}return i})();var a8={prefix:`fas`,iconName:`trash`,icon:[448,512,[],`f1f8`,`M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z`]};var l8={prefix:`fas`,iconName:`ellipsis-vertical`,icon:[128,512,[`ellipsis-v`],`f142`,`M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z`]};var i8={prefix:`fas`,iconName:`address-card`,icon:[576,512,[62140,`contact-card`,`vcard`],`f2bb`,`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-24-96a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm240-48l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]};var s8={prefix:`fas`,iconName:`file`,icon:[384,512,[128196,128459,61462],`f15b`,`M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z`]};var t8={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]};var r8={prefix:`fas`,iconName:`skull-crossbones`,icon:[448,512,[128369,9760],`f714`,`M384 144C384 64.5 312.4 0 224 0S64 64.5 64 144c0 47.1 25.1 88.9 64 115.2l0 28.8c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-28.8c38.9-26.3 64-68.1 64-115.2zM160 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM445.5 339.7c-6.8-16.3-25.5-24-41.8-17.2L224 397.3 44.3 322.5c-16.3-6.8-35 .9-41.8 17.2s.9 35 17.2 41.8L140.8 432 19.7 482.5C3.4 489.3-4.3 508 2.5 524.3s25.5 24 41.8 17.2L224 466.7 403.7 541.5c16.3 6.8 35-.9 41.8-17.2s-.9-35-17.2-41.8L307.2 432 428.3 381.5c16.3-6.8 24-25.5 17.2-41.8z`]};var n8={prefix:`fas`,iconName:`copy`,icon:[448,512,[],`f0c5`,`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`]};function lt(a,u){return Object.entries(a).filter(([e])=>isNaN(Number(e))).find(([,e])=>e===u)?.[0]}function vt(a,u){return Object.entries(a).filter(([e])=>isNaN(Number(e))).map(([e,t])=>({labelTranslateKey:`${u}.${e.toLowerCase()}`,value:t}))}function xt(a){return a!=null}var wt=class le{transform(e,t){return lt(t,e)??``}static{this.ɵfac=function(t){return new(t||le)}}static{this.ɵpipe=fo({name:`enumKey`,type:le,pure:!0})}};var me=new D(`MAT_OPTION_PARENT_COMPONENT`);var pe=new D(`MatOptgroup`);var de=class{source;isUserInput;constructor(u,e=!1){this.source=u,this.isUserInput=e}};var $=(()=>{class a{_element=p$1(pe$2);_changeDetectorRef=p$1(oc);_parent=p$1(me,{optional:!0});group=p$1(pe,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=p$1(Zf).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Bt$2(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ce;_text;_stateChanges=new U$1;constructor(){let e=p$1(Yt);e.load(kD),e.load(_c),this._signalDisableRipple=!!this._parent&&rr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!yD(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new de(this,e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],i=[`mat-icon`,`*`];function c(s,h){if(s&1&&Mv(0,`mat-pseudo-checkbox`,1),s&2){let o=Gx();Tv(`disabled`,o.disabled)(`state`,o.selected?`checked`:`unchecked`)}}function m(s,h){if(s&1&&Mv(0,`mat-pseudo-checkbox`,3),s&2){let o=Gx();Tv(`disabled`,o.disabled)}}function y(s,h){if(s&1&&(Ps(0,`span`,4),_N(1),df()),s&2){let o=Gx();mi(),pf(`(`,o.group.label,`)`)}}return Fe$1({type:a,selectors:[[`mat-option`]],viewQuery:function(h,o){if(h&1&&Lv(e,7),h&2){let l;Zx(l=Kx())&&(o._text=l.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(h,o){h&1&&Ov(`click`,function(){return o._selectViaInteraction()})(`keydown`,function(p){return o._handleKeydown(p)}),h&2&&(Xs(`id`,o.id),pr(`aria-selected`,o.selected)(`aria-disabled`,o.disabled.toString()),In(`mdc-list-item--selected`,o.selected)(`mat-mdc-option-multiple`,o.multiple)(`mat-mdc-option-active`,o.active)(`mdc-list-item--disabled`,o.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,Le$1]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:i,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(h,o){h&1&&(hr(t),vi(0,c,1,2,`mat-pseudo-checkbox`,1),lt$2(1),Ps(2,`span`,2,0),lt$2(4,1),df(),vi(5,m,1,1,`mat-pseudo-checkbox`,3),vi(6,y,2,1,`span`,4),Mv(7,`div`,5)),h&2&&(yi(o.multiple?0:-1),mi(5),yi(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),mi(),yi(o.group&&o.group._inert?6:-1),mi(),Tv(`matRippleTrigger`,o._getHostElement())(`matRippleDisabled`,o.disabled||o.disableRipple))},dependencies:[I$1,a7],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();function st(a,u,e){if(e.length){let t=u.toArray(),i=e.toArray(),c=0;for(let m=0;m<a+1;m++)t[m].group&&t[m].group===i[c]&&c++;return c}return 0}function ct(a,u,e,t){return a<e?a:a+u>e+t?Math.max(0,a-t+u):e}var he=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[FD,R,$,Tc]})}return a})();var bt$1=new D(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=p$1(Z$2);return()=>b2(a)}});var yt$1=new D(`MAT_SELECT_CONFIG`);var _t$1=new D(`MatSelectTrigger`);var ue=class{source;value;constructor(u,e){this.source=u,this.value=e}};var wn=(()=>{class a{_viewportRuler=p$1(t2);_changeDetectorRef=p$1(oc);_elementRef=p$1(pe$2);_dir=p$1(eA,{optional:!0});_idGenerator=p$1(Zf);_renderer=p$1(vn$1);_parentFormField=p$1(xt$2,{optional:!0});ngControl=p$1(E,{self:!0,optional:!0});_liveAnnouncer=p$1(jM);_defaultOptions=p$1(yt$1,{optional:!0});_animationsDisabled=yo();_popoverLocation;_initialized=new U$1;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,c=st(e,this.options,this.optionGroups),m=t._getHostElement();e===0&&c===1?i.scrollTop=0:i.scrollTop=ct(m.offsetTop,m.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ue(this,e)}_scrollStrategyFactory=p$1(bt$1);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new U$1;_errorStateTracker;stateChanges=new U$1;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Bt$2(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ie$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=dI(()=>{let e=this.options;return e?e.changes.pipe(ga$2(e),Dp(()=>mI(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Dp(()=>this.optionSelectionChanges))});openedChange=new Ce;_openedStream=this.openedChange.pipe(Ln$1(e=>e),ge$1(()=>{}));_closedStream=this.openedChange.pipe(Ln$1(e=>!e),ge$1(()=>{}));selectionChange=new Ce;valueChange=new Ce;constructor(){let e=p$1(Xn$1),t=p$1(Lt$2,{optional:!0}),i=p$1($t,{optional:!0}),c=p$1(new iy(`tabindex`),{optional:!0}),m=p$1(O1,{optional:!0}),y=p$1(mn$2,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ze$1(e,y||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=c==null?0:parseInt(c)||0,this._popoverLocation=m?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new p(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ao(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ao(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ga$2(null),Ao(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(xr(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,c=>{c.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,c=t===13||t===32,m=this._keyManager;if(!m.isTyping()&&c&&!yD(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let y=this.selected;m.onKeydown(e);let s=this.selected;s&&y!==s&&this._liveAnnouncer.announce(s.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,c=i===40||i===38,m=t.isTyping();if(c&&e.altKey)e.preventDefault(),this.close();else if(!m&&(i===13||i===32)&&t.activeItem&&!yD(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!m&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let y=this.options.some(s=>!s.disabled&&!s.selected);this.options.forEach(s=>{s.disabled||(y?s.select():s.deselect())})}else{let y=t.activeItemIndex;t.onKeydown(e),this._multiple&&c&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==y&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!yD(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(c){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof D1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new qf(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=mI(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ao(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),mI(...this.options.map(t=>t._stateChanges)).pipe(Ao(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=dt$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],i=[[[`mat-select-trigger`]],`*`],c=[`mat-select-trigger`,`*`];function m(l,p){if(l&1&&(Ps(0,`span`,4),_N(1),df()),l&2){let n=Gx();mi(),Kv(n.placeholder)}}function y(l,p){l&1&&lt$2(0)}function s(l,p){if(l&1&&(Ps(0,`span`,11),_N(1),df()),l&2){let n=Gx(2);mi(),Kv(n.triggerValue)}}function h(l,p){if(l&1&&(Ps(0,`span`,5),vi(1,y,1,0)(2,s,2,1,`span`,11),df()),l&2){let n=Gx();mi(),yi(n.customTrigger?1:2)}}function o(l,p){if(l&1){let n=zx();Ps(0,`div`,12,1),Ov(`keydown`,function(g){rh(n);let pt=Gx();return oh(pt._handleKeydown(g))}),lt$2(2,1),df()}if(l&2){let n=Gx();Di(n.panelClass),In(`mat-select-panel-animations-enabled`,!n._animationsDisabled)(`mat-primary`,n._parentFormField?.color===`primary`)(`mat-accent`,n._parentFormField?.color===`accent`)(`mat-warn`,n._parentFormField?.color===`warn`)(`mat-undefined`,!n._parentFormField?.color),pr(`id`,n.id+`-panel`)(`aria-multiselectable`,n.multiple)(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n._getPanelAriaLabelledby())}}return Fe$1({type:a,selectors:[[`mat-select`]],contentQueries:function(p,n,d){if(p&1&&Fv(d,_t$1,5)(d,$,5)(d,pe,5),p&2){let g;Zx(g=Kx())&&(n.customTrigger=g.first),Zx(g=Kx())&&(n.options=g),Zx(g=Kx())&&(n.optionGroups=g)}},viewQuery:function(p,n){if(p&1&&Lv(e,5)(t,5)(s3,5),p&2){let d;Zx(d=Kx())&&(n.trigger=d.first),Zx(d=Kx())&&(n.panel=d.first),Zx(d=Kx())&&(n._overlayDir=d.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(p,n){p&1&&Ov(`keydown`,function(g){return n._handleKeydown(g)})(`focus`,function(){return n._onFocus()})(`blur`,function(){return n._onBlur()}),p&2&&(pr(`id`,n.id)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n.panelOpen?n.id+`-panel`:null)(`aria-expanded`,n.panelOpen)(`aria-label`,n.ariaLabel||null)(`aria-required`,n.required.toString())(`aria-disabled`,n.disabled.toString())(`aria-invalid`,n.errorState)(`aria-activedescendant`,n._getAriaActiveDescendant()),In(`mat-mdc-select-disabled`,n.disabled)(`mat-mdc-select-invalid`,n.errorState)(`mat-mdc-select-required`,n.required)(`mat-mdc-select-empty`,n.empty)(`mat-mdc-select-multiple`,n.multiple)(`mat-select-open`,n.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Le$1],disableRipple:[2,`disableRipple`,`disableRipple`,Le$1],tabIndex:[2,`tabIndex`,`tabIndex`,l=>l==null?0:Ii(l)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Le$1],placeholder:`placeholder`,required:[2,`required`,`required`,Le$1],multiple:[2,`multiple`,`multiple`,Le$1],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Le$1],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Ii],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Le$1]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Jv([{provide:bt$3,useExisting:a},{provide:me,useExisting:a}]),io],ngContentSelectors:c,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(p,n){if(p&1&&(hr(i),Ps(0,`div`,2,0),Ov(`click`,function(){return n.open()}),Ps(3,`div`,3),vi(4,m,2,1,`span`,4)(5,h,3,1,`span`,5),df(),Ps(6,`div`,6)(7,`div`,7),gh(),Ps(8,`svg`,8),Mv(9,`path`,9),df()()()(),vv(10,o,3,16,`ng-template`,10),Ov(`detach`,function(){return n.close()})(`backdropClick`,function(){return n.close()})(`overlayKeydown`,function(g){return n._handleOverlayKeydown(g)})),p&2){let d=Xx(1);mi(3),pr(`id`,n._valueId),mi(),yi(n.empty?4:5),mi(6),Tv(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,n._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,n._scrollStrategy)(`cdkConnectedOverlayOrigin`,n._preferredOverlayOrigin||d)(`cdkConnectedOverlayPositions`,n._positions)(`cdkConnectedOverlayWidth`,n._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,n._popoverLocation)}},dependencies:[D1,s3],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return a})();var kn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[F1,he,Tc,L2,Yn$1,he]})}return a})();var Tt=new D(`MAT_MENU_PANEL`);var Ve=(()=>{class a{_isAnchor;_elementRef=p$1(pe$2);_document=p$1(j$1);_focusMonitor=p$1(yc);_parentMenu=p$1(Tt,{optional:!0});_changeDetectorRef=p$1(oc);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new U$1;_focused=new U$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){p$1(Yt).load(kD),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(i,r){i&1&&(gh(),Ps(0,`svg`,2),Mv(1,`polygon`,3),df())}return Fe$1({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(r,o){r&1&&Ov(`click`,function(m){return o._checkDisabled(m)})(`mouseenter`,function(){return o._handleMouseEnter()}),r&2&&(pr(`role`,o.role)(`tabindex`,o._getTabIndex())(`aria-disabled`,o._getAriaDisabled())(`disabled`,o._getDisabled()),In(`mat-mdc-menu-item-highlighted`,o._highlighted)(`mat-mdc-menu-item-submenu-trigger`,o._triggersSubmenu)(`mat-mdc-menu-item-disabled`,o.disabled)(`mat-mdc-menu-item-disabled-interactive`,o.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Le$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Le$1],disableRipple:[2,`disableRipple`,`disableRipple`,Le$1]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(r,o){r&1&&(hr(e),lt$2(0),Ps(1,`span`,0),lt$2(2,1),df(),Mv(3,`div`,1),vi(4,n,2,0,`svg`,2)),r&2&&(mi(3),Tv(`matRippleDisabled`,o.disableRipple||o.disabled)(`matRippleTrigger`,o._getHostElement()),mi(),yi(o._triggersSubmenu?4:-1))},dependencies:[a7],encapsulation:2})})()}return a})();var sa$1=new D(`MatMenuContent`);var la$1=(()=>{class a{_template=p$1(eo);_appRef=p$1(yn$2);_injector=p$1(Z$2);_viewContainerRef=p$1(uo);_document=p$1(j$1);_changeDetectorRef=p$1(oc);_portal;_outlet;_attached=new U$1;attach(e={}){this._portal||(this._portal=new r2(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new Z2(this._document.createElement(`div`),this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal?.isAttached&&this._portal.detach()}ngOnDestroy(){this.detach(),this._outlet?.dispose()}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[`ng-template`,`matMenuContent`,``]],features:[Jv([{provide:sa$1,useExisting:a}])]})}return a})();var ja=new D(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var It=`_mat-menu-enter`;var ut=`_mat-menu-exit`;var Oe=(()=>{class a{_elementRef=p$1(pe$2);_changeDetectorRef=p$1(oc);_injector=p$1(Z$2);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=yo();_allItems;_directDescendantItems=new sr;_classList={};_panelAnimationState=`void`;_animationDone=new U$1;_isAnimating=Bt$2(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=R$1({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Ce;close=this.closed;panelId=p$1(Zf).getId(`mat-menu-panel-`);constructor(){let e=p$1(ja);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Yf(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(ga$2(this._directDescendantItems),Dp(e=>mI(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ga$2(this._directDescendantItems),Dp(t=>mI(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:yD(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Fd(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ae$3(R$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===ut;(t||e===It)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===It||e===ut)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ut),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?It:ut)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ga$2(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`];function t(n,i){if(n&1){let r=zx();Dn$1(0,`div`,0),Rv(`click`,function(){rh(r);let s=Gx();return oh(s.closed.emit(`click`))})(`animationstart`,function(s){rh(r);let m=Gx();return oh(m._onAnimationStart(s.animationName))})(`animationend`,function(s){rh(r);let m=Gx();return oh(m._onAnimationDone(s.animationName))})(`animationcancel`,function(s){rh(r);let m=Gx();return oh(m._onAnimationDone(s.animationName))}),Dn$1(1,`div`,1),lt$2(2),En$1()()}if(n&2){let r=Gx();Di(r._classList),In(`mat-menu-panel-animations-disabled`,r._animationsDisabled)(`mat-menu-panel-exit-animation`,r._panelAnimationState===`void`)(`mat-menu-panel-animating`,r._isAnimating()),Xs(`id`,r.panelId),pr(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,r.ariaLabelledby||null)(`aria-describedby`,r.ariaDescribedby||null)}}return Fe$1({type:a,selectors:[[`mat-menu`]],contentQueries:function(i,r,o){if(i&1&&Fv(o,sa$1,5)(o,Ve,5)(o,Ve,4),i&2){let s;Zx(s=Kx())&&(r.lazyContent=s.first),Zx(s=Kx())&&(r._allItems=s),Zx(s=Kx())&&(r.items=s)}},viewQuery:function(i,r){if(i&1&&Lv(eo,5),i&2){let o;Zx(o=Kx())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(i,r){i&2&&pr(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Le$1],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:Le$1(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Jv([{provide:Tt,useExisting:a}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(i,r){i&1&&(hr(),yv(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return a})();var Xa=new D(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=p$1(Z$2);return()=>b2(a)}});var Ee=/* @__PURE__ */ new WeakMap;var Ua=(()=>{class a{_canHaveBackdrop;_element=p$1(pe$2);_viewContainerRef=p$1(uo);_menuItemInstance=p$1(Ve,{optional:!0,self:!0});_dir=p$1(eA,{optional:!0});_focusMonitor=p$1(yc);_ngZone=p$1(V);_injector=p$1(Z$2);_scrollStrategy=p$1(Xa);_changeDetectorRef=p$1(oc);_animationsDisabled=yo();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=te$1.EMPTY;_menuCloseSubscription=te$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=p$1(Tt,{optional:!0});this._parentMaterialMenu=t instanceof Oe?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Ee.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=Ee.get(t);Ee.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),r=i.getConfig(),o=r.positionStrategy;this._setPosition(t,o),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof Oe&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Ao(t.close)).subscribe(()=>{o.withLockedPosition(!1).reapplyLastPosition(),o.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof Oe&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(xr(1)).subscribe(()=>{t.detach(),Ee.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&Ee.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=_2(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof Oe&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new y2({positionStrategy:w2(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,r=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,r)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[r,o]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[s,m]=[r,o],[d,h]=[n,i],b=0;if(this._triggersSubmenu()){if(h=n=e.xPosition===`before`?`start`:`end`,i=d=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let S=this._parentMaterialMenu.items.first;this._parentInnerPadding=S?S._getHostElement().offsetTop:0}b=r===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(s=r===`top`?`bottom`:`top`,m=o===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:s,overlayX:d,overlayY:r,offsetY:b},{originX:i,originY:s,overlayX:h,overlayY:r,offsetY:b},{originX:n,originY:m,overlayX:d,overlayY:o,offsetY:-b},{originX:i,originY:m,overlayX:h,overlayY:o,offsetY:-b}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:el(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ln$1(r=>this._menuOpen&&r!==this._menuItemInstance)):el();return mI(e,n,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new r2(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Ee.get(e)===this}_triggerIsAriaDisabled(){return Le$1(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){nC()};static ɵdir=ye$2({type:a})}return a})();var da$1=(()=>{class a extends Ua{_cleanupTouchstart;_hoverSubscription=te$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Ce;onMenuOpen=this.menuOpened;menuClosed=new Ce;onMenuClose=this.menuClosed;constructor(){super(!0);let e=p$1(vn$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Fi(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Ri(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Ov(`click`,function(r){return n._handleClick(r)})(`mousedown`,function(r){return n._handleMousedown(r)})(`keydown`,function(r){return n._handleKeydown(r)}),t&2&&pr(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[mr]})}return a})();var ca$1=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[FD,F1,Tc,L2]})}return a})();var Et=(()=>{class a{changes=new U$1;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,n)=>{if(n==0||t==0)return`0 of ${n}`;n=Math.max(n,0);let i=e*t,r=i<n?Math.min(i+t,n):i+t;return`${i+1} \u2013 ${r} of ${n}`};static ɵfac=function(t){return new(t||a)};static ɵprov=B$2({token:a,factory:a.ɵfac})}return a})();var qa=50;var $a=new D(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var Fe=(()=>{class a{_intl=p$1(Et);_changeDetectorRef=p$1(oc);_formFieldAppearance;_pageSizeLabelId=p$1(Zf).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new No(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Ii(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Ce;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=p$1($a,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:n,pageSizeOptions:i,hidePageSize:r,showFirstLastButtons:o}=t;n!=null&&(this._pageSize=n),i!=null&&(this._pageSizeOptions=i),r!=null&&(this.hidePageSize=r),o!=null&&(this.showFirstLastButtons=o)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,n=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(n)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:qa),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(s,m){if(s&1&&(Ps(0,`mat-option`,17),_N(1),df()),s&2){let d=m.$implicit;Tv(`value`,d),mi(),pf(` `,d,` `)}}function t(s,m){if(s&1){let d=zx();Ps(0,`mat-form-field`,14)(1,`mat-select`,16,0),Ov(`selectionChange`,function(b){rh(d);let S=Gx(2);return oh(S._changePageSize(b.value))}),Px(3,e,2,2,`mat-option`,17,Lx),df(),Ps(5,`div`,18),Ov(`click`,function(){rh(d);let b=Xx(2);return oh(b.open())}),df()()}if(s&2){let d=Gx(2);Tv(`appearance`,d._formFieldAppearance)(`color`,d.color),mi(),Tv(`value`,d.pageSize)(`disabled`,d.disabled),Nv(`aria-labelledby`,d._pageSizeLabelId),Tv(`panelClass`,d.selectConfig.panelClass||``)(`disableOptionCentering`,d.selectConfig.disableOptionCentering),mi(2),jx(d._displayedPageSizeOptions)}}function n(s,m){if(s&1&&(Ps(0,`div`,15),_N(1),df()),s&2){let d=Gx(2);mi(),Kv(d.pageSize)}}function i(s,m){if(s&1&&(Ps(0,`div`,3)(1,`div`,13),_N(2),df(),vi(3,t,6,7,`mat-form-field`,14),vi(4,n,2,1,`div`,15),df()),s&2){let d=Gx();mi(),pr(`id`,d._pageSizeLabelId),mi(),pf(` `,d._intl.itemsPerPageLabel,` `),mi(),yi(d._displayedPageSizeOptions.length>1?3:-1),mi(),yi(d._displayedPageSizeOptions.length<=1?4:-1)}}function r(s,m){if(s&1){let d=zx();Ps(0,`button`,19),Ov(`click`,function(){rh(d);let b=Gx();return oh(b._buttonClicked(0,b._previousButtonsDisabled()))}),gh(),Ps(1,`svg`,8),Mv(2,`path`,20),df()()}if(s&2){let d=Gx();Tv(`matTooltip`,d._intl.firstPageLabel)(`matTooltipDisabled`,d._previousButtonsDisabled())(`disabled`,d._previousButtonsDisabled())(`tabindex`,d._previousButtonsDisabled()?-1:null),pr(`aria-label`,d._intl.firstPageLabel)}}function o(s,m){if(s&1){let d=zx();Ps(0,`button`,21),Ov(`click`,function(){rh(d);let b=Gx();return oh(b._buttonClicked(b.getNumberOfPages()-1,b._nextButtonsDisabled()))}),gh(),Ps(1,`svg`,8),Mv(2,`path`,22),df()()}if(s&2){let d=Gx();Tv(`matTooltip`,d._intl.lastPageLabel)(`matTooltipDisabled`,d._nextButtonsDisabled())(`disabled`,d._nextButtonsDisabled())(`tabindex`,d._nextButtonsDisabled()?-1:null),pr(`aria-label`,d._intl.lastPageLabel)}}return Fe$1({type:a,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,Ii],length:[2,`length`,`length`,Ii],pageSize:[2,`pageSize`,`pageSize`,Ii],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,Le$1],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,Le$1],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,Le$1]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(m,d){m&1&&(Ps(0,`div`,1)(1,`div`,2),vi(2,i,5,4,`div`,3),Ps(3,`div`,4)(4,`div`,5),_N(5),df(),vi(6,r,3,5,`button`,6),Ps(7,`button`,7),Ov(`click`,function(){return d._buttonClicked(d.pageIndex-1,d._previousButtonsDisabled())}),gh(),Ps(8,`svg`,8),Mv(9,`path`,9),df()(),bh(),Ps(10,`button`,10),Ov(`click`,function(){return d._buttonClicked(d.pageIndex+1,d._nextButtonsDisabled())}),gh(),Ps(11,`svg`,8),Mv(12,`path`,11),df()(),vi(13,o,3,5,`button`,12),df()()()),m&2&&(mi(2),yi(d.hidePageSize?-1:2),mi(3),pf(` `,d._intl.getRangeLabel(d.pageIndex,d.pageSize,d.length),` `),mi(),yi(d.showFirstLastButtons?6:-1),mi(),Tv(`matTooltip`,d._intl.previousPageLabel)(`matTooltipDisabled`,d._previousButtonsDisabled())(`disabled`,d._previousButtonsDisabled())(`tabindex`,d._previousButtonsDisabled()?-1:null),pr(`aria-label`,d._intl.previousPageLabel),mi(3),Tv(`matTooltip`,d._intl.nextPageLabel)(`matTooltipDisabled`,d._nextButtonsDisabled())(`disabled`,d._nextButtonsDisabled())(`tabindex`,d._nextButtonsDisabled()?-1:null),pr(`aria-label`,d._intl.nextPageLabel),mi(3),yi(d.showFirstLastButtons?13:-1))},dependencies:[Xe$2,wn,$,QM,h3],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return a})();var ma$1=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[j7,kn,c8,Fe]})}return a})();var Ya=new D(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var pa$1=(()=>{class a{_elementRef=p$1(pe$2);_ngZone=p$1(V);_changeDetectorRef=p$1(oc);_renderer=p$1(vn$1);_cleanupTransitionEnd;constructor(){let e=zM(),t=p$1(Ya,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=ua$1(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=ua$1(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Ce;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(t,n){t&1&&_n$2(0,`div`,2)}return Fe$1({type:a,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(n,i){n&2&&(pr(`aria-valuenow`,i._isIndeterminate()?null:i.value)(`mode`,i.mode),Di(`mat-`+i.color),In(`_mat-animation-noopable`,i._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!i._isNoopAnimation)(`mdc-linear-progress--indeterminate`,i._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,Ii],bufferValue:[2,`bufferValue`,`bufferValue`,Ii],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(n,i){n&1&&(Dn$1(0,`div`,0),_n$2(1,`div`,1),vi(2,e,1,0,`div`,2),En$1(),Dn$1(3,`div`,3),_n$2(4,`span`,4),En$1(),Dn$1(5,`div`,5),_n$2(6,`span`,4),En$1()),n&2&&(mi(),Js(`flex-basis`,i._getBufferBarFlexBasis()),mi(),yi(i.mode===`buffer`?2:-1),mi(),Js(`transform`,i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return a})();function ua$1(a,l=0,e=100){return Math.max(l,Math.min(e,a))}var ga$1=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[Tc]})}return a})();var se=new D(`CDK_TABLE`);var ft=(()=>{class a{template=p$1(eo);static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`cdkCellDef`,``]]})}return a})();var ht=(()=>{class a{template=p$1(eo);static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`cdkHeaderCellDef`,``]]})}return a})();var ba$1=(()=>{class a{template=p$1(eo);static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`cdkFooterCellDef`,``]]})}return a})();var ye=(()=>{class a{_table=p$1(se,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,n,i){if(t&1&&Fv(i,ft,5)(i,ht,5)(i,ba$1,5),t&2){let r;Zx(r=Kx())&&(n.cell=r.first),Zx(r=Kx())&&(n.headerCell=r.first),Zx(r=Kx())&&(n.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,Le$1],stickyEnd:[2,`stickyEnd`,`stickyEnd`,Le$1]}})}return a})();var gt=class{constructor(l,e){e.nativeElement.classList.add(...l._columnCssClassName)}};var ya$1=(()=>{class a extends gt{constructor(){super(p$1(ye),p$1(pe$2))}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[mr]})}return a})();var va$1=(()=>{class a extends gt{constructor(){let e=p$1(ye),t=p$1(pe$2);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute(`role`,n)}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[mr]})}return a})();var Nt=(()=>{class a{template=p$1(eo);_differs=p$1(by);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Xe?e.headerCell.template:this instanceof Pt?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,features:[io]})}return a})();var Xe=(()=>{class a extends Nt{_table=p$1(se,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,Le$1]},features:[mr,io]})}return a})();var Pt=(()=>{class a extends Nt{_table=p$1(se,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,Le$1]},features:[mr,io]})}return a})();var _t=(()=>{class a extends Nt{_table=p$1(se,{optional:!0});when;static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[mr]})}return a})();var xe=(()=>{class a{_viewContainer=p$1(uo);cells;context;static mostRecentCellOutlet=null;constructor(){a.mostRecentCellOutlet=this}ngOnDestroy(){a.mostRecentCellOutlet===this&&(a.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`cdkCellOutlet`,``]]})}return a})();var Ft=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=Fe$1({type:a,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&kv(0,0)},dependencies:[xe],encapsulation:2,changeDetection:1})}return a})();var At$1=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=Fe$1({type:a,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&kv(0,0)},dependencies:[xe],encapsulation:2,changeDetection:1})}return a})();var wa$1=(()=>{class a{templateRef=p$1(eo);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return a})();var fa$1=[`top`,`bottom`,`left`,`right`];var Ot=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=/* @__PURE__ */ new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(l=>this._updateCachedSizes(l)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(l,e,t=!0,n=!0,i,r,o){this._isNativeHtmlTable=l,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=i,this._positionListener=r,this._tableInjector=o,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(l,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(l);let t=[];for(let n of l)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));Fd({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(l,e,t,n=!0,i=!0){if(!l.length||!this._isBrowser||!(e.some(W=>W)||t.some(W=>W))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=l[0],o=r.children.length,s=this.direction===`rtl`,m=s?`right`:`left`,d=s?`left`:`right`,h=e.lastIndexOf(!0),b=t.indexOf(!0),S,Ue,Ke;i&&this._updateStickyColumnReplayQueue({rows:[...l],stickyStartStates:[...e],stickyEndStates:[...t]}),Fd({earlyRead:()=>{S=this._getCellWidths(r,n),Ue=this._getStickyStartColumnPositions(S,e),Ke=this._getStickyEndColumnPositions(S,t)},write:()=>{for(let W of l)for(let L=0;L<o;L++){let qe=W.children[L];e[L]&&this._addStickyStyle(qe,m,Ue[L],L===h),t[L]&&this._addStickyStyle(qe,d,Ke[L],L===b)}this._positionListener&&S.some(W=>!!W)&&(this._positionListener.stickyColumnsUpdated({sizes:h===-1?[]:S.slice(0,h+1).map((W,L)=>e[L]?W:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:b===-1?[]:S.slice(b).map((W,L)=>t[L+b]?W:null).reverse()}))}},{injector:this._tableInjector})}stickRows(l,e,t){if(!this._isBrowser)return;let n=t===`bottom`?l.slice().reverse():l,i=t===`bottom`?e.slice().reverse():e,r=[],o=[],s=[];Fd({earlyRead:()=>{for(let m=0,d=0;m<n.length;m++){if(!i[m])continue;r[m]=d;let h=n[m];s[m]=this._isNativeHtmlTable?Array.from(h.children):[h];let b=this._retrieveElementSize(h).height;d+=b,o[m]=b}},write:()=>{let m=i.lastIndexOf(!0);for(let d=0;d<n.length;d++){if(!i[d])continue;let h=r[d],b=d===m;for(let S of s[d])this._addStickyStyle(S,t,h,b)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:o,offsets:r,elements:s}):this._positionListener?.stickyFooterRowsUpdated({sizes:o,offsets:r,elements:s})}},{injector:this._tableInjector})}updateStickyFooterContainer(l,e){this._isNativeHtmlTable&&Fd({write:()=>{let t=l.querySelector(`tfoot`);t&&(e.some(n=>!n)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(l,e){if(!l.classList.contains(this._stickCellCss))return;for(let n of e)l.style[n]=``,l.classList.remove(this._borderCellCss[n]);fa$1.some(n=>e.indexOf(n)===-1&&l.style[n])?l.style.zIndex=this._getCalculatedZIndex(l):(l.style.zIndex=``,this._needsPositionStickyOnElement&&(l.style.position=``),l.classList.remove(this._stickCellCss))}_addStickyStyle(l,e,t,n){l.classList.add(this._stickCellCss),n&&l.classList.add(this._borderCellCss[e]),l.style[e]=`${t}px`,l.style.zIndex=this._getCalculatedZIndex(l),this._needsPositionStickyOnElement&&(l.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(l){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of fa$1)l.style[n]&&(t+=e[n]);return t?`${t}`:``}_getCellWidths(l,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=l.children;for(let i=0;i<n.length;i++){let r=n[i];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(l,e){let t=[],n=0;for(let i=0;i<l.length;i++)e[i]&&(t[i]=n,n+=l[i]);return t}_getStickyEndColumnPositions(l,e){let t=[],n=0;for(let i=l.length;i>0;i--)e[i]&&(t[i]=n,n+=l[i]);return t}_retrieveElementSize(l){let e=this._elemSizeCache.get(l);if(e)return e;let t=l.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(l,n),this._resizeObserver.observe(l,{box:`border-box`})),n}_updateStickyColumnReplayQueue(l){this._removeFromStickyColumnReplayQueue(l.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(l)}_removeFromStickyColumnReplayQueue(l){let e=new Set(l);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(l){let e=!1;for(let t of l){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&Ga(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Ga(a){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(l=>a.classList.contains(l))}function ha$1(a){return Error(`Could not find column with id "${a}".`)}var je=new D(`STICKY_POSITIONING_LISTENER`);var zt=(()=>{class a{viewContainer=p$1(uo);elementRef=p$1(pe$2);constructor(){let e=p$1(se);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`rowOutlet`,``]]})}return a})();var Bt=(()=>{class a{viewContainer=p$1(uo);elementRef=p$1(pe$2);constructor(){let e=p$1(se);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`headerRowOutlet`,``]]})}return a})();var Lt$1=(()=>{class a{viewContainer=p$1(uo);elementRef=p$1(pe$2);constructor(){let e=p$1(se);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`footerRowOutlet`,``]]})}return a})();var Ht=(()=>{class a{viewContainer=p$1(uo);elementRef=p$1(pe$2);constructor(){let e=p$1(se);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||a)};static ɵdir=ye$2({type:a,selectors:[[``,`noDataRowOutlet`,``]]})}return a})();var Vt=(()=>{class a{_differs=p$1(by);_changeDetectorRef=p$1(oc);_elementRef=p$1(pe$2);_dir=p$1(eA,{optional:!0});_platform=p$1(Me);_viewRepeater;_viewportRuler=p$1(t2);_injector=p$1(Z$2);_virtualScrollViewport=p$1(R0,{optional:!0,host:!0});_positionListener=p$1(je,{optional:!0})||p$1(je,{optional:!0,skipSelf:!0});_document=p$1(j$1);_data;_renderedRange;_onDestroy=new U$1;_renderRows;_renderChangeSubscription=null;_columnDefsByName=/* @__PURE__ */ new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=/* @__PURE__ */ new Set;_customRowDefs=/* @__PURE__ */ new Set;_customHeaderRowDefs=/* @__PURE__ */ new Set;_customFooterRowDefs=/* @__PURE__ */ new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=/* @__PURE__ */ new Map;_rowDefsByView=/* @__PURE__ */ new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new U$1;_footerRowStickyUpdates=new U$1;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new U$1;_dataStream=new U$1;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Ce;viewChange=new Fn$1({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){p$1(new iy(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ao(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new T_:new y$2,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),fq(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,i,r)=>this._getEmbeddedViewArgs(n.item,r),n=>n.item.data,n=>{if(n.operation===Yi.INSERTED&&n.context){this._renderCellTemplateForItem(n.record.item.rowDef,n.context);let i=t.get(n.record.currentIndex);this._rowDefsByView.set(i,n.record.item.rowDef)}}),e.forEachIdentityChange(n=>{let i=n.currentIndex,r=t.get(i);if(this._rowDefsByView.get(r)!==n.item.rowDef){t.remove(i);let o=this._renderRow(this._rowOutlet,n.item.rowDef,i,{$implicit:n.item.data});this._rowDefsByView.set(o,n.item.rowDef)}else r.context.$implicit=n.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=_a$1(this._headerRowOutlet,`thead`);n&&(n.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=_a$1(this._footerRowOutlet,`tfoot`);n&&(n.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((i,r)=>{this._addStickyColumnStyles([i],this._headerRowDefs[r])}),this._rowDefs.forEach(i=>{let r=[];for(let o=0;o<t.length;o++)this._renderRows[o].rowDef===i&&r.push(t[o]);this._addStickyColumnStyles(r,i)}),n.forEach((i,r)=>{this._addStickyColumnStyles([i],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(i=>i.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=/* @__PURE__ */ new Map;for(let i=this._renderedRange.start;i<t;i++){let r=this._data[i],o=this._getRenderRowsForData(r,i,n.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,/* @__PURE__ */ new WeakMap);for(let s=0;s<o.length;s++){let m=o[s],d=this._cachedRenderRowsMap.get(m.data);d.has(m.rowDef)?d.get(m.rowDef).push(m):d.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(r=>{let o=n&&n.has(r)?n.get(r):[];if(o.length){let s=o.shift();return s.dataIndex=t,s}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),pt(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=pt(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=pt(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=pt(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,o)=>{let s=!!o.getColumnsDiff();return r||s},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let i=this._footerRowDefs.reduce(e,!1);return i&&this._forceRenderFooterRows(),t||n||i}_switchDataSource(e){this._data=[],fq(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;fq(this.dataSource)?e=this.dataSource.connect(this):tI(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=el(this.dataSource)),this._renderChangeSubscription=ol([e,this.viewChange]).pipe(Ao(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(o=>{let s=this._columnDefsByName.get(o);if(!s)throw ha$1(o);return s}),i=n.map(o=>o.sticky),r=n.map(o=>o.stickyEnd);this._stickyStyler.updateStickyColumns(e,i,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let i=e.viewContainer.get(n);t.push(i.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(i=>!i.when||i.when(t,e));else{let i=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;i&&n.push(i)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,i={$implicit:e.data};return{templateRef:n.template,context:i,index:t}}_renderRow(e,t,n,i={}){let r=e.viewContainer.createEmbeddedView(t.template,i,n);return this._renderCellTemplateForItem(t,i),r}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))xe.mostRecentCellOutlet&&xe.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let r=e.get(t).context;r.count=n,r.first=t===0,r.last=t===n-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);if(!n)throw ha$1(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new Ot(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:el()).pipe(Ao(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?J_:X_;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(pI(0,t),Ao(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,i)=>this._measureRangeSize(n,i)}),ol([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ao(this._onDestroy)).subscribe(([n,i])=>{if(!(!i.sizes||!i.offsets||!i.elements))for(let r=0;r<i.elements.length;r++){let o=i.elements[r];if(o){let s=i.offsets[r],m=n!==0?Math.max(n-s,s):-s;for(let d of o)d.style.top=`${-m}px`}}}),ol([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ao(this._onDestroy)).subscribe(([n,i])=>{if(!(!i.sizes||!i.offsets||!i.elements))for(let r=0;r<i.elements.length;r++){let o=i.elements[r];if(o)for(let s of o)s.style.bottom=`${n+i.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let i=n.createEmbeddedView(e.templateRef),r=i.rootNodes[0];if(i.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let o=r.querySelectorAll(e._cellSelector);for(let s=0;s<o.length;s++)o[s].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let n=this.viewChange.value,i=this._rowOutlet.viewContainer;e.start<n.start||(e.end,n.end);let r=e.start-n.start,o=e.end-e.start,s,m;for(let b=0;b<o;b++){let S=i.get(b+r);if(S&&S.rootNodes.length){s=m=S.rootNodes[0];break}}for(let b=o-1;b>-1;b--){let S=i.get(b+r);if(S&&S.rootNodes.length){m=S.rootNodes[S.rootNodes.length-1];break}}let d=s?.getBoundingClientRect?.(),h=m?.getBoundingClientRect?.();return d&&h?h.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function n(o,s){o&1&&lt$2(0,2)}function i(o,s){o&1&&(Ps(0,`thead`,0),kv(1,1),df(),Ps(2,`tbody`,0),kv(3,2)(4,3),df(),Ps(5,`tfoot`,0),kv(6,4),df())}function r(o,s){o&1&&kv(0,1)(1,2)(2,3)(3,4)}return Fe$1({type:a,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(s,m,d){if(s&1&&Fv(d,wa$1,5)(d,ye,5)(d,_t,5)(d,Xe,5)(d,Pt,5),s&2){let h;Zx(h=Kx())&&(m._noDataRow=h.first),Zx(h=Kx())&&(m._contentColumnDefs=h),Zx(h=Kx())&&(m._contentRowDefs=h),Zx(h=Kx())&&(m._contentHeaderRowDefs=h),Zx(h=Kx())&&(m._contentFooterRowDefs=h)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(s,m){s&2&&In(`cdk-table-fixed-layout`,m.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,Le$1],fixedLayout:[2,`fixedLayout`,`fixedLayout`,Le$1],recycleRows:[2,`recycleRows`,`recycleRows`,Le$1]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[Jv([{provide:se,useExisting:a},{provide:je,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(s,m){s&1&&(hr(e),lt$2(0),lt$2(1,1),vi(2,n,1,0),vi(3,i,7,0)(4,r,4,0)),s&2&&(mi(2),yi(m._isServer?2:-1),mi(),yi(m._isNativeHtmlTable?3:4))},dependencies:[Bt,zt,Ht,Lt$1],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return a})();function pt(a,l){return a.concat(Array.from(l))}function _a$1(a,l){let e=l.toUpperCase(),t=a.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n===`TABLE`)break;t=t.parentNode}return null}var Ca$1=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[k1]})}return a})();var Da=new D(`MAT_SORT_DEFAULT_OPTIONS`);var Ae=(()=>{class a{_defaultOptions;_initializedStream=new No(1);sortables=/* @__PURE__ */ new Map;_stateChanges=new U$1;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new Ce;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=Za(e.start||this.start,t),i=n.indexOf(this.direction)+1;return i>=n.length&&(i=0),n[i]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(t){return new(t||a)(ct$2(Da,8))};static ɵdir=ye$2({type:a,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,Le$1],disabled:[2,`matSortDisabled`,`disabled`,Le$1]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[io]})}return a})();function Za(a,l){let e=[`asc`,`desc`];return a==`desc`&&e.reverse(),l||e.push(``),e}var xa$1=(()=>{class a{_sort=p$1(Ae,{optional:!0});_columnDef=p$1(ye,{optional:!0});_changeDetectorRef=p$1(oc);_focusMonitor=p$1(yc);_elementRef=p$1(pe$2);_ariaDescriber=p$1(_9,{optional:!0});_renderChanges;_animationsDisabled=yo();_recentlyCleared=Bt$2(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){p$1(Yt).load(kD);let e=p$1(Da,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=mI(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`,[[``,`matSortHeaderIcon`,``]]],t=[`*`,`[matSortHeaderIcon]`];function n(r,o){r&1&&(gh(),Dn$1(0,`svg`,3),_n$2(1,`path`,4),En$1())}function i(r,o){r&1&&(Dn$1(0,`div`,2),lt$2(1,1,null,n,2,0),En$1())}return Fe$1({type:a,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(o,s){o&1&&Ov(`click`,function(){return s._toggleOnInteraction()})(`keydown`,function(d){return s._handleKeydown(d)})(`mouseleave`,function(){return s._recentlyCleared.set(null)}),o&2&&(pr(`aria-sort`,s._getAriaSortAttribute()),In(`mat-sort-header-disabled`,s._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,Le$1],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,Le$1]},exportAs:[`matSortHeader`],ngContentSelectors:t,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(o,s){o&1&&(hr(e),Dn$1(0,`div`,0)(1,`div`,1),lt$2(2),En$1(),vi(3,i,3,0,`div`,2),En$1()),o&2&&(In(`mat-sort-header-sorted`,s._isSorted())(`mat-sort-header-position-before`,s.arrowPosition===`before`)(`mat-sort-header-descending`,s._sort.direction===`desc`)(`mat-sort-header-ascending`,s._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,s._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,s._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,s._animationsDisabled),pr(`tabindex`,s._isDisabled()?null:0)(`role`,s._isDisabled()?null:`button`),mi(3),yi(s._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})})()}return a})();var Sa$1=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[Tc]})}return a})();var Ma=(()=>{class a extends Vt{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function n(o,s){o&1&&lt$2(0,2)}function i(o,s){o&1&&(Ps(0,`thead`,0),kv(1,1),df(),Ps(2,`tbody`,2),kv(3,3)(4,4),df(),Ps(5,`tfoot`,0),kv(6,5),df())}function r(o,s){o&1&&kv(0,1)(1,3)(2,4)(3,5)}return Fe$1({type:a,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(s,m){s&2&&In(`mat-table-fixed-layout`,m.fixedLayout)},exportAs:[`matTable`],features:[Jv([{provide:Vt,useExisting:a},{provide:se,useExisting:a},{provide:je,useValue:null}]),mr],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(s,m){s&1&&(hr(e),lt$2(0),lt$2(1,1),vi(2,n,1,0),vi(3,i,7,0)(4,r,4,0)),s&2&&(mi(2),yi(m._isServer?2:-1),mi(),yi(m._isNativeHtmlTable?3:4))},dependencies:[Bt,zt,Ht,Lt$1],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var ka$1=(()=>{class a extends ft{static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[``,`matCellDef`,``]],features:[Jv([{provide:ft,useExisting:a}]),mr]})}return a})();var Ra=(()=>{class a extends ht{static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[``,`matHeaderCellDef`,``]],features:[Jv([{provide:ht,useExisting:a}]),mr]})}return a})();var Ia$1=(()=>{class a extends ye{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[Jv([{provide:ye,useExisting:a}]),mr]})}return a})();var Ta$1=(()=>{class a extends ya$1{static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[mr]})}return a})();var Ea=(()=>{class a extends va$1{static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[mr]})}return a})();var Oa=(()=>{class a extends Xe{static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,Le$1]},features:[Jv([{provide:Xe,useExisting:a}]),mr]})}return a})();var Na=(()=>{class a extends _t{static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵdir=ye$2({type:a,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[Jv([{provide:_t,useExisting:a}]),mr]})}return a})();var Pa=(()=>{class a extends Ft{static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵcmp=Fe$1({type:a,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[Jv([{provide:Ft,useExisting:a}]),mr],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&kv(0,0)},dependencies:[xe],encapsulation:2,changeDetection:1})}return a})();var Fa=(()=>{class a extends At$1{static ɵfac=(()=>{let e;return function(n){return(e||(e=hd(a)))(n||a)}})();static ɵcmp=Fe$1({type:a,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[Jv([{provide:At$1,useExisting:a}]),mr],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&kv(0,0)},dependencies:[xe],encapsulation:2,changeDetection:1})}return a})();var Aa=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ne({type:a});static ɵinj=_e$1({imports:[Ca$1,Tc]})}return a})();var ei=9007199254740991;var bt=class extends N_{_data;_renderData=new Fn$1([]);_filter=new Fn$1(``);_internalPageChanges=new U$1;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(l){l=Array.isArray(l)?l:[],this._data.next(l),this._renderChangesSubscription||this._filterData(l)}get filter(){return this._filter.value}set filter(l){this._filter.next(l),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(l){this._sort=l,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(l){this._paginator=l,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(l,e)=>{let t=l[e];if(eD(t)){let n=Number(t);return n<ei?n:t}return t};sortData=(l,e)=>{let t=e.active,n=e.direction;return!t||n==``?l:l.sort((i,r)=>{let o=this.sortingDataAccessor(i,t),s=this.sortingDataAccessor(r,t),m=typeof o,d=typeof s;m!==d&&(m===`number`&&(o+=``),d===`number`&&(s+=``));let h=0;return o!=null&&s!=null?o>s?h=1:o<s&&(h=-1):o!=null?h=1:s!=null&&(h=-1),h*(n==`asc`?1:-1)})};filterPredicate=(l,e)=>{let t=e.trim().toLowerCase();return Object.values(l).some(n=>`${n}`.toLowerCase().includes(t))};constructor(l=[]){super(),this._data=new Fn$1(l),this._updateChangeSubscription()}_updateChangeSubscription(){let l=this._sort?mI(this._sort.sortChange,this._sort.initialized):el(null),e=this._paginator?mI(this._paginator.page,this._internalPageChanges,this._paginator.initialized):el(null),t=this._data,n=ol([t,this._filter]).pipe(ge$1(([o])=>this._filterData(o))),i=ol([n,l]).pipe(ge$1(([o])=>this._orderData(o))),r=ol([i,e]).pipe(ge$1(([o])=>this._pageData(o)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(o=>this._renderData.next(o))}_filterData(l){return this.filteredData=this.filter==null||this.filter===``?l:l.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(l){return this.sort?this.sortData(l.slice(),this.sort):l}_pageData(l){if(!this.paginator)return l;let e=this.paginator.pageIndex*this.paginator.pageSize;return l.slice(e,e+this.paginator.pageSize)}_updatePaginator(l){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=l,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,n=Math.min(e.pageIndex,t);n!==e.pageIndex&&(e.pageIndex=n,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var yt=(function(a){return a[a.Unknown=-1]=`Unknown`,a[a.Date=0]=`Date`,a[a.Enum=1]=`Enum`,a[a.Number=2]=`Number`,a})(yt||{});var ni=class jt{constructor(){this.columns=ho.required(),this.dataset=ho([]),this.translateKey=ho(`core.components.table.`),this.sortable=ho(!0),this.paging=ho(!0),this.displayedColumns=ho([]),this.columnConfig=ho(),this.deleteIcon=ho(`skull-crossbones`),this.editIcon=ho(`address-card`),this.edit=ho(!1),this.delete=ho(!1),this.rowClickedObserved=ho(!1),this.progress=ho(!1),this.loading=ho(!0),this.pageSizeOptions=ho([10,20,50]),this.deleteEvent=a5(),this.editEvent=a5(),this.rowClicked=a5(),this.paginator=s5(Fe),this.sort=s5(Ae),this.ColumnType=yt,p$1(LO).addIcons(i8,r8,l8)}ngOnChanges(){this.dataSource=new bt(this.dataset());let e=this.sort();e&&(this.dataSource.sort=e),this.dataSource.sortingDataAccessor=(n,i)=>this.getSortingAccessor(n,i);let t=this.paginator();t&&(this.dataSource.paginator=t)}ngAfterViewInit(){let e=this.sort();e&&(this.dataSource.sort=e);let t=this.paginator();t&&(this.dataSource.paginator=t)}deleteAction(e){this.deleteEvent.emit(e)}editAction(e){this.editEvent.emit(e)}getSortingAccessor(e,t){let n=this.columnConfig()?.[t],i=n?.getter?n.getter(e):e[t];if(i==null)return null;if(n?.getter)return i;switch(n?.type){case yt.Number:return Number(i);case yt.Date:return new Date(i).getTime()}return String(i)}static{this.ɵfac=function(t){return new(t||jt)}}static{this.ɵcmp=(function(){let e=()=>[`loading`],t=p=>({element:p});function n(p,M){if(p&1&&(Ps(0,`th`,16),_N(1),kN(2,`lowercase`),kN(3,`translate`),df()),p&2){let u=Gx().$implicit,R=Gx();Di(R.columnConfig()?.[u]?.cssClass),mi(),Kv(RN(3,5,RN(2,3,R.translateKey()+u)))}}function i(p,M){if(p&1&&(_N(0),kN(1,`date`)),p&2){let u=Gx().$implicit,R=Gx().$implicit;pf(` `,RN(1,1,u[R]),` `)}}function r(p,M){if(p&1&&(_N(0),kN(1,`enumKey`),kN(2,`lowercase`),kN(3,`translate`)),p&2){let u=Gx().$implicit,R=Gx().$implicit,j=Gx();pf(` `,RN(3,6,RN(2,4,j.translateKey()+R+`.`+FN(1,1,u[R],j.columnConfig()[R].args))),` `)}}function o(p,M){if(p&1&&_N(0),p&2){let u=Gx().$implicit,R=Gx().$implicit,j=Gx();pf(` `,j.columnConfig()?.[R]?.getter?.(u)??u[R],` `)}}function s(p,M){if(p&1&&(Ps(0,`td`,17),vi(1,i,2,3)(2,r,4,8)(3,o,1,1),df()),p&2){let u,R=Gx().$implicit,j=Gx();mi(),yi((u=(u=j.columnConfig())==null||u[R]==null?null:u[R].type)===j.ColumnType.Date?1:u===j.ColumnType.Enum?2:3)}}function m(p,M){if(p&1&&(ff(0,2),vv(1,n,4,7,`th`,14)(2,s,4,1,`td`,15),mf()),p&2){let u=M.$implicit;Tv(`matColumnDef`,u)}}function d(p,M){if(p&1&&(Ps(0,`th`,18),_N(1),kN(2,`lowercase`),kN(3,`translate`),df()),p&2){let u=Gx();mi(),pf(` `,RN(3,3,RN(2,1,u.translateKey()+`actions`)),` `)}}function h(p,M){if(p&1&&(Ps(0,`td`,19)(1,`button`,20),Ov(`click`,function(R){return R.stopPropagation()}),Mv(2,`fa-icon`,21),df()()),p&2){let u=M.$implicit;Gx();let R=Xx(14);mi(),Tv(`matMenuTriggerData`,MN(2,t,u))(`matMenuTriggerFor`,R)}}function b(p,M){if(p&1&&Mv(0,`mat-progress-bar`,23),p&2){let u=Gx(2);Tv(`mode`,u.loading()?`indeterminate`:`determinate`)}}function S(p,M){if(p&1&&(Ps(0,`th`,22),vi(1,b,1,1,`mat-progress-bar`,23),df()),p&2){let u=Gx();Tv(`colSpan`,u.displayedColumns().length+1),mi(),yi(u.progress()?1:-1)}}function Ue(p,M){p&1&&Mv(0,`tr`,24)}function Ke(p,M){p&1&&Mv(0,`tr`,25)}function W(p,M){if(p&1){let u=zx();Ps(0,`tr`,26),Ov(`click`,function(){let j=rh(u).$implicit,Se=Gx();return oh(Se.rowClickedObserved()&&Se.rowClicked.emit(j))}),df()}if(p&2){let u=Gx();dN(u.rowClickedObserved()?`cursor: pointer`:``)}}function L(p,M){if(p&1&&Mv(0,`mat-paginator`,12),p&2){let u=Gx();Tv(`showFirstLastButtons`,!0)(`pageSizeOptions`,u.pageSizeOptions())}}function qe(p,M){if(p&1){let u=zx();Ps(0,`button`,28),Ov(`click`,function(){rh(u);let j=Gx().element,Se=Gx();return oh(Se.editAction(j))}),Mv(1,`fa-icon`,29),Ps(2,`span`),_N(3),kN(4,`translate`),df()()}if(p&2){let u=Gx(2);mi(),Tv(`icon`,u.editIcon()),mi(2),pf(`\xA0\xA0`,RN(4,2,u.translateKey()+`action.edit`))}}function za(p,M){if(p&1){let u=zx();Ps(0,`button`,28),Ov(`click`,function(){rh(u);let j=Gx().element,Se=Gx();return oh(Se.deleteAction(j))}),Mv(1,`fa-icon`,29),Ps(2,`span`),_N(3),kN(4,`translate`),df()()}if(p&2){let u=Gx(2);mi(),Tv(`icon`,u.deleteIcon()),mi(2),pf(`\xA0\xA0`,RN(4,2,u.translateKey()+`action.delete`))}}function Ba(p,M){if(p&1&&(vi(0,qe,5,4,`button`,27),vi(1,za,5,4,`button`,27)),p&2){let u=Gx();yi(u.edit()?0:-1),mi(),yi(u.delete()?1:-1)}}return Fe$1({type:jt,selectors:[[`bpa-inner-table`]],viewQuery:function(M,u){M&1&&jv(u.paginator,Fe,5)(u.sort,Ae,5),M&2&&Qx(2)},inputs:{columns:[1,`columns`],dataset:[1,`dataset`],translateKey:[1,`translateKey`],sortable:[1,`sortable`],paging:[1,`paging`],displayedColumns:[1,`displayedColumns`],columnConfig:[1,`columnConfig`],deleteIcon:[1,`deleteIcon`],editIcon:[1,`editIcon`],edit:[1,`edit`],delete:[1,`delete`],rowClickedObserved:[1,`rowClickedObserved`],progress:[1,`progress`],loading:[1,`loading`],pageSizeOptions:[1,`pageSizeOptions`]},outputs:{deleteEvent:`deleteEvent`,editEvent:`editEvent`,rowClicked:`rowClicked`},features:[io],decls:16,vars:9,consts:[[`menu`,`matMenu`],[`mat-table`,``,`matSort`,``,1,`mat-elevation-z8`,3,`dataSource`,`matSortDisabled`],[3,`matColumnDef`],[`matColumnDef`,`actions`],[`mat-header-cell`,``,`style`,`text-align: center; width: 1px`,4,`matHeaderCellDef`],[`mat-cell`,``,`style`,`text-align: center`,4,`matCellDef`],[`matColumnDef`,`loading`],[`style`,`padding: 0`,3,`colSpan`,4,`matHeaderCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`,`matHeaderRowDefSticky`],[`mat-header-row`,``,`style`,`height: auto`,4,`matHeaderRowDef`,`matHeaderRowDefSticky`],[`mat-row`,``,3,`style`,`click`,4,`matRowDef`,`matRowDefColumns`],[1,`spacer`],[3,`showFirstLastButtons`,`pageSizeOptions`],[`matMenuContent`,``],[`mat-header-cell`,``,`mat-sort-header`,``,3,`class`,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``],[`mat-header-cell`,``,2,`text-align`,`center`,`width`,`1px`],[`mat-cell`,``,2,`text-align`,`center`],[`aria-label`,`Actions`,`mat-icon-button`,``,3,`click`,`matMenuTriggerData`,`matMenuTriggerFor`],[`icon`,`ellipsis-vertical`],[2,`padding`,`0`,3,`colSpan`],[3,`mode`],[`mat-header-row`,``],[`mat-header-row`,``,2,`height`,`auto`],[`mat-row`,``,3,`click`],[`mat-menu-item`,``],[`mat-menu-item`,``,3,`click`],[3,`icon`]],template:function(M,u){M&1&&(Ps(0,`table`,1),Px(1,m,3,1,`ng-container`,2,Lx),ff(3,3),vv(4,d,4,5,`th`,4)(5,h,3,4,`td`,5),mf(),ff(6,6),vv(7,S,2,2,`th`,7),mf(),vv(8,Ue,1,0,`tr`,8)(9,Ke,1,0,`tr`,9)(10,W,1,2,`tr`,10),df(),Mv(11,`div`,11),vi(12,L,1,2,`mat-paginator`,12),Ps(13,`mat-menu`,null,0),vv(15,Ba,2,2,`ng-template`,13),df()),M&2&&(Tv(`dataSource`,u.dataSource)(`matSortDisabled`,!u.sortable()),mi(),jx(u.columns()),mi(7),Tv(`matHeaderRowDef`,u.displayedColumns())(`matHeaderRowDefSticky`,!0),mi(),Tv(`matHeaderRowDef`,TN(8,e))(`matHeaderRowDefSticky`,!0),mi(),Tv(`matRowDefColumns`,u.displayedColumns()),mi(2),yi(u.paging()&&u.dataset()?12:-1))},dependencies:[cq,sq,j7,QM,ca$1,Oe,Ve,la$1,da$1,ma$1,Fe,ga$1,pa$1,Sa$1,Ae,xa$1,Aa,Ma,Ra,Oa,Ia$1,ka$1,Na,Ta$1,Ea,Pa,Fa,BT,wt,LT,$3],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1}table[_ngcontent-%COMP%]{width:100%}.spacer[_ngcontent-%COMP%]{flex:1}mat-paginator[_ngcontent-%COMP%]{position:sticky;bottom:0}`]})})()}};var Do=class Xt{constructor(){this.columns=ho.required(),this.dataset=ho([]),this.translateKey=ho(`core.components.table.`),this.columnConfig=ho(),this.progressBar=ho(`always`),this.sortable=ho(!0),this.paging=ho(!0),this.deleteIcon=ho(`skull-crossbones`),this.editIcon=ho(`address-card`),this.pageSizeOptions=ho([10,20,50]),this.actions=ho({delete:!1,edit:!1,rowClicked:!1}),this.rowClicked=a5(),this.deleteEvent=a5(),this.editEvent=a5(),this.loading=!0,this.innerData=[]}get progress(){let e=this.progressBar();return e===`always`||e===`auto`&&this.loading}ngOnChanges(){this.displayedColumns=[...this.columns()],(this.actions().delete||this.actions().edit)&&this.displayedColumns.push(`actions`),this.loading=!this.dataset(),this.loading||(this.innerData=this.dataset())}deleteAction(e){this.deleteEvent.emit(e)}editAction(e){this.editEvent.emit(e)}static{this.ɵfac=function(t){return new(t||Xt)}}static{this.ɵcmp=(function(){let e=[`*`];function t(n,i){if(n&1){let r=zx();Ps(0,`bpa-inner-table`,1),Ov(`deleteEvent`,function(s){rh(r);let m=Gx();return oh(m.deleteAction(s))})(`editEvent`,function(s){rh(r);let m=Gx();return oh(m.editAction(s))})(`rowClicked`,function(s){rh(r);let m=Gx();return oh(m.rowClicked.emit(s))}),lt$2(1),df()}if(n&2){let r=Gx();Tv(`columnConfig`,r.columnConfig())(`columns`,r.columns())(`sortable`,r.sortable())(`paging`,r.paging())(`edit`,r.actions().edit)(`delete`,r.actions().delete)(`editIcon`,r.editIcon())(`deleteIcon`,r.deleteIcon())(`rowClickedObserved`,r.actions().rowClicked)(`translateKey`,r.translateKey())(`dataset`,r.innerData)(`displayedColumns`,r.displayedColumns)(`progress`,r.progress)(`loading`,r.loading)(`pageSizeOptions`,r.pageSizeOptions())}}return Fe$1({type:Xt,selectors:[[`bpa-table`]],inputs:{columns:[1,`columns`],dataset:[1,`dataset`],translateKey:[1,`translateKey`],columnConfig:[1,`columnConfig`],progressBar:[1,`progressBar`],sortable:[1,`sortable`],paging:[1,`paging`],deleteIcon:[1,`deleteIcon`],editIcon:[1,`editIcon`],pageSizeOptions:[1,`pageSizeOptions`],actions:[1,`actions`]},outputs:{rowClicked:`rowClicked`,deleteEvent:`deleteEvent`,editEvent:`editEvent`},features:[io],ngContentSelectors:e,decls:1,vars:1,consts:[[3,`columnConfig`,`columns`,`sortable`,`paging`,`edit`,`delete`,`editIcon`,`deleteIcon`,`rowClickedObserved`,`translateKey`,`dataset`,`displayedColumns`,`progress`,`loading`,`pageSizeOptions`],[3,`deleteEvent`,`editEvent`,`rowClicked`,`columnConfig`,`columns`,`sortable`,`paging`,`edit`,`delete`,`editIcon`,`deleteIcon`,`rowClickedObserved`,`translateKey`,`dataset`,`displayedColumns`,`progress`,`loading`,`pageSizeOptions`]],template:function(i,r){i&1&&(hr(),vi(0,t,2,15,`bpa-inner-table`,0)),i&2&&yi(r.innerData&&r.displayedColumns?0:-1)},dependencies:[ni],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1}`]})})()}};var ai=class vt{constructor(){this.translate=p$1(y1),this.changes=new U$1,mI(this.translate.onLangChange,this.translate.onTranslationChange,this.translate.onFallbackLangChange).pipe(H()).subscribe(()=>this.changes.next())}get itemsPerPageLabel(){return this.translate.instant(`bpa.components.table.items-per-page`)}get firstPageLabel(){return this.translate.instant(`bpa.components.table.first-page`)}get lastPageLabel(){return this.translate.instant(`bpa.components.table.last-page`)}get nextPageLabel(){return this.translate.instant(`bpa.components.table.next-page`)}get previousPageLabel(){return this.translate.instant(`bpa.components.table.previous-page`)}getRangeLabel(e,t,n){if(n===0)return``;let i=Math.ceil(n/t);return this.translate.instant(`bpa.components.table.page`,{page:e+1,amountPages:i})}static{this.ɵfac=function(t){return new(t||vt)}}static{this.ɵprov=L$1({token:vt,factory:vt.ɵfac})}};function xo(){return Ya$1([{provide:Et,useClass:ai}])}var y=class{_document;_textarea;constructor(n,i){this._document=i;let e=this._textarea=this._document.createElement(`textarea`),t=e.style;t.position=`fixed`,t.top=t.opacity=`0`,t.left=`-999em`,e.setAttribute(`aria-hidden`,`true`),e.value=n,e.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(e)}copy(){let n=this._textarea,i=!1;try{if(n){let e=this._document.activeElement;n.select(),n.setSelectionRange(0,n.value.length),i=this._document.execCommand(`copy`),e&&e.focus()}}catch(e){}return i}destroy(){let n=this._textarea;n&&(n.remove(),this._textarea=void 0)}};var B=(()=>{class o{_document=p$1(j$1);copy(i){let e=this.beginCopy(i),t=e.copy();return e.destroy(),t}beginCopy(i){return new y(i,this._document)}static ɵfac=function(e){return new(e||o)};static ɵprov=B$2({token:o,factory:o.ɵfac})}return o})();var oe$1=(()=>{class o{constructor(){this.code=ho.required(),this.language=ho(``),this.copied=Bt$2(!1),this.faCopy=n8,this.faCheck=t8,this.clipboard=p$1(B)}copy(){this.clipboard.copy(this.code())&&(this.copied.set(!0),clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.copied.set(!1),2e3))}static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵcmp=Fe$1({type:o,selectors:[[`app-code-block`]],inputs:{code:[1,`code`],language:[1,`language`]},decls:13,vars:14,consts:[[1,`header`],[1,`language`],[`mat-icon-button`,``,`type`,`button`,1,`copy`,3,`click`,`matTooltip`],[3,`icon`],[`aria-live`,`polite`,1,`sr-only`]],template:function(e,t){e&1&&(Ps(0,`div`,0)(1,`span`,1),_N(2),df(),Ps(3,`button`,2),kN(4,`translate`),kN(5,`translate`),Ov(`click`,function(){return t.copy()}),Mv(6,`fa-icon`,3),df()(),Ps(7,`pre`)(8,`code`),_N(9),df()(),Ps(10,`span`,4),_N(11),kN(12,`translate`),df()),e&2&&(mi(2),Kv(t.language()),mi(),In(`copied`,t.copied()),Tv(`matTooltip`,RN(4,8,t.copied()?`content.code.copied`:`content.code.copy`)),pr(`aria-label`,RN(5,10,`content.code.copy`)),mi(3),Tv(`icon`,t.copied()?t.faCheck:t.faCopy),mi(3),Kv(t.code()),mi(2),Kv(t.copied()?RN(12,12,`content.code.copied`):``))},dependencies:[QM,h3,sq,$3],styles:[`[_nghost-%COMP%]{display:block;margin:12px 0 24px;border-radius:10px;overflow:hidden;background:#1e1e2e;color:#cdd6f4;box-shadow:0 4px 14px #0000001f}.header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:40px;padding:0 4px 0 16px;background:#181825;border-bottom:1px solid #313244}.language[_ngcontent-%COMP%]{font-size:12px;letter-spacing:.05em;text-transform:uppercase;color:#a6adc8}.copy[_ngcontent-%COMP%]{--%NS%mat-icon-button-state-layer-size: 36px;width:36px;height:36px;padding:0;font-size:14px;color:#a6adc8}.copy[_ngcontent-%COMP%]:hover{color:#cdd6f4}.copy.copied[_ngcontent-%COMP%]{color:#a6e3a1}pre[_ngcontent-%COMP%]{margin:0;padding:16px;overflow-x:auto;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.6}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}`]})}}return o})();var sn=new D(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var dn=new D(`MatButtonToggleGroup`);var Dn={provide:Le,useExisting:$a$1(()=>te),multi:!0};var Lt=class{source;value;constructor(x,t){this.source=x,this.value=t}};var te=(()=>{class n{_changeDetector=p$1(oc);_dir=p$1(eA,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=p$1(Zf).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new Ce;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new Ce;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=p$1(sn,{optional:!0});this.appearance=t&&t.appearance?t.appearance:`standard`,this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new p(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||yD(t))return;let a=t.target.id,o=this._buttonToggles.toArray().findIndex(r=>r.buttonId===a),s=null;switch(t.keyCode){case 32:case 13:s=this._buttonToggles.get(o)||null;break;case 38:s=this._getNextButton(o,-1);break;case 37:s=this._getNextButton(o,this.dir===`ltr`?-1:1);break;case 40:s=this._getNextButton(o,1);break;case 39:s=this._getNextButton(o,this.dir===`ltr`?1:-1);break;default:return}s&&(t.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(t){let e=new Lt(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,a=!1,o=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(t,a)):this._updateModelValue(t,a)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let a=this._buttonToggles;for(let o=1;o<=a.length;o++){let s=(t+e*o+a.length)%a.length,r=a.get(s);if(r&&!r.disabled)return r}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(this._clearSelection(),t.forEach(a=>this._selectValue(a,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(a=>a.tabIndex===-1)){for(let a of e)if(!a.disabled){a.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let a of e)if(a.value===t){a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static ɵfac=function(e){return new(e||n)};static ɵdir=ye$2({type:n,selectors:[[`mat-button-toggle-group`]],contentQueries:function(e,a,o){if(e&1&&Fv(o,At,5),e&2){let s;Zx(s=Kx())&&(a._buttonToggles=s)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(e,a){e&1&&Ov(`keydown`,function(s){return a._keydown(s)}),e&2&&(pr(`role`,a.multiple?`group`:`radiogroup`)(`aria-disabled`,a.disabled),In(`mat-button-toggle-vertical`,a.vertical)(`mat-button-toggle-group-appearance-standard`,a.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,Le$1],value:`value`,multiple:[2,`multiple`,`multiple`,Le$1],disabled:[2,`disabled`,`disabled`,Le$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Le$1],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Le$1],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,Le$1]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[Jv([Dn,{provide:dn,useExisting:n}])]})}return n})();var At=(()=>{class n{_changeDetectorRef=p$1(oc);_elementRef=p$1(pe$2);_focusMonitor=p$1(yc);_idGenerator=p$1(Zf);_animationDisabled=yo();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new Ce;constructor(){p$1(Yt).load(kD);let t=p$1(dn,{optional:!0}),e=p$1(new iy(`tabindex`),{optional:!0})||``,a=p$1(sn,{optional:!0});this._tabIndex=Bt$2(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=a&&a.appearance?a.appearance:`standard`,this._disabledInteractive=a?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(a=>a.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new Lt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`button`],e=[`*`];function a(o,s){if(o&1&&(Ps(0,`div`,2),Mv(1,`mat-pseudo-checkbox`,6),df()),o&2){let r=Gx();mi(),Tv(`disabled`,r.disabled)}}return Fe$1({type:n,selectors:[[`mat-button-toggle`]],viewQuery:function(s,r){if(s&1&&Lv(t,5),s&2){let k;Zx(k=Kx())&&(r._buttonElement=k.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(s,r){s&1&&Ov(`focus`,function(){return r.focus()}),s&2&&(pr(`aria-label`,null)(`aria-labelledby`,null)(`id`,r.id)(`name`,null),In(`mat-button-toggle-standalone`,!r.buttonToggleGroup)(`mat-button-toggle-checked`,r.checked)(`mat-button-toggle-disabled`,r.disabled)(`mat-button-toggle-disabled-interactive`,r.disabledInteractive)(`mat-button-toggle-appearance-standard`,r.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,Le$1],appearance:`appearance`,checked:[2,`checked`,`checked`,Le$1],disabled:[2,`disabled`,`disabled`,Le$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Le$1]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:e,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(s,r){if(s&1&&(hr(),Ps(0,`button`,1,0),Ov(`click`,function(){return r._onButtonClick()}),vi(2,a,2,1,`div`,2),Ps(3,`span`,3),lt$2(4),df()(),Mv(5,`span`,4)(6,`span`,5)),s&2){let k=Xx(1);Tv(`id`,r.buttonId)(`disabled`,r.disabled&&!r.disabledInteractive||null),pr(`role`,r.isSingleSelector()?`radio`:`button`)(`tabindex`,r.disabled&&!r.disabledInteractive?-1:r.tabIndex)(`aria-pressed`,r.isSingleSelector()?null:r.checked)(`aria-checked`,r.isSingleSelector()?r.checked:null)(`name`,r._getButtonName())(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),mi(2),yi(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),mi(4),Tv(`matRippleTrigger`,k)(`matRippleDisabled`,r.disableRipple||r.disabled)}},dependencies:[a7,I$1],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return n})();var cn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ne({type:n});static ɵinj=_e$1({imports:[FD,At,Tc]})}return n})();var Nn=new D(`MatTabContent`);var re=(()=>{class n{template=p$1(eo);static ɵfac=function(e){return new(e||n)};static ɵdir=ye$2({type:n,selectors:[[``,`matTabContent`,``]],features:[Jv([{provide:Nn,useExisting:n}])]})}return n})();var Rn=new D(`MatTabLabel`);var gn=new D(`MAT_TAB`);var En=(()=>{class n extends I0{_closestTab=p$1(gn,{optional:!0});static ɵfac=(()=>{let t;return function(a){return(t||(t=hd(n)))(a||n)}})();static ɵdir=ye$2({type:n,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[Jv([{provide:Rn,useExisting:n}]),mr]})}return n})();var un=new D(`MAT_TAB_GROUP`);var le=(()=>{class n{_viewContainerRef=p$1(uo);_closestTabGroup=p$1(un,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new U$1;position=null;origin=null;isActive=!1;constructor(){p$1(Yt).load(kD)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new r2(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`];function e(a,o){a&1&&lt$2(0)}return Fe$1({type:n,selectors:[[`mat-tab`]],contentQueries:function(o,s,r){if(o&1&&Fv(r,En,5)(r,re,7,eo),o&2){let k;Zx(k=Kx())&&(s.templateLabel=k.first),Zx(k=Kx())&&(s._explicitContent=k.first)}},viewQuery:function(o,s){if(o&1&&Lv(eo,7),o&2){let r;Zx(r=Kx())&&(s._implicitContent=r.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(o,s){o&2&&pr(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Le$1],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[Jv([{provide:gn,useExisting:n}]),io],ngContentSelectors:t,decls:1,vars:0,template:function(o,s){o&1&&(hr(),yv(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return n})();var ee=`mdc-tab-indicator--active`;var mn=`mdc-tab-indicator--no-transition`;var ae=class{_items;_currentItem;constructor(x){this._items=x}hide(){this._items.forEach(x=>x.deactivateInkBar()),this._currentItem=void 0}alignToElement(x){let t=this._items.find(a=>a.elementRef.nativeElement===x),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let a=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(a),this._currentItem=t}}};var Bn=(()=>{class n{_elementRef=p$1(pe$2);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ee);return}let a=e.getBoundingClientRect(),o=t.width/a.width,s=t.left-a.left;e.classList.add(mn),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${s}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(mn),e.classList.add(ee),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ee)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),a=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,a.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||n)};static ɵdir=ye$2({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Le$1]}})}return n})();var hn=(()=>{class n extends Bn{elementRef=p$1(pe$2);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(a){return(t||(t=hd(n)))(a||n)}})();static ɵdir=ye$2({type:n,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,a){e&2&&(pr(`aria-disabled`,!!a.disabled),In(`mat-mdc-tab-disabled`,a.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Le$1]},features:[mr]})}return n})();var bn={passive:!0};var Ln=650;var Pn=100;function ne(n){let x=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(x)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(x)?x:``}var An=(()=>{class n{_elementRef=p$1(pe$2);_changeDetectorRef=p$1(oc);_viewportRuler=p$1(t2);_dir=p$1(eA,{optional:!0});_ngZone=p$1(V);_platform=p$1(Me);_sharedResizeObserver=p$1(He$1);_injector=p$1(Z$2);_renderer=p$1(vn$1);_animationsDisabled=yo();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new U$1;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new U$1;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Ce;indexFocused=new Ce;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),bn),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),bn))}ngAfterContentInit(){let t=this._dir?this._dir.change:el(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Pn$1(32),Ao(this._destroyed)),a=this._viewportRuler.change(150).pipe(Ao(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Yf(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Fd(o,{injector:this._injector}),mI(t,a,e,this._items.changes,this._itemsResized()).pipe(Ao(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!=`function`?Co:this._items.changes.pipe(ga$2(this._items),Dp(t=>new k$2(e=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(o=>e.next(o));return t.forEach(o=>a.observe(o.elementRef.nativeElement)),()=>{a.disconnect()}}))),Mo(1),Ln$1(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!yD(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,a=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=e.elementRef.nativeElement,r,k;this._getLayoutDirection()==`ltr`?(r=o,k=r+s):(k=this._tabListInner.nativeElement.offsetWidth-o,r=k-s);let T=this.scrollDistance,l=this.scrollDistance+a;r<T?this.scrollDistance-=T-r:k>l&&(this.scrollDistance+=Math.min(k-l,r-T))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let a=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),At$3(Ln,Pn).pipe(Ao(mI(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:o}=this._scrollHeader(t);(o===0||o>=a)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||n)};static ɵdir=ye$2({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Le$1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Ii]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var zn=(()=>{class n extends An{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ae(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(a){return(t||(t=hd(n)))(a||n)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],a=[`tabListInner`],o=[`nextPaginator`],s=[`previousPaginator`];return Fe$1({type:n,selectors:[[`mat-tab-header`]],contentQueries:function(T,l,c){if(T&1&&Fv(c,hn,4),T&2){let p;Zx(p=Kx())&&(l._items=p)}},viewQuery:function(T,l){if(T&1&&Lv(t,7)(e,7)(a,7)(o,5)(s,5),T&2){let c;Zx(c=Kx())&&(l._tabListContainer=c.first),Zx(c=Kx())&&(l._tabList=c.first),Zx(c=Kx())&&(l._tabListInner=c.first),Zx(c=Kx())&&(l._nextPaginator=c.first),Zx(c=Kx())&&(l._previousPaginator=c.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(T,l){T&2&&In(`mat-mdc-tab-header-pagination-controls-enabled`,l._showPaginationControls)(`mat-mdc-tab-header-rtl`,l._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Le$1]},features:[mr],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(T,l){T&1&&(hr(),Ps(0,`div`,5,0),Ov(`click`,function(){return l._handlePaginatorClick(`before`)})(`mousedown`,function(p){return l._handlePaginatorPress(`before`,p)})(`touchend`,function(){return l._stopInterval()}),Mv(2,`div`,6),df(),Ps(3,`div`,7,1),Ov(`keydown`,function(p){return l._handleKeydown(p)}),Ps(5,`div`,8,2),Ov(`cdkObserveContent`,function(){return l._onContentChanges()}),Ps(7,`div`,9,3),lt$2(9),df()()(),Ps(10,`div`,10,4),Ov(`mousedown`,function(p){return l._handlePaginatorPress(`after`,p)})(`click`,function(){return l._handlePaginatorClick(`after`)})(`touchend`,function(){return l._stopInterval()}),Mv(12,`div`,6),df()),T&2&&(In(`mat-mdc-tab-header-pagination-disabled`,l._disableScrollBefore),Tv(`matRippleDisabled`,l._disableScrollBefore||l.disableRipple),mi(3),In(`_mat-animation-noopable`,l._animationsDisabled),mi(2),pr(`aria-label`,l.ariaLabel||null)(`aria-labelledby`,l.ariaLabelledby||null),mi(5),In(`mat-mdc-tab-header-pagination-disabled`,l._disableScrollAfter),Tv(`matRippleDisabled`,l._disableScrollAfter||l.disableRipple))},dependencies:[a7,SG],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Fn=new D(`MAT_TABS_CONFIG`);var pn=(()=>{class n extends V0{_host=p$1(ie);_ngZone=p$1(V);_centeringSub=te$1.EMPTY;_leavingSub=te$1.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ga$2(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(a){return(t||(t=hd(n)))(a||n)}})();static ɵdir=ye$2({type:n,selectors:[[``,`matTabBodyHost`,``]],features:[mr]})}return n})();var ie=(()=>{class n{_elementRef=p$1(pe$2);_dir=p$1(eA,{optional:!0});_ngZone=p$1(V);_injector=p$1(Z$2);_renderer=p$1(vn$1);_diAnimationsDisabled=yo();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=te$1.EMPTY;_position;_previousPosition;_onCentering=new Ce;_beforeCentering=new Ce;_afterLeavingCenter=new Ce;_onCentered=new Ce(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=p$1(oc);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Fd(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),a.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Fd(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`content`];function e(a,o){}return Fe$1({type:n,selectors:[[`mat-tab-body`]],viewQuery:function(o,s){if(o&1&&Lv(pn,5)(t,5),o&2){let r;Zx(r=Kx())&&(s._portalHost=r.first),Zx(r=Kx())&&(s._contentElement=r.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(o,s){o&2&&pr(`inert`,s._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(o,s){o&1&&(Ps(0,`div`,1,0),vv(2,e,0,0,`ng-template`,2),df()),o&2&&In(`mat-tab-body-content-left`,s._position===`left`)(`mat-tab-body-content-right`,s._position===`right`)(`mat-tab-body-content-can-animate`,s._position===`center`||s._previousPosition===`center`)},dependencies:[pn,J4],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return n})();var fn=(()=>{class n{_elementRef=p$1(pe$2);_changeDetectorRef=p$1(oc);_ngZone=p$1(V);_tabsSubscription=te$1.EMPTY;_tabLabelSubscription=te$1.EMPTY;_tabBodySubscription=te$1.EMPTY;_diAnimationsDisabled=yo();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new sr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=ne(t.body),this._headerAnimationDuration=ne(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=ne(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Ce;focusChange=new Ce;animationDone=new Ce;selectedTabChange=new Ce(!0);_groupId;_isServer=!p$1(Me).isBrowser;constructor(){let t=p$1(Fn,{optional:!0});this._groupId=p$1(Zf).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((a,o)=>a.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,a)=>{e.position=a-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),a;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,a=e[o];break}!a&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ga$2(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new oe;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=mI(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,a){e.focusIndex=a,t.disabled||(this.selectedIndex=a)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,a)=>e._setActiveClass(a===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],a=[`*`];function o(c,p){}function s(c,p){if(c&1&&vv(0,o,0,0,`ng-template`,12),c&2){let i=Gx().$implicit;Tv(`cdkPortalOutlet`,i.templateLabel)}}function r(c,p){if(c&1&&_N(0),c&2){let i=Gx().$implicit;Kv(i.textLabel)}}function k(c,p){if(c&1){let i=zx();Ps(0,`div`,7,2),Ov(`click`,function(){let d=rh(i),f=d.$implicit,st=d.$index,vt=Gx(),Cn=Xx(1);return oh(vt._handleClick(f,Cn,st))})(`cdkFocusChange`,function(d){let f=rh(i).$index,st=Gx();return oh(st._tabFocusChanged(d,f))}),Mv(2,`span`,8)(3,`div`,9),Ps(4,`span`,10)(5,`span`,11),vi(6,s,1,1,null,12)(7,r,1,1),df()()()}if(c&2){let i=p.$implicit,v=p.$index,d=Xx(1),f=Gx();Di(i.labelClass),In(`mdc-tab--active`,f.selectedIndex===v),Tv(`id`,f._getTabLabelId(i,v))(`disabled`,i.disabled)(`fitInkBarToContent`,f.fitInkBarToContent),pr(`tabIndex`,f._getTabIndex(v))(`aria-posinset`,v+1)(`aria-setsize`,f._tabs.length)(`aria-controls`,f._getTabContentId(v))(`aria-selected`,f.selectedIndex===v)(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,!i.ariaLabel&&i.ariaLabelledby?i.ariaLabelledby:null),mi(3),Tv(`matRippleTrigger`,d)(`matRippleDisabled`,i.disabled||f.disableRipple),mi(3),yi(i.templateLabel?6:7)}}function T(c,p){c&1&&lt$2(0)}function l(c,p){if(c&1){let i=zx();Ps(0,`mat-tab-body`,13),Ov(`_onCentered`,function(){rh(i);let d=Gx();return oh(d._removeTabBodyWrapperHeight())})(`_onCentering`,function(d){rh(i);let f=Gx();return oh(f._setTabBodyWrapperHeight(d))})(`_beforeCentering`,function(d){rh(i);let f=Gx();return oh(f._bodyCentered(d))}),df()}if(c&2){let i=p.$implicit,v=p.$index,d=Gx();Di(i.bodyClass),Tv(`id`,d._getTabContentId(v))(`content`,i.content)(`position`,i.position)(`animationDuration`,d._bodyAnimationDuration)(`preserveContent`,d.preserveContent),pr(`tabindex`,d.contentTabIndex!=null&&d.selectedIndex===v?d.contentTabIndex:null)(`aria-labelledby`,d._getTabLabelId(i,v))(`aria-hidden`,d.selectedIndex!==v)}}return Fe$1({type:n,selectors:[[`mat-tab-group`]],contentQueries:function(p,i,v){if(p&1&&Fv(v,le,5),p&2){let d;Zx(d=Kx())&&(i._allTabs=d)}},viewQuery:function(p,i){if(p&1&&Lv(t,5)(e,5)(ie,5),p&2){let v;Zx(v=Kx())&&(i._tabBodyWrapper=v.first),Zx(v=Kx())&&(i._tabHeader=v.first),Zx(v=Kx())&&(i._tabBodies=v)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(p,i){p&2&&(pr(`mat-align-tabs`,i.alignTabs),Di(`mat-`+(i.color||`primary`)),Js(`--%NS%mat-tab-body-animation-duration`,i._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,i._headerAnimationDuration),In(`mat-mdc-tab-group-dynamic-height`,i.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,i.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,i.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Le$1],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Le$1],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Le$1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Ii],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,Ii],disablePagination:[2,`disablePagination`,`disablePagination`,Le$1],disableRipple:[2,`disableRipple`,`disableRipple`,Le$1],preserveContent:[2,`preserveContent`,`preserveContent`,Le$1],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[Jv([{provide:un,useExisting:n}])],ngContentSelectors:a,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(p,i){p&1&&(hr(),Ps(0,`mat-tab-header`,3,0),Ov(`indexFocused`,function(d){return i._focusChanged(d)})(`selectFocusedIndex`,function(d){return i.selectedIndex=d}),Px(2,k,8,17,`div`,4,Lx),df(),vi(4,T,1,0),Ps(5,`div`,5,1),Px(7,l,1,10,`mat-tab-body`,6,Lx),df()),p&2&&(Tv(`selectedIndex`,i.selectedIndex||0)(`disableRipple`,i.disableRipple)(`disablePagination`,i.disablePagination),Nv(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby),mi(2),jx(i._tabs),mi(2),yi(i._isServer?4:-1),mi(),In(`_mat-animation-noopable`,i._bodyAnimationsDisabled()),mi(2),jx(i._tabs))},dependencies:[zn,hn,yM,a7,V0,ie],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var oe=class{index;tab};var _n=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ne({type:n});static ɵinj=_e$1({imports:[Tc]})}return n})();var Hn=class se{static{this.ɵfac=function(e){return new(e||se)}}static{this.ɵcmp=(function(){return Fe$1({type:se,selectors:[[`bpa-code-renderer`]],ngContentSelectors:[`*`],decls:3,vars:0,template:function(a,o){a&1&&(hr(),Dn$1(0,`pre`)(1,`code`),lt$2(2),En$1()())},styles:[`pre[_ngcontent-%COMP%]{padding:1rem;background-color:#e1e1e1;overflow-x:auto}`],changeDetection:1})})()}};var Gn=class de{constructor(){this.content=ho.required()}static{this.ɵfac=function(e){return new(e||de)}}static{this.ɵcmp=(function(){let t=[`*`];function e(l,c){if(l&1&&(Ps(0,`h1`),kv(1,1),df()),l&2){Gx();let p=Xx(7);mi(),Tv(`ngTemplateOutlet`,p)}}function a(l,c){if(l&1&&(Ps(0,`h2`),kv(1,1),df()),l&2){Gx();let p=Xx(7);mi(),Tv(`ngTemplateOutlet`,p)}}function o(l,c){if(l&1&&(Ps(0,`h3`),kv(1,1),df()),l&2){Gx();let p=Xx(7);mi(),Tv(`ngTemplateOutlet`,p)}}function s(l,c){if(l&1&&(Ps(0,`h4`),kv(1,1),df()),l&2){Gx();let p=Xx(7);mi(),Tv(`ngTemplateOutlet`,p)}}function r(l,c){if(l&1&&(Ps(0,`h5`),kv(1,1),df()),l&2){Gx();let p=Xx(7);mi(),Tv(`ngTemplateOutlet`,p)}}function k(l,c){if(l&1&&(Ps(0,`h6`),kv(1,1),df()),l&2){Gx();let p=Xx(7);mi(),Tv(`ngTemplateOutlet`,p)}}function T(l,c){l&1&&lt$2(0)}return Fe$1({type:de,selectors:[[`bpa-heading-renderer`]],inputs:{content:[1,`content`]},ngContentSelectors:t,decls:8,vars:1,consts:[[`ngContent`,``],[3,`ngTemplateOutlet`]],template:function(c,p){if(c&1&&(hr(),vi(0,e,2,1,`h1`)(1,a,2,1,`h2`)(2,o,2,1,`h3`)(3,s,2,1,`h4`)(4,r,2,1,`h5`)(5,k,2,1,`h6`),vv(6,T,1,0,`ng-template`,null,0,LN)),c&2){let i;yi((i=p.content().level)===1?0:i===2?1:i===3?2:i===4?3:i===5?4:i===6?5:-1)}},dependencies:[kT],encapsulation:2,changeDetection:1})})()}};var jn=class ce{constructor(){this.content=ho.required(),this.priority=ho(!1)}static{this.ɵfac=function(e){return new(e||ce)}}static{this.ɵcmp=Fe$1({type:ce,selectors:[[`bpa-image-renderer`]],inputs:{content:[1,`content`],priority:[1,`priority`]},decls:1,vars:5,consts:[[3,`ngSrc`,`width`,`height`,`alt`,`priority`]],template:function(e,a){e&1&&Mv(0,`img`,0),e&2&&Tv(`ngSrc`,a.content().image.url)(`width`,a.content().image.width)(`height`,a.content().image.height)(`alt`,a.content().image.alternativeText??a.content().image.caption??``)(`priority`,a.priority())},dependencies:[RW],encapsulation:2,changeDetection:1})}};var Vn=class me{constructor(){this.content=ho.required()}static{this.ɵfac=function(e){return new(e||me)}}static{this.ɵcmp=(function(){return Fe$1({type:me,selectors:[[`bpa-link-renderer`]],inputs:{content:[1,`content`]},ngContentSelectors:[`*`],decls:2,vars:1,consts:[[3,`href`]],template:function(a,o){a&1&&(hr(),Dn$1(0,`a`,0),lt$2(1),En$1()),a&2&&Xs(`href`,o.content().url,S0)},encapsulation:2,changeDetection:1})})()}};var qn=class be{constructor(){this.content=ho.required()}static{this.ɵfac=function(e){return new(e||be)}}static{this.ɵcmp=(function(){return Fe$1({type:be,selectors:[[`bpa-list-item-renderer`]],inputs:{content:[1,`content`]},ngContentSelectors:[`*`],decls:2,vars:0,template:function(a,o){a&1&&(hr(),Dn$1(0,`li`),lt$2(1),En$1())},encapsulation:2,changeDetection:1})})()}};var Wn=class pe{constructor(){this.content=ho.required()}static{this.ɵfac=function(e){return new(e||pe)}}static{this.ɵcmp=(function(){let t=[`*`];function e(l,c){}function a(l,c){if(l&1&&(Ps(0,`ol`),vv(1,e,0,0,`ng-template`,1),df()),l&2){Gx();let p=Xx(4);mi(),Tv(`ngTemplateOutlet`,p)}}function o(l,c){}function s(l,c){if(l&1&&(Ps(0,`ul`),vv(1,o,0,0,`ng-template`,1),df()),l&2){Gx();let p=Xx(4);mi(),Tv(`ngTemplateOutlet`,p)}}function r(l,c){}function k(l,c){if(l&1&&vv(0,r,0,0,`ng-template`,1),l&2){Gx();let p=Xx(4);Tv(`ngTemplateOutlet`,p)}}function T(l,c){l&1&&lt$2(0)}return Fe$1({type:pe,selectors:[[`bpa-list-renderer`]],inputs:{content:[1,`content`]},ngContentSelectors:t,decls:5,vars:1,consts:[[`ngContent`,``],[3,`ngTemplateOutlet`]],template:function(c,p){c&1&&(hr(),vi(0,a,2,1,`ol`)(1,s,2,1,`ul`)(2,k,1,1,null,1),vv(3,T,1,0,`ng-template`,null,0,LN)),c&2&&yi(p.content().format===`ordered`?0:p.content().format===`unordered`?1:2)},dependencies:[kT],encapsulation:2,changeDetection:1})})()}};var $n=class ge{static{this.ɵfac=function(e){return new(e||ge)}}static{this.ɵcmp=(function(){return Fe$1({type:ge,selectors:[[`bpa-quote-renderer`]],ngContentSelectors:[`*`],decls:2,vars:0,template:function(a,o){a&1&&(hr(),Dn$1(0,`blockquote`),lt$2(1),En$1())},styles:[`blockquote[_ngcontent-%COMP%]{display:inline-block;position:relative;font-weight:100;font-size:1.2rem;line-height:1.4;margin:0;padding:1.5rem}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after{position:absolute;color:#f1efe6;font-size:4rem}blockquote[_ngcontent-%COMP%]:before{content:"\\201c";left:0;top:0}blockquote[_ngcontent-%COMP%]:after{content:"\\201d";right:0;bottom:-2rem}`],changeDetection:1})})()}};var Qn=class ue{constructor(){this.content=ho.required(),this.textStyle=ec(()=>{let t=this.content(),e=[t.underline?`underline`:void 0,t.strikethrough?`line-through`:void 0].filter(xt).join(` `);return[t.bold?`font-weight: bold`:void 0,t.italic?`font-style: italic`:void 0,e?`text-decoration: ${e}`:void 0].filter(xt).join(`; `)})}static{this.ɵfac=function(e){return new(e||ue)}}static{this.ɵcmp=(function(){function t(o,s){if(o&1&&(Dn$1(0,`code`),_N(1),En$1()),o&2){let r=Gx();dN(r.textStyle()),mi(),Kv(r.content().text)}}function e(o,s){if(o&1&&(Dn$1(0,`span`),_N(1),En$1()),o&2){let r=Gx();dN(r.textStyle()),mi(),Kv(r.content().text)}}function a(o,s){if(o&1&&_N(0),o&2){let r=Gx();pf(` `,r.content().text,`
`)}}return Fe$1({type:ue,selectors:[[`bpa-text-renderer`]],inputs:{content:[1,`content`]},decls:3,vars:1,consts:[[3,`style`]],template:function(s,r){s&1&&vi(0,t,2,3,`code`,0)(1,e,2,3,`span`,0)(2,a,1,1),s&2&&yi(r.content().code?0:r.textStyle().length?1:2)},encapsulation:2,changeDetection:1})})()}};var Kn=class zt{constructor(){this.content=ho.required(),this.debug=ho.required(),this.prioritizeFirstImage=ho(!1),this.firstImageIndex=ec(()=>this.content().findIndex(t=>t.type===`image`)),this.isParagraph=t=>t.type===`paragraph`,this.isText=t=>t.type===`text`,this.isLink=t=>t.type===`link`,this.isHeading=t=>t.type===`heading`,this.isCode=t=>t.type===`code`,this.isQuote=t=>t.type===`quote`,this.isList=t=>t.type===`list`,this.isListItem=t=>t.type===`list-item`,this.isImage=t=>t.type===`image`}static{this.ɵfac=function(e){return new(e||zt)}}static{this.ɵcmp=(function(){function t(i,v){if(i&1&&(Ps(0,`p`),Mv(1,`bpa-inner-strapi-renderer`,2),df()),i&2){let d=Gx().$implicit,f=Gx();mi(),Tv(`content`,d.children)(`debug`,f.debug())}}function e(i,v){if(i&1&&Mv(0,`bpa-text-renderer`,0),i&2){let d=Gx().$implicit;Tv(`content`,d)}}function a(i,v){if(i&1&&(Ps(0,`bpa-link-renderer`,0),Mv(1,`bpa-inner-strapi-renderer`,2),df()),i&2){let d=Gx().$implicit,f=Gx();Tv(`content`,d),mi(),Tv(`content`,d.children)(`debug`,f.debug())}}function o(i,v){if(i&1&&(Ps(0,`bpa-quote-renderer`),Mv(1,`bpa-inner-strapi-renderer`,2),df()),i&2){let d=Gx().$implicit,f=Gx();mi(),Tv(`content`,d.children)(`debug`,f.debug())}}function s(i,v){if(i&1&&(Ps(0,`bpa-code-renderer`),Mv(1,`bpa-inner-strapi-renderer`,2),df()),i&2){let d=Gx().$implicit,f=Gx();mi(),Tv(`content`,d.children)(`debug`,f.debug())}}function r(i,v){if(i&1&&(Ps(0,`bpa-heading-renderer`,0),Mv(1,`bpa-inner-strapi-renderer`,2),df()),i&2){let d=Gx().$implicit,f=Gx();Tv(`content`,d),mi(),Tv(`content`,d.children)(`debug`,f.debug())}}function k(i,v){if(i&1&&(Ps(0,`bpa-list-renderer`,0),Mv(1,`bpa-inner-strapi-renderer`,2),df()),i&2){let d=Gx().$implicit,f=Gx();Tv(`content`,d),mi(),Tv(`content`,d.children)(`debug`,f.debug())}}function T(i,v){if(i&1&&(Ps(0,`bpa-list-item-renderer`,0),Mv(1,`bpa-inner-strapi-renderer`,2),df()),i&2){let d=Gx().$implicit,f=Gx();Tv(`content`,d),mi(),Tv(`content`,d.children)(`debug`,f.debug())}}function l(i,v){if(i&1&&Mv(0,`bpa-image-renderer`,1),i&2){let d=Gx(),f=d.$implicit,st=d.$index,vt=Gx();Tv(`content`,f)(`priority`,vt.prioritizeFirstImage()&&st===vt.firstImageIndex())}}function c(i,v){if(i&1&&(Ps(0,`p`),_N(1),kN(2,`json`),df()),i&2){let d=Gx().$implicit;mi(),pf(` Not supported type: `,RN(2,1,d),` `)}}function p(i,v){if(i&1&&vi(0,t,2,2,`p`)(1,e,1,1,`bpa-text-renderer`,0)(2,a,2,3,`bpa-link-renderer`,0)(3,o,2,2,`bpa-quote-renderer`)(4,s,2,2,`bpa-code-renderer`)(5,r,2,3,`bpa-heading-renderer`,0)(6,k,2,3,`bpa-list-renderer`,0)(7,T,2,3,`bpa-list-item-renderer`,0)(8,l,1,2,`bpa-image-renderer`,1)(9,c,3,3,`p`),i&2){let d=v.$implicit,f=Gx();yi(f.isParagraph(d)?0:f.isText(d)?1:f.isLink(d)?2:f.isQuote(d)?3:f.isCode(d)?4:f.isHeading(d)?5:f.isList(d)?6:f.isListItem(d)?7:f.isImage(d)?8:f.debug()?9:-1)}}return Fe$1({type:zt,selectors:[[`bpa-inner-strapi-renderer`]],inputs:{content:[1,`content`],debug:[1,`debug`],prioritizeFirstImage:[1,`prioritizeFirstImage`]},decls:2,vars:0,consts:[[3,`content`],[3,`content`,`priority`],[3,`content`,`debug`]],template:function(v,d){v&1&&Px(0,p,10,1,null,null,Fx),v&2&&jx(d.content())},dependencies:[zt,Qn,Vn,Gn,Hn,$n,Wn,qn,jn,VT],encapsulation:2,changeDetection:1})})()}};var vn=class he{constructor(){this.content=ho.required(),this.debug=ho(!1),this.prioritizeFirstImage=ho(!1)}static{this.ɵfac=function(e){return new(e||he)}}static{this.ɵcmp=Fe$1({type:he,selectors:[[`bpa-strapi-renderer`]],inputs:{content:[1,`content`],debug:[1,`debug`],prioritizeFirstImage:[1,`prioritizeFirstImage`]},decls:1,vars:3,consts:[[3,`content`,`debug`,`prioritizeFirstImage`]],template:function(e,a){e&1&&Mv(0,`bpa-inner-strapi-renderer`,0),e&2&&Tv(`content`,a.content())(`debug`,a.debug())(`prioritizeFirstImage`,a.prioritizeFirstImage())},dependencies:[Kn],encapsulation:2,changeDetection:1})}};var Un=(n,x)=>x.key;function Zn(n,x){if(n&1&&(Ps(0,`li`,1)(1,`span`,2),_N(2),df(),Ps(3,`div`,3)(4,`h3`),_N(5),kN(6,`translate`),df(),Ps(7,`p`),_N(8),kN(9,`translate`),df(),Mv(10,`app-code-block`,4),df()()),n&2){let t=x.$implicit,e=x.$index;mi(2),Kv(e+1),mi(3),Kv(RN(6,5,`content.headline.`+t.key)),mi(3),Kv(RN(9,7,`content.text.`+t.key)),mi(2),Tv(`code`,t.code)(`language`,t.language)}}var yn=(()=>{class n{constructor(){this.install=`npm install @bolzplatzarena/components @angular/material @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @ngx-translate/core`,this.providers=`import { bootstrapApplication } from '@angular/platform-browser';
import { providePaginatorTexts } from '@bolzplatzarena/components/table';
import { provideTranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideTranslateService(),
    providePaginatorTexts(), // optional: translated paginator labels
  ],
});`,this.entryPoints=`// enum helpers, no Material dependency
import { EnumKeyPipe, getTranslatableFrom } from '@bolzplatzarena/components';
import { ButtonComponent } from '@bolzplatzarena/components/button';
import { DialogComponent, DialogService, FormDialogComponent } from '@bolzplatzarena/components/dialog';
import { StrapiRendererComponent } from '@bolzplatzarena/components/strapi';
import { ColumnConfig, ColumnType, providePaginatorTexts, TableComponent } from '@bolzplatzarena/components/table';`,this.translations=`{
  "bpa": {
    "global": { "no": "Cancel", "okay": "Okay" },
    "components": {
      "table": {
        "items-per-page": "Items per page",
        "page": "Page {{ page }} of {{ amountPages }}",
        "first-page": "First page",
        "previous-page": "Previous page",
        "next-page": "Next page",
        "last-page": "Last page"
      }
    }
  }
}`,this.steps=[{key:`install`,language:`bash`,code:this.install},{key:`providers`,language:`typescript`,code:this.providers},{key:`entry_points`,language:`typescript`,code:this.entryPoints},{key:`translations`,language:`json`,code:this.translations}]}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Fe$1({type:n,selectors:[[`app-getting-started`]],decls:6,vars:3,consts:[[1,`steps`],[1,`step`],[`aria-hidden`,`true`,1,`number`],[1,`body`],[3,`code`,`language`]],template:function(e,a){e&1&&(Ps(0,`h2`),_N(1),kN(2,`translate`),df(),Ps(3,`ol`,0),Px(4,Zn,11,9,`li`,1,Un),df()),e&2&&(mi(),Kv(RN(2,1,`content.headline.getting_started`)),mi(3),jx(a.steps))},dependencies:[oe$1,$3],styles:[`[_nghost-%COMP%]{display:block;max-width:960px;padding-bottom:32px}.steps[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.step[_ngcontent-%COMP%]{display:flex;gap:16px;position:relative}.step[_ngcontent-%COMP%]:not(:last-child):before{content:"";position:absolute;top:40px;bottom:0;left:15px;width:2px;background:#e0e0e0}.number[_ngcontent-%COMP%]{flex:none;display:grid;place-items:center;width:32px;height:32px;margin-top:16px;border-radius:50%;background:#3f51b5;color:#fff;font-weight:600}.body[_ngcontent-%COMP%]{flex:1;min-width:0}.body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#555;line-height:1.6}`]})}}return n})();var fe={};GO(fe,{bpa:()=>Jn,content:()=>Yn,default:()=>ea,dialog:()=>ta,hero:()=>Xn});var Yn={code:{copy:`Code kopieren`,copied:`Kopiert!`},text:{"1":`Dies ist eine Sammlungen von Komponenten welche auf Basis von Angular Material gebaut wurden. Zudem finden sich hier noch diverse Helferlein, welche euch das Arbeiten möglichst vereinfachen sollen.`,examples:`Hier findet man viele praktische Beispiele.`,table:`Einfache Implementierung der Tabelle, welche viele Sachen abnimmt und es daher einfach machen die Material Table zu nutzen.`,column:`Erweiterte Spaltenkonfiguration (columnConfig) ist verfügbar für:`,options:`Inputs von bpa-table:`,enum:`Enums sind toll, Enums sind wichtig. Aber manchmal sind sie schwer zu nutzen, vor allem in Tempülates.<br>Hier findet ihr Tools die euch unterstützen.`,enum_options:`Dies ist eine Methode um aus einem Enum eine Datenquelle für ein Dropdown zu machen und dabei die Werte auch noch zu übersetzen.`,pipe:`Die Pipe gibt euch die Möglichkeit den Enum-Schlüssel in einer View zu nutzen. Dies ist vor allem dann wichtig, wenn das Enum nicht auf einem String basiert.`,dialogs:`Diese Bibliothek gibt einige Möglichkeiten, einfach Dialoge zu erstellen und vorgefertigte Dialoge zu nutzen.`,strapi:`Der Strapi-Renderer stellt Rich-Text-Blöcke aus Strapi (Absätze, Überschriften, Listen, Zitate, Code, Bilder und Links) dar. Mit debug = true werden nicht unterstützte Knoten als JSON ausgegeben. Bilder werden lazy geladen; steht oben ein Bild im sichtbaren Bereich, lädt prioritizeFirstImage = true das erste Bild sofort mit hoher Priorität (dazu ein preconnect zum Bildserver in index.html eintragen).`,loading_button:`Unterschiedliche Varianten des Loading-Buttons. Der Button ruft die übergebene Funktion auf, zeigt einen Spinner und bleibt deaktiviert, bis das zurückgegebene Promise abgeschlossen ist (auch im Fehlerfall).`,install:`Installiere die Bibliothek zusammen mit ihren Peer Dependencies.`,providers:`Ein Modul ist nicht nötig: Komponenten, Pipes und der DialogService werden direkt importiert bzw. injiziert, die Tabelle registriert ihre Icons selbst. Stelle ngx-translate bereit und optional providePaginatorTexts(), damit der Paginator der Tabelle übersetzt wird. Wer eigene Texte möchte, stellt stattdessen einen eigenen MatPaginatorIntl bereit.`,entry_points:`Jede Funktion hat einen eigenen Entry Point (table, dialog, button, strapi), damit nur gebündelt wird, was auch genutzt wird. Der Haupteinstieg enthält nur die Enum-Helfer und kommt ohne Angular Material aus.`,translations:`Alle Texte der Komponenten werden über ngx-translate übersetzt. Diese Schlüssel müssen in den Übersetzungsdateien vorhanden sein (oder man stellt einen eigenen MatPaginatorIntl bereit).`,outputs:`Outputs von bpa-table:`,actions_example:`Dieses Beispiel aktiviert über den Input actions das Aktionsmenü und den Klick auf eine Zeile.`,columns_doc:{date:`type: ColumnType.Date - der Wert (Date, ISO-String oder Zeitstempel) wird mit der Date-Pipe formatiert und chronologisch sortiert`,enum:`type: ColumnType.Enum, args: MyEnum - der Enum-Schlüssel wird über translateKey + Spalte + '.' + Schlüssel übersetzt`,number:`type: ColumnType.Number - die Spalte wird numerisch sortiert`,getter:`getter: (item) => Wert - eigener Wert zum Anzeigen und Sortieren`,css:`cssClass - CSS-Klasse für die Kopfzelle, z. B. um die Breite festzulegen`},options_doc:{columns:`columns (Pflicht) - die anzuzeigenden Eigenschaften in dieser Reihenfolge`,dataset:`dataset - die Daten; null oder undefined zeigt den Ladezustand`,translate_key:`translateKey (Standard: 'core.components.table.') - Präfix der Übersetzungsschlüssel für Spaltenköpfe, Enum-Werte und Aktionen`,column_config:`columnConfig - Konfiguration pro Spalte, siehe oben`,sortable:`sortable (Standard: true) - auf false setzen, um die Sortierung zu deaktivieren`,paging:`paging (Standard: true) - auf false setzen, um den Paginator auszublenden`,page_size_options:`pageSizeOptions (Standard: [10, 20, 50]) - wählbare Seitengrößen`,progress_bar:`progressBar (Standard: 'always') - 'always', 'never' oder 'auto' (nur während des Ladens)`,actions:`actions (Standard: alles false) - { delete, edit, rowClicked } aktiviert das Aktionsmenü und den Klick auf eine Zeile`,icons:`editIcon / deleteIcon (Standard: 'address-card' / 'skull-crossbones') - Font-Awesome-Icons der Aktionen`},outputs_doc:{row_clicked:`rowClicked - eine Zeile wurde angeklickt (benötigt actions.rowClicked)`,edit:`editEvent - die Aktion Bearbeiten wurde gewählt (benötigt actions.edit)`,delete:`deleteEvent - die Aktion Löschen wurde gewählt (benötigt actions.delete)`},button_doc:{type:`type (Pflicht) - 'raised' oder 'stroked'`,function:`function (Pflicht) - () => Promise<void> | void, wird beim Klick aufgerufen; als Arrow-Function-Property definieren, wenn this benötigt wird`,color:`color (Standard: 'primary') - 'primary', 'accent' oder 'warn'`,disabled:`disabled (Standard: false) - deaktiviert den Button`}},headline:{first:`Bolzplatzarena Components`,examples:`Beispiele`,table:`Die Tabelle`,options:`Optionen`,enum:`Enum Helferlein`,enum_options:`Select Options mit Enumerationen`,pipe:`Pipe`,static_data:`Verwendung von statischen Daten`,no_paging:`Verwendung ohne Paging (nur erste Seite wird gezeigt)`,observables:`Verwendung von Observables`,dialogs:`Verwendung von Dialogen`,strapi:`Strapi Renderer`,getting_started:`Einrichtung`,install:`Installation`,providers:`Provider`,entry_points:`Entry Points`,translations:`Benötigte Übersetzungen`,outputs:`Outputs`,loading_button:`Loading-Button`}};var Jn={global:{no:`Abbrechen`,okay:`Okay`},components:{table:{"items-per-page":`Einträge pro Seite`,page:`Seite {{ page }} von {{ amountPages }}`,"next-page":`Nächste Seite`,"last-page":`Letzte Seite`,"first-page":`Erste Seite`,"previous-page":`Vorherige Seite`}}};var Xn={components:{"hero-list":{name:`Name`,level:`Level`,type:`Type`,"type.hammer":`Hammer`,"type.fighter":`Fighter`,"type.spy":`Spion`,"type.scientist":`Wissenschaftler`,health:`Health`,birthday:`Birthday`,custom:`Custom`,actions:`Actions`,action:{edit:`Mehr Details`,delete:`Entlassen`}}},types:{fighter:`Fighter`,hammer:`Thor`,scientist:`Wissenschaftler`,spy:`Spion`}};var ta={confirm_delete:{title:`Löschen bestätigen`,content:`Wollen Sie diesen Eintrag wirklich löschen?`},simple_dialog:{title:`Einfacher Dialog`,content:`Dies ist ein einfacher Dialog. Der Inhalt muss komplett selbst gestaltet werden. Allerdings kann man den Dialog bereits mit ESC schließen.`},confirmation:{title:`Bestätigung`,content:`Der Service bietet die Möglichkeit nach eine Bestätigung zu fragen. Dabei kann man das Ergebnis selbst auswerden oder die Methode, welche aufgerufen werden soll gleich mitliefern.`,result:`confirm(translateKey) liefert ein Promise mit true oder false:`,action:`confirm(translateKey, action) ruft die Aktion nur bei Okay auf und wartet auf sie:`},layout:{title:`Layout gleich mitliefern lassen`,content:`Keine Lust Überschrift und Buttons jedesmal zu schreiben? Dann kann man einfach eine Basis-Componente nutzen, welche die Überschrift und die Headline direkt mitliefern.`,form:`Hier gibt es ein Beispiel mit einem Formular. Dieses Formular wird in einem Dialog angezeigt und kann auch direkt validiert werden.`},keyboard:{title:`Tastatur`,content:`Dialoge, die von DialogComponent erben, schließen mit Escape (registerEscKey, Standard: true). Mit registerEnterKey = true wird mit Enter abgeschickt; ein FormDialogComponent schickt nur ein gültiges Formular ab.`}};var ea={content:Yn,bpa:Jn,hero:Xn,dialog:ta};var _e={};GO(_e,{bpa:()=>aa,content:()=>na,default:()=>ra,dialog:()=>oa,hero:()=>ia});var na={code:{copy:`Copy code`,copied:`Copied!`},text:{"1":`This is a collection of components build on top of angular material to make it easier to use it. Additionally little helpers could be found.`,examples:`Collection of conmponents and utilities based on the angular material library.`,table:`Easy way to use a table, without the need to implement the headers and columns by your own.`,column:`Custom column configuration (columnConfig) is available for:`,options:`Inputs of bpa-table:`,enum:`Sometimes it is hard to handle enums, but it is important to use an enum instead of just using a number or a string.
    <br>Here you can find some little helpers, which enable you to use enum for material select or in the tempalte as a
    string very easily.`,enum_options:`Easy way to use a typescript enum as source of the material select.`,pipe:`The pipe provides an easy way to get the selected key of an enumeration in the template.`,dialogs:`This library provides a way to use dialogs in your application.`,strapi:`The Strapi renderer displays rich text blocks from Strapi (paragraphs, headings, lists, quotes, code, images and links). With debug = true unsupported nodes are printed as JSON. Images are loaded lazily; if the content starts with an image above the fold, prioritizeFirstImage = true loads the first image eagerly with high priority (add a preconnect to the image host in index.html).`,loading_button:`Different variants of the loading button. The button calls the given function, shows a spinner and stays disabled until the returned promise is settled (also if it fails).`,install:`Install the library together with its peer dependencies.`,providers:`No module is needed: components, pipes and the DialogService are imported or injected directly, and the table registers its own icons. Provide ngx-translate and optionally providePaginatorTexts() to translate the table paginator. For custom texts provide your own MatPaginatorIntl instead.`,entry_points:`Every feature has its own entry point (table, dialog, button, strapi), so you only bundle what you use. The primary entry point only contains the enum helpers and has no Angular Material dependency.`,translations:`All texts of the components are translated with ngx-translate. Add these keys to your translation files (or provide your own MatPaginatorIntl).`,outputs:`Outputs of bpa-table:`,actions_example:`This example enables the actions menu and the row click via the actions input.`,columns_doc:{date:`type: ColumnType.Date - the value (Date, ISO string or timestamp) is formatted with the date pipe and sorted chronologically`,enum:`type: ColumnType.Enum, args: MyEnum - the enum key is translated with translateKey + column + '.' + key`,number:`type: ColumnType.Number - the column is sorted numerically`,getter:`getter: (item) => value - custom value to display and to sort by`,css:`cssClass - CSS class for the header cell, e.g. to set the width`},options_doc:{columns:`columns (required) - the properties to show, in this order`,dataset:`dataset - the data; null or undefined shows the loading state`,translate_key:`translateKey (default: 'core.components.table.') - prefix of the translation keys for headers, enum values and actions`,column_config:`columnConfig - configuration per column, see above`,sortable:`sortable (default: true) - set to false to disable sorting`,paging:`paging (default: true) - set to false to hide the paginator`,page_size_options:`pageSizeOptions (default: [10, 20, 50]) - selectable page sizes`,progress_bar:`progressBar (default: 'always') - 'always', 'never' or 'auto' (only while loading)`,actions:`actions (default: all false) - { delete, edit, rowClicked } enables the actions menu and the row click`,icons:`editIcon / deleteIcon (default: 'address-card' / 'skull-crossbones') - Font Awesome icons of the actions`},outputs_doc:{row_clicked:`rowClicked - a row was clicked (requires actions.rowClicked)`,edit:`editEvent - the edit action was chosen (requires actions.edit)`,delete:`deleteEvent - the delete action was chosen (requires actions.delete)`},button_doc:{type:`type (required) - 'raised' or 'stroked'`,function:`function (required) - () => Promise<void> | void, called on click; use an arrow function property if it needs this`,color:`color (default: 'primary') - 'primary', 'accent' or 'warn'`,disabled:`disabled (default: false) - disables the button`}},headline:{first:`Bolzplatzarena Components`,examples:`Examples`,table:`The table`,options:`Options`,enum:`Enum Helper`,enum_options:`Select Options with enumeration`,select:`Select options with enumeration`,pipe:`Pipe`,static_data:`Using of static data`,no_paging:`No paging (only first page is shown)`,observables:`Using of observables`,dialogs:`Usage of dialogs`,strapi:`Strapi renderer`,getting_started:`Getting started`,install:`Installation`,providers:`Providers`,entry_points:`Entry points`,translations:`Required translations`,outputs:`Outputs`,loading_button:`Loading button`}};var aa={global:{no:`Cancel`,okay:`Okay`},components:{table:{"items-per-page":`Items per page`,page:`Page {{ page }} of {{ amountPages }}`,"next-page":`Next page`,"last-page":`Last page`,"first-page":`First page`,"previous-page":`Previous page`}}};var ia={components:{"hero-list":{name:`Name`,level:`Level`,type:`Type`,"type.hammer":`Hammer`,"type.fighter":`Fighter`,"type.spy":`Spy`,"type.scientist":`Scientist`,health:`Health`,birthday:`Birthday`,custom:``,actions:`Actions`,action:{edit:`More Details`,delete:`Kill`}}},types:{fighter:`Fighter`,hammer:`Thor`,scientist:`Scientist`,spy:`Spy`}};var oa={confirm_delete:{title:`Confirm delete`,content:`Do you really want to delete this item?`},simple_dialog:{title:`Simple Dialog`,content:`This is a simple dialog without any special features in it. But it brings already the possibility to use esc key to close the dialog.`},confirmation:{title:`Confirmation Dialog`,content:`The service provides several function to handle confirmation. Either you handle the result of the confirmation screen by you own or you give already the function which needs to be called (or not) if the okay button is clicked.`,result:`confirm(translateKey) returns a promise with true or false:`,action:`confirm(translateKey, action) calls the action only if okay is clicked and waits for it:`},layout:{title:`Use layout`,content:`Well, all the dialogs should look like the others. So you can use a simple component which provides the layout with headline, okay and cancel button.`,form:`Here you can find a simple form, it is displayed in the dialog, the form is validated and the submit button is disabled until the form is valid.`},keyboard:{title:`Keyboard`,content:`Dialogs extending DialogComponent close on Escape (registerEscKey, default: true). Set registerEnterKey to true to submit with Enter; a FormDialogComponent only submits a valid form.`}};var ra={content:na,bpa:aa,hero:ia,dialog:oa};var la=()=>[import(`./chunk-C7g_K6OF.js`).then(n=>n.TableComponent)];var sa=()=>[import(`./chunk-CaD1FW1c.js`).then(n=>n.FullTableComponent)];var da=()=>[import(`./chunk-DBAqZy69.js`).then(n=>n.DialogsComponent)];var ca=()=>[import(`./chunk-ruvlApBU.js`).then(n=>n.EnumComponent)];var ma=()=>[import(`./chunk-BIXW6LtT.js`).then(n=>n.FileListComponent)];var ba=()=>[import(`./chunk-CaAKLVIg.js`).then(n=>n.LoadingComponent)];var pa=()=>[vn,import(`./chunk-BXrXIfjM.js`).then(n=>n.CodeBlockComponent),$3];function ga(n,x){n&1&&(Ps(0,`section`,0),Mv(1,`app-table`),df())}function ua(n,x){n&1&&(yv(0,ga,2,0),Ax(1,0,la),kx())}function ha(n,x){n&1&&Mv(0,`app-full-table`,13)}function fa(n,x){n&1&&(yv(0,ha,1,0),Ax(1,0,sa),kx())}function _a(n,x){n&1&&(Ps(0,`section`,0),Mv(1,`app-dialogs`),df())}function va(n,x){n&1&&(yv(0,_a,2,0),Ax(1,0,da),kx())}function ya(n,x){n&1&&(Ps(0,`section`,0),Mv(1,`app-enum`),df())}function xa(n,x){n&1&&(yv(0,ya,2,0),Ax(1,0,ca),kx())}function ka(n,x){n&1&&(Ps(0,`section`,0),Mv(1,`app-file-list`),df())}function Ca(n,x){n&1&&(yv(0,ka,2,0),Ax(1,0,ma),kx())}function Ta(n,x){n&1&&(Ps(0,`section`,0),Mv(1,`app-loading`),df())}function wa(n,x){n&1&&(yv(0,Ta,2,0),Ax(1,0,ba),kx())}function Sa(n,x){if(n&1&&(Ps(0,`section`,0)(1,`h2`),_N(2),kN(3,`translate`),df(),Ps(4,`p`),_N(5),kN(6,`translate`),df(),Ps(7,`div`,14),Mv(8,`bpa-strapi-renderer`,15),df(),Mv(9,`app-code-block`,16),df()),n&2){let t=Gx(2);mi(2),Kv(RN(3,5,`content.headline.strapi`)),mi(3),Kv(RN(6,7,`content.text.strapi`)),mi(3),Tv(`content`,t.strapiContent)(`debug`,!0),mi(),Tv(`code`,t.strapiExample)}}function Ia(n,x){n&1&&(yv(0,Sa,10,9),Ax(1,0,pa),kx())}var xn=(()=>{class n{constructor(){this.translate=p$1(y1),this.strapiExample=`<bpa-strapi-renderer [content]="content" [debug]="true"></bpa-strapi-renderer>

<!-- content starts with an image above the fold -->
<bpa-strapi-renderer [content]="content" [prioritizeFirstImage]="true"></bpa-strapi-renderer>`,this.strapiContent=[{type:`image`,image:{name:`0870ac59-5bf8-4a95-b08c-6eed753b9c9d-technical-system-update.jpeg`,alternativeText:`Ein Roboterarm hantiert an einem Chip. Das Bild ist im Comic-Stil.`,url:`https://cms.bolzplatzarena.net/uploads/0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794.jpeg`,caption:`Ein Roboterarm hantiert an einem Chip. Das Bild ist im Comic-Stil.`,width:1024,height:1024,formats:{thumbnail:{name:`thumbnail_0870ac59-5bf8-4a95-b08c-6eed753b9c9d-technical-system-update.jpeg`,hash:`thumbnail_0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794`,ext:`.jpeg`,mime:`image/jpeg`,path:null,width:156,height:156,size:9.83,sizeInBytes:9829,url:`/uploads/thumbnail_0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794.jpeg`},small:{name:`small_0870ac59-5bf8-4a95-b08c-6eed753b9c9d-technical-system-update.jpeg`,hash:`small_0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794`,ext:`.jpeg`,mime:`image/jpeg`,path:null,width:500,height:500,size:81.62,sizeInBytes:81619,url:`/uploads/small_0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794.jpeg`},medium:{name:`medium_0870ac59-5bf8-4a95-b08c-6eed753b9c9d-technical-system-update.jpeg`,hash:`medium_0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794`,ext:`.jpeg`,mime:`image/jpeg`,path:null,width:750,height:750,size:170.59,sizeInBytes:170594,url:`/uploads/medium_0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794.jpeg`},large:{name:`large_0870ac59-5bf8-4a95-b08c-6eed753b9c9d-technical-system-update.jpeg`,hash:`large_0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794`,ext:`.jpeg`,mime:`image/jpeg`,path:null,width:1e3,height:1e3,size:283.43,sizeInBytes:283431,url:`/uploads/large_0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794.jpeg`}},hash:`0870ac59_5bf8_4a95_b08c_6eed753b9c9d_technical_system_update_fc62b44794`,ext:`.jpeg`,mime:`image/jpeg`,size:270.14,previewUrl:null,provider:`local`,provider_metadata:null,createdAt:`2024-12-29T10:10:21.272Z`,updatedAt:`2024-12-29T10:15:22.733Z`},children:[{type:`text`,text:``}]},{type:`heading`,children:[{type:`text`,text:`Headline 1`}],level:1},{type:`heading`,children:[{type:`text`,text:`Headline 2`}],level:2},{type:`heading`,children:[{type:`text`,text:`Headline 3`}],level:3},{type:`heading`,children:[{type:`text`,text:`Headline 4`}],level:4},{type:`heading`,children:[{type:`text`,text:`Headline 5`}],level:5},{type:`heading`,children:[{type:`text`,text:`Headline 6`}],level:6},{type:`list`,format:`ordered`,children:[{type:`list-item`,children:[{type:`text`,text:`Test`}]},{type:`list-item`,children:[{type:`text`,text:`Test 2`}]},{type:`list-item`,children:[{type:`text`,text:`Test 3`}]}]},{type:`list`,format:`unordered`,children:[{type:`list-item`,children:[{type:`text`,text:`Bullet 1`}]},{type:`list-item`,children:[{type:`text`,text:`Bullet 2`}]},{type:`list-item`,children:[{type:`text`,text:`Bullet 3`}]}]},{type:`quote`,children:[{type:`text`,text:`Mein cooles Zitat`}]},{type:`code`,children:[{type:`text`,text:`var test = '';`}],language:`plaintext`},{type:`paragraph`,children:[{type:`text`,text:``}]},{type:`paragraph`,children:[{type:`text`,text:``}]},{type:`paragraph`,children:[{type:`text`,text:``}]},{type:`paragraph`,children:[{type:`text`,text:``}]},{type:`paragraph`,children:[{type:`text`,text:`Seit einigen Wochen nutze ich Matomo für die Analyse der Nutzung von Webseiten. Nach dem letzten Update wollte ich die Tutorials zu Ende machen, welche man als Administrator angezeigt bekommt. Man hat das Gefühl, dass man so das System näher kennen lernt. Allerdings kann man im System etwas einstellen, was man nun so nicht erwartet hat. Vor allem wenn man vielleicht eine Sache nicht ganz zu Ende gebracht hat.`}]},{type:`paragraph`,children:[{type:`text`,text:`Wie bemerkt man den "Fehler": Sowohl in der App als auch im Dashboard der Webanwendung fallen die Zahlen im Graph der letzten Besuche auf 0. Dabei bleiben die "`},{type:`text`,text:`alten`,underline:!0},{type:`text`,text:`" Daten erhalten. Die Daten des aktuellen Tages - also das Besucher-Log - war aber weiterhin gefüllt.`}]},{type:`paragraph`,children:[{type:`text`,text:`Matomo schlug vor, die Art der Archivierung von Daten zu ändern. Leichtgläubig bin ich davon ausgegangen, dass es sich um alte Daten handelt, welche ich mir nicht mehr ansehen will, weil diese eben veraltet sind. Aber es handelte sich um die Umwandlung von Daten des aktuellen Tages in die historische Daten. `}]},{type:`paragraph`,children:[{type:`text`,text:`Was ich also eingestellt hatte, war dass diese Umwandlung nicht mehr ständig passiert. Stattdessen sollte man eine Cronjob einrichtigen oder eine Alternativ dazu. Das hatte ich aber schlichtweg vergessen.`}]},{type:`paragraph`,children:[{type:`text`,text:`Was man also tun kann, ist auf folgender Seite beschrieben: `},{type:`link`,url:`https://matomo.org/docs/setup-auto-archiving/#web-cron-when-your-web-host-does-not-support-cron-tasks`,children:[{type:`text`,text:`https://matomo.org/docs/setup-auto-archiving/#web-cron-when-your-web-host-does-not-support-cron-tasks`}]},{text:``,type:`text`}]},{type:`paragraph`,children:[{type:`text`,text:`Wer schneller Unterstützung bzw. eine kleine Lösung benötigt. Ruft die Archivierung unter Nutzung des Auth Tokenes einfach selber auf:`}]},{type:`paragraph`,children:[{type:`text`,text:`https://DOMAIN/PFAD/matomo/misc/cron/archive.php?token_auth=TOKEN`}]},{type:`paragraph`,children:[{type:`text`,text:`Man muss nur `},{type:`text`,text:`DOMAIN`,italic:!0},{type:`text`,text:`, `},{type:`text`,text:`PFAD`,italic:!0},{type:`text`,text:` und `},{type:`text`,text:`TOKEN`,italic:!0},{type:`text`,text:` adäquat ersetzen. `},{type:`text`,text:`DOMAIN`,italic:!0},{type:`text`,text:` und `},{type:`text`,text:`PFAD`,italic:!0},{type:`text`,text:` sollte man kennen und den Token findet man in den Einstellungen.`}]}];let t=p$1(LO),e=this.translate;e.setTranslation(`en`,_e,!0),e.setTranslation(`de`,fe,!0),e.use(`de`),t.addIcons(s8),t.addIcons(l8),t.addIcons(a8)}setLanguage(t){this.translate.use(t)}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=Fe$1({type:n,selectors:[[`app-root`]],decls:30,vars:7,consts:[[1,`tw-px-8`],[3,`click`,`checked`],[3,`click`],[1,`tw-flex-1`,`tw-overflow-hidden`],[`label`,`Getting started`],[`label`,`Table`],[`matTabContent`,``],[`label`,`Full table`],[`label`,`Dialogs`],[`label`,`Enums`],[`label`,`File List`],[`label`,`Loading`],[`label`,`Strapi`],[1,`tw-flex`,`tw-flex-col`,`tw-flex-1`],[1,`demo`],[3,`content`,`debug`],[`language`,`html`,3,`code`]],template:function(e,a){e&1&&(Ps(0,`section`,0)(1,`mat-button-toggle-group`)(2,`mat-button-toggle`,1),Ov(`click`,function(){return a.setLanguage(`de`)}),_N(3,`Deutsch`),df(),Ps(4,`mat-button-toggle`,2),Ov(`click`,function(){return a.setLanguage(`en`)}),_N(5,`English`),df()(),Ps(6,`h1`),_N(7),kN(8,`translate`),df(),Ps(9,`p`),_N(10),kN(11,`translate`),df()(),Ps(12,`mat-tab-group`,3)(13,`mat-tab`,4)(14,`section`,0),Mv(15,`app-getting-started`),df()(),Ps(16,`mat-tab`,5),vv(17,ua,3,0,`ng-template`,6),df(),Ps(18,`mat-tab`,7),vv(19,fa,3,0,`ng-template`,6),df(),Ps(20,`mat-tab`,8),vv(21,va,3,0,`ng-template`,6),df(),Ps(22,`mat-tab`,9),vv(23,xa,3,0,`ng-template`,6),df(),Ps(24,`mat-tab`,10),vv(25,Ca,3,0,`ng-template`,6),df(),Ps(26,`mat-tab`,11),vv(27,wa,3,0,`ng-template`,6),df(),Ps(28,`mat-tab`,12),vv(29,Ia,3,0,`ng-template`,6),df()()),e&2&&(mi(2),Tv(`checked`,!0),mi(5),Kv(RN(8,3,`content.headline.first`)),mi(3),Kv(RN(11,5,`content.text.1`)))},dependencies:[cn,te,At,_n,re,le,fn,yn,$3],encapsulation:2})}}return n})();({production:!0}).production;uM(xn,{providers:[Z3(),xo()]}).catch(n=>console.error(n));export{Di as $,yD as $n,Yt as $t,Vn$1 as A,lt$2 as An,Ne as At,Ze$1 as B,pr as Bn,SM as Bt,w4 as C,j$1 as Cn,LN as Ct,Cn as D,kN as Dn,Lx as Dt,Be as E,kD as En,Lv as Et,yn$1 as F,oc as Fn,Px as Ft,B$2 as G,rr as Gn,Tv as Gt,mn$2 as H,q_ as Hn,Tc as Ht,R as I,oh as In,QM as It,Bt$2 as J,vM as Jn,Vi as Jt,BM as K,sq as Kn,U$1 as Kt,Xe$2 as L,p$1 as Ln,R$1 as Lt,_n$1 as M,mi as Mn,Ov as Mt,ie$1 as N,mr as Nn,P7 as Nt,E as O,kT as On,Me as Ot,mn$1 as P,nI as Pn,Ps as Pt,D as Q,xr as Qn,Y_ as Qt,Xn$1 as R,pe$2 as Rn,RN as Rt,r2 as S,io as Sn,LM as St,$t as T,jx as Tn,Ln$1 as Tt,se$2 as U,qr as Un,Td as Ut,bt$3 as V,q9 as Vn,TN as Vt,xt$2 as W,rh as Wn,Tt$2 as Wt,Co as X,vn$1 as Xn,Xx as Xt,Ce as Y,vi as Yn,Xs as Yt,Ct$1 as Z,vv as Zn,YS as Zt,R4 as _,ge$1 as _n,Jv as _t,he as a,ae$3 as an,zx as ar,FD as at,_2 as b,ho as bn,Kx as bt,wn as c,cq as cn,Fd as ct,$3 as d,df as dn,GC as dt,Z$2 as en,yc as er,Dn$1 as et,D4 as f,eA as fn,Gx as ft,M4 as g,ga$2 as gn,Js as gt,J4 as h,eo as hn,In as ht,$ as i,_e$1 as in,zM as ir,F9 as it,Wt as j,mI as jn,No as jt,Lt$2 as k,kv as kn,Mv as kt,wt as l,dD as ln,Fe$1 as lt,H as m,em as mn,Ii as mt,Do as n,Zx as nn,yi as nr,En$1 as nt,kn as o,at$1 as on,FN as ot,F1 as p,el as pn,Hf as pt,BT as q,te$1 as qn,V as qt,yt as r,_N as rn,yo as rr,Er as rt,vt as s,bh as sn,FT as st,oe$1 as t,Zf as tn,ye$2 as tr,Dp as tt,$2 as u,dI as un,Fv as ut,S2 as v,gh as vn,KS as vt,y2 as w,j7 as wn,Le$1 as wt,a1 as x,hr as xn,L$1 as xt,V0 as y,hd as yn,Kv as yt,Yn$1 as z,pf as zn,SG as zt};