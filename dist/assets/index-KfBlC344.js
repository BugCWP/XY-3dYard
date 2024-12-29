(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="152",xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pu=0,Ba=1,Lu=2,th=1,Iu=2,Cn=3,Un=0,Pt=1,fn=2,Vn=0,ji=1,za=2,ka=3,Ha=4,Du=5,Hi=100,Uu=101,Nu=102,Ga=103,Va=104,Fu=200,Ou=201,Bu=202,zu=203,nh=204,ih=205,ku=206,Hu=207,Gu=208,Vu=209,Wu=210,Xu=0,qu=1,ju=2,Jo=3,Yu=4,Zu=5,Ku=6,$u=7,Nr=0,Ju=1,Qu=2,Dn=0,ed=1,td=2,nd=3,id=4,sd=5,sh=300,Qi=301,es=302,Ar=303,Qo=304,Fr=306,ts=1e3,zt=1001,ea=1002,Mt=1003,Wa=1004,to=1005,St=1006,rd=1007,ns=1008,hi=1009,od=1010,ad=1011,rh=1012,cd=1013,si=1014,pn=1015,Ln=1016,ld=1017,hd=1018,Yi=1020,ud=1021,en=1023,dd=1024,fd=1025,oi=1026,is=1027,pd=1028,md=1029,gd=1030,_d=1031,vd=1033,no=33776,io=33777,so=33778,ro=33779,Xa=35840,qa=35841,ja=35842,Ya=35843,xd=36196,Za=37492,Ka=37496,$a=37808,Ja=37809,Qa=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,cc=37819,lc=37820,hc=37821,oo=36492,yd=36283,uc=36284,dc=36285,fc=36286,oh=3e3,ai=3001,Md=3200,Sd=3201,Or=0,Ed=1,ci="",ke="srgb",nn="srgb-linear",ah="display-p3",ao=7680,wd=519,pc=35044,mc="300 es",ta=1035;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],co=Math.PI/180,na=180/Math.PI;function rs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function bd(s,e){return(s%e+e)%e}function lo(s,e,t){return(1-t)*s+t*e}function gc(s){return(s&s-1)===0&&s!==0}function Td(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hs(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],_=i[0],g=i[3],f=i[6],x=i[1],v=i[4],S=i[7],M=i[2],w=i[5],T=i[8];return r[0]=o*_+a*x+l*M,r[3]=o*g+a*v+l*w,r[6]=o*f+a*S+l*T,r[1]=c*_+h*x+d*M,r[4]=c*g+h*v+d*w,r[7]=c*f+h*S+d*T,r[2]=u*_+p*x+m*M,r[5]=u*g+p*v+m*w,r[8]=u*f+p*S+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,m=t*d+n*u+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ho.makeScale(e,t)),this}rotate(e){return this.premultiply(ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(ho.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new je;function ch(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const _c={};function ws(s){s in _c||(_c[s]=!0,console.warn(s))}function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ad=new je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Rd=new je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cd(s){return s.convertSRGBToLinear().applyMatrix3(Rd)}function Pd(s){return s.applyMatrix3(Ad).convertLinearToSRGB()}const Ld={[nn]:s=>s,[ke]:s=>s.convertSRGBToLinear(),[ah]:Cd},Id={[nn]:s=>s,[ke]:s=>s.convertLinearToSRGB(),[ah]:Pd},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return nn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ld[e],i=Id[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Mi;class lh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Cs("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hh{constructor(e=null){this.isSource=!0,this.uuid=rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fo(i[o].image)):r.push(fo(i[o]))}else r=fo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dd=0;class Lt extends Wn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=zt,i=zt,r=St,o=ns,a=en,l=hi,c=Lt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=rs(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ai?ke:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?ai:oh}set encoding(e){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ai?ke:ci}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=sh;Lt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],m=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,M=(f+1)/2,w=(h+u)/4,T=(d+_)/4,L=(m+g)/4;return v>S&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=T/n):S>M?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=L/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=T/r,i=L/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends Wn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?ke:ci),this.texture=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:St,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uh extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ud extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let di=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==m){let g=1-a;const f=l*u+c*p+h*m+d*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,f*x);g=Math.sin(g*w)/M,a=Math.sin(a*w)/M}const S=a*x;if(l=l*g+u*S,c=c*g+p*S,h=h*g+m*S,d=d*g+_*S,g===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+h*d+l*p-c*u,e[t+1]=l*m+h*u+c*d-a*p,e[t+2]=c*m+h*p+a*u-l*d,e[t+3]=h*m-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),p=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"YZX":this._x=u*h*d+c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d-u*p*m;break;case"XZY":this._x=u*h*d-c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-r*i,d=l*i+r*n-o*t,u=-r*t-o*n-a*i;return this.x=c*l+u*-r+h*-a-d*-o,this.y=h*l+u*-o+d*-r-c*-a,this.z=d*l+u*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new B,vc=new di;class Xn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Si.copy(e.boundingBox),Si.applyMatrix4(e.matrixWorld),this.union(Si);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)vn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vn)}else i.boundingBox===null&&i.computeBoundingBox(),Si.copy(i.boundingBox),Si.applyMatrix4(e.matrixWorld),this.union(Si)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Gs.subVectors(this.max,fs),Ei.subVectors(e.a,fs),wi.subVectors(e.b,fs),bi.subVectors(e.c,fs),Bn.subVectors(wi,Ei),zn.subVectors(bi,wi),Kn.subVectors(Ei,bi);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Kn.z,Kn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Kn.z,0,-Kn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Kn.y,Kn.x,0];return!mo(t,Ei,wi,bi,Gs)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Ei,wi,bi,Gs))?!1:(Vs.crossVectors(Bn,zn),t=[Vs.x,Vs.y,Vs.z],mo(t,Ei,wi,bi,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new B,new B,new B,new B,new B,new B,new B,new B],vn=new B,Si=new Xn,Ei=new B,wi=new B,bi=new B,Bn=new B,zn=new B,Kn=new B,fs=new B,Gs=new B,Vs=new B,$n=new B;function mo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){$n.fromArray(s,r);const a=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Nd=new Xn,ps=new B,go=new B;class Ns{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(go)),this.expandByPoint(ps.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new B,_o=new B,Ws=new B,kn=new B,vo=new B,Xs=new B,xo=new B;let ga=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_o.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(_o);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ws),a=kn.dot(this.direction),l=-kn.dot(Ws),c=kn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(_o).addScaledVector(Ws,u),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,i,r){vo.subVectors(t,e),Xs.subVectors(n,e),xo.crossVectors(vo,Xs);let o=this.direction.dot(xo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(Xs.crossVectors(kn,Xs));if(l<0)return null;const c=a*this.direction.dot(vo.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(xo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,h,d,u,p,m,_,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,p=o*d,m=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,m=c*h,_=c*d;t[0]=u+_*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,m=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,p=o*d,m=a*h,_=a*d;t[0]=l*h,t[4]=m*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=m*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+m,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*l,p=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Hn.crossVectors(n,Ft),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Hn.crossVectors(n,Ft)),Hn.normalize(),qs.crossVectors(Ft,Hn),i[0]=Hn.x,i[4]=qs.x,i[8]=Ft.x,i[1]=Hn.y,i[5]=qs.y,i[9]=Ft.y,i[2]=Hn.z,i[6]=qs.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],_=n[6],g=n[10],f=n[14],x=n[3],v=n[7],S=n[11],M=n[15],w=i[0],T=i[4],L=i[8],y=i[12],b=i[1],U=i[5],H=i[9],C=i[13],I=i[2],D=i[6],F=i[10],V=i[14],k=i[3],X=i[7],ee=i[11],le=i[15];return r[0]=o*w+a*b+l*I+c*k,r[4]=o*T+a*U+l*D+c*X,r[8]=o*L+a*H+l*F+c*ee,r[12]=o*y+a*C+l*V+c*le,r[1]=h*w+d*b+u*I+p*k,r[5]=h*T+d*U+u*D+p*X,r[9]=h*L+d*H+u*F+p*ee,r[13]=h*y+d*C+u*V+p*le,r[2]=m*w+_*b+g*I+f*k,r[6]=m*T+_*U+g*D+f*X,r[10]=m*L+_*H+g*F+f*ee,r[14]=m*y+_*C+g*V+f*le,r[3]=x*w+v*b+S*I+M*k,r[7]=x*T+v*U+S*D+M*X,r[11]=x*L+v*H+S*F+M*ee,r[15]=x*y+v*C+S*V+M*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],m=e[3],_=e[7],g=e[11],f=e[15];return m*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*p-n*l*p)+_*(+t*l*p-t*c*u+r*o*u-i*o*p+i*c*h-r*l*h)+g*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-t*l*d+t*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],m=e[12],_=e[13],g=e[14],f=e[15],x=d*g*c-_*u*c+_*l*p-a*g*p-d*l*f+a*u*f,v=m*u*c-h*g*c-m*l*p+o*g*p+h*l*f-o*u*f,S=h*_*c-m*d*c+m*a*p-o*_*p-h*a*f+o*d*f,M=m*d*l-h*_*l-m*a*u+o*_*u+h*a*g-o*d*g,w=t*x+n*v+i*S+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(_*u*r-d*g*r-_*i*p+n*g*p+d*i*f-n*u*f)*T,e[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*f+n*l*f)*T,e[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*p-n*l*p)*T,e[4]=v*T,e[5]=(h*g*r-m*u*r+m*i*p-t*g*p-h*i*f+t*u*f)*T,e[6]=(m*l*r-o*g*r-m*i*c+t*g*c+o*i*f-t*l*f)*T,e[7]=(o*u*r-h*l*r+h*i*c-t*u*c-o*i*p+t*l*p)*T,e[8]=S*T,e[9]=(m*d*r-h*_*r-m*n*p+t*_*p+h*n*f-t*d*f)*T,e[10]=(o*_*r-m*a*r+m*n*c-t*_*c-o*n*f+t*a*f)*T,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*p-t*a*p)*T,e[12]=M*T,e[13]=(h*_*i-m*d*i+m*n*u-t*_*u-h*n*g+t*d*g)*T,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*T,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*u+t*a*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,m=r*d,_=o*h,g=o*d,f=a*d,x=l*c,v=l*h,S=l*d,M=n.x,w=n.y,T=n.z;return i[0]=(1-(_+f))*M,i[1]=(p+S)*M,i[2]=(m-v)*M,i[3]=0,i[4]=(p-S)*w,i[5]=(1-(u+f))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(m+v)*T,i[9]=(g-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ti.set(i[0],i[1],i[2]).length();const o=Ti.set(i[4],i[5],i[6]).length(),a=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const c=1/r,h=1/o,d=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-r),d=(t+e)*l,u=(n+i)*c,p=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new B,Zt=new rt,Fd=new B(0,0,0),Od=new B(1,1,1),Hn=new B,qs=new B,Ft=new B,xc=new rt,yc=new di;class Fs{constructor(e=0,t=0,n=0,i=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bd=0;const Mc=new B,Ai=new di,yn=new rt,js=new B,ms=new B,zd=new B,kd=new di,Sc=new B(1,0,0),Ec=new B(0,1,0),wc=new B(0,0,1),Hd={type:"added"},bc={type:"removed"};class yt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new B,t=new Fs,n=new di,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new je}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?js.copy(e):js.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ms,js,this.up):yn.lookAt(js,ms,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(yn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new B(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new B,Mn=new B,yo=new B,Sn=new B,Ri=new B,Ci=new B,Tc=new B,Mo=new B,So=new B,Eo=new B;let Ys=!1;class Qt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kt.subVectors(i,t),Mn.subVectors(n,t),yo.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(Mn),l=Kt.dot(yo),c=Mn.dot(Mn),h=Mn.dot(yo),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const u=1/d,p=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,n,i,r,o,a,l){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Sn),l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),Mn.subVectors(e,t),Kt.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Kt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ri.subVectors(i,n),Ci.subVectors(r,n),Mo.subVectors(e,n);const l=Ri.dot(Mo),c=Ci.dot(Mo);if(l<=0&&c<=0)return t.copy(n);So.subVectors(e,i);const h=Ri.dot(So),d=Ci.dot(So);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ri,o);Eo.subVectors(e,r);const p=Ri.dot(Eo),m=Ci.dot(Eo);if(m>=0&&p<=m)return t.copy(r);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ci,a);const g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return Tc.subVectors(r,i),a=(d-h)/(d-h+(p-m)),t.copy(i).addScaledVector(Tc,a);const f=1/(g+_+u);return o=_*f,a=u*f,t.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gd=0,sn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=ji,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function wo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Yt.workingColorSpace){if(e=bd(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wo(o,r,e+1/3),this.g=wo(o,r,e),this.b=wo(o,r,e-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(e,t=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const n=fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return Yt.fromWorkingColorSpace(bt.copy(this),e),Math.round(_t(bt.r*255,0,255))*65536+Math.round(_t(bt.g*255,0,255))*256+Math.round(_t(bt.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,r=bt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=ke){Yt.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=n,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(Zs);const n=lo($t.h,Zs.h,t),i=lo($t.s,Zs.s,t),r=lo($t.l,Zs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Oe;Oe.NAMES=fh;class fi extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pn=Vd();function Vd(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Wd(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=_t(s,-65504,65504),Pn.floatView[0]=s;const e=Pn.uint32View[0],t=e>>23&511;return Pn.baseTable[t]+((e&8388607)>>Pn.shiftTable[t])}function Xd(s){const e=s>>10;return Pn.uint32View[0]=Pn.mantissaTable[Pn.offsetTable[e]+(s&1023)]+Pn.exponentTable[e],Pn.floatView[0]}const Ks={toHalfFloat:Wd,fromHalfFloat:Xd},lt=new B,$s=new de;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ph extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mh extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qd=0;const Xt=new rt,bo=new yt,Pi=new B,Ot=new Xn,gs=new Xn,gt=new B;class Gt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ch(e)?mh:ph)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ot.min,gs.min),Ot.expandByPoint(gt),gt.addVectors(Ot.max,gs.max),Ot.expandByPoint(gt)):(Ot.expandByPoint(gs.min),Ot.expandByPoint(gs.max))}Ot.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gt.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(e,c),gt.add(Pi)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new B,h[b]=new B;const d=new B,u=new B,p=new B,m=new de,_=new de,g=new de,f=new B,x=new B;function v(b,U,H){d.fromArray(i,b*3),u.fromArray(i,U*3),p.fromArray(i,H*3),m.fromArray(o,b*2),_.fromArray(o,U*2),g.fromArray(o,H*2),u.sub(d),p.sub(d),_.sub(m),g.sub(m);const C=1/(_.x*g.y-g.x*_.y);isFinite(C)&&(f.copy(u).multiplyScalar(g.y).addScaledVector(p,-_.y).multiplyScalar(C),x.copy(p).multiplyScalar(_.x).addScaledVector(u,-g.x).multiplyScalar(C),c[b].add(f),c[U].add(f),c[H].add(f),h[b].add(x),h[U].add(x),h[H].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,U=S.length;b<U;++b){const H=S[b],C=H.start,I=H.count;for(let D=C,F=C+I;D<F;D+=3)v(n[D+0],n[D+1],n[D+2])}const M=new B,w=new B,T=new B,L=new B;function y(b){T.fromArray(r,b*3),L.copy(T);const U=c[b];M.copy(U),M.sub(T.multiplyScalar(T.dot(U))).normalize(),w.crossVectors(L,U);const C=w.dot(h[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=C}for(let b=0,U=S.length;b<U;++b){const H=S[b],C=H.start,I=H.count;for(let D=C,F=C+I;D<F;D+=3)y(n[D+0]),y(n[D+1]),y(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[m++]=c[p++]}return new mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new rt,an=new ga,Js=new Ns,Rc=new B,Li=new B,Ii=new B,Di=new B,To=new B,Qs=new B,er=new de,tr=new de,nr=new de,Cc=new B,Pc=new B,Lc=new B,ir=new B,sr=new B;class st extends yt{constructor(e=new Gt,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(To.fromBufferAttribute(d,e),o?Qs.addScaledVector(To,h):Qs.addScaledVector(To.sub(t),h))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),an.copy(e.ray).recast(e.near),!(Js.containsPoint(an.origin)===!1&&(an.intersectSphere(Js,Rc)===null||an.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Ac.copy(r).invert(),an.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&an.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,o=i.index,a=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,h=i.attributes.normal,d=i.groups,u=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){const _=d[p],g=r[_.materialIndex],f=Math.max(_.start,u.start),x=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let v=f,S=x;v<S;v+=3){const M=o.getX(v),w=o.getX(v+1),T=o.getX(v+2);n=rr(this,g,e,an,l,c,h,M,w,T),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);for(let _=p,g=m;_<g;_+=3){const f=o.getX(_),x=o.getX(_+1),v=o.getX(_+2);n=rr(this,r,e,an,l,c,h,f,x,v),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){const _=d[p],g=r[_.materialIndex],f=Math.max(_.start,u.start),x=Math.min(a.count,Math.min(_.start+_.count,u.start+u.count));for(let v=f,S=x;v<S;v+=3){const M=v,w=v+1,T=v+2;n=rr(this,g,e,an,l,c,h,M,w,T),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,u.start),m=Math.min(a.count,u.start+u.count);for(let _=p,g=m;_<g;_+=3){const f=_,x=_+1,v=_+2;n=rr(this,r,e,an,l,c,h,f,x,v),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function jd(s,e,t,n,i,r,o,a){let l;if(e.side===Pt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Un,a),l===null)return null;sr.copy(a),sr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:s}}function rr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Li),s.getVertexPosition(l,Ii),s.getVertexPosition(c,Di);const h=jd(s,e,t,n,Li,Ii,Di,ir);if(h){i&&(er.fromBufferAttribute(i,a),tr.fromBufferAttribute(i,l),nr.fromBufferAttribute(i,c),h.uv=Qt.getInterpolation(ir,Li,Ii,Di,er,tr,nr,new de)),r&&(er.fromBufferAttribute(r,a),tr.fromBufferAttribute(r,l),nr.fromBufferAttribute(r,c),h.uv1=Qt.getInterpolation(ir,Li,Ii,Di,er,tr,nr,new de),h.uv2=h.uv1),o&&(Cc.fromBufferAttribute(o,a),Pc.fromBufferAttribute(o,l),Lc.fromBufferAttribute(o,c),h.normal=Qt.getInterpolation(ir,Li,Ii,Di,Cc,Pc,Lc,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};Qt.getNormal(Li,Ii,Di,d.normal),h.face=d}return h}class os extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function m(_,g,f,x,v,S,M,w,T,L,y){const b=S/T,U=M/L,H=S/2,C=M/2,I=w/2,D=T+1,F=L+1;let V=0,k=0;const X=new B;for(let ee=0;ee<F;ee++){const le=ee*U-C;for(let J=0;J<D;J++){const Y=J*b-H;X[_]=Y*x,X[g]=le*v,X[f]=I,c.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[f]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(J/T),d.push(1-ee/L),V+=1}}for(let ee=0;ee<L;ee++)for(let le=0;le<T;le++){const J=u+le+D*ee,Y=u+le+D*(ee+1),ie=u+(le+1)+D*(ee+1),ue=u+(le+1)+D*ee;l.push(J,Y,ue),l.push(Y,ie,ue),k+=6}a.addGroup(p,k,y),p+=k,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ct(s){const e={};for(let t=0;t<s.length;t++){const n=ss(s[t]);for(const i in n)e[i]=n[i]}return e}function Yd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gh(s){return s.getRenderTarget()===null?s.outputColorSpace:nn}const Zd={clone:ss,merge:Ct};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _h extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends _h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ni=1;class Jd extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Bt(Ui,Ni,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Bt(Ui,Ni,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Bt(Ui,Ni,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Bt(Ui,Ni,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Bt(Ui,Ni,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Bt(Ui,Ni,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Dn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class vh extends Lt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qd extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ai?ke:ci),this.texture=new vh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new os(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Vn});r.uniforms.tEquirect.value=t;const o=new st(i,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=St),new Jd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ao=new B,ef=new B,tf=new je;let ei=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ao.subVectors(n,t).cross(ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tf.getNormalMatrix(e),i=this.coplanarPoint(Ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Jn=new Ns,or=new B;class _a{constructor(e=new ei,t=new ei,n=new ei,i=new ei,r=new ei,o=new ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],p=n[9],m=n[10],_=n[11],g=n[12],f=n[13],x=n[14],v=n[15];return t[0].setComponents(a-i,d-l,_-u,v-g).normalize(),t[1].setComponents(a+i,d+l,_+u,v+g).normalize(),t[2].setComponents(a+r,d+c,_+p,v+f).normalize(),t[3].setComponents(a-r,d-c,_-p,v-f).normalize(),t[4].setComponents(a-o,d-h,_-m,v-x).normalize(),t[5].setComponents(a+o,d+h,_+m,v+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(or.x=i.normal.x>0?e.max.x:e.min.x,or.y=i.normal.y>0?e.max.y:e.min.y,or.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,d,u),c.onUploadCallback();let m;if(d instanceof Float32Array)m=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=s.SHORT;else if(d instanceof Uint32Array)m=s.UNSIGNED_INT;else if(d instanceof Int32Array)m=s.INT;else if(d instanceof Int8Array)m=s.BYTE;else if(d instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const u=h.array,p=h.updateRange;s.bindBuffer(d,c),p.count===-1?s.bufferSubData(d,0,u):(t?s.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):s.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class Br extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,p=[],m=[],_=[],g=[];for(let f=0;f<h;f++){const x=f*u-o;for(let v=0;v<c;v++){const S=v*d-r;m.push(S,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,S=x+c*(f+1),M=x+1+c*(f+1),w=x+1+c*f;p.push(v,S,w),p.push(S,M,w)}this.setIndex(p),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}var sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf="vec3 transformed = vec3( position );",uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ff=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,pf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,Gf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,jf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ep=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ap=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Zp=`#ifdef USE_UV
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
#endif`,Kp=`#ifdef USE_UV
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
#endif`,$p=`#ifdef USE_UV
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
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,om=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,um=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,pm=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,vm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,wm=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:of,alphatest_pars_fragment:af,aomap_fragment:cf,aomap_pars_fragment:lf,begin_vertex:hf,beginnormal_vertex:uf,bsdfs:df,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:vf,color_fragment:xf,color_pars_fragment:yf,color_pars_vertex:Mf,color_vertex:Sf,common:Ef,cube_uv_reflection_fragment:wf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,encodings_fragment:Pf,encodings_pars_fragment:Lf,envmap_fragment:If,envmap_common_pars_fragment:Df,envmap_pars_fragment:Uf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:jf,envmap_vertex:Ff,fog_vertex:Of,fog_pars_vertex:Bf,fog_fragment:zf,fog_pars_fragment:kf,gradientmap_pars_fragment:Hf,lightmap_fragment:Gf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:qf,lights_toon_fragment:Yf,lights_toon_pars_fragment:Zf,lights_phong_fragment:Kf,lights_phong_pars_fragment:$f,lights_physical_fragment:Jf,lights_physical_pars_fragment:Qf,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:op,map_fragment:ap,map_pars_fragment:cp,map_particle_fragment:lp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:vp,normal_pars_fragment:xp,normal_pars_vertex:yp,normal_vertex:Mp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Tp,output_fragment:Ap,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Lp,dithering_pars_fragment:Ip,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Fp,shadowmap_vertex:Op,shadowmask_pars_fragment:Bp,skinbase_vertex:zp,skinning_pars_vertex:kp,skinning_vertex:Hp,skinnormal_vertex:Gp,specularmap_fragment:Vp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:jp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:Kp,uv_vertex:$p,worldpos_vertex:Jp,background_vert:Qp,background_frag:em,backgroundCube_vert:tm,backgroundCube_frag:nm,cube_vert:im,cube_frag:sm,depth_vert:rm,depth_frag:om,distanceRGBA_vert:am,distanceRGBA_frag:cm,equirect_vert:lm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:_m,meshmatcap_frag:vm,meshnormal_vert:xm,meshnormal_frag:ym,meshphong_vert:Mm,meshphong_frag:Sm,meshphysical_vert:Em,meshphysical_frag:wm,meshtoon_vert:bm,meshtoon_frag:Tm,points_vert:Am,points_frag:Rm,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Lm,sprite_frag:Im},ge={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaTest:{value:0}}},dn={basic:{uniforms:Ct([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ct([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ct([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ct([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ct([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ct([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ct([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ct([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ct([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ct([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ct([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ct([ge.common,ge.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ct([ge.lights,ge.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};dn.physical={uniforms:Ct([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ar={r:0,b:0,g:0};function Dm(s,e,t,n,i,r,o){const a=new Oe(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function m(g,f){let x=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0),s.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fr)?(h===void 0&&(h=new st(new os(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:ss(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==ke,(d!==v||u!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new st(new Br(2,2),new pi({name:"BackgroundMaterial",uniforms:ss(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,f){g.getRGB(ar,gh(s)),n.buffers.color.setClear(ar.r,ar.g,ar.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function Um(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null);let c=l,h=!1;function d(I,D,F,V,k){let X=!1;if(o){const ee=_(V,F,D);c!==ee&&(c=ee,p(c.object)),X=f(I,V,F,k),X&&x(I,V,F,k)}else{const ee=D.wireframe===!0;(c.geometry!==V.id||c.program!==F.id||c.wireframe!==ee)&&(c.geometry=V.id,c.program=F.id,c.wireframe=ee,X=!0)}k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,L(I,D,F,V),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,D,F){const V=F.wireframe===!0;let k=a[I.id];k===void 0&&(k={},a[I.id]=k);let X=k[D.id];X===void 0&&(X={},k[D.id]=X);let ee=X[V];return ee===void 0&&(ee=g(u()),X[V]=ee),ee}function g(I){const D=[],F=[],V=[];for(let k=0;k<i;k++)D[k]=0,F[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:V,object:I,attributes:{},index:null}}function f(I,D,F,V){const k=c.attributes,X=D.attributes;let ee=0;const le=F.getAttributes();for(const J in le)if(le[J].location>=0){const ie=k[J];let ue=X[J];if(ue===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;ee++}return c.attributesNum!==ee||c.index!==V}function x(I,D,F,V){const k={},X=D.attributes;let ee=0;const le=F.getAttributes();for(const J in le)if(le[J].location>=0){let ie=X[J];ie===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),k[J]=ue,ee++}c.attributes=k,c.attributesNum=ee,c.index=V}function v(){const I=c.newAttributes;for(let D=0,F=I.length;D<F;D++)I[D]=0}function S(I){M(I,0)}function M(I,D){const F=c.newAttributes,V=c.enabledAttributes,k=c.attributeDivisors;F[I]=1,V[I]===0&&(s.enableVertexAttribArray(I),V[I]=1),k[I]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),k[I]=D)}function w(){const I=c.newAttributes,D=c.enabledAttributes;for(let F=0,V=D.length;F<V;F++)D[F]!==I[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function T(I,D,F,V,k,X){n.isWebGL2===!0&&(F===s.INT||F===s.UNSIGNED_INT)?s.vertexAttribIPointer(I,D,F,k,X):s.vertexAttribPointer(I,D,F,V,k,X)}function L(I,D,F,V){if(n.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const k=V.attributes,X=F.getAttributes(),ee=D.defaultAttributeValues;for(const le in X){const J=X[le];if(J.location>=0){let Y=k[le];if(Y===void 0&&(le==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),le==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){const ie=Y.normalized,ue=Y.itemSize,pe=t.get(Y);if(pe===void 0)continue;const O=pe.buffer,Ie=pe.type,De=pe.bytesPerElement;if(Y.isInterleavedBufferAttribute){const he=Y.data,we=he.stride,re=Y.offset;if(he.isInstancedInterleavedBuffer){for(let Q=0;Q<J.locationSize;Q++)M(J.location+Q,he.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Q=0;Q<J.locationSize;Q++)S(J.location+Q);s.bindBuffer(s.ARRAY_BUFFER,O);for(let Q=0;Q<J.locationSize;Q++)T(J.location+Q,ue/J.locationSize,Ie,ie,we*De,(re+ue/J.locationSize*Q)*De)}else{if(Y.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)M(J.location+he,Y.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let he=0;he<J.locationSize;he++)S(J.location+he);s.bindBuffer(s.ARRAY_BUFFER,O);for(let he=0;he<J.locationSize;he++)T(J.location+he,ue/J.locationSize,Ie,ie,ue*De,ue/J.locationSize*he*De)}}else if(ee!==void 0){const ie=ee[le];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(J.location,ie);break;case 3:s.vertexAttrib3fv(J.location,ie);break;case 4:s.vertexAttrib4fv(J.location,ie);break;default:s.vertexAttrib1fv(J.location,ie)}}}}w()}function y(){H();for(const I in a){const D=a[I];for(const F in D){const V=D[F];for(const k in V)m(V[k].object),delete V[k];delete D[F]}delete a[I]}}function b(I){if(a[I.id]===void 0)return;const D=a[I.id];for(const F in D){const V=D[F];for(const k in V)m(V[k].object),delete V[k];delete D[F]}delete a[I.id]}function U(I){for(const D in a){const F=a[D];if(F[I.id]===void 0)continue;const V=F[I.id];for(const k in V)m(V[k].object),delete V[k];delete F[I.id]}}function H(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function Nm(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,d){if(d===0)return;let u,p;if(i)u=s,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](r,c,h,d),t.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Fm(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,S=o||e.has("OES_texture_float"),M=v&&S,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:w}}function Om(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ei,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,f=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,v=x*4;let S=f.clippingState||null;l.value=S,S=h(m,u,v,p);for(let M=0;M!==v;++M)S[M]=t[M];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const f=p+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Bm(s){let e=new WeakMap;function t(o,a){return a===Ar?o.mapping=Qi:a===Qo&&(o.mapping=es),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ar||a===Qo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qd(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class yh extends _h{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,Ic=[.125,.215,.35,.446,.526,.582],ni=20,Ro=new yh,Dc=new Oe;let Co=null;const ti=(1+Math.sqrt(5))/2,Fi=1/ti,Uc=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ti,Fi),new B(0,ti,-Fi),new B(Fi,0,ti),new B(-Fi,0,ti),new B(ti,Fi,0),new B(-ti,Fi,0)];class Nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Co=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co),e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ln,format:en,colorSpace:nn,depthBuffer:!1},i=Fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=km(r,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,i){const a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Dc),h.toneMapping=Dn,h.autoClear=!1;const p=new fi({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),m=new st(new os,p);let _=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,_=!0):(p.color.copy(Dc),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;cr(i,x*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qi||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Uc[(i-1)%Uc.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new st(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ni-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):ni;g>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ni}`);const f=[];let x=0;for(let T=0;T<ni;++T){const L=T/_,y=Math.exp(-L*L/2);f.push(y),T===0?x+=y:T<g&&(x+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;const S=this._sizeLods[i],M=3*S*(i>v-Gi?i-v+Gi:0),w=4*(this._cubeSize-S);cr(t,M,w,3*S,2*S),l.setRenderTarget(t),l.render(d,Ro)}}function zm(s){const e=[],t=[],n=[];let i=s;const r=s-Gi+1+Ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Gi?l=Ic[o-s+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,_=3,g=2,f=1,x=new Float32Array(_*m*p),v=new Float32Array(g*m*p),S=new Float32Array(f*m*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,L=w>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];x.set(y,_*m*w),v.set(u,g*m*w);const b=[w,w,w,w,w,w];S.set(b,f*m*w)}const M=new Gt;M.setAttribute("position",new mn(x,_)),M.setAttribute("uv",new mn(v,g)),M.setAttribute("faceIndex",new mn(S,f)),e.push(M),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fc(s,e,t){const n=new ui(s,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function km(s,e,t){const n=new Float32Array(ni),i=new B(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:va(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Oc(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Bc(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function Hm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ar||l===Qo,h=l===Qi||l===es;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Nc(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Nc(s));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vm(s,e,t,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)e.update(u[m],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const _=p[m];for(let g=0,f=_.length;g<f;g++)e.update(_[g],s.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,m=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const M=x[v+0],w=x[v+1],T=x[v+2];u.push(M,w,w,T,T,M)}}else{const x=m.array;_=m.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const M=v+0,w=v+1,T=v+2;u.push(M,w,w,T,T,M)}}const g=new(ch(u)?mh:ph)(u,1);g.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,g)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,p){s.drawElements(r,p,a,u*l),t.update(p,r,1)}function d(u,p,m){if(m===0)return;let _,g;if(i)_=s,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](r,p,a,u*l,m),t.update(p,r,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Xm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qm(s,e){return s[0]-e[0]}function jm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ym(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==m){let I=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),v===!0&&(L=2),S===!0&&(L=3);let y=h.attributes.position.count*L,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const U=new Float32Array(y*b*4*m),H=new uh(U,y,b,m);H.type=pn,H.needsUpdate=!0;const C=L*4;for(let D=0;D<m;D++){const F=M[D],V=w[D],k=T[D],X=y*b*4*D;for(let ee=0;ee<F.count;ee++){const le=ee*C;x===!0&&(o.fromBufferAttribute(F,ee),U[X+le+0]=o.x,U[X+le+1]=o.y,U[X+le+2]=o.z,U[X+le+3]=0),v===!0&&(o.fromBufferAttribute(V,ee),U[X+le+4]=o.x,U[X+le+5]=o.y,U[X+le+6]=o.z,U[X+le+7]=0),S===!0&&(o.fromBufferAttribute(k,ee),U[X+le+8]=o.x,U[X+le+9]=o.y,U[X+le+10]=o.z,U[X+le+11]=k.itemSize===4?o.w:1)}}_={count:m,texture:H,size:new de(y,b)},r.set(h,_),h.addEventListener("dispose",I)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];const f=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(s,"morphTargetBaseInfluence",f),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=u===void 0?0:u.length;let m=n[h.id];if(m===void 0||m.length!==p){m=[];for(let v=0;v<p;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<p;v++){const S=m[v];S[0]=v,S[1]=u[v]}m.sort(jm);for(let v=0;v<8;v++)v<p&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(qm);const _=h.morphAttributes.position,g=h.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const S=a[v],M=S[0],w=S[1];M!==Number.MAX_SAFE_INTEGER&&w?(_&&h.getAttribute("morphTarget"+v)!==_[M]&&h.setAttribute("morphTarget"+v,_[M]),g&&h.getAttribute("morphNormal"+v)!==g[M]&&h.setAttribute("morphNormal"+v,g[M]),i[v]=w,f+=w):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Zm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Mh=new Lt,Sh=new uh,Eh=new Ud,wh=new vh,zc=[],kc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Vc=new Float32Array(4);function as(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zc[i];if(r===void 0&&(r=new Float32Array(i),zc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zr(s,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Km(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function Jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function Qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function eg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Vc.set(n),s.uniformMatrix2fv(this.addr,!1,Vc),pt(t,n)}}function tg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),pt(t,n)}}function ng(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Hc.set(n),s.uniformMatrix4fv(this.addr,!1,Hc),pt(t,n)}}function ig(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function ag(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function ug(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Mh,i)}function dg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eh,i)}function fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wh,i)}function pg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sh,i)}function mg(s){switch(s){case 5126:return Km;case 35664:return $m;case 35665:return Jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return cg;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(s,e){s.uniform1fv(this.addr,e)}function _g(s,e){const t=as(e,this.size,2);s.uniform2fv(this.addr,t)}function vg(s,e){const t=as(e,this.size,3);s.uniform3fv(this.addr,t)}function xg(s,e){const t=as(e,this.size,4);s.uniform4fv(this.addr,t)}function yg(s,e){const t=as(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Mg(s,e){const t=as(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sg(s,e){const t=as(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Eg(s,e){s.uniform1iv(this.addr,e)}function wg(s,e){s.uniform2iv(this.addr,e)}function bg(s,e){s.uniform3iv(this.addr,e)}function Tg(s,e){s.uniform4iv(this.addr,e)}function Ag(s,e){s.uniform1uiv(this.addr,e)}function Rg(s,e){s.uniform2uiv(this.addr,e)}function Cg(s,e){s.uniform3uiv(this.addr,e)}function Pg(s,e){s.uniform4uiv(this.addr,e)}function Lg(s,e,t){const n=this.cache,i=e.length,r=zr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Mh,r[o])}function Ig(s,e,t){const n=this.cache,i=e.length,r=zr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eh,r[o])}function Dg(s,e,t){const n=this.cache,i=e.length,r=zr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wh,r[o])}function Ug(s,e,t){const n=this.cache,i=e.length,r=zr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sh,r[o])}function Ng(s){switch(s){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return yg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return bg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}class Fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=mg(t.type)}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ng(t.type)}}class Bg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function Wc(s,e){s.seq.push(e),s.map[e.id]=e}function zg(s,e,t){const n=s.name,i=n.length;for(Po.lastIndex=0;;){const r=Po.exec(n),o=Po.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wc(t,c===void 0?new Fg(a,s,e):new Og(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Bg(a),Wc(t,d)),t=d}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);zg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let kg=0;function Hg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gg(s){switch(s){case nn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function qc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Hg(s.getShaderSource(e),o)}else return i}function Vg(s,e){const t=Gg(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Wg(s,e){let t;switch(e){case ed:t="Linear";break;case td:t="Reinhard";break;case nd:t="OptimizedCineon";break;case id:t="ACESFilmic";break;case sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function qg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ss(s){return s!==""}function jc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(s){return s.replace(Yg,Zg)}function Zg(s,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ia(t)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(s){return s.replace(Kg,$g)}function $g(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===th?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qi:case es:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function t0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Nr:e="ENVMAP_BLENDING_MULTIPLY";break;case Ju:e="ENVMAP_BLENDING_MIX";break;case Qu:e="ENVMAP_BLENDING_ADD";break}return e}function n0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function i0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jg(t),c=Qg(t),h=e0(t),d=t0(t),u=n0(t),p=t.isWebGL2?"":Xg(t),m=qg(r),_=i.createProgram();let g,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(Ss).join(`
`),g.length>0&&(g+=`
`),f=[p,m].filter(Ss).join(`
`),f.length>0&&(f+=`
`)):(g=[Kc(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),f=[p,Kc(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,Vg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),o=ia(o),o=jc(o,t),o=Yc(o,t),a=ia(a),a=jc(a,t),a=Yc(a,t),o=Zc(o),a=Zc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+g+o,S=x+f+a,M=Xc(i,i.VERTEX_SHADER,v),w=Xc(i,i.FRAGMENT_SHADER,S);if(i.attachShader(_,M),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const y=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(M).trim(),U=i.getShaderInfoLog(w).trim();let H=!0,C=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,w);else{const I=qc(i,M,"vertex"),D=qc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+I+`
`+D)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(b===""||U==="")&&(C=!1);C&&(this.diagnostics={runnable:H,programLog:y,vertexShader:{log:b,prefix:g},fragmentShader:{log:U,prefix:f}})}i.deleteShader(M),i.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new Mr(i,_)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=jg(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=kg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let s0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new o0(e),t.set(e,n)),n}}class o0{constructor(e){this.id=s0++,this.code=e,this.usedTimes=0}}function a0(s,e,t,n,i,r,o){const a=new dh,l=new r0,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function g(y,b,U,H,C){const I=H.fog,D=C.geometry,F=y.isMeshStandardMaterial?H.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),k=V&&V.mapping===Fr?V.image.height:null,X=m[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,le=ee!==void 0?ee.length:0;let J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let Y,ie,ue,pe;if(X){const Je=dn[X];Y=Je.vertexShader,ie=Je.fragmentShader}else Y=y.vertexShader,ie=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const O=s.getRenderTarget(),Ie=C.isInstancedMesh===!0,De=!!y.map,he=!!y.matcap,we=!!V,re=!!y.aoMap,Q=!!y.lightMap,se=!!y.bumpMap,ye=!!y.normalMap,fe=!!y.displacementMap,Pe=!!y.emissiveMap,Le=!!y.metalnessMap,Re=!!y.roughnessMap,Be=y.clearcoat>0,Ye=y.iridescence>0,P=y.sheen>0,A=y.transmission>0,j=Be&&!!y.clearcoatMap,oe=Be&&!!y.clearcoatNormalMap,ae=Be&&!!y.clearcoatRoughnessMap,me=Ye&&!!y.iridescenceMap,N=Ye&&!!y.iridescenceThicknessMap,ne=P&&!!y.sheenColorMap,q=P&&!!y.sheenRoughnessMap,_e=!!y.specularMap,Ee=!!y.specularColorMap,Te=!!y.specularIntensityMap,ve=A&&!!y.transmissionMap,be=A&&!!y.thicknessMap,Ne=!!y.gradientMap,Ve=!!y.alphaMap,ot=y.alphaTest>0,z=!!y.extensions,K=!!D.attributes.uv1,ce=!!D.attributes.uv2,Me=!!D.attributes.uv3;return{isWebGL2:h,shaderID:X,shaderName:y.type,vertexShader:Y,fragmentShader:ie,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:Ie,instancingColor:Ie&&C.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:O===null?s.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:nn,map:De,matcap:he,envMap:we,envMapMode:we&&V.mapping,envMapCubeUVHeight:k,aoMap:re,lightMap:Q,bumpMap:se,normalMap:ye,displacementMap:u&&fe,emissiveMap:Pe,normalMapObjectSpace:ye&&y.normalMapType===Ed,normalMapTangentSpace:ye&&y.normalMapType===Or,metalnessMap:Le,roughnessMap:Re,clearcoat:Be,clearcoatMap:j,clearcoatNormalMap:oe,clearcoatRoughnessMap:ae,iridescence:Ye,iridescenceMap:me,iridescenceThicknessMap:N,sheen:P,sheenColorMap:ne,sheenRoughnessMap:q,specularMap:_e,specularColorMap:Ee,specularIntensityMap:Te,transmission:A,transmissionMap:ve,thicknessMap:be,gradientMap:Ne,opaque:y.transparent===!1&&y.blending===ji,alphaMap:Ve,alphaTest:ot,combine:y.combine,mapUv:De&&_(y.map.channel),aoMapUv:re&&_(y.aoMap.channel),lightMapUv:Q&&_(y.lightMap.channel),bumpMapUv:se&&_(y.bumpMap.channel),normalMapUv:ye&&_(y.normalMap.channel),displacementMapUv:fe&&_(y.displacementMap.channel),emissiveMapUv:Pe&&_(y.emissiveMap.channel),metalnessMapUv:Le&&_(y.metalnessMap.channel),roughnessMapUv:Re&&_(y.roughnessMap.channel),clearcoatMapUv:j&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:N&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:q&&_(y.sheenRoughnessMap.channel),specularMapUv:_e&&_(y.specularMap.channel),specularColorMapUv:Ee&&_(y.specularColorMap.channel),specularIntensityMapUv:Te&&_(y.specularIntensityMap.channel),transmissionMapUv:ve&&_(y.transmissionMap.channel),thicknessMapUv:be&&_(y.thicknessMap.channel),alphaMapUv:Ve&&_(y.alphaMap.channel),vertexTangents:ye&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:ce,vertexUv3s:Me,pointsUvs:C.isPoints===!0&&!!D.attributes.uv&&(De||Ve),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:Dn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===Pt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:z&&y.extensions.derivatives===!0,extensionFragDepth:z&&y.extensions.fragDepth===!0,extensionDrawBuffers:z&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)b.push(U),b.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(b,y),v(b,y),b.push(s.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),y.push(a.mask)}function S(y){const b=m[y.type];let U;if(b){const H=dn[b];U=Zd.clone(H.uniforms)}else U=y.uniforms;return U}function M(y,b){let U;for(let H=0,C=c.length;H<C;H++){const I=c[H];if(I.cacheKey===b){U=I,++U.usedTimes;break}}return U===void 0&&(U=new i0(s,b,y,r),c.push(U)),U}function w(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:L}}function c0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function l0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $c(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,p,m,_,g){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},s[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=_,f.group=g),e++,f}function a(d,u,p,m,_,g){const f=o(d,u,p,m,_,g);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(d,u,p,m,_,g){const f=o(d,u,p,m,_,g);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||l0),n.length>1&&n.sort(u||$c),i.length>1&&i.sort(u||$c)}function h(){for(let d=e,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function h0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Jc,s.set(n,[o])):i>=r.length?(o=new Jc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function u0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Oe};break;case"SpotLight":t={position:new B,direction:new B,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function d0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let f0=0;function p0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function m0(s,e){const t=new u0,n=d0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new B);const r=new B,o=new rt,a=new rt;function l(h,d){let u=0,p=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,g=0,f=0,x=0,v=0,S=0,M=0,w=0,T=0,L=0;h.sort(p0);const y=d===!0?Math.PI:1;for(let U=0,H=h.length;U<H;U++){const C=h[U],I=C.color,D=C.intensity,F=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*D*y,p+=I.g*D*y,m+=I.b*D*y;else if(C.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],D);else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*y),C.castShadow){const X=C.shadow,ee=n.get(C);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=C.shadow.matrix,S++}i.directional[_]=k,_++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(I).multiplyScalar(D*y),k.distance=F,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[f]=k;const X=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,X.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[f]=X.matrix,C.castShadow){const ee=n.get(C);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=V,w++}f++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(I).multiplyScalar(D),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=k,x++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*y),k.distance=C.distance,k.decay=C.decay,C.castShadow){const X=C.shadow,ee=n.get(C);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=C.shadow.matrix,M++}i.point[g]=k,g++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(D*y),k.groundColor.copy(C.groundColor).multiplyScalar(D*y),i.hemi[v]=k,v++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=m;const b=i.hash;(b.directionalLength!==_||b.pointLength!==g||b.spotLength!==f||b.rectAreaLength!==x||b.hemiLength!==v||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==w||b.numSpotMaps!==T)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,b.directionalLength=_,b.pointLength=g,b.spotLength=f,b.rectAreaLength=x,b.hemiLength=v,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=w,b.numSpotMaps=T,i.version=f0++)}function c(h,d){let u=0,p=0,m=0,_=0,g=0;const f=d.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),u++}else if(S.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),m++}else if(S.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),g++}}}return{setup:l,setupView:c,state:i}}function Qc(s,e){const t=new m0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function g0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Qc(s,e),t.set(r,[l])):o>=a.length?(l=new Qc(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class _0 extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v0 extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M0(s,e,t){let n=new _a;const i=new de,r=new de,o=new xt,a=new _0({depthPacking:Sd}),l=new v0,c={},h=t.maxTextureSize,d={[Un]:Pt,[Pt]:Un,[fn]:fn},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:x0,fragmentShader:y0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new Gt;m.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let f=this.type;this.render=function(M,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const L=s.getRenderTarget(),y=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Vn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=f!==Cn&&this.type===Cn,C=f===Cn&&this.type!==Cn;for(let I=0,D=M.length;I<D;I++){const F=M[I],V=F.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const k=V.getFrameExtents();if(i.multiply(k),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/k.x),i.x=r.x*k.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/k.y),i.y=r.y*k.y,V.mapSize.y=r.y)),V.map===null||H===!0||C===!0){const ee=this.type!==Cn?{minFilter:Mt,magFilter:Mt}:{};V.map!==null&&V.map.dispose(),V.map=new ui(i.x,i.y,ee),V.map.texture.name=F.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const X=V.getViewportCount();for(let ee=0;ee<X;ee++){const le=V.getViewport(ee);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),U.viewport(o),V.updateMatrices(F,ee),n=V.getFrustum(),S(w,T,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Cn&&x(V,T),V.needsUpdate=!1}f=this.type,g.needsUpdate=!1,s.setRenderTarget(L,y,b)};function x(M,w){const T=e.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ui(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,T,u,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,T,p,_,null)}function v(M,w,T,L){let y=null;const b=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)y=b;else if(y=T.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=y.uuid,H=w.uuid;let C=c[U];C===void 0&&(C={},c[U]=C);let I=C[H];I===void 0&&(I=y.clone(),C[H]=I),y=I}if(y.visible=w.visible,y.wireframe=w.wireframe,L===Cn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=s.properties.get(y);U.light=T}return y}function S(M,w,T,L,y){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Cn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const H=e.update(M),C=M.material;if(Array.isArray(C)){const I=H.groups;for(let D=0,F=I.length;D<F;D++){const V=I[D],k=C[V.materialIndex];if(k&&k.visible){const X=v(M,k,L,y);s.renderBufferDirect(T,null,H,X,M,V)}}}else if(C.visible){const I=v(M,C,L,y);s.renderBufferDirect(T,null,H,I,M,null)}}const U=M.children;for(let H=0,C=U.length;H<C;H++)S(U[H],w,T,L,y)}}function S0(s,e,t){const n=t.isWebGL2;function i(){let z=!1;const K=new xt;let ce=null;const Me=new xt(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!z&&(s.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){z=Ae},setClear:function(Ae,Je,Qe,Et,On){On===!0&&(Ae*=Et,Je*=Et,Qe*=Et),K.set(Ae,Je,Qe,Et),Me.equals(K)===!1&&(s.clearColor(Ae,Je,Qe,Et),Me.copy(K))},reset:function(){z=!1,ce=null,Me.set(-1,0,0,0)}}}function r(){let z=!1,K=null,ce=null,Me=null;return{setTest:function(Ae){Ae?O(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(Ae){K!==Ae&&!z&&(s.depthMask(Ae),K=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case Xu:s.depthFunc(s.NEVER);break;case qu:s.depthFunc(s.ALWAYS);break;case ju:s.depthFunc(s.LESS);break;case Jo:s.depthFunc(s.LEQUAL);break;case Yu:s.depthFunc(s.EQUAL);break;case Zu:s.depthFunc(s.GEQUAL);break;case Ku:s.depthFunc(s.GREATER);break;case $u:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ae}},setLocked:function(Ae){z=Ae},setClear:function(Ae){Me!==Ae&&(s.clearDepth(Ae),Me=Ae)},reset:function(){z=!1,K=null,ce=null,Me=null}}}function o(){let z=!1,K=null,ce=null,Me=null,Ae=null,Je=null,Qe=null,Et=null,On=null;return{setTest:function(at){z||(at?O(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(at){K!==at&&!z&&(s.stencilMask(at),K=at)},setFunc:function(at,Wt,on){(ce!==at||Me!==Wt||Ae!==on)&&(s.stencilFunc(at,Wt,on),ce=at,Me=Wt,Ae=on)},setOp:function(at,Wt,on){(Je!==at||Qe!==Wt||Et!==on)&&(s.stencilOp(at,Wt,on),Je=at,Qe=Wt,Et=on)},setLocked:function(at){z=at},setClear:function(at){On!==at&&(s.clearStencil(at),On=at)},reset:function(){z=!1,K=null,ce=null,Me=null,Ae=null,Je=null,Qe=null,Et=null,On=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let u={},p={},m=new WeakMap,_=[],g=null,f=!1,x=null,v=null,S=null,M=null,w=null,T=null,L=null,y=!1,b=null,U=null,H=null,C=null,I=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=V>=2);let X=null,ee={};const le=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),Y=new xt().fromArray(le),ie=new xt().fromArray(J);function ue(z,K,ce,Me){const Ae=new Uint8Array(4),Je=s.createTexture();s.bindTexture(z,Je),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<ce;Qe++)n&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(K,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(K+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Je}const pe={};pe[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),O(s.DEPTH_TEST),l.setFunc(Jo),fe(!1),Pe(Ba),O(s.CULL_FACE),se(Vn);function O(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function Ie(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function De(z,K){return p[z]!==K?(s.bindFramebuffer(z,K),p[z]=K,n&&(z===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=K),z===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=K)),!0):!1}function he(z,K){let ce=_,Me=!1;if(z)if(ce=m.get(K),ce===void 0&&(ce=[],m.set(K,ce)),z.isWebGLMultipleRenderTargets){const Ae=z.texture;if(ce.length!==Ae.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Je=0,Qe=Ae.length;Je<Qe;Je++)ce[Je]=s.COLOR_ATTACHMENT0+Je;ce.length=Ae.length,Me=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Me=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Me=!0);Me&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function we(z){return g!==z?(s.useProgram(z),g=z,!0):!1}const re={[Hi]:s.FUNC_ADD,[Uu]:s.FUNC_SUBTRACT,[Nu]:s.FUNC_REVERSE_SUBTRACT};if(n)re[Ga]=s.MIN,re[Va]=s.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(re[Ga]=z.MIN_EXT,re[Va]=z.MAX_EXT)}const Q={[Fu]:s.ZERO,[Ou]:s.ONE,[Bu]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[Wu]:s.SRC_ALPHA_SATURATE,[Gu]:s.DST_COLOR,[ku]:s.DST_ALPHA,[zu]:s.ONE_MINUS_SRC_COLOR,[ih]:s.ONE_MINUS_SRC_ALPHA,[Vu]:s.ONE_MINUS_DST_COLOR,[Hu]:s.ONE_MINUS_DST_ALPHA};function se(z,K,ce,Me,Ae,Je,Qe,Et){if(z===Vn){f===!0&&(Ie(s.BLEND),f=!1);return}if(f===!1&&(O(s.BLEND),f=!0),z!==Du){if(z!==x||Et!==y){if((v!==Hi||w!==Hi)&&(s.blendEquation(s.FUNC_ADD),v=Hi,w=Hi),Et)switch(z){case ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.ONE,s.ONE);break;case ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ha:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,M=null,T=null,L=null,x=z,y=Et}return}Ae=Ae||K,Je=Je||ce,Qe=Qe||Me,(K!==v||Ae!==w)&&(s.blendEquationSeparate(re[K],re[Ae]),v=K,w=Ae),(ce!==S||Me!==M||Je!==T||Qe!==L)&&(s.blendFuncSeparate(Q[ce],Q[Me],Q[Je],Q[Qe]),S=ce,M=Me,T=Je,L=Qe),x=z,y=!1}function ye(z,K){z.side===fn?Ie(s.CULL_FACE):O(s.CULL_FACE);let ce=z.side===Pt;K&&(ce=!ce),fe(ce),z.blending===ji&&z.transparent===!1?se(Vn):se(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Me=z.stencilWrite;c.setTest(Me),Me&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?O(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function fe(z){b!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),b=z)}function Pe(z){z!==Pu?(O(s.CULL_FACE),z!==U&&(z===Ba?s.cullFace(s.BACK):z===Lu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),U=z}function Le(z){z!==H&&(F&&s.lineWidth(z),H=z)}function Re(z,K,ce){z?(O(s.POLYGON_OFFSET_FILL),(C!==K||I!==ce)&&(s.polygonOffset(K,ce),C=K,I=ce)):Ie(s.POLYGON_OFFSET_FILL)}function Be(z){z?O(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function Ye(z){z===void 0&&(z=s.TEXTURE0+D-1),X!==z&&(s.activeTexture(z),X=z)}function P(z,K,ce){ce===void 0&&(X===null?ce=s.TEXTURE0+D-1:ce=X);let Me=ee[ce];Me===void 0&&(Me={type:void 0,texture:void 0},ee[ce]=Me),(Me.type!==z||Me.texture!==K)&&(X!==ce&&(s.activeTexture(ce),X=ce),s.bindTexture(z,K||pe[z]),Me.type=z,Me.texture=K)}function A(){const z=ee[X];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(z){Y.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Y.copy(z))}function be(z){ie.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),ie.copy(z))}function Ne(z,K){let ce=d.get(K);ce===void 0&&(ce=new WeakMap,d.set(K,ce));let Me=ce.get(z);Me===void 0&&(Me=s.getUniformBlockIndex(K,z.name),ce.set(z,Me))}function Ve(z,K){const Me=d.get(K).get(z);h.get(K)!==Me&&(s.uniformBlockBinding(K,Me,z.__bindingPointIndex),h.set(K,Me))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},X=null,ee={},p={},m=new WeakMap,_=[],g=null,f=!1,x=null,v=null,S=null,M=null,w=null,T=null,L=null,y=!1,b=null,U=null,H=null,C=null,I=null,Y.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:O,disable:Ie,bindFramebuffer:De,drawBuffers:he,useProgram:we,setBlending:se,setMaterial:ye,setFlipSided:fe,setCullFace:Pe,setLineWidth:Le,setPolygonOffset:Re,setScissorTest:Be,activeTexture:Ye,bindTexture:P,unbindTexture:A,compressedTexImage2D:j,compressedTexImage3D:oe,texImage2D:Ee,texImage3D:Te,updateUBOMapping:Ne,uniformBlockBinding:Ve,texStorage2D:q,texStorage3D:_e,texSubImage2D:ae,texSubImage3D:me,compressedTexSubImage2D:N,compressedTexSubImage3D:ne,scissor:ve,viewport:be,reset:ot}}function E0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const g=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,A){return f?new OffscreenCanvas(P,A):Cs("canvas")}function v(P,A,j,oe){let ae=1;if((P.width>oe||P.height>oe)&&(ae=oe/Math.max(P.width,P.height)),ae<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const me=A?Td:Math.floor,N=me(ae*P.width),ne=me(ae*P.height);_===void 0&&(_=x(N,ne));const q=j?x(N,ne):_;return q.width=N,q.height=ne,q.getContext("2d").drawImage(P,0,0,N,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+N+"x"+ne+")."),q}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return gc(P.width)&&gc(P.height)}function M(P){return a?!1:P.wrapS!==zt||P.wrapT!==zt||P.minFilter!==Mt&&P.minFilter!==St}function w(P,A){return P.generateMipmaps&&A&&P.minFilter!==Mt&&P.minFilter!==St}function T(P){s.generateMipmap(P)}function L(P,A,j,oe,ae=!1){if(a===!1)return A;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me=A;return A===s.RED&&(j===s.FLOAT&&(me=s.R32F),j===s.HALF_FLOAT&&(me=s.R16F),j===s.UNSIGNED_BYTE&&(me=s.R8)),A===s.RG&&(j===s.FLOAT&&(me=s.RG32F),j===s.HALF_FLOAT&&(me=s.RG16F),j===s.UNSIGNED_BYTE&&(me=s.RG8)),A===s.RGBA&&(j===s.FLOAT&&(me=s.RGBA32F),j===s.HALF_FLOAT&&(me=s.RGBA16F),j===s.UNSIGNED_BYTE&&(me=oe===ke&&ae===!1?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)),(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function y(P,A,j){return w(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==Mt&&P.minFilter!==St?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function b(P){return P===Mt||P===Wa||P===to?s.NEAREST:s.LINEAR}function U(P){const A=P.target;A.removeEventListener("dispose",U),C(A),A.isVideoTexture&&m.delete(A)}function H(P){const A=P.target;A.removeEventListener("dispose",H),D(A)}function C(P){const A=n.get(P);if(A.__webglInit===void 0)return;const j=P.source,oe=g.get(j);if(oe){const ae=oe[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&I(P),Object.keys(oe).length===0&&g.delete(j)}n.remove(P)}function I(P){const A=n.get(P);s.deleteTexture(A.__webglTexture);const j=P.source,oe=g.get(j);delete oe[A.__cacheKey],o.memory.textures--}function D(P){const A=P.texture,j=n.get(P),oe=n.get(A);if(oe.__webglTexture!==void 0&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)s.deleteFramebuffer(j.__webglFramebuffer[ae]),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[ae]);else{if(s.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,me=A.length;ae<me;ae++){const N=n.get(A[ae]);N.__webglTexture&&(s.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(A[ae])}n.remove(A),n.remove(P)}let F=0;function V(){F=0}function k(){const P=F;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),F+=1,P}function X(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ee(P,A){const j=n.get(P);if(P.isVideoTexture&&Be(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(j,P,A);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+A)}function le(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Ie(j,P,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+A)}function J(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Ie(j,P,A);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+A)}function Y(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){De(j,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+A)}const ie={[ts]:s.REPEAT,[zt]:s.CLAMP_TO_EDGE,[ea]:s.MIRRORED_REPEAT},ue={[Mt]:s.NEAREST,[Wa]:s.NEAREST_MIPMAP_NEAREST,[to]:s.NEAREST_MIPMAP_LINEAR,[St]:s.LINEAR,[rd]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR};function pe(P,A,j){if(j?(s.texParameteri(P,s.TEXTURE_WRAP_S,ie[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ie[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ie[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ue[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ue[A.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==zt||A.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,b(A.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==Mt&&A.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Mt||A.minFilter!==to&&A.minFilter!==ns||A.type===pn&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ln&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(P,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function O(P,A){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",U));const oe=A.source;let ae=g.get(oe);ae===void 0&&(ae={},g.set(oe,ae));const me=X(A);if(me!==P.__cacheKey){ae[me]===void 0&&(ae[me]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ae[me].usedTimes++;const N=ae[P.__cacheKey];N!==void 0&&(ae[P.__cacheKey].usedTimes--,N.usedTimes===0&&I(A)),P.__cacheKey=me,P.__webglTexture=ae[me].texture}return j}function Ie(P,A,j){let oe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=s.TEXTURE_3D);const ae=O(P,A),me=A.source;t.bindTexture(oe,P.__webglTexture,s.TEXTURE0+j);const N=n.get(me);if(me.version!==N.__version||ae===!0){t.activeTexture(s.TEXTURE0+j),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ne=M(A)&&S(A.image)===!1;let q=v(A.image,ne,!1,h);q=Ye(A,q);const _e=S(q)||a,Ee=r.convert(A.format,A.colorSpace);let Te=r.convert(A.type),ve=L(A.internalFormat,Ee,Te,A.colorSpace);pe(oe,A,_e);let be;const Ne=A.mipmaps,Ve=a&&A.isVideoTexture!==!0,ot=N.__version===void 0||ae===!0,z=y(A,q,_e);if(A.isDepthTexture)ve=s.DEPTH_COMPONENT,a?A.type===pn?ve=s.DEPTH_COMPONENT32F:A.type===si?ve=s.DEPTH_COMPONENT24:A.type===Yi?ve=s.DEPTH24_STENCIL8:ve=s.DEPTH_COMPONENT16:A.type===pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===oi&&ve===s.DEPTH_COMPONENT&&A.type!==rh&&A.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=si,Te=r.convert(A.type)),A.format===is&&ve===s.DEPTH_COMPONENT&&(ve=s.DEPTH_STENCIL,A.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Yi,Te=r.convert(A.type))),ot&&(Ve?t.texStorage2D(s.TEXTURE_2D,1,ve,q.width,q.height):t.texImage2D(s.TEXTURE_2D,0,ve,q.width,q.height,0,Ee,Te,null));else if(A.isDataTexture)if(Ne.length>0&&_e){Ve&&ot&&t.texStorage2D(s.TEXTURE_2D,z,ve,Ne[0].width,Ne[0].height);for(let K=0,ce=Ne.length;K<ce;K++)be=Ne[K],Ve?t.texSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,Ee,Te,be.data):t.texImage2D(s.TEXTURE_2D,K,ve,be.width,be.height,0,Ee,Te,be.data);A.generateMipmaps=!1}else Ve?(ot&&t.texStorage2D(s.TEXTURE_2D,z,ve,q.width,q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,q.width,q.height,Ee,Te,q.data)):t.texImage2D(s.TEXTURE_2D,0,ve,q.width,q.height,0,Ee,Te,q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ve&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,z,ve,Ne[0].width,Ne[0].height,q.depth);for(let K=0,ce=Ne.length;K<ce;K++)be=Ne[K],A.format!==en?Ee!==null?Ve?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,q.depth,Ee,be.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,ve,be.width,be.height,q.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,q.depth,Ee,Te,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,ve,be.width,be.height,q.depth,0,Ee,Te,be.data)}else{Ve&&ot&&t.texStorage2D(s.TEXTURE_2D,z,ve,Ne[0].width,Ne[0].height);for(let K=0,ce=Ne.length;K<ce;K++)be=Ne[K],A.format!==en?Ee!==null?Ve?t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(s.TEXTURE_2D,K,ve,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,Ee,Te,be.data):t.texImage2D(s.TEXTURE_2D,K,ve,be.width,be.height,0,Ee,Te,be.data)}else if(A.isDataArrayTexture)Ve?(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,z,ve,q.width,q.height,q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Ee,Te,q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,q.width,q.height,q.depth,0,Ee,Te,q.data);else if(A.isData3DTexture)Ve?(ot&&t.texStorage3D(s.TEXTURE_3D,z,ve,q.width,q.height,q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Ee,Te,q.data)):t.texImage3D(s.TEXTURE_3D,0,ve,q.width,q.height,q.depth,0,Ee,Te,q.data);else if(A.isFramebufferTexture){if(ot)if(Ve)t.texStorage2D(s.TEXTURE_2D,z,ve,q.width,q.height);else{let K=q.width,ce=q.height;for(let Me=0;Me<z;Me++)t.texImage2D(s.TEXTURE_2D,Me,ve,K,ce,0,Ee,Te,null),K>>=1,ce>>=1}}else if(Ne.length>0&&_e){Ve&&ot&&t.texStorage2D(s.TEXTURE_2D,z,ve,Ne[0].width,Ne[0].height);for(let K=0,ce=Ne.length;K<ce;K++)be=Ne[K],Ve?t.texSubImage2D(s.TEXTURE_2D,K,0,0,Ee,Te,be):t.texImage2D(s.TEXTURE_2D,K,ve,Ee,Te,be);A.generateMipmaps=!1}else Ve?(ot&&t.texStorage2D(s.TEXTURE_2D,z,ve,q.width,q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Te,q)):t.texImage2D(s.TEXTURE_2D,0,ve,Ee,Te,q);w(A,_e)&&T(oe),N.__version=me.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function De(P,A,j){if(A.image.length!==6)return;const oe=O(P,A),ae=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const me=n.get(ae);if(ae.version!==me.__version||oe===!0){t.activeTexture(s.TEXTURE0+j),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const N=A.isCompressedTexture||A.image[0].isCompressedTexture,ne=A.image[0]&&A.image[0].isDataTexture,q=[];for(let K=0;K<6;K++)!N&&!ne?q[K]=v(A.image[K],!1,!0,c):q[K]=ne?A.image[K].image:A.image[K],q[K]=Ye(A,q[K]);const _e=q[0],Ee=S(_e)||a,Te=r.convert(A.format,A.colorSpace),ve=r.convert(A.type),be=L(A.internalFormat,Te,ve,A.colorSpace),Ne=a&&A.isVideoTexture!==!0,Ve=me.__version===void 0||oe===!0;let ot=y(A,_e,Ee);pe(s.TEXTURE_CUBE_MAP,A,Ee);let z;if(N){Ne&&Ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,be,_e.width,_e.height);for(let K=0;K<6;K++){z=q[K].mipmaps;for(let ce=0;ce<z.length;ce++){const Me=z[ce];A.format!==en?Te!==null?Ne?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,Me.width,Me.height,Te,ve,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,be,Me.width,Me.height,0,Te,ve,Me.data)}}}else{z=A.mipmaps,Ne&&Ve&&(z.length>0&&ot++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,be,q[0].width,q[0].height));for(let K=0;K<6;K++)if(ne){Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,q[K].width,q[K].height,Te,ve,q[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,q[K].width,q[K].height,0,Te,ve,q[K].data);for(let ce=0;ce<z.length;ce++){const Ae=z[ce].image[K].image;Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Ae.width,Ae.height,Te,ve,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,be,Ae.width,Ae.height,0,Te,ve,Ae.data)}}else{Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,ve,q[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,Te,ve,q[K]);for(let ce=0;ce<z.length;ce++){const Me=z[ce];Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Te,ve,Me.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,be,Te,ve,Me.image[K])}}}w(A,Ee)&&T(s.TEXTURE_CUBE_MAP),me.__version=ae.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function he(P,A,j,oe,ae){const me=r.convert(j.format,j.colorSpace),N=r.convert(j.type),ne=L(j.internalFormat,me,N,j.colorSpace);n.get(A).__hasExternalTextures||(ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,ne,A.width,A.height,A.depth,0,me,N,null):t.texImage2D(ae,0,ne,A.width,A.height,0,me,N,null)),t.bindFramebuffer(s.FRAMEBUFFER,P),Re(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ae,n.get(j).__webglTexture,0,Le(A)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ae,n.get(j).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(P,A,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let oe=s.DEPTH_COMPONENT16;if(j||Re(A)){const ae=A.depthTexture;ae&&ae.isDepthTexture&&(ae.type===pn?oe=s.DEPTH_COMPONENT32F:ae.type===si&&(oe=s.DEPTH_COMPONENT24));const me=Le(A);Re(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,oe,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,me,oe,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,oe,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const oe=Le(A);j&&Re(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,A.width,A.height):Re(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const oe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0;ae<oe.length;ae++){const me=oe[ae],N=r.convert(me.format,me.colorSpace),ne=r.convert(me.type),q=L(me.internalFormat,N,ne,me.colorSpace),_e=Le(A);j&&Re(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,q,A.width,A.height):Re(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,q,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee(A.depthTexture,0);const oe=n.get(A.depthTexture).__webglTexture,ae=Le(A);if(A.depthTexture.format===oi)Re(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(A.depthTexture.format===is)Re(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Q(P){const A=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");re(A.__webglFramebuffer,P)}else if(j){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]=s.createRenderbuffer(),we(A.__webglDepthbuffer[oe],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),we(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(P,A,j){const oe=n.get(P);A!==void 0&&he(oe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),j!==void 0&&Q(P)}function ye(P){const A=P.texture,j=n.get(P),oe=n.get(A);P.addEventListener("dispose",H),P.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=A.version,o.memory.textures++);const ae=P.isWebGLCubeRenderTarget===!0,me=P.isWebGLMultipleRenderTargets===!0,N=S(P)||a;if(ae){j.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)j.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(j.__webglFramebuffer=s.createFramebuffer(),me)if(i.drawBuffers){const ne=P.texture;for(let q=0,_e=ne.length;q<_e;q++){const Ee=n.get(ne[q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Re(P)===!1){const ne=me?A:[A];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let q=0;q<ne.length;q++){const _e=ne[q];j.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[q]);const Ee=r.convert(_e.format,_e.colorSpace),Te=r.convert(_e.type),ve=L(_e.internalFormat,Ee,Te,_e.colorSpace,P.isXRRenderTarget===!0),be=Le(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ve,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,j.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),we(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),pe(s.TEXTURE_CUBE_MAP,A,N);for(let ne=0;ne<6;ne++)he(j.__webglFramebuffer[ne],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne);w(A,N)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){const ne=P.texture;for(let q=0,_e=ne.length;q<_e;q++){const Ee=ne[q],Te=n.get(Ee);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),pe(s.TEXTURE_2D,Ee,N),he(j.__webglFramebuffer,P,Ee,s.COLOR_ATTACHMENT0+q,s.TEXTURE_2D),w(Ee,N)&&T(s.TEXTURE_2D)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ne=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,oe.__webglTexture),pe(ne,A,N),he(j.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,ne),w(A,N)&&T(ne),t.unbindTexture()}P.depthBuffer&&Q(P)}function fe(P){const A=S(P)||a,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let oe=0,ae=j.length;oe<ae;oe++){const me=j[oe];if(w(me,A)){const N=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ne=n.get(me).__webglTexture;t.bindTexture(N,ne),T(N),t.unbindTexture()}}}function Pe(P){if(a&&P.samples>0&&Re(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,oe=P.height;let ae=s.COLOR_BUFFER_BIT;const me=[],N=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=n.get(P),q=P.isWebGLMultipleRenderTargets===!0;if(q)for(let _e=0;_e<A.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let _e=0;_e<A.length;_e++){me.push(s.COLOR_ATTACHMENT0+_e),P.depthBuffer&&me.push(N);const Ee=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(Ee===!1&&(P.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),q&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ne.__webglColorRenderbuffer[_e]),Ee===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[N]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[N])),q){const Te=n.get(A[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,j,oe,0,0,j,oe,ae,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let _e=0;_e<A.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,ne.__webglColorRenderbuffer[_e]);const Ee=n.get(A[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Le(P){return Math.min(d,P.samples)}function Re(P){const A=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Be(P){const A=o.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function Ye(P,A){const j=P.colorSpace,oe=P.format,ae=P.type;return P.isCompressedTexture===!0||P.format===ta||j!==nn&&j!==ci&&(j===ke?a===!1?e.has("EXT_sRGB")===!0&&oe===en?(P.format=ta,P.minFilter=St,P.generateMipmaps=!1):A=lh.sRGBToLinear(A):(oe!==en||ae!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=ee,this.setTexture2DArray=le,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=se,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Re}function w0(s,e,t){const n=t.isWebGL2;function i(r,o=ci){let a;if(r===hi)return s.UNSIGNED_BYTE;if(r===ld)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===od)return s.BYTE;if(r===ad)return s.SHORT;if(r===rh)return s.UNSIGNED_SHORT;if(r===cd)return s.INT;if(r===si)return s.UNSIGNED_INT;if(r===pn)return s.FLOAT;if(r===Ln)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ud)return s.ALPHA;if(r===en)return s.RGBA;if(r===dd)return s.LUMINANCE;if(r===fd)return s.LUMINANCE_ALPHA;if(r===oi)return s.DEPTH_COMPONENT;if(r===is)return s.DEPTH_STENCIL;if(r===ta)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pd)return s.RED;if(r===md)return s.RED_INTEGER;if(r===gd)return s.RG;if(r===_d)return s.RG_INTEGER;if(r===vd)return s.RGBA_INTEGER;if(r===no||r===io||r===so||r===ro)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===no)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===no)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===io)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===so)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ro)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xa||r===qa||r===ja||r===Ya)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Za||r===Ka)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Za)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ka)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$a||r===Ja||r===Qa||r===ec||r===tc||r===nc||r===ic||r===sc||r===rc||r===oc||r===ac||r===cc||r===lc||r===hc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$a)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ja)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ec)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tc)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nc)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ic)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sc)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rc)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oc)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ac)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cc)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lc)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hc)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===oo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===oo)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===yd||r===uc||r===dc||r===fc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===oo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===uc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class b0 extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class A0 extends Lt{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:oi,h!==oi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=si),n===void 0&&h===is&&(n=Yi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class R0 extends Wn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,m=null;const _=t.getContextAttributes();let g=null,f=null;const x=[],v=[],S=new Set,M=new Map,w=new Bt;w.layers.enable(1),w.viewport=new xt;const T=new Bt;T.layers.enable(2),T.viewport=new xt;const L=[w,T],y=new b0;y.layers.enable(1),y.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Lo,x[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Lo,x[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Lo,x[Y]=ie),ie.getHandSpace()};function H(Y){const ie=v.indexOf(Y.inputSource);if(ie===-1)return;const ue=x[ie];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||o),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function C(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",I);for(let Y=0;Y<x.length;Y++){const ie=v[Y];ie!==null&&(v[Y]=null,x[Y].disconnect(ie))}b=null,U=null,e.setRenderTarget(g),p=null,u=null,d=null,i=null,f=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",C),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:p}),f=new ui(p.framebufferWidth,p.framebufferHeight,{format:en,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ie=null,ue=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=_.stencil?is:oi,ue=_.stencil?Yi:si);const O={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(O),i.updateRenderState({layers:[u]}),f=new ui(u.textureWidth,u.textureHeight,{format:en,type:hi,depthTexture:new A0(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ie=e.properties.get(f);Ie.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(Y){for(let ie=0;ie<Y.removed.length;ie++){const ue=Y.removed[ie],pe=v.indexOf(ue);pe>=0&&(v[pe]=null,x[pe].disconnect(ue))}for(let ie=0;ie<Y.added.length;ie++){const ue=Y.added[ie];let pe=v.indexOf(ue);if(pe===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=v.length){v.push(ue),pe=Ie;break}else if(v[Ie]===null){v[Ie]=ue,pe=Ie;break}if(pe===-1)break}const O=x[pe];O&&O.connect(ue)}}const D=new B,F=new B;function V(Y,ie,ue){D.setFromMatrixPosition(ie.matrixWorld),F.setFromMatrixPosition(ue.matrixWorld);const pe=D.distanceTo(F),O=ie.projectionMatrix.elements,Ie=ue.projectionMatrix.elements,De=O[14]/(O[10]-1),he=O[14]/(O[10]+1),we=(O[9]+1)/O[5],re=(O[9]-1)/O[5],Q=(O[8]-1)/O[0],se=(Ie[8]+1)/Ie[0],ye=De*Q,fe=De*se,Pe=pe/(-Q+se),Le=Pe*-Q;ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Le),Y.translateZ(Pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const Re=De+Pe,Be=he+Pe,Ye=ye-Le,P=fe+(pe-Le),A=we*he/Be*Re,j=re*he/Be*Re;Y.projectionMatrix.makePerspective(Ye,P,A,j,Re,Be),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function k(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;y.near=T.near=w.near=Y.near,y.far=T.far=w.far=Y.far,(b!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,U=y.far);const ie=Y.parent,ue=y.cameras;k(y,ie);for(let pe=0;pe<ue.length;pe++)k(ue[pe],ie);ue.length===2?V(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),X(Y,y,ie)};function X(Y,ie,ue){ue===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const pe=Y.children;for(let O=0,Ie=pe.length;O<Ie;O++)pe[O].updateMatrixWorld(!0);Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=na*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.getPlanes=function(){return S};let ee=null;function le(Y,ie){if(h=ie.getViewerPose(c||o),m=ie,h!==null){const ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let pe=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let O=0;O<ue.length;O++){const Ie=ue[O];let De=null;if(p!==null)De=p.getViewport(Ie);else{const we=d.getViewSubImage(u,Ie);De=we.viewport,O===0&&(e.setRenderTargetTextures(f,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(f))}let he=L[O];he===void 0&&(he=new Bt,he.layers.enable(O),he.viewport=new xt,L[O]=he),he.matrix.fromArray(Ie.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Ie.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(De.x,De.y,De.width,De.height),O===0&&(y.matrix.copy(he.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(he)}}for(let ue=0;ue<x.length;ue++){const pe=v[ue],O=x[ue];pe!==null&&O!==void 0&&O.update(pe,ie,c||o)}if(ee&&ee(Y,ie),ie.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ie.detectedPlanes});let ue=null;for(const pe of S)ie.detectedPlanes.has(pe)||(ue===null&&(ue=[]),ue.push(pe));if(ue!==null)for(const pe of ue)S.delete(pe),M.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of ie.detectedPlanes)if(!S.has(pe))S.add(pe),M.set(pe,ie.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const O=M.get(pe);pe.lastChangedTime>O&&(M.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}m=null}const J=new xh;J.setAnimationLoop(le),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}}function C0(s,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,gh(s)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Pt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Pt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=v*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function P0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=i[x.id];S===void 0&&(m(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",g));const M=v.program;n.updateUBOMapping(x,M);const w=e.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const v=d();x.__bindingPointIndex=v;const S=s.createBuffer(),M=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=i[x.id],S=x.uniforms,M=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,T=S.length;w<T;w++){const L=S[w];if(p(L,w,M)===!0){const y=L.__offset,b=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let H=0;H<b.length;H++){const C=b[H],I=_(C);typeof C=="number"?(L.__data[0]=C,s.bufferSubData(s.UNIFORM_BUFFER,y+U,L.__data)):C.isMatrix3?(L.__data[0]=C.elements[0],L.__data[1]=C.elements[1],L.__data[2]=C.elements[2],L.__data[3]=C.elements[0],L.__data[4]=C.elements[3],L.__data[5]=C.elements[4],L.__data[6]=C.elements[5],L.__data[7]=C.elements[0],L.__data[8]=C.elements[6],L.__data[9]=C.elements[7],L.__data[10]=C.elements[8],L.__data[11]=C.elements[0]):(C.toArray(L.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,y,L.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,v,S){const M=x.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const w=Array.isArray(M)?M:[M],T=[];for(let L=0;L<w.length;L++)T.push(w[L].clone());S[v]=T}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const w=Array.isArray(S[v])?S[v]:[S[v]],T=Array.isArray(M)?M:[M];for(let L=0;L<w.length;L++){const y=w[L];if(y.equals(T[L])===!1)return y.copy(T[L]),!0}}return!1}function m(x){const v=x.uniforms;let S=0;const M=16;let w=0;for(let T=0,L=v.length;T<L;T++){const y=v[T],b={boundary:0,storage:0},U=Array.isArray(y.value)?y.value:[y.value];for(let H=0,C=U.length;H<C;H++){const I=U[H],D=_(I);b.boundary+=D.boundary,b.storage+=D.storage}if(y.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,T>0){w=S%M;const H=M-w;w!==0&&H-b.boundary<0&&(S+=M-w,y.__offset=S)}S+=b.storage}return w=S%M,w>0&&(S+=M-w),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}function L0(){const s=Cs("canvas");return s.style.display="block",s}class bh{constructor(e={}){const{canvas:t=L0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let p=null,m=null;const _=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=Dn,this.toneMappingExposure=1;const f=this;let x=!1,v=0,S=0,M=null,w=-1,T=null;const L=new xt,y=new xt;let b=null,U=t.width,H=t.height,C=1,I=null,D=null;const F=new xt(0,0,U,H),V=new xt(0,0,U,H);let k=!1;const X=new _a;let ee=!1,le=!1,J=null;const Y=new rt,ie=new B,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return M===null?C:1}let O=n;function Ie(R,W){for(let $=0;$<R.length;$++){const G=R[$],te=t.getContext(G,W);if(te!==null)return te}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ma}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),O===null){const W=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&W.shift(),O=Ie(W,R),O===null)throw Ie(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let De,he,we,re,Q,se,ye,fe,Pe,Le,Re,Be,Ye,P,A,j,oe,ae,me,N,ne,q,_e,Ee;function Te(){De=new Gm(O),he=new Fm(O,De,e),De.init(he),q=new w0(O,De,he),we=new S0(O,De,he),re=new Xm(O),Q=new c0,se=new E0(O,De,we,Q,he,q,re),ye=new Bm(f),fe=new Hm(f),Pe=new nf(O,he),_e=new Um(O,De,Pe,he),Le=new Vm(O,Pe,re,_e),Re=new Zm(O,Le,Pe,re),me=new Ym(O,he,se),j=new Om(Q),Be=new a0(f,ye,fe,De,he,_e,j),Ye=new C0(f,Q),P=new h0,A=new g0(De,he),ae=new Dm(f,ye,fe,we,Re,u,l),oe=new M0(f,Re,he),Ee=new P0(O,re,he,we),N=new Nm(O,De,re,he),ne=new Wm(O,De,re,he),re.programs=Be.programs,f.capabilities=he,f.extensions=De,f.properties=Q,f.renderLists=P,f.shadowMap=oe,f.state=we,f.info=re}Te();const ve=new R0(f,O);this.xr=ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=De.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=De.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(R){R!==void 0&&(C=R,this.setSize(U,H,!1))},this.getSize=function(R){return R.set(U,H)},this.setSize=function(R,W,$=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,H=W,t.width=Math.floor(R*C),t.height=Math.floor(W*C),$===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(U*C,H*C).floor()},this.setDrawingBufferSize=function(R,W,$){U=R,H=W,C=$,t.width=Math.floor(R*$),t.height=Math.floor(W*$),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,W,$,G){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,W,$,G),we.viewport(L.copy(F).multiplyScalar(C).floor())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,W,$,G){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,W,$,G),we.scissor(y.copy(V).multiplyScalar(C).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(R){we.setScissorTest(k=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){D=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(R=!0,W=!0,$=!0){let G=0;R&&(G|=O.COLOR_BUFFER_BIT),W&&(G|=O.DEPTH_BUFFER_BIT),$&&(G|=O.STENCIL_BUFFER_BIT),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),P.dispose(),A.dispose(),Q.dispose(),ye.dispose(),fe.dispose(),Re.dispose(),_e.dispose(),Ee.dispose(),Be.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Ae),ve.removeEventListener("sessionend",Je),J&&(J.dispose(),J=null),Qe.stop()};function be(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=re.autoReset,W=oe.enabled,$=oe.autoUpdate,G=oe.needsUpdate,te=oe.type;Te(),re.autoReset=R,oe.enabled=W,oe.autoUpdate=$,oe.needsUpdate=G,oe.type=te}function Ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const W=R.target;W.removeEventListener("dispose",ot),z(W)}function z(R){K(R),Q.remove(R)}function K(R){const W=Q.get(R).programs;W!==void 0&&(W.forEach(function($){Be.releaseProgram($)}),R.isShaderMaterial&&Be.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,$,G,te,Ce){W===null&&(W=ue);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Fe=Tu(R,W,$,G,te);we.setMaterial(G,Ue);let He=$.index,We=1;G.wireframe===!0&&(He=Le.getWireframeAttribute($),We=2);const Xe=$.drawRange,qe=$.attributes.position;let $e=Xe.start*We,At=(Xe.start+Xe.count)*We;Ce!==null&&($e=Math.max($e,Ce.start*We),At=Math.min(At,(Ce.start+Ce.count)*We)),He!==null?($e=Math.max($e,0),At=Math.min(At,He.count)):qe!=null&&($e=Math.max($e,0),At=Math.min(At,qe.count));const jt=At-$e;if(jt<0||jt===1/0)return;_e.setup(te,G,Fe,$,He);let jn,ct=N;if(He!==null&&(jn=Pe.get(He),ct=ne,ct.setIndex(jn)),te.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*pe()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(te.isLine){let Ze=G.linewidth;Ze===void 0&&(Ze=1),we.setLineWidth(Ze*pe()),te.isLineSegments?ct.setMode(O.LINES):te.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else te.isPoints?ct.setMode(O.POINTS):te.isSprite&&ct.setMode(O.TRIANGLES);if(te.isInstancedMesh)ct.renderInstances($e,jt,te.count);else if($.isInstancedBufferGeometry){const Ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,$r=Math.min($.instanceCount,Ze);ct.renderInstances($e,jt,$r)}else ct.render($e,jt)},this.compile=function(R,W){function $(G,te,Ce){G.transparent===!0&&G.side===fn&&G.forceSinglePass===!1?(G.side=Pt,G.needsUpdate=!0,ks(G,te,Ce),G.side=Un,G.needsUpdate=!0,ks(G,te,Ce),G.side=fn):ks(G,te,Ce)}m=A.get(R),m.init(),g.push(m),R.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(f.useLegacyLights),R.traverse(function(G){const te=G.material;if(te)if(Array.isArray(te))for(let Ce=0;Ce<te.length;Ce++){const Ue=te[Ce];$(Ue,R,G)}else $(te,R,G)}),g.pop(),m=null};let ce=null;function Me(R){ce&&ce(R)}function Ae(){Qe.stop()}function Je(){Qe.start()}const Qe=new xh;Qe.setAnimationLoop(Me),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(R){ce=R,ve.setAnimationLoop(R),R===null?Qe.stop():Qe.start()},ve.addEventListener("sessionstart",Ae),ve.addEventListener("sessionend",Je),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(W),W=ve.getCamera()),R.isScene===!0&&R.onBeforeRender(f,R,W,M),m=A.get(R,g.length),m.init(),g.push(m),Y.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix(Y),le=this.localClippingEnabled,ee=j.init(this.clippingPlanes,le),p=P.get(R,_.length),p.init(),_.push(p),Et(R,W,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(I,D),ee===!0&&j.beginShadows();const $=m.state.shadowsArray;if(oe.render($,R,W),ee===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(p,R),m.setupLights(f.useLegacyLights),W.isArrayCamera){const G=W.cameras;for(let te=0,Ce=G.length;te<Ce;te++){const Ue=G[te];On(p,R,Ue,Ue.viewport)}}else On(p,R,W);M!==null&&(se.updateMultisampleRenderTarget(M),se.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(f,R,W),_e.resetDefaultState(),w=-1,T=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Et(R,W,$,G){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){G&&ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Y);const Ue=Re.update(R),Fe=R.material;Fe.visible&&p.push(R,Ue,Fe,$,ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==re.render.frame&&(R.skeleton.update(),R.skeleton.frame=re.render.frame);const Ue=Re.update(R),Fe=R.material;if(G&&(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ie.copy(Ue.boundingSphere.center).applyMatrix4(R.matrixWorld).applyMatrix4(Y)),Array.isArray(Fe)){const He=Ue.groups;for(let We=0,Xe=He.length;We<Xe;We++){const qe=He[We],$e=Fe[qe.materialIndex];$e&&$e.visible&&p.push(R,Ue,$e,$,ie.z,qe)}}else Fe.visible&&p.push(R,Ue,Fe,$,ie.z,null)}}const Ce=R.children;for(let Ue=0,Fe=Ce.length;Ue<Fe;Ue++)Et(Ce[Ue],W,$,G)}function On(R,W,$,G){const te=R.opaque,Ce=R.transmissive,Ue=R.transparent;m.setupLightsView($),ee===!0&&j.setGlobalState(f.clippingPlanes,$),Ce.length>0&&at(te,Ce,W,$),G&&we.viewport(L.copy(G)),te.length>0&&Wt(te,W,$),Ce.length>0&&Wt(Ce,W,$),Ue.length>0&&Wt(Ue,W,$),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function at(R,W,$,G){if(J===null){const Fe=he.isWebGL2;J=new ui(1024,1024,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?Ln:hi,minFilter:ns,samples:Fe&&a===!0?4:0})}const te=f.getRenderTarget();f.setRenderTarget(J),f.clear();const Ce=f.toneMapping;f.toneMapping=Dn,Wt(R,$,G),se.updateMultisampleRenderTarget(J),se.updateRenderTargetMipmap(J);let Ue=!1;for(let Fe=0,He=W.length;Fe<He;Fe++){const We=W[Fe],Xe=We.object,qe=We.geometry,$e=We.material,At=We.group;if($e.side===fn&&Xe.layers.test(G.layers)){const jt=$e.side;$e.side=Pt,$e.needsUpdate=!0,on(Xe,$,G,qe,$e,At),$e.side=jt,$e.needsUpdate=!0,Ue=!0}}Ue===!0&&(se.updateMultisampleRenderTarget(J),se.updateRenderTargetMipmap(J)),f.setRenderTarget(te),f.toneMapping=Ce}function Wt(R,W,$){const G=W.isScene===!0?W.overrideMaterial:null;for(let te=0,Ce=R.length;te<Ce;te++){const Ue=R[te],Fe=Ue.object,He=Ue.geometry,We=G===null?Ue.material:G,Xe=Ue.group;Fe.layers.test($.layers)&&on(Fe,W,$,He,We,Xe)}}function on(R,W,$,G,te,Ce){R.onBeforeRender(f,W,$,G,te,Ce),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(f,W,$,G,R,Ce),te.transparent===!0&&te.side===fn&&te.forceSinglePass===!1?(te.side=Pt,te.needsUpdate=!0,f.renderBufferDirect($,W,G,te,R,Ce),te.side=Un,te.needsUpdate=!0,f.renderBufferDirect($,W,G,te,R,Ce),te.side=fn):f.renderBufferDirect($,W,G,te,R,Ce),R.onAfterRender(f,W,$,G,te,Ce)}function ks(R,W,$){W.isScene!==!0&&(W=ue);const G=Q.get(R),te=m.state.lights,Ce=m.state.shadowsArray,Ue=te.state.version,Fe=Be.getParameters(R,te.state,Ce,W,$),He=Be.getProgramCacheKey(Fe);let We=G.programs;G.environment=R.isMeshStandardMaterial?W.environment:null,G.fog=W.fog,G.envMap=(R.isMeshStandardMaterial?fe:ye).get(R.envMap||G.environment),We===void 0&&(R.addEventListener("dispose",ot),We=new Map,G.programs=We);let Xe=We.get(He);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===Ue)return Na(R,Fe),Xe}else Fe.uniforms=Be.getUniforms(R),R.onBuild($,Fe,f),R.onBeforeCompile(Fe,f),Xe=Be.acquireProgram(Fe,He),We.set(He,Xe),G.uniforms=Fe.uniforms;const qe=G.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=j.uniform),Na(R,Fe),G.needsLights=Ru(R),G.lightsStateVersion=Ue,G.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMap.value=te.state.directionalShadowMap,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotShadowMap.value=te.state.spotShadowMap,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMap.value=te.state.pointShadowMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix);const $e=Xe.getUniforms(),At=Mr.seqWithValue($e.seq,qe);return G.currentProgram=Xe,G.uniformsList=At,Xe}function Na(R,W){const $=Q.get(R);$.outputColorSpace=W.outputColorSpace,$.instancing=W.instancing,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Tu(R,W,$,G,te){W.isScene!==!0&&(W=ue),se.resetTextureUnits();const Ce=W.fog,Ue=G.isMeshStandardMaterial?W.environment:null,Fe=M===null?f.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:nn,He=(G.isMeshStandardMaterial?fe:ye).get(G.envMap||Ue),We=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!G.normalMap&&!!$.attributes.tangent,qe=!!$.morphAttributes.position,$e=!!$.morphAttributes.normal,At=!!$.morphAttributes.color,jt=G.toneMapped?f.toneMapping:Dn,jn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=jn!==void 0?jn.length:0,Ze=Q.get(G),$r=m.state.lights;if(ee===!0&&(le===!0||R!==T)){const Ut=R===T&&G.id===w;j.setState(G,R,Ut)}let mt=!1;G.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==$r.state.version||Ze.outputColorSpace!==Fe||te.isInstancedMesh&&Ze.instancing===!1||!te.isInstancedMesh&&Ze.instancing===!0||te.isSkinnedMesh&&Ze.skinning===!1||!te.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==He||G.fog===!0&&Ze.fog!==Ce||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==j.numPlanes||Ze.numIntersection!==j.numIntersection)||Ze.vertexAlphas!==We||Ze.vertexTangents!==Xe||Ze.morphTargets!==qe||Ze.morphNormals!==$e||Ze.morphColors!==At||Ze.toneMapping!==jt||he.isWebGL2===!0&&Ze.morphTargetsCount!==ct)&&(mt=!0):(mt=!0,Ze.__version=G.version);let Yn=Ze.currentProgram;mt===!0&&(Yn=ks(G,W,te));let Fa=!1,ds=!1,Jr=!1;const Rt=Yn.getUniforms(),Zn=Ze.uniforms;if(we.useProgram(Yn.program)&&(Fa=!0,ds=!0,Jr=!0),G.id!==w&&(w=G.id,ds=!0),Fa||T!==R){if(Rt.setValue(O,"projectionMatrix",R.projectionMatrix),he.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),T!==R&&(T=R,ds=!0,Jr=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Ut=Rt.map.cameraPosition;Ut!==void 0&&Ut.setValue(O,ie.setFromMatrixPosition(R.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||te.isSkinnedMesh)&&Rt.setValue(O,"viewMatrix",R.matrixWorldInverse)}if(te.isSkinnedMesh){Rt.setOptional(O,te,"bindMatrix"),Rt.setOptional(O,te,"bindMatrixInverse");const Ut=te.skeleton;Ut&&(he.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),Rt.setValue(O,"boneTexture",Ut.boneTexture,se),Rt.setValue(O,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qr=$.morphAttributes;if((Qr.position!==void 0||Qr.normal!==void 0||Qr.color!==void 0&&he.isWebGL2===!0)&&me.update(te,$,Yn),(ds||Ze.receiveShadow!==te.receiveShadow)&&(Ze.receiveShadow=te.receiveShadow,Rt.setValue(O,"receiveShadow",te.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Zn.envMap.value=He,Zn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ds&&(Rt.setValue(O,"toneMappingExposure",f.toneMappingExposure),Ze.needsLights&&Au(Zn,Jr),Ce&&G.fog===!0&&Ye.refreshFogUniforms(Zn,Ce),Ye.refreshMaterialUniforms(Zn,G,C,H,J),Mr.upload(O,Ze.uniformsList,Zn,se)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Mr.upload(O,Ze.uniformsList,Zn,se),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(O,"center",te.center),Rt.setValue(O,"modelViewMatrix",te.modelViewMatrix),Rt.setValue(O,"normalMatrix",te.normalMatrix),Rt.setValue(O,"modelMatrix",te.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ut=G.uniformsGroups;for(let eo=0,Cu=Ut.length;eo<Cu;eo++)if(he.isWebGL2){const Oa=Ut[eo];Ee.update(Oa,Yn),Ee.bind(Oa,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function Au(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ru(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,W,$){Q.get(R.texture).__webglTexture=W,Q.get(R.depthTexture).__webglTexture=$;const G=Q.get(R);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=$===void 0,G.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const $=Q.get(R);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,$=0){M=R,v=W,S=$;let G=!0,te=null,Ce=!1,Ue=!1;if(R){const He=Q.get(R);He.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):He.__webglFramebuffer===void 0?se.setupRenderTarget(R):He.__hasExternalTextures&&se.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ue=!0);const Xe=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(te=Xe[W],Ce=!0):he.isWebGL2&&R.samples>0&&se.useMultisampledRTT(R)===!1?te=Q.get(R).__webglMultisampledFramebuffer:te=Xe,L.copy(R.viewport),y.copy(R.scissor),b=R.scissorTest}else L.copy(F).multiplyScalar(C).floor(),y.copy(V).multiplyScalar(C).floor(),b=k;if(we.bindFramebuffer(O.FRAMEBUFFER,te)&&he.drawBuffers&&G&&we.drawBuffers(R,te),we.viewport(L),we.scissor(y),we.setScissorTest(b),Ce){const He=Q.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,$)}else if(Ue){const He=Q.get(R.texture),We=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,$||0,We)}w=-1},this.readRenderTargetPixels=function(R,W,$,G,te,Ce,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){we.bindFramebuffer(O.FRAMEBUFFER,Fe);try{const He=R.texture,We=He.format,Xe=He.type;if(We!==en&&q.convert(We)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Xe===Ln&&(De.has("EXT_color_buffer_half_float")||he.isWebGL2&&De.has("EXT_color_buffer_float"));if(Xe!==hi&&q.convert(Xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===pn&&(he.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-G&&$>=0&&$<=R.height-te&&O.readPixels(W,$,G,te,q.convert(We),q.convert(Xe),Ce)}finally{const He=M!==null?Q.get(M).__webglFramebuffer:null;we.bindFramebuffer(O.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(R,W,$=0){const G=Math.pow(2,-$),te=Math.floor(W.image.width*G),Ce=Math.floor(W.image.height*G);se.setTexture2D(W,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,R.x,R.y,te,Ce),we.unbindTexture()},this.copyTextureToTexture=function(R,W,$,G=0){const te=W.image.width,Ce=W.image.height,Ue=q.convert($.format),Fe=q.convert($.type);se.setTexture2D($,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,R.x,R.y,te,Ce,Ue,Fe,W.image.data):W.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Ue,W.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,R.x,R.y,Ue,Fe,W.image),G===0&&$.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(R,W,$,G,te=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=R.max.x-R.min.x+1,Ue=R.max.y-R.min.y+1,Fe=R.max.z-R.min.z+1,He=q.convert(G.format),We=q.convert(G.type);let Xe;if(G.isData3DTexture)se.setTexture3D(G,0),Xe=O.TEXTURE_3D;else if(G.isDataArrayTexture)se.setTexture2DArray(G,0),Xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const qe=O.getParameter(O.UNPACK_ROW_LENGTH),$e=O.getParameter(O.UNPACK_IMAGE_HEIGHT),At=O.getParameter(O.UNPACK_SKIP_PIXELS),jt=O.getParameter(O.UNPACK_SKIP_ROWS),jn=O.getParameter(O.UNPACK_SKIP_IMAGES),ct=$.isCompressedTexture?$.mipmaps[0]:$.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,R.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,R.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?O.texSubImage3D(Xe,te,W.x,W.y,W.z,Ce,Ue,Fe,He,We,ct.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Xe,te,W.x,W.y,W.z,Ce,Ue,Fe,He,ct.data)):O.texSubImage3D(Xe,te,W.x,W.y,W.z,Ce,Ue,Fe,He,We,ct),O.pixelStorei(O.UNPACK_ROW_LENGTH,qe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$e),O.pixelStorei(O.UNPACK_SKIP_PIXELS,At),O.pixelStorei(O.UNPACK_SKIP_ROWS,jt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,jn),te===0&&G.generateMipmaps&&O.generateMipmap(Xe),we.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){v=0,S=0,M=null,we.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?ai:oh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ai?ke:nn}}class I0 extends bh{}I0.prototype.isWebGL1Renderer=!0;class D0 extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class U0 extends Lt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Mt,h=Mt,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new B,tl=new B,nl=new rt,Io=new ga,lr=new Ns;class N0 extends yt{constructor(e=new Gt,t=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)el.fromBufferAttribute(t,i-1),tl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=el.distanceTo(tl);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(i),lr.radius+=r,e.ray.intersectsSphere(lr)===!1)return;nl.copy(i).invert(),Io.copy(e.ray).applyMatrix4(nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,h=new B,d=new B,u=new B,p=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){const M=m.getX(v),w=m.getX(v+1);if(c.fromBufferAttribute(g,M),h.fromBufferAttribute(g,w),Io.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Io.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(u);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const il=new B,sl=new B;class sa extends N0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)il.fromBufferAttribute(t,i),sl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+il.distanceTo(sl);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Es extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rl=new rt,ra=new ga,hr=new Ns,ur=new B;class Do extends yt{constructor(e=new Gt,t=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;rl.copy(i).invert(),ra.copy(e.ray).applyMatrix4(rl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=u,_=p;m<_;m++){const g=c.getX(m);ur.fromBufferAttribute(d,g),ol(ur,g,l,i,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=u,_=p;m<_;m++)ur.fromBufferAttribute(d,m),ol(ur,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ol(s,e,t,n,i,r,o){const a=ra.distanceSqToPoint(s);if(a<t){const l=new B;ra.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,p=(o-h)/u;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new de:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new B,i=[],r=[],o=[],a=new B,l=new rt;for(let p=0;p<=e;p++){const m=p/e;i[p]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(_t(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(_t(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xa extends gn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new de,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class F0 extends xa{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ya(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,i(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const dr=new B,Uo=new ya,No=new ya,Fo=new ya;class O0 extends gn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(dr.subVectors(i[0],i[1]).add(i[0]),c=dr);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(dr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Uo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,g),No.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,g),Fo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),No.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Fo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Uo.calc(l),No.calc(l),Fo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function al(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function B0(s,e){const t=1-s;return t*t*e}function z0(s,e){return 2*(1-s)*s*e}function k0(s,e){return s*s*e}function Ts(s,e,t,n){return B0(s,e)+z0(s,t)+k0(s,n)}function H0(s,e){const t=1-s;return t*t*t*e}function G0(s,e){const t=1-s;return 3*t*t*s*e}function V0(s,e){return 3*(1-s)*s*s*e}function W0(s,e){return s*s*s*e}function As(s,e,t,n,i){return H0(s,e)+G0(s,t)+V0(s,n)+W0(s,i)}class Th extends gn{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(e,i.x,r.x,o.x,a.x),As(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X0 extends gn{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(e,i.x,r.x,o.x,a.x),As(e,i.y,r.y,o.y,a.y),As(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ma extends gn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q0 extends gn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ah extends gn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ts(e,i.x,r.x,o.x),Ts(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends gn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ts(e,i.x,r.x,o.x),Ts(e,i.y,r.y,o.y),Ts(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rh extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(al(a,l.x,c.x,h.x,d.x),al(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new de().fromArray(i))}return this}}var Ch=Object.freeze({__proto__:null,ArcCurve:F0,CatmullRomCurve3:O0,CubicBezierCurve:Th,CubicBezierCurve3:X0,EllipseCurve:xa,LineCurve:Ma,LineCurve3:q0,QuadraticBezierCurve:Ah,QuadraticBezierCurve3:j0,SplineCurve:Rh});class Y0 extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ma(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ch[i.type]().fromJSON(i))}return this}}class oa extends Y0{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ma(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ah(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Th(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Rh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new xa(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}let Sr=class extends oa{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new oa().fromJSON(i))}return this}};const Z0={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ph(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,p;if(n&&(r=e_(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)d=s[m],u=s[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Ps(r,o,t,a,l,p,0),o}};function Ph(s,e,t,n,i){let r,o;if(i===u_(s,e,t,n)>0)for(r=e;r<t;r+=n)o=cl(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=cl(r,s[r],s[r+1],o);return o&&kr(o,o.next)&&(Is(o),o=o.next),o}function mi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||nt(t.prev,t,t.next)===0)){if(Is(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ps(s,e,t,n,i,r,o){if(!s)return;!o&&r&&r_(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?$0(s,n,i,r):K0(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Is(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=J0(mi(s),e,t),Ps(s,e,t,n,i,r,2)):o===2&&Q0(s,e,t,n,i,r):Ps(mi(s),e,t,n,i,r,1);break}}}function K0(s){const e=s.prev,t=s,n=s.next;if(nt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&Wi(i,a,r,l,o,c,m.x,m.y)&&nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(nt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,_=a>l?a>c?a:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,f=aa(p,m,e,t,n),x=aa(_,g,e,t,n);let v=s.prevZ,S=s.nextZ;for(;v&&v.z>=f&&S&&S.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Wi(a,h,l,d,c,u,v.x,v.y)&&nt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Wi(a,h,l,d,c,u,S.x,S.y)&&nt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Wi(a,h,l,d,c,u,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Wi(a,h,l,d,c,u,S.x,S.y)&&nt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function J0(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!kr(i,r)&&Lh(i,n,n.next,r)&&Ls(i,r)&&Ls(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Is(n),Is(n.next),n=s=r),n=n.next}while(n!==s);return mi(n)}function Q0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c_(o,a)){let l=Ih(o,a);o=mi(o,o.next),l=mi(l,l.next),Ps(o,e,t,n,i,r,0),Ps(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function e_(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Ph(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(a_(c));for(i.sort(t_),r=0;r<i.length;r++)t=n_(i[r],t);return t}function t_(s,e){return s.x-e.x}function n_(s,e){const t=i_(s,e);if(!t)return e;const n=Ih(t,s);return mi(n,n.next),mi(t,t.next)}function i_(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Wi(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Ls(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&s_(i,t)))&&(i=t,h=d)),t=t.next;while(t!==a);return i}function s_(s,e){return nt(s.prev,s,e.prev)<0&&nt(e.next,s,s.next)<0}function r_(s,e,t,n){let i=s;do i.z===0&&(i.z=aa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,o_(i)}function o_(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function aa(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function a_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Wi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function c_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!l_(s,e)&&(Ls(s,e)&&Ls(e,s)&&h_(s,e)&&(nt(s.prev,s,e.prev)||nt(s,e.prev,e))||kr(s,e)&&nt(s.prev,s,s.next)>0&&nt(e.prev,e,e.next)>0)}function nt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function kr(s,e){return s.x===e.x&&s.y===e.y}function Lh(s,e,t,n){const i=pr(nt(s,e,t)),r=pr(nt(s,e,n)),o=pr(nt(t,n,s)),a=pr(nt(t,n,e));return!!(i!==r&&o!==a||i===0&&fr(s,t,e)||r===0&&fr(s,n,e)||o===0&&fr(t,s,n)||a===0&&fr(t,e,n))}function fr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function pr(s){return s>0?1:s<0?-1:0}function l_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Lh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ls(s,e){return nt(s.prev,s,s.next)<0?nt(s,e,s.next)>=0&&nt(s,s.prev,e)>=0:nt(s,e,s.prev)<0||nt(s,s.next,e)<0}function h_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ih(s,e){const t=new ca(s.i,s.x,s.y),n=new ca(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cl(s,e,t,n){const i=new ca(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Is(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ca(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function u_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ki{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ki.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];ll(e),hl(n,e);let o=e.length;t.forEach(ll);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,hl(n,t[l]);const a=Z0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ll(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function hl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Sa extends Gt{constructor(e=new Sr([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new vt(i,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:d_;let v,S=!1,M,w,T,L;f&&(v=f.getSpacedPoints(h),S=!0,u=!1,M=f.computeFrenetFrames(h,!1),w=new B,T=new B,L=new B),u||(g=0,p=0,m=0,_=0);const y=a.extractPoints(c);let b=y.shape;const U=y.holes;if(!Ki.isClockWise(b)){b=b.reverse();for(let re=0,Q=U.length;re<Q;re++){const se=U[re];Ki.isClockWise(se)&&(U[re]=se.reverse())}}const C=Ki.triangulateShape(b,U),I=b;for(let re=0,Q=U.length;re<Q;re++){const se=U[re];b=b.concat(se)}function D(re,Q,se){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(Q,se)}const F=b.length,V=C.length;function k(re,Q,se){let ye,fe,Pe;const Le=re.x-Q.x,Re=re.y-Q.y,Be=se.x-re.x,Ye=se.y-re.y,P=Le*Le+Re*Re,A=Le*Ye-Re*Be;if(Math.abs(A)>Number.EPSILON){const j=Math.sqrt(P),oe=Math.sqrt(Be*Be+Ye*Ye),ae=Q.x-Re/j,me=Q.y+Le/j,N=se.x-Ye/oe,ne=se.y+Be/oe,q=((N-ae)*Ye-(ne-me)*Be)/(Le*Ye-Re*Be);ye=ae+Le*q-re.x,fe=me+Re*q-re.y;const _e=ye*ye+fe*fe;if(_e<=2)return new de(ye,fe);Pe=Math.sqrt(_e/2)}else{let j=!1;Le>Number.EPSILON?Be>Number.EPSILON&&(j=!0):Le<-Number.EPSILON?Be<-Number.EPSILON&&(j=!0):Math.sign(Re)===Math.sign(Ye)&&(j=!0),j?(ye=-Re,fe=Le,Pe=Math.sqrt(P)):(ye=Le,fe=Re,Pe=Math.sqrt(P/2))}return new de(ye/Pe,fe/Pe)}const X=[];for(let re=0,Q=I.length,se=Q-1,ye=re+1;re<Q;re++,se++,ye++)se===Q&&(se=0),ye===Q&&(ye=0),X[re]=k(I[re],I[se],I[ye]);const ee=[];let le,J=X.concat();for(let re=0,Q=U.length;re<Q;re++){const se=U[re];le=[];for(let ye=0,fe=se.length,Pe=fe-1,Le=ye+1;ye<fe;ye++,Pe++,Le++)Pe===fe&&(Pe=0),Le===fe&&(Le=0),le[ye]=k(se[ye],se[Pe],se[Le]);ee.push(le),J=J.concat(le)}for(let re=0;re<g;re++){const Q=re/g,se=p*Math.cos(Q*Math.PI/2),ye=m*Math.sin(Q*Math.PI/2)+_;for(let fe=0,Pe=I.length;fe<Pe;fe++){const Le=D(I[fe],X[fe],ye);O(Le.x,Le.y,-se)}for(let fe=0,Pe=U.length;fe<Pe;fe++){const Le=U[fe];le=ee[fe];for(let Re=0,Be=Le.length;Re<Be;Re++){const Ye=D(Le[Re],le[Re],ye);O(Ye.x,Ye.y,-se)}}}const Y=m+_;for(let re=0;re<F;re++){const Q=u?D(b[re],J[re],Y):b[re];S?(T.copy(M.normals[0]).multiplyScalar(Q.x),w.copy(M.binormals[0]).multiplyScalar(Q.y),L.copy(v[0]).add(T).add(w),O(L.x,L.y,L.z)):O(Q.x,Q.y,0)}for(let re=1;re<=h;re++)for(let Q=0;Q<F;Q++){const se=u?D(b[Q],J[Q],Y):b[Q];S?(T.copy(M.normals[re]).multiplyScalar(se.x),w.copy(M.binormals[re]).multiplyScalar(se.y),L.copy(v[re]).add(T).add(w),O(L.x,L.y,L.z)):O(se.x,se.y,d/h*re)}for(let re=g-1;re>=0;re--){const Q=re/g,se=p*Math.cos(Q*Math.PI/2),ye=m*Math.sin(Q*Math.PI/2)+_;for(let fe=0,Pe=I.length;fe<Pe;fe++){const Le=D(I[fe],X[fe],ye);O(Le.x,Le.y,d+se)}for(let fe=0,Pe=U.length;fe<Pe;fe++){const Le=U[fe];le=ee[fe];for(let Re=0,Be=Le.length;Re<Be;Re++){const Ye=D(Le[Re],le[Re],ye);S?O(Ye.x,Ye.y+v[h-1].y,v[h-1].x+se):O(Ye.x,Ye.y,d+se)}}}ie(),ue();function ie(){const re=i.length/3;if(u){let Q=0,se=F*Q;for(let ye=0;ye<V;ye++){const fe=C[ye];Ie(fe[2]+se,fe[1]+se,fe[0]+se)}Q=h+g*2,se=F*Q;for(let ye=0;ye<V;ye++){const fe=C[ye];Ie(fe[0]+se,fe[1]+se,fe[2]+se)}}else{for(let Q=0;Q<V;Q++){const se=C[Q];Ie(se[2],se[1],se[0])}for(let Q=0;Q<V;Q++){const se=C[Q];Ie(se[0]+F*h,se[1]+F*h,se[2]+F*h)}}n.addGroup(re,i.length/3-re,0)}function ue(){const re=i.length/3;let Q=0;pe(I,Q),Q+=I.length;for(let se=0,ye=U.length;se<ye;se++){const fe=U[se];pe(fe,Q),Q+=fe.length}n.addGroup(re,i.length/3-re,1)}function pe(re,Q){let se=re.length;for(;--se>=0;){const ye=se;let fe=se-1;fe<0&&(fe=re.length-1);for(let Pe=0,Le=h+g*2;Pe<Le;Pe++){const Re=F*Pe,Be=F*(Pe+1),Ye=Q+ye+Re,P=Q+fe+Re,A=Q+fe+Be,j=Q+ye+Be;De(Ye,P,A,j)}}}function O(re,Q,se){l.push(re),l.push(Q),l.push(se)}function Ie(re,Q,se){he(re),he(Q),he(se);const ye=i.length/3,fe=x.generateTopUV(n,i,ye-3,ye-2,ye-1);we(fe[0]),we(fe[1]),we(fe[2])}function De(re,Q,se,ye){he(re),he(Q),he(ye),he(Q),he(se),he(ye);const fe=i.length/3,Pe=x.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);we(Pe[0]),we(Pe[1]),we(Pe[3]),we(Pe[1]),we(Pe[2]),we(Pe[3])}function he(re){i.push(l[re*3+0]),i.push(l[re*3+1]),i.push(l[re*3+2])}function we(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return f_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ch[i.type]().fromJSON(i)),new Sa(n,e.options)}}const d_={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new de(r,o),new de(a,l),new de(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],p=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-d),new de(u,1-m),new de(_,1-f)]:[new de(a,1-l),new de(h,1-d),new de(p,1-m),new de(g,1-f)]}};function f_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ea extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dh extends sn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p_ extends sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Rr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class m_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}}const Uh=new m_;class _i{constructor(e){this.manager=e!==void 0?e:Uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const En={};class g_ extends Error{constructor(e,t){super(e),this.response=t}}class Hr extends _i{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Rr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:i});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=En[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=u?parseInt(u):0,m=p!==0;let _=0;const g=new ReadableStream({start(f){x();function x(){d.read().then(({done:v,value:S})=>{if(v)f.close();else{_+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let w=0,T=h.length;w<T;w++){const L=h[w];L.onProgress&&L.onProgress(M)}f.enqueue(S),x()}})}}});return new Response(g)}else throw new g_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Rr.add(e,c);const h=En[e];delete En[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=En[e];if(h===void 0)throw this.manager.itemError(e),c;delete En[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class __ extends _i{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Rr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Cs("img");function l(){h(),Rr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class v_ extends _i{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new U0,a=new Hr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:zt,o.wrapT=c.wrapT!==void 0?c.wrapT:zt,o.magFilter=c.magFilter!==void 0?c.magFilter:St,o.minFilter=c.minFilter!==void 0?c.minFilter:St,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ns),c.mipmapCount===1&&(o.minFilter=St),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,i),o}}class Nh extends _i{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,o=new __(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Fh extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Oo=new rt,ul=new B,dl=new B;class x_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(ul),dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dl),t.updateMatrixWorld(),Oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y_ extends x_{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M_ extends Fh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new y_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class S_ extends Fh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class E_{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w_{constructor(){this.type="ShapePath",this.color=new Oe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new oa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const x=[];for(let v=0,S=f.length;v<S;v++){const M=f[v],w=new Sr;w.curves=M.curves,x.push(w)}return x}function n(f,x){const v=x.length;let S=!1;for(let M=v-1,w=0;w<v;M=w++){let T=x[M],L=x[w],y=L.x-T.x,b=L.y-T.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(T=x[w],y=-y,L=x[M],b=-b),f.y<T.y||f.y>L.y)continue;if(f.y===T.y){if(f.x===T.x)return!0}else{const U=b*(f.x-T.x)-y*(f.y-T.y);if(U===0)return!0;if(U<0)continue;S=!S}}else{if(f.y!==T.y)continue;if(L.x<=f.x&&f.x<=T.x||T.x<=f.x&&f.x<=L.x)return!0}}return S}const i=Ki.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Sr,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const d=[],u=[];let p=[],m=0,_;u[m]=void 0,p[m]=[];for(let f=0,x=r.length;f<x;f++)a=r[f],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!h&&u[m]&&m++,u[m]={s:new Sr,p:_},u[m].s.curves=a.curves,h&&m++,p[m]=[]):p[m].push({h:a,p:_[0]});if(!u[0])return t(r);if(u.length>1){let f=!1,x=0;for(let v=0,S=u.length;v<S;v++)d[v]=[];for(let v=0,S=u.length;v<S;v++){const M=p[v];for(let w=0;w<M.length;w++){const T=M[w];let L=!0;for(let y=0;y<u.length;y++)n(T.p,u[y].p)&&(v!==y&&x++,L?(L=!1,d[y].push(T)):f=!0);L&&d[v].push(T)}}x>0&&f===!1&&(p=d)}let g;for(let f=0,x=u.length;f<x;f++){l=u[f].s,c.push(l),g=p[f];for(let v=0,S=g.length;v<S;v++)l.holes.push(g[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);const pl={type:"change"},Bo={type:"start"},ml={type:"end"};class b_ extends Wn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Be),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pl),n.update(),r=i.NONE},this.update=function(){const N=new B,ne=new di().setFromUnitVectors(e.up,new B(0,1,0)),q=ne.clone().invert(),_e=new B,Ee=new di,Te=2*Math.PI;return function(){const be=n.object.position;N.copy(be).sub(n.target),N.applyQuaternion(ne),a.setFromVector3(N),n.autoRotate&&r===i.NONE&&y(T()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ne=n.minAzimuthAngle,Ve=n.maxAzimuthAngle;return isFinite(Ne)&&isFinite(Ve)&&(Ne<-Math.PI?Ne+=Te:Ne>Math.PI&&(Ne-=Te),Ve<-Math.PI?Ve+=Te:Ve>Math.PI&&(Ve-=Te),Ne<=Ve?a.theta=Math.max(Ne,Math.min(Ve,a.theta)):a.theta=a.theta>(Ne+Ve)/2?Math.max(Ne,a.theta):Math.min(Ve,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),N.setFromSpherical(a),N.applyQuaternion(q),be.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||_e.distanceToSquared(n.object.position)>o||8*(1-Ee.dot(n.object.quaternion))>o?(n.dispatchEvent(pl),_e.copy(n.object.position),Ee.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",se),n.domElement.removeEventListener("pointercancel",fe),n.domElement.removeEventListener("wheel",Re),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Be),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new fl,l=new fl;let c=1;const h=new B;let d=!1;const u=new de,p=new de,m=new de,_=new de,g=new de,f=new de,x=new de,v=new de,S=new de,M=[],w={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function y(N){l.theta-=N}function b(N){l.phi-=N}const U=function(){const N=new B;return function(q,_e){N.setFromMatrixColumn(_e,0),N.multiplyScalar(-q),h.add(N)}}(),H=function(){const N=new B;return function(q,_e){n.screenSpacePanning===!0?N.setFromMatrixColumn(_e,1):(N.setFromMatrixColumn(_e,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(q),h.add(N)}}(),C=function(){const N=new B;return function(q,_e){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;N.copy(Te).sub(n.target);let ve=N.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),U(2*q*ve/Ee.clientHeight,n.object.matrix),H(2*_e*ve/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(q*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),H(_e*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(N){n.object.isPerspectiveCamera?c/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(N){n.object.isPerspectiveCamera?c*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(N){u.set(N.clientX,N.clientY)}function V(N){x.set(N.clientX,N.clientY)}function k(N){_.set(N.clientX,N.clientY)}function X(N){p.set(N.clientX,N.clientY),m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const ne=n.domElement;y(2*Math.PI*m.x/ne.clientHeight),b(2*Math.PI*m.y/ne.clientHeight),u.copy(p),n.update()}function ee(N){v.set(N.clientX,N.clientY),S.subVectors(v,x),S.y>0?I(L()):S.y<0&&D(L()),x.copy(v),n.update()}function le(N){g.set(N.clientX,N.clientY),f.subVectors(g,_).multiplyScalar(n.panSpeed),C(f.x,f.y),_.copy(g),n.update()}function J(N){N.deltaY<0?D(L()):N.deltaY>0&&I(L()),n.update()}function Y(N){let ne=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),ne=!0;break}ne&&(N.preventDefault(),n.update())}function ie(){if(M.length===1)u.set(M[0].pageX,M[0].pageY);else{const N=.5*(M[0].pageX+M[1].pageX),ne=.5*(M[0].pageY+M[1].pageY);u.set(N,ne)}}function ue(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const N=.5*(M[0].pageX+M[1].pageX),ne=.5*(M[0].pageY+M[1].pageY);_.set(N,ne)}}function pe(){const N=M[0].pageX-M[1].pageX,ne=M[0].pageY-M[1].pageY,q=Math.sqrt(N*N+ne*ne);x.set(0,q)}function O(){n.enableZoom&&pe(),n.enablePan&&ue()}function Ie(){n.enableZoom&&pe(),n.enableRotate&&ie()}function De(N){if(M.length==1)p.set(N.pageX,N.pageY);else{const q=me(N),_e=.5*(N.pageX+q.x),Ee=.5*(N.pageY+q.y);p.set(_e,Ee)}m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const ne=n.domElement;y(2*Math.PI*m.x/ne.clientHeight),b(2*Math.PI*m.y/ne.clientHeight),u.copy(p)}function he(N){if(M.length===1)g.set(N.pageX,N.pageY);else{const ne=me(N),q=.5*(N.pageX+ne.x),_e=.5*(N.pageY+ne.y);g.set(q,_e)}f.subVectors(g,_).multiplyScalar(n.panSpeed),C(f.x,f.y),_.copy(g)}function we(N){const ne=me(N),q=N.pageX-ne.x,_e=N.pageY-ne.y,Ee=Math.sqrt(q*q+_e*_e);v.set(0,Ee),S.set(0,Math.pow(v.y/x.y,n.zoomSpeed)),I(S.y),x.copy(v)}function re(N){n.enableZoom&&we(N),n.enablePan&&he(N)}function Q(N){n.enableZoom&&we(N),n.enableRotate&&De(N)}function se(N){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",ye),n.domElement.addEventListener("pointerup",fe)),j(N),N.pointerType==="touch"?Ye(N):Pe(N))}function ye(N){n.enabled!==!1&&(N.pointerType==="touch"?P(N):Le(N))}function fe(N){oe(N),M.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",fe)),n.dispatchEvent(ml),r=i.NONE}function Pe(N){let ne;switch(N.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case xi.DOLLY:if(n.enableZoom===!1)return;V(N),r=i.DOLLY;break;case xi.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;k(N),r=i.PAN}else{if(n.enableRotate===!1)return;F(N),r=i.ROTATE}break;case xi.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;F(N),r=i.ROTATE}else{if(n.enablePan===!1)return;k(N),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Bo)}function Le(N){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;X(N);break;case i.DOLLY:if(n.enableZoom===!1)return;ee(N);break;case i.PAN:if(n.enablePan===!1)return;le(N);break}}function Re(N){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(N.preventDefault(),n.dispatchEvent(Bo),J(N),n.dispatchEvent(ml))}function Be(N){n.enabled===!1||n.enablePan===!1||Y(N)}function Ye(N){switch(ae(N),M.length){case 1:switch(n.touches.ONE){case yi.ROTATE:if(n.enableRotate===!1)return;ie(),r=i.TOUCH_ROTATE;break;case yi.PAN:if(n.enablePan===!1)return;ue(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(),r=i.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Bo)}function P(N){switch(ae(N),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(N),n.update();break;default:r=i.NONE}}function A(N){n.enabled!==!1&&N.preventDefault()}function j(N){M.push(N)}function oe(N){delete w[N.pointerId];for(let ne=0;ne<M.length;ne++)if(M[ne].pointerId==N.pointerId){M.splice(ne,1);return}}function ae(N){let ne=w[N.pointerId];ne===void 0&&(ne=new de,w[N.pointerId]=ne),ne.set(N.pageX,N.pageY)}function me(N){const ne=N.pointerId===M[0].pointerId?M[1]:M[0];return w[ne.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",se),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",Re,{passive:!1}),this.update()}}const Oi=new Fs(0,0,0,"YXZ"),Bi=new B,T_={type:"change"},A_={type:"lock"},R_={type:"unlock"},gl=Math.PI/2;class C_ extends Wn{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=P_.bind(this),this._onPointerlockChange=L_.bind(this),this._onPointerlockError=I_.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;Bi.setFromMatrixColumn(t.matrix,0),Bi.crossVectors(t.up,Bi),t.position.addScaledVector(Bi,e)}moveRight(e){const t=this.camera;Bi.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Bi,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function P_(s){if(this.isLocked===!1)return;const e=s.movementX||s.mozMovementX||s.webkitMovementX||0,t=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.camera;Oi.setFromQuaternion(n.quaternion),Oi.y-=e*.002*this.pointerSpeed,Oi.x-=t*.002*this.pointerSpeed,Oi.x=Math.max(gl-this.maxPolarAngle,Math.min(gl-this.minPolarAngle,Oi.x)),n.quaternion.setFromEuler(Oi),this.dispatchEvent(T_)}function L_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(A_),this.isLocked=!0):(this.dispatchEvent(R_),this.isLocked=!1)}function I_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class D_ extends _i{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?E_.extractUrlBase(e):this.path,a=new Hr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let i={};const r=/\s+/,o={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const h=c.indexOf(" ");let d=h>=0?c.substring(0,h):c;d=d.toLowerCase();let u=h>=0?c.substring(h+1):"";if(u=u.trim(),d==="newmtl")i={name:u},o[u]=i;else if(d==="ka"||d==="kd"||d==="ks"||d==="ke"){const p=u.split(r,3);i[d]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else i[d]=u}const a=new U_(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class U_{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Un,this.wrap=this.options.wrap!==void 0?this.options.wrap:ts}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const i=e[n],r={};t[n]=r;for(const o in i){let a=!0,l=i[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(r[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function r(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(i[a])return;const c=t.getTextureParams(l,i),h=t.loadTexture(r(t.baseUrl,c.url));h.repeat.copy(c.scale),h.offset.copy(c.offset),h.wrapS=t.wrap,h.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(h.colorSpace=ke),i[a]=h}for(const a in n){const l=n[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":i.color=new Oe().fromArray(l).convertSRGBToLinear();break;case"ks":i.specular=new Oe().fromArray(l).convertSRGBToLinear();break;case"ke":i.emissive=new Oe().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),i.transparent=!0;break;case"ns":i.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(i.opacity=c,i.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(i.opacity=1-c,i.transparent=!0);break}}return this.materials[e]=new Dh(i),this.materials[e]}getTextureParams(e,t){const n={scale:new de(1,1),offset:new de(0,0)},i=e.split(/\s+/);let r;return r=i.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(i[r+1]),i.splice(r,2)),r=i.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),r=i.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),n.url=i.join(" ").trim(),n}loadTexture(e,t,n,i,r){const o=this.manager!==void 0?this.manager:Uh;let a=o.getHandler(e);a===null&&(a=new Nh(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(e,n,i,r);return t!==void 0&&(l.mapping=t),l}}const N_=/^[og]\s*(.+)?/,F_=/^mtllib /,O_=/^usemtl /,B_=/^usemap /,_l=/\s+/,vl=new B,zo=new B,xl=new B,yl=new B,qt=new B,mr=new Oe;function z_(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;vl.fromArray(i,e),zo.fromArray(i,t),xl.fromArray(i,n),qt.subVectors(xl,zo),yl.subVectors(vl,zo),qt.cross(yl),qt.normalize(),r.push(qt.x,qt.y,qt.z),r.push(qt.x,qt.y,qt.z),r.push(qt.x,qt.y,qt.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,l,c){const h=this.vertices.length;let d=this.parseVertexIndex(e,h),u=this.parseVertexIndex(t,h),p=this.parseVertexIndex(n,h);if(this.addVertex(d,u,p),this.addColor(d,u,p),a!==void 0&&a!==""){const m=this.normals.length;d=this.parseNormalIndex(a,m),u=this.parseNormalIndex(l,m),p=this.parseNormalIndex(c,m),this.addNormal(d,u,p)}else this.addFaceNormal(d,u,p);if(i!==void 0&&i!==""){const m=this.uvs.length;d=this.parseUVIndex(i,m),u=this.parseUVIndex(r,m),p=this.parseUVIndex(o,m),this.addUV(d,u,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class k_ extends _i{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new Hr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new z_;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const d=c.split(_l);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(mr.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(mr.r,mr.g,mr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(h==="f"){const u=c.slice(1).trim().split(_l),p=[];for(let _=0,g=u.length;_<g;_++){const f=u[_];if(f.length>0){const x=f.split("/");p.push(x)}}const m=p[0];for(let _=1,g=p.length-1;_<g;_++){const f=p[_],x=p[_+1];t.addFace(m[0],f[0],x[0],m[1],f[1],x[1],m[2],f[2],x[2])}}else if(h==="l"){const d=c.substring(1).trim().split(" ");let u=[];const p=[];if(c.indexOf("/")===-1)u=d;else for(let m=0,_=d.length;m<_;m++){const g=d[m].split("/");g[0]!==""&&u.push(g[0]),g[1]!==""&&p.push(g[1])}t.addLineGeometry(u,p)}else if(h==="p"){const u=c.slice(1).trim().split(" ");t.addPointGeometry(u)}else if((i=N_.exec(c))!==null){const d=(" "+i[0].slice(1).trim()).slice(1);t.startObject(d)}else if(O_.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(F_.test(c))t.materialLibraries.push(c.substring(7).trim());else if(B_.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const u=i[1].trim().toLowerCase();t.object.smooth=u!=="0"&&u!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Vi;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],h=c.geometry,d=c.materials,u=h.type==="Line",p=h.type==="Points";let m=!1;if(h.vertices.length===0)continue;const _=new Gt;_.setAttribute("position",new vt(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new vt(h.normals,3)),h.colors.length>0&&(m=!0,_.setAttribute("color",new vt(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new vt(h.uvs,2));const g=[];for(let x=0,v=d.length;x<v;x++){const S=d[x],M=S.name+"_"+S.smooth+"_"+m;let w=t.materials[M];if(this.materials!==null){if(w=this.materials.create(S.name),u&&w&&!(w instanceof bs)){const T=new bs;sn.prototype.copy.call(T,w),T.color.copy(w.color),w=T}else if(p&&w&&!(w instanceof Es)){const T=new Es({size:10,sizeAttenuation:!1});sn.prototype.copy.call(T,w),T.color.copy(w.color),T.map=w.map,w=T}}w===void 0&&(u?w=new bs:p?w=new Es({size:1,sizeAttenuation:!1}):w=new Dh,w.name=S.name,w.flatShading=!S.smooth,w.vertexColors=m,t.materials[M]=w),g.push(w)}let f;if(g.length>1){for(let x=0,v=d.length;x<v;x++){const S=d[x];_.addGroup(S.groupStart,S.groupCount,x)}u?f=new sa(_,g):p?f=new Do(_,g):f=new st(_,g)}else u?f=new sa(_,g[0]):p?f=new Do(_,g[0]):f=new st(_,g[0]);f.name=c.name,r.add(f)}else if(t.vertices.length>0){const a=new Es({size:1,sizeAttenuation:!1}),l=new Gt;l.setAttribute("position",new vt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new vt(t.colors,3)),a.vertexColors=!0);const c=new Do(l,a);r.add(c)}return r}}class tn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new E);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new E);const n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new tn);const n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],p=n[7],m=n[8],_=i[0],g=i[1],f=i[2],x=i[3],v=i[4],S=i[5],M=i[6],w=i[7],T=i[8];return r[0]=o*_+a*x+l*M,r[1]=o*g+a*v+l*w,r[2]=o*f+a*S+l*T,r[3]=c*_+h*x+d*M,r[4]=c*g+h*v+d*w,r[5]=c*f+h*S+d*T,r[6]=u*_+p*x+m*M,r[7]=u*g+p*v+m*w,r[8]=u*f+p*S+m*T,t}scale(e,t){t===void 0&&(t=new tn);const n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new E);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=e.x,r[3+4*1]=e.y,r[3+4*2]=e.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const p=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*p;while(--h)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new tn);const t=3,n=6,i=H_;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,d=t*l,u=n*a,p=n*l,m=i*l,_=r*o,g=r*a,f=r*l,x=this.elements;return x[3*0+0]=1-(u+m),x[3*0+1]=h-f,x[3*0+2]=d+g,x[3*1+0]=h+f,x[3*1+1]=1-(c+m),x[3*1+2]=p-_,x[3*2+0]=d-g,x[3*2+1]=p+_,x[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new tn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const H_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new E);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new E(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new E(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new tn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new E);const t=this.x,n=this.y,i=this.z;let r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new E);const n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new E),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new E),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new E),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=G_,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=V_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Ml),Ml.almostEquals(e,t)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const G_=new E,V_=new E,Ml=new E;class Vt{constructor(e){e===void 0&&(e={}),this.lowerBound=new E,this.upperBound=new E,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Sl),c=Sl),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Vt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=El,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=El,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(m<0||p>m)}}const Sl=new E,El=[new E,new E,new E,new E,new E,new E,new E,new E];class wl{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Oh{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}}class ut{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new E),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=W_,i=X_;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new ut);const n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-r*l,t.y=i*h+o*l+r*a-n*c,t.z=r*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new ut);const t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new ut),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new E);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,p=-o*n-a*i-l*r;return t.x=h*c+p*-o+d*-l-u*-a,t.y=d*c+p*-a+u*-o-h*-l,t.z=u*c+p*-l+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,p=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*p),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new ut(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new ut);const i=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,d=e.w,u,p,m,_,g;return p=i*l+r*c+o*h+a*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),m=Math.sin(u),_=Math.sin((1-t)*u)/m,g=Math.sin(t*u)/m):(_=1-t,g=t),n.x=_*i+g*l,n.y=_*r+g*c,n.z=_*o+g*h,n.w=_*a+g*d,n}integrate(e,t,n,i){i===void 0&&(i=new ut);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}}const W_=new E,X_=new E,q_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Se{constructor(e){e===void 0&&(e={}),this.id=Se.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Se.idCounter=0;Se.types=q_;class Ke{constructor(e){e===void 0&&(e={}),this.position=new E,this.quaternion=new ut,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ke.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ke.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),n.vsub(e,i),t.conjugate(bl),bl.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new E),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new E),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const bl=new ut;class $i extends Se{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:Se.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new E;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];$i.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){const r=new E,o=new E;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){const h=new E;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),r.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=m)}const p=[];for(let m=0;m<n.faces[d].length;m++){const _=n.vertices[n.faces[d][m]],g=new E;g.copy(_),r.vmult(g,g),i.vadd(g,g),p.push(g)}d>=0&&this.clipFaceAgainstHull(o,e,t,p,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){const c=new E,h=new E,d=new E,u=new E,p=new E,m=new E;let _=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let f=0;f!==g.uniqueAxes.length;f++){n.vmult(g.uniqueAxes[f],c);const x=g.testSepAxis(c,e,t,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}else{const f=a?a.length:g.faces.length;for(let x=0;x<f;x++){const v=a?a[x]:x;c.copy(g.faceNormals[v]),n.vmult(c,c);const S=g.testSepAxis(c,e,t,n,i,r);if(S===!1)return!1;S<_&&(_=S,o.copy(c))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){r.vmult(e.uniqueAxes[f],h);const x=g.testSepAxis(h,e,t,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(h))}else{const f=l?l.length:e.faces.length;for(let x=0;x<f;x++){const v=l?l[x]:x;h.copy(e.faceNormals[v]),r.vmult(h,h);const S=g.testSepAxis(h,e,t,n,i,r);if(S===!1)return!1;S<_&&(_=S,o.copy(h))}}for(let f=0;f!==g.uniqueEdges.length;f++){n.vmult(g.uniqueEdges[f],u);for(let x=0;x!==e.uniqueEdges.length;x++)if(r.vmult(e.uniqueEdges[x],p),u.cross(p,m),!m.almostZero()){m.normalize();const v=g.testSepAxis(m,e,t,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(m))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){const a=this;$i.project(a,e,n,i,ko),$i.project(t,e,r,o,Ho);const l=ko[0],c=ko[1],h=Ho[0],d=Ho[1];if(l<d||h<c)return!1;const u=l-d,p=h-c;return u<p?u:p}calculateLocalInertia(e,t){const n=new E,i=new E;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){const l=new E,c=new E,h=new E,d=new E,u=new E,p=new E,m=new E,_=new E,g=this,f=[],x=i,v=f;let S=-1,M=Number.MAX_VALUE;for(let b=0;b<g.faces.length;b++){l.copy(g.faceNormals[b]),n.vmult(l,l);const U=l.dot(e);U<M&&(M=U,S=b)}if(S<0)return;const w=g.faces[S];w.connectedFaces=[];for(let b=0;b<g.faces.length;b++)for(let U=0;U<g.faces[b].length;U++)w.indexOf(g.faces[b][U])!==-1&&b!==S&&w.connectedFaces.indexOf(b)===-1&&w.connectedFaces.push(b);const T=w.length;for(let b=0;b<T;b++){const U=g.vertices[w[b]],H=g.vertices[w[(b+1)%T]];U.vsub(H,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[S]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(U),n.vmult(p,p),t.vadd(p,p);const C=w.connectedFaces[b];m.copy(this.faceNormals[C]);const I=this.getPlaneConstantOfFace(C);_.copy(m),n.vmult(_,_);const D=I-_.dot(t);for(this.clipFaceAgainstPlane(x,v,_,D);x.length;)x.shift();for(;v.length;)x.push(v.shift())}m.copy(this.faceNormals[S]);const L=this.getPlaneConstantOfFace(S);_.copy(m),n.vmult(_,_);const y=L-_.dot(t);for(let b=0;b<x.length;b++){let U=_.dot(x[b])+y;if(U<=r&&(console.log(`clamped: depth=${U} to minDist=${r}`),U=r),U<=o){const H=x[b];if(U<=1e-6){const C={point:H,normal:_,depth:U};a.push(C)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,r<0)if(o<0){const d=new E;d.copy(c),t.push(d)}else{const d=new E;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){const d=new E;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=this.vertices;let o,a,l,c,h,d,u=new E;for(let p=0;p<r.length;p++){u.copy(r[p]),t.vmult(u,u),e.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new E);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){const o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){const o=i[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new E;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=t[n[a][0]],h=new E;e.vsub(c,h);const d=l.dot(h),u=new E;o.vsub(c,u);const p=l.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return r?1:-1}static project(e,t,n,i,r){const o=e.vertices.length,a=j_;let l=0,c=0;const h=Y_,d=e.vertices;h.setZero(),Ke.vectorToLocalFrame(n,i,t,a),Ke.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let p=1;p<o;p++){const m=d[p].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const p=c;c=l,l=p}r[0]=l,r[1]=c}}const ko=[],Ho=[];new E;const j_=new E,Y_=new E;class cs extends Se{constructor(e){super({type:Se.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=E,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new $i({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new E),cs.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Gn.set(r[o][0],r[o][1],r[o][2]),t.vmult(Gn,Gn),e.vadd(Gn,Gn),n(Gn.x,Gn.y,Gn.z)}calculateWorldAABB(e,t,n,i){const r=this.halfExtents;cn[0].set(r.x,r.y,r.z),cn[1].set(-r.x,r.y,r.z),cn[2].set(-r.x,-r.y,r.z),cn[3].set(-r.x,-r.y,-r.z),cn[4].set(r.x,-r.y,-r.z),cn[5].set(r.x,r.y,-r.z),cn[6].set(-r.x,r.y,-r.z),cn[7].set(r.x,-r.y,r.z);const o=cn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=cn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Gn=new E,cn=[new E,new E,new E,new E,new E,new E,new E,new E],wa={DYNAMIC:1,STATIC:2,KINEMATIC:4},ba={AWAKE:0,SLEEPY:1,SLEEPING:2};class xe extends Oh{constructor(e){e===void 0&&(e={}),super(),this.id=xe.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new E,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new E,this.force=new E;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?xe.STATIC:xe.DYNAMIC,typeof e.type==typeof xe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=xe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new ut,this.initQuaternion=new ut,this.previousQuaternion=new ut,this.interpolatedQuaternion=new ut,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new E,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new tn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new tn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new E(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new E(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Vt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=xe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===xe.SLEEPING&&this.dispatchEvent(xe.wakeupEvent)}sleep(){this.sleepState=xe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===xe.AWAKE&&n<i?(this.sleepState=xe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(xe.sleepyEvent)):t===xe.SLEEPY&&n>i?this.wakeUp():t===xe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(xe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===xe.SLEEPING||this.type===xe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new E),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new E),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new E,r=new ut;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let r=0;r!==n;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=Z_,o=K_,a=this.quaternion,l=this.aabb,c=$_;for(let h=0;h!==i;h++){const d=e[h];a.vmult(t[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=J_,i=Q_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new E),this.type!==xe.DYNAMIC)return;this.sleepState===xe.SLEEPING&&this.wakeUp();const n=tv;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new E),this.type!==xe.DYNAMIC)return;const n=nv,i=iv;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===xe.DYNAMIC&&(this.sleepState===xe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new E),this.type!==xe.DYNAMIC)return;this.sleepState===xe.SLEEPING&&this.wakeUp();const n=t,i=sv;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=rv;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new E),this.type!==xe.DYNAMIC)return;const n=ov,i=av;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=cv;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),cs.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new E;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===xe.DYNAMIC||this.type===xe.KINEMATIC)||this.sleepState===xe.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*e;i.x+=a.x*p*u.x,i.y+=a.y*p*u.y,i.z+=a.z*p*u.z;const m=d.elements,_=this.angularFactor,g=l.x*_.x,f=l.y*_.y,x=l.z*_.z;r.x+=e*(m[0]*g+m[1]*f+m[2]*x),r.y+=e*(m[3]*g+m[4]*f+m[5]*x),r.z+=e*(m[6]*g+m[7]*f+m[8]*x),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}xe.idCounter=0;xe.COLLIDE_EVENT_NAME="collide";xe.DYNAMIC=wa.DYNAMIC;xe.STATIC=wa.STATIC;xe.KINEMATIC=wa.KINEMATIC;xe.AWAKE=ba.AWAKE;xe.SLEEPY=ba.SLEEPY;xe.SLEEPING=ba.SLEEPING;xe.wakeupEvent={type:"wakeup"};xe.sleepyEvent={type:"sleepy"};xe.sleepEvent={type:"sleep"};const Z_=new E,K_=new ut,$_=new Vt,J_=new tn,Q_=new tn,ev=new tn,tv=new E,nv=new E,iv=new E,sv=new E,rv=new E,ov=new E,av=new E,cv=new E;class lv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&xe.STATIC||e.sleepState===xe.SLEEPING)&&(t.type&xe.STATIC||t.sleepState===xe.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const r=hv;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=uv,i=dv,r=fv,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new E;e.position.vsub(t.position,n);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const hv=new E;new E;new ut;new E;const uv={keys:[]},dv=[],fv=[];new E;new E;new E;class pv extends lv{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}}class Cr{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let Bh,zh,kh,Hh,Gh,Vh,Wh;const Ta={CLOSEST:1,ANY:2,ALL:4};Bh=Se.types.SPHERE;zh=Se.types.PLANE;kh=Se.types.BOX;Hh=Se.types.CYLINDER;Gh=Se.types.CONVEXPOLYHEDRON;Vh=Se.types.HEIGHTFIELD;Wh=Se.types.TRIMESH;class ht{get[Bh](){return this._intersectSphere}get[zh](){return this._intersectPlane}get[kh](){return this._intersectBox}get[Hh](){return this._intersectConvex}get[Gh](){return this._intersectConvex}get[Vh](){return this._intersectHeightfield}get[Wh](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new E),t===void 0&&(t=new E),this.from=e.clone(),this.to=t.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ht.ANY,this.result=new Cr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||ht.ANY,this.result=t.result||new Cr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Tl),Go.length=0,e.broadphase.aabbQuery(e,Tl,Go),this.intersectBodies(Go),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=mv,r=gv;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const r=this.from;if(Pv(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);t.vmult(c,c);const h=new E;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const m=new E,_=new E,g=new E;o.vsub(n,m);const f=-c.dot(m)/p;l.scale(f,_),o.vadd(_,g),this.reportIntersection(c,g,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;const o=_v;o.from.copy(this.from),o.to.copy(this.to),Ke.pointToLocalFrame(n,t,o.from,o.from),Ke.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=vv;let l,c,h,d;l=c=0,h=d=e.data.length-1;const u=new Vt;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=l;p<h;p++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,m,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(p,m,!1),Ke.pointToWorldFrame(n,t,e.pillarOffset,gr),this._intersectConvex(e.pillarConvex,t,gr,i,r,Al),this.result.shouldStop)return;e.getConvexTrianglePillar(p,m,!0),Ke.pointToWorldFrame(n,t,e.pillarOffset,gr),this._intersectConvex(e.pillarConvex,t,gr,i,r,Al)}}}_intersectSphere(e,t,n,i,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,p=xv,m=yv;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,r,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),g=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,r,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){const a=Mv,l=Rl,c=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,m=this.from,_=this.to,g=m.distanceTo(_),f=c?c.length:h.length,x=this.result;for(let v=0;!x.shouldStop&&v<f;v++){const S=c?c[v]:v,M=h[S],w=u[S],T=t,L=n;l.copy(d[M[0]]),T.vmult(l,l),l.vadd(L,l),l.vsub(m,l),T.vmult(w,a);const y=p.dot(a);if(Math.abs(y)<this.precision)continue;const b=a.dot(l)/y;if(!(b<0)){p.scale(b,It),It.vadd(m,It),Jt.copy(d[M[0]]),T.vmult(Jt,Jt),L.vadd(Jt,Jt);for(let U=1;!x.shouldStop&&U<M.length-1;U++){ln.copy(d[M[U]]),hn.copy(d[M[U+1]]),T.vmult(ln,ln),T.vmult(hn,hn),L.vadd(ln,ln),L.vadd(hn,hn);const H=It.distanceTo(m);!(ht.pointInTriangle(It,Jt,ln,hn)||ht.pointInTriangle(It,ln,Jt,hn))||H>g||this.reportIntersection(a,It,r,i,S)}}}}_intersectTrimesh(e,t,n,i,r,o){const a=Sv,l=Rv,c=Cv,h=Rl,d=Ev,u=wv,p=bv,m=Av,_=Tv,g=e.indices;e.vertices;const f=this.from,x=this.to,v=this.direction;c.position.copy(n),c.quaternion.copy(t),Ke.vectorToLocalFrame(n,t,v,d),Ke.pointToLocalFrame(n,t,f,u),Ke.pointToLocalFrame(n,t,x,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();const S=u.distanceSquared(p);e.tree.rayQuery(this,c,l);for(let M=0,w=l.length;!this.result.shouldStop&&M!==w;M++){const T=l[M];e.getNormal(T,a),e.getVertex(g[T*3],Jt),Jt.vsub(u,h);const L=d.dot(a),y=a.dot(h)/L;if(y<0)continue;d.scale(y,It),It.vadd(u,It),e.getVertex(g[T*3+1],ln),e.getVertex(g[T*3+2],hn);const b=It.distanceSquared(u);!(ht.pointInTriangle(It,ln,Jt,hn)||ht.pointInTriangle(It,Jt,ln,hn))||b>S||(Ke.vectorToWorldFrame(t,a,_),Ke.pointToWorldFrame(n,t,It,m),this.reportIntersection(_,m,r,i,T))}l.length=0}reportIntersection(e,t,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case ht.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case ht.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case ht.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,ii),n.vsub(t,_s),e.vsub(t,Vo);const r=ii.dot(ii),o=ii.dot(_s),a=ii.dot(Vo),l=_s.dot(_s),c=_s.dot(Vo);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}ht.CLOSEST=Ta.CLOSEST;ht.ANY=Ta.ANY;ht.ALL=Ta.ALL;const Tl=new Vt,Go=[],_s=new E,Vo=new E,mv=new E,gv=new ut,It=new E,Jt=new E,ln=new E,hn=new E;new E;new Cr;const Al={faceList:[0]},gr=new E,_v=new ht,vv=[],xv=new E,yv=new E,Mv=new E;new E;new E;const Rl=new E,Sv=new E,Ev=new E,wv=new E,bv=new E,Tv=new E,Av=new E;new Vt;const Rv=[],Cv=new Ke,ii=new E,_r=new E;function Pv(s,e,t){t.vsub(s,ii);const n=ii.dot(e);return e.scale(n,_r),_r.vadd(s,_r),t.distanceTo(_r)}class Lv{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Cl{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Os{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Os.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Cl,this.jacobianElementB=new Cl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,Pl),a.scale(h,Ll),n.invInertiaWorldSolve.vmult(o,Il),i.invInertiaWorldSolve.vmult(l,Dl),e.multiplyVectors(Pl,Il)+t.multiplyVectors(Ll,Dl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,vr),c+=vr.dot(e.rotational),l.vmult(t.rotational,vr),c+=vr.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=Iv;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Os.idCounter=0;const Pl=new E,Ll=new E,Il=new E,Dl=new E,vr=new E,Iv=new E;class Dv extends Os{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(e){const t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=Uv,c=Nv,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,p=r.angularVelocity;r.force,r.torque;const m=Fv,_=this.jacobianElementA,g=this.jacobianElementB,f=this.ni;o.cross(f,l),a.cross(f,c),f.negate(_.spatial),l.negate(_.rotational),g.spatial.copy(f),g.rotational.copy(c),m.copy(r.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const x=f.dot(m),v=this.restitution+1,S=v*u.dot(f)-v*h.dot(f)+p.dot(c)-d.dot(l),M=this.computeGiMf();return-x*t-S*n-e*M}getImpactVelocityAlongNormal(){const e=Ov,t=Bv,n=zv,i=kv,r=Hv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const Uv=new E,Nv=new E,Fv=new E,Ov=new E,Bv=new E,zv=new E,kv=new E,Hv=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Ul extends Os{constructor(e,t,n){super(e,t,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=Gv,o=Vv,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const Gv=new E,Vv=new E;class Gr{constructor(e,t,n){n=Lv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Gr.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Gr.idCounter=0;class ls{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ls.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ls.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new ht;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Wv extends $i{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=i,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new E(-t*u(0),-n*.5,t*d(0))),c.push(0),o.push(new E(-e*u(0),n*.5,e*d(0))),h.push(1);for(let m=0;m<r;m++){const _=2*Math.PI/r*(m+1),g=2*Math.PI/r*(m+.5);m<r-1?(o.push(new E(-t*u(_),-n*.5,t*d(_))),c.push(2*m+2),o.push(new E(-e*u(_),n*.5,e*d(_))),h.push(2*m+3),l.push([2*m,2*m+1,2*m+3,2*m+2])):l.push([2*m,2*m+1,1,0]),(r%2===1||m<r/2)&&a.push(new E(-u(g),0,d(g)))}l.push(c),a.push(new E(0,1,0));const p=[];for(let m=0;m<h.length;m++)p.push(h[h.length-m-1]);l.push(p),super({vertices:o,faces:l,axes:a}),this.type=Se.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}}class Xv extends Se{constructor(){super({type:Se.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new E),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){wn.set(0,0,1),t.vmult(wn,wn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),wn.x===1?i.x=e.x:wn.x===-1&&(n.x=e.x),wn.y===1?i.y=e.y:wn.y===-1&&(n.y=e.y),wn.z===1?i.z=e.z:wn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const wn=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Vt;new E;new Vt;new E;new E;new E;new E;new E;new E;new E;new Vt;new E;new Ke;new Vt;class qv{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class jv extends qv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let d,u,p,m,_,g;if(a!==0)for(let S=0;S!==c;S++)l[S].updateSolveMassProperties();const f=Zv,x=Kv,v=Yv;f.length=a,x.length=a,v.length=a;for(let S=0;S!==a;S++){const M=o[S];v[S]=0,x[S]=M.computeB(h),f[S]=1/M.computeC()}if(a!==0){for(let w=0;w!==c;w++){const T=l[w],L=T.vlambda,y=T.wlambda;L.set(0,0,0),y.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let w=0;w!==a;w++){const T=o[w];d=x[w],u=f[w],g=v[w],_=T.computeGWlambda(),p=u*(d-_-T.eps*g),g+p<T.minForce?p=T.minForce-g:g+p>T.maxForce&&(p=T.maxForce-g),v[w]+=p,m+=p>0?p:-p,T.addToWlambda(p)}if(m*m<r)break}for(let w=0;w!==c;w++){const T=l[w],L=T.velocity,y=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),L.vadd(T.vlambda,L),T.wlambda.vmul(T.angularFactor,T.wlambda),y.vadd(T.wlambda,y)}let S=o.length;const M=1/h;for(;S--;)o[S].multiplier=v[S]*M}return n}}const Yv=[],Zv=[],Kv=[];xe.STATIC;class $v{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Jv extends $v{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const et={sphereSphere:Se.types.SPHERE,spherePlane:Se.types.SPHERE|Se.types.PLANE,boxBox:Se.types.BOX|Se.types.BOX,sphereBox:Se.types.SPHERE|Se.types.BOX,planeBox:Se.types.PLANE|Se.types.BOX,convexConvex:Se.types.CONVEXPOLYHEDRON,sphereConvex:Se.types.SPHERE|Se.types.CONVEXPOLYHEDRON,planeConvex:Se.types.PLANE|Se.types.CONVEXPOLYHEDRON,boxConvex:Se.types.BOX|Se.types.CONVEXPOLYHEDRON,sphereHeightfield:Se.types.SPHERE|Se.types.HEIGHTFIELD,boxHeightfield:Se.types.BOX|Se.types.HEIGHTFIELD,convexHeightfield:Se.types.CONVEXPOLYHEDRON|Se.types.HEIGHTFIELD,sphereParticle:Se.types.PARTICLE|Se.types.SPHERE,planeParticle:Se.types.PLANE|Se.types.PARTICLE,boxParticle:Se.types.BOX|Se.types.PARTICLE,convexParticle:Se.types.PARTICLE|Se.types.CONVEXPOLYHEDRON,cylinderCylinder:Se.types.CYLINDER,sphereCylinder:Se.types.SPHERE|Se.types.CYLINDER,planeCylinder:Se.types.PLANE|Se.types.CYLINDER,boxCylinder:Se.types.BOX|Se.types.CYLINDER,convexCylinder:Se.types.CONVEXPOLYHEDRON|Se.types.CYLINDER,heightfieldCylinder:Se.types.HEIGHTFIELD|Se.types.CYLINDER,particleCylinder:Se.types.PARTICLE|Se.types.CYLINDER,sphereTrimesh:Se.types.SPHERE|Se.types.TRIMESH,planeTrimesh:Se.types.PLANE|Se.types.TRIMESH};class Qv{get[et.sphereSphere](){return this.sphereSphere}get[et.spherePlane](){return this.spherePlane}get[et.boxBox](){return this.boxBox}get[et.sphereBox](){return this.sphereBox}get[et.planeBox](){return this.planeBox}get[et.convexConvex](){return this.convexConvex}get[et.sphereConvex](){return this.sphereConvex}get[et.planeConvex](){return this.planeConvex}get[et.boxConvex](){return this.boxConvex}get[et.sphereHeightfield](){return this.sphereHeightfield}get[et.boxHeightfield](){return this.boxHeightfield}get[et.convexHeightfield](){return this.convexHeightfield}get[et.sphereParticle](){return this.sphereParticle}get[et.planeParticle](){return this.planeParticle}get[et.boxParticle](){return this.boxParticle}get[et.convexParticle](){return this.convexParticle}get[et.cylinderCylinder](){return this.convexConvex}get[et.sphereCylinder](){return this.sphereConvex}get[et.planeCylinder](){return this.planeConvex}get[et.boxCylinder](){return this.boxConvex}get[et.convexCylinder](){return this.convexConvex}get[et.heightfieldCylinder](){return this.heightfieldCylinder}get[et.particleCylinder](){return this.particleCylinder}get[et.sphereTrimesh](){return this.sphereTrimesh}get[et.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Jv,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Dv(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const m=this.frictionEquationPool,_=m.length?m.pop():new Ul(n,i,u*p),g=m.length?m.pop():new Ul(n,i,u*p);return _.bi=g.bi=n,_.bj=g.bj=i,_.minForce=g.minForce=-u*p,_.maxForce=g.maxForce=u*p,_.ri.copy(e.ri),_.rj.copy(e.rj),g.ri.copy(e.ri),g.rj.copy(e.rj),e.ni.tangents(_.t,g.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=g.enabled=e.enabled,t.push(_,g),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Qn.setZero(),zi.setZero(),ki.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Qn.vadd(t.ni,Qn),zi.vadd(t.ri,zi),ki.vadd(t.rj,ki)):(Qn.vsub(t.ni,Qn),zi.vadd(t.rj,zi),ki.vadd(t.ri,ki));const o=1/e;zi.scale(o,n.ri),ki.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Qn.normalize(),Qn.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=nx,c=ix,h=ex,d=tx;for(let u=0,p=e.length;u!==p;u++){const m=e[u],_=t[u];let g=null;m.material&&_.material&&(g=n.getContactMaterial(m.material,_.material)||null);const f=m.type&xe.KINEMATIC&&_.type&xe.STATIC||m.type&xe.STATIC&&_.type&xe.KINEMATIC||m.type&xe.KINEMATIC&&_.type&xe.KINEMATIC;for(let x=0;x<m.shapes.length;x++){m.quaternion.mult(m.shapeOrientations[x],l),m.quaternion.vmult(m.shapeOffsets[x],h),h.vadd(m.position,h);const v=m.shapes[x];for(let S=0;S<_.shapes.length;S++){_.quaternion.mult(_.shapeOrientations[S],c),_.quaternion.vmult(_.shapeOffsets[S],d),d.vadd(_.position,d);const M=_.shapes[S];if(!(v.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&v.collisionFilterGroup)||h.distanceTo(d)>v.boundingSphereRadius+M.boundingSphereRadius)continue;let w=null;v.material&&M.material&&(w=n.getContactMaterial(v.material,M.material)||null),this.currentContactMaterial=w||g||n.defaultContactMaterial;const T=v.type|M.type,L=this[T];if(L){let y=!1;v.type<M.type?y=L.call(this,v,M,h,d,l,c,m,_,v,M,f):y=L.call(this,M,v,d,h,c,l,_,m,v,M,f),y&&f&&(n.shapeOverlapKeeper.set(v.id,M.id),n.bodyOverlapKeeper.set(m.id,_.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,e,t,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,xr),u.ni.scale(u.ni.dot(xr),Nl),xr.vsub(Nl,u.rj),-xr.dot(u.ni)<=e.radius){if(d)return!0;const p=u.ri,m=u.rj;p.vadd(n,p),p.vsub(a.position,p),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}sphereBox(e,t,n,i,r,o,a,l,c,h,d){const u=this.v3pool,p=Cx;n.vsub(i,yr),t.getSideNormals(p,o);const m=e.radius;let _=!1;const g=Lx,f=Ix,x=Dx;let v=null,S=0,M=0,w=0,T=null;for(let F=0,V=p.length;F!==V&&_===!1;F++){const k=Tx;k.copy(p[F]);const X=k.length();k.normalize();const ee=yr.dot(k);if(ee<X+m&&ee>0){const le=Ax,J=Rx;le.copy(p[(F+1)%3]),J.copy(p[(F+2)%3]);const Y=le.length(),ie=J.length();le.normalize(),J.normalize();const ue=yr.dot(le),pe=yr.dot(J);if(ue<Y&&ue>-Y&&pe<ie&&pe>-ie){const O=Math.abs(ee-X-m);if((T===null||O<T)&&(T=O,M=ue,w=pe,v=X,g.copy(k),f.copy(le),x.copy(J),S++,d))return!0}}}if(S){_=!0;const F=this.createContactEquation(a,l,e,t,c,h);g.scale(-m,F.ri),F.ni.copy(g),F.ni.negate(F.ni),g.scale(v,g),f.scale(M,f),g.vadd(f,g),x.scale(w,x),g.vadd(x,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let L=u.get();const y=Px;for(let F=0;F!==2&&!_;F++)for(let V=0;V!==2&&!_;V++)for(let k=0;k!==2&&!_;k++)if(L.set(0,0,0),F?L.vadd(p[0],L):L.vsub(p[0],L),V?L.vadd(p[1],L):L.vsub(p[1],L),k?L.vadd(p[2],L):L.vsub(p[2],L),i.vadd(L,y),y.vsub(n,y),y.lengthSquared()<m*m){if(d)return!0;_=!0;const X=this.createContactEquation(a,l,e,t,c,h);X.ri.copy(y),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(m,X.ri),X.rj.copy(L),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(L),L=null;const b=u.get(),U=u.get(),H=u.get(),C=u.get(),I=u.get(),D=p.length;for(let F=0;F!==D&&!_;F++)for(let V=0;V!==D&&!_;V++)if(F%3!==V%3){p[V].cross(p[F],b),b.normalize(),p[F].vadd(p[V],U),H.copy(n),H.vsub(U,H),H.vsub(i,H);const k=H.dot(b);b.scale(k,C);let X=0;for(;X===F%3||X===V%3;)X++;I.copy(n),I.vsub(C,I),I.vsub(U,I),I.vsub(i,I);const ee=Math.abs(k),le=I.length();if(ee<p[X].length()&&le<m){if(d)return!0;_=!0;const J=this.createContactEquation(a,l,e,t,c,h);U.vadd(C,J.rj),J.rj.copy(J.rj),I.negate(J.ni),J.ni.normalize(),J.ri.copy(J.rj),J.ri.vadd(i,J.ri),J.ri.vsub(n,J.ri),J.ri.normalize(),J.ri.scale(m,J.ri),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(l.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}u.release(b,U,H,C,I)}planeBox(e,t,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}convexConvex(e,t,n,i,r,o,a,l,c,h,d,u,p){const m=Yx;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,m,u,p)){const _=[],g=Zx;e.clipAgainstHull(n,r,t,i,o,m,-100,100,_);let f=0;for(let x=0;x!==_.length;x++){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,h),S=v.ri,M=v.rj;m.negate(v.ni),_[x].normal.negate(g),g.scale(_[x].depth,g),_[x].point.vadd(g,S),M.copy(_[x].point),S.vsub(n,S),M.vsub(i,M),S.vadd(n,S),S.vsub(a.position,S),M.vadd(i,M),M.vsub(l.position,M),this.result.push(v),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,n,i,r,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,Ux);const p=t.faceNormals,m=t.faces,_=t.vertices,g=e.radius;let f=!1;for(let x=0;x!==_.length;x++){const v=_[x],S=Bx;o.vmult(v,S),i.vadd(S,S);const M=Ox;if(S.vsub(n,M),M.lengthSquared()<g*g){if(d)return!0;f=!0;const w=this.createContactEquation(a,l,e,t,c,h);w.ri.copy(M),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(g,w.ri),S.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let x=0,v=m.length;x!==v&&f===!1;x++){const S=p[x],M=m[x],w=zx;o.vmult(S,w);const T=kx;o.vmult(_[M[0]],T),T.vadd(i,T);const L=Hx;w.scale(-g,L),n.vadd(L,L);const y=Gx;L.vsub(T,y);const b=y.dot(w),U=Vx;if(n.vsub(T,U),b<0&&U.dot(w)>0){const H=[];for(let C=0,I=M.length;C!==I;C++){const D=u.get();o.vmult(_[M[C]],D),i.vadd(D,D),H.push(D)}if(bx(H,w,n)){if(d)return!0;f=!0;const C=this.createContactEquation(a,l,e,t,c,h);w.scale(-g,C.ri),w.negate(C.ni);const I=u.get();w.scale(-b,I);const D=u.get();w.scale(-g,D),n.vsub(i,C.rj),C.rj.vadd(D,C.rj),C.rj.vadd(I,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),u.release(I),u.release(D),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let F=0,V=H.length;F!==V;F++)u.release(H[F]);return}else for(let C=0;C!==M.length;C++){const I=u.get(),D=u.get();o.vmult(_[M[(C+1)%M.length]],I),o.vmult(_[M[(C+2)%M.length]],D),i.vadd(I,I),i.vadd(D,D);const F=Nx;D.vsub(I,F);const V=Fx;F.unit(V);const k=u.get(),X=u.get();n.vsub(I,X);const ee=X.dot(V);V.scale(ee,k),k.vadd(I,k);const le=u.get();if(k.vsub(n,le),ee>0&&ee*ee<F.lengthSquared()&&le.lengthSquared()<g*g){if(d)return!0;const J=this.createContactEquation(a,l,e,t,c,h);k.vsub(i,J.rj),k.vsub(n,J.ni),J.ni.normalize(),J.ni.scale(g,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(l.position,J.rj),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult);for(let Y=0,ie=H.length;Y!==ie;Y++)u.release(H[Y]);u.release(I),u.release(D),u.release(k),u.release(le),u.release(X);return}u.release(I),u.release(D),u.release(k),u.release(le),u.release(X)}for(let C=0,I=H.length;C!==I;C++)u.release(H[C])}}}planeConvex(e,t,n,i,r,o,a,l,c,h,d){const u=Wx,p=Xx;p.set(0,0,1),r.vmult(p,p);let m=0;const _=qx;for(let g=0;g!==t.vertices.length;g++)if(u.copy(t.vertices[g]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),p.dot(_)<=0){if(d)return!0;const x=this.createContactEquation(a,l,e,t,c,h),v=jx;p.scale(p.dot(_),v),u.vsub(v,v),v.vsub(n,x.ri),x.ni.copy(p),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}sphereHeightfield(e,t,n,i,r,o,a,l,c,h,d){const u=t.data,p=e.radius,m=t.elementSize,_=ay,g=oy;Ke.pointToLocalFrame(i,o,n,g);let f=Math.floor((g.x-p)/m)-1,x=Math.ceil((g.x+p)/m)+1,v=Math.floor((g.y-p)/m)-1,S=Math.ceil((g.y+p)/m)+1;if(x<0||S<0||f>u.length||v>u[0].length)return;f<0&&(f=0),x<0&&(x=0),v<0&&(v=0),S<0&&(S=0),f>=u.length&&(f=u.length-1),x>=u.length&&(x=u.length-1),S>=u[0].length&&(S=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);const M=[];t.getRectMinMax(f,v,x,S,M);const w=M[0],T=M[1];if(g.z-p>T||g.z+p<w)return;const L=this.result;for(let y=f;y<x;y++)for(let b=v;b<S;b++){const U=L.length;let H=!1;if(t.getConvexTrianglePillar(y,b,!1),Ke.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.sphereConvex(e,t.pillarConvex,n,_,r,o,a,l,e,t,d)),d&&H||(t.getConvexTrianglePillar(y,b,!0),Ke.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.sphereConvex(e,t.pillarConvex,n,_,r,o,a,l,e,t,d)),d&&H))return!0;if(L.length-U>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexHeightfield(e,t,n,i,r,o,a,l,c,h,d){const u=t.data,p=t.elementSize,m=e.boundingSphereRadius,_=sy,g=ry,f=iy;Ke.pointToLocalFrame(i,o,n,f);let x=Math.floor((f.x-m)/p)-1,v=Math.ceil((f.x+m)/p)+1,S=Math.floor((f.y-m)/p)-1,M=Math.ceil((f.y+m)/p)+1;if(v<0||M<0||x>u.length||S>u[0].length)return;x<0&&(x=0),v<0&&(v=0),S<0&&(S=0),M<0&&(M=0),x>=u.length&&(x=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),S>=u[0].length&&(S=u[0].length-1);const w=[];t.getRectMinMax(x,S,v,M,w);const T=w[0],L=w[1];if(!(f.z-m>L||f.z+m<T))for(let y=x;y<v;y++)for(let b=S;b<M;b++){let U=!1;if(t.getConvexTrianglePillar(y,b,!1),Ke.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,_,r,o,a,l,null,null,d,g,null)),d&&U||(t.getConvexTrianglePillar(y,b,!0),Ke.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,_,r,o,a,l,null,null,d,g,null)),d&&U))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,h,d){const u=Qx;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const m=this.createContactEquation(l,a,t,e,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(e.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,h,d){const u=Kx;u.set(0,0,1),a.quaternion.vmult(u,u);const p=$x;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(l,a,t,e,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const g=Jx;u.scale(u.dot(i),g),i.vsub(g,g),_.rj.copy(g),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexParticle(e,t,n,i,r,o,a,l,c,h,d){let u=-1;const p=ty,m=ny;let _=null;const g=ey;if(g.copy(i),g.vsub(n,g),r.conjugate(Fl),Fl.vmult(g,g),e.pointIsInside(g)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let f=0,x=e.faces.length;f!==x;f++){const v=[e.worldVertices[e.faces[f][0]]],S=e.worldFaceNormals[f];i.vsub(v[0],Ol);const M=-S.dot(Ol);if(_===null||Math.abs(M)<Math.abs(_)){if(d)return!0;_=M,u=f,p.copy(S)}}if(u!==-1){const f=this.createContactEquation(l,a,t,e,c,h);p.scale(_,m),m.vadd(i,m),m.vsub(n,m),f.rj.copy(m),p.negate(f.ni),f.ri.set(0,0,0);const x=f.ri,v=f.rj;x.vadd(i,x),x.vsub(l.position,x),v.vadd(n,v),v.vsub(a.position,v),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,h,d)}particleCylinder(e,t,n,i,r,o,a,l,c,h,d){return this.convexParticle(t,e,i,n,o,r,l,a,c,h,d)}sphereTrimesh(e,t,n,i,r,o,a,l,c,h,d){const u=ux,p=dx,m=fx,_=px,g=mx,f=gx,x=yx,v=hx,S=cx,M=Mx;Ke.pointToLocalFrame(i,o,n,g);const w=e.radius;x.lowerBound.set(g.x-w,g.y-w,g.z-w),x.upperBound.set(g.x+w,g.y+w,g.z+w),t.getTrianglesInAABB(x,M);const T=lx,L=e.radius*e.radius;for(let C=0;C<M.length;C++)for(let I=0;I<3;I++)if(t.getVertex(t.indices[M[C]*3+I],T),T.vsub(g,S),S.lengthSquared()<=L){if(v.copy(T),Ke.pointToWorldFrame(i,o,v,T),T.vsub(n,S),d)return!0;let D=this.createContactEquation(a,l,e,t,c,h);D.ni.copy(S),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(T),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let C=0;C<M.length;C++)for(let I=0;I<3;I++){t.getVertex(t.indices[M[C]*3+I],u),t.getVertex(t.indices[M[C]*3+(I+1)%3],p),p.vsub(u,m),g.vsub(p,f);const D=f.dot(m);g.vsub(u,f);let F=f.dot(m);if(F>0&&D<0&&(g.vsub(u,f),_.copy(m),_.normalize(),F=f.dot(_),_.scale(F,f),f.vadd(u,f),f.distanceTo(g)<e.radius)){if(d)return!0;const k=this.createContactEquation(a,l,e,t,c,h);f.vsub(g,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),Ke.pointToWorldFrame(i,o,f,f),f.vsub(l.position,k.rj),Ke.vectorToWorldFrame(o,k.ni,k.ni),Ke.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const y=_x,b=vx,U=xx,H=ax;for(let C=0,I=M.length;C!==I;C++){t.getTriangleVertices(M[C],y,b,U),t.getNormal(M[C],H),g.vsub(y,f);let D=f.dot(H);if(H.scale(D,f),g.vsub(f,f),D=f.distanceTo(g),ht.pointInTriangle(f,y,b,U)&&D<e.radius){if(d)return!0;let F=this.createContactEquation(a,l,e,t,c,h);f.vsub(g,F.ni),F.ni.normalize(),F.ni.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),Ke.pointToWorldFrame(i,o,f,f),f.vsub(l.position,F.rj),Ke.vectorToWorldFrame(o,F.ni,F.ni),Ke.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,h,d){const u=new E,p=sx;p.set(0,0,1),r.vmult(p,p);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,u);const _=new E;_.copy(u),Ke.pointToWorldFrame(i,o,_,u);const g=rx;if(u.vsub(n,g),p.dot(g)<=0){if(d)return!0;const x=this.createContactEquation(a,l,e,t,c,h);x.ni.copy(p);const v=ox;p.scale(g.dot(p),v),u.vsub(v,v),x.ri.copy(v),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Qn=new E,zi=new E,ki=new E,ex=new E,tx=new E,nx=new ut,ix=new ut,sx=new E,rx=new E,ox=new E,ax=new E,cx=new E;new E;const lx=new E,hx=new E,ux=new E,dx=new E,fx=new E,px=new E,mx=new E,gx=new E,_x=new E,vx=new E,xx=new E,yx=new Vt,Mx=[],xr=new E,Nl=new E,Sx=new E,Ex=new E,wx=new E;function bx(s,e,t){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=Sx;s[(r+1)%i].vsub(o,a);const l=Ex;a.cross(e,l);const c=wx;t.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const yr=new E,Tx=new E,Ax=new E,Rx=new E,Cx=[new E,new E,new E,new E,new E,new E],Px=new E,Lx=new E,Ix=new E,Dx=new E,Ux=new E,Nx=new E,Fx=new E,Ox=new E,Bx=new E,zx=new E,kx=new E,Hx=new E,Gx=new E,Vx=new E;new E;new E;const Wx=new E,Xx=new E,qx=new E,jx=new E,Yx=new E,Zx=new E,Kx=new E,$x=new E,Jx=new E,Qx=new E,Fl=new ut,ey=new E;new E;const ty=new E,Ol=new E,ny=new E,iy=new E,sy=new E,ry=[0],oy=new E,ay=new E;class Bl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||zl(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||zl(t,h)}}}function zl(s,e){s.push((e&4294901760)>>16,e&65535)}const Wo=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class cy{constructor(){this.data={keys:[]}}get(e,t){const n=Wo(e,t);return this.data[n]}set(e,t,n){const i=Wo(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Wo(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class ly extends Oh{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new pv,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new jv,this.constraints=[],this.narrowphase=new Qv(this),this.collisionMatrix=new wl,this.collisionMatrixPrevious=new wl,this.bodyOverlapKeeper=new Bl,this.shapeOverlapKeeper=new Bl,this.contactmaterials=[],this.contactMaterialTable=new cy,this.defaultMaterial=new ls("default"),this.defaultContactMaterial=new Gr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Cr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=ht.ALL,n.from=e,n.to=t,n.callback=i,Xo.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=ht.ANY,n.from=e,n.to=t,n.result=i,Xo.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=ht.CLOSEST,n.from=e,n.to=t,n.result=i,Xo.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof xe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=dt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=dt.now();let r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(dt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=py,i=my,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=xe.DYNAMIC;let u=-1/0;const p=this.constraints,m=fy;l.length();const _=l.x,g=l.y,f=l.z;let x=0;for(c&&(u=dt.now()),x=0;x!==r;x++){const C=o[x];if(C.type===d){const I=C.force,D=C.mass;I.x+=D*_,I.y+=D*g,I.z+=D*f}}for(let C=0,I=this.subsystems.length;C!==I;C++)this.subsystems[C].update();c&&(u=dt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=dt.now()-u);let v=p.length;for(x=0;x!==v;x++){const C=p[x];if(!C.collideConnected)for(let I=n.length-1;I>=0;I-=1)(C.bodyA===n[I]&&C.bodyB===i[I]||C.bodyB===n[I]&&C.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),c&&(u=dt.now());const S=dy,M=t.length;for(x=0;x!==M;x++)S.push(t[x]);t.length=0;const w=this.frictionEquations.length;for(x=0;x!==w;x++)m.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,S,this.frictionEquations,m),c&&(h.narrowphase=dt.now()-u),c&&(u=dt.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const T=t.length;for(let C=0;C!==T;C++){const I=t[C],D=I.bi,F=I.bj,V=I.si,k=I.sj;let X;if(D.material&&F.material?X=this.getContactMaterial(D.material,F.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,D.material&&F.material&&(D.material.friction>=0&&F.material.friction>=0&&D.material.friction*F.material.friction,D.material.restitution>=0&&F.material.restitution>=0&&(I.restitution=D.material.restitution*F.material.restitution)),a.addEquation(I),D.allowSleep&&D.type===xe.DYNAMIC&&D.sleepState===xe.SLEEPING&&F.sleepState===xe.AWAKE&&F.type!==xe.STATIC){const ee=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),le=F.sleepSpeedLimit**2;ee>=le*2&&(D.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===xe.DYNAMIC&&F.sleepState===xe.SLEEPING&&D.sleepState===xe.AWAKE&&D.type!==xe.STATIC){const ee=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),le=D.sleepSpeedLimit**2;ee>=le*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,F,!0),this.collisionMatrixPrevious.get(D,F)||(vs.body=F,vs.contact=I,D.dispatchEvent(vs),vs.body=D,F.dispatchEvent(vs)),this.bodyOverlapKeeper.set(D.id,F.id),this.shapeOverlapKeeper.set(V.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=dt.now()-u,u=dt.now()),x=0;x!==r;x++){const C=o[x];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(v=p.length,x=0;x!==v;x++){const C=p[x];C.update();for(let I=0,D=C.equations.length;I!==D;I++){const F=C.equations[I];a.addEquation(F)}}a.solve(e,this),c&&(h.solve=dt.now()-u),a.removeAllEquations();const L=Math.pow;for(x=0;x!==r;x++){const C=o[x];if(C.type&d){const I=L(1-C.linearDamping,e),D=C.velocity;D.scale(I,D);const F=C.angularVelocity;if(F){const V=L(1-C.angularDamping,e);F.scale(V,F)}}}this.dispatchEvent(uy),c&&(u=dt.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(e,b,U);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=dt.now()-u),this.stepnumber+=1,this.dispatchEvent(hy);let H=!0;if(this.allowSleep)for(H=!1,x=0;x!==r;x++){const C=o[x];C.sleepTick(this.time),C.sleepState!==xe.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(bn,Tn),e){for(let r=0,o=bn.length;r<o;r+=2)xs.bodyA=this.getBodyById(bn[r]),xs.bodyB=this.getBodyById(bn[r+1]),this.dispatchEvent(xs);xs.bodyA=xs.bodyB=null}if(t){for(let r=0,o=Tn.length;r<o;r+=2)ys.bodyA=this.getBodyById(Tn[r]),ys.bodyB=this.getBodyById(Tn[r+1]),this.dispatchEvent(ys);ys.bodyA=ys.bodyB=null}bn.length=Tn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(bn,Tn),n){for(let r=0,o=bn.length;r<o;r+=2){const a=this.getShapeById(bn[r]),l=this.getShapeById(bn[r+1]);An.shapeA=a,An.shapeB=l,a&&(An.bodyA=a.body),l&&(An.bodyB=l.body),this.dispatchEvent(An)}An.bodyA=An.bodyB=An.shapeA=An.shapeB=null}if(i){for(let r=0,o=Tn.length;r<o;r+=2){const a=this.getShapeById(Tn[r]),l=this.getShapeById(Tn[r+1]);Rn.shapeA=a,Rn.shapeB=l,a&&(Rn.bodyA=a.body),l&&(Rn.bodyB=l.body),this.dispatchEvent(Rn)}Rn.bodyA=Rn.bodyB=Rn.shapeA=Rn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Vt;const Xo=new ht,dt=globalThis.performance||{};if(!dt.now){let s=Date.now();dt.timing&&dt.timing.navigationStart&&(s=dt.timing.navigationStart),dt.now=()=>Date.now()-s}new E;const hy={type:"postStep"},uy={type:"preStep"},vs={type:xe.COLLIDE_EVENT_NAME,body:null,contact:null},dy=[],fy=[],py=[],my=[],bn=[],Tn=[],xs={type:"beginContact",bodyA:null,bodyB:null},ys={type:"endContact",bodyA:null,bodyB:null},An={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Rn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Aa extends _i{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Hr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new gy(e)}}class gy{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=_y(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function _y(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const d=vy(h,i,a,l,t);a+=d.offsetX,o.push(d.path)}}return o}function vy(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new w_;let a,l,c,h,d,u,p,m;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let g=0,f=_.length;g<f;)switch(_[g++]){case"m":a=_[g++]*e+t,l=_[g++]*e+n,o.moveTo(a,l);break;case"l":a=_[g++]*e+t,l=_[g++]*e+n,o.lineTo(a,l);break;case"q":c=_[g++]*e+t,h=_[g++]*e+n,d=_[g++]*e+t,u=_[g++]*e+n,o.quadraticCurveTo(d,u,c,h);break;case"b":c=_[g++]*e+t,h=_[g++]*e+n,d=_[g++]*e+t,u=_[g++]*e+n,p=_[g++]*e+t,m=_[g++]*e+n,o.bezierCurveTo(d,u,p,m,c,h);break}}return{offsetX:r.ha*e,path:o}}class Ds extends Sa{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function Xh(s,e){return function(){return s.apply(e,arguments)}}const{toString:xy}=Object.prototype,{getPrototypeOf:Ra}=Object,Vr=(s=>e=>{const t=xy.call(e);return s[t]||(s[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),rn=s=>(s=s.toLowerCase(),e=>Vr(e)===s),Wr=s=>e=>typeof e===s,{isArray:hs}=Array,Us=Wr("undefined");function yy(s){return s!==null&&!Us(s)&&s.constructor!==null&&!Us(s.constructor)&&Ht(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const qh=rn("ArrayBuffer");function My(s){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(s):e=s&&s.buffer&&qh(s.buffer),e}const Sy=Wr("string"),Ht=Wr("function"),jh=Wr("number"),Xr=s=>s!==null&&typeof s=="object",Ey=s=>s===!0||s===!1,Er=s=>{if(Vr(s)!=="object")return!1;const e=Ra(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},wy=rn("Date"),by=rn("File"),Ty=rn("Blob"),Ay=rn("FileList"),Ry=s=>Xr(s)&&Ht(s.pipe),Cy=s=>{let e;return s&&(typeof FormData=="function"&&s instanceof FormData||Ht(s.append)&&((e=Vr(s))==="formdata"||e==="object"&&Ht(s.toString)&&s.toString()==="[object FormData]"))},Py=rn("URLSearchParams"),[Ly,Iy,Dy,Uy]=["ReadableStream","Request","Response","Headers"].map(rn),Ny=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bs(s,e,{allOwnKeys:t=!1}={}){if(s===null||typeof s>"u")return;let n,i;if(typeof s!="object"&&(s=[s]),hs(s))for(n=0,i=s.length;n<i;n++)e.call(null,s[n],n,s);else{const r=t?Object.getOwnPropertyNames(s):Object.keys(s),o=r.length;let a;for(n=0;n<o;n++)a=r[n],e.call(null,s[a],a,s)}}function Yh(s,e){e=e.toLowerCase();const t=Object.keys(s);let n=t.length,i;for(;n-- >0;)if(i=t[n],e===i.toLowerCase())return i;return null}const ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Zh=s=>!Us(s)&&s!==ri;function la(){const{caseless:s}=Zh(this)&&this||{},e={},t=(n,i)=>{const r=s&&Yh(e,i)||i;Er(e[r])&&Er(n)?e[r]=la(e[r],n):Er(n)?e[r]=la({},n):hs(n)?e[r]=n.slice():e[r]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&Bs(arguments[n],t);return e}const Fy=(s,e,t,{allOwnKeys:n}={})=>(Bs(e,(i,r)=>{t&&Ht(i)?s[r]=Xh(i,t):s[r]=i},{allOwnKeys:n}),s),Oy=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),By=(s,e,t,n)=>{s.prototype=Object.create(e.prototype,n),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:e.prototype}),t&&Object.assign(s.prototype,t)},zy=(s,e,t,n)=>{let i,r,o;const a={};if(e=e||{},s==null)return e;do{for(i=Object.getOwnPropertyNames(s),r=i.length;r-- >0;)o=i[r],(!n||n(o,s,e))&&!a[o]&&(e[o]=s[o],a[o]=!0);s=t!==!1&&Ra(s)}while(s&&(!t||t(s,e))&&s!==Object.prototype);return e},ky=(s,e,t)=>{s=String(s),(t===void 0||t>s.length)&&(t=s.length),t-=e.length;const n=s.indexOf(e,t);return n!==-1&&n===t},Hy=s=>{if(!s)return null;if(hs(s))return s;let e=s.length;if(!jh(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=s[e];return t},Gy=(s=>e=>s&&e instanceof s)(typeof Uint8Array<"u"&&Ra(Uint8Array)),Vy=(s,e)=>{const n=(s&&s[Symbol.iterator]).call(s);let i;for(;(i=n.next())&&!i.done;){const r=i.value;e.call(s,r[0],r[1])}},Wy=(s,e)=>{let t;const n=[];for(;(t=s.exec(e))!==null;)n.push(t);return n},Xy=rn("HTMLFormElement"),qy=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,i){return n.toUpperCase()+i}),kl=(({hasOwnProperty:s})=>(e,t)=>s.call(e,t))(Object.prototype),jy=rn("RegExp"),Kh=(s,e)=>{const t=Object.getOwnPropertyDescriptors(s),n={};Bs(t,(i,r)=>{let o;(o=e(i,r,s))!==!1&&(n[r]=o||i)}),Object.defineProperties(s,n)},Yy=s=>{Kh(s,(e,t)=>{if(Ht(s)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=s[t];if(Ht(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Zy=(s,e)=>{const t={},n=i=>{i.forEach(r=>{t[r]=!0})};return hs(s)?n(s):n(String(s).split(e)),t},Ky=()=>{},$y=(s,e)=>s!=null&&Number.isFinite(s=+s)?s:e,qo="abcdefghijklmnopqrstuvwxyz",Hl="0123456789",$h={DIGIT:Hl,ALPHA:qo,ALPHA_DIGIT:qo+qo.toUpperCase()+Hl},Jy=(s=16,e=$h.ALPHA_DIGIT)=>{let t="";const{length:n}=e;for(;s--;)t+=e[Math.random()*n|0];return t};function Qy(s){return!!(s&&Ht(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const eM=s=>{const e=new Array(10),t=(n,i)=>{if(Xr(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[i]=n;const r=hs(n)?[]:{};return Bs(n,(o,a)=>{const l=t(o,i+1);!Us(l)&&(r[a]=l)}),e[i]=void 0,r}}return n};return t(s,0)},tM=rn("AsyncFunction"),nM=s=>s&&(Xr(s)||Ht(s))&&Ht(s.then)&&Ht(s.catch),Jh=((s,e)=>s?setImmediate:e?((t,n)=>(ri.addEventListener("message",({source:i,data:r})=>{i===ri&&r===t&&n.length&&n.shift()()},!1),i=>{n.push(i),ri.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Ht(ri.postMessage)),iM=typeof queueMicrotask<"u"?queueMicrotask.bind(ri):typeof process<"u"&&process.nextTick||Jh,Z={isArray:hs,isArrayBuffer:qh,isBuffer:yy,isFormData:Cy,isArrayBufferView:My,isString:Sy,isNumber:jh,isBoolean:Ey,isObject:Xr,isPlainObject:Er,isReadableStream:Ly,isRequest:Iy,isResponse:Dy,isHeaders:Uy,isUndefined:Us,isDate:wy,isFile:by,isBlob:Ty,isRegExp:jy,isFunction:Ht,isStream:Ry,isURLSearchParams:Py,isTypedArray:Gy,isFileList:Ay,forEach:Bs,merge:la,extend:Fy,trim:Ny,stripBOM:Oy,inherits:By,toFlatObject:zy,kindOf:Vr,kindOfTest:rn,endsWith:ky,toArray:Hy,forEachEntry:Vy,matchAll:Wy,isHTMLForm:Xy,hasOwnProperty:kl,hasOwnProp:kl,reduceDescriptors:Kh,freezeMethods:Yy,toObjectSet:Zy,toCamelCase:qy,noop:Ky,toFiniteNumber:$y,findKey:Yh,global:ri,isContextDefined:Zh,ALPHABET:$h,generateString:Jy,isSpecCompliantForm:Qy,toJSONObject:eM,isAsyncFn:tM,isThenable:nM,setImmediate:Jh,asap:iM};function ze(s,e,t,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}Z.inherits(ze,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const Qh=ze.prototype,eu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{eu[s]={value:s}});Object.defineProperties(ze,eu);Object.defineProperty(Qh,"isAxiosError",{value:!0});ze.from=(s,e,t,n,i,r)=>{const o=Object.create(Qh);return Z.toFlatObject(s,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ze.call(o,s.message,e,t,n,i),o.cause=s,o.name=s.name,r&&Object.assign(o,r),o};const sM=null;function ha(s){return Z.isPlainObject(s)||Z.isArray(s)}function tu(s){return Z.endsWith(s,"[]")?s.slice(0,-2):s}function Gl(s,e,t){return s?s.concat(e).map(function(i,r){return i=tu(i),!t&&r?"["+i+"]":i}).join(t?".":""):e}function rM(s){return Z.isArray(s)&&!s.some(ha)}const oM=Z.toFlatObject(Z,{},null,function(e){return/^is[A-Z]/.test(e)});function qr(s,e,t){if(!Z.isObject(s))throw new TypeError("target must be an object");e=e||new FormData,t=Z.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,g){return!Z.isUndefined(g[_])});const n=t.metaTokens,i=t.visitor||h,r=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(e);if(!Z.isFunction(i))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(Z.isDate(m))return m.toISOString();if(!l&&Z.isBlob(m))throw new ze("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(m)||Z.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function h(m,_,g){let f=m;if(m&&!g&&typeof m=="object"){if(Z.endsWith(_,"{}"))_=n?_:_.slice(0,-2),m=JSON.stringify(m);else if(Z.isArray(m)&&rM(m)||(Z.isFileList(m)||Z.endsWith(_,"[]"))&&(f=Z.toArray(m)))return _=tu(_),f.forEach(function(v,S){!(Z.isUndefined(v)||v===null)&&e.append(o===!0?Gl([_],S,r):o===null?_:_+"[]",c(v))}),!1}return ha(m)?!0:(e.append(Gl(g,_,r),c(m)),!1)}const d=[],u=Object.assign(oM,{defaultVisitor:h,convertValue:c,isVisitable:ha});function p(m,_){if(!Z.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(m),Z.forEach(m,function(f,x){(!(Z.isUndefined(f)||f===null)&&i.call(e,f,Z.isString(x)?x.trim():x,_,u))===!0&&p(f,_?_.concat(x):[x])}),d.pop()}}if(!Z.isObject(s))throw new TypeError("data must be an object");return p(s),e}function Vl(s){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Ca(s,e){this._pairs=[],s&&qr(s,this,e)}const nu=Ca.prototype;nu.append=function(e,t){this._pairs.push([e,t])};nu.toString=function(e){const t=e?function(n){return e.call(this,n,Vl)}:Vl;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function aM(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function iu(s,e,t){if(!e)return s;const n=t&&t.encode||aM;Z.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let r;if(i?r=i(e,t):r=Z.isURLSearchParams(e)?e.toString():new Ca(e,t).toString(n),r){const o=s.indexOf("#");o!==-1&&(s=s.slice(0,o)),s+=(s.indexOf("?")===-1?"?":"&")+r}return s}class Wl{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Z.forEach(this.handlers,function(n){n!==null&&e(n)})}}const su={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cM=typeof URLSearchParams<"u"?URLSearchParams:Ca,lM=typeof FormData<"u"?FormData:null,hM=typeof Blob<"u"?Blob:null,uM={isBrowser:!0,classes:{URLSearchParams:cM,FormData:lM,Blob:hM},protocols:["http","https","file","blob","url","data"]},Pa=typeof window<"u"&&typeof document<"u",ua=typeof navigator=="object"&&navigator||void 0,dM=Pa&&(!ua||["ReactNative","NativeScript","NS"].indexOf(ua.product)<0),fM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",pM=Pa&&window.location.href||"http://localhost",mM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Pa,hasStandardBrowserEnv:dM,hasStandardBrowserWebWorkerEnv:fM,navigator:ua,origin:pM},Symbol.toStringTag,{value:"Module"})),Tt={...mM,...uM};function gM(s,e){return qr(s,new Tt.classes.URLSearchParams,Object.assign({visitor:function(t,n,i,r){return Tt.isNode&&Z.isBuffer(t)?(this.append(n,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function _M(s){return Z.matchAll(/\w+|\[(\w*)]/g,s).map(e=>e[0]==="[]"?"":e[1]||e[0])}function vM(s){const e={},t=Object.keys(s);let n;const i=t.length;let r;for(n=0;n<i;n++)r=t[n],e[r]=s[r];return e}function ru(s){function e(t,n,i,r){let o=t[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&Z.isArray(i)?i.length:o,l?(Z.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a):((!i[o]||!Z.isObject(i[o]))&&(i[o]=[]),e(t,n,i[o],r)&&Z.isArray(i[o])&&(i[o]=vM(i[o])),!a)}if(Z.isFormData(s)&&Z.isFunction(s.entries)){const t={};return Z.forEachEntry(s,(n,i)=>{e(_M(n),i,t,0)}),t}return null}function xM(s,e,t){if(Z.isString(s))try{return(e||JSON.parse)(s),Z.trim(s)}catch(n){if(n.name!=="SyntaxError")throw n}return(0,JSON.stringify)(s)}const zs={transitional:su,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=Z.isObject(e);if(r&&Z.isHTMLForm(e)&&(e=new FormData(e)),Z.isFormData(e))return i?JSON.stringify(ru(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e)||Z.isReadableStream(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return gM(e,this.formSerializer).toString();if((a=Z.isFileList(e))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return qr(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),xM(e)):e}],transformResponse:[function(e){const t=this.transitional||zs.transitional,n=t&&t.forcedJSONParsing,i=this.responseType==="json";if(Z.isResponse(e)||Z.isReadableStream(e))return e;if(e&&Z.isString(e)&&(n&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ze.from(a,ze.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],s=>{zs.headers[s]={}});const yM=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),MM=s=>{const e={};let t,n,i;return s&&s.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!t||e[t]&&yM[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},Xl=Symbol("internals");function Ms(s){return s&&String(s).trim().toLowerCase()}function wr(s){return s===!1||s==null?s:Z.isArray(s)?s.map(wr):String(s)}function SM(s){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(s);)e[n[1]]=n[2];return e}const EM=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function jo(s,e,t,n,i){if(Z.isFunction(n))return n.call(this,e,t);if(i&&(e=t),!!Z.isString(e)){if(Z.isString(n))return e.indexOf(n)!==-1;if(Z.isRegExp(n))return n.test(e)}}function wM(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function bM(s,e){const t=Z.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(s,n+t,{value:function(i,r,o){return this[n].call(this,e,i,r,o)},configurable:!0})})}class Dt{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function r(a,l,c){const h=Ms(l);if(!h)throw new Error("header name must be a non-empty string");const d=Z.findKey(i,h);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||l]=wr(a))}const o=(a,l)=>Z.forEach(a,(c,h)=>r(c,h,l));if(Z.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(Z.isString(e)&&(e=e.trim())&&!EM(e))o(MM(e),t);else if(Z.isHeaders(e))for(const[a,l]of e.entries())r(l,a,n);else e!=null&&r(t,e,n);return this}get(e,t){if(e=Ms(e),e){const n=Z.findKey(this,e);if(n){const i=this[n];if(!t)return i;if(t===!0)return SM(i);if(Z.isFunction(t))return t.call(this,i,n);if(Z.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ms(e),e){const n=Z.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||jo(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let i=!1;function r(o){if(o=Ms(o),o){const a=Z.findKey(n,o);a&&(!t||jo(n,n[a],a,t))&&(delete n[a],i=!0)}}return Z.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];(!e||jo(this,this[r],r,e,!0))&&(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return Z.forEach(this,(i,r)=>{const o=Z.findKey(n,r);if(o){t[o]=wr(i),delete t[r];return}const a=e?wM(r):String(r).trim();a!==r&&delete t[r],t[a]=wr(i),n[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Z.forEach(this,(n,i)=>{n!=null&&n!==!1&&(t[i]=e&&Z.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(i=>n.set(i)),n}static accessor(e){const n=(this[Xl]=this[Xl]={accessors:{}}).accessors,i=this.prototype;function r(o){const a=Ms(o);n[a]||(bM(i,o),n[a]=!0)}return Z.isArray(e)?e.forEach(r):r(e),this}}Dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(Dt.prototype,({value:s},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>s,set(n){this[t]=n}}});Z.freezeMethods(Dt);function Yo(s,e){const t=this||zs,n=e||t,i=Dt.from(n.headers);let r=n.data;return Z.forEach(s,function(a){r=a.call(t,r,i.normalize(),e?e.status:void 0)}),i.normalize(),r}function ou(s){return!!(s&&s.__CANCEL__)}function us(s,e,t){ze.call(this,s??"canceled",ze.ERR_CANCELED,e,t),this.name="CanceledError"}Z.inherits(us,ze,{__CANCEL__:!0});function au(s,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?s(t):e(new ze("Request failed with status code "+t.status,[ze.ERR_BAD_REQUEST,ze.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function TM(s){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return e&&e[1]||""}function AM(s,e){s=s||10;const t=new Array(s),n=new Array(s);let i=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),h=n[r];o||(o=c),t[i]=l,n[i]=c;let d=r,u=0;for(;d!==i;)u+=t[d++],d=d%s;if(i=(i+1)%s,i===r&&(r=(r+1)%s),c-o<e)return;const p=h&&c-h;return p?Math.round(u*1e3/p):void 0}}function RM(s,e){let t=0,n=1e3/e,i,r;const o=(c,h=Date.now())=>{t=h,i=null,r&&(clearTimeout(r),r=null),s.apply(null,c)};return[(...c)=>{const h=Date.now(),d=h-t;d>=n?o(c,h):(i=c,r||(r=setTimeout(()=>{r=null,o(i)},n-d)))},()=>i&&o(i)]}const Pr=(s,e,t=3)=>{let n=0;const i=AM(50,250);return RM(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-n,c=i(l),h=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&h?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};s(d)},t)},ql=(s,e)=>{const t=s!=null;return[n=>e[0]({lengthComputable:t,total:s,loaded:n}),e[1]]},jl=s=>(...e)=>Z.asap(()=>s(...e)),CM=Tt.hasStandardBrowserEnv?((s,e)=>t=>(t=new URL(t,Tt.origin),s.protocol===t.protocol&&s.host===t.host&&(e||s.port===t.port)))(new URL(Tt.origin),Tt.navigator&&/(msie|trident)/i.test(Tt.navigator.userAgent)):()=>!0,PM=Tt.hasStandardBrowserEnv?{write(s,e,t,n,i,r){const o=[s+"="+encodeURIComponent(e)];Z.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),Z.isString(n)&&o.push("path="+n),Z.isString(i)&&o.push("domain="+i),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(s){const e=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(s){this.write(s,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function LM(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function IM(s,e){return e?s.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):s}function cu(s,e){return s&&!LM(e)?IM(s,e):e}const Yl=s=>s instanceof Dt?{...s}:s;function gi(s,e){e=e||{};const t={};function n(c,h,d,u){return Z.isPlainObject(c)&&Z.isPlainObject(h)?Z.merge.call({caseless:u},c,h):Z.isPlainObject(h)?Z.merge({},h):Z.isArray(h)?h.slice():h}function i(c,h,d,u){if(Z.isUndefined(h)){if(!Z.isUndefined(c))return n(void 0,c,d,u)}else return n(c,h,d,u)}function r(c,h){if(!Z.isUndefined(h))return n(void 0,h)}function o(c,h){if(Z.isUndefined(h)){if(!Z.isUndefined(c))return n(void 0,c)}else return n(void 0,h)}function a(c,h,d){if(d in e)return n(c,h);if(d in s)return n(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,h,d)=>i(Yl(c),Yl(h),d,!0)};return Z.forEach(Object.keys(Object.assign({},s,e)),function(h){const d=l[h]||i,u=d(s[h],e[h],h);Z.isUndefined(u)&&d!==a||(t[h]=u)}),t}const lu=s=>{const e=gi({},s);let{data:t,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:r,headers:o,auth:a}=e;e.headers=o=Dt.from(o),e.url=iu(cu(e.baseURL,e.url),s.params,s.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(Z.isFormData(t)){if(Tt.hasStandardBrowserEnv||Tt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...h]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...h].join("; "))}}if(Tt.hasStandardBrowserEnv&&(n&&Z.isFunction(n)&&(n=n(e)),n||n!==!1&&CM(e.url))){const c=i&&r&&PM.read(r);c&&o.set(i,c)}return e},DM=typeof XMLHttpRequest<"u",UM=DM&&function(s){return new Promise(function(t,n){const i=lu(s);let r=i.data;const o=Dt.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=i,h,d,u,p,m;function _(){p&&p(),m&&m(),i.cancelToken&&i.cancelToken.unsubscribe(h),i.signal&&i.signal.removeEventListener("abort",h)}let g=new XMLHttpRequest;g.open(i.method.toUpperCase(),i.url,!0),g.timeout=i.timeout;function f(){if(!g)return;const v=Dt.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),M={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:v,config:s,request:g};au(function(T){t(T),_()},function(T){n(T),_()},M),g=null}"onloadend"in g?g.onloadend=f:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(f)},g.onabort=function(){g&&(n(new ze("Request aborted",ze.ECONNABORTED,s,g)),g=null)},g.onerror=function(){n(new ze("Network Error",ze.ERR_NETWORK,s,g)),g=null},g.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const M=i.transitional||su;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),n(new ze(S,M.clarifyTimeoutError?ze.ETIMEDOUT:ze.ECONNABORTED,s,g)),g=null},r===void 0&&o.setContentType(null),"setRequestHeader"in g&&Z.forEach(o.toJSON(),function(S,M){g.setRequestHeader(M,S)}),Z.isUndefined(i.withCredentials)||(g.withCredentials=!!i.withCredentials),a&&a!=="json"&&(g.responseType=i.responseType),c&&([u,m]=Pr(c,!0),g.addEventListener("progress",u)),l&&g.upload&&([d,p]=Pr(l),g.upload.addEventListener("progress",d),g.upload.addEventListener("loadend",p)),(i.cancelToken||i.signal)&&(h=v=>{g&&(n(!v||v.type?new us(null,s,g):v),g.abort(),g=null)},i.cancelToken&&i.cancelToken.subscribe(h),i.signal&&(i.signal.aborted?h():i.signal.addEventListener("abort",h)));const x=TM(i.url);if(x&&Tt.protocols.indexOf(x)===-1){n(new ze("Unsupported protocol "+x+":",ze.ERR_BAD_REQUEST,s));return}g.send(r||null)})},NM=(s,e)=>{const{length:t}=s=s?s.filter(Boolean):[];if(e||t){let n=new AbortController,i;const r=function(c){if(!i){i=!0,a();const h=c instanceof Error?c:this.reason;n.abort(h instanceof ze?h:new us(h instanceof Error?h.message:h))}};let o=e&&setTimeout(()=>{o=null,r(new ze(`timeout ${e} of ms exceeded`,ze.ETIMEDOUT))},e);const a=()=>{s&&(o&&clearTimeout(o),o=null,s.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),s=null)};s.forEach(c=>c.addEventListener("abort",r));const{signal:l}=n;return l.unsubscribe=()=>Z.asap(a),l}},FM=function*(s,e){let t=s.byteLength;if(t<e){yield s;return}let n=0,i;for(;n<t;)i=n+e,yield s.slice(n,i),n=i},OM=async function*(s,e){for await(const t of BM(s))yield*FM(t,e)},BM=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const e=s.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},Zl=(s,e,t,n)=>{const i=OM(s,e);let r=0,o,a=l=>{o||(o=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:c,value:h}=await i.next();if(c){a(),l.close();return}let d=h.byteLength;if(t){let u=r+=d;t(u)}l.enqueue(new Uint8Array(h))}catch(c){throw a(c),c}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},jr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",hu=jr&&typeof ReadableStream=="function",zM=jr&&(typeof TextEncoder=="function"?(s=>e=>s.encode(e))(new TextEncoder):async s=>new Uint8Array(await new Response(s).arrayBuffer())),uu=(s,...e)=>{try{return!!s(...e)}catch{return!1}},kM=hu&&uu(()=>{let s=!1;const e=new Request(Tt.origin,{body:new ReadableStream,method:"POST",get duplex(){return s=!0,"half"}}).headers.has("Content-Type");return s&&!e}),Kl=64*1024,da=hu&&uu(()=>Z.isReadableStream(new Response("").body)),Lr={stream:da&&(s=>s.body)};jr&&(s=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Lr[e]&&(Lr[e]=Z.isFunction(s[e])?t=>t[e]():(t,n)=>{throw new ze(`Response type '${e}' is not supported`,ze.ERR_NOT_SUPPORT,n)})})})(new Response);const HM=async s=>{if(s==null)return 0;if(Z.isBlob(s))return s.size;if(Z.isSpecCompliantForm(s))return(await new Request(Tt.origin,{method:"POST",body:s}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(s)||Z.isArrayBuffer(s))return s.byteLength;if(Z.isURLSearchParams(s)&&(s=s+""),Z.isString(s))return(await zM(s)).byteLength},GM=async(s,e)=>{const t=Z.toFiniteNumber(s.getContentLength());return t??HM(e)},VM=jr&&(async s=>{let{url:e,method:t,data:n,signal:i,cancelToken:r,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:h,withCredentials:d="same-origin",fetchOptions:u}=lu(s);c=c?(c+"").toLowerCase():"text";let p=NM([i,r&&r.toAbortSignal()],o),m;const _=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let g;try{if(l&&kM&&t!=="get"&&t!=="head"&&(g=await GM(h,n))!==0){let M=new Request(e,{method:"POST",body:n,duplex:"half"}),w;if(Z.isFormData(n)&&(w=M.headers.get("content-type"))&&h.setContentType(w),M.body){const[T,L]=ql(g,Pr(jl(l)));n=Zl(M.body,Kl,T,L)}}Z.isString(d)||(d=d?"include":"omit");const f="credentials"in Request.prototype;m=new Request(e,{...u,signal:p,method:t.toUpperCase(),headers:h.normalize().toJSON(),body:n,duplex:"half",credentials:f?d:void 0});let x=await fetch(m);const v=da&&(c==="stream"||c==="response");if(da&&(a||v&&_)){const M={};["status","statusText","headers"].forEach(y=>{M[y]=x[y]});const w=Z.toFiniteNumber(x.headers.get("content-length")),[T,L]=a&&ql(w,Pr(jl(a),!0))||[];x=new Response(Zl(x.body,Kl,T,()=>{L&&L(),_&&_()}),M)}c=c||"text";let S=await Lr[Z.findKey(Lr,c)||"text"](x,s);return!v&&_&&_(),await new Promise((M,w)=>{au(M,w,{data:S,headers:Dt.from(x.headers),status:x.status,statusText:x.statusText,config:s,request:m})})}catch(f){throw _&&_(),f&&f.name==="TypeError"&&/fetch/i.test(f.message)?Object.assign(new ze("Network Error",ze.ERR_NETWORK,s,m),{cause:f.cause||f}):ze.from(f,f&&f.code,s,m)}}),fa={http:sM,xhr:UM,fetch:VM};Z.forEach(fa,(s,e)=>{if(s){try{Object.defineProperty(s,"name",{value:e})}catch{}Object.defineProperty(s,"adapterName",{value:e})}});const $l=s=>`- ${s}`,WM=s=>Z.isFunction(s)||s===null||s===!1,du={getAdapter:s=>{s=Z.isArray(s)?s:[s];const{length:e}=s;let t,n;const i={};for(let r=0;r<e;r++){t=s[r];let o;if(n=t,!WM(t)&&(n=fa[(o=String(t)).toLowerCase()],n===void 0))throw new ze(`Unknown adapter '${o}'`);if(n)break;i[o||"#"+r]=n}if(!n){const r=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map($l).join(`
`):" "+$l(r[0]):"as no adapter specified";throw new ze("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return n},adapters:fa};function Zo(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new us(null,s)}function Jl(s){return Zo(s),s.headers=Dt.from(s.headers),s.data=Yo.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),du.getAdapter(s.adapter||zs.adapter)(s).then(function(n){return Zo(s),n.data=Yo.call(s,s.transformResponse,n),n.headers=Dt.from(n.headers),n},function(n){return ou(n)||(Zo(s),n&&n.response&&(n.response.data=Yo.call(s,s.transformResponse,n.response),n.response.headers=Dt.from(n.response.headers))),Promise.reject(n)})}const fu="1.7.9",Yr={};["object","boolean","number","function","string","symbol"].forEach((s,e)=>{Yr[s]=function(n){return typeof n===s||"a"+(e<1?"n ":" ")+s}});const Ql={};Yr.transitional=function(e,t,n){function i(r,o){return"[Axios v"+fu+"] Transitional option '"+r+"'"+o+(n?". "+n:"")}return(r,o,a)=>{if(e===!1)throw new ze(i(o," has been removed"+(t?" in "+t:"")),ze.ERR_DEPRECATED);return t&&!Ql[o]&&(Ql[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};Yr.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function XM(s,e,t){if(typeof s!="object")throw new ze("options must be an object",ze.ERR_BAD_OPTION_VALUE);const n=Object.keys(s);let i=n.length;for(;i-- >0;){const r=n[i],o=e[r];if(o){const a=s[r],l=a===void 0||o(a,r,s);if(l!==!0)throw new ze("option "+r+" must be "+l,ze.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new ze("Unknown option "+r,ze.ERR_BAD_OPTION)}}const br={assertOptions:XM,validators:Yr},un=br.validators;class li{constructor(e){this.defaults=e,this.interceptors={request:new Wl,response:new Wl}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const r=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?r&&!String(n.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+r):n.stack=r}catch{}}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=gi(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;n!==void 0&&br.assertOptions(n,{silentJSONParsing:un.transitional(un.boolean),forcedJSONParsing:un.transitional(un.boolean),clarifyTimeoutError:un.transitional(un.boolean)},!1),i!=null&&(Z.isFunction(i)?t.paramsSerializer={serialize:i}:br.assertOptions(i,{encode:un.function,serialize:un.function},!0)),br.assertOptions(t,{baseUrl:un.spelling("baseURL"),withXsrfToken:un.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&Z.merge(r.common,r[t.method]);r&&Z.forEach(["delete","get","head","post","put","patch","common"],m=>{delete r[m]}),t.headers=Dt.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(t)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let h,d=0,u;if(!l){const m=[Jl.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),u=m.length,h=Promise.resolve(t);d<u;)h=h.then(m[d++],m[d++]);return h}u=a.length;let p=t;for(d=0;d<u;){const m=a[d++],_=a[d++];try{p=m(p)}catch(g){_.call(this,g);break}}try{h=Jl.call(this,p)}catch(m){return Promise.reject(m)}for(d=0,u=c.length;d<u;)h=h.then(c[d++],c[d++]);return h}getUri(e){e=gi(this.defaults,e);const t=cu(e.baseURL,e.url);return iu(t,e.params,e.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(e){li.prototype[e]=function(t,n){return this.request(gi(n||{},{method:e,url:t,data:(n||{}).data}))}});Z.forEach(["post","put","patch"],function(e){function t(n){return function(r,o,a){return this.request(gi(a||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}li.prototype[e]=t(),li.prototype[e+"Form"]=t(!0)});class La{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const n=this;this.promise.then(i=>{if(!n._listeners)return;let r=n._listeners.length;for(;r-- >0;)n._listeners[r](i);n._listeners=null}),this.promise.then=i=>{let r;const o=new Promise(a=>{n.subscribe(a),r=a}).then(i);return o.cancel=function(){n.unsubscribe(r)},o},e(function(r,o,a){n.reason||(n.reason=new us(r,o,a),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=n=>{e.abort(n)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new La(function(i){e=i}),cancel:e}}}function qM(s){return function(t){return s.apply(null,t)}}function jM(s){return Z.isObject(s)&&s.isAxiosError===!0}const pa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pa).forEach(([s,e])=>{pa[e]=s});function pu(s){const e=new li(s),t=Xh(li.prototype.request,e);return Z.extend(t,li.prototype,e,{allOwnKeys:!0}),Z.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return pu(gi(s,i))},t}const tt=pu(zs);tt.Axios=li;tt.CanceledError=us;tt.CancelToken=La;tt.isCancel=ou;tt.VERSION=fu;tt.toFormData=qr;tt.AxiosError=ze;tt.Cancel=tt.CanceledError;tt.all=function(e){return Promise.all(e)};tt.spread=qM;tt.isAxiosError=jM;tt.mergeConfig=gi;tt.AxiosHeaders=Dt;tt.formToJSON=s=>ru(Z.isHTMLForm(s)?new FormData(s):s);tt.getAdapter=du.getAdapter;tt.HttpStatusCode=pa;tt.default=tt;class YM extends v_{constructor(e){super(e),this.type=Ln}parse(e){const a=function(v,S){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(S||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(S||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(S||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(S||""))}return-1},d=`
`,u=function(v,S,M){S=S||1024;let T=v.pos,L=-1,y=0,b="",U=String.fromCharCode.apply(null,new Uint16Array(v.subarray(T,T+128)));for(;0>(L=U.indexOf(d))&&y<S&&T<v.byteLength;)b+=U,y+=U.length,T+=128,U+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(T,T+128)));return-1<L?(v.pos+=y+L+1,b+U.slice(0,L)):!1},p=function(v){const S=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,y={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let b,U;if(v.pos>=v.byteLength||!(b=u(v)))return a(1,"no header found");if(!(U=b.match(S)))return a(3,"bad initial token");for(y.valid|=1,y.programtype=U[1],y.string+=b+`
`;b=u(v),b!==!1;){if(y.string+=b+`
`,b.charAt(0)==="#"){y.comments+=b+`
`;continue}if((U=b.match(M))&&(y.gamma=parseFloat(U[1])),(U=b.match(w))&&(y.exposure=parseFloat(U[1])),(U=b.match(T))&&(y.valid|=2,y.format=U[1]),(U=b.match(L))&&(y.valid|=4,y.height=parseInt(U[1],10),y.width=parseInt(U[2],10)),y.valid&2&&y.valid&4)break}return y.valid&2?y.valid&4?y:a(3,"missing image size specifier"):a(3,"missing format specifier")},m=function(v,S,M){const w=S;if(w<8||w>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(w!==(v[2]<<8|v[3]))return a(3,"wrong scanline width");const T=new Uint8Array(4*S*M);if(!T.length)return a(4,"unable to allocate buffer space");let L=0,y=0;const b=4*w,U=new Uint8Array(4),H=new Uint8Array(b);let C=M;for(;C>0&&y<v.byteLength;){if(y+4>v.byteLength)return a(1);if(U[0]=v[y++],U[1]=v[y++],U[2]=v[y++],U[3]=v[y++],U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=w)return a(3,"bad rgbe scanline format");let I=0,D;for(;I<b&&y<v.byteLength;){D=v[y++];const V=D>128;if(V&&(D-=128),D===0||I+D>b)return a(3,"bad scanline data");if(V){const k=v[y++];for(let X=0;X<D;X++)H[I++]=k}else H.set(v.subarray(y,y+D),I),I+=D,y+=D}const F=w;for(let V=0;V<F;V++){let k=0;T[L]=H[V+k],k+=w,T[L+1]=H[V+k],k+=w,T[L+2]=H[V+k],k+=w,T[L+3]=H[V+k],L+=4}C--}return T},_=function(v,S,M,w){const T=v[S+3],L=Math.pow(2,T-128)/255;M[w+0]=v[S+0]*L,M[w+1]=v[S+1]*L,M[w+2]=v[S+2]*L,M[w+3]=1},g=function(v,S,M,w){const T=v[S+3],L=Math.pow(2,T-128)/255;M[w+0]=Ks.toHalfFloat(Math.min(v[S+0]*L,65504)),M[w+1]=Ks.toHalfFloat(Math.min(v[S+1]*L,65504)),M[w+2]=Ks.toHalfFloat(Math.min(v[S+2]*L,65504)),M[w+3]=Ks.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;const x=p(f);if(x!==-1){const v=x.width,S=x.height,M=m(f.subarray(f.pos),v,S);if(M!==-1){let w,T,L;switch(this.type){case pn:L=M.length/4;const y=new Float32Array(L*4);for(let U=0;U<L;U++)_(M,U*4,y,U*4);w=y,T=pn;break;case Ln:L=M.length/4;const b=new Uint16Array(L*4);for(let U=0;U<L;U++)g(M,U*4,b,U*4);w=b,T=Ln;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:S,data:w,header:x.string,gamma:x.gamma,exposure:x.exposure,type:T}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case pn:case Ln:o.colorSpace=nn,o.minFilter=St,o.magFilter=St,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}const it=new D0;it.background=new Oe(11184810);const In=new Bt(75,window.innerWidth/window.innerHeight,.1,1e3);In.position.set(300,10,300);const Nn=new Bt(75,window.innerWidth/window.innerHeight,.1,1e4);Nn.position.set(1200,500,1800);Nn.lookAt(1e3,0,1e3);Nn.updateProjectionMatrix();let Rs=Nn;const vi=new bh({alpha:!0,antialias:!0,powerPreference:"high-performance"});vi.setSize(window.innerWidth,window.innerHeight);vi.setClearColor(0,0);document.body.appendChild(vi.domElement);const ZM=new S_(16777215,.3);it.add(ZM);const mu=new M_(16777215,1);mu.position.set(10,10,10);it.add(mu);const KM=new YM;KM.load("./textures/sunflowers_puresky_4k.hdr",s=>{s.mapping=Ar,it.background=s,it.environment=s});const $M=new Nh,Zr=$M.load("./textures/4K-concrete_41.jpg-diffuse.jpg");Zr.wrapS=ts;Zr.wrapT=ts;Zr.repeat.set(500,500);const eh=1e3,JM=new Br(eh,eh),gu=new fi({map:Zr,side:fn,transparent:!0,opacity:1}),Ia=new st(JM,gu);Ia.position.set(500,-.1,500);Ia.rotation.x=-Math.PI/2;it.add(Ia);const Ir=new C_(In,vi.domElement),Fn=new b_(Nn,vi.domElement);Fn.enableDamping=!1;Fn.dampingFactor=.05;Fn.screenSpacePanning=!0;Fn.enableZoom=!0;Fn.minDistance=50;Fn.maxDistance=1500;const qn=new ly;qn.gravity.set(0,-9.82,0);const _u=new ls;_u.restitution=0;_u.friction=1;const Da=new xe({mass:0,material:gu,shape:new Xv});Da.quaternion.setFromEuler(-Math.PI/2,0,0);qn.addBody(Da);const Ua=new ls;Ua.restitution=0;Ua.friction=.8;const QM=new Wv(.5,.5,3,8),kt=new xe({mass:1,material:Ua,position:new E(300,10,300)});kt.addShape(QM);kt.addEventListener("collide",function(s){s.body===Da&&(kt.velocity.y=Math.max(kt.velocity.y,0))});const eS=3;qn.addEventListener("postStep",function(){kt.position.y=eS,kt.velocity.y=0});qn.addBody(kt);const Xi={};window.addEventListener("keydown",s=>Xi[s.code]=!0);window.addEventListener("keyup",s=>Xi[s.code]=!1);document.addEventListener("dblclick",()=>{Ir.lock()});const qi=20;kt.velocity.length()>qi&&kt.velocity.scale(qi/kt.velocity.length(),kt.velocity);const vu=document.getElementById("cameraSelect");vu.value="globalCamera";vu.addEventListener("change",s=>{const e=s.target.value;e==="firstPersonCamera"?(Rs=In,Fn.enabled=!1,Ir.lock()):e==="globalCamera"&&(Rs=Nn,Fn.enabled=!0,Ir.unlock())});function xu(){if(requestAnimationFrame(xu),qn.step(1/120),Rs===In&&Ir.isLocked){const s=kt.velocity;s.x=0,s.z=0;const e=new B;In.getWorldDirection(e),e.y=0,e.normalize();const t=new B;t.crossVectors(In.up,e).normalize(),Xi.KeyW&&s.vadd(e.multiplyScalar(qi),s),Xi.KeyS&&s.vadd(e.multiplyScalar(-qi),s),Xi.KeyA&&s.vadd(t.multiplyScalar(-qi),s),Xi.KeyD&&s.vadd(t.multiplyScalar(qi),s)}In.position.copy(kt.position),Rs===Nn&&Fn.update(),vi.render(it,Rs)}window.addEventListener("resize",()=>{In.aspect=window.innerWidth/window.innerHeight,In.updateProjectionMatrix(),Nn.aspect=window.innerWidth/window.innerHeight,Nn.updateProjectionMatrix(),vi.setSize(window.innerWidth,window.innerHeight)});xu();const Dr={20:{width:9.4,height:11,depth:24.4,bayOffset:1},40:{width:9.4,height:11,depth:48.8,bayOffset:2}};tt.defaults.withCredentials=!0;var Kr,Tr,yu,Mu=47,Su=13918691207;Ur("companyId")!=null&&(Mu=Ur("companyId"));Ur("loginId")!=null&&(Su=Ur("loginId"));function Ur(s){return new URL(window.location.href).searchParams.get(s)}await cS(Mu,Su);await lS();await hS();function tS(s,e){const{X:t,Y:n,ZoneDirection:i,XDirection:r,YDirection:o,X1:a,Y1:l,Color:c,Name:h}=s,d=2.5*10,u=10,p=new Oe(c||16777215),m=new bs({color:p,linewidth:20,opacity:.6,transparent:!0}),_=new Gt,g=[],f=a||0,x=l||0;let v,S;if(i===!1){v=d,S=u;for(let I=0;I<=n;I++){const D=x+I*S,F=f,V=f+t*v;g.push(F,.1,D,V,.1,D)}for(let I=0;I<=t;I++){const D=f+I*v,F=x,V=x+n*S;g.push(D,.1,F,D,.1,V)}}else{v=u,S=d;for(let I=0;I<=t;I++){const D=x+I*S,F=f,V=f+n*v;g.push(F,.1,D,V,.1,D)}for(let I=0;I<=n;I++){const D=f+I*v,F=x,V=x+t*S;g.push(D,.1,F,D,.1,V)}}_.setAttribute("position",new vt(g,3));const M=new sa(_,m);if(it.add(M),h){var w,T;i===!1?(w=f+t*v/2,T=x+n*S/2):(w=f+n*v/2,T=x+t*S/2),new Aa().load("./src/font/FangSong_Regular.json",function(D){const F=new Ds(h,{font:D,size:10,height:.1}),V=new fi({color:12257280}),k=new Ds(h,{font:D,size:10,height:.1}),X=new fi({color:16777215,side:Pt}),ee=new st(F,V),le=new st(k,X);le.scale.set(1.05,1.05,1.05),ee.position.set(w,.1,T),le.position.set(w,.1,T),ee.rotation.x=-Math.PI/2,le.rotation.x=-Math.PI/2,it.add(le),it.add(ee)},void 0,function(D){console.error("字体加载失败",D)})}for(var L=[],y=[],b=0;b<e.length;b++)e[b].ContainerType.startsWith("20")?y.push(e[b]):e[b].ContainerType.startsWith("40")&&L.push(e[b]);y.forEach(I=>{nS(I,s)});for(var U=[],b=0;b<L.length;b++){for(var H=-1,C=0;C<U.length;C++)U[C].CntrNo==L[b].CntrNo&&(H=C);H==-1?(L[b].FX=[{X:L[b].X,Y:L[b].Y}],U.push(L[b])):U[H].FX.push({X:L[b].X,Y:L[b].Y})}U.forEach(I=>{iS(I,s)})}function nS(s,e){const{X:t,Y:n,Z:i,ContainerType:r,Color:o,CntrNo:a}=s,{width:l,height:c,depth:h}=Dr[r.substring(0,2)]||Dr[20];let d=0,u,p,m;e.ZoneDirection===!1?(d=Math.PI/2,e.XDirection==!1?e.YDirection==!1?(u=e.X1+(t-1)*25+12.5,p=(i-1)*c+c/2,m=e.Y1+(e.Y-n)*10+5):(u=e.X1+(t-1)*25+12.5,p=(i-1)*c+c/2,m=e.Y1+(n-1)*10+5):e.YDirection==!1?(u=e.X1+(e.X-t)*25+12.5,p=(i-1)*c+c/2,m=e.Y1+(e.Y-n)*10+5):(u=e.X1+(e.X-t)*25+12.5,p=(i-1)*c+c/2,m=e.Y1+(n-1)*10+5)):e.XDirection==!1?e.YDirection==!1?(u=e.X1+(e.Y-n)*10+5,p=(i-1)*c+c/2,m=e.Y1+(t-1)*25+12.5):(u=e.X1+(n-1)*10+5,p=(i-1)*c+c/2,m=e.Y1+(t-1)*25+12.5):e.YDirection==!1?(u=e.X1+(e.Y-n)*10+5,p=(i-1)*c+c/2,m=e.Y1+(e.X-t)*25+12.5):(u=e.X1+(n-1)*10+5,p=(i-1)*c+c/2,m=e.Y1+(e.X-t)*25+12.5),Eu("40box",function(_){const g=new Xn().setFromObject(_),f=l/(g.max.x-g.min.x),x=c/(g.max.y-g.min.y),v=h/(g.max.z-g.min.z);_.scale.set(f,x,v);const S=g.min.y*x,M=p-S-5.5;_.position.set(u,M,m),_.rotation.y=d,_.code=a,_.IsBox=!0,_.traverse(L=>{L.isMesh&&(L.name.includes("LBR")?L.material.color.set(13023140):L.material=new Ea({color:new Oe(o||"#ffffff")}))}),it.add(_);const w=new cs(new E(l/2,c/2,h/2)),T=new xe({mass:0,position:new E(u,M,m),shape:w});T.quaternion.setFromAxisAngle(new E(0,1,0),d),_.userData={body:T},qn.addBody(T),wu(function(L){const y=new Ds(a,{font:L,size:2,height:.1}),b=new st(y,Ji),U=l/2+1;if(e.ZoneDirection){b.position.set(u-U+1,M+c/2-2,m-8),b.rotation.y=d-Math.PI/2,it.add(b);const H=new st(y,Ji);H.position.set(u+U-1,M+c/2-2,m+8),H.rotation.y=d+Math.PI/2,it.add(H)}else{b.position.set(u-U+13,M+c/2-2,m-5),b.rotation.y=d+Math.PI/2,it.add(b);const H=new st(y,Ji);H.position.set(u+U-13,M+c/2-2,m+5),H.rotation.y=d-Math.PI/2,it.add(H)}})})}const Ko={};function Eu(s,e){if(Ko[s])e(Ko[s].clone());else{const t=new D_,n=new k_;t.load("./3dmodel/"+s+".mtl",function(i){i.preload(),n.setMaterials(i),n.load("./3dmodel/"+s+".obj",function(r){r.traverse(function(o){o.isMesh&&(o.material=new Ea({color:13421772,metalness:.9,roughness:.1,envMap:it.environment,envMapIntensity:1}))}),Ko[s]=r,e(r.clone())})})}}let $o=null;function wu(s){if($o){s($o);return}new Aa().load("./src/font/FangSong_Regular.json",function(t){$o=t,s(t)})}const Ji=new fi({color:16777215});function iS(s,e){for(var{X:t,Y:n,Z:i,ContainerType:r,Color:o,CntrNo:a,FX:l}=s,c=0;c<l.length;c++)t>l[t]&&(t=l[t]),n>l[n]&&(n=l[n]);const{width:h,height:d,depth:u}=Dr[r.substring(0,2)]||Dr[20];let p=0,m,_,g;e.ZoneDirection===!1?(p=Math.PI/2,e.XDirection==!1?e.YDirection==!1?(m=e.X1+(t-1)*25+25,_=(i-1)*d+d/2,g=e.Y1+(e.Y-n)*10+5):(m=e.X1+(t-1)*25+25,_=(i-1)*d+d/2,g=e.Y1+(n-1)*10+5):e.YDirection==!1?(m=e.X1+(e.X-t)*25,_=(i-1)*d+d/2,g=e.Y1+(e.Y-n)*10+5):(m=e.X1+(e.X-t)*25,_=(i-1)*d+d/2,g=e.Y1+(n-1)*10+5)):e.XDirection==!1?e.YDirection==!1?(m=e.X1+(e.Y-n)*10+5,_=(i-1)*d+d/2,g=e.Y1+(t-1)*25+25):(m=e.X1+(n-1)*10+5,_=(i-1)*d+d/2,g=e.Y1+(t-1)*25+25):e.YDirection==!1?(m=e.X1+(e.Y-n)*10+5,_=(i-1)*d+d/2,g=e.Y1+(e.X-t)*25):(m=e.X1+(n-1)*10+5,_=(i-1)*d+d/2,g=e.Y1+(e.X-t)*25),Eu("40box",function(f){const x=new Xn().setFromObject(f),v=h/(x.max.x-x.min.x),S=d/(x.max.y-x.min.y),M=u/(x.max.z-x.min.z);f.scale.set(v,S,M);const w=x.min.y*S,T=_-w-5.5;f.position.set(m,T,g),f.rotation.y=p,f.traverse(b=>{b.isMesh&&(b.name.includes("LBR")?b.material.color.set(13023140):b.material=new Ea({color:new Oe(o||"#ffffff")}))}),it.add(f);const L=new cs(new E(h/2,d/2,u/2)),y=new xe({mass:0,position:new E(m,T,g),shape:L});y.quaternion.setFromAxisAngle(new E(0,1,0),p),f.userData={body:y},qn.addBody(y),wu(function(b){const U=new Ds(a,{font:b,size:2,height:.1}),H=new st(U,Ji),C=h/2+1;if(e.ZoneDirection){H.position.set(m-C+1,T+d/2-2,g-8),H.rotation.y=p-Math.PI/2,it.add(H);const I=new st(U,Ji);I.position.set(m+C-1,T+d/2-2,g+8),I.rotation.y=p+Math.PI/2,it.add(I)}else{H.position.set(m-C+13,T+d/2-2,g-5),H.rotation.y=p+Math.PI/2,it.add(H);const I=new st(U,Ji);I.position.set(m+C-13,T+d/2-2,g+5),I.rotation.y=p-Math.PI/2,it.add(I)}})})}function sS(s){return new Promise(e=>setTimeout(e,s))}async function rS(){for(var s=0;s<Tr.rows.length;s++){await sS(50);var e=await uS(Tr.rows[s].Id);tS(Tr.rows[s],e)}}rS();function oS(s,e,t){s.forEach(n=>{n.High==0&&(n.High=3);const i=n.X2-n.X1,r=n.Y2-n.Y1,o=n.High*5,a=(n.X1+n.X2)/2,l=(n.Y1+n.Y2)/2,c=new os(i,o,r),h=new p_({color:new Oe(n.Color),opacity:.7,transparent:!0}),d=new st(c,h);d.position.set(a,o/2,l),n.Name&&aS(d,n.Name),e.add(d);const u=new cs(new E(i/2,o/2,r/2)),p=new xe({mass:0,shape:u,position:new E(a,o/2,l)});t.addBody(p)})}function aS(s,e){new Aa().load("./src/font/FangSong_Regular.json",function(n){const i=new fi({color:16777215}),r={font:n,size:10,height:.2,curveSegments:12},o=new Xn().setFromObject(s),a=o.max.x-o.min.x,l=o.max.y-o.min.y,c=o.max.z-o.min.z;function h(g,f,x){const v=new Ds(g,r);v.computeBoundingBox();const S=v.boundingBox,M=S.max.y-S.min.y;f.y-=M/2;const w=new st(v,i);return w.position.set(f.x,f.y,f.z),w.rotation.set(x.x,x.y,x.z),w}const d=h(e,{x:0,y:l,z:0},{x:-Math.PI/2,y:0,z:0});s.add(d);const u=h(e,{x:0,y:0,z:c/2+.2},{x:0,y:0,z:0});s.add(u);const p=h(e,{x:0,y:0,z:-c/2-.2},{x:0,y:Math.PI,z:0});s.add(p);const m=h(e,{x:-a/2-.2,y:0,z:0},{x:0,y:Math.PI/2,z:0});s.add(m);const _=h(e,{x:a/2+.2,y:0,z:0},{x:0,y:-Math.PI/2,z:0});s.add(_)})}oS(yu,it,qn);async function cS(s,e){try{Kr=(await tt.get("/Api/Backend/YAD/YardDashboard.ashx",{params:{act:"GetCompanyInfo",companyId:s,loginId:e},withCredentials:!0})).data.token}catch(t){console.error("请求失败:",t)}}async function lS(){try{Tr=(await tt.get("/Api/Backend/YAD/YardDashboard.ashx",{params:{act:"ZoneQuery"},headers:{Authorization:`${Kr}`},withCredentials:!0})).data}catch(s){console.error("请求失败:",s)}}async function hS(){try{yu=(await tt.get("/Api/Backend/YAD/YardDashboard.ashx",{params:{act:"ZoneGetCommonArea"},headers:{Authorization:`${Kr}`},withCredentials:!0})).data}catch(s){console.error("请求失败:",s)}}async function uS(s){try{return(await tt.get("/Api/Backend/YAD/YardDashboard.ashx",{params:{act:"ZoneQueryContainerInZoneCell",id:s},headers:{Authorization:`${Kr}`},withCredentials:!0})).data}catch(e){console.error("请求失败:",e)}}document.getElementById("searchBtn").addEventListener("click",function(){const s=document.getElementById("boxNumber").value;s&&bu(s)});document.getElementById("cancelBtn").addEventListener("click",function(){document.getElementById("boxNumber").value="",bu("")});function bu(s){it.traverse(e=>{e.IsBox&&e instanceof Vi&&e.children.forEach(t=>{t instanceof st&&t.material&&(s&&e.code!==s?(t.material.transparent=!0,t.material.opacity=.1):(t.material.transparent=!1,t.material.opacity=1))})})}
