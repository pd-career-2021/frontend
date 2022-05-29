<template>
    <div class="vacancy__contacts">
        <h3 class="vacancy__subtitle vacancy__subtitle--light">Оставьте свои контакты, чтобы мы смогли с вами связаться</h3>
        <form action="#" class="vacancy__form form">
            <input name="email" type="text" class="form__input" placeholder="Телефон или email">
            <button name="submit" class="form__button">Продолжить</button>
        </form>
        <ul class="vacancy__socials">
            <li v-for="item in socials" :key="item.id">
                <a :href="item.link" target="_blank" class="vacancy__social">
                    <img :src="socialImage(item.name)" :alt="item.name + 'logo'" class="vacancy__media">
                </a>
            </li>
        </ul>
        <p class="vacancy__helper">Можете связаться с нами в социальных сетях</p>
    </div>
</template>

<script>
export default {
    props: {
        socials: Array
    },
    methods: {
        socialImage(name) {
            return require('~/assets/images/' + name + '.png');
        }
    }
}
</script>

<style scoped>
    .vacancy__contacts {
        width: 50%;
        background-color: #689eeb;
        padding: 60px 30px 60px 90px;
    }

    .vacancy__form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: max-content;
    }
    
    .vacancy__socials {
        margin-top: 45px;
        display: flex;
        gap: 5px;
    }
    
    .vacancy__social {
        background-color: #fff;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
    }

    .vacancy__helper {
        margin-top: 15px;
        color: #fff;
    }

    .form__input {
        padding: 10px 25px;
        font-size: 20px;
        line-height: 23px;

        border: none;
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        outline: none;
        
        width: 380px;
    }

    .form__button {
        padding: 10px 25px;
        font-weight: 700;
        font-size: 20px;
        width: max-content;
        cursor: pointer;

        border: none;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
    }
</style>