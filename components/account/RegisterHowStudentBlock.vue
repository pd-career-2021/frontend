<template>
  <div class="enter">
    <div class="line">
      <!--      <a href="#" class="back"><img src='~/assets/images/arrow-leftGray.svg'> Назад</a>-->
      <h1 class="enter__title">Зарегистрироваться как студент</h1>
    </div>


    <form>
      <label for="surname">Фамилия</label>
      <input id="surname" type="text">

      <label for="name">Имя</label>
      <input id="name" type="text">

      <label for="patronymic">Отчество</label>
      <input id="patronymic" type="text">

      <label for="email_student">E-mail</label>
      <input id="email_student" type="email" >

      <label for="password_student">Пароль</label>
      <input id="password_student" type="password" class="password_icon wrong">

      <label for="password_student2">Повторите пароль</label>
      <input id="password_student2" type="password" class="password_icon wrong">
    </form>

    <input href="#" class="enter__btn" value='Зарегестрироваться' type='submit'>

  </div>
</template>

<script>
export default {
  name: 'RegisterHowStudentBlock'
}
</script>

<style scoped>

</style>
