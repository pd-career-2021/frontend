<template>
    <li class="partners-slider__item">
        <a :href="partner.url" class="partners-slider__link">
            <img :src="partner.preview" alt="partner name temp" class="partners-slider__image">
        </a>
    </li>
</template>

<script>
export default {
    name: "PartnersSliderItem",
    props: {
        partner: {
            url: String,
            preview: String
        }
    }
}
</script>

<style scoped>

</style>