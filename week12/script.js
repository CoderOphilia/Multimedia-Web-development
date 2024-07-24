function xTable(){
    let x = document.getElementById("v1").value;
    let htmlCode = "<table>";
    for(i=1; i<=10; i++){
        htmlCode+= "<tr><td>" + x+ " x "+ i + " = " + x*i + "</td></tr>";
    }
    htmlCode += "</table>";
    document.getElementById("table5").innerHTML = htmlCode;
}
// xTable()

var course = ["CSIS 1280", "CSIS 2300", "CSIS 2429"];
function showCourse(){
    let htmlCode = "<table>";
    for(i=0; i<course.length; i++){
       htmlCode += "<tr>";
       htmlCode += "<td>" + (i+1) + "</td>";
       htmlCode += "<td>" + course[i] + "</td>";
       htmlCode += "</tr>";
    }
    htmlCode += "</table>";
    document.getElementById("table6").innerHTML = htmlCode;
}