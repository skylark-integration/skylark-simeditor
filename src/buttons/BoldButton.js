define([
  "skylark-jquery",
  "../Toolbar",
  "../Simditor",
  "../Button"
],function($,Toolbar,Simditor,Button){ 
  
    var BoldButton = Button.inherit({

    });

    BoldButton.prototype.name = 'bold';

    BoldButton.prototype.icon = 'bold';

    BoldButton.prototype.htmlTag = 'b, strong';

    BoldButton.prototype.disableTag = 'pre';

    BoldButton.prototype.shortcut = 'cmd+b';

    BoldButton.prototype._init = function() {
      if (this.editor.util.os.mac) {
        this.title = this.title + ' ( Cmd + b )';
      } else {
        this.title = this.title + ' ( Ctrl + b )';
        this.shortcut = 'ctrl+b';
      }
      return Button.prototype._init.call(this);
    };

    BoldButton.prototype._activeStatus = function() {
      var active;
      active = document.queryCommandState('bold') === true;
      this.setActive(active);
      return this.active;
    };

    BoldButton.prototype.command = function() {
      document.execCommand('bold');
      if (!this.editor.util.support.oninput) {
        this.editor.trigger('valuechanged');
      }
      return $(document).trigger('selectionchange');
    };


    Simditor.Toolbar.addButton(BoldButton);

    return BoldButton;

});