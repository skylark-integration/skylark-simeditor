/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","./_extend","./Module"],function(e,t,n){var o,i,r,s,a,l,u,d,c,p,h,f,g=n.inherit({});return g.pluginName="Util",g.prototype._init=function(){if(this.editor=this._module,this.browser.msie&&this.browser.version<11)return this.phBr=""},g.prototype.phBr="<br/>",g.prototype.os=(o={},/Mac/.test(navigator.appVersion)?o.mac=!0:/Linux/.test(navigator.appVersion)?o.linux=!0:/Win/.test(navigator.appVersion)?o.win=!0:/X11/.test(navigator.appVersion)&&(o.unix=!0),/Mobi/.test(navigator.appVersion)&&(o.mobile=!0),o),g.prototype.browser=(f=navigator.userAgent,a=/(msie|trident)/i.test(f),i=/chrome|crios/i.test(f),h=/safari/i.test(f)&&!i,s=/firefox/i.test(f),r=/edge/i.test(f),a?{msie:!0,version:1*(null!=(l=f.match(/(msie |rv:)(\d+(\.\d+)?)/i))?l[2]:void 0)}:r?{edge:!0,webkit:!0,version:1*(null!=(u=f.match(/edge\/(\d+(\.\d+)?)/i))?u[1]:void 0)}:i?{webkit:!0,chrome:!0,version:1*(null!=(d=f.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i))?d[1]:void 0)}:h?{webkit:!0,safari:!0,version:1*(null!=(c=f.match(/version\/(\d+(\.\d+)?)/i))?c[1]:void 0)}:s?{mozilla:!0,firefox:!0,version:1*(null!=(p=f.match(/firefox\/(\d+(\.\d+)?)/i))?p[1]:void 0)}:{}),g.prototype.support={onselectionchange:function(){var e;if(void 0!==(e=document.onselectionchange))try{return document.onselectionchange=0,null===document.onselectionchange}catch(e){}finally{document.onselectionchange=e}return!1}(),oninput:!/(msie|trident)/i.test(navigator.userAgent)},g.prototype.reflow=function(t){return null==t&&(t=document),e(t)[0].offsetHeight},g.prototype.metaKey=function(e){return/Mac/.test(navigator.userAgent)?e.metaKey:e.ctrlKey},g.prototype.isEmptyNode=function(t){var n;return(n=e(t)).is(":empty")||!n.text()&&!n.find(":not(br, span, div)").length},g.prototype.isDecoratedNode=function(t){return e(t).is('[class^="simditor-"]')},g.prototype.blockNodes=["div","p","ul","ol","li","blockquote","hr","pre","h1","h2","h3","h4","h5","table"],g.prototype.isBlockNode=function(t){return!(!(t=e(t)[0])||3===t.nodeType)&&new RegExp("^("+this.blockNodes.join("|")+")$").test(t.nodeName.toLowerCase())},g.prototype.getNodeLength=function(t){switch((t=e(t)[0]).nodeType){case 7:case 10:return 0;case 3:case 8:return t.length;default:return t.childNodes.length}},g.prototype.dataURLtoBlob=function(e){var t,n,o,i,r,s,a,l,u,d,c;if(r=(s=window.Blob&&function(){try{return Boolean(new Blob)}catch(e){return e,!1}}())&&window.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return e,!1}}(),t=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,!((s||t)&&window.atob&&window.ArrayBuffer&&window.Uint8Array))return!1;for(i=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),n=new ArrayBuffer(i.length),l=new Uint8Array(n),a=u=0,c=i.length;0<=c?u<=c:u>=c;a=0<=c?++u:--u)l[a]=i.charCodeAt(a);return d=e.split(",")[0].split(":")[1].split(";")[0],s?new Blob([r?l:n],{type:d}):((o=new t).append(n),o.getBlob(d))},g.prototype.throttle=function(e,t){var n,o,i,r,s,a,l;return r=0,l=0,i=n=s=null,o=function(){return l=0,r=+new Date,s=e.apply(i,n),i=null,n=null},(a=function(){var e;return i=this,n=arguments,e=new Date-r,l||(e>=t?o():l=setTimeout(o,t-e)),s}).clear=function(){if(l)return clearTimeout(l),o()},a},g.prototype.formatHTML=function(t){var n,o,i,r,s,a,l,u;for(s=/<(\/?)(.+?)(\/?)>/g,l="",i=0,o=null,"  ",a=function(e,t){return new Array(t+1).join(e)};null!==(r=s.exec(t));)r.isBlockNode=e.inArray(r[2],this.blockNodes)>-1,r.isStartTag="/"!==r[1]&&"/"!==r[3],r.isEndTag="/"===r[1]||"/"===r[3],n=o?o.index+o[0].length:0,(u=t.substring(n,r.index)).length>0&&e.trim(u)&&(l+=u),r.isBlockNode&&r.isEndTag&&!r.isStartTag&&(i-=1),r.isBlockNode&&r.isStartTag&&(o&&o.isBlockNode&&o.isEndTag||(l+="\n"),l+=a("  ",i)),l+=r[0],r.isBlockNode&&r.isEndTag&&(l+="\n"),r.isBlockNode&&r.isStartTag&&(i+=1),o=r;return e.trim(l)},g});
//# sourceMappingURL=sourcemaps/Util.js.map