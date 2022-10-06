<template>
    <a :href="to" target="_blank" class="company__name">
        <slot></slot>
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 1L5.6875 12L1 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>
</template>

<script>
export default {
    name: "VacancyCompanyName",
    props: {
        to: String
    }
}
</script>

<style scoped>

</style>