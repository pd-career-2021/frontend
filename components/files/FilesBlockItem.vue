<template>
    <li class="files__item">
        <a :href="file.url" class="files__link">
            <img src="~/assets/images/file.png" alt="file icon" class="files__image">
            <p class="files__name">{{ file.title }}</p>
            <p class="files__props">
                {{ file.size }}, {{ file.type }}
            </p>
        </a>
    </li>
</template>

<script>
export default {
    name: "FilesBlockItem",
    props: {
        file: {
            url: String,
            title: String
        }
    }
}
</script>