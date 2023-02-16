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

// ****** LOADING PAGE TIMELINE ******
const home_timeline = gsap.timeline()
home_timeline.to('#line',{
  backgroundImage:'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(71,64,64,1) 0%)',
  duration: 1
})
.to('#line',{width: '100%', duration:1})
.to('#loadingText',{y:-50, opacity: 0},'<')
.to('.loading_page',{display:'none', duration: 0.7},'-=0.2')
.to('.contents', {display:"block", opacity: 1, duration:2})
.from('#react-logo-mobile', {rotation:270, duration:3,ease:'back',opacity:0},'<')
.from('.nav',{opacity:0, y:-100, duration:2},'<')
.from('.npgImage #circle', {x:40, opacity:0, duration:2},'<')
.from('#title_name',{x:-40, opacity:0, duration:2, ease:"back"},'<')
.from('#developer_text',{x:40, opacity:0, duration:2, ease:"back"},'<')
.from('#designer_text',{x:40, opacity:0, duration:2, ease:"back"},'<' )
.from('.title_btn',{y:50, opacity:0, duration:1},"<")
.to('#react-logo',{rotation:270, duration:3,ease:'back'},'<')
.from('#npgImage-images-reactlogo',{x:70, opacity:0, duration:1.5, ease:"back"},"-=1.2")
.from('#npgImage-images-twailwindlogo', {x:70, opacity:0, duration:1.5, ease:"back"},"-=1.2")
.from('#npgImage-images-jslogo',{x:70, opacity:0, duration:1.5, ease:"back"},"-=1.2")
.from('#npgImage-images-firebaselogo', {x:70, opacity:0, duration:1.5, ease:"back"},"-=1.2")
.from('#npgImage-images-sblogo',{x:70, opacity:0, duration:1.5, ease:"back"},"-=1.2")
.from('#npgImage-images-nodelogo',{x:70, opacity:0, duration:1.5, ease:"back"},"-=1.2")
.from('#npgImage-images-jestlogo',{x:70, opacity:0, duration:1.5, ease:"back"},"-=1.2")
