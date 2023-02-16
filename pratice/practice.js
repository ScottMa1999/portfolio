gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({scrollTrigger:{
  trigger: '.content2',
  start: 'top 80%',
  end: 'bottom 50%',
  toggleActions: 'restart pause pause reset',
  markers: false
}})
tl1.from('.slider-1',{x: 30, opacity:0, duration:1.5})
tl1.from('.slider-2',{x: 30, opacity:0, duration:1.5})
tl1.from('.slider-3',{x: 30, opacity:0, duration:1.5})

const tl2 = gsap.timeline({scrollTrigger:{
  trigger: '.content3',
  start: 'top 95%',
  end:'bottom 50%',
  toggleActions: 'restart pause pause reset',
  markers: true
}})
tl2.from('.profile-3',{x:-100, opacity:0, duration:1.5})
tl2.from('.text-3',{x:100, opacity:0, duration:1.5},"<")