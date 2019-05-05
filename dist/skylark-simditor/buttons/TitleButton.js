/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-utils-dom/query","../Toolbar","../Simditor","../Button","../i18n"],function(t,e,a,i,r){var o=i.inherit({});return o.prototype.name="title",o.prototype.htmlTag="h1, h2, h3, h4, h5",o.prototype.disableTag="pre, table",o.prototype._init=function(){return this.menu=[{name:"normal",text:r.translate("normalText"),param:"p"},"|",{name:"h1",text:r.translate("title")+" 1",param:"h1"},{name:"h2",text:r.translate("title")+" 2",param:"h2"},{name:"h3",text:r.translate("title")+" 3",param:"h3"},{name:"h4",text:r.translate("title")+" 4",param:"h4"},{name:"h5",text:r.translate("title")+" 5",param:"h5"}],i.prototype._init.call(this)},o.prototype.setActive=function(t,e){if(i.prototype.setActive.call(this,t),t&&(e||(e=this.node[0].tagName.toLowerCase())),this.el.removeClass("active-p active-h1 active-h2 active-h3 active-h4 active-h5"),t)return this.el.addClass("active active-"+e)},o.prototype.command=function(e){var a,i;return a=this.editor.editable.selection.rootNodes(),this.editor.editable.selection.save(),a.each((i=this,function(a,r){var o;if(!((o=t(r)).is("blockquote")||o.is(e)||o.is(i.disableTag)||i.editor.editable.util.isDecoratedNode(o)))return t("<"+e+"/>").append(o.contents()).replaceAll(o)})),this.editor.editable.selection.restore(),this.editor.trigger("valuechanged")},a.Toolbar.addButton(o),o});
//# sourceMappingURL=../sourcemaps/buttons/TitleButton.js.map
