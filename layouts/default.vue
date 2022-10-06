<template>
  <div>
    <TheAside />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheAside from '~/components/TheAside';
import TheFooter from '~/components/TheFooter';

export default {
  name: "default.vue",
  components: {
    TheAside, TheFooter
  }
}
</script>
