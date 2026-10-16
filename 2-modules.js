// Modules

const items = require('./5-alternative');
const names = require('./3-names');
const sayHi = require('./4-utils');


require('./6-mind-grenade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);


//--------------------------------------------------------------------

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)