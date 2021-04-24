<template>
    <div>
        <router-view />
        <div class="fixed"><img src="./assets/images/icons/fixed-icon.png" alt=""></div>
    </div>
</template>
<script>
export default {
    name: 'changePage'
}
</script>
<style lang="scss">
    a{
        text-decoration: none;
        color: unset;
    }
    .fixed{
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background-color: #49D6CB;
        padding-top: 17.8px;
        padding-left: 17.8px;
        box-sizing: border-box;
        position: fixed;
        bottom: 107px;
        right: 148.3px;
        cursor: pointer;
        z-index: 99;
        @media(max-width:1441px) and (min-width:1200px){
            bottom: 70px;
            right: 130px;
        }
        @media(max-width:1200px) and (min-width:992px){
            bottom: 60px;
            right: 55px;
        }
        @media(max-width:992px) and (min-width:768px){
            bottom: 60px;
            right: 55px;
        }
        @media(max-width:768px){
            width: 50px;
            height: 50px;
            padding-top: 13.8px;
            padding-left: 13.8px;
            bottom: 60px;
            right: 55px;
            img{
                width: 18px;
                height: 18px;
            }
        }
        &::after{
            content: "";
            position: absolute;
            top: -14px;
            right: -14px;
            bottom: -14px;
            left: -14px;
            border-radius: 50%;
            z-index: -1;
            background-color: rgba(73, 214, 203, 0.8);
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-name: fixedEfect1;
        }
        &::before{
            content: "";
            position: absolute;
            top: -28px;
            right: -28px;
            bottom: -28px;
            left: -28px;
            border-radius: 50%;
            z-index: -1;
            background-color: rgba(73, 214, 203, 0.8);
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-name: fixedEfect2;
        }     
        img{
            width: 28.31px;
            height: 28.31px;
        }
    }
    @keyframes fixedEfect1{
        from{
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0.8;
        }
        to{
            top: -14px;
            right: -14px;
            bottom: -14px;
            left: -14px;
            opacity: 0;
        }
    }
    @keyframes fixedEfect2{
        from{
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0.8;
        }
        to{
            top: -28px;
            right: -28px;
            bottom: -28px;
            left: -28px;
            opacity: 0;
        }
    }
</style>