<template>
<main>
    <section class="section vacancies">
        <SectionHeader>Вакансии</SectionHeader>
        <div class="section__content">
            <div class="container">
                <div class="vacancies__wrapper">
                    <VacanciesOptions @toggle-favorite="toggleFavoriteOptions" :options="options" />
                    <div class="vacancies__catalogue">
                        <VacanciesFilters @clear="clearFilters" @remove="removeFilter" :filters="filters" />
                        <VacanciesList @toggle-favorite="toggleFavoriteVacancy" :vacancies="vacancies" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'VacancyPage',
    data() {
        return {
            vacancies: [
                {
                    id: 0,
                    name: 'Название должности',
                    logo: {
                        name: 'Google',
                        link: 'https://i.imgur.com/87lJ2ac.png'
                    },
                    link: 'https://google.com',
                    address: 'Москва',
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000',
                    isFavorite: false
                },
                {
                    id: 1,
                    name: 'Название должности',
                    logo: {
                        name: 'Google',
                        link: 'https://i.imgur.com/87lJ2ac.png'
                    },
                    link: 'https://google.com',
                    address: 'Москва',
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000',
                    isFavorite: true
                },
                {
                    id: 2,
                    name: 'Название должности',
                    logo: {
                        name: 'Google',
                        link: 'https://i.imgur.com/87lJ2ac.png'
                    },
                    link: 'https://google.com',
                    address: 'Москва',
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000',
                    isFavorite: false
                },
                {
                    id: 3,
                    name: 'Название должности',
                    logo: {
                        name: 'Google',
                        link: 'https://i.imgur.com/87lJ2ac.png'
                    },
                    link: 'https://google.com',
                    address: 'Москва',
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000',
                    isFavorite: false
                }
            ],
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
            }
        }
    },
    computed: {
        ...mapGetters({
            filters: 'vacancy/filters'
        })
    },
    mounted() {
        console.log(this.filters)
    },
    methods: {
        // removeFilter(id) {
        //     const index = this.filters.findIndex(element => element.id == id);
        //     this.filters.splice(index, 1);
        // },
        // clearFilters() {
        //     this.filters = [];
        // },
        //
        //
        //
        // toggleFavoriteVacancy(id) {
        //     const index = this.vacancies.findIndex(element => element.id == id);
        //     this.vacancies[index].isFavorite = !this.vacancies[index].isFavorite;
        // },
        // toggleFavoriteOptions() {
        //     this.options.isFavorite = !this.options.isFavorite;
        // }
    },
    head() {
        return {
            title: 'Вакансии'
        }
    }
}
</script>
