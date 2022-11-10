<template>
    <div class="slider__wrapper">
        <ul class="slider__list-partners" :class="className + '__list'" :style="currentTransformPosition">
            <slot></slot>
        </ul>
        <Pagination
            @prev="prevSlide"
            @next="nextSlide"
            :current="currentPage"
            :count="countPage"
        />
    </div>
</template>

<script>
export default {
    name: "SliderPartnersWrapper",
    props: {
        length: Number,
        limit: {
            type: Number,
            default: 4
        },
        className: String
    },
    data() {
        return {
            currentPage: 0
        }
    },
    computed: {
        currentTransformPosition() {
            return 'transform: translate3d(' + (-1650 * this.currentPage) + 'px, 0px, 0px)';
        },
        countPage() {
            return Math.ceil(this.length / this.limit);
        }
    },
    methods: {
        nextSlide() {
            this.currentPage++;
            this.currentPage %= this.countPage;
        },
        prevSlide() {
            console.log('click')
            this.currentPage = !this.currentPage ? this.countPage - 1 : this.currentPage - 1;
        }
    },
}
</script>

<style lang="scss">
.slider__list-partners{
    display: grid;
    gap: 0px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    transition: transform 1s ease;
}
</style>
