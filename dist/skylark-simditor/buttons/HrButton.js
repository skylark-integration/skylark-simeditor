/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(t,e,r,o,i,n){var s=n.inherit({});return s.prototype.name="hr",s.prototype.icon="minus",s.prototype.htmlTag="hr",s.prototype._status=function(){},s.prototype.command=function(){var e,r,o;return(o=this.editor.selection.rootNodes().first()).next().length>0?this.editor.selection.save():r=t("<p/>").append(this.editor.util.phBr),e=t("<hr/>").insertAfter(o),r?(r.insertAfter(e),this.editor.selection.setRangeAtStartOf(r)):this.editor.selection.restore(),this.editor.trigger("valuechanged")},i.Toolbar.addButton(s),s});
//# sourceMappingURL=../sourcemaps/buttons/HrButton.js.map
