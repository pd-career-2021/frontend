<template>
    <div class="section__content">
        <div class="container">
            <div class="wrapper">
                <div class="files">
                    <ul class="files__list">
                        <FilesBlockItem
                            v-for="(file, i) in files"
                            :key="i"
                            :file="file"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilesBlock",
    data() {
        return {
            files: [
                {
                    url: '',
                    title: 'Какой -то очень интересный документ, полюбому надо скачать, если не скачаешь, то не всё((((',
                    size: '321.2 КБ',
                    type: 'DOC'

                },
                {
                    url: '',
                    title: 'Это точно не вирус',
                    size: '132.1 МБ',
                    type: 'EXE'
                },
                {
                    url: '',
                    title: 'Какой -то очень интересный документ, полюбому надо скачать, если не скачаешь, то не всё((((',
                    size: '321.2 КБ',
                    type: 'DOC'
                }
            ]
        }
    }
}
</script>