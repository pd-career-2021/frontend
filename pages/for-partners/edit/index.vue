<template>
  <div class="app">
    <main>
      <section class="section vacancies">
        <div class="section__header">
          <div class="container">
            <div class="section__row">
              <h2 class="section__title">Добавить вакансию</h2>
              <VacancyCompany :company="company"/>
            </div>
          </div>
        </div>
        <div class="section__content">
          <div class="container">

          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PartnerVacancyAdd',
  data() {
    return {
      company: {
        logo: 'https://i.imgur.com/hWq8JCW.png',
        name: 'Google',
        link: 'https://google.com',
        address: 'Москва ул. Пушкина дом 14 строение 2'
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
    toggleFavoriteVacancy(id) {
      const index = this.vacancies.findIndex(element => element.id == id);
      this.vacancies[index].isFavorite = !this.vacancies[index].isFavorite;
    },
    toggleFavoriteOptions() {
      this.options.isFavorite = !this.options.isFavorite;
    }
  },
  head() {
    return {
      title: 'Вакансии'
    }
  }
}
</script>
