gsap.registerPlugin(ScrollTrigger);


// ************ HOME PAGE ************* //
const home = gsap.timeline()
home.from('.content1-title',{
  opacity: 0,
  y: -100,
  duration: 1.5
})
.from('.content1-nav-subtitle',{
  opacity: 0,
  duration: 2.5
},'-=0.5')
.from('.content2',{
  opacity:0,
  x: 50,
  duration: 1.5
},'-=1.5')


const btns = document.querySelectorAll('li');

btns.forEach( btn => {
  btn.addEventListener('mouseover',() => {
    gsap.to(btn,{scale:1.2, duration:0.5});
  })
  btn.addEventListener('mouseleave',() => {
    gsap.to(btn,{scale:1, duration:0.5});
  })
});


// ************ WRITE BLOG PAGE ************* //
const write = gsap.timeline()
write.from('.write-content1-title',{
  opacity: 0,
  x: 50,
  duration: 1.5
})
.from('.write-content1-nav-subtitle',{
  opacity: 0,
  duration: 2.5
},'-=0.5')
.from('#title',{opacity:0, x:100, duration:2},'-=1.5')
.from('#snippet',{opacity:0, x:100, duration:2},'-=1.5')
.from('#body', {opacity:0, x:100, duration:2},'-=1.5')
.from('#write-sumbit-btn', {y:20, opacity:0, duration: 1.5},'-=1')


// ************ ABOUT BLOG PAGE ************* //
const about = gsap.timeline()
about.from('.about-content1-title',{
  opacity: 0,
  y: -100,
  duration: 1.5
})
.from('.about-content1-nav-subtitle',{
  opacity:0, 
  duration: 2
})
.from('.about-content2-image',{
  x:-100, 
  opacity:0, 
  duration:1.5
},"-=1")
.from('.about-content2-text', {
  opacity: 0,
  x: 100,
  duration:1.5
},"<")