/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(t,e,o,r,i,n){var u=n.inherit({});return u.prototype.name="strikethrough",u.prototype.icon="strikethrough",u.prototype.htmlTag="strike",u.prototype.disableTag="pre",u.prototype._activeStatus=function(){var t;return t=!0===document.queryCommandState("strikethrough"),this.setActive(t),this.active},u.prototype.command=function(){return document.execCommand("strikethrough"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),t(document).trigger("selectionchange")},i.Toolbar.addButton(u),u});
//# sourceMappingURL=../sourcemaps/buttons/StrikethroughButton.js.map
