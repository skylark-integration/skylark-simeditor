/**
 * skylark-ui-contents - A dom plugin for  editing  the content of html element.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx/skylark");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-ui-contents/contents',[
    "skylark-langx/skylark",
    "skylark-langx/langx",
    "skylark-utils-dom/noder",
    "skylark-utils-dom/datax"
], function(skylark, langx, noder,datax) {
    "use strict";

    var contents = function() {
        return contents;
    };

    var commands =  [
    	"bold", // toggle 
    	"insertImage",
    	"insertorderedlist",
    	"insertunorderedlist",
    	"italic", // toggle
    	"justifyLeft",
    	"justifyCenter",
    	"justifyFull",
    	"justifyRight",
    	"strikeThrough",
    	"underline",
    	"undo"
    ];

	contents.editable = function(node,value) {
		if (value === undefined) {
   			return node.contentEditable == "true"
		} else {
			if (!value) {
				value = null;
			} else {
				value = "true";
			}
			datax.attr(node,"contentEditable",value);
		}
		
	};

    contents.execCommand = function(node,command) {
   	    document.execCommand(command, false, null);
    };

    return skylark.attach("ui.contents",contents);

});
define('skylark-ui-contents/main',[
	"./contents"
],function(contents){

	return contents;
});
define('skylark-ui-contents', ['skylark-ui-contents/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-ui-contents.js.map
