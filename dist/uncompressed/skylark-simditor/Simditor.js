define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    define([
        'skylark-langx/langx',
        'skylark-jquery',
        './hotkeys',
        './uploader',
        './Util',
        './InputManager',
        './Selection',
        './UndoManager',
        './Keystroke',
        './Formatter',
        './Toolbar',
        './Indentation',
        './Clipboard',
        './i18n'
    ], function (langx, $, hotkeys, uploader, Util, InputManager, Selection, UndoManager, Keystroke, Formatter, Toolbar, Indentation, Clipboard, i18n) {
        var Simditor = langx.Evented.inherit({
            init: function (opts) {
                this.opts = $.extend({}, this.opts, opts);
                this.util = new Util(this);
                var e, editor, uploadOpts;
                this.textarea = $(this.opts.textarea);
                this.opts.placeholder = this.opts.placeholder || this.textarea.attr('placeholder');
                if (!this.textarea.length) {
                    throw new Error('simditor: param textarea is required.');
                    return;
                }
                editor = this.textarea.data('simditor');
                if (editor != null) {
                    editor.destroy();
                }
                this.id = ++Simditor.count;
                this._render();
                if (hotkeys) {
                    this.hotkeys = hotkeys({ el: this.body });
                } else {
                    throw new Error('simditor: simple-hotkeys is required.');
                    return;
                }
                if (this.opts.upload && uploader) {
                    uploadOpts = typeof this.opts.upload === 'object' ? this.opts.upload : {};
                    this.uploader = uploader(uploadOpts);
                }
                this.inputManager = new InputManager(this);
                this.selection = new Selection(this);
                this.undoManager = new UndoManager(this);
                this.keystroke = new Keystroke(this);
                this.formatter = new Formatter(this);
                this.toolbar = new Toolbar(this, {
                    toolbar: this.opts.toolbar,
                    toolbarFloat: this.opts.toolbarFloat,
                    toolbarHidden: this.opts.toolbarHidden,
                    toolbarFloatOffset: this.opts.toolbarFloatOffset
                });
                this.indentation = new Indentation(this);
                this.clipboard = new Clipboard(this);
                var self = this;
                if (this.opts.placeholder) {
                    this.on('valuechanged', function () {
                        return self._placeholder();
                    });
                }
                this.setValue(this.textarea.val().trim() || '');
                if (this.textarea.attr('autofocus')) {
                    return self.focus();
                }
                if (this.util.browser.mozilla) {
                    this.util.reflow();
                    try {
                        document.execCommand('enableObjectResizing', false, false);
                        return document.execCommand('enableInlineTableEditing', false, false);
                    } catch (_error) {
                        e = _error;
                    }
                }
            }
        });
        Simditor.prototype.triggerHandler = Simditor.prototype.trigger = function (type, data) {
            var args, ref;
            args = [type];
            if (data) {
                args = args.concat(data);
            }
            langx.Evented.prototype.trigger.apply(this, args);
            return this;
        };
        Simditor.count = 0;
        Simditor.prototype.opts = {
            textarea: null,
            placeholder: '',
            defaultImage: 'images/image.png',
            params: {},
            upload: false,
            indentWidth: 40
        };
        Simditor.prototype._tpl = '<div class="simditor">\n  <div class="simditor-wrapper">\n    <div class="simditor-placeholder"></div>\n    <div class="simditor-body" contenteditable="true">\n    </div>\n  </div>\n</div>';
        Simditor.prototype._render = function () {
            var key, ref, results, val;
            this.el = $(this._tpl).insertBefore(this.textarea);
            this.wrapper = this.el.find('.simditor-wrapper');
            this.body = this.wrapper.find('.simditor-body');
            this.placeholderEl = this.wrapper.find('.simditor-placeholder').append(this.opts.placeholder);
            this.el.data('simditor', this);
            this.wrapper.append(this.textarea);
            this.textarea.data('simditor', this).blur();
            this.body.attr('tabindex', this.textarea.attr('tabindex'));
            if (this.util.os.mac) {
                this.el.addClass('simditor-mac');
            } else if (this.util.os.linux) {
                this.el.addClass('simditor-linux');
            }
            if (this.util.os.mobile) {
                this.el.addClass('simditor-mobile');
            }
            if (this.opts.params) {
                ref = this.opts.params;
                results = [];
                for (key in ref) {
                    val = ref[key];
                    results.push($('<input/>', {
                        type: 'hidden',
                        name: key,
                        value: val
                    }).insertAfter(this.textarea));
                }
                return results;
            }
        };
        Simditor.prototype._placeholder = function () {
            var children;
            children = this.body.children();
            if (children.length === 0 || children.length === 1 && this.util.isEmptyNode(children) && parseInt(children.css('margin-left') || 0) < this.opts.indentWidth) {
                return this.placeholderEl.show();
            } else {
                return this.placeholderEl.hide();
            }
        };
        Simditor.prototype.setValue = function (val) {
            this.hidePopover();
            this.textarea.val(val);
            this.body.get(0).innerHTML = val;
            this.formatter.format();
            this.formatter.decorate();
            this.util.reflow(this.body);
            this.inputManager.lastCaretPosition = null;
            return this.trigger('valuechanged');
        };
        Simditor.prototype.getValue = function () {
            return this.sync();
        };
        Simditor.prototype.sync = function () {
            var children, cloneBody, emptyP, firstP, lastP, val;
            cloneBody = this.body.clone();
            this.formatter.undecorate(cloneBody);
            this.formatter.format(cloneBody);
            this.formatter.autolink(cloneBody);
            children = cloneBody.children();
            lastP = children.last('p');
            firstP = children.first('p');
            while (lastP.is('p') && this.util.isEmptyNode(lastP)) {
                emptyP = lastP;
                lastP = lastP.prev('p');
                emptyP.remove();
            }
            while (firstP.is('p') && this.util.isEmptyNode(firstP)) {
                emptyP = firstP;
                firstP = lastP.next('p');
                emptyP.remove();
            }
            cloneBody.find('img.uploading').remove();
            val = $.trim(cloneBody.html());
            this.textarea.val(val);
            return val;
        };
        Simditor.prototype.focus = function () {
            var $blockEl, range;
            if (!(this.body.is(':visible') && this.body.is('[contenteditable]'))) {
                this.el.find('textarea:visible').focus();
                return;
            }
            if (this.inputManager.lastCaretPosition) {
                this.undoManager.caretPosition(this.inputManager.lastCaretPosition);
                return this.inputManager.lastCaretPosition = null;
            } else {
                $blockEl = this.body.children().last();
                if (!$blockEl.is('p')) {
                    $blockEl = $('<p/>').append(this.util.phBr).appendTo(this.body);
                }
                range = document.createRange();
                return this.selection.setRangeAtEndOf($blockEl, range);
            }
        };
        Simditor.prototype.blur = function () {
            if (this.body.is(':visible') && this.body.is('[contenteditable]')) {
                return this.body.blur();
            } else {
                return this.body.find('textarea:visible').blur();
            }
        };
        Simditor.prototype.hidePopover = function () {
            return this.el.find('.simditor-popover').each(function (i, popover) {
                popover = $(popover).data('popover');
                if (popover.active) {
                    return popover.hide();
                }
            });
        };
        Simditor.prototype.destroy = function () {
            this.triggerHandler('destroy');
            this.textarea.closest('form').off('.simditor .simditor-' + this.id);
            this.selection.clear();
            this.inputManager.focused = false;
            this.textarea.insertBefore(this.el).hide().val('').removeData('simditor');
            this.el.remove();
            $(document).off('.simditor-' + this.id);
            $(window).off('.simditor-' + this.id);
            return this.off();
        };
        Simditor.Toolbar = Toolbar;
        Simditor.i18n = i18n;
        return Simditor;
    });
    function __isEmptyObject(obj) {
        var attr;
        for (attr in obj)
            return !1;
        return !0;
    }
    function __isValidToReturn(obj) {
        return typeof obj != 'object' || Array.isArray(obj) || !__isEmptyObject(obj);
    }
    if (__isValidToReturn(module.exports))
        return module.exports;
    else if (__isValidToReturn(exports))
        return exports;
});