(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function An(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Fn(e){if(S(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Y(r)?Hi(r):Fn(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Y(e))return e;if(J(e))return e}}const Wi=/;(?![^(]*\))/g,$i=/:([^]+)/,Li=/\/\*.*?\*\//gs;function Hi(e){const t={};return e.replace(Li,"").split(Wi).forEach(n=>{if(n){const r=n.split($i);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Dn(e){let t="";if(Y(e))t=e;else if(S(e))for(let n=0;n<e.length;n++){const r=Dn(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ui="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zi=An(Ui);function Ur(e){return!!e||e===""}const K={},lt=[],ce=()=>{},Bi=()=>!1,Ki=/^on[^a-z]/,zt=e=>Ki.test(e),Rn=e=>e.startsWith("onUpdate:"),ee=Object.assign,Wn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Vi=Object.prototype.hasOwnProperty,D=(e,t)=>Vi.call(e,t),S=Array.isArray,ct=e=>Bt(e)==="[object Map]",Ji=e=>Bt(e)==="[object Set]",I=e=>typeof e=="function",Y=e=>typeof e=="string",$n=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",zr=e=>J(e)&&I(e.then)&&I(e.catch),qi=Object.prototype.toString,Bt=e=>qi.call(e),ki=e=>Bt(e).slice(8,-1),Yi=e=>Bt(e)==="[object Object]",Ln=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=An(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zi=/-(\w)/g,Ye=Kt(e=>e.replace(Zi,(t,n)=>n?n.toUpperCase():"")),Xi=/\B([A-Z])/g,et=Kt(e=>e.replace(Xi,"-$1").toLowerCase()),Br=Kt(e=>e.charAt(0).toUpperCase()+e.slice(1)),ln=Kt(e=>e?`on${Br(e)}`:""),ft=(e,t)=>!Object.is(e,t),cn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Qi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let lr;const Gi=()=>lr||(lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ae;class es{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ae,!t&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ae;try{return ae=this,t()}finally{ae=n}}}on(){ae=this}off(){ae=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ts(e,t=ae){t&&t.active&&t.effects.push(e)}function ns(){return ae}const Hn=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Kr=e=>(e.w&Te)>0,Vr=e=>(e.n&Te)>0,rs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Te},is=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Kr(i)&&!Vr(i)?i.delete(e):t[n++]=i,i.w&=~Te,i.n&=~Te}t.length=n}},vn=new WeakMap;let ot=0,Te=1;const _n=30;let le;const Le=Symbol(""),wn=Symbol("");class Un{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ts(this,r)}run(){if(!this.active)return this.fn();let t=le,n=Pe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=le,le=this,Pe=!0,Te=1<<++ot,ot<=_n?rs(this):cr(this),this.fn()}finally{ot<=_n&&is(this),Te=1<<--ot,le=this.parent,Pe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){le===this?this.deferStop=!0:this.active&&(cr(this),this.onStop&&this.onStop(),this.active=!1)}}function cr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Pe=!0;const Jr=[];function tt(){Jr.push(Pe),Pe=!1}function nt(){const e=Jr.pop();Pe=e===void 0?!0:e}function ne(e,t,n){if(Pe&&le){let r=vn.get(e);r||vn.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Hn()),qr(i)}}function qr(e,t){let n=!1;ot<=_n?Vr(e)||(e.n|=Te,n=!Kr(e)):n=!e.has(le),n&&(e.add(le),le.deps.push(e))}function we(e,t,n,r,i,s){const o=vn.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&S(e)){const c=Number(r);o.forEach((d,p)=>{(p==="length"||p>=c)&&a.push(d)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":S(e)?Ln(n)&&a.push(o.get("length")):(a.push(o.get(Le)),ct(e)&&a.push(o.get(wn)));break;case"delete":S(e)||(a.push(o.get(Le)),ct(e)&&a.push(o.get(wn)));break;case"set":ct(e)&&a.push(o.get(Le));break}if(a.length===1)a[0]&&On(a[0]);else{const c=[];for(const d of a)d&&c.push(...d);On(Hn(c))}}function On(e,t){const n=S(e)?e:[...e];for(const r of n)r.computed&&ur(r);for(const r of n)r.computed||ur(r)}function ur(e,t){(e!==le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ss=An("__proto__,__v_isRef,__isVue"),kr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($n)),os=zn(),as=zn(!1,!0),ls=zn(!0),fr=cs();function cs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let s=0,o=this.length;s<o;s++)ne(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tt();const r=W(this)[t].apply(this,n);return nt(),r}}),e}function us(e){const t=W(this);return ne(t,"has",e),t.hasOwnProperty(e)}function zn(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?js:Gr:t?Qr:Xr).get(r))return r;const o=S(r);if(!e){if(o&&D(fr,i))return Reflect.get(fr,i,s);if(i==="hasOwnProperty")return us}const a=Reflect.get(r,i,s);return($n(i)?kr.has(i):ss(i))||(e||ne(r,"get",i),t)?a:X(a)?o&&Ln(i)?a:a.value:J(a)?e?ei(a):Vn(a):a}}const fs=Yr(),ds=Yr(!0);function Yr(e=!1){return function(n,r,i,s){let o=n[r];if(Ze(o)&&X(o)&&!X(i))return!1;if(!e&&(!Wt(i)&&!Ze(i)&&(o=W(o),i=W(i)),!S(n)&&X(o)&&!X(i)))return o.value=i,!0;const a=S(n)&&Ln(r)?Number(r)<n.length:D(n,r),c=Reflect.set(n,r,i,s);return n===W(s)&&(a?ft(i,o)&&we(n,"set",r,i):we(n,"add",r,i)),c}}function ps(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&we(e,"delete",t,void 0),r}function ms(e,t){const n=Reflect.has(e,t);return(!$n(t)||!kr.has(t))&&ne(e,"has",t),n}function hs(e){return ne(e,"iterate",S(e)?"length":Le),Reflect.ownKeys(e)}const Zr={get:os,set:fs,deleteProperty:ps,has:ms,ownKeys:hs},gs={get:ls,set(e,t){return!0},deleteProperty(e,t){return!0}},bs=ee({},Zr,{get:as,set:ds}),Bn=e=>e,Vt=e=>Reflect.getPrototypeOf(e);function Pt(e,t,n=!1,r=!1){e=e.__v_raw;const i=W(e),s=W(t);n||(t!==s&&ne(i,"get",t),ne(i,"get",s));const{has:o}=Vt(i),a=r?Bn:n?qn:dt;if(o.call(i,t))return a(e.get(t));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(t)}function jt(e,t=!1){const n=this.__v_raw,r=W(n),i=W(e);return t||(e!==i&&ne(r,"has",e),ne(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ct(e,t=!1){return e=e.__v_raw,!t&&ne(W(e),"iterate",Le),Reflect.get(e,"size",e)}function dr(e){e=W(e);const t=W(this);return Vt(t).has.call(t,e)||(t.add(e),we(t,"add",e,e)),this}function pr(e,t){t=W(t);const n=W(this),{has:r,get:i}=Vt(n);let s=r.call(n,e);s||(e=W(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?ft(t,o)&&we(n,"set",e,t):we(n,"add",e,t),this}function mr(e){const t=W(this),{has:n,get:r}=Vt(t);let i=n.call(t,e);i||(e=W(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&we(t,"delete",e,void 0),s}function hr(){const e=W(this),t=e.size!==0,n=e.clear();return t&&we(e,"clear",void 0,void 0),n}function Tt(e,t){return function(r,i){const s=this,o=s.__v_raw,a=W(o),c=t?Bn:e?qn:dt;return!e&&ne(a,"iterate",Le),o.forEach((d,p)=>r.call(i,c(d),c(p),s))}}function Et(e,t,n){return function(...r){const i=this.__v_raw,s=W(i),o=ct(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=i[e](...r),p=n?Bn:t?qn:dt;return!t&&ne(s,"iterate",c?wn:Le),{next(){const{value:b,done:_}=d.next();return _?{value:b,done:_}:{value:a?[p(b[0]),p(b[1])]:p(b),done:_}},[Symbol.iterator](){return this}}}}function Me(e){return function(...t){return e==="delete"?!1:this}}function ys(){const e={get(s){return Pt(this,s)},get size(){return Ct(this)},has:jt,add:dr,set:pr,delete:mr,clear:hr,forEach:Tt(!1,!1)},t={get(s){return Pt(this,s,!1,!0)},get size(){return Ct(this)},has:jt,add:dr,set:pr,delete:mr,clear:hr,forEach:Tt(!1,!0)},n={get(s){return Pt(this,s,!0)},get size(){return Ct(this,!0)},has(s){return jt.call(this,s,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Tt(!0,!1)},r={get(s){return Pt(this,s,!0,!0)},get size(){return Ct(this,!0)},has(s){return jt.call(this,s,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Tt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Et(s,!1,!1),n[s]=Et(s,!0,!1),t[s]=Et(s,!1,!0),r[s]=Et(s,!0,!0)}),[e,n,t,r]}const[vs,_s,ws,Os]=ys();function Kn(e,t){const n=t?e?Os:ws:e?_s:vs;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(D(n,i)&&i in r?n:r,i,s)}const Ms={get:Kn(!1,!1)},xs={get:Kn(!1,!0)},Ps={get:Kn(!0,!1)},Xr=new WeakMap,Qr=new WeakMap,Gr=new WeakMap,js=new WeakMap;function Cs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ts(e){return e.__v_skip||!Object.isExtensible(e)?0:Cs(ki(e))}function Vn(e){return Ze(e)?e:Jn(e,!1,Zr,Ms,Xr)}function Es(e){return Jn(e,!1,bs,xs,Qr)}function ei(e){return Jn(e,!0,gs,Ps,Gr)}function Jn(e,t,n,r,i){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Ts(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function Je(e){return Ze(e)?Je(e.__v_raw):!!(e&&e.__v_isReactive)}function Ze(e){return!!(e&&e.__v_isReadonly)}function Wt(e){return!!(e&&e.__v_isShallow)}function ti(e){return Je(e)||Ze(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function ni(e){return Rt(e,"__v_skip",!0),e}const dt=e=>J(e)?Vn(e):e,qn=e=>J(e)?ei(e):e;function ri(e){Pe&&le&&(e=W(e),qr(e.dep||(e.dep=Hn())))}function ii(e,t){e=W(e);const n=e.dep;n&&On(n)}function X(e){return!!(e&&e.__v_isRef===!0)}function Jt(e){return si(e,!1)}function yt(e){return si(e,!0)}function si(e,t){return X(e)?e:new Ns(e,t)}class Ns{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:dt(t)}get value(){return ri(this),this._value}set value(t){const n=this.__v_isShallow||Wt(t)||Ze(t);t=n?t:W(t),ft(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:dt(t),ii(this))}}function Ss(e){return X(e)?e.value:e}const Is={get:(e,t,n)=>Ss(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return X(i)&&!X(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function oi(e){return Je(e)?e:new Proxy(e,Is)}var ai;class As{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ai]=!1,this._dirty=!0,this.effect=new Un(t,()=>{this._dirty||(this._dirty=!0,ii(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=W(this);return ri(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ai="__v_isReadonly";function Fs(e,t,n=!1){let r,i;const s=I(e);return s?(r=e,i=ce):(r=e.get,i=e.set),new As(r,i,s||!i,n)}function je(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){qt(s,t,n)}return i}function ue(e,t,n,r){if(I(e)){const s=je(e,t,n,r);return s&&zr(s)&&s.catch(o=>{qt(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(ue(e[s],t,n,r));return i}function qt(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const d=s.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,o,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){je(c,null,10,[e,o,a]);return}}Ds(e,n,i,r)}function Ds(e,t,n,r=!0){console.error(e)}let pt=!1,Mn=!1;const Z=[];let ge=0;const qe=[];let ve=null,We=0;const li=Promise.resolve();let kn=null;function kt(e){const t=kn||li;return e?t.then(this?e.bind(this):e):t}function Rs(e){let t=ge+1,n=Z.length;for(;t<n;){const r=t+n>>>1;mt(Z[r])<e?t=r+1:n=r}return t}function Yn(e){(!Z.length||!Z.includes(e,pt&&e.allowRecurse?ge+1:ge))&&(e.id==null?Z.push(e):Z.splice(Rs(e.id),0,e),ci())}function ci(){!pt&&!Mn&&(Mn=!0,kn=li.then(fi))}function Ws(e){const t=Z.indexOf(e);t>ge&&Z.splice(t,1)}function $s(e){S(e)?qe.push(...e):(!ve||!ve.includes(e,e.allowRecurse?We+1:We))&&qe.push(e),ci()}function gr(e,t=pt?ge+1:0){for(;t<Z.length;t++){const n=Z[t];n&&n.pre&&(Z.splice(t,1),t--,n())}}function ui(e){if(qe.length){const t=[...new Set(qe)];if(qe.length=0,ve){ve.push(...t);return}for(ve=t,ve.sort((n,r)=>mt(n)-mt(r)),We=0;We<ve.length;We++)ve[We]();ve=null,We=0}}const mt=e=>e.id==null?1/0:e.id,Ls=(e,t)=>{const n=mt(e)-mt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function fi(e){Mn=!1,pt=!0,Z.sort(Ls);const t=ce;try{for(ge=0;ge<Z.length;ge++){const n=Z[ge];n&&n.active!==!1&&je(n,null,14)}}finally{ge=0,Z.length=0,ui(),pt=!1,kn=null,(Z.length||qe.length)&&fi()}}function Hs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:b,trim:_}=r[p]||K;_&&(i=n.map(x=>Y(x)?x.trim():x)),b&&(i=n.map(Qi))}let a,c=r[a=ln(t)]||r[a=ln(Ye(t))];!c&&s&&(c=r[a=ln(et(t))]),c&&ue(c,e,6,i);const d=r[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ue(d,e,6,i)}}function di(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!I(e)){const c=d=>{const p=di(d,t,!0);p&&(a=!0,ee(o,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(J(e)&&r.set(e,null),null):(S(s)?s.forEach(c=>o[c]=null):ee(o,s),J(e)&&r.set(e,o),o)}function Yt(e,t){return!e||!zt(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,et(t))||D(e,t))}let be=null,pi=null;function $t(e){const t=be;return be=e,pi=e&&e.type.__scopeId||null,t}function Us(e,t=be,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&xr(-1);const s=$t(t);let o;try{o=e(...i)}finally{$t(s),r._d&&xr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function un(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:d,render:p,renderCache:b,data:_,setupState:x,ctx:F,inheritAttrs:C}=e;let B,R;const L=$t(e);try{if(n.shapeFlag&4){const z=i||r;B=he(p.call(z,z,b,s,x,_,F)),R=c}else{const z=t;B=he(z.length>1?z(s,{attrs:c,slots:a,emit:d}):z(s,null)),R=t.props?c:zs(c)}}catch(z){qt(z,e,1),B=N(ht)}let E=B;if(R&&C!==!1){const z=Object.keys(R),{shapeFlag:re}=E;z.length&&re&7&&(o&&z.some(Rn)&&(R=Bs(R,o)),E=Xe(E,R))}return n.dirs&&(E=Xe(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),B=E,$t(L),B}const zs=e=>{let t;for(const n in e)(n==="class"||n==="style"||zt(n))&&((t||(t={}))[n]=e[n]);return t},Bs=(e,t)=>{const n={};for(const r in e)(!Rn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ks(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?br(r,o,d):!!o;if(c&8){const p=t.dynamicProps;for(let b=0;b<p.length;b++){const _=p[b];if(o[_]!==r[_]&&!Yt(d,_))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?br(r,o,d):!0:!!o;return!1}function br(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Yt(n,s))return!0}return!1}function Vs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Js=e=>e.__isSuspense;function qs(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):$s(e)}function ks(e,t){if(k){let n=k.provides;const r=k.parent&&k.parent.provides;r===n&&(n=k.provides=Object.create(r)),n[e]=t}}function At(e,t,n=!1){const r=k||be;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&I(t)?t.call(r.proxy):t}}function Ys(e,t){return Zn(e,null,t)}const Nt={};function se(e,t,n){return Zn(e,t,n)}function Zn(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=K){const a=ns()===(k==null?void 0:k.scope)?k:null;let c,d=!1,p=!1;if(X(e)?(c=()=>e.value,d=Wt(e)):Je(e)?(c=()=>e,r=!0):S(e)?(p=!0,d=e.some(E=>Je(E)||Wt(E)),c=()=>e.map(E=>{if(X(E))return E.value;if(Je(E))return Ke(E);if(I(E))return je(E,a,2)})):I(e)?t?c=()=>je(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return b&&b(),ue(e,a,3,[_])}:c=ce,t&&r){const E=c;c=()=>Ke(E())}let b,_=E=>{b=R.onStop=()=>{je(E,a,4)}},x;if(gt)if(_=ce,t?n&&ue(t,a,3,[c(),p?[]:void 0,_]):c(),i==="sync"){const E=Ho();x=E.__watcherHandles||(E.__watcherHandles=[])}else return ce;let F=p?new Array(e.length).fill(Nt):Nt;const C=()=>{if(R.active)if(t){const E=R.run();(r||d||(p?E.some((z,re)=>ft(z,F[re])):ft(E,F)))&&(b&&b(),ue(t,a,3,[E,F===Nt?void 0:p&&F[0]===Nt?[]:F,_]),F=E)}else R.run()};C.allowRecurse=!!t;let B;i==="sync"?B=C:i==="post"?B=()=>te(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),B=()=>Yn(C));const R=new Un(c,B);t?n?C():F=R.run():i==="post"?te(R.run.bind(R),a&&a.suspense):R.run();const L=()=>{R.stop(),a&&a.scope&&Wn(a.scope.effects,R)};return x&&x.push(L),L}function Zs(e,t,n){const r=this.proxy,i=Y(e)?e.includes(".")?mi(r,e):()=>r[e]:e.bind(r,r);let s;I(t)?s=t:(s=t.handler,n=t);const o=k;Qe(this);const a=Zn(i,s.bind(r),n);return o?Qe(o):He(),a}function mi(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ke(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),X(e))Ke(e.value,t);else if(S(e))for(let n=0;n<e.length;n++)Ke(e[n],t);else if(Ji(e)||ct(e))e.forEach(n=>{Ke(n,t)});else if(Yi(e))for(const n in e)Ke(e[n],t);return e}function Ue(e){return I(e)?{setup:e,name:e.name}:e}const Ft=e=>!!e.type.__asyncLoader,hi=e=>e.type.__isKeepAlive;function Xs(e,t){gi(e,"a",t)}function Qs(e,t){gi(e,"da",t)}function gi(e,t,n=k){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Zt(t,r,n),n){let i=n.parent;for(;i&&i.parent;)hi(i.parent.vnode)&&Gs(r,t,n,i),i=i.parent}}function Gs(e,t,n,r){const i=Zt(t,e,r,!0);Qt(()=>{Wn(r[t],i)},n)}function Zt(e,t,n=k,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tt(),Qe(n);const a=ue(t,n,e,o);return He(),nt(),a});return r?i.unshift(s):i.push(s),s}}const Oe=e=>(t,n=k)=>(!gt||e==="sp")&&Zt(e,(...r)=>t(...r),n),eo=Oe("bm"),Xt=Oe("m"),to=Oe("bu"),no=Oe("u"),ro=Oe("bum"),Qt=Oe("um"),io=Oe("sp"),so=Oe("rtg"),oo=Oe("rtc");function ao(e,t=k){Zt("ec",e,t)}function Fe(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(tt(),ue(c,n,8,[e.el,a,e,t]),nt())}}const lo=Symbol(),xn=e=>e?ji(e)?tr(e)||e.proxy:xn(e.parent):null,ut=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xn(e.parent),$root:e=>xn(e.root),$emit:e=>e.emit,$options:e=>Xn(e),$forceUpdate:e=>e.f||(e.f=()=>Yn(e.update)),$nextTick:e=>e.n||(e.n=kt.bind(e.proxy)),$watch:e=>Zs.bind(e)}),fn=(e,t)=>e!==K&&!e.__isScriptSetup&&D(e,t),co={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let d;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(fn(r,t))return o[t]=1,r[t];if(i!==K&&D(i,t))return o[t]=2,i[t];if((d=e.propsOptions[0])&&D(d,t))return o[t]=3,s[t];if(n!==K&&D(n,t))return o[t]=4,n[t];Pn&&(o[t]=0)}}const p=ut[t];let b,_;if(p)return t==="$attrs"&&ne(e,"get",t),p(e);if((b=a.__cssModules)&&(b=b[t]))return b;if(n!==K&&D(n,t))return o[t]=4,n[t];if(_=c.config.globalProperties,D(_,t))return _[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return fn(i,t)?(i[t]=n,!0):r!==K&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==K&&D(e,o)||fn(t,o)||(a=s[0])&&D(a,o)||D(r,o)||D(ut,o)||D(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Pn=!0;function uo(e){const t=Xn(e),n=e.proxy,r=e.ctx;Pn=!1,t.beforeCreate&&yr(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:d,created:p,beforeMount:b,mounted:_,beforeUpdate:x,updated:F,activated:C,deactivated:B,beforeDestroy:R,beforeUnmount:L,destroyed:E,unmounted:z,render:re,renderTracked:nn,renderTriggered:_t,errorCaptured:Ne,serverPrefetch:rn,expose:Se,inheritAttrs:rt,components:wt,directives:Ot,filters:sn}=t;if(d&&fo(d,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const H=o[V];I(H)&&(r[V]=H.bind(n))}if(i){const V=i.call(n,n);J(V)&&(e.data=Vn(V))}if(Pn=!0,s)for(const V in s){const H=s[V],Ie=I(H)?H.bind(n,n):I(H.get)?H.get.bind(n,n):ce,Mt=!I(H)&&I(H.set)?H.set.bind(n):ce,Ae=Ee({get:Ie,set:Mt});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:fe=>Ae.value=fe})}if(a)for(const V in a)bi(a[V],r,n,V);if(c){const V=I(c)?c.call(n):c;Reflect.ownKeys(V).forEach(H=>{ks(H,V[H])})}p&&yr(p,e,"c");function Q(V,H){S(H)?H.forEach(Ie=>V(Ie.bind(n))):H&&V(H.bind(n))}if(Q(eo,b),Q(Xt,_),Q(to,x),Q(no,F),Q(Xs,C),Q(Qs,B),Q(ao,Ne),Q(oo,nn),Q(so,_t),Q(ro,L),Q(Qt,z),Q(io,rn),S(Se))if(Se.length){const V=e.exposed||(e.exposed={});Se.forEach(H=>{Object.defineProperty(V,H,{get:()=>n[H],set:Ie=>n[H]=Ie})})}else e.exposed||(e.exposed={});re&&e.render===ce&&(e.render=re),rt!=null&&(e.inheritAttrs=rt),wt&&(e.components=wt),Ot&&(e.directives=Ot)}function fo(e,t,n=ce,r=!1){S(e)&&(e=jn(e));for(const i in e){const s=e[i];let o;J(s)?"default"in s?o=At(s.from||i,s.default,!0):o=At(s.from||i):o=At(s),X(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function yr(e,t,n){ue(S(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function bi(e,t,n,r){const i=r.includes(".")?mi(n,r):()=>n[r];if(Y(e)){const s=t[e];I(s)&&se(i,s)}else if(I(e))se(i,e.bind(n));else if(J(e))if(S(e))e.forEach(s=>bi(s,t,n,r));else{const s=I(e.handler)?e.handler.bind(n):t[e.handler];I(s)&&se(i,s,e)}}function Xn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(d=>Lt(c,d,o,!0)),Lt(c,t,o)),J(t)&&s.set(t,c),c}function Lt(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Lt(e,s,n,!0),i&&i.forEach(o=>Lt(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=po[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const po={data:vr,props:Re,emits:Re,methods:Re,computed:Re,beforeCreate:G,created:G,beforeMount:G,mounted:G,beforeUpdate:G,updated:G,beforeDestroy:G,beforeUnmount:G,destroyed:G,unmounted:G,activated:G,deactivated:G,errorCaptured:G,serverPrefetch:G,components:Re,directives:Re,watch:ho,provide:vr,inject:mo};function vr(e,t){return t?e?function(){return ee(I(e)?e.call(this,this):e,I(t)?t.call(this,this):t)}:t:e}function mo(e,t){return Re(jn(e),jn(t))}function jn(e){if(S(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function G(e,t){return e?[...new Set([].concat(e,t))]:t}function Re(e,t){return e?ee(ee(Object.create(null),e),t):t}function ho(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=G(e[r],t[r]);return n}function go(e,t,n,r=!1){const i={},s={};Rt(s,en,1),e.propsDefaults=Object.create(null),yi(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Es(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function bo(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=W(i),[c]=e.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=e.vnode.dynamicProps;for(let b=0;b<p.length;b++){let _=p[b];if(Yt(e.emitsOptions,_))continue;const x=t[_];if(c)if(D(s,_))x!==s[_]&&(s[_]=x,d=!0);else{const F=Ye(_);i[F]=Cn(c,a,F,x,e,!1)}else x!==s[_]&&(s[_]=x,d=!0)}}}else{yi(e,t,i,s)&&(d=!0);let p;for(const b in a)(!t||!D(t,b)&&((p=et(b))===b||!D(t,p)))&&(c?n&&(n[b]!==void 0||n[p]!==void 0)&&(i[b]=Cn(c,a,b,void 0,e,!0)):delete i[b]);if(s!==a)for(const b in s)(!t||!D(t,b))&&(delete s[b],d=!0)}d&&we(e,"set","$attrs")}function yi(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(It(c))continue;const d=t[c];let p;i&&D(i,p=Ye(c))?!s||!s.includes(p)?n[p]=d:(a||(a={}))[p]=d:Yt(e.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,o=!0)}if(s){const c=W(n),d=a||K;for(let p=0;p<s.length;p++){const b=s[p];n[b]=Cn(i,c,b,d[b],e,!D(d,b))}}return o}function Cn(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=D(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&I(c)){const{propsDefaults:d}=i;n in d?r=d[n]:(Qe(i),r=d[n]=c.call(null,t),He())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===et(n))&&(r=!0))}return r}function vi(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!I(e)){const p=b=>{c=!0;const[_,x]=vi(b,t,!0);ee(o,_),x&&a.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!c)return J(e)&&r.set(e,lt),lt;if(S(s))for(let p=0;p<s.length;p++){const b=Ye(s[p]);_r(b)&&(o[b]=K)}else if(s)for(const p in s){const b=Ye(p);if(_r(b)){const _=s[p],x=o[b]=S(_)||I(_)?{type:_}:Object.assign({},_);if(x){const F=Mr(Boolean,x.type),C=Mr(String,x.type);x[0]=F>-1,x[1]=C<0||F<C,(F>-1||D(x,"default"))&&a.push(b)}}}const d=[o,a];return J(e)&&r.set(e,d),d}function _r(e){return e[0]!=="$"}function wr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Or(e,t){return wr(e)===wr(t)}function Mr(e,t){return S(t)?t.findIndex(n=>Or(n,e)):I(t)&&Or(t,e)?0:-1}const _i=e=>e[0]==="_"||e==="$stable",Qn=e=>S(e)?e.map(he):[he(e)],yo=(e,t,n)=>{if(t._n)return t;const r=Us((...i)=>Qn(t(...i)),n);return r._c=!1,r},wi=(e,t,n)=>{const r=e._ctx;for(const i in e){if(_i(i))continue;const s=e[i];if(I(s))t[i]=yo(i,s,r);else if(s!=null){const o=Qn(s);t[i]=()=>o}}},Oi=(e,t)=>{const n=Qn(t);e.slots.default=()=>n},vo=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),Rt(t,"_",n)):wi(t,e.slots={})}else e.slots={},t&&Oi(e,t);Rt(e.slots,en,1)},_o=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=K;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(ee(i,t),!n&&a===1&&delete i._):(s=!t.$stable,wi(t,i)),o=t}else t&&(Oi(e,t),o={default:1});if(s)for(const a in i)!_i(a)&&!(a in o)&&delete i[a]};function Mi(){return{app:null,config:{isNativeTag:Bi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wo=0;function Oo(e,t){return function(r,i=null){I(r)||(r=Object.assign({},r)),i!=null&&!J(i)&&(i=null);const s=Mi(),o=new Set;let a=!1;const c=s.app={_uid:wo++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Uo,get config(){return s.config},set config(d){},use(d,...p){return o.has(d)||(d&&I(d.install)?(o.add(d),d.install(c,...p)):I(d)&&(o.add(d),d(c,...p))),c},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),c},component(d,p){return p?(s.components[d]=p,c):s.components[d]},directive(d,p){return p?(s.directives[d]=p,c):s.directives[d]},mount(d,p,b){if(!a){const _=N(r,i);return _.appContext=s,p&&t?t(_,d):e(_,d,b),a=!0,c._container=d,d.__vue_app__=c,tr(_.component)||_.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(d,p){return s.provides[d]=p,c}};return c}}function Tn(e,t,n,r,i=!1){if(S(e)){e.forEach((_,x)=>Tn(_,t&&(S(t)?t[x]:t),n,r,i));return}if(Ft(r)&&!i)return;const s=r.shapeFlag&4?tr(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,d=t&&t.r,p=a.refs===K?a.refs={}:a.refs,b=a.setupState;if(d!=null&&d!==c&&(Y(d)?(p[d]=null,D(b,d)&&(b[d]=null)):X(d)&&(d.value=null)),I(c))je(c,a,12,[o,p]);else{const _=Y(c),x=X(c);if(_||x){const F=()=>{if(e.f){const C=_?D(b,c)?b[c]:p[c]:c.value;i?S(C)&&Wn(C,s):S(C)?C.includes(s)||C.push(s):_?(p[c]=[s],D(b,c)&&(b[c]=p[c])):(c.value=[s],e.k&&(p[e.k]=c.value))}else _?(p[c]=o,D(b,c)&&(b[c]=o)):x&&(c.value=o,e.k&&(p[e.k]=o))};o?(F.id=-1,te(F,n)):F()}}}const te=qs;function Mo(e){return xo(e)}function xo(e,t){const n=Gi();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:d,setElementText:p,parentNode:b,nextSibling:_,setScopeId:x=ce,insertStaticContent:F}=e,C=(l,u,f,h=null,m=null,v=null,O=!1,y=null,w=!!u.dynamicChildren)=>{if(l===u)return;l&&!st(l,u)&&(h=xt(l),fe(l,m,v,!0),l=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:g,ref:P,shapeFlag:M}=u;switch(g){case Gt:B(l,u,f,h);break;case ht:R(l,u,f,h);break;case dn:l==null&&L(u,f,h,O);break;case me:wt(l,u,f,h,m,v,O,y,w);break;default:M&1?re(l,u,f,h,m,v,O,y,w):M&6?Ot(l,u,f,h,m,v,O,y,w):(M&64||M&128)&&g.process(l,u,f,h,m,v,O,y,w,ze)}P!=null&&m&&Tn(P,l&&l.ref,v,u||l,!u)},B=(l,u,f,h)=>{if(l==null)r(u.el=a(u.children),f,h);else{const m=u.el=l.el;u.children!==l.children&&d(m,u.children)}},R=(l,u,f,h)=>{l==null?r(u.el=c(u.children||""),f,h):u.el=l.el},L=(l,u,f,h)=>{[l.el,l.anchor]=F(l.children,u,f,h,l.el,l.anchor)},E=({el:l,anchor:u},f,h)=>{let m;for(;l&&l!==u;)m=_(l),r(l,f,h),l=m;r(u,f,h)},z=({el:l,anchor:u})=>{let f;for(;l&&l!==u;)f=_(l),i(l),l=f;i(u)},re=(l,u,f,h,m,v,O,y,w)=>{O=O||u.type==="svg",l==null?nn(u,f,h,m,v,O,y,w):rn(l,u,m,v,O,y,w)},nn=(l,u,f,h,m,v,O,y)=>{let w,g;const{type:P,props:M,shapeFlag:j,transition:T,dirs:A}=l;if(w=l.el=o(l.type,v,M&&M.is,M),j&8?p(w,l.children):j&16&&Ne(l.children,w,null,h,m,v&&P!=="foreignObject",O,y),A&&Fe(l,null,h,"created"),_t(w,l,l.scopeId,O,h),M){for(const $ in M)$!=="value"&&!It($)&&s(w,$,null,M[$],v,l.children,h,m,ye);"value"in M&&s(w,"value",null,M.value),(g=M.onVnodeBeforeMount)&&pe(g,h,l)}A&&Fe(l,null,h,"beforeMount");const U=(!m||m&&!m.pendingBranch)&&T&&!T.persisted;U&&T.beforeEnter(w),r(w,u,f),((g=M&&M.onVnodeMounted)||U||A)&&te(()=>{g&&pe(g,h,l),U&&T.enter(w),A&&Fe(l,null,h,"mounted")},m)},_t=(l,u,f,h,m)=>{if(f&&x(l,f),h)for(let v=0;v<h.length;v++)x(l,h[v]);if(m){let v=m.subTree;if(u===v){const O=m.vnode;_t(l,O,O.scopeId,O.slotScopeIds,m.parent)}}},Ne=(l,u,f,h,m,v,O,y,w=0)=>{for(let g=w;g<l.length;g++){const P=l[g]=y?xe(l[g]):he(l[g]);C(null,P,u,f,h,m,v,O,y)}},rn=(l,u,f,h,m,v,O)=>{const y=u.el=l.el;let{patchFlag:w,dynamicChildren:g,dirs:P}=u;w|=l.patchFlag&16;const M=l.props||K,j=u.props||K;let T;f&&De(f,!1),(T=j.onVnodeBeforeUpdate)&&pe(T,f,u,l),P&&Fe(u,l,f,"beforeUpdate"),f&&De(f,!0);const A=m&&u.type!=="foreignObject";if(g?Se(l.dynamicChildren,g,y,f,h,A,v):O||H(l,u,y,null,f,h,A,v,!1),w>0){if(w&16)rt(y,u,M,j,f,h,m);else if(w&2&&M.class!==j.class&&s(y,"class",null,j.class,m),w&4&&s(y,"style",M.style,j.style,m),w&8){const U=u.dynamicProps;for(let $=0;$<U.length;$++){const q=U[$],oe=M[q],Be=j[q];(Be!==oe||q==="value")&&s(y,q,oe,Be,m,l.children,f,h,ye)}}w&1&&l.children!==u.children&&p(y,u.children)}else!O&&g==null&&rt(y,u,M,j,f,h,m);((T=j.onVnodeUpdated)||P)&&te(()=>{T&&pe(T,f,u,l),P&&Fe(u,l,f,"updated")},h)},Se=(l,u,f,h,m,v,O)=>{for(let y=0;y<u.length;y++){const w=l[y],g=u[y],P=w.el&&(w.type===me||!st(w,g)||w.shapeFlag&70)?b(w.el):f;C(w,g,P,null,h,m,v,O,!0)}},rt=(l,u,f,h,m,v,O)=>{if(f!==h){if(f!==K)for(const y in f)!It(y)&&!(y in h)&&s(l,y,f[y],null,O,u.children,m,v,ye);for(const y in h){if(It(y))continue;const w=h[y],g=f[y];w!==g&&y!=="value"&&s(l,y,g,w,O,u.children,m,v,ye)}"value"in h&&s(l,"value",f.value,h.value)}},wt=(l,u,f,h,m,v,O,y,w)=>{const g=u.el=l?l.el:a(""),P=u.anchor=l?l.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:T}=u;T&&(y=y?y.concat(T):T),l==null?(r(g,f,h),r(P,f,h),Ne(u.children,f,P,m,v,O,y,w)):M>0&&M&64&&j&&l.dynamicChildren?(Se(l.dynamicChildren,j,f,m,v,O,y),(u.key!=null||m&&u===m.subTree)&&xi(l,u,!0)):H(l,u,f,P,m,v,O,y,w)},Ot=(l,u,f,h,m,v,O,y,w)=>{u.slotScopeIds=y,l==null?u.shapeFlag&512?m.ctx.activate(u,f,h,O,w):sn(u,f,h,m,v,O,w):nr(l,u,w)},sn=(l,u,f,h,m,v,O)=>{const y=l.component=Ao(l,h,m);if(hi(l)&&(y.ctx.renderer=ze),Fo(y),y.asyncDep){if(m&&m.registerDep(y,Q),!l.el){const w=y.subTree=N(ht);R(null,w,u,f)}return}Q(y,l,u,f,m,v,O)},nr=(l,u,f)=>{const h=u.component=l.component;if(Ks(l,u,f))if(h.asyncDep&&!h.asyncResolved){V(h,u,f);return}else h.next=u,Ws(h.update),h.update();else u.el=l.el,h.vnode=u},Q=(l,u,f,h,m,v,O)=>{const y=()=>{if(l.isMounted){let{next:P,bu:M,u:j,parent:T,vnode:A}=l,U=P,$;De(l,!1),P?(P.el=A.el,V(l,P,O)):P=A,M&&cn(M),($=P.props&&P.props.onVnodeBeforeUpdate)&&pe($,T,P,A),De(l,!0);const q=un(l),oe=l.subTree;l.subTree=q,C(oe,q,b(oe.el),xt(oe),l,m,v),P.el=q.el,U===null&&Vs(l,q.el),j&&te(j,m),($=P.props&&P.props.onVnodeUpdated)&&te(()=>pe($,T,P,A),m)}else{let P;const{el:M,props:j}=u,{bm:T,m:A,parent:U}=l,$=Ft(u);if(De(l,!1),T&&cn(T),!$&&(P=j&&j.onVnodeBeforeMount)&&pe(P,U,u),De(l,!0),M&&an){const q=()=>{l.subTree=un(l),an(M,l.subTree,l,m,null)};$?u.type.__asyncLoader().then(()=>!l.isUnmounted&&q()):q()}else{const q=l.subTree=un(l);C(null,q,f,h,l,m,v),u.el=q.el}if(A&&te(A,m),!$&&(P=j&&j.onVnodeMounted)){const q=u;te(()=>pe(P,U,q),m)}(u.shapeFlag&256||U&&Ft(U.vnode)&&U.vnode.shapeFlag&256)&&l.a&&te(l.a,m),l.isMounted=!0,u=f=h=null}},w=l.effect=new Un(y,()=>Yn(g),l.scope),g=l.update=()=>w.run();g.id=l.uid,De(l,!0),g()},V=(l,u,f)=>{u.component=l;const h=l.vnode.props;l.vnode=u,l.next=null,bo(l,u.props,h,f),_o(l,u.children,f),tt(),gr(),nt()},H=(l,u,f,h,m,v,O,y,w=!1)=>{const g=l&&l.children,P=l?l.shapeFlag:0,M=u.children,{patchFlag:j,shapeFlag:T}=u;if(j>0){if(j&128){Mt(g,M,f,h,m,v,O,y,w);return}else if(j&256){Ie(g,M,f,h,m,v,O,y,w);return}}T&8?(P&16&&ye(g,m,v),M!==g&&p(f,M)):P&16?T&16?Mt(g,M,f,h,m,v,O,y,w):ye(g,m,v,!0):(P&8&&p(f,""),T&16&&Ne(M,f,h,m,v,O,y,w))},Ie=(l,u,f,h,m,v,O,y,w)=>{l=l||lt,u=u||lt;const g=l.length,P=u.length,M=Math.min(g,P);let j;for(j=0;j<M;j++){const T=u[j]=w?xe(u[j]):he(u[j]);C(l[j],T,f,null,m,v,O,y,w)}g>P?ye(l,m,v,!0,!1,M):Ne(u,f,h,m,v,O,y,w,M)},Mt=(l,u,f,h,m,v,O,y,w)=>{let g=0;const P=u.length;let M=l.length-1,j=P-1;for(;g<=M&&g<=j;){const T=l[g],A=u[g]=w?xe(u[g]):he(u[g]);if(st(T,A))C(T,A,f,null,m,v,O,y,w);else break;g++}for(;g<=M&&g<=j;){const T=l[M],A=u[j]=w?xe(u[j]):he(u[j]);if(st(T,A))C(T,A,f,null,m,v,O,y,w);else break;M--,j--}if(g>M){if(g<=j){const T=j+1,A=T<P?u[T].el:h;for(;g<=j;)C(null,u[g]=w?xe(u[g]):he(u[g]),f,A,m,v,O,y,w),g++}}else if(g>j)for(;g<=M;)fe(l[g],m,v,!0),g++;else{const T=g,A=g,U=new Map;for(g=A;g<=j;g++){const ie=u[g]=w?xe(u[g]):he(u[g]);ie.key!=null&&U.set(ie.key,g)}let $,q=0;const oe=j-A+1;let Be=!1,sr=0;const it=new Array(oe);for(g=0;g<oe;g++)it[g]=0;for(g=T;g<=M;g++){const ie=l[g];if(q>=oe){fe(ie,m,v,!0);continue}let de;if(ie.key!=null)de=U.get(ie.key);else for($=A;$<=j;$++)if(it[$-A]===0&&st(ie,u[$])){de=$;break}de===void 0?fe(ie,m,v,!0):(it[de-A]=g+1,de>=sr?sr=de:Be=!0,C(ie,u[de],f,null,m,v,O,y,w),q++)}const or=Be?Po(it):lt;for($=or.length-1,g=oe-1;g>=0;g--){const ie=A+g,de=u[ie],ar=ie+1<P?u[ie+1].el:h;it[g]===0?C(null,de,f,ar,m,v,O,y,w):Be&&($<0||g!==or[$]?Ae(de,f,ar,2):$--)}}},Ae=(l,u,f,h,m=null)=>{const{el:v,type:O,transition:y,children:w,shapeFlag:g}=l;if(g&6){Ae(l.component.subTree,u,f,h);return}if(g&128){l.suspense.move(u,f,h);return}if(g&64){O.move(l,u,f,ze);return}if(O===me){r(v,u,f);for(let M=0;M<w.length;M++)Ae(w[M],u,f,h);r(l.anchor,u,f);return}if(O===dn){E(l,u,f);return}if(h!==2&&g&1&&y)if(h===0)y.beforeEnter(v),r(v,u,f),te(()=>y.enter(v),m);else{const{leave:M,delayLeave:j,afterLeave:T}=y,A=()=>r(v,u,f),U=()=>{M(v,()=>{A(),T&&T()})};j?j(v,A,U):U()}else r(v,u,f)},fe=(l,u,f,h=!1,m=!1)=>{const{type:v,props:O,ref:y,children:w,dynamicChildren:g,shapeFlag:P,patchFlag:M,dirs:j}=l;if(y!=null&&Tn(y,null,f,l,!0),P&256){u.ctx.deactivate(l);return}const T=P&1&&j,A=!Ft(l);let U;if(A&&(U=O&&O.onVnodeBeforeUnmount)&&pe(U,u,l),P&6)Ri(l.component,f,h);else{if(P&128){l.suspense.unmount(f,h);return}T&&Fe(l,null,u,"beforeUnmount"),P&64?l.type.remove(l,u,f,m,ze,h):g&&(v!==me||M>0&&M&64)?ye(g,u,f,!1,!0):(v===me&&M&384||!m&&P&16)&&ye(w,u,f),h&&rr(l)}(A&&(U=O&&O.onVnodeUnmounted)||T)&&te(()=>{U&&pe(U,u,l),T&&Fe(l,null,u,"unmounted")},f)},rr=l=>{const{type:u,el:f,anchor:h,transition:m}=l;if(u===me){Di(f,h);return}if(u===dn){z(l);return}const v=()=>{i(f),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:O,delayLeave:y}=m,w=()=>O(f,v);y?y(l.el,v,w):w()}else v()},Di=(l,u)=>{let f;for(;l!==u;)f=_(l),i(l),l=f;i(u)},Ri=(l,u,f)=>{const{bum:h,scope:m,update:v,subTree:O,um:y}=l;h&&cn(h),m.stop(),v&&(v.active=!1,fe(O,l,u,f)),y&&te(y,u),te(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ye=(l,u,f,h=!1,m=!1,v=0)=>{for(let O=v;O<l.length;O++)fe(l[O],u,f,h,m)},xt=l=>l.shapeFlag&6?xt(l.component.subTree):l.shapeFlag&128?l.suspense.next():_(l.anchor||l.el),ir=(l,u,f)=>{l==null?u._vnode&&fe(u._vnode,null,null,!0):C(u._vnode||null,l,u,null,null,null,f),gr(),ui(),u._vnode=l},ze={p:C,um:fe,m:Ae,r:rr,mt:sn,mc:Ne,pc:H,pbc:Se,n:xt,o:e};let on,an;return t&&([on,an]=t(ze)),{render:ir,hydrate:on,createApp:Oo(ir,on)}}function De({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xi(e,t,n=!1){const r=e.children,i=t.children;if(S(r)&&S(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=xe(i[s]),a.el=o.el),n||xi(o,a)),a.type===Gt&&(a.el=o.el)}}function Po(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const d=e[r];if(d!==0){if(i=n[n.length-1],e[i]<d){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<d?s=a+1:o=a;d<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const jo=e=>e.__isTeleport,me=Symbol(void 0),Gt=Symbol(void 0),ht=Symbol(void 0),dn=Symbol(void 0);let Ve=null,Gn=1;function xr(e){Gn+=e}function En(e){return e?e.__v_isVNode===!0:!1}function st(e,t){return e.type===t.type&&e.key===t.key}const en="__vInternal",Pi=({key:e})=>e??null,Dt=({ref:e,ref_key:t,ref_for:n})=>e!=null?Y(e)||X(e)||I(e)?{i:be,r:e,k:t,f:!!n}:e:null;function Co(e,t=null,n=null,r=0,i=null,s=e===me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Pi(t),ref:t&&Dt(t),scopeId:pi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:be};return a?(er(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Y(n)?8:16),Gn>0&&!o&&Ve&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ve.push(c),c}const N=To;function To(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===lo)&&(e=ht),En(e)){const a=Xe(e,t,!0);return n&&er(a,n),Gn>0&&!s&&Ve&&(a.shapeFlag&6?Ve[Ve.indexOf(e)]=a:Ve.push(a)),a.patchFlag|=-2,a}if($o(e)&&(e=e.__vccOpts),t){t=Eo(t);let{class:a,style:c}=t;a&&!Y(a)&&(t.class=Dn(a)),J(c)&&(ti(c)&&!S(c)&&(c=ee({},c)),t.style=Fn(c))}const o=Y(e)?1:Js(e)?128:jo(e)?64:J(e)?4:I(e)?2:0;return Co(e,t,n,r,i,o,s,!0)}function Eo(e){return e?ti(e)||en in e?ee({},e):e:null}function Xe(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?No(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Pi(a),ref:t&&t.ref?n&&i?S(i)?i.concat(Dt(t)):[i,Dt(t)]:Dt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function _e(e=" ",t=0){return N(Gt,null,e,t)}function he(e){return e==null||typeof e=="boolean"?N(ht):S(e)?N(me,null,e.slice()):typeof e=="object"?xe(e):N(Gt,null,String(e))}function xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function er(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(S(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),er(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(en in t)?t._ctx=be:i===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else I(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[_e(t)]):n=8);e.children=t,e.shapeFlag|=n}function No(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Dn([t.class,r.class]));else if(i==="style")t.style=Fn([t.style,r.style]);else if(zt(i)){const s=t[i],o=r[i];o&&s!==o&&!(S(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function pe(e,t,n,r=null){ue(e,t,7,[n,r])}const So=Mi();let Io=0;function Ao(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||So,s={uid:Io++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new es(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vi(r,i),emitsOptions:di(r,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Hs.bind(null,s),e.ce&&e.ce(s),s}let k=null;const Qe=e=>{k=e,e.scope.on()},He=()=>{k&&k.scope.off(),k=null};function ji(e){return e.vnode.shapeFlag&4}let gt=!1;function Fo(e,t=!1){gt=t;const{props:n,children:r}=e.vnode,i=ji(e);go(e,n,i,t),vo(e,r);const s=i?Do(e,t):void 0;return gt=!1,s}function Do(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ni(new Proxy(e.ctx,co));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Wo(e):null;Qe(e),tt();const s=je(r,e,0,[e.props,i]);if(nt(),He(),zr(s)){if(s.then(He,He),t)return s.then(o=>{Pr(e,o,t)}).catch(o=>{qt(o,e,0)});e.asyncDep=s}else Pr(e,s,t)}else Ci(e,t)}function Pr(e,t,n){I(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=oi(t)),Ci(e,n)}let jr;function Ci(e,t,n){const r=e.type;if(!e.render){if(!t&&jr&&!r.render){const i=r.template||Xn(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,d=ee(ee({isCustomElement:s,delimiters:a},o),c);r.render=jr(i,d)}}e.render=r.render||ce}Qe(e),tt(),uo(e),nt(),He()}function Ro(e){return new Proxy(e.attrs,{get(t,n){return ne(e,"get","$attrs"),t[n]}})}function Wo(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ro(e))},slots:e.slots,emit:e.emit,expose:t}}function tr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(oi(ni(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ut)return ut[n](e)},has(t,n){return n in t||n in ut}}))}function $o(e){return I(e)&&"__vccOpts"in e}const Ee=(e,t)=>Fs(e,t,gt);function ke(e,t,n){const r=arguments.length;return r===2?J(t)&&!S(t)?En(t)?N(e,null,[t]):N(e,t):N(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&En(n)&&(n=[n]),N(e,t,n))}const Lo=Symbol(""),Ho=()=>At(Lo),Uo="3.2.47",zo="http://www.w3.org/2000/svg",$e=typeof document<"u"?document:null,Cr=$e&&$e.createElement("template"),Bo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?$e.createElementNS(zo,e):$e.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>$e.createTextNode(e),createComment:e=>$e.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$e.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Cr.innerHTML=r?`<svg>${e}</svg>`:e;const a=Cr.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ko(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vo(e,t,n){const r=e.style,i=Y(n);if(n&&!i){if(t&&!Y(t))for(const s in t)n[s]==null&&Nn(r,s,"");for(const s in n)Nn(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const Tr=/\s*!important$/;function Nn(e,t,n){if(S(n))n.forEach(r=>Nn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Jo(e,t);Tr.test(n)?e.setProperty(et(r),n.replace(Tr,""),"important"):e[r]=n}}const Er=["Webkit","Moz","ms"],pn={};function Jo(e,t){const n=pn[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return pn[t]=r;r=Br(r);for(let i=0;i<Er.length;i++){const s=Er[i]+r;if(s in e)return pn[t]=s}return t}const Nr="http://www.w3.org/1999/xlink";function qo(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Nr,t.slice(6,t.length)):e.setAttributeNS(Nr,t,n);else{const s=zi(t);n==null||s&&!Ur(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function ko(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ur(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Yo(e,t,n,r){e.addEventListener(t,n,r)}function Zo(e,t,n,r){e.removeEventListener(t,n,r)}function Xo(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[a,c]=Qo(t);if(r){const d=s[t]=ta(r,i);Yo(e,a,d,c)}else o&&(Zo(e,a,o,c),s[t]=void 0)}}const Sr=/(?:Once|Passive|Capture)$/;function Qo(e){let t;if(Sr.test(e)){t={};let r;for(;r=e.match(Sr);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):et(e.slice(2)),t]}let mn=0;const Go=Promise.resolve(),ea=()=>mn||(Go.then(()=>mn=0),mn=Date.now());function ta(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ue(na(r,n.value),t,5,[r])};return n.value=e,n.attached=ea(),n}function na(e,t){if(S(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ir=/^on[a-z]/,ra=(e,t,n,r,i=!1,s,o,a,c)=>{t==="class"?Ko(e,r,i):t==="style"?Vo(e,n,r):zt(t)?Rn(t)||Xo(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ia(e,t,r,i))?ko(e,t,r,s,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),qo(e,t,r,i))};function ia(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ir.test(t)&&I(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ir.test(t)&&Y(n)?!1:t in e}const sa=ee({patchProp:ra},Bo);let Ar;function oa(){return Ar||(Ar=Mo(sa))}const aa=(...e)=>{const t=oa().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=la(r);if(!i)return;const s=t._component;!I(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function la(e){return Y(e)?document.querySelector(e):e}function ca(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fr(Object(n),!0).forEach(function(r){ca(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ua(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fa(e,t){if(e==null)return{};var n=ua(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function da(e,t){return pa(e)||ma(e,t)||ha(e,t)||ga()}function pa(e){if(Array.isArray(e))return e}function ma(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,i=!1,s=void 0;try{for(var o=e[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(t&&n.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}}function ha(e,t){if(e){if(typeof e=="string")return Rr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(e,t)}}function Rr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ga(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ba(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wr(Object(n),!0).forEach(function(r){ba(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ya(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function at(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t.apply(n,[].concat(i,a))}}}function Ht(e){return{}.toString.call(e).includes("Object")}function va(e){return!Object.keys(e).length}function bt(e){return typeof e=="function"}function _a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function wa(e,t){return Ht(t)||Ce("changeType"),Object.keys(t).some(function(n){return!_a(e,n)})&&Ce("changeField"),t}function Oa(e){bt(e)||Ce("selectorType")}function Ma(e){bt(e)||Ht(e)||Ce("handlerType"),Ht(e)&&Object.values(e).some(function(t){return!bt(t)})&&Ce("handlersType")}function xa(e){e||Ce("initialIsRequired"),Ht(e)||Ce("initialType"),va(e)&&Ce("initialContent")}function Pa(e,t){throw new Error(e[t]||e.default)}var ja={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ce=at(Pa)(ja),St={changes:wa,selector:Oa,handler:Ma,initial:xa};function Ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};St.initial(e),St.handler(t);var n={current:e},r=at(Na)(n,t),i=at(Ea)(n),s=at(St.changes)(e),o=at(Ta)(n);function a(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(p){return p};return St.selector(d),d(n.current)}function c(d){ya(r,i,s,o)(d)}return[a,c]}function Ta(e,t){return bt(t)?t(e.current):t}function Ea(e,t){return e.current=$r($r({},e.current),t),t}function Na(e,t,n){return bt(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Sa={create:Ca},Ia={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function Aa(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t.apply(n,[].concat(i,a))}}}function Fa(e){return{}.toString.call(e).includes("Object")}function Da(e){return e||Lr("configIsRequired"),Fa(e)||Lr("configType"),e.urls?(Ra(),{paths:{vs:e.urls.monacoBase}}):e}function Ra(){console.warn(Ti.deprecation)}function Wa(e,t){throw new Error(e[t]||e.default)}var Ti={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Lr=Aa(Wa)(Ti),$a={config:Da},La=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,o){return o(s)},i)}};function Ei(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Ei(e[n],t[n]))}),Dr(Dr({},e),t)}var Ha={type:"cancelation",msg:"operation is manually canceled"};function hn(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(Ha):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Ua=Sa.create({config:Ia,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ni=da(Ua,2),vt=Ni[0],tn=Ni[1];function za(e){var t=$a.config(e),n=t.monaco,r=fa(t,["monaco"]);tn(function(i){return{config:Ei(i.config,r),monaco:n}})}function Ba(){var e=vt(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(tn({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),hn(gn);if(window.monaco&&window.monaco.editor)return Si(window.monaco),e.resolve(window.monaco),hn(gn);La(Ka,Ja)(qa)}return hn(gn)}function Ka(e){return document.body.appendChild(e)}function Va(e){var t=document.createElement("script");return e&&(t.src=e),t}function Ja(e){var t=vt(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=Va("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function qa(){var e=vt(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){Si(n),e.resolve(n)},function(n){e.reject(n)})}function Si(e){vt().monaco||tn({monaco:e})}function ka(){return vt(function(e){var t=e.monaco;return t})}var gn=new Promise(function(e,t){return tn({resolve:e,reject:t})}),Sn={config:za,init:Ba,__getMonacoInstance:ka};const bn={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Ii(e,t){const n=Ee(()=>{const{width:i,height:s}=e;return{...bn.wrapper,width:i,height:s}}),r=Ee(()=>({...bn.fullWidth,...!t.value&&bn.hide}));return{wrapperStyle:n,containerStyle:r}}function Ai(){const e=yt(Sn.__getMonacoInstance()),t=Jt(!1);let n;return Xt(()=>{e.value||(n=Sn.init(),n.then(i=>e.value=i).catch(i=>{(i==null?void 0:i.type)!=="cancelation"&&(t.value=!0,console.error("Monaco initialization error:",i))}))}),{monacoRef:e,unload:()=>n==null?void 0:n.cancel(),isLoadFailed:t}}function Ut(e){return typeof e=="function"?e():e}function In(e){return e===void 0}function Ge(e,t,n,r){return Ya(e,r)||Za(e,t,n,r)}function Ya(e,t){return e.editor.getModel(Fi(e,t))}function Za(e,t,n,r){return e.editor.createModel(t,n,r?Fi(e,r):void 0)}function Fi(e,t){return e.Uri.parse(t)}const Xa={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},Qa=Ue({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"vs"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const n=new Map,r=yt(null),{monacoRef:i,unload:s,isLoadFailed:o}=Ai(),{editorRef:a}=Ga(t,e,i,r),{disposeValidator:c}=el(t,e,i,a),d=Ee(()=>!!i.value&&!!a.value),{wrapperStyle:p,containerStyle:b}=Ii(e,d);return Qt(()=>{var _,x;(_=c.value)==null||_.call(c),a.value?((x=a.value.getModel())==null||x.dispose(),a.value.dispose()):s()}),se([()=>e.path,()=>e.value,()=>e.language,()=>e.line],([_,x,F,C],[B,R,L,E])=>{if(!d.value)return;const z=a.value.getModel(),re=Ge(i.value,x||e.defaultValue||"",F||e.defaultLanguage||"",_||e.defaultPath||"");if(z!==re){e.saveViewState&&n.set(B,a.value.saveViewState()),a.value.setModel(re),e.saveViewState&&a.value.restoreViewState(n.get(_)),In(C)||a.value.revealLine(C);return}a.value.getValue()!==x&&a.value.setValue(x),F!==L&&i.value.editor.setModelLanguage(a.value.getModel(),F),!In(C)&&C!==E&&a.value.revealLine(C)}),se(()=>e.options,_=>a.value&&a.value.updateOptions(_),{deep:!0}),se(()=>e.theme,_=>i.value&&i.value.editor.setTheme(_)),{containerRef:r,isEditorReady:d,isLoadFailed:o,wrapperStyle:p,containerStyle:b}},render(){const{$slots:e,isEditorReady:t,isLoadFailed:n,wrapperStyle:r,containerStyle:i,className:s}=this;return ke("div",{style:r},[!t&&ke("div",{style:Xa},n?e.failure?Ut(e.failure):"load failed":e.default?Ut(e.default):"loading..."),ke("div",{ref:"containerRef",key:"monaco_editor_container",style:i,class:s})])}});function Ga({emit:e},t,n,r){const i=yt(null);Xt(()=>{const o=se(n,()=>{r.value&&n.value&&(kt(()=>o()),s())},{immediate:!0})});function s(){var c;if(!r.value||!n.value||i.value)return;e("beforeMount",n.value);const o=t.path||t.defaultPath,a=Ge(n.value,t.value||t.defaultValue||"",t.language||t.defaultLanguage||"",o||"");i.value=n.value.editor.create(r.value,{model:a,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0,...t.options},t.overrideServices),(c=i.value)==null||c.onDidChangeModelContent(d=>{const p=i.value.getValue();p!==t.value&&(e("update:value",p),e("change",p,d))}),i.value&&!In(t.line)&&i.value.revealLine(t.line),e("mount",i.value,n.value)}return{editorRef:i}}function el({emit:e},t,n,r){const i=Jt(null),s=se([n,r],()=>{if(n.value&&r.value){kt(()=>s());const o=n.value.editor.onDidChangeMarkers(a=>{var d,p;const c=(p=(d=r.value)==null?void 0:d.getModel())==null?void 0:p.uri;if(c&&a.find(_=>_.path===c.path)){const _=n.value.editor.getModelMarkers({resource:c});e("validate",_)}});i.value=()=>o==null?void 0:o.dispose()}});return{disposeValidator:i}}const tl={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},nl=Ue({name:"VueMonacoDiffEditor",props:{original:String,modified:String,language:String,originalLanguage:String,modifiedLanguage:String,originalModelPath:String,modifiedModelPath:String,theme:{type:String,default:"vs"},options:{type:Object,default:()=>({})},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},setup(e,t){const n=yt(null),{monacoRef:r,unload:i,isLoadFailed:s}=Ai(),{diffEditorRef:o}=rl(t,e,r,n),a=Ee(()=>!!r.value&&!!o.value),{wrapperStyle:c,containerStyle:d}=Ii(e,a);return Qt(()=>{var b,_,x,F,C,B,R,L;!r.value&&i();const p=(_=(b=o.value)==null?void 0:b.getModel)==null?void 0:_.call(b);(F=(x=p==null?void 0:p.original)==null?void 0:x.dispose)==null||F.call(x),(B=(C=p==null?void 0:p.modified)==null?void 0:C.dispose)==null||B.call(C),(L=(R=o.value)==null?void 0:R.dispose)==null||L.call(R)}),se([()=>e.originalModelPath,()=>e.original,()=>e.originalLanguage,()=>e.language],([p,b,_,x],[F,C,B,R])=>{if(!a.value)return;const L=o.value.getOriginalEditor(),E=L.getModel(),z=Ge(r.value,b||"",_||x||"text",p||"");if(E!==z){L.setModel(z);return}b!==L.getValue()&&L.setValue(b||""),(_!==B||x!==R)&&r.value.editor.setModelLanguage(o.value.getModel().original,_||x||"text")}),se([()=>e.modifiedModelPath,()=>e.modified,()=>e.modifiedLanguage,()=>e.language],([p,b,_,x],[F,C,B,R])=>{if(!a.value)return;const L=o.value.getModifiedEditor(),E=L.getModel(),z=Ge(r.value,b||"",_||x||"text",p||"");if(E!==z){L.setModel(z);return}if(b!==L.getValue()){const re=r.value.editor.EditorOption.readOnly;L.getOption(re)?L.setValue(b||""):(L.executeEdits("",[{range:L.getModel().getFullModelRange(),text:b||"",forceMoveMarkers:!0}]),L.pushUndoStop())}(_!==B||x!==R)&&r.value.editor.setModelLanguage(o.value.getModel().modified,_||x||"text")}),se(()=>e.theme,()=>{var p;return(p=r.value)==null?void 0:p.editor.setTheme(e.theme)}),se(()=>e.options,()=>{var p;return(p=o.value)==null?void 0:p.updateOptions(e.options)},{deep:!0}),{containerRef:n,isDiffEditorReady:a,isLoadFailed:s,wrapperStyle:c,containerStyle:d}},render(){const{$slots:e,isDiffEditorReady:t,isLoadFailed:n,wrapperStyle:r,containerStyle:i,className:s}=this;return ke("div",{style:r},[!t&&ke("div",{style:tl},n?e.failure?Ut(e.failure):"load failed":e.default?Ut(e.default):"loading..."),ke("div",{ref:"containerRef",key:"monaco_diff_editor_container",style:i,class:s})])}});function rl({emit:e},t,n,r){const i=yt(null);Xt(()=>{const o=se(n,()=>{r.value&&n.value&&(kt(()=>o()),s())},{immediate:!0})});function s(){var c;if(!r.value||!n.value||i.value)return;e("beforeMount",n.value),i.value=n.value.editor.createDiffEditor(r.value,{automaticLayout:!0,autoIndent:"brackets",theme:t.theme,formatOnPaste:!0,formatOnType:!0,...t.options});const o=Ge(n.value,t.original||"",t.originalLanguage||t.language||"text",t.originalModelPath||""),a=Ge(n.value,t.modified||"",t.modifiedLanguage||t.language||"text",t.modifiedModelPath||"");(c=i.value)==null||c.setModel({original:o,modified:a}),e("mount",i.value,n.value)}return{diffEditorRef:i}}function Hr(e){return e?"Dark":"Light"}const il=Ue({name:"DarkMode",props:{onChange:Function},setup(e){const t=Jt(!0),n=Ee(()=>Hr(!t.value)),r=Ee(()=>t.value?"🌞":"🌒");Ys(()=>{document.documentElement.setAttribute("data-color-mode",Hr(t.value).toLowerCase())});function i(){var s;t.value=!t.value,(s=e.onChange)==null||s.call(e,t.value)}return()=>N("span",{class:"dark-mode-wrapper",onClick:i},[N("span",{class:"dark-mode-text"},[r.value]),N("span",null,[n.value])])}});const sl=Ue({name:"GitHubCorners",props:{href:String,target:{type:String,default:"__blank"}},setup(e){return()=>N("a",{class:"github-corner","aria-label":"View source on GitHub",href:e.href,target:e.target},[N("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;","aria-hidden":"true"},[N("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"},null),N("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:"transform-origin: 130px 106px;",class:"octo-arm"},null),N("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"},null)])])}}),ol="/monaco-vue/assets/logo-277e0e97.svg";const al=Ue({name:"SiteHeader",setup(){const e="1.5.1";return()=>N("header",{class:"header-wrapper"},[N("img",{class:"header-logo",alt:"logo",src:ol},null),N("h1",null,[_e("Vue Monaco Editor "),N("sup",{class:"header-sup-text"},[_e("v"),e])]),N("p",{class:"header-description"},[_e("MonacoEditor component for Vue.")]),N("div",null,[N("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/imguolao/monaco-vue"},[_e("View On Github")]),N("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.npmjs.com/package/@guolao/vue-monaco-editor"},[_e("View On NPM")]),N("a",{target:"_blank",rel:"noopener noreferrer",href:"https://microsoft.github.io/monaco-editor"},[_e("Monaco Editor Documentation")])])])}}),ll=`/*
  © Microsoft. All rights reserved.

  This library is supported for use in Windows Tailored Apps only.

  Build: 6.2.8100.0 
  Version: 0.5 
*/

(function (global, undefined) {
  "use strict";
  undefinedVariable = {};
  undefinedVariable.prop = 5;

  function initializeProperties(target, members) {
    var keys = Object.keys(members);
    var properties;
    var i, len;
    for (i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var enumerable = key.charCodeAt(0) !== /*_*/95;
      var member = members[key];
      if (member && typeof member === 'object') {
        if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
          if (member.enumerable === undefined) {
            member.enumerable = enumerable;
          }
          properties = properties || {};
          properties[key] = member;
          continue;
        } 
      }
      if (!enumerable) {
        properties = properties || {};
        properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }
        continue;
      }
      target[key] = member;
    }
    if (properties) {
      Object.defineProperties(target, properties);
    }
  }

  (function (rootNamespace) {

    // Create the rootNamespace in the global namespace
    if (!global[rootNamespace]) {
      global[rootNamespace] = Object.create(Object.prototype);
    }

    // Cache the rootNamespace we just created in a local variable
    var _rootNamespace = global[rootNamespace];
    if (!_rootNamespace.Namespace) {
      _rootNamespace.Namespace = Object.create(Object.prototype);
    }

    function defineWithParent(parentNamespace, name, members) {
      /// <summary locid="1">
      /// Defines a new namespace with the specified name, under the specified parent namespace.
      /// </summary>
      /// <param name="parentNamespace" type="Object" locid="2">
      /// The parent namespace which will contain the new namespace.
      /// </param>
      /// <param name="name" type="String" locid="3">
      /// Name of the new namespace.
      /// </param>
      /// <param name="members" type="Object" locid="4">
      /// Members in the new namespace.
      /// </param>
      /// <returns locid="5">
      /// The newly defined namespace.
      /// </returns>
      var currentNamespace = parentNamespace,
        namespaceFragments = name.split(".");

      for (var i = 0, len = namespaceFragments.length; i < len; i++) {
        var namespaceName = namespaceFragments[i];
        if (!currentNamespace[namespaceName]) {
          Object.defineProperty(currentNamespace, namespaceName, 
            { value: {}, writable: false, enumerable: true, configurable: true }
          );
        }
        currentNamespace = currentNamespace[namespaceName];
      }

      if (members) {
        initializeProperties(currentNamespace, members);
      }

      return currentNamespace;
    }

    function define(name, members) {
      /// <summary locid="6">
      /// Defines a new namespace with the specified name.
      /// </summary>
      /// <param name="name" type="String" locid="7">
      /// Name of the namespace.  This could be a dot-separated nested name.
      /// </param>
      /// <param name="members" type="Object" locid="4">
      /// Members in the new namespace.
      /// </param>
      /// <returns locid="5">
      /// The newly defined namespace.
      /// </returns>
      return defineWithParent(global, name, members);
    }

    // Establish members of the "WinJS.Namespace" namespace
    Object.defineProperties(_rootNamespace.Namespace, {

      defineWithParent: { value: defineWithParent, writable: true, enumerable: true },

      define: { value: define, writable: true, enumerable: true }

    });

  })("WinJS");

  (function (WinJS) {

    function define(constructor, instanceMembers, staticMembers) {
      /// <summary locid="8">
      /// Defines a class using the given constructor and with the specified instance members.
      /// </summary>
      /// <param name="constructor" type="Function" locid="9">
      /// A constructor function that will be used to instantiate this class.
      /// </param>
      /// <param name="instanceMembers" type="Object" locid="10">
      /// The set of instance fields, properties and methods to be made available on the class.
      /// </param>
      /// <param name="staticMembers" type="Object" locid="11">
      /// The set of static fields, properties and methods to be made available on the class.
      /// </param>
      /// <returns type="Function" locid="12">
      /// The newly defined class.
      /// </returns>
      constructor = constructor || function () { };
      if (instanceMembers) {
        initializeProperties(constructor.prototype, instanceMembers);
      }
      if (staticMembers) {
        initializeProperties(constructor, staticMembers);
      }
      return constructor;
    }

    function derive(baseClass, constructor, instanceMembers, staticMembers) {
      /// <summary locid="13">
      /// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
      /// </summary>
      /// <param name="baseClass" type="Function" locid="14">
      /// The class to inherit from.
      /// </param>
      /// <param name="constructor" type="Function" locid="9">
      /// A constructor function that will be used to instantiate this class.
      /// </param>
      /// <param name="instanceMembers" type="Object" locid="10">
      /// The set of instance fields, properties and methods to be made available on the class.
      /// </param>
      /// <param name="staticMembers" type="Object" locid="11">
      /// The set of static fields, properties and methods to be made available on the class.
      /// </param>
      /// <returns type="Function" locid="12">
      /// The newly defined class.
      /// </returns>
      if (baseClass) {
        constructor = constructor || function () { };
        var basePrototype = baseClass.prototype;
        constructor.prototype = Object.create(basePrototype);
        Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });
        Object.defineProperty(constructor.prototype, "constructor", { value: constructor });
        if (instanceMembers) {
          initializeProperties(constructor.prototype, instanceMembers);
        }
        if (staticMembers) {
          initializeProperties(constructor, staticMembers);
        }
        return constructor;
      } else {
        return define(constructor, instanceMembers, staticMembers);
      }
    }

    function mix(constructor) {
      /// <summary locid="15">
      /// Defines a class using the given constructor and the union of the set of instance members
      /// specified by all the mixin objects.  The mixin parameter list can be of variable length.
      /// </summary>
      /// <param name="constructor" locid="9">
      /// A constructor function that will be used to instantiate this class.
      /// </param>
      /// <returns locid="12">
      /// The newly defined class.
      /// </returns>
      constructor = constructor || function () { };
      var i, len;
      for (i = 0, len = arguments.length; i < len; i++) {
        initializeProperties(constructor.prototype, arguments[i]);
      }
      return constructor;
    }

    // Establish members of "WinJS.Class" namespace
    WinJS.Namespace.define("WinJS.Class", {
      define: define,
      derive: derive,
      mix: mix
    });

  })(WinJS);

})(this);
`,yn={original:`/*
  © Microsoft. All rights reserved.

  This library is supported for use in Windows Tailored Apps only.

  Build: 6.2.8100.0
  Version: 0.5
*/

