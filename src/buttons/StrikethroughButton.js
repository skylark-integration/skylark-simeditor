define([
  "skylark-utils-dom/query",
  "../Toolbar",
  "../Simditor",
  "../Button"
],function($,Toolbar,Simditor,Button){ 
  
  var StrikethroughButton = Button.inherit({

   });


  StrikethroughButton.prototype.name = 'strikethrough';

  StrikethroughButton.prototype.icon = 'strikethrough';

  StrikethroughButton.prototype.htmlTag = 'strike';

  StrikethroughButton.prototype.disableTag = 'pre';

  StrikethroughButton.prototype._activeStatus = function() {
    var active;
    active = this.editor.editable.isActive('strikethrough');
    this.setActive(active);
    return this.active;
  };

  StrikethroughButton.prototype.command = function() {
    return this.editor.editable.strikethrough();
  };

  Simditor.Toolbar.addButton(StrikethroughButton);	

  return StrikethroughButton;

});