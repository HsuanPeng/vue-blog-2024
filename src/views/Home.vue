<template>
  <div class="home">
    <section class="home-articles">
      <article v-for="article in articles">
        <h3 @click="routerToArticle(article.id)">
          {{ article.title | subTitle }}
        </h3>
        <i>{{ article.body }}</i>
      </article>
    </section>
    <section>
      <Sidebar :articles="articles" />
    </section>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  filters: {
    subTitle(value) {
      return value.substring(0, 20);
    },
  },
  methods: {
    routerToArticle(id) {
      this.$router.push({ name: "Article", params: { id } });
    },
  },
  computed: {
    ...mapState(["articles"]),
  },
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  padding: 1rem;
  gap: 1rem;

  .home-articles {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    article {
      display: flex;
      padding-left: 2rem;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      height: 200px;
      background-color: #dddddd;
      border-radius: 16px;
      text-align: left;

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
}
</style>
