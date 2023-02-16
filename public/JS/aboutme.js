
// **** NAV ANIMATION **** //
const links = document.querySelectorAll('.nav li');

links.forEach( link => {

  const underline = document.createElement('div');
  underline.setAttribute('id','underline');

  link.addEventListener('mouseover', () => {

    gsap.to(link,{y:-15, duration:0.5, ease:"back"});
    link.appendChild(underline);
    gsap.to(underline, 
            {opacity: 1,
             keyframes: {
             '50%': {y: 15, ease: "back"},
             '100%': {y: 5}},
             duration: 2,
             ease: "back"})
  })

  link.addEventListener('mouseleave', () => {
    gsap.to(link,{y:0, duration:0.5, ease:"bounce"});
  })
})

gsap.registerPlugin(ScrollTrigger);
// ****** ABOUT_ME PAGE TIMELINE ****** //
const about_timeline = gsap.timeline()
.from('.nav',{opacity:0, y:-100, duration:2})
.from('.about-content1-profile-images',{opacity:0, duration:1.5},"-=1")
.from('.about-content1-logos',{opacity:0, y:50, duration:2},"-=1")

// ****** ABOUT_ME PAGE ScrollTrigger ******
gsap.from('#timeline-3',{opacity:0, duration:2, scrollTrigger:{trigger:'#timeline-3', start:"top 90%", end:'bottom 50%'}})
gsap.from('#timeline-2',{opacity:0, duration:2, scrollTrigger:{trigger:'#timeline-2', start:"top 90%", end:'bottom 50%'}})
gsap.from('#timeline-4',{opacity:0, duration:2, scrollTrigger:{trigger:'#timeline-4', start:"top 90%", end:'bottom 50%'}})
gsap.from('.about-content3-info',{opacity:0, duration:2, scrollTrigger:{trigger:'.about-content3-info', start:"top 90%", end:'bottom 50%'}})
gsap.from('.about-content4-info-container',{opacity:0, duration:2, x:50, scrollTrigger:{trigger:'.about-content4-info-container', start:"top 90%", end:'bottom 50%'}})
