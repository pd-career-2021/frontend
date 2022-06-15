<template>
  <div class="partners">
    <div class="block__about">
      <h2>О нас</h2>
      <div class="block__info">
        <div class="block__image"></div>
        <div class="info">
          <div class="info__poly">
            <h3>ООО "Поликек"</h3>
            <p class="poly">
              ПолиКЕК — это легендарный мемный бренд. Это компания, которая
              каждый день меняет жизнь людей через мемы, создавая новое, стирая
              границы юмора и объединяя людей. Мы живем мемами, вдохновляем
              своим примером и помогаем людям делать уверенные шаги навстречу
              ярким достижениям.
            </p>
          </div>
          <div class="info__know">
            <h3 class="text__know">Хотите узнать нас получше?</h3>
            <button class="button__know">Посетите наш сайт</button>
          </div>
        </div>
      </div>
    </div>
    <div class="block__employee">
      <div class="employee__flex">
        <div class="block__vacancy">
          <h3 class="title__vacancy">Разместить объявление</h3>
          <div class="block__link">
            <a href="#">Разместить вакансию</a>
            <a href="#">Разместить стажировку</a>
          </div>
        </div>
        <div class="block__request">
          <h3 class="title__vacancy">Подать заявку</h3>
          <div class="block__link">
            <a href="#">Ярмарка вакансий</a>
            <a href="#">Проведение мероприятия</a>
            <a href="#">Карьерный марафон</a>
            <a href="#">День открытых дверей Университета</a>
          </div>
        </div>
      </div>
    </div>
    <div class="block__documents">
      <div class="block-1">
        <h3 class="title__my">Мои вакансии и стажировки</h3>
      </div>
      <div class="block-2">
        <h3 class="title__my">Скачать документы</h3>
        <div class="block__docs">
          <div class="block__img">
            <img class="doc-img" src="~@/assets/images/screpka.png" alt="" />
            <a href="#"
              >Скачать документы номер в№13131313 от 2013 года 19 марта</a
            >
          </div>
          <div class="block__img">
            <img class="doc-img" src="~@/assets/images/screpka.png" alt="" />
            <a href="#"
              >Скачать документы список 13131313 13131313 1313131313131313
            </a>
          </div>
          <div class="block__img">
            <img class="doc-img" src="~@/assets/images/screpka.png" alt="" />
            <a href="#"
              >Скачать документы ещё какой то документ незнаяю названия</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partners {
  padding-left: 90px;
}
.doc-img {
  width: 20px;
  height: 20px;
  margin-right: 7px;
}

