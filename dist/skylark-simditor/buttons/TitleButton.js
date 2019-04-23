/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(t,e,i,a,o,r){var h=r.inherit({});return h.prototype.name="title",h.prototype.htmlTag="h1, h2, h3, h4, h5",h.prototype.disableTag="pre, table",h.prototype._init=function(){return this.menu=[{name:"normal",text:this._t("normalText"),param:"p"},"|",{name:"h1",text:this._t("title")+" 1",param:"h1"},{name:"h2",text:this._t("title")+" 2",param:"h2"},{name:"h3",text:this._t("title")+" 3",param:"h3"},{name:"h4",text:this._t("title")+" 4",param:"h4"},{name:"h5",text:this._t("title")+" 5",param:"h5"}],r.prototype._init.call(this)},h.prototype.setActive=function(t,e){if(r.prototype.setActive.call(this,t),t&&(e||(e=this.node[0].tagName.toLowerCase())),this.el.removeClass("active-p active-h1 active-h2 active-h3 active-h4 active-h5"),t)return this.el.addClass("active active-"+e)},h.prototype.command=function(e){var i,a;return i=this.editor.selection.rootNodes(),this.editor.selection.save(),i.each((a=this,function(i,o){var r;if(!((r=t(o)).is("blockquote")||r.is(e)||r.is(a.disableTag)||a.editor.util.isDecoratedNode(r)))return t("<"+e+"/>").append(r.contents()).replaceAll(r)})),this.editor.selection.restore(),this.editor.trigger("valuechanged")},o.Toolbar.addButton(h),h});
//# sourceMappingURL=../sourcemaps/buttons/TitleButton.js.map
