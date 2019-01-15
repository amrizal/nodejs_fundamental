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

/*var apple = require('./fruit');
console.log(apple().getInfo());

var banana = require('./fruit')();
banana.setName('banana');
console.log(banana.getInfo());*/

var fruit = require('./fruit.js');
var banana = fruit('banana', 'yellow fruit');
var cherry = fruit('cherry', 'small red fruit');

console.log(banana.getInfo());
console.log(cherry.getInfo());
