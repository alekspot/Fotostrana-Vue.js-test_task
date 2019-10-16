<template>
    <main class="main">
        <p class="notFound" v-if="notFound">Совпадений не найдено</p>
        <div v-else class="content">    
            <template >
                <Card 
                    v-for="film in whatShow" 
                    :key ="film.episode_id"
                    :title="film.title"
                    :subtitle="film.director"
                    :img="film.img"
                />
            </template>
        </div>
        <Button v-if="showBtn">Показать еще</Button>

        <p class="content__wait" v-if="showPreloader">Пожалуста подождите, идет загрузка новых фильмов</p>
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
            return this.$store.state.isLoading
        },

        areFoundFilms(){ //если найдено и строка поиска заполнена
            return this.foundFilms.length > 0 && this.searchText !==''
        },

        notFound(){  //если не найдено и строка поиска заполнена
            return this.foundFilms.length === 0 && this.searchText !==''
        },

        whatShow(){ //определить что показывать: найденные фильмы или все загруженные фильмы
            return this.areFoundFilms ? this.foundFilms : this.allFilms;        
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
   .notFound, .content__wait {
       font-family: Tahoma;
       font-size: 24px;
   }
</style>
