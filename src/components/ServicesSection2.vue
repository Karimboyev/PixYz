<template>
    <div class="servicesSection2">
        <div class="container">

            <div class="servicesSection2__web servicesDropdown">
                <h1>Web Development</h1>
                <img src="../assets/images/icons/arrow-down-services.svg" alt="">
                <div  class="services__dropdown"></div>
            </div>
            <div class="servicesSection2__row" style="height:0px">
                <div class="servicesSection2__col" v-for="item in web" :key="item.id">
                    <div class="servicesSection2__card card">
                        <header><img :src="item.imgUrl" alt=""></header>
                        <main>
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.content }}</p>
                            <div>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                            </div>
                        </main>
                        <footer>
                            <h1>from {{item.price}}</h1>
                            <p><span>* </span>Costs might be different depending on the project</p>
                            <button>ORDER NOW</button>
                        </footer>
                    </div>
                </div>
            </div>

            <div class="servicesSection2__mobile servicesDropdown">
                <h1>Mobile Development</h1>
                <img src="../assets/images/icons/arrow-down-services.svg" alt="">
                <div  class="services__dropdown"></div>
            </div>
            <div class="servicesSection2__row" style="height:0px">
                <div class="servicesSection2__col" v-for="item in mobile" :key="item.id">
                    <div class="servicesSection2__card card">
                        <header><img :src="item.imgUrl" alt=""></header>
                        <main>
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.content }}</p>
                            <div>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                            </div>
                        </main>
                        <footer>
                            <h1>from {{item.price}}</h1>
                            <p><span>* </span>Costs might be different depending on the project</p>
                            <button>ORDER NOW</button>
                        </footer>
                    </div>
                </div>
            </div>

            <div class="servicesSection2__business servicesDropdown">
                <h1>Business Automation</h1>
                <img src="../assets/images/icons/arrow-down-services.svg" alt="">
                <div  class="services__dropdown"></div>
            </div>
            <div class="servicesSection2__row" style="height:0px">
                <div class="servicesSection2__col" v-for="item in business" :key="item.id">
                    <div class="servicesSection2__card card">
                        <header><img :src="item.imgUrl" alt=""></header>
                        <main>
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.content }}</p>
                            <div>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                            </div>
                        </main>
                        <footer>
                            <h1>from {{item.price}}</h1>
                            <p><span>* </span>Costs might be different depending on the project</p>
                            <button>ORDER NOW</button>
                        </footer>
                    </div>
                </div>
            </div>

            <div class="servicesSection2__design servicesDropdown">
                <h1>UX/UI Design</h1>
                <img src="../assets/images/icons/arrow-down-services.svg" alt="">
                <div  class="services__dropdown"></div>
            </div>
            <div class="servicesSection2__row" style="height:0px">
                <div class="servicesSection2__col" v-for="item in design" :key="item.id">
                    <div class="servicesSection2__card card">
                        <header><img :src="item.imgUrl" alt=""></header>
                        <main>
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.content }}</p>
                            <div>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                            </div>
                        </main>
                        <footer>
                            <h1>from {{item.price}}</h1>
                            <p><span>* </span>Costs might be different depending on the project</p>
                            <button>ORDER NOW</button>
                        </footer>
                    </div>
                </div>
            </div>

            <div class="servicesSection2__marketing servicesDropdown">
                <h1>Digital Marketing</h1>
                <img src="../assets/images/icons/arrow-down-services.svg" alt="">
                <div  class="services__dropdown"></div>
            </div>
            <div class="servicesSection2__row" style="height:0px">
                <div class="servicesSection2__col" v-for="item in marketing" :key="item.id">
                    <div class="servicesSection2__card card">
                        <header><img :src="item.imgUrl" alt=""></header>
                        <main>
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.content }}</p>
                            <div>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                                <label class="servicesSection2__input-label">
                                    <input type="checkbox" class="servicesSection2__checkbox">
                                    <span class="servicesSection2__input-style"><img src="../assets/images/icons/checkbox-icon.png" alt=""></span>
                                </label>
                                <p class="servicesSection2__checkbox-label">Lorem ipsum dolor sit amet, consetet</p>
                            </div>
                        </main>
                        <footer>
                            <h1>from {{item.price}}</h1>
                            <p><span>* </span>Costs might be different depending on the project</p>
                            <button>ORDER NOW</button>
                        </footer>
                    </div>
                </div>
            </div>
            

        </div>
        
        <div></div>
    </div>
