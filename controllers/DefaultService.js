'use strict';

exports.rootGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  

  
  res.end();
}
exports.productsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * authorization (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "name" : "aeiou",
  "id" : "",
  "category" : "aeiou",
  "stock" : ""
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
