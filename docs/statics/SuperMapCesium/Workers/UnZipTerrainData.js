/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
/**
  @license
  when.js - https://github.com/cujojs/when

  MIT License (c) copyright B Cavalier & J Hann

 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 1.7.1
 */

!function(){!function(e){"use strict";e("ThirdParty/when",[],function(){function e(e,n,r,i){return t(e).then(n,r,i)}function t(e){var t,n;return e instanceof r?t=e:s(e)?(n=a(),e.then(function(e){n.resolve(e)},function(e){n.reject(e)},function(e){n.progress(e)}),t=n.promise):t=i(e),t}function n(t){return e(t,o)}function r(e){this.then=e}function i(e){return new r(function(n){try{return t(n?n(e):e)}catch(e){return o(e)}})}function o(e){return new r(function(n,r){try{return r?t(r(e)):o(e)}catch(e){return o(e)}})}function a(){function e(e,t,n){return d(e,t,n)}function n(e){return w(e)}function i(e){return w(o(e))}function s(e){return h(e)}var f,u,c,l,d,h,w;return u=new r(e),f={then:e,resolve:n,reject:i,progress:s,promise:u,resolver:{resolve:n,reject:i,progress:s}},c=[],l=[],d=function(e,t,n){var r,i;return r=a(),i="function"==typeof n?function(e){try{r.progress(n(e))}catch(e){r.progress(e)}}:function(e){r.progress(e)},c.push(function(n){n.then(e,t).then(r.resolve,r.reject,i)}),l.push(i),r.promise},h=function(e){return b(l,e),e},w=function(e){return e=t(e),d=e.then,w=t,h=k,b(c,e),l=c=p,e},f}function s(e){return e&&"function"==typeof e.then}function f(t,n,r,i,o){return m(2,arguments),e(t,function(t){function s(e){b(e)}function f(e){w(e)}var u,c,l,d,h,w,b,m,g,v;if(g=t.length>>>0,u=Math.max(0,Math.min(n,g)),l=[],c=g-u+1,d=[],h=a(),u)for(m=h.progress,b=function(e){d.push(e),--c||(w=b=k,h.reject(d))},w=function(e){l.push(e),--u||(w=b=k,h.resolve(l))},v=0;v<g;++v)v in t&&e(t[v],f,s,m);else h.resolve(l);return h.then(r,i,o)})}function u(e,t,n,r){function i(e){return t?t(e[0]):e[0]}return f(e,1,i,n,r)}function c(e,t,n,r){return m(1,arguments),d(e,g).then(t,n,r)}function l(){return d(arguments,g)}function d(t,n){return e(t,function(t){var r,i,o,s,f,u;if(o=i=t.length>>>0,r=[],u=a(),o)for(s=function(t,i){e(t,n).then(function(e){r[i]=e,--o||u.resolve(r)},u.reject)},f=0;f<i;f++)f in t?s(t[f],f):--o;else u.resolve(r);return u.promise})}function h(t,n){var r=_.call(arguments,1);return e(t,function(t){var i;return i=t.length,r[0]=function(t,r,o){return e(t,function(t){return e(r,function(e){return n(t,e,o,i)})})},v.apply(t,r)})}function w(t,n,r){var i=arguments.length>2;return e(t,function(e){return e=i?r:e,n.resolve(e),e},function(e){return n.reject(e),o(e)},n.progress)}function b(e,t){for(var n,r=0;n=e[r++];)n(t)}function m(e,t){for(var n,r=t.length;r>e;)if(null!=(n=t[--r])&&"function"!=typeof n)throw new Error("arg "+r+" must be a function")}function k(){}function g(e){return e}var v,_,p;return e.defer=a,e.resolve=t,e.reject=n,e.join=l,e.all=c,e.map=d,e.reduce=h,e.any=u,e.some=f,e.chain=w,e.isPromise=s,r.prototype={always:function(e,t){return this.then(e,e,t)},otherwise:function(e){return this.then(p,e)},yield:function(e){return this.then(function(){return e})},spread:function(e){return this.then(function(t){return c(t,function(t){return e.apply(p,t)})})}},_=[].slice,v=[].reduce||function(e){var t,n,r,i,o;if(o=0,t=Object(this),i=t.length>>>0,n=arguments,n.length<=1)for(;;){if(o in t){r=t[o++];break}if(++o>=i)throw new TypeError}else r=n[1];for(;o<i;++o)o in t&&(r=e(r,t[o],o,t));return r},e})}("function"==typeof define&&define.amd?define:function(e){"object"==typeof exports?module.exports=e():this.when=e()}),define("Core/defined",[],function(){"use strict";function e(e){return void 0!==e&&null!==e}return e}),define("Core/freezeObject",["./defined"],function(e){"use strict";var t=Object.freeze;return e(t)||(t=function(e){return e}),t}),define("Core/defaultValue",["./freezeObject"],function(e){"use strict";function t(e,t){return void 0!==e&&null!==e?e:t}return t.EMPTY_OBJECT=e({}),t}),define("Core/formatError",["./defined"],function(e){"use strict";function t(t){var n,r=t.name,i=t.message;n=e(r)&&e(i)?r+": "+i:t.toString();var o=t.stack;return e(o)&&(n+="\n"+o),n}return t}),define("Workers/createTaskProcessorWorker",["../ThirdParty/when","../Core/defaultValue","../Core/defined","../Core/formatError"],function(e,t,n,r){"use strict";function i(t,n,r){try{return t(n,r)}catch(t){return e.reject(t)}}function o(o){var a;return function(s){var f=s.data,u=[],c={id:f.id,result:void 0,error:void 0};return e(i(o,f.parameters,u)).then(function(e){c.result=e}).otherwise(function(e){e instanceof Error?c.error={name:e.name,message:e.message,stack:e.stack}:c.error=e}).always(function(){n(a)||(a=t(self.webkitPostMessage,self.postMessage)),f.canTransferArrayBuffer||(u.length=0);try{a(c,u)}catch(e){c.result=void 0,c.error="postMessage failed with error: "+r(e)+"\n  with responseMessage: "+JSON.stringify(c),a(c)}})}}return o}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define("ThirdParty/pako_inflate",[],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.pako=e()}}(function(){return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var f="function"==typeof require&&require;if(!s&&f)return f(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return i(n||e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)return void e.set(t.subarray(n,n+r),i);for(var o=0;o<r;o++)e[i+o]=t[n+o]},flattenChunks:function(e){var t,n,r,i,o,a;for(r=0,t=0,n=e.length;t<n;t++)r+=e[t].length;for(a=new Uint8Array(r),i=0,t=0,n=e.length;t<n;t++)o=e[t],a.set(o,i),i+=o.length;return a}},o={arraySet:function(e,t,n,r,i){for(var o=0;o<r;o++)e[i+o]=t[n+o]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o))},n.setTyped(r)},{}],2:[function(e,t,n){"use strict";function r(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&o))return String.fromCharCode.apply(null,i.shrinkBuf(e,t));for(var n="",r=0;r<t;r++)n+=String.fromCharCode(e[r]);return n}var i=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch(e){o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){a=!1}for(var s=new i.Buf8(256),f=0;f<256;f++)s[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;s[254]=s[254]=1,n.string2buf=function(e){var t,n,r,o,a,s=e.length,f=0;for(o=0;o<s;o++)n=e.charCodeAt(o),55296==(64512&n)&&o+1<s&&56320==(64512&(r=e.charCodeAt(o+1)))&&(n=65536+(n-55296<<10)+(r-56320),o++),f+=n<128?1:n<2048?2:n<65536?3:4;for(t=new i.Buf8(f),a=0,o=0;a<f;o++)n=e.charCodeAt(o),55296==(64512&n)&&o+1<s&&56320==(64512&(r=e.charCodeAt(o+1)))&&(n=65536+(n-55296<<10)+(r-56320),o++),n<128?t[a++]=n:n<2048?(t[a++]=192|n>>>6,t[a++]=128|63&n):n<65536?(t[a++]=224|n>>>12,t[a++]=128|n>>>6&63,t[a++]=128|63&n):(t[a++]=240|n>>>18,t[a++]=128|n>>>12&63,t[a++]=128|n>>>6&63,t[a++]=128|63&n);return t},n.buf2binstring=function(e){return r(e,e.length)},n.binstring2buf=function(e){for(var t=new i.Buf8(e.length),n=0,r=t.length;n<r;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,i,o,a,f=t||e.length,u=new Array(2*f);for(i=0,n=0;n<f;)if((o=e[n++])<128)u[i++]=o;else if((a=s[o])>4)u[i++]=65533,n+=a-1;else{for(o&=2===a?31:3===a?15:7;a>1&&n<f;)o=o<<6|63&e[n++],a--;a>1?u[i++]=65533:o<65536?u[i++]=o:(o-=65536,u[i++]=55296|o>>10&1023,u[i++]=56320|1023&o)}return r(u,i)},n.utf8border=function(e,t){var n;for(t=t||e.length,t>e.length&&(t=e.length),n=t-1;n>=0&&128==(192&e[n]);)n--;return n<0?t:0===n?t:n+s[e[n]]>t?n:t}},{"./common":1}],3:[function(e,t,n){"use strict";function r(e,t,n,r){for(var i=65535&e|0,o=e>>>16&65535|0,a=0;0!==n;){a=n>2e3?2e3:n,n-=a;do{i=i+t[r++]|0,o=o+i|0}while(--a);i%=65521,o%=65521}return i|o<<16|0}t.exports=r},{}],4:[function(e,t,n){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(e,t,n){"use strict";function r(e,t,n,r){var o=i,a=r+n;e^=-1;for(var s=r;s<a;s++)e=e>>>8^o[255&(e^t[s])];return-1^e}var i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=r},{}],6:[function(e,t,n){"use strict";function r(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}t.exports=r},{}],7:[function(e,t,n){"use strict";t.exports=function(e,t){var n,r,i,o,a,s,f,u,c,l,d,h,w,b,m,k,g,v,_,p,y,x,E,S,B;n=e.state,r=e.next_in,S=e.input,i=r+(e.avail_in-5),o=e.next_out,B=e.output,a=o-(t-e.avail_out),s=o+(e.avail_out-257),f=n.dmax,u=n.wsize,c=n.whave,l=n.wnext,d=n.window,h=n.hold,w=n.bits,b=n.lencode,m=n.distcode,k=(1<<n.lenbits)-1,g=(1<<n.distbits)-1;e:do{w<15&&(h+=S[r++]<<w,w+=8,h+=S[r++]<<w,w+=8),v=b[h&k];t:for(;;){if(_=v>>>24,h>>>=_,w-=_,0===(_=v>>>16&255))B[o++]=65535&v;else{if(!(16&_)){if(0==(64&_)){v=b[(65535&v)+(h&(1<<_)-1)];continue t}if(32&_){n.mode=12;break e}e.msg="invalid literal/length code",n.mode=30;break e}p=65535&v,_&=15,_&&(w<_&&(h+=S[r++]<<w,w+=8),p+=h&(1<<_)-1,h>>>=_,w-=_),w<15&&(h+=S[r++]<<w,w+=8,h+=S[r++]<<w,w+=8),v=m[h&g];n:for(;;){if(_=v>>>24,h>>>=_,w-=_,!(16&(_=v>>>16&255))){if(0==(64&_)){v=m[(65535&v)+(h&(1<<_)-1)];continue n}e.msg="invalid distance code",n.mode=30;break e}if(y=65535&v,_&=15,w<_&&(h+=S[r++]<<w,(w+=8)<_&&(h+=S[r++]<<w,w+=8)),(y+=h&(1<<_)-1)>f){e.msg="invalid distance too far back",n.mode=30;break e}if(h>>>=_,w-=_,_=o-a,y>_){if((_=y-_)>c&&n.sane){e.msg="invalid distance too far back",n.mode=30;break e}if(x=0,E=d,0===l){if(x+=u-_,_<p){p-=_;do{B[o++]=d[x++]}while(--_);x=o-y,E=B}}else if(l<_){if(x+=u+l-_,(_-=l)<p){p-=_;do{B[o++]=d[x++]}while(--_);if(x=0,l<p){_=l,p-=_;do{B[o++]=d[x++]}while(--_);x=o-y,E=B}}}else if(x+=l-_,_<p){p-=_;do{B[o++]=d[x++]}while(--_);x=o-y,E=B}for(;p>2;)B[o++]=E[x++],B[o++]=E[x++],B[o++]=E[x++],p-=3;p&&(B[o++]=E[x++],p>1&&(B[o++]=E[x++]))}else{x=o-y;do{B[o++]=B[x++],B[o++]=B[x++],B[o++]=B[x++],p-=3}while(p>2);p&&(B[o++]=B[x++],p>1&&(B[o++]=B[x++]))}break}}break}}while(r<i&&o<s);p=w>>3,r-=p,w-=p<<3,h&=(1<<w)-1,e.next_in=r,e.next_out=o,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=o<s?s-o+257:257-(o-s),n.hold=h,n.bits=w}},{}],8:[function(e,t,n){"use strict";function r(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function i(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new g.Buf16(320),this.work=new g.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function o(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=j,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new g.Buf32(be),t.distcode=t.distdyn=new g.Buf32(me),t.sane=1,t.back=-1,C):T}function a(e){var t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,o(e)):T}function s(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?T:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,a(e))):T}function f(e,t){var n,r;return e?(r=new i,e.state=r,r.window=null,n=s(e,t),n!==C&&(e.state=null),n):T}function u(e){return f(e,ke)}function c(e){if(ge){var t;for(m=new g.Buf32(512),k=new g.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(y(E,e.lens,0,288,m,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;y(S,e.lens,0,32,k,0,e.work,{bits:5}),ge=!1}e.lencode=m,e.lenbits=9,e.distcode=k,e.distbits=5}function l(e,t,n,r){var i,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new g.Buf8(o.wsize)),r>=o.wsize?(g.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i=o.wsize-o.wnext,i>r&&(i=r),g.arraySet(o.window,t,n-r,i,o.wnext),r-=i,r?(g.arraySet(o.window,t,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}function d(e,t){var n,i,o,a,s,f,u,d,h,w,b,m,k,be,me,ke,ge,ve,_e,pe,ye,xe,Ee,Se,Be=0,Ze=new g.Buf8(4),Ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return T;n=e.state,n.mode===G&&(n.mode=J),s=e.next_out,o=e.output,u=e.avail_out,a=e.next_in,i=e.input,f=e.avail_in,d=n.hold,h=n.bits,w=f,b=u,xe=C;e:for(;;)switch(n.mode){case j:if(0===n.wrap){n.mode=J;break}for(;h<16;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(2&n.wrap&&35615===d){n.check=0,Ze[0]=255&d,Ze[1]=d>>>8&255,n.check=_(n.check,Ze,2,0),d=0,h=0,n.mode=D;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&d)<<8)+(d>>8))%31){e.msg="incorrect header check",n.mode=de;break}if((15&d)!==I){e.msg="unknown compression method",n.mode=de;break}if(d>>>=4,h-=4,ye=8+(15&d),0===n.wbits)n.wbits=ye;else if(ye>n.wbits){e.msg="invalid window size",n.mode=de;break}n.dmax=1<<ye,e.adler=n.check=1,n.mode=512&d?W:G,d=0,h=0;break;case D:for(;h<16;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(n.flags=d,(255&n.flags)!==I){e.msg="unknown compression method",n.mode=de;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=de;break}n.head&&(n.head.text=d>>8&1),512&n.flags&&(Ze[0]=255&d,Ze[1]=d>>>8&255,n.check=_(n.check,Ze,2,0)),d=0,h=0,n.mode=F;case F:for(;h<32;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}n.head&&(n.head.time=d),512&n.flags&&(Ze[0]=255&d,Ze[1]=d>>>8&255,Ze[2]=d>>>16&255,Ze[3]=d>>>24&255,n.check=_(n.check,Ze,4,0)),d=0,h=0,n.mode=L;case L:for(;h<16;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}n.head&&(n.head.xflags=255&d,n.head.os=d>>8),512&n.flags&&(Ze[0]=255&d,Ze[1]=d>>>8&255,n.check=_(n.check,Ze,2,0)),d=0,h=0,n.mode=M;case M:if(1024&n.flags){for(;h<16;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}n.length=d,n.head&&(n.head.extra_len=d),512&n.flags&&(Ze[0]=255&d,Ze[1]=d>>>8&255,n.check=_(n.check,Ze,2,0)),d=0,h=0}else n.head&&(n.head.extra=null);n.mode=H;case H:if(1024&n.flags&&(m=n.length,m>f&&(m=f),m&&(n.head&&(ye=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),g.arraySet(n.head.extra,i,a,m,ye)),512&n.flags&&(n.check=_(n.check,i,m,a)),f-=m,a+=m,n.length-=m),n.length))break e;n.length=0,n.mode=P;case P:if(2048&n.flags){if(0===f)break e;m=0;do{ye=i[a+m++],n.head&&ye&&n.length<65536&&(n.head.name+=String.fromCharCode(ye))}while(ye&&m<f);if(512&n.flags&&(n.check=_(n.check,i,m,a)),f-=m,a+=m,ye)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=K;case K:if(4096&n.flags){if(0===f)break e;m=0;do{ye=i[a+m++],n.head&&ye&&n.length<65536&&(n.head.comment+=String.fromCharCode(ye))}while(ye&&m<f);if(512&n.flags&&(n.check=_(n.check,i,m,a)),f-=m,a+=m,ye)break e}else n.head&&(n.head.comment=null);n.mode=Y;case Y:if(512&n.flags){for(;h<16;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(d!==(65535&n.check)){e.msg="header crc mismatch",n.mode=de;break}d=0,h=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=G;break;case W:for(;h<32;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}e.adler=n.check=r(d),d=0,h=0,n.mode=q;case q:if(0===n.havedict)return e.next_out=s,e.avail_out=u,e.next_in=a,e.avail_in=f,n.hold=d,n.bits=h,O;e.adler=n.check=1,n.mode=G;case G:if(t===Z||t===A)break e;case J:if(n.last){d>>>=7&h,h-=7&h,n.mode=ue;break}for(;h<3;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}switch(n.last=1&d,d>>>=1,h-=1,3&d){case 0:n.mode=V;break;case 1:if(c(n),n.mode=ne,t===A){d>>>=2,h-=2;break e}break;case 2:n.mode=$;break;case 3:e.msg="invalid block type",n.mode=de}d>>>=2,h-=2;break;case V:for(d>>>=7&h,h-=7&h;h<32;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if((65535&d)!=(d>>>16^65535)){e.msg="invalid stored block lengths",n.mode=de;break}if(n.length=65535&d,d=0,h=0,n.mode=X,t===A)break e;case X:n.mode=Q;case Q:if(m=n.length){if(m>f&&(m=f),m>u&&(m=u),0===m)break e;g.arraySet(o,i,a,m,s),f-=m,a+=m,u-=m,s+=m,n.length-=m;break}n.mode=G;break;case $:for(;h<14;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(n.nlen=257+(31&d),d>>>=5,h-=5,n.ndist=1+(31&d),d>>>=5,h-=5,n.ncode=4+(15&d),d>>>=4,h-=4,n.nlen>286||n.ndist>30){e.msg="too many length or distance symbols",n.mode=de;break}n.have=0,n.mode=ee;case ee:for(;n.have<n.ncode;){for(;h<3;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}n.lens[Ae[n.have++]]=7&d,d>>>=3,h-=3}for(;n.have<19;)n.lens[Ae[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,Ee={bits:n.lenbits},xe=y(x,n.lens,0,19,n.lencode,0,n.work,Ee),n.lenbits=Ee.bits,xe){e.msg="invalid code lengths set",n.mode=de;break}n.have=0,n.mode=te;case te:for(;n.have<n.nlen+n.ndist;){for(;Be=n.lencode[d&(1<<n.lenbits)-1],me=Be>>>24,ke=Be>>>16&255,ge=65535&Be,!(me<=h);){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(ge<16)d>>>=me,h-=me,n.lens[n.have++]=ge;else{if(16===ge){for(Se=me+2;h<Se;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(d>>>=me,h-=me,0===n.have){e.msg="invalid bit length repeat",n.mode=de;break}ye=n.lens[n.have-1],m=3+(3&d),d>>>=2,h-=2}else if(17===ge){for(Se=me+3;h<Se;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}d>>>=me,h-=me,ye=0,m=3+(7&d),d>>>=3,h-=3}else{for(Se=me+7;h<Se;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}d>>>=me,h-=me,ye=0,m=11+(127&d),d>>>=7,h-=7}if(n.have+m>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=de;break}for(;m--;)n.lens[n.have++]=ye}}if(n.mode===de)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=de;break}if(n.lenbits=9,Ee={bits:n.lenbits},xe=y(E,n.lens,0,n.nlen,n.lencode,0,n.work,Ee),n.lenbits=Ee.bits,xe){e.msg="invalid literal/lengths set",n.mode=de;break}if(n.distbits=6,n.distcode=n.distdyn,Ee={bits:n.distbits},xe=y(S,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,Ee),n.distbits=Ee.bits,xe){e.msg="invalid distances set",n.mode=de;break}if(n.mode=ne,t===A)break e;case ne:n.mode=re;case re:if(f>=6&&u>=258){e.next_out=s,e.avail_out=u,e.next_in=a,e.avail_in=f,n.hold=d,n.bits=h,p(e,b),s=e.next_out,o=e.output,u=e.avail_out,a=e.next_in,i=e.input,f=e.avail_in,d=n.hold,h=n.bits,n.mode===G&&(n.back=-1);break}for(n.back=0;Be=n.lencode[d&(1<<n.lenbits)-1],me=Be>>>24,ke=Be>>>16&255,ge=65535&Be,!(me<=h);){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(ke&&0==(240&ke)){for(ve=me,_e=ke,pe=ge;Be=n.lencode[pe+((d&(1<<ve+_e)-1)>>ve)],me=Be>>>24,ke=Be>>>16&255,ge=65535&Be,!(ve+me<=h);){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}d>>>=ve,h-=ve,n.back+=ve}if(d>>>=me,h-=me,n.back+=me,n.length=ge,0===ke){n.mode=fe;break}if(32&ke){n.back=-1,n.mode=G;break}if(64&ke){e.msg="invalid literal/length code",n.mode=de;break}n.extra=15&ke,n.mode=ie;case ie:if(n.extra){for(Se=n.extra;h<Se;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}n.length+=d&(1<<n.extra)-1,d>>>=n.extra,h-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=oe;case oe:for(;Be=n.distcode[d&(1<<n.distbits)-1],me=Be>>>24,ke=Be>>>16&255,ge=65535&Be,!(me<=h);){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(0==(240&ke)){for(ve=me,_e=ke,pe=ge;Be=n.distcode[pe+((d&(1<<ve+_e)-1)>>ve)],me=Be>>>24,ke=Be>>>16&255,ge=65535&Be,!(ve+me<=h);){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}d>>>=ve,h-=ve,n.back+=ve}if(d>>>=me,h-=me,n.back+=me,64&ke){e.msg="invalid distance code",n.mode=de;break}n.offset=ge,n.extra=15&ke,n.mode=ae;case ae:if(n.extra){for(Se=n.extra;h<Se;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}n.offset+=d&(1<<n.extra)-1,d>>>=n.extra,h-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=de;break}n.mode=se;case se:if(0===u)break e;if(m=b-u,n.offset>m){if((m=n.offset-m)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=de;break}m>n.wnext?(m-=n.wnext,k=n.wsize-m):k=n.wnext-m,m>n.length&&(m=n.length),be=n.window}else be=o,k=s-n.offset,m=n.length;m>u&&(m=u),u-=m,n.length-=m;do{o[s++]=be[k++]}while(--m);0===n.length&&(n.mode=re);break;case fe:if(0===u)break e;o[s++]=n.length,u--,n.mode=re;break;case ue:if(n.wrap){for(;h<32;){if(0===f)break e;f--,d|=i[a++]<<h,h+=8}if(b-=u,e.total_out+=b,n.total+=b,b&&(e.adler=n.check=n.flags?_(n.check,o,b,s-b):v(n.check,o,b,s-b)),b=u,(n.flags?d:r(d))!==n.check){e.msg="incorrect data check",n.mode=de;break}d=0,h=0}n.mode=ce;case ce:if(n.wrap&&n.flags){for(;h<32;){if(0===f)break e;f--,d+=i[a++]<<h,h+=8}if(d!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=de;break}d=0,h=0}n.mode=le;case le:xe=z;break e;case de:xe=N;break e;case he:return R;case we:default:return T}return e.next_out=s,e.avail_out=u,e.next_in=a,e.avail_in=f,n.hold=d,n.bits=h,(n.wsize||b!==e.avail_out&&n.mode<de&&(n.mode<ue||t!==B))&&l(e,e.output,e.next_out,b-e.avail_out)?(n.mode=he,R):(w-=e.avail_in,b-=e.avail_out,e.total_in+=w,e.total_out+=b,n.total+=b,n.wrap&&b&&(e.adler=n.check=n.flags?_(n.check,o,b,e.next_out-b):v(n.check,o,b,e.next_out-b)),e.data_type=n.bits+(n.last?64:0)+(n.mode===G?128:0)+(n.mode===ne||n.mode===X?256:0),(0===w&&0===b||t===B)&&xe===C&&(xe=U),xe)}function h(e){if(!e||!e.state)return T;var t=e.state;return t.window&&(t.window=null),e.state=null,C}function w(e,t){var n;return e&&e.state?(n=e.state,0==(2&n.wrap)?T:(n.head=t,t.done=!1,C)):T}function b(e,t){var n,r,i=t.length;return e&&e.state?(n=e.state,0!==n.wrap&&n.mode!==q?T:n.mode===q&&(r=1,(r=v(r,t,i,0))!==n.check)?N:l(e,t,i,i)?(n.mode=he,R):(n.havedict=1,C)):T}var m,k,g=e("../utils/common"),v=e("./adler32"),_=e("./crc32"),p=e("./inffast"),y=e("./inftrees"),x=0,E=1,S=2,B=4,Z=5,A=6,C=0,z=1,O=2,T=-2,N=-3,R=-4,U=-5,I=8,j=1,D=2,F=3,L=4,M=5,H=6,P=7,K=8,Y=9,W=10,q=11,G=12,J=13,V=14,X=15,Q=16,$=17,ee=18,te=19,ne=20,re=21,ie=22,oe=23,ae=24,se=25,fe=26,ue=27,ce=28,le=29,de=30,he=31,we=32,be=852,me=592,ke=15,ge=!0;n.inflateReset=a,n.inflateReset2=s,n.inflateResetKeep=o,n.inflateInit=u,n.inflateInit2=f,n.inflate=d,n.inflateEnd=h,n.inflateGetHeader=w,n.inflateSetDictionary=b,n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(e,t,n){"use strict";var r=e("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,f,u,c,l,d){var h,w,b,m,k,g,v,_,p,y=d.bits,x=0,E=0,S=0,B=0,Z=0,A=0,C=0,z=0,O=0,T=0,N=null,R=0,U=new r.Buf16(16),I=new r.Buf16(16),j=null,D=0;for(x=0;x<=15;x++)U[x]=0;for(E=0;E<f;E++)U[t[n+E]]++;for(Z=y,B=15;B>=1&&0===U[B];B--);if(Z>B&&(Z=B),0===B)return u[c++]=20971520,u[c++]=20971520,d.bits=1,0;for(S=1;S<B&&0===U[S];S++);for(Z<S&&(Z=S),z=1,x=1;x<=15;x++)if(z<<=1,(z-=U[x])<0)return-1;if(z>0&&(0===e||1!==B))return-1;for(I[1]=0,x=1;x<15;x++)I[x+1]=I[x]+U[x];for(E=0;E<f;E++)0!==t[n+E]&&(l[I[t[n+E]]++]=E);if(0===e?(N=j=l,g=19):1===e?(N=i,R-=257,j=o,D-=257,g=256):(N=a,j=s,g=-1),T=0,E=0,x=S,k=c,A=Z,C=0,b=-1,O=1<<Z,m=O-1,1===e&&O>852||2===e&&O>592)return 1;for(;;){v=x-C,l[E]<g?(_=0,p=l[E]):l[E]>g?(_=j[D+l[E]],p=N[R+l[E]]):(_=96,p=0),h=1<<x-C,w=1<<A,S=w;do{w-=h,u[k+(T>>C)+w]=v<<24|_<<16|p|0}while(0!==w);for(h=1<<x-1;T&h;)h>>=1;if(0!==h?(T&=h-1,T+=h):T=0,E++,0==--U[x]){if(x===B)break;x=t[n+l[E]]}if(x>Z&&(T&m)!==b){for(0===C&&(C=Z),k+=S,A=x-C,z=1<<A;A+C<B&&!((z-=U[A+C])<=0);)A++,z<<=1;if(O+=1<<A,1===e&&O>852||2===e&&O>592)return 1;b=T&m,u[b]=Z<<24|A<<16|k-c|0}}return 0!==T&&(u[k+T]=x-C<<24|64<<16|0),d.bits=Z,0}},{"../utils/common":1}],10:[function(e,t,n){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],11:[function(e,t,n){"use strict";function r(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=r},{}],"/lib/inflate.js":[function(e,t,n){"use strict";function r(e){if(!(this instanceof r))return new r(e);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var n=a.inflateInit2(this.strm,t.windowBits);if(n!==u.Z_OK)throw new Error(c[n]);this.header=new d,a.inflateGetHeader(this.strm,this.header)}function i(e,t){var n=new r(t);if(n.push(e,!0),n.err)throw n.msg||c[n.err];return n.result}function o(e,t){return t=t||{},t.raw=!0,i(e,t)}var a=e("./zlib/inflate"),s=e("./utils/common"),f=e("./utils/strings"),u=e("./zlib/constants"),c=e("./zlib/messages"),l=e("./zlib/zstream"),d=e("./zlib/gzheader"),h=Object.prototype.toString;r.prototype.push=function(e,t){var n,r,i,o,c,l,d=this.strm,w=this.options.chunkSize,b=this.options.dictionary,m=!1;if(this.ended)return!1;r=t===~~t?t:!0===t?u.Z_FINISH:u.Z_NO_FLUSH,"string"==typeof e?d.input=f.binstring2buf(e):"[object ArrayBuffer]"===h.call(e)?d.input=new Uint8Array(e):d.input=e,d.next_in=0,d.avail_in=d.input.length;do{if(0===d.avail_out&&(d.output=new s.Buf8(w),d.next_out=0,d.avail_out=w),n=a.inflate(d,u.Z_NO_FLUSH),n===u.Z_NEED_DICT&&b&&(l="string"==typeof b?f.string2buf(b):"[object ArrayBuffer]"===h.call(b)?new Uint8Array(b):b,n=a.inflateSetDictionary(this.strm,l)),n===u.Z_BUF_ERROR&&!0===m&&(n=u.Z_OK,m=!1),n!==u.Z_STREAM_END&&n!==u.Z_OK)return this.onEnd(n),this.ended=!0,!1;d.next_out&&(0!==d.avail_out&&n!==u.Z_STREAM_END&&(0!==d.avail_in||r!==u.Z_FINISH&&r!==u.Z_SYNC_FLUSH)||("string"===this.options.to?(i=f.utf8border(d.output,d.next_out),o=d.next_out-i,c=f.buf2string(d.output,i),d.next_out=o,d.avail_out=w-o,o&&s.arraySet(d.output,d.output,i,o,0),this.onData(c)):this.onData(s.shrinkBuf(d.output,d.next_out)))),0===d.avail_in&&0===d.avail_out&&(m=!0)}while((d.avail_in>0||0===d.avail_out)&&n!==u.Z_STREAM_END);return n===u.Z_STREAM_END&&(r=u.Z_FINISH),r===u.Z_FINISH?(n=a.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===u.Z_OK):r!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),d.avail_out=0,!0)},r.prototype.onData=function(e){this.chunks.push(e)},r.prototype.onEnd=function(e){e===u.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=r,n.inflate=i,n.inflateRaw=o,n.ungzip=i},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js")}),define("Workers/UnZipTerrainData",["./createTaskProcessorWorker","../ThirdParty/pako_inflate"],function(e,t){"use strict";function n(e,n){var r=e.data,i=new Uint8Array(r),o=t.inflate(i).buffer;return n.push(o),{data:new Uint8Array(o)}}return e(n)})}();