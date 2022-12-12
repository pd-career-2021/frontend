<template>
    <main>
        <section class="home section">
            <div class="section__header">
                <div class="container">
                    <h2 class="section__title">Центр карьеры</h2>
                    <p class="home__description">
                        Содействие в построении успешной карьеры каждого<br>студента и выпускника<br>по выбранной специальности
                    </p>
                    <a href="#" class="home__link link link--white">Записаться на консультацию</a>
                    <div class="home__menu">
                        <div class="home__block">
                            <p class="home__title">Студентам</p>
                            <p class="home__description">Найти вакансию, стажировки или практику, записаться на консультацию с экспертом и другое</p>
                            <div class="home__actions">
                                <a href="#" class="home__details link link--white">Подробнее</a>
                                <nuxt-link to="/for-students" class="button button--white button--small">Личный кабинет</nuxt-link>
                            </div>
                        </div>
                        <div class="home__block">
                            <p class="home__title">Работодателям</p>
                            <p class="home__description">Разместить объявление, записаться на мероприятие, скачать документы и другое</p>
                            <div class="home__actions">
                                <span></span>
                                <nuxt-link to="/for-partners" class="button button--white button--small">Личный кабинет</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PartnersBlock />
            <VacanciesRecommendations />
            <HomeMaterialsBlock />
            <HomeEventsBlock />
            <HomeConsultationsBlock />
            <HomeCoursesBlock />
        </section>
    </main>
</template>

<script>
export default {
    name: 'IndexPage',
    head() {
        return {
            title: 'Центр Карьеры'
        }
    },
    async asyncData({ store, error, axios }) {
        try {
            await Promise.all([
                store.dispatch('partners/loadingPartners'),
                store.dispatch('vacancies/loadingVacancies')
            ]);
        }
        catch(e) {
            error({message: e.message, statusCode: e.response.status});
        }

    }
}
</script>