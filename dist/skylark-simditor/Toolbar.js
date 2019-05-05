/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/query"],function(t,o){var r=t.Evented.inherit({init:function(r,i){var e,s,n,l;(this.editor=r,this.opts=t.extend({},this.opts,i),this.opts.toolbar)&&(t.isArray(this.opts.toolbar)||(this.opts.toolbar=["bold","italic","underline","strikethrough","|","ol","ul","blockquote","code","|","link","image","|","indent","outdent"]),this._render(),this.list.on("click",function(t){return!1}),this.wrapper.on("mousedown",(l=this,function(t){return l.list.find(".menu-on").removeClass(".menu-on")})),o(document).on("mousedown.simditor"+this.editor.id,function(t){return function(o){return t.list.find(".menu-on").removeClass(".menu-on")}}(this)),!this.opts.toolbarHidden&&this.opts.toolbarFloat&&(this.wrapper.css("top",this.opts.toolbarFloatOffset),n=0,s=function(t){return function(){return t.wrapper.css("position","static"),t.wrapper.width("auto"),t.editor.editable.util.reflow(t.wrapper),t.wrapper.width(t.wrapper.outerWidth()),t.wrapper.css("left",t.editor.editable.util.os.mobile?t.wrapper.position().left:t.wrapper.offset().left),t.wrapper.css("position",""),n=t.wrapper.outerHeight(),t.editor.placeholderEl.css("top",n),!0}}(this),e=null,o(window).on("resize.simditor-"+this.editor.id,function(t){return e=s()}),o(window).on("scroll.simditor-"+this.editor.id,function(t){return function(r){var i,l,p;if(t.wrapper.is(":visible"))if(i=(p=t.editor.wrapper.offset().top)+t.editor.wrapper.outerHeight()-80,(l=o(document).scrollTop()+t.opts.toolbarFloatOffset)<=p||l>=i){if(t.editor.wrapper.removeClass("toolbar-floating").css("padding-top",""),t.editor.editable.util.os.mobile)return t.wrapper.css("top",t.opts.toolbarFloatOffset)}else if(e||(e=s()),t.editor.wrapper.addClass("toolbar-floating").css("padding-top",n),t.editor.editable.util.os.mobile)return t.wrapper.css("top",l-p+t.opts.toolbarFloatOffset)}}(this))),this.editor.on("destroy",function(t){return function(){return t.buttons.length=0}}(this)),o(document).on("mousedown.simditor-"+this.editor.id,function(t){return function(o){return t.list.find("li.menu-on").removeClass("menu-on")}}(this)))}});return r.pluginName="Toolbar",r.prototype.opts={toolbar:!0,toolbarFloat:!0,toolbarHidden:!1,toolbarFloatOffset:0},r.prototype._tpl={wrapper:'<div class="simditor-toolbar"><ul></ul></div>',separator:'<li><span class="separator"></span></li>'},r.prototype._render=function(){var t,r,i,e;for(this.buttons=[],this.wrapper=o(this._tpl.wrapper).prependTo(this.editor.wrapper),this.list=this.wrapper.find("ul"),t=0,r=(e=this.opts.toolbar).length;t<r;t++)if("|"!==(i=e[t])){if(!this.constructor.buttons[i])throw new Error("simditor: invalid toolbar button "+i);this.buttons.push(new this.constructor.buttons[i]({toolbar:this,editor:this.editor}))}else o(this._tpl.separator).appendTo(this.list);if(this.opts.toolbarHidden)return this.wrapper.hide()},r.prototype.findButton=function(t){var o;return null!=(o=this.list.find(".toolbar-item-"+t).data("button"))?o:null},r.addButton=function(t){return this.buttons[t.prototype.name]=t},r.buttons={},r});
//# sourceMappingURL=sourcemaps/Toolbar.js.map
