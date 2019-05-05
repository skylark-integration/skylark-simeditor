/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/noder","skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(e,t,i,l,r){var o=r.inherit({});return o.prototype.type="",o.prototype.disableTag="pre, table",o.prototype.command=function(i){var l,r,o,n;return r=this.editor.editable.selection.blockNodes(),o="ul"===this.type?"ol":"ul",this.editor.editable.selection.save(),l=null,r.each((n=this,function(i,r){var d;if(!((d=t(r)).is("blockquote, li")||d.is(n.disableTag)||n.editor.editable.util.isDecoratedNode(d))&&e.contains(document,r))return d.is(n.type)?(d.children("li").each(function(e,i){return t(i).children("ul, ol").insertAfter(d),t("<p/>").append(t(i).html()||n.editor.editable.util.phBr).insertBefore(d)}),d.remove()):d.is(o)?t("<"+n.type+"/>").append(d.contents()).replaceAll(d):l&&d.prev().is(l)?(t("<li/>").append(d.html()||n.editor.editable.util.phBr).appendTo(l),d.remove()):((l=t("<"+n.type+"><li></li></"+n.type+">")).find("li").append(d.html()||n.editor.editable.util.phBr),l.replaceAll(d))})),this.editor.editable.selection.restore(),this.editor.trigger("valuechanged")},o});
//# sourceMappingURL=../sourcemaps/buttons/ListButton.js.map
