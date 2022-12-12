<template>
    <div class="account__view">
        <a href="#" class="account__back" @click.prevent="$emit('change-view', 'login')">
            <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 19L2 10.5L10.5 2" stroke="#B8B5BC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Назад
        </a>
        <h2 class="account__title">Зарегистрироваться как студент</h2>
        <form @submit.prevent="submitRegistrationForm" class="account__form form">
            <div class="form__field form__field--vertical form__field--full">
                <label for="surname" class="form__label">Фамилия</label>
                <input
                    v-model.trim="surname"
                    required
                    id="surname"
                    type="text"
                    name="surname"
                    class="account__input form__input"
                >
            </div>
            <div class="form__field form__field--vertical form__field--full">
                <label for="firstName" class="form__label">Имя</label>
                <input
                    v-model.trim="firstName"
                    required
                    id="firstName"
                    type="text"
                    name="firstName"
                    class="account__input form__input"
                >
            </div>
            <div class="form__field form__field--vertical form__field--full">
                <label for="secondName" class="form__label">Отчество</label>
                <input
                    v-model.trim="secondName"
                    required
                    id="secondName"
                    type="email"
                    name="secondName"
                    class="account__input form__input"
                >
            </div>
            <div class="form__field form__field--vertical form__field--full">
                <label for="email" class="form__label">E-mail</label>
                <input
                    v-model="email"
                    required
                    id="email"
                    type="email"
                    name="email"
                    class="account__input form__input"
                >
            </div>
            <div class="form__field form__field--vertical form__field--full">
                <label for="password" class="form__label">Пароль</label>
                <input
                    v-model="password"
                    required
                    id="password"
                    type="password"
                    name="password"
                    class="account__input form__input"
                >
            </div>
            <div class="form__field form__field--vertical form__field--full">
                <label for="password2" class="form__label">Повторите пароль</label>
                <input
                    v-model="password2"
                    required
                    id="password2"
                    type="password"
                    name="password2"
                    class="account__input form__input"
                >
            </div>
            <button type="submit" class="account__button account__button--fixed form__button button">Войти</button>
        </form>
        <a href="#" class="account__link" @click.prevent="$emit('change-view', 'registration-partner')">Хотите стать партнером? Зарегистрироваться</a>
    </div>
</template>

<script>
    export default {
        name: 'AccountRegistrationForm',
        data() {
            return {
                surname: '',
                firstName: '',
                secondName: '',
                email: '',
                password: '',
                password2: ''
            }
        },
        methods: {
            submitRegistrationForm() {

            }
        }
    }
</script>
