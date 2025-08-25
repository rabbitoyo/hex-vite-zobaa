import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './assets/scss/all.scss';

import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
Swiper.use([Pagination, Autoplay, EffectFade]);
import 'bootstrap/dist/js/bootstrap.min.js';

document.addEventListener("DOMContentLoaded", function () {

    //navbar scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    //login banner
    const loginBanner = new Swiper('.loginBanner', {
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })

});