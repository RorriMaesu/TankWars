var Ww=Object.defineProperty,$w=Object.defineProperties;var Bw=Object.getOwnPropertyDescriptors;var qh=Object.getOwnPropertySymbols,Vw=Object.getPrototypeOf,Hw=Object.prototype.hasOwnProperty,Gw=Object.prototype.propertyIsEnumerable,Kw=Reflect.get;var Yh=(t,e,n)=>e in t?Ww(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bt=(t,e)=>{for(var n in e||(e={}))Hw.call(e,n)&&Yh(t,n,e[n]);if(qh)for(var n of qh(e))Gw.call(e,n)&&Yh(t,n,e[n]);return t},ho=(t,e)=>$w(t,Bw(e));var qw=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Zn=(t,e,n)=>Kw(Vw(t),n,e);var y=(t,e,n)=>new Promise((r,i)=>{var s=l=>{try{a(n.next(l))}catch(u){i(u)}},o=l=>{try{a(n.throw(l))}catch(u){i(u)}},a=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,o);a((n=n.apply(t,e)).next())});var hx=qw(zw=>{function Yw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Qw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jm={exports:{}},el={},zm={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),Xw=Symbol.for("react.portal"),Jw=Symbol.for("react.fragment"),Zw=Symbol.for("react.strict_mode"),e0=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),r0=Symbol.for("react.forward_ref"),i0=Symbol.for("react.suspense"),s0=Symbol.for("react.memo"),o0=Symbol.for("react.lazy"),Qh=Symbol.iterator;function a0(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var Wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$m=Object.assign,Bm={};function Si(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||Wm}Si.prototype.isReactComponent={};Si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vm(){}Vm.prototype=Si.prototype;function qc(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||Wm}var Yc=qc.prototype=new Vm;Yc.constructor=qc;$m(Yc,Si.prototype);Yc.isPureReactComponent=!0;var Xh=Array.isArray,Hm=Object.prototype.hasOwnProperty,Qc={current:null},Gm={key:!0,ref:!0,__self:!0,__source:!0};function Km(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hm.call(e,r)&&!Gm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ks,type:t,key:s,ref:o,props:i,_owner:Qc.current}}function l0(t,e){return{$$typeof:Ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ks}function u0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jh=/\/+/g;function Ml(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u0(""+t.key):e.toString(36)}function jo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ks:case Xw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ml(o,0):r,Xh(i)?(n="",t!=null&&(n=t.replace(Jh,"$&/")+"/"),jo(i,e,n,"",function(u){return u})):i!=null&&(Xc(i)&&(i=l0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Xh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ml(s,a);o+=jo(s,e,n,l,i)}else if(l=a0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ml(s,a++),o+=jo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fo(t,e,n){if(t==null)return t;var r=[],i=0;return jo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function c0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},zo={transition:null},d0={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:zo,ReactCurrentOwner:Qc};function qm(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!Xc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Si;B.Fragment=Jw;B.Profiler=e0;B.PureComponent=qc;B.StrictMode=Zw;B.Suspense=i0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d0;B.act=qm;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$m({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hm.call(e,l)&&!Gm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ks,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:n0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t0,_context:t},t.Consumer=t};B.createElement=Km;B.createFactory=function(t){var e=Km.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:r0,render:t}};B.isValidElement=Xc;B.lazy=function(t){return{$$typeof:o0,_payload:{_status:-1,_result:t},_init:c0}};B.memo=function(t,e){return{$$typeof:s0,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=zo.transition;zo.transition={};try{t()}finally{zo.transition=e}};B.unstable_act=qm;B.useCallback=function(t,e){return $e.current.useCallback(t,e)};B.useContext=function(t){return $e.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};B.useEffect=function(t,e){return $e.current.useEffect(t,e)};B.useId=function(){return $e.current.useId()};B.useImperativeHandle=function(t,e,n){return $e.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return $e.current.useMemo(t,e)};B.useReducer=function(t,e,n){return $e.current.useReducer(t,e,n)};B.useRef=function(t){return $e.current.useRef(t)};B.useState=function(t){return $e.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return $e.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return $e.current.useTransition()};B.version="18.3.1";zm.exports=B;var R=zm.exports;const Ym=Qw(R),h0=Yw({__proto__:null,default:Ym},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=R,p0=Symbol.for("react.element"),m0=Symbol.for("react.fragment"),g0=Object.prototype.hasOwnProperty,_0=f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v0={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)g0.call(e,r)&&!v0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:p0,type:t,key:s,ref:o,props:i,_owner:_0.current}}el.Fragment=m0;el.jsx=Qm;el.jsxs=Qm;jm.exports=el;var S=jm.exports,Pu={},Xm={exports:{}},nt={},Jm={exports:{}},Zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var D=A.length;A.push(M);e:for(;0<D;){var G=D-1>>>1,le=A[G];if(0<i(le,M))A[G]=M,A[D]=le,D=G;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],D=A.pop();if(D!==M){A[0]=D;e:for(var G=0,le=A.length,Jn=le>>>1;G<Jn;){var At=2*(G+1)-1,Dr=A[At],mt=At+1,co=A[mt];if(0>i(Dr,D))mt<le&&0>i(co,Dr)?(A[G]=co,A[mt]=D,G=mt):(A[G]=Dr,A[At]=D,G=At);else if(mt<le&&0>i(co,D))A[G]=co,A[mt]=D,G=mt;else break e}}return M}function i(A,M){var D=A.sortIndex-M.sortIndex;return D!==0?D:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,g=!1,v=!1,p=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function w(A){if(p=!1,_(A),!v)if(n(l)!==null)v=!0,ne(T);else{var M=n(u);M!==null&&Me(w,M.startTime-A)}}function T(A,M){v=!1,p&&(p=!1,m(I),I=-1),g=!0;var D=h;try{for(_(M),c=n(l);c!==null&&(!(c.expirationTime>M)||A&&!j());){var G=c.callback;if(typeof G=="function"){c.callback=null,h=c.priorityLevel;var le=G(c.expirationTime<=M);M=t.unstable_now(),typeof le=="function"?c.callback=le:c===n(l)&&r(l),_(M)}else r(l);c=n(l)}if(c!==null)var Jn=!0;else{var At=n(u);At!==null&&Me(w,At.startTime-M),Jn=!1}return Jn}finally{c=null,h=D,g=!1}}var k=!1,C=null,I=-1,b=5,O=-1;function j(){return!(t.unstable_now()-O<b)}function L(){if(C!==null){var A=t.unstable_now();O=A;var M=!0;try{M=C(!0,A)}finally{M?pe():(k=!1,C=null)}}else k=!1}var pe;if(typeof f=="function")pe=function(){f(L)};else if(typeof MessageChannel!="undefined"){var Ae=new MessageChannel,Le=Ae.port2;Ae.port1.onmessage=L,pe=function(){Le.postMessage(null)}}else pe=function(){E(L,0)};function ne(A){C=A,k||(k=!0,pe())}function Me(A,M){I=E(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ne(T))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var D=h;h=M;try{return A()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=h;h=A;try{return M()}finally{h=D}},t.unstable_scheduleCallback=function(A,M,D){var G=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?G+D:G):D=G,A){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=D+le,A={id:d++,callback:M,priorityLevel:A,startTime:D,expirationTime:le,sortIndex:-1},D>G?(A.sortIndex=D,e(u,A),n(l)===null&&A===n(u)&&(p?(m(I),I=-1):p=!0,Me(w,D-G))):(A.sortIndex=le,e(l,A),v||g||(v=!0,ne(T))),A},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(A){var M=h;return function(){var D=h;h=M;try{return A.apply(this,arguments)}finally{h=D}}}})(Zm);Jm.exports=Zm;var y0=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=R,tt=y0;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eg=new Set,ps={};function Nr(t,e){li(t,e),li(t+"Capture",e)}function li(t,e){for(ps[t]=e,t=0;t<e.length;t++)eg.add(e[t])}var rn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Au=Object.prototype.hasOwnProperty,E0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zh={},ef={};function S0(t){return Au.call(ef,t)?!0:Au.call(Zh,t)?!1:E0.test(t)?ef[t]=!0:(Zh[t]=!0,!1)}function C0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I0(t,e,n,r){if(e===null||typeof e=="undefined"||C0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jc=/[\-:]([a-z])/g;function Zc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jc,Zc);Pe[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jc,Zc);Pe[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jc,Zc);Pe[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function ed(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(I0(e,n,i,r)&&(n=null),r||i===null?S0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hn=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),tg=Symbol.for("react.provider"),ng=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),tf=Symbol.iterator;function bi(t){return t===null||typeof t!="object"?null:(t=tf&&t[tf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Fl;function Hi(t){if(Fl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fl=e&&e[1]||""}return`
`+Fl+t}var Ul=!1;function jl(t,e){if(!t||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hi(t):""}function T0(t){switch(t.tag){case 5:return Hi(t.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return t=jl(t.type,!1),t;case 11:return t=jl(t.type.render,!1),t;case 1:return t=jl(t.type,!0),t;default:return""}}function Du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ur:return"Fragment";case Fr:return"Portal";case xu:return"Profiler";case td:return"StrictMode";case Ou:return"Suspense";case bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ng:return(t.displayName||"Context")+".Consumer";case tg:return(t._context.displayName||"Context")+".Provider";case nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rd:return e=t.displayName||null,e!==null?e:Du(t.type)||"Memo";case _n:e=t._payload,t=t._init;try{return Du(t(e))}catch(n){}}return null}function k0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Du(e);case 8:return e===td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function N0(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mo(t){t._valueTracker||(t._valueTracker=N0(t))}function sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ig(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ia(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch(e){return t.body}}function Lu(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function nf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&ed(t,"checked",e,!1)}function Mu(t,e){og(t,e);var n=zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fu(t,e.type,zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fu(t,e,n){(e!=="number"||ia(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gi=Array.isArray;function Qr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(Gi(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zn(n)}}function ag(t,e){var n=zn(e.value),r=zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function of(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,ug=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R0=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(t){R0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xi[e]=Xi[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xi.hasOwnProperty(t)&&Xi[t]?(""+e).trim():e+"px"}function dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var P0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(t,e){if(e){if(P0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bu=null,Xr=null,Jr=null;function af(t){if(t=Qs(t)){if(typeof Bu!="function")throw Error(N(280));var e=t.stateNode;e&&(e=sl(e),Bu(t.stateNode,t.type,e))}}function hg(t){Xr?Jr?Jr.push(t):Jr=[t]:Xr=t}function fg(){if(Xr){var t=Xr,e=Jr;if(Jr=Xr=null,af(t),e)for(t=0;t<e.length;t++)af(e[t])}}function pg(t,e){return t(e)}function mg(){}var zl=!1;function gg(t,e,n){if(zl)return t(e,n);zl=!0;try{return pg(t,e,n)}finally{zl=!1,(Xr!==null||Jr!==null)&&(mg(),fg())}}function gs(t,e){var n=t.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Vu=!1;if(rn)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch(t){Vu=!1}function A0(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ji=!1,sa=null,oa=!1,Hu=null,x0={onError:function(t){Ji=!0,sa=t}};function O0(t,e,n,r,i,s,o,a,l){Ji=!1,sa=null,A0.apply(x0,arguments)}function b0(t,e,n,r,i,s,o,a,l){if(O0.apply(this,arguments),Ji){if(Ji){var u=sa;Ji=!1,sa=null}else throw Error(N(198));oa||(oa=!0,Hu=u)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lf(t){if(Rr(t)!==t)throw Error(N(188))}function D0(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return lf(i),t;if(s===r)return lf(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function vg(t){return t=D0(t),t!==null?yg(t):null}function yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yg(t);if(e!==null)return e;t=t.sibling}return null}var wg=tt.unstable_scheduleCallback,uf=tt.unstable_cancelCallback,L0=tt.unstable_shouldYield,M0=tt.unstable_requestPaint,fe=tt.unstable_now,F0=tt.unstable_getCurrentPriorityLevel,sd=tt.unstable_ImmediatePriority,Eg=tt.unstable_UserBlockingPriority,aa=tt.unstable_NormalPriority,U0=tt.unstable_LowPriority,Sg=tt.unstable_IdlePriority,tl=null,Mt=null;function j0(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch(e){}}var It=Math.clz32?Math.clz32:$0,z0=Math.log,W0=Math.LN2;function $0(t){return t>>>=0,t===0?32:31-(z0(t)/W0|0)|0}var _o=64,vo=4194304;function Ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function la(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ki(a):(s&=o,s!==0&&(r=Ki(s)))}else o=n&~i,o!==0?r=Ki(o):s!==0&&(r=Ki(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-It(e),i=1<<n,r|=t[n],e&=~i;return r}function B0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-It(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=B0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=_o;return _o<<=1,!(_o&4194240)&&(_o=64),t}function Wl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=n}function H0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-It(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-It(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function Ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tg,ad,kg,Ng,Rg,Ku=!1,yo=[],Rn=null,Pn=null,An=null,_s=new Map,vs=new Map,yn=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cf(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":_s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function Li(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Qs(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function K0(t,e,n,r,i){switch(e){case"focusin":return Rn=Li(Rn,t,e,n,r,i),!0;case"dragenter":return Pn=Li(Pn,t,e,n,r,i),!0;case"mouseover":return An=Li(An,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return _s.set(s,Li(_s.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vs.set(s,Li(vs.get(s)||null,t,e,n,r,i)),!0}return!1}function Pg(t){var e=sr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=_g(n),e!==null){t.blockedOn=e,Rg(t.priority,function(){kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$u=r,n.target.dispatchEvent(r),$u=null}else return e=Qs(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function df(t,e,n){Wo(t)&&n.delete(e)}function q0(){Ku=!1,Rn!==null&&Wo(Rn)&&(Rn=null),Pn!==null&&Wo(Pn)&&(Pn=null),An!==null&&Wo(An)&&(An=null),_s.forEach(df),vs.forEach(df)}function Mi(t,e){t.blockedOn===e&&(t.blockedOn=null,Ku||(Ku=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,q0)))}function ys(t){function e(i){return Mi(i,t)}if(0<yo.length){Mi(yo[0],t);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rn!==null&&Mi(Rn,t),Pn!==null&&Mi(Pn,t),An!==null&&Mi(An,t),_s.forEach(e),vs.forEach(e),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Pg(n),n.blockedOn===null&&yn.shift()}var Zr=hn.ReactCurrentBatchConfig,ua=!0;function Y0(t,e,n,r){var i=K,s=Zr.transition;Zr.transition=null;try{K=1,ld(t,e,n,r)}finally{K=i,Zr.transition=s}}function Q0(t,e,n,r){var i=K,s=Zr.transition;Zr.transition=null;try{K=4,ld(t,e,n,r)}finally{K=i,Zr.transition=s}}function ld(t,e,n,r){if(ua){var i=qu(t,e,n,r);if(i===null)Xl(t,e,r,ca,n),cf(t,r);else if(K0(i,t,e,n,r))r.stopPropagation();else if(cf(t,r),e&4&&-1<G0.indexOf(t)){for(;i!==null;){var s=Qs(i);if(s!==null&&Tg(s),s=qu(t,e,n,r),s===null&&Xl(t,e,r,ca,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xl(t,e,r,null,n)}}var ca=null;function qu(t,e,n,r){if(ca=null,t=id(r),t=sr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ca=t,null}function Ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F0()){case sd:return 1;case Eg:return 4;case aa:case U0:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var In=null,ud=null,$o=null;function xg(){if($o)return $o;var t,e=ud,n=e.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $o=i.slice(t,1<r?1-r:void 0)}function Bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wo(){return!0}function hf(){return!1}function rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wo:hf,this.isPropagationStopped=hf,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=rt(Ci),Ys=ae({},Ci,{view:0,detail:0}),X0=rt(Ys),$l,Bl,Fi,nl=ae({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fi&&(Fi&&t.type==="mousemove"?($l=t.screenX-Fi.screenX,Bl=t.screenY-Fi.screenY):Bl=$l=0,Fi=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),ff=rt(nl),J0=ae({},nl,{dataTransfer:0}),Z0=rt(J0),eE=ae({},Ys,{relatedTarget:0}),Vl=rt(eE),tE=ae({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),nE=rt(tE),rE=ae({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iE=rt(rE),sE=ae({},Ci,{data:0}),pf=rt(sE),oE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lE[t])?!!e[t]:!1}function dd(){return uE}var cE=ae({},Ys,{key:function(t){if(t.key){var e=oE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dE=rt(cE),hE=ae({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=rt(hE),fE=ae({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),pE=rt(fE),mE=ae({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),gE=rt(mE),_E=ae({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=rt(_E),yE=[9,13,27,32],hd=rn&&"CompositionEvent"in window,Zi=null;rn&&"documentMode"in document&&(Zi=document.documentMode);var wE=rn&&"TextEvent"in window&&!Zi,Og=rn&&(!hd||Zi&&8<Zi&&11>=Zi),gf=" ",_f=!1;function bg(t,e){switch(t){case"keyup":return yE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function EE(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(_f=!0,gf);case"textInput":return t=e.data,t===gf&&_f?null:t;default:return null}}function SE(t,e){if(jr)return t==="compositionend"||!hd&&bg(t,e)?(t=xg(),$o=ud=In=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Og&&e.locale!=="ko"?null:e.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CE[t.type]:e==="textarea"}function Lg(t,e,n,r){hg(r),e=da(e,"onChange"),0<e.length&&(n=new cd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var es=null,ws=null;function IE(t){Gg(t,0)}function rl(t){var e=$r(t);if(sg(e))return t}function TE(t,e){if(t==="change")return e}var Mg=!1;if(rn){var Hl;if(rn){var Gl="oninput"in document;if(!Gl){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Gl=typeof yf.oninput=="function"}Hl=Gl}else Hl=!1;Mg=Hl&&(!document.documentMode||9<document.documentMode)}function wf(){es&&(es.detachEvent("onpropertychange",Fg),ws=es=null)}function Fg(t){if(t.propertyName==="value"&&rl(ws)){var e=[];Lg(e,ws,t,id(t)),gg(IE,e)}}function kE(t,e,n){t==="focusin"?(wf(),es=e,ws=n,es.attachEvent("onpropertychange",Fg)):t==="focusout"&&wf()}function NE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(ws)}function RE(t,e){if(t==="click")return rl(e)}function PE(t,e){if(t==="input"||t==="change")return rl(e)}function AE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:AE;function Es(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Au.call(e,i)||!Rt(t[i],e[i]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sf(t,e){var n=Ef(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ef(n)}}function Ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jg(){for(var t=window,e=ia();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch(r){n=!1}if(n)t=e.contentWindow;else break;e=ia(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xE(t){var e=jg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(r!==null&&fd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sf(n,s);var o=Sf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OE=rn&&"documentMode"in document&&11>=document.documentMode,zr=null,Yu=null,ts=null,Qu=!1;function Cf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||zr==null||zr!==ia(r)||(r=zr,"selectionStart"in r&&fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&Es(ts,r)||(ts=r,r=da(Yu,"onSelect"),0<r.length&&(e=new cd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zr)))}function Eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Kl={},zg={};rn&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function il(t){if(Kl[t])return Kl[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zg)return Kl[t]=e[n];return t}var Wg=il("animationend"),$g=il("animationiteration"),Bg=il("animationstart"),Vg=il("transitionend"),Hg=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(t,e){Hg.set(t,e),Nr(e,[t])}for(var ql=0;ql<If.length;ql++){var Yl=If[ql],bE=Yl.toLowerCase(),DE=Yl[0].toUpperCase()+Yl.slice(1);Gn(bE,"on"+DE)}Gn(Wg,"onAnimationEnd");Gn($g,"onAnimationIteration");Gn(Bg,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(Vg,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LE=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function Tf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,b0(r,e,void 0,t),t.currentTarget=null}function Gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Tf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Tf(i,a,u),s=l}}}if(oa)throw t=Hu,oa=!1,Hu=null,t}function Z(t,e){var n=e[tc];n===void 0&&(n=e[tc]=new Set);var r=t+"__bubble";n.has(r)||(Kg(e,t,2,!1),n.add(r))}function Ql(t,e,n){var r=0;e&&(r|=4),Kg(n,t,r,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function Ss(t){if(!t[So]){t[So]=!0,eg.forEach(function(n){n!=="selectionchange"&&(LE.has(n)||Ql(n,!1,t),Ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,Ql("selectionchange",!1,e))}}function Kg(t,e,n,r){switch(Ag(e)){case 1:var i=Y0;break;case 4:i=Q0;break;default:i=ld}n=i.bind(null,e,n,t),i=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=sr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gg(function(){var u=s,d=id(n),c=[];e:{var h=Hg.get(t);if(h!==void 0){var g=cd,v=t;switch(t){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":g=dE;break;case"focusin":v="focus",g=Vl;break;case"focusout":v="blur",g=Vl;break;case"beforeblur":case"afterblur":g=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pE;break;case Wg:case $g:case Bg:g=nE;break;case Vg:g=gE;break;case"scroll":g=X0;break;case"wheel":g=vE;break;case"copy":case"cut":case"paste":g=iE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mf}var p=(e&4)!==0,E=!p&&t==="scroll",m=p?h!==null?h+"Capture":null:h;p=[];for(var f=u,_;f!==null;){_=f;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,m!==null&&(w=gs(f,m),w!=null&&p.push(Cs(f,w,_)))),E)break;f=f.return}0<p.length&&(h=new g(h,v,null,n,d),c.push({event:h,listeners:p}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==$u&&(v=n.relatedTarget||n.fromElement)&&(sr(v)||v[sn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?sr(v):null,v!==null&&(E=Rr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(p=ff,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(p=mf,w="onPointerLeave",m="onPointerEnter",f="pointer"),E=g==null?h:$r(g),_=v==null?h:$r(v),h=new p(w,f+"leave",g,n,d),h.target=E,h.relatedTarget=_,w=null,sr(d)===u&&(p=new p(m,f+"enter",v,n,d),p.target=_,p.relatedTarget=E,w=p),E=w,g&&v)t:{for(p=g,m=v,f=0,_=p;_;_=Lr(_))f++;for(_=0,w=m;w;w=Lr(w))_++;for(;0<f-_;)p=Lr(p),f--;for(;0<_-f;)m=Lr(m),_--;for(;f--;){if(p===m||m!==null&&p===m.alternate)break t;p=Lr(p),m=Lr(m)}p=null}else p=null;g!==null&&kf(c,h,g,p,!1),v!==null&&E!==null&&kf(c,E,v,p,!0)}}e:{if(h=u?$r(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=TE;else if(vf(h))if(Mg)T=PE;else{T=NE;var k=kE}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=RE);if(T&&(T=T(t,u))){Lg(c,T,n,d);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Fu(h,"number",h.value)}switch(k=u?$r(u):window,t){case"focusin":(vf(k)||k.contentEditable==="true")&&(zr=k,Yu=u,ts=null);break;case"focusout":ts=Yu=zr=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Cf(c,n,d);break;case"selectionchange":if(OE)break;case"keydown":case"keyup":Cf(c,n,d)}var C;if(hd)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else jr?bg(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Og&&n.locale!=="ko"&&(jr||I!=="onCompositionStart"?I==="onCompositionEnd"&&jr&&(C=xg()):(In=d,ud="value"in In?In.value:In.textContent,jr=!0)),k=da(u,I),0<k.length&&(I=new pf(I,t,null,n,d),c.push({event:I,listeners:k}),C?I.data=C:(C=Dg(n),C!==null&&(I.data=C)))),(C=wE?EE(t,n):SE(t,n))&&(u=da(u,"onBeforeInput"),0<u.length&&(d=new pf("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=C))}Gg(c,e)})}function Cs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function da(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gs(t,n),s!=null&&r.unshift(Cs(t,s,i)),s=gs(t,e),s!=null&&r.push(Cs(t,s,i))),t=t.return}return r}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gs(n,s),l!=null&&o.unshift(Cs(n,l,a))):i||(l=gs(n,s),l!=null&&o.push(Cs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ME=/\r\n?/g,FE=/\u0000|\uFFFD/g;function Nf(t){return(typeof t=="string"?t:""+t).replace(ME,`
`).replace(FE,"")}function Co(t,e,n){if(e=Nf(e),Nf(t)!==e&&n)throw Error(N(425))}function ha(){}var Xu=null,Ju=null;function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ec=typeof setTimeout=="function"?setTimeout:void 0,UE=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,jE=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf!="undefined"?function(t){return Rf.resolve(null).then(t).catch(zE)}:ec;function zE(t){setTimeout(function(){throw t})}function Jl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ys(e)}function xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ii,Is="__reactProps$"+Ii,sn="__reactContainer$"+Ii,tc="__reactEvents$"+Ii,WE="__reactListeners$"+Ii,$E="__reactHandles$"+Ii;function sr(t){var e=t[Dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sn]||n[Dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pf(t);t!==null;){if(n=t[Dt])return n;t=Pf(t)}return e}t=n,n=t.parentNode}return null}function Qs(t){return t=t[Dt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function sl(t){return t[Is]||null}var nc=[],Br=-1;function Kn(t){return{current:t}}function ee(t){0>Br||(t.current=nc[Br],nc[Br]=null,Br--)}function J(t,e){Br++,nc[Br]=t.current,t.current=e}var Wn={},De=Kn(Wn),Ke=Kn(!1),gr=Wn;function ui(t,e){var n=t.type.contextTypes;if(!n)return Wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function fa(){ee(Ke),ee(De)}function Af(t,e,n){if(De.current!==Wn)throw Error(N(168));J(De,e),J(Ke,n)}function qg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,k0(t)||"Unknown",i));return ae({},n,r)}function pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wn,gr=De.current,J(De,t),J(Ke,Ke.current),!0}function xf(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=qg(t,e,gr),r.__reactInternalMemoizedMergedChildContext=t,ee(Ke),ee(De),J(De,t)):ee(Ke),J(Ke,n)}var Kt=null,ol=!1,Zl=!1;function Yg(t){Kt===null?Kt=[t]:Kt.push(t)}function BE(t){ol=!0,Yg(t)}function qn(){if(!Zl&&Kt!==null){Zl=!0;var t=0,e=K;try{var n=Kt;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kt=null,ol=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(t+1)),wg(sd,qn),i}finally{K=e,Zl=!1}}return null}var Vr=[],Hr=0,ma=null,ga=0,it=[],st=0,_r=null,Yt=1,Qt="";function er(t,e){Vr[Hr++]=ga,Vr[Hr++]=ma,ma=t,ga=e}function Qg(t,e,n){it[st++]=Yt,it[st++]=Qt,it[st++]=_r,_r=t;var r=Yt;t=Qt;var i=32-It(r)-1;r&=~(1<<i),n+=1;var s=32-It(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-It(e)+i|n<<i|r,Qt=s+t}else Yt=1<<s|n<<i|r,Qt=t}function pd(t){t.return!==null&&(er(t,1),Qg(t,1,0))}function md(t){for(;t===ma;)ma=Vr[--Hr],Vr[Hr]=null,ga=Vr[--Hr],Vr[Hr]=null;for(;t===_r;)_r=it[--st],it[st]=null,Qt=it[--st],it[st]=null,Yt=it[--st],it[st]=null}var Ze=null,Je=null,te=!1,Et=null;function Xg(t,e){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Of(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Je=xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:Yt,overflow:Qt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Je=null,!0):!1;default:return!1}}function rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ic(t){if(te){var e=Je;if(e){var n=e;if(!Of(t,e)){if(rc(t))throw Error(N(418));e=xn(n.nextSibling);var r=Ze;e&&Of(t,e)?Xg(r,n):(t.flags=t.flags&-4097|2,te=!1,Ze=t)}}else{if(rc(t))throw Error(N(418));t.flags=t.flags&-4097|2,te=!1,Ze=t}}}function bf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function Io(t){if(t!==Ze)return!1;if(!te)return bf(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zu(t.type,t.memoizedProps)),e&&(e=Je)){if(rc(t))throw Jg(),Error(N(418));for(;e;)Xg(t,e),e=xn(e.nextSibling)}if(bf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Ze?xn(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=Je;t;)t=xn(t.nextSibling)}function ci(){Je=Ze=null,te=!1}function gd(t){Et===null?Et=[t]:Et.push(t)}var VE=hn.ReactCurrentBatchConfig;function Ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function To(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Df(t){var e=t._init;return e(t._payload)}function Zg(t){function e(m,f){if(t){var _=m.deletions;_===null?(m.deletions=[f],m.flags|=16):_.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Ln(m,f),m.index=0,m.sibling=null,m}function s(m,f,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<f?(m.flags|=2,f):_):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,_,w){return f===null||f.tag!==6?(f=ou(_,m.mode,w),f.return=m,f):(f=i(f,_),f.return=m,f)}function l(m,f,_,w){var T=_.type;return T===Ur?d(m,f,_.props.children,w,_.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_n&&Df(T)===f.type)?(w=i(f,_.props),w.ref=Ui(m,f,_),w.return=m,w):(w=Qo(_.type,_.key,_.props,null,m.mode,w),w.ref=Ui(m,f,_),w.return=m,w)}function u(m,f,_,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=au(_,m.mode,w),f.return=m,f):(f=i(f,_.children||[]),f.return=m,f)}function d(m,f,_,w,T){return f===null||f.tag!==7?(f=pr(_,m.mode,w,T),f.return=m,f):(f=i(f,_),f.return=m,f)}function c(m,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ou(""+f,m.mode,_),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case po:return _=Qo(f.type,f.key,f.props,null,m.mode,_),_.ref=Ui(m,null,f),_.return=m,_;case Fr:return f=au(f,m.mode,_),f.return=m,f;case _n:var w=f._init;return c(m,w(f._payload),_)}if(Gi(f)||bi(f))return f=pr(f,m.mode,_,null),f.return=m,f;To(m,f)}return null}function h(m,f,_,w){var T=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:a(m,f,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case po:return _.key===T?l(m,f,_,w):null;case Fr:return _.key===T?u(m,f,_,w):null;case _n:return T=_._init,h(m,f,T(_._payload),w)}if(Gi(_)||bi(_))return T!==null?null:d(m,f,_,w,null);To(m,_)}return null}function g(m,f,_,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(_)||null,a(f,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case po:return m=m.get(w.key===null?_:w.key)||null,l(f,m,w,T);case Fr:return m=m.get(w.key===null?_:w.key)||null,u(f,m,w,T);case _n:var k=w._init;return g(m,f,_,k(w._payload),T)}if(Gi(w)||bi(w))return m=m.get(_)||null,d(f,m,w,T,null);To(f,w)}return null}function v(m,f,_,w){for(var T=null,k=null,C=f,I=f=0,b=null;C!==null&&I<_.length;I++){C.index>I?(b=C,C=null):b=C.sibling;var O=h(m,C,_[I],w);if(O===null){C===null&&(C=b);break}t&&C&&O.alternate===null&&e(m,C),f=s(O,f,I),k===null?T=O:k.sibling=O,k=O,C=b}if(I===_.length)return n(m,C),te&&er(m,I),T;if(C===null){for(;I<_.length;I++)C=c(m,_[I],w),C!==null&&(f=s(C,f,I),k===null?T=C:k.sibling=C,k=C);return te&&er(m,I),T}for(C=r(m,C);I<_.length;I++)b=g(C,m,I,_[I],w),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?I:b.key),f=s(b,f,I),k===null?T=b:k.sibling=b,k=b);return t&&C.forEach(function(j){return e(m,j)}),te&&er(m,I),T}function p(m,f,_,w){var T=bi(_);if(typeof T!="function")throw Error(N(150));if(_=T.call(_),_==null)throw Error(N(151));for(var k=T=null,C=f,I=f=0,b=null,O=_.next();C!==null&&!O.done;I++,O=_.next()){C.index>I?(b=C,C=null):b=C.sibling;var j=h(m,C,O.value,w);if(j===null){C===null&&(C=b);break}t&&C&&j.alternate===null&&e(m,C),f=s(j,f,I),k===null?T=j:k.sibling=j,k=j,C=b}if(O.done)return n(m,C),te&&er(m,I),T;if(C===null){for(;!O.done;I++,O=_.next())O=c(m,O.value,w),O!==null&&(f=s(O,f,I),k===null?T=O:k.sibling=O,k=O);return te&&er(m,I),T}for(C=r(m,C);!O.done;I++,O=_.next())O=g(C,m,I,O.value,w),O!==null&&(t&&O.alternate!==null&&C.delete(O.key===null?I:O.key),f=s(O,f,I),k===null?T=O:k.sibling=O,k=O);return t&&C.forEach(function(L){return e(m,L)}),te&&er(m,I),T}function E(m,f,_,w){if(typeof _=="object"&&_!==null&&_.type===Ur&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case po:e:{for(var T=_.key,k=f;k!==null;){if(k.key===T){if(T=_.type,T===Ur){if(k.tag===7){n(m,k.sibling),f=i(k,_.props.children),f.return=m,m=f;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_n&&Df(T)===k.type){n(m,k.sibling),f=i(k,_.props),f.ref=Ui(m,k,_),f.return=m,m=f;break e}n(m,k);break}else e(m,k);k=k.sibling}_.type===Ur?(f=pr(_.props.children,m.mode,w,_.key),f.return=m,m=f):(w=Qo(_.type,_.key,_.props,null,m.mode,w),w.ref=Ui(m,f,_),w.return=m,m=w)}return o(m);case Fr:e:{for(k=_.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(m,f.sibling),f=i(f,_.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=au(_,m.mode,w),f.return=m,m=f}return o(m);case _n:return k=_._init,E(m,f,k(_._payload),w)}if(Gi(_))return v(m,f,_,w);if(bi(_))return p(m,f,_,w);To(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,_),f.return=m,m=f):(n(m,f),f=ou(_,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return E}var di=Zg(!0),e_=Zg(!1),_a=Kn(null),va=null,Gr=null,_d=null;function vd(){_d=Gr=va=null}function yd(t){var e=_a.current;ee(_a),t._currentValue=e}function sc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ei(t,e){va=t,_d=Gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(_d!==t)if(t={context:t,memoizedValue:e,next:null},Gr===null){if(va===null)throw Error(N(308));Gr=t,va.dependencies={lanes:0,firstContext:t}}else Gr=Gr.next=t;return e}var or=null;function wd(t){or===null?or=[t]:or.push(t)}function t_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wd(e)):(n.next=i.next,i.next=n),e.interleaved=n,on(t,r)}function on(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vn=!1;function Ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function On(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,on(t,n)}return i=r.interleaved,i===null?(e.next=e,wd(r)):(e.next=i.next,i.next=e),r.interleaved=e,on(t,n)}function Vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,od(t,n)}}function Lf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ya(t,e,n,r){var i=t.updateQueue;vn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,p=a;switch(h=e,g=n,p.tag){case 1:if(v=p.payload,typeof v=="function"){c=v.call(g,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=p.payload,h=typeof v=="function"?v.call(g,c,h):v,h==null)break e;c=ae({},c,h);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=c}}function Mf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Xs={},Ft=Kn(Xs),Ts=Kn(Xs),ks=Kn(Xs);function ar(t){if(t===Xs)throw Error(N(174));return t}function Sd(t,e){switch(J(ks,e),J(Ts,t),J(Ft,Xs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}ee(Ft),J(Ft,e)}function hi(){ee(Ft),ee(Ts),ee(ks)}function r_(t){ar(ks.current);var e=ar(Ft.current),n=ju(e,t.type);e!==n&&(J(Ts,t),J(Ft,n))}function Cd(t){Ts.current===t&&(ee(Ft),ee(Ts))}var re=Kn(0);function wa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function Id(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var Ho=hn.ReactCurrentDispatcher,tu=hn.ReactCurrentBatchConfig,vr=0,oe=null,_e=null,Se=null,Ea=!1,ns=!1,Ns=0,HE=0;function xe(){throw Error(N(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rt(t[n],e[n]))return!1;return!0}function kd(t,e,n,r,i,s){if(vr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ho.current=t===null||t.memoizedState===null?YE:QE,t=n(r,i),ns){s=0;do{if(ns=!1,Ns=0,25<=s)throw Error(N(301));s+=1,Se=_e=null,e.updateQueue=null,Ho.current=XE,t=n(r,i)}while(ns)}if(Ho.current=Sa,e=_e!==null&&_e.next!==null,vr=0,Se=_e=oe=null,Ea=!1,e)throw Error(N(300));return t}function Nd(){var t=Ns!==0;return Ns=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?oe.memoizedState=Se=t:Se=Se.next=t,Se}function ht(){if(_e===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Se===null?oe.memoizedState:Se.next;if(e!==null)Se=e,_e=t;else{if(t===null)throw Error(N(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Se===null?oe.memoizedState=Se=t:Se=Se.next=t}return Se}function Rs(t,e){return typeof e=="function"?e(t):e}function nu(t){var e=ht(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((vr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,oe.lanes|=d,yr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rt(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ru(t){var e=ht(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rt(s,e.memoizedState)||(He=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function i_(){}function s_(t,e){var n=oe,r=ht(),i=e(),s=!Rt(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,Rd(l_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Ps(9,a_.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(N(349));vr&30||o_(n,e,i)}return i}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a_(t,e,n,r){e.value=n,e.getSnapshot=r,u_(e)&&c_(t)}function l_(t,e,n){return n(function(){u_(e)&&c_(t)})}function u_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rt(t,n)}catch(r){return!0}}function c_(t){var e=on(t,1);e!==null&&Tt(e,t,1,-1)}function Ff(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:t},e.queue=t,t=t.dispatch=qE.bind(null,oe,t),[e.memoizedState,t]}function Ps(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function d_(){return ht().memoizedState}function Go(t,e,n,r){var i=bt();oe.flags|=t,i.memoizedState=Ps(1|e,n,void 0,r===void 0?null:r)}function al(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Td(r,o.deps)){i.memoizedState=Ps(e,n,s,r);return}}oe.flags|=t,i.memoizedState=Ps(1|e,n,s,r)}function Uf(t,e){return Go(8390656,8,t,e)}function Rd(t,e){return al(2048,8,t,e)}function h_(t,e){return al(4,2,t,e)}function f_(t,e){return al(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,al(4,4,p_.bind(null,e,t),n)}function Pd(){}function g_(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Td(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function __(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Td(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function v_(t,e,n){return vr&21?(Rt(n,e)||(n=Cg(),oe.lanes|=n,yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function GE(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=tu.transition;tu.transition={};try{t(!1),e()}finally{K=n,tu.transition=r}}function y_(){return ht().memoizedState}function KE(t,e,n){var r=Dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w_(t))E_(e,n);else if(n=t_(t,e,n,r),n!==null){var i=je();Tt(n,t,r,i),S_(n,e,r)}}function qE(t,e,n){var r=Dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w_(t))E_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rt(a,o)){var l=e.interleaved;l===null?(i.next=i,wd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch(u){}finally{}n=t_(t,e,i,r),n!==null&&(i=je(),Tt(n,t,r,i),S_(n,e,r))}}function w_(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function E_(t,e){ns=Ea=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,od(t,n)}}var Sa={readContext:dt,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},YE={readContext:dt,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:Uf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Go(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Go(4194308,4,t,e)},useInsertionEffect:function(t,e){return Go(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KE.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:Ff,useDebugValue:Pd,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=Ff(!1),e=t[0];return t=GE.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=bt();if(te){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),Te===null)throw Error(N(349));vr&30||o_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uf(l_.bind(null,r,s,t),[t]),r.flags|=2048,Ps(9,a_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bt(),e=Te.identifierPrefix;if(te){var n=Qt,r=Yt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QE={readContext:dt,useCallback:g_,useContext:dt,useEffect:Rd,useImperativeHandle:m_,useInsertionEffect:h_,useLayoutEffect:f_,useMemo:__,useReducer:nu,useRef:d_,useState:function(){return nu(Rs)},useDebugValue:Pd,useDeferredValue:function(t){var e=ht();return v_(e,_e.memoizedState,t)},useTransition:function(){var t=nu(Rs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:s_,useId:y_,unstable_isNewReconciler:!1},XE={readContext:dt,useCallback:g_,useContext:dt,useEffect:Rd,useImperativeHandle:m_,useInsertionEffect:h_,useLayoutEffect:f_,useMemo:__,useReducer:ru,useRef:d_,useState:function(){return ru(Rs)},useDebugValue:Pd,useDeferredValue:function(t){var e=ht();return _e===null?e.memoizedState=t:v_(e,_e.memoizedState,t)},useTransition:function(){var t=ru(Rs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:s_,useId:y_,unstable_isNewReconciler:!1};function yt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function oc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ll={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=je(),i=Dn(t),s=tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(Tt(e,t,i,r),Vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=je(),i=Dn(t),s=tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(Tt(e,t,i,r),Vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),r=Dn(t),i=tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=On(t,i,r),e!==null&&(Tt(e,t,r,n),Vo(e,t,r))}};function jf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Es(n,r)||!Es(i,s):!0}function C_(t,e,n){var r=!1,i=Wn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=qe(e)?gr:De.current,r=e.contextTypes,s=(r=r!=null)?ui(t,i):Wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ll.enqueueReplaceState(e,e.state,null)}function ac(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ed(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=qe(e)?gr:De.current,i.context=ui(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(oc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ll.enqueueReplaceState(i,i.state,null),ya(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e){try{var n="",r=e;do n+=T0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function iu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function lc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JE=typeof WeakMap=="function"?WeakMap:Map;function I_(t,e,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ia||(Ia=!0,vc=r),lc(t,e)},n}function T_(t,e,n){n=tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lc(t,e),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hS.bind(null,t,e,n),e.then(t,t))}function $f(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tn(-1,1),e.tag=2,On(n,e,1))),n.lanes|=1),t)}var ZE=hn.ReactCurrentOwner,He=!1;function Fe(t,e,n,r){e.child=t===null?e_(e,null,n,r):di(e,t.child,n,r)}function Vf(t,e,n,r,i){n=n.render;var s=e.ref;return ei(e,i),r=kd(t,e,n,r,s,i),n=Nd(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,an(t,e,i)):(te&&n&&pd(e),e.flags|=1,Fe(t,e,r,i),e.child)}function Hf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,k_(t,e,s,r,i)):(t=Qo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Es,n(o,r)&&t.ref===e.ref)return an(t,e,i)}return e.flags|=1,t=Ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function k_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Es(s,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,an(t,e,i)}return uc(t,e,n,r,i)}function N_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(qr,Xe),Xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(qr,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(qr,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(qr,Xe),Xe|=r;return Fe(t,e,i,n),e.child}function R_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uc(t,e,n,r,i){var s=qe(n)?gr:De.current;return s=ui(e,s),ei(e,i),n=kd(t,e,n,r,s,i),r=Nd(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,an(t,e,i)):(te&&r&&pd(e),e.flags|=1,Fe(t,e,n,i),e.child)}function Gf(t,e,n,r,i){if(qe(n)){var s=!0;pa(e)}else s=!1;if(ei(e,i),e.stateNode===null)Ko(t,e),C_(e,n,r),ac(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=qe(n)?gr:De.current,u=ui(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&zf(e,o,r,u),vn=!1;var h=e.memoizedState;o.state=h,ya(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ke.current||vn?(typeof d=="function"&&(oc(e,n,d,r),l=e.memoizedState),(a=vn||jf(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,n_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yt(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dt(l):(l=qe(n)?gr:De.current,l=ui(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&zf(e,o,r,l),vn=!1,h=e.memoizedState,o.state=h,ya(e,r,o,i);var v=e.memoizedState;a!==c||h!==v||Ke.current||vn?(typeof g=="function"&&(oc(e,n,g,r),v=e.memoizedState),(u=vn||jf(e,n,u,r,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return cc(t,e,n,r,s,i)}function cc(t,e,n,r,i,s){R_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xf(e,n,!1),an(t,e,s);r=e.stateNode,ZE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=di(e,t.child,null,s),e.child=di(e,null,a,s)):Fe(t,e,a,s),e.memoizedState=r.state,i&&xf(e,n,!0),e.child}function P_(t){var e=t.stateNode;e.pendingContext?Af(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Af(t,e.context,!1),Sd(t,e.containerInfo)}function Kf(t,e,n,r,i){return ci(),gd(i),e.flags|=256,Fe(t,e,n,r),e.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function A_(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(re,i&1),t===null)return ic(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dl(o,r,0,null),t=pr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hc(n),e.memoizedState=dc,t):Ad(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ln(a,s):(s=pr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dc,r}return s=t.child,t=s.sibling,r=Ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ad(t,e){return e=dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ko(t,e,n,r){return r!==null&&gd(r),di(e,t.child,null,n),t=Ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=iu(Error(N(422))),ko(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dl({mode:"visible",children:r.children},i,0,null),s=pr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&di(e,t.child,null,o),e.child.memoizedState=hc(o),e.memoizedState=dc,s);if(!(e.mode&1))return ko(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=iu(s,r,void 0),ko(t,e,o,r)}if(a=(o&t.childLanes)!==0,He||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,on(t,i),Tt(r,t,i,-1))}return Md(),r=iu(Error(N(421))),ko(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Je=xn(i.nextSibling),Ze=e,te=!0,Et=null,t!==null&&(it[st++]=Yt,it[st++]=Qt,it[st++]=_r,Yt=t.id,Qt=t.overflow,_r=e),e=Ad(e,r.children),e.flags|=4096,e)}function qf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sc(t.return,e,n)}function su(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function x_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qf(t,n,e);else if(t.tag===19)qf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),su(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}su(e,!0,n,null,s);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function an(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=Ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tS(t,e,n){switch(e.tag){case 3:P_(e),ci();break;case 5:r_(e);break;case 1:qe(e.type)&&pa(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(_a,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?A_(t,e,n):(J(re,re.current&1),t=an(t,e,n),t!==null?t.sibling:null);J(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return x_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,N_(t,e,n)}return an(t,e,n)}var O_,fc,b_,D_;O_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fc=function(){};b_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ar(Ft.current);var s=null;switch(n){case"input":i=Lu(t,i),r=Lu(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Uu(t,i),r=Uu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ha)}zu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ps.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ps.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};D_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ji(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nS(t,e,n){var r=e.pendingProps;switch(md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return qe(e.type)&&fa(),Oe(e),null;case 3:return r=e.stateNode,hi(),ee(Ke),ee(De),Id(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Et!==null&&(Ec(Et),Et=null))),fc(t,e),Oe(e),null;case 5:Cd(e);var i=ar(ks.current);if(n=e.type,t!==null&&e.stateNode!=null)b_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Oe(e),null}if(t=ar(Ft.current),Io(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dt]=e,r[Is]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<qi.length;i++)Z(qi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":nf(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":sf(r,s),Z("invalid",r)}zu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Co(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Co(r.textContent,a,t),i=["children",""+a]):ps.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":mo(r),rf(r,s,!0);break;case"textarea":mo(r),of(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ha)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dt]=e,t[Is]=r,O_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wu(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<qi.length;i++)Z(qi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":nf(t,r),i=Lu(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),Z("invalid",t);break;case"textarea":sf(t,r),i=Uu(t,r),Z("invalid",t);break;default:i=r}zu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ug(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ms(t,l):typeof l=="number"&&ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ps.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&ed(t,s,l,o))}switch(n){case"input":mo(t),rf(t,r,!1);break;case"textarea":mo(t),of(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)D_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=ar(ks.current),ar(Ft.current),Io(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dt]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:Co(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=e,e.stateNode=r}return Oe(e),null;case 13:if(ee(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&Je!==null&&e.mode&1&&!(e.flags&128))Jg(),ci(),e.flags|=98560,s=!1;else if(s=Io(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Dt]=e}else ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else Et!==null&&(Ec(Et),Et=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?ye===0&&(ye=3):Md())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return hi(),fc(t,e),t===null&&Ss(e.stateNode.containerInfo),Oe(e),null;case 10:return yd(e.type._context),Oe(e),null;case 17:return qe(e.type)&&fa(),Oe(e),null;case 19:if(ee(re),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ji(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wa(t),o!==null){for(e.flags|=128,ji(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>pi&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304)}else{if(!r)if(t=wa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Oe(e),null}else 2*fe()-s.renderingStartTime>pi&&n!==1073741824&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=re.current,J(re,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return Ld(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function rS(t,e){switch(md(e),e.tag){case 1:return qe(e.type)&&fa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hi(),ee(Ke),ee(De),Id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(ee(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(re),null;case 4:return hi(),null;case 10:return yd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var No=!1,be=!1,iS=typeof WeakSet=="function"?WeakSet:Set,x=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function pc(t,e,n){try{n()}catch(r){ce(t,e,r)}}var Yf=!1;function sS(t,e){if(Xu=ua,t=jg(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(w){n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ju={focusedElem:t,selectionRange:n},ua=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var p=v.memoizedProps,E=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:yt(e.type,p),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=Yf,Yf=!1,v}function rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pc(e,n,s)}i=i.next}while(i!==r)}}function ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L_(t){var e=t.alternate;e!==null&&(t.alternate=null,L_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dt],delete e[Is],delete e[tc],delete e[WE],delete e[$E])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function M_(t){return t.tag===5||t.tag===3||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ha));else if(r!==4&&(t=t.child,t!==null))for(gc(t,e,n),t=t.sibling;t!==null;)gc(t,e,n),t=t.sibling}function _c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_c(t,e,n),t=t.sibling;t!==null;)_c(t,e,n),t=t.sibling}var Ne=null,wt=!1;function mn(t,e,n){for(n=n.child;n!==null;)F_(t,e,n),n=n.sibling}function F_(t,e,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(tl,n)}catch(a){}switch(n.tag){case 5:be||Kr(n,e);case 6:var r=Ne,i=wt;Ne=null,mn(t,e,n),Ne=r,wt=i,Ne!==null&&(wt?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(wt?(t=Ne,n=n.stateNode,t.nodeType===8?Jl(t.parentNode,n):t.nodeType===1&&Jl(t,n),ys(t)):Jl(Ne,n.stateNode));break;case 4:r=Ne,i=wt,Ne=n.stateNode.containerInfo,wt=!0,mn(t,e,n),Ne=r,wt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pc(n,e,o),i=i.next}while(i!==r)}mn(t,e,n);break;case 1:if(!be&&(Kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}mn(t,e,n);break;case 21:mn(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,mn(t,e,n),be=r):mn(t,e,n);break;default:mn(t,e,n)}}function Xf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iS),e.forEach(function(r){var i=pS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,wt=!1;break e;case 3:Ne=a.stateNode.containerInfo,wt=!0;break e;case 4:Ne=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(Ne===null)throw Error(N(160));F_(s,o,i),Ne=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U_(e,t),e=e.sibling}function U_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gt(e,t),xt(t),r&4){try{rs(3,t,t.return),ul(3,t)}catch(p){ce(t,t.return,p)}try{rs(5,t,t.return)}catch(p){ce(t,t.return,p)}}break;case 1:gt(e,t),xt(t),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(gt(e,t),xt(t),r&512&&n!==null&&Kr(n,n.return),t.flags&32){var i=t.stateNode;try{ms(i,"")}catch(p){ce(t,t.return,p)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&og(i,s),Wu(a,o);var u=Wu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?dg(i,c):d==="dangerouslySetInnerHTML"?ug(i,c):d==="children"?ms(i,c):ed(i,d,c,u)}switch(a){case"input":Mu(i,s);break;case"textarea":ag(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Qr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qr(i,!!s.multiple,s.defaultValue,!0):Qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Is]=s}catch(p){ce(t,t.return,p)}}break;case 6:if(gt(e,t),xt(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(p){ce(t,t.return,p)}}break;case 3:if(gt(e,t),xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ys(e.containerInfo)}catch(p){ce(t,t.return,p)}break;case 4:gt(e,t),xt(t);break;case 13:gt(e,t),xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bd=fe())),r&4&&Xf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||d,gt(e,t),be=u):gt(e,t),xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(x=t,d=t.child;d!==null;){for(c=x=d;x!==null;){switch(h=x,g=h.child,h.tag){case 0:case 11:case 14:case 15:rs(4,h,h.return);break;case 1:Kr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(p){ce(r,n,p)}}break;case 5:Kr(h,h.return);break;case 22:if(h.memoizedState!==null){Zf(c);continue}}g!==null?(g.return=h,x=g):Zf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cg("display",o))}catch(p){ce(t,t.return,p)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(p){ce(t,t.return,p)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:gt(e,t),xt(t),r&4&&Xf(t);break;case 21:break;default:gt(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(M_(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ms(i,""),r.flags&=-33);var s=Qf(t);_c(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qf(t);gc(t,a,o);break;default:throw Error(N(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oS(t,e,n){x=t,j_(t)}function j_(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||No;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=No;var u=be;if(No=o,(be=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?ep(i):l!==null?(l.return=o,x=l):ep(i);for(;s!==null;)x=s,j_(s),s=s.sibling;x=i,No=a,be=u}Jf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Jf(t)}}function Jf(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ys(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}be||e.flags&512&&mc(e)}catch(h){ce(e,e.return,h)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Zf(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function ep(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ul(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{mc(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{mc(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var aS=Math.ceil,Ca=hn.ReactCurrentDispatcher,xd=hn.ReactCurrentOwner,ut=hn.ReactCurrentBatchConfig,V=0,Te=null,me=null,Re=0,Xe=0,qr=Kn(0),ye=0,As=null,yr=0,cl=0,Od=0,is=null,Ve=null,bd=0,pi=1/0,Gt=null,Ia=!1,vc=null,bn=null,Ro=!1,Tn=null,Ta=0,ss=0,yc=null,qo=-1,Yo=0;function je(){return V&6?fe():qo!==-1?qo:qo=fe()}function Dn(t){return t.mode&1?V&2&&Re!==0?Re&-Re:VE.transition!==null?(Yo===0&&(Yo=Cg()),Yo):(t=K,t!==0||(t=window.event,t=t===void 0?16:Ag(t.type)),t):1}function Tt(t,e,n,r){if(50<ss)throw ss=0,yc=null,Error(N(185));qs(t,n,r),(!(V&2)||t!==Te)&&(t===Te&&(!(V&2)&&(cl|=n),ye===4&&wn(t,Re)),Ye(t,r),n===1&&V===0&&!(e.mode&1)&&(pi=fe()+500,ol&&qn()))}function Ye(t,e){var n=t.callbackNode;V0(t,e);var r=la(t,t===Te?Re:0);if(r===0)n!==null&&uf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&uf(n),e===1)t.tag===0?BE(tp.bind(null,t)):Yg(tp.bind(null,t)),jE(function(){!(V&6)&&qn()}),n=null;else{switch(Ig(r)){case 1:n=sd;break;case 4:n=Eg;break;case 16:n=aa;break;case 536870912:n=Sg;break;default:n=aa}n=K_(n,z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z_(t,e){if(qo=-1,Yo=0,V&6)throw Error(N(327));var n=t.callbackNode;if(ti()&&t.callbackNode!==n)return null;var r=la(t,t===Te?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ka(t,r);else{e=r;var i=V;V|=2;var s=$_();(Te!==t||Re!==e)&&(Gt=null,pi=fe()+500,fr(t,e));do try{cS();break}catch(a){W_(t,a)}while(!0);vd(),Ca.current=s,V=i,me!==null?e=0:(Te=null,Re=0,e=ye)}if(e!==0){if(e===2&&(i=Gu(t),i!==0&&(r=i,e=wc(t,i))),e===1)throw n=As,fr(t,0),wn(t,r),Ye(t,fe()),n;if(e===6)wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!lS(i)&&(e=ka(t,r),e===2&&(s=Gu(t),s!==0&&(r=s,e=wc(t,s))),e===1))throw n=As,fr(t,0),wn(t,r),Ye(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:tr(t,Ve,Gt);break;case 3:if(wn(t,r),(r&130023424)===r&&(e=bd+500-fe(),10<e)){if(la(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ec(tr.bind(null,t,Ve,Gt),e);break}tr(t,Ve,Gt);break;case 4:if(wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-It(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aS(r/1960))-r,10<r){t.timeoutHandle=ec(tr.bind(null,t,Ve,Gt),r);break}tr(t,Ve,Gt);break;case 5:tr(t,Ve,Gt);break;default:throw Error(N(329))}}}return Ye(t,fe()),t.callbackNode===n?z_.bind(null,t):null}function wc(t,e){var n=is;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=ka(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&Ec(e)),t}function Ec(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function lS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rt(s(),i))return!1}catch(o){return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e){for(e&=~Od,e&=~cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-It(e),r=1<<n;t[n]=-1,e&=~r}}function tp(t){if(V&6)throw Error(N(327));ti();var e=la(t,0);if(!(e&1))return Ye(t,fe()),null;var n=ka(t,e);if(t.tag!==0&&n===2){var r=Gu(t);r!==0&&(e=r,n=wc(t,r))}if(n===1)throw n=As,fr(t,0),wn(t,e),Ye(t,fe()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,Ve,Gt),Ye(t,fe()),null}function Dd(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(pi=fe()+500,ol&&qn())}}function wr(t){Tn!==null&&Tn.tag===0&&!(V&6)&&ti();var e=V;V|=1;var n=ut.transition,r=K;try{if(ut.transition=null,K=1,t)return t()}finally{K=r,ut.transition=n,V=e,!(V&6)&&qn()}}function Ld(){Xe=qr.current,ee(qr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UE(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fa();break;case 3:hi(),ee(Ke),ee(De),Id();break;case 5:Cd(r);break;case 4:hi();break;case 13:ee(re);break;case 19:ee(re);break;case 10:yd(r.type._context);break;case 22:case 23:Ld()}n=n.return}if(Te=t,me=t=Ln(t.current,null),Re=Xe=e,ye=0,As=null,Od=cl=yr=0,Ve=is=null,or!==null){for(e=0;e<or.length;e++)if(n=or[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}or=null}return t}function W_(t,e){do{var n=me;try{if(vd(),Ho.current=Sa,Ea){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ea=!1}if(vr=0,Se=_e=oe=null,ns=!1,Ns=0,xd.current=null,n===null||n.return===null){ye=1,As=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=$f(o);if(g!==null){g.flags&=-257,Bf(g,o,a,s,e),g.mode&1&&Wf(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var p=new Set;p.add(l),e.updateQueue=p}else v.add(l);break e}else{if(!(e&1)){Wf(s,u,e),Md();break e}l=Error(N(426))}}else if(te&&a.mode&1){var E=$f(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Bf(E,o,a,s,e),gd(fi(l,a));break e}}s=l=fi(l,a),ye!==4&&(ye=2),is===null?is=[s]:is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=I_(s,l,e);Lf(s,m);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(bn===null||!bn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=T_(s,a,e);Lf(s,w);break e}}s=s.return}while(s!==null)}V_(n)}catch(T){e=T,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function $_(){var t=Ca.current;return Ca.current=Sa,t===null?Sa:t}function Md(){(ye===0||ye===3||ye===2)&&(ye=4),Te===null||!(yr&268435455)&&!(cl&268435455)||wn(Te,Re)}function ka(t,e){var n=V;V|=2;var r=$_();(Te!==t||Re!==e)&&(Gt=null,fr(t,e));do try{uS();break}catch(i){W_(t,i)}while(!0);if(vd(),V=n,Ca.current=r,me!==null)throw Error(N(261));return Te=null,Re=0,ye}function uS(){for(;me!==null;)B_(me)}function cS(){for(;me!==null&&!L0();)B_(me)}function B_(t){var e=G_(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?V_(t):me=e,xd.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,me=null;return}}else if(n=nS(n,e,Xe),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ye===0&&(ye=5)}function tr(t,e,n){var r=K,i=ut.transition;try{ut.transition=null,K=1,dS(t,e,n,r)}finally{ut.transition=i,K=r}return null}function dS(t,e,n,r){do ti();while(Tn!==null);if(V&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(H0(t,s),t===Te&&(me=Te=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,K_(aa,function(){return ti(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=K;K=1;var a=V;V|=4,xd.current=null,sS(t,n),U_(n,t),xE(Ju),ua=!!Xu,Ju=Xu=null,t.current=n,oS(n),M0(),V=a,K=o,ut.transition=s}else t.current=n;if(Ro&&(Ro=!1,Tn=t,Ta=i),s=t.pendingLanes,s===0&&(bn=null),j0(n.stateNode),Ye(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ia)throw Ia=!1,t=vc,vc=null,t;return Ta&1&&t.tag!==0&&ti(),s=t.pendingLanes,s&1?t===yc?ss++:(ss=0,yc=t):ss=0,qn(),null}function ti(){if(Tn!==null){var t=Ig(Ta),e=ut.transition,n=K;try{if(ut.transition=null,K=16>t?16:t,Tn===null)var r=!1;else{if(t=Tn,Tn=null,Ta=0,V&6)throw Error(N(331));var i=V;for(V|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var d=x;switch(d.tag){case 0:case 11:case 15:rs(8,d,s)}var c=d.child;if(c!==null)c.return=d,x=c;else for(;x!==null;){d=x;var h=d.sibling,g=d.return;if(L_(d),d===u){x=null;break}if(h!==null){h.return=g,x=h;break}x=g}}}var v=s.alternate;if(v!==null){var p=v.child;if(p!==null){v.child=null;do{var E=p.sibling;p.sibling=null,p=E}while(p!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,x=_;else e:for(o=f;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(T){ce(a,a.return,T)}if(a===o){x=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,x=w;break e}x=a.return}}if(V=i,qn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(tl,t)}catch(T){}r=!0}return r}finally{K=n,ut.transition=e}}return!1}function np(t,e,n){e=fi(n,e),e=I_(t,e,1),t=On(t,e,1),e=je(),t!==null&&(qs(t,1,e),Ye(t,e))}function ce(t,e,n){if(t.tag===3)np(t,t,n);else for(;e!==null;){if(e.tag===3){np(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){t=fi(n,t),t=T_(e,t,1),e=On(e,t,1),t=je(),e!==null&&(qs(e,1,t),Ye(e,t));break}}e=e.return}}function hS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Re&n)===n&&(ye===4||ye===3&&(Re&130023424)===Re&&500>fe()-bd?fr(t,0):Od|=n),Ye(t,e)}function H_(t,e){e===0&&(t.mode&1?(e=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):e=1);var n=je();t=on(t,e),t!==null&&(qs(t,e,n),Ye(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H_(t,n)}function pS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),H_(t,n)}var G_;G_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,tS(t,e,n);He=!!(t.flags&131072)}else He=!1,te&&e.flags&1048576&&Qg(e,ga,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ko(t,e),t=e.pendingProps;var i=ui(e,De.current);ei(e,n),i=kd(null,e,r,t,i,n);var s=Nd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)?(s=!0,pa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ed(e),i.updater=ll,e.stateNode=i,i._reactInternals=e,ac(e,r,t,n),e=cc(null,e,r,!0,s,n)):(e.tag=0,te&&s&&pd(e),Fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ko(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gS(r),t=yt(r,t),i){case 0:e=uc(null,e,r,t,n);break e;case 1:e=Gf(null,e,r,t,n);break e;case 11:e=Vf(null,e,r,t,n);break e;case 14:e=Hf(null,e,r,yt(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),uc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Gf(t,e,r,i,n);case 3:e:{if(P_(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,n_(t,e),ya(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fi(Error(N(423)),e),e=Kf(t,e,r,n,i);break e}else if(r!==i){i=fi(Error(N(424)),e),e=Kf(t,e,r,n,i);break e}else for(Je=xn(e.stateNode.containerInfo.firstChild),Ze=e,te=!0,Et=null,n=e_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ci(),r===i){e=an(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return r_(e),t===null&&ic(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zu(r,i)?o=null:s!==null&&Zu(r,s)&&(e.flags|=32),R_(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&ic(e),null;case 13:return A_(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=di(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Vf(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(_a,r._currentValue),r._currentValue=o,s!==null)if(Rt(s.value,o)){if(s.children===i.children&&!Ke.current){e=an(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=tn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ei(e,n),i=dt(i),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,i=yt(r,e.pendingProps),i=yt(r.type,i),Hf(t,e,r,i,n);case 15:return k_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Ko(t,e),e.tag=1,qe(r)?(t=!0,pa(e)):t=!1,ei(e,n),C_(e,r,i),ac(e,r,i,n),cc(null,e,r,!0,t,n);case 19:return x_(t,e,n);case 22:return N_(t,e,n)}throw Error(N(156,e.tag))};function K_(t,e){return wg(t,e)}function mS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,n,r){return new mS(t,e,n,r)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gS(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nd)return 11;if(t===rd)return 14}return 2}function Ln(t,e){var n=t.alternate;return n===null?(n=ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ur:return pr(n.children,i,s,e);case td:o=8,i|=8;break;case xu:return t=ot(12,n,e,i|2),t.elementType=xu,t.lanes=s,t;case Ou:return t=ot(13,n,e,i),t.elementType=Ou,t.lanes=s,t;case bu:return t=ot(19,n,e,i),t.elementType=bu,t.lanes=s,t;case rg:return dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tg:o=10;break e;case ng:o=9;break e;case nd:o=11;break e;case rd:o=14;break e;case _n:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pr(t,e,n,r){return t=ot(7,t,r,e),t.lanes=n,t}function dl(t,e,n,r){return t=ot(22,t,r,e),t.elementType=rg,t.lanes=n,t.stateNode={isHidden:!1},t}function ou(t,e,n){return t=ot(6,t,null,e),t.lanes=n,t}function au(t,e,n){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _S(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,r,i,s,o,a,l){return t=new _S(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(s),t}function vS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function q_(t){if(!t)return Wn;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(qe(n))return qg(t,n,e)}return e}function Y_(t,e,n,r,i,s,o,a,l){return t=Ud(n,r,!0,t,i,s,o,a,l),t.context=q_(null),n=t.current,r=je(),i=Dn(n),s=tn(r,i),s.callback=e!=null?e:null,On(n,s,i),t.current.lanes=i,qs(t,i,r),Ye(t,r),t}function hl(t,e,n,r){var i=e.current,s=je(),o=Dn(i);return n=q_(n),e.context===null?e.context=n:e.pendingContext=n,e=tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=On(i,e,o),t!==null&&(Tt(t,i,o,s),Vo(t,i,o)),o}function Na(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jd(t,e){rp(t,e),(t=t.alternate)&&rp(t,e)}function yS(){return null}var Q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function zd(t){this._internalRoot=t}fl.prototype.render=zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));hl(t,e,null,null)};fl.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){hl(null,t,null,null)}),e[sn]=null}};function fl(t){this._internalRoot=t}fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yn.length&&e!==0&&e<yn[n].priority;n++);yn.splice(n,0,t),n===0&&Pg(t)}};function Wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ip(){}function wS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Na(o);s.call(u)}}var o=Y_(e,r,t,0,null,!1,!1,"",ip);return t._reactRootContainer=o,t[sn]=o.current,Ss(t.nodeType===8?t.parentNode:t),wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Na(l);a.call(u)}}var l=Ud(t,0,!1,null,null,!1,!1,"",ip);return t._reactRootContainer=l,t[sn]=l.current,Ss(t.nodeType===8?t.parentNode:t),wr(function(){hl(e,l,n,r)}),l}function ml(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Na(o);a.call(l)}}hl(e,o,t,i)}else o=wS(n,e,t,i,r);return Na(o)}Tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ki(e.pendingLanes);n!==0&&(od(e,n|1),Ye(e,fe()),!(V&6)&&(pi=fe()+500,qn()))}break;case 13:wr(function(){var r=on(t,1);if(r!==null){var i=je();Tt(r,t,1,i)}}),jd(t,1)}};ad=function(t){if(t.tag===13){var e=on(t,134217728);if(e!==null){var n=je();Tt(e,t,134217728,n)}jd(t,134217728)}};kg=function(t){if(t.tag===13){var e=Dn(t),n=on(t,e);if(n!==null){var r=je();Tt(n,t,e,r)}jd(t,e)}};Ng=function(){return K};Rg=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};Bu=function(t,e,n){switch(e){case"input":if(Mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sl(r);if(!i)throw Error(N(90));sg(r),Mu(r,i)}}}break;case"textarea":ag(t,n);break;case"select":e=n.value,e!=null&&Qr(t,!!n.multiple,e,!1)}};pg=Dd;mg=wr;var ES={usingClientEntryPoint:!1,Events:[Qs,$r,sl,hg,fg,Dd]},zi={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SS={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vg(t),t===null?null:t.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||yS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{tl=Po.inject(SS),Mt=Po}catch(t){}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(N(200));return vS(t,e,null,n)};nt.createRoot=function(t,e){if(!Wd(t))throw Error(N(299));var n=!1,r="",i=Q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,r,i),t[sn]=e.current,Ss(t.nodeType===8?t.parentNode:t),new zd(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=vg(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return wr(t)};nt.hydrate=function(t,e,n){if(!pl(e))throw Error(N(200));return ml(null,t,e,!0,n)};nt.hydrateRoot=function(t,e,n){if(!Wd(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Q_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[sn]=e.current,Ss(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fl(e)};nt.render=function(t,e,n){if(!pl(e))throw Error(N(200));return ml(null,t,e,!1,n)};nt.unmountComponentAtNode=function(t){if(!pl(t))throw Error(N(40));return t._reactRootContainer?(wr(function(){ml(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1};nt.unstable_batchedUpdates=Dd;nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pl(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return ml(t,e,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(t){console.error(t)}}X_(),Xm.exports=nt;var CS=Xm.exports,sp=CS;Pu.createRoot=sp.createRoot,Pu.hydrateRoot=sp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xs.apply(this,arguments)}var kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kn||(kn={}));const op="popstate";function IS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Pr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Sc("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:J_(s))}function r(i,s){$d(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return kS(e,n,r,t)}function ge(t,e){if(t===!1||t===null||typeof t=="undefined")throw new Error(e)}function $d(t,e){if(!t){typeof console!="undefined"&&console.warn(e);try{throw new Error(e)}catch(n){}}}function TS(){return Math.random().toString(36).substr(2,8)}function ap(t,e){return{usr:t.state,key:t.key,idx:e}}function Sc(t,e,n,r){return n===void 0&&(n=null),xs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Pr(e):e,{state:n,key:e&&e.key||r||TS()})}function J_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Pr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function kS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=kn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(xs({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=kn.Pop;let E=d(),m=E==null?null:E-u;u=E,l&&l({action:a,location:p.location,delta:m})}function h(E,m){a=kn.Push;let f=Sc(p.location,E,m);n&&n(f,E),u=d()+1;let _=ap(f,u),w=p.createHref(f);try{o.pushState(_,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:p.location,delta:1})}function g(E,m){a=kn.Replace;let f=Sc(p.location,E,m);n&&n(f,E),u=d();let _=ap(f,u),w=p.createHref(f);o.replaceState(_,"",w),s&&l&&l({action:a,location:p.location,delta:0})}function v(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:J_(E);return f=f.replace(/ $/,"%20"),ge(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let p={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(op,c),l=E,()=>{i.removeEventListener(op,c),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:g,go(E){return o.go(E)}};return p}var lp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lp||(lp={}));function NS(t,e,n){return n===void 0&&(n="/"),RS(t,e,n)}function RS(t,e,n,r){let i=typeof e=="string"?Pr(e):e,s=tv(i.pathname||"/",n);if(s==null)return null;let o=Z_(t);PS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=WS(s);a=US(o[l],u)}return a}function Z_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Z_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:MS(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ev(s.path))i(s,o,l)}),e}function ev(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ev(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AS=/^:[\w-]+$/,xS=3,OS=2,bS=1,DS=10,LS=-2,up=t=>t==="*";function MS(t,e){let n=t.split("/"),r=n.length;return n.some(up)&&(r+=LS),e&&(r+=OS),n.filter(i=>!up(i)).reduce((i,s)=>i+(AS.test(s)?xS:s===""?bS:DS),r)}function FS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function US(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=jS({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:mr([s,c.pathname]),pathnameBase:HS(mr([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=mr([s,c.pathnameBase]))}return o}function jS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let p=a[c]||"";o=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}const v=a[c];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$d(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $d(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function tv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function $S(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Pr(t):t;return{pathname:n?n.startsWith("/")?n:BS(n,e):e,search:GS(r),hash:KS(i)}}function BS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function nv(t,e){let n=VS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Pr(t):(i=xs({},t),ge(!i.pathname||!i.pathname.includes("?"),lu("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),lu("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),lu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=$S(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),HS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,KS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iv=["post","put","patch","delete"];new Set(iv);const YS=["get",...iv];new Set(YS);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Os.apply(this,arguments)}const Bd=R.createContext(null),QS=R.createContext(null),Js=R.createContext(null),gl=R.createContext(null),Yn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),sv=R.createContext(null);function Zs(){return R.useContext(gl)!=null}function Vd(){return Zs()||ge(!1),R.useContext(gl).location}function ov(t){R.useContext(Js).static||R.useLayoutEffect(t)}function Hd(){let{isDataRoute:t}=R.useContext(Yn);return t?cC():XS()}function XS(){Zs()||ge(!1);let t=R.useContext(Bd),{basename:e,future:n,navigator:r}=R.useContext(Js),{matches:i}=R.useContext(Yn),{pathname:s}=Vd(),o=JSON.stringify(nv(i,n.v7_relativeSplatPath)),a=R.useRef(!1);return ov(()=>{a.current=!0}),R.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=rv(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:mr([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function JS(){let{matches:t}=R.useContext(Yn),e=t[t.length-1];return e?e.params:{}}function ZS(t,e){return eC(t,e)}function eC(t,e,n,r){Zs()||ge(!1);let{navigator:i,static:s}=R.useContext(Js),{matches:o}=R.useContext(Yn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=Vd(),c;if(e){var h;let m=typeof e=="string"?Pr(e):e;u==="/"||(h=m.pathname)!=null&&h.startsWith(u)||ge(!1),c=m}else c=d;let g=c.pathname||"/",v=g;if(u!=="/"){let m=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(m.length).join("/")}let p=NS(t,{pathname:v}),E=sC(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:mr([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:mr([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,r);return e&&E?R.createElement(gl.Provider,{value:{location:Os({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:kn.Pop}},E):E}function tC(){let t=uC(),e=qS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,null)}const nC=R.createElement(tC,null);class rC extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(Yn.Provider,{value:this.props.routeContext},R.createElement(sv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iC(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Bd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Yn.Provider,{value:e},r)}function sC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||ge(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,v=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,v=!1,p=null,E=null;n&&(g=a&&c.route.id?a[c.route.id]:void 0,p=c.route.errorElement||nC,l&&(u<0&&h===0?(dC("route-fallback"),v=!0,E=null):u===h&&(v=!0,E=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),f=()=>{let _;return g?_=p:v?_=E:c.route.Component?_=R.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=d,R.createElement(iC,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?R.createElement(rC,{location:n.location,revalidation:n.revalidation,component:p,error:g,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var av=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(av||{}),lv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lv||{});function oC(t){let e=R.useContext(Bd);return e||ge(!1),e}function aC(t){let e=R.useContext(QS);return e||ge(!1),e}function lC(t){let e=R.useContext(Yn);return e||ge(!1),e}function uv(t){let e=lC(),n=e.matches[e.matches.length-1];return n.route.id||ge(!1),n.route.id}function uC(){var t;let e=R.useContext(sv),n=aC(),r=uv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function cC(){let{router:t}=oC(av.UseNavigateStable),e=uv(lv.UseNavigateStable),n=R.useRef(!1);return ov(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Os({fromRouteId:e},s)))},[t,e])}const cp={};function dC(t,e,n){cp[t]||(cp[t]=!0)}function hC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function uu(t){let{to:e,replace:n,state:r,relative:i}=t;Zs()||ge(!1);let{future:s,static:o}=R.useContext(Js),{matches:a}=R.useContext(Yn),{pathname:l}=Vd(),u=Hd(),d=rv(e,nv(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return R.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function Xo(t){ge(!1)}function fC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=kn.Pop,navigator:s,static:o=!1,future:a}=t;Zs()&&ge(!1);let l=e.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:l,navigator:s,static:o,future:Os({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Pr(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:v="default"}=r,p=R.useMemo(()=>{let E=tv(d,l);return E==null?null:{location:{pathname:E,search:c,hash:h,state:g,key:v},navigationType:i}},[l,d,c,h,g,v,i]);return p==null?null:R.createElement(Js.Provider,{value:u},R.createElement(gl.Provider,{children:n,value:p}))}function pC(t){let{children:e,location:n}=t;return ZS(Cc(e),n)}new Promise(()=>{});function Cc(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,Cc(r.props.children,s));return}r.type!==Xo&&ge(!1),!r.props.index||!r.props.children||ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Cc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const mC="6";try{window.__reactRouterVersion=mC}catch(t){}const gC="startTransition",dp=h0[gC];function _C(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=IS({window:i,v5Compat:!0}));let o=s.current,[a,l]=R.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=R.useCallback(c=>{u&&dp?dp(()=>l(c)):l(c)},[l,u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.useEffect(()=>hC(r),[r]),R.createElement(fC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var hp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(hp||(hp={}));var fp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(fp||(fp={}));var pp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Ti(e)},Ti=function(t){return new Error("Firebase Database ("+cv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new yC;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hv=function(t){const e=dv(t);return Gd.encodeByteArray(e,!0)},Ra=function(t){return hv(t).replace(/\./g,"")},Pa=function(t){try{return Gd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){return fv(void 0,t)}function fv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!EC(n)||(t[n]=fv(t[n],e[n]));return t}function EC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=()=>SC().__FIREBASE_DEFAULTS__,IC=()=>{if(typeof process=="undefined"||typeof pp=="undefined")return;const t=pp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TC=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&Pa(t[1]);return e&&JSON.parse(e)},Kd=()=>{try{return CC()||IC()||TC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pv=t=>{var e,n;return(n=(e=Kd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kC=t=>{const e=pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mv=()=>{var t;return(t=Kd())===null||t===void 0?void 0:t.config},gv=t=>{var e;return(e=Kd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ra(JSON.stringify(n)),Ra(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function RC(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Yd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PC(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AC(){return cv.NODE_ADMIN===!0}function Qd(){try{return typeof indexedDB=="object"}catch(t){return!1}}function Xd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vv(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="FirebaseError";class Wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xC,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?OC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,a,r)}}function OC(t,e){return t.replace(bC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=bs(Pa(s[0])||""),n=bs(Pa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(s){}return{header:e,claims:n,data:r,signature:i}},DC=function(t){const e=yv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},LC=function(t){const e=yv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Aa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mp(s)&&mp(o)){if(!Ds(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function FC(t,e){const n=new UC(t,e);return n.subscribe.bind(n)}class UC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cu),i.error===void 0&&(i.error=cu),i.complete===void 0&&(i.complete=cu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cu(){}function gi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_l=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=1e3,$C=2,BC=4*60*60*1e3,VC=.5;function gp(t,e=WC,n=$C){const r=e*Math.pow(n,t),i=Math.round(VC*r*(Math.random()-.5)*2);return Math.min(BC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return t&&t._delegate?t._delegate:t}class Pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KC(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch(n){}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return y(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GC(t){return t===nr?void 0:t}function KC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const YC={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},QC=Y.INFO,XC={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},JC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=QC,this._logHandler=JC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const ZC=(t,e)=>e.some(n=>t instanceof n);let _p,vp;function eI(){return _p||(_p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tI(){return vp||(vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,Ic=new WeakMap,Ev=new WeakMap,du=new WeakMap,Jd=new WeakMap;function nI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wv.set(n,t)}).catch(()=>{}),Jd.set(e,t),e}function rI(t){if(Ic.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let Tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ev.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iI(t){Tc=t(Tc)}function sI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hu(this),e,...n);return Ev.set(r,e.sort?e.sort():[e]),Mn(r)}:tI().includes(t)?function(...e){return t.apply(hu(this),e),Mn(wv.get(this))}:function(...e){return Mn(t.apply(hu(this),e))}}function oI(t){return typeof t=="function"?sI(t):(t instanceof IDBTransaction&&rI(t),ZC(t,eI())?new Proxy(t,Tc):t)}function Mn(t){if(t instanceof IDBRequest)return nI(t);if(du.has(t))return du.get(t);const e=oI(t);return e!==t&&(du.set(t,e),Jd.set(e,t)),e}const hu=t=>Jd.get(t);function Sv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const aI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],fu=new Map;function yp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aI.includes(n)))return;const s=function(o,...a){return y(this,null,function*(){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(yield Promise.all([u[n](...a),i&&l.done]))[0]})};return fu.set(e,s),s}iI(t=>ho(Bt({},t),{get:(e,n,r)=>yp(e,n)||t.get(e,n,r),has:(e,n)=>!!yp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",wp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new vl("@firebase/app"),dI="@firebase/app-compat",hI="@firebase/analytics-compat",fI="@firebase/analytics",pI="@firebase/app-check-compat",mI="@firebase/app-check",gI="@firebase/auth",_I="@firebase/auth-compat",vI="@firebase/database",yI="@firebase/data-connect",wI="@firebase/database-compat",EI="@firebase/functions",SI="@firebase/functions-compat",CI="@firebase/installations",II="@firebase/installations-compat",TI="@firebase/messaging",kI="@firebase/messaging-compat",NI="@firebase/performance",RI="@firebase/performance-compat",PI="@firebase/remote-config",AI="@firebase/remote-config-compat",xI="@firebase/storage",OI="@firebase/storage-compat",bI="@firebase/firestore",DI="@firebase/vertexai-preview",LI="@firebase/firestore-compat",MI="firebase",FI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",UI={[kc]:"fire-core",[dI]:"fire-core-compat",[fI]:"fire-analytics",[hI]:"fire-analytics-compat",[mI]:"fire-app-check",[pI]:"fire-app-check-compat",[gI]:"fire-auth",[_I]:"fire-auth-compat",[vI]:"fire-rtdb",[yI]:"fire-data-connect",[wI]:"fire-rtdb-compat",[EI]:"fire-fn",[SI]:"fire-fn-compat",[CI]:"fire-iid",[II]:"fire-iid-compat",[TI]:"fire-fcm",[kI]:"fire-fcm-compat",[NI]:"fire-perf",[RI]:"fire-perf-compat",[PI]:"fire-rc",[AI]:"fire-rc-compat",[xI]:"fire-gcs",[OI]:"fire-gcs-compat",[bI]:"fire-fst",[LI]:"fire-fst-compat",[DI]:"fire-vertex","fire-js":"fire-js",[MI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map,jI=new Map,Rc=new Map;function Ep(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zt(t){const e=t.name;if(Rc.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of Oa.values())Ep(n,t);for(const n of jI.values())Ep(n,t);return!0}function xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Ar("app","Firebase",zI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=FI;function Cv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=mv()),!n)throw Fn.create("no-options");const s=Oa.get(i);if(s){if(Ds(n,s.options)&&Ds(r,s.config))return s;throw Fn.create("duplicate-app",{appName:i})}const o=new qC(i);for(const l of Rc.values())o.addComponent(l);const a=new WI(n,r,o);return Oa.set(i,a),a}function Zd(t=Nc){const e=Oa.get(t);if(!e&&t===Nc&&mv())return Cv();if(!e)throw Fn.create("no-app",{appName:t});return e}function ct(t,e,n){var r;let i=(r=UI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}zt(new Pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="firebase-heartbeat-database",BI=1,Ls="firebase-heartbeat-store";let pu=null;function Iv(){return pu||(pu=Sv($I,BI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),pu}function VI(t){return y(this,null,function*(){try{const n=(yield Iv()).transaction(Ls),r=yield n.objectStore(Ls).get(Tv(t));return yield n.done,r}catch(e){if(e instanceof Wt)ln.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}})}function Sp(t,e){return y(this,null,function*(){try{const r=(yield Iv()).transaction(Ls,"readwrite");yield r.objectStore(Ls).put(e,Tv(t)),yield r.done}catch(n){if(n instanceof Wt)ln.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}})}function Tv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=1024,GI=30*24*60*60*1e3;class KI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return y(this,null,function*(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=GI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ln.warn(r)}})}getHeartbeatsHeader(){return y(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cp(),{heartbeatsToSend:r,unsentEntries:i}=qI(this._heartbeatsCache.heartbeats),s=Ra(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ln.warn(n),""}})}}function Cp(){return new Date().toISOString().substring(0,10)}function qI(t,e=HI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ip(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return y(this,null,function*(){return Qd()?Xd().then(()=>!0).catch(()=>!1):!1})}read(){return y(this,null,function*(){if(yield this._canUseIndexedDBPromise){const n=yield VI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return y(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Sp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return y(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Sp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function Ip(t){return Ra(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){zt(new Pt("platform-logger",e=>new uI(e),"PRIVATE")),zt(new Pt("heartbeat",e=>new KI(e),"PRIVATE")),ct(kc,wp,t),ct(kc,wp,"esm2017"),ct("fire-js","")}QI("");function eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XI=kv,Nv=new Ar("auth","Firebase",kv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new vl("@firebase/auth");function JI(t,...e){ba.logLevel<=Y.WARN&&ba.warn(`Auth (${Ni}): ${t}`,...e)}function Jo(t,...e){ba.logLevel<=Y.ERROR&&ba.error(`Auth (${Ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,...e){throw nh(t,...e)}function kt(t,...e){return nh(t,...e)}function th(t,e,n){const r=Object.assign(Object.assign({},XI()),{[e]:n});return new Ar("auth","Firebase",r).create(e,{appName:t.name})}function Ut(t){return th(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(t,"argument-error"),th(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nv.create(t,...e)}function U(t,e,...n){if(!t)throw nh(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jo(e),new Error(e)}function un(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eT(){return Tp()==="http:"||Tp()==="https:"}function Tp(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eT()||Yd()||"connection"in navigator)?navigator.onLine:!0}function nT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=qd()||_v()}get(){return tT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=new eo(3e4,6e4);function Qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}function Xn(s,o,a,l){return y(this,arguments,function*(t,e,n,r,i={}){return Pv(t,i,()=>y(this,null,function*(){let u={},d={};r&&(e==="GET"?d=r:u={body:JSON.stringify(r)});const c=ki(Object.assign({key:t.config.apiKey},d)).slice(1),h=yield t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const g=Object.assign({method:e,headers:h},u);return RC()||(g.referrerPolicy="no-referrer"),Rv.fetch()(Av(t,t.config.apiHost,n,c),g)}))})}function Pv(t,e,n){return y(this,null,function*(){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rT),e);try{const i=new oT(t),s=yield Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=yield s.json();if("needConfirmation"in o)throw Ao(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ao(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ao(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw th(t,d,u);ft(t,d)}}catch(i){if(i instanceof Wt)throw i;ft(t,"network-request-failed",{message:String(i)})}})}function to(s,o,a,l){return y(this,arguments,function*(t,e,n,r,i={}){const u=yield Xn(t,e,n,r,i);return"mfaPendingCredential"in u&&ft(t,"multi-factor-auth-required",{_serverResponse:u}),u})}function Av(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rh(t.config,i):`${t.config.apiScheme}://${i}`}function sT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),iT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}function kp(t){return t!==void 0&&t.enterprise!==void 0}class aT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}function lT(t,e){return y(this,null,function*(){return Xn(t,"GET","/v2/recaptchaConfig",Qn(t,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t,e){return y(this,null,function*(){return Xn(t,"POST","/v1/accounts:delete",e)})}function xv(t,e){return y(this,null,function*(){return Xn(t,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function cT(t,e=!1){return y(this,null,function*(){const n=we(t),r=yield n.getIdToken(e),i=ih(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:os(mu(i.auth_time)),issuedAtTime:os(mu(i.iat)),expirationTime:os(mu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function mu(t){return Number(t)*1e3}function ih(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pa(n);return i?JSON.parse(i):(Jo("Failed to decode base64 JWT payload"),null)}catch(i){return Jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Np(t){const e=ih(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e,n=!1){return y(this,null,function*(){if(n)return e;try{return yield e}catch(r){throw r instanceof Wt&&dT(r)&&t.auth.currentUser===t&&(yield t.auth.signOut()),r}})}function dT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(()=>y(this,null,function*(){yield this.iteration()}),n)}iteration(){return y(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){return y(this,null,function*(){var e;const n=t.auth,r=yield t.getIdToken(),i=yield Ms(t,xv(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ov(s.providerUserInfo):[],a=pT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ac(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)})}function fT(t){return y(this,null,function*(){const e=we(t);yield Da(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function pT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ov(t){return t.map(e=>{var{providerId:n}=e,r=eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t,e){return y(this,null,function*(){const n=yield Pv(t,{},()=>y(this,null,function*(){const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Av(t,i,"/v1/token",`key=${s}`),a=yield t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rv.fetch()(o,{method:"POST",headers:a,body:r})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}})}function gT(t,e){return y(this,null,function*(){return Xn(t,"POST","/v2/accounts:revokeToken",Qn(t,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Np(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Np(e);this.updateTokensAndExpiration(e,null,n)}getToken(e,n=!1){return y(this,null,function*(){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,n){return y(this,null,function*(){const{accessToken:r,refreshToken:i,expiresIn:s}=yield mT(e,n);this.updateTokensAndExpiration(r,i,Number(s))})}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ni;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ac(s.createdAt||void 0,s.lastLoginAt||void 0)}getIdToken(e){return y(this,null,function*(){const n=yield Ms(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n})}getIdTokenResult(e){return cT(this,e)}reload(){return fT(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,n=!1){return y(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&(yield Da(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return y(this,null,function*(){if(at(this.auth.app))return Promise.reject(Ut(this.auth));const e=yield this.getIdToken();return yield Ms(this,uT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:w,isAnonymous:T,providerData:k,stsTokenManager:C}=n;U(_&&C,e,"internal-error");const I=ni.fromJSON(this.name,C);U(typeof _=="string",e,"internal-error"),gn(c,e.name),gn(h,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof T=="boolean",e,"internal-error"),gn(g,e.name),gn(v,e.name),gn(p,e.name),gn(E,e.name),gn(m,e.name),gn(f,e.name);const b=new Jt({uid:_,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:g,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:f});return k&&Array.isArray(k)&&(b.providerData=k.map(O=>Object.assign({},O))),E&&(b._redirectEventId=E),b}static _fromIdTokenResponse(e,n,r=!1){return y(this,null,function*(){const i=new ni;i.updateFromServerResponse(n);const s=new Jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return yield Da(s),s})}static _fromGetAccountInfoResponse(e,n,r){return y(this,null,function*(){const i=n.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ov(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ni;a.updateFromIdToken(r);const l=new Jt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ac(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Map;function Zt(t){un(t instanceof Function,"Expected a class definition");let e=Rp.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return y(this,null,function*(){return!0})}_set(e,n){return y(this,null,function*(){this.storage[e]=n})}_get(e){return y(this,null,function*(){const n=this.storage[e];return n===void 0?null:n})}_remove(e){return y(this,null,function*(){delete this.storage[e]})}_addListener(e,n){}_removeListener(e,n){}}bv.type="NONE";const Pp=bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return y(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return y(this,null,function*(){if(this.persistence===e)return;const n=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,n,r="authUser"){return y(this,null,function*(){if(!n.length)return new ri(Zt(Pp),e,r);const i=(yield Promise.all(n.map(u=>y(this,null,function*(){if(yield u._isAvailable())return u})))).filter(u=>u);let s=i[0]||Zt(Pp);const o=Zo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=yield u._get(o);if(d){const c=Jt._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch(d){}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ri(s,e,r):(s=l[0],a&&(yield s._set(o,a.toJSON())),yield Promise.all(n.map(u=>y(this,null,function*(){if(u!==s)try{yield u._remove(o)}catch(d){}}))),new ri(s,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jv(e))return"Blackberry";if(zv(e))return"Webos";if(Lv(e))return"Safari";if((e.includes("chrome/")||Mv(e))&&!e.includes("edge/"))return"Chrome";if(Uv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dv(t=We()){return/firefox\//i.test(t)}function Lv(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mv(t=We()){return/crios\//i.test(t)}function Fv(t=We()){return/iemobile/i.test(t)}function Uv(t=We()){return/android/i.test(t)}function jv(t=We()){return/blackberry/i.test(t)}function zv(t=We()){return/webos/i.test(t)}function sh(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _T(t=We()){var e;return sh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vT(){return PC()&&document.documentMode===10}function Wv(t=We()){return sh(t)||Uv(t)||zv(t)||jv(t)||/windows phone/i.test(t)||Fv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t,e=[]){let n;switch(t){case"Browser":n=Ap(We());break;case"Worker":n=`${Ap(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return y(this,null,function*(){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)yield r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(n){return y(this,arguments,function*(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Qn(t,e))})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=6;class ST{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ET,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xp(this),this.idTokenSubscription=new xp(this),this.beforeStateQueue=new yT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(()=>y(this,null,function*(){var r,i;if(!this._deleted&&(this.persistenceManager=yield ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(s){}yield this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return y(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return y(this,null,function*(){try{const n=yield xv(this,{idToken:e}),r=yield Jt._fromGetAccountInfoResponse(this,n,e);yield this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return y(this,null,function*(){var n;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=yield this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=yield this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)})}tryRedirectSignIn(e){return y(this,null,function*(){let n=null;try{n=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return n})}reloadAndSetCurrentUserOrClear(e){return y(this,null,function*(){try{yield Da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=nT()}_delete(){return y(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return y(this,null,function*(){if(at(this.app))return Promise.reject(Ut(this));const n=e?we(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))})}_updateCurrentUser(e,n=!1){return y(this,null,function*(){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>y(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return y(this,null,function*(){return at(this.app)?Promise.reject(Ut(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return at(this.app)?Promise.reject(Ut(this)):this.queue(()=>y(this,null,function*(){yield this.assertedPersistence.setPersistence(Zt(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return y(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return y(this,null,function*(){const e=yield wT(this),n=new ST(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}revokeAccessToken(e){return y(this,null,function*(){if(this.currentUser){const n=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),yield gT(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,n){return y(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return y(this,null,function*(){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=yield ri.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return y(this,null,function*(){var n,r;return this._isInitialized&&(yield this.queue(()=>y(this,null,function*(){}))),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return y(this,null,function*(){if(e===this.currentUser)return this.queue(()=>y(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}directlySetCurrentUser(e){return y(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$v(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return y(this,null,function*(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();r&&(n["X-Firebase-Client"]=r);const i=yield this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n})}_getAppCheckToken(){return y(this,null,function*(){var e;const n=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return n!=null&&n.error&&JI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token})}}function fn(t){return we(t)}class xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=FC(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl={loadJS(){return y(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IT(t){yl=t}function Bv(t){return yl.loadJS(t)}function TT(){return yl.recaptchaEnterpriseScript}function kT(){return yl.gapiScript}function NT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RT="recaptcha-enterprise",PT="NO_RECAPTCHA";class AT{constructor(e){this.type=RT,this.auth=fn(e)}verify(e="verify",n=!1){return y(this,null,function*(){function r(s){return y(this,null,function*(){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((o,a)=>y(this,null,function*(){lT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new aT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})}))})}function i(s,o,a){const l=window.grecaptcha;kp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(PT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&kp(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=TT();l.length!==0&&(l+=a),Bv(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})})}}function Op(t,e,n,r=!1){return y(this,null,function*(){const i=new AT(t);let s;try{s=yield i.verify(n)}catch(a){s=yield i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o})}function xc(t,e,n,r){return y(this,null,function*(){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=yield Op(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(s=>y(this,null,function*(){if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=yield Op(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)}))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t,e){const n=xr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ds(s,e!=null?e:{}))return i;ft(i,"already-initialized")}return n.initialize({options:e})}function OT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bT(t,e,n){const r=fn(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Vv(e),{host:o,port:a}=DT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),LT()}function Vv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DT(t){const e=Vv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bp(o)}}}function bp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}function MT(t,e){return y(this,null,function*(){return Xn(t,"POST","/v1/accounts:signUp",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e){return y(this,null,function*(){return to(t,"POST","/v1/accounts:signInWithPassword",Qn(t,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e){return y(this,null,function*(){return to(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))})}function jT(t,e){return y(this,null,function*(){return to(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends oh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}_getIdTokenResponse(e){return y(this,null,function*(){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,n,"signInWithPassword",FT);case"emailLink":return UT(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}})}_linkToIdToken(e,n){return y(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,r,"signUpPassword",MT);case"emailLink":return jT(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){return y(this,null,function*(){return to(t,"POST","/v1/accounts:signInWithIdp",Qn(t,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="http://localhost";class Er extends oh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=eh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Er(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:zT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $T(t){const e=Yi(Qi(t)).link,n=e?Yi(Qi(e)).deep_link_id:null,r=Yi(Qi(t)).deep_link_id;return(r?Yi(Qi(r)).link:null)||r||n||e||t}class ah{constructor(e){var n,r,i,s,o,a;const l=Yi(Qi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=WT((i=l.mode)!==null&&i!==void 0?i:null);U(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$T(e);try{return new ah(n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,n){return Fs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ah.parseLink(n);return U(r,"argument-error"),Fs._fromEmailAndCode(e,r.code,r.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends lh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends no{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch(n){return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch(i){return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends no{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch(n){return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends no{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch(i){return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t,e){return y(this,null,function*(){return to(t,"POST","/v1/accounts:signUp",Qn(t,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,n,r,i=!1){return y(this,null,function*(){const s=yield Jt._fromIdTokenResponse(e,r,i),o=Dp(r);return new cn({user:s,providerId:o,_tokenResponse:r,operationType:n})})}static _forOperation(e,n,r){return y(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const i=Dp(r);return new cn({user:e,providerId:i,_tokenResponse:r,operationType:n})})}}function Dp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){return y(this,null,function*(){var e;if(at(t.app))return Promise.reject(Ut(t));const n=fn(t);if(yield n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new cn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=yield Hv(n,{returnSecureToken:!0}),i=yield cn._fromIdTokenResponse(n,"signIn",r,!0);return yield n._updateCurrentUser(i.user),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends Wt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new La(e,n,r,i)}}function Gv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,s,e,r):s})}function VT(t,e,n=!1){return y(this,null,function*(){const r=yield Ms(t,e._linkToIdToken(t.auth,yield t.getIdToken()),n);return cn._forOperation(t,"link",r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(t,e,n=!1){return y(this,null,function*(){const{auth:r}=t;if(at(r.app))return Promise.reject(Ut(r));const i="reauthenticate";try{const s=yield Ms(t,Gv(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=ih(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),cn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e,n=!1){return y(this,null,function*(){if(at(t.app))return Promise.reject(Ut(t));const r="signIn",i=yield Gv(t,r,e),s=yield cn._fromIdTokenResponse(t,r,i);return n||(yield t._updateCurrentUser(s.user)),s})}function GT(t,e){return y(this,null,function*(){return Kv(fn(t),e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){return y(this,null,function*(){const e=fn(t);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function KT(t,e,n){return y(this,null,function*(){if(at(t.app))return Promise.reject(Ut(t));const r=fn(t),o=yield xc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qv(t),l}),a=yield cn._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(a.user),a})}function qT(t,e,n){return at(t.app)?Promise.reject(Ut(t)):GT(we(t),Ri.credential(e,n)).catch(r=>y(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&qv(t),r}))}function YT(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function QT(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function XT(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function JT(t){return we(t).signOut()}const Ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=1e3,ek=10;class si extends Yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ek):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,n){return y(this,null,function*(){yield Zn(si.prototype,this,"_set").call(this,e,n),this.localCache[e]=JSON.stringify(n)})}_get(e){return y(this,null,function*(){const n=yield Zn(si.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(n),n})}_remove(e){return y(this,null,function*(){yield Zn(si.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}si.type="LOCAL";const tk=si;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv extends Yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qv.type="SESSION";const Xv=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){return Promise.all(t.map(e=>y(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(n){return{fulfilled:!1,reason:n}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return y(this,null,function*(){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(u=>y(this,null,function*(){return u(n.origin,s)})),l=yield nk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,n,r=50){return y(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=uh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function ik(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(){return typeof jt().WorkerGlobalScope!="undefined"&&typeof jt().importScripts=="function"}function sk(){return y(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(t){return null}})}function ok(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ak(){return Jv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="firebaseLocalStorageDb",lk=1,Fa="firebaseLocalStorage",ey="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function El(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function uk(){const t=indexedDB.deleteDatabase(Zv);return new ro(t).toPromise()}function Oc(){const t=indexedDB.open(Zv,lk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:ey})}catch(i){n(i)}}),t.addEventListener("success",()=>y(this,null,function*(){const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),yield uk(),e(yield Oc()))}))})}function Lp(t,e,n){return y(this,null,function*(){const r=El(t,!0).put({[ey]:e,value:n});return new ro(r).toPromise()})}function ck(t,e){return y(this,null,function*(){const n=El(t,!1).get(e),r=yield new ro(n).toPromise();return r===void 0?null:r.value})}function Mp(t,e){const n=El(t,!0).delete(e);return new ro(n).toPromise()}const dk=800,hk=3;class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return y(this,null,function*(){return this.db?this.db:(this.db=yield Oc(),this.db)})}_withRetries(e){return y(this,null,function*(){let n=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(n++>hk)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return y(this,null,function*(){return Jv()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return y(this,null,function*(){this.receiver=wl._getInstance(ak()),this.receiver._subscribe("keyChanged",(e,n)=>y(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(n.key)}})),this.receiver._subscribe("ping",(e,n)=>y(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return y(this,null,function*(){var e,n;if(this.activeServiceWorker=yield sk(),!this.activeServiceWorker)return;this.sender=new rk(this.activeServiceWorker);const r=yield this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return y(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||ok()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}})}_isAvailable(){return y(this,null,function*(){try{if(!indexedDB)return!1;const e=yield Oc();return yield Lp(e,Ma,"1"),yield Mp(e,Ma),!0}catch(e){}return!1})}_withPendingWrite(e){return y(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,n){return y(this,null,function*(){return this._withPendingWrite(()=>y(this,null,function*(){return yield this._withRetries(r=>Lp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)}))})}_get(e){return y(this,null,function*(){const n=yield this._withRetries(r=>ck(r,e));return this.localCache[e]=n,n})}_remove(e){return y(this,null,function*(){return this._withPendingWrite(()=>y(this,null,function*(){return yield this._withRetries(n=>Mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return y(this,null,function*(){const e=yield this._withRetries(i=>{const s=El(i,!1).getAll();return new ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n})}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>y(this,null,function*(){return this._poll()}),dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ty.type="LOCAL";const fk=ty;new eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e){return e?Zt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends oh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pk(t){return Kv(t.auth,new ch(t),t.bypassAuthState)}function mk(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),HT(n,new ch(t),t.bypassAuthState)}function gk(t){return y(this,null,function*(){const{auth:e,user:n}=t;return U(n,e,"internal-error"),VT(n,new ch(t),t.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise((e,n)=>y(this,null,function*(){this.pendingPromise={resolve:e,reject:n};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return y(this,null,function*(){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(a)(l))}catch(u){this.reject(u)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pk;case"linkViaPopup":case"linkViaRedirect":return gk;case"reauthViaPopup":case"reauthViaRedirect":return mk;default:ft(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new eo(2e3,1e4);function vk(t,e,n){return y(this,null,function*(){if(at(t.app))return Promise.reject(kt(t,"operation-not-supported-in-this-environment"));const r=fn(t);ZI(t,e,lh);const i=ny(r,n);return new lr(r,"signInViaPopup",e,i).executeNotNull()})}class lr extends ry{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}executeNotNull(){return y(this,null,function*(){const e=yield this.execute();return U(e,this.auth,"internal-error"),e})}onExecution(){return y(this,null,function*(){un(this.filter.length===1,"Popup operations only handle one event");const e=uh();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_k.get())};e()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="pendingRedirect",ea=new Map;class as extends ry{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}execute(){return y(this,null,function*(){let e=ea.get(this.auth._key());if(!e){try{const r=(yield wk(this.resolver,this.auth))?yield Zn(as.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return y(this,null,function*(){if(e.type==="signInViaRedirect")return Zn(as.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=yield this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,Zn(as.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return y(this,null,function*(){})}cleanUp(){}}function wk(t,e){return y(this,null,function*(){const n=Ck(e),r=Sk(t);if(!(yield r._isAvailable()))return!1;const i=(yield r._get(n))==="true";return yield r._remove(n),i})}function Ek(t,e){ea.set(t._key(),e)}function Sk(t){return Zt(t._redirectPersistence)}function Ck(t){return Zo(yk,t.config.apiKey,t.name)}function Ik(t,e,n=!1){return y(this,null,function*(){if(at(t.app))return Promise.reject(Ut(t));const r=fn(t),i=ny(r,e),o=yield new as(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,e)),o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=10*60*1e3;class kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fp(e))}saveEventToCache(e){this.cachedEventUids.add(Fp(e)),this.lastProcessedEventTime=Date.now()}}function Fp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n){return y(this,arguments,function*(t,e={}){return Xn(t,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ak=/^https?/;function xk(t){return y(this,null,function*(){if(t.config.emulator)return;const{authorizedDomains:e}=yield Rk(t);for(const n of e)try{if(Ok(n))return}catch(r){}ft(t,"unauthorized-domain")})}function Ok(t){const e=Pc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ak.test(n))return!1;if(Pk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new eo(3e4,6e4);function Up(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dk(t){return new Promise((e,n)=>{var r,i,s;function o(){Up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Up(),n(kt(t,"network-request-failed"))},timeout:bk.get()})}if(!((i=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jt().gapi)===null||s===void 0)&&s.load)o();else{const a=NT("iframefcb");return jt()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},Bv(`${kT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ta=null,e})}let ta=null;function Lk(t){return ta=ta||Dk(t),ta}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new eo(5e3,15e3),Fk="__/auth/iframe",Uk="emulator/auth/iframe",jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wk(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rh(e,Uk):`https://${t.config.authDomain}/${Fk}`,r={apiKey:e.apiKey,appName:t.name,v:Ni},i=zk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ki(r).slice(1)}`}function $k(t){return y(this,null,function*(){const e=yield Lk(t),n=jt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Wk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jk,dontclear:!0},r=>new Promise((i,s)=>y(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=jt().setTimeout(()=>{s(o)},Mk.get());function l(){jt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})})))})}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vk=500,Hk=600,Gk="_blank",Kk="http://localhost";class jp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qk(t,e,n,r=Vk,i=Hk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=We().toLowerCase();n&&(a=Mv(u)?Gk:n),Dv(u)&&(e=e||Kk,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(_T(u)&&a!=="_self")return Yk(e||"",a),new jp(null);const c=window.open(e||"",a,d);U(c,t,"popup-blocked");try{c.focus()}catch(h){}return new jp(c)}function Yk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk="__/auth/handler",Xk="emulator/auth/handler",Jk=encodeURIComponent("fac");function zp(t,e,n,r,i,s){return y(this,null,function*(){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ni,eventId:i};if(e instanceof lh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Aa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof no){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=yield t._getAppCheckToken(),u=l?`#${Jk}=${encodeURIComponent(l)}`:"";return`${Zk(t)}?${ki(a).slice(1)}${u}`})}function Zk({config:t}){return t.emulator?rh(t,Xk):`https://${t.authDomain}/${Qk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="webStorageSupport";class eN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xv,this._completeRedirectFn=Ik,this._overrideRedirectResult=Ek}_openPopup(e,n,r,i){return y(this,null,function*(){var s;un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=yield zp(e,n,r,Pc(),i);return qk(e,o,uh())})}_openRedirect(e,n,r,i){return y(this,null,function*(){yield this._originValidation(e);const s=yield zp(e,n,r,Pc(),i);return ik(s),new Promise(()=>{})})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}initAndGetManager(e){return y(this,null,function*(){const n=yield $k(e),r=new kk(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r})}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gu,{type:gu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gu];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wv()||Lv()||sh()}}const tN=eN;var Wp="@firebase/auth",$p="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return y(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iN(t){zt(new Pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$v(t)},u=new CT(r,i,s,l);return OT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zt(new Pt("auth-internal",e=>{const n=fn(e.getProvider("auth").getImmediate());return(r=>new nN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(Wp,$p,rN(t)),ct(Wp,$p,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=5*60,oN=gv("authIdTokenMaxAge")||sN;let Bp=null;const aN=t=>e=>y(zw,null,function*(){const n=e&&(yield e.getIdTokenResult()),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oN)return;const i=n==null?void 0:n.token;Bp!==i&&(Bp=i,yield fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});function lN(t=Zd()){const e=xr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xT(t,{popupRedirectResolver:tN,persistence:[fk,tk,Xv]}),r=gv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=aN(s.toString());QT(n,o,()=>o(n.currentUser)),YT(n,a=>o(a))}}const i=pv("auth");return i&&bT(n,`http://${i}`),n}function uN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}IT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iN("Browser");var cN="firebase",dN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(cN,dN,"app");var Vp={};const Hp="@firebase/database",Gp="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sy="";function hN(t){sy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fN(e)}}catch(e){}return new pN},ur=oy("localStorage"),mN=oy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new vl("@firebase/database"),gN=function(){let t=1;return function(){return t++}}(),ay=function(t){const e=zC(t),n=new MC;n.update(e);const r=n.digest();return Gd.encodeByteArray(r)},io=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=io.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let ls=null,Kp=!0;const _N=function(t,e){P(!0,"Can't turn on custom loggers persistently."),oi.logLevel=Y.VERBOSE,ls=oi.log.bind(oi)},Ie=function(...t){if(Kp===!0&&(Kp=!1,ls===null&&mN.get("logging_enabled")===!0&&_N()),ls){const e=io.apply(null,t);ls(e)}},so=function(t){return function(...e){Ie(t,...e)}},bc=function(...t){const e="FIREBASE INTERNAL ERROR: "+io(...t);oi.error(e)},dn=function(...t){const e=`FIREBASE FATAL ERROR: ${io(...t)}`;throw oi.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+io(...t);oi.warn(e)},vN=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",Sr="[MAX_NAME]",Or=function(t,e){if(t===e)return 0;if(t===_i||e===Sr)return-1;if(e===_i||t===Sr)return 1;{const n=qp(t),r=qp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},wN=function(t,e){return t===e?0:t<e?-1:1},Wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},dh=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=dh(t[e[r]]);return n+="}",n},ly=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const uy=function(t){P(!Sl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},EN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const IN=new RegExp("^-?(0*)\\d{1,10}$"),TN=-2147483648,kN=2147483647,qp=function(t){if(IN.test(t)){const e=Number(t);if(e>=TN&&e<=kN)return e}return null},Pi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},NN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class na{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}na.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="5",cy="v",dy="s",hy="r",fy="f",py=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,my="ls",gy="p",Dc="ac",_y="websocket",vy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ur.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ur.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function AN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wy(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===_y)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AN(t)&&(n.ns=t.namespace);const i=[];return ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(){this.counters_={}}incrementCounter(e,n=1){$t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={},vu={};function fh(t){const e=t.toString();return _u[e]||(_u[e]=new xN),_u[e]}function ON(t,e){const n=t.toString();return vu[n]||(vu[n]=e()),vu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Pi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="start",DN="close",LN="pLPCommand",MN="pRTLPCB",Ey="id",Sy="pw",Cy="ser",FN="cb",UN="seg",jN="ts",zN="d",WN="dframe",Iy=1870,Ty=30,$N=Iy-Ty,BN=25e3,VN=3e4;class Yr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=so(e),this.stats_=fh(n),this.urlFn=l=>(this.appCheckToken&&(l[Dc]=this.appCheckToken),wy(n,vy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VN)),yN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ph((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yp)this.id=a,this.password=l;else if(o===DN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Yp]="t",r[Cy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[FN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[cy]=hh,this.transportSessionId&&(r[dy]=this.transportSessionId),this.lastSessionId&&(r[my]=this.lastSessionId),this.applicationId&&(r[gy]=this.applicationId),this.appCheckToken&&(r[Dc]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&py.test(location.hostname)&&(r[hy]=fy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yr.forceAllow_=!0}static forceDisallow(){Yr.forceDisallow_=!0}static isAvailable(){return Yr.forceAllow_?!0:!Yr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!EN()&&!SN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hv(n),i=ly(r,$N);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WN]="t",r[Ey]=e,r[Sy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ph{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gN(),window[LN+this.uniqueCallbackIdentifier]=e,window[MN+this.uniqueCallbackIdentifier]=n,this.myIFrame=ph.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ie("frame writing exception"),a.stack&&Ie(a.stack),Ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch(n){const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ey]=this.myID,e[Sy]=this.myPW,e[Cy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ty+r.length<=Iy;){const o=this.pendingSegs.shift();r=r+"&"+UN+i+"="+o.seg+"&"+jN+i+"="+o.ts+"&"+zN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(BN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch(r){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=16384,GN=45e3;let Ua=null;typeof MozWebSocket!="undefined"?Ua=MozWebSocket:typeof WebSocket!="undefined"&&(Ua=WebSocket);class St{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=so(this.connId),this.stats_=fh(n),this.connURL=St.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[cy]=hh,typeof location!="undefined"&&location.hostname&&py.test(location.hostname)&&(o[hy]=fy),n&&(o[dy]=n),r&&(o[my]=r),i&&(o[Dc]=i),s&&(o[gy]=s),wy(e,_y,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ur.set("previous_websocket_failure",!0);try{let r;AC(),this.mySock=new Ua(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){St.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ua!==null&&!St.forceDisallow_}static previouslyFailed(){return ur.isInMemoryStorage||ur.get("previous_websocket_failure")===!0}markConnectionHealthy(){ur.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=bs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ly(n,HN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}St.responsesRequiredToBeHealthy=2;St.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yr,St]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=St&&St.isAvailable();let r=n&&!St.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[St];else{const i=this.transports_=[];for(const s of Us.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=6e4,qN=5e3,YN=10*1024,QN=100*1024,yu="t",Qp="d",XN="s",Xp="r",JN="e",Jp="o",Zp="a",em="n",tm="p",ZN="h";class eR{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=so("c:"+this.id+":"),this.transportManager_=new Us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yu in e){const n=e[yu];n===Zp?this.upgradeIfSecondaryHealthy_():n===Xp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wi("t",e),r=Wi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:em,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wi("t",e),r=Wi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wi(yu,e);if(Qp in e){const r=e[Qp];if(n===ZN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===em){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===XN?this.onConnectionShutdown_(r):n===Xp?this.onReset_(r):n===JN?bc("Server Error: "+r):n===Jp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hh!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ur.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends Ny{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!qd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ja}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=32,rm=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new q("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $n(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function mh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function js(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ry(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return Ue(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nR(t,e){const n=js(t,0),r=js(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Or(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function gh(t,e){if($n(t)!==$n(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if($n(t)>$n(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class rR{constructor(e,n){this.errorPrefix_=n,this.parts_=js(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_l(this.parts_[r]);Py(this)}}function iR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_l(e),Py(t)}function sR(t){const e=t.parts_.pop();t.byteLength_-=_l(e),t.parts_.length>0&&(t.byteLength_-=1)}function Py(t){if(t.byteLength_>rm)throw new Error(t.errorPrefix_+"has a key path longer than "+rm+" bytes ("+t.byteLength_+").");if(t.parts_.length>nm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nm+") or object contains a cycle "+rr(t))}function rr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h extends Ny{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _h}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=1e3,oR=60*5*1e3,im=30*1e3,aR=1.3,lR=3e4,uR="server_kill",sm=3;class nn extends ky{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nn.nextPersistentConnectionId_++,this.log_=so("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$i,this.maxReconnectDelay_=oR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_h.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ja.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Lt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;nn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$t(e,"w")){const r=mi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||LC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=im)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=DC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bc("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lR&&(this.reconnectDelay_=$i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aR)}this.onConnectStatus_(!1)}establishConnection_(){return y(this,null,function*(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=yield Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new eR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ze(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(uR)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ze(c),l())}}})}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Aa(this.interruptReasons_)&&(this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>dh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sm&&(this.reconnectDelay_=im,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sy.replace(/\./g,"-")]=1,qd()?e["framework.cordova"]=1:_v()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ja.getInstance().currentlyOnline();return Aa(this.interruptReasons_)&&e}}nn.nextPersistentConnectionId_=0;nn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new $(_i,e),i=new $(_i,n);return this.compare(r,i)!==0}minPost(){return $.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;class Ay extends Cl{static get __EMPTY_NODE(){return xo}static set __EMPTY_NODE(e){xo=e}compare(e,n){return Or(e.name,n.name)}isDefinedOn(e){throw Ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(Sr,xo)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,xo)}toString(){return".key"}}const ai=new Ay;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ce.RED,this.left=i!=null?i:Ge.EMPTY_NODE,this.right=s!=null?s:Ge.EMPTY_NODE}copy(e,n,r,i,s){return new Ce(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class cR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oo(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new cR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t,e){return Or(t.name,e.name)}function vh(t,e){return Or(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;function hR(t){Lc=t}const xy=function(t){return typeof t=="number"?"number:"+uy(t):"string:"+t},Oy=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$t(e,".sv"),"Priority must be a string or number.")}else P(t===Lc||t.isEmpty(),"priority of unexpected type.");P(t===Lc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let om;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Oy(this.priorityNode_)}static set __childrenNodeConstructor(e){om=e}static get __childrenNodeConstructor(){return om}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:z(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||$n(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=uy(this.value_):e+=this.value_,this.lazyHash_=ay(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let by,Dy;function fR(t){by=t}function pR(t){Dy=t}class mR extends Cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Or(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Sr,new Ee("[PRIORITY-POST]",Dy))}makePost(e,n){const r=by(e);return new $(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new mR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=Math.log(2);class _R{constructor(e){const n=s=>parseInt(Math.log(s)/gR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const za=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new Ce(h,c.node,Ce.BLACK,null,null);{const g=parseInt(d/2,10)+l,v=i(l,g),p=i(g+1,u);return c=t[g],h=n?n(c):c,new Ce(h,c.node,Ce.BLACK,v,p)}},s=function(l){let u=null,d=null,c=t.length;const h=function(v,p){const E=c-v,m=c;c-=v;const f=i(E+1,m),_=t[E],w=n?n(_):_;g(new Ce(w,_.node,p,null,f))},g=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const p=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));p?h(E,Ce.BLACK):(h(E,Ce.BLACK),h(E,Ce.RED))}return d},o=new _R(t.length),a=s(o);return new Ge(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu;const Mr={};class en{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Mr&&se,"ChildrenNode.ts has not been loaded"),wu=wu||new en({".priority":Mr},{".priority":se}),wu}get(e){const n=mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return $t(this.indexSet_,e.toString())}addIndex(e,n){P(e!==ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator($.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=za(r,e.getCompare()):a=Mr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new en(d,u)}addToIndexes(e,n){const r=xa(this.indexes_,(i,s)=>{const o=mi(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Mr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator($.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),za(a,o.getCompare())}else return Mr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new $(e.name,a))),l.insert(e,e.node)}});return new en(r,this.indexSet_)}removeFromIndexes(e,n){const r=xa(this.indexes_,i=>{if(i===Mr)return i;{const s=n.get(e.name);return s?i.remove(new $(e.name,s)):i}});return new en(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Oy(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bi||(Bi=new F(new Ge(vh),null,en.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bi:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new $(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bi:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{P(z(e)!==".priority"||$n(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,a)=>{n[o]=a.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xy(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ay(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new $(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oo?-1:0}withIndex(e){if(e===ai||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ai?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vR extends F{constructor(){super(new Ge(vh),F.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const oo=new vR;Object.defineProperties($,{MIN:{value:new $(_i,F.EMPTY_NODE)},MAX:{value:new $(Sr,oo)}});Ay.__EMPTY_NODE=F.EMPTY_NODE;Ee.__childrenNodeConstructor=F;hR(oo);pR(oo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=!0;function de(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,de(e))}if(!(t instanceof Array)&&yR){const n=[];let r=!1;if(ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=de(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new $(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=za(n,dR,o=>o.name,vh);if(r){const o=za(n,se.getCompare());return new F(s,de(e),new en({".priority":o},{".priority":se}))}else return new F(s,de(e),en.Default)}else{let n=F.EMPTY_NODE;return ke(t,(r,i)=>{if($t(t,r)&&r.substring(0,1)!=="."){const s=de(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(de(e))}}fR(de);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR extends Cl{constructor(e){super(),this.indexPath_=e,P(!W(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Or(e.name,n.name):s}makePost(e,n){const r=de(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new $(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,oo);return new $(Sr,e)}toString(){return js(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER extends Cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Or(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const r=de(e);return new $(n,r)}toString(){return".value"}}const SR=new ER;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){return{type:"value",snapshotNode:t}}function vi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ws(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function CR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(zs(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vi(n,r)):o.trackChildChange(Ws(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(zs(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ws(i,s,o))}else r.trackChildChange(vi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.indexedFilter_=new yh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$s.getStartPost_(e),this.endPost_=$s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new $(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,a)=>{s.matches(new $(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new $(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new $(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Ws(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(zs(n,c));const p=a.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(vi(h.name,h.node)),p.updateImmediateChild(h.name,h.node)):p}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(zs(u.name,u.node)),s.trackChildChange(vi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new wh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TR(t){return t.loadsAllData()?new yh(t.getIndex()):t.hasLimit()?new IR(t):new $s(t)}function am(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===SR?n="$value":t.index_===ai?n="$key":(P(t.index_ instanceof wR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends ky{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=so("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Wa.getListenId_(e,r),a={};this.listens_[o]=a;const l=am(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),mi(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Wa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=am(e._queryParams),r=e._path.toString(),i=new Lt;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bs(a.responseText)}catch(u){ze("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){return{value:null,children:new Map}}function Ai(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,$a());const i=t.children.get(r);e=Q(e),Ai(i,e,n)}}function Mc(t,e){if(W(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(se,(r,i)=>{Ai(t,new q(r),i)}),Mc(t,e)}}else if(t.children.size>0){const n=z(e);return e=Q(e),t.children.has(n)&&Mc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Fc(t,e,n){t.value!==null?n(e,t.value):NR(t,(r,i)=>{const s=new q(e.toString()+"/"+r);Fc(i,s,n)})}function NR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=10*1e3,PR=30*1e3,AR=5*60*1e3;class xR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RR(e);const r=um+(PR-um)*Math.random();us(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ke(e,(i,s)=>{s>0&&$t(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),us(this.reportStats_.bind(this),Math.floor(Math.random()*2*AR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ct||(Ct={}));function Eh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ch(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ct.ACK_USER_WRITE,this.source=Eh()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new Ba(H(),n,this.revert)}}else return P(z(this.path)===e,"operationForChild called for unrelated child."),new Ba(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.source=e,this.path=n,this.type=Ct.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Bs(this.source,H()):new Bs(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ct.OVERWRITE}operationForChild(e){return W(this.path)?new Cr(this.source,H(),this.snap.getImmediateChild(e)):new Cr(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ct.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new Cr(this.source,H(),n.value):new yi(this.source,H(),n)}else return P(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yi(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(CR(o.childName,o.snapshotNode))}),Vi(t,i,"child_removed",e,r,n),Vi(t,i,"child_added",e,r,n),Vi(t,i,"child_moved",s,r,n),Vi(t,i,"child_changed",e,r,n),Vi(t,i,"value",e,r,n),i}function Vi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>LR(t,a,l)),o.forEach(a=>{const l=DR(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function DR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function LR(t,e,n){if(e.childName==null||n.childName==null)throw Ti("Should only compare child_ events.");const r=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){return{eventCache:t,serverCache:e}}function cs(t,e,n,r){return Il(new Bn(e,n,r),t.serverCache)}function My(t,e,n,r){return Il(t.eventCache,new Bn(e,n,r))}function Va(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;const MR=()=>(Eu||(Eu=new Ge(wN)),Eu);class X{constructor(e,n=MR()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return ke(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(W(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:ie(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new X(null)}}set(e,n){if(W(e))return new X(n,this.children);{const r=z(e),s=(this.children.get(r)||new X(null)).set(Q(e),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(W(e))return n;{const r=z(e),s=(this.children.get(r)||new X(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),ie(n,i),r):new X(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.writeTree_=e}static empty(){return new Nt(new X(null))}}function ds(t,e,n){if(W(e))return new Nt(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ue(i,e);return s=s.updateChild(o,n),new Nt(t.writeTree_.set(i,s))}else{const i=new X(n),s=t.writeTree_.setTree(e,i);return new Nt(s)}}}function Uc(t,e,n){let r=t;return ke(n,(i,s)=>{r=ds(r,ie(e,i),s)}),r}function cm(t,e){if(W(e))return Nt.empty();{const n=t.writeTree_.setTree(e,new X(null));return new Nt(n)}}function jc(t,e){return br(t,e)!=null}function br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function dm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new $(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new $(r,i.value))}),e}function Un(t,e){if(W(e))return t;{const n=br(t,e);return n!=null?new Nt(new X(n)):new Nt(t.writeTree_.subtree(e))}}function zc(t){return t.writeTree_.isEmpty()}function wi(t,e){return Fy(H(),t.writeTree_,e)}function Fy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Fy(ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ie(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e){return Wy(e,t)}function FR(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ds(t.visibleWrites,e,n)),t.lastWriteId=r}function UR(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Uc(t.visibleWrites,e,n),t.lastWriteId=r}function jR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function zR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&WR(a,r.path)?i=!1:lt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return $R(t),!0;if(r.snap)t.visibleWrites=cm(t.visibleWrites,r.path);else{const a=r.children;ke(a,l=>{t.visibleWrites=cm(t.visibleWrites,ie(r.path,l))})}return!0}else return!1}function WR(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(ie(t.path,n),e))return!0;return!1}function $R(t){t.visibleWrites=Uy(t.allWrites,BR,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function BR(t){return t.visible}function Uy(t,e,n){let r=Nt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)lt(n,o)?(a=Ue(n,o),r=ds(r,a,s.snap)):lt(o,n)&&(a=Ue(o,n),r=ds(r,H(),s.snap.getChild(a)));else if(s.children){if(lt(n,o))a=Ue(n,o),r=Uc(r,a,s.children);else if(lt(o,n))if(a=Ue(o,n),W(a))r=Uc(r,H(),s.children);else{const l=mi(s.children,z(a));if(l){const u=l.getChild(Q(a));r=ds(r,H(),u)}}}else throw Ti("WriteRecord should have .snap or .children")}}return r}function jy(t,e,n,r,i){if(!r&&!i){const s=br(t.visibleWrites,e);if(s!=null)return s;{const o=Un(t.visibleWrites,e);if(zc(o))return n;if(n==null&&!jc(o,H()))return null;{const a=n||F.EMPTY_NODE;return wi(o,a)}}}else{const s=Un(t.visibleWrites,e);if(!i&&zc(s))return n;if(!i&&n==null&&!jc(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},a=Uy(t.allWrites,o,e),l=n||F.EMPTY_NODE;return wi(a,l)}}}function VR(t,e,n){let r=F.EMPTY_NODE;const i=br(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Un(t.visibleWrites,e);return n.forEachChild(se,(o,a)=>{const l=wi(Un(s,new q(o)),a);r=r.updateImmediateChild(o,l)}),dm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Un(t.visibleWrites,e);return dm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function HR(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ie(e,n);if(jc(t.visibleWrites,s))return null;{const o=Un(t.visibleWrites,s);return zc(o)?i.getChild(n):wi(o,i.getChild(n))}}function GR(t,e,n,r){const i=ie(e,n),s=br(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Un(t.visibleWrites,i);return wi(o,r.getNode().getImmediateChild(n))}else return null}function KR(t,e){return br(t.visibleWrites,e)}function qR(t,e,n,r,i,s,o){let a;const l=Un(t.visibleWrites,e),u=br(l,H());if(u!=null)a=u;else if(n!=null)a=wi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function YR(){return{visibleWrites:Nt.empty(),allWrites:[],lastWriteId:-1}}function Ha(t,e,n,r){return jy(t.writeTree,t.treePath,e,n,r)}function Ih(t,e){return VR(t.writeTree,t.treePath,e)}function hm(t,e,n,r){return HR(t.writeTree,t.treePath,e,n,r)}function Ga(t,e){return KR(t.writeTree,ie(t.treePath,e))}function QR(t,e,n,r,i,s){return qR(t.writeTree,t.treePath,e,n,r,i,s)}function Th(t,e,n){return GR(t.writeTree,t.treePath,e,n)}function zy(t,e){return Wy(ie(t.treePath,e),t.writeTree)}function Wy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ws(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,zs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ws(r,e.snapshotNode,i.oldSnap));else throw Ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const $y=new JR;class kh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Bn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Th(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ir(this.viewCache_),s=QR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){return{filter:t}}function e1(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function t1(t,e,n,r,i){const s=new XR;let o,a;if(n.type===Ct.OVERWRITE){const u=n;u.source.fromUser?o=Wc(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=Ka(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Ct.MERGE){const u=n;u.source.fromUser?o=r1(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=$c(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Ct.ACK_USER_WRITE){const u=n;u.revert?o=o1(t,e,u.path,r,i,s):o=i1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Ct.LISTEN_COMPLETE)o=s1(t,e,n.path,r,s);else throw Ti("Unknown operation type: "+n.type);const l=s.getChanges();return n1(e,o,l),{viewCache:o,changes:l}}function n1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Va(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ly(Va(e)))}}function By(t,e,n,r,i,s){const o=e.eventCache;if(Ga(r,n)!=null)return e;{let a,l;if(W(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ir(e),d=u instanceof F?u:F.EMPTY_NODE,c=Ih(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Ha(r,Ir(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){P($n(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=hm(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=Q(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=hm(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Th(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return cs(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Ka(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(W(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=z(n);if(!l.isCompleteForPath(n)&&$n(n)>1)return e;const v=Q(n),E=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=d.updatePriority(l.getNode(),E):u=d.updateChild(l.getNode(),g,E,v,$y,null)}const c=My(e,u,l.isFullyInitialized()||W(n),d.filtersNodes()),h=new kh(i,c,s);return By(t,c,n,i,h,a)}function Wc(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new kh(i,e,s);if(W(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=cs(e,u,!0,t.filter.filtersNodes());else{const c=z(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=cs(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=Q(n),g=a.getNode().getImmediateChild(c);let v;if(W(h))v=r;else{const p=d.getCompleteChild(c);p!=null?mh(h)===".priority"&&p.getChild(Ry(h)).isEmpty()?v=p:v=p.updateChild(h,r):v=F.EMPTY_NODE}if(g.equals(v))l=e;else{const p=t.filter.updateChild(a.getNode(),c,v,h,d,o);l=cs(e,p,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fm(t,e){return t.eventCache.isCompleteForChild(e)}function r1(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=ie(n,l);fm(e,z(d))&&(a=Wc(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=ie(n,l);fm(e,z(d))||(a=Wc(t,a,d,u,i,s,o))}),a}function pm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function $c(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;W(n)?u=r:u=new X(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=pm(t,g,h);l=Ka(t,l,new q(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),p=pm(t,v,h);l=Ka(t,l,new q(c),p,i,s,o,a)}}),l}function i1(t,e,n,r,i,s,o){if(Ga(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ka(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let u=new X(null);return l.getNode().forEachChild(ai,(d,c)=>{u=u.set(new q(d),c)}),$c(t,e,n,u,i,s,a,o)}else return e}else{let u=new X(null);return r.foreach((d,c)=>{const h=ie(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),$c(t,e,n,u,i,s,a,o)}}function s1(t,e,n,r,i){const s=e.serverCache,o=My(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return By(t,o,n,r,$y,i)}function o1(t,e,n,r,i,s){let o;if(Ga(r,n)!=null)return e;{const a=new kh(r,e,i),l=e.eventCache.getNode();let u;if(W(n)||z(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ha(r,Ir(e));else{const c=e.serverCache.getNode();P(c instanceof F,"serverChildren would be complete if leaf node"),d=Ih(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=z(n);let c=Th(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,Q(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,F.EMPTY_NODE,Q(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ha(r,Ir(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ga(r,H())!=null,cs(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new yh(r.getIndex()),s=TR(r);this.processor_=ZR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),d=new Bn(l,o.isFullyInitialized(),i.filtersNodes()),c=new Bn(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Il(c,d),this.eventGenerator_=new OR(this.query_)}get query(){return this.query_}}function l1(t){return t.viewCache_.serverCache.getNode()}function u1(t){return Va(t.viewCache_)}function c1(t,e){const n=Ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function mm(t){return t.eventRegistrations_.length===0}function d1(t,e){t.eventRegistrations_.push(e)}function gm(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function _m(t,e,n,r){e.type===Ct.MERGE&&e.source.queryId!==null&&(P(Ir(t.viewCache_),"We should always have a full cache before handling merges"),P(Va(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=t1(t.processor_,i,e,n,r);return e1(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Vy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function h1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(vi(s,o))}),n.isFullyInitialized()&&r.push(Ly(n.getNode())),Vy(t,r,n.getNode(),e)}function Vy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return bR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;class Hy{constructor(){this.views=new Map}}function f1(t){P(!qa,"__referenceConstructor has already been defined"),qa=t}function p1(){return P(qa,"Reference.ts has not been loaded"),qa}function m1(t){return t.views.size===0}function Nh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),_m(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(_m(o,e,n,r));return s}}function Gy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ha(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=Ih(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const u=Il(new Bn(a,l,!1),new Bn(r,i,!1));return new a1(e,u)}return o}function g1(t,e,n,r,i,s){const o=Gy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),d1(o,n),h1(o,n)}function _1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Vn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(gm(u,n,r)),mm(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(gm(l,n,r)),mm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Vn(t)&&s.push(new(p1())(e._repo,e._path)),{removed:s,events:o}}function Ky(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function jn(t,e){let n=null;for(const r of t.views.values())n=n||c1(r,e);return n}function qy(t,e){if(e._queryParams.loadsAllData())return kl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Yy(t,e){return qy(t,e)!=null}function Vn(t){return kl(t)!=null}function kl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya;function v1(t){P(!Ya,"__referenceConstructor has already been defined"),Ya=t}function y1(){return P(Ya,"Reference.ts has not been loaded"),Ya}let w1=1;class vm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=YR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qy(t,e,n,r,i){return FR(t.pendingWriteTree_,e,n,r,i),i?xi(t,new Cr(Eh(),e,n)):[]}function E1(t,e,n,r){UR(t.pendingWriteTree_,e,n,r);const i=X.fromObject(n);return xi(t,new yi(Eh(),e,i))}function Nn(t,e,n=!1){const r=jR(t.pendingWriteTree_,e);if(zR(t.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set(H(),!0):ke(r.children,o=>{s=s.set(new q(o),!0)}),xi(t,new Ba(r.path,s,n))}else return[]}function ao(t,e,n){return xi(t,new Cr(Sh(),e,n))}function S1(t,e,n){const r=X.fromObject(n);return xi(t,new yi(Sh(),e,r))}function C1(t,e){return xi(t,new Bs(Sh(),e))}function I1(t,e,n){const r=Ph(t,n);if(r){const i=Ah(r),s=i.path,o=i.queryId,a=Ue(s,e),l=new Bs(Ch(o),a);return xh(t,s,l)}else return[]}function Qa(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Yy(o,e))){const l=_1(o,e,n,r);m1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>Vn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=N1(h);for(let v=0;v<g.length;++v){const p=g[v],E=p.query,m=ew(t,p);t.listenProvider_.startListening(hs(E),Vs(t,E),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(hs(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Nl(h));t.listenProvider_.stopListening(hs(h),g)}))}R1(t,u)}return a}function Xy(t,e,n,r){const i=Ph(t,r);if(i!=null){const s=Ah(i),o=s.path,a=s.queryId,l=Ue(o,e),u=new Cr(Ch(a),l,n);return xh(t,o,u)}else return[]}function T1(t,e,n,r){const i=Ph(t,r);if(i){const s=Ah(i),o=s.path,a=s.queryId,l=Ue(o,e),u=X.fromObject(n),d=new yi(Ch(a),l,u);return xh(t,o,d)}else return[]}function Bc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const v=Ue(h,i);s=s||jn(g,v),o=o||Vn(g)});let a=t.syncPointTree_.get(i);a?(o=o||Vn(a),s=s||jn(a,H())):(a=new Hy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const p=jn(v,H());p&&(s=s.updateImmediateChild(g,p))}));const u=Yy(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=Nl(e);P(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=P1();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Tl(t.pendingWriteTree_,i);let c=g1(a,e,n,d,s,l);if(!u&&!o&&!r){const h=qy(a,e);c=c.concat(A1(t,e,h))}return c}function Rh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ue(o,e),u=jn(a,l);if(u)return u});return jy(i,e,s,n,!0)}function k1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Ue(u,n);r=r||jn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||jn(i,H()):(i=new Hy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Bn(r,!0,!1):null,a=Tl(t.pendingWriteTree_,e._path),l=Gy(i,e,a,s?o.getNode():F.EMPTY_NODE,s);return u1(l)}function xi(t,e){return Jy(e,t.syncPointTree_,null,Tl(t.pendingWriteTree_,H()))}function Jy(t,e,n,r){if(W(t.path))return Zy(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=jn(i,H()));let s=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=zy(r,o);s=s.concat(Jy(a,l,u,d))}return i&&(s=s.concat(Nh(i,t,r,n))),s}}function Zy(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=jn(i,H()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=zy(r,o),d=t.operationForChild(o);d&&(s=s.concat(Zy(d,a,l,u)))}),i&&(s=s.concat(Nh(i,t,r,n))),s}function ew(t,e){const n=e.query,r=Vs(t,n);return{hashFn:()=>(l1(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?I1(t,n._path,r):C1(t,n._path);{const s=CN(i,n);return Qa(t,n,null,s)}}}}function Vs(t,e){const n=Nl(e);return t.queryToTagMap.get(n)}function Nl(t){return t._path.toString()+"$"+t._queryIdentifier}function Ph(t,e){return t.tagToQueryMap.get(e)}function Ah(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function xh(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=Tl(t.pendingWriteTree_,e);return Nh(r,n,i,null)}function N1(t){return t.fold((e,n,r)=>{if(n&&Vn(n))return[kl(n)];{let i=[];return n&&(i=Ky(n)),ke(r,(s,o)=>{i=i.concat(o)}),i}})}function hs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(y1())(t._repo,t._path):t}function R1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Nl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function P1(){return w1++}function A1(t,e,n){const r=e._path,i=Vs(t,e),s=ew(t,n),o=t.listenProvider_.startListening(hs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!W(u)&&d&&Vn(d))return[kl(d).query];{let h=[];return d&&(h=h.concat(Ky(d).map(g=>g.query))),ke(c,(g,v)=>{h=h.concat(v)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(hs(d),Vs(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oh(n)}node(){return this.node_}}class bh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new bh(this.syncTree_,n)}node(){return Rh(this.syncTree_,this.path_)}}const x1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ym=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return O1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return b1(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},O1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},b1=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},tw=function(t,e,n,r){return Dh(e,new bh(n,t),r)},nw=function(t,e,n){return Dh(t,new Oh(e),n)};function Dh(t,e,n){const r=t.getPriority().val(),i=ym(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ym(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ee(a,de(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(se,(a,l)=>{const u=Dh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Mh(t,e){let n=e instanceof q?e:new q(e),r=t,i=z(n);for(;i!==null;){const s=mi(r.node.children,i)||{children:{},childCount:0};r=new Lh(i,r,s),n=Q(n),i=z(n)}return r}function Oi(t){return t.node.value}function rw(t,e){t.node.value=e,Vc(t)}function iw(t){return t.node.childCount>0}function D1(t){return Oi(t)===void 0&&!iw(t)}function Rl(t,e){ke(t.node.children,(n,r)=>{e(new Lh(n,t,r))})}function sw(t,e,n,r){n&&e(t),Rl(t,i=>{sw(i,e,!0)})}function L1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lo(t){return new q(t.parent===null?t.name:lo(t.parent)+"/"+t.name)}function Vc(t){t.parent!==null&&M1(t.parent,t.name,t)}function M1(t,e,n){const r=D1(n),i=$t(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Vc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=/[\[\].#$\/\u0000-\u001F\u007F]/,U1=/[\[\].#$\u0000-\u001F\u007F]/,Su=10*1024*1024,Fh=function(t){return typeof t=="string"&&t.length!==0&&!F1.test(t)},ow=function(t){return typeof t=="string"&&t.length!==0&&!U1.test(t)},j1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ow(t)},aw=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Sl(t)||t&&typeof t=="object"&&$t(t,".sv")},Xa=function(t,e,n,r){r&&e===void 0||Pl(gi(t,"value"),e,n)},Pl=function(t,e,n){const r=n instanceof q?new rR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+rr(r));if(typeof e=="function")throw new Error(t+"contains a function "+rr(r)+" with contents = "+e.toString());if(Sl(e))throw new Error(t+"contains "+e.toString()+" "+rr(r));if(typeof e=="string"&&e.length>Su/3&&_l(e)>Su)throw new Error(t+"contains a string greater than "+Su+" utf8 bytes "+rr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Fh(o)))throw new Error(t+" contains an invalid key ("+o+") "+rr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iR(r,o),Pl(t,a,r),sR(r)}),i&&s)throw new Error(t+' contains ".value" child '+rr(r)+" in addition to actual children.")}},z1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=js(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Fh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(nR);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&lt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},lw=function(t,e,n,r){const i=gi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ke(e,(o,a)=>{const l=new q(o);if(Pl(i,a,ie(n,l)),mh(l)===".priority"&&!aw(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),z1(i,s)},W1=function(t,e,n){if(Sl(e))throw new Error(gi(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!aw(e))throw new Error(gi(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},uw=function(t,e,n,r){if(!ow(n))throw new Error(gi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uw(t,e,n)},cr=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},B1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!j1(n))throw new Error(gi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Al(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!gh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function cw(t,e,n){Al(t,n),dw(t,r=>gh(r,e))}function pt(t,e,n){Al(t,n),dw(t,r=>lt(r,e)||lt(e,r))}function dw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(H1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function H1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ls&&Ie("event: "+n.toString()),Pi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="repo_interrupt",K1=25;class q1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new V1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$a(),this.transactionQueueTree_=new Lh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Y1(t,e,n){if(t.stats_=fh(t.repoInfo_),t.forceRestClient_||NN())t.server_=new Wa(t.repoInfo_,(r,i,s,o)=>{wm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Em(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nn(t.repoInfo_,e,(r,i,s,o)=>{wm(t,r,i,s,o)},r=>{Em(t,r)},r=>{Q1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ON(t.repoInfo_,()=>new xR(t.stats_,t.server_)),t.infoData_=new kR,t.infoSyncTree_=new vm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ao(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Uh(t,"connected",!1),t.serverSyncTree_=new vm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);pt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function hw(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xl(t){return x1({timestamp:hw(t)})}function wm(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=xa(n,u=>de(u));o=T1(t.serverSyncTree_,s,l,i)}else{const l=de(n);o=Xy(t.serverSyncTree_,s,l,i)}else if(r){const l=xa(n,u=>de(u));o=S1(t.serverSyncTree_,s,l)}else{const l=de(n);o=ao(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ei(t,s)),pt(t.eventQueue_,a,o)}function Em(t,e){Uh(t,"connected",e),e===!1&&eP(t)}function Q1(t,e){ke(e,(n,r)=>{Uh(t,n,r)})}function Uh(t,e,n){const r=new q("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(r,i);const s=ao(t.infoSyncTree_,r,i);pt(t.eventQueue_,r,s)}function jh(t){return t.nextWriteId_++}function X1(t,e,n){const r=k1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=de(i).withIndex(e._queryParams.getIndex());Bc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ao(t.serverSyncTree_,e._path,s);else{const a=Vs(t.serverSyncTree_,e);o=Xy(t.serverSyncTree_,e._path,s,a)}return pt(t.eventQueue_,e._path,o),Qa(t.serverSyncTree_,e,n,null,!0),s},i=>(uo(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function J1(t,e,n,r,i){uo(t,"set",{path:e.toString(),value:n,priority:r});const s=xl(t),o=de(n,r),a=Rh(t.serverSyncTree_,e),l=nw(o,a,s),u=jh(t),d=Qy(t.serverSyncTree_,e,l,u,!0);Al(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const v=h==="ok";v||ze("set at "+e+" failed: "+h);const p=Nn(t.serverSyncTree_,u,!v);pt(t.eventQueue_,e,p),Hn(t,i,h,g)});const c=Wh(t,e);Ei(t,c),pt(t.eventQueue_,c,[])}function Z1(t,e,n,r){uo(t,"update",{path:e.toString(),value:n});let i=!0;const s=xl(t),o={};if(ke(n,(a,l)=>{i=!1,o[a]=tw(ie(e,a),de(l),t.serverSyncTree_,s)}),i)Ie("update() called with empty data.  Don't do anything."),Hn(t,r,"ok",void 0);else{const a=jh(t),l=E1(t.serverSyncTree_,e,o,a);Al(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||ze("update at "+e+" failed: "+u);const h=Nn(t.serverSyncTree_,a,!c),g=h.length>0?Ei(t,e):e;pt(t.eventQueue_,g,h),Hn(t,r,u,d)}),ke(n,u=>{const d=Wh(t,ie(e,u));Ei(t,d)}),pt(t.eventQueue_,e,[])}}function eP(t){uo(t,"onDisconnectEvents");const e=xl(t),n=$a();Fc(t.onDisconnect_,H(),(i,s)=>{const o=tw(i,s,t.serverSyncTree_,e);Ai(n,i,o)});let r=[];Fc(n,H(),(i,s)=>{r=r.concat(ao(t.serverSyncTree_,i,s));const o=Wh(t,i);Ei(t,o)}),t.onDisconnect_=$a(),pt(t.eventQueue_,H(),r)}function tP(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Mc(t.onDisconnect_,e),Hn(t,n,r,i)})}function Sm(t,e,n,r){const i=de(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ai(t.onDisconnect_,e,i),Hn(t,r,s,o)})}function nP(t,e,n,r,i){const s=de(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ai(t.onDisconnect_,e,s),Hn(t,i,o,a)})}function rP(t,e,n,r){if(Aa(n)){Ie("onDisconnect().update() called with empty data.  Don't do anything."),Hn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&ke(n,(o,a)=>{const l=de(a);Ai(t.onDisconnect_,ie(e,o),l)}),Hn(t,r,i,s)})}function iP(t,e,n){let r;z(e._path)===".info"?r=Bc(t.infoSyncTree_,e,n):r=Bc(t.serverSyncTree_,e,n),cw(t.eventQueue_,e._path,r)}function Cm(t,e,n){let r;z(e._path)===".info"?r=Qa(t.infoSyncTree_,e,n):r=Qa(t.serverSyncTree_,e,n),cw(t.eventQueue_,e._path,r)}function sP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(G1)}function uo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function Hn(t,e,n,r){e&&Pi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function fw(t,e,n){return Rh(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function zh(t,e=t.transactionQueueTree_){if(e||Ol(t,e),Oi(e)){const n=mw(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oP(t,lo(e),n)}else iw(e)&&Rl(e,n=>{zh(t,n)})}function oP(t,e,n){const r=n.map(u=>u.currentWriteId),i=fw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];P(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ue(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{uo(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Nn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ol(t,Mh(t.transactionQueueTree_,e)),zh(t,t.transactionQueueTree_),pt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Pi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ze("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ei(t,e)}},o)}function Ei(t,e){const n=pw(t,e),r=lo(n),i=mw(t,n);return aP(t,i,r),r}function aP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ue(n,l.path);let d=!1,c;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=K1)d=!0,c="maxretry",i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=fw(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){Pl("transaction failed: Data returned ",g,l.path);let v=de(g);typeof g=="object"&&g!=null&&$t(g,".priority")||(v=v.updatePriority(h.getPriority()));const E=l.currentWriteId,m=xl(t),f=nw(v,h,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=jh(t),o.splice(o.indexOf(E),1),i=i.concat(Qy(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0))}pt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Ol(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Pi(r[a]);zh(t,t.transactionQueueTree_)}function pw(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&Oi(r)===void 0;)r=Mh(r,n),e=Q(e),n=z(e);return r}function mw(t,e){const n=[];return gw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function gw(t,e,n){const r=Oi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rl(e,i=>{gw(t,i,n)})}function Ol(t,e){const n=Oi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,rw(e,n.length>0?n:void 0)}Rl(e,r=>{Ol(t,r)})}function Wh(t,e){const n=lo(pw(t,e)),r=Mh(t.transactionQueueTree_,e);return L1(r,i=>{Cu(t,i)}),Cu(t,r),sw(r,i=>{Cu(t,i)}),n}function Cu(t,e){const n=Oi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?rw(e,void 0):n.length=s+1,pt(t.eventQueue_,lo(e),i);for(let o=0;o<r.length;o++)Pi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(s){}e+="/"+i}return e}function uP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Im=function(t,e){const n=cP(t),r=n.namespace;n.domain==="firebase.com"&&dn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},cP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=lP(t.substring(d,c)));const h=uP(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Tm.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Tm.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class fP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Lt;return tP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){cr("OnDisconnect.remove",this._path);const e=new Lt;return Sm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){cr("OnDisconnect.set",this._path),Xa("OnDisconnect.set",e,this._path,!1);const n=new Lt;return Sm(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){cr("OnDisconnect.setWithPriority",this._path),Xa("OnDisconnect.setWithPriority",e,this._path,!1),W1("OnDisconnect.setWithPriority",n);const r=new Lt;return nP(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){cr("OnDisconnect.update",this._path),lw("OnDisconnect.update",e,this._path);const n=new Lt;return rP(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:mh(this._path)}get ref(){return new pn(this._repo,this._path)}get _queryIdentifier(){const e=lm(this._queryParams),n=dh(e);return n==="{}"?"default":n}get _queryObject(){return lm(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof $h))return!1;const n=this._repo===e._repo,r=gh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+tR(this._path)}}class pn extends $h{constructor(e,n){super(e,n,new wh,!1)}get parent(){const e=Ry(this._path);return e===null?null:new pn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=Gs(this.ref,e);return new Hs(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Hs(i,Gs(this.ref,r),se)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function he(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?Gs(t._root,e):t._root}function Gs(t,e){return t=we(t),z(t._path)===null?$1("child","path",e):uw("child","path",e),new pn(t._repo,ie(t._path,e))}function Iu(t){return t=we(t),new pP(t._repo,t._path)}function mP(t,e){t=we(t),cr("push",t._path),Xa("push",e,t._path,!0);const n=hw(t._repo),r=dP(n),i=Gs(t,r),s=Gs(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ir(t){return cr("remove",t._path),Hc(t,null)}function Hc(t,e){t=we(t),cr("set",t._path),Xa("set",e,t._path,!1);const n=new Lt;return J1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function vt(t,e){lw("update",e,t._path);const n=new Lt;return Z1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function gP(t){t=we(t);const e=new _w(()=>{}),n=new bl(e);return X1(t._repo,t,n).then(r=>new Hs(r,new pn(t._repo,t._path),t._queryParams.getIndex()))}class bl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new hP("value",this,new Hs(e.snapshotNode,new pn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fP(this,e,n):null}matches(e){return e instanceof bl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function _P(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(d,c)=>{Cm(t._repo,t,a),l(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new _w(n,s||void 0),a=new bl(o);return iP(t._repo,t,a),()=>Cm(t._repo,t,a)}function ra(t,e,n,r){return _P(t,"value",e,n,r)}f1(pn);v1(pn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="FIREBASE_DATABASE_EMULATOR_HOST",Gc={};let yP=!1;function wP(t,e,n,r){t.repoInfo_=new yy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function EP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Im(s,i),a=o.repoInfo,l;typeof process!="undefined"&&Vp&&(l=Vp[vP]),l?(s=`http://${l}?ns=${a.namespace}`,o=Im(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new PN(t.name,t.options,e);B1("Invalid Firebase Database URL",o),W(o.path)||dn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=CP(a,t,u,new RN(t.name,n));return new IP(d,t)}function SP(t,e){const n=Gc[e];(!n||n[t.key]!==t)&&dn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sP(t),delete n[t.key]}function CP(t,e,n,r){let i=Gc[e.name];i||(i={},Gc[e.name]=i);let s=i[t.toURLString()];return s&&dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new q1(t,yP,n,r),i[t.toURLString()]=s,s}class IP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Y1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pn(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dn("Cannot call "+e+" on a deleted database.")}}function TP(t=Zd(),e){const n=xr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=kC("database");r&&kP(n,...r)}return n}function kP(t,e,n,r={}){t=we(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&dn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new na(na.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:NC(r.mockUserToken,t.app.options.projectId);s=new na(o)}wP(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){hN(Ni),zt(new Pt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return EP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ct(Hp,Gp,t),ct(Hp,Gp,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP={".sv":"timestamp"};function PP(){return RP}nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NP();const vw="@firebase/installations",Bh="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=1e4,ww=`w:${Bh}`,Ew="FIS_v2",AP="https://firebaseinstallations.googleapis.com/v1",xP=60*60*1e3,OP="installations",bP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tr=new Ar(OP,bP,DP);function Sw(t){return t instanceof Wt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw({projectId:t}){return`${AP}/projects/${t}/installations`}function Iw(t){return{token:t.token,requestStatus:2,expiresIn:MP(t.expiresIn),creationTime:Date.now()}}function Tw(t,e){return y(this,null,function*(){const r=(yield e.json()).error;return Tr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function kw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function LP(t,{refreshToken:e}){const n=kw(t);return n.append("Authorization",FP(e)),n}function Nw(t){return y(this,null,function*(){const e=yield t();return e.status>=500&&e.status<600?t():e})}function MP(t){return Number(t.replace("s","000"))}function FP(t){return`${Ew} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(r,i){return y(this,arguments,function*({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Cw(t),o=kw(t),a=e.getImmediate({optional:!0});if(a){const c=yield a.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const l={fid:n,authVersion:Ew,appId:t.appId,sdkVersion:ww},u={method:"POST",headers:o,body:JSON.stringify(l)},d=yield Nw(()=>fetch(s,u));if(d.ok){const c=yield d.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Iw(c.authToken)}}else throw yield Tw("Create Installation",d)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=/^[cdef][\w-]{21}$/,Kc="";function WP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$P(t);return zP.test(n)?n:Kc}catch(t){return Kc}}function $P(t){return jP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=new Map;function Aw(t,e){const n=Dl(t);xw(n,e),BP(n,e)}function xw(t,e){const n=Pw.get(t);if(n)for(const r of n)r(e)}function BP(t,e){const n=VP();n&&n.postMessage({key:t,fid:e}),HP()}let dr=null;function VP(){return!dr&&"BroadcastChannel"in self&&(dr=new BroadcastChannel("[Firebase] FID Change"),dr.onmessage=t=>{xw(t.data.key,t.data.fid)}),dr}function HP(){Pw.size===0&&dr&&(dr.close(),dr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="firebase-installations-database",KP=1,kr="firebase-installations-store";let Tu=null;function Vh(){return Tu||(Tu=Sv(GP,KP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}}})),Tu}function Ja(t,e){return y(this,null,function*(){const n=Dl(t),i=(yield Vh()).transaction(kr,"readwrite"),s=i.objectStore(kr),o=yield s.get(n);return yield s.put(e,n),yield i.done,(!o||o.fid!==e.fid)&&Aw(t,e.fid),e})}function Ow(t){return y(this,null,function*(){const e=Dl(t),r=(yield Vh()).transaction(kr,"readwrite");yield r.objectStore(kr).delete(e),yield r.done})}function Ll(t,e){return y(this,null,function*(){const n=Dl(t),i=(yield Vh()).transaction(kr,"readwrite"),s=i.objectStore(kr),o=yield s.get(n),a=e(o);return a===void 0?yield s.delete(n):yield s.put(a,n),yield i.done,a&&(!o||o.fid!==a.fid)&&Aw(t,a.fid),a})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){return y(this,null,function*(){let e;const n=yield Ll(t.appConfig,r=>{const i=qP(r),s=YP(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Kc?{installationEntry:yield e}:{installationEntry:n,registrationPromise:e}})}function qP(t){const e=t||{fid:WP(),registrationStatus:0};return bw(e)}function YP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Tr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XP(t)}:{installationEntry:e}}function QP(t,e){return y(this,null,function*(){try{const n=yield UP(t,e);return Ja(t.appConfig,n)}catch(n){throw Sw(n)&&n.customData.serverCode===409?yield Ow(t.appConfig):yield Ja(t.appConfig,{fid:e.fid,registrationStatus:0}),n}})}function XP(t){return y(this,null,function*(){let e=yield km(t.appConfig);for(;e.registrationStatus===1;)yield Rw(100),e=yield km(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=yield Hh(t);return r||n}return e})}function km(t){return Ll(t,e=>{if(!e)throw Tr.create("installation-not-found");return bw(e)})}function bw(t){return JP(t)?{fid:t.fid,registrationStatus:0}:t}function JP(t){return t.registrationStatus===1&&t.registrationTime+yw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(r,i){return y(this,arguments,function*({appConfig:t,heartbeatServiceProvider:e},n){const s=eA(t,n),o=LP(t,n),a=e.getImmediate({optional:!0});if(a){const c=yield a.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const l={installation:{sdkVersion:ww,appId:t.appId}},u={method:"POST",headers:o,body:JSON.stringify(l)},d=yield Nw(()=>fetch(s,u));if(d.ok){const c=yield d.json();return Iw(c)}else throw yield Tw("Generate Auth Token",d)})}function eA(t,{fid:e}){return`${Cw(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e=!1){return y(this,null,function*(){let n;const r=yield Ll(t.appConfig,s=>{if(!Dw(s))throw Tr.create("not-registered");const o=s.authToken;if(!e&&rA(o))return s;if(o.requestStatus===1)return n=tA(t,e),s;{if(!navigator.onLine)throw Tr.create("app-offline");const a=sA(s);return n=nA(t,a),a}});return n?yield n:r.authToken})}function tA(t,e){return y(this,null,function*(){let n=yield Nm(t.appConfig);for(;n.authToken.requestStatus===1;)yield Rw(100),n=yield Nm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gh(t,e):r})}function Nm(t){return Ll(t,e=>{if(!Dw(e))throw Tr.create("not-registered");const n=e.authToken;return oA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function nA(t,e){return y(this,null,function*(){try{const n=yield ZP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return yield Ja(t.appConfig,r),n}catch(n){if(Sw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))yield Ow(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});yield Ja(t.appConfig,r)}throw n}})}function Dw(t){return t!==void 0&&t.registrationStatus===2}function rA(t){return t.requestStatus===2&&!iA(t)}function iA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xP}function sA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function oA(t){return t.requestStatus===1&&t.requestTime+yw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){return y(this,null,function*(){const e=t,{installationEntry:n,registrationPromise:r}=yield Hh(e);return r?r.catch(console.error):Gh(e).catch(console.error),n.fid})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e=!1){return y(this,null,function*(){const n=t;return yield uA(n),(yield Gh(n,e)).token})}function uA(t){return y(this,null,function*(){const{registrationPromise:e}=yield Hh(t);e&&(yield e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){if(!t||!t.options)throw ku("App Configuration");if(!t.name)throw ku("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ku(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ku(t){return Tr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="installations",dA="installations-internal",hA=t=>{const e=t.getProvider("app").getImmediate(),n=cA(e),r=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fA=t=>{const e=t.getProvider("app").getImmediate(),n=xr(e,Lw).getImmediate();return{getId:()=>aA(n),getToken:i=>lA(n,i)}};function pA(){zt(new Pt(Lw,hA,"PUBLIC")),zt(new Pt(dA,fA,"PRIVATE"))}pA();ct(vw,Bh);ct(vw,Bh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="analytics",mA="firebase_id",gA="origin",_A=60*1e3,vA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new vl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},et=new Ar("analytics","Analytics",yA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){if(!t.startsWith(Kh)){const e=et.create("invalid-gtag-resource",{gtagURL:t});return Qe.warn(e.message),""}return t}function Mw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function EA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function SA(t,e){const n=EA("firebase-js-sdk-policy",{createScriptURL:wA}),r=document.createElement("script"),i=`${Kh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function CA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}function IA(t,e,n,r,i,s){return y(this,null,function*(){const o=r[i];try{if(o)yield e[o];else{const l=(yield Mw(n)).find(u=>u.measurementId===i);l&&(yield e[l.appId])}}catch(a){Qe.error(a)}t("config",i,s)})}function TA(t,e,n,r,i){return y(this,null,function*(){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=yield Mw(n);for(const l of o){const u=a.find(c=>c.measurementId===l),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),yield Promise.all(s),t("event",r,i||{})}catch(s){Qe.error(s)}})}function kA(t,e,n,r){function i(s,...o){return y(this,null,function*(){try{if(s==="event"){const[a,l]=o;yield TA(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;yield IA(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Qe.error(a)}})}return i}function NA(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=kA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function RA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Kh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=30,AA=1e3;class xA{constructor(e={},n=AA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fw=new xA;function OA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}function bA(t){return y(this,null,function*(){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:OA(r)},s=vA.replace("{app-id}",n),o=yield fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=yield o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch(l){}throw et.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()})}function DA(r){return y(this,arguments,function*(t,e=Fw,n){const{appId:i,apiKey:s,measurementId:o}=t.options;if(!i)throw et.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw et.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new FA;return setTimeout(()=>y(this,null,function*(){l.abort()}),_A),Uw({appId:i,apiKey:s,measurementId:o},a,l,e)})}function Uw(s,o,a){return y(this,arguments,function*(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Fw){var l;const{appId:u,measurementId:d}=t;try{yield LA(r,e)}catch(c){if(d)return Qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:u,measurementId:d};throw c}try{const c=yield bA(t);return i.deleteThrottleMetadata(u),c}catch(c){const h=c;if(!MA(h)){if(i.deleteThrottleMetadata(u),d)return Qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:u,measurementId:d};throw c}const g=Number((l=h==null?void 0:h.customData)===null||l===void 0?void 0:l.httpStatus)===503?gp(n,i.intervalMillis,PA):gp(n,i.intervalMillis),v={throttleEndTimeMillis:Date.now()+g,backoffCount:n+1};return i.setThrottleMetadata(u,v),Qe.debug(`Calling attemptFetch again in ${g} millis`),Uw(t,v,r,i)}})}function LA(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function MA(t){if(!(t instanceof Wt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class FA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}function UA(t,e,n,r,i){return y(this,null,function*(){if(i&&i.global){t("event",n,r);return}else{const s=yield e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){return y(this,null,function*(){if(Qd())try{yield Xd()}catch(t){return Qe.warn(et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Qe.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0})}function zA(t,e,n,r,i,s,o){return y(this,null,function*(){var a;const l=DA(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Qe.error(g)),e.push(l);const u=jA().then(g=>{if(g)return r.getId()}),[d,c]=yield Promise.all([l,u]);RA(s)||SA(s,d.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[gA]="firebase",h.update=!0,c!=null&&(h[mA]=c),i("config",d.measurementId,h),d.measurementId})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.app=e}_delete(){return delete fs[this.app.options.appId],Promise.resolve()}}let fs={},Rm=[];const Pm={};let Nu="dataLayer",$A="gtag",Am,jw,xm=!1;function BA(){const t=[];if(Yd()&&t.push("This is a browser extension environment."),vv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:e});Qe.warn(n.message)}}function VA(t,e,n){BA();const r=t.options.appId;if(!r)throw et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(fs[r]!=null)throw et.create("already-exists",{id:r});if(!xm){CA(Nu);const{wrappedGtag:s,gtagCore:o}=NA(fs,Rm,Pm,Nu,$A);jw=s,Am=o,xm=!0}return fs[r]=zA(t,Rm,Pm,e,Am,Nu,n),new WA(t)}function HA(t=Zd()){t=we(t);const e=xr(t,Za);return e.isInitialized()?e.getImmediate():GA(t)}function GA(t,e={}){const n=xr(t,Za);if(n.isInitialized()){const i=n.getImmediate();if(Ds(e,n.getOptions()))return i;throw et.create("already-initialized")}return n.initialize({options:e})}function KA(){return y(this,null,function*(){if(Yd()||!vv()||!Qd())return!1;try{return yield Xd()}catch(t){return!1}})}function qA(t,e,n,r){t=we(t),UA(jw,fs[t.app.options.appId],e,n,r).catch(i=>Qe.error(i))}const Om="@firebase/analytics",bm="0.10.8";function YA(){zt(new Pt(Za,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return VA(r,i,n)},"PUBLIC")),zt(new Pt("analytics-internal",t,"PRIVATE")),ct(Om,bm),ct(Om,bm,"esm2017");function t(e){try{const n=e.getProvider(Za).getImmediate();return{logEvent:(r,i,s)=>qA(n,r,i,s)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}YA();const Ru={apiKey:"AIzaSyDHA78mlZCIB1n6I9ngZLD2tc7SQjiBY0c",authDomain:"tankwars-97e19.firebaseapp.com",projectId:"tankwars-97e19",storageBucket:"tankwars-97e19.appspot.com",messagingSenderId:"214275382819",appId:"1:214275382819:web:fbf9edefd593aaa1719b96",measurementId:"G-JVQ264VMTX",databaseURL:"https://tankwars-97e19-default-rtdb.firebaseio.com"};console.log("Firebase initialization starting...");let bo,hr,ue,QA=null;try{console.log("Initializing Firebase app with config:",JSON.stringify(ho(Bt({},Ru),{apiKey:"***"}))),typeof window=="undefined"&&console.error("Not in browser environment - Firebase may not initialize properly");try{bo=Cv(Ru),console.log("Firebase app initialized successfully")}catch(t){throw console.error("Firebase app initialization error:",t),console.error("Error code:",t.code),console.error("Error message:",t.message),t}try{console.log("Initializing Firebase Auth..."),hr=lN(bo),console.log("Firebase Auth initialized successfully")}catch(t){console.error("Firebase Auth initialization error:",t)}try{console.log("Initializing Firebase Realtime Database..."),console.log("Database URL:",Ru.databaseURL),ue=TP(bo),console.log("Firebase Realtime Database initialized successfully");try{console.log("Testing database connection..."),console.log("Database connection test successful")}catch(t){console.error("Database connection test failed:",t)}}catch(t){console.error("Firebase Database initialization error:",t),console.error("Error code:",t.code),console.error("Error message:",t.message)}console.log("Checking Analytics support..."),KA().then(t=>{if(t)try{console.log("Analytics is supported, initializing..."),QA=HA(bo),console.log("Analytics initialized successfully")}catch(e){console.error("Analytics initialization error:",e)}else console.log("Analytics is not supported in this environment")}).catch(t=>{console.error("Analytics support check error:",t)}),console.log("Firebase services initialization completed")}catch(t){console.error("Firebase initialization error:",t),console.error("Error code:",t.code),console.error("Error message:",t.message),console.error("Error stack:",t.stack)}function XA(){const[t,e]=R.useState(""),[n,r]=R.useState(""),[i,s]=R.useState(!1),[o,a]=R.useState(""),[l,u]=R.useState(!1),d=g=>y(this,null,function*(){g.preventDefault(),console.log("Login form submitted. Mode:",i?"Sign Up":"Login"),console.log("Email:",t),a(""),u(!0);try{if(console.log("Attempting to authenticate with email/password..."),i){console.log("Creating new user account...");const v=yield KT(hr,t,n);console.log("User created successfully:",v.user.uid)}else{console.log("Signing in existing user...");const v=yield qT(hr,t,n);console.log("User signed in successfully:",v.user.uid)}}catch(v){console.error("Authentication error:",v),console.error("Error code:",v.code),console.error("Error message:",v.message),a(v.message)}finally{u(!1)}}),c=()=>y(this,null,function*(){console.log("Anonymous login requested"),a(""),u(!0);try{console.log("Attempting anonymous sign in...");const g=yield BT(hr);console.log("Anonymous user signed in successfully:",g.user.uid)}catch(g){console.error("Anonymous authentication error:",g),console.error("Error code:",g.code),console.error("Error message:",g.message),a(g.message)}finally{u(!1)}}),h=()=>y(this,null,function*(){console.log("Google login requested"),a(""),u(!0);try{console.log("Initializing Google Auth Provider...");const g=new qt;g.setCustomParameters({prompt:"select_account"}),console.log("Attempting Google sign in...");const v=yield vk(hr,g);console.log("Google user signed in successfully:",v.user.uid),console.log("User display name:",v.user.displayName),console.log("User email:",v.user.email)}catch(g){console.error("Google authentication error:",g),console.error("Error code:",g.code),console.error("Error message:",g.message),g.code==="auth/popup-closed-by-user"?a("Sign-in was cancelled. Please try again."):g.code==="auth/popup-blocked"?a("Sign-in popup was blocked by your browser. Please allow popups for this site."):a(g.message||"Failed to sign in with Google. Please try again.")}finally{u(!1)}});return S.jsxs("div",{className:"login-container",children:[S.jsx("h2",{children:i?"Sign Up":"Login"}),S.jsxs("form",{onSubmit:d,className:"login-form",children:[S.jsxs("div",{className:"form-group",children:[S.jsx("label",{htmlFor:"email",children:"Email"}),S.jsx("input",{type:"email",id:"email",value:t,onChange:g=>e(g.target.value),required:!0})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{htmlFor:"password",children:"Password"}),S.jsx("input",{type:"password",id:"password",value:n,onChange:g=>r(g.target.value),required:!0})]}),o&&S.jsx("p",{className:"error",children:o}),S.jsx("button",{type:"submit",disabled:l,children:l?"Loading...":i?"Sign Up":"Login"})]}),S.jsx("button",{className:"toggle-auth",onClick:()=>s(!i),children:i?"Already have an account? Login":"Need an account? Sign Up"}),S.jsx("div",{className:"divider",children:"or"}),S.jsx("button",{className:"google-login",onClick:h,disabled:l,children:"Sign in with Google"}),S.jsx("div",{className:"divider",children:"or"}),S.jsx("button",{className:"anonymous-login",onClick:c,disabled:l,children:"Play as Guest"})]})}function JA({user:t}){const[e,n]=R.useState([]),[r,i]=R.useState(""),[s,o]=R.useState(""),a=Hd();R.useEffect(()=>{console.log("Lobby - User info:",t);const c=he(ue,"games");let h;try{h=ra(c,g=>{try{const v=g.val();if(v){const E=Object.entries(v).map(([w,T])=>ho(Bt({id:w},T),{players:T.players||{}})).filter(w=>w.gameType==="classic"),m=Date.now(),f=24*60*60*1e3;E.forEach(w=>{w.createdAt&&m-w.createdAt>f&&(!w.players||Object.keys(w.players).length===0)&&(console.log(`Deleting stale game: ${w.id}`),ir(he(ue,`games/${w.id}`))),(!w.players||Object.keys(w.players).length===0)&&(console.log(`Deleting empty game: ${w.id}`),ir(he(ue,`games/${w.id}`)))});const _=E.filter(w=>w.players&&Object.keys(w.players).length>0);n(_)}else n([])}catch(v){console.error("Error processing games data:",v),n([])}},g=>{console.error("Database read error:",g),o("Failed to load games. Please try again.")})}catch(g){console.error("Error setting up games listener:",g),o("Failed to connect to the game server. Please try again.")}return()=>{try{h&&h()}catch(g){console.error("Error unsubscribing from games:",g)}}},[t]);const l=()=>y(this,null,function*(){if(!r.trim()){o("Please enter a game name");return}try{if(console.log("Creating classic game with user:",t),!t||!t.uid){o("User authentication issue. Please try logging in again."),console.error("User object invalid:",t);return}const c=he(ue,"games"),h=mP(c),g=t.isAnonymous?`Guest-${t.uid.substring(0,5)}`:t.displayName||`User-${t.uid.substring(0,5)}`,v={name:r,createdBy:t.uid,creatorName:g,gameType:"classic",players:{[t.uid]:{id:t.uid,name:g,isReady:!1,isAnonymous:!!t.isAnonymous}},status:"waiting",createdAt:Date.now()};console.log("Creating classic game with data:",v),yield Hc(h,v),a(`/game/${h.key}`)}catch(c){console.error("Error creating game:",c),o(c.message||"Failed to create game. Please try again.")}}),u=c=>y(this,null,function*(){try{if(console.log("Joining classic game with user:",t),!t||!t.uid){o("User authentication issue. Please try logging in again."),console.error("User object invalid:",t);return}const h=t.isAnonymous?`Guest-${t.uid.substring(0,5)}`:t.displayName||`User-${t.uid.substring(0,5)}`,g=he(ue,`games/${c}/players/${t.uid}`),v={id:t.uid,name:h,isReady:!1,isAnonymous:!!t.isAnonymous,joinedAt:Date.now()};console.log("Joining game with player data:",v),yield Hc(g,v),a(`/game/${c}`)}catch(h){console.error("Error joining game:",h),o(h.message||"Failed to join game. Please try again.")}}),d=()=>y(this,null,function*(){try{yield JT(hr)}catch(c){o(c.message)}});return S.jsxs("div",{className:"lobby-container",children:[S.jsxs("div",{className:"lobby-header",children:[S.jsx("h2",{children:"Tank Wars Lobby"}),S.jsx("button",{className:"logout-btn",onClick:d,children:"Logout"})]}),S.jsx("div",{className:"create-game",children:S.jsxs("div",{className:"game-form",children:[S.jsx("input",{type:"text",placeholder:"Enter game name",value:r,onChange:c=>i(c.target.value)}),S.jsx("button",{onClick:l,children:"Create New Game"})]})}),s&&S.jsx("p",{className:"error",children:s}),S.jsxs("div",{className:"games-list",children:[S.jsx("h3",{children:"Available Games"}),e.length===0?S.jsx("p",{className:"no-games",children:"No games available. Create one!"}):e.map(c=>S.jsxs("div",{className:"game-item",children:[S.jsxs("div",{className:"game-info",children:[S.jsx("h4",{children:c.name||"Unnamed Game"}),S.jsxs("p",{children:["Created by: ",c.creatorName||"Unknown"]}),S.jsxs("p",{children:["Players: ",Object.keys(c.players||{}).length,"/2"]}),S.jsxs("p",{children:["Status: ",c.status||"unknown"]})]}),t&&t.uid&&c.status==="waiting"&&c.players&&!c.players[t.uid]&&S.jsx("button",{className:"join-btn",onClick:()=>u(c.id),children:"Join"}),t&&t.uid&&c.players&&c.players[t.uid]&&S.jsx("button",{className:"resume-btn",onClick:()=>a(`/game/${c.id}`),children:"Resume"})]},c.id))]})]})}function ZA(t,e,n=.6,r=20){const i=[],s=t/r;for(let o=0;o<=r;o++){const a=o*s,l=e*.3,d=e*.7-l,c=Math.sin(o*n)*.5+.5,h=l+c*d;i.push({x:a,y:h})}for(let o=1;o<i.length-1;o++)i[o].y+=(Math.random()-.5)*e*.2;return i}function ex(t,e,n,r){if(!(!e||e.length===0)){t.beginPath(),t.moveTo(0,e[0].y);for(let i=0;i<e.length;i++){const s=e[i];t.lineTo(s.x,s.y)}t.lineTo(n,r),t.lineTo(0,r),t.closePath()}}function Dm(t,e,n,r){const i=t.map(s=>Bt({},s));for(let s=0;s<i.length;s++){const o=i[s],a=Math.abs(o.x-e);if(a<n){const l=a/n,u=Math.cos(l*Math.PI)*r;u>0&&(o.y+=u)}}return i}const tx=.2,nx=.008,Lm=20;function rx(t,e=0){return t.velocityY+=tx,t.velocityX+=e*nx,t.velocityX=Math.max(-20,Math.min(Lm,t.velocityX)),t.velocityY=Math.max(-20,Math.min(Lm,t.velocityY)),t.x+=t.velocityX,t.y+=t.velocityY,t}function ix(t,e){const n=t*Math.PI/180,r=Math.cos(n)*(e/10),i=-Math.sin(n)*(e/10);return{velocityX:r,velocityY:i}}function sx(t,e,n,r){if(t.x<0||t.x>n||t.y<0)return!1;if(t.y>r)return!0;const i=ox(e,t.x);return t.y>=i}function ox(t,e){if(!t||t.length<2)return 0;for(let n=0;n<t.length-1;n++){const r=t[n],i=t[n+1];if(e>=r.x&&e<=i.x){const s=(e-r.x)/(i.x-r.x);return r.y+s*(i.y-r.y)}}return e<t[0].x?t[0].y:t[t.length-1].y}function ax(t,e,n){for(const r in e){const i=e[r];if(i.id===t.ownerId)continue;const s=t.x-(i.x+n/2),o=t.y-(i.y+n/2);if(Math.sqrt(s*s+o*o)<n/2)return{collided:!0,tankId:r}}return{collided:!1}}function Mm(t,e,n){if(t>e)return 0;const r=1-t/e;return Math.floor(n*r)}const Ot=800,Vt=600,_t=40,Ht=30,Do=20,Lo=3,Mo=30,Fo=25;function lx({gameState:t,onGameEvent:e,currentPlayerId:n}){const r=R.useRef(null),[i,s]=R.useState([]),[o,a]=R.useState(0),l=R.useRef(null);R.useEffect(()=>{const p=ZA(Ot,Vt);return s(p),a((Math.random()*2-1)*5),()=>{l.current&&cancelAnimationFrame(l.current)}},[]),R.useEffect(()=>{if(!r.current||!i.length)return;const E=r.current.getContext("2d");let m=!1;const f=()=>{E.clearRect(0,0,Ot,Vt);const _=E.createLinearGradient(0,0,0,Vt);_.addColorStop(0,"#1e3a8a"),_.addColorStop(1,"#3b82f6"),E.fillStyle=_,E.fillRect(0,0,Ot,Vt);const w=E.createLinearGradient(0,0,0,Vt);if(w.addColorStop(0,"#84cc16"),w.addColorStop(1,"#4b5563"),E.fillStyle=w,ex(E,i,Ot,Vt),E.fill(),Object.values(t.tanks||{}).forEach(T=>{d(E,T,T.id===n)}),t.projectile&&t.projectile.active&&!m){c(E,t.projectile);const T=Bt({},t.projectile);rx(T,o);const k=sx(T,i,Ot,Vt),C=ax(T,t.tanks,_t);k||C.collided?(m=!0,u(T),setTimeout(()=>{m=!1},1e3)):e("updateProjectile",T)}else t.projectile&&t.projectile.active&&c(E,t.projectile);h(E,o),g(E,t.currentTurn),l.current=requestAnimationFrame(f)};return l.current=requestAnimationFrame(f),()=>{cancelAnimationFrame(l.current)}},[t,i,o,n,e]);const u=(p,E)=>{console.log("Collision detected at position:",p.x,p.y),console.log("Weapon type:",p.weapon);let m=Mo,f=15,_=Fo,w=!1,T=!1;switch(p.weapon){case"heavy":m=Mo*1.2,f=25,_=Fo*1.6;break;case"cluster":m=Mo*.8,f=10,_=Fo*.6,w=!0;break;case"bunker":m=Mo*1.3,f=30,_=Fo*2,T=!0;break}const k=Dm(i,p.x,m,f);if(s(k),r.current){const I=r.current.getContext("2d");let b="rgba(255, 165, 0, 0.7)",O="rgba(255, 255, 255, 0.9)";switch(p.weapon){case"heavy":b="rgba(255, 0, 0, 0.7)",O="rgba(255, 255, 0, 0.9)";break;case"cluster":b="rgba(0, 255, 255, 0.7)",O="rgba(255, 255, 255, 0.9)";break;case"bunker":b="rgba(128, 0, 128, 0.7)",O="rgba(255, 0, 255, 0.9)";break}if(I.fillStyle=b,I.beginPath(),I.arc(p.x,p.y,m*.8,0,Math.PI*2),I.fill(),I.fillStyle=O,I.beginPath(),I.arc(p.x,p.y,m*.4,0,Math.PI*2),I.fill(),w){const j=3+Math.floor(Math.random()*3),L=m*.5;for(let pe=0;pe<j;pe++){const Ae=Math.random()*Math.PI*2,Le=m*(.8+Math.random()*.8),ne=p.x+Math.cos(Ae)*Le,Me=p.y+Math.sin(Ae)*Le;I.fillStyle="rgba(0, 200, 255, 0.6)",I.beginPath(),I.arc(ne,Me,L,0,Math.PI*2),I.fill(),I.fillStyle="rgba(255, 255, 255, 0.8)",I.beginPath(),I.arc(ne,Me,L*.5,0,Math.PI*2),I.fill();const A=Dm(k,ne,L,f*.6);s(A),Object.entries(t.tanks||{}).forEach(([M,D])=>{const G=D.x+_t/2,le=D.y+Ht/2,Jn=ne-G,At=Me-le,Dr=Math.sqrt(Jn*Jn+At*At);if(Dr<L*1.2){const mt=Mm(Dr,L,_*.4);mt>0&&(console.log(`Cluster damaging tank ${M} with ${mt} damage`),e("damagePlayer",{playerId:M,damage:mt}))}})}}}Object.entries(t.tanks||{}).forEach(([I,b])=>{const O=b.x+_t/2,j=b.y+Ht/2,L=p.x-O,pe=p.y-j,Ae=Math.sqrt(L*L+pe*pe),Le=T?m*1.5:m*1.2;if(Ae<Le){const ne=Mm(Ae,m,_);ne>0&&(console.log(`Damaging tank ${I} with ${ne} damage at distance ${Ae}`),e("damagePlayer",{playerId:I,damage:ne}))}}),e("endProjectile"),setTimeout(()=>{e("nextTurn");const I=Math.random()>.5?1:-1,b=Math.pow(Math.random(),.7)*5;a(I*b)},w?1200:800)},d=(p,E,m)=>{const{x:f,y:_,angle:w,color:T,health:k}=E;p.save();const I=v(i,f+_t/2)-Ht;p.fillStyle=T,p.fillRect(f,I,_t,Ht),p.translate(f+_t/2,I+Ht/2),p.rotate(w*Math.PI/180);const b=p.createLinearGradient(0,0,Do,0);if(b.addColorStop(0,"#333"),b.addColorStop(1,"#555"),p.fillStyle=b,p.fillRect(0,-3,Do,6),m&&E.id===t.currentTurn){const O=E.power||50,j=40+O/2,L=p.createLinearGradient(Do,0,j,0);L.addColorStop(0,"rgba(255, 255, 0, 0.9)"),L.addColorStop(1,"rgba(255, 255, 0, 0.3)"),p.setLineDash([3,3]),p.strokeStyle=L,p.lineWidth=2,p.beginPath(),p.moveTo(Do,0),p.lineTo(j,0),p.stroke(),p.setLineDash([]),p.fillStyle="#ffff00",p.beginPath(),p.arc(j,0,4,0,Math.PI*2),p.fill(),p.fillStyle="rgba(255, 255, 0, 0.3)",p.beginPath(),p.arc(j,0,7,0,Math.PI*2),p.fill(),p.save(),p.rotate(-w*Math.PI/180),p.fillStyle="#ffffff",p.font="10px Arial",p.textAlign="center",p.fillText(`Power: ${O}%`,0,-15),p.restore()}m&&(p.strokeStyle="#ffffff",p.lineWidth=2,p.strokeRect(-40/2,-30/2,_t,Ht)),p.restore(),p.fillStyle="#ef4444",p.fillRect(f,I-10,_t,5),p.fillStyle="#22c55e",p.fillRect(f,I-10,_t*(k/100),5),p.fillStyle="#ffffff",p.font="12px Arial",p.textAlign="center",p.fillText(E.name,f+_t/2,I-15)},c=(p,E)=>{let m="#f97316",f="rgba(249, 115, 22, 0.5)",_=Lo,w=3;switch(E.weapon){case"heavy":m="#ef4444",f="rgba(239, 68, 68, 0.6)",_=Lo*1.5,w=4;break;case"cluster":m="#06b6d4",f="rgba(6, 182, 212, 0.6)",_=Lo*1.2,w=3.5;break;case"bunker":m="#a855f7",f="rgba(168, 85, 247, 0.7)",_=Lo*1.3,w=5;break}if(p.fillStyle=m,p.beginPath(),p.arc(E.x,E.y,_,0,Math.PI*2),p.fill(),p.strokeStyle=f,p.lineWidth=2,p.beginPath(),p.moveTo(E.x,E.y),p.lineTo(E.x-E.velocityX*w,E.y-E.velocityY*w),p.stroke(),E.weapon==="cluster")for(let T=0;T<3;T++){const k=E.x-(Math.random()*5-2.5),C=E.y-(Math.random()*5-2.5),I=Math.random()*2+1;p.fillStyle="rgba(255, 255, 255, 0.8)",p.beginPath(),p.arc(k,C,I,0,Math.PI*2),p.fill()}else if(E.weapon==="bunker")for(let T=1;T<=3;T++){const k=E.x-E.velocityX*(T*1.2),C=E.y-E.velocityY*(T*1.2),I=_*(.8-T*.15);p.fillStyle=`rgba(100, 100, 100, ${.4-T*.1})`,p.beginPath(),p.arc(k,C,I,0,Math.PI*2),p.fill()}},h=(p,E)=>{const m=Math.abs(E),f=E<0?"left":"right";p.fillStyle="#ffffff",p.font="14px Arial",p.textAlign="center",p.fillText("Wind",Ot/2,25);const _=100,w=10,T=Ot/2-_/2,k=35;p.fillStyle="#333333",p.fillRect(T,k,_,w),p.fillStyle="#666666",p.fillRect(T+_/2-1,k,2,w);const I=Math.min(m/5,1)*(_/2);f==="right"?(p.fillStyle="#22c55e",p.fillRect(T+_/2,k,I,w)):(p.fillStyle="#ef4444",p.fillRect(T+_/2-I,k,I,w)),p.fillStyle="#ffffff",p.font="12px Arial",p.textAlign="center",p.fillText(m.toFixed(1),Ot/2,k+w+12)},g=(p,E)=>{if(!E)return;let m=E;if(t.tanks&&t.tanks[E]&&(m=t.tanks[E].name),p.fillStyle="#ffffff",p.font="16px Arial",p.textAlign="center",p.fillText(`${m}'s Turn`,Ot/2,60),t.tanks&&t.tanks[E]){const _=t.tanks[E].x+_t/2,w=v(i,_);p.fillStyle="#f59e0b",p.beginPath(),p.moveTo(_,w-Ht-30),p.lineTo(_-10,w-Ht-15),p.lineTo(_+10,w-Ht-15),p.closePath(),p.fill()}},v=(p,E)=>{if(!p||p.length<2)return Vt;for(let m=0;m<p.length-1;m++){const f=p[m],_=p[m+1];if(E>=f.x&&E<=_.x){const w=(E-f.x)/(_.x-f.x);return f.y+w*(_.y-f.y)}}return E<p[0].x?p[0].y:p[p.length-1].y};return S.jsx("canvas",{ref:r,width:Ot,height:Vt,className:"game-canvas"})}const Fm=800,Uo=[{id:"basic",name:"Basic Shell",damage:25,radius:30,description:"Standard shell with balanced damage and radius."},{id:"heavy",name:"Heavy Shell",damage:40,radius:35,limited:!0,count:3,description:"Powerful shell with increased damage and explosion radius. Limited to 3 uses."},{id:"cluster",name:"Cluster Bomb",damage:15,radius:20,cluster:!0,limited:!0,count:2,description:"Splits into multiple smaller explosions on impact. Great for uneven terrain. Limited to 2 uses."},{id:"bunker",name:"Bunker Buster",damage:50,radius:40,penetration:!0,limited:!0,count:1,description:"Extremely powerful shell that penetrates terrain before exploding. Limited to 1 use."}];function ux({onFire:t,isCurrentTurn:e,gameState:n,currentPlayerId:r,gameId:i}){var T,k;const[s,o]=R.useState(45),[a,l]=R.useState(n.tanks&&n.tanks[r]&&n.tanks[r].power||50),[u,d]=R.useState(Uo[0]),[c,h]=R.useState(!1),[g,v]=R.useState(Uo.map(C=>Bt({},C)));R.useEffect(()=>{var C;n.status==="playing"&&!n.weaponsInitialized&&v(Uo.map(I=>Bt({},I))),n.tanks&&n.tanks[r]&&n.tanks[r].power!==void 0&&l(n.tanks[r].power),console.log("GameControls - Current turn:",n.currentTurn),console.log("GameControls - Is current player turn:",e),console.log("GameControls - Projectile active:",(C=n.projectile)==null?void 0:C.active)},[n,e,r]);const p=C=>{o(I=>{let b=I+C;const O=n.tanks[r];if(!O)return I;const j=O.x<Fm/2;b=(b%360+360)%360;let L;j?L=b:L=(180+b)%360;const pe=he(ue,`games/${i}/tanks/${r}`);return vt(pe,{angle:L}),b})},E=C=>{l(I=>{const b=Math.max(10,Math.min(100,I+C));if(i&&r){const O=he(ue,`games/${i}/tanks/${r}`);vt(O,{power:b})}return b})},m=C=>{d(C),h(!1)},f=()=>{if(!e)return;const C=n.tanks[r];if(!C)return;const I=C.angle,{velocityX:b,velocityY:O}=ix(I,a),j=40,L=20,pe=30,Ae=I*Math.PI/180,Le=C.x+j/2,ne=C.y+L/2,Me=Le+Math.cos(Ae)*pe,A=ne+Math.sin(Ae)*pe;console.log("Tank angle:",I),console.log("Firing angle:",s),console.log("Barrel end position:",Me,A);const M={active:!0,x:Me,y:A,velocityX:b,velocityY:O,ownerId:r,weapon:u.id};if(u.limited){const D=[...g],G=D.findIndex(le=>le.id===u.id);G!==-1&&D[G].count>0&&(D[G].count--,v(D),D[G].count===0&&d(Uo[0]))}t(M)},_=()=>S.jsxs("div",{className:"weapon-menu",children:[S.jsx("h3",{children:"Select Weapon"}),S.jsx("div",{className:"weapon-grid",children:g.map(C=>S.jsxs("button",{className:`weapon-item ${C.id===u.id?"selected":""}`,onClick:()=>m(C),disabled:C.limited&&C.count===0,children:[S.jsx("div",{className:"weapon-name",children:C.name}),S.jsx("div",{className:"weapon-description",children:C.description}),C.limited&&S.jsx("div",{className:"weapon-count",children:C.count>0?`${C.count} left`:"Out of ammo"}),S.jsxs("div",{className:"weapon-stats",children:[S.jsxs("span",{children:["Damage: ",C.damage]}),S.jsxs("span",{children:["Radius: ",C.radius]})]})]},C.id))}),S.jsx("button",{className:"close-menu",onClick:()=>h(!1),children:"Cancel"})]}),w=n.tanks?n.tanks[r]:null;return S.jsx("div",{className:"game-controls",children:c?_():S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"control-panel",children:[S.jsxs("div",{className:"control-group",children:[S.jsxs("label",{children:["Angle: ",s,"°",w&&w.x>Fm/2?S.jsxs("span",{className:"actual-angle",children:["(Actual: ",(180+s)%360,"°)"]}):"",S.jsx("span",{className:"angle-hint",children:s>270||s<90?` - Aiming ${s>0&&s<90?"up-right":s===0?"right":s===270?"up":"up-left"}`:s>90&&s<270?` - Aiming ${s>180&&s<270?"down-left":s===180?"left":s===90?"down":"down-right"}`:s===90?" - Aiming down":s===270?" - Aiming up":""})]}),S.jsxs("div",{className:"button-group",children:[S.jsx("button",{onClick:()=>p(-45),disabled:!e,className:"angle-btn large",children:"-45°"}),S.jsx("button",{onClick:()=>p(-15),disabled:!e,className:"angle-btn medium",children:"-15°"}),S.jsx("button",{onClick:()=>p(-5),disabled:!e,children:"-5°"}),S.jsx("button",{onClick:()=>p(-1),disabled:!e,children:"-1°"}),S.jsx("button",{onClick:()=>p(1),disabled:!e,children:"+1°"}),S.jsx("button",{onClick:()=>p(5),disabled:!e,children:"+5°"}),S.jsx("button",{onClick:()=>p(15),disabled:!e,className:"angle-btn medium",children:"+15°"}),S.jsx("button",{onClick:()=>p(45),disabled:!e,className:"angle-btn large",children:"+45°"})]})]}),S.jsxs("div",{className:"control-group",children:[S.jsxs("label",{children:["Power: ",a,"%"]}),S.jsxs("div",{className:"button-group",children:[S.jsx("button",{onClick:()=>E(-10),disabled:!e,children:"-10%"}),S.jsx("button",{onClick:()=>E(-5),disabled:!e,children:"-5%"}),S.jsx("button",{onClick:()=>E(5),disabled:!e,children:"+5%"}),S.jsx("button",{onClick:()=>E(10),disabled:!e,children:"+10%"})]})]}),S.jsxs("div",{className:"control-group",children:[S.jsx("label",{children:"Weapon"}),S.jsxs("button",{className:"weapon-select",onClick:()=>h(!0),disabled:!e,children:[u.name,u.limited&&` (${((T=g.find(C=>C.id===u.id))==null?void 0:T.count)||0} left)`]})]}),S.jsx("button",{className:"fire-button",onClick:f,disabled:!e||((k=n.projectile)==null?void 0:k.active),children:"FIRE!"})]}),S.jsx("div",{className:"player-info",children:Object.values(n.tanks||{}).map(C=>S.jsxs("div",{className:`player-status ${C.id===r?"current-player":""} ${C.id===n.currentTurn?"active-turn":""}`,children:[S.jsxs("div",{className:"player-name",children:[C.name,C.id===n.currentTurn&&S.jsx("span",{className:"turn-indicator",children:" (Current Turn)"})]}),S.jsxs("div",{className:"player-health",children:[S.jsx("div",{className:"health-bar",style:{width:`${C.health}%`}}),S.jsxs("span",{children:[C.health,"%"]})]})]},C.id))})]})})}const Um=["#e11d48","#2563eb","#16a34a","#ca8a04"];function cx({user:t}){var w,T;const{gameId:e}=JS(),n=Hd(),[r,i]=R.useState(null),[s,o]=R.useState({}),[a,l]=R.useState({status:"waiting",tanks:{},projectile:null,currentTurn:null,weaponsInitialized:!1}),[u,d]=R.useState("");R.useEffect(()=>{const k=he(ue,`games/${e}`),C=he(ue,`games/${e}/players/${t.uid}`);let I;const b=ra(k,j=>{const L=j.val();if(!L){d("Game not found");return}if(!L.gameType||L.gameType!=="classic"){d("Invalid game type");return}i(L),o(L.players||{}),l({status:L.status||"waiting",tanks:L.tanks||{},projectile:L.projectile||null,currentTurn:L.currentTurn||null,weaponsInitialized:L.weaponsInitialized||!1})});I=ra(he(ue,`games/${e}/players`),j=>{const L=j.val();(!L||Object.keys(L).length===0)&&(console.log("No players left in game, deleting game room"),ir(k))}),Iu(C).remove().then(()=>{console.log("Disconnect handler set up successfully")}).catch(j=>{console.error("Error setting up disconnect handler:",j)});const O=he(ue,".info/connected");return ra(O,j=>{if(j.val()===!0){console.log("Connected to Firebase");const L=he(ue,`games/${e}/players/${t.uid}/lastOnline`);Iu(L).set(PP());const pe=he(ue,`games/${e}/players`),Ae=()=>{gP(pe).then(Le=>{const ne=Le.val();(!ne||Object.keys(ne).length===0)&&(console.log("Game is empty after disconnect, deleting game room"),ir(he(ue,`games/${e}`)))}).catch(Le=>{console.error("Error checking if game is empty:",Le)})};Iu(C).remove().then(Ae)}else console.log("Disconnected from Firebase")}),()=>{b(),I&&I(),ir(C).then(()=>{console.log("Player removed from game on component unmount")}).catch(j=>{console.error("Error removing player from game:",j)})}},[e,t.uid]);const c=(k,C)=>{var b,O;const I=he(ue,`games/${e}`);switch(k){case"fire":vt(I,{projectile:C});break;case"updateProjectile":vt(I,{projectile:C});break;case"endProjectile":const j=Bt({},a.projectile);j?(j.active=!1,vt(I,{projectile:j}),console.log("Ending projectile - Updated projectile:",j)):console.warn("Cannot end projectile - No active projectile found");break;case"damagePlayer":const{playerId:L,damage:pe}=C,Ae=((b=a.tanks[L])==null?void 0:b.health)||100,Le=Math.max(0,Ae-pe);if(vt(he(ue,`games/${e}/tanks/${L}`),{health:Le}),Le<=0){vt(he(ue,`games/${e}/tanks/${L}`),{defeated:!0});const D=Object.values(a.tanks).filter(G=>G.id!==L&&!G.defeated);D.length<=1&&vt(I,{status:"completed",winner:((O=D[0])==null?void 0:O.id)||null,endedAt:Date.now()})}break;case"nextTurn":const ne=Object.keys(a.tanks).filter(D=>!a.tanks[D].defeated);if(ne.length<=1)return;console.log("Next turn - Current turn:",a.currentTurn),console.log("Next turn - Active players:",ne);const Me=a.currentTurn?ne.indexOf(a.currentTurn):-1;console.log("Next turn - Current turn index:",Me);const A=Me>=0&&Me<ne.length-1?Me+1:0,M=ne[A];console.log("Next turn - Next turn index:",A),console.log("Next turn - Next player ID:",M),vt(I,{currentTurn:M});break;default:console.warn("Unknown game event:",k)}},h=()=>{var C;const k=he(ue,`games/${e}/players/${t.uid}`);vt(k,{isReady:!((C=s[t.uid])!=null&&C.isReady)})},g=()=>{if(r.createdBy!==t.uid)return;const k={},C=Object.keys(s);C.forEach((b,O)=>{let j,L;O%2===0?(j=Math.floor(150+Math.random()*50),L=20):(j=Math.floor(600+Math.random()*50),L=160),k[b]={id:b,name:s[b].name,x:j,y:300,angle:L,health:100,power:50,color:Um[O%Um.length],defeated:!1}});const I=he(ue,`games/${e}`);console.log("Starting game with players:",C),console.log("First player (will start):",C[0]),vt(I,{status:"playing",tanks:k,projectile:null,currentTurn:C[0],startedAt:Date.now(),weaponsInitialized:!0})},v=()=>{const k=he(ue,`games/${e}/players/${t.uid}`);if(ir(k),r.createdBy===t.uid&&r.status==="waiting"){const C=he(ue,`games/${e}`);ir(C)}n("/lobby")},p=k=>{c("fire",k)},E=Object.values(s).every(k=>k.isReady),m=(r==null?void 0:r.createdBy)===t.uid,f=a.currentTurn===t.uid,_=()=>{const k=a.tanks[r.winner];return S.jsxs("div",{className:"game-over",children:[S.jsx("h2",{children:"Game Over"}),k?S.jsxs(S.Fragment,{children:[S.jsxs("p",{className:"winner-text",children:[k.name," wins!"]}),S.jsx("div",{className:"winner-tank",style:{backgroundColor:k.color}})]}):S.jsx("p",{children:"It's a draw!"}),S.jsx("button",{className:"return-lobby",onClick:v,children:"Return to Lobby"})]})};return S.jsx("div",{className:"game",children:u?S.jsxs("div",{className:"error-container",children:[S.jsx("p",{className:"error",children:u}),S.jsx("button",{onClick:()=>n("/lobby"),children:"Back to Lobby"})]}):S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"game-header",children:[S.jsx("h2",{children:(r==null?void 0:r.name)||"Loading..."}),S.jsx("button",{className:"leave-btn",onClick:v,children:"Leave Game"})]}),a.status==="waiting"?S.jsxs("div",{className:"waiting-room",children:[S.jsx("h3",{children:"Waiting for players"}),S.jsx("div",{className:"players-list",children:Object.values(s).map(k=>S.jsxs("div",{className:"player-item",children:[S.jsx("span",{children:k.name}),S.jsx("span",{className:`status ${k.isReady?"ready":"not-ready"}`,children:k.isReady?"Ready":"Not Ready"})]},k.id))}),S.jsxs("div",{className:"game-controls",children:[S.jsx("button",{className:`ready-btn ${(w=s[t.uid])!=null&&w.isReady?"ready":""}`,onClick:h,children:(T=s[t.uid])!=null&&T.isReady?"Ready!":"Mark as Ready"}),m&&S.jsx("button",{className:"start-btn",disabled:!E||Object.keys(s).length<2,onClick:g,children:"Start Game"})]}),m&&Object.keys(s).length<2&&S.jsx("p",{className:"info-text",children:"Need at least 2 players to start"}),m&&!E&&Object.keys(s).length>=2&&S.jsx("p",{className:"info-text",children:"Waiting for all players to be ready"})]}):a.status==="completed"?_():S.jsxs("div",{className:"game-area",children:[S.jsx(lx,{gameState:a,onGameEvent:c,currentPlayerId:t.uid}),S.jsx(ux,{onFire:p,isCurrentTurn:f,gameState:a,currentPlayerId:t.uid,gameId:e})]})]})})}console.log("App starting...");console.log("Environment:","production");console.log("Base URL:","/TankWars/");console.log("Current URL:",window.location.href);console.log("Pathname:",window.location.pathname);function dx(){const[t,e]=R.useState(null),[n,r]=R.useState(!0);return R.useEffect(()=>{console.log("App.jsx: Setting up auth state listener");try{const i=XT(hr,s=>{console.log("Auth state changed:",s?"User logged in":"No user"),s&&(console.log("User ID:",s.uid),console.log("Anonymous:",s.isAnonymous)),e(s),r(!1)},s=>{console.error("Auth state change error:",s),r(!1)});return()=>{console.log("Unsubscribing from auth state listener"),i()}}catch(i){console.error("Error setting up auth state listener:",i),r(!1)}},[]),n?S.jsx("div",{className:"loading",children:"Loading..."}):S.jsxs("div",{className:"app",children:[S.jsx("h1",{children:"Tank Wars"}),S.jsxs(pC,{children:[S.jsx(Xo,{path:"/",element:t?S.jsx(uu,{to:"/lobby"}):S.jsx(XA,{})}),S.jsx(Xo,{path:"/lobby",element:t?S.jsx(JA,{user:t}):S.jsx(uu,{to:"/"})}),S.jsx(Xo,{path:"/game/:gameId",element:t?S.jsx(cx,{user:t}):S.jsx(uu,{to:"/"})})]}),!1]})}Pu.createRoot(document.getElementById("root")).render(S.jsx(Ym.StrictMode,{children:S.jsx(_C,{children:S.jsx(dx,{})})}))});export default hx();
