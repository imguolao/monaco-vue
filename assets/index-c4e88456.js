(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function In(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function An(e){if(T(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Y(r)?Hi(r):An(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Y(e))return e;if(B(e))return e}}const Ri=/;(?![^(]*\))/g,Wi=/:([^]+)/,$i=/\/\*.*?\*\//gs;function Hi(e){const t={};return e.replace($i,"").split(Ri).forEach(n=>{if(n){const r=n.split(Wi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Fn(e){let t="";if(Y(e))t=e;else if(T(e))for(let n=0;n<e.length;n++){const r=Fn(e[n]);r&&(t+=r+" ")}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ui="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zi=In(Ui);function Hr(e){return!!e||e===""}const U={},lt=[],le=()=>{},Bi=()=>!1,Ki=/^on[^a-z]/,zt=e=>Ki.test(e),Dn=e=>e.startsWith("onUpdate:"),ee=Object.assign,Ln=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ji=Object.prototype.hasOwnProperty,F=(e,t)=>Ji.call(e,t),T=Array.isArray,ct=e=>Bt(e)==="[object Map]",Vi=e=>Bt(e)==="[object Set]",S=e=>typeof e=="function",Y=e=>typeof e=="string",Rn=e=>typeof e=="symbol",B=e=>e!==null&&typeof e=="object",Ur=e=>B(e)&&S(e.then)&&S(e.catch),qi=Object.prototype.toString,Bt=e=>qi.call(e),ki=e=>Bt(e).slice(8,-1),Yi=e=>Bt(e)==="[object Object]",Wn=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=In(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zi=/-(\w)/g,Ye=Kt(e=>e.replace(Zi,(t,n)=>n?n.toUpperCase():"")),Xi=/\B([A-Z])/g,et=Kt(e=>e.replace(Xi,"-$1").toLowerCase()),zr=Kt(e=>e.charAt(0).toUpperCase()+e.slice(1)),ln=Kt(e=>e?`on${zr(e)}`:""),ft=(e,t)=>!Object.is(e,t),cn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Lt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Qi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ar;const Gi=()=>ar||(ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let oe;class es{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=oe,!t&&oe&&(this.index=(oe.scopes||(oe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=oe;try{return oe=this,t()}finally{oe=n}}}on(){oe=this}off(){oe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ts(e,t=oe){t&&t.active&&t.effects.push(e)}function ns(){return oe}const $n=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Br=e=>(e.w&Ee)>0,Kr=e=>(e.n&Ee)>0,rs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ee},is=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Br(i)&&!Kr(i)?i.delete(e):t[n++]=i,i.w&=~Ee,i.n&=~Ee}t.length=n}},yn=new WeakMap;let ot=0,Ee=1;const _n=30;let ae;const $e=Symbol(""),wn=Symbol("");class Hn{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ts(this,r)}run(){if(!this.active)return this.fn();let t=ae,n=Pe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ae,ae=this,Pe=!0,Ee=1<<++ot,ot<=_n?rs(this):lr(this),this.fn()}finally{ot<=_n&&is(this),Ee=1<<--ot,ae=this.parent,Pe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ae===this?this.deferStop=!0:this.active&&(lr(this),this.onStop&&this.onStop(),this.active=!1)}}function lr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Pe=!0;const Jr=[];function tt(){Jr.push(Pe),Pe=!1}function nt(){const e=Jr.pop();Pe=e===void 0?!0:e}function ne(e,t,n){if(Pe&&ae){let r=yn.get(e);r||yn.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=$n()),Vr(i)}}function Vr(e,t){let n=!1;ot<=_n?Kr(e)||(e.n|=Ee,n=!Br(e)):n=!e.has(ae),n&&(e.add(ae),ae.deps.push(e))}function _e(e,t,n,r,i,s){const o=yn.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&T(e)){const c=Number(r);o.forEach((m,f)=>{(f==="length"||f>=c)&&a.push(m)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":T(e)?Wn(n)&&a.push(o.get("length")):(a.push(o.get($e)),ct(e)&&a.push(o.get(wn)));break;case"delete":T(e)||(a.push(o.get($e)),ct(e)&&a.push(o.get(wn)));break;case"set":ct(e)&&a.push(o.get($e));break}if(a.length===1)a[0]&&On(a[0]);else{const c=[];for(const m of a)m&&c.push(...m);On($n(c))}}function On(e,t){const n=T(e)?e:[...e];for(const r of n)r.computed&&cr(r);for(const r of n)r.computed||cr(r)}function cr(e,t){(e!==ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ss=In("__proto__,__v_isRef,__isVue"),qr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rn)),os=Un(),as=Un(!1,!0),ls=Un(!0),ur=cs();function cs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=D(this);for(let s=0,o=this.length;s<o;s++)ne(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(D)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tt();const r=D(this)[t].apply(this,n);return nt(),r}}),e}function us(e){const t=D(this);return ne(t,"has",e),t.hasOwnProperty(e)}function Un(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?js:Qr:t?Xr:Zr).get(r))return r;const o=T(r);if(!e){if(o&&F(ur,i))return Reflect.get(ur,i,s);if(i==="hasOwnProperty")return us}const a=Reflect.get(r,i,s);return(Rn(i)?qr.has(i):ss(i))||(e||ne(r,"get",i),t)?a:X(a)?o&&Wn(i)?a:a.value:B(a)?e?Gr(a):Kn(a):a}}const fs=kr(),ds=kr(!0);function kr(e=!1){return function(n,r,i,s){let o=n[r];if(Ze(o)&&X(o)&&!X(i))return!1;if(!e&&(!Rt(i)&&!Ze(i)&&(o=D(o),i=D(i)),!T(n)&&X(o)&&!X(i)))return o.value=i,!0;const a=T(n)&&Wn(r)?Number(r)<n.length:F(n,r),c=Reflect.set(n,r,i,s);return n===D(s)&&(a?ft(i,o)&&_e(n,"set",r,i):_e(n,"add",r,i)),c}}function ms(e,t){const n=F(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&_e(e,"delete",t,void 0),r}function ps(e,t){const n=Reflect.has(e,t);return(!Rn(t)||!qr.has(t))&&ne(e,"has",t),n}function hs(e){return ne(e,"iterate",T(e)?"length":$e),Reflect.ownKeys(e)}const Yr={get:os,set:fs,deleteProperty:ms,has:ps,ownKeys:hs},gs={get:ls,set(e,t){return!0},deleteProperty(e,t){return!0}},bs=ee({},Yr,{get:as,set:ds}),zn=e=>e,Jt=e=>Reflect.getPrototypeOf(e);function Pt(e,t,n=!1,r=!1){e=e.__v_raw;const i=D(e),s=D(t);n||(t!==s&&ne(i,"get",t),ne(i,"get",s));const{has:o}=Jt(i),a=r?zn:n?Vn:dt;if(o.call(i,t))return a(e.get(t));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(t)}function jt(e,t=!1){const n=this.__v_raw,r=D(n),i=D(e);return t||(e!==i&&ne(r,"has",e),ne(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ct(e,t=!1){return e=e.__v_raw,!t&&ne(D(e),"iterate",$e),Reflect.get(e,"size",e)}function fr(e){e=D(e);const t=D(this);return Jt(t).has.call(t,e)||(t.add(e),_e(t,"add",e,e)),this}function dr(e,t){t=D(t);const n=D(this),{has:r,get:i}=Jt(n);let s=r.call(n,e);s||(e=D(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?ft(t,o)&&_e(n,"set",e,t):_e(n,"add",e,t),this}function mr(e){const t=D(this),{has:n,get:r}=Jt(t);let i=n.call(t,e);i||(e=D(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&_e(t,"delete",e,void 0),s}function pr(){const e=D(this),t=e.size!==0,n=e.clear();return t&&_e(e,"clear",void 0,void 0),n}function Et(e,t){return function(r,i){const s=this,o=s.__v_raw,a=D(o),c=t?zn:e?Vn:dt;return!e&&ne(a,"iterate",$e),o.forEach((m,f)=>r.call(i,c(m),c(f),s))}}function Tt(e,t,n){return function(...r){const i=this.__v_raw,s=D(i),o=ct(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,m=i[e](...r),f=n?zn:t?Vn:dt;return!t&&ne(s,"iterate",c?wn:$e),{next(){const{value:b,done:_}=m.next();return _?{value:b,done:_}:{value:a?[f(b[0]),f(b[1])]:f(b),done:_}},[Symbol.iterator](){return this}}}}function xe(e){return function(...t){return e==="delete"?!1:this}}function vs(){const e={get(s){return Pt(this,s)},get size(){return Ct(this)},has:jt,add:fr,set:dr,delete:mr,clear:pr,forEach:Et(!1,!1)},t={get(s){return Pt(this,s,!1,!0)},get size(){return Ct(this)},has:jt,add:fr,set:dr,delete:mr,clear:pr,forEach:Et(!1,!0)},n={get(s){return Pt(this,s,!0)},get size(){return Ct(this,!0)},has(s){return jt.call(this,s,!0)},add:xe("add"),set:xe("set"),delete:xe("delete"),clear:xe("clear"),forEach:Et(!0,!1)},r={get(s){return Pt(this,s,!0,!0)},get size(){return Ct(this,!0)},has(s){return jt.call(this,s,!0)},add:xe("add"),set:xe("set"),delete:xe("delete"),clear:xe("clear"),forEach:Et(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Tt(s,!1,!1),n[s]=Tt(s,!0,!1),t[s]=Tt(s,!1,!0),r[s]=Tt(s,!0,!0)}),[e,n,t,r]}const[ys,_s,ws,Os]=vs();function Bn(e,t){const n=t?e?Os:ws:e?_s:ys;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(F(n,i)&&i in r?n:r,i,s)}const xs={get:Bn(!1,!1)},Ms={get:Bn(!1,!0)},Ps={get:Bn(!0,!1)},Zr=new WeakMap,Xr=new WeakMap,Qr=new WeakMap,js=new WeakMap;function Cs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Es(e){return e.__v_skip||!Object.isExtensible(e)?0:Cs(ki(e))}function Kn(e){return Ze(e)?e:Jn(e,!1,Yr,xs,Zr)}function Ts(e){return Jn(e,!1,bs,Ms,Xr)}function Gr(e){return Jn(e,!0,gs,Ps,Qr)}function Jn(e,t,n,r,i){if(!B(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Es(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function Ve(e){return Ze(e)?Ve(e.__v_raw):!!(e&&e.__v_isReactive)}function Ze(e){return!!(e&&e.__v_isReadonly)}function Rt(e){return!!(e&&e.__v_isShallow)}function ei(e){return Ve(e)||Ze(e)}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function ti(e){return Lt(e,"__v_skip",!0),e}const dt=e=>B(e)?Kn(e):e,Vn=e=>B(e)?Gr(e):e;function ni(e){Pe&&ae&&(e=D(e),Vr(e.dep||(e.dep=$n())))}function ri(e,t){e=D(e);const n=e.dep;n&&On(n)}function X(e){return!!(e&&e.__v_isRef===!0)}function Vt(e){return ii(e,!1)}function vt(e){return ii(e,!0)}function ii(e,t){return X(e)?e:new Ns(e,t)}class Ns{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:D(t),this._value=n?t:dt(t)}get value(){return ni(this),this._value}set value(t){const n=this.__v_isShallow||Rt(t)||Ze(t);t=n?t:D(t),ft(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:dt(t),ri(this))}}function Ss(e){return X(e)?e.value:e}const Is={get:(e,t,n)=>Ss(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return X(i)&&!X(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function si(e){return Ve(e)?e:new Proxy(e,Is)}var oi;class As{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[oi]=!1,this._dirty=!0,this.effect=new Hn(t,()=>{this._dirty||(this._dirty=!0,ri(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=D(this);return ni(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}oi="__v_isReadonly";function Fs(e,t,n=!1){let r,i;const s=S(e);return s?(r=e,i=le):(r=e.get,i=e.set),new As(r,i,s||!i,n)}function je(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){qt(s,t,n)}return i}function ce(e,t,n,r){if(S(e)){const s=je(e,t,n,r);return s&&Ur(s)&&s.catch(o=>{qt(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(ce(e[s],t,n,r));return i}function qt(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const m=s.ec;if(m){for(let f=0;f<m.length;f++)if(m[f](e,o,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){je(c,null,10,[e,o,a]);return}}Ds(e,n,i,r)}function Ds(e,t,n,r=!0){console.error(e)}let mt=!1,xn=!1;const Z=[];let he=0;const qe=[];let ve=null,Re=0;const ai=Promise.resolve();let qn=null;function kt(e){const t=qn||ai;return e?t.then(this?e.bind(this):e):t}function Ls(e){let t=he+1,n=Z.length;for(;t<n;){const r=t+n>>>1;pt(Z[r])<e?t=r+1:n=r}return t}function kn(e){(!Z.length||!Z.includes(e,mt&&e.allowRecurse?he+1:he))&&(e.id==null?Z.push(e):Z.splice(Ls(e.id),0,e),li())}function li(){!mt&&!xn&&(xn=!0,qn=ai.then(ui))}function Rs(e){const t=Z.indexOf(e);t>he&&Z.splice(t,1)}function Ws(e){T(e)?qe.push(...e):(!ve||!ve.includes(e,e.allowRecurse?Re+1:Re))&&qe.push(e),li()}function hr(e,t=mt?he+1:0){for(;t<Z.length;t++){const n=Z[t];n&&n.pre&&(Z.splice(t,1),t--,n())}}function ci(e){if(qe.length){const t=[...new Set(qe)];if(qe.length=0,ve){ve.push(...t);return}for(ve=t,ve.sort((n,r)=>pt(n)-pt(r)),Re=0;Re<ve.length;Re++)ve[Re]();ve=null,Re=0}}const pt=e=>e.id==null?1/0:e.id,$s=(e,t)=>{const n=pt(e)-pt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ui(e){xn=!1,mt=!0,Z.sort($s);const t=le;try{for(he=0;he<Z.length;he++){const n=Z[he];n&&n.active!==!1&&je(n,null,14)}}finally{he=0,Z.length=0,ci(),mt=!1,qn=null,(Z.length||qe.length)&&ui()}}function Hs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||U;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:b,trim:_}=r[f]||U;_&&(i=n.map(j=>Y(j)?j.trim():j)),b&&(i=n.map(Qi))}let a,c=r[a=ln(t)]||r[a=ln(Ye(t))];!c&&s&&(c=r[a=ln(et(t))]),c&&ce(c,e,6,i);const m=r[a+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ce(m,e,6,i)}}function fi(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!S(e)){const c=m=>{const f=fi(m,t,!0);f&&(a=!0,ee(o,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(B(e)&&r.set(e,null),null):(T(s)?s.forEach(c=>o[c]=null):ee(o,s),B(e)&&r.set(e,o),o)}function Yt(e,t){return!e||!zt(t)?!1:(t=t.slice(2).replace(/Once$/,""),F(e,t[0].toLowerCase()+t.slice(1))||F(e,et(t))||F(e,t))}let ge=null,di=null;function Wt(e){const t=ge;return ge=e,di=e&&e.type.__scopeId||null,t}function Us(e,t=ge,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&xr(-1);const s=Wt(t);let o;try{o=e(...i)}finally{Wt(s),r._d&&xr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function un(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:m,render:f,renderCache:b,data:_,setupState:j,ctx:L,inheritAttrs:N}=e;let q,W;const ie=Wt(e);try{if(n.shapeFlag&4){const k=i||r;q=pe(f.call(k,k,b,s,j,_,L)),W=c}else{const k=t;q=pe(k.length>1?k(s,{attrs:c,slots:a,emit:m}):k(s,null)),W=t.props?c:zs(c)}}catch(k){qt(k,e,1),q=E(ht)}let A=q;if(W&&N!==!1){const k=Object.keys(W),{shapeFlag:Oe}=A;k.length&&Oe&7&&(o&&k.some(Dn)&&(W=Bs(W,o)),A=Xe(A,W))}return n.dirs&&(A=Xe(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),q=A,Wt(ie),q}const zs=e=>{let t;for(const n in e)(n==="class"||n==="style"||zt(n))&&((t||(t={}))[n]=e[n]);return t},Bs=(e,t)=>{const n={};for(const r in e)(!Dn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ks(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,m=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?gr(r,o,m):!!o;if(c&8){const f=t.dynamicProps;for(let b=0;b<f.length;b++){const _=f[b];if(o[_]!==r[_]&&!Yt(m,_))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?gr(r,o,m):!0:!!o;return!1}function gr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Yt(n,s))return!0}return!1}function Js({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Vs=e=>e.__isSuspense;function qs(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):Ws(e)}function ks(e,t){if(V){let n=V.provides;const r=V.parent&&V.parent.provides;r===n&&(n=V.provides=Object.create(r)),n[e]=t}}function At(e,t,n=!1){const r=V||ge;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&S(t)?t.call(r.proxy):t}}function Ys(e,t){return Yn(e,null,t)}const Nt={};function J(e,t,n){return Yn(e,t,n)}function Yn(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=U){const a=ns()===(V==null?void 0:V.scope)?V:null;let c,m=!1,f=!1;if(X(e)?(c=()=>e.value,m=Rt(e)):Ve(e)?(c=()=>e,r=!0):T(e)?(f=!0,m=e.some(A=>Ve(A)||Rt(A)),c=()=>e.map(A=>{if(X(A))return A.value;if(Ve(A))return Ke(A);if(S(A))return je(A,a,2)})):S(e)?t?c=()=>je(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return b&&b(),ce(e,a,3,[_])}:c=le,t&&r){const A=c;c=()=>Ke(A())}let b,_=A=>{b=W.onStop=()=>{je(A,a,4)}},j;if(gt)if(_=le,t?n&&ce(t,a,3,[c(),f?[]:void 0,_]):c(),i==="sync"){const A=Ho();j=A.__watcherHandles||(A.__watcherHandles=[])}else return le;let L=f?new Array(e.length).fill(Nt):Nt;const N=()=>{if(W.active)if(t){const A=W.run();(r||m||(f?A.some((k,Oe)=>ft(k,L[Oe])):ft(A,L)))&&(b&&b(),ce(t,a,3,[A,L===Nt?void 0:f&&L[0]===Nt?[]:L,_]),L=A)}else W.run()};N.allowRecurse=!!t;let q;i==="sync"?q=N:i==="post"?q=()=>te(N,a&&a.suspense):(N.pre=!0,a&&(N.id=a.uid),q=()=>kn(N));const W=new Hn(c,q);t?n?N():L=W.run():i==="post"?te(W.run.bind(W),a&&a.suspense):W.run();const ie=()=>{W.stop(),a&&a.scope&&Ln(a.scope.effects,W)};return j&&j.push(ie),ie}function Zs(e,t,n){const r=this.proxy,i=Y(e)?e.includes(".")?mi(r,e):()=>r[e]:e.bind(r,r);let s;S(t)?s=t:(s=t.handler,n=t);const o=V;Qe(this);const a=Yn(i,s.bind(r),n);return o?Qe(o):He(),a}function mi(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ke(e,t){if(!B(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),X(e))Ke(e.value,t);else if(T(e))for(let n=0;n<e.length;n++)Ke(e[n],t);else if(Vi(e)||ct(e))e.forEach(n=>{Ke(n,t)});else if(Yi(e))for(const n in e)Ke(e[n],t);return e}function Ue(e){return S(e)?{setup:e,name:e.name}:e}const Ft=e=>!!e.type.__asyncLoader,pi=e=>e.type.__isKeepAlive;function Xs(e,t){hi(e,"a",t)}function Qs(e,t){hi(e,"da",t)}function hi(e,t,n=V){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Zt(t,r,n),n){let i=n.parent;for(;i&&i.parent;)pi(i.parent.vnode)&&Gs(r,t,n,i),i=i.parent}}function Gs(e,t,n,r){const i=Zt(t,e,r,!0);Qt(()=>{Ln(r[t],i)},n)}function Zt(e,t,n=V,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tt(),Qe(n);const a=ce(t,n,e,o);return He(),nt(),a});return r?i.unshift(s):i.push(s),s}}const we=e=>(t,n=V)=>(!gt||e==="sp")&&Zt(e,(...r)=>t(...r),n),eo=we("bm"),Xt=we("m"),to=we("bu"),no=we("u"),ro=we("bum"),Qt=we("um"),io=we("sp"),so=we("rtg"),oo=we("rtc");function ao(e,t=V){Zt("ec",e,t)}function Fe(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(tt(),ce(c,n,8,[e.el,a,e,t]),nt())}}const lo=Symbol(),Mn=e=>e?Pi(e)?er(e)||e.proxy:Mn(e.parent):null,ut=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mn(e.parent),$root:e=>Mn(e.root),$emit:e=>e.emit,$options:e=>Zn(e),$forceUpdate:e=>e.f||(e.f=()=>kn(e.update)),$nextTick:e=>e.n||(e.n=kt.bind(e.proxy)),$watch:e=>Zs.bind(e)}),fn=(e,t)=>e!==U&&!e.__isScriptSetup&&F(e,t),co={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let m;if(t[0]!=="$"){const j=o[t];if(j!==void 0)switch(j){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(fn(r,t))return o[t]=1,r[t];if(i!==U&&F(i,t))return o[t]=2,i[t];if((m=e.propsOptions[0])&&F(m,t))return o[t]=3,s[t];if(n!==U&&F(n,t))return o[t]=4,n[t];Pn&&(o[t]=0)}}const f=ut[t];let b,_;if(f)return t==="$attrs"&&ne(e,"get",t),f(e);if((b=a.__cssModules)&&(b=b[t]))return b;if(n!==U&&F(n,t))return o[t]=4,n[t];if(_=c.config.globalProperties,F(_,t))return _[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return fn(i,t)?(i[t]=n,!0):r!==U&&F(r,t)?(r[t]=n,!0):F(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==U&&F(e,o)||fn(t,o)||(a=s[0])&&F(a,o)||F(r,o)||F(ut,o)||F(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:F(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Pn=!0;function uo(e){const t=Zn(e),n=e.proxy,r=e.ctx;Pn=!1,t.beforeCreate&&br(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:m,created:f,beforeMount:b,mounted:_,beforeUpdate:j,updated:L,activated:N,deactivated:q,beforeDestroy:W,beforeUnmount:ie,destroyed:A,unmounted:k,render:Oe,renderTracked:nn,renderTriggered:_t,errorCaptured:Ne,serverPrefetch:rn,expose:Se,inheritAttrs:rt,components:wt,directives:Ot,filters:sn}=t;if(m&&fo(m,r,null,e.appContext.config.unwrapInjectedRef),o)for(const z in o){const $=o[z];S($)&&(r[z]=$.bind(n))}if(i){const z=i.call(n,n);B(z)&&(e.data=Kn(z))}if(Pn=!0,s)for(const z in s){const $=s[z],Ie=S($)?$.bind(n,n):S($.get)?$.get.bind(n,n):le,xt=!S($)&&S($.set)?$.set.bind(n):le,Ae=Te({get:Ie,set:xt});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:ue=>Ae.value=ue})}if(a)for(const z in a)gi(a[z],r,n,z);if(c){const z=S(c)?c.call(n):c;Reflect.ownKeys(z).forEach($=>{ks($,z[$])})}f&&br(f,e,"c");function Q(z,$){T($)?$.forEach(Ie=>z(Ie.bind(n))):$&&z($.bind(n))}if(Q(eo,b),Q(Xt,_),Q(to,j),Q(no,L),Q(Xs,N),Q(Qs,q),Q(ao,Ne),Q(oo,nn),Q(so,_t),Q(ro,ie),Q(Qt,k),Q(io,rn),T(Se))if(Se.length){const z=e.exposed||(e.exposed={});Se.forEach($=>{Object.defineProperty(z,$,{get:()=>n[$],set:Ie=>n[$]=Ie})})}else e.exposed||(e.exposed={});Oe&&e.render===le&&(e.render=Oe),rt!=null&&(e.inheritAttrs=rt),wt&&(e.components=wt),Ot&&(e.directives=Ot)}function fo(e,t,n=le,r=!1){T(e)&&(e=jn(e));for(const i in e){const s=e[i];let o;B(s)?"default"in s?o=At(s.from||i,s.default,!0):o=At(s.from||i):o=At(s),X(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function br(e,t,n){ce(T(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gi(e,t,n,r){const i=r.includes(".")?mi(n,r):()=>n[r];if(Y(e)){const s=t[e];S(s)&&J(i,s)}else if(S(e))J(i,e.bind(n));else if(B(e))if(T(e))e.forEach(s=>gi(s,t,n,r));else{const s=S(e.handler)?e.handler.bind(n):t[e.handler];S(s)&&J(i,s,e)}}function Zn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(m=>$t(c,m,o,!0)),$t(c,t,o)),B(t)&&s.set(t,c),c}function $t(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&$t(e,s,n,!0),i&&i.forEach(o=>$t(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=mo[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const mo={data:vr,props:Le,emits:Le,methods:Le,computed:Le,beforeCreate:G,created:G,beforeMount:G,mounted:G,beforeUpdate:G,updated:G,beforeDestroy:G,beforeUnmount:G,destroyed:G,unmounted:G,activated:G,deactivated:G,errorCaptured:G,serverPrefetch:G,components:Le,directives:Le,watch:ho,provide:vr,inject:po};function vr(e,t){return t?e?function(){return ee(S(e)?e.call(this,this):e,S(t)?t.call(this,this):t)}:t:e}function po(e,t){return Le(jn(e),jn(t))}function jn(e){if(T(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function G(e,t){return e?[...new Set([].concat(e,t))]:t}function Le(e,t){return e?ee(ee(Object.create(null),e),t):t}function ho(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=G(e[r],t[r]);return n}function go(e,t,n,r=!1){const i={},s={};Lt(s,en,1),e.propsDefaults=Object.create(null),bi(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Ts(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function bo(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=D(i),[c]=e.propsOptions;let m=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let b=0;b<f.length;b++){let _=f[b];if(Yt(e.emitsOptions,_))continue;const j=t[_];if(c)if(F(s,_))j!==s[_]&&(s[_]=j,m=!0);else{const L=Ye(_);i[L]=Cn(c,a,L,j,e,!1)}else j!==s[_]&&(s[_]=j,m=!0)}}}else{bi(e,t,i,s)&&(m=!0);let f;for(const b in a)(!t||!F(t,b)&&((f=et(b))===b||!F(t,f)))&&(c?n&&(n[b]!==void 0||n[f]!==void 0)&&(i[b]=Cn(c,a,b,void 0,e,!0)):delete i[b]);if(s!==a)for(const b in s)(!t||!F(t,b))&&(delete s[b],m=!0)}m&&_e(e,"set","$attrs")}function bi(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(It(c))continue;const m=t[c];let f;i&&F(i,f=Ye(c))?!s||!s.includes(f)?n[f]=m:(a||(a={}))[f]=m:Yt(e.emitsOptions,c)||(!(c in r)||m!==r[c])&&(r[c]=m,o=!0)}if(s){const c=D(n),m=a||U;for(let f=0;f<s.length;f++){const b=s[f];n[b]=Cn(i,c,b,m[b],e,!F(m,b))}}return o}function Cn(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=F(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&S(c)){const{propsDefaults:m}=i;n in m?r=m[n]:(Qe(i),r=m[n]=c.call(null,t),He())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===et(n))&&(r=!0))}return r}function vi(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!S(e)){const f=b=>{c=!0;const[_,j]=vi(b,t,!0);ee(o,_),j&&a.push(...j)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!c)return B(e)&&r.set(e,lt),lt;if(T(s))for(let f=0;f<s.length;f++){const b=Ye(s[f]);yr(b)&&(o[b]=U)}else if(s)for(const f in s){const b=Ye(f);if(yr(b)){const _=s[f],j=o[b]=T(_)||S(_)?{type:_}:Object.assign({},_);if(j){const L=Or(Boolean,j.type),N=Or(String,j.type);j[0]=L>-1,j[1]=N<0||L<N,(L>-1||F(j,"default"))&&a.push(b)}}}const m=[o,a];return B(e)&&r.set(e,m),m}function yr(e){return e[0]!=="$"}function _r(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function wr(e,t){return _r(e)===_r(t)}function Or(e,t){return T(t)?t.findIndex(n=>wr(n,e)):S(t)&&wr(t,e)?0:-1}const yi=e=>e[0]==="_"||e==="$stable",Xn=e=>T(e)?e.map(pe):[pe(e)],vo=(e,t,n)=>{if(t._n)return t;const r=Us((...i)=>Xn(t(...i)),n);return r._c=!1,r},_i=(e,t,n)=>{const r=e._ctx;for(const i in e){if(yi(i))continue;const s=e[i];if(S(s))t[i]=vo(i,s,r);else if(s!=null){const o=Xn(s);t[i]=()=>o}}},wi=(e,t)=>{const n=Xn(t);e.slots.default=()=>n},yo=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=D(t),Lt(t,"_",n)):_i(t,e.slots={})}else e.slots={},t&&wi(e,t);Lt(e.slots,en,1)},_o=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=U;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(ee(i,t),!n&&a===1&&delete i._):(s=!t.$stable,_i(t,i)),o=t}else t&&(wi(e,t),o={default:1});if(s)for(const a in i)!yi(a)&&!(a in o)&&delete i[a]};function Oi(){return{app:null,config:{isNativeTag:Bi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wo=0;function Oo(e,t){return function(r,i=null){S(r)||(r=Object.assign({},r)),i!=null&&!B(i)&&(i=null);const s=Oi(),o=new Set;let a=!1;const c=s.app={_uid:wo++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Uo,get config(){return s.config},set config(m){},use(m,...f){return o.has(m)||(m&&S(m.install)?(o.add(m),m.install(c,...f)):S(m)&&(o.add(m),m(c,...f))),c},mixin(m){return s.mixins.includes(m)||s.mixins.push(m),c},component(m,f){return f?(s.components[m]=f,c):s.components[m]},directive(m,f){return f?(s.directives[m]=f,c):s.directives[m]},mount(m,f,b){if(!a){const _=E(r,i);return _.appContext=s,f&&t?t(_,m):e(_,m,b),a=!0,c._container=m,m.__vue_app__=c,er(_.component)||_.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(m,f){return s.provides[m]=f,c}};return c}}function En(e,t,n,r,i=!1){if(T(e)){e.forEach((_,j)=>En(_,t&&(T(t)?t[j]:t),n,r,i));return}if(Ft(r)&&!i)return;const s=r.shapeFlag&4?er(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,m=t&&t.r,f=a.refs===U?a.refs={}:a.refs,b=a.setupState;if(m!=null&&m!==c&&(Y(m)?(f[m]=null,F(b,m)&&(b[m]=null)):X(m)&&(m.value=null)),S(c))je(c,a,12,[o,f]);else{const _=Y(c),j=X(c);if(_||j){const L=()=>{if(e.f){const N=_?F(b,c)?b[c]:f[c]:c.value;i?T(N)&&Ln(N,s):T(N)?N.includes(s)||N.push(s):_?(f[c]=[s],F(b,c)&&(b[c]=f[c])):(c.value=[s],e.k&&(f[e.k]=c.value))}else _?(f[c]=o,F(b,c)&&(b[c]=o)):j&&(c.value=o,e.k&&(f[e.k]=o))};o?(L.id=-1,te(L,n)):L()}}}const te=qs;function xo(e){return Mo(e)}function Mo(e,t){const n=Gi();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:m,setElementText:f,parentNode:b,nextSibling:_,setScopeId:j=le,insertStaticContent:L}=e,N=(l,u,d,h=null,p=null,y=null,O=!1,v=null,w=!!u.dynamicChildren)=>{if(l===u)return;l&&!st(l,u)&&(h=Mt(l),ue(l,p,y,!0),l=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:g,ref:M,shapeFlag:x}=u;switch(g){case Gt:q(l,u,d,h);break;case ht:W(l,u,d,h);break;case dn:l==null&&ie(u,d,h,O);break;case me:wt(l,u,d,h,p,y,O,v,w);break;default:x&1?Oe(l,u,d,h,p,y,O,v,w):x&6?Ot(l,u,d,h,p,y,O,v,w):(x&64||x&128)&&g.process(l,u,d,h,p,y,O,v,w,ze)}M!=null&&p&&En(M,l&&l.ref,y,u||l,!u)},q=(l,u,d,h)=>{if(l==null)r(u.el=a(u.children),d,h);else{const p=u.el=l.el;u.children!==l.children&&m(p,u.children)}},W=(l,u,d,h)=>{l==null?r(u.el=c(u.children||""),d,h):u.el=l.el},ie=(l,u,d,h)=>{[l.el,l.anchor]=L(l.children,u,d,h,l.el,l.anchor)},A=({el:l,anchor:u},d,h)=>{let p;for(;l&&l!==u;)p=_(l),r(l,d,h),l=p;r(u,d,h)},k=({el:l,anchor:u})=>{let d;for(;l&&l!==u;)d=_(l),i(l),l=d;i(u)},Oe=(l,u,d,h,p,y,O,v,w)=>{O=O||u.type==="svg",l==null?nn(u,d,h,p,y,O,v,w):rn(l,u,p,y,O,v,w)},nn=(l,u,d,h,p,y,O,v)=>{let w,g;const{type:M,props:x,shapeFlag:P,transition:C,dirs:I}=l;if(w=l.el=o(l.type,y,x&&x.is,x),P&8?f(w,l.children):P&16&&Ne(l.children,w,null,h,p,y&&M!=="foreignObject",O,v),I&&Fe(l,null,h,"created"),_t(w,l,l.scopeId,O,h),x){for(const R in x)R!=="value"&&!It(R)&&s(w,R,null,x[R],y,l.children,h,p,be);"value"in x&&s(w,"value",null,x.value),(g=x.onVnodeBeforeMount)&&de(g,h,l)}I&&Fe(l,null,h,"beforeMount");const H=(!p||p&&!p.pendingBranch)&&C&&!C.persisted;H&&C.beforeEnter(w),r(w,u,d),((g=x&&x.onVnodeMounted)||H||I)&&te(()=>{g&&de(g,h,l),H&&C.enter(w),I&&Fe(l,null,h,"mounted")},p)},_t=(l,u,d,h,p)=>{if(d&&j(l,d),h)for(let y=0;y<h.length;y++)j(l,h[y]);if(p){let y=p.subTree;if(u===y){const O=p.vnode;_t(l,O,O.scopeId,O.slotScopeIds,p.parent)}}},Ne=(l,u,d,h,p,y,O,v,w=0)=>{for(let g=w;g<l.length;g++){const M=l[g]=v?Me(l[g]):pe(l[g]);N(null,M,u,d,h,p,y,O,v)}},rn=(l,u,d,h,p,y,O)=>{const v=u.el=l.el;let{patchFlag:w,dynamicChildren:g,dirs:M}=u;w|=l.patchFlag&16;const x=l.props||U,P=u.props||U;let C;d&&De(d,!1),(C=P.onVnodeBeforeUpdate)&&de(C,d,u,l),M&&Fe(u,l,d,"beforeUpdate"),d&&De(d,!0);const I=p&&u.type!=="foreignObject";if(g?Se(l.dynamicChildren,g,v,d,h,I,y):O||$(l,u,v,null,d,h,I,y,!1),w>0){if(w&16)rt(v,u,x,P,d,h,p);else if(w&2&&x.class!==P.class&&s(v,"class",null,P.class,p),w&4&&s(v,"style",x.style,P.style,p),w&8){const H=u.dynamicProps;for(let R=0;R<H.length;R++){const K=H[R],se=x[K],Be=P[K];(Be!==se||K==="value")&&s(v,K,se,Be,p,l.children,d,h,be)}}w&1&&l.children!==u.children&&f(v,u.children)}else!O&&g==null&&rt(v,u,x,P,d,h,p);((C=P.onVnodeUpdated)||M)&&te(()=>{C&&de(C,d,u,l),M&&Fe(u,l,d,"updated")},h)},Se=(l,u,d,h,p,y,O)=>{for(let v=0;v<u.length;v++){const w=l[v],g=u[v],M=w.el&&(w.type===me||!st(w,g)||w.shapeFlag&70)?b(w.el):d;N(w,g,M,null,h,p,y,O,!0)}},rt=(l,u,d,h,p,y,O)=>{if(d!==h){if(d!==U)for(const v in d)!It(v)&&!(v in h)&&s(l,v,d[v],null,O,u.children,p,y,be);for(const v in h){if(It(v))continue;const w=h[v],g=d[v];w!==g&&v!=="value"&&s(l,v,g,w,O,u.children,p,y,be)}"value"in h&&s(l,"value",d.value,h.value)}},wt=(l,u,d,h,p,y,O,v,w)=>{const g=u.el=l?l.el:a(""),M=u.anchor=l?l.anchor:a("");let{patchFlag:x,dynamicChildren:P,slotScopeIds:C}=u;C&&(v=v?v.concat(C):C),l==null?(r(g,d,h),r(M,d,h),Ne(u.children,d,M,p,y,O,v,w)):x>0&&x&64&&P&&l.dynamicChildren?(Se(l.dynamicChildren,P,d,p,y,O,v),(u.key!=null||p&&u===p.subTree)&&xi(l,u,!0)):$(l,u,d,M,p,y,O,v,w)},Ot=(l,u,d,h,p,y,O,v,w)=>{u.slotScopeIds=v,l==null?u.shapeFlag&512?p.ctx.activate(u,d,h,O,w):sn(u,d,h,p,y,O,w):tr(l,u,w)},sn=(l,u,d,h,p,y,O)=>{const v=l.component=Ao(l,h,p);if(pi(l)&&(v.ctx.renderer=ze),Fo(v),v.asyncDep){if(p&&p.registerDep(v,Q),!l.el){const w=v.subTree=E(ht);W(null,w,u,d)}return}Q(v,l,u,d,p,y,O)},tr=(l,u,d)=>{const h=u.component=l.component;if(Ks(l,u,d))if(h.asyncDep&&!h.asyncResolved){z(h,u,d);return}else h.next=u,Rs(h.update),h.update();else u.el=l.el,h.vnode=u},Q=(l,u,d,h,p,y,O)=>{const v=()=>{if(l.isMounted){let{next:M,bu:x,u:P,parent:C,vnode:I}=l,H=M,R;De(l,!1),M?(M.el=I.el,z(l,M,O)):M=I,x&&cn(x),(R=M.props&&M.props.onVnodeBeforeUpdate)&&de(R,C,M,I),De(l,!0);const K=un(l),se=l.subTree;l.subTree=K,N(se,K,b(se.el),Mt(se),l,p,y),M.el=K.el,H===null&&Js(l,K.el),P&&te(P,p),(R=M.props&&M.props.onVnodeUpdated)&&te(()=>de(R,C,M,I),p)}else{let M;const{el:x,props:P}=u,{bm:C,m:I,parent:H}=l,R=Ft(u);if(De(l,!1),C&&cn(C),!R&&(M=P&&P.onVnodeBeforeMount)&&de(M,H,u),De(l,!0),x&&an){const K=()=>{l.subTree=un(l),an(x,l.subTree,l,p,null)};R?u.type.__asyncLoader().then(()=>!l.isUnmounted&&K()):K()}else{const K=l.subTree=un(l);N(null,K,d,h,l,p,y),u.el=K.el}if(I&&te(I,p),!R&&(M=P&&P.onVnodeMounted)){const K=u;te(()=>de(M,H,K),p)}(u.shapeFlag&256||H&&Ft(H.vnode)&&H.vnode.shapeFlag&256)&&l.a&&te(l.a,p),l.isMounted=!0,u=d=h=null}},w=l.effect=new Hn(v,()=>kn(g),l.scope),g=l.update=()=>w.run();g.id=l.uid,De(l,!0),g()},z=(l,u,d)=>{u.component=l;const h=l.vnode.props;l.vnode=u,l.next=null,bo(l,u.props,h,d),_o(l,u.children,d),tt(),hr(),nt()},$=(l,u,d,h,p,y,O,v,w=!1)=>{const g=l&&l.children,M=l?l.shapeFlag:0,x=u.children,{patchFlag:P,shapeFlag:C}=u;if(P>0){if(P&128){xt(g,x,d,h,p,y,O,v,w);return}else if(P&256){Ie(g,x,d,h,p,y,O,v,w);return}}C&8?(M&16&&be(g,p,y),x!==g&&f(d,x)):M&16?C&16?xt(g,x,d,h,p,y,O,v,w):be(g,p,y,!0):(M&8&&f(d,""),C&16&&Ne(x,d,h,p,y,O,v,w))},Ie=(l,u,d,h,p,y,O,v,w)=>{l=l||lt,u=u||lt;const g=l.length,M=u.length,x=Math.min(g,M);let P;for(P=0;P<x;P++){const C=u[P]=w?Me(u[P]):pe(u[P]);N(l[P],C,d,null,p,y,O,v,w)}g>M?be(l,p,y,!0,!1,x):Ne(u,d,h,p,y,O,v,w,x)},xt=(l,u,d,h,p,y,O,v,w)=>{let g=0;const M=u.length;let x=l.length-1,P=M-1;for(;g<=x&&g<=P;){const C=l[g],I=u[g]=w?Me(u[g]):pe(u[g]);if(st(C,I))N(C,I,d,null,p,y,O,v,w);else break;g++}for(;g<=x&&g<=P;){const C=l[x],I=u[P]=w?Me(u[P]):pe(u[P]);if(st(C,I))N(C,I,d,null,p,y,O,v,w);else break;x--,P--}if(g>x){if(g<=P){const C=P+1,I=C<M?u[C].el:h;for(;g<=P;)N(null,u[g]=w?Me(u[g]):pe(u[g]),d,I,p,y,O,v,w),g++}}else if(g>P)for(;g<=x;)ue(l[g],p,y,!0),g++;else{const C=g,I=g,H=new Map;for(g=I;g<=P;g++){const re=u[g]=w?Me(u[g]):pe(u[g]);re.key!=null&&H.set(re.key,g)}let R,K=0;const se=P-I+1;let Be=!1,ir=0;const it=new Array(se);for(g=0;g<se;g++)it[g]=0;for(g=C;g<=x;g++){const re=l[g];if(K>=se){ue(re,p,y,!0);continue}let fe;if(re.key!=null)fe=H.get(re.key);else for(R=I;R<=P;R++)if(it[R-I]===0&&st(re,u[R])){fe=R;break}fe===void 0?ue(re,p,y,!0):(it[fe-I]=g+1,fe>=ir?ir=fe:Be=!0,N(re,u[fe],d,null,p,y,O,v,w),K++)}const sr=Be?Po(it):lt;for(R=sr.length-1,g=se-1;g>=0;g--){const re=I+g,fe=u[re],or=re+1<M?u[re+1].el:h;it[g]===0?N(null,fe,d,or,p,y,O,v,w):Be&&(R<0||g!==sr[R]?Ae(fe,d,or,2):R--)}}},Ae=(l,u,d,h,p=null)=>{const{el:y,type:O,transition:v,children:w,shapeFlag:g}=l;if(g&6){Ae(l.component.subTree,u,d,h);return}if(g&128){l.suspense.move(u,d,h);return}if(g&64){O.move(l,u,d,ze);return}if(O===me){r(y,u,d);for(let x=0;x<w.length;x++)Ae(w[x],u,d,h);r(l.anchor,u,d);return}if(O===dn){A(l,u,d);return}if(h!==2&&g&1&&v)if(h===0)v.beforeEnter(y),r(y,u,d),te(()=>v.enter(y),p);else{const{leave:x,delayLeave:P,afterLeave:C}=v,I=()=>r(y,u,d),H=()=>{x(y,()=>{I(),C&&C()})};P?P(y,I,H):H()}else r(y,u,d)},ue=(l,u,d,h=!1,p=!1)=>{const{type:y,props:O,ref:v,children:w,dynamicChildren:g,shapeFlag:M,patchFlag:x,dirs:P}=l;if(v!=null&&En(v,null,d,l,!0),M&256){u.ctx.deactivate(l);return}const C=M&1&&P,I=!Ft(l);let H;if(I&&(H=O&&O.onVnodeBeforeUnmount)&&de(H,u,l),M&6)Li(l.component,d,h);else{if(M&128){l.suspense.unmount(d,h);return}C&&Fe(l,null,u,"beforeUnmount"),M&64?l.type.remove(l,u,d,p,ze,h):g&&(y!==me||x>0&&x&64)?be(g,u,d,!1,!0):(y===me&&x&384||!p&&M&16)&&be(w,u,d),h&&nr(l)}(I&&(H=O&&O.onVnodeUnmounted)||C)&&te(()=>{H&&de(H,u,l),C&&Fe(l,null,u,"unmounted")},d)},nr=l=>{const{type:u,el:d,anchor:h,transition:p}=l;if(u===me){Di(d,h);return}if(u===dn){k(l);return}const y=()=>{i(d),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:O,delayLeave:v}=p,w=()=>O(d,y);v?v(l.el,y,w):w()}else y()},Di=(l,u)=>{let d;for(;l!==u;)d=_(l),i(l),l=d;i(u)},Li=(l,u,d)=>{const{bum:h,scope:p,update:y,subTree:O,um:v}=l;h&&cn(h),p.stop(),y&&(y.active=!1,ue(O,l,u,d)),v&&te(v,u),te(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},be=(l,u,d,h=!1,p=!1,y=0)=>{for(let O=y;O<l.length;O++)ue(l[O],u,d,h,p)},Mt=l=>l.shapeFlag&6?Mt(l.component.subTree):l.shapeFlag&128?l.suspense.next():_(l.anchor||l.el),rr=(l,u,d)=>{l==null?u._vnode&&ue(u._vnode,null,null,!0):N(u._vnode||null,l,u,null,null,null,d),hr(),ci(),u._vnode=l},ze={p:N,um:ue,m:Ae,r:nr,mt:sn,mc:Ne,pc:$,pbc:Se,n:Mt,o:e};let on,an;return t&&([on,an]=t(ze)),{render:rr,hydrate:on,createApp:Oo(rr,on)}}function De({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xi(e,t,n=!1){const r=e.children,i=t.children;if(T(r)&&T(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Me(i[s]),a.el=o.el),n||xi(o,a)),a.type===Gt&&(a.el=o.el)}}function Po(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const m=e[r];if(m!==0){if(i=n[n.length-1],e[i]<m){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<m?s=a+1:o=a;m<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const jo=e=>e.__isTeleport,me=Symbol(void 0),Gt=Symbol(void 0),ht=Symbol(void 0),dn=Symbol(void 0);let Je=null,Qn=1;function xr(e){Qn+=e}function Tn(e){return e?e.__v_isVNode===!0:!1}function st(e,t){return e.type===t.type&&e.key===t.key}const en="__vInternal",Mi=({key:e})=>e??null,Dt=({ref:e,ref_key:t,ref_for:n})=>e!=null?Y(e)||X(e)||S(e)?{i:ge,r:e,k:t,f:!!n}:e:null;function Co(e,t=null,n=null,r=0,i=null,s=e===me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mi(t),ref:t&&Dt(t),scopeId:di,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ge};return a?(Gn(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Y(n)?8:16),Qn>0&&!o&&Je&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Je.push(c),c}const E=Eo;function Eo(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===lo)&&(e=ht),Tn(e)){const a=Xe(e,t,!0);return n&&Gn(a,n),Qn>0&&!s&&Je&&(a.shapeFlag&6?Je[Je.indexOf(e)]=a:Je.push(a)),a.patchFlag|=-2,a}if(Wo(e)&&(e=e.__vccOpts),t){t=To(t);let{class:a,style:c}=t;a&&!Y(a)&&(t.class=Fn(a)),B(c)&&(ei(c)&&!T(c)&&(c=ee({},c)),t.style=An(c))}const o=Y(e)?1:Vs(e)?128:jo(e)?64:B(e)?4:S(e)?2:0;return Co(e,t,n,r,i,o,s,!0)}function To(e){return e?ei(e)||en in e?ee({},e):e:null}function Xe(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?No(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Mi(a),ref:t&&t.ref?n&&i?T(i)?i.concat(Dt(t)):[i,Dt(t)]:Dt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ye(e=" ",t=0){return E(Gt,null,e,t)}function pe(e){return e==null||typeof e=="boolean"?E(ht):T(e)?E(me,null,e.slice()):typeof e=="object"?Me(e):E(Gt,null,String(e))}function Me(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function Gn(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(T(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Gn(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(en in t)?t._ctx=ge:i===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else S(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),r&64?(n=16,t=[ye(t)]):n=8);e.children=t,e.shapeFlag|=n}function No(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Fn([t.class,r.class]));else if(i==="style")t.style=An([t.style,r.style]);else if(zt(i)){const s=t[i],o=r[i];o&&s!==o&&!(T(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function de(e,t,n,r=null){ce(e,t,7,[n,r])}const So=Oi();let Io=0;function Ao(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||So,s={uid:Io++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new es(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vi(r,i),emitsOptions:fi(r,i),emit:null,emitted:null,propsDefaults:U,inheritAttrs:r.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Hs.bind(null,s),e.ce&&e.ce(s),s}let V=null;const Qe=e=>{V=e,e.scope.on()},He=()=>{V&&V.scope.off(),V=null};function Pi(e){return e.vnode.shapeFlag&4}let gt=!1;function Fo(e,t=!1){gt=t;const{props:n,children:r}=e.vnode,i=Pi(e);go(e,n,i,t),yo(e,r);const s=i?Do(e,t):void 0;return gt=!1,s}function Do(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ti(new Proxy(e.ctx,co));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Ro(e):null;Qe(e),tt();const s=je(r,e,0,[e.props,i]);if(nt(),He(),Ur(s)){if(s.then(He,He),t)return s.then(o=>{Mr(e,o,t)}).catch(o=>{qt(o,e,0)});e.asyncDep=s}else Mr(e,s,t)}else ji(e,t)}function Mr(e,t,n){S(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:B(t)&&(e.setupState=si(t)),ji(e,n)}let Pr;function ji(e,t,n){const r=e.type;if(!e.render){if(!t&&Pr&&!r.render){const i=r.template||Zn(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,m=ee(ee({isCustomElement:s,delimiters:a},o),c);r.render=Pr(i,m)}}e.render=r.render||le}Qe(e),tt(),uo(e),nt(),He()}function Lo(e){return new Proxy(e.attrs,{get(t,n){return ne(e,"get","$attrs"),t[n]}})}function Ro(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Lo(e))},slots:e.slots,emit:e.emit,expose:t}}function er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(si(ti(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ut)return ut[n](e)},has(t,n){return n in t||n in ut}}))}function Wo(e){return S(e)&&"__vccOpts"in e}const Te=(e,t)=>Fs(e,t,gt);function ke(e,t,n){const r=arguments.length;return r===2?B(t)&&!T(t)?Tn(t)?E(e,null,[t]):E(e,t):E(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tn(n)&&(n=[n]),E(e,t,n))}const $o=Symbol(""),Ho=()=>At($o),Uo="3.2.47",zo="http://www.w3.org/2000/svg",We=typeof document<"u"?document:null,jr=We&&We.createElement("template"),Bo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?We.createElementNS(zo,e):We.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{jr.innerHTML=r?`<svg>${e}</svg>`:e;const a=jr.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ko(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Jo(e,t,n){const r=e.style,i=Y(n);if(n&&!i){if(t&&!Y(t))for(const s in t)n[s]==null&&Nn(r,s,"");for(const s in n)Nn(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const Cr=/\s*!important$/;function Nn(e,t,n){if(T(n))n.forEach(r=>Nn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Vo(e,t);Cr.test(n)?e.setProperty(et(r),n.replace(Cr,""),"important"):e[r]=n}}const Er=["Webkit","Moz","ms"],mn={};function Vo(e,t){const n=mn[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return mn[t]=r;r=zr(r);for(let i=0;i<Er.length;i++){const s=Er[i]+r;if(s in e)return mn[t]=s}return t}const Tr="http://www.w3.org/1999/xlink";function qo(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Tr,t.slice(6,t.length)):e.setAttributeNS(Tr,t,n);else{const s=zi(t);n==null||s&&!Hr(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function ko(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Hr(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Yo(e,t,n,r){e.addEventListener(t,n,r)}function Zo(e,t,n,r){e.removeEventListener(t,n,r)}function Xo(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[a,c]=Qo(t);if(r){const m=s[t]=ta(r,i);Yo(e,a,m,c)}else o&&(Zo(e,a,o,c),s[t]=void 0)}}const Nr=/(?:Once|Passive|Capture)$/;function Qo(e){let t;if(Nr.test(e)){t={};let r;for(;r=e.match(Nr);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):et(e.slice(2)),t]}let pn=0;const Go=Promise.resolve(),ea=()=>pn||(Go.then(()=>pn=0),pn=Date.now());function ta(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ce(na(r,n.value),t,5,[r])};return n.value=e,n.attached=ea(),n}function na(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Sr=/^on[a-z]/,ra=(e,t,n,r,i=!1,s,o,a,c)=>{t==="class"?Ko(e,r,i):t==="style"?Jo(e,n,r):zt(t)?Dn(t)||Xo(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ia(e,t,r,i))?ko(e,t,r,s,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),qo(e,t,r,i))};function ia(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Sr.test(t)&&S(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Sr.test(t)&&Y(n)?!1:t in e}const sa=ee({patchProp:ra},Bo);let Ir;function oa(){return Ir||(Ir=xo(sa))}const aa=(...e)=>{const t=oa().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=la(r);if(!i)return;const s=t._component;!S(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function la(e){return Y(e)?document.querySelector(e):e}function ca(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ar(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ar(Object(n),!0).forEach(function(r){ca(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ar(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ua(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fa(e,t){if(e==null)return{};var n=ua(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function da(e,t){return ma(e)||pa(e,t)||ha(e,t)||ga()}function ma(e){if(Array.isArray(e))return e}function pa(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,i=!1,s=void 0;try{for(var o=e[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(t&&n.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}}function ha(e,t){if(e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ga(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ba(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lr(Object(n),!0).forEach(function(r){ba(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function va(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function at(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t.apply(n,[].concat(i,a))}}}function Ht(e){return{}.toString.call(e).includes("Object")}function ya(e){return!Object.keys(e).length}function bt(e){return typeof e=="function"}function _a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function wa(e,t){return Ht(t)||Ce("changeType"),Object.keys(t).some(function(n){return!_a(e,n)})&&Ce("changeField"),t}function Oa(e){bt(e)||Ce("selectorType")}function xa(e){bt(e)||Ht(e)||Ce("handlerType"),Ht(e)&&Object.values(e).some(function(t){return!bt(t)})&&Ce("handlersType")}function Ma(e){e||Ce("initialIsRequired"),Ht(e)||Ce("initialType"),ya(e)&&Ce("initialContent")}function Pa(e,t){throw new Error(e[t]||e.default)}var ja={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ce=at(Pa)(ja),St={changes:wa,selector:Oa,handler:xa,initial:Ma};function Ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};St.initial(e),St.handler(t);var n={current:e},r=at(Na)(n,t),i=at(Ta)(n),s=at(St.changes)(e),o=at(Ea)(n);function a(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(f){return f};return St.selector(m),m(n.current)}function c(m){va(r,i,s,o)(m)}return[a,c]}function Ea(e,t){return bt(t)?t(e.current):t}function Ta(e,t){return e.current=Rr(Rr({},e.current),t),t}function Na(e,t,n){return bt(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Sa={create:Ca},Ia={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function Aa(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t.apply(n,[].concat(i,a))}}}function Fa(e){return{}.toString.call(e).includes("Object")}function Da(e){return e||Wr("configIsRequired"),Fa(e)||Wr("configType"),e.urls?(La(),{paths:{vs:e.urls.monacoBase}}):e}function La(){console.warn(Ci.deprecation)}function Ra(e,t){throw new Error(e[t]||e.default)}var Ci={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Wr=Aa(Ra)(Ci),Wa={config:Da},$a=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,o){return o(s)},i)}};function Ei(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Ei(e[n],t[n]))}),Fr(Fr({},e),t)}var Ha={type:"cancelation",msg:"operation is manually canceled"};function hn(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(Ha):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Ua=Sa.create({config:Ia,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ti=da(Ua,2),yt=Ti[0],tn=Ti[1];function za(e){var t=Wa.config(e),n=t.monaco,r=fa(t,["monaco"]);tn(function(i){return{config:Ei(i.config,r),monaco:n}})}function Ba(){var e=yt(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(tn({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),hn(gn);if(window.monaco&&window.monaco.editor)return Ni(window.monaco),e.resolve(window.monaco),hn(gn);$a(Ka,Va)(qa)}return hn(gn)}function Ka(e){return document.body.appendChild(e)}function Ja(e){var t=document.createElement("script");return e&&(t.src=e),t}function Va(e){var t=yt(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=Ja("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function qa(){var e=yt(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){Ni(n),e.resolve(n)},function(n){e.reject(n)})}function Ni(e){yt().monaco||tn({monaco:e})}function ka(){return yt(function(e){var t=e.monaco;return t})}var gn=new Promise(function(e,t){return tn({resolve:e,reject:t})}),Sn={config:za,init:Ba,__getMonacoInstance:ka};const bn={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Si(e,t){const n=Te(()=>{const{width:i,height:s}=e;return{...bn.wrapper,width:i,height:s}}),r=Te(()=>({...bn.fullWidth,...!t.value&&bn.hide}));return{wrapperStyle:n,containerStyle:r}}function Ii(){const e=vt(Sn.__getMonacoInstance()),t=Vt(!1);let n;return Xt(()=>{e.value||(n=Sn.init(),n.then(i=>e.value=i).catch(i=>{(i==null?void 0:i.type)!=="cancelation"&&(t.value=!0,console.error("Monaco initialization error:",i))}))}),{monacoRef:e,unload:()=>n==null?void 0:n.cancel(),isLoadFailed:t}}function Ut(e){return typeof e=="function"?e():e}function Ai(e){return e===void 0}function Ge(e,t,n,r){return Ya(e,r)||Za(e,t,n,r)}function Ya(e,t){return e.editor.getModel(Fi(e,t))}function Za(e,t,n,r){return e.editor.createModel(t,n,r?Fi(e,r):void 0)}function Fi(e,t){return e.Uri.parse(t)}const Xa={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},Qa=Ue({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"vs"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const n=new Map,r=vt(null),{monacoRef:i,unload:s,isLoadFailed:o}=Ii(),{editorRef:a}=Ga(t,e,i,r),{disposeValidator:c}=el(t,e,i,a),m=Te(()=>!!i.value&&!!a.value),{wrapperStyle:f,containerStyle:b}=Si(e,m);return Qt(()=>{var _,j;(_=c.value)==null||_.call(c),a.value?((j=a.value.getModel())==null||j.dispose(),a.value.dispose()):s()}),J(()=>e.path,(_,j)=>{const L=Ge(i.value,e.value||e.defaultValue||"",e.language||e.defaultLanguage||"",_||e.defaultPath||"");L!==a.value.getModel()&&(e.saveViewState&&n.set(j,a.value.saveViewState()),a.value.setModel(L),e.saveViewState&&a.value.restoreViewState(n.get(_)))}),J(()=>e.value,_=>{a.value&&a.value.getValue()!==_&&a.value.setValue(_)}),J(()=>e.options,_=>a.value&&a.value.updateOptions(_),{deep:!0}),J(()=>e.theme,_=>i.value&&i.value.editor.setTheme(_)),J(()=>e.language,_=>m.value&&i.value.editor.setModelLanguage(a.value.getModel(),_)),J(()=>e.line,_=>{a.value&&!Ai(_)&&a.value.revealLine(_)}),{containerRef:r,isEditorReady:m,isLoadFailed:o,wrapperStyle:f,containerStyle:b}},render(){const{$slots:e,isEditorReady:t,isLoadFailed:n,wrapperStyle:r,containerStyle:i,className:s}=this;return ke("div",{style:r},[!t&&ke("div",{style:Xa},n?e.failure?Ut(e.failure):"load failed":e.default?Ut(e.default):"loading..."),ke("div",{ref:"containerRef",key:"monaco_editor_container",style:i,class:s})])}});function Ga({emit:e},t,n,r){const i=vt(null);Xt(()=>{const o=J(n,()=>{r.value&&n.value&&(kt(()=>o()),s())},{immediate:!0})});function s(){var c;if(!r.value||!n.value||i.value)return;e("beforeMount",n.value);const o=t.path||t.defaultPath,a=Ge(n.value,t.value||t.defaultValue||"",t.language||t.defaultLanguage||"",o||"");i.value=n.value.editor.create(r.value,{model:a,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0,...t.options},t.overrideServices),(c=i.value)==null||c.onDidChangeModelContent(m=>{const f=i.value.getValue();f!==t.value&&(e("update:value",f),e("change",f,m))}),i.value&&!Ai(t.line)&&i.value.revealLine(t.line),e("mount",i.value,n.value)}return{editorRef:i}}function el({emit:e},t,n,r){const i=Vt(null),s=J([n,r],()=>{if(n.value&&r.value){kt(()=>s());const o=n.value.editor.onDidChangeMarkers(a=>{var m,f;const c=(f=(m=r.value)==null?void 0:m.getModel())==null?void 0:f.uri;if(c&&a.find(_=>_.path===c.path)){const _=n.value.editor.getModelMarkers({resource:c});e("validate",_)}});i.value=()=>o==null?void 0:o.dispose()}});return{disposeValidator:i}}const tl={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},nl=Ue({name:"VueMonacoDiffEditor",props:{original:String,modified:String,language:String,originalLanguage:String,modifiedLanguage:String,originalModelPath:String,modifiedModelPath:String,theme:{type:String,default:"vs"},options:{type:Object,default:()=>({})},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},setup(e,t){const n=vt(null),{monacoRef:r,unload:i,isLoadFailed:s}=Ii(),{diffEditorRef:o}=rl(t,e,r,n),a=Te(()=>!!r.value&&!!o.value),{wrapperStyle:c,containerStyle:m}=Si(e,a);return Qt(()=>{var b,_,j,L,N,q,W,ie;!r.value&&i();const f=(_=(b=o.value)==null?void 0:b.getModel)==null?void 0:_.call(b);(L=(j=f==null?void 0:f.original)==null?void 0:j.dispose)==null||L.call(j),(q=(N=f==null?void 0:f.modified)==null?void 0:N.dispose)==null||q.call(N),(ie=(W=o.value)==null?void 0:W.dispose)==null||ie.call(W)}),J(()=>e.originalModelPath,()=>{if(!r.value||!o.value)return;const f=o.value.getOriginalEditor(),b=Ge(r.value,e.original||"",e.originalLanguage||e.language||"text",e.originalModelPath||"");b!==f.getModel()&&f.setModel(b)}),J(()=>e.modifiedModelPath,()=>{if(!r.value||!o.value)return;const f=o.value.getModifiedEditor(),b=Ge(r.value,e.modified||"",e.modifiedLanguage||e.language||"text",e.modifiedModelPath||"");b!==f.getModel()&&f.setModel(b)}),J(()=>e.modified,()=>{if(!a.value)return;const f=o.value.getModifiedEditor();f.getOption(r.value.editor.EditorOption.readOnly)?f.setValue(e.modified||""):e.modified!==f.getValue()&&(f.executeEdits("",[{range:f.getModel().getFullModelRange(),text:e.modified||"",forceMoveMarkers:!0}]),f.pushUndoStop())}),J(()=>e.original,()=>{var f,b;(b=(f=o.value)==null?void 0:f.getModel())==null||b.original.setValue((e==null?void 0:e.original)||"")}),J(()=>[e.language,e.originalLanguage,e.modifiedLanguage],()=>{if(!a.value)return;const{original:f,modified:b}=o.value.getModel();r.value.editor.setModelLanguage(f,e.originalLanguage||e.language||"text"),r.value.editor.setModelLanguage(b,e.originalLanguage||e.language||"text")}),J(()=>e.theme,()=>{var f;return(f=r.value)==null?void 0:f.editor.setTheme(e.theme)}),J(()=>e.options,()=>{var f;return(f=o.value)==null?void 0:f.updateOptions(e.options)},{deep:!0}),{containerRef:n,isDiffEditorReady:a,isLoadFailed:s,wrapperStyle:c,containerStyle:m}},render(){const{$slots:e,isDiffEditorReady:t,isLoadFailed:n,wrapperStyle:r,containerStyle:i,className:s}=this;return ke("div",{style:r},[!t&&ke("div",{style:tl},n?e.failure?Ut(e.failure):"load failed":e.default?Ut(e.default):"loading..."),ke("div",{ref:"containerRef",key:"monaco_diff_editor_container",style:i,class:s})])}});function rl({emit:e},t,n,r){const i=vt(null);Xt(()=>{const o=J(n,()=>{r.value&&n.value&&(kt(()=>o()),s())},{immediate:!0})});function s(){var c;if(!r.value||!n.value||i.value)return;e("beforeMount",n.value),i.value=n.value.editor.createDiffEditor(r.value,{automaticLayout:!0,autoIndent:"brackets",theme:t.theme,formatOnPaste:!0,formatOnType:!0,...t.options});const o=Ge(n.value,t.original||"",t.originalLanguage||t.language||"text",t.originalModelPath||""),a=Ge(n.value,t.modified||"",t.modifiedLanguage||t.language||"text",t.modifiedModelPath||"");(c=i.value)==null||c.setModel({original:o,modified:a}),e("mount",i.value,n.value)}return{diffEditorRef:i}}function $r(e){return e?"Dark":"Light"}const il=Ue({name:"DarkMode",props:{onChange:Function},setup(e){const t=Vt(!0),n=Te(()=>$r(!t.value)),r=Te(()=>t.value?"🌞":"🌒");Ys(()=>{document.documentElement.setAttribute("data-color-mode",$r(t.value).toLowerCase())});function i(){var s;t.value=!t.value,(s=e.onChange)==null||s.call(e,t.value)}return()=>E("span",{class:"dark-mode-wrapper",onClick:i},[E("span",{class:"dark-mode-text"},[r.value]),E("span",null,[n.value])])}});const sl=Ue({name:"GitHubCorners",props:{href:String,target:{type:String,default:"__blank"}},setup(e){return()=>E("a",{class:"github-corner","aria-label":"View source on GitHub",href:e.href,target:e.target},[E("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;","aria-hidden":"true"},[E("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"},null),E("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:"transform-origin: 130px 106px;",class:"octo-arm"},null),E("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"},null)])])}}),ol="/monaco-vue/assets/logo-277e0e97.svg";const al=Ue({name:"SiteHeader",setup(){const e="1.4.1";return()=>E("header",{class:"header-wrapper"},[E("img",{class:"header-logo",alt:"logo",src:ol},null),E("h1",null,[ye("Vue Monaco Editor "),E("sup",{class:"header-sup-text"},[ye("v"),e])]),E("p",{class:"header-description"},[ye("MonacoEditor component for Vue.")]),E("div",null,[E("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/imguolao/monaco-vue"},[ye("View On Github")]),E("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.npmjs.com/package/@guolao/vue-monaco-editor"},[ye("View On NPM")]),E("a",{target:"_blank",rel:"noopener noreferrer",href:"https://microsoft.github.io/monaco-editor"},[ye("Monaco Editor Documentation")])])])}}),ll=`/*
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
`,vn={original:`/*
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
`,lang:"javascript"};const cl=Ue({name:"DocumentBody",props:{editorTheme:{type:String,default:"light"}},setup(e){return()=>E("section",{class:"body-wrapper"},[E("div",{class:"body-editor-wrapper"},[E(Qa,{height:"500px",theme:e.editorTheme,language:"javascript",value:ll},null)]),E("div",{class:"body-description"},[E("span",null,[ye("Editor 👆")]),E("span",null,[ye("👇 Diff Editor")])]),E("div",{class:"body-diff-editor-wrapper"},[E(nl,{height:"500px",theme:e.editorTheme,language:vn.lang,original:vn.original,modified:vn.modified},null)])])}});const ul=Ue(()=>{const e=Vt(!0),t=Te(()=>e.value?"vs-dark":"vs");return()=>E(me,null,[E(il,{class:"page-dark-mode",onChange:n=>e.value=n},null),E(sl,{class:"page-github-corners",href:"https://github.com/imguolao/monaco-vue"},null),E(al,null,null),E(cl,{editorTheme:t.value},null)])});Sn.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}});aa(ul).mount("#app");
