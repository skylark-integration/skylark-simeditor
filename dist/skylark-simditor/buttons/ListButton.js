/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/noder","skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(e,t,i,r,o){var l=o.inherit({});return l.prototype.type="",l.prototype.disableTag="pre, table",l.prototype.command=function(i){var r,o,l,n;return o=this.editor.selection.blockNodes(),l="ul"===this.type?"ol":"ul",this.editor.selection.save(),r=null,o.each((n=this,function(i,o){var p;if(!((p=t(o)).is("blockquote, li")||p.is(n.disableTag)||n.editor.util.isDecoratedNode(p))&&e.contains(document,o))return p.is(n.type)?(p.children("li").each(function(e,i){return t(i).children("ul, ol").insertAfter(p),t("<p/>").append(t(i).html()||n.editor.util.phBr).insertBefore(p)}),p.remove()):p.is(l)?t("<"+n.type+"/>").append(p.contents()).replaceAll(p):r&&p.prev().is(r)?(t("<li/>").append(p.html()||n.editor.util.phBr).appendTo(r),p.remove()):((r=t("<"+n.type+"><li></li></"+n.type+">")).find("li").append(p.html()||n.editor.util.phBr),r.replaceAll(p))})),this.editor.selection.restore(),this.editor.trigger("valuechanged")},l});
//# sourceMappingURL=../sourcemaps/buttons/ListButton.js.map
