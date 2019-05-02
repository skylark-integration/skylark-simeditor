/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button","../i18n"],function(t,e,a,i,r,o,n){var l=o.inherit({});return l.prototype.name="title",l.prototype.htmlTag="h1, h2, h3, h4, h5",l.prototype.disableTag="pre, table",l.prototype._init=function(){return this.menu=[{name:"normal",text:n.translate("normalText"),param:"p"},"|",{name:"h1",text:n.translate("title")+" 1",param:"h1"},{name:"h2",text:n.translate("title")+" 2",param:"h2"},{name:"h3",text:n.translate("title")+" 3",param:"h3"},{name:"h4",text:n.translate("title")+" 4",param:"h4"},{name:"h5",text:n.translate("title")+" 5",param:"h5"}],o.prototype._init.call(this)},l.prototype.setActive=function(t,e){if(o.prototype.setActive.call(this,t),t&&(e||(e=this.node[0].tagName.toLowerCase())),this.el.removeClass("active-p active-h1 active-h2 active-h3 active-h4 active-h5"),t)return this.el.addClass("active active-"+e)},l.prototype.command=function(e){var a,i;return a=this.editor.selection.rootNodes(),this.editor.selection.save(),a.each((i=this,function(a,r){var o;if(!((o=t(r)).is("blockquote")||o.is(e)||o.is(i.disableTag)||i.editor.util.isDecoratedNode(o)))return t("<"+e+"/>").append(o.contents()).replaceAll(o)})),this.editor.selection.restore(),this.editor.trigger("valuechanged")},r.Toolbar.addButton(l),l});
//# sourceMappingURL=../sourcemaps/buttons/TitleButton.js.map
