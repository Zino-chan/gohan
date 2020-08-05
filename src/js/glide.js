import Glide, { Autoplay,  Controls } from '@glidejs/glide/dist/glide.modular.esm';

//Glide

export default () => {
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
}