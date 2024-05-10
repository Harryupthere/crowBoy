(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{98099:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(97117);function i(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function a(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function o(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function l(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function c(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),u(e/4294967296>>>0,t,r),u(e>>>0,t,r+4),t}function f(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),d(e>>>0,t,r),d(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=i,t.writeInt16BE=i,t.writeUint16LE=a,t.writeInt16LE=a,t.readInt32BE=o,t.readUint32BE=s,t.readInt32LE=l,t.readUint32LE=c,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=d,t.writeInt32LE=d,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=o(e,t),n=o(e,t+4);return 4294967296*r+n-(n>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r-(r>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=c(e,t);return 4294967296*c(e,t+4)+r},t.writeUint64BE=h,t.writeInt64BE=h,t.writeUint64LE=f,t.writeInt64LE=f,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var n=0,i=1,a=e/8+r-1;a>=r;a--)n+=t[a]*i,i*=256;return n},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var n=0,i=1,a=r;a<r+e/8;a++)n+=t[a]*i,i*=256;return n},t.writeUintBE=function(e,t,r,i){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var a=1,o=e/8+i-1;o>=i;o--)r[o]=t/a&255,a*=256;return r},t.writeUintLE=function(e,t,r,i){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var a=1,o=i;o<i+e/8;o++)r[o]=t/a&255,a*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},25439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(98099),i=r(17309);function a(e,t,r,a,o){if(void 0===o&&(o=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(a.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===o){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,l=o}for(var s,l,c=new Uint8Array(64),u=0;u<r.length;u+=64){!function(e,t,r){for(var i=r[3]<<24|r[2]<<16|r[1]<<8|r[0],a=r[7]<<24|r[6]<<16|r[5]<<8|r[4],o=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],l=r[19]<<24|r[18]<<16|r[17]<<8|r[16],c=r[23]<<24|r[22]<<16|r[21]<<8|r[20],u=r[27]<<24|r[26]<<16|r[25]<<8|r[24],d=r[31]<<24|r[30]<<16|r[29]<<8|r[28],h=t[3]<<24|t[2]<<16|t[1]<<8|t[0],f=t[7]<<24|t[6]<<16|t[5]<<8|t[4],p=t[11]<<24|t[10]<<16|t[9]<<8|t[8],m=t[15]<<24|t[14]<<16|t[13]<<8|t[12],g=1634760805,b=857760878,w=2036477234,v=1797285236,y=i,x=a,C=o,E=s,_=l,k=c,S=u,A=d,O=h,P=f,I=p,T=m,$=0;$<20;$+=2)O^=g=g+y|0,y^=_=_+(O=O>>>16|O<<16)|0,y=y>>>20|y<<12,P^=b=b+x|0,x^=k=k+(P=P>>>16|P<<16)|0,x=x>>>20|x<<12,I^=w=w+C|0,C^=S=S+(I=I>>>16|I<<16)|0,C=C>>>20|C<<12,T^=v=v+E|0,E^=A=A+(T=T>>>16|T<<16)|0,E=E>>>20|E<<12,I^=w=w+C|0,C^=S=S+(I=I>>>24|I<<8)|0,C=C>>>25|C<<7,T^=v=v+E|0,E^=A=A+(T=T>>>24|T<<8)|0,E=E>>>25|E<<7,P^=b=b+x|0,x^=k=k+(P=P>>>24|P<<8)|0,x=x>>>25|x<<7,O^=g=g+y|0,y^=_=_+(O=O>>>24|O<<8)|0,y=y>>>25|y<<7,T^=g=g+x|0,x^=S=S+(T=T>>>16|T<<16)|0,x=x>>>20|x<<12,O^=b=b+C|0,C^=A=A+(O=O>>>16|O<<16)|0,C=C>>>20|C<<12,P^=w=w+E|0,E^=_=_+(P=P>>>16|P<<16)|0,E=E>>>20|E<<12,I^=v=v+y|0,y^=k=k+(I=I>>>16|I<<16)|0,y=y>>>20|y<<12,P^=w=w+E|0,E^=_=_+(P=P>>>24|P<<8)|0,E=E>>>25|E<<7,I^=v=v+y|0,y^=k=k+(I=I>>>24|I<<8)|0,y=y>>>25|y<<7,O^=b=b+C|0,C^=A=A+(O=O>>>24|O<<8)|0,C=C>>>25|C<<7,T^=g=g+x|0,x^=S=S+(T=T>>>24|T<<8)|0,x=x>>>25|x<<7;n.writeUint32LE(g+1634760805|0,e,0),n.writeUint32LE(b+857760878|0,e,4),n.writeUint32LE(w+2036477234|0,e,8),n.writeUint32LE(v+1797285236|0,e,12),n.writeUint32LE(y+i|0,e,16),n.writeUint32LE(x+a|0,e,20),n.writeUint32LE(C+o|0,e,24),n.writeUint32LE(E+s|0,e,28),n.writeUint32LE(_+l|0,e,32),n.writeUint32LE(k+c|0,e,36),n.writeUint32LE(S+u|0,e,40),n.writeUint32LE(A+d|0,e,44),n.writeUint32LE(O+h|0,e,48),n.writeUint32LE(P+f|0,e,52),n.writeUint32LE(I+p|0,e,56),n.writeUint32LE(T+m|0,e,60)}(c,s,e);for(var d=u;d<u+64&&d<r.length;d++)a[d]=r[d]^c[d-u];!function(e,t,r){for(var n=1;r--;)n=n+(255&e[t])|0,e[t]=255&n,n>>>=8,t++;if(n>0)throw Error("ChaCha: counter overflow")}(s,0,l)}return i.wipe(c),0===o&&i.wipe(s),a}t.streamXOR=a,t.stream=function(e,t,r,n){return void 0===n&&(n=0),i.wipe(r),a(e,t,r,r,n)}},15501:function(e,t,r){"use strict";var n=r(25439),i=r(63027),a=r(17309),o=r(98099),s=r(4153);t.Cv=32,t.WH=12,t.pg=16;var l=new Uint8Array(16),c=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,i){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var o,s=new Uint8Array(16);s.set(e,s.length-e.length);var l=new Uint8Array(32);n.stream(this._key,s,l,4);var c=t.length+this.tagLength;if(i){if(i.length!==c)throw Error("ChaCha20Poly1305: incorrect destination length");o=i}else o=new Uint8Array(c);return n.streamXOR(this._key,s,t,o,4),this._authenticate(o.subarray(o.length-this.tagLength,o.length),l,o.subarray(0,o.length-this.tagLength),r),a.wipe(s),o},e.prototype.open=function(e,t,r,i){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var o,l=new Uint8Array(16);l.set(e,l.length-e.length);var c=new Uint8Array(32);n.stream(this._key,l,c,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,c,t.subarray(0,t.length-this.tagLength),r),!s.equal(u,t.subarray(t.length-this.tagLength,t.length)))return null;var d=t.length-this.tagLength;if(i){if(i.length!==d)throw Error("ChaCha20Poly1305: incorrect destination length");o=i}else o=new Uint8Array(d);return n.streamXOR(this._key,l,t.subarray(0,t.length-this.tagLength),o,4),a.wipe(l),o},e.prototype.clean=function(){return a.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,n){var s=new i.Poly1305(t);n&&(s.update(n),n.length%16>0&&s.update(l.subarray(n.length%16))),s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16));var c=new Uint8Array(8);n&&o.writeUint64LE(n.length,c),s.update(c),o.writeUint64LE(r.length,c),s.update(c);for(var u=s.digest(),d=0;d<u.length;d++)e[d]=u[d];s.clean(),a.wipe(u),a.wipe(c)},e}();t.OK=c},4153:function(e,t){"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,n=0;n<e.length;n++)r|=e[n]^t[n];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},79984:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},512:function(e,t,r){"use strict";var n=r(25629),i=r(17309),a=function(){function e(e,t,r,i){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var a=n.hmac(this._hash,r,t);this._hmac=new n.HMAC(e,a),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),i.wipe(this._buffer),i.wipe(this._counter),this._bufpos=0},e}();t.t=a},25629:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(79984),i=r(4153),a=r(17309),o=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),n.isSerializableHash(this._inner)&&n.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),a.wipe(r)}return e.prototype.reset=function(){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){n.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),n.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?this._outer.finish(e):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!n.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!n.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=o,t.hmac=function(e,t,r){var n=new o(e,t);n.update(r);var i=n.digest();return n.clean(),i},t.equal=i.equal},97117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,n=65535&t;return r*n+((e>>>16&65535)*n+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},63027:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4153),i=r(17309);t.DIGEST_LENGTH=16;var a=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var n=e[2]|e[3]<<8;this._r[1]=(r>>>13|n<<3)&8191;var i=e[4]|e[5]<<8;this._r[2]=(n>>>10|i<<6)&7939;var a=e[6]|e[7]<<8;this._r[3]=(i>>>7|a<<9)&8191;var o=e[8]|e[9]<<8;this._r[4]=(a>>>4|o<<12)&255,this._r[5]=o>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(o>>>14|s<<2)&8191;var l=e[12]|e[13]<<8;this._r[7]=(s>>>11|l<<5)&8065;var c=e[14]|e[15]<<8;this._r[8]=(l>>>8|c<<8)&8191,this._r[9]=c>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var n=this._fin?0:2048,i=this._h[0],a=this._h[1],o=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],d=this._h[7],h=this._h[8],f=this._h[9],p=this._r[0],m=this._r[1],g=this._r[2],b=this._r[3],w=this._r[4],v=this._r[5],y=this._r[6],x=this._r[7],C=this._r[8],E=this._r[9];r>=16;){var _,k=e[t+0]|e[t+1]<<8;i+=8191&k;var S=e[t+2]|e[t+3]<<8;a+=(k>>>13|S<<3)&8191;var A=e[t+4]|e[t+5]<<8;o+=(S>>>10|A<<6)&8191;var O=e[t+6]|e[t+7]<<8;s+=(A>>>7|O<<9)&8191;var P=e[t+8]|e[t+9]<<8;l+=(O>>>4|P<<12)&8191,c+=P>>>1&8191;var I=e[t+10]|e[t+11]<<8;u+=(P>>>14|I<<2)&8191;var T=e[t+12]|e[t+13]<<8;d+=(I>>>11|T<<5)&8191;var $=e[t+14]|e[t+15]<<8;h+=(T>>>8|$<<8)&8191,f+=$>>>5|n;var R=0;R=(_=0+i*p+5*E*a+5*C*o+5*x*s+5*y*l)>>>13,_&=8191,_+=5*v*c+5*w*u+5*b*d+5*g*h+5*m*f,R+=_>>>13,_&=8191;var D=R;D+=i*m+a*p+5*E*o+5*C*s+5*x*l,R=D>>>13,D&=8191,D+=5*y*c+5*v*u+5*w*d+5*b*h+5*g*f,R+=D>>>13,D&=8191;var N=R;N+=i*g+a*m+o*p+5*E*s+5*C*l,R=N>>>13,N&=8191,N+=5*x*c+5*y*u+5*v*d+5*w*h+5*b*f,R+=N>>>13,N&=8191;var j=R;j+=i*b+a*g+o*m+s*p+5*E*l,R=j>>>13,j&=8191,j+=5*C*c+5*x*u+5*y*d+5*v*h+5*w*f,R+=j>>>13,j&=8191;var M=R;M+=i*w+a*b+o*g+s*m+l*p,R=M>>>13,M&=8191,M+=5*E*c+5*C*u+5*x*d+5*y*h+5*v*f,R+=M>>>13,M&=8191;var U=R;U+=i*v+a*w+o*b+s*g+l*m,R=U>>>13,U&=8191,U+=c*p+5*E*u+5*C*d+5*x*h+5*y*f,R+=U>>>13,U&=8191;var L=R;L+=i*y+a*v+o*w+s*b+l*g,R=L>>>13,L&=8191,L+=c*m+u*p+5*E*d+5*C*h+5*x*f,R+=L>>>13,L&=8191;var B=R;B+=i*x+a*y+o*v+s*w+l*b,R=B>>>13,B&=8191,B+=c*g+u*m+d*p+5*E*h+5*C*f,R+=B>>>13,B&=8191;var z=R;z+=i*C+a*x+o*y+s*v+l*w,R=z>>>13,z&=8191,z+=c*b+u*g+d*m+h*p+5*E*f,R+=z>>>13,z&=8191;var F=R;F+=i*E+a*C+o*x+s*y+l*v,R=F>>>13,F&=8191,F+=c*w+u*b+d*g+h*m+f*p,R+=F>>>13,F&=8191,_=8191&(R=(R=(R<<2)+R|0)+_|0),R>>>=13,D+=R,i=_,a=D,o=N,s=j,l=M,c=U,u=L,d=B,h=z,f=F,t+=16,r-=16}this._h[0]=i,this._h[1]=a,this._h[2]=o,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=d,this._h[8]=h,this._h[9]=f},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,n,i,a,o=new Uint16Array(10);if(this._leftover){for(a=this._leftover,this._buffer[a++]=1;a<16;a++)this._buffer[a]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,a=2;a<10;a++)this._h[a]+=r,r=this._h[a]>>>13,this._h[a]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,o[0]=this._h[0]+5,r=o[0]>>>13,o[0]&=8191,a=1;a<10;a++)o[a]=this._h[a]+r,r=o[a]>>>13,o[a]&=8191;for(o[9]-=8192,n=(1^r)-1,a=0;a<10;a++)o[a]&=n;for(a=0,n=~n;a<10;a++)this._h[a]=this._h[a]&n|o[a];for(a=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,i=this._h[0]+this._pad[0],this._h[0]=65535&i;a<8;a++)i=(this._h[a]+this._pad[a]|0)+(i>>>16)|0,this._h[a]=65535&i;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,n=e.length;if(this._leftover){(t=16-this._leftover)>n&&(t=n);for(var i=0;i<t;i++)this._buffer[this._leftover+i]=e[r+i];if(n-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(n>=16&&(t=n-n%16,this._blocks(e,r,t),r+=t,n-=t),n){for(var i=0;i<n;i++)this._buffer[this._leftover+i]=e[r+i];this._leftover+=n}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return i.wipe(this._buffer),i.wipe(this._r),i.wipe(this._h),i.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=a,t.oneTimeAuth=function(e,t){var r=new a(e);r.update(t);var n=r.digest();return r.clean(),n},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&n.equal(e,r)}},31416:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let n=r(46008),i=r(98099),a=r(17309);function o(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new n.SystemRandomSource,t.randomBytes=o,t.randomUint32=function(e=t.defaultRandomSource){let r=o(4,e),n=(0,i.readUint32LE)(r);return(0,a.wipe)(r),n};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function l(e,r=s,n=t.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let i="",l=r.length,c=256-256%l;for(;e>0;){let t=o(Math.ceil(256*e/c),n);for(let n=0;n<t.length&&e>0;n++){let a=t[n];a<c&&(i+=r.charAt(a%l),e--)}(0,a.wipe)(t)}return i}t.randomString=l,t.randomStringForEntropy=function(e,r=s,n=t.defaultRandomSource){return l(Math.ceil(e/(Math.log(r.length)/Math.LN2)),r,n)}},75455:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0;class r{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}t.BrowserRandomSource=r},58871:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let n=r(17309);class i{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=r(35883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,n.wipe)(t),r}}t.NodeRandomSource=i},46008:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let n=r(75455),i=r(58871);class a{constructor(){if(this.isAvailable=!1,this.name="",this._source=new n.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new i.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}t.SystemRandomSource=a},73294:function(e,t,r){"use strict";var n=r(98099),i=r(17309);t.k=32,t.cn=64;var a=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){i.wipe(this._buffer),i.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,i=t%64<56?64:128;this._buffer[r]=128;for(var a=r+1;a<i-8;a++)this._buffer[a]=0;n.writeUint32BE(t/536870912|0,this._buffer,i-8),n.writeUint32BE(t<<3,this._buffer,i-4),s(this._temp,this._state,this._buffer,0,i),this._finished=!0}for(var a=0;a<this.digestLength/4;a++)n.writeUint32BE(this._state[a],e,4*a);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){i.wipe(e.state),e.buffer&&i.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=a;var o=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,i,a){for(;a>=64;){for(var s=t[0],l=t[1],c=t[2],u=t[3],d=t[4],h=t[5],f=t[6],p=t[7],m=0;m<16;m++){var g=i+4*m;e[m]=n.readUint32BE(r,g)}for(var m=16;m<64;m++){var b=e[m-2],w=(b>>>17|b<<15)^(b>>>19|b<<13)^b>>>10,v=((b=e[m-15])>>>7|b<<25)^(b>>>18|b<<14)^b>>>3;e[m]=(w+e[m-7]|0)+(v+e[m-16]|0)}for(var m=0;m<64;m++){var w=(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&h^~d&f)|0)+(p+(o[m]+e[m]|0)|0)|0,v=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;p=f,f=h,h=d,d=u+w|0,u=c,c=l,l=s,s=w+v|0}t[0]+=s,t[1]+=l,t[2]+=c,t[3]+=u,t[4]+=d,t[5]+=h,t[6]+=f,t[7]+=p,i+=64,a-=64}return i}t.vp=function(e){var t=new a;t.update(e);var r=t.digest();return t.clean(),r}},17309:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},57664:function(e,t,r){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let n=r(31416),i=r(17309);function a(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;let o=new Uint8Array(32);o[0]=9;let s=a([56129,1]);function l(e){let t=1;for(let r=0;r<16;r++){let n=e[r]+t+65535;t=Math.floor(n/65536),e[r]=n-65536*t}e[0]+=t-1+37*(t-1)}function c(e,t,r){let n=~(r-1);for(let r=0;r<16;r++){let i=n&(e[r]^t[r]);e[r]^=i,t[r]^=i}}function u(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]+r[n]}function d(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]-r[n]}function h(e,t,r){let n,i,a=0,o=0,s=0,l=0,c=0,u=0,d=0,h=0,f=0,p=0,m=0,g=0,b=0,w=0,v=0,y=0,x=0,C=0,E=0,_=0,k=0,S=0,A=0,O=0,P=0,I=0,T=0,$=0,R=0,D=0,N=0,j=r[0],M=r[1],U=r[2],L=r[3],B=r[4],z=r[5],F=r[6],W=r[7],H=r[8],q=r[9],Z=r[10],G=r[11],V=r[12],K=r[13],Y=r[14],X=r[15];a+=(n=t[0])*j,o+=n*M,s+=n*U,l+=n*L,c+=n*B,u+=n*z,d+=n*F,h+=n*W,f+=n*H,p+=n*q,m+=n*Z,g+=n*G,b+=n*V,w+=n*K,v+=n*Y,y+=n*X,o+=(n=t[1])*j,s+=n*M,l+=n*U,c+=n*L,u+=n*B,d+=n*z,h+=n*F,f+=n*W,p+=n*H,m+=n*q,g+=n*Z,b+=n*G,w+=n*V,v+=n*K,y+=n*Y,x+=n*X,s+=(n=t[2])*j,l+=n*M,c+=n*U,u+=n*L,d+=n*B,h+=n*z,f+=n*F,p+=n*W,m+=n*H,g+=n*q,b+=n*Z,w+=n*G,v+=n*V,y+=n*K,x+=n*Y,C+=n*X,l+=(n=t[3])*j,c+=n*M,u+=n*U,d+=n*L,h+=n*B,f+=n*z,p+=n*F,m+=n*W,g+=n*H,b+=n*q,w+=n*Z,v+=n*G,y+=n*V,x+=n*K,C+=n*Y,E+=n*X,c+=(n=t[4])*j,u+=n*M,d+=n*U,h+=n*L,f+=n*B,p+=n*z,m+=n*F,g+=n*W,b+=n*H,w+=n*q,v+=n*Z,y+=n*G,x+=n*V,C+=n*K,E+=n*Y,_+=n*X,u+=(n=t[5])*j,d+=n*M,h+=n*U,f+=n*L,p+=n*B,m+=n*z,g+=n*F,b+=n*W,w+=n*H,v+=n*q,y+=n*Z,x+=n*G,C+=n*V,E+=n*K,_+=n*Y,k+=n*X,d+=(n=t[6])*j,h+=n*M,f+=n*U,p+=n*L,m+=n*B,g+=n*z,b+=n*F,w+=n*W,v+=n*H,y+=n*q,x+=n*Z,C+=n*G,E+=n*V,_+=n*K,k+=n*Y,S+=n*X,h+=(n=t[7])*j,f+=n*M,p+=n*U,m+=n*L,g+=n*B,b+=n*z,w+=n*F,v+=n*W,y+=n*H,x+=n*q,C+=n*Z,E+=n*G,_+=n*V,k+=n*K,S+=n*Y,A+=n*X,f+=(n=t[8])*j,p+=n*M,m+=n*U,g+=n*L,b+=n*B,w+=n*z,v+=n*F,y+=n*W,x+=n*H,C+=n*q,E+=n*Z,_+=n*G,k+=n*V,S+=n*K,A+=n*Y,O+=n*X,p+=(n=t[9])*j,m+=n*M,g+=n*U,b+=n*L,w+=n*B,v+=n*z,y+=n*F,x+=n*W,C+=n*H,E+=n*q,_+=n*Z,k+=n*G,S+=n*V,A+=n*K,O+=n*Y,P+=n*X,m+=(n=t[10])*j,g+=n*M,b+=n*U,w+=n*L,v+=n*B,y+=n*z,x+=n*F,C+=n*W,E+=n*H,_+=n*q,k+=n*Z,S+=n*G,A+=n*V,O+=n*K,P+=n*Y,I+=n*X,g+=(n=t[11])*j,b+=n*M,w+=n*U,v+=n*L,y+=n*B,x+=n*z,C+=n*F,E+=n*W,_+=n*H,k+=n*q,S+=n*Z,A+=n*G,O+=n*V,P+=n*K,I+=n*Y,T+=n*X,b+=(n=t[12])*j,w+=n*M,v+=n*U,y+=n*L,x+=n*B,C+=n*z,E+=n*F,_+=n*W,k+=n*H,S+=n*q,A+=n*Z,O+=n*G,P+=n*V,I+=n*K,T+=n*Y,$+=n*X,w+=(n=t[13])*j,v+=n*M,y+=n*U,x+=n*L,C+=n*B,E+=n*z,_+=n*F,k+=n*W,S+=n*H,A+=n*q,O+=n*Z,P+=n*G,I+=n*V,T+=n*K,$+=n*Y,R+=n*X,v+=(n=t[14])*j,y+=n*M,x+=n*U,C+=n*L,E+=n*B,_+=n*z,k+=n*F,S+=n*W,A+=n*H,O+=n*q,P+=n*Z,I+=n*G,T+=n*V,$+=n*K,R+=n*Y,D+=n*X,y+=(n=t[15])*j,x+=n*M,C+=n*U,E+=n*L,_+=n*B,k+=n*z,S+=n*F,A+=n*W,O+=n*H,P+=n*q,I+=n*Z,T+=n*G,$+=n*V,R+=n*K,D+=n*Y,N+=n*X,a+=38*x,o+=38*C,s+=38*E,l+=38*_,c+=38*k,u+=38*S,d+=38*A,h+=38*O,f+=38*P,p+=38*I,m+=38*T,g+=38*$,b+=38*R,w+=38*D,v+=38*N,i=Math.floor((n=a+(i=1)+65535)/65536),a=n-65536*i,i=Math.floor((n=o+i+65535)/65536),o=n-65536*i,i=Math.floor((n=s+i+65535)/65536),s=n-65536*i,i=Math.floor((n=l+i+65535)/65536),l=n-65536*i,i=Math.floor((n=c+i+65535)/65536),c=n-65536*i,i=Math.floor((n=u+i+65535)/65536),u=n-65536*i,i=Math.floor((n=d+i+65535)/65536),d=n-65536*i,i=Math.floor((n=h+i+65535)/65536),h=n-65536*i,i=Math.floor((n=f+i+65535)/65536),f=n-65536*i,i=Math.floor((n=p+i+65535)/65536),p=n-65536*i,i=Math.floor((n=m+i+65535)/65536),m=n-65536*i,i=Math.floor((n=g+i+65535)/65536),g=n-65536*i,i=Math.floor((n=b+i+65535)/65536),b=n-65536*i,i=Math.floor((n=w+i+65535)/65536),w=n-65536*i,i=Math.floor((n=v+i+65535)/65536),v=n-65536*i,i=Math.floor((n=y+i+65535)/65536),y=n-65536*i,a+=i-1+37*(i-1),i=Math.floor((n=a+(i=1)+65535)/65536),a=n-65536*i,i=Math.floor((n=o+i+65535)/65536),o=n-65536*i,i=Math.floor((n=s+i+65535)/65536),s=n-65536*i,i=Math.floor((n=l+i+65535)/65536),l=n-65536*i,i=Math.floor((n=c+i+65535)/65536),c=n-65536*i,i=Math.floor((n=u+i+65535)/65536),u=n-65536*i,i=Math.floor((n=d+i+65535)/65536),d=n-65536*i,i=Math.floor((n=h+i+65535)/65536),h=n-65536*i,i=Math.floor((n=f+i+65535)/65536),f=n-65536*i,i=Math.floor((n=p+i+65535)/65536),p=n-65536*i,i=Math.floor((n=m+i+65535)/65536),m=n-65536*i,i=Math.floor((n=g+i+65535)/65536),g=n-65536*i,i=Math.floor((n=b+i+65535)/65536),b=n-65536*i,i=Math.floor((n=w+i+65535)/65536),w=n-65536*i,i=Math.floor((n=v+i+65535)/65536),v=n-65536*i,i=Math.floor((n=y+i+65535)/65536),y=n-65536*i,a+=i-1+37*(i-1),e[0]=a,e[1]=o,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=d,e[7]=h,e[8]=f,e[9]=p,e[10]=m,e[11]=g,e[12]=b,e[13]=w,e[14]=v,e[15]=y}function f(e,t){let r=new Uint8Array(32),n=new Float64Array(80),i=a(),o=a(),f=a(),p=a(),m=a(),g=a();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(n,t);for(let e=0;e<16;e++)o[e]=n[e];i[0]=p[0]=1;for(let e=254;e>=0;--e){let t=r[e>>>3]>>>(7&e)&1;c(i,o,t),c(f,p,t),u(m,i,f),d(i,i,f),u(f,o,p),d(o,o,p),h(p,m,m),h(g,i,i),h(i,f,i),h(f,o,m),u(m,i,f),d(i,i,f),h(o,i,i),d(f,p,g),h(i,f,s),u(i,i,p),h(f,f,i),h(i,p,g),h(p,o,n),h(o,m,m),c(i,o,t),c(f,p,t)}for(let e=0;e<16;e++)n[e+16]=i[e],n[e+32]=f[e],n[e+48]=o[e],n[e+64]=p[e];let b=n.subarray(32),w=n.subarray(16);!function(e,t){let r=a();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)h(r,r,r),2!==e&&4!==e&&h(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]}(b,b),h(w,w,b);let v=new Uint8Array(32);return!function(e,t){let r=a(),n=a();for(let e=0;e<16;e++)n[e]=t[e];l(n),l(n),l(n);for(let e=0;e<2;e++){r[0]=n[0]-65517;for(let e=1;e<15;e++)r[e]=n[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=n[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,c(n,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&n[t],e[2*t+1]=n[t]>>8}(v,w),v}t.Au=function(e){let r=(0,n.randomBytes)(32,e),a=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let r=new Uint8Array(e);return{publicKey:f(r,o),secretKey:r}}(r);return(0,i.wipe)(r),a},t.gi=function(e,r,n=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw Error("X25519: incorrect public key length");let i=f(e,r);if(n){let e=0;for(let t=0;t<i.length;t++)e|=i[t];if(0===e)throw Error("X25519: invalid shared key")}return i}},61882:function(){},36900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(30004);n.__exportStar(r(46869),t),n.__exportStar(r(88033),t)},46869:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},88033:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},66736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(30004);n.__exportStar(r(44273),t),n.__exportStar(r(47001),t),n.__exportStar(r(52939),t),n.__exportStar(r(36900),t)},52939:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(30004).__exportStar(r(88766),t)},88766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0;class r{}t.IWatch=r},83207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let n=r(36900);t.toMiliseconds=function(e){return e*n.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/n.ONE_THOUSAND)}},83873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},44273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(30004);n.__exportStar(r(83873),t),n.__exportStar(r(83207),t)},47001:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e);return t.elapsed||Date.now()-t.started}}t.Watch=r,t.default=r},30004:function(e,t,r){"use strict";r.r(t),r.d(t,{__assign:function(){return a},__asyncDelegator:function(){return y},__asyncGenerator:function(){return v},__asyncValues:function(){return x},__await:function(){return w},__awaiter:function(){return u},__classPrivateFieldGet:function(){return k},__classPrivateFieldSet:function(){return S},__createBinding:function(){return h},__decorate:function(){return s},__exportStar:function(){return f},__extends:function(){return i},__generator:function(){return d},__importDefault:function(){return _},__importStar:function(){return E},__makeTemplateObject:function(){return C},__metadata:function(){return c},__param:function(){return l},__read:function(){return m},__rest:function(){return o},__spread:function(){return g},__spreadArrays:function(){return b},__values:function(){return p}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function s(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}function l(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,s)}l((n=n.apply(e,t||[])).next())})}function d(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function h(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function f(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)n[i]=a[o];return n}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function v(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),a=[];return n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n;function o(e){i[e]&&(n[e]=function(t){return new Promise(function(r,n){a.push([e,t,r,n])>1||s(e,t)})})}function s(e,t){try{var r;(r=i[e](t)).value instanceof w?Promise.resolve(r.value.v).then(l,c):u(a[0][2],r)}catch(e){u(a[0][3],e)}}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}}function y(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:w(e[n](t)),done:"return"===n}:i?i(t):t}:i}}function x(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,i){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,i,(t=e[r](t)).done,t.value)})}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function S(e,t,r){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},5015:function(e,t,r){"use strict";r.d(t,{AW:function(){return I},O6:function(){return tw},rV:function(){return R},gn:function(){return em},H1:function(){return ec},hF:function(){return eu},WG:function(){return L},pe:function(){return z},m$:function(){return j},vB:function(){return F},HI:function(){return B},E0:function(){return eb},Gq:function(){return ef},$0:function(){return ea},Z4:function(){return eh},Bv:function(){return eI},Au:function(){return D},jd:function(){return N},gu:function(){return A},D:function(){return ei},X_:function(){return en},bW:function(){return ey},Z7:function(){return eG},cO:function(){return eC},_H:function(){return ex},fc:function(){return ez},D6:function(){return eV},Hh:function(){return ev},Ym:function(){return M},rj:function(){return U},jU:function(){return et},gp:function(){return eF},rF:function(){return td},Bw:function(){return eg},UG:function(){return J},Gg:function(){return tp},xW:function(){return e3},b$:function(){return ee},Ih:function(){return e0},h1:function(){return e5},Q8:function(){return q},o8:function(){return eX},qt:function(){return eK},Dd:function(){return e6},$t:function(){return ti},nf:function(){return ts},Q0:function(){return tr},in:function(){return e9},p8:function(){return tl},sI:function(){return tu},al:function(){return tc},L5:function(){return eY},EJ:function(){return tn},Z2:function(){return te},PM:function(){return tt},hH:function(){return ta},ON:function(){return tf},n:function(){return e7},JT:function(){return to},M_:function(){return eQ},jv:function(){return e2},KC:function(){return es},eG:function(){return ew},fK:function(){return eH},IP:function(){return el},DQ:function(){return S},iP:function(){return ep},M:function(){return eW},he:function(){return eP},uw:function(){return tg},Ll:function(){return W},EN:function(){return H}});var n=r(15501),i=r(512),a=r(31416),o=r(73294),s=r(57664),l=r(37466),c=r(34155),u=function(e,t,r){if(r||2==arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},d=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},h=function(e){this.version=e,this.type="node",this.name="node",this.os=c.platform},f=function(e,t,r,n){this.name=e,this.version=t,this.os=r,this.bot=n,this.type="bot-device"},p=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},m=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},g=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,b=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],w=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function v(e){var t=""!==e&&b.reduce(function(t,r){var n=r[0],i=r[1];if(t)return t;var a=i.exec(e);return!!a&&[n,a]},!1);if(!t)return null;var r=t[0],n=t[1];if("searchbot"===r)return new p;var i=n[1]&&n[1].split(".").join("_").split("_").slice(0,3);i?i.length<3&&(i=u(u([],i,!0),function(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}(3-i.length),!0)):i=[];var a=i.join("."),o=function(e){for(var t=0,r=w.length;t<r;t++){var n=w[t],i=n[0];if(n[1].exec(e))return i}return null}(e),s=g.exec(e);return s&&s[1]?new f(r,a,o,s[1]):new d(r,a,o)}var y=r(66736),x=r(62873),C=r(65755),E=r(66151);r(61882);let _={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};var k=r(34155);function S(e){let[t,r]=e.split(":");return{namespace:t,reference:r}}function A(e,t=[]){let r=[];return Object.keys(e).forEach(n=>{if(t.length&&!t.includes(n))return;let i=e[n];r.push(...i.accounts)}),r}function O(e,t){return e.includes(":")?[e]:t.chains||[]}let P="base10",I="base16",T="base64pad",$="utf8",R=1;function D(){let e=s.Au();return{privateKey:(0,l.BB)(e.secretKey,I),publicKey:(0,l.BB)(e.publicKey,I)}}function N(){let e=(0,a.randomBytes)(32);return(0,l.BB)(e,I)}function j(e,t){let r=s.gi((0,l.mL)(e,I),(0,l.mL)(t,I),!0),n=new i.t(o.mE,r).expand(32);return(0,l.BB)(n,I)}function M(e){let t=(0,o.vp)((0,l.mL)(e,I));return(0,l.BB)(t,I)}function U(e){let t=(0,o.vp)((0,l.mL)(e,$));return(0,l.BB)(t,I)}function L(e){return Number((0,l.BB)(e,P))}function B(e){var t;let r=(t="u">typeof e.type?e.type:0,(0,l.mL)(`${t}`,P));if(L(r)===R&&typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let i="u">typeof e.senderPublicKey?(0,l.mL)(e.senderPublicKey,I):void 0,o="u">typeof e.iv?(0,l.mL)(e.iv,I):(0,a.randomBytes)(12);return function(e){if(L(e.type)===R){if(typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return(0,l.BB)((0,l.zo)([e.type,e.senderPublicKey,e.iv,e.sealed]),T)}return(0,l.BB)((0,l.zo)([e.type,e.iv,e.sealed]),T)}({type:r,sealed:new n.OK((0,l.mL)(e.symKey,I)).seal(o,(0,l.mL)(e.message,$)),iv:o,senderPublicKey:i})}function z(e){let t=new n.OK((0,l.mL)(e.symKey,I)),{sealed:r,iv:i}=F(e.encoded),a=t.open(i,r);if(null===a)throw Error("Failed to decrypt");return(0,l.BB)(a,$)}function F(e){let t=(0,l.mL)(e,T),r=t.slice(0,1);if(L(r)===R){let e=t.slice(1,33),n=t.slice(33,45);return{type:r,sealed:t.slice(45),iv:n,senderPublicKey:e}}let n=t.slice(1,13);return{type:r,sealed:t.slice(13),iv:n}}function W(e,t){let r=F(e);return H({type:L(r.type),senderPublicKey:"u">typeof r.senderPublicKey?(0,l.BB)(r.senderPublicKey,I):void 0,receiverPublicKey:t?.receiverPublicKey})}function H(e){let t=e?.type||0;if(t===R){if(typeof e?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function q(e){return e.type===R&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var Z=Object.defineProperty,G=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&Y(e,r,t[r]);if(G)for(var r of G(t))K.call(t,r)&&Y(e,r,t[r]);return e};let Q={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function J(){return"u">typeof k&&"u">typeof k.versions&&"u">typeof k.versions.node}function ee(){return!(0,x.getDocument)()&&!!(0,x.getNavigator)()&&"ReactNative"===navigator.product}function et(){return!J()&&!!(0,x.getNavigator)()&&!!(0,x.getDocument)()}function er(){return ee()?Q.reactNative:J()?Q.node:et()?Q.browser:Q.unknown}function en(){var e;try{return ee()&&"u">typeof r.g&&"u">typeof(null==r.g?void 0:r.g.Application)?null==(e=r.g.Application)?void 0:e.applicationId:void 0}catch{return}}function ei(){return(0,C.D)()||{name:"",description:"",url:"",icons:[""]}}function ea({protocol:e,version:t,relayUrl:n,sdkVersion:i,auth:a,projectId:o,useOnCloseEvent:s,bundleId:l}){var u;let d;let f=n.split("?"),p=function(e,t,n){let i=function(){var e;if(er()===Q.reactNative&&"u">typeof r.g&&"u">typeof(null==r.g?void 0:r.g.Platform)){let{OS:e,Version:t}=r.g.Platform;return[e,t].join("-")}let t=e?v(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new m:"undefined"!=typeof navigator?v(navigator.userAgent):void 0!==c&&c.version?new h(c.version.slice(1)):null;if(null===t)return"unknown";let n=t.os?t.os.replace(" ","").toLowerCase():"unknown";return"browser"===t.type?[n,t.name,t.version].join("-"):[n,t.version].join("-")}(),a=function(){var e;let t=er();return t===Q.browser?[t,(null==(e=(0,x.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),["js",n].join("-"),i,a].join("/")}(e,t,i),g=(u=f[1]||"",d=X(X({},d=E.parse(u)),{auth:a,ua:p,projectId:o,useOnCloseEvent:s||void 0,origin:l||void 0}),u=E.stringify(d));return f[0]+"?"+g}function eo(e,t){return e.filter(e=>t.includes(e)).length===e.length}function es(e){return Object.fromEntries(e.entries())}function el(e){return new Map(Object.entries(e))}function ec(e=y.FIVE_MINUTES,t){let r,n,i;let a=(0,y.toMiliseconds)(e||y.FIVE_MINUTES);return{resolve:e=>{i&&r&&(clearTimeout(i),r(e))},reject:e=>{i&&n&&(clearTimeout(i),n(e))},done:()=>new Promise((e,o)=>{i=setTimeout(()=>{o(Error(t))},a),r=e,n=o})}}function eu(e,t,r){return new Promise(async(n,i)=>{let a=setTimeout(()=>i(Error(r)),t);try{let t=await e;n(t)}catch(e){i(e)}clearTimeout(a)})}function ed(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw Error(`Unknown expirer target type: ${e}`)}function eh(e){return ed("topic",e)}function ef(e){return ed("id",e)}function ep(e){let[t,r]=e.split(":"),n={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof r)n.topic=r;else if("id"===t&&Number.isInteger(Number(r)))n.id=Number(r);else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);return n}function em(e,t){return(0,y.fromMiliseconds)((t||Date.now())+(0,y.toMiliseconds)(e))}function eg(e){return Date.now()>=(0,y.toMiliseconds)(e)}function eb(e,t){return`${e}${t?`:${t}`:""}`}function ew(e=[],t=[]){return[...new Set([...e,...t])]}async function ev({id:e,topic:t,wcDeepLink:n}){try{if(!n)return;let i="string"==typeof n?JSON.parse(n):n,a=i?.href;if("string"!=typeof a)return;a.endsWith("/")&&(a=a.slice(0,-1));let o=`${a}/wc?requestId=${e}&sessionTopic=${t}`,s=er();s===Q.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===Q.reactNative&&"u">typeof(null==r.g?void 0:r.g.Linking)&&await r.g.Linking.openURL(o)}catch(e){console.error(e)}}async function ey(e,t){try{return await e.getItem(t)||(et()?localStorage.getItem(t):void 0)}catch(e){console.error(e)}}function ex(e){return e?.relay||{protocol:"irn"}}function eC(e){let t=_[e];if(typeof t>"u")throw Error(`Relay Protocol not supported: ${e}`);return t}var eE=Object.defineProperty,e_=Object.getOwnPropertySymbols,ek=Object.prototype.hasOwnProperty,eS=Object.prototype.propertyIsEnumerable,eA=(e,t,r)=>t in e?eE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eO=(e,t)=>{for(var r in t||(t={}))ek.call(t,r)&&eA(e,r,t[r]);if(e_)for(var r of e_(t))eS.call(t,r)&&eA(e,r,t[r]);return e};function eP(e){var t;let r=(e=(e=e.includes("wc://")?e.replace("wc://",""):e).includes("wc:")?e.replace("wc:",""):e).indexOf(":"),n=-1!==e.indexOf("?")?e.indexOf("?"):void 0,i=e.substring(0,r),a=e.substring(r+1,n).split("@"),o="u">typeof n?e.substring(n):"",s=E.parse(o);return{protocol:i,topic:(t=a[0]).startsWith("//")?t.substring(2):t,version:parseInt(a[1],10),symKey:s.symKey,relay:function(e,t="-"){let r={},n="relay"+t;return Object.keys(e).forEach(t=>{if(t.startsWith(n)){let i=t.replace(n,""),a=e[t];r[i]=a}}),r}(s)}}function eI(e){return`${e.protocol}:${e.topic}@${e.version}?`+E.stringify(eO({symKey:e.symKey},function(e,t="-"){let r={};return Object.keys(e).forEach(n=>{e[n]&&(r["relay"+t+n]=e[n])}),r}(e.relay)))}var eT=Object.defineProperty,e$=Object.defineProperties,eR=Object.getOwnPropertyDescriptors,eD=Object.getOwnPropertySymbols,eN=Object.prototype.hasOwnProperty,ej=Object.prototype.propertyIsEnumerable,eM=(e,t,r)=>t in e?eT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eU=(e,t)=>{for(var r in t||(t={}))eN.call(t,r)&&eM(e,r,t[r]);if(eD)for(var r of eD(t))ej.call(t,r)&&eM(e,r,t[r]);return e},eL=(e,t)=>e$(e,eR(t));function eB(e){let t=[];return e.forEach(e=>{let[r,n]=e.split(":");t.push(`${r}:${n}`)}),t}function ez(e,t){let r=e9(e,t);if(r)throw Error(r.message);let n={};for(let[t,r]of Object.entries(e))n[t]={methods:r.methods,events:r.events,chains:r.accounts.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)};return n}function eF(e){return e.includes(":")}function eW(e){return eF(e)?e.split(":")[0]:e}function eH(e){var t,r,n;let i={};if(!eY(e))return i;for(let[a,o]of Object.entries(e)){let e=eF(a)?[a]:o.chains,s=o.methods||[],l=o.events||[],c=eW(a);i[c]=eL(eU({},i[c]),{chains:ew(e,null==(t=i[c])?void 0:t.chains),methods:ew(s,null==(r=i[c])?void 0:r.methods),events:ew(l,null==(n=i[c])?void 0:n.events)})}return i}let eq={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eZ={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function eG(e,t){let{message:r,code:n}=eZ[e];return{message:t?`${r} ${t}`:r,code:n}}function eV(e,t){let{message:r,code:n}=eq[e];return{message:t?`${r} ${t}`:r,code:n}}function eK(e,t){return!!Array.isArray(e)&&(!("u">typeof t)||!e.length||e.every(t))}function eY(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function eX(e){return typeof e>"u"}function eQ(e,t){return!!(t&&eX(e))||"string"==typeof e&&!!e.trim().length}function eJ(e,t){return!!(t&&eX(e))||"number"==typeof e&&!isNaN(e)}function e0(e,t){let{requiredNamespaces:r}=t,n=Object.keys(e.namespaces),i=Object.keys(r),a=!0;return!!eo(i,n)&&(n.forEach(t=>{let{accounts:n,methods:i,events:o}=e.namespaces[t],s=eB(n),l=r[t];eo(O(t,l),s)&&eo(l.methods,i)&&eo(l.events,o)||(a=!1)}),a)}function e1(e){return!!(eQ(e,!1)&&e.includes(":"))&&2===e.split(":").length}function e2(e){if(eQ(e,!1))try{return"u">typeof new URL(e)}catch{}return!1}function e3(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function e5(e){return e?.topic}function e6(e,t){let r=null;return eQ(e?.publicKey,!1)||(r=eG("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function e4(e){let t=!0;return eK(e)?e.length&&(t=e.every(e=>eQ(e,!1))):t=!1,t}function e8(e,t){let r=null;return Object.values(e).forEach(e=>{var n;let i;if(r)return;let a=(n=`${t}, namespace`,i=null,e4(e?.methods)?e4(e?.events)||(i=eV("UNSUPPORTED_EVENTS",`${n}, events should be an array of strings or empty array for no events`)):i=eV("UNSUPPORTED_METHODS",`${n}, methods should be an array of strings or empty array for no methods`),i);a&&(r=a)}),r}function e7(e,t,r){let n=null;if(e&&eY(e)){let i;let a=e8(e,t);a&&(n=a);let o=(i=null,Object.entries(e).forEach(([e,n])=>{var a,o;let s;if(i)return;let l=(a=O(e,n),o=`${t} ${r}`,s=null,eK(a)&&a.length?a.forEach(e=>{s||e1(e)||(s=eV("UNSUPPORTED_CHAINS",`${o}, chain ${e} should be a string and conform to "namespace:chainId" format`))}):e1(e)||(s=eV("UNSUPPORTED_CHAINS",`${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),s);l&&(i=l)}),i);o&&(n=o)}else n=eG("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return n}function e9(e,t){let r=null;if(e&&eY(e)){let n;let i=e8(e,t);i&&(r=i);let a=(n=null,Object.values(e).forEach(e=>{var r,i;let a;if(n)return;let o=(r=e?.accounts,i=`${t} namespace`,a=null,eK(r)?r.forEach(e=>{a||function(e){if(eQ(e,!1)&&e.includes(":")){let t=e.split(":");if(3===t.length){let e=t[0]+":"+t[1];return!!t[2]&&e1(e)}}return!1}(e)||(a=eV("UNSUPPORTED_ACCOUNTS",`${i}, account ${e} should be a string and conform to "namespace:chainId:address" format`))}):a=eV("UNSUPPORTED_ACCOUNTS",`${i}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),a);o&&(n=o)}),n);a&&(r=a)}else r=eG("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function te(e){return eQ(e.protocol,!0)}function tt(e,t){let r=!1;return t&&!e?r=!0:e&&eK(e)&&e.length&&e.forEach(e=>{r=te(e)}),r}function tr(e){return"number"==typeof e}function tn(e){return"u">typeof e}function ti(e){return!(!e||"object"!=typeof e||!e.code||!eJ(e.code,!1)||!e.message||!eQ(e.message,!1))}function ta(e){return!(eX(e)||!eQ(e.method,!1))}function to(e){return!(eX(e)||eX(e.result)&&eX(e.error)||!eJ(e.id,!1)||!eQ(e.jsonrpc,!1))}function ts(e){return!(eX(e)||!eQ(e.name,!1))}function tl(e,t){return!(!e1(t)||!(function(e){let t=[];return Object.values(e).forEach(e=>{t.push(...eB(e.accounts))}),t})(e).includes(t))}function tc(e,t,r){return!!eQ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eB(e.accounts).includes(t)&&r.push(...e.methods)}),r})(e,t).includes(r)}function tu(e,t,r){return!!eQ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eB(e.accounts).includes(t)&&r.push(...e.events)}),r})(e,t).includes(r)}function td(e,t,r){let n=null,i=function(e){let t={};return Object.keys(e).forEach(r=>{var n;r.includes(":")?t[r]=e[r]:null==(n=e[r].chains)||n.forEach(n=>{t[n]={methods:e[r].methods,events:e[r].events}})}),t}(e),a=function(e){let t={};return Object.keys(e).forEach(r=>{if(r.includes(":"))t[r]=e[r];else{let n=eB(e[r].accounts);n?.forEach(n=>{t[n]={accounts:e[r].accounts.filter(e=>e.includes(`${n}:`)),methods:e[r].methods,events:e[r].events}})}}),t}(t),o=Object.keys(i),s=Object.keys(a),l=th(Object.keys(e)),c=th(Object.keys(t)),u=l.filter(e=>!c.includes(e));return u.length&&(n=eG("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),eo(o,s)||(n=eG("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${s.toString()}`)),Object.keys(t).forEach(e=>{if(!e.includes(":")||n)return;let i=eB(t[e].accounts);i.includes(e)||(n=eG("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${i.toString()}`))}),o.forEach(e=>{n||(eo(i[e].methods,a[e].methods)?eo(i[e].events,a[e].events)||(n=eG("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${e}`)):n=eG("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${e}`))}),n}function th(e){return[...new Set(e.map(e=>e.includes(":")?e.split(":")[0]:e))]}function tf(e,t){return eJ(e,!1)&&e<=t.max&&e>=t.min}function tp(){let e=er();return new Promise(t=>{switch(e){case Q.browser:t(et()&&navigator?.onLine);break;case Q.reactNative:t(tm());break;case Q.node:default:t(!0)}})}async function tm(){if(ee()&&"u">typeof r.g&&null!=r.g&&r.g.NetInfo){let e=await (null==r.g?void 0:r.g.NetInfo.fetch());return e?.isConnected}return!0}function tg(e){switch(er()){case Q.browser:!ee()&&et()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)));break;case Q.reactNative:ee()&&"u">typeof r.g&&null!=r.g&&r.g.NetInfo&&r.g?.NetInfo.addEventListener(t=>e(t?.isConnected));case Q.node:}}let tb={};class tw{static get(e){return tb[e]}static set(e,t){tb[e]=t}static delete(e){delete tb[e]}}},66151:function(e,t,r){"use strict";let n=r(70610),i=r(44020),a=r(80500),o=r(92806),s=e=>null==e,l=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function d(e,t){return t.decode?i(e):e}function h(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function f(e){let t=(e=h(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){n[e]=r;return}void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return(e,r,n)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"colon-list-separator":return(e,r,n)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"comma":case"separator":return(t,r,n)=>{let i="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!i&&d(r,e).includes(e.arrayFormatSeparator);r=a?d(r,e):r;let o=i||a?r.split(e.arrayFormatSeparator).map(t=>d(t,e)):null===r?r:d(r,e);n[t]=o};case"bracket-separator":return(t,r,n)=>{let i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i){n[t]=r?d(r,e):r;return}let a=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>d(t,e));if(void 0===n[t]){n[t]=a;return}n[t]=[].concat(n[t],a)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let i of e.split("&")){if(""===i)continue;let[e,o]=a(t.decode?i.replace(/\+/g," "):i,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:d(o,t),r(d(e,t),o,n)}for(let e of Object.keys(n)){let r=n[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=p(r[e],t);else n[e]=p(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let r=n[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=f,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let i=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[",i,"]"].join("")]:[...r,[u(t,e),"[",u(i,e),"]=",u(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),":list="].join("")]:[...r,[u(t,e),":list=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length)?[[u(r,e),t,u(i,e)].join("")]:[[n,u(i,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,u(t,e)]:[...r,[u(t,e),"=",u(n,e)].join("")]}}(t),i={};for(let t of Object.keys(e))r(t)||(i[t]=e[t]);let a=Object.keys(i);return!1!==t.sort&&a.sort(t.sort),a.map(r=>{let i=e[r];return void 0===i?"":null===i?u(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":i.reduce(n(r),[]).join("&"):u(r,t)+"="+u(i,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:d(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);let n=h(e.url).split("?")[0]||"",i=t.extract(e.url),a=Object.assign(t.parse(i,{sort:!1}),e.query),o=t.stringify(a,r);o&&(o=`?${o}`);let s=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s=`#${r[l]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${o}${s}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[l]:!1},n);let{url:i,query:a,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:i,query:o(a,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{let i=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,i,n)}},62873:function(e,t){"use strict";function r(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function n(e){let t=r(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=n,t.getDocumentOrThrow=function(){return n("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return n("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return n("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return n("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return n("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},65755:function(e,t,r){"use strict";t.D=void 0;let n=r(62873);t.D=function(){let e,t,r;try{e=n.getDocumentOrThrow(),t=n.getLocationOrThrow()}catch(e){return null}function i(...t){let r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){let n=r[e],i=["itemprop","property","name"].map(e=>n.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(i.length&&i){let e=n.getAttribute("content");if(e)return e}}return""}let a=((r=i("name","og:site_name","og:title","twitter:title"))||(r=e.title),r),o=i("description","og:description","twitter:description","keywords");return{description:o,url:t.origin,icons:function(){let r=e.getElementsByTagName("link"),n=[];for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute("rel");if(a&&a.toLowerCase().indexOf("icon")>-1){let e=i.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{let n=t.pathname.split("/");n.pop(),r+=n.join("/")+"/"+e}n.push(r)}else if(0===e.indexOf("//")){let r=t.protocol+e;n.push(r)}else n.push(e)}}}return n}(),name:a}}},2711:function(e){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="dist/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=(n(r(1)),r(6)),o=n(a),s=n(r(7)),l=n(r(8)),c=n(r(9)),u=n(r(10)),d=n(r(11)),h=n(r(14)),f=[],p=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(p=!0),p)return f=(0,d.default)(f,m),(0,u.default)(f,m.once),f},b=function(){f=(0,h.default)(),g()},w=function(){f.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){m=i(m,e),f=(0,h.default)();var t,r=document.all&&!window.atob;return!0===(t=m.disable)||"mobile"===t&&c.default.mobile()||"phone"===t&&c.default.phone()||"tablet"===t&&c.default.tablet()||"function"==typeof t&&!0===t()||r?w():(m.disableMutationObserver||l.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?g(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,function(){g(!0)}):document.addEventListener(m.startEvent,function(){g(!0)}),window.addEventListener("resize",(0,s.default)(g,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(g,m.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,u.default)(f,m.once)},m.throttleDelay)),m.disableMutationObserver||l.default.ready("[data-aos]",b),f)},refresh:g,refreshHard:b}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function r(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":i(t))||t&&"object"==(void 0===t?"undefined":i(t))&&g.call(t)==s)return o;if(r(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var a=u.test(e=e.replace(l,""));return a||d.test(e)?h(e.slice(2),a?2:8):c.test(e)?o:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",o=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt,f="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),g=Object.prototype.toString,b=Math.max,w=Math.min,v=function(){return m.Date.now()};e.exports=function(e,t,i){var o=!0,s=!0;if("function"!=typeof e)throw TypeError(a);return r(i)&&(o="leading"in i?!!i.leading:o,s="trailing"in i?!!i.trailing:s),function(e,t,i){function o(t){var r=d,n=h;return d=h=void 0,y=t,p=e.apply(n,r)}function s(e){var r=e-g,n=e-y;return void 0===g||r>=t||r<0||C&&n>=f}function l(){var e,r,n,i=v();return s(i)?c(i):void(m=setTimeout(l,(e=i-g,r=i-y,n=t-e,C?w(n,f-r):n)))}function c(e){return m=void 0,E&&d?o(e):(d=h=void 0,p)}function u(){var e,r=v(),n=s(r);if(d=arguments,h=this,g=r,n){if(void 0===m)return y=e=g,m=setTimeout(l,t),x?o(e):p;if(C)return m=setTimeout(l,t),o(g)}return void 0===m&&(m=setTimeout(l,t)),p}var d,h,f,p,m,g,y=0,x=!1,C=!1,E=!0;if("function"!=typeof e)throw TypeError(a);return t=n(t)||0,r(i)&&(x=!!i.leading,f=(C="maxWait"in i)?b(n(i.maxWait)||0,t):f,E="trailing"in i?!!i.trailing:E),u.cancel=function(){void 0!==m&&clearTimeout(m),y=0,d=g=h=m=void 0},u.flush=function(){return void 0===m?p:c(v())},u}(e,t,{leading:o,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function r(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":i(t))||t&&"object"==(void 0===t?"undefined":i(t))&&m.call(t)==o)return a;if(r(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var h=c.test(e=e.replace(s,""));return h||u.test(e)?d(e.slice(2),h?2:8):l.test(e)?a:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=NaN,o="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt,h="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,f="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,p=h||f||Function("return this")(),m=Object.prototype.toString,g=Math.max,b=Math.min,w=function(){return p.Date.now()};e.exports=function(e,t,i){function a(t){var r=u,n=d;return u=d=void 0,v=t,f=e.apply(n,r)}function o(e){var r=e-m,n=e-v;return void 0===m||r>=t||r<0||x&&n>=h}function s(){var e,r,n,i=w();return o(i)?l(i):void(p=setTimeout(s,(e=i-m,r=i-v,n=t-e,x?b(n,h-r):n)))}function l(e){return p=void 0,C&&u?a(e):(u=d=void 0,f)}function c(){var e,r=w(),n=o(r);if(u=arguments,d=this,m=r,n){if(void 0===p)return v=e=m,p=setTimeout(s,t),y?a(e):f;if(x)return p=setTimeout(s,t),a(m)}return void 0===p&&(p=setTimeout(s,t)),f}var u,d,h,f,p,m,v=0,y=!1,x=!1,C=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=n(t)||0,r(i)&&(y=!!i.leading,h=(x="maxWait"in i)?g(n(i.maxWait)||0,t):h,C="trailing"in i?!!i.trailing:C),c.cancel=function(){void 0!==p&&clearTimeout(p),v=0,u=m=d=p=void 0},c.flush=function(){return void 0===p?f:l(w())},c}}).call(t,function(){return this}())},function(e,t){"use strict";function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes);if(function e(t){var r=void 0,n=void 0;for(r=0;r<t.length;r+=1)if((n=t[r]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(r)))return i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default={isSupported:function(){return!!r()},ready:function(e,t){var a=window.document,o=new(r())(n);i=t,o.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=r();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=r();return!(!o.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,r){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===n||"false"!==n&&(r||"true"===n)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){r(e,i+n,t)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=r(12))&&n.__esModule?n:{default:n};t.default=function(e,t){return e.forEach(function(e,r){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)}),e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=r(13))&&n.__esModule?n:{default:n};t.default=function(e,t){var r=0,n=0,a=window.innerHeight,o={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(o.offset&&!isNaN(o.offset)&&(n=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),r=(0,i.default)(e).top,o.anchorPlacement){case"top-bottom":break;case"center-bottom":r+=e.offsetHeight/2;break;case"bottom-bottom":r+=e.offsetHeight;break;case"top-center":r+=a/2;break;case"bottom-center":r+=a/2+e.offsetHeight;break;case"center-center":r+=a/2+e.offsetHeight/2;break;case"top-top":r+=a;break;case"bottom-top":r+=e.offsetHeight+a;break;case"center-top":r+=e.offsetHeight/2+a}return o.anchorPlacement||o.offset||isNaN(t)||(n=t),r+n}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,r=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),r+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:r,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},79742:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,a=l(e),o=a[0],s=a[1],c=new i((o+s)*3/4-s),u=0,d=s>0?o-4:o;for(r=0;r<d;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,a=[],o=0,s=n-i;o<s;o+=16383)a.push(function(e,t,n){for(var i,a=[],o=t;o<n;o+=3)a.push(r[(i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}(e,o,o+16383>s?s:o+16383));return 1===i?a.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===i&&a.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),a.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,s=a.length;o<s;++o)r[o]=a[o],n[a.charCodeAt(o)]=o;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let n=r(79742),i=r(80645),a="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|p(e,t),n=o(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(M(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(M(e,ArrayBuffer)||e&&M(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(M(e,SharedArrayBuffer)||e&&M(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return s.from(n,t,r);let i=function(e){var t;if(s.isBuffer(e)){let t=0|f(e.length),r=o(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?o(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),o(e<0?0:0|f(e))}function d(e){let t=e.length<0?0:0|f(e.length),r=o(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),n}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||M(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return N(e).length;default:if(i)return n?-1:D(e).length;t=(""+t).toLowerCase(),i=!0}}function m(e,t,r){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=U[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return v(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var a,o;return a=t,o=r,0===a&&o===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(a,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function g(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function b(e,t,r,n,i){var a;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(a=r=+r)!=a&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:w(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){let a,o=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,s/=2,l/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(a=r;a<s;a++)if(c(e,a)===c(t,-1===n?0:a-n)){if(-1===n&&(n=a),a-n+1===l)return n*o}else -1!==n&&(a-=a-n),n=-1}else for(r+l>s&&(r=s-l),a=r;a>=0;a--){let r=!0;for(let n=0;n<l;n++)if(c(e,a+n)!==c(t,n)){r=!1;break}if(r)return a}return -1}function v(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],a=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,s,l;switch(o){case 1:t<128&&(a=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(a=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(a=l);break;case 4:r=e[i+1],n=e[i+2],s=e[i+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&l<1114112&&(a=l)}}null===a?(a=65533,o=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function y(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,n,i,a){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function C(e,t,r,n,i){I(t,n,i,e,r,7);let a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function E(e,t,r,n,i){I(t,n,i,e,r,7);let a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function _(e,t,r,n,i,a){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function k(e,t,r,n,a){return t=+t,r>>>=0,a||_(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function S(e,t,r,n,a){return t=+t,r>>>=0,a||_(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}t.Buffer=s,t.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(M(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),M(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=s.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(M(t,Uint8Array))i+t.length>n.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(s.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)g(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?v(this,0,e):m.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},a&&(s.prototype[a]=s.prototype.inspect),s.prototype.compare=function(e,t,r,n,i){if(M(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let a=i-n,o=r-t,l=Math.min(a,o),c=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==u[e]){a=c[e],o=u[e];break}return a<o?-1:o<a?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},s.prototype.write=function(e,t,r,n){var i,a,o,s,l,c,u,d;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let a=e.length-r;n?(n=Number(n))>a&&(n=a):n=a;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,a=r,j(D(e,this.length-i),this,i,a);case"ascii":case"latin1":case"binary":return o=t,s=r,j(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,s);case"base64":return l=t,c=r,j(N(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,j(function(e,t){let r,n;let i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,d);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let n=this[e],i=1,a=0;for(;++a<t&&(i*=256);)n+=this[e+a]*i;return n},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||y(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||y(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||y(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||y(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||y(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=L(function(e){T(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&$(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=L(function(e){T(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&$(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let n=this[e],i=1,a=0;for(;++a<t&&(i*=256);)n+=this[e+a]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let n=t,i=1,a=this[e+--n];for(;n>0&&(i*=256);)a+=this[e+--n]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},s.prototype.readInt8=function(e,t){return(e>>>=0,t||y(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||y(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||y(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||y(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||y(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=L(function(e){T(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&$(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=L(function(e){T(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&$(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||y(e,4,this.length),i.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||y(e,4,this.length),i.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||y(e,8,this.length),i.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||y(e,8,this.length),i.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=L(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=L(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let i=0,a=1,o=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+r},s.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let i=r-1,a=1,o=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=L(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=L(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return k(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return k(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return S(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return S(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,n){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},s.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let a=s.isBuffer(e)?e:s.from(e,n),o=a.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%o]}return this};let A={};function O(e,t,r){A[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function P(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function I(e,t,r,n,i,a){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=a>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(a+1)*8}${i}`:`>= -(2${i} ** ${(a+1)*8-1}${i}) and < 2 ** ${(a+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new A.ERR_OUT_OF_RANGE("value",n,e)}T(i,"offset"),(void 0===n[i]||void 0===n[i+a])&&$(i,n.length-(a+1))}function T(e,t){if("number"!=typeof e)throw new A.ERR_INVALID_ARG_TYPE(t,"number",e)}function $(e,t,r){if(Math.floor(e)!==e)throw T(e,r),new A.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new A.ERR_BUFFER_OUT_OF_BOUNDS;throw new A.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}O("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),O("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),O("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=P(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=P(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let R=/[^+/0-9A-Za-z-_]/g;function D(e,t){let r;t=t||1/0;let n=e.length,i=null,a=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return a}function N(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(R,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function j(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function M(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let U=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function L(e){return"undefined"==typeof BigInt?B:e}function B(){throw Error("BigInt not supported")}},27484:function(e){var t,r,n,i,a,o,s,l,c,u,d,h,f,p,m,g,b,w,v,y,x,C;e.exports=(t="millisecond",r="second",n="minute",i="hour",a="week",o="month",s="quarter",l="year",c="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},(m={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},g="$isDayjsObject",b=function(e){return e instanceof x||!(!e||!e[g])},w=function e(t,r,n){var i;if(!t)return p;if("string"==typeof t){var a=t.toLowerCase();m[a]&&(i=a),r&&(m[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;m[s]=t,i=s}return!n&&i&&(p=i),i||!n&&p},v=function(e,t){if(b(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},(y={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,o),a=r-i<0,s=t.clone().add(n+(a?-1:1),o);return+(-(n+(r-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:o,y:l,w:a,d:"day",D:c,h:i,m:n,s:r,ms:t,Q:s})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=w,y.i=b,y.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},C=(x=function(){function e(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==u},f.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return v(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<v(e)},f.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var s=this,u=!!y.u(t)||t,d=y.p(e),h=function(e,t){var r=y.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return u?r:r.endOf("day")},f=function(e,t){return y.w(s.toDate()[e].apply(s.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},p=this.$W,m=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case l:return u?h(1,0):h(31,11);case o:return u?h(1,m):h(0,m+1);case a:var w=this.$locale().weekStart||0,v=(p<w?p+7:p)-w;return h(u?g-v:g+(6-v),m);case"day":case c:return f(b+"Hours",0);case i:return f(b+"Minutes",1);case n:return f(b+"Seconds",2);case r:return f(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,a){var s,u=y.p(e),d="set"+(this.$u?"UTC":""),h=((s={}).day=d+"Date",s[c]=d+"Date",s[o]=d+"Month",s[l]=d+"FullYear",s[i]=d+"Hours",s[n]=d+"Minutes",s[r]=d+"Seconds",s[t]=d+"Milliseconds",s)[u],f="day"===u?this.$D+(a-this.$W):a;if(u===o||u===l){var p=this.clone().set(c,1);p.$d[h](f),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[y.p(e)]()},f.add=function(e,t){var s,c=this;e=Number(e);var u=y.p(t),d=function(t){var r=v(c);return y.w(r.date(r.date()+Math.round(t*e)),c)};if(u===o)return this.set(o,this.$M+e);if(u===l)return this.set(l,this.$y+e);if("day"===u)return d(1);if(u===a)return d(7);var h=((s={})[n]=6e4,s[i]=36e5,s[r]=1e3,s)[u]||1,f=this.$d.getTime()+e*h;return y.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,f=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},p=function(e){return y.s(a%12||12,e,"0")},m=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(h,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return s+1;case"MM":return y.s(s+1,2,"0");case"MMM":return f(r.monthsShort,s,c,3);case"MMMM":return f(c,s);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,l,2);case"ddd":return f(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return y.s(a,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(a,o,!0);case"A":return m(a,o,!1);case"m":return String(o);case"mm":return y.s(o,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,c){var u,d=this,h=y.p(t),f=v(e),p=(f.utcOffset()-this.utcOffset())*6e4,m=this-f,g=function(){return y.m(d,f)};switch(h){case l:u=g()/12;break;case o:u=g();break;case s:u=g()/3;break;case a:u=(m-p)/6048e5;break;case"day":u=(m-p)/864e5;break;case i:u=m/36e5;break;case n:u=m/6e4;break;case r:u=m/1e3;break;default:u=m}return c?u:y.a(u)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return m[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=w(e,t,!0);return n&&(r.$L=n),r},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,v.prototype=C,[["$ms",t],["$s",r],["$m",n],["$H",i],["$W","day"],["$M",o],["$y",l],["$D",c]].forEach(function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,x,v),e.$i=!0),v},v.locale=w,v.isDayjs=b,v.unix=function(e){return v(1e3*e)},v.en=m[p],v.Ls=m,v.p={},v)},84110:function(e){e.exports=function(e,t,r){e=e||{};var n=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(e,t,r,i){return n.fromToBase(e,t,r,i)}r.en.relativeTime=i,n.fromToBase=function(t,n,a,o,s){for(var l,c,u,d=a.$locale().relativeTime||i,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,p=0;p<f;p+=1){var m=h[p];m.d&&(l=o?r(t).diff(a,m.d,!0):a.diff(t,m.d,!0));var g=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,g<=m.r||!m.r){g<=1&&p>0&&(m=h[p-1]);var b=d[m.l];s&&(g=s(""+g)),c="string"==typeof b?b.replace("%d",g):b(g,n,m.l,u);break}}if(n)return c;var w=u?d.future:d.past;return"function"==typeof w?w(c):w.replace("%s",c)},n.to=function(e,t){return a(e,t,this,!0)},n.from=function(e,t){return a(e,t,this)};var o=function(e){return e.$u?r.utc():r()};n.toNow=function(e){return this.to(o(this),e)},n.fromNow=function(e){return this.from(o(this),e)}}},70660:function(e){e.exports=function(e,t,r){r.updateLocale=function(e,t){var n=r.Ls[e];if(n)return(t?Object.keys(t):[]).forEach(function(e){n[e]=t[e]}),n}}},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),n=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(e);i;){try{t[i[0]]=decodeURIComponent(i[0])}catch(e){var a=function(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var n=t.slice(0,r),i=t.slice(r);return Array.prototype.concat.call([],e(n),e(i))})(t,n).join("")).match(r)||[];return e}}(i[0]);a!==i[0]&&(t[i[0]]=a)}i=n.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),s=0;s<o.length;s++){var l=o[s];e=e.replace(RegExp(l,"g"),t[l])}return e}(e)}}},65987:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,n){var i,a,o,s,l,c,u,d={},h={};h[r]=0;var f=t.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(o in a=(i=f.pop()).value,s=i.cost,l=e[a]||{})l.hasOwnProperty(o)&&(c=s+l[o],u=h[o],(void 0===h[o]||u>c)&&(h[o]=c,f.push(o,c),d[o]=a));if(void 0!==n&&void 0===h[n])throw Error(["Could not find a path from ",r," to ",n,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var i=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,i={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},62378:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&r>n+1){var a=e.charCodeAt(n+1);a>=56320&&a<=57343&&(i=(i-55296)*1024+a-56320+65536,n+=1)}if(i<128){t.push(i);continue}if(i<2048){t.push(i>>6|192),t.push(63&i|128);continue}if(i<55296||i>=57344&&i<65536){t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128);continue}if(i>=65536&&i<=1114111){t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},26729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function n(){}function i(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function a(e,t,n,a,o){if("function"!=typeof n)throw TypeError("The listener must be a function");var s=new i(n,a||e,o),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,n,i=[];if(0===this._eventsCount)return i;for(n in e=this._events)t.call(e,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,a=n.length,o=Array(a);i<a;i++)o[i]=n[i].fn;return o},s.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,i,a,o){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.context,t,n,i,a),!0;case 6:return u.fn.call(u.context,t,n,i,a,o),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,f=u.length;for(c=0;c<f;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,n);break;case 4:u[c].fn.call(u[c].context,t,n,i);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return a(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return a(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,n,i){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return o(this,a),this;var s=this._events[a];if(s.fn)s.fn!==t||i&&!s.once||n&&s.context!==n||o(this,a);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||i&&!s[l].once||n&&s[l].context!==n)&&c.push(s[l]);c.length?this._events[a]=1===c.length?c[0]:c:o(this,a)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&o(this,t)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),i=Array.isArray(t),a=0;a<n.length;a++){var o=n[a],s=e[o];(i?-1!==t.indexOf(o):t(o,s,e))&&(r[o]=s)}return r}},80645:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,i){var a,o,s=8*i-n-1,l=(1<<s)-1,c=l>>1,u=-7,d=r?i-1:0,h=r?-1:1,f=e[t+d];for(d+=h,a=f&(1<<-u)-1,f>>=-u,u+=s;u>0;a=256*a+e[t+d],d+=h,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=n;u>0;o=256*o+e[t+d],d+=h,u-=8);if(0===a)a=1-c;else{if(a===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),a-=c}return(f?-1:1)*o*Math.pow(2,a-n)},t.write=function(e,t,r,n,i,a){var o,s,l,c=8*a-i-1,u=(1<<c)-1,d=u>>1,h=23===i?5960464477539062e-23:0,f=n?0:a-1,p=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(o++,l/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*l-1)*Math.pow(2,i),o+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,i),o=0));i>=8;e[r+f]=255&s,f+=p,s/=256,i-=8);for(o=o<<i|s,c+=i;c>0;e[r+f]=255&o,f+=p,o/=256,c-=8);e[r+f-p]|=128*m}},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(92859)}])},59720:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u},isThenable:function(){return d}});var r,n,i="refresh",a="navigate",o="restore",s="server-patch",l="prefetch",c="fast-refresh",u="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(89082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},61100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(72253),i=r(14932),a=r(47702),o=r(91309),s=r(4586);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return C}});var l=r(38754),c=r(61757)._(r(67294)),u=l._(r(73935)),d=l._(r(14764)),h=r(8484),f=r(92666),p=r(14845);r(59982);var m=r(14167),g=l._(r(84148)),b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function w(e,t,r,a,o,s){var l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){var s=new Event("load");Object.defineProperty(s,"target",{writable:!1,value:e});var l=!1,c=!1;r.current(i._(n._({},s),{nativeEvent:s,currentTarget:e,target:e,isDefaultPrevented:function(){return l},isPropagationStopped:function(){return c},persist:function(){},preventDefault:function(){l=!0,s.preventDefault()},stopPropagation:function(){c=!0,s.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}}))}function v(e){var t=o._(c.version.split(".",2),2),r=t[0],n=t[1],i=parseInt(r,10),a=parseInt(n,10);return i>18||18===i&&a>=3?{fetchPriority:e}:{fetchpriority:e}}var y=(0,c.forwardRef)(function(e,t){var r=e.src,o=e.srcSet,s=e.sizes,l=e.height,u=e.width,d=e.decoding,h=e.className,f=e.style,p=e.fetchPriority,m=e.placeholder,g=e.loading,b=e.unoptimized,y=e.fill,x=e.onLoadRef,C=e.onLoadingCompleteRef,E=e.setBlurComplete,_=e.setShowAltText,k=(e.onLoad,e.onError),S=a._(e,["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return c.default.createElement("img",i._(n._({},S,v(p)),{loading:g,width:u,height:l,decoding:d,"data-nimg":y?"fill":"1",className:h,style:f,sizes:s,srcSet:o,src:r,ref:(0,c.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&w(e,m,x,C,E,b))},[r,m,x,C,E,k,b,t]),onLoad:function(e){w(e.currentTarget,m,x,C,E,b)},onError:function(e){_(!0),"empty"!==m&&E(!0),k&&k(e)}}))});function x(e){var t=e.isAppRouter,r=e.imgAttributes,i=n._({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},v(r.fetchPriority));return t&&u.default.preload?(u.default.preload(r.src,i),null):c.default.createElement(d.default,null,c.default.createElement("link",n._({key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src},i)))}var C=(0,c.forwardRef)(function(e,t){var r=(0,c.useContext)(m.RouterContext),a=(0,c.useContext)(p.ImageConfigContext),l=(0,c.useMemo)(function(){var e=b||a||f.imageConfigDefault,t=s._(e.deviceSizes).concat(s._(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return i._(n._({},e),{allSizes:t,deviceSizes:r})},[a]),u=e.onLoad,d=e.onLoadingComplete,w=(0,c.useRef)(u);(0,c.useEffect)(function(){w.current=u},[u]);var v=(0,c.useRef)(d);(0,c.useEffect)(function(){v.current=d},[d]);var C=o._((0,c.useState)(!1),2),E=C[0],_=C[1],k=o._((0,c.useState)(!1),2),S=k[0],A=k[1],O=(0,h.getImgProps)(e,{defaultLoader:g.default,imgConf:l,blurComplete:E,showAltText:S}),P=O.props,I=O.meta;return c.default.createElement(c.default.Fragment,null,c.default.createElement(y,i._(n._({},P),{unoptimized:I.unoptimized,placeholder:I.placeholder,fill:I.fill,onLoadRef:w,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:A,ref:t})),I.priority?c.default.createElement(x,{isAppRouter:!r,imgAttributes:P}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81032:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(72253),i=r(47702),a=r(91309);r(88421),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});var o=r(38754)._(r(67294)),s=r(24879),l=r(71572),c=r(18373),u=r(96221),d=r(25933),h=r(14167),f=r(18874),p=r(96342),m=r(245),g=r(56015),b=r(59720),w=new Set;function v(e,t,r,n,i,a){if(a||(0,l.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(w.has(o))return;w.add(o)}Promise.resolve(a?e.prefetch(t,i):e.prefetch(t,r,n)).catch(function(e){})}}function y(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}var x=o.default.forwardRef(function(e,t){var r,c,w=e.href,x=e.as,C=e.children,E=e.prefetch,_=void 0===E?null:E,k=e.passHref,S=e.replace,A=e.shallow,O=e.scroll,P=e.locale,I=e.onClick,T=e.onMouseEnter,$=e.onTouchStart,R=e.legacyBehavior,D=void 0!==R&&R,N=i._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=C,D&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));var j=o.default.useContext(h.RouterContext),M=o.default.useContext(f.AppRouterContext),U=null!=j?j:M,L=!j,B=!1!==_,z=null===_?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,F=o.default.useMemo(function(){if(!j){var e=y(w);return{href:e,as:x?y(x):e}}var t=a._((0,s.resolveHref)(j,w,!0),2),r=t[0],n=t[1];return{href:r,as:x?(0,s.resolveHref)(j,x):n||r}},[j,w,x]),W=F.href,H=F.as,q=o.default.useRef(W),Z=o.default.useRef(H);D&&(c=o.default.Children.only(r));var G=D?c&&"object"==typeof c&&c.ref:t,V=a._((0,p.useIntersection)({rootMargin:"200px"}),3),K=V[0],Y=V[1],X=V[2],Q=o.default.useCallback(function(e){(Z.current!==H||q.current!==W)&&(X(),Z.current=H,q.current=W),K(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[H,G,W,X,K]);o.default.useEffect(function(){U&&Y&&B&&v(U,W,H,{locale:P},{kind:z},L)},[H,W,Y,P,B,null==j?void 0:j.locale,U,L,z]);var J={ref:Q,onClick:function(e){D||"function"!=typeof I||I(e),D&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,r,n,i,a,s,c,u){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((d=e.currentTarget.getAttribute("target"))&&"_self"!==d||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!u&&!(0,l.isLocalURL)(r)))){e.preventDefault();var d,h=function(){var e=null==s||s;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:c,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})};u?o.default.startTransition(h):h()}}(e,U,W,H,S,A,O,P,L)},onMouseEnter:function(e){D||"function"!=typeof T||T(e),D&&c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(e),U&&(B||!L)&&v(U,W,H,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:z},L)},onTouchStart:function(e){D||"function"!=typeof $||$(e),D&&c.props&&"function"==typeof c.props.onTouchStart&&c.props.onTouchStart(e),U&&(B||!L)&&v(U,W,H,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:z},L)}};if((0,u.isAbsoluteUrl)(H))J.href=H;else if(!D||k||"a"===c.type&&!("href"in c.props)){var ee=void 0!==P?P:null==j?void 0:j.locale,et=(null==j?void 0:j.isLocaleDomain)&&(0,m.getDomainLocale)(H,ee,null==j?void 0:j.locales,null==j?void 0:j.domainLocales);J.href=et||(0,g.addBasePath)((0,d.addLocale)(H,ee,null==j?void 0:j.defaultLocale))}return D?o.default.cloneElement(c,J):o.default.createElement("a",n._({},N,J),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},96342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(91309);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});var i=r(67294),a=r(46231),o="function"==typeof IntersectionObserver,s=new Map,l=[];function c(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!o,u=n._((0,i.useState)(!1),2),d=u[0],h=u[1],f=(0,i.useRef)(null),p=(0,i.useCallback)(function(e){f.current=e},[]);return(0,i.useEffect)(function(){if(o){if(!c&&!d){var e,n,i,u,p=f.current;if(p&&p.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=s.get(n)))return t;var i=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},l.push(r),s.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,i=e.observer,(u=e.elements).set(p,function(e){return e&&h(e)}),i.observe(p),function(){if(u.delete(p),i.unobserve(p),0===u.size){i.disconnect(),s.delete(n);var e=l.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&l.splice(e,1)}}}}else if(!d){var m=(0,a.requestIdleCallback)(function(){return h(!0)});return function(){return(0,a.cancelIdleCallback)(m)}}},[c,r,t,d,f.current]),[p,d,(0,i.useCallback)(function(){h(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(72253),i=r(14932),a=r(47702);r(91309);var o=r(4586);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return d}}),r(59982);var s=r(32528),l=r(92666);function c(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d(e,t){var r,d,h,f=e.src,p=e.sizes,m=e.unoptimized,g=void 0!==m&&m,b=e.priority,w=void 0!==b&&b,v=e.loading,y=e.className,x=e.quality,C=e.width,E=e.height,_=e.fill,k=void 0!==_&&_,S=e.style,A=(e.onLoad,e.onLoadingComplete,e.placeholder),O=void 0===A?"empty":A,P=e.blurDataURL,I=e.fetchPriority,T=e.layout,$=e.objectFit,R=e.objectPosition,D=(e.lazyBoundary,e.lazyRoot,a._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),N=t.imgConf,j=t.showAltText,M=t.blurComplete,U=t.defaultLoader,L=N||l.imageConfigDefault;if("allSizes"in L)H=L;else{var B=o._(L.deviceSizes).concat(o._(L.imageSizes)).sort(function(e,t){return e-t}),z=L.deviceSizes.sort(function(e,t){return e-t});H=i._(n._({},L),{allSizes:B,deviceSizes:z})}var F=D.loader||U;delete D.loader,delete D.srcSet;var W="__next_img_default"in F;if(W){if("custom"===H.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var H,q=F;F=function(e){return e.config,q(a._(e,["config"]))}}if(T){"fill"===T&&(k=!0);var Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[T];Z&&(S=n._({},S,Z));var G={responsive:"100vw",fill:"100vw"}[T];G&&!p&&(p=G)}var V="",K=u(C),Y=u(E);if("object"==typeof(r=f)&&(c(r)||void 0!==r.src)){var X=c(f)?f.default:f;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(X));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(X));if(d=X.blurWidth,h=X.blurHeight,P=P||X.blurDataURL,V=X.src,!k){if(K||Y){if(K&&!Y){var Q=K/X.width;Y=Math.round(X.height*Q)}else if(!K&&Y){var J=Y/X.height;K=Math.round(X.width*J)}}else K=X.width,Y=X.height}}var ee=!w&&("lazy"===v||void 0===v);(!(f="string"==typeof f?f:V)||f.startsWith("data:")||f.startsWith("blob:"))&&(g=!0,ee=!1),H.unoptimized&&(g=!0),W&&f.endsWith(".svg")&&!H.dangerouslyAllowSVG&&(g=!0),w&&(I="high");var et=u(x),er=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:$,objectPosition:R}:{},j?{}:{color:"transparent"},S),en=M||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:K,heightInt:Y,blurWidth:d,blurHeight:h,blurDataURL:P||"",objectFit:er.objectFit})+'")':'url("'+O+'")',ei=en?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:en}:{},ea=function(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.width,a=e.quality,s=e.sizes,l=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var c=function(e,t,r){var n=e.deviceSizes,i=e.allSizes;if(r){for(var a=/(^|\s)(1?\d?\d)vw/g,s=[];l=a.exec(r);l)s.push(parseInt(l[2]));if(s.length){var l,c,u=.01*(c=Math).min.apply(c,o._(s));return{widths:i.filter(function(e){return e>=n[0]*u}),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:o._(new Set([t,2*t].map(function(e){return i.find(function(t){return t>=e})||i[i.length-1]}))),kind:"x"}}(t,i,s),u=c.widths,d=c.kind,h=u.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:u.map(function(e,n){return l({config:t,src:r,quality:a,width:e})+" "+("w"===d?e:n+1)+d}).join(", "),src:l({config:t,src:r,quality:a,width:u[h]})}}({config:H,src:f,unoptimized:g,width:K,quality:et,sizes:p,loader:F});return{props:i._(n._({},D),{loading:ee?"lazy":v,fetchPriority:I,width:K,height:Y,decoding:"async",className:y,style:n._({},er,ei),sizes:ea.sizes,srcSet:ea.srcSet,src:ea.src}),meta:{unoptimized:g,priority:w,placeholder:O,fill:k}}}},32528:function(e,t){"use strict";function r(e){var t=e.widthInt,r=e.heightInt,n=e.blurWidth,i=e.blurHeight,a=e.blurDataURL,o=e.objectFit,s=n?40*n:t,l=i?40*i:r,c=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},80256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(91309);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return c},default:function(){return u}});var i=r(38754),a=r(8484),o=r(59982),s=r(61100),l=i._(r(84148)),c=function(e){(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");var t=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}}).props,r=!0,i=!1,s=void 0;try{for(var c,u=Object.entries(t)[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var d=n._(c.value,2),h=d[0],f=d[1];void 0===f&&delete t[h]}}catch(e){i=!0,s=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw s}}return{props:t}},u=s.Image},84148:function(e,t){"use strict";function r(e){var t=e.config,r=e.src,n=e.width,i=e.quality;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;var n=r},71337:function(e,t,r){"use strict";var n=r(91309),i=r(85893),a=r(41664),o=r.n(a),s=r(67294),l=r(11163),c=r(25675),u=r.n(c),d=r(68544),h=r(9826);t.Z=function(){var e=(0,n._)((0,s.useState)(!1),2),t=e[0],r=e[1],a=(0,n._)((0,s.useState)(!1),2);a[0],a[1];var c=(0,n._)((0,s.useState)(!0),2),f=c[0],p=c[1],m=(0,l.useRouter)(),g=(0,n._)((0,s.useState)(0),2),b=g[0],w=g[1],v=(0,d.k_)().open,y=(0,s.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dark",t=document.querySelector("#btnSwitch img");if("dark"===e){t.src="images/icon/sun.svg";for(var r=document.querySelectorAll("img.dark"),n=0;n<r.length;n++){var i=r[n].src,a=(i=i.replace("-dark.",".")).lastIndexOf("."),o=i.slice(0,a)+"-dark"+i.slice(a);r[n].src=o}}else{t.src="images/icon/moon.svg";for(var r=document.querySelectorAll("img.dark"),n=0;n<r.length;n++){var i=r[n].src,o=i.replace("-dark.",".");r[n].src=o}}},[]),x=(0,s.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dark",t=document.getElementById("btnSwitch");document.documentElement.setAttribute("data-bs-theme",e),localStorage.setItem("theme",e),"dark"===e?t.classList.add("dark-switcher"):t.classList.remove("dark-switcher"),y(e)},[y]);(0,s.useEffect)(function(){new URLSearchParams(window.location.search).get("theme")&&localStorage.setItem("theme","dark"),localStorage.getItem("theme"),x(localStorage.getItem("theme"))},[m.query.theme,x]),(0,s.useEffect)(function(){return window.addEventListener("scroll",E),m.events.on("routeChangeStart",k),function(){window.removeEventListener("scroll",E),m.events.off("routeChangeStart",k)}}),(0,s.useEffect)(function(){w(window.scrollY)},[b]);var C=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;C>e?document.getElementById("navbar").style.top="0":document.getElementById("navbar").style.top="-300px",C=e};var E=function(e){var t=document.querySelector(".header-section");t&&(window.scrollY>=250?t.classList.add("header-fixed","fadeInUp"):t.classList.remove("header-fixed","fadeInUp"))},_=function(){r(!t),document.querySelectorAll(".menu-item-has-children.open").forEach(function(e){e.classList.remove("open"),e.querySelector(".submenu").style.display="none"})};function k(){}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"lightdark-switch",onClick:function(){localStorage.getItem("theme"),x("dark")},style:{display:"none"},children:(0,i.jsx)("span",{className:"switch-btn",id:"btnSwitch",children:(0,i.jsx)(u(),{src:"images/icon/moon.svg",alt:"light-dark-switchbtn",className:"swtich-icon",width:20,height:20})})}),(0,i.jsxs)("header",{className:"header-section header-section--style3",id:"navbar",onScroll:E,children:[f&&(0,i.jsxs)("div",{style:{background:"#c3976a "},className:" p- text-center warning-wrapper text-black top-new-navbar",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"images/crowboy.png",alt:"alert-img",className:"alert-img"})}),(0,i.jsxs)("span",{className:"logo mx-auto warning-bg ",children:[(0,i.jsx)("b",{style:{color:" #c3976a ",fontSize:"16px"},children:"PHISHING WARNING:"})," ",(0,i.jsx)("span",{style:{color:"#2d2c2c",fontSize:"15px"},children:"please make sure you're visiting"}),(0,i.jsxs)("b",{className:"text-white",style:{fontSize:"15px"},children:[" ","https://crowboys.finance"]})," ",(0,i.jsx)("span",{style:{color:"#2d2c2c",fontSize:"15px"},children:"- check the URL carefully."})]}),(0,i.jsx)("span",{style:{float:"right",textAlign:"right",marginTop:"20px",marginRight:"24px"},children:(0,i.jsx)(h.oHP,{style:{fontSize:"18px",color:"#fff",cursor:"pointer"},onClick:function(){return p(!1)}})})]}),(0,i.jsx)("div",{className:"header-bottom",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsxs)("div",{className:"header-wrapper",children:[(0,i.jsxs)("div",{className:"logo d-flex justify-left align-items-center header-logo-main",children:[(0,i.jsx)(o(),{href:"/",className:"",children:(0,i.jsx)("img",{src:"/images/new-crowboys.png",className:" d-md-block header-img-log",alt:"logo",style:{width:"180px",height:"80px",objectFit:"cover",marginTop:"5px"}})}),(0,i.jsx)(o(),{href:"/",children:(0,i.jsx)("img",{src:"/images/White_logo_crowboys.png",className:" d-md-block header-img-log-new",alt:"logo",style:{width:"280px",height:"80px",objectFit:"contain",marginBottom:"5px"}})}),(0,i.jsx)("div",{className:"menu-area px-3 header-small-screen-div",children:(0,i.jsxs)("ul",{id:"menu",className:"header-small-screen-ul menu menu--style2 ".concat(t?"active":""),children:[(0,i.jsx)("ul",{className:"subnav",children:(0,i.jsx)("button",{onClick:function(){return window.location.href="/trade"},className:"subnavbtn",children:"Trade"})}),(0,i.jsxs)("ul",{className:"subnav",children:[(0,i.jsx)("button",{className:"subnavbtn",children:" Staking"}),(0,i.jsx)("div",{className:"subnav-content",children:(0,i.jsx)(o(),{href:"/nft-staking",children:"NFT Staking"})})]}),(0,i.jsx)("ul",{className:"subnav",children:(0,i.jsx)("button",{onClick:function(){return window.open("https://www.crowboys.io/")},className:"subnavbtn",children:"Game"})}),(0,i.jsxs)("ul",{className:"subnav",children:[(0,i.jsx)("button",{className:"subnavbtn",children:"Launchpad"}),(0,i.jsxs)("div",{className:"subnav-content",children:[(0,i.jsx)(o(),{href:"/launchpad",children:"NFT Launchpad"}),(0,i.jsx)(o(),{href:"/launchpad-icos",children:"ICO Launchpad"})]})]})]})})]}),(0,i.jsx)("div",{className:"header-content d-flex align-items-center",children:(0,i.jsx)("div",{className:"header-action",children:(0,i.jsxs)("div",{className:"menu-area",children:[(0,i.jsx)("div",{className:"header-btn",children:(0,i.jsxs)("button",{onClick:function(){return v()},className:"trk-btn trk-btn--outline22 text-white header-btn-btn",children:["Connect ",(0,i.jsx)("i",{className:"fa-solid fa-wallet"})]})}),(0,i.jsxs)("div",{className:t?"header-bar d-lg-none header-bar--style2 active":"header-bar d-lg-none header-bar--style2",onClick:function(){return _()},children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})]})})})]})})})]})]})}},92859:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return t3}});var n,i,a,o,s,l,c,u,d=r(72253),h=r(91309),f=r(85893),p=r(67294),m=r(9008),g=r.n(m);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){x(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw n}}return a}}(e,t)||_(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var S=function(){},A={},O={},P=null,I={mark:S,measure:S};try{"undefined"!=typeof window&&(A=window),"undefined"!=typeof document&&(O=document),"undefined"!=typeof MutationObserver&&(P=MutationObserver),"undefined"!=typeof performance&&(I=performance)}catch(e){}var T=(A.navigator||{}).userAgent,$=void 0===T?"":T,R=A,D=O,N=P,j=I;R.document;var M=!!D.documentElement&&!!D.head&&"function"==typeof D.addEventListener&&"function"==typeof D.createElement,U=~$.indexOf("MSIE")||~$.indexOf("Trident/"),L="___FONT_AWESOME___",B="svg-inline--fa",z="data-fa-i2svg",F="data-fa-pseudo-element",W="data-prefix",H="data-icon",q="fontawesome-i2svg",Z=["HTML","HEAD","STYLE","SCRIPT"],G=function(){try{return!0}catch(e){return!1}}(),V="classic",K="sharp",Y=[V,K];function X(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[V]}})}var Q=X((x(n={},V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),x(n,K,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),n)),J=X((x(i={},V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(i,K,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),i)),ee=X((x(a={},V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(a,K,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),a)),et=X((x(o={},V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(o,K,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),o)),er=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,en="fa-layers-text",ei=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ea=X((x(s={},V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(s,K,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),s)),eo=[1,2,3,4,5,6,7,8,9,10],es=eo.concat([11,12,13,14,15,16,17,18,19,20]),el=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ec={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},eu=new Set;Object.keys(J[V]).map(eu.add.bind(eu)),Object.keys(J[K]).map(eu.add.bind(eu));var ed=[].concat(Y,E(eu),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ec.GROUP,ec.SWAP_OPACITY,ec.PRIMARY,ec.SECONDARY]).concat(eo.map(function(e){return"".concat(e,"x")})).concat(es.map(function(e){return"w-".concat(e)})),eh=R.FontAwesomeConfig||{};D&&"function"==typeof D.querySelector&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t,r=C(e,2),n=r[0],i=r[1],a=""===(t=function(e){var t=D.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(n))||"false"!==t&&("true"===t||t);null!=a&&(eh[i]=a)});var ef={styleDefault:"solid",familyDefault:"classic",cssPrefix:"fa",replacementClass:B,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};eh.familyPrefix&&(eh.cssPrefix=eh.familyPrefix);var ep=w(w({},ef),eh);ep.autoReplaceSvg||(ep.observeMutations=!1);var em={};Object.keys(ef).forEach(function(e){Object.defineProperty(em,e,{enumerable:!0,set:function(t){ep[e]=t,eg.forEach(function(e){return e(em)})},get:function(){return ep[e]}})}),Object.defineProperty(em,"familyPrefix",{enumerable:!0,set:function(e){ep.cssPrefix=e,eg.forEach(function(e){return e(em)})},get:function(){return ep.cssPrefix}}),R.FontAwesomeConfig=em;var eg=[],eb={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ew(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function ev(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function ey(e){return e.classList?ev(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ex(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function eC(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function eE(e){return e.size!==eb.size||e.x!==eb.x||e.y!==eb.y||e.rotate!==eb.rotate||e.flipX||e.flipY}function e_(){var e=em.cssPrefix,t=em.replacementClass,r=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';if("fa"!==e||t!==B){var n=RegExp("\\.".concat("fa","\\-"),"g"),i=RegExp("\\--".concat("fa","\\-"),"g"),a=RegExp("\\.".concat(B),"g");r=r.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(a,".".concat(t))}return r}var ek=!1;function eS(){em.autoAddCss&&!ek&&(!function(e){if(e&&M){var t=D.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=D.head.childNodes,n=null,i=r.length-1;i>-1;i--){var a=r[i];["STYLE","LINK"].indexOf((a.tagName||"").toUpperCase())>-1&&(n=a)}D.head.insertBefore(t,n)}}(e_()),ek=!0)}var eA=R||{};eA[L]||(eA[L]={}),eA[L].styles||(eA[L].styles={}),eA[L].hooks||(eA[L].hooks={}),eA[L].shims||(eA[L].shims=[]);var eO=eA[L],eP=[],eI=!1;function eT(e){var t,r=e.tag,n=e.attributes,i=e.children;return"string"==typeof e?ex(e):"<".concat(r," ").concat(Object.keys((t=void 0===n?{}:n)||{}).reduce(function(e,r){return e+"".concat(r,'="').concat(ex(t[r]),'" ')},"").trim(),">").concat((void 0===i?[]:i).map(eT).join(""),"</").concat(r,">")}function e$(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}!M||(eI=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState))||D.addEventListener("DOMContentLoaded",function e(){D.removeEventListener("DOMContentLoaded",e),eI=1,eP.map(function(e){return e()})});var eR=function(e,t,r,n){var i,a,o,s=Object.keys(e),l=s.length,c=void 0!==n?function(e,r,i,a){return t.call(n,e,r,i,a)}:t;for(void 0===r?(i=1,o=e[s[0]]):(i=0,o=r);i<l;i++)o=c(o,e[a=s[i]],a,e);return o};function eD(e){var t=function(e){for(var t=[],r=0,n=e.length;r<n;){var i=e.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){var a=e.charCodeAt(r++);(64512&a)==56320?t.push(((1023&i)<<10)+(1023&a)+65536):(t.push(i),r--)}else t.push(i)}return t}(e);return 1===t.length?t[0].toString(16):null}function eN(e){return Object.keys(e).reduce(function(t,r){var n=e[r];return n.icon?t[n.iconName]=n.icon:t[r]=n,t},{})}function ej(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.skipHooks,i=eN(t);"function"!=typeof eO.hooks.addPack||void 0!==n&&n?eO.styles[e]=w(w({},eO.styles[e]||{}),i):eO.hooks.addPack(e,eN(t)),"fas"===e&&ej("fa",t)}var eM=eO.styles,eU=eO.shims,eL=(x(l={},V,Object.values(ee[V])),x(l,K,Object.values(ee[K])),l),eB=null,ez={},eF={},eW={},eH={},eq={},eZ=(x(c={},V,Object.keys(Q[V])),x(c,K,Object.keys(Q[K])),c),eG=function(){var e=function(e){return eR(eM,function(t,r,n){return t[n]=eR(r,e,{}),t},{})};ez=e(function(e,t,r){return t[3]&&(e[t[3]]=r),t[2]&&t[2].filter(function(e){return"number"==typeof e}).forEach(function(t){e[t.toString(16)]=r}),e}),eF=e(function(e,t,r){return e[r]=r,t[2]&&t[2].filter(function(e){return"string"==typeof e}).forEach(function(t){e[t]=r}),e}),eq=e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in eM||em.autoFetchSvg,r=eR(eU,function(e,r){var n=r[0],i=r[1],a=r[2];return"far"!==i||t||(i="fas"),"string"==typeof n&&(e.names[n]={prefix:i,iconName:a}),"number"==typeof n&&(e.unicodes[n.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});eW=r.names,eH=r.unicodes,eB=eQ(em.styleDefault,{family:em.familyDefault})};function eV(e,t){return(ez[e]||{})[t]}function eK(e,t){return(eq[e]||{})[t]}function eY(e){return eW[e]||{prefix:null,iconName:null}}eg.push(function(e){eB=eQ(e.styleDefault,{family:em.familyDefault})}),eG();var eX=function(){return{prefix:null,iconName:null,rest:[]}};function eQ(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.family,n=void 0===r?V:r,i=Q[n][e],a=J[n][e]||J[n][i],o=e in eO.styles?e:null;return a||o||null}var eJ=(x(u={},V,Object.keys(ee[V])),x(u,K,Object.keys(ee[K])),u);function e0(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.skipLookups,i=void 0!==n&&n,a=(x(t={},V,"".concat(em.cssPrefix,"-").concat(V)),x(t,K,"".concat(em.cssPrefix,"-").concat(K)),t),o=null,s=V;(e.includes(a[V])||e.some(function(e){return eJ[V].includes(e)}))&&(s=V),(e.includes(a[K])||e.some(function(e){return eJ[K].includes(e)}))&&(s=K);var l=e.reduce(function(e,t){var r,n,l,c,u=(r=em.cssPrefix,l=(n=t.split("-"))[0],c=n.slice(1).join("-"),l!==r||""===c||~ed.indexOf(c)?null:c);if(eM[t]?(o=t=eL[s].includes(t)?et[s][t]:t,e.prefix=t):eZ[s].indexOf(t)>-1?(o=t,e.prefix=eQ(t,{family:s})):u?e.iconName=u:t!==em.replacementClass&&t!==a[V]&&t!==a[K]&&e.rest.push(t),!i&&e.prefix&&e.iconName){var d="fa"===o?eY(e.iconName):{},h=eK(e.prefix,e.iconName);d.prefix&&(o=null),e.iconName=d.iconName||h||e.iconName,e.prefix=d.prefix||e.prefix,"far"!==e.prefix||eM.far||!eM.fas||em.autoFetchSvg||(e.prefix="fas")}return e},eX());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===K&&(eM.fass||em.autoFetchSvg)&&(l.prefix="fass",l.iconName=eK(l.prefix,l.iconName)||l.iconName),("fa"===l.prefix||"fa"===o)&&(l.prefix=eB||"fas"),l}var e1=function(){var e,t;function r(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.definitions={}}return e=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=w(w({},e.definitions[t]||{}),i[t]),ej(t,i[t]);var r=ee[V][t];r&&ej(r,i[t]),eG()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],i=n.prefix,a=n.iconName,o=n.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){"string"==typeof t&&(e[i][t]=o)}),e[i][a]=o}),e}}],y(r.prototype,e),t&&y(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}(),e2=[],e3={},e5={},e6=Object.keys(e5);function e4(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return(e3[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function e8(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];(e3[e]||[]).forEach(function(e){e.apply(null,r)})}function e7(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return e5[e]?e5[e].apply(null,t):void 0}function e9(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||eB;if(t)return t=eK(r,t)||t,e$(te.definitions,r,t)||e$(eO.styles,r,t)}var te=new e1,tt={noAuto:function(){em.autoReplaceSvg=!1,em.observeMutations=!1,e8("noAuto")},config:em,dom:{i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return M?(e8("beforeI2svg",e),e7("pseudoElements2svg",e),e7("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===em.autoReplaceSvg&&(em.autoReplaceSvg=!0),em.observeMutations=!0,e=function(){tr({autoReplaceSvgRoot:r}),e8("watch",t)},M&&(eI?setTimeout(e,0):eP.push(e))}},parse:{icon:function(e){if(null===e)return null;if("object"===v(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:eK(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=eQ(e[0]);return{prefix:r,iconName:eK(r,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(em.cssPrefix,"-"))>-1||e.match(er))){var n=e0(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||eB,iconName:eK(n.prefix,n.iconName)||n.iconName}}if("string"==typeof e){var i=eB;return{prefix:i,iconName:eK(i,e)||e}}}},library:te,findIconDefinition:e9,toHtml:eT},tr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot,r=void 0===t?D:t;(Object.keys(eO.styles).length>0||em.autoFetchSvg)&&M&&em.autoReplaceSvg&&tt.dom.i2svg({node:r})};function tn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return eT(e)})}}),Object.defineProperty(e,"node",{get:function(){if(M){var t=D.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function ti(e){var t,r,n,i,a,o,s=e.icons,l=s.main,c=s.mask,u=e.prefix,d=e.iconName,h=e.transform,f=e.symbol,p=e.title,m=e.maskId,g=e.titleId,b=e.extra,v=e.watchable,y=c.found?c:l,x=y.width,C=y.height,E="fak"===u,_=[em.replacementClass,d?"".concat(em.cssPrefix,"-").concat(d):""].filter(function(e){return -1===b.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(b.classes).join(" "),k={children:[],attributes:w(w({},b.attributes),{},{"data-prefix":u,"data-icon":d,class:_,role:b.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(C)})},S=E&&!~b.classes.indexOf("fa-fw")?{width:"".concat(x/C*1,"em")}:{};void 0!==v&&v&&(k.attributes[z]=""),p&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(g||ew())},children:[p]}),delete k.attributes.title);var A=w(w({},k),{},{prefix:u,iconName:d,main:l,mask:c,maskId:m,transform:h,symbol:f,styles:w(w({},S),b.styles)}),O=c.found&&l.found?e7("generateAbstractMask",A)||{children:[],attributes:{}}:e7("generateAbstractIcon",A)||{children:[],attributes:{}},P=O.children,I=O.attributes;return(A.children=P,A.attributes=I,f)?(t=A.prefix,r=A.iconName,n=A.children,i=A.attributes,o=!0===(a=A.symbol)?"".concat(t,"-").concat(em.cssPrefix,"-").concat(r):a,[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w(w({},i),{},{id:o}),children:n}]}]):function(e){var t=e.children,r=e.main,n=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(eE(o)&&r.found&&!n.found){var s={x:r.width/r.height/2,y:.5};i.style=eC(w(w({},a),{},{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}(A)}function ta(e){var t,r,n,i,a,o,s,l=e.content,c=e.width,u=e.height,d=e.transform,h=e.title,f=e.extra,p=e.watchable,m=w(w(w({},f.attributes),h?{title:h}:{}),{},{class:f.classes.join(" ")});void 0!==p&&p&&(m[z]="");var g=w({},f.styles);eE(d)&&(g.transform=(r=(t={transform:d,startCentered:!0,width:c,height:u}).transform,n=t.width,i=t.height,o=void 0!==(a=t.startCentered)&&a,s="",o&&U?s+="translate(".concat(r.x/16-(void 0===n?16:n)/2,"em, ").concat(r.y/16-(void 0===i?16:i)/2,"em) "):o?s+="translate(calc(-50% + ".concat(r.x/16,"em), calc(-50% + ").concat(r.y/16,"em)) "):s+="translate(".concat(r.x/16,"em, ").concat(r.y/16,"em) "),s+="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") ")+"rotate(".concat(r.rotate,"deg) ")),g["-webkit-transform"]=g.transform);var b=eC(g);b.length>0&&(m.style=b);var v=[];return v.push({tag:"span",attributes:m,children:[l]}),h&&v.push({tag:"span",attributes:{class:"sr-only"},children:[h]}),v}var to=eO.styles;function ts(e){var t=e[0],r=e[1],n=C(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(em.cssPrefix,"-").concat(ec.GROUP)},children:[{tag:"path",attributes:{class:"".concat(em.cssPrefix,"-").concat(ec.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(em.cssPrefix,"-").concat(ec.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}var tl={found:!1,width:512,height:512};function tc(e,t){var r=t;return"fa"===t&&null!==em.styleDefault&&(t=eB),new Promise(function(n,i){if(e7("missingIconAbstract"),"fa"===r){var a,o,s=eY(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&to[t]&&to[t][e])return n(ts(to[t][e]));a=e,o=t,G||em.showMissingIcons||!a||console.error('Icon with name "'.concat(a,'" and prefix "').concat(o,'" is missing.')),n(w(w({},tl),{},{icon:em.showMissingIcons&&e&&e7("missingIconAbstract")||{}}))})}var tu=function(){},td=em.measurePerformance&&j&&j.mark&&j.measure?j:{mark:tu,measure:tu},th='FA "6.5.1"',tf=function(e){td.mark("".concat(th," ").concat(e," ends")),td.measure("".concat(th," ").concat(e),"".concat(th," ").concat(e," begins"),"".concat(th," ").concat(e," ends"))},tp={begin:function(e){return td.mark("".concat(th," ").concat(e," begins")),function(){return tf(e)}},end:tf},tm=function(){};function tg(e){return"string"==typeof(e.getAttribute?e.getAttribute(z):null)}function tb(e){return D.createElementNS("http://www.w3.org/2000/svg",e)}function tw(e){return D.createElement(e)}var tv={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.ceFn,i=void 0===n?"svg"===t.tag?tb:tw:n;if("string"==typeof t)return D.createTextNode(t);var a=i(t.tag);return Object.keys(t.attributes||[]).forEach(function(e){a.setAttribute(e,t.attributes[e])}),(t.children||[]).forEach(function(t){a.appendChild(e(t,{ceFn:i}))}),a}(e),t)}),null===t.getAttribute(z)&&em.keepOriginalSource){var r,n=D.createComment((r=" ".concat(t.outerHTML," "),r="".concat(r,"Font Awesome fontawesome.com ")));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],r=e[1];if(~ey(t).indexOf(em.replacementClass))return tv.replace(e);var n=new RegExp("".concat(em.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(e,t){return t===em.replacementClass||t.match(n)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var a=r.map(function(e){return eT(e)}).join("\n");t.setAttribute(z,""),t.innerHTML=a}};function ty(e){e()}function tx(e,t){var r="function"==typeof t?t:tm;if(0===e.length)r();else{var n=ty;"async"===em.mutateApproach&&(n=R.requestAnimationFrame||ty),n(function(){var t=!0===em.autoReplaceSvg?tv.replace:tv[em.autoReplaceSvg]||tv.replace,n=tp.begin("mutate");e.map(t),n(),r()})}}var tC=!1,tE=null;function t_(e){if(N&&em.observeMutations){var t=e.treeCallback,r=void 0===t?tm:t,n=e.nodeCallback,i=void 0===n?tm:n,a=e.pseudoElementsCallback,o=void 0===a?tm:a,s=e.observeMutationsRoot,l=void 0===s?D:s;tE=new N(function(e){if(!tC){var t=eB;ev(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!tg(e.addedNodes[0])&&(em.searchPseudoElements&&o(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&em.searchPseudoElements&&o(e.target.parentNode),"attributes"===e.type&&tg(e.target)&&~el.indexOf(e.attributeName)){if("class"===e.attributeName&&(a=(n=e.target).getAttribute?n.getAttribute(W):null,s=n.getAttribute?n.getAttribute(H):null,a&&s)){var n,a,s,l,c=e0(ey(e.target)),u=c.prefix,d=c.iconName;e.target.setAttribute(W,u||t),d&&e.target.setAttribute(H,d)}else(l=e.target)&&l.classList&&l.classList.contains&&l.classList.contains(em.replacementClass)&&i(e.target)}})}}),M&&tE.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tk(e){var t,r,n,i,a,o,s,l,c,u,d,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},f=(n=e.getAttribute("data-prefix"),i=e.getAttribute("data-icon"),a=void 0!==e.innerText?e.innerText.trim():"",(o=e0(ey(e))).prefix||(o.prefix=eB),n&&i&&(o.prefix=n,o.iconName=i),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=(t=o.prefix,r=e.innerText,(eF[t]||{})[r]||eV(o.prefix,eD(e.innerText)))),!o.iconName&&em.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o),p=f.iconName,m=f.prefix,g=f.rest,b=(s=ev(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{}),l=e.getAttribute("title"),c=e.getAttribute("data-fa-title-id"),em.autoA11y&&(l?s["aria-labelledby"]="".concat(em.replacementClass,"-title-").concat(c||ew()):(s["aria-hidden"]="true",s.focusable="false")),s),v=e4("parseNodeAttributes",{},e),y=h.styleParser?(u=e.getAttribute("style"),d=[],u&&(d=u.split(";").reduce(function(e,t){var r=t.split(":"),n=r[0],i=r.slice(1);return n&&i.length>0&&(e[n]=i.join(":").trim()),e},{})),d):[];return w({iconName:p,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:m,transform:eb,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:g,styles:y,attributes:b}},v)}var tS=eO.styles;function tA(e){var t="nest"===em.autoReplaceSvg?tk(e,{styleParser:!1}):tk(e);return~t.extra.classes.indexOf(en)?e7("generateLayersText",e,t):e7("generateSvgReplacementMutation",e,t)}var tO=new Set;function tP(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!M)return Promise.resolve();var r=D.documentElement.classList,n=function(e){return r.add("".concat(q,"-").concat(e))},i=function(e){return r.remove("".concat(q,"-").concat(e))},a=em.autoFetchSvg?tO:Y.map(function(e){return"fa-".concat(e)}).concat(Object.keys(tS));a.includes("fa")||a.push("fa");var o=[".".concat(en,":not([").concat(z,"])")].concat(a.map(function(e){return".".concat(e,":not([").concat(z,"])")})).join(", ");if(0===o.length)return Promise.resolve();var s=[];try{s=ev(e.querySelectorAll(o))}catch(e){}if(!(s.length>0))return Promise.resolve();n("pending"),i("complete");var l=tp.begin("onTree"),c=s.reduce(function(e,t){try{var r=tA(t);r&&e.push(r)}catch(e){G||"MissingIcon"!==e.name||console.error(e)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){tx(r,function(){n("active"),n("complete"),i("pending"),"function"==typeof t&&t(),l(),e()})}).catch(function(e){l(),r(e)})})}function tI(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;tA(e).then(function(e){e&&tx([e],t)})}Y.map(function(e){tO.add("fa-".concat(e))}),Object.keys(Q[V]).map(tO.add.bind(tO)),Object.keys(Q[K]).map(tO.add.bind(tO)),tO=E(tO);var tT=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?eb:r,i=t.symbol,a=void 0!==i&&i,o=t.mask,s=void 0===o?null:o,l=t.maskId,c=void 0===l?null:l,u=t.title,d=void 0===u?null:u,h=t.titleId,f=void 0===h?null:h,p=t.classes,m=void 0===p?[]:p,g=t.attributes,b=void 0===g?{}:g,v=t.styles,y=void 0===v?{}:v;if(e){var x=e.prefix,C=e.iconName,E=e.icon;return tn(w({type:"icon"},e),function(){return e8("beforeDOMElementCreation",{iconDefinition:e,params:t}),em.autoA11y&&(d?b["aria-labelledby"]="".concat(em.replacementClass,"-title-").concat(f||ew()):(b["aria-hidden"]="true",b.focusable="false")),ti({icons:{main:ts(E),mask:s?ts(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:C,transform:w(w({},eb),n),symbol:a,title:d,maskId:c,titleId:f,extra:{attributes:b,styles:y,classes:m}})})}},t$=RegExp('"',"ug");function tR(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(n,i){if(null!==e.getAttribute(r))return n();var a=ev(e.children).filter(function(e){return e.getAttribute(F)===t})[0],o=R.getComputedStyle(e,t),s=o.getPropertyValue("font-family").match(ei),l=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(a&&!s)return e.removeChild(a),n();if(s&&"none"!==c&&""!==c){var u=o.getPropertyValue("content"),d=~["Sharp"].indexOf(s[2])?K:V,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?J[d][s[2].toLowerCase()]:ea[d][l],f=(E=(x=y=u.replace(t$,"")).length,k=(_=x.charCodeAt(0))>=55296&&_<=56319&&E>1&&(C=x.charCodeAt(1))>=56320&&C<=57343?(_-55296)*1024+C-56320+65536:_,{value:(S=2===y.length&&y[0]===y[1])?eD(y[0]):eD(y),isSecondary:k>=1105920&&k<=1112319||S}),p=f.value,m=f.isSecondary,g=s[0].startsWith("FontAwesome"),b=eV(h,p),v=b;if(g){var y,x,C,E,_,k,S,A,O,P=(A=eH[p],O=eV("fas",p),A||(O?{prefix:"fas",iconName:O}:null)||{prefix:null,iconName:null});P.iconName&&P.prefix&&(b=P.iconName,h=P.prefix)}if(!b||m||a&&a.getAttribute(W)===h&&a.getAttribute(H)===v)n();else{e.setAttribute(r,v),a&&e.removeChild(a);var I={iconName:null,title:null,titleId:null,prefix:null,transform:eb,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},T=I.extra;T.attributes[F]=t,tc(b,h).then(function(i){var a=ti(w(w({},I),{},{icons:{main:i,mask:eX()},prefix:h,iconName:v,extra:T,watchable:!0})),o=D.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return eT(e)}).join("\n"),e.removeAttribute(r),n()}).catch(i)}}else n()})}function tD(e){return Promise.all([tR(e,"::before"),tR(e,"::after")])}function tN(e){return e.parentNode!==document.head&&!~Z.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(F)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function tj(e){if(M)return new Promise(function(t,r){var n=ev(e.querySelectorAll("*")).filter(tN).map(tD),i=tp.begin("searchPseudoElements");tC=!0,Promise.all(n).then(function(){i(),tC=!1,t()}).catch(function(){i(),tC=!1,r()})})}var tM=!1,tU=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],i=r.slice(1).join("-");if(n&&"h"===i)return e.flipX=!0,e;if(n&&"v"===i)return e.flipY=!0,e;if(isNaN(i=parseFloat(i)))return e;switch(n){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},tL={x:0,y:0,width:"100%",height:"100%"};function tB(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}e2=[{mixout:function(){return{dom:{css:e_,insertCss:eS}}},hooks:function(){return{beforeDOMElementCreation:function(){eS()},beforeI2svg:function(){eS()}}}},{mixout:function(){return{icon:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:e9(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:e9(n||{})),tT(r,w(w({},t),{},{mask:n}))}}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=tP,e.nodeCallback=tI,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?D:t,n=e.callback;return tP(r,void 0===n?function(){}:n)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,n=t.title,i=t.titleId,a=t.prefix,o=t.transform,s=t.symbol,l=t.mask,c=t.maskId,u=t.extra;return new Promise(function(t,d){Promise.all([tc(r,a),l.iconName?tc(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(l){var d=C(l,2);t([e,ti({icons:{main:d[0],mask:d[1]},prefix:a,iconName:r,transform:o,symbol:s,maskId:c,title:n,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){var t,r=e.children,n=e.attributes,i=e.main,a=e.transform,o=eC(e.styles);return o.length>0&&(n.style=o),eE(a)&&(t=e7("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(t||i.icon),{children:r,attributes:n}}}},{mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,n=void 0===r?[]:r;return tn({type:"layer"},function(){e8("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(em.cssPrefix,"-layers")].concat(E(n)).join(" ")},children:r}]})}}}},{mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,n=void 0===r?null:r,i=t.classes,a=void 0===i?[]:i,o=t.attributes,s=void 0===o?{}:o,l=t.styles,c=void 0===l?{}:l;return tn({type:"counter",content:e},function(){var r,i,o,l,u,d,h;return e8("beforeDOMElementCreation",{content:e,params:t}),i=(r={content:e.toString(),title:n,extra:{attributes:s,styles:c,classes:["".concat(em.cssPrefix,"-layers-counter")].concat(E(a))}}).content,o=r.title,u=w(w(w({},(l=r.extra).attributes),o?{title:o}:{}),{},{class:l.classes.join(" ")}),(d=eC(l.styles)).length>0&&(u.style=d),(h=[]).push({tag:"span",attributes:u,children:[i]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h})}}}},{mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?eb:r,i=t.title,a=void 0===i?null:i,o=t.classes,s=void 0===o?[]:o,l=t.attributes,c=void 0===l?{}:l,u=t.styles,d=void 0===u?{}:u;return tn({type:"text",content:e},function(){return e8("beforeDOMElementCreation",{content:e,params:t}),ta({content:e,transform:w(w({},eb),n),title:a,extra:{attributes:c,styles:d,classes:["".concat(em.cssPrefix,"-layers-text")].concat(E(s))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.title,n=t.transform,i=t.extra,a=null,o=null;if(U){var s=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();a=l.width/s,o=l.height/s}return em.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ta({content:e.innerHTML,width:a,height:o,transform:n,title:r,extra:i,watchable:!0})])}}},{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=tj,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?D:t;em.searchPseudoElements&&tj(r)}}},{mixout:function(){return{dom:{unwatch:function(){tC=!0,tM=!0}}}},hooks:function(){return{bootstrap:function(){t_(e4("mutationObserverCallbacks",{}))},noAuto:function(){tE&&tE.disconnect()},watch:function(e){var t=e.observeMutationsRoot;tM?tC=!1:t_(e4("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},{mixout:function(){return{parse:{transform:function(e){return tU(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=tU(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,n=e.containerWidth,i=e.iconWidth,a="translate(".concat(32*r.x,", ").concat(32*r.y,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={outer:{transform:"translate(".concat(n/2," 256)")},inner:l,path:{transform:"translate(".concat(-(i/2*1)," -256)")}};return{tag:"g",attributes:w({},c.outer),children:[{tag:"g",attributes:w({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:w(w({},t.icon.attributes),c.path)}]}]}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),n=r?e0(r.split(" ").map(function(e){return e.trim()})):eX();return n.prefix||(n.prefix=eB),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r,n,i,a,o,s,l,c=e.children,u=e.attributes,d=e.main,h=e.mask,f=e.maskId,p=e.transform,m=d.width,g=d.icon,b=h.width,v=h.icon,y=(r=(t={transform:p,containerWidth:b,iconWidth:m}).transform,n=t.containerWidth,i=t.iconWidth,a="translate(".concat(32*r.x,", ").concat(32*r.y,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},{outer:{transform:"translate(".concat(n/2," 256)")},inner:l,path:{transform:"translate(".concat(-(i/2*1)," -256)")}}),x={tag:"rect",attributes:w(w({},tL),{},{fill:"white"})},C=g.children?{children:g.children.map(tB)}:{},E={tag:"g",attributes:w({},y.inner),children:[tB(w({tag:g.tag,attributes:w(w({},g.attributes),y.path)},C))]},_={tag:"g",attributes:w({},y.outer),children:[E]},k="mask-".concat(f||ew()),S="clip-".concat(f||ew()),A={tag:"mask",attributes:w(w({},tL),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,_]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:"g"===v.tag?v.children:[v]},A]};return c.push(O,{tag:"rect",attributes:w({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(k,")")},tL)}),{children:c,attributes:u}}}},{provides:function(e){var t=!1;R.matchMedia&&(t=R.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:w(w({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=w(w({},n),{},{attributeName:"opacity"}),a={tag:"circle",attributes:w(w({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:w(w({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:w(w({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:w(w({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:w(w({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:w(w({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:w(w({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol");return e.symbol=null!==r&&(""===r||r),e}}}}],e3={},Object.keys(e5).forEach(function(e){-1===e6.indexOf(e)&&delete e5[e]}),e2.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(tt[e]=t[e]),"object"===v(t[e])&&Object.keys(t[e]).forEach(function(r){tt[e]||(tt[e]={}),tt[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){e3[e]||(e3[e]=[]),e3[e].push(r[e])})}e.provides&&e.provides(e5)}),tt.noAuto;var tz=tt.config;tt.library,tt.dom,tt.parse,tt.findIconDefinition,tt.toHtml,tt.icon,tt.layer,tt.text,tt.counter,r(45481),r(31619);var tF=r(2711),tW=r.n(tF);r(53675),r(68602),r(40637),r(80452);var tH=r(71337),tq=r(41664),tZ=r.n(tq),tG=function(){return(0,f.jsx)("div",{className:"container footer-main",style:{width:"100%"},children:(0,f.jsxs)("div",{className:"row ",style:{display:"flex",alignItems:"center"},children:[(0,f.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,f.jsxs)("div",{className:"footer__about",children:[(0,f.jsx)(tZ(),{href:"/",className:"footer__about-logo",children:(0,f.jsx)("img",{src:"/images/new-crowboys.png",alt:"Logo",style:{width:"200px",height:"70px",objectFit:"cover"}})}),(0,f.jsx)("p",{className:"footer__about-moto ",children:"Crowboy Labs is a software company specializing in the development of blockchain and gaming technologies."})]})}),(0,f.jsx)("div",{className:"col-md-2 col-sm-12 ",children:(0,f.jsxs)("div",{className:"footer__links",children:[(0,f.jsx)("div",{className:"footer__links-tittle",children:(0,f.jsx)("h6",{children:"Quick links"})}),(0,f.jsx)("div",{className:"footer__links-content",children:(0,f.jsxs)("ul",{className:"footer__linklist footer-links-ul",children:[(0,f.jsxs)("li",{className:"footer__linklist-item footer-links-li",children:[" ",(0,f.jsx)(tZ(),{href:"https://docs.crowboys.org/",target:"_blank",children:"About Us"})]}),(0,f.jsxs)("li",{className:"footer__linklist-item",children:[" ",(0,f.jsx)(tZ(),{href:"https://docs.crowboys.org/team/team",target:"_blank",children:"Teams"})]}),(0,f.jsxs)("li",{className:"footer__linklist-item",children:[" ",(0,f.jsx)(tZ(),{href:"https://docs.crowboys.org/the-game/description",target:"_blank",children:"Game"})," "]}),(0,f.jsxs)("li",{className:"footer__linklist-item",children:[" ",(0,f.jsx)(tZ(),{scroll:!1,href:"https://docs.crowboys.org/tokenomics/tokenomics",target:"_blank",children:"Tokenomics"})]})]})})]})}),(0,f.jsx)("div",{className:"col-md-2 col-sm-12 ",style:{display:"flex",flex:1,alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("img",{src:"/images/footer/Well.png",alt:"well image",style:{width:"300px",height:"250px"}})})]})})},tV=function(e){var t=e.children;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(tH.Z,{isDarkLogoSame:!0}),t,(0,f.jsx)(tG,{})]})},tK=r(68544),tY=r(59955),tX=r(66634);let tQ=(0,r(86164).a)({id:338,name:"Cronos Testnet",network:"cronos-testnet",nativeCurrency:{decimals:18,name:"CRO",symbol:"tCRO"},rpcUrls:{default:{http:["https://evm-t3.cronos.org"]},public:{http:["https://evm-t3.cronos.org"]}},blockExplorers:{default:{name:"Cronos Explorer",url:"https://cronos.org/explorer/testnet3"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:10191251}},testnet:!0});var tJ="5c40311b85c05682e2f9c7de11adfd22",t0=(0,tY.QB)([tQ],[function({rpc:e}){return function(t){let r=e(t);return r&&""!==r.http?{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r.http]}}},rpcUrls:{http:[r.http],webSocket:r.webSocket?[r.webSocket]:void 0}}:null}}({rpc:function(){return{http:"https://evm-t3.cronos.org"}}})]).chains,t1=(0,tK.o1)({chains:t0,projectId:tJ,metadata:{name:"Crowboys DEX",description:"The Official Crowboys DEX!",url:"https://crowboys-finance.vercel.app",icons:["https://crowboys-finance.vercel.app/images/logo/preloader.png"]}});function t2(e){var t=e.children;return(0,f.jsx)(tX.eM,{config:t1,children:t})}function t3(e){var t=e.Component,r=e.pageProps,n=(0,h._)((0,p.useState)(!0),2),i=n[0],a=n[1];return(0,p.useEffect)(function(){a(!0),tW().init(),setTimeout(function(){a(!1)},1500)},[]),(0,p.useEffect)(function(){localStorage.setItem("theme","dark")},[i]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(g(),{children:[(0,f.jsx)("title",{children:"The Official Crowboys DEX!"}),(0,f.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,f.jsxs)(t2,{children:[i&&(0,f.jsx)("div",{className:"preloader",children:(0,f.jsx)("img",{src:"images/logo/preloader.png",alt:"preloader icon"})}),!i&&(0,f.jsx)(tV,{children:(0,f.jsx)(t,(0,d._)({},r))})]})]})}(0,tK.OY)({wagmiConfig:t1,projectId:tJ,chains:t0,themeVariables:{"--w3m-color-mix":"#fff","--w3m-accent":"#006400"}}),tz.autoAddCss=!1},31619:function(){},45481:function(){},68602:function(){},53675:function(){},40637:function(){},80452:function(){},9008:function(e,t,r){e.exports=r(14764)},25675:function(e,t,r){e.exports=r(80256)},41664:function(e,t,r){e.exports=r(81032)},11163:function(e,t,r){e.exports=r(12937)},34155:function(e){var t,r,n,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}},92592:function(e,t,r){let n=r(47138),i=r(95115),a=r(6907),o=r(93776);function s(e,t,r,a,o){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!n())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(o=r,r=t,t=a=void 0):3===l&&(t.getContext&&void 0===o?(o=a,a=void 0):(o=a,a=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=a=void 0):2!==l||t.getContext||(a=r,r=t,t=void 0),new Promise(function(n,o){try{let o=i.create(r,a);n(e(o,t,a))}catch(e){o(e)}})}try{let n=i.create(r,a);o(null,e(n,t,a))}catch(e){o(e)}}t.create=i.create,t.toCanvas=s.bind(null,a.render),t.toDataURL=s.bind(null,a.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return o.render(e,r)})},47138:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(e,t,r){let n=r(10242).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=n(e),i=145===r?26:2*Math.ceil((r-13)/(2*t-2)),a=[r-7];for(let e=1;e<t-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},t.getPositions=function(e){let r=[],n=t.getRowColCoords(e),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)(0!==e||0!==t)&&(0!==e||t!==i-1)&&(e!==i-1||0!==t)&&r.push([n[e],n[t]]);return r}},8260:function(e,t,r){let n=r(76910),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function a(e){this.mode=n.ALPHANUMERIC,this.data=e}a.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=a},97245:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},73280:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,n){let i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},43424:function(e,t,r){let n=r(62378),i=r(76910);function a(e){this.mode=i.BYTE,"string"==typeof e&&(e=n(e)),this.data=new Uint8Array(e)}a.getBitsLength=function(e){return 8*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=a},35393:function(e,t,r){let n=r(64908),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],a=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return i[(e-1)*4+0];case n.M:return i[(e-1)*4+1];case n.Q:return i[(e-1)*4+2];case n.H:return i[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return a[(e-1)*4+0];case n.M:return a[(e-1)*4+1];case n.Q:return a[(e-1)*4+2];case n.H:return a[(e-1)*4+3];default:return}}},64908:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},76526:function(e,t,r){let n=r(10242).getSymbolSize;t.getPositions=function(e){let t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},61642:function(e,t,r){let n=r(10242),i=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,a=r<<10;for(;n.getBCHDigit(a)-i>=0;)a^=1335<<n.getBCHDigit(a)-i;return(r<<10|a)^21522}},69729:function(e,t){let r=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,n[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return n[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[n[e]+n[t]]}},35442:function(e,t,r){let n=r(76910),i=r(10242);function a(e){this.mode=n.KANJI,this.data=e}a.getBitsLength=function(e){return 13*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=a},27126:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,n=0,i=0,a=0,o=null,s=null;for(let l=0;l<t;l++){i=a=0,o=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===o?i++:(i>=5&&(n+=r.N1+(i-5)),o=t,i=1),(t=e.get(c,l))===s?a++:(a>=5&&(n+=r.N1+(a-5)),s=t,a=1)}i>=5&&(n+=r.N1+(i-5)),a>=5&&(n+=r.N1+(a-5))}return n},t.getPenaltyN2=function(e){let t=e.size,n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){let t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);(4===t||0===t)&&n++}return n*r.N2},t.getPenaltyN3=function(e){let t=e.size,n=0,i=0,a=0;for(let r=0;r<t;r++){i=a=0;for(let o=0;o<t;o++)i=i<<1&2047|e.get(r,o),o>=10&&(1488===i||93===i)&&n++,a=a<<1&2047|e.get(o,r),o>=10&&(1488===a||93===a)&&n++}return n*r.N3},t.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/n/5)-10)*r.N4},t.applyMask=function(e,r){let n=r.size;for(let i=0;i<n;i++)for(let a=0;a<n;a++)r.isReserved(a,i)||r.xor(a,i,function(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,a,i))},t.getBestMask=function(e,r){let n=Object.keys(t.Patterns).length,i=0,a=1/0;for(let o=0;o<n;o++){r(o),t.applyMask(o,e);let n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(o,e),n<a&&(a=n,i=o)}return i}},76910:function(e,t,r){let n=r(43114),i=r(7007);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!n.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},41085:function(e,t,r){let n=r(76910);function i(e){this.mode=n.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let n=this.data.length-t;n>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*n+1))},e.exports=i},26143:function(e,t,r){let n=r(69729);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<t.length;a++)r[i+a]^=n.mul(e[i],t[a]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let i=0;i<t.length;i++)r[i]^=n.mul(t[i],e);let i=0;for(;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let i=0;i<e;i++)r=t.mul(r,new Uint8Array([1,n.exp(i)]));return r}},95115:function(e,t,r){let n=r(10242),i=r(64908),a=r(97245),o=r(73280),s=r(21845),l=r(76526),c=r(27126),u=r(35393),d=r(52882),h=r(23103),f=r(61642),p=r(76910),m=r(16130);function g(e,t,r){let n,i;let a=e.size,o=f.getEncodedBits(t,r);for(n=0;n<15;n++)i=(o>>n&1)==1,n<6?e.set(n,8,i,!0):n<8?e.set(n+1,8,i,!0):e.set(a-15+n,8,i,!0),n<8?e.set(8,a-n-1,i,!0):n<9?e.set(8,15-n-1+1,i,!0):e.set(8,15-n-1,i,!0);e.set(a-8,8,1,!0)}t.create=function(e,t){let r,f;if(void 0===e||""===e)throw Error("No input text");let b=i.M;return void 0!==t&&(b=i.from(t.errorCorrectionLevel,i.M),r=h.from(t.version),f=c.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),function(e,t,r,i){let f;if(Array.isArray(e))f=m.fromArray(e);else if("string"==typeof e){let n=t;if(!n){let t=m.rawSplit(e);n=h.getBestVersionForData(t,r)}f=m.fromString(e,n||40)}else throw Error("Invalid data");let b=h.getBestVersionForData(f,r);if(!b)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<b)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+b+".\n")}else t=b;let w=function(e,t,r){let i=new a;r.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(i)});let o=(n.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t))*8;for(i.getLengthInBits()+4<=o&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);let s=(o-i.getLengthInBits())/8;for(let e=0;e<s;e++)i.put(e%2?17:236,8);return function(e,t,r){let i,a;let o=n.getSymbolTotalCodewords(t),s=o-u.getTotalCodewordsCount(t,r),l=u.getBlocksCount(t,r),c=o%l,h=l-c,f=Math.floor(o/l),p=Math.floor(s/l),m=p+1,g=f-p,b=new d(g),w=0,v=Array(l),y=Array(l),x=0,C=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?p:m;v[e]=C.slice(w,w+t),y[e]=b.encode(v[e]),w+=t,x=Math.max(x,t)}let E=new Uint8Array(o),_=0;for(i=0;i<x;i++)for(a=0;a<l;a++)i<v[a].length&&(E[_++]=v[a][i]);for(i=0;i<g;i++)for(a=0;a<l;a++)E[_++]=y[a][i];return E}(i,e,t)}(t,r,f),v=new o(n.getSymbolSize(t));return function(e,t){let r=e.size,n=l.getPositions(t);for(let t=0;t<n.length;t++){let i=n[t][0],a=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1)&&!(r<=i+t))for(let n=-1;n<=7;n++)a+n<=-1||r<=a+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,a+n,!0,!0):e.set(i+t,a+n,!1,!0))}}(v,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(v),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let n=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,i+r,!0,!0):e.set(n+t,i+r,!1,!0)}}(v,t),g(v,r,0),t>=7&&function(e,t){let r,n,i;let a=e.size,o=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),n=t%3+a-8-3,i=(o>>t&1)==1,e.set(r,n,i,!0),e.set(n,r,i,!0)}(v,t),function(e,t){let r=e.size,n=-1,i=r-1,a=7,o=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,s-r)){let n=!1;o<t.length&&(n=(t[o]>>>a&1)==1),e.set(i,s-r,n),-1==--a&&(o++,a=7)}if((i+=n)<0||r<=i){i-=n,n=-n;break}}}(v,w),isNaN(i)&&(i=c.getBestMask(v,g.bind(null,v,r))),c.applyMask(i,v),g(v,r,i),{modules:v,version:t,errorCorrectionLevel:r,maskPattern:i,segments:f}}(e,r,b,f)}},52882:function(e,t,r){let n=r(26143);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},e.exports=i},7007:function(e,t){let r="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",i="(?:(?![A-Z0-9 $%*+\\-./:]|"+(n=n.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(n,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(i,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let a=RegExp("^"+n+"$"),o=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return a.test(e)},t.testNumeric=function(e){return o.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},16130:function(e,t,r){let n=r(76910),i=r(41085),a=r(8260),o=r(43424),s=r(35442),l=r(7007),c=r(10242),u=r(65987);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let n;let i=[];for(;null!==(n=e.exec(r));)i.push({data:n[0],index:n.index,mode:t,length:n[0].length});return i}function f(e){let t,r;let i=h(l.NUMERIC,n.NUMERIC,e),a=h(l.ALPHANUMERIC,n.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=h(l.BYTE,n.BYTE,e),r=h(l.KANJI,n.KANJI,e)):(t=h(l.BYTE_KANJI,n.BYTE,e),r=[]),i.concat(a,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function p(e,t){switch(t){case n.NUMERIC:return i.getBitsLength(e);case n.ALPHANUMERIC:return a.getBitsLength(e);case n.KANJI:return s.getBitsLength(e);case n.BYTE:return o.getBitsLength(e)}}function m(e,t){let r;let l=n.getBestModeForData(e);if((r=n.from(t,l))!==n.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(l));switch(r!==n.KANJI||c.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new i(e);case n.ALPHANUMERIC:return new a(e);case n.KANJI:return new s(e);case n.BYTE:return new o(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(m(t,null)):t.data&&e.push(m(t.data,t.mode)),e},[])},t.fromString=function(e,r){let i=function(e,t){let r={},i={start:{}},a=["start"];for(let o=0;o<e.length;o++){let s=e[o],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+o+e;l.push(u),r[u]={node:c,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===c.mode?(i[o][u]=p(r[o].lastCount+c.length,c.mode)-p(r[o].lastCount,c.mode),r[o].lastCount+=c.length):(r[o]&&(r[o].lastCount=c.length),i[o][u]=p(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,t))}}a=l}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case n.NUMERIC:t.push([i,{data:i.data,mode:n.ALPHANUMERIC,length:i.length},{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.ALPHANUMERIC:t.push([i,{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.KANJI:t.push([i,{data:i.data,mode:n.BYTE,length:d(i.data)}]);break;case n.BYTE:t.push([{data:i.data,mode:n.BYTE,length:d(i.data)}])}}return t}(f(e,c.isKanjiModeEnabled())),r),a=u.find_path(i.map,"start","end"),o=[];for(let e=1;e<a.length-1;e++)o.push(i.table[a[e]].node);return t.fromArray(o.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}},10242:function(e,t){let r;let n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},43114:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},23103:function(e,t,r){let n=r(10242),i=r(35393),a=r(64908),o=r(76910),s=r(43114),l=n.getBCHDigit(7973);function c(e,t){return o.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=o.BYTE);let a=(n.getSymbolTotalCodewords(e)-i.getTotalCodewordsCount(e,t))*8;if(r===o.MIXED)return a;let l=a-c(r,e);switch(r){case o.NUMERIC:return Math.floor(l/10*3);case o.ALPHANUMERIC:return Math.floor(l/11*2);case o.KANJI:return Math.floor(l/13);case o.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let n;let i=a.from(r,a.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++)if(function(e,t){let r=0;return e.forEach(function(e){let n=c(e.mode,t);r+=n+e.getBitsLength()}),r}(e,n)<=t.getCapacity(n,r,o.MIXED))return n}(e,i);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,r,n){for(let i=1;i<=40;i++)if(r<=t.getCapacity(i,n,e))return i}(n.mode,n.getLength(),i)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-l>=0;)t^=7973<<n.getBCHDigit(t)-l;return e<<12|t}},6907:function(e,t,r){let n=r(89653);t.render=function(e,t,r){var i;let a=r,o=t;void 0!==a||t&&t.getContext||(a=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),a=n.getOptions(a);let s=n.getImageWidth(e.modules.size,a),l=o.getContext("2d"),c=l.createImageData(s,s);return n.qrToImageData(c.data,e,a),i=o,l.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px",l.putImageData(c,0,0),o},t.renderToDataURL=function(e,r,n){let i=n;void 0!==i||r&&r.getContext||(i=r,r=void 0),i||(i={});let a=t.render(e,r,i),o=i.type||"image/png",s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}},93776:function(e,t,r){let n=r(89653);function i(e,t){let r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function a(e,t,r){let n=e+t;return void 0!==r&&(n+=" "+r),n}t.render=function(e,t,r){let o=n.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*o.margin,u=o.color.light.a?"<path "+i(o.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+i(o.color.dark,"stroke")+' d="'+function(e,t,r){let n="",i=0,o=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||o||(o=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(n+=o?a("M",c+r,.5+u+r):a("m",i,0),i=0,o=!1),c+1<t&&e[l+1]||(n+=a("h",s),s=0)):i++}return n}(l,s,o.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,h),h}},89653:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){let i=r.modules.size,a=r.modules.data,o=t.getScale(i,n),s=Math.floor((i+2*n.margin)*o),l=n.margin*o,c=[n.color.light,n.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=n.color.light;t>=l&&r>=l&&t<s-l&&r<s-l&&(d=c[a[Math.floor((t-l)/o)*i+Math.floor((r-l)/o)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},80500:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},53250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,u=n[1];return s(function(){i.value=r,i.getSnapshot=t,c(i)&&u({inst:i})},[e,r,t]),o(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},50139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i=r(61688),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;var f=o(e,(d=c(function(){function e(e){if(!l){if(l=!0,o=e,e=n(e),void 0!==i&&h.hasValue){var t=h.value;if(i(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(o=e,s=r)}var o,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,i]))[0],d[1]);return l(function(){h.hasValue=!0,h.value=f},[f]),u(f),f}},61688:function(e,t,r){"use strict";e.exports=r(53250)},52798:function(e,t,r){"use strict";e.exports=r(50139)},35883:function(){},53516:function(e,t,r){"use strict";function n(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}r.d(t,{J:function(){return n}})},92219:function(e,t,r){"use strict";r.d(t,{_:function(){return h}});var n,i=r(57858),a=r(53516),o=r(75276),s=r(45775),l=r(39028),c=r(79578),u=r(3980),d=r(92106),h=class extends o.wR{constructor({chains:e,options:t}={}){let r={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let e=window.ethereum;return e?.providers&&e.providers.length>0?e.providers[0]:e},...t};super({chains:e,options:r}),this.id="injected",(0,o.Ko)(this,n,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,s.K)(e[0])})},this.onChainChanged=e=>{let t=(0,a.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=async e=>{!(1013===e.code&&await this.getProvider()&&await this.getAccount())&&(this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))};let i=r.getProvider();if("string"==typeof r.name)this.name=r.name;else if(i){let e=function(e){if(!e)return"Injected";let t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOktoWallet?"Okto Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let r=new Set,n=1;for(let i of e.providers){let e=t(i);e||(e=`Unknown Wallet #${n}`,n+=1),r.add(e)}let i=[...r];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}(i);r.name?this.name=r.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.ready=!!i}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new i.N;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let r=await t.request({method:"eth_requestAccounts"}),n=(0,s.K)(r[0]),a=await this.getChainId(),o=this.isChainUnsupported(a);return e&&a!==e&&(a=(await this.switchChain(e)).id,o=this.isChainUnsupported(a)),this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:n,chain:{id:a,unsupported:o}}}catch(e){if(this.isUserRejectedRequestError(e))throw new l.ab(e);if(-32002===e.code)throw new l.pT(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new i.N;let t=await e.request({method:"eth_accounts"});return(0,s.K)(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new i.N;return e.request({method:"eth_chainId"}).then(a.J)}async getProvider(){let e=this.options.getProvider();return e&&(0,o.qx)(this,n,e),(0,o.ac)(this,n)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,c.K)({account:r,chain:n,transport:(0,u.P)(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new i.N;return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new i.N;let r=(0,d.eC)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(t=>this.on("change",({chain:r})=>{r?.id===e&&t()}))]),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(a){let n=this.chains.find(t=>t.id===e);if(!n)throw new i.B({chainId:e,connectorId:this.id});if(4902===a.code||a?.data?.originalError?.code===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:[n.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),await this.getChainId()!==e)throw new l.ab(Error("User rejected switch after adding network."));return n}catch(e){throw new l.ab(e)}if(this.isUserRejectedRequestError(a))throw new l.ab(a);throw new l.x3(a)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){let a=await this.getProvider();if(!a)throw new i.N;return a.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}isUserRejectedRequestError(e){return 4001===e.code}};n=new WeakMap},57858:function(e,t,r){"use strict";r.d(t,{B:function(){return n},N:function(){return i}});var n=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},i=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},75276:function(e,t,r){"use strict";r.d(t,{wR:function(){return d},Ko:function(){return l},ac:function(){return s},U9:function(){return u},qx:function(){return c}});var n=r(26729),i=r(66403);let a=(0,r(86164).a)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var o=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},s=(e,t,r)=>(o(e,t,"read from private field"),r?r.call(e):t.get(e)),l=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},c=(e,t,r,n)=>(o(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),u=(e,t,r)=>(o(e,t,"access private method"),r),d=class extends n{constructor({chains:e=[i.R,a],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){let{default:t,...r}=e.blockExplorers??{};if(t)return[t.url,...Object.values(r).map(e=>e.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}}},59955:function(e,t,r){"use strict";r.d(t,{QB:function(){return tL},$j:function(){return t2},_g:function(){return t0},o6:function(){return tX},vZ:function(){return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let n,i;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let a=Object.keys(t);if((n=a.length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;for(i=n;0!=i--;){let n=a[i];if(n&&!e(t[n],r[n]))return!1}return!0}return t!=t&&r!=r}},zP:function(){return t3},EG:function(){return rt},w6:function(){return rl},Lk:function(){return rc},D0:function(){return rr},Hy:function(){return rn},wp:function(){return tY},l:function(){return ri},If:function(){return ra},uH:function(){return ro},QC:function(){return rs}});var n,i,a,o,s,l=r(92219),c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},u=(e,t,r)=>(c(e,t,"read from private field"),r?r.call(e):t.get(e)),d=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},h=(e,t,r,n)=>(c(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),f=(e,t,r)=>(c(e,t,"access private method"),r),p=r(16189),m=r(16693),g=r(7210),b=r(77799),w=r(47864),v=r(61836),y=r(92106),x=r(21746),C=r(62027),E=r(97405);function _(e,t){if(!(e instanceof C.G))return!1;let r=e.walk(e=>e instanceof E.Lu);return r instanceof E.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===x.$[50])}var k=r(57040),S=r(11187),A=r(88184),O=r(15102);function P(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,O.v)(t)?t:null}function I(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,y.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let n=P(r[e]),i=n?(0,S.O0)(n):(0,A.w)((0,S.qX)(r[e]),"bytes");t=(0,A.w)((0,k.zo)([t,i]),"bytes")}return(0,y.ci)(t)}function T(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,S.qX)(t).byteLength+2),n=0,i=t.split(".");for(let e=0;e<i.length;e++){let t=(0,S.qX)(i[e]);if(t.byteLength>255){var a;t=(0,S.qX)((a=function(e){let t=new Uint8Array(32).fill(0);return e?P(e)||(0,A.w)((0,S.qX)(e)):(0,y.ci)(t)}(i[e]),`[${a.slice(2)}]`))}r[n]=t.length,r.set(t,n+1),n+=t.length+1}return r.byteLength!==n+1?r.slice(0,n+1):r}var $=r(93714),R=r(57412),D=r(39028);function N(e,{abi:t,address:r,args:n,docsPath:i,functionName:a,sender:o}){let{code:s,data:l,message:c,shortMessage:u}=e instanceof E.VQ?e:e instanceof C.G?e.walk(e=>"data"in e)||e.walk():{},d=e instanceof R.wb?new E.Dk({functionName:a}):[3,D.XS.code].includes(s)&&(l||c||u)?new E.Lu({abi:t,data:"object"==typeof l?l.data:l,functionName:a,message:u??c}):e;return new E.uq(d,{abi:t,args:n,contractAddress:r,docsPath:i,functionName:a,sender:o})}var j=r(61376);async function M(e,{abi:t,address:r,args:n,functionName:i,...a}){let o=(0,b.R)({abi:t,args:n,functionName:i});try{let{data:s}=await (0,$.s)(e,j.R,"call")({data:o,to:r,...a});return(0,g.k)({abi:t,args:n,functionName:i,data:s||"0x"})}catch(e){throw N(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/readContract",functionName:i})}}async function U(e,{blockNumber:t,blockTag:r,coinType:n,name:i,universalResolverAddress:a}){let o=a;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,w.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a=(0,b.R)({abi:m.X$,functionName:"addr",...null!=n?{args:[I(i),BigInt(n)]}:{args:[I(i)]}}),s=await (0,$.s)(e,M,"readContract")({address:o,abi:m.k3,functionName:"resolve",args:[(0,y.NC)(T(i)),a],blockNumber:t,blockTag:r});if("0x"===s[0])return null;let l=(0,g.k)({abi:m.X$,args:null!=n?[I(i),BigInt(n)]:void 0,functionName:"addr",data:s[0]});if("0x"===l||"0x00"===(0,v.f)(l))return null;return l}catch(e){if(_(e,"resolve"))return null;throw e}}class L extends C.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class B extends C.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class z extends C.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class F extends C.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let W=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,H=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,q=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Z=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function G(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function V(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function K({uri:e,gatewayUrls:t}){let r=q.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let n=V(t?.ipfs,"https://ipfs.io"),i=V(t?.arweave,"https://arweave.net"),a=e.match(W),{protocol:o,subpath:s,target:l,subtarget:c=""}=a?.groups||{},u="ipns:/"===o||"ipns/"===s,d="ipfs:/"===o||"ipfs/"===s||H.test(e);if(e.startsWith("http")&&!u&&!d){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${n}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===o&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(Z,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new z({uri:e})}function Y(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new L({data:e});return e.image||e.image_url||e.image_data}async function X({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json());return await Q({gatewayUrls:e,uri:Y(r)})}catch{throw new z({uri:t})}}async function Q({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:n}=K({uri:t,gatewayUrls:e});if(n||await G(r))return r;throw new z({uri:t})}async function J(e,{nft:t}){if("erc721"===t.namespace)return M(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return M(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new F({namespace:t.namespace})}async function ee(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?et(e,{gatewayUrls:t,record:r}):Q({uri:r,gatewayUrls:t})}async function et(e,{gatewayUrls:t,record:r}){let n=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,n,i]=t.split("/"),[a,o]=r.split(":"),[s,l]=n.split(":");if(!a||"eip155"!==a.toLowerCase())throw new B({reason:"Only EIP-155 supported"});if(!o)throw new B({reason:"Chain ID not found"});if(!l)throw new B({reason:"Contract address not found"});if(!i)throw new B({reason:"Token ID not found"});if(!s)throw new B({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:i}}(r),{uri:i,isOnChain:a,isEncoded:o}=K({uri:await J(e,{nft:n}),gatewayUrls:t});if(a&&(i.includes("data:application/json;base64,")||i.startsWith("{")))return Q({uri:Y(JSON.parse(o?atob(i.replace("data:application/json;base64,","")):i)),gatewayUrls:t});let s=n.tokenID;return"erc1155"===n.namespace&&(s=s.replace("0x","").padStart(64,"0")),X({gatewayUrls:t,uri:i.replace(/(?:0x)?{id}/,s)})}async function er(e,{blockNumber:t,blockTag:r,name:n,key:i,universalResolverAddress:a}){let o=a;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,w.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a=await (0,$.s)(e,M,"readContract")({address:o,abi:m.k3,functionName:"resolve",args:[(0,y.NC)(T(n)),(0,b.R)({abi:m.nZ,functionName:"text",args:[I(n),i]})],blockNumber:t,blockTag:r});if("0x"===a[0])return null;let s=(0,g.k)({abi:m.nZ,functionName:"text",data:a[0]});return""===s?null:s}catch(e){if(_(e,"resolve"))return null;throw e}}async function en(e,{blockNumber:t,blockTag:r,gatewayUrls:n,name:i,universalResolverAddress:a}){let o=await (0,$.s)(e,er,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:i,universalResolverAddress:a});if(!o)return null;try{return await ee(e,{record:o,gatewayUrls:n})}catch{return null}}async function ei(e,{address:t,blockNumber:r,blockTag:n,universalResolverAddress:i}){let a=i;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,w.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let o=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let[i,s]=await (0,$.s)(e,M,"readContract")({address:a,abi:m.du,functionName:"reverse",args:[(0,y.NC)(T(o))],blockNumber:r,blockTag:n});if(t.toLowerCase()!==s.toLowerCase())return null;return i}catch(e){if(_(e,"reverse"))return null;throw e}}async function ea(e,{blockNumber:t,blockTag:r,name:n,universalResolverAddress:i}){let a=i;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,w.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[o]=await (0,$.s)(e,M,"readContract")({address:a,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,y.NC)(T(n))],blockNumber:t,blockTag:r});return o}function eo(e,{method:t}){let r={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:n,status:i,transport:a})=>{"success"===i&&t===e&&(r[n]=a.request)}),t=>r[t]||e.request}async function es(e){let t=eo(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}class el extends C.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var ec=r(74059),eu=r(45444),ed=r(80522),eh=r(40840);function ef({abi:e,eventName:t,args:r}){let n=e[0];if(t&&!(n=(0,eh.mE)({abi:e,args:r,name:t})))throw new R.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==n.type)throw new R.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let i=(0,ed.t)(n),a=(0,ec.e)(i),o=[];if(r&&"inputs"in n){let e=n.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(o=e?.map((e,r)=>Array.isArray(t[r])?t[r].map((n,i)=>ep({param:e,value:t[r][i]})):t[r]?ep({param:e,value:t[r]}):null)??[])}return[a,...o]}function ep({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,A.w)((0,S.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new el(e.type);return(0,eu.E)([e],[t])}async function em(e,{address:t,abi:r,args:n,eventName:i,fromBlock:a,strict:o,toBlock:s}){let l=eo(e,{method:"eth_newFilter"}),c=i?ef({abi:r,args:n,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof a?(0,y.eC)(a):a,toBlock:"bigint"==typeof s?(0,y.eC)(s):s,topics:c}]});return{abi:r,args:n,eventName:i,id:u,request:l(u),strict:o,type:"event"}}async function eg(e,{address:t,args:r,event:n,events:i,fromBlock:a,strict:o,toBlock:s}={}){let l=i??(n?[n]:void 0),c=eo(e,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(e=>ef({abi:[e],eventName:e.name,args:r}))],n&&(u=u[0]));let d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof a?(0,y.eC)(a):a,toBlock:"bigint"==typeof s?(0,y.eC)(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:r,eventName:n?n.name:void 0,fromBlock:a,id:d,request:c(d),strict:o,toBlock:s,type:"event"}}async function eb(e){let t=eo(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}var ew=r(14503),ev=r(81841);async function ey(e,{abi:t,address:r,args:n,functionName:i,...a}){let o=(0,b.R)({abi:t,args:n,functionName:i});try{return await (0,$.s)(e,ev.Q,"estimateGas")({data:o,to:r,...a})}catch(o){let e=a.account?(0,ew.T)(a.account):void 0;throw N(o,{abi:t,address:r,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:e?.address})}}var ex=r(43861),eC=r(79379);async function eE(e,{address:t,blockNumber:r,blockTag:n="latest"}){let i=r?(0,y.eC)(r):void 0;return BigInt(await e.request({method:"eth_getBalance",params:[t,i||n]}))}var e_=r(75016);let ek=new Map,eS=new Map;async function eA(e,{cacheKey:t,cacheTime:r=1/0}){let n=function(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),r=t(e,ek),n=t(e,eS);return{clear:()=>{r.clear(),n.clear()},promise:r,response:n}}(t),i=n.response.get();if(i&&r>0&&new Date().getTime()-i.created.getTime()<r)return i.data;let a=n.promise.get();a||(a=e(),n.promise.set(a));try{let e=await a;return n.response.set({created:new Date,data:e}),e}finally{n.promise.clear()}}let eO=e=>`blockNumber.${e}`;async function eP(e,{cacheTime:t=e.cacheTime,maxAge:r}={}){return BigInt(await eA(()=>e.request({method:"eth_blockNumber"}),{cacheKey:eO(e.uid),cacheTime:r??t}))}var eI=r(95946);async function eT(e,{blockHash:t,blockNumber:r,blockTag:n="latest"}={}){let i;let a=void 0!==r?(0,y.eC)(r):void 0;return i=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[a||n]}),(0,eI.ly)(i)}async function e$(e,{address:t,blockNumber:r,blockTag:n="latest"}){let i=void 0!==r?(0,y.eC)(r):void 0,a=await e.request({method:"eth_getCode",params:[t,i||n]});if("0x"!==a)return a}var eR=r(79524),eD=r(34450);let eN="/docs/contract/decodeEventLog";function ej({abi:e,data:t,strict:r,topics:n}){let i=r??!0,[a,...o]=n;if(!a)throw new R.FM({docsPath:eN});let s=e.find(e=>"event"===e.type&&a===(0,ec.e)((0,ed.t)(e)));if(!(s&&"name"in s)||"event"!==s.type)throw new R.lC(a,{docsPath:eN});let{name:l,inputs:c}=s,u=c?.some(e=>!("name"in e&&e.name)),d=u?[]:{},h=c.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<h.length;e++){let t=h[e],r=o[e];if(!r)throw new R.Gy({abiItem:s,param:t});d[t.name||e]=function({param:e,value:t}){return"string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/)?t:((0,eD.r)([e],t)||[])[0]}({param:t,value:r})}let f=c.filter(e=>!("indexed"in e&&e.indexed));if(f.length>0){if(t&&"0x"!==t)try{let e=(0,eD.r)(f,t);if(e){if(u)d=[...d,...e];else for(let t=0;t<f.length;t++)d[f[t].name]=e[t]}}catch(e){if(i){if(e instanceof R.xB)throw new R.SM({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(i)throw new R.SM({abiItem:s,data:"0x",params:f,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function eM(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}async function eU(e,{address:t,blockHash:r,fromBlock:n,toBlock:i,event:a,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(a?[a]:void 0),d=[];return u&&(d=[u.flatMap(e=>ef({abi:[e],eventName:e.name,args:s}))],a&&(d=d[0])),(r?await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:"bigint"==typeof n?(0,y.eC)(n):n,toBlock:"bigint"==typeof i?(0,y.eC)(i):i}]})).map(e=>{try{let{eventName:t,args:r}=u?ej({abi:u,data:e.data,topics:e.topics,strict:c}):{eventName:void 0,args:void 0};return eM(e,{args:r,eventName:t})}catch(n){let t,r;if(n instanceof R.SM||n instanceof R.Gy){if(c)return;t=n.abiItem.name,r=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eM(e,{args:r?[]:{},eventName:t})}}).filter(Boolean)}async function eL(e,{abi:t,address:r,args:n,blockHash:i,eventName:a,fromBlock:o,toBlock:s,strict:l}){let c=a?(0,eh.mE)({abi:t,name:a}):void 0,u=c?void 0:t.filter(e=>"event"===e.type);return(0,$.s)(e,eU,"getLogs")({address:r,args:n,blockHash:i,event:c,events:u,fromBlock:o,toBlock:s,strict:l})}async function eB(e,{blockCount:t,blockNumber:r,blockTag:n="latest",rewardPercentiles:i}){var a;let o=r?(0,y.eC)(r):void 0;return{baseFeePerGas:(a=await e.request({method:"eth_feeHistory",params:[(0,y.eC)(t),o||n,i]})).baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(e=>e.map(e=>BigInt(e)))}}async function ez(e,{filter:t}){let r="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map(e=>{if("string"==typeof e)return e;try{let{eventName:n,args:i}="abi"in t&&t.abi?ej({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return eM(e,{args:i,eventName:n})}catch(i){let r,n;if(i instanceof R.SM||i instanceof R.Gy){if("strict"in t&&t.strict)return;r=i.abiItem.name,n=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eM(e,{args:n?[]:{},eventName:r})}}).filter(Boolean)}async function eF(e,{filter:t}){let r=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(e=>{try{let{eventName:n,args:i}="abi"in t&&t.abi?ej({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return eM(e,{args:i,eventName:n})}catch(i){let r,n;if(i instanceof R.SM||i instanceof R.Gy){if("strict"in t&&t.strict)return;r=i.abiItem.name,n=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eM(e,{args:n?[]:{},eventName:r})}}).filter(Boolean)}var eW=r(24453);async function eH(e,{address:t,blockNumber:r,blockTag:n,storageKeys:i}){var a;let o=void 0!==r?(0,y.eC)(r):void 0;return{...a=await e.request({method:"eth_getProof",params:[t,i,o||(n??"latest")]}),balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?(0,eI.ly)(a.nonce):void 0,storageProof:a.storageProof?a.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function eq(e,{address:t,blockNumber:r,blockTag:n="latest",slot:i}){let a=void 0!==r?(0,y.eC)(r):void 0;return await e.request({method:"eth_getStorageAt",params:[t,i,a||n]})}var eZ=r(33639),eG=r(6073);async function eV(e,{blockHash:t,blockNumber:r,blockTag:n,hash:i,index:a}){let o=n||"latest",s=void 0!==r?(0,y.eC)(r):void 0,l=null;if(i?l=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,y.eC)(a)]}):(s||o)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,(0,y.eC)(a)]})),!l)throw new eZ.Bh({blockHash:t,blockNumber:r,blockTag:o,hash:i,index:a});return(e.chain?.formatters?.transaction?.format||eG.Tr)(l)}async function eK(e,{hash:t,transactionReceipt:r}){let[n,i]=await Promise.all([(0,$.s)(e,eP,"getBlockNumber")({}),t?(0,$.s)(e,eV,"getBlockNumber")({hash:t}):void 0]),a=r?.blockNumber||i?.blockNumber;return a?n-a+1n:0n}var eY=r(86162);let eX={"0x0":"reverted","0x1":"success"};async function eQ(e,{hash:t}){let r=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!r)throw new eZ.Yb({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||function(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>eM(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,eI.ly)(e.transactionIndex):null,status:e.status?eX[e.status]:null,type:e.type?eG.c8[e.type]||e.type:null}})(r)}async function eJ(e,t){let{allowFailure:r=!0,batchSize:n,blockNumber:i,blockTag:a,contracts:o,multicallAddress:s}=t,l=n??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),c=s;if(!c){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");c=(0,w.L)({blockNumber:i,chain:e.chain,contract:"multicall3"})}let u=[[]],d=0,h=0;for(let e=0;e<o.length;e++){let{abi:t,address:n,args:i,functionName:a}=o[e];try{let e=(0,b.R)({abi:t,args:i,functionName:a});h+=(e.length-2)/2,l>0&&h>l&&u[d].length>0&&(d++,h=(e.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:e,target:n}]}catch(o){let e=N(o,{abi:t,address:n,args:i,docsPath:"/docs/contract/multicall",functionName:a});if(!r)throw e;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:n}]}}let f=await Promise.allSettled(u.map(t=>(0,$.s)(e,M,"readContract")({abi:m.F8,address:c,args:[t],blockNumber:i,blockTag:a,functionName:"aggregate3"}))),p=[];for(let e=0;e<f.length;e++){let t=f[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<u[e].length;r++)p.push({status:"failure",error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:i,success:a}=n[t],{callData:s}=u[e][t],{abi:l,address:c,functionName:d,args:h}=o[p.length];try{if("0x"===s)throw new R.wb;if(!a)throw new E.VQ({data:i});let e=(0,g.k)({abi:l,args:h,data:i,functionName:d});p.push(r?{result:e,status:"success"}:e)}catch(t){let e=N(t,{abi:l,address:c,args:h,docsPath:"/docs/contract/multicall",functionName:d});if(!r)throw e;p.push({error:e,result:void 0,status:"failure"})}}}if(p.length!==o.length)throw new C.G("multicall results mismatch");return p}async function e0(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:a,...o}){let s=o.account?(0,ew.T)(o.account):void 0,l=(0,b.R)({abi:t,args:n,functionName:a});try{let{data:s}=await (0,$.s)(e,j.R,"call")({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:r,...o});return{result:(0,g.k)({abi:t,args:n,functionName:a,data:s||"0x"}),request:{abi:t,address:r,args:n,dataSuffix:i,functionName:a,...o}}}catch(e){throw N(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/simulateContract",functionName:a,sender:s?.address})}}async function e1(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}BigInt(0),BigInt(1),BigInt(2);var e2=r(30286);async function e3(e,{address:t,hash:r,signature:n,...i}){let a=(0,O.v)(n)?n:(0,y.NC)(n);try{let{data:n}=await (0,$.s)(e,j.R,"call")({data:(0,e2.w)({abi:m.$o,args:[t,r,a],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...i});return function(e,t){let r=(0,O.v)(e)?(0,S.O0)(e):e;return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,(0,O.v)(t)?(0,S.O0)(t):t)}(n??"0x0","0x1")}catch(e){if(e instanceof E.cg)return!1;throw e}}async function e5(e,{address:t,message:r,signature:n,...i}){return e3(e,{address:t,hash:function(e,t){let r="string"==typeof e?(0,S.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,S.O0)(e.raw),n=(0,S.qX)(`Ethereum Signed Message:
${r.length}`);return(0,A.w)((0,k.zo)([n,r]),void 0)}(r),signature:n,...i})}var e6=r(71352);function e4({data:e,primaryType:t,types:r}){let n=function e({data:t,primaryType:r,types:n}){let i=[{type:"bytes32"}],a=[function({primaryType:e,types:t}){let r=(0,y.NC)(function({primaryType:e,types:t}){let r="",n=function e({primaryType:t,types:r},n=new Set){let i=t.match(/^\w*/u),a=i?.[0];if(n.has(a)||void 0===r[a])return n;for(let t of(n.add(a),r[a]))e({primaryType:t.type,types:r},n);return n}({primaryType:e,types:t});for(let i of(n.delete(e),[e,...Array.from(n).sort()]))r+=`${i}(${t[i].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:t}));return(0,A.w)(r)}({primaryType:r,types:n})];for(let o of n[r]){let[r,s]=function t({types:r,name:n,type:i,value:a}){if(void 0!==r[i])return[{type:"bytes32"},(0,A.w)(e({data:a,primaryType:i,types:r}))];if("bytes"===i){let e=a.length%2?"0":"";return a=`0x${e+a.slice(2)}`,[{type:"bytes32"},(0,A.w)(a)]}if("string"===i)return[{type:"bytes32"},(0,A.w)((0,y.NC)(a))];if(i.lastIndexOf("]")===i.length-1){let e=i.slice(0,i.lastIndexOf("[")),o=a.map(i=>t({name:n,type:e,types:r,value:i}));return[{type:"bytes32"},(0,A.w)((0,eu.E)(o.map(([e])=>e),o.map(([,e])=>e)))]}return[{type:i},a]}({types:n,name:o.name,type:o.type,value:t[o.name]});i.push(r),a.push(s)}return(0,eu.E)(i,a)}({data:e,primaryType:t,types:r});return(0,A.w)(n)}async function e8(e,{address:t,signature:r,message:n,primaryType:i,types:a,domain:o,...s}){return e3(e,{address:t,hash:function({domain:e,message:t,primaryType:r,types:n}){let i=void 0===e?{}:e,a={EIP712Domain:(0,e6.cj)({domain:i}),...n};(0,e6.iC)({domain:i,message:t,primaryType:r,types:a});let o=["0x1901"];return i&&o.push(function({domain:e,types:t}){return e4({data:e,primaryType:"EIP712Domain",types:t})}({domain:i,types:a})),"EIP712Domain"!==r&&o.push(e4({data:t,primaryType:r,types:a})),(0,A.w)((0,k.zo)(o))}({message:n,primaryType:i,types:a,domain:o}),signature:r,...s})}var e7=r(79814);let e9=new Map,te=new Map,tt=0;function tr(e,t,r){let n=++tt,i=()=>e9.get(e)||[],a=()=>{let t=i();e9.set(e,t.filter(e=>e.id!==n))},o=()=>{let t=te.get(e);1===i().length&&t&&t(),a()},s=i();if(e9.set(e,[...s,{id:n,fns:t}]),s&&s.length>0)return o;let l={};for(let e in t)l[e]=(...t)=>{let r=i();if(0!==r.length)for(let n of r)n.fns[e]?.(...t)};let c=r(l);return"function"==typeof c&&te.set(e,c),o}var tn=r(7760),ti=r(96070),ta=r(62914);function to(e,{emitOnBegin:t,initialWaitTime:r,interval:n}){let i=!0,a=()=>i=!1;return(async()=>{let o;t&&(o=await e({unpoll:a}));let s=await r?.(o)??n;await (0,ta.D)(s);let l=async()=>{i&&(await e({unpoll:a}),await (0,ta.D)(n),l())};l()})(),a}function ts(e,{emitOnBegin:t=!1,emitMissed:r=!1,onBlockNumber:n,onError:i,poll:a,pollingInterval:o=e.pollingInterval}){let s,l,c;return(void 0!==a?a:"webSocket"!==e.transport.type)?tr((0,ti.P)(["watchBlockNumber",e.uid,t,r,o]),{onBlockNumber:n,onError:i},n=>to(async()=>{try{let t=await (0,$.s)(e,eP,"getBlockNumber")({cacheTime:0});if(s){if(t===s)return;if(t-s>1&&r)for(let e=s+1n;e<t;e++)n.onBlockNumber(e,s),s=e}(!s||t>s)&&(n.onBlockNumber(t,s),s=t)}catch(e){n.onError?.(e)}},{emitOnBegin:t,interval:o})):(l=!0,c=()=>l=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!l)return;let t=(0,eI.y_)(e.result?.number);n(t,s),s=t},onError(e){i?.(e)}});c=t,l||c()}catch(e){i?.(e)}})(),c)}async function tl(e,{confirmations:t=1,hash:r,onReplaced:n,pollingInterval:i=e.pollingInterval,timeout:a}){let o,s,l;let c=(0,ti.P)(["waitForTransactionReceipt",e.uid,r]),u=!1;return new Promise((d,h)=>{a&&setTimeout(()=>h(new eZ.mc({hash:r})),a);let f=tr(c,{onReplaced:n,resolve:d,reject:h},n=>{let a=(0,$.s)(e,ts,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(i){if(u)return;let c=i,d=e=>{a(),e(),f()};try{if(l){if(t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;d(()=>n.resolve(l));return}if(o||(u=!0,await (0,tn.J)(async()=>{(o=await (0,$.s)(e,eV,"getTransaction")({hash:r})).blockNumber&&(c=o.blockNumber)},{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await (0,$.s)(e,eQ,"getTransactionReceipt")({hash:r}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;d(()=>n.resolve(l))}catch(r){if(o&&(r instanceof eZ.Bh||r instanceof eZ.Yb))try{s=o,u=!0;let r=await (0,tn.J)(()=>(0,$.s)(e,e_.Q,"getBlock")({blockNumber:c,includeTransactions:!0}),{delay:({count:e})=>200*~~(1<<e),retryCount:6,shouldRetry:({error:e})=>e instanceof e7.f});u=!1;let i=r.transactions.find(({from:e,nonce:t})=>e===s.from&&t===s.nonce);if(!i||(l=await (0,$.s)(e,eQ,"getTransactionReceipt")({hash:i.hash}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t)))return;let a="replaced";i.to===s.to&&i.value===s.value?a="repriced":i.from===i.to&&0n===i.value&&(a="cancelled"),d(()=>{n.onReplaced?.({reason:a,replacedTransaction:s,transaction:i,transactionReceipt:l}),n.resolve(l)})}catch(e){d(()=>n.reject(e))}else d(()=>n.reject(r))}}})})})}var tc=r(43310),tu=r(57331),td=r(99238);function th(e){return{call:t=>(0,j.R)(e,t),createBlockFilter:()=>es(e),createContractEventFilter:t=>em(e,t),createEventFilter:t=>eg(e,t),createPendingTransactionFilter:()=>eb(e),estimateContractGas:t=>ey(e,t),estimateGas:t=>(0,ev.Q)(e,t),getBalance:t=>eE(e,t),getBlock:t=>(0,e_.Q)(e,t),getBlockNumber:t=>eP(e,t),getBlockTransactionCount:t=>eT(e,t),getBytecode:t=>e$(e,t),getChainId:()=>(0,eR.L)(e),getContractEvents:t=>eL(e,t),getEnsAddress:t=>U(e,t),getEnsAvatar:t=>en(e,t),getEnsName:t=>ei(e,t),getEnsResolver:t=>ea(e,t),getEnsText:t=>er(e,t),getFeeHistory:t=>eB(e,t),estimateFeesPerGas:t=>(0,ex.X)(e,t),getFilterChanges:t=>ez(e,t),getFilterLogs:t=>eF(e,t),getGasPrice:()=>(0,eW.o)(e),getLogs:t=>eU(e,t),getProof:t=>eH(e,t),estimateMaxPriorityFeePerGas:t=>(0,eC._)(e,t),getStorageAt:t=>eq(e,t),getTransaction:t=>eV(e,t),getTransactionConfirmations:t=>eK(e,t),getTransactionCount:t=>(0,eY.K)(e,t),getTransactionReceipt:t=>eQ(e,t),multicall:t=>eJ(e,t),prepareTransactionRequest:t=>(0,tu.Z)(e,t),readContract:t=>M(e,t),sendRawTransaction:t=>(0,td.p)(e,t),simulateContract:t=>e0(e,t),verifyMessage:t=>e5(e,t),verifyTypedData:t=>e8(e,t),uninstallFilter:t=>e1(e,t),waitForTransactionReceipt:t=>tl(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:i,onError:a,includeTransactions:o,poll:s,pollingInterval:l=e.pollingInterval}){let c,u,d;let h=void 0!==s?s:"webSocket"!==e.transport.type,f=o??!1;return h?tr((0,ti.P)(["watchBlocks",e.uid,r,n,f,l]),{onBlock:i,onError:a},i=>to(async()=>{try{let n=await (0,$.s)(e,e_.Q,"getBlock")({blockTag:t,includeTransactions:f});if(n.number&&c?.number){if(n.number===c.number)return;if(n.number-c.number>1&&r)for(let t=c?.number+1n;t<n.number;t++){let r=await (0,$.s)(e,e_.Q,"getBlock")({blockNumber:t,includeTransactions:f});i.onBlock(r,c),c=r}}(!c?.number||"pending"===t&&!n?.number||n.number&&n.number>c.number)&&(i.onBlock(n,c),c=n)}catch(e){i.onError?.(e)}},{emitOnBegin:n,interval:l})):(u=!0,d=()=>u=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(t){if(!u)return;let r=(e.chain?.formatters?.block?.format||tc.Z)(t.result);i(r,c),c=r},onError(e){a?.(e)}});d=t,u||d()}catch(e){a?.(e)}})(),d)})(e,t),watchBlockNumber:t=>ts(e,t),watchContractEvent:t=>(function(e,{abi:t,address:r,args:n,batch:i=!0,eventName:a,onError:o,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let d,h;return(void 0!==l?l:"webSocket"!==e.transport.type)?(()=>{let l=(0,ti.P)(["watchContractEvent",r,n,i,e.uid,a,c]),d=u??!1;return tr(l,{onLogs:s,onError:o},o=>{let s,l;let u=!1,h=to(async()=>{if(!u){try{l=await (0,$.s)(e,em,"createContractEventFilter")({abi:t,address:r,args:n,eventName:a,strict:d})}catch{}u=!0;return}try{let c;if(l)c=await (0,$.s)(e,ez,"getFilterChanges")({filter:l});else{let i=await (0,$.s)(e,eP,"getBlockNumber")({});c=s&&s!==i?await (0,$.s)(e,eL,"getContractEvents")({abi:t,address:r,args:n,eventName:a,fromBlock:s+1n,toBlock:i,strict:d}):[],s=i}if(0===c.length)return;if(i)o.onLogs(c);else for(let e of c)o.onLogs([e])}catch(e){l&&e instanceof D.yR&&(u=!1),o.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,$.s)(e,e1,"uninstallFilter")({filter:l}),h()}})})():(d=!0,h=()=>d=!1,(async()=>{try{let i=a?ef({abi:t,eventName:a,args:n}):[],{unsubscribe:l}=await e.transport.subscribe({params:["logs",{address:r,topics:i}],onData(e){if(!d)return;let r=e.result;try{let{eventName:e,args:n}=ej({abi:t,data:r.data,topics:r.topics,strict:u}),i=eM(r,{args:n,eventName:e});s([i])}catch(i){let e,t;if(i instanceof R.SM||i instanceof R.Gy){if(u)return;e=i.abiItem.name,t=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let n=eM(r,{args:t?[]:{},eventName:e});s([n])}},onError(e){o?.(e)}});h=l,d||h()}catch(e){o?.(e)}})(),h)})(e,t),watchEvent:t=>(function(e,{address:t,args:r,batch:n=!0,event:i,events:a,onError:o,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let d,h;let f=void 0!==l?l:"webSocket"!==e.transport.type,p=u??!1;return f?tr((0,ti.P)(["watchEvent",t,r,n,e.uid,i,c]),{onLogs:s,onError:o},o=>{let s,l;let u=!1,d=to(async()=>{if(!u){try{l=await (0,$.s)(e,eg,"createEventFilter")({address:t,args:r,event:i,events:a,strict:p})}catch{}u=!0;return}try{let c;if(l)c=await (0,$.s)(e,ez,"getFilterChanges")({filter:l});else{let n=await (0,$.s)(e,eP,"getBlockNumber")({});c=s&&s!==n?await (0,$.s)(e,eU,"getLogs")({address:t,args:r,event:i,events:a,fromBlock:s+1n,toBlock:n}):[],s=n}if(0===c.length)return;if(n)o.onLogs(c);else for(let e of c)o.onLogs([e])}catch(e){l&&e instanceof D.yR&&(u=!1),o.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,$.s)(e,e1,"uninstallFilter")({filter:l}),d()}}):(d=!0,h=()=>d=!1,(async()=>{try{let n=a??(i?[i]:void 0),l=[];n&&(l=[n.flatMap(e=>ef({abi:[e],eventName:e.name,args:r}))],i&&(l=l[0]));let{unsubscribe:c}=await e.transport.subscribe({params:["logs",{address:t,topics:l}],onData(e){if(!d)return;let t=e.result;try{let{eventName:e,args:r}=ej({abi:n,data:t.data,topics:t.topics,strict:p}),i=eM(t,{args:r,eventName:e});s([i])}catch(i){let e,r;if(i instanceof R.SM||i instanceof R.Gy){if(u)return;e=i.abiItem.name,r=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let n=eM(t,{args:r?[]:{},eventName:e});s([n])}},onError(e){o?.(e)}});h=c,d||h()}catch(e){o?.(e)}})(),h)})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:r,onTransactions:n,poll:i,pollingInterval:a=e.pollingInterval}){let o,s;return(void 0!==i?i:"webSocket"!==e.transport.type)?tr((0,ti.P)(["watchPendingTransactions",e.uid,t,a]),{onTransactions:n,onError:r},r=>{let n;let i=to(async()=>{try{if(!n)try{n=await (0,$.s)(e,eb,"createPendingTransactionFilter")({});return}catch(e){throw i(),e}let a=await (0,$.s)(e,ez,"getFilterChanges")({filter:n});if(0===a.length)return;if(t)r.onTransactions(a);else for(let e of a)r.onTransactions([e])}catch(e){r.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{n&&await (0,$.s)(e,e1,"uninstallFilter")({filter:n}),i()}}):(o=!0,s=()=>o=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!o)return;let t=e.result;n([t])},onError(e){r?.(e)}});s=t,o||s()}catch(e){r?.(e)}})(),s)})(e,t)}}function tf(e){let{key:t="public",name:r="Public Client"}=e;return(0,p.e)({...e,key:t,name:r,type:"publicClient"}).extend(th)}var tp=r(37029),tm=r(31031);function tg(e,t={}){let{key:r="fallback",name:n="Fallback",rank:i=!1,retryCount:a,retryDelay:o}=t;return({chain:t,pollingInterval:s=4e3,timeout:l})=>{let c=e,u=()=>{},d=(0,tm.q)({key:r,name:n,async request({method:e,params:r}){let n=async(i=0)=>{let a=c[i]({chain:t,retryCount:0,timeout:l});try{let t=await a.request({method:e,params:r});return u({method:e,params:r,response:t,transport:a,status:"success"}),t}catch(t){if(u({error:t,method:e,params:r,transport:a,status:"error"}),(0,tp.y)(t)||i===c.length-1)throw t;return n(i+1)}};return n()},retryCount:a,retryDelay:o,type:"fallback"},{onResponse:e=>u=e,transports:c.map(e=>e({chain:t,retryCount:0}))});if(i){let e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:r,sampleCount:n=10,timeout:i=1e3,transports:a,weights:o={}}){let{stability:s=.7,latency:l=.3}=o,c=[],u=async()=>{let o=await Promise.all(a.map(async t=>{let r,n;let a=t({chain:e,retryCount:0,timeout:i}),o=Date.now();try{await a.request({method:"net_listening"}),n=1}catch{n=0}finally{r=Date.now()}return{latency:r-o,success:n}}));c.push(o),c.length>n&&c.shift();let d=Math.max(...c.map(e=>Math.max(...e.map(({latency:e})=>e))));r(a.map((e,t)=>{let r=c.map(e=>e[t].latency),n=r.reduce((e,t)=>e+t,0)/r.length,i=c.map(e=>e[t].success),a=i.reduce((e,t)=>e+t,0)/i.length;return 0===a?[0,t]:[l*(1-n/d)+s*a,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>a[e])),await (0,ta.D)(t),u()};u()}({chain:t,interval:e.interval??s,onTransports:e=>c=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:c,weights:e.weights})}return d}}var tb=r(78863);class tw extends C.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var tv=r(32357),ty=r(54943);function tx(e,{errorInstance:t=Error("timed out"),timeout:r,signal:n}){return new Promise((i,a)=>{(async()=>{let o;try{let s=new AbortController;r>0&&(o=setTimeout(()=>{n?s.abort():a(t)},r)),i(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&a(t),a(e)}finally{clearTimeout(o)}})()})}let tC=0;async function tE(e,{body:t,fetchOptions:r={},timeout:n=1e4}){let{headers:i,method:a,signal:o}=r;try{let s;let l=await tx(async({signal:s})=>await fetch(e,{...r,body:Array.isArray(t)?(0,ti.P)(t.map(e=>({jsonrpc:"2.0",id:e.id??tC++,...e}))):(0,ti.P)({jsonrpc:"2.0",id:t.id??tC++,...t}),headers:{...i,"Content-Type":"application/json"},method:a||"POST",signal:o||(n>0?s:void 0)}),{errorInstance:new tb.W5({body:t,url:e}),timeout:n,signal:!0});if(s=l.headers.get("Content-Type")?.startsWith("application/json")?await l.json():await l.text(),!l.ok)throw new tb.Gg({body:t,details:(0,ti.P)(s.error)||l.statusText,headers:l.headers,status:l.status,url:e});return s}catch(r){if(r instanceof tb.Gg||r instanceof tb.W5)throw r;throw new tb.Gg({body:t,details:r.message,url:e})}}let t_=new Map;async function tk(e){let t=t_.get(e);if(t)return t;let{schedule:r}=(0,tv.S)({id:e,fn:async()=>{let r=new ty.WebSocket(e),n=new Map,i=new Map,a=({data:e})=>{let t=JSON.parse(e),r="eth_subscription"===t.method,a=r?t.params.subscription:t.id,o=r?i:n,s=o.get(a);s&&s({data:e}),r||o.delete(a)},o=()=>{t_.delete(e),r.removeEventListener("close",o),r.removeEventListener("message",a)};return r.addEventListener("close",o),r.addEventListener("message",a),r.readyState===ty.WebSocket.CONNECTING&&await new Promise((e,t)=>{r&&(r.onopen=e,r.onerror=t)}),t=Object.assign(r,{requests:n,subscriptions:i}),t_.set(e,t),[t]}}),[n,[i]]=await r();return i}let tS={http:tE,webSocket:function(e,{body:t,onResponse:r}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new tb.c9({body:t,url:e.url,details:"Socket is closed."});let n=tC++,i=({data:a})=>{let o=JSON.parse(a);("number"!=typeof o.id||n===o.id)&&(r?.(o),"eth_subscribe"===t.method&&"string"==typeof o.result&&e.subscriptions.set(o.result,i),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(n,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:n})),e},webSocketAsync:async function(e,{body:t,timeout:r=1e4}){return tx(()=>new Promise(r=>tS.webSocket(e,{body:t,onResponse:r})),{errorInstance:new tb.W5({body:t,url:e.url}),timeout:r})}};var tA=r(57858),tO=r(84192);let tP=e=>(t,r,n)=>{let i=n.subscribe;return n.subscribe=(e,t,r)=>{let a=e;if(t){let i=(null==r?void 0:r.equalityFn)||Object.is,o=e(n.getState());a=r=>{let n=e(r);if(!i(o,n)){let e=o;t(o=n,e)}},(null==r?void 0:r.fireImmediately)&&t(o,o)}return i(a)},e(t,r,n)},tI=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>tI(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>tI(t)(e)}}},tT=(e,t)=>(r,n,i)=>{let a,o,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{a=s.getStorage()}catch(e){}if(!a)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},n,i);let d=tI(s.serialize),h=()=>{let e;let t=d({state:s.partialize({...n()}),version:s.version}).then(e=>a.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return t},f=i.setState;i.setState=(e,t)=>{f(e,t),h()};let p=e((...e)=>{r(...e),h()},n,i),m=()=>{var e;if(!a)return;l=!1,c.forEach(e=>e(n()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,n()))||void 0;return tI(a.getItem.bind(a))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=s.merge(e,null!=(t=n())?t:p),!0),h()}).then(()=>{null==t||t(o,void 0),l=!0,u.forEach(e=>e(o))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(a=e.getStorage())},clearStorage:()=>{null==a||a.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},m(),o||p},t$=(e,t)=>(r,n,i)=>{let a,o={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),a=null!=(n=r.getItem(e))?n:null;return a instanceof Promise?a.then(i):i(a)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=o.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...e)},n,i);let d=()=>{let e=o.partialize({...n()});return u.setItem(o.name,{state:e,version:o.version})},h=i.setState;i.setState=(e,t)=>{h(e,t),d()};let f=e((...e)=>{r(...e),d()},n,i),p=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=n())?t:f)});let i=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=n())?e:f))||void 0;return tI(u.getItem.bind(u))(o.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=o.merge(e,null!=(t=n())?t:f),!0),d()}).then(()=>{null==i||i(a,void 0),a=n(),s=!0,c.forEach(e=>e(a))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>p(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||p(),a||f},tR=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),tT(e,t)):t$(e,t),tD=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,a={setState:n,getState:i,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,i,a),a},tN=e=>e?tD(e):tD;var tj=r(15229);function tM(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,n]of e)if(!Object.is(n,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}var tU=r(45775);function tL(e,t,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:i,retryCount:a,retryDelay:o,stallTimeout:s}={}){if(!e.length)throw Error("must have at least one chain");let l=[],c={},u={};for(let r of e){let e=!1;for(let n of t){let t=n(r);t&&(e=!0,l.some(({id:e})=>e===r.id)||(l=[...l,t.chain]),c[r.id]=[...c[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:l,publicClient:({chainId:t})=>{let u=l.find(e=>e.id===t)??e[0],d=c[u.id];if(!d||!d[0])throw Error(`No providers configured for chain "${u.id}"`);return Object.assign(tf({batch:r,chain:u,transport:tg(d.map(e=>(function(e,t={}){let{batch:r,fetchOptions:n,key:i="http",name:a="HTTP JSON-RPC",retryDelay:o}=t;return({chain:s,retryCount:l,timeout:c})=>{let{batchSize:u=1e3,wait:d=0}="object"==typeof r?r:{},h=t.retryCount??l,f=c??t.timeout??1e4,p=e||s?.rpcUrls.default.http[0];if(!p)throw new tw;return(0,tm.q)({key:i,name:a,async request({method:t,params:i}){let a={method:t,params:i},{schedule:o}=(0,tv.S)({id:`${e}`,wait:d,shouldSplitBatch:e=>e.length>u,fn:e=>tS.http(p,{body:e,fetchOptions:n,timeout:f}),sort:(e,t)=>e.id-t.id}),s=async e=>r?o(e):[await tS.http(p,{body:e,fetchOptions:n,timeout:f})],[{error:l,result:c}]=await s(a);if(l)throw new tb.bs({body:a,error:l,url:p});return c},retryCount:h,retryDelay:o,timeout:f,type:"http"},{fetchOptions:n,url:e})}})(e,{timeout:s})),{rank:i,retryCount:a,retryDelay:o}),pollingInterval:n}),{chains:l})},webSocketPublicClient:({chainId:t})=>{let c=l.find(e=>e.id===t)??e[0],d=u[c.id];if(d&&d[0])return Object.assign(tf({batch:r,chain:c,transport:tg(d.map(e=>(function(e,t={}){let{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:a,retryCount:o,timeout:s})=>{let l=t.retryCount??o,c=s??t.timeout??1e4,u=e||a?.rpcUrls.default.webSocket?.[0];if(!u)throw new tw;return(0,tm.q)({key:r,name:n,async request({method:e,params:t}){let r={method:e,params:t},n=await tk(u),{error:i,result:a}=await tS.webSocketAsync(n,{body:r,timeout:c});if(i)throw new tb.bs({body:r,error:i,url:u});return a},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket:()=>tk(u),async subscribe({params:e,onData:t,onError:r}){let n=await tk(u),{result:i}=await new Promise((i,a)=>tS.webSocket(n,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){a(e.error),r?.(e.error);return}if("number"==typeof e.id){i(e);return}"eth_subscription"===e.method&&t(e.params)}}));return{subscriptionId:i,unsubscribe:async()=>new Promise(e=>tS.webSocket(n,{body:{method:"eth_unsubscribe",params:[i]},onResponse:e}))}}})}})(e,{timeout:s})),{rank:i,retryCount:a,retryDelay:o}),pollingInterval:n}),{chains:l})}}}var tB=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},tz=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},tF=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},tW=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},tH=(e,{find:t,replace:r})=>e&&t(e)?r(e):"object"!=typeof e?e:Array.isArray(e)?e.map(e=>tH(e,{find:t,replace:r})):e instanceof Object?Object.entries(e).reduce((e,[n,i])=>({...e,[n]:tH(i,{find:t,replace:r})}),{}):e;function tq(e){return tH(JSON.parse(e),{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))})}function tZ(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(tO.Bd[e])}function tG(e,t){return e.slice(0,t).join(".")||"."}function tV(e,t){let{length:r}=e;for(let n=0;n<r;++n)if(e[n]===t)return n+1;return 0}function tK(e,t,r,n){return JSON.stringify(e,function(e,t){let r="function"==typeof e,n="function"==typeof t,i=[],a=[];return function(o,s){if("object"==typeof s){if(i.length){let e=tV(i,this);0===e?i[i.length]=this:(i.splice(e),a.splice(e)),a[a.length]=o;let r=tV(i,s);if(0!==r)return n?t.call(this,o,s,tG(a,r)):`[ref=${tG(a,r)}]`}else i[0]=s,a[0]=o}return r?e.call(this,o,s):s}}((e,r)=>{let n="bigint"==typeof r?`#bigint.${r.toString()}`:r;return t?.(e,n)||n},n),r??void 0)}var tY={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function tX({deserialize:e=tq,key:t="wagmi",serialize:r=tK,storage:n}){return{...n,getItem:(r,i=null)=>{let a=n.getItem(`${t}.${r}`);try{return a?e(a):i}catch(e){return console.warn(e),i}},setItem:(e,i)=>{if(null===i)n.removeItem(`${t}.${e}`);else try{n.setItem(`${t}.${e}`,r(i))}catch(e){console.error(e)}},removeItem:e=>n.removeItem(`${t}.${e}`)}}var tQ="store",tJ=class{constructor({autoConnect:e=!1,connectors:t=[new l._],publicClient:r,storage:s=tX({storage:"undefined"!=typeof window?window.localStorage:tY}),logger:c={warn:console.warn},webSocketPublicClient:u}){let p;d(this,a),this.publicClients=new Map,this.webSocketPublicClients=new Map,d(this,n,void 0),d(this,i,void 0),this.args={autoConnect:e,connectors:t,logger:c,publicClient:r,storage:s,webSocketPublicClient:u};let m="disconnected";if(e)try{let e=s.getItem(tQ),t=e?.state?.data;m=t?.account?"reconnecting":"connecting",p=t?.chain?.id}catch(e){}let g="function"==typeof t?t():t;g.forEach(e=>e.setStorage(s)),this.store=tN(tP(tR(()=>({connectors:g,publicClient:this.getPublicClient({chainId:p}),status:m,webSocketPublicClient:this.getWebSocketPublicClient({chainId:p})}),{name:tQ,storage:s,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}))),this.storage=s,h(this,i,s?.getItem("wallet")),f(this,a,o).call(this),e&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){let t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),h(this,n,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(u(this,n))return;h(this,n,!0),this.setState(e=>({...e,status:e.data?.account?"reconnecting":"connecting"}));let e=u(this,i)?[...this.connectors].sort(e=>e.id===u(this,i)?-1:1):this.connectors,t=!1;for(let r of e){if(!r.ready||!r.isAuthorized||!await r.isAuthorized())continue;let e=await r.connect();this.setState(t=>({...t,connector:r,chains:r?.chains,data:e,status:"connected"})),t=!0;break}return t||this.setState(e=>({...e,data:void 0,status:"disconnected"})),h(this,n,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};let t="function"==typeof e?e():e;t.forEach(e=>e.setStorage(this.args.storage)),this.setState(e=>({...e,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e||(t=this.publicClients.get(e??-1)))return t;let{publicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,this.publicClients.set(e??-1,t),t}setPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(e=>({...e,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e||(t=this.webSocketPublicClients.get(e??-1)))return t;let{webSocketPublicClient:r}=this.args;return(t="function"==typeof r?r({chainId:e}):r)&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function t0(e){let t=new tJ(e);return s=t,t}function t1(){if(!s)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return s}async function t2({chainId:e,connector:t}){let r=t1(),n=r.connector;if(n&&t.id===n.id)throw new tz;try{r.setState(e=>({...e,status:"connecting"}));let n=await t.connect({chainId:e});return r.setLastUsedConnector(t.id),r.setState(e=>({...e,connector:t,chains:t?.chains,data:n,status:"connected"})),r.storage.setItem("connected",!0),{...n,connector:t}}catch(e){throw r.setState(e=>({...e,status:e.connector?"connected":"disconnected"})),e}}async function t3(){let e=t1();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}n=new WeakMap,i=new WeakMap,a=new WeakSet,o=function(){let e=e=>{this.setState(t=>({...t,data:{...t.data,...e}}))},t=()=>{this.clearState()},r=e=>{this.setState(t=>({...t,error:e}))};this.store.subscribe(({connector:e})=>e,(n,i)=>{i?.off?.("change",e),i?.off?.("disconnect",t),i?.off?.("error",r),n&&(n.on?.("change",e),n.on?.("disconnect",t),n.on?.("error",r))});let{publicClient:n,webSocketPublicClient:i}=this.args;("function"==typeof n||"function"==typeof i)&&this.store.subscribe(({data:e})=>e?.chain?.id,e=>{this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))})};var t5=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],t6=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function t4({chainId:e}={}){let t=t1();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function t8({chainId:e}={}){let t=t1();return await t.connector?.getWalletClient?.({chainId:e})||null}async function t7({chainId:e,contracts:t,blockNumber:r,blockTag:n,...i}){let a=t4({chainId:e});if(!a.chains)throw new tF;if(e&&a.chain.id!==e)throw new tB({chainId:e});return a.multicall({allowFailure:i.allowFailure??!0,blockNumber:r,blockTag:n,contracts:t})}async function t9({address:e,account:t,chainId:r,abi:n,args:i,functionName:a,blockNumber:o,blockTag:s}){return t4({chainId:r}).readContract({abi:n,address:e,account:t,functionName:a,args:i,blockNumber:o,blockTag:s})}async function re({contracts:e,blockNumber:t,blockTag:r,...n}){let{allowFailure:i=!0}=n;try{let n=t4(),a=e.reduce((e,t,r)=>{let i=t.chainId??n.chain.id;return{...e,[i]:[...e[i]||[],{contract:t,index:r}]}},{}),o=(await Promise.all(Object.entries(a).map(([e,n])=>t7({allowFailure:i,chainId:parseInt(e),contracts:n.map(({contract:e})=>e),blockNumber:t,blockTag:r})))).flat(),s=Object.values(a).flatMap(e=>e.map(({index:e})=>e));return o.reduce((e,t,r)=>(e&&(e[s[r]]=t),e),[])}catch(a){if(a instanceof E.uq)throw a;let n=()=>e.map(e=>t9({...e,blockNumber:t,blockTag:r}));if(i)return(await Promise.allSettled(n())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(n())}}async function rt({address:e,chainId:t,formatUnits:r,token:n}){let i=t1(),a=t4({chainId:t});if(n){let i=async({abi:i})=>{let a={abi:i,address:n,chainId:t},[o,s,l]=await re({allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[e]},{...a,functionName:"decimals"},{...a,functionName:"symbol"}]});return{decimals:s,formatted:(0,tj.b)(o??"0",tZ(r??s)),symbol:l,value:o}};try{return await i({abi:t5})}catch(e){if(e instanceof E.uq){let{symbol:e,...t}=await i({abi:t6});return{symbol:(0,eI.rR)((0,v.f)(e,{dir:"right"})),...t}}throw e}}let o=[...i.publicClient.chains||[],...i.chains??[]],s=await a.getBalance({address:e}),l=o.find(e=>e.id===a.chain.id);return{decimals:l?.nativeCurrency.decimals??18,formatted:(0,tj.b)(s??"0",tZ(r??18)),symbol:l?.nativeCurrency.symbol??"ETH",value:s}}function rr(){let{data:e,connector:t,status:r}=t1();switch(r){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function rn(){let e=t1(),t=e.data?.chain?.id,r=e.chains??[],n=[...e.publicClient?.chains||[],...r].find(e=>e.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...n,...e.data?.chain,id:t}:void 0,chains:r}}async function ri(e){let t=await t8();if(!t)throw new tA.N;return await t.signMessage({message:e.message})}async function ra({chainId:e}){let{connector:t}=t1();if(!t)throw new tA.N;if(!t.switchChain)throw new tW({connector:t});return t.switchChain(e)}function ro(e,{selector:t=e=>e}={}){return t1().subscribe(({data:e,connector:r,status:n})=>t({address:e?.account,connector:r,status:n}),()=>e(rr()),{equalityFn:tM})}function rs(e,{selector:t=e=>e}={}){return t1().subscribe(({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r}),()=>e(rn()),{equalityFn:tM})}async function rl({name:e,chainId:t}){let{normalize:n}=await r.e(6512).then(r.bind(r,46512)),i=t4({chainId:t});return await i.getEnsAvatar({name:n(e)})}async function rc({address:e,chainId:t}){return t4({chainId:t}).getEnsName({address:(0,tU.K)(e)})}},88598:function(e,t,r){"use strict";r.d(t,{E:function(){return o}});var n=r(27484),i=r(70660),a=r(84110);n.extend(a),n.extend(i),n.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let o={getYear:(e=new Date().toISOString())=>n(e).year(),getRelativeDateFromNow:e=>n(e).fromNow(!0)}},76472:function(e,t,r){"use strict";r.d(t,{AccountController:function(){return c},ApiController:function(){return O},fz:function(){return K},Lr:function(){return U},ConnectionController:function(){return H},ConnectorController:function(){return v},bq:function(){return o},j1:function(){return s},Xs:function(){return $},IN:function(){return j},NetworkController:function(){return E},OptionsController:function(){return k},Ie:function(){return x},RouterController:function(){return D},_4:function(){return Y},yD:function(){return Z},SnackController:function(){return B},MO:function(){return m},ThemeController:function(){return V},sl:function(){return F}});var n=r(17832);function i(e,t,r,i){let a=e[t];return(0,n.Ld)(e,()=>{let n=e[t];Object.is(a,n)||r(a=n)},i)}Symbol();let a="https://secure.web3modal.com",o={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:a,SECURE_SITE_DASHBOARD:`${a}/dashboard`,SECURE_SITE_FAVICON:`${a}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},s={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=o.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=o.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+o.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...n)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(s.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(e,t){if(!s.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},preloadImage:async e=>Promise.race([new Promise((t,r)=>{let n=new Image;n.onload=t,n.onerror=r,n.crossOrigin="anonymous",n.src=e}),s.wait(2e3)]),formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:`0.000 ${t}`},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return o.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>s.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>s.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>s.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},l=(0,n.sj)({isConnected:!1}),c={state:l,subscribe:e=>(0,n.Ld)(l,()=>e(l)),subscribeKey:(e,t)=>i(l,e,t),setIsConnected(e){l.isConnected=e},setCaipAddress(e){l.caipAddress=e,l.address=e?s.getPlainAddress(e):void 0},setBalance(e,t){l.balance=e,l.balanceSymbol=t},setProfileName(e){l.profileName=e},setProfileImage(e){l.profileImage=e},setAddressExplorerUrl(e){l.addressExplorerUrl=e},resetAccount(){l.isConnected=!1,l.caipAddress=void 0,l.address=void 0,l.balance=void 0,l.balanceSymbol=void 0,l.profileName=void 0,l.profileImage=void 0,l.addressExplorerUrl=void 0}};class u{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){let r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){let n=this.createUrl(r);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){let n=this.createUrl(r);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){let n=this.createUrl(r);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let d="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",f="@w3m/connected_wallet_image_url",p="@w3m/connected_connector",m={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(d,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(d);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(d)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=m.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(f)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(p)}catch{console.info("Unable to get Connected Connector")}}},g=(0,n.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),b={state:g,subscribeNetworkImages:e=>(0,n.Ld)(g.networkImages,()=>e(g.networkImages)),subscribeKey:(e,t)=>i(g,e,t),setWalletImage(e,t){g.walletImages[e]=t},setNetworkImage(e,t){g.networkImages[e]=t},setConnectorImage(e,t){g.connectorImages[e]=t},setTokenImage(e,t){g.tokenImages[e]=t}},w=(0,n.sj)({connectors:[]}),v={state:w,subscribeKey:(e,t)=>i(w,e,t),setConnectors(e){w.connectors=e.map(e=>(0,n.iH)(e))},addConnector(e){w.connectors.push((0,n.iH)(e))},getEmailConnector:()=>w.connectors.find(e=>"EMAIL"===e.type),getAnnouncedConnectorRdns:()=>w.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>w.connectors},y=(0,n.sj)({open:!1,selectedNetworkId:void 0}),x={state:y,subscribe:e=>(0,n.Ld)(y,()=>e(y)),set(e){Object.assign(y,{...y,...e})}},C=(0,n.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),E={state:C,subscribeKey:(e,t)=>i(C,e,t),_getClient(){if(!C._client)throw Error("NetworkController client not set");return C._client},setClient(e){C._client=(0,n.iH)(e)},setCaipNetwork(e){C.caipNetwork=e,x.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){C.caipNetwork=e,x.set({selectedNetworkId:e?.id}),C.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){C.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();C.supportsAllNetworks=e.supportsAllNetworks,C.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),C.caipNetwork=e},resetNetwork(){C.isDefaultCaipNetwork||(C.caipNetwork=void 0),C.approvedCaipNetworkIds=void 0,C.supportsAllNetworks=!0}},_=(0,n.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),k={state:_,subscribeKey:(e,t)=>i(_,e,t),setProjectId(e){_.projectId=e},setIncludeWalletIds(e){_.includeWalletIds=e},setExcludeWalletIds(e){_.excludeWalletIds=e},setFeaturedWalletIds(e){_.featuredWalletIds=e},setTokens(e){_.tokens=e},setTermsConditionsUrl(e){_.termsConditionsUrl=e},setPrivacyPolicyUrl(e){_.privacyPolicyUrl=e},setCustomWallets(e){_.customWallets=e},setEnableAnalytics(e){_.enableAnalytics=e},setSdkVersion(e){_.sdkVersion=e},setMetadata(e){_.metadata=e}},S=new u({baseUrl:s.getApiUrl()}),A=(0,n.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),O={state:A,subscribeKey:(e,t)=>i(A,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=k.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${S.baseUrl}/getWalletImage/${e}`,r=await S.getBlob({path:t,headers:O._getApiHeaders()});b.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${S.baseUrl}/public/getAssetImage/${e}`,r=await S.getBlob({path:t,headers:O._getApiHeaders()});b.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${S.baseUrl}/public/getAssetImage/${e}`,r=await S.getBlob({path:t,headers:O._getApiHeaders()});b.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=E.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>O._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=v.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>O._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=k.state;if(e?.length){let{data:t}=await S.get({path:"/getWallets",headers:O._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>O._fetchWalletImage(e))),A.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=k.state,n=[...t??[],...r??[]].filter(Boolean),{data:i,count:a}=await S.get({path:"/getWallets",headers:O._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:n?.join(",")}}),o=m.getRecentWallets(),s=i.map(e=>e.image_id).filter(Boolean),l=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>O._fetchWalletImage(e))),A.recommended=i,A.count=a??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=k.state,i=[...A.recommended.map(({id:e})=>e),...r??[],...n??[]].filter(Boolean),{data:a,count:o}=await S.get({path:"/getWallets",headers:O._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:i.join(",")}}),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...l.map(e=>O._fetchWalletImage(e)),s.wait(300)]),A.wallets=[...A.wallets,...a],A.count=o>A.count?o:A.count,A.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=k.state;A.search=[];let{data:n}=await S.get({path:"/getWallets",headers:O._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),i=n.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...i.map(e=>O._fetchWalletImage(e)),s.wait(300)]),A.search=n},prefetch(){A.prefetchPromise=Promise.race([Promise.allSettled([O.fetchFeaturedWallets(),O.fetchRecommendedWallets(),O.fetchNetworkImages(),O.fetchConnectorImages()]),s.wait(3e3)])}},P=new u({baseUrl:s.getAnalyticsUrl()}),I=["MODAL_CREATED"],T=(0,n.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),$={state:T,subscribe:e=>(0,n.Ld)(T,()=>e(T)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=k.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(I.includes(e.data.event)||"undefined"==typeof window)return;await P.post({path:"/e",headers:$._getApiHeaders(),body:{eventId:s.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){T.timestamp=Date.now(),T.data=e,k.state.enableAnalytics&&$._sendAnalyticsEvent(T)}},R=(0,n.sj)({view:"Connect",history:["Connect"]}),D={state:R,subscribeKey:(e,t)=>i(R,e,t),push(e,t){e!==R.view&&(R.view=e,R.history.push(e),R.data=t)},reset(e){R.view=e,R.history=[e]},replace(e,t){R.history.length>1&&R.history.at(-1)!==e&&(R.view=e,R.history[R.history.length-1]=e,R.data=t)},goBack(){if(R.history.length>1){R.history.pop();let[e]=R.history.slice(-1);e&&(R.view=e)}},goBackToIndex(e){if(R.history.length>1){R.history=R.history.slice(0,e+1);let[t]=R.history.slice(-1);t&&(R.view=t)}}},N=(0,n.sj)({loading:!1,open:!1}),j={state:N,subscribe:e=>(0,n.Ld)(N,()=>e(N)),subscribeKey:(e,t)=>i(N,e,t),async open(e){await O.state.prefetchPromise,e?.view?D.reset(e.view):c.state.isConnected?D.reset("Account"):D.reset("Connect"),N.open=!0,x.set({open:!0}),$.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){N.open=!1,x.set({open:!1}),$.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(e){N.loading=e}},M=new u({baseUrl:s.getBlockchainApiUrl()}),U={fetchIdentity:({caipChainId:e,address:t})=>M.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:k.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:r})=>M.get({path:`/v1/account/${e}/history?projectId=${t}`,params:r?{cursor:r}:{}})},L=(0,n.sj)({message:"",variant:"success",open:!1}),B={state:L,subscribeKey:(e,t)=>i(L,e,t),showSuccess(e){L.message=e,L.variant="success",L.open=!0},showError(e){let t=s.parseError(e);L.message=t,L.variant="error",L.open=!0},hide(){L.open=!1}},z=(0,n.sj)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),F={state:z,subscribe:e=>(0,n.Ld)(z,()=>e(z)),async fetchTransactions(e){let{projectId:t}=k.state;if(!t||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");z.loading=!0;try{let r=await U.fetchTransactions({account:e,projectId:t,cursor:z.next}),n=this.filterSpamTransactions(r.data),i=[...z.transactions,...n];z.loading=!1,z.transactions=i,z.transactionsByYear=this.groupTransactionsByYear(z.transactionsByYear,n),z.empty=0===i.length,z.next=r.next?r.next:void 0}catch(r){$.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:z.next}}),B.showError("Failed to fetch transactions"),z.loading=!1,z.empty=!0}},groupTransactionsByYear:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear();e[r]||(e[r]=[]),e[r]?.push(t)}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),resetTransactions(){z.transactions=[],z.transactionsByYear={},z.loading=!1,z.empty=!1,z.next=void 0}},W=(0,n.sj)({wcError:!1,buffering:!1}),H={state:W,subscribeKey:(e,t)=>i(W,e,t),_getClient(){if(!W._client)throw Error("ConnectionController client not set");return W._client},setClient(e){W._client=(0,n.iH)(e)},connectWalletConnect(){W.wcPromise=this._getClient().connectWalletConnect(e=>{W.wcUri=e,W.wcPairingExpiry=s.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e),m.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){W.wcUri=void 0,W.wcPairingExpiry=void 0,W.wcPromise=void 0,W.wcLinking=void 0,W.recentWallet=void 0,F.resetTransactions(),m.deleteWalletConnectDeepLink()},setWcLinking(e){W.wcLinking=e},setWcError(e){W.wcError=e,W.buffering=!1},setRecentWallet(e){W.recentWallet=e},setBuffering(e){W.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},q=(0,n.sj)({status:"uninitialized",isSiweEnabled:!1}),Z={state:q,subscribeKey:(e,t)=>i(q,e,t),subscribe:e=>(0,n.Ld)(q,()=>e(q)),_getClient(){if(!q._client)throw Error("SIWEController client not set");return q._client},async getNonce(){let e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){let t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){let t=this._getClient();return await t.verifyMessage(e)},async signIn(){let e=this._getClient();return await e.signIn()},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){q._client=(0,n.iH)(e),q.status="ready",q.isSiweEnabled=e.options.enabled},setNonce(e){q.nonce=e},setStatus(e){q.status=e},setMessage(e){q.message=e},setSession(e){q.session=e}},G=(0,n.sj)({themeMode:"dark",themeVariables:{}}),V={state:G,subscribe:e=>(0,n.Ld)(G,()=>e(G)),setThemeMode(e){G.themeMode=e},setThemeVariables(e){G.themeVariables={...G.themeVariables,...e}},getSnapshot:()=>(0,n.CO)(G)},K={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?b.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?b.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?b.state.connectorImages[e.imageId]:void 0},Y={goBackOrCloseModal(){D.state.history.length>1?D.goBack():j.close()},navigateAfterNetworkSwitch(){let{history:e}=D.state,t=e.findIndex(e=>"Networks"===e);t>=1?D.goBackToIndex(t-1):j.close()}}},90078:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var n=r(76472),i=r(22725),a=r(77996),o=r(37380),s=a.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let c="scroll-lock",u=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.caipAddress=n.AccountController.state.address,this.isSiweEnabled=n.yD.state.isSiweEnabled,this.initializeTheming(),n.ApiController.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),n.yD.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),n.AccountController.subscribe(e=>this.onNewAccountState(e))),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?a.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&"success"!==n.yD.state.status&&await n.ConnectionController.disconnect(),n.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=n.ThemeController.state,r=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){let{isConnected:t,caipAddress:r}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=r),t&&r&&this.caipAddress!==r&&(await n.yD.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{let e=await n.yD.getSession();e&&!t?await n.yD.signOut():t&&!e&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?n.RouterController.push("ConnectingSiwe"):n.IN.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,o.SB)()],u.prototype,"open",void 0),l([(0,o.SB)()],u.prototype,"caipAddress",void 0),l([(0,o.SB)()],u.prototype,"isSiweEnabled",void 0),u=l([(0,i.customElement)("w3m-modal")],u)},22725:function(e,t,r){"use strict";let n,i,a;r.r(t),r.d(t,{TransactionUtil:function(){return nt},UiHelperUtil:function(){return e7},WuiAccountButton:function(){return tu},WuiAllWalletsImage:function(){return tg},WuiAvatar:function(){return ti},WuiButton:function(){return tv},WuiCard:function(){return w},WuiCardSelect:function(){return tI},WuiCardSelectLoader:function(){return tE},WuiChip:function(){return tR},WuiConnectButton:function(){return tj},WuiCtaButton:function(){return tL},WuiEmailInput:function(){return tZ},WuiFlex:function(){return tt},WuiGrid:function(){return r5},WuiIcon:function(){return eE},WuiIconBox:function(){return ts},WuiIconLink:function(){return tK},WuiImage:function(){return eS},WuiInputElement:function(){return tQ},WuiInputNumeric:function(){return t1},WuiInputText:function(){return tW},WuiLink:function(){return t5},WuiListAccordion:function(){return rK},WuiListContent:function(){return rQ},WuiListItem:function(){return t8},WuiListWallet:function(){return rd},WuiListWalletTransaction:function(){return r1},WuiLoadingHexagon:function(){return eO},WuiLoadingSpinner:function(){return eT},WuiLoadingThumbnail:function(){return eD},WuiLogo:function(){return rp},WuiLogoSelect:function(){return rb},WuiNetworkButton:function(){return ry},WuiNetworkImage:function(){return tA},WuiNoticeCard:function(){return rZ},WuiOtp:function(){return rE},WuiQrCode:function(){return rP},WuiSearchBar:function(){return rT},WuiSeparator:function(){return r8},WuiShimmer:function(){return eM},WuiSnackbar:function(){return rD},WuiTabs:function(){return rM},WuiTag:function(){return rl},WuiText:function(){return eW},WuiTooltip:function(){return rB},WuiTransactionListItem:function(){return rn},WuiTransactionListItemLoader:function(){return ra},WuiTransactionVisual:function(){return re},WuiVisual:function(){return e4},WuiVisualThumbnail:function(){return rW},WuiWalletImage:function(){return tf},customElement:function(){return g},initializeTheming:function(){return c},setColorTheme:function(){return u},setThemeVariables:function(){return d}});var o,s,l=r(77996);function c(e,t){n=document.createElement("style"),i=document.createElement("style"),a=document.createElement("style"),n.textContent=h(e).core.cssText,i.textContent=h(e).dark.cssText,a.textContent=h(e).light.cssText,document.head.appendChild(n),document.head.appendChild(i),document.head.appendChild(a),u(t)}function u(e){i&&a&&("light"===e?(i.removeAttribute("media"),a.media="enabled"):(a.removeAttribute("media"),i.media="enabled"))}function d(e){n&&i&&a&&(n.textContent=h(e).core.cssText,i.textContent=h(e).dark.cssText,a.textContent=h(e).light.cssText)}function h(e){return{core:l.iv`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${(0,l.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,l.$m)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,l.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,l.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,l.$m)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:l.iv`
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:l.iv`
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}let f=l.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,p=l.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,m=l.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function g(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var b=l.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let w=class extends l.oi{render(){return l.dy`<slot></slot>`}};w.styles=[f,b],w=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([g("wui-card")],w);var v=r(37380),y=l.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let x=l.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,C=l.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,E=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,_=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,k=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,S=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,A=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,O=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,P=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,I=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,T=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,$=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,R=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,D=l.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,N=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,j=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,M=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,U=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,L=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,B=l.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,z=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,F=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,W=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,H=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,q=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Z=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,G=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,V=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,K=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Y=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,X=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Q=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,J=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,ee=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,et=l.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,er=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,en=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ei=l.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ea=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,eo=l.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,es=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,el=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ec=l.YP`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,eu=l.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ed=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,eh=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ef=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,ep=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,em=l.YP`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,eg=l.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,eb=l.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,ew=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,ev=l.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,ey=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var ex=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eC={allWallets:x,appStore:C,chromeStore:D,apple:E,arrowBottom:_,arrowLeft:k,arrowRight:S,arrowTop:A,browser:O,checkmark:P,chevronBottom:I,chevronLeft:T,chevronRight:$,chevronTop:R,clock:N,close:j,compass:U,coinPlaceholder:M,copy:L,cursor:B,desktop:z,disconnect:F,discord:W,etherscan:H,extension:q,externalLink:Z,facebook:G,filters:V,github:K,google:Y,helpCircle:X,infoCircle:Q,mail:J,mobile:ee,networkPlaceholder:et,nftPlaceholder:er,off:en,playStore:ei,qrCode:ea,refresh:eo,search:es,swapHorizontal:el,swapHorizontalBold:ec,swapVertical:eu,telegram:ed,twitch:eh,twitter:ef,twitterIcon:ep,verify:em,verifyFilled:eg,wallet:ew,walletConnect:ev,walletPlaceholder:eb,warningCircle:ey},eE=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,l.dy`${eC[this.name]}`}};eE.styles=[f,m,y],ex([(0,v.Cb)()],eE.prototype,"size",void 0),ex([(0,v.Cb)()],eE.prototype,"name",void 0),ex([(0,v.Cb)()],eE.prototype,"color",void 0),eE=ex([g("wui-icon")],eE);var e_=l.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,ek=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eS=class extends l.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return l.dy`<img src=${this.src} alt=${this.alt} />`}};eS.styles=[f,m,e_],ek([(0,v.Cb)()],eS.prototype,"src",void 0),ek([(0,v.Cb)()],eS.prototype,"alt",void 0),eS=ek([g("wui-image")],eS);var eA=l.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let eO=class extends l.oi{render(){return l.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eO.styles=[f,eA],eO=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([g("wui-loading-hexagon")],eO);var eP=l.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,eI=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eT=class extends l.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,l.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};eT.styles=[f,eP],eI([(0,v.Cb)()],eT.prototype,"color",void 0),eI([(0,v.Cb)()],eT.prototype,"size",void 0),eT=eI([g("wui-loading-spinner")],eT);var e$=l.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eR=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eD=class extends l.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return l.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};eD.styles=[f,e$],eR([(0,v.Cb)({type:Number})],eD.prototype,"radius",void 0),eD=eR([g("wui-loading-thumbnail")],eD);var eN=l.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,ej=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eM=class extends l.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,l.dy`<slot></slot>`}};eM.styles=[eN],ej([(0,v.Cb)()],eM.prototype,"width",void 0),ej([(0,v.Cb)()],eM.prototype,"height",void 0),ej([(0,v.Cb)()],eM.prototype,"borderRadius",void 0),eM=ej([g("wui-shimmer")],eM);var eU=r(69699),eL=r(48476);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eB=(0,eL.XM)(class extends eL.Xe{constructor(e){if(super(e),e.type!==eL.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.it)e in t||(r.remove(e),this.it.delete(e));for(let e in t){let n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return eU.Jb}});var ez=l.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,eF=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eW=class extends l.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,l.dy`<slot class=${eB(e)}></slot>`}};eW.styles=[f,ez],eF([(0,v.Cb)()],eW.prototype,"variant",void 0),eF([(0,v.Cb)()],eW.prototype,"color",void 0),eF([(0,v.Cb)()],eW.prototype,"align",void 0),eW=eF([g("wui-text")],eW);let eH=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,eq=l.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,eZ=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,eG=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eV=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eK=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eY=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eX=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,eQ=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,eJ=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,e0=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,e1=l.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,e2=l.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var e3=l.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,e5=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let e6={browser:eH,dao:eq,defi:eZ,defiAlt:eG,eth:eV,layers:eK,lock:eY,login:eX,network:eQ,nft:eJ,noun:e0,profile:e1,system:e2},e4=class extends l.oi{constructor(){super(...arguments),this.name="browser"}render(){return l.dy`${e6[this.name]}`}};e4.styles=[f,e3],e5([(0,v.Cb)()],e4.prototype,"name",void 0),e4=e5([g("wui-visual")],e4);var e8=r(35592);let e7={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:n})=>e.length<=t+r?e:"end"===n?`${e.substring(0,t)}...`:"start"===n?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),n=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${n[0]};
    --local-color-2: ${n[1]};
    --local-color-3: ${n[2]};
    --local-color-4: ${n[3]};
    --local-color-5: ${n[4]};
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var e9=l.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,te=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tt=class extends l.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e7.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e7.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e7.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e7.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e7.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e7.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e7.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e7.getSpacingStyles(this.margin,3)};
    `,l.dy`<slot></slot>`}};tt.styles=[f,e9],te([(0,v.Cb)()],tt.prototype,"flexDirection",void 0),te([(0,v.Cb)()],tt.prototype,"flexWrap",void 0),te([(0,v.Cb)()],tt.prototype,"flexBasis",void 0),te([(0,v.Cb)()],tt.prototype,"flexGrow",void 0),te([(0,v.Cb)()],tt.prototype,"flexShrink",void 0),te([(0,v.Cb)()],tt.prototype,"alignItems",void 0),te([(0,v.Cb)()],tt.prototype,"justifyContent",void 0),te([(0,v.Cb)()],tt.prototype,"columnGap",void 0),te([(0,v.Cb)()],tt.prototype,"rowGap",void 0),te([(0,v.Cb)()],tt.prototype,"gap",void 0),te([(0,v.Cb)()],tt.prototype,"padding",void 0),te([(0,v.Cb)()],tt.prototype,"margin",void 0),tt=te([g("wui-flex")],tt);var tr=l.iv`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,tn=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ti=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return l.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=e7.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};ti.styles=[f,tr],tn([(0,v.Cb)()],ti.prototype,"imageSrc",void 0),tn([(0,v.Cb)()],ti.prototype,"alt",void 0),tn([(0,v.Cb)()],ti.prototype,"address",void 0),ti=tn([g("wui-avatar")],ti);var ta=l.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,to=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ts=class extends l.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,n="gray"===this.background,i="opaque"===this.background,a="accent-100"===this.backgroundColor&&i||"success-100"===this.backgroundColor&&i||"error-100"===this.backgroundColor&&i||"inverse-100"===this.backgroundColor&&i,o=`var(--wui-color-${this.backgroundColor})`;return a?o=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(o=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${o};
       --local-bg-mix: ${a||n?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,l.dy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};ts.styles=[f,p,ta],to([(0,v.Cb)()],ts.prototype,"size",void 0),to([(0,v.Cb)()],ts.prototype,"backgroundColor",void 0),to([(0,v.Cb)()],ts.prototype,"iconColor",void 0),to([(0,v.Cb)()],ts.prototype,"iconSize",void 0),to([(0,v.Cb)()],ts.prototype,"background",void 0),to([(0,v.Cb)({type:Boolean})],ts.prototype,"border",void 0),to([(0,v.Cb)()],ts.prototype,"borderColor",void 0),to([(0,v.Cb)()],ts.prototype,"icon",void 0),ts=to([g("wui-icon-box")],ts);var tl=l.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,tc=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tu=class extends l.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return l.dy`
      <button
        ?disabled=${this.disabled}
        class=${(0,e8.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${e7.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?l.dy`<wui-image src=${this.networkSrc}></wui-image>`:l.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return l.dy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};tu.styles=[f,p,tl],tc([(0,v.Cb)()],tu.prototype,"networkSrc",void 0),tc([(0,v.Cb)()],tu.prototype,"avatarSrc",void 0),tc([(0,v.Cb)()],tu.prototype,"balance",void 0),tc([(0,v.Cb)({type:Boolean})],tu.prototype,"disabled",void 0),tc([(0,v.Cb)({type:Boolean})],tu.prototype,"isProfileName",void 0),tc([(0,v.Cb)()],tu.prototype,"address",void 0),tc([(0,v.Cb)()],tu.prototype,"charsStart",void 0),tc([(0,v.Cb)()],tu.prototype,"charsEnd",void 0),tu=tc([g("wui-account-button")],tu);var td=l.iv`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`,th=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tf=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tf.styles=[f,td],th([(0,v.Cb)()],tf.prototype,"size",void 0),th([(0,v.Cb)()],tf.prototype,"name",void 0),th([(0,v.Cb)()],tf.prototype,"imageSrc",void 0),th([(0,v.Cb)()],tf.prototype,"walletIcon",void 0),th([(0,v.Cb)({type:Boolean})],tf.prototype,"installed",void 0),th([(0,v.Cb)()],tf.prototype,"badgeSize",void 0),tf=th([g("wui-wallet-image")],tf);var tp=l.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,tm=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tg=class extends l.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return l.dy`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>l.dy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,e8.o)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>l.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};tg.styles=[f,tp],tm([(0,v.Cb)({type:Array})],tg.prototype,"walletImages",void 0),tg=tm([g("wui-all-wallets-image")],tg);var tb=l.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,tw=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tv=class extends l.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return l.dy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l.dy``}};tv.styles=[f,p,tb],tw([(0,v.Cb)()],tv.prototype,"size",void 0),tw([(0,v.Cb)({type:Boolean})],tv.prototype,"disabled",void 0),tw([(0,v.Cb)({type:Boolean})],tv.prototype,"fullWidth",void 0),tw([(0,v.Cb)({type:Boolean})],tv.prototype,"loading",void 0),tw([(0,v.Cb)()],tv.prototype,"variant",void 0),tw([(0,v.Cb)({type:Boolean})],tv.prototype,"hasIconLeft",void 0),tw([(0,v.Cb)({type:Boolean})],tv.prototype,"hasIconRight",void 0),tv=tw([g("wui-button")],tv);let ty=l.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tx=l.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,tC=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tE=class extends l.oi{constructor(){super(...arguments),this.type="wallet"}render(){return l.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?l.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ty}`:l.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tE.styles=[f,p,tx],tC([(0,v.Cb)()],tE.prototype,"type",void 0),tE=tC([g("wui-card-select-loader")],tE);let t_=l.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var tk=l.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,tS=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tA=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,l.dy`${this.templateVisual()} ${e?t_:ty}`}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tA.styles=[f,tk],tS([(0,v.Cb)()],tA.prototype,"size",void 0),tS([(0,v.Cb)()],tA.prototype,"name",void 0),tS([(0,v.Cb)()],tA.prototype,"imageSrc",void 0),tS([(0,v.Cb)({type:Boolean})],tA.prototype,"selected",void 0),tA=tS([g("wui-network-image")],tA);var tO=l.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,tP=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tI=class extends l.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return l.dy`
      <button data-selected=${(0,e8.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?l.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,e8.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:l.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,e8.o)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};tI.styles=[f,p,tO],tP([(0,v.Cb)()],tI.prototype,"name",void 0),tP([(0,v.Cb)()],tI.prototype,"type",void 0),tP([(0,v.Cb)()],tI.prototype,"imageSrc",void 0),tP([(0,v.Cb)({type:Boolean})],tI.prototype,"disabled",void 0),tP([(0,v.Cb)({type:Boolean})],tI.prototype,"selected",void 0),tP([(0,v.Cb)({type:Boolean})],tI.prototype,"installed",void 0),tI=tP([g("wui-card-select")],tI);var tT=l.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`,t$=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tR=class extends l.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return l.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:e7.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};tR.styles=[f,p,tT],t$([(0,v.Cb)()],tR.prototype,"variant",void 0),t$([(0,v.Cb)()],tR.prototype,"imageSrc",void 0),t$([(0,v.Cb)({type:Boolean})],tR.prototype,"disabled",void 0),t$([(0,v.Cb)()],tR.prototype,"icon",void 0),t$([(0,v.Cb)()],tR.prototype,"href",void 0),t$([(0,v.Cb)()],tR.prototype,"text",void 0),tR=t$([g("wui-chip")],tR);var tD=l.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,tN=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tj=class extends l.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return l.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tj.styles=[f,p,tD],tN([(0,v.Cb)()],tj.prototype,"size",void 0),tN([(0,v.Cb)({type:Boolean})],tj.prototype,"loading",void 0),tj=tN([g("wui-connect-button")],tj);var tM=l.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,tU=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tL=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tL.styles=[f,p,tM],tU([(0,v.Cb)({type:Boolean})],tL.prototype,"disabled",void 0),tU([(0,v.Cb)()],tL.prototype,"label",void 0),tU([(0,v.Cb)()],tL.prototype,"buttonLabel",void 0),tL=tU([g("wui-cta-button")],tL);var tB=r(69178),tz=l.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 10.5px var(--wui-spacing-l) 10.5px 44px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,tF=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tW=class extends l.oi{constructor(){super(...arguments),this.inputElementRef=(0,tB.V)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){let e=`wui-size-${this.size}`;return l.dy` ${this.templateIcon()}
      <input
        ${(0,tB.i)(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,e8.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${(0,e8.o)(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?l.dy`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};tW.styles=[f,p,tz],tF([(0,v.Cb)()],tW.prototype,"size",void 0),tF([(0,v.Cb)()],tW.prototype,"icon",void 0),tF([(0,v.Cb)({type:Boolean})],tW.prototype,"disabled",void 0),tF([(0,v.Cb)()],tW.prototype,"placeholder",void 0),tF([(0,v.Cb)()],tW.prototype,"type",void 0),tF([(0,v.Cb)()],tW.prototype,"keyHint",void 0),tF([(0,v.Cb)()],tW.prototype,"value",void 0),tW=tF([g("wui-input-text")],tW);var tH=l.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,tq=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tZ=class extends l.oi{constructor(){super(...arguments),this.disabled=!1}render(){return l.dy`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?l.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};tZ.styles=[f,tH],tq([(0,v.Cb)()],tZ.prototype,"errorMessage",void 0),tq([(0,v.Cb)({type:Boolean})],tZ.prototype,"disabled",void 0),tq([(0,v.Cb)()],tZ.prototype,"value",void 0),tZ=tq([g("wui-email-input")],tZ);var tG=l.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,tV=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tK=class extends l.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};tK.styles=[f,p,m,tG],tV([(0,v.Cb)()],tK.prototype,"size",void 0),tV([(0,v.Cb)({type:Boolean})],tK.prototype,"disabled",void 0),tV([(0,v.Cb)()],tK.prototype,"icon",void 0),tV([(0,v.Cb)()],tK.prototype,"iconColor",void 0),tK=tV([g("wui-icon-link")],tK);var tY=l.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,tX=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tQ=class extends l.oi{constructor(){super(...arguments),this.icon="copy"}render(){return l.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};tQ.styles=[f,p,tY],tX([(0,v.Cb)()],tQ.prototype,"icon",void 0),tQ=tX([g("wui-input-element")],tQ);var tJ=l.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }
  }
`,t0=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t1=class extends l.oi{constructor(){super(...arguments),this.disabled=!1}render(){return l.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};t1.styles=[f,p,tJ],t0([(0,v.Cb)({type:Boolean})],t1.prototype,"disabled",void 0),t1=t0([g("wui-input-numeric")],t1);var t2=l.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,t3=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t5=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};t5.styles=[f,p,t2],t3([(0,v.Cb)({type:Boolean})],t5.prototype,"disabled",void 0),t3([(0,v.Cb)()],t5.prototype,"color",void 0),t5=t3([g("wui-link")],t5);var t6=l.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,t4=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t8=class extends l.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return l.dy`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,e8.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return l.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return l.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l.dy``}chevronTemplate(){return this.chevron?l.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};t8.styles=[f,p,t6],t4([(0,v.Cb)()],t8.prototype,"icon",void 0),t4([(0,v.Cb)()],t8.prototype,"iconSize",void 0),t4([(0,v.Cb)()],t8.prototype,"variant",void 0),t4([(0,v.Cb)()],t8.prototype,"iconVariant",void 0),t4([(0,v.Cb)({type:Boolean})],t8.prototype,"disabled",void 0),t4([(0,v.Cb)()],t8.prototype,"imageSrc",void 0),t4([(0,v.Cb)()],t8.prototype,"alt",void 0),t4([(0,v.Cb)({type:Boolean})],t8.prototype,"chevron",void 0),t4([(0,v.Cb)({type:Boolean})],t8.prototype,"loading",void 0),t8=t4([g("wui-list-item")],t8),(o=s||(s={})).approve="approved",o.bought="bought",o.borrow="borrowed",o.burn="burnt",o.cancel="canceled",o.claim="claimed",o.deploy="deployed",o.deposit="deposited",o.execute="executed",o.mint="minted",o.receive="received",o.repay="repaid",o.send="sent",o.sell="sold",o.stake="staked",o.trade="swapped",o.unstake="unstaked",o.withdraw="withdrawn";var t7=l.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,t9=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let re=class extends l.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",n=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,l.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?l.dy`<div class="swap-images-container">
        ${e?.url?l.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?l.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?l.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?l.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:l.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?l.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};re.styles=[t7],t9([(0,v.Cb)()],re.prototype,"type",void 0),t9([(0,v.Cb)()],re.prototype,"status",void 0),t9([(0,v.Cb)()],re.prototype,"direction",void 0),t9([(0,v.Cb)({type:Boolean})],re.prototype,"onlyDirectionIcon",void 0),t9([(0,v.Cb)({type:Array})],re.prototype,"images",void 0),t9([(0,v.Cb)({type:Object})],re.prototype,"secondImage",void 0),re=t9([g("wui-transaction-visual")],re);var rt=l.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,rr=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rn=class extends l.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return l.dy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,e8.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,e8.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${s[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?l.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?l.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};rn.styles=[f,rt],rr([(0,v.Cb)()],rn.prototype,"type",void 0),rr([(0,v.Cb)({type:Array})],rn.prototype,"descriptions",void 0),rr([(0,v.Cb)()],rn.prototype,"date",void 0),rr([(0,v.Cb)({type:Boolean})],rn.prototype,"onlyDirectionIcon",void 0),rr([(0,v.Cb)()],rn.prototype,"status",void 0),rr([(0,v.Cb)()],rn.prototype,"direction",void 0),rr([(0,v.Cb)({type:Array})],rn.prototype,"images",void 0),rn=rr([g("wui-transaction-list-item")],rn);var ri=l.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let ra=class extends l.oi{render(){return l.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};ra.styles=[f,ri],ra=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([g("wui-transaction-list-item-loader")],ra);var ro=l.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,rs=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rl=class extends l.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,l.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};rl.styles=[f,ro],rs([(0,v.Cb)()],rl.prototype,"variant",void 0),rl=rs([g("wui-tag")],rl);var rc=l.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,ru=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rd=class extends l.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:l.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?l.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rd.styles=[f,p,rc],ru([(0,v.Cb)({type:Array})],rd.prototype,"walletImages",void 0),ru([(0,v.Cb)()],rd.prototype,"imageSrc",void 0),ru([(0,v.Cb)()],rd.prototype,"name",void 0),ru([(0,v.Cb)()],rd.prototype,"tagLabel",void 0),ru([(0,v.Cb)()],rd.prototype,"tagVariant",void 0),ru([(0,v.Cb)()],rd.prototype,"icon",void 0),ru([(0,v.Cb)()],rd.prototype,"walletIcon",void 0),ru([(0,v.Cb)({type:Boolean})],rd.prototype,"installed",void 0),ru([(0,v.Cb)({type:Boolean})],rd.prototype,"disabled",void 0),ru([(0,v.Cb)({type:Boolean})],rd.prototype,"showAllWallets",void 0),rd=ru([g("wui-list-wallet")],rd);var rh=l.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,rf=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rp=class extends l.oi{constructor(){super(...arguments),this.logo="google"}render(){return l.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rp.styles=[f,rh],rf([(0,v.Cb)()],rp.prototype,"logo",void 0),rp=rf([g("wui-logo")],rp);var rm=l.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rg=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rb=class extends l.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rb.styles=[f,p,rm],rg([(0,v.Cb)()],rb.prototype,"logo",void 0),rg([(0,v.Cb)({type:Boolean})],rb.prototype,"disabled",void 0),rb=rg([g("wui-logo-select")],rb);var rw=l.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`,rv=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ry=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return l.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc}></wui-image>`:l.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ry.styles=[f,p,rw],rv([(0,v.Cb)()],ry.prototype,"imageSrc",void 0),rv([(0,v.Cb)({type:Boolean})],ry.prototype,"disabled",void 0),ry=rv([g("wui-network-button")],ry);var rx=l.iv`
  :host {
    position: relative;
    display: block;
  }
`,rC=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rE=class extends l.oi{constructor(){super(...arguments),this.length=6,this.valueArr=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.valueArr.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):this.updateInput(n,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&(n.disabled=!1,n.focus())}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return l.dy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>l.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){let n=this.numerics[t],i=e||(n?this.getInputElement(n):void 0);i&&(i.value=r,this.valueArr=this.valueArr.map((e,n)=>n===t?r:e))}handleInput(e,t){let r=e.target,n=this.getInputElement(r);if(n){let r=n.value;"insertFromPaste"===e.inputType?this.handlePaste(n,r,t):e7.isNumber(r)&&e.data?(this.updateInput(n,t,e.data),this.focusInputField("next",t)):this.updateInput(n,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){let n=t[0];if(n&&e7.isNumber(n)){this.updateInput(e,r,n);let i=t.substring(1);if(r+1<this.length&&i.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.valueArr.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};rE.styles=[f,rx],rC([(0,v.Cb)({type:Number})],rE.prototype,"length",void 0),rC([(0,v.SB)()],rE.prototype,"valueArr",void 0),rE=rC([g("wui-otp")],rE);var r_=r(92592);function rk(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let rS={generate(e,t,r){let n="#141414",i=[],a=function(e,t){let r=Array.prototype.slice.call(r_.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),o=t/a.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(a.length-7)*o*e,c=(a.length-7)*o*t;for(let e=0;e<s.length;e+=1){let t=o*(7-2*e);i.push(l.YP`
            <rect
              fill=${2===e?n:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${n}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+o*e+2.5:c+o*e}
              y= ${0===e?r+o*e+2.5:r+o*e}
            />
          `)}});let c=Math.floor((r+25)/o),u=a.length/2-c/2,d=a.length/2+c/2-1,h=[];a.forEach((e,t)=>{e.forEach((e,r)=>{!a[t][r]||t<7&&r<7||t>a.length-8&&r<7||t<7&&r>a.length-8||t>u&&t<d&&r>u&&r<d||h.push([t*o+o/2,r*o+o/2])})});let f={};return h.forEach(([e,t])=>{f[e]?f[e]?.push(t):f[e]=[t]}),Object.entries(f).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!rk(e,t,o)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{i.push(l.YP`<circle cx=${e} cy=${t} fill=${n} r=${o/2.5} />`)})}),Object.entries(f).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>rk(e,t,o)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>rk(e,t,o)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{i.push(l.YP`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${o/1.25}
                stroke-linecap="round"
              />
            `)})}),i}};var rA=l.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,rO=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rP=class extends l.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,l.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return l.YP`
      <svg height=${e} width=${e}>
        ${rS.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:l.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rP.styles=[f,rA],rO([(0,v.Cb)()],rP.prototype,"uri",void 0),rO([(0,v.Cb)({type:Number})],rP.prototype,"size",void 0),rO([(0,v.Cb)()],rP.prototype,"theme",void 0),rO([(0,v.Cb)()],rP.prototype,"imageSrc",void 0),rO([(0,v.Cb)()],rP.prototype,"alt",void 0),rP=rO([g("wui-qr-code")],rP);var rI=l.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let rT=class extends l.oi{constructor(){super(...arguments),this.inputComponentRef=(0,tB.V)()}render(){return l.dy`
      <wui-input-text
        ${(0,tB.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};rT.styles=[f,rI],rT=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([g("wui-search-bar")],rT);var r$=l.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,rR=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rD=class extends l.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return l.dy`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};rD.styles=[f,r$],rR([(0,v.Cb)()],rD.prototype,"backgroundColor",void 0),rR([(0,v.Cb)()],rD.prototype,"iconColor",void 0),rR([(0,v.Cb)()],rD.prototype,"icon",void 0),rR([(0,v.Cb)()],rD.prototype,"message",void 0),rD=rR([g("wui-snackbar")],rD);var rN=l.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,rj=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rM=class extends l.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return l.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),a=n?.querySelector("wui-text"),o=n?.getBoundingClientRect(),s=a?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&o&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(o.width+s.width)+6}px`,n.animate([{width:`${o.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};rM.styles=[f,p,rN],rj([(0,v.Cb)({type:Array})],rM.prototype,"tabs",void 0),rj([(0,v.Cb)()],rM.prototype,"onTabChange",void 0),rj([(0,v.Cb)({type:Array})],rM.prototype,"buttons",void 0),rj([(0,v.Cb)({type:Boolean})],rM.prototype,"disabled",void 0),rj([(0,v.SB)()],rM.prototype,"activeTab",void 0),rj([(0,v.SB)()],rM.prototype,"localTabWidth",void 0),rj([(0,v.SB)()],rM.prototype,"isDense",void 0),rM=rj([g("wui-tabs")],rM);var rU=l.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,rL=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rB=class extends l.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return l.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};rB.styles=[f,p,rU],rL([(0,v.Cb)()],rB.prototype,"placement",void 0),rL([(0,v.Cb)()],rB.prototype,"message",void 0),rB=rL([g("wui-tooltip")],rB);var rz=l.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,rF=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rW=class extends l.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,l.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rW.styles=[f,rz],rF([(0,v.Cb)()],rW.prototype,"imageSrc",void 0),rF([(0,v.Cb)()],rW.prototype,"alt",void 0),rF([(0,v.Cb)({type:Boolean})],rW.prototype,"borderRadiusFull",void 0),rW=rF([g("wui-visual-thumbnail")],rW);var rH=l.iv`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`,rq=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rZ=class extends l.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l.dy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};rZ.styles=[f,p,rH],rq([(0,v.Cb)()],rZ.prototype,"label",void 0),rq([(0,v.Cb)()],rZ.prototype,"description",void 0),rq([(0,v.Cb)()],rZ.prototype,"icon",void 0),rZ=rq([g("wui-notice-card")],rZ);var rG=l.iv`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,rV=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rK=class extends l.oi{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{let e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;let t=e?.scrollHeight;t&&t>100&&(this.enableAccordion=!0,this.scrollHeightElement=t,this.requestUpdate())}},0)}render(){return l.dy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?l.dy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};rK.styles=[f,p,rG],rV([(0,v.Cb)()],rK.prototype,"textTitle",void 0),rV([(0,v.Cb)()],rK.prototype,"overflowedContent",void 0),rK=rV([g("wui-list-accordion")],rK);var rY=l.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,rX=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rQ=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return l.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?l.dy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};rQ.styles=[f,p,rY],rX([(0,v.Cb)()],rQ.prototype,"imageSrc",void 0),rX([(0,v.Cb)()],rQ.prototype,"textTitle",void 0),rX([(0,v.Cb)()],rQ.prototype,"textValue",void 0),rQ=rX([g("wui-list-content")],rQ);var rJ=l.iv`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,r0=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r1=class extends l.oi{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return l.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?l.dy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};r1.styles=[f,p,rJ],r0([(0,v.Cb)()],r1.prototype,"amount",void 0),r0([(0,v.Cb)()],r1.prototype,"networkCurreny",void 0),r0([(0,v.Cb)()],r1.prototype,"networkImageUrl",void 0),r0([(0,v.Cb)()],r1.prototype,"receiverAddress",void 0),r1=r0([g("wui-list-wallet-transaction")],r1);var r2=l.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,r3=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r5=class extends l.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e7.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e7.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e7.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e7.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e7.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e7.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e7.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e7.getSpacingStyles(this.margin,3)};
    `,l.dy`<slot></slot>`}};r5.styles=[f,r2],r3([(0,v.Cb)()],r5.prototype,"gridTemplateRows",void 0),r3([(0,v.Cb)()],r5.prototype,"gridTemplateColumns",void 0),r3([(0,v.Cb)()],r5.prototype,"justifyItems",void 0),r3([(0,v.Cb)()],r5.prototype,"alignItems",void 0),r3([(0,v.Cb)()],r5.prototype,"justifyContent",void 0),r3([(0,v.Cb)()],r5.prototype,"alignContent",void 0),r3([(0,v.Cb)()],r5.prototype,"columnGap",void 0),r3([(0,v.Cb)()],r5.prototype,"rowGap",void 0),r3([(0,v.Cb)()],r5.prototype,"gap",void 0),r3([(0,v.Cb)()],r5.prototype,"padding",void 0),r3([(0,v.Cb)()],r5.prototype,"margin",void 0),r5=r3([g("wui-grid")],r5);var r6=l.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,r4=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r8=class extends l.oi{constructor(){super(...arguments),this.text=""}render(){return l.dy`${this.template()}`}template(){return this.text?l.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};r8.styles=[f,r6],r4([(0,v.Cb)()],r8.prototype,"text",void 0),r8=r4([g("wui-separator")],r8);var r7=r(88598);let r9=["receive","deposit","borrow","claim"],ne=["withdraw","repay","burn"],nt={getTransactionGroupTitle:e=>e===r7.E.getYear()?"This Year":e,getTransactionImages(e){let[t,r]=e,n=!!t&&e?.every(e=>!!e.nft_info),i=e?.length>1;return e?.length!==2||n?i?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:nt.getTransactionTransferTokenType(e),url:nt.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null,r=!!e?.nft_info,n=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&n&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){let t=e.metadata?.operationType,r=e.transfers,n=e.transfers?.length>0,i=e.transfers?.length>1,a=n&&r?.every(e=>!!e.fungible_info),[o,s]=r,l=this.getTransferDescription(o);if(this.getTransferDescription(s),!n)return("send"===t||"receive"===t)&&a?[l=e7.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),e7.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(i)return r.map(e=>this.getTransferDescription(e));let c="";return r9.includes(t)?c="+":ne.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},68544:function(e,t,r){"use strict";let n,i,a;function o(){if(!i)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await i?.open(e)},close:async function(){await i?.close()}}}r.d(t,{OY:function(){return it},o1:function(){return ie},k_:function(){return o}}),r(67294);var s,l,c,u,d,h,f,p,m,g,b,w,v,y,x,C,E,_,k,S,A,O,P,I,T,$,R,D,N,j,M,U=r(59955),L=r(66403),B=r(76472),z=r(22725),F=r(77996),W=r(37380),H=r(35592),q=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let Z=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=B.AccountController.state.address,this.balanceVal=B.AccountController.state.balance,this.balanceSymbol=B.AccountController.state.balanceSymbol,this.profileName=B.AccountController.state.profileName,this.profileImage=B.AccountController.state.profileImage,this.network=B.NetworkController.state.caipNetwork,this.unsubscribe.push(...[B.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),B.NetworkController.subscribeKey("caipNetwork",e=>this.network=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=B.fz.getNetworkImage(this.network),t="show"===this.balance;return F.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${(0,H.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,H.o)(e)}
        avatarSrc=${(0,H.o)(this.profileImage)}
        balance=${t?B.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){B.IN.open()}};q([(0,W.Cb)({type:Boolean})],Z.prototype,"disabled",void 0),q([(0,W.Cb)()],Z.prototype,"balance",void 0),q([(0,W.Cb)()],Z.prototype,"charsStart",void 0),q([(0,W.Cb)()],Z.prototype,"charsEnd",void 0),q([(0,W.SB)()],Z.prototype,"address",void 0),q([(0,W.SB)()],Z.prototype,"balanceVal",void 0),q([(0,W.SB)()],Z.prototype,"balanceSymbol",void 0),q([(0,W.SB)()],Z.prototype,"profileName",void 0),q([(0,W.SB)()],Z.prototype,"profileImage",void 0),q([(0,W.SB)()],Z.prototype,"network",void 0),Z=q([(0,z.customElement)("w3m-account-button")],Z);var G=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let V=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=B.AccountController.state.isConnected,this.unsubscribe.push(B.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?F.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,H.o)(this.balance)}
            .charsStart=${(0,H.o)(this.charsStart)}
            .charsEnd=${(0,H.o)(this.charsEnd)}
          >
          </w3m-account-button>
        `:F.dy`
          <w3m-connect-button
            size=${(0,H.o)(this.size)}
            label=${(0,H.o)(this.label)}
            loadingLabel=${(0,H.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};G([(0,W.Cb)({type:Boolean})],V.prototype,"disabled",void 0),G([(0,W.Cb)()],V.prototype,"balance",void 0),G([(0,W.Cb)()],V.prototype,"size",void 0),G([(0,W.Cb)()],V.prototype,"label",void 0),G([(0,W.Cb)()],V.prototype,"loadingLabel",void 0),G([(0,W.Cb)()],V.prototype,"charsStart",void 0),G([(0,W.Cb)()],V.prototype,"charsEnd",void 0),G([(0,W.SB)()],V.prototype,"isAccount",void 0),V=G([(0,z.customElement)("w3m-button")],V);var K=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let Y=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=B.IN.state.open,this.loading=B.IN.state.loading,this.unsubscribe.push(B.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return F.dy`
      <wui-connect-button
        size=${(0,H.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?B.IN.close():B.IN.open()}};K([(0,W.Cb)()],Y.prototype,"size",void 0),K([(0,W.Cb)()],Y.prototype,"label",void 0),K([(0,W.Cb)()],Y.prototype,"loadingLabel",void 0),K([(0,W.SB)()],Y.prototype,"open",void 0),K([(0,W.SB)()],Y.prototype,"loading",void 0),Y=K([(0,z.customElement)("w3m-connect-button")],Y),r(90078);var X=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let Q=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=B.NetworkController.state.caipNetwork,this.connected=B.AccountController.state.isConnected,this.loading=B.IN.state.loading,this.unsubscribe.push(...[B.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),B.AccountController.subscribeKey("isConnected",e=>this.connected=e),B.IN.subscribeKey("loading",e=>this.loading=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return F.dy`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${(0,H.o)(B.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){B.IN.open({view:"Networks"})}};X([(0,W.Cb)({type:Boolean})],Q.prototype,"disabled",void 0),X([(0,W.SB)()],Q.prototype,"network",void 0),X([(0,W.SB)()],Q.prototype,"connected",void 0),X([(0,W.SB)()],Q.prototype,"loading",void 0),Q=X([(0,z.customElement)("w3m-network-button")],Q);var J=F.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,ee=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let et=class extends F.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=B.RouterController.state.view,this.unsubscribe.push(B.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return F.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return F.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return F.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return F.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return F.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return F.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return F.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return F.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return F.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return F.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return F.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return F.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return F.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return F.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return F.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return F.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return F.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return F.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return F.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return F.dy`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`}}async onViewChange(e){let{history:t}=B.RouterController.state,r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};et.styles=J,ee([(0,W.SB)()],et.prototype,"view",void 0),et=ee([(0,z.customElement)("w3m-router")],et);var er=F.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`,en=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ei=class extends F.oi{constructor(){super(),this.usubscribe=[],this.address=B.AccountController.state.address,this.profileImage=B.AccountController.state.profileImage,this.profileName=B.AccountController.state.profileName,this.balance=B.AccountController.state.balance,this.balanceSymbol=B.AccountController.state.balanceSymbol,this.network=B.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[B.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):B.IN.close()})],B.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=B.fz.getNetworkImage(this.network);return F.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,H.o)(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?z.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):z.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${B.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,H.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){let e=B.MO.getConnectedConnector(),t=B.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(B.bq.SECURE_SITE)?null:F.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){let e=B.MO.getConnectedConnector(),t=B.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;let r=t.provider.getEmail()??"";return F.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=B.AccountController.state;return e?F.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=B.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(B.j1.copyToClopboard(this.address),B.SnackController.showSuccess("Address copied"))}catch{B.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&B.RouterController.push("Networks")}onTransactions(){B.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),B.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await B.ConnectionController.disconnect(),B.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),B.IN.close()}catch{B.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),B.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=B.AccountController.state;e&&B.j1.openHref(e,"_blank")}onGoToUpgradeView(){B.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),B.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){B.RouterController.push("UpdateEmailWallet",{email:e})}};ei.styles=er,en([(0,W.SB)()],ei.prototype,"address",void 0),en([(0,W.SB)()],ei.prototype,"profileImage",void 0),en([(0,W.SB)()],ei.prototype,"profileName",void 0),en([(0,W.SB)()],ei.prototype,"balance",void 0),en([(0,W.SB)()],ei.prototype,"balanceSymbol",void 0),en([(0,W.SB)()],ei.prototype,"network",void 0),en([(0,W.SB)()],ei.prototype,"disconecting",void 0),ei=en([(0,z.customElement)("w3m-account-view")],ei);var ea=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eo=class extends F.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=B.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return F.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?F.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:F.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return B.j1.isMobile()?F.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){B.RouterController.push("ConnectingWalletConnect")}};ea([(0,W.SB)()],eo.prototype,"search",void 0),eo=ea([(0,z.customElement)("w3m-all-wallets-view")],eo);var es=F.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,el=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ec=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.connectors=B.ConnectorController.state.connectors,this.unsubscribe.push(B.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return F.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(B.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?F.dy`
      <wui-list-wallet
        imageSrc=${(0,H.o)(B.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=B.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map(e=>F.dy`
        <wui-list-wallet
          imageSrc=${(0,H.o)(B.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{featured:e}=B.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map(e=>F.dy`
        <wui-list-wallet
          imageSrc=${(0,H.o)(B.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return B.MO.getRecentWallets().map(e=>F.dy`
        <wui-list-wallet
          imageSrc=${(0,H.o)(B.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:F.dy`
        <wui-list-wallet
          imageSrc=${(0,H.o)(B.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let e=this.connectors.find(e=>"ANNOUNCED"===e.type);return this.connectors.map(t=>"INJECTED"===t.type&&B.ConnectionController.checkInstalled()?F.dy`
        <wui-list-wallet
          imageSrc=${(0,H.o)(B.fz.getConnectorImage(t))}
          .installed=${!!e}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){let e=B.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(B.bq.CONNECTOR_RDNS_MAP[t.id])?null:F.dy`
        <wui-list-wallet
          imageSrc=${(0,H.o)(B.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let e=B.ApiController.state.count+B.ApiController.state.featured.length,t=e<10?e:10*Math.floor(e/10),r=t<e?`${t}+`:`${t}`;return F.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{recommended:e}=B.ApiController.state,{customWallets:t,featuredWalletIds:r}=B.OptionsController.state,{connectors:n}=B.ConnectorController.state,i=B.MO.getRecentWallets(),a=n.filter(e=>"ANNOUNCED"===e.type);if(r||t||!e.length)return null;let o=a.length+i.length;return this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-o)).map(e=>F.dy`
        <wui-list-wallet
          imageSrc=${(0,H.o)(B.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?B.j1.isMobile()?B.RouterController.push("AllWallets"):B.RouterController.push("ConnectingWalletConnect"):B.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=B.ConnectorController.state,r=B.MO.getRecentWallets().map(e=>e.id),n=t.map(e=>e.info?.rdns).filter(Boolean);return e.filter(e=>!r.includes(e.id)&&!n.includes(e.rdns??void 0))}onAllWallets(){B.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),B.RouterController.push("AllWallets")}onConnectWallet(e){B.RouterController.push("ConnectingWalletConnect",{wallet:e})}};ec.styles=es,el([(0,W.SB)()],ec.prototype,"connectors",void 0),ec=el([(0,z.customElement)("w3m-connect-view")],ec);var eu=F.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,ed=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};class eh extends F.oi{constructor(){super(),this.wallet=B.RouterController.state.data?.wallet,this.connector=B.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=B.fz.getWalletImage(this.wallet)??B.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=B.ConnectionController.state.wcUri,this.error=B.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[B.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),B.ConnectionController.subscribeKey("wcError",e=>this.error=e),B.ConnectionController.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),F.dy`
      <wui-flex
        data-error=${(0,H.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,H.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?F.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button").animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(B.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=B.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return F.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(B.j1.copyToClopboard(this.uri),B.SnackController.showSuccess("Link copied"))}catch{B.SnackController.showError("Failed to copy")}}}eh.styles=eu,ed([(0,W.SB)()],eh.prototype,"uri",void 0),ed([(0,W.SB)()],eh.prototype,"error",void 0),ed([(0,W.SB)()],eh.prototype,"ready",void 0),ed([(0,W.SB)()],eh.prototype,"showRetry",void 0),ed([(0,W.SB)()],eh.prototype,"buffering",void 0),ed([(0,W.Cb)({type:Boolean})],eh.prototype,"isMobile",void 0),ed([(0,W.Cb)()],eh.prototype,"onRetry",void 0);let ef={INJECTED:"browser",ANNOUNCED:"browser"},ep=class extends eh{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");B.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:ef[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&B.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await B.ConnectionController.connectExternal(this.connector),B.yD.state.isSiweEnabled?B.RouterController.push("ConnectingSiwe"):B.IN.close(),B.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){B.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ep=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-connecting-external-view")],ep);var em=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eg=class extends F.oi{constructor(){super(...arguments),this.dappName=B.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return F.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,B.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{B.yD.setStatus("loading");let e=await B.yD.signIn();return B.yD.setStatus("success"),B.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return B.SnackController.showError("Signature declined"),B.yD.setStatus("error"),B.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){let{isConnected:e}=B.AccountController.state;e?(await B.ConnectionController.disconnect(),B.IN.close()):B.RouterController.push("Connect"),B.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};em([(0,W.SB)()],eg.prototype,"isSigning",void 0),eg=em([(0,z.customElement)("w3m-connecting-siwe-view")],eg);var eb=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ew=class extends F.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=B.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),B.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),F.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):F.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=B.ConnectionController.state;if(e||B.j1.isPairingExpired(t)){if(B.ConnectionController.connectWalletConnect(),this.wallet){let e=B.fz.getWalletImage(this.wallet);e&&B.MO.setConnectedWalletImageUrl(e)}else{let e=B.ConnectorController.state.connectors.find(e=>"WALLET_CONNECT"===e.type),t=B.fz.getConnectorImage(e);t&&B.MO.setConnectedWalletImageUrl(t)}await B.ConnectionController.state.wcPromise,this.finalizeConnection(),B.yD.state.isSiweEnabled?B.RouterController.push("ConnectingSiwe"):B.IN.close()}}catch(e){B.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),B.ConnectionController.setWcError(!0),B.j1.isAllowedRetry(this.lastRetry)&&(B.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=B.ConnectionController.state;e&&B.MO.setWalletConnectDeepLink(e),t&&B.MO.setWeb3ModalRecent(t),B.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,a=n?.map(({injected_id:e})=>e).filter(Boolean),o=i?[i]:a??[],s=o.length,l=B.ConnectionController.checkInstalled(o),c=s&&l,u=t&&!B.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(B.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return F.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return F.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return F.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return F.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return F.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return F.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?F.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eb([(0,W.SB)()],ew.prototype,"platform",void 0),eb([(0,W.SB)()],ew.prototype,"platforms",void 0),ew=eb([(0,z.customElement)("w3m-connecting-wc-view")],ew);let ev=class extends F.oi{constructor(){super(...arguments),this.wallet=B.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return F.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?F.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?F.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?F.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?F.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&B.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&B.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&B.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&B.j1.openHref(this.wallet.homepage,"_blank")}};ev=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-downloads-view")],ev);let ey=class extends F.oi{render(){return F.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{B.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=B.ApiController.state,{customWallets:r}=B.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map(e=>F.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,H.o)(B.fz.getWalletImage(e))}
          @click=${()=>{B.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};ey=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-get-wallet-view")],ey);var ex=F.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,eC=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eE=class extends F.oi{constructor(){super(),this.network=B.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return F.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,H.o)(B.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:F.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button").animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await B.NetworkController.switchActiveNetwork(this.network),B.yD.state.isSiweEnabled||B._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};eE.styles=ex,eC([(0,W.SB)()],eE.prototype,"showRetry",void 0),eC([(0,W.SB)()],eE.prototype,"error",void 0),eE=eC([(0,z.customElement)("w3m-network-switch-view")],eE);var e_=F.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,ek=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eS=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=B.NetworkController.state.caipNetwork,this.unsubscribe.push(B.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return F.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){B.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),B.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=B.NetworkController.state,n={};return t&&e&&(e.forEach((e,t)=>{n[e]=t}),t.sort((e,t)=>{let r=n[e.id],i=n[t.id];return void 0!==r&&void 0!==i?r-i:void 0!==r?-1:void 0!==i?1:0})),t?.map(t=>F.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${H.o(B.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=B.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=B.NetworkController.state,{data:a}=B.RouterController.state;t&&i?.id!==e.id?r?.includes(e.id)?(await B.NetworkController.switchActiveNetwork(e),B._4.navigateAfterNetworkSwitch()):n&&B.RouterController.push("SwitchNetwork",{...a,network:e}):t||(B.NetworkController.setCaipNetwork(e),B.RouterController.push("Connect"))}};eS.styles=e_,ek([(0,W.SB)()],eS.prototype,"caipNetwork",void 0),eS=ek([(0,z.customElement)("w3m-networks-view")],eS);var eA=r(88598),eO=F.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`,eP=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eI="last-transaction",eT=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=B.AccountController.state.address,this.transactions=B.sl.state.transactions,this.transactionsByYear=B.sl.state.transactionsByYear,this.loading=B.sl.state.loading,this.empty=B.sl.state.empty,this.next=B.sl.state.next,this.unsubscribe.push(...[B.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,B.sl.resetTransactions(),B.sl.fetchTransactions(e.address))}),B.sl.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})])}firstUpdated(){0===this.transactions.length&&B.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return F.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{let n=r===e.length-1,i=parseInt(t,10),a=z.TransactionUtil.getTransactionGroupTitle(i),o=this.transactionsByYear[i];return o?F.dy`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(o,n)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,t){let{date:r,descriptions:n,direction:i,isAllNFT:a,images:o,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1;return l?.length!==2||a?u?l.map((e,n)=>{let i=z.TransactionUtil.getTransferDescription(e),a=t&&n===l.length-1;return F.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${a&&this.next?eI:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[o?.[n]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`}):F.dy`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${t&&this.next?eI:""}
        status=${s}
        type=${c}
        .images=${o}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `:F.dy`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${t&&this.next?eI:""}
          status=${s}
          type=${c}
          .images=${o}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map((r,n)=>{let i=t&&n===e.length-1;return F.dy`${this.templateRenderTransaction(r,i)}`})}templateEmpty(){return F.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(F.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){let{projectId:e}=B.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(B.sl.fetchTransactions(this.address),B.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${eI}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=eA.E.getRelativeDateFromNow(e?.metadata?.minedAt),r=z.TransactionUtil.getTransactionDescriptions(e),n=e?.transfers,i=e?.transfers?.[0],a=!!i&&e?.transfers?.every(e=>!!e.nft_info),o=z.TransactionUtil.getTransactionImages(n);return{date:t,direction:i?.direction,descriptions:r,isAllNFT:a,images:o,status:e.metadata?.status,transfers:n,type:e.metadata?.operationType}}};eT.styles=eO,eP([(0,W.SB)()],eT.prototype,"address",void 0),eP([(0,W.SB)()],eT.prototype,"transactions",void 0),eP([(0,W.SB)()],eT.prototype,"transactionsByYear",void 0),eP([(0,W.SB)()],eT.prototype,"loading",void 0),eP([(0,W.SB)()],eT.prototype,"empty",void 0),eP([(0,W.SB)()],eT.prototype,"next",void 0),eT=eP([(0,z.customElement)("w3m-transactions-view")],eT);let e$=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eR=class extends F.oi{render(){return F.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${e$}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{B.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eR=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-what-is-a-network-view")],eR);let eD=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eN=class extends F.oi{render(){return F.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eD}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){B.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),B.RouterController.push("GetWallet")}};eN=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-what-is-a-wallet-view")],eN);var ej=F.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;let eM={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR"};(s=u||(u={})).assertEqual=e=>e,s.assertIs=function(e){},s.assertNever=function(e){throw Error()},s.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},s.getValidEnumValues=e=>{let t=s.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),r={};for(let n of t)r[n]=e[n];return s.objectValues(r)},s.objectValues=e=>s.objectKeys(e).map(function(t){return e[t]}),s.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},s.find=(e,t)=>{for(let r of e)if(t(r))return r},s.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,s.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},s.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(d||(d={})).mergeShapes=(e,t)=>({...e,...t});let eU=u.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),eL=e=>{switch(typeof e){case"undefined":return eU.undefined;case"string":return eU.string;case"number":return isNaN(e)?eU.nan:eU.number;case"boolean":return eU.boolean;case"function":return eU.function;case"bigint":return eU.bigint;case"symbol":return eU.symbol;case"object":if(Array.isArray(e))return eU.array;if(null===e)return eU.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return eU.promise;if("undefined"!=typeof Map&&e instanceof Map)return eU.map;if("undefined"!=typeof Set&&e instanceof Set)return eU.set;if("undefined"!=typeof Date&&e instanceof Date)return eU.date;return eU.object;default:return eU.unknown}},eB=u.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ez extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},n=e=>{for(let i of e.issues)if("invalid_union"===i.code)i.unionErrors.map(n);else if("invalid_return_type"===i.code)n(i.returnTypeError);else if("invalid_arguments"===i.code)n(i.argumentsError);else if(0===i.path.length)r._errors.push(t(i));else{let e=r,n=0;for(;n<i.path.length;){let r=i.path[n];n===i.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(i))):e[r]=e[r]||{_errors:[]},e=e[r],n++}}};return n(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,u.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let n of this.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(e(n))):r.push(e(n));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}ez.create=e=>new ez(e);let eF=(e,t)=>{let r;switch(e.code){case eB.invalid_type:r=e.received===eU.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case eB.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,u.jsonStringifyReplacer)}`;break;case eB.unrecognized_keys:r=`Unrecognized key(s) in object: ${u.joinValues(e.keys,", ")}`;break;case eB.invalid_union:r="Invalid input";break;case eB.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${u.joinValues(e.options)}`;break;case eB.invalid_enum_value:r=`Invalid enum value. Expected ${u.joinValues(e.options)}, received '${e.received}'`;break;case eB.invalid_arguments:r="Invalid function arguments";break;case eB.invalid_return_type:r="Invalid function return type";break;case eB.invalid_date:r="Invalid date";break;case eB.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:u.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case eB.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case eB.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case eB.custom:r="Invalid input";break;case eB.invalid_intersection_types:r="Intersection results could not be merged";break;case eB.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case eB.not_finite:r="Number must be finite";break;default:r=t.defaultError,u.assertNever(e)}return{message:r}},eW=eF;function eH(){return eW}let eq=e=>{let{data:t,path:r,errorMaps:n,issueData:i}=e,a=[...r,...i.path||[]],o={...i,path:a},s="";for(let e of n.filter(e=>!!e).slice().reverse())s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:i.message||s}};function eZ(e,t){let r=eq({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,eH(),eF].filter(e=>!!e)});e.common.issues.push(r)}class eG{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let n of t){if("aborted"===n.status)return eV;"dirty"===n.status&&e.dirty(),r.push(n.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t)r.push({key:await e.key,value:await e.value});return eG.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let n of t){let{key:t,value:i}=n;if("aborted"===t.status||"aborted"===i.status)return eV;"dirty"===t.status&&e.dirty(),"dirty"===i.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==i.value||n.alwaysSet)&&(r[t.value]=i.value)}return{status:e.value,value:r}}}let eV=Object.freeze({status:"aborted"}),eK=e=>({status:"dirty",value:e}),eY=e=>({status:"valid",value:e}),eX=e=>"aborted"===e.status,eQ=e=>"dirty"===e.status,eJ=e=>"valid"===e.status,e0=e=>"undefined"!=typeof Promise&&e instanceof Promise;(l=h||(h={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},l.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class e1{constructor(e,t,r,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=n}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let e2=(e,t)=>{if(eJ(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new ez(e.common.issues);return this._error=t,this._error}}};function e3(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:n,description:i}=e;if(t&&(r||n))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:i}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=n?n:t.defaultError}:{message:null!=r?r:t.defaultError},description:i}}class e5{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return eL(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:eL(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new eG,ctx:{common:e.parent.common,data:e.data,parsedType:eL(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(e0(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let n={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:eL(e)},i=this._parseSync({data:e,path:n.path,parent:n});return e2(n,i)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:eL(e)},n=this._parse({data:e,path:r.path,parent:r});return e2(r,await (e0(n)?n:Promise.resolve(n)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,n)=>{let i=e(t),a=()=>n.addIssue({code:eB.custom,...r(t)});return"undefined"!=typeof Promise&&i instanceof Promise?i.then(e=>!!e||(a(),!1)):!!i||(a(),!1)})}refinement(e,t){return this._refinement((r,n)=>!!e(r)||(n.addIssue("function"==typeof t?t(r,n):t),!1))}_refinement(e){return new t$({schema:this,typeName:f.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return tR.create(this,this._def)}nullable(){return tD.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return tm.create(this,this._def)}promise(){return tT.create(this,this._def)}or(e){return tb.create([this,e],this._def)}and(e){return ty.create(this,e,this._def)}transform(e){return new t$({...e3(this._def),schema:this,typeName:f.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new tN({...e3(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:f.ZodDefault})}brand(){return new tL({typeName:f.ZodBranded,type:this,...e3(this._def)})}catch(e){return new tj({...e3(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:f.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return tB.create(this,e)}readonly(){return tz.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let e6=/^c[^\s-]{8,}$/i,e4=/^[a-z][a-z0-9]*$/,e8=/^[0-9A-HJKMNP-TV-Z]{26}$/,e7=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,e9=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,te=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,tt=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,tr=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class tn extends e5{_parse(e){let t;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==eU.string){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.string,received:t.parsedType}),eV}let r=new eG;for(let o of this._def.checks)if("min"===o.kind)e.data.length<o.value&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if("max"===o.kind)e.data.length>o.value&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if("length"===o.kind){let n=e.data.length>o.value,i=e.data.length<o.value;(n||i)&&(t=this._getOrReturnCtx(e,t),n?eZ(t,{code:eB.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):i&&eZ(t,{code:eB.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if("email"===o.kind)e9.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"email",code:eB.invalid_string,message:o.message}),r.dirty());else if("emoji"===o.kind)n||(n=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),n.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:eB.invalid_string,message:o.message}),r.dirty());else if("uuid"===o.kind)e7.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:eB.invalid_string,message:o.message}),r.dirty());else if("cuid"===o.kind)e6.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:eB.invalid_string,message:o.message}),r.dirty());else if("cuid2"===o.kind)e4.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:eB.invalid_string,message:o.message}),r.dirty());else if("ulid"===o.kind)e8.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:eB.invalid_string,message:o.message}),r.dirty());else if("url"===o.kind)try{new URL(e.data)}catch(n){eZ(t=this._getOrReturnCtx(e,t),{validation:"url",code:eB.invalid_string,message:o.message}),r.dirty()}else if("regex"===o.kind)o.regex.lastIndex=0,o.regex.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"regex",code:eB.invalid_string,message:o.message}),r.dirty());else if("trim"===o.kind)e.data=e.data.trim();else if("includes"===o.kind)e.data.includes(o.value,o.position)||(eZ(t=this._getOrReturnCtx(e,t),{code:eB.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty());else if("toLowerCase"===o.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===o.kind)e.data=e.data.toUpperCase();else if("startsWith"===o.kind)e.data.startsWith(o.value)||(eZ(t=this._getOrReturnCtx(e,t),{code:eB.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty());else if("endsWith"===o.kind)e.data.endsWith(o.value)||(eZ(t=this._getOrReturnCtx(e,t),{code:eB.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty());else if("datetime"===o.kind)tr(o).test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{code:eB.invalid_string,validation:"datetime",message:o.message}),r.dirty());else if("ip"===o.kind){var i,a;i=e.data,("v4"===(a=o.version)||!a)&&te.test(i)||("v6"===a||!a)&&tt.test(i)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"ip",code:eB.invalid_string,message:o.message}),r.dirty())}else u.assertNever(o);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:eB.invalid_string,...h.errToObj(r)})}_addCheck(e){return new tn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...h.errToObj(e)})}url(e){return this._addCheck({kind:"url",...h.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...h.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...h.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...h.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...h.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...h.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...h.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...h.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...h.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...h.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...h.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...h.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...h.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...h.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...h.errToObj(t)})}nonempty(e){return this.min(1,h.errToObj(e))}trim(){return new tn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new tn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new tn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}tn.create=e=>{var t;return new tn({checks:[],typeName:f.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...e3(e)})};class ti extends e5{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==eU.number){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.number,received:t.parsedType}),eV}let r=new eG;for(let n of this._def.checks)"int"===n.kind?u.isInteger(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{code:eB.invalid_type,expected:"integer",received:"float",message:n.message}),r.dirty()):"min"===n.kind?(n.inclusive?e.data<n.value:e.data<=n.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),r.dirty()):"max"===n.kind?(n.inclusive?e.data>n.value:e.data>=n.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),r.dirty()):"multipleOf"===n.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,i=r>n?r:n;return parseInt(e.toFixed(i).replace(".",""))%parseInt(t.toFixed(i).replace(".",""))/Math.pow(10,i)}(e.data,n.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.not_multiple_of,multipleOf:n.value,message:n.message}),r.dirty()):"finite"===n.kind?Number.isFinite(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{code:eB.not_finite,message:n.message}),r.dirty()):u.assertNever(n);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,h.toString(t))}gt(e,t){return this.setLimit("min",e,!1,h.toString(t))}lte(e,t){return this.setLimit("max",e,!0,h.toString(t))}lt(e,t){return this.setLimit("max",e,!1,h.toString(t))}setLimit(e,t,r,n){return new ti({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:h.toString(n)}]})}_addCheck(e){return new ti({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:h.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:h.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:h.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:h.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:h.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:h.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:h.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:h.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:h.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&u.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ti.create=e=>new ti({checks:[],typeName:f.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...e3(e)});class ta extends e5{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==eU.bigint){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.bigint,received:t.parsedType}),eV}let r=new eG;for(let n of this._def.checks)"min"===n.kind?(n.inclusive?e.data<n.value:e.data<=n.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),r.dirty()):"max"===n.kind?(n.inclusive?e.data>n.value:e.data>=n.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),r.dirty()):"multipleOf"===n.kind?e.data%n.value!==BigInt(0)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.not_multiple_of,multipleOf:n.value,message:n.message}),r.dirty()):u.assertNever(n);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,h.toString(t))}gt(e,t){return this.setLimit("min",e,!1,h.toString(t))}lte(e,t){return this.setLimit("max",e,!0,h.toString(t))}lt(e,t){return this.setLimit("max",e,!1,h.toString(t))}setLimit(e,t,r,n){return new ta({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:h.toString(n)}]})}_addCheck(e){return new ta({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:h.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:h.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:h.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:h.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:h.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}ta.create=e=>{var t;return new ta({checks:[],typeName:f.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...e3(e)})};class to extends e5{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==eU.boolean){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.boolean,received:t.parsedType}),eV}return eY(e.data)}}to.create=e=>new to({typeName:f.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...e3(e)});class ts extends e5{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==eU.date){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.date,received:t.parsedType}),eV}if(isNaN(e.data.getTime()))return eZ(this._getOrReturnCtx(e),{code:eB.invalid_date}),eV;let r=new eG;for(let n of this._def.checks)"min"===n.kind?e.data.getTime()<n.value&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),r.dirty()):"max"===n.kind?e.data.getTime()>n.value&&(eZ(t=this._getOrReturnCtx(e,t),{code:eB.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),r.dirty()):u.assertNever(n);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ts({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:h.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:h.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}ts.create=e=>new ts({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:f.ZodDate,...e3(e)});class tl extends e5{_parse(e){if(this._getType(e)!==eU.symbol){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.symbol,received:t.parsedType}),eV}return eY(e.data)}}tl.create=e=>new tl({typeName:f.ZodSymbol,...e3(e)});class tc extends e5{_parse(e){if(this._getType(e)!==eU.undefined){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.undefined,received:t.parsedType}),eV}return eY(e.data)}}tc.create=e=>new tc({typeName:f.ZodUndefined,...e3(e)});class tu extends e5{_parse(e){if(this._getType(e)!==eU.null){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.null,received:t.parsedType}),eV}return eY(e.data)}}tu.create=e=>new tu({typeName:f.ZodNull,...e3(e)});class td extends e5{constructor(){super(...arguments),this._any=!0}_parse(e){return eY(e.data)}}td.create=e=>new td({typeName:f.ZodAny,...e3(e)});class th extends e5{constructor(){super(...arguments),this._unknown=!0}_parse(e){return eY(e.data)}}th.create=e=>new th({typeName:f.ZodUnknown,...e3(e)});class tf extends e5{_parse(e){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.never,received:t.parsedType}),eV}}tf.create=e=>new tf({typeName:f.ZodNever,...e3(e)});class tp extends e5{_parse(e){if(this._getType(e)!==eU.undefined){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.void,received:t.parsedType}),eV}return eY(e.data)}}tp.create=e=>new tp({typeName:f.ZodVoid,...e3(e)});class tm extends e5{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),n=this._def;if(t.parsedType!==eU.array)return eZ(t,{code:eB.invalid_type,expected:eU.array,received:t.parsedType}),eV;if(null!==n.exactLength){let e=t.data.length>n.exactLength.value,i=t.data.length<n.exactLength.value;(e||i)&&(eZ(t,{code:e?eB.too_big:eB.too_small,minimum:i?n.exactLength.value:void 0,maximum:e?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),r.dirty())}if(null!==n.minLength&&t.data.length<n.minLength.value&&(eZ(t,{code:eB.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),r.dirty()),null!==n.maxLength&&t.data.length>n.maxLength.value&&(eZ(t,{code:eB.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>n.type._parseAsync(new e1(t,e,t.path,r)))).then(e=>eG.mergeArray(r,e));let i=[...t.data].map((e,r)=>n.type._parseSync(new e1(t,e,t.path,r)));return eG.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new tm({...this._def,minLength:{value:e,message:h.toString(t)}})}max(e,t){return new tm({...this._def,maxLength:{value:e,message:h.toString(t)}})}length(e,t){return new tm({...this._def,exactLength:{value:e,message:h.toString(t)}})}nonempty(e){return this.min(1,e)}}tm.create=(e,t)=>new tm({type:e,minLength:null,maxLength:null,exactLength:null,typeName:f.ZodArray,...e3(t)});class tg extends e5{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=u.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==eU.object){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.object,received:t.parsedType}),eV}let{status:t,ctx:r}=this._processInputParams(e),{shape:n,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof tf&&"strip"===this._def.unknownKeys))for(let e in r.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=n[e],i=r.data[e];o.push({key:{status:"valid",value:e},value:t._parse(new e1(r,i,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof tf){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of a)o.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)a.length>0&&(eZ(r,{code:eB.unrecognized_keys,keys:a}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of a){let n=r.data[t];o.push({key:{status:"valid",value:t},value:e._parse(new e1(r,n,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>eG.mergeObjectSync(t,e)):eG.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(e){return h.errToObj,new tg({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var n,i,a,o;let s=null!==(a=null===(i=(n=this._def).errorMap)||void 0===i?void 0:i.call(n,t,r).message)&&void 0!==a?a:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(o=h.errToObj(e).message)&&void 0!==o?o:s}:{message:s}}}:{}})}strip(){return new tg({...this._def,unknownKeys:"strip"})}passthrough(){return new tg({...this._def,unknownKeys:"passthrough"})}extend(e){return new tg({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new tg({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:f.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new tg({...this._def,catchall:e})}pick(e){let t={};return u.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new tg({...this._def,shape:()=>t})}omit(e){let t={};return u.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new tg({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof tg){let r={};for(let n in t.shape){let i=t.shape[n];r[n]=tR.create(e(i))}return new tg({...t._def,shape:()=>r})}return t instanceof tm?new tm({...t._def,type:e(t.element)}):t instanceof tR?tR.create(e(t.unwrap())):t instanceof tD?tD.create(e(t.unwrap())):t instanceof tx?tx.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return u.objectKeys(this.shape).forEach(r=>{let n=this.shape[r];e&&!e[r]?t[r]=n:t[r]=n.optional()}),new tg({...this._def,shape:()=>t})}required(e){let t={};return u.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof tR;)e=e._def.innerType;t[r]=e}}),new tg({...this._def,shape:()=>t})}keyof(){return tO(u.objectKeys(this.shape))}}tg.create=(e,t)=>new tg({shape:()=>e,unknownKeys:"strip",catchall:tf.create(),typeName:f.ZodObject,...e3(t)}),tg.strictCreate=(e,t)=>new tg({shape:()=>e,unknownKeys:"strict",catchall:tf.create(),typeName:f.ZodObject,...e3(t)}),tg.lazycreate=(e,t)=>new tg({shape:e,unknownKeys:"strip",catchall:tf.create(),typeName:f.ZodObject,...e3(t)});class tb extends e5{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new ez(e.ctx.common.issues));return eZ(t,{code:eB.invalid_union,unionErrors:r}),eV});{let e;let n=[];for(let i of r){let r={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:r});if("valid"===a.status)return a;"dirty"!==a.status||e||(e={result:a,ctx:r}),r.common.issues.length&&n.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=n.map(e=>new ez(e));return eZ(t,{code:eB.invalid_union,unionErrors:i}),eV}}get options(){return this._def.options}}tb.create=(e,t)=>new tb({options:e,typeName:f.ZodUnion,...e3(t)});let tw=e=>{if(e instanceof tS)return tw(e.schema);if(e instanceof t$)return tw(e.innerType());if(e instanceof tA)return[e.value];if(e instanceof tP)return e.options;if(e instanceof tI)return Object.keys(e.enum);if(e instanceof tN)return tw(e._def.innerType);if(e instanceof tc)return[void 0];else if(e instanceof tu)return[null];else return null};class tv extends e5{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eU.object)return eZ(t,{code:eB.invalid_type,expected:eU.object,received:t.parsedType}),eV;let r=this.discriminator,n=t.data[r],i=this.optionsMap.get(n);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(eZ(t,{code:eB.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),eV)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let n=new Map;for(let r of t){let t=tw(r.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let i of t){if(n.has(i))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);n.set(i,r)}}return new tv({typeName:f.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n,...e3(r)})}}class ty extends e5{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),n=(e,n)=>{if(eX(e)||eX(n))return eV;let i=function e(t,r){let n=eL(t),i=eL(r);if(t===r)return{valid:!0,data:t};if(n===eU.object&&i===eU.object){let n=u.objectKeys(r),i=u.objectKeys(t).filter(e=>-1!==n.indexOf(e)),a={...t,...r};for(let n of i){let i=e(t[n],r[n]);if(!i.valid)return{valid:!1};a[n]=i.data}return{valid:!0,data:a}}if(n===eU.array&&i===eU.array){if(t.length!==r.length)return{valid:!1};let n=[];for(let i=0;i<t.length;i++){let a=e(t[i],r[i]);if(!a.valid)return{valid:!1};n.push(a.data)}return{valid:!0,data:n}}return n===eU.date&&i===eU.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,n.value);return i.valid?((eQ(e)||eQ(n))&&t.dirty(),{status:t.value,value:i.data}):(eZ(r,{code:eB.invalid_intersection_types}),eV)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>n(e,t)):n(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}ty.create=(e,t,r)=>new ty({left:e,right:t,typeName:f.ZodIntersection,...e3(r)});class tx extends e5{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eU.array)return eZ(r,{code:eB.invalid_type,expected:eU.array,received:r.parsedType}),eV;if(r.data.length<this._def.items.length)return eZ(r,{code:eB.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),eV;!this._def.rest&&r.data.length>this._def.items.length&&(eZ(r,{code:eB.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let n=[...r.data].map((e,t)=>{let n=this._def.items[t]||this._def.rest;return n?n._parse(new e1(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(n).then(e=>eG.mergeArray(t,e)):eG.mergeArray(t,n)}get items(){return this._def.items}rest(e){return new tx({...this._def,rest:e})}}tx.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new tx({items:e,typeName:f.ZodTuple,rest:null,...e3(t)})};class tC extends e5{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eU.object)return eZ(r,{code:eB.invalid_type,expected:eU.object,received:r.parsedType}),eV;let n=[],i=this._def.keyType,a=this._def.valueType;for(let e in r.data)n.push({key:i._parse(new e1(r,e,r.path,e)),value:a._parse(new e1(r,r.data[e],r.path,e))});return r.common.async?eG.mergeObjectAsync(t,n):eG.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,r){return new tC(t instanceof e5?{keyType:e,valueType:t,typeName:f.ZodRecord,...e3(r)}:{keyType:tn.create(),valueType:e,typeName:f.ZodRecord,...e3(t)})}}class tE extends e5{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eU.map)return eZ(r,{code:eB.invalid_type,expected:eU.map,received:r.parsedType}),eV;let n=this._def.keyType,i=this._def.valueType,a=[...r.data.entries()].map(([e,t],a)=>({key:n._parse(new e1(r,e,r.path,[a,"key"])),value:i._parse(new e1(r,t,r.path,[a,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of a){let n=await r.key,i=await r.value;if("aborted"===n.status||"aborted"===i.status)return eV;("dirty"===n.status||"dirty"===i.status)&&t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of a){let n=r.key,i=r.value;if("aborted"===n.status||"aborted"===i.status)return eV;("dirty"===n.status||"dirty"===i.status)&&t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}}}}tE.create=(e,t,r)=>new tE({valueType:t,keyType:e,typeName:f.ZodMap,...e3(r)});class t_ extends e5{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eU.set)return eZ(r,{code:eB.invalid_type,expected:eU.set,received:r.parsedType}),eV;let n=this._def;null!==n.minSize&&r.data.size<n.minSize.value&&(eZ(r,{code:eB.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),null!==n.maxSize&&r.data.size>n.maxSize.value&&(eZ(r,{code:eB.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let r=new Set;for(let n of e){if("aborted"===n.status)return eV;"dirty"===n.status&&t.dirty(),r.add(n.value)}return{status:t.value,value:r}}let o=[...r.data.values()].map((e,t)=>i._parse(new e1(r,e,r.path,t)));return r.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(e,t){return new t_({...this._def,minSize:{value:e,message:h.toString(t)}})}max(e,t){return new t_({...this._def,maxSize:{value:e,message:h.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}t_.create=(e,t)=>new t_({valueType:e,minSize:null,maxSize:null,typeName:f.ZodSet,...e3(t)});class tk extends e5{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eU.function)return eZ(t,{code:eB.invalid_type,expected:eU.function,received:t.parsedType}),eV;function r(e,r){return eq({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,eH(),eF].filter(e=>!!e),issueData:{code:eB.invalid_arguments,argumentsError:r}})}function n(e,r){return eq({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,eH(),eF].filter(e=>!!e),issueData:{code:eB.invalid_return_type,returnTypeError:r}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof tT){let e=this;return eY(async function(...t){let o=new ez([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(r(t,e)),o}),l=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(l,i).catch(e=>{throw o.addIssue(n(l,e)),o})})}{let e=this;return eY(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new ez([r(t,o.error)]);let s=Reflect.apply(a,this,o.data),l=e._def.returns.safeParse(s,i);if(!l.success)throw new ez([n(s,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new tk({...this._def,args:tx.create(e).rest(th.create())})}returns(e){return new tk({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new tk({args:e||tx.create([]).rest(th.create()),returns:t||th.create(),typeName:f.ZodFunction,...e3(r)})}}class tS extends e5{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}tS.create=(e,t)=>new tS({getter:e,typeName:f.ZodLazy,...e3(t)});class tA extends e5{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return eZ(t,{received:t.data,code:eB.invalid_literal,expected:this._def.value}),eV}return{status:"valid",value:e.data}}get value(){return this._def.value}}function tO(e,t){return new tP({values:e,typeName:f.ZodEnum,...e3(t)})}tA.create=(e,t)=>new tA({value:e,typeName:f.ZodLiteral,...e3(t)});class tP extends e5{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return eZ(t,{expected:u.joinValues(r),received:t.parsedType,code:eB.invalid_type}),eV}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return eZ(t,{received:t.data,code:eB.invalid_enum_value,options:r}),eV}return eY(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return tP.create(e)}exclude(e){return tP.create(this.options.filter(t=>!e.includes(t)))}}tP.create=tO;class tI extends e5{_parse(e){let t=u.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==eU.string&&r.parsedType!==eU.number){let e=u.objectValues(t);return eZ(r,{expected:u.joinValues(e),received:r.parsedType,code:eB.invalid_type}),eV}if(-1===t.indexOf(e.data)){let e=u.objectValues(t);return eZ(r,{received:r.data,code:eB.invalid_enum_value,options:e}),eV}return eY(e.data)}get enum(){return this._def.values}}tI.create=(e,t)=>new tI({values:e,typeName:f.ZodNativeEnum,...e3(t)});class tT extends e5{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==eU.promise&&!1===t.common.async?(eZ(t,{code:eB.invalid_type,expected:eU.promise,received:t.parsedType}),eV):eY((t.parsedType===eU.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}tT.create=(e,t)=>new tT({type:e,typeName:f.ZodPromise,...e3(t)});class t$ extends e5{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===f.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),n=this._def.effect||null,i={addIssue:e=>{eZ(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),"preprocess"===n.type){let e=n.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r})):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===n.type){let e=e=>{let t=n.refinement(e,i);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?eV:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let n=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===n.status?eV:("dirty"===n.status&&t.dirty(),e(n.value),{status:t.value,value:n.value})}}if("transform"===n.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>eJ(e)?Promise.resolve(n.transform(e.value,i)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!eJ(e))return e;let a=n.transform(e.value,i);if(a instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}}u.assertNever(n)}}t$.create=(e,t,r)=>new t$({schema:e,typeName:f.ZodEffects,effect:t,...e3(r)}),t$.createWithPreprocess=(e,t,r)=>new t$({schema:t,effect:{type:"preprocess",transform:e},typeName:f.ZodEffects,...e3(r)});class tR extends e5{_parse(e){return this._getType(e)===eU.undefined?eY(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tR.create=(e,t)=>new tR({innerType:e,typeName:f.ZodOptional,...e3(t)});class tD extends e5{_parse(e){return this._getType(e)===eU.null?eY(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tD.create=(e,t)=>new tD({innerType:e,typeName:f.ZodNullable,...e3(t)});class tN extends e5{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===eU.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}tN.create=(e,t)=>new tN({innerType:e,typeName:f.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...e3(t)});class tj extends e5{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},n=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return e0(n)?n.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new ez(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===n.status?n.value:this._def.catchValue({get error(){return new ez(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}tj.create=(e,t)=>new tj({innerType:e,typeName:f.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...e3(t)});class tM extends e5{_parse(e){if(this._getType(e)!==eU.nan){let t=this._getOrReturnCtx(e);return eZ(t,{code:eB.invalid_type,expected:eU.nan,received:t.parsedType}),eV}return{status:"valid",value:e.data}}}tM.create=e=>new tM({typeName:f.ZodNaN,...e3(e)});let tU=Symbol("zod_brand");class tL extends e5{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class tB extends e5{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?eV:"dirty"===e.status?(t.dirty(),eK(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?eV:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new tB({in:e,out:t,typeName:f.ZodPipeline})}}class tz extends e5{_parse(e){let t=this._def.innerType._parse(e);return eJ(t)&&(t.value=Object.freeze(t.value)),t}}tz.create=(e,t)=>new tz({innerType:e,typeName:f.ZodReadonly,...e3(t)});let tF=(e,t={},r)=>e?td.create().superRefine((n,i)=>{var a,o;if(!e(n)){let e="function"==typeof t?t(n):"string"==typeof t?{message:t}:t,s=null===(o=null!==(a=e.fatal)&&void 0!==a?a:r)||void 0===o||o;i.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):td.create(),tW={object:tg.lazycreate};(c=f||(f={})).ZodString="ZodString",c.ZodNumber="ZodNumber",c.ZodNaN="ZodNaN",c.ZodBigInt="ZodBigInt",c.ZodBoolean="ZodBoolean",c.ZodDate="ZodDate",c.ZodSymbol="ZodSymbol",c.ZodUndefined="ZodUndefined",c.ZodNull="ZodNull",c.ZodAny="ZodAny",c.ZodUnknown="ZodUnknown",c.ZodNever="ZodNever",c.ZodVoid="ZodVoid",c.ZodArray="ZodArray",c.ZodObject="ZodObject",c.ZodUnion="ZodUnion",c.ZodDiscriminatedUnion="ZodDiscriminatedUnion",c.ZodIntersection="ZodIntersection",c.ZodTuple="ZodTuple",c.ZodRecord="ZodRecord",c.ZodMap="ZodMap",c.ZodSet="ZodSet",c.ZodFunction="ZodFunction",c.ZodLazy="ZodLazy",c.ZodLiteral="ZodLiteral",c.ZodEnum="ZodEnum",c.ZodEffects="ZodEffects",c.ZodNativeEnum="ZodNativeEnum",c.ZodOptional="ZodOptional",c.ZodNullable="ZodNullable",c.ZodDefault="ZodDefault",c.ZodCatch="ZodCatch",c.ZodPromise="ZodPromise",c.ZodBranded="ZodBranded",c.ZodPipeline="ZodPipeline",c.ZodReadonly="ZodReadonly";let tH=tn.create,tq=ti.create,tZ=tM.create,tG=ta.create,tV=to.create,tK=ts.create,tY=tl.create,tX=tc.create,tQ=tu.create,tJ=td.create,t0=th.create,t1=tf.create,t2=tp.create,t3=tm.create,t5=tg.create,t6=tg.strictCreate,t4=tb.create,t8=tv.create,t7=ty.create,t9=tx.create,re=tC.create,rt=tE.create,rr=t_.create,rn=tk.create,ri=tS.create,ra=tA.create,ro=tP.create,rs=tI.create,rl=tT.create,rc=t$.create,ru=tR.create,rd=tD.create,rh=t$.createWithPreprocess,rf=tB.create;var rp=Object.freeze({__proto__:null,defaultErrorMap:eF,setErrorMap:function(e){eW=e},getErrorMap:eH,makeIssue:eq,EMPTY_PATH:[],addIssueToContext:eZ,ParseStatus:eG,INVALID:eV,DIRTY:eK,OK:eY,isAborted:eX,isDirty:eQ,isValid:eJ,isAsync:e0,get util(){return u},get objectUtil(){return d},ZodParsedType:eU,getParsedType:eL,ZodType:e5,ZodString:tn,ZodNumber:ti,ZodBigInt:ta,ZodBoolean:to,ZodDate:ts,ZodSymbol:tl,ZodUndefined:tc,ZodNull:tu,ZodAny:td,ZodUnknown:th,ZodNever:tf,ZodVoid:tp,ZodArray:tm,ZodObject:tg,ZodUnion:tb,ZodDiscriminatedUnion:tv,ZodIntersection:ty,ZodTuple:tx,ZodRecord:tC,ZodMap:tE,ZodSet:t_,ZodFunction:tk,ZodLazy:tS,ZodLiteral:tA,ZodEnum:tP,ZodNativeEnum:tI,ZodPromise:tT,ZodEffects:t$,ZodTransformer:t$,ZodOptional:tR,ZodNullable:tD,ZodDefault:tN,ZodCatch:tj,ZodNaN:tM,BRAND:tU,ZodBranded:tL,ZodPipeline:tB,ZodReadonly:tz,custom:tF,Schema:e5,ZodSchema:e5,late:tW,get ZodFirstPartyTypeKind(){return f},coerce:{string:e=>tn.create({...e,coerce:!0}),number:e=>ti.create({...e,coerce:!0}),boolean:e=>to.create({...e,coerce:!0}),bigint:e=>ta.create({...e,coerce:!0}),date:e=>ts.create({...e,coerce:!0})},any:tJ,array:t3,bigint:tG,boolean:tV,date:tK,discriminatedUnion:t8,effect:rc,enum:ro,function:rn,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>tF(t=>t instanceof e,t),intersection:t7,lazy:ri,literal:ra,map:rt,nan:tZ,nativeEnum:rs,never:t1,null:tQ,nullable:rd,number:tq,object:t5,oboolean:()=>tV().optional(),onumber:()=>tq().optional(),optional:ru,ostring:()=>tH().optional(),pipeline:rf,preprocess:rh,promise:rl,record:re,set:rr,strictObject:t6,string:tH,symbol:tY,transformer:rc,tuple:t9,undefined:tX,union:t4,unknown:t0,void:t2,NEVER:eV,ZodIssueCode:eB,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:ez});let rm=rp.object({message:rp.string()});function rg(e){return rp.literal(eM[e])}let rb=rp.object({chainId:rp.number()}),rw=rp.object({email:rp.string().email()}),rv=rp.object({otp:rp.string()}),ry=rp.object({chainId:rp.optional(rp.number())}),rx=rp.object({email:rp.string().email()}),rC=rp.object({themeMode:rp.optional(rp.enum(["light","dark"])),themeVariables:rp.optional(rp.record(rp.string(),rp.string().or(rp.number())))}),rE=rp.object({action:rp.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),r_=rp.object({email:rp.string().email(),address:rp.string(),chainId:rp.number()}),rk=rp.object({isConnected:rp.boolean()}),rS=rp.object({chainId:rp.number()}),rA=rp.object({chainId:rp.number()}),rO=rp.object({email:rp.string().email()}),rP=rp.string(),rI=rp.object({method:rp.literal("personal_sign"),params:rp.array(rp.any())}),rT=rp.object({method:rp.literal("eth_sendTransaction"),params:rp.array(rp.any())}),r$=rp.object({method:rp.literal("eth_accounts")}),rR=rp.object({method:rp.literal("eth_getBalance"),params:rp.array(rp.any())}),rD=rp.object({method:rp.literal("eth_estimateGas"),params:rp.array(rp.any())}),rN=rp.object({method:rp.literal("eth_gasPrice")}),rj=rp.object({method:rp.literal("eth_signTypedData_v4"),params:rp.array(rp.any())}),rM=rp.object({method:rp.literal("eth_blockNumber")}),rU=rp.object({method:rp.literal("eth_chainId")}),rL=rp.object({token:rp.string()}),rB={appEvent:rp.object({type:rg("APP_SWITCH_NETWORK"),payload:rb}).or(rp.object({type:rg("APP_CONNECT_EMAIL"),payload:rw})).or(rp.object({type:rg("APP_CONNECT_DEVICE")})).or(rp.object({type:rg("APP_CONNECT_OTP"),payload:rv})).or(rp.object({type:rg("APP_GET_USER"),payload:rp.optional(ry)})).or(rp.object({type:rg("APP_SIGN_OUT")})).or(rp.object({type:rg("APP_IS_CONNECTED"),payload:rp.optional(rL)})).or(rp.object({type:rg("APP_GET_CHAIN_ID")})).or(rp.object({type:rg("APP_RPC_REQUEST"),payload:rI.or(rT).or(r$).or(rR).or(rD).or(rN).or(rj).or(rM).or(rU)})).or(rp.object({type:rg("APP_UPDATE_EMAIL"),payload:rx})).or(rp.object({type:rg("APP_AWAIT_UPDATE_EMAIL")})).or(rp.object({type:rg("APP_SYNC_THEME"),payload:rC})),frameEvent:rp.object({type:rg("FRAME_SWITCH_NETWORK_ERROR"),payload:rm}).or(rp.object({type:rg("FRAME_SWITCH_NETWORK_SUCCESS"),payload:rA})).or(rp.object({type:rg("FRAME_CONNECT_EMAIL_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_CONNECT_EMAIL_SUCCESS"),payload:rE})).or(rp.object({type:rg("FRAME_CONNECT_OTP_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_CONNECT_OTP_SUCCESS")})).or(rp.object({type:rg("FRAME_CONNECT_DEVICE_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_CONNECT_DEVICE_SUCCESS")})).or(rp.object({type:rg("FRAME_GET_USER_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_GET_USER_SUCCESS"),payload:r_})).or(rp.object({type:rg("FRAME_SIGN_OUT_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_SIGN_OUT_SUCCESS")})).or(rp.object({type:rg("FRAME_IS_CONNECTED_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_IS_CONNECTED_SUCCESS"),payload:rk})).or(rp.object({type:rg("FRAME_GET_CHAIN_ID_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_GET_CHAIN_ID_SUCCESS"),payload:rS})).or(rp.object({type:rg("FRAME_RPC_REQUEST_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_RPC_REQUEST_SUCCESS"),payload:rP})).or(rp.object({type:rg("FRAME_SESSION_UPDATE"),payload:rL})).or(rp.object({type:rg("FRAME_UPDATE_EMAIL_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_UPDATE_EMAIL_SUCCESS")})).or(rp.object({type:rg("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:rO})).or(rp.object({type:rg("FRAME_SYNC_THEME_ERROR"),payload:rm})).or(rp.object({type:rg("FRAME_SYNC_THEME_SUCCESS")}))},rz={set(e,t){localStorage.setItem(`${eM.STORAGE_KEY}${e}`,t)},get:e=>localStorage.getItem(`${eM.STORAGE_KEY}${e}`),delete(e){localStorage.removeItem(`${eM.STORAGE_KEY}${e}`)}},rF=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],rW={getBlockchainApiUrl(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return rF.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){let e=rz.get(eM.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=rz.get(eM.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0}};class rH{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=rW.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{window.addEventListener("message",({data:t})=>{t.type?.includes(eM.FRAME_EVENT_KEY)&&e(rB.frameEvent.parse(t))})},onAppEvent:e=>{window.addEventListener("message",({data:t})=>{t.type?.includes(eM.APP_EVENT_KEY)&&e(rB.appEvent.parse(t))})},postAppEvent:e=>{if(!this.iframe?.contentWindow)throw Error("W3mFrame: iframe is not set");rB.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")},postFrameEvent:e=>{if(!parent)throw Error("W3mFrame: parent is not set");rB.frameEvent.parse(e),parent.postMessage(e,"*")}},this.projectId=e,this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}),t){this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}});let t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${eM.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){return Object.assign({},...[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})))}}class rq{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.syncThemeResolver=void 0,this.w3mFrame=new rH(e,!0),this.w3mFrame.events.onFrameEvent(e=>{switch(console.log("\uD83D\uDCBB received",e),e.type){case eM.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case eM.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case eM.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case eM.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case eM.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case eM.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case eM.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case eM.FRAME_GET_USER_ERROR:return this.onConnectError(e);case eM.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case eM.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case eM.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case eM.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case eM.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case eM.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case eM.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case eM.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case eM.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case eM.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case eM.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case eM.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case eM.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case eM.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(e);case eM.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(e);case eM.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case eM.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);default:return null}})}getLoginEmailUsed(){return!!rz.get(eM.EMAIL_LOGIN_USED_KEY)}getEmail(){return rz.get(eM.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,rW.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:eM.APP_CONNECT_EMAIL,payload:e}),new Promise((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_CONNECT_OTP,payload:e}),new Promise((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,rW.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:eM.APP_UPDATE_EMAIL,payload:e}),new Promise((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}})}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_AWAIT_UPDATE_EMAIL}),new Promise((e,t)=>{this.awaitUpdateEmailResolver={resolve:e,reject:t}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_SYNC_THEME,payload:e}),new Promise((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}})}async connect(e){let t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_GET_USER,payload:{chainId:t}}),new Promise((e,t)=>{this.connectResolver={resolve:e,reject:t}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((e,t)=>{this.switchChainResolver={resolve:e,reject:t}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eM.APP_RPC_REQUEST,payload:e}),new Promise((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}})}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(eM.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(eM.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===eM.FRAME_GET_USER_SUCCESS&&e()})}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){let{payload:t}=e}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.awaitUpdateEmailResolver?.resolve(e.payload)}onAwaitUpdateEmailError(e){this.awaitUpdateEmailResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}setNewLastEmailLoginTime(){rz.set(eM.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){rz.set(eM.EMAIL,e),rz.set(eM.EMAIL_LOGIN_USED_KEY,"true"),rz.delete(eM.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){rz.delete(eM.EMAIL_LOGIN_USED_KEY),rz.delete(eM.EMAIL),rz.delete(eM.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){rz.set(eM.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(rz.get(eM.LAST_USED_CHAIN_KEY))}}var rZ=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rG=class extends F.oi{constructor(){super(...arguments),this.email=B.RouterController.state.data?.email,this.emailConnector=B.ConnectorController.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=rW.getTimeToNextEmailLogin(),this.error=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw Error("w3m-email-verify-otp-view: No email provided");let e=!!this.timeoutTimeLeft;return F.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?F.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:F.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
              ></wui-otp>
              ${this.error?F.dy`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=rW.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{if(!this.loading){let t=e.detail;this.emailConnector&&6===t.length&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:t}),B.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await B.ConnectionController.connectExternal(this.emailConnector),B.IN.close(),B.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}}catch(e){B.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=B.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){let e=B.ConnectorController.getEmailConnector();if(!e||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),B.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),B.SnackController.showSuccess("Code email resent")}}catch(e){B.SnackController.showError(e)}finally{this.loading=!1}}};rG.styles=ej,rZ([(0,W.SB)()],rG.prototype,"loading",void 0),rZ([(0,W.SB)()],rG.prototype,"timeoutTimeLeft",void 0),rZ([(0,W.SB)()],rG.prototype,"error",void 0),rG=rZ([(0,z.customElement)("w3m-email-verify-otp-view")],rG);var rV=F.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,rK=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rY=class extends F.oi{constructor(){super(),this.email=B.RouterController.state.data?.email,this.emailConnector=B.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw Error("w3m-email-verify-device-view: No email connector provided");return F.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),B.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),B.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),B.RouterController.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),B.SnackController.showSuccess("Code email resent")}}catch(e){B.SnackController.showError(e)}finally{this.loading=!1}}};rY.styles=rV,rK([(0,W.SB)()],rY.prototype,"loading",void 0),rY=rK([(0,z.customElement)("w3m-email-verify-device-view")],rY);var rX=F.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,rQ=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rJ=class extends F.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(B.IN.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";let e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{let t=e?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height-10}px`,this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top+5}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),F.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};rJ.styles=rX,rQ([(0,W.SB)()],rJ.prototype,"ready",void 0),rJ=rQ([(0,z.customElement)("w3m-approve-transaction-view")],rJ);let r0=class extends F.oi{render(){return F.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${B.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${B.bq.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};r0=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-upgrade-wallet-view")],r0);var r1=r(69178),r2=F.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,r3=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r5=class extends F.oi{constructor(){super(...arguments),this.formRef=(0,r1.V)(),this.initialValue=B.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return F.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,r1.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${B.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=B.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),B.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),B.RouterController.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(e){B.SnackController.showError(e),this.loading=!1}}};r5.styles=r2,r3([(0,W.SB)()],r5.prototype,"email",void 0),r3([(0,W.SB)()],r5.prototype,"loading",void 0),r5=r3([(0,z.customElement)("w3m-update-email-wallet-view")],r5);var r6=F.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,r4=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r8=class extends F.oi{constructor(){super(),this.email=B.RouterController.state.data?.email,this.emailConnector=B.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw Error("w3m-update-email-wallet-waiting-view: No email connector provided");return F.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),B.RouterController.replace("Account"),B.SnackController.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),B.SnackController.showSuccess("Code email resent")}}catch(e){B.SnackController.showError(e)}finally{this.loading=!1}}};r8.styles=r6,r4([(0,W.SB)()],r8.prototype,"loading",void 0),r8=r4([(0,z.customElement)("w3m-update-email-wallet-waiting-view")],r8);var r7=F.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function r9(e){let{connectors:t}=B.ConnectorController.state,r=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!r[e.rdns??""]})).sort((e,t)=>Number(t.installed)-Number(e.installed))}var ne=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nt="local-paginator",nr=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!B.ApiController.state.wallets.length,this.wallets=B.ApiController.state.wallets,this.recommended=B.ApiController.state.recommended,this.featured=B.ApiController.state.featured,this.unsubscribe.push(...[B.ApiController.subscribeKey("wallets",e=>this.wallets=e),B.ApiController.subscribeKey("recommended",e=>this.recommended=e),B.ApiController.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return F.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await B.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>F.dy`
        <wui-card-select-loader type="wallet" id=${(0,H.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return r9([...this.featured,...this.recommended,...this.wallets]).map(e=>F.dy`
        <wui-card-select
          imageSrc=${(0,H.o)(B.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:n}=B.ApiController.state,i=window.innerWidth<352?3:4,a=e.length+t.length,o=Math.ceil(a/i)*i-a+i;return(o-=e.length?r.length%i:0,0===n&&r.length>0)?null:0===n||[...r,...e,...t].length<n?this.shimmerTemplate(o,nt):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${nt}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=B.ApiController.state;r.length<t&&B.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=B.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?B.RouterController.push("ConnectingExternal",{connector:r}):B.RouterController.push("ConnectingWalletConnect",{wallet:e})}};nr.styles=r7,ne([(0,W.SB)()],nr.prototype,"initial",void 0),ne([(0,W.SB)()],nr.prototype,"wallets",void 0),ne([(0,W.SB)()],nr.prototype,"recommended",void 0),ne([(0,W.SB)()],nr.prototype,"featured",void 0),nr=ne([(0,z.customElement)("w3m-all-wallets-list")],nr);var nn=F.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,ni=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let na=class extends F.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?F.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await B.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=B.ApiController.state,t=r9(e);return e.length?F.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>F.dy`
            <wui-card-select
              imageSrc=${(0,H.o)(B.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:F.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=B.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?B.RouterController.push("ConnectingExternal",{connector:r}):B.RouterController.push("ConnectingWalletConnect",{wallet:e})}};na.styles=nn,ni([(0,W.SB)()],na.prototype,"loading",void 0),ni([(0,W.Cb)()],na.prototype,"query",void 0),na=ni([(0,z.customElement)("w3m-all-wallets-search")],na);var no=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ns=class extends F.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(B.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return F.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};no([(0,W.Cb)({type:Array})],ns.prototype,"platforms",void 0),no([(0,W.Cb)()],ns.prototype,"onSelectPlatfrom",void 0),no([(0,W.SB)()],ns.prototype,"buffering",void 0),ns=no([(0,z.customElement)("w3m-connecting-header")],ns);let nl=class extends eh{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),B.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=B.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await B.ConnectionController.connectExternal(t):r&&await B.ConnectionController.connectExternal(r),B.IN.close(),B.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){B.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};nl=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-connecting-wc-browser")],nl);let nc=class extends eh{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),B.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=B.j1.formatNativeUrl(e,this.uri);B.ConnectionController.setWcLinking({name:t,href:n}),B.ConnectionController.setRecentWallet(this.wallet),B.j1.openHref(r,"_self")}catch{this.error=!0}}};nc=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-connecting-wc-desktop")],nc);let nu=class extends eh{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),B.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=B.j1.formatNativeUrl(e,this.uri);B.ConnectionController.setWcLinking({name:t,href:n}),B.ConnectionController.setRecentWallet(this.wallet),B.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=B.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(B.ConnectionController.setBuffering(!0),setTimeout(()=>{B.ConnectionController.setBuffering(!1)},5e3))}};nu=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-connecting-wc-mobile")],nu);var nd=F.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let nh=class extends eh{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),B.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),F.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return B.ConnectionController.setWcLinking(void 0),B.ConnectionController.setRecentWallet(this.wallet),F.dy` <wui-qr-code
      size=${e}
      theme=${B.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,H.o)(B.fz.getWalletImage(this.wallet))}
      alt=${(0,H.o)(t)}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return F.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};nh.styles=nd,nh=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-connecting-wc-qrcode")],nh);var nf=F.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let np=class extends F.oi{constructor(){super(...arguments),this.dappImageUrl=B.OptionsController.state.metadata?.icons,this.walletImageUrl=B.MO.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return F.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};np.styles=nf,np=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-connecting-siwe")],np);let nm=class extends F.oi{constructor(){if(super(),this.wallet=B.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");B.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return F.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,H.o)(B.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};nm=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-connecting-wc-unsupported")],nm);let ng=class extends eh{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",B.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=B.j1.formatUniversalUrl(e,this.uri);B.ConnectionController.setWcLinking({name:t,href:n}),B.ConnectionController.setRecentWallet(this.wallet),B.j1.openHref(r,"_blank")}catch{this.error=!0}}};ng=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-connecting-wc-web")],ng);var nb=F.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,nw=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};function nv(){let e=B.RouterController.state.data?.connector?.name,t=B.RouterController.state.data?.wallet?.name,r=B.RouterController.state.data?.network?.name,n=t??e,i=B.ConnectorController.getConnectors(),a=1===i.length&&i[0]?.id==="w3m-email";return{Connect:`Connect ${a?"Email":""} Wallet`,Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:n?`Get ${n}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let ny=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.heading=nv()[B.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(B.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),B.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return F.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){B.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),B.RouterController.push("WhatIsAWallet")}async onClose(){B.yD.state.isSiweEnabled&&"success"!==B.yD.state.status&&await B.ConnectionController.disconnect(),B.IN.close()}titleTemplate(){return F.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=B.RouterController.state;return this.showBack&&"ApproveTransaction"!==e?F.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:F.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?F.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=nv()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=B.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===B.RouterController.state.view?B.RouterController.push("Connect"):B.RouterController.goBack()}};ny.styles=[nb],nw([(0,W.SB)()],ny.prototype,"heading",void 0),nw([(0,W.SB)()],ny.prototype,"buffering",void 0),nw([(0,W.SB)()],ny.prototype,"showBack",void 0),ny=nw([(0,z.customElement)("w3m-header")],ny);var nx=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nC=class extends F.oi{constructor(){super(...arguments),this.data=[]}render(){return F.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>F.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>F.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};nx([(0,W.Cb)({type:Array})],nC.prototype,"data",void 0),nC=nx([(0,z.customElement)("w3m-help-widget")],nC);var nE=F.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let n_=class extends F.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=B.OptionsController.state;return e||t?F.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=B.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=B.OptionsController.state;return e?F.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=B.OptionsController.state;return e?F.dy`<a href=${e}>Privacy Policy</a>`:null}};n_.styles=[nE],n_=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,z.customElement)("w3m-legal-footer")],n_);var nk=F.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,nS=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nA=class extends F.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:n,homepage:i}=this.wallet,a=B.j1.isMobile(),o=B.j1.isIos(),s=B.j1.isAndroid(),l=[t,r,i,n].filter(Boolean).length>1,c=z.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!a?F.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>B.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?F.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&o?F.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?F.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&B.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&B.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&B.j1.openHref(this.wallet.homepage,"_blank")}};nA.styles=[nk],nS([(0,W.Cb)({type:Object})],nA.prototype,"wallet",void 0),nA=nS([(0,z.customElement)("w3m-mobile-download-links")],nA);var nO=F.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,nP=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nI={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},nT=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=B.SnackController.state.open,this.unsubscribe.push(B.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=B.SnackController.state,r=nI[t];return F.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>B.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};nT.styles=nO,nP([(0,W.SB)()],nT.prototype,"open",void 0),nT=nP([(0,z.customElement)("w3m-snackbar")],nT);var n$=F.iv`
  :host {
    padding: var(--wui-spacing-3xs) 0;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: var(--wui-spacing-m);
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 20px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`,nR=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nD=class extends F.oi{constructor(){super(),this.unsubscribe=[],this.formRef=(0,r1.V)(),this.connectors=B.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(B.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.length>1,t=this.connectors.find(e=>"EMAIL"===e.type),r=!this.loading&&this.email.length>3;return t?F.dy`
      <form ${(0,r1.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${r?F.dy`
              <wui-icon-link
                size="sm"
                icon="chevronRight"
                iconcolor="accent-100"
                @click=${this.onSubmitEmail.bind(this)}
              >
              </wui-icon-link>
            `:null}
        ${this.loading?F.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}

        <input type="submit" hidden />
      </form>

      ${e?F.dy`<wui-separator text="or"></wui-separator>`:null}
    `:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=B.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-email-login-widget: Email connector not found");let{action:r}=await t.provider.connectEmail({email:this.email});B.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(B.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),B.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&B.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=B.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":B.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){B.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};nD.styles=n$,nR([(0,W.SB)()],nD.prototype,"connectors",void 0),nR([(0,W.SB)()],nD.prototype,"email",void 0),nR([(0,W.SB)()],nD.prototype,"loading",void 0),nR([(0,W.SB)()],nD.prototype,"error",void 0),nD=nR([(0,z.customElement)("w3m-email-login-widget")],nD);let nN=!1;class nj{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{B.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{B.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{B.AccountController.setBalance(e,t)},this.setProfileName=e=>{B.AccountController.setProfileName(e)},this.setProfileImage=e=>{B.AccountController.setProfileImage(e)},this.resetAccount=()=>{B.AccountController.resetAccount()},this.setCaipNetwork=e=>{B.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>B.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{B.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>B.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{B.NetworkController.resetNetwork()},this.setConnectors=e=>{B.ConnectorController.setConnectors(e)},this.addConnector=e=>{B.ConnectorController.addConnector(e)},this.getConnectors=()=>B.ConnectorController.getConnectors(),this.resetWcConnection=()=>{B.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>B.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{B.AccountController.setAddressExplorerUrl(e)},this.setSIWENonce=e=>{B.yD.setNonce(e)},this.setSIWESession=e=>{B.yD.setSession(e)},this.setSIWEStatus=e=>{B.yD.setStatus(e)},this.setSIWEMessage=e=>{B.yD.setMessage(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),B.IN.open(e)}async close(){await this.initOrContinue(),B.IN.close()}setLoading(e){B.IN.setLoading(e)}getThemeMode(){return B.ThemeController.state.themeMode}getThemeVariables(){return B.ThemeController.state.themeVariables}setThemeMode(e){B.ThemeController.setThemeMode(e),(0,z.setColorTheme)(B.ThemeController.state.themeMode);try{let e=B.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeMode:B.ThemeController.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){B.ThemeController.setThemeVariables(e),(0,z.setThemeVariables)(B.ThemeController.state.themeVariables);try{let e=B.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeVariables:B.ThemeController.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return B.ThemeController.subscribe(e)}getState(){return{...B.Ie.state}}subscribeState(e){return B.Ie.subscribe(e)}getEvent(){return{...B.Xs.state}}subscribeEvents(e){return B.Xs.subscribe(e)}subscribeSIWEState(e){return B.yD.subscribe(e)}initControllers(e){if(B.NetworkController.setClient(e.networkControllerClient),B.NetworkController.setDefaultCaipNetwork(e.defaultChain),B.OptionsController.setProjectId(e.projectId),B.OptionsController.setIncludeWalletIds(e.includeWalletIds),B.OptionsController.setExcludeWalletIds(e.excludeWalletIds),B.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),B.OptionsController.setTokens(e.tokens),B.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),B.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),B.OptionsController.setCustomWallets(e.customWallets),B.OptionsController.setEnableAnalytics(e.enableAnalytics),B.OptionsController.setSdkVersion(e._sdkVersion),B.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){let t=e.siweControllerClient;B.yD.setSIWEClient(t)}e.metadata&&B.OptionsController.setMetadata(e.metadata),e.themeMode&&B.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&B.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!nN&&B.j1.isClient()&&(nN=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,22725)),Promise.resolve().then(r.bind(r,90078))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}let nM={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.6"},nU={ConnectorExplorerIds:{[nM.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[nM.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[nM.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[nM.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[nM.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[nM.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[nM.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[nM.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[nM.INJECTED_CONNECTOR_ID]:"Browser Wallet",[nM.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[nM.COINBASE_CONNECTOR_ID]:"Coinbase",[nM.LEDGER_CONNECTOR_ID]:"Ledger",[nM.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[nM.INJECTED_CONNECTOR_ID]:"INJECTED",[nM.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[nM.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[nM.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},nL={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${nM.EIP155}:${e}`]=r}),t}};class nB extends nj{constructor(e){let{wagmiConfig:t,siweConfig:r,chains:n,defaultChain:i,tokens:a,_sdkVersion:o,...s}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!s.projectId)throw Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{let t=nL.caipNetworkIdToNumber(e?.id);t&&await (0,U.If)({chainId:t})},async getApprovedCaipNetworksData(){let e=localStorage.getItem("wagmi.wallet");if(e?.includes(nM.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:nU.WalletConnectRpcChainIds.map(e=>`${nM.EIP155}:${e}`)};if(e?.includes(nM.WALLET_CONNECT_CONNECTOR_ID)){let e=t.connectors.find(e=>e.id===nM.WALLET_CONNECT_CONNECTOR_ID);if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let r=await e.getProvider(),n=r.signer?.session?.namespaces,i=n?.[nM.EIP155]?.methods,a=n?.[nM.EIP155]?.chains;return{supportsAllNetworks:i?.includes(nM.ADD_CHAIN_METHOD),approvedCaipNetworkIds:a}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:{connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===nM.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",t=>{"display_uri"===t.type&&(e(t.data),r.removeAllListeners())});let n=nL.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,U.$j)({connector:r,chainId:n})},connectExternal:async({id:e,provider:r,info:n})=>{let i=t.connectors.find(t=>t.id===e);if(!i)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&n&&i.id===nM.EIP6963_CONNECTOR_ID&&i.setEip6963Wallet?.({provider:r,info:n});let a=nL.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,U.$j)({connector:i,chainId:a})},checkInstalled:e=>{let t=this.getConnectors().filter(e=>"ANNOUNCED"===e.type),r=this.getConnectors().find(e=>"INJECTED"===e.type);return e?!!(t.length&&e.some(e=>t.some(t=>t.info?.rdns===e)))||!!r&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum},disconnect:async()=>{await (0,U.zP)(),r?.options?.signOutOnDisconnect&&await r.signOut()},signMessage:async e=>(0,U.l)({message:e})},siweControllerClient:r,defaultChain:function(e){if(e)return{id:`${nM.EIP155}:${e.id}`,name:e.name,imageId:nU.EIP155NetworkImageIds[e.id]}}(i),tokens:nL.getCaipTokens(a),_sdkVersion:o??`html-wagmi-${nM.VERSION}`,...s}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(n),this.syncConnectors(t),this.syncEmailConnector(t),this.listenEIP6963Connector(t),this.listenEmailConnector(t),(0,U.uH)(()=>this.syncAccount()),(0,U.QC)(()=>this.syncNetwork())}getState(){let e=super.getState();return{...e,selectedNetworkId:nL.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:nL.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${nM.EIP155}:${e.id}`,name:e.name,imageId:nU.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=(0,U.D0)(),{chain:r}=(0,U.Hy)();if(this.resetAccount(),t&&e&&r){let n=`${nM.EIP155}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=(0,U.D0)(),{chain:r}=(0,U.Hy)();if(r){let n=String(r.id),i=`${nM.EIP155}:${n}`;if(this.setCaipNetwork({id:i,name:r.name,imageId:nU.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),t&&e){let t=`${nM.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){let t=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,t){if(t.id!==L.R.id){this.setProfileName(null),this.setProfileImage(null);return}try{let{name:r,avatar:n}=await this.fetchIdentity({caipChainId:`${nM.EIP155}:${t.id}`,address:e});this.setProfileName(r),this.setProfileImage(n)}catch{let r=await (0,U.Lk)({address:e,chainId:t.id});if(r){this.setProfileName(r);let e=await (0,U.w6)({name:r,chainId:t.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=await (0,U.EG)({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){let t=[];e.connectors.forEach(({id:e,name:r})=>{[nM.EIP6963_CONNECTOR_ID,nM.EMAIL_CONNECTOR_ID].includes(e)||t.push({id:e,explorerId:nU.ConnectorExplorerIds[e],imageId:nU.ConnectorImageIds[e],imageUrl:this.options?.connectorImages?.[e],name:nU.ConnectorNamesMap[e]??r,type:nU.ConnectorTypesMap[e]??"EXTERNAL"})}),this.setConnectors(t)}async syncEmailConnector(e){let t=e.connectors.find(({id:e})=>"w3mEmail"===e);if(t){let e=await t.getProvider();this.addConnector({id:nM.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e})}}eip6963EventHandler(e,t){if(t.detail){let{info:r,provider:n}=t.detail;this.getConnectors().find(e=>e.name===r.name)||(this.addConnector({id:nM.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[nM.EIP6963_CONNECTOR_ID],name:r.name,provider:n,info:r}),e.isAuthorized({info:r,provider:n}))}}listenEIP6963Connector(e){let t=e.connectors.find(e=>e.id===nM.EIP6963_CONNECTOR_ID);if("undefined"!=typeof window&&t){let e=this.eip6963EventHandler.bind(this,t);window.addEventListener(nM.EIP6963_ANNOUNCE_EVENT,e),window.dispatchEvent(new Event(nM.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){let t=e.connectors.find(e=>e.id===nM.EMAIL_CONNECTOR_ID);if("undefined"!=typeof window&&t){super.setLoading(!0);let e=await t.getProvider(),r=e.getLoginEmailUsed();super.setLoading(r),e.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),e.onRpcResponse(()=>{super.close()}),e.onIsConnected(()=>{super.setLoading(!1)})}}}var nz=r(92219),nF=r(45775),nW=function(e,t,r,n,i){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r},nH=function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};let nq="connectedRdns";class nZ extends nz._{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",p.set(this,void 0),m.set(this,void 0),this.onAccountsChanged=e=>{0===e.length?(this.storage?.removeItem(nq),this.emit("disconnect")):e[0]&&this.emit("change",{account:(0,nF.K)(e[0])})},nW(this,p,this.options.getProvider(),"f")}async connect(e){let t=await super.connect(e);return nH(this,m,"f")&&this.storage?.setItem(nq,nH(this,m,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(nq),nW(this,m,void 0,"f")}async isAuthorized(e){let t=this.storage?.getItem(nq);if(t){if(nH(this,m,"f")&&t===nH(this,m,"f").info.rdns){let e=nH(this,m,"f").provider;if((await e.request({method:"eth_accounts"})).length)return!0}e&&nW(this,m,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(nH(this,m,"f")?.provider??nH(this,p,"f"))}setEip6963Wallet(e){nW(this,m,e,"f")}}p=new WeakMap,m=new WeakMap;var nG=r(48764);"undefined"==typeof window||(window.Buffer||(window.Buffer=nG.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var nV=r(66634),nK=r(57858),nY=r(53516),nX=r(75276),nQ=r(39028),nJ=r(79578),n0=r(3980),n1=r(92106),n2=class extends nX.wR{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,nX.Ko)(this,g,void 0),(0,nX.Ko)(this,b,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,nF.K)(e[0])})},this.onChainChanged=e=>{let t=(0,nY.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let r=await t.enable(),n=(0,nF.K)(r[0]),i=await this.getChainId(),a=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,a=this.isChainUnsupported(i)),{account:n,chain:{id:i,unsupported:a}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new nQ.ab(e);throw e}}async disconnect(){if(!(0,nX.ac)(this,b))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,nF.K)(t[0])}async getChainId(){let e=await this.getProvider();return(0,nY.J)(e.chainId)}async getProvider(){if(!(0,nX.ac)(this,b)){let e=(await Promise.all([r.e(2507),r.e(5811),r.e(5439)]).then(r.t.bind(r,45811,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,nX.qx)(this,g,new e(this.options));let t=nX.ac(this,g).walletExtension?.getChainId(),n=this.chains.find(e=>this.options.chainId?e.id===this.options.chainId:e.id===t)||this.chains[0],i=this.options.chainId||n?.id,a=this.options.jsonRpcUrl||n?.rpcUrls.default.http[0];(0,nX.qx)(this,b,(0,nX.ac)(this,g).makeWeb3Provider(a,i))}return(0,nX.ac)(this,b)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,nJ.K)({account:r,chain:n,transport:(0,n0.P)(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=await this.getProvider(),r=(0,n1.eC)(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){let n=this.chains.find(t=>t.id===e);if(!n)throw new nK.B({chainId:e,connectorId:this.id});if(4902===i.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:[n.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),n}catch(e){throw new nQ.ab(e)}throw new nQ.x3(i)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}};g=new WeakMap,b=new WeakMap;var n3=r(5015),n5="eip155",n6="requestedChains",n4="wallet_addEthereumChain",n8=class extends nX.wR{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,nX.Ko)(this,y),(0,nX.Ko)(this,C),(0,nX.Ko)(this,_),(0,nX.Ko)(this,S),(0,nX.Ko)(this,O),(0,nX.Ko)(this,I),(0,nX.Ko)(this,$),(0,nX.Ko)(this,D),(0,nX.Ko)(this,j),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,nX.Ko)(this,w,void 0),(0,nX.Ko)(this,v,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,nF.K)(e[0])})},this.onChainChanged=e=>{let t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{(0,nX.U9)(this,I,T).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,nX.U9)(this,y,x).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw Error("No chains found on connector.");let n=await this.getProvider();(0,nX.U9)(this,S,A).call(this);let i=(0,nX.U9)(this,_,k).call(this);if(n.session&&i&&await n.disconnect(),!n.session||i){let e=this.chains.filter(e=>e.id!==r).map(e=>e.id);this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:t,optionalChains:[r,...e]}),(0,nX.U9)(this,I,T).call(this,this.chains.map(({id:e})=>e))}let a=await n.enable(),o=(0,nF.K)(a[0]),s=await this.getChainId(),l=this.isChainUnsupported(s);return{account:o,chain:{id:s,unsupported:l}}}catch(e){if(/user rejected/i.test(e?.message))throw new nQ.ab(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,nX.U9)(this,O,P).call(this),(0,nX.U9)(this,I,T).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,nF.K)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,nX.ac)(this,w)||await (0,nX.U9)(this,y,x).call(this),e&&await this.switchChain(e),(0,nX.ac)(this,w)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,nJ.K)({account:r,chain:n,transport:(0,n0.P)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,nX.U9)(this,_,k).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new nQ.x3(Error("chain not found on connector."));try{let r=await this.getProvider(),n=(0,nX.U9)(this,D,N).call(this),i=(0,nX.U9)(this,j,M).call(this);if(!n.includes(e)&&i.includes(n4)){await r.request({method:n4,params:[{chainId:(0,n1.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let n=(0,nX.U9)(this,$,R).call(this);n.push(e),(0,nX.U9)(this,I,T).call(this,n)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,n1.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new nQ.ab(t);throw new nQ.x3(t)}}};w=new WeakMap,v=new WeakMap,y=new WeakSet,x=async function(){return(0,nX.ac)(this,v)||"undefined"==typeof window||(0,nX.qx)(this,v,(0,nX.U9)(this,C,E).call(this)),(0,nX.ac)(this,v)},C=new WeakSet,E=async function(){let{EthereumProvider:e}=await r.e(5006).then(r.bind(r,15006)),t=this.chains.map(({id:e})=>e);if(t.length){let{projectId:r,showQrModal:n=!0,qrModalOptions:i,metadata:a,relayUrl:o}=this.options;(0,nX.qx)(this,w,await e.init({showQrModal:n,qrModalOptions:i,projectId:r,optionalChains:t,rpcMap:Object.fromEntries(this.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),metadata:a,relayUrl:o}))}},_=new WeakSet,k=function(){if((0,nX.U9)(this,j,M).call(this).includes(n4)||!this.options.isNewChainsStale)return!1;let e=(0,nX.U9)(this,$,R).call(this),t=this.chains.map(({id:e})=>e),r=(0,nX.U9)(this,D,N).call(this);return(!r.length||!!r.some(e=>t.includes(e)))&&!t.every(t=>e.includes(t))},S=new WeakSet,A=function(){(0,nX.ac)(this,w)&&((0,nX.U9)(this,O,P).call(this),(0,nX.ac)(this,w).on("accountsChanged",this.onAccountsChanged),(0,nX.ac)(this,w).on("chainChanged",this.onChainChanged),(0,nX.ac)(this,w).on("disconnect",this.onDisconnect),(0,nX.ac)(this,w).on("session_delete",this.onDisconnect),(0,nX.ac)(this,w).on("display_uri",this.onDisplayUri),(0,nX.ac)(this,w).on("connect",this.onConnect))},O=new WeakSet,P=function(){(0,nX.ac)(this,w)&&((0,nX.ac)(this,w).removeListener("accountsChanged",this.onAccountsChanged),(0,nX.ac)(this,w).removeListener("chainChanged",this.onChainChanged),(0,nX.ac)(this,w).removeListener("disconnect",this.onDisconnect),(0,nX.ac)(this,w).removeListener("session_delete",this.onDisconnect),(0,nX.ac)(this,w).removeListener("display_uri",this.onDisplayUri),(0,nX.ac)(this,w).removeListener("connect",this.onConnect))},I=new WeakSet,T=function(e){this.storage?.setItem(n6,e)},$=new WeakSet,R=function(){return this.storage?.getItem(n6)??[]},D=new WeakSet,N=function(){if(!(0,nX.ac)(this,w))return[];let e=nX.ac(this,w).session?.namespaces;if(!e)return[];let t=(0,n3.fK)(e);return t[n5]?.chains?.map(e=>parseInt(e.split(":")[1]||""))??[]},j=new WeakSet,M=function(){if(!(0,nX.ac)(this,w))return[];let e=nX.ac(this,w).session?.namespaces;if(!e)return[];let t=(0,n3.fK)(e);return t[n5]?.methods??[]};class n7 extends nX.wR{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},"undefined"!=typeof window&&(this.provider=new rq(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){let{address:t,chainId:r}=await this.provider.connect({chainId:e.chainId});return{account:t,chain:{id:r,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{let t=this.chains.find(t=>t.id===e);if(!t)throw new nQ.x3(Error("chain not found on connector."));await this.provider.switchNetwork(e);let r=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:r}}),t}catch(e){if(e instanceof Error)throw new nQ.x3(e);throw e}}async disconnect(){await this.provider.disconnect()}async getAccount(){let{address:e}=await this.provider.connect();return e}async getChainId(){let{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){let{address:e,chainId:t}=await this.provider.connect();return Promise.resolve((0,nJ.K)({account:e,chain:{id:t},transport:(0,n0.P)(this.provider)}))}async isAuthorized(){let{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}let n9=B.j1.getBlockchainApiUrl();function ie({projectId:e,chains:t,metadata:r,enableInjected:n,enableCoinbase:i,enableEIP6963:a,enableEmail:o,enableWalletConnect:s}){let{publicClient:l}=(0,U.QB)(t,[function({projectId:e}){return function(t){if(!nU.WalletConnectRpcChainIds.includes(t.id))return null;let r=`${n9}/v1/?chainId=${nM.EIP155}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]),c=[];return!1!==s&&c.push(new n8({chains:t,options:{projectId:e,showQrModal:!1,metadata:r}})),!1!==n&&c.push(new nz._({chains:t,options:{shimDisconnect:!0}})),!1!==a&&c.push(new nZ({chains:t})),!1!==i&&c.push(new n2({chains:t,options:{appName:r?.name??"Unknown"}})),!0===o&&c.push(new n7({chains:t,options:{projectId:e}})),(0,nV._g)({autoConnect:!0,connectors:c,publicClient:l})}function it(e){return!a&&(i=a=new nB({...e,_sdkVersion:`react-wagmi-${nM.VERSION}`})),a}},54943:function(e,t,r){"use strict";r.r(t),r.d(t,{WebSocket:function(){return n}});let n=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}()},37380:function(e,t,r){"use strict";r.d(t,{Cb:function(){return o},SB:function(){return s}});var n=r(97286);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},a=(e=i,t,r)=>{let{kind:n,metadata:a}=r,o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(r.name,e),"accessor"===n){let{name:n}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=r;return function(r){let i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function o(e){return(t,r)=>"object"==typeof r?a(e,t,r):((e,t,r)=>{let n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return o({...e,state:!0,attribute:!1})}},35592:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(69699);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=e=>e??n.Ld},69178:function(e,t,r){"use strict";r.d(t,{V:function(){return p},i:function(){return b}});var n=r(69699);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:i}=n._$LH,a=e=>void 0===e.strings;var o=r(48476);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),s(e,t);return!0},l=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},c=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),h(t)}};function u(e){void 0!==this._$AN?(l(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,r=0){let n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size){if(t){if(Array.isArray(n))for(let e=r;e<n.length;e++)s(n[e],!1),l(n[e]);else null!=n&&(s(n,!1),l(n))}else s(this,e)}}let h=e=>{e.type==o.pX.CHILD&&(e._$AP??=d,e._$AQ??=u)};class f extends o.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),l(this))}setValue(e){if(a(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p=()=>new m;class m{}let g=new WeakMap,b=(0,o.XM)(class extends f{render(e){return n.Ld}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),n.Ld}ot(e){if("function"==typeof this.G){let t=this.ct??globalThis,r=g.get(t);void 0===r&&(r=new WeakMap,g.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?g.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},77996:function(e,t,r){"use strict";r.d(t,{oi:function(){return ef},iv:function(){return c},dy:function(){return V},YP:function(){return K},$m:function(){return l}}),r(97286),r(69699);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,a),c=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]),e,a),u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:b}=Object,w=globalThis,v=w.trustedTypes,y=v?v.emptyScript:"",x=w.reactiveElementPolyfillSupport,C=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},_=(e,t)=>!h(e,t),k={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&f(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let a=n?.call(this);i.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties;for(let t of[...m(e),...g(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(d(r));else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??_)(this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$ET??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$Ej()}catch(t){throw e=!1,this._$Ej(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach(e=>this._$EO(e,this[e])),this._$Ej()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[C("elementProperties")]=new Map,S[C("finalized")]=new Map,x?.({ReactiveElement:S}),(w.reactiveElementVersions??=[]).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let A=globalThis,O=A.trustedTypes,P=O?O.createPolicy("lit-html",{createHTML:e=>e}):void 0,I="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,$="?"+T,R=`<${$}>`,D=document,N=()=>D.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,U=e=>M(e)||"function"==typeof e?.[Symbol.iterator],L="[ 	\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,W=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,q=/"/g,Z=/^(?:script|style|textarea|title)$/i,G=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),V=G(1),K=G(2),Y=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Q=new WeakMap,J=D.createTreeWalker(D,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}let et=(e,t)=>{let r=e.length-1,n=[],i,a=2===t?"<svg>":"",o=B;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(o.lastIndex=u,null!==(l=o.exec(r)));)u=o.lastIndex,o===B?"!--"===l[1]?o=z:void 0!==l[1]?o=F:void 0!==l[2]?(Z.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=W):void 0!==l[3]&&(o=W):o===W?">"===l[0]?(o=i??B,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?W:'"'===l[3]?q:H):o===q||o===H?o=W:o===z||o===F?o=B:(o=W,i=void 0);let d=o===W&&e[t+1].startsWith("/>")?" ":"";a+=o===B?r+R:c>=0?(n.push(s),r.slice(0,c)+I+r.slice(c)+T+d):r+T+(-2===c?t:d)}return[ee(e,a+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class er{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,a=0,o=e.length-1,s=this.parts,[l,c]=et(e,t);if(this.el=er.createElement(l,r),J.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=J.nextNode())&&s.length<o;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(I)){let t=c[a++],r=n.getAttribute(e).split(T),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:o[2],strings:r,ctor:"."===o[1]?es:"?"===o[1]?el:"@"===o[1]?ec:eo}),n.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:i}),n.removeAttribute(e));if(Z.test(n.tagName)){let e=n.textContent.split(T),t=e.length-1;if(t>0){n.textContent=O?O.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],N()),J.nextNode(),s.push({type:2,index:++i});n.append(e[t],N())}}}else if(8===n.nodeType){if(n.data===$)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(T,e+1));)s.push({type:7,index:i}),e+=T.length-1}}i++}}static createElement(e,t){let r=D.createElement("template");return r.innerHTML=e,r}}function en(e,t,r=e,n){if(t===Y)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl,a=j(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=en(e,i._$AS(e,t.values),i,n)),t}class ei{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??D).importNode(t,!0);J.currentNode=n;let i=J.nextNode(),a=0,o=0,s=r[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new ea(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new eu(i,this,e)),this._$AV.push(t),s=r[++o]}a!==s?.index&&(i=J.nextNode(),a++)}return J.currentNode=D,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ea{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){j(e=en(this,e,t))?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):U(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==X&&j(this._$AH)?this._$AA.nextSibling.data=e:this.$(D.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=er.createElement(ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new ei(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new er(e)),t}T(e){M(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new ea(this.k(N()),this.k(N()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class eo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=X}_$AI(e,t=this,r,n){let i=this.strings,a=!1;if(void 0===i)(a=!j(e=en(this,e,t,0))||e!==this._$AH&&e!==Y)&&(this._$AH=e);else{let n,o;let s=e;for(e=i[0],n=0;n<i.length-1;n++)(o=en(this,s[r+n],t,n))===Y&&(o=this._$AH[n]),a||=!j(o)||o!==this._$AH[n],o===X?e=X:e!==X&&(e+=(o??"")+i[n+1]),this._$AH[n]=o}a&&!n&&this.O(e)}O(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends eo{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===X?void 0:e}}class el extends eo{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class ec extends eo{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??X)===Y)return;let r=this._$AH,n=e===X&&r!==X||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==X&&(r===X||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class eu{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}}let ed=A.litHtmlPolyfillSupport;ed?.(er,ea),(A.litHtmlVersions??=[]).push("3.1.1");let eh=(e,t,r)=>{let n=r?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=r?.renderBefore??null;n._$litPart$=i=new ea(t.insertBefore(N(),e),e,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ef extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eh(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}ef._$litElement$=!0,ef.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ef});let ep=globalThis.litElementPolyfillSupport;ep?.({LitElement:ef}),(globalThis.litElementVersions??=[]).push("4.0.3")},97286:function(e,t,r){"use strict";r.d(t,{Ts:function(){return C},Qu:function(){return E}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,a),c=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:f,getOwnPropertyNames:p,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,b=globalThis,w=b.trustedTypes,v=w?w.emptyScript:"",y=b.reactiveElementPolyfillSupport,x=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!d(e,t),_={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&h(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let a=n?.call(this);i.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let e=this.properties;for(let t of[...p(e),...m(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(u(r));else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:C).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??E)(this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$ET??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$Ej()}catch(t){throw e=!1,this._$Ej(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach(e=>this._$EO(e,this[e])),this._$Ej()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[x("elementProperties")]=new Map,k[x("finalized")]=new Map,y?.({ReactiveElement:k}),(b.reactiveElementVersions??=[]).push("2.0.3")},48476:function(e,t,r){"use strict";r.d(t,{XM:function(){return i},Xe:function(){return a},pX:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>(...t)=>({_$litDirective$:e,values:t});class a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},69699:function(e,t,r){"use strict";r.d(t,{Jb:function(){return _},Ld:function(){return k},_$LH:function(){return L}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.trustedTypes,a=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,o="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],m="[ 	\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,w=/>/g,v=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),_=(E(1),E(2),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),S=new WeakMap,A=u.createTreeWalker(u,129);function O(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(t):t}let P=(e,t)=>{let r=e.length-1,n=[],i,a=2===t?"<svg>":"",l=g;for(let t=0;t<r;t++){let r=e[t],u,d,h=-1,f=0;for(;f<r.length&&(l.lastIndex=f,null!==(d=l.exec(r)));)f=l.lastIndex,l===g?"!--"===d[1]?l=b:void 0!==d[1]?l=w:void 0!==d[2]?(C.test(d[2])&&(i=RegExp("</"+d[2],"g")),l=v):void 0!==d[3]&&(l=v):l===v?">"===d[0]?(l=i??g,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?v:'"'===d[3]?x:y):l===x||l===y?l=v:l===b||l===w?l=g:(l=v,i=void 0);let p=l===v&&e[t+1].startsWith("/>")?" ":"";a+=l===g?r+c:h>=0?(n.push(u),r.slice(0,h)+o+r.slice(h)+s+p):r+s+(-2===h?t:p)}return[O(e,a+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class I{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let a=0,c=0,u=e.length-1,h=this.parts,[f,p]=P(e,t);if(this.el=I.createElement(f,r),A.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=A.nextNode())&&h.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(o)){let t=p[c++],r=n.getAttribute(e).split(s),i=/([.?@])?(.*)/.exec(t);h.push({type:1,index:a,name:i[2],strings:r,ctor:"."===i[1]?N:"?"===i[1]?j:"@"===i[1]?M:D}),n.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:a}),n.removeAttribute(e));if(C.test(n.tagName)){let e=n.textContent.split(s),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],d()),A.nextNode(),h.push({type:2,index:++a});n.append(e[t],d())}}}else if(8===n.nodeType){if(n.data===l)h.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(s,e+1));)h.push({type:7,index:a}),e+=s.length-1}}a++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function T(e,t,r=e,n){if(t===_)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl,a=h(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=T(e,i._$AS(e,t.values),i,n)),t}class ${constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??u).importNode(t,!0);A.currentNode=n;let i=A.nextNode(),a=0,o=0,s=r[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new R(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new U(i,this,e)),this._$AV.push(t),s=r[++o]}a!==s?.index&&(i=A.nextNode(),a++)}return A.currentNode=u,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=T(this,e,t))?e===k||null==e||""===e?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==_&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):p(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==k&&h(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=I.createElement(O(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new $(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=S.get(e.strings);return void 0===t&&S.set(e.strings,t=new I(e)),t}T(e){f(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new R(this.k(d()),this.k(d()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=k}_$AI(e,t=this,r,n){let i=this.strings,a=!1;if(void 0===i)(a=!h(e=T(this,e,t,0))||e!==this._$AH&&e!==_)&&(this._$AH=e);else{let n,o;let s=e;for(e=i[0],n=0;n<i.length-1;n++)(o=T(this,s[r+n],t,n))===_&&(o=this._$AH[n]),a||=!h(o)||o!==this._$AH[n],o===k?e=k:e!==k&&(e+=(o??"")+i[n+1]),this._$AH[n]=o}a&&!n&&this.O(e)}O(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class N extends D{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===k?void 0:e}}class j extends D{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}}class M extends D{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??k)===_)return;let r=this._$AH,n=e===k&&r!==k||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==k&&(r===k||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class U{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}let L={j:o,P:s,A:l,C:1,M:P,L:$,R:p,V:T,D:R,I:D,H:j,N:M,U:N,B:U},B=n.litHtmlPolyfillSupport;B?.(I,R),(n.litHtmlVersions??=[]).push("3.1.1")},9826:function(e,t,r){"use strict";r.d(t,{LHV:function(){return h},oHP:function(){return f}});var n=r(67294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(i),o=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,i;n=t,i=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:i,size:a,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,o),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(i)}function h(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z"},child:[]}]})(e)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(e)}},53160:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});var n=r(16867);function i(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,n.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},20605:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var n=r(53160),i=r(16867);function a(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let r=(0,n.E)(t),a=0;for(let t of e)r.set(t,a),a+=t.length;return(0,i.P)(r)}},52217:function(e,t,r){"use strict";r.d(t,{m:function(){return a}});var n=r(73149),i=r(16867);function a(e,t="utf8"){let r=n.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,i.P)(globalThis.Buffer.from(e,"utf-8")):r.decoder.decode(`${r.prefix}${e}`)}},37466:function(e,t,r){"use strict";r.d(t,{BB:function(){return a.B},mL:function(){return i.m},zo:function(){return n.z}});var n=r(20605),i=r(52217),a=r(92263)},92263:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(73149);function i(e,t="utf8"){let r=n.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}},16867:function(e,t,r){"use strict";function n(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}r.d(t,{P:function(){return n}})},73149:function(e,t,r){"use strict";r.d(t,{Z:function(){return eZ}});var n={};r.r(n),r.d(n,{identity:function(){return $}});var i={};r.r(i),r.d(i,{base2:function(){return R}});var a={};r.r(a),r.d(a,{base8:function(){return D}});var o={};r.r(o),r.d(o,{base10:function(){return N}});var s={};r.r(s),r.d(s,{base16:function(){return j},base16upper:function(){return M}});var l={};r.r(l),r.d(l,{base32:function(){return U},base32hex:function(){return F},base32hexpad:function(){return H},base32hexpadupper:function(){return q},base32hexupper:function(){return W},base32pad:function(){return B},base32padupper:function(){return z},base32upper:function(){return L},base32z:function(){return Z}});var c={};r.r(c),r.d(c,{base36:function(){return G},base36upper:function(){return V}});var u={};r.r(u),r.d(u,{base58btc:function(){return K},base58flickr:function(){return Y}});var d={};r.r(d),r.d(d,{base64:function(){return X},base64pad:function(){return Q},base64url:function(){return J},base64urlpad:function(){return ee}});var h={};r.r(h),r.d(h,{base256emoji:function(){return ei}});var f={};r.r(f),r.d(f,{sha256:function(){return eg},sha512:function(){return eb}});var p={};r.r(p),r.d(p,{identity:function(){return ew}});var m={};r.r(m),r.d(m,{code:function(){return ey},decode:function(){return eC},encode:function(){return ex},name:function(){return ev}});var g={};r.r(g),r.d(g,{code:function(){return eS},decode:function(){return eO},encode:function(){return eA},name:function(){return ek}});var b=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var a=e.charAt(i),o=a.charCodeAt(0);if(255!==r[o])throw TypeError(a+" is ambiguous");r[o]=i}var s=e.length,l=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var n=0,i=0;e[t]===l;)n++,t++;for(var a=(e.length-t)*c+1>>>0,o=new Uint8Array(a);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var d=0,h=a-1;(0!==u||d<i)&&-1!==h;h--,d++)u+=s*o[h]>>>0,o[h]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");i=d,t++}if(" "!==e[t]){for(var f=a-i;f!==a&&0===o[f];)f++;for(var p=new Uint8Array(n+(a-f)),m=n;f!==a;)p[m++]=o[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,a=t.length;i!==a&&0===t[i];)i++,r++;for(var o=(a-i)*u+1>>>0,c=new Uint8Array(o);i!==a;){for(var d=t[i],h=0,f=o-1;(0!==d||h<n)&&-1!==f;f--,h++)d+=256*c[f]>>>0,c[f]=d%s>>>0,d=d/s>>>0;if(0!==d)throw Error("Non-zero carry");n=h,i++}for(var p=o-n;p!==o&&0===c[p];)p++;for(var m=l.repeat(r);p<o;++p)m+=e.charAt(c[p]);return m},decodeUnsafe:d,decode:function(e){var r=d(e);if(r)return r;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let w=(e,t)=>{if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(let r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0},v=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},y=e=>new TextEncoder().encode(e),x=e=>new TextDecoder().decode(e);class C{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class E{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return k(this,e)}}class _{constructor(e){this.decoders=e}or(e){return k(this,e)}decode(e){let t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let k=(e,t)=>new _({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class S{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new C(e,t,r),this.decoder=new E(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let A=({name:e,prefix:t,encode:r,decode:n})=>new S(e,t,r,n),O=({prefix:e,name:t,alphabet:r})=>{let{encode:n,decode:i}=b(r,t);return A({prefix:e,name:t,encode:n,decode:e=>v(i(e))})},P=(e,t,r,n)=>{let i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let a=e.length;for(;"="===e[a-1];)--a;let o=new Uint8Array(a*r/8|0),s=0,l=0,c=0;for(let t=0;t<a;++t){let a=i[e[t]];if(void 0===a)throw SyntaxError(`Non-${n} character`);l=l<<r|a,(s+=r)>=8&&(s-=8,o[c++]=255&l>>s)}if(s>=r||255&l<<8-s)throw SyntaxError("Unexpected end of data");return o},I=(e,t,r)=>{let n="="===t[t.length-1],i=(1<<r)-1,a="",o=0,s=0;for(let n=0;n<e.length;++n)for(s=s<<8|e[n],o+=8;o>r;)o-=r,a+=t[i&s>>o];if(o&&(a+=t[i&s<<r-o]),n)for(;a.length*r&7;)a+="=";return a},T=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>A({prefix:t,name:e,encode:e=>I(e,n,r),decode:t=>P(t,n,r,e)}),$=A({prefix:"\x00",name:"identity",encode:e=>x(e),decode:e=>y(e)}),R=T({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),D=T({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),N=O({prefix:"9",name:"base10",alphabet:"0123456789"}),j=T({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),M=T({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),U=T({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),L=T({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),B=T({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),z=T({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),F=T({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),W=T({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),H=T({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),q=T({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Z=T({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),G=O({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),V=O({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),K=O({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Y=O({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),X=T({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Q=T({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),J=T({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),ee=T({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),et=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),er=et.reduce((e,t,r)=>(e[r]=t,e),[]),en=et.reduce((e,t,r)=>(e[t.codePointAt(0)]=r,e),[]),ei=A({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=er[t],"")},decode:function(e){let t=[];for(let r of e){let e=en[r.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var ea={encode:function e(t,r,n){r=r||[];for(var i=n=n||0;t>=2147483648;)r[n++]=255&t|128,t/=128;for(;-128&t;)r[n++]=255&t|128,t>>>=7;return r[n]=0|t,e.bytes=n-i+1,r},decode:function e(t,r){var n,i=0,r=r||0,a=0,o=r,s=t.length;do{if(o>=s)throw e.bytes=0,RangeError("Could not decode varint");n=t[o++],i+=a<28?(127&n)<<a:(127&n)*Math.pow(2,a),a+=7}while(n>=128);return e.bytes=o-r,i},encodingLength:function(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10}};let eo=(e,t=0)=>[ea.decode(e,t),ea.decode.bytes],es=(e,t,r=0)=>(ea.encode(e,t,r),t),el=e=>ea.encodingLength(e),ec=(e,t)=>{let r=t.byteLength,n=el(e),i=n+el(r),a=new Uint8Array(i+r);return es(e,a,0),es(r,a,n),a.set(t,i),new eh(e,r,t,a)},eu=e=>{let t=v(e),[r,n]=eo(t),[i,a]=eo(t.subarray(n)),o=t.subarray(n+a);if(o.byteLength!==i)throw Error("Incorrect length");return new eh(r,i,o,t)},ed=(e,t)=>e===t||e.code===t.code&&e.size===t.size&&w(e.bytes,t.bytes);class eh{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}let ef=({name:e,code:t,encode:r})=>new ep(e,t,r);class ep{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?ec(this.code,t):t.then(e=>ec(this.code,e))}throw Error("Unknown type, must be binary type")}}let em=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),eg=ef({name:"sha2-256",code:18,encode:em("SHA-256")}),eb=ef({name:"sha2-512",code:19,encode:em("SHA-512")}),ew={code:0,name:"identity",encode:v,digest:e=>ec(0,v(e))},ev="raw",ey=85,ex=e=>v(e),eC=e=>v(e),eE=new TextEncoder,e_=new TextDecoder,ek="json",eS=512,eA=e=>eE.encode(JSON.stringify(e)),eO=e=>JSON.parse(e_.decode(e));class eP{constructor(e,t,r,n){this.code=t,this.version=e,this.multihash=r,this.bytes=n,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eU,byteLength:eU,code:eM,version:eM,multihash:eM,bytes:eM,_baseCache:eU,asCID:eU})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==eR)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==eD)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return eP.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,r=ec(e,t);return eP.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&ed(this.multihash,e.multihash)}toString(e){let{bytes:t,version:r,_baseCache:n}=this;return 0===r?eT(t,n,e||K.encoder):e$(t,n,e||U.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return eL(/^0\.0/,eB),!!(e&&(e[ej]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof eP)return e;if(null!=e&&e.asCID===e){let{version:t,code:r,multihash:n,bytes:i}=e;return new eP(t,r,n,i||eN(t,r,n.bytes))}if(null==e||!0!==e[ej])return null;{let{version:t,multihash:r,code:n}=e,i=eu(r);return eP.create(t,n,i)}}static create(e,t,r){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===eR)return new eP(e,t,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eR}) block encoding`);case 1:{let n=eN(e,t,r.bytes);return new eP(e,t,r,n)}default:throw Error("Invalid version")}}static createV0(e){return eP.create(0,eR,e)}static createV1(e,t){return eP.create(1,e,t)}static decode(e){let[t,r]=eP.decodeFirst(e);if(r.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=eP.inspectBytes(e),r=t.size-t.multihashSize,n=v(e.subarray(r,r+t.multihashSize));if(n.byteLength!==t.multihashSize)throw Error("Incorrect length");let i=n.subarray(t.multihashSize-t.digestSize),a=new eh(t.multihashCode,t.digestSize,i,n);return[0===t.version?eP.createV0(a):eP.createV1(t.codec,a),e.subarray(t.size)]}static inspectBytes(e){let t=0,r=()=>{let[r,n]=eo(e.subarray(t));return t+=n,r},n=r(),i=eR;if(18===n?(n=0,t=0):1===n&&(i=r()),0!==n&&1!==n)throw RangeError(`Invalid CID version ${n}`);let a=t,o=r(),s=r(),l=t+s;return{version:n,codec:i,multihashCode:o,digestSize:s,multihashSize:l-a,size:l}}static parse(e,t){let[r,n]=eI(e,t),i=eP.decode(n);return i._baseCache.set(r,e),i}}let eI=(e,t)=>{switch(e[0]){case"Q":return[K.prefix,(t||K).decode(`${K.prefix}${e}`)];case K.prefix:return[K.prefix,(t||K).decode(e)];case U.prefix:return[U.prefix,(t||U).decode(e)];default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},eT=(e,t,r)=>{let{prefix:n}=r;if(n!==K.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let i=t.get(n);if(null!=i)return i;{let i=r.encode(e).slice(1);return t.set(n,i),i}},e$=(e,t,r)=>{let{prefix:n}=r,i=t.get(n);if(null!=i)return i;{let i=r.encode(e);return t.set(n,i),i}},eR=112,eD=18,eN=(e,t,r)=>{let n=el(e),i=n+el(t),a=new Uint8Array(i+r.byteLength);return es(e,a,0),es(t,a,n),a.set(r,i),a},ej=Symbol.for("@ipld/js-cid/CID"),eM={writable:!1,configurable:!1,enumerable:!0},eU={writable:!1,enumerable:!1,configurable:!1},eL=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},eB=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,ez={...n,...i,...a,...o,...s,...l,...c,...u,...d,...h};({...f,...p});var eF=r(53160);function eW(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}let eH=eW("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),eq=eW("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{e=e.substring(1);let t=(0,eF.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t});var eZ={utf8:eH,"utf-8":eH,hex:ez.base16,latin1:eq,ascii:eq,binary:eq,...ez}},17832:function(e,t,r){"use strict";r.d(t,{sj:function(){return f},iH:function(){return g},CO:function(){return m},Ld:function(){return p}}),Symbol();let n=Symbol(),i=Object.getPrototypeOf,a=new WeakMap,o=e=>e&&(a.has(e)?a.get(e):i(e)===Object.prototype||i(e)===Array.prototype),s=e=>o(e)&&e[n]||null,l=(e,t=!0)=>{a.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,d=new WeakSet,[h]=((e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},i=new WeakMap,a=(e,t,r=n)=>{let o=i.get(e);if((null==o?void 0:o[0])===t)return o[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),i.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let n=Reflect.get(e,t),i={value:n,enumerable:!0,configurable:!0};if(d.has(n))l(n,!1);else if(n instanceof Promise)delete i.value,i.get=()=>r(n);else if(u.has(n)){let[e,t]=u.get(n);i.value=a(e,t(),r)}Object.defineProperty(s,t,i)}),Object.preventExtensions(s)},o=new WeakMap,h=[1,1],f=n=>{if(!c(n))throw Error("object required");let i=o.get(n);if(i)return i;let l=h[0],p=new Set,m=(e,t=++h[0])=>{l!==t&&(l=t,p.forEach(r=>r(e,t)))},g=h[1],b=(e=++h[1])=>(g===e||p.size||(g=e,v.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),w=e=>(t,r)=>{let n=[...t];n[1]=[e,...n[1]],m(n,r)},v=new Map,y=(e,t)=>{if(v.has(e))throw Error("prop listener already exists");if(p.size){let r=t[3](w(e));v.set(e,[t,r])}else v.set(e,[t])},x=e=>{var t;let r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},C=e=>{p.add(e),1===p.size&&v.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let n=e[3](w(r));v.set(r,[e,n])});let t=()=>{p.delete(e),0===p.size&&v.forEach(([e,t],r)=>{t&&(t(),v.set(r,[e]))})};return t},E=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),_={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let n=Reflect.deleteProperty(e,t);return n&&m(["delete",[t],r]),n},set(t,n,i,a){let l=Reflect.has(t,n),h=Reflect.get(t,n,a);if(l&&(e(h,i)||o.has(i)&&e(h,o.get(i))))return!0;x(n),c(i)&&(i=s(i)||i);let p=i;if(i instanceof Promise)i.then(e=>{i.status="fulfilled",i.value=e,m(["resolve",[n],e])}).catch(e=>{i.status="rejected",i.reason=e,m(["reject",[n],e])});else{!u.has(i)&&r(i)&&(p=f(i));let e=!d.has(p)&&u.get(p);e&&y(n,e)}return Reflect.set(t,n,p,a),m(["set",[n],i,h]),!0}},k=t(E,_);o.set(n,k);let S=[E,b,a,C];return u.set(k,S),Reflect.ownKeys(n).forEach(e=>{let t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(k[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),k})=>[f,u,d,e,t,r,n,i,a,o,h])();function f(e={}){return h(e)}function p(e,t,r){let n;let i=u.get(e);i||console.warn("Please use proxy object");let a=[],o=i[3],s=!1,l=o(e=>{if(a.push(e),r){t(a.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,s&&t(a.splice(0))}))});return s=!0,()=>{s=!1,l()}}function m(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[n,i,a]=r;return a(n,i(),t)}function g(e){return d.add(e),e}},14503:function(e,t,r){"use strict";function n(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return n}})},61376:function(e,t,r){"use strict";r.d(t,{R:function(){return w}});var n=r(14503),i=r(16693),a=r(62027),o=r(80377),s=r(97405),l=r(7210),c=r(77799),u=r(47864),d=r(92106),h=r(26445),f=r(87469),p=r(61163),m=r(74688),g=r(32357),b=r(47531);async function w(e,t){let{account:i=e.account,batch:l=!!e.batch?.multicall,blockNumber:c,blockTag:u="latest",accessList:g,data:w,gas:y,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:_,to:k,value:S,...A}=t,O=i?(0,n.T)(i):void 0;try{(0,b.F)(t);let r=(c?(0,d.eC)(c):void 0)||u,n=e.chain?.formatters?.transactionRequest?.format,i=(n||m.tG)({...(0,p.K)(A,{format:n}),from:O?.address,accessList:g,data:w,gas:y,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:_,to:k,value:S});if(l&&function({request:e}){let{data:t,to:r,...n}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(n).filter(e=>void 0!==e).length>0)}({request:i}))try{return await v(e,{...i,blockNumber:c,blockTag:u})}catch(e){if(!(e instanceof o.pZ)&&!(e instanceof o.mm))throw e}let a=await e.request({method:"eth_call",params:r?[i,r]:[i]});if("0x"===a)return{data:void 0};return{data:a}}catch(l){let n=function(e){if(!(e instanceof a.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(l),{offchainLookup:i,offchainLookupSignature:o}=await r.e(422).then(r.bind(r,10422));if(n?.slice(0,10)===o&&k)return{data:await i(e,{data:n,to:k})};throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,f.k)(e,r);return t instanceof h.cj?e:t})();return new s.cg(n,{docsPath:t,...r})}(l,{...t,account:O,chain:e.chain})}}async function v(e,t){let{batchSize:r=1024,wait:n=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:a,blockTag:h="latest",data:f,multicallAddress:p,to:m}=t,b=p;if(!b){if(!e.chain)throw new o.pZ;b=(0,u.L)({blockNumber:a,chain:e.chain,contract:"multicall3"})}let w=(a?(0,d.eC)(a):void 0)||h,{schedule:v}=(0,g.S)({id:`${e.uid}.${w}`,wait:n,shouldSplitBatch:e=>e.reduce((e,{data:t})=>e+(t.length-2),0)>2*r,fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),n=(0,c.R)({abi:i.F8,args:[r],functionName:"aggregate3"}),a=await e.request({method:"eth_call",params:[{data:n,to:b},w]});return(0,l.k)({abi:i.F8,args:[r],functionName:"aggregate3",data:a||"0x"})}}),[{returnData:y,success:x}]=await v({data:f,to:m});if(!x)throw new s.VQ({data:y});return"0x"===y?{data:void 0}:{data:y}}},43861:function(e,t,r){"use strict";r.d(t,{C:function(){return c},X:function(){return l}});var n=r(15371),i=r(93714),a=r(79379),o=r(75016),s=r(24453);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c,type:u="eip1559"}=t||{},d=await (async()=>"function"==typeof l?.fees?.baseFeeMultiplier?l.fees.baseFeeMultiplier({block:r,client:e,request:c}):l?.fees?.baseFeeMultiplier??1.2)();if(d<1)throw new n.Fz;let h=10**(d.toString().split(".")[1]?.length??0),f=e=>e*BigInt(Math.ceil(d*h))/BigInt(h),p=r||await (0,i.s)(e,o.Q,"getBlock")({});if("function"==typeof l?.fees?.estimateFeesPerGas)return l.fees.estimateFeesPerGas({block:r,client:e,multiply:f,request:c,type:u});if("eip1559"===u){if("bigint"!=typeof p.baseFeePerGas)throw new n.e5;let t=c?.maxPriorityFeePerGas?c.maxPriorityFeePerGas:await (0,a.h)(e,{block:p,chain:l,request:c}),r=f(p.baseFeePerGas);return{maxFeePerGas:c?.maxFeePerGas??r+t,maxPriorityFeePerGas:t}}return{gasPrice:c?.gasPrice??f(await (0,i.s)(e,s.o,"getGasPrice")({}))}}},81841:function(e,t,r){"use strict";r.d(t,{Q:function(){return b}});var n=r(14503),i=r(8998),a=r(92106),o=r(39625),s=r(67795),l=r(62027),c=r(33639);class u extends l.G{constructor(e,{account:t,docsPath:r,chain:n,data:i,gas:a,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:p}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",(0,c.xr)({from:t?.address,to:f,value:void 0!==p&&`${(0,o.d)(p)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:i,gas:a,gasPrice:void 0!==l&&`${(0,s.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,s.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,s.o)(d)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var d=r(26445),h=r(87469),f=r(61163),p=r(74688),m=r(47531),g=r(57331);async function b(e,t){let r=t.account??e.account;if(!r)throw new i.o({docsPath:"/docs/actions/public/estimateGas"});let o=(0,n.T)(r);try{let{accessList:r,blockNumber:n,blockTag:i,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:b,value:w,...v}="local"===o.type?await (0,g.Z)(e,t):t,y=(n?(0,a.eC)(n):void 0)||i;(0,m.F)(t);let x=e.chain?.formatters?.transactionRequest?.format,C=(x||p.tG)({...(0,f.K)(v,{format:x}),from:o.address,accessList:r,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:b,value:w}),E=await e.request({method:"eth_estimateGas",params:y?[C,y]:[C]});return BigInt(E)}catch(r){throw function(e,{docsPath:t,...r}){return new u((()=>{let t=(0,h.k)(e,r);return t instanceof d.cj?e:t})(),{docsPath:t,...r})}(r,{...t,account:o,chain:e.chain})}}},79379:function(e,t,r){"use strict";r.d(t,{_:function(){return l},h:function(){return c}});var n=r(15371),i=r(95946),a=r(93714),o=r(75016),s=r(24453);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c}=t||{};if("function"==typeof l?.fees?.defaultPriorityFee){let t=r||await (0,a.s)(e,o.Q,"getBlock")({});return l.fees.defaultPriorityFee({block:t,client:e,request:c})}if(void 0!==l?.fees?.defaultPriorityFee)return l?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,i.y_)(t)}catch{let[t,i]=await Promise.all([r?Promise.resolve(r):(0,a.s)(e,o.Q,"getBlock")({}),(0,a.s)(e,s.o,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new n.e5;let l=i-t.baseFeePerGas;if(l<0n)return 0n;return l}}},75016:function(e,t,r){"use strict";r.d(t,{Q:function(){return o}});var n=r(79814),i=r(92106),a=r(43310);async function o(e,{blockHash:t,blockNumber:r,blockTag:o,includeTransactions:s}={}){let l=s??!1,c=void 0!==r?(0,i.eC)(r):void 0,u=null;if(!(u=t?await e.request({method:"eth_getBlockByHash",params:[t,l]}):await e.request({method:"eth_getBlockByNumber",params:[c||(o??"latest"),l]})))throw new n.f({blockHash:t,blockNumber:r});return(e.chain?.formatters?.block?.format||a.Z)(u)}},79524:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(95946);async function i(e){let t=await e.request({method:"eth_chainId"});return(0,n.ly)(t)}},24453:function(e,t,r){"use strict";async function n(e){return BigInt(await e.request({method:"eth_gasPrice"}))}r.d(t,{o:function(){return n}})},86162:function(e,t,r){"use strict";r.d(t,{K:function(){return a}});var n=r(95946),i=r(92106);async function a(e,{address:t,blockTag:r="latest",blockNumber:a}){let o=await e.request({method:"eth_getTransactionCount",params:[t,a?(0,i.eC)(a):r]});return(0,n.ly)(o)}},57331:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(14503),i=r(43861),a=r(81841),o=r(75016),s=r(86162),l=r(8998),c=r(15371),u=r(93714),d=r(47531),h=r(33639);async function f(e,t){let{account:r=e.account,chain:f,gas:p,nonce:m,type:g}=t;if(!r)throw new l.o;let b=(0,n.T)(r),w=await (0,u.s)(e,o.Q,"getBlock")({blockTag:"latest"}),v={...t,from:b.address};if(void 0===m&&(v.nonce=await (0,u.s)(e,s.K,"getTransactionCount")({address:b.address,blockTag:"pending"})),void 0===g)try{v.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new h.j3({transaction:e})}(v)}catch{v.type="bigint"==typeof w.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===v.type){let{maxFeePerGas:r,maxPriorityFeePerGas:n}=await (0,i.C)(e,{block:w,chain:f,request:v});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<n)throw new c.ld({maxPriorityFeePerGas:n});v.maxPriorityFeePerGas=n,v.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new c.e5;let{gasPrice:r}=await (0,i.C)(e,{block:w,chain:f,request:v,type:"legacy"});v.gasPrice=r}return void 0===p&&(v.gas=await (0,u.s)(e,a.Q,"estimateGas")({...v,account:{address:b.address,type:"json-rpc"}})),(0,d.F)(v),v}},99238:function(e,t,r){"use strict";async function n(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}r.d(t,{p:function(){return n}})},66403:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});let n=(0,r(86164).a)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},16189:function(e,t,r){"use strict";let n;r.d(t,{e:function(){return o}});var i=r(14503);let a=256;function o(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,key:o="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,d=e.account?(0,i.T)(e.account):void 0,{config:h,request:f,value:p}=e.transport({chain:u,pollingInterval:l}),m={account:d,batch:t,cacheTime:r,chain:u,key:o,name:s,pollingInterval:l,request:f,transport:{...h,...p},type:c,uid:function(e=11){if(!n||a+e>512){n="",a=0;for(let e=0;e<256;e++)n+=(256+256*Math.random()|0).toString(16).substring(1)}return n.substring(a,a+++e)}()};return Object.assign(m,{extend:function e(t){return r=>{let n=r(t);for(let e in m)delete n[e];let i={...t,...n};return Object.assign(i,{extend:e(i)})}}(m)})}},79578:function(e,t,r){"use strict";r.d(t,{K:function(){return U}});var n=r(16189),i=r(79524),a=r(92106);async function o(e,{chain:t}){let{id:r,name:n,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,a.eC)(r),chainName:n,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:e})=>e):void 0}]})}var s=r(30286),l=r(14503),c=r(8998),u=r(80377);function d({chain:e,currentChainId:t}){if(!e)throw new u.Bk;if(t!==e.id)throw new u.Yl({chain:e,currentChainId:t})}var h=r(26445),f=r(33639),p=r(87469),m=r(61163),g=r(74688),b=r(93714),w=r(47531),v=r(57331),y=r(99238);async function x(e,t){let{account:r=e.account,chain:n=e.chain,accessList:a,data:o,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:k,...S}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/sendTransaction"});let A=(0,l.T)(r);try{let r;if((0,w.F)(t),null!==n&&(r=await (0,b.s)(e,i.L,"getChainId")({}),d({currentChainId:r,chain:n})),"local"===A.type){let t=await (0,b.s)(e,v.Z,"prepareTransactionRequest")({account:A,accessList:a,chain:n,data:o,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:k,...S});r||(r=await (0,b.s)(e,i.L,"getChainId")({}));let l=n?.serializers?.transaction,c=await A.signTransaction({...t,chainId:r},{serializer:l});return await (0,b.s)(e,y.p,"sendRawTransaction")({serializedTransaction:c})}let l=e.chain?.formatters?.transactionRequest?.format,c=(l||g.tG)({...(0,m.K)(S,{format:l}),accessList:a,data:o,from:A.address,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:k});return await e.request({method:"eth_sendTransaction",params:[c]})}catch(e){throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,p.k)(e,r);return t instanceof h.cj?e:t})();return new f.mk(n,{docsPath:t,...r})}(e,{...t,account:A,chain:t.chain||void 0})}}var C=r(45775);async function E(e){return e.account?.type==="local"?[e.account.address]:(await e.request({method:"eth_accounts"})).map(e=>(0,C.x)(e))}async function _(e){return await e.request({method:"wallet_getPermissions"})}async function k(e){return(await e.request({method:"eth_requestAccounts"})).map(e=>(0,C.K)(e))}async function S(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function A(e,{account:t=e.account,message:r}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signMessage"});let n=(0,l.T)(t);if("local"===n.type)return n.signMessage({message:r});let i="string"==typeof r?(0,a.$G)(r):r.raw instanceof Uint8Array?(0,a.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[i,n.address]})}async function O(e,t){let{account:r=e.account,chain:n=e.chain,...o}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,l.T)(r);(0,w.F)({account:s,...t});let u=await (0,b.s)(e,i.L,"getChainId")({});null!==n&&d({currentChainId:u,chain:n});let h=n?.formatters||e.chain?.formatters,f=h?.transactionRequest?.format||g.tG;return"local"===s.type?s.signTransaction({...o,chainId:u},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...f(o),chainId:(0,a.eC)(u),from:s.address}]})}var P=r(15102),I=r(96070),T=r(71352);async function $(e,{account:t=e.account,domain:r,message:n,primaryType:i,types:a}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signTypedData"});let o=(0,l.T)(t),s={EIP712Domain:(0,T.cj)({domain:r}),...a};if((0,T.iC)({domain:r,message:n,primaryType:i,types:s}),"local"===o.type)return o.signTypedData({domain:r,primaryType:i,types:s,message:n});let u=(0,I.P)({domain:r??{},primaryType:i,types:s,message:n},(e,t)=>(0,P.v)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[o.address,u]})}async function R(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,a.eC)(t)}]})}async function D(e,t){return await e.request({method:"wallet_watchAsset",params:t})}var N=r(77799);async function j(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:a,...o}){let s=(0,N.R)({abi:t,args:n,functionName:a});return await (0,b.s)(e,x,"sendTransaction")({data:`${s}${i?i.replace("0x",""):""}`,to:r,...o})}function M(e){return{addChain:t=>o(e,t),deployContract:t=>(function(e,{abi:t,args:r,bytecode:n,...i}){let a=(0,s.w)({abi:t,args:r,bytecode:n});return x(e,{...i,data:a})})(e,t),getAddresses:()=>E(e),getChainId:()=>(0,i.L)(e),getPermissions:()=>_(e),prepareTransactionRequest:t=>(0,v.Z)(e,t),requestAddresses:()=>k(e),requestPermissions:t=>S(e,t),sendRawTransaction:t=>(0,y.p)(e,t),sendTransaction:t=>x(e,t),signMessage:t=>A(e,t),signTransaction:t=>O(e,t),signTypedData:t=>$(e,t),switchChain:t=>R(e,t),watchAsset:t=>D(e,t),writeContract:t=>j(e,t)}}function U(e){let{key:t="wallet",name:r="Wallet Client",transport:i}=e;return(0,n.e)({...e,key:t,name:r,transport:e=>i({...e,retryCount:0}),type:"walletClient"}).extend(M)}},31031:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(37029);function i({key:e,name:t,request:r,retryCount:i=3,retryDelay:a=150,timeout:o,type:s},l){return{config:{key:e,name:t,request:r,retryCount:i,retryDelay:a,timeout:o,type:s},request:(0,n.n)(r,{retryCount:i,retryDelay:a}),value:l}}},3980:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});var n=r(31031);function i(e,t={}){let{key:r="custom",name:i="Custom Provider",retryDelay:a}=t;return({retryCount:o})=>(0,n.q)({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:a,type:"custom"})}},16693:function(e,t,r){"use strict";r.d(t,{$o:function(){return c},F8:function(){return n},X$:function(){return l},du:function(){return o},k3:function(){return a},nZ:function(){return s}});let n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],a=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],o=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},21746:function(e,t,r){"use strict";r.d(t,{$:function(){return n},Up:function(){return i},hZ:function(){return a}});let n={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},a={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:function(e,t,r){"use strict";r.d(t,{Bd:function(){return a},Zn:function(){return i},ez:function(){return n}});let n={gwei:9,wei:18},i={ether:-9,wei:9},a={ether:-18,gwei:-9}},57412:function(e,t,r){"use strict";r.d(t,{CI:function(){return _},FM:function(){return p},Gy:function(){return C},KY:function(){return y},M4:function(){return d},MX:function(){return w},S4:function(){return v},SM:function(){return x},cO:function(){return s},dh:function(){return E},fM:function(){return o},fs:function(){return h},gr:function(){return u},hn:function(){return k},lC:function(){return m},mv:function(){return g},wM:function(){return S},wb:function(){return c},xB:function(){return l},xL:function(){return b},yP:function(){return f}});var n=r(80522),i=r(39135),a=r(62027);class o extends a.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends a.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l extends a.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,n.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class c extends a.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends a.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends a.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends a.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class f extends a.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends a.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class m extends a.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class g extends a.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class b extends a.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class w extends a.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class v extends a.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,n.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,n.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class y extends a.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class x extends a.G{constructor({abiItem:e,data:t,params:r,size:i}){super(`Data size of ${i} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,n.h)(r,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=i}}class C extends a.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,n.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class E extends a.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class _ extends a.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class k extends a.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class S extends a.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(62027);class i extends n.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:function(e,t,r){"use strict";r.d(t,{b:function(){return i}});var n=r(62027);class i extends n.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:function(e,t,r){"use strict";r.d(t,{G:function(){return i}});var n=r(35280);class i extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,n.bo)()});let r=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,a=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...a?[`Docs: https://viem.sh${a}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=a,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},79814:function(e,t,r){"use strict";r.d(t,{f:function(){return i}});var n=r(62027);class i extends n.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}},80377:function(e,t,r){"use strict";r.d(t,{Bk:function(){return o},Yl:function(){return a},mm:function(){return i},pZ:function(){return s}});var n=r(62027);class i extends n.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class a extends n.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class o extends n.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends n.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},97405:function(e,t,r){"use strict";r.d(t,{cg:function(){return g},uq:function(){return b},Lu:function(){return w},Dk:function(){return v},VQ:function(){return y}});var n=r(14503),i=r(21746),a=r(86899),o=r(80522),s=r(96070);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:n=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(40840),u=r(39625),d=r(67795),h=r(57412),f=r(62027),p=r(33639),m=r(35280);class g extends f.G{constructor(e,{account:t,docsPath:r,chain:i,data:a,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:h,to:f,value:m}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",(0,p.xr)({from:(t?(0,n.T)(t):void 0)?.address,to:f,value:void 0!==m&&`${(0,u.d)(m)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:a,gas:o,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class b extends f.G{constructor(e,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:a,sender:s}){let u=(0,c.mE)({abi:t,args:r,name:a}),d=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0;super(e.shortMessage||`An unknown error occurred while executing the contract function "${a}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",(0,p.xr)({address:n&&(0,m.CR)(n),function:u?(0,o.t)(u,{includeName:!0}):void 0,args:d&&"()"!==d&&`${[...Array(a?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s})].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=n,this.functionName=a,this.sender=s}}class w extends f.G{constructor({abi:e,data:t,functionName:r,message:n}){let s,c,u,d,f;if(t&&"0x"!==t)try{let{abiItem:r,errorName:n,args:s}=f=(0,a.p)({abi:e,data:t});if("Error"===n)u=s[0];else if("Panic"===n){let[e]=s;u=i.$[e]}else{let e=r?(0,o.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(n?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else n&&(u=n);s instanceof h.yP&&(d=s.signature,c=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=f,this.reason=u,this.signature=d}}class v extends f.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class y extends f.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},69760:function(e,t,r){"use strict";r.d(t,{$:function(){return a},m:function(){return i}});var n=r(62027);class i extends n.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class a extends n.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},87788:function(e,t,r){"use strict";r.d(t,{Cd:function(){return a},J5:function(){return i},M6:function(){return o}});var n=r(62027);class i extends n.G{constructor({max:e,min:t,signed:r,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class a extends n.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class o extends n.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},15371:function(e,t,r){"use strict";r.d(t,{Fz:function(){return a},e5:function(){return o},ld:function(){return s}});var n=r(67795),i=r(62027);class a extends i.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class o extends i.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class s extends i.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,n.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},26445:function(e,t,r){"use strict";r.d(t,{C_:function(){return d},G$:function(){return s},Hh:function(){return o},M_:function(){return a},WF:function(){return h},ZI:function(){return l},cj:function(){return g},cs:function(){return m},dR:function(){return f},pZ:function(){return p},se:function(){return u},vU:function(){return c}});var n=r(67795),i=r(62027);class a extends i.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(a,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class o extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends i.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends i.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class m extends i.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(m,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class g extends i.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:function(e,t,r){"use strict";r.d(t,{Gg:function(){return o},W5:function(){return c},bs:function(){return l},c9:function(){return s}});var n=r(96070),i=r(62027),a=r(35280);class o extends i.G{constructor({body:e,details:t,headers:r,status:i,url:o}){super("HTTP request failed.",{details:t,metaMessages:[i&&`Status: ${i}`,`URL: ${(0,a.Gr)(o)}`,e&&`Request body: ${(0,n.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=o}}class s extends i.G{constructor({body:e,details:t,url:r}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,a.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class l extends i.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,a.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends i.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,a.Gr)(t)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return w},I0:function(){return E},KB:function(){return m},LX:function(){return c},Og:function(){return f},PE:function(){return y},Pv:function(){return b},Ts:function(){return x},XS:function(){return d},ab:function(){return v},gS:function(){return g},ir:function(){return k},nY:function(){return u},pT:function(){return p},s7:function(){return s},u5:function(){return C},x3:function(){return _},yR:function(){return h}});var n=r(62027),i=r(78863);class a extends n.G{constructor(e,{code:t,docsPath:r,metaMessages:n,shortMessage:a}){super(a,{cause:e,docsPath:r,metaMessages:n||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof i.bs?e.code:t??-1}}class o extends a{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends a{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends a{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends a{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends a{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends a{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends a{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class f extends a{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class p extends a{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class m extends a{constructor(e){super(e,{code:m.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class g extends a{constructor(e){super(e,{code:g.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class b extends a{constructor(e){super(e,{code:b.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class w extends a{constructor(e){super(e,{code:w.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class v extends o{constructor(e){super(e,{code:v.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class y extends o{constructor(e){super(e,{code:y.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends o{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends o{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends o{constructor(e){super(e,{code:E.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class _ extends o{constructor(e){super(e,{code:_.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class k extends a{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},33639:function(e,t,r){"use strict";r.d(t,{Bh:function(){return u},Yb:function(){return d},j3:function(){return l},mc:function(){return h},mk:function(){return c},xY:function(){return s},xr:function(){return o}});var n=r(39625),i=r(67795),a=r(62027);function o(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends a.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends a.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",o(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends a.G{constructor(e,{account:t,docsPath:r,chain:a,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:p}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",o({chain:a&&`${a?.name} (id: ${a?.id})`,from:t?.address,to:f,value:void 0!==p&&`${(0,n.d)(p)} ${a?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,i.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,i.o)(d)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends a.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:n,index:i}){let a="Transaction";r&&void 0!==i&&(a=`Transaction at block time "${r}" at index "${i}"`),e&&void 0!==i&&(a=`Transaction at block hash "${e}" at index "${i}"`),t&&void 0!==i&&(a=`Transaction at block number "${t}" at index "${i}"`),n&&(a=`Transaction with hash "${n}"`),super(`${a} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class d extends a.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class h extends a.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},35280:function(e,t,r){"use strict";r.d(t,{CR:function(){return n},Gr:function(){return i},bo:function(){return a}});let n=e=>e,i=e=>e,a=()=>"viem@1.21.3"},34450:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var n=r(57412),i=r(45775),a=r(39135),o=r(3972),s=r(61836),l=r(95946),c=r(45444);function u(e,t){if("0x"===t&&e.length>0)throw new n.wb;if((0,a.d)(t)&&32>(0,a.d)(t))throw new n.xB({data:t,params:e,size:(0,a.d)(t)});return function({data:e,params:t}){let r=[],u=0;for(let h=0;h<t.length;h++){if(u>=(0,a.d)(e))throw new n.xB({data:e,params:t,size:(0,a.d)(e)});let{consumed:f,value:p}=function e({data:t,param:r,position:a}){let u=(0,c.S)(r.type);if(u){let[n,i]=u;return function(t,{param:r,length:n,position:i}){if(!n){let n=(0,l.ly)((0,o.tP)(t,i,i+32,{strict:!0})),a=(0,l.ly)((0,o.tP)(t,n,n+32,{strict:!0})),s=0,c=[];for(let i=0;i<a;++i){let i=e({data:(0,o.tP)(t,n+32),param:r,position:s});s+=i.consumed,c.push(i.value)}return{value:c,consumed:32}}if(d(r)){let a=(0,c.S)(r.type),s=!a?.[0],u=0,d=[];for(let a=0;a<n;++a){let n=(0,l.ly)((0,o.tP)(t,i,i+32,{strict:!0})),c=e({data:(0,o.tP)(t,n),param:r,position:s?u:32*a});u+=c.consumed,d.push(c.value)}return{value:d,consumed:32}}let a=0,s=[];for(let o=0;o<n;++o){let n=e({data:t,param:r,position:i+a});a+=n.consumed,s.push(n.value)}return{value:s,consumed:a}}(t,{length:n,param:{...r,type:i},position:a})}if("tuple"===r.type)return function(t,{param:r,position:n}){let i=0===r.components.length||r.components.some(({name:e})=>!e),a=i?[]:{},s=0;if(d(r)){let c=(0,l.ly)((0,o.tP)(t,n,n+32,{strict:!0}));for(let n=0;n<r.components.length;++n){let l=r.components[n],u=e({data:(0,o.tP)(t,c),param:l,position:s});s+=u.consumed,a[i?n:l?.name]=u.value}return{consumed:32,value:a}}for(let o=0;o<r.components.length;++o){let l=r.components[o],c=e({data:t,param:l,position:n+s});s+=c.consumed,a[i?o:l?.name]=c.value}return{consumed:s,value:a}}(t,{param:r,position:a});if("string"===r.type)return function(e,{position:t}){let r=(0,l.ly)((0,o.tP)(e,t,t+32,{strict:!0})),n=(0,l.ly)((0,o.tP)(e,r,r+32,{strict:!0}));return 0===n?{consumed:32,value:""}:{consumed:32,value:(0,l.rR)((0,s.f)((0,o.tP)(e,r+32,r+32+n,{strict:!0})))}}(t,{position:a});if(r.type.startsWith("bytes"))return function(e,{param:t,position:r}){let[n,i]=t.type.split("bytes");if(!i){let t=(0,l.ly)((0,o.tP)(e,r,r+32,{strict:!0})),n=(0,l.ly)((0,o.tP)(e,t,t+32,{strict:!0}));return 0===n?{consumed:32,value:"0x"}:{consumed:32,value:(0,o.tP)(e,t+32,t+32+n,{strict:!0})}}return{consumed:32,value:(0,o.tP)(e,r,r+parseInt(i),{strict:!0})}}(t,{param:r,position:a});let h=(0,o.tP)(t,a,a+32,{strict:!0});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,{param:t}){let r=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?(0,l.y_)(e,{signed:r}):(0,l.ly)(e,{signed:r})}}(h,{param:r});if("address"===r.type)return{consumed:32,value:(0,i.x)((0,o.tP)(h,-20))};if("bool"===r.type)return{consumed:32,value:(0,l.XA)(h)};throw new n.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:e,param:t[h],position:u});r.push(p),u+=f}return r}({data:t,params:e})}function d(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(d);let r=(0,c.S)(e.type);return!!(r&&d({...e,type:r[1]}))}},86899:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var n=r(21746),i=r(57412),a=r(3972),o=r(40552),s=r(34450),l=r(80522);function c({abi:e,data:t}){let r=(0,a.tP)(t,0,4);if("0x"===r)throw new i.wb;let c=[...e||[],n.Up,n.hZ].find(e=>"error"===e.type&&r===(0,o.o)((0,l.t)(e)));if(!c)throw new i.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:c,args:"inputs"in c&&c.inputs&&c.inputs.length>0?(0,s.r)(c.inputs,(0,a.tP)(t,4)):void 0,errorName:c.name}}},7210:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var n=r(57412),i=r(34450),a=r(40840);let o="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:r,data:s}){let l=e[0];if(r&&!(l=(0,a.mE)({abi:e,args:t,name:r})))throw new n.xL(r,{docsPath:o});if("function"!==l.type)throw new n.xL(void 0,{docsPath:o});if(!l.outputs)throw new n.MX(l.name,{docsPath:o});let c=(0,i.r)(l.outputs,s);return c&&c.length>1?c:c&&1===c.length?c[0]:void 0}},45444:function(e,t,r){"use strict";r.d(t,{E:function(){return d},S:function(){return f}});var n=r(57412),i=r(26087),a=r(49321),o=r(57040),s=r(61769),l=r(39135),c=r(3972),u=r(92106);function d(e,t){if(e.length!==t.length)throw new n.fs({expectedLength:e.length,givenLength:t.length});let r=h(function({params:e,values:t}){let r=[];for(let d=0;d<e.length;d++)r.push(function e({param:t,value:r}){let d=f(t.type);if(d){let[i,a]=d;return function(t,{length:r,param:i}){let a=null===r;if(!Array.isArray(t))throw new n.hn(t);if(!a&&t.length!==r)throw new n.gr({expectedLength:r,givenLength:t.length,type:`${i.type}[${r}]`});let s=!1,l=[];for(let r=0;r<t.length;r++){let n=e({param:i,value:t[r]});n.dynamic&&(s=!0),l.push(n)}if(a||s){let e=h(l);if(a){let t=(0,u.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,o.zo)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,o.zo)(l.map(({encoded:e})=>e))}}(r,{length:i,param:{...t,type:a}})}if("tuple"===t.type)return function(t,{param:r}){let n=!1,i=[];for(let a=0;a<r.components.length;a++){let o=r.components[a],s=Array.isArray(t)?a:o.name,l=e({param:o,value:t[s]});i.push(l),l.dynamic&&(n=!0)}return{dynamic:n,encoded:n?h(i):(0,o.zo)(i.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,a.U)(e))throw new i.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(r))};if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(r,{signed:t.type.startsWith("int")});if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),i=(0,l.d)(e);if(!r){let t=e;return i%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,o.zo)([(0,s.gc)((0,u.eC)(i,{size:32})),t])}}if(i!==parseInt(r))throw new n.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,u.$G)(e),r=Math.ceil((0,l.d)(t)/32),n=[];for(let e=0;e<r;e++)n.push((0,s.gc)((0,c.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,o.zo)([(0,s.gc)((0,u.eC)((0,l.d)(t),{size:32})),...n])}}(r);throw new n.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[d],value:t[d]}));return r}({params:e,values:t}));return 0===r.length?"0x":r}function h(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:n,encoded:i}=e[r];n?t+=32:t+=(0,l.d)(i)}let r=[],n=[],i=0;for(let a=0;a<e.length;a++){let{dynamic:o,encoded:s}=e[a];o?(r.push((0,u.eC)(t+i,{size:32})),n.push(s),i+=(0,l.d)(s)):r.push(s)}return(0,o.zo)([...r,...n])}function f(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},30286:function(e,t,r){"use strict";r.d(t,{w:function(){return s}});var n=r(57412),i=r(57040),a=r(45444);let o="/docs/contract/encodeDeployData";function s({abi:e,args:t,bytecode:r}){if(!t||0===t.length)return r;let s=e.find(e=>"type"in e&&"constructor"===e.type);if(!s)throw new n.fM({docsPath:o});if(!("inputs"in s)||!s.inputs||0===s.inputs.length)throw new n.cO({docsPath:o});let l=(0,a.E)(s.inputs,t);return(0,i.SM)([r,l])}},77799:function(e,t,r){"use strict";r.d(t,{R:function(){return c}});var n=r(57412),i=r(57040),a=r(40552),o=r(45444),s=r(80522),l=r(40840);function c({abi:e,args:t,functionName:r}){let c=e[0];if(r&&!(c=(0,l.mE)({abi:e,args:t,name:r})))throw new n.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==c.type)throw new n.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let u=(0,s.t)(c),d=(0,a.o)(u),h="inputs"in c&&c.inputs?(0,o.E)(c.inputs,t??[]):void 0;return(0,i.SM)([d,h??"0x"])}},80522:function(e,t,r){"use strict";r.d(t,{h:function(){return a},t:function(){return i}});var n=r(57412);function i(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new n.wM(e.type);return`${e.name}(${a(e.inputs,{includeName:t})})`}function a(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${a(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},40840:function(e,t,r){"use strict";r.d(t,{mE:function(){return l}});var n=r(57412),i=r(15102),a=r(74059),o=r(40552),s=r(49321);function l({abi:e,args:t=[],name:r}){let l;let c=(0,i.v)(r,{strict:!1}),u=e.filter(e=>c?"function"===e.type?(0,o.o)(e)===r:"event"===e.type&&(0,a.e)(e)===r:"name"in e&&e.name===r);if(0!==u.length){if(1===u.length)return u[0];for(let e of u)if("inputs"in e){if(!t||0===t.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===t.length&&t.every((t,r)=>{let n="inputs"in e&&e.inputs[r];return!!n&&function e(t,r){let n=typeof t,i=r.type;switch(i){case"address":return(0,s.U)(t);case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:if("tuple"===i&&"components"in r)return Object.values(r.components).every((r,n)=>e(Object.values(t)[n],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i))return"number"===n||"bigint"===n;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))return"string"===n||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:i.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,n)})){if(l&&"inputs"in l&&l.inputs){let r=function e(t,r,n){for(let i in t){let a=t[i],o=r[i];if("tuple"===a.type&&"tuple"===o.type&&"components"in a&&"components"in o)return e(a.components,o.components,n[i]);let l=[a.type,o.type];if(l.includes("address")&&l.includes("bytes20")||(l.includes("address")&&l.includes("string")||l.includes("address")&&l.includes("bytes"))&&(0,s.U)(n[i]))return l}}(e.inputs,l.inputs,t);if(r)throw new n.S4({abiItem:e,type:r[0]},{abiItem:l,type:r[1]})}l=e}}return l||u[0]}}},45775:function(e,t,r){"use strict";r.d(t,{K:function(){return l},x:function(){return s}});var n=r(26087),i=r(11187),a=r(88184),o=r(49321);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),n=(0,a.w)((0,i.qX)(r),"bytes"),o=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&o[e]&&(o[e]=o[e].toUpperCase()),(15&n[e>>1])>=8&&o[e+1]&&(o[e+1]=o[e+1].toUpperCase());return`0x${o.join("")}`}function l(e,t){if(!(0,o.U)(e))throw new n.b({address:e});return s(e,t)}},49321:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});let n=/^0x[a-fA-F0-9]{40}$/;function i(e){return n.test(e)}},37029:function(e,t,r){"use strict";r.d(t,{n:function(){return l},y:function(){return s}});var n=r(62027),i=r(78863),a=r(39028),o=r(7760);let s=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:e instanceof i.Gg&&!!e.status&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function l(e,{retryDelay:t=150,retryCount:r=3}={}){return async l=>(0,o.J)(async()=>{try{return await e(l)}catch(e){switch(e.code){case a.s7.code:throw new a.s7(e);case a.B.code:throw new a.B(e);case a.LX.code:throw new a.LX(e);case a.nY.code:throw new a.nY(e);case a.XS.code:throw new a.XS(e);case a.yR.code:throw new a.yR(e);case a.Og.code:throw new a.Og(e);case a.pT.code:throw new a.pT(e);case a.KB.code:throw new a.KB(e);case a.gS.code:throw new a.gS(e);case a.Pv.code:throw new a.Pv(e);case a.GD.code:throw new a.GD(e);case a.ab.code:throw new a.ab(e);case a.PE.code:throw new a.PE(e);case a.Ts.code:throw new a.Ts(e);case a.u5.code:throw new a.u5(e);case a.I0.code:throw new a.I0(e);case a.x3.code:throw new a.x3(e);case 5e3:throw new a.ab(e);default:if(e instanceof n.G)throw e;throw new a.ir(e)}}},{delay:({count:e,error:r})=>{if(r&&r instanceof i.Gg){let e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:r,shouldRetry:({error:e})=>!s(e)})}},86164:function(e,t,r){"use strict";function n(e,t={}){let{fees:r=e.fees,formatters:n=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:r,formatters:n,serializers:i}}r.d(t,{a:function(){return n}})},47864:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(80377);function i({blockNumber:e,chain:t,contract:r}){let i=t?.contracts?.[r];if(!i)throw new n.mm({chain:t,contract:{name:r}});if(e&&i.blockCreated&&i.blockCreated>e)throw new n.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:i.blockCreated}});return i.address}},57040:function(e,t,r){"use strict";function n(e){return"string"==typeof e[0]?i(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),n=0;for(let t of e)r.set(t,n),n+=t.length;return r}(e)}function i(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:function(){return i},zo:function(){return n}})},15102:function(e,t,r){"use strict";function n(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return n}})},61769:function(e,t,r){"use strict";r.d(t,{gc:function(){return a},vk:function(){return i}});var n=r(69760);function i(e,{dir:t,size:r=32}={}){return"string"==typeof e?a(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new n.$({size:e.length,targetSize:r,type:"bytes"});let i=new Uint8Array(r);for(let n=0;n<r;n++){let a="right"===t;i[a?n:r-n-1]=e[a?n:e.length-n-1]}return i}(e,{dir:t,size:r})}function a(e,{dir:t,size:r=32}={}){if(null===r)return e;let i=e.replace("0x","");if(i.length>2*r)throw new n.$({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*r,"0")}`}},39135:function(e,t,r){"use strict";r.d(t,{d:function(){return i}});var n=r(15102);function i(e){return(0,n.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:function(e,t,r){"use strict";r.d(t,{tP:function(){return o}});var n=r(69760),i=r(15102),a=r(39135);function o(e,t,r,{strict:n}={}){return(0,i.v)(e,{strict:!1})?function(e,t,r,{strict:n}={}){s(e,t);let i=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return n&&l(i,t,r),i}(e,t,r,{strict:n}):function(e,t,r,{strict:n}={}){s(e,t);let i=e.slice(t,r);return n&&l(i,t,r),i}(e,t,r,{strict:n})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,a.d)(e)-1)throw new n.m({offset:t,position:"start",size:(0,a.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,a.d)(e)!==r-t)throw new n.m({offset:r,position:"end",size:(0,a.d)(e)})}},61836:function(e,t,r){"use strict";function n(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)n++;return(r="left"===t?r.slice(n):r.slice(0,r.length-n),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return n}})},95946:function(e,t,r){"use strict";r.d(t,{XA:function(){return c},Yf:function(){return s},ly:function(){return u},rR:function(){return d},y_:function(){return l}});var n=r(87788),i=r(39135),a=r(61836),o=r(11187);function s(e,{size:t}){if((0,i.d)(e)>t)throw new n.M6({givenSize:(0,i.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let n=BigInt(e);if(!r)return n;let i=(e.length-2)/2;return n<=(1n<<8n*BigInt(i)-1n)-1n?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function c(e,t={}){let r=e;if(t.size&&(s(r,{size:t.size}),r=(0,a.f)(r)),"0x00"===(0,a.f)(r))return!1;if("0x01"===(0,a.f)(r))return!0;throw new n.Cd(r)}function u(e,t={}){return Number(l(e,t))}function d(e,t={}){let r=(0,o.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,a.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},11187:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return h},qX:function(){return f}});var n=r(62027),i=r(15102),a=r(61769),o=r(95946),s=r(92106);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?h((0,s.eC)(e,t)):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,o.Yf)(r,{size:t.size}),(0,a.vk)(r,{size:t.size})):r}(e,t):(0,i.v)(e)?h(e,t):f(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,o.Yf)(r,{size:t.size}),r=(0,a.vk)(r,{dir:"right",size:t.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);let s=i.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=d(i.charCodeAt(t++)),a=d(i.charCodeAt(t++));if(void 0===r||void 0===a)throw new n.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);l[e]=16*r+a}return l}function f(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,a.vk)(r,{dir:"right",size:t.size})):r}},92106:function(e,t,r){"use strict";r.d(t,{$G:function(){return h},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var n=r(87788),i=r(61769),a=r(95946);let o=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,i.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=o[e[t]];let n=`0x${r}`;return"number"==typeof t.size?((0,a.Yf)(n,{size:t.size}),(0,i.vk)(n,{dir:"right",size:t.size})):n}function u(e,t={}){let r;let{signed:a,size:o}=t,s=BigInt(e);o?r=a?(1n<<8n*BigInt(o)-1n)-1n:2n**(8n*BigInt(o))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&a?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new n.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:a,size:o,value:`${e}${t}`})}let c=`0x${(a&&s<0?(1n<<BigInt(8*o))+BigInt(s):s).toString(16)}`;return o?(0,i.vk)(c,{size:o}):c}let d=new TextEncoder;function h(e,t={}){return c(d.encode(e),t)}},87469:function(e,t,r){"use strict";r.d(t,{k:function(){return a}});var n=r(62027),i=r(26445);function a(e,t){let r=(e.details||"").toLowerCase(),a=e.walk(e=>e.code===i.M_.code);return a instanceof n.G?new i.M_({cause:e,message:a.details}):i.M_.nodeMessage.test(r)?new i.M_({cause:e,message:e.details}):i.Hh.nodeMessage.test(r)?new i.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.G$.nodeMessage.test(r)?new i.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.ZI.nodeMessage.test(r)?new i.ZI({cause:e,nonce:t?.nonce}):i.vU.nodeMessage.test(r)?new i.vU({cause:e,nonce:t?.nonce}):i.se.nodeMessage.test(r)?new i.se({cause:e,nonce:t?.nonce}):i.C_.nodeMessage.test(r)?new i.C_({cause:e}):i.WF.nodeMessage.test(r)?new i.WF({cause:e,gas:t?.gas}):i.dR.nodeMessage.test(r)?new i.dR({cause:e,gas:t?.gas}):i.pZ.nodeMessage.test(r)?new i.pZ({cause:e}):i.cs.nodeMessage.test(r)?new i.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new i.cj({cause:e})}},43310:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(6073);function i(e){let t=e.transactions?.map(e=>"string"==typeof e?e:n.Tr(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}},61163:function(e,t,r){"use strict";function n(e,{format:t}){if(!t)return{};let r={};return!function t(n){for(let i of Object.keys(n))i in e&&(r[i]=e[i]),n[i]&&"object"==typeof n[i]&&!Array.isArray(n[i])&&t(n[i])}(t(e||{})),r}r.d(t,{K:function(){return n}})},6073:function(e,t,r){"use strict";r.d(t,{Tr:function(){return a},c8:function(){return i}});var n=r(95946);let i={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function a(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,n.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,n.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?i[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}},74688:function(e,t,r){"use strict";r.d(t,{tG:function(){return a}});var n=r(92106);let i={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function a(e){return{...e,gas:void 0!==e.gas?(0,n.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,n.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,n.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,n.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,n.eC)(e.nonce):void 0,type:void 0!==e.type?i[e.type]:void 0,value:void 0!==e.value?(0,n.eC)(e.value):void 0}}},93714:function(e,t,r){"use strict";function n(e,t,r){return n=>e[t.name||r]?.(n)??t(e,n)}r.d(t,{s:function(){return n}})},74059:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var n=r(11187),i=r(66620);let a=e=>(0,i.r)(e);var o=r(88184);let s=e=>(0,o.w)((0,n.O0)(e)),l=e=>s(a(e))},40552:function(e,t,r){"use strict";r.d(t,{o:function(){return l}});var n=r(3972),i=r(11187),a=r(66620),o=r(88184);let s=e=>(0,o.w)((0,i.O0)(e)),l=e=>(0,n.tP)(s((0,a.r)(e)),0,4)},66620:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});let n=/^tuple(?<array>(\[(\d*)\])*)$/;function i(e){let t="",r=e.length;for(let i=0;i<r;i++)t+=function e(t){let r=t.type;if(n.test(t.type)&&"components"in t){r="(";let i=t.components.length;for(let n=0;n<i;n++)r+=e(t.components[n]),n<i-1&&(r+=", ");let a=function(e,t){let r=e.exec(t);return r?.groups}(n,t.type);return r+=`)${a?.array??""}`,e({...t,type:r})}return("indexed"in t&&t.indexed&&(r=`${r} indexed`),t.name)?`${r} ${t.name}`:r}(e[i]),i!==r-1&&(t+=", ");return t}var a=r(62027);let o=e=>{var t;return function(e){let t=!0,r="",n=0,i="",o=!1;for(let a=0;a<e.length;a++){let s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&n++,")"===s&&n--,t){if(0===n){if(" "===s&&["event","function",""].includes(i))i="";else if(i+=s,")"===s){o=!0;break}continue}if(" "===s){","!==e[a-1]&&","!==r&&",("!==r&&(r="",t=!1);continue}i+=s,r+=s}}if(!o)throw new a.G("Unable to normalize signature.");return i}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${i(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${i(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${i(t.inputs)})`:"error"===t.type?`error ${t.name}(${i(t.inputs)})`:"constructor"===t.type?`constructor(${i(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")}},88184:function(e,t,r){"use strict";function n(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function i(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function a(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:function(){return D}});let o=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,d=(e,t,r)=>e<<r-32|t>>>64-r,h=e=>e instanceof Uint8Array,f=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4));if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");function p(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!h(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class m{clone(){return this._cloneInto()}}let[g,b,w]=[[],[],[]],v=BigInt(0),y=BigInt(1),x=BigInt(2),C=BigInt(7),E=BigInt(256),_=BigInt(113);for(let e=0,t=y,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],g.push(2*(5*n+r)),b.push((e+1)*(e+2)/2%64);let i=v;for(let e=0;e<7;e++)(t=(t<<y^(t>>C)*_)%E)&x&&(i^=y<<(y<<BigInt(e))-y);w.push(i)}let[k,S]=function(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:a,l}=function(e,t=!1){return t?{h:Number(e&o),l:Number(e>>s&o)}:{h:0|Number(e>>s&o),l:0|Number(e&o)}}(e[i],t);[r[i],n[i]]=[a,l]}return[r,n]}(w,!0),A=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),O=(e,t,r)=>r>32?d(e,t,r):c(e,t,r);class P extends m{constructor(e,t,r,i=!1,a=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=i,this.rounds=a,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=f(this.state)}keccak(){!function(e,t=24){let r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,i=(t+2)%10,a=r[i],o=r[i+1],s=A(a,o,1)^r[n],l=O(a,o,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],i=e[3];for(let r=0;r<24;r++){let n=b[r],a=A(t,i,n),o=O(t,i,n),s=g[r];t=e[s],i=e[s+1],e[s]=a,e[s+1]=o}for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}e[0]^=k[n],e[1]^=S[n]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){a(this);let{blockLen:t,state:r}=this,n=(e=p(e)).length;for(let i=0;i<n;){let a=Math.min(t-this.pos,n-i);for(let t=0;t<a;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:n}=this;e[r]^=t,(128&t)!=0&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){a(this,!1),i(e),this.finish();let t=this.state,{blockLen:r}=this;for(let n=0,i=e.length;n<i;){this.posOut>=r&&this.keccak();let a=Math.min(r-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+a),n),this.posOut+=a,n+=a}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return n(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(!function(e,t){i(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:n,rounds:i,enableXOF:a}=this;return e||(e=new P(t,r,n,a,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=n,e.enableXOF=a,e.destroyed=this.destroyed,e}}let I=function(e){let t=t=>e().update(p(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new P(136,1,32));var T=r(15102),$=r(11187),R=r(92106);function D(e,t){let r=I((0,T.v)(e,{strict:!1})?(0,$.O0)(e):e);return"bytes"===(t||"hex")?r:(0,R.NC)(r)}},32357:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});let n=new Map;function i({fn:e,id:t,shouldSplitBatch:r,wait:i=0,sort:a}){let o=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{a&&Array.isArray(e)&&e.sort(a);for(let r=0;r<t.length;r++){let{pendingPromise:n}=t[r];n.resolve?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{pendingPromise:n}=t[r];n.reject?.(e)}})},s=()=>n.delete(t),l=()=>c().map(({args:e})=>e),c=()=>n.get(t)||[],u=e=>n.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},n=new Promise((e,r)=>{t.resolve=e,t.reject=r});return(r?.([...l(),e])&&o(),c().length>0)?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(o,i)),n}}}},7760:function(e,t,r){"use strict";r.d(t,{J:function(){return i}});var n=r(62914);function i(e,{delay:t=100,retryCount:r=2,shouldRetry:i=()=>!0}={}){return new Promise((a,o)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await (0,n.D)(r),s({count:l+1})};try{let t=await e();a(t)}catch(e){if(l<r&&await i({count:l,error:e}))return c({error:e});o(e)}};s()})}},96070:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});let n=(e,t,r)=>JSON.stringify(e,(e,r)=>{let n="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,n):n},r)},47531:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var n=r(14503),i=r(26087),a=r(26445),o=r(33639),s=r(49321);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,n.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new i.b({address:d.address});if(u&&!(0,s.U)(u))throw new i.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new o.xY;if(l&&l>2n**256n-1n)throw new a.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new a.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},71352:function(e,t,r){"use strict";r.d(t,{cj:function(){return d},iC:function(){return u}});var n=r(57412),i=r(26087),a=r(49321),o=r(39135),s=r(92106);let l=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,c=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u({domain:e,message:t,primaryType:r,types:u}){let d=(e,t)=>{for(let r of e){let{name:e,type:h}=r,f=t[e],p=h.match(c);if(p&&("number"==typeof f||"bigint"==typeof f)){let[e,t,r]=p;(0,s.eC)(f,{signed:"int"===t,size:parseInt(r)/8})}if("address"===h&&"string"==typeof f&&!(0,a.U)(f))throw new i.b({address:f});let m=h.match(l);if(m){let[e,t]=m;if(t&&(0,o.d)(f)!==parseInt(t))throw new n.KY({expectedSize:parseInt(t),givenSize:(0,o.d)(f)})}let g=u[h];g&&d(g,f)}};u.EIP712Domain&&e&&d(u.EIP712Domain,e),"EIP712Domain"!==r&&d(u[r],t)}function d({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},39625:function(e,t,r){"use strict";r.d(t,{d:function(){return a}});var n=r(84192),i=r(15229);function a(e,t="wei"){return(0,i.b)(e,n.ez[t])}},67795:function(e,t,r){"use strict";r.d(t,{o:function(){return a}});var n=r(84192),i=r(15229);function a(e,t="wei"){return(0,i.b)(e,n.Zn[t])}},15229:function(e,t,r){"use strict";function n(e,t){let r=e.toString(),n=r.startsWith("-");n&&(r=r.slice(1));let[i,a]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return a=a.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${a?`.${a}`:""}`}r.d(t,{b:function(){return n}})},62914:function(e,t,r){"use strict";async function n(e){return new Promise(t=>setTimeout(t,e))}r.d(t,{D:function(){return n}})},66634:function(e,t,r){"use strict";function n(){}r.d(t,{eM:function(){return et},_g:function(){return Q},mA:function(){return en}});let i="undefined"==typeof window||"Deno"in window;function a(){}function o(e,t,r){return g(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function s(e,t,r){return g(e)?[{...t,queryKey:e},r]:[e||{},t]}function l(e,t){let{type:r="all",exact:n,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(g(o)){if(n){if(t.queryHash!==u(o,t.options))return!1}else{if(!h(t.queryKey,o))return!1}}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===i||i===t.state.fetchStatus)&&(!a||!!a(t))}function c(e,t){let{exact:r,fetching:n,predicate:i,mutationKey:a}=e;if(g(a)){if(!t.options.mutationKey)return!1;if(r){if(d(t.options.mutationKey)!==d(a))return!1}else{if(!h(t.options.mutationKey,a))return!1}}return("boolean"!=typeof n||"loading"===t.state.status===n)&&(!i||!!i(t))}function u(e,t){return((null==t?void 0:t.queryKeyHashFn)||d)(e)}function d(e){return JSON.stringify(e,(e,t)=>p(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function h(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!h(e[r],t[r]))}function f(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function p(e){if(!m(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(m(r)&&r.hasOwnProperty("isPrototypeOf"))}function m(e){return"[object Object]"===Object.prototype.toString.call(e)}function g(e){return Array.isArray(e)}function b(e){return new Promise(t=>{setTimeout(t,e)})}function w(e){b(0).then(e)}let v=console,y=function(){let e=[],t=0,r=e=>{e()},n=e=>{e()},i=n=>{t?e.push(n):w(()=>{r(n)})},a=()=>{let t=e;e=[],t.length&&w(()=>{n(()=>{t.forEach(e=>{r(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||a()}return r},batchCalls:e=>(...t)=>{i(()=>{e(...t)})},schedule:i,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{n=e}}}();class x{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}class C extends x{constructor(){super(),this.setup=e=>{if(!i&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let E=new C,_=["online","offline"];class k extends x{constructor(){super(),this.setup=e=>{if(!i&&window.addEventListener){let t=()=>e();return _.forEach(e=>{window.addEventListener(e,t,!1)}),()=>{_.forEach(e=>{window.removeEventListener(e,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let S=new k;function A(e){return Math.min(1e3*2**e,3e4)}function O(e){return(null!=e?e:"online")!=="online"||S.isOnline()}class P{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function I(e){return e instanceof P}function T(e){let t,r,n,i=!1,a=0,o=!1,s=new Promise((e,t)=>{r=e,n=t}),l=()=>!E.isFocused()||"always"!==e.networkMode&&!S.isOnline(),c=n=>{o||(o=!0,null==e.onSuccess||e.onSuccess(n),null==t||t(),r(n))},u=r=>{o||(o=!0,null==e.onError||e.onError(r),null==t||t(),n(r))},d=()=>new Promise(r=>{t=e=>{let t=o||!l();return t&&r(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,o||null==e.onContinue||e.onContinue()}),h=()=>{let t;if(!o){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(c).catch(t=>{var r,n;if(o)return;let s=null!=(r=e.retry)?r:3,c=null!=(n=e.retryDelay)?n:A,f="function"==typeof c?c(a,t):c,p=!0===s||"number"==typeof s&&a<s||"function"==typeof s&&s(a,t);if(i||!p){u(t);return}a++,null==e.onFail||e.onFail(a,t),b(f).then(()=>{if(l())return d()}).then(()=>{i?u(t):h()})})}};return O(e.networkMode)?h():d().then(h),{promise:s,cancel:t=>{o||(u(new P(t)),null==e.abort||e.abort())},continue:()=>(null==t?void 0:t())?s:Promise.resolve(),cancelRetry:()=>{i=!0},continueRetry:()=>{i=!1}}}class ${destroy(){this.clearGcTimeout()}scheduleGc(){var e;this.clearGcTimeout(),"number"==typeof(e=this.cacheTime)&&e>=0&&e!==1/0&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:i?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class R extends ${constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||v,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,n=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){var r,n;let i=(r=this.state.data,null!=(n=this.options).isDataEqual&&n.isDataEqual(r,e)?r:"function"==typeof n.structuralSharing?n.structuralSharing(r,e):!1!==n.structuralSharing?function e(t,r){if(t===r)return t;let n=f(t)&&f(r);if(n||p(t)&&p(r)){let i=n?t.length:Object.keys(t).length,a=n?r:Object.keys(r),o=a.length,s=n?[]:{},l=0;for(let i=0;i<o;i++){let o=n?i:a[i];s[o]=e(t[o],r[o]),s[o]===t[o]&&l++}return i===o&&l===i?t:s}return r}(r,e):e);return this.dispatch({data:i,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),i}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let r=this.promise;return null==(t=this.retryer)||t.cancel(e),r?r.then(a).catch(a):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Math.max(this.state.dataUpdatedAt+(e||0)-Date.now(),0)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,n,i,a;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(i=this.retryer)||i.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let o=function(){if("function"==typeof AbortController)return new AbortController}(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(s);let c={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};l(c),null==(r=this.options.behavior)||r.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(n=c.fetchOptions)?void 0:n.meta))&&this.dispatch({type:"fetch",meta:null==(a=c.fetchOptions)?void 0:a.meta});let u=e=>{if(I(e)&&e.silent||this.dispatch({type:"error",error:e}),!I(e)){var t,r,n,i;null==(t=(r=this.cache.config).onError)||t.call(r,e,this),null==(n=(i=this.cache.config).onSettled)||n.call(i,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=T({fn:c.fetchFn,abort:null==o?void 0:o.abort.bind(o),onSuccess:e=>{var t,r,n,i;if(void 0===e){u(Error(this.queryHash+" data is undefined"));return}this.setData(e),null==(t=(r=this.cache.config).onSuccess)||t.call(r,e,this),null==(n=(i=this.cache.config).onSettled)||n.call(i,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var r,n;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(r=e.meta)?r:null,fetchStatus:O(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(n=e.dataUpdatedAt)?n:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=e.error;if(I(i)&&i.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:i,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),y.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}class D extends x{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var n;let i=t.queryKey,a=null!=(n=t.queryHash)?n:u(i,t),o=this.get(a);return o||(o=new R({cache:this,logger:e.getLogger(),queryKey:i,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){y.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[r]=s(e,t);return void 0===r.exact&&(r.exact=!0),this.queries.find(e=>l(r,e))}findAll(e,t){let[r]=s(e,t);return Object.keys(r).length>0?this.queries.filter(e=>l(r,e)):this.queries}notify(e){y.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){y.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){y.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class N extends ${constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||v,this.observers=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){var e,t,r,n,i,a,o,s,l,c,u,d,h,f,p,m,g,b,w,v;let y="loading"===this.state.status;try{if(!y){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let e=await (null==(u=(d=this.options).onMutate)?void 0:u.call(d,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let h=await (()=>{var e;return this.retryer=T({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,h,this.state.variables,this.state.context,this)),await (null==(r=(n=this.options).onSuccess)?void 0:r.call(n,h,this.state.variables,this.state.context)),await (null==(i=(a=this.mutationCache.config).onSettled)?void 0:i.call(a,h,null,this.state.variables,this.state.context,this)),await (null==(o=(s=this.options).onSettled)?void 0:o.call(s,h,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:h}),h}catch(e){try{throw await (null==(h=(f=this.mutationCache.config).onError)?void 0:h.call(f,e,this.state.variables,this.state.context,this)),await (null==(p=(m=this.options).onError)?void 0:p.call(m,e,this.state.variables,this.state.context)),await (null==(g=(b=this.mutationCache.config).onSettled)?void 0:g.call(b,void 0,e,this.state.variables,this.state.context,this)),await (null==(w=(v=this.options).onSettled)?void 0:w.call(v,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!O(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),y.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}class j extends x{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){let n=new N({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(n),n}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){y.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>c(e,t))}findAll(e){return this.mutations.filter(t=>c(e,t))}notify(e){y.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return y.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(a)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function M(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class U{constructor(e={}){this.queryCache=e.queryCache||new D,this.mutationCache=e.mutationCache||new j,this.logger=e.logger||v,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=E.subscribe(()=>{E.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=S.subscribe(()=>{S.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[r]=s(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state.data}ensureQueryData(e,t,r){let n=o(e,t,r),i=this.getQueryData(n.queryKey);return i?Promise.resolve(i):this.fetchQuery(n)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let n=this.queryCache.find(e),i=null==n?void 0:n.state.data,a="function"==typeof t?t(i):t;if(void 0===a)return;let s=o(e),l=this.defaultQueryOptions(s);return this.queryCache.build(this,l).setData(a,{...r,manual:!0})}setQueriesData(e,t,r){return y.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state}removeQueries(e,t){let[r]=s(e,t),n=this.queryCache;y.batch(()=>{n.findAll(r).forEach(e=>{n.remove(e)})})}resetQueries(e,t,r){let[n,i]=s(e,t,r),a=this.queryCache,o={type:"active",...n};return y.batch(()=>(a.findAll(n).forEach(e=>{e.reset()}),this.refetchQueries(o,i)))}cancelQueries(e,t,r){let[n,i={}]=s(e,t,r);return void 0===i.revert&&(i.revert=!0),Promise.all(y.batch(()=>this.queryCache.findAll(n).map(e=>e.cancel(i)))).then(a).catch(a)}invalidateQueries(e,t,r){let[n,i]=s(e,t,r);return y.batch(()=>{var e,t;if(this.queryCache.findAll(n).forEach(e=>{e.invalidate()}),"none"===n.refetchType)return Promise.resolve();let r={...n,type:null!=(e=null!=(t=n.refetchType)?t:n.type)?e:"active"};return this.refetchQueries(r,i)})}refetchQueries(e,t,r){let[n,i]=s(e,t,r),o=Promise.all(y.batch(()=>this.queryCache.findAll(n).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...i,cancelRefetch:null==(t=null==i?void 0:i.cancelRefetch)||t,meta:{refetchPage:n.refetchPage}})}))).then(a);return null!=i&&i.throwOnError||(o=o.catch(a)),o}fetchQuery(e,t,r){let n=o(e,t,r),i=this.defaultQueryOptions(n);void 0===i.retry&&(i.retry=!1);let a=this.queryCache.build(this,i);return a.isStaleByTime(i.staleTime)?a.fetch(i):Promise.resolve(a.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(a).catch(a)}fetchInfiniteQuery(e,t,r){let n=o(e,t,r);return n.behavior={onFetch:e=>{e.fetchFn=()=>{var t,r,n,i,a,o,s;let l;let c=null==(t=e.fetchOptions)?void 0:null==(r=t.meta)?void 0:r.refetchPage,u=null==(n=e.fetchOptions)?void 0:null==(i=n.meta)?void 0:i.fetchMore,d=null==u?void 0:u.pageParam,h=(null==u?void 0:u.direction)==="forward",f=(null==u?void 0:u.direction)==="backward",p=(null==(a=e.state.data)?void 0:a.pages)||[],m=(null==(o=e.state.data)?void 0:o.pageParams)||[],g=m,b=!1,w=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?b=!0:null==(r=e.signal)||r.addEventListener("abort",()=>{b=!0}),e.signal}})},v=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),y=(e,t,r,n)=>(g=n?[t,...g]:[...g,t],n?[r,...e]:[...e,r]),x=(t,r,n,i)=>{if(b)return Promise.reject("Cancelled");if(void 0===n&&!r&&t.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:n,meta:e.options.meta};return w(a),Promise.resolve(v(a)).then(e=>y(t,n,e,i))};if(p.length){if(h){let t=void 0!==d,r=t?d:M(e.options,p);l=x(p,t,r)}else if(f){let t=void 0!==d,r=t?d:null==(s=e.options).getPreviousPageParam?void 0:s.getPreviousPageParam(p[0],p);l=x(p,t,r,!0)}else{g=[];let t=void 0===e.options.getNextPageParam;l=!c||!p[0]||c(p[0],0,p)?x([],t,m[0]):Promise.resolve(y([],m[0],p[0]));for(let r=1;r<p.length;r++)l=l.then(n=>{if(!c||!p[r]||c(p[r],r,p)){let i=t?m[r]:M(e.options,n);return x(n,t,i)}return Promise.resolve(y(n,m[r],p[r]))})}}else l=x([]);return l.then(e=>({pages:e,pageParams:g}))}}},this.fetchQuery(n)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(a).catch(a)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let r=this.queryDefaults.find(t=>d(e)===d(t.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>h(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let r=this.mutationDefaults.find(t=>d(e)===d(t.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>h(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=u(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function L(e){return e.state.isPaused}function B(e){return"success"===e.state.status}let z=["added","removed","updated"];function F(e){return z.includes(e)}async function W({queryClient:e,persister:t,maxAge:r=864e5,buster:n="",hydrateOptions:i}){try{let a=await t.restoreClient();if(a){if(a.timestamp){let o=Date.now()-a.timestamp>r,s=a.buster!==n;o||s?t.removeClient():function(e,t,r){if("object"!=typeof t||null===t)return;let n=e.getMutationCache(),i=e.getQueryCache(),a=t.mutations||[],o=t.queries||[];a.forEach(t=>{var i;n.build(e,{...null==r?void 0:null==(i=r.defaultOptions)?void 0:i.mutations,mutationKey:t.mutationKey},t.state)}),o.forEach(({queryKey:t,state:n,queryHash:a})=>{var o;let s=i.get(a);if(s){if(s.state.dataUpdatedAt<n.dataUpdatedAt){let{fetchStatus:e,...t}=n;s.setState(t)}return}i.build(e,{...null==r?void 0:null==(o=r.defaultOptions)?void 0:o.queries,queryKey:t,queryHash:a},{...n,fetchStatus:"idle"})})}(e,a.clientState,i)}else t.removeClient()}}catch(e){t.removeClient()}}async function H({queryClient:e,persister:t,buster:r="",dehydrateOptions:n}){let i={buster:r,timestamp:Date.now(),clientState:function(e,t={}){let r=[],n=[];if(!1!==t.dehydrateMutations){let n=t.shouldDehydrateMutation||L;e.getMutationCache().getAll().forEach(e=>{n(e)&&r.push({mutationKey:e.options.mutationKey,state:e.state})})}if(!1!==t.dehydrateQueries){let r=t.shouldDehydrateQuery||B;e.getQueryCache().getAll().forEach(e=>{r(e)&&n.push({state:e.state,queryKey:e.queryKey,queryHash:e.queryHash})})}return{mutations:r,queries:n}}(e,n)};await t.persistClient(i)}var q=r(59955),Z=r(67294);let G=Z.createContext(void 0),V=Z.createContext(!1),K=({client:e,children:t,context:r,contextSharing:n=!1})=>{Z.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let i=r||(n&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=G),window.ReactQueryClientContext):G);return Z.createElement(V.Provider,{value:!r&&n},Z.createElement(i.Provider,{value:e},t))};var Y=r(61688),X=r(52798);function Q({queryClient:e=new U({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=(0,q.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:q.wp}),persister:r="undefined"!=typeof window?function({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:r=1e3,serialize:i=JSON.stringify,deserialize:a=JSON.parse,retry:o}){if(e){let n=r=>{try{e.setItem(t,i(r));return}catch(e){return e}};return{persistClient:function(e,t=100){let r,n=null;return function(...i){r=i,null===n&&(n=setTimeout(()=>{e(...r),n=null},t))}}(e=>{let t=e,r=n(t),i=0;for(;r&&t;)i++,(t=null==o?void 0:o({persistedClient:t,error:r,errorCount:i}))&&(r=n(t))},r),restoreClient:()=>{let r=e.getItem(t);if(r)return a(r)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:n,restoreClient:()=>void 0,removeClient:n}}({key:"cache",storage:t,serialize:e=>e,deserialize:e=>e}):void 0,...i}){let a=(0,q._g)({...i,storage:t});if(r){var o;let t,n;n=!1,W(o={queryClient:e,persister:r,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}).then(()=>{n||(t=function(e){let t=e.queryClient.getQueryCache().subscribe(t=>{F(t.type)&&H(e)}),r=e.queryClient.getMutationCache().subscribe(t=>{F(t.type)&&H(e)});return()=>{t(),r()}}(o))})}return Object.assign(a,{queryClient:e})}var J=Z.createContext(void 0),ee=Z.createContext(void 0);function et({children:e,config:t}){return Z.createElement(J.Provider,{children:Z.createElement(K,{children:e,client:t.queryClient,context:ee}),value:t})}Y.useSyncExternalStore;var er=e=>"object"==typeof e&&!Array.isArray(e);function en({onConnect:e,onDisconnect:t}={}){let r=function(){let e=Z.useContext(J);if(!e)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return e}(),n=function(e,t,r=t,n=q.vZ){let i=Z.useRef([]),a=(0,X.useSyncExternalStoreWithSelector)(e,t,r,e=>e,(e,t)=>{if(er(e)&&er(t)&&i.current.length){for(let r of i.current)if(!n(e[r],t[r]))return!1;return!0}return n(e,t)});if(er(a)){let e={...a};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,r])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(i.current.includes(t)||i.current.push(t),r)}}),{})),e}return a}(Z.useCallback(e=>(0,q.uH)(e),[r]),q.D0),i=Z.useRef(),a=i.current;return Z.useEffect(()=>{a?.status!=="connected"&&"connected"===n.status&&e?.({address:n.address,connector:n.connector,isReconnected:a?.status==="reconnecting"||a?.status===void 0}),a?.status==="connected"&&"disconnected"===n.status&&t?.(),i.current=n},[e,t,a,n]),n}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],function(){return t(6840),t(12937)}),_N_E=e.O()}]);