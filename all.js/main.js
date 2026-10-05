gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-container",
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: false
    }
});

tl.from("#n68 p", {
    y: -50,
    opacity: 0,
    duration: 1.0,
    stagger: 0.2 
}, "-=0.4");

tl.from("#n79 p", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1
}, "-=0.3"); 

tl.from(".menu-btn", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out" 
}, "-=0.2");
