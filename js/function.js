$(function(){

  const $gnb = $('#wrap > header > .container > nav > .gnb');
  const $lnb = $gnb.find('.lnb');
  const $bg_lnb = $('.bg_lnb');

  $gnb.on('mouseenter',function(){
    $bg_lnb.stop().slideDown(60);
    $lnb.stop().slideDown(60);
  });

  $gnb.on('mouseleave',function(){
    $lnb.stop().slideUp(60);
    $bg_lnb.stop().slideUp(60);
  });

  $bg_lnb.on('mouseover',function(){
    $gnb.trigger('mouseover');
  });

  $bg_lnb.on('mouseout',function(){
    $gnb.trigger('mouseout');
  });
});

// main visual slides
$(function(){
  
  const $container = $('.visual_slides > .slide-container');
  const $indicator = $('.visual_bg > p > a');
  const $left = $('.visual_bg > p > .left');
  const $right = $('.visual_bg > p > .right');
  
  let nowIdx = 0;
  

  $left.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $indicator.index(this);

    if(nowIdx < 4){
      nowIdx--;
    }else{
      nowIdx = 0;
    }

    $container.stop().animate({
      left: -1900 * 4
    },400,function(){
      $('.visual_slides > .slide-container > p:last-child').prependTo($container);
      $container.css({left: -1900  * 5});
    });

  });

  $right.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $indicator.index(this);

    if(nowIdx < 4){
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    $container.stop().animate({
      left: -1900 * 6
    },400,function(){
      $('.visual_slides > .slide-container > p:first-child').appendTo($container);
      $container.css({left: -1900  * 5});
    });

  });

  //recommend slides

  const $rpBanner = $('.rp_banner');
  const $rpDetail = $('.rp_detail');
  const $btnPrev = $('.prev');
  const $btnNext = $('.next');
  const $rpText = $('.rp_script > ul > li');
  
  $rpText.eq(nowIdx).show().siblings().hide();

  //pagination에 prev

  $btnPrev.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx>0){
      nowIdx--;
    }else {
      nowIdx=3;
    }

    
    $rpBanner.stop().animate({
      left: '-300%'
    },300,function(){
      $('.rp_container > .rp_banner > li').last().prependTo($rpBanner);
      $rpBanner.css({left:'-400%'});
    });
    
    $rpDetail.stop().animate({
      left: '-300%'
    },300,function(){
      $('.rp_detail > p').last().prependTo($rpDetail);
      $rpDetail.css({left:'-400%'});
    });

    $rpText.eq(nowIdx).show().siblings().hide();
  });

  //pagination에 next

  $btnNext.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx < 3){
      nowIdx++;
    }else {
      nowIdx= 0;
    }
    
    $rpBanner.stop().animate({
      left: '-500%'
    },300,function(){
      $('.rp_container > .rp_banner > li').first().appendTo($rpBanner);
      $rpBanner.css({left:'-400%'});
    });
    
    $rpDetail.stop().animate({
      left: '-500%'
    },300,function(){
      $('.rp_detail > p').first().appendTo($rpDetail);
      $rpDetail.css({left:'-400%'});
    });
    $rpText.eq(nowIdx).show().siblings().hide();
  });
});

//section event 의 article event_1 슬라이드 부문
$(function(){

  const $eventPrev = $('.eventprev');
  const $eventNext = $('.eventnext');
  const $noiseCancel = $('.kindoftwo > .container_noise > .noisecancel > p');

  let nowIdx = 0;

  $noiseCancel.eq(nowIdx).show().siblings().hide();

  const fadeFn = function(){
    $noiseCancel.eq(nowIdx).fadeIn(300).siblings().fadeOut(300);
  };

  $eventPrev.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx = 1
    }

    fadeFn();
    
  });

  $eventNext.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx < 1){
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    fadeFn();
  });

  

});