</template>
<script>
export default {
    name: "ServicesSection2",
    data(){
        return {
            web:[
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Landing Page",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Site Catalog",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Corporative Site",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Landing Page",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Site Catalog",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Corporative Site",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                },
            ],
            mobile:[
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Landing Page",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Site Catalog",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Corporative Site",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Landing Page",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        }
                    ],
                },
            ],
            business:[
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Landing Page",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Site Catalog",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            chacked:false,
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                }
            ],
            design:[
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Landing Page",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Site Catalog",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                }
            ],
            marketing:[
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Landing Page",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                },
                {
                    id:0,
                    imgUrl: require("@/assets/images/icons/services-card-icon.svg"),
                    title: "Site Catalog",
                    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
                    price: "6000 000",
                    checked:[
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        },
                        {
                            name:"Lorem ipsum dolor sit amet, consetet",
                            value:""
                        }
                    ],
                }
            ],
        }
    },
    methods:{
        dropDown(e){
            let a=document.getElementsByClassName('services__dropdown');
            let b=document.getElementsByClassName('servicesSection2__row');
            let c=document.getElementsByClassName('servicesDropdown');
            for(let i=0;i<a.length;i++){
                if(e.target==a[i]){
                    if(b[i].style.height=='0px'){
                        let numberOfCards=b[i].children.length;
                        if(numberOfCards>0){
                            let hightCards=b[i].children[0].offsetHeight;
                            if(window.innerWidth>992){
                                b[i].style.height=`${Math.ceil(numberOfCards/3)*(hightCards+45)}px`;
                            } else if(window.innerWidth>768){
                                b[i].style.height=`${Math.ceil(numberOfCards/2)*(hightCards+45)}px`;
                            } else b[i].style.height=`${numberOfCards*(hightCards+45)}px`;
                        } else b[i].style.height='15px'
                        c[i].children[1].style.transform="rotateX(180deg)";
                        if(i<c.length-1){
                            c[i+1].style.marginTop="25px";
                        }
                        b[i].style.paddingBottom="20px";
                    } else {
                        if(i<c.length-1){
                            c[i+1].style.marginTop="15px";
                        }
                        b[i].style.height='0px';
                        c[i].children[1].style.transform="rotateX(0deg)";
                        b[i].style.paddingBottom="0px";
                    }
                } else {
                    if(i<c.length-1){
                        c[i+1].style.marginTop="15px";
                    }
                    b[i].style.height='0px';
                    c[i].children[1].style.transform="rotateX(0deg)";
                    b[i].style.paddingBottom="0px";
                }
            }  
        },
        cols(){
            let rows=document.getElementsByClassName('servicesSection2__row');
            if(window.innerWidth>1200){
                for(let i in rows){
                    for(let j=0;j<rows[i].children.length;j++){
                        let col=rows[i].children[j];
                        if(j%3==0) col.style.justifyContent='flex-start';
                        if(j%3==2) col.style.justifyContent='flex-end';
                    }    
                }  
            } else if(window.innerWidth>992){
                for(let i in rows){
                    for(let j=0;j<rows[i].children.length;j++){
                        let col=rows[i].children[j];
                        if(j%2==0) col.style.justifyContent='flex-start';
                        if(j%2==1) col.style.justifyContent='flex-end';
                    }    
                } 
            }
        }
    },
    mounted(){
        document.getElementsByClassName('servicesDropdown').forEach(element => {
            element.addEventListener('click',this.dropDown);
        });
        document.addEventListener("resize",this.cols)
        let rows=document.getElementsByClassName('servicesSection2__row');
        if(window.innerWidth>1200){
            for(let i in rows){
                for(let j=0;j<rows[i].children.length;j++){
                    let col=rows[i].children[j];
                    if(j%3==0) col.style.justifyContent='flex-start';
                    if(j%3==2) col.style.justifyContent='flex-end';
                }    
            }  
        } else if(window.innerWidth>992){
            for(let i in rows){
                for(let j=0;j<rows[i].children.length;j++){
                    let col=rows[i].children[j];
                    if(j%2==0) col.style.justifyContent='flex-start';
                    if(j%2==1) col.style.justifyContent='flex-end';
                }    
            } 
        }
    }
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
    .servicesSection2{
        padding-top: 84px;
        &__row{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            transition: height 0.8s;
            overflow: hidden;
            // padding-bottom: 20px;
        }
        &__col{
            position: relative;
            z-index: 5;
            margin-top: 30px;
            // margin-bottom: 4px;
            width: 33.3%;
            display: flex;
            justify-content: center;
            @media (min-width:768px) and (max-width:992px) {
                width: 50%;
            }
            @media (max-width:768px) {
                width: 100%;
            }
        }
        &__card{
            border-radius: 15px;
            box-sizing: border-box;
            width: 93.147%;
            font-family: HelveticaNeueCyr-Roman;
            text-align: center;
            padding: 40px 55px;
            -webkit-box-shadow: 3px 3px 30px 0px rgba(0,0,0,0.1); 
            box-shadow: 3px 3px 30px 0px rgba(0,0,0,0.1);
            @media(max-width: 1441px) and (min-width: 1200px){
                padding: 40px 40px;
                p{
                    font-size: 14px;
                }
                h1{
                    font-size: 24px;
                }
            }
            @media(max-width: 1200px) and (min-width: 992px){
                padding: 30px 20px;
                p{
                    font-size: 14px;
                }
                h1{
                    font-size: 24px;
                }
                h2{
                    font-size: 18px;
                }
            }
            @media(max-width: 992px) and (min-width: 768px){
                padding: 30px 20px;
                p{
                    font-size: 14px;
                }
                h1{
                    font-size: 20px;
                }
                h2{
                    font-size: 18px;
                }
            }
            @media(max-width: 768px) and (min-width: 576px){
                padding: 30px 55px;
                p{
                    font-size: 14px;
                }
                h1{
                    font-size: 20px;
                }
                h2{
                    font-size: 18px;
                }
            }
            @media(max-width: 576px) and (min-width:441px){
                padding: 30px 20px;
                p{
                    font-size: 14px;
                }
                h1{
                    font-size: 20px;
                }
                h2{
                    font-size: 18px;
                }
            }
            @media(max-width: 441px){
                padding: 30px 20px;
                p{
                    font-size: 14px;
                }
                h1{
                    font-size: 20px;
                }
                h2{
                    font-size: 18px;
                }
                main{
                    div{
                        display: none !important;
                    }
                }
            }
            main{
                div{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }
                h2{
                    margin-top: 25px;
                    margin-bottom: 15px;
                }
                &>p{
                    margin-bottom: 30px !important;
                }
                p{
                    color: #49D6CB;
                    line-height: 24px;
                    margin-bottom: 15px;
                }
                label{
                    margin-bottom: 15px;
                }
            }
            footer{
                padding-top: 5px;
                font-family: HelveticaNeueCyr-Roman;
                h1{ color: #00A49A; margin-bottom: 0;}
                p{ 
                    color: #C9C9C9; 
                    font-size: 12px; 
                    margin-top: 5px;
                    line-height: 24px;
                    span{
                        color: red;
                    }
                }
                button{
                    margin-top: 19px;
                    background-color: #49D6CB;
                    border: #707070;
                    color: #fff;
                    font-size: 16px;
                    width: 180px;
                    height: 40px;
                    position: relative;
                    border-radius: 5px;
                    &::after{
                        content: "";
                        position: absolute;
                        width: 180px;
                        height: 40px;
                        top:0;
                        left: 0;
                        border-radius: 5px;
                        z-index: -1;
                        background-color: rgba(73, 214, 203, 0.8);
                        animation-duration: 2s;
                        animation-iteration-count: infinite;
                        animation-name: servicesBtnEfect1;
                    }
                    &::before{
                        content: "";
                        position: absolute;
                        width: 185px;
                        height: 45px;
                        top:0;
                        left: 0;
                        border-radius: 10px;
                        z-index: -1;
                        background-color: rgba(73, 214, 203, 0.8);
                        animation-duration: 2s;
                        animation-iteration-count: infinite;
                        animation-name: servicesBtnEfect2;
                    }            
                }
            }
        }
        &__checkbox-label{
            width: 90%;
            margin: 0;
            color: #8A8A8A !important;
            @media(min-width:1441px){
                width: 92%;
            }
            @media(max-width:768px){
                width: 92%;
            }
        }
        &__input-label{
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            border: 1px solid #49D6CB;
            position: relative;
            @media(max-width:1441px){
                width: 16px;
                height: 16px;
            }
            input{
                opacity: 0;
                width: 0;
                height: 0;
            }
            input:checked + .servicesSection2__input-style{
                img{
                    display: inline-block;
                }
            }
        }
        &__input-style{
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            img{
                user-select: none;
                position: absolute;
                display: none;
                left: 3px;
                top: -1px;
                @media(max-width:1441px){
                    width: 15px;
                    height: 11.05px;
                }
            }
        }
    }
    .servicesDropdown{
            position: relative;
            cursor: pointer;
            padding: 0 30px;
            display: flex;
            align-items: center;
            width: 100%;
            height: 64px;
            border-radius: 14px;
            background-color: #49D6CB;
            margin-top: 15px;
            justify-content: space-between;
            box-sizing: border-box;
            h1{
                color: #fff;
                font-family: comfortaa;
                font-size: 24px;
            }
            img{
                transition: 0.8s;
            }
            div{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border-radius: 10px;
            }
            @media (max-width:1200px) and (min-width: 768px){
                height: 55px;
                h1{
                    font-size: 22px;
                }
            }
            @media (max-width: 768px) and (min-width: 441px){
                height: 40px;
                h1{
                    font-size: 18px;
                }
            }
            @media (max-width: 441px){
                padding: 0 10px;
                height: 40px;
                h1{
                    font-size: 16px;
                }
            }
    }
       @keyframes servicesBtnEfect1{
        from{
            width: 180px;
            height: 40px;
            opacity: 0.8;
            top:0;
            left: 0;
        }
        to{
            width: 210px;
            height: 60px;
            opacity: 0;
            top:-10px;
            left: -15px;
        }
    }
    @keyframes servicesBtnEfect2{
        from{
            width: 180px;
            height: 40px;
            opacity: 0.8;
            top: 0px;
            left: 0px;
        }
        to{
            width: 230px;
            height: 74px;
            opacity: 0;
            top: -17px;
            left: -25px;
        }
    }
</style>