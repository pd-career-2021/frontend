<template>
    <button @click="$emit('close')" class="button button--clear">
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33 3L3 33" stroke="#E63246" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 3L33 33" stroke="#E63246" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</template>

<script>
export default {
    name: "ButtonClose"
}
</script>

<style scoped>

</style>