<template>
  <div class="enter">
    <div class="line">
<!--      <a href="#" class="back"><img src='~/assets/images/arrow-leftGray.svg'> Назад</a>-->
      <h1 class="enter__title">Войти как студент</h1>
    </div>


    <form>
      <label for="email">E-mail</label>
      <input id="email" type="email" class="right">

      <label for="password">Пароль</label>
      <input id="password" type="password" class="password_icon wrong">
    </form>

    <input href="#" class="enter__btn" value='Войти' type='submit'>
    <a href="#" class="enter__link">Ещё нет аккаунта? Зарегистрироваться</a>

  </div>
</template>

<script>
export default {
  name: 'EnterHowStudentBlock'
}
</script>

<style scoped>

</style>
