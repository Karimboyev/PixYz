<template>
    <div class="homeSection6">
        <div class="container">
            <div class="homeSection6__slider">
                <div class="homeSection6__list">
                    <div class="homeSection6__track">
                        <div class="homeSection6__slide" v-for="item in sliderItems" :key="item.id">
                            <h1 class="homeSection6__title">{{ item.title }}</h1>
                            <p class="homeSection6__text">{{ item.content }}</p>
                            <div class="homeSection6__item-info">
                                <img :src="item.user.imgUrl" alt="">
                                <div>
                                    <h1>{{ item.user.name }}</h1>
                                    <p>{{ item.user.occupation }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="homeSection6__dots">
                    <span class="homeSection6__dot" v-for="dot in sliderItems" :key="dot.id"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        let sliderItems=[
             {
                 id:0,
                title: '1Customer Testimonials',
                content:`In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term "testimonial" most commonly applies to the sales-pitches attributed to ordinary citizens, whereas the word "endorsement" usually applies to pitches by celebrities. Testimonials can be part of communal marketing. Sometimes, the cartoon character can be a testimonial in a commercial.`,
                user: {
                    imgUrl: require("@/assets/images/home/home-slider-img1.svg"),
                    name: 'Sevara Nazarxon',
                    occupation: 'CEO of HP, Amazon',
                    
                }
            },
            {
                title: '2Customer Testimonials',
                content:`In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term "testimonial" most commonly applies to the sales-pitches attributed to ordinary citizens, whereas the word "endorsement" usually applies to pitches by celebrities. Testimonials can be part of communal marketing. Sometimes, the cartoon character can be a testimonial in a commercial.`,
                user: {
                    imgUrl: require("@/assets/images/home/home-slider-img1.svg"),
                    name: 'Sevara Nazarxon',
                    occupation: 'CEO of HP, Amazon'
                }
            },
            {
                title: '3Customer Testimonials',
                content:`In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term "testimonial" most commonly applies to the sales-pitches attributed to ordinary citizens, whereas the word "endorsement" usually applies to pitches by celebrities. Testimonials can be part of communal marketing. Sometimes, the cartoon character can be a testimonial in a commercial.`,
                user: {
                    imgUrl: require("@/assets/images/home/home-slider-img1.svg"),
                    name: 'Sevara Nazarxon',
                    occupation: 'CEO of HP, Amazon'
                }
            }
        ]
        return {
            sliders: {
                index:0,
                x1:0,
            },
            sliderItems,
        }
    },
    methods: {
        startTouch(e){
            this.sliders.x1=e.clientX;
            document.getElementsByClassName('homeSection6__list')[0].addEventListener('mousemove',this.actionTouch);
            document.getElementsByClassName('homeSection6__list')[0].addEventListener('pointermove',this.actionTouch);
            document.getElementsByClassName('homeSection6__list')[0].addEventListener('mouseup',this.endTouch);
            document.getElementsByClassName('homeSection6__list')[0].addEventListener('pointerup',this.endTouch);
            
        },
        actionTouch(e){
            let sliderTrack=document.getElementsByClassName('homeSection6__track')[0];
            let slideWidth=document.getElementsByClassName('homeSection6__slide')[0].offsetWidth;
            sliderTrack.style.transform =`translateX(${e.clientX-this.sliders.x1-this.sliders.index*slideWidth}px)`;
            sliderTrack.style.transition='none';
            
        },
        endTouch(e){
            let sliderTrack=document.getElementsByClassName('homeSection6__track')[0];
            let slide=document.getElementsByClassName('homeSection6__slide');
            let dot=document.getElementsByClassName('homeSection6__dot');
            sliderTrack.style.transition='transform 0.5s';
            if(this.sliders.x1-e.clientX>30){
                if(this.sliders.index<slide.length-1){
                    this.sliders.index++;
                    sliderTrack.style.transform=`translate3d(-${this.sliders.index*100}%, 0px, 0px)`;
                } else {
                    sliderTrack.style.transform=`translate3d(-${this.sliders.index*100}%, 0px, 0px)`;
                }
            } else if(e.clientX-this.sliders.x1>30){
                if(this.sliders.index>0){
                    this.sliders.index--;
                    sliderTrack.style.transform=`translate3d(-${this.sliders.index*100}%, 0px, 0px)`;
                } else {
                    sliderTrack.style.transform=`translate3d(-${this.sliders.index*100}%, 0px, 0px)`;
                }
            } else {
                sliderTrack.style.transform=`translate3d(-${this.sliders.index*100}%, 0px, 0px)`;
            }
            dot.forEach(element => {
                element.classList.remove('dot-active');
            });
            dot[this.sliders.index].classList.add('dot-active');
            document.getElementsByClassName('homeSection6__list')[0].removeEventListener('mousemove',this.actionTouch);
            document.getElementsByClassName('homeSection6__list')[0].removeEventListener('pointermove',this.actionTouch);
            document.getElementsByClassName('homeSection6__list')[0].removeEventListener('mouseup',this.endTouch);
            document.getElementsByClassName('homeSection6__list')[0].removeEventListener('pointerup',this.endTouch);
        },
        changeSlider(k){
        let sliderTrack=document.getElementsByClassName('homeSection6__track')[0];
        let dot=document.getElementsByClassName('homeSection6__dot');
        let e;
        for(let i in dot){
            if(k.target==dot[i]) e=i;
        }
        sliderTrack.style.transform=`translate3d(-${e*100}%, 0px, 0px)`;
        dot[this.sliders.index].classList.remove('dot-active');
        this.sliders.index=e;
        dot[e].classList.add('dot-active');
        }
    },
    mounted() {
        document.getElementsByClassName('homeSection6__list')[0].addEventListener('mousedown',this.startTouch);
        document.getElementsByClassName('homeSection6__list')[0].addEventListener('pointerdown',this.startTouch);
        if(document.getElementsByClassName('homeSection6__dot')){
            document.getElementsByClassName('homeSection6__dot')[0].classList.add('dot-active');
        }
        document.getElementsByClassName('homeSection6__dot').forEach(element=>{
            element.addEventListener('click',this.changeSlider);
        })
    },
}
</script>
<style lang="scss">
    @font-face {
        font-family: "comfortaa";
        src: url("../assets/fonts/Comfortaa-Bold.ttf") format('truetype');
    }
    @font-face {
        font-family: "HelveticaNeueCyr-Roman";
        src: url("../assets/fonts/HelveticaNeueCyr-Roman.otf") format('truetype');
    }
    @font-face {
    font-family: "HelveticaNeueCyr-bold";
    src: url("../assets/fonts/HelveticaNeueCyr-bold.otf") format('truetype');
    }
    .homeSection6{
        background-color: #F4F6FC;
        padding: 56px 0 80px;
        margin-top: 50px;
        @media(min-width:1441px){
            margin-top: 78px;
        }
        @media (max-width: 992px) and (min-width: 768px){
            margin-top: 20px;
        }
        @media (max-width: 768px){
            margin-top: 0;
        }
        &__slider{
            position: relative;
            user-select: none;
            touch-action: pan-y;
            width: 70%;
            margin: 0 auto;
            @media(min-width:1441px){
                width: 936px;
                padding-left: 24px;
            }
            @media (max-width: 992px){
                width: 100%;
            }
        }
        &__list{
            width: 100%;
            overflow: hidden;
            // margin-left: 23px;
        }
        &__track{
            padding-top: 40px;
            display: flex;
            transition: transform 0.5s;
            transition-timing-function: ease-out;
            @media(min-width:1441px){
                padding-top: 0;
            }
            @media (max-width: 992px){
                padding-top: 0;
            }
        }
        &__slide{
            box-sizing: border-box;
            width: 100%;
            flex-shrink: 0;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                background: url("../assets/images/icons/slider-icon1.svg") no-repeat;
                background-size: cover;
                width: 115px;
                height: 96px;
                top: 77px;
                left: 0px;
                z-index: 5;
                @media (max-width:1441px) and (min-width: 992px) {
                    width: 90px;
                    height: 75px;
                }
                @media (max-width: 992px){
                    display: none;
                }
            }
            &::before{
                content: "";
                position: absolute;
                background: url("../assets/images/icons/slider-icon2.svg") no-repeat;
                background-size: cover;
                width: 115px;
                height: 96px;
                bottom: 45px;
                right: 20px;
                z-index: 5;
                @media (max-width:1441px) and (min-width: 992px) {
                    width: 90px;
                    height: 75px;
                }
                @media (max-width: 992px){
                    display: none;
                }
            }
        }
        &__title{
            color: #217A73;
            text-align: center;
            font-family: comfortaa;
            @media(min-width:1441px){
                font-size: 40px;
            }
            @media (max-width: 992px){
                font-size: 22px;
            }
        }
        &__text{
            text-align: center;
            color: #7D7D7D;
            margin-top: 50px;
            padding: 0 100px !important;
            margin-bottom: 8px;
            font-family: HelveticaNeueCyr-Roman;
            @media(min-width:1441px){
                // margin-top: 50px;
                font-size: 24px;
                line-height: 40px;
                padding-left: 123px !important;
            }
            @media (max-width:1441px) and(min-width: 992px) {
                padding: 0 65px;
                line-height: 30px;
            }
            @media (max-width: 992px) and (min-width: 768px) {
                padding: 0 50px !important;
                margin-top: 20px;
            }
            @media (max-width: 768px){
                padding: 0 !important;
                margin-top: 20px;
            }
        }
        &__item-info{
            display: flex;
            align-items: center;
            justify-content: center;
            poiner-events: none;
            @media(min-width:1441px){
                margin-top: 34px;
                margin-left: -68px;
            }
            img{
                poiner-events: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -o-user-select: none;
                user-select: none;
                -webkit-user-drag: none;
                -khtml-user-drag: none;
                -moz-user-drag: none;
                -o-user-drag: none;
                user-drag: none;
            }
            div{
                margin-left: 15px;
                h1{ margin: 0; font-size: 16px; color: #49d6cb;font-family: HelveticaNeueCyr-bold;line-height: 32px; }
                p{ margin: 0; font-family: HelveticaNeueCyr-Roman;}
            }
        }
        &__dots{
            padding-top: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__dot{
            cursor: pointer;
            margin-left: 8px;
            display: inline-block;
            background-color: #fff;
            border: 1px solid #49D6CB;
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
    }
    .dot-active{
        width: 12px;
        height: 12px;
        background-color: #49D6CB;
    }
    .active{
        &::after{
                content: "";
                position: absolute;
                background: url("../assets/images/icons/slider-icon1.svg") no-repeat;
                background-size: cover;
                width: 115px;
                height: 96px;
                top: 50px;
                left: -53px;
                z-index: 5;
                @media (max-width:1441px) and (min-width: 992px) {
                    width: 90px;
                    height: 75px;
                }
                @media (max-width: 992px){
                    display: none;
                }
            }
            &::before{
                content: "";
                position: absolute;
                background: url("../assets/images/icons/slider-icon2.svg") no-repeat;
                background-size: cover;
                width: 115px;
                height: 96px;
                bottom: 100px;
                right: -60px;
                z-index: 5;
                @media (max-width:1441px) and (min-width: 992px) {
                    width: 90px;
                    height: 75px;
                }
                @media (max-width: 992px){
                    display: none;
                }
            }
    }
</style>