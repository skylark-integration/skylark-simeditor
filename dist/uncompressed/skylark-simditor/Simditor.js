define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    define([
        'skylark-langx/langx',
        'skylark-utils-dom/query',
        'skylark-ui-contents/editable',
        './Toolbar',
        './uploader',
        './i18n'
    ], function (langx, $, editable, Toolbar, uploader, i18n) {
        var Simditor = langx.Evented.inherit({
            init: function (opts) {
                this.opts = langx.extend({}, this.opts, opts);
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
                var self = this;
                this.editable = editable(this.el, {
                    classPrefix: 'simditor-',
                    textarea: this.textarea,
                    body: this.body
                });
                this.editable.on('all', function (e, data) {
                    return self.trigger(e.type, data);
                });
                if (this.opts.upload && uploader) {
                    uploadOpts = typeof this.opts.upload === 'object' ? this.opts.upload : {};
                    this.uploader = uploader(uploadOpts);
                }
                this.toolbar = new Toolbar(this, {
                    toolbar: this.opts.toolbar,
                    toolbarFloat: this.opts.toolbarFloat,
                    toolbarHidden: this.opts.toolbarHidden,
                    toolbarFloatOffset: this.opts.toolbarFloatOffset
                });
                if (this.opts.placeholder) {
                    this.on('valuechanged', function () {
                        return self._placeholder();
                    });
                }
                this.setValue(this.textarea.val().trim() || '');
                if (this.textarea.attr('autofocus')) {
                    return self.focus();
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
            upload: false
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
            this.editable.setValue(val);
            return this.trigger('valuechanged');
        };
        Simditor.prototype.getValue = function () {
            return this.editable.getValue();
        };
        Simditor.prototype.focus = function () {
            return this.editable.focus();
        };
        Simditor.prototype.blur = function () {
            return this.editable.blur();
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