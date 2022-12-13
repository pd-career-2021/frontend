<template>
    <div class="form_input_container">
        <label v-bind:for="form_input_data.labelName" class="form__label" hidden>{{form_input_data.labelText}}</label>
        <textarea v-bind:type="form_input_data.inputType" v-bind:id="form_input_data.labelName" v-bind:name="form_input_data.labelName" class="form__input form__input--fixed form__input--textarea" v-bind:placeholder="form_input_data.inputPlaceholder"></textarea>
    </div>
   
                  
</template>

<script>
export default {
    name: "TextareaInput",
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