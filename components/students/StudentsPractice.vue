<template>
    <div class="section__content section__content--students section__content--background">
        <div class="container">
            <div class="wrapper">
                <h2 class="section__chapter">Наших партнеров<br>более 350</h2>
                <AppSectionMenu :blocks="practices" className="students__practice" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudentsPractice",
    data() {
        return {
            practices: [
                {
                    title: 'Найти практику',
                    links: [
                        {
                            title: 'Найти практику',
                            url: '#'
                        },
                        {
                            title: 'Участвовать в мероприятиях',
                            url: '#'
                        },
                        {
                            title: 'Какой-то текст',
                            url: '#'
                        },
                        {
                            title: 'Какой-то текст',
                            url: '#'
                        }
                    ]
                },
                {
                    title: 'Найти практику',
                    links: [
                        {
                            title: 'Курсы и карьерные консультации',
                            url: '#'
                        },
                        {
                            title: 'Конструктор резюме',
                            url: '#'
                        },
                        {
                            title: 'Недели карьеры и ярмарки вакансий',
                            url: '#'
                        },
                        {
                            title: 'Какой-то текст',
                            url: '#'
                        }
                    ]
                }
            ]
        }
    }
}
</script>