<template>
    <div class="block bg-white">
        <div class="color bg-red"></div>
        <div class="block-body">
            <div class="d-flex m-sm">
                <img src="/backgrounds/glogo.png" width="50px" height="50px" />
                <div class="m-sm">
                    <p class="standartBold dark">Interaction designer, <br> Geo Automotive</p>
                    <p class="small dark-blue">Google</p>
                </div>
            </div>
            <div class="d-flex justify-between m-sm">
                <p class="small dark">Designer. UI/UX</p>
                <p class="extraSmall green-gray">1 неделю назад</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.block {
    width: 29%;
    height: auto;
    margin: 0 3vw 3vh 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    display: flex;
}

.block-body {
    padding-right: 1rem;
    padding-top: 0.5rem;
    width: 100%;
}

.d-flex {
    display: flex;
}

.justify-between {
    justify-content: space-between;
}

.color {
    width: 10%;
    border-radius: 16px 0 0 16px;
}

.m-sm {
    margin-left: 1rem;
}
</style>