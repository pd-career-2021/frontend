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
                        <form action="#" class="form">
                            <div class="form__field">
                                <label for="vacancyName" class="form__label" hidden>Название компании</label>
                                <input type="text" id="vacancyName" name="vacancyName" class="form__input form__input--fixed" placeholder="Введите название компании">
                            </div>
                            <div class="form__field">
                                <label for="charge" class="form__label" hidden>Обязанности сотрудников</label>
                                <textarea type="text" id="charge" name="charge" class="form__input form__input--fixed form__input--textarea" placeholder="Введите обязанности для сотрудника"></textarea>
                            </div>
                            <div class="form__field">
                                <label for="requirements" class="form__label" hidden>Требования к сотрудникам</label>
                                <textarea type="text" id="requirements" name="requirements" class="form__input form__input--fixed form__input--textarea" placeholder="Введите требования для сотрудника"></textarea>
                            </div>
                            <div class="form__field">
                                <label for="conditions" class="form__label" hidden>Введите условия для сотрудника</label>
                                <textarea type="text" id="conditions" name="conditions" class="form__input form__input--fixed form__input--textarea" placeholder="Введите условия для сотрудника"></textarea>
                            </div>
                            <div class="form__field">
                                <label for="wages" class="form__label" hidden>Заработная плата</label>
                                <input type="number" id="wages" name="wages" class="form__input form__input--fixed form__input--w-70" placeholder="Введите название компании">
                                <label for="type" class="form__label" hidden>Тип занятости</label>
                                <select name="type" id="type" class="form__input form__input--fixed form__input--w-30">
                                    <option value="#" selected disabled>Выберите тип занятости</option>
                                    <option value="#">2</option>
                                    <option value="#">3</option>
                                </select>
                            </div>
                            <div class="form__field">
                                <label for="experience" class="form__label" hidden>Опят работы</label>
                                <select name="experience" id="experience" class="form__input form__input--fixed form__input--w-30">
                                    <option value="#" selected disabled>Выберитие опыт работы</option>
                                    <option value="#">2</option>
                                    <option value="#">3</option>
                                </select>
                                <label for="wages" class="form__label" hidden>Заработная плата</label>
                                <input type="number" id="wages" name="wages" class="form__input form__input--fixed form__input--w-70" placeholder="Введите название компании">
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
    head() {
        return {
            title: 'Новая вакансия'
        }
    }
}
</script>