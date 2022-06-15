<template>
    <ul v-if="filters.length" class="vacancies__filters">
        <li v-for="filter in filters" :key="filter.id" class="vacancies__filter">{{ filter.body }}<span @click="remove(filter.id)" class="vacancies__delete">x</span></li>
        <li @click="clear" class="vacancies__filter vacancies__filter--button">Очистить фильтр</li>
    </ul>
</template>

<script>
export default {
    props: {
        filters: Array
    },
    methods: {
        clear() {
            this.$emit('clear');
        },
        remove(id) {
            this.$emit('remove', id);
        }
    }
}
</script>