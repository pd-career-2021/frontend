<template>
    <div class="section__content section__content--partners">
        <div class="container">
            <div class="wrapper">
                <AppSectionMenu :blocks="actions" className="partners__actions" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PartnersAboutActionsBlock",
    data() {
        return {
            actions: [
                {
                    title: 'Разместить объявление',
                    links: [
                        {
                            title: 'Разместить вакансию',
                            url: '#'
                        },
                        {
                            title: 'Разместить стажировку',
                            url: '#'
                        }
                    ]
                },
                {
                    title: 'Подать заявку',
                    links: [
                        {
                            title: 'Ярмарка вакансий',
                            url: '#'
                        },
                        {
                            title: 'Проведение мероприятий',
                            url: '#'
                        },
                        {
                            title: 'Карьерный марафон',
                            url: '#'
                        },
                        {
                            title: 'День открытых дверей Университета',
                            url: '#'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>