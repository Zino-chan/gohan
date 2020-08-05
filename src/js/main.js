import '../scss/_main.scss';
import glideInit from './glide';
import injectComponents from './components';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//import barba from '@barba/core';
import {pageAnimation, smoothScroll, pageTransition} from './gsap';

gsap.registerPlugin(ScrollTrigger);





 window.addEventListener('DOMContentLoaded',() => {

	document.querySelector('.spinner-wrapper').style.display = 'none';

	//components
	injectComponents();

	//SmoothScrollbar
	smoothScroll();

	//Glide
	glideInit();


	//Barba
	barba.init({
		sync: true,

		transitions: [
			{
				async leave(data) {
					pageTransition();
					await delay(1000);
					data.current.container.remove();
				},

				async beforeEnter(data) {
					ScrollTrigger.getAll().forEach(t => t.kill());
				},

				async enter(data) {	
					// In the next page
					injectComponents();
					pageAnimation();
				},

				async once(data) {
					pageAnimation();
				},
			},
		],
	});


	function delay(n) {
		n = n || 2000;
		return new Promise((done) => {
			setTimeout(() => {
				done();
			}, n);
		});
	}



	//Nav-toggle
	document.querySelector('.menu-toggler').addEventListener('click', () => {
		document.querySelector('.navbar-nav').classList.toggle('open');
	})

 })




