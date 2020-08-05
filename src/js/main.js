import '../scss/_main.scss';
import glideInit from './glideSlider';
import {pageAnimation, smoothScroll} from './animation';
import yall from 'yall-js';



window.addEventListener('DOMContentLoaded',() => {

	yall();

	if(document.querySelector('.spinner-wrapper')){
		document.querySelector('.spinner-wrapper').style.display = 'none';
	}

	//SmoothScrollbar
	smoothScroll();

	//Glide
	glideInit();

	//Gsap
	pageAnimation();


	//Nav-toggle
	document.querySelector('.menu-toggler').addEventListener('click', () => {
		document.querySelector('.navbar-nav').classList.toggle('open');
		document.querySelector('.menu-toggler').classList.toggle('open');
	})

	document.querySelector('form').addEventListener('submit', e => {
		e.preventDefault();
		alert('Reservation Submitted Thank you for choosing our restaurant')
	} )

 })




