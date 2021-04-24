<template lang="">
    <div class="homeSection5">
        <div class="homeSection5__row">
            <div class="container">
                <h1 class="homeSection5__title">Specialties and Technologies</h1>
                <p class="homeSection5__text">Our stratigists, designers, architectecs, developers and quality analysts excel in every technology powering native, hybrid, cross- platform and custom software development.</p>
                <div class="homeSection5__box">
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_1.png" alt=""><span>Javascript</span></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_2.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_3.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_4.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_5.png" alt=""><span>ReactJs</span></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_6.png" alt=""><span>Java</span></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_7.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_8.png" alt=""><span>Android</span></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_9.png" alt=""><span>IOS</span></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_10.png" alt=""><span>MySql</span></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_11.png" alt=""><span>Phyton</span></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_12.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_13.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_14.png" alt=""><span>CSS</span></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_15.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_16.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_17.png" alt=""></div></div>
                    <div><div class="homeSection5__items"><img src="../assets/images/icons/techno_18.png" alt=""></div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeSection5'
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
    .homeSection5{
        .container{
            position: relative;
            &::after{
                content: "";
                position: absolute;
                background: url("../assets/images/icons/background-icon1.svg") no-repeat;
                background-size: cover;
                width: 270px;
                height: 270px;
                top: 40px;
                left: -70px;
                z-index: 0;
                @media (max-width:1441px) and (min-width: 1200px){
                    width: 250px;
                    height: 250px;
                    top: 0px;
                }
                @media (max-width:1200px) and (min-width: 992px){
                    width: 230px;
                    height: 230px;
                    top: 0px;
                }
                @media (max-width:992px) and (min-width: 768px){
                    width: 210px;
                    height: 210px;
                    top: 0px;
                }
                @media (max-width:768px) and (min-width: 576px){
                    width: 170px;
                    height: 170px;
                    top: 30px;
                }
                @media (max-width:576px){
                    width: 130px;
                    height: 130px;
                    top: 60px;
                }
            }
        }
        &__title{
            text-align: center;
            color: #217A73;
            font-family: comfortaa;
            @media (min-width:1441px){
                font-size: 40px;
                margin-top: 0;
            }
            @media (max-width:992px) {
                margin-top: 30px;
                font-size: 22px;
            }
        }
        &__text{
            position: relative;
            z-index: 1;
            color: #7D7D7D;
            @media (min-width:1441px){
                margin-top: 52px;
                font-size: 24px;
                line-height: 40px;
            }
        }
        &__box{
            display: flex;
            flex-wrap: wrap;
            margin-top: 47px;
            position: relative;
            z-index: 1;
            div{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
                @media (min-width:1441px) {
                    width: 10%;
                }
                @media (min-width:992px) and (max-width:1440px) {
                    width: 12.5%;
                }
                @media (min-width:768px) and (max-width:992px) {
                    width: 14.2857143%;
                }
                @media (min-width:576px) and (max-width:768px) {
                    width: 20%;
                }
                @media (min-width:441px) and (max-width:576px) {
                    width: 33.3%;
                }
                @media (max-width:441px){
                    width: 50%;
                }
            }
        }
        &__items{
            box-sizing: border-box;
            border: 1px solid #fff;
            border-radius: 12px;
            width: 104.5px !important;
            padding-bottom: 25px;
            height: 120px;
            position: relative;
            background: #fff;
            span{
                position: absolute;
                bottom: 15px;
                display: none;
                color: #7D7D7D;
                font-family: HelveticaNeueCyr-Roman;
            }
            &:hover{
                border: 1px solid #49d6cba3;
                -webkit-box-shadow: 3px 3px 30px 0px rgba(0,0,0,0.2); 
                box-shadow: 3px 3px 30px 0px rgba(0,0,0,0.2);
                span{
                    display: block;
                }
            }
        }
    }
</style>