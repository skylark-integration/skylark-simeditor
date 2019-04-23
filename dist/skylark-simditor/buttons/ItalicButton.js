/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(t,i,e,o,r,n){var a=n.inherit({});return a.prototype.name="italic",a.prototype.icon="italic",a.prototype.htmlTag="i",a.prototype.disableTag="pre",a.prototype.shortcut="cmd+i",a.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + i )":(this.title=this.title+" ( Ctrl + i )",this.shortcut="ctrl+i"),n.prototype._init.call(this)},a.prototype._activeStatus=function(){var t;return t=!0===document.queryCommandState("italic"),this.setActive(t),this.active},a.prototype.command=function(){return document.execCommand("italic"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),t(document).trigger("selectionchange")},r.Toolbar.addButton(a),a});
//# sourceMappingURL=../sourcemaps/buttons/ItalicButton.js.map
