import $ from "jquery";
import Typewriter from 'typewriter-effect/dist/core';

function gradient_effect(elem){
  document.querySelector(elem).childNodes.forEach(function(e){
    e.style.pointerEvents = "none";
  })

  document.querySelector(elem).onmousemove = (e) => {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    document.querySelector(elem).style.setProperty('--x', `${ x }px`);
    document.querySelector(elem).style.setProperty('--y', `${ y }px`);
  }
}

gradient_effect("#join-us");
gradient_effect(".counter-item");



function counter(){
  $('.count-number').each(function(){
    let countTo = $(this).attr("data-count");
    let $this = $(this);
    console.log(countTo);
    $({ countNum : $this.text() }).animate({
      countNum: countTo
    },{
      duration: 8000,
      easing: 'linear',
      step: function(){
        $this.text(Math.floor(this.countNum))
      },
      complete: function(){
        $this.text(this.countNum)
      }
    })
  })
}

var typewriter = new Typewriter('#type-area', {
  loop: false
});

let count = true;

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 600 && count) {
    counter();     
    count = false; 
  }
  if ($(window).scrollTop() < 600) {
    $('.site-navigation').removeClass('sticky_header');
  } else {
      $('.site-navigation').addClass('sticky_header');
  }
});

typewriter.typeString('The Speakers')
  .pauseFor(2500)
  .deleteChars(8)
  .typeString('Tech')
  .pauseFor(4800)
  .deleteChars(4)
  .typeString('Fun')
  .pauseFor(4800)
  .deleteAll()
  .typeString('Largest Student Entrepreneurship Summit ')
  .pauseFor(2500)
  .start()
  .callFunction(function(){
    // counter();
    $('body').css({'overflow':'visible'});
    $('html, body').animate({
      scrollTop: 667
    }, 1000);
    typewriter.stop();
    document.getElementById("type-area").style.display="none";
    document.getElementById("info-container").style.display="block";

  })



let carousal_index = 0;
carousal();

function carousal(){
  let i = 0;
  let slides = document.getElementsByClassName("slide");
  for (i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  carousal_index++;
  if(carousal_index>slides.length){carousal_index=1}
  slides[carousal_index-1].style.display="block";
  setTimeout(carousal, 6000);
}