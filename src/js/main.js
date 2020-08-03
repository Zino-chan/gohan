import '../scss/_main.scss';
import Glide, { Autoplay,  Controls } from '@glidejs/glide/dist/glide.modular.esm'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';


gsap.registerPlugin(ScrollTrigger);



const bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document });

bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();


ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

//Glide

if(document.querySelector('.glide')){
    new Glide('.glide', {
        autoplay: 3000,
        perView: 1
    }).mount({Autoplay});
}

if(document.querySelector('.glide-menu')){
    new Glide('.glide-menu', {
        perView: 1
      }).mount({ Controls });
}


//Gsap
gsap.set("body", {
    y: -window.pageYOffset,
    rotation: 0.01,
    force3D: true
});

gsap.utils.toArray('.slide-left').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item
        },  
        x: '-100%',
        opacity: 0,
        duration: 2
    })
})

gsap.utils.toArray('.slide-right').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item
        },  
        x: '100%',
        opacity: 0,
        duration: 2
    })
});

gsap.utils.toArray('.slide-down').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item
        },  
        y: '-100%',
        opacity: 0,
        duration: 2
    })
});

gsap.utils.toArray('.slide-up').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item
        },  
        y: '100%',
        opacity: 0,
        duration: 2
    })
});

gsap.utils.toArray('.slide-in').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item
        },  
        scale: 0,
        duration: 2
    })
})

gsap.utils.toArray('.rotate').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item
        },  
        rotateY: 180,
        duration: 2
    })
})

gsap.from('.nav .nav-item', {
    scrollTrigger: {
        trigger: '.nav .nav-item'
    },
    y: -100,
    opacity: 0,
    duration: 1.5,
    stagger: .2
})






//Smooth scroller

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Nav-toggle
document.querySelector('.menu-toggler').addEventListener('click', () => {
    document.querySelector('.navbar-nav').classList.toggle('open');
})





