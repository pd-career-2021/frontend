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
                        <VacanciesList
                            editable
                            :limit="3"
                            :vacancies="vacancies"
                        />
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
                id: 1,
                logo: {
                    image: 'https://i.imgur.com/hWq8JCW.png',
                    alt: 'Google logo'
                },
                name: 'Google',
                link: 'https://google.com',
                address: 'Москва ул. Пушкина дом 14 строение 2'
            }
        }
    },
    head() {
        return {
            title: 'Ваши вакансии'
        }
    },
    async asyncData({store}) {
        const vacancies = await store.dispatch('vacancies/loadingPartnerVacancies', 8);
        return { vacancies };
    }
}
</script>