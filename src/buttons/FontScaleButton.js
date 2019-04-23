define([
  "skylark-jquery",
  "../_extend",
  "../Module",
  "../Toolbar",
  "../Simditor",
  "../Button"
],function($,extend,SimpleModule,Toolbar,Simditor,Button){ 
   var FontScaleButton = Button.inherit({

   });



  FontScaleButton.prototype.name = 'fontScale';

  FontScaleButton.prototype.icon = 'font';

  FontScaleButton.prototype.htmlTag = 'span';

  FontScaleButton.prototype.disableTag = 'pre, h1, h2, h3, h4, h5';

  FontScaleButton.prototype.sizeMap = {
    'x-large': '1.5em',
    'large': '1.25em',
    'small': '.75em',
    'x-small': '.5em'
  };

  FontScaleButton.prototype._init = function() {
    this.menu = [
      {
        name: '150%',
        text: this._t('fontScaleXLarge'),
        param: '5'
      }, {
        name: '125%',
        text: this._t('fontScaleLarge'),
        param: '4'
      }, {
        name: '100%',
        text: this._t('fontScaleNormal'),
        param: '3'
      }, {
        name: '75%',
        text: this._t('fontScaleSmall'),
        param: '2'
      }, {
        name: '50%',
        text: this._t('fontScaleXSmall'),
        param: '1'
      }
    ];
    return Button.prototype._init.call(this);
  };

  FontScaleButton.prototype._activeStatus = function() {
    var active, endNode, endNodes, range, startNode, startNodes;
    range = this.editor.selection.range();
    startNodes = this.editor.selection.startNodes();
    endNodes = this.editor.selection.endNodes();
    startNode = startNodes.filter('span[style*="font-size"]');
    endNode = endNodes.filter('span[style*="font-size"]');
    active = startNodes.length > 0 && endNodes.length > 0 && startNode.is(endNode);
    this.setActive(active);
    return this.active;
  };

  FontScaleButton.prototype.command = function(param) {
    var $scales, containerNode, range;
    range = this.editor.selection.range();
    if (range.collapsed) {
      return;
    }
    this.editor.selection.range(range);
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('fontSize', false, param);
    document.execCommand('styleWithCSS', false, false);
    this.editor.selection.reset();
    this.editor.selection.range();
    containerNode = this.editor.selection.containerNode();
    if (containerNode[0].nodeType === Node.TEXT_NODE) {
      $scales = containerNode.closest('span[style*="font-size"]');
    } else {
      $scales = containerNode.find('span[style*="font-size"]');
    }
    $scales.each((function(_this) {
      return function(i, n) {
        var $span, size;
        $span = $(n);
        size = n.style.fontSize;
        if (/large|x-large|small|x-small/.test(size)) {
          return $span.css('fontSize', _this.sizeMap[size]);
        } else if (size === 'medium') {
          if ($span[0].style.length > 1) {
            return $span.css('fontSize', '');
          } else {
            return $span.replaceWith($span.contents());
          }
        }
      };
    })(this));
    return this.editor.trigger('valuechanged');
  };

  Simditor.Toolbar.addButton(FontScaleButton);

  return FontScaleButton;

});