<template>
    <iframe class="vacancy__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c8fc313cbfa0980ed8b849a39c78a017b6fe5a33a02b57612c6162b0060bc1c&amp;source=constructor" width="814" height="487" frameborder="0"></iframe>
</template>

<script>

export default {
    data() {
        return {
            // Я пытался настроить карты по API. Но пока что не вышла. Попробую еще раз позже
            settings: {
                apiKey: '7cb3c3f6-2764-4ca3-ba87-121bd8921a4e'
            },
            coords: [55.781863, 37.707826]
        }
    }
}
</script>