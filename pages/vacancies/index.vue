<template>
<main>
    <section class="section vacancies">
        <SectionHeader>Вакансии</SectionHeader>
        <div class="section__content">
            <div class="container">
                <div class="vacancies__wrapper">
                    <VacanciesOptions
                        @toggle-favorite="toggleFavoriteOptions"
                        :options="options"
                    />
                    <div class="vacancies__catalogue">
                        <VacanciesFilters
                            @clear="clearFilters"
                            @remove="removeFilter"
                            :filters="filters"
                        />
                        <VacanciesList
                            @toggle-favorite="toggleFavoriteVacancy"
                            :vacancies="vacancies"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    name: 'VacancyPage',
    data() {
        return {
            options: {
                city: 'Москва',
                isFavorite: true,
                skills: [
                    { id: 0, value: 'marketing', body: 'Маркетинг' },
                    { id: 1, value: 'it-development', body: 'IT-разработка' }
                ],
                types: [
                    { id: 0, value: 'intern', body: 'Стажер' },
                    { id: 1, value: 'mentoring', body: 'Менторство' }
                ]
            },
            filters: [

            ]
        }
    },
    computed: {
        ...mapState({
            vacancies: state => state.vacancies.vacancies
        })
    },
    head() {
        return {
            title: 'Вакансии'
        }
    },
    async asyncData({store}) {
        await store.dispatch('vacancies/loadingVacancies');
    }
}
</script>
