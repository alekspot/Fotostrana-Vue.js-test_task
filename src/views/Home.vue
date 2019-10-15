<template>
    <div>
        <h1 class="title">Каталог фильмов</h1>
        <Search/> 
        <Content v-if="isInit"/>
        <Preloader v-else/>
    </div>
</template>
<script>
import Search from '../components/Search.vue';
import Content from '../components/Content.vue';
import Preloader from '../components/Preloader/Preloader.vue'

export default {
    components:{
        Search,
        Content,
        Preloader
    },
    computed: {
        isInit(){
           return this.$store.getters.films.length > 0 ? true : false
        }
    }
}
</script>
<style lang="scss">

</style>
