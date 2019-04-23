/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(t,e,o,r,i,n){var a=n.inherit({});return a.prototype.name="blockquote",a.prototype.icon="quote-left",a.prototype.htmlTag="blockquote",a.prototype.disableTag="pre, table",a.prototype.command=function(){var e,o,r,i;return e=(e=this.editor.selection.rootNodes()).filter(function(e,o){return!t(o).parent().is("blockquote")}),this.editor.selection.save(),r=[],i=this,o=function(){if(r.length>0)return t("<"+i.htmlTag+"/>").insertBefore(r[0]).append(r),r.length=0},e.each(function(e){return function(i,n){var a;if((a=t(n)).parent().is(e.editor.body))return a.is(e.htmlTag)?(o(),a.children().unwrap()):a.is(e.disableTag)||e.editor.util.isDecoratedNode(a)?o():r.push(n)}}(this)),o(),this.editor.selection.restore(),this.editor.trigger("valuechanged")},i.Toolbar.addButton(a),a});
//# sourceMappingURL=../sourcemaps/buttons/BlockquoteButton.js.map
