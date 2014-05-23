

$(function () {


  var allPanels = $('.accordion > .item').hide();
    
  $('.accordion > .heading ').click(function() {

      $target =  $(this).next();
     

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();

         $('html, body').animate({
        scrollTop: $(this).offset()
    });


      }
	  else if($target.hasClass('active')){
	  $target.removeClass('active').slideUp();
	  }
      
    return false;
  });

  
  $('.accordion > .item > a.clickme').click(function(){
  
  $target = $(this).parent();
  
  if ($target.hasClass('active')){
  $target.removeClass('active').slideUp();
  }
  else{return false;}
  });
  


  
});




