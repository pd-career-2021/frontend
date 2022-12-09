<template>
    <div class="courses__filters courses-filters">
        <div class="courses-filters__row">
            <p class="courses-filters__title">Фильтры</p>
            <form class="courses-filters__form">
                <select name="" id="" class="courses-filters__select">
                    <option value="default" selected disabled>Компания</option>
                </select>
                <select name="" id="" class="courses-filters__select">
                    <option value="default" selected disabled>Область</option>
                </select>
                <select name="" id="" class="courses-filters__select">
                    <option value="default" selected disabled>Длительность курса</option>
                </select>
                <select name="" id="" class="courses-filters__select">
                    <option value="default" selected disabled>Практика</option>
                </select>
            </form>
        </div>
        <div class="courses-filters__row">
            <p class="courses-filters__title">Популярное</p>
            <form class="courses-filters__form">
                <button class="courses-filters__button">Автоконструирование</button>
                <button class="courses-filters__button">Дизайн</button>
                <button class="courses-filters__button">Управление</button>
                <button class="courses-filters__button">Робототехника</button>
                <button class="courses-filters__button">Беспилотная техника</button>
                <button class="courses-filters__button">Производство</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeCoursesBlockFilters"
}
</script>