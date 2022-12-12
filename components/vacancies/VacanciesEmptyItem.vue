<template>
    <li class="vacancies__item vacancy-item">
        <div class="skeleton">
            <div class="skeleton__text skeleton__text--400"></div>
            <div class="vacancy-item__info">
                <span class="skeleton__image vacancy-item__logo"></span>
                <div class="vacancy-item__address">
                    <span class="skeleton__text skeleton__text--700"></span>
                    <span class="skeleton__text skeleton__text--150"></span>
                </div>
            </div>
            <div class="skeleton__text skeleton__text--700 vacancy-item__description"></div>
            <div class="skeleton__text skeleton__text--400"></div>
        </div>
    </li>
</template>

<script>
export default {
    name: "VacanciesEmptyItem"
}
</script>