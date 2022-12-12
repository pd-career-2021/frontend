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
                <img :src="slide.image" alt="partner name temp" class="partners-slider__image">
            </SliderItem>
        </SliderWrapper>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: "PartnersSlider",
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            partners: 'partners/partnersInSliderFormat'
        }),
        slides() {
            return this.partners.concat(this.partners.slice(0, 5 - this.partners.length % 5));
        }
    }
}
</script>
