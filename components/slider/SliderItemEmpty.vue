<template>
    <li class="slider__item" :class="className + '__item'">
       <slot></slot>
    </li>
</template>

<script>
export default {
    name: "SliderItem",
    props: {
        className: String
    }
}
</script>
