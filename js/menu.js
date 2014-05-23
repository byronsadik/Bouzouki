
	
	
/*	$(function() {
	
	var menuOn=false;

	$(window).swipe( {
	swipeLeft:function(event, direction, distance, duration, fingerCount) {
	
		if (menuOn==false){
	//	$('#blackbar').animate({'height':'100%'}, 'slow');
		$('#swipenav').animate({'bottom':'30%'}, 'slow');
		$('#swipeprompt').css({'display':'none'});
		menuOn=true;
		}
			
		else if(menuOn==true){
	//	$('#blackbar').animate({'height': barHeight}, 'slow');
		$('#swipenav').animate({'bottom':'-600px' }, 'slow'); 
		$('#swipeprompt').css({'display':'block'});
		menuOn=false;
		}
		
		},
		
		swipeRight:function(event, direction, distance, duration, fingerCount) {
	
		if (menuOn==false){
	//	$('#blackbar').animate({'height':'100%'}, 'slow');
		$('#swipenav').animate({'bottom':'30%'}, 'slow');
		$('#swipeprompt').css({'display':'none'});
		menuOn=true;
		}
			
		else if(menuOn==true){
	//	$('#blackbar').animate({'height': barHeight}, 'slow');
		$('#swipenav').animate({'bottom':'-600px' }, 'slow'); 
		$('#swipeprompt').css({'display':'block'});
		menuOn=false;
		}
		
		}
		
	});	  
});
 */

$(function() {
	var menuOn=false;

	$('#hamburger').click(function() {
	
		if (menuOn==false){
	//	$('#blackbar').animate({'height':'100%'}, 'slow');
		$('#swipenav').animate({'bottom':'30%'}, 'slow');
		$('#swipeprompt').css({'display':'none'});
		menuOn=true;
		}
			
		else if(menuOn==true){
	//	$('#blackbar').animate({'height': barHeight}, 'slow');
		$('#swipenav').animate({'bottom':'-600px' }, 'slow'); 
		$('#swipeprompt').css({'display':'block'});
		menuOn=false;
		}
		
		
		
	});	  
		
	});	  




