define([
  "skylark-utils-dom/query",
  "../Toolbar",
  "../Simditor",
  "../Button"
],function($,Toolbar,Simditor,Button){ 
  

   var HrButton = Button.inherit({

   });


  HrButton.prototype.name = 'hr';

  HrButton.prototype.icon = 'minus';

  HrButton.prototype.htmlTag = 'hr';

  HrButton.prototype._status = function() {};

  HrButton.prototype.command = function() {
    var $hr, $newBlock, $nextBlock, $rootBlock;
    $rootBlock = this.editor.editable.selection.rootNodes().first();
    $nextBlock = $rootBlock.next();
    if ($nextBlock.length > 0) {
      this.editor.editable.selection.save();
    } else {
      $newBlock = $('<p/>').append(this.editor.editable.util.phBr);
    }
    $hr = $('<hr/>').insertAfter($rootBlock);
    if ($newBlock) {
      $newBlock.insertAfter($hr);
      this.editor.editable.selection.setRangeAtStartOf($newBlock);
    } else {
      this.editor.editable.selection.restore();
    }
    return this.editor.trigger('valuechanged');
  };

  Simditor.Toolbar.addButton(HrButton);

  return HrButton;
	
});