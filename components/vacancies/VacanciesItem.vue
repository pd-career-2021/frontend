<template>
    <VacanciesEmptyItem v-if="isLoading" />
    <li v-else class="vacancies__item vacancy-item">
        <nuxt-link :to="'/vacancies/' + vacancy.id" class="vacancy-item__title">{{ vacancy.title }}</nuxt-link>
        <div class="vacancy-item__info">
            <img :src="vacancy.image" :alt="vacancy.title + ' logo'" class="vacancy-item__logo">
            <nuxt-link :to="'partners/' + vacancy.employer_id" class="vacancy-item__address">
                <span>{{ vacancy.workplace }}</span>
                <span class="vacancy-item__name">{{ companyName }}</span>
            </nuxt-link>
        </div>
        <p class="vacancy-item__description">{{ vacancy.short_desc }}</p>
        <p class="vacancy-item__pay">
            <template v-if="salary">
                От {{ salary }} Р
            </template>
            <template v-else>
                По договоренности
            </template>
        </p>
        <div class="vacancy-item__actions">
            <ButtonFavoriteClear
                v-if="!editable"
                @toggle="toggleFavoriteState"
                :isFavorite="vacancy.isFavorite"
            />
            <template v-else>
                <nuxt-link to="#" class="button button--blue button--outline button--small">Редактировать</nuxt-link>
                <ButtonClose />
            </template>
        </div>
    </li>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    props: {
        vacancy: {
            id: Number,
            title: String,
            desc: String,
            short_desc: String,
            link: String,
            salary: Number,
            workplace: String,
            level: String,
            skills: String,
            map: String,
            vacancy_type_id: Number,
            employer_id: Number,
            created_at: String,
            updated_at: String,
            image: String,
            isFavorte: {
                type: Boolean,
                default: false
            }
        },
        editable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isLoading: false,
            companyName: ''
        }
    },
    computed: {
        salary() {
            const integerSalary = Math.ceil(this.vacancy.salary);

        }
    },
    methods: {
        toggleFavoriteState() {
            this.$emit('toggle-favorite', this.vacancy.id);
        },
        ...mapActions({
            getCompany: 'partners/getPartner'
        })
    },
    async created() {
        try {
            this.isLoading = true;

            const { full_name } = await this.getCompany(this.vacancy.employer_id);
            this.companyName = full_name;

            this.isLoading = false;
        } catch(e) {

        }
    }
}
</script>
