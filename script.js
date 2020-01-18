var currentDay = document.querySelector("#currentDay");
var time9 = document.querySelector("#time9");
var time10 = document.querySelector("#time10");
var time11 = document.querySelector("#time11");
var time12 = document.querySelector("#time12");
var time1 = document.querySelector("#time1");
var time2 = document.querySelector("#time2");
var time3 = document.querySelector("#time3");
var time4 = document.querySelector("#time4");

// currentDay display
var m = moment();
var today = m.format("dddd, MMMM Mo YYYY").toString();
currentDay.append(today);

//Time at 9AM
var timeat9 = m.format("9 [AM]").toString();
time9.append(timeat9);
var col9 = document.querySelector("#col9");
if (timeat9 == m.format("h [AM]").toString()) {
  col9.style.backgroundColor = "red";
  col9.append("Current time");
} else {
  col9.style.backgroundColor = "silver";
}
//Time at 10AM
var timeat10 = m.format("10 [AM]").toString();
time10.append(timeat10);

var col10 = document.querySelector("#col10");
if (timeat10 == m.format("h [AM]").toString()) {
  col10.style.backgroundColor = "red";
  col10.append("Current time");
} else {
  col10.style.backgroundColor = "silver";
}
//Time at 11AM
var timeat11 = m.format("11 [AM]").toString();
time11.append(timeat11);

var col11 = document.querySelector("#col11");
if (timeat11 == m.format("h [AM]").toString()) {
  col11.style.backgroundColor = "red";
  col11.append("Current time");
} else {
  col11.style.backgroundColor = "silver";
}
//Time at 12PM
var timeat12 = m.format("12 [PM]").toString();
time12.append(timeat12);

var col12 = document.querySelector("#col12");
if (timeat12 == m.format("h [PM]").toString()) {
  col12.style.backgroundColor = "red";
  col12.append("Current time");
} else {
  col12.style.backgroundColor = "silver";
}
//Time at 1PM
var timeat1 = m.format("1 [PM]").toString();
time1.append(timeat1);

var col1 = document.querySelector("#col1");
if (timeat1 == m.format("h [PM]").toString()) {
  col1.style.backgroundColor = "red";
  col1.append("Current time");
} else {
  col1.style.backgroundColor = "silver";
}
//Time at 2PM
var timeat2 = m.format("2 [PM]").toString();
time2.append(timeat2);

var col2 = document.querySelector("#col2");
if (timeat2 == m.format("h [AM]").toString()) {
  col2.style.backgroundColor = "red";
  col2.append("Current time");
} else {
  col2.style.backgroundColor = "silver";
}
//Time at 3PM
var timeat3 = m.format("3 [PM]").toString();
time3.append(timeat3);

var col3 = document.querySelector("#col3");
if (timeat3 == m.format("h [PM]").toString()) {
  col3.style.backgroundColor = "red";
  col3.append("Current time");
} else {
  col3.style.backgroundColor = "silver";
}
//Time at 4PM
var timeat4 = m.format("4 [PM]").toString();
time4.append(timeat4);

var col4 = document.querySelector("#col4");
if (timeat4 == m.format("h [PM]").toString()) {
  col4.style.backgroundColor = "red";
  col4.append("Current time");
} else {
  col4.style.backgroundColor = "silver";
}
