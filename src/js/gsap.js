import Scrollbar from 'smooth-scrollbar';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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




export const  pageTransition = () => {
    let tl = gsap.timeline();

    tl.to("ul.transition li", {
        duration: .5,
        scaleY: 1,
        transformOrigin: "bottom left",
        stagger: .2
    })
    tl.to("ul.transition li", {
        duration: .5,
        scaleY: 0,
        transformOrigin: "bottom left",
        stagger: .1,
        delay: .1
    })
}



export const pageAnimation = () => {
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
}





