define([
  "skylark-utils-dom/query",
  "../Toolbar",
  "../Simditor",
  "../Button"
],function($,Toolbar,Simditor,Button){ 
   var BlockquoteButton = Button.inherit({

   });

  BlockquoteButton.prototype.name = 'blockquote';

  BlockquoteButton.prototype.icon = 'quote-left';

  BlockquoteButton.prototype.htmlTag = 'blockquote';

  BlockquoteButton.prototype.disableTag = 'pre, table';

  BlockquoteButton.prototype.command = function() {
    return this.editor.editable.blockquote(this.htmlTag,this.disableTag);
  };

  Simditor.Toolbar.addButton(BlockquoteButton); 

  return BlockquoteButton;

});