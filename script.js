
// 1. CREATE GSAP TIMELINE
const tl = gsap.timeline({
    defaults: {
        duration: 0.8,
        ease: "power2.out"
    }
});

// 2. HERO ANIMATION
tl.from("#hero span", {
    y: -40,
    opacity: 0,
    duration: 0.6
})

// 3. TITLE ANIMATION
.from("#hero h1", {
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)"
}, "-=0.3")

// 4. PARAGRAPH ANIMATION
.from("#hero p", {
    y: 30,
    opacity: 0
}, "-=0.4")

// 5. BUTTON ANIMATION WITH STAGGER
.from("#hero a, #replayBtn", {
    y: 20,
    opacity: 0,
    stagger: 0.2
}, "-=0.3");


// ===================================
// REPLAY INTRO BUTTON
// ===================================

const replayBtn = document.querySelector("#replayBtn");

replayBtn.addEventListener("click", function () {
    tl.restart();
});
