/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
 var dd;
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
	  
	  //var sheetData =  '{"rows":[["timestamp","email","name","extras","invite_code","Ucapan"],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:24 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:36:29 GMT","","mob",3,6022022,"wedding "],["Sun, 30 Jan 2022 00:38:06 GMT","","mob",3,6022022,"selamat pengantin baru"]]}';
	  var sheetData = '';
	  var FEED_URL = 'https://script.google.com/macros/s/AKfycbxxVscc-yyFE7U6_2zu8EZU1F9c2u95vfKsFTclcfbKq2wGONv-e2LX6harhc8-Dxg/exec';
	  $.get(FEED_URL, function (data) {
		  sheetData = data;
		  console.log(data);
		
		 var jsonData = JSON.parse(sheetData)
	  dd=jsonData;
	  var rows = jsonData.rows;
	  console.log(jsonData);
	  
	  //timestamp	email	name	extras	invite_code	Ucapan
	  var index_timestamp = 0;
	  var index_name=2;
	  var index_Ucapan=5;
	  
	  var html="<strong>";
	  for (let i = 1; i < rows.length; i++) {
		  console.log(dd.rows[i]);
		  if(dd.rows[i][index_Ucapan] != null && dd.rows[i][index_Ucapan].length > 5){
			  
			var rowOutput = dd.rows[i][index_Ucapan]  + " dari " +  dd.rows[i][index_name] +"<br>" ;
			html += rowOutput;
		  }
		  
		}
		html += "</strong>";
	  
                $('#timelineData').html(html);
				
	  });
	  
	 

})(jQuery);


/********************** RSVP Start **********************/
// https://blog.rampatra.com/wedding-website
$('#rsvp-form').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serialize();

    // $('#alert-wrapper').html(alert('info', '<strong>Just a sec!</strong> We are saving your details.'));
	
    $('#alert-wrapper').html('<strong>Just a sec!</strong> We are saving your details.');

    if (($('#invite_code').val()) !== '06022022'
        && ($('#invite_code').val()) !== '06022022') {
        // $('#alert-wrapper').html(alert('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
    } else {
		var url = 'https://script.google.com/macros/s/AKfycbwbO06pIS3Iv03Vx1lhDmE-ly_9SjOQB4WpTm04Rj7cJpVmRsnt3nBog-EqMx4shayD/exec';
        $.post(url, data)
            .done(function (data) {
                console.log("url");
                console.log(url);
                console.log("rsvp form data");
                console.log(data);
                if (data.result === "error") {
                    // $('#alert-wrapper').html(alert('danger', data.message));
                } else {
                    $('#alert-wrapper').html('');
                    // $('#rsvp-modal').modal('show');
                }
				
                    $('#alert-wrapper').html('Details saved');
            })
            .fail(function (data) {
                console.log(data);
                // $('#alert-wrapper').html(alert('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
				
                $('#alert-wrapper').html('<strong>Sorry!</strong> There is some issue with the server. ');
            });
    }
});

/********************** RSVP End **********************/

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    // console.log('Shaadi me zaroor aana');
});

/* // Set the date we're counting down to
var countDownDate = new Date("Nov 29, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    // document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000); */

// being a bit cool :p  
// var styles = [
    // 'background: linear-gradient(#D33106, #571402)'
    // , 'border: 4px solid #3E0E02'
    // , 'color: white'
    // , 'display: block'
    // , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    // , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    // , 'line-height: 40px'
    // , 'text-align: center'
    // , 'font-weight: bold'
    // , 'font-size: 32px'
// ].join(';');

// var styles1 = [
    // 'color: #FF6C37'
    // , 'display: block'
    // , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    // , 'line-height: 40px'
    // , 'font-weight: bold'
    // , 'font-size: 32px'
// ].join(';');

// var styles2 = [
    // 'color: teal'
    // , 'display: block'
    // , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    // , 'line-height: 40px'
    // , 'font-weight: bold'
    // , 'font-size: 32px'
// ].join(';');

// console.log('\n\n%c SAVE THE DATE: 29th Nov, 2020!', styles);

// console.log('%cYour presence is requested!%c\n\nRegards: Vinit Shahdeo', styles1, styles2);

// console.log(
    // `%cShaadi me zaroor aana!\n\n`,
    // 'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
// )
