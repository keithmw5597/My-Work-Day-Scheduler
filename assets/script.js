$(document).ready(function() {
    // gets current day and time
    var today = moment();
    today.format("MMMM D YYYY h:mm;ss a")
    let currentDay = today._d
    // displays current day and time
    $('#currentDay').text(currentDay)
    console.log(currentDay)

let currentHour = moment().hours()


// gets notes from local storage
$('#09note').val(localStorage.getItem('09note'))
$('#10note').val(localStorage.getItem('10note'))
$('#11note').val(localStorage.getItem('11note'))
$('#12note').val(localStorage.getItem('12note'))
$('#01note').val(localStorage.getItem('01note'))
$('#02note').val(localStorage.getItem('02note'))
$('#03note').val(localStorage.getItem('03note'))
$('#04note').val(localStorage.getItem('04note'))
$('#05note').val(localStorage.getItem('05note'))





if (currentHour < 9) {
   $('#hour9').addClass('future') 
}
// handles the color of textareas by time
if (currentHour === 9) {
    $('#hour9').addClass('present')
    $('#hour10').addClass('future')
    $('#hour11').addClass('future')
    $('#hour12').addClass('future')
    $('#hour1').addClass('future')
    $('#hour2').addClass('future')
    $('#hour3').addClass('future')
    $('#hour4').addClass('future')
    $('#hour5').addClass('future')
}

if (currentHour === 10) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('present')
    $('#hour11').addClass('future')
    $('#hour12').addClass('future')
    $('#hour1').addClass('future')
    $('#hour2').addClass('future')
    $('#hour3').addClass('future')
    $('#hour4').addClass('future')
    $('#hour5').addClass('future')
}

if (currentHour === 11) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('past')
    $('#hour11').addClass('present')
    $('#hour12').addClass('future')
    $('#hour1').addClass('future')
    $('#hour2').addClass('future')
    $('#hour3').addClass('future')
    $('#hour4').addClass('future')
    $('#hour5').addClass('future')
}
if (currentHour === 12) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('past')
    $('#hour11').addClass('past')
    $('#hour12').addClass('present')
    $('#hour1').addClass('future')
    $('#hour2').addClass('future')
    $('#hour3').addClass('future')
    $('#hour4').addClass('future')
    $('#hour5').addClass('future')
}

if (currentHour === 13) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('past')
    $('#hour11').addClass('past')
    $('#hour12').addClass('past')
    $('#hour1').addClass('present')
    $('#hour2').addClass('future')
    $('#hour3').addClass('future')
    $('#hour4').addClass('future')
    $('#hour5').addClass('future')
}

if (currentHour === 14) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('past')
    $('#hour11').addClass('past')
    $('#hour12').addClass('past')
    $('#hour1').addClass('past')
    $('#hour2').addClass('present')
    $('#hour3').addClass('future')
    $('#hour4').addClass('future')
    $('#hour5').addClass('future')
}

if (currentHour === 15) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('past')
    $('#hour11').addClass('past')
    $('#hour12').addClass('past')
    $('#hour1').addClass('past')
    $('#hour2').addClass('past')
    $('#hour3').addClass('present')
    $('#hour4').addClass('future')
    $('#hour5').addClass('future')
}

if (currentHour === 16) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('past')
    $('#hour11').addClass('past')
    $('#hour12').addClass('past')
    $('#hour1').addClass('past')
    $('#hour2').addClass('past')
    $('#hour3').addClass('past')
    $('#hour4').addClass('present')
    $('#hour5').addClass('future')
}

if (currentHour === 17) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('past')
    $('#hour11').addClass('past')
    $('#hour12').addClass('past')
    $('#hour1').addClass('past')
    $('#hour2').addClass('past')
    $('#hour3').addClass('past')
    $('#hour4').addClass('past')
    $('#hour5').addClass('present')
}

if (currentHour > 17) {
    $('#hour9').addClass('past')
    $('#hour10').addClass('past')
    $('#hour11').addClass('past')
    $('#hour12').addClass('past')
    $('#hour1').addClass('past')
    $('#hour2').addClass('past')
    $('#hour3').addClass('past')
    $('#hour4').addClass('past')
    $('#hour5').addClass('past')
}
    // let time = currentHour

    // if (time > 12) {
    //     time = time - 12;
    // };

    // console.log(time);
    // var hour = $('')

    // if (time = )

    // event listener
    $('#times').on('click', event => {
        //click event only happens on buttons
        if (event.target.tagName == "BUTTON") {
            //gets id of button clicked
            var eventTarget = event.target.id;
            //gets first two charactors of id
            var firstChar = eventTarget.substr(0, 2);
            
            console.log(firstChar);
            //targets note with the same number as the button clicked
            var note = $("#" + firstChar + "note").val();
            console.log(note)
            // saves note to local storage
            localStorage.setItem( firstChar + "note", note)
        }
    }
    );
    // auto refreshes the page
    setInterval(function() {
        window.location.reload();
    }, 300000);
});