(function (global, undefined) {
	"use strict";
	undefinedVariable = {};
	undefinedVariable.prop = 5;

	function initializeProperties(target, members) {
		var keys = Object.keys(members);
		var properties;
		var i, len;
		for (i = 0, len = keys.length; i < len; i++) {
			var key = keys[i];
			var enumerable = key.charCodeAt(0) !== /*_*/95;
			var member = members[key];
			if (member && typeof member === 'object') {
				if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
					if (member.enumerable === undefined) {
						member.enumerable = enumerable;
					}
					properties = properties || {};
					properties[key] = member;
					continue;
				}
			}
			// These next lines will be deleted
			if (!enumerable) {
				properties = properties || {};
				properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }
				continue;
			}
			target[key] = member;
		}
		if (properties) {
			Object.defineProperties(target, properties);
		}
	}

	(function (rootNamespace) {

		// Create the rootNamespace in the global namespace
		if (!global[rootNamespace]) {
			global[rootNamespace] = Object.create(Object.prototype);
		}

		// Cache the rootNamespace we just created in a local variable
		var _rootNamespace = global[rootNamespace];
		if (!_rootNamespace.Namespace) {
			_rootNamespace.Namespace = Object.create(Object.prototype);
		}

		function defineWithParent(parentNamespace, name, members) {
			/// <summary locid="1">
			/// Defines a new namespace with the specified name, under the specified parent namespace.
			/// </summary>
			/// <param name="parentNamespace" type="Object" locid="2">
			/// The parent namespace which will contain the new namespace.
			/// </param>
			/// <param name="name" type="String" locid="3">
			/// Name of the new namespace.
			/// </param>
			/// <param name="members" type="Object" locid="4">
			/// Members in the new namespace.
			/// </param>
			/// <returns locid="5">
			/// The newly defined namespace.
			/// </returns>
			var currentNamespace = parentNamespace,
				namespaceFragments = name.split(".");

			for (var i = 0, len = namespaceFragments.length; i < len; i++) {
				var namespaceName = namespaceFragments[i];
				if (!currentNamespace[namespaceName]) {
					Object.defineProperty(currentNamespace, namespaceName,
						{ value: {}, writable: false, enumerable: true, configurable: true }
					);
				}
				currentNamespace = currentNamespace[namespaceName];
			}

			if (members) {
				initializeProperties(currentNamespace, members);
			}

			return currentNamespace;
		}

		function define(name, members) {
			/// <summary locid="6">
			/// Defines a new namespace with the specified name.
			/// </summary>
			/// <param name="name" type="String" locid="7">
			/// Name of the namespace.  This could be a dot-separated nested name.
			/// </param>
			/// <param name="members" type="Object" locid="4">
			/// Members in the new namespace.
			/// </param>
			/// <returns locid="5">
			/// The newly defined namespace.
			/// </returns>
			return defineWithParent(global, name, members);
		}

		// Establish members of the "WinJS.Namespace" namespace
		Object.defineProperties(_rootNamespace.Namespace, {

			defineWithParent: { value: defineWithParent, writable: true, enumerable: true },

			define: { value: define, writable: true, enumerable: true }

		});

	})("WinJS");

	(function (WinJS) {

		function define(constructor, instanceMembers, staticMembers) {
			/// <summary locid="8">
			/// Defines a class using the given constructor and with the specified instance members.
			/// </summary>
			/// <param name="constructor" type="Function" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <param name="instanceMembers" type="Object" locid="10">
			/// The set of instance fields, properties and methods to be made available on the class.
			/// </param>
			/// <param name="staticMembers" type="Object" locid="11">
			/// The set of static fields, properties and methods to be made available on the class.
			/// </param>
			/// <returns type="Function" locid="12">
			/// The newly defined class.
			/// </returns>
			constructor = constructor || function () { };
			if (instanceMembers) {
				initializeProperties(constructor.prototype, instanceMembers);
			}
			if (staticMembers) {
				initializeProperties(constructor, staticMembers);
			}
			return constructor;
		}

		function derive(baseClass, constructor, instanceMembers, staticMembers) {
			/// <summary locid="13">
			/// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
			/// </summary>
			/// <param name="baseClass" type="Function" locid="14">
			/// The class to inherit from.
			/// </param>
			/// <param name="constructor" type="Function" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <param name="instanceMembers" type="Object" locid="10">
			/// The set of instance fields, properties and methods to be made available on the class.
			/// </param>
			/// <param name="staticMembers" type="Object" locid="11">
			/// The set of static fields, properties and methods to be made available on the class.
			/// </param>
			/// <returns type="Function" locid="12">
			/// The newly defined class.
			/// </returns>
			if (baseClass) {
				constructor = constructor || function () { };
				var basePrototype = baseClass.prototype;
				constructor.prototype = Object.create(basePrototype);
				Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });
				Object.defineProperty(constructor.prototype, "constructor", { value: constructor });
				if (instanceMembers) {
					initializeProperties(constructor.prototype, instanceMembers);
				}
				if (staticMembers) {
					initializeProperties(constructor, staticMembers);
				}
				return constructor;
			} else {
				return define(constructor, instanceMembers, staticMembers);
			}
		}

		function mix(constructor) {
			/// <summary locid="15">
			/// Defines a class using the given constructor and the union of the set of instance members
			/// specified by all the mixin objects.  The mixin parameter list can be of variable length.
			/// </summary>
			/// <param name="constructor" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <returns locid="12">
			/// The newly defined class.
			/// </returns>
			constructor = constructor || function () { };
			var i, len;
			for (i = 0, len = arguments.length; i < len; i++) {
				initializeProperties(constructor.prototype, arguments[i]);
			}
			return constructor;
		}

		// Establish members of "WinJS.Class" namespace
		WinJS.Namespace.define("WinJS.Class", {
			define: define,
			derive: derive,
			mix: mix
		});

	})(WinJS);

})(this);
`,modified:`/*
  © Microsoft. All rights reserved.

  This library is supported for use in Windows Tailored Apps only.

  Build: 6.2.8100.0
  Version: 0.5
*/

