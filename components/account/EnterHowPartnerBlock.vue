<template>
  <div class="enter">
    <div class="line">
      <!--      <a href="#" class="back"><img src='~/assets/images/arrow-leftGray.svg'> Назад</a>-->
      <h1 class="enter__title">Войти как партнёр</h1>
    </div>


    <form>
      <label for="email_staff">E-mail сотрудника</label>
      <input id="email_staff" type="email" class="right">

      <label for="org_name">Название организации</label>
      <input id="org_name" type="text">

      <label for="password_staff">Пароль</label>
      <input id="password_staff" type="password" class="password_icon wrong">
    </form>

    <input href="#" class="enter__btn" value='Войти' type='submit'>
    <a href="#" class="enter__link">Стать партнёром</a>

  </div>
</template>

<script>
export default {
  name: 'EnterHowPartnerBlock'
}
</script>

<style scoped>

</style>
