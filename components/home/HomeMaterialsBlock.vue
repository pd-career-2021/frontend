<template>
    <div class="section__content materials">
        <div class="container">
            <div class="wrapper">
                <h2 class="section__chapter">Обучающие материалы</h2>
                <ul class="materials__list">
                    <li v-for="material in materials" :key="material.id" class="materials__item">
                        <a :href="material.url" class="materials__link">
                            <img :src="'/images/' + material.preview.image + '.jpg'" :alt="material.preview.alt" class="materials__image">
                            <p class="materials__title">{{ material.title }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeMaterialsBlock",
    data() {
        return {
            materials: [
                {
                    id: 0,
                    preview: {
                        image: 'material-1',
                        alt: 'Резюме'
                    },
                    title: 'Как составить резюме',
                    url: '#'
                },
                {
                    id: 1,
                    preview: {
                        image: 'material-2',
                        alt: 'Компания людей за ноутбуком'
                    },
                    title: 'Моя первая стажировка',
                    url: '#'
                },
                {
                    id: 2,
                    preview: {
                        image: 'material-3',
                        alt: 'Мужчина палец вверх'
                    },
                    title: 'Как выбрать вакансию',
                    url: '#'
                },
                {
                    id: 3,
                    preview: {
                        image: 'material-4',
                        alt: 'Собеседование'
                    },
                    title: 'Прохождение собеседования',
                    url: '#'
                }
            ]
        }
    }
}
</script>