<template>
    <div>
        <Header />
        <Section1 />
        <Section2 />
        <Footer />
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Section1 from '../components/ServicesSection1.vue';
import Footer from '../components/Footer.vue';
import Section2 from '../components/ServicesSection2.vue';
export default {
    name: "Services",
    components: {
        Header,
        Section1,
        Section2,
        Footer,
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
</style>