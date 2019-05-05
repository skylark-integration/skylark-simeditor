/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/noder","skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,e,i,o,r){var a=r.inherit({});return a.prototype.type="",a.prototype.disableTag="pre, table",a.prototype.command=function(t){return this.editor.editable.list(this.type,t,this.disableTag)},a});
//# sourceMappingURL=../sourcemaps/buttons/ListButton.js.map
