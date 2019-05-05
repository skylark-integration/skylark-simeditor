define([
  "skylark-utils-dom/query",
  "../Toolbar",
  "../Simditor",
  "../Button"
],function($,Toolbar,Simditor,Button){ 
  var OutdentButton = Button.inherit({

   });


  OutdentButton.prototype.name = 'outdent';

  OutdentButton.prototype.icon = 'outdent';

  OutdentButton.prototype._init = function() {
    var hotkey;
    hotkey = this.editor.opts.tabIndent === false ? '' : ' (Shift + Tab)';
    this.title = this._t(this.name) + hotkey;
    return Button.prototype._init.call(this);
  };

  OutdentButton.prototype._status = function() {};

  OutdentButton.prototype.command = function() {
    return this.editor.editable.indentation.indent(true);
  };

  Simditor.Toolbar.addButton(OutdentButton);	

  return OutdentButton;

});