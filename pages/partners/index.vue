<template>
<div class="app">
  <PartnersTop />
  <PartnersMain />
  <PartnersFooter />
</div>
</template>


<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.app{
  padding-left: 90px;
  background-color: #1e1e1e;
}

@media (max-width: 600px) {
  .app{
    padding-left: 0;
  }
}
</style>
