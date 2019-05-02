/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../Toolbar","../Simditor","../Button"],function(e,t,i,r){var o=r.inherit({});return o.prototype.type="",o.prototype.disableTag="pre, table",o.prototype.command=function(t){var i,r,o,l;return r=this.editor.selection.blockNodes(),o="ul"===this.type?"ol":"ul",this.editor.selection.save(),i=null,r.each((l=this,function(t,r){var n;if(!((n=e(r)).is("blockquote, li")||n.is(l.disableTag)||l.editor.util.isDecoratedNode(n))&&e.contains(document,r))return n.is(l.type)?(n.children("li").each(function(t,i){return e(i).children("ul, ol").insertAfter(n),e("<p/>").append(e(i).html()||l.editor.util.phBr).insertBefore(n)}),n.remove()):n.is(o)?e("<"+l.type+"/>").append(n.contents()).replaceAll(n):i&&n.prev().is(i)?(e("<li/>").append(n.html()||l.editor.util.phBr).appendTo(i),n.remove()):((i=e("<"+l.type+"><li></li></"+l.type+">")).find("li").append(n.html()||l.editor.util.phBr),i.replaceAll(n))})),this.editor.selection.restore(),this.editor.trigger("valuechanged")},o});
//# sourceMappingURL=../sourcemaps/buttons/ListButton.js.map