.block__about {
  position: relative;
  margin-top: 30px;
  width: 100%;
  height: 450px;
}
h2 {
  font-size: 40px;
  color: #874ba0;

  left: 72px;
  position: absolute;
}
.block__info {
  box-sizing: border-box;
  position: absolute;
  display: flex;
  width: 100%;
  margin-top: 100px;
  padding-left: 72px;
  height: 547px;
}
.block__image {
  width: 48%;
  margin-right: 20px;
  height: 417px;
  background: url('~@/assets/images/back.png') no-repeat right 30% top 0%;
  background-size: cover;
}
.info {
  width: 37%;
  height: 417px;
  box-sizing: border-box;
  position: relative;
}
.info__poly {
  width: 100%;
  height: 267px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
}
.info__know {
  width: 100%;
  height: 130px;
  position: relative;
  background: #874ba0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
h3 {
  margin: 20px 30px;
  position: absolute;
  font-weight: 700;
  font-size: 36px;
  line-height: 28px;
}
.poly {
  padding-right: 25px;
  position: absolute;
  left: 30px;
  top: 70px;
  font-size: 16px;
}
.text__know {
  color: #ffffff;
  font-size: 21px;
  line-height: 29px;
  margin-left: 65px;
}
.button__know {
  position: absolute;
  border: none;
  width: 254px;
  color: #1e1e1e;
  height: 39px;
  font-size: 18px;
  font-weight: 700;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  right: 30px;
  bottom: 20px;
}
.block__employee {
  box-sizing: border-box;
  padding-top: 150px;
  padding-left: 72px;
  width: 100%;
  height: 460px;
  background: #eeeeee;
}
.employee__flex {
  display: flex;
  width: 87%;
  height: 400px;
}
.block__link a {
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 19px;
  line-height: 29px;
  color: #ffffff;
}
.block__docs a {
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 9px;
  line-height: 29px;
  color: #1e1e1e;
}
.title__vacancy {
  position: relative;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
}
.block__vacancy {
  box-shadow: 0px 0px 10px rgba(99, 99, 99, 0.25);
  position: relative;
  background: #874ba0;
  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 50px;
  width: 50%;
}
.block__request {
  box-shadow: 0px 0px 10px rgba(99, 99, 99, 0.25);
  position: relative;
  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 50px;
  width: 50%;
  background: #1e1e1e;
}
.block__link {
  margin-top: 35px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
}
.block__documents {
  padding-top: 120px;
  background: #f7f7f7;
  width: 100%;
  height: 630px;
}
.block-1 {
  padding-top: 20px;
  margin-left: 72px;
  margin-top: 70px;
  width: 82.5%;
  position: relative;
  box-sizing: border-box;
  min-height: 124px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
.block-2 {
  margin-left: 72px;
  margin-top: 70px;
  padding-top: 20px;
  width: 82.5%;
  position: relative;
  box-sizing: border-box;
  min-height: 290px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
.title__my {
  position: relative;
  font-weight: 700;
  font-size: 5vh;
  line-height: 44px;
  color: #1e1e1e;
}
.block__docs {
  margin-top: 32px;
  margin-left: 76px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1068px) {
  h2 {
    left: 12px;
  }
  .block__employee {
    padding-left: 0;
  }
  .block__docs {
    padding-right: 20px;
  }
  .block__documents {
    height: 930px;
  }
  .block__about {
    height: 910px;
  }
  .block__info {
    height: 900px;
    flex-direction: column;
    padding-left: 0;
  }
  .block__image,
  .info {
    width: 95%;
    margin: 10px auto;
  }
  .employee__flex {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
  .title__my {
    line-height: 29px;
    font-size: 3vh;
  }
  .block-1 {
    width: 95%;
    height: 29%;
    margin-left: auto;
    margin-right: auto;
  }
  .block-2 {
    width: 95%;
    height: 49%;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 528px) {
  .block__vacancy,
  .block__request {
    padding-left: 10px;
  }
  .block__link a {
    font-size: 2.7vh;
  }
  .block__documents {
    height: 1330px;
  }
  .block__docs {
    margin-left: 20px;
  }
  .block-2 {
    height: 50%;
  }
  .block-2 a {
    font-size: 2.5vh;
  }

  .block__employee {
    padding-left: 0;
  }
  .employee__flex {
    margin-right: auto;
    margin-left: auto;
  }
  .employee__flex .title__vacancy {
    font-size: 25px;
    line-height: 29px;
    margin: 0;
  }
  .block__link {
    box-sizing: border-box;
    padding-right: 20px;
    margin-left: 0;
  }
  .poly {
    top: 100px;
  }
  .info__poly {
    height: 410px;
  }
  .info__know {
    height: 160px;
    margin-bottom: 10px;
  }
  .button__know {
    width: 80%;
    bottom: 10px;
    margin: 0 auto;
    font-size: 15px;
  }
  h3 {
    font-size: 24px;
  }
  .text__know {
    font-size: 18px;
  }
  .block__about {
    height: 1060px;
  }
}
@media (max-width: 1370px) {
  .employee__flex {
    height: 950px;
    flex-direction: column;
  }
  .block__vacancy,
  .block__request {
    height: 460px;
    width: 100%;
  }
  .block__employee {
    height: 980px;
  }
  .title__vacancy {
    font-size: 35px;
    word-wrap: break-word;
  }
  a {
    font-size: 20px;
  }
}
</style>
