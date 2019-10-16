<template>
    <header class="header">
        <h1 class="header__title">Каталог фильмов</h1>
        <Search/> 
    </header>      
</template>
<script>
import Search from './Search.vue';

export default {
    components:{
        Search
    }
}
</script>
<style lang="scss">
    .header__title {
       font-family: Tahoma;
       font-size: 24px
    }
</style>
