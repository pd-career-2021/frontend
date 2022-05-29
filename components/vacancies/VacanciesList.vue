<template>
    <ul class="vacancies__list">
        <VacanciesItem v-for="vacancy in vacancies" :key="vacancy.id" :vacancy="vacancy"/>
    </ul>
</template>

<script>
export default {
    props: {
        vacancies: Array
    }
}
</script>

<style scoped>
    .vacancies__list {
        display: flex;
        gap: 30px;
        flex-direction: column;
    }
</style>