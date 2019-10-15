import Vue from 'vue';
import App from './components/App.vue'
import './App.scss';
import {store} from './store';
import 'babel-polyfill';


window.addEventListener('load',()=>{
    new Vue({
        el:'#app',
        store,
        render: h=>h(App),
        methods:{
            call(){
                store.dispatch('getFilms')
            }
        },
        mounted(){
            this.call();
        }     
    })
})
