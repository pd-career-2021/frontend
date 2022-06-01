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
                        Иконки соц.сетей Иконки соц.сетей Иконки
                    </div>
                </div>

        </div>

    </div>
</template>

<style scoped>
.footer__socials{
    margin-top: 60px;
}
.footer__bottom{
    display: grid;
    grid-template-columns: 70% 20%;
    margin-top: 60px;
}
.footer__copyright, .footer__socials{
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #9AA199;

}
.footer__copyright{
    margin-top: 50px;
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
      height: 672px;
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

</style>