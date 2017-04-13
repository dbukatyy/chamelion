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

    particlesJS.load('our-works', 'js/particlesjs.json', function () {});

    $('.works__link').on('click', function (e) {
        var sectionClass = $(e.target).data('section'),
            targetSection = $('.examples').find('.' + sectionClass);

        $(e.target).addClass('active');
        $(e.target).closest('.works__item').siblings('.works__item').find('.works__link').removeClass('active');

        targetSection.siblings('.row').hide(1000);
        targetSection.show(700);
    });

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

            var customProgress = (-progress + .545) * 200,
                customProgress2 = (-progress + .545) * 300,
                customProgress3 = (-progress + .545) * 400;

            $(".fact").eq(1).css('top', customProgress);
            $(".fact").eq(2).css('top', customProgress2);
            $(".fact").eq(3).css('top', customProgress3);

            $(".extend-fact").eq(0).css('top', customProgress3);
            $(".extend-fact").eq(1).css('top', customProgress);

            // console.log(progress + 0.545);
        },
        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);

            var time = 1;
            $('.window').addClass('active');

            $('#facts').each(function () {
                $('span').each(function () {
                    var i = 1,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        that = $(this),
                        int = setInterval(function () {
                        if (i <= num) {
                            that.html(i);
                        } else {
                            clearInterval(int);
                        }
                        i++;
                    }, step);
                });
            });
        },
        leave: function leave() {
            $('.window').removeClass('active');
        }
    });

    $('#our-works').scrollex({

        mode: 'bottom',

        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);
        },
        scroll: function scroll(progress) {

            $(".example__about:visible").each(function (key, value) {

                $(this).css('transform', 'translateY(' + (-progress + .25 * (key + 1)) * 1000 / (key + 1) + 'px)');
            });
        }
    });
});