/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","./ListButton"],function(t,i,o,r){var e=r.inherit({});return e.prototype.type="ul",e.prototype.name="ul",e.prototype.icon="list-ul",e.prototype.htmlTag="ul",e.prototype.shortcut="cmd+.",e.prototype._init=function(){return this.editor.editable.util.os.mac?this.title=this.title+" ( Cmd + . )":(this.title=this.title+" ( Ctrl + . )",this.shortcut="ctrl+."),r.prototype._init.call(this)},o.Toolbar.addButton(e),e});
//# sourceMappingURL=../sourcemaps/buttons/UnorderListButton.js.map
