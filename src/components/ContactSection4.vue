<template>
    <div class="contactSection4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1781.3507006818313!2d69.29845599385406!3d41.33359588877234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1617794741977!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>
<script>
export default {
    name: 'ContactSection4'
}
</script>
<style lang="scss">
    .contactSection4{
        padding-top: 82px;
        iframe{
            width: 100%;
            height: 754px;
            @media(max-width: 1441px) and (min-width:992px){
                height: 600px;
            }
            @media(max-width: 992px) and (min-width:768px){
                height: 500px;
            }
            @media(max-width: 768px){
                height: 400px;
            }
        }
    }
</style>