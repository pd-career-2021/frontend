<template>
    <div class="partners-and-employers-slider">
        <SliderPartnersWrapper
            :length="slides.length"
            :limit="8"
            className="partners-and-employers-slider"
        >
            <SliderItem
                v-for="(slide, i) in slides"
                :key="i"
                :url="slide.url"
                className="partners-and-employers-slider"
            >
                <img :src="slide.preview" alt="partner name temp" class="partners-slider__image">
            </SliderItem>
        </SliderPartnersWrapper>
    </div>
</template>

<script>

export default {
    name: "PartnersEmployersSlider",
    data() {
        return {
            partners: [
                {
                    url: '#',
                    preview: '/images/partners-and-employers/intel-logo1.png'
                },
                {
                    url: '#',
                    preview: '/images/partners-and-employers/intel-logo2.png'
                },
                {
                    url: '#',
                    preview: '/images/partners-and-employers/intel-logo1.png'
                },
                {
                    url: '#',
                    preview: '/images/partners-and-employers/intel-logo2.png'
                },
                {
                    url: '#',
                    preview: '/images/partners-and-employers/intel-logo2.png'
                },
                {
                    url: '#',
                    preview: '/images/partners-and-employers/intel-logo1.png'
                },
                {
                    url: '#',
                    preview: '/images/partners-and-employers/intel-logo2.png'
                },
                {
                    url: '#',
                    preview: '/images/partners-and-employers/intel-logo1.png'
                }
            ]
        }
    },
    computed: {
        slides() {
            return this.partners.concat(this.partners.slice(1, 4 - this.partners.length % 5));
        }
    }
}
</script>


<style lang="scss">
@use './assets/scss/utilities/mixins';
@use './assets/scss/utilities/variables';

.partners-and-employers-slider {
    &__list {
        gap: 0px!important;
    }

    &__item {
        &:first-child {
            margin-left: 0px;
        }
        border-right: 1px solid variables.color('gray');
        border-bottom: 1px solid variables.color('gray');
    }

    &__link {
        height: 280px;
        background-color: variables.color('white');
        @include mixins.flex-box($a: center, $j: center);
        padding: 10px;
        transition: opacity .3s ease;

        &:hover {
            opacity: .6;
        }
    }

    &__image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
}

</style>