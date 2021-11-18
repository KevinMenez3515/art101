/*
 * Author: Kevin Menez <kmenez@ucsc.edu>
 * Created: 10/26/2021
 * License: Public Domain
 */

// Define Variables

function sortUserName() {
  var useName = window.prompt ("Hi. Please tell me your name so I can fix it.");
  console.log("userKevin =", userKevin);
  // split string tp Arrays
  var nameArray = userKevin.split ('');
  // sort the Arrays
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('')
  console.log("nameSorted =" , nameSorted);
  //n Note that I could have doen the above lines as a single line:
  // userName.toLower().split ("").sort().oin("")
  return nameSorted;

  }
  // Output
  document.writeln("Oh hey, I've fixed your name: " ,
     sortUserName(), "</br>");
