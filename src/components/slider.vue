<template lang="">
    <div class="homeSection6">
        <div class="container">
            <div class="homeSection6__slider-box">
                <div class="homeSection6__item active">
                    <h1 class="homeSection6__title">1Customer Testimonials</h1>
                    <p class="homeSection6__text">In promotion and advertising, a testimonial or show consists of a 
                        person's written or spoken statement extolling the virtue of a 
                        product. The term "testimonial" most commonly applies to the 
                        sales-pitches attributed to ordinary citizens, whereas the word 
                        "endorsement" usually applies to pitches by celebrities. 
                        Testimonials can be part of communal marketing. Sometimes, the 
                        cartoon character can be a testimonial in a commercial.</p>
                        <div class="homeSection6__item-info">
                            <img src="../assets/images/home/home-slider-img1.svg" alt="">
                            <div>
                                <h1>Sevara Nazarxon</h1>
                                <p>CEO of HP, Amazon</p>
                            </div>
                        </div>
                </div>
                <div class="homeSection6__item">
                    <h1 class="homeSection6__title">2Customer Testimonials</h1>
                    <p class="homeSection6__text">In promotion and advertising, a testimonial or show consists of a 
                        person's written or spoken statement extolling the virtue of a 
                        product. The term "testimonial" most commonly applies to the 
                        sales-pitches attributed to ordinary citizens, whereas the word 
                        "endorsement" usually applies to pitches by celebrities. 
                        Testimonials can be part of communal marketing. Sometimes, the 
                        cartoon character can be a testimonial in a commercial.</p>
                        <div class="homeSection6__item-info">
                            <img src="../assets/images/home/home-slider-img1.svg" alt="">
                            <div>
                                <h1>Sevara Nazarxon</h1>
                                <p>CEO of HP, Amazon</p>
                            </div>
                        </div>
                </div>
                <div class="homeSection6__item">
                    <h1 class="homeSection6__title">3Customer Testimonials</h1>
                    <p class="homeSection6__text">In promotion and advertising, a testimonial or show consists of a 
                        person's written or spoken statement extolling the virtue of a 
                        product. The term "testimonial" most commonly applies to the 
                        sales-pitches attributed to ordinary citizens, whereas the word 
                        "endorsement" usually applies to pitches by celebrities. 
                        Testimonials can be part of communal marketing. Sometimes, the 
                        cartoon character can be a testimonial in a commercial.</p>
                        <div class="homeSection6__item-info">
                            <img src="../assets/images/home/home-slider-img1.svg" alt="">
                            <div>
                                <h1>Sevara Nazarxon</h1>
                                <p>CEO of HP, Amazon</p>
                            </div>
                        </div>
                </div>
                <div class="homeSection6__change-box">
                    <span v-on:click="changeSlider(0)" class="homeSection6__slider-button button-active"></span>
                    <span v-on:click="changeSlider(1)" class="homeSection6__slider-button"></span>
                    <span v-on:click="changeSlider(2)" class="homeSection6__slider-button"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeSection6',
    data() {
        let index=0;
        return {
            index
        }
    },
    methods: {
        changeSlider(e){
            let a=document.getElementsByClassName('homeSection6__item');
            let b=document.getElementsByClassName('homeSection6__slider-button');
            a[this.index].classList.remove('active');
            b[this.index].classList.remove('button-active');
            a[e].classList.add('active');
            b[e].classList.add('button-active');
            this.index=e;
        }

    },
}
</script>
<style lang="scss">
    .homeSection6{
        background-color: #F4F6FC;
        padding: 60px 0;
        margin-top: 50px;
        &__item{
            display: none;
        }
        &__slider-box{
            width: 60%;
            margin: 0 auto;
            position: relative;
            @media (max-width: 992px){
                width: 100%;
            }
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
                right: -53px;
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
            margin-top: 55px;
            padding: 0 45px;
            margin-bottom: 8px;
            @media(min-width:1441px){
                font-size: 24px;
                line-height: 1.8;
            }
            @media (max-width:1441px) and(min-width: 992px) {
                padding: 0 65px;
            }
            @media (max-width: 992px) and (min-width: 768px) {
                padding: 0 10px;
                margin-top: 20px;
            }
            @media (max-width: 768px){
                padding: 0;
                margin-top: 20px;
            }
        }
        &__item-info{
            display: flex;
            align-items: center;
            justify-content: center;
            div{
                margin-left: 15px;
                h1{ margin: 0; font-size: 16px; color: #49d6cb; }
                p{ margin: 0; }
            }
        }
        &__change-box{
            padding-top: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__slider-button{
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
    .active{
        display: block !important;
    }
    .button-active{
        width: 12px;
        height: 12px;
        background-color: #49D6CB;
    }
</style>