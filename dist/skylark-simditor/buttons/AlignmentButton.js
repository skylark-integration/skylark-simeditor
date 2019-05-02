/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../Toolbar","../Simditor","../Button"],function(t,e,i,n){var r=n.inherit({});return r.prototype.name="alignment",r.prototype.icon="align-left",r.prototype.htmlTag="p, h1, h2, h3, h4, td, th",r.prototype._init=function(){return this.menu=[{name:"left",text:this._t("alignLeft"),icon:"align-left",param:"left"},{name:"center",text:this._t("alignCenter"),icon:"align-center",param:"center"},{name:"right",text:this._t("alignRight"),icon:"align-right",param:"right"}],n.prototype._init.call(this)},r.prototype.setActive=function(t,e){return null==e&&(e="left"),"left"!==e&&"center"!==e&&"right"!==e&&(e="left"),"left"===e?n.prototype.setActive.call(this,!1):n.prototype.setActive.call(this,t),this.el.removeClass("align-left align-center align-right"),t&&this.el.addClass("align-"+e),this.setIcon("align-"+e),this.menuEl.find(".menu-item").show().end().find(".menu-item-"+e).hide()},r.prototype._status=function(){return this.nodes=this.editor.selection.nodes().filter(this.htmlTag),this.nodes.length<1?(this.setDisabled(!0),this.setActive(!1)):(this.setDisabled(!1),this.setActive(!0,this.nodes.first().css("text-align")))},r.prototype.command=function(t){if("left"!==t&&"center"!==t&&"right"!==t)throw new Error("simditor alignment button: invalid align "+t);return this.nodes.css({"text-align":"left"===t?"":t}),this.editor.trigger("valuechanged"),this.editor.inputManager.throttledSelectionChanged()},i.Toolbar.addButton(r),r});
//# sourceMappingURL=../sourcemaps/buttons/AlignmentButton.js.map
