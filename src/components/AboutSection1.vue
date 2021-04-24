<template>
    <div>
        <div class="aboutSection1">
            <div class="aboutSection1__img-front"></div>
            <h1 class="aboutSection1__title">How we work</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutSection1'
}
</script>
<style lang="scss">
@font-face {
    font-family: "comfortaa";
    src: url("../assets/fonts/Comfortaa-Bold.ttf") format('truetype');
  }
    .aboutSection1{
        background: url("../assets/images/about/about-img.svg") no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 380px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &__img-front{
            background-color: #49D6CB;
            opacity: 0.25;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        &__title{
            position: relative;
            font-family: comfortaa;
            color: #fff;
            z-index: 5;
            @media(min-width:1441px){
                font-size: 40px;
            }
        }
        @media (min-width:1200px) and (max-width:1440px) {
            height: 300px;
        }
        @media (min-width:992px) and (max-width:1200px) {
            height: 250px;
        }
        @media (min-width:768px) and (max-width:992px) {
            height: 230px;
        }
        @media (min-width:576px) and (max-width:768px) {
            height: 200px;
        }
        @media (min-width:441px) and (max-width:576px) {
            height: 180px;
        }
        @media (max-width:441px) {
            height: 150px;
        }
    }
</style>