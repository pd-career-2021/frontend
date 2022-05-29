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
    background-size: 100%;
    width: 100%;
    z-index: -1;

    padding: 15vh 0 20vh 11rem;

    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 5vh;
    color: #9AA199;
}

.newContainer {
    padding-left: 70px;
}
</style>