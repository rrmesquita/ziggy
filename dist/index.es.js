function t(){return(t=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}var r="undefined"!=typeof Symbol&&Symbol,e="Function.prototype.bind called on incompatible ",n=Array.prototype.slice,o=Object.prototype.toString,i=Function.prototype.bind||function(t){var r=this;if("function"!=typeof r||"[object Function]"!==o.call(r))throw new TypeError(e+r);for(var i,a=n.call(arguments,1),u=function(){if(this instanceof i){var e=r.apply(this,a.concat(n.call(arguments)));return Object(e)===e?e:this}return r.apply(t,a.concat(n.call(arguments)))},f=Math.max(0,r.length-a.length),y=[],c=0;c<f;c++)y.push("$"+c);if(i=Function("binder","return function ("+y.join(",")+"){ return binder.apply(this,arguments); }")(u),r.prototype){var p=function(){};p.prototype=r.prototype,i.prototype=new p,p.prototype=null}return i},a=i.call(Function.call,Object.prototype.hasOwnProperty),u=SyntaxError,f=Function,y=TypeError,c=function(t){try{return f('"use strict"; return ('+t+").constructor;")()}catch(t){}},p=Object.getOwnPropertyDescriptor;if(p)try{p({},"")}catch(t){p=null}var l,s=function(){throw new y},d=p?function(){try{return s}catch(t){try{return p(arguments,"callee").get}catch(t){return s}}}():s,b="function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},r=Symbol("test"),e=Object(r);if("string"==typeof r)return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;for(r in t[r]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var n=Object.getOwnPropertySymbols(t);if(1!==n.length||n[0]!==r)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,r))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(t,r);if(42!==o.value||!0!==o.enumerable)return!1}return!0}(),v=Object.getPrototypeOf||function(t){return t.__proto__},h={},m="undefined"==typeof Uint8Array?void 0:v(Uint8Array),g={"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":b?v([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":h,"%AsyncGenerator%":h,"%AsyncGeneratorFunction%":h,"%AsyncIteratorPrototype%":h,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":f,"%GeneratorFunction%":h,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":b?v(v([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&b?v((new Map)[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&b?v((new Set)[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":b?v(""[Symbol.iterator]()):void 0,"%Symbol%":b?Symbol:void 0,"%SyntaxError%":u,"%ThrowTypeError%":d,"%TypedArray%":m,"%TypeError%":y,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet},j=function t(r){var e;if("%AsyncFunction%"===r)e=c("async function () {}");else if("%GeneratorFunction%"===r)e=c("function* () {}");else if("%AsyncGeneratorFunction%"===r)e=c("async function* () {}");else if("%AsyncGenerator%"===r){var n=t("%AsyncGeneratorFunction%");n&&(e=n.prototype)}else if("%AsyncIteratorPrototype%"===r){var o=t("%AsyncGenerator%");o&&(e=v(o.prototype))}return g[r]=e,e},S={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},A=i.call(Function.call,Array.prototype.concat),O=i.call(Function.apply,Array.prototype.splice),w=i.call(Function.call,String.prototype.replace),P=i.call(Function.call,String.prototype.slice),E=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,F=/\\(\\)?/g,R=function(t){var r=P(t,0,1),e=P(t,-1);if("%"===r&&"%"!==e)throw new u("invalid intrinsic syntax, expected closing `%`");if("%"===e&&"%"!==r)throw new u("invalid intrinsic syntax, expected opening `%`");var n=[];return w(t,E,function(t,r,e,o){n[n.length]=e?w(o,F,"$1"):r||t}),n},I=function(t,r){var e,n=t;if(a(S,n)&&(n="%"+(e=S[n])[0]+"%"),a(g,n)){var o=g[n];if(o===h&&(o=j(n)),void 0===o&&!r)throw new y("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:e,name:n,value:o}}throw new u("intrinsic "+t+" does not exist!")},k=function(t,r){if("string"!=typeof t||0===t.length)throw new y("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof r)throw new y('"allowMissing" argument must be a boolean');var e=R(t),n=e.length>0?e[0]:"",o=I("%"+n+"%",r),i=o.name,f=o.value,c=!1,l=o.alias;l&&(n=l[0],O(e,A([0,1],l)));for(var s=1,d=!0;s<e.length;s+=1){var b=e[s],v=P(b,0,1),h=P(b,-1);if(('"'===v||"'"===v||"`"===v||'"'===h||"'"===h||"`"===h)&&v!==h)throw new u("property names with quotes must have matching quotes");if("constructor"!==b&&d||(c=!0),a(g,i="%"+(n+="."+b)+"%"))f=g[i];else if(null!=f){if(!(b in f)){if(!r)throw new y("base intrinsic for "+t+" exists, but the property is not available.");return}if(p&&s+1>=e.length){var m=p(f,b);f=(d=!!m)&&"get"in m&&!("originalValue"in m.get)?m.get:f[b]}else d=a(f,b),f=f[b];d&&!c&&(g[i]=f)}}return f},M=(function(t){var r=k("%Function.prototype.apply%"),e=k("%Function.prototype.call%"),n=k("%Reflect.apply%",!0)||i.call(e,r),o=k("%Object.getOwnPropertyDescriptor%",!0),a=k("%Object.defineProperty%",!0),u=k("%Math.max%");if(a)try{a({},"a",{value:1})}catch(t){a=null}t.exports=function(t){var r=n(i,e,arguments);if(o&&a){var f=o(r,"length");f.configurable&&a(r,"length",{value:1+u(0,t.length-(arguments.length-1))})}return r};var f=function(){return n(i,r,arguments)};a?a(t.exports,"apply",{value:f}):t.exports.apply=f}(l={exports:{}}),l.exports),x=M(k("String.prototype.indexOf")),U=function(t,r){var e=k(t,!!r);return"function"==typeof e&&x(t,".prototype.")>-1?M(e):e},$="function"==typeof Map&&Map.prototype,W=Object.getOwnPropertyDescriptor&&$?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,N=$&&W&&"function"==typeof W.get?W.get:null,B=$&&Map.prototype.forEach,T="function"==typeof Set&&Set.prototype,C=Object.getOwnPropertyDescriptor&&T?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,_=T&&C&&"function"==typeof C.get?C.get:null,D=T&&Set.prototype.forEach,G="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,q="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,V="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,z=Boolean.prototype.valueOf,J=Object.prototype.toString,L=Function.prototype.toString,H=String.prototype.match,Q="function"==typeof BigInt?BigInt.prototype.valueOf:null,Z=Object.getOwnPropertySymbols,K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,X="function"==typeof Symbol&&"object"==typeof Symbol.iterator,Y=Object.prototype.propertyIsEnumerable,tt=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null),rt={__proto__:null,default:{}}.custom,et=rt&&ft(rt)?rt:null,nt="function"==typeof Symbol&&void 0!==Symbol.toStringTag?Symbol.toStringTag:null,ot=function t(r,e,n,o){var i=e||{};if(ct(i,"quoteStyle")&&"single"!==i.quoteStyle&&"double"!==i.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(ct(i,"maxStringLength")&&("number"==typeof i.maxStringLength?i.maxStringLength<0&&Infinity!==i.maxStringLength:null!==i.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=!ct(i,"customInspect")||i.customInspect;if("boolean"!=typeof a&&"symbol"!==a)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(ct(i,"indent")&&null!==i.indent&&"\t"!==i.indent&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(void 0===r)return"undefined";if(null===r)return"null";if("boolean"==typeof r)return r?"true":"false";if("string"==typeof r)return st(r,i);if("number"==typeof r)return 0===r?Infinity/r>0?"0":"-0":String(r);if("bigint"==typeof r)return String(r)+"n";var u=void 0===i.depth?5:i.depth;if(void 0===n&&(n=0),n>=u&&u>0&&"object"==typeof r)return ut(r)?"[Array]":"[Object]";var f,y=function(t,r){var e;if("\t"===t.indent)e="\t";else{if(!("number"==typeof t.indent&&t.indent>0))return null;e=Array(t.indent+1).join(" ")}return{base:e,prev:Array(r+1).join(e)}}(i,n);if(void 0===o)o=[];else if(lt(o,r)>=0)return"[Circular]";function c(r,e,a){if(e&&(o=o.slice()).push(e),a){var u={depth:i.depth};return ct(i,"quoteStyle")&&(u.quoteStyle=i.quoteStyle),t(r,u,n+1,o)}return t(r,i,n+1,o)}if("function"==typeof r){var p=function(t){if(t.name)return t.name;var r=H.call(L.call(t),/^function\s*([\w$]+)/);return r?r[1]:null}(r),l=gt(r,c);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(l.length>0?" { "+l.join(", ")+" }":"")}if(ft(r)){var s=X?String(r).replace(/^(Symbol\(.*\))_[^)]*$/,"$1"):K.call(r);return"object"!=typeof r||X?s:bt(s)}if((f=r)&&"object"==typeof f&&("undefined"!=typeof HTMLElement&&f instanceof HTMLElement||"string"==typeof f.nodeName&&"function"==typeof f.getAttribute)){for(var d="<"+String(r.nodeName).toLowerCase(),b=r.attributes||[],v=0;v<b.length;v++)d+=" "+b[v].name+"="+it(at(b[v].value),"double",i);return d+=">",r.childNodes&&r.childNodes.length&&(d+="..."),d+"</"+String(r.nodeName).toLowerCase()+">"}if(ut(r)){if(0===r.length)return"[]";var h=gt(r,c);return y&&!function(t){for(var r=0;r<t.length;r++)if(lt(t[r],"\n")>=0)return!1;return!0}(h)?"["+mt(h,y)+"]":"[ "+h.join(", ")+" ]"}if(function(t){return!("[object Error]"!==pt(t)||nt&&"object"==typeof t&&nt in t)}(r)){var m=gt(r,c);return 0===m.length?"["+String(r)+"]":"{ ["+String(r)+"] "+m.join(", ")+" }"}if("object"==typeof r&&a){if(et&&"function"==typeof r[et])return r[et]();if("symbol"!==a&&"function"==typeof r.inspect)return r.inspect()}if(function(t){if(!N||!t||"object"!=typeof t)return!1;try{N.call(t);try{_.call(t)}catch(t){return!0}return t instanceof Map}catch(t){}return!1}(r)){var g=[];return B.call(r,function(t,e){g.push(c(e,r,!0)+" => "+c(t,r))}),ht("Map",N.call(r),g,y)}if(function(t){if(!_||!t||"object"!=typeof t)return!1;try{_.call(t);try{N.call(t)}catch(t){return!0}return t instanceof Set}catch(t){}return!1}(r)){var j=[];return D.call(r,function(t){j.push(c(t,r))}),ht("Set",_.call(r),j,y)}if(function(t){if(!G||!t||"object"!=typeof t)return!1;try{G.call(t,G);try{q.call(t,q)}catch(t){return!0}return t instanceof WeakMap}catch(t){}return!1}(r))return vt("WeakMap");if(function(t){if(!q||!t||"object"!=typeof t)return!1;try{q.call(t,q);try{G.call(t,G)}catch(t){return!0}return t instanceof WeakSet}catch(t){}return!1}(r))return vt("WeakSet");if(function(t){if(!V||!t||"object"!=typeof t)return!1;try{return V.call(t),!0}catch(t){}return!1}(r))return vt("WeakRef");if(function(t){return!("[object Number]"!==pt(t)||nt&&"object"==typeof t&&nt in t)}(r))return bt(c(Number(r)));if(function(t){if(!t||"object"!=typeof t||!Q)return!1;try{return Q.call(t),!0}catch(t){}return!1}(r))return bt(c(Q.call(r)));if(function(t){return!("[object Boolean]"!==pt(t)||nt&&"object"==typeof t&&nt in t)}(r))return bt(z.call(r));if(function(t){return!("[object String]"!==pt(t)||nt&&"object"==typeof t&&nt in t)}(r))return bt(c(String(r)));if(!function(t){return!("[object Date]"!==pt(t)||nt&&"object"==typeof t&&nt in t)}(r)&&!function(t){return!("[object RegExp]"!==pt(t)||nt&&"object"==typeof t&&nt in t)}(r)){var S=gt(r,c),A=tt?tt(r)===Object.prototype:r instanceof Object||r.constructor===Object,O=r instanceof Object?"":"null prototype",w=!A&&nt&&Object(r)===r&&nt in r?pt(r).slice(8,-1):O?"Object":"",P=(A||"function"!=typeof r.constructor?"":r.constructor.name?r.constructor.name+" ":"")+(w||O?"["+[].concat(w||[],O||[]).join(": ")+"] ":"");return 0===S.length?P+"{}":y?P+"{"+mt(S,y)+"}":P+"{ "+S.join(", ")+" }"}return String(r)};function it(t,r,e){var n="double"===(e.quoteStyle||r)?'"':"'";return n+t+n}function at(t){return String(t).replace(/"/g,"&quot;")}function ut(t){return!("[object Array]"!==pt(t)||nt&&"object"==typeof t&&nt in t)}function ft(t){if(X)return t&&"object"==typeof t&&t instanceof Symbol;if("symbol"==typeof t)return!0;if(!t||"object"!=typeof t||!K)return!1;try{return K.call(t),!0}catch(t){}return!1}var yt=Object.prototype.hasOwnProperty||function(t){return t in this};function ct(t,r){return yt.call(t,r)}function pt(t){return J.call(t)}function lt(t,r){if(t.indexOf)return t.indexOf(r);for(var e=0,n=t.length;e<n;e++)if(t[e]===r)return e;return-1}function st(t,r){if(t.length>r.maxStringLength){var e=t.length-r.maxStringLength,n="... "+e+" more character"+(e>1?"s":"");return st(t.slice(0,r.maxStringLength),r)+n}return it(t.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,dt),"single",r)}function dt(t){var r=t.charCodeAt(0),e={8:"b",9:"t",10:"n",12:"f",13:"r"}[r];return e?"\\"+e:"\\x"+(r<16?"0":"")+r.toString(16).toUpperCase()}function bt(t){return"Object("+t+")"}function vt(t){return t+" { ? }"}function ht(t,r,e,n){return t+" ("+r+") {"+(n?mt(e,n):e.join(", "))+"}"}function mt(t,r){if(0===t.length)return"";var e="\n"+r.prev+r.base;return e+t.join(","+e)+"\n"+r.prev}function gt(t,r){var e=ut(t),n=[];if(e){n.length=t.length;for(var o=0;o<t.length;o++)n[o]=ct(t,o)?r(t[o],t):""}var i,a="function"==typeof Z?Z(t):[];if(X){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=a[u]}for(var f in t)ct(t,f)&&(e&&String(Number(f))===f&&f<t.length||X&&i["$"+f]instanceof Symbol||(/[^\w$]/.test(f)?n.push(r(f,t)+": "+r(t[f],t)):n.push(f+": "+r(t[f],t))));if("function"==typeof Z)for(var y=0;y<a.length;y++)Y.call(t,a[y])&&n.push("["+r(a[y])+"]: "+r(t[a[y]],t));return n}var jt=k("%TypeError%"),St=k("%WeakMap%",!0),At=k("%Map%",!0),Ot=U("WeakMap.prototype.get",!0),wt=U("WeakMap.prototype.set",!0),Pt=U("WeakMap.prototype.has",!0),Et=U("Map.prototype.get",!0),Ft=U("Map.prototype.set",!0),Rt=U("Map.prototype.has",!0),It=function(t,r){for(var e,n=t;null!==(e=n.next);n=e)if(e.key===r)return n.next=e.next,e.next=t.next,t.next=e,e},kt=function(){var t,r,e,n={assert:function(t){if(!n.has(t))throw new jt("Side channel does not contain "+ot(t))},get:function(n){if(St&&n&&("object"==typeof n||"function"==typeof n)){if(t)return Ot(t,n)}else if(At){if(r)return Et(r,n)}else if(e)return function(t,r){var e=It(t,r);return e&&e.value}(e,n)},has:function(n){if(St&&n&&("object"==typeof n||"function"==typeof n)){if(t)return Pt(t,n)}else if(At){if(r)return Rt(r,n)}else if(e)return function(t,r){return!!It(t,r)}(e,n);return!1},set:function(n,o){St&&n&&("object"==typeof n||"function"==typeof n)?(t||(t=new St),wt(t,n,o)):At?(r||(r=new At),Ft(r,n,o)):(e||(e={key:{},next:null}),function(t,r,e){var n=It(t,r);n?n.value=e:t.next={key:r,next:t.next,value:e}}(e,n,o))}};return n},Mt=String.prototype.replace,xt=/%20/g,Ut={default:"RFC3986",formatters:{RFC1738:function(t){return Mt.call(t,xt,"+")},RFC3986:function(t){return String(t)}},RFC1738:"RFC1738",RFC3986:"RFC3986"},$t=Object.prototype.hasOwnProperty,Wt=Array.isArray,Nt=function(){for(var t=[],r=0;r<256;++r)t.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return t}(),Bt=function(t,r){for(var e=r&&r.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(e[n]=t[n]);return e},Tt={arrayToObject:Bt,assign:function(t,r){return Object.keys(r).reduce(function(t,e){return t[e]=r[e],t},t)},combine:function(t,r){return[].concat(t,r)},compact:function(t){for(var r=[{obj:{o:t},prop:"o"}],e=[],n=0;n<r.length;++n)for(var o=r[n],i=o.obj[o.prop],a=Object.keys(i),u=0;u<a.length;++u){var f=a[u],y=i[f];"object"==typeof y&&null!==y&&-1===e.indexOf(y)&&(r.push({obj:i,prop:f}),e.push(y))}return function(t){for(;t.length>1;){var r=t.pop(),e=r.obj[r.prop];if(Wt(e)){for(var n=[],o=0;o<e.length;++o)void 0!==e[o]&&n.push(e[o]);r.obj[r.prop]=n}}}(r),t},decode:function(t,r,e){var n=t.replace(/\+/g," ");if("iso-8859-1"===e)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(t){return n}},encode:function(t,r,e,n,o){if(0===t.length)return t;var i=t;if("symbol"==typeof t?i=Symbol.prototype.toString.call(t):"string"!=typeof t&&(i=String(t)),"iso-8859-1"===e)return escape(i).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var a="",u=0;u<i.length;++u){var f=i.charCodeAt(u);45===f||46===f||95===f||126===f||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||o===Ut.RFC1738&&(40===f||41===f)?a+=i.charAt(u):f<128?a+=Nt[f]:f<2048?a+=Nt[192|f>>6]+Nt[128|63&f]:f<55296||f>=57344?a+=Nt[224|f>>12]+Nt[128|f>>6&63]+Nt[128|63&f]:(f=65536+((1023&f)<<10|1023&i.charCodeAt(u+=1)),a+=Nt[240|f>>18]+Nt[128|f>>12&63]+Nt[128|f>>6&63]+Nt[128|63&f])}return a},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,r){if(Wt(t)){for(var e=[],n=0;n<t.length;n+=1)e.push(r(t[n]));return e}return r(t)},merge:function t(r,e,n){if(!e)return r;if("object"!=typeof e){if(Wt(r))r.push(e);else{if(!r||"object"!=typeof r)return[r,e];(n&&(n.plainObjects||n.allowPrototypes)||!$t.call(Object.prototype,e))&&(r[e]=!0)}return r}if(!r||"object"!=typeof r)return[r].concat(e);var o=r;return Wt(r)&&!Wt(e)&&(o=Bt(r,n)),Wt(r)&&Wt(e)?(e.forEach(function(e,o){if($t.call(r,o)){var i=r[o];i&&"object"==typeof i&&e&&"object"==typeof e?r[o]=t(i,e,n):r.push(e)}else r[o]=e}),r):Object.keys(e).reduce(function(r,o){var i=e[o];return r[o]=$t.call(r,o)?t(r[o],i,n):i,r},o)}},Ct=Object.prototype.hasOwnProperty,_t={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,r){return t+"["+r+"]"},repeat:function(t){return t}},Dt=Array.isArray,Gt=Array.prototype.push,qt=function(t,r){Gt.apply(t,Dt(r)?r:[r])},Vt=Date.prototype.toISOString,zt=Ut.default,Jt={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:Tt.encode,encodeValuesOnly:!1,format:zt,formatter:Ut.formatters[zt],indices:!1,serializeDate:function(t){return Vt.call(t)},skipNulls:!1,strictNullHandling:!1},Lt=function t(r,e,n,o,i,a,u,f,y,c,p,l,s,d,b){var v,h=r;if(b.has(r))throw new RangeError("Cyclic object value");if("function"==typeof u?h=u(e,h):h instanceof Date?h=c(h):"comma"===n&&Dt(h)&&(h=Tt.maybeMap(h,function(t){return t instanceof Date?c(t):t})),null===h){if(o)return a&&!s?a(e,Jt.encoder,d,"key",p):e;h=""}if("string"==typeof(v=h)||"number"==typeof v||"boolean"==typeof v||"symbol"==typeof v||"bigint"==typeof v||Tt.isBuffer(h))return a?[l(s?e:a(e,Jt.encoder,d,"key",p))+"="+l(a(h,Jt.encoder,d,"value",p))]:[l(e)+"="+l(String(h))];var m,g=[];if(void 0===h)return g;if("comma"===n&&Dt(h))m=[{value:h.length>0?h.join(",")||null:void 0}];else if(Dt(u))m=u;else{var j=Object.keys(h);m=f?j.sort(f):j}for(var S=0;S<m.length;++S){var A=m[S],O="object"==typeof A&&void 0!==A.value?A.value:h[A];if(!i||null!==O){var w=Dt(h)?"function"==typeof n?n(e,A):e:e+(y?"."+A:"["+A+"]");b.set(r,!0);var P=kt();qt(g,t(O,w,n,o,i,a,u,f,y,c,p,l,s,d,P))}}return g},Ht=Object.prototype.hasOwnProperty,Qt=Array.isArray,Zt={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:Tt.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Kt=function(t){return t.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},Xt=function(t,r){return t&&"string"==typeof t&&r.comma&&t.indexOf(",")>-1?t.split(","):t},Yt=function(t,r,e,n){if(t){var o=e.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/g,a=e.depth>0&&/(\[[^[\]]*])/.exec(o),u=a?o.slice(0,a.index):o,f=[];if(u){if(!e.plainObjects&&Ht.call(Object.prototype,u)&&!e.allowPrototypes)return;f.push(u)}for(var y=0;e.depth>0&&null!==(a=i.exec(o))&&y<e.depth;){if(y+=1,!e.plainObjects&&Ht.call(Object.prototype,a[1].slice(1,-1))&&!e.allowPrototypes)return;f.push(a[1])}return a&&f.push("["+o.slice(a.index)+"]"),function(t,r,e,n){for(var o=n?r:Xt(r,e),i=t.length-1;i>=0;--i){var a,u=t[i];if("[]"===u&&e.parseArrays)a=[].concat(o);else{a=e.plainObjects?Object.create(null):{};var f="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,y=parseInt(f,10);e.parseArrays||""!==f?!isNaN(y)&&u!==f&&String(y)===f&&y>=0&&e.parseArrays&&y<=e.arrayLimit?(a=[])[y]=o:a[f]=o:a={0:o}}o=a}return o}(f,r,e,n)}};class tr{constructor(t,r,e){var n;this.name=t,this.definition=r,this.bindings=null!=(n=r.bindings)?n:{},this.config=e}get template(){return`${this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?`:${this.config.port}`:""}`:this.config.url:""}/${this.definition.uri}`.replace(/\/+$/,"")}get parameterSegments(){var t,r;return null!=(t=null==(r=this.template.match(/{[^}?]+\??}/g))?void 0:r.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))?t:[]}matchesUrl(t){if(!this.definition.methods.includes("GET"))return!1;const r=this.template.replace(/\/{[^}?]*\?}/g,"(/[^/?]+)?").replace(/{[^}]+}/g,"[^/?]+").replace(/^\w+:\/\//,"");return new RegExp(`^${r}$`).test(t.replace(/\/+$/,"").split("?").shift())}compile(t){return this.parameterSegments.length?this.template.replace(/{([^}?]+)\??}/g,(r,e)=>{var n;if([null,void 0].includes(t[e])&&this.parameterSegments.find(({name:t})=>t===e).required)throw new Error(`Ziggy error: '${e}' parameter is required for route '${this.name}'.`);return encodeURIComponent(null!=(n=t[e])?n:"")}).replace(/\/+$/,""):this.template}}class rr extends String{constructor(r,e,n=!0,o){var i;if(super(),this.t=null!=(i=null!=o?o:Ziggy)?i:null==globalThis?void 0:globalThis.Ziggy,this.t=t({},this.t,{absolute:n}),r){if(!this.t.routes[r])throw new Error(`Ziggy error: route '${r}' is not in the route list.`);this.i=new tr(r,this.t.routes[r],this.t),this.u=this.p(e)}}toString(){const r=Object.keys(this.u).filter(t=>!this.i.parameterSegments.some(({name:r})=>r===t)).filter(t=>"_query"!==t).reduce((r,e)=>t({},r,{[e]:this.u[e]}),{});return this.i.compile(this.u)+function(t,r){var e,n=t,o=function(t){if(!t)return Jt;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var r=t.charset||Jt.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=Ut.default;if(void 0!==t.format){if(!Ct.call(Ut.formatters,t.format))throw new TypeError("Unknown format option provided.");e=t.format}var n=Ut.formatters[e],o=Jt.filter;return("function"==typeof t.filter||Dt(t.filter))&&(o=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:Jt.addQueryPrefix,allowDots:void 0===t.allowDots?Jt.allowDots:!!t.allowDots,charset:r,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:Jt.charsetSentinel,delimiter:void 0===t.delimiter?Jt.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:Jt.encode,encoder:"function"==typeof t.encoder?t.encoder:Jt.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:Jt.encodeValuesOnly,filter:o,format:e,formatter:n,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:Jt.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:Jt.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:Jt.strictNullHandling}}(r);"function"==typeof o.filter?n=(0,o.filter)("",n):Dt(o.filter)&&(e=o.filter);var i=[];if("object"!=typeof n||null===n)return"";var a=_t[r&&r.arrayFormat in _t?r.arrayFormat:r&&"indices"in r?r.indices?"indices":"repeat":"indices"];e||(e=Object.keys(n)),o.sort&&e.sort(o.sort);for(var u=kt(),f=0;f<e.length;++f){var y=e[f];o.skipNulls&&null===n[y]||qt(i,Lt(n[y],y,a,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,u))}var c=i.join(o.delimiter),p=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&(p+="iso-8859-1"===o.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),c.length>0?p+c:""}(t({},r,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(t,r)=>"boolean"==typeof t?Number(t):r(t)})}current(t,r){const e=this.t.absolute?this.l().host+this.l().pathname:this.l().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"),[n,o]=Object.entries(this.t.routes).find(([r,n])=>new tr(t,n,this.t).matchesUrl(e))||[void 0,void 0];if(!t)return n;const i=new RegExp(`^${t.replace(".","\\.").replace("*",".*")}$`).test(n);if([null,void 0].includes(r)||!i)return i;const a=new tr(n,o,this.t);r=this.p(r,a);const u=this.v(o);return!(!Object.values(r).every(t=>!t)||Object.values(u).length)||Object.entries(r).every(([t,r])=>u[t]==r)}l(){var t,r,e,n,o,i;const{host:a="",pathname:u="",search:f=""}="undefined"!=typeof window?window.location:{};return{host:null!=(t=null==(r=this.t.location)?void 0:r.host)?t:a,pathname:null!=(e=null==(n=this.t.location)?void 0:n.pathname)?e:u,search:null!=(o=null==(i=this.t.location)?void 0:i.search)?o:f}}get params(){return this.v(this.t.routes[this.current()])}has(t){return Object.keys(this.t.routes).includes(t)}p(r={},e=this.i){r=["string","number"].includes(typeof r)?[r]:r;const n=e.parameterSegments.filter(({name:t})=>!this.t.defaults[t]);return Array.isArray(r)?r=r.reduce((r,e,o)=>t({},r,n[o]?{[n[o].name]:e}:{[e]:""}),{}):1!==n.length||r[n[0].name]||!r.hasOwnProperty(Object.values(e.bindings)[0])&&!r.hasOwnProperty("id")||(r={[n[0].name]:r}),t({},this.h(e),this.m(r,e))}h(r){return r.parameterSegments.filter(({name:t})=>this.t.defaults[t]).reduce((r,{name:e},n)=>t({},r,{[e]:this.t.defaults[e]}),{})}m(r,{bindings:e,parameterSegments:n}){return Object.entries(r).reduce((r,[o,i])=>{if(!i||"object"!=typeof i||Array.isArray(i)||!n.some(({name:t})=>t===o))return t({},r,{[o]:i});if(!i.hasOwnProperty(e[o])){if(!i.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${o}' parameter is missing route model binding key '${e[o]}'.`);e[o]="id"}return t({},r,{[o]:i[e[o]]})},{})}v(r){var e;let n=this.l().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"");const o=(r,e="",n)=>{const[o,i]=[r,e].map(t=>t.split(n));return i.reduce((r,e,n)=>/^{[^}?]+\??}$/.test(e)&&o[n]?t({},r,{[e.replace(/^{|\??}$/g,"")]:o[n]}):r,{})};return t({},o(this.l().host,r.domain,"."),o(n,r.uri,"/"),function(t,r){var e=Zt;if(""===t||null==t)return e.plainObjects?Object.create(null):{};for(var n="string"==typeof t?function(t,r){var e,n={},o=(r.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(r.delimiter,Infinity===r.parameterLimit?void 0:r.parameterLimit),i=-1,a=r.charset;if(r.charsetSentinel)for(e=0;e<o.length;++e)0===o[e].indexOf("utf8=")&&("utf8=%E2%9C%93"===o[e]?a="utf-8":"utf8=%26%2310003%3B"===o[e]&&(a="iso-8859-1"),i=e,e=o.length);for(e=0;e<o.length;++e)if(e!==i){var u,f,y=o[e],c=y.indexOf("]="),p=-1===c?y.indexOf("="):c+1;-1===p?(u=r.decoder(y,Zt.decoder,a,"key"),f=r.strictNullHandling?null:""):(u=r.decoder(y.slice(0,p),Zt.decoder,a,"key"),f=Tt.maybeMap(Xt(y.slice(p+1),r),function(t){return r.decoder(t,Zt.decoder,a,"value")})),f&&r.interpretNumericEntities&&"iso-8859-1"===a&&(f=Kt(f)),y.indexOf("[]=")>-1&&(f=Qt(f)?[f]:f),n[u]=Ht.call(n,u)?Tt.combine(n[u],f):f}return n}(t,e):t,o=e.plainObjects?Object.create(null):{},i=Object.keys(n),a=0;a<i.length;++a){var u=i[a],f=Yt(u,n[u],e,"string"==typeof t);o=Tt.merge(o,f,e)}return!0===e.allowSparse?o:Tt.compact(o)}(null==(e=this.l().search)?void 0:e.replace(/^\?/,"")))}valueOf(){return this.toString()}check(t){return this.has(t)}}function er(t,r,e,n){const o=new rr(t,r,e,n);return t?o.toString():o}export{er as default};
