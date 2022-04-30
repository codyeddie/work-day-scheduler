var currentHour = ["9 AM", "10 AM","11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var timeBlocks = $(".container")  

// add curret date to page
var currentDate = $('#currentDay');
currentDate.textContent = moment().format('MMMM Do YYYY');

// creating and appending time blocks to the page 
var timeBlockGen = function() {
    for (var i = 0; i < currentHour.length; i++) {
      var timeBlockEl = $("<div>")
      var hourEl =$("<h2>")
      .text(currentHour[i])
      var textEl = $('<textarea>')
      .text('');
      var saveBtn = $('<button>')
      timeBlocks.append(timeBlockEl)
      timeBlockEl.append(hourEl)
      timeBlockEl.append(textEl)
      timeBlockEl.append(saveBtn)
    }
  };

  timeBlockGen()