<template>
    <div class="section__content events">
        <div class="container">
            <div class="wrapper">
                <h2 class="section__chapter">Ближайшие мероприятия</h2>
                <div class="events__wrapper">
                    <SliderWrapper :length="events.length">
                        <SliderItem
                            v-for="(event, i) in eventsSlides"
                            :key="i"
                            :url="event.url"
                            className="events"
                        >
                            <p class="events__date">{{ event.date }}</p>
                            <img :src="'/images/' + event.preview.image + '.jpg'" :alt="event.preview.alt" class="events__image">
                            <p class="events__title">{{ event.title }}</p>
                        </SliderItem>
                    </SliderWrapper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeEventsBlock",
    data() {
        return {
            events: [
                {
                    id: 0,
                    preview: {
                        image: 'event-1',
                        alt: 'Танцовщица'
                    },
                    title: 'Выступление FreeDance Family',
                    url: '#',
                    date: '24'
                },
                {
                    id: 1,
                    preview: {
                        image: 'event-2',
                        alt: 'Баскетболисты'
                    },
                    title: 'Турнир по баскетболу 3 на 3 «ВЕСНА 3х3»',
                    url: '#',
                    date: '24'
                },
                {
                    id: 2,
                    preview: {
                        image: 'event-3',
                        alt: 'Пайка'
                    },
                    title: 'Московская предпрофессиональная олимпиада',
                    url: '#',
                    date: '24'
                },
                {
                    id: 3,
                    preview: {
                        image: 'event-4',
                        alt: 'Женщины занимаются спортом'
                    },
                    title: 'Открытие Всероссийского Фестиваля студенческого спорта среди жен',
                    url: '#',
                    date: '24'
                },
                {
                    id: 0,
                    preview: {
                        image: 'event-1',
                        alt: 'Танцовщица'
                    },
                    title: 'Выступление FreeDance Family',
                    url: '#',
                    date: '24'
                },
                {
                    id: 1,
                    preview: {
                        image: 'event-2',
                        alt: 'Баскетболисты'
                    },
                    title: 'Турнир по баскетболу 3 на 3 «ВЕСНА 3х3»',
                    url: '#',
                    date: '24'
                },
                {
                    id: 2,
                    preview: {
                        image: 'event-3',
                        alt: 'Пайка'
                    },
                    title: 'Московская предпрофессиональная олимпиада',
                    url: '#',
                    date: '24'
                }
            ]
        }
    },
    computed: {
        eventsSlides() {
            return this.events.concat(this.events.slice(0, 4 - this.events.length % 4));
        }
    }
}
</script>