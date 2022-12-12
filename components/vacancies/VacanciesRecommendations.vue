<template>
    <div class="section__content">
        <div class="container">
            <div class="wrapper">
                <h2 class="section__chapter">Вакансии</h2>
                <div class="recommendations" :class="className">
                    <span class="recommendations__count">29 новых</span>
                    <ul class="recommendations__list">
                        <VacanciesRecommendationsItem
                            v-for="recommendation in recommendations"
                            :key="recommendation.id"
                            :recommendation="recommendation"
                        />
                    </ul>
                    <div class="recommendations__footer">
                        <nuxt-link to="/vacancies" class="button">Вакансии и стажировки</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "VacanciesRecommendations",
    props: {
        className: String
    },
    computed: {
        ...mapGetters({
            recommendations: 'vacancies/recommendationVacancies'
        })
    }
}
</script>