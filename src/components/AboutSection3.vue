<template lang="">
    <div class="aboutSection3">
        <div class="container">
            <div class="aboutSection3">
                <img src="../assets/images/home/grid_img1.svg" class="aboutSection3__img1" alt="">
                <div class="aboutSection3__info1 ">
                    <h1>First discussion</h1>
                    <p>The first step is to give an overview of the problem we want to solve and / or our needs. If the needs are not properly understood, this will cause the creation of a web application that is designed for these purposes to fail.</p>
                </div>
                <img src="../assets/images/home/grid_img2.svg" class="aboutSection3__img2" alt="">
                <div class="aboutSection3__info2">
                    <h1>Requirements analysis</h1>
                    <p>The goal was to define the goals for implementing the web application. Tasks can be complex, and business logic is often quite complex. At this stage, it is important that these complex tasks can be broken down into more manageable tasks and, therefore, they are easier to implement, verify, and test.</p>
                </div>
                <img src="../assets/images/home/grid_img3.svg" class="aboutSection3__img3" alt="">
                <div class="aboutSection3__info3">
                    <h1>Timeline and Cost Estimation</h1>
                    <p>Experience is a good ally when it comes to making the right assessment. If a similar task was completed earlier, it becomes easier to give an accurate estimate, and time tracking becomes our recommendation. From the previous step, we can collect all the pieces that we are going to collect from end to end. For each task, we analyze its complexity and make a classification.</p>
                </div>
            </div> 
            <div class="aboutSection3__button"><button>FULL STEPS</button></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AboutSection3',
}
</script>
<style lang="scss">
    @font-face {
        font-family: "comfortaa";
        src: url("../assets/fonts/Comfortaa-Bold.ttf") format('truetype');
    }
    .aboutSection3{
        position: relative;
        @media (min-width:1441px) { top: -100px }
        &__grid{
            display: grid;
            grid-template-areas: 
            'img4 info4'
            'info5 img5'
            'img6 info6';
            align-items: center;
            font-family: comfortaa;
            h1{ color: #217A73; }
            p{ color: #8A8A8A; line-height: 40px; }
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
        &__img3{
            margin: 0 auto;
            grid-area: img1;
            padding-bottom: 235px;
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
        }
        &__img4{
            margin: 0 auto;
            grid-area: img2;
            padding-bottom: 200px;
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
        }
        &__img5{
            margin: 0 auto;
            grid-area: img3;
            padding-bottom: 100px;
            @media (max-width:992px) {
                padding-bottom: 30px;
            }
        }
        &__info4{
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
        &__info5{
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
        &__info6{
            grid-area: info3;
            padding-bottom: 100px;
            position: relative;
            &::after{
                content: "";
                background: url("../assets/images/icons/grid-arrow-icon4.svg") no-repeat center/cover;
                position: absolute;
                right: 0;
                bottom: -20px;
                z-index: 2;
                width: 740px;
                height: 165px;
            }
            @media (max-width:1441px) and (min-width:1200px){
                &::after{
                    width: 600px;
                    height: 134px;
                }
            }
            @media (max-width:1200px) and (min-width:992px){
                &::after{
                    width: 500px;
                    height: 111.67px;
                }
            }
            @media (max-width:992px) {
                padding-bottom: 30px;
                &::after{ display: none; }
            }
        }

        &__button{
            text-align: center;
            // margin-bottom: 60px;
            button{
                cursor: pointer;
                font-size: 16px;
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
            @media (max-width:992px) {
                margin-top: 30px;
            }
        }
    }
</style>