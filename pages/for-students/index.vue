<template>
    <main>
        <section class="students section">
            <SectionHeader>Студентам</SectionHeader>
            <VacanciesRecommendations className="students__recommendations" />
            <StudentsPractice />
            <PartnersBlock />
            <FilesBlock />
        </section>
    </main>
</template>

<script>
export default {
    name: "StudentsPage",
    head() {
        return {
            title: 'Студентам'
        }
    }
}
</script>