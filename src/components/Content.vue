<template>
    <main>
        <p class="notFound" v-if="notFound">Совпадений не найдено</p>
        <div v-else class="content">    
            <template >
                <Card 
                    v-for="(film,index) in whatShow" 
                    :key="index"
                    :title="film.title"
                    :subtitle="film.director"
                    :img="film.img"
                />
                
            </template>
        </div>
        <Button v-if="showBtn">Показать еще</Button>
        <p v-if="showPreloader">Пожалуста подождите, идет загрузка новых фильмов</p>
    </main>
    
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

        showBtn(){ // показывать кнопку если нет текста в поисковой строке или не все фильмы еще были загружены 
            return !this.$store.getters.searchText && !this.$store.getters.allFilmsIsLoaded
        },
        showPreloader(){
            return this.$store.state.
        }
        areFoundFilms(){ //если найдено и строка поиска заполнена
            let result = this.foundFilms.length > 0 && this.searchText !=='' ? true : false
            return result;
        },

        notFound(){  //если не найдено и строка поиска заполнена
            let result = this.foundFilms.length === 0 && this.searchText !==''  ?  true : false;
            return result;
        },

        whatShow(){ //определяет что показывать: найденные фильмы или все загруженные фильмы
            let filmsArr  =  this.areFoundFilms ? this.foundFilms : this.allFilms;
            return filmsArr;          
        },
        
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
</style>
