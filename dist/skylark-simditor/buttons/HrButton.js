/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../Toolbar","../Simditor","../Button"],function(t,e,r,o){var i=o.inherit({});return i.prototype.name="hr",i.prototype.icon="minus",i.prototype.htmlTag="hr",i.prototype._status=function(){},i.prototype.command=function(){var e,r,o;return(o=this.editor.selection.rootNodes().first()).next().length>0?this.editor.selection.save():r=t("<p/>").append(this.editor.util.phBr),e=t("<hr/>").insertAfter(o),r?(r.insertAfter(e),this.editor.selection.setRangeAtStartOf(r)):this.editor.selection.restore(),this.editor.trigger("valuechanged")},r.Toolbar.addButton(i),i});
//# sourceMappingURL=../sourcemaps/buttons/HrButton.js.map
