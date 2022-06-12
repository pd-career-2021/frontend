<template>
<div class="vacancy__company company">
    <p class="company__label">Тип компании</p>
    <a :href="company.link" target="_blank" class="company__logo">
        <img :src="company.logo" :alt="company.name + ' logo'" class="company__image">
    </a>
    <a :href="company.link" target="_blank" class="company__name">{{ company.name }}
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 1L5.6875 12L1 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>
    <p class="company__address">
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 7.2158C15 9.57994 13.2813 11.9312 11.3105 13.8076C10.3527 14.7194 9.39088 15.4669 8.66664 15.9871C8.40967 16.1716 8.18376 16.3268 8 16.4496C7.81625 16.3268 7.59033 16.1716 7.33336 15.9871C6.60912 15.4669 5.64725 14.7194 4.68954 13.8076C2.71869 11.9312 1 9.57994 1 7.2158C1 5.60251 1.70961 4.03158 3.01292 2.85602C4.31964 1.6774 6.11209 1 8 1C9.88791 1 11.6804 1.6774 12.9871 2.85602C14.2904 4.03158 15 5.60251 15 7.2158Z" stroke="#689EEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 9.70126C9.65685 9.70126 11 8.51669 11 7.05546C11 5.59423 9.65685 4.40967 8 4.40967C6.34315 4.40967 5 5.59423 5 7.05546C5 8.51669 6.34315 9.70126 8 9.70126Z" stroke="#689EEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ company.address }}
    </p>
</div>
</template>

<script>
export default {
    props: {
        company: {
            link: String,
            logo: String,
            name: String,
            address: String
        }
    }
}
</script>
