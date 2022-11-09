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
                      <label for="companyName" class="form__label" hidden>Название компании</label>
                      <input type="text" id="companyName" name="companyName" class="form__input form__input--fixed" placeholder="Введите название компании">
                    <!-- <FormsFormInput 
                      v-for="(item, i) in input_data"
                      :key="i"
                      v-bind:form_input_data="item"
                    /> -->
                  </div>
                  <div class="form__field">
                    <label for="companyDescription" class="form__label" hidden>Описание компании</label>
                    <textarea type="text" id="companyDescription" name="companyDescription" class="form__input form__input--fixed form__input--textarea" placeholder="Введите описание компании"></textarea>
                  </div>
                  <div class="form__field">
                    <label for="companyEmail" class="form__label" hidden>Электронная почта компании</label>
                    <input type="email" id="companyEmail" name="companyEmail" class="form__input form__input--fixed form__input--w-70" placeholder="Введите электронную почту компании">
                    <label for="companyPhoto" class="form__input form__input--fixed form__input--w-30 form__label--file">Фото компании</label>
                    <input type="file" id="companyPhoto" name="companyPhoto" class="form__input form__input--file form__input--fixed form__input--w-30" placeholder="Выберите картинку">
                  </div>
                  <div class="form__field">
                    <label for="companyLogo" class="form__input form__input--fixed form__input--w-30 form__label--file">Логотип компании</label>
                    <input type="file" id="companyLogo" name="companyLogo" class="form__input form__input--file form__input--fixed form__input--w-30" placeholder="Выберите ваш логотип">
                    <label for="companyType" class="form__label" hidden>Тип компании</label>
                    <select name="companyType" id="companyType" class="form__input form__input--fixed form__input--w-70">
                          <option value="#" selected disabled>Выберите тип компании</option>
                          <option value="#">1</option>
                          <option value="#">2</option>
                          <option value="#">3</option>
                    </select>
                  </div>
                  <div class="form__field">
                      <label for="companyAddress" class="form__label" hidden>Адрес компании</label>
                      <input type="text" id="companyAddress" name="companyAddress" class="form__input form__input--fixed" placeholder="Укажите адрес">
                  </div>
                  <div class="form__field">
                    <p class="form__inscription">Вы можете указать свои социальные сети</p>
                  </div>
                  <div class="form__socials">
                    <div class="form__social_card">
                      <a href="#">
                          <img src="~assets/images/vk.svg" alt="vk icon">
                      </a>
                    </div>  
                    <div class="form__social_card">
                      <a href="#">
                          <img src="~assets/images/mail.svg" alt="mail icon">
                      </a>
                    </div>
                    <div class="form__social_card">
                      <a href="#">
                          <img src="~assets/images/google.svg" alt="google icon">
                      </a>
                    </div>
                    <div class="form__social_card">
                      <a href="#">
                          <img src="~assets/images/vk.svg" alt="vk icon">
                      </a>
                    </div>  
                    <div class="form__social_card">
                      <a href="#">
                          <img src="~assets/images/mail.svg" alt="mail icon">
                      </a>
                    </div>
                    <div class="form__social_card">
                      <a href="#">
                          <img src="~assets/images/google.svg" alt="google icon">
                      </a>
                    </div>
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
            }
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