// Here are some inserted lines
// with some extra comments

(function (global, undefined) {
	"use strict";
	var definedVariable = {};
	definedVariable.prop = 5;

	function initializeProperties(target, members) {
		var keys = Object.keys(members);
		var properties;
		var i, len;
		for (i = 0, len = keys.length; i < len; i++) {
			var key = keys[i];
			var enumerable = key.charCodeAt(0) !== /*_*/95;
			var member = members[key];
			if (member && typeof member === 'object') {
				if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
					if (member.enumerable === undefined) {
						member.enumerable = enumerable;
					}
					properties = properties || {};
					properties[key] = member;
					continue;
				}
			}
			target[key] = member;
		}
		if (properties) {
			Object.defineProperties(target, properties);
		}
	}

	(function (rootNamespace) {

		// Create the rootNamespace in the global namespace
		if (!global[rootNamespace]) {
			global[rootNamespace] = Object.create(Object.prototype);
		}

		// Cache the rootNamespace we just created in a local variable
		var _rootNamespace = global[rootNamespace];
		if (!_rootNamespace.Namespace) {
			_rootNamespace.Namespace = Object.create(Object.prototype);
		}

		function defineWithParent(parentNamespace, name, members) {
			/// <summary locid="1">
			/// Defines a new namespace with the specified name, under the specified parent namespace.
			/// </summary>
			/// <param name="parentNamespace" type="Object" locid="2">
			/// The parent namespace which will contain the new namespace.
			/// </param>
			/// <param name="name" type="String" locid="3">
			/// Name of the new namespace.
			/// </param>
			/// <param name="members" type="Object" locid="4">
			/// Members in the new namespace.
			/// </param>
			/// <returns locid="5">
			/// The newly defined namespace.
			/// </returns>
			var currentNamespace = parentNamespace,
				namespaceFragments = name.split(".");

			for (var i = 0, len = namespaceFragments.length; i < len; i++) {
				var namespaceName = namespaceFragments[i];
				if (!currentNamespace[namespaceName]) {
					Object.defineProperty(currentNamespace, namespaceName,
						{ value: {}, writable: false, enumerable: true, configurable: true }
					);
				}
				currentNamespace = currentNamespace[namespaceName];
			}

			if (members) {
				initializeProperties(currentNamespace, members);
			}

			return currentNamespace;
		}

		function define(name, members) {
			/// <summary locid="6">
			/// Defines a new namespace with the specified name.
			/// </summary>
			/// <param name="name" type="String" locid="7">
			/// Name of the namespace.  This could be a dot-separated nested name.
			/// </param>
			/// <param name="members" type="Object" locid="4">
			/// Members in the new namespace.
			/// </param>
			/// <returns locid="5">
			/// The newly defined namespace.
			/// </returns>
			return defineWithParent(global, name, members);
		}

		// Establish members of the "WinJS.Namespace" namespace
		Object.defineProperties(_rootNamespace.Namespace, {

			defineWithParent: { value: defineWithParent, writable: true, enumerable: true },

			define: { value: define, writable: true, enumerable: true }

		});

	})("WinJS");

	(function (WinJS) {

		function define(constructor, instanceMembers, staticMembers) {
			/// <summary locid="8">
			/// Defines a class using the given constructor and with the specified instance members.
			/// </summary>
			/// <param name="constructor" type="Function" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <param name="instanceMembers" type="Object" locid="10">
			/// The set of instance fields, properties and methods to be made available on the class.
			/// </param>
			/// <param name="staticMembers" type="Object" locid="11">
			/// The set of static fields, properties and methods to be made available on the class.
			/// </param>
			/// <returns type="Function" locid="12">
			/// The newly defined class.
			/// </returns>
			constructor = constructor || function () { };
			if (instanceMembers) {
				initializeProperties(constructor.prototype, instanceMembers);
			}
			if (staticMembers) {
				initializeProperties(constructor, staticMembers);
			}
			return constructor;
		}

		function derive(baseClass, constructor, instanceMembers, staticMembers) {
			/// <summary locid="13">
			/// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
			/// </summary>
			/// <param name="baseClass" type="Function" locid="14">
			/// The class to inherit from.
			/// </param>
			/// <param name="constructor" type="Function" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <param name="instanceMembers" type="Object" locid="10">
			/// The set of instance fields, properties and methods to be made available on the class.
			/// </param>
			/// <param name="staticMembers" type="Object" locid="11">
			/// The set of static fields, properties and methods to be made available on the class.
			/// </param>
			/// <returns type="Function" locid="12">
			/// The newly defined class.
			/// </returns>
			if (baseClass) {
				constructor = constructor || function () { };
				var basePrototype = baseClass.prototype;
				constructor.prototype = Object.create(basePrototype);
				Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });
				Object.defineProperty(constructor.prototype, "constructor", { value: constructor });
				if (instanceMembers) {
					initializeProperties(constructor.prototype, instanceMembers);
				}
				if (staticMembers) {
					initializeProperties(constructor, staticMembers);
				}
				return constructor;
			} else {
				return define(constructor, instanceMembers, staticMembers);
			}
		}

		function mix(constructor) {
			/// <summary locid="15">
			/// Defines a class using the given constructor and the union of the set of instance members
			/// specified by all the mixin objects.  The mixin parameter list can be of variable length.
			/// </summary>
			/// <param name="constructor" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <returns locid="12">
			/// The newly defined class.
			/// </returns>
			constructor = constructor || function () { };
			var i, len;
			for (i = 0, len = arguments.length; i < len; i++) {
				initializeProperties(constructor.prototype, arguments[i]);
			}
			return constructor;
		}

		// Establish members of "WinJS.Class" namespace
		WinJS.Namespace.define("WinJS.Class", {
			define: define,
			derive: derive,
			mix: mix
		});

	})(WinJS);

})(this);
`,lang:"javascript"};const cl=Ue({name:"DocumentBody",props:{editorTheme:{type:String,default:"light"}},setup(e){return()=>N("section",{class:"body-wrapper"},[N("div",{class:"body-editor-wrapper"},[N(Qa,{height:"500px",theme:e.editorTheme,language:"javascript",value:ll},null)]),N("div",{class:"body-description"},[N("span",null,[_e("Editor 👆")]),N("span",null,[_e("👇 Diff Editor")])]),N("div",{class:"body-diff-editor-wrapper"},[N(nl,{height:"500px",theme:e.editorTheme,language:yn.lang,original:yn.original,modified:yn.modified},null)])])}});const ul=Ue(()=>{const e=Jt(!0),t=Ee(()=>e.value?"vs-dark":"vs");return()=>N(me,null,[N(il,{class:"page-dark-mode",onChange:n=>e.value=n},null),N(sl,{class:"page-github-corners",href:"https://github.com/imguolao/monaco-vue"},null),N(al,null,null),N(cl,{editorTheme:t.value},null)])});Sn.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}});aa(ul).mount("#app");
