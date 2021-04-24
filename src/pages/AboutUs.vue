<template>
    <div>
        <Header />
        <Section1 />
        <div class="about"><Section2 /></div>
        <div class="about"><Footer /></div>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Section1 from '../components/AboutSection1.vue';
import Section2 from '../components/HomeSection4.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'AboutUs',
    components:{
        Header,
        Section1,
        Section2,
        Footer
    }
}
</script>

<style lang="scss">
@import '../assets/scss/container';
body{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
a:hover{
  cursor: pointer;
  color: unset !important;
}
.about{
  .homeSection4{
    padding-top: 98px;
    top: unset;
    &__title{
      margin-bottom: 0;
      .home-title{
        display: none !important;
      }
      .about-title{
        margin: 0;
        display: block !important;
      }
      &::after{
        display: none;
      }
    }
    &__grid{
      margin-top: 50px;
      @media(min-width:1441px){
        margin-top: 78px !important;
      }
      @media (max-width:992px){
        margin-bottom: 80px;
      }
    }
    &__button{
      display: none;
    }
    &__img1{
      padding-left: 15px;
    }
    &__img2{
      margin-right: 41px;
    }
    &__img3{
      padding-bottom: 300px;
      @media (min-width:1441px){
        padding-top: 17px;
        padding-left: 28px;
        width: 334px;
        height: 401px;
      }
      @media (max-width:1441px) and (min-width:1200px){
        padding-bottom: 200px;
      }
      @media (max-width:1200px) and (min-width:992px){
        padding-bottom: 100px;
      }
      @media (max-width:992px){
        padding-bottom: 50px;
      }
    }
    &__info1{
      &::after{
        right: 80px;
        bottom: -78px;
      }
    }
    &__info2{
      &::after{
        left: 94%;
      }
    }
    
    &__info3{
      padding-bottom: 300px;
      padding-top: 30px;
      &::after{
        background: url("../assets/images/icons/grid-arrow-icon4.svg") no-repeat center/cover;
        right: -53px;
        bottom: -98px;
        width: 1408.22px;
        height: 429.65px;
      }
      @media (max-width:1441px) and (min-width:1200px){
        padding-bottom: 200px;
        &::after{
          width: 1000px;
          height: 305.15px;
          right: 0;
        }
      }
      @media (max-width:1200px) and (min-width:992px){
        padding-bottom: 100px;
        &::after{
          width: 800px;
          height: 244px;
          bottom: -120px;
          right: 30px;
        }
      }
      @media (max-width:992px){
        padding-bottom: 50px;
        &::after{
          display: none;
        }
      }
      
    }
  }
  .footer{
    margin-top: 68px;
  }
  .about-grid{
    display: block;
  }
}
</style>