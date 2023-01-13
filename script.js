var tl = gsap.timeline({
    repeat: -1  
})
tl
.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger:2

}, 'a')
.to(".text h1",{
    ease:Expo.easeInOut,
    duration:2,
    stagger:2,
    top:0

}, 'a')
.to(".text h1",{
    ease:Expo.easeInOut,
    delay:2,
    duration:2,
    stagger:2,
    top:"-100%"
}, 'a')