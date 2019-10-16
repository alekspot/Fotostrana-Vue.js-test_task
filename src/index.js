import Vue from 'vue';
import App from './components/App.vue'
import {store} from './store';
import 'babel-polyfill';


window.addEventListener('load',()=>{
    new Vue({
        el:'#app',
        store,
        render: h=>h(App),
        methods:{
            init(){
                if(store.state.showAll) {
                    store.dispatch('getFilms');
                } else {
                    store.dispatch('getNewFilms');
                }
                
                
            }
        },
        mounted(){
            this.init();
        }     
    })
})
