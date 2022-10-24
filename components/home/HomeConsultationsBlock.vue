<template>
    <div class="section__content consultations">
        <div class="container">
            <div class="wrapper">
                <h2 class="section__chapter">Консультации</h2>
                <div class="consultations__wrapper">
                    <p class="consultations__subtitle">Выбери формат запроса и наш консультант с тобой свяжется</p>
                    <ul class="consultations__list">
                        <li
                            @click="setCurrentConsultation(i)"
                            v-for="(consultation, i) in consultations"
                            :key="i"
                            class="consultations__item"
                            :class="{'active': i == currentConsultation}"
                        >
                            {{ consultation }}
                        </li>
                    </ul>
                    <div class="consultations__actions">
                        <button class="consultations__button button">Запланировать</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeConsultationsBlock",
    data() {
        return {
            currentConsultation: -1,
            consultations: [
                'Улучшение резюме', 'Обзор портфолио', 'Подготовка к собеседованию', 'Подбор курса', 'Определиться с вакансией',
                'Построить карьерную карту', 'Ещё одна услуга', 'ну последняя услуга', 'ну туперь уж точно последняя услуга', 'Супер мега ультра ласт услуга'
            ]
        }
    },
    methods: {
        setCurrentConsultation(index) {
            this.currentConsultation = index;
        }
    }
}
</script>