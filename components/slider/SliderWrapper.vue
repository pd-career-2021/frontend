<template>
    <div class="slider__wrapper">
        <ul
            class="slider__list"
            :class="className + '__list'"
            :style="currentTransformPosition"
            ref="slider"
        >
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
            currentPage: 0,
            width: 1650,
            gap: 10
        }
    },
    computed: {
        currentTransformPosition() {
            return 'transform: translate3d(' + (-this.width * this.currentPage - this.gap * this.currentPage) + 'px, 0px, 0px)';
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
    mounted() {
        this.width = this.$refs.slider.clientWidth;
        this.gap = Number(window.getComputedStyle(this.$refs.slider).gap.slice(0, -2));
        console.log(this.gap)
    }
}
</script>
