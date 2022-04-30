// create global variables to use in functions 
var currentHour = ["9 AM", "10 AM","11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var timeBlocks = $(".container") 
var savedTask = {}
var tasks = {} 

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

        //create an on click event for save button that will save tasks to local storage 
        saveBtn.click(function(t){
            console.log("click");
            var taskName = t.target.previousElementSibling.value
            var taskHour = $(this).siblings(".hour").text()
            var savedTask =  {
              time: taskHour,
              name: taskName
            }
            tasks[savedTask.time] = savedTask.name
            localStorage.setItem("Tasks", JSON.stringify(tasks));
        });
    }
};

timeBlockGen()


//placing items from local storage into the textblock
var appendTasks = function(){
    $.each(tasks, function(key, value){
      var hour = key;
      var taskText = value;
      var time = $('.time-block').find(".hour").filter(function(){
        return $(this).text() === hour
      })
      var updateName = time.siblings('.description')
      updateName.text(taskText)
    })
  }

// loading the items from local storage
var loadTasks = function(){
    tasks = JSON.parse(localStorage.getItem('Tasks'))
    if (!tasks) {
      tasks = {}
    } 
   appendTasks()
  }
  loadTasks();