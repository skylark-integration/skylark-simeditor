/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,o,e,r){var i=r.inherit({});return i.prototype.name="blockquote",i.prototype.icon="quote-left",i.prototype.htmlTag="blockquote",i.prototype.disableTag="pre, table",i.prototype.command=function(){return this.editor.editable.blockquote(this.htmlTag,this.disableTag)},e.Toolbar.addButton(i),i});
//# sourceMappingURL=../sourcemaps/buttons/BlockquoteButton.js.map
