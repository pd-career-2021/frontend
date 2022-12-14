<template>
    <main>
        <section class="section account">
            <div class="section__content">
                <div class="container">
                    <div class="account__wrapper">
                        <div class="block__image-profile">
                            <div class="image-profile">
                                 <img class="icon__user" src="~/assets/images/account.png" alt="#">
                                 <button><img class="icon__profile" src="~/assets/images/icon_edit_photo.png" alt="#"></button>
                            </div>
                            <button type="submit" class="account__button account__button--fixed form__button button">Редактировать</button>
                        </div>
                        <div class="block__contact">
                             <div class="contact__information">
                                   <p class="user-name">Иванов Иван Александрович</p>
                                   <p class="user-phone">+7900-000-00-00</p>
                                   <a class="user-mail" href="#">ivanov_ivan2014@mail.ru</a>
                                   <p class="user-direction">Транспортный факультет</p>
                                   <p class="user-sex">Пол: Мужской</p>
                             </div>
                             <p class="title-edit-password">Сменить пароль</p>
                             <div class="block__form-password">
                                  <form action="" class="account__form form">
                                    <div class="form__field form__field--vertical form__field--full">
                                        <label for="password" class="form__label">Старый пароль</label> 
                                        <input required="required" id="password" type="password" name="password" class="account__input form__input">
                                    </div>
                                    <div class="form__field form__field--vertical form__field--full">
                                        <label for="new-password" class="form__label">Новый пароль</label> 
                                        <input required="required" id="password" type="password" name="new-password" class="account__input form__input">
                                    </div>
                                    <div class="form__field form__field--vertical form__field--full">
                                        <label for="repeat-password" class="form__label">Повторите пароль</label> 
                                        <input required="required" id="password" type="password" name="repeat-password" class="account__input form__input">
                                    </div>
                                    <button id="edit-password" type="submit" class="account__button account__button--fixed form__button button">Сменить пароль</button>
                                  </form>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'AccountPage',
    // middleware: 'auth'
}
</script>

<style scoped>
.section__content{
    width: 100%;
}
.account{
    justify-content: space-between;
    align-items: flex-start;
    background: white;
}

.account__wrapper{
    width: 100%;
    display: flex;
    grid-gap: 70px;
    gap: 70px;
    align-items: flex-start;
    justify-content: space-between;
}
.block__image-profile{
    width: 40%;
}
.block__contact{
    width: 100%;
}
.image-profile{
    width: 256px;
    height: 256px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}
.image-profile .icon__user{
    width: 100%;
}
.account__button{
    width: 256px;
    height: 52px;
    border-radius: 12px;
}

.icon__profile{
    right: 20px;
    bottom: 0px;
    position:absolute;
    width: 64px;
    height: 64px;
}

.icon__profile:hover {
    transform: scale(1.1);
    transition: 1.2s;
}
.icon__profile:not(hover) {
    transition: 1.2s;
}

.contact__information{
    position: relative;
    width: 100%;
    height: 320px;
    padding: 30px 40px;
    background-color: #F7F7F7;
    border-radius: 12px;
}
.block__form-password{
    
    position: relative;
    width: 100%;
    height: 512px;
    padding: 30px 40px;
    background-color: #F7F7F7;
    border-radius: 12px;
}
.user-name{
    margin-bottom: 30px;
    color: #1E1E1E;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
}
.user-phone, .user-mail{
    word-break: break-word;
    color: #B8B5BC;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 30px;
}
.user-direction{
    margin-top: 30px;
    color: #B8B5BC;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
}
.user-sex{
    right: 40px;
    bottom: 60px;
    position:absolute;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #B8B5BC;
}
.title-edit-password{
    padding-left:40px;
    margin-bottom: 5px;
    margin-top: 90px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #1E1E1E;
}

#edit-password{
    border-radius: 0px;
}
.account__input{
    width: 70%;
}

@media (max-width: 1148px){
      .account__wrapper{
        flex-direction: column;
        align-items: center;
      }
    .account__input{
        width: 100%;
    }
}

@media (max-width: 738px){
    .user-sex{
        bottom: 10px;
    }
    .block__image-profile{
        width: 100%;
    }
      .contact__information{
        height: 400px;
      }
}

@media (max-width: 640px){
    .block__form-password{
        height: 600px;
    }
    .user-phone, .user-mail, .user-direction{
           font-size: 30px;
    }
    .account__button{
        font-size: 20px;
    }
}

@media (max-width: 490px){
    .contact__information{
        height: 520px;
    }
}
</style>