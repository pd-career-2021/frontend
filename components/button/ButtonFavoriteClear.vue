<template>
    <button @click="$emit('toggle')" class="button button--clear">
        <svg v-if="isFavorite" width="45" height="42" viewBox="0 0 31 29" fill="#fbd37d" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 2L19.6715 10.2282L29 11.5557L22.25 17.9569L23.843 27L15.5 22.7282L7.157 27L8.75 17.9569L2 11.5557L11.3285 10.2282L15.5 2Z" stroke="#fbd37d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="45" height="42" viewBox="0 0 51 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 3L32.4525 16.8233L48 19.0536L36.75 29.8076L39.405 45L25.5 37.8233L11.595 45L14.25 29.8076L3 19.0536L18.5475 16.8233L25.5 3Z" stroke="#FBD37D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</template>

<script>
export default {
    props: {
        isFavorite: Boolean,
        required: true
    }
}
</script>