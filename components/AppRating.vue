<template>
    <div class="rating" :class="className">
        <svg v-for="i in size" :key="i" width="31" height="29" viewBox="0 0 31 29" fill="#fbd37d" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 2L19.6715 10.2282L29 11.5557L22.25 17.9569L23.843 27L15.5 22.7282L7.157 27L8.75 17.9569L2 11.5557L11.3285 10.2282L15.5 2Z" stroke="#fbd37d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-for="i in 5 - size" :key="i" width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 2L19.6715 10.2282L29 11.5557L22.25 17.9569L23.843 27L15.5 22.7282L7.157 27L8.75 17.9569L2 11.5557L11.3285 10.2282L15.5 2Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: "AppRating",
    props: {
        className: String,
        rate: Number
    },
    computed: {
        size() {
            return Math.floor(this.rate);
        }
    }
}
</script>

<style scoped>

</style>