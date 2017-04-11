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

            // console.log(progress + 0.545);

        },
        enter: function() {

            var _self = $(this);

            dotToggle(_self);
        }
    });
});


