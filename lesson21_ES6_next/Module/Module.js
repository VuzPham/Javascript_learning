// Modules
// Bóc tách ra những thành phần xử lý riêng 
// export
// import

import logger from "./logger/index.js";
// import {
//     TYPE_ERROR,
//     TYPE_WARN,
//     TYPE_LOG,   
// } // Destructuring
// from "./const.js";

// no Detructuring 
import * as constans from "./constans.js";
console.log(constans);
logger('hello',constans.TYPE_ERROR)