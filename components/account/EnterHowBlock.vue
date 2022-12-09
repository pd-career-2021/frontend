<template>
  <div>
    <div class='enter' v-bind:class="{'enter__disappear': !howBlockVisibility}">
      <h1 class="enter__title">Войти</h1>
      <a href='#' class='enter__btn huge' v-on:click="showStudent()">Войти как студент</a>
      <a href='#' class='enter__link' v-on:click="showStudentRegistration()">Ещё нет аккаунта? Зарегистрироваться</a>
      <a href='#' class='enter__btn huge'  v-on:click="showPartner()">Войти как партнёр</a>
      <a href='#' class='enter__link'>Стать партнёром</a>
    
    </div>

    <EnterHowStudentBlock class="enter__disappear" v-bind:class="{'enter__appear': appearedStudent}"></EnterHowStudentBlock>
    <RegisterHowStudentBlock class="enter__disappear" v-bind:class="{'enter__appear': appearedStudentRegistration}"></RegisterHowStudentBlock>
    <EnterHowPartnerBlock  class="enter__disappear" v-bind:class="{'enter__appear': appearedPartner}"></EnterHowPartnerBlock>
  </div>
  

</template>

<script>
import EnterHowStudentBlock from './EnterHowStudentBlock.vue';
import RegisterHowStudentBlock from './RegisterHowStudentBlock.vue';
import EnterHowPartnerBlock from './EnterHowPartnerBlock.vue';
export default {
  name: 'EnterHowBlock',
  components:{
    EnterHowStudentBlock,
    RegisterHowStudentBlock,
    EnterHowPartnerBlock
  },
  data (){
    return {
      appearedStudent:false,
      appearedStudentRegistration: false,
      howBlockVisibility: true,
      appearedPartner:false
    }
  },
  methods:{
    showStudent: function(){
      this.appearedStudent = !this.appearedStudent;
      this.howBlockVisibility = !this.howBlockVisibility;
    },
    showStudentRegistration: function(){
      this.appearedStudentRegistration = !this.appearedStudentRegistration;
      this.howBlockVisibility = !this.howBlockVisibility;
    },
    showPartner: function(){
      this.appearedPartner = !this.appearedPartner;
      this.howBlockVisibility = !this.howBlockVisibility;
    },
  }
}
</script>