<template>
  <div>
    <h1>{{ film.title }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    film() {
      // через параметры роутера здесь доступен id (формируется динамически из названия файла)
      const id = parseInt(this.$route.params.id, 10);
      return this.$store.state.films[id];
    },
  }
};
</script>