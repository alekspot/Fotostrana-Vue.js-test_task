import Vue from 'vue';
import App from './components/App.vue'
import './App.scss';
import {store} from './store';
import 'babel-polyfill';
import router from "./router";

window.addEventListener('load',()=>{
    new Vue({
        el:'#app',
        store,
        router,
        render: h=>h(App),
        methods:{
            init(){
                store.dispatch('getFilms')
            }
        },
        mounted(){
            this.init();
        }     
    })
})
