// currentDay display
var currentDay = document.querySelector("#currentDay");
var m = moment();
var today = m.format("dddd, MMMM Do YYYY").toString();
currentDay.append(today);
var x;
var time9 = document.querySelector("#time9");
var time10 = document.querySelector("#time10");
var time11 = document.querySelector("#time11");
var time12 = document.querySelector("#time12");
var time1 = document.querySelector("#time1");
var time2 = document.querySelector("#time2");
var time3 = document.querySelector("#time3");
var time4 = document.querySelector("#time4");

//calendar function
function calendar() {
  //Time at 9AM
  var timeat9 = m.format("9 [AM]").toString();
  time9.append(timeat9);

  var col9 = document.querySelector("#col9");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input9");
  if (timeat9 == m.format("H [AM]").toString()) {
    x.style.backgroundColor = "red";
    col9.append(x);
  } else if (m.format("H") < m.format("09")) {
    x.style.backgroundColor = "green";
    col9.append(x);
  } else {
    x.style.backgroundColor = "silver";
    col9.append(x);
  }
  //Time at 10AM
  var timeat10 = m.format("10 [AM]").toString();
  time10.append(timeat10);

  var col10 = document.querySelector("#col10");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input10");
  if (timeat10 == m.format("H [AM]").toString()) {
    x.style.backgroundColor = "red";
    col10.append(x);
  } else if (m.format("H") < m.format("10")) {
    x.style.backgroundColor = "green";
    col10.append(x);
  } else {
    x.style.backgroundColor = "silver";
    col10.append(x);
  }
  //Time at 11PM
  var timeat11 = m.format("11 [AM]").toString();
  time11.append(timeat11);

  var col11 = document.querySelector("#col11");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input11");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input11");
  if (timeat11 == m.format("h [AM]").toString()) {
    x.style.backgroundColor = "red";
    col11.append(x);
  } else if (m.format("H") < m.format("11")) {
    x.style.backgroundColor = "green";
    col11.append(x);
  } else {
    x.style.backgroundColor = "silver";
    col11.append(x);
  }
  //Time at 12PM
  var timeat12 = m.format("12 [PM]").toString();
  time12.append(timeat12);

  var col12 = document.querySelector("#col12");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input12");
  if (timeat12 == m.format("h [PM]").toString()) {
    x.style.backgroundColor = "red";
    col12.append(x);
  } else if (m.format("H") < m.format("12")) {
    x.style.backgroundColor = "green";
    col12.append(x);
  } else {
    x.style.backgroundColor = "silver";
    col12.append(x);
  }
  //Time at 1PM
  var timeat1 = m.format("1 [PM]").toString();
  time1.append(timeat1);

  var col1 = document.querySelector("#col1");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input1");
  if (timeat1 == m.format("h [PM]").toString()) {
    x.style.backgroundColor = "red";
    col1.append(x);
  } else if (m.format("H") < m.format("13")) {
    x.style.backgroundColor = "green";
    col1.append(x);
  } else {
    x.style.backgroundColor = "silver";
    col1.append(x);
  }
  //Time at 2PM
  var timeat2 = m.format("2 [PM]").toString();
  time2.append(timeat2);

  var col2 = document.querySelector("#col2");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input2");
  if (timeat2 == m.format("h [PM]").toString()) {
    x.style.backgroundColor = "red";
    col2.append(x);
  } else if (m.format("H") < m.format("14")) {
    x.style.backgroundColor = "green";
    col2.append(x);
  } else {
    x.style.backgroundColor = "silver";
    col2.append(x);
  }
  //Time at 3PM
  var timeat3 = m.format("3 [PM]").toString();
  time3.append(timeat3);

  var col3 = document.querySelector("#col3");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input3");
  if (timeat3 == m.format("h [PM]").toString()) {
    x.style.backgroundColor = "red";
    col3.prepend(x);
  } else if (m.format("H") < m.format("15")) {
    x.style.backgroundColor = "green";
    col3.prepend(x);
  } else {
    x.style.backgroundColor = "silver";
    col3.prepend(x);
  }
  //Time at 4PM
  var timeat4 = m.format("4 [PM]").toString();
  time4.append(timeat4);

  var col4 = document.querySelector("#col4");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input4");
  if (timeat4 == m.format("h [PM]").toString()) {
    x.style.backgroundColor = "red";
    col4.prepend(x);
  } else if (m.format("H") < m.format("16")) {
    x.style.backgroundColor = "green";
    col4.prepend(x);
  } else {
    x.style.backgroundColor = "silver";
    col4.prepend(x);
  }
  //Time at 5
  var timeat5 = m.format("5 [PM]").toString();
  time5.append(timeat5);

  var col5 = document.querySelector("#col5");
  x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "input5");
  if (timeat5 == m.format("h [PM]").toString()) {
    x.style.backgroundColor = "red";
    col5.prepend(x);
  } else if (m.format("H") < m.format("17")) {
    x.style.backgroundColor = "green";
    col5.prepend(x);
  } else {
    x.style.backgroundColor = "silver";
    col5.prepend(x);
  }
}
calendar();
function getFromLocalStorage() {
  //5pm storage
  var savedEvent5 = localStorage.getItem("5:00pm");
  $(".input5").attr("value", savedEvent5);
  //4pm storage
  var savedEvent4 = localStorage.getItem("4:00pm");
  $(".input4").attr("value", savedEvent4);
  //3pm storage
  var savedEvent3 = localStorage.getItem("3:00pm");
  $(".input3").attr("value", savedEvent3);
  //2pm storage
  var savedEvent2 = localStorage.getItem("2:00pm");
  $(".input2").attr("value", savedEvent2);
  //1pm storage
  var savedEvent1 = localStorage.getItem("1:00pm");
  $(".input1").attr("value", savedEvent1);
  //12pm storage
  var savedEvent12 = localStorage.getItem("12:00pm");
  $(".input12").attr("value", savedEvent12);
  //11am storage
  var savedEvent11 = localStorage.getItem("11:00am");
  $(".input11").attr("value", savedEvent11);
  //10am storage
  var savedEvent10 = localStorage.getItem("10:00am");
  $(".input10").attr("value", savedEvent10);
  //9am storage
  var savedEvent9 = localStorage.getItem("9:00am");
  $(".input9").attr("value", savedEvent9);
  console.log(savedEvent9);
}
getFromLocalStorage();

$(".saveBtn5").click(function() {
  var event5 = $(".input5").val();
  localStorage.setItem("5:00pm", event5);
});
$(".saveBtn4").click(function() {
  var event4 = $(".input4").val();
  localStorage.setItem("4:00pm", event4);
});
$(".saveBtn3").click(function() {
  var event3 = $(".input3").val();
  localStorage.setItem("3:00pm", event3);
});
$(".saveBtn2").click(function() {
  var event2 = $(".input2").val();
  localStorage.setItem("2:00pm", event2);
});
$(".saveBtn1").click(function() {
  var event1 = $(".input1").val();
  localStorage.setItem("1:00pm", event1);
});
$(".saveBtn12").click(function() {
  var event12 = $(".input12").val();
  localStorage.setItem("12:00pm", event12);
});
$(".saveBtn11").click(function() {
  var event11 = $(".input11").val();
  localStorage.setItem("11:00am", event11);
});
$(".saveBtn10").click(function() {
  var event10 = $(".input10").val();
  localStorage.setItem("10:00am", event10);
});
$(".saveBtn9").click(function() {
  var event9 = $(".input9").val();
  localStorage.setItem("11:00am", event9);
});
