<template>
    <li class="vacancies__item vacancy-item">
        <nuxt-link :to="'/vacancies/' + vacancy.id" class="vacancy-item__title">{{ vacancy.name }}</nuxt-link>
        <div class="vacancy-item__info">
            <img :src="vacancy.logo.link" :alt="vacancy.logo.name + ' logo'" class="vacancy-item__logo">
            <div class="vacancy-item__address">
                <span>{{ vacancy.address }}</span>
                <span class="vacancy-item__name">{{ vacancy.companyName }}</span>
            </div>
        </div>
        <p class="vacancy-item__description">{{ vacancy.description }}</p>
        <p class="vacancy-item__pay">От {{ vacancy.pay }} Р</p>
    </li>
</template>

<script>
export default {
    props: {
        vacancy: {
            id: Number,
            name: String,
            logo: {
                name: String,
                link: String
            },
            link: String,
            address: String,
            companylName: String,
            description: String,
            pay: String
        }
    }
}
</script>

<style scoped>
    .vacancy-item {
        padding: 25px 40px;
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
    }

    .vacancy-item__title {
        color: #689eeb;
        font-weight: 700;
        font-size: 36px;
        margin-bottom: 15px;
    }

    .vacancy-item__info {
        display: flex;
        align-items: flex-end;
        gap: 25px;
        margin-bottom: 25px;
    }   

    .vacancy-item__logo {
        height: 60px;
        width: 60px;
    }

    .vacancy-item__address {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 20px;
        color: #9aa199;
    }

    .vacancy-item__name {
        font-weight: 700;
    }

    .vacancy-item__description {
        font-size: 20px;
        margin-bottom: 25px;
    }

    .vacancy-item__pay {
        font-weight: 700;
        font-size: 36px;
    }
</style>