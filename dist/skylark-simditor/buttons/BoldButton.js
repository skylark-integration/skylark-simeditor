/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(t,o,e,i,r,n){var u=n.inherit({});return u.prototype.name="bold",u.prototype.icon="bold",u.prototype.htmlTag="b, strong",u.prototype.disableTag="pre",u.prototype.shortcut="cmd+b",u.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + b )":(this.title=this.title+" ( Ctrl + b )",this.shortcut="ctrl+b"),n.prototype._init.call(this)},u.prototype._activeStatus=function(){var t;return t=!0===document.queryCommandState("bold"),this.setActive(t),this.active},u.prototype.command=function(){return document.execCommand("bold"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),t(document).trigger("selectionchange")},r.Toolbar.addButton(u),u});
//# sourceMappingURL=../sourcemaps/buttons/BoldButton.js.map
