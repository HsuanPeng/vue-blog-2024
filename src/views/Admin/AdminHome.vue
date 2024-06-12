<template>
  <div>
    <div>{{ account }}</div>
    <div>{{ articles }}</div>
    <b-button @click="fetchArticles">Fetch Articles</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchArticles"]),
  },
  computed: {
    ...mapState(["account", "articles"]),
  },
};
</script>
