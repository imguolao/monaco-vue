(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Nn(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Sn(e){if(T(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Y(r)?$i(r):Sn(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Y(e))return e;if(B(e))return e}}const Li=/;(?![^(]*\))/g,Ri=/:([^]+)/,Wi=/\/\*.*?\*\//gs;function $i(e){const t={};return e.replace(Wi,"").split(Li).forEach(n=>{if(n){const r=n.split(Ri);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function In(e){let t="";if(Y(e))t=e;else if(T(e))for(let n=0;n<e.length;n++){const r=In(e[n]);r&&(t+=r+" ")}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ui=Nn(Hi);function $r(e){return!!e||e===""}const U={},lt=[],ae=()=>{},zi=()=>!1,Bi=/^on[^a-z]/,Ut=e=>Bi.test(e),An=e=>e.startsWith("onUpdate:"),ee=Object.assign,Fn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ki=Object.prototype.hasOwnProperty,F=(e,t)=>Ki.call(e,t),T=Array.isArray,ct=e=>zt(e)==="[object Map]",Ji=e=>zt(e)==="[object Set]",N=e=>typeof e=="function",Y=e=>typeof e=="string",Dn=e=>typeof e=="symbol",B=e=>e!==null&&typeof e=="object",Hr=e=>B(e)&&N(e.then)&&N(e.catch),Vi=Object.prototype.toString,zt=e=>Vi.call(e),qi=e=>zt(e).slice(8,-1),ki=e=>zt(e)==="[object Object]",Ln=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Yi=/-(\w)/g,Ye=Bt(e=>e.replace(Yi,(t,n)=>n?n.toUpperCase():"")),Zi=/\B([A-Z])/g,et=Bt(e=>e.replace(Zi,"-$1").toLowerCase()),Ur=Bt(e=>e.charAt(0).toUpperCase()+e.slice(1)),on=Bt(e=>e?`on${Ur(e)}`:""),ft=(e,t)=>!Object.is(e,t),an=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Lt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let or;const Qi=()=>or||(or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let se;class Gi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=se,!t&&se&&(this.index=(se.scopes||(se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=se;try{return se=this,t()}finally{se=n}}}on(){se=this}off(){se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function es(e,t=se){t&&t.active&&t.effects.push(e)}function ts(){return se}const Rn=e=>{const t=new Set(e);return t.w=0,t.n=0,t},zr=e=>(e.w&Ee)>0,Br=e=>(e.n&Ee)>0,ns=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ee},rs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];zr(i)&&!Br(i)?i.delete(e):t[n++]=i,i.w&=~Ee,i.n&=~Ee}t.length=n}},bn=new WeakMap;let ot=0,Ee=1;const vn=30;let oe;const $e=Symbol(""),yn=Symbol("");class Wn{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,es(this,r)}run(){if(!this.active)return this.fn();let t=oe,n=Pe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=oe,oe=this,Pe=!0,Ee=1<<++ot,ot<=vn?ns(this):ar(this),this.fn()}finally{ot<=vn&&rs(this),Ee=1<<--ot,oe=this.parent,Pe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){oe===this?this.deferStop=!0:this.active&&(ar(this),this.onStop&&this.onStop(),this.active=!1)}}function ar(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Pe=!0;const Kr=[];function tt(){Kr.push(Pe),Pe=!1}function nt(){const e=Kr.pop();Pe=e===void 0?!0:e}function ne(e,t,n){if(Pe&&oe){let r=bn.get(e);r||bn.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Rn()),Jr(i)}}function Jr(e,t){let n=!1;ot<=vn?Br(e)||(e.n|=Ee,n=!zr(e)):n=!e.has(oe),n&&(e.add(oe),oe.deps.push(e))}function ye(e,t,n,r,i,s){const o=bn.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&T(e)){const c=Number(r);o.forEach((f,m)=>{(m==="length"||m>=c)&&l.push(f)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":T(e)?Ln(n)&&l.push(o.get("length")):(l.push(o.get($e)),ct(e)&&l.push(o.get(yn)));break;case"delete":T(e)||(l.push(o.get($e)),ct(e)&&l.push(o.get(yn)));break;case"set":ct(e)&&l.push(o.get($e));break}if(l.length===1)l[0]&&_n(l[0]);else{const c=[];for(const f of l)f&&c.push(...f);_n(Rn(c))}}function _n(e,t){const n=T(e)?e:[...e];for(const r of n)r.computed&&lr(r);for(const r of n)r.computed||lr(r)}function lr(e,t){(e!==oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const is=Nn("__proto__,__v_isRef,__isVue"),Vr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dn)),ss=$n(),os=$n(!1,!0),as=$n(!0),cr=ls();function ls(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=D(this);for(let s=0,o=this.length;s<o;s++)ne(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(D)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tt();const r=D(this)[t].apply(this,n);return nt(),r}}),e}function cs(e){const t=D(this);return ne(t,"has",e),t.hasOwnProperty(e)}function $n(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?Ps:Xr:t?Zr:Yr).get(r))return r;const o=T(r);if(!e){if(o&&F(cr,i))return Reflect.get(cr,i,s);if(i==="hasOwnProperty")return cs}const l=Reflect.get(r,i,s);return(Dn(i)?Vr.has(i):is(i))||(e||ne(r,"get",i),t)?l:X(l)?o&&Ln(i)?l:l.value:B(l)?e?Qr(l):zn(l):l}}const us=qr(),fs=qr(!0);function qr(e=!1){return function(n,r,i,s){let o=n[r];if(Ze(o)&&X(o)&&!X(i))return!1;if(!e&&(!Rt(i)&&!Ze(i)&&(o=D(o),i=D(i)),!T(n)&&X(o)&&!X(i)))return o.value=i,!0;const l=T(n)&&Ln(r)?Number(r)<n.length:F(n,r),c=Reflect.set(n,r,i,s);return n===D(s)&&(l?ft(i,o)&&ye(n,"set",r,i):ye(n,"add",r,i)),c}}function ds(e,t){const n=F(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ye(e,"delete",t,void 0),r}function ms(e,t){const n=Reflect.has(e,t);return(!Dn(t)||!Vr.has(t))&&ne(e,"has",t),n}function ps(e){return ne(e,"iterate",T(e)?"length":$e),Reflect.ownKeys(e)}const kr={get:ss,set:us,deleteProperty:ds,has:ms,ownKeys:ps},hs={get:as,set(e,t){return!0},deleteProperty(e,t){return!0}},gs=ee({},kr,{get:os,set:fs}),Hn=e=>e,Kt=e=>Reflect.getPrototypeOf(e);function Pt(e,t,n=!1,r=!1){e=e.__v_raw;const i=D(e),s=D(t);n||(t!==s&&ne(i,"get",t),ne(i,"get",s));const{has:o}=Kt(i),l=r?Hn:n?Kn:dt;if(o.call(i,t))return l(e.get(t));if(o.call(i,s))return l(e.get(s));e!==i&&e.get(t)}function jt(e,t=!1){const n=this.__v_raw,r=D(n),i=D(e);return t||(e!==i&&ne(r,"has",e),ne(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ct(e,t=!1){return e=e.__v_raw,!t&&ne(D(e),"iterate",$e),Reflect.get(e,"size",e)}function ur(e){e=D(e);const t=D(this);return Kt(t).has.call(t,e)||(t.add(e),ye(t,"add",e,e)),this}function fr(e,t){t=D(t);const n=D(this),{has:r,get:i}=Kt(n);let s=r.call(n,e);s||(e=D(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?ft(t,o)&&ye(n,"set",e,t):ye(n,"add",e,t),this}function dr(e){const t=D(this),{has:n,get:r}=Kt(t);let i=n.call(t,e);i||(e=D(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&ye(t,"delete",e,void 0),s}function mr(){const e=D(this),t=e.size!==0,n=e.clear();return t&&ye(e,"clear",void 0,void 0),n}function Et(e,t){return function(r,i){const s=this,o=s.__v_raw,l=D(o),c=t?Hn:e?Kn:dt;return!e&&ne(l,"iterate",$e),o.forEach((f,m)=>r.call(i,c(f),c(m),s))}}function Tt(e,t,n){return function(...r){const i=this.__v_raw,s=D(i),o=ct(s),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,f=i[e](...r),m=n?Hn:t?Kn:dt;return!t&&ne(s,"iterate",c?yn:$e),{next(){const{value:b,done:w}=f.next();return w?{value:b,done:w}:{value:l?[m(b[0]),m(b[1])]:m(b),done:w}},[Symbol.iterator](){return this}}}}function xe(e){return function(...t){return e==="delete"?!1:this}}function bs(){const e={get(s){return Pt(this,s)},get size(){return Ct(this)},has:jt,add:ur,set:fr,delete:dr,clear:mr,forEach:Et(!1,!1)},t={get(s){return Pt(this,s,!1,!0)},get size(){return Ct(this)},has:jt,add:ur,set:fr,delete:dr,clear:mr,forEach:Et(!1,!0)},n={get(s){return Pt(this,s,!0)},get size(){return Ct(this,!0)},has(s){return jt.call(this,s,!0)},add:xe("add"),set:xe("set"),delete:xe("delete"),clear:xe("clear"),forEach:Et(!0,!1)},r={get(s){return Pt(this,s,!0,!0)},get size(){return Ct(this,!0)},has(s){return jt.call(this,s,!0)},add:xe("add"),set:xe("set"),delete:xe("delete"),clear:xe("clear"),forEach:Et(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Tt(s,!1,!1),n[s]=Tt(s,!0,!1),t[s]=Tt(s,!1,!0),r[s]=Tt(s,!0,!0)}),[e,n,t,r]}const[vs,ys,_s,ws]=bs();function Un(e,t){const n=t?e?ws:_s:e?ys:vs;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(F(n,i)&&i in r?n:r,i,s)}const Os={get:Un(!1,!1)},xs={get:Un(!1,!0)},Ms={get:Un(!0,!1)},Yr=new WeakMap,Zr=new WeakMap,Xr=new WeakMap,Ps=new WeakMap;function js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cs(e){return e.__v_skip||!Object.isExtensible(e)?0:js(qi(e))}function zn(e){return Ze(e)?e:Bn(e,!1,kr,Os,Yr)}function Es(e){return Bn(e,!1,gs,xs,Zr)}function Qr(e){return Bn(e,!0,hs,Ms,Xr)}function Bn(e,t,n,r,i){if(!B(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Cs(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return i.set(e,l),l}function Ve(e){return Ze(e)?Ve(e.__v_raw):!!(e&&e.__v_isReactive)}function Ze(e){return!!(e&&e.__v_isReadonly)}function Rt(e){return!!(e&&e.__v_isShallow)}function Gr(e){return Ve(e)||Ze(e)}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function ei(e){return Lt(e,"__v_skip",!0),e}const dt=e=>B(e)?zn(e):e,Kn=e=>B(e)?Qr(e):e;function ti(e){Pe&&oe&&(e=D(e),Jr(e.dep||(e.dep=Rn())))}function ni(e,t){e=D(e);const n=e.dep;n&&_n(n)}function X(e){return!!(e&&e.__v_isRef===!0)}function Jn(e){return ri(e,!1)}function vt(e){return ri(e,!0)}function ri(e,t){return X(e)?e:new Ts(e,t)}class Ts{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:D(t),this._value=n?t:dt(t)}get value(){return ti(this),this._value}set value(t){const n=this.__v_isShallow||Rt(t)||Ze(t);t=n?t:D(t),ft(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:dt(t),ni(this))}}function Ns(e){return X(e)?e.value:e}const Ss={get:(e,t,n)=>Ns(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return X(i)&&!X(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ii(e){return Ve(e)?e:new Proxy(e,Ss)}var si;class Is{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[si]=!1,this._dirty=!0,this.effect=new Wn(t,()=>{this._dirty||(this._dirty=!0,ni(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=D(this);return ti(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}si="__v_isReadonly";function As(e,t,n=!1){let r,i;const s=N(e);return s?(r=e,i=ae):(r=e.get,i=e.set),new Is(r,i,s||!i,n)}function je(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Jt(s,t,n)}return i}function le(e,t,n,r){if(N(e)){const s=je(e,t,n,r);return s&&Hr(s)&&s.catch(o=>{Jt(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(le(e[s],t,n,r));return i}function Jt(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,l=n;for(;s;){const f=s.ec;if(f){for(let m=0;m<f.length;m++)if(f[m](e,o,l)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){je(c,null,10,[e,o,l]);return}}Fs(e,n,i,r)}function Fs(e,t,n,r=!0){console.error(e)}let mt=!1,wn=!1;const Z=[];let pe=0;const qe=[];let be=null,Re=0;const oi=Promise.resolve();let Vn=null;function Vt(e){const t=Vn||oi;return e?t.then(this?e.bind(this):e):t}function Ds(e){let t=pe+1,n=Z.length;for(;t<n;){const r=t+n>>>1;pt(Z[r])<e?t=r+1:n=r}return t}function qn(e){(!Z.length||!Z.includes(e,mt&&e.allowRecurse?pe+1:pe))&&(e.id==null?Z.push(e):Z.splice(Ds(e.id),0,e),ai())}function ai(){!mt&&!wn&&(wn=!0,Vn=oi.then(ci))}function Ls(e){const t=Z.indexOf(e);t>pe&&Z.splice(t,1)}function Rs(e){T(e)?qe.push(...e):(!be||!be.includes(e,e.allowRecurse?Re+1:Re))&&qe.push(e),ai()}function pr(e,t=mt?pe+1:0){for(;t<Z.length;t++){const n=Z[t];n&&n.pre&&(Z.splice(t,1),t--,n())}}function li(e){if(qe.length){const t=[...new Set(qe)];if(qe.length=0,be){be.push(...t);return}for(be=t,be.sort((n,r)=>pt(n)-pt(r)),Re=0;Re<be.length;Re++)be[Re]();be=null,Re=0}}const pt=e=>e.id==null?1/0:e.id,Ws=(e,t)=>{const n=pt(e)-pt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ci(e){wn=!1,mt=!0,Z.sort(Ws);const t=ae;try{for(pe=0;pe<Z.length;pe++){const n=Z[pe];n&&n.active!==!1&&je(n,null,14)}}finally{pe=0,Z.length=0,li(),mt=!1,Vn=null,(Z.length||qe.length)&&ci()}}function $s(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||U;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const m=`${o==="modelValue"?"model":o}Modifiers`,{number:b,trim:w}=r[m]||U;w&&(i=n.map(j=>Y(j)?j.trim():j)),b&&(i=n.map(Xi))}let l,c=r[l=on(t)]||r[l=on(Ye(t))];!c&&s&&(c=r[l=on(et(t))]),c&&le(c,e,6,i);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,le(f,e,6,i)}}function ui(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},l=!1;if(!N(e)){const c=f=>{const m=ui(f,t,!0);m&&(l=!0,ee(o,m))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!l?(B(e)&&r.set(e,null),null):(T(s)?s.forEach(c=>o[c]=null):ee(o,s),B(e)&&r.set(e,o),o)}function qt(e,t){return!e||!Ut(t)?!1:(t=t.slice(2).replace(/Once$/,""),F(e,t[0].toLowerCase()+t.slice(1))||F(e,et(t))||F(e,t))}let he=null,fi=null;function Wt(e){const t=he;return he=e,fi=e&&e.type.__scopeId||null,t}function Hs(e,t=he,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Or(-1);const s=Wt(t);let o;try{o=e(...i)}finally{Wt(s),r._d&&Or(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ln(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:l,attrs:c,emit:f,render:m,renderCache:b,data:w,setupState:j,ctx:L,inheritAttrs:S}=e;let K,H;const we=Wt(e);try{if(n.shapeFlag&4){const k=i||r;K=me(m.call(k,k,b,s,j,w,L)),H=c}else{const k=t;K=me(k.length>1?k(s,{attrs:c,slots:l,emit:f}):k(s,null)),H=t.props?c:Us(c)}}catch(k){Jt(k,e,1),K=E(ht)}let A=K;if(H&&S!==!1){const k=Object.keys(H),{shapeFlag:Oe}=A;k.length&&Oe&7&&(o&&k.some(An)&&(H=zs(H,o)),A=Xe(A,H))}return n.dirs&&(A=Xe(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),K=A,Wt(we),K}const Us=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ut(n))&&((t||(t={}))[n]=e[n]);return t},zs=(e,t)=>{const n={};for(const r in e)(!An(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Bs(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:l,patchFlag:c}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hr(r,o,f):!!o;if(c&8){const m=t.dynamicProps;for(let b=0;b<m.length;b++){const w=m[b];if(o[w]!==r[w]&&!qt(f,w))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?hr(r,o,f):!0:!!o;return!1}function hr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!qt(n,s))return!0}return!1}function Ks({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Js=e=>e.__isSuspense;function Vs(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):Rs(e)}function qs(e,t){if(q){let n=q.provides;const r=q.parent&&q.parent.provides;r===n&&(n=q.provides=Object.create(r)),n[e]=t}}function At(e,t,n=!1){const r=q||he;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&N(t)?t.call(r.proxy):t}}function ks(e,t){return kn(e,null,t)}const Nt={};function V(e,t,n){return kn(e,t,n)}function kn(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=U){const l=ts()===(q==null?void 0:q.scope)?q:null;let c,f=!1,m=!1;if(X(e)?(c=()=>e.value,f=Rt(e)):Ve(e)?(c=()=>e,r=!0):T(e)?(m=!0,f=e.some(A=>Ve(A)||Rt(A)),c=()=>e.map(A=>{if(X(A))return A.value;if(Ve(A))return Ke(A);if(N(A))return je(A,l,2)})):N(e)?t?c=()=>je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return b&&b(),le(e,l,3,[w])}:c=ae,t&&r){const A=c;c=()=>Ke(A())}let b,w=A=>{b=H.onStop=()=>{je(A,l,4)}},j;if(gt)if(w=ae,t?n&&le(t,l,3,[c(),m?[]:void 0,w]):c(),i==="sync"){const A=$o();j=A.__watcherHandles||(A.__watcherHandles=[])}else return ae;let L=m?new Array(e.length).fill(Nt):Nt;const S=()=>{if(H.active)if(t){const A=H.run();(r||f||(m?A.some((k,Oe)=>ft(k,L[Oe])):ft(A,L)))&&(b&&b(),le(t,l,3,[A,L===Nt?void 0:m&&L[0]===Nt?[]:L,w]),L=A)}else H.run()};S.allowRecurse=!!t;let K;i==="sync"?K=S:i==="post"?K=()=>te(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),K=()=>qn(S));const H=new Wn(c,K);t?n?S():L=H.run():i==="post"?te(H.run.bind(H),l&&l.suspense):H.run();const we=()=>{H.stop(),l&&l.scope&&Fn(l.scope.effects,H)};return j&&j.push(we),we}function Ys(e,t,n){const r=this.proxy,i=Y(e)?e.includes(".")?di(r,e):()=>r[e]:e.bind(r,r);let s;N(t)?s=t:(s=t.handler,n=t);const o=q;Qe(this);const l=kn(i,s.bind(r),n);return o?Qe(o):He(),l}function di(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ke(e,t){if(!B(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),X(e))Ke(e.value,t);else if(T(e))for(let n=0;n<e.length;n++)Ke(e[n],t);else if(Ji(e)||ct(e))e.forEach(n=>{Ke(n,t)});else if(ki(e))for(const n in e)Ke(e[n],t);return e}function Ue(e){return N(e)?{setup:e,name:e.name}:e}const Ft=e=>!!e.type.__asyncLoader,mi=e=>e.type.__isKeepAlive;function Zs(e,t){pi(e,"a",t)}function Xs(e,t){pi(e,"da",t)}function pi(e,t,n=q){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(kt(t,r,n),n){let i=n.parent;for(;i&&i.parent;)mi(i.parent.vnode)&&Qs(r,t,n,i),i=i.parent}}function Qs(e,t,n,r){const i=kt(t,e,r,!0);Zt(()=>{Fn(r[t],i)},n)}function kt(e,t,n=q,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tt(),Qe(n);const l=le(t,n,e,o);return He(),nt(),l});return r?i.unshift(s):i.push(s),s}}const _e=e=>(t,n=q)=>(!gt||e==="sp")&&kt(e,(...r)=>t(...r),n),Gs=_e("bm"),Yt=_e("m"),eo=_e("bu"),to=_e("u"),no=_e("bum"),Zt=_e("um"),ro=_e("sp"),io=_e("rtg"),so=_e("rtc");function oo(e,t=q){kt("ec",e,t)}function Fe(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let c=l.dir[r];c&&(tt(),le(c,n,8,[e.el,l,e,t]),nt())}}const ao=Symbol(),On=e=>e?Mi(e)?Gn(e)||e.proxy:On(e.parent):null,ut=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>On(e.parent),$root:e=>On(e.root),$emit:e=>e.emit,$options:e=>Yn(e),$forceUpdate:e=>e.f||(e.f=()=>qn(e.update)),$nextTick:e=>e.n||(e.n=Vt.bind(e.proxy)),$watch:e=>Ys.bind(e)}),cn=(e,t)=>e!==U&&!e.__isScriptSetup&&F(e,t),lo={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const j=o[t];if(j!==void 0)switch(j){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(cn(r,t))return o[t]=1,r[t];if(i!==U&&F(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&F(f,t))return o[t]=3,s[t];if(n!==U&&F(n,t))return o[t]=4,n[t];xn&&(o[t]=0)}}const m=ut[t];let b,w;if(m)return t==="$attrs"&&ne(e,"get",t),m(e);if((b=l.__cssModules)&&(b=b[t]))return b;if(n!==U&&F(n,t))return o[t]=4,n[t];if(w=c.config.globalProperties,F(w,t))return w[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return cn(i,t)?(i[t]=n,!0):r!==U&&F(r,t)?(r[t]=n,!0):F(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||e!==U&&F(e,o)||cn(t,o)||(l=s[0])&&F(l,o)||F(r,o)||F(ut,o)||F(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:F(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xn=!0;function co(e){const t=Yn(e),n=e.proxy,r=e.ctx;xn=!1,t.beforeCreate&&gr(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:l,provide:c,inject:f,created:m,beforeMount:b,mounted:w,beforeUpdate:j,updated:L,activated:S,deactivated:K,beforeDestroy:H,beforeUnmount:we,destroyed:A,unmounted:k,render:Oe,renderTracked:en,renderTriggered:_t,errorCaptured:Ne,serverPrefetch:tn,expose:Se,inheritAttrs:rt,components:wt,directives:Ot,filters:nn}=t;if(f&&uo(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const z in o){const W=o[z];N(W)&&(r[z]=W.bind(n))}if(i){const z=i.call(n,n);B(z)&&(e.data=zn(z))}if(xn=!0,s)for(const z in s){const W=s[z],Ie=N(W)?W.bind(n,n):N(W.get)?W.get.bind(n,n):ae,xt=!N(W)&&N(W.set)?W.set.bind(n):ae,Ae=Te({get:Ie,set:xt});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:ce=>Ae.value=ce})}if(l)for(const z in l)hi(l[z],r,n,z);if(c){const z=N(c)?c.call(n):c;Reflect.ownKeys(z).forEach(W=>{qs(W,z[W])})}m&&gr(m,e,"c");function Q(z,W){T(W)?W.forEach(Ie=>z(Ie.bind(n))):W&&z(W.bind(n))}if(Q(Gs,b),Q(Yt,w),Q(eo,j),Q(to,L),Q(Zs,S),Q(Xs,K),Q(oo,Ne),Q(so,en),Q(io,_t),Q(no,we),Q(Zt,k),Q(ro,tn),T(Se))if(Se.length){const z=e.exposed||(e.exposed={});Se.forEach(W=>{Object.defineProperty(z,W,{get:()=>n[W],set:Ie=>n[W]=Ie})})}else e.exposed||(e.exposed={});Oe&&e.render===ae&&(e.render=Oe),rt!=null&&(e.inheritAttrs=rt),wt&&(e.components=wt),Ot&&(e.directives=Ot)}function uo(e,t,n=ae,r=!1){T(e)&&(e=Mn(e));for(const i in e){const s=e[i];let o;B(s)?"default"in s?o=At(s.from||i,s.default,!0):o=At(s.from||i):o=At(s),X(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):t[i]=o}}function gr(e,t,n){le(T(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function hi(e,t,n,r){const i=r.includes(".")?di(n,r):()=>n[r];if(Y(e)){const s=t[e];N(s)&&V(i,s)}else if(N(e))V(i,e.bind(n));else if(B(e))if(T(e))e.forEach(s=>hi(s,t,n,r));else{const s=N(e.handler)?e.handler.bind(n):t[e.handler];N(s)&&V(i,s,e)}}function Yn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,l=s.get(t);let c;return l?c=l:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(f=>$t(c,f,o,!0)),$t(c,t,o)),B(t)&&s.set(t,c),c}function $t(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&$t(e,s,n,!0),i&&i.forEach(o=>$t(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=fo[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const fo={data:br,props:Le,emits:Le,methods:Le,computed:Le,beforeCreate:G,created:G,beforeMount:G,mounted:G,beforeUpdate:G,updated:G,beforeDestroy:G,beforeUnmount:G,destroyed:G,unmounted:G,activated:G,deactivated:G,errorCaptured:G,serverPrefetch:G,components:Le,directives:Le,watch:po,provide:br,inject:mo};function br(e,t){return t?e?function(){return ee(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function mo(e,t){return Le(Mn(e),Mn(t))}function Mn(e){if(T(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function G(e,t){return e?[...new Set([].concat(e,t))]:t}function Le(e,t){return e?ee(ee(Object.create(null),e),t):t}function po(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=G(e[r],t[r]);return n}function ho(e,t,n,r=!1){const i={},s={};Lt(s,Qt,1),e.propsDefaults=Object.create(null),gi(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Es(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function go(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,l=D(i),[c]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const m=e.vnode.dynamicProps;for(let b=0;b<m.length;b++){let w=m[b];if(qt(e.emitsOptions,w))continue;const j=t[w];if(c)if(F(s,w))j!==s[w]&&(s[w]=j,f=!0);else{const L=Ye(w);i[L]=Pn(c,l,L,j,e,!1)}else j!==s[w]&&(s[w]=j,f=!0)}}}else{gi(e,t,i,s)&&(f=!0);let m;for(const b in l)(!t||!F(t,b)&&((m=et(b))===b||!F(t,m)))&&(c?n&&(n[b]!==void 0||n[m]!==void 0)&&(i[b]=Pn(c,l,b,void 0,e,!0)):delete i[b]);if(s!==l)for(const b in s)(!t||!F(t,b))&&(delete s[b],f=!0)}f&&ye(e,"set","$attrs")}function gi(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(It(c))continue;const f=t[c];let m;i&&F(i,m=Ye(c))?!s||!s.includes(m)?n[m]=f:(l||(l={}))[m]=f:qt(e.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(s){const c=D(n),f=l||U;for(let m=0;m<s.length;m++){const b=s[m];n[b]=Pn(i,c,b,f[b],e,!F(f,b))}}return o}function Pn(e,t,n,r,i,s){const o=e[n];if(o!=null){const l=F(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&N(c)){const{propsDefaults:f}=i;n in f?r=f[n]:(Qe(i),r=f[n]=c.call(null,t),He())}else r=c}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===et(n))&&(r=!0))}return r}function bi(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},l=[];let c=!1;if(!N(e)){const m=b=>{c=!0;const[w,j]=bi(b,t,!0);ee(o,w),j&&l.push(...j)};!n&&t.mixins.length&&t.mixins.forEach(m),e.extends&&m(e.extends),e.mixins&&e.mixins.forEach(m)}if(!s&&!c)return B(e)&&r.set(e,lt),lt;if(T(s))for(let m=0;m<s.length;m++){const b=Ye(s[m]);vr(b)&&(o[b]=U)}else if(s)for(const m in s){const b=Ye(m);if(vr(b)){const w=s[m],j=o[b]=T(w)||N(w)?{type:w}:Object.assign({},w);if(j){const L=wr(Boolean,j.type),S=wr(String,j.type);j[0]=L>-1,j[1]=S<0||L<S,(L>-1||F(j,"default"))&&l.push(b)}}}const f=[o,l];return B(e)&&r.set(e,f),f}function vr(e){return e[0]!=="$"}function yr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function _r(e,t){return yr(e)===yr(t)}function wr(e,t){return T(t)?t.findIndex(n=>_r(n,e)):N(t)&&_r(t,e)?0:-1}const vi=e=>e[0]==="_"||e==="$stable",Zn=e=>T(e)?e.map(me):[me(e)],bo=(e,t,n)=>{if(t._n)return t;const r=Hs((...i)=>Zn(t(...i)),n);return r._c=!1,r},yi=(e,t,n)=>{const r=e._ctx;for(const i in e){if(vi(i))continue;const s=e[i];if(N(s))t[i]=bo(i,s,r);else if(s!=null){const o=Zn(s);t[i]=()=>o}}},_i=(e,t)=>{const n=Zn(t);e.slots.default=()=>n},vo=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=D(t),Lt(t,"_",n)):yi(t,e.slots={})}else e.slots={},t&&_i(e,t);Lt(e.slots,Qt,1)},yo=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=U;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(ee(i,t),!n&&l===1&&delete i._):(s=!t.$stable,yi(t,i)),o=t}else t&&(_i(e,t),o={default:1});if(s)for(const l in i)!vi(l)&&!(l in o)&&delete i[l]};function wi(){return{app:null,config:{isNativeTag:zi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _o=0;function wo(e,t){return function(r,i=null){N(r)||(r=Object.assign({},r)),i!=null&&!B(i)&&(i=null);const s=wi(),o=new Set;let l=!1;const c=s.app={_uid:_o++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ho,get config(){return s.config},set config(f){},use(f,...m){return o.has(f)||(f&&N(f.install)?(o.add(f),f.install(c,...m)):N(f)&&(o.add(f),f(c,...m))),c},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),c},component(f,m){return m?(s.components[f]=m,c):s.components[f]},directive(f,m){return m?(s.directives[f]=m,c):s.directives[f]},mount(f,m,b){if(!l){const w=E(r,i);return w.appContext=s,m&&t?t(w,f):e(w,f,b),l=!0,c._container=f,f.__vue_app__=c,Gn(w.component)||w.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,m){return s.provides[f]=m,c}};return c}}function jn(e,t,n,r,i=!1){if(T(e)){e.forEach((w,j)=>jn(w,t&&(T(t)?t[j]:t),n,r,i));return}if(Ft(r)&&!i)return;const s=r.shapeFlag&4?Gn(r.component)||r.component.proxy:r.el,o=i?null:s,{i:l,r:c}=e,f=t&&t.r,m=l.refs===U?l.refs={}:l.refs,b=l.setupState;if(f!=null&&f!==c&&(Y(f)?(m[f]=null,F(b,f)&&(b[f]=null)):X(f)&&(f.value=null)),N(c))je(c,l,12,[o,m]);else{const w=Y(c),j=X(c);if(w||j){const L=()=>{if(e.f){const S=w?F(b,c)?b[c]:m[c]:c.value;i?T(S)&&Fn(S,s):T(S)?S.includes(s)||S.push(s):w?(m[c]=[s],F(b,c)&&(b[c]=m[c])):(c.value=[s],e.k&&(m[e.k]=c.value))}else w?(m[c]=o,F(b,c)&&(b[c]=o)):j&&(c.value=o,e.k&&(m[e.k]=o))};o?(L.id=-1,te(L,n)):L()}}}const te=Vs;function Oo(e){return xo(e)}function xo(e,t){const n=Qi();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:c,setText:f,setElementText:m,parentNode:b,nextSibling:w,setScopeId:j=ae,insertStaticContent:L}=e,S=(a,u,d,h=null,p=null,y=null,O=!1,v=null,_=!!u.dynamicChildren)=>{if(a===u)return;a&&!st(a,u)&&(h=Mt(a),ce(a,p,y,!0),a=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:g,ref:M,shapeFlag:x}=u;switch(g){case Xt:K(a,u,d,h);break;case ht:H(a,u,d,h);break;case un:a==null&&we(u,d,h,O);break;case de:wt(a,u,d,h,p,y,O,v,_);break;default:x&1?Oe(a,u,d,h,p,y,O,v,_):x&6?Ot(a,u,d,h,p,y,O,v,_):(x&64||x&128)&&g.process(a,u,d,h,p,y,O,v,_,ze)}M!=null&&p&&jn(M,a&&a.ref,y,u||a,!u)},K=(a,u,d,h)=>{if(a==null)r(u.el=l(u.children),d,h);else{const p=u.el=a.el;u.children!==a.children&&f(p,u.children)}},H=(a,u,d,h)=>{a==null?r(u.el=c(u.children||""),d,h):u.el=a.el},we=(a,u,d,h)=>{[a.el,a.anchor]=L(a.children,u,d,h,a.el,a.anchor)},A=({el:a,anchor:u},d,h)=>{let p;for(;a&&a!==u;)p=w(a),r(a,d,h),a=p;r(u,d,h)},k=({el:a,anchor:u})=>{let d;for(;a&&a!==u;)d=w(a),i(a),a=d;i(u)},Oe=(a,u,d,h,p,y,O,v,_)=>{O=O||u.type==="svg",a==null?en(u,d,h,p,y,O,v,_):tn(a,u,p,y,O,v,_)},en=(a,u,d,h,p,y,O,v)=>{let _,g;const{type:M,props:x,shapeFlag:P,transition:C,dirs:I}=a;if(_=a.el=o(a.type,y,x&&x.is,x),P&8?m(_,a.children):P&16&&Ne(a.children,_,null,h,p,y&&M!=="foreignObject",O,v),I&&Fe(a,null,h,"created"),_t(_,a,a.scopeId,O,h),x){for(const R in x)R!=="value"&&!It(R)&&s(_,R,null,x[R],y,a.children,h,p,ge);"value"in x&&s(_,"value",null,x.value),(g=x.onVnodeBeforeMount)&&fe(g,h,a)}I&&Fe(a,null,h,"beforeMount");const $=(!p||p&&!p.pendingBranch)&&C&&!C.persisted;$&&C.beforeEnter(_),r(_,u,d),((g=x&&x.onVnodeMounted)||$||I)&&te(()=>{g&&fe(g,h,a),$&&C.enter(_),I&&Fe(a,null,h,"mounted")},p)},_t=(a,u,d,h,p)=>{if(d&&j(a,d),h)for(let y=0;y<h.length;y++)j(a,h[y]);if(p){let y=p.subTree;if(u===y){const O=p.vnode;_t(a,O,O.scopeId,O.slotScopeIds,p.parent)}}},Ne=(a,u,d,h,p,y,O,v,_=0)=>{for(let g=_;g<a.length;g++){const M=a[g]=v?Me(a[g]):me(a[g]);S(null,M,u,d,h,p,y,O,v)}},tn=(a,u,d,h,p,y,O)=>{const v=u.el=a.el;let{patchFlag:_,dynamicChildren:g,dirs:M}=u;_|=a.patchFlag&16;const x=a.props||U,P=u.props||U;let C;d&&De(d,!1),(C=P.onVnodeBeforeUpdate)&&fe(C,d,u,a),M&&Fe(u,a,d,"beforeUpdate"),d&&De(d,!0);const I=p&&u.type!=="foreignObject";if(g?Se(a.dynamicChildren,g,v,d,h,I,y):O||W(a,u,v,null,d,h,I,y,!1),_>0){if(_&16)rt(v,u,x,P,d,h,p);else if(_&2&&x.class!==P.class&&s(v,"class",null,P.class,p),_&4&&s(v,"style",x.style,P.style,p),_&8){const $=u.dynamicProps;for(let R=0;R<$.length;R++){const J=$[R],ie=x[J],Be=P[J];(Be!==ie||J==="value")&&s(v,J,ie,Be,p,a.children,d,h,ge)}}_&1&&a.children!==u.children&&m(v,u.children)}else!O&&g==null&&rt(v,u,x,P,d,h,p);((C=P.onVnodeUpdated)||M)&&te(()=>{C&&fe(C,d,u,a),M&&Fe(u,a,d,"updated")},h)},Se=(a,u,d,h,p,y,O)=>{for(let v=0;v<u.length;v++){const _=a[v],g=u[v],M=_.el&&(_.type===de||!st(_,g)||_.shapeFlag&70)?b(_.el):d;S(_,g,M,null,h,p,y,O,!0)}},rt=(a,u,d,h,p,y,O)=>{if(d!==h){if(d!==U)for(const v in d)!It(v)&&!(v in h)&&s(a,v,d[v],null,O,u.children,p,y,ge);for(const v in h){if(It(v))continue;const _=h[v],g=d[v];_!==g&&v!=="value"&&s(a,v,g,_,O,u.children,p,y,ge)}"value"in h&&s(a,"value",d.value,h.value)}},wt=(a,u,d,h,p,y,O,v,_)=>{const g=u.el=a?a.el:l(""),M=u.anchor=a?a.anchor:l("");let{patchFlag:x,dynamicChildren:P,slotScopeIds:C}=u;C&&(v=v?v.concat(C):C),a==null?(r(g,d,h),r(M,d,h),Ne(u.children,d,M,p,y,O,v,_)):x>0&&x&64&&P&&a.dynamicChildren?(Se(a.dynamicChildren,P,d,p,y,O,v),(u.key!=null||p&&u===p.subTree)&&Oi(a,u,!0)):W(a,u,d,M,p,y,O,v,_)},Ot=(a,u,d,h,p,y,O,v,_)=>{u.slotScopeIds=v,a==null?u.shapeFlag&512?p.ctx.activate(u,d,h,O,_):nn(u,d,h,p,y,O,_):er(a,u,_)},nn=(a,u,d,h,p,y,O)=>{const v=a.component=Io(a,h,p);if(mi(a)&&(v.ctx.renderer=ze),Ao(v),v.asyncDep){if(p&&p.registerDep(v,Q),!a.el){const _=v.subTree=E(ht);H(null,_,u,d)}return}Q(v,a,u,d,p,y,O)},er=(a,u,d)=>{const h=u.component=a.component;if(Bs(a,u,d))if(h.asyncDep&&!h.asyncResolved){z(h,u,d);return}else h.next=u,Ls(h.update),h.update();else u.el=a.el,h.vnode=u},Q=(a,u,d,h,p,y,O)=>{const v=()=>{if(a.isMounted){let{next:M,bu:x,u:P,parent:C,vnode:I}=a,$=M,R;De(a,!1),M?(M.el=I.el,z(a,M,O)):M=I,x&&an(x),(R=M.props&&M.props.onVnodeBeforeUpdate)&&fe(R,C,M,I),De(a,!0);const J=ln(a),ie=a.subTree;a.subTree=J,S(ie,J,b(ie.el),Mt(ie),a,p,y),M.el=J.el,$===null&&Ks(a,J.el),P&&te(P,p),(R=M.props&&M.props.onVnodeUpdated)&&te(()=>fe(R,C,M,I),p)}else{let M;const{el:x,props:P}=u,{bm:C,m:I,parent:$}=a,R=Ft(u);if(De(a,!1),C&&an(C),!R&&(M=P&&P.onVnodeBeforeMount)&&fe(M,$,u),De(a,!0),x&&sn){const J=()=>{a.subTree=ln(a),sn(x,a.subTree,a,p,null)};R?u.type.__asyncLoader().then(()=>!a.isUnmounted&&J()):J()}else{const J=a.subTree=ln(a);S(null,J,d,h,a,p,y),u.el=J.el}if(I&&te(I,p),!R&&(M=P&&P.onVnodeMounted)){const J=u;te(()=>fe(M,$,J),p)}(u.shapeFlag&256||$&&Ft($.vnode)&&$.vnode.shapeFlag&256)&&a.a&&te(a.a,p),a.isMounted=!0,u=d=h=null}},_=a.effect=new Wn(v,()=>qn(g),a.scope),g=a.update=()=>_.run();g.id=a.uid,De(a,!0),g()},z=(a,u,d)=>{u.component=a;const h=a.vnode.props;a.vnode=u,a.next=null,go(a,u.props,h,d),yo(a,u.children,d),tt(),pr(),nt()},W=(a,u,d,h,p,y,O,v,_=!1)=>{const g=a&&a.children,M=a?a.shapeFlag:0,x=u.children,{patchFlag:P,shapeFlag:C}=u;if(P>0){if(P&128){xt(g,x,d,h,p,y,O,v,_);return}else if(P&256){Ie(g,x,d,h,p,y,O,v,_);return}}C&8?(M&16&&ge(g,p,y),x!==g&&m(d,x)):M&16?C&16?xt(g,x,d,h,p,y,O,v,_):ge(g,p,y,!0):(M&8&&m(d,""),C&16&&Ne(x,d,h,p,y,O,v,_))},Ie=(a,u,d,h,p,y,O,v,_)=>{a=a||lt,u=u||lt;const g=a.length,M=u.length,x=Math.min(g,M);let P;for(P=0;P<x;P++){const C=u[P]=_?Me(u[P]):me(u[P]);S(a[P],C,d,null,p,y,O,v,_)}g>M?ge(a,p,y,!0,!1,x):Ne(u,d,h,p,y,O,v,_,x)},xt=(a,u,d,h,p,y,O,v,_)=>{let g=0;const M=u.length;let x=a.length-1,P=M-1;for(;g<=x&&g<=P;){const C=a[g],I=u[g]=_?Me(u[g]):me(u[g]);if(st(C,I))S(C,I,d,null,p,y,O,v,_);else break;g++}for(;g<=x&&g<=P;){const C=a[x],I=u[P]=_?Me(u[P]):me(u[P]);if(st(C,I))S(C,I,d,null,p,y,O,v,_);else break;x--,P--}if(g>x){if(g<=P){const C=P+1,I=C<M?u[C].el:h;for(;g<=P;)S(null,u[g]=_?Me(u[g]):me(u[g]),d,I,p,y,O,v,_),g++}}else if(g>P)for(;g<=x;)ce(a[g],p,y,!0),g++;else{const C=g,I=g,$=new Map;for(g=I;g<=P;g++){const re=u[g]=_?Me(u[g]):me(u[g]);re.key!=null&&$.set(re.key,g)}let R,J=0;const ie=P-I+1;let Be=!1,rr=0;const it=new Array(ie);for(g=0;g<ie;g++)it[g]=0;for(g=C;g<=x;g++){const re=a[g];if(J>=ie){ce(re,p,y,!0);continue}let ue;if(re.key!=null)ue=$.get(re.key);else for(R=I;R<=P;R++)if(it[R-I]===0&&st(re,u[R])){ue=R;break}ue===void 0?ce(re,p,y,!0):(it[ue-I]=g+1,ue>=rr?rr=ue:Be=!0,S(re,u[ue],d,null,p,y,O,v,_),J++)}const ir=Be?Mo(it):lt;for(R=ir.length-1,g=ie-1;g>=0;g--){const re=I+g,ue=u[re],sr=re+1<M?u[re+1].el:h;it[g]===0?S(null,ue,d,sr,p,y,O,v,_):Be&&(R<0||g!==ir[R]?Ae(ue,d,sr,2):R--)}}},Ae=(a,u,d,h,p=null)=>{const{el:y,type:O,transition:v,children:_,shapeFlag:g}=a;if(g&6){Ae(a.component.subTree,u,d,h);return}if(g&128){a.suspense.move(u,d,h);return}if(g&64){O.move(a,u,d,ze);return}if(O===de){r(y,u,d);for(let x=0;x<_.length;x++)Ae(_[x],u,d,h);r(a.anchor,u,d);return}if(O===un){A(a,u,d);return}if(h!==2&&g&1&&v)if(h===0)v.beforeEnter(y),r(y,u,d),te(()=>v.enter(y),p);else{const{leave:x,delayLeave:P,afterLeave:C}=v,I=()=>r(y,u,d),$=()=>{x(y,()=>{I(),C&&C()})};P?P(y,I,$):$()}else r(y,u,d)},ce=(a,u,d,h=!1,p=!1)=>{const{type:y,props:O,ref:v,children:_,dynamicChildren:g,shapeFlag:M,patchFlag:x,dirs:P}=a;if(v!=null&&jn(v,null,d,a,!0),M&256){u.ctx.deactivate(a);return}const C=M&1&&P,I=!Ft(a);let $;if(I&&($=O&&O.onVnodeBeforeUnmount)&&fe($,u,a),M&6)Di(a.component,d,h);else{if(M&128){a.suspense.unmount(d,h);return}C&&Fe(a,null,u,"beforeUnmount"),M&64?a.type.remove(a,u,d,p,ze,h):g&&(y!==de||x>0&&x&64)?ge(g,u,d,!1,!0):(y===de&&x&384||!p&&M&16)&&ge(_,u,d),h&&tr(a)}(I&&($=O&&O.onVnodeUnmounted)||C)&&te(()=>{$&&fe($,u,a),C&&Fe(a,null,u,"unmounted")},d)},tr=a=>{const{type:u,el:d,anchor:h,transition:p}=a;if(u===de){Fi(d,h);return}if(u===un){k(a);return}const y=()=>{i(d),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(a.shapeFlag&1&&p&&!p.persisted){const{leave:O,delayLeave:v}=p,_=()=>O(d,y);v?v(a.el,y,_):_()}else y()},Fi=(a,u)=>{let d;for(;a!==u;)d=w(a),i(a),a=d;i(u)},Di=(a,u,d)=>{const{bum:h,scope:p,update:y,subTree:O,um:v}=a;h&&an(h),p.stop(),y&&(y.active=!1,ce(O,a,u,d)),v&&te(v,u),te(()=>{a.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ge=(a,u,d,h=!1,p=!1,y=0)=>{for(let O=y;O<a.length;O++)ce(a[O],u,d,h,p)},Mt=a=>a.shapeFlag&6?Mt(a.component.subTree):a.shapeFlag&128?a.suspense.next():w(a.anchor||a.el),nr=(a,u,d)=>{a==null?u._vnode&&ce(u._vnode,null,null,!0):S(u._vnode||null,a,u,null,null,null,d),pr(),li(),u._vnode=a},ze={p:S,um:ce,m:Ae,r:tr,mt:nn,mc:Ne,pc:W,pbc:Se,n:Mt,o:e};let rn,sn;return t&&([rn,sn]=t(ze)),{render:nr,hydrate:rn,createApp:wo(nr,rn)}}function De({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Oi(e,t,n=!1){const r=e.children,i=t.children;if(T(r)&&T(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Me(i[s]),l.el=o.el),n||Oi(o,l)),l.type===Xt&&(l.el=o.el)}}function Mo(e){const t=e.slice(),n=[0];let r,i,s,o,l;const c=e.length;for(r=0;r<c;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,e[n[l]]<f?s=l+1:o=l;f<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const Po=e=>e.__isTeleport,de=Symbol(void 0),Xt=Symbol(void 0),ht=Symbol(void 0),un=Symbol(void 0);let Je=null,Xn=1;function Or(e){Xn+=e}function Cn(e){return e?e.__v_isVNode===!0:!1}function st(e,t){return e.type===t.type&&e.key===t.key}const Qt="__vInternal",xi=({key:e})=>e??null,Dt=({ref:e,ref_key:t,ref_for:n})=>e!=null?Y(e)||X(e)||N(e)?{i:he,r:e,k:t,f:!!n}:e:null;function jo(e,t=null,n=null,r=0,i=null,s=e===de?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xi(t),ref:t&&Dt(t),scopeId:fi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:he};return l?(Qn(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Y(n)?8:16),Xn>0&&!o&&Je&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Je.push(c),c}const E=Co;function Co(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===ao)&&(e=ht),Cn(e)){const l=Xe(e,t,!0);return n&&Qn(l,n),Xn>0&&!s&&Je&&(l.shapeFlag&6?Je[Je.indexOf(e)]=l:Je.push(l)),l.patchFlag|=-2,l}if(Ro(e)&&(e=e.__vccOpts),t){t=Eo(t);let{class:l,style:c}=t;l&&!Y(l)&&(t.class=In(l)),B(c)&&(Gr(c)&&!T(c)&&(c=ee({},c)),t.style=Sn(c))}const o=Y(e)?1:Js(e)?128:Po(e)?64:B(e)?4:N(e)?2:0;return jo(e,t,n,r,i,o,s,!0)}function Eo(e){return e?Gr(e)||Qt in e?ee({},e):e:null}function Xe(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,l=t?To(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&xi(l),ref:t&&t.ref?n&&i?T(i)?i.concat(Dt(t)):[i,Dt(t)]:Dt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ve(e=" ",t=0){return E(Xt,null,e,t)}function me(e){return e==null||typeof e=="boolean"?E(ht):T(e)?E(de,null,e.slice()):typeof e=="object"?Me(e):E(Xt,null,String(e))}function Me(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function Qn(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(T(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Qn(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Qt in t)?t._ctx=he:i===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else N(t)?(t={default:t,_ctx:he},n=32):(t=String(t),r&64?(n=16,t=[ve(t)]):n=8);e.children=t,e.shapeFlag|=n}function To(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=In([t.class,r.class]));else if(i==="style")t.style=Sn([t.style,r.style]);else if(Ut(i)){const s=t[i],o=r[i];o&&s!==o&&!(T(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function fe(e,t,n,r=null){le(e,t,7,[n,r])}const No=wi();let So=0;function Io(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||No,s={uid:So++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bi(r,i),emitsOptions:ui(r,i),emit:null,emitted:null,propsDefaults:U,inheritAttrs:r.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=$s.bind(null,s),e.ce&&e.ce(s),s}let q=null;const Qe=e=>{q=e,e.scope.on()},He=()=>{q&&q.scope.off(),q=null};function Mi(e){return e.vnode.shapeFlag&4}let gt=!1;function Ao(e,t=!1){gt=t;const{props:n,children:r}=e.vnode,i=Mi(e);ho(e,n,i,t),vo(e,r);const s=i?Fo(e,t):void 0;return gt=!1,s}function Fo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ei(new Proxy(e.ctx,lo));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Lo(e):null;Qe(e),tt();const s=je(r,e,0,[e.props,i]);if(nt(),He(),Hr(s)){if(s.then(He,He),t)return s.then(o=>{xr(e,o,t)}).catch(o=>{Jt(o,e,0)});e.asyncDep=s}else xr(e,s,t)}else Pi(e,t)}function xr(e,t,n){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:B(t)&&(e.setupState=ii(t)),Pi(e,n)}let Mr;function Pi(e,t,n){const r=e.type;if(!e.render){if(!t&&Mr&&!r.render){const i=r.template||Yn(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,f=ee(ee({isCustomElement:s,delimiters:l},o),c);r.render=Mr(i,f)}}e.render=r.render||ae}Qe(e),tt(),co(e),nt(),He()}function Do(e){return new Proxy(e.attrs,{get(t,n){return ne(e,"get","$attrs"),t[n]}})}function Lo(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Do(e))},slots:e.slots,emit:e.emit,expose:t}}function Gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ii(ei(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ut)return ut[n](e)},has(t,n){return n in t||n in ut}}))}function Ro(e){return N(e)&&"__vccOpts"in e}const Te=(e,t)=>As(e,t,gt);function ke(e,t,n){const r=arguments.length;return r===2?B(t)&&!T(t)?Cn(t)?E(e,null,[t]):E(e,t):E(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cn(n)&&(n=[n]),E(e,t,n))}const Wo=Symbol(""),$o=()=>At(Wo),Ho="3.2.47",Uo="http://www.w3.org/2000/svg",We=typeof document<"u"?document:null,Pr=We&&We.createElement("template"),zo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?We.createElementNS(Uo,e):We.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Pr.innerHTML=r?`<svg>${e}</svg>`:e;const l=Pr.content;if(r){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Bo(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ko(e,t,n){const r=e.style,i=Y(n);if(n&&!i){if(t&&!Y(t))for(const s in t)n[s]==null&&En(r,s,"");for(const s in n)En(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const jr=/\s*!important$/;function En(e,t,n){if(T(n))n.forEach(r=>En(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Jo(e,t);jr.test(n)?e.setProperty(et(r),n.replace(jr,""),"important"):e[r]=n}}const Cr=["Webkit","Moz","ms"],fn={};function Jo(e,t){const n=fn[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return fn[t]=r;r=Ur(r);for(let i=0;i<Cr.length;i++){const s=Cr[i]+r;if(s in e)return fn[t]=s}return t}const Er="http://www.w3.org/1999/xlink";function Vo(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Er,t.slice(6,t.length)):e.setAttributeNS(Er,t,n);else{const s=Ui(t);n==null||s&&!$r(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function qo(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=$r(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ko(e,t,n,r){e.addEventListener(t,n,r)}function Yo(e,t,n,r){e.removeEventListener(t,n,r)}function Zo(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[l,c]=Xo(t);if(r){const f=s[t]=ea(r,i);ko(e,l,f,c)}else o&&(Yo(e,l,o,c),s[t]=void 0)}}const Tr=/(?:Once|Passive|Capture)$/;function Xo(e){let t;if(Tr.test(e)){t={};let r;for(;r=e.match(Tr);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):et(e.slice(2)),t]}let dn=0;const Qo=Promise.resolve(),Go=()=>dn||(Qo.then(()=>dn=0),dn=Date.now());function ea(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;le(ta(r,n.value),t,5,[r])};return n.value=e,n.attached=Go(),n}function ta(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Nr=/^on[a-z]/,na=(e,t,n,r,i=!1,s,o,l,c)=>{t==="class"?Bo(e,r,i):t==="style"?Ko(e,n,r):Ut(t)?An(t)||Zo(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ra(e,t,r,i))?qo(e,t,r,s,o,l,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Vo(e,t,r,i))};function ra(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Nr.test(t)&&N(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Nr.test(t)&&Y(n)?!1:t in e}const ia=ee({patchProp:na},zo);let Sr;function sa(){return Sr||(Sr=Oo(ia))}const oa=(...e)=>{const t=sa().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=aa(r);if(!i)return;const s=t._component;!N(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function aa(e){return Y(e)?document.querySelector(e):e}function la(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ir(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ir(Object(n),!0).forEach(function(r){la(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ir(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ca(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ua(e,t){if(e==null)return{};var n=ca(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fa(e,t){return da(e)||ma(e,t)||pa(e,t)||ha()}function da(e){if(Array.isArray(e))return e}function ma(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,i=!1,s=void 0;try{for(var o=e[Symbol.iterator](),l;!(r=(l=o.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}}function pa(e,t){if(e){if(typeof e=="string")return Fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fr(e,t)}}function Fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ha(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ga(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dr(Object(n),!0).forEach(function(r){ga(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ba(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function at(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Ht(e){return{}.toString.call(e).includes("Object")}function va(e){return!Object.keys(e).length}function bt(e){return typeof e=="function"}function ya(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _a(e,t){return Ht(t)||Ce("changeType"),Object.keys(t).some(function(n){return!ya(e,n)})&&Ce("changeField"),t}function wa(e){bt(e)||Ce("selectorType")}function Oa(e){bt(e)||Ht(e)||Ce("handlerType"),Ht(e)&&Object.values(e).some(function(t){return!bt(t)})&&Ce("handlersType")}function xa(e){e||Ce("initialIsRequired"),Ht(e)||Ce("initialType"),va(e)&&Ce("initialContent")}function Ma(e,t){throw new Error(e[t]||e.default)}var Pa={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ce=at(Ma)(Pa),St={changes:_a,selector:wa,handler:Oa,initial:xa};function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};St.initial(e),St.handler(t);var n={current:e},r=at(Ta)(n,t),i=at(Ea)(n),s=at(St.changes)(e),o=at(Ca)(n);function l(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(m){return m};return St.selector(f),f(n.current)}function c(f){ba(r,i,s,o)(f)}return[l,c]}function Ca(e,t){return bt(t)?t(e.current):t}function Ea(e,t){return e.current=Lr(Lr({},e.current),t),t}function Ta(e,t,n){return bt(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Na={create:ja},Sa={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}};function Ia(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Aa(e){return{}.toString.call(e).includes("Object")}function Fa(e){return e||Rr("configIsRequired"),Aa(e)||Rr("configType"),e.urls?(Da(),{paths:{vs:e.urls.monacoBase}}):e}function Da(){console.warn(ji.deprecation)}function La(e,t){throw new Error(e[t]||e.default)}var ji={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Rr=Ia(La)(ji),Ra={config:Fa},Wa=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,o){return o(s)},i)}};function Ci(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Ci(e[n],t[n]))}),Ar(Ar({},e),t)}var $a={type:"cancelation",msg:"operation is manually canceled"};function mn(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i($a):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Ha=Na.create({config:Sa,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ei=fa(Ha,2),yt=Ei[0],Gt=Ei[1];function Ua(e){var t=Ra.config(e),n=t.monaco,r=ua(t,["monaco"]);Gt(function(i){return{config:Ci(i.config,r),monaco:n}})}function za(){var e=yt(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Gt({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),mn(pn);if(window.monaco&&window.monaco.editor)return Ti(window.monaco),e.resolve(window.monaco),mn(pn);Wa(Ba,Ja)(Va)}return mn(pn)}function Ba(e){return document.body.appendChild(e)}function Ka(e){var t=document.createElement("script");return e&&(t.src=e),t}function Ja(e){var t=yt(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=Ka("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Va(){var e=yt(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){Ti(n),e.resolve(n)},function(n){e.reject(n)})}function Ti(e){yt().monaco||Gt({monaco:e})}function qa(){return yt(function(e){var t=e.monaco;return t})}var pn=new Promise(function(e,t){return Gt({resolve:e,reject:t})}),Tn={config:Ua,init:za,__getMonacoInstance:qa};const hn={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Ni(e,t){const n=Te(()=>{const{width:i,height:s}=e;return{...hn.wrapper,width:i,height:s}}),r=Te(()=>({...hn.fullWidth,...!t.value&&hn.hide}));return{wrapperStyle:n,containerStyle:r}}function Si(){const e=vt(Tn.__getMonacoInstance());let t;return Yt(()=>{e.value||(t=Tn.init(),t.then(r=>e.value=r).catch(r=>{(r==null?void 0:r.type)!=="cancelation"&&console.error("Monaco initialization error:",r)}))}),{monacoRef:e,unload:()=>t==null?void 0:t.cancel()}}function Ii(e){return typeof e=="function"?e():e}function ka(e){return e===void 0}function Ge(e,t,n,r){return Ya(e,r)||Za(e,t,n,r)}function Ya(e,t){return e.editor.getModel(Ai(e,t))}function Za(e,t,n,r){return e.editor.createModel(t,n,r?Ai(e,r):void 0)}function Ai(e,t){return e.Uri.parse(t)}const Xa={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},Qa=Ue({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"vs"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const n=new Map,r=vt(null),{monacoRef:i,unload:s}=Si(),{editorRef:o}=Ga(t,e,i,r),{disposeValidator:l}=el(t,e,i,o),c=Te(()=>!!i.value&&!!o.value),{wrapperStyle:f,containerStyle:m}=Ni(e,c);return Zt(()=>{var b,w;(b=l.value)==null||b.call(l),o.value?((w=o.value.getModel())==null||w.dispose(),o.value.dispose()):s()}),V(()=>e.path,(b,w)=>{const j=Ge(i.value,e.value||e.defaultValue||"",e.language||e.defaultLanguage||"",b||e.defaultPath||"");j!==o.value.getModel()&&(e.saveViewState&&n.set(w,o.value.saveViewState()),o.value.setModel(j),e.saveViewState&&o.value.restoreViewState(n.get(b)))}),V(()=>e.value,b=>{o.value&&o.value.getValue()!==b&&o.value.setValue(b)}),V(()=>e.options,b=>o.value&&o.value.updateOptions(b),{deep:!0}),V(()=>e.theme,b=>i.value&&i.value.editor.setTheme(b)),V(()=>e.language,b=>c.value&&i.value.editor.setModelLanguage(o.value.getModel(),b)),V(()=>e.line,b=>{o.value&&!ka(b)&&o.value.revealLine(b)}),{containerRef:r,isEditorReady:c,wrapperStyle:f,containerStyle:m}},render(){const{$slots:e,isEditorReady:t,wrapperStyle:n,containerStyle:r,className:i}=this;return ke("div",{style:n},[!t&&ke("div",{style:Xa},e.default?Ii(e.default):"loading..."),ke("div",{ref:"containerRef",key:"monaco_editor_container",style:r,class:i})])}});function Ga({emit:e},t,n,r){const i=vt(null);Yt(()=>{const o=V(n,()=>{r.value&&n.value&&(Vt(()=>o()),s())},{immediate:!0})});function s(){var c;if(!r.value||!n.value||i.value)return;e("beforeMount",n.value);const o=t.path||t.defaultPath,l=Ge(n.value,t.value||t.defaultValue||"",t.language||t.defaultLanguage||"",o||"");i.value=n.value.editor.create(r.value,{model:l,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0,...t.options},t.overrideServices),(c=i.value)==null||c.onDidChangeModelContent(f=>{const m=i.value.getValue();m!==t.value&&(e("update:value",m),e("change",m,f))}),e("mount",i.value,n.value)}return{editorRef:i}}function el({emit:e},t,n,r){const i=Jn(null),s=V([n,r],()=>{if(n.value&&r.value){Vt(()=>s());const o=n.value.editor.onDidChangeMarkers(l=>{var f,m;const c=(m=(f=r.value)==null?void 0:f.getModel())==null?void 0:m.uri;if(c&&l.find(w=>w.path===c.path)){const w=n.value.editor.getModelMarkers({resource:c});e("validate",w)}});i.value=()=>o==null?void 0:o.dispose()}});return{disposeValidator:i}}const tl={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},nl=Ue({name:"VueMonacoDiffEditor",props:{original:String,modified:String,language:String,originalLanguage:String,modifiedLanguage:String,originalModelPath:String,modifiedModelPath:String,theme:{type:String,default:"vs"},options:{type:Object,default:()=>({})},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},setup(e,t){const n=vt(null),{monacoRef:r,unload:i}=Si(),{diffEditorRef:s}=rl(t,e,r,n),o=Te(()=>!!r.value&&!!s.value),{wrapperStyle:l,containerStyle:c}=Ni(e,o);return Zt(()=>{var m,b,w,j,L,S,K,H;!r.value&&i();const f=(b=(m=s.value)==null?void 0:m.getModel)==null?void 0:b.call(m);(j=(w=f==null?void 0:f.original)==null?void 0:w.dispose)==null||j.call(w),(S=(L=f==null?void 0:f.modified)==null?void 0:L.dispose)==null||S.call(L),(H=(K=s.value)==null?void 0:K.dispose)==null||H.call(K)}),V(()=>e.originalModelPath,()=>{if(!r.value||!s.value)return;const f=s.value.getOriginalEditor(),m=Ge(r.value,e.original||"",e.originalLanguage||e.language||"text",e.originalModelPath||"");m!==f.getModel()&&f.setModel(m)}),V(()=>e.modifiedModelPath,()=>{if(!r.value||!s.value)return;const f=s.value.getModifiedEditor(),m=Ge(r.value,e.modified||"",e.modifiedLanguage||e.language||"text",e.modifiedModelPath||"");m!==f.getModel()&&f.setModel(m)}),V(()=>e.modified,()=>{if(!o.value)return;const f=s.value.getModifiedEditor();f.getOption(r.value.editor.EditorOption.readOnly)?f.setValue(e.modified||""):e.modified!==f.getValue()&&(f.executeEdits("",[{range:f.getModel().getFullModelRange(),text:e.modified||"",forceMoveMarkers:!0}]),f.pushUndoStop())}),V(()=>e.original,()=>{var f,m;(m=(f=s.value)==null?void 0:f.getModel())==null||m.original.setValue((e==null?void 0:e.original)||"")}),V(()=>[e.language,e.originalLanguage,e.modifiedLanguage],()=>{if(!o.value)return;const{original:f,modified:m}=s.value.getModel();r.value.editor.setModelLanguage(f,e.originalLanguage||e.language||"text"),r.value.editor.setModelLanguage(m,e.originalLanguage||e.language||"text")}),V(()=>e.theme,()=>{var f;return(f=r.value)==null?void 0:f.editor.setTheme(e.theme)}),V(()=>e.options,()=>{var f;return(f=s.value)==null?void 0:f.updateOptions(e.options)},{deep:!0}),{containerRef:n,isDiffEditorReady:o,wrapperStyle:l,containerStyle:c}},render(){const{$slots:e,isDiffEditorReady:t,wrapperStyle:n,containerStyle:r,className:i}=this;return ke("div",{style:n},[!t&&ke("div",{style:tl},e.default?Ii(e.default):"loading..."),ke("div",{ref:"containerRef",key:"monaco_diff_editor_container",style:r,class:i})])}});function rl({emit:e},t,n,r){const i=vt(null);Yt(()=>{const o=V(n,()=>{r.value&&n.value&&(Vt(()=>o()),s())},{immediate:!0})});function s(){var c;if(!r.value||!n.value||i.value)return;e("beforeMount",n.value),i.value=n.value.editor.createDiffEditor(r.value,{automaticLayout:!0,autoIndent:"brackets",theme:t.theme,formatOnPaste:!0,formatOnType:!0,...t.options});const o=Ge(n.value,t.original||"",t.originalLanguage||t.language||"text",t.originalModelPath||""),l=Ge(n.value,t.modified||"",t.modifiedLanguage||t.language||"text",t.modifiedModelPath||"");(c=i.value)==null||c.setModel({original:o,modified:l}),e("mount",i.value,n.value)}return{diffEditorRef:i}}function Wr(e){return e?"Dark":"Light"}const il=Ue({name:"DarkMode",props:{onChange:Function},setup(e){const t=Jn(!0),n=Te(()=>Wr(!t.value)),r=Te(()=>t.value?"🌞":"🌒");ks(()=>{document.documentElement.setAttribute("data-color-mode",Wr(t.value).toLowerCase())});function i(){var s;t.value=!t.value,(s=e.onChange)==null||s.call(e,t.value)}return()=>E("span",{class:"dark-mode-wrapper",onClick:i},[E("span",{class:"dark-mode-text"},[r.value]),E("span",null,[n.value])])}});const sl=Ue({name:"GitHubCorners",props:{href:String,target:{type:String,default:"__blank"}},setup(e){return()=>E("a",{class:"github-corner","aria-label":"View source on GitHub",href:e.href,target:e.target},[E("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;","aria-hidden":"true"},[E("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"},null),E("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:"transform-origin: 130px 106px;",class:"octo-arm"},null),E("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"},null)])])}}),ol="/monaco-vue/assets/logo-277e0e97.svg";const al=Ue({name:"SiteHeader",setup(){const e="1.2.1";return()=>E("header",{class:"header-wrapper"},[E("img",{class:"header-logo",alt:"logo",src:ol},null),E("h1",null,[ve("Vue Monaco Editor "),E("sup",{class:"header-sup-text"},[ve("v"),e])]),E("p",{class:"header-description"},[ve("MonacoEditor component for Vue.")]),E("div",null,[E("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/imguolao/monaco-vue"},[ve("View On Github")]),E("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.npmjs.com/package/@guolao/vue-monaco-editor"},[ve("View On NPM")]),E("a",{target:"_blank",rel:"noopener noreferrer",href:"https://microsoft.github.io/monaco-editor"},[ve("Monaco Editor Documentation")])])])}}),ll=`/*
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
`,gn={original:`/*
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
`,lang:"javascript"};const cl=Ue({name:"DocumentBody",props:{editorTheme:{type:String,default:"light"}},setup(e){return()=>E("section",{class:"body-wrapper"},[E("div",{class:"body-editor-wrapper"},[E(Qa,{height:"500px",theme:e.editorTheme,language:"javascript",value:ll},null)]),E("div",{class:"body-description"},[E("span",null,[ve("Editor 👆")]),E("span",null,[ve("👇 Diff Editor")])]),E("div",{class:"body-diff-editor-wrapper"},[E(nl,{height:"500px",theme:e.editorTheme,language:gn.lang,original:gn.original,modified:gn.modified},null)])])}});const ul=Ue(()=>{const e=Jn(!0),t=Te(()=>e.value?"vs-dark":"vs");return()=>E(de,null,[E(il,{class:"page-dark-mode",onChange:n=>e.value=n},null),E(sl,{class:"page-github-corners",href:"https://github.com/imguolao/monaco-vue"},null),E(al,null,null),E(cl,{editorTheme:t.value},null)])});Tn.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.38.0/min/vs"}});oa(ul).mount("#app");
