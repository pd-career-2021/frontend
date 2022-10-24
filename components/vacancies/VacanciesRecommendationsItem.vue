<template>
    <li class="recommendation">
        <a href="#" class="recommendation__item-link">
            <div class="recommendation__content">
                <div class="recommendation__header">
                    <div class="recommendation__preview">
                        <img :src="recommendation.logo" alt="alt logo temp" class="recommendation__image">
                    </div>
                    <div class="recommendation__description">
                        <p class="recommendation__name">{{ recommendation.name }}</p>
                        <p class="recommendation__company">{{ recommendation.company }}</p>
                    </div>
                </div>
                <div class="recommendation__footer">
                    <span class="recommendation__staff">{{ recommendation.staff }}</span>
                    <span class="recommendation__date">{{ recommendation.date }}</span>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    name: "VacanciesRecommendationItem",
    props: {
        recommendation: Object
    }
}
</script>