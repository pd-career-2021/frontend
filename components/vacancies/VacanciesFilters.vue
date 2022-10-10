<template>
    <ul v-if="filters.length" class="vacancies__filters">
        <li v-for="(value, key, i) in filters" :key="i" class="vacancies__filter">{{ value }}<span class="vacancies__delete">x</span></li>
        <li @click="clear" class="vacancies__filter vacancies__filter--button">Очистить фильтр</li>
    </ul>
</template>

<script>
export default {
    props: {
        filters: Object
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