<template>
    <div class="form__social_card">
        <a v-bind:href="social_input_data.socialLink">
            <img v-bind:src="social_input_data.socialIcon" alt="social icon">
        </a>
    </div>
</template>
<script>
export default {
    name: "SocialInput",
    props: {
        social_input_data: {
            socialLink: String,
            socialIcon: String
        }
    },
    data(){
        return {}
    }
}
</script>