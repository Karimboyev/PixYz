<template>
    <div class="portfolioSection2">
        <div class="container">
            <div class="portfolioSection2__row">
                <div class="portfolioSection2__col" v-for="item in portfolios" :key="item.id">
                    <div class="portfolioSection2__img">
                        <img :src="item.imgUrl" alt="">
                        <div class="portfolioSection2__img-front"></div>
                        <h2>{{ item.title }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PortfolioSection2',
    data(){
        return {
            portfolios:[
                {
                    id:0,
                    imgUrl:require("@/assets/images/portfolio/work1.png"),
                    title: "Business Process Automation",
                },
                {
                    id:1,
                    imgUrl:require("@/assets/images/portfolio/work2.png"),
                    title: "Business Process Automation",
                },
                {
                    id:2,
                    imgUrl:require("@/assets/images/portfolio/work3.png"),
                    title: "Business Process Automation",
                },
                {
                    id:3,
                    imgUrl:require("@/assets/images/portfolio/work4.png"),
                    title: "Business Process Automation",
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    .portfolioSection2{
        &__row{
            display: flex;
            flex-wrap: wrap;
            padding-top: 87px;
        }
        &__col{
            width: 33.3%;
            margin-top: 10px;
            &>div{
                width: 98%;
                overflow: hidden;
            }
            @media (min-width:768px) and (max-width:992px) {
                width: 50%;
            }
            @media (max-width:768px) {
                width: 100%;
            }
        }
        &__img{
            width: 100%;
            display: flex;
            height: 380px;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            @media(min-width:1441px){
                height: 435px;
            }
            img{
                height: 100%;
                width: 100%;
                position: absolute;
                transition: transform 0.5s;
            }
            h2{
                color: #fff;
                font-size: 24px;
                font-weight: 100;
                margin-top: 53px;
                position: relative;
                z-index: 2;
                @media (max-width:1441px) and (min-width:1200px) {
                    font-size: 20px;
                }
                @media (max-width:1200px) and (min-width:441px){
                    font-size: 18px;
                }
                @media (max-width:441px){
                    font-size: 16px;
                }
            }
            &:hover{
                img{
                    transform: scale(1.1);
                }
            }
            @media(max-width:441px){
                height: 280px;
            }
        }
        &__img-front{
            background-color: #000;
            opacity: 0.4;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            transition: opacity 0.5s;
            &:hover{
                opacity: 0.6;
            }
        }
    }
</style>