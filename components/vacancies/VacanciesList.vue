<template>
    <ul class="vacancies__list">
        <VacanciesItem @toggle-favorite="toggleFavoriteState" v-for="vacancy in vacancies" :key="vacancy.id" :vacancy="vacancy"/>
    </ul>
</template>

<script>
import VacanciesItem from '~/components/vacancies/VacanciesItem';

export default {
    components: {
        VacanciesItem
    },
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