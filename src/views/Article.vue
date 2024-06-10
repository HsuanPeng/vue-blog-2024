<template>
  <div class="article">
    <h3>{{ article.title }}</h3>
    <div class="article-body">{{ article.body }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.fetchArticle();
  },
  watch: {
    "$route.params.id": "fetchArticle",
  },
  methods: {
    fetchArticle() {
      const articleId = this.$route.params.id;
      const api = "https://jsonplaceholder.typicode.com/posts?id=" + articleId;
      axios.get(api).then((response) => {
        this.article = response.data[0];
      });
    },
  },
  data() {
    return {
      article: {},
    };
  },
};
</script>

<style scoped>
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;

  .article-body {
    margin-top: 1rem;
    text-align: left;
  }
}
</style>
