/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(t,e,r,o,i,n){var u=n.inherit({});return u.prototype.name="underline",u.prototype.icon="underline",u.prototype.htmlTag="u",u.prototype.disableTag="pre",u.prototype.shortcut="cmd+u",u.prototype.render=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + u )":(this.title=this.title+" ( Ctrl + u )",this.shortcut="ctrl+u"),n.prototype.render.call(this)},u.prototype._activeStatus=function(){var t;return t=!0===document.queryCommandState("underline"),this.setActive(t),this.active},u.prototype.command=function(){return document.execCommand("underline"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),t(document).trigger("selectionchange")},i.Toolbar.addButton(u),u});
//# sourceMappingURL=../sourcemaps/buttons/UnderlineButton.js.map
