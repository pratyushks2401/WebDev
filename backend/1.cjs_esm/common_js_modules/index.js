require("./require.js"); 
// require(), a built in function in javascript is used to import external modules that exist in separate files.

require("./export multiple functions.js") 
//The require() function protects the internal variables and functions of the external modules.
//Hence we cannot actually access the variables, methods and functions of one module into other using only require().
//Behind the scenes the external modules are accessed using require() they are wrapped inside a function IIFE: Immediately Invoked Function Expression.
//Which is the reason we cannot access the variables, methods and functions of mone mudule into other without exporting.
//To access the variables, methods and functions from external modules we need explictly export the them in external module using "module.exports".
/*The 5 step working mechanism of require() function:
    1) Resolving the module: Checks for type of the modules to be loaded. For eg: .json file, node module, local path & etc.
    2) Loading the module: Loading the file content according to file type.
    3) Wraps inside an IIFE.
    4) Code evaluation: The code inside the function is executed and module.export is returned.
    5) Caching*/


let single_func = require("./export single function.js")
//Define the external module where the function is defined.
let a = 10;
let b = 9;
single_func(a, b); 
//If only one variable, function or method is exported in external module we have to access it directly using the variable created for the external module i.e. "single_func" in this case.


var multiple_func = require("./export multiple functions.js")
//Define the external module from which multiple functions are to be imported.
let c = 10;
let d = 9;
multiple_func.calculateDifference(c, d); 

let w = 1;
let x = 2;
multiple_func.calculateSum(w, x);
//If multiple variables, methods and functions are exported using object we need to access them using the variable created for the external module i.e. "mutiple_func" in this case.

let data = require("./data.json");
console.log(data);
//Importing json data into the main javascript file


let name = "Pratyush";
console.log(name);