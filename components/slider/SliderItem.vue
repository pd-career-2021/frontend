<template>
    <li class="slider__item" :class="className + '__item'">
        <a :href="url" class="slider__link" :class="className + '__link'">
            <slot></slot>
        </a>
    </li>
</template>

<script>
export default {
    name: "SliderItem",
    props: {
        className: String,
        url: String
    }
}
</script>
