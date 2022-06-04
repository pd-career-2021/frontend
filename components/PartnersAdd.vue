<template>
<div>
    <div class="top">
    <div class="top__wrapper">
       <div class="block__text">
          <h1>Партнёрам</h1>
          <p class="block__desc">Какой-то текст</p>
      </div>
      <div>
      <button class="button__edit">
          Сохранить
      </button>
      </div>

    </div>

  </div>
  <div class="block__about">
        <h2>О нас</h2>
        <form action="" class="block__form">
            <input type="text" class="form__item" placeholder="Введите название компании">
            <textarea class="form__pole" cols="20" rows="15" placeholder="Введите описание компании"></textarea>
            <div class="block__flex-item1">
                 <input type="text" class="flex__item1" placeholder="Введите название компании">
                 <input type="text" class="flex__item2" placeholder="Выберите картинку">
            </div>
            <div class="block__flex-item2">
                 <input type="text" class="flex__item2" placeholder="Выберите ваш логотип">
                 <select name="form_select"  class="flex__item3" placeholder="Выберите тип компании"></select>
            </div>
            <input type="text" class="form__item" placeholder="Укажите адрес">
        </form>
        <h4 class="title_socials">Вы можете указать свои социальные сети</h4>
        <div class="block__socials">
             позже добавлю сюда иконки
        </div>
    </div>
    <div class="block__down">
    </div>
</div>
</template>

<style scoped>
.title_socials{
    margin-left: 72px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #9AA199;
}
.block__flex-item2{
    display: flex;  
}
.block__flex-item1{
    display: flex;
    margin-top: 40px;
    
}
.flex__item3{
    padding-left: 30px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #9AA199;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    height: 60px;
    margin-bottom: 40px;
    width: 63%;
    box-sizing: border-box; 
    margin-left: 72px;
}
.flex__item2{
    padding-left: 30px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #9AA199;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    height: 60px;
    margin-bottom: 40px;
    width: 21%;
    box-sizing: border-box; 
    margin-left: 72px;
}
.flex__item1{
    margin-bottom: 40px;
    padding-left: 90px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #9AA199;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    height: 60px;
    width: 55%;
    margin-left: 72px;
}
.block__down{
    box-sizing: border-box;
    padding-left: 72px;
    width: 100%;
    height: 560px;
    background: #EEEEEE;

}
.block__form{
    margin-top: 50px;
    width: 90%;
}
.form__pole{
    padding-top: 30px;
    padding-left: 90px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #9AA199;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    height: 200px;
    width: 82%;
    margin-top: 40px;
    margin-left: 72px;
    resize: none;
}
.form__item:focus, .form__pole:focus, .flex__item1:focus{
    outline:none;
}
.form__item{
    padding-left: 90px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #9AA199;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    height: 60px;
    width: 82%;
    margin-left: 72px;
}
.block__about{
    padding-top: 42px;
    position: relative;
    background: #F7F7F7;
    width: 100%;
    height: 370px;
   

}
h2{
    margin-top: 0;
    font-size: 40px;
    color: #874BA0;
    margin-left: 72px;
    position: relative;
}
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
.block__desc{
  margin: 45px 0px;
  font-size: 32px;
  color: #434343;
}

.button__edit{
    cursor: pointer;
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
@media (max-width: 1180px) {
    .block__down{
        height: 730px;
    }
    .block__flex-item1, .block__flex-item2{
        flex-direction: column;
        width: 90%;
    }
    .flex__item1{
        width: 91%;
        margin-left: 0;
        font-size: 15px;
        padding-left: 10px;
        
    }
    .title_socials{
        
        font-size: 18px;
    }
     .flex__item3{
        width: 91%;
        margin-left: 0;
        font-size: 15px;
        padding-left: 10px;
        
    }
    .flex__item2{
        width: 91%;
        padding-left: 10px;
        margin-left: 0;
        font-size: 15px;
        
    }

    .block__form{
        margin-left: auto;
        margin-right: auto;
    }
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

}
@media (max-width: 600px) {
    .title_socials{
        margin-left: 20px;
    }
   h1{
       font-size: 42px;
       
   }
   .block__desc{
       font-size: 20px;
   }
    .button__edit{
      width: 80%;
      height: 10%;
      font-size: 20px;
    }
    .flex__item1, .flex__item2{
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    .form__item, .form__pole{
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }
    h2{
        margin-left: 20px;
    }
}
@media (max-width: 1100px) {
    .block__form, .form__item, .form__pole{
        margin-left: auto;
        margin-right: auto;
        font-size: 15px;
        padding-left: 10px;
    }
}

</style>