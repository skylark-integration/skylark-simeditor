/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button","./LinkPopover"],function(t,e,o,r,i){var n=r.inherit({});return n.prototype.name="link",n.prototype.icon="link",n.prototype.htmlTag="a",n.prototype.disableTag="pre",n.prototype.render=function(){var t;return t=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],r.prototype.render.apply(this,t),this.popover=new i({button:this})},n.prototype._status=function(){return r.prototype._status.call(this),this.active&&!this.editor.editable.selection.rangeAtEndOf(this.node)?this.popover.show(this.node):this.popover.hide()},n.prototype.command=function(){var e,o,r,i,n,s,p;return n=this.editor.editable.selection.range(),this.active?(s=document.createTextNode(this.node.text()),this.node.replaceWith(s),n.selectNode(s)):(e=t(n.extractContents()),i=this.editor.editable.formatter.clearHtml(e.contents(),!1),o=t("<a/>",{href:"",target:"_blank",text:i||this._t("linkText")}),this.editor.editable.selection.blockNodes().length>0?n.insertNode(o[0]):(r=t("<p/>").append(o),n.insertNode(r[0])),n.selectNodeContents(o[0]),this.popover.one("popovershow",(p=this,function(){return i?(p.popover.urlEl.focus(),p.popover.urlEl[0].select()):(p.popover.textEl.focus(),p.popover.textEl[0].select())}))),this.editor.editable.selection.range(n),this.editor.trigger("valuechanged")},o.Toolbar.addButton(n),n});
//# sourceMappingURL=../sourcemaps/buttons/LinkButton.js.map
