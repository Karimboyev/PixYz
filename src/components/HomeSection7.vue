<template lang="">
    <div class="homeSection7">
        <div class="container">
            <div class="homeSection7__box">
                <form class="homeSection7__form">
                    <h1 class="homeSection7__title">Get In Touch</h1>
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="Last Name">
                    <input type="email" placeholder="Email">
                    <input type="text" placeholder="Phone/Telegram">
                    <select name="" id="form-select">
                        <option value="1">Web Development</option>
                        <option value="2">Business Automation</option>
                        <option value="3">UI/UX Design</option>
                        <option value="4">Digital Marketing</option>
                        <option value="5">Telegram Bots</option>
                        <option value="6">Mobile Development</option>
                    </select>
                    <input type="text" placeholder="Project Budget">
                    <textarea name="" id="" cols="40" rows="10" placeholder="About your project"></textarea>
                    <input type="submit" value="Submit">
                </form>
                <div class="homeSection7__info">
                    <h1>Say Hi!</h1>
                    <p><router-link to="/">info@pixyz.com</router-link></p>
                    <p><router-link to="/">+998 71 645 57 67</router-link></p>
                    <p><router-link to="/">Telegram</router-link></p>
                    <img class="homeSection7__img" src="../assets/images/home/form-img.svg" alt="">
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    name: 'HomeSection7',
    methods:{
        
    }
}
</script>
<style lang="scss">
    @font-face {
        font-family: "comfortaa";
        src: url("../assets/fonts/Comfortaa-Bold.ttf") format('truetype');
    }
    .homeSection7{
        padding-top: 100px;
        @media (max-width:992px){
            padding-top: 50px;
        }
        &__title{
            margin: 0;
            width: 100%;
            color: #217A73;
            font-family: comfortaa;
            margin-bottom: 12px;
        }
        &__box{
            border: none;
            display: flex;
            -webkit-box-shadow: 3px 3px 30px 0px rgba(0,0,0,0.2); 
            box-shadow: 3px 3px 30px 0px rgba(0,0,0,0.2);
        }
        &__form{
            padding: 60px 60px 30px;
            padding-left: 67px;
            width: 62.1621622%;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            @media(min-width:1441px){
                width: 73.5%;
            }
            input{
                width: 48.5%;
                margin-top: 22px;
                @media (max-width:576px) {
                    width: 100%;
                }
            }
            input[type=text],[type=email],select,textarea{
                outline: none;
                padding: 19px 25px;
                font-size: 16px;
                box-sizing: border-box;
                font-family: Arial;
                color: #217a73;
                border: 1px solid #49D6CB;
            }
            input[type=submit]{
                background-color: #49D6CB;
                border: 1px solid #49D6CB;
                padding: 15px 20px;
                width: 169px;
                display: inline-block !important;
                color: #fff;
                font-size: 16px;
                outline: none;
                transition: 0.4s;
                &:hover{
                    background-color: #fff;
                    color: #49D6CB;
                }
            }
            #form-select{
                width: 48.5%;
                margin-top: 20px;
                color: #C9C9C9;
                appearance:none;
                background: url(../assets/images/icons/arrow-down.svg) no-repeat right 15px center;
                @media (max-width:576px) {
                    width: 100%;
                }
            }
            textarea{
                width: 100%;
                margin-top: 20px;
                margin-bottom: 7px;
                resize:none;
                @media(min-width:1441px){
                    height: 182px;
                }
            }
            ::placeholder{
                color: #C9C9C9;
            }
            @media (max-width:1200px) {
                width: 100%;
                padding: 20px;
            }
        }

        &__info{
            background-color: #49D6CB;
            width: 37.8378378%;
            padding: 60px 40px;
            position: relative;
            @media(min-width:1441px){
                width: 37.5%;
            }
            h1{
                font-family: comfortaa;
                margin: 0;
                color: #fff;
                @media (min-width:1441px){
                    padding-left: 34px;
                    margin-bottom: 50px;
                }
            }
            p{
                font-family: Arial;
                margin-top: 35px;
                color: #fff;
                @media(min-width: 1441px){
                    padding-left: 34px;
                    margin: 0 0 60px 0;
                }
                a{
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        width: 100%;
                        border-bottom: 1px solid #fff;
                        bottom: -5px;
                        left: 0;
                        transform: scale(0);
                        transition: transform 0.3s;
                    }
                    &:hover{
                        &::after{
                            transform: scale(1);
                        }
                    }
                }
                
                
            }
            @media (max-width:1200px) {
                display: none;
            }
        }
        &__img{
            position: absolute;
            width: 280px;
            right: 45px;
            bottom: 85px;
            @media(min-width:1441px){
                width: unset;
                right: 25px;
                bottom: 8px;
            }
        }
    }
    .input-box{
        border: 1px solid #FF8888;
        padding: 7px 5px;
        display: inline-block;
    }
</style>