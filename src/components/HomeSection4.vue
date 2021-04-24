<template lang="">
    <div class="homeSection4">
        <div class="container">
            <div class="homeSection4__title">
                <h2 class="home-title">How We Work?</h2>
                <h2 class="about-title">About PixYz Agency</h2>
            </div>
            <div class="homeSection4__grid">
                <img src="../assets/images/home/grid_img1.svg" class="homeSection4__img1" alt="">
                <div class="homeSection4__info1 ">
                    <h1>First discussion</h1>
                    <p>The first step is to give an overview of the problem we want to solve and / or our needs. If the needs are not properly understood, this will cause the creation of a web application that is designed for these purposes to fail.</p>
                </div>
                <img src="../assets/images/home/grid_img2.svg" class="homeSection4__img2" alt="">
                <div class="homeSection4__info2">
                    <h1>Requirements analysis</h1>
                    <p>The goal was to define the goals for implementing the web application. Tasks can be complex, and business logic is often quite complex. At this stage, it is important that these complex tasks can be broken down into more manageable tasks and, therefore, they are easier to implement, verify, and test.</p>
                </div>
                <img src="../assets/images/home/grid_img3.svg" class="homeSection4__img3" alt="">
                <div class="homeSection4__info3">
                    <h1>Timeline and Cost Estimation</h1>
                    <p>Experience is a good ally when it comes to making the right assessment. If a similar task was completed earlier, it becomes easier to give an accurate estimate, and time tracking becomes our recommendation. From the previous step, we can collect all the pieces that we are going to collect from end to end. For each task, we analyze its complexity and make a classification.</p>
                </div>
                <img src="../assets/images/home/grid_img4.svg" class="homeSection4__img4 about-grid" alt="">
                <div class="homeSection4__info4 about-grid">
                    <h1>The design, Conception, and planing</h1>
                    <p>The evaluation gives us an idea of the time required to complete the entire project. At this stage, our goal is to answer the following questions: who does what and when? What is the best technical approach?</p>
                </div>
                <img src="../assets/images/home/grid_img5.svg" class="homeSection4__img5 about-grid" alt="">
                <div class="homeSection4__info5 about-grid">
                    <h1>The development</h1>
                    <p>This is the most famous step. Once the product requirements document is installed, the development phase can begin. The goal of this stage is to create an application that meets the needs identified in previous stages, and since needs tend to evolve and new implementation ideas may arise during the implementation stage, it is usually recommended to use a methodology that provides flexibility and proactivity.</p>
                </div>
                <img src="../assets/images/home/grid_img6.svg" class="homeSection4__img6 about-grid" alt="">
                <div class="homeSection4__info6 about-grid">
                    <h1>The testing phase</h1>
                    <p>This stage is also called the user acceptance test. At this stage, the test group of users checks the feature set and reports errors, if any. if there are any changes, you can discuss them with the project Manager, who will advise you on the best way to account for input data and feedback.</p>
                </div>
                <div class="homeSection4__img7 about-grid"><img src="../assets/images/home/grid_img7.svg" alt=""></div>
                <div class="homeSection4__info7 about-grid">
                    <h1>The deployment and post-production phase</h1>
                    <p style="padding-top:5px">After each feature in a given release has been checked and all error messages have been fixed, the deployment stage may begin, this may be the first launch or deployment of a new release, this is the moment when the web application will work in its real environment.<br>Some behaviors only appear in the production environment, such as performance load balancer.it is important to set aside time for support and maintenance to fix any errors or performance issues found after the application is launched.<br><br>New ideas for expansion may appear as soon as the app is up and running, the post-production phase is the best time to discuss other needs.</p>
                </div>
            </div> 
            <div class="homeSection4__button"><button><router-link to="/aboutUs">FULL STEPS</router-link></button></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeSection4',
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
    .homeSection4{
        position: relative;
        @media (min-width:1441px) { top: -100px }
        @media (max-width:1441px) and (min-width: 1200px) { top: -50px }
        &__title{
            display: block !important;
            text-align: center;
            margin-bottom: 155px;
            margin-top: 0;
            font-family: comfortaa;
            color: #217A73;
            position: relative;
            &::after{
                content: "";
                background: url("../assets/images/icons/grid-arrow-icon1.svg") no-repeat center/cover;
                position: absolute;
                left: 43%;
                z-index: 2;
                width: 287.164px;
                height: 171.847px;
                @media (min-width:1441px){
                    top:60px;
                }
                @media (max-width:1441px) and (min-width:1200px){
                    width: 260px;
                    height: 155.6px;
                }
                @media (max-width:1200px) and (min-width:992px){
                    width: 230px;
                    height: 137px;
                }
                @media (max-width:992px) {
                    display: none;
                }
            }
            @media (min-width:1441px) { h2{ font-size: 40px;} }
            @media (min-width:992px) and (max-width:1440px) { h2{ font-size: 24px;} }
            @media (min-width:576px) and (max-width:992px) { h2{ font-size: 22px;} margin-bottom: 20px; }
            @media (max-width:576px) { h2{ font-size: 18px;} margin-bottom: 20px; }
        }
        &__grid{
            display: grid;
            grid-template-areas: 
            'img1 info1'
            'info2 img2'
            'img3 info3'
            'info4 img4'
            'img5 info5'
            'info6 img6'
            'img7 info7';
            align-items: center;
            grid-template-columns: 1fr 1fr;
            h1{ color: #217A73; font-family: comfortaa;}
            p{ color: #8A8A8A; line-height: 40px; font-family: HelveticaNeueCyr-Roman;}
            @media (min-width:1441px) { p{ font-size: 24px;} }
            @media (min-width:1200px) and (max-width:1440px) { h1{ font-size: 30px;} p{font-size: 20px;} }
            @media (min-width:992px) and (max-width:1200px) { h1{ font-size: 24px;} p{font-size: 15px; line-height: 30px;} img{ width: 330px; } }
            @media (min-width:768px) and (max-width:992px) { h1{ font-size: 24px;} p{font-size: 15px; line-height: 20px; } img{ width: 270px; } }
            @media (min-width:576px) and (max-width:768px) {
                display: block;
                text-align: center;
                img{
                    width: 300px;
                }
                h1{
                    font-size: 24px;
                }
                p{
                    text-align: start;
                    line-height: 30px;
                    font-size: 15px;
                }
            }
            @media (max-width:576px) {
                display: block;
                text-align: center;
                img{
                    width: 250px;
                }
                h1{
                    font-size: 24px;
                }
                p{
                    text-align: start;
                    line-height: 30px;
                    font-size: 15px;
                }
            }
        }
        .about-grid{
            display:none;
        }
        &__img1{
            margin: 0 auto;
            grid-area: img1;
            padding-bottom: 235px;
            @media (min-width:1441px){
                // padding-left: 15px;
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
        }
        &__img2{
            margin: 0 auto;
            grid-area: img2;
            padding-bottom: 200px;
            @media (min-width:1441px){
                padding-bottom: 250px;
                margin: 0;
                margin-left: auto;
                margin-right: 55px;
                margin-top: 40px;
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
        }
        &__img3{
            margin: 0 auto;
            grid-area: img3;
            padding-bottom: 100px;
            @media(min-width:1441px){
                padding-right: 100px;
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
        }
        &__img4{
            margin: 0 auto;
            grid-area: img4;
            padding-bottom: 200px;
            margin-top: 18px;
            @media(min-width:1441px){
                padding-left: 165px;
            }
            @media (max-width: 1441px) and (min-width: 1200px){
                padding-bottom: 150px;
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
            @media (max-width:1200px) and (min-width:992px){
                padding-bottom: 100px;
            }
        }
        &__img5{
            margin: 0 auto;
            grid-area: img5;
            padding-bottom: 200px;
            padding-top: 57px;
            padding-right: 137px;
            @media (max-width: 1441px) and (min-width: 1200px){
                padding-bottom: 150px;
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
            @media (max-width:1200px) and (min-width:992px){
                padding-bottom: 100px;
            }
            @media(max-width:992px){
                padding-right: 0;
            }
        }
        &__img6{
            margin: 0 auto;
            grid-area: img6;
            padding-bottom: 243px;
            padding-top: 25px;
            padding-left: 10px;
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
        }
        &__img7{
            position: relative;
            z-index: -1;
            margin: 0 auto;
            grid-area: img7;
            padding-bottom: 0;
            padding-right: 150px;
            top: -225px;
            // margin-bottom: 500px;
            img{
                position: absolute;
                right: 0;
                @media(min-width:1441px){
                    // top: -235px;
                    right: -28px;
                }
                @media(max-width:1200px) and (min-width: 992px){
                    width: 270px;
                    top: 70px;
                }
                @media (max-width:992px){
                    top: 200px !important;
                }
                @media(max-width:768px) and (min-width:441px){
                    right: 70px;
                }
                @media(max-width:441px){
                    right: 0;
                }
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
                height:260px;
                // right: 100px;
                img{
                    top: 0;
                    height: 700px;
                }
            }
        }
        &__info1{
            grid-area: info1;
            position: relative;
            padding-bottom: 235px;
            &::after{
                content: "";
                background: url("../assets/images/icons/grid-arrow-icon2.svg") no-repeat center/cover;
                position: absolute;
                right: 90px;
                bottom: -60px;
                z-index: 2;
                width: 1200px;
                height: 350px;
            }
            @media (min-width:1441px){
                h1{
                    margin-top: 40px;
                    margin-left: 5px;
                }
                p{
                    margin-top: 29px;
                    margin-left: 7px;
                }
                &::after{
                    right: 95px;
                    bottom: -72px;
                }
            }
            @media (max-width:1441px) and (min-width:1200px){
                &::after{
                    width: 1000px;
                    height: 291.6667px;
                }
            }
            @media (max-width:1200px) and (min-width:992px){
                    &::after{
                        width: 800px;
                        height: 233.336px;
                    }
                }
            @media (max-width:992px) {
                padding-bottom: 30px;
                &::after{ display: none; }
            }
        }
        &__info2{
            grid-area: info2;
            padding-bottom: 200px;
            position: relative;
            &::after{
                content: "";
                background: url("../assets/images/icons/grid-arrow-icon3.svg") no-repeat center/cover;
                position: absolute;
                left: 90%;
                z-index: 2;
                bottom: -48px;
                width: 650px;
                height: 315px;
            }
            @media(min-width:1441px){
                padding-bottom: 250px;
                h1{
                    margin-top: 44px;
                }
                &::after{
                    bottom: -55px;
                    left: 91%;
                    width: 599.21px;
                    height: 301.08px;
                }
            }
            @media (max-width:1441px) and (min-width:1200px){
                &::after{
                    width: 500px;
                    height: 242px;
                }
            }
            @media (max-width:1200px) and (min-width:992px){
                &::after{
                    width: 450px;
                    height: 218px;
                }
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
                &::after{ display: none; }
            }
        }
        &__info3{
            grid-area: info3;
            padding-bottom: 100px;
            position: relative;
            &::after{
                content: "";
                background: url("../assets/images/icons/grid-arrow-icon4-home.svg") no-repeat center/cover;
                position: absolute;
                right: -30px;
                bottom: -45px;
                z-index: 2;
                width: 740px;
                height: 165px;
            }
            @media (max-width:1441px) and (min-width:1200px){
                &::after{
                    width: 600px;
                    height: 134px;
                    bottom: -30px;
                }
            }
            @media (max-width:1200px) and (min-width:992px){
                &::after{
                    width: 500px;
                    height: 111.67px;
                    bottom: -60px;
                }
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
                &::after{ display: none; }
            }
        }
        &__info4{
            grid-area: info4;
            padding-bottom: 200px;
            position: relative;
            padding-top: 60px;
            &::after{
                content: "";
                background: url("../assets/images/icons/grid-arrow-icon6.svg") no-repeat center/cover;
                position: absolute;
                left: 43%;
                top: 54%;
                z-index: 2;
                width: 904.08px;
                height: 346.27px;
            }
            @media (max-width:1441px) and (min-width:1200px){
                padding-bottom: 150px;
                &::after{
                    left: 70%;
                    top: 60%;
                    width: 550px;
                    height: 210.57px;
                }
            }
            @media (max-width:1200px) and (min-width:992px){
                padding-bottom: 100px;
                &::after{
                    width: 500px;
                    height: 191.427px;
                }
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
                &::after{ display: none; }
            }
        }
        &__info5{
            grid-area: info5;
            padding-bottom: 200px;
            padding-top: 48px;
            position: relative;
            &::after{
                content: "";
                background: url("../assets/images/icons/grid-arrow-icon7.svg") no-repeat center/cover;
                position: absolute;
                top: 61%;
                right: 98px;
                z-index: 2;
                width: 1122.33px;
                height: 329.26px;
            }
            @media (max-width:1441px) and (min-width:1200px){
                padding-bottom: 150px;
                &::after{
                    top: 65%;
                    width: 800px;
                    height: 234.696px;
                }
            }
            @media (max-width:1200px) and (min-width:992px){
                padding-bottom: 100px;
                &::after{
                    top: 62%;
                    width: 600px;
                    height: 176px;
                }
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
                &::after{ display: none; }
            }
        }
        &__info6{
            grid-area: info6;
            padding-bottom: 270px;
            position: relative;
            padding-top: 50px;
            &::after{
                content: "";
                background: url("../assets/images/icons/grid-arrow-icon8.svg") no-repeat center/cover;
                position: absolute;
                right: 10px;
                bottom: -144px;
                z-index: 2;
                width: 227.23px;
                height: 453.25px;
            }
            @media (max-width:1441px) and (min-width:1200px){
                &::after{
                    width: 227.23px;
                    height: 453.25px;
                    bottom: -140px;
                }
            }
            @media (max-width:1200px) and (min-width:992px){
                &::after{
                    width: 200px;
                    height: 399px;
                    bottom: -100px;
                }
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
                &::after{ display: none; }
            }
        }
        &__info7{
            margin-top: 10px;
        }
        &__button{
            text-align: center;
            // margin-bottom: 60px;
            button{
                cursor: pointer;
                font-size: 16px;
                font-family: Arial;
                color: #fff;
                width: 200px;
                height: 50px;
                background-color: rgba(0, 0, 0, 0);
                border: 1px solid #49D6CB;
                border-radius: 5px;
                position: relative;
                transition: 0.4s;
                outline: none;
                &::after{
                    content: "";
                    width: 100%;
                    height: 100%;
                    background-color: #49D6CB;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    z-index: -1;
                    transition: 0.4s;
                }
                &:hover{
                    color: #49D6CB;
                    &::after{
                        height: 0;
                    }
                }
            }
            @media (max-width:992px) and (min-width:768px) {
                margin-top: 20px;
            }
            @media (max-width:768px) {
                margin-top: 0px;
            }
        }
    }
    .about-title{
        display: none;
    }
</style>