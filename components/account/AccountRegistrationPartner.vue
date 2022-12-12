<template>
    <div class="account__view">
        <a href="#" class="account__back" @click.prevent="$emit('change-view', 'registration-student')">
            <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 19L2 10.5L10.5 2" stroke="#B8B5BC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Назад
        </a>
        <h2 class="account__title">Зарегистрироваться как партнер</h2>
        <p>Раздел в разработке..</p>
    </div>
</template>

<script>
export default {
    name: "AccountRegistrationPartner"
}
</script>