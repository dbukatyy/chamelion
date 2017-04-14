jQuery(document).ready(function () {

    const video = document.querySelector('.first__video');

    function stopVideo () {
        video.pause();
    }

    function playVideo () {
        video.play();
    }

    function dotToggle(_self) {

        const sectionId = _self.attr('id'),
              li = $('.dots__item').filter(`[data-section = ${sectionId}]`);
              li.addClass('active').siblings('.dots__item').removeClass('active');
    }

    video.addEventListener('canplay', function(e) {
        setTimeout(stopVideo, 3100);
    }, false)
    
    $(document).on('scroll', e => {
        if ( $(this).scrollTop() > 50 || $(this).scrollTop() === 0 ) {
            playVideo();
        } 
    });
    
    particlesJS.load('why-we', 'js/particlesjs.json', function() {
    });

    particlesJS.load('our-works', 'js/particlesjs.json', function() {
    });

     particlesJS.load('сertificate', 'js/particlesjs.json', function() {
    });

    $('.works__link').on('click', e => {
        const sectionClass = $(e.target).data('section'),
              targetSection = $('.examples').find(`.${sectionClass}`);

        $(e.target).addClass('active');
        $(e.target).closest('.works__item').siblings('.works__item').find('.works__link').removeClass('active');

        targetSection.siblings('.row').hide(1000);
        targetSection.show(700);
    });

     $('#first').scrollex({
 
        mode: 'middle',
    
        enter: function() {

            var _self = $(this);

            dotToggle(_self);
        }
    });
             

    $('#why-we').scrollex({
 
        mode: 'middle',
        scroll: function(progress) {

            const customProgress = (-progress + .545) * 200 ,
                  customProgress2 = (-progress + .545) * 300,
                  customProgress3 = (-progress + .545) * 400;
           

                $( ".fact" ).eq(1).css('top',customProgress);
                $( ".fact" ).eq(2).css('top',customProgress2);
                $( ".fact" ).eq(3).css('top',customProgress3);

                $( ".extend-fact" ).eq(0).css('top',customProgress3);
                $( ".extend-fact" ).eq(1).css('top',customProgress);

          
            // console.log(progress + 0.545);
        },
        enter: function() {

            var _self = $(this);

            dotToggle(_self);

            var time = 1;
            $('.window').addClass('active');

            $('#facts').each(function(){
              $('span').each(function(){
                var 
                i = 1,
                num = $(this).data('num'),
                step = 1000 * time / num,
                that = $(this),
                int = setInterval(function(){
                  if (i <= num) {
                    that.html(i);
                  }
                  else {
                    clearInterval(int);
                  }
                  i++;
                },step);
              });
            });
        },
        leave: function() {
            $('.window').removeClass('active');
        }
    });

     $('#our-works').scrollex({
 
        mode: 'bottom',
    
        enter: function() {

            var _self = $(this);

            dotToggle(_self);
        },
        scroll: function(progress) {

          $( ".example__about:visible" ).each( function( key, value ) {

                $(this).css('transform', 'translateY(' + (-progress + .25*(key+1))*1000/(key+1) + 'px)');
           });
        }
    });

     $('#сertificate').scrollex({
 
        mode: 'middle',
    
        enter: function() {

            var _self = $(this);

            dotToggle(_self);

            $('.menu, .social__item, .right-link__item, .go-btn, .dots__item ').addClass('reverse');
            $(this).css('background' , '#fff');
        },
        scroll: function(progress) {

        },
         leave: function() {
            $('.menu, .social__item, .right-link__item, .go-btn, .dots__item ').removeClass('reverse');
            $(this).css('background' , '#000');
        }
    });

     $('.certificates').slick({
        prevArrow: '.certificates__prev',
        nextArrow: '.certificates__next',
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        infinite: true
     });

     $('.partners__slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
     });


});


