<template>
    <div class="main-header">
        <h1 class="dark">Студентам</h1>
        <a href="#">Разместить объявление</a>
        <a href="#">Разместить объявление</a>
        <a href="#">Разместить объявление</a>
    </div>
</template>

<style scoped>
.main-header {
    background: url("/backgrounds/pol1green.jpg") no-repeat;
    background-size: cover;
    background-position: 80% 0;
    z-index: -1;

    padding: 15vh 0 20vh 17vw;

    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 5vh;
    color: #9AA199;
}

.newContainer {
    padding-left: 70px;
}

@media (max-width: 640px) {
  .main-header {
      padding: 5vh 0 7vh 5vw;
  }

  h1 {
    font-size: 1.5em;
  }

  a {
      font-size: 0.5em;
      line-height: 2vh;
  }
}

@media (max-width: 920px) {
  .main-header {
      padding: 7vh 0 10vh 17vw;
  }

  h1 {
    font-size: 1.5em;
  }

  a {
      font-size: 0.5em;
      line-height: 2vh;
  }
}
</style>