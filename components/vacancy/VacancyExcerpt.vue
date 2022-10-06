<template>
    <div class="vacancy__excerpt">
        <h2 class="vacancy__name">{{ vacancy.name }}</h2>
        <p class="vacancy__pay">От {{ vacancy.pay }} руб</p>
        <ul class="vacancy__conditions">
            <li v-for="(condition, i) in vacancy.conditions" :key="i" class="vacancy__condition">
                {{ condition }}
            </li>
        </ul>
        <div class="vacancy__actions">
            <a href="#" class="vacancy__action button button--blue">Откликнуться</a>
            <ButtonFavorite @toggle="vacancy.isFavorite = !vacancy.isFavorite" color="blue" :isFavorite="vacancy.isFavorite" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vacancy: {
            name: String,
            pay: String,
            conditions: Array,
            isFavorite: Boolean
        }
    }
}
</script>

<style>

</style>