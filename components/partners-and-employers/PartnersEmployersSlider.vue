<template>
    <div class="partners-and-employers-slider">
        <SliderWrapper
            :length="slides.length"
            :limit="4"
            className="partners-and-employers-slider"
        >
            <SliderItemEmpty
                v-for="(segment, i) in slides"
                :key="s"
                className="partners-and-employers-slider"
            >
                <a
                    v-for="(slide, i) in segment"
                    :key="i"
                    :href="makeLink(slide.id)"
                    class="slider__link partners-and-employers-slider__link"
                >
                    <img :src="slide.image" alt="partner name temp" class="partners-and-employers-slider__image">
                </a>
            </SliderItemEmpty>
        </SliderWrapper>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: "PartnersEmployersSlider",
    computed: {
        ...mapGetters({
            partners: 'partners/partnersInSliderFormat'
        }),
        slides() {
            return this.partners.concat(this.partners.slice(1, 4 - this.partners.length % 5));
        }
    },
    methods: {
        makeLink(id) {
            return this.$route.path + '/' + id;
        }
    }
}
</script>