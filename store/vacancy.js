export const state = () => ({
    currentSkill: "",
    currentType: "",
    currentMinPay: 0,
    currentMaxPay: 0,
    currentExperience: ['nomatter'],
    currentEmployment: []
})

export const getters = {
    filters(state) {
        return {
            skill: state.currentSkill,
            currentExperience: state.currentExperience,
            currentEmployment: state.currentEmployment
        }
    }
}

export const mutations = {

}

export const actions = {

}