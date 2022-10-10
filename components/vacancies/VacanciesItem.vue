<template>
    <li class="vacancies__item vacancy-item">
        <nuxt-link :to="'/vacancies/' + vacancy.id" class="vacancy-item__title">{{ vacancy.name }}</nuxt-link>
        <div class="vacancy-item__info">
            <img :src="vacancy.logo.link" :alt="vacancy.logo.name + ' logo'" class="vacancy-item__logo">
            <a :href="vacancy.company.link" target="_blank" class="vacancy-item__address">
                <span>{{ vacancy.address }}</span>
                <span class="vacancy-item__name">{{ vacancy.company.name }}</span>
            </a>
        </div>
        <p class="vacancy-item__description">{{ vacancy.description }}</p>
        <p class="vacancy-item__pay">От {{ vacancy.pay }} Р</p>
        <div class="vacancy-item__actions">
            <ButtonFavoriteClear v-if="!editable" @toggle="toggleFavoriteState" :isFavorite="vacancy.isFavorite" />
            <template v-else>
                <nuxt-link to="#" class="button button--blue button--outline button--small">Редактировать</nuxt-link>
                <ButtonClose />
            </template>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        vacancy: {
            id: Number,
            name: String,
            logo: {
                name: String,
                link: String
            },
            link: String,
            address: String,
            company: {
                name: String,
                link: String
            },
            description: String,
            pay: String,
            isFavorte: Boolean
        },
        editable: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleFavoriteState() {
            this.$emit('toggle-favorite', this.vacancy.id);
        }
    }
}
</script>
