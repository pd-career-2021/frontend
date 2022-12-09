import _ from 'lodash';

export const state = () => ({
    partners: [],
    isLoading: false
})

export const getters = {
    partnersInSliderFormat(state) {
        const changedPartners = state.partners.map(partner => ({
            id: partner.id,
            image: partner.image
        }));

        return _.chunk(changedPartners, 2);
    }
}

export const mutations = {
    setPartners(state, partners) {
        state.partners = partners
    }
}

export const actions = {
    async loadingPartners({commit}) {
        try {
            const partners = await this.$axios.$get('/employers');
            commit('setPartners', partners);
        } catch {

        }
    },

    async getPartner({commit}, partner_id) {
        try {
            const partner = await this.$axios.$get('/employers/' + partner_id);
            return partner;
        } catch {

        }
    }
}