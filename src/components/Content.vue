<template>
    <div>
        <p class="notFound" v-if="notFound">Совпадений не найдено</p>
        <main v-else class="content">    
            <template >
                <Card 
                    v-for="(film,index) in whatShow" 
                    :key="index"
                    :id ="index"
                    :title="film.title"
                    :subtitle="film.director"
                    :img="film.img"
                />
                
            </template>
            
        
        
        
        </main>
        <Button v-if="!searchText">Показать еще</Button>
    </div>
    
</template>
<script>

import Card from './Card.vue';
import Button from './Button.vue';
export default {
    components:{
        Card,
        Button
    },
    computed: {
        allFilms(){ //все фильмы
            return this.$store.getters.films
        },
        foundFilms(){ //найденные фильмы через поиск
            return this.$store.getters.searchFilm
        },
        searchText(){ // текст поиска
            return this.$store.getters.searchText
        },
        areFoundFilms(){ //если найдено и строка поиска заполнена
            let result = this.foundFilms.length > 0 && this.searchText !=='' ? true : false
            return result;
        },
        
        whatShow(){
            let filmsArr  =  this.areFoundFilms ? this.foundFilms : this.allFilms;
            return filmsArr;          
        },
        notFound(){  //если не найдено и строка поиска заполнена
            let result = this.foundFilms.length === 0 && this.searchText !==''  ?  true : false;
            return result;
        }
    }
}
</script>
<style lang="scss">
   
   .content {
       display: grid;
       grid-gap: 18px;
       grid-template-columns: repeat(auto-fit, 258px);
       
       justify-content: center;
   }
   .notFound {
       font-family: Tahoma;
       font-size: 24px;
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
