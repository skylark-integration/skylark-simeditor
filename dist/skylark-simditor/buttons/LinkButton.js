/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button","./LinkPopover"],function(t,e,o,r,n,i,p){var s=i.inherit({});return s.prototype.name="link",s.prototype.icon="link",s.prototype.htmlTag="a",s.prototype.disableTag="pre",s.prototype.render=function(){var t;return t=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],i.prototype.render.apply(this,t),this.popover=new p({button:this})},s.prototype._status=function(){return i.prototype._status.call(this),this.active&&!this.editor.selection.rangeAtEndOf(this.node)?this.popover.show(this.node):this.popover.hide()},s.prototype.command=function(){var e,o,r,n,i,p,s;return i=this.editor.selection.range(),this.active?(p=document.createTextNode(this.node.text()),this.node.replaceWith(p),i.selectNode(p)):(e=t(i.extractContents()),n=this.editor.formatter.clearHtml(e.contents(),!1),o=t("<a/>",{href:"",target:"_blank",text:n||this._t("linkText")}),this.editor.selection.blockNodes().length>0?i.insertNode(o[0]):(r=t("<p/>").append(o),i.insertNode(r[0])),i.selectNodeContents(o[0]),this.popover.one("popovershow",(s=this,function(){return n?(s.popover.urlEl.focus(),s.popover.urlEl[0].select()):(s.popover.textEl.focus(),s.popover.textEl[0].select())}))),this.editor.selection.range(i),this.editor.trigger("valuechanged")},n.Toolbar.addButton(s),s});
//# sourceMappingURL=../sourcemaps/buttons/LinkButton.js.map
