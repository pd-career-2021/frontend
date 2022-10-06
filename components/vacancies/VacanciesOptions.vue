<template>
    <div class="vacancies__options vacancies-options">
        <div class="vacancies-options__location">
            <a href="#" class="vacancies-options__city button">{{ options.city }}</a>
            <ButtonFavorite @toggle="toggleFavoriteState" :isFavorite="options.isFavorite" />
        </div>
        <form action="#" class="vacancies-options__form">
            <p class="vacancies-options__title">Фильтры</p>
            <div class="vacancies-options__field">
                <label for="skills" class="vacancies-options__label">Ключевые навыки</label>
                <select v-model="currentOptions.skill" name="skills" id="skills" class="vacancies-options__input vacancies-options__input--select">
                    <option v-for="item in options.skills" :key="item.id" :value="item.value">{{ item.body }}</option>
                </select>
            </div>
            <div class="vacancies-options__field">
                <label for="type" class="vacancies-options__label">Тип компании</label>
                <select v-model="currentOptions.type" name="type" id="type" class="vacancies-options__input vacancies-options__input--select">
                    <option v-for="item in options.types" :key="item.id" :value="item.value">{{ item.body }}</option>
                </select>
            </div>
            <div class="vacancies-options__field">
                <label for="pay" class="vacancies-options__label">Заработная плата</label>
                <input :value="currentOptions.minPay" type="range" name="pay" id="pay" class="vacancies-options__input vacancies-options__input--range">
                <div class="vacancies-options__helper">
                    <input v-model="currentOptions.minPay" type="number" name="min-pay" class="vacancies-options__input vacancies-options__input--count">
                    <input v-model="currentOptions.maxPay" type="number" name="max-pay" class="vacancies-options__input vacancies-options__input--count">
                </div>
            </div>
            <div class="vacancies-options__field">
                <p class="vacancies-options__label">Опыт работы</p>
                <div id="experience" class="vacancies-options__list">
                    <label for="experience-1" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-1" type="checkbox" name="experience" class="vacancies-options__checkbox" value="noexperience">Нет опыта<span class="vacancies-options__count">37</span></label>
                    <label for="experience-2" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-2" type="checkbox" name="experience" class="vacancies-options__checkbox" value="nomatter">Не имеет значения<span class="vacancies-options__count">32</span></label>
                    <label for="experience-3" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-3" type="checkbox" name="experience" class="vacancies-options__checkbox" value="triennial">от 1 года до 3 лет<span class="vacancies-options__count">421</span></label>
                    <label for="experience-4" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-4" type="checkbox" name="experience" class="vacancies-options__checkbox" value="bigtriennial">от 3 до 6 лет<span class="vacancies-options__count">299</span></label>
                    <label for="experience-5" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-5" type="checkbox" name="experience" class="vacancies-options__checkbox" value="more">Более 6 лет<span class="vacancies-options__count">89</span></label>
                </div>
            </div>
            <div class="vacancies-options__field">
                <p class="vacancies-options__label">Тип занятости</p>
                <div class="vacancies-options__list">
                    <label for="employment-1" class="vacancies-options__item"><input v-model="currentOptions.employment" id="employment-1" type="checkbox" name="employment" class="vacancies-options__checkbox" value="project">Проектная работа<span class="vacancies-options__count">11</span></label>
                    <label for="employment-2" class="vacancies-options__item"><input v-model="currentOptions.employment" id="employment-2" type="checkbox" name="employment" class="vacancies-options__checkbox" value="internship">Стажировка<span class="vacancies-options__count">31</span></label>
                    <label for="employment-3" class="vacancies-options__item"><input v-model="currentOptions.employment" id="employment-3" type="checkbox" name="employment" class="vacancies-options__checkbox" value="part-time">Частичная занятость<span class="vacancies-options__count">341</span></label>
                    <label for="employment-4" class="vacancies-options__item"><input v-model="currentOptions.employment" id="employment-4" type="checkbox" name="employment" class="vacancies-options__checkbox" value="full-time">Полная занятость<span class="vacancies-options__count">652</span></label>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            city: String,
            isFavorite: Boolean,
            skills: Array
        }
    },
    data() {
        return {
            currentOptions: {
                skill: 'marketing',
                type: 'intern',
                minPay: 0,
                maxPay: 228,
                experience: ['nomatter'],
                employment: ['full-time']
            }
        }
    },
    methods: {
        toggleFavoriteState() {
            this.$emit('toggle-favorite');
        }
    }
}
</script>

<style>

</style>