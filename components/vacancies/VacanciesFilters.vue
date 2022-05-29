<template>
    <ul v-if="filters.length" class="vacancies__filters">
        <li v-for="filter in filters" :key="filter.id" class="vacancies__filter">{{ filter.body }}<span @click="removeFilter(filter.id)" class="vacancies__delete">x</span></li>
        <li @click="clearFilters" class="vacancies__filter vacancies__filter--button">Очистить фильтр</li>
    </ul>
</template>

<script>
export default {
    props: {
        filters: Array
    },
    methods: {
        clearFilters() {
            this.$emit('clear-filters');
        },
        removeFilter(id) {
            this.$emit('remove-filter', id);
        }
    }
}
</script>

<style lang="css" scoped>
    .vacancies__filters {
        display: flex;
        gap: 15px;
        margin-bottom: 30px;
    }

    .vacancies__filter {
        padding: 6px 10px;
        background: #fff;
        border-radius: 12px;
        font-size: 20px;
    }

    .vacancies__filter--button {
        background: #fe877d;
        color: #fff;
        cursor: pointer;
    }

    .vacancies__delete {
        margin-left: 8px;
        cursor: pointer;
    }
</style>