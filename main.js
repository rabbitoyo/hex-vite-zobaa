import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './assets/scss/all.scss';

import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
Swiper.use([Pagination, Autoplay, EffectFade]);
import 'bootstrap/dist/js/bootstrap.min.js';

document.addEventListener("DOMContentLoaded", function () {

    const loginBanner = new Swiper('.loginBanner', {
        effect: 'fade',
    })

});