<template>
  <div class="section__content courses">
    <div class="container">
      <div class="wrapper">
        <h2 class="section__chapter">
          <span>Курсы и вебинары</span>
        </h2>
       <HomeCoursesBlockFilters />
        <div class="courses__wrapper">
          <SliderWrapper :length="slides.length" className="courses">
            <SliderItem
              v-for="(slide, i) in slides"
              :key="i"
              :url="slide.url"
              className="courses"
            >
              <div class="courses__preview">
                <img :src="'/images/' + slide.preview.image + '.jpg'" :alt="slide.preview.alt" class="courses__image">
              </div>
              <div class="courses__content">
                <div class="courses__price">
                  <span>{{ slide.price }} руб</span>
                </div>
                <p class="courses__title">{{ slide.title }}</p>
                <p class="courses__author">{{ slide.author }}</p>
                <AppRating className="courses__rating" :rate="slide.rate"></AppRating>
              </div>
            </SliderItem>
          </SliderWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCoursesBlockFilters from '@/components/home/HomeCoursesBlockFilters'
export default {
  name: "HomeCoursesWithFiltersBlock",
    components: { HomeCoursesBlockFilters },
    data() {
    return {
      courses: [
        {
          id: 0,
          preview: {
            image: 'course-1',
            alt: 'Компьютер'
          },
          title: 'Управление технологическим стартапом',
          author: 'Компания/ВУЗ',
          rate: 4.1,
          url: '#',
          price: 32200
        },
        {
          id: 1,
          preview: {
            image: 'course-2',
            alt: 'Автомобиль'
          },
          title: 'Управление командой Формула Студент ',
          author: 'Гоночная команда FDR Moscow Project Etc',
          rate: 4.1,
          url: '#',
          price: 32200
        },
        {
          id: 2,
          preview: {
            image: 'course-3',
            alt: 'Мастер собирает робота'
          },
          title: 'Базовый курс робототехники',
          author: 'Детский технопарк Московского Центра',
          rate: 4.1,
          url: '#',
          price: 144000
        },
        {
          id: 3,
          preview: {
            image: 'course-4',
            alt: 'Беспилотное авто'
          },
          title: 'Система пилотирования беспилотного автомобиля',
          author: 'Преподаватель Иван Харитонов',
          rate: 4.1,
          url: '#',
          price: 32200
        },
        {
          id: 4,
          preview: {
            image: 'course-3',
            alt: 'Мастер собирает робота'
          },
          title: 'Базовый курс робототехники',
          author: 'Детский технопарк Московского Центра',
          rate: 4.1,
          url: '#',
          price: 144000
        },
        {
          id: 5,
          preview: {
            image: 'course-4',
            alt: 'Беспилотное авто'
          },
          title: 'Система пилотирования беспилотного автомобиля',
          author: 'Преподаватель Иван Харитонов',
          rate: 4.1,
          url: '#',
          price: 32200
        },
        {
          id: 6,
          preview: {
            image: 'course-1',
            alt: 'Компьютер'
          },
          title: 'Управление технологическим стартапом',
          author: 'Компания/ВУЗ',
          rate: 4.1,
          url: '#',
          price: 32200
        },
        {
          id: 7,
          preview: {
            image: 'course-2',
            alt: 'Автомобиль'
          },
          title: 'Управление командой Формула Студент ',
          author: 'Гоночная команда FDR Moscow Project Etc',
          rate: 4.1,
          url: '#',
          price: 32200
        },
      ]
    }
  },
  computed: {
    slides() {
      return this.courses.concat(this.courses.slice(0, 4 - this.courses.length % 4));
    }
  }
}
</script>
