<template lang="">
    <div class="homeSection3">
        <div class="container">
            <p class="homeSection3__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea </p>
            <div class="homeSection3__row">
                <div class="homeSection3__col">
                    <div class="homeSection3__card ">
                        <header class="card__header">
                            <div><span class="icon web__icon"></span></div>
                        </header>
                        <main class="card__main">
                            <h2>Web Development</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </main>
                        <footer class="card__footer"><a href="#"><p>Read More</p></a></footer>
                    </div>
                </div>

                <div class="homeSection3__col">
                    <div class="homeSection3__card ">
                        <header class="card__header">
                            <div><span class="icon busines__icon"></span></div>
                        </header>
                        <main class="card__main">
                            <h2>Business Automation</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </main>
                        <footer class="card__footer"><a href="#"><p>Read More</p></a></footer>
                    </div>
                </div>

                <div class="homeSection3__col">
                    <div class="homeSection3__card ">
                        <header class="card__header">
                            <div><span class="icon mobile__icon"></span></div>
                        </header>
                        <main class="card__main">
                            <h2>Mobile Development</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </main>
                        <footer class="card__footer"><a href="#"><p>Read More</p></a></footer>
                    </div>
                </div>

                <div class="homeSection3__col">
                    <div class="homeSection3__card ">
                        <header class="card__header">
                            <div><span class="icon ui__icon"></span></div>
                        </header>
                        <main class="card__main">
                            <h2>UI/UX Design</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </main>
                        <footer class="card__footer"><a href="#"><p>Read More</p></a></footer>
                    </div>
                </div>

                <div class="homeSection3__col">
                    <div class="homeSection3__card ">
                        <header class="card__header">
                            <div><span class="icon telegram-bot__icon"></span></div>
                        </header>
                        <main class="card__main">
                            <h2>Telegram Bots</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </main>
                        <footer class="card__footer"><a href="#"><p>Read More</p></a></footer>
                    </div>
                </div>

                <div class="homeSection3__col">
                    <div class="homeSection3__card">
                        <header class="card__header">
                            <div><span class="icon smm__icon"></span></div>
                        </header>
                        <main class="card__main">
                            <h2>SMM</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </main>
                        <footer class="card__footer"><a href="#"><p>Read More</p></a></footer>
                    </div>
                </div>
            </div>
            <div class="homeSection3__button">
                <button id="card-button"><router-link to="/services"><img src="../assets/images/icons/arrow-right.svg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></router-link></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeSection3',
    methods:{
        col(){
            let cols=document.getElementsByClassName('homeSection3__col');
            if(window.innerWidth>992){
                for(let i in cols){
                    if(i%3==0) cols[i].style.justifyContent='flex-start';
                    if(i%3==2) cols[i].style.justifyContent='flex-end';
                }
            }
        }
    },
    mounted(){
        document.addEventListener("resize",this.col);
        let cols=document.getElementsByClassName('homeSection3__col');
        if(window.innerWidth>992){
            for(let i in cols){
                if(i%3==0) cols[i].style.justifyContent='flex-start';
                if(i%3==2) cols[i].style.justifyContent='flex-end';
            }
        }
    }
}
</script>
<style lang="scss">
@font-face {
    font-family: "HelveticaNeueCyr";
    src: url("../assets/fonts/HelveticaNeueCyr.otf") format('truetype');
}
@font-face {
    font-family: "HelveticaNeueCyr-bold";
    src: url("../assets/fonts/HelveticaNeueCyr-bold.otf") format('truetype');
}
@font-face {
    font-family: "HelveticaNeueCyr-Roman";
    src: url("../assets/fonts/HelveticaNeueCyr-Roman.otf") format('truetype');
}
@font-face {
    font-family: "HelveticaNeueCyr-Light";
    src: url("../assets/fonts/HelveticaNeueCyr-Light.otf") format('truetype');
}
.icon {
  width: 100px;
  height: 100px;
  display: inline-block;
  mask-repeat: no-repeat;
  mask-size: 100%;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100%;
  -webkit-mask-position: center;
  background-color: #2D3A45;
  vertical-align: middle;

  &.web__icon {
    mask-image: url("../assets/images/icons/web-icon.svg");
    -webkit-mask-image: url("../assets/images/icons/web-icon.svg");
    width: 52.563px;
    height: 45px;
    background-color: #fff;
  }
  &.busines__icon {
    mask-image: url("../assets/images/icons/busines-icon.svg");
    -webkit-mask-image: url("../assets/images/icons/busines-icon.svg");
    width: 53.203px;
    height: 50px;
    background-color: #fff;
  }
  &.mobile__icon {
    mask-image: url("../assets/images/icons/mobile-icon.svg");
    -webkit-mask-image: url("../assets/images/icons/mobile-icon.svg");
    width: 41.828px;
    height: 50px;
    background-color: #fff;
  }
  &.ui__icon {
    mask-image: url("../assets/images/icons/ui-icon.svg");
    -webkit-mask-image: url("../assets/images/icons/ui-icon.svg");
    width: 42.438px;
    height: 50px;
    background-color: #fff;
  }
  &.telegram-bot__icon {
    mask-image: url("../assets/images/icons/telgram-bot-icon.svg");
    -webkit-mask-image: url("../assets/images/icons/telgram-bot-icon.svg");
    width: 45.203px;
    height: 60.203px;
    background-color: #fff;
  }
  &.smm__icon {
    mask-image: url("../assets/images/icons/smm-icon.svg");
    -webkit-mask-image: url("../assets/images/icons/smm-icon.svg");
    width: 59.703px;
    height: 50px;
    background-color: #fff;
  }

}
    .homeSection3{
        position: relative;
        background-color: #f4f6fc;

        @media (min-width:1441px) {
            top: -162px;
        }
        @media (min-width:1200px) and (max-width:1440px) {
            top: -60px;
        }
        @media (min-width:992px) and (max-width:1200px) {
            top: -60px;
        }
        @media (min-width:768px) and (max-width:992px) {
            top: 0;
            margin-top: 60px;
        }
        @media (min-width:576px) and (max-width:768px) {
            top: 0;
            margin-top: 60px;
        }
        
        .container{
            padding-top: 50px;
            position: relative;
            @media (min-width:1441px) {
                padding-top: 155px;
            }
            &::after{
                content: "";
                position: absolute;
                background: url("../assets/images/icons/background-icon1.svg") no-repeat;
                background-size: cover;
                width: 270px;
                height: 270px;
                bottom: -100px;
                right: 10px;
                z-index: 0;
                @media (max-width:1441px) and (min-width: 1200px){
                    width: 250px;
                    height: 250px;
                    bottom: -70px;
                }
                @media (max-width:1200px) and (min-width: 992px){
                    width: 230px;
                    height: 230px;
                    bottom: -50px;
                }
                @media (max-width:992px) and (min-width: 768px){
                    width: 210px;
                    height: 210px;
                    bottom: -40px;
                }
                @media (max-width:768px) and (min-width: 576px){
                    width: 170px;
                    height: 170px;
                    bottom: 0px;
                }
                @media (max-width:576px){
                    width: 130px;
                    height: 130px;
                    bottom: 20px;
                }
            }
        }
        &__text{
            margin: 0 auto;
            text-align: center;
            /* width: 67.172%; */
            width: 80%;
            font-size: 24px;
            font-family: HelveticaNeueCyr;
            color: #7D7D7D;
            @media (min-width:1441px) {
                font-size: 24px;
                line-height: 40px;
                width: 1056px;
            }
            @media (min-width:992px) and (max-width:1440px) {
                font-size: 16px;
            }
            @media (max-width:992px) {
                font-size: 14px;
            }
        }
        &__row{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            align-items: center;
            margin-top: 75px;
            position: relative;
            z-index: 2;
        }
        &__col{
            width: 33.3%;
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            @media (min-width:1441px) {
                margin-bottom: 45px;
            }
            @media (min-width:576px) and (max-width:992px) {
                width: 50%;
            }
            @media (max-width:576px) {
                width: 100%;
            }
        }
        &__card{
            background-color: #fff;
            width: 93%;
            border-radius: 15px;
            position: relative;
            box-shadow: 3px 3px 40px 0 rgb(126 126 126 / 10%);
            @media (min-width:1441px){
                width: 424px;
                height: 384px;
                padding-left: 3px;
                &::after{
                    margin-left: -3px;
                }
            }
            &::after{
                content: "";
                position: absolute;
                top: 0;
                z-index: 1;
                width: 100%;
                height: 0;
                border-radius: 15px;
                background-color:#49D6CB;
                transition: 0.4s;
            }
            &:hover{
                &::after{
                    height: 100%;
                }
                header{
                    div{
                        background-color: #fff;
                        span{
                            transition: 0.4s;
                            background-color: #49D6CB;
                        }
                    }
                }
                main{ h2{ color: #fff; } p{ color: #fff; } }
                footer{ a{color: #fff;} }
            }
            header{
                height: 144px;
                position: relative;
                z-index: 2;
                div{
                    background-color: #49D6CB;
                    transition: 0.4s;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 91px;
                    height: 91px;
                }
                @media(max-width:768px){
                    height: 120px;
                }
            }
            main{
                position: relative;
                z-index: 2;
                font-family: HelveticaNeueCyr-Roman;
                h2{
                    margin-top: 32px;
                    margin-bottom: 0px;
                    font-size: 24px;
                    font-weight: 100;
                    transition: 0.4s;
                    @media (min-width:1441px){padding-left: 2px;}
                    @media (min-width:576px) and (max-width:1200px) { font-size: 18px; }
                }
                p{
                    color: #C9C9C9;
                    margin-top: 12px;
                    font-size: 14px;
                    line-height: 1.5;
                    transition: 0.4s;
                    @media (min-width: 1441px){
                        font-size: 16px;
                    }
                }
            }
            footer{
                position: relative;
                z-index: 2;
                margin-top: 25px;
                color: #49D6CB;
                font-family: HelveticaNeueCyr-bold;
                transiton: 0.4s;
                a{ color: #49D6CB;}
                p{
                    position: relative;
                    cursor: pointer;
                    transition: 0.3s;
                    display: inline-block;
                    margin: 0;
                    padding-top: 5px;
                    &::before{
                        content: "";
                        background-image: url('../assets/images/icons/arrow-right.png');
                        background-size: 18px 20px;
                        width: 18px;
                        height: 20px;
                        position: absolute;
                        left: -21px;
                        top: 3px;
                        transition: 0.3s;
                        opacity: 0;
                    }
                    &:hover{
                        padding-left: 30px;
                        color: #fff;
                        &::before{
                            left: 9px;
                            opacity: 1;
                        }
                    }
                }
            }
        }
        &__button{
            text-align: center;
            padding-bottom: 30px;
            @media(min-width:1441px){
                button{
                    width: 74px !important;
                    height: 74px !important;
                }
            }
            button{
                width: 58px;
                height: 58px;
                border-radius:50%;
                border: none;
                background-color: #49D6CB;
                outline: none;
                transition: 0.3s;
                cursor: pointer;
                position: relative;
                z-index: 2;
                &:hover{
                    padding-left: 18px;
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
                    animation-name: buttonEfect1;
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
                    animation-name: buttonEfect2;
                }              
            }
        }
    }
    .card{
        &__header{
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
        &__main{
            text-align: center;
            padding: 0 40px;
            @media (min-width:1441px) { padding: 0 60px; }
            @media (min-width:576px) and (max-width:768px) { padding: 0 15px; }
        }
        &__footer{
            text-align: center;
            min-height: 50px;
        }
    }
    @keyframes buttonEfect1{
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
    @keyframes buttonEfect2{
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