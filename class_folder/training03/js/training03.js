const HD=document.querySelector('.header')
window.addEventListener('scroll', ()=>{
        let sct=window.scrollY;
        sct>0 ? HD.classList.add('on') : HD.classList.remove('on')
    });
    
    //scroll event
const SEC = document.querySelectorAll('.action');
const WT=window.innerHeight;

window.addEventListener("scroll", ()=>{
        let sct=window.scrollY;
        SEC.forEach(e=>{
            let secTop = e.offsetTop;
            let secH=e.clientHeight;
            sct > secTop -(WT-secH)/2 -200 ? e.classList.add('on') : e.classList.remove('on');
        });
});

const totopBtn=document.querySelector('#totop');


    
    // window.addEventListener('scroll', ()=>{
    //     let sct=window.scrollY;
    //     (sct>0) ? document.querySelector('.header').classList.add('on') : document.querySelector('.header').classList.remove('on')
    // });
    
    const sliderBar = document.querySelector('.slide_bottom .bar');
    const mainSlider = new Swiper('.main_slider', {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 100,
        autoplay: {
             delay: 2000,
        },
        pagination: {
            el: '.main_visual .page',
            type: "fraction",
        },
        navigation: {
            nextEl: '.main_visual .btn_next',
            prevEl: '.main_visual .btn_prev',
        },
        autoplayDisableOnInteraction:false,
    });

sliderBar.classList.add('on');
mainSlider.on('slideChangeTransitionEnd', ()=>{
    sliderBar.classList.add('on')
});
mainSlider.on('slideChangeTransitionStart', ()=>{
    sliderBar.classList.remove('on')
});

const productSlider = new Swiper('.product_slider', {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.pr_btn .page',
        //type: "fraction",
    },
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },
});




const productSlider02 = new Swiper('.product02_slider', {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 120,
    pagination: {
        el: '.pr_btn .page',
        //type: "fraction",
    },
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },

});

const productSlider03 = new Swiper('.product03_slider', {
    loop:true,
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },
});



//swiper addClass on
const sItm = document.querySelectorAll('.section04 .swiper-slide');
// $('.swiper-slide');
const itm = document.querySelector('.section04 .swiper-slide-active');
itm.classList.add('on');
productSlider02.on('slideChangeTransitionEnd',()=>{
    const itm = document.querySelector('.section04 .swiper-slide-active');
    itm.classList.add('on');
});
productSlider02.on('slideChangeTransitionStart', ()=>{
    sItm.forEach(e=>e.classList.remove('on'));
});

