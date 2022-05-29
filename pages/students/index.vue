<template>
<div class="app">
  <TheRightMenu />
  
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
    <h2 class="m-3vw dark">Наших партнеров <br><span> болee 350</span></h2>
    <div class="d-flex">
      <div class="bg-dark-blue pd-practice">
        <h3 class="white">Найти практику</h3>
        <ul class="list-style-none">
          <li class="large white">Найти практику</li>
          <li class="large white">Участвовать в мероприятиях</li>
          <li class="large white">Какой-то текст</li>
          <li class="large white">Какой-то текст</li>
        </ul>
      </div>
      <div class="bg-dark pd-practice">
        <h3 class="white">Найти практику</h3>
        <ul class="list-style-none">
          <li class="large white">Курсы и карьерные консультации</li>
          <li class="large white">Конструктор резюме</li>
          <li class="large white">Недели карьеры и ярмарки вакансий</li>
          <li class="large white">Какой-то текст</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="download featuredPositions">
    <p class="huge mt-0">Скачать документы</p>
    <ul>
      <li class="large dark">Скачать документы номер в№13131313 от 2013 года 19 марта</li>
      <li class="large dark">Скачать документы список 13131313 13131313 1313131313131313</li>
      <li class="large dark">Скачать документы ещё какой то документ незнаяю названия</li>
    </ul>
  </div>

  <TheFooter />

</div>
</template>

<script>
import TheNavigation from '../../components/TheNavigation.vue';
import TheRightMenu from '../../components/TheRightMenu.vue';
import TheHeader from '../../components/TheHeader.vue';
import TheFeaturedPosition from '../../components/TheFeaturedPosition.vue';
import TheFooter from '../../components/TheFooter.vue';
export default {
    name: "IndexPage",
    components: { TheNavigation, TheRightMenu, TheHeader, TheFeaturedPosition, TheFooter }
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

.d-flex {
  display: flex;
}
.wrap {
  flex-wrap: wrap;
}

.m0 {
  margin: 0;
}

.mt-0 {
  margin-top: 0;
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

ul {
  list-style-image: url(/backgrounds/Vector.svg);
  margin: 0;
}

li {
  margin-bottom: 0.3rem;
}

.practice {
  background: url('/backgrounds/pl2.png');
  background-size: 100%;
  width: 100%;
  margin-left: 3vw;
  padding: 5vh 5vw 5vh 3vw;
}

.m-3vw {
  margin: 3vw;
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

</style>
