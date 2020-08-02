import '../scss/_main.scss';
import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

//new Glide('.glide').mount({ Autoplay })

//var input = document.querySelector('#options-autoplay-input')

const glideMenu = new Glide('.glide-menu', {
  perView: 1
})

const glide = new Glide('.glide', {
    autoplay: 1000,
    perView: 1
}).mount();





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





