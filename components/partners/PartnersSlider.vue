<template>
    <div class="partners-slider">
        <div class="partners-slider__wrapper">
            <ul
                class="partners-slider__list"
                :style="currentTransformPosition"
            >
                <PartnersSliderItem
                    v-for="(partner, i) in partners"
                    :key="i"
                    :partner="partner"
                />
            </ul>
            <div class="partners-slider__navigation">
                <div class="partners-slider__pages">
                    <span class="partners-slider__current">{{ currentPage + 1 }}</span>
                     -
                    <span class="partners-slider__count">{{ countPage }}</span>
                </div>
                <div class="partners-slider__buttons">
                    <PartnersSliderButton left @click="prevSlide" />
                    <PartnersSliderButton @click="nextSlide" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "PartnersSlider",
    data() {
        return {
            currentPage: 0,
            partners: [
                {
                    url: '#',
                    preview: '/images/partners/kia.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/bmw.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/cisco.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/1c.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/kia.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/bmw.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/cisco.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/1c.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/kia.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/bmw.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/cisco.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/1c.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/kia.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/bmw.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/cisco.png'
                },
                {
                    url: '#',
                    preview: '/images/partners/1c.png'
                }
            ]
        }
    },
    computed: {
        currentTransformPosition() {
            return 'transform: translate3d(' + (-1320 * this.currentPage) + 'px, 0px, 0px)';
        },
        countPage() {
            return this.partners.length / 4;
        }
    },
    methods: {
        nextSlide() {
            this.currentPage++;
            this.currentPage %= this.countPage;
        },
        prevSlide() {
            this.currentPage = !this.currentPage ? this.countPage - 1 : this.currentPage - 1;
        }
    }
}
</script>
