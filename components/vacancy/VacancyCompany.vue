<template>
<div class="company" :class="className">
    <p class="company__label">Тип компании</p>
    <VacancyCompanyLogo :to="company.link" :logo="company.logo" />
    <template v-if="!small">
        <VacancyCompanyName :to="company.link">{{ company.name }}</VacancyCompanyName>
        <VacancyCompanyAddress>{{ company.address }}</VacancyCompanyAddress>
    </template>
</div>
</template>

<script>
export default {
    props: {
        company: {
            link: String,
            logo: {
                image: String,
                alt: String
            },
            name: String,
            address: String
        },
        className: String,
        small: {
            type: Boolean,
            default: false
        }
    }
}
</script>
