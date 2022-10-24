<template>
    <div class="section-menu__block">
        <p class="section-menu__title">{{ menu.title }}</p>
        <ul class="section-menu__list">
            <li v-for="(link, i) in menu.links" :key="i" class="section-menu__item">
                <a :href="link.url" class="section-menu__link">{{ link.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppSectionMenuBlock",
    props: {
        menu: {
            title: String,
            links: Array
        }
    }
}
</script>