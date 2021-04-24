<template>
    <div class="homeSection1">
        <img class="homeSection1__background_left" src="../assets/images/icons/header_fon_img.svg" alt="">
        <img class="homeSection1__background_right" src="../assets/images/icons/header_fon_img_right.svg" alt="">
        <div class="container">
            <div class="homeSection1__text">
                <h1>Digital Agency and Marketing</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </p>
            </div>
            <img src="../assets/images/home/section1.svg" alt="" class="homeSection1__img">
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeSection1',
}
</script>
<style lang="scss">
@font-face {
    font-family: "HelveticaNeueCyr-bold";
    src: url("../assets/fonts/HelveticaNeueCyr-bold.otf") format('truetype');
}
@font-face {
    font-family: "HelveticaNeueCyr-Roman";
    src: url("../assets/fonts/HelveticaNeueCyr-Roman.otf") format('truetype');
}
    .homeSection1{
        margin-bottom: 91px;
        position: relative;
        &__background_left{
            position: absolute;
            z-index: -1;
            top: -70px;
            left: 0;
            width: 30%;
        }
        &__background_right{
            position: absolute;
            z-index: -1;
            right: 0;
            top: -70px;
            /* width: 54.2239583%; */
            @media (min-width:1200px) and (max-width:1440px) {
                width: 731px;
            }
            @media (min-width:992px) and (max-width:1200px) {
                width: 648px;
            }
            @media (min-width:768px) and (max-width:992px) {
                width: 535px;
            }
            @media (min-width:576px) and (max-width:768px) {
                width: 415px;
            }
            @media (min-width:441px) and (max-width:576px) {
                width: 311px;
            }
            @media (max-width:441px){
                width: 238px;
            }
            // @media (max-width:252px) {
            //     width: 136px;
            // }
        }
        .container{
            display: flex;
            flex-direction: row;
            justify-content: end;
            @media (max-width:992px) {
                flex-direction: column;
                align-items: center;
            }
        }
        &__text{
            width: 54%;
            margin-top: 100px;
            position: relative;
            h1{
                font-family: HelveticaNeueCyr-bold;
            }
            p{
                font-family: HelveticaNeueCyr-Roman;
            }
            @media (max-width:992px) {
                margin-top: 20px !important;
            }
            &::before{
                content: url('../assets/images/icons/section1_text_back.svg');
                position: absolute;
                z-index: -1;
                left: 90px;
                top: -60px;
                @media (min-width:1441px) {
                    top: -36px;
                    left: 170px;
                }
                @media (max-width: 992px) {
                    display: none;
                }
            }
            &::after{
                content: url('../assets/images/icons/section1_after_img.svg');
                position: absolute;
                left: -67px;
                top: 65px;
                @media (min-width:1441px) {
                    top: 80px;
                }
                @media (max-width:1200px) {
                    display: none;
                }
            }
            @media (min-width:1441px) {
                margin-top: 222px;
                h1{
                    font-size: 56px;
                    line-height: 72px;
                    width: 401px;
                    margin-bottom: 18px;
                }
                p{
                    margin-top: 0;
                    font-size: 24px;
                    line-height: 32px;
                }
            }
            @media (min-width:1200px) and (max-width:1440px) {
                margin-top: 160px;
                h1{
                font-size: 40px;
                }
                p{
                font-size: 20px;
                }
            }
            @media (max-width:992px) and (min-width:576px) {
                width: 100%;
                margin-top: 50px;
                text-align: center;
                h1{
                font-size: 24px;
                }
                p{
                font-size: 16px;
                }
            }
            @media (max-width:576px){
                width: 100%;
                margin-top: 50px;
                text-align: center;
                h1{
                font-size: 18px;
                }
                p{
                font-size: 14px;
                }
            }
        }
        &__img{
            width: 46%;
            margin-top: 55px;
            margin-left: auto;
            @media (min-width:1441px) {
                margin-top: 185px;
            }
            @media (min-width:1200px) and (max-width:1440px) {
                margin-top: 90px;
            }
            @media (max-width:992px) {
                margin-top: 25px;
                margin-left: 0;
            }
        }
    }
</style>