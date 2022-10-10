<template>
    <a :href="to" target="_blank" class="company__logo">
        <img :src="logo.image" :alt="logo.alt" class="company__image">
    </a>
</template>

<script>
export default {
    name: "VacancyCompanyLogo",
    props: {
        to: String,
        logo: {
            image: String,
            alt: String
        }
    }
}
</script>