<template lang="">
    <div class="footer">
        <div class="container">
            <router-link to="/"><img src="../assets/images/icons/footer-icon.svg" alt=""></router-link>
            <div class="footer__row">
                <div class="footer__about">
                    <div class="footer__left">
                        <h4 class="footer__title">About us</h4>
                        <p class="footer__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                        <div class="footer__about-icon">
                            <div><img src="../assets/images/icons/instagram-logo.svg" width="23px" alt=""></div>
                            <div><img src="../assets/images/icons/facebook-icon.svg" alt=""></div>
                            <div><img src="../assets/images/icons/twite-icon.svg" alt=""></div>
                            <div><img src="../assets/images/icons/linkedin.svg" width="20px" alt=""></div>
                            <div><img src="../assets/images/icons/youtube-icon.svg" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="footer__pages">
                    <div class="footer__right">
                        <h4 class="footer__title">Important Links</h4>
                        <p><router-link to="/about">About us</router-link></p>
                        <p><router-link to="/aboutUs">Projects</router-link></p>
                        <p><router-link to="/services">Services</router-link></p>
                        <p><router-link to="/portfolio">Blog</router-link></p>
                        <p><router-link to="/contacts">Contact</router-link></p>
                    </div>
                </div>
                <div class="footer__services">
                    <div class="footer__left">
                        <h4 class="footer__title">Featured Services</h4>
                        <p><router-link to="/">IT Managment</router-link></p>
                        <p><router-link to="/">Development</router-link></p>
                        <p><router-link to="/">Services</router-link></p>
                        <p><router-link to="/">UX/UI Design</router-link></p>
                        <p><router-link to="/">Support Engineer</router-link></p>
                    </div>
                </div>
                <div class="footer__contact-box">
                    <div  class="footer__right">
                        <h4 class="footer__title footer__contact-title">Contact</h4>
                    <div class="footer__contact">
                        <div>
                            <img src="../assets/images/icons/phone-icon.svg" alt="">
                        </div>
                        <p>Phone <br><router-link to="/"><span>+998 94 658 26 97</span></router-link></p>
                    </div>
                    <div class="footer__contact">
                        <div>
                            <img src="../assets/images/icons/email-icon.svg" alt="">
                        </div>
                        <p>Email <br><router-link to="/"><span>info@pixyz.com</span></router-link></p>
                    </div>
                    <div class="footer__contact">
                        <div>
                            <img src="../assets/images/icons/locote-icon.svg" alt="">
                        </div>
                        <p>Adress <br><span>Tashkent city, Uzbekistan, 100369</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__info">
            <div class="container">
                <p>Copyright &commat; 2021 PixYz. All Right Reserved. Designed By Odilbek Karimboyev</p>
                <p>Terms & Conditions <span></span> Privacy Policy</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
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
    .footer{
        margin-top: 100px;
        background-color: #F4F6FC;
        padding-top: 45px;
        @media (max-width:992px){
            margin-top: 50px;
        }
        @media (max-width:576px){
            text-align: center;
        }
        a{
            transition: color 0.3s;
            &:hover{
                color: #49D6CB !important;
                span{
                    color: #49D6CB !important;
                }
            }
        }
        p{
            margin: 0;
            line-height: 32px;
            font-family: HelveticaNeueCyr-Roman;
        }
        &__row{
            display: flex;
            flex-dicaration: row;
            flex-wrap: wrap;
            padding-bottom: 33px;
            padding-top: 11px;
            >div{
                width: 25%;
                box-sizing: border-box;
                padding: 10px;
                @media (max-width:992px){
                    width: 50%;
                }
            }
            @media (max-width:576px){
                flex-direction: column;
                align-items: center;
                >div{
                    width: 80%;
                }
            }
        }
        &__about{
            @media(min-width:1441px){
                margin-left: -11px;
            }
        }
        &__pages{
            @media(min-width:1441px){
                padding-left: 30px !important;
            }
            p{
                line-height: 30px;
            }
        }
        &__services{
            @media(min-width:1441px){
                padding-left: 30px !important;
            }
            p{
                line-height: 30px;
            }
        }
        &__contact-box{
            @media(min-width:1441px){
                padding-left: 55px !important;
            }
        }
        &__title{
            font-family: comfortaa;
            color: #217A73;
            @media (min-width:1441px){font-size: 22px;}
            margin-bottom: 16px;
        }
        &__text{
            color: #8A8A8A;
            line-height: 24px !important;
            font-family: HelveticaNeueCyr-Roman;
            @media(min-width:1441px){
                padding-right: 110px;
            }
        }
        &__about-icon{
            /* width: 100% !important; */
            margin-top: 28px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            @media(max-width:576px){
                justify-content: center;
            }
            >div{
                display: flex;
                flex-wrap: wrap;
                algin-items: center;
                margin-right: 9.6px;
                justify-content: center;
                background-color: #49d6cb;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                cursor: pointer;
                transition: 0.2s;
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
        &__contact-title{
            margin-bottom: 18px;
            @media (max-width:1200px) and (min-width:992px){
                margin-bottom: 21.28px;
            }
            @media (max-width:576px){
                margin-bottom: 21.28px;
            }
        }
        &__contact{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            // align-items: center;
            div{
                padding-top: 2px;
                width: 10%;
                text-align: center;
            }
            p{
                margin-top: -5px;
                width: 80%;
                margin-left: 10%;
                @media (min-width:1441px){
                    margin-left: 27px;
                }
                @media (max-width:1441px) and (min-width:1200px){
                    margin-left: 15px;
                    width: 215px;
                }
                @media(max-width:1200px) and (min-width:768px){
                    margin-left: 0;
                }
            }
            span{
                transition: color 0.3s;
                color: #8A8A8A;
            }
            @media (max-width:1200px) and (min-width:992px){
                flex-direction: column;
                align-items: flex-start;
                div{
                    width: 30px;
                }
            }
            @media (max-width:992px) and (min-width:768px) {
                flex-direction: row;
                div{
                    width: 10%;
                }
                p{
                    margin-left: 15px
                };
            }
            @media (max-width:576px) {
                // flex-direction: column;
                // align-items: flex-start;
                justify-content: center;
                p{
                    // width: unset;
                    margin-left: 15px;
                }
            }           
        }
        &__right{
            @media (max-width:992px){
                margin-left: auto;
            }
        }
        &__left{
            p{
                &:hover{

                }
            }
        }

        &__info{
            background-color: #fff;
            .container{
                height: 60px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            p{
                font-family: HelveticaNeueCyr-Roman;
                font-weight: 100 !important;
                color:#8A8A8A;
                @media(max-width:992px){
                    font-size: 14px  !important;
                }
                span{
                    margin: 0 12.5px;
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        height: 30px !important;
                        width: 0;
                        border-left: 1px solid #8A8A8A;
                        left: 0;
                    }
                }
            }
        }
    }
</style>