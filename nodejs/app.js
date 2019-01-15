console.log("Hellow World!");

//require and exports
/*var myModule = require('./sample_module');
console.log(myModule);
console.log(myModule.firstName);
console.log(myModule.randomNum());*/

//core modules
/*var os = require('os');
console.log(os.platform());

var http = require('http');
console.log(http);*/

var apple = require('./fruit');
console.log(apple().getInfo());
