<template>
    <li class="recommendation">
        <a href="#" class="recommendation__item-link">
            <div class="recommendation__content">
                <div class="recommendation__header">
                    <div class="recommendation__preview">
                        <img :src="recommendation.image" alt="alt logo temp" class="recommendation__image">
                    </div>
                    <div class="recommendation__description">
                        <p class="recommendation__name">{{ recommendation.title }}</p>
                        <p class="recommendation__company">{{ recommendation.company_name }}</p>
                    </div>
                </div>
                <div class="recommendation__footer">
<!--                    <span class="recommendation__staff">{{ recommendation.staff }}</span>-->
                    <span class="recommendation__date">{{ recommendation.created_at }}</span>
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