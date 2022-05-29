<template>
<div class="vacancy__excerpt">
    <h2 class="vacancy__name">{{ vacancy.name }}</h2>
    <p class="vacancy__pay">От {{ vacancy.pay }} руб</p>
    <List :classNames="classNames" :list="vacancy.conditions" />
    <div class="vacancy__actions">
        <a href="#" class="vacancy__action button">Откликнуться</a>
        <button @click.prevent @click="vacancy.isFavorite = !vacancy.isFavorite" class="vacancy__action button button--icon">
            <svg v-if="vacancy.isFavorite" width="31" height="29" viewBox="0 0 31 29" fill="#fbd37d" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 2L19.6715 10.2282L29 11.5557L22.25 17.9569L23.843 27L15.5 22.7282L7.157 27L8.75 17.9569L2 11.5557L11.3285 10.2282L15.5 2Z" stroke="#fbd37d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 2L19.6715 10.2282L29 11.5557L22.25 17.9569L23.843 27L15.5 22.7282L7.157 27L8.75 17.9569L2 11.5557L11.3285 10.2282L15.5 2Z" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</div>
</template>

<script>
import List from '~/components/general/List';

export default {
    components: {
        List
    },
    props: {
        vacancy: {
            name: String,
            pay: String,
            conditions: Array,
            isFavorite: Boolean
        }
    },
    data() {
        return {
            classNames: {
                parent: 'vacancy__conditions',
                children: 'vacancy__condition'
            }
        }
    }
}
</script>

<style scoped>
    .vacancy__name {
        margin-bottom: 20px;
    }

    .vacancy__pay {
        margin-bottom: 20px;
        color: #9aa199;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
    }

    .vacancy__conditions {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 35px;
    }

    .vacancy__actions {
        display: flex;
        gap: 25px;
    }
</style>