<template>
    <div class="vacancy__chapter">
        <h3 class="vacancy__subtitle">Ключевые навыки</h3>
        <List :classNames="classNames" :list="skills" />
    </div>
</template>

<script>
import List from '~/components/general/List';

export default {
    props: {
        skills: Array
    },
    components: {
        List
    },
    data() {
        return {
            classNames: {
                parent: 'vacancy__skills',
                children: 'vacancy__skill'
            }
        }
    }
}
</script>