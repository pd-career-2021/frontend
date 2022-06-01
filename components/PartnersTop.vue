<template>
    <div class="top">
    <div class="top__wrapper">
       <div class="block__text">
          <h1>Партнёрам</h1>
          <div class="geo__block">
               <img  class="geo" src="~@/assets/images/geo.png" alt="">
               <p class="geo__text">Москва ул. Пушкина дом 14 строение 2</p>
          </div>
          <p class="block__desc">Какой-то текст</p>
      </div>
      <div>
      <button class="button__edit">
          Редактировать
      </button>
      <div class="block__company">
          <div class="logo__company">
               <img src="~@/assets/images/logo_google.png" alt="">
          </div>
          <p class="company__desc">Тип компании</p>

      </div>
      </div>

    </div>

  </div>
</template>

<style scoped>

.top{
  width: 100%;
  height: 555px;
}
.top__wrapper{
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  background: url('~@/assets/images/top.png') no-repeat right 30% top 0%;
  background-size: cover;
}
.block__text{
    position: absolute;
    margin-left: 12%;
    margin-top: 3%;
}
h1{
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 64px;
  color: #434343;
}
.geo__block{
    display: flex;
    
}
.geo{
    width: 16px;
    height: 20px;
}
.geo__text{
    font-size: 16px;
    margin: 0 9px;
    width: 290px;
    color: #874BA0;
}
.block__desc{
  margin: 15px 0px;
  font-size: 32px;
  color: #434343;
}

.button__edit{
    position: absolute;
    width: 350px;
    height: 58px;
    top: 79px;
    right: 65px;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    font-size: 32px;
    color: #9AA199;
    font-weight: 700;
}
.block__company{
    position: absolute;
    width: 230px;
    height: 276px;
    right: 65px;
    top: 186px;
}
.logo__company{
    position: relative;
    width: 230px;
    height: 230px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
.logo__company img{
    position: absolute;
    width: 152px;
    height: 152px;
    margin: 39px 39px;
    
}
.company__desc{
    position: absolute;
    font-size: 20px;
    color: #9AA199;
    font-weight: 700;
    right: 0;
}
@media (max-width: 1000px) {
    .button__edit{
      position: absolute;
      width: 60%;
      height: 10%;
      top: 259px;
      left: 12%;
      font-size: 23px;
}
.block__company{
    position: absolute;
    width:  230px;
    height: 146px;
    left: 12%;
    top: 329px;
}
.logo__company{
    width: 130px;
    height: 130px;
    
}
.logo__company img{
    width: 60%;
    height: auto;
    margin: 25px;
}
.company__desc{
    left: 0;
}

}
@media (max-width: 600px) {
   h1{
       font-size: 42px;
   }
   .button__edit{
       font-size: 20px;
   }
   .geo__text{
       width: 80%;
       word-wrap: break-word;
   }
   .block__desc{
       font-size: 20px;
   }
    .button__edit{
      width: 80%;
      height: 10%;
}
}

</style>