
// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits

    //regular expression from https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number

    var filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(txtCredit) {
    var a = document.getElementById(txtCredit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits

    //regular expression from https://www.regexpal.com/94512

    var filter = /^\d{4}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays

    if($('#mark').is(':checked')){
        if (date.getDay() == 0 || date.getDay() == 1 || date.getDay() == 5 || date.getDay() == 6)
        return [false];
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) == -1 ]
    }
    if($('#alicia').is(':checked')){
        if (date.getDay() == 0 || date.getDay() == 2 || date.getDay() == 7)
        return [false];
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) == -1 ]
    }
    if($('#jacob').is(':checked')){
        if (date.getDay() == 0 || date.getDay() == 7)
        return [false];
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) == -1 ]
    }
    
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phoneInput").on("change", function(){
        if (!validatePhone("phoneInput")){
            alert("Wrong format for phone");
            $("#phone").attr("placeholder","(xxx) xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#creditInput").on("change", function(){
        if (!validateCredit("creditInput")){
            alert("Wrong format for phone");
            $("#creditInput").attr("placeholder","xxxx-xxxx-xxxx-xxxx");
            $("#creditInput").addClass("error");
        }
        else {
            $("#creditInput").removeClass("error");
        }
    });


    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#creditInput").on("mouseenter", function(){
        $("#creditInput").addClass("showInput");
    });
    $("#creditInput").on("mouseleave", function(){
        $("#creditInput").removeClass("showInput");
    });

    $("#dateInput").on("mouseenter", function(){
        $("#dateInput").addClass("showInput");
    });
    $("#dateInput").on("mouseleave", function(){
        $("#dateInput").removeClass("showInput");
    });

    $("#nameInput").on("mouseenter", function(){
        $("#nameInput").addClass("showInput");
    });
    $("#nameInput").on("mouseleave", function(){
        $("#nameInput").removeClass("showInput");
    });

    $("#phoneInput").on("mouseenter", function(){
        $("#phoneInput").addClass("showInput");
    });
    $("#phoneInput").on("mouseleave", function(){
        $("#phoneInput").removeClass("showInput");
    });

  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#creditInput").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});