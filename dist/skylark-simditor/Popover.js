/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-jquery","./Simditor","./i18n"],function(t,e,i,o){var r=t.Evented.inherit({init:function(t){this.button=t.button,this.editor=t.button.editor,this._init()}});return r.prototype.offset={top:4,left:0},r.prototype.target=null,r.prototype.active=!1,r.prototype._init=function(){var t;return this.el=e('<div class="simditor-popover"></div>').appendTo(this.editor.el).data("popover",this),this.render(),this.el.on("mouseenter",(t=this,function(e){return t.el.addClass("hover")})),this.el.on("mouseleave",function(t){return function(e){return t.el.removeClass("hover")}}(this))},r.prototype.render=function(){},r.prototype._initLabelWidth=function(){var t,i;if((t=this.el.find(".settings-field")).length>0)return this._labelWidth=0,t.each((i=this,function(t,o){var r;if((r=e(o).find("label")).length>0)return i._labelWidth=Math.max(i._labelWidth,r.width())})),t.find("label").width(this._labelWidth)},r.prototype.show=function(t,i){if(null==i&&(i="bottom"),null!=t)return this.el.siblings(".simditor-popover").each(function(t,i){if((i=e(i).data("popover")).active)return i.hide()}),this.active&&this.target&&this.target.removeClass("selected"),this.target=t.addClass("selected"),this.active?(this.refresh(i),this.trigger("popovershow")):(this.active=!0,this.el.css({left:-9999}).show(),this._labelWidth||this._initLabelWidth(),this.editor.util.reflow(),this.refresh(i),this.trigger("popovershow"))},r.prototype.hide=function(){if(this.active)return this.target&&this.target.removeClass("selected"),this.target=null,this.active=!1,this.el.hide(),this.trigger("popoverhide")},r.prototype.refresh=function(t){var e,i,o,r,s,h;if(null==t&&(t="bottom"),this.active)return e=this.editor.el.offset(),s=this.target.offset(),r=this.target.outerHeight(),"bottom"===t?h=s.top-e.top+r:"top"===t&&(h=s.top-e.top-this.el.height()),o=this.editor.wrapper.width()-this.el.outerWidth()-10,i=Math.min(s.left-e.left,o),this.el.css({top:h+this.offset.top,left:i+this.offset.left})},r.prototype.destroy=function(){return this.target=null,this.active=!1,this.editor.off(".linkpopover"),this.el.remove()},r.prototype._t=function(t){var e;return e=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],o.translate.apply(o,e)},i.Popover=r,r});
//# sourceMappingURL=sourcemaps/Popover.js.map
