<template>
    <div class="section__content">
        <div class="container">
            <div class="wrapper">
                <nuxt-link :to="to" class="link-line"><slot></slot></nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppLinkLine",
    props: {
        to: String
    }
}
</script>