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
        async getFilms({commit}){ //получить фильмы с картинками
                                
            const films = await api.getFilms(); //загружаем фильмы

            for(const film of films ) {         
                let result = await api.getImg(film.title); //загружаем картинку по названию фильма

                //если картинка есть записываем ее в новое свойсто img или присваевываем картинку "заглушку"
                film.img = result.length > 0 ? result[0].webformatURL : "http://placehold.it/260x85?text=Placeholder"
            }
            
            commit('GET_FILMS', films);
        },
        
        setSearch({commit},payload){ //установить текст для поиска
            commit('SET_SEARCH',payload)
        }
        
    },
    getters:{
        films: state => state.films,
        searchText: state => state.searchText,
        searchFilm: state => {      // возвращает найденные фильмы
            const searchedFilms = state.films.filter(film => film.title.toLowerCase().includes(state.searchText.toLowerCase()));
            return searchedFilms;
        } 
    }
})