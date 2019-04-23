/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","../Button"],function(o,t,e,r,n,l){var a=l.inherit({});return a.prototype.name="color",a.prototype.icon="tint",a.prototype.disableTag="pre",a.prototype.menu=!0,a.prototype.render=function(){var o;return o=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],l.prototype.render.apply(this,o)},a.prototype.renderMenu=function(){return o('<ul class="color-list">\n  <li><a href="javascript:;" class="font-color font-color-1"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-2"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-3"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-4"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-5"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-6"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-7"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-default"></a></li>\n</ul>').appendTo(this.menuWrapper),this.menuWrapper.on("mousedown",".color-list",function(o){return!1}),this.menuWrapper.on("click",".font-color",(t=this,function(e){var r,n,l,a,c,i;if(t.wrapper.removeClass("menu-on"),(r=o(e.currentTarget)).hasClass("font-color-default")){if(!((n=t.editor.body.find("p, li")).length>0))return;c=window.getComputedStyle(n[0],null).getPropertyValue("color"),l=t._convertRgbToHex(c)}else c=window.getComputedStyle(r[0],null).getPropertyValue("background-color"),l=t._convertRgbToHex(c);if(l)return a=t.editor.selection.range(),!r.hasClass("font-color-default")&&a.collapsed&&(i=document.createTextNode(t._t("coloredText")),a.insertNode(i),a.selectNodeContents(i)),t.editor.selection.range(a),document.execCommand("styleWithCSS",!1,!0),document.execCommand("foreColor",!1,l),document.execCommand("styleWithCSS",!1,!1),t.editor.util.support.oninput?void 0:t.editor.trigger("valuechanged")}));var t},a.prototype._convertRgbToHex=function(o){var t;return(t=/rgb\((\d+),\s?(\d+),\s?(\d+)\)/g.exec(o))?function(o,t,e){var r;return"#"+(r=function(o){var t;return 1===(t=o.toString(16)).length?"0"+t:t})(o)+r(t)+r(e)}(1*t[1],1*t[2],1*t[3]):""},n.Toolbar.addButton(a),a});
//# sourceMappingURL=../sourcemaps/buttons/ColorButton.js.map