<template>
    <main>
        <section class="partners vacancies-add section">
            <div class="section__header section__header--custom container">
                <h2 class="section__title">Новая вакансия</h2>
                <div class="section__block">
                    <VacancyCompany :company="company"/>
                </div>
            </div>
            <div class="section__content">
                <div class="container">
                    <div class="wrapper">
                        <form @submit.prevent="submitHandler" class="form">
                            <div class="form__field">
                                <label for="vacancyName" class="form__label" hidden>Название компании</label>
                                <input v-model="title" type="text" id="vacancyName" name="vacancyName" class="form__input form__input--fixed" placeholder="Введите название компании">
                            </div>
                            <div class="form__field">
                                <label for="charge" class="form__label" hidden>Обязанности сотрудников</label>
                                <textarea v-model="responsibilities" type="text" id="charge" name="charge" class="form__input form__input--fixed form__input--textarea" placeholder="Введите обязанности для сотрудника"></textarea>
                            </div>
                            <div class="form__field">
                                <label for="requirements" class="form__label" hidden>Требования к сотрудникам</label>
                                <textarea v-model="requirements" type="text" id="requirements" name="requirements" class="form__input form__input--fixed form__input--textarea" placeholder="Введите требования для сотрудника"></textarea>
                            </div>
                            <div class="form__field">
                                <label for="conditions" class="form__label" hidden>Введите условия для сотрудника</label>
                                <textarea v-model="conditions" type="text" id="conditions" name="conditions" class="form__input form__input--fixed form__input--textarea" placeholder="Введите условия для сотрудника"></textarea>
                            </div>
                            <div class="form__field">
                                <label for="salary" class="form__label" hidden>Заработная плата</label>
                                <input v-model="salary" type="number" id="salary" name="salary" class="form__input form__input--fixed form__input--w-70" placeholder="Введите заработную плату">
                                <label for="type" class="form__label" hidden>Тип занятости</label>
                                <select v-model="type" name="type" id="type" class="form__input form__input--fixed form__input--w-30">
                                    <option value="#" selected disabled>Выберите тип занятости</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div class="form__field">
                                <label for="experience" class="form__label" hidden>Опят работы</label>
                                <select name="experience" id="experience" class="form__input form__input--fixed form__input--w-30">
                                    <option value="#" selected disabled>Выберитие опыт работы</option>
                                    <option value="#">2</option>
                                    <option value="#">3</option>
                                </select>
                                <label for="skills" class="form__label" hidden>Ключевые навыки</label>
                                <input type="text" v-model="skills" id="skills" name="skills" class="form__input form__input--fixed form__input--w-70" placeholder="Введите ключевые навыки">
                            </div>
                            <div class="form__footer">
                                <button class="button">Сохранить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: "index",
    data() {
        return {
            company: {
                logo: {
                    image: 'https://i.imgur.com/hWq8JCW.png',
                    alt: 'Google logo'
                },
                name: 'Google',
                link: 'https://google.com',
                address: 'Москва ул. Пушкина дом 14 строение 2'
            }
        }
    },
    computed: {
        ...mapState({
            vacancy: state => state.vacancies.newVacancy
        }),
        title: {
            get() {
                return this.$store.state.vacancies.newVacancy.title;
            },
            set(value) {
                this.$store.commit('vacancies/setCurrentTitle', value);
            }
        },
        responsibilities: {
            get() {
                return this.$store.state.vacancies.newVacancy.description.responsibilities;
            },
            set(value) {
                this.$store.commit('vacancies/setCurrentResponsibilities', value);
            }
        },
        requirements: {
            get() {
                return this.$store.state.vacancies.newVacancy.description.requirements;
            },
            set(value) {
                this.$store.commit('vacancies/setCurrentRequirements', value);
            }
        },
        conditions: {
            get() {
                return this.$store.state.vacancies.newVacancy.description.conditions;
            },
            set(value) {
                this.$store.commit('vacancies/setCurrentConditions', value);
            }
        },
        salary: {
            get() {
                return this.$store.state.vacancies.newVacancy.salary;
            },
            set(value) {
                this.$store.commit('vacancies/setCurrentSalary', value);
            }
        },
        skills: {
            get() {
                return this.$store.state.vacancies.newVacancy.skills;
            },
            set(value) {
                this.$store.commit('vacancies/setCurrentSkills', value);
            }
        },
        type: {
            get() {
                return this.$store.state.vacancies.newVacancy.type;
            },
            set(value) {
                this.$store.commit('vacancies/setCurrentType', value);
            }
        }

    },
    methods: {
        ...mapActions({
            createVacancy: 'vacancies/createVacancy'
        }),
        async submitHandler() {
            await this.createVacancy();
            await this.$router.push('/account/vacancies');
        }
    },
    validations: {

    },
    head() {
        return {
            title: 'Новая вакансия'
        }
    }
}
</script>