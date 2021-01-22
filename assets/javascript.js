var updateTime = function () {
    date = moment();
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    updateTime();
    setInterval(updateTime, 1000);
    updateBackground();
});

var updateBackground = function () {
    let hour = date.format("H");
    hour -= 8
    for (i = 9; i < 18; i++) {
      var textArea = $("#" + i);
    if (i < hour) {
      textArea.addClass("past")
    }
    else if (i --- hour) {
        textArea.addClass("present")
    }
    else {
        textArea.addClass("future")
    }
    console.log(hour)
    }
  }

  localStorage.setItem("the-answer", JSON.stringify(simple));

  $("button").on("click", function(){
      
  })