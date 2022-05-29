<template>
    <div class="section__header">
        <div class="container">
            <h2 class="section__title">{{ titles.main }}</h2>
            <p class="section__subtitle">{{ titles.subtitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            main: String,
            subtitle: String
        }
    }
}
</script>

<style scoped>
    .section__header {
        padding: 120px 0;
        background-color: #ebffF3;
    }

    .section__subtitle {
        margin-top: 45px;
        font-weight: 700;
        font-size: 32px;
        color: #9aa199;
    }

    .section__content {
        background-color: #f7f7f7;
    }
</style>