<template>
    <div class="vacancies__options vacancies-options">
        <div class="vacancies-options__location">
            <a href="#" class="vacancies-options__city">{{ options.city }}</a>
            <FavoriteButton @toggle-favorite="toggleFavoriteState" :isFavorite="options.isFavorite" />
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
                    <label for="experience-1" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-1" type="radio" name="experience" class="vacancies-options__radio" value="noexperience">Нет опыта<span class="vacancies-options__count">37</span></label>
                    <label for="experience-2" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-2" type="radio" name="experience" class="vacancies-options__radio" value="nomatter">Не имеет значения<span class="vacancies-options__count">32</span></label>
                    <label for="experience-3" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-3" type="radio" name="experience" class="vacancies-options__radio" value="triennial">от 1 года до 3 лет<span class="vacancies-options__count">421</span></label>
                    <label for="experience-4" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-4" type="radio" name="experience" class="vacancies-options__radio" value="bigtriennial">от 3 до 6 лет<span class="vacancies-options__count">299</span></label>
                    <label for="experience-5" class="vacancies-options__item"><input v-model="currentOptions.experience" id="experience-5" type="radio" name="experience" class="vacancies-options__radio" value="more">Более 6 лет<span class="vacancies-options__count">89</span></label>
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
import FavoriteButton from '~/components/general/FavoriteButton';

export default {
    components: {
        FavoriteButton
    },
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
                maxPay: 100000,
                experience: 'nomatter',
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

<style scoped>
    .vacancies-options__location {
        margin-bottom: 25px;
        display: flex;
        gap: 5px;
    }

    .vacancies-options__city {
        font-weight: 700;
        font-size: 24px;
        color: #fff;
        width: calc(100% - 64px);
        background-color: #1e1e1e;
        padding: 15px 30px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .25);
        border-radius: 16px;
        text-align: center;
    }

    .vacancies-options__form {
        width: 360px;
        color: #000;
        padding: 25px;
        height: max-content;
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
    }

    .vacancies-options__title {
        font-weight: 700;
        font-size: 48px;
        margin-bottom: 20px;
    }

    .vacancies-options__field {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .vacancies-options__label {
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 24px;
    }

    .vacancies-options__input {
        background: #fff;
        border: 1px solid #a1a2a6;
        border-radius: 12px;
        padding: 10px;   
    }

    .vacancies-options__input--count {
        border-color: #a4a5a9;
        width: 110px;
        height: 30px;
        padding: 5px 10px;
        text-align: center;
    }

    .vacancies-options__radio {
        height: 22px;
        width: 22px;
    }

    .vacancies-options__checkbox {
        height: 22px;
        width: 22px;
    }

    .vacancies-options__helper {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .vacancies-options__list {
        display: flex;
        flex-direction: column;
        gap: 10px
    }

    .vacancies-options__item {
        font-size: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .vacancies-options__count {
        font-size: 16px;
        color: #9aa199;
    }
</style>