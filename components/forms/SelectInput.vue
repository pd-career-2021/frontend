<template>
    <div class="form_input_container">
        <label v-bind:for="form_input_data.labelName" class="form__label" hidden>{{form_input_data.labelText}}</label>
        <select v-bind:name="form_input_data.labelName" v-bind:id="form_input_data.labelName" class="form__input form__input--fixed">
                <option v-bind:value="form_input_data.optionValue1" selected disabled>{{form_input_data.optionText1}}</option>
                <option v-bind:value="form_input_data.optionValue2">{{form_input_data.optionText2}}</option>
                <option v-bind:value="form_input_data.optionValue3">{{form_input_data.optionText3}}</option>
                <option v-bind:value="form_input_data.optionValue4">{{form_input_data.optionText4}}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: "SelectInput",
    props: {
        form_input_data: {
            labelName: String,
            labelText: String,
            optionText1: String,
            optionValue1: String,
            optionText2: String,
            optionValue2: String,
            optionText3: String,
            optionValue3: String
        }
    },
    data(){
        return {}
    }
}
</script>