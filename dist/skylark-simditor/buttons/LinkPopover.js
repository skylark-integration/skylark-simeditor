/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Popover"],function(t,e,n,i){var l=i.inherit({});return l.prototype.render=function(){var e,n;return e='<div class="link-settings">\n  <div class="settings-field">\n    <label>'+this._t("linkText")+'</label>\n    <input class="link-text" type="text"/>\n    <a class="btn-unlink" href="javascript:;" title="'+this._t("removeLink")+'"\n      tabindex="-1">\n      <span class="simditor-icon simditor-icon-unlink"></span>\n    </a>\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("linkUrl")+'</label>\n    <input class="link-url" type="text"/>\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("linkTarget")+'</label>\n    <select class="link-target">\n      <option value="_blank">'+this._t("openLinkInNewWindow")+' (_blank)</option>\n      <option value="_self">'+this._t("openLinkInCurrentWindow")+" (_self)</option>\n    </select>\n  </div>\n</div>",this.el.addClass("link-popover").append(e),this.textEl=this.el.find(".link-text"),this.urlEl=this.el.find(".link-url"),this.unlinkEl=this.el.find(".btn-unlink"),this.selectTarget=this.el.find(".link-target"),this.textEl.on("keyup",(n=this,function(t){if(13!==t.which)return n.target.text(n.textEl.val()),n.editor.inputManager.throttledValueChanged()})),this.urlEl.on("keyup",function(t){return function(e){var n;if(13!==e.which)return n=t.urlEl.val(),!/^(http|https|ftp|ftps|file)?:\/\/|^(mailto|tel)?:|^\//gi.test(n)&&n&&(n="http://"+n),t.target.attr("href",n),t.editor.inputManager.throttledValueChanged()}}(this)),t([this.urlEl[0],this.textEl[0]]).on("keydown",function(e){return function(n){var i;if(13===n.which||27===n.which||!n.shiftKey&&9===n.which&&t(n.target).hasClass("link-url"))return n.preventDefault(),i=document.createRange(),e.editor.selection.setRangeAfter(e.target,i),e.hide(),e.editor.inputManager.throttledValueChanged()}}(this)),this.unlinkEl.on("click",function(t){return function(e){var n,i;return i=document.createTextNode(t.target.text()),t.target.replaceWith(i),t.hide(),n=document.createRange(),t.editor.selection.setRangeAfter(i,n),t.editor.inputManager.throttledValueChanged()}}(this)),this.selectTarget.on("change",function(t){return function(e){return t.target.attr("target",t.selectTarget.val()),t.editor.inputManager.throttledValueChanged()}}(this))},l.prototype.show=function(){var t;return t=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],i.prototype.show.apply(this,t),this.textEl.val(this.target.text()),this.urlEl.val(this.target.attr("href"))},l});
//# sourceMappingURL=../sourcemaps/buttons/LinkPopover.js.map
