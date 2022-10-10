<template>
<main>
    <section class="vacancy section">
        <div class="section__header section__header--center">
            <div class="container">
               <div class="section__row">
                    <VacancyExcerpt :vacancy="vacancy"/>
                    <VacancyCompany className="vacancy__company" :company="company"/>
               </div>
            </div>
        </div>
        <div class="section__content">
            <div class="container">
                <VacancyDescription :description="description" />
                <VacancySkills :skills="skills" />
                <div class="vacancy__chapter">
                    <h3 class="vacancy__subtitle">Адрес и связь</h3>
                </div>
            </div>
        </div>
        <div class="vacancy__connection">
            <VacancyMap />
            <VacancyForm :socials="socials" />
        </div>
    </section>
</main>
</template>

<script>



export default {
    name: 'VacancyPage',

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
            vacancy: {
                name: 'Видеомонтажер',
                pay: '77 000',
                isFavorite: false,
                conditions: [
                    'Требуемые опыт работы: 1-3 года',
                    'Полная занятость, полный день'
                ]
            },
            description: [
                { title: 'Обязанности', items: [
                        'Монтаж видео для социальных сетей в соответствии со сценарным планом в Premiere',
                        'Создание графики: анимации, плашки, титры, заставки в After Effects',
                        'Разработка инфографики, обложек, мемов для соцсетей в Photoshop'
                    ] 
                },
                { title: 'Требования', items: [
                        'Профессиональное владение Adobe After Effects, Premiere, Photoshop',
                        'Чувство вкуса, чувство юмора, креативное мышление, инициативность',
                        'Умение читать и визуализировать сценарии, задавать по нему правильные вопросы',
                        'Английский язык – достаточный, чтобы понимать коллег'
                    ] 
                },
                { title: 'Условия', items: [
                        'Работа в офисе телекомпании',
                        'График 5/2',
                        'Оформление по ТК РФ, соц. пакет, ДМС',
                        'Трансфер до м. Семеновская'
                    ] 
                }
            ],
            skills: [
                'Adobe After Effect',
                'Adobe Premier Pro',
                'It-разработкa'
            ],
            socials: [
                { name: 'vk', link: 'https://google.com' },
                { name: 'mail', link: 'https://google.com' },
                { name: 'google', link: 'https://google.com' },
                { name: 'vk', link: 'https://google.com' },
                { name: 'mail', link: 'https://google.com' },
                { name: 'google', link: 'https://google.com' },
            ]
        }
    },
    head() {
        return {
            title: this.vacancy.name + ' | Вакансия'
        }
    }
}
</script>