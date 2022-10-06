<template>
    <ul class="vacancies__list">
        <VacanciesItem @toggle-favorite="toggleFavoriteState" v-for="vacancy in vacancies" :key="vacancy.id" :vacancy="vacancy"/>
    </ul>
</template>

<script>
export default {
    props: {
        vacancies: Array
    },
    methods: {
        toggleFavoriteState(id) {
            this.$emit('toggle-favorite', id);
        }
    }
}
</script>