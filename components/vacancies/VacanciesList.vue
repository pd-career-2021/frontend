<template>
    <div>
        <ul class="vacancies__list">
            <VacanciesItem :editable="editable" @toggle-favorite="toggleFavoriteState" v-for="vacancy in vacanciesInPage" :key="vacancy.id" :vacancy="vacancy"/>
        </ul>
        <nuxt-link v-if="editable" to="/account/vacancies/add" class="button button--white vacancies__button">Добавить вакансию</nuxt-link>
        <Pagination
            v-if="hasPagination"
            @prev="prevPage"
            @next="nextPage"
            :current="currentPage"
            :count="countPage"
        />
    </div>
</template>

<script>
export default {
    props: {
        vacancies: Array,
        editable: {
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
            default: 4
        }
    },
    data() {
        return {
            currentPage: 0
        }
    },
    computed: {
        vacanciesInPage() {
            return this.vacancies.slice(this.currentPage * this.limit, (this.currentPage + 1) * this.limit);
        },
        countPage() {
            return Math.ceil(this.vacancies.length / this.limit);
        },
        hasPagination() {
            return this.vacancies.length > this.limit;
        }
    },
    methods: {
        toggleFavoriteState(id) {
            this.$emit('toggle-favorite', id);
        },
        nextPage() {
            this.currentPage++;
            this.currentPage %= this.countPage;
        },
        prevPage() {
            this.currentPage = !this.currentPage ? this.countPage - 1 : this.currentPage - 1;
        }
    }
}
</script>