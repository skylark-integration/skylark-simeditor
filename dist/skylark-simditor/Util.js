/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/query"],function(e,t){var n,o,i,r,a,s,l,u,d,c,p,f,h=e.Evented.inherit({init:function(e){if(this.editor=e,this.browser.msie&&this.browser.version<11)return this.phBr=""}});return h.pluginName="Util",h.prototype.phBr="<br/>",h.prototype.os=(n={},/Mac/.test(navigator.appVersion)?n.mac=!0:/Linux/.test(navigator.appVersion)?n.linux=!0:/Win/.test(navigator.appVersion)?n.win=!0:/X11/.test(navigator.appVersion)&&(n.unix=!0),/Mobi/.test(navigator.appVersion)&&(n.mobile=!0),n),h.prototype.browser=(f=navigator.userAgent,a=/(msie|trident)/i.test(f),o=/chrome|crios/i.test(f),p=/safari/i.test(f)&&!o,r=/firefox/i.test(f),i=/edge/i.test(f),a?{msie:!0,version:1*(null!=(s=f.match(/(msie |rv:)(\d+(\.\d+)?)/i))?s[2]:void 0)}:i?{edge:!0,webkit:!0,version:1*(null!=(l=f.match(/edge\/(\d+(\.\d+)?)/i))?l[1]:void 0)}:o?{webkit:!0,chrome:!0,version:1*(null!=(u=f.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i))?u[1]:void 0)}:p?{webkit:!0,safari:!0,version:1*(null!=(d=f.match(/version\/(\d+(\.\d+)?)/i))?d[1]:void 0)}:r?{mozilla:!0,firefox:!0,version:1*(null!=(c=f.match(/firefox\/(\d+(\.\d+)?)/i))?c[1]:void 0)}:{}),h.prototype.support={onselectionchange:function(){var e;if(void 0!==(e=document.onselectionchange))try{return document.onselectionchange=0,null===document.onselectionchange}catch(e){}finally{document.onselectionchange=e}return!1}(),oninput:!/(msie|trident)/i.test(navigator.userAgent)},h.prototype.reflow=function(e){return null==e&&(e=document),t(e)[0].offsetHeight},h.prototype.metaKey=function(e){return/Mac/.test(navigator.userAgent)?e.metaKey:e.ctrlKey},h.prototype.isEmptyNode=function(e){var n;return(n=t(e)).is(":empty")||!n.text()&&!n.find(":not(br, span, div)").length},h.prototype.isDecoratedNode=function(e){return t(e).is('[class^="simditor-"]')},h.prototype.blockNodes=["div","p","ul","ol","li","blockquote","hr","pre","h1","h2","h3","h4","h5","table"],h.prototype.isBlockNode=function(e){return!(!(e=t(e)[0])||3===e.nodeType)&&new RegExp("^("+this.blockNodes.join("|")+")$").test(e.nodeName.toLowerCase())},h.prototype.getNodeLength=function(e){switch((e=t(e)[0]).nodeType){case 7:case 10:return 0;case 3:case 8:return e.length;default:return e.childNodes.length}},h.prototype.dataURLtoBlob=function(e){var t,n,o,i,r,a,s,l,u,d,c;if(r=(a=window.Blob&&function(){try{return Boolean(new Blob)}catch(e){return e,!1}}())&&window.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return e,!1}}(),t=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,!((a||t)&&window.atob&&window.ArrayBuffer&&window.Uint8Array))return!1;for(i=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),n=new ArrayBuffer(i.length),l=new Uint8Array(n),s=u=0,c=i.length;0<=c?u<=c:u>=c;s=0<=c?++u:--u)l[s]=i.charCodeAt(s);return d=e.split(",")[0].split(":")[1].split(";")[0],a?new Blob([r?l:n],{type:d}):((o=new t).append(n),o.getBlob(d))},h.prototype.throttle=function(e,t){var n,o,i,r,a,s,l;return r=0,l=0,i=n=a=null,o=function(){return l=0,r=+new Date,a=e.apply(i,n),i=null,n=null},(s=function(){var e;return i=this,n=arguments,e=new Date-r,l||(e>=t?o():l=setTimeout(o,t-e)),a}).clear=function(){if(l)return clearTimeout(l),o()},s},h.prototype.formatHTML=function(t){var n,o,i,r,a,s,l,u;for(a=/<(\/?)(.+?)(\/?)>/g,l="",i=0,o=null,"  ",s=function(e,t){return new Array(t+1).join(e)};null!==(r=a.exec(t));)r.isBlockNode=e.inArray(r[2],this.blockNodes)>-1,r.isStartTag="/"!==r[1]&&"/"!==r[3],r.isEndTag="/"===r[1]||"/"===r[3],n=o?o.index+o[0].length:0,(u=t.substring(n,r.index)).length>0&&e.trim(u)&&(l+=u),r.isBlockNode&&r.isEndTag&&!r.isStartTag&&(i-=1),r.isBlockNode&&r.isStartTag&&(o&&o.isBlockNode&&o.isEndTag||(l+="\n"),l+=s("  ",i)),l+=r[0],r.isBlockNode&&r.isEndTag&&(l+="\n"),r.isBlockNode&&r.isStartTag&&(i+=1),o=r;return e.trim(l)},h});
//# sourceMappingURL=sourcemaps/Util.js.map
