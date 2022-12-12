<template>
    <div class="section-filters">
        <h2 class="section-filters__content">
            <span class="section-filters__title">Фильтры</span>
        </h2>
        <select id="section-filters__select" class="section-filters__select first">
            <option value=”Companies”>Компания</option>
        </select>
        <select id="section-filters__select" class="section-filters__select second">
            <option value=”region” >Область</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "PartnersEmployersFilters",
}
</script>

<style lang="scss">
@use './assets/scss/utilities/variables';

.section-filters{
    display: flex;
    align-items: baseline;
    justify-content: initial;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }
}

.section-filters{
    &__content{
        font-weight: 700;
        color: variables.color('dark');
        margin-top: 30px;
        margin-bottom: 50px;

        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    }
    &__title{
        font-size: 36px;
        margin-right: 64px;
        @media (max-width: 768px) {
            margin-right: 0px;
        }
    }
    &__select{
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: variables.color('gray');
        border-style: none;
        background: transparent;
        margin-right: 78px;
        box-sizing: border-box;
        appearance: none;
        overflow: hidden;
        width: 150px;
        background: url('./assets/images/rect.png') no-repeat right;
        @media (max-width: 768px) {
            margin-right: 0px;
        }
    }
    .second{
    width: 130px;
    }
    .first{
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    }
}

</style>