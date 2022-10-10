<template>
    <div class="slider__wrapper">
        <ul class="slider__list" :class="className + '__list'" :style="currentTransformPosition">
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
    name: "SliderWrapper",
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
