import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import api from '../api/films';

export const store = new Vuex.Store({
    state:{
        films: [],
        searchText: ''
    },
    mutations:{
        'GET_FILMS' (state,payload){
            state.films = payload
        },
        'SET_SEARCH' (state, payload){
            state.searchText = payload;
        }
    },
    actions:{
        async getFilms({commit}){
            const films = await api.getFilms()
            commit('GET_FILMS', films);
        },
        setSearch({commit},payload){
            commit('SET_SEARCH',payload)
        }
        
    },
    getters:{
        films: state => state.films,
        searchText: state => state.searchText,
        searchFilm: state => {
            let searchedFilms = state.films.filter(film => film.title.includes(state.searchText));
            return searchedFilms;
        } 
    }
})