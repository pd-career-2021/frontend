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
export default {
    name: "VacanciesRecommendations",
    props: {
        className: String
    },
    data() {
        return {
            recommendations: [
                {
                    id: 0,
                    name: 'Interaction designer, Geo Automotive',
                    company: 'Google',
                    staff: 'Designer. UI/UX',
                    date: '1 неделю назад',
                    logo: 'https://i.imgur.com/87lJ2ac.png'
                },
                {
                    id: 1,
                    name: 'Interaction designer, Geo Automotive',
                    company: 'Google',
                    staff: 'Designer. UI/UX',
                    date: '1 неделю назад',
                    logo: 'https://i.imgur.com/87lJ2ac.png'
                },
                {
                    id: 2,
                    name: 'Interaction designer, Geo Automotive',
                    company: 'Google',
                    staff: 'Designer. UI/UX',
                    date: '1 неделю назад',
                    logo: 'https://i.imgur.com/87lJ2ac.png'
                },
                {
                    id: 3,
                    name: 'Interaction designer, Geo Automotive',
                    company: 'Google',
                    staff: 'Designer. UI/UX',
                    date: '1 неделю назад',
                    logo: 'https://i.imgur.com/87lJ2ac.png'
                },
                {
                    id: 4,
                    name: 'Interaction designer, Geo Automotive',
                    company: 'Google',
                    staff: 'Designer. UI/UX',
                    date: '1 неделю назад',
                    logo: 'https://i.imgur.com/87lJ2ac.png'
                },
                {
                    id: 5,
                    name: 'Interaction designer, Geo Automotive',
                    company: 'Google',
                    staff: 'Designer. UI/UX',
                    date: '1 неделю назад',
                    logo: 'https://i.imgur.com/87lJ2ac.png'
                }
            ]
        }
    }
}
</script>