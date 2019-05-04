/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button","./LinkPopover"],function(t,e,o,r,n){var i=r.inherit({});return i.prototype.name="link",i.prototype.icon="link",i.prototype.htmlTag="a",i.prototype.disableTag="pre",i.prototype.render=function(){var t;return t=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],r.prototype.render.apply(this,t),this.popover=new n({button:this})},i.prototype._status=function(){return r.prototype._status.call(this),this.active&&!this.editor.selection.rangeAtEndOf(this.node)?this.popover.show(this.node):this.popover.hide()},i.prototype.command=function(){var e,o,r,n,i,s,p;return i=this.editor.selection.range(),this.active?(s=document.createTextNode(this.node.text()),this.node.replaceWith(s),i.selectNode(s)):(e=t(i.extractContents()),n=this.editor.formatter.clearHtml(e.contents(),!1),o=t("<a/>",{href:"",target:"_blank",text:n||this._t("linkText")}),this.editor.selection.blockNodes().length>0?i.insertNode(o[0]):(r=t("<p/>").append(o),i.insertNode(r[0])),i.selectNodeContents(o[0]),this.popover.one("popovershow",(p=this,function(){return n?(p.popover.urlEl.focus(),p.popover.urlEl[0].select()):(p.popover.textEl.focus(),p.popover.textEl[0].select())}))),this.editor.selection.range(i),this.editor.trigger("valuechanged")},o.Toolbar.addButton(i),i});
//# sourceMappingURL=../sourcemaps/buttons/LinkButton.js.map
