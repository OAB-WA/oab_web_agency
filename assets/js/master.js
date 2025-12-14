(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Function to check if mobile screen
    function isMobileScreen() {
        return $(window).width() < 992; // Bootstrap's lg breakpoint
    }
    
    // Function to set logo based on screen size and scroll position
    function setNavbarLogo() {
        var $logo = $('#navbar-logo');
        if (isMobileScreen()) {
            // On mobile, always use light logo (navbar has white background on mobile)
            $logo.attr('src', 'assets/images/logo_light.webp');
        } else {
            // On desktop, change based on scroll position
            if ($(window).scrollTop() > 45) {
                $logo.attr('src', 'assets/images/logo_light.webp');
            } else {
                $logo.attr('src', 'assets/images/logo_dark.webp');
            }
        }
    }
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
        // Update logo on scroll
        setNavbarLogo();
    });
    
    // Update logo on window resize (in case user resizes from desktop to mobile or vice versa)
    $(window).on('resize', function() {
        setNavbarLogo();
    });
    
    // Set initial logo on page load
    $(document).ready(function() {
        setNavbarLogo();
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        items:5,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    });

    //Contact Form - Netlify Forms
    $(function () {
        $('#contact-form').on('submit', function (e) {
            e.preventDefault();
            var $form = $(this);
            var $submitBtn = $form.find('button[type="submit"]');
            var originalBtnText = $submitBtn.html();
            
            // Disable submit button and show loading state
            $submitBtn.prop('disabled', true).html('Sending...');
            $('.messages').html('');

            // Serialize form data
            var formData = $form.serialize();
            
            // Submit to Netlify Forms endpoint
            $.ajax({
                type: "POST",
                url: "/",
                data: formData,
                success: function () {
                    var alertBox = '<div class="alert alert-success br-0 bg-gradient-2">Message sent successfully. Thank you, will get back to you soon!</div>';
                    $('.messages').html(alertBox);
                    $form[0].reset(); // form reset
                    $submitBtn.prop('disabled', false).html(originalBtnText);
                },
                error: function () {
                    var alertBox = '<div class="alert alert-danger br-0 bg-gradient-5">There was an error while submitting the form. Please try again later.</div>';
                    $('.messages').html(alertBox);
                    $submitBtn.prop('disabled', false).html(originalBtnText);
                }
            });
        });
    });
    
})(jQuery);

