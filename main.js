function page1Animetion() {
    var tl = gsap.timeline()
    tl.from("#navbar a,#navbar li,button", {
        y: -30,
        duration: 1,
        delay: .5,
        opacity: 0,
        stagger: 0.15
    })

    tl.from(".h-left, .search", {
        x: -30,
        duration: 1,
        delay: .2,
        opacity: 0,
        stagger: 0.2
    })
    tl.from(".h-img", {
        x: 30,
        duration: .6,
        delay: .3,
        opacity: 0,
    }, "-=1.5")
}
// page1Animetion();

gsap.from(".features h2,.features .p2", {
    x: -30,
    duration: 0.5,
    delay: 0.4,
    opacity: 0,
    scrollTrigger: {
        trigger: ".features h2,.features .p2",
        scroller: "body",
        marker: true,
        start: "top 50%",
    }
})