// Lab 10 - sort or scramble a name
// Author: kevin Menez <kmenez@ucsc.edu >
// Created: Nov 10 2021
// License: Public Domain

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:

$("#challenge").append("<button id='c-button'>Button</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");

// Add to your previous JavaScript file:

$("#c-button").click(function(){
  // find the section, toggle a class
  // $("#challenge").toggleClass("special");

  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})
