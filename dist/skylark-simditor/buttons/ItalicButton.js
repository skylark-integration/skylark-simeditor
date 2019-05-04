/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,i,o,e){var r=e.inherit({});return r.prototype.name="italic",r.prototype.icon="italic",r.prototype.htmlTag="i",r.prototype.disableTag="pre",r.prototype.shortcut="cmd+i",r.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + i )":(this.title=this.title+" ( Ctrl + i )",this.shortcut="ctrl+i"),e.prototype._init.call(this)},r.prototype._activeStatus=function(){var t;return t=!0===document.queryCommandState("italic"),this.setActive(t),this.active},r.prototype.command=function(){return document.execCommand("italic"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),t(document).trigger("selectionchange")},o.Toolbar.addButton(r),r});
//# sourceMappingURL=../sourcemaps/buttons/ItalicButton.js.map
