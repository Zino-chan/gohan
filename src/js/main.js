import '../scss/_main.scss';
import Glide, { Autoplay,  Controls } from '@glidejs/glide/dist/glide.modular.esm'


new Glide('.glide-menu', {
  perView: 1
}).mount({ Controls });

new Glide('.glide', {
    autoplay: 3000,
    perView: 1
}).mount({Autoplay});





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





