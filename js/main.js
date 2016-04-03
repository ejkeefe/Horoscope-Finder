var month;
var day;
var sign;



//assigns month and day variables on submit
$( "input[type='submit']" ).on( "click", function(e) {
 
 	e.preventDefault();
  
  month = $( "#dropdown" ).val();

  day = $( "#day" ).val();

  console.log("var month="+ month);
  console.log("var day="+ day);

  $("form").hide();




  //if statements to assign 'sign' variable
  if (month == "mar" && day >= 21 || month == "apr" && day <= 19){
        sign = "aries";
      }

    else if (month == "apr" && day >= 20 || month == "may" && day <= 20){
        sign = "taurus";
    }

    else if (month == "may" && day >= 21 || month == "june" && day <= 21){
        sign = "gemini";
    }

    else if (month == "june" && day >= 22 || month == "july" && day <= 22){
        sign = "cancer";
    }

    else if (month == "july" && day >= 23 || month == "aug" && day <= 22){
        sign = "leo";
    }

    else if (month == "aug" && day >= 23 || month == "sep" && day <= 22){
        sign = "virgo";
    }

    else if (month == "sep" && day >= 23 || month == "oct" && day <= 22){
        sign = "libra";
    }

    else if (month == "oct" && day >= 23 || month == "nov" && day <= 22){
        sign = "scorpio";
    }

    else if (month == "nov" && day >= 23 || month == "dec" && day <= 21){
        sign = "sagittarius";
    }

    else if (month == "dec" && day >= 22 || month == "jan" && day <= 19){
        sign = "capricorn";
    }

    else if (month == "jan" && day >= 20 || month == "feb" && day <= 18){
        sign = "aquarius";
    }

    else if (month == "feb" && day >= 19 || month == "mar" && day <= 20){
        sign = "pisces";
    }


  console.log("var sign="+sign);

// displays the constellation div 
  $("#constellation").show();

// hides all of the images
  $("img").hide();

// shows the image with the id that matches the sign variable
  $("#" + sign).show();

// changes the header h1 text 
  $("header").html("<h1><i class='fa fa-moon-o'></i>" +" " +sign+ " "+"<i class='fa fa-sun-o'></i></h1>");

//shows the descriptions div
  $("#descriptions").show();
  
//hides all of the sign description divs
   $("#descriptions > div").hide();

// shows the description with the id that matches the sign variable
  $("#" + sign+"Des").show();

});


