import Scrollbar from 'smooth-scrollbar';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const smoothScroll = () => {
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
}




export const pageAnimation = () => {
    if(document.querySelector('.home')){
        gsap.from('.home-item span', {
            opacity: 0,
            y: -100,
            duration: 1.5
        })
        gsap.from('.home-item h1', {
            opacity: 0,
            y: 100,
            duration: 1.5
        })

        gsap.from('.home-text p', {
            opacity: 0,
            scale: 0,
            duration: 2
        })

        gsap.from('.home-btns .btn', {
            opacity: 0,
            y: '100%',
            duration: 2
        })

        
    }


    if(document.querySelector('.slide-left')){
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
    }
    if(document.querySelector('.slide-right')){
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
    }
    
    if(document.querySelector('.slide-down')){
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
    }
    
    if(document.querySelector('.slide-up')){
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
    }

    if(document.querySelector('.slide-in')){
        gsap.utils.toArray('.slide-in').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item
                },  
                scale: 0,
                duration: 2
            })
        })
    }        

    if(document.querySelector('.rotate')){
        gsap.utils.toArray('.rotate').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item
                },  
                rotateY: 180,
                duration: 2
            })
        })
    }

    
}





