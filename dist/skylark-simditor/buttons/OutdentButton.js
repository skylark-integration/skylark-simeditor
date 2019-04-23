/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(t,o,n,i,e,r){var a=r.inherit({});return a.prototype.name="outdent",a.prototype.icon="outdent",a.prototype._init=function(){var t;return t=!1===this.editor.opts.tabIndent?"":" (Shift + Tab)",this.title=this._t(this.name)+t,r.prototype._init.call(this)},a.prototype._status=function(){},a.prototype.command=function(){return this.editor.indentation.indent(!0)},e.Toolbar.addButton(a),a});
//# sourceMappingURL=../sourcemaps/buttons/OutdentButton.js.map
