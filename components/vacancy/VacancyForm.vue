<template>
    <div class="vacancy__contacts">
        <h3 class="vacancy__subtitle vacancy__subtitle--light">Оставьте свои контакты, чтобы мы смогли с вами связаться</h3>
        <form action="#" class="vacancy__form form">
            <input name="email" type="text" class="form__input" placeholder="Телефон или email">
            <button name="submit" class="form__button button">Продолжить</button>
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