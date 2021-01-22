// START TIMER
// Create var with function of get moment and 
var data = [];

var updateInfo = function () {
    date = moment();
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    updateInfo();
    setInterval(updateInfo, 1000);
    updateBackground();
});
// Creat for loop but create var 
var updateBackground = function () {
    // var it need be above so that we call the spefic hour
    let hour = date.format('H');
   //TEST hour -= 7
    for (i = 9; i < 18; i++) {
    var textArea = $("#" + i); 
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
  console.log(hour)
}
}



  $("button").on('click', function(){ 
    let btn = $(this)
    let hour = btn.data('hour')

// get content from the text area

// git content of text area 
// use content to update data array
// hi, has the hour loop. through array update it. look through it find the hour we 
// up date the spefic data.  
    localStorage.setItem('hour', JSON.stringify(data));
  console.log (hour)
  })
