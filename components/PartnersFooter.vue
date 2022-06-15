<template>
    <div class="wrapper__footer">
        <div class="block__footer">
            <ul class="footer__menu">
                <li class="footer__item">
                    <nuxt-link to="#" class="footer__link">Студентам</nuxt-link>
                </li>
                <li class="footer__item">
                    <nuxt-link to="#" class="footer__link">Центр карьеры</nuxt-link>
                </li>
                <li class="footer__item">
                    <nuxt-link to="#" class="footer__link">Партнеры и работодатели</nuxt-link>
                </li>
                <li class="footer__item">
                    <nuxt-link to="/vacancies" class="footer__link">Вакансии</nuxt-link>
                </li>
                <li class="footer__item">
                    <nuxt-link to="#" class="footer__link">Курсы и консультации</nuxt-link>
                </li>
                <li class="footer__item">
                    <nuxt-link to="#" class="footer__link">Мероприятия центра карьеры</nuxt-link>
                </li>
            </ul>
            <div class="footer__bottom">
                    <div class="footer__submenu">
                        <nuxt-link to="#" class="footer__link-small">FAQ</nuxt-link>
                        <nuxt-link to="#" class="footer__link-small">Правила конфиденциальности</nuxt-link>
                        <p class="footer__copyright">© 2022 Московский политехнический университет</p>
                    </div>
                    <div class="footer__socials">
                        <img class="doc-img" src="~@/assets/images/letter.png" alt="">
                        <img class="doc-img" src="~@/assets/images/vk.png" alt="">
                        <img class="doc-img" src="~@/assets/images/youtube.png" alt="">
                        <img class="doc-img" src="~@/assets/images/r.png" alt="">
                        <img class="doc-img" src="~@/assets/images/smth.png" alt="">
                        <img class="doc-img" src="~@/assets/images/odnoklasniki.png" alt="">
                        <img class="doc-img" src="~@/assets/images/telegram.png" alt="">
                    </div>
                </div>

        </div>

    </div>
</template>

<style scoped>
.doc-img{
    margin-right: 15px;
    cursor: pointer;
}
.footer__submenu{
    margin-top: 30px;
}
.footer__socials{
   
    margin-top: 30px;
}
.footer__bottom{
    display: grid;
    grid-template-columns: 70% 30%;
    margin-top: 60px;
}
.footer__copyright, .footer__socials{
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #9AA199;

}

.footer__link-small{
    padding-bottom: 30px;
    margin-right: 110px;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #FFFFFF;
}
.block__footer{
    margin-left: 90px;
    margin-top: 60px;
    width: 90%;
    margin-right: 20px;
}

.footer__link{
    text-decoration: none;
    font-weight: 700;
    font-size: 27px;
    line-height: 39px;
    color: #FFFFFF;
    
}
ul{
    list-style-type: none; 
    display: grid;
    row-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
}

.wrapper__footer{
    background: #1E1E1E;
    width: 100%;
    height: 372px;
}
@media (max-width: 1200px) {
     ul{
         grid-template-columns: 50% 1fr;
     }
}
@media (max-width: 997px) {
    .footer__bottom{
        grid-template-columns: repeat(1, 90%);
    }
    .footer__submenu{
        display: flex;
        flex-direction: column;
    }
    .wrapper__footer{
      height: 772px;
   }
}
@media (max-width: 830px) {
    .wrapper__footer{
      height: 832px;
   }
}
@media (max-width: 890px) {

    .block__footer{
        margin-left: 10px;
    }
    .footer__link{
        font-size: 23px;
    }
    ul{
         grid-template-columns: repeat(1, 90%);
     }
   
}
@media (max-width: 600px) {
    .footer__link-small, .footer__copyright{
        font-size: 17px;
    }
    .doc-img{
        margin-bottom: 10px;
    }
  .footer__submenu{
    margin-left: 40px;
    width: 100%;
  }
  .footer__socials{
    width: 100%;
    margin-top: 10px;
    margin-left: 40px;
}
.footer__bottom{
    margin-top: 0;
}
 .wrapper__footer{
      height: 932px;
   }

}

</style>