/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-jquery","./_extend","./Module"],function(t,e,i){var o=i.inherit({});return o.pluginName="UndoManager",o.prototype._index=-1,o.prototype._capacity=20,o.prototype._startPosition=null,o.prototype._endPosition=null,o.prototype._init=function(){var t,e,i;return this.editor=this._module,this._stack=[],this.editor.util.os.mac?(e="cmd+z",t="shift+cmd+z"):this.editor.util.os.win?(e="ctrl+z",t="ctrl+y"):(e="ctrl+z",t="shift+ctrl+z"),this.editor.hotkeys.add(e,(i=this,function(t){return t.preventDefault(),i.undo(),!1})),this.editor.hotkeys.add(t,function(t){return function(e){return e.preventDefault(),t.redo(),!1}}(this)),this.throttledPushState=this.editor.util.throttle(function(t){return function(){return t._pushUndoState()}}(this),2e3),this.editor.on("valuechanged",function(t){return function(e,i){if("undo"!==i&&"redo"!==i)return t.throttledPushState()}}(this)),this.editor.on("selectionchanged",function(t){return function(e){return t.resetCaretPosition(),t.update()}}(this)),this.editor.on("focus",function(t){return function(e){if(0===t._stack.length)return t._pushUndoState()}}(this)),this.editor.on("blur",function(t){return function(e){return t.resetCaretPosition()}}(this))},o.prototype.resetCaretPosition=function(){return this._startPosition=null,this._endPosition=null},o.prototype.startPosition=function(){return this.editor.selection._range&&(this._startPosition||(this._startPosition=this._getPosition("start"))),this._startPosition},o.prototype.endPosition=function(){var t;return this.editor.selection._range&&(this._endPosition||(this._endPosition=(t=this,function(){return t.editor.selection.range().collapsed?t._startPosition:t._getPosition("end")})())),this._endPosition},o.prototype._pushUndoState=function(){if(!1!==this.editor.triggerHandler("pushundostate")&&this.caretPosition().start)return this._index+=1,this._stack.length=this._index,this._stack.push({html:this.editor.body.html(),caret:this.caretPosition()}),this._stack.length>this._capacity?(this._stack.shift(),this._index-=1):void 0},o.prototype.currentState=function(){return this._stack.length&&this._index>-1?this._stack[this._index]:null},o.prototype.undo=function(){var t;if(!(this._index<1||this._stack.length<2))return this.editor.hidePopover(),this._index-=1,t=this._stack[this._index],this.editor.body.get(0).innerHTML=t.html,this.caretPosition(t.caret),this.editor.body.find(".selected").removeClass("selected"),this.editor.sync(),this.editor.trigger("valuechanged",["undo"])},o.prototype.redo=function(){var t;if(!(this._index<0||this._stack.length<this._index+2))return this.editor.hidePopover(),this._index+=1,t=this._stack[this._index],this.editor.body.get(0).innerHTML=t.html,this.caretPosition(t.caret),this.editor.body.find(".selected").removeClass("selected"),this.editor.sync(),this.editor.trigger("valuechanged",["redo"])},o.prototype.update=function(){var t;if(t=this.currentState())return t.html=this.editor.body.html(),t.caret=this.caretPosition()},o.prototype._getNodeOffset=function(e,i){var o,n,r;return o=t.isNumeric(i)?t(e):t(e).parent(),r=0,n=!1,o.contents().each(function(t,o){return e!==o&&(i!==t||0!==t)&&(o.nodeType===Node.TEXT_NODE?!n&&o.nodeValue.length>0&&(r+=1,n=!0):(r+=1,n=!1),i-1!==t&&null)}),r},o.prototype._getPosition=function(e){var i,o,n,r,s,d,h;if(null==e&&(e="start"),r=this.editor.selection.range()[e+"Offset"],(o=(i=this.editor.selection[e+"Nodes"]()).first()[0]).nodeType===Node.TEXT_NODE){for(d=o.previousSibling;d&&d.nodeType===Node.TEXT_NODE;)o=d,r+=this.editor.util.getNodeLength(d),d=d.previousSibling;(n=i.get())[0]=o,i=t(n)}else r=this._getNodeOffset(o,r);return s=[r],i.each((h=this,function(t,e){return s.unshift(h._getNodeOffset(e))})),s},o.prototype._getNodeByPosition=function(e){var i,o,n,r,s,d,h,u;for(d=this.editor.body[0],n=r=0,s=(u=e.slice(0,e.length-1)).length;r<s;n=++r){if((h=u[n])>(o=d.childNodes).length-1){if(n!==e.length-2||!t(d).is(":empty")){d=null;break}i=document.createTextNode(""),d.appendChild(i),o=d.childNodes}d=o[h]}return d},o.prototype.caretPosition=function(t){var e,i,o,n,r;if(t){if(!t.start)return;return n=this._getNodeByPosition(t.start),r=t.start[t.start.length-1],t.collapsed?(e=n,i=r):(e=this._getNodeByPosition(t.end),i=t.start[t.start.length-1]),n&&e?((o=document.createRange()).setStart(n,r),o.setEnd(e,i),this.editor.selection.range(o)):void("undefined"!=typeof console&&null!==console&&"function"==typeof console.warn&&console.warn("simditor: invalid caret state"))}return o=this.editor.selection.range(),t=this.editor.inputManager.focused&&null!=o?{start:this.startPosition(),end:this.endPosition(),collapsed:o.collapsed}:{}},o});
//# sourceMappingURL=sourcemaps/UndoManager.js.map
