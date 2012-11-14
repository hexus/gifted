var testMap = new require('../lib/Map');
console.log('Test map: ' + testMap.name);
testMap.generate();
console.log(testMap.printWorld());
