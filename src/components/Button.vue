<template>
    <button @click="getFilms()" class="btn"><slot></slot></button>
</template>
<script>

import  filmAPI  from '../../api/films'
export default {
  methods: {
      getFilms(){
          filmAPI.getImg();
      }
  }
}
</script>
<style lang="scss">
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
