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
      return this.editor.editable.list(this.type,param,this.disableTag);
    };

    return ListButton;
	
});