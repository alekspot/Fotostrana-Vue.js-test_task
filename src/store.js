import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import api from '../api/films';

const LOAD_ALL_FILMS = 'GET_FILMS';
const SET_SEARCH ='SET_SEARCH';
const LOAD_MORE_FILMS = 'LOAD_MORE_FILMS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const store = new Vuex.Store({
    state:{
        showAll: false, //установить загрузку сразу все фильмов или по частям.
        countFilms: 7,  // кол-во фильмов на сервере (установлено вручную,а обычно получаем при первом запросе к api)
        countForLoading:3, // сколько фильмов загрузить
        films: [], // загруженные фильмы
        searchText: '', //текст поиска
        isLoading: false // загружаются ли фильмы?
    },
    mutations:{
        [LOAD_ALL_FILMS] (state,payload){
            state.films = payload
        },
        [SET_SEARCH] (state, payload){
            state.searchText = payload;
        },
        [LOAD_MORE_FILMS] (state, payload){
            state.films = [...state.films, ...payload]
        },
        [TOGGLE_LOADING] (state) {
            state.isLoading = !state.isLoading;
        }
    },
    actions:{
        async getFilms({commit}){ //получить фильмы  

            const films = await api.getFilms();
            commit(LOAD_ALL_FILMS, films);
        },
        async getNewFilms({commit, state}){ //подгрузить новые фильмы( но всегда будет подгружаться только 3 первых фильма сначала

            commit(TOGGLE_LOADING);
            const newFilms = await api.getNewFilms(state.countForLoading, state.films.length, state.countFilms);
            commit(LOAD_MORE_FILMS, newFilms);
            commit(TOGGLE_LOADING);
        },
        
        setSearch({commit},payload){ //установить текст для поиска
            commit(SET_SEARCH, payload)
        }    
    },
    getters:{
        films: state => state.films,
        allFilmsIsLoaded: state => state.countFilms === state.films.length,
        searchText: state => state.searchText,
        isLoading: state => state.isLoading,
        // Поиск будет происходить по уже загруженным и новым фильмам, т.к все фильмы будут храниться в одном масиве
        searchFilm: state => state.films.filter(film => film.title.toLowerCase().includes(state.searchText.toLowerCase()))
    }
})