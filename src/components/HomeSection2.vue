<template>
    <div class="homeSection2">
        <img class="homeSection2__leftBackground" src="../assets/images/icons/home_section2_left_img.svg" alt="">
        <img class="homeSection2__rightBackground" src="../assets/images/icons/home_section2_right_img.svg" alt="">
        <div class="container">
            <div>
                <h1 class="homeSection2__title">How PixYz IT make your life easier</h1>
                <p class="homeSection2__text">Working fast, Proactively and strategically as your trusted Managed Services Provider, we can take away the burden of mundane day-to-day tasks, protect your organization from security threats, manage your IT infrastructure and workloads, as well as help you to achieve an awful lot more - discover how PixYz IT can support you and help you to transform your <span>Working fast, Proactively and strategically as your trusted Managed Services Provider, we can take away the burden of mundane day-to-day tasks, protect your organization from security threats, manage your IT infrastructure and workloads, as well as help you to achieve an awful lot more - discover how PixYz IT can support you and help you to transform your </span></p>               
                <img src="../assets/images/icons/homeSection2_arrow.svg" alt="">
            </div>
            
        </div>        
    </div>
</template>
<script>
export default {
    name: 'HomeSection2'
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
    .homeSection2{
        position: relative;
        &__rightBackground{
            position: absolute;
            right: 0;
            top: 0;
            // width: 54.03125%;
            z-index: -1;
            @media (min-width:1441px) {
                top: 77px;
            }
            @media (min-width:1200px) and (max-width:1440px) {
                width: 728.8px;
            }
            @media (min-width:992px) and (max-width:1200px) {
                top: 23px;
                width: 648px;
            }
            @media (min-width:768px) and (max-width:992px) {
                top: -82px;
                width: 535px;
            }
            @media (min-width:576px) and (max-width:768px) {
                top: -140px;
                width: 414px;
            }
            @media (min-width:441px) and (max-width:576px) {
                top: -162px;
                width: 311px;
            }
            @media (max-width:441px) and (min-width:271px) {
                top: -204px;
                width: 238px;
            }
            @media (max-width:271px) and (min-width:269px) {
                top: -205px;
                width: 238px !important;
            }
            @media (max-width:268px){
                top: -220px;
                width: 238px !important;
            }
        }
        &__leftBackground{
            position: absolute;
            left: 0;
            // top: 0;
            // width: 54.03125%;
            z-index: -1;
            @media (min-width:1441px) {
                // top: 105px;
                bottom: 156px;
            }
            @media (min-width:1200px) and (max-width:1440px) {
                // top: 0;
                bottom: 50px;
                width: 778px;
            }
            @media (min-width:992px) and (max-width:1200px) {
                // top: 0;
                bottom: 50px;
                width: 648px;
            }
            @media (min-width:768px) and (max-width:992px) {
                // top: -70px;
                bottom: -65px;
                width: 535px;
            }
            @media (min-width:576px) and (max-width:768px) {
                // top: 40px;
                bottom: -65px;
                width: 414px;
            }
            @media (min-width:441px) and (max-width:576px) {
                // top: 67px;
                bottom: -15px;
                width: 311px;
            }
            @media (max-width:441px) and (min-width:271px) {
                // top: 290px;
                bottom: -15px;
                max-width: 238px;
            }
            @media (max-width:271px) {
                // top: 280px;
                bottom: -15px;
                max-width: 238px;
            }
            // @media (max-width: 264px) and (min-width:256px){
            //     top: 297px;
            //     max-width: 238px;
            // }
            // @media (max-width:256px){
            //     top: 350px;
            //     max-width: 238px;
            // }
        }
        div{
            padding-top: 50px;
            img{
                display: block;
                margin: 0 auto;
                position: relative;
                z-index: 2;
                @media (min-width:1441px) {
                    top: -60px;
                    left: 96px;
                }
                @media (max-width: 1441px) and (min-width: 992px){
                    left: 115px;
                }
                @media (max-width:992px) {
                    display: none;
                }
            }
            @media (min-width:1441px) {
                padding-top: 124px;
            }
            @media (max-width:992px) {
                padding-top: 0;
            }
        }
        &__title{
            text-align: center;
            position: relative;
            font-family: comfortaa;
            color: #217A73;
            font-size: 24px;
            @media (min-width:1441px) {
                font-size: 40px;
            }
            @media (min-width:576px) and (max-width:992px) {
                font-size: 22px;
            }
            @media (max-width:768px) {
                font-size: 18px;
            }
        }
        &__text{
            color: #8A8A8A;
            font-family: HelveticaNeueCyr-Roman;
            position: relative;
            text-align: center;
            @media (min-width:1441px) {
                font-size: 24px;
                line-height: 40px;
                text-align: start;
                span{
                    display: block;
                }
            }
            @media (max-width:1441px) and (min-width:992px) {
                line-height: 30px;
            }
            @media (min-width:576px) and (max-width:992px) {
                font-size: 14px;
            }
            @media (max-width:768px) {
                font-size: 14px;
            }
        }
    }
</style>