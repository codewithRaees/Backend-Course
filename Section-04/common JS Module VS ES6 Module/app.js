// const timer = require("./timerjs");
// import timer from "./timer.js";
// import num from "./index.js";

// Common Js Modules
// cjs imports are not hoisted
// Synchronous file loading: means means file load
// top level await is not allowed
// only one value can be imported
// in the same thread. and run in main thread
// if we give full file path that we can load any file using cjs
// it is a convention to add cjs in the file extention
// It is optional to set "type": " commonjs" in package.json, because common js is the
// defualt system module
// In CJS this keyword point to module.exports

// ES6 Modules
// mjs imports are hoiested
// top level await is allowed
// Can import multiple values
// Asynchronous file loading: means file loads in a separet threads. and run in main thread
//File extension mandatory
// we can't load any file. only js and mjs files area allowed
// we have to set "type" : "module" in package.json file
// Im mjs this keyword is undefined
