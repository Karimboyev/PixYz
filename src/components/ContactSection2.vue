<template>
    <div class="contactSection2">
        <div class="container">
            <div class="contactSection2__row">
                <div class="contactSection2__col">
                    <div class="contactSection2__card card1">
                        <header>
                            <img src="../assets/images/icons/locatsya-icon.svg" alt="">
                        </header>
                        <main><h2>Adress</h2></main>
                        <footer><p>Tashkent, Qazi Mahalla</p></footer>
                    </div>
                </div>
                <div class="contactSection2__col">
                    <div class="contactSection2__card card">
                        <header>
                            <img src="../assets/images/icons/phone-img-contact.svg" alt="">
                        </header>
                        <main><h2>Phone Number</h2></main>
                        <footer><p><router-link to="/">+998 94 684 38145</router-link> <br><router-link to="/">+998 94 684 38145</router-link> <br><router-link to="/">+998 94 684 38145</router-link></p></footer>
                    </div>
                </div>
                <div class="contactSection2__col">
                    <div class="contactSection2__card card3">
                        <header>
                            <img src="../assets/images/icons/email-icon-contact.svg" alt="">
                        </header>
                        <main><h2>Email</h2></main>
                        <footer><p><router-link to="/">Info@pixyz.uz</router-link></p></footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContactSection2',
}
</script>
<style lang="scss">
@font-face {
    font-family: "HelveticaNeueCyr-Roman";
    src: url("../assets/fonts/HelveticaNeueCyr-Roman.otf") format('truetype');
}
    .contactSection2{
        padding-top: 100px;
        a{
            transition: color 0.3s;
            &:hover{
                color: #000 !important;
            }
        }
        &__row{
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
        }
        &__col{
            width: 33.3%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            @media (max-width:992px) and (min-width:768px){
                width: 50%;
            }
            @media(max-width:768px){
                width: 100%;
            }
        }
        &__card{
            font-family: HelveticaNeueCyr-Roman;
            box-sizing: border-box;
            padding: 35px;
            padding-bottom: 24px;
            box-sizing: border-box;
            width: 80%;
            border-radius: 15px;
            text-align: center;
            -webkit-box-shadow: 3px 3px 30px 0px rgba(0,0,0,0.1); 
            box-shadow: 3px 3px 30px 0px rgba(0,0,0,0.1);
            min-height: 328px;
            @media(min-width:1441px){
                width:424px;
            }
            @media(max-width:441px){
                padding-bottom: 0;
                min-height: 240px;
                img{
                    width: 50px !important;
                    height: 50px !important;
                }
                h2{
                    font-size: 18px;
                }
                p{
                    font-size: 14px;
                }
            }
            @media(max-width:260px){
                padding: 35px 0;
            }
            h2{
                font-weight: 10;
            }
            p{
                color: #49D6CB;
                line-height: 24px;
            }
            header{
                img{
                    @media(min-width: 1441px){
                        width: 91px;
                        height: 91px;
                    }
                    @media(max-width: 1441px){
                        width: 90px;
                        height: 90px;
                    }
                }
            }
            main{
                h2{
                    margin-top: 30px;
                }
            }
            footer{
                p{
                    margin-top: 30px;
                }
            }
        }
    }
    .card1{
        margin-right: 20px;
        padding-top: 43px;
        footer{
            p{
                margin-top: 39px;
            }
        }
    }
    .card3{
        margin-left: 31px;
        footer{
            p{
                margin-top: 35px;
            }
        }
    }
</style>