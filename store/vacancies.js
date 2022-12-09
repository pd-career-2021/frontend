export const state = () => ({
    vacancies: [],
    newVacancy: {
        title: 'Title',
        short_desc: '',
        description: {
            responsibilities: '',
            requirements: '',
            conditions: ''
        },
        desc: '',
        salary: null,
        level: '',
        type: 1,
        skills: '',
        employer_id: 8
    },
    isLoading: true
})

export const getters = {

}

export const mutations = {
    setVacancies(state, vacancies) {
        state.vacancies = vacancies;
    },
    setCurrentTitle(state, title) {
        state.newVacancy.title = title;
    },
    setCurrentSalary(state, salary) {
        state.newVacancy.salary = salary;
    },
    setCurrentSkills(state, skills) {
        state.newVacancy.skills = skills;
    },
    setCurrentDescription(state) {
        state.newVacancy.desc = '[responsibilities]:' + state.newVacancy.description.responsibilities
            + ' [requirements]:' + state.newVacancy.description.requirements
            + ' [conditions]:' + state.newVacancy.description.conditions;
    },
    setCurrentConditions(state, conditions) {
        state.newVacancy.description.conditions = conditions;
    },
    setCurrentRequirements(state, requirements) {
        state.newVacancy.description.requirements = requirements;
    },
    setCurrentResponsibilities(state, responsibilities) {
        state.newVacancy.description.responsibilities = responsibilities;
    },
    setCurrentType(state, type) {
        state.newVacancy.type = type;
    }
}

export const actions = {
    async loadingVacancies({commit}) {
        try {
            const vacancies = await this.$axios.$get('/vacancies');

            commit('setVacancies', vacancies);
        } catch {

        }
    },

    async loadingPartnerVacancies({commit}, partner_id) {
        try {
            let vacancies = await this.$axios.$get('/vacancies');

            vacancies = vacancies.filter(vacancy => vacancy.employer_id === partner_id);

            return vacancies;
        } catch(e) {

        }
    },

    async createVacancy({commit, state}) {
        try {
            commit('setCurrentDescription');

            const vacancyData = {
                title: state.newVacancy.title,
                short_desc: '',
                desc: state.newVacancy.desc,
                link: '',
                salary: state.newVacancy.salary,
                workplace: '',
                level: '',
                vacancy_type_id: state.newVacancy.type,
                skills: state.newVacancy.skills,
                employer_id: 8
            }

            await this.$axios.$post('/vacancies');
        } catch(e) {

        }
    }
}