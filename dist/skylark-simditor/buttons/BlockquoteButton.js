/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,e,o,i){var r=i.inherit({});return r.prototype.name="blockquote",r.prototype.icon="quote-left",r.prototype.htmlTag="blockquote",r.prototype.disableTag="pre, table",r.prototype.command=function(){var e,o,i,r;return e=(e=this.editor.editable.selection.rootNodes()).filter(function(e,o){return!t(o).parent().is("blockquote")}),this.editor.editable.selection.save(),i=[],r=this,o=function(){if(i.length>0)return t("<"+r.htmlTag+"/>").insertBefore(i[0]).append(i),i.length=0},e.each(function(e){return function(r,n){var a;if((a=t(n)).parent().is(e.editor.body))return a.is(e.htmlTag)?(o(),a.children().unwrap()):a.is(e.disableTag)||e.editor.editable.util.isDecoratedNode(a)?o():i.push(n)}}(this)),o(),this.editor.editable.selection.restore(),this.editor.trigger("valuechanged")},o.Toolbar.addButton(r),r});
//# sourceMappingURL=../sourcemaps/buttons/BlockquoteButton.js.map
