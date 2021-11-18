/*
 * Author: Kevin  Menez <kmenez@ucsc.edu>
 * Created: 28 Oct
 * License: AttractedToMyCousin LLC
 */

 function isEven(x){
   return(x % 2 == 0);
 }

 // test function
 console.log("Is 1 even? ", isEven(1));
 console.log("Is 2 even? ", isEven(2));

 array = [100, 81, 3, 44, 828, 5325, 10000];
 console.log("My array", array);

 var results = array.map(isEven);
 // should return [true, false, false, true,true, false, true]
 console.log("Test of evenness of array:" , result);

 var result = array.map(function(x){
   return x ** 0.5;
 })
// should return [100, 81, 3, 44, 828, 5325, 10000]
 console.log("Squareroot of array:" , result);
 var outputEl = document.getElementById("output");
