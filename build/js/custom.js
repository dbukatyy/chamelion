'use strict';

jQuery(document).ready(function () {
    var _this = this;

    var video = document.querySelector('.first__video');

    function stopVideo() {
        video.pause();
    }

    function playVideo() {
        video.play();
    }

    function dotToggle(_self) {

        var sectionId = _self.attr('id'),
            li = $('.dots__item').filter('[data-section = ' + sectionId + ']');
        li.addClass('active').siblings('.dots__item').removeClass('active');
    }

    video.addEventListener('canplay', function (e) {
        setTimeout(stopVideo, 3100);
    }, false);

    $(document).on('scroll', function (e) {
        if ($(_this).scrollTop() > 50 || $(_this).scrollTop() === 0) {
            playVideo();
        }
    });

    particlesJS.load('why-we', 'js/particlesjs.json', function () {});

    $('#first').scrollex({

        mode: 'middle',

        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);
        }
    });

    $('#why-we').scrollex({

        mode: 'middle',
        scroll: function scroll(progress) {

            // console.log(progress + 0.545);

        },
        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);
        }
    });
});