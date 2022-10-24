<template>
    <div class="pagination">
        <div class="pagination__pages">
            <span class="pagination__current">{{ current + 1 }}</span>
            -
            <span class="pagination__count">{{ count }}</span>
        </div>
        <div class="pagination__buttons">
            <PaginationButton left @click="$emit('prev')" />
            <PaginationButton @click="$emit('next')" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Paginationn",
    props: {
        current: Number,
        count: Number
    }
}
</script>

<style scoped>

</style>