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
    return this.editor.editable.hr();
  };

  Simditor.Toolbar.addButton(HrButton);

  return HrButton;
	
});