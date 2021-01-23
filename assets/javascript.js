// Global variable to hold task data
var taskData = [];

// clock
var updateInfo = function () {
    date = moment();
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

var getAndUpdateData = function () {
  // Check for info local storage
  if (localStorage.getItem('taskData')) {
    taskData = JSON.parse(localStorage.getItem('taskData'));

    for (let i= 0; i < taskData.length; i++) {
      for (j= 9; j < 18; j++) {
        if (taskData [i].hour == j) {
          $("#" + j) .val(taskData [i].content)
        }
      }
    }

  }
}

$(document).ready(function(){
    datetime = $('#currentDay')
    updateInfo();
    setInterval(updateInfo, 1000);
    updateBackground();
    getAndUpdateData();
});

// var for desription box text area color past, present, future
// background color changes as the time advances throught the day 
var updateBackground = function () {
  // call the specific hour
  let hour = parseInt(date.format('H'));
  //TEST hour -= 7
  for (i = 9; i < 18; i++) {
    var textArea = $("#" + i); 
  // classes for past, present, future come from CSS
  // condition 1
    if (i < hour) {
        textArea.addClass("past") 
    }
  // conditon 2 
    else if (i === hour) {
        textArea.addClass("present")
    }
  // condition 3
    else {
        textArea.addClass("future")

    }
  }
}

/*
function renderDescription(data) {
  $('array').empty();
*/

$(document).on('click', "button", function(event){ 
  event.preventDefault();
  let btn = $(this)
  let hour = btn.data('hour')
  let content = $("#" + hour).val()

    var exists = false
  // loop through array  
  for (let i= 0; i < taskData.length; i++) {
    const element = taskData[i];
    //  check for an existing record 
    if (element['hour'] == hour) {
        //Update the content of the existing record
        element['content'] = content; //update
        exists = true;
        console.log("record exists")
        // end the for loop
        break; 
    } 
  } 
  if ( !exists ){ 
    var obt = {'hour': hour, 'content': content } //  console.log(hour, content)
    taskData.push(obt) 
  }  
  console.log (taskData)  

  localStorage.setItem('taskData', JSON.stringify(taskData));
});

