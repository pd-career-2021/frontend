<template>
    <main>
        <section class="partners section">
            <div class="section__header section__header--partners section__header--custom container">
                <h2 class="section__title">
                    Работодателю
                    <VacancyCompanyAddress>{{ company.address }}</VacancyCompanyAddress>
                </h2>
                <div class="section__block">
                    <VacancyCompany small :company="company"/>
                    <nuxt-link class="button button--white button--small" to="for-partners/edit" >Редактировать</nuxt-link>
                </div>
            </div>
            <PartnersAboutBlock :partner="partner" />
            <PartnersAboutActionsBlock/>
            <AppLinkLine to="#">Текущие вакансии и стажировки</AppLinkLine>
            <FilesBlock />
        </section>
    </main>
</template>

<script>
export default {
    name: 'IndexPage',
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
          partner: {
              title: 'ООО “Поликек',
              description: 'ПолиКЕК — это легендарный мемный бренд. Это компания, которая каждый день меняет жизнь людей через мемы, создавая новое, стирая границы юмора и объединяя людей. Мы живем мемами, вдохновляем своим примером и помогаем людям делать уверенные шаги навстречу ярким достижениям.',
              email: 'moskowwifibiline@gmail.com',
              tel: '+7999-000-00-00'
          }
      }
    },
    head() {
        return {
            title: 'Работодателям'
        }
    }
}
</script>
