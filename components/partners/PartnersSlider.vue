<template>
    <div class="partners-slider">
        <SliderWrapper
            :length="slides.length"
            :limit="5"
            className="partners-slider"
        >
            <SliderItem
                v-for="(slide, i) in slides"
                :key="i"
                :url="slide.url"
                className="partners-slider"
            >
                <img :src="slide.preview" alt="partner name temp" class="partners-slider__image">
            </SliderItem>
        </SliderWrapper>
    </div>
</template>

<script>

export default {
    name: "PartnersSlider",
    data() {
        return {
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
        slides() {
            return this.partners.concat(this.partners.slice(0, 5 - this.partners.length % 5));
        }
    }
}
</script>
