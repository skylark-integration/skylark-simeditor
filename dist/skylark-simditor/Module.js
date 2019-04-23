/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-jquery"],function(t,e){var n=t.Evented.inherit({init:function(t){var n,i,o,r,s,c,l;if(this.opts=e.extend({},this.opts,t),(n=this.constructor)._connectedClasses||(n._connectedClasses=[]),s=function(){var t,e,n,o;for(o=[],t=0,e=(n=this.constructor._connectedClasses).length;t<e;t++)i=n[t],l=i.pluginName.charAt(0).toLowerCase()+i.pluginName.slice(1),i.prototype._connected&&(i.prototype._module=this),o.push(this[l]=new i);return o}.call(this),this._connected)this.opts=e.extend({},this.opts,this._module.opts);else for(this._init(),o=0,c=s.length;o<c;o++)"function"==typeof(r=s[o])._init&&r._init();this.trigger("initialized")}});return n.extend=function(t){var e,n,i;if(null!=t&&"object"==typeof t){for(e in t)i=t[e],"included"!==e&&"extended"!==e&&(this[e]=i);return null!=(n=t.extended)?n.call(this):void 0}},n.include=function(t){var e,n,i;if(null!=t&&"object"==typeof t){for(e in t)i=t[e],"included"!==e&&"extended"!==e&&(this.prototype[e]=i);return null!=(n=t.included)?n.call(this):void 0}},n.connect=function(t){if("function"==typeof t){if(!t.pluginName)throw new Error("Module.connect: cannot connect plugin without pluginName");return t.prototype._connected=!0,this._connectedClasses||(this._connectedClasses=[]),this._connectedClasses.push(t),t.pluginName?this[t.pluginName]=t:void 0}},n.prototype.opts={},n.prototype._init=function(){},n.prototype.triggerHandler=n.prototype.trigger=function(e,n){var i;return i=[e],n&&(i=i.concat(n)),t.Evented.prototype.trigger.apply(this,i),this},n.prototype._t=function(){var t,e;return t=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],(e=this.constructor)._t.apply(e,t)},n._t=function(){var t,e,n,i;return e=arguments[0],t=2<=arguments.length?Array.prototype.slice.call(arguments,1):[],i=(null!=(n=this.i18n[this.locale])?n[e]:void 0)||"",t.length>0?(i=i.replace(/([^%]|^)%(?:(\d+)\$)?s/g,function(e,n,i){return i?n+t[parseInt(i)-1]:n+t.shift()})).replace(/%%s/g,"%s"):i},n.i18n={"zh-CN":{}},n.locale="zh-CN",n});
//# sourceMappingURL=sourcemaps/Module.js.map
