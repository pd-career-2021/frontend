<template>
	<main>
		<section class="account">
			<div class="account__container">
				<AccountLogin
					v-if="view === 'login'"
                    @change-view="changeView"
                />

				<AccountRegistrationStudent
					v-else-if="view === 'registration-student'"
                    @change-view="changeView"
                />

                <AccountRegistrationPartner
                    v-else-if="view === 'registration-partner'"
                    @change-view="changeView"
                />
			</div>
		</section>
	</main>
</template>

<script>
export default {
	layout: 'authorization',
	name: 'account',
    auth: 'guest',
	data() {
		return {
			view: 'login'
		}
	},
	methods: {
		changeView(viewName) {
			this.view = viewName;
		}
	}
}
</script>

