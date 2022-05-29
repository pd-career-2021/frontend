<template>
<div class="page">
    <Aside />
    <main>
        <section class="section vacancies">
            <SectionHeader :titles="titles" />
            <div class="section__content">
                <div class="container--full">
                    <div class="vacancies__wrapper">
                        <VacanciesOptions @toggle-favorite="toggleFavoriteOptions" :options="options" />
                        <div class="vacancies__catalogue">
                            <VacanciesFilters @clear-filters="clearFilters" @remove-filter="removeFilter" :filters="filters" />
                            <VacanciesList :vacancies="vacancies" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</div>
</template>

<script>
import Aside from '~/components/Aside';
import Footer from '~/components/Footer';

import SectionHeader from '~/components/section/SectionHeader';

import VacanciesOptions from '~/components/vacancies/VacanciesOptions';
import VacanciesFilters from '~/components/vacancies/VacanciesFilters';
import VacanciesList from '~/components/vacancies/VacanciesList';

export default {
    name: 'VacanciesPage',
    components: {
        Aside, Footer, SectionHeader, VacanciesOptions, VacanciesFilters, VacanciesList
    },
    data() {
        return {
            titles: {
                main: 'Вакансии',
                subtitle: 'Какой-то текст'
            },
            filters: [
                { id: 0, body: 'Маркетинг' },
                { id: 1, body: 'IT-разработка' },
                { id: 2, body: 'Не имеет значения' }
            ],
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
                    companyName: 'ООО "Гугл"',
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000'
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
                    companyName: 'ООО "Гугл"',
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000'
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
                    companyName: 'ООО "Гугл"',
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000'
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
                    companyName: 'ООО "Гугл"',
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000'
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
    methods: {
        removeFilter(id) {
            const index = this.filters.findIndex(element => element.id == id);
            this.filters.splice(index, 1);
        },
        clearFilters() {
            this.filters = [];
        },
        toggleFavoriteOptions() {
            this.options.isFavorite = !this.options.isFavorite;
        }
    }
}
</script>

<style>

</style>