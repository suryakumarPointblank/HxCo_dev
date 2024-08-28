gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});

function tg_title_animation() {

    var tg_var = jQuery('.tg-heading-subheading');
    if (!tg_var.length) {
        return;
    }
    const quotes = document.querySelectorAll(".tg-heading-subheading .tg-element-title");

    quotes.forEach(quote => {

        //Reset if needed
        if (quote.animation) {
            quote.animation.progress(1).kill();
            quote.split.revert();
        }

        var getclass = quote.closest('.tg-heading-subheading').className;
        var animation = getclass.split('animation-');
        if (animation[1] == "style4") return

        quote.split = new SplitText(quote, {
            type: "lines,words,chars",
            linesClass: "split-line"
        });
        gsap.set(quote, { perspective: 400 });

        if (animation[1] == "style1") {
            gsap.set(quote.split.chars, {
                opacity: 0,
                y: "90%",
                rotateX: "-40deg"
            });
        }
        if (animation[1] == "style2") {
            gsap.set(quote.split.chars, {
                opacity: 0,
                x: "50"
            });
        }
        if (animation[1] == "style3") {
            gsap.set(quote.split.chars, {
                opacity: 0,
            });
        }
        quote.animation = gsap.to(quote.split.chars, {
            scrollTrigger: {
                trigger: quote,
                start: "top 90%",
            },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: Back.easeOut,
            stagger: .02
        });
    });


}
ScrollTrigger.addEventListener("refresh", tg_title_animation);

const service1 = document.querySelector('.service1')
const e1 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".service",
            start: "top 80%",
            end: "+=150%",
            scrub: 1,
            // pin: true,
            // markers:true,
        }
    }
);
// e1.to(".envelope1", {yPercent: -350, duration: 1});
const appearance = document.querySelectorAll(".mil-up");
    if ($(window).width() > 650) {
        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',

            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }

    const serviceImgContainer = document.querySelectorAll(".service-img-container")

    // service image coming towards the screen
    serviceImgContainer.forEach((img) =>{
        const serviceImg = img.querySelector(".service-img");
        const serviceMask = img.querySelector(".service-mask");
        const tempImgTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: img,
                start: 'top 50%',
                toggleActions: 'play none none none',
            }
        })
        tempImgTimeline.set(serviceImg,{
            opacity: 0
        })
        tempImgTimeline.fromTo(serviceMask, {
            xPercent: "-120",
            ease: "power4.inOut",
        },{
            xPercent: "110",
            duration : 1,
        });
        tempImgTimeline.fromTo(serviceImg,{
            opacity: 0,
            scale: 0.9
        },{
            opacity: 1,
            scale: 1,
            duration: 1,
        },'-=0.5')
    })

    // serviceImgContainer.forEach((img) =>{
    //     const serviceImg = img.querySelector(".service-img");
    //     const serviceMask = img.querySelector(".service-mask");
    //     const tempImgTimeline = gsap.timeline({
    //         scrollTrigger:{
    //             trigger: img,
    //             start: 'top 50%',
    //             toggleActions: 'play none none none',
    //         }
    //     })
    //     tempImgTimeline.fromTo(serviceMask, {
    //         xPercent: "-110",
    //         ease: "power4.inOut",
    //     },{
    //         xPercent: "110",
    //         duration : 1,
    //     });
    //     tempImgTimeline.fromTo(serviceImg,{
    //         xPercent: "-120",
    //         ease: "power4.inOut"
    //     },{
    //         xPercent:"0",
    //         // scale: 1,
    //         duration: 1,
    //     },'-=1')
    // })