
// ==========================================
// SUNNY BLOOMS
// GSAP + SCROLLTRIGGER
// ==========================================

// 1. REGISTER SCROLLTRIGGER
gsap.registerPlugin(ScrollTrigger);


// ==========================================
// 2. GSAP INTRO TIMELINE
// ==========================================

let tl = null;

const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (!motionPreference.matches) {

    tl = gsap.timeline({
        defaults: {
            duration: 0.7,
            ease: "power2.out"
        }
    });

    // Flower icon animation
    tl.from("#hero span", {
        y: -40,
        opacity: 0
    })

    // Brand title animation
    .from("#hero h1", {
        y: 50,
        opacity: 0,
        ease: "back.out(1.7)"
    }, "-=0.3")

    // Tagline animation
    .from("#hero p", {
        y: 30,
        opacity: 0
    }, "-=0.4")

    // Buttons animate one after another
    .from("#hero a, #replayBtn", {
        y: 20,
        opacity: 0,
        stagger: 0.2
    }, "-=0.3");

}


// ==========================================
// 3. REPLAY INTRO BUTTON
// ==========================================

const replayBtn = document.querySelector("#replayBtn");

replayBtn.addEventListener("click", function () {

    if (tl) {
        tl.restart();
    }

});


// ==========================================
// 4. SCROLLTRIGGER ANIMATIONS
// ==========================================

const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", function () {

    // Reveal every section below the hero
    gsap.utils.toArray(".reveal").forEach(function (section) {

        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",

            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

    });


    // ======================================
    // 5. SCROLL PROGRESS BAR
    // ======================================

    gsap.to("#progressBar", {
        scaleX: 1,
        ease: "none",

        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

});


// ==========================================
// 6. DARK MODE TOGGLE
// ==========================================

const darkModeToggle = document.querySelector("#darkModeToggle");
const html = document.documentElement;

darkModeToggle.addEventListener("click", function () {

    html.classList.toggle("dark");

});
