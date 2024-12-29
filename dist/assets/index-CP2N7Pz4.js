(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="152",xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,Ba=1,Pu=2,eh=1,Lu=2,Cn=3,Un=0,Pe=1,fn=2,Vn=0,ji=1,za=2,ka=3,Ha=4,Iu=5,Hi=100,Du=101,Uu=102,Ga=103,Va=104,Nu=200,Fu=201,Ou=202,Bu=203,nh=204,ih=205,zu=206,ku=207,Hu=208,Gu=209,Vu=210,Wu=0,Xu=1,qu=2,Qo=3,ju=4,Yu=5,Zu=6,Ku=7,Nr=0,$u=1,Ju=2,Dn=0,Qu=1,td=2,ed=3,nd=4,id=5,sh=300,Qi=301,ts=302,Ar=303,ta=304,Fr=306,es=1e3,ze=1001,ea=1002,Me=1003,Wa=1004,no=1005,Se=1006,sd=1007,ns=1008,hi=1009,rd=1010,od=1011,rh=1012,ad=1013,si=1014,pn=1015,Ln=1016,cd=1017,ld=1018,Yi=1020,hd=1021,tn=1023,ud=1024,dd=1025,oi=1026,is=1027,fd=1028,pd=1029,md=1030,gd=1031,_d=1033,io=33776,so=33777,ro=33778,oo=33779,Xa=35840,qa=35841,ja=35842,Ya=35843,vd=36196,Za=37492,Ka=37496,$a=37808,Ja=37809,Qa=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,cc=37819,lc=37820,hc=37821,ao=36492,xd=36283,uc=36284,dc=36285,fc=36286,oh=3e3,ai=3001,yd=3200,Md=3201,Or=0,Sd=1,ci="",kt="srgb",nn="srgb-linear",ah="display-p3",co=7680,Ed=519,pc=35044,mc="300 es",na=1035;class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lo=Math.PI/180,ia=180/Math.PI;function rs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function _e(s,t,e){return Math.max(t,Math.min(e,s))}function wd(s,t){return(s%t+t)%t}function ho(s,t,e){return(1-e)*s+e*t}function gc(s){return(s&s-1)===0&&s!==0}function bd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hs(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],_=i[0],g=i[3],f=i[6],x=i[1],v=i[4],S=i[7],M=i[2],w=i[5],T=i[8];return r[0]=o*_+a*x+l*M,r[3]=o*g+a*v+l*w,r[6]=o*f+a*S+l*T,r[1]=c*_+h*x+d*M,r[4]=c*g+h*v+d*w,r[7]=c*f+h*S+d*T,r[2]=u*_+p*x+m*M,r[5]=u*g+p*v+m*w,r[8]=u*f+p*S+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,m=e*d+n*u+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(uo.makeScale(t,e)),this}rotate(t){return this.premultiply(uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(uo.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new jt;function ch(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const _c={};function ws(s){s in _c||(_c[s]=!0,console.warn(s))}function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Td=new jt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ad=new jt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Rd(s){return s.convertSRGBToLinear().applyMatrix3(Ad)}function Cd(s){return s.applyMatrix3(Td).convertLinearToSRGB()}const Pd={[nn]:s=>s,[kt]:s=>s.convertSRGBToLinear(),[ah]:Rd},Ld={[nn]:s=>s,[kt]:s=>s.convertLinearToSRGB(),[ah]:Cd},Ye={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return nn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Pd[t],i=Ld[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let Mi;class lh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=Cs("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class hh{constructor(t=null){this.isSource=!0,this.uuid=rs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(po(i[o].image)):r.push(po(i[o]))}else r=po(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function po(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0;class Le extends Wn{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=ze,i=ze,r=Se,o=ns,a=tn,l=hi,c=Le.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=rs(),this.name="",this.source=new hh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ai?kt:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?ai:oh}set encoding(t){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ai?kt:ci}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=sh;Le.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],m=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(p+1)/2,M=(f+1)/2,w=(h+u)/4,T=(d+_)/4,L=(m+g)/4;return v>S&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=T/n):S>M?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=L/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=T/r,i=L/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends Wn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?kt:ci),this.texture=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Se,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uh extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let di=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=m,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==m){let g=1-a;const f=l*u+c*p+h*m+d*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,f*x);g=Math.sin(g*w)/M,a=Math.sin(a*w)/M}const S=a*x;if(l=l*g+u*S,c=c*g+p*S,h=h*g+m*S,d=d*g+_*S,g===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*p-c*u,t[e+1]=l*m+h*u+c*d-a*p,t[e+2]=c*m+h*p+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),p=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"YZX":this._x=u*h*d+c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d-u*p*m;break;case"XZY":this._x=u*h*d-c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-r*i,d=l*i+r*n-o*e,u=-r*e-o*n-a*i;return this.x=c*l+u*-r+h*-a-d*-o,this.y=h*l+u*-o+d*-r-c*-a,this.z=d*l+u*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new B,vc=new di;class Xn{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Si.copy(t.boundingBox),Si.applyMatrix4(t.matrixWorld),this.union(Si);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)vn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(vn)}else i.boundingBox===null&&i.computeBoundingBox(),Si.copy(i.boundingBox),Si.applyMatrix4(t.matrixWorld),this.union(Si)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Gs.subVectors(this.max,fs),Ei.subVectors(t.a,fs),wi.subVectors(t.b,fs),bi.subVectors(t.c,fs),Bn.subVectors(wi,Ei),zn.subVectors(bi,wi),Kn.subVectors(Ei,bi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Kn.z,Kn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Kn.z,0,-Kn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Kn.y,Kn.x,0];return!go(e,Ei,wi,bi,Gs)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Ei,wi,bi,Gs))?!1:(Vs.crossVectors(Bn,zn),e=[Vs.x,Vs.y,Vs.z],go(e,Ei,wi,bi,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new B,new B,new B,new B,new B,new B,new B,new B],vn=new B,Si=new Xn,Ei=new B,wi=new B,bi=new B,Bn=new B,zn=new B,Kn=new B,fs=new B,Gs=new B,Vs=new B,$n=new B;function go(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){$n.fromArray(s,r);const a=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ud=new Xn,ps=new B,_o=new B;class Ns{constructor(t=new B,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(_o)),this.expandByPoint(ps.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new B,vo=new B,Ws=new B,kn=new B,xo=new B,Xs=new B,yo=new B;let _a=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vo.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(vo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ws),a=kn.dot(this.direction),l=-kn.dot(Ws),c=kn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(vo).addScaledVector(Ws,u),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,i,r){xo.subVectors(e,t),Xs.subVectors(n,t),yo.crossVectors(xo,Xs);let o=this.direction.dot(yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(Xs.crossVectors(kn,Xs));if(l<0)return null;const c=a*this.direction.dot(xo.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(yo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class re{constructor(){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,l,c,h,d,u,p,m,_,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+m,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,p=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Fd)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Hn.crossVectors(n,Fe),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Hn.crossVectors(n,Fe)),Hn.normalize(),qs.crossVectors(Fe,Hn),i[0]=Hn.x,i[4]=qs.x,i[8]=Fe.x,i[1]=Hn.y,i[5]=qs.y,i[9]=Fe.y,i[2]=Hn.z,i[6]=qs.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],_=n[6],g=n[10],f=n[14],x=n[3],v=n[7],S=n[11],M=n[15],w=i[0],T=i[4],L=i[8],y=i[12],b=i[1],U=i[5],H=i[9],C=i[13],I=i[2],D=i[6],F=i[10],V=i[14],k=i[3],X=i[7],tt=i[11],ht=i[15];return r[0]=o*w+a*b+l*I+c*k,r[4]=o*T+a*U+l*D+c*X,r[8]=o*L+a*H+l*F+c*tt,r[12]=o*y+a*C+l*V+c*ht,r[1]=h*w+d*b+u*I+p*k,r[5]=h*T+d*U+u*D+p*X,r[9]=h*L+d*H+u*F+p*tt,r[13]=h*y+d*C+u*V+p*ht,r[2]=m*w+_*b+g*I+f*k,r[6]=m*T+_*U+g*D+f*X,r[10]=m*L+_*H+g*F+f*tt,r[14]=m*y+_*C+g*V+f*ht,r[3]=x*w+v*b+S*I+M*k,r[7]=x*T+v*U+S*D+M*X,r[11]=x*L+v*H+S*F+M*tt,r[15]=x*y+v*C+S*V+M*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],m=t[3],_=t[7],g=t[11],f=t[15];return m*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*p-n*l*p)+_*(+e*l*p-e*c*u+r*o*u-i*o*p+i*c*h-r*l*h)+g*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],m=t[12],_=t[13],g=t[14],f=t[15],x=d*g*c-_*u*c+_*l*p-a*g*p-d*l*f+a*u*f,v=m*u*c-h*g*c-m*l*p+o*g*p+h*l*f-o*u*f,S=h*_*c-m*d*c+m*a*p-o*_*p-h*a*f+o*d*f,M=m*d*l-h*_*l-m*a*u+o*_*u+h*a*g-o*d*g,w=e*x+n*v+i*S+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=x*T,t[1]=(_*u*r-d*g*r-_*i*p+n*g*p+d*i*f-n*u*f)*T,t[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*f+n*l*f)*T,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*p-n*l*p)*T,t[4]=v*T,t[5]=(h*g*r-m*u*r+m*i*p-e*g*p-h*i*f+e*u*f)*T,t[6]=(m*l*r-o*g*r-m*i*c+e*g*c+o*i*f-e*l*f)*T,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*p+e*l*p)*T,t[8]=S*T,t[9]=(m*d*r-h*_*r-m*n*p+e*_*p+h*n*f-e*d*f)*T,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*T,t[12]=M*T,t[13]=(h*_*i-m*d*i+m*n*u-e*_*u-h*n*g+e*d*g)*T,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*T,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,m=r*d,_=o*h,g=o*d,f=a*d,x=l*c,v=l*h,S=l*d,M=n.x,w=n.y,T=n.z;return i[0]=(1-(_+f))*M,i[1]=(p+S)*M,i[2]=(m-v)*M,i[3]=0,i[4]=(p-S)*w,i[5]=(1-(u+f))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(m+v)*T,i[9]=(g-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ti.set(i[0],i[1],i[2]).length();const o=Ti.set(i[4],i[5],i[6]).length(),a=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const c=1/r,h=1/o,d=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-r),d=(e+t)*l,u=(n+i)*c,p=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new B,Ze=new re,Nd=new B(0,0,0),Fd=new B(1,1,1),Hn=new B,qs=new B,Fe=new B,xc=new re,yc=new di;class Fs{constructor(t=0,e=0,n=0,i=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Od=0;const Mc=new B,Ai=new di,yn=new re,js=new B,ms=new B,Bd=new B,zd=new di,Sc=new B(1,0,0),Ec=new B(0,1,0),wc=new B(0,0,1),kd={type:"added"},bc={type:"removed"};class ye extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new B,e=new Fs,n=new di,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new jt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ms,js,this.up):yn.lookAt(js,ms,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(yn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(bc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new B(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new B,Mn=new B,Mo=new B,Sn=new B,Ri=new B,Ci=new B,Tc=new B,So=new B,Eo=new B,wo=new B;let Ys=!1;class Qe{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),Mn.subVectors(n,e),Mo.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(Mn),l=Ke.dot(Mo),c=Mn.dot(Mn),h=Mn.dot(Mo),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const u=1/d,p=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,i,r,o,a,l){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Sn),l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),Mn.subVectors(t,e),Ke.cross(Mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Ke.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ri.subVectors(i,n),Ci.subVectors(r,n),So.subVectors(t,n);const l=Ri.dot(So),c=Ci.dot(So);if(l<=0&&c<=0)return e.copy(n);Eo.subVectors(t,i);const h=Ri.dot(Eo),d=Ci.dot(Eo);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ri,o);wo.subVectors(t,r);const p=Ri.dot(wo),m=Ci.dot(wo);if(m>=0&&p<=m)return e.copy(r);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ci,a);const g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return Tc.subVectors(r,i),a=(d-h)/(d-h+(p-m)),e.copy(i).addScaledVector(Tc,a);const f=1/(g+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Hd=0,sn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=ji,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function bo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ye.workingColorSpace){if(t=wd(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bo(o,r,t+1/3),this.g=bo(o,r,t),this.b=bo(o,r,t-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(t,e=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kt){const n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kt){return Ye.fromWorkingColorSpace(be.copy(this),t),Math.round(_e(be.r*255,0,255))*65536+Math.round(_e(be.g*255,0,255))*256+Math.round(_e(be.b*255,0,255))}getHexString(t=kt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ye.workingColorSpace){Ye.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=kt){Ye.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==kt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($e),$e.h+=t,$e.s+=e,$e.l+=n,this.setHSL($e.h,$e.s,$e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($e),t.getHSL(Zs);const n=ho($e.h,Zs.h,e),i=ho($e.s,Zs.s,e),r=ho($e.l,Zs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Ot;Ot.NAMES=fh;class fi extends sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pn=Gd();function Gd(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Vd(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=_e(s,-65504,65504),Pn.floatView[0]=s;const t=Pn.uint32View[0],e=t>>23&511;return Pn.baseTable[e]+((t&8388607)>>Pn.shiftTable[e])}function Wd(s){const t=s>>10;return Pn.uint32View[0]=Pn.mantissaTable[Pn.offsetTable[t]+(s&1023)]+Pn.exponentTable[t],Pn.floatView[0]}const Ks={toHalfFloat:Vd,fromHalfFloat:Wd},le=new B,$s=new dt;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ph extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mh extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xd=0;const Xe=new re,To=new ye,Pi=new B,Oe=new Xn,gs=new Xn,ge=new B;class Ge extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ch(t)?mh:ph)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Oe.min,gs.min),Oe.expandByPoint(ge),ge.addVectors(Oe.max,gs.max),Oe.expandByPoint(ge)):(Oe.expandByPoint(gs.min),Oe.expandByPoint(gs.max))}Oe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ge.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(t,c),ge.add(Pi)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new B,h[b]=new B;const d=new B,u=new B,p=new B,m=new dt,_=new dt,g=new dt,f=new B,x=new B;function v(b,U,H){d.fromArray(i,b*3),u.fromArray(i,U*3),p.fromArray(i,H*3),m.fromArray(o,b*2),_.fromArray(o,U*2),g.fromArray(o,H*2),u.sub(d),p.sub(d),_.sub(m),g.sub(m);const C=1/(_.x*g.y-g.x*_.y);isFinite(C)&&(f.copy(u).multiplyScalar(g.y).addScaledVector(p,-_.y).multiplyScalar(C),x.copy(p).multiplyScalar(_.x).addScaledVector(u,-g.x).multiplyScalar(C),c[b].add(f),c[U].add(f),c[H].add(f),h[b].add(x),h[U].add(x),h[H].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,U=S.length;b<U;++b){const H=S[b],C=H.start,I=H.count;for(let D=C,F=C+I;D<F;D+=3)v(n[D+0],n[D+1],n[D+2])}const M=new B,w=new B,T=new B,L=new B;function y(b){T.fromArray(r,b*3),L.copy(T);const U=c[b];M.copy(U),M.sub(T.multiplyScalar(T.dot(U))).normalize(),w.crossVectors(L,U);const C=w.dot(h[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=C}for(let b=0,U=S.length;b<U;++b){const H=S[b],C=H.start,I=H.count;for(let D=C,F=C+I;D<F;D+=3)y(n[D+0]),y(n[D+1]),y(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,p=t.count;u<p;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[m++]=c[p++]}return new mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new re,an=new _a,Js=new Ns,Rc=new B,Li=new B,Ii=new B,Di=new B,Ao=new B,Qs=new B,tr=new dt,er=new dt,nr=new dt,Cc=new B,Pc=new B,Lc=new B,ir=new B,sr=new B;class se extends ye{constructor(t=new Ge,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ao.fromBufferAttribute(d,t),o?Qs.addScaledVector(Ao,h):Qs.addScaledVector(Ao.sub(e),h))}e.add(Qs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),an.copy(t.ray).recast(t.near),!(Js.containsPoint(an.origin)===!1&&(an.intersectSphere(Js,Rc)===null||an.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),an.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&an.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let n;const i=this.geometry,r=this.material,o=i.index,a=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,h=i.attributes.normal,d=i.groups,u=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){const _=d[p],g=r[_.materialIndex],f=Math.max(_.start,u.start),x=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let v=f,S=x;v<S;v+=3){const M=o.getX(v),w=o.getX(v+1),T=o.getX(v+2);n=rr(this,g,t,an,l,c,h,M,w,T),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const p=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);for(let _=p,g=m;_<g;_+=3){const f=o.getX(_),x=o.getX(_+1),v=o.getX(_+2);n=rr(this,r,t,an,l,c,h,f,x,v),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){const _=d[p],g=r[_.materialIndex],f=Math.max(_.start,u.start),x=Math.min(a.count,Math.min(_.start+_.count,u.start+u.count));for(let v=f,S=x;v<S;v+=3){const M=v,w=v+1,T=v+2;n=rr(this,g,t,an,l,c,h,M,w,T),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const p=Math.max(0,u.start),m=Math.min(a.count,u.start+u.count);for(let _=p,g=m;_<g;_+=3){const f=_,x=_+1,v=_+2;n=rr(this,r,t,an,l,c,h,f,x,v),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}}}function qd(s,t,e,n,i,r,o,a){let l;if(t.side===Pe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Un,a),l===null)return null;sr.copy(a),sr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:s}}function rr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Li),s.getVertexPosition(l,Ii),s.getVertexPosition(c,Di);const h=qd(s,t,e,n,Li,Ii,Di,ir);if(h){i&&(tr.fromBufferAttribute(i,a),er.fromBufferAttribute(i,l),nr.fromBufferAttribute(i,c),h.uv=Qe.getInterpolation(ir,Li,Ii,Di,tr,er,nr,new dt)),r&&(tr.fromBufferAttribute(r,a),er.fromBufferAttribute(r,l),nr.fromBufferAttribute(r,c),h.uv1=Qe.getInterpolation(ir,Li,Ii,Di,tr,er,nr,new dt),h.uv2=h.uv1),o&&(Cc.fromBufferAttribute(o,a),Pc.fromBufferAttribute(o,l),Lc.fromBufferAttribute(o,c),h.normal=Qe.getInterpolation(ir,Li,Ii,Di,Cc,Pc,Lc,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};Qe.getNormal(Li,Ii,Di,d.normal),h.face=d}return h}class os extends Ge{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2));function m(_,g,f,x,v,S,M,w,T,L,y){const b=S/T,U=M/L,H=S/2,C=M/2,I=w/2,D=T+1,F=L+1;let V=0,k=0;const X=new B;for(let tt=0;tt<F;tt++){const ht=tt*U-C;for(let J=0;J<D;J++){const Y=J*b-H;X[_]=Y*x,X[g]=ht*v,X[f]=I,c.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[f]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(J/T),d.push(1-tt/L),V+=1}}for(let tt=0;tt<L;tt++)for(let ht=0;ht<T;ht++){const J=u+ht+D*tt,Y=u+ht+D*(tt+1),it=u+(ht+1)+D*(tt+1),ut=u+(ht+1)+D*tt;l.push(J,Y,ut),l.push(Y,it,ut),k+=6}a.addGroup(p,k,y),p+=k,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=ss(s[e]);for(const i in n)t[i]=n[i]}return t}function jd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gh(s){return s.getRenderTarget()===null?s.outputColorSpace:nn}const Yd={clone:ss,merge:Ce};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _h extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends _h{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class $d extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Be(Ui,Ni,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Be(Ui,Ni,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Be(Ui,Ni,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Be(Ui,Ni,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Be(Ui,Ni,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Be(Ui,Ni,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=Dn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class vh extends Le{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jd extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ai?kt:ci),this.texture=new vh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new os(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Vn});r.uniforms.tEquirect.value=e;const o=new se(i,r),a=e.minFilter;return e.minFilter===ns&&(e.minFilter=Se),new $d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ro=new B,Qd=new B,tf=new jt;let ti=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ro.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tf.getNormalMatrix(t),i=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Jn=new Ns,or=new B;class va{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],p=n[9],m=n[10],_=n[11],g=n[12],f=n[13],x=n[14],v=n[15];return e[0].setComponents(a-i,d-l,_-u,v-g).normalize(),e[1].setComponents(a+i,d+l,_+u,v+g).normalize(),e[2].setComponents(a+r,d+c,_+p,v+f).normalize(),e[3].setComponents(a-r,d-c,_-p,v-f).normalize(),e[4].setComponents(a-o,d-h,_-m,v-x).normalize(),e[5].setComponents(a+o,d+h,_+m,v+x).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(or.x=i.normal.x>0?t.max.x:t.min.x,or.y=i.normal.y>0?t.max.y:t.min.y,or.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ef(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,d,u),c.onUploadCallback();let m;if(d instanceof Float32Array)m=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=s.SHORT;else if(d instanceof Uint32Array)m=s.UNSIGNED_INT;else if(d instanceof Int32Array)m=s.INT;else if(d instanceof Int8Array)m=s.BYTE;else if(d instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const u=h.array,p=h.updateRange;s.bindBuffer(d,c),p.count===-1?s.bufferSubData(d,0,u):(e?s.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):s.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class Br extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,p=[],m=[],_=[],g=[];for(let f=0;f<h;f++){const x=f*u-o;for(let v=0;v<c;v++){const S=v*d-r;m.push(S,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,S=x+c*(f+1),M=x+1+c*(f+1),w=x+1+c*f;p.push(v,S,w),p.push(S,M,w)}this.setIndex(p),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.widthSegments,t.heightSegments)}}var nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf="vec3 transformed = vec3( position );",hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wf=`vec3 transformedNormal = objectNormal;
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
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kf=`#ifdef USE_GRADIENTMAP
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
}`,Hf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
#endif`,qf=`#if defined( USE_ENVMAP )
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
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
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
#endif`,Jf=`struct PhysicalMaterial {
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
}`,Qf=`
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,op=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
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
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Op=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_UV
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
#endif`,Zp=`#ifdef USE_UV
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
#endif`,Kp=`#ifdef USE_UV
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,vm=`#define NORMAL
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
}`,xm=`#define NORMAL
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
}`,ym=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,wm=`#define TOON
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
}`,bm=`#define TOON
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
}`,Tm=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Gt={alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:of,aomap_fragment:af,aomap_pars_fragment:cf,begin_vertex:lf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:vf,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:wf,displacementmap_pars_vertex:bf,displacementmap_vertex:Tf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,encodings_fragment:Cf,encodings_pars_fragment:Pf,envmap_fragment:Lf,envmap_common_pars_fragment:If,envmap_pars_fragment:Df,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:qf,envmap_vertex:Nf,fog_vertex:Ff,fog_pars_vertex:Of,fog_fragment:Bf,fog_pars_fragment:zf,gradientmap_pars_fragment:kf,lightmap_fragment:Hf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:jf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Kf,lights_physical_fragment:$f,lights_physical_pars_fragment:Jf,lights_fragment_begin:Qf,lights_fragment_maps:tp,lights_fragment_end:ep,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:rp,map_fragment:op,map_pars_fragment:ap,map_particle_fragment:cp,map_particle_pars_fragment:lp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:vp,normal_pars_vertex:xp,normal_vertex:yp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:wp,iridescence_pars_fragment:bp,output_fragment:Tp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:kp,skinnormal_vertex:Hp,specularmap_fragment:Gp,specularmap_pars_fragment:Vp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:jp,uv_pars_fragment:Yp,uv_pars_vertex:Zp,uv_vertex:Kp,worldpos_vertex:$p,background_vert:Jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:cm,equirect_frag:lm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:vm,meshnormal_frag:xm,meshphong_vert:ym,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:Em,meshtoon_vert:wm,meshtoon_frag:bm,points_vert:Tm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Pm,sprite_frag:Lm},gt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaTest:{value:0}}},dn={basic:{uniforms:Ce([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ce([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ce([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ce([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ce([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ce([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ce([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ce([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ce([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ce([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ce([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ce([gt.common,gt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ce([gt.lights,gt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};dn.physical={uniforms:Ce([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ar={r:0,b:0,g:0};function Im(s,t,e,n,i,r,o){const a=new Ot(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function m(g,f){let x=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0),s.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fr)?(h===void 0&&(h=new se(new os(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:ss(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==kt,(d!==v||u!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new se(new Br(2,2),new pi({name:"BackgroundMaterial",uniforms:ss(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,f){g.getRGB(ar,gh(s)),n.buffers.color.setClear(ar.r,ar.g,ar.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function Dm(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null);let c=l,h=!1;function d(I,D,F,V,k){let X=!1;if(o){const tt=_(V,F,D);c!==tt&&(c=tt,p(c.object)),X=f(I,V,F,k),X&&x(I,V,F,k)}else{const tt=D.wireframe===!0;(c.geometry!==V.id||c.program!==F.id||c.wireframe!==tt)&&(c.geometry=V.id,c.program=F.id,c.wireframe=tt,X=!0)}k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,L(I,D,F,V),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,D,F){const V=F.wireframe===!0;let k=a[I.id];k===void 0&&(k={},a[I.id]=k);let X=k[D.id];X===void 0&&(X={},k[D.id]=X);let tt=X[V];return tt===void 0&&(tt=g(u()),X[V]=tt),tt}function g(I){const D=[],F=[],V=[];for(let k=0;k<i;k++)D[k]=0,F[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:V,object:I,attributes:{},index:null}}function f(I,D,F,V){const k=c.attributes,X=D.attributes;let tt=0;const ht=F.getAttributes();for(const J in ht)if(ht[J].location>=0){const it=k[J];let ut=X[J];if(ut===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor)),it===void 0||it.attribute!==ut||ut&&it.data!==ut.data)return!0;tt++}return c.attributesNum!==tt||c.index!==V}function x(I,D,F,V){const k={},X=D.attributes;let tt=0;const ht=F.getAttributes();for(const J in ht)if(ht[J].location>=0){let it=X[J];it===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(it=I.instanceColor));const ut={};ut.attribute=it,it&&it.data&&(ut.data=it.data),k[J]=ut,tt++}c.attributes=k,c.attributesNum=tt,c.index=V}function v(){const I=c.newAttributes;for(let D=0,F=I.length;D<F;D++)I[D]=0}function S(I){M(I,0)}function M(I,D){const F=c.newAttributes,V=c.enabledAttributes,k=c.attributeDivisors;F[I]=1,V[I]===0&&(s.enableVertexAttribArray(I),V[I]=1),k[I]!==D&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),k[I]=D)}function w(){const I=c.newAttributes,D=c.enabledAttributes;for(let F=0,V=D.length;F<V;F++)D[F]!==I[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function T(I,D,F,V,k,X){n.isWebGL2===!0&&(F===s.INT||F===s.UNSIGNED_INT)?s.vertexAttribIPointer(I,D,F,k,X):s.vertexAttribPointer(I,D,F,V,k,X)}function L(I,D,F,V){if(n.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const k=V.attributes,X=F.getAttributes(),tt=D.defaultAttributeValues;for(const ht in X){const J=X[ht];if(J.location>=0){let Y=k[ht];if(Y===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){const it=Y.normalized,ut=Y.itemSize,pt=e.get(Y);if(pt===void 0)continue;const O=pt.buffer,It=pt.type,Dt=pt.bytesPerElement;if(Y.isInterleavedBufferAttribute){const lt=Y.data,wt=lt.stride,rt=Y.offset;if(lt.isInstancedInterleavedBuffer){for(let Q=0;Q<J.locationSize;Q++)M(J.location+Q,lt.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Q=0;Q<J.locationSize;Q++)S(J.location+Q);s.bindBuffer(s.ARRAY_BUFFER,O);for(let Q=0;Q<J.locationSize;Q++)T(J.location+Q,ut/J.locationSize,It,it,wt*Dt,(rt+ut/J.locationSize*Q)*Dt)}else{if(Y.isInstancedBufferAttribute){for(let lt=0;lt<J.locationSize;lt++)M(J.location+lt,Y.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let lt=0;lt<J.locationSize;lt++)S(J.location+lt);s.bindBuffer(s.ARRAY_BUFFER,O);for(let lt=0;lt<J.locationSize;lt++)T(J.location+lt,ut/J.locationSize,It,it,ut*Dt,ut/J.locationSize*lt*Dt)}}else if(tt!==void 0){const it=tt[ht];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(J.location,it);break;case 3:s.vertexAttrib3fv(J.location,it);break;case 4:s.vertexAttrib4fv(J.location,it);break;default:s.vertexAttrib1fv(J.location,it)}}}}w()}function y(){H();for(const I in a){const D=a[I];for(const F in D){const V=D[F];for(const k in V)m(V[k].object),delete V[k];delete D[F]}delete a[I]}}function b(I){if(a[I.id]===void 0)return;const D=a[I.id];for(const F in D){const V=D[F];for(const k in V)m(V[k].object),delete V[k];delete D[F]}delete a[I.id]}function U(I){for(const D in a){const F=a[D];if(F[I.id]===void 0)continue;const V=F[I.id];for(const k in V)m(V[k].object),delete V[k];delete F[I.id]}}function H(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function Um(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,d){if(d===0)return;let u,p;if(i)u=s,p="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](r,c,h,d),e.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Nm(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,S=o||t.has("OES_texture_float"),M=v&&S,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:w}}function Fm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ti,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,f=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,v=x*4;let S=f.clippingState||null;l.value=S,S=h(m,u,v,p);for(let M=0;M!==v;++M)S[M]=e[M];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const f=p+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Om(s){let t=new WeakMap;function e(o,a){return a===Ar?o.mapping=Qi:a===ta&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ar||a===ta)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jd(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yh extends _h{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,Ic=[.125,.215,.35,.446,.526,.582],ni=20,Co=new yh,Dc=new Ot;let Po=null;const ei=(1+Math.sqrt(5))/2,Fi=1/ei,Uc=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ei,Fi),new B(0,ei,-Fi),new B(Fi,0,ei),new B(-Fi,0,ei),new B(ei,Fi,0),new B(-ei,Fi,0)];class Nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Po=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Po),t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Po=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Ln,format:tn,colorSpace:nn,depthBuffer:!1},i=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bm(r)),this._blurMaterial=zm(r,t,e)}return i}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,i){const a=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Dc),h.toneMapping=Dn,h.autoClear=!1;const p=new fi({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new se(new os,p);let _=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(Dc),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;cr(i,x*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Qi||t.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Uc[(i-1)%Uc.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new se(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ni-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):ni;g>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ni}`);const f=[];let x=0;for(let T=0;T<ni;++T){const L=T/_,y=Math.exp(-L*L/2);f.push(y),T===0?x+=y:T<g&&(x+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;const S=this._sizeLods[i],M=3*S*(i>v-Gi?i-v+Gi:0),w=4*(this._cubeSize-S);cr(e,M,w,3*S,2*S),l.setRenderTarget(e),l.render(d,Co)}}function Bm(s){const t=[],e=[],n=[];let i=s;const r=s-Gi+1+Ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Gi?l=Ic[o-s+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,_=3,g=2,f=1,x=new Float32Array(_*m*p),v=new Float32Array(g*m*p),S=new Float32Array(f*m*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,L=w>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];x.set(y,_*m*w),v.set(u,g*m*w);const b=[w,w,w,w,w,w];S.set(b,f*m*w)}const M=new Ge;M.setAttribute("position",new mn(x,_)),M.setAttribute("uv",new mn(v,g)),M.setAttribute("faceIndex",new mn(S,f)),t.push(M),i>Gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(s,t,e){const n=new ui(s,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function zm(s,t,e){const n=new Float32Array(ni),i=new B(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Oc(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Bc(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function km(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ar||l===ta,h=l===Qi||l===ts;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Nc(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Nc(s));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gm(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)t.update(u[m],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const _=p[m];for(let g=0,f=_.length;g<f;g++)t.update(_[g],s.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,m=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const M=x[v+0],w=x[v+1],T=x[v+2];u.push(M,w,w,T,T,M)}}else{const x=m.array;_=m.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const M=v+0,w=v+1,T=v+2;u.push(M,w,w,T,T,M)}}const g=new(ch(u)?mh:ph)(u,1);g.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,g)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Vm(s,t,e,n){const i=n.isWebGL2;let r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,p){s.drawElements(r,p,a,u*l),e.update(p,r,1)}function d(u,p,m){if(m===0)return;let _,g;if(i)_=s,g="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](r,p,a,u*l,m),e.update(p,r,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Wm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xm(s,t){return s[0]-t[0]}function qm(s,t){return Math.abs(t[1])-Math.abs(s[1])}function jm(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new xe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==m){let I=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),v===!0&&(L=2),S===!0&&(L=3);let y=h.attributes.position.count*L,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const U=new Float32Array(y*b*4*m),H=new uh(U,y,b,m);H.type=pn,H.needsUpdate=!0;const C=L*4;for(let D=0;D<m;D++){const F=M[D],V=w[D],k=T[D],X=y*b*4*D;for(let tt=0;tt<F.count;tt++){const ht=tt*C;x===!0&&(o.fromBufferAttribute(F,tt),U[X+ht+0]=o.x,U[X+ht+1]=o.y,U[X+ht+2]=o.z,U[X+ht+3]=0),v===!0&&(o.fromBufferAttribute(V,tt),U[X+ht+4]=o.x,U[X+ht+5]=o.y,U[X+ht+6]=o.z,U[X+ht+7]=0),S===!0&&(o.fromBufferAttribute(k,tt),U[X+ht+8]=o.x,U[X+ht+9]=o.y,U[X+ht+10]=o.z,U[X+ht+11]=k.itemSize===4?o.w:1)}}_={count:m,texture:H,size:new dt(y,b)},r.set(h,_),h.addEventListener("dispose",I)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];const f=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(s,"morphTargetBaseInfluence",f),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=u===void 0?0:u.length;let m=n[h.id];if(m===void 0||m.length!==p){m=[];for(let v=0;v<p;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<p;v++){const S=m[v];S[0]=v,S[1]=u[v]}m.sort(qm);for(let v=0;v<8;v++)v<p&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Xm);const _=h.morphAttributes.position,g=h.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const S=a[v],M=S[0],w=S[1];M!==Number.MAX_SAFE_INTEGER&&w?(_&&h.getAttribute("morphTarget"+v)!==_[M]&&h.setAttribute("morphTarget"+v,_[M]),g&&h.getAttribute("morphNormal"+v)!==g[M]&&h.setAttribute("morphNormal"+v,g[M]),i[v]=w,f+=w):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Ym(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Mh=new Le,Sh=new uh,Eh=new Dd,wh=new vh,zc=[],kc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Vc=new Float32Array(4);function as(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=zc[i];if(r===void 0&&(r=new Float32Array(i),zc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function zr(s,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2fv(this.addr,t),pe(e,t)}}function $m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;s.uniform3fv(this.addr,t),pe(e,t)}}function Jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4fv(this.addr,t),pe(e,t)}}function Qm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Vc.set(n),s.uniformMatrix2fv(this.addr,!1,Vc),pe(e,n)}}function tg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),pe(e,n)}}function eg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Hc.set(n),s.uniformMatrix4fv(this.addr,!1,Hc),pe(e,n)}}function ng(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2iv(this.addr,t),pe(e,t)}}function sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3iv(this.addr,t),pe(e,t)}}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4iv(this.addr,t),pe(e,t)}}function og(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2uiv(this.addr,t),pe(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3uiv(this.addr,t),pe(e,t)}}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4uiv(this.addr,t),pe(e,t)}}function hg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Mh,i)}function ug(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Eh,i)}function dg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||wh,i)}function fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sh,i)}function pg(s){switch(s){case 5126:return Zm;case 35664:return Km;case 35665:return $m;case 35666:return Jm;case 35674:return Qm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return cg;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(s,t){s.uniform1fv(this.addr,t)}function gg(s,t){const e=as(t,this.size,2);s.uniform2fv(this.addr,e)}function _g(s,t){const e=as(t,this.size,3);s.uniform3fv(this.addr,e)}function vg(s,t){const e=as(t,this.size,4);s.uniform4fv(this.addr,e)}function xg(s,t){const e=as(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function yg(s,t){const e=as(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Mg(s,t){const e=as(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sg(s,t){s.uniform1iv(this.addr,t)}function Eg(s,t){s.uniform2iv(this.addr,t)}function wg(s,t){s.uniform3iv(this.addr,t)}function bg(s,t){s.uniform4iv(this.addr,t)}function Tg(s,t){s.uniform1uiv(this.addr,t)}function Ag(s,t){s.uniform2uiv(this.addr,t)}function Rg(s,t){s.uniform3uiv(this.addr,t)}function Cg(s,t){s.uniform4uiv(this.addr,t)}function Pg(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Mh,r[o])}function Lg(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Eh,r[o])}function Ig(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||wh,r[o])}function Dg(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Sh,r[o])}function Ug(s){switch(s){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return wg;case 35669:case 35673:return bg;case 5125:return Tg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=pg(e.type)}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Ug(e.type)}}class Og{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function Wc(s,t){s.seq.push(t),s.map[t.id]=t}function Bg(s,t,e){const n=s.name,i=n.length;for(Lo.lastIndex=0;;){const r=Lo.exec(n),o=Lo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wc(e,c===void 0?new Ng(a,s,t):new Fg(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Og(a),Wc(e,d)),e=d}}}class Mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Bg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Xc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let zg=0;function kg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Hg(s){switch(s){case nn:return["Linear","( value )"];case kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function qc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+kg(s.getShaderSource(t),o)}else return i}function Gg(s,t){const e=Hg(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Vg(s,t){let e;switch(t){case Qu:e="Linear";break;case td:e="Reinhard";break;case ed:e="OptimizedCineon";break;case nd:e="ACESFilmic";break;case id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Wg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function Xg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ss(s){return s!==""}function jc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(s){return s.replace(jg,Yg)}function Yg(s,t){const e=Gt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return sa(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(s){return s.replace(Zg,Kg)}function Kg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $g(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function t0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Nr:t="ENVMAP_BLENDING_MULTIPLY";break;case $u:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function e0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function n0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=$g(e),c=Jg(e),h=Qg(e),d=t0(e),u=e0(e),p=e.isWebGL2?"":Wg(e),m=Xg(r),_=i.createProgram();let g,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[m].filter(Ss).join(`
`),g.length>0&&(g+=`
`),f=[p,m].filter(Ss).join(`
`),f.length>0&&(f+=`
`)):(g=[Kc(e),"#define SHADER_NAME "+e.shaderName,m,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),f=[p,Kc(e),"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.encodings_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=sa(o),o=jc(o,e),o=Yc(o,e),a=sa(a),a=jc(a,e),a=Yc(a,e),o=Zc(o),a=Zc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+g+o,S=x+f+a,M=Xc(i,i.VERTEX_SHADER,v),w=Xc(i,i.FRAGMENT_SHADER,S);if(i.attachShader(_,M),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const y=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(M).trim(),U=i.getShaderInfoLog(w).trim();let H=!0,C=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,w);else{const I=qc(i,M,"vertex"),D=qc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+I+`
`+D)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(b===""||U==="")&&(C=!1);C&&(this.diagnostics={runnable:H,programLog:y,vertexShader:{log:b,prefix:g},fragmentShader:{log:U,prefix:f}})}i.deleteShader(M),i.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new Mr(i,_)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=qg(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let i0=0;class s0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new r0(t),e.set(t,n)),n}}class r0{constructor(t){this.id=i0++,this.code=t,this.usedTimes=0}}function o0(s,t,e,n,i,r,o){const a=new dh,l=new s0,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function g(y,b,U,H,C){const I=H.fog,D=C.geometry,F=y.isMeshStandardMaterial?H.environment:null,V=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),k=V&&V.mapping===Fr?V.image.height:null,X=m[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const tt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ht=tt!==void 0?tt.length:0;let J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let Y,it,ut,pt;if(X){const Jt=dn[X];Y=Jt.vertexShader,it=Jt.fragmentShader}else Y=y.vertexShader,it=y.fragmentShader,l.update(y),ut=l.getVertexShaderID(y),pt=l.getFragmentShaderID(y);const O=s.getRenderTarget(),It=C.isInstancedMesh===!0,Dt=!!y.map,lt=!!y.matcap,wt=!!V,rt=!!y.aoMap,Q=!!y.lightMap,st=!!y.bumpMap,yt=!!y.normalMap,ft=!!y.displacementMap,Pt=!!y.emissiveMap,Lt=!!y.metalnessMap,Rt=!!y.roughnessMap,Bt=y.clearcoat>0,Yt=y.iridescence>0,P=y.sheen>0,A=y.transmission>0,j=Bt&&!!y.clearcoatMap,ot=Bt&&!!y.clearcoatNormalMap,at=Bt&&!!y.clearcoatRoughnessMap,mt=Yt&&!!y.iridescenceMap,N=Yt&&!!y.iridescenceThicknessMap,nt=P&&!!y.sheenColorMap,q=P&&!!y.sheenRoughnessMap,_t=!!y.specularMap,Et=!!y.specularColorMap,Tt=!!y.specularIntensityMap,vt=A&&!!y.transmissionMap,bt=A&&!!y.thicknessMap,Nt=!!y.gradientMap,Vt=!!y.alphaMap,oe=y.alphaTest>0,z=!!y.extensions,K=!!D.attributes.uv1,ct=!!D.attributes.uv2,Mt=!!D.attributes.uv3;return{isWebGL2:h,shaderID:X,shaderName:y.type,vertexShader:Y,fragmentShader:it,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:pt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:It,instancingColor:It&&C.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:O===null?s.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:nn,map:Dt,matcap:lt,envMap:wt,envMapMode:wt&&V.mapping,envMapCubeUVHeight:k,aoMap:rt,lightMap:Q,bumpMap:st,normalMap:yt,displacementMap:u&&ft,emissiveMap:Pt,normalMapObjectSpace:yt&&y.normalMapType===Sd,normalMapTangentSpace:yt&&y.normalMapType===Or,metalnessMap:Lt,roughnessMap:Rt,clearcoat:Bt,clearcoatMap:j,clearcoatNormalMap:ot,clearcoatRoughnessMap:at,iridescence:Yt,iridescenceMap:mt,iridescenceThicknessMap:N,sheen:P,sheenColorMap:nt,sheenRoughnessMap:q,specularMap:_t,specularColorMap:Et,specularIntensityMap:Tt,transmission:A,transmissionMap:vt,thicknessMap:bt,gradientMap:Nt,opaque:y.transparent===!1&&y.blending===ji,alphaMap:Vt,alphaTest:oe,combine:y.combine,mapUv:Dt&&_(y.map.channel),aoMapUv:rt&&_(y.aoMap.channel),lightMapUv:Q&&_(y.lightMap.channel),bumpMapUv:st&&_(y.bumpMap.channel),normalMapUv:yt&&_(y.normalMap.channel),displacementMapUv:ft&&_(y.displacementMap.channel),emissiveMapUv:Pt&&_(y.emissiveMap.channel),metalnessMapUv:Lt&&_(y.metalnessMap.channel),roughnessMapUv:Rt&&_(y.roughnessMap.channel),clearcoatMapUv:j&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:N&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:q&&_(y.sheenRoughnessMap.channel),specularMapUv:_t&&_(y.specularMap.channel),specularColorMapUv:Et&&_(y.specularColorMap.channel),specularIntensityMapUv:Tt&&_(y.specularIntensityMap.channel),transmissionMapUv:vt&&_(y.transmissionMap.channel),thicknessMapUv:bt&&_(y.thicknessMap.channel),alphaMapUv:Vt&&_(y.alphaMap.channel),vertexTangents:yt&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:ct,vertexUv3s:Mt,pointsUvs:C.isPoints===!0&&!!D.attributes.uv&&(Dt||Vt),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:Dn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:z&&y.extensions.derivatives===!0,extensionFragDepth:z&&y.extensions.fragDepth===!0,extensionDrawBuffers:z&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)b.push(U),b.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(b,y),v(b,y),b.push(s.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),y.push(a.mask)}function S(y){const b=m[y.type];let U;if(b){const H=dn[b];U=Yd.clone(H.uniforms)}else U=y.uniforms;return U}function M(y,b){let U;for(let H=0,C=c.length;H<C;H++){const I=c[H];if(I.cacheKey===b){U=I,++U.usedTimes;break}}return U===void 0&&(U=new n0(s,b,y,r),c.push(U)),U}function w(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:L}}function a0(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function c0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $c(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Jc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,m,_,g){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=_,f.group=g),t++,f}function a(d,u,p,m,_,g){const f=o(d,u,p,m,_,g);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(d,u,p,m,_,g){const f=o(d,u,p,m,_,g);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||c0),n.length>1&&n.sort(u||$c),i.length>1&&i.sort(u||$c)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function l0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Jc,s.set(n,[o])):i>=r.length?(o=new Jc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function h0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Ot};break;case"SpotLight":e={position:new B,direction:new B,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function u0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let d0=0;function f0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function p0(s,t){const e=new h0,n=u0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new B);const r=new B,o=new re,a=new re;function l(h,d){let u=0,p=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,g=0,f=0,x=0,v=0,S=0,M=0,w=0,T=0,L=0;h.sort(f0);const y=d===!0?Math.PI:1;for(let U=0,H=h.length;U<H;U++){const C=h[U],I=C.color,D=C.intensity,F=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*D*y,p+=I.g*D*y,m+=I.b*D*y;else if(C.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],D);else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*y),C.castShadow){const X=C.shadow,tt=n.get(C);tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=C.shadow.matrix,S++}i.directional[_]=k,_++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(I).multiplyScalar(D*y),k.distance=F,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[f]=k;const X=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,X.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[f]=X.matrix,C.castShadow){const tt=n.get(C);tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,i.spotShadow[f]=tt,i.spotShadowMap[f]=V,w++}f++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(I).multiplyScalar(D),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=k,x++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*y),k.distance=C.distance,k.decay=C.decay,C.castShadow){const X=C.shadow,tt=n.get(C);tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,tt.shadowCameraNear=X.camera.near,tt.shadowCameraFar=X.camera.far,i.pointShadow[g]=tt,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=C.shadow.matrix,M++}i.point[g]=k,g++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(D*y),k.groundColor.copy(C.groundColor).multiplyScalar(D*y),i.hemi[v]=k,v++}}x>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=m;const b=i.hash;(b.directionalLength!==_||b.pointLength!==g||b.spotLength!==f||b.rectAreaLength!==x||b.hemiLength!==v||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==w||b.numSpotMaps!==T)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,b.directionalLength=_,b.pointLength=g,b.spotLength=f,b.rectAreaLength=x,b.hemiLength=v,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=w,b.numSpotMaps=T,i.version=d0++)}function c(h,d){let u=0,p=0,m=0,_=0,g=0;const f=d.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),u++}else if(S.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),m++}else if(S.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),g++}}}return{setup:l,setupView:c,state:i}}function Qc(s,t){const e=new p0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function m0(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Qc(s,t),e.set(r,[l])):o>=a.length?(l=new Qc(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class g0 extends sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _0 extends sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
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
}`;function y0(s,t,e){let n=new va;const i=new dt,r=new dt,o=new xe,a=new g0({depthPacking:Md}),l=new _0,c={},h=e.maxTextureSize,d={[Un]:Pe,[Pe]:Un,[fn]:fn},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:v0,fragmentShader:x0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ge;m.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let f=this.type;this.render=function(M,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const L=s.getRenderTarget(),y=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Vn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=f!==Cn&&this.type===Cn,C=f===Cn&&this.type!==Cn;for(let I=0,D=M.length;I<D;I++){const F=M[I],V=F.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const k=V.getFrameExtents();if(i.multiply(k),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/k.x),i.x=r.x*k.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/k.y),i.y=r.y*k.y,V.mapSize.y=r.y)),V.map===null||H===!0||C===!0){const tt=this.type!==Cn?{minFilter:Me,magFilter:Me}:{};V.map!==null&&V.map.dispose(),V.map=new ui(i.x,i.y,tt),V.map.texture.name=F.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const X=V.getViewportCount();for(let tt=0;tt<X;tt++){const ht=V.getViewport(tt);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),U.viewport(o),V.updateMatrices(F,tt),n=V.getFrustum(),S(w,T,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Cn&&x(V,T),V.needsUpdate=!1}f=this.type,g.needsUpdate=!1,s.setRenderTarget(L,y,b)};function x(M,w){const T=t.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ui(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,T,u,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,T,p,_,null)}function v(M,w,T,L){let y=null;const b=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)y=b;else if(y=T.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=y.uuid,H=w.uuid;let C=c[U];C===void 0&&(C={},c[U]=C);let I=C[H];I===void 0&&(I=y.clone(),C[H]=I),y=I}if(y.visible=w.visible,y.wireframe=w.wireframe,L===Cn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=s.properties.get(y);U.light=T}return y}function S(M,w,T,L,y){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Cn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const H=t.update(M),C=M.material;if(Array.isArray(C)){const I=H.groups;for(let D=0,F=I.length;D<F;D++){const V=I[D],k=C[V.materialIndex];if(k&&k.visible){const X=v(M,k,L,y);s.renderBufferDirect(T,null,H,X,M,V)}}}else if(C.visible){const I=v(M,C,L,y);s.renderBufferDirect(T,null,H,I,M,null)}}const U=M.children;for(let H=0,C=U.length;H<C;H++)S(U[H],w,T,L,y)}}function M0(s,t,e){const n=e.isWebGL2;function i(){let z=!1;const K=new xe;let ct=null;const Mt=new xe(0,0,0,0);return{setMask:function(At){ct!==At&&!z&&(s.colorMask(At,At,At,At),ct=At)},setLocked:function(At){z=At},setClear:function(At,Jt,Qt,Ee,On){On===!0&&(At*=Ee,Jt*=Ee,Qt*=Ee),K.set(At,Jt,Qt,Ee),Mt.equals(K)===!1&&(s.clearColor(At,Jt,Qt,Ee),Mt.copy(K))},reset:function(){z=!1,ct=null,Mt.set(-1,0,0,0)}}}function r(){let z=!1,K=null,ct=null,Mt=null;return{setTest:function(At){At?O(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(At){K!==At&&!z&&(s.depthMask(At),K=At)},setFunc:function(At){if(ct!==At){switch(At){case Wu:s.depthFunc(s.NEVER);break;case Xu:s.depthFunc(s.ALWAYS);break;case qu:s.depthFunc(s.LESS);break;case Qo:s.depthFunc(s.LEQUAL);break;case ju:s.depthFunc(s.EQUAL);break;case Yu:s.depthFunc(s.GEQUAL);break;case Zu:s.depthFunc(s.GREATER);break;case Ku:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=At}},setLocked:function(At){z=At},setClear:function(At){Mt!==At&&(s.clearDepth(At),Mt=At)},reset:function(){z=!1,K=null,ct=null,Mt=null}}}function o(){let z=!1,K=null,ct=null,Mt=null,At=null,Jt=null,Qt=null,Ee=null,On=null;return{setTest:function(ae){z||(ae?O(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(ae){K!==ae&&!z&&(s.stencilMask(ae),K=ae)},setFunc:function(ae,We,on){(ct!==ae||Mt!==We||At!==on)&&(s.stencilFunc(ae,We,on),ct=ae,Mt=We,At=on)},setOp:function(ae,We,on){(Jt!==ae||Qt!==We||Ee!==on)&&(s.stencilOp(ae,We,on),Jt=ae,Qt=We,Ee=on)},setLocked:function(ae){z=ae},setClear:function(ae){On!==ae&&(s.clearStencil(ae),On=ae)},reset:function(){z=!1,K=null,ct=null,Mt=null,At=null,Jt=null,Qt=null,Ee=null,On=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let u={},p={},m=new WeakMap,_=[],g=null,f=!1,x=null,v=null,S=null,M=null,w=null,T=null,L=null,y=!1,b=null,U=null,H=null,C=null,I=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=V>=2);let X=null,tt={};const ht=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),Y=new xe().fromArray(ht),it=new xe().fromArray(J);function ut(z,K,ct,Mt){const At=new Uint8Array(4),Jt=s.createTexture();s.bindTexture(z,Jt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<ct;Qt++)n&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(K,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(K+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Jt}const pt={};pt[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),pt[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pt[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pt[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),O(s.DEPTH_TEST),l.setFunc(Qo),ft(!1),Pt(Ba),O(s.CULL_FACE),st(Vn);function O(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function It(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function Dt(z,K){return p[z]!==K?(s.bindFramebuffer(z,K),p[z]=K,n&&(z===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=K),z===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=K)),!0):!1}function lt(z,K){let ct=_,Mt=!1;if(z)if(ct=m.get(K),ct===void 0&&(ct=[],m.set(K,ct)),z.isWebGLMultipleRenderTargets){const At=z.texture;if(ct.length!==At.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let Jt=0,Qt=At.length;Jt<Qt;Jt++)ct[Jt]=s.COLOR_ATTACHMENT0+Jt;ct.length=At.length,Mt=!0}}else ct[0]!==s.COLOR_ATTACHMENT0&&(ct[0]=s.COLOR_ATTACHMENT0,Mt=!0);else ct[0]!==s.BACK&&(ct[0]=s.BACK,Mt=!0);Mt&&(e.isWebGL2?s.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function wt(z){return g!==z?(s.useProgram(z),g=z,!0):!1}const rt={[Hi]:s.FUNC_ADD,[Du]:s.FUNC_SUBTRACT,[Uu]:s.FUNC_REVERSE_SUBTRACT};if(n)rt[Ga]=s.MIN,rt[Va]=s.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(rt[Ga]=z.MIN_EXT,rt[Va]=z.MAX_EXT)}const Q={[Nu]:s.ZERO,[Fu]:s.ONE,[Ou]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[Vu]:s.SRC_ALPHA_SATURATE,[Hu]:s.DST_COLOR,[zu]:s.DST_ALPHA,[Bu]:s.ONE_MINUS_SRC_COLOR,[ih]:s.ONE_MINUS_SRC_ALPHA,[Gu]:s.ONE_MINUS_DST_COLOR,[ku]:s.ONE_MINUS_DST_ALPHA};function st(z,K,ct,Mt,At,Jt,Qt,Ee){if(z===Vn){f===!0&&(It(s.BLEND),f=!1);return}if(f===!1&&(O(s.BLEND),f=!0),z!==Iu){if(z!==x||Ee!==y){if((v!==Hi||w!==Hi)&&(s.blendEquation(s.FUNC_ADD),v=Hi,w=Hi),Ee)switch(z){case ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.ONE,s.ONE);break;case ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ha:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,M=null,T=null,L=null,x=z,y=Ee}return}At=At||K,Jt=Jt||ct,Qt=Qt||Mt,(K!==v||At!==w)&&(s.blendEquationSeparate(rt[K],rt[At]),v=K,w=At),(ct!==S||Mt!==M||Jt!==T||Qt!==L)&&(s.blendFuncSeparate(Q[ct],Q[Mt],Q[Jt],Q[Qt]),S=ct,M=Mt,T=Jt,L=Qt),x=z,y=!1}function yt(z,K){z.side===fn?It(s.CULL_FACE):O(s.CULL_FACE);let ct=z.side===Pe;K&&(ct=!ct),ft(ct),z.blending===ji&&z.transparent===!1?st(Vn):st(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Mt=z.stencilWrite;c.setTest(Mt),Mt&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Rt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?O(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(z){b!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),b=z)}function Pt(z){z!==Cu?(O(s.CULL_FACE),z!==U&&(z===Ba?s.cullFace(s.BACK):z===Pu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),U=z}function Lt(z){z!==H&&(F&&s.lineWidth(z),H=z)}function Rt(z,K,ct){z?(O(s.POLYGON_OFFSET_FILL),(C!==K||I!==ct)&&(s.polygonOffset(K,ct),C=K,I=ct)):It(s.POLYGON_OFFSET_FILL)}function Bt(z){z?O(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function Yt(z){z===void 0&&(z=s.TEXTURE0+D-1),X!==z&&(s.activeTexture(z),X=z)}function P(z,K,ct){ct===void 0&&(X===null?ct=s.TEXTURE0+D-1:ct=X);let Mt=tt[ct];Mt===void 0&&(Mt={type:void 0,texture:void 0},tt[ct]=Mt),(Mt.type!==z||Mt.texture!==K)&&(X!==ct&&(s.activeTexture(ct),X=ct),s.bindTexture(z,K||pt[z]),Mt.type=z,Mt.texture=K)}function A(){const z=tt[X];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(z){Y.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Y.copy(z))}function bt(z){it.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),it.copy(z))}function Nt(z,K){let ct=d.get(K);ct===void 0&&(ct=new WeakMap,d.set(K,ct));let Mt=ct.get(z);Mt===void 0&&(Mt=s.getUniformBlockIndex(K,z.name),ct.set(z,Mt))}function Vt(z,K){const Mt=d.get(K).get(z);h.get(K)!==Mt&&(s.uniformBlockBinding(K,Mt,z.__bindingPointIndex),h.set(K,Mt))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},X=null,tt={},p={},m=new WeakMap,_=[],g=null,f=!1,x=null,v=null,S=null,M=null,w=null,T=null,L=null,y=!1,b=null,U=null,H=null,C=null,I=null,Y.set(0,0,s.canvas.width,s.canvas.height),it.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:O,disable:It,bindFramebuffer:Dt,drawBuffers:lt,useProgram:wt,setBlending:st,setMaterial:yt,setFlipSided:ft,setCullFace:Pt,setLineWidth:Lt,setPolygonOffset:Rt,setScissorTest:Bt,activeTexture:Yt,bindTexture:P,unbindTexture:A,compressedTexImage2D:j,compressedTexImage3D:ot,texImage2D:Et,texImage3D:Tt,updateUBOMapping:Nt,uniformBlockBinding:Vt,texStorage2D:q,texStorage3D:_t,texSubImage2D:at,texSubImage3D:mt,compressedTexSubImage2D:N,compressedTexSubImage3D:nt,scissor:vt,viewport:bt,reset:oe}}function S0(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const g=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,A){return f?new OffscreenCanvas(P,A):Cs("canvas")}function v(P,A,j,ot){let at=1;if((P.width>ot||P.height>ot)&&(at=ot/Math.max(P.width,P.height)),at<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const mt=A?bd:Math.floor,N=mt(at*P.width),nt=mt(at*P.height);_===void 0&&(_=x(N,nt));const q=j?x(N,nt):_;return q.width=N,q.height=nt,q.getContext("2d").drawImage(P,0,0,N,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+N+"x"+nt+")."),q}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return gc(P.width)&&gc(P.height)}function M(P){return a?!1:P.wrapS!==ze||P.wrapT!==ze||P.minFilter!==Me&&P.minFilter!==Se}function w(P,A){return P.generateMipmaps&&A&&P.minFilter!==Me&&P.minFilter!==Se}function T(P){s.generateMipmap(P)}function L(P,A,j,ot,at=!1){if(a===!1)return A;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt=A;return A===s.RED&&(j===s.FLOAT&&(mt=s.R32F),j===s.HALF_FLOAT&&(mt=s.R16F),j===s.UNSIGNED_BYTE&&(mt=s.R8)),A===s.RG&&(j===s.FLOAT&&(mt=s.RG32F),j===s.HALF_FLOAT&&(mt=s.RG16F),j===s.UNSIGNED_BYTE&&(mt=s.RG8)),A===s.RGBA&&(j===s.FLOAT&&(mt=s.RGBA32F),j===s.HALF_FLOAT&&(mt=s.RGBA16F),j===s.UNSIGNED_BYTE&&(mt=ot===kt&&at===!1?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)),(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function y(P,A,j){return w(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==Me&&P.minFilter!==Se?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function b(P){return P===Me||P===Wa||P===no?s.NEAREST:s.LINEAR}function U(P){const A=P.target;A.removeEventListener("dispose",U),C(A),A.isVideoTexture&&m.delete(A)}function H(P){const A=P.target;A.removeEventListener("dispose",H),D(A)}function C(P){const A=n.get(P);if(A.__webglInit===void 0)return;const j=P.source,ot=g.get(j);if(ot){const at=ot[A.__cacheKey];at.usedTimes--,at.usedTimes===0&&I(P),Object.keys(ot).length===0&&g.delete(j)}n.remove(P)}function I(P){const A=n.get(P);s.deleteTexture(A.__webglTexture);const j=P.source,ot=g.get(j);delete ot[A.__cacheKey],o.memory.textures--}function D(P){const A=P.texture,j=n.get(P),ot=n.get(A);if(ot.__webglTexture!==void 0&&(s.deleteTexture(ot.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let at=0;at<6;at++)s.deleteFramebuffer(j.__webglFramebuffer[at]),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[at]);else{if(s.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let at=0;at<j.__webglColorRenderbuffer.length;at++)j.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[at]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let at=0,mt=A.length;at<mt;at++){const N=n.get(A[at]);N.__webglTexture&&(s.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(A[at])}n.remove(A),n.remove(P)}let F=0;function V(){F=0}function k(){const P=F;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),F+=1,P}function X(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function tt(P,A){const j=n.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(j,P,A);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+A)}function ht(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){It(j,P,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+A)}function J(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){It(j,P,A);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+A)}function Y(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Dt(j,P,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+A)}const it={[es]:s.REPEAT,[ze]:s.CLAMP_TO_EDGE,[ea]:s.MIRRORED_REPEAT},ut={[Me]:s.NEAREST,[Wa]:s.NEAREST_MIPMAP_NEAREST,[no]:s.NEAREST_MIPMAP_LINEAR,[Se]:s.LINEAR,[sd]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR};function pt(P,A,j){if(j?(s.texParameteri(P,s.TEXTURE_WRAP_S,it[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,it[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,it[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ut[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ut[A.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==ze||A.wrapT!==ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,b(A.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==Me&&A.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Me||A.minFilter!==no&&A.minFilter!==ns||A.type===pn&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ln&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(P,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function O(P,A){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",U));const ot=A.source;let at=g.get(ot);at===void 0&&(at={},g.set(ot,at));const mt=X(A);if(mt!==P.__cacheKey){at[mt]===void 0&&(at[mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),at[mt].usedTimes++;const N=at[P.__cacheKey];N!==void 0&&(at[P.__cacheKey].usedTimes--,N.usedTimes===0&&I(A)),P.__cacheKey=mt,P.__webglTexture=at[mt].texture}return j}function It(P,A,j){let ot=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ot=s.TEXTURE_3D);const at=O(P,A),mt=A.source;e.bindTexture(ot,P.__webglTexture,s.TEXTURE0+j);const N=n.get(mt);if(mt.version!==N.__version||at===!0){e.activeTexture(s.TEXTURE0+j),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const nt=M(A)&&S(A.image)===!1;let q=v(A.image,nt,!1,h);q=Yt(A,q);const _t=S(q)||a,Et=r.convert(A.format,A.colorSpace);let Tt=r.convert(A.type),vt=L(A.internalFormat,Et,Tt,A.colorSpace);pt(ot,A,_t);let bt;const Nt=A.mipmaps,Vt=a&&A.isVideoTexture!==!0,oe=N.__version===void 0||at===!0,z=y(A,q,_t);if(A.isDepthTexture)vt=s.DEPTH_COMPONENT,a?A.type===pn?vt=s.DEPTH_COMPONENT32F:A.type===si?vt=s.DEPTH_COMPONENT24:A.type===Yi?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:A.type===pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===oi&&vt===s.DEPTH_COMPONENT&&A.type!==rh&&A.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=si,Tt=r.convert(A.type)),A.format===is&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,A.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Yi,Tt=r.convert(A.type))),oe&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,vt,q.width,q.height):e.texImage2D(s.TEXTURE_2D,0,vt,q.width,q.height,0,Et,Tt,null));else if(A.isDataTexture)if(Nt.length>0&&_t){Vt&&oe&&e.texStorage2D(s.TEXTURE_2D,z,vt,Nt[0].width,Nt[0].height);for(let K=0,ct=Nt.length;K<ct;K++)bt=Nt[K],Vt?e.texSubImage2D(s.TEXTURE_2D,K,0,0,bt.width,bt.height,Et,Tt,bt.data):e.texImage2D(s.TEXTURE_2D,K,vt,bt.width,bt.height,0,Et,Tt,bt.data);A.generateMipmaps=!1}else Vt?(oe&&e.texStorage2D(s.TEXTURE_2D,z,vt,q.width,q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,q.width,q.height,Et,Tt,q.data)):e.texImage2D(s.TEXTURE_2D,0,vt,q.width,q.height,0,Et,Tt,q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Vt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,z,vt,Nt[0].width,Nt[0].height,q.depth);for(let K=0,ct=Nt.length;K<ct;K++)bt=Nt[K],A.format!==tn?Et!==null?Vt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,bt.width,bt.height,q.depth,Et,bt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,vt,bt.width,bt.height,q.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,bt.width,bt.height,q.depth,Et,Tt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,vt,bt.width,bt.height,q.depth,0,Et,Tt,bt.data)}else{Vt&&oe&&e.texStorage2D(s.TEXTURE_2D,z,vt,Nt[0].width,Nt[0].height);for(let K=0,ct=Nt.length;K<ct;K++)bt=Nt[K],A.format!==tn?Et!==null?Vt?e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,vt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage2D(s.TEXTURE_2D,K,0,0,bt.width,bt.height,Et,Tt,bt.data):e.texImage2D(s.TEXTURE_2D,K,vt,bt.width,bt.height,0,Et,Tt,bt.data)}else if(A.isDataArrayTexture)Vt?(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,z,vt,q.width,q.height,q.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Et,Tt,q.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,q.width,q.height,q.depth,0,Et,Tt,q.data);else if(A.isData3DTexture)Vt?(oe&&e.texStorage3D(s.TEXTURE_3D,z,vt,q.width,q.height,q.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Et,Tt,q.data)):e.texImage3D(s.TEXTURE_3D,0,vt,q.width,q.height,q.depth,0,Et,Tt,q.data);else if(A.isFramebufferTexture){if(oe)if(Vt)e.texStorage2D(s.TEXTURE_2D,z,vt,q.width,q.height);else{let K=q.width,ct=q.height;for(let Mt=0;Mt<z;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,vt,K,ct,0,Et,Tt,null),K>>=1,ct>>=1}}else if(Nt.length>0&&_t){Vt&&oe&&e.texStorage2D(s.TEXTURE_2D,z,vt,Nt[0].width,Nt[0].height);for(let K=0,ct=Nt.length;K<ct;K++)bt=Nt[K],Vt?e.texSubImage2D(s.TEXTURE_2D,K,0,0,Et,Tt,bt):e.texImage2D(s.TEXTURE_2D,K,vt,Et,Tt,bt);A.generateMipmaps=!1}else Vt?(oe&&e.texStorage2D(s.TEXTURE_2D,z,vt,q.width,q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Tt,q)):e.texImage2D(s.TEXTURE_2D,0,vt,Et,Tt,q);w(A,_t)&&T(ot),N.__version=mt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Dt(P,A,j){if(A.image.length!==6)return;const ot=O(P,A),at=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const mt=n.get(at);if(at.version!==mt.__version||ot===!0){e.activeTexture(s.TEXTURE0+j),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const N=A.isCompressedTexture||A.image[0].isCompressedTexture,nt=A.image[0]&&A.image[0].isDataTexture,q=[];for(let K=0;K<6;K++)!N&&!nt?q[K]=v(A.image[K],!1,!0,c):q[K]=nt?A.image[K].image:A.image[K],q[K]=Yt(A,q[K]);const _t=q[0],Et=S(_t)||a,Tt=r.convert(A.format,A.colorSpace),vt=r.convert(A.type),bt=L(A.internalFormat,Tt,vt,A.colorSpace),Nt=a&&A.isVideoTexture!==!0,Vt=mt.__version===void 0||ot===!0;let oe=y(A,_t,Et);pt(s.TEXTURE_CUBE_MAP,A,Et);let z;if(N){Nt&&Vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,oe,bt,_t.width,_t.height);for(let K=0;K<6;K++){z=q[K].mipmaps;for(let ct=0;ct<z.length;ct++){const Mt=z[ct];A.format!==tn?Tt!==null?Nt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,Mt.width,Mt.height,Tt,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,Mt.width,Mt.height,Tt,vt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,bt,Mt.width,Mt.height,0,Tt,vt,Mt.data)}}}else{z=A.mipmaps,Nt&&Vt&&(z.length>0&&oe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,oe,bt,q[0].width,q[0].height));for(let K=0;K<6;K++)if(nt){Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,q[K].width,q[K].height,Tt,vt,q[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,bt,q[K].width,q[K].height,0,Tt,vt,q[K].data);for(let ct=0;ct<z.length;ct++){const At=z[ct].image[K].image;Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,At.width,At.height,Tt,vt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,bt,At.width,At.height,0,Tt,vt,At.data)}}else{Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,vt,q[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,bt,Tt,vt,q[K]);for(let ct=0;ct<z.length;ct++){const Mt=z[ct];Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Tt,vt,Mt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,bt,Tt,vt,Mt.image[K])}}}w(A,Et)&&T(s.TEXTURE_CUBE_MAP),mt.__version=at.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function lt(P,A,j,ot,at){const mt=r.convert(j.format,j.colorSpace),N=r.convert(j.type),nt=L(j.internalFormat,mt,N,j.colorSpace);n.get(A).__hasExternalTextures||(at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,0,nt,A.width,A.height,A.depth,0,mt,N,null):e.texImage2D(at,0,nt,A.width,A.height,0,mt,N,null)),e.bindFramebuffer(s.FRAMEBUFFER,P),Rt(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,at,n.get(j).__webglTexture,0,Lt(A)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,at,n.get(j).__webglTexture,0),e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(P,A,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ot=s.DEPTH_COMPONENT16;if(j||Rt(A)){const at=A.depthTexture;at&&at.isDepthTexture&&(at.type===pn?ot=s.DEPTH_COMPONENT32F:at.type===si&&(ot=s.DEPTH_COMPONENT24));const mt=Lt(A);Rt(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,ot,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,ot,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ot,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const ot=Lt(A);j&&Rt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,A.width,A.height):Rt(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ot=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let at=0;at<ot.length;at++){const mt=ot[at],N=r.convert(mt.format,mt.colorSpace),nt=r.convert(mt.type),q=L(mt.internalFormat,N,nt,mt.colorSpace),_t=Lt(A);j&&Rt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,q,A.width,A.height):Rt(A)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,q,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),tt(A.depthTexture,0);const ot=n.get(A.depthTexture).__webglTexture,at=Lt(A);if(A.depthTexture.format===oi)Rt(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(A.depthTexture.format===is)Rt(A)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Q(P){const A=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");rt(A.__webglFramebuffer,P)}else if(j){A.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ot]),A.__webglDepthbuffer[ot]=s.createRenderbuffer(),wt(A.__webglDepthbuffer[ot],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),wt(A.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(P,A,j){const ot=n.get(P);A!==void 0&&lt(ot.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),j!==void 0&&Q(P)}function yt(P){const A=P.texture,j=n.get(P),ot=n.get(A);P.addEventListener("dispose",H),P.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=A.version,o.memory.textures++);const at=P.isWebGLCubeRenderTarget===!0,mt=P.isWebGLMultipleRenderTargets===!0,N=S(P)||a;if(at){j.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)j.__webglFramebuffer[nt]=s.createFramebuffer()}else{if(j.__webglFramebuffer=s.createFramebuffer(),mt)if(i.drawBuffers){const nt=P.texture;for(let q=0,_t=nt.length;q<_t;q++){const Et=n.get(nt[q]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Rt(P)===!1){const nt=mt?A:[A];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let q=0;q<nt.length;q++){const _t=nt[q];j.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[q]);const Et=r.convert(_t.format,_t.colorSpace),Tt=r.convert(_t.type),vt=L(_t.internalFormat,Et,Tt,_t.colorSpace,P.isXRRenderTarget===!0),bt=Lt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,vt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,j.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),wt(j.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),pt(s.TEXTURE_CUBE_MAP,A,N);for(let nt=0;nt<6;nt++)lt(j.__webglFramebuffer[nt],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt);w(A,N)&&T(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){const nt=P.texture;for(let q=0,_t=nt.length;q<_t;q++){const Et=nt[q],Tt=n.get(Et);e.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),pt(s.TEXTURE_2D,Et,N),lt(j.__webglFramebuffer,P,Et,s.COLOR_ATTACHMENT0+q,s.TEXTURE_2D),w(Et,N)&&T(s.TEXTURE_2D)}e.unbindTexture()}else{let nt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?nt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(nt,ot.__webglTexture),pt(nt,A,N),lt(j.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,nt),w(A,N)&&T(nt),e.unbindTexture()}P.depthBuffer&&Q(P)}function ft(P){const A=S(P)||a,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ot=0,at=j.length;ot<at;ot++){const mt=j[ot];if(w(mt,A)){const N=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,nt=n.get(mt).__webglTexture;e.bindTexture(N,nt),T(N),e.unbindTexture()}}}function Pt(P){if(a&&P.samples>0&&Rt(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,ot=P.height;let at=s.COLOR_BUFFER_BIT;const mt=[],N=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=n.get(P),q=P.isWebGLMultipleRenderTargets===!0;if(q)for(let _t=0;_t<A.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let _t=0;_t<A.length;_t++){mt.push(s.COLOR_ATTACHMENT0+_t),P.depthBuffer&&mt.push(N);const Et=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(Et===!1&&(P.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),q&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,nt.__webglColorRenderbuffer[_t]),Et===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[N]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[N])),q){const Tt=n.get(A[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,j,ot,0,0,j,ot,at,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let _t=0;_t<A.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,nt.__webglColorRenderbuffer[_t]);const Et=n.get(A[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function Lt(P){return Math.min(d,P.samples)}function Rt(P){const A=n.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(P){const A=o.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function Yt(P,A){const j=P.colorSpace,ot=P.format,at=P.type;return P.isCompressedTexture===!0||P.format===na||j!==nn&&j!==ci&&(j===kt?a===!1?t.has("EXT_sRGB")===!0&&ot===tn?(P.format=na,P.minFilter=Se,P.generateMipmaps=!1):A=lh.sRGBToLinear(A):(ot!==tn||at!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=tt,this.setTexture2DArray=ht,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=st,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Rt}function E0(s,t,e){const n=e.isWebGL2;function i(r,o=ci){let a;if(r===hi)return s.UNSIGNED_BYTE;if(r===cd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===rd)return s.BYTE;if(r===od)return s.SHORT;if(r===rh)return s.UNSIGNED_SHORT;if(r===ad)return s.INT;if(r===si)return s.UNSIGNED_INT;if(r===pn)return s.FLOAT;if(r===Ln)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===hd)return s.ALPHA;if(r===tn)return s.RGBA;if(r===ud)return s.LUMINANCE;if(r===dd)return s.LUMINANCE_ALPHA;if(r===oi)return s.DEPTH_COMPONENT;if(r===is)return s.DEPTH_STENCIL;if(r===na)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===fd)return s.RED;if(r===pd)return s.RED_INTEGER;if(r===md)return s.RG;if(r===gd)return s.RG_INTEGER;if(r===_d)return s.RGBA_INTEGER;if(r===io||r===so||r===ro||r===oo)if(o===kt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===io)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===io)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===so)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ro)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xa||r===qa||r===ja||r===Ya)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Za||r===Ka)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Za)return o===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ka)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$a||r===Ja||r===Qa||r===tc||r===ec||r===nc||r===ic||r===sc||r===rc||r===oc||r===ac||r===cc||r===lc||r===hc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$a)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ja)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qa)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tc)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ec)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nc)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ic)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sc)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rc)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oc)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ac)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cc)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lc)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hc)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ao)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ao)return o===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===xd||r===uc||r===dc||r===fc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ao)return a.COMPRESSED_RED_RGTC1_EXT;if(r===uc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yi?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class w0 extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vi extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b0={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class T0 extends Le{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:oi,h!==oi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=si),n===void 0&&h===is&&(n=Yi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1}}class A0 extends Wn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,m=null;const _=e.getContextAttributes();let g=null,f=null;const x=[],v=[],S=new Set,M=new Map,w=new Be;w.layers.enable(1),w.viewport=new xe;const T=new Be;T.layers.enable(2),T.viewport=new xe;const L=[w,T],y=new w0;y.layers.enable(1),y.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=x[Y];return it===void 0&&(it=new Io,x[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=x[Y];return it===void 0&&(it=new Io,x[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=x[Y];return it===void 0&&(it=new Io,x[Y]=it),it.getHandSpace()};function H(Y){const it=v.indexOf(Y.inputSource);if(it===-1)return;const ut=x[it];ut!==void 0&&(ut.update(Y.inputSource,Y.frame,c||o),ut.dispatchEvent({type:Y.type,data:Y.inputSource}))}function C(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",I);for(let Y=0;Y<x.length;Y++){const it=v[Y];it!==null&&(v[Y]=null,x[Y].disconnect(it))}b=null,U=null,t.setRenderTarget(g),p=null,u=null,d=null,i=null,f=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",C),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const it={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),f=new ui(p.framebufferWidth,p.framebufferHeight,{format:tn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let it=null,ut=null,pt=null;_.depth&&(pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=_.stencil?is:oi,ut=_.stencil?Yi:si);const O={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(O),i.updateRenderState({layers:[u]}),f=new ui(u.textureWidth,u.textureHeight,{format:tn,type:hi,depthTexture:new T0(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const It=t.properties.get(f);It.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(Y){for(let it=0;it<Y.removed.length;it++){const ut=Y.removed[it],pt=v.indexOf(ut);pt>=0&&(v[pt]=null,x[pt].disconnect(ut))}for(let it=0;it<Y.added.length;it++){const ut=Y.added[it];let pt=v.indexOf(ut);if(pt===-1){for(let It=0;It<x.length;It++)if(It>=v.length){v.push(ut),pt=It;break}else if(v[It]===null){v[It]=ut,pt=It;break}if(pt===-1)break}const O=x[pt];O&&O.connect(ut)}}const D=new B,F=new B;function V(Y,it,ut){D.setFromMatrixPosition(it.matrixWorld),F.setFromMatrixPosition(ut.matrixWorld);const pt=D.distanceTo(F),O=it.projectionMatrix.elements,It=ut.projectionMatrix.elements,Dt=O[14]/(O[10]-1),lt=O[14]/(O[10]+1),wt=(O[9]+1)/O[5],rt=(O[9]-1)/O[5],Q=(O[8]-1)/O[0],st=(It[8]+1)/It[0],yt=Dt*Q,ft=Dt*st,Pt=pt/(-Q+st),Lt=Pt*-Q;it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const Rt=Dt+Pt,Bt=lt+Pt,Yt=yt-Lt,P=ft+(pt-Lt),A=wt*lt/Bt*Rt,j=rt*lt/Bt*Rt;Y.projectionMatrix.makePerspective(Yt,P,A,j,Rt,Bt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function k(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;y.near=T.near=w.near=Y.near,y.far=T.far=w.far=Y.far,(b!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,U=y.far);const it=Y.parent,ut=y.cameras;k(y,it);for(let pt=0;pt<ut.length;pt++)k(ut[pt],it);ut.length===2?V(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),X(Y,y,it)};function X(Y,it,ut){ut===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(ut.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const pt=Y.children;for(let O=0,It=pt.length;O<It;O++)pt[O].updateMatrixWorld(!0);Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ia*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.getPlanes=function(){return S};let tt=null;function ht(Y,it){if(h=it.getViewerPose(c||o),m=it,h!==null){const ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let pt=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,pt=!0);for(let O=0;O<ut.length;O++){const It=ut[O];let Dt=null;if(p!==null)Dt=p.getViewport(It);else{const wt=d.getViewSubImage(u,It);Dt=wt.viewport,O===0&&(t.setRenderTargetTextures(f,wt.colorTexture,u.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(f))}let lt=L[O];lt===void 0&&(lt=new Be,lt.layers.enable(O),lt.viewport=new xe,L[O]=lt),lt.matrix.fromArray(It.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(It.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),O===0&&(y.matrix.copy(lt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pt===!0&&y.cameras.push(lt)}}for(let ut=0;ut<x.length;ut++){const pt=v[ut],O=x[ut];pt!==null&&O!==void 0&&O.update(pt,it,c||o)}if(tt&&tt(Y,it),it.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:it.detectedPlanes});let ut=null;for(const pt of S)it.detectedPlanes.has(pt)||(ut===null&&(ut=[]),ut.push(pt));if(ut!==null)for(const pt of ut)S.delete(pt),M.delete(pt),n.dispatchEvent({type:"planeremoved",data:pt});for(const pt of it.detectedPlanes)if(!S.has(pt))S.add(pt),M.set(pt,it.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pt});else{const O=M.get(pt);pt.lastChangedTime>O&&(M.set(pt,pt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pt}))}}m=null}const J=new xh;J.setAnimationLoop(ht),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}}function R0(s,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,gh(s)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Pe&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Pe&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=v*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),t.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const x=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C0(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=i[x.id];S===void 0&&(m(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",g));const M=v.program;n.updateUBOMapping(x,M);const w=t.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const v=d();x.__bindingPointIndex=v;const S=s.createBuffer(),M=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=i[x.id],S=x.uniforms,M=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,T=S.length;w<T;w++){const L=S[w];if(p(L,w,M)===!0){const y=L.__offset,b=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let H=0;H<b.length;H++){const C=b[H],I=_(C);typeof C=="number"?(L.__data[0]=C,s.bufferSubData(s.UNIFORM_BUFFER,y+U,L.__data)):C.isMatrix3?(L.__data[0]=C.elements[0],L.__data[1]=C.elements[1],L.__data[2]=C.elements[2],L.__data[3]=C.elements[0],L.__data[4]=C.elements[3],L.__data[5]=C.elements[4],L.__data[6]=C.elements[5],L.__data[7]=C.elements[0],L.__data[8]=C.elements[6],L.__data[9]=C.elements[7],L.__data[10]=C.elements[8],L.__data[11]=C.elements[0]):(C.toArray(L.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,y,L.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,v,S){const M=x.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const w=Array.isArray(M)?M:[M],T=[];for(let L=0;L<w.length;L++)T.push(w[L].clone());S[v]=T}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const w=Array.isArray(S[v])?S[v]:[S[v]],T=Array.isArray(M)?M:[M];for(let L=0;L<w.length;L++){const y=w[L];if(y.equals(T[L])===!1)return y.copy(T[L]),!0}}return!1}function m(x){const v=x.uniforms;let S=0;const M=16;let w=0;for(let T=0,L=v.length;T<L;T++){const y=v[T],b={boundary:0,storage:0},U=Array.isArray(y.value)?y.value:[y.value];for(let H=0,C=U.length;H<C;H++){const I=U[H],D=_(I);b.boundary+=D.boundary,b.storage+=D.storage}if(y.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,T>0){w=S%M;const H=M-w;w!==0&&H-b.boundary<0&&(S+=M-w,y.__offset=S)}S+=b.storage}return w=S%M,w>0&&(S+=M-w),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}function P0(){const s=Cs("canvas");return s.style.display="block",s}class bh{constructor(t={}){const{canvas:e=P0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let p=null,m=null;const _=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=kt,this.useLegacyLights=!0,this.toneMapping=Dn,this.toneMappingExposure=1;const f=this;let x=!1,v=0,S=0,M=null,w=-1,T=null;const L=new xe,y=new xe;let b=null,U=e.width,H=e.height,C=1,I=null,D=null;const F=new xe(0,0,U,H),V=new xe(0,0,U,H);let k=!1;const X=new va;let tt=!1,ht=!1,J=null;const Y=new re,it=new B,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pt(){return M===null?C:1}let O=n;function It(R,W){for(let $=0;$<R.length;$++){const G=R[$],et=e.getContext(G,W);if(et!==null)return et}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),O===null){const W=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&W.shift(),O=It(W,R),O===null)throw It(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Dt,lt,wt,rt,Q,st,yt,ft,Pt,Lt,Rt,Bt,Yt,P,A,j,ot,at,mt,N,nt,q,_t,Et;function Tt(){Dt=new Hm(O),lt=new Nm(O,Dt,t),Dt.init(lt),q=new E0(O,Dt,lt),wt=new M0(O,Dt,lt),rt=new Wm(O),Q=new a0,st=new S0(O,Dt,wt,Q,lt,q,rt),yt=new Om(f),ft=new km(f),Pt=new ef(O,lt),_t=new Dm(O,Dt,Pt,lt),Lt=new Gm(O,Pt,rt,_t),Rt=new Ym(O,Lt,Pt,rt),mt=new jm(O,lt,st),j=new Fm(Q),Bt=new o0(f,yt,ft,Dt,lt,_t,j),Yt=new R0(f,Q),P=new l0,A=new m0(Dt,lt),at=new Im(f,yt,ft,wt,Rt,u,l),ot=new y0(f,Rt,lt),Et=new C0(O,rt,lt,wt),N=new Um(O,Dt,rt,lt),nt=new Vm(O,Dt,rt,lt),rt.programs=Bt.programs,f.capabilities=lt,f.extensions=Dt,f.properties=Q,f.renderLists=P,f.shadowMap=ot,f.state=wt,f.info=rt}Tt();const vt=new A0(f,O);this.xr=vt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(R){R!==void 0&&(C=R,this.setSize(U,H,!1))},this.getSize=function(R){return R.set(U,H)},this.setSize=function(R,W,$=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,H=W,e.width=Math.floor(R*C),e.height=Math.floor(W*C),$===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(U*C,H*C).floor()},this.setDrawingBufferSize=function(R,W,$){U=R,H=W,C=$,e.width=Math.floor(R*$),e.height=Math.floor(W*$),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,W,$,G){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,W,$,G),wt.viewport(L.copy(F).multiplyScalar(C).floor())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,W,$,G){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,W,$,G),wt.scissor(y.copy(V).multiplyScalar(C).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(R){wt.setScissorTest(k=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){D=R},this.getClearColor=function(R){return R.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(R=!0,W=!0,$=!0){let G=0;R&&(G|=O.COLOR_BUFFER_BIT),W&&(G|=O.DEPTH_BUFFER_BIT),$&&(G|=O.STENCIL_BUFFER_BIT),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),P.dispose(),A.dispose(),Q.dispose(),yt.dispose(),ft.dispose(),Rt.dispose(),_t.dispose(),Et.dispose(),Bt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",At),vt.removeEventListener("sessionend",Jt),J&&(J.dispose(),J=null),Qt.stop()};function bt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=rt.autoReset,W=ot.enabled,$=ot.autoUpdate,G=ot.needsUpdate,et=ot.type;Tt(),rt.autoReset=R,ot.enabled=W,ot.autoUpdate=$,ot.needsUpdate=G,ot.type=et}function Vt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oe(R){const W=R.target;W.removeEventListener("dispose",oe),z(W)}function z(R){K(R),Q.remove(R)}function K(R){const W=Q.get(R).programs;W!==void 0&&(W.forEach(function($){Bt.releaseProgram($)}),R.isShaderMaterial&&Bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,$,G,et,Ct){W===null&&(W=ut);const Ut=et.isMesh&&et.matrixWorld.determinant()<0,Ft=bu(R,W,$,G,et);wt.setMaterial(G,Ut);let Ht=$.index,Wt=1;G.wireframe===!0&&(Ht=Lt.getWireframeAttribute($),Wt=2);const Xt=$.drawRange,qt=$.attributes.position;let $t=Xt.start*Wt,Ae=(Xt.start+Xt.count)*Wt;Ct!==null&&($t=Math.max($t,Ct.start*Wt),Ae=Math.min(Ae,(Ct.start+Ct.count)*Wt)),Ht!==null?($t=Math.max($t,0),Ae=Math.min(Ae,Ht.count)):qt!=null&&($t=Math.max($t,0),Ae=Math.min(Ae,qt.count));const je=Ae-$t;if(je<0||je===1/0)return;_t.setup(et,G,Ft,$,Ht);let jn,ce=N;if(Ht!==null&&(jn=Pt.get(Ht),ce=nt,ce.setIndex(jn)),et.isMesh)G.wireframe===!0?(wt.setLineWidth(G.wireframeLinewidth*pt()),ce.setMode(O.LINES)):ce.setMode(O.TRIANGLES);else if(et.isLine){let Zt=G.linewidth;Zt===void 0&&(Zt=1),wt.setLineWidth(Zt*pt()),et.isLineSegments?ce.setMode(O.LINES):et.isLineLoop?ce.setMode(O.LINE_LOOP):ce.setMode(O.LINE_STRIP)}else et.isPoints?ce.setMode(O.POINTS):et.isSprite&&ce.setMode(O.TRIANGLES);if(et.isInstancedMesh)ce.renderInstances($t,je,et.count);else if($.isInstancedBufferGeometry){const Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Jr=Math.min($.instanceCount,Zt);ce.renderInstances($t,je,Jr)}else ce.render($t,je)},this.compile=function(R,W){function $(G,et,Ct){G.transparent===!0&&G.side===fn&&G.forceSinglePass===!1?(G.side=Pe,G.needsUpdate=!0,ks(G,et,Ct),G.side=Un,G.needsUpdate=!0,ks(G,et,Ct),G.side=fn):ks(G,et,Ct)}m=A.get(R),m.init(),g.push(m),R.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(f.useLegacyLights),R.traverse(function(G){const et=G.material;if(et)if(Array.isArray(et))for(let Ct=0;Ct<et.length;Ct++){const Ut=et[Ct];$(Ut,R,G)}else $(et,R,G)}),g.pop(),m=null};let ct=null;function Mt(R){ct&&ct(R)}function At(){Qt.stop()}function Jt(){Qt.start()}const Qt=new xh;Qt.setAnimationLoop(Mt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(R){ct=R,vt.setAnimationLoop(R),R===null?Qt.stop():Qt.start()},vt.addEventListener("sessionstart",At),vt.addEventListener("sessionend",Jt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(W),W=vt.getCamera()),R.isScene===!0&&R.onBeforeRender(f,R,W,M),m=A.get(R,g.length),m.init(),g.push(m),Y.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix(Y),ht=this.localClippingEnabled,tt=j.init(this.clippingPlanes,ht),p=P.get(R,_.length),p.init(),_.push(p),Ee(R,W,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(I,D),tt===!0&&j.beginShadows();const $=m.state.shadowsArray;if(ot.render($,R,W),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(p,R),m.setupLights(f.useLegacyLights),W.isArrayCamera){const G=W.cameras;for(let et=0,Ct=G.length;et<Ct;et++){const Ut=G[et];On(p,R,Ut,Ut.viewport)}}else On(p,R,W);M!==null&&(st.updateMultisampleRenderTarget(M),st.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(f,R,W),_t.resetDefaultState(),w=-1,T=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Ee(R,W,$,G){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){G&&it.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Y);const Ut=Rt.update(R),Ft=R.material;Ft.visible&&p.push(R,Ut,Ft,$,it.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==rt.render.frame&&(R.skeleton.update(),R.skeleton.frame=rt.render.frame);const Ut=Rt.update(R),Ft=R.material;if(G&&(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),it.copy(Ut.boundingSphere.center).applyMatrix4(R.matrixWorld).applyMatrix4(Y)),Array.isArray(Ft)){const Ht=Ut.groups;for(let Wt=0,Xt=Ht.length;Wt<Xt;Wt++){const qt=Ht[Wt],$t=Ft[qt.materialIndex];$t&&$t.visible&&p.push(R,Ut,$t,$,it.z,qt)}}else Ft.visible&&p.push(R,Ut,Ft,$,it.z,null)}}const Ct=R.children;for(let Ut=0,Ft=Ct.length;Ut<Ft;Ut++)Ee(Ct[Ut],W,$,G)}function On(R,W,$,G){const et=R.opaque,Ct=R.transmissive,Ut=R.transparent;m.setupLightsView($),tt===!0&&j.setGlobalState(f.clippingPlanes,$),Ct.length>0&&ae(et,Ct,W,$),G&&wt.viewport(L.copy(G)),et.length>0&&We(et,W,$),Ct.length>0&&We(Ct,W,$),Ut.length>0&&We(Ut,W,$),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ae(R,W,$,G){if(J===null){const Ft=lt.isWebGL2;J=new ui(1024,1024,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")?Ln:hi,minFilter:ns,samples:Ft&&a===!0?4:0})}const et=f.getRenderTarget();f.setRenderTarget(J),f.clear();const Ct=f.toneMapping;f.toneMapping=Dn,We(R,$,G),st.updateMultisampleRenderTarget(J),st.updateRenderTargetMipmap(J);let Ut=!1;for(let Ft=0,Ht=W.length;Ft<Ht;Ft++){const Wt=W[Ft],Xt=Wt.object,qt=Wt.geometry,$t=Wt.material,Ae=Wt.group;if($t.side===fn&&Xt.layers.test(G.layers)){const je=$t.side;$t.side=Pe,$t.needsUpdate=!0,on(Xt,$,G,qt,$t,Ae),$t.side=je,$t.needsUpdate=!0,Ut=!0}}Ut===!0&&(st.updateMultisampleRenderTarget(J),st.updateRenderTargetMipmap(J)),f.setRenderTarget(et),f.toneMapping=Ct}function We(R,W,$){const G=W.isScene===!0?W.overrideMaterial:null;for(let et=0,Ct=R.length;et<Ct;et++){const Ut=R[et],Ft=Ut.object,Ht=Ut.geometry,Wt=G===null?Ut.material:G,Xt=Ut.group;Ft.layers.test($.layers)&&on(Ft,W,$,Ht,Wt,Xt)}}function on(R,W,$,G,et,Ct){R.onBeforeRender(f,W,$,G,et,Ct),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),et.onBeforeRender(f,W,$,G,R,Ct),et.transparent===!0&&et.side===fn&&et.forceSinglePass===!1?(et.side=Pe,et.needsUpdate=!0,f.renderBufferDirect($,W,G,et,R,Ct),et.side=Un,et.needsUpdate=!0,f.renderBufferDirect($,W,G,et,R,Ct),et.side=fn):f.renderBufferDirect($,W,G,et,R,Ct),R.onAfterRender(f,W,$,G,et,Ct)}function ks(R,W,$){W.isScene!==!0&&(W=ut);const G=Q.get(R),et=m.state.lights,Ct=m.state.shadowsArray,Ut=et.state.version,Ft=Bt.getParameters(R,et.state,Ct,W,$),Ht=Bt.getProgramCacheKey(Ft);let Wt=G.programs;G.environment=R.isMeshStandardMaterial?W.environment:null,G.fog=W.fog,G.envMap=(R.isMeshStandardMaterial?ft:yt).get(R.envMap||G.environment),Wt===void 0&&(R.addEventListener("dispose",oe),Wt=new Map,G.programs=Wt);let Xt=Wt.get(Ht);if(Xt!==void 0){if(G.currentProgram===Xt&&G.lightsStateVersion===Ut)return Na(R,Ft),Xt}else Ft.uniforms=Bt.getUniforms(R),R.onBuild($,Ft,f),R.onBeforeCompile(Ft,f),Xt=Bt.acquireProgram(Ft,Ht),Wt.set(Ht,Xt),G.uniforms=Ft.uniforms;const qt=G.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=j.uniform),Na(R,Ft),G.needsLights=Au(R),G.lightsStateVersion=Ut,G.needsLights&&(qt.ambientLightColor.value=et.state.ambient,qt.lightProbe.value=et.state.probe,qt.directionalLights.value=et.state.directional,qt.directionalLightShadows.value=et.state.directionalShadow,qt.spotLights.value=et.state.spot,qt.spotLightShadows.value=et.state.spotShadow,qt.rectAreaLights.value=et.state.rectArea,qt.ltc_1.value=et.state.rectAreaLTC1,qt.ltc_2.value=et.state.rectAreaLTC2,qt.pointLights.value=et.state.point,qt.pointLightShadows.value=et.state.pointShadow,qt.hemisphereLights.value=et.state.hemi,qt.directionalShadowMap.value=et.state.directionalShadowMap,qt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,qt.spotShadowMap.value=et.state.spotShadowMap,qt.spotLightMatrix.value=et.state.spotLightMatrix,qt.spotLightMap.value=et.state.spotLightMap,qt.pointShadowMap.value=et.state.pointShadowMap,qt.pointShadowMatrix.value=et.state.pointShadowMatrix);const $t=Xt.getUniforms(),Ae=Mr.seqWithValue($t.seq,qt);return G.currentProgram=Xt,G.uniformsList=Ae,Xt}function Na(R,W){const $=Q.get(R);$.outputColorSpace=W.outputColorSpace,$.instancing=W.instancing,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function bu(R,W,$,G,et){W.isScene!==!0&&(W=ut),st.resetTextureUnits();const Ct=W.fog,Ut=G.isMeshStandardMaterial?W.environment:null,Ft=M===null?f.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:nn,Ht=(G.isMeshStandardMaterial?ft:yt).get(G.envMap||Ut),Wt=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xt=!!G.normalMap&&!!$.attributes.tangent,qt=!!$.morphAttributes.position,$t=!!$.morphAttributes.normal,Ae=!!$.morphAttributes.color,je=G.toneMapped?f.toneMapping:Dn,jn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=jn!==void 0?jn.length:0,Zt=Q.get(G),Jr=m.state.lights;if(tt===!0&&(ht===!0||R!==T)){const Ue=R===T&&G.id===w;j.setState(G,R,Ue)}let me=!1;G.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Jr.state.version||Zt.outputColorSpace!==Ft||et.isInstancedMesh&&Zt.instancing===!1||!et.isInstancedMesh&&Zt.instancing===!0||et.isSkinnedMesh&&Zt.skinning===!1||!et.isSkinnedMesh&&Zt.skinning===!0||Zt.envMap!==Ht||G.fog===!0&&Zt.fog!==Ct||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==j.numPlanes||Zt.numIntersection!==j.numIntersection)||Zt.vertexAlphas!==Wt||Zt.vertexTangents!==Xt||Zt.morphTargets!==qt||Zt.morphNormals!==$t||Zt.morphColors!==Ae||Zt.toneMapping!==je||lt.isWebGL2===!0&&Zt.morphTargetsCount!==ce)&&(me=!0):(me=!0,Zt.__version=G.version);let Yn=Zt.currentProgram;me===!0&&(Yn=ks(G,W,et));let Fa=!1,ds=!1,Qr=!1;const Re=Yn.getUniforms(),Zn=Zt.uniforms;if(wt.useProgram(Yn.program)&&(Fa=!0,ds=!0,Qr=!0),G.id!==w&&(w=G.id,ds=!0),Fa||T!==R){if(Re.setValue(O,"projectionMatrix",R.projectionMatrix),lt.logarithmicDepthBuffer&&Re.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),T!==R&&(T=R,ds=!0,Qr=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Ue=Re.map.cameraPosition;Ue!==void 0&&Ue.setValue(O,it.setFromMatrixPosition(R.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Re.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||et.isSkinnedMesh)&&Re.setValue(O,"viewMatrix",R.matrixWorldInverse)}if(et.isSkinnedMesh){Re.setOptional(O,et,"bindMatrix"),Re.setOptional(O,et,"bindMatrixInverse");const Ue=et.skeleton;Ue&&(lt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Re.setValue(O,"boneTexture",Ue.boneTexture,st),Re.setValue(O,"boneTextureSize",Ue.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const to=$.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&lt.isWebGL2===!0)&&mt.update(et,$,Yn),(ds||Zt.receiveShadow!==et.receiveShadow)&&(Zt.receiveShadow=et.receiveShadow,Re.setValue(O,"receiveShadow",et.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Zn.envMap.value=Ht,Zn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),ds&&(Re.setValue(O,"toneMappingExposure",f.toneMappingExposure),Zt.needsLights&&Tu(Zn,Qr),Ct&&G.fog===!0&&Yt.refreshFogUniforms(Zn,Ct),Yt.refreshMaterialUniforms(Zn,G,C,H,J),Mr.upload(O,Zt.uniformsList,Zn,st)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Mr.upload(O,Zt.uniformsList,Zn,st),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Re.setValue(O,"center",et.center),Re.setValue(O,"modelViewMatrix",et.modelViewMatrix),Re.setValue(O,"normalMatrix",et.normalMatrix),Re.setValue(O,"modelMatrix",et.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ue=G.uniformsGroups;for(let eo=0,Ru=Ue.length;eo<Ru;eo++)if(lt.isWebGL2){const Oa=Ue[eo];Et.update(Oa,Yn),Et.bind(Oa,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function Tu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Au(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,W,$){Q.get(R.texture).__webglTexture=W,Q.get(R.depthTexture).__webglTexture=$;const G=Q.get(R);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=$===void 0,G.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const $=Q.get(R);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,$=0){M=R,v=W,S=$;let G=!0,et=null,Ct=!1,Ut=!1;if(R){const Ht=Q.get(R);Ht.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):Ht.__webglFramebuffer===void 0?st.setupRenderTarget(R):Ht.__hasExternalTextures&&st.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ut=!0);const Xt=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(et=Xt[W],Ct=!0):lt.isWebGL2&&R.samples>0&&st.useMultisampledRTT(R)===!1?et=Q.get(R).__webglMultisampledFramebuffer:et=Xt,L.copy(R.viewport),y.copy(R.scissor),b=R.scissorTest}else L.copy(F).multiplyScalar(C).floor(),y.copy(V).multiplyScalar(C).floor(),b=k;if(wt.bindFramebuffer(O.FRAMEBUFFER,et)&&lt.drawBuffers&&G&&wt.drawBuffers(R,et),wt.viewport(L),wt.scissor(y),wt.setScissorTest(b),Ct){const Ht=Q.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ht.__webglTexture,$)}else if(Ut){const Ht=Q.get(R.texture),Wt=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,$||0,Wt)}w=-1},this.readRenderTargetPixels=function(R,W,$,G,et,Ct,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){wt.bindFramebuffer(O.FRAMEBUFFER,Ft);try{const Ht=R.texture,Wt=Ht.format,Xt=Ht.type;if(Wt!==tn&&q.convert(Wt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=Xt===Ln&&(Dt.has("EXT_color_buffer_half_float")||lt.isWebGL2&&Dt.has("EXT_color_buffer_float"));if(Xt!==hi&&q.convert(Xt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===pn&&(lt.isWebGL2||Dt.has("OES_texture_float")||Dt.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-G&&$>=0&&$<=R.height-et&&O.readPixels(W,$,G,et,q.convert(Wt),q.convert(Xt),Ct)}finally{const Ht=M!==null?Q.get(M).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(R,W,$=0){const G=Math.pow(2,-$),et=Math.floor(W.image.width*G),Ct=Math.floor(W.image.height*G);st.setTexture2D(W,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,R.x,R.y,et,Ct),wt.unbindTexture()},this.copyTextureToTexture=function(R,W,$,G=0){const et=W.image.width,Ct=W.image.height,Ut=q.convert($.format),Ft=q.convert($.type);st.setTexture2D($,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,R.x,R.y,et,Ct,Ut,Ft,W.image.data):W.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Ut,W.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,R.x,R.y,Ut,Ft,W.image),G===0&&$.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,$,G,et=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=R.max.x-R.min.x+1,Ut=R.max.y-R.min.y+1,Ft=R.max.z-R.min.z+1,Ht=q.convert(G.format),Wt=q.convert(G.type);let Xt;if(G.isData3DTexture)st.setTexture3D(G,0),Xt=O.TEXTURE_3D;else if(G.isDataArrayTexture)st.setTexture2DArray(G,0),Xt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const qt=O.getParameter(O.UNPACK_ROW_LENGTH),$t=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ae=O.getParameter(O.UNPACK_SKIP_PIXELS),je=O.getParameter(O.UNPACK_SKIP_ROWS),jn=O.getParameter(O.UNPACK_SKIP_IMAGES),ce=$.isCompressedTexture?$.mipmaps[0]:$.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,R.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,R.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?O.texSubImage3D(Xt,et,W.x,W.y,W.z,Ct,Ut,Ft,Ht,Wt,ce.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Xt,et,W.x,W.y,W.z,Ct,Ut,Ft,Ht,ce.data)):O.texSubImage3D(Xt,et,W.x,W.y,W.z,Ct,Ut,Ft,Ht,Wt,ce),O.pixelStorei(O.UNPACK_ROW_LENGTH,qt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$t),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),O.pixelStorei(O.UNPACK_SKIP_ROWS,je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,jn),et===0&&G.generateMipmaps&&O.generateMipmap(Xt),wt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),wt.unbindTexture()},this.resetState=function(){v=0,S=0,M=null,wt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?ai:oh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ai?kt:nn}}class L0 extends bh{}L0.prototype.isWebGL1Renderer=!0;class I0 extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class D0 extends Le{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Me,h=Me,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs extends sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tl=new B,el=new B,nl=new re,Do=new _a,lr=new Ns;class U0 extends ye{constructor(t=new Ge,e=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)tl.fromBufferAttribute(e,i-1),el.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=tl.distanceTo(el);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(i),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;nl.copy(i).invert(),Do.copy(t.ray).applyMatrix4(nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,h=new B,d=new B,u=new B,p=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){const M=m.getX(v),w=m.getX(v+1);if(c.fromBufferAttribute(g,M),h.fromBufferAttribute(g,w),Do.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(u);L<t.near||L>t.far||e.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Do.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(u);w<t.near||w>t.far||e.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const il=new B,sl=new B;class ra extends U0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)il.fromBufferAttribute(e,i),sl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+il.distanceTo(sl);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Es extends sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rl=new re,oa=new _a,hr=new Ns,ur=new B;class Uo extends ye{constructor(t=new Ge,e=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;rl.copy(i).invert(),oa.copy(t.ray).applyMatrix4(rl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=u,_=p;m<_;m++){const g=c.getX(m);ur.fromBufferAttribute(d,g),ol(ur,g,l,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=u,_=p;m<_;m++)ur.fromBufferAttribute(d,m),ol(ur,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ol(s,t,e,n,i,r,o){const a=oa.distanceSqToPoint(s);if(a<e){const l=new B;oa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,p=(o-h)/u;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new dt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,i=[],r=[],o=[],a=new B,l=new re;for(let p=0;p<=t;p++){const m=p/t;i[p]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(_e(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ya extends gn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new dt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class N0 extends ya{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ma(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,i(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const dr=new B,No=new Ma,Fo=new Ma,Oo=new Ma;class F0 extends gn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(dr.subVectors(i[0],i[1]).add(i[0]),c=dr);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(dr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),No.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,g),Fo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,g),Oo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(No.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Fo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Oo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(No.calc(l),Fo.calc(l),Oo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function al(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function O0(s,t){const e=1-s;return e*e*t}function B0(s,t){return 2*(1-s)*s*t}function z0(s,t){return s*s*t}function Ts(s,t,e,n){return O0(s,t)+B0(s,e)+z0(s,n)}function k0(s,t){const e=1-s;return e*e*e*t}function H0(s,t){const e=1-s;return 3*e*e*s*t}function G0(s,t){return 3*(1-s)*s*s*t}function V0(s,t){return s*s*s*t}function As(s,t,e,n,i){return k0(s,t)+H0(s,e)+G0(s,n)+V0(s,i)}class Th extends gn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(t,i.x,r.x,o.x,a.x),As(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class W0 extends gn{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(t,i.x,r.x,o.x,a.x),As(t,i.y,r.y,o.y,a.y),As(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sa extends gn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X0 extends gn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ah extends gn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ts(t,i.x,r.x,o.x),Ts(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q0 extends gn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ts(t,i.x,r.x,o.x),Ts(t,i.y,r.y,o.y),Ts(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(al(a,l.x,c.x,h.x,d.x),al(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var Ch=Object.freeze({__proto__:null,ArcCurve:N0,CatmullRomCurve3:F0,CubicBezierCurve:Th,CubicBezierCurve3:W0,EllipseCurve:ya,LineCurve:Sa,LineCurve3:X0,QuadraticBezierCurve:Ah,QuadraticBezierCurve3:q0,SplineCurve:Rh});class j0 extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Sa(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ch[i.type]().fromJSON(i))}return this}}class aa extends j0{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sa(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ah(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Th(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Rh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new ya(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Sr=class extends aa{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new aa().fromJSON(i))}return this}};const Y0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Ph(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,p;if(n&&(r=Q0(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)d=s[m],u=s[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Ps(r,o,e,a,l,p,0),o}};function Ph(s,t,e,n,i){let r,o;if(i===h_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=cl(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=cl(r,s[r],s[r+1],o);return o&&kr(o,o.next)&&(Is(o),o=o.next),o}function mi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(kr(e,e.next)||ne(e.prev,e,e.next)===0)){if(Is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(s,t,e,n,i,r,o){if(!s)return;!o&&r&&s_(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?K0(s,n,i,r):Z0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Is(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=$0(mi(s),t,e),Ps(s,t,e,n,i,r,2)):o===2&&J0(s,t,e,n,i,r):Ps(mi(s),t,e,n,i,r,1);break}}}function Z0(s){const t=s.prev,e=s,n=s.next;if(ne(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&Wi(i,a,r,l,o,c,m.x,m.y)&&ne(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function K0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ne(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,_=a>l?a>c?a:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,f=ca(p,m,t,e,n),x=ca(_,g,t,e,n);let v=s.prevZ,S=s.nextZ;for(;v&&v.z>=f&&S&&S.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Wi(a,h,l,d,c,u,v.x,v.y)&&ne(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Wi(a,h,l,d,c,u,S.x,S.y)&&ne(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Wi(a,h,l,d,c,u,v.x,v.y)&&ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Wi(a,h,l,d,c,u,S.x,S.y)&&ne(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function $0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!kr(i,r)&&Lh(i,n,n.next,r)&&Ls(i,r)&&Ls(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Is(n),Is(n.next),n=s=r),n=n.next}while(n!==s);return mi(n)}function J0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&a_(o,a)){let l=Ih(o,a);o=mi(o,o.next),l=mi(l,l.next),Ps(o,t,e,n,i,r,0),Ps(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Q0(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Ph(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(o_(c));for(i.sort(t_),r=0;r<i.length;r++)e=e_(i[r],e);return e}function t_(s,t){return s.x-t.x}function e_(s,t){const e=n_(s,t);if(!e)return t;const n=Ih(e,s);return mi(n,n.next),mi(e,e.next)}function n_(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Wi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Ls(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&i_(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function i_(s,t){return ne(s.prev,s,t.prev)<0&&ne(t.next,s,s.next)<0}function s_(s,t,e,n){let i=s;do i.z===0&&(i.z=ca(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,r_(i)}function r_(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function ca(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function o_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Wi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function a_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!c_(s,t)&&(Ls(s,t)&&Ls(t,s)&&l_(s,t)&&(ne(s.prev,s,t.prev)||ne(s,t.prev,t))||kr(s,t)&&ne(s.prev,s,s.next)>0&&ne(t.prev,t,t.next)>0)}function ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function kr(s,t){return s.x===t.x&&s.y===t.y}function Lh(s,t,e,n){const i=pr(ne(s,t,e)),r=pr(ne(s,t,n)),o=pr(ne(e,n,s)),a=pr(ne(e,n,t));return!!(i!==r&&o!==a||i===0&&fr(s,e,t)||r===0&&fr(s,n,t)||o===0&&fr(e,s,n)||a===0&&fr(e,t,n))}function fr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function pr(s){return s>0?1:s<0?-1:0}function c_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Lh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ls(s,t){return ne(s.prev,s,s.next)<0?ne(s,t,s.next)>=0&&ne(s,s.prev,t)>=0:ne(s,t,s.prev)<0||ne(s,s.next,t)<0}function l_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ih(s,t){const e=new la(s.i,s.x,s.y),n=new la(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cl(s,t,e,n){const i=new la(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Is(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function la(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function h_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ki{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ki.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];ll(t),hl(n,t);let o=t.length;e.forEach(ll);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,hl(n,e[l]);const a=Y0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ll(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function hl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ea extends Ge{constructor(t=new Sr([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ve(i,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:u_;let v,S=!1,M,w,T,L;f&&(v=f.getSpacedPoints(h),S=!0,u=!1,M=f.computeFrenetFrames(h,!1),w=new B,T=new B,L=new B),u||(g=0,p=0,m=0,_=0);const y=a.extractPoints(c);let b=y.shape;const U=y.holes;if(!Ki.isClockWise(b)){b=b.reverse();for(let rt=0,Q=U.length;rt<Q;rt++){const st=U[rt];Ki.isClockWise(st)&&(U[rt]=st.reverse())}}const C=Ki.triangulateShape(b,U),I=b;for(let rt=0,Q=U.length;rt<Q;rt++){const st=U[rt];b=b.concat(st)}function D(rt,Q,st){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(Q,st)}const F=b.length,V=C.length;function k(rt,Q,st){let yt,ft,Pt;const Lt=rt.x-Q.x,Rt=rt.y-Q.y,Bt=st.x-rt.x,Yt=st.y-rt.y,P=Lt*Lt+Rt*Rt,A=Lt*Yt-Rt*Bt;if(Math.abs(A)>Number.EPSILON){const j=Math.sqrt(P),ot=Math.sqrt(Bt*Bt+Yt*Yt),at=Q.x-Rt/j,mt=Q.y+Lt/j,N=st.x-Yt/ot,nt=st.y+Bt/ot,q=((N-at)*Yt-(nt-mt)*Bt)/(Lt*Yt-Rt*Bt);yt=at+Lt*q-rt.x,ft=mt+Rt*q-rt.y;const _t=yt*yt+ft*ft;if(_t<=2)return new dt(yt,ft);Pt=Math.sqrt(_t/2)}else{let j=!1;Lt>Number.EPSILON?Bt>Number.EPSILON&&(j=!0):Lt<-Number.EPSILON?Bt<-Number.EPSILON&&(j=!0):Math.sign(Rt)===Math.sign(Yt)&&(j=!0),j?(yt=-Rt,ft=Lt,Pt=Math.sqrt(P)):(yt=Lt,ft=Rt,Pt=Math.sqrt(P/2))}return new dt(yt/Pt,ft/Pt)}const X=[];for(let rt=0,Q=I.length,st=Q-1,yt=rt+1;rt<Q;rt++,st++,yt++)st===Q&&(st=0),yt===Q&&(yt=0),X[rt]=k(I[rt],I[st],I[yt]);const tt=[];let ht,J=X.concat();for(let rt=0,Q=U.length;rt<Q;rt++){const st=U[rt];ht=[];for(let yt=0,ft=st.length,Pt=ft-1,Lt=yt+1;yt<ft;yt++,Pt++,Lt++)Pt===ft&&(Pt=0),Lt===ft&&(Lt=0),ht[yt]=k(st[yt],st[Pt],st[Lt]);tt.push(ht),J=J.concat(ht)}for(let rt=0;rt<g;rt++){const Q=rt/g,st=p*Math.cos(Q*Math.PI/2),yt=m*Math.sin(Q*Math.PI/2)+_;for(let ft=0,Pt=I.length;ft<Pt;ft++){const Lt=D(I[ft],X[ft],yt);O(Lt.x,Lt.y,-st)}for(let ft=0,Pt=U.length;ft<Pt;ft++){const Lt=U[ft];ht=tt[ft];for(let Rt=0,Bt=Lt.length;Rt<Bt;Rt++){const Yt=D(Lt[Rt],ht[Rt],yt);O(Yt.x,Yt.y,-st)}}}const Y=m+_;for(let rt=0;rt<F;rt++){const Q=u?D(b[rt],J[rt],Y):b[rt];S?(T.copy(M.normals[0]).multiplyScalar(Q.x),w.copy(M.binormals[0]).multiplyScalar(Q.y),L.copy(v[0]).add(T).add(w),O(L.x,L.y,L.z)):O(Q.x,Q.y,0)}for(let rt=1;rt<=h;rt++)for(let Q=0;Q<F;Q++){const st=u?D(b[Q],J[Q],Y):b[Q];S?(T.copy(M.normals[rt]).multiplyScalar(st.x),w.copy(M.binormals[rt]).multiplyScalar(st.y),L.copy(v[rt]).add(T).add(w),O(L.x,L.y,L.z)):O(st.x,st.y,d/h*rt)}for(let rt=g-1;rt>=0;rt--){const Q=rt/g,st=p*Math.cos(Q*Math.PI/2),yt=m*Math.sin(Q*Math.PI/2)+_;for(let ft=0,Pt=I.length;ft<Pt;ft++){const Lt=D(I[ft],X[ft],yt);O(Lt.x,Lt.y,d+st)}for(let ft=0,Pt=U.length;ft<Pt;ft++){const Lt=U[ft];ht=tt[ft];for(let Rt=0,Bt=Lt.length;Rt<Bt;Rt++){const Yt=D(Lt[Rt],ht[Rt],yt);S?O(Yt.x,Yt.y+v[h-1].y,v[h-1].x+st):O(Yt.x,Yt.y,d+st)}}}it(),ut();function it(){const rt=i.length/3;if(u){let Q=0,st=F*Q;for(let yt=0;yt<V;yt++){const ft=C[yt];It(ft[2]+st,ft[1]+st,ft[0]+st)}Q=h+g*2,st=F*Q;for(let yt=0;yt<V;yt++){const ft=C[yt];It(ft[0]+st,ft[1]+st,ft[2]+st)}}else{for(let Q=0;Q<V;Q++){const st=C[Q];It(st[2],st[1],st[0])}for(let Q=0;Q<V;Q++){const st=C[Q];It(st[0]+F*h,st[1]+F*h,st[2]+F*h)}}n.addGroup(rt,i.length/3-rt,0)}function ut(){const rt=i.length/3;let Q=0;pt(I,Q),Q+=I.length;for(let st=0,yt=U.length;st<yt;st++){const ft=U[st];pt(ft,Q),Q+=ft.length}n.addGroup(rt,i.length/3-rt,1)}function pt(rt,Q){let st=rt.length;for(;--st>=0;){const yt=st;let ft=st-1;ft<0&&(ft=rt.length-1);for(let Pt=0,Lt=h+g*2;Pt<Lt;Pt++){const Rt=F*Pt,Bt=F*(Pt+1),Yt=Q+yt+Rt,P=Q+ft+Rt,A=Q+ft+Bt,j=Q+yt+Bt;Dt(Yt,P,A,j)}}}function O(rt,Q,st){l.push(rt),l.push(Q),l.push(st)}function It(rt,Q,st){lt(rt),lt(Q),lt(st);const yt=i.length/3,ft=x.generateTopUV(n,i,yt-3,yt-2,yt-1);wt(ft[0]),wt(ft[1]),wt(ft[2])}function Dt(rt,Q,st,yt){lt(rt),lt(Q),lt(yt),lt(Q),lt(st),lt(yt);const ft=i.length/3,Pt=x.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);wt(Pt[0]),wt(Pt[1]),wt(Pt[3]),wt(Pt[1]),wt(Pt[2]),wt(Pt[3])}function lt(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function wt(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return d_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ch[i.type]().fromJSON(i)),new Ea(n,t.options)}}const u_={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new dt(r,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],p=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-d),new dt(u,1-m),new dt(_,1-f)]:[new dt(a,1-l),new dt(h,1-d),new dt(p,1-m),new dt(g,1-f)]}};function d_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wa extends sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dh extends sn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ot(16777215),this.specular=new Ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class f_ extends sn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Rr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class p_{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}}const Uh=new p_;class _i{constructor(t){this.manager=t!==void 0?t:Uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const En={};class m_ extends Error{constructor(t,e){super(t),this.response=e}}class Hr extends _i{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Rr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(En[t]!==void 0){En[t].push({onLoad:e,onProgress:n,onError:i});return}En[t]=[],En[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=En[t],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=u?parseInt(u):0,m=p!==0;let _=0;const g=new ReadableStream({start(f){x();function x(){d.read().then(({done:v,value:S})=>{if(v)f.close();else{_+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let w=0,T=h.length;w<T;w++){const L=h[w];L.onProgress&&L.onProgress(M)}f.enqueue(S),x()}})}}});return new Response(g)}else throw new m_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Rr.add(t,c);const h=En[t];delete En[t];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=En[t];if(h===void 0)throw this.manager.itemError(t),c;delete En[t];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class g_ extends _i{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Rr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Cs("img");function l(){h(),Rr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class __ extends _i{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new D0,a=new Hr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:ze,o.wrapT=c.wrapT!==void 0?c.wrapT:ze,o.magFilter=c.magFilter!==void 0?c.magFilter:Se,o.minFilter=c.minFilter!==void 0?c.minFilter:Se,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ns),c.mipmapCount===1&&(o.minFilter=Se),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c))},n,i),o}}class Nh extends _i{constructor(t){super(t)}load(t,e,n,i){const r=new Le,o=new g_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Fh extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Bo=new re,ul=new B,dl=new B;class v_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ul.setFromMatrixPosition(t.matrixWorld),e.position.copy(ul),dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dl),e.updateMatrixWorld(),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x_ extends v_{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y_ extends Fh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new x_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class M_ extends Fh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class S_{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class fl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E_{constructor(){this.type="ShapePath",this.color=new Ot,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new aa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(f){const x=[];for(let v=0,S=f.length;v<S;v++){const M=f[v],w=new Sr;w.curves=M.curves,x.push(w)}return x}function n(f,x){const v=x.length;let S=!1;for(let M=v-1,w=0;w<v;M=w++){let T=x[M],L=x[w],y=L.x-T.x,b=L.y-T.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(T=x[w],y=-y,L=x[M],b=-b),f.y<T.y||f.y>L.y)continue;if(f.y===T.y){if(f.x===T.x)return!0}else{const U=b*(f.x-T.x)-y*(f.y-T.y);if(U===0)return!0;if(U<0)continue;S=!S}}else{if(f.y!==T.y)continue;if(L.x<=f.x&&f.x<=T.x||T.x<=f.x&&f.x<=L.x)return!0}}return S}const i=Ki.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Sr,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;const d=[],u=[];let p=[],m=0,_;u[m]=void 0,p[m]=[];for(let f=0,x=r.length;f<x;f++)a=r[f],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&u[m]&&m++,u[m]={s:new Sr,p:_},u[m].s.curves=a.curves,h&&m++,p[m]=[]):p[m].push({h:a,p:_[0]});if(!u[0])return e(r);if(u.length>1){let f=!1,x=0;for(let v=0,S=u.length;v<S;v++)d[v]=[];for(let v=0,S=u.length;v<S;v++){const M=p[v];for(let w=0;w<M.length;w++){const T=M[w];let L=!0;for(let y=0;y<u.length;y++)n(T.p,u[y].p)&&(v!==y&&x++,L?(L=!1,d[y].push(T)):f=!0);L&&d[v].push(T)}}x>0&&f===!1&&(p=d)}let g;for(let f=0,x=u.length;f<x;f++){l=u[f].s,c.push(l),g=p[f];for(let v=0,S=g.length;v<S;v++)l.holes.push(g[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);const pl={type:"change"},zo={type:"start"},ml={type:"end"};class w_ extends Wn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Bt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Bt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pl),n.update(),r=i.NONE},this.update=function(){const N=new B,nt=new di().setFromUnitVectors(t.up,new B(0,1,0)),q=nt.clone().invert(),_t=new B,Et=new di,Tt=2*Math.PI;return function(){const bt=n.object.position;N.copy(bt).sub(n.target),N.applyQuaternion(nt),a.setFromVector3(N),n.autoRotate&&r===i.NONE&&y(T()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Nt=n.minAzimuthAngle,Vt=n.maxAzimuthAngle;return isFinite(Nt)&&isFinite(Vt)&&(Nt<-Math.PI?Nt+=Tt:Nt>Math.PI&&(Nt-=Tt),Vt<-Math.PI?Vt+=Tt:Vt>Math.PI&&(Vt-=Tt),Nt<=Vt?a.theta=Math.max(Nt,Math.min(Vt,a.theta)):a.theta=a.theta>(Nt+Vt)/2?Math.max(Nt,a.theta):Math.min(Vt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),N.setFromSpherical(a),N.applyQuaternion(q),bt.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||_t.distanceToSquared(n.object.position)>o||8*(1-Et.dot(n.object.quaternion))>o?(n.dispatchEvent(pl),_t.copy(n.object.position),Et.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",st),n.domElement.removeEventListener("pointercancel",ft),n.domElement.removeEventListener("wheel",Rt),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",ft),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Bt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new fl,l=new fl;let c=1;const h=new B;let d=!1;const u=new dt,p=new dt,m=new dt,_=new dt,g=new dt,f=new dt,x=new dt,v=new dt,S=new dt,M=[],w={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function y(N){l.theta-=N}function b(N){l.phi-=N}const U=function(){const N=new B;return function(q,_t){N.setFromMatrixColumn(_t,0),N.multiplyScalar(-q),h.add(N)}}(),H=function(){const N=new B;return function(q,_t){n.screenSpacePanning===!0?N.setFromMatrixColumn(_t,1):(N.setFromMatrixColumn(_t,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(q),h.add(N)}}(),C=function(){const N=new B;return function(q,_t){const Et=n.domElement;if(n.object.isPerspectiveCamera){const Tt=n.object.position;N.copy(Tt).sub(n.target);let vt=N.length();vt*=Math.tan(n.object.fov/2*Math.PI/180),U(2*q*vt/Et.clientHeight,n.object.matrix),H(2*_t*vt/Et.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(q*(n.object.right-n.object.left)/n.object.zoom/Et.clientWidth,n.object.matrix),H(_t*(n.object.top-n.object.bottom)/n.object.zoom/Et.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(N){n.object.isPerspectiveCamera?c/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(N){n.object.isPerspectiveCamera?c*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(N){u.set(N.clientX,N.clientY)}function V(N){x.set(N.clientX,N.clientY)}function k(N){_.set(N.clientX,N.clientY)}function X(N){p.set(N.clientX,N.clientY),m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const nt=n.domElement;y(2*Math.PI*m.x/nt.clientHeight),b(2*Math.PI*m.y/nt.clientHeight),u.copy(p),n.update()}function tt(N){v.set(N.clientX,N.clientY),S.subVectors(v,x),S.y>0?I(L()):S.y<0&&D(L()),x.copy(v),n.update()}function ht(N){g.set(N.clientX,N.clientY),f.subVectors(g,_).multiplyScalar(n.panSpeed),C(f.x,f.y),_.copy(g),n.update()}function J(N){N.deltaY<0?D(L()):N.deltaY>0&&I(L()),n.update()}function Y(N){let nt=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),nt=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),nt=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),nt=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),nt=!0;break}nt&&(N.preventDefault(),n.update())}function it(){if(M.length===1)u.set(M[0].pageX,M[0].pageY);else{const N=.5*(M[0].pageX+M[1].pageX),nt=.5*(M[0].pageY+M[1].pageY);u.set(N,nt)}}function ut(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const N=.5*(M[0].pageX+M[1].pageX),nt=.5*(M[0].pageY+M[1].pageY);_.set(N,nt)}}function pt(){const N=M[0].pageX-M[1].pageX,nt=M[0].pageY-M[1].pageY,q=Math.sqrt(N*N+nt*nt);x.set(0,q)}function O(){n.enableZoom&&pt(),n.enablePan&&ut()}function It(){n.enableZoom&&pt(),n.enableRotate&&it()}function Dt(N){if(M.length==1)p.set(N.pageX,N.pageY);else{const q=mt(N),_t=.5*(N.pageX+q.x),Et=.5*(N.pageY+q.y);p.set(_t,Et)}m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const nt=n.domElement;y(2*Math.PI*m.x/nt.clientHeight),b(2*Math.PI*m.y/nt.clientHeight),u.copy(p)}function lt(N){if(M.length===1)g.set(N.pageX,N.pageY);else{const nt=mt(N),q=.5*(N.pageX+nt.x),_t=.5*(N.pageY+nt.y);g.set(q,_t)}f.subVectors(g,_).multiplyScalar(n.panSpeed),C(f.x,f.y),_.copy(g)}function wt(N){const nt=mt(N),q=N.pageX-nt.x,_t=N.pageY-nt.y,Et=Math.sqrt(q*q+_t*_t);v.set(0,Et),S.set(0,Math.pow(v.y/x.y,n.zoomSpeed)),I(S.y),x.copy(v)}function rt(N){n.enableZoom&&wt(N),n.enablePan&&lt(N)}function Q(N){n.enableZoom&&wt(N),n.enableRotate&&Dt(N)}function st(N){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",yt),n.domElement.addEventListener("pointerup",ft)),j(N),N.pointerType==="touch"?Yt(N):Pt(N))}function yt(N){n.enabled!==!1&&(N.pointerType==="touch"?P(N):Lt(N))}function ft(N){ot(N),M.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",ft)),n.dispatchEvent(ml),r=i.NONE}function Pt(N){let nt;switch(N.button){case 0:nt=n.mouseButtons.LEFT;break;case 1:nt=n.mouseButtons.MIDDLE;break;case 2:nt=n.mouseButtons.RIGHT;break;default:nt=-1}switch(nt){case xi.DOLLY:if(n.enableZoom===!1)return;V(N),r=i.DOLLY;break;case xi.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;k(N),r=i.PAN}else{if(n.enableRotate===!1)return;F(N),r=i.ROTATE}break;case xi.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;F(N),r=i.ROTATE}else{if(n.enablePan===!1)return;k(N),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(zo)}function Lt(N){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;X(N);break;case i.DOLLY:if(n.enableZoom===!1)return;tt(N);break;case i.PAN:if(n.enablePan===!1)return;ht(N);break}}function Rt(N){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(N.preventDefault(),n.dispatchEvent(zo),J(N),n.dispatchEvent(ml))}function Bt(N){n.enabled===!1||n.enablePan===!1||Y(N)}function Yt(N){switch(at(N),M.length){case 1:switch(n.touches.ONE){case yi.ROTATE:if(n.enableRotate===!1)return;it(),r=i.TOUCH_ROTATE;break;case yi.PAN:if(n.enablePan===!1)return;ut(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(),r=i.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;It(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(zo)}function P(N){switch(at(N),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Dt(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;lt(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;rt(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(N),n.update();break;default:r=i.NONE}}function A(N){n.enabled!==!1&&N.preventDefault()}function j(N){M.push(N)}function ot(N){delete w[N.pointerId];for(let nt=0;nt<M.length;nt++)if(M[nt].pointerId==N.pointerId){M.splice(nt,1);return}}function at(N){let nt=w[N.pointerId];nt===void 0&&(nt=new dt,w[N.pointerId]=nt),nt.set(N.pageX,N.pageY)}function mt(N){const nt=N.pointerId===M[0].pointerId?M[1]:M[0];return w[nt.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",st),n.domElement.addEventListener("pointercancel",ft),n.domElement.addEventListener("wheel",Rt,{passive:!1}),this.update()}}const Oi=new Fs(0,0,0,"YXZ"),Bi=new B,b_={type:"change"},T_={type:"lock"},A_={type:"unlock"},gl=Math.PI/2;class R_ extends Wn{constructor(t,e){super(),this.camera=t,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=C_.bind(this),this._onPointerlockChange=P_.bind(this),this._onPointerlockError=L_.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){const e=this.camera;Bi.setFromMatrixColumn(e.matrix,0),Bi.crossVectors(e.up,Bi),e.position.addScaledVector(Bi,t)}moveRight(t){const e=this.camera;Bi.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Bi,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function C_(s){if(this.isLocked===!1)return;const t=s.movementX||s.mozMovementX||s.webkitMovementX||0,e=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.camera;Oi.setFromQuaternion(n.quaternion),Oi.y-=t*.002*this.pointerSpeed,Oi.x-=e*.002*this.pointerSpeed,Oi.x=Math.max(gl-this.maxPolarAngle,Math.min(gl-this.minPolarAngle,Oi.x)),n.quaternion.setFromEuler(Oi),this.dispatchEvent(b_)}function P_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(T_),this.isLocked=!0):(this.dispatchEvent(A_),this.isLocked=!1)}function L_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class I_ extends _i{constructor(t){super(t)}load(t,e,n,i){const r=this,o=this.path===""?S_.extractUrlBase(t):this.path,a=new Hr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{e(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){const n=t.split(`
`);let i={};const r=/\s+/,o={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const h=c.indexOf(" ");let d=h>=0?c.substring(0,h):c;d=d.toLowerCase();let u=h>=0?c.substring(h+1):"";if(u=u.trim(),d==="newmtl")i={name:u},o[u]=i;else if(d==="ka"||d==="kd"||d==="ks"||d==="ke"){const p=u.split(r,3);i[d]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else i[d]=u}const a=new D_(this.resourcePath||e,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class D_{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Un,this.wrap=this.options.wrap!==void 0?this.options.wrap:es}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const e={};for(const n in t){const i=t[n],r={};e[n]=r;for(const o in i){let a=!0,l=i[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(r[c]=l)}}return e}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const e=this,n=this.materialsInfo[t],i={name:t,side:this.side};function r(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(i[a])return;const c=e.getTextureParams(l,i),h=e.loadTexture(r(e.baseUrl,c.url));h.repeat.copy(c.scale),h.offset.copy(c.offset),h.wrapS=e.wrap,h.wrapT=e.wrap,(a==="map"||a==="emissiveMap")&&(h.colorSpace=kt),i[a]=h}for(const a in n){const l=n[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":i.color=new Ot().fromArray(l).convertSRGBToLinear();break;case"ks":i.specular=new Ot().fromArray(l).convertSRGBToLinear();break;case"ke":i.emissive=new Ot().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),i.transparent=!0;break;case"ns":i.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(i.opacity=c,i.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(i.opacity=1-c,i.transparent=!0);break}}return this.materials[t]=new Dh(i),this.materials[t]}getTextureParams(t,e){const n={scale:new dt(1,1),offset:new dt(0,0)},i=t.split(/\s+/);let r;return r=i.indexOf("-bm"),r>=0&&(e.bumpScale=parseFloat(i[r+1]),i.splice(r,2)),r=i.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),r=i.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),n.url=i.join(" ").trim(),n}loadTexture(t,e,n,i,r){const o=this.manager!==void 0?this.manager:Uh;let a=o.getHandler(t);a===null&&(a=new Nh(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(t,n,i,r);return e!==void 0&&(l.mapping=e),l}}const U_=/^[og]\s*(.+)?/,N_=/^mtllib /,F_=/^usemtl /,O_=/^usemap /,_l=/\s+/,vl=new B,ko=new B,xl=new B,yl=new B,qe=new B,mr=new Ot;function B_(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[t+0],i[t+1],i[t+2]),r.push(i[e+0],i[e+1],i[e+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[t+0],i[t+1],i[t+2]),r.push(i[e+0],i[e+1],i[e+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,r=this.object.geometry.normals;vl.fromArray(i,t),ko.fromArray(i,e),xl.fromArray(i,n),qe.subVectors(xl,ko),yl.subVectors(vl,ko),qe.cross(yl),qe.normalize(),r.push(qe.x,qe.y,qe.z),r.push(qe.x,qe.y,qe.z),r.push(qe.x,qe.y,qe.z)},addColor:function(t,e,n){const i=this.colors,r=this.object.geometry.colors;i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[t+0],i[t+1]),r.push(i[e+0],i[e+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,r,o,a,l,c){const h=this.vertices.length;let d=this.parseVertexIndex(t,h),u=this.parseVertexIndex(e,h),p=this.parseVertexIndex(n,h);if(this.addVertex(d,u,p),this.addColor(d,u,p),a!==void 0&&a!==""){const m=this.normals.length;d=this.parseNormalIndex(a,m),u=this.parseNormalIndex(l,m),p=this.parseNormalIndex(c,m),this.addNormal(d,u,p)}else this.addFaceNormal(d,u,p);if(i!==void 0&&i!==""){const m=this.uvs.length;d=this.parseUVIndex(i,m),u=this.parseUVIndex(r,m),p=this.parseUVIndex(o,m),this.addUV(d,u,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=t.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,o=e.length;r<o;r++)this.addUVLine(this.parseUVIndex(e[r],i))}};return s.startObject("",!1),s}class z_ extends _i{constructor(t){super(t),this.materials=null}load(t,e,n,i){const r=this,o=new Hr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new B_;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const d=c.split(_l);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(mr.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),e.colors.push(mr.r,mr.g,mr.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(h==="f"){const u=c.slice(1).trim().split(_l),p=[];for(let _=0,g=u.length;_<g;_++){const f=u[_];if(f.length>0){const x=f.split("/");p.push(x)}}const m=p[0];for(let _=1,g=p.length-1;_<g;_++){const f=p[_],x=p[_+1];e.addFace(m[0],f[0],x[0],m[1],f[1],x[1],m[2],f[2],x[2])}}else if(h==="l"){const d=c.substring(1).trim().split(" ");let u=[];const p=[];if(c.indexOf("/")===-1)u=d;else for(let m=0,_=d.length;m<_;m++){const g=d[m].split("/");g[0]!==""&&u.push(g[0]),g[1]!==""&&p.push(g[1])}e.addLineGeometry(u,p)}else if(h==="p"){const u=c.slice(1).trim().split(" ");e.addPointGeometry(u)}else if((i=U_.exec(c))!==null){const d=(" "+i[0].slice(1).trim()).slice(1);e.startObject(d)}else if(F_.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(N_.test(c))e.materialLibraries.push(c.substring(7).trim());else if(O_.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const u=i[1].trim().toLowerCase();e.object.smooth=u!=="0"&&u!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const r=new Vi;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],h=c.geometry,d=c.materials,u=h.type==="Line",p=h.type==="Points";let m=!1;if(h.vertices.length===0)continue;const _=new Ge;_.setAttribute("position",new ve(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new ve(h.normals,3)),h.colors.length>0&&(m=!0,_.setAttribute("color",new ve(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new ve(h.uvs,2));const g=[];for(let x=0,v=d.length;x<v;x++){const S=d[x],M=S.name+"_"+S.smooth+"_"+m;let w=e.materials[M];if(this.materials!==null){if(w=this.materials.create(S.name),u&&w&&!(w instanceof bs)){const T=new bs;sn.prototype.copy.call(T,w),T.color.copy(w.color),w=T}else if(p&&w&&!(w instanceof Es)){const T=new Es({size:10,sizeAttenuation:!1});sn.prototype.copy.call(T,w),T.color.copy(w.color),T.map=w.map,w=T}}w===void 0&&(u?w=new bs:p?w=new Es({size:1,sizeAttenuation:!1}):w=new Dh,w.name=S.name,w.flatShading=!S.smooth,w.vertexColors=m,e.materials[M]=w),g.push(w)}let f;if(g.length>1){for(let x=0,v=d.length;x<v;x++){const S=d[x];_.addGroup(S.groupStart,S.groupCount,x)}u?f=new ra(_,g):p?f=new Uo(_,g):f=new se(_,g)}else u?f=new ra(_,g[0]):p?f=new Uo(_,g[0]):f=new se(_,g[0]);f.name=c.name,r.add(f)}else if(e.vertices.length>0){const a=new Es({size:1,sizeAttenuation:!1}),l=new Ge;l.setAttribute("position",new ve(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new ve(e.colors,3)),a.vertexColors=!0);const c=new Uo(l,a);r.add(c)}return r}}class en{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new en);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],p=n[7],m=n[8],_=i[0],g=i[1],f=i[2],x=i[3],v=i[4],S=i[5],M=i[6],w=i[7],T=i[8];return r[0]=o*_+a*x+l*M,r[1]=o*g+a*v+l*w,r[2]=o*f+a*S+l*T,r[3]=c*_+h*x+d*M,r[4]=c*g+h*v+d*w,r[5]=c*f+h*S+d*T,r[6]=u*_+p*x+m*M,r[7]=u*g+p*v+m*w,r[8]=u*f+p*S+m*T,e}scale(t,e){e===void 0&&(e=new en);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const p=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*p;while(--h)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new en);const e=3,n=6,i=k_;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,p=n*l,m=i*l,_=r*o,g=r*a,f=r*l,x=this.elements;return x[3*0+0]=1-(u+m),x[3*0+1]=h-f,x[3*0+2]=d+g,x[3*1+0]=h+f,x[3*1+1]=1-(c+m),x[3*1+2]=p-_,x[3*2+0]=d-g,x[3*2+1]=p+_,x[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new en);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const k_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new en([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new E);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=H_,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=G_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ml),Ml.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const H_=new E,G_=new E,Ml=new E;class Ve{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Sl),c=Sl),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ve().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=El,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=El,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(m<0||p>m)}}const Sl=new E,El=[new E,new E,new E,new E,new E,new E,new E,new E];class wl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Oh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class ue{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=V_,i=W_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ue);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-r*l,e.y=i*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new ue);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new ue),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,p=-o*n-a*i-l*r;return e.x=h*c+p*-o+d*-l-u*-a,e.y=d*c+p*-a+u*-o-h*-l,e.z=u*c+p*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,p=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*p),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new ue(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ue);const i=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,p,m,_,g;return p=i*l+r*c+o*h+a*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),m=Math.sin(u),_=Math.sin((1-e)*u)/m,g=Math.sin(e*u)/m):(_=1-e,g=e),n.x=_*i+g*l,n.y=_*r+g*c,n.z=_*o+g*h,n.w=_*a+g*d,n}integrate(t,e,n,i){i===void 0&&(i=new ue);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}}const V_=new E,W_=new E,X_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class St{constructor(t){t===void 0&&(t={}),this.id=St.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}St.idCounter=0;St.types=X_;class Kt{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new ue,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Kt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Kt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),n.vsub(t,i),e.conjugate(bl),bl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new E),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const bl=new ue;class $i extends St{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:St.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];$i.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new E,o=new E;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){const h=new E;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),r.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=m)}const p=[];for(let m=0;m<n.faces[d].length;m++){const _=n.vertices[n.faces[d][m]],g=new E;g.copy(_),r.vmult(g,g),i.vadd(g,g),p.push(g)}d>=0&&this.clipFaceAgainstHull(o,t,e,p,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){const c=new E,h=new E,d=new E,u=new E,p=new E,m=new E;let _=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let f=0;f!==g.uniqueAxes.length;f++){n.vmult(g.uniqueAxes[f],c);const x=g.testSepAxis(c,t,e,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}else{const f=a?a.length:g.faces.length;for(let x=0;x<f;x++){const v=a?a[x]:x;c.copy(g.faceNormals[v]),n.vmult(c,c);const S=g.testSepAxis(c,t,e,n,i,r);if(S===!1)return!1;S<_&&(_=S,o.copy(c))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){r.vmult(t.uniqueAxes[f],h);const x=g.testSepAxis(h,t,e,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(h))}else{const f=l?l.length:t.faces.length;for(let x=0;x<f;x++){const v=l?l[x]:x;h.copy(t.faceNormals[v]),r.vmult(h,h);const S=g.testSepAxis(h,t,e,n,i,r);if(S===!1)return!1;S<_&&(_=S,o.copy(h))}}for(let f=0;f!==g.uniqueEdges.length;f++){n.vmult(g.uniqueEdges[f],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],p),u.cross(p,m),!m.almostZero()){m.normalize();const v=g.testSepAxis(m,t,e,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(m))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;$i.project(a,t,n,i,Ho),$i.project(e,t,r,o,Go);const l=Ho[0],c=Ho[1],h=Go[0],d=Go[1];if(l<d||h<c)return!1;const u=l-d,p=h-c;return u<p?u:p}calculateLocalInertia(t,e){const n=new E,i=new E;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const l=new E,c=new E,h=new E,d=new E,u=new E,p=new E,m=new E,_=new E,g=this,f=[],x=i,v=f;let S=-1,M=Number.MAX_VALUE;for(let b=0;b<g.faces.length;b++){l.copy(g.faceNormals[b]),n.vmult(l,l);const U=l.dot(t);U<M&&(M=U,S=b)}if(S<0)return;const w=g.faces[S];w.connectedFaces=[];for(let b=0;b<g.faces.length;b++)for(let U=0;U<g.faces[b].length;U++)w.indexOf(g.faces[b][U])!==-1&&b!==S&&w.connectedFaces.indexOf(b)===-1&&w.connectedFaces.push(b);const T=w.length;for(let b=0;b<T;b++){const U=g.vertices[w[b]],H=g.vertices[w[(b+1)%T]];U.vsub(H,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[S]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(U),n.vmult(p,p),e.vadd(p,p);const C=w.connectedFaces[b];m.copy(this.faceNormals[C]);const I=this.getPlaneConstantOfFace(C);_.copy(m),n.vmult(_,_);const D=I-_.dot(e);for(this.clipFaceAgainstPlane(x,v,_,D);x.length;)x.shift();for(;v.length;)x.push(v.shift())}m.copy(this.faceNormals[S]);const L=this.getPlaneConstantOfFace(S);_.copy(m),n.vmult(_,_);const y=L-_.dot(e);for(let b=0;b<x.length;b++){let U=_.dot(x[b])+y;if(U<=r&&(console.log(`clamped: depth=${U} to minDist=${r}`),U=r),U<=o){const H=x[b];if(U<=1e-6){const C={point:H,normal:_,depth:U};a.push(C)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,r<0)if(o<0){const d=new E;d.copy(c),e.push(d)}else{const d=new E;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new E;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,l,c,h,d,u=new E;for(let p=0;p<r.length;p++){u.copy(r[p]),e.vmult(u,u),t.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new E;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=e[n[a][0]],h=new E;t.vsub(c,h);const d=l.dot(h),u=new E;o.vsub(c,u);const p=l.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return r?1:-1}static project(t,e,n,i,r){const o=t.vertices.length,a=q_;let l=0,c=0;const h=j_,d=t.vertices;h.setZero(),Kt.vectorToLocalFrame(n,i,e,a),Kt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let p=1;p<o;p++){const m=d[p].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const p=c;c=l,l=p}r[0]=l,r[1]=c}}const Ho=[],Go=[];new E;const q_=new E,j_=new E;class cs extends St{constructor(t){super({type:St.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=E,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new $i({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),cs.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Gn.set(r[o][0],r[o][1],r[o][2]),e.vmult(Gn,Gn),t.vadd(Gn,Gn),n(Gn.x,Gn.y,Gn.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;cn[0].set(r.x,r.y,r.z),cn[1].set(-r.x,r.y,r.z),cn[2].set(-r.x,-r.y,r.z),cn[3].set(-r.x,-r.y,-r.z),cn[4].set(r.x,-r.y,-r.z),cn[5].set(r.x,r.y,-r.z),cn[6].set(-r.x,r.y,-r.z),cn[7].set(r.x,-r.y,r.z);const o=cn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=cn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Gn=new E,cn=[new E,new E,new E,new E,new E,new E,new E,new E],ba={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ta={AWAKE:0,SLEEPY:1,SLEEPING:2};class xt extends Oh{constructor(t){t===void 0&&(t={}),super(),this.id=xt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?xt.STATIC:xt.DYNAMIC,typeof t.type==typeof xt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=xt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new ue,this.initQuaternion=new ue,this.previousQuaternion=new ue,this.interpolatedQuaternion=new ue,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new en,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new en,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ve,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=xt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===xt.SLEEPING&&this.dispatchEvent(xt.wakeupEvent)}sleep(){this.sleepState=xt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===xt.AWAKE&&n<i?(this.sleepState=xt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(xt.sleepyEvent)):e===xt.SLEEPY&&n>i?this.wakeUp():e===xt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(xt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===xt.SLEEPING||this.type===xt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new E,r=new ue;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Y_,o=Z_,a=this.quaternion,l=this.aabb,c=K_;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=$_,i=J_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=tv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const n=ev,i=nv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===xt.DYNAMIC&&(this.sleepState===xt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=e,i=iv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=sv;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const n=rv,i=ov;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=av;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),cs.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===xt.DYNAMIC||this.type===xt.KINEMATIC)||this.sleepState===xt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*t;i.x+=a.x*p*u.x,i.y+=a.y*p*u.y,i.z+=a.z*p*u.z;const m=d.elements,_=this.angularFactor,g=l.x*_.x,f=l.y*_.y,x=l.z*_.z;r.x+=t*(m[0]*g+m[1]*f+m[2]*x),r.y+=t*(m[3]*g+m[4]*f+m[5]*x),r.z+=t*(m[6]*g+m[7]*f+m[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}xt.idCounter=0;xt.COLLIDE_EVENT_NAME="collide";xt.DYNAMIC=ba.DYNAMIC;xt.STATIC=ba.STATIC;xt.KINEMATIC=ba.KINEMATIC;xt.AWAKE=Ta.AWAKE;xt.SLEEPY=Ta.SLEEPY;xt.SLEEPING=Ta.SLEEPING;xt.wakeupEvent={type:"wakeup"};xt.sleepyEvent={type:"sleepy"};xt.sleepEvent={type:"sleep"};const Y_=new E,Z_=new ue,K_=new Ve,$_=new en,J_=new en,Q_=new en,tv=new E,ev=new E,nv=new E,iv=new E,sv=new E,rv=new E,ov=new E,av=new E;class cv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&xt.STATIC||t.sleepState===xt.SLEEPING)&&(e.type&xt.STATIC||e.sleepState===xt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=lv;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=hv,i=uv,r=dv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const lv=new E;new E;new ue;new E;const hv={keys:[]},uv=[],dv=[];new E;new E;new E;class fv extends cv{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class Cr{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let Bh,zh,kh,Hh,Gh,Vh,Wh;const Aa={CLOSEST:1,ANY:2,ALL:4};Bh=St.types.SPHERE;zh=St.types.PLANE;kh=St.types.BOX;Hh=St.types.CYLINDER;Gh=St.types.CONVEXPOLYHEDRON;Vh=St.types.HEIGHTFIELD;Wh=St.types.TRIMESH;class he{get[Bh](){return this._intersectSphere}get[zh](){return this._intersectPlane}get[kh](){return this._intersectBox}get[Hh](){return this._intersectConvex}get[Gh](){return this._intersectConvex}get[Vh](){return this._intersectHeightfield}get[Wh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=he.ANY,this.result=new Cr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||he.ANY,this.result=e.result||new Cr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Tl),Vo.length=0,t.broadphase.aabbQuery(t,Tl,Vo),this.intersectBodies(Vo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=pv,r=mv;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(Cv(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const h=new E;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const m=new E,_=new E,g=new E;o.vsub(n,m);const f=-c.dot(m)/p;l.scale(f,_),o.vadd(_,g),this.reportIntersection(c,g,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=gv;o.from.copy(this.from),o.to.copy(this.to),Kt.pointToLocalFrame(n,e,o.from,o.from),Kt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=_v;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Ve;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=l;p<h;p++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(p,m,!1),Kt.pointToWorldFrame(n,e,t.pillarOffset,gr),this._intersectConvex(t.pillarConvex,e,gr,i,r,Al),this.result.shouldStop)return;t.getConvexTrianglePillar(p,m,!0),Kt.pointToWorldFrame(n,e,t.pillarOffset,gr),this._intersectConvex(t.pillarConvex,e,gr,i,r,Al)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,p=vv,m=xv;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,r,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),g=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,r,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=yv,l=Rl,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,p=this.direction,m=this.from,_=this.to,g=m.distanceTo(_),f=c?c.length:h.length,x=this.result;for(let v=0;!x.shouldStop&&v<f;v++){const S=c?c[v]:v,M=h[S],w=u[S],T=e,L=n;l.copy(d[M[0]]),T.vmult(l,l),l.vadd(L,l),l.vsub(m,l),T.vmult(w,a);const y=p.dot(a);if(Math.abs(y)<this.precision)continue;const b=a.dot(l)/y;if(!(b<0)){p.scale(b,Ie),Ie.vadd(m,Ie),Je.copy(d[M[0]]),T.vmult(Je,Je),L.vadd(Je,Je);for(let U=1;!x.shouldStop&&U<M.length-1;U++){ln.copy(d[M[U]]),hn.copy(d[M[U+1]]),T.vmult(ln,ln),T.vmult(hn,hn),L.vadd(ln,ln),L.vadd(hn,hn);const H=Ie.distanceTo(m);!(he.pointInTriangle(Ie,Je,ln,hn)||he.pointInTriangle(Ie,ln,Je,hn))||H>g||this.reportIntersection(a,Ie,r,i,S)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=Mv,l=Av,c=Rv,h=Rl,d=Sv,u=Ev,p=wv,m=Tv,_=bv,g=t.indices;t.vertices;const f=this.from,x=this.to,v=this.direction;c.position.copy(n),c.quaternion.copy(e),Kt.vectorToLocalFrame(n,e,v,d),Kt.pointToLocalFrame(n,e,f,u),Kt.pointToLocalFrame(n,e,x,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();const S=u.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let M=0,w=l.length;!this.result.shouldStop&&M!==w;M++){const T=l[M];t.getNormal(T,a),t.getVertex(g[T*3],Je),Je.vsub(u,h);const L=d.dot(a),y=a.dot(h)/L;if(y<0)continue;d.scale(y,Ie),Ie.vadd(u,Ie),t.getVertex(g[T*3+1],ln),t.getVertex(g[T*3+2],hn);const b=Ie.distanceSquared(u);!(he.pointInTriangle(Ie,ln,Je,hn)||he.pointInTriangle(Ie,Je,ln,hn))||b>S||(Kt.vectorToWorldFrame(e,a,_),Kt.pointToWorldFrame(n,e,Ie,m),this.reportIntersection(_,m,r,i,T))}l.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case he.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case he.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case he.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ii),n.vsub(e,_s),t.vsub(e,Wo);const r=ii.dot(ii),o=ii.dot(_s),a=ii.dot(Wo),l=_s.dot(_s),c=_s.dot(Wo);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}he.CLOSEST=Aa.CLOSEST;he.ANY=Aa.ANY;he.ALL=Aa.ALL;const Tl=new Ve,Vo=[],_s=new E,Wo=new E,pv=new E,mv=new ue,Ie=new E,Je=new E,ln=new E,hn=new E;new E;new Cr;const Al={faceList:[0]},gr=new E,gv=new he,_v=[],vv=new E,xv=new E,yv=new E;new E;new E;const Rl=new E,Mv=new E,Sv=new E,Ev=new E,wv=new E,bv=new E,Tv=new E;new Ve;const Av=[],Rv=new Kt,ii=new E,_r=new E;function Cv(s,t,e){e.vsub(s,ii);const n=ii.dot(t);return t.scale(n,_r),_r.vadd(s,_r),e.distanceTo(_r)}class Pv{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Cl{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Os{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Os.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Cl,this.jacobianElementB=new Cl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,Pl),a.scale(h,Ll),n.invInertiaWorldSolve.vmult(o,Il),i.invInertiaWorldSolve.vmult(l,Dl),t.multiplyVectors(Pl,Il)+e.multiplyVectors(Ll,Dl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,vr),c+=vr.dot(t.rotational),l.vmult(e.rotational,vr),c+=vr.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=Lv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Os.idCounter=0;const Pl=new E,Ll=new E,Il=new E,Dl=new E,vr=new E,Lv=new E;class Iv extends Os{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=Dv,c=Uv,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,p=r.angularVelocity;r.force,r.torque;const m=Nv,_=this.jacobianElementA,g=this.jacobianElementB,f=this.ni;o.cross(f,l),a.cross(f,c),f.negate(_.spatial),l.negate(_.rotational),g.spatial.copy(f),g.rotational.copy(c),m.copy(r.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const x=f.dot(m),v=this.restitution+1,S=v*u.dot(f)-v*h.dot(f)+p.dot(c)-d.dot(l),M=this.computeGiMf();return-x*e-S*n-t*M}getImpactVelocityAlongNormal(){const t=Fv,e=Ov,n=Bv,i=zv,r=kv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const Dv=new E,Uv=new E,Nv=new E,Fv=new E,Ov=new E,Bv=new E,zv=new E,kv=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Ul extends Os{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=Hv,o=Gv,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const Hv=new E,Gv=new E;class Gr{constructor(t,e,n){n=Pv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Gr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Gr.idCounter=0;class ls{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ls.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ls.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new he;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Vv extends $i{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=i,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new E(-e*u(0),-n*.5,e*d(0))),c.push(0),o.push(new E(-t*u(0),n*.5,t*d(0))),h.push(1);for(let m=0;m<r;m++){const _=2*Math.PI/r*(m+1),g=2*Math.PI/r*(m+.5);m<r-1?(o.push(new E(-e*u(_),-n*.5,e*d(_))),c.push(2*m+2),o.push(new E(-t*u(_),n*.5,t*d(_))),h.push(2*m+3),l.push([2*m,2*m+1,2*m+3,2*m+2])):l.push([2*m,2*m+1,1,0]),(r%2===1||m<r/2)&&a.push(new E(-u(g),0,d(g)))}l.push(c),a.push(new E(0,1,0));const p=[];for(let m=0;m<h.length;m++)p.push(h[h.length-m-1]);l.push(p),super({vertices:o,faces:l,axes:a}),this.type=St.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class Wv extends St{constructor(){super({type:St.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new E),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){wn.set(0,0,1),e.vmult(wn,wn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),wn.x===1?i.x=t.x:wn.x===-1&&(n.x=t.x),wn.y===1?i.y=t.y:wn.y===-1&&(n.y=t.y),wn.z===1?i.z=t.z:wn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const wn=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ve;new E;new Ve;new E;new E;new E;new E;new E;new E;new E;new Ve;new E;new Kt;new Ve;class Xv{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class qv extends Xv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,p,m,_,g;if(a!==0)for(let S=0;S!==c;S++)l[S].updateSolveMassProperties();const f=Yv,x=Zv,v=jv;f.length=a,x.length=a,v.length=a;for(let S=0;S!==a;S++){const M=o[S];v[S]=0,x[S]=M.computeB(h),f[S]=1/M.computeC()}if(a!==0){for(let w=0;w!==c;w++){const T=l[w],L=T.vlambda,y=T.wlambda;L.set(0,0,0),y.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let w=0;w!==a;w++){const T=o[w];d=x[w],u=f[w],g=v[w],_=T.computeGWlambda(),p=u*(d-_-T.eps*g),g+p<T.minForce?p=T.minForce-g:g+p>T.maxForce&&(p=T.maxForce-g),v[w]+=p,m+=p>0?p:-p,T.addToWlambda(p)}if(m*m<r)break}for(let w=0;w!==c;w++){const T=l[w],L=T.velocity,y=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),L.vadd(T.vlambda,L),T.wlambda.vmul(T.angularFactor,T.wlambda),y.vadd(T.wlambda,y)}let S=o.length;const M=1/h;for(;S--;)o[S].multiplier=v[S]*M}return n}}const jv=[],Yv=[],Zv=[];xt.STATIC;class Kv{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class $v extends Kv{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const te={sphereSphere:St.types.SPHERE,spherePlane:St.types.SPHERE|St.types.PLANE,boxBox:St.types.BOX|St.types.BOX,sphereBox:St.types.SPHERE|St.types.BOX,planeBox:St.types.PLANE|St.types.BOX,convexConvex:St.types.CONVEXPOLYHEDRON,sphereConvex:St.types.SPHERE|St.types.CONVEXPOLYHEDRON,planeConvex:St.types.PLANE|St.types.CONVEXPOLYHEDRON,boxConvex:St.types.BOX|St.types.CONVEXPOLYHEDRON,sphereHeightfield:St.types.SPHERE|St.types.HEIGHTFIELD,boxHeightfield:St.types.BOX|St.types.HEIGHTFIELD,convexHeightfield:St.types.CONVEXPOLYHEDRON|St.types.HEIGHTFIELD,sphereParticle:St.types.PARTICLE|St.types.SPHERE,planeParticle:St.types.PLANE|St.types.PARTICLE,boxParticle:St.types.BOX|St.types.PARTICLE,convexParticle:St.types.PARTICLE|St.types.CONVEXPOLYHEDRON,cylinderCylinder:St.types.CYLINDER,sphereCylinder:St.types.SPHERE|St.types.CYLINDER,planeCylinder:St.types.PLANE|St.types.CYLINDER,boxCylinder:St.types.BOX|St.types.CYLINDER,convexCylinder:St.types.CONVEXPOLYHEDRON|St.types.CYLINDER,heightfieldCylinder:St.types.HEIGHTFIELD|St.types.CYLINDER,particleCylinder:St.types.PARTICLE|St.types.CYLINDER,sphereTrimesh:St.types.SPHERE|St.types.TRIMESH,planeTrimesh:St.types.PLANE|St.types.TRIMESH};class Jv{get[te.sphereSphere](){return this.sphereSphere}get[te.spherePlane](){return this.spherePlane}get[te.boxBox](){return this.boxBox}get[te.sphereBox](){return this.sphereBox}get[te.planeBox](){return this.planeBox}get[te.convexConvex](){return this.convexConvex}get[te.sphereConvex](){return this.sphereConvex}get[te.planeConvex](){return this.planeConvex}get[te.boxConvex](){return this.boxConvex}get[te.sphereHeightfield](){return this.sphereHeightfield}get[te.boxHeightfield](){return this.boxHeightfield}get[te.convexHeightfield](){return this.convexHeightfield}get[te.sphereParticle](){return this.sphereParticle}get[te.planeParticle](){return this.planeParticle}get[te.boxParticle](){return this.boxParticle}get[te.convexParticle](){return this.convexParticle}get[te.cylinderCylinder](){return this.convexConvex}get[te.sphereCylinder](){return this.sphereConvex}get[te.planeCylinder](){return this.planeConvex}get[te.boxCylinder](){return this.boxConvex}get[te.convexCylinder](){return this.convexConvex}get[te.heightfieldCylinder](){return this.heightfieldCylinder}get[te.particleCylinder](){return this.particleCylinder}get[te.sphereTrimesh](){return this.sphereTrimesh}get[te.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new $v,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Iv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const m=this.frictionEquationPool,_=m.length?m.pop():new Ul(n,i,u*p),g=m.length?m.pop():new Ul(n,i,u*p);return _.bi=g.bi=n,_.bj=g.bj=i,_.minForce=g.minForce=-u*p,_.maxForce=g.maxForce=u*p,_.ri.copy(t.ri),_.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(_.t,g.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=g.enabled=t.enabled,e.push(_,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Qn.setZero(),zi.setZero(),ki.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Qn.vadd(e.ni,Qn),zi.vadd(e.ri,zi),ki.vadd(e.rj,ki)):(Qn.vsub(e.ni,Qn),zi.vadd(e.rj,zi),ki.vadd(e.ri,ki));const o=1/t;zi.scale(o,n.ri),ki.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Qn.normalize(),Qn.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=ex,c=nx,h=Qv,d=tx;for(let u=0,p=t.length;u!==p;u++){const m=t[u],_=e[u];let g=null;m.material&&_.material&&(g=n.getContactMaterial(m.material,_.material)||null);const f=m.type&xt.KINEMATIC&&_.type&xt.STATIC||m.type&xt.STATIC&&_.type&xt.KINEMATIC||m.type&xt.KINEMATIC&&_.type&xt.KINEMATIC;for(let x=0;x<m.shapes.length;x++){m.quaternion.mult(m.shapeOrientations[x],l),m.quaternion.vmult(m.shapeOffsets[x],h),h.vadd(m.position,h);const v=m.shapes[x];for(let S=0;S<_.shapes.length;S++){_.quaternion.mult(_.shapeOrientations[S],c),_.quaternion.vmult(_.shapeOffsets[S],d),d.vadd(_.position,d);const M=_.shapes[S];if(!(v.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&v.collisionFilterGroup)||h.distanceTo(d)>v.boundingSphereRadius+M.boundingSphereRadius)continue;let w=null;v.material&&M.material&&(w=n.getContactMaterial(v.material,M.material)||null),this.currentContactMaterial=w||g||n.defaultContactMaterial;const T=v.type|M.type,L=this[T];if(L){let y=!1;v.type<M.type?y=L.call(this,v,M,h,d,l,c,m,_,v,M,f):y=L.call(this,M,v,d,h,c,l,_,m,v,M,f),y&&f&&(n.shapeOverlapKeeper.set(v.id,M.id),n.bodyOverlapKeeper.set(m.id,_.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,xr),u.ni.scale(u.ni.dot(xr),Nl),xr.vsub(Nl,u.rj),-xr.dot(u.ni)<=t.radius){if(d)return!0;const p=u.ri,m=u.rj;p.vadd(n,p),p.vsub(a.position,p),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}sphereBox(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool,p=Rx;n.vsub(i,yr),e.getSideNormals(p,o);const m=t.radius;let _=!1;const g=Px,f=Lx,x=Ix;let v=null,S=0,M=0,w=0,T=null;for(let F=0,V=p.length;F!==V&&_===!1;F++){const k=bx;k.copy(p[F]);const X=k.length();k.normalize();const tt=yr.dot(k);if(tt<X+m&&tt>0){const ht=Tx,J=Ax;ht.copy(p[(F+1)%3]),J.copy(p[(F+2)%3]);const Y=ht.length(),it=J.length();ht.normalize(),J.normalize();const ut=yr.dot(ht),pt=yr.dot(J);if(ut<Y&&ut>-Y&&pt<it&&pt>-it){const O=Math.abs(tt-X-m);if((T===null||O<T)&&(T=O,M=ut,w=pt,v=X,g.copy(k),f.copy(ht),x.copy(J),S++,d))return!0}}}if(S){_=!0;const F=this.createContactEquation(a,l,t,e,c,h);g.scale(-m,F.ri),F.ni.copy(g),F.ni.negate(F.ni),g.scale(v,g),f.scale(M,f),g.vadd(f,g),x.scale(w,x),g.vadd(x,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let L=u.get();const y=Cx;for(let F=0;F!==2&&!_;F++)for(let V=0;V!==2&&!_;V++)for(let k=0;k!==2&&!_;k++)if(L.set(0,0,0),F?L.vadd(p[0],L):L.vsub(p[0],L),V?L.vadd(p[1],L):L.vsub(p[1],L),k?L.vadd(p[2],L):L.vsub(p[2],L),i.vadd(L,y),y.vsub(n,y),y.lengthSquared()<m*m){if(d)return!0;_=!0;const X=this.createContactEquation(a,l,t,e,c,h);X.ri.copy(y),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(m,X.ri),X.rj.copy(L),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(L),L=null;const b=u.get(),U=u.get(),H=u.get(),C=u.get(),I=u.get(),D=p.length;for(let F=0;F!==D&&!_;F++)for(let V=0;V!==D&&!_;V++)if(F%3!==V%3){p[V].cross(p[F],b),b.normalize(),p[F].vadd(p[V],U),H.copy(n),H.vsub(U,H),H.vsub(i,H);const k=H.dot(b);b.scale(k,C);let X=0;for(;X===F%3||X===V%3;)X++;I.copy(n),I.vsub(C,I),I.vsub(U,I),I.vsub(i,I);const tt=Math.abs(k),ht=I.length();if(tt<p[X].length()&&ht<m){if(d)return!0;_=!0;const J=this.createContactEquation(a,l,t,e,c,h);U.vadd(C,J.rj),J.rj.copy(J.rj),I.negate(J.ni),J.ni.normalize(),J.ri.copy(J.rj),J.ri.vadd(i,J.ri),J.ri.vsub(n,J.ri),J.ri.normalize(),J.ri.scale(m,J.ri),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(l.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}u.release(b,U,H,C,I)}planeBox(t,e,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}convexConvex(t,e,n,i,r,o,a,l,c,h,d,u,p){const m=jx;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,m,u,p)){const _=[],g=Yx;t.clipAgainstHull(n,r,e,i,o,m,-100,100,_);let f=0;for(let x=0;x!==_.length;x++){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),S=v.ri,M=v.rj;m.negate(v.ni),_[x].normal.negate(g),g.scale(_[x].depth,g),_[x].point.vadd(g,S),M.copy(_[x].point),S.vsub(n,S),M.vsub(i,M),S.vadd(n,S),S.vsub(a.position,S),M.vadd(i,M),M.vsub(l.position,M),this.result.push(v),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,Dx);const p=e.faceNormals,m=e.faces,_=e.vertices,g=t.radius;let f=!1;for(let x=0;x!==_.length;x++){const v=_[x],S=Ox;o.vmult(v,S),i.vadd(S,S);const M=Fx;if(S.vsub(n,M),M.lengthSquared()<g*g){if(d)return!0;f=!0;const w=this.createContactEquation(a,l,t,e,c,h);w.ri.copy(M),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(g,w.ri),S.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let x=0,v=m.length;x!==v&&f===!1;x++){const S=p[x],M=m[x],w=Bx;o.vmult(S,w);const T=zx;o.vmult(_[M[0]],T),T.vadd(i,T);const L=kx;w.scale(-g,L),n.vadd(L,L);const y=Hx;L.vsub(T,y);const b=y.dot(w),U=Gx;if(n.vsub(T,U),b<0&&U.dot(w)>0){const H=[];for(let C=0,I=M.length;C!==I;C++){const D=u.get();o.vmult(_[M[C]],D),i.vadd(D,D),H.push(D)}if(wx(H,w,n)){if(d)return!0;f=!0;const C=this.createContactEquation(a,l,t,e,c,h);w.scale(-g,C.ri),w.negate(C.ni);const I=u.get();w.scale(-b,I);const D=u.get();w.scale(-g,D),n.vsub(i,C.rj),C.rj.vadd(D,C.rj),C.rj.vadd(I,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),u.release(I),u.release(D),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let F=0,V=H.length;F!==V;F++)u.release(H[F]);return}else for(let C=0;C!==M.length;C++){const I=u.get(),D=u.get();o.vmult(_[M[(C+1)%M.length]],I),o.vmult(_[M[(C+2)%M.length]],D),i.vadd(I,I),i.vadd(D,D);const F=Ux;D.vsub(I,F);const V=Nx;F.unit(V);const k=u.get(),X=u.get();n.vsub(I,X);const tt=X.dot(V);V.scale(tt,k),k.vadd(I,k);const ht=u.get();if(k.vsub(n,ht),tt>0&&tt*tt<F.lengthSquared()&&ht.lengthSquared()<g*g){if(d)return!0;const J=this.createContactEquation(a,l,t,e,c,h);k.vsub(i,J.rj),k.vsub(n,J.ni),J.ni.normalize(),J.ni.scale(g,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(l.position,J.rj),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult);for(let Y=0,it=H.length;Y!==it;Y++)u.release(H[Y]);u.release(I),u.release(D),u.release(k),u.release(ht),u.release(X);return}u.release(I),u.release(D),u.release(k),u.release(ht),u.release(X)}for(let C=0,I=H.length;C!==I;C++)u.release(H[C])}}}planeConvex(t,e,n,i,r,o,a,l,c,h,d){const u=Vx,p=Wx;p.set(0,0,1),r.vmult(p,p);let m=0;const _=Xx;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),p.dot(_)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h),v=qx;p.scale(p.dot(_),v),u.vsub(v,v),v.vsub(n,x.ri),x.ni.copy(p),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,p=t.radius,m=e.elementSize,_=oy,g=ry;Kt.pointToLocalFrame(i,o,n,g);let f=Math.floor((g.x-p)/m)-1,x=Math.ceil((g.x+p)/m)+1,v=Math.floor((g.y-p)/m)-1,S=Math.ceil((g.y+p)/m)+1;if(x<0||S<0||f>u.length||v>u[0].length)return;f<0&&(f=0),x<0&&(x=0),v<0&&(v=0),S<0&&(S=0),f>=u.length&&(f=u.length-1),x>=u.length&&(x=u.length-1),S>=u[0].length&&(S=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);const M=[];e.getRectMinMax(f,v,x,S,M);const w=M[0],T=M[1];if(g.z-p>T||g.z+p<w)return;const L=this.result;for(let y=f;y<x;y++)for(let b=v;b<S;b++){const U=L.length;let H=!1;if(e.getConvexTrianglePillar(y,b,!1),Kt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,d)),d&&H||(e.getConvexTrianglePillar(y,b,!0),Kt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,d)),d&&H))return!0;if(L.length-U>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,p=e.elementSize,m=t.boundingSphereRadius,_=iy,g=sy,f=ny;Kt.pointToLocalFrame(i,o,n,f);let x=Math.floor((f.x-m)/p)-1,v=Math.ceil((f.x+m)/p)+1,S=Math.floor((f.y-m)/p)-1,M=Math.ceil((f.y+m)/p)+1;if(v<0||M<0||x>u.length||S>u[0].length)return;x<0&&(x=0),v<0&&(v=0),S<0&&(S=0),M<0&&(M=0),x>=u.length&&(x=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),S>=u[0].length&&(S=u[0].length-1);const w=[];e.getRectMinMax(x,S,v,M,w);const T=w[0],L=w[1];if(!(f.z-m>L||f.z+m<T))for(let y=x;y<v;y++)for(let b=S;b<M;b++){let U=!1;if(e.getConvexTrianglePillar(y,b,!1),Kt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,d,g,null)),d&&U||(e.getConvexTrianglePillar(y,b,!0),Kt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,d,g,null)),d&&U))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,h,d){const u=Jx;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(l,a,e,t,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,h,d){const u=Zx;u.set(0,0,1),a.quaternion.vmult(u,u);const p=Kx;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const g=$x;u.scale(u.dot(i),g),i.vsub(g,g),_.rj.copy(g),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexParticle(t,e,n,i,r,o,a,l,c,h,d){let u=-1;const p=ty,m=ey;let _=null;const g=Qx;if(g.copy(i),g.vsub(n,g),r.conjugate(Fl),Fl.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let f=0,x=t.faces.length;f!==x;f++){const v=[t.worldVertices[t.faces[f][0]]],S=t.worldFaceNormals[f];i.vsub(v[0],Ol);const M=-S.dot(Ol);if(_===null||Math.abs(M)<Math.abs(_)){if(d)return!0;_=M,u=f,p.copy(S)}}if(u!==-1){const f=this.createContactEquation(l,a,e,t,c,h);p.scale(_,m),m.vadd(i,m),m.vsub(n,m),f.rj.copy(m),p.negate(f.ni),f.ri.set(0,0,0);const x=f.ri,v=f.rj;x.vadd(i,x),x.vsub(l.position,x),v.vadd(n,v),v.vsub(a.position,v),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=hx,p=ux,m=dx,_=fx,g=px,f=mx,x=xx,v=lx,S=ax,M=yx;Kt.pointToLocalFrame(i,o,n,g);const w=t.radius;x.lowerBound.set(g.x-w,g.y-w,g.z-w),x.upperBound.set(g.x+w,g.y+w,g.z+w),e.getTrianglesInAABB(x,M);const T=cx,L=t.radius*t.radius;for(let C=0;C<M.length;C++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[M[C]*3+I],T),T.vsub(g,S),S.lengthSquared()<=L){if(v.copy(T),Kt.pointToWorldFrame(i,o,v,T),T.vsub(n,S),d)return!0;let D=this.createContactEquation(a,l,t,e,c,h);D.ni.copy(S),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(T),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let C=0;C<M.length;C++)for(let I=0;I<3;I++){e.getVertex(e.indices[M[C]*3+I],u),e.getVertex(e.indices[M[C]*3+(I+1)%3],p),p.vsub(u,m),g.vsub(p,f);const D=f.dot(m);g.vsub(u,f);let F=f.dot(m);if(F>0&&D<0&&(g.vsub(u,f),_.copy(m),_.normalize(),F=f.dot(_),_.scale(F,f),f.vadd(u,f),f.distanceTo(g)<t.radius)){if(d)return!0;const k=this.createContactEquation(a,l,t,e,c,h);f.vsub(g,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),Kt.pointToWorldFrame(i,o,f,f),f.vsub(l.position,k.rj),Kt.vectorToWorldFrame(o,k.ni,k.ni),Kt.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const y=gx,b=_x,U=vx,H=ox;for(let C=0,I=M.length;C!==I;C++){e.getTriangleVertices(M[C],y,b,U),e.getNormal(M[C],H),g.vsub(y,f);let D=f.dot(H);if(H.scale(D,f),g.vsub(f,f),D=f.distanceTo(g),he.pointInTriangle(f,y,b,U)&&D<t.radius){if(d)return!0;let F=this.createContactEquation(a,l,t,e,c,h);f.vsub(g,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),Kt.pointToWorldFrame(i,o,f,f),f.vsub(l.position,F.rj),Kt.vectorToWorldFrame(o,F.ni,F.ni),Kt.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=new E,p=ix;p.set(0,0,1),r.vmult(p,p);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const _=new E;_.copy(u),Kt.pointToWorldFrame(i,o,_,u);const g=sx;if(u.vsub(n,g),p.dot(g)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(p);const v=rx;p.scale(g.dot(p),v),u.vsub(v,v),x.ri.copy(v),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Qn=new E,zi=new E,ki=new E,Qv=new E,tx=new E,ex=new ue,nx=new ue,ix=new E,sx=new E,rx=new E,ox=new E,ax=new E;new E;const cx=new E,lx=new E,hx=new E,ux=new E,dx=new E,fx=new E,px=new E,mx=new E,gx=new E,_x=new E,vx=new E,xx=new Ve,yx=[],xr=new E,Nl=new E,Mx=new E,Sx=new E,Ex=new E;function wx(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=Mx;s[(r+1)%i].vsub(o,a);const l=Sx;a.cross(t,l);const c=Ex;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const yr=new E,bx=new E,Tx=new E,Ax=new E,Rx=[new E,new E,new E,new E,new E,new E],Cx=new E,Px=new E,Lx=new E,Ix=new E,Dx=new E,Ux=new E,Nx=new E,Fx=new E,Ox=new E,Bx=new E,zx=new E,kx=new E,Hx=new E,Gx=new E;new E;new E;const Vx=new E,Wx=new E,Xx=new E,qx=new E,jx=new E,Yx=new E,Zx=new E,Kx=new E,$x=new E,Jx=new E,Fl=new ue,Qx=new E;new E;const ty=new E,Ol=new E,ey=new E,ny=new E,iy=new E,sy=[0],ry=new E,oy=new E;class Bl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||zl(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||zl(e,h)}}}function zl(s,t){s.push((t&4294901760)>>16,t&65535)}const Xo=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class ay{constructor(){this.data={keys:[]}}get(t,e){const n=Xo(t,e);return this.data[n]}set(t,e,n){const i=Xo(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Xo(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class cy extends Oh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new fv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new qv,this.constraints=[],this.narrowphase=new Jv(this),this.collisionMatrix=new wl,this.collisionMatrixPrevious=new wl,this.bodyOverlapKeeper=new Bl,this.shapeOverlapKeeper=new Bl,this.contactmaterials=[],this.contactMaterialTable=new ay,this.defaultMaterial=new ls("default"),this.defaultContactMaterial=new Gr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Cr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=he.ALL,n.from=t,n.to=e,n.callback=i,qo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=he.ANY,n.from=t,n.to=e,n.result=i,qo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=he.CLOSEST,n.from=t,n.to=e,n.result=i,qo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof xt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=de.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=de.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(de.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=fy,i=py,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=xt.DYNAMIC;let u=-1/0;const p=this.constraints,m=dy;l.length();const _=l.x,g=l.y,f=l.z;let x=0;for(c&&(u=de.now()),x=0;x!==r;x++){const C=o[x];if(C.type===d){const I=C.force,D=C.mass;I.x+=D*_,I.y+=D*g,I.z+=D*f}}for(let C=0,I=this.subsystems.length;C!==I;C++)this.subsystems[C].update();c&&(u=de.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=de.now()-u);let v=p.length;for(x=0;x!==v;x++){const C=p[x];if(!C.collideConnected)for(let I=n.length-1;I>=0;I-=1)(C.bodyA===n[I]&&C.bodyB===i[I]||C.bodyB===n[I]&&C.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),c&&(u=de.now());const S=uy,M=e.length;for(x=0;x!==M;x++)S.push(e[x]);e.length=0;const w=this.frictionEquations.length;for(x=0;x!==w;x++)m.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,S,this.frictionEquations,m),c&&(h.narrowphase=de.now()-u),c&&(u=de.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const T=e.length;for(let C=0;C!==T;C++){const I=e[C],D=I.bi,F=I.bj,V=I.si,k=I.sj;let X;if(D.material&&F.material?X=this.getContactMaterial(D.material,F.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,D.material&&F.material&&(D.material.friction>=0&&F.material.friction>=0&&D.material.friction*F.material.friction,D.material.restitution>=0&&F.material.restitution>=0&&(I.restitution=D.material.restitution*F.material.restitution)),a.addEquation(I),D.allowSleep&&D.type===xt.DYNAMIC&&D.sleepState===xt.SLEEPING&&F.sleepState===xt.AWAKE&&F.type!==xt.STATIC){const tt=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),ht=F.sleepSpeedLimit**2;tt>=ht*2&&(D.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===xt.DYNAMIC&&F.sleepState===xt.SLEEPING&&D.sleepState===xt.AWAKE&&D.type!==xt.STATIC){const tt=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),ht=D.sleepSpeedLimit**2;tt>=ht*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,F,!0),this.collisionMatrixPrevious.get(D,F)||(vs.body=F,vs.contact=I,D.dispatchEvent(vs),vs.body=D,F.dispatchEvent(vs)),this.bodyOverlapKeeper.set(D.id,F.id),this.shapeOverlapKeeper.set(V.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=de.now()-u,u=de.now()),x=0;x!==r;x++){const C=o[x];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(v=p.length,x=0;x!==v;x++){const C=p[x];C.update();for(let I=0,D=C.equations.length;I!==D;I++){const F=C.equations[I];a.addEquation(F)}}a.solve(t,this),c&&(h.solve=de.now()-u),a.removeAllEquations();const L=Math.pow;for(x=0;x!==r;x++){const C=o[x];if(C.type&d){const I=L(1-C.linearDamping,t),D=C.velocity;D.scale(I,D);const F=C.angularVelocity;if(F){const V=L(1-C.angularDamping,t);F.scale(V,F)}}}this.dispatchEvent(hy),c&&(u=de.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,b,U);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=de.now()-u),this.stepnumber+=1,this.dispatchEvent(ly);let H=!0;if(this.allowSleep)for(H=!1,x=0;x!==r;x++){const C=o[x];C.sleepTick(this.time),C.sleepState!==xt.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(bn,Tn),t){for(let r=0,o=bn.length;r<o;r+=2)xs.bodyA=this.getBodyById(bn[r]),xs.bodyB=this.getBodyById(bn[r+1]),this.dispatchEvent(xs);xs.bodyA=xs.bodyB=null}if(e){for(let r=0,o=Tn.length;r<o;r+=2)ys.bodyA=this.getBodyById(Tn[r]),ys.bodyB=this.getBodyById(Tn[r+1]),this.dispatchEvent(ys);ys.bodyA=ys.bodyB=null}bn.length=Tn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(bn,Tn),n){for(let r=0,o=bn.length;r<o;r+=2){const a=this.getShapeById(bn[r]),l=this.getShapeById(bn[r+1]);An.shapeA=a,An.shapeB=l,a&&(An.bodyA=a.body),l&&(An.bodyB=l.body),this.dispatchEvent(An)}An.bodyA=An.bodyB=An.shapeA=An.shapeB=null}if(i){for(let r=0,o=Tn.length;r<o;r+=2){const a=this.getShapeById(Tn[r]),l=this.getShapeById(Tn[r+1]);Rn.shapeA=a,Rn.shapeB=l,a&&(Rn.bodyA=a.body),l&&(Rn.bodyB=l.body),this.dispatchEvent(Rn)}Rn.bodyA=Rn.bodyB=Rn.shapeA=Rn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ve;const qo=new he,de=globalThis.performance||{};if(!de.now){let s=Date.now();de.timing&&de.timing.navigationStart&&(s=de.timing.navigationStart),de.now=()=>Date.now()-s}new E;const ly={type:"postStep"},hy={type:"preStep"},vs={type:xt.COLLIDE_EVENT_NAME,body:null,contact:null},uy=[],dy=[],fy=[],py=[],bn=[],Tn=[],xs={type:"beginContact",bodyA:null,bodyB:null},ys={type:"endContact",bodyA:null,bodyB:null},An={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Rn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class my extends _i{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Hr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new gy(t)}}class gy{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=_y(t,e,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function _y(s,t,e){const n=Array.from(s),i=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const d=vy(h,i,a,l,e);a+=d.offsetX,o.push(d.path)}}return o}function vy(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new E_;let a,l,c,h,d,u,p,m;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let g=0,f=_.length;g<f;)switch(_[g++]){case"m":a=_[g++]*t+e,l=_[g++]*t+n,o.moveTo(a,l);break;case"l":a=_[g++]*t+e,l=_[g++]*t+n,o.lineTo(a,l);break;case"q":c=_[g++]*t+e,h=_[g++]*t+n,d=_[g++]*t+e,u=_[g++]*t+n,o.quadraticCurveTo(d,u,c,h);break;case"b":c=_[g++]*t+e,h=_[g++]*t+n,d=_[g++]*t+e,u=_[g++]*t+n,p=_[g++]*t+e,m=_[g++]*t+n,o.bezierCurveTo(d,u,p,m,c,h);break}}return{offsetX:r.ha*t,path:o}}class Ds extends Ea{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}function Xh(s,t){return function(){return s.apply(t,arguments)}}const{toString:xy}=Object.prototype,{getPrototypeOf:Ra}=Object,Vr=(s=>t=>{const e=xy.call(t);return s[e]||(s[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),rn=s=>(s=s.toLowerCase(),t=>Vr(t)===s),Wr=s=>t=>typeof t===s,{isArray:hs}=Array,Us=Wr("undefined");function yy(s){return s!==null&&!Us(s)&&s.constructor!==null&&!Us(s.constructor)&&He(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const qh=rn("ArrayBuffer");function My(s){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(s):t=s&&s.buffer&&qh(s.buffer),t}const Sy=Wr("string"),He=Wr("function"),jh=Wr("number"),Xr=s=>s!==null&&typeof s=="object",Ey=s=>s===!0||s===!1,Er=s=>{if(Vr(s)!=="object")return!1;const t=Ra(s);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},wy=rn("Date"),by=rn("File"),Ty=rn("Blob"),Ay=rn("FileList"),Ry=s=>Xr(s)&&He(s.pipe),Cy=s=>{let t;return s&&(typeof FormData=="function"&&s instanceof FormData||He(s.append)&&((t=Vr(s))==="formdata"||t==="object"&&He(s.toString)&&s.toString()==="[object FormData]"))},Py=rn("URLSearchParams"),[Ly,Iy,Dy,Uy]=["ReadableStream","Request","Response","Headers"].map(rn),Ny=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bs(s,t,{allOwnKeys:e=!1}={}){if(s===null||typeof s>"u")return;let n,i;if(typeof s!="object"&&(s=[s]),hs(s))for(n=0,i=s.length;n<i;n++)t.call(null,s[n],n,s);else{const r=e?Object.getOwnPropertyNames(s):Object.keys(s),o=r.length;let a;for(n=0;n<o;n++)a=r[n],t.call(null,s[a],a,s)}}function Yh(s,t){t=t.toLowerCase();const e=Object.keys(s);let n=e.length,i;for(;n-- >0;)if(i=e[n],t===i.toLowerCase())return i;return null}const ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Zh=s=>!Us(s)&&s!==ri;function ha(){const{caseless:s}=Zh(this)&&this||{},t={},e=(n,i)=>{const r=s&&Yh(t,i)||i;Er(t[r])&&Er(n)?t[r]=ha(t[r],n):Er(n)?t[r]=ha({},n):hs(n)?t[r]=n.slice():t[r]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&Bs(arguments[n],e);return t}const Fy=(s,t,e,{allOwnKeys:n}={})=>(Bs(t,(i,r)=>{e&&He(i)?s[r]=Xh(i,e):s[r]=i},{allOwnKeys:n}),s),Oy=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),By=(s,t,e,n)=>{s.prototype=Object.create(t.prototype,n),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:t.prototype}),e&&Object.assign(s.prototype,e)},zy=(s,t,e,n)=>{let i,r,o;const a={};if(t=t||{},s==null)return t;do{for(i=Object.getOwnPropertyNames(s),r=i.length;r-- >0;)o=i[r],(!n||n(o,s,t))&&!a[o]&&(t[o]=s[o],a[o]=!0);s=e!==!1&&Ra(s)}while(s&&(!e||e(s,t))&&s!==Object.prototype);return t},ky=(s,t,e)=>{s=String(s),(e===void 0||e>s.length)&&(e=s.length),e-=t.length;const n=s.indexOf(t,e);return n!==-1&&n===e},Hy=s=>{if(!s)return null;if(hs(s))return s;let t=s.length;if(!jh(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=s[t];return e},Gy=(s=>t=>s&&t instanceof s)(typeof Uint8Array<"u"&&Ra(Uint8Array)),Vy=(s,t)=>{const n=(s&&s[Symbol.iterator]).call(s);let i;for(;(i=n.next())&&!i.done;){const r=i.value;t.call(s,r[0],r[1])}},Wy=(s,t)=>{let e;const n=[];for(;(e=s.exec(t))!==null;)n.push(e);return n},Xy=rn("HTMLFormElement"),qy=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,n,i){return n.toUpperCase()+i}),kl=(({hasOwnProperty:s})=>(t,e)=>s.call(t,e))(Object.prototype),jy=rn("RegExp"),Kh=(s,t)=>{const e=Object.getOwnPropertyDescriptors(s),n={};Bs(e,(i,r)=>{let o;(o=t(i,r,s))!==!1&&(n[r]=o||i)}),Object.defineProperties(s,n)},Yy=s=>{Kh(s,(t,e)=>{if(He(s)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const n=s[e];if(He(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},Zy=(s,t)=>{const e={},n=i=>{i.forEach(r=>{e[r]=!0})};return hs(s)?n(s):n(String(s).split(t)),e},Ky=()=>{},$y=(s,t)=>s!=null&&Number.isFinite(s=+s)?s:t,jo="abcdefghijklmnopqrstuvwxyz",Hl="0123456789",$h={DIGIT:Hl,ALPHA:jo,ALPHA_DIGIT:jo+jo.toUpperCase()+Hl},Jy=(s=16,t=$h.ALPHA_DIGIT)=>{let e="";const{length:n}=t;for(;s--;)e+=t[Math.random()*n|0];return e};function Qy(s){return!!(s&&He(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const tM=s=>{const t=new Array(10),e=(n,i)=>{if(Xr(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const r=hs(n)?[]:{};return Bs(n,(o,a)=>{const l=e(o,i+1);!Us(l)&&(r[a]=l)}),t[i]=void 0,r}}return n};return e(s,0)},eM=rn("AsyncFunction"),nM=s=>s&&(Xr(s)||He(s))&&He(s.then)&&He(s.catch),Jh=((s,t)=>s?setImmediate:t?((e,n)=>(ri.addEventListener("message",({source:i,data:r})=>{i===ri&&r===e&&n.length&&n.shift()()},!1),i=>{n.push(i),ri.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",He(ri.postMessage)),iM=typeof queueMicrotask<"u"?queueMicrotask.bind(ri):typeof process<"u"&&process.nextTick||Jh,Z={isArray:hs,isArrayBuffer:qh,isBuffer:yy,isFormData:Cy,isArrayBufferView:My,isString:Sy,isNumber:jh,isBoolean:Ey,isObject:Xr,isPlainObject:Er,isReadableStream:Ly,isRequest:Iy,isResponse:Dy,isHeaders:Uy,isUndefined:Us,isDate:wy,isFile:by,isBlob:Ty,isRegExp:jy,isFunction:He,isStream:Ry,isURLSearchParams:Py,isTypedArray:Gy,isFileList:Ay,forEach:Bs,merge:ha,extend:Fy,trim:Ny,stripBOM:Oy,inherits:By,toFlatObject:zy,kindOf:Vr,kindOfTest:rn,endsWith:ky,toArray:Hy,forEachEntry:Vy,matchAll:Wy,isHTMLForm:Xy,hasOwnProperty:kl,hasOwnProp:kl,reduceDescriptors:Kh,freezeMethods:Yy,toObjectSet:Zy,toCamelCase:qy,noop:Ky,toFiniteNumber:$y,findKey:Yh,global:ri,isContextDefined:Zh,ALPHABET:$h,generateString:Jy,isSpecCompliantForm:Qy,toJSONObject:tM,isAsyncFn:eM,isThenable:nM,setImmediate:Jh,asap:iM};function zt(s,t,e,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}Z.inherits(zt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const Qh=zt.prototype,tu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{tu[s]={value:s}});Object.defineProperties(zt,tu);Object.defineProperty(Qh,"isAxiosError",{value:!0});zt.from=(s,t,e,n,i,r)=>{const o=Object.create(Qh);return Z.toFlatObject(s,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),zt.call(o,s.message,t,e,n,i),o.cause=s,o.name=s.name,r&&Object.assign(o,r),o};const sM=null;function ua(s){return Z.isPlainObject(s)||Z.isArray(s)}function eu(s){return Z.endsWith(s,"[]")?s.slice(0,-2):s}function Gl(s,t,e){return s?s.concat(t).map(function(i,r){return i=eu(i),!e&&r?"["+i+"]":i}).join(e?".":""):t}function rM(s){return Z.isArray(s)&&!s.some(ua)}const oM=Z.toFlatObject(Z,{},null,function(t){return/^is[A-Z]/.test(t)});function qr(s,t,e){if(!Z.isObject(s))throw new TypeError("target must be an object");t=t||new FormData,e=Z.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,g){return!Z.isUndefined(g[_])});const n=e.metaTokens,i=e.visitor||h,r=e.dots,o=e.indexes,l=(e.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(t);if(!Z.isFunction(i))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(Z.isDate(m))return m.toISOString();if(!l&&Z.isBlob(m))throw new zt("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(m)||Z.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function h(m,_,g){let f=m;if(m&&!g&&typeof m=="object"){if(Z.endsWith(_,"{}"))_=n?_:_.slice(0,-2),m=JSON.stringify(m);else if(Z.isArray(m)&&rM(m)||(Z.isFileList(m)||Z.endsWith(_,"[]"))&&(f=Z.toArray(m)))return _=eu(_),f.forEach(function(v,S){!(Z.isUndefined(v)||v===null)&&t.append(o===!0?Gl([_],S,r):o===null?_:_+"[]",c(v))}),!1}return ua(m)?!0:(t.append(Gl(g,_,r),c(m)),!1)}const d=[],u=Object.assign(oM,{defaultVisitor:h,convertValue:c,isVisitable:ua});function p(m,_){if(!Z.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(m),Z.forEach(m,function(f,x){(!(Z.isUndefined(f)||f===null)&&i.call(t,f,Z.isString(x)?x.trim():x,_,u))===!0&&p(f,_?_.concat(x):[x])}),d.pop()}}if(!Z.isObject(s))throw new TypeError("data must be an object");return p(s),t}function Vl(s){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Ca(s,t){this._pairs=[],s&&qr(s,this,t)}const nu=Ca.prototype;nu.append=function(t,e){this._pairs.push([t,e])};nu.toString=function(t){const e=t?function(n){return t.call(this,n,Vl)}:Vl;return this._pairs.map(function(i){return e(i[0])+"="+e(i[1])},"").join("&")};function aM(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function iu(s,t,e){if(!t)return s;const n=e&&e.encode||aM;Z.isFunction(e)&&(e={serialize:e});const i=e&&e.serialize;let r;if(i?r=i(t,e):r=Z.isURLSearchParams(t)?t.toString():new Ca(t,e).toString(n),r){const o=s.indexOf("#");o!==-1&&(s=s.slice(0,o)),s+=(s.indexOf("?")===-1?"?":"&")+r}return s}class Wl{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){Z.forEach(this.handlers,function(n){n!==null&&t(n)})}}const su={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cM=typeof URLSearchParams<"u"?URLSearchParams:Ca,lM=typeof FormData<"u"?FormData:null,hM=typeof Blob<"u"?Blob:null,uM={isBrowser:!0,classes:{URLSearchParams:cM,FormData:lM,Blob:hM},protocols:["http","https","file","blob","url","data"]},Pa=typeof window<"u"&&typeof document<"u",da=typeof navigator=="object"&&navigator||void 0,dM=Pa&&(!da||["ReactNative","NativeScript","NS"].indexOf(da.product)<0),fM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",pM=Pa&&window.location.href||"http://localhost",mM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Pa,hasStandardBrowserEnv:dM,hasStandardBrowserWebWorkerEnv:fM,navigator:da,origin:pM},Symbol.toStringTag,{value:"Module"})),Te={...mM,...uM};function gM(s,t){return qr(s,new Te.classes.URLSearchParams,Object.assign({visitor:function(e,n,i,r){return Te.isNode&&Z.isBuffer(e)?(this.append(n,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function _M(s){return Z.matchAll(/\w+|\[(\w*)]/g,s).map(t=>t[0]==="[]"?"":t[1]||t[0])}function vM(s){const t={},e=Object.keys(s);let n;const i=e.length;let r;for(n=0;n<i;n++)r=e[n],t[r]=s[r];return t}function ru(s){function t(e,n,i,r){let o=e[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=e.length;return o=!o&&Z.isArray(i)?i.length:o,l?(Z.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a):((!i[o]||!Z.isObject(i[o]))&&(i[o]=[]),t(e,n,i[o],r)&&Z.isArray(i[o])&&(i[o]=vM(i[o])),!a)}if(Z.isFormData(s)&&Z.isFunction(s.entries)){const e={};return Z.forEachEntry(s,(n,i)=>{t(_M(n),i,e,0)}),e}return null}function xM(s,t,e){if(Z.isString(s))try{return(t||JSON.parse)(s),Z.trim(s)}catch(n){if(n.name!=="SyntaxError")throw n}return(0,JSON.stringify)(s)}const zs={transitional:su,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=Z.isObject(t);if(r&&Z.isHTMLForm(t)&&(t=new FormData(t)),Z.isFormData(t))return i?JSON.stringify(ru(t)):t;if(Z.isArrayBuffer(t)||Z.isBuffer(t)||Z.isStream(t)||Z.isFile(t)||Z.isBlob(t)||Z.isReadableStream(t))return t;if(Z.isArrayBufferView(t))return t.buffer;if(Z.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return gM(t,this.formSerializer).toString();if((a=Z.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return qr(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),xM(t)):t}],transformResponse:[function(t){const e=this.transitional||zs.transitional,n=e&&e.forcedJSONParsing,i=this.responseType==="json";if(Z.isResponse(t)||Z.isReadableStream(t))return t;if(t&&Z.isString(t)&&(n&&!this.responseType||i)){const o=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?zt.from(a,zt.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Te.classes.FormData,Blob:Te.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],s=>{zs.headers[s]={}});const yM=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),MM=s=>{const t={};let e,n,i;return s&&s.split(`
`).forEach(function(o){i=o.indexOf(":"),e=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!e||t[e]&&yM[e])&&(e==="set-cookie"?t[e]?t[e].push(n):t[e]=[n]:t[e]=t[e]?t[e]+", "+n:n)}),t},Xl=Symbol("internals");function Ms(s){return s&&String(s).trim().toLowerCase()}function wr(s){return s===!1||s==null?s:Z.isArray(s)?s.map(wr):String(s)}function SM(s){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=e.exec(s);)t[n[1]]=n[2];return t}const EM=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function Yo(s,t,e,n,i){if(Z.isFunction(n))return n.call(this,t,e);if(i&&(t=e),!!Z.isString(t)){if(Z.isString(n))return t.indexOf(n)!==-1;if(Z.isRegExp(n))return n.test(t)}}function wM(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n)}function bM(s,t){const e=Z.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(s,n+e,{value:function(i,r,o){return this[n].call(this,t,i,r,o)},configurable:!0})})}class De{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function r(a,l,c){const h=Ms(l);if(!h)throw new Error("header name must be a non-empty string");const d=Z.findKey(i,h);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||l]=wr(a))}const o=(a,l)=>Z.forEach(a,(c,h)=>r(c,h,l));if(Z.isPlainObject(t)||t instanceof this.constructor)o(t,e);else if(Z.isString(t)&&(t=t.trim())&&!EM(t))o(MM(t),e);else if(Z.isHeaders(t))for(const[a,l]of t.entries())r(l,a,n);else t!=null&&r(e,t,n);return this}get(t,e){if(t=Ms(t),t){const n=Z.findKey(this,t);if(n){const i=this[n];if(!e)return i;if(e===!0)return SM(i);if(Z.isFunction(e))return e.call(this,i,n);if(Z.isRegExp(e))return e.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Ms(t),t){const n=Z.findKey(this,t);return!!(n&&this[n]!==void 0&&(!e||Yo(this,this[n],n,e)))}return!1}delete(t,e){const n=this;let i=!1;function r(o){if(o=Ms(o),o){const a=Z.findKey(n,o);a&&(!e||Yo(n,n[a],a,e))&&(delete n[a],i=!0)}}return Z.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];(!t||Yo(this,this[r],r,t,!0))&&(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return Z.forEach(this,(i,r)=>{const o=Z.findKey(n,r);if(o){e[o]=wr(i),delete e[r];return}const a=t?wM(r):String(r).trim();a!==r&&delete e[r],e[a]=wr(i),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return Z.forEach(this,(n,i)=>{n!=null&&n!==!1&&(e[i]=t&&Z.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[Xl]=this[Xl]={accessors:{}}).accessors,i=this.prototype;function r(o){const a=Ms(o);n[a]||(bM(i,o),n[a]=!0)}return Z.isArray(t)?t.forEach(r):r(t),this}}De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(De.prototype,({value:s},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>s,set(n){this[e]=n}}});Z.freezeMethods(De);function Zo(s,t){const e=this||zs,n=t||e,i=De.from(n.headers);let r=n.data;return Z.forEach(s,function(a){r=a.call(e,r,i.normalize(),t?t.status:void 0)}),i.normalize(),r}function ou(s){return!!(s&&s.__CANCEL__)}function us(s,t,e){zt.call(this,s??"canceled",zt.ERR_CANCELED,t,e),this.name="CanceledError"}Z.inherits(us,zt,{__CANCEL__:!0});function au(s,t,e){const n=e.config.validateStatus;!e.status||!n||n(e.status)?s(e):t(new zt("Request failed with status code "+e.status,[zt.ERR_BAD_REQUEST,zt.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}function TM(s){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return t&&t[1]||""}function AM(s,t){s=s||10;const e=new Array(s),n=new Array(s);let i=0,r=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),h=n[r];o||(o=c),e[i]=l,n[i]=c;let d=r,u=0;for(;d!==i;)u+=e[d++],d=d%s;if(i=(i+1)%s,i===r&&(r=(r+1)%s),c-o<t)return;const p=h&&c-h;return p?Math.round(u*1e3/p):void 0}}function RM(s,t){let e=0,n=1e3/t,i,r;const o=(c,h=Date.now())=>{e=h,i=null,r&&(clearTimeout(r),r=null),s.apply(null,c)};return[(...c)=>{const h=Date.now(),d=h-e;d>=n?o(c,h):(i=c,r||(r=setTimeout(()=>{r=null,o(i)},n-d)))},()=>i&&o(i)]}const Pr=(s,t,e=3)=>{let n=0;const i=AM(50,250);return RM(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-n,c=i(l),h=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&h?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[t?"download":"upload"]:!0};s(d)},e)},ql=(s,t)=>{const e=s!=null;return[n=>t[0]({lengthComputable:e,total:s,loaded:n}),t[1]]},jl=s=>(...t)=>Z.asap(()=>s(...t)),CM=Te.hasStandardBrowserEnv?((s,t)=>e=>(e=new URL(e,Te.origin),s.protocol===e.protocol&&s.host===e.host&&(t||s.port===e.port)))(new URL(Te.origin),Te.navigator&&/(msie|trident)/i.test(Te.navigator.userAgent)):()=>!0,PM=Te.hasStandardBrowserEnv?{write(s,t,e,n,i,r){const o=[s+"="+encodeURIComponent(t)];Z.isNumber(e)&&o.push("expires="+new Date(e).toGMTString()),Z.isString(n)&&o.push("path="+n),Z.isString(i)&&o.push("domain="+i),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(s){const t=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(s){this.write(s,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function LM(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function IM(s,t){return t?s.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):s}function cu(s,t){return s&&!LM(t)?IM(s,t):t}const Yl=s=>s instanceof De?{...s}:s;function gi(s,t){t=t||{};const e={};function n(c,h,d,u){return Z.isPlainObject(c)&&Z.isPlainObject(h)?Z.merge.call({caseless:u},c,h):Z.isPlainObject(h)?Z.merge({},h):Z.isArray(h)?h.slice():h}function i(c,h,d,u){if(Z.isUndefined(h)){if(!Z.isUndefined(c))return n(void 0,c,d,u)}else return n(c,h,d,u)}function r(c,h){if(!Z.isUndefined(h))return n(void 0,h)}function o(c,h){if(Z.isUndefined(h)){if(!Z.isUndefined(c))return n(void 0,c)}else return n(void 0,h)}function a(c,h,d){if(d in t)return n(c,h);if(d in s)return n(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,h,d)=>i(Yl(c),Yl(h),d,!0)};return Z.forEach(Object.keys(Object.assign({},s,t)),function(h){const d=l[h]||i,u=d(s[h],t[h],h);Z.isUndefined(u)&&d!==a||(e[h]=u)}),e}const lu=s=>{const t=gi({},s);let{data:e,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:r,headers:o,auth:a}=t;t.headers=o=De.from(o),t.url=iu(cu(t.baseURL,t.url),s.params,s.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(Z.isFormData(e)){if(Te.hasStandardBrowserEnv||Te.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...h]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...h].join("; "))}}if(Te.hasStandardBrowserEnv&&(n&&Z.isFunction(n)&&(n=n(t)),n||n!==!1&&CM(t.url))){const c=i&&r&&PM.read(r);c&&o.set(i,c)}return t},DM=typeof XMLHttpRequest<"u",UM=DM&&function(s){return new Promise(function(e,n){const i=lu(s);let r=i.data;const o=De.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=i,h,d,u,p,m;function _(){p&&p(),m&&m(),i.cancelToken&&i.cancelToken.unsubscribe(h),i.signal&&i.signal.removeEventListener("abort",h)}let g=new XMLHttpRequest;g.open(i.method.toUpperCase(),i.url,!0),g.timeout=i.timeout;function f(){if(!g)return;const v=De.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),M={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:v,config:s,request:g};au(function(T){e(T),_()},function(T){n(T),_()},M),g=null}"onloadend"in g?g.onloadend=f:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(f)},g.onabort=function(){g&&(n(new zt("Request aborted",zt.ECONNABORTED,s,g)),g=null)},g.onerror=function(){n(new zt("Network Error",zt.ERR_NETWORK,s,g)),g=null},g.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const M=i.transitional||su;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),n(new zt(S,M.clarifyTimeoutError?zt.ETIMEDOUT:zt.ECONNABORTED,s,g)),g=null},r===void 0&&o.setContentType(null),"setRequestHeader"in g&&Z.forEach(o.toJSON(),function(S,M){g.setRequestHeader(M,S)}),Z.isUndefined(i.withCredentials)||(g.withCredentials=!!i.withCredentials),a&&a!=="json"&&(g.responseType=i.responseType),c&&([u,m]=Pr(c,!0),g.addEventListener("progress",u)),l&&g.upload&&([d,p]=Pr(l),g.upload.addEventListener("progress",d),g.upload.addEventListener("loadend",p)),(i.cancelToken||i.signal)&&(h=v=>{g&&(n(!v||v.type?new us(null,s,g):v),g.abort(),g=null)},i.cancelToken&&i.cancelToken.subscribe(h),i.signal&&(i.signal.aborted?h():i.signal.addEventListener("abort",h)));const x=TM(i.url);if(x&&Te.protocols.indexOf(x)===-1){n(new zt("Unsupported protocol "+x+":",zt.ERR_BAD_REQUEST,s));return}g.send(r||null)})},NM=(s,t)=>{const{length:e}=s=s?s.filter(Boolean):[];if(t||e){let n=new AbortController,i;const r=function(c){if(!i){i=!0,a();const h=c instanceof Error?c:this.reason;n.abort(h instanceof zt?h:new us(h instanceof Error?h.message:h))}};let o=t&&setTimeout(()=>{o=null,r(new zt(`timeout ${t} of ms exceeded`,zt.ETIMEDOUT))},t);const a=()=>{s&&(o&&clearTimeout(o),o=null,s.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),s=null)};s.forEach(c=>c.addEventListener("abort",r));const{signal:l}=n;return l.unsubscribe=()=>Z.asap(a),l}},FM=function*(s,t){let e=s.byteLength;if(e<t){yield s;return}let n=0,i;for(;n<e;)i=n+t,yield s.slice(n,i),n=i},OM=async function*(s,t){for await(const e of BM(s))yield*FM(e,t)},BM=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const t=s.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Zl=(s,t,e,n)=>{const i=OM(s,t);let r=0,o,a=l=>{o||(o=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:c,value:h}=await i.next();if(c){a(),l.close();return}let d=h.byteLength;if(e){let u=r+=d;e(u)}l.enqueue(new Uint8Array(h))}catch(c){throw a(c),c}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},jr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",hu=jr&&typeof ReadableStream=="function",zM=jr&&(typeof TextEncoder=="function"?(s=>t=>s.encode(t))(new TextEncoder):async s=>new Uint8Array(await new Response(s).arrayBuffer())),uu=(s,...t)=>{try{return!!s(...t)}catch{return!1}},kM=hu&&uu(()=>{let s=!1;const t=new Request(Te.origin,{body:new ReadableStream,method:"POST",get duplex(){return s=!0,"half"}}).headers.has("Content-Type");return s&&!t}),Kl=64*1024,fa=hu&&uu(()=>Z.isReadableStream(new Response("").body)),Lr={stream:fa&&(s=>s.body)};jr&&(s=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Lr[t]&&(Lr[t]=Z.isFunction(s[t])?e=>e[t]():(e,n)=>{throw new zt(`Response type '${t}' is not supported`,zt.ERR_NOT_SUPPORT,n)})})})(new Response);const HM=async s=>{if(s==null)return 0;if(Z.isBlob(s))return s.size;if(Z.isSpecCompliantForm(s))return(await new Request(Te.origin,{method:"POST",body:s}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(s)||Z.isArrayBuffer(s))return s.byteLength;if(Z.isURLSearchParams(s)&&(s=s+""),Z.isString(s))return(await zM(s)).byteLength},GM=async(s,t)=>{const e=Z.toFiniteNumber(s.getContentLength());return e??HM(t)},VM=jr&&(async s=>{let{url:t,method:e,data:n,signal:i,cancelToken:r,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:h,withCredentials:d="same-origin",fetchOptions:u}=lu(s);c=c?(c+"").toLowerCase():"text";let p=NM([i,r&&r.toAbortSignal()],o),m;const _=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let g;try{if(l&&kM&&e!=="get"&&e!=="head"&&(g=await GM(h,n))!==0){let M=new Request(t,{method:"POST",body:n,duplex:"half"}),w;if(Z.isFormData(n)&&(w=M.headers.get("content-type"))&&h.setContentType(w),M.body){const[T,L]=ql(g,Pr(jl(l)));n=Zl(M.body,Kl,T,L)}}Z.isString(d)||(d=d?"include":"omit");const f="credentials"in Request.prototype;m=new Request(t,{...u,signal:p,method:e.toUpperCase(),headers:h.normalize().toJSON(),body:n,duplex:"half",credentials:f?d:void 0});let x=await fetch(m);const v=fa&&(c==="stream"||c==="response");if(fa&&(a||v&&_)){const M={};["status","statusText","headers"].forEach(y=>{M[y]=x[y]});const w=Z.toFiniteNumber(x.headers.get("content-length")),[T,L]=a&&ql(w,Pr(jl(a),!0))||[];x=new Response(Zl(x.body,Kl,T,()=>{L&&L(),_&&_()}),M)}c=c||"text";let S=await Lr[Z.findKey(Lr,c)||"text"](x,s);return!v&&_&&_(),await new Promise((M,w)=>{au(M,w,{data:S,headers:De.from(x.headers),status:x.status,statusText:x.statusText,config:s,request:m})})}catch(f){throw _&&_(),f&&f.name==="TypeError"&&/fetch/i.test(f.message)?Object.assign(new zt("Network Error",zt.ERR_NETWORK,s,m),{cause:f.cause||f}):zt.from(f,f&&f.code,s,m)}}),pa={http:sM,xhr:UM,fetch:VM};Z.forEach(pa,(s,t)=>{if(s){try{Object.defineProperty(s,"name",{value:t})}catch{}Object.defineProperty(s,"adapterName",{value:t})}});const $l=s=>`- ${s}`,WM=s=>Z.isFunction(s)||s===null||s===!1,du={getAdapter:s=>{s=Z.isArray(s)?s:[s];const{length:t}=s;let e,n;const i={};for(let r=0;r<t;r++){e=s[r];let o;if(n=e,!WM(e)&&(n=pa[(o=String(e)).toLowerCase()],n===void 0))throw new zt(`Unknown adapter '${o}'`);if(n)break;i[o||"#"+r]=n}if(!n){const r=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?r.length>1?`since :
`+r.map($l).join(`
`):" "+$l(r[0]):"as no adapter specified";throw new zt("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return n},adapters:pa};function Ko(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new us(null,s)}function Jl(s){return Ko(s),s.headers=De.from(s.headers),s.data=Zo.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),du.getAdapter(s.adapter||zs.adapter)(s).then(function(n){return Ko(s),n.data=Zo.call(s,s.transformResponse,n),n.headers=De.from(n.headers),n},function(n){return ou(n)||(Ko(s),n&&n.response&&(n.response.data=Zo.call(s,s.transformResponse,n.response),n.response.headers=De.from(n.response.headers))),Promise.reject(n)})}const fu="1.7.9",Yr={};["object","boolean","number","function","string","symbol"].forEach((s,t)=>{Yr[s]=function(n){return typeof n===s||"a"+(t<1?"n ":" ")+s}});const Ql={};Yr.transitional=function(t,e,n){function i(r,o){return"[Axios v"+fu+"] Transitional option '"+r+"'"+o+(n?". "+n:"")}return(r,o,a)=>{if(t===!1)throw new zt(i(o," has been removed"+(e?" in "+e:"")),zt.ERR_DEPRECATED);return e&&!Ql[o]&&(Ql[o]=!0,console.warn(i(o," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(r,o,a):!0}};Yr.spelling=function(t){return(e,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function XM(s,t,e){if(typeof s!="object")throw new zt("options must be an object",zt.ERR_BAD_OPTION_VALUE);const n=Object.keys(s);let i=n.length;for(;i-- >0;){const r=n[i],o=t[r];if(o){const a=s[r],l=a===void 0||o(a,r,s);if(l!==!0)throw new zt("option "+r+" must be "+l,zt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new zt("Unknown option "+r,zt.ERR_BAD_OPTION)}}const br={assertOptions:XM,validators:Yr},un=br.validators;class li{constructor(t){this.defaults=t,this.interceptors={request:new Wl,response:new Wl}}async request(t,e){try{return await this._request(t,e)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const r=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?r&&!String(n.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+r):n.stack=r}catch{}}throw n}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=gi(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;n!==void 0&&br.assertOptions(n,{silentJSONParsing:un.transitional(un.boolean),forcedJSONParsing:un.transitional(un.boolean),clarifyTimeoutError:un.transitional(un.boolean)},!1),i!=null&&(Z.isFunction(i)?e.paramsSerializer={serialize:i}:br.assertOptions(i,{encode:un.function,serialize:un.function},!0)),br.assertOptions(e,{baseUrl:un.spelling("baseURL"),withXsrfToken:un.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let o=r&&Z.merge(r.common,r[e.method]);r&&Z.forEach(["delete","get","head","post","put","patch","common"],m=>{delete r[m]}),e.headers=De.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(e)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let h,d=0,u;if(!l){const m=[Jl.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),u=m.length,h=Promise.resolve(e);d<u;)h=h.then(m[d++],m[d++]);return h}u=a.length;let p=e;for(d=0;d<u;){const m=a[d++],_=a[d++];try{p=m(p)}catch(g){_.call(this,g);break}}try{h=Jl.call(this,p)}catch(m){return Promise.reject(m)}for(d=0,u=c.length;d<u;)h=h.then(c[d++],c[d++]);return h}getUri(t){t=gi(this.defaults,t);const e=cu(t.baseURL,t.url);return iu(e,t.params,t.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(t){li.prototype[t]=function(e,n){return this.request(gi(n||{},{method:t,url:e,data:(n||{}).data}))}});Z.forEach(["post","put","patch"],function(t){function e(n){return function(r,o,a){return this.request(gi(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}li.prototype[t]=e(),li.prototype[t+"Form"]=e(!0)});class La{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(r){e=r});const n=this;this.promise.then(i=>{if(!n._listeners)return;let r=n._listeners.length;for(;r-- >0;)n._listeners[r](i);n._listeners=null}),this.promise.then=i=>{let r;const o=new Promise(a=>{n.subscribe(a),r=a}).then(i);return o.cancel=function(){n.unsubscribe(r)},o},t(function(r,o,a){n.reason||(n.reason=new us(r,o,a),e(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=n=>{t.abort(n)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new La(function(i){t=i}),cancel:t}}}function qM(s){return function(e){return s.apply(null,e)}}function jM(s){return Z.isObject(s)&&s.isAxiosError===!0}const ma={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ma).forEach(([s,t])=>{ma[t]=s});function pu(s){const t=new li(s),e=Xh(li.prototype.request,t);return Z.extend(e,li.prototype,t,{allOwnKeys:!0}),Z.extend(e,t,null,{allOwnKeys:!0}),e.create=function(i){return pu(gi(s,i))},e}const ee=pu(zs);ee.Axios=li;ee.CanceledError=us;ee.CancelToken=La;ee.isCancel=ou;ee.VERSION=fu;ee.toFormData=qr;ee.AxiosError=zt;ee.Cancel=ee.CanceledError;ee.all=function(t){return Promise.all(t)};ee.spread=qM;ee.isAxiosError=jM;ee.mergeConfig=gi;ee.AxiosHeaders=De;ee.formToJSON=s=>ru(Z.isHTMLForm(s)?new FormData(s):s);ee.getAdapter=du.getAdapter;ee.HttpStatusCode=ma;ee.default=ee;class YM extends __{constructor(t){super(t),this.type=Ln}parse(t){const a=function(v,S){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(S||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(S||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(S||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(S||""))}return-1},d=`
`,u=function(v,S,M){S=S||1024;let T=v.pos,L=-1,y=0,b="",U=String.fromCharCode.apply(null,new Uint16Array(v.subarray(T,T+128)));for(;0>(L=U.indexOf(d))&&y<S&&T<v.byteLength;)b+=U,y+=U.length,T+=128,U+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(T,T+128)));return-1<L?(v.pos+=y+L+1,b+U.slice(0,L)):!1},p=function(v){const S=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,y={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let b,U;if(v.pos>=v.byteLength||!(b=u(v)))return a(1,"no header found");if(!(U=b.match(S)))return a(3,"bad initial token");for(y.valid|=1,y.programtype=U[1],y.string+=b+`
`;b=u(v),b!==!1;){if(y.string+=b+`
`,b.charAt(0)==="#"){y.comments+=b+`
`;continue}if((U=b.match(M))&&(y.gamma=parseFloat(U[1])),(U=b.match(w))&&(y.exposure=parseFloat(U[1])),(U=b.match(T))&&(y.valid|=2,y.format=U[1]),(U=b.match(L))&&(y.valid|=4,y.height=parseInt(U[1],10),y.width=parseInt(U[2],10)),y.valid&2&&y.valid&4)break}return y.valid&2?y.valid&4?y:a(3,"missing image size specifier"):a(3,"missing format specifier")},m=function(v,S,M){const w=S;if(w<8||w>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(w!==(v[2]<<8|v[3]))return a(3,"wrong scanline width");const T=new Uint8Array(4*S*M);if(!T.length)return a(4,"unable to allocate buffer space");let L=0,y=0;const b=4*w,U=new Uint8Array(4),H=new Uint8Array(b);let C=M;for(;C>0&&y<v.byteLength;){if(y+4>v.byteLength)return a(1);if(U[0]=v[y++],U[1]=v[y++],U[2]=v[y++],U[3]=v[y++],U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=w)return a(3,"bad rgbe scanline format");let I=0,D;for(;I<b&&y<v.byteLength;){D=v[y++];const V=D>128;if(V&&(D-=128),D===0||I+D>b)return a(3,"bad scanline data");if(V){const k=v[y++];for(let X=0;X<D;X++)H[I++]=k}else H.set(v.subarray(y,y+D),I),I+=D,y+=D}const F=w;for(let V=0;V<F;V++){let k=0;T[L]=H[V+k],k+=w,T[L+1]=H[V+k],k+=w,T[L+2]=H[V+k],k+=w,T[L+3]=H[V+k],L+=4}C--}return T},_=function(v,S,M,w){const T=v[S+3],L=Math.pow(2,T-128)/255;M[w+0]=v[S+0]*L,M[w+1]=v[S+1]*L,M[w+2]=v[S+2]*L,M[w+3]=1},g=function(v,S,M,w){const T=v[S+3],L=Math.pow(2,T-128)/255;M[w+0]=Ks.toHalfFloat(Math.min(v[S+0]*L,65504)),M[w+1]=Ks.toHalfFloat(Math.min(v[S+1]*L,65504)),M[w+2]=Ks.toHalfFloat(Math.min(v[S+2]*L,65504)),M[w+3]=Ks.toHalfFloat(1)},f=new Uint8Array(t);f.pos=0;const x=p(f);if(x!==-1){const v=x.width,S=x.height,M=m(f.subarray(f.pos),v,S);if(M!==-1){let w,T,L;switch(this.type){case pn:L=M.length/4;const y=new Float32Array(L*4);for(let U=0;U<L;U++)_(M,U*4,y,U*4);w=y,T=pn;break;case Ln:L=M.length/4;const b=new Uint16Array(L*4);for(let U=0;U<L;U++)g(M,U*4,b,U*4);w=b,T=Ln;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:S,data:w,header:x.string,gamma:x.gamma,exposure:x.exposure,type:T}}}return null}setDataType(t){return this.type=t,this}load(t,e,n,i){function r(o,a){switch(o.type){case pn:case Ln:o.colorSpace=nn,o.minFilter=Se,o.magFilter=Se,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,r,n,i)}}const ie=new I0;ie.background=new Ot(11184810);const In=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);In.position.set(300,10,300);const Nn=new Be(75,window.innerWidth/window.innerHeight,.1,1e4);Nn.position.set(1200,500,1800);Nn.lookAt(1e3,0,1e3);Nn.updateProjectionMatrix();let Rs=Nn;const vi=new bh({alpha:!0,antialias:!0,powerPreference:"high-performance"});vi.setSize(window.innerWidth,window.innerHeight);vi.setClearColor(0,0);document.body.appendChild(vi.domElement);const ZM=new M_(16777215,.3);ie.add(ZM);const mu=new y_(16777215,1);mu.position.set(10,10,10);ie.add(mu);const KM=new YM;KM.load("./public/textures/sunflowers_puresky_4k.hdr",s=>{s.mapping=Ar,ie.background=s,ie.environment=s});const $M=new Nh,Zr=$M.load("./public/textures/4K-concrete_41.jpg-diffuse.jpg");Zr.wrapS=es;Zr.wrapT=es;Zr.repeat.set(500,500);const th=1e3,JM=new Br(th,th),gu=new fi({map:Zr,side:fn,transparent:!0,opacity:1}),Ia=new se(JM,gu);Ia.position.set(500,-.1,500);Ia.rotation.x=-Math.PI/2;ie.add(Ia);const Ir=new R_(In,vi.domElement),Fn=new w_(Nn,vi.domElement);Fn.enableDamping=!1;Fn.dampingFactor=.05;Fn.screenSpacePanning=!0;Fn.enableZoom=!0;Fn.minDistance=50;Fn.maxDistance=1500;const qn=new cy;qn.gravity.set(0,-9.82,0);const _u=new ls;_u.restitution=0;_u.friction=1;const Da=new xt({mass:0,material:gu,shape:new Wv});Da.quaternion.setFromEuler(-Math.PI/2,0,0);qn.addBody(Da);const Ua=new ls;Ua.restitution=0;Ua.friction=.8;const QM=new Vv(.5,.5,3,8),ke=new xt({mass:1,material:Ua,position:new E(300,10,300)});ke.addShape(QM);ke.addEventListener("collide",function(s){s.body===Da&&(ke.velocity.y=Math.max(ke.velocity.y,0))});const tS=3;qn.addEventListener("postStep",function(){ke.position.y=tS,ke.velocity.y=0});qn.addBody(ke);const Xi={};window.addEventListener("keydown",s=>Xi[s.code]=!0);window.addEventListener("keyup",s=>Xi[s.code]=!1);document.addEventListener("dblclick",()=>{Ir.lock()});const qi=20;ke.velocity.length()>qi&&ke.velocity.scale(qi/ke.velocity.length(),ke.velocity);const vu=document.getElementById("cameraSelect");vu.value="globalCamera";vu.addEventListener("change",s=>{const t=s.target.value;t==="firstPersonCamera"?(Rs=In,Fn.enabled=!1,Ir.lock()):t==="globalCamera"&&(Rs=Nn,Fn.enabled=!0,Ir.unlock())});function xu(){if(requestAnimationFrame(xu),qn.step(1/120),Rs===In&&Ir.isLocked){const s=ke.velocity;s.x=0,s.z=0;const t=new B;In.getWorldDirection(t),t.y=0,t.normalize();const e=new B;e.crossVectors(In.up,t).normalize(),Xi.KeyW&&s.vadd(t.multiplyScalar(qi),s),Xi.KeyS&&s.vadd(t.multiplyScalar(-qi),s),Xi.KeyA&&s.vadd(e.multiplyScalar(-qi),s),Xi.KeyD&&s.vadd(e.multiplyScalar(qi),s)}In.position.copy(ke.position),Rs===Nn&&Fn.update(),vi.render(ie,Rs)}window.addEventListener("resize",()=>{In.aspect=window.innerWidth/window.innerHeight,In.updateProjectionMatrix(),Nn.aspect=window.innerWidth/window.innerHeight,Nn.updateProjectionMatrix(),vi.setSize(window.innerWidth,window.innerHeight)});xu();const Dr={20:{width:9.4,height:11,depth:24.4,bayOffset:1},40:{width:9.4,height:11,depth:48.8,bayOffset:2}};ee.defaults.withCredentials=!0;var Kr,Tr,yu,Mu=47,Su=13918691207;Ur("companyId")!=null&&(Mu=Ur("companyId"));Ur("loginId")!=null&&(Su=Ur("loginId"));function Ur(s){return new URL(window.location.href).searchParams.get(s)}await cS(Mu,Su);await lS();await hS();function eS(s,t){const{X:e,Y:n,ZoneDirection:i,XDirection:r,YDirection:o,X1:a,Y1:l,Color:c,Name:h}=s,d=2.5*10,u=10,p=new Ot(c||16777215),m=new bs({color:p,linewidth:20,opacity:.6,transparent:!0}),_=new Ge,g=[],f=a||0,x=l||0;let v,S;if(i===!1){v=d,S=u;for(let I=0;I<=n;I++){const D=x+I*S,F=f,V=f+e*v;g.push(F,.1,D,V,.1,D)}for(let I=0;I<=e;I++){const D=f+I*v,F=x,V=x+n*S;g.push(D,.1,F,D,.1,V)}}else{v=u,S=d;for(let I=0;I<=e;I++){const D=x+I*S,F=f,V=f+n*v;g.push(F,.1,D,V,.1,D)}for(let I=0;I<=n;I++){const D=f+I*v,F=x,V=x+e*S;g.push(D,.1,F,D,.1,V)}}_.setAttribute("position",new ve(g,3));const M=new ra(_,m);if(ie.add(M),h){var w,T;i===!1?(w=f+e*v/2,T=x+n*S/2):(w=f+n*v/2,T=x+e*S/2),$r(function(I){const D=new Ds(h,{font:I,size:10,height:.1}),F=new fi({color:12257280}),V=new Ds(h,{font:I,size:10,height:.1}),k=new fi({color:16777215,side:Pe}),X=new se(D,F),tt=new se(V,k);tt.scale.set(1.05,1.05,1.05),X.position.set(w,.1,T),tt.position.set(w,.1,T),X.rotation.x=-Math.PI/2,tt.rotation.x=-Math.PI/2,ie.add(tt),ie.add(X)})}for(var L=[],y=[],b=0;b<t.length;b++)t[b].ContainerType.startsWith("20")?y.push(t[b]):t[b].ContainerType.startsWith("40")&&L.push(t[b]);y.forEach(I=>{nS(I,s)});for(var U=[],b=0;b<L.length;b++){for(var H=-1,C=0;C<U.length;C++)U[C].CntrNo==L[b].CntrNo&&(H=C);H==-1?(L[b].FX=[{X:L[b].X,Y:L[b].Y}],U.push(L[b])):U[H].FX.push({X:L[b].X,Y:L[b].Y})}U.forEach(I=>{iS(I,s)})}function nS(s,t){const{X:e,Y:n,Z:i,ContainerType:r,Color:o,CntrNo:a}=s,{width:l,height:c,depth:h}=Dr[r.substring(0,2)]||Dr[20];let d=0,u,p,m;t.ZoneDirection===!1?(d=Math.PI/2,t.XDirection==!1?t.YDirection==!1?(u=t.X1+(e-1)*25+12.5,p=(i-1)*c+c/2,m=t.Y1+(t.Y-n)*10+5):(u=t.X1+(e-1)*25+12.5,p=(i-1)*c+c/2,m=t.Y1+(n-1)*10+5):t.YDirection==!1?(u=t.X1+(t.X-e)*25+12.5,p=(i-1)*c+c/2,m=t.Y1+(t.Y-n)*10+5):(u=t.X1+(t.X-e)*25+12.5,p=(i-1)*c+c/2,m=t.Y1+(n-1)*10+5)):t.XDirection==!1?t.YDirection==!1?(u=t.X1+(t.Y-n)*10+5,p=(i-1)*c+c/2,m=t.Y1+(e-1)*25+12.5):(u=t.X1+(n-1)*10+5,p=(i-1)*c+c/2,m=t.Y1+(e-1)*25+12.5):t.YDirection==!1?(u=t.X1+(t.Y-n)*10+5,p=(i-1)*c+c/2,m=t.Y1+(t.X-e)*25+12.5):(u=t.X1+(n-1)*10+5,p=(i-1)*c+c/2,m=t.Y1+(t.X-e)*25+12.5),Eu("40box",function(_){const g=new Xn().setFromObject(_),f=l/(g.max.x-g.min.x),x=c/(g.max.y-g.min.y),v=h/(g.max.z-g.min.z);_.scale.set(f,x,v);const S=g.min.y*x,M=p-S-5.5;_.position.set(u,M,m),_.rotation.y=d,_.code=a,_.IsBox=!0,_.traverse(L=>{L.isMesh&&(L.name.includes("LBR")?L.material.color.set(13023140):L.material=new wa({color:new Ot(o||"#ffffff")}))}),ie.add(_);const w=new cs(new E(l/2,c/2,h/2)),T=new xt({mass:0,position:new E(u,M,m),shape:w});T.quaternion.setFromAxisAngle(new E(0,1,0),d),_.userData={body:T},qn.addBody(T),$r(function(L){const y=new Ds(a,{font:L,size:2,height:.1}),b=new se(y,Ji),U=l/2+1;if(t.ZoneDirection){b.position.set(u-U+1,M+c/2-2,m-8),b.rotation.y=d-Math.PI/2,ie.add(b);const H=new se(y,Ji);H.position.set(u+U-1,M+c/2-2,m+8),H.rotation.y=d+Math.PI/2,ie.add(H)}else{b.position.set(u-U+13,M+c/2-2,m-5),b.rotation.y=d+Math.PI/2,ie.add(b);const H=new se(y,Ji);H.position.set(u+U-13,M+c/2-2,m+5),H.rotation.y=d-Math.PI/2,ie.add(H)}})})}const $o={};function Eu(s,t){if($o[s])t($o[s].clone());else{const e=new I_,n=new z_;e.load("./public/3dmodel/"+s+".mtl",function(i){i.preload(),n.setMaterials(i),n.load("./public/3dmodel/"+s+".obj",function(r){r.traverse(function(o){o.isMesh&&(o.material=new wa({color:13421772,metalness:.9,roughness:.1,envMap:ie.environment,envMapIntensity:1}))}),$o[s]=r,t(r.clone())})})}}let Jo=null;function $r(s){if(Jo){s(Jo);return}new my().load("./public/font/FangSong_Regular.json",function(e){Jo=e,s(e)})}const Ji=new fi({color:16777215});function iS(s,t){for(var{X:e,Y:n,Z:i,ContainerType:r,Color:o,CntrNo:a,FX:l}=s,c=0;c<l.length;c++)e>l[e]&&(e=l[e]),n>l[n]&&(n=l[n]);const{width:h,height:d,depth:u}=Dr[r.substring(0,2)]||Dr[20];let p=0,m,_,g;t.ZoneDirection===!1?(p=Math.PI/2,t.XDirection==!1?t.YDirection==!1?(m=t.X1+(e-1)*25+25,_=(i-1)*d+d/2,g=t.Y1+(t.Y-n)*10+5):(m=t.X1+(e-1)*25+25,_=(i-1)*d+d/2,g=t.Y1+(n-1)*10+5):t.YDirection==!1?(m=t.X1+(t.X-e)*25,_=(i-1)*d+d/2,g=t.Y1+(t.Y-n)*10+5):(m=t.X1+(t.X-e)*25,_=(i-1)*d+d/2,g=t.Y1+(n-1)*10+5)):t.XDirection==!1?t.YDirection==!1?(m=t.X1+(t.Y-n)*10+5,_=(i-1)*d+d/2,g=t.Y1+(e-1)*25+25):(m=t.X1+(n-1)*10+5,_=(i-1)*d+d/2,g=t.Y1+(e-1)*25+25):t.YDirection==!1?(m=t.X1+(t.Y-n)*10+5,_=(i-1)*d+d/2,g=t.Y1+(t.X-e)*25):(m=t.X1+(n-1)*10+5,_=(i-1)*d+d/2,g=t.Y1+(t.X-e)*25),Eu("40box",function(f){const x=new Xn().setFromObject(f),v=h/(x.max.x-x.min.x),S=d/(x.max.y-x.min.y),M=u/(x.max.z-x.min.z);f.scale.set(v,S,M);const w=x.min.y*S,T=_-w-5.5;f.position.set(m,T,g),f.rotation.y=p,f.traverse(b=>{b.isMesh&&(b.name.includes("LBR")?b.material.color.set(13023140):b.material=new wa({color:new Ot(o||"#ffffff")}))}),ie.add(f);const L=new cs(new E(h/2,d/2,u/2)),y=new xt({mass:0,position:new E(m,T,g),shape:L});y.quaternion.setFromAxisAngle(new E(0,1,0),p),f.userData={body:y},qn.addBody(y),$r(function(b){const U=new Ds(a,{font:b,size:2,height:.1}),H=new se(U,Ji),C=h/2+1;if(t.ZoneDirection){H.position.set(m-C+1,T+d/2-2,g-8),H.rotation.y=p-Math.PI/2,ie.add(H);const I=new se(U,Ji);I.position.set(m+C-1,T+d/2-2,g+8),I.rotation.y=p+Math.PI/2,ie.add(I)}else{H.position.set(m-C+13,T+d/2-2,g-5),H.rotation.y=p+Math.PI/2,ie.add(H);const I=new se(U,Ji);I.position.set(m+C-13,T+d/2-2,g+5),I.rotation.y=p-Math.PI/2,ie.add(I)}})})}function sS(s){return new Promise(t=>setTimeout(t,s))}async function rS(){for(var s=0;s<Tr.rows.length;s++){await sS(50);var t=await uS(Tr.rows[s].Id);eS(Tr.rows[s],t)}}rS();function oS(s,t,e){s.forEach(n=>{n.High==0&&(n.High=3);const i=n.X2-n.X1,r=n.Y2-n.Y1,o=n.High*5,a=(n.X1+n.X2)/2,l=(n.Y1+n.Y2)/2,c=new os(i,o,r),h=new f_({color:new Ot(n.Color),opacity:.7,transparent:!0}),d=new se(c,h);d.position.set(a,o/2,l),n.Name&&aS(d,n.Name),t.add(d);const u=new cs(new E(i/2,o/2,r/2)),p=new xt({mass:0,shape:u,position:new E(a,o/2,l)});e.addBody(p)})}function aS(s,t){$r(function(e){const n=new fi({color:16777215}),i={font:e,size:10,height:.2,curveSegments:12},r=new Xn().setFromObject(s),o=r.max.x-r.min.x,a=r.max.y-r.min.y,l=r.max.z-r.min.z;function c(_,g,f){const x=new Ds(_,i);x.computeBoundingBox();const v=x.boundingBox,S=v.max.y-v.min.y;g.y-=S/2;const M=new se(x,n);return M.position.set(g.x,g.y,g.z),M.rotation.set(f.x,f.y,f.z),M}const h=c(t,{x:0,y:a,z:0},{x:-Math.PI/2,y:0,z:0});s.add(h);const d=c(t,{x:0,y:0,z:l/2+.2},{x:0,y:0,z:0});s.add(d);const u=c(t,{x:0,y:0,z:-l/2-.2},{x:0,y:Math.PI,z:0});s.add(u);const p=c(t,{x:-o/2-.2,y:0,z:0},{x:0,y:Math.PI/2,z:0});s.add(p);const m=c(t,{x:o/2+.2,y:0,z:0},{x:0,y:-Math.PI/2,z:0});s.add(m)})}oS(yu,ie,qn);async function cS(s,t){try{Kr=(await ee.get("/Api/Backend/YAD/YardDashboard.ashx",{params:{act:"GetCompanyInfo",companyId:s,loginId:t},withCredentials:!0})).data.token}catch(e){console.error("请求失败:",e)}}async function lS(){try{Tr=(await ee.get("/Api/Backend/YAD/YardDashboard.ashx",{params:{act:"ZoneQuery"},headers:{Authorization:`${Kr}`},withCredentials:!0})).data}catch(s){console.error("请求失败:",s)}}async function hS(){try{yu=(await ee.get("/Api/Backend/YAD/YardDashboard.ashx",{params:{act:"ZoneGetCommonArea"},headers:{Authorization:`${Kr}`},withCredentials:!0})).data}catch(s){console.error("请求失败:",s)}}async function uS(s){try{return(await ee.get("/Api/Backend/YAD/YardDashboard.ashx",{params:{act:"ZoneQueryContainerInZoneCell",id:s},headers:{Authorization:`${Kr}`},withCredentials:!0})).data}catch(t){console.error("请求失败:",t)}}document.getElementById("searchBtn").addEventListener("click",function(){const s=document.getElementById("boxNumber").value;s&&wu(s)});document.getElementById("cancelBtn").addEventListener("click",function(){document.getElementById("boxNumber").value="",wu("")});function wu(s){ie.traverse(t=>{t.IsBox&&t instanceof Vi&&t.children.forEach(e=>{e instanceof se&&e.material&&(s&&t.code!==s?(e.material.transparent=!0,e.material.opacity=.1):(e.material.transparent=!1,e.material.opacity=1))})})}
