<template>
  <div>
    <router-view></router-view>
    <Header />
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
    <HomeSection4 />
    <HomeSection5 />
    <HomeSection6 />
    <HomeSection7 />
    <Footer />
    <router-view />
  </div>
  
</template>

<script>
import Header from '../components/Header.vue';
import HomeSection1 from '../components/HomeSection1.vue';
import HomeSection2 from '../components/HomeSection2.vue';
import HomeSection3 from '../components/HomeSection3.vue';
import HomeSection4 from '../components/HomeSection4.vue';
import HomeSection5 from '../components/HomeSection5.vue';
import HomeSection6 from '../components/HomeSection6.vue';
import HomeSection7 from '../components/HomeSection7.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    HomeSection1,
    HomeSection2,
    HomeSection3,
    HomeSection4,
    HomeSection5,
    HomeSection6,
    HomeSection7,
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
</style>
