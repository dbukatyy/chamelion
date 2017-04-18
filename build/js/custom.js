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

    $('.go-btn').on('click', function (e) {

        if ($(e.target).hasClass('up')) {

            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        } else {

            $('html, body').animate({
                scrollTop: $('#first').next('section').offset().top + 100
            }, 1500);
        }
    });

    particlesJS.load('why-we', 'js/particlesjs.json', function () {});

    particlesJS.load('we-work', 'js/particlesjs.json', function () {});

    particlesJS.load('our-works', 'js/particlesjs.json', function () {});

    particlesJS.load('сertificate', 'js/particlesjs.json', function () {});

    particlesJS.load('service', 'js/particlesjs.json', function () {});

    particlesJS.load('contacts', 'js/particlesjs.json', function () {});

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

            $('.go-btn').text('далее').removeClass('up');
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
        },
        enter: function enter() {

            var _self = $(this),
                time = 1;

            dotToggle(_self);

            $(this).find('.window').addClass('active');

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

            $('.go-btn').text('назад').addClass('up');
        },
        leave: function leave() {
            $(this).find('.window').removeClass('active');
        }
    });

    $('#we-work').scrollex({

        mode: 'middle',
        scroll: function scroll(progress) {

            var customProgress = (-progress + .545) * 200,
                customProgress2 = (-progress + .545) * 300,
                customProgress3 = (-progress + .545) * 400,
                customProgress4 = (-progress + .545) * 500;

            $(".step").eq(1).css('transform', 'translateY(' + customProgress + 'px)');
            $(".step").eq(2).css('transform', 'translateY(' + customProgress2 + 'px)');
            $(".step").eq(3).css('transform', 'translateY(' + customProgress3 + 'px)');
            $(".step").eq(4).css('transform', 'translateY(' + customProgress4 + 'px)');

            // console.log(progress + 0.545);
        },
        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);

            _self.css('background', '#fff');
            _self.find('.window__about,.window__title').css('background', '#fff');
            $('.menu, .social__item, .right-link__item, .go-btn, .dots__item ').addClass('reverse');
            _self.find('.window').addClass('active');
        },
        leave: function leave() {
            var _self = $(this);

            $('.menu, .social__item, .right-link__item, .go-btn, .dots__item ').removeClass('reverse');
            _self.css('background', '#000');
            _self.find('.window__about,.window__title').css('background', 'transparent');
            _self.find('.window').removeClass('active');
        }
    });

    $('#our-works').scrollex({

        mode: 'bottom',

        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);
            $('#сertificate').css('background', '#000');
        },
        scroll: function scroll(progress) {

            $(".example__about:visible").each(function (key, value) {

                $(this).css('transform', 'translateY(' + (-progress + .25 * (key + 1)) * 1000 / (key + 1) + 'px)');
            });
        }
    });

    $('#сertificate').scrollex({

        mode: 'middle',

        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);

            $('.menu, .social__item, .right-link__item, .go-btn, .dots__item ').addClass('reverse');
            $(this).css('background', '#fff');
        },
        scroll: function scroll(progress) {},
        leave: function leave() {
            $('.menu, .social__item, .right-link__item, .go-btn, .dots__item ').removeClass('reverse');
        }
    });

    $('#service').scrollex({

        mode: 'middle',

        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);

            $('.menu, .social__item, .right-link__item, .go-btn, .dots__item ').addClass('reverse');
            $(this).css('background', '#fff');
        },
        scroll: function scroll(progress) {
            var customProgress = (-progress + .545) * 300,
                customProgress2 = (-progress + .545) * 400,
                customProgress3 = (-progress + .545) * 400,
                customProgress4 = (-progress + .545) * 500;

            $(".services__img:visible").css('transform', 'translateY(' + customProgress2 + 'px)');
            $(".service__header").css('transform', 'translateY(-' + customProgress + 'px)');
        },
        leave: function leave() {}
    });

    $('#contacts').scrollex({

        mode: 'middle',

        enter: function enter() {

            var _self = $(this);

            dotToggle(_self);

            $('.menu, .social__item, .right-link__item, .go-btn, .dots__item ').addClass('reverse');
        },
        scroll: function scroll(progress) {

            $(".contact").each(function (key, value) {

                $(this).css('transform', 'translateY(' + (-progress + .25) * 250 + 'px)');
            });

            $('.contacts__title').css('transform', 'translateY(-' + (-progress + .25) * 230 + 'px)');
        },
        leave: function leave() {}
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

    $('.services').slick({
        nextArrow: '.service__next',
        prevArrow: '.service__prev',
        arrows: true,
        // dots: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        fade: true
        // infinite: true
    });
});