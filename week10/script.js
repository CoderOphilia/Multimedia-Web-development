"use strict";
// this is a comment

/*
This is a
Multi-line comment
*/
var aValue = 45.5;
var bvalue = 50;
var result = aValue + bvalue;
var aText = "abc";
var bVar = true;
var anotherVar = null;
var today = new Date();
var gradDate = new Date("June 2, 2025")

// document.getElementById("showDate").innerHTML = "<p>" + today+ "</P>";

document.getElementById("showDate").innerHTML = "<p>" + gradDate + "</P>";

window.alert("This window is from a separate Javascript file");

document.getElementById("heading2").textContent =  "Sum is " + result;

var h3Elements = document.getElementsByTagName("h3");
h3Elements[0].style.color = "red";
// h3Elements[0].textContent = "Heading 3 added by JavaScript Code";
// Another way to give text content and styling is to use innerHTML 
h3Elements[0].innerHTML = "<u>Heading3 </u> added by JavaScript Code";

document.getElementsByClassName("class1")[0].innerHTML = "Div with class";
