<template>
    <div class="section-menu" :class="className">
        <AppSectionMenuBlock
            v-for="(menu, i) in blocks"
            :key="i"
            :menu="menu"
        />
    </div>
</template>

<script>
export default {
    name: "AppSectionMenu",
    props: {
        className: String,
        blocks: Array
    }
}
</script>