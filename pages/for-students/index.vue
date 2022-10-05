<template>
<div class="app">
  <div class="mobile-hidden"> <TheRightMenu /></div>
 
  
  <TheHeader />

  <div class="bg-light-gray featuredPositions">
    <div class="line">
      <h4 class="dark m0">Рекомендуемые должности</h4>
      <p class="new bg-orange large white m0">29 новых</p>
    </div>

    <div class="line blocks wrap">
      <TheFeaturedPosition />
      <TheFeaturedPosition />
      <TheFeaturedPosition />
      <TheFeaturedPosition />
      <TheFeaturedPosition />
      <TheFeaturedPosition />
    </div>
    
    <a href="#" class="btn bg-blue large white">Вакансии и стажировки</a>
  </div>

  <div class="practice">
    <h2 class="m-3vw dark">Наших партнеров 
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      болee 350</h2>
    <div class="d-flex">
      <div class="bg-dark-blue pd-practice">
        <h3 class="white">Найти практику</h3>
        <ul class="list-style-none ul-practice">
          <li class="large white m-li">Найти практику</li>
          <li class="large white m-li">Участвовать в мероприятиях</li>
          <li class="large white m-li">Какой-то текст</li>
          <li class="large white m-li">Какой-то текст</li>
        </ul>
      </div>
      <div class="bg-dark pd-practice">
        <h3 class="white">Найти практику</h3>
        <ul class="list-style-none ul-practice">
          <li class="large white m-li">Курсы и карьерные консультации</li>
          <li class="large white m-li">Конструктор резюме</li>
          <li class="large white m-li">Недели карьеры и ярмарки вакансий</li>
          <li class="large white m-li">Какой-то текст</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="download featuredPositions">
    <p class="huge mt-0">Скачать документы</p>
    <ul class="clip-ul">
      <li class="large dark m-li">Скачать документы номер в№13131313 от 2013 года 19 марта</li>
      <li class="large dark m-li">Скачать документы список 13131313 13131313 1313131313131313</li>
      <li class="large dark m-li">Скачать документы ещё какой то документ незнаяю названия</li>
    </ul>
  </div>

  <AppFooter/>

</div>
</template>

<script>

export default {
    name: "IndexPage",
}
</script>

<style scoped>
.app {
  margin: 0;
  padding: 0;

  font-family: 'Gilroy';

  display: flex;
  flex-direction: column;
}
.featuredPositions {
  margin: 5vh 3vw 5vh 6vw;
  padding: 5vh 1vw 5vh 3vw;
  height: auto; 
  display: flex;
  flex-direction: column;
}

.line {
  display: flex;
  justify-content: space-between;
}

.new {
  padding: 0.2rem 1rem;
  border-radius: 6px;
}

.blocks {
  margin: 3vh 5vw 3vh 3vw;
}

.btn {
  padding: 2vh 4vw;
  text-decoration: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  align-self: center;

}

.download {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}

.list-style-none {
  list-style: none;
}

.clip-ul {
  list-style-image: url(/backgrounds/Vector.svg);
  margin: 0;
}

.m-li {
  margin-bottom: 0.3rem;
}

.practice {
  background: url('/backgrounds/pl2.png') no-repeat;
  background-size: 100%;
  margin-left: 3vw;
  padding: 5vh 5vw 5vh 3vw;
}

.pd-practice {
  padding: 2vh 5vw 10vh;
  width: 50%;
  margin-top: 12vh;
}

span {
  margin-bottom: 100px;
  margin-left: 11vw;
}

@media (max-width: 380px) {
    .line {
        flex-direction: column;
    }
    .new {
      width: 30%;
      margin-top: 10px;
      text-align: center;
    }

    h2 {
      font-size: 1.2em;
    }
    
}


@media (max-width: 640px) {
  .mobile-hidden {
    display: none;
  }

  .d-flex {
    flex-direction: column;
    align-items: center;
  }

  .practice {
    background-size: cover;
    background-position: 60% 0;
  }

  .pd-practice {
    padding: 2vh 5vw 5vh;
    width: 70%;
    margin-top: 0;
  }

  .ul-practice {
    padding-left: 2vw;
  }
}

@media (max-width: 1200px) {
    .practice {
      background-size: cover;
      background-position: 60% 0;
      padding: 5vh 5vw 5vh 7vw;
    }
}

@media (min-width: 2000px) {
  h2 {
    font-size: 3em;
  }
}

</style>
