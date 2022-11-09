<template>
  <main>
    <section class="courses section">
      <SectionHeader>Курсы и консультации</SectionHeader>
      <HomeConsultationsBlock class="courses-block" />
      <HomeCoursesWithFiltersBlock />
    </section>
  </main>
</template>

<script>
export default {
  name: 'CoursesPage',
  head() {
    return {
      title: 'Курсы и консультации'
    }
  }
}
</script>
