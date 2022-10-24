<template>
    <aside class="aside">
        <button class="aside__button">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav class="aside__navigation">
            <ul class="aside__menu">
                <li class="aside__item">
                    <button class="aside__link" aria-label="Search button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M0 0h32v32H0z"></path>
                                <path d="M20.848 11.348a4.848 4.848 0 1 1-9.696 0 4.848 4.848 0 0 1 9.696 0zm-1.622 7.807h-6.451a7.275 7.275 0 0 0-7.276 7.274h21a7.274 7.274 0 0 0-7.273-7.274z" stroke="currentColor"></path>
                            </g>
                        </svg>
                    </nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="aside__logo">
            <img src="/backgrounds/mospolytech-logo-white.png" alt="Mospolytech logo" class="aside__image">
        </div>
    </aside>
</template>

<script>
export default {

}
</script>
