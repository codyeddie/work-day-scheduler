var currentHour = ["9 AM", "10 AM","11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var timeBlocks = $(".container")  

// add curret date to page
$("#currentDay").text(moment().format('MMMM Do YYYY'));

// creating and appending time blocks to the page 
var timeBlockGen = function() {
    for (var i = 0; i < currentHour.length; i++) {
      var timeBlockEl = $("<div>")
      .addClass("row time-block")
      var hourEl =$("<h2>")
      .text(currentHour[i])
      .addClass("hour col 1")
      var textEl = $('<textarea>')
      $(textEl).attr("placeholder", "task")
      .text("")
      .addClass("col-8 description")
      var saveBtn = $('<button>')
      .text("Save Task")
      .addClass("col-1 saveBtn")
      timeBlocks.append(timeBlockEl)
      timeBlockEl.append(hourEl)
      timeBlockEl.append(textEl)
      timeBlockEl.append(saveBtn)
    }
  };

  timeBlockGen()