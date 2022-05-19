$('.nav-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('dropdown_active');   
});

$('.menu-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown_menu').toggleClass('dropdown_active');  
});
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();    
        } else {
        $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
});

var $slide = $('.imoge'),
    $slideGroup = $('.group'),
    $bullet = $('.bullet');
var slidesTotal = ($slide.length - 1),
    current = 0;
$bullet.first().addClass('current');
var clickSlide = function() {
  //stop auto sliding
  var slideIndex = $bullet.index($(this));
  updateIndex(slideIndex);
};
var updateIndex = function(currentSlide) {
  current = currentSlide;
  $bullet.removeClass('current');
  $bullet.eq(current).addClass('current');
  transition(current);
};
var transition = function(slidePosition) {
    $slideGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
};
$bullet.on( 'click', clickSlide);    



var $slide1 = $('.imoge1'),
    $slideGroup1 = $('.group1'),
    $bullet1 = $('.bullet1');
var slidesTotal1 = ($slide1.length - 1),
    current1 = 0;
$bullet1.first().addClass('current');
var clickSlide1 = function() {
  var slideIndex1 = $bullet1.index($(this));
  updateIndex1(slideIndex1);
};
var updateIndex1 = function(currentSlide1) {
  current1 = currentSlide1;
  $bullet1.removeClass('current');
  $bullet1.eq(current1).addClass('current');
  transition1(current1);
};
var transition1 = function(slidePosition1) {
    $slideGroup1.animate({
      'top': '-' + slidePosition1 + '00%'
    });
};
$bullet1.on( 'click', clickSlide1);    



var $slide2 = $('.imoge2'),
    $slideGroup2 = $('.group2'),
    $bullet2 = $('.bullet2');
var slidesTotal2 = ($slide2.length - 1),
    current2 = 0;
$bullet2.first().addClass('current');
var clickSlide2 = function() {
  var slideIndex2 = $bullet2.index($(this));
  updateIndex2(slideIndex2);
};
var updateIndex2 = function(currentSlide2) {
  current2 = currentSlide2;
  $bullet2.removeClass('current');
  $bullet2.eq(current2).addClass('current');
  transition2(current2);
};
var transition2 = function(slidePosition2) {
    $slideGroup2.animate({
      'top': '-' + slidePosition2 + '00%'
    });
};
$bullet2.on( 'click', clickSlide2); 



var $slide3 = $('.imoge3'),
    $slideGroup3 = $('.group3'),
    $bullet3 = $('.bullet3');
var slidesTotal3 = ($slide3.length - 1),
    current3 = 0;
$bullet3.first().addClass('current');
var clickSlide3 = function() {
  var slideIndex3 = $bullet3.index($(this));
  updateIndex3(slideIndex3);
};
var updateIndex3 = function(currentSlide3) {
  current3 = currentSlide3;
  $bullet3.removeClass('current');
  $bullet3.eq(current3).addClass('current');
  transition3(current3);
};
var transition3 = function(slidePosition3) {
    $slideGroup3.animate({
      'top': '-' + slidePosition3 + '00%'
    });
};
$bullet3.on( 'click', clickSlide3); 



var $slide4 = $('.imoge4'),
    $slideGroup4 = $('.group4'),
    $bullet4 = $('.bullet4');
var slidesTotal4 = ($slide4.length - 1),
    current4 = 0;
$bullet4.first().addClass('current');
var clickSlide4 = function() {
  var slideIndex4 = $bullet4.index($(this));
  updateIndex4(slideIndex4);
};
var updateIndex4 = function(currentSlide4) {
  current4 = currentSlide4;
  $bullet4.removeClass('current');
  $bullet4.eq(current4).addClass('current');
  transition4(current4);
};
var transition4 = function(slidePosition4) {
    $slideGroup4.animate({
      'top': '-' + slidePosition4 + '00%'
    });
};
$bullet4.on( 'click', clickSlide4); 