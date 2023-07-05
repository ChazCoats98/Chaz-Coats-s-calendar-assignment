//tells browser to wait until HTML is rendered before rendering jquery code
$(document).ready(function () {
  //sets dayjs time and date format and displays in header box
  var currTime = dayjs().format("DD/MM/YYYY HH:MM");
  var currHour =dayjs().format("HH");

  $("#currentDay").text(currTime);
  
  //creates an onclick event listener to save the user inputed text to local storage using the id of each time block as a key
  $(".saveBtn").on("click", function(){
    var Time = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();

   localStorage.setItem(Time, eventText);
  })

  //recalls local storage data for each time block and displays it in the corresponding text box
  $("#hour-09 .description").text(localStorage.getItem("hour-09"));
  $("#hour-10 .description").text(localStorage.getItem("hour-10"));
  $("#hour-11 .description").text(localStorage.getItem("hour-11"));
  $("#hour-12 .description").text(localStorage.getItem("hour-12"));
  $("#hour-13 .description").text(localStorage.getItem("hour-13"));
  $("#hour-14 .description").text(localStorage.getItem("hour-14"));
  $("#hour-15 .description").text(localStorage.getItem("hour-15"));
  $("#hour-16 .description").text(localStorage.getItem("hour-16"));
  $("#hour-17 .description").text(localStorage.getItem("hour-17"));

  //compares the id value of each time block to the current set time and updates its class accordingly 
  $(".time-block").each(function(){
    var eventTime = $(this).attr("id").split("-")[1];
    if (currHour == eventTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } else if (currHour > eventTime) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (currHour < eventTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("future");
    }
    //clears storage and refreshes page so that the callendar is empty 
    $("#reset").on("click", function(){
      localStorage.clear();
      location.reload();
    });
  });
});
