/**
 * skylark-simditor - A version of simditor.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-simditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/query"],function(e,t){var r=e.Evented.inherit({init:function(e){this.editor=e,this._keystrokeHandlers={},this._initKeystrokeHandlers()}});return r.pluginName="Keystroke",r.prototype.add=function(e,t,r){return e=e.toLowerCase(),e=this.editor.hotkeys.constructor.aliases[e]||e,this._keystrokeHandlers[e]||(this._keystrokeHandlers[e]={}),this._keystrokeHandlers[e][t]=r},r.prototype.respondTo=function(e){var r,i,n,o,s;if(i=null!=(n=this.editor.hotkeys.constructor.keyNameMap[e.which])?n.toLowerCase():void 0)return!!(i in this._keystrokeHandlers&&((o="function"==typeof(r=this._keystrokeHandlers[i])["*"]?r["*"](e):void 0)||this.editor.selection.startNodes().each((s=this,function(r,n){var d,l;if(n.nodeType===Node.ELEMENT_NODE)return d=null!=(l=s._keystrokeHandlers[i])?l[n.tagName.toLowerCase()]:void 0,!0!==(o="function"==typeof d?d(e,t(n)):void 0)&&!1!==o&&void 0})),o))||void 0},r.prototype._initKeystrokeHandlers=function(){var e,r;return this.editor.util.browser.safari&&this.add("enter","*",(r=this,function(e){var i,n;if(e.shiftKey&&!(i=r.editor.selection.blockNodes().last()).is("pre"))return n=t("<br/>"),r.editor.selection.rangeAtEndOf(i)?(r.editor.selection.insertNode(n),r.editor.selection.insertNode(t("<br/>")),r.editor.selection.setRangeBefore(n)):r.editor.selection.insertNode(n),!0})),(this.editor.util.browser.webkit||this.editor.util.browser.msie)&&(e=function(e){return function(r,i){var n;if(e.editor.selection.rangeAtEndOf(i))return n=t("<p/>").append(e.editor.util.phBr).insertAfter(i),e.editor.selection.setRangeAtStartOf(n),!0}}(this),this.add("enter","h1",e),this.add("enter","h2",e),this.add("enter","h3",e),this.add("enter","h4",e),this.add("enter","h5",e),this.add("enter","h6",e)),this.add("backspace","*",function(e){return function(t){var r,i,n;return(i=(n=e.editor.selection.rootNodes().first()).prev()).is("hr")&&e.editor.selection.rangeAtStartOf(n)?(e.editor.selection.save(),i.remove(),e.editor.selection.restore(),!0):((r=e.editor.selection.blockNodes().last()).is(".simditor-resize-handle")&&n.is(".simditor-table")&&(t.preventDefault(),n.remove(),e.editor.selection.setRangeAtEndOf(i)),i.is(".simditor-table")&&!r.is("table")&&e.editor.util.isEmptyNode(r)&&(t.preventDefault(),r.remove(),e.editor.selection.setRangeAtEndOf(i)),e.editor.util.browser.webkit&&e.editor.selection.rangeAtStartOf(r)?(e.editor.selection.save(),e.editor.formatter.cleanNode(r,!0),e.editor.selection.restore(),null):void 0)}}(this)),this.add("enter","div",function(e){return function(r,i){var n;if(i.is(".simditor-table")&&e.editor.selection.blockNodes().last().is(".simditor-resize-handle"))return r.preventDefault(),n=t("<p/>").append(e.editor.util.phBr).insertAfter(i),e.editor.selection.setRangeAtStartOf(n)}}(this)),this.add("enter","li",function(e){return function(r,i){var n,o,s,d;if((n=i.clone()).find("ul, ol").remove(),e.editor.util.isEmptyNode(n)&&i.is(e.editor.selection.blockNodes().last())){if(o=i.parent(),i.next("li").length>0){if(!e.editor.util.isEmptyNode(i))return;o.parent("li").length>0?(s=t("<li/>").append(e.editor.util.phBr).insertAfter(o.parent("li")),d=t("<"+o[0].tagName+"/>").append(i.nextAll("li")),s.append(d)):(s=t("<p/>").append(e.editor.util.phBr).insertAfter(o),d=t("<"+o[0].tagName+"/>").append(i.nextAll("li")),s.after(d))}else o.parent("li").length>0?(s=t("<li/>").insertAfter(o.parent("li")),i.contents().length>0?s.append(i.contents()):s.append(e.editor.util.phBr)):(s=t("<p/>").append(e.editor.util.phBr).insertAfter(o),i.children("ul, ol").length>0&&s.after(i.children("ul, ol")));return i.prev("li").length?i.remove():i.prev("ul").length||i.prev("ol").length?i.remove():o.remove(),e.editor.selection.setRangeAtStartOf(s),!0}}}(this)),this.add("enter","pre",function(e){return function(r,i){var n,o,s;return r.preventDefault(),r.shiftKey?(n=t("<p/>").append(e.editor.util.phBr).insertAfter(i),e.editor.selection.setRangeAtStartOf(n),!0):(o=null,(s=e.editor.selection.range()).deleteContents(),o=!e.editor.util.browser.msie&&e.editor.selection.rangeAtEndOf(i)?document.createTextNode("\n\n"):document.createTextNode("\n"),s.insertNode(o),s.setEnd(o,1),s.collapse(!1),e.editor.selection.range(s),!0)}}(this)),this.add("enter","blockquote",function(e){return function(t,r){var i,n;if((i=e.editor.selection.blockNodes().last()).is("p")&&!i.next().length&&e.editor.util.isEmptyNode(i))return r.after(i),n=document.createRange(),e.editor.selection.setRangeAtStartOf(i,n),!0}}(this)),this.add("backspace","li",function(e){return function(r,i){var n,o,s,d,l,a,c,u,p;return o=i.children("ul, ol"),l=i.prev("li"),o.length>0&&l.length>0&&(p="",a=null,i.contents().each(function(e,r){return(1!==r.nodeType||!/UL|OL/.test(r.nodeName))&&(1===r.nodeType&&/BR/.test(r.nodeName)?void 0:(3===r.nodeType&&r.nodeValue?p+=r.nodeValue:1===r.nodeType&&(p+=t(r).text()),a=t(r)))}),c=e.editor.util.browser.firefox&&!a.next("br").length,a&&1===p.length&&c?(n=t(e.editor.util.phBr).insertAfter(a),a.remove(),e.editor.selection.setRangeBefore(n),!0):!(p.length>0)&&(u=document.createRange(),(d=l.children("ul, ol")).length>0?(s=t("<li/>").append(e.editor.util.phBr).appendTo(d),d.append(o.children("li")),i.remove(),e.editor.selection.setRangeAtEndOf(s,u)):(e.editor.selection.setRangeAtEndOf(l,u),l.append(o),i.remove(),e.editor.selection.range(u)),!0))}}(this)),this.add("backspace","pre",function(e){return function(r,i){var n,o,s;if(e.editor.selection.rangeAtStartOf(i))return o=i.html().replace("\n","<br/>")||e.editor.util.phBr,n=t("<p/>").append(o).insertAfter(i),i.remove(),s=document.createRange(),e.editor.selection.setRangeAtStartOf(n,s),!0}}(this)),this.add("backspace","blockquote",function(e){return function(t,r){var i,n;if(e.editor.selection.rangeAtStartOf(r))return i=r.children().first().unwrap(),n=document.createRange(),e.editor.selection.setRangeAtStartOf(i,n),!0}}(this))},r});
//# sourceMappingURL=sourcemaps/Keystroke.js.map
