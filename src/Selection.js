define([
  "skylark-langx/langx",
  "skylark-utils-dom/noder",
  "skylark-jquery",
  "./_extend",
  "./Module"
],function(langx,noder,$,extend,Module){ 

  var Selection = Module.inherit({
    _range : null,

    _startNodes : null,

    _endNodes : null,

    _containerNode : null,

    _nodes : null,

    _blockNodes : null,

    _rootNodes : null,

    _init : function() {
      var self = this;
      this.editor = this._module;
      this._selection = document.getSelection();

      this.editor.on('selectionchanged', function(e) {
        self.reset();
        return self._range = self._selection.getRangeAt(0);
      });

      this.editor.on('blur', function(e) {
        return self.reset();
      });

      return this.editor.on('focus', function(e) {
        self.reset();
        return self._range = self._selection.getRangeAt(0);
      });
    },

    reset : function() {
      this._range = null;
      this._startNodes = null;
      this._endNodes = null;
      this._containerNode = null;
      this._nodes = null;
      this._blockNodes = null;

      return this._rootNodes = null;
    },

    clear : function() {
      var e;
      try {
        this._selection.removeAllRanges();
      } catch (_error) {
        e = _error;
      }
      return this.reset();
    },

    range : function(range) {
      var ffOrIE;
      if (range) {
        this.clear();
        this._selection.addRange(range);
        this._range = range;
 //       ffOrIE = this.editor.util.browser.firefox || this.editor.util.browser.msie;
        ffOrIE = langx.hoster.browser.mozilla || langx.hoster.browser.msie;
        if (!this.editor.inputManager.focused && ffOrIE) {
          this.editor.body.focus();
        }
      } else if (!this._range && this.editor.inputManager.focused && this._selection.rangeCount) {
        this._range = this._selection.getRangeAt(0);
      }
      return this._range;
    },

    startNodes : function() {
      if (this._range) {
        if (!this._startNodes) {
          this._startNodes = (function(self) {
            return function() {
              var startNodes;
              startNodes = $(self._range.startContainer).parentsUntil(self.editor.body).get();
              startNodes.unshift(self._range.startContainer);
              return $(startNodes);
            };
          })(this)();
        } 

      }
      return this._startNodes;
    },

    endNodes : function() {
      var endNodes;
      if (this._range) {
        this._endNodes || (this._endNodes = this._range.collapsed ? this.startNodes() : (endNodes = $(this._range.endContainer).parentsUntil(this.editor.body).get(), endNodes.unshift(this._range.endContainer), $(endNodes)));
      }
      return this._endNodes;
    },

    containerNode : function() {
      if (this._range) {
        this._containerNode || (this._containerNode = $(this._range.commonAncestorContainer));
      }
      return this._containerNode;
    },

    nodes : function() {
      if (this._range) {
        this._nodes || (this._nodes = (function(self) {
          return function() {
            var nodes;
            nodes = [];
            if (self.startNodes().first().is(self.endNodes().first())) {
              nodes = self.startNodes().get();
            } else {
              self.startNodes().each(function(i, node) {
                var $endNode, $node, $nodes, endIndex, index, sharedIndex, startIndex;
                $node = $(node);
                if (self.endNodes().index($node) > -1) {
                  return nodes.push(node);
                } else if ($node.parent().is(self.editor.body) || (sharedIndex = self.endNodes().index($node.parent())) > -1) {
                  if (sharedIndex && sharedIndex > -1) {
                    $endNode = self.endNodes().eq(sharedIndex - 1);
                  } else {
                    $endNode = self.endNodes().last();
                  }
                  $nodes = $node.parent().contents();
                  startIndex = $nodes.index($node);
                  endIndex = $nodes.index($endNode);
                  return $.merge(nodes, $nodes.slice(startIndex, endIndex).get());
                } else {
                  $nodes = $node.parent().contents();
                  index = $nodes.index($node);
                  return $.merge(nodes, $nodes.slice(index).get());
                }
              });
              self.endNodes().each(function(i, node) {
                var $node, $nodes, index;
                $node = $(node);
                if ($node.parent().is(self.editor.body) || self.startNodes().index($node.parent()) > -1) {
                  nodes.push(node);
                  return false;
                } else {
                  $nodes = $node.parent().contents();
                  index = $nodes.index($node);
                  return $.merge(nodes, $nodes.slice(0, index + 1));
                }
              });
            }
            return $($.unique(nodes));
          };
        })(this)());
      }
      return this._nodes;
    },

    blockNodes : function() {
      if (!this._range) {
        return;
      }

      this._blockNodes || (this._blockNodes = (function(self) {
        return function() {
          return self.nodes().filter(function(i, node) {
            return self.editor.util.isBlockNode(node);
          });
        };
      })(this)());

      return this._blockNodes;
    },

    rootNodes : function() {
      if (!this._range) {
        return;
      }
      this._rootNodes || (this._rootNodes = (function(self) {
        return function() {
          return self.nodes().filter(function(i, node) {
            var $parent;
            $parent = $(node).parent();
            return $parent.is(self.editor.body) || $parent.is('blockquote');
          });
        };
      })(this)());

      return this._rootNodes;
    },

    rangeAtEndOf : function(node, range) {
      var afterLastNode, beforeLastNode, endNode, endNodeLength, lastNodeIsBr, result;
      if (range == null) {
        range = this.range();
      }
      if (!(range && range.collapsed)) {
        return;
      }
      node = $(node)[0];
      endNode = range.endContainer;
      endNodeLength = this.editor.util.getNodeLength(endNode);
      beforeLastNode = range.endOffset === endNodeLength - 1;
      lastNodeIsBr = $(endNode).contents().last().is('br');
      afterLastNode = range.endOffset === endNodeLength;
      if (!((beforeLastNode && lastNodeIsBr) || afterLastNode)) {
        return false;
      }
      if (node === endNode) {
        return true;
      } else if (!noder.contains(node, endNode)) {
        return false;
      }
      result = true;
      $(endNode).parentsUntil(node).addBack().each(function(i, n) {
        var $lastChild, beforeLastbr, isLastNode, nodes;
        nodes = $(n).parent().contents().filter(function() {
          return !(this !== n && this.nodeType === 3 && !this.nodeValue);
        });
        $lastChild = nodes.last();
        isLastNode = $lastChild.get(0) === n;
        beforeLastbr = $lastChild.is('br') && $lastChild.prev().get(0) === n;
        if (!(isLastNode || beforeLastbr)) {
          result = false;
          return false;
        }
      });
      return result;
    },

    rangeAtStartOf : function(node, range) {
      var result, startNode;
      if (range == null) {
        range = this.range();
      }
      if (!(range && range.collapsed)) {
        return;
      }
      node = $(node)[0];
      startNode = range.startContainer;
      if (range.startOffset !== 0) {
        return false;
      }
      if (node === startNode) {
        return true;
      } else if (!noder.contains(node, startNode)) {
        return false;
      }
      result = true;
      $(startNode).parentsUntil(node).addBack().each(function(i, n) {
        var nodes;
        nodes = $(n).parent().contents().filter(function() {
          return !(this !== n && this.nodeType === 3 && !this.nodeValue);
        });
        if (nodes.first().get(0) !== n) {
          return result = false;
        }
      });
      return result;
    },

    insertNode : function(node, range) {
      if (range == null) {
        range = this.range();
      }
      if (!range) {
        return;
      }
      node = $(node)[0];
      range.insertNode(node);
      return this.setRangeAfter(node, range);
    },

    setRangeAfter : function(node, range) {
      if (range == null) {
        range = this.range();
      }
      if (range == null) {
        return;
      }
      node = $(node)[0];
      range.setEndAfter(node);
      range.collapse(false);
      return this.range(range);
    },

    setRangeBefore : function(node, range) {
      if (range == null) {
        range = this.range();
      }
      if (range == null) {
        return;
      }
      node = $(node)[0];
      range.setEndBefore(node);
      range.collapse(false);
      return this.range(range);
    },

    setRangeAtStartOf : function(node, range) {
      if (range == null) {
        range = this.range();
      }
      node = $(node).get(0);
      range.setEnd(node, 0);
      range.collapse(false);
      return this.range(range);
    },

    setRangeAtEndOf : function(node, range) {
      var $lastNode, $node, contents, lastChild, lastChildLength, lastText, nodeLength;
      if (range == null) {
        range = this.range();
      }
      $node = $(node);
      node = $node[0];
      if (!node) {
        return;
      }
      if ($node.is('pre')) {
        contents = $node.contents();
        if (contents.length > 0) {
          lastChild = contents.last();
          lastText = lastChild.text();
          lastChildLength = this.editor.util.getNodeLength(lastChild[0]);
          if (lastText.charAt(lastText.length - 1) === '\n') {
            range.setEnd(lastChild[0], lastChildLength - 1);
          } else {
            range.setEnd(lastChild[0], lastChildLength);
          }
        } else {
          range.setEnd(node, 0);
        }
      } else {
        nodeLength = this.editor.util.getNodeLength(node);
        if (node.nodeType !== 3 && nodeLength > 0) {
          $lastNode = $(node).contents().last();
          if ($lastNode.is('br')) {
            nodeLength -= 1;
          } else if ($lastNode[0].nodeType !== 3 && this.editor.util.isEmptyNode($lastNode)) {
            $lastNode.append(this.editor.util.phBr);
            node = $lastNode[0];
            nodeLength = 0;
          }
        }
        range.setEnd(node, nodeLength);
      }
      range.collapse(false);
      return this.range(range);
    },

    deleteRangeContents : function(range) {
      var atEndOfBody, atStartOfBody, endRange, startRange;
      if (range == null) {
        range = this.range();
      }
      startRange = range.cloneRange();
      endRange = range.cloneRange();
      startRange.collapse(true);
      endRange.collapse(false);
      atStartOfBody = this.rangeAtStartOf(this.editor.body, startRange);
      atEndOfBody = this.rangeAtEndOf(this.editor.body, endRange);
      if (!range.collapsed && atStartOfBody && atEndOfBody) {
        this.editor.body.empty();
        range.setStart(this.editor.body[0], 0);
        range.collapse(true);
        this.range(range);
      } else {
        range.deleteContents();
      }
      return range;
    },

    breakBlockEl : function(el, range) {
      var $el;
      if (range == null) {
        range = this.range();
      }
      $el = $(el);
      if (!range.collapsed) {
        return $el;
      }
      range.setStartBefore($el.get(0));
      if (range.collapsed) {
        return $el;
      }
      return $el.before(range.extractContents());
    },

    save : function(range) {
      var endCaret, endRange, startCaret;
      if (range == null) {
        range = this.range();
      }
      if (this._selectionSaved) {
        return;
      }
      endRange = range.cloneRange();
      endRange.collapse(false);
      startCaret = $('<span/>').addClass('simditor-caret-start');
      endCaret = $('<span/>').addClass('simditor-caret-end');
      endRange.insertNode(endCaret[0]);
      range.insertNode(startCaret[0]);
      this.clear();
      return this._selectionSaved = true;
    },

    restore : function() {
      var endCaret, endContainer, endOffset, range, startCaret, startContainer, startOffset;
      if (!this._selectionSaved) {
        return false;
      }
      startCaret = this.editor.body.find('.simditor-caret-start');
      endCaret = this.editor.body.find('.simditor-caret-end');
      if (startCaret.length && endCaret.length) {
        startContainer = startCaret.parent();
        startOffset = startContainer.contents().index(startCaret);
        endContainer = endCaret.parent();
        endOffset = endContainer.contents().index(endCaret);
        if (startContainer[0] === endContainer[0]) {
          endOffset -= 1;
        }
        range = document.createRange();
        range.setStart(startContainer.get(0), startOffset);
        range.setEnd(endContainer.get(0), endOffset);
        startCaret.remove();
        endCaret.remove();
        this.range(range);
      } else {
        startCaret.remove();
        endCaret.remove();
      }
      this._selectionSaved = false;
      return range;
    },
  });

  Selection.pluginName = 'Selection';


  return Selection;

});