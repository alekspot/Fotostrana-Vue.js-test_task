<template>
<div class="search">
    <div class="search__wrap">
        <div class="search__icon">
            <i class="material-icons">search</i>
        </div>                       
        <input class="search__input" @input="updateMessage" :value="searchText"  type="text" placeholder="Введите название">
    </div>
</div>
</template>
<script>


export default {
    name:'Search',
    methods:{
        updateMessage (e) {
            this.$store.dispatch('setSearch', e.target.value);
        }
    },
    computed:{
        searchText(){
            return this.$store.searchText
        }
    }
}
</script>
<style lang="scss">
.search{
    position: relative;;
    z-index: 101;
    background: transparent;
    padding: 10px 0 20px;
    width: 100%;

        &__wrap {
            position: relative;
            display: flex;
        }
        &__input {
            padding: 5px 36px;
            font-size: 15px;
            border-radius: 4px; 
            border:solid 1px #E4E4E4;
            overflow: hidden;
            height: 30px;
            outline: none;
            flex:1;
            font-family: Tahoma;
        }
        &__icon {
            position: absolute;
            top:10px;
            left:10px;
            color:gray;
            font-size: 20px;
        }
}
</style>