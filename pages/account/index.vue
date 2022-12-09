<template>
  <main>
    <section class="account">
      <div class="account__container">
        <div class="form">
          <EnterHowBlock />
<!--          <EnterHowStudentBlock />-->
<!--          <EnterHowPartnerBlock />-->
<!--          <RegisterHowStudentBlock />-->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import EnterHowBlock from '../../components/account/EnterHowBlock'
import EnterHowStudentBlock from '../../components/account/EnterHowStudentBlock'
import EnterHowPartnerBlock from '../../components/account/EnterHowPartnerBlock'
import RegisterHowStudentBlock from '../../components/account/RegisterHowStudentBlock'
export default {
  name: 'account',
  components: { RegisterHowStudentBlock, EnterHowPartnerBlock, EnterHowStudentBlock, EnterHowBlock }
}
</script>

<style scoped>

</style>
