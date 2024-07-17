"use strict"

//--------------------variable declaration---------------
let width = 45.5; //[numeric data type]
let length = 35.5; //[numeric data type]
// let area = width * length; //binary operator [width is one value and length is another]
// let result = width + " x " + length + " = " + area; //[string data type]

// document.getElementById("firstDiv").textContent = result;

//-------------calling the function--------------
// let res = calculatingArea(width,length);
// document.getElementById("firstDiv").textContent = res;

var a = 10;
var b = 20;
var c = 30
let res = sumOfThreeNum(a,b,c);
// document.getElementById("firstDiv").textContent = res;

// ss.innerHTML = Math.round(Math.PI);
let ss = document.getElementById("mathId");
ss.innerHTML = Math.PI.toFixed(2); //This is to mention the decimal values
ss.style.color = "blue";
ss.style.fontSize = "3em";

//---calling the function
// setInterval("runClock()", 50); //Time is in milli-seconds
// runClock();

//isNan----------------
let width1 = "14";
let length1 = "ac ";

if(isNaN(width1) || isNaN(length1)){
 document.getElementById("firstDiv").textContent = "An error"
}
else{
    document.getElementById("firstDiv").textContent = "Success"
}

//-----datatype
let aValue = 56;
// document.getElementById("tyPe").textContent = typeof(aValue);
let bValue = aValue + "";
document.getElementById("tyPe").textContent = "The type of 1st value: "+typeof(aValue) + "------------The type of 2nd value: " + typeof(bValue);


//-------need of converting string to int
let sValue = "120 lbs"; //If this was other way around, "Means string comes first", then there will be an error "NaN" error
let intValue = parseInt(sValue);
document.getElementById("tyPe").textContent = "The type of 1st value: "+typeof(aValue) + "------------The type of 2nd value: " + typeof(bValue) + "----------The type of sValue value: "+typeof(intValue);

//------------------declaring the function----------------
function calculatingArea(w,l){
    let area = w*l;
    let result = w + " x " + l + " = " + area;
    // document.getElementById("firstDiv").textContent = result;
    return result;
}

function sumOfThreeNum(a,b,c){
    var sum = a+b+c;
    return sum;
}

function runClock(){
    let today = new Date();
    let currentDate = today.toLocaleDateString();
    let cTime = today.toLocaleTimeString();
    document.getElementById("time").innerHTML = currentDate + " " + cTime;
}

//------arrays 1st method-----
// let monthNames = new Array(12);
// monthNames[0] = "Jan";
// monthNames[1] = "Feb";
// document.getElementById("array").textContent = monthNames;

//------arrays 2nd method-----
// let namesOfMonths = new Array("jan", "feb", "march", "april", "may", "june", "july", "aug", "spet", "oct", "nov", "dec");
// document.getElementById("array").textContent = namesOfMonths;

//------arrays 3rd method-----
let nOM = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "spet", "oct", "nov", "dec"];
// nOM.length = 4;
let numberArray = [70,45,22,89]; //sort function works best with the strings, not with the numbers

//---------date and month
let currentDay = new Date();
let currentMon = currentDay.getMonth();

document.getElementById("array").innerHTML = "Name of Months: " + nOM + 
                                            "<br/>" + "length of the array: " + nOM.length + 
                                            //"<br/>" +  nOM.reverse() + 
                                           // "<br/>" + nOM.sort() + 
                                           // "<br/>" + "Sorting the numbers: "+ numberArray.sort(descending);
                                           "<br/>" + nOM[currentMon];

function ascending(a,b){ //passing this function to the sort() function to sort the numbers in ascending order
    return a-b;
}

function descending(a,b){ //passing this function to the sort() function to sort the numbers in descending order
    return b-a;
}

//---------creating sub array using slice
let subArray = nOM.slice(0,5);
document.getElementById("subArray").textContent = subArray;

let splicaArrayForSummerMonth = nOM.splice(5,4); //it removes an if needed values can be added splice(start,size,value)
document.getElementById("splice").textContent = splicaArrayForSummerMonth; //removes thes values from the array
//adding the values back
//--check the ppt form

//-----loops-----
function displayMonths(monthNames){
    // let str = "";
    // for(let counter = 0; counter<12; counter++){
    //     str += monthNames[counter]+"--"
    // }
    // document.getElementById("loop").innerHTML = str;

    let htmlCode = "<table id='table'>";
    // for(let counter = 0; counter<12; counter++){
    //     htmlCode += "<tr> <td>" + (counter+1) + "</td>" + "<td>" + monthNames[counter] + "</td></tr>"
    // }
    let counter = 0;
    while(counter<12){
        htmlCode += "<tr> <td>" + (counter+1) + "</td>" + "<td>" + monthNames[counter] + "</td></tr>";
        counter++
    }
    htmlCode += "</table>";
    document.getElementById("loop").innerHTML = htmlCode;
}

let nOM1 = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "spet", "oct", "nov", "dec"];
displayMonths(nOM1);