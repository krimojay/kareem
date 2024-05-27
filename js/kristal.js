        // main js for kristal
        "use strict";
        /* navigation bar
        * ------------------------------------------------------ */

        let toggleButton = $('.nav-open'),
            nav = $('.header-nav-wrap');

        toggleButton.on('click', function(event){
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.toggle("slide");
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');

        $(window).on('resize', function() {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });

        nav.find('a').on("click", function() {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.toggle("slide"); 
            }
        });


        // /* switch between day and night
        // * ------------------------------------------------------ */
        $(window).on("load",function(){

            // const sunrise=$(".sun-b").css('display','block');
            // setTimeout(function(){ sunrise.slideUp(3000); },1000);

            // // const fadeDay=$(".sun-beam").css('display','block');
            // // setTimeout(function(){ fadeDay.fadeOut(3000); },1000);

            // const fadeNightOpacity=$(".hero-sec").css('--hero-sec-opacity','.5');
            // setTimeout(function(){ fadeNightOpacity.fadeOut(3000,function(){
            //     const fadeNightOpacityIn=$(".hero-sec").css('--hero-sec-opacity','.89');
            //     fadeNightOpacityIn.fadeIn(3000);
            //     const fadeNightbgColorIn=$(".hero-sec").css('--hero-sec-bgColor','#020300');
            //     fadeNightbgColorIn.fadeIn(300);

            // }) },4000);

            
            
            
            // const fadeNightbgColor=$(".hero-sec").style.setProperty('--hero-sec-bgColor','#020300');
            // setTimeout(function(){ fadeNightOpacity.fadeIn(3000); },1000);
            // setTimeout(function(){ fadeNightbgColor.fadeIn(3000); },1000);

        });

        
        
        // setTimeout(function(){ $(".sun").css('display','none'); },3000);
        // window.onload=function (){
        //     setInterval(switchBg,1000);

        //     function switchBg(){
        //         document.getElementsByClassName("sun").style.display="none";
        //         document.getElementsByClassName("ray").style.display="none";
                
        //     }

        // }
        // console.log(tests);
        /* slick slider
        * ------------------------------------------------------ */

            
        $('.customer-slider').slick({
            arrows: true,
            dots: false,
            infinite: true,
            centerMode: true,
            variableWidth:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: "<div class=\'slick-prev\'><i class=\'mdi mdi-arrow-left-thin\' aria-hidden=\'true\'></i></div>",
            nextArrow: "<div class=\'slick-next\'><i class=\'mdi mdi-arrow-right-thin\' aria-hidden=\'true\'></i></div>",       
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });



        /* masonry
             * ------------------------------------------------------ */
        
            $(document).ready(function(){
                var containerBricks = $('.gallery-view');

                containerBricks.imagesLoaded(function () {
                    containerBricks.masonry({
                        itemSelector: '.g-g-v',
                        horizontalOrder: true,
                        percentPosition: true,
                        gutter: 15
                        
                    });
                });
            });


        // modal slider for project images


        $('.jsShowModal').on('click',function(e){
            e.preventDefault();
            $('.modal').addClass('show-modal');
            window.body.style.overflowY='visible';
        });
    
        $('.js-hide').on('click',function(){
            $('.modal').removeClass('show-modal');
        });


        // modal carousel
        let slidePosition = 1;
        SlideShow(slidePosition);

        // forward/Back controls
        function plusSlides(n) {
        SlideShow(slidePosition += n);
        }

        //  images controls
        function currentSlide(n) {
        SlideShow(slidePosition = n);
        }

        function SlideShow(n) {
        let i;
        let slides = document.getElementsByClassName("img-container");
        let circles = document.getElementsByClassName("dots");
        if (n > slides.length) {slidePosition = 1}
        if (n < 1) {slidePosition = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < circles.length; i++) {
            circles[i].className = circles[i].className.replace(" dot-slide", "");
        }
        slides[slidePosition-1].style.display = "block";
        circles[slidePosition-1].className += " dot-slide";
        } 
   


        // accordion for faqs
        // $(document).ready(function(){
        //     const accordion=document.getElementsByClassName('faq-container');
        //     for(i=0;i < accordion.length;){
        //     accordion[i].addEventListener('click',function(){
        //         this.classList.toggle('faq-active');
        //     });
        // }
        // });

        

        
