<template>
    <div class="vacancy__chapter">
        <h3 class="vacancy__subtitle">Ключевые навыки</h3>
        <ul class="vacancy__skills">
            <li v-for="(skill, i) in skills" :key="i" class="vacancy__skill">{{ skill }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        skills: Array
    }
}
</script>