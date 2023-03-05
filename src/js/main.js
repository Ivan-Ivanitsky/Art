import {modals} from '../assets/modules/modals';
import {slider} from '../assets/modules/slider';
import {AnimateBtn} from '../assets/modules/animateButton';
import {form} from '../assets/modules/form';
window.addEventListener('DOMContentLoaded',()=>{
    'use strict'
    modals();
    form();
    slider('.feedback-slider-item',"horizontal",'.main-next-btn','.main-prev-btn',3000);
    slider('.main-slider-item','vertical',"","",3000);
    const animate = new AnimateBtn('.button-order');
    animate.mouseMove();
}) 