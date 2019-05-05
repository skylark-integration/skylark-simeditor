define([
  "skylark-utils-dom/noder",
  "skylark-utils-dom/query",
  "../Toolbar",
  "../Simditor",
  "../Button"
],function(noder,$,Toolbar,Simditor,Button){ 
  var ListButton = Button.inherit({

   });


    ListButton.prototype.type = '';

    ListButton.prototype.disableTag = 'pre, table';

    ListButton.prototype.command = function(param) {
      var $list, $rootNodes, anotherType;
      $rootNodes = this.editor.editable.selection.blockNodes();
      anotherType = this.type === 'ul' ? 'ol' : 'ul';
      this.editor.editable.selection.save();
      $list = null;
      $rootNodes.each((function(_this) {
        return function(i, node) {
          var $node;
          $node = $(node);
          if ($node.is('blockquote, li') || $node.is(_this.disableTag) || _this.editor.editable.util.isDecoratedNode($node) || !noder.contains(document, node)) {
            return;
          }
          if ($node.is(_this.type)) {
            $node.children('li').each(function(i, li) {
              var $childList, $li;
              $li = $(li);
              $childList = $li.children('ul, ol').insertAfter($node);
              return $('<p/>').append($(li).html() || _this.editor.editable.util.phBr).insertBefore($node);
            });
            return $node.remove();
          } else if ($node.is(anotherType)) {
            return $('<' + _this.type + '/>').append($node.contents()).replaceAll($node);
          } else if ($list && $node.prev().is($list)) {
            $('<li/>').append($node.html() || _this.editor.editable.util.phBr).appendTo($list);
            return $node.remove();
          } else {
            $list = $("<" + _this.type + "><li></li></" + _this.type + ">");
            $list.find('li').append($node.html() || _this.editor.editable.util.phBr);
            return $list.replaceAll($node);
          }
        };
      })(this));
      this.editor.editable.selection.restore();
      return this.editor.trigger('valuechanged');
    };

    return ListButton;
	
});