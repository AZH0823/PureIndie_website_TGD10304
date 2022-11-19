const swiper_wider = new Swiper('.swiper-wide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // breakpoints:{
    //     1280: {  //当屏幕宽度大于等于1280
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     }
    // }
    slidesPerView: 'auto',

    centeredSlides: true,
});


// 滑鼠移入移出暫停Swiper效果
$(".swiper-wide").mouseenter(function () {
    // console.log(`enter`)
    swiper_wider.autoplay.stop();
});

$(".swiper-wide").mouseleave(function () {
    // console.log(`leave`)
    swiper_wider.autoplay.start();
});



var wantedSwiper = new Swiper(".wanted-list-sidler", {
    grabCursor: true,
    // loop: true,
    spaceBetween: 20,
    direction: 'horizontal',
    // slideToClickedSlide: true,
    // centeredSlides: true,
    // slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 2,
        clickable: true
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        414: {
            slidesPerView: 1,
            spaceBetween: 50,
       
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 40,
          
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 80,

        }

    }



})



let isCellphone;
const aboutswiper = new Swiper('.about-swiper', {
    slidesPerView: 'auto',
    // centeredSlides: true,
    grabCursor: true,
    freeMode: true,
    // 初始化編號3
    initialSlide: 1.5,
    speed:400,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    }
});

window.addEventListener('DOMContentLoaded', () => {
    let w = window.innerWidth
    if (w <= 960) {
        aboutswiper.enable();
        aboutswiper.init()
    } else if (w > 960) {
        aboutswiper.destroy(false, true)
        aboutswiper.disable();

        document.querySelector('.about-wrapper.swiper-wrapper').style.transform = `translate3d(0px, 0px, 0px)`
    }
})
window.addEventListener('resize', () => {
    let w = window.innerWidth
    if (w <= 960) {
        aboutswiper.enable();
        aboutswiper.init()
        isCellphone = false
    } else if (w > 960) {
        aboutswiper.disable();
        aboutswiper.destroy(false, true)
        document.querySelector('.about-wrapper.swiper-wrapper').style.transform = `translate3d(0px, 0px, 0px)`
    }

})