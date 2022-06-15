<template>
  <div class="vacancy__chapter">
        <h3 class="vacancy__subtitle">Описание</h3>
        <ul class="vacancy__descriptions">
            <li v-for="(item, i) in description" :key="i" class="vacancy__description">
                <h4 class="vacancy__caption">{{ item.title }}</h4>
                <ul class="vacancy__list">
                    <li v-for="(text, i) in item.items" :key="i" class="vacancy__text">{{ '- ' + text +  ';' }}</li>
                </ul>
            </li>
        </ul>   
    </div>
</template>

<script>

export default {
    props: {
        description: Array
    }
}
</script>