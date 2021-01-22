
var data = JSON.parse(localStorage.getItem('array')) || [];

// clock
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
  // console.log(hour) //
}
}



$("button").on('click', function(event){ 
  event.preventDefault();
  
  let btn = $(this)
  let hour = btn.data('hour')
  //console.log ($(this).data('hour'))
  let content = $("#" + hour).val()

// is content for the specified content/hour
    var duplicate = false
// check contnet   
for (let i= 0; i < data.length; i++) {
  const element = data[i];
// seting the content setting equal 
 if (element['hour'] == hour) {
      element['content'] = content; //update
      duplicate = true; 
  // console.log("duplicate", "found")
  } 
} 
if ( !duplicate ){ 
  var obt = {'hour': hour, 'content': content } //  console.log(hour, content)
   data.push(obt) 
}  //console.log (data)  
// // hi, has the hour loop. through array update it. look through it find the hour we 
// // up date the spefic data.  


localStorage.setItem('array', JSON.stringify(data));

alert (localStorage.getItem('array'));



})  // git content from the text area

// local storage .get itmen 
// call array data
// .ready