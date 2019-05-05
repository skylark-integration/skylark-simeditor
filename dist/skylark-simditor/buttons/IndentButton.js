/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,n,i,o){var e=o.inherit({});return e.prototype.name="indent",e.prototype.icon="indent",e.prototype._init=function(){var t;return t=!1===this.editor.opts.tabIndent?"":" (Tab)",this.title=this._t(this.name)+t,o.prototype._init.call(this)},e.prototype._status=function(){},e.prototype.command=function(){return this.editor.editable.indentation.indent()},i.Toolbar.addButton(e),e});
//# sourceMappingURL=../sourcemaps/buttons/IndentButton.js.map
