/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","./ListButton"],function(t,o,i,r){var e=r.inherit({});return e.prototype.type="ol",e.prototype.name="ol",e.prototype.icon="list-ol",e.prototype.htmlTag="ol",e.prototype.shortcut="cmd+/",e.prototype._init=function(){return this.editor.editable.util.os.mac?this.title=this.title+" ( Cmd + / )":(this.title=this.title+" ( ctrl + / )",this.shortcut="ctrl+/"),r.prototype._init.call(this)},i.Toolbar.addButton(e),e});
//# sourceMappingURL=../sourcemaps/buttons/OrderListButton.js.map
