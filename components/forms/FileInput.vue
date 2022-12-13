<template>
    <div class="form_input_container">
        <label v-bind:for="form_input_data.labelName" class="form__input form__input--fixed form__label--file">{{form_input_data.labelText}}</label>
        <input v-bind:type="form_input_data.inputType" v-bind:id="form_input_data.labelName" v-bind:name="form_input_data.labelName" class="form__input--file" v-bind:placeholder="form_input_data.inputPlaceholder">

        <!-- <label 
            for="companyPhoto" 
            class="form__input form__input--fixed form__input--w-30 form__label--file"
            >Фото компании</label>
        <input type="file" id="companyPhoto" name="companyPhoto" 
        class="form__input form__input--file form__input--fixed form__input--w-30" 
        placeholder="Выберите картинку"> -->
    </div>
   
                  
</template>

<script>
export default {
    name: "FileInput",
    props: {
        form_input_data: {
            labelName: String,
            labelText: String,
            inputType: String,
            inputPlaceholder: String
        }
    },
    data(){
        return {}
    }
}
</script>