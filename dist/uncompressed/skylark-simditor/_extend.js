define([],function(){
    var hasProp = {}.hasOwnProperty;

    return function extend(child, parent) { 
      for (var key in parent) { 
        if (hasProp.call(parent, key)) child[key] = parent[key]; 
      } 
      function ctor() { 
        this.constructor = child; 
      } ctor.prototype = parent.prototype; 
      child.prototype = new ctor(); 
      child.__super__ = parent.prototype; 
      return child; 
  　};
});