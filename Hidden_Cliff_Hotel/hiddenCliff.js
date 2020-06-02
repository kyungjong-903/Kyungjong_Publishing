$(document).ready(function(){

    // header 시작 //
    var gnbOffset = $('.headerWrap>.gnb-Box').offset().top;
    var footerOffset = $('#footer').offset().top - 100;

    $(window).on('scroll',function(){
        var widdowOffset = $(window).scrollTop();

        if (widdowOffset >= gnbOffset) {
            $('.headerWrap>.gnb-Box').css({'position':'fixed', 'top':'0', 'opacity': '0.9'})
        }
        else {
            $('.headerWrap>.gnb-Box').css({'position':'absolute','top':'115px', 'opacity': '1'})
        }
            
    });

    $('.headerWrap>.gnb-Box>.menu>.footer_direct>div').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({scrollTop : footerOffset});

    })
    $('.headerWrap>.gnb-Box>.menu>li').on('mouseover', function(){
        $('.headerWrap>.gnb-Box').height('100px');
        $(this).children('a').css({'border-bottom' : '2px solid #000'});
        $(this).children('ul').css({'opacity':'1','pointer-events':' auto'});
    });

    $('.headerWrap>.gnb-Box>.menu>li').on('mouseleave', function(){
        $('.headerWrap>.gnb-Box').height('60px');
        $(this).children('a').css({'border-bottom' : '0'});
        $(this).children('ul').css({'opacity':'0','pointer-events':' none'});
    });
    
    // header 끝 //

    // mainVisual 시작 //
    var VisualCount = $('#contents>.mainVisual>.visual_Container>.on').index();
    

    $('#contents>.mainVisual>.visual_Controller>.prev').on('click', function(e){
        e.preventDefault();

        $('#contents>.mainVisual>.visual_Container>div').removeClass('on');
        $('#contents>.mainVisual>.visual_nav>li>a').removeClass('on');
        VisualCount = VisualCount - 1;
        if(VisualCount == -1){
            VisualCount = 8;
        }
        $('#contents>.mainVisual>.visual_Container>div').eq(VisualCount).addClass('on');
        $('#contents>.mainVisual>.visual_nav>li').eq(VisualCount).children('a').addClass('on');

    });
    $('#contents>.mainVisual>.visual_Controller>.next').on('click', function(e){
        e.preventDefault();

        $('#contents>.mainVisual>.visual_Container>div').removeClass('on');
        $('#contents>.mainVisual>.visual_nav>li>a').removeClass('on');
        VisualCount = VisualCount + 1;
        if(VisualCount == 9){
            VisualCount = 0;
        }
        $('#contents>.mainVisual>.visual_Container>div').eq(VisualCount).addClass('on');
        $('#contents>.mainVisual>.visual_nav>li').eq(VisualCount).children('a').addClass('on');

    });

    setInterval(function(){
        $('#contents>.mainVisual>.visual_Controller>.next').trigger('click');
    }, 4000)
    
    $('#contents>.mainVisual>.visual_nav>li>a').on('click', function(e){
        e.preventDefault();
        
        VisualCount = $(this).parent('li').index();

        $('#contents>.mainVisual>.visual_nav>li>a').removeClass('on');
        $('#contents>.mainVisual>.visual_Container>div').removeClass('on');

        $('#contents>.mainVisual>.visual_nav>li').eq(VisualCount).children('a').addClass('on');
        $('#contents>.mainVisual>.visual_Container>div').eq(VisualCount).addClass('on');
    });

   // mainVisual 끝 // 

   // main_News 시작 //
    var newsThumbNail_1_imgs = $('#contents>.main_News>.newsThumbNail_1>div>ul>li').size();
    var newsThumbNail_2_imgs = $('#contents>.main_News>.newsThumbNail_2>div>ul>li').size();
    var newsThumbNail_3_imgs = $('#contents>.main_News>.newsThumbNail_3>div>ul>li').size();

   function showNextNews(){
        
        var nowOnNews1 = $('#contents>.main_News>.newsThumbNail_1>div>ul>li>a.on').parent('li').index();
        var nextIndex1 = ( nowOnNews1 + 1 ) % newsThumbNail_1_imgs;

        var nowOnNews2 = $('#contents>.main_News>.newsThumbNail_1>div>ul>li>a.on').parent('li').index();
        var nextIndex2 = ( nowOnNews2 + 1 ) % newsThumbNail_2_imgs;

        var nowOnNews3 = $('#contents>.main_News>.newsThumbNail_1>div>ul>li>a.on').parent('li').index();
        var nextIndex3 = ( nowOnNews3 + 1 ) % newsThumbNail_3_imgs;

        $('#contents>.main_News>.newsThumbNail_1>div>ul>li').eq(nextIndex1).children('a').trigger('click');
        $('#contents>.main_News>.newsThumbNail_2>div>ul>li').eq(nextIndex2).children('a').trigger('click');
        $('#contents>.main_News>.newsThumbNail_3>div>ul>li').eq(nextIndex3).children('a').trigger('click');

   }
   setInterval(showNextNews, 4500);
   $('#contents>.main_News>div>.news_Imgs>.scaleBox').on('mouseover', function(){

    $(this).children('a').css({'z-index':'2'});
    });

   $('#contents>.main_News>div>div>ul>li>a').on('click', function(e){
       e.preventDefault();

       var NewsCount = $(this).parent('li').index();

       $(this).parent('li').parent('ul').parent('div').next('div').children('div').removeClass('on');
       $(this).parent('li').parent('ul').children('li').children('a').removeClass('on');
       $(this).parent('li').parent('ul').parent('div').next('div').children('div').eq(NewsCount).addClass('on');
       $(this).addClass('on');
   });
   // main_News 끝 // 

   // main_Movie_Library 시작 //
   $('#contents>.main_Movie_Library>.video_Library>.video_nav>li>a').on('click', function(e){
       e.preventDefault();
       var LibraryCount = $(this).parent('li').index();
       $('#contents>.main_Movie_Library>.video_Library>.video_nav>li>a').removeClass('on');
       $(this).addClass('on');

       LibraryPosition = LibraryCount * -100;

        $('#contents>.main_Movie_Library>.video_Library>.LibraryWrap').animate({'margin-left': LibraryPosition+'%'},300,'easeOutBack');
        $('#contents>.main_Movie_Library>.video_Library>.LibraryWrap').css({'margin-left': LibraryPosition+'%'});
   });

   $('#contents>.main_Movie_Library>.video_Library>.LibraryWrap>div>div').on('click', function(e){
       e.preventDefault();

       var videoSrc = $(this).attr('src');
       videoSrc += '?amp;autoplay=1&rel=0';
       $('#contents>.main_Movie_Library>.video_Player>iframe').attr('src', videoSrc );

       $('#contents>.main_Movie_Library>.video_Library>.LibraryWrap>div>div').removeClass('on');
       $(this).addClass('on');

   });
   // main_Movie_Library 끝 // 

   // main_Icon 시작 //
    var radioTextLineheight = $('#contents>.main_Icon>.radio_Player>h2').height();
        radioTextLineheight += 'px';
    $('#contents>.main_Icon>.radio_Player>h2').css('line-height', radioTextLineheight);
    
    var hiddenCliff_RadioAd = new Audio('./audio/hiddencliff-radio.mp3');
    
    $('#contents>.main_Icon>.radio_Player>.audio_Controller>.audio_button_play').on('click',function(e){
        e.preventDefault();
            var NowPlaying = $('#contents>.main_Icon>.radio_Player>.audio_Controller>.audio_button_play').hasClass('on');

            if(!NowPlaying) {
                $(this).addClass('on');
                hiddenCliff_RadioAd.play();
            }
            else {
                $(this).removeClass('on');
                hiddenCliff_RadioAd.pause();
            }
            
    });
   
   // main_Icon 끝 // 

   // main_Magazine 시작 //

   var magazinesCount = $('#contents>.main_Magazine>.magazine_bg>.magazin_nav>ul>li').size();

   function showNextMagazine(){
        var nowOnMagazine = $('#contents>.main_Magazine>.magazine_bg>.magazin_nav>ul>li>a.on').parent('li').index();
        
        var NextMagazine = ( nowOnMagazine + 1 ) % magazinesCount;
        $('#contents>.main_Magazine>.magazine_bg>.magazin_nav>ul>li').eq(NextMagazine).children('a').trigger('click');
   }
   setInterval(showNextMagazine, 4000);
   $('#contents>.main_Magazine>.magazine_bg>.magazin_nav>ul>li>a').on('click', function(e){
        e.preventDefault();
        var MagazineCount = $(this).parent('li').index();

        $('#contents>.main_Magazine>.magazine_bg>.magazin_nav>ul>li>a').removeClass('on');
        $('#contents>.main_Magazine>.magazine_bg>a').removeClass('on');
        
        $(this).addClass('on');
        $('#contents>.main_Magazine>.magazine_bg>a').eq(MagazineCount).addClass('on');
   });
   // main_Magazine 끝 //

   // main_Gallery 시작 //
   $('#contents>.main_Gallery>.main_Gallery_nav>.next').on('click',function(e){
    e.preventDefault();
        $('#contents>.main_Gallery>.gallert_frame>.gallery_Container>div>div.on').removeClass('on');
        var centerImg = $('#contents>.main_Gallery>.gallert_frame>.gallery_Container>div').eq(3);

            centerImg.children('div:first-child').addClass('on');

       $('#contents>.main_Gallery>.gallert_frame>.gallery_Container').animate({'margin-left': '-300%'},500,function(){
            

            $('#contents>.main_Gallery>.gallert_frame>.gallery_Container>div').first().appendTo('.gallery_Container');
            $('#contents>.main_Gallery>.gallert_frame>.gallery_Container').css({'margin-left': '-200%'});

       });       
   });

   $('#contents>.main_Gallery>.main_Gallery_nav>.prev').on('click',function(e){
    e.preventDefault();

        $('#contents>.main_Gallery>.gallert_frame>.gallery_Container>div>div.on').removeClass('on');
        var centerImg = $('#contents>.main_Gallery>.gallert_frame>.gallery_Container>div').eq(1);

            centerImg.children('div:first-child').addClass('on');
    
       $('#contents>.main_Gallery>.gallert_frame>.gallery_Container').animate({'margin-left': '-100%'},500,function(){
            $('#contents>.main_Gallery>.gallert_frame>.gallery_Container>div').last().prependTo('.gallery_Container');
            $('#contents>.main_Gallery>.gallert_frame>.gallery_Container').css({'margin-left': '-200%'});
       });
   });
    setInterval(function(){
        $('#contents>.main_Gallery>.main_Gallery_nav>.next').trigger('click');
    }, 4500)
});