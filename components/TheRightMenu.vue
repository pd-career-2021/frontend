<template>
    <div class="container">
        <a href="#"><img src="/backgrounds/menu.svg" class="menu-icon"></a>
        <a href="#" class="icon-padding"><img src="/backgrounds/search.svg" class="menu-icon"></a>
        <a href="#"><img src="/backgrounds/lk.svg" class="menu-icon"></a>
        <img src="/backgrounds/logo.png" class="menu-icon logo-icon">
    </div>    
</template>

<style>
.container {
    background-color: #434343;
    width: 3rem;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.menu-icon {
    width: 20px;
    height: 20px;
}

.icon-padding {
    padding-top: 195px;
    padding-bottom: 80px;
}

.logo-icon {
    position: absolute;
    bottom:70px;
}


</style>