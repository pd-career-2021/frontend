<template>
    <ul :class="classNames.parent">
        <li v-for="item in list" :key="item.id" :class="classNames.children">{{ item.body }}</li>
    </ul>
</template>

<script>
export default {
    props: {
        classNames: {
            parent: String,
            children: String
        },
        list: Array
    }
}
</script>