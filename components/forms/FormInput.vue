<template>
    <div class="form_input_container">
        <label v-bind:for="form_input_data.labelName" class="form__label" hidden>{{form_input_data.labelText}}</label>
        <input v-bind:type="form_input_data.inputType" v-bind:id="form_input_data.labelName" v-bind:name="form_input_data.labelName" class="form__input form__input--fixed" v-bind:placeholder="form_input_data.inputPlaceholder">
    </div>
   
                  
</template>

<script>
export default {
    name: "FormInput",
    props: {
        form_input_data: {
            // type: Object, 
            labelName: String,
            labelText: String,
            inputType: String,
            inputPlaceholder: String,
            // default() {
            //     return {}
            // }
        }
    },
    data(){
        return {}
    }
}
</script>
