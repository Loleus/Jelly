(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function s1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nd={exports:{}},_l={};var ix;function r1(){if(ix)return _l;ix=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:u,ref:l!==void 0?l:null,props:c}}return _l.Fragment=e,_l.jsx=n,_l.jsxs=n,_l}var ax;function o1(){return ax||(ax=1,nd.exports=r1()),nd.exports}var F=o1(),id={exports:{}},gt={};var sx;function l1(){if(sx)return gt;sx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function _(b){return b===null||typeof b!="object"?null:(b=v&&b[v]||b["@@iterator"],typeof b=="function"?b:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function y(b,H,ie){this.props=b,this.context=H,this.refs=S,this.updater=ie||T}y.prototype.isReactComponent={},y.prototype.setState=function(b,H){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,H,"setState")},y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function L(){}L.prototype=y.prototype;function P(b,H,ie){this.props=b,this.context=H,this.refs=S,this.updater=ie||T}var A=P.prototype=new L;A.constructor=P,R(A,y.prototype),A.isPureReactComponent=!0;var I=Array.isArray;function N(){}var O={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function U(b,H,ie){var ve=ie.ref;return{$$typeof:r,type:b,key:H,ref:ve!==void 0?ve:null,props:ie}}function X(b,H){return U(b.type,H,b.props)}function V(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function q(b){var H={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ie){return H[ie]})}var ue=/\/+/g;function de(b,H){return typeof b=="object"&&b!==null&&b.key!=null?q(""+b.key):H.toString(36)}function Q(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(N,N):(b.status="pending",b.then(function(H){b.status==="pending"&&(b.status="fulfilled",b.value=H)},function(H){b.status==="pending"&&(b.status="rejected",b.reason=H)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function B(b,H,ie,ve,Ee){var K=typeof b;(K==="undefined"||K==="boolean")&&(b=null);var ae=!1;if(b===null)ae=!0;else switch(K){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(b.$$typeof){case r:case e:ae=!0;break;case x:return ae=b._init,B(ae(b._payload),H,ie,ve,Ee)}}if(ae)return Ee=Ee(b),ae=ve===""?"."+de(b,0):ve,I(Ee)?(ie="",ae!=null&&(ie=ae.replace(ue,"$&/")+"/"),B(Ee,H,ie,"",function(Ve){return Ve})):Ee!=null&&(V(Ee)&&(Ee=X(Ee,ie+(Ee.key==null||b&&b.key===Ee.key?"":(""+Ee.key).replace(ue,"$&/")+"/")+ae)),H.push(Ee)),1;ae=0;var pe=ve===""?".":ve+":";if(I(b))for(var Ce=0;Ce<b.length;Ce++)ve=b[Ce],K=pe+de(ve,Ce),ae+=B(ve,H,ie,K,Ee);else if(Ce=_(b),typeof Ce=="function")for(b=Ce.call(b),Ce=0;!(ve=b.next()).done;)ve=ve.value,K=pe+de(ve,Ce++),ae+=B(ve,H,ie,K,Ee);else if(K==="object"){if(typeof b.then=="function")return B(Q(b),H,ie,ve,Ee);throw H=String(b),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ae}function Y(b,H,ie){if(b==null)return b;var ve=[],Ee=0;return B(b,ve,"","",function(K){return H.call(ie,K,Ee++)}),ve}function ne(b){if(b._status===-1){var H=b._result;H=H(),H.then(function(ie){(b._status===0||b._status===-1)&&(b._status=1,b._result=ie)},function(ie){(b._status===0||b._status===-1)&&(b._status=2,b._result=ie)}),b._status===-1&&(b._status=0,b._result=H)}if(b._status===1)return b._result.default;throw b._result}var me=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},G={map:Y,forEach:function(b,H,ie){Y(b,function(){H.apply(this,arguments)},ie)},count:function(b){var H=0;return Y(b,function(){H++}),H},toArray:function(b){return Y(b,function(H){return H})||[]},only:function(b){if(!V(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return gt.Activity=g,gt.Children=G,gt.Component=y,gt.Fragment=n,gt.Profiler=l,gt.PureComponent=P,gt.StrictMode=s,gt.Suspense=m,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,gt.__COMPILER_RUNTIME={__proto__:null,c:function(b){return O.H.useMemoCache(b)}},gt.cache=function(b){return function(){return b.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(b,H,ie){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var ve=R({},b.props),Ee=b.key;if(H!=null)for(K in H.key!==void 0&&(Ee=""+H.key),H)!E.call(H,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&H.ref===void 0||(ve[K]=H[K]);var K=arguments.length-2;if(K===1)ve.children=ie;else if(1<K){for(var ae=Array(K),pe=0;pe<K;pe++)ae[pe]=arguments[pe+2];ve.children=ae}return U(b.type,Ee,ve)},gt.createContext=function(b){return b={$$typeof:u,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:c,_context:b},b},gt.createElement=function(b,H,ie){var ve,Ee={},K=null;if(H!=null)for(ve in H.key!==void 0&&(K=""+H.key),H)E.call(H,ve)&&ve!=="key"&&ve!=="__self"&&ve!=="__source"&&(Ee[ve]=H[ve]);var ae=arguments.length-2;if(ae===1)Ee.children=ie;else if(1<ae){for(var pe=Array(ae),Ce=0;Ce<ae;Ce++)pe[Ce]=arguments[Ce+2];Ee.children=pe}if(b&&b.defaultProps)for(ve in ae=b.defaultProps,ae)Ee[ve]===void 0&&(Ee[ve]=ae[ve]);return U(b,K,Ee)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(b){return{$$typeof:d,render:b}},gt.isValidElement=V,gt.lazy=function(b){return{$$typeof:x,_payload:{_status:-1,_result:b},_init:ne}},gt.memo=function(b,H){return{$$typeof:p,type:b,compare:H===void 0?null:H}},gt.startTransition=function(b){var H=O.T,ie={};O.T=ie;try{var ve=b(),Ee=O.S;Ee!==null&&Ee(ie,ve),typeof ve=="object"&&ve!==null&&typeof ve.then=="function"&&ve.then(N,me)}catch(K){me(K)}finally{H!==null&&ie.types!==null&&(H.types=ie.types),O.T=H}},gt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},gt.use=function(b){return O.H.use(b)},gt.useActionState=function(b,H,ie){return O.H.useActionState(b,H,ie)},gt.useCallback=function(b,H){return O.H.useCallback(b,H)},gt.useContext=function(b){return O.H.useContext(b)},gt.useDebugValue=function(){},gt.useDeferredValue=function(b,H){return O.H.useDeferredValue(b,H)},gt.useEffect=function(b,H){return O.H.useEffect(b,H)},gt.useEffectEvent=function(b){return O.H.useEffectEvent(b)},gt.useId=function(){return O.H.useId()},gt.useImperativeHandle=function(b,H,ie){return O.H.useImperativeHandle(b,H,ie)},gt.useInsertionEffect=function(b,H){return O.H.useInsertionEffect(b,H)},gt.useLayoutEffect=function(b,H){return O.H.useLayoutEffect(b,H)},gt.useMemo=function(b,H){return O.H.useMemo(b,H)},gt.useOptimistic=function(b,H){return O.H.useOptimistic(b,H)},gt.useReducer=function(b,H,ie){return O.H.useReducer(b,H,ie)},gt.useRef=function(b){return O.H.useRef(b)},gt.useState=function(b){return O.H.useState(b)},gt.useSyncExternalStore=function(b,H,ie){return O.H.useSyncExternalStore(b,H,ie)},gt.useTransition=function(){return O.H.useTransition()},gt.version="19.2.8",gt}var rx;function Yp(){return rx||(rx=1,id.exports=l1()),id.exports}var mt=Yp();const A_=s1(mt);var ad={exports:{}},yl={},sd={exports:{}},rd={};var ox;function c1(){return ox||(ox=1,(function(r){function e(B,Y){var ne=B.length;B.push(Y);e:for(;0<ne;){var me=ne-1>>>1,G=B[me];if(0<l(G,Y))B[me]=Y,B[ne]=G,ne=me;else break e}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Y=B[0],ne=B.pop();if(ne!==Y){B[0]=ne;e:for(var me=0,G=B.length,b=G>>>1;me<b;){var H=2*(me+1)-1,ie=B[H],ve=H+1,Ee=B[ve];if(0>l(ie,ne))ve<G&&0>l(Ee,ie)?(B[me]=Ee,B[ve]=ne,me=ve):(B[me]=ie,B[H]=ne,me=H);else if(ve<G&&0>l(Ee,ne))B[me]=Ee,B[ve]=ne,me=ve;else break e}}return Y}function l(B,Y){var ne=B.sortIndex-Y.sortIndex;return ne!==0?ne:B.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],x=1,g=null,v=3,_=!1,T=!1,R=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var Y=n(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=B)s(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=n(p)}}function I(B){if(R=!1,A(B),!T)if(n(m)!==null)T=!0,N||(N=!0,q());else{var Y=n(p);Y!==null&&Q(I,Y.startTime-B)}}var N=!1,O=-1,E=5,U=-1;function X(){return S?!0:!(r.unstable_now()-U<E)}function V(){if(S=!1,N){var B=r.unstable_now();U=B;var Y=!0;try{e:{T=!1,R&&(R=!1,L(O),O=-1),_=!0;var ne=v;try{t:{for(A(B),g=n(m);g!==null&&!(g.expirationTime>B&&X());){var me=g.callback;if(typeof me=="function"){g.callback=null,v=g.priorityLevel;var G=me(g.expirationTime<=B);if(B=r.unstable_now(),typeof G=="function"){g.callback=G,A(B),Y=!0;break t}g===n(m)&&s(m),A(B)}else s(m);g=n(m)}if(g!==null)Y=!0;else{var b=n(p);b!==null&&Q(I,b.startTime-B),Y=!1}}break e}finally{g=null,v=ne,_=!1}Y=void 0}}finally{Y?q():N=!1}}}var q;if(typeof P=="function")q=function(){P(V)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=V,q=function(){de.postMessage(null)}}else q=function(){y(V,0)};function Q(B,Y){O=y(function(){B(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var ne=v;v=Y;try{return B()}finally{v=ne}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=v;v=B;try{return Y()}finally{v=ne}},r.unstable_scheduleCallback=function(B,Y,ne){var me=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?me+ne:me):ne=me,B){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ne+G,B={id:x++,callback:Y,priorityLevel:B,startTime:ne,expirationTime:G,sortIndex:-1},ne>me?(B.sortIndex=ne,e(p,B),n(m)===null&&B===n(p)&&(R?(L(O),O=-1):R=!0,Q(I,ne-me))):(B.sortIndex=G,e(m,B),T||_||(T=!0,N||(N=!0,q()))),B},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(B){var Y=v;return function(){var ne=v;v=Y;try{return B.apply(this,arguments)}finally{v=ne}}}})(rd)),rd}var lx;function u1(){return lx||(lx=1,sd.exports=c1()),sd.exports}var od={exports:{}},Xn={};var cx;function f1(){if(cx)return Xn;cx=1;var r=Yp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Xn.flushSync=function(m){var p=u.T,x=s.p;try{if(u.T=null,s.p=2,m)return m()}finally{u.T=p,s.p=x,s.d.f()}},Xn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Xn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Xn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:_}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Xn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Xn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Xn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Xn.requestFormReset=function(m){s.d.r(m)},Xn.unstable_batchedUpdates=function(m,p){return m(p)},Xn.useFormState=function(m,p,x){return u.H.useFormState(m,p,x)},Xn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Xn.version="19.2.8",Xn}var ux;function C_(){if(ux)return od.exports;ux=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=f1(),od.exports}var fx;function h1(){if(fx)return yl;fx=1;var r=u1(),e=Yp(),n=C_();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,o=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(o=f.return,o!==null){a=o;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return m(f),t;if(h===o)return m(f),i;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=f,o=h;else{for(var M=!1,D=f.child;D;){if(D===a){M=!0,a=f,o=h;break}if(D===o){M=!0,o=f,a=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===a){M=!0,a=h,o=f;break}if(D===o){M=!0,o=h,a=f;break}D=D.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function x(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=x(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),P=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case P:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case A:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case E:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}var Q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},me=[],G=-1;function b(t){return{current:t}}function H(t){0>G||(t.current=me[G],me[G]=null,G--)}function ie(t,i){G++,me[G]=t.current,t.current=i}var ve=b(null),Ee=b(null),K=b(null),ae=b(null);function pe(t,i){switch(ie(K,i),ie(Ee,t),ie(ve,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?wv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=wv(i),t=Av(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}H(ve),ie(ve,t)}function Ce(){H(ve),H(Ee),H(K)}function Ve(t){t.memoizedState!==null&&ie(ae,t);var i=ve.current,a=Av(i,t.type);i!==a&&(ie(Ee,t),ie(ve,a))}function Ne(t){Ee.current===t&&(H(ve),H(Ee)),ae.current===t&&(H(ae),ml._currentValue=ne)}var ct,tt;function ke(t){if(ct===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ct=i&&i[1]||"",tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+t+tt}var ot=!1;function Ae(t,i){if(!t||ot)return"";ot=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(ge){var he=ge}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(ge){he=ge}t.call(Te.prototype)}}else{try{throw Error()}catch(ge){he=ge}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(ge){if(ge&&he&&typeof ge.stack=="string")return[ge.stack,he.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],D=h[1];if(M&&D){var W=M.split(`
`),re=D.split(`
`);for(f=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(o===W.length||f===re.length)for(o=W.length-1,f=re.length-1;1<=o&&0<=f&&W[o]!==re[f];)f--;for(;1<=o&&0<=f;o--,f--)if(W[o]!==re[f]){if(o!==1||f!==1)do if(o--,f--,0>f||W[o]!==re[f]){var Se=`
`+W[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=f);break}}}finally{ot=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ke(a):""}function Qe(t,i){switch(t.tag){case 26:case 27:case 5:return ke(t.type);case 16:return ke("Lazy");case 13:return t.child!==i&&i!==null?ke("Suspense Fallback"):ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return Ae(t.type,!1);case 11:return Ae(t.type.render,!1);case 1:return Ae(t.type,!0);case 31:return ke("Activity");default:return""}}function Je(t){try{var i="",a=null;do i+=Qe(t,a),a=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ut=Object.prototype.hasOwnProperty,Rt=r.unstable_scheduleCallback,Lt=r.unstable_cancelCallback,$t=r.unstable_shouldYield,J=r.unstable_requestPaint,zt=r.unstable_now,Nt=r.unstable_getCurrentPriorityLevel,z=r.unstable_ImmediatePriority,w=r.unstable_UserBlockingPriority,te=r.unstable_NormalPriority,ce=r.unstable_LowPriority,xe=r.unstable_IdlePriority,Re=r.log,Oe=r.unstable_setDisableYieldValue,_e=null,ye=null;function Le(t){if(typeof Re=="function"&&Oe(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(_e,t)}catch{}}var Ye=Math.clz32?Math.clz32:it,Fe=Math.log,Pe=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Fe(t)/Pe|0)|0}var at=256,pt=262144,Z=4194304;function De(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,i,a){var o=t.pendingLanes;if(o===0)return 0;var f=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var D=o&134217727;return D!==0?(o=D&~h,o!==0?f=De(o):(M&=D,M!==0?f=De(M):a||(a=D&~t,a!==0&&(f=De(a))))):(D=o&~h,D!==0?f=De(D):M!==0?f=De(M):a||(a=o&~t,a!==0&&(f=De(a)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:f}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ge(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function $e(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function qe(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function cn(t,i,a,o,f,h){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var D=t.entanglements,W=t.expirationTimes,re=t.hiddenUpdates;for(a=M&~a;0<a;){var Se=31-Ye(a),Te=1<<Se;D[Se]=0,W[Se]=-1;var he=re[Se];if(he!==null)for(re[Se]=null,Se=0;Se<he.length;Se++){var ge=he[Se];ge!==null&&(ge.lane&=-536870913)}a&=~Te}o!==0&&Vt(t,o,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~i))}function Vt(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Ye(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function pi(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var o=31-Ye(a),f=1<<o;f&i|t[o]&i&&(t[o]|=i),a&=~f}}function mi(t,i){var a=i&-i;return a=(a&42)!==0?1:Ro(a),(a&(t.suspendedLanes|i))!==0?0:a}function Ro(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Do(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Lo(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Kv(t.type))}function gr(t,i){var a=Y.p;try{return Y.p=t,i()}finally{Y.p=a}}var na=Math.random().toString(36).slice(2),xn="__reactFiber$"+na,In="__reactProps$"+na,ii="__reactContainer$"+na,Us="__reactEvents$"+na,Xl="__reactListeners$"+na,Wl="__reactHandles$"+na,Os="__reactResources$"+na,Za="__reactMarker$"+na;function Ka(t){delete t[xn],delete t[In],delete t[Us],delete t[Xl],delete t[Wl]}function va(t){var i=t[xn];if(i)return i;for(var a=t.parentNode;a;){if(i=a[ii]||a[xn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Ov(t);t!==null;){if(a=t[xn])return a;t=Ov(t)}return i}t=a,a=t.parentNode}return null}function xa(t){if(t=t[xn]||t[ii]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ps(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function Qa(t){var i=t[Os];return i||(i=t[Os]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function _n(t){t[Za]=!0}var ql=new Set,C={};function $(t,i){fe(t,i),fe(t+"Capture",i)}function fe(t,i){for(C[t]=i,t=0;t<i.length;t++)ql.add(i[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},Be={};function We(t){return ut.call(Be,t)?!0:ut.call(le,t)?!1:oe.test(t)?Be[t]=!0:(le[t]=!0,!1)}function Ie(t,i,a){if(We(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function Ze(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function je(t,i,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+o)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(t,i,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){a=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ot(t){if(!t._valueTracker){var i=xt(t)?"checked":"value";t._valueTracker=nt(t,i,""+t[i])}}function un(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return t&&(o=xt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(i.setValue(t),!0):!1}function en(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kt=/[\n"\\]/g;function Yt(t){return t.replace(kt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xe(t,i,a,o,f,h,M,D){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+st(i)):t.value!==""+st(i)&&(t.value=""+st(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Mt(t,M,st(i)):a!=null?Mt(t,M,st(a)):o!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+st(D):t.removeAttribute("name")}function Yn(t,i,a,o,f,h,M,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Ot(t);return}a=a!=null?""+st(a):"",i=i!=null?""+st(i):a,D||i===t.value||(t.value=i),t.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=D?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Ot(t)}function Mt(t,i,a){i==="number"&&en(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tn(t,i,a,o){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&o&&(t[a].defaultSelected=!0)}else{for(a=""+st(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,o&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function gi(t,i,a){if(i!=null&&(i=""+st(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+st(a):""}function Vi(t,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=st(i),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ot(t)}function vi(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fn(t,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,a):typeof a!="number"||a===0||Xt.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function ki(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&a[f]!==o&&fn(t,f,o)}else for(var h in i)i.hasOwnProperty(h)&&fn(t,h,i[h])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ja=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Is(t){return Ja.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function _a(){}var Ju=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vr=null,xr=null;function Tm(t){var i=xa(t);if(i&&(t=i.stateNode)){var a=t[In]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==t&&o.form===t.form){var f=o[In]||null;if(!f)throw Error(s(90));Xe(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===t.form&&un(o)}break e;case"textarea":gi(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Tn(t,!!a.multiple,i,!1)}}}var ef=!1;function wm(t,i,a){if(ef)return t(i,a);ef=!0;try{var o=t(i);return o}finally{if(ef=!1,(vr!==null||xr!==null)&&(Oc(),vr&&(i=vr,t=xr,xr=vr=null,Tm(i),t)))for(i=0;i<t.length;i++)Tm(t[i])}}function No(t,i){var a=t.stateNode;if(a===null)return null;var o=a[In]||null;if(o===null)return null;a=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=!1;if(ya)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){tf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{tf=!1}var $a=null,nf=null,jl=null;function Am(){if(jl)return jl;var t,i=nf,a=i.length,o,f="value"in $a?$a.value:$a.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var M=a-t;for(o=1;o<=M&&i[a-o]===f[h-o];o++);return jl=f.slice(t,1<o?1-o:void 0)}function Zl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function Cm(){return!1}function ai(t){function i(a,o,f,h,M){this._reactName=a,this._targetInst=f,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Kl:Cm,this.isPropagationStopped=Cm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),i}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=ai(Fs),Oo=g({},Fs,{view:0,detail:0}),iS=ai(Oo),af,sf,Po,Jl=g({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Po&&(Po&&t.type==="mousemove"?(af=t.screenX-Po.screenX,sf=t.screenY-Po.screenY):sf=af=0,Po=t),af)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),Rm=ai(Jl),aS=g({},Jl,{dataTransfer:0}),sS=ai(aS),rS=g({},Oo,{relatedTarget:0}),rf=ai(rS),oS=g({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=ai(oS),cS=g({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uS=ai(cS),fS=g({},Fs,{data:0}),Dm=ai(fS),hS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=pS[t])?!!i[t]:!1}function of(){return mS}var gS=g({},Oo,{key:function(t){if(t.key){var i=hS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vS=ai(gS),xS=g({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=ai(xS),_S=g({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),yS=ai(_S),SS=g({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=ai(SS),bS=g({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=ai(bS),TS=g({},Fs,{newState:0,oldState:0}),wS=ai(TS),AS=[9,13,27,32],lf=ya&&"CompositionEvent"in window,Io=null;ya&&"documentMode"in document&&(Io=document.documentMode);var CS=ya&&"TextEvent"in window&&!Io,Nm=ya&&(!lf||Io&&8<Io&&11>=Io),Um=" ",Om=!1;function Pm(t,i){switch(t){case"keyup":return AS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function RS(t,i){switch(t){case"compositionend":return Im(i);case"keypress":return i.which!==32?null:(Om=!0,Um);case"textInput":return t=i.data,t===Um&&Om?null:t;default:return null}}function DS(t,i){if(_r)return t==="compositionend"||!lf&&Pm(t,i)?(t=Am(),jl=nf=$a=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Nm&&i.locale!=="ko"?null:i.data;default:return null}}var LS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!LS[t.type]:i==="textarea"}function zm(t,i,a,o){vr?xr?xr.push(o):xr=[o]:vr=o,i=Gc(i,"onChange"),0<i.length&&(a=new Ql("onChange","change",null,a,o),t.push({event:a,listeners:i}))}var Fo=null,zo=null;function NS(t){yv(t,0)}function $l(t){var i=Ps(t);if(un(i))return t}function Bm(t,i){if(t==="change")return i}var Hm=!1;if(ya){var cf;if(ya){var uf="oninput"in document;if(!uf){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),uf=typeof Gm.oninput=="function"}cf=uf}else cf=!1;Hm=cf&&(!document.documentMode||9<document.documentMode)}function Vm(){Fo&&(Fo.detachEvent("onpropertychange",km),zo=Fo=null)}function km(t){if(t.propertyName==="value"&&$l(zo)){var i=[];zm(i,zo,t,$u(t)),wm(NS,i)}}function US(t,i,a){t==="focusin"?(Vm(),Fo=i,zo=a,Fo.attachEvent("onpropertychange",km)):t==="focusout"&&Vm()}function OS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(zo)}function PS(t,i){if(t==="click")return $l(i)}function IS(t,i){if(t==="input"||t==="change")return $l(i)}function FS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var xi=typeof Object.is=="function"?Object.is:FS;function Bo(t,i){if(xi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var f=a[o];if(!ut.call(i,f)||!xi(t[f],i[f]))return!1}return!0}function Ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,i){var a=Ym(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=i&&o>=i)return{node:a,offset:i-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ym(a)}}function Wm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Wm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=en(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=en(t.document)}return i}function ff(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var zS=ya&&"documentMode"in document&&11>=document.documentMode,yr=null,hf=null,Ho=null,df=!1;function jm(t,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;df||yr==null||yr!==en(o)||(o=yr,"selectionStart"in o&&ff(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ho&&Bo(Ho,o)||(Ho=o,o=Gc(hf,"onSelect"),0<o.length&&(i=new Ql("onSelect","select",null,i,a),t.push({event:i,listeners:o}),i.target=yr)))}function zs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Sr={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionrun:zs("Transition","TransitionRun"),transitionstart:zs("Transition","TransitionStart"),transitioncancel:zs("Transition","TransitionCancel"),transitionend:zs("Transition","TransitionEnd")},pf={},Zm={};ya&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Bs(t){if(pf[t])return pf[t];if(!Sr[t])return t;var i=Sr[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Zm)return pf[t]=i[a];return t}var Km=Bs("animationend"),Qm=Bs("animationiteration"),Jm=Bs("animationstart"),BS=Bs("transitionrun"),HS=Bs("transitionstart"),GS=Bs("transitioncancel"),$m=Bs("transitionend"),e0=new Map,mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mf.push("scrollEnd");function Yi(t,i){e0.set(t,i),$(i,[t])}var ec=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ri=[],Mr=0,gf=0;function tc(){for(var t=Mr,i=gf=Mr=0;i<t;){var a=Ri[i];Ri[i++]=null;var o=Ri[i];Ri[i++]=null;var f=Ri[i];Ri[i++]=null;var h=Ri[i];if(Ri[i++]=null,o!==null&&f!==null){var M=o.pending;M===null?f.next=f:(f.next=M.next,M.next=f),o.pending=f}h!==0&&t0(a,f,h)}}function nc(t,i,a,o){Ri[Mr++]=t,Ri[Mr++]=i,Ri[Mr++]=a,Ri[Mr++]=o,gf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function vf(t,i,a,o){return nc(t,i,a,o),ic(t)}function Hs(t,i){return nc(t,null,null,i),ic(t)}function t0(t,i,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var f=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-Ye(a),t=h.hiddenUpdates,o=t[f],o===null?t[f]=[i]:o.push(i),i.lane=a|536870912),h):null}function ic(t){if(50<ll)throw ll=0,wh=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var br={};function VS(t,i,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(t,i,a,o){return new VS(t,i,a,o)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sa(t,i){var a=t.alternate;return a===null?(a=_i(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function n0(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function ac(t,i,a,o,f,h){var M=0;if(o=t,typeof t=="function")xf(t)&&(M=1);else if(typeof t=="string")M=qM(t,a,ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=_i(31,a,i,f),t.elementType=U,t.lanes=h,t;case R:return Gs(a.children,f,h,i);case S:M=8,f|=24;break;case y:return t=_i(12,a,i,f|2),t.elementType=y,t.lanes=h,t;case I:return t=_i(13,a,i,f),t.elementType=I,t.lanes=h,t;case N:return t=_i(19,a,i,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:M=10;break e;case L:M=9;break e;case A:M=11;break e;case O:M=14;break e;case E:M=16,o=null;break e}M=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return i=_i(M,a,i,f),i.elementType=t,i.type=o,i.lanes=h,i}function Gs(t,i,a,o){return t=_i(7,t,o,i),t.lanes=a,t}function _f(t,i,a){return t=_i(6,t,null,i),t.lanes=a,t}function i0(t){var i=_i(18,null,null,0);return i.stateNode=t,i}function yf(t,i,a){return i=_i(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var a0=new WeakMap;function Di(t,i){if(typeof t=="object"&&t!==null){var a=a0.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Je(i)},a0.set(t,i),i)}return{value:t,source:i,stack:Je(i)}}var Er=[],Tr=0,sc=null,Go=0,Li=[],Ni=0,es=null,aa=1,sa="";function Ma(t,i){Er[Tr++]=Go,Er[Tr++]=sc,sc=t,Go=i}function s0(t,i,a){Li[Ni++]=aa,Li[Ni++]=sa,Li[Ni++]=es,es=t;var o=aa;t=sa;var f=32-Ye(o)-1;o&=~(1<<f),a+=1;var h=32-Ye(i)+f;if(30<h){var M=f-f%5;h=(o&(1<<M)-1).toString(32),o>>=M,f-=M,aa=1<<32-Ye(i)+f|a<<f|o,sa=h+t}else aa=1<<h|a<<f|o,sa=t}function Sf(t){t.return!==null&&(Ma(t,1),s0(t,1,0))}function Mf(t){for(;t===sc;)sc=Er[--Tr],Er[Tr]=null,Go=Er[--Tr],Er[Tr]=null;for(;t===es;)es=Li[--Ni],Li[Ni]=null,sa=Li[--Ni],Li[Ni]=null,aa=Li[--Ni],Li[Ni]=null}function r0(t,i){Li[Ni++]=aa,Li[Ni++]=sa,Li[Ni++]=es,aa=i.id,sa=i.overflow,es=t}var Fn=null,sn=null,Dt=!1,ts=null,Ui=!1,bf=Error(s(519));function ns(t){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Di(i,t)),bf}function o0(t){var i=t.stateNode,a=t.type,o=t.memoizedProps;switch(i[xn]=t,i[In]=o,a){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(a=0;a<ul.length;a++)Et(ul[a],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Et("invalid",i),Yn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",i);break;case"textarea":Et("invalid",i),Vi(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||Ev(i.textContent,a)?(o.popover!=null&&(Et("beforetoggle",i),Et("toggle",i)),o.onScroll!=null&&Et("scroll",i),o.onScrollEnd!=null&&Et("scrollend",i),o.onClick!=null&&(i.onclick=_a),i=!0):i=!1,i||ns(t,!0)}function l0(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Fn=Fn.return}}function wr(t){if(t!==Fn)return!1;if(!Dt)return l0(t),Dt=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gh(t.type,t.memoizedProps)),a=!a),a&&sn&&ns(t),l0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));sn=Uv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));sn=Uv(t)}else i===27?(i=sn,gs(t.type)?(t=Wh,Wh=null,sn=t):sn=i):sn=Fn?Pi(t.stateNode.nextSibling):null;return!0}function Vs(){sn=Fn=null,Dt=!1}function Ef(){var t=ts;return t!==null&&(li===null?li=t:li.push.apply(li,t),ts=null),t}function Vo(t){ts===null?ts=[t]:ts.push(t)}var Tf=b(null),ks=null,ba=null;function is(t,i,a){ie(Tf,i._currentValue),i._currentValue=a}function Ea(t){t._currentValue=Tf.current,H(Tf)}function wf(t,i,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===a)break;t=t.return}}function Af(t,i,a,o){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var M=f.child;h=h.firstContext;e:for(;h!==null;){var D=h;h=f;for(var W=0;W<i.length;W++)if(D.context===i[W]){h.lanes|=a,D=h.alternate,D!==null&&(D.lanes|=a),wf(h.return,a,t),o||(M=null);break e}h=D.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),wf(M,a,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Ar(t,i,a,o){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var D=f.type;xi(f.pendingProps.value,M.value)||(t!==null?t.push(D):t=[D])}}else if(f===ae.current){if(M=f.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(ml):t=[ml])}f=f.return}t!==null&&Af(i,t,a,o),i.flags|=262144}function rc(t){for(t=t.firstContext;t!==null;){if(!xi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ys(t){ks=t,ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return c0(ks,t)}function oc(t,i){return ks===null&&Ys(t),c0(t,i)}function c0(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ba===null){if(t===null)throw Error(s(308));ba=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ba=ba.next=i;return a}var kS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},YS=r.unstable_scheduleCallback,XS=r.unstable_NormalPriority,yn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cf(){return{controller:new kS,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&YS(XS,function(){t.controller.abort()})}var Yo=null,Rf=0,Cr=0,Rr=null;function WS(t,i){if(Yo===null){var a=Yo=[];Rf=0,Cr=Nh(),Rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Rf++,i.then(u0,u0),i}function u0(){if(--Rf===0&&Yo!==null){Rr!==null&&(Rr.status="fulfilled");var t=Yo;Yo=null,Cr=0,Rr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function qS(t,i){var a=[],o={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),o}var f0=B.S;B.S=function(t,i){jg=zt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&WS(t,i),f0!==null&&f0(t,i)};var Xs=b(null);function Df(){var t=Xs.current;return t!==null?t:tn.pooledCache}function lc(t,i){i===null?ie(Xs,Xs.current):ie(Xs,i.pool)}function h0(){var t=Df();return t===null?null:{parent:yn._currentValue,pool:t}}var Dr=Error(s(460)),Lf=Error(s(474)),cc=Error(s(542)),uc={then:function(){}};function d0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function p0(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(_a,_a),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,g0(t),t;default:if(typeof i.status=="string")i.then(_a,_a);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,g0(t),t}throw qs=i,Dr}}function Ws(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qs=a,Dr):a}}var qs=null;function m0(){if(qs===null)throw Error(s(459));var t=qs;return qs=null,t}function g0(t){if(t===Dr||t===cc)throw Error(s(483))}var Lr=null,Xo=0;function fc(t){var i=Xo;return Xo+=1,Lr===null&&(Lr=[]),p0(Lr,t,i)}function Wo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function hc(t,i){throw i.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function v0(t){function i(ee,j){if(t){var se=ee.deletions;se===null?(ee.deletions=[j],ee.flags|=16):se.push(j)}}function a(ee,j){if(!t)return null;for(;j!==null;)i(ee,j),j=j.sibling;return null}function o(ee){for(var j=new Map;ee!==null;)ee.key!==null?j.set(ee.key,ee):j.set(ee.index,ee),ee=ee.sibling;return j}function f(ee,j){return ee=Sa(ee,j),ee.index=0,ee.sibling=null,ee}function h(ee,j,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<j?(ee.flags|=67108866,j):se):(ee.flags|=67108866,j)):(ee.flags|=1048576,j)}function M(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function D(ee,j,se,be){return j===null||j.tag!==6?(j=_f(se,ee.mode,be),j.return=ee,j):(j=f(j,se),j.return=ee,j)}function W(ee,j,se,be){var rt=se.type;return rt===R?Se(ee,j,se.props.children,be,se.key):j!==null&&(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===E&&Ws(rt)===j.type)?(j=f(j,se.props),Wo(j,se),j.return=ee,j):(j=ac(se.type,se.key,se.props,null,ee.mode,be),Wo(j,se),j.return=ee,j)}function re(ee,j,se,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==se.containerInfo||j.stateNode.implementation!==se.implementation?(j=yf(se,ee.mode,be),j.return=ee,j):(j=f(j,se.children||[]),j.return=ee,j)}function Se(ee,j,se,be,rt){return j===null||j.tag!==7?(j=Gs(se,ee.mode,be,rt),j.return=ee,j):(j=f(j,se),j.return=ee,j)}function Te(ee,j,se){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=_f(""+j,ee.mode,se),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _:return se=ac(j.type,j.key,j.props,null,ee.mode,se),Wo(se,j),se.return=ee,se;case T:return j=yf(j,ee.mode,se),j.return=ee,j;case E:return j=Ws(j),Te(ee,j,se)}if(Q(j)||q(j))return j=Gs(j,ee.mode,se,null),j.return=ee,j;if(typeof j.then=="function")return Te(ee,fc(j),se);if(j.$$typeof===P)return Te(ee,oc(ee,j),se);hc(ee,j)}return null}function he(ee,j,se,be){var rt=j!==null?j.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return rt!==null?null:D(ee,j,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case _:return se.key===rt?W(ee,j,se,be):null;case T:return se.key===rt?re(ee,j,se,be):null;case E:return se=Ws(se),he(ee,j,se,be)}if(Q(se)||q(se))return rt!==null?null:Se(ee,j,se,be,null);if(typeof se.then=="function")return he(ee,j,fc(se),be);if(se.$$typeof===P)return he(ee,j,oc(ee,se),be);hc(ee,se)}return null}function ge(ee,j,se,be,rt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ee=ee.get(se)||null,D(j,ee,""+be,rt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case _:return ee=ee.get(be.key===null?se:be.key)||null,W(j,ee,be,rt);case T:return ee=ee.get(be.key===null?se:be.key)||null,re(j,ee,be,rt);case E:return be=Ws(be),ge(ee,j,se,be,rt)}if(Q(be)||q(be))return ee=ee.get(se)||null,Se(j,ee,be,rt,null);if(typeof be.then=="function")return ge(ee,j,se,fc(be),rt);if(be.$$typeof===P)return ge(ee,j,se,oc(j,be),rt);hc(j,be)}return null}function Ke(ee,j,se,be){for(var rt=null,Pt=null,et=j,yt=j=0,At=null;et!==null&&yt<se.length;yt++){et.index>yt?(At=et,et=null):At=et.sibling;var It=he(ee,et,se[yt],be);if(It===null){et===null&&(et=At);break}t&&et&&It.alternate===null&&i(ee,et),j=h(It,j,yt),Pt===null?rt=It:Pt.sibling=It,Pt=It,et=At}if(yt===se.length)return a(ee,et),Dt&&Ma(ee,yt),rt;if(et===null){for(;yt<se.length;yt++)et=Te(ee,se[yt],be),et!==null&&(j=h(et,j,yt),Pt===null?rt=et:Pt.sibling=et,Pt=et);return Dt&&Ma(ee,yt),rt}for(et=o(et);yt<se.length;yt++)At=ge(et,ee,yt,se[yt],be),At!==null&&(t&&At.alternate!==null&&et.delete(At.key===null?yt:At.key),j=h(At,j,yt),Pt===null?rt=At:Pt.sibling=At,Pt=At);return t&&et.forEach(function(Ss){return i(ee,Ss)}),Dt&&Ma(ee,yt),rt}function ft(ee,j,se,be){if(se==null)throw Error(s(151));for(var rt=null,Pt=null,et=j,yt=j=0,At=null,It=se.next();et!==null&&!It.done;yt++,It=se.next()){et.index>yt?(At=et,et=null):At=et.sibling;var Ss=he(ee,et,It.value,be);if(Ss===null){et===null&&(et=At);break}t&&et&&Ss.alternate===null&&i(ee,et),j=h(Ss,j,yt),Pt===null?rt=Ss:Pt.sibling=Ss,Pt=Ss,et=At}if(It.done)return a(ee,et),Dt&&Ma(ee,yt),rt;if(et===null){for(;!It.done;yt++,It=se.next())It=Te(ee,It.value,be),It!==null&&(j=h(It,j,yt),Pt===null?rt=It:Pt.sibling=It,Pt=It);return Dt&&Ma(ee,yt),rt}for(et=o(et);!It.done;yt++,It=se.next())It=ge(et,ee,yt,It.value,be),It!==null&&(t&&It.alternate!==null&&et.delete(It.key===null?yt:It.key),j=h(It,j,yt),Pt===null?rt=It:Pt.sibling=It,Pt=It);return t&&et.forEach(function(a1){return i(ee,a1)}),Dt&&Ma(ee,yt),rt}function Jt(ee,j,se,be){if(typeof se=="object"&&se!==null&&se.type===R&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case _:e:{for(var rt=se.key;j!==null;){if(j.key===rt){if(rt=se.type,rt===R){if(j.tag===7){a(ee,j.sibling),be=f(j,se.props.children),be.return=ee,ee=be;break e}}else if(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===E&&Ws(rt)===j.type){a(ee,j.sibling),be=f(j,se.props),Wo(be,se),be.return=ee,ee=be;break e}a(ee,j);break}else i(ee,j);j=j.sibling}se.type===R?(be=Gs(se.props.children,ee.mode,be,se.key),be.return=ee,ee=be):(be=ac(se.type,se.key,se.props,null,ee.mode,be),Wo(be,se),be.return=ee,ee=be)}return M(ee);case T:e:{for(rt=se.key;j!==null;){if(j.key===rt)if(j.tag===4&&j.stateNode.containerInfo===se.containerInfo&&j.stateNode.implementation===se.implementation){a(ee,j.sibling),be=f(j,se.children||[]),be.return=ee,ee=be;break e}else{a(ee,j);break}else i(ee,j);j=j.sibling}be=yf(se,ee.mode,be),be.return=ee,ee=be}return M(ee);case E:return se=Ws(se),Jt(ee,j,se,be)}if(Q(se))return Ke(ee,j,se,be);if(q(se)){if(rt=q(se),typeof rt!="function")throw Error(s(150));return se=rt.call(se),ft(ee,j,se,be)}if(typeof se.then=="function")return Jt(ee,j,fc(se),be);if(se.$$typeof===P)return Jt(ee,j,oc(ee,se),be);hc(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,j!==null&&j.tag===6?(a(ee,j.sibling),be=f(j,se),be.return=ee,ee=be):(a(ee,j),be=_f(se,ee.mode,be),be.return=ee,ee=be),M(ee)):a(ee,j)}return function(ee,j,se,be){try{Xo=0;var rt=Jt(ee,j,se,be);return Lr=null,rt}catch(et){if(et===Dr||et===cc)throw et;var Pt=_i(29,et,null,ee.mode);return Pt.lanes=be,Pt.return=ee,Pt}}}var js=v0(!0),x0=v0(!1),as=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ss(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rs(t,i,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=ic(t),t0(t,null,a),i}return nc(t,o,i,a),ic(t)}function qo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,a|=o,i.lanes=a,pi(t,a)}}function Of(t,i){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?f=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Pf=!1;function jo(){if(Pf){var t=Rr;if(t!==null)throw t}}function Zo(t,i,a,o){Pf=!1;var f=t.updateQueue;as=!1;var h=f.firstBaseUpdate,M=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var W=D,re=W.next;W.next=null,M===null?h=re:M.next=re,M=W;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==M&&(D===null?Se.firstBaseUpdate=re:D.next=re,Se.lastBaseUpdate=W))}if(h!==null){var Te=f.baseState;M=0,Se=re=W=null,D=h;do{var he=D.lane&-536870913,ge=he!==D.lane;if(ge?(wt&he)===he:(o&he)===he){he!==0&&he===Cr&&(Pf=!0),Se!==null&&(Se=Se.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Ke=t,ft=D;he=i;var Jt=a;switch(ft.tag){case 1:if(Ke=ft.payload,typeof Ke=="function"){Te=Ke.call(Jt,Te,he);break e}Te=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ft.payload,he=typeof Ke=="function"?Ke.call(Jt,Te,he):Ke,he==null)break e;Te=g({},Te,he);break e;case 2:as=!0}}he=D.callback,he!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=f.callbacks,ge===null?f.callbacks=[he]:ge.push(he))}else ge={lane:he,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(re=Se=ge,W=Te):Se=Se.next=ge,M|=he;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);Se===null&&(W=Te),f.baseState=W,f.firstBaseUpdate=re,f.lastBaseUpdate=Se,h===null&&(f.shared.lanes=0),fs|=M,t.lanes=M,t.memoizedState=Te}}function _0(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function y0(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_0(a[t],i)}var Nr=b(null),dc=b(0);function S0(t,i){t=Ua,ie(dc,t),ie(Nr,i),Ua=t|i.baseLanes}function If(){ie(dc,Ua),ie(Nr,Nr.current)}function Ff(){Ua=dc.current,H(Nr),H(dc)}var yi=b(null),Oi=null;function os(t){var i=t.alternate;ie(mn,mn.current&1),ie(yi,t),Oi===null&&(i===null||Nr.current!==null||i.memoizedState!==null)&&(Oi=t)}function zf(t){ie(mn,mn.current),ie(yi,t),Oi===null&&(Oi=t)}function M0(t){t.tag===22?(ie(mn,mn.current),ie(yi,t),Oi===null&&(Oi=t)):ls()}function ls(){ie(mn,mn.current),ie(yi,yi.current)}function Si(t){H(yi),Oi===t&&(Oi=null),H(mn)}var mn=b(0);function pc(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yh(a)||Xh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ta=0,_t=null,Kt=null,Sn=null,mc=!1,Ur=!1,Zs=!1,gc=0,Ko=0,Or=null,jS=0;function dn(){throw Error(s(321))}function Bf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!xi(t[a],i[a]))return!1;return!0}function Hf(t,i,a,o,f,h){return Ta=h,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?sg:th,Zs=!1,h=a(o,f),Zs=!1,Ur&&(h=E0(i,a,o,f)),b0(t),h}function b0(t){B.H=$o;var i=Kt!==null&&Kt.next!==null;if(Ta=0,Sn=Kt=_t=null,mc=!1,Ko=0,Or=null,i)throw Error(s(300));t===null||Mn||(t=t.dependencies,t!==null&&rc(t)&&(Mn=!0))}function E0(t,i,a,o){_t=t;var f=0;do{if(Ur&&(Or=null),Ko=0,Ur=!1,25<=f)throw Error(s(301));if(f+=1,Sn=Kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=rg,h=i(a,o)}while(Ur);return h}function ZS(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Qo(i):i,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(_t.flags|=1024),i}function Gf(){var t=gc!==0;return gc=0,t}function Vf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function kf(t){if(mc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}mc=!1}Ta=0,Sn=Kt=_t=null,Ur=!1,Ko=gc=0,Or=null}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?_t.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function gn(){if(Kt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=Sn===null?_t.memoizedState:Sn.next;if(i!==null)Sn=i,Kt=t;else{if(t===null)throw _t.alternate===null?Error(s(467)):Error(s(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},Sn===null?_t.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(t){var i=Ko;return Ko+=1,Or===null&&(Or=[]),t=p0(Or,t,i),i=_t,(Sn===null?i.memoizedState:Sn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?sg:th),t}function xc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qo(t);if(t.$$typeof===P)return zn(t)}throw Error(s(438,String(t)))}function Yf(t){var i=null,a=_t.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=_t.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=vc(),_t.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),o=0;o<t;o++)a[o]=X;return i.index++,a}function wa(t,i){return typeof i=="function"?i(t):i}function _c(t){var i=gn();return Xf(i,Kt,t)}function Xf(t,i,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var f=t.baseQueue,h=o.pending;if(h!==null){if(f!==null){var M=f.next;f.next=h.next,h.next=M}i.baseQueue=f=h,o.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var D=M=null,W=null,re=i,Se=!1;do{var Te=re.lane&-536870913;if(Te!==re.lane?(wt&Te)===Te:(Ta&Te)===Te){var he=re.revertLane;if(he===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Te===Cr&&(Se=!0);else if((Ta&he)===he){re=re.next,he===Cr&&(Se=!0);continue}else Te={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},W===null?(D=W=Te,M=h):W=W.next=Te,_t.lanes|=he,fs|=he;Te=re.action,Zs&&a(h,Te),h=re.hasEagerState?re.eagerState:a(h,Te)}else he={lane:Te,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},W===null?(D=W=he,M=h):W=W.next=he,_t.lanes|=Te,fs|=Te;re=re.next}while(re!==null&&re!==i);if(W===null?M=h:W.next=D,!xi(h,t.memoizedState)&&(Mn=!0,Se&&(a=Rr,a!==null)))throw a;t.memoizedState=h,t.baseState=M,t.baseQueue=W,o.lastRenderedState=h}return f===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Wf(t){var i=gn(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do h=t(h,M.action),M=M.next;while(M!==f);xi(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,o]}function T0(t,i,a){var o=_t,f=gn(),h=Dt;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=i();var M=!xi((Kt||f).memoizedState,a);if(M&&(f.memoizedState=a,Mn=!0),f=f.queue,Zf(C0.bind(null,o,f,t),[t]),f.getSnapshot!==i||M||Sn!==null&&Sn.memoizedState.tag&1){if(o.flags|=2048,Pr(9,{destroy:void 0},A0.bind(null,o,f,a,i),null),tn===null)throw Error(s(349));h||(Ta&127)!==0||w0(o,i,a)}return a}function w0(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=_t.updateQueue,i===null?(i=vc(),_t.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function A0(t,i,a,o){i.value=a,i.getSnapshot=o,R0(i)&&D0(t)}function C0(t,i,a){return a(function(){R0(i)&&D0(t)})}function R0(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!xi(t,a)}catch{return!0}}function D0(t){var i=Hs(t,2);i!==null&&ci(i,t,2)}function qf(t){var i=Jn();if(typeof t=="function"){var a=t;if(t=a(),Zs){Le(!0);try{a()}finally{Le(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},i}function L0(t,i,a,o){return t.baseState=a,Xf(t,Kt,typeof o=="function"?o:wa)}function KS(t,i,a,o,f){if(Mc(t))throw Error(s(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=i.pending,a===null?(h.next=i.pending=h,N0(i,h)):(h.next=a.next,i.pending=a.next=h)}}function N0(t,i){var a=i.action,o=i.payload,f=t.state;if(i.isTransition){var h=B.T,M={};B.T=M;try{var D=a(f,o),W=B.S;W!==null&&W(M,D),U0(t,i,D)}catch(re){jf(t,i,re)}finally{h!==null&&M.types!==null&&(h.types=M.types),B.T=h}}else try{h=a(f,o),U0(t,i,h)}catch(re){jf(t,i,re)}}function U0(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){O0(t,i,o)},function(o){return jf(t,i,o)}):O0(t,i,a)}function O0(t,i,a){i.status="fulfilled",i.value=a,P0(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,N0(t,a)))}function jf(t,i,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,P0(i),i=i.next;while(i!==o)}t.action=null}function P0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function I0(t,i){return i}function F0(t,i){if(Dt){var a=tn.formState;if(a!==null){e:{var o=_t;if(Dt){if(sn){t:{for(var f=sn,h=Ui;f.nodeType!==8;){if(!h){f=null;break t}if(f=Pi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){sn=Pi(f.nextSibling),o=f.data==="F!";break e}}ns(o)}o=!1}o&&(i=a[0])}}return a=Jn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I0,lastRenderedState:i},a.queue=o,a=ng.bind(null,_t,o),o.dispatch=a,o=qf(!1),h=eh.bind(null,_t,!1,o.queue),o=Jn(),f={state:i,dispatch:null,action:t,pending:null},o.queue=f,a=KS.bind(null,_t,f,h,a),f.dispatch=a,o.memoizedState=t,[i,a,!1]}function z0(t){var i=gn();return B0(i,Kt,t)}function B0(t,i,a){if(i=Xf(t,i,I0)[0],t=_c(wa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Qo(i)}catch(M){throw M===Dr?cc:M}else o=i;i=gn();var f=i.queue,h=f.dispatch;return a!==i.memoizedState&&(_t.flags|=2048,Pr(9,{destroy:void 0},QS.bind(null,f,a),null)),[o,h,t]}function QS(t,i){t.action=i}function H0(t){var i=gn(),a=Kt;if(a!==null)return B0(i,a,t);gn(),i=i.memoizedState,a=gn();var o=a.queue.dispatch;return a.memoizedState=t,[i,o,!1]}function Pr(t,i,a,o){return t={tag:t,create:a,deps:o,inst:i,next:null},i=_t.updateQueue,i===null&&(i=vc(),_t.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,i.lastEffect=t),t}function G0(){return gn().memoizedState}function yc(t,i,a,o){var f=Jn();_t.flags|=t,f.memoizedState=Pr(1|i,{destroy:void 0},a,o===void 0?null:o)}function Sc(t,i,a,o){var f=gn();o=o===void 0?null:o;var h=f.memoizedState.inst;Kt!==null&&o!==null&&Bf(o,Kt.memoizedState.deps)?f.memoizedState=Pr(i,h,a,o):(_t.flags|=t,f.memoizedState=Pr(1|i,h,a,o))}function V0(t,i){yc(8390656,8,t,i)}function Zf(t,i){Sc(2048,8,t,i)}function JS(t){_t.flags|=4;var i=_t.updateQueue;if(i===null)i=vc(),_t.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function k0(t){var i=gn().memoizedState;return JS({ref:i,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Y0(t,i){return Sc(4,2,t,i)}function X0(t,i){return Sc(4,4,t,i)}function W0(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function q0(t,i,a){a=a!=null?a.concat([t]):null,Sc(4,4,W0.bind(null,i,t),a)}function Kf(){}function j0(t,i){var a=gn();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Bf(i,o[1])?o[0]:(a.memoizedState=[t,i],t)}function Z0(t,i){var a=gn();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Bf(i,o[1]))return o[0];if(o=t(),Zs){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,i],o}function Qf(t,i,a){return a===void 0||(Ta&1073741824)!==0&&(wt&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=Kg(),_t.lanes|=t,fs|=t,a)}function K0(t,i,a,o){return xi(a,i)?a:Nr.current!==null?(t=Qf(t,a,o),xi(t,i)||(Mn=!0),t):(Ta&42)===0||(Ta&1073741824)!==0&&(wt&261930)===0?(Mn=!0,t.memoizedState=a):(t=Kg(),_t.lanes|=t,fs|=t,i)}function Q0(t,i,a,o,f){var h=Y.p;Y.p=h!==0&&8>h?h:8;var M=B.T,D={};B.T=D,eh(t,!1,i,a);try{var W=f(),re=B.S;if(re!==null&&re(D,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Se=qS(W,o);Jo(t,i,Se,Ei(t))}else Jo(t,i,o,Ei(t))}catch(Te){Jo(t,i,{then:function(){},status:"rejected",reason:Te},Ei())}finally{Y.p=h,M!==null&&D.types!==null&&(M.types=D.types),B.T=M}}function $S(){}function Jf(t,i,a,o){if(t.tag!==5)throw Error(s(476));var f=J0(t).queue;Q0(t,f,i,ne,a===null?$S:function(){return $0(t),a(o)})}function J0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:ne},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function $0(t){var i=J0(t);i.next===null&&(i=t.alternate.memoizedState),Jo(t,i.next.queue,{},Ei())}function $f(){return zn(ml)}function eg(){return gn().memoizedState}function tg(){return gn().memoizedState}function eM(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Ei();t=ss(a);var o=rs(i,t,a);o!==null&&(ci(o,i,a),qo(o,i,a)),i={cache:Cf()},t.payload=i;return}i=i.return}}function tM(t,i,a){var o=Ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mc(t)?ig(i,a):(a=vf(t,i,a,o),a!==null&&(ci(a,t,o),ag(a,i,o)))}function ng(t,i,a){var o=Ei();Jo(t,i,a,o)}function Jo(t,i,a,o){var f={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mc(t))ig(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,a);if(f.hasEagerState=!0,f.eagerState=D,xi(D,M))return nc(t,i,f,0),tn===null&&tc(),!1}catch{}if(a=vf(t,i,f,o),a!==null)return ci(a,t,o),ag(a,i,o),!0}return!1}function eh(t,i,a,o){if(o={lane:2,revertLane:Nh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Mc(t)){if(i)throw Error(s(479))}else i=vf(t,a,o,2),i!==null&&ci(i,t,2)}function Mc(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function ig(t,i){Ur=mc=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function ag(t,i,a){if((a&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,a|=o,i.lanes=a,pi(t,a)}}var $o={readContext:zn,use:xc,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};$o.useEffectEvent=dn;var sg={readContext:zn,use:xc,useCallback:function(t,i){return Jn().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:V0,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,yc(4194308,4,W0.bind(null,i,t),a)},useLayoutEffect:function(t,i){return yc(4194308,4,t,i)},useInsertionEffect:function(t,i){yc(4,2,t,i)},useMemo:function(t,i){var a=Jn();i=i===void 0?null:i;var o=t();if(Zs){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,i],o},useReducer:function(t,i,a){var o=Jn();if(a!==void 0){var f=a(i);if(Zs){Le(!0);try{a(i)}finally{Le(!1)}}}else f=i;return o.memoizedState=o.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},o.queue=t,t=t.dispatch=tM.bind(null,_t,t),[o.memoizedState,t]},useRef:function(t){var i=Jn();return t={current:t},i.memoizedState=t},useState:function(t){t=qf(t);var i=t.queue,a=ng.bind(null,_t,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Kf,useDeferredValue:function(t,i){var a=Jn();return Qf(a,t,i)},useTransition:function(){var t=qf(!1);return t=Q0.bind(null,_t,t.queue,!0,!1),Jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var o=_t,f=Jn();if(Dt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),tn===null)throw Error(s(349));(wt&127)!==0||w0(o,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,V0(C0.bind(null,o,h,t),[t]),o.flags|=2048,Pr(9,{destroy:void 0},A0.bind(null,o,h,a,i),null),a},useId:function(){var t=Jn(),i=tn.identifierPrefix;if(Dt){var a=sa,o=aa;a=(o&~(1<<32-Ye(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=gc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=jS++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:$f,useFormState:F0,useActionState:F0,useOptimistic:function(t){var i=Jn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=eh.bind(null,_t,!0,a),a.dispatch=i,[t,i]},useMemoCache:Yf,useCacheRefresh:function(){return Jn().memoizedState=eM.bind(null,_t)},useEffectEvent:function(t){var i=Jn(),a={impl:t};return i.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},th={readContext:zn,use:xc,useCallback:j0,useContext:zn,useEffect:Zf,useImperativeHandle:q0,useInsertionEffect:Y0,useLayoutEffect:X0,useMemo:Z0,useReducer:_c,useRef:G0,useState:function(){return _c(wa)},useDebugValue:Kf,useDeferredValue:function(t,i){var a=gn();return K0(a,Kt.memoizedState,t,i)},useTransition:function(){var t=_c(wa)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:T0,useId:eg,useHostTransitionStatus:$f,useFormState:z0,useActionState:z0,useOptimistic:function(t,i){var a=gn();return L0(a,Kt,t,i)},useMemoCache:Yf,useCacheRefresh:tg};th.useEffectEvent=k0;var rg={readContext:zn,use:xc,useCallback:j0,useContext:zn,useEffect:Zf,useImperativeHandle:q0,useInsertionEffect:Y0,useLayoutEffect:X0,useMemo:Z0,useReducer:Wf,useRef:G0,useState:function(){return Wf(wa)},useDebugValue:Kf,useDeferredValue:function(t,i){var a=gn();return Kt===null?Qf(a,t,i):K0(a,Kt.memoizedState,t,i)},useTransition:function(){var t=Wf(wa)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:T0,useId:eg,useHostTransitionStatus:$f,useFormState:H0,useActionState:H0,useOptimistic:function(t,i){var a=gn();return Kt!==null?L0(a,Kt,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yf,useCacheRefresh:tg};rg.useEffectEvent=k0;function nh(t,i,a,o){i=t.memoizedState,a=a(o,i),a=a==null?i:g({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ih={enqueueSetState:function(t,i,a){t=t._reactInternals;var o=Ei(),f=ss(o);f.payload=i,a!=null&&(f.callback=a),i=rs(t,f,o),i!==null&&(ci(i,t,o),qo(i,t,o))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var o=Ei(),f=ss(o);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=rs(t,f,o),i!==null&&(ci(i,t,o),qo(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Ei(),o=ss(a);o.tag=2,i!=null&&(o.callback=i),i=rs(t,o,a),i!==null&&(ci(i,t,a),qo(i,t,a))}};function og(t,i,a,o,f,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,M):i.prototype&&i.prototype.isPureReactComponent?!Bo(a,o)||!Bo(f,h):!0}function lg(t,i,a,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==t&&ih.enqueueReplaceState(i,i.state,null)}function Ks(t,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(t=t.defaultProps){a===i&&(a=g({},a));for(var f in t)a[f]===void 0&&(a[f]=t[f])}return a}function cg(t){ec(t)}function ug(t){console.error(t)}function fg(t){ec(t)}function bc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function hg(t,i,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ah(t,i,a){return a=ss(a),a.tag=3,a.payload={element:null},a.callback=function(){bc(t,i)},a}function dg(t){return t=ss(t),t.tag=3,t}function pg(t,i,a,o){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var h=o.value;t.payload=function(){return f(h)},t.callback=function(){hg(i,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){hg(i,a,o),typeof f!="function"&&(hs===null?hs=new Set([this]):hs.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function nM(t,i,a,o,f){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Ar(i,a,f,!0),a=yi.current,a!==null){switch(a.tag){case 31:case 13:return Oi===null?Pc():a.alternate===null&&pn===0&&(pn=3),a.flags&=-257,a.flags|=65536,a.lanes=f,o===uc?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Rh(t,o,f)),!1;case 22:return a.flags|=65536,o===uc?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Rh(t,o,f)),!1}throw Error(s(435,a.tag))}return Rh(t,o,f),Pc(),!1}if(Dt)return i=yi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==bf&&(t=Error(s(422),{cause:o}),Vo(Di(t,a)))):(o!==bf&&(i=Error(s(423),{cause:o}),Vo(Di(i,a))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,o=Di(o,a),f=ah(t.stateNode,o,f),Of(t,f),pn!==4&&(pn=2)),!1;var h=Error(s(520),{cause:o});if(h=Di(h,a),ol===null?ol=[h]:ol.push(h),pn!==4&&(pn=2),i===null)return!0;o=Di(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=f&-f,a.lanes|=t,t=ah(a.stateNode,o,t),Of(a,t),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(hs===null||!hs.has(h))))return a.flags|=65536,f&=-f,a.lanes|=f,f=dg(f),pg(f,t,a,o),Of(a,f),!1}a=a.return}while(a!==null);return!1}var sh=Error(s(461)),Mn=!1;function Bn(t,i,a,o){i.child=t===null?x0(i,null,a,o):js(i,t.child,a,o)}function mg(t,i,a,o,f){a=a.render;var h=i.ref;if("ref"in o){var M={};for(var D in o)D!=="ref"&&(M[D]=o[D])}else M=o;return Ys(i),o=Hf(t,i,a,M,h,f),D=Gf(),t!==null&&!Mn?(Vf(t,i,f),Aa(t,i,f)):(Dt&&D&&Sf(i),i.flags|=1,Bn(t,i,o,f),i.child)}function gg(t,i,a,o,f){if(t===null){var h=a.type;return typeof h=="function"&&!xf(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,vg(t,i,h,o,f)):(t=ac(a.type,null,o,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!dh(t,f)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(M,o)&&t.ref===i.ref)return Aa(t,i,f)}return i.flags|=1,t=Sa(h,o),t.ref=i.ref,t.return=i,i.child=t}function vg(t,i,a,o,f){if(t!==null){var h=t.memoizedProps;if(Bo(h,o)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=o=h,dh(t,f))(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Aa(t,i,f)}return rh(t,i,a,o,f)}function xg(t,i,a,o){var f=o.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=i.child=t.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~h}else o=0,i.child=null;return _g(t,i,h,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&lc(i,h!==null?h.cachePool:null),h!==null?S0(i,h):If(),M0(i);else return o=i.lanes=536870912,_g(t,i,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(lc(i,h.cachePool),S0(i,h),ls(),i.memoizedState=null):(t!==null&&lc(i,null),If(),ls());return Bn(t,i,f,a),i.child}function el(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function _g(t,i,a,o,f){var h=Df();return h=h===null?null:{parent:yn._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&lc(i,null),If(),M0(i),t!==null&&Ar(t,i,o,!0),i.childLanes=f,null}function Ec(t,i){return i=wc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function yg(t,i,a){return js(i,t.child,null,a),t=Ec(i,i.pendingProps),t.flags|=2,Si(i),i.memoizedState=null,t}function iM(t,i,a){var o=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Dt){if(o.mode==="hidden")return t=Ec(i,o),i.lanes=536870912,el(null,t);if(zf(i),(t=sn)?(t=Nv(t,Ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:es!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=i0(t),a.return=i,i.child=a,Fn=i,sn=null)):t=null,t===null)throw ns(i);return i.lanes=536870912,null}return Ec(i,o)}var h=t.memoizedState;if(h!==null){var M=h.dehydrated;if(zf(i),f)if(i.flags&256)i.flags&=-257,i=yg(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(s(558));else if(Mn||Ar(t,i,a,!1),f=(a&t.childLanes)!==0,Mn||f){if(o=tn,o!==null&&(M=mi(o,a),M!==0&&M!==h.retryLane))throw h.retryLane=M,Hs(t,M),ci(o,t,M),sh;Pc(),i=yg(t,i,a)}else t=h.treeContext,sn=Pi(M.nextSibling),Fn=i,Dt=!0,ts=null,Ui=!1,t!==null&&r0(i,t),i=Ec(i,o),i.flags|=4096;return i}return t=Sa(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Tc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function rh(t,i,a,o,f){return Ys(i),a=Hf(t,i,a,o,void 0,f),o=Gf(),t!==null&&!Mn?(Vf(t,i,f),Aa(t,i,f)):(Dt&&o&&Sf(i),i.flags|=1,Bn(t,i,a,f),i.child)}function Sg(t,i,a,o,f,h){return Ys(i),i.updateQueue=null,a=E0(i,o,a,f),b0(t),o=Gf(),t!==null&&!Mn?(Vf(t,i,h),Aa(t,i,h)):(Dt&&o&&Sf(i),i.flags|=1,Bn(t,i,a,h),i.child)}function Mg(t,i,a,o,f){if(Ys(i),i.stateNode===null){var h=br,M=a.contextType;typeof M=="object"&&M!==null&&(h=zn(M)),h=new a(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=ih,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},Nf(i),M=a.contextType,h.context=typeof M=="object"&&M!==null?zn(M):br,h.state=i.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(nh(i,a,M,o),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&ih.enqueueReplaceState(h,h.state,null),Zo(i,o,h,f),jo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){h=i.stateNode;var D=i.memoizedProps,W=Ks(a,D);h.props=W;var re=h.context,Se=a.contextType;M=br,typeof Se=="object"&&Se!==null&&(M=zn(Se));var Te=a.getDerivedStateFromProps;Se=typeof Te=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Se||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||re!==M)&&lg(i,h,o,M),as=!1;var he=i.memoizedState;h.state=he,Zo(i,o,h,f),jo(),re=i.memoizedState,D||he!==re||as?(typeof Te=="function"&&(nh(i,a,Te,o),re=i.memoizedState),(W=as||og(i,a,W,o,he,re,M))?(Se||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=re),h.props=o,h.state=re,h.context=M,o=W):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,Uf(t,i),M=i.memoizedProps,Se=Ks(a,M),h.props=Se,Te=i.pendingProps,he=h.context,re=a.contextType,W=br,typeof re=="object"&&re!==null&&(W=zn(re)),D=a.getDerivedStateFromProps,(re=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==Te||he!==W)&&lg(i,h,o,W),as=!1,he=i.memoizedState,h.state=he,Zo(i,o,h,f),jo();var ge=i.memoizedState;M!==Te||he!==ge||as||t!==null&&t.dependencies!==null&&rc(t.dependencies)?(typeof D=="function"&&(nh(i,a,D,o),ge=i.memoizedState),(Se=as||og(i,a,Se,o,he,ge,W)||t!==null&&t.dependencies!==null&&rc(t.dependencies))?(re||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ge,W),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ge,W)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ge),h.props=o,h.state=ge,h.context=W,o=Se):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),o=!1)}return h=o,Tc(t,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&o?(i.child=js(i,t.child,null,f),i.child=js(i,null,a,f)):Bn(t,i,a,f),i.memoizedState=h.state,t=i.child):t=Aa(t,i,f),t}function bg(t,i,a,o){return Vs(),i.flags|=256,Bn(t,i,a,o),i.child}var oh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lh(t){return{baseLanes:t,cachePool:h0()}}function ch(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=bi),t}function Eg(t,i,a){var o=i.pendingProps,f=!1,h=(i.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Dt){if(f?os(i):ls(),(t=sn)?(t=Nv(t,Ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:es!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=i0(t),a.return=i,i.child=a,Fn=i,sn=null)):t=null,t===null)throw ns(i);return Xh(t)?i.lanes=32:i.lanes=536870912,null}var D=o.children;return o=o.fallback,f?(ls(),f=i.mode,D=wc({mode:"hidden",children:D},f),o=Gs(o,f,a,null),D.return=i,o.return=i,D.sibling=o,i.child=D,o=i.child,o.memoizedState=lh(a),o.childLanes=ch(t,M,a),i.memoizedState=oh,el(null,o)):(os(i),uh(i,D))}var W=t.memoizedState;if(W!==null&&(D=W.dehydrated,D!==null)){if(h)i.flags&256?(os(i),i.flags&=-257,i=fh(t,i,a)):i.memoizedState!==null?(ls(),i.child=t.child,i.flags|=128,i=null):(ls(),D=o.fallback,f=i.mode,o=wc({mode:"visible",children:o.children},f),D=Gs(D,f,a,null),D.flags|=2,o.return=i,D.return=i,o.sibling=D,i.child=o,js(i,t.child,null,a),o=i.child,o.memoizedState=lh(a),o.childLanes=ch(t,M,a),i.memoizedState=oh,i=el(null,o));else if(os(i),Xh(D)){if(M=D.nextSibling&&D.nextSibling.dataset,M)var re=M.dgst;M=re,o=Error(s(419)),o.stack="",o.digest=M,Vo({value:o,source:null,stack:null}),i=fh(t,i,a)}else if(Mn||Ar(t,i,a,!1),M=(a&t.childLanes)!==0,Mn||M){if(M=tn,M!==null&&(o=mi(M,a),o!==0&&o!==W.retryLane))throw W.retryLane=o,Hs(t,o),ci(M,t,o),sh;Yh(D)||Pc(),i=fh(t,i,a)}else Yh(D)?(i.flags|=192,i.child=t.child,i=null):(t=W.treeContext,sn=Pi(D.nextSibling),Fn=i,Dt=!0,ts=null,Ui=!1,t!==null&&r0(i,t),i=uh(i,o.children),i.flags|=4096);return i}return f?(ls(),D=o.fallback,f=i.mode,W=t.child,re=W.sibling,o=Sa(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,re!==null?D=Sa(re,D):(D=Gs(D,f,a,null),D.flags|=2),D.return=i,o.return=i,o.sibling=D,i.child=o,el(null,o),o=i.child,D=t.child.memoizedState,D===null?D=lh(a):(f=D.cachePool,f!==null?(W=yn._currentValue,f=f.parent!==W?{parent:W,pool:W}:f):f=h0(),D={baseLanes:D.baseLanes|a,cachePool:f}),o.memoizedState=D,o.childLanes=ch(t,M,a),i.memoizedState=oh,el(t.child,o)):(os(i),a=t.child,t=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=a,i.memoizedState=null,a)}function uh(t,i){return i=wc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function wc(t,i){return t=_i(22,t,null,i),t.lanes=0,t}function fh(t,i,a){return js(i,t.child,null,a),t=uh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Tg(t,i,a){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),wf(t.return,i,a)}function hh(t,i,a,o,f,h){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:f,treeForkCount:h}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=f,M.treeForkCount=h)}function wg(t,i,a){var o=i.pendingProps,f=o.revealOrder,h=o.tail;o=o.children;var M=mn.current,D=(M&2)!==0;if(D?(M=M&1|2,i.flags|=128):M&=1,ie(mn,M),Bn(t,i,o,a),o=Dt?Go:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,a,i);else if(t.tag===19)Tg(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&pc(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),hh(i,!1,f,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&pc(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}hh(i,!0,a,null,h,o);break;case"together":hh(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Aa(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),fs|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Ar(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Sa(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Sa(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function dh(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&rc(t)))}function aM(t,i,a){switch(i.tag){case 3:pe(i,i.stateNode.containerInfo),is(i,yn,t.memoizedState.cache),Vs();break;case 27:case 5:Ve(i);break;case 4:pe(i,i.stateNode.containerInfo);break;case 10:is(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,zf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(os(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Eg(t,i,a):(os(i),t=Aa(t,i,a),t!==null?t.sibling:null);os(i);break;case 19:var f=(t.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Ar(t,i,a,!1),o=(a&i.childLanes)!==0),f){if(o)return wg(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(mn,mn.current),o)break;return null;case 22:return i.lanes=0,xg(t,i,a,i.pendingProps);case 24:is(i,yn,t.memoizedState.cache)}return Aa(t,i,a)}function Ag(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mn=!0;else{if(!dh(t,a)&&(i.flags&128)===0)return Mn=!1,aM(t,i,a);Mn=(t.flags&131072)!==0}else Mn=!1,Dt&&(i.flags&1048576)!==0&&s0(i,Go,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=Ws(i.elementType),i.type=t,typeof t=="function")xf(t)?(o=Ks(t,o),i.tag=1,i=Mg(null,i,t,o,a)):(i.tag=0,i=rh(null,i,t,o,a));else{if(t!=null){var f=t.$$typeof;if(f===A){i.tag=11,i=mg(null,i,t,o,a);break e}else if(f===O){i.tag=14,i=gg(null,i,t,o,a);break e}}throw i=de(t)||t,Error(s(306,i,""))}}return i;case 0:return rh(t,i,i.type,i.pendingProps,a);case 1:return o=i.type,f=Ks(o,i.pendingProps),Mg(t,i,o,f,a);case 3:e:{if(pe(i,i.stateNode.containerInfo),t===null)throw Error(s(387));o=i.pendingProps;var h=i.memoizedState;f=h.element,Uf(t,i),Zo(i,o,null,a);var M=i.memoizedState;if(o=M.cache,is(i,yn,o),o!==h.cache&&Af(i,[yn],a,!0),jo(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=bg(t,i,o,a);break e}else if(o!==f){f=Di(Error(s(424)),i),Vo(f),i=bg(t,i,o,a);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,sn=Pi(t.firstChild),Fn=i,Dt=!0,ts=null,Ui=!0,a=x0(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),o===f){i=Aa(t,i,a);break e}Bn(t,i,o,a)}i=i.child}return i;case 26:return Tc(t,i),t===null?(a=zv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Dt||(a=i.type,t=i.pendingProps,o=Vc(K.current).createElement(a),o[xn]=i,o[In]=t,Hn(o,a,t),_n(o),i.stateNode=o):i.memoizedState=zv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&Dt&&(o=i.stateNode=Pv(i.type,i.pendingProps,K.current),Fn=i,Ui=!0,f=sn,gs(i.type)?(Wh=f,sn=Pi(o.firstChild)):sn=f),Bn(t,i,i.pendingProps.children,a),Tc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Dt&&((f=o=sn)&&(o=OM(o,i.type,i.pendingProps,Ui),o!==null?(i.stateNode=o,Fn=i,sn=Pi(o.firstChild),Ui=!1,f=!0):f=!1),f||ns(i)),Ve(i),f=i.type,h=i.pendingProps,M=t!==null?t.memoizedProps:null,o=h.children,Gh(f,h)?o=null:M!==null&&Gh(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=Hf(t,i,ZS,null,null,a),ml._currentValue=f),Tc(t,i),Bn(t,i,o,a),i.child;case 6:return t===null&&Dt&&((t=a=sn)&&(a=PM(a,i.pendingProps,Ui),a!==null?(i.stateNode=a,Fn=i,sn=null,t=!0):t=!1),t||ns(i)),null;case 13:return Eg(t,i,a);case 4:return pe(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=js(i,null,o,a):Bn(t,i,o,a),i.child;case 11:return mg(t,i,i.type,i.pendingProps,a);case 7:return Bn(t,i,i.pendingProps,a),i.child;case 8:return Bn(t,i,i.pendingProps.children,a),i.child;case 12:return Bn(t,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,is(i,i.type,o.value),Bn(t,i,o.children,a),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,Ys(i),f=zn(f),o=o(f),i.flags|=1,Bn(t,i,o,a),i.child;case 14:return gg(t,i,i.type,i.pendingProps,a);case 15:return vg(t,i,i.type,i.pendingProps,a);case 19:return wg(t,i,a);case 31:return iM(t,i,a);case 22:return xg(t,i,a,i.pendingProps);case 24:return Ys(i),o=zn(yn),t===null?(f=Df(),f===null&&(f=tn,h=Cf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=a),f=h),i.memoizedState={parent:o,cache:f},Nf(i),is(i,yn,f)):((t.lanes&a)!==0&&(Uf(t,i),Zo(i,null,null,a),jo()),f=t.memoizedState,h=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),is(i,yn,o)):(o=h.cache,is(i,yn,o),o!==f.cache&&Af(i,[yn],a,!0))),Bn(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ca(t){t.flags|=4}function ph(t,i,a,o,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(ev())t.flags|=8192;else throw qs=uc,Lf}else t.flags&=-16777217}function Cg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kv(i))if(ev())t.flags|=8192;else throw qs=uc,Lf}function Ac(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?we():536870912,t.lanes|=i,Br|=i)}function tl(t,i){if(!Dt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function rn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=o,t.childLanes=a,i}function sM(t,i,a){var o=i.pendingProps;switch(Mf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(i),null;case 1:return rn(i),null;case 3:return a=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ea(yn),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(wr(i)?Ca(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ef())),rn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(Ca(i),h!==null?(rn(i),Cg(i,h)):(rn(i),ph(i,f,null,o,a))):h?h!==t.memoizedState?(Ca(i),rn(i),Cg(i,h)):(rn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ca(i),rn(i),ph(i,f,t,o,a)),null;case 27:if(Ne(i),a=K.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Ca(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return rn(i),null}t=ve.current,wr(i)?o0(i):(t=Pv(f,o,a),i.stateNode=t,Ca(i))}return rn(i),null;case 5:if(Ne(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Ca(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return rn(i),null}if(h=ve.current,wr(i))o0(i);else{var M=Vc(K.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?M.createElement(f,{is:o.is}):M.createElement(f)}}h[xn]=i,h[In]=o;e:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=h;e:switch(Hn(h,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ca(i)}}return rn(i),ph(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&Ca(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(t=K.current,wr(i)){if(t=i.stateNode,a=i.memoizedProps,o=null,f=Fn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}t[xn]=i,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ev(t.nodeValue,a)),t||ns(i,!0)}else t=Vc(t).createTextNode(o),t[xn]=i,i.stateNode=t}return rn(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(o=wr(i),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[xn]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),t=!1}else a=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(Si(i),i):(Si(i),null);if((i.flags&128)!==0)throw Error(s(558))}return rn(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=wr(i),o!==null&&o.dehydrated!==null){if(t===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[xn]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),f=!1}else f=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Si(i),i):(Si(i),null)}return Si(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==f&&(o.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),Ac(i,i.updateQueue),rn(i),null);case 4:return Ce(),t===null&&Ih(i.stateNode.containerInfo),rn(i),null;case 10:return Ea(i.type),rn(i),null;case 19:if(H(mn),o=i.memoizedState,o===null)return rn(i),null;if(f=(i.flags&128)!==0,h=o.rendering,h===null)if(f)tl(o,!1);else{if(pn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=pc(t),h!==null){for(i.flags|=128,tl(o,!1),t=h.updateQueue,i.updateQueue=t,Ac(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)n0(a,t),a=a.sibling;return ie(mn,mn.current&1|2),Dt&&Ma(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&zt()>Nc&&(i.flags|=128,f=!0,tl(o,!1),i.lanes=4194304)}else{if(!f)if(t=pc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Ac(i,t),tl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Dt)return rn(i),null}else 2*zt()-o.renderingStartTime>Nc&&a!==536870912&&(i.flags|=128,f=!0,tl(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(t=o.last,t!==null?t.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=zt(),t.sibling=null,a=mn.current,ie(mn,f?a&1|2:a&1),Dt&&Ma(i,o.treeForkCount),t):(rn(i),null);case 22:case 23:return Si(i),Ff(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(rn(i),i.subtreeFlags&6&&(i.flags|=8192)):rn(i),a=i.updateQueue,a!==null&&Ac(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),t!==null&&H(Xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ea(yn),rn(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function rM(t,i){switch(Mf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ea(yn),Ce(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ne(i),null;case 31:if(i.memoizedState!==null){if(Si(i),i.alternate===null)throw Error(s(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Si(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return H(mn),null;case 4:return Ce(),null;case 10:return Ea(i.type),null;case 22:case 23:return Si(i),Ff(),t!==null&&H(Xs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ea(yn),null;case 25:return null;default:return null}}function Rg(t,i){switch(Mf(i),i.tag){case 3:Ea(yn),Ce();break;case 26:case 27:case 5:Ne(i);break;case 4:Ce();break;case 31:i.memoizedState!==null&&Si(i);break;case 13:Si(i);break;case 19:H(mn);break;case 10:Ea(i.type);break;case 22:case 23:Si(i),Ff(),t!==null&&H(Xs);break;case 24:Ea(yn)}}function nl(t,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var f=o.next;a=f;do{if((a.tag&t)===t){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==f)}}catch(D){qt(i,i.return,D)}}function cs(t,i,a){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var h=f.next;o=h;do{if((o.tag&t)===t){var M=o.inst,D=M.destroy;if(D!==void 0){M.destroy=void 0,f=i;var W=a,re=D;try{re()}catch(Se){qt(f,W,Se)}}}o=o.next}while(o!==h)}}catch(Se){qt(i,i.return,Se)}}function Dg(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{y0(i,a)}catch(o){qt(t,t.return,o)}}}function Lg(t,i,a){a.props=Ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){qt(t,i,o)}}function il(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(f){qt(t,i,f)}}function ra(t,i){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(f){qt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){qt(t,i,f)}else a.current=null}function Ng(t){var i=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(f){qt(t,t.return,f)}}function mh(t,i,a){try{var o=t.stateNode;CM(o,t.type,a,i),o[In]=i}catch(f){qt(t,t.return,f)}}function Ug(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gs(t.type)||t.tag===4}function gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,i,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_a));else if(o!==4&&(o===27&&gs(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(vh(t,i,a),t=t.sibling;t!==null;)vh(t,i,a),t=t.sibling}function Cc(t,i,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(o!==4&&(o===27&&gs(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cc(t,i,a),t=t.sibling;t!==null;)Cc(t,i,a),t=t.sibling}function Og(t){var i=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Hn(i,o,a),i[xn]=t,i[In]=a}catch(h){qt(t,t.return,h)}}var Ra=!1,bn=!1,xh=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function oM(t,i){if(t=t.containerInfo,Bh=Zc,t=qm(t),ff(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var f=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var M=0,D=-1,W=-1,re=0,Se=0,Te=t,he=null;t:for(;;){for(var ge;Te!==a||f!==0&&Te.nodeType!==3||(D=M+f),Te!==h||o!==0&&Te.nodeType!==3||(W=M+o),Te.nodeType===3&&(M+=Te.nodeValue.length),(ge=Te.firstChild)!==null;)he=Te,Te=ge;for(;;){if(Te===t)break t;if(he===a&&++re===f&&(D=M),he===h&&++Se===o&&(W=M),(ge=Te.nextSibling)!==null)break;Te=he,he=Te.parentNode}Te=ge}a=D===-1||W===-1?null:{start:D,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hh={focusedElem:t,selectionRange:a},Zc=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)f=t[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=i,f=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ke=Ks(a.type,f);t=o.getSnapshotBeforeUpdate(Ke,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(ft){qt(a,a.return,ft)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)kh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function Ig(t,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:La(t,a),o&4&&nl(5,a);break;case 1:if(La(t,a),o&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(M){qt(a,a.return,M)}else{var f=Ks(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){qt(a,a.return,M)}}o&64&&Dg(a),o&512&&il(a,a.return);break;case 3:if(La(t,a),o&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{y0(t,i)}catch(M){qt(a,a.return,M)}}break;case 27:i===null&&o&4&&Og(a);case 26:case 5:La(t,a),i===null&&o&4&&Ng(a),o&512&&il(a,a.return);break;case 12:La(t,a);break;case 31:La(t,a),o&4&&Bg(t,a);break;case 13:La(t,a),o&4&&Hg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=gM.bind(null,a),IM(t,a))));break;case 22:if(o=a.memoizedState!==null||Ra,!o){i=i!==null&&i.memoizedState!==null||bn,f=Ra;var h=bn;Ra=o,(bn=i)&&!h?Na(t,a,(a.subtreeFlags&8772)!==0):La(t,a),Ra=f,bn=h}break;case 30:break;default:La(t,a)}}function Fg(t){var i=t.alternate;i!==null&&(t.alternate=null,Fg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ka(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,si=!1;function Da(t,i,a){for(a=a.child;a!==null;)zg(t,i,a),a=a.sibling}function zg(t,i,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 26:bn||ra(a,i),Da(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||ra(a,i);var o=hn,f=si;gs(a.type)&&(hn=a.stateNode,si=!1),Da(t,i,a),hl(a.stateNode),hn=o,si=f;break;case 5:bn||ra(a,i);case 6:if(o=hn,f=si,hn=null,Da(t,i,a),hn=o,si=f,hn!==null)if(si)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(h){qt(a,i,h)}else try{hn.removeChild(a.stateNode)}catch(h){qt(a,i,h)}break;case 18:hn!==null&&(si?(t=hn,Dv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qr(t)):Dv(hn,a.stateNode));break;case 4:o=hn,f=si,hn=a.stateNode.containerInfo,si=!0,Da(t,i,a),hn=o,si=f;break;case 0:case 11:case 14:case 15:cs(2,a,i),bn||cs(4,a,i),Da(t,i,a);break;case 1:bn||(ra(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Lg(a,i,o)),Da(t,i,a);break;case 21:Da(t,i,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,Da(t,i,a),bn=o;break;default:Da(t,i,a)}}function Bg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(a){qt(i,i.return,a)}}}function Hg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(a){qt(i,i.return,a)}}function lM(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Pg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Pg),i;default:throw Error(s(435,t.tag))}}function Rc(t,i){var a=lM(t);i.forEach(function(o){if(!a.has(o)){a.add(o);var f=vM.bind(null,t,o);o.then(f,f)}})}function ri(t,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var f=a[o],h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 27:if(gs(D.type)){hn=D.stateNode,si=!1;break e}break;case 5:hn=D.stateNode,si=!1;break e;case 3:case 4:hn=D.stateNode.containerInfo,si=!0;break e}D=D.return}if(hn===null)throw Error(s(160));zg(h,M,f),hn=null,si=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Gg(i,t),i=i.sibling}var Xi=null;function Gg(t,i){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ri(i,t),oi(t),o&4&&(cs(3,t,t.return),nl(3,t),cs(5,t,t.return));break;case 1:ri(i,t),oi(t),o&512&&(bn||a===null||ra(a,a.return)),o&64&&Ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var f=Xi;if(ri(i,t),oi(t),o&512&&(bn||a===null||ra(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,f=f.ownerDocument||f;t:switch(o){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Za]||h[xn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(o),f.head.insertBefore(h,f.querySelector("head > title"))),Hn(h,o,a),h[xn]=t,_n(h),o=h;break e;case"link":var M=Gv("link","href",f).get(o+(a.href||""));if(M){for(var D=0;D<M.length;D++)if(h=M[D],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(D,1);break t}}h=f.createElement(o),Hn(h,o,a),f.head.appendChild(h);break;case"meta":if(M=Gv("meta","content",f).get(o+(a.content||""))){for(D=0;D<M.length;D++)if(h=M[D],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(D,1);break t}}h=f.createElement(o),Hn(h,o,a),f.head.appendChild(h);break;default:throw Error(s(468,o))}h[xn]=t,_n(h),o=h}t.stateNode=o}else Vv(f,t.type,t.stateNode);else t.stateNode=Hv(f,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Vv(f,t.type,t.stateNode):Hv(f,o,t.memoizedProps)):o===null&&t.stateNode!==null&&mh(t,t.memoizedProps,a.memoizedProps)}break;case 27:ri(i,t),oi(t),o&512&&(bn||a===null||ra(a,a.return)),a!==null&&o&4&&mh(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ri(i,t),oi(t),o&512&&(bn||a===null||ra(a,a.return)),t.flags&32){f=t.stateNode;try{vi(f,"")}catch(Ke){qt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(f=t.memoizedProps,mh(t,f,a!==null?a.memoizedProps:f)),o&1024&&(xh=!0);break;case 6:if(ri(i,t),oi(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ke){qt(t,t.return,Ke)}}break;case 3:if(Xc=null,f=Xi,Xi=kc(i.containerInfo),ri(i,t),Xi=f,oi(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{qr(i.containerInfo)}catch(Ke){qt(t,t.return,Ke)}xh&&(xh=!1,Vg(t));break;case 4:o=Xi,Xi=kc(t.stateNode.containerInfo),ri(i,t),oi(t),Xi=o;break;case 12:ri(i,t),oi(t);break;case 31:ri(i,t),oi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Rc(t,o)));break;case 13:ri(i,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lc=zt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Rc(t,o)));break;case 22:f=t.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,re=Ra,Se=bn;if(Ra=re||f,bn=Se||W,ri(i,t),bn=Se,Ra=re,oi(t),o&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||W||Ra||bn||Qs(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){W=a=i;try{if(h=W.stateNode,f)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{D=W.stateNode;var Te=W.memoizedProps.style,he=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;D.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch(Ke){qt(W,W.return,Ke)}}}else if(i.tag===6){if(a===null){W=i;try{W.stateNode.nodeValue=f?"":W.memoizedProps}catch(Ke){qt(W,W.return,Ke)}}}else if(i.tag===18){if(a===null){W=i;try{var ge=W.stateNode;f?Lv(ge,!0):Lv(W.stateNode,!1)}catch(Ke){qt(W,W.return,Ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Rc(t,a))));break;case 19:ri(i,t),oi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Rc(t,o)));break;case 30:break;case 21:break;default:ri(i,t),oi(t)}}function oi(t){var i=t.flags;if(i&2){try{for(var a,o=t.return;o!==null;){if(Ug(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,h=gh(t);Cc(t,h,f);break;case 5:var M=a.stateNode;a.flags&32&&(vi(M,""),a.flags&=-33);var D=gh(t);Cc(t,D,M);break;case 3:case 4:var W=a.stateNode.containerInfo,re=gh(t);vh(t,re,W);break;default:throw Error(s(161))}}catch(Se){qt(t,t.return,Se)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Vg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Vg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function La(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ig(t,i.alternate,i),i=i.sibling}function Qs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:cs(4,i,i.return),Qs(i);break;case 1:ra(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Lg(i,i.return,a),Qs(i);break;case 27:hl(i.stateNode);case 26:case 5:ra(i,i.return),Qs(i);break;case 22:i.memoizedState===null&&Qs(i);break;case 30:Qs(i);break;default:Qs(i)}t=t.sibling}}function Na(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=t,h=i,M=h.flags;switch(h.tag){case 0:case 11:case 15:Na(f,h,a),nl(4,h);break;case 1:if(Na(f,h,a),o=h,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){qt(o,o.return,re)}if(o=h,f=o.updateQueue,f!==null){var D=o.stateNode;try{var W=f.shared.hiddenCallbacks;if(W!==null)for(f.shared.hiddenCallbacks=null,f=0;f<W.length;f++)_0(W[f],D)}catch(re){qt(o,o.return,re)}}a&&M&64&&Dg(h),il(h,h.return);break;case 27:Og(h);case 26:case 5:Na(f,h,a),a&&o===null&&M&4&&Ng(h),il(h,h.return);break;case 12:Na(f,h,a);break;case 31:Na(f,h,a),a&&M&4&&Bg(f,h);break;case 13:Na(f,h,a),a&&M&4&&Hg(f,h);break;case 22:h.memoizedState===null&&Na(f,h,a),il(h,h.return);break;case 30:break;default:Na(f,h,a)}i=i.sibling}}function _h(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ko(a))}function yh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t))}function Wi(t,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kg(t,i,a,o),i=i.sibling}function kg(t,i,a,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Wi(t,i,a,o),f&2048&&nl(9,i);break;case 1:Wi(t,i,a,o);break;case 3:Wi(t,i,a,o),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t)));break;case 12:if(f&2048){Wi(t,i,a,o),t=i.stateNode;try{var h=i.memoizedProps,M=h.id,D=h.onPostCommit;typeof D=="function"&&D(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){qt(i,i.return,W)}}else Wi(t,i,a,o);break;case 31:Wi(t,i,a,o);break;case 13:Wi(t,i,a,o);break;case 23:break;case 22:h=i.stateNode,M=i.alternate,i.memoizedState!==null?h._visibility&2?Wi(t,i,a,o):al(t,i):h._visibility&2?Wi(t,i,a,o):(h._visibility|=2,Ir(t,i,a,o,(i.subtreeFlags&10256)!==0||!1)),f&2048&&_h(M,i);break;case 24:Wi(t,i,a,o),f&2048&&yh(i.alternate,i);break;default:Wi(t,i,a,o)}}function Ir(t,i,a,o,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,M=i,D=a,W=o,re=M.flags;switch(M.tag){case 0:case 11:case 15:Ir(h,M,D,W,f),nl(8,M);break;case 23:break;case 22:var Se=M.stateNode;M.memoizedState!==null?Se._visibility&2?Ir(h,M,D,W,f):al(h,M):(Se._visibility|=2,Ir(h,M,D,W,f)),f&&re&2048&&_h(M.alternate,M);break;case 24:Ir(h,M,D,W,f),f&&re&2048&&yh(M.alternate,M);break;default:Ir(h,M,D,W,f)}i=i.sibling}}function al(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,o=i,f=o.flags;switch(o.tag){case 22:al(a,o),f&2048&&_h(o.alternate,o);break;case 24:al(a,o),f&2048&&yh(o.alternate,o);break;default:al(a,o)}i=i.sibling}}var sl=8192;function Fr(t,i,a){if(t.subtreeFlags&sl)for(t=t.child;t!==null;)Yg(t,i,a),t=t.sibling}function Yg(t,i,a){switch(t.tag){case 26:Fr(t,i,a),t.flags&sl&&t.memoizedState!==null&&jM(a,Xi,t.memoizedState,t.memoizedProps);break;case 5:Fr(t,i,a);break;case 3:case 4:var o=Xi;Xi=kc(t.stateNode.containerInfo),Fr(t,i,a),Xi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=sl,sl=16777216,Fr(t,i,a),sl=o):Fr(t,i,a));break;default:Fr(t,i,a)}}function Xg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function rl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Rn=o,qg(o,t)}Xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wg(t),t=t.sibling}function Wg(t){switch(t.tag){case 0:case 11:case 15:rl(t),t.flags&2048&&cs(9,t,t.return);break;case 3:rl(t);break;case 12:rl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Dc(t)):rl(t);break;default:rl(t)}}function Dc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Rn=o,qg(o,t)}Xg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:cs(8,i,i.return),Dc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Dc(i));break;default:Dc(i)}t=t.sibling}}function qg(t,i){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:cs(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ko(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rn=o;else e:for(a=t;Rn!==null;){o=Rn;var f=o.sibling,h=o.return;if(Fg(o),o===a){Rn=null;break e}if(f!==null){f.return=h,Rn=f;break e}Rn=h}}}var cM={getCacheForType:function(t){var i=zn(yn),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return zn(yn).controller.signal}},uM=typeof WeakMap=="function"?WeakMap:Map,Bt=0,tn=null,bt=null,wt=0,Wt=0,Mi=null,us=!1,zr=!1,Sh=!1,Ua=0,pn=0,fs=0,Js=0,Mh=0,bi=0,Br=0,ol=null,li=null,bh=!1,Lc=0,jg=0,Nc=1/0,Uc=null,hs=null,wn=0,ds=null,Hr=null,Oa=0,Eh=0,Th=null,Zg=null,ll=0,wh=null;function Ei(){return(Bt&2)!==0&&wt!==0?wt&-wt:B.T!==null?Nh():Lo()}function Kg(){if(bi===0)if((wt&536870912)===0||Dt){var t=pt;pt<<=1,(pt&3932160)===0&&(pt=262144),bi=t}else bi=536870912;return t=yi.current,t!==null&&(t.flags|=32),bi}function ci(t,i,a){(t===tn&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Gr(t,0),ps(t,wt,bi,!1)),qe(t,a),((Bt&2)===0||t!==tn)&&(t===tn&&((Bt&2)===0&&(Js|=a),pn===4&&ps(t,wt,bi,!1)),oa(t))}function Qg(t,i,a){if((Bt&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&t.expiredLanes)===0||Ue(t,i),f=o?dM(t,i):Ch(t,i,!0),h=o;do{if(f===0){zr&&!o&&ps(t,i,0,!1);break}else{if(a=t.current.alternate,h&&!fM(a)){f=Ch(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var D=t;f=ol;var W=D.current.memoizedState.isDehydrated;if(W&&(Gr(D,M).flags|=256),M=Ch(D,M,!1),M!==2){if(Sh&&!W){D.errorRecoveryDisabledLanes|=h,Js|=h,f=4;break e}h=li,li=f,h!==null&&(li===null?li=h:li.push.apply(li,h))}f=M}if(h=!1,f!==2)continue}}if(f===1){Gr(t,0),ps(t,i,0,!0);break}e:{switch(o=t,h=f,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:ps(o,i,bi,!us);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Lc+300-zt(),10<f)){if(ps(o,i,bi,!us),Me(o,0,!0)!==0)break e;Oa=i,o.timeoutHandle=Cv(Jg.bind(null,o,a,li,Uc,bh,i,bi,Js,Br,us,h,"Throttled",-0,0),f);break e}Jg(o,a,li,Uc,bh,i,bi,Js,Br,us,h,null,-0,0)}}break}while(!0);oa(t)}function Jg(t,i,a,o,f,h,M,D,W,re,Se,Te,he,ge){if(t.timeoutHandle=-1,Te=i.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},Yg(i,h,Te);var Ke=(h&62914560)===h?Lc-zt():(h&4194048)===h?jg-zt():0;if(Ke=ZM(Te,Ke),Ke!==null){Oa=h,t.cancelPendingCommit=Ke(rv.bind(null,t,i,h,a,o,f,M,D,W,Se,Te,null,he,ge)),ps(t,h,M,!re);return}}rv(t,i,h,a,o,f,M,D,W)}function fM(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var f=a[o],h=f.getSnapshot;f=f.value;try{if(!xi(h(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ps(t,i,a,o){i&=~Mh,i&=~Js,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var f=i;0<f;){var h=31-Ye(f),M=1<<h;o[h]=-1,f&=~M}a!==0&&Vt(t,a,i)}function Oc(){return(Bt&6)===0?(cl(0),!1):!0}function Ah(){if(bt!==null){if(Wt===0)var t=bt.return;else t=bt,ba=ks=null,kf(t),Lr=null,Xo=0,t=bt;for(;t!==null;)Rg(t.alternate,t),t=t.return;bt=null}}function Gr(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,LM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Oa=0,Ah(),tn=t,bt=a=Sa(t.current,null),wt=i,Wt=0,Mi=null,us=!1,zr=Ue(t,i),Sh=!1,Br=bi=Mh=Js=fs=pn=0,li=ol=null,bh=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var f=31-Ye(o),h=1<<f;i|=t[f],o&=~h}return Ua=i,tc(),a}function $g(t,i){_t=null,B.H=$o,i===Dr||i===cc?(i=m0(),Wt=3):i===Lf?(i=m0(),Wt=4):Wt=i===sh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Mi=i,bt===null&&(pn=1,bc(t,Di(i,t.current)))}function ev(){var t=yi.current;return t===null?!0:(wt&4194048)===wt?Oi===null:(wt&62914560)===wt||(wt&536870912)!==0?t===Oi:!1}function tv(){var t=B.H;return B.H=$o,t===null?$o:t}function nv(){var t=B.A;return B.A=cM,t}function Pc(){pn=4,us||(wt&4194048)!==wt&&yi.current!==null||(zr=!0),(fs&134217727)===0&&(Js&134217727)===0||tn===null||ps(tn,wt,bi,!1)}function Ch(t,i,a){var o=Bt;Bt|=2;var f=tv(),h=nv();(tn!==t||wt!==i)&&(Uc=null,Gr(t,i)),i=!1;var M=pn;e:do try{if(Wt!==0&&bt!==null){var D=bt,W=Mi;switch(Wt){case 8:Ah(),M=6;break e;case 3:case 2:case 9:case 6:yi.current===null&&(i=!0);var re=Wt;if(Wt=0,Mi=null,Vr(t,D,W,re),a&&zr){M=0;break e}break;default:re=Wt,Wt=0,Mi=null,Vr(t,D,W,re)}}hM(),M=pn;break}catch(Se){$g(t,Se)}while(!0);return i&&t.shellSuspendCounter++,ba=ks=null,Bt=o,B.H=f,B.A=h,bt===null&&(tn=null,wt=0,tc()),M}function hM(){for(;bt!==null;)iv(bt)}function dM(t,i){var a=Bt;Bt|=2;var o=tv(),f=nv();tn!==t||wt!==i?(Uc=null,Nc=zt()+500,Gr(t,i)):zr=Ue(t,i);e:do try{if(Wt!==0&&bt!==null){i=bt;var h=Mi;t:switch(Wt){case 1:Wt=0,Mi=null,Vr(t,i,h,1);break;case 2:case 9:if(d0(h)){Wt=0,Mi=null,av(i);break}i=function(){Wt!==2&&Wt!==9||tn!==t||(Wt=7),oa(t)},h.then(i,i);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:d0(h)?(Wt=0,Mi=null,av(i)):(Wt=0,Mi=null,Vr(t,i,h,7));break;case 5:var M=null;switch(bt.tag){case 26:M=bt.memoizedState;case 5:case 27:var D=bt;if(M?kv(M):D.stateNode.complete){Wt=0,Mi=null;var W=D.sibling;if(W!==null)bt=W;else{var re=D.return;re!==null?(bt=re,Ic(re)):bt=null}break t}}Wt=0,Mi=null,Vr(t,i,h,5);break;case 6:Wt=0,Mi=null,Vr(t,i,h,6);break;case 8:Ah(),pn=6;break e;default:throw Error(s(462))}}pM();break}catch(Se){$g(t,Se)}while(!0);return ba=ks=null,B.H=o,B.A=f,Bt=a,bt!==null?0:(tn=null,wt=0,tc(),pn)}function pM(){for(;bt!==null&&!$t();)iv(bt)}function iv(t){var i=Ag(t.alternate,t,Ua);t.memoizedProps=t.pendingProps,i===null?Ic(t):bt=i}function av(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Sg(a,i,i.pendingProps,i.type,void 0,wt);break;case 11:i=Sg(a,i,i.pendingProps,i.type.render,i.ref,wt);break;case 5:kf(i);default:Rg(a,i),i=bt=n0(i,Ua),i=Ag(a,i,Ua)}t.memoizedProps=t.pendingProps,i===null?Ic(t):bt=i}function Vr(t,i,a,o){ba=ks=null,kf(i),Lr=null,Xo=0;var f=i.return;try{if(nM(t,f,i,a,wt)){pn=1,bc(t,Di(a,t.current)),bt=null;return}}catch(h){if(f!==null)throw bt=f,h;pn=1,bc(t,Di(a,t.current)),bt=null;return}i.flags&32768?(Dt||o===1?t=!0:zr||(wt&536870912)!==0?t=!1:(us=t=!0,(o===2||o===9||o===3||o===6)&&(o=yi.current,o!==null&&o.tag===13&&(o.flags|=16384))),sv(i,t)):Ic(i)}function Ic(t){var i=t;do{if((i.flags&32768)!==0){sv(i,us);return}t=i.return;var a=sM(i.alternate,i,Ua);if(a!==null){bt=a;return}if(i=i.sibling,i!==null){bt=i;return}bt=i=t}while(i!==null);pn===0&&(pn=5)}function sv(t,i){do{var a=rM(t.alternate,t);if(a!==null){a.flags&=32767,bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){bt=t;return}bt=t=a}while(t!==null);pn=6,bt=null}function rv(t,i,a,o,f,h,M,D,W){t.cancelPendingCommit=null;do Fc();while(wn!==0);if((Bt&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(h=i.lanes|i.childLanes,h|=gf,cn(t,a,h,M,D,W),t===tn&&(bt=tn=null,wt=0),Hr=i,ds=t,Oa=a,Eh=h,Th=f,Zg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xM(te,function(){return fv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,f=Y.p,Y.p=2,M=Bt,Bt|=4;try{oM(t,i,a)}finally{Bt=M,Y.p=f,B.T=o}}wn=1,ov(),lv(),cv()}}function ov(){if(wn===1){wn=0;var t=ds,i=Hr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Y.p;Y.p=2;var f=Bt;Bt|=4;try{Gg(i,t);var h=Hh,M=qm(t.containerInfo),D=h.focusedElem,W=h.selectionRange;if(M!==D&&D&&D.ownerDocument&&Wm(D.ownerDocument.documentElement,D)){if(W!==null&&ff(D)){var re=W.start,Se=W.end;if(Se===void 0&&(Se=re),"selectionStart"in D)D.selectionStart=re,D.selectionEnd=Math.min(Se,D.value.length);else{var Te=D.ownerDocument||document,he=Te&&Te.defaultView||window;if(he.getSelection){var ge=he.getSelection(),Ke=D.textContent.length,ft=Math.min(W.start,Ke),Jt=W.end===void 0?ft:Math.min(W.end,Ke);!ge.extend&&ft>Jt&&(M=Jt,Jt=ft,ft=M);var ee=Xm(D,ft),j=Xm(D,Jt);if(ee&&j&&(ge.rangeCount!==1||ge.anchorNode!==ee.node||ge.anchorOffset!==ee.offset||ge.focusNode!==j.node||ge.focusOffset!==j.offset)){var se=Te.createRange();se.setStart(ee.node,ee.offset),ge.removeAllRanges(),ft>Jt?(ge.addRange(se),ge.extend(j.node,j.offset)):(se.setEnd(j.node,j.offset),ge.addRange(se))}}}}for(Te=[],ge=D;ge=ge.parentNode;)ge.nodeType===1&&Te.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Te.length;D++){var be=Te[D];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Zc=!!Bh,Hh=Bh=null}finally{Bt=f,Y.p=o,B.T=a}}t.current=i,wn=2}}function lv(){if(wn===2){wn=0;var t=ds,i=Hr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Y.p;Y.p=2;var f=Bt;Bt|=4;try{Ig(t,i.alternate,i)}finally{Bt=f,Y.p=o,B.T=a}}wn=3}}function cv(){if(wn===4||wn===3){wn=0,J();var t=ds,i=Hr,a=Oa,o=Zg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,Hr=ds=null,uv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(hs=null),Do(a),i=i.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(_e,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=B.T,f=Y.p,Y.p=2,B.T=null;try{for(var h=t.onRecoverableError,M=0;M<o.length;M++){var D=o[M];h(D.value,{componentStack:D.stack})}}finally{B.T=i,Y.p=f}}(Oa&3)!==0&&Fc(),oa(t),f=t.pendingLanes,(a&261930)!==0&&(f&42)!==0?t===wh?ll++:(ll=0,wh=t):ll=0,cl(0)}}function uv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ko(i)))}function Fc(){return ov(),lv(),cv(),fv()}function fv(){if(wn!==5)return!1;var t=ds,i=Eh;Eh=0;var a=Do(Oa),o=B.T,f=Y.p;try{Y.p=32>a?32:a,B.T=null,a=Th,Th=null;var h=ds,M=Oa;if(wn=0,Hr=ds=null,Oa=0,(Bt&6)!==0)throw Error(s(331));var D=Bt;if(Bt|=4,Wg(h.current),kg(h,h.current,M,a),Bt=D,cl(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(_e,h)}catch{}return!0}finally{Y.p=f,B.T=o,uv(t,i)}}function hv(t,i,a){i=Di(a,i),i=ah(t.stateNode,i,2),t=rs(t,i,2),t!==null&&(qe(t,2),oa(t))}function qt(t,i,a){if(t.tag===3)hv(t,t,a);else for(;i!==null;){if(i.tag===3){hv(i,t,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hs===null||!hs.has(o))){t=Di(a,t),a=dg(2),o=rs(i,a,2),o!==null&&(pg(a,o,i,t),qe(o,2),oa(o));break}}i=i.return}}function Rh(t,i,a){var o=t.pingCache;if(o===null){o=t.pingCache=new uM;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(a)||(Sh=!0,f.add(a),t=mM.bind(null,t,i,a),i.then(t,t))}function mM(t,i,a){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,tn===t&&(wt&a)===a&&(pn===4||pn===3&&(wt&62914560)===wt&&300>zt()-Lc?(Bt&2)===0&&Gr(t,0):Mh|=a,Br===wt&&(Br=0)),oa(t)}function dv(t,i){i===0&&(i=we()),t=Hs(t,i),t!==null&&(qe(t,i),oa(t))}function gM(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),dv(t,a)}function vM(t,i){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),dv(t,a)}function xM(t,i){return Rt(t,i)}var zc=null,kr=null,Dh=!1,Bc=!1,Lh=!1,ms=0;function oa(t){t!==kr&&t.next===null&&(kr===null?zc=kr=t:kr=kr.next=t),Bc=!0,Dh||(Dh=!0,yM())}function cl(t,i){if(!Lh&&Bc){Lh=!0;do for(var a=!1,o=zc;o!==null;){if(t!==0){var f=o.pendingLanes;if(f===0)var h=0;else{var M=o.suspendedLanes,D=o.pingedLanes;h=(1<<31-Ye(42|t)+1)-1,h&=f&~(M&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,vv(o,h))}else h=wt,h=Me(o,o===tn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ue(o,h)||(a=!0,vv(o,h));o=o.next}while(a);Lh=!1}}function _M(){pv()}function pv(){Bc=Dh=!1;var t=0;ms!==0&&DM()&&(t=ms);for(var i=zt(),a=null,o=zc;o!==null;){var f=o.next,h=mv(o,i);h===0?(o.next=null,a===null?zc=f:a.next=f,f===null&&(kr=a)):(a=o,(t!==0||(h&3)!==0)&&(Bc=!0)),o=f}wn!==0&&wn!==5||cl(t),ms!==0&&(ms=0)}function mv(t,i){for(var a=t.suspendedLanes,o=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-Ye(h),D=1<<M,W=f[M];W===-1?((D&a)===0||(D&o)!==0)&&(f[M]=Ge(D,i)):W<=i&&(t.expiredLanes|=D),h&=~D}if(i=tn,a=wt,a=Me(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===i&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Lt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(o!==null&&Lt(o),Do(a)){case 2:case 8:a=w;break;case 32:a=te;break;case 268435456:a=xe;break;default:a=te}return o=gv.bind(null,t),a=Rt(a,o),t.callbackPriority=i,t.callbackNode=a,i}return o!==null&&o!==null&&Lt(o),t.callbackPriority=2,t.callbackNode=null,2}function gv(t,i){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Fc()&&t.callbackNode!==a)return null;var o=wt;return o=Me(t,t===tn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Qg(t,o,i),mv(t,zt()),t.callbackNode!=null&&t.callbackNode===a?gv.bind(null,t):null)}function vv(t,i){if(Fc())return null;Qg(t,i,!0)}function yM(){NM(function(){(Bt&6)!==0?Rt(z,_M):pv()})}function Nh(){if(ms===0){var t=Cr;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),ms=t}return ms}function xv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Is(""+t)}function _v(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function SM(t,i,a,o,f){if(i==="submit"&&a&&a.stateNode===f){var h=xv((f[In]||null).action),M=o.submitter;M&&(i=(i=M[In]||null)?xv(i.formAction):M.getAttribute("formAction"),i!==null&&(h=i,M=null));var D=new Ql("action","action",null,o,f);t.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ms!==0){var W=M?_v(f,M):new FormData(f);Jf(a,{pending:!0,data:W,method:f.method,action:h},null,W)}}else typeof h=="function"&&(D.preventDefault(),W=M?_v(f,M):new FormData(f),Jf(a,{pending:!0,data:W,method:f.method,action:h},h,W))},currentTarget:f}]})}}for(var Uh=0;Uh<mf.length;Uh++){var Oh=mf[Uh],MM=Oh.toLowerCase(),bM=Oh[0].toUpperCase()+Oh.slice(1);Yi(MM,"on"+bM)}Yi(Km,"onAnimationEnd"),Yi(Qm,"onAnimationIteration"),Yi(Jm,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(BS,"onTransitionRun"),Yi(HS,"onTransitionStart"),Yi(GS,"onTransitionCancel"),Yi($m,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function yv(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],f=o.event;o=o.listeners;e:{var h=void 0;if(i)for(var M=o.length-1;0<=M;M--){var D=o[M],W=D.instance,re=D.currentTarget;if(D=D.listener,W!==h&&f.isPropagationStopped())break e;h=D,f.currentTarget=re;try{h(f)}catch(Se){ec(Se)}f.currentTarget=null,h=W}else for(M=0;M<o.length;M++){if(D=o[M],W=D.instance,re=D.currentTarget,D=D.listener,W!==h&&f.isPropagationStopped())break e;h=D,f.currentTarget=re;try{h(f)}catch(Se){ec(Se)}f.currentTarget=null,h=W}}}}function Et(t,i){var a=i[Us];a===void 0&&(a=i[Us]=new Set);var o=t+"__bubble";a.has(o)||(Sv(i,t,2,!1),a.add(o))}function Ph(t,i,a){var o=0;i&&(o|=4),Sv(a,t,o,i)}var Hc="_reactListening"+Math.random().toString(36).slice(2);function Ih(t){if(!t[Hc]){t[Hc]=!0,ql.forEach(function(a){a!=="selectionchange"&&(EM.has(a)||Ph(a,!1,t),Ph(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Hc]||(i[Hc]=!0,Ph("selectionchange",!1,i))}}function Sv(t,i,a,o){switch(Kv(i)){case 2:var f=JM;break;case 8:f=$M;break;default:f=Qh}a=f.bind(null,i,a,t),f=void 0,!tf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function Fh(t,i,a,o,f){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var D=o.stateNode.containerInfo;if(D===f)break;if(M===4)for(M=o.return;M!==null;){var W=M.tag;if((W===3||W===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;D!==null;){if(M=va(D),M===null)return;if(W=M.tag,W===5||W===6||W===26||W===27){o=h=M;continue e}D=D.parentNode}}o=o.return}wm(function(){var re=h,Se=$u(a),Te=[];e:{var he=e0.get(t);if(he!==void 0){var ge=Ql,Ke=t;switch(t){case"keypress":if(Zl(a)===0)break e;case"keydown":case"keyup":ge=vS;break;case"focusin":Ke="focus",ge=rf;break;case"focusout":Ke="blur",ge=rf;break;case"beforeblur":case"afterblur":ge=rf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=yS;break;case Km:case Qm:case Jm:ge=lS;break;case $m:ge=MS;break;case"scroll":case"scrollend":ge=iS;break;case"wheel":ge=ES;break;case"copy":case"cut":case"paste":ge=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Lm;break;case"toggle":case"beforetoggle":ge=wS}var ft=(i&4)!==0,Jt=!ft&&(t==="scroll"||t==="scrollend"),ee=ft?he!==null?he+"Capture":null:he;ft=[];for(var j=re,se;j!==null;){var be=j;if(se=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||se===null||ee===null||(be=No(j,ee),be!=null&&ft.push(fl(j,be,se))),Jt)break;j=j.return}0<ft.length&&(he=new ge(he,Ke,null,a,Se),Te.push({event:he,listeners:ft}))}}if((i&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",he&&a!==Ju&&(Ke=a.relatedTarget||a.fromElement)&&(va(Ke)||Ke[ii]))break e;if((ge||he)&&(he=Se.window===Se?Se:(he=Se.ownerDocument)?he.defaultView||he.parentWindow:window,ge?(Ke=a.relatedTarget||a.toElement,ge=re,Ke=Ke?va(Ke):null,Ke!==null&&(Jt=c(Ke),ft=Ke.tag,Ke!==Jt||ft!==5&&ft!==27&&ft!==6)&&(Ke=null)):(ge=null,Ke=re),ge!==Ke)){if(ft=Rm,be="onMouseLeave",ee="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ft=Lm,be="onPointerLeave",ee="onPointerEnter",j="pointer"),Jt=ge==null?he:Ps(ge),se=Ke==null?he:Ps(Ke),he=new ft(be,j+"leave",ge,a,Se),he.target=Jt,he.relatedTarget=se,be=null,va(Se)===re&&(ft=new ft(ee,j+"enter",Ke,a,Se),ft.target=se,ft.relatedTarget=Jt,be=ft),Jt=be,ge&&Ke)t:{for(ft=TM,ee=ge,j=Ke,se=0,be=ee;be;be=ft(be))se++;be=0;for(var rt=j;rt;rt=ft(rt))be++;for(;0<se-be;)ee=ft(ee),se--;for(;0<be-se;)j=ft(j),be--;for(;se--;){if(ee===j||j!==null&&ee===j.alternate){ft=ee;break t}ee=ft(ee),j=ft(j)}ft=null}else ft=null;ge!==null&&Mv(Te,he,ge,ft,!1),Ke!==null&&Jt!==null&&Mv(Te,Jt,Ke,ft,!0)}}e:{if(he=re?Ps(re):window,ge=he.nodeName&&he.nodeName.toLowerCase(),ge==="select"||ge==="input"&&he.type==="file")var Pt=Bm;else if(Fm(he))if(Hm)Pt=IS;else{Pt=OS;var et=US}else ge=he.nodeName,!ge||ge.toLowerCase()!=="input"||he.type!=="checkbox"&&he.type!=="radio"?re&&Ht(re.elementType)&&(Pt=Bm):Pt=PS;if(Pt&&(Pt=Pt(t,re))){zm(Te,Pt,a,Se);break e}et&&et(t,he,re),t==="focusout"&&re&&he.type==="number"&&re.memoizedProps.value!=null&&Mt(he,"number",he.value)}switch(et=re?Ps(re):window,t){case"focusin":(Fm(et)||et.contentEditable==="true")&&(yr=et,hf=re,Ho=null);break;case"focusout":Ho=hf=yr=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,jm(Te,a,Se);break;case"selectionchange":if(zS)break;case"keydown":case"keyup":jm(Te,a,Se)}var yt;if(lf)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else _r?Pm(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(Nm&&a.locale!=="ko"&&(_r||At!=="onCompositionStart"?At==="onCompositionEnd"&&_r&&(yt=Am()):($a=Se,nf="value"in $a?$a.value:$a.textContent,_r=!0)),et=Gc(re,At),0<et.length&&(At=new Dm(At,t,null,a,Se),Te.push({event:At,listeners:et}),yt?At.data=yt:(yt=Im(a),yt!==null&&(At.data=yt)))),(yt=CS?RS(t,a):DS(t,a))&&(At=Gc(re,"onBeforeInput"),0<At.length&&(et=new Dm("onBeforeInput","beforeinput",null,a,Se),Te.push({event:et,listeners:At}),et.data=yt)),SM(Te,t,re,a,Se)}yv(Te,i)})}function fl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Gc(t,i){for(var a=i+"Capture",o=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=No(t,a),f!=null&&o.unshift(fl(t,f,h)),f=No(t,i),f!=null&&o.push(fl(t,f,h))),t.tag===3)return o;t=t.return}return[]}function TM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mv(t,i,a,o,f){for(var h=i._reactName,M=[];a!==null&&a!==o;){var D=a,W=D.alternate,re=D.stateNode;if(D=D.tag,W!==null&&W===o)break;D!==5&&D!==26&&D!==27||re===null||(W=re,f?(re=No(a,h),re!=null&&M.unshift(fl(a,re,W))):f||(re=No(a,h),re!=null&&M.push(fl(a,re,W)))),a=a.return}M.length!==0&&t.push({event:i,listeners:M})}var wM=/\r\n?/g,AM=/\u0000|\uFFFD/g;function bv(t){return(typeof t=="string"?t:""+t).replace(wM,`
`).replace(AM,"")}function Ev(t,i){return i=bv(i),bv(t)===i}function Qt(t,i,a,o,f,h){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||vi(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&vi(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,a,o);break;case"style":ki(t,o,h);break;case"data":if(i!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Is(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(i!=="input"&&Qt(t,i,"name",f.name,f,null),Qt(t,i,"formEncType",f.formEncType,f,null),Qt(t,i,"formMethod",f.formMethod,f,null),Qt(t,i,"formTarget",f.formTarget,f,null)):(Qt(t,i,"encType",f.encType,f,null),Qt(t,i,"method",f.method,f,null),Qt(t,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Is(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=_a);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Is(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ia.get(a)||a,Ie(t,a,o))}}function zh(t,i,a,o,f,h){switch(a){case"style":ki(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?vi(t,o):(typeof o=="number"||typeof o=="bigint")&&vi(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),h=t[In]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,o,f);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ie(t,a,o)}}}function Hn(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,f=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(t,i,h,M,a,null)}}f&&Qt(t,i,"srcSet",a.srcSet,a,null),o&&Qt(t,i,"src",a.src,a,null);return;case"input":Et("invalid",t);var D=h=M=f=null,W=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var Se=a[o];if(Se!=null)switch(o){case"name":f=Se;break;case"type":M=Se;break;case"checked":W=Se;break;case"defaultChecked":re=Se;break;case"value":h=Se;break;case"defaultValue":D=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(s(137,i));break;default:Qt(t,i,o,Se,a,null)}}Yn(t,h,D,W,re,M,f,!1);return;case"select":Et("invalid",t),o=M=h=null;for(f in a)if(a.hasOwnProperty(f)&&(D=a[f],D!=null))switch(f){case"value":h=D;break;case"defaultValue":M=D;break;case"multiple":o=D;default:Qt(t,i,f,D,a,null)}i=h,a=M,t.multiple=!!o,i!=null?Tn(t,!!o,i,!1):a!=null&&Tn(t,!!o,a,!0);return;case"textarea":Et("invalid",t),h=f=o=null;for(M in a)if(a.hasOwnProperty(M)&&(D=a[M],D!=null))switch(M){case"value":o=D;break;case"defaultValue":f=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(91));break;default:Qt(t,i,M,D,a,null)}Vi(t,o,f,h);return;case"option":for(W in a)a.hasOwnProperty(W)&&(o=a[W],o!=null)&&(W==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Qt(t,i,W,o,a,null));return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<ul.length;o++)Et(ul[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(t,i,re,o,a,null)}return;default:if(Ht(i)){for(Se in a)a.hasOwnProperty(Se)&&(o=a[Se],o!==void 0&&zh(t,i,Se,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&Qt(t,i,D,o,a,null))}function CM(t,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,M=null,D=null,W=null,re=null,Se=null;for(ge in a){var Te=a[ge];if(a.hasOwnProperty(ge)&&Te!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":W=Te;default:o.hasOwnProperty(ge)||Qt(t,i,ge,null,o,Te)}}for(var he in o){var ge=o[he];if(Te=a[he],o.hasOwnProperty(he)&&(ge!=null||Te!=null))switch(he){case"type":h=ge;break;case"name":f=ge;break;case"checked":re=ge;break;case"defaultChecked":Se=ge;break;case"value":M=ge;break;case"defaultValue":D=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,i));break;default:ge!==Te&&Qt(t,i,he,ge,o,Te)}}Xe(t,M,D,W,re,Se,h,f);return;case"select":ge=M=D=he=null;for(h in a)if(W=a[h],a.hasOwnProperty(h)&&W!=null)switch(h){case"value":break;case"multiple":ge=W;default:o.hasOwnProperty(h)||Qt(t,i,h,null,o,W)}for(f in o)if(h=o[f],W=a[f],o.hasOwnProperty(f)&&(h!=null||W!=null))switch(f){case"value":he=h;break;case"defaultValue":D=h;break;case"multiple":M=h;default:h!==W&&Qt(t,i,f,h,o,W)}i=D,a=M,o=ge,he!=null?Tn(t,!!a,he,!1):!!o!=!!a&&(i!=null?Tn(t,!!a,i,!0):Tn(t,!!a,a?[]:"",!1));return;case"textarea":ge=he=null;for(D in a)if(f=a[D],a.hasOwnProperty(D)&&f!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Qt(t,i,D,null,o,f)}for(M in o)if(f=o[M],h=a[M],o.hasOwnProperty(M)&&(f!=null||h!=null))switch(M){case"value":he=f;break;case"defaultValue":ge=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==h&&Qt(t,i,M,f,o,h)}gi(t,he,ge);return;case"option":for(var Ke in a)he=a[Ke],a.hasOwnProperty(Ke)&&he!=null&&!o.hasOwnProperty(Ke)&&(Ke==="selected"?t.selected=!1:Qt(t,i,Ke,null,o,he));for(W in o)he=o[W],ge=a[W],o.hasOwnProperty(W)&&he!==ge&&(he!=null||ge!=null)&&(W==="selected"?t.selected=he&&typeof he!="function"&&typeof he!="symbol":Qt(t,i,W,he,o,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)he=a[ft],a.hasOwnProperty(ft)&&he!=null&&!o.hasOwnProperty(ft)&&Qt(t,i,ft,null,o,he);for(re in o)if(he=o[re],ge=a[re],o.hasOwnProperty(re)&&he!==ge&&(he!=null||ge!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,i));break;default:Qt(t,i,re,he,o,ge)}return;default:if(Ht(i)){for(var Jt in a)he=a[Jt],a.hasOwnProperty(Jt)&&he!==void 0&&!o.hasOwnProperty(Jt)&&zh(t,i,Jt,void 0,o,he);for(Se in o)he=o[Se],ge=a[Se],!o.hasOwnProperty(Se)||he===ge||he===void 0&&ge===void 0||zh(t,i,Se,he,o,ge);return}}for(var ee in a)he=a[ee],a.hasOwnProperty(ee)&&he!=null&&!o.hasOwnProperty(ee)&&Qt(t,i,ee,null,o,he);for(Te in o)he=o[Te],ge=a[Te],!o.hasOwnProperty(Te)||he===ge||he==null&&ge==null||Qt(t,i,Te,he,o,ge)}function Tv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function RM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var f=a[o],h=f.transferSize,M=f.initiatorType,D=f.duration;if(h&&D&&Tv(M)){for(M=0,D=f.responseEnd,o+=1;o<a.length;o++){var W=a[o],re=W.startTime;if(re>D)break;var Se=W.transferSize,Te=W.initiatorType;Se&&Tv(Te)&&(W=W.responseEnd,M+=Se*(W<D?1:(D-re)/(W-re)))}if(--o,i+=8*(h+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bh=null,Hh=null;function Vc(t){return t.nodeType===9?t:t.ownerDocument}function wv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Av(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Gh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vh=null;function DM(){var t=window.event;return t&&t.type==="popstate"?t===Vh?!1:(Vh=t,!0):(Vh=null,!1)}var Cv=typeof setTimeout=="function"?setTimeout:void 0,LM=typeof clearTimeout=="function"?clearTimeout:void 0,Rv=typeof Promise=="function"?Promise:void 0,NM=typeof queueMicrotask=="function"?queueMicrotask:typeof Rv<"u"?function(t){return Rv.resolve(null).then(t).catch(UM)}:Cv;function UM(t){setTimeout(function(){throw t})}function gs(t){return t==="head"}function Dv(t,i){var a=i,o=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(f),qr(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")hl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,hl(a);for(var h=a.firstChild;h;){var M=h.nextSibling,D=h.nodeName;h[Za]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=M}}else a==="body"&&hl(t.ownerDocument.body);a=f}while(a);qr(i)}function Lv(t,i){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function kh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kh(a),Ka(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function OM(t,i,a,o){for(;t.nodeType===1;){var f=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Za])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Pi(t.nextSibling),t===null)break}return null}function PM(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pi(t.nextSibling),t===null))return null;return t}function Nv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Pi(t.nextSibling),t===null))return null;return t}function Yh(t){return t.data==="$?"||t.data==="$~"}function Xh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function IM(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Pi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Wh=null;function Uv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return Pi(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function Ov(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function Pv(t,i,a){switch(i=Vc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function hl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ka(t)}var Ii=new Map,Iv=new Set;function kc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pa=Y.d;Y.d={f:FM,r:zM,D:BM,C:HM,L:GM,m:VM,X:YM,S:kM,M:XM};function FM(){var t=Pa.f(),i=Oc();return t||i}function zM(t){var i=xa(t);i!==null&&i.tag===5&&i.type==="form"?$0(i):Pa.r(t)}var Yr=typeof document>"u"?null:document;function Fv(t,i,a){var o=Yr;if(o&&typeof i=="string"&&i){var f=Yt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),Iv.has(f)||(Iv.add(f),t={rel:t,crossOrigin:a,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),Hn(i,"link",t),_n(i),o.head.appendChild(i)))}}function BM(t){Pa.D(t),Fv("dns-prefetch",t,null)}function HM(t,i){Pa.C(t,i),Fv("preconnect",t,i)}function GM(t,i,a){Pa.L(t,i,a);var o=Yr;if(o&&t&&i){var f='link[rel="preload"][as="'+Yt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+Yt(a.imageSizes)+'"]')):f+='[href="'+Yt(t)+'"]';var h=f;switch(i){case"style":h=Xr(t);break;case"script":h=Wr(t)}Ii.has(h)||(t=g({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Ii.set(h,t),o.querySelector(f)!==null||i==="style"&&o.querySelector(dl(h))||i==="script"&&o.querySelector(pl(h))||(i=o.createElement("link"),Hn(i,"link",t),_n(i),o.head.appendChild(i)))}}function VM(t,i){Pa.m(t,i);var a=Yr;if(a&&t){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(t)+'"]',h=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Wr(t)}if(!Ii.has(h)&&(t=g({rel:"modulepreload",href:t},i),Ii.set(h,t),a.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(h)))return}o=a.createElement("link"),Hn(o,"link",t),_n(o),a.head.appendChild(o)}}}function kM(t,i,a){Pa.S(t,i,a);var o=Yr;if(o&&t){var f=Qa(o).hoistableStyles,h=Xr(t);i=i||"default";var M=f.get(h);if(!M){var D={loading:0,preload:null};if(M=o.querySelector(dl(h)))D.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Ii.get(h))&&qh(t,a);var W=M=o.createElement("link");_n(W),Hn(W,"link",t),W._p=new Promise(function(re,Se){W.onload=re,W.onerror=Se}),W.addEventListener("load",function(){D.loading|=1}),W.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Yc(M,i,o)}M={type:"stylesheet",instance:M,count:1,state:D},f.set(h,M)}}}function YM(t,i){Pa.X(t,i);var a=Yr;if(a&&t){var o=Qa(a).hoistableScripts,f=Wr(t),h=o.get(f);h||(h=a.querySelector(pl(f)),h||(t=g({src:t,async:!0},i),(i=Ii.get(f))&&jh(t,i),h=a.createElement("script"),_n(h),Hn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function XM(t,i){Pa.M(t,i);var a=Yr;if(a&&t){var o=Qa(a).hoistableScripts,f=Wr(t),h=o.get(f);h||(h=a.querySelector(pl(f)),h||(t=g({src:t,async:!0,type:"module"},i),(i=Ii.get(f))&&jh(t,i),h=a.createElement("script"),_n(h),Hn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function zv(t,i,a,o){var f=(f=K.current)?kc(f):null;if(!f)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Xr(a.href),a=Qa(f).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xr(a.href);var h=Qa(f).hoistableStyles,M=h.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=f.querySelector(dl(t)))&&!h._p&&(M.instance=h,M.state.loading=5),Ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ii.set(t,a),h||WM(f,t,a,M.state))),i&&o===null)throw Error(s(528,""));return M}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Wr(a),a=Qa(f).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Xr(t){return'href="'+Yt(t)+'"'}function dl(t){return'link[rel="stylesheet"]['+t+"]"}function Bv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function WM(t,i,a,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Hn(i,"link",a),_n(i),t.head.appendChild(i))}function Wr(t){return'[src="'+Yt(t)+'"]'}function pl(t){return"script[async]"+t}function Hv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(o)return i.instance=o,_n(o),o;var f=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),_n(o),Hn(o,"style",f),Yc(o,a.precedence,t),i.instance=o;case"stylesheet":f=Xr(a.href);var h=t.querySelector(dl(f));if(h)return i.state.loading|=4,i.instance=h,_n(h),h;o=Bv(a),(f=Ii.get(f))&&qh(o,f),h=(t.ownerDocument||t).createElement("link"),_n(h);var M=h;return M._p=new Promise(function(D,W){M.onload=D,M.onerror=W}),Hn(h,"link",o),i.state.loading|=4,Yc(h,a.precedence,t),i.instance=h;case"script":return h=Wr(a.src),(f=t.querySelector(pl(h)))?(i.instance=f,_n(f),f):(o=a,(f=Ii.get(h))&&(o=g({},a),jh(o,f)),t=t.ownerDocument||t,f=t.createElement("script"),_n(f),Hn(f,"link",o),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Yc(o,a.precedence,t));return i.instance}function Yc(t,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,h=f,M=0;M<o.length;M++){var D=o[M];if(D.dataset.precedence===i)h=D;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function qh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function jh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Xc=null;function Gv(t,i,a){if(Xc===null){var o=new Map,f=Xc=new Map;f.set(a,o)}else f=Xc,o=f.get(a),o||(o=new Map,f.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),f=0;f<a.length;f++){var h=a[f];if(!(h[Za]||h[xn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(i)||"";M=t+M;var D=o.get(M);D?D.push(h):o.set(M,[h])}}return o}function Vv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function qM(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function kv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function jM(t,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Xr(o.href),h=i.querySelector(dl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Wc.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=h,_n(h);return}h=i.ownerDocument||i,o=Bv(o),(f=Ii.get(f))&&qh(o,f),h=h.createElement("link"),_n(h);var M=h;M._p=new Promise(function(D,W){M.onload=D,M.onerror=W}),Hn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Wc.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var Zh=0;function ZM(t,i){return t.stylesheets&&t.count===0&&jc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&jc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Zh===0&&(Zh=62500*RM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Zh?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function Wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var qc=null;function jc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qc=new Map,i.forEach(KM,t),qc=null,Wc.call(t))}function KM(t,i){if(!(i.state.loading&4)){var a=qc.get(t);if(a)var o=a.get(null);else{a=new Map,qc.set(t,a);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var M=f[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}f=i.instance,M=f.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,f),a.set(M,f),this.count++,o=Wc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var ml={$$typeof:P,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function QM(t,i,a,o,f,h,M,D,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function Yv(t,i,a,o,f,h,M,D,W,re,Se,Te){return t=new QM(t,i,a,M,W,re,Se,Te,D),i=1,h===!0&&(i|=24),h=_i(3,null,null,i),t.current=h,h.stateNode=t,i=Cf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:i},Nf(h),t}function Xv(t){return t?(t=br,t):br}function Wv(t,i,a,o,f,h){f=Xv(f),o.context===null?o.context=f:o.pendingContext=f,o=ss(i),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=rs(t,o,i),a!==null&&(ci(a,t,i),qo(a,t,i))}function qv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Kh(t,i){qv(t,i),(t=t.alternate)&&qv(t,i)}function jv(t){if(t.tag===13||t.tag===31){var i=Hs(t,67108864);i!==null&&ci(i,t,67108864),Kh(t,67108864)}}function Zv(t){if(t.tag===13||t.tag===31){var i=Ei();i=Ro(i);var a=Hs(t,i);a!==null&&ci(a,t,i),Kh(t,i)}}var Zc=!0;function JM(t,i,a,o){var f=B.T;B.T=null;var h=Y.p;try{Y.p=2,Qh(t,i,a,o)}finally{Y.p=h,B.T=f}}function $M(t,i,a,o){var f=B.T;B.T=null;var h=Y.p;try{Y.p=8,Qh(t,i,a,o)}finally{Y.p=h,B.T=f}}function Qh(t,i,a,o){if(Zc){var f=Jh(o);if(f===null)Fh(t,i,o,Kc,a),Qv(t,o);else if(t1(f,t,i,a,o))o.stopPropagation();else if(Qv(t,o),i&4&&-1<e1.indexOf(t)){for(;f!==null;){var h=xa(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=De(h.pendingLanes);if(M!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;M;){var W=1<<31-Ye(M);D.entanglements[1]|=W,M&=~W}oa(h),(Bt&6)===0&&(Nc=zt()+500,cl(0))}}break;case 31:case 13:D=Hs(h,2),D!==null&&ci(D,h,2),Oc(),Kh(h,2)}if(h=Jh(o),h===null&&Fh(t,i,o,Kc,a),h===f)break;f=h}f!==null&&o.stopPropagation()}else Fh(t,i,o,null,a)}}function Jh(t){return t=$u(t),$h(t)}var Kc=null;function $h(t){if(Kc=null,t=va(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=u(i),t!==null)return t;t=null}else if(a===31){if(t=d(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Kc=t,null}function Kv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case z:return 2;case w:return 8;case te:case ce:return 32;case xe:return 268435456;default:return 32}default:return 32}}var ed=!1,vs=null,xs=null,_s=null,gl=new Map,vl=new Map,ys=[],e1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qv(t,i){switch(t){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":gl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(i.pointerId)}}function xl(t,i,a,o,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[f]},i!==null&&(i=xa(i),i!==null&&jv(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function t1(t,i,a,o,f){switch(i){case"focusin":return vs=xl(vs,t,i,a,o,f),!0;case"dragenter":return xs=xl(xs,t,i,a,o,f),!0;case"mouseover":return _s=xl(_s,t,i,a,o,f),!0;case"pointerover":var h=f.pointerId;return gl.set(h,xl(gl.get(h)||null,t,i,a,o,f)),!0;case"gotpointercapture":return h=f.pointerId,vl.set(h,xl(vl.get(h)||null,t,i,a,o,f)),!0}return!1}function Jv(t){var i=va(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=u(a),i!==null){t.blockedOn=i,gr(t.priority,function(){Zv(a)});return}}else if(i===31){if(i=d(a),i!==null){t.blockedOn=i,gr(t.priority,function(){Zv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Jh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ju=o,a.target.dispatchEvent(o),Ju=null}else return i=xa(a),i!==null&&jv(i),t.blockedOn=a,!1;i.shift()}return!0}function $v(t,i,a){Qc(t)&&a.delete(i)}function n1(){ed=!1,vs!==null&&Qc(vs)&&(vs=null),xs!==null&&Qc(xs)&&(xs=null),_s!==null&&Qc(_s)&&(_s=null),gl.forEach($v),vl.forEach($v)}function Jc(t,i){t.blockedOn===i&&(t.blockedOn=null,ed||(ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,n1)))}var $c=null;function ex(t){$c!==t&&($c=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){$c===t&&($c=null);for(var i=0;i<t.length;i+=3){var a=t[i],o=t[i+1],f=t[i+2];if(typeof o!="function"){if($h(o||a)===null)continue;break}var h=xa(a);h!==null&&(t.splice(i,3),i-=3,Jf(h,{pending:!0,data:f,method:a.method,action:o},o,f))}}))}function qr(t){function i(W){return Jc(W,t)}vs!==null&&Jc(vs,t),xs!==null&&Jc(xs,t),_s!==null&&Jc(_s,t),gl.forEach(i),vl.forEach(i);for(var a=0;a<ys.length;a++){var o=ys[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ys.length&&(a=ys[0],a.blockedOn===null);)Jv(a),a.blockedOn===null&&ys.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var f=a[o],h=a[o+1],M=f[In]||null;if(typeof h=="function")M||ex(a);else if(M){var D=null;if(h&&h.hasAttribute("formAction")){if(f=h,M=h[In]||null)D=M.formAction;else if($h(f)!==null)continue}else D=M.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),ex(a)}}}function tx(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function td(t){this._internalRoot=t}eu.prototype.render=td.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=Ei();Wv(a,o,t,i,null,null)},eu.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Wv(t.current,2,null,t,null,null),Oc(),i[ii]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Lo();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ys.length&&i!==0&&i<ys[a].priority;a++);ys.splice(a,0,t),a===0&&Jv(t)}};var nx=e.version;if(nx!=="19.2.8")throw Error(s(527,nx,"19.2.8"));Y.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(i),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var i1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{_e=tu.inject(i1),ye=tu}catch{}}return yl.createRoot=function(t,i){if(!l(t))throw Error(s(299));var a=!1,o="",f=cg,h=ug,M=fg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=Yv(t,1,!1,null,null,a,o,null,f,h,M,tx),t[ii]=i.current,Ih(t),new td(i)},yl.hydrateRoot=function(t,i,a){if(!l(t))throw Error(s(299));var o=!1,f="",h=cg,M=ug,D=fg,W=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(W=a.formState)),i=Yv(t,1,!0,i,a??null,o,f,W,h,M,D,tx),i.context=Xv(null),a=i.current,o=Ei(),o=Ro(o),f=ss(o),f.callback=null,rs(a,f,o),a=o,i.current.lanes=a,qe(i,a),oa(i),t[ii]=i.current,Ih(t),new eu(i)},yl.version="19.2.8",yl}var hx;function d1(){if(hx)return ad.exports;hx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ad.exports=h1(),ad.exports}var p1=d1(),m1=C_();const Xp="185",g1=0,dx=1,v1=2,Nl=1,x1=2,Dl=3,Xa=0,ti=1,Qi=2,pa=0,go=1,Iu=2,px=3,mx=4,_1=5,ir=100,y1=101,S1=102,M1=103,b1=104,E1=200,T1=201,w1=202,A1=203,Qd=204,Jd=205,C1=206,R1=207,D1=208,L1=209,N1=210,U1=211,O1=212,P1=213,I1=214,$d=0,ep=1,tp=2,yo=3,np=4,ip=5,ap=6,sp=7,R_=0,F1=1,z1=2,ma=0,Wp=1,qp=2,jp=3,Vu=4,Zp=5,Kp=6,Qp=7,D_=300,lr=301,So=302,ld=303,cd=304,ku=306,Gn=1e3,Vn=1001,rp=1002,kn=1003,B1=1004,nu=1005,Kn=1006,ud=1007,sr=1008,Ai=1009,L_=1010,N_=1011,zl=1012,Jp=1013,ga=1014,ea=1015,di=1016,$p=1017,em=1018,Bl=1020,U_=35902,O_=35899,P_=1021,I_=1022,ta=1023,Wa=1026,rr=1027,tm=1028,nm=1029,cr=1030,im=1031,am=1033,Du=33776,Lu=33777,Nu=33778,Uu=33779,op=35840,lp=35841,cp=35842,up=35843,fp=36196,hp=37492,dp=37496,pp=37488,mp=37489,Fu=37490,gp=37491,vp=37808,xp=37809,_p=37810,yp=37811,Sp=37812,Mp=37813,bp=37814,Ep=37815,Tp=37816,wp=37817,Ap=37818,Cp=37819,Rp=37820,Dp=37821,Lp=36492,Np=36494,Up=36495,Op=36283,Pp=36284,zu=36285,Ip=36286,H1=3200,Fp=0,G1=1,ka="",fi="srgb",Bu="srgb-linear",Hu="linear",Gt="srgb",jr=7680,gx=519,V1=512,k1=513,Y1=514,sm=515,X1=516,W1=517,rm=518,q1=519,vx=35044,j1=35048,xx="300 es",da=2e3,Hl=2001;function Z1(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function K1(){const r=Gl("canvas");return r.style.display="block",r}const _x={};function yx(...r){const e="THREE."+r.shift();console.log(e,...r)}function F_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function dt(...r){r=F_(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Ut(...r){r=F_(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function vo(...r){const e=r.join(" ");e in _x||(_x[e]=!0,dt(...r))}function Q1(r,e,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const J1={[$d]:ep,[tp]:ap,[np]:sp,[yo]:ip,[ep]:$d,[ap]:tp,[sp]:np,[ip]:yo};class ur{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sx=1234567;const Ul=Math.PI/180,Vl=180/Math.PI;function To(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function Tt(r,e,n){return Math.max(e,Math.min(n,r))}function om(r,e){return(r%e+e)%e}function $1(r,e,n,s,l){return s+(r-e)*(l-s)/(n-e)}function eb(r,e,n){return r!==e?(n-r)/(e-r):0}function Ol(r,e,n){return(1-n)*r+n*e}function tb(r,e,n,s){return Ol(r,e,1-Math.exp(-n*s))}function nb(r,e=1){return e-Math.abs(om(r,e*2)-e)}function ib(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function ab(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function sb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function rb(r,e){return r+Math.random()*(e-r)}function ob(r){return r*(.5-Math.random())}function lb(r){r!==void 0&&(Sx=r);let e=Sx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cb(r){return r*Ul}function ub(r){return r*Vl}function fb(r){return(r&r-1)===0&&r!==0}function hb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function db(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pb(r,e,n,s,l){const c=Math.cos,u=Math.sin,d=c(n/2),m=u(n/2),p=c((e+s)/2),x=u((e+s)/2),g=c((e-s)/2),v=u((e-s)/2),_=c((s-e)/2),T=u((s-e)/2);switch(l){case"XYX":r.set(d*x,m*g,m*v,d*p);break;case"YZY":r.set(m*v,d*x,m*g,d*p);break;case"ZXZ":r.set(m*g,m*v,d*x,d*p);break;case"XZX":r.set(d*x,m*T,m*_,d*p);break;case"YXY":r.set(m*_,d*x,m*T,d*p);break;case"ZYZ":r.set(m*T,m*_,d*x,d*p);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ho(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ui={DEG2RAD:Ul,RAD2DEG:Vl,generateUUID:To,clamp:Tt,euclideanModulo:om,mapLinear:$1,inverseLerp:eb,lerp:Ol,damp:tb,pingpong:nb,smoothstep:ib,smootherstep:ab,randInt:sb,randFloat:rb,randFloatSpread:ob,seededRandom:lb,degToRad:cb,radToDeg:ub,isPowerOfTwo:fb,ceilPowerOfTwo:hb,floorPowerOfTwo:db,setQuaternionFromProperEuler:pb,normalize:$n,denormalize:ho},ym=class ym{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*s-u*l+e.x,this.y=c*l+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ym.prototype.isVector2=!0;let He=ym;class fr{constructor(e=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=l}static slerpFlat(e,n,s,l,c,u,d){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],v=c[u+0],_=c[u+1],T=c[u+2],R=c[u+3];if(g!==R||m!==v||p!==_||x!==T){let S=m*v+p*_+x*T+g*R;S<0&&(v=-v,_=-_,T=-T,R=-R,S=-S);let y=1-d;if(S<.9995){const L=Math.acos(S),P=Math.sin(L);y=Math.sin(y*L)/P,d=Math.sin(d*L)/P,m=m*y+v*d,p=p*y+_*d,x=x*y+T*d,g=g*y+R*d}else{m=m*y+v*d,p=p*y+_*d,x=x*y+T*d,g=g*y+R*d;const L=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=L,p*=L,x*=L,g*=L}}e[n]=m,e[n+1]=p,e[n+2]=x,e[n+3]=g}static multiplyQuaternionsFlat(e,n,s,l,c,u){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[u],v=c[u+1],_=c[u+2],T=c[u+3];return e[n]=d*T+x*g+m*_-p*v,e[n+1]=m*T+x*v+p*g-d*_,e[n+2]=p*T+x*_+d*v-m*g,e[n+3]=x*T-d*g-m*v-p*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,l){return this._x=e,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,l=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),g=d(c/2),v=m(s/2),_=m(l/2),T=m(c/2);switch(u){case"XYZ":this._x=v*x*g+p*_*T,this._y=p*_*g-v*x*T,this._z=p*x*T+v*_*g,this._w=p*x*g-v*_*T;break;case"YXZ":this._x=v*x*g+p*_*T,this._y=p*_*g-v*x*T,this._z=p*x*T-v*_*g,this._w=p*x*g+v*_*T;break;case"ZXY":this._x=v*x*g-p*_*T,this._y=p*_*g+v*x*T,this._z=p*x*T+v*_*g,this._w=p*x*g-v*_*T;break;case"ZYX":this._x=v*x*g-p*_*T,this._y=p*_*g+v*x*T,this._z=p*x*T-v*_*g,this._w=p*x*g+v*_*T;break;case"YZX":this._x=v*x*g+p*_*T,this._y=p*_*g+v*x*T,this._z=p*x*T-v*_*g,this._w=p*x*g-v*_*T;break;case"XZY":this._x=v*x*g-p*_*T,this._y=p*_*g-v*x*T,this._z=p*x*T+v*_*g,this._w=p*x*g+v*_*T;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],l=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],x=n[6],g=n[10],v=s+d+g;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(x-m)*_,this._y=(c-p)*_,this._z=(u-l)*_}else if(s>d&&s>g){const _=2*Math.sqrt(1+s-d-g);this._w=(x-m)/_,this._x=.25*_,this._y=(l+u)/_,this._z=(c+p)/_}else if(d>g){const _=2*Math.sqrt(1+d-s-g);this._w=(c-p)/_,this._x=(l+u)/_,this._y=.25*_,this._z=(m+x)/_}else{const _=2*Math.sqrt(1+g-s-d);this._w=(u-l)/_,this._x=(c+p)/_,this._y=(m+x)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,l=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,x=n._w;return this._x=s*x+u*d+l*p-c*m,this._y=l*x+u*m+c*d-s*p,this._z=c*x+u*p+s*m-l*d,this._w=u*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,n){let s=e._x,l=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,n=Math.sin(n*p)/x,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sm=class Sm{constructor(e=0,n=0,s=0){this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,l=this.z,c=e.elements,u=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,l=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*l-d*s),x=2*(d*n-c*l),g=2*(c*s-u*n);return this.x=n+m*p+u*g-d*x,this.y=s+m*x+d*p-c*g,this.z=l+m*g+c*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this.z=Tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this.z=Tt(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,l=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*u-s*m,this.z=s*d-l*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return n*n+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const l=Math.sin(n)*e;return this.x=l*Math.sin(s),this.y=Math.cos(n)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sm.prototype.isVector3=!0;let k=Sm;const fd=new k,Mx=new fr,Mm=class Mm{constructor(e,n,s,l,c,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,l,c,u,d,m,p)}set(e,n,s,l,c,u,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=n,x[4]=c,x[5]=m,x[6]=s,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,l=n.elements,c=this.elements,u=s[0],d=s[3],m=s[6],p=s[1],x=s[4],g=s[7],v=s[2],_=s[5],T=s[8],R=l[0],S=l[3],y=l[6],L=l[1],P=l[4],A=l[7],I=l[2],N=l[5],O=l[8];return c[0]=u*R+d*L+m*I,c[3]=u*S+d*P+m*N,c[6]=u*y+d*A+m*O,c[1]=p*R+x*L+g*I,c[4]=p*S+x*P+g*N,c[7]=p*y+x*A+g*O,c[2]=v*R+_*L+T*I,c[5]=v*S+_*P+T*N,c[8]=v*y+_*A+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return n*u*x-n*d*p-s*c*x+s*d*m+l*c*p-l*u*m}invert(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=x*u-d*p,v=d*m-x*c,_=p*c-u*m,T=n*g+s*v+l*_;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=g*R,e[1]=(l*p-x*s)*R,e[2]=(d*s-l*u)*R,e[3]=v*R,e[4]=(x*n-l*m)*R,e[5]=(l*c-d*n)*R,e[6]=_*R,e[7]=(s*m-p*n)*R,e[8]=(u*n-s*c)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,l,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*u+p*d)+u+e,-l*p,l*m,-l*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return vo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(e,n)),this}rotate(e){return vo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-e)),this}translate(e,n){return vo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mm.prototype.isMatrix3=!0;let vt=Mm;const hd=new vt,bx=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ex=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mb(){const r={enabled:!0,workingColorSpace:Bu,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Gt&&(l.r=Ya(l.r),l.g=Ya(l.g),l.b=Ya(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Gt&&(l.r=xo(l.r),l.g=xo(l.g),l.b=xo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Bu]:{primaries:e,whitePoint:s,transfer:Hu,toXYZ:bx,fromXYZ:Ex,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:s,transfer:Gt,toXYZ:bx,fromXYZ:Ex,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const Ct=mb();function Ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zr;class gb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Zr===void 0&&(Zr=Gl("canvas")),Zr.width=e.width,Zr.height=e.height;const l=Zr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Zr}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=Ya(c[u]/255)*255;return s.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ya(n[s]/255)*255):n[s]=Ya(n[s]);return{data:n,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vb=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=To(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,d=l.length;u<d;u++)l[u].isDataTexture?c.push(dd(l[u].image)):c.push(dd(l[u]))}else c=dd(l);s.url=c}return n||(e.images[this.uuid]=s),s}}function dd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let xb=0;const pd=new k;class Qn extends ur{constructor(e=Qn.DEFAULT_IMAGE,n=Qn.DEFAULT_MAPPING,s=Vn,l=Vn,c=Kn,u=sr,d=ta,m=Ai,p=Qn.DEFAULT_ANISOTROPY,x=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=To(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){dt(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=D_;Qn.DEFAULT_ANISOTROPY=1;const bm=class bm{constructor(e=0,n=0,s=0,l=1){this.x=e,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,l){return this.x=e,this.y=n,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,l=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*l+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*l+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*l+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*l+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],v=m[1],_=m[5],T=m[9],R=m[2],S=m[6],y=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-R)<.01&&Math.abs(T-S)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+R)<.1&&Math.abs(T+S)<.1&&Math.abs(p+_+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(p+1)/2,A=(_+1)/2,I=(y+1)/2,N=(x+v)/4,O=(g+R)/4,E=(T+S)/4;return P>A&&P>I?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=N/s,c=O/s):A>I?A<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),s=N/l,c=E/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=O/c,l=E/c),this.set(s,l,c,n),this}let L=Math.sqrt((S-T)*(S-T)+(g-R)*(g-R)+(v-x)*(v-x));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(g-R)/L,this.z=(v-x)/L,this.w=Math.acos((p+_+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this.z=Tt(this.z,e.z,n.z),this.w=Tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this.z=Tt(this.z,e,n),this.w=Tt(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bm.prototype.isVector4=!0;let on=bm;class _b extends ur{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n),this.textures=[];const l={width:e,height:n,depth:s.depth},c=new Qn(l),u=s.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new lm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends _b{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class z_ extends Qn{constructor(e=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends Qn{constructor(e=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gu=class Gu{constructor(e,n,s,l,c,u,d,m,p,x,g,v,_,T,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,l,c,u,d,m,p,x,g,v,_,T,R,S)}set(e,n,s,l,c,u,d,m,p,x,g,v,_,T,R,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=s,y[12]=l,y[1]=c,y[5]=u,y[9]=d,y[13]=m,y[2]=p,y[6]=x,y[10]=g,y[14]=v,y[3]=_,y[7]=T,y[11]=R,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,s=e.elements,l=1/Kr.setFromMatrixColumn(e,0).length(),c=1/Kr.setFromMatrixColumn(e,1).length(),u=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,l=e.y,c=e.z,u=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=u*x,_=u*g,T=d*x,R=d*g;n[0]=m*x,n[4]=-m*g,n[8]=p,n[1]=_+T*p,n[5]=v-R*p,n[9]=-d*m,n[2]=R-v*p,n[6]=T+_*p,n[10]=u*m}else if(e.order==="YXZ"){const v=m*x,_=m*g,T=p*x,R=p*g;n[0]=v+R*d,n[4]=T*d-_,n[8]=u*p,n[1]=u*g,n[5]=u*x,n[9]=-d,n[2]=_*d-T,n[6]=R+v*d,n[10]=u*m}else if(e.order==="ZXY"){const v=m*x,_=m*g,T=p*x,R=p*g;n[0]=v-R*d,n[4]=-u*g,n[8]=T+_*d,n[1]=_+T*d,n[5]=u*x,n[9]=R-v*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const v=u*x,_=u*g,T=d*x,R=d*g;n[0]=m*x,n[4]=T*p-_,n[8]=v*p+R,n[1]=m*g,n[5]=R*p+v,n[9]=_*p-T,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const v=u*m,_=u*p,T=d*m,R=d*p;n[0]=m*x,n[4]=R-v*g,n[8]=T*g+_,n[1]=g,n[5]=u*x,n[9]=-d*x,n[2]=-p*x,n[6]=_*g+T,n[10]=v-R*g}else if(e.order==="XZY"){const v=u*m,_=u*p,T=d*m,R=d*p;n[0]=m*x,n[4]=-g,n[8]=p*x,n[1]=v*g+R,n[5]=u*x,n[9]=_*g-T,n[2]=T*g-_,n[6]=d*x,n[10]=R*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sb,e,Mb)}lookAt(e,n,s){const l=this.elements;return Ti.subVectors(e,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ms.crossVectors(s,Ti),Ms.lengthSq()===0&&(Math.abs(s.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ms.crossVectors(s,Ti)),Ms.normalize(),iu.crossVectors(Ti,Ms),l[0]=Ms.x,l[4]=iu.x,l[8]=Ti.x,l[1]=Ms.y,l[5]=iu.y,l[9]=Ti.y,l[2]=Ms.z,l[6]=iu.z,l[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,l=n.elements,c=this.elements,u=s[0],d=s[4],m=s[8],p=s[12],x=s[1],g=s[5],v=s[9],_=s[13],T=s[2],R=s[6],S=s[10],y=s[14],L=s[3],P=s[7],A=s[11],I=s[15],N=l[0],O=l[4],E=l[8],U=l[12],X=l[1],V=l[5],q=l[9],ue=l[13],de=l[2],Q=l[6],B=l[10],Y=l[14],ne=l[3],me=l[7],G=l[11],b=l[15];return c[0]=u*N+d*X+m*de+p*ne,c[4]=u*O+d*V+m*Q+p*me,c[8]=u*E+d*q+m*B+p*G,c[12]=u*U+d*ue+m*Y+p*b,c[1]=x*N+g*X+v*de+_*ne,c[5]=x*O+g*V+v*Q+_*me,c[9]=x*E+g*q+v*B+_*G,c[13]=x*U+g*ue+v*Y+_*b,c[2]=T*N+R*X+S*de+y*ne,c[6]=T*O+R*V+S*Q+y*me,c[10]=T*E+R*q+S*B+y*G,c[14]=T*U+R*ue+S*Y+y*b,c[3]=L*N+P*X+A*de+I*ne,c[7]=L*O+P*V+A*Q+I*me,c[11]=L*E+P*q+A*B+I*G,c[15]=L*U+P*ue+A*Y+I*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],l=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],x=e[2],g=e[6],v=e[10],_=e[14],T=e[3],R=e[7],S=e[11],y=e[15],L=m*_-p*v,P=d*_-p*g,A=d*v-m*g,I=u*_-p*x,N=u*v-m*x,O=u*g-d*x;return n*(R*L-S*P+y*A)-s*(T*L-S*I+y*N)+l*(T*P-R*I+y*O)-c*(T*A-R*N+S*O)}determinantAffine(){const e=this.elements,n=e[0],s=e[4],l=e[8],c=e[1],u=e[5],d=e[9],m=e[2],p=e[6],x=e[10];return n*(u*x-d*p)-s*(c*x-d*m)+l*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=e[9],v=e[10],_=e[11],T=e[12],R=e[13],S=e[14],y=e[15],L=n*d-s*u,P=n*m-l*u,A=n*p-c*u,I=s*m-l*d,N=s*p-c*d,O=l*p-c*m,E=x*R-g*T,U=x*S-v*T,X=x*y-_*T,V=g*S-v*R,q=g*y-_*R,ue=v*y-_*S,de=L*ue-P*q+A*V+I*X-N*U+O*E;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/de;return e[0]=(d*ue-m*q+p*V)*Q,e[1]=(l*q-s*ue-c*V)*Q,e[2]=(R*O-S*N+y*I)*Q,e[3]=(v*N-g*O-_*I)*Q,e[4]=(m*X-u*ue-p*U)*Q,e[5]=(n*ue-l*X+c*U)*Q,e[6]=(S*A-T*O-y*P)*Q,e[7]=(x*O-v*A+_*P)*Q,e[8]=(u*q-d*X+p*E)*Q,e[9]=(s*X-n*q-c*E)*Q,e[10]=(T*N-R*A+y*L)*Q,e[11]=(g*A-x*N-_*L)*Q,e[12]=(d*U-u*V-m*E)*Q,e[13]=(n*V-s*U+l*E)*Q,e[14]=(R*P-T*I-S*L)*Q,e[15]=(x*I-g*P+v*L)*Q,this}scale(e){const n=this.elements,s=e.x,l=e.y,c=e.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,u=e.x,d=e.y,m=e.z,p=c*u,x=c*d;return this.set(p*u+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*u,0,p*m-l*d,x*m+l*u,c*m*m+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,l,c,u){return this.set(1,s,c,0,e,1,u,0,n,l,1,0,0,0,0,1),this}compose(e,n,s){const l=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,x=u+u,g=d+d,v=c*p,_=c*x,T=c*g,R=u*x,S=u*g,y=d*g,L=m*p,P=m*x,A=m*g,I=s.x,N=s.y,O=s.z;return l[0]=(1-(R+y))*I,l[1]=(_+A)*I,l[2]=(T-P)*I,l[3]=0,l[4]=(_-A)*N,l[5]=(1-(v+y))*N,l[6]=(S+L)*N,l[7]=0,l[8]=(T+P)*O,l[9]=(S-L)*O,l[10]=(1-(v+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),n.identity(),this;let u=Kr.set(l[0],l[1],l[2]).length();const d=Kr.set(l[4],l[5],l[6]).length(),m=Kr.set(l[8],l[9],l[10]).length();c<0&&(u=-u),qi.copy(this);const p=1/u,x=1/d,g=1/m;return qi.elements[0]*=p,qi.elements[1]*=p,qi.elements[2]*=p,qi.elements[4]*=x,qi.elements[5]*=x,qi.elements[6]*=x,qi.elements[8]*=g,qi.elements[9]*=g,qi.elements[10]*=g,n.setFromRotationMatrix(qi),s.x=u,s.y=d,s.z=m,this}makePerspective(e,n,s,l,c,u,d=da,m=!1){const p=this.elements,x=2*c/(n-e),g=2*c/(s-l),v=(n+e)/(n-e),_=(s+l)/(s-l);let T,R;if(m)T=c/(u-c),R=u*c/(u-c);else if(d===da)T=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(d===Hl)T=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,s,l,c,u,d=da,m=!1){const p=this.elements,x=2/(n-e),g=2/(s-l),v=-(n+e)/(n-e),_=-(s+l)/(s-l);let T,R;if(m)T=1/(u-c),R=u/(u-c);else if(d===da)T=-2/(u-c),R=-(u+c)/(u-c);else if(d===Hl)T=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=_,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}};Gu.prototype.isMatrix4=!0;let Ft=Gu;const Kr=new k,qi=new Ft,Sb=new k(0,0,0),Mb=new k(1,1,1),Ms=new k,iu=new k,Ti=new k,Tx=new Ft,wx=new fr;class qa{constructor(e=0,n=0,s=0,l=qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,l=this._order){return this._x=e,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const l=e.elements,c=l[0],u=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],v=l[6],_=l[10];switch(n){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,_),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,_),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return Tx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tx,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wx.setFromEuler(this),this.setFromQuaternion(wx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qa.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bb=0;const Ax=new k,Qr=new fr,Ia=new Ft,au=new k,Sl=new k,Eb=new k,Tb=new fr,Cx=new k(1,0,0),Rx=new k(0,1,0),Dx=new k(0,0,1),Lx={type:"added"},wb={type:"removed"},Jr={type:"childadded",child:null},md={type:"childremoved",child:null};class On extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new k,n=new qa,s=new fr,l=new k(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ft},normalMatrix:{value:new vt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Cx,e)}rotateY(e){return this.rotateOnAxis(Rx,e)}rotateZ(e){return this.rotateOnAxis(Dx,e)}translateOnAxis(e,n){return Ax.copy(e).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cx,e)}translateY(e){return this.translateOnAxis(Rx,e)}translateZ(e){return this.translateOnAxis(Dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?au.copy(e):au.set(e,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(Sl,au,this.up):Ia.lookAt(au,Sl,this.up),this.quaternion.setFromRotationMatrix(Ia),l&&(Ia.extractRotation(l.matrixWorld),Qr.setFromRotationMatrix(Ia),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lx),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wb),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lx),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*s-c[8]*l,c[13]+=s-c[1]*n-c[5]*s-c[9]*l,c[14]+=l-c[2]*n-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),n===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,s)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),x=u(e.images),g=u(e.shapes),v=u(e.skeletons),_=u(e.animations),T=u(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),_.length>0&&(s.animations=_),T.length>0&&(s.nodes=T)}return s.object=l,s;function u(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}On.DEFAULT_UP=new k(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ln extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let l=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const S=n.getJointPose(R,s),y=this._getHandJoint(p,R);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=x.position.distanceTo(g.position),_=.02,T=.005;p.inputState.pinching&&v>_+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=_-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(l=n.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Ln;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},su={h:0,s:0,l:0};function vd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class ht{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,s,l=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=s,Ct.colorSpaceToWorking(this,l),this}setHSL(e,n,s,l=Ct.workingColorSpace){if(e=om(e,1),n=Tt(n,0,1),s=Tt(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=vd(u,c,e+1/3),this.g=vd(u,c,e),this.b=vd(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,n=fi){function s(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=l[1],d=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:dt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fi){const s=H_[e.toLowerCase()];return s!==void 0?this.setHex(s,n):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ct.workingToColorSpace(qn.copy(this),e),Math.round(Tt(qn.r*255,0,255))*65536+Math.round(Tt(qn.g*255,0,255))*256+Math.round(Tt(qn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(qn.copy(this),n);const s=qn.r,l=qn.g,c=qn.b,u=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+u)/2;if(d===u)m=0,p=0;else{const g=u-d;switch(p=x<=.5?g/(u+d):g/(2-u-d),u){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=fi){Ct.workingToColorSpace(qn.copy(this),e);const n=qn.r,s=qn.g,l=qn.b;return e!==fi?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,n,s){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+n,bs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(bs),e.getHSL(su);const s=Ol(bs.h,su.h,n),l=Ol(bs.s,su.s,n),c=Ol(bs.l,su.l,n);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new ht;ht.NAMES=H_;class cm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=n}clone(){return new cm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nx extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qa,this.environmentIntensity=1,this.environmentRotation=new qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ji=new k,Fa=new k,xd=new k,za=new k,$r=new k,eo=new k,Ux=new k,_d=new k,yd=new k,Sd=new k,Md=new on,bd=new on,Ed=new on;class Ji{constructor(e=new k,n=new k,s=new k){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,l){l.subVectors(s,n),ji.subVectors(e,n),l.cross(ji);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,s,l,c){ji.subVectors(l,n),Fa.subVectors(s,n),xd.subVectors(e,n);const u=ji.dot(ji),d=ji.dot(Fa),m=ji.dot(xd),p=Fa.dot(Fa),x=Fa.dot(xd),g=u*p-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,_=(p*m-d*x)*v,T=(u*x-d*m)*v;return c.set(1-_-T,T,_)}static containsPoint(e,n,s,l){return this.getBarycoord(e,n,s,l,za)===null?!1:za.x>=0&&za.y>=0&&za.x+za.y<=1}static getInterpolation(e,n,s,l,c,u,d,m){return this.getBarycoord(e,n,s,l,za)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,za.x),m.addScaledVector(u,za.y),m.addScaledVector(d,za.z),m)}static getInterpolatedAttribute(e,n,s,l,c,u){return Md.setScalar(0),bd.setScalar(0),Ed.setScalar(0),Md.fromBufferAttribute(e,n),bd.fromBufferAttribute(e,s),Ed.fromBufferAttribute(e,l),u.setScalar(0),u.addScaledVector(Md,c.x),u.addScaledVector(bd,c.y),u.addScaledVector(Ed,c.z),u}static isFrontFacing(e,n,s,l){return ji.subVectors(s,n),Fa.subVectors(e,n),ji.cross(Fa).dot(l)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,l){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,s,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Fa.subVectors(this.a,this.b),ji.cross(Fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ji.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,l,c){return Ji.getInterpolation(e,this.a,this.b,this.c,n,s,l,c)}containsPoint(e){return Ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,l=this.b,c=this.c;let u,d;$r.subVectors(l,s),eo.subVectors(c,s),_d.subVectors(e,s);const m=$r.dot(_d),p=eo.dot(_d);if(m<=0&&p<=0)return n.copy(s);yd.subVectors(e,l);const x=$r.dot(yd),g=eo.dot(yd);if(x>=0&&g<=x)return n.copy(l);const v=m*g-x*p;if(v<=0&&m>=0&&x<=0)return u=m/(m-x),n.copy(s).addScaledVector($r,u);Sd.subVectors(e,c);const _=$r.dot(Sd),T=eo.dot(Sd);if(T>=0&&_<=T)return n.copy(c);const R=_*p-m*T;if(R<=0&&p>=0&&T<=0)return d=p/(p-T),n.copy(s).addScaledVector(eo,d);const S=x*T-_*g;if(S<=0&&g-x>=0&&_-T>=0)return Ux.subVectors(c,l),d=(g-x)/(g-x+(_-T)),n.copy(l).addScaledVector(Ux,d);const y=1/(S+R+v);return u=R*y,d=v*y,n.copy(s).addScaledVector($r,u).addScaledVector(eo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hr{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Zi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Zi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Zi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Zi):Zi.fromBufferAttribute(c,u),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ru.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ru.copy(s.boundingBox)),ru.applyMatrix4(e.matrixWorld),this.union(ru)}const l=e.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),ou.subVectors(this.max,Ml),to.subVectors(e.a,Ml),no.subVectors(e.b,Ml),io.subVectors(e.c,Ml),Es.subVectors(no,to),Ts.subVectors(io,no),$s.subVectors(to,io);let n=[0,-Es.z,Es.y,0,-Ts.z,Ts.y,0,-$s.z,$s.y,Es.z,0,-Es.x,Ts.z,0,-Ts.x,$s.z,0,-$s.x,-Es.y,Es.x,0,-Ts.y,Ts.x,0,-$s.y,$s.x,0];return!Td(n,to,no,io,ou)||(n=[1,0,0,0,1,0,0,0,1],!Td(n,to,no,io,ou))?!1:(lu.crossVectors(Es,Ts),n=[lu.x,lu.y,lu.z],Td(n,to,no,io,ou))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ba=[new k,new k,new k,new k,new k,new k,new k,new k],Zi=new k,ru=new hr,to=new k,no=new k,io=new k,Es=new k,Ts=new k,$s=new k,Ml=new k,ou=new k,lu=new k,er=new k;function Td(r,e,n,s,l){for(let c=0,u=r.length-3;c<=u;c+=3){er.fromArray(r,c);const d=l.x*Math.abs(er.x)+l.y*Math.abs(er.y)+l.z*Math.abs(er.z),m=e.dot(er),p=n.dot(er),x=s.dot(er);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const En=new k,cu=new He;let Cb=0;class Ci extends ur{constructor(e,n,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=vx,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)cu.fromBufferAttribute(this,n),cu.applyMatrix3(e),this.setXY(n,cu.x,cu.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)En.fromBufferAttribute(this,n),En.applyMatrix3(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(e),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)En.fromBufferAttribute(this,n),En.transformDirection(e),this.setXYZ(n,En.x,En.y,En.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=ho(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=$n(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),s=$n(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,l){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,n,s,l,c){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),s=$n(s,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class G_ extends Ci{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class V_ extends Ci{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Zt extends Ci{constructor(e,n,s){super(new Float32Array(e),n,s)}}const Rb=new hr,bl=new k,wd=new k;class dr{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):Rb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,u=e.length;c<u;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const n=bl.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(bl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(wd)),this.expandByPoint(bl.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Db=0;const Fi=new Ft,Ad=new On,ao=new k,wi=new hr,El=new hr,Dn=new k;class Pn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z1(e)?V_:G_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new vt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,n,s){return Fi.makeTranslation(e,n,s),this.applyMatrix4(Fi),this}scale(e,n,s){return Fi.makeScale(e,n,s),this.applyMatrix4(Fi),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const u=e[l];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zt(s,3))}else{const s=Math.min(e.length,n.count);for(let l=0;l<s;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];wi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const s=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];El.setFromBufferAttribute(d),this.morphTargetsRelative?(Dn.addVectors(wi.min,El.min),wi.expandByPoint(Dn),Dn.addVectors(wi.max,El.max),wi.expandByPoint(Dn)):(wi.expandByPoint(El.min),wi.expandByPoint(El.max))}wi.getCenter(s);let l=0;for(let c=0,u=e.count;c<u;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Dn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Dn.fromBufferAttribute(d,p),m&&(ao.fromBufferAttribute(e,p),Dn.add(ao)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==s.count)&&(u=new Ci(new Float32Array(4*s.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let E=0;E<s.count;E++)d[E]=new k,m[E]=new k;const p=new k,x=new k,g=new k,v=new He,_=new He,T=new He,R=new k,S=new k;function y(E,U,X){p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,U),g.fromBufferAttribute(s,X),v.fromBufferAttribute(c,E),_.fromBufferAttribute(c,U),T.fromBufferAttribute(c,X),x.sub(p),g.sub(p),_.sub(v),T.sub(v);const V=1/(_.x*T.y-T.x*_.y);isFinite(V)&&(R.copy(x).multiplyScalar(T.y).addScaledVector(g,-_.y).multiplyScalar(V),S.copy(g).multiplyScalar(_.x).addScaledVector(x,-T.x).multiplyScalar(V),d[E].add(R),d[U].add(R),d[X].add(R),m[E].add(S),m[U].add(S),m[X].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let E=0,U=L.length;E<U;++E){const X=L[E],V=X.start,q=X.count;for(let ue=V,de=V+q;ue<de;ue+=3)y(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const P=new k,A=new k,I=new k,N=new k;function O(E){I.fromBufferAttribute(l,E),N.copy(I);const U=d[E];P.copy(U),P.sub(I.multiplyScalar(I.dot(U))).normalize(),A.crossVectors(N,U);const V=A.dot(m[E])<0?-1:1;u.setXYZW(E,P.x,P.y,P.z,V)}for(let E=0,U=L.length;E<U;++E){const X=L[E],V=X.start,q=X.count;for(let ue=V,de=V+q;ue<de;ue+=3)O(e.getX(ue+0)),O(e.getX(ue+1)),O(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==n.count)s=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,_=s.count;v<_;v++)s.setXYZ(v,0,0,0);const l=new k,c=new k,u=new k,d=new k,m=new k,p=new k,x=new k,g=new k;if(e)for(let v=0,_=e.count;v<_;v+=3){const T=e.getX(v+0),R=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),x.subVectors(u,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),d.add(x),m.add(x),p.add(x),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,_=n.count;v<_;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),x.subVectors(u,c),g.subVectors(l,c),x.cross(g),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Dn.fromBufferAttribute(e,n),Dn.normalize(),e.setXYZ(n,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,g=d.normalized,v=new p.constructor(m.length*x);let _=0,T=0;for(let R=0,S=m.length;R<S;R++){d.isInterleavedBufferAttribute?_=m[R]*d.data.stride+d.offset:_=m[R]*x;for(let y=0;y<x;y++)v[T++]=p[_++]}return new Ci(v,x,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,g=p.length;x<g;x++){const v=p[x],_=e(v,s);m.push(_)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,v=p.length;g<v;g++){const _=p[g];x.push(_.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(n))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let v=0,_=g.length;v<_;v++)x.push(g[v].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Lb=0;class wo extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=To(),this.name="",this.type="Material",this.blending=go,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){dt(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qd&&(s.blendSrc=this.blendSrc),this.blendDst!==Jd&&(s.blendDst=this.blendDst),this.blendEquation!==ir&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=l(e.textures),u=l(e.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new He().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ha=new k,Cd=new k,uu=new k,ws=new k,Rd=new k,fu=new k,Dd=new k;class k_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ha)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ha.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ha.copy(this.origin).addScaledVector(this.direction,n),Ha.distanceToSquared(e))}distanceSqToSegment(e,n,s,l){Cd.copy(e).add(n).multiplyScalar(.5),uu.copy(n).sub(e).normalize(),ws.copy(this.origin).sub(Cd);const c=e.distanceTo(n)*.5,u=-this.direction.dot(uu),d=ws.dot(this.direction),m=-ws.dot(uu),p=ws.lengthSq(),x=Math.abs(1-u*u);let g,v,_,T;if(x>0)if(g=u*m-d,v=u*d-m,T=c*x,g>=0)if(v>=-T)if(v<=T){const R=1/x;g*=R,v*=R,_=g*(g+u*v+2*d)+v*(u*g+v+2*m)+p}else v=c,g=Math.max(0,-(u*v+d)),_=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(u*v+d)),_=-g*g+v*(v+2*m)+p;else v<=-T?(g=Math.max(0,-(-u*c+d)),v=g>0?-c:Math.min(Math.max(-c,-m),c),_=-g*g+v*(v+2*m)+p):v<=T?(g=0,v=Math.min(Math.max(-c,-m),c),_=v*(v+2*m)+p):(g=Math.max(0,-(u*c+d)),v=g>0?c:Math.min(Math.max(-c,-m),c),_=-g*g+v*(v+2*m)+p);else v=u>0?-c:c,g=Math.max(0,-(u*v+d)),_=-g*g+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Cd).addScaledVector(uu,v),_}intersectSphere(e,n){Ha.subVectors(e.center,this.origin);const s=Ha.dot(this.direction),l=Ha.dot(Ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const u=Math.sqrt(c-l),d=s-u,m=s+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,l,c,u,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),x>=0?(c=(e.min.y-v.y)*x,u=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,u=(e.min.y-v.y)*x),s>u||c>l||((c>s||isNaN(s))&&(s=c),(u<l||isNaN(l))&&(l=u),g>=0?(d=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(e){return this.intersectBox(e,Ha)!==null}intersectTriangle(e,n,s,l,c){Rd.subVectors(n,e),fu.subVectors(s,e),Dd.crossVectors(Rd,fu);let u=this.direction.dot(Dd),d;if(u>0){if(l)return null;d=1}else if(u<0)d=-1,u=-u;else return null;ws.subVectors(this.origin,e);const m=d*this.direction.dot(fu.crossVectors(ws,fu));if(m<0)return null;const p=d*this.direction.dot(Rd.cross(ws));if(p<0||m+p>u)return null;const x=-d*ws.dot(Dd);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ds extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qa,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ox=new Ft,tr=new k_,hu=new dr,Px=new k,du=new k,pu=new k,mu=new k,Ld=new k,gu=new k,Ix=new k,vu=new k;class lt extends On{constructor(e=new Pn,n=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){gu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],g=c[m];x!==0&&(Ld.fromBufferAttribute(g,e),u?gu.addScaledVector(Ld,x):gu.addScaledVector(Ld.sub(n),x))}n.add(gu)}return n}raycast(e,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hu.copy(s.boundingSphere),hu.applyMatrix4(c),tr.copy(e.ray).recast(e.near),!(hu.containsPoint(tr.origin)===!1&&(tr.intersectSphere(hu,Px)===null||tr.origin.distanceToSquared(Px)>(e.far-e.near)**2))&&(Ox.copy(c).invert(),tr.copy(e.ray).applyMatrix4(Ox),!(s.boundingBox!==null&&tr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,s){let l;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,_=c.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,R=v.length;T<R;T++){const S=v[T],y=u[S.materialIndex],L=Math.max(S.start,_.start),P=Math.min(d.count,Math.min(S.start+S.count,_.start+_.count));for(let A=L,I=P;A<I;A+=3){const N=d.getX(A),O=d.getX(A+1),E=d.getX(A+2);l=xu(this,y,e,s,p,x,g,N,O,E),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const T=Math.max(0,_.start),R=Math.min(d.count,_.start+_.count);for(let S=T,y=R;S<y;S+=3){const L=d.getX(S),P=d.getX(S+1),A=d.getX(S+2);l=xu(this,u,e,s,p,x,g,L,P,A),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(u))for(let T=0,R=v.length;T<R;T++){const S=v[T],y=u[S.materialIndex],L=Math.max(S.start,_.start),P=Math.min(m.count,Math.min(S.start+S.count,_.start+_.count));for(let A=L,I=P;A<I;A+=3){const N=A,O=A+1,E=A+2;l=xu(this,y,e,s,p,x,g,N,O,E),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const T=Math.max(0,_.start),R=Math.min(m.count,_.start+_.count);for(let S=T,y=R;S<y;S+=3){const L=S,P=S+1,A=S+2;l=xu(this,u,e,s,p,x,g,L,P,A),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function Nb(r,e,n,s,l,c,u,d){let m;if(e.side===ti?m=s.intersectTriangle(u,c,l,!0,d):m=s.intersectTriangle(l,c,u,e.side===Xa,d),m===null)return null;vu.copy(d),vu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(vu);return p<n.near||p>n.far?null:{distance:p,point:vu.clone(),object:r}}function xu(r,e,n,s,l,c,u,d,m,p){r.getVertexPosition(d,du),r.getVertexPosition(m,pu),r.getVertexPosition(p,mu);const x=Nb(r,e,n,s,du,pu,mu,Ix);if(x){const g=new k;Ji.getBarycoord(Ix,du,pu,mu,g),l&&(x.uv=Ji.getInterpolatedAttribute(l,d,m,p,g,new He)),c&&(x.uv1=Ji.getInterpolatedAttribute(c,d,m,p,g,new He)),u&&(x.normal=Ji.getInterpolatedAttribute(u,d,m,p,g,new k),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new k,materialIndex:0};Ji.getNormal(du,pu,mu,v.normal),x.face=v,x.barycoord=g}return x}class Y_ extends Qn{constructor(e=null,n=1,s=1,l,c,u,d,m,p=kn,x=kn,g,v){super(null,u,d,m,p,x,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fx extends Ci{constructor(e,n,s,l=1){super(e,n,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new Ft,zx=new Ft,_u=[],Bx=new hr,Ub=new Ft,Tl=new lt,wl=new dr;class Ob extends lt{constructor(e,n,s){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Fx(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,Ub)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<n;s++)this.getMatrixAt(s,so),Bx.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Bx)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<n;s++)this.getMatrixAt(s,so),wl.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(wl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const s=n.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,u=e*c+1;for(let d=0;d<s.length;d++)s[d]=l[u+d]}raycast(e,n){const s=this.matrixWorld,l=this.count;if(Tl.geometry=this.geometry,Tl.material=this.material,Tl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(s),e.ray.intersectsSphere(wl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,so),zx.multiplyMatrices(s,so),Tl.matrixWorld=zx,Tl.raycast(e,_u);for(let u=0,d=_u.length;u<d;u++){const m=_u[u];m.instanceId=c,m.object=this,n.push(m)}_u.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Fx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const s=n.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Y_(new Float32Array(l*this.count),l,this.count,tm,ea));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<s.length;p++)u+=s[p];const d=this.geometry.morphTargetsRelative?1:1-u,m=l*e;return c[m]=d,c.set(s,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Nd=new k,Pb=new k,Ib=new vt;class Rs{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,l){return this.normal.set(e,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const l=Nd.subVectors(s,n).cross(Pb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,s=!0){const l=e.delta(Nd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(l,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Ib.getNormalMatrix(e),l=this.coplanarPoint(Nd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new dr,Fb=new He(.5,.5),yu=new k;class Yu{constructor(e=new Rs,n=new Rs,s=new Rs,l=new Rs,c=new Rs,u=new Rs){this.planes=[e,n,s,l,c,u]}set(e,n,s,l,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=da,s=!1){const l=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],x=c[4],g=c[5],v=c[6],_=c[7],T=c[8],R=c[9],S=c[10],y=c[11],L=c[12],P=c[13],A=c[14],I=c[15];if(l[0].setComponents(p-u,_-x,y-T,I-L).normalize(),l[1].setComponents(p+u,_+x,y+T,I+L).normalize(),l[2].setComponents(p+d,_+g,y+R,I+P).normalize(),l[3].setComponents(p-d,_-g,y-R,I-P).normalize(),s)l[4].setComponents(m,v,S,A).normalize(),l[5].setComponents(p-m,_-v,y-S,I-A).normalize();else if(l[4].setComponents(p-m,_-v,y-S,I-A).normalize(),n===da)l[5].setComponents(p+m,_+v,y+S,I+A).normalize();else if(n===Hl)l[5].setComponents(m,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);const n=Fb.distanceTo(e.center);return nr.radius=.7071067811865476+n,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(yu.x=l.normal.x>0?e.max.x:e.min.x,yu.y=l.normal.y>0?e.max.y:e.min.y,yu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(yu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X_ extends wo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hx=new Ft,zp=new k_,Su=new dr,Mu=new k;class zb extends On{constructor(e=new Pn,n=new X_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Su.copy(s.boundingSphere),Su.applyMatrix4(l),Su.radius+=c,e.ray.intersectsSphere(Su)===!1)return;Hx.copy(l).invert(),zp.copy(e.ray).applyMatrix4(Hx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const v=Math.max(0,u.start),_=Math.min(p.count,u.start+u.count);for(let T=v,R=_;T<R;T++){const S=p.getX(T);Mu.fromBufferAttribute(g,S),Gx(Mu,S,m,l,e,n,this)}}else{const v=Math.max(0,u.start),_=Math.min(g.count,u.start+u.count);for(let T=v,R=_;T<R;T++)Mu.fromBufferAttribute(g,T),Gx(Mu,T,m,l,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gx(r,e,n,s,l,c,u){const d=zp.distanceSqToPoint(r);if(d<n){const m=new k;zp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class W_ extends Qn{constructor(e=[],n=lr,s,l,c,u,d,m,p,x){super(e,n,s,l,c,u,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mo extends Qn{constructor(e,n,s=ga,l,c,u,d=kn,m=kn,p,x=Wa,g=1){if(x!==Wa&&x!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,l,c,u,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bb extends Mo{constructor(e,n=ga,s=lr,l,c,u=kn,d=kn,m,p=Wa){const x={width:e,height:e,depth:1},g=[x,x,x,x,x,x];super(e,e,n,s,l,c,u,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q_ extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zn extends Pn{constructor(e=1,n=1,s=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:u};const d=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],x=[],g=[];let v=0,_=0;T("z","y","x",-1,-1,s,n,e,u,c,0),T("z","y","x",1,-1,s,n,-e,u,c,1),T("x","z","y",1,1,e,s,n,l,u,2),T("x","z","y",1,-1,e,s,-n,l,u,3),T("x","y","z",1,-1,e,n,s,l,c,4),T("x","y","z",-1,-1,e,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2));function T(R,S,y,L,P,A,I,N,O,E,U){const X=A/O,V=I/E,q=A/2,ue=I/2,de=N/2,Q=O+1,B=E+1;let Y=0,ne=0;const me=new k;for(let G=0;G<B;G++){const b=G*V-ue;for(let H=0;H<Q;H++){const ie=H*X-q;me[R]=ie*L,me[S]=b*P,me[y]=de,p.push(me.x,me.y,me.z),me[R]=0,me[S]=0,me[y]=N>0?1:-1,x.push(me.x,me.y,me.z),g.push(H/O),g.push(1-G/E),Y+=1}}for(let G=0;G<E;G++)for(let b=0;b<O;b++){const H=v+b+Q*G,ie=v+b+Q*(G+1),ve=v+(b+1)+Q*(G+1),Ee=v+(b+1)+Q*G;m.push(H,ie,Ee),m.push(ie,ve,Ee),ne+=6}d.addGroup(_,ne,U),_+=ne,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class or extends Pn{constructor(e=1,n=1,s=1,l=32,c=1,u=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:s,radialSegments:l,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const x=[],g=[],v=[],_=[];let T=0;const R=[],S=s/2;let y=0;L(),u===!1&&(e>0&&P(!0),n>0&&P(!1)),this.setIndex(x),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(_,2));function L(){const A=new k,I=new k;let N=0;const O=(n-e)/s;for(let E=0;E<=c;E++){const U=[],X=E/c,V=X*(n-e)+e;for(let q=0;q<=l;q++){const ue=q/l,de=ue*m+d,Q=Math.sin(de),B=Math.cos(de);I.x=V*Q,I.y=-X*s+S,I.z=V*B,g.push(I.x,I.y,I.z),A.set(Q,O,B).normalize(),v.push(A.x,A.y,A.z),_.push(ue,1-X),U.push(T++)}R.push(U)}for(let E=0;E<l;E++)for(let U=0;U<c;U++){const X=R[U][E],V=R[U+1][E],q=R[U+1][E+1],ue=R[U][E+1];(e>0||U!==0)&&(x.push(X,V,ue),N+=3),(n>0||U!==c-1)&&(x.push(V,q,ue),N+=3)}p.addGroup(y,N,0),y+=N}function P(A){const I=T,N=new He,O=new k;let E=0;const U=A===!0?e:n,X=A===!0?1:-1;for(let q=1;q<=l;q++)g.push(0,S*X,0),v.push(0,X,0),_.push(.5,.5),T++;const V=T;for(let q=0;q<=l;q++){const de=q/l*m+d,Q=Math.cos(de),B=Math.sin(de);O.x=U*B,O.y=S*X,O.z=U*Q,g.push(O.x,O.y,O.z),v.push(0,X,0),N.x=Q*.5+.5,N.y=B*.5*X+.5,_.push(N.x,N.y),T++}for(let q=0;q<l;q++){const ue=I+q,de=V+q;A===!0?x.push(de,de+1,ue):x.push(de+1,de,ue),E+=3}p.addGroup(y,E,A===!0?1:2),y+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class um extends or{constructor(e=1,n=1,s=32,l=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,s,l,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new um(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fm extends Pn{constructor(e=[],n=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:s,detail:l};const c=[],u=[];d(l),p(s),x(),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(c.slice(),3)),this.setAttribute("uv",new Zt(u,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const P=new k,A=new k,I=new k;for(let N=0;N<n.length;N+=3)_(n[N+0],P),_(n[N+1],A),_(n[N+2],I),m(P,A,I,L)}function m(L,P,A,I){const N=I+1,O=[];for(let E=0;E<=N;E++){O[E]=[];const U=L.clone().lerp(A,E/N),X=P.clone().lerp(A,E/N),V=N-E;for(let q=0;q<=V;q++)q===0&&E===N?O[E][q]=U:O[E][q]=U.clone().lerp(X,q/V)}for(let E=0;E<N;E++)for(let U=0;U<2*(N-E)-1;U++){const X=Math.floor(U/2);U%2===0?(v(O[E][X+1]),v(O[E+1][X]),v(O[E][X])):(v(O[E][X+1]),v(O[E+1][X+1]),v(O[E+1][X]))}}function p(L){const P=new k;for(let A=0;A<c.length;A+=3)P.x=c[A+0],P.y=c[A+1],P.z=c[A+2],P.normalize().multiplyScalar(L),c[A+0]=P.x,c[A+1]=P.y,c[A+2]=P.z}function x(){const L=new k;for(let P=0;P<c.length;P+=3){L.x=c[P+0],L.y=c[P+1],L.z=c[P+2];const A=S(L)/2/Math.PI+.5,I=y(L)/Math.PI+.5;u.push(A,1-I)}T(),g()}function g(){for(let L=0;L<u.length;L+=6){const P=u[L+0],A=u[L+2],I=u[L+4],N=Math.max(P,A,I),O=Math.min(P,A,I);N>.9&&O<.1&&(P<.2&&(u[L+0]+=1),A<.2&&(u[L+2]+=1),I<.2&&(u[L+4]+=1))}}function v(L){c.push(L.x,L.y,L.z)}function _(L,P){const A=L*3;P.x=e[A+0],P.y=e[A+1],P.z=e[A+2]}function T(){const L=new k,P=new k,A=new k,I=new k,N=new He,O=new He,E=new He;for(let U=0,X=0;U<c.length;U+=9,X+=6){L.set(c[U+0],c[U+1],c[U+2]),P.set(c[U+3],c[U+4],c[U+5]),A.set(c[U+6],c[U+7],c[U+8]),N.set(u[X+0],u[X+1]),O.set(u[X+2],u[X+3]),E.set(u[X+4],u[X+5]),I.copy(L).add(P).add(A).divideScalar(3);const V=S(I);R(N,X+0,L,V),R(O,X+2,P,V),R(E,X+4,A,V)}}function R(L,P,A,I){I<0&&L.x===1&&(u[P]=L.x-1),A.x===0&&A.z===0&&(u[P]=I/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function y(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fm(e.vertices,e.indices,e.radius,e.detail)}}class hm extends Pn{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],n=12,s=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:s,phiLength:l},n=Math.floor(n),l=Tt(l,0,Math.PI*2);const c=[],u=[],d=[],m=[],p=[],x=1/n,g=new k,v=new He,_=new k,T=new k,R=new k;let S=0,y=0;for(let L=0;L<=e.length-1;L++)switch(L){case 0:S=e[L+1].x-e[L].x,y=e[L+1].y-e[L].y,_.x=y*1,_.y=-S,_.z=y*0,R.copy(_),_.normalize(),m.push(_.x,_.y,_.z);break;case e.length-1:m.push(R.x,R.y,R.z);break;default:S=e[L+1].x-e[L].x,y=e[L+1].y-e[L].y,_.x=y*1,_.y=-S,_.z=y*0,T.copy(_),_.x+=R.x,_.y+=R.y,_.z+=R.z,_.normalize(),m.push(_.x,_.y,_.z),R.copy(T)}for(let L=0;L<=n;L++){const P=s+L*x*l,A=Math.sin(P),I=Math.cos(P);for(let N=0;N<=e.length-1;N++){g.x=e[N].x*A,g.y=e[N].y,g.z=e[N].x*I,u.push(g.x,g.y,g.z),v.x=L/n,v.y=N/(e.length-1),d.push(v.x,v.y);const O=m[3*N+0]*A,E=m[3*N+1],U=m[3*N+0]*I;p.push(O,E,U)}}for(let L=0;L<n;L++)for(let P=0;P<e.length-1;P++){const A=P+L*e.length,I=A,N=A+e.length,O=A+e.length+1,E=A+1;c.push(I,N,E),c.push(O,E,N)}this.setIndex(c),this.setAttribute("position",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2)),this.setAttribute("normal",new Zt(p,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hm(e.points,e.segments,e.phiStart,e.phiLength)}}class Pl extends fm{constructor(e=1,n=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Pl(e.radius,e.detail)}}class kl extends Pn{constructor(e=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:l};const c=e/2,u=n/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,g=e/d,v=n/m,_=[],T=[],R=[],S=[];for(let y=0;y<x;y++){const L=y*v-u;for(let P=0;P<p;P++){const A=P*g-c;T.push(A,-L,0),R.push(0,0,1),S.push(P/d),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let L=0;L<d;L++){const P=L+p*y,A=L+p*(y+1),I=L+1+p*(y+1),N=L+1+p*y;_.push(P,A,N),_.push(A,I,N)}this.setIndex(_),this.setAttribute("position",new Zt(T,3)),this.setAttribute("normal",new Zt(R,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class dm extends Pn{constructor(e=.5,n=1,s=32,l=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:u},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],x=[];let g=e;const v=(n-e)/l,_=new k,T=new He;for(let R=0;R<=l;R++){for(let S=0;S<=s;S++){const y=c+S/s*u;_.x=g*Math.cos(y),_.y=g*Math.sin(y),m.push(_.x,_.y,_.z),p.push(0,0,1),T.x=(_.x/n+1)/2,T.y=(_.y/n+1)/2,x.push(T.x,T.y)}g+=v}for(let R=0;R<l;R++){const S=R*(s+1);for(let y=0;y<s;y++){const L=y+S,P=L,A=L+s+1,I=L+s+2,N=L+1;d.push(P,A,N),d.push(A,I,N)}}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hi extends Pn{constructor(e=1,n=32,s=16,l=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:l,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const m=Math.min(u+d,Math.PI);let p=0;const x=[],g=new k,v=new k,_=[],T=[],R=[],S=[];for(let y=0;y<=s;y++){const L=[],P=y/s,A=u+P*d,I=e*Math.cos(A),N=Math.sqrt(e*e-I*I);let O=0;y===0&&u===0?O=.5/n:y===s&&m===Math.PI&&(O=-.5/n);for(let E=0;E<=n;E++){const U=E/n,X=l+U*c;g.x=-N*Math.cos(X),g.y=I,g.z=N*Math.sin(X),T.push(g.x,g.y,g.z),v.copy(g).normalize(),R.push(v.x,v.y,v.z),S.push(U+O,1-P),L.push(p++)}x.push(L)}for(let y=0;y<s;y++)for(let L=0;L<n;L++){const P=x[y][L+1],A=x[y][L],I=x[y+1][L],N=x[y+1][L+1];(y!==0||u>0)&&_.push(P,A,N),(y!==s-1||m<Math.PI)&&_.push(A,I,N)}this.setIndex(_),this.setAttribute("position",new Zt(T,3)),this.setAttribute("normal",new Zt(R,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Il extends Pn{constructor(e=1,n=.4,s=12,l=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:s,tubularSegments:l,arc:c,thetaStart:u,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],x=[],g=[],v=new k,_=new k,T=new k;for(let R=0;R<=s;R++){const S=u+R/s*d;for(let y=0;y<=l;y++){const L=y/l*c;_.x=(e+n*Math.cos(S))*Math.cos(L),_.y=(e+n*Math.cos(S))*Math.sin(L),_.z=n*Math.sin(S),p.push(_.x,_.y,_.z),v.x=e*Math.cos(L),v.y=e*Math.sin(L),T.subVectors(_,v).normalize(),x.push(T.x,T.y,T.z),g.push(y/l),g.push(R/s)}}for(let R=1;R<=s;R++)for(let S=1;S<=l;S++){const y=(l+1)*R+S-1,L=(l+1)*(R-1)+S-1,P=(l+1)*(R-1)+S,A=(l+1)*R+S;m.push(y,L,A),m.push(L,P,A)}this.setIndex(m),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function bo(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const l=r[n][s];if(Vx(l))l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=l.clone();else if(Array.isArray(l))if(Vx(l[0])){const c=[];for(let u=0,d=l.length;u<d;u++)c[u]=l[u].clone();e[n][s]=c}else e[n][s]=l.slice();else e[n][s]=l}}return e}function ei(r){const e={};for(let n=0;n<r.length;n++){const s=bo(r[n]);for(const l in s)e[l]=s[l]}return e}function Vx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Hb(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function j_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Ns={clone:bo,merge:ei};var Gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gb,this.fragmentShader=Vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=Hb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?n.uniforms[l]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[l]={type:"m4",value:u.toArray()}:n.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=n[l.value]||null;break;case"c":this.uniforms[s].value=new ht().setHex(l.value);break;case"v2":this.uniforms[s].value=new He().fromArray(l.value);break;case"v3":this.uniforms[s].value=new k().fromArray(l.value);break;case"v4":this.uniforms[s].value=new on().fromArray(l.value);break;case"m3":this.uniforms[s].value=new vt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new Ft().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Z_ extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nn extends wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kb extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yb extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ud={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(kx(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!kx(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function kx(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Xb{constructor(e,n,s){const l=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=s,this._abortController=null,this.itemStart=function(x){d++,c===!1&&l.onStart!==void 0&&l.onStart(x,u,d),c=!0},this.itemEnd=function(x){u++,l.onProgress!==void 0&&l.onProgress(x,u,d),u===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,g){return p.push(x,g),this},this.removeHandler=function(x){const g=p.indexOf(x);return g!==-1&&p.splice(g,2),this},this.getHandler=function(x){for(let g=0,v=p.length;g<v;g+=2){const _=p[g],T=p[g+1];if(_.global&&(_.lastIndex=0),_.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wb=new Xb;class pm{constructor(e){this.manager=e!==void 0?e:Wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const s=this;return new Promise(function(l,c){s.load(e,l,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pm.DEFAULT_MATERIAL_NAME="__DEFAULT";const ro=new WeakMap;class qb extends pm{constructor(e){super(e)}load(e,n,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ud.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let g=ro.get(u);g===void 0&&(g=[],ro.set(u,g)),g.push({onLoad:n,onError:l})}return u}const d=Gl("img");function m(){x(),n&&n(this);const g=ro.get(this)||[];for(let v=0;v<g.length;v++){const _=g[v];_.onLoad&&_.onLoad(this)}ro.delete(this),c.manager.itemEnd(e)}function p(g){x(),l&&l(g),Ud.remove(`image:${e}`);const v=ro.get(this)||[];for(let _=0;_<v.length;_++){const T=v[_];T.onError&&T.onError(g)}ro.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function x(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Ud.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class ja extends pm{constructor(e){super(e)}load(e,n,s,l){const c=new Qn,u=new qb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},s,l),c}}class mm extends On{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class jb extends mm{constructor(e,n,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Od=new Ft,Yx=new k,Xx=new k;class K_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yu,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,s=this.matrix;Yx.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yx),Xx.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xx),n.updateMatrixWorld(),Od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Hl||n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bu=new k,Eu=new fr,la=new k;class Q_ extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bu,Eu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Eu,la.set(1,1,1)).invert()}updateWorldMatrix(e,n,s=!1){super.updateWorldMatrix(e,n,s),this.matrixWorld.decompose(bu,Eu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Eu,la.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const As=new k,Wx=new He,qx=new He;class hi extends Q_{constructor(e=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,n){return this.getViewBounds(e,Wx,qx),n.subVectors(qx,Wx)}setViewOffset(e,n,s,l,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ul*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*l/m,n-=u.offsetY*s/p,l*=u.width/m,s*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Zb extends K_{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class Kb extends mm{constructor(e,n,s=0,l=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Zb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Yl extends Q_{constructor(e=-1,n=1,s=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,u=s+e,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Qb extends K_{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jb extends mm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new Qb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const oo=-90,lo=1;class $b extends On{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(oo,lo,e,n);l.layers=this.layers,this.add(l);const c=new hi(oo,lo,e,n);c.layers=this.layers,this.add(c);const u=new hi(oo,lo,e,n);u.layers=this.layers,this.add(u);const d=new hi(oo,lo,e,n);d.layers=this.layers,this.add(d);const m=new hi(oo,lo,e,n);m.layers=this.layers,this.add(m);const p=new hi(oo,lo,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,l,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Hl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(g,v,_),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class eE extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=nE.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function nE(){this._document.hidden===!1&&this.reset()}const Em=class Em{constructor(e,n,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let s=0;s<4;s++)this.elements[s]=e[s+n];return this}set(e,n,s,l){const c=this.elements;return c[0]=e,c[2]=n,c[1]=s,c[3]=l,this}};Em.prototype.isMatrix2=!0;let jx=Em;function Zx(r,e,n,s){const l=iE(s);switch(n){case P_:return r*e;case tm:return r*e/l.components*l.byteLength;case nm:return r*e/l.components*l.byteLength;case cr:return r*e*2/l.components*l.byteLength;case im:return r*e*2/l.components*l.byteLength;case I_:return r*e*3/l.components*l.byteLength;case ta:return r*e*4/l.components*l.byteLength;case am:return r*e*4/l.components*l.byteLength;case Du:case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lp:case up:return Math.max(r,16)*Math.max(e,8)/4;case op:case cp:return Math.max(r,8)*Math.max(e,8)/2;case fp:case hp:case pp:case mp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dp:case Fu:case gp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _p:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case yp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Dp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Np:case Up:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Op:case Pp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zu:case Ip:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iE(r){switch(r){case Ai:case L_:return{byteLength:1,components:1};case zl:case N_:case di:return{byteLength:2,components:1};case $p:case em:return{byteLength:2,components:4};case ga:case Jp:case ea:return{byteLength:4,components:1};case U_:case O_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);function J_(){let r=null,e=!1,n=null,s=null;function l(c,u){n(c,u),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function aE(r){const e=new WeakMap;function n(d,m){const p=d.array,x=d.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,x),d.onUploadCallback();let _;if(p instanceof Float32Array)_=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)_=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=r.SHORT;else if(p instanceof Uint32Array)_=r.UNSIGNED_INT;else if(p instanceof Int32Array)_=r.INT;else if(p instanceof Int8Array)_=r.BYTE;else if(p instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const x=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,x);else{g.sort((_,T)=>_.start-T.start);let v=0;for(let _=1;_<g.length;_++){const T=g[v],R=g[_];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++v,g[v]=R)}g.length=v+1;for(let _=0,T=g.length;_<T;_++){const R=g[_];r.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:u}}var sE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_E=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,CE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PE="gl_FragColor = linearToOutputTexel( gl_FragColor );",IE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,QE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ET=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,PT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$T=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:sE,alphahash_pars_fragment:rE,alphamap_fragment:oE,alphamap_pars_fragment:lE,alphatest_fragment:cE,alphatest_pars_fragment:uE,aomap_fragment:fE,aomap_pars_fragment:hE,batching_pars_vertex:dE,batching_vertex:pE,begin_vertex:mE,beginnormal_vertex:gE,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:_E,clipping_planes_fragment:yE,clipping_planes_pars_fragment:SE,clipping_planes_pars_vertex:ME,clipping_planes_vertex:bE,color_fragment:EE,color_pars_fragment:TE,color_pars_vertex:wE,color_vertex:AE,common:CE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:DE,displacementmap_pars_vertex:LE,displacementmap_vertex:NE,emissivemap_fragment:UE,emissivemap_pars_fragment:OE,colorspace_fragment:PE,colorspace_pars_fragment:IE,envmap_fragment:FE,envmap_common_pars_fragment:zE,envmap_pars_fragment:BE,envmap_pars_vertex:HE,envmap_physical_pars_fragment:QE,envmap_vertex:GE,fog_vertex:VE,fog_pars_vertex:kE,fog_fragment:YE,fog_pars_fragment:XE,gradientmap_pars_fragment:WE,lightmap_pars_fragment:qE,lights_lambert_fragment:jE,lights_lambert_pars_fragment:ZE,lights_pars_begin:KE,lights_toon_fragment:JE,lights_toon_pars_fragment:$E,lights_phong_fragment:eT,lights_phong_pars_fragment:tT,lights_physical_fragment:nT,lights_physical_pars_fragment:iT,lights_fragment_begin:aT,lights_fragment_maps:sT,lights_fragment_end:rT,lightprobes_pars_fragment:oT,logdepthbuf_fragment:lT,logdepthbuf_pars_fragment:cT,logdepthbuf_pars_vertex:uT,logdepthbuf_vertex:fT,map_fragment:hT,map_pars_fragment:dT,map_particle_fragment:pT,map_particle_pars_fragment:mT,metalnessmap_fragment:gT,metalnessmap_pars_fragment:vT,morphinstance_vertex:xT,morphcolor_vertex:_T,morphnormal_vertex:yT,morphtarget_pars_vertex:ST,morphtarget_vertex:MT,normal_fragment_begin:bT,normal_fragment_maps:ET,normal_pars_fragment:TT,normal_pars_vertex:wT,normal_vertex:AT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:DT,clearcoat_pars_fragment:LT,iridescence_pars_fragment:NT,opaque_fragment:UT,packing:OT,premultiplied_alpha_fragment:PT,project_vertex:IT,dithering_fragment:FT,dithering_pars_fragment:zT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:VT,shadowmap_vertex:kT,shadowmask_pars_fragment:YT,skinbase_vertex:XT,skinning_pars_vertex:WT,skinning_vertex:qT,skinnormal_vertex:jT,specularmap_fragment:ZT,specularmap_pars_fragment:KT,tonemapping_fragment:QT,tonemapping_pars_fragment:JT,transmission_fragment:$T,transmission_pars_fragment:e2,uv_pars_fragment:t2,uv_pars_vertex:n2,uv_vertex:i2,worldpos_vertex:a2,background_vert:s2,background_frag:r2,backgroundCube_vert:o2,backgroundCube_frag:l2,cube_vert:c2,cube_frag:u2,depth_vert:f2,depth_frag:h2,distance_vert:d2,distance_frag:p2,equirect_vert:m2,equirect_frag:g2,linedashed_vert:v2,linedashed_frag:x2,meshbasic_vert:_2,meshbasic_frag:y2,meshlambert_vert:S2,meshlambert_frag:M2,meshmatcap_vert:b2,meshmatcap_frag:E2,meshnormal_vert:T2,meshnormal_frag:w2,meshphong_vert:A2,meshphong_frag:C2,meshphysical_vert:R2,meshphysical_frag:D2,meshtoon_vert:L2,meshtoon_frag:N2,points_vert:U2,points_frag:O2,shadow_vert:P2,shadow_frag:I2,sprite_vert:F2,sprite_frag:z2},ze={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},fa={basic:{uniforms:ei([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:ei([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:ei([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:ei([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:ei([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new ht(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:ei([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:ei([ze.points,ze.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:ei([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:ei([ze.common,ze.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:ei([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:ei([ze.sprite,ze.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:ei([ze.common,ze.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:ei([ze.lights,ze.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};fa.physical={uniforms:ei([fa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Tu={r:0,b:0,g:0},B2=new Ft,$_=new vt;$_.set(-1,0,0,0,1,0,0,0,1);function H2(r,e,n,s,l,c){const u=new ht(0);let d=l===!0?0:1,m,p,x=null,g=0,v=null;function _(L){let P=L.isScene===!0?L.background:null;if(P&&P.isTexture){const A=L.backgroundBlurriness>0;P=e.get(P,A)}return P}function T(L){let P=!1;const A=_(L);A===null?S(u,d):A&&A.isColor&&(S(A,1),P=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(L,P){const A=_(P);A&&(A.isCubeTexture||A.mapping===ku)?(p===void 0&&(p=new lt(new Zn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:bo(fa.backgroundCube.uniforms),vertexShader:fa.backgroundCube.vertexShader,fragmentShader:fa.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(B2.makeRotationFromEuler(P.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply($_),p.material.toneMapped=Ct.getTransfer(A.colorSpace)!==Gt,(x!==A||g!==A.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,x=A,g=A.version,v=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new lt(new kl(2,2),new Un({name:"BackgroundMaterial",uniforms:bo(fa.background.uniforms),vertexShader:fa.background.vertexShader,fragmentShader:fa.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(A.colorSpace)!==Gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(x!==A||g!==A.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,x=A,g=A.version,v=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function S(L,P){L.getRGB(Tu,j_(r)),n.buffers.color.setClear(Tu.r,Tu.g,Tu.b,P,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,P=1){u.set(L),d=P,S(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,S(u,d)},render:T,addToRenderList:R,dispose:y}}function G2(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,u=!1;function d(V,q,ue,de,Q){let B=!1;const Y=g(V,de,ue,q);c!==Y&&(c=Y,p(c.object)),B=_(V,de,ue,Q),B&&T(V,de,ue,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,A(V,q,ue,de),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function x(V){return r.deleteVertexArray(V)}function g(V,q,ue,de){const Q=de.wireframe===!0;let B=s[q.id];B===void 0&&(B={},s[q.id]=B);const Y=V.isInstancedMesh===!0?V.id:0;let ne=B[Y];ne===void 0&&(ne={},B[Y]=ne);let me=ne[ue.id];me===void 0&&(me={},ne[ue.id]=me);let G=me[Q];return G===void 0&&(G=v(m()),me[Q]=G),G}function v(V){const q=[],ue=[],de=[];for(let Q=0;Q<n;Q++)q[Q]=0,ue[Q]=0,de[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ue,attributeDivisors:de,object:V,attributes:{},index:null}}function _(V,q,ue,de){const Q=c.attributes,B=q.attributes;let Y=0;const ne=ue.getAttributes();for(const me in ne)if(ne[me].location>=0){const b=Q[me];let H=B[me];if(H===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(H=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(H=V.instanceColor)),b===void 0||b.attribute!==H||H&&b.data!==H.data)return!0;Y++}return c.attributesNum!==Y||c.index!==de}function T(V,q,ue,de){const Q={},B=q.attributes;let Y=0;const ne=ue.getAttributes();for(const me in ne)if(ne[me].location>=0){let b=B[me];b===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(b=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(b=V.instanceColor));const H={};H.attribute=b,b&&b.data&&(H.data=b.data),Q[me]=H,Y++}c.attributes=Q,c.attributesNum=Y,c.index=de}function R(){const V=c.newAttributes;for(let q=0,ue=V.length;q<ue;q++)V[q]=0}function S(V){y(V,0)}function y(V,q){const ue=c.newAttributes,de=c.enabledAttributes,Q=c.attributeDivisors;ue[V]=1,de[V]===0&&(r.enableVertexAttribArray(V),de[V]=1),Q[V]!==q&&(r.vertexAttribDivisor(V,q),Q[V]=q)}function L(){const V=c.newAttributes,q=c.enabledAttributes;for(let ue=0,de=q.length;ue<de;ue++)q[ue]!==V[ue]&&(r.disableVertexAttribArray(ue),q[ue]=0)}function P(V,q,ue,de,Q,B,Y){Y===!0?r.vertexAttribIPointer(V,q,ue,Q,B):r.vertexAttribPointer(V,q,ue,de,Q,B)}function A(V,q,ue,de){R();const Q=de.attributes,B=ue.getAttributes(),Y=q.defaultAttributeValues;for(const ne in B){const me=B[ne];if(me.location>=0){let G=Q[ne];if(G===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(G=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(G=V.instanceColor)),G!==void 0){const b=G.normalized,H=G.itemSize,ie=e.get(G);if(ie===void 0)continue;const ve=ie.buffer,Ee=ie.type,K=ie.bytesPerElement,ae=Ee===r.INT||Ee===r.UNSIGNED_INT||G.gpuType===Jp;if(G.isInterleavedBufferAttribute){const pe=G.data,Ce=pe.stride,Ve=G.offset;if(pe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<me.locationSize;Ne++)y(me.location+Ne,pe.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ne=0;Ne<me.locationSize;Ne++)S(me.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let Ne=0;Ne<me.locationSize;Ne++)P(me.location+Ne,H/me.locationSize,Ee,b,Ce*K,(Ve+H/me.locationSize*Ne)*K,ae)}else{if(G.isInstancedBufferAttribute){for(let pe=0;pe<me.locationSize;pe++)y(me.location+pe,G.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let pe=0;pe<me.locationSize;pe++)S(me.location+pe);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let pe=0;pe<me.locationSize;pe++)P(me.location+pe,H/me.locationSize,Ee,b,H*K,H/me.locationSize*pe*K,ae)}}else if(Y!==void 0){const b=Y[ne];if(b!==void 0)switch(b.length){case 2:r.vertexAttrib2fv(me.location,b);break;case 3:r.vertexAttrib3fv(me.location,b);break;case 4:r.vertexAttrib4fv(me.location,b);break;default:r.vertexAttrib1fv(me.location,b)}}}}L()}function I(){U();for(const V in s){const q=s[V];for(const ue in q){const de=q[ue];for(const Q in de){const B=de[Q];for(const Y in B)x(B[Y].object),delete B[Y];delete de[Q]}}delete s[V]}}function N(V){if(s[V.id]===void 0)return;const q=s[V.id];for(const ue in q){const de=q[ue];for(const Q in de){const B=de[Q];for(const Y in B)x(B[Y].object),delete B[Y];delete de[Q]}}delete s[V.id]}function O(V){for(const q in s){const ue=s[q];for(const de in ue){const Q=ue[de];if(Q[V.id]===void 0)continue;const B=Q[V.id];for(const Y in B)x(B[Y].object),delete B[Y];delete Q[V.id]}}}function E(V){for(const q in s){const ue=s[q],de=V.isInstancedMesh===!0?V.id:0,Q=ue[de];if(Q!==void 0){for(const B in Q){const Y=Q[B];for(const ne in Y)x(Y[ne].object),delete Y[ne];delete Q[B]}delete ue[de],Object.keys(ue).length===0&&delete s[q]}}}function U(){X(),u=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:X,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:S,disableUnusedAttributes:L}}function V2(r,e,n){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),n.update(p,s,1)}function u(m,p,x){x!==0&&(r.drawArraysInstanced(s,m,p,x),n.update(p,s,x))}function d(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let v=0;for(let _=0;_<x;_++)v+=p[_];n.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function k2(r,e,n,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(O){return!(O!==ta&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const E=O===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ai&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ea&&!E)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=m(p);x!==p&&(dt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:_,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,maxSamples:I,samples:N}}function Y2(r){const e=this;let n=null,s=0,l=!1,c=!1;const u=new Rs,d=new vt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const _=g.length!==0||v||s!==0||l;return l=v,s=g.length,_},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=x(g,v,0)},this.setState=function(g,v,_){const T=g.clippingPlanes,R=g.clipIntersection,S=g.clipShadows,y=r.get(g);if(!l||T===null||T.length===0||c&&!S)c?x(null):p();else{const L=c?0:s,P=L*4;let A=y.clippingState||null;m.value=A,A=x(T,v,P,_);for(let I=0;I!==P;++I)A[I]=n[I];y.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,v,_,T){const R=g!==null?g.length:0;let S=null;if(R!==0){if(S=m.value,T!==!0||S===null){const y=_+R*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,A=_;P!==R;++P,A+=4)u.copy(g[P]).applyMatrix4(L,d),u.normal.toArray(S,A),S[A+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const Ls=4,Kx=[.125,.215,.35,.446,.526,.582],ar=20,X2=256,Al=new Yl,Qx=new ht;let Pd=null,Id=0,Fd=0,zd=!1;const W2=new k;class Bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,l=100,c={}){const{size:u=256,position:d=W2}=c;Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Id,Fd),this._renderer.xr.enabled=zd,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lr||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:di,format:ta,colorSpace:Bu,depthBuffer:!1},l=Jx(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jx(e,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=q2(c)),this._blurMaterial=Z2(c,e,n),this._ggxMaterial=j2(c,e,n)}return l}_compileMaterial(e){const n=new lt(new Pn,e);this._renderer.compile(n,Al)}_sceneToCubeUV(e,n,s,l,c){const m=new hi(90,1,n,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(Qx),g.toneMapping=ma,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new Zn,new Ds({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let y=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,y=!0):(S.color.copy(Qx),y=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[P],c.y,c.z)):A===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[P]));const I=this._cubeSize;co(l,A*I,P>2?I:0,I,I),g.setRenderTarget(l),y&&g.render(R,m),g.render(e,m)}g.toneMapping=_,g.autoClear=v,e.background=L}_textureToCubeUV(e,n){const s=this._renderer,l=e.mapping===lr||e.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$x());const c=l?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;co(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(u,Al)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=s}_applyGGXFilter(e,n,s){const l=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[s];d.material=u;const m=u.uniforms,p=s/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),v=0+p*1.25,_=g*v,{_lodMax:T}=this,R=this._sizeLods[s],S=3*R*(s>T-Ls?s-T+Ls:0),y=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=_,m.mipInt.value=T-n,co(c,S,y,3*R,2*R),l.setRenderTarget(c),l.render(d,Al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,co(e,S,y,3*R,2*R),l.setRenderTarget(e),l.render(d,Al)}_blur(e,n,s,l,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,l,"latitudinal",c),this._halfBlur(u,e,s,s,l,"longitudinal",c)}_halfBlur(e,n,s,l,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,_=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*_):2*Math.PI/(2*ar-1),R=c/T,S=isFinite(c)?1+Math.floor(x*R):ar;S>ar&&dt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ar}`);const y=[];let L=0;for(let O=0;O<ar;++O){const E=O/R,U=Math.exp(-E*E/2);y.push(U),O===0?L+=U:O<S&&(L+=2*U)}for(let O=0;O<y.length;O++)y[O]=y[O]/L;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=T,v.mipInt.value=P-s;const A=this._sizeLods[l],I=3*A*(l>P-Ls?l-P+Ls:0),N=4*(this._cubeSize-A);co(n,I,N,3*A,2*A),m.setRenderTarget(n),m.render(g,Al)}}function q2(r){const e=[],n=[],s=[];let l=r;const c=r-Ls+1+Kx.length;for(let u=0;u<c;u++){const d=Math.pow(2,l);e.push(d);let m=1/d;u>r-Ls?m=Kx[u-r+Ls-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),x=-p,g=1+p,v=[x,x,g,x,g,g,x,x,g,g,x,g],_=6,T=6,R=3,S=2,y=1,L=new Float32Array(R*T*_),P=new Float32Array(S*T*_),A=new Float32Array(y*T*_);for(let N=0;N<_;N++){const O=N%3*2/3-1,E=N>2?0:-1,U=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];L.set(U,R*T*N),P.set(v,S*T*N);const X=[N,N,N,N,N,N];A.set(X,y*T*N)}const I=new Pn;I.setAttribute("position",new Ci(L,R)),I.setAttribute("uv",new Ci(P,S)),I.setAttribute("faceIndex",new Ci(A,y)),s.push(new lt(I,null)),l>Ls&&l--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function Jx(r,e,n){const s=new ni(r,e,n);return s.texture.mapping=ku,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function co(r,e,n,s,l){r.viewport.set(e,n,s,l),r.scissor.set(e,n,s,l)}function j2(r,e,n){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Z2(r,e,n){const s=new Float32Array(ar),l=new k(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function $x(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function e_(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ey extends ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new W_(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Zn(5,5,5),c=new Un({name:"CubemapFromEquirect",uniforms:bo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:pa});c.uniforms.tEquirect.value=n;const u=new lt(l,c),d=n.minFilter;return n.minFilter===sr&&(n.minFilter=Kn),new $b(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,l);e.setRenderTarget(c)}}function K2(r){let e=new WeakMap,n=new WeakMap,s=null;function l(v,_=!1){return v==null?null:_?u(v):c(v)}function c(v){if(v&&v.isTexture){const _=v.mapping;if(_===ld||_===cd)if(e.has(v)){const T=e.get(v).texture;return d(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const R=new ey(T.height);return R.fromEquirectangularTexture(r,v),e.set(v,R),v.addEventListener("dispose",p),d(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const _=v.mapping,T=_===ld||_===cd,R=_===lr||_===So;if(T||R){let S=n.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new Bp(r)),S=T?s.fromEquirectangular(v,S):s.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const L=v.image;return T&&L&&L.height>0||R&&L&&m(L)?(s===null&&(s=new Bp(r)),S=T?s.fromEquirectangular(v):s.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",x),S.texture):null}}}return v}function d(v,_){return _===ld?v.mapping=lr:_===cd&&(v.mapping=So),v}function m(v){let _=0;const T=6;for(let R=0;R<T;R++)v[R]!==void 0&&_++;return _===T}function p(v){const _=v.target;_.removeEventListener("dispose",p);const T=e.get(_);T!==void 0&&(e.delete(_),T.dispose())}function x(v){const _=v.target;_.removeEventListener("dispose",x);const T=n.get(_);T!==void 0&&(n.delete(_),T.dispose())}function g(){e=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function Q2(r){const e={};function n(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&vo("WebGLRenderer: "+s+" extension not supported."),l}}}function J2(r,e,n,s){const l={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",u),delete l[v.id];const _=c.get(v);_&&(e.remove(_),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(g,v){return l[v.id]===!0||(v.addEventListener("dispose",u),l[v.id]=!0,n.memory.geometries++),v}function m(g){const v=g.attributes;for(const _ in v)e.update(v[_],r.ARRAY_BUFFER)}function p(g){const v=[],_=g.index,T=g.attributes.position;let R=0;if(T===void 0)return;if(_!==null){const L=_.array;R=_.version;for(let P=0,A=L.length;P<A;P+=3){const I=L[P+0],N=L[P+1],O=L[P+2];v.push(I,N,N,O,O,I)}}else{const L=T.array;R=T.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const I=P+0,N=P+1,O=P+2;v.push(I,N,N,O,O,I)}}const S=new(T.count>=65535?V_:G_)(v,1);S.version=R;const y=c.get(g);y&&e.remove(y),c.set(g,S)}function x(g){const v=c.get(g);if(v){const _=g.index;_!==null&&v.version<_.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function $2(r,e,n){let s;function l(g){s=g}let c,u;function d(g){c=g.type,u=g.bytesPerElement}function m(g,v){r.drawElements(s,v,c,g*u),n.update(v,s,1)}function p(g,v,_){_!==0&&(r.drawElementsInstanced(s,v,c,g*u,_),n.update(v,s,_))}function x(g,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,g,0,_);let R=0;for(let S=0;S<_;S++)R+=v[S];n.update(R,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function ew(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:s}}function tw(r,e,n){const s=new WeakMap,l=new on;function c(u,d,m){const p=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let v=s.get(d);if(v===void 0||v.count!==g){let X=function(){E.dispose(),s.delete(d),d.removeEventListener("dispose",X)};var _=X;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let A=0;T===!0&&(A=1),R===!0&&(A=2),S===!0&&(A=3);let I=d.attributes.position.count*A,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*N*4*g),E=new z_(O,I,N,g);E.type=ea,E.needsUpdate=!0;const U=A*4;for(let V=0;V<g;V++){const q=y[V],ue=L[V],de=P[V],Q=I*N*4*V;for(let B=0;B<q.count;B++){const Y=B*U;T===!0&&(l.fromBufferAttribute(q,B),O[Q+Y+0]=l.x,O[Q+Y+1]=l.y,O[Q+Y+2]=l.z,O[Q+Y+3]=0),R===!0&&(l.fromBufferAttribute(ue,B),O[Q+Y+4]=l.x,O[Q+Y+5]=l.y,O[Q+Y+6]=l.z,O[Q+Y+7]=0),S===!0&&(l.fromBufferAttribute(de,B),O[Q+Y+8]=l.x,O[Q+Y+9]=l.y,O[Q+Y+10]=l.z,O[Q+Y+11]=de.itemSize===4?l.w:1)}}v={count:g,texture:E,size:new He(I,N)},s.set(d,v),d.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const R=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function nw(r,e,n,s,l){let c=new WeakMap;function u(p){const x=l.render.frame,g=p.geometry,v=e.get(p,g);if(c.get(v)!==x&&(e.update(v),c.set(v,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==x&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const _=p.skeleton;c.get(_)!==x&&(_.update(),c.set(_,x))}return v}function d(){c=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:d}}const iw={[Wp]:"LINEAR_TONE_MAPPING",[qp]:"REINHARD_TONE_MAPPING",[jp]:"CINEON_TONE_MAPPING",[Vu]:"ACES_FILMIC_TONE_MAPPING",[Kp]:"AGX_TONE_MAPPING",[Qp]:"NEUTRAL_TONE_MAPPING",[Zp]:"CUSTOM_TONE_MAPPING"};function aw(r,e,n,s,l,c){const u=new ni(e,n,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Mo(e,n):void 0}),d=new ni(e,n,{type:di,depthBuffer:!1,stencilBuffer:!1}),m=new Pn;m.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const p=new Z_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new lt(m,p),g=new Yl(-1,1,1,-1,0,1);let v=null,_=null,T=!1,R,S=null,y=[],L=!1;this.setSize=function(P,A){u.setSize(P,A),d.setSize(P,A);for(let I=0;I<y.length;I++){const N=y[I];N.setSize&&N.setSize(P,A)}},this.setEffects=function(P){y=P,L=y.length>0&&y[0].isRenderPass===!0;const A=u.width,I=u.height;for(let N=0;N<y.length;N++){const O=y[N];O.setSize&&O.setSize(A,I)}},this.begin=function(P,A){if(T||P.toneMapping===ma&&y.length===0)return!1;if(S=A,A!==null){const I=A.width,N=A.height;(u.width!==I||u.height!==N)&&this.setSize(I,N)}return L===!1&&P.setRenderTarget(u),R=P.toneMapping,P.toneMapping=ma,!0},this.hasRenderPass=function(){return L},this.end=function(P,A){P.toneMapping=R,T=!0;let I=u,N=d;for(let O=0;O<y.length;O++){const E=y[O];if(E.enabled!==!1&&(E.render(P,N,I,A),E.needsSwap!==!1)){const U=I;I=N,N=U}}if(v!==P.outputColorSpace||_!==P.toneMapping){v=P.outputColorSpace,_=P.toneMapping,p.defines={},Ct.getTransfer(v)===Gt&&(p.defines.SRGB_TRANSFER="");const O=iw[_];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,P.setRenderTarget(S),P.render(x,g),S=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),p.dispose()}}const ty=new Qn,Hp=new Mo(1,1),ny=new z_,iy=new yb,ay=new W_,t_=[],n_=[],i_=new Float32Array(16),a_=new Float32Array(9),s_=new Float32Array(4);function Ao(r,e,n){const s=r[0];if(s<=0||s>0)return r;const l=e*n;let c=t_[l];if(c===void 0&&(c=new Float32Array(l),t_[l]=c),e!==0){s.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function An(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function Cn(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Wu(r,e){let n=n_[e];n===void 0&&(n=new Int32Array(e),n_[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function sw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function rw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2fv(this.addr,e),Cn(n,e)}}function ow(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;r.uniform3fv(this.addr,e),Cn(n,e)}}function lw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4fv(this.addr,e),Cn(n,e)}}function cw(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(An(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,s))return;s_.set(s),r.uniformMatrix2fv(this.addr,!1,s_),Cn(n,s)}}function uw(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(An(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,s))return;a_.set(s),r.uniformMatrix3fv(this.addr,!1,a_),Cn(n,s)}}function fw(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(An(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,s))return;i_.set(s),r.uniformMatrix4fv(this.addr,!1,i_),Cn(n,s)}}function hw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function dw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2iv(this.addr,e),Cn(n,e)}}function pw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;r.uniform3iv(this.addr,e),Cn(n,e)}}function mw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4iv(this.addr,e),Cn(n,e)}}function gw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function vw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2uiv(this.addr,e),Cn(n,e)}}function xw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;r.uniform3uiv(this.addr,e),Cn(n,e)}}function _w(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4uiv(this.addr,e),Cn(n,e)}}function yw(r,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Hp.compareFunction=n.isReversedDepthBuffer()?rm:sm,c=Hp):c=ty,n.setTexture2D(e||c,l)}function Sw(r,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(e||iy,l)}function Mw(r,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(e||ay,l)}function bw(r,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(e||ny,l)}function Ew(r){switch(r){case 5126:return sw;case 35664:return rw;case 35665:return ow;case 35666:return lw;case 35674:return cw;case 35675:return uw;case 35676:return fw;case 5124:case 35670:return hw;case 35667:case 35671:return dw;case 35668:case 35672:return pw;case 35669:case 35673:return mw;case 5125:return gw;case 36294:return vw;case 36295:return xw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return bw}}function Tw(r,e){r.uniform1fv(this.addr,e)}function ww(r,e){const n=Ao(e,this.size,2);r.uniform2fv(this.addr,n)}function Aw(r,e){const n=Ao(e,this.size,3);r.uniform3fv(this.addr,n)}function Cw(r,e){const n=Ao(e,this.size,4);r.uniform4fv(this.addr,n)}function Rw(r,e){const n=Ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function Dw(r,e){const n=Ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function Lw(r,e){const n=Ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Nw(r,e){r.uniform1iv(this.addr,e)}function Uw(r,e){r.uniform2iv(this.addr,e)}function Ow(r,e){r.uniform3iv(this.addr,e)}function Pw(r,e){r.uniform4iv(this.addr,e)}function Iw(r,e){r.uniform1uiv(this.addr,e)}function Fw(r,e){r.uniform2uiv(this.addr,e)}function zw(r,e){r.uniform3uiv(this.addr,e)}function Bw(r,e){r.uniform4uiv(this.addr,e)}function Hw(r,e,n){const s=this.cache,l=e.length,c=Wu(n,l);An(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Hp:u=ty;for(let d=0;d!==l;++d)n.setTexture2D(e[d]||u,c[d])}function Gw(r,e,n){const s=this.cache,l=e.length,c=Wu(n,l);An(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let u=0;u!==l;++u)n.setTexture3D(e[u]||iy,c[u])}function Vw(r,e,n){const s=this.cache,l=e.length,c=Wu(n,l);An(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let u=0;u!==l;++u)n.setTextureCube(e[u]||ay,c[u])}function kw(r,e,n){const s=this.cache,l=e.length,c=Wu(n,l);An(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let u=0;u!==l;++u)n.setTexture2DArray(e[u]||ny,c[u])}function Yw(r){switch(r){case 5126:return Tw;case 35664:return ww;case 35665:return Aw;case 35666:return Cw;case 35674:return Rw;case 35675:return Dw;case 35676:return Lw;case 5124:case 35670:return Nw;case 35667:case 35671:return Uw;case 35668:case 35672:return Ow;case 35669:case 35673:return Pw;case 5125:return Iw;case 36294:return Fw;case 36295:return zw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return kw}}class Xw{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=Ew(n.type)}}class Ww{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Yw(n.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const d=l[c];d.setValue(e,n[d.id],s)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function r_(r,e){r.seq.push(e),r.map[e.id]=e}function jw(r,e,n){const s=r.name,l=s.length;for(Bd.lastIndex=0;;){const c=Bd.exec(s),u=Bd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===l){r_(n,p===void 0?new Xw(d,r,e):new Ww(d,r,e));break}else{let g=n.map[d];g===void 0&&(g=new qw(d),r_(n,g)),n=g}}}class Ou{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const d=e.getActiveUniform(n,u),m=e.getUniformLocation(n,d.name);jw(d,m,this)}const l=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(u):c.push(u);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(e,s,l)}setOptional(e,n,s){const l=n[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,n,s,l){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,n){const s=[];for(let l=0,c=e.length;l!==c;++l){const u=e[l];u.id in n&&s.push(u)}return s}}function o_(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const Zw=37297;let Kw=0;function Qw(r,e){const n=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=l;u<c;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return s.join(`
`)}const l_=new vt;function Jw(r){Ct._getMatrix(l_,Ct.workingColorSpace,r);const e=`mat3( ${l_.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(r)){case Hu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function c_(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+Qw(r.getShaderSource(e),d)}else return c}function $w(r,e){const n=Jw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const eA={[Wp]:"Linear",[qp]:"Reinhard",[jp]:"Cineon",[Vu]:"ACESFilmic",[Kp]:"AgX",[Qp]:"Neutral",[Zp]:"Custom"};function tA(r,e){const n=eA[e];return n===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wu=new k;function nA(){Ct.getLuminanceCoefficients(wu);const r=wu.x.toFixed(4),e=wu.y.toFixed(4),n=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function aA(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function sA(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Ll(r){return r!==""}function u_(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gp(r){return r.replace(rA,lA)}const oA=new Map;function lA(r,e){let n=St[e];if(n===void 0){const s=oA.get(e);if(s!==void 0)n=St[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gp(n)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h_(r){return r.replace(cA,uA)}function uA(r,e,n,s){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function d_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const fA={[Nl]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function hA(r){return fA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dA={[lr]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[ku]:"ENVMAP_TYPE_CUBE_UV"};function pA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":dA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const mA={[So]:"ENVMAP_MODE_REFRACTION"};function gA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":mA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vA={[R_]:"ENVMAP_BLENDING_MULTIPLY",[F1]:"ENVMAP_BLENDING_MIX",[z1]:"ENVMAP_BLENDING_ADD"};function xA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vA[r.combine]||"ENVMAP_BLENDING_NONE"}function _A(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function yA(r,e,n,s){const l=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=hA(n),p=pA(n),x=gA(n),g=xA(n),v=_A(n),_=iA(n),T=aA(c),R=l.createProgram();let S,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ll).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ll).join(`
`),y.length>0&&(y+=`
`)):(S=[d_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),y=[d_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ma?"#define TONE_MAPPING":"",n.toneMapping!==ma?St.tonemapping_pars_fragment:"",n.toneMapping!==ma?tA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,$w("linearToOutputTexel",n.outputColorSpace),nA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ll).join(`
`)),u=Gp(u),u=u_(u,n),u=f_(u,n),d=Gp(d),d=u_(d,n),d=f_(d,n),u=h_(u),d=h_(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===xx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=L+S+u,A=L+y+d,I=o_(l,l.VERTEX_SHADER,P),N=o_(l,l.FRAGMENT_SHADER,A);l.attachShader(R,I),l.attachShader(R,N),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(V){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(R)||"",ue=l.getShaderInfoLog(I)||"",de=l.getShaderInfoLog(N)||"",Q=q.trim(),B=ue.trim(),Y=de.trim();let ne=!0,me=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,I,N);else{const G=c_(l,I,"vertex"),b=c_(l,N,"fragment");Ut("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+G+`
`+b)}else Q!==""?dt("WebGLProgram: Program Info Log:",Q):(B===""||Y==="")&&(me=!1);me&&(V.diagnostics={runnable:ne,programLog:Q,vertexShader:{log:B,prefix:S},fragmentShader:{log:Y,prefix:y}})}l.deleteShader(I),l.deleteShader(N),E=new Ou(l,R),U=sA(l,R)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let X=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(R,Zw)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=N,this}let SA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,s){const l=this._getShaderCacheForMaterial(e);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new bA(e),n.set(e,s)),s}}class bA{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}}function EA(r){return r===cr||r===Fu||r===zu}function TA(r,e,n,s,l,c){const u=new B_,d=new MA,m=new Set,p=[],x=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,U,X,V,q,ue){const de=V.fog,Q=q.geometry,B=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,Y=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ne=e.get(E.envMap||B,Y),me=ne&&ne.mapping===ku?ne.image.height:null,G=_[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&dt("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const b=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,H=b!==void 0?b.length:0;let ie=0;Q.morphAttributes.position!==void 0&&(ie=1),Q.morphAttributes.normal!==void 0&&(ie=2),Q.morphAttributes.color!==void 0&&(ie=3);let ve,Ee,K,ae;if(G){const qe=fa[G];ve=qe.vertexShader,Ee=qe.fragmentShader}else{ve=E.vertexShader,Ee=E.fragmentShader;const qe=d.getVertexShaderStage(E),cn=d.getFragmentShaderStage(E);d.update(E,qe,cn),K=qe.id,ae=cn.id}const pe=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),Ve=q.isInstancedMesh===!0,Ne=q.isBatchedMesh===!0,ct=!!E.map,tt=!!E.matcap,ke=!!ne,ot=!!E.aoMap,Ae=!!E.lightMap,Qe=!!E.bumpMap&&E.wireframe===!1,Je=!!E.normalMap,ut=!!E.displacementMap,Rt=!!E.emissiveMap,Lt=!!E.metalnessMap,$t=!!E.roughnessMap,J=E.anisotropy>0,zt=E.clearcoat>0,Nt=E.dispersion>0,z=E.iridescence>0,w=E.sheen>0,te=E.transmission>0,ce=J&&!!E.anisotropyMap,xe=zt&&!!E.clearcoatMap,Re=zt&&!!E.clearcoatNormalMap,Oe=zt&&!!E.clearcoatRoughnessMap,_e=z&&!!E.iridescenceMap,ye=z&&!!E.iridescenceThicknessMap,Le=w&&!!E.sheenColorMap,Ye=w&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,Pe=!!E.specularColorMap,it=!!E.specularIntensityMap,at=te&&!!E.transmissionMap,pt=te&&!!E.thicknessMap,Z=!!E.gradientMap,De=!!E.alphaMap,Me=E.alphaTest>0,Ue=!!E.alphaHash,Ge=!!E.extensions;let we=ma;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(we=r.toneMapping);const $e={shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:ve,fragmentShader:Ee,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Ne,batchingColor:Ne&&q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&q.instanceColor!==null,instancingMorph:Ve&&q.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:tt,envMap:ke,envMapMode:ke&&ne.mapping,envMapCubeUVHeight:me,aoMap:ot,lightMap:Ae,bumpMap:Qe,normalMap:Je,displacementMap:ut,emissiveMap:Rt,normalMapObjectSpace:Je&&E.normalMapType===G1,normalMapTangentSpace:Je&&E.normalMapType===Fp,packedNormalMap:Je&&E.normalMapType===Fp&&EA(E.normalMap.format),metalnessMap:Lt,roughnessMap:$t,anisotropy:J,anisotropyMap:ce,clearcoat:zt,clearcoatMap:xe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Oe,dispersion:Nt,iridescence:z,iridescenceMap:_e,iridescenceThicknessMap:ye,sheen:w,sheenColorMap:Le,sheenRoughnessMap:Ye,specularMap:Fe,specularColorMap:Pe,specularIntensityMap:it,transmission:te,transmissionMap:at,thicknessMap:pt,gradientMap:Z,opaque:E.transparent===!1&&E.blending===go&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:Me,alphaHash:Ue,combine:E.combine,mapUv:ct&&T(E.map.channel),aoMapUv:ot&&T(E.aoMap.channel),lightMapUv:Ae&&T(E.lightMap.channel),bumpMapUv:Qe&&T(E.bumpMap.channel),normalMapUv:Je&&T(E.normalMap.channel),displacementMapUv:ut&&T(E.displacementMap.channel),emissiveMapUv:Rt&&T(E.emissiveMap.channel),metalnessMapUv:Lt&&T(E.metalnessMap.channel),roughnessMapUv:$t&&T(E.roughnessMap.channel),anisotropyMapUv:ce&&T(E.anisotropyMap.channel),clearcoatMapUv:xe&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&T(E.sheenRoughnessMap.channel),specularMapUv:Fe&&T(E.specularMap.channel),specularColorMapUv:Pe&&T(E.specularColorMap.channel),specularIntensityMapUv:it&&T(E.specularIntensityMap.channel),transmissionMapUv:at&&T(E.transmissionMap.channel),thicknessMapUv:pt&&T(E.thicknessMap.channel),alphaMapUv:De&&T(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Je||J),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(ct||De),fog:!!de,useFog:E.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&Je===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ce,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ie,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Gt,decodeVideoTextureEmissive:Rt&&E.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(E.emissiveMap.colorSpace)===Gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qi,flipSided:E.side===ti,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ge&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&E.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function S(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)U.push(X),U.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(y(U,E),L(U,E),U.push(r.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function y(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function L(E,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function P(E){const U=_[E.type];let X;if(U){const V=fa[U];X=Ns.clone(V.uniforms)}else X=E.uniforms;return X}function A(E,U){let X=x.get(U);return X!==void 0?++X.usedTimes:(X=new yA(r,U,E,l),p.push(X),x.set(U,X)),X}function I(E){if(--E.usedTimes===0){const U=p.indexOf(E);p[U]=p[p.length-1],p.pop(),x.delete(E.cacheKey),E.destroy()}}function N(E){d.remove(E)}function O(){d.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:P,acquireProgram:A,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:O}}function wA(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function l(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:s,update:l,dispose:c}}function AA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function p_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function m_(){const r=[];let e=0;const n=[],s=[],l=[];function c(){e=0,n.length=0,s.length=0,l.length=0}function u(v){let _=0;return v.isInstancedMesh&&(_+=2),v.isSkinnedMesh&&(_+=1),_}function d(v,_,T,R,S,y){let L=r[e];return L===void 0?(L={id:v.id,object:v,geometry:_,material:T,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:S,group:y},r[e]=L):(L.id=v.id,L.object=v,L.geometry=_,L.material=T,L.materialVariant=u(v),L.groupOrder=R,L.renderOrder=v.renderOrder,L.z=S,L.group=y),e++,L}function m(v,_,T,R,S,y){const L=d(v,_,T,R,S,y);T.transmission>0?s.push(L):T.transparent===!0?l.push(L):n.push(L)}function p(v,_,T,R,S,y){const L=d(v,_,T,R,S,y);T.transmission>0?s.unshift(L):T.transparent===!0?l.unshift(L):n.unshift(L)}function x(v,_,T){n.length>1&&n.sort(v||AA),s.length>1&&s.sort(_||p_),l.length>1&&l.sort(_||p_),T&&(n.reverse(),s.reverse(),l.reverse())}function g(){for(let v=e,_=r.length;v<_;v++){const T=r[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:g,sort:x}}function CA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let u;return c===void 0?(u=new m_,r.set(s,[u])):l>=c.length?(u=new m_,c.push(u)):u=c[l],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function RA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new ht};break;case"SpotLight":n={position:new k,direction:new k,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=n,n}}}function DA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let LA=0;function NA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function UA(r){const e=new RA,n=DA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new k);const l=new k,c=new Ft,u=new Ft;function d(p){let x=0,g=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let _=0,T=0,R=0,S=0,y=0,L=0,P=0,A=0,I=0,N=0,O=0;p.sort(NA);for(let U=0,X=p.length;U<X;U++){const V=p[U],q=V.color,ue=V.intensity,de=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===cr?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=q.r*ue,g+=q.g*ue,v+=q.b*ue;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],ue);O++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Y=V.shadow,ne=n.get(V);ne.shadowIntensity=Y.intensity,ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,s.directionalShadow[_]=ne,s.directionalShadowMap[_]=Q,s.directionalShadowMatrix[_]=V.shadow.matrix,L++}s.directional[_]=B,_++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(q).multiplyScalar(ue),B.distance=de,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[R]=B;const Y=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,Y.updateMatrices(V),V.castShadow&&N++),s.spotLightMatrix[R]=Y.matrix,V.castShadow){const ne=n.get(V);ne.shadowIntensity=Y.intensity,ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,s.spotShadow[R]=ne,s.spotShadowMap[R]=Q,A++}R++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(q).multiplyScalar(ue),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=B,S++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const Y=V.shadow,ne=n.get(V);ne.shadowIntensity=Y.intensity,ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,ne.shadowCameraNear=Y.camera.near,ne.shadowCameraFar=Y.camera.far,s.pointShadow[T]=ne,s.pointShadowMap[T]=Q,s.pointShadowMatrix[T]=V.shadow.matrix,P++}s.point[T]=B,T++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(ue),B.groundColor.copy(V.groundColor).multiplyScalar(ue),s.hemi[y]=B,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==_||E.pointLength!==T||E.spotLength!==R||E.rectAreaLength!==S||E.hemiLength!==y||E.numDirectionalShadows!==L||E.numPointShadows!==P||E.numSpotShadows!==A||E.numSpotMaps!==I||E.numLightProbes!==O)&&(s.directional.length=_,s.spot.length=R,s.rectArea.length=S,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+I-N,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=O,E.directionalLength=_,E.pointLength=T,E.spotLength=R,E.rectAreaLength=S,E.hemiLength=y,E.numDirectionalShadows=L,E.numPointShadows=P,E.numSpotShadows=A,E.numSpotMaps=I,E.numLightProbes=O,s.version=LA++)}function m(p,x){let g=0,v=0,_=0,T=0,R=0;const S=x.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const P=p[y];if(P.isDirectionalLight){const A=s.directional[g];A.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(S),g++}else if(P.isSpotLight){const A=s.spot[_];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(S),_++}else if(P.isRectAreaLight){const A=s.rectArea[T];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),u.identity(),c.copy(P.matrixWorld),c.premultiply(S),u.extractRotation(c),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),T++}else if(P.isPointLight){const A=s.point[v];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const A=s.hemi[R];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(S),R++}}}return{setup:d,setupView:m,state:s}}function g_(r){const e=new UA(r),n=[],s=[],l=[];function c(v){g.camera=v,n.length=0,s.length=0,l.length=0}function u(v){n.push(v)}function d(v){s.push(v)}function m(v){l.push(v)}function p(){e.setup(n)}function x(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:p,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function OA(r){let e=new WeakMap;function n(l,c=0){const u=e.get(l);let d;return u===void 0?(d=new g_(r),e.set(l,[d])):c>=u.length?(d=new g_(r),u.push(d)):d=u[c],d}function s(){e=new WeakMap}return{get:n,dispose:s}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FA=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],zA=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],v_=new Ft,Cl=new k,Hd=new k;function BA(r,e,n){let s=new Yu;const l=new He,c=new He,u=new on,d=new kb,m=new Yb,p={},x=n.maxTextureSize,g={[Xa]:ti,[ti]:Xa,[Qi]:Qi},v=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:PA,fragmentShader:IA}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const T=new Pn;T.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new lt(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let y=this.type;this.render=function(N,O,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===x1&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nl);const U=r.getRenderTarget(),X=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),q=r.state;q.setBlending(pa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ue=y!==this.type;ue&&O.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(Q=>Q.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,Q=N.length;de<Q;de++){const B=N[de],Y=B.shadow;if(Y===void 0){dt("WebGLShadowMap:",B,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const ne=Y.getFrameExtents();l.multiply(ne),c.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ne.x),l.x=c.x*ne.x,Y.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ne.y),l.y=c.y*ne.y,Y.mapSize.y=c.y));const me=r.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=me,Y.map===null||ue===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Dl){if(B.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new ni(l.x,l.y,{format:cr,type:di,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),Y.map.texture.name=B.name+".shadowMap",Y.map.depthTexture=new Mo(l.x,l.y,ea),Y.map.depthTexture.name=B.name+".shadowMapDepth",Y.map.depthTexture.format=Wa,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=kn,Y.map.depthTexture.magFilter=kn}else B.isPointLight?(Y.map=new ey(l.x),Y.map.depthTexture=new Bb(l.x,ga)):(Y.map=new ni(l.x,l.y),Y.map.depthTexture=new Mo(l.x,l.y,ga)),Y.map.depthTexture.name=B.name+".shadowMap",Y.map.depthTexture.format=Wa,this.type===Nl?(Y.map.depthTexture.compareFunction=me?rm:sm,Y.map.depthTexture.minFilter=Kn,Y.map.depthTexture.magFilter=Kn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=kn,Y.map.depthTexture.magFilter=kn);Y.camera.updateProjectionMatrix()}const G=Y.map.isWebGLCubeRenderTarget?6:1;for(let b=0;b<G;b++){if(Y.map.isWebGLCubeRenderTarget)r.setRenderTarget(Y.map,b),r.clear();else{b===0&&(r.setRenderTarget(Y.map),r.clear());const H=Y.getViewport(b);u.set(c.x*H.x,c.y*H.y,c.x*H.z,c.y*H.w),q.viewport(u)}if(B.isPointLight){const H=Y.camera,ie=Y.matrix,ve=B.distance||H.far;ve!==H.far&&(H.far=ve,H.updateProjectionMatrix()),Cl.setFromMatrixPosition(B.matrixWorld),H.position.copy(Cl),Hd.copy(H.position),Hd.add(FA[b]),H.up.copy(zA[b]),H.lookAt(Hd),H.updateMatrixWorld(),ie.makeTranslation(-Cl.x,-Cl.y,-Cl.z),v_.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(v_,H.coordinateSystem,H.reversedDepth)}else Y.updateMatrices(B);s=Y.getFrustum(),A(O,E,Y.camera,B,this.type)}Y.isPointLightShadow!==!0&&this.type===Dl&&L(Y,E),Y.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(U,X,V)};function L(N,O){const E=e.update(R);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ni(l.x,l.y,{format:cr,type:di})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(O,null,E,v,R,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(O,null,E,_,R,null)}function P(N,O,E,U){let X=null;const V=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)X=V;else if(X=E.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const q=X.uuid,ue=O.uuid;let de=p[q];de===void 0&&(de={},p[q]=de);let Q=de[ue];Q===void 0&&(Q=X.clone(),de[ue]=Q,O.addEventListener("dispose",I)),X=Q}if(X.visible=O.visible,X.wireframe=O.wireframe,U===Dl?X.side=O.shadowSide!==null?O.shadowSide:O.side:X.side=O.shadowSide!==null?O.shadowSide:g[O.side],X.alphaMap=O.alphaMap,X.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,X.map=O.map,X.clipShadows=O.clipShadows,X.clippingPlanes=O.clippingPlanes,X.clipIntersection=O.clipIntersection,X.displacementMap=O.displacementMap,X.displacementScale=O.displacementScale,X.displacementBias=O.displacementBias,X.wireframeLinewidth=O.wireframeLinewidth,X.linewidth=O.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const q=r.properties.get(X);q.light=E}return X}function A(N,O,E,U,X){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&X===Dl)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const ue=e.update(N),de=N.material;if(Array.isArray(de)){const Q=ue.groups;for(let B=0,Y=Q.length;B<Y;B++){const ne=Q[B],me=de[ne.materialIndex];if(me&&me.visible){const G=P(N,me,U,X);N.onBeforeShadow(r,N,O,E,ue,G,ne),r.renderBufferDirect(E,null,ue,G,N,ne),N.onAfterShadow(r,N,O,E,ue,G,ne)}}}else if(de.visible){const Q=P(N,de,U,X);N.onBeforeShadow(r,N,O,E,ue,Q,null),r.renderBufferDirect(E,null,ue,Q,N,null),N.onAfterShadow(r,N,O,E,ue,Q,null)}}const q=N.children;for(let ue=0,de=q.length;ue<de;ue++)A(q[ue],O,E,U,X)}function I(N){N.target.removeEventListener("dispose",I);for(const E in p){const U=p[E],X=N.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function HA(r,e){function n(){let Z=!1;const De=new on;let Me=null;const Ue=new on(0,0,0,0);return{setMask:function(Ge){Me!==Ge&&!Z&&(r.colorMask(Ge,Ge,Ge,Ge),Me=Ge)},setLocked:function(Ge){Z=Ge},setClear:function(Ge,we,$e,qe,cn){cn===!0&&(Ge*=qe,we*=qe,$e*=qe),De.set(Ge,we,$e,qe),Ue.equals(De)===!1&&(r.clearColor(Ge,we,$e,qe),Ue.copy(De))},reset:function(){Z=!1,Me=null,Ue.set(-1,0,0,0)}}}function s(){let Z=!1,De=!1,Me=null,Ue=null,Ge=null;return{setReversed:function(we){if(De!==we){const $e=e.get("EXT_clip_control");we?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),De=we;const qe=Ge;Ge=null,this.setClear(qe)}},getReversed:function(){return De},setTest:function(we){we?pe(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(we){Me!==we&&!Z&&(r.depthMask(we),Me=we)},setFunc:function(we){if(De&&(we=J1[we]),Ue!==we){switch(we){case $d:r.depthFunc(r.NEVER);break;case ep:r.depthFunc(r.ALWAYS);break;case tp:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case np:r.depthFunc(r.EQUAL);break;case ip:r.depthFunc(r.GEQUAL);break;case ap:r.depthFunc(r.GREATER);break;case sp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=we}},setLocked:function(we){Z=we},setClear:function(we){Ge!==we&&(Ge=we,De&&(we=1-we),r.clearDepth(we))},reset:function(){Z=!1,Me=null,Ue=null,Ge=null,De=!1}}}function l(){let Z=!1,De=null,Me=null,Ue=null,Ge=null,we=null,$e=null,qe=null,cn=null;return{setTest:function(Vt){Z||(Vt?pe(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(Vt){De!==Vt&&!Z&&(r.stencilMask(Vt),De=Vt)},setFunc:function(Vt,pi,mi){(Me!==Vt||Ue!==pi||Ge!==mi)&&(r.stencilFunc(Vt,pi,mi),Me=Vt,Ue=pi,Ge=mi)},setOp:function(Vt,pi,mi){(we!==Vt||$e!==pi||qe!==mi)&&(r.stencilOp(Vt,pi,mi),we=Vt,$e=pi,qe=mi)},setLocked:function(Vt){Z=Vt},setClear:function(Vt){cn!==Vt&&(r.clearStencil(Vt),cn=Vt)},reset:function(){Z=!1,De=null,Me=null,Ue=null,Ge=null,we=null,$e=null,qe=null,cn=null}}}const c=new n,u=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},v={},_=new WeakMap,T=[],R=null,S=!1,y=null,L=null,P=null,A=null,I=null,N=null,O=null,E=new ht(0,0,0),U=0,X=!1,V=null,q=null,ue=null,de=null,Q=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const me=r.getParameter(r.VERSION);me.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(me)[1]),Y=ne>=1):me.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),Y=ne>=2);let G=null,b={};const H=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),ve=new on().fromArray(H),Ee=new on().fromArray(ie);function K(Z,De,Me,Ue){const Ge=new Uint8Array(4),we=r.createTexture();r.bindTexture(Z,we),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<Me;$e++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(De+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return we}const ae={};ae[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),pe(r.DEPTH_TEST),u.setFunc(yo),Qe(!1),Je(dx),pe(r.CULL_FACE),ot(pa);function pe(Z){x[Z]!==!0&&(r.enable(Z),x[Z]=!0)}function Ce(Z){x[Z]!==!1&&(r.disable(Z),x[Z]=!1)}function Ve(Z,De){return v[Z]!==De?(r.bindFramebuffer(Z,De),v[Z]=De,Z===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=De),Z===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Ne(Z,De){let Me=T,Ue=!1;if(Z){Me=_.get(De),Me===void 0&&(Me=[],_.set(De,Me));const Ge=Z.textures;if(Me.length!==Ge.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let we=0,$e=Ge.length;we<$e;we++)Me[we]=r.COLOR_ATTACHMENT0+we;Me.length=Ge.length,Ue=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(Me)}function ct(Z){return R!==Z?(r.useProgram(Z),R=Z,!0):!1}const tt={[ir]:r.FUNC_ADD,[y1]:r.FUNC_SUBTRACT,[S1]:r.FUNC_REVERSE_SUBTRACT};tt[M1]=r.MIN,tt[b1]=r.MAX;const ke={[E1]:r.ZERO,[T1]:r.ONE,[w1]:r.SRC_COLOR,[Qd]:r.SRC_ALPHA,[N1]:r.SRC_ALPHA_SATURATE,[D1]:r.DST_COLOR,[C1]:r.DST_ALPHA,[A1]:r.ONE_MINUS_SRC_COLOR,[Jd]:r.ONE_MINUS_SRC_ALPHA,[L1]:r.ONE_MINUS_DST_COLOR,[R1]:r.ONE_MINUS_DST_ALPHA,[U1]:r.CONSTANT_COLOR,[O1]:r.ONE_MINUS_CONSTANT_COLOR,[P1]:r.CONSTANT_ALPHA,[I1]:r.ONE_MINUS_CONSTANT_ALPHA};function ot(Z,De,Me,Ue,Ge,we,$e,qe,cn,Vt){if(Z===pa){S===!0&&(Ce(r.BLEND),S=!1);return}if(S===!1&&(pe(r.BLEND),S=!0),Z!==_1){if(Z!==y||Vt!==X){if((L!==ir||I!==ir)&&(r.blendEquation(r.FUNC_ADD),L=ir,I=ir),Vt)switch(Z){case go:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Iu:r.blendFunc(r.ONE,r.ONE);break;case px:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ut("WebGLState: Invalid blending: ",Z);break}else switch(Z){case go:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Iu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case px:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mx:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Z);break}P=null,A=null,N=null,O=null,E.set(0,0,0),U=0,y=Z,X=Vt}return}Ge=Ge||De,we=we||Me,$e=$e||Ue,(De!==L||Ge!==I)&&(r.blendEquationSeparate(tt[De],tt[Ge]),L=De,I=Ge),(Me!==P||Ue!==A||we!==N||$e!==O)&&(r.blendFuncSeparate(ke[Me],ke[Ue],ke[we],ke[$e]),P=Me,A=Ue,N=we,O=$e),(qe.equals(E)===!1||cn!==U)&&(r.blendColor(qe.r,qe.g,qe.b,cn),E.copy(qe),U=cn),y=Z,X=!1}function Ae(Z,De){Z.side===Qi?Ce(r.CULL_FACE):pe(r.CULL_FACE);let Me=Z.side===ti;De&&(Me=!Me),Qe(Me),Z.blending===go&&Z.transparent===!1?ot(pa):ot(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Ue=Z.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(Z.stencilWriteMask),d.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),d.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Rt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(Z){V!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),V=Z)}function Je(Z){Z!==g1?(pe(r.CULL_FACE),Z!==q&&(Z===dx?r.cullFace(r.BACK):Z===v1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),q=Z}function ut(Z){Z!==ue&&(Y&&r.lineWidth(Z),ue=Z)}function Rt(Z,De,Me){Z?(pe(r.POLYGON_OFFSET_FILL),(de!==De||Q!==Me)&&(de=De,Q=Me,u.getReversed()&&(De=-De),r.polygonOffset(De,Me))):Ce(r.POLYGON_OFFSET_FILL)}function Lt(Z){Z?pe(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function $t(Z){Z===void 0&&(Z=r.TEXTURE0+B-1),G!==Z&&(r.activeTexture(Z),G=Z)}function J(Z,De,Me){Me===void 0&&(G===null?Me=r.TEXTURE0+B-1:Me=G);let Ue=b[Me];Ue===void 0&&(Ue={type:void 0,texture:void 0},b[Me]=Ue),(Ue.type!==Z||Ue.texture!==De)&&(G!==Me&&(r.activeTexture(Me),G=Me),r.bindTexture(Z,De||ae[Z]),Ue.type=Z,Ue.texture=De)}function zt(){const Z=b[G];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Nt(){try{r.compressedTexImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function w(){try{r.texSubImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function te(){try{r.texSubImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Re(){try{r.texStorage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Oe(){try{r.texStorage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function _e(){try{r.texImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function ye(){try{r.texImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Le(Z){return g[Z]!==void 0?g[Z]:r.getParameter(Z)}function Ye(Z,De){g[Z]!==De&&(r.pixelStorei(Z,De),g[Z]=De)}function Fe(Z){ve.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),ve.copy(Z))}function Pe(Z){Ee.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Ee.copy(Z))}function it(Z,De){let Me=p.get(De);Me===void 0&&(Me=new WeakMap,p.set(De,Me));let Ue=Me.get(Z);Ue===void 0&&(Ue=r.getUniformBlockIndex(De,Z.name),Me.set(Z,Ue))}function at(Z,De){const Ue=p.get(De).get(Z);m.get(De)!==Ue&&(r.uniformBlockBinding(De,Ue,Z.__bindingPointIndex),m.set(De,Ue))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},g={},G=null,b={},v={},_=new WeakMap,T=[],R=null,S=!1,y=null,L=null,P=null,A=null,I=null,N=null,O=null,E=new ht(0,0,0),U=0,X=!1,V=null,q=null,ue=null,de=null,Q=null,ve.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:pe,disable:Ce,bindFramebuffer:Ve,drawBuffers:Ne,useProgram:ct,setBlending:ot,setMaterial:Ae,setFlipSided:Qe,setCullFace:Je,setLineWidth:ut,setPolygonOffset:Rt,setScissorTest:Lt,activeTexture:$t,bindTexture:J,unbindTexture:zt,compressedTexImage2D:Nt,compressedTexImage3D:z,texImage2D:_e,texImage3D:ye,pixelStorei:Ye,getParameter:Le,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Re,texStorage3D:Oe,texSubImage2D:w,texSubImage3D:te,compressedTexSubImage2D:ce,compressedTexSubImage3D:xe,scissor:Fe,viewport:Pe,reset:pt}}function GA(r,e,n,s,l,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new He,x=new WeakMap,g=new Set;let v;const _=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(z,w){return T?new OffscreenCanvas(z,w):Gl("canvas")}function S(z,w,te){let ce=1;const xe=Nt(z);if((xe.width>te||xe.height>te)&&(ce=te/Math.max(xe.width,xe.height)),ce<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Re=Math.floor(ce*xe.width),Oe=Math.floor(ce*xe.height);v===void 0&&(v=R(Re,Oe));const _e=w?R(Re,Oe):v;return _e.width=Re,_e.height=Oe,_e.getContext("2d").drawImage(z,0,0,Re,Oe),dt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Re+"x"+Oe+")."),_e}else return"data"in z&&dt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),z;return z}function y(z){return z.generateMipmaps}function L(z){r.generateMipmap(z)}function P(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(z,w,te,ce,xe,Re=!1){if(z!==null){if(r[z]!==void 0)return r[z];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Oe;ce&&(Oe=e.get("EXT_texture_norm16"),Oe||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=w;if(w===r.RED&&(te===r.FLOAT&&(_e=r.R32F),te===r.HALF_FLOAT&&(_e=r.R16F),te===r.UNSIGNED_BYTE&&(_e=r.R8),te===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.R16_EXT),te===r.SHORT&&Oe&&(_e=Oe.R16_SNORM_EXT)),w===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(_e=r.R8UI),te===r.UNSIGNED_SHORT&&(_e=r.R16UI),te===r.UNSIGNED_INT&&(_e=r.R32UI),te===r.BYTE&&(_e=r.R8I),te===r.SHORT&&(_e=r.R16I),te===r.INT&&(_e=r.R32I)),w===r.RG&&(te===r.FLOAT&&(_e=r.RG32F),te===r.HALF_FLOAT&&(_e=r.RG16F),te===r.UNSIGNED_BYTE&&(_e=r.RG8),te===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RG16_EXT),te===r.SHORT&&Oe&&(_e=Oe.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(_e=r.RG8UI),te===r.UNSIGNED_SHORT&&(_e=r.RG16UI),te===r.UNSIGNED_INT&&(_e=r.RG32UI),te===r.BYTE&&(_e=r.RG8I),te===r.SHORT&&(_e=r.RG16I),te===r.INT&&(_e=r.RG32I)),w===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(_e=r.RGB8UI),te===r.UNSIGNED_SHORT&&(_e=r.RGB16UI),te===r.UNSIGNED_INT&&(_e=r.RGB32UI),te===r.BYTE&&(_e=r.RGB8I),te===r.SHORT&&(_e=r.RGB16I),te===r.INT&&(_e=r.RGB32I)),w===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(_e=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(_e=r.RGBA16UI),te===r.UNSIGNED_INT&&(_e=r.RGBA32UI),te===r.BYTE&&(_e=r.RGBA8I),te===r.SHORT&&(_e=r.RGBA16I),te===r.INT&&(_e=r.RGBA32I)),w===r.RGB&&(te===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RGB16_EXT),te===r.SHORT&&Oe&&(_e=Oe.RGB16_SNORM_EXT),te===r.UNSIGNED_INT_5_9_9_9_REV&&(_e=r.RGB9_E5),te===r.UNSIGNED_INT_10F_11F_11F_REV&&(_e=r.R11F_G11F_B10F)),w===r.RGBA){const ye=Re?Hu:Ct.getTransfer(xe);te===r.FLOAT&&(_e=r.RGBA32F),te===r.HALF_FLOAT&&(_e=r.RGBA16F),te===r.UNSIGNED_BYTE&&(_e=ye===Gt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RGBA16_EXT),te===r.SHORT&&Oe&&(_e=Oe.RGBA16_SNORM_EXT),te===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function I(z,w){let te;return z?w===null||w===ga||w===Bl?te=r.DEPTH24_STENCIL8:w===ea?te=r.DEPTH32F_STENCIL8:w===zl&&(te=r.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ga||w===Bl?te=r.DEPTH_COMPONENT24:w===ea?te=r.DEPTH_COMPONENT32F:w===zl&&(te=r.DEPTH_COMPONENT16),te}function N(z,w){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==kn&&z.minFilter!==Kn?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function O(z){const w=z.target;w.removeEventListener("dispose",O),U(w),w.isVideoTexture&&x.delete(w),w.isHTMLTexture&&g.delete(w)}function E(z){const w=z.target;w.removeEventListener("dispose",E),V(w)}function U(z){const w=s.get(z);if(w.__webglInit===void 0)return;const te=z.source,ce=_.get(te);if(ce){const xe=ce[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&X(z),Object.keys(ce).length===0&&_.delete(te)}s.remove(z)}function X(z){const w=s.get(z);r.deleteTexture(w.__webglTexture);const te=z.source,ce=_.get(te);delete ce[w.__cacheKey],u.memory.textures--}function V(z){const w=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(w.__webglFramebuffer[ce]))for(let xe=0;xe<w.__webglFramebuffer[ce].length;xe++)r.deleteFramebuffer(w.__webglFramebuffer[ce][xe]);else r.deleteFramebuffer(w.__webglFramebuffer[ce]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ce])}else{if(Array.isArray(w.__webglFramebuffer))for(let ce=0;ce<w.__webglFramebuffer.length;ce++)r.deleteFramebuffer(w.__webglFramebuffer[ce]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ce=0;ce<w.__webglColorRenderbuffer.length;ce++)w.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ce]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=z.textures;for(let ce=0,xe=te.length;ce<xe;ce++){const Re=s.get(te[ce]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),u.memory.textures--),s.remove(te[ce])}s.remove(z)}let q=0;function ue(){q=0}function de(){return q}function Q(z){q=z}function B(){const z=q;return z>=l.maxTextures&&dt("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),q+=1,z}function Y(z){const w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function ne(z,w){const te=s.get(z);if(z.isVideoTexture&&J(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&te.__version!==z.version){const ce=z.image;if(ce===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(te,z,w);return}}else z.isExternalTexture&&(te.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+w)}function me(z,w){const te=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&te.__version!==z.version){Ce(te,z,w);return}else z.isExternalTexture&&(te.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+w)}function G(z,w){const te=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&te.__version!==z.version){Ce(te,z,w);return}n.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+w)}function b(z,w){const te=s.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&te.__version!==z.version){Ve(te,z,w);return}n.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+w)}const H={[Gn]:r.REPEAT,[Vn]:r.CLAMP_TO_EDGE,[rp]:r.MIRRORED_REPEAT},ie={[kn]:r.NEAREST,[B1]:r.NEAREST_MIPMAP_NEAREST,[nu]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[ud]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},ve={[V1]:r.NEVER,[q1]:r.ALWAYS,[k1]:r.LESS,[sm]:r.LEQUAL,[Y1]:r.EQUAL,[rm]:r.GEQUAL,[X1]:r.GREATER,[W1]:r.NOTEQUAL};function Ee(z,w){if(w.type===ea&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kn||w.magFilter===ud||w.magFilter===nu||w.magFilter===sr||w.minFilter===Kn||w.minFilter===ud||w.minFilter===nu||w.minFilter===sr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,H[w.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,H[w.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,H[w.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,ie[w.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,ve[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kn||w.minFilter!==nu&&w.minFilter!==sr||w.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function K(z,w){let te=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",O));const ce=w.source;let xe=_.get(ce);xe===void 0&&(xe={},_.set(ce,xe));const Re=Y(w);if(Re!==z.__cacheKey){xe[Re]===void 0&&(xe[Re]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,te=!0),xe[Re].usedTimes++;const Oe=xe[z.__cacheKey];Oe!==void 0&&(xe[z.__cacheKey].usedTimes--,Oe.usedTimes===0&&X(w)),z.__cacheKey=Re,z.__webglTexture=xe[Re].texture}return te}function ae(z,w,te){return Math.floor(Math.floor(z/te)/w)}function pe(z,w,te,ce){const Re=z.updateRanges;if(Re.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,te,ce,w.data);else{Re.sort((Ye,Fe)=>Ye.start-Fe.start);let Oe=0;for(let Ye=1;Ye<Re.length;Ye++){const Fe=Re[Oe],Pe=Re[Ye],it=Fe.start+Fe.count,at=ae(Pe.start,w.width,4),pt=ae(Fe.start,w.width,4);Pe.start<=it+1&&at===pt&&ae(Pe.start+Pe.count-1,w.width,4)===at?Fe.count=Math.max(Fe.count,Pe.start+Pe.count-Fe.start):(++Oe,Re[Oe]=Pe)}Re.length=Oe+1;const _e=n.getParameter(r.UNPACK_ROW_LENGTH),ye=n.getParameter(r.UNPACK_SKIP_PIXELS),Le=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Ye=0,Fe=Re.length;Ye<Fe;Ye++){const Pe=Re[Ye],it=Math.floor(Pe.start/4),at=Math.ceil(Pe.count/4),pt=it%w.width,Z=Math.floor(it/w.width),De=at,Me=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(r.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(r.TEXTURE_2D,0,pt,Z,De,Me,te,ce,w.data)}z.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,_e),n.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function Ce(z,w,te){let ce=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=r.TEXTURE_3D);const xe=K(z,w),Re=w.source;n.bindTexture(ce,z.__webglTexture,r.TEXTURE0+te);const Oe=s.get(Re);if(Re.version!==Oe.__version||xe===!0){if(n.activeTexture(r.TEXTURE0+te),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Me=Ct.getPrimaries(Ct.workingColorSpace),Ue=w.colorSpace===ka?null:Ct.getPrimaries(w.colorSpace),Ge=w.colorSpace===ka||Me===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let ye=S(w.image,!1,l.maxTextureSize);ye=zt(w,ye);const Le=c.convert(w.format,w.colorSpace),Ye=c.convert(w.type);let Fe=A(w.internalFormat,Le,Ye,w.normalized,w.colorSpace,w.isVideoTexture);Ee(ce,w);let Pe;const it=w.mipmaps,at=w.isVideoTexture!==!0,pt=Oe.__version===void 0||xe===!0,Z=Re.dataReady,De=N(w,ye);if(w.isDepthTexture)Fe=I(w.format===rr,w.type),pt&&(at?n.texStorage2D(r.TEXTURE_2D,1,Fe,ye.width,ye.height):n.texImage2D(r.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Le,Ye,null));else if(w.isDataTexture)if(it.length>0){at&&pt&&n.texStorage2D(r.TEXTURE_2D,De,Fe,it[0].width,it[0].height);for(let Me=0,Ue=it.length;Me<Ue;Me++)Pe=it[Me],at?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Le,Ye,Pe.data):n.texImage2D(r.TEXTURE_2D,Me,Fe,Pe.width,Pe.height,0,Le,Ye,Pe.data);w.generateMipmaps=!1}else at?(pt&&n.texStorage2D(r.TEXTURE_2D,De,Fe,ye.width,ye.height),Z&&pe(w,ye,Le,Ye)):n.texImage2D(r.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Le,Ye,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&pt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,De,Fe,it[0].width,it[0].height,ye.depth);for(let Me=0,Ue=it.length;Me<Ue;Me++)if(Pe=it[Me],w.format!==ta)if(Le!==null)if(at){if(Z)if(w.layerUpdates.size>0){const Ge=Zx(Pe.width,Pe.height,w.format,w.type);for(const we of w.layerUpdates){const $e=Pe.data.subarray(we*Ge/Pe.data.BYTES_PER_ELEMENT,(we+1)*Ge/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,we,Pe.width,Pe.height,1,Le,$e)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ye.depth,Le,Pe.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Fe,Pe.width,Pe.height,ye.depth,0,Pe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Z&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ye.depth,Le,Ye,Pe.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Me,Fe,Pe.width,Pe.height,ye.depth,0,Le,Ye,Pe.data)}else{at&&pt&&n.texStorage2D(r.TEXTURE_2D,De,Fe,it[0].width,it[0].height);for(let Me=0,Ue=it.length;Me<Ue;Me++)Pe=it[Me],w.format!==ta?Le!==null?at?Z&&n.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Le,Pe.data):n.compressedTexImage2D(r.TEXTURE_2D,Me,Fe,Pe.width,Pe.height,0,Pe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Le,Ye,Pe.data):n.texImage2D(r.TEXTURE_2D,Me,Fe,Pe.width,Pe.height,0,Le,Ye,Pe.data)}else if(w.isDataArrayTexture)if(at){if(pt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,De,Fe,ye.width,ye.height,ye.depth),Z)if(w.layerUpdates.size>0){const Me=Zx(ye.width,ye.height,w.format,w.type);for(const Ue of w.layerUpdates){const Ge=ye.data.subarray(Ue*Me/ye.data.BYTES_PER_ELEMENT,(Ue+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,ye.width,ye.height,1,Le,Ye,Ge)}w.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Le,Ye,ye.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,Le,Ye,ye.data);else if(w.isData3DTexture)at?(pt&&n.texStorage3D(r.TEXTURE_3D,De,Fe,ye.width,ye.height,ye.depth),Z&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Le,Ye,ye.data)):n.texImage3D(r.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,Le,Ye,ye.data);else if(w.isFramebufferTexture){if(pt)if(at)n.texStorage2D(r.TEXTURE_2D,De,Fe,ye.width,ye.height);else{let Me=ye.width,Ue=ye.height;for(let Ge=0;Ge<De;Ge++)n.texImage2D(r.TEXTURE_2D,Ge,Fe,Me,Ue,0,Le,Ye,null),Me>>=1,Ue>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ye.parentNode!==Me){Me.appendChild(ye),g.add(w),Me.onpaint=Ue=>{const Ge=Ue.changedElements;for(const we of g)Ge.includes(we.image)&&(we.needsUpdate=!0)},Me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ye);else{const Ge=r.RGBA,we=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,we,$e,ye)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&pt){const Me=Nt(it[0]);n.texStorage2D(r.TEXTURE_2D,De,Fe,Me.width,Me.height)}for(let Me=0,Ue=it.length;Me<Ue;Me++)Pe=it[Me],at?Z&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Le,Ye,Pe):n.texImage2D(r.TEXTURE_2D,Me,Fe,Le,Ye,Pe);w.generateMipmaps=!1}else if(at){if(pt){const Me=Nt(ye);n.texStorage2D(r.TEXTURE_2D,De,Fe,Me.width,Me.height)}Z&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,Ye,ye)}else n.texImage2D(r.TEXTURE_2D,0,Fe,Le,Ye,ye);y(w)&&L(ce),Oe.__version=Re.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function Ve(z,w,te){if(w.image.length!==6)return;const ce=K(z,w),xe=w.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+te);const Re=s.get(xe);if(xe.version!==Re.__version||ce===!0){n.activeTexture(r.TEXTURE0+te);const Oe=Ct.getPrimaries(Ct.workingColorSpace),_e=w.colorSpace===ka?null:Ct.getPrimaries(w.colorSpace),ye=w.colorSpace===ka||Oe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,Ye=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let we=0;we<6;we++)!Le&&!Ye?Fe[we]=S(w.image[we],!0,l.maxCubemapSize):Fe[we]=Ye?w.image[we].image:w.image[we],Fe[we]=zt(w,Fe[we]);const Pe=Fe[0],it=c.convert(w.format,w.colorSpace),at=c.convert(w.type),pt=A(w.internalFormat,it,at,w.normalized,w.colorSpace),Z=w.isVideoTexture!==!0,De=Re.__version===void 0||ce===!0,Me=xe.dataReady;let Ue=N(w,Pe);Ee(r.TEXTURE_CUBE_MAP,w);let Ge;if(Le){Z&&De&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,pt,Pe.width,Pe.height);for(let we=0;we<6;we++){Ge=Fe[we].mipmaps;for(let $e=0;$e<Ge.length;$e++){const qe=Ge[$e];w.format!==ta?it!==null?Z?Me&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,0,0,qe.width,qe.height,it,qe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,pt,qe.width,qe.height,0,qe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,0,0,qe.width,qe.height,it,at,qe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,pt,qe.width,qe.height,0,it,at,qe.data)}}}else{if(Ge=w.mipmaps,Z&&De){Ge.length>0&&Ue++;const we=Nt(Fe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,pt,we.width,we.height)}for(let we=0;we<6;we++)if(Ye){Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Fe[we].width,Fe[we].height,it,at,Fe[we].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,pt,Fe[we].width,Fe[we].height,0,it,at,Fe[we].data);for(let $e=0;$e<Ge.length;$e++){const cn=Ge[$e].image[we].image;Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,0,0,cn.width,cn.height,it,at,cn.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,pt,cn.width,cn.height,0,it,at,cn.data)}}else{Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,it,at,Fe[we]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,pt,it,at,Fe[we]);for(let $e=0;$e<Ge.length;$e++){const qe=Ge[$e];Z?Me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,0,0,it,at,qe.image[we]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,pt,it,at,qe.image[we])}}}y(w)&&L(r.TEXTURE_CUBE_MAP),Re.__version=xe.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function Ne(z,w,te,ce,xe,Re){const Oe=c.convert(te.format,te.colorSpace),_e=c.convert(te.type),ye=A(te.internalFormat,Oe,_e,te.normalized,te.colorSpace),Le=s.get(w),Ye=s.get(te);if(Ye.__renderTarget=w,!Le.__hasExternalTextures){const Fe=Math.max(1,w.width>>Re),Pe=Math.max(1,w.height>>Re);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?n.texImage3D(xe,Re,ye,Fe,Pe,w.depth,0,Oe,_e,null):n.texImage2D(xe,Re,ye,Fe,Pe,0,Oe,_e,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),$t(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,xe,Ye.__webglTexture,0,Lt(w)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,xe,Ye.__webglTexture,Re),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(z,w,te){if(r.bindRenderbuffer(r.RENDERBUFFER,z),w.depthBuffer){const ce=w.depthTexture,xe=ce&&ce.isDepthTexture?ce.type:null,Re=I(w.stencilBuffer,xe),Oe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$t(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt(w),Re,w.width,w.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt(w),Re,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Re,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,z)}else{const ce=w.textures;for(let xe=0;xe<ce.length;xe++){const Re=ce[xe],Oe=c.convert(Re.format,Re.colorSpace),_e=c.convert(Re.type),ye=A(Re.internalFormat,Oe,_e,Re.normalized,Re.colorSpace);$t(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt(w),ye,w.width,w.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt(w),ye,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ye,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function tt(z,w,te){const ce=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=s.get(w.depthTexture);if(xe.__renderTarget=w,(!xe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ce){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),xe.__webglTexture===void 0){xe.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,w.depthTexture);const Le=c.convert(w.depthTexture.format),Ye=c.convert(w.depthTexture.type);let Fe;w.depthTexture.format===Wa?Fe=r.DEPTH_COMPONENT24:w.depthTexture.format===rr&&(Fe=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Fe,w.width,w.height,0,Le,Ye,null)}}else ne(w.depthTexture,0);const Re=xe.__webglTexture,Oe=Lt(w),_e=ce?r.TEXTURE_CUBE_MAP_POSITIVE_X+te:r.TEXTURE_2D,ye=w.depthTexture.format===rr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===Wa)$t(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,_e,Re,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,_e,Re,0);else if(w.depthTexture.format===rr)$t(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,_e,Re,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,_e,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(z){const w=s.get(z),te=z.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==z.depthTexture){const ce=z.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ce){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ce.removeEventListener("dispose",xe)};ce.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=ce}if(z.depthTexture&&!w.__autoAllocateDepthBuffer)if(te)for(let ce=0;ce<6;ce++)tt(w.__webglFramebuffer[ce],z,ce);else{const ce=z.texture.mipmaps;ce&&ce.length>0?tt(w.__webglFramebuffer[0],z,0):tt(w.__webglFramebuffer,z,0)}else if(te){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]===void 0)w.__webglDepthbuffer[ce]=r.createRenderbuffer(),ct(w.__webglDepthbuffer[ce],z,!1);else{const xe=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Re)}}else{const ce=z.texture.mipmaps;if(ce&&ce.length>0?n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ct(w.__webglDepthbuffer,z,!1);else{const xe=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Re)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(z,w,te){const ce=s.get(z);w!==void 0&&Ne(ce.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&ke(z)}function Ae(z){const w=z.texture,te=s.get(z),ce=s.get(w);z.addEventListener("dispose",E);const xe=z.textures,Re=z.isWebGLCubeRenderTarget===!0,Oe=xe.length>1;if(Oe||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=w.version,u.memory.textures++),Re){te.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[_e]=[];for(let ye=0;ye<w.mipmaps.length;ye++)te.__webglFramebuffer[_e][ye]=r.createFramebuffer()}else te.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)te.__webglFramebuffer[_e]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let _e=0,ye=xe.length;_e<ye;_e++){const Le=s.get(xe[_e]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&$t(z)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let _e=0;_e<xe.length;_e++){const ye=xe[_e];te.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[_e]);const Le=c.convert(ye.format,ye.colorSpace),Ye=c.convert(ye.type),Fe=A(ye.internalFormat,Le,Ye,ye.normalized,ye.colorSpace,z.isXRRenderTarget===!0),Pe=Lt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Fe,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,te.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(te.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Re){n.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,w);for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)Ne(te.__webglFramebuffer[_e][ye],z,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else Ne(te.__webglFramebuffer[_e],z,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);y(w)&&L(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let _e=0,ye=xe.length;_e<ye;_e++){const Le=xe[_e],Ye=s.get(Le);let Fe=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Fe=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Fe,Ye.__webglTexture),Ee(Fe,Le),Ne(te.__webglFramebuffer,z,Le,r.COLOR_ATTACHMENT0+_e,Fe,0),y(Le)&&L(Fe)}n.unbindTexture()}else{let _e=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(_e=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(_e,ce.__webglTexture),Ee(_e,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)Ne(te.__webglFramebuffer[ye],z,w,r.COLOR_ATTACHMENT0,_e,ye);else Ne(te.__webglFramebuffer,z,w,r.COLOR_ATTACHMENT0,_e,0);y(w)&&L(_e),n.unbindTexture()}z.depthBuffer&&ke(z)}function Qe(z){const w=z.textures;for(let te=0,ce=w.length;te<ce;te++){const xe=w[te];if(y(xe)){const Re=P(z),Oe=s.get(xe).__webglTexture;n.bindTexture(Re,Oe),L(Re),n.unbindTexture()}}}const Je=[],ut=[];function Rt(z){if(z.samples>0){if($t(z)===!1){const w=z.textures,te=z.width,ce=z.height;let xe=r.COLOR_BUFFER_BIT;const Re=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=s.get(z),_e=w.length>1;if(_e)for(let Le=0;Le<w.length;Le++)n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ye=z.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),_e){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const Ye=s.get(w[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ye,0)}r.blitFramebuffer(0,0,te,ce,0,0,te,ce,xe,r.NEAREST),m===!0&&(Je.length=0,ut.length=0,Je.push(r.COLOR_ATTACHMENT0+Le),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Je.push(Re),ut.push(Re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<w.length;Le++){n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const Ye=s.get(w[Le]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,Ye,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const w=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Lt(z){return Math.min(l.maxSamples,z.samples)}function $t(z){const w=s.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function J(z){const w=u.render.frame;x.get(z)!==w&&(x.set(z,w),z.update())}function zt(z,w){const te=z.colorSpace,ce=z.format,xe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||te!==Bu&&te!==ka&&(Ct.getTransfer(te)===Gt?(ce!==ta||xe!==Ai)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",te)),w}function Nt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=Q,this.setTexture2D=ne,this.setTexture2DArray=me,this.setTexture3D=G,this.setTextureCube=b,this.rebindTextures=ot,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function VA(r,e){function n(s,l=ka){let c;const u=Ct.getTransfer(l);if(s===Ai)return r.UNSIGNED_BYTE;if(s===$p)return r.UNSIGNED_SHORT_4_4_4_4;if(s===em)return r.UNSIGNED_SHORT_5_5_5_1;if(s===U_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===O_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===L_)return r.BYTE;if(s===N_)return r.SHORT;if(s===zl)return r.UNSIGNED_SHORT;if(s===Jp)return r.INT;if(s===ga)return r.UNSIGNED_INT;if(s===ea)return r.FLOAT;if(s===di)return r.HALF_FLOAT;if(s===P_)return r.ALPHA;if(s===I_)return r.RGB;if(s===ta)return r.RGBA;if(s===Wa)return r.DEPTH_COMPONENT;if(s===rr)return r.DEPTH_STENCIL;if(s===tm)return r.RED;if(s===nm)return r.RED_INTEGER;if(s===cr)return r.RG;if(s===im)return r.RG_INTEGER;if(s===am)return r.RGBA_INTEGER;if(s===Du||s===Lu||s===Nu||s===Uu)if(u===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===op||s===lp||s===cp||s===up)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===op)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===up)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fp||s===hp||s===dp||s===pp||s===mp||s===Fu||s===gp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===fp||s===hp)return u===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===dp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===pp)return c.COMPRESSED_R11_EAC;if(s===mp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Fu)return c.COMPRESSED_RG11_EAC;if(s===gp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vp||s===xp||s===_p||s===yp||s===Sp||s===Mp||s===bp||s===Ep||s===Tp||s===wp||s===Ap||s===Cp||s===Rp||s===Dp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===vp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_p)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ap)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lp||s===Np||s===Up)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Lp)return u===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Up)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Op||s===Pp||s===zu||s===Ip)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Op)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ip)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new q_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Un({vertexShader:kA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new lt(new kl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends ur{constructor(e,n){super();const s=this;let l=null,c=1,u=null,d="local-floor",m=1,p=null,x=null,g=null,v=null,_=null,T=null;const R=typeof XRWebGLBinding<"u",S=new XA,y={},L=n.getContextAttributes();let P=null,A=null;const I=[],N=[],O=new He;let E=null;const U=new hi;U.viewport=new on;const X=new hi;X.viewport=new on;const V=[U,X],q=new eE;let ue=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=I[K];return ae===void 0&&(ae=new gd,I[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=I[K];return ae===void 0&&(ae=new gd,I[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=I[K];return ae===void 0&&(ae=new gd,I[K]=ae),ae.getHandSpace()};function Q(K){const ae=N.indexOf(K.inputSource);if(ae===-1)return;const pe=I[ae];pe!==void 0&&(pe.update(K.inputSource,K.frame,p||u),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",Y);for(let K=0;K<I.length;K++){const ae=N[K];ae!==null&&(N[K]=null,I[K].disconnect(ae))}ue=null,de=null,S.reset();for(const K in y)delete y[K];e.setRenderTarget(P),_=null,v=null,g=null,l=null,A=null,Ee.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,n)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",B),l.addEventListener("inputsourceschange",Y),L.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ce=null,Ve=null;L.depth&&(Ve=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=L.stencil?rr:Wa,Ce=L.stencil?Bl:ga);const Ne={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Ne),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new ni(v.textureWidth,v.textureHeight,{format:ta,type:Ai,depthTexture:new Mo(v.textureWidth,v.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const pe={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};_=new XRWebGLLayer(l,n,pe),l.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),A=new ni(_.framebufferWidth,_.framebufferHeight,{format:ta,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await l.requestReferenceSpace(d),Ee.setContext(l),Ee.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(K){for(let ae=0;ae<K.removed.length;ae++){const pe=K.removed[ae],Ce=N.indexOf(pe);Ce>=0&&(N[Ce]=null,I[Ce].disconnect(pe))}for(let ae=0;ae<K.added.length;ae++){const pe=K.added[ae];let Ce=N.indexOf(pe);if(Ce===-1){for(let Ne=0;Ne<I.length;Ne++)if(Ne>=N.length){N.push(pe),Ce=Ne;break}else if(N[Ne]===null){N[Ne]=pe,Ce=Ne;break}if(Ce===-1)break}const Ve=I[Ce];Ve&&Ve.connect(pe)}}const ne=new k,me=new k;function G(K,ae,pe){ne.setFromMatrixPosition(ae.matrixWorld),me.setFromMatrixPosition(pe.matrixWorld);const Ce=ne.distanceTo(me),Ve=ae.projectionMatrix.elements,Ne=pe.projectionMatrix.elements,ct=Ve[14]/(Ve[10]-1),tt=Ve[14]/(Ve[10]+1),ke=(Ve[9]+1)/Ve[5],ot=(Ve[9]-1)/Ve[5],Ae=(Ve[8]-1)/Ve[0],Qe=(Ne[8]+1)/Ne[0],Je=ct*Ae,ut=ct*Qe,Rt=Ce/(-Ae+Qe),Lt=Rt*-Ae;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Lt),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ve[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const $t=ct+Rt,J=tt+Rt,zt=Je-Lt,Nt=ut+(Ce-Lt),z=ke*tt/J*$t,w=ot*tt/J*$t;K.projectionMatrix.makePerspective(zt,Nt,z,w,$t,J),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function b(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ae=K.near,pe=K.far;S.texture!==null&&(S.depthNear>0&&(ae=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),q.near=X.near=U.near=ae,q.far=X.far=U.far=pe,(ue!==q.near||de!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),ue=q.near,de=q.far),q.layers.mask=K.layers.mask|6,U.layers.mask=q.layers.mask&-5,X.layers.mask=q.layers.mask&-3;const Ce=K.parent,Ve=q.cameras;b(q,Ce);for(let Ne=0;Ne<Ve.length;Ne++)b(Ve[Ne],Ce);Ve.length===2?G(q,U,X):q.projectionMatrix.copy(U.projectionMatrix),H(K,q,Ce)};function H(K,ae,pe){pe===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&_===null))return m},this.setFoveation=function(K){m=K,v!==null&&(v.fixedFoveation=K),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(K){return y[K]};let ie=null;function ve(K,ae){if(x=ae.getViewerPose(p||u),T=ae,x!==null){const pe=x.views;_!==null&&(e.setRenderTargetFramebuffer(A,_.framebuffer),e.setRenderTarget(A));let Ce=!1;pe.length!==q.cameras.length&&(q.cameras.length=0,Ce=!0);for(let tt=0;tt<pe.length;tt++){const ke=pe[tt];let ot=null;if(_!==null)ot=_.getViewport(ke);else{const Qe=g.getViewSubImage(v,ke);ot=Qe.viewport,tt===0&&(e.setRenderTargetTextures(A,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(A))}let Ae=V[tt];Ae===void 0&&(Ae=new hi,Ae.layers.enable(tt),Ae.viewport=new on,V[tt]=Ae),Ae.matrix.fromArray(ke.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ke.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(ot.x,ot.y,ot.width,ot.height),tt===0&&(q.matrix.copy(Ae.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ce===!0&&q.cameras.push(Ae)}const Ve=l.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=s.getBinding();const tt=g.getDepthInformation(pe[0]);tt&&tt.isValid&&tt.texture&&S.init(tt,l.renderState)}if(Ve&&Ve.includes("camera-access")&&R){e.state.unbindTexture(),g=s.getBinding();for(let tt=0;tt<pe.length;tt++){const ke=pe[tt].camera;if(ke){let ot=y[ke];ot||(ot=new q_,y[ke]=ot);const Ae=g.getCameraImage(ke);ot.sourceTexture=Ae}}}}for(let pe=0;pe<I.length;pe++){const Ce=N[pe],Ve=I[pe];Ce!==null&&Ve!==void 0&&Ve.update(Ce,ae,p||u)}ie&&ie(K,ae),ae.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ae}),T=null}const Ee=new J_;Ee.setAnimationLoop(ve),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}}const qA=new Ft,sy=new vt;sy.set(-1,0,0,0,1,0,0,0,1);function jA(r,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,j_(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,L,P,A){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),g(S,y)):y.isMeshPhongMaterial?(c(S,y),x(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&_(S,y,A)):y.isMeshMatcapMaterial?(c(S,y),T(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),R(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?m(S,y,L,P):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ti&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ti&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),P=L.envMap,A=L.envMapRotation;P&&(S.envMap.value=P,S.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(A)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(sy),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,L,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=P*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function x(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function _(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,y){y.matcap&&(S.matcap.value=y.matcap)}function R(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ZA(r,e,n,s){let l={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,I){const N=I.program;s.uniformBlockBinding(A,N)}function p(A,I){let N=l[A.id];N===void 0&&(S(A),N=x(A),l[A.id]=N,A.addEventListener("dispose",L));const O=I.program;s.updateUBOMapping(A,O);const E=e.render.frame;c[A.id]!==E&&(v(A),c[A.id]=E)}function x(A){const I=g();A.__bindingPointIndex=I;const N=r.createBuffer(),O=A.__size,E=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,O,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,N),N}function g(){for(let A=0;A<d;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const I=l[A.id],N=A.uniforms,O=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let E=0,U=N.length;E<U;E++){const X=N[E];if(Array.isArray(X))for(let V=0,q=X.length;V<q;V++)_(X[V],E,V,O);else _(X,E,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(A,I,N,O){if(R(A,I,N,O)===!0){const E=A.__offset,U=A.value;if(Array.isArray(U)){let X=0;for(let V=0;V<U.length;V++){const q=U[V],ue=y(q);T(q,A.__data,X),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(X+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(U,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,A.__data)}}function T(A,I,N){typeof A=="number"||typeof A=="boolean"?I[0]=A:A.isMatrix3?(I[0]=A.elements[0],I[1]=A.elements[1],I[2]=A.elements[2],I[3]=0,I[4]=A.elements[3],I[5]=A.elements[4],I[6]=A.elements[5],I[7]=0,I[8]=A.elements[6],I[9]=A.elements[7],I[10]=A.elements[8],I[11]=0):ArrayBuffer.isView(A)?I.set(new A.constructor(A.buffer,A.byteOffset,I.length)):A.toArray(I,N)}function R(A,I,N,O){const E=A.value,U=I+"_"+N;if(O[U]===void 0)return typeof E=="number"||typeof E=="boolean"?O[U]=E:ArrayBuffer.isView(E)?O[U]=E.slice():O[U]=E.clone(),!0;{const X=O[U];if(typeof E=="number"||typeof E=="boolean"){if(X!==E)return O[U]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(X.equals(E)===!1)return X.copy(E),!0}}return!1}function S(A){const I=A.uniforms;let N=0;const O=16;for(let U=0,X=I.length;U<X;U++){const V=Array.isArray(I[U])?I[U]:[I[U]];for(let q=0,ue=V.length;q<ue;q++){const de=V[q],Q=Array.isArray(de.value)?de.value:[de.value];for(let B=0,Y=Q.length;B<Y;B++){const ne=Q[B],me=y(ne),G=N%O,b=G%me.boundary,H=G+b;N+=b,H!==0&&O-H<me.storage&&(N+=O-H),de.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=N,N+=me.storage}}}const E=N%O;return E>0&&(N+=O-E),A.__size=N,A.__cache={},this}function y(A){const I={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(I.boundary=4,I.storage=4):A.isVector2?(I.boundary=8,I.storage=8):A.isVector3||A.isColor?(I.boundary=16,I.storage=12):A.isVector4?(I.boundary=16,I.storage=16):A.isMatrix3?(I.boundary=48,I.storage=48):A.isMatrix4?(I.boundary=64,I.storage=64):A.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(I.boundary=16,I.storage=A.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",A),I}function L(A){const I=A.target;I.removeEventListener("dispose",L);const N=u.indexOf(I.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function P(){for(const A in l)r.deleteBuffer(l[A]);u=[],l={},c={}}return{bind:m,update:p,dispose:P}}const KA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function QA(){return ca===null&&(ca=new Y_(KA,16,16,cr,di),ca.name="DFG_LUT",ca.minFilter=Kn,ca.magFilter=Kn,ca.wrapS=Vn,ca.wrapT=Vn,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class JA{constructor(e={}){const{canvas:n=K1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:_=Ai}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=u;const R=_,S=new Set([am,im,nm]),y=new Set([Ai,ga,zl,Bl,$p,em]),L=new Uint32Array(4),P=new Int32Array(4),A=new k;let I=null,N=null;const O=[],E=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,q=null,ue=null,de=null,Q=null;this._outputColorSpace=fi;let B=0,Y=0,ne=null,me=-1,G=null;const b=new on,H=new on;let ie=null;const ve=new ht(0);let Ee=0,K=n.width,ae=n.height,pe=1,Ce=null,Ve=null;const Ne=new on(0,0,K,ae),ct=new on(0,0,K,ae);let tt=!1;const ke=new Yu;let ot=!1,Ae=!1;const Qe=new Ft,Je=new k,ut=new on,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function $t(){return ne===null?pe:1}let J=s;function zt(C,$){return n.getContext(C,$)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xp}`),n.addEventListener("webglcontextlost",cn,!1),n.addEventListener("webglcontextrestored",Vt,!1),n.addEventListener("webglcontextcreationerror",pi,!1),J===null){const $="webgl2";if(J=zt($,C),J===null)throw zt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Ut("WebGLRenderer: "+C.message),C}let Nt,z,w,te,ce,xe,Re,Oe,_e,ye,Le,Ye,Fe,Pe,it,at,pt,Z,De,Me,Ue,Ge,we;function $e(){Nt=new Q2(J),Nt.init(),Ue=new VA(J,Nt),z=new k2(J,Nt,e,Ue),w=new HA(J,Nt),z.reversedDepthBuffer&&v&&w.buffers.depth.setReversed(!0),ue=J.createFramebuffer(),de=J.createFramebuffer(),Q=J.createFramebuffer(),te=new ew(J),ce=new wA,xe=new GA(J,Nt,w,ce,z,Ue,te),Re=new K2(X),Oe=new aE(J),Ge=new G2(J,Oe),_e=new J2(J,Oe,te,Ge),ye=new nw(J,_e,Oe,Ge,te),Z=new tw(J,z,xe),it=new Y2(ce),Le=new TA(X,Re,Nt,z,Ge,it),Ye=new jA(X,ce),Fe=new CA,Pe=new OA(Nt),pt=new H2(X,Re,w,ye,T,m),at=new BA(X,ye,z),we=new ZA(J,te,z,w),De=new V2(J,Nt,te),Me=new $2(J,Nt,te),te.programs=Le.programs,X.capabilities=z,X.extensions=Nt,X.properties=ce,X.renderLists=Fe,X.shadowMap=at,X.state=w,X.info=te}$e(),R!==Ai&&(U=new aw(R,n.width,n.height,d,l,c));const qe=new WA(X,J);this.xr=qe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const C=Nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(K,ae,!1))},this.getSize=function(C){return C.set(K,ae)},this.setSize=function(C,$,fe=!0){if(qe.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,ae=$,n.width=Math.floor(C*pe),n.height=Math.floor($*pe),fe===!0&&(n.style.width=C+"px",n.style.height=$+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(K*pe,ae*pe).floor()},this.setDrawingBufferSize=function(C,$,fe){K=C,ae=$,pe=fe,n.width=Math.floor(C*fe),n.height=Math.floor($*fe),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(R===Ai){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(Ne)},this.setViewport=function(C,$,fe,oe){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,$,fe,oe),w.viewport(b.copy(Ne).multiplyScalar(pe).round())},this.getScissor=function(C){return C.copy(ct)},this.setScissor=function(C,$,fe,oe){C.isVector4?ct.set(C.x,C.y,C.z,C.w):ct.set(C,$,fe,oe),w.scissor(H.copy(ct).multiplyScalar(pe).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(C){w.setScissorTest(tt=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){Ve=C},this.getClearColor=function(C){return C.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,fe=!0){let oe=0;if(C){let le=!1;if(ne!==null){const Be=ne.texture.format;le=S.has(Be)}if(le){const Be=ne.texture.type,We=y.has(Be),Ie=pt.getClearColor(),Ze=pt.getClearAlpha(),je=Ie.r,st=Ie.g,xt=Ie.b;We?(L[0]=je,L[1]=st,L[2]=xt,L[3]=Ze,J.clearBufferuiv(J.COLOR,0,L)):(P[0]=je,P[1]=st,P[2]=xt,P[3]=Ze,J.clearBufferiv(J.COLOR,0,P))}else oe|=J.COLOR_BUFFER_BIT}$&&(oe|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(oe|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&J.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){n.removeEventListener("webglcontextlost",cn,!1),n.removeEventListener("webglcontextrestored",Vt,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),pt.dispose(),Fe.dispose(),Pe.dispose(),ce.dispose(),Re.dispose(),ye.dispose(),Ge.dispose(),we.dispose(),Le.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",xn),qe.removeEventListener("sessionend",In),ii.stop()};function cn(C){C.preventDefault(),yx("WebGLRenderer: Context Lost."),V=!0}function Vt(){yx("WebGLRenderer: Context Restored."),V=!1;const C=te.autoReset,$=at.enabled,fe=at.autoUpdate,oe=at.needsUpdate,le=at.type;$e(),te.autoReset=C,at.enabled=$,at.autoUpdate=fe,at.needsUpdate=oe,at.type=le}function pi(C){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mi(C){const $=C.target;$.removeEventListener("dispose",mi),Ro($)}function Ro(C){Do(C),ce.remove(C)}function Do(C){const $=ce.get(C).programs;$!==void 0&&($.forEach(function(fe){Le.releaseProgram(fe)}),C.isShaderMaterial&&Le.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,fe,oe,le,Be){$===null&&($=Rt);const We=le.isMesh&&le.matrixWorld.determinantAffine()<0,Ie=Qa(C,$,fe,oe,le);w.setMaterial(oe,We);let Ze=fe.index,je=1;if(oe.wireframe===!0){if(Ze=_e.getWireframeAttribute(fe),Ze===void 0)return;je=2}const st=fe.drawRange,xt=fe.attributes.position;let nt=st.start*je,Ot=(st.start+st.count)*je;Be!==null&&(nt=Math.max(nt,Be.start*je),Ot=Math.min(Ot,(Be.start+Be.count)*je)),Ze!==null?(nt=Math.max(nt,0),Ot=Math.min(Ot,Ze.count)):xt!=null&&(nt=Math.max(nt,0),Ot=Math.min(Ot,xt.count));const un=Ot-nt;if(un<0||un===1/0)return;Ge.setup(le,oe,Ie,fe,Ze);let en,kt=De;if(Ze!==null&&(en=Oe.get(Ze),kt=Me,kt.setIndex(en)),le.isMesh)oe.wireframe===!0?(w.setLineWidth(oe.wireframeLinewidth*$t()),kt.setMode(J.LINES)):kt.setMode(J.TRIANGLES);else if(le.isLine){let Yt=oe.linewidth;Yt===void 0&&(Yt=1),w.setLineWidth(Yt*$t()),le.isLineSegments?kt.setMode(J.LINES):le.isLineLoop?kt.setMode(J.LINE_LOOP):kt.setMode(J.LINE_STRIP)}else le.isPoints?kt.setMode(J.POINTS):le.isSprite&&kt.setMode(J.TRIANGLES);if(le.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))kt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const Yt=le._multiDrawStarts,Xe=le._multiDrawCounts,Yn=le._multiDrawCount,Mt=Ze?Oe.get(Ze).bytesPerElement:1,Tn=ce.get(oe).currentProgram.getUniforms();for(let gi=0;gi<Yn;gi++)Tn.setValue(J,"_gl_DrawID",gi),kt.render(Yt[gi]/Mt,Xe[gi])}else if(le.isInstancedMesh)kt.renderInstances(nt,un,le.count);else if(fe.isInstancedBufferGeometry){const Yt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Xe=Math.min(fe.instanceCount,Yt);kt.renderInstances(nt,un,Xe)}else kt.render(nt,un)};function Lo(C,$,fe){C.transparent===!0&&C.side===Qi&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Ka(C,$,fe),C.side=Xa,C.needsUpdate=!0,Ka(C,$,fe),C.side=Qi):Ka(C,$,fe)}this.compile=function(C,$,fe=null){fe===null&&(fe=C),N=Pe.get(fe),N.init($),E.push(N),fe.traverseVisible(function(le){le.isLight&&le.layers.test($.layers)&&(N.pushLight(le),le.castShadow&&N.pushShadow(le))}),C!==fe&&C.traverseVisible(function(le){le.isLight&&le.layers.test($.layers)&&(N.pushLight(le),le.castShadow&&N.pushShadow(le))}),N.setupLights();const oe=new Set;return C.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Be=le.material;if(Be)if(Array.isArray(Be))for(let We=0;We<Be.length;We++){const Ie=Be[We];Lo(Ie,fe,le),oe.add(Ie)}else Lo(Be,fe,le),oe.add(Be)}),N=E.pop(),oe},this.compileAsync=function(C,$,fe=null){const oe=this.compile(C,$,fe);return new Promise(le=>{function Be(){if(oe.forEach(function(We){ce.get(We).currentProgram.isReady()&&oe.delete(We)}),oe.size===0){le(C);return}setTimeout(Be,10)}Nt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let gr=null;function na(C){gr&&gr(C)}function xn(){ii.stop()}function In(){ii.start()}const ii=new J_;ii.setAnimationLoop(na),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(C){gr=C,qe.setAnimationLoop(C),C===null?ii.stop():ii.start()},qe.addEventListener("sessionstart",xn),qe.addEventListener("sessionend",In),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(C,$);const fe=qe.enabled===!0&&qe.isPresenting===!0,oe=U!==null&&(ne===null||fe)&&U.begin(X,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera($),$=qe.getCamera()),C.isScene===!0&&C.onBeforeRender(X,C,$,ne),N=Pe.get(C,E.length),N.init($),N.state.textureUnits=xe.getTextureUnits(),E.push(N),Qe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ke.setFromProjectionMatrix(Qe,da,$.reversedDepth),Ae=this.localClippingEnabled,ot=it.init(this.clippingPlanes,Ae),I=Fe.get(C,O.length),I.init(),O.push(I),qe.enabled===!0&&qe.isPresenting===!0){const We=X.xr.getDepthSensingMesh();We!==null&&Us(We,$,-1/0,X.sortObjects)}Us(C,$,0,X.sortObjects),I.finish(),X.sortObjects===!0&&I.sort(Ce,Ve,$.reversedDepth),Lt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Lt&&pt.addToRenderList(I,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&it.beginShadows();const le=N.state.shadowsArray;if(at.render(le,C,$),ot===!0&&it.endShadows(),(oe&&U.hasRenderPass())===!1){const We=I.opaque,Ie=I.transmissive;if(N.setupLights(),$.isArrayCamera){const Ze=$.cameras;if(Ie.length>0)for(let je=0,st=Ze.length;je<st;je++){const xt=Ze[je];Wl(We,Ie,C,xt)}Lt&&pt.render(C);for(let je=0,st=Ze.length;je<st;je++){const xt=Ze[je];Xl(I,C,xt,xt.viewport)}}else Ie.length>0&&Wl(We,Ie,C,$),Lt&&pt.render(C),Xl(I,C,$)}ne!==null&&Y===0&&(xe.updateMultisampleRenderTarget(ne),xe.updateRenderTargetMipmap(ne)),oe&&U.end(X),C.isScene===!0&&C.onAfterRender(X,C,$),Ge.resetDefaultState(),me=-1,G=null,E.pop(),E.length>0?(N=E[E.length-1],xe.setTextureUnits(N.state.textureUnits),ot===!0&&it.setGlobalState(X.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,q!==null&&q.renderEnd()};function Us(C,$,fe,oe){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){oe&&ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Qe);const We=ye.update(C),Ie=C.material;Ie.visible&&I.push(C,We,Ie,fe,ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const We=ye.update(C),Ie=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ut.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),ut.copy(We.boundingSphere.center)),ut.applyMatrix4(C.matrixWorld).applyMatrix4(Qe)),Array.isArray(Ie)){const Ze=We.groups;for(let je=0,st=Ze.length;je<st;je++){const xt=Ze[je],nt=Ie[xt.materialIndex];nt&&nt.visible&&I.push(C,We,nt,fe,ut.z,xt)}}else Ie.visible&&I.push(C,We,Ie,fe,ut.z,null)}}const Be=C.children;for(let We=0,Ie=Be.length;We<Ie;We++)Us(Be[We],$,fe,oe)}function Xl(C,$,fe,oe){const{opaque:le,transmissive:Be,transparent:We}=C;N.setupLightsView(fe),ot===!0&&it.setGlobalState(X.clippingPlanes,fe),oe&&w.viewport(b.copy(oe)),le.length>0&&Os(le,$,fe),Be.length>0&&Os(Be,$,fe),We.length>0&&Os(We,$,fe),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Wl(C,$,fe,oe){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[oe.id]===void 0){const nt=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[oe.id]=new ni(1,1,{generateMipmaps:!0,type:nt?di:Ai,minFilter:sr,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Be=N.state.transmissionRenderTarget[oe.id],We=oe.viewport||b;Be.setSize(We.z*X.transmissionResolutionScale,We.w*X.transmissionResolutionScale);const Ie=X.getRenderTarget(),Ze=X.getActiveCubeFace(),je=X.getActiveMipmapLevel();X.setRenderTarget(Be),X.getClearColor(ve),Ee=X.getClearAlpha(),Ee<1&&X.setClearColor(16777215,.5),X.clear(),Lt&&pt.render(fe);const st=X.toneMapping;X.toneMapping=ma;const xt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),N.setupLightsView(oe),ot===!0&&it.setGlobalState(X.clippingPlanes,oe),Os(C,fe,oe),xe.updateMultisampleRenderTarget(Be),xe.updateRenderTargetMipmap(Be),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ot=0,un=$.length;Ot<un;Ot++){const en=$[Ot],{object:kt,geometry:Yt,material:Xe,group:Yn}=en;if(Xe.side===Qi&&kt.layers.test(oe.layers)){const Mt=Xe.side;Xe.side=ti,Xe.needsUpdate=!0,Za(kt,fe,oe,Yt,Xe,Yn),Xe.side=Mt,Xe.needsUpdate=!0,nt=!0}}nt===!0&&(xe.updateMultisampleRenderTarget(Be),xe.updateRenderTargetMipmap(Be))}X.setRenderTarget(Ie,Ze,je),X.setClearColor(ve,Ee),xt!==void 0&&(oe.viewport=xt),X.toneMapping=st}function Os(C,$,fe){const oe=$.isScene===!0?$.overrideMaterial:null;for(let le=0,Be=C.length;le<Be;le++){const We=C[le],{object:Ie,geometry:Ze,group:je}=We;let st=We.material;st.allowOverride===!0&&oe!==null&&(st=oe),Ie.layers.test(fe.layers)&&Za(Ie,$,fe,Ze,st,je)}}function Za(C,$,fe,oe,le,Be){C.onBeforeRender(X,$,fe,oe,le,Be),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),le.onBeforeRender(X,$,fe,oe,C,Be),le.transparent===!0&&le.side===Qi&&le.forceSinglePass===!1?(le.side=ti,le.needsUpdate=!0,X.renderBufferDirect(fe,$,oe,le,C,Be),le.side=Xa,le.needsUpdate=!0,X.renderBufferDirect(fe,$,oe,le,C,Be),le.side=Qi):X.renderBufferDirect(fe,$,oe,le,C,Be),C.onAfterRender(X,$,fe,oe,le,Be)}function Ka(C,$,fe){$.isScene!==!0&&($=Rt);const oe=ce.get(C),le=N.state.lights,Be=N.state.shadowsArray,We=le.state.version,Ie=Le.getParameters(C,le.state,Be,$,fe,N.state.lightProbeGridArray),Ze=Le.getProgramCacheKey(Ie);let je=oe.programs;oe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,oe.fog=$.fog;const st=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;oe.envMap=Re.get(C.envMap||oe.environment,st),oe.envMapRotation=oe.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",mi),je=new Map,oe.programs=je);let xt=je.get(Ze);if(xt!==void 0){if(oe.currentProgram===xt&&oe.lightsStateVersion===We)return xa(C,Ie),xt}else Ie.uniforms=Le.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,fe,Ie),C.onBeforeCompile(Ie,X),xt=Le.acquireProgram(Ie,Ze),je.set(Ze,xt),oe.uniforms=Ie.uniforms;const nt=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=it.uniform),xa(C,Ie),oe.needsLights=ql(C),oe.lightsStateVersion=We,oe.needsLights&&(nt.ambientLightColor.value=le.state.ambient,nt.lightProbe.value=le.state.probe,nt.directionalLights.value=le.state.directional,nt.directionalLightShadows.value=le.state.directionalShadow,nt.spotLights.value=le.state.spot,nt.spotLightShadows.value=le.state.spotShadow,nt.rectAreaLights.value=le.state.rectArea,nt.ltc_1.value=le.state.rectAreaLTC1,nt.ltc_2.value=le.state.rectAreaLTC2,nt.pointLights.value=le.state.point,nt.pointLightShadows.value=le.state.pointShadow,nt.hemisphereLights.value=le.state.hemi,nt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,nt.spotLightMatrix.value=le.state.spotLightMatrix,nt.spotLightMap.value=le.state.spotLightMap,nt.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=N.state.lightProbeGridArray.length>0,oe.currentProgram=xt,oe.uniformsList=null,xt}function va(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Ou.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function xa(C,$){const fe=ce.get(C);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function Ps(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;A.setFromMatrixPosition($.matrixWorld);for(let fe=0,oe=C.length;fe<oe;fe++){const le=C[fe];if(le.texture!==null&&le.boundingBox.containsPoint(A))return le}return null}function Qa(C,$,fe,oe,le){$.isScene!==!0&&($=Rt),xe.resetTextureUnits();const Be=$.fog,We=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?$.environment:null,Ie=ne===null?X.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ct.workingColorSpace,Ze=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,je=Re.get(oe.envMap||We,Ze),st=oe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,xt=!!fe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),nt=!!fe.morphAttributes.position,Ot=!!fe.morphAttributes.normal,un=!!fe.morphAttributes.color;let en=ma;oe.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(en=X.toneMapping);const kt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Yt=kt!==void 0?kt.length:0,Xe=ce.get(oe),Yn=N.state.lights;if(ot===!0&&(Ae===!0||C!==G)){const Ht=C===G&&oe.id===me;it.setState(oe,C,Ht)}let Mt=!1;oe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Yn.state.version||Xe.outputColorSpace!==Ie||le.isBatchedMesh&&Xe.batching===!1||!le.isBatchedMesh&&Xe.batching===!0||le.isBatchedMesh&&Xe.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Xe.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Xe.instancing===!1||!le.isInstancedMesh&&Xe.instancing===!0||le.isSkinnedMesh&&Xe.skinning===!1||!le.isSkinnedMesh&&Xe.skinning===!0||le.isInstancedMesh&&Xe.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Xe.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Xe.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Xe.instancingMorph===!1&&le.morphTexture!==null||Xe.envMap!==je||oe.fog===!0&&Xe.fog!==Be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==it.numPlanes||Xe.numIntersection!==it.numIntersection)||Xe.vertexAlphas!==st||Xe.vertexTangents!==xt||Xe.morphTargets!==nt||Xe.morphNormals!==Ot||Xe.morphColors!==un||Xe.toneMapping!==en||Xe.morphTargetsCount!==Yt||!!Xe.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Xe.__version=oe.version);let Tn=Xe.currentProgram;Mt===!0&&(Tn=Ka(oe,$,le),q&&oe.isNodeMaterial&&q.onUpdateProgram(oe,Tn,Xe));let gi=!1,Vi=!1,vi=!1;const Xt=Tn.getUniforms(),fn=Xe.uniforms;if(w.useProgram(Tn.program)&&(gi=!0,Vi=!0,vi=!0),oe.id!==me&&(me=oe.id,Vi=!0),Xe.needsLights){const Ht=Ps(N.state.lightProbeGridArray,le);Xe.lightProbeGrid!==Ht&&(Xe.lightProbeGrid=Ht,Vi=!0)}if(gi||G!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xt.setValue(J,"projectionMatrix",C.projectionMatrix),Xt.setValue(J,"viewMatrix",C.matrixWorldInverse);const ia=Xt.map.cameraPosition;ia!==void 0&&ia.setValue(J,Je.setFromMatrixPosition(C.matrixWorld)),z.logarithmicDepthBuffer&&Xt.setValue(J,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Xt.setValue(J,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,Vi=!0,vi=!0)}if(Xe.needsLights&&(Yn.state.directionalShadowMap.length>0&&Xt.setValue(J,"directionalShadowMap",Yn.state.directionalShadowMap,xe),Yn.state.spotShadowMap.length>0&&Xt.setValue(J,"spotShadowMap",Yn.state.spotShadowMap,xe),Yn.state.pointShadowMap.length>0&&Xt.setValue(J,"pointShadowMap",Yn.state.pointShadowMap,xe)),le.isSkinnedMesh){Xt.setOptional(J,le,"bindMatrix"),Xt.setOptional(J,le,"bindMatrixInverse");const Ht=le.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Xt.setValue(J,"boneTexture",Ht.boneTexture,xe))}le.isBatchedMesh&&(Xt.setOptional(J,le,"batchingTexture"),Xt.setValue(J,"batchingTexture",le._matricesTexture,xe),Xt.setOptional(J,le,"batchingIdTexture"),Xt.setValue(J,"batchingIdTexture",le._indirectTexture,xe),Xt.setOptional(J,le,"batchingColorTexture"),le._colorsTexture!==null&&Xt.setValue(J,"batchingColorTexture",le._colorsTexture,xe));const ki=fe.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Z.update(le,fe,Tn),(Vi||Xe.receiveShadow!==le.receiveShadow)&&(Xe.receiveShadow=le.receiveShadow,Xt.setValue(J,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&$.environment!==null&&(fn.envMapIntensity.value=$.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=QA()),Vi){if(Xt.setValue(J,"toneMappingExposure",X.toneMappingExposure),Xe.needsLights&&_n(fn,vi),Be&&oe.fog===!0&&Ye.refreshFogUniforms(fn,Be),Ye.refreshMaterialUniforms(fn,oe,pe,ae,N.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.lightProbeGrid){const Ht=Xe.lightProbeGrid;fn.probesSH.value=Ht.texture,fn.probesMin.value.copy(Ht.boundingBox.min),fn.probesMax.value.copy(Ht.boundingBox.max),fn.probesResolution.value.copy(Ht.resolution)}Ou.upload(J,va(Xe),fn,xe)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ou.upload(J,va(Xe),fn,xe),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Xt.setValue(J,"center",le.center),Xt.setValue(J,"modelViewMatrix",le.modelViewMatrix),Xt.setValue(J,"normalMatrix",le.normalMatrix),Xt.setValue(J,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const Ht=oe.uniformsGroups;for(let ia=0,Ja=Ht.length;ia<Ja;ia++){const Is=Ht[ia];we.update(Is,Tn),we.bind(Is,Tn)}}return Tn}function _n(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function ql(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,$,fe){const oe=ce.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=$,ce.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:fe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const fe=ce.get(C);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,fe=0){ne=C,B=$,Y=fe;let oe=null,le=!1,Be=!1;if(C){const Ie=ce.get(C);if(Ie.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(J.FRAMEBUFFER,Ie.__webglFramebuffer),b.copy(C.viewport),H.copy(C.scissor),ie=C.scissorTest,w.viewport(b),w.scissor(H),w.setScissorTest(ie),me=-1;return}else if(Ie.__webglFramebuffer===void 0)xe.setupRenderTarget(C);else if(Ie.__hasExternalTextures)xe.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const st=C.depthTexture;if(Ie.__boundDepthTexture!==st){if(st!==null&&ce.has(st)&&(C.width!==st.image.width||C.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Be=!0);const je=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(je[$])?oe=je[$][fe]:oe=je[$],le=!0):C.samples>0&&xe.useMultisampledRTT(C)===!1?oe=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(je)?oe=je[fe]:oe=je,b.copy(C.viewport),H.copy(C.scissor),ie=C.scissorTest}else b.copy(Ne).multiplyScalar(pe).floor(),H.copy(ct).multiplyScalar(pe).floor(),ie=tt;if(fe!==0&&(oe=ue),w.bindFramebuffer(J.FRAMEBUFFER,oe)&&w.drawBuffers(C,oe),w.viewport(b),w.scissor(H),w.setScissorTest(ie),le){const Ie=ce.get(C.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ie.__webglTexture,fe)}else if(Be){const Ie=$;for(let Ze=0;Ze<C.textures.length;Ze++){const je=ce.get(C.textures[Ze]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Ze,je.__webglTexture,fe,Ie)}}else if(C!==null&&fe!==0){const Ie=ce.get(C.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ie.__webglTexture,fe)}me=-1},this.readRenderTargetPixels=function(C,$,fe,oe,le,Be,We,Ie=0){if(!(C&&C.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze){w.bindFramebuffer(J.FRAMEBUFFER,Ze);try{const je=C.textures[Ie],st=je.format,xt=je.type;if(C.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ie),!z.textureFormatReadable(st)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(xt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-oe&&fe>=0&&fe<=C.height-le&&J.readPixels($,fe,oe,le,Ue.convert(st),Ue.convert(xt),Be)}finally{const je=ne!==null?ce.get(ne).__webglFramebuffer:null;w.bindFramebuffer(J.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,$,fe,oe,le,Be,We,Ie=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze)if($>=0&&$<=C.width-oe&&fe>=0&&fe<=C.height-le){w.bindFramebuffer(J.FRAMEBUFFER,Ze);const je=C.textures[Ie],st=je.format,xt=je.type;if(C.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ie),!z.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,nt),J.bufferData(J.PIXEL_PACK_BUFFER,Be.byteLength,J.STREAM_READ),J.readPixels($,fe,oe,le,Ue.convert(st),Ue.convert(xt),0);const Ot=ne!==null?ce.get(ne).__webglFramebuffer:null;w.bindFramebuffer(J.FRAMEBUFFER,Ot);const un=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await Q1(J,un,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,nt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Be),J.deleteBuffer(nt),J.deleteSync(un),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,fe=0){const oe=Math.pow(2,-fe),le=Math.floor(C.image.width*oe),Be=Math.floor(C.image.height*oe),We=$!==null?$.x:0,Ie=$!==null?$.y:0;xe.setTexture2D(C,0),J.copyTexSubImage2D(J.TEXTURE_2D,fe,0,0,We,Ie,le,Be),w.unbindTexture()},this.copyTextureToTexture=function(C,$,fe=null,oe=null,le=0,Be=0){let We,Ie,Ze,je,st,xt,nt,Ot,un;const en=C.isCompressedTexture?C.mipmaps[Be]:C.image;if(fe!==null)We=fe.max.x-fe.min.x,Ie=fe.max.y-fe.min.y,Ze=fe.isBox3?fe.max.z-fe.min.z:1,je=fe.min.x,st=fe.min.y,xt=fe.isBox3?fe.min.z:0;else{const fn=Math.pow(2,-le);We=Math.floor(en.width*fn),Ie=Math.floor(en.height*fn),C.isDataArrayTexture?Ze=en.depth:C.isData3DTexture?Ze=Math.floor(en.depth*fn):Ze=1,je=0,st=0,xt=0}oe!==null?(nt=oe.x,Ot=oe.y,un=oe.z):(nt=0,Ot=0,un=0);const kt=Ue.convert($.format),Yt=Ue.convert($.type);let Xe;$.isData3DTexture?(xe.setTexture3D($,0),Xe=J.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(xe.setTexture2DArray($,0),Xe=J.TEXTURE_2D_ARRAY):(xe.setTexture2D($,0),Xe=J.TEXTURE_2D),w.activeTexture(J.TEXTURE0),w.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),w.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),w.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment);const Yn=w.getParameter(J.UNPACK_ROW_LENGTH),Mt=w.getParameter(J.UNPACK_IMAGE_HEIGHT),Tn=w.getParameter(J.UNPACK_SKIP_PIXELS),gi=w.getParameter(J.UNPACK_SKIP_ROWS),Vi=w.getParameter(J.UNPACK_SKIP_IMAGES);w.pixelStorei(J.UNPACK_ROW_LENGTH,en.width),w.pixelStorei(J.UNPACK_IMAGE_HEIGHT,en.height),w.pixelStorei(J.UNPACK_SKIP_PIXELS,je),w.pixelStorei(J.UNPACK_SKIP_ROWS,st),w.pixelStorei(J.UNPACK_SKIP_IMAGES,xt);const vi=C.isDataArrayTexture||C.isData3DTexture,Xt=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const fn=ce.get(C),ki=ce.get($),Ht=ce.get(fn.__renderTarget),ia=ce.get(ki.__renderTarget);w.bindFramebuffer(J.READ_FRAMEBUFFER,Ht.__webglFramebuffer),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let Ja=0;Ja<Ze;Ja++)vi&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,le,xt+Ja),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ce.get($).__webglTexture,Be,un+Ja)),J.blitFramebuffer(je,st,We,Ie,nt,Ot,We,Ie,J.DEPTH_BUFFER_BIT,J.NEAREST);w.bindFramebuffer(J.READ_FRAMEBUFFER,null),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(le!==0||C.isRenderTargetTexture||ce.has(C)){const fn=ce.get(C),ki=ce.get($);w.bindFramebuffer(J.READ_FRAMEBUFFER,de),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,Q);for(let Ht=0;Ht<Ze;Ht++)vi?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,fn.__webglTexture,le,xt+Ht):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,fn.__webglTexture,le),Xt?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ki.__webglTexture,Be,un+Ht):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ki.__webglTexture,Be),le!==0?J.blitFramebuffer(je,st,We,Ie,nt,Ot,We,Ie,J.COLOR_BUFFER_BIT,J.NEAREST):Xt?J.copyTexSubImage3D(Xe,Be,nt,Ot,un+Ht,je,st,We,Ie):J.copyTexSubImage2D(Xe,Be,nt,Ot,je,st,We,Ie);w.bindFramebuffer(J.READ_FRAMEBUFFER,null),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Xt?C.isDataTexture||C.isData3DTexture?J.texSubImage3D(Xe,Be,nt,Ot,un,We,Ie,Ze,kt,Yt,en.data):$.isCompressedArrayTexture?J.compressedTexSubImage3D(Xe,Be,nt,Ot,un,We,Ie,Ze,kt,en.data):J.texSubImage3D(Xe,Be,nt,Ot,un,We,Ie,Ze,kt,Yt,en):C.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Be,nt,Ot,We,Ie,kt,Yt,en.data):C.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Be,nt,Ot,en.width,en.height,kt,en.data):J.texSubImage2D(J.TEXTURE_2D,Be,nt,Ot,We,Ie,kt,Yt,en);w.pixelStorei(J.UNPACK_ROW_LENGTH,Yn),w.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Mt),w.pixelStorei(J.UNPACK_SKIP_PIXELS,Tn),w.pixelStorei(J.UNPACK_SKIP_ROWS,gi),w.pixelStorei(J.UNPACK_SKIP_IMAGES,Vi),Be===0&&$.generateMipmaps&&J.generateMipmap(Xe),w.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&xe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?xe.setTextureCube(C,0):C.isData3DTexture?xe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?xe.setTexture2DArray(C,0):xe.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){B=0,Y=0,ne=null,w.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}class qu extends lt{constructor(){const e=qu.SkyShader,n=new Un({name:e.name,uniforms:Ns.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:ti,depthWrite:!1});super(new Zn(1,1,1),n),this.isSky=!0}}qu.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new k},up:{value:new k(0,1,0)},cloudScale:{value:2e-4},cloudSpeed:{value:1e-4},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// Cloud noise functions
		float hash( vec2 p ) {
			return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453123 );
		}

		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			f = f * f * ( 3.0 - 2.0 * f );
			float a = hash( i );
			float b = hash( i + vec2( 1.0, 0.0 ) );
			float c = hash( i + vec2( 0.0, 1.0 ) );
			float d = hash( i + vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
		}

		float fbm( vec2 p ) {
			float value = 0.0;
			float amplitude = 0.5;
			for ( int i = 0; i < 5; i ++ ) {
				value += amplitude * noise( p );
				p *= 2.0;
				amplitude *= 0.5;
			}
			return value;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta ) * showSunDisc;
			L0 += ( vSunE * 19000.0 * Fex ) * sundisc;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Multi-octave noise for fluffy clouds
				float cloudNoise = fbm( cloudUV * 1000.0 );
				cloudNoise += 0.5 * fbm( cloudUV * 2000.0 + 3.7 );
				cloudNoise = cloudNoise * 0.5 + 0.5;

				// Apply coverage threshold
				float cloudMask = smoothstep( 1.0 - cloudCoverage, 1.0 - cloudCoverage + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.1 + 0.2 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting based on sun position
				float sunInfluence = dot( direction, vSunDirection ) * 0.5 + 0.5;
				float daylight = max( 0.0, vSunDirection.y * 2.0 );

				// Base cloud color affected by atmosphere
				vec3 atmosphereColor = Lin * 0.04;
				vec3 cloudColor = mix( vec3( 0.3 ), vec3( 1.0 ), daylight );
				cloudColor = mix( cloudColor, atmosphereColor + vec3( 1.0 ), sunInfluence * 0.5 );
				cloudColor *= vSunE * 0.00002;

				// Blend clouds with sky
				texColor = mix( texColor, cloudColor, cloudMask * cloudDensity );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class $A extends lt{constructor(e,n={}){super(e),this.isWater=!0;const s=this,l=n.textureWidth!==void 0?n.textureWidth:512,c=n.textureHeight!==void 0?n.textureHeight:512,u=n.clipBias!==void 0?n.clipBias:0,d=n.alpha!==void 0?n.alpha:1,m=n.time!==void 0?n.time:0,p=n.waterNormals!==void 0?n.waterNormals:null,x=n.sunDirection!==void 0?n.sunDirection:new k(.70707,.70707,0),g=new ht(n.sunColor!==void 0?n.sunColor:16777215),v=new ht(n.waterColor!==void 0?n.waterColor:8355711),_=n.eye!==void 0?n.eye:new k(0,0,0),T=n.distortionScale!==void 0?n.distortionScale:20,R=n.side!==void 0?n.side:Xa,S=n.fog!==void 0?n.fog:!1,y=new Rs,L=new k,P=new k,A=new k,I=new Ft,N=new k(0,0,-1),O=new on,E=new k,U=new k,X=new on,V=new Ft,q=new hi,ue=new ni(l,c,{type:di}),de={name:"MirrorShader",uniforms:Ns.merge([ze.fog,ze.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ft},sunColor:{value:new ht(8355711)},sunDirection:{value:new k(.70707,.70707,0)},eye:{value:new k},waterColor:{value:new ht(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},Q=new Un({name:de.name,uniforms:Ns.clone(de.uniforms),vertexShader:de.vertexShader,fragmentShader:de.fragmentShader,lights:!0,side:R,fog:S});Q.uniforms.mirrorSampler.value=ue.texture,Q.uniforms.textureMatrix.value=V,Q.uniforms.alpha.value=d,Q.uniforms.time.value=m,Q.uniforms.normalSampler.value=p,Q.uniforms.sunColor.value=g,Q.uniforms.waterColor.value=v,Q.uniforms.sunDirection.value=x,Q.uniforms.distortionScale.value=T,Q.uniforms.eye.value=_,s.material=Q,s.onBeforeRender=function(B,Y,ne){if(P.setFromMatrixPosition(s.matrixWorld),A.setFromMatrixPosition(ne.matrixWorld),I.extractRotation(s.matrixWorld),L.set(0,0,1),L.applyMatrix4(I),E.subVectors(P,A),E.dot(L)>0)return;E.reflect(L).negate(),E.add(P),I.extractRotation(ne.matrixWorld),N.set(0,0,-1),N.applyMatrix4(I),N.add(A),U.subVectors(P,N),U.reflect(L).negate(),U.add(P),q.position.copy(E),q.up.set(0,1,0),q.up.applyMatrix4(I),q.up.reflect(L),q.lookAt(U),q.far=ne.far,q.updateMatrixWorld(),q.projectionMatrix.copy(ne.projectionMatrix),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(q.projectionMatrix),V.multiply(q.matrixWorldInverse),y.setFromNormalAndCoplanarPoint(L,P),y.applyMatrix4(q.matrixWorldInverse),O.set(y.normal.x,y.normal.y,y.normal.z,y.constant);const me=q.projectionMatrix;X.x=(Math.sign(O.x)+me.elements[8])/me.elements[0],X.y=(Math.sign(O.y)+me.elements[9])/me.elements[5],X.z=-1,X.w=(1+me.elements[10])/me.elements[14],O.multiplyScalar(2/O.dot(X)),me.elements[2]=O.x,me.elements[6]=O.y,me.elements[10]=O.z+1-u,me.elements[14]=O.w,_.setFromMatrixPosition(ne.matrixWorld);const G=B.getRenderTarget(),b=B.xr.enabled,H=B.shadowMap.autoUpdate;s.visible=!1,B.xr.enabled=!1,B.shadowMap.autoUpdate=!1,B.setRenderTarget(ue),B.state.buffers.depth.setMask(!0),B.autoClear===!1&&B.clear(),B.render(Y,q),s.visible=!0,B.xr.enabled=b,B.shadowMap.autoUpdate=H,B.setRenderTarget(G);const ie=ne.viewport;ie!==void 0&&B.state.viewport(ie)}}}const Pu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Co{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const e3=new Yl(-1,1,1,-1,0,1);class t3 extends Pn{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const n3=new t3;class gm{constructor(e){this._mesh=new lt(n3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,e3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class i3 extends Co{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ns.clone(e.uniforms),this.material=new Un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gm(this.material)}render(e,n,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class x_ extends Co{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,u,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class a3 extends Co{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class s3{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const s=e.getSize(new He);this._width=s.width,this._height=s.height,n=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new i3(Pu),this.copyPass.material.blending=pa,this.timer=new tE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const u=this.passes[l];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),u.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}x_!==void 0&&(u instanceof x_?s=!0:u instanceof a3&&(s=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class r3 extends Co{constructor(e,n,s=null,l=null,c=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ht}render(e,n,s){const l=e.autoClear;e.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=l}}const o3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Eo extends Co{constructor(e,n=1,s,l){super(),this.strength=n,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(c,u,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let x=0;x<this.nMips;x++){const g=new ni(c,u,{type:di});g.texture.name="UnrealBloomPass.h"+x,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const v=new ni(c,u,{type:di});v.texture.name="UnrealBloomPass.v"+x,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const d=o3;this.highPassUniforms=Ns.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Un({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let x=0;x<this.nMips;x++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[x])),this.separableBlurMaterials[x].uniforms.invSize.value=new He(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ns.clone(Pu.uniforms),this.blendMaterial=new Un({uniforms:this.copyUniforms,vertexShader:Pu.vertexShader,fragmentShader:Pu.fragmentShader,premultipliedAlpha:!0,blending:Iu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ht,this._oldClearAlpha=1,this._basic=new Ds,this._fsQuad=new gm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let s=Math.round(e/2),l=Math.round(n/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new He(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,n,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=Eo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Eo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const n=[],s=e/3;for(let l=0;l<e;l++)n.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Un({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Un({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Eo.BlurDirectionX=new He(1,0);Eo.BlurDirectionY=new He(0,1);const Au={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class l3 extends Co{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ns.clone(Au.uniforms),this.material=new Z_({name:Au.name,uniforms:this.uniforms,vertexShader:Au.vertexShader,fragmentShader:Au.fragmentShader}),this._fsQuad=new gm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class c3{frustum=new Yu;projScreenMatrix=new Ft;tempSphere=new dr;tempVec=new k;maxAngularSpread=2.05;verticalSpread=38;cullingEnabled=!0;updateFrustum(e){this.projScreenMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix)}isItemVisible(e,n,s,l,c,u){if(!this.cullingEnabled)return!0;if(Math.abs(n-u)>this.verticalSpread+l)return!1;let d=(e-c)%(Math.PI*2);d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2);const m=this.maxAngularSpread+l/s;if(Math.abs(d)>m)return!1;const p=Math.sin(e)*s,x=Math.cos(e)*s;return this.tempVec.set(p,n,x),this.tempSphere.set(this.tempVec,Math.max(l,2.5)),this.frustum.intersectsSphere(this.tempSphere)}}const ry=1,oy="lvl_0001",ly="Glower Tower",cy=48,uy=24,fy={x:.5,y:.5},hy=[{id:"balcony-01",x:0,topY:0,count:24},{id:"step-01",x:1,topY:1},{id:"step-02",x:2,topY:2},{id:"step-02_1",x:22,topY:2},{id:"step-03",x:3,topY:3},{id:"step-04",x:4,topY:4},{id:"step-06_1",x:20,topY:4},{id:"step-05",x:5,topY:5},{id:"step-06",x:6,topY:6},{id:"step-06_2",x:18,topY:6},{id:"step-07",x:7,topY:7},{id:"step-08",x:8,topY:8},{id:"step-11",x:11,topY:11},{id:"step-12",x:12,topY:12},{id:"step-13",x:13,topY:13},{id:"step-14",x:14,topY:14},{id:"step-15",x:15,topY:15},{id:"step-16",x:16,topY:16},{id:"step-17",x:17,topY:17},{id:"step-18",x:18,topY:18},{id:"step-19",x:19,topY:19},{id:"step-20",x:20,topY:20},{id:"step-21",x:21,topY:21},{id:"step-23",x:23,topY:23},{id:"step-24",x:0,topY:24},{id:"step-25",x:1,topY:25},{id:"step-26",x:2,topY:26},{id:"step-27",x:3,topY:27},{id:"step-28",x:4,topY:28},{id:"step-29",x:5,topY:29},{id:"step-30",x:6,topY:30},{id:"step-31",x:7,topY:31},{id:"step-32",x:8,topY:32},{id:"step-33",x:9,topY:33},{id:"step-34",x:10,topY:34},{id:"step-35",x:11,topY:35},{id:"step-36",x:12,topY:36},{id:"step-37",x:13,topY:37},{id:"step-38",x:14,topY:38},{id:"step-39",x:15,topY:39},{id:"step-40",x:16,topY:40},{id:"step-41",x:17,topY:41},{id:"step-42",x:18,topY:42},{id:"step-43",x:19,topY:43},{id:"step-44",x:20,topY:44},{id:"step-45",x:21,topY:45},{id:"step-46",x:22,topY:46},{id:"step-47",x:23,topY:47},{id:"step-48",x:22,topY:48},{id:"balcony-12",x:4,topY:12.3,count:5},{id:"balcony-24",x:10,topY:24.3,count:5},{id:"balcony-36",x:16,topY:36.3,count:5},{id:"side-18",x:2,topY:18.5,count:2},{id:"side-30",x:8,topY:30.5,count:2},{id:"side-42",x:14,topY:42.5,count:2}],dy=[{id:"elevator-01",x:6,width:1.2,yMin:8,yMax:16.8,speed:.68,phase:0},{id:"elevator-02",x:13,width:1.2,yMin:20,yMax:31,speed:.58,phase:1.2566},{id:"elevator-03",x:20,width:1.2,yMin:32.5,yMax:44.5,speed:.52,phase:2.5132},{id:"elevator-side",x:1,width:1,yMin:14,yMax:22,speed:.75,phase:3.7699}],py=[{id:"gem-01",x:2.5,y:2.8},{id:"gem-02",x:5.5,y:5.8},{id:"gem-03",x:9.5,y:10.2},{id:"gem-04",x:12.5,y:14.5},{id:"gem-05",x:15.5,y:17.5},{id:"gem-06",x:18.5,y:21},{id:"gem-07",x:21.5,y:25.5},{id:"gem-08",x:3.5,y:29},{id:"gem-09",x:7.5,y:33.5},{id:"gem-10",x:11.5,y:38},{id:"gem-11",x:17.5,y:42},{id:"gem-12",x:20.5,y:45.5},{id:"gem-13",x:5.5,y:13.5},{id:"gem-14",x:11.5,y:25.5},{id:"gem-15",x:17.5,y:37.5},{id:"gem-16",x:23.5,y:49.5}],my=[{id:"spring-08",x:8,topY:8,bounceForce:18.5},{id:"spring-20",x:20,topY:20,bounceForce:18.5},{id:"spring-32",x:8,topY:32,bounceForce:18.5}],gy=[{id:"enemy-patrol-01",xCenter:5.5,y:13,behavior:"patrol",amplitude:2,speed:1.2},{id:"enemy-patrol-02",xCenter:11.5,y:25,behavior:"patrol",amplitude:2.2,speed:1.5},{id:"enemy-patrol-03",xCenter:17.5,y:37,behavior:"patrol",amplitude:2.5,speed:1.8},{id:"enemy-bounce-01",xCenter:8,y:12.3,behavior:"bounce",moveSteps:0,speed:1},{id:"enemy-bounce-02",xCenter:14,y:24.3,behavior:"bounce",moveSteps:0,speed:1},{id:"enemy-bounce-03",xCenter:20,y:36.3,behavior:"bounce",moveSteps:0,speed:1}],vy=[{id:1,name:"Taras Niebianski",floor:12,x:5,y:12.3},{id:2,name:"Runiczna Polka",floor:24,x:11,y:24.3},{id:3,name:"Podniebny Most",floor:36,x:17,y:36.3}],xy=[{id:"cs-01",x:10,topY:10},{id:"cs-02",x:22,topY:22},{id:"cs-03",x:14,topY:10}],_y=[{id:"lever-01",x:7,topY:7},{id:"lever-02",x:18,topY:6}],yy=[{id:"ts-01",x:9,topY:9,leverId:"lever-01"},{id:"ts-01",x:16,topY:8,leverId:"lever-02"}],Sy=[{id:"door-azure-low",pairId:"azure",x:3.1,topY:18.5},{id:"door-azure-high",pairId:"azure",x:15.1,topY:42.5},{id:"door-amber-low",pairId:"amber",x:5.2,topY:12.3},{id:"door-amber-high",pairId:"amber",x:17.2,topY:36.3}],My={schemaVersion:ry,id:oy,name:ly,towerHeight:cy,circumferenceSteps:uy,start:fy,stairs:hy,elevators:dy,gems:py,springs:my,enemies:gy,checkpoints:vy,collapsingStairs:xy,levers:_y,togglableStairs:yy,doors:Sy},u3=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:vy,circumferenceSteps:uy,collapsingStairs:xy,default:My,doors:Sy,elevators:dy,enemies:gy,gems:py,id:oy,levers:_y,name:ly,schemaVersion:ry,springs:my,stairs:hy,start:fy,togglableStairs:yy,towerHeight:cy},Symbol.toStringTag,{value:"Module"})),f3=["stairs","elevators","gems","springs","enemies","checkpoints","doors","collapsingStairs","levers","togglableStairs"];function Ga(r,e){if(typeof r!="number"||!Number.isFinite(r))throw new Error(`Level JSON: ${e} must be a finite number.`)}function by(r){if(!r||typeof r!="object")throw new Error("Level JSON: root must be an object.");const e=r;if(e.schemaVersion!==1)throw new Error("Level JSON: unsupported schemaVersion.");if(typeof e.id!="string"||typeof e.name!="string")throw new Error("Level JSON: id and name are required.");if(Ga(e.towerHeight,"towerHeight"),Ga(e.circumferenceSteps,"circumferenceSteps"),e.towerHeight<1||e.towerHeight>200)throw new Error("Level JSON: towerHeight out of range [1, 200].");if(e.circumferenceSteps<4||e.circumferenceSteps>64)throw new Error("Level JSON: circumferenceSteps out of range [4, 64].");const n=e.start;if(!n||typeof n!="object")throw new Error("Level JSON: start is required.");Ga(n.x,"start.x"),Ga(n.y,"start.y");const s=e;for(const d of f3)if(!Array.isArray(e[d]))throw new Error(`Level JSON: ${d} must be an array.`);const l=new Set,c=[s.stairs,s.elevators,s.gems,s.springs,s.enemies,s.doors];for(const d of c)for(const m of d){if(!m.id||l.has(m.id))throw new Error(`Level JSON: duplicate or empty entity id '${m.id}'.`);l.add(m.id)}for(const d of s.stairs)if(Ga(d.x,`stair ${d.id}.x`),Ga(d.topY,`stair ${d.id}.topY`),d.count!==void 0&&(Ga(d.count,`stair ${d.id}.count`),!Number.isInteger(d.count)||d.count<1))throw new Error(`Level JSON: stair ${d.id}.count must be integer >= 1.`);const u=new Map;for(const d of s.doors){Ga(d.x,`door ${d.id}.x`),Ga(d.topY,`door ${d.id}.topY`);const m=u.get(d.pairId)??[];m.push(d),u.set(d.pairId,m)}for(const[d,m]of u)if(m.length!==2)throw new Error(`Level JSON: door pair '${d}' must contain exactly two doors.`);return s}function pr(r,e={}){return r.colorSpace=fi,r.wrapS=e.wrapS??Vn,r.wrapT=e.wrapT??Vn,e.repeat&&r.repeat.set(e.repeat[0],e.repeat[1]),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),r}function mr(r,e={}){return r.colorSpace=ka,r.wrapS=e.wrapS??Vn,r.wrapT=e.wrapT??Vn,e.repeat&&r.repeat.set(e.repeat[0],e.repeat[1]),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),r}function h3(){return Ey()}function d3(){const r=new ja,e="/textures/door/door_col.jpg",n="/textures/door/door_nrm.jpg",s=pr(r.load(e)),l=mr(r.load(n));return new nn({map:s,normalMap:l,normalScale:new He(5,5),roughness:1,metalness:.01})}function Ey(){const r=new ja,e="/textures/step/STEP_col.jpg",n="/textures/step/STEP_nrm.jpg",s=[.5,.9],l=pr(r.load(e),{wrapS:Gn,wrapT:Gn,repeat:s,anisotropy:7}),c=mr(r.load(n),{wrapS:Gn,wrapT:Gn,repeat:s,anisotropy:7});return new nn({map:l,normalMap:c,normalScale:new He(30,30),roughness:1,metalness:.1})}function p3(r,e=6.12,n=52){const s=new ja,l="/textures/wall/WALL_col.jpg",c="/textures/wall/WALL_nrm.jpg",u=7,d=Math.max(1,Math.ceil((n||52)/6)),m=[u,d],p=pr(s.load(l),{wrapS:Gn,wrapT:Gn,repeat:m,anisotropy:7}),x=mr(s.load(c),{wrapS:Gn,wrapT:Gn,repeat:m,anisotropy:7});return new nn({map:p,normalMap:x,normalScale:new He(3.85,3.85),roughness:1,metalness:.18})}function m3(r){const e=new ja,n="/textures/step/STEP_col.jpg",s="/textures/step/STEP_nrm.jpg",l=pr(e.load(n)),c=mr(e.load(s));return new nn({map:l,normalMap:c,normalScale:new He(20,20),roughness:1,metalness:.07})}function g3(){const r=new ja,e="/textures/lift/STEP_col.png",n="/textures/lift/STEP_nrm.png",s=pr(r.load(e)),l=mr(r.load(n));return new nn({map:s,normalMap:l,normalScale:new He(3,3),roughness:1,metalness:.2})}function v3(){const r=new ja,e="/textures/enemy/ENEMY_col.jpg",n="/textures/enemy/ENEMY_nrm.jpg",s=r.load(e),l=r.load(n);return s.wrapS=Vn,s.wrapT=Vn,l.wrapS=Vn,l.wrapT=Vn,new nn({map:s,normalMap:l,normalScale:new He(3.4,3.4),roughness:1,metalness:.1})}function x3(){const r=new ja,e="/textures/collapse/STEP_col.jpg",n="/textures/collapse/STEP_nrm.jpg",s=pr(r.load(e)),l=mr(r.load(n));return new nn({map:s,normalMap:l,normalScale:new He(5,5),roughness:.6,metalness:.2})}function _3(){const r=new ja,e="/textures/step/STEP_col.jpg",n="/textures/step/STEP_nrm.jpg",s=pr(r.load(e)),l=mr(r.load(n));return new nn({map:s,normalMap:l,normalScale:new He(20,20),roughness:.6,metalness:.2})}class y3{ctx=null;muted=!1;initCtx(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(e){this.muted=e}isMuted(){return this.muted}playJump(){if(!this.muted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.currentTime;e.type="square",e.frequency.setValueAtTime(140,s),e.frequency.exponentialRampToValueAtTime(440,s+.12),n.gain.setValueAtTime(.12,s),n.gain.exponentialRampToValueAtTime(.001,s+.12),e.connect(n),n.connect(this.ctx.destination),e.start(s),e.stop(s+.13)}catch{}}playSuperJump(){if(!this.muted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.currentTime;e.type="triangle",e.frequency.setValueAtTime(220,s),e.frequency.exponentialRampToValueAtTime(880,s+.25),n.gain.setValueAtTime(.2,s),n.gain.exponentialRampToValueAtTime(.001,s+.25),e.connect(n),n.connect(this.ctx.destination),e.start(s),e.stop(s+.26)}catch{}}playCoin(){if(!this.muted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createOscillator(),l=this.ctx.createGain();n.type="sine",s.type="sine",n.frequency.setValueAtTime(987.77,e),n.frequency.setValueAtTime(1318.51,e+.08),s.frequency.setValueAtTime(1975.53,e),s.frequency.setValueAtTime(2637.02,e+.08),l.gain.setValueAtTime(.12,e),l.gain.exponentialRampToValueAtTime(.001,e+.28),n.connect(l),s.connect(l),l.connect(this.ctx.destination),n.start(e),s.start(e),n.stop(e+.3),s.stop(e+.3)}catch{}}playCheckpoint(){if(!this.muted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,l)=>{const c=this.ctx.createOscillator(),u=this.ctx.createGain(),d=e+l*.07;c.type="triangle",c.frequency.setValueAtTime(s,d),u.gain.setValueAtTime(.15,d),u.gain.exponentialRampToValueAtTime(.001,d+.2),c.connect(u),u.connect(this.ctx.destination),c.start(d),c.stop(d+.22)})}catch{}}playGameOver(){if(!this.muted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.currentTime;[300,260,220,150].forEach((s,l)=>{const c=this.ctx.createOscillator(),u=this.ctx.createGain(),d=e+l*.12;c.type="sawtooth",c.frequency.setValueAtTime(s,d),u.gain.setValueAtTime(.15,d),u.gain.exponentialRampToValueAtTime(.001,d+.18),c.connect(u),u.connect(this.ctx.destination),c.start(d),c.stop(d+.2)})}catch{}}playWin(){if(!this.muted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.currentTime,n=[523.25,659.25,783.99,1046.5,880,1046.5,1318.51];n.forEach((s,l)=>{const c=this.ctx.createOscillator(),u=this.ctx.createGain(),d=e+l*.11;c.type="square",c.frequency.setValueAtTime(s,d),u.gain.setValueAtTime(.12,d),u.gain.exponentialRampToValueAtTime(.001,d+(l===n.length-1?.6:.15)),c.connect(u),u.connect(this.ctx.destination),c.start(d),c.stop(d+(l===n.length-1?.65:.18))})}catch{}}}const Gi=new y3,Vp=640,kp=640,Gd=Vp/kp,Vd=38,S3=64,kd={desktop:{id:"desktop",label:"640×480 · 16:9",width:640,height:480},tabletPortrait:{id:"tabletPortrait",label:"480×640 · 3:4",width:480,height:640},phonePortrait:{id:"phonePortrait",label:"400×660 · 10:16",width:400,height:660}};function __(r,e){const n=e>=r,s=Math.min(r,e);return n?s<620?kd.phonePortrait:kd.tabletPortrait:kd.desktop}const Nn=24,M3=1,uo=.16,b3=3.6,Cu=11.2,Ru=28.5,an=6,zi=.35,Bi=2.4,ua=Math.PI*2,jt=an+Bi*.5,y_=.5,E3=-.020833333333333332*ua,Yd=.52,Cs=1/60,T3=.25,w3=by(My),Fl=(r,e)=>{const n=r%e;return n<0?n+e:n},vn=r=>r/Nn*ua+E3,fo=(r,e,n,s)=>[r-Nn,r,r+Nn].some(c=>c+e>n&&c-e<n+s),jn=r=>Math.floor(Fl(r,Nn)),Ki=r=>Fl(r,Nn)+.5,Rl=(r,e)=>{const n=Math.abs(r-e);return Math.min(n,Nn-n)};class A3{host;level;towerHeight;renderer;scene;camera;culler=new c3;sceneMode="menu";menuCamAngle=0;staticStairs=[];stairsInstancedMesh;towerMesh;floorMesh;sky;water;composer;bloomPass;sun=new k;waterLevel=-1.2;wasInWater=!1;waterEnterCooldown=0;topRing;summitCrown;waterRipples=[];pmremGenerator;elevators=[];gems=[];springs=[];hazards=[];doors=[];checkpoints=[];activeCheckpoint=0;doorCooldown=0;collapsingStairs=[];levers=[];togglableStairs=[];leverCooldown=0;playerGroup;playerBody;leftArm;rightArm;leftLeg;rightLeg;leftLowerLeg;rightLowerLeg;leftFoot;rightFoot;leftEye;rightEye;torso;slimeTopDrop;playerLight;particles=[];particlePointsMesh;particleGeoPositions;particleGeoColors;maxParticles=250;sunLight;hemiLight;playerState={x:y_,y:.5,vx:0,vy:0,grounded:!0,coyoteTimer:0,jumpBufferTimer:0,facingRight:!0,rideElevator:-1,status:"running",walkCycle:0,score:0,gemsCollected:0,totalGems:0,jumpCount:0,elapsedTime:0,camLeadAngle:0,verticalLead:0,smoothCamY:.5,idleTimer:0,facingYaw:0,jiggle:0,jiggleVel:0,crownFlash:0,enemyHitCooldown:0,knockdownFloorY:null,currentStairTopY:null};input={left:!1,right:!1,up:!1,down:!1,jumpQueued:!1,doorQueued:!1};config={cullingEnabled:!0,simulatedFpsThrottle:0,filterMode:"crisp",renderScale:1,soundMuted:!1};accumulator=0;lastTime=performance.now();animFrameId=0;lastThrottleTime=performance.now();playerHudTimer=0;onPlayerStateUpdate;onGameStatusChange;constructor(e,n=w3){this.host=e,this.level=n,this.towerHeight=n.towerHeight,this.playerState.x=n.start.x,this.playerState.y=n.start.y,this.playerState.smoothCamY=n.start.y,this.playerState.idleTimer=2,this.playerState.facingYaw=Math.atan2(Math.sin(vn(n.start.x)),Math.cos(vn(n.start.x))),this.initThree(),this.buildWorld(),this.buildPlayer(),this.buildParticleSystem(),this.setupEvents(),this.startLoop()}initThree(){this.scene=new Nx,this.scene.background=null,this.scene.fog=new cm(13421772,25e-5),this.camera=new hi(Vd,Gd,.1,2e4),this.camera.position.set(0,5,14),this.renderer=new JA({antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(Vp,kp,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nl,this.renderer.shadowMap.autoUpdate=!0,this.renderer.outputColorSpace=fi,this.renderer.toneMapping=Vu,this.renderer.toneMappingExposure=.9;const e=this.renderer.domElement;e.id="game-canvas-640x640",e.style.width="100%",e.style.height="100%",e.style.objectFit="cover",e.style.display="block",this.applyCanvasFilter(),this.host.appendChild(e),this.hemiLight=new jb("#fffddb","#34697b",.66),this.scene.add(this.hemiLight),this.sunLight=new Jb("#ffe999",1.9),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera=new Yl(-120,120,120,-120,.1,450),this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.normalBias=.02,this.sunLight.shadow.radius=.4,this.sunLight.target.position.set(0,5,0),this.scene.add(this.sunLight.target),this.sunLight.shadow.camera.position.copy(this.sunLight.position),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.scene.add(this.sunLight);const n=new r3(this.scene,this.camera);this.bloomPass=new Eo(new He(Vp,kp),.01,0,.24);const s=new l3;this.composer=new s3(this.renderer),this.composer.addPass(n),this.composer.addPass(this.bloomPass),this.composer.addPass(s)}applyCanvasFilter(){const e=this.renderer.domElement;this.config.filterMode==="crisp"?(e.style.imageRendering="pixelated",e.style.imageRendering="crisp-edges"):e.style.imageRendering="auto"}buildWorld(){this.sky=new qu,this.sky.scale.setScalar(1e4),this.sky.frustumCulled=!1,this.scene.add(this.sky);const e=this.sky.material.uniforms,n=33,s=220,l=ui.degToRad(90-n),c=ui.degToRad(s);this.sun.setFromSphericalCoords(1,l,c),e.turbidity.value=2,e.rayleigh.value=1,e.mieCoefficient.value=.005,e.mieDirectionalG.value=.8,e.sunPosition.value.copy(this.sun),e.cloudCoverage&&(e.cloudScale.value=2e-4,e.cloudSpeed.value=1e-5,e.cloudCoverage.value=.4,e.cloudDensity.value=.4,e.cloudElevation.value=.5,e.time.value=0),e.exposure!==void 0&&(e.exposure.value=.028),this.sunLight.position.copy(this.sun).multiplyScalar(125),this.sunLight.target.position.set(0,5,0),this.scene.add(this.sunLight.target),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.sunLight.color=new ht("#ffe999"),this.hemiLight.color=new ht("#fffddb"),this.hemiLight.groundColor=new ht("#405080");try{this.pmremGenerator=new Bp(this.renderer);const S=new Nx;S.add(this.sky.clone());const y=this.pmremGenerator.fromScene(S);this.scene.environment=null,this.scene.environmentIntensity=0,y.dispose()}catch{}const d=new kl(12e3,12e3),x=new ja().load("/textures/waternormals.jpg");x.wrapS=Gn,x.wrapT=Gn,this.water=new $A(d,{textureWidth:512,textureHeight:512,waterNormals:x,sunDirection:this.sun.clone().normalize(),sunColor:8355711,waterColor:5592405,distortionScale:.8,fog:this.scene.fog!==void 0}),this.water.material.onBeforeCompile=S=>{S.uniforms.uTowerRadius={value:an},S.fragmentShader=S.fragmentShader.replace("void main() {",`
        uniform float uTowerRadius;
        void main() {
        `),S.fragmentShader=S.fragmentShader.replace("vec4 noise = getNoise( worldPosition.xz * size );",`
        vec4 noise = getNoise( worldPosition.xz * size );

        // Interakcja z wieżą: fale odbite biegną promieniście od ściany.
        // Używamy gładkich współrzędnych wektorowych (outward.x/y) zamiast atan(),
        // co zapobiega powstawaniu prostej linii / szwu na osi ujemnej.
        vec2 toTower = worldPosition.xz;
        float distToTower = length(toTower);
        vec2 outward = toTower / max(distToTower, 0.001);

        if (distToTower > uTowerRadius && distToTower < uTowerRadius + 26.0) {
          float d = distToTower - uTowerRadius;

          // Płynna modulacja kątowa 360° oparta na wektorze kierunkowym (bez szwów i gałęzi)
          float dirVar = outward.x * 0.8 + outward.y * 0.6;
          float dirVar2 = outward.x * outward.y * 2.0;

          float decay = exp(-d * 0.18);
          float freq = 1.7 + 0.35 * dirVar;
          float refl = sin(d * freq - time * 2.6 + dirVar2 * 1.5)
                     + 0.4 * sin(d * 2.7 - time * 4.1 - dirVar * 2.0);
          noise.xy += outward * refl * 0.38 * decay;

          // Kipiel tuż przy murze — chaotyczne, drobne zmarszczki
          float chopDecay = exp(-d * 0.75);
          float chop = sin(d * 8.0 - time * 6.5 + dirVar * 2.5)
                     * sin(worldPosition.x * 1.8 - worldPosition.z * 1.4 + time * 4.5);
          vec2 tangential = vec2(-outward.y, outward.x);
          noise.xy += tangential * chop * 0.25 * chopDecay;
        }
        `)},this.water.rotation.x=-Math.PI/2,this.water.position.y=this.waterLevel,this.floorMesh=this.water,this.floorMesh.frustumCulled=!1,this.floorMesh.receiveShadow=!0,this.scene.add(this.water);const g=this.towerHeight+6,v=an+.12;this.towerMesh=new lt(new or(an,an+.18,g,48,1,!1),p3(void 0,v,g)),this.towerMesh.position.y=this.towerHeight/2-3,this.towerMesh.receiveShadow=!0,this.towerMesh.castShadow=!0,this.towerMesh.frustumCulled=!1,this.scene.add(this.towerMesh);const _=new lt(new Il(an+.32,.06,10,48),new nn({color:"#d6ecff",roughness:.92,transparent:!0,opacity:.18,depthWrite:!1}));_.rotation.x=Math.PI/2,_.position.y=this.waterLevel+.04,_.renderOrder=1,this.scene.add(_),this.topRing=new lt(new Il(an-.5,.25,14,64),new nn({color:"#fbbf24",emissive:"#d97706",emissiveIntensity:.18,roughness:.5,metalness:.8})),this.topRing.position.y=this.towerHeight+.6,this.topRing.rotation.x=Math.PI/2,this.topRing.castShadow=!0,this.scene.add(this.topRing),this.summitCrown=new Ln,this.summitCrown.position.y=this.towerHeight;const T=new lt(new Hi(3.2,24,16,0,Math.PI*2,0,Math.PI*.5),new nn({color:"#7dd3fc",emissive:"#075985",emissiveIntensity:.12,transparent:!0,opacity:.36,roughness:.08,metalness:.12,envMapIntensity:1.2,depthWrite:!1,side:Qi}));this.summitCrown.add(T);const R=new lt(new Pl(1.1,0),new nn({color:"#fef08a",emissive:"#eab308",emissiveIntensity:.3,metalness:.9,roughness:.1}));R.position.y=1.35,this.summitCrown.add(R),this.scene.add(this.summitCrown),this.buildStairs(),this.buildElevators(),this.buildSprings(),this.buildGems(),this.buildHazards(),this.buildCheckpoints(),this.buildDoors(),this.buildCollapsingStairs(),this.buildLeversAndTogglableStairs(),this.prewarmSummitShaders()}prewarmSummitShaders(){const e=this.topRing.visible,n=this.summitCrown.visible;this.topRing.visible=!0,this.summitCrown.visible=!0;const s=this.renderer;s.compileAsync?s.compileAsync(this.scene,this.camera).finally(()=>{this.topRing.visible=e,this.summitCrown.visible=n}):(s.compile(this.scene,this.camera),this.topRing.visible=e,this.summitCrown.visible=n)}buildStairs(){const e=an+Bi*.5,n=ua*an/Nn,s=new Map,l=(m,p,x)=>{const g=jn(p),v=`${g}@${x.toFixed(3)}`;s.has(v)||s.set(v,{id:m,stepX:g,topY:x})};for(const m of this.level.stairs){const p=Math.max(1,Math.floor(m.count??1));for(let x=0;x<p;x++)l(p>1?`${m.id}#${x}`:m.id,m.x+x,m.topY)}for(const m of this.level.doors)l(`${m.id}-stair`,m.x,m.topY);for(const m of this.level.checkpoints)l(`checkpoint-${m.id}-stair`,m.x,m.y);const c=[];for(const m of s.values()){const p=vn(Ki(m.stepX)),x=new k(Math.sin(p),0,Math.cos(p)),g=new k(x.x*e,m.topY-zi*.5,x.z*e),v=new fr().setFromEuler(new qa(0,p,0)),_=new k(n*1.02,1,1);c.push({id:m.id,x:m.stepX,topY:m.topY,width:1,theta:p,radial:x,tangLength:n,defaultMatrix:new Ft().compose(g,v,_),culledMatrix:new Ft().compose(g,v,new k(0,0,0))})}this.staticStairs=c;const u=new Zn(1,zi,Bi),d=m3();this.stairsInstancedMesh=new Ob(u,d,c.length),this.stairsInstancedMesh.instanceMatrix.setUsage(j1),this.stairsInstancedMesh.castShadow=!0,this.stairsInstancedMesh.receiveShadow=!0,this.stairsInstancedMesh.frustumCulled=!1,c.forEach((m,p)=>{this.stairsInstancedMesh.setMatrixAt(p,m.defaultMatrix)}),this.stairsInstancedMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.stairsInstancedMesh)}buildElevators(){const e=this.level.elevators,n=ua*an/Nn,s=new Zn(n*1.02,zi,Bi),l=zi,c=h3();e.forEach(u=>{const d=vn(u.x+u.width*.5),m=new k(Math.sin(d),0,Math.cos(d)),p=g3(),x=new lt(s,p);x.castShadow=!0,x.receiveShadow=!0,x.rotation.y=d,x.position.set(m.x*(an+Bi*.5),u.yMin,m.z*(an+Bi*.5)),this.scene.add(x),this.elevators.push({...u,mesh:x,currentTopY:u.yMin+zi*.5,theta:d});const g=u.yMax-u.yMin,v=new Zn(l,g,l),_=new lt(v,c);_.rotation.y=d;const T=an+l*.5;_.position.set(m.x*T,(u.yMin+u.yMax)/2,m.z*T),_.receiveShadow=!0,this.scene.add(_)})}buildSprings(){this.level.springs.forEach(n=>{const s=vn(n.x+.5),l=new k(Math.sin(s),0,Math.cos(s)),c=new Ln,u=new lt(new or(.45,.5,.15,16),new nn({color:"#ef4444",metalness:.6,roughness:.3}));u.position.y=n.topY+.08,c.add(u);const d=new lt(new or(.4,.4,.1,16),new nn({color:"#fbbf24",emissive:"#f59e0b",emissiveIntensity:.6,metalness:.8}));d.position.y=n.topY+.18,c.add(d),c.position.set(l.x*jt,0,l.z*jt),c.rotation.y=s,this.scene.add(c),this.springs.push({...n,mesh:u,theta:s,cooldown:0})})}buildGems(){const e=new Pl(.32,0),n=new nn({color:"#f59e0b",emissive:"#d97706",emissiveIntensity:.6,roughness:.6,metalness:.9}),s=this.level.gems;this.playerState.totalGems=s.length,s.forEach(l=>{const c=vn(l.x),u=new k(Math.sin(c),0,Math.cos(c)),d=new lt(e,n.clone());d.castShadow=!0,d.position.set(u.x*jt,l.y,u.z*jt),this.scene.add(d),this.gems.push({id:l.id,x:l.x,y:l.y,mesh:d,collected:!1,theta:c})})}findEnemyLandingX(e,n,s,l){if(s<=0)return Ki(jn(e));const c=jn(e),u=[l,-l];for(const d of u){const m=jn(c+d*s);if(this.staticStairs.some(x=>jn(x.x)===m&&Math.abs(x.topY-n)<.2))return Ki(m)}return Ki(c)}buildHazards(){const e=this.level.enemies,n=v3();n.map&&(n.map.wrapS=Gn,n.map.wrapT=Gn,n.map.repeat.set(.6,.6),n.map.offset.set(0,0),n.map.center.set(.5,.5),n.map.rotation=0,n.map.flipY=!1,n.map.needsUpdate=!0),n.normalMap&&(n.normalMap.wrapS=Gn,n.normalMap.wrapT=Gn,n.normalMap.repeat.set(.6,.6),n.normalMap.offset.set(0,0),n.normalMap.center.set(.5,.5),n.normalMap.rotation=0,n.normalMap.flipY=!1,n.normalMap.needsUpdate=!0);const s=new Hi(.32,14,14),c=Cu*Cu/(2*Ru)*.5;e.forEach(u=>{const d=u.behavior??"bounce",m=u.amplitude??c,p=u.speed??1.2,x=jn(u.xCenter);let g=u.y;for(const P of this.staticStairs)if(jn(P.x)===x&&Math.abs(P.topY-u.y)<.75){g=P.topY;break}const v=Ki(x),_=Math.max(0,Math.floor(u.moveSteps??0)),T=u.direction===-1?-1:1,S=2*Math.sqrt(2*m/Ru)/Math.max(.25,p),y=this.findEnemyLandingX(v,g,_,T),L=new lt(s,n);L.castShadow=!0,L.receiveShadow=!0,L.userData.spinAxis=new k(0,0,1),L.userData.spinSpeed=(p??1.2)*.8,this.scene.add(L),this.hazards.push({id:u.id,x:v,y:u.y,behavior:d,amplitude:m,speed:p,currentX:v,bounceElapsed:0,bounceDuration:S,bounceBaseY:g,bounceFromX:v,bounceToX:y,moveSteps:_,direction:T,mesh:L,theta:vn(v)})})}buildLeversAndTogglableStairs(){var e=.5,n=new Zn(.06,.06,e),s=new Hi(.08,8,8),l=new nn({color:"#ef4444",emissive:"#7f1d1d",emissiveIntensity:.9,roughness:.1,metalness:.6});this.level.levers.forEach(c=>{var u=vn(Ki(jn(c.x))),d=new k(Math.sin(u),0,Math.cos(u)),m=new Ln,p=new Ln;p.name="armGroup";var x=new lt(n,new nn({color:"#cbd5e1",emissive:"#475569",emissiveIntensity:.4,metalness:.5,roughness:.3}));x.position.set(0,0,e/2),p.add(x);var g=new lt(s,l.clone());g.position.set(0,0,e),g.userData={isBall:!0},p.add(g),p.rotation.x=-.6,m.add(p),m.position.set(d.x*(an+.25),c.topY+1.2,d.z*(an+.25)),m.rotation.y=u,this.scene.add(m),this.levers.push({id:c.id,x:c.x,topY:c.topY,theta:u,mesh:m,extended:!1})}),this.level.togglableStairs.forEach(c=>{const u=vn(Ki(jn(c.x))),d=new k(Math.sin(u),0,Math.cos(u)),m=ua*an/Nn,p=new Ln,x=new Zn(m*1.02,zi,Bi),g=_3(),v=new lt(x,g);v.castShadow=!0,v.receiveShadow=!0,p.add(v),p.position.set(d.x*(an-.8),c.topY-zi*.5,d.z*(an-.8)),p.rotation.y=u,this.scene.add(p),this.togglableStairs.push({id:c.id,x:Ki(jn(c.x)),topY:c.topY,leverId:c.leverId,theta:u,mesh:p,extended:!1,retractOffset:0})})}buildCollapsingStairs(){const e=x3();this.level.collapsingStairs.forEach(n=>{const s=Ki(jn(n.x)),l=vn(s),c=new k(Math.sin(l),0,Math.cos(l)),u=new Ln,d=ua*an/Nn,m=new Zn(d*1.02,zi,Bi),p=new lt(m,e);p.castShadow=!0,p.receiveShadow=!0,u.add(p),u.position.set(c.x*jt,n.topY-zi*.5,c.z*jt),u.rotation.y=l,this.scene.add(u),this.collapsingStairs.push({id:n.id,x:s,topY:n.topY,theta:l,mesh:u,state:"idle",timer:0,retractOffset:0})})}buildCheckpoints(){this.level.checkpoints.forEach(n=>{const s=Ki(jn(n.x)),l=vn(s),c=new k(Math.sin(l),0,Math.cos(l)),u=new Ln,d=new lt(new or(.06,.06,1.8,8),new nn({color:"#64748b",metalness:.8}));d.position.y=n.y+.9,u.add(d);const m=new lt(new Zn(.6,.4,.05),new nn({color:"#ef4444",emissive:"#991b1b",emissiveIntensity:.3}));m.position.set(.3,n.y+1.5,0),u.add(m),u.position.set(c.x*(jt-.4),0,c.z*(jt-.4)),u.rotation.y=l,this.scene.add(u),this.checkpoints.push({...n,x:s,activated:!1,mesh:u})})}buildDoors(){const e=new Map;for(const n of this.level.doors){const s=e.get(n.pairId);(s===void 0||n.topY<s)&&e.set(n.pairId,n.topY)}this.level.doors.forEach(n=>{const s=Ki(jn(n.x)),l=vn(s),c=new k(Math.sin(l),0,Math.cos(l)),d=n.topY===e.get(n.pairId)?"#22c55e":"#ef4444",m=new Ln,p=d3(),x=Ey(),g=new lt(new Zn(.85,2,.16),p);g.position.set(0,.95,.03),g.castShadow=!0,m.add(g);const v=new lt(new Zn(.18,2.15,.3),x),_=v.clone();v.position.set(-.53,1.05,0),_.position.set(.53,1.05,0);const T=x.clone();T.map&&(T.map.center.set(.5,.5),T.map.rotation=Math.PI/2,T.map.needsUpdate=!0),T.normalMap&&(T.normalMap.center.set(.5,.5),T.normalMap.rotation=Math.PI/2,T.normalMap.needsUpdate=!0);const R=new lt(new Zn(1.25,.2,.3),T);R.position.set(0,2.05,0),m.add(v,_,R);const S=new lt(new um(.18,.35,4),new Ds({color:d}));S.position.set(0,2.55,.2),S.rotation.z=Math.PI,S.userData.baseY=2.55,m.add(S),m.position.set(c.x*(an+.2),n.topY,c.z*(an+.2)),m.rotation.y=l,this.scene.add(m),this.doors.push({...n,x:s,color:d,theta:l,mesh:m})})}buildPlayer(){this.playerGroup=new Ln,this.scene.add(this.playerGroup),this.playerBody=new Ln,this.playerBody.position.y=-Yd,this.playerGroup.add(this.playerBody);const e=.52,n=[new He(0,0),new He(.4,0),new He(.49,.1),new He(.53,.3),new He(.51,.56),new He(.45,.86),new He(.385,1.12),new He(.4,1.36),new He(.415,1.56),new He(.365,1.76),new He(.265,1.93),new He(.125,2.02),new He(0,2.05)].map(V=>new He(V.x,V.y+e)),s=new hm(n,24);s.scale(.9,1,.9),s.computeVertexNormals();const l=new nn({color:"#4ade80",emissive:"#000000",emissiveIntensity:0,roughness:.18,metalness:0,transparent:!0,opacity:.82});this.torso=new lt(s,l),this.torso.castShadow=!0,this.playerBody.add(this.torso);const c=new Hi(.3,14,12);c.scale(1,1.35,1);const u=new nn({color:"#bbf7d0",emissive:"#000000",emissiveIntensity:0,roughness:.3,transparent:!0,opacity:.45});u.depthWrite=!1;const d=new lt(c,u);d.position.y=e+.72,d.renderOrder=0,this.torso.renderOrder=1,this.torso.add(d);const m=new Pl(.11,0);m.rotateZ(Math.PI/6);const p=new nn({color:"#27c10c",emissive:"#37ca0b",emissiveIntensity:.5,metalness:1,roughness:.8}),x=new lt(m,p);x.position.y=e+2.15,x.castShadow=!0,this.playerBody.add(x),this.slimeTopDrop=x;const g=new Hi(.08,10,10),v=new Ds({color:"#ffffff"}),_=new Hi(.045,8,8),T=new Ds({color:"#000000"});this.leftEye=new lt(g,v),this.leftEye.position.set(-.13,e+1.64,.32),this.leftEye.renderOrder=3;const R=new lt(_,T);R.position.set(0,0,.05),R.renderOrder=4,this.leftEye.add(R),this.torso.add(this.leftEye),this.rightEye=new lt(g,v),this.rightEye.position.set(.13,e+1.64,.32),this.rightEye.renderOrder=3;const S=new lt(_,T);S.position.set(0,0,.05),S.renderOrder=4,this.rightEye.add(S),this.torso.add(this.rightEye);const y=new lt(new Hi(.05,10,10),new nn({color:"#34d399",emissive:"#065f46",emissiveIntensity:.2,roughness:.25}));y.position.set(0,e+1.52,.37),y.renderOrder=3,this.torso.add(y);const L=new lt(new Il(.085,.022,8,18,Math.PI),new Ds({color:"#34d399"}));L.position.set(0,e+1.44,.4),L.rotation.z=Math.PI,L.renderOrder=3,this.torso.add(L);const P=new Hi(.12,10,10);P.scale(.75,1.7,.75),P.translate(0,-.17,0),this.leftArm=new Ln,this.leftArm.position.set(-.36,e+1.02,0),this.leftArm.rotation.z=.32;const A=new lt(P,l);A.castShadow=!0,this.leftArm.add(A),this.rightArm=new Ln,this.rightArm.position.set(.36,e+1.02,0),this.rightArm.rotation.z=-.32;const I=new lt(P,l);I.castShadow=!0,this.rightArm.add(I),this.playerBody.add(this.leftArm,this.rightArm);const N=new Hi(.15,10,10);N.scale(1,.85,1),N.translate(0,-.1,0);const O=V=>{const q=new Ln;q.position.set(V,e+.3,0);const ue=new Ln;ue.position.y=-.08;const de=new lt(N,l);return de.castShadow=!0,ue.add(de),q.add(ue),{hip:q,lower:ue}},E=O(-.19);this.leftLeg=E.hip,this.leftLowerLeg=E.lower;const U=O(.19);this.rightLeg=U.hip,this.rightLowerLeg=U.lower;const X=new Hi(.15,10,10);X.scale(1.05,.42,1.35),X.translate(0,.063,.03),this.leftFoot=new lt(X,l),this.leftFoot.position.set(-.19,e,.02),this.leftFoot.castShadow=!0,this.playerBody.add(this.leftFoot),this.rightFoot=new lt(X,l),this.rightFoot.position.set(.19,e,.02),this.rightFoot.castShadow=!0,this.playerBody.add(this.rightFoot),this.playerBody.add(this.leftLeg,this.rightLeg),this.playerLight=new Kb("#86efac",0,6,2),this.playerLight.castShadow=!1,this.playerLight.position.set(0,1.5,0),this.playerGroup.add(this.playerLight)}buildParticleSystem(){const e=new Pn;this.particleGeoPositions=new Float32Array(this.maxParticles*3),this.particleGeoColors=new Float32Array(this.maxParticles*3),e.setAttribute("position",new Ci(this.particleGeoPositions,3)),e.setAttribute("color",new Ci(this.particleGeoColors,3));const n=new X_({size:.22,vertexColors:!0,transparent:!0,opacity:.9,blending:Iu,depthWrite:!1});this.particlePointsMesh=new zb(e,n),this.particlePointsMesh.frustumCulled=!1,this.scene.add(this.particlePointsMesh)}spawnParticles(e,n,s,l=2.5){const c=new ht(s);for(let u=0;u<n;u++)this.particles.length>=this.maxParticles&&this.particles.shift(),this.particles.push({pos:e.clone().add(new k((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3)),vel:new k((Math.random()-.5)*l,Math.random()*l*1.2,(Math.random()-.5)*l),color:c.clone(),size:.15+Math.random()*.15,life:0,maxLife:.4+Math.random()*.5})}stepPhysics(e){if(this.sceneMode==="menu"||this.playerState.status!=="running")return;this.playerState.elapsedTime+=e,this.playerState.coyoteTimer>0&&(this.playerState.coyoteTimer-=e),this.playerState.jumpBufferTimer>0&&(this.playerState.jumpBufferTimer-=e),this.doorCooldown>0&&(this.doorCooldown-=e),this.playerState.crownFlash>0&&(this.playerState.crownFlash=Math.max(0,this.playerState.crownFlash-e)),this.playerState.enemyHitCooldown>0&&(this.playerState.enemyHitCooldown=Math.max(0,this.playerState.enemyHitCooldown-e));const n=11.5;this.playerState.jiggleVel+=(-190*this.playerState.jiggle-n*this.playerState.jiggleVel)*e,this.playerState.jiggle+=this.playerState.jiggleVel*e,this.playerState.jiggle=ui.clamp(this.playerState.jiggle,-.32,.32),this.levers.forEach(g=>{var v=Math.abs(this.playerState.y-(g.topY+1.2))<1.5&&Rl(this.playerState.x,g.x)<.9;v&&this.input.doorQueued&&this.leverCooldown<=0&&(this.input.doorQueued=!1,g.extended=!g.extended,this.leverCooldown=.4,Gi.playCheckpoint(),this.togglableStairs.forEach(function(R){R.leverId===g.id&&(R.extended=g.extended)}));var _=g.mesh.children.find(function(R){return R.name==="armGroup"});_&&(_.rotation.x=ui.lerp(_.rotation.x,g.extended?-.2:-1,.12));var T=_?_.children.find(function(R){return R.userData&&R.userData.isBall}):void 0;T&&T.material instanceof nn&&(T.material.color.set(g.extended?"#4ade80":"#ef4444"),T.material.emissive.set(g.extended?"#14532d":"#7f1d1d"))}),this.leverCooldown>0&&(this.leverCooldown-=e),this.togglableStairs.forEach(g=>{var v=g.extended?0:1;g.retractOffset=ui.lerp(g.retractOffset,v,1-Math.exp(-6*e)),Math.abs(g.retractOffset-v)<.005&&(g.retractOffset=v);var _=new k(Math.sin(g.theta),0,Math.cos(g.theta)),T=an+Bi*.5,R=an-.8,S=T+(R-T)*g.retractOffset;g.mesh.position.set(_.x*S,g.topY-zi*.5,_.z*S);var y=g.mesh.children[0];if(y&&y instanceof lt&&y.material instanceof nn){var L=g.retractOffset<.5;y.material.color.set(L?"#4ade80":"#ef4444"),y.material.emissive.set(L?"#198745f0":"#831b1bed")}}),this.input.doorQueued&&(this.doorCooldown<=0&&this.tryUseDoor(),this.input.doorQueued=!1),this.collapsingStairs.forEach(g=>{var v=Math.abs(this.playerState.y-g.topY)<.2&&Rl(this.playerState.x,g.x)<.6;switch(g.state){case"idle":v&&this.playerState.grounded&&(g.state="retracting",g.timer=1);break;case"retracting":g.timer-=e,g.retractOffset=Math.min(1,(1-Math.max(0,g.timer))/1),g.timer<=0&&(g.state="hidden",g.timer=1,g.retractOffset=1);break;case"hidden":g.timer-=e,g.timer<=0&&(g.state="extending",g.timer=1);break;case"extending":g.timer-=e,g.retractOffset=Math.max(0,g.timer/1),g.timer<=0&&(g.state="idle",g.retractOffset=0,g.timer=0);break}var _=new k(Math.sin(g.theta),0,Math.cos(g.theta)),T=jt,R=an-.8,S=T+(R-T)*g.retractOffset;g.mesh.position.set(_.x*S,g.topY-zi*.5,_.z*S)});const s=this.playerState.elapsedTime;if(this.elevators.forEach(g=>{const v=(Math.sin(s*g.speed+g.phase)+1)*.5,_=ui.lerp(g.yMin,g.yMax,v);g.mesh&&(g.mesh.position.y=_),g.currentTopY=_+zi*.5}),this.hazards.forEach(g=>{switch(g.behavior){case"bounce":{if(g.bounceElapsed+=e,g.bounceElapsed>=g.bounceDuration){if(g.bounceElapsed%=g.bounceDuration,g.x=g.bounceToX,g.moveSteps>0){const L=jn(jn(g.bounceFromX)+g.direction*g.moveSteps);jn(g.x)!==L&&(g.direction=g.direction===1?-1:1)}g.bounceFromX=g.x,g.bounceToX=this.findEnemyLandingX(g.x,g.bounceBaseY,g.moveSteps,g.direction)}const T=ui.clamp(g.bounceElapsed/g.bounceDuration,0,1),R=4*g.amplitude*T*(1-T);let S=g.bounceToX-g.bounceFromX;S>Nn*.5&&(S-=Nn),S<-Nn*.5&&(S+=Nn),g.currentX=Fl(g.bounceFromX+S*T,Nn),g.theta=vn(g.currentX);const y=g.bounceBaseY+.32+R;if(g.mesh){const L=new k(Math.sin(g.theta),0,Math.cos(g.theta));g.mesh.position.set(L.x*jt,y,L.z*jt),g.mesh.userData.currentY=y,g.mesh.rotation.x+=e*5,g.mesh.rotation.z+=e*2.5}break}case"patrol":{const T=Math.sin(s*g.speed);if(g.currentX=Fl(g.x+T*g.amplitude,Nn),g.theta=vn(g.currentX),g.mesh){const R=new k(Math.sin(g.theta),0,Math.cos(g.theta));g.mesh.position.set(R.x*jt,g.bounceBaseY+.7,R.z*jt),g.mesh.userData.currentY=g.bounceBaseY+.7,g.mesh.rotation.x+=e*5,g.mesh.rotation.z+=e*2.5}break}default:if(g.currentX=g.x,g.theta=vn(g.x),g.mesh){const T=new k(Math.sin(g.theta),0,Math.cos(g.theta));g.mesh.position.set(T.x*jt,g.bounceBaseY+.7,T.z*jt),g.mesh.userData.currentY=g.bounceBaseY+.7,g.mesh.rotation.x+=e*5,g.mesh.rotation.z+=e*2.5}break}const v=g.mesh,_=v&&v.userData?.currentY?v.userData.currentY:g.y;this.playerState.enemyHitCooldown<=0&&_+.32>=this.playerState.y-.1&&_-.32<=this.playerState.y+2.4&&fo(this.playerState.x,uo*1.5,g.currentX,.4)&&(this.playerState.enemyHitCooldown=.8,this.playerState.knockdownFloorY=this.playerState.y,this.playerState.vy=7.5,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.jiggleVel-=8,this.spawnParticles(this.playerGroup.position,8,16707722,2))}),this.springs.forEach(g=>{g.cooldown>0&&(g.cooldown-=e)}),this.playerState.rideElevator>=0){const g=this.elevators[this.playerState.rideElevator];g&&Math.abs(this.playerState.y-g.currentTopY)<.45&&(this.playerState.y=g.currentTopY)}const l=(this.input.right?1:0)-(this.input.left?1:0);this.playerState.vx=l*b3,this.playerState.x=Fl(this.playerState.x+this.playerState.vx*e,Nn),l!==0?(this.playerState.facingRight=l>0,this.playerState.walkCycle+=e*9,this.playerState.idleTimer=0):this.playerState.idleTimer+=e,this.input.jumpQueued&&(this.playerState.jumpBufferTimer=.12,this.input.jumpQueued=!1);const c=this.playerState.grounded||this.playerState.coyoteTimer>0;if(this.playerState.jumpBufferTimer>0&&c){this.playerState.vy=Cu,this.playerState.grounded=!1,this.playerState.coyoteTimer=0,this.playerState.jumpBufferTimer=0,this.playerState.rideElevator=-1,this.playerState.jumpCount++,Gi.playJump(),this.playerState.jiggleVel+=6.5;const g=vn(this.playerState.x),v=new k(Math.sin(g),0,Math.cos(g));this.spawnParticles(new k(v.x*jt,this.playerState.y,v.z*jt),6,9684477,1.5)}!this.input.up&&this.playerState.vy>4&&(this.playerState.vy*=.88),this.playerState.vy-=Ru*e;const u=this.playerState.y,d=this.playerState.y+this.playerState.vy*e,m=this.findGround(u,d);if(m&&this.playerState.vy<=0){if(!this.playerState.grounded){const g=Math.min(Math.abs(this.playerState.vy)/Cu,1.6);this.playerState.jiggleVel-=9*g}this.playerState.y=m.topY,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.coyoteTimer=0,this.playerState.rideElevator=m.rideElevator,this.playerState.currentStairTopY=m.topY,this.playerState.knockdownFloorY=null}else this.playerState.grounded&&(this.playerState.coyoteTimer=.1),this.playerState.y=d,this.playerState.grounded=!1,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=null;this.springs.forEach(g=>{if(g.cooldown<=0&&Math.abs(this.playerState.y-g.topY)<.5&&fo(this.playerState.x,uo*1.5,g.x,.6)&&this.playerState.vy<=2){g.cooldown=.4,this.playerState.vy=g.bounceForce,this.playerState.grounded=!1,this.playerState.rideElevator=-1,Gi.playSuperJump();const v=vn(g.x+.5),_=new k(Math.sin(v),0,Math.cos(v));this.spawnParticles(new k(_.x*jt,g.topY+.2,_.z*jt),16,16096779,4.2)}}),this.gems.forEach(g=>{!g.collected&&g.y>=this.playerState.y-.3&&g.y<=this.playerState.y+2.5&&fo(this.playerState.x,uo,g.x,.6)&&(g.collected=!0,this.playerState.gemsCollected++,this.playerState.score+=250,this.playerState.crownFlash=.3,Gi.playCoin(),g.mesh&&(g.mesh.visible=!1,this.spawnParticles(g.mesh.position,14,16498468,3.5)))}),this.checkpoints.forEach(g=>{if(!g.activated&&Math.abs(this.playerState.y-g.y)<1.2&&fo(this.playerState.x,uo*2,g.x,1.2)&&(g.activated=!0,this.activeCheckpoint=g.id,Gi.playCheckpoint(),this.playerState.score+=500,g.mesh)){const v=g.mesh.children[1];v&&v.material instanceof nn&&(v.material.color.set("#22c55e"),v.material.emissive.set("#15803d")),this.spawnParticles(g.mesh.position,20,2278750,3)}});const p=this.waterLevel+.25;if(this.waterEnterCooldown>0&&(this.waterEnterCooldown-=e),this.playerState.y<=p){if(!this.wasInWater&&this.playerState.vy<0&&this.waterEnterCooldown<=0){this.wasInWater=!0,this.waterEnterCooldown=1;const g=vn(this.playerState.x),v=new k(Math.sin(g),0,Math.cos(g)),_=new k(v.x*jt,p,v.z*jt);this.spawnParticles(_,32,5227511,6.5),this.spawnParticles(_.clone().add(new k(0,.2,0)),20,16777215,4),this.createWaterRipple(_),this.playerState.jiggleVel-=12,Gi.playGameOver()}this.playerState.vy=ui.lerp(this.playerState.vy,-.8,e*2.5),this.playerState.vx*=.96,this.playerState.y<this.waterLevel-1.5&&(this.activeCheckpoint>0?(this.resetInput(),this.respawnAtCheckpoint()):this.setGameStatus("gameover"),this.wasInWater=!1)}else this.wasInWater=!1;if(this.playerState.y<-8&&(this.activeCheckpoint>0?this.respawnAtCheckpoint():(this.setGameStatus("gameover"),Gi.playGameOver())),this.playerState.grounded&&this.playerState.currentStairTopY!==null&&this.playerState.currentStairTopY>=this.towerHeight){this.setGameStatus("win"),this.playerState.score+=2e3,Gi.playWin();const g=new k(0,this.towerHeight+2,0);this.spawnParticles(g,60,16498468,5),this.spawnParticles(g,60,3718648,5)}}createWaterRipple(e){const n=new dm(.3,.45,24);n.rotateX(-Math.PI/2);const s=new Ds({color:8308991,transparent:!0,opacity:.65,side:Qi,depthWrite:!1}),l=new lt(n,s);l.position.copy(e),l.position.y=this.waterLevel+.02,l.userData={age:0,maxAge:1.8},this.scene.add(l),this.waterRipples.push(l)}respawnAtCheckpoint(){const e=this.checkpoints.find(n=>n.id===this.activeCheckpoint);Gi.playGameOver(),e?(this.playerState.x=e.x,this.playerState.y=e.y+.5,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=e.y):(this.playerState.x=y_,this.playerState.y=.5,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=.5),this.wasInWater=!1,this.waterEnterCooldown=.8}tryUseDoor(){const e=this.doors.find(c=>Rl(this.playerState.x,c.x)<.65&&Math.abs(this.playerState.y-c.topY)<.75);if(!e)return;const n=this.doors.find(c=>c.pairId===e.pairId&&c.id!==e.id);if(!n)return;const s=e.mesh.position.clone().add(new k(0,1,0)),l=n.mesh.position.clone().add(new k(0,1,0));this.spawnParticles(s,18,e.color,3.2),this.playerState.x=n.x,this.playerState.y=n.topY+.08,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.rideElevator=-1,this.playerState.currentStairTopY=n.topY,this.playerState.smoothCamY=n.topY,this.playerState.idleTimer=2,this.doorCooldown=.55,this.spawnParticles(l,18,n.color,3.2),Gi.playCheckpoint()}findGround(e,n){let s=-1/0,l=-1;const c=this.playerState.knockdownFloorY;for(const u of this.staticStairs)(c===null||u.topY<c-.15)&&fo(this.playerState.x,uo,u.x,u.width)&&e>=u.topY-.45&&n<=u.topY+.25&&u.topY>s&&(s=u.topY,l=-1);return this.elevators.forEach((u,d)=>{(c===null||u.currentTopY<c-.15)&&fo(this.playerState.x,uo,u.x,u.width)&&e>=u.currentTopY-.45&&n<=u.currentTopY+.25&&u.currentTopY>s&&(s=u.currentTopY,l=d)}),this.collapsingStairs.forEach(u=>{u.retractOffset<.85&&(c===null||u.topY<c-.01)&&Rl(this.playerState.x,u.x)<.6&&e>=u.topY-.45&&n<=u.topY+.08&&u.topY>s&&(s=u.topY,l=-1)}),this.togglableStairs.forEach(u=>{u.retractOffset>.85||(c===null||u.topY<c-.01)&&Rl(this.playerState.x,u.x)<.6&&e>=u.topY-.45&&n<=u.topY+.08&&u.topY>s&&(s=u.topY,l=-1)}),s===-1/0?null:{topY:s,rideElevator:l}}performCullingPass(e,n){this.culler.cullingEnabled=this.config.cullingEnabled,this.culler.updateFrustum(this.camera);const s=an+Bi*.5;let l=!1;this.staticStairs.forEach((u,d)=>{this.culler.isItemVisible(u.theta,u.topY,s,Bi,e,n)?this.stairsInstancedMesh.setMatrixAt(d,u.defaultMatrix):this.stairsInstancedMesh.setMatrixAt(d,u.culledMatrix),l=!0}),l&&(this.stairsInstancedMesh.instanceMatrix.needsUpdate=!0),this.elevators.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.currentTopY,s,Bi+.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.gems.forEach(u=>{if(u.collected)return;const d=this.culler.isItemVisible(u.theta,u.y,jt,.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.springs.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY,jt,.6,e,n);u.mesh&&u.mesh.parent&&(u.mesh.parent.visible=d)}),this.hazards.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.y,jt,.5,e,n);u.mesh&&(u.mesh.visible=d)}),this.doors.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY+1,an+.25,1.5,e,n);u.mesh.visible=d}),this.collapsingStairs.forEach(u=>{const d=this.culler.isItemVisible(u.theta,u.topY,jt,.5,e,n);u.mesh.visible=d});const c=!this.config.cullingEnabled||n>this.towerHeight-22;this.topRing.visible=c,this.summitCrown.visible=c}startLoop(){const e=n=>{if(this.animFrameId=window.requestAnimationFrame(e),this.config.simulatedFpsThrottle>0){const l=1e3/this.config.simulatedFpsThrottle;if(n-this.lastThrottleTime<l)return;this.lastThrottleTime=n}let s=Math.min((n-this.lastTime)/1e3,T3);for(this.lastTime=n,this.accumulator+=s;this.accumulator>=Cs;)this.stepPhysics(Cs),this.accumulator-=Cs;this.updateVisuals(n*.001),this.sky&&this.sky.material?.uniforms?.time&&(this.sky.material.uniforms.time.value=n*5e-5),this.water&&this.water.material.uniforms?.time&&(this.water.material.uniforms.time.value+=.016666666666666666),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.playerHudTimer+=s,this.playerHudTimer>=.1&&(this.playerHudTimer=0,this.onPlayerStateUpdate?.(this.playerState))};this.animFrameId=window.requestAnimationFrame(e)}updateVisuals(e){const n=vn(this.playerState.x),s=new k(Math.sin(n),0,Math.cos(n)),l=new k(s.x*jt,this.playerState.y,s.z*jt);this.playerGroup.position.copy(l);const c=1,u=this.playerState.idleTimer<c,d=Math.atan2(s.x,s.z);let m=d;u&&(m=d+(this.playerState.facingRight?Math.PI/2:-Math.PI/2));let p=m-this.playerState.facingYaw;p=((p+Math.PI)%ua+ua)%ua-Math.PI;const x=u?18:6,g=Math.sign(p)*Math.min(Math.abs(p),x*Cs);this.playerState.facingYaw+=g,this.playerGroup.rotation.set(0,this.playerState.facingYaw,0);const v=this.playerState.grounded,_=Math.abs(this.playerState.vx)>.1,T=this.playerState.walkCycle,R=!_&&v?Math.sin(e*4.5)*.025:0,S=this.playerState.vy,L=(v?0:ui.clamp(S/40,-.1,.1))+this.playerState.jiggle,P=1+R+L,A=1-(R+L)*.5;this.torso.scale.set(A,P,A),this.playerBody.position.y=-Yd;const I=1-L*.8;this.leftFoot.scale.set(I,1+L*.35,I),this.rightFoot.scale.set(I,1+L*.35,I),this.slimeTopDrop.position.y=Yd+2.15+this.playerState.jiggle*.55+R*1.5,this.slimeTopDrop.rotation.y+=Cs*1.6,this.slimeTopDrop.rotation.z=Math.sin(e*3.1)*.16-this.playerState.vx*.05,this.slimeTopDrop.scale.set(1-L*.4,1+L*.8,1-L*.4);const N=this.slimeTopDrop.material;if(this.playerState.crownFlash>0){const b=1-this.playerState.crownFlash/.2,H=new ht("#fbbf24"),ie=new ht("#6ee7a8");N.color.lerpColors(H,ie,b),N.emissive.set(ie.clone().multiplyScalar(.3).lerp(H.clone().multiplyScalar(.6),1-b)),N.emissiveIntensity=.85-b*.55;const ve=1+(1-b)*.85;this.slimeTopDrop.scale.multiplyScalar(ve)}else N.color.set("#48ff00"),N.emissive.set("#37ca0b"),N.emissiveIntensity=.5;const E=e%3.5<.15;if(this.leftEye.scale.y=E?.08:1,this.rightEye.scale.y=E?.08:1,v&&_){const b=Math.sin(T);this.leftArm.rotation.x=b*.48,this.rightArm.rotation.x=-b*.48,this.leftLeg.rotation.x=-b*.24,this.rightLeg.rotation.x=b*.24,this.leftLowerLeg.rotation.x=Math.max(0,b)*.55,this.rightLowerLeg.rotation.x=Math.max(0,-b)*.55}else this.leftArm.rotation.x=R*1.5,this.rightArm.rotation.x=-R*1.5,v?(this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftLowerLeg.rotation.x=0,this.rightLowerLeg.rotation.x=0):(this.leftLeg.rotation.x=-.12,this.rightLeg.rotation.x=.08,this.leftLowerLeg.rotation.x=.5,this.rightLowerLeg.rotation.x=.42);v&&_?(this.leftFoot.rotation.x=Math.sin(T)*.28,this.rightFoot.rotation.x=-Math.sin(T)*.28):(this.leftFoot.rotation.x=0,this.rightFoot.rotation.x=0);const U=ua/Nn,X=this.playerState.facingRight?1:-1,V=this.playerState.idleTimer<c,q=V?X*U:0;this.playerState.camLeadAngle=ui.lerp(this.playerState.camLeadAngle,q,V?.09:.055);const ue=this.playerState.camLeadAngle,de=n+ue*2;this.playerState.verticalLead=ui.lerp(this.playerState.verticalLead,_&&v?M3*.2:0,.08);const Q=this.playerState.verticalLead,B=v?.09:.045;this.playerState.smoothCamY=ui.lerp(this.playerState.smoothCamY,this.playerState.y,B);const Y=new k(Math.sin(n+ue)*jt,this.playerState.smoothCamY+1.9+Q*.55,Math.cos(n+ue)*jt);let ne,me;if(this.sceneMode==="menu"){this.menuCamAngle+=Cs*.15;const b=42,H=this.towerHeight*.55+6;ne=new k(Math.sin(this.menuCamAngle)*b,H,Math.cos(this.menuCamAngle)*b),me=new k(0,this.towerHeight*.5,0),this.camera.position.lerp(ne,.06)}else{const b=new k(Math.sin(de),0,Math.cos(de)),H=.9;ne=Y.clone().add(b.multiplyScalar(18)).add(new k(0,4+H,0)),me=Y.clone().add(new k(0,H,0)),this.camera.position.lerp(ne,.1)}if(this.camera.lookAt(me),this.sunLight.target.position.set(0,this.towerHeight*.5,0),this.sunLight.target.updateMatrixWorld(),this.sunLight.shadow.camera.lookAt(this.sunLight.target.position),this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.gems.forEach(b=>{b.mesh&&b.mesh.visible&&(b.mesh.rotation.y=e*2.2,b.mesh.position.y=b.y+Math.sin(e*3.5+b.x)*.12)}),this.doors.forEach((b,H)=>{if(!b.mesh.visible)return;const ie=b.mesh.children.find(ve=>ve.userData.baseY!==void 0);ie&&(ie.position.y=Number(ie.userData.baseY)+Math.sin(e*4+H)*.12)}),this.summitCrown&&this.summitCrown.visible){this.summitCrown.rotation.y=e*.5;const b=this.summitCrown.children[1];b&&(b.rotation.y=e*1.5)}this.updateParticles(Cs);for(let b=this.waterRipples.length-1;b>=0;b--){const H=this.waterRipples[b],ie=H.userData;ie.age+=Cs;const ve=ie.age/ie.maxAge;if(ve>=1){this.scene.remove(H),H.geometry.dispose(),H.material.dispose(),this.waterRipples.splice(b,1);continue}const Ee=1+ve*8;H.scale.setScalar(Ee),H.material.opacity=.65*(1-ve)}const G=Math.atan2(this.camera.position.x,this.camera.position.z);this.performCullingPass(G,this.camera.position.y)}updateParticles(e){let n=0;const s=this.particleGeoPositions,l=this.particleGeoColors;for(let c=this.particles.length-1;c>=0;c--){const u=this.particles[c];if(u.life+=e,u.life>=u.maxLife){this.particles.splice(c,1);continue}u.pos.addScaledVector(u.vel,e),u.vel.y-=Ru*.3*e;const d=n*3;s[d]=u.pos.x,s[d+1]=u.pos.y,s[d+2]=u.pos.z;const m=1-u.life/u.maxLife;l[d]=u.color.r*m,l[d+1]=u.color.g*m,l[d+2]=u.color.b*m,n++}this.particlePointsMesh.geometry.attributes.position.needsUpdate=!0,this.particlePointsMesh.geometry.attributes.color.needsUpdate=!0,this.particlePointsMesh.geometry.setDrawRange(0,n)}setupEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}onKeyDown=e=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),(e.key==="ArrowLeft"||e.key.toLowerCase()==="a")&&(this.input.left=!0),(e.key==="ArrowRight"||e.key.toLowerCase()==="d")&&(this.input.right=!0),(e.key==="ArrowUp"||e.key.toLowerCase()==="w"||e.key===" ")&&!this.input.up&&(this.input.jumpQueued=!0,this.input.up=!0),(e.key==="ArrowDown"||e.key.toLowerCase()==="s")&&!this.input.down&&(this.input.doorQueued=!0,this.input.down=!0),e.key.toLowerCase()==="r"&&this.restartGame()};onKeyUp=e=>{(e.key==="ArrowLeft"||e.key.toLowerCase()==="a")&&(this.input.left=!1),(e.key==="ArrowRight"||e.key.toLowerCase()==="d")&&(this.input.right=!1),(e.key==="ArrowUp"||e.key.toLowerCase()==="w"||e.key===" ")&&(this.input.up=!1),(e.key==="ArrowDown"||e.key.toLowerCase()==="s")&&(this.input.down=!1)};setGameStatus(e){this.playerState.status=e,this.onGameStatusChange&&this.onGameStatusChange(e)}setRenderResolution(e,n){const s=this.config.renderScale,l=e*s,c=n*s,u=l/c;this.renderer.setPixelRatio(1),this.renderer.setSize(l,c,!1),this.composer.setSize(l,c);const d=Math.tan(ui.degToRad(Vd)/2)*Gd;if(u<Gd){const m=ui.radToDeg(2*Math.atan(d/u));this.camera.fov=Math.min(m,S3)}else this.camera.fov=Vd;this.camera.aspect=u,this.camera.updateProjectionMatrix(),this.renderer.domElement.id=`game-canvas-${e}x${n}`}setSceneMode(e){this.sceneMode=e,e==="menu"&&(this.resetInput(),this.playerState.x=this.level.start.x,this.playerState.y=this.level.start.y,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.status="running",this.playerState.elapsedTime=0,this.playerState.jumpCount=0,this.playerState.score=0,this.playerState.gemsCollected=0,this.playerState.smoothCamY=this.level.start.y,this.playerState.camLeadAngle=0,this.playerState.idleTimer=3,this.gems.forEach(n=>{n.collected=!1,n.mesh&&(n.mesh.visible=!0)}),this.checkpoints.forEach(n=>{n.activated=!1}),this.activeCheckpoint=0,this.collapsingStairs.forEach(n=>{n.state="idle",n.retractOffset=0,n.timer=0}),this.levers.forEach(n=>{n.extended=!1}),this.togglableStairs.forEach(n=>{n.extended=!1}))}restartGame(){this.resetInput(),this.playerState.x=this.level.start.x,this.playerState.y=this.level.start.y,this.playerState.vx=0,this.playerState.vy=0,this.playerState.grounded=!0,this.playerState.rideElevator=-1,this.playerState.score=0,this.playerState.gemsCollected=0,this.playerState.jumpCount=0,this.playerState.elapsedTime=0,this.playerState.camLeadAngle=0,this.playerState.smoothCamY=this.level.start.y,this.playerState.knockdownFloorY=null,this.playerState.currentStairTopY=null,this.playerState.enemyHitCooldown=0,this.playerState.idleTimer=2,this.playerState.facingYaw=Math.atan2(Math.sin(vn(this.level.start.x)),Math.cos(vn(this.level.start.x))),this.activeCheckpoint=0,this.doorCooldown=0,this.collapsingStairs.forEach(e=>{e.state="idle",e.retractOffset=0,e.timer=0}),this.levers.forEach(e=>{e.extended=!1}),this.togglableStairs.forEach(e=>{e.extended=!1}),this.gems.forEach(e=>{e.collected=!1,e.mesh&&(e.mesh.visible=!0)}),this.collapsingStairs.forEach(e=>{e.state="idle",e.retractOffset=0,e.timer=0}),this.checkpoints.forEach(e=>{if(e.activated=!1,e.mesh){const n=e.mesh.children[1];n&&n.material instanceof nn&&(n.material.color.set("#ef4444"),n.material.emissive.set("#991b1b"))}}),this.setGameStatus("running")}resetInput(){this.input.left=!1,this.input.right=!1,this.input.up=!1,this.input.down=!1,this.input.jumpQueued=!1,this.input.doorQueued=!1}dispose(){window.cancelAnimationFrame(this.animFrameId),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.scene.traverse(e=>{e instanceof lt&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}}const Ty=1,wy="lvl_0002",Ay="Grecka Przystan",Cy=48,Ry=24,Dy={x:.5,y:.5},Ly=[{id:"start-ledge",x:0,topY:0,count:3},{id:"stair-low-01",x:3,topY:1.5},{id:"stair-low-02",x:4,topY:3},{id:"island-01",x:6,topY:4.5,count:4},{id:"br-a1",x:10,topY:5.5},{id:"br-a2",x:11,topY:7},{id:"br-a3",x:13,topY:8.5,count:2},{id:"br-a4",x:14,topY:10},{id:"br-b1",x:15,topY:11.5},{id:"br-b2",x:16,topY:13},{id:"br-b3",x:17,topY:14.5},{id:"stair-mid-01",x:18,topY:16,count:2},{id:"br-c2",x:20,topY:18.5},{id:"br-c3",x:21,topY:20},{id:"stair-mid-02",x:22,topY:21,count:3},{id:"br-d1",x:0,topY:22},{id:"br-d2",x:1,topY:23.5},{id:"br-d3",x:3,topY:25},{id:"br-d4",x:5,topY:26.5},{id:"island-02",x:7,topY:28,count:4},{id:"br-e1",x:11,topY:29},{id:"stair-high-01",x:12,topY:30.5},{id:"br-e4",x:15,topY:35},{id:"br-f1",x:16,topY:36},{id:"br-f2",x:17,topY:37.5},{id:"br-f3",x:18,topY:39},{id:"br-f4",x:20,topY:40.5},{id:"island-03",x:22,topY:41.5,count:4},{id:"br-g1",x:1,topY:43},{id:"br-g2",x:2,topY:44.5},{id:"br-g3",x:4,topY:46},{id:"br-g4",x:6,topY:47},{id:"summit-stair",x:8,topY:48,count:3}],Ny=[{id:"elevator-01",x:13,width:1.2,yMin:4.5,yMax:15,speed:.65,phase:0},{id:"elevator-02",x:20,width:1.2,yMin:15,yMax:26.5,speed:.58,phase:1.5},{id:"elevator-03",x:7,width:1.2,yMin:28,yMax:40.5,speed:.52,phase:3}],Uy=[{id:"gem-01",x:1.5,y:1.5},{id:"gem-02",x:4.5,y:3.5},{id:"gem-03",x:8.5,y:5.8},{id:"gem-04",x:13.5,y:10.5},{id:"gem-05",x:17.5,y:15},{id:"gem-06",x:20.5,y:20},{id:"gem-07",x:22.5,y:23},{id:"gem-08",x:8.5,y:29.5},{id:"gem-09",x:14.5,y:34},{id:"gem-10",x:17.5,y:38.5},{id:"gem-11",x:23.5,y:43.5},{id:"gem-12",x:1.5,y:43.8}],Oy=[{id:"spring-low",x:9,topY:4.5,bounceForce:18.5},{id:"spring-high",x:23,topY:41.5,bounceForce:18.5}],Py=[{id:"enemy-patrol-01",xCenter:8.5,y:4.5,behavior:"patrol",amplitude:1.5,speed:1.1},{id:"enemy-patrol-02",xCenter:1.5,y:22,behavior:"patrol",amplitude:1,speed:1.3},{id:"enemy-bounce-01",xCenter:8,y:28,behavior:"bounce",moveSteps:0,speed:1},{id:"enemy-bounce-02",xCenter:23,y:41.5,behavior:"bounce",moveSteps:0,speed:1}],Iy=[{id:1,name:"Runiczna Polka",floor:16,x:18,y:16},{id:2,name:"Podniebny Most",floor:28,x:8,y:28}],Fy=[{id:"cs-01",x:19,topY:17},{id:"cs-02",x:14,topY:33.5}],zy=[{id:"lever-01",x:7,topY:28}],By=[{id:"ts-01",x:13,topY:32,leverId:"lever-01"}],Hy=[{id:"door-cyan-low",pairId:"cyan",x:7.5,topY:4.5},{id:"door-cyan-high",pairId:"cyan",x:18.5,topY:16},{id:"door-orange-low",pairId:"orange",x:.5,topY:22},{id:"door-orange-high",pairId:"orange",x:8.5,topY:28}],C3={schemaVersion:Ty,id:wy,name:Ay,towerHeight:Cy,circumferenceSteps:Ry,start:Dy,stairs:Ly,elevators:Ny,gems:Uy,springs:Oy,enemies:Py,checkpoints:Iy,collapsingStairs:Fy,levers:zy,togglableStairs:By,doors:Hy},R3=Object.freeze(Object.defineProperty({__proto__:null,checkpoints:Iy,circumferenceSteps:Ry,collapsingStairs:Fy,default:C3,doors:Hy,elevators:Ny,enemies:Py,gems:Uy,id:wy,levers:zy,name:Ay,schemaVersion:Ty,springs:Oy,stairs:Ly,start:Dy,togglableStairs:By,towerHeight:Cy},Symbol.toStringTag,{value:"Module"})),S_=Object.assign({"./lvl_0001.level.json":u3,"./lvl_0002.level.json":R3}),ha=Object.keys(S_).sort().map(r=>by(S_[r].default)),Va=ha.length;function M_(r){for(let e=0;e<ha.length;e++)if(!r.completedLevels.includes(e+1))return e;return ha.length-1}const Gy="glower-tower-progress-v5",D3=2;function b_(){return D3}function Xd(){return{completedLevels:[],unlockedLevel:1,bestScores:{}}}function po(){try{const r=localStorage.getItem(Gy);if(!r)return Xd();const e=JSON.parse(r);if(!Array.isArray(e.completedLevels)||typeof e.unlockedLevel!="number")return Xd();const n=Math.max(1,Math.min(e.unlockedLevel,b_()+1));return{completedLevels:e.completedLevels.filter(s=>s>=1&&s<=b_()),unlockedLevel:n,bestScores:e.bestScores??{}}}catch{return Xd()}}function L3(r){try{localStorage.setItem(Gy,JSON.stringify(r))}catch{}}function N3(r,e,n,s,l){const c=po(),u=new Set(c.completedLevels);u.add(r);const d=u.size>0?Math.max(...Array.from(u)):0,m=Math.min(l,d+1),p={...c.bestScores},x=String(r),g=p[x];(!g||e&&(n<g.jumps||s<g.timeSec))&&(p[x]={jumps:n,timeSec:s});const v={completedLevels:Array.from(u).sort((_,T)=>_-T),unlockedLevel:m,bestScores:p};return L3(v),v}function Vy(r,e){return r===1?!0:e.completedLevels.includes(r-1)}const U3={pl:{appName:"Glut Żelek",appSubtitle:"Wieża",pageTitle:"Glut Żelek: Wieża",menuPlay:"GRAJ",menuPlayAria:"Graj",menuCredits:"© LUKAMI 2026",unmute:"Włącz dźwięk",mute:"Wycisz dźwięk",settings:"Ustawienia",help:"Instrukcja",fullscreen:"Pełny ekran",langPl:"Polski",langEn:"Angielski",selectLevel:"Wybierz Poziom",backToMenu:"Powrót do menu",selectHint:"Ukończone i następny są dostępne.",completed:"Ukończono:",upTo:"Do:",bestJumps:"sk",levelNew:"nowy",levelPlay:"graj",hudTower:"Wieża",hudFloor:"Piętro",restartLevel:"Zrestartuj poziom (R)",clearedTitle:r=>`POZIOM ${r} ZALICZONY!`,clearedDesc:r=>`Pokonałeś ${r} pięter i zebrałeś wszystkie klejnoty!`,doneTitle:r=>`POZIOM ${r} UKOŃCZONY`,doneBut:"ale nie zaliczony!",gemsHint:(r,e)=>`Zbierz wszystkie klejnoty (${r}/${e}), żeby odblokować następny poziom.`,scoreLabel:"Wynik:",ptsSuffix:"pkt",gemsLabel:"Klejnoty:",jumpsLabel:"Skoki:",timeLabel:"Czas:",secondsSuffix:"s",nextLevel:r=>`NASTĘPNY POZIOM (${r})`,restart:"RESTART",menu:"MENU",playAgain:"ZAGRAJ PONOWNIE",gameOver:"KONIEC GRY",gameOverDesc:"Upadłeś z wieży lub wpadłeś w pułapkę.",floorLabel:"Piętro:",pointsLabel:"Punkty:",tryAgain:"SPRÓBUJ PONOWNIE",completedBadge:"Gra ukończona",congrats:"GRATULACJE!",congratsDesc:r=>`Ukończyłeś wszystkie ${r} poziomy wieży pełnej przygód!`,restartGame:"RESTART GRY",backToMenuCaps:"POWRÓT DO MENU",loadingTower:r=>`Wieża ${r}`,loadingGems:r=>`Zbierz ${r} klejnotów`,loadingText:"Wczytuje...",helpTitle:"INSTRUKCJA",helpIntro:(r,e)=>`Wspinaj się po spiralnej wieży liczącej ${r} pięter na każdy level. Łącznie ${e} poziomów.`,elementsTitle:"ELEMENTY WIEŻY:",elElevators:"Windy: pionowe, niebieska krawędź",elSprings:"Sprężyny: wyrzut w górę",elGems:"Klejnoty: zbieraj wszystkie",elCheckpoints:"Checkpointy: zapis postępu",elDoors:"Drzwi: teleport, stań i ↓ / S",elTimer:"Zegar: start przy pierwszym ruchu",elCollapsing:"Zapadnie: czerwona krawędź, po wejściu chowają się",elLevers:"Dzwignie: przełącznik z kulką, ↓ / S wysuwa/chowa schodek",elBalls:"Piłki: czerwone kule, unikaj",controlsTitle:"STEROWANIE:",ctrlMove:"← / → lub A / D – ruch",ctrlJump:"↑ lub Spacja – skok",ctrlInteract:"↓ lub S – drzwi / dzwignia",ctrlRestart:"R – restart",understand:"ROZUMIEM",settingsTitle:"USTAWIENIA",render:"Render",renderFast:"640px (szybciej)",renderSharp:"1280px (ostrzej)",imageFilter:"Filtr obrazu",filterPixelated:"Pikselowy",filterSmooth:"Gładki",filterCrt:"CRT",muted:"Wyciszony",soundOn:"Dźwięk włączony",close:"ZAMKNIJ",touchLeft:"W lewo",touchRight:"W prawo",touchDoor:"Wejdź przez drzwi",touchJump:"Skok",iosTitle:"Pełny ekran na iPhone",iosDesc:"iOS blokuje Fullscreen API w kartach przeglądarki. Jedyne wyjście to instalacja gry jako aplikacji z ekranu startowego.",iosStep1a:"Naciśnij",iosShare:"Udostępnij",iosStep1b:"— ikonę kwadratu ze strzałką w górę, w dolnym pasku Safari.",iosStep2a:"Przewiń w dół i dotknij",iosAddToHome:"Dodaj do ekranu startowego",iosStep3a:"Otwórz",iosStep3b:"z ekranu startowego.",iosFirefox:"Firefox: naciśnij ⋯ → Dodaj do ekranu startowego."},en:{appName:"Jelly Slime",appSubtitle:"The Tower",pageTitle:"Jelly Slime: The Tower",menuPlay:"PLAY",menuPlayAria:"Play",menuCredits:"© LUKAMI 2026",unmute:"Unmute",mute:"Mute",settings:"Settings",help:"Help",fullscreen:"Fullscreen",langPl:"Polish",langEn:"English",selectLevel:"Select Level",backToMenu:"Back to menu",selectHint:"Completed levels and the next one are available.",completed:"Completed:",upTo:"Up to:",bestJumps:"jumps",levelNew:"new",levelPlay:"play",hudTower:"Tower",hudFloor:"Floor",restartLevel:"Restart level (R)",clearedTitle:r=>`LEVEL ${r} CLEARED!`,clearedDesc:r=>`You conquered ${r} floors and collected all the gems!`,doneTitle:r=>`LEVEL ${r} COMPLETED`,doneBut:"but not cleared!",gemsHint:(r,e)=>`Collect all the gems (${r}/${e}) to unlock the next level.`,scoreLabel:"Score:",ptsSuffix:"pts",gemsLabel:"Gems:",jumpsLabel:"Jumps:",timeLabel:"Time:",secondsSuffix:"s",nextLevel:r=>`NEXT LEVEL (${r})`,restart:"RESTART",menu:"MENU",playAgain:"PLAY AGAIN",gameOver:"GAME OVER",gameOverDesc:"You fell off the tower or hit a trap.",floorLabel:"Floor:",pointsLabel:"Points:",tryAgain:"TRY AGAIN",completedBadge:"Game completed",congrats:"CONGRATULATIONS!",congratsDesc:r=>`You have completed all ${r} levels of a tower full of adventures!`,restartGame:"RESTART GAME",backToMenuCaps:"BACK TO MENU",loadingTower:r=>`Tower ${r}`,loadingGems:r=>`Collect ${r} gems`,loadingText:"Loading...",helpTitle:"INSTRUCTIONS",helpIntro:(r,e)=>`Climb the spiral tower of ${r} floors in every level. ${e} levels in total.`,elementsTitle:"TOWER ELEMENTS:",elElevators:"Elevators: vertical, blue edge",elSprings:"Springs: launch you up",elGems:"Gems: collect them all",elCheckpoints:"Checkpoints: save progress",elDoors:"Doors: teleport, stand on them and press ↓ / S",elTimer:"Timer: starts with your first move",elCollapsing:"Collapsing stairs: red edge, retract after you step on them",elLevers:"Levers: switch with a ball, ↓ / S shows/hides a stair",elBalls:"Balls: red spheres, avoid them",controlsTitle:"CONTROLS:",ctrlMove:"← / → or A / D – move",ctrlJump:"↑ or Space – jump",ctrlInteract:"↓ or S – doors / lever",ctrlRestart:"R – restart",understand:"GOT IT",settingsTitle:"SETTINGS",render:"Render",renderFast:"640px (faster)",renderSharp:"1280px (sharper)",imageFilter:"Image filter",filterPixelated:"Pixelated",filterSmooth:"Smooth",filterCrt:"CRT",muted:"Muted",soundOn:"Sound on",close:"CLOSE",touchLeft:"Left",touchRight:"Right",touchDoor:"Enter door",touchJump:"Jump",iosTitle:"Fullscreen on iPhone",iosDesc:"iOS blocks the Fullscreen API in browser tabs. The only way around it is to install the game as an app from the home screen.",iosStep1a:"Tap",iosShare:"Share",iosStep1b:"— the square icon with the arrow pointing up, in the Safari bottom bar.",iosStep2a:"Scroll down and tap",iosAddToHome:"Add to Home Screen",iosStep3a:"Open",iosStep3b:"from your home screen.",iosFirefox:"Firefox: press ⋯ → Add to Home Screen."}},ky="jelly-lang";function O3(){try{return localStorage.getItem(ky)==="en"?"en":"pl"}catch{return"pl"}}function P3(r){try{localStorage.setItem(ky,r)}catch{}}const Yy=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();const I3=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const F3=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase());const E_=r=>{const e=F3(r);return e.charAt(0).toUpperCase()+e.slice(1)};var Wd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const z3=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},B3=mt.createContext({}),H3=()=>mt.useContext(B3),G3=mt.forwardRef(({color:r,size:e,strokeWidth:n,absoluteStrokeWidth:s,className:l="",children:c,iconNode:u,...d},m)=>{const{size:p=24,strokeWidth:x=2,absoluteStrokeWidth:g=!1,color:v="currentColor",className:_=""}=H3()??{},T=s??g?Number(n??x)*24/Number(e??p):n??x;return mt.createElement("svg",{ref:m,...Wd,width:e??p??Wd.width,height:e??p??Wd.height,stroke:r??v,strokeWidth:T,className:Yy("lucide",_,l),...!c&&!z3(d)&&{"aria-hidden":"true"},...d},[...u.map(([R,S])=>mt.createElement(R,S)),...Array.isArray(c)?c:[c]])});const ln=(r,e)=>{const n=mt.forwardRef(({className:s,...l},c)=>mt.createElement(G3,{ref:c,iconNode:e,className:Yy(`lucide-${I3(E_(r))}`,`lucide-${r}`,s),...l}));return n.displayName=E_(r),n};const V3=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],k3=ln("arrow-down",V3);const Y3=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],X3=ln("arrow-left",Y3);const W3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Xy=ln("arrow-right",W3);const q3=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],j3=ln("arrow-up",q3);const Z3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],K3=ln("circle-check",Z3);const Q3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],J3=ln("circle-question-mark",Q3);const $3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],eC=ln("clock",$3);const tC=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],nC=ln("cpu",tC);const iC=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],aC=ln("crown",iC);const sC=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],vm=ln("diamond",sC);const rC=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ju=ln("house",rC);const oC=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Wy=ln("lock",oC);const lC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],cC=ln("maximize-2",lC);const uC=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],fC=ln("play",uC);const hC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Zu=ln("rotate-ccw",hC);const dC=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pC=ln("settings",dC);const mC=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],gC=ln("share-2",mC);const vC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],qy=ln("shield-alert",vC);const xC=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],_C=ln("smartphone",xC);const yC=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],xm=ln("sparkles",yC);const SC=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],jy=ln("trophy",SC);const MC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Zy=ln("volume-2",MC);const bC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ky=ln("volume-x",bC);const EC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qy=ln("x",EC);const TC=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],Jy=ln("zap",TC),qd=({onChange:r,className:e,ariaLabel:n,children:s})=>F.jsx("button",{onTouchStart:l=>{l.preventDefault(),r(!0)},onTouchEnd:l=>{l.preventDefault(),r(!1)},onMouseDown:()=>r(!0),onMouseUp:()=>r(!1),className:e,"aria-label":n,children:s}),wC=({onTap:r,className:e,ariaLabel:n,children:s})=>F.jsx("button",{onTouchStart:l=>{l.preventDefault(),r()},onClick:r,className:e,"aria-label":n,children:s}),T_="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/20 bg-slate-900/80 text-white shadow-xl backdrop-blur-md active:scale-95 active:bg-cyan-600/80",AC="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-cyan-400/40 bg-cyan-700/80 text-white shadow-xl backdrop-blur-md active:scale-95 active:bg-cyan-500",CC="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-400/40 bg-emerald-600/80 text-white shadow-2xl backdrop-blur-md active:scale-95 active:bg-emerald-500",RC=({t:r,onMoveLeft:e,onMoveRight:n,onJump:s,onDoor:l})=>F.jsxs("div",{className:"touch-controls pointer-events-none fixed inset-x-0 bottom-6 z-30 flex items-center justify-between px-6 select-none [@media(pointer:fine)]:hidden",children:[F.jsxs("div",{className:"pointer-events-auto flex items-center gap-3",children:[F.jsx(qd,{onChange:e,className:T_,ariaLabel:r.touchLeft,children:F.jsx(X3,{className:"h-7 w-7"})}),F.jsx(qd,{onChange:n,className:T_,ariaLabel:r.touchRight,children:F.jsx(Xy,{className:"h-7 w-7"})})]}),F.jsxs("div",{className:"pointer-events-auto flex items-center gap-3",children:[F.jsx(wC,{onTap:l,className:AC,ariaLabel:r.touchDoor,children:F.jsx(k3,{className:"h-7 w-7"})}),F.jsx(qd,{onChange:s,className:CC,ariaLabel:r.touchJump,children:F.jsx(j3,{className:"h-8 w-8"})})]})]}),mo="flex h-8 w-8 items-center justify-center rounded-lg bg-black/80 shadow-lg transition-transform hover:scale-105 active:scale-95 sm:h-10 sm:w-10 [@media(max-height:500px)]:h-7 [@media(max-height:500px)]:w-7",$y="font-freckle fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm [@media(max-height:500px)]:p-2",DC="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200 [@media(max-height:500px)]:p-2",LC="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e4a6e] via-[#0a2e44] to-[#052e1a] p-6 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",NC="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e4a6e] via-[#0a2e44] to-[#052e1a] p-7 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",UC="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e2e44] to-[#1a0a14] p-6 text-center text-white shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",OC="font-freckle relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e3a5e] to-[#052e1a] p-6 text-sky-100 shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",PC="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e4a6e] to-[#052e1a] p-6 text-sky-100 shadow-2xl [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",w_="flex items-center justify-center gap-1.5 rounded-xl bg-sky-900/60 py-2.5 text-sm tracking-wide text-sky-100 hover:bg-sky-800",eS="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 py-3 text-base tracking-wide text-[#052e1a] shadow-lg hover:bg-emerald-300",tS="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-900/60 py-2.5 text-sm tracking-wide text-sky-100 hover:bg-sky-800",jd=({active:r,onClick:e,align:n="left",children:s})=>F.jsx("button",{onClick:e,className:`rounded-2xl p-4 text-${n} ${r?"bg-emerald-400 text-[#052e1a]":"bg-sky-900/60 text-sky-100"}`,children:s}),IC=({t:r,config:e,onConfigChange:n,isOpen:s,onClose:l})=>{if(!s)return null;const c=[{id:"crisp",name:r.filterPixelated},{id:"smooth",name:r.filterSmooth},{id:"crt",name:r.filterCrt}];return F.jsx("div",{className:$y,children:F.jsxs("div",{className:PC,children:[F.jsx("button",{onClick:l,className:"absolute right-4 top-4 rounded-lg bg-sky-900/60 p-1.5 text-sky-200 hover:bg-sky-800",children:F.jsx(Qy,{className:"h-5 w-5"})}),F.jsxs("div",{className:"flex items-center gap-2.5 tracking-wide text-amber-200 pb-3",children:[F.jsx(Jy,{className:"h-6 w-6 text-amber-300"}),F.jsx("h2",{className:"text-2xl tracking-wide",children:r.settingsTitle})]}),F.jsxs("div",{className:"mt-4 space-y-5 text-base tracking-wide",children:[F.jsxs("div",{children:[F.jsxs("label",{className:"text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2",children:[F.jsx(nC,{className:"h-5 w-5 text-sky-300"}),r.render]}),F.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[F.jsxs(jd,{active:e.renderScale===1,onClick:()=>n({renderScale:1}),children:[F.jsx("div",{className:"text-base",children:"x1"}),F.jsx("div",{className:"text-sm opacity-80",children:r.renderFast})]}),F.jsxs(jd,{active:e.renderScale===2,onClick:()=>n({renderScale:2}),children:[F.jsx("div",{className:"text-base",children:"x2"}),F.jsx("div",{className:"text-sm opacity-80",children:r.renderSharp})]})]})]}),F.jsxs("div",{children:[F.jsxs("label",{className:"text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2",children:[F.jsx(xm,{className:"h-5 w-5 text-amber-300"}),r.imageFilter]}),F.jsx("div",{className:"grid grid-cols-3 gap-2",children:c.map(u=>F.jsx(jd,{active:e.filterMode===u.id,onClick:()=>n({filterMode:u.id}),align:"center",children:F.jsx("div",{className:"text-base tracking-wide",children:u.name})},u.id))})]}),F.jsx("div",{children:F.jsxs("button",{onClick:()=>n({soundMuted:!e.soundMuted}),className:"flex w-full items-center justify-between rounded-2xl bg-sky-900/60 px-4 py-3 text-sky-100",children:[F.jsxs("div",{className:"flex items-center gap-2.5",children:[e.soundMuted?F.jsx(Ky,{className:"h-6 w-6 text-rose-300"}):F.jsx(Zy,{className:"h-6 w-6 text-emerald-300"}),F.jsx("span",{className:"tracking-wide text-base",children:e.soundMuted?r.muted:r.soundOn})]}),F.jsx("span",{className:`rounded-full px-3 py-1 text-sm tracking-wide ${e.soundMuted?"bg-rose-400 text-white":"bg-emerald-400 text-[#052e1a]"}`,children:e.soundMuted?"OFF":"ON"})]})})]}),F.jsx("div",{className:"mt-5 flex justify-end",children:F.jsxs("button",{onClick:l,className:"flex items-center gap-1.5 rounded-xl bg-emerald-400 px-5 py-2.5 text-base tracking-wide text-[#052e1a] hover:bg-emerald-300",children:[F.jsx(K3,{className:"h-5 w-5"}),r.close]})})]})})};var _m={};(function r(e,n,s,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var G=new OffscreenCanvas(1,1),b=G.getContext("2d");b.fillRect(0,0,1,1);var H=G.transferToImageBitmap();b.createPattern(H,"no-repeat")}catch{return!1}return!0})();function m(){}function p(G){var b=n.exports.Promise,H=b!==void 0?b:e.Promise;return typeof H=="function"?new H(G):(G(m,m),null)}var x=(function(G,b){return{transform:function(H){if(G)return H;if(b.has(H))return b.get(H);var ie=new OffscreenCanvas(H.width,H.height),ve=ie.getContext("2d");return ve.drawImage(H,0,0),b.set(H,ie),ie},clear:function(){b.clear()}}})(d,new Map),g=(function(){var G=Math.floor(16.666666666666668),b,H,ie={},ve=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(Ee){var K=Math.random();return ie[K]=requestAnimationFrame(function ae(pe){ve===pe||ve+G-1<pe?(ve=pe,delete ie[K],Ee()):ie[K]=requestAnimationFrame(ae)}),K},H=function(Ee){ie[Ee]&&cancelAnimationFrame(ie[Ee])}):(b=function(Ee){return setTimeout(Ee,G)},H=function(Ee){return clearTimeout(Ee)}),{frame:b,cancel:H}})(),v=(function(){var G,b,H={};function ie(ve){function Ee(K,ae){ve.postMessage({options:K||{},callback:ae})}ve.init=function(ae){var pe=ae.transferControlToOffscreen();ve.postMessage({canvas:pe},[pe])},ve.fire=function(ae,pe,Ce){if(b)return Ee(ae,null),b;var Ve=Math.random().toString(36).slice(2);return b=p(function(Ne){function ct(tt){tt.data.callback===Ve&&(delete H[Ve],ve.removeEventListener("message",ct),b=null,x.clear(),Ce(),Ne())}ve.addEventListener("message",ct),Ee(ae,Ve),H[Ve]=ct.bind(null,{data:{callback:Ve}})}),b},ve.reset=function(){ve.postMessage({reset:!0});for(var ae in H)H[ae](),delete H[ae]}}return function(){if(G)return G;if(!s&&c){var ve=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{G=new Worker(URL.createObjectURL(new Blob([ve])))}catch(Ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Ee),null}ie(G)}return G}})(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(G,b){return b?b(G):G}function R(G){return G!=null}function S(G,b,H){return T(G&&R(G[b])?G[b]:_[b],H)}function y(G){return G<0?0:Math.floor(G)}function L(G,b){return Math.floor(Math.random()*(b-G))+G}function P(G){return parseInt(G,16)}function A(G){return G.map(I)}function I(G){var b=String(G).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:P(b.substring(0,2)),g:P(b.substring(2,4)),b:P(b.substring(4,6))}}function N(G){var b=S(G,"origin",Object);return b.x=S(b,"x",Number),b.y=S(b,"y",Number),b}function O(G){G.width=document.documentElement.clientWidth,G.height=document.documentElement.clientHeight}function E(G){var b=G.getBoundingClientRect();G.width=b.width,G.height=b.height}function U(G){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=G,b}function X(G,b,H,ie,ve,Ee,K,ae,pe){G.save(),G.translate(b,H),G.rotate(Ee),G.scale(ie,ve),G.arc(0,0,1,K,ae,pe),G.restore()}function V(G){var b=G.angle*(Math.PI/180),H=G.spread*(Math.PI/180);return{x:G.x,y:G.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:G.startVelocity*.5+Math.random()*G.startVelocity,angle2D:-b+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:G.color,shape:G.shape,tick:0,totalTicks:G.ticks,decay:G.decay,drift:G.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:G.gravity*3,ovalScalar:.6,scalar:G.scalar,flat:G.flat}}function q(G,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var H=b.tick++/b.totalTicks,ie=b.x+b.random*b.tiltCos,ve=b.y+b.random*b.tiltSin,Ee=b.wobbleX+b.random*b.tiltCos,K=b.wobbleY+b.random*b.tiltSin;if(G.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-H)+")",G.beginPath(),u&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))G.fill(Y(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(Ee-ie)*.1,Math.abs(K-ve)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var ae=Math.PI/10*b.wobble,pe=Math.abs(Ee-ie)*.1,Ce=Math.abs(K-ve)*.1,Ve=b.shape.bitmap.width*b.scalar,Ne=b.shape.bitmap.height*b.scalar,ct=new DOMMatrix([Math.cos(ae)*pe,Math.sin(ae)*pe,-Math.sin(ae)*Ce,Math.cos(ae)*Ce,b.x,b.y]);ct.multiplySelf(new DOMMatrix(b.shape.matrix));var tt=G.createPattern(x.transform(b.shape.bitmap),"no-repeat");tt.setTransform(ct),G.globalAlpha=1-H,G.fillStyle=tt,G.fillRect(b.x-Ve/2,b.y-Ne/2,Ve,Ne),G.globalAlpha=1}else if(b.shape==="circle")G.ellipse?G.ellipse(b.x,b.y,Math.abs(Ee-ie)*b.ovalScalar,Math.abs(K-ve)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):X(G,b.x,b.y,Math.abs(Ee-ie)*b.ovalScalar,Math.abs(K-ve)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var ke=Math.PI/2*3,ot=4*b.scalar,Ae=8*b.scalar,Qe=b.x,Je=b.y,ut=5,Rt=Math.PI/ut;ut--;)Qe=b.x+Math.cos(ke)*Ae,Je=b.y+Math.sin(ke)*Ae,G.lineTo(Qe,Je),ke+=Rt,Qe=b.x+Math.cos(ke)*ot,Je=b.y+Math.sin(ke)*ot,G.lineTo(Qe,Je),ke+=Rt;else G.moveTo(Math.floor(b.x),Math.floor(b.y)),G.lineTo(Math.floor(b.wobbleX),Math.floor(ve)),G.lineTo(Math.floor(Ee),Math.floor(K)),G.lineTo(Math.floor(ie),Math.floor(b.wobbleY));return G.closePath(),G.fill(),b.tick<b.totalTicks}function ue(G,b,H,ie,ve){var Ee=b.slice(),K=G.getContext("2d"),ae,pe,Ce=p(function(Ve){function Ne(){ae=pe=null,K.clearRect(0,0,ie.width,ie.height),x.clear(),ve(),Ve()}function ct(){s&&!(ie.width===l.width&&ie.height===l.height)&&(ie.width=G.width=l.width,ie.height=G.height=l.height),!ie.width&&!ie.height&&(H(G),ie.width=G.width,ie.height=G.height),K.clearRect(0,0,ie.width,ie.height),Ee=Ee.filter(function(tt){return q(K,tt)}),Ee.length?ae=g.frame(ct):Ne()}ae=g.frame(ct),pe=Ne});return{addFettis:function(Ve){return Ee=Ee.concat(Ve),Ce},canvas:G,promise:Ce,reset:function(){ae&&g.cancel(ae),pe&&pe()}}}function de(G,b){var H=!G,ie=!!S(b||{},"resize"),ve=!1,Ee=S(b,"disableForReducedMotion",Boolean),K=c&&!!S(b||{},"useWorker"),ae=K?v():null,pe=H?O:E,Ce=G&&ae?!!G.__confetti_initialized:!1,Ve=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ne;function ct(ke,ot,Ae){for(var Qe=S(ke,"particleCount",y),Je=S(ke,"angle",Number),ut=S(ke,"spread",Number),Rt=S(ke,"startVelocity",Number),Lt=S(ke,"decay",Number),$t=S(ke,"gravity",Number),J=S(ke,"drift",Number),zt=S(ke,"colors",A),Nt=S(ke,"ticks",Number),z=S(ke,"shapes"),w=S(ke,"scalar"),te=!!S(ke,"flat"),ce=N(ke),xe=Qe,Re=[],Oe=G.width*ce.x,_e=G.height*ce.y;xe--;)Re.push(V({x:Oe,y:_e,angle:Je,spread:ut,startVelocity:Rt,color:zt[xe%zt.length],shape:z[L(0,z.length)],ticks:Nt,decay:Lt,gravity:$t,drift:J,scalar:w,flat:te}));return Ne?Ne.addFettis(Re):(Ne=ue(G,Re,pe,ot,Ae),Ne.promise)}function tt(ke){var ot=Ee||S(ke,"disableForReducedMotion",Boolean),Ae=S(ke,"zIndex",Number);if(ot&&Ve)return p(function(Rt){Rt()});H&&Ne?G=Ne.canvas:H&&!G&&(G=U(Ae),document.body.appendChild(G)),ie&&!Ce&&pe(G);var Qe={width:G.width,height:G.height};ae&&!Ce&&ae.init(G),Ce=!0,ae&&(G.__confetti_initialized=!0);function Je(){if(ae){var Rt={getBoundingClientRect:function(){if(!H)return G.getBoundingClientRect()}};pe(Rt),ae.postMessage({resize:{width:Rt.width,height:Rt.height}});return}Qe.width=Qe.height=null}function ut(){Ne=null,ie&&(ve=!1,e.removeEventListener("resize",Je)),H&&G&&(document.body.contains(G)&&document.body.removeChild(G),G=null,Ce=!1)}return ie&&!ve&&(ve=!0,e.addEventListener("resize",Je,!1)),ae?ae.fire(ke,Qe,ut):ct(ke,Qe,ut)}return tt.reset=function(){ae&&ae.reset(),Ne&&Ne.reset()},tt}var Q;function B(){return Q||(Q=de(null,{useWorker:!0,resize:!0})),Q}function Y(G,b,H,ie,ve,Ee,K){var ae=new Path2D(G),pe=new Path2D;pe.addPath(ae,new DOMMatrix(b));var Ce=new Path2D;return Ce.addPath(pe,new DOMMatrix([Math.cos(K)*ve,Math.sin(K)*ve,-Math.sin(K)*Ee,Math.cos(K)*Ee,H,ie])),Ce}function ne(G){if(!u)throw new Error("path confetti are not supported in this browser");var b,H;typeof G=="string"?b=G:(b=G.path,H=G.matrix);var ie=new Path2D(b),ve=document.createElement("canvas"),Ee=ve.getContext("2d");if(!H){for(var K=1e3,ae=K,pe=K,Ce=0,Ve=0,Ne,ct,tt=0;tt<K;tt+=2)for(var ke=0;ke<K;ke+=2)Ee.isPointInPath(ie,tt,ke,"nonzero")&&(ae=Math.min(ae,tt),pe=Math.min(pe,ke),Ce=Math.max(Ce,tt),Ve=Math.max(Ve,ke));Ne=Ce-ae,ct=Ve-pe;var ot=10,Ae=Math.min(ot/Ne,ot/ct);H=[Ae,0,0,Ae,-Math.round(Ne/2+ae)*Ae,-Math.round(ct/2+pe)*Ae]}return{type:"path",path:b,matrix:H}}function me(G){var b,H=1,ie="#000000",ve='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof G=="string"?b=G:(b=G.text,H="scalar"in G?G.scalar:H,ve="fontFamily"in G?G.fontFamily:ve,ie="color"in G?G.color:ie);var Ee=10*H,K=""+Ee+"px "+ve,ae=new OffscreenCanvas(Ee,Ee),pe=ae.getContext("2d");pe.font=K;var Ce=pe.measureText(b),Ve=Math.ceil(Ce.actualBoundingBoxRight+Ce.actualBoundingBoxLeft),Ne=Math.ceil(Ce.actualBoundingBoxAscent+Ce.actualBoundingBoxDescent),ct=2,tt=Ce.actualBoundingBoxLeft+ct,ke=Ce.actualBoundingBoxAscent+ct;Ve+=ct+ct,Ne+=ct+ct,ae=new OffscreenCanvas(Ve,Ne),pe=ae.getContext("2d"),pe.font=K,pe.fillStyle=ie,pe.fillText(b,tt,ke);var ot=1/H;return{type:"bitmap",bitmap:ae.transferToImageBitmap(),matrix:[ot,0,0,ot,-Ve*ot/2,-Ne*ot/2]}}n.exports=function(){return B().apply(this,arguments)},n.exports.reset=function(){B().reset()},n.exports.create=de,n.exports.shapeFromPath=ne,n.exports.shapeFromText=me})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),_m,!1);const _o=_m.exports;_m.exports.create;const FC=()=>{_o({particleCount:120,spread:70,origin:{y:.6}});const r=setTimeout(()=>{_o({particleCount:80,angle:60,spread:55,origin:{x:0}}),_o({particleCount:80,angle:120,spread:55,origin:{x:1}})},400);return()=>clearTimeout(r)},zC=()=>{_o({particleCount:160,spread:100,origin:{y:.6}});const r=[setTimeout(()=>_o({particleCount:100,angle:60,spread:60,origin:{x:0}}),300),setTimeout(()=>_o({particleCount:100,angle:120,spread:60,origin:{x:1}}),500)];return()=>r.forEach(clearTimeout)},Ku=({children:r,panelClassName:e,animation:n="zoom",light:s=!1})=>{const l=s?DC:$y,c=n==="zoom"?"animate-in zoom-in-95 duration-200":"animate-in fade-in duration-200";return F.jsx("div",{className:`${l} ${c}`,children:F.jsx("div",{className:e,children:r})})},BC=({label:r,value:e,size:n="lg"})=>F.jsxs("div",{className:"p-1",children:[F.jsx("span",{className:"text-sm tracking-wide text-sky-200/70",children:r}),F.jsx("div",{className:n==="lg"?"text-xl":"text-base text-sky-200",children:e})]}),$i=({children:r,className:e=""})=>F.jsx("div",{className:`grid grid-cols-2 gap-2 rounded-2xl bg-sky-900/40 p-3 text-left text-sm ${e}`,children:r});$i.Item=BC;const Qu=r=>{const e=Math.floor(r/60),n=Math.floor(r%60).toString().padStart(2,"0");return`${e}:${n}`},HC=({t:r,score:e,gems:n,totalGems:s,jumps:l,timeSec:c,towerHeight:u,levelNumber:d,totalLevels:m,onRestart:p,onBackToMenu:x,onNextLevel:g})=>{const v=n>=s,_=v&&d<m&&!!g;return A_.useEffect(()=>{if(v)return FC()},[v]),F.jsxs(Ku,{panelClassName:LC,children:[F.jsx("div",{className:`mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${v?"bg-amber-400 text-[#052e1a]":"bg-orange-400 text-[#052e1a]"}`,children:v?F.jsx(jy,{className:"h-9 w-9 animate-bounce"}):F.jsx(qy,{className:"h-9 w-9"})}),v?F.jsxs(F.Fragment,{children:[F.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-amber-200",children:r.clearedTitle(d)}),F.jsx("p",{className:"mt-1 text-sm tracking-wide text-sky-200",children:r.clearedDesc(u)})]}):F.jsxs(F.Fragment,{children:[F.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-orange-300",children:r.doneTitle(d)}),F.jsx("p",{className:"mt-1 text-base tracking-wide text-orange-200/90",children:r.doneBut}),F.jsxs("div",{className:"mt-2 flex items-center justify-center gap-2 text-lg tracking-wide text-amber-200",children:[F.jsx(vm,{className:"h-5 w-5 fill-amber-300"}),r.gemsHint(n,s)]})]}),F.jsxs($i,{className:"my-4",children:[F.jsx($i.Item,{label:r.scoreLabel,value:F.jsxs("span",{className:"text-amber-200",children:[e.toLocaleString()," ",r.ptsSuffix]})}),F.jsx($i.Item,{label:r.gemsLabel,value:F.jsxs("span",{className:v?"text-emerald-300":"text-orange-300",children:[n," / ",s]})}),F.jsx($i.Item,{label:r.jumpsLabel,value:l,size:"base"}),F.jsx($i.Item,{label:r.timeLabel,value:`${Qu(c)} ${r.secondsSuffix}`,size:"base"})]}),d<m&&g?F.jsxs(F.Fragment,{children:[F.jsxs("button",{onClick:_?g:void 0,disabled:!_,className:`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-base tracking-wide shadow-lg transition-all ${_?"bg-emerald-400 text-[#052e1a] hover:bg-emerald-300":"bg-sky-900/30 text-white/30 cursor-not-allowed"}`,children:[_?F.jsx(Xy,{className:"h-5 w-5"}):F.jsx(Wy,{className:"h-5 w-5"}),r.nextLevel(d+1)]}),F.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-2",children:[F.jsxs("button",{onClick:p,className:w_,children:[F.jsx(Zu,{className:"h-4 w-4"})," ",r.restart]}),x&&F.jsxs("button",{onClick:x,className:w_,children:[F.jsx(ju,{className:"h-4 w-4"})," ",r.menu]})]})]}):F.jsxs("button",{onClick:p,className:eS,children:[F.jsx(xm,{className:"h-5 w-5"})," ",r.playAgain]})]})},GC=({t:r,score:e,level:n,towerHeight:s,onRestart:l,onBackToMenu:c})=>F.jsxs(Ku,{panelClassName:UC,animation:"fade",children:[F.jsx("div",{className:"mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-400 text-white shadow-lg",children:F.jsx(qy,{className:"h-8 w-8"})}),F.jsx("h2",{className:"mt-3 text-2xl tracking-wide text-rose-300",children:r.gameOver}),F.jsx("p",{className:"mt-1 text-sm tracking-wide text-sky-200",children:r.gameOverDesc}),F.jsxs("div",{className:"my-4 rounded-2xl bg-sky-900/40 p-3 text-sm space-y-1",children:[F.jsxs("div",{className:"flex justify-between",children:[F.jsx("span",{className:"tracking-wide text-sky-200/70",children:r.floorLabel}),F.jsxs("span",{className:"tracking-wide text-sky-100",children:[n," / ",s]})]}),F.jsxs("div",{className:"flex justify-between",children:[F.jsx("span",{className:"tracking-wide text-sky-200/70",children:r.pointsLabel}),F.jsx("span",{className:"tracking-wide text-amber-200",children:e})]})]}),F.jsxs("button",{onClick:l,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 py-3 text-base tracking-wide text-white shadow-lg hover:bg-rose-400",children:[F.jsx(Zu,{className:"h-5 w-5"})," ",r.tryAgain]}),c&&F.jsx("button",{onClick:c,className:tS,children:r.backToMenu})]}),VC=({t:r,score:e,gems:n,totalGems:s,jumps:l,totalTime:c,levelsCompleted:u,onRestart:d,onBackToMenu:m})=>(A_.useEffect(()=>zC(),[]),F.jsxs(Ku,{panelClassName:NC,children:[F.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-[#052e1a] shadow-lg",children:F.jsx(jy,{className:"h-11 w-11 animate-bounce"})}),F.jsxs("div",{className:"mt-2 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1 text-sm tracking-wide text-amber-200",children:[F.jsx(xm,{className:"h-3 w-3"})," ",r.completedBadge]}),F.jsx("h2",{className:"mt-3 text-3xl tracking-wide text-amber-200",children:r.congrats}),F.jsx("p",{className:"mt-2 text-base tracking-wide text-sky-200",children:r.congratsDesc(u)}),F.jsxs($i,{className:"my-5",children:[F.jsx($i.Item,{label:r.scoreLabel,value:F.jsxs("span",{className:"text-amber-200",children:[e.toLocaleString()," ",r.ptsSuffix]})}),F.jsx($i.Item,{label:r.gemsLabel,value:F.jsxs("span",{className:"text-emerald-300",children:[n," / ",s]})}),F.jsx($i.Item,{label:r.jumpsLabel,value:l,size:"base"}),F.jsx($i.Item,{label:r.timeLabel,value:Qu(c),size:"base"})]}),F.jsxs("button",{onClick:d,className:eS,children:[F.jsx(Zu,{className:"h-5 w-5"})," ",r.restartGame]}),F.jsxs("button",{onClick:m,className:tS,children:[F.jsx(ju,{className:"h-4 w-4"})," ",r.backToMenuCaps]})]})),kC=({t:r,visible:e,levelNumber:n,gemsCount:s})=>F.jsx("div",{className:`font-freckle fixed inset-0 z-[60] flex items-center justify-center bg-gradient-to-b from-[#0e4a6e] to-[#052e1a] transition-opacity duration-300 ${e?"opacity-100":"opacity-0 pointer-events-none"}`,children:F.jsxs("div",{className:"text-center animate-in zoom-in-95 duration-300",children:[F.jsx("h3",{className:"text-xl tracking-[0.2em] text-[#7fd4e6] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:r.loadingTower(n)}),F.jsx(vm,{className:"mx-auto h-16 w-16 text-[#d9f99d] animate-spin mb-4 drop-shadow-[0_0_20px_rgba(217,249,157,0.5)] [animation-duration:2.5s] [animation-timing-function:ease-in-out]"}),F.jsx("h2",{className:"text-4xl tracking-wide text-[#d9f99d] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]",children:r.loadingGems(s)}),F.jsx("p",{className:"mt-3 text-sm tracking-[0.15em] text-[#a8c8ea]/60",children:r.loadingText})]})}),YC=({t:r,towerHeight:e,totalLevels:n,onClose:s})=>{const l=[r.elElevators,r.elSprings,r.elGems,r.elCheckpoints,r.elDoors,r.elTimer,r.elCollapsing,r.elLevers,r.elBalls],c=[r.ctrlMove,r.ctrlJump,r.ctrlInteract,r.ctrlRestart];return F.jsxs(Ku,{panelClassName:OC,animation:"fade",light:!0,children:[F.jsxs("div",{className:"flex items-center gap-2 text-amber-300 pb-3",children:[F.jsx(Jy,{className:"h-6 w-6"}),F.jsx("h3",{className:"text-xl tracking-wide",children:r.helpTitle})]}),F.jsxs("div",{className:"mt-2 space-y-3 tracking-wide text-sky-100",children:[F.jsx("p",{className:"text-sm leading-relaxed",children:r.helpIntro(e,n)}),F.jsxs("div",{className:"rounded-2xl bg-sky-900/40 p-4 space-y-2",children:[F.jsx("div",{className:"font-bold text-amber-200 tracking-wide",children:r.elementsTitle}),F.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2 text-sm",children:l.map((u,d)=>F.jsx("div",{children:F.jsx("strong",{children:u})},d))})]}),F.jsxs("div",{className:"rounded-2xl bg-sky-900/40 p-4",children:[F.jsx("div",{className:"font-bold text-amber-200 tracking-wide mb-1",children:r.controlsTitle}),F.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-sky-100/90",children:c.map((u,d)=>F.jsx("div",{children:u},d))})]})]}),F.jsx("button",{onClick:s,className:"mt-5 w-full rounded-xl bg-emerald-500 py-2.5 text-sm tracking-wide text-white shadow-lg hover:bg-emerald-400 active:scale-95",children:r.understand})]})},XC=({t:r,onClose:e})=>F.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[70] flex justify-center bg-black/80 backdrop-blur-md sm:inset-0 sm:items-center",children:F.jsxs("div",{className:"relative w-full max-w-md rounded-t-3xl bg-gradient-to-b from-[#0e4a6e] to-[#052e1a] p-5 pb-10 font-freckle text-sky-100 shadow-2xl sm:rounded-3xl sm:pb-6",children:[F.jsxs("div",{className:"pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-[#86efac] animate-bounce sm:hidden",children:[F.jsx("div",{className:"h-7 w-0.5 rounded-full bg-[#86efac]/70"}),F.jsx("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"currentColor","aria-hidden":"true",children:F.jsx("path",{d:"M10 11 L0 0 L20 0 Z"})})]}),F.jsx("button",{onClick:e,className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-sky-100","aria-label":r.close,children:F.jsx(Qy,{className:"h-5 w-5"})}),F.jsxs("div",{className:"flex items-center gap-3 pr-10",children:[F.jsx(_C,{className:"h-7 w-7 text-[#86efac]"}),F.jsx("h2",{className:"text-2xl text-[#86efac]",children:r.iosTitle})]}),F.jsx("p",{className:"mt-3 text-sm leading-relaxed text-sky-100/80",children:r.iosDesc}),F.jsxs("div",{className:"mt-4 space-y-2",children:[F.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[F.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"1"}),F.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep1a," ",F.jsxs("span",{className:"inline-flex items-center gap-0.5 rounded-md bg-sky-900/60 px-1.5 py-0.5 text-[#86efac]",children:[F.jsx(gC,{className:"h-3.5 w-3.5"})," ",r.iosShare]})," ",r.iosStep1b]})]}),F.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[F.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"2"}),F.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep2a," ",F.jsx("span",{className:"rounded-md bg-sky-900/60 px-1.5 py-0.5 text-amber-200",children:r.iosAddToHome}),"."]})]}),F.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-sky-950/50 px-3 py-2.5",children:[F.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86efac] text-sm font-bold text-[#052e1a]",children:"3"}),F.jsxs("span",{className:"text-sm leading-snug",children:[r.iosStep3a," ",F.jsx("span",{className:"rounded-md bg-sky-900/60 px-1.5 py-0.5 text-[#86efac]",children:r.appName})," ",r.iosStep3b]})]})]}),F.jsx("p",{className:"mt-2 text-xs text-[#a8c8ea]/60",children:r.iosFirefox}),F.jsx("button",{onClick:e,className:"mt-4 flex w-full items-center justify-center rounded-full bg-[#86efac] py-3 text-lg text-[#052e1a] shadow-lg active:scale-95",children:"OK"})]})}),WC=()=>F.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{width:"100%",height:"100%",display:"block"},children:[F.jsx("mask",{id:"pl-c",children:F.jsx("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})}),F.jsxs("g",{mask:"url(#pl-c)",children:[F.jsx("path",{fill:"#eee",d:"M0 0h512v256H0z"}),F.jsx("path",{fill:"#d80027",d:"M0 256h512v256H0z"})]})]}),qC=()=>F.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{width:"100%",height:"100%",display:"block"},children:[F.jsx("mask",{id:"gb-c",children:F.jsx("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})}),F.jsxs("g",{mask:"url(#gb-c)",children:[F.jsx("path",{fill:"#eee",d:"m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"}),F.jsx("path",{fill:"#0052b4",d:"M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"}),F.jsx("path",{fill:"#d80027",d:"M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"})]})]}),jC=[{code:"pl",label:"Polski",Icon:WC},{code:"en",label:"English",Icon:qC}],ZC="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-10 sm:w-10 [@media(max-height:500px)]:h-7 [@media(max-height:500px)]:w-7 p-0 bg-transparent overflow-hidden",KC=({lang:r,onChange:e})=>F.jsx(F.Fragment,{children:jC.map(({code:n,label:s,Icon:l})=>F.jsx("button",{onClick:()=>e(n),className:ZC,title:s,"aria-label":s,"aria-pressed":r===n,style:{filter:r===n?"grayscale(1)":"none"},children:F.jsx(l,{})},n))}),nS=({t:r,soundMuted:e,onToggleSound:n,onOpenSettings:s,onOpenHelp:l,onFullscreen:c,leadingButtons:u})=>F.jsxs("div",{className:"pointer-events-auto absolute right-1.5 top-1.5 z-10 flex items-center gap-1.5 sm:right-2 sm:top-2 sm:gap-2 [@media(max-height:500px)]:gap-1.5",children:[u,F.jsx("button",{onClick:n,className:mo,title:e?r.unmute:r.mute,"aria-label":e?r.unmute:r.mute,children:e?F.jsx(Ky,{className:"h-4 w-4 text-rose-400 sm:h-5 sm:w-5"}):F.jsx(Zy,{className:"h-4 w-4 text-emerald-400 sm:h-5 sm:w-5"})}),F.jsx("button",{onClick:s,className:mo,title:r.settings,"aria-label":r.settings,children:F.jsx(pC,{className:"h-4 w-4 text-cyan-300 sm:h-5 sm:w-5"})}),F.jsx("button",{onClick:l,className:mo,title:r.help,"aria-label":r.help,children:F.jsx(J3,{className:"h-4 w-4 text-amber-300 sm:h-5 sm:w-5"})}),F.jsx("button",{onClick:c,className:mo,title:r.fullscreen,"aria-label":r.fullscreen,children:F.jsx(cC,{className:"h-4 w-4 text-sky-200 sm:h-5 sm:w-5"})})]}),QC=({t:r,lang:e,onLangChange:n,soundMuted:s,onToggleSound:l,onOpenSettings:c,onOpenHelp:u,onFullscreen:d,onPlay:m})=>F.jsxs(F.Fragment,{children:[F.jsx("div",{className:"pointer-events-none fixed inset-0 z-30 bg-gradient-to-b from-[#050b14]/30 via-[#0b1520]/22 to-[#050b14]/35"}),F.jsxs("div",{className:"pointer-events-none fixed inset-0 z-40 animate-in fade-in duration-500",children:[F.jsx("div",{className:"pointer-events-auto absolute left-1.5 top-1.5 z-10 flex items-center gap-1.5 sm:left-2 sm:top-2 sm:gap-2 [@media(max-height:500px)]:gap-1.5",children:F.jsx(KC,{lang:e,onChange:n})}),F.jsx(nS,{t:r,soundMuted:s,onToggleSound:l,onOpenSettings:c,onOpenHelp:u,onFullscreen:d}),F.jsx("div",{className:"menu-title pointer-events-none absolute inset-x-4 top-[8%] text-center [@media(max-height:500px)]:top-[3.0rem]",children:F.jsxs("h1",{className:"font-freckle leading-[0.85] tracking-wide",children:[F.jsx("span",{className:"block drop-shadow-[0px_0px_8px_rgba(86,250,200,0.9)] text-transparent text-[6rem] bg-clip-text bg-gradient-to-b from-[#a8c8ea] via-[#7fe6b1] to-[#4ade80] sm:text-[11rem] [@media(max-height:500px)]:text-[6rem] [@media(max-width:500px)]:mt-1",children:r.appName}),F.jsx("span",{className:"block mt-1 drop-shadow-[0px_0px_4px_rgba(86,250,200,0.9)] whitespace-nowrap text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#86efac] via-[#4ade80] to-[#0e6e23] sm:text-6xl [@media(max-height:500px)]:text-4xl [@media(max-height:500px)]:mt-1",children:r.appSubtitle})]})}),F.jsxs("div",{className:"pointer-events-auto absolute left-1/2 top-[62%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center [@media(max-height:500px)]:top-[68%]",children:[F.jsx("button",{onClick:m,className:"group relative flex h-15 w-15 items-center justify-center rounded-full bg-amber-400 text-[#a27c18] transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-24 sm:w-24 [@media(max-height:500px)]:h-12 [@media(max-height:500px)]:w-12","aria-label":r.menuPlayAria,children:F.jsx(fC,{className:"ml-1 h-10 w-10 fill-current drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12 [@media(max-height:500px)]:ml-0.5 [@media(max-height:500px)]:h-6 [@media(max-height:500px)]:w-6"})}),F.jsx("span",{className:"mt-6 font-freckle text-2xl tracking-[0.3em] text-amber-400 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] [@media(max-height:500px)]:mt-2 [@media(max-height:500px)]:text-base",children:r.menuPlay})]}),F.jsx("span",{className:"font-yarin pointer-events-auto  text-xl absolute bottom-5 left-1/2 -translate-x-1/2 text-center z-index:1000 text-[#9aa] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] [@media(max-height:500px)]:bottom-1 [@media(max-height:500px)]:text-xs",children:F.jsx("a",{href:"https://loleus.github.io",target:"_blank",rel:"noopener noreferrer",className:"display:block hover:cursor-pointer z-index:1000",children:r.menuCredits})})]})]}),JC=({t:r,levelNum:e,progress:n,onSelect:s})=>{const l=Vy(e,n),c=n.completedLevels.includes(e),u=e===n.unlockedLevel,d=n.bestScores?.[e],m=l?c?"bg-gradient-to-br from-[#86efac] to-[#4ade80] text-[#0e4a6e] hover:scale-110":u?"bg-gradient-to-br from-[#7fd4e6] to-[#a8c8ea] text-[#0e4a6e] animate-pulse hover:scale-110":"bg-gradient-to-br from-[#0e4a6e]/80 to-[#4ade80]/60 text-[#86efac] hover:scale-110":"bg-[#0e4a6e]/50 text-white/30 cursor-not-allowed";return F.jsxs("button",{disabled:!l,onClick:()=>s(e),className:`group relative aspect-square flex flex-col items-center justify-center rounded-3xl font-freckle tracking-wide transition-all shadow-[0_6px_20px_rgba(0,0,0,0.6)] ${m}`,children:[F.jsx("span",{className:"text-4xl sm:text-5xl leading-none mb-1 mt-1",children:e}),c&&d?F.jsxs("div",{className:"text-base sm:text-xl leading-snug opacity-90 mt-1",children:[F.jsxs("div",{children:[d.jumps," ",r.bestJumps]}),F.jsx("div",{children:Qu(d.timeSec)})]}):l?F.jsx("div",{className:"mt-1 text-base text-amber-200 uppercase tracking-wider",children:u?r.levelNew:r.levelPlay}):F.jsx("div",{className:"mt-1 text-base opacity-60 flex justify-center",children:F.jsx(Wy,{className:"h-5 w-5"})})]})},$C=({t:r,progress:e,onBackToMenu:n,onSelectLevel:s})=>F.jsxs(F.Fragment,{children:[F.jsx("div",{className:"pointer-events-none fixed inset-0 z-30"}),F.jsx("div",{className:"fixed inset-0 z-40 flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 overflow-y-auto [@media(max-height:500px)]:p-2",children:F.jsxs("div",{className:"relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e4a6e] to-[#052e1a] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md [@media(max-height:500px)]:max-h-[calc(100dvh-1rem)] [@media(max-height:500px)]:p-3",children:[F.jsxs("div",{className:"flex items-center justify-between mb-5",children:[F.jsx("h2",{className:"font-freckle text-4xl text-[#86efac] drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] tracking-wide",children:r.selectLevel}),F.jsx("button",{onClick:n,className:"flex h-12 w-12 items-center justify-center rounded-full bg-[#0e4a6e]/85 text-white shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-transform backdrop-blur-sm","aria-label":r.backToMenu,title:r.backToMenu,children:F.jsx(ju,{className:"h-6 w-6 text-[#a8c8ea]"})})]}),F.jsx("p",{className:"font-freckle text-lg text-[#a8c8ea] mb-5 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:r.selectHint}),F.jsx("div",{className:"grid grid-cols-5 gap-3 sm:gap-4",children:ha.map((l,c)=>F.jsx(JC,{t:r,levelNum:c+1,progress:e,onSelect:s},c+1))}),F.jsxs("div",{className:"mt-6 flex items-center justify-between font-freckle text-lg text-[#a8c8ea] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",children:[F.jsxs("span",{children:[r.completed," ",e.completedLevels.length,"/",Va]}),F.jsxs("span",{children:[r.upTo," ",Math.min(e.unlockedLevel,Va)]})]})]})})]}),Zd=({icon:r,color:e,children:n})=>F.jsxs("div",{className:`flex items-center gap-3 text-4xl tracking-wide ${e} [@media(max-height:500px)]:gap-1.5 [@media(max-height:500px)]:text-base sm:text-3xl`,children:[r,F.jsx("span",{children:n})]}),Kd="h-8 w-8 [@media(max-height:500px)]:h-4 [@media(max-height:500px)]:w-4 sm:h-6 sm:w-6",eR=({t:r,currentLevel:e,towerHeight:n,playerLevel:s,gemsCollected:l,totalGems:c,score:u,displayTime:d,soundMuted:m,onToggleSound:p,onRestart:x,onBackToMenu:g,onOpenSettings:v,onOpenHelp:_,onFullscreen:T})=>F.jsxs("header",{className:"hud-header pointer-events-none fixed inset-0 z-30",children:[F.jsxs("div",{className:"font-freckle absolute left-1.5 top-1.5 sm:left-2 sm:top-2",children:[F.jsxs("div",{className:"text-lg sm:text-4xl tracking-wider text-[#86efac] [@media(max-height:500px)]:text-base",children:[r.hudTower," ",e," ",F.jsxs("span",{className:"text-[#4ade80]/90",children:["/ ",Va]})]}),F.jsxs("div",{className:"text-lg sm:text-4xl tracking-wider text-[#7fd4e6] [@media(max-height:500px)]:text-base",children:[r.hudFloor," ",s," ",F.jsxs("span",{className:"text-[#7fd4e6]/90",children:["/ ",n]})]})]}),F.jsxs("div",{className:"hud-score pointer-events-auto flex flex-row flex-nowrap items-center gap-4 whitespace-nowrap font-freckle",children:[F.jsxs(Zd,{icon:F.jsx(vm,{className:`${Kd} fill-[#4ade80]`}),color:"text-[#86efac]",children:[l,F.jsxs("span",{className:"text-[#4ade80]/90",children:[" / ",c]})]}),F.jsx(Zd,{icon:F.jsx(eC,{className:Kd}),color:"text-[#7fd4e6]",children:Qu(d)}),F.jsx(Zd,{icon:F.jsx(aC,{className:Kd}),color:"text-[#a8c8ea]",children:u})]}),F.jsx(nS,{t:r,soundMuted:m,onToggleSound:p,onOpenSettings:v,onOpenHelp:_,onFullscreen:T,leadingButtons:F.jsxs(F.Fragment,{children:[F.jsx("button",{onClick:x,className:mo,title:r.restartLevel,children:F.jsx(Zu,{className:"h-4 w-4 text-amber-400 sm:h-5 sm:w-5"})}),F.jsx("button",{onClick:g,className:mo,title:r.backToMenu,children:F.jsx(ju,{className:"h-4 w-4 text-cyan-400 sm:h-5 sm:w-5"})})]})})]}),tR=()=>/iPhone|iPod/i.test(navigator.userAgent),nR=()=>"standalone"in navigator&&navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches,iR=async()=>{const r=document,e=document.documentElement,n=tR();if(n&&nR())return"already-pwa";const s=document.fullscreenElement??r.webkitFullscreenElement;try{return s?(document.exitFullscreen?await document.exitFullscreen():r.webkitExitFullscreen?await r.webkitExitFullscreen.call(document):r.mozCancelFullScreen&&await r.mozCancelFullScreen.call(document),"ok"):e.requestFullscreen?(await e.requestFullscreen({navigationUI:"hide"}),"ok"):e.webkitRequestFullscreen?(await e.webkitRequestFullscreen.call(e),"ok"):e.mozRequestFullScreen?(await e.mozRequestFullScreen.call(e),"ok"):e.msRequestFullscreen?(await e.msRequestFullscreen.call(e),"ok"):n?"ios-blocked":"ok"}catch{return n?"ios-blocked":"ok"}},aR=()=>{const[r,e]=mt.useState(0),[n,s]=mt.useState(!1),[l,c]=mt.useState(0),u=mt.useRef(0),d=mt.useRef(void 0);return mt.useEffect(()=>{if(r===0)return;d.current&&(clearTimeout(d.current),d.current=void 0);const p=performance.now()-u.current,x=Math.max(0,1e3-p);return d.current=setTimeout(()=>{s(!1),d.current=setTimeout(()=>e(0),300)},x),()=>{d.current&&(clearTimeout(d.current),d.current=void 0)}},[r]),{loadingKey:r,loadingVisible:n,loadingGemsCount:l,trigger:p=>{c(p),u.current=performance.now(),e(x=>x+1),s(!0)}}},sR=()=>{const[r,e]=mt.useState(0),n=mt.useRef({startedAt:0,finalTime:0,running:!1}),s=()=>{n.current.startedAt=performance.now(),n.current.running=!0},l=()=>{n.current.running&&e((performance.now()-n.current.startedAt)/1e3)},c=()=>(n.current.running&&(n.current.finalTime=(performance.now()-n.current.startedAt)/1e3,n.current.running=!1),n.current.finalTime),u=()=>{n.current={startedAt:0,finalTime:0,running:!1},e(0)};return{displayTime:n.current.running?r:n.current.finalTime,isRunning:()=>n.current.running,hasFinalTime:()=>n.current.finalTime!==0,finalTime:()=>n.current.finalTime,start:s,tick:l,stop:c,reset:u}},rR=["playing","win","gameover","gamecomplete"];function oR(){const r=mt.useRef(null),e=mt.useRef(null),[n,s]=mt.useState("menu"),l=mt.useRef("menu");mt.useEffect(()=>{l.current=n},[n]);const[c,u]=mt.useState(()=>O3()),d=U3[c],m=mt.useCallback(Ae=>{u(Ae),P3(Ae)},[]);mt.useEffect(()=>{document.documentElement.lang=c,document.title=d.pageTitle},[c,d]);const[p,x]=mt.useState({cullingEnabled:!0,simulatedFpsThrottle:0,filterMode:"crisp",renderScale:1,soundMuted:!1}),g=mt.useRef(p);mt.useEffect(()=>{g.current=p},[p]);const[v,_]=mt.useState({level:0,score:0,gemsCollected:0,totalGems:ha[0].gems.length,jumps:0,elapsedTime:0,status:"running"}),[T,R]=mt.useState(!1),[S,y]=mt.useState(!1),[L,P]=mt.useState(!1),[A,I]=mt.useState(ha[0].towerHeight),[N,O]=mt.useState(1),E=mt.useRef(1);mt.useEffect(()=>{E.current=N},[N]);const[U,X]=mt.useState(()=>po()),V=aR(),q=sR(),ue=mt.useRef(0),[de,Q]=mt.useState(()=>__(typeof window>"u"?1280:window.innerWidth,typeof window>"u"?800:window.innerHeight)),B=mt.useCallback(Ae=>{const Qe=r.current;if(!Qe)return null;e.current&&(e.current.dispose(),e.current=null);const Je=new A3(Qe,Ae);return e.current=Je,I(Je.towerHeight),_(ut=>({...ut,totalGems:Je.level.gems.length})),Je.config={...g.current},Je.applyCanvasFilter(),Gi.setMuted(g.current.soundMuted),Je.setRenderResolution(de.width,de.height),Je.onPlayerStateUpdate=ut=>{_({level:Math.max(0,Math.min(Je.towerHeight,Math.floor(ut.y))),score:ut.score,gemsCollected:ut.gemsCollected,totalGems:ut.totalGems,jumps:ut.jumpCount,elapsedTime:ut.elapsedTime,status:ut.status})},Je.onGameStatusChange=ut=>{if(_(Lt=>({...Lt,status:ut})),ut!=="gameover"&&ut!=="win")return;const Rt=q.stop();if(ut==="win"){ue.current+=Rt;const Lt=Je.playerState,$t=Lt.gemsCollected>=Lt.totalGems,J=N3(E.current,$t,Lt.jumpCount,Rt,Va);X(J),E.current>=Va?s($t?"gamecomplete":"win"):s("win")}else s("gameover")},Je},[]);mt.useEffect(()=>{const Ae=M_(po()),Qe=B(ha[Ae]);return Qe&&Qe.setSceneMode("menu"),()=>{e.current?.dispose(),e.current=null}},[]),mt.useEffect(()=>{if(e.current)if(n==="menu"||n==="levelSelect"){const Ae=M_(po());if(e.current.level.id===ha[Ae].id)e.current.setSceneMode("menu");else{const Je=B(ha[Ae]);Je&&Je.setSceneMode("menu")}}else n==="playing"&&e.current.setSceneMode("play")},[n,U,B]),mt.useEffect(()=>{let Ae=0;const Qe=()=>{if(Ae=requestAnimationFrame(Qe),l.current!=="playing"||!e.current)return;const Je=e.current;if(Je.playerState.status!=="running")return;const ut=Je.input.left||Je.input.right||Je.input.up||Je.input.jumpQueued;!q.isRunning()&&!q.hasFinalTime()&&ut&&q.start(),q.tick()};return Ae=requestAnimationFrame(Qe),()=>cancelAnimationFrame(Ae)},[]),mt.useEffect(()=>{const Ae=()=>{const Qe=__(window.innerWidth,window.innerHeight);Q(Je=>Je.id===Qe.id?Je:Qe)};return Ae(),window.addEventListener("resize",Ae),window.addEventListener("orientationchange",Ae),()=>{window.removeEventListener("resize",Ae),window.removeEventListener("orientationchange",Ae)}},[]),mt.useEffect(()=>{e.current?.setRenderResolution(de.width,de.height)},[de]),mt.useEffect(()=>{const Ae=document.getElementById("loader"),Qe=setTimeout(()=>{Ae&&(Ae.style.display="none")},3e3);return n==="menu"&&window.__fontsLoaded&&(Ae&&(Ae.style.display="none"),clearTimeout(Qe)),()=>clearTimeout(Qe)},[n]);const Y=mt.useCallback(Ae=>{x(Qe=>{const Je={...Qe,...Ae};return e.current&&(e.current.config=Je,Ae.filterMode!==void 0&&e.current.applyCanvasFilter(),Ae.soundMuted!==void 0&&Gi.setMuted(Ae.soundMuted),Ae.renderScale!==void 0&&e.current.setRenderResolution(de.width,de.height)),Je})},[de]),ne=async()=>{await iR()==="ios-blocked"&&P(!0)},me=(Ae,Qe={})=>{const Je=ha[Ae-1];m1.flushSync(()=>{V.trigger(Je.gems.length),Qe.changeScreenImmediately&&s("playing")}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const ut=B(Je);ut&&(ut.restartGame(),ut.setSceneMode("play")),q.reset(),Qe.changeScreenImmediately||s("playing")})})},b=()=>{X(po()),s("levelSelect")},H=Ae=>{Vy(Ae,po())&&(O(Ae),me(Ae))},ie=()=>{O(1),ue.current=0,me(1)},ve=()=>{e.current?.restartGame(),q.reset(),s("playing")},Ee=()=>{const Ae=N+1;if(Ae>Va){s("gamecomplete");return}O(Ae),me(Ae,{changeScreenImmediately:!0})},K=()=>{O(1),ue.current=0,s("menu")},ae=Ae=>{!e.current||l.current!=="playing"||Ae(e.current)},pe=Ae=>ae(Qe=>{Qe.input.left=Ae}),Ce=Ae=>ae(Qe=>{Qe.input.right=Ae}),Ve=Ae=>ae(Qe=>{Ae&&!Qe.input.up&&(Qe.input.jumpQueued=!0),Qe.input.up=Ae}),Ne=()=>ae(Ae=>{Ae.input.doorQueued=!0}),ct=()=>Y({soundMuted:!p.soundMuted}),tt=()=>R(!0),ke=()=>y(!0),ot=rR.includes(n);return F.jsxs("main",{className:"relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#050b14] font-freckle text-slate-100 select-none",children:[F.jsx("div",{className:`relative overflow-hidden transition-all duration-700 ${p.filterMode==="crt"?"crt-overlay":""} `,style:{width:"100vw",height:"100vh",filter:n==="menu"||n==="levelSelect"?"blur(1.5px) brightness(0.72)":"none"},children:F.jsx("div",{ref:r,className:`absolute inset-0 transition-all duration-700 ${p.filterMode==="crisp"?"rendering-pixelated":""}`,style:{display:"flex",alignItems:"center",justifyContent:"center"}})}),n==="menu"&&F.jsx(QC,{t:d,lang:c,onLangChange:m,soundMuted:p.soundMuted,onToggleSound:ct,onOpenSettings:tt,onOpenHelp:ke,onFullscreen:ne,onPlay:b}),n==="levelSelect"&&F.jsx($C,{t:d,progress:U,onBackToMenu:K,onSelectLevel:H}),ot&&F.jsx(eR,{t:d,currentLevel:N,towerHeight:A,playerLevel:v.level,gemsCollected:v.gemsCollected,totalGems:v.totalGems,score:v.score,displayTime:q.displayTime,soundMuted:p.soundMuted,onToggleSound:ct,onRestart:ve,onBackToMenu:K,onOpenSettings:tt,onOpenHelp:ke,onFullscreen:ne}),n==="playing"&&F.jsx(RC,{t:d,onMoveLeft:pe,onMoveRight:Ce,onJump:Ve,onDoor:Ne}),L&&F.jsx(XC,{t:d,onClose:()=>P(!1)}),F.jsx(IC,{t:d,config:p,onConfigChange:Y,isOpen:T,onClose:()=>R(!1)}),S&&F.jsx(YC,{t:d,towerHeight:A,totalLevels:Va,onClose:()=>y(!1)}),n==="win"&&F.jsx(HC,{t:d,score:v.score,gems:v.gemsCollected,totalGems:v.totalGems,jumps:v.jumps,timeSec:q.finalTime(),towerHeight:A,levelNumber:N,totalLevels:Va,onRestart:ve,onBackToMenu:K,onNextLevel:Ee}),n==="gamecomplete"&&F.jsx(VC,{t:d,score:v.score,gems:v.gemsCollected,totalGems:v.totalGems,jumps:v.jumps,totalTime:ue.current,levelsCompleted:Va,onRestart:ie,onBackToMenu:K}),n==="gameover"&&F.jsx(GC,{t:d,score:v.score,level:v.level,towerHeight:A,onRestart:ve,onBackToMenu:K}),V.loadingKey>0&&F.jsx(kC,{t:d,visible:V.loadingVisible,levelNumber:N,gemsCount:V.loadingGemsCount})]})}p1.createRoot(document.getElementById("root")).render(F.jsx(mt.StrictMode,{children:F.jsx(oR,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
