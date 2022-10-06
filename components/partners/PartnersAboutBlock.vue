<template>
    <div class="section__content">
        <div class="container">
            <div class="wrapper">
                <h2 class="section__chapter">О нас</h2>
                <div class="about">
                    <div class="about__preview">
                        <img src="~/assets/images/about.jpg" alt="mospolytech" class="about__image">
                    </div>
                    <div class="about__column">
                        <div class="about__block">
                            <p class="about__title">{{ partner.title }}</p>
                            <p class="about__description">{{ partner.description }}</p>
                        </div>
                        <div class="about__block">
                            <p class="about__title">Связь с нами</p>
                            <a :href="'mailto:' + partner.email" class="about__email">{{ partner.email }}</a>
                            <a :href="'tel:' + partner.tel.replaceAll('-', '')" class="about__tel">{{ partner.tel }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PartnersAboutBlock",
    props: {
        partner: {
            title: String,
            description: String,
            email: String,
            tel: String
        }
    }
}
</script>

<style scoped>

</style>