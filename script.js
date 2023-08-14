//your code here
// Implementing myCall
Function.prototype.myCall = function(thisContext, ...args) {
    const originalFunc = this;
    thisContext = thisContext || window;
    thisContext.fn = originalFunc;
    const result = thisContext.fn(...args);
    delete thisContext.fn;
    return result;
  };
  
  // Implementing myApply
  Function.prototype.myApply = function(thisContext, args) {
    const originalFunc = this;
    thisContext = thisContext || window;
    thisContext.fn = originalFunc;
    const result = thisContext.fn(...args);
    delete thisContext.fn;
    return result;
  };
  
  // Implementing myBind
  Function.prototype.myBind = function(thisContext, ...args) {
    const originalFunc = this;
    thisContext = thisContext || window;
    return function(...bindArgs) {
      const result = originalFunc.myCall(thisContext, ...args, ...bindArgs);
      return result;
    };
  };
  
  module.exports = Function.prototype;