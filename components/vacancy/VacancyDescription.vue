<template>
  <div class="vacancy__chapter">
        <h3 class="vacancy__subtitle">Описание</h3>
        <ul class="vacancy__descriptions">
            <li v-for="item in description" :key="item.id" class="vacancy__description">
                <h4 class="vacancy__caption">{{ item.title }}</h4>
                <List :classNames="classNames" :list="item.items"/>
            </li>
        </ul>   
    </div>
</template>

<script>
import List from '~/components/general/List';

export default {
    components: {
        List
    },
    props: {
        description: Array
    },
    data() {
        return {
            classNames: {
                parent: 'vacancy__list',
                children: 'vacancy__text'
            }
        }
    }
}
</script>

<style scoped>
    .vacancy__subtitle--light {
        color: #fff;
    }

    .vacancy__chapter {
        margin-bottom: 45px;
    }
    .vacancy:last-child {
        margin-bottom: 0;
    }

    .vacancy__caption {
        font-weight: 600;
    }

    .vacancy__description {
        margin-top: 15px;
        margin-left: 45px;
        font-size: 24px;
        line-height: 29px;
        color: #1e1e1e;
    }
</style>