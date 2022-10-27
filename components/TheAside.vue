<template>
  <div>
    <aside class="aside" id="aside-close">
      <button
        class="aside__button"
        id="aside-button"
        title="Открыть меню"
        aria-label="Открыть меню"
        @click="changeAside"
      >
<svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11H29M2 2H29M2 20H29" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
      <nav class="aside__navigation">
        <ul class="aside__menu">
          <li class="aside__item">
            <button class="aside__link" aria-label="Search button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h32v32H0z"></path>
                  <g stroke="currentColor" transform="rotate(-45 18.036 2.636)">
                    <path d="M7.423 15.5h1v5.923h-1z"></path>
                    <circle cx="7.5" cy="7.5" r="7.5"></circle>
                  </g>
                </g>
              </svg>
            </button>
          </li>
          <li class="aside__item">
            <nuxt-link to="/account" class="aside__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h32v32H0z"></path>
                  <path
                    d="M20.848 11.348a4.848 4.848 0 1 1-9.696 0 4.848 4.848 0 0 1 9.696 0zm-1.622 7.807h-6.451a7.275 7.275 0 0 0-7.276 7.274h21a7.274 7.274 0 0 0-7.273-7.274z"
                    stroke="currentColor"
                  ></path>
                </g>
              </svg>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="aside__logo">
        <nuxt-link to="/" class="aside--open__link"
              >
        <img
          src="/backgrounds/mospolytech-logo-white.png"
          alt="Mospolytech logo"
          class="aside__image"
        />
        </nuxt-link>
      </div>
    </aside>
    <aside
      class="aside--open"
      id="aside-open"
      :class="[open ? 'opening' : 'closure']"
    >
      <button
        class="aside__button"
        id="aside-close"
        title="Закрыть меню"
        aria-label="Закрыть меню"
        @click="changeAside"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 2L2 26"
            stroke="#F7F7F7"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 2L26 26"
            stroke="#F7F7F7"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <nav class="aside__navigation">
        <ul class="aside--open__menu">
          <li class="aside__item">
            <nuxt-link to="/for-students" class="aside--open__link"
              >Студентам</nuxt-link
            >
          </li>
          <li class="aside__item">
            <nuxt-link to="/for-partners" class="aside--open__link"
              >Партнёрам</nuxt-link
            >
          </li>
          <li class="aside__item">
            <nuxt-link to="/vacancies" class="aside--open__link"
              >Вакансии</nuxt-link
            >
          </li>
          <li class="aside__item">
            <nuxt-link to="/courses" class="aside--open__link"
              >Курсы и консультации</nuxt-link
            >
          </li>

          <li class="aside__item">
            <nuxt-link to="/events" class="aside--open__link"
              >Мероприятия</nuxt-link
            >
          </li>

          <li class="aside__item">
            <nuxt-link to="/partners" class="aside--open__link"
              >Партнёры и работодатели</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    changeAside() {
      this.open = !this.open
    },
  },
  watch: {
    async "$route"() {
      this.open = false;
    },
  },
}
</script>
<style scoped>
.closure {
  visibility: hidden;
  transform: translateX(-110vw);
  will-change: transform;
  transition: transform 0.5s ease-out, visibility 0s linear 0.5s;
}

.opening {
  visibility: visible;
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.5s ease-out;
}
</style>
