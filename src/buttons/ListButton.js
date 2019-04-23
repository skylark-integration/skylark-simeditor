define([
  "skylark-jquery",
  "../_extend",
  "../Module",
  "../Toolbar",
  "../Simditor",
  "../Button"
],function($,extend,SimpleModule,Toolbar,Simditor,Button){ 
  var ListButton = Button.inherit({

   });


    ListButton.prototype.type = '';

    ListButton.prototype.disableTag = 'pre, table';

    ListButton.prototype.command = function(param) {
      var $list, $rootNodes, anotherType;
      $rootNodes = this.editor.selection.blockNodes();
      anotherType = this.type === 'ul' ? 'ol' : 'ul';
      this.editor.selection.save();
      $list = null;
      $rootNodes.each((function(_this) {
        return function(i, node) {
          var $node;
          $node = $(node);
          if ($node.is('blockquote, li') || $node.is(_this.disableTag) || _this.editor.util.isDecoratedNode($node) || !$.contains(document, node)) {
            return;
          }
          if ($node.is(_this.type)) {
            $node.children('li').each(function(i, li) {
              var $childList, $li;
              $li = $(li);
              $childList = $li.children('ul, ol').insertAfter($node);
              return $('<p/>').append($(li).html() || _this.editor.util.phBr).insertBefore($node);
            });
            return $node.remove();
          } else if ($node.is(anotherType)) {
            return $('<' + _this.type + '/>').append($node.contents()).replaceAll($node);
          } else if ($list && $node.prev().is($list)) {
            $('<li/>').append($node.html() || _this.editor.util.phBr).appendTo($list);
            return $node.remove();
          } else {
            $list = $("<" + _this.type + "><li></li></" + _this.type + ">");
            $list.find('li').append($node.html() || _this.editor.util.phBr);
            return $list.replaceAll($node);
          }
        };
      })(this));
      this.editor.selection.restore();
      return this.editor.trigger('valuechanged');
    };

    return ListButton;
	
});