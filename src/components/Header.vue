<template>
<div>
    <div class="header__menu">
        <router-link to="/" class="header__menu-link" active-class="active-link" exact>HOME</router-link>
        <router-link to="/about" class="header__menu-link" active-class="active-link">ABOUT US</router-link>
        <router-link to="/services" class="header__menu-link" active-class="active-link">SERVICES</router-link>
        <router-link to="/portfolio" class="header__menu-link" active-class="active-link">PORTFOLIO</router-link>
        <router-link to="/contacts" class="header__menu-link" active-class="active-link">CONTACT</router-link>
    </div>
    <nav class="header">
        <div class="container">
            <router-link to="/"><img class="header__logo" src="../assets/images/icons/logo.svg" alt=""></router-link>
            <div class="header__row">
                <router-link to="/" class="header__link" active-class="actives" exact>HOME</router-link>
                <router-link to="/about" class="header__link" active-class="actives">ABOUT US</router-link>
                <router-link to="/services" class="header__link" active-class="actives">SERVICES</router-link>
                <router-link to="/portfolio" class="header__link" active-class="actives">PORTFOLIO</router-link>
                <router-link to="/contacts" class="header__link" active-class="actives">CONTACT</router-link>
            </div>
            <div class="header__languages">
                <p @click="clickLang">{{lang}} <img src="../assets/images/icons/lang__dropdown.svg" alt=""></p>
                <div class="header__lang__dropdown">
                    <p class="header__lang" style="display:none">EN</p>
                    <p class="header__lang">UZ</p>
                    <p class="header__lang">RU</p>
                </div>
            </div>
            <div class="header__icon" @click="headerButton">
                <span></span>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
    
export default {
    name: 'Header',
    data(){
        let a={
            lang:"EN",
            langClick:false,
            count:0,
            count2:0,
        }
        return a;
    },
    methods:{
        headerButton(){
            let menu=document.getElementsByClassName('header__menu')[0];
            let link=document.getElementsByClassName('header__menu-link');
            let menuWidth=window.innerWidth>576? window.innerWidth*0.3 :window.innerWidth*0.5;
            menu.style.width=`${menuWidth}px`;
            link.forEach(element => {
                element.style.opacity='1';
            });
            document.body.style.overflowY='hidden';
            if(this.count2==0){
                document.addEventListener('click', this.closeNav);
            }
        },
        closeNav(e){
            let a=document.getElementsByClassName('header__menu')[0];
            let link=document.getElementsByClassName('header__menu-link');
            this.count2++;
            console.log('aaaa')
            if(e.target!=a && this.count2>1){
                a.style.width='0px';
                link.forEach(element => {
                    element.style.opacity='0';
                });
                document.body.style.overflowY='unset';
                document.removeEventListener('click', this.closeNav);
                this.count2=0;
                console.log('bb')
            }
        },
        clickLang(){
            let a=document.getElementsByClassName('header__lang__dropdown')[0];
            if(!this.langClick){
                a.style.display='block';
                this.langClick=true;
                document.addEventListener('click',this.changeLang);
            } else {
                a.style.display='none';
                this.langClick=false;
                document.removeEventListener('click',this.changeLang);
                this.count=0;
            }
        },
        changeLang(e){
            let a=document.getElementsByClassName('header__lang');
            let b=document.getElementsByClassName('header__lang__dropdown')[0];
            this.count++;
            switch(e.target){
                case a[0]:{
                    this.lang="EN";
                    for(let x of a){
                        x.style.display='block';
                    }
                    a[0].style.display='none';
                    b.style.display='none';
                    this.langClick=false;
                    document.removeEventListener('click',this.changeLang);
                    this.count=0;
                    break;
                }
                case a[1]:{
                    this.lang="UZ";
                    for(let x of a){
                        x.style.display='block';
                    }
                    a[1].style.display='none';
                    b.style.display='none';
                    this.langClick=false;
                    document.removeEventListener('click',this.changeLang);
                    this.count=0;
                    break;
                }
                case a[2]:{
                    this.lang="RU";
                    for(let x of a){
                        x.style.display='block';
                    }
                    a[2].style.display='none';
                    b.style.display='none';
                    this.langClick=false;
                    document.removeEventListener('click',this.changeLang);
                    this.count=0;
                    break;
                }
                default:{
                    if(this.count==2){
                        b.style.display='none';
                        this.langClick=false;
                        document.removeEventListener('click',this.changeLang);
                        this.count=0;
                    }
                }
            }
        }
    },
    mounted(){

    }
}
</script>
<style lang="scss">
@font-face {
    font-family: "HelveticaNeueCyr-Roman";
    src: url("../assets/fonts/HelveticaNeueCyr-Roman.otf") format('truetype');
}
    .header{
        .container{
            display: flex;
            align-items: center;
            height: 70px;
        }
        &__row {
            margin-left: auto;
            @media (max-width:992px) {
                display: none;
            }
            .actives{
                position: relative;
                color: #49D6CB !important;
                &::before{
                    position: absolute;
                    content: "";
                    width: 130%;
                    height: 0;
                    bottom: -20px;
                    left: -15%;
                    border: 1px solid #49D6CB;
                }
            }
        }
        &__menu{
            top: 0;
            position: fixed;
            width: 0;
            right: 0;
            height: 100%;
            padding-top: 100px;
            flex-direction: column;
            align-items: flex-end;
            z-index: 999;
            background-color: rgba(0, 0, 0, 0.7);
            overflow-y: scroll;
            display: flex;
            margin-left: auto;
            transition: width 0.5s;
            a{
                text-decoration: none;
                color: #fff;
                display: block;
                margin: 0 20px 30px 0;
            }
            .active-link{
                color: #49D6CB !important;
            }
        }
        &__menu-link{
            opacity: 0;
            transition: opacity 0.3s;
        }
        &__link{
            text-decoration: none;
            color: #000;
            margin-left: 40px;
            font-size: 13px;
            position: relative;
            transition: 0.4s;
            font-family: HelveticaNeueCyr-Roman !important;
            font-weight: 10 !important;
            &::after{
                position: absolute;
                content: "";
                width: 130%;
                height: 0;
                bottom: -20px;
                left: -15%;
                border: 1px solid #49D6CB;
                transform: scale(0);
                transition: 0.3s;
            }
            &:hover{
                color: #49D6CB !important;
                &::after{
                    transform: scale(1);
                }  
            }
            @media (min-width:1441px) {
                font-size: 15px;
                margin-left: 50px;
            }
        }
        &__languages{
            margin-left: 51px;
            font-size: 13px;
            cursor: pointer;
            position: relative;
            @media (min-width:1441px) {
                font-size: 15px;
            }
            @media (max-width:992px) {
                margin-left: auto;
            }
        }
        &__icon{
            display: none;
            align-items: center;
            height: 20px;
            span{
                width: 25px;
                height: 2px;
                background-color: #000;
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                    width: 25px;
                    height: 2px;
                    background-color: #000;
                    top: -9px;
                }
                &::before{
                    content: '';
                    position: absolute;
                    width: 25px;
                    height: 2px;
                    background-color: #000;
                    top: 9px;
                }
            }
            @media (max-width:992px) {
                display: flex;
                margin-left: 20px;
            }
        }
        &__lang__dropdown{
            top: 25px;
            left: -4px;
            background-color: #fff;
            position: absolute;
            display: none;
            z-index: 99;
        }
        &__logo{
            @media (max-width:576px){
                width: 100px;
            }
        }
        &__lang{
            margin: 7px 0;
            padding: 0 4px;
            &:hover{
                color: #49D6CB;
            }
        }
    }
    
</style>
