<template>
    <div class="account__view">
        <nuxt-link to="/" class="account__back">
            <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 19L2 10.5L10.5 2" stroke="#B8B5BC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            На главную
        </nuxt-link>
        <h2 class="account__title">Войти</h2>
        <form @submit.prevent="submitLoginForm" class="account__form form">
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
            <button type="submit" class="account__button account__button--fixed form__button button">Войти</button>
        </form>
        <a href="#" class="account__link" @click.prevent="$emit('change-view', 'registration-student')">Ещё нет аккаунта? Зарегистрироваться</a>
    </div>
</template>

<script>
export default {
	name: 'AccountLoginStudent',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		async submitLoginForm(event) {
			await this.$auth.loginWith('laravelSanctum', {
				data: {
					email: this.email,
					password: this.password
				}
			});
		}
	}
}
</script>