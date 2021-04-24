<template>
    <div>
        <Header />
        <Section1 />
        <Section2 />
        <div class="about"><Footer /></div>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Section1 from '../components/AboutSection1.vue';
import Section2 from '../components/AboutSection2.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'About',
    components:{
        Header,
        Section1,
        Section2,
        Footer
    }
}
</script>
<style lang="">
    
</style>