/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,e,r,o){var i=o.inherit({});return i.prototype.name="underline",i.prototype.icon="underline",i.prototype.htmlTag="u",i.prototype.disableTag="pre",i.prototype.shortcut="cmd+u",i.prototype.render=function(){return this.editor.editable.util.os.mac?this.title=this.title+" ( Cmd + u )":(this.title=this.title+" ( Ctrl + u )",this.shortcut="ctrl+u"),o.prototype.render.call(this)},i.prototype._activeStatus=function(){var t;return t=!0===document.queryCommandState("underline"),this.setActive(t),this.active},i.prototype.command=function(){return document.execCommand("underline"),this.editor.editable.util.support.oninput||this.editor.trigger("valuechanged"),t(document).trigger("selectionchange")},r.Toolbar.addButton(i),i});
//# sourceMappingURL=../sourcemaps/buttons/UnderlineButton.js.map
