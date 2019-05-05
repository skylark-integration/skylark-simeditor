/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button"],function(t,e,r,i){var o=i.inherit({});return o.prototype.name="hr",o.prototype.icon="minus",o.prototype.htmlTag="hr",o.prototype._status=function(){},o.prototype.command=function(){var e,r,i;return(i=this.editor.editable.selection.rootNodes().first()).next().length>0?this.editor.editable.selection.save():r=t("<p/>").append(this.editor.editable.util.phBr),e=t("<hr/>").insertAfter(i),r?(r.insertAfter(e),this.editor.editable.selection.setRangeAtStartOf(r)):this.editor.editable.selection.restore(),this.editor.trigger("valuechanged")},r.Toolbar.addButton(o),o});
//# sourceMappingURL=../sourcemaps/buttons/HrButton.js.map
