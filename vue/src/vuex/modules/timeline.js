import giphy from '../../api/giphy'
import * as types from '../mutation-types'

const state = {
    query: '',
    gifs: []
}

const getters = {
    gifs(state) {
        return state.gifs
    }
}

const actions = {
    onQueryChanged({ commit }, query) {
        commit(types.SET_QUERY, query)
    },

    fetchGifs({ commit, state }) {
        return giphy.fetchGifs(state.query).then(json => {
            commit(types.SET_GIFS, json)
        })
    }
}

const mutations = {
    [types.SET_QUERY](state, query) {
        state.query = query
    },
    [types.SET_GIFS](state, json) {
        state.gifs = json.data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}