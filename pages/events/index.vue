<template>
<div class="events">
   <header class="header_class">
        <div class="header_title1">Мероприятия</div>
        <div class="header_title2">Какой-то текст</div>
    </header>
  
    <div class="main">

        <div class="filter_list">
            <div id="main_filter">Фильтры</div>
            <div id="main_data" class="filter_part">Дата</div>
            <div id="main_for" class="filter_part">Для кого</div>
        </div>
        
        <div class="carts">

            <div class="cart_event" v-for="n in 8" :key="n">
                <div class="cart_data">24 февраля</div>
                <div class="cart_img"><img src="~@/assets/images/polikek.png" alt=""></div>
                <div class="cart_name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, optio libero iure nemo modi minus velit m
                   </div>
            </div>

        </div>
        
        <button class="btn_more">Показать ещё</button>

        <div class="carousel">
            <div class="backx2">
                <div class="arrow"></div>
                <div class="arrow"></div>
            </div>
            <div class="back">
                <div class="arrow"></div>
            </div>
            <a href="#" class="carousel_item">1</a>
            <a href="#" class="carousel_item">2</a>
            <a href="#" class="carousel_item">3</a>
            <a href="#" class="carousel_item">4</a>
            <a href="#" class="carousel_item">5</a>
            <a href="#" class="carousel_item">6</a>
            <div class="next">
                <div class="arrow right"></div>
            </div>
            <div class="nextx2">
                <div class="arrow right"></div>
                <div class="arrow right"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'EventsPage',
    head() {
        return {
            title: 'Мероприятия центра карьеры'
        }
    }
}
</script>
<style scoped>
.events{
  padding-left: 45px;
}
a{
  text-decoration: none;
  color: black;
}


.header_class{
    padding: 0 156px;
    background-color:rgb(198, 223, 244);
    height: 552px;
    font-weight: bold;
}

.header_title1 {
    padding-top: 110px;
    font-size: 64px;
    color: #434343;

}

.header_title2{
    margin-top: 45px;
    color: #9AA199;
    font-size: 32px;
}
.main{
    background: #F7F7F7;
    margin-left: 50px;
    position: relative;
    padding-bottom: 50px;
}
.filter_list{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    background: #F7F7F7;
    
    font-size: 36px;
    line-height: 44px;
    padding-top: 60px;
    color: #9AA199;
    padding: 60px 160px;
    font-weight: bold;
}

.filter_part{
    margin-left: 64px;
    position: relative;
}

.filter_part:after{

    content: "";
    width: 10px;
    height: 10px;
    border-width: 0 5px 5px 0;
    border-color: #9AA199;
    top: 25%;
    margin-left: 15px;
    transform: translate(-50%) rotate(45deg);
    border-style: solid;
    position: absolute;
    transition: all .1s;
}

.filter_part:hover:after{
   transform: rotate(-135deg); 
   top: 50%;
   margin-left: 10px;
   border-color: #434343;
}

.filter_part:hover{
    color: #434343;
}
                                                                                            
#main_filter{
    color: #434343;
    position: relative;
    transition: .1s;
}



#main_filter:hover:after{
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: black;
}

.carts{
    display: flex;
    flex-flow: row wrap;
  
    padding-bottom: 20px;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 50px;
}

.cart_event{

    display: block;
    width: 270px;
    height: 320px;
    background-color: #7BBDEC;
    margin-right: 5px;
    margin-bottom: 40px;
    transition: .4s;
    position: relative;
}


.cart_img{
    position: relative;
    height: 65%;
    width: 100%;

    overflow: hidden;
  }
  
  .cart_img > img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  

.cart_data{
    position: absolute;
    top: 5%;
    font-weight: bold;
    font-size: 20px;
    padding: 4px 20px;
    display: block;
    background-color: white;
    color: #434343;
    z-index: 10;
}

.cart_name{
    margin:10px;
    color: white;
}

.cart_event:hover{
    box-shadow: 0px 0px 10px -1px #000000;
}

.btn_more{
    padding: 20px 0;
    width: calc(100% - 125px);
    margin-left: 50px;
    border:  none;
    border-radius: 18px;
    text-decoration: none;
	color: #444;
    font-weight: bold;
    font-size: 20px;
	background-color: #fff;
	box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;  
	vertical-align: top;
	transition: box-shadow 0.2s;
    outline: none;
    box-sizing: border-box;
}

.btn_more:hover {
	transition: all 0.2s;
	box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}


.carousel{
    margin-left: 50px;
    color: #434343;
    background-color: #fff;
    border-radius: 18px;
    padding: 24px 0;
	box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
    display: flex;
    justify-content: space-around;
    width: calc(100% - 125px);
    position: relative;
    margin-top: 24px;

    
}

.arrow{
    content: "";
    width: 7px;
    height: 7px;
    border-width: 0 3px 3px 0;
    border-color: #9AA199;
    top: 45%;
    margin-left: 15px;
    transform: translate(-50%) rotate(135deg);
    border-style: solid;
    position: absolute;
    transition: all .1s;
}

.carousel_item{
    display: block;
    width: 40px;
    height: 40px;
    background-color: #FBEEEE;
    font-size: 24px;
    color: black;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
}

.right{
    transform: translate(-50%) rotate(-45deg);
}


.container_site{
    margin-right: 135px;
}

.site_items{
    margin-bottom: 60px;
    transition: all .7s;
    color: white;
}

.site_items:hover{
    color: rgb(173, 170, 170);
}

.faq_serv{
    display: flex;
    margin-left: 41px;
    margin-bottom: 22px;
    font-weight: bold;
    font-size: 17px;
}

.serv_item{
    transition: all .7s;
    color: white;
}

.serv_item:hover{
    color: rgb(173, 170, 170);
}

.it{
    margin-right: 111px;
}

.title_inner{
    display: flex;
    flex-direction: column;
}

.inner_items{
    padding: 2px;
    color: #9AA199;
}

.error{
    display: none;
}


@media (max-width: 1020px){
    .header_class{
        margin-left: 0;
    }

    .main{
        margin-left: 0;
    }
    
    .filter_list {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #F7F7F7;
        font-size: 19px;
        line-height: 44px;
        color: #9AA199;
        padding: 17px 0px;
        padding-right: 4vw;
        font-weight: bold;
        justify-content: flex-end;

    }

    .header_title1 {
        padding-top: 0;
        font-size: 10vw;
        color: #434343;
    }
    
    .header_title2 {
        margin-top: 10px;
        color: #9AA199;
        font-size: 21px;
    }

    .header_class {
        margin-left: 0;
        padding: 45px 20px;
        background-color: rgb(198, 223, 244);
        font-weight: bold;
        height: initial;
    }

    .filter_part:after{
        display: none;
    }

    .filter_part {
        margin-left: calc(100vw * 0.03);
        position: relative;
    }

    .carts{
        padding-left: 0;
        padding-right: 0;
    }

    .carousel{
        display: none;
    }

    .container_site {
        margin-right: 0px;
        display: flex;
    }


    .spacerx2{
        margin-right: 3vw;
    }

    .spacerx7{
        margin-right: 7vw;
    }

    .faq_serv{
        font-size: 6vw;
        flex-wrap: wrap;
        padding: 13px 5vw;
        margin-left: 0;
        margin-bottom: 0;
    }

    .inner_items{
        width: 15vw;
        height: 15vw;
    }


    .site_items{
        margin-bottom: 10vw;
    }
}




</style>
