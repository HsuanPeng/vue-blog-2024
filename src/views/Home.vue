<template>
  <div class="home">
    <section class="home-articles">
      <article v-for="article in articles">
        <h3>{{ article.title | subTitle }}</h3>
        <i>{{ article.body }}</i>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  mounted() {
    const api = "https://jsonplaceholder.typicode.com/posts";
    axios.get(api).then((response) => {
      this.articles = response.data;
    });
  },
  data() {
    return {
      articles: [],
    };
  },
  filters: {
    subTitle(value) {
      return value.substring(0, 20);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  .home-articles {
    article {
      display: flex;
      padding-left: 2rem;
      justify-content: center;
      margin: 1rem;
      flex-direction: column;
      align-items: flex-start;
      width: 75vw;
      height: 200px;
      background-color: #dddddd;
      border-radius: 16px;

      h3 {
        cursor: pointer;

        &:hover {
          opacity: 0.6;
        }
      }

      i {
        color: #8f8f8f;
      }

      span {
        text-align: left;
        padding-right: 1.5rem;
      }
    }
  }

  .home-side-bar {
    width: 25vw;
    padding: 1rem;
    height: calc(100vh - 56px);
  }
}
</style>
