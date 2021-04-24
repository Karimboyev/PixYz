<template>
    <div>
        <Header />
        <Section1 />
        <Section2 />
        <div class="contact"><Section3 /></div>
        <Section4 />
        <div class="contact"><Footer /></div>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Section1 from '../components/ContactSection1.vue';
import Section2 from '../components/ContactSection2.vue';
import Section3 from '../components/HomeSection7.vue';
import Section4 from '../components/ContactSection4.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'Contact',
    components:{
        Header,
        Section1,
        Section2,
        Section3,
        Section4,
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
    .header__background_left{
        display: none;
    }
    .header__background_right{
        display: none;
    }
    .contact{
        .homeSection7{
            padding-top: 50px;
        }
        .footer{
            margin-top: 92px;
        }
    }
</style>