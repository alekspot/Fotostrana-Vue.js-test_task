<template>
    <div class="app">
        <router-view></router-view>
    </div>      
</template>
<script>
import Search from './Search.vue';
import Content from './Content.vue';

import { filmAPI } from '../../api/films'

export default {
    components:{
        Search,
        Content
    },
    computed: {
        allFilms(){
           return this.$store.getters.films
        },
        foundFilm(){
            return this.$store.getters.searchFilm
        },
        whatShow(){
            let filmsArr  =  this.foundFilm.length > 0 ? this.foundFilm : this.allFilms;
            return filmsArr;          
        }
    }
}
</script>
<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        max-width: 810px;
        margin: 0 auto;
        padding: 0 10px;
    }
   .title {
       font-family: Tahoma;
       font-size: 24px
   }
   .btn {
       display: block;
       margin: 35px auto ;
       background: #108CE5;
       color:#fff;
       font-size: 13px;
       font-family: Tahoma;
       padding: 8px 44px;
       border-radius: 4px;
       outline: none;
       border: none;
       cursor: pointer;
   }
</style>
