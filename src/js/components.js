import header from '../components/header.html';
import footer from '../components/footer.html';


export default  () => {
    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;
}

