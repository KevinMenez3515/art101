/*
 * Author: Kevin Menez <kmenez@ucsc.edu>
 * Created: 10/19/2021
 * License: Public Domain
 */

// Define Variables
myOldDog =["Dory","Gray And Black","Petit","8yearold" ];

 myNewDog  = {
  name: "kevin",
  color : "Gray",
  size : "Big",
  age : "3yearOld",
}




// output
document.writeln("The Old Dog I Hand: ", myOldDog, "</br") ;
document.writeln("My New Dog: <pre>" ,
    JSON.stringify(myNewDog, null, '\t'), "</pre>") ;
