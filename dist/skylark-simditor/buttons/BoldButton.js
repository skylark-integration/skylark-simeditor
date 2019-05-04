/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,o,e,i){var r=i.inherit({});return r.prototype.name="bold",r.prototype.icon="bold",r.prototype.htmlTag="b, strong",r.prototype.disableTag="pre",r.prototype.shortcut="cmd+b",r.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + b )":(this.title=this.title+" ( Ctrl + b )",this.shortcut="ctrl+b"),i.prototype._init.call(this)},r.prototype._activeStatus=function(){var t;return t=!0===document.queryCommandState("bold"),this.setActive(t),this.active},r.prototype.command=function(){return document.execCommand("bold"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),t(document).trigger("selectionchange")},e.Toolbar.addButton(r),r});
//# sourceMappingURL=../sourcemaps/buttons/BoldButton.js.map
