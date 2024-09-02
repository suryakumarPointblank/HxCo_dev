(function ($) {
    "use strict";

    /*=============================================
        =    		 Preloader			      =
    =============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    };

    $(window).on('load', function () {
        preloader();
        wowAnimation();
        aosAnimation();
        tg_title_animation();
    });



    /*===========================================
        =    		Mobile Menu			      =
    =============================================*/
    //SubMenu Dropdown Toggle
    if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
        $('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
    }

    //Mobile Nav Hide Show
    if ($('.tgmobile__menu').length) {

        var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
        $('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(300);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
    };



    /*=============================================
        =           Data Background             =
    =============================================*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })



    /*===========================================
        =     Menu sticky & Scroll to top      =
    =============================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        // if (scroll < 245) {
        // 	$("#sticky-header").removeClass("sticky-menu");
        // 	$('.scroll-to-target').removeClass('open');
        //     $("#header-fixed-height").removeClass("active-height");

        // } else {
        $("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
        $("#header-fixed-height").addClass("active-height");
        // }
    });


    /*=============================================
        =    		 Scroll Up  	         =
    =============================================*/
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }


    /*=============================================
        =            Header Search            =
    =============================================*/
    $(".search-open-btn").on("click", function () {
        $(".search__popup").addClass("search-opened");
        $(".search-popup-overlay").addClass("search-popup-overlay-open");
    });
    $(".search-close-btn").on("click", function () {
        $(".search__popup").removeClass("search-opened");
        $(".search-popup-overlay").removeClass("search-popup-overlay-open");
    });

    /*=============================================
                =     Navbar      =
    =============================================*/

    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('.navigation li');

    function navScroll() {
        let currentSection = "home";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // console.log("scrollY= ",scrollY, "sectionTop", sectionTop,section.getAttribute('id'));
            if (scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        })
        // console.log("currentSection= ",currentSection);
        navlinks.forEach((item) => {
            item.classList.remove('active');
            const link = item.querySelector('a');
            // console.log("link href= ",link.getAttribute('href'));
            if (link.getAttribute('href').includes(currentSection)) {
                item.classList.add('active')
            }
        })
    }

    window.addEventListener('scroll', navScroll);


    /*=============================================
    =     Offcanvas Menu      =
    =============================================*/
    $(".menu-tigger").on("click", function () {
        $(".offCanvas__info, .offCanvas__overly").addClass("active");
        return false;
    });
    $(".menu-close, .offCanvas__overly").on("click", function () {
        $(".offCanvas__info, .offCanvas__overly").removeClass("active");
    });
    /*=============================================
        =          Homepage Banner              =
    =============================================*/
    window.onload = function () {
        // Initialize the Swiper after everything has loaded
        var swiper3 = new Swiper(".slider-homepage-banner", {
            spaceBetween: 0,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '.project-button-next',
                prevEl: '.project-button-prev',
            },
            pagination: {
                el: '.swiper-pagination-testimonials',
                clickable: true,
            },
        });

        fetchTestimonials();

        fetchBlogs();

        // fetchTestimonialImages();



    };
    /*=============================================
        =          brand active              =
    =============================================*/
    var swiper2 = new Swiper(".slider__active", {
        spaceBetween: 0,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 6000,
        },
    });

    // var swiper3 = new Swiper(".slider_baner__active", {
    //     spaceBetween: 0,
    //     loop: true,
    //     autoplay: {
    //         delay: 6000,
    //     },
    //     navigation: {
    //         nextEl: '.button-swiper-next',
    //         prevEl: '.button-swiper-prev',
    //     },
    //     pagination: {
    //         el: '.swiper-pagination-testimonials',
    //         clickable: true
    //     },
    // });

    var swiper4 = new Swiper(".slider_partners__active", {
        spaceBetween: 0,
        slidesPerView: "auto",

        // effect: "fade",
        loop: true,
        autoplay: {
            delay: 6000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.button-swiper-next',
            prevEl: '.button-swiper-prev',
        },
    });


    /*=============================================
        =          brand active              =
    =============================================*/
    var slider = new Swiper('.brand-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            '1200': {
                slidesPerView: 6,
            },
            '992': {
                slidesPerView: 5,
            },
            '768': {
                slidesPerView: 4,
            },
            '576': {
                slidesPerView: 3,
            },
            '0': {
                slidesPerView: 2,
            },
        },
    });

    /*=============================================
        =          testimonials active              =
    =============================================*/
    var slider = new Swiper('.testiminials-active', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        breakpoints: {
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    var slider_test = new Swiper('.testiminials-active-2', {
        slidesPerView: 2,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.button-swiper-testimonial-next',
            prevEl: '.button-swiper-testimonial-prev',
        },
        breakpoints: {
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    /*=============================================
        =          project active              =
    =============================================*/
    var swiper2 = new Swiper(".project-active", {
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        thumbs: {
            swiper: swiper,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.project-button-next',
            prevEl: '.project-button-prev',
        },
    });


    /*=============================================
        =          Testimonials             =
    =============================================*/
    let testimonialsData;
    async function fetchTestimonials() {
        try {
            const response = await fetch('https://hxcobackend-btbqasa5bxhbgagq.southeastasia-01.azurewebsites.net/readTestimonials/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log("testi data = ", data);
                const testimonialsContainer = $('.testimonial-wrapper'); // Assuming the swiper container is a 'swiper-wrapper' class
    
                // Clear any existing content (optional)
                testimonialsContainer.empty();
                
                // Iterate over the fetched testimonials and create the HTML structure for each
                data.forEach(testimonial => {
                    // Create the rating stars
                    let starsHtml = '';
                    for (let i = 0; i < testimonial.rating; i++) {
                        starsHtml += '<i class="fas fa-star"></i>';
                    }
    
                    // Create the testimonial slide
                    const testimonialHtml = `
                    <div class="swiper-slide">
                      <div class="testimonial__item-three">
                        <div class="testimonial__rating testimonial__rating-two">
                          ${starsHtml}
                        </div>
                        <p>“ ${testimonial.text}</p>
                        <div class="testimonial__bottom">
                          <div class="testimonial__info-three">
                            <h4 class="title">${testimonial.author}</h4>
                            <span>${testimonial.designation}</span>
                          </div>
                          <div class="testimonial__icon">
                            <img src="${testimonial.image ? testimonial.image : 'assets/img/icon/quote02.svg'}" alt="">
                          </div>
                        </div>
                      </div>
                    </div>`;
    
                    // Append the testimonial to the container
                    testimonialsContainer.append(testimonialHtml);
                });
    
                // Initialize the Swiper instance after appending all testimonials
                var swiper3 = new Swiper(".testimonial-active-two", {
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoplay: {
                        delay: 6000,
                    },
                    // Navigation arrows
                    navigation: {
                        nextEl: '.testimonial-button-next',
                        prevEl: '.testimonial-button-prev',
                    },
                });
            }
            else {
                throw new Error('Error getting testimonial data');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    


    let blogsData;

    async function fetchBlogs() {
        try {
            const response = await fetch('https://hxcobackend-btbqasa5bxhbgagq.southeastasia-01.azurewebsites.net/readBlogs/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log("Blog data:", data);
    
                const blogContainer = document.querySelector('.blog-post-container');
    
                // Clear existing content
                blogContainer.innerHTML = '';
    
                // Iterate over the fetched blogs and create the HTML structure for each
                data.forEach(blog => {
                    // Construct the full image URL
                    const imageUrl = blog.image ? `https://hxcobackend-btbqasa5bxhbgagq.southeastasia-01.azurewebsites.net${blog.image}` : '#';
    
                    // Determine if the image container should be included
                    const imageContainer = blog.image ? `
                        <div class="blog__post-thumb-two col-lg-3 border-2">
                            <a href="${blog.linkToPdf=='true' ? `https://hxcobackend-btbqasa5bxhbgagq.southeastasia-01.azurewebsites.net${blog.pdf}` : blog.url}" target="_blank">
                                <img src="${imageUrl}" alt="${blog.title}">
                            </a>
                        </div>` : '';
    
                    // Check if linkToPdf is true and construct the PDF link
                    const pdfLink = blog.linkToPdf ? `
                        <p>
                            <a href="https://hxcobackend-btbqasa5bxhbgagq.southeastasia-01.azurewebsites.net${blog.pdf}" target="_blank">Download PDF</a>
                        </p>` : '';
    
                    const blogHtml = `
                    <div class="col-lg-12 col-md-12">
                        <div class="blog__post-two flex  sm-flex-row flex-col items-center justify-center px-10px">
                            ${imageContainer}
                            <div class="blog__post-content-two ${blog.image ? 'col-lg-8' : 'col-lg-12'}">
                                <div class="blog-post-meta flex flex-col space-between">
                                    <h2 class="title">
                                        <a href="${blog.linkToPdf=='true' ? `https://hxcobackend-btbqasa5bxhbgagq.southeastasia-01.azurewebsites.net${blog.pdf}` : `${blog.url}`}" target="_blank">${blog.title}</a>
                                    </h2>
                                    <ul class="list-wrap">
                                        <li><i class="fas fa-calendar-alt"></i>${blog.date}</li>
                                    </ul>
                                </div>
                                <p>${blog.description}
                                    <a href="${blog.linkToPdf=='true' ? `https://hxcobackend-btbqasa5bxhbgagq.southeastasia-01.azurewebsites.net${blog.pdf}` : `${blog.url}`}" target="_blank"> Read more</a>
                                </p>
                               
                                <div class="blog-avatar">
                                    <div class="avatar-content">
                                        <p>By <a href="#">${blog.author}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    
                    // Append the blog item to the container
                    blogContainer.innerHTML += blogHtml;
                });
    
            } else {
                throw new Error('Error fetching blog data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    
    
    
    // Call the fetchBlogs function when the page loads
    // document.addEventListener('DOMContentLoaded', fetchBlogs);
    
    /*=============================================
        =          Contact Us Form            =
    =============================================*/

    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
    
        // Collect form data
        var formData = {
            message: $('textarea[name="message"]').val(),
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val(),
            phone: $('input[name="phone"]').val()
        };
        console.log("contact form data= ", formData);
    
        // Send data using fetch
        fetch('https://hxcobackend-btbqasa5bxhbgagq.southeastasia-01.azurewebsites.net/saveContactData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle success - update the UI or show a success message
            $('.ajax-response').text('Thank you for your message! We will get back to you soon.');
        })
        .catch(error => {
            // Handle error - update the UI or show an error message
            console.error('There was a problem with the fetch operation:', error);
            $('.ajax-response').text('Something went wrong. Please try again later.');
        });
    });
    



    /*=============================================
        =          brand active              =
    =============================================*/
    var slider = new Swiper('.project-active-two', {
        slidesPerView: 1,
        spaceBetween: 5,
        loop: true,
        breakpoints: {
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });



    /*=============================================
        =          testimonial active              =
    =============================================*/
    var swiper = new Swiper(".testimonial-nav", {
        spaceBetween: 0,
        slidesPerView: 4,
    });
    var swiper2 = new Swiper(".testimonial-active", {
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        thumbs: {
            swiper: swiper,
        },
        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: !0,
        },
    });


    /*=============================================
        =          testimonial active two             =
    =============================================*/
    // var swiper3 = new Swiper(".testimonial-active-two", {
    //     loop: true,
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     autoplay: {
    //         delay: 6000,
    //     },
    //     navigation: {
    //         nextEl: '.testimonial-button-next',
    //         prevEl: '.testimonial-button-prev',
    //     },
    // });


    /*=============================================
        =          testimonial active              =
    =============================================*/
    var swiper = new Swiper(".testimonial__nav-three", {
        spaceBetween: 0,
        slidesPerView: 4,
    });
    var swiper2 = new Swiper(".testimonial-active-three", {
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        thumbs: {
            swiper: swiper,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.testimonial-two-button-next',
            prevEl: '.testimonial-two-button-prev',
        },
    });

    /*=============================================
        =        Team Social Active 	       =
    =============================================*/
    $('.social-toggle-icon').on('click', function () {
        $(this).parent().find('ul').slideToggle(400);
        $(this).find('i').toggleClass('fa-times');
        return false;
    });


    /*=============================================
        =    		pricing Active  	       =
    =============================================*/
    $(".pricing__tab-switcher, .pricing__tab-btn").on("click", function () {
        $(".pricing__tab-switcher, .pricing__tab-btn").toggleClass("active"),
            $(".pricing__tab").toggleClass("seleceted"),
            $(".pricing__price").toggleClass("change-subs-duration");
    });



    /*=============================================
        =    		Odometer Active  	       =
    =============================================*/
    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });


    /*=============================================
        =    		Magnific Popup		      =
    =============================================*/
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    /*=============================================
        =    		 Wow Active  	         =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /*=============================================
        =           Aos Active       =
    =============================================*/
    function aosAnimation() {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
            disable: 'mobile',
        });
    }

    $(".view-password").on("click", function () {
        var _parent = $(this).parent("div");
        var _input = _parent.find("input");
        if (_input.attr("type") == "password") {
            _input.attr("type", "text");
        } else {
            _input.attr("type", "password");
        }
    })

    $(window).resize(function () {
        var _container = $('main .container');
        var _window_w = $(window).width();
        var _container_w = _container.width();
        var _space = ((_window_w - _container_w) / 2) - 15;
        var _form_quote = $(".slider__area-home8 .box-form-quote");
        _form_quote.css("right", "" + _space + "px");
    }).resize();

})(jQuery);