<template>
<main>
    <section class="section partners-employers">
        <SectionHeader>Партнеры и работодатели</SectionHeader>
        <div class="section__content">
            <div class="container">
                <div class="wrapper">
                    <PartnersEmployersFilters/>
                    <PartnersEmployersSlider/>
                </div>
            </div>
        </div>
    </section>
</main>
</template>

<script>
export default {
    name: "PartnersPage",
    head() {
        return {
            title: 'Партнеры и работодатели'
        }
    },
    async asyncData({ store, error }) {
        try {
            await store.dispatch('partners/loadingPartners');
        }
        catch(e) {
            error({message: e.message, statusCode: e.response.status})
        }

    }
}
</script>
