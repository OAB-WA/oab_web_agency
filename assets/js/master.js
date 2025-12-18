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
    
    // Theme detection and favicon/OpenGraph update based on prefers-color-scheme
    function updateFaviconAndOpenGraph() {
        // Detect if user prefers dark mode
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Determine which logo to use
        // Dark mode = light logo (for visibility on dark background)
        // Light mode = dark logo (for visibility on light background)
        const logoPath = prefersDark ? 'assets/images/logo_dark.webp' : 'assets/images/logo_light.webp';
        
        // Get absolute URL for OpenGraph (required for social media crawlers)
        const getAbsoluteUrl = function(relativePath) {
            if (relativePath.indexOf('http') === 0) {
                return relativePath; // Already absolute
            }
            const baseUrl = window.location.protocol + '//' + window.location.host;
            // Handle both root-relative and current-directory-relative paths
            if (relativePath.indexOf('/') === 0) {
                return baseUrl + relativePath;
            }
            // Get current directory path
            const pathArray = window.location.pathname.split('/');
            pathArray.pop(); // Remove filename
            const currentDir = pathArray.join('/');
            return baseUrl + currentDir + '/' + relativePath;
        };
        
        const absoluteLogoPath = getAbsoluteUrl(logoPath);
        
        // Update favicon links (multiple sizes)
        const faviconSizes = [
            { rel: 'icon', sizes: '16x16', type: 'image/webp' },
            { rel: 'icon', sizes: '32x32', type: 'image/webp' },
            { rel: 'icon', sizes: '96x96', type: 'image/webp' },
            { rel: 'icon', sizes: '192x192', type: 'image/webp' },
            { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/webp' },
            { rel: 'shortcut icon', sizes: '32x32', type: 'image/webp' }
        ];
        
        // Remove existing favicon links
        $('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]').remove();
        
        // Add new favicon links (use relative path for favicons)
        faviconSizes.forEach(function(favicon) {
            const $link = $('<link>', {
                rel: favicon.rel,
                href: logoPath,
                sizes: favicon.sizes,
                type: favicon.type
            });
            $('head').append($link);
        });
        
        // Update OpenGraph image (use absolute URL)
        let $ogImage = $('meta[property="og:image"]');
        if ($ogImage.length === 0) {
            $ogImage = $('<meta>', {
                property: 'og:image'
            });
            $('head').append($ogImage);
        }
        $ogImage.attr('content', absoluteLogoPath);
        
        // Also update Twitter Card image if it exists (use absolute URL)
        let $twitterImage = $('meta[name="twitter:image"]');
        if ($twitterImage.length > 0) {
            $twitterImage.attr('content', absoluteLogoPath);
        }
    }
    
    // Initialize theme detection on page load
    $(document).ready(function() {
        updateFaviconAndOpenGraph();
        
        // Listen for theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            // Modern browsers
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', updateFaviconAndOpenGraph);
            }
            // Older browsers
            else if (mediaQuery.addListener) {
                mediaQuery.addListener(updateFaviconAndOpenGraph);
            }
        }
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

    // Formspark Configuration
    // Replace these with your Formspark form IDs from https://formspark.io
    var FORMSPARK_CONFIG = {
        contactForm: 'LIAVJSrnY',  // Replace with your contact form ID
        quoteForm: 'LIAVJSrnY'       // Replace with your quote form ID
    };

    //Contact Form - Formspark
    $(function () {
        $('#contact-form').on('submit', function (e) {
            e.preventDefault();
            var $form = $(this);
            var $submitBtn = $form.find('button[type="submit"]');
            var originalBtnText = $submitBtn.html();
            // Messages div is outside the form in contact.html, so look in parent container
            var $messages = $form.parent().find('.messages').length ? $form.parent().find('.messages') : $form.siblings('.messages');
            
            // Disable submit button and show loading state
            $submitBtn.prop('disabled', true).html('Sending...');
            $messages.html('');

            // Serialize form data
            var formData = $form.serialize();
            
            // Submit to Formspark endpoint
            $.ajax({
                type: "POST",
                url: 'https://submit-form.com/' + FORMSPARK_CONFIG.contactForm,
                data: formData,
                dataType: 'json',
                success: function (response) {
                    var alertBox = '<div class="alert alert-success br-0 bg-gradient-2">Message sent successfully. Thank you, will get back to you soon!</div>';
                    $messages.html(alertBox);
                    $form[0].reset(); // form reset
                    $submitBtn.prop('disabled', false).html(originalBtnText);
                },
                error: function (xhr, status, error) {
                    var alertBox = '<div class="alert alert-danger br-0 bg-gradient-5">There was an error while submitting the form. Please try again later.</div>';
                    $messages.html(alertBox);
                    $submitBtn.prop('disabled', false).html(originalBtnText);
                }
            });
        });
    });

    //Quote Form - Formspark
    $(function () {
        $('#quote-form').on('submit', function (e) {
            e.preventDefault();
            var $form = $(this);
            var $submitBtn = $form.find('button[type="submit"]');
            var originalBtnText = $submitBtn.html();
            var $messages = $form.find('.messages');
            
            // Disable submit button and show loading state
            $submitBtn.prop('disabled', true).html('Sending...');
            $messages.html('');

            // Serialize form data
            var formData = $form.serialize();
            
            // Submit to Formspark endpoint
            $.ajax({
                type: "POST",
                url: 'https://submit-form.com/' + FORMSPARK_CONFIG.quoteForm,
                data: formData,
                dataType: 'json',
                success: function (response) {
                    var alertBox = '<div class="alert alert-success br-0 bg-gradient-2 text-white">Quote request sent successfully! Redirecting to schedule your call...</div>';
                    $messages.html(alertBox);
                    $form[0].reset(); // form reset
                    $submitBtn.prop('disabled', false).html(originalBtnText);
                    
                    // Redirect to booking page after 2 seconds
                    setTimeout(function() {
                        window.location.href = 'booking.html';
                    }, 2000);
                },
                error: function (xhr, status, error) {
                    var alertBox = '<div class="alert alert-danger br-0 bg-gradient-5 text-white">There was an error while submitting your request. Please try again later.</div>';
                    $messages.html(alertBox);
                    $submitBtn.prop('disabled', false).html(originalBtnText);
                }
            });
        });
    });
    
})(jQuery);

