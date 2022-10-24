<template>
    <main>
        <section class="partners section">
            <div class="section__header section__header--custom container">
                <h2 class="section__title">Ваши вакансии</h2>
                <div class="section__block">
                    <VacancyCompany :company="company"/>
                </div>
            </div>
            <div class="section__content">
                <div class="container">
                    <div class="wrapper vacancies">
                        <VacanciesList editable :limit="3" :vacancies="vacancies" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "AccountVacanciesPage",
    data() {
        return {
            company: {
                logo: {
                    image: 'https://i.imgur.com/hWq8JCW.png',
                    alt: 'Google logo'
                },
                name: 'Google',
                link: 'https://google.com',
                address: 'Москва ул. Пушкина дом 14 строение 2'
            },
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
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
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
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
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
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000'
                },
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
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
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
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
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
                    company: {
                        name: 'ООО "Гугл"',
                        link: 'https://google.com'
                    },
                    description: 'Арифметическая прогрессия неустойчива. Бесконечно малая величина, конечно, заряжает многомерный цвет. Художественная эпоха свободна. Поверхность, следовательно, свободна. Статус художника, как бы это ни казалось парадоксальным, является следствием. Манерничанье, так или иначе, параллельно...',
                    pay: '99 000'
                }
            ]
        }
    },
    head() {
        return {
            title: 'Ваши вакансии'
        }
    }
}
</script>