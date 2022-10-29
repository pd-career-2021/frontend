<template>
<main>
    <section class="section partners-employers">
        <SectionHeader>Партнеры и работодатели</SectionHeader>
        <div class="section__content">
            <div class="container">
              <PartnersEmployersFilters/>
            </div>
        </div>
    </section>
</main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
.partners-employers {
  .section__header {
    background-image: url('~/assets/images/section/section-partners-and-employers.jpg');
  }
}
</style>
