/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","../_extend","../Module","../Toolbar","../Simditor","./ListButton"],function(t,o,i,e,r,l){var n=l.inherit({});return n.prototype.type="ol",n.prototype.name="ol",n.prototype.icon="list-ol",n.prototype.htmlTag="ol",n.prototype.shortcut="cmd+/",n.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + / )":(this.title=this.title+" ( ctrl + / )",this.shortcut="ctrl+/"),l.prototype._init.call(this)},r.Toolbar.addButton(n),n});
//# sourceMappingURL=../sourcemaps/buttons/OrderListButton.js.map
