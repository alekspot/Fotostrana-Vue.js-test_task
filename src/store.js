import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import api from '../api/films';

export const store = new Vuex.Store({
    state:{
        showAll: false,
        countFilms: 7,
        loadedCount:0,
        countForLoading:3,
        films: [],
        searchText: '',
        isLoading: false
    },
    mutations:{
        'GET_FILMS' (state,payload){
            state.films = payload
        },
        'SET_SEARCH' (state, payload){
            state.searchText = payload;
        },
        'GET_NEW_FILMS' (state, payload){
            state.films = [...state.films, ...payload]
        },
        'SET_LOADED_COUNT' (state, payload) {
            state.loadedCount = state.loadedCount + payload;
        },
        'SET_IS_LOADING' (state) {
            state.isLoading = !state.isLoading;
        }
    },
    actions:{
        async getFilms({commit}){ //получить фильмы 
                                
            const films = await api.getFilms();
            commit('GET_FILMS', films);
        },
        async getNewFilms({commit, state}){ //подгрузить новые фильмы( но всегда будет подгружаться только 3 первых фильма сначала
            commit('SET_IS_LOADING');
            const newFilms = await api.getNewFilms(state.countForLoading, state.loadedCount, state.countFilms);
            commit('GET_NEW_FILMS', newFilms);
            commit('SET_LOADED_COUNT', newFilms.length);
            commit('SET_IS_LOADING');
        },
        
        setSearch({commit},payload){ //установить текст для поиска
            commit('SET_SEARCH',payload)
        }
        
    },
    getters:{
        films: state => state.films,
        allFilmsIsLoaded: state => state.countFilms === state.loadedCount,
        searchText: state => state.searchText,
        isLoading: s
        // Поиск будет происходить по уже загруженным и новым фильмам, т.к все фильмы будут храниться в одном масиве
        searchFilm: state => state.films.filter(film => film.title.toLowerCase().includes(state.searchText.toLowerCase()))
    }
})