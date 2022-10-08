$(function(){
    smallSlider();  
  })();
  
  function smallSlider(){
    // the slider stylesheet
    $('.small-img-slider').css({
        'width'    : '200px',
        'height'   : '200px',
        'overflow' : 'hidden',
        'position' : 'relative'
    });  
    $('.small-img-slider .inner-s').css({
      'position' : 'absolute', 
      'left'     : '0'
    });
    
    // the slider variables
    var len  = $('.inner-s a').length;
    var slider_width = 200 * len;
    var counter = 0;
    var end = (slider_width * -1) + 200;  
    $('.small-img-slider .inner-s').css('width', slider_width+'px');
    
    // the slider controler
      $('.small-img-slider').mouseenter(function(){
      $('.prev-control, .next-control').fadeIn();
    }).mouseleave(function(){
      $('.prev-control, .next-control').fadeOut();
    });
    $('.next-control').on('click', function(){
      if(counter != 0){
        $('.small-img-slider .inner-s').animate({'left' : counter+'px'});
      }else{
         $('.small-img-slider .inner-s').animate({'left' : '0px'});
      }
     });
    
     $('.prev-control').on('click', function(){
        alert('in progress...');
       /*if(counter == 0){
        $('.small-img-slider .inner-s').animate({'left' : end+'px'});
        counter = end;
      }else{
        counter += 200;
         $('.small-img-slider .inner-s').animate({'left' : counter+'px'});
      }*/
     });
    
    // the slider animation
    setInterval(function(){
       $('.small-img-slider .inner-s').animate({'left' : counter+'px'});
        if(counter == end){
          counter = 0;
        }else{
          counter-= 200;
        } 
      },2500);
  }