
/* responsive slide call, turns off when screen width < 800 */

  

$(function() {




var mobile_bg = '\
			<li>\
<span data-picture data-alt="">\
			<span data-src="img/background/ben/bg8-768.jpg"></span>\
			<span data-src="img/background/ben/bg8-640.jpg" data-media="(orientation:portrait) and (min-width: 1px) and (max-width: 640px)"></span>\
			<span data-src="img/background/ben/bg8-768.jpg" data-media="(orientation:portrait) and (min-width: 641px)"></span>\
			<span data-src="img/background/ben/bg8-960.jpg" data-media="(orientation:landscape) and (min-width: 769px) and (max-width:960px)"></span>\
			<span data-src="img/background/ben/bg8-1024.jpg" data-media="(orientation:landscape) and (min-width: 961px) and (max-width:1024px) "></span>\
			<span data-src="img/background/ben/bg8-1600.jpg" data-media="(orientation:landscape) and (min-width: 1025px)"></span>\
				<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->\
			<noscript><img src="img/background/bg8-1600.jpg" alt=""></noscript>\
		</span>\
  </li>\
  </ul>\
  ';

  
  
var desktop_bg = '\
 <li>\
<span data-picture data-alt="">\
			<span data-src="img/background/ben/bg7-768.jpg"></span>\
			<span data-src="img/background/ben/bg7-640.jpg" data-media="(orientation:portrait) and (min-width: 1px) and (max-width: 640px)"></span>\
			<span data-src="img/background/ben/bg7-768.jpg" data-media="(orientation:portrait) and (min-width: 641px)"></span>\
			<span data-src="img/background/ben/bg7-960.jpg" data-media="(orientation:landscape) and (min-width: 769px) and (max-width:960px)"></span>\
			<span data-src="img/background/ben/bg7-1024.jpg" data-media="(orientation:landscape) and (min-width: 961px) and (max-width:1024px) "></span>\
			<span data-src="img/background/ben/bg7-1600.jpg" data-media="(orientation:landscape) and (min-width: 1025px)"></span>\
				<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->\
			<noscript><img src="img/background/bg7-1600.jpg" alt=""></noscript>\
		</span>\
  </li>\
  <li>\
<span data-picture data-alt="">\
			<span data-src="img/background/ben/bg11-768.jpg"></span>\
			<span data-src="img/background/ben/bg11-640.jpg" data-media="(orientation:portrait) and (min-width: 1px) and (max-width: 640px)"></span>\
			<span data-src="img/background/ben/bg11-768.jpg" data-media="(orientation:portrait) and (min-width: 641px)"></span>\
			<span data-src="img/background/ben/bg11-960.jpg" data-media="(orientation:landscape) and (min-width: 769px) and (max-width:960px)"></span>\
			<span data-src="img/background/ben/bg11-1024.jpg" data-media="(orientation:landscape) and (min-width: 961px) and (max-width:1024px) "></span>\
			<span data-src="img/background/ben/bg11-1600.jpg" data-media="(orientation:landscape) and (min-width: 1025px)"></span>\
				<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->\
			<noscript><img src="img/background/bg11-1600.jpg" alt=""></noscript>\
		</span>\
  </li>\
  <li>\
<span data-picture data-alt="">\
			<span data-src="img/background/ben/bg10-768.jpg"></span>\
			<span data-src="img/background/ben/bg10-640.jpg" data-media="(orientation:portrait) and (min-width: 1px) and (max-width: 640px)"></span>\
			<span data-src="img/background/ben/bg10-768.jpg" data-media="(orientation:portrait) and (min-width: 641px)"></span>\
			<span data-src="img/background/ben/bg10-960.jpg" data-media="(orientation:landscape) and (min-width: 769px) and (max-width:960px)"></span>\
			<span data-src="img/background/ben/bg10-1024.jpg" data-media="(orientation:landscape) and (min-width: 961px) and (max-width:1024px) "></span>\
			<span data-src="img/background/ben/bg10-1600.jpg" data-media="(orientation:landscape) and (min-width: 1025px)"></span>\
				<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->\
			<noscript><img src="img/background/bg10-1600.jpg" alt=""></noscript>\
		</span>\
  </li>\
  <li>\
<span data-picture data-alt="">\
			<span data-src="img/background/ben/bg4-768.jpg"></span>\
			<span data-src="img/background/ben/bg4-640.jpg" data-media="(orientation:portrait) and (min-width: 1px) and (max-width: 640px)"></span>\
			<span data-src="img/background/ben/bg4-768.jpg" data-media="(orientation:portrait) and (min-width: 641px)"></span>\
			<span data-src="img/background/ben/bg4-960.jpg" data-media="(orientation:landscape) and (min-width: 769px) and (max-width:960px)"></span>\
			<span data-src="img/background/ben/bg4-1024.jpg" data-media="(orientation:landscape) and (min-width: 961px) and (max-width:1024px) "></span>\
			<span data-src="img/background/ben/bg4-1600.jpg" data-media="(orientation:landscape) and (min-width: 1025px)"></span>\
				<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->\
			<noscript><img src="img/background/bg4-1600.jpg" alt=""></noscript>\
		</span>\
  </li>\
  <li>\
<span data-picture data-alt="">\
			<span data-src="img/background/ben/bg9-768.jpg"></span>\
			<span data-src="img/background/ben/bg9-640.jpg" data-media="(orientation:portrait) and (min-width: 1px) and (max-width: 640px)"></span>\
			<span data-src="img/background/ben/bg9-768.jpg" data-media="(orientation:portrait) and (min-width: 641px)"></span>\
			<span data-src="img/background/ben/bg9-960.jpg" data-media="(orientation:landscape) and (min-width: 769px) and (max-width:960px)"></span>\
			<span data-src="img/background/ben/bg9-1024.jpg" data-media="(orientation:landscape) and (min-width: 961px) and (max-width:1024px) "></span>\
			<span data-src="img/background/ben/bg9-1600.jpg" data-media="(orientation:landscape) and (min-width: 1025px)"></span>\
				<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->\
			<noscript><img src="img/background/bg9-1600.jpg" alt=""></noscript>\
		</span>\
  </li>\
  <li>\
<span data-picture data-alt="">\
			<span data-src="img/background/ben/bg8-768.jpg"></span>\
			<span data-src="img/background/ben/bg8-640.jpg" data-media="(orientation:portrait) and (min-width: 1px) and (max-width: 640px)"></span>\
			<span data-src="img/background/ben/bg8-768.jpg" data-media="(orientation:portrait) and (min-width: 641px)"></span>\
			<span data-src="img/background/ben/bg8-960.jpg" data-media="(orientation:landscape) and (min-width: 769px) and (max-width:960px)"></span>\
			<span data-src="img/background/ben/bg8-1024.jpg" data-media="(orientation:landscape) and (min-width: 961px) and (max-width:1024px) "></span>\
			<span data-src="img/background/ben/bg8-1600.jpg" data-media="(orientation:landscape) and (min-width: 1025px)"></span>\
				<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->\
			<noscript><img src="img/background/bg8-1600.jpg" alt=""></noscript>\
		</span>\
  </li>\
  ';
  
		if($(window).width() <= 800){
  	 $(".rslides").append(mobile_bg); 
	 }
	else{
	$(".rslides").append(desktop_bg);
	}

	$("#slider1").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 700,
        timeout: 3000,
        namespace: "centered-btns" });


		}); // end responsive slides plugin call

/*
 <li>\
<span data-picture data-alt="">\
			<span data-src="img/background/ben/bg3-768.png"></span>\
			<span data-src="img/background/ben/bg3-640.jpg" data-media="(orientation:portrait) and (min-width: 1px) and (max-width: 640px)"></span>\
			<span data-src="img/background/ben/bg3-768.png" data-media="(orientation:portrait) and (min-width: 641px)"></span>\
			<span data-src="img/background/ben/bg3-960.jpg" data-media="(orientation:landscape) and (min-width: 769px) and (max-width:960px)"></span>\
			<span data-src="img/background/ben/bg3-1024.jpg" data-media="(orientation:landscape) and (min-width: 961px) and (max-width:1024px) "></span>\
			<span data-src="img/background/ben/bg3-1600.jpg" data-media="(orientation:landscape) and (min-width: 1025px)"></span>\
				<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->\
			<noscript><img src="img/background/bg3-1600.jpg" alt=""></noscript>\
		</span>\
  </li>\ */