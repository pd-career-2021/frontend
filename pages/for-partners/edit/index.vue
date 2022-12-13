<template>
    <main>
      <section class="section vacancies">
        <div class="section__header">
          <div class="container">
            <div class="section__row">
              <h2 class="section__title">Редактировать информацию о компании</h2>
            </div>
          </div>
        </div>
        <div class="section__content">
          <div class="container">
            <div class="wrapper">
              <form action="#" class="form">
                  <div class="form__field">
                    <FormsFormInput 
                      v-for="(item, i) in input_data.slice(0,1)"
                      :key="i"
                      v-bind:form_input_data="item"
                    />
                  </div>
                  <div class="form__field">
                    <FormsTextareaInput
                      v-for="(item, i) in input_data.slice(1,2)"
                      :key="i"
                      v-bind:form_input_data="item"
                    />
                  </div>
                  <div class="form__field">
                    <FormsFormInput 
                      v-for="(item, i) in input_data.slice(2,3)"
                      :key="i"
                      v-bind:form_input_data="item"
                      class="form__input--w-70"
                    />
                    <FormsFileInput 
                      v-for="(item, i) in input_data.slice(3,4)"
                      :key="i"
                      v-bind:form_input_data="item"
                      class="form__input--w-30"
                    />
                  </div>
                  <div class="form__field">
                    <FormsFileInput 
                      v-for="(item, i) in input_data.slice(4,5)"
                      :key="i"
                      v-bind:form_input_data="item"
                      class="form__input--w-30"
                    />
                    <FormsSelectInput 
                      v-for="(item, i) in input_data.slice(5,6)"
                      :key="i"
                      v-bind:form_input_data="item"
                      class="form__input--w-70"
                    />
                  </div>
                  <div class="form__field">
                      <FormsFormInput 
                      v-for="(item, i) in input_data.slice(6,7)"
                      :key="i"
                      v-bind:form_input_data="item"
                      />
                  </div>
                  <div class="form__field">
                    <p class="form__inscription">Вы можете указать свои социальные сети</p>
                  </div>
                  <div class="form__socials">
                    <FormsSocialInput 
                      v-for="(item, i) in social_data"
                      :key="i"
                      v-bind:social_input_data="item"
                      />
                  </div>
                  <div class="form__footer">
                      <button class="button">Сохранить</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<script>
export default {
    name: "PartnerCompanyEdit",
    data() {
        return {
          input_data: [
            {
              labelName: "companyName",
              labelText: "Название компании",
              inputType: "text",
              inputPlaceholder: "Введите название компании"
            },
            {
              labelName: "companyDescription",
              labelText: "Описание компании",
              inputType: "text",
              inputPlaceholder: "Введите описание компании"
            },
            {
              labelName: "companyEmail",
              labelText: "Электронная почта компании",
              inputType: "email",
              inputPlaceholder: "Введите электронную почту компании"
            },
            {
              labelName: "companyPhoto",
              labelText: "Логотип компании",
              inputType: "file",
              inputPlaceholder: "Выберите картинку"
            },
            {
              labelName: "companyLogo",
              labelText: "Фото компании",
              inputType: "file",
              inputPlaceholder: "Выберите ваш логотип"
            },
            {
              labelName: "companyType",
              labelText: "Тип компании",
              optionText1:"Выберите тип компании",
              optionValue1: "#",
              optionText2: "1",
              optionValue2: "#",
              optionText3: "2",
              optionValue3: "#",
              optionText4: "3",
              optionValue4: "#",
            },
            {
              labelName: "companyAddress",
              labelText: "Адрес компании",
              inputType: "text",
              inputPlaceholder: "Укажите адрес"
            }            
          ],
          social_data:[
            {
              socialLink: "#",
              socialIcon: require('assets/images/vk.svg')
            },
            {
              socialLink: "#",
              socialIcon: require('assets/images/mail.svg')
            },
            {
              socialLink: "#",
              socialIcon: require('assets/images/google.svg')
            },
            {
              socialLink: "#",
              socialIcon: require('assets/images/vk.svg')
            },
            {
              socialLink: "#",
              socialIcon: require('assets/images/mail.svg')
            },
            {
              socialLink: "#",
              socialIcon: require('assets/images/google.svg')
            },
          ]
        };
    },
    methods: {
    },
    head() {
        return {
            title: "Редактирование информации о компании"
        };
    }
}
</script>
