<template>
<div class="page">
    <Aside />
    <main>
        <div class="vacancy">
            <div class="vacancy__preview">
                <div class="container">
                   <div class="vacancy__wrapper">
                        <VacancyExcerpt :vacancy="vacancy"/>
                        <VacancyCompany :company="company"/>
                   </div>
                </div>
            </div>
            <div class="vacancy__content">
                <div class="container">
                    <VacancyDescription :description="description" />
                    <VacancySkills :skills="skills" />
                    <div class="vacancy__chapter">
                        <h3 class="vacancy__subtitle">Адрес и связь</h3>
                    </div>
                </div>
            </div>
            <div class="vacancy__connection">
                <div class="container--fluid">
                    <div class="vacancy__connection-wrapper">
                        <VacancyMap />
                        <VacancyForm :socials="socials" />
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</div>
</template>

<script>
import VacancyCompany from '~/components/vacancy/VacancyCompany';
import VacancyExcerpt from '~/components/vacancy/VacancyExcerpt';
import VacancyDescription from '~/components/vacancy/VacancyDescription';
import VacancySkills from '~/components/vacancy/VacancySkills';
import VacancyMap from '~/components/vacancy/VacancyMap';
import VacancyForm from '~/components/vacancy/VacancyForm';

import Aside from '~/components/Aside';
import Footer from '~/components/Footer';

export default {
    name: 'VacancyPage',
    components: {
        VacancyCompany, VacancyExcerpt, VacancyDescription, VacancySkills, VacancyMap, VacancyForm, Aside, Footer
    },
    data() {
        return {
            company: {
                logo: 'https://i.imgur.com/hWq8JCW.png',
                name: 'Google',
                link: 'https://google.com',
                address: 'Москва ул. Пушкина дом 14 строение 2'
            },
            vacancy: {
                name: 'Видеомонтажер',
                pay: '77 000',
                isFavorite: false,
                conditions: [
                    { id: 0, body: 'Требуемые опыт работы: 1-3 года' },
                    { id: 1, body: 'Полная занятость, полный день' }
                ]

            },
            description: [
                { id: 0, title: 'Обязанности', items: [
                        { id: 0, body: 'Монтаж видео для социальных сетей в соответствии со сценарным планом в Premiere' },
                        { id: 1, body: 'Создание графики: анимации, плашки, титры, заставки в After Effects' },
                        { id: 2, body: 'Разработка инфографики, обложек, мемов для соцсетей в Photoshop' }
                    ] 
                },
                { id: 1, title: 'Требования', items: [
                        { id: 0, body: 'Профессиональное владение Adobe After Effects, Premiere, Photoshop' },
                        { id: 1, body: 'Чувство вкуса, чувство юмора, креативное мышление, инициативность' },
                        { id: 2, body: 'Умение читать и визуализировать сценарии, задавать по нему правильные вопросы' },
                        { id: 3, body: 'Английский язык – достаточный, чтобы понимать коллег' }
                    ] 
                },
                { id: 2, title: 'Условия', items: [
                        { id: 0, body: 'Работа в офисе телекомпании' },
                        { id: 1, body: 'График 5/2' },
                        { id: 2, body: 'Оформление по ТК РФ, соц. пакет, ДМС' },
                        { id: 3, body: 'Трансфер до м. Семеновская' }
                    ] 
                }
            ],
            skills: [
                { id: 0, body: 'Adobe After Effect' },
                { id: 1, body: 'Adobe Premier Pro' },
                { id: 2, body: 'It-разработкa' }
            ],
            socials: [
                { id: 0, name: 'vk', link: 'https://google.com' },
                { id: 1, name: 'mail', link: 'https://google.com' },
                { id: 2, name: 'google', link: 'https://google.com' },
                { id: 3, name: 'vk', link: 'https://google.com' },
                { id: 4, name: 'mail', link: 'https://google.com' },
                { id: 5, name: 'google', link: 'https://google.com' },
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