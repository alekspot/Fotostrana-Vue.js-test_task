<template>
    <div class="app">
        <Header/>
        <Content v-if="isInit"/>
        <Preloader v-else/>
    </div>      
</template>
<script>
import Header from './Header.vue';
import Content from './Content.vue';
import Preloader from './Preloader.vue';

export default {
    components:{
        Header,
        Content,
        Preloader
    },
    computed: {
        isInit(){ // определяет загрузились ли данные
            return this.$store.getters.films.length > 0 ? true : false
        }
    }
}
</script>
<style lang="scss">
    .app {
        max-width: 810px;
        margin: 0 auto;
        padding: 0 10px 15px;
    }
</style>
