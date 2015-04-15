$(function(){
  $('#triangle').fadeIn(2000);
  $('#square').slideDown(2000);
  $('#circle').slideDown(2000);
  $('#rounded-rectangle').fadeIn(2000);
  $('.shape').css('display', 'inline-block');
//  changed color
    $('li').css('color', '#3f7cac');
//  to fade out the triangle using the 'this' keyword  
    $('#triangle').click(
    function(){
        $(this).fadeOut(2000);    
    });
//    Change color on mouseenter
    $('#square').mouseenter(function(){
        $(this).css('background-color', '#e2f89c')
    });
    $('#square').mouseleave(function(){
        $(this).css('background-color', 'green')
    });
//   make circle bigger 
    $('#circle').mouseenter(function(){
        $(this).animate({height: '+=100px',width: '+=100px'},500)
    });
    $('#circle').mouseleave(function(){
        $(this).animate({height: '-=100px',width: '-=100px'},500)
    });
    
    $('#rounded-rectangle').mouseenter(function(){
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        
        var randomColor = 'rgb(' + red +', ' + green +', ' + blue + ')'
        $(this).animate({"background-color": randomColor},50);
    });
    $('#rounded-rectangle').rotate({
        
        bind:
        {
            mouseover : function() {              
                $(this).rotate({animateTo:360})                       
            },
            mouseout : function() {                
                $(this).rotate({animateTo:0})                
            }
        }
    });
    
    
    
    
    
    
});

