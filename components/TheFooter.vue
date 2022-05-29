<template>
    <div class="footer bg-dark">
        <div class="links">
            <a href="#" class="huge white footer-link">Студентам</a>
            <a href="#" class="huge white footer-link">Центр карьеры</a>
            <a href="#" class="huge white footer-link">Партнёры и работодатели</a>
            <a href="#" class="huge white footer-link">Вакансии</a>
            <a href="#" class="huge white footer-link">Курсы и консультации</a>
            <a href="#" class="huge white footer-link">Мероприятия центра карьеры</a>
        </div>
        <div class="line">
            <a href="#" class="large white footer-link">FAQ</a>
            <a href="#" class="large white footer-link">Правила конфиденциальности</a>
        </div>
        <div class="line">
            <p class="green-gray large">© 2022 Московский политехнический университет</p>
        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    /* margin: 5vh 3vw 0; */
    padding: 5vh 1vw 5vh 7vw;
    height: auto; 
    display: flex;
    flex-direction: column;
}

.links {
    display: flex;
    flex-wrap: wrap;
}

.footer-link {
    text-decoration: none;
    width: 30%;
    margin-bottom: 4vh;
}
</style>