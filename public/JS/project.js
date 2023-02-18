
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


// ****** PROJECT PAGE TIMELINE ****** //
const project_timeline = gsap.timeline()
.from('.nav',{y:-100, duration:2})
.from('.project-title-content',{x:-50, opacity:0,duration:1.5},"<")
.from('.project-icons li',{opacity:0, stagger:0.4},"<")
.from('.project-content1-container',{opacity:0, duration:1.5},"<")


// ****** PROJECT PAGE ScrollTrigger ****** //
gsap.registerPlugin(ScrollTrigger);
const scrollTrigger_timeline = gsap.timeline({scrollTrigger:{
  trigger:'.project-content2',
  start: "top 90%",
  end: "bottom 0%",
  toggleActions: 'restart pause resume reset',
}})
.from('.project-title-content2',{
  x:100,
  opacity:0,
  duration:2
})
.from('.project-icons-content2 img',{
  x:-100,
  opacity:0,
  duration:2
},"<")

const scrollTrigger_timeline2 = gsap.timeline({scrollTrigger:{
  trigger:'.project-content3',
  start: "top 90%",
  end: "bottom 0%",
  toggleActions: 'restart pause resume reset',
}})
.from('.project-content3-container li',{
  opacity:0,
  duration: 2
})

const scrollTrigger_timeline3 = gsap.timeline({scrollTrigger:{
  trigger:'.project-content4',
  start: "top 90%",
  end: "bottom 0%",
  toggleActions: 'restart pause resume reset',
}})
.from('.project-title-content4',{
  x:-100,
  opacity:0,
  duration:2
})
.from('#jest-content4-white',{
  opacity:0, 
  y:-100, 
  duration:2
},"<")
.from('#mocha-content4-white',{
  opacity:0, 
  x:100, 
  duration:2
},"<")

const scrollTrigger_timeline4 = gsap.timeline({scrollTrigger:{
  trigger:'.project-content5',
  start: "top 90%",
  end: "bottom 0%",
  toggleActions: 'restart pause resume reset',
}})
.from('.project-content5-container li',{
  opacity:0,
  duration: 2
})

const scrollTrigger_timeline5 = gsap.timeline({scrollTrigger:{
  trigger:'.project-content6',
  start: "top 90%",
  end: "bottom 0%",
  toggleActions: 'restart pause resume reset',
}})
.to('#content6-btn',{
  opacity:0, 
  duration:2
})
.to('#arrow-icon',{
  x:200, 
  duration:2
},"<")


const seeMore_btn = document.getElementById('content6-btn');

seeMore_btn.addEventListener('mouseover', () => {
  gsap.to('#content6-btn', {opacity:0, duration:2})
  gsap.to('#arrow-icon',{x:200, duration:2})
})

seeMore_btn.addEventListener('mouseleave',() => {
  gsap.to('#content6-btn', {opacity:1, duration:2})
  gsap.to('#arrow-icon',{x:0, duration:2})
})


// ****** PROJECT VIDEOS ****** //
const fv = document.querySelectorAll('#fv')
const bv = document.querySelectorAll('#bv')

fv.forEach( video => {
  video.addEventListener('mouseenter',(e) => {
    video.play();
  })
  video.addEventListener('mouseout',(e) => {
    video.pause();
  })
})

bv.forEach( video => {
  video.addEventListener('mouseenter',(e) => {
    video.play();
  })
  video.addEventListener('mouseout',(e) => {
    video.pause();
  })
})

