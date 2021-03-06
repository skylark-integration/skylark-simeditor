/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,o,i,n){var e=n.inherit({});return e.prototype.name="outdent",e.prototype.icon="outdent",e.prototype._init=function(){var t;return t=!1===this.editor.opts.tabIndent?"":" (Shift + Tab)",this.title=this._t(this.name)+t,n.prototype._init.call(this)},e.prototype._status=function(){},e.prototype.command=function(){return this.editor.editable.outdent()},i.Toolbar.addButton(e),e});
//# sourceMappingURL=../sourcemaps/buttons/OutdentButton.js.map
