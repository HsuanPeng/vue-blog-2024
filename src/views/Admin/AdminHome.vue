<template>
  <div>
    <b-table :items="articles" :fields="fields">
      <template v-slot:cell(title)="data">
        {{ data.value | subTitle }}
      </template>
      <template v-slot:cell(body)="data">
        {{ data.value | subBody }}
      </template>
      <template v-slot:cell(id)="data">
        <b-button-group>
          <b-button @click="editArticle(data.value)">修改</b-button>
          <b-button @click="delArticle(data.value)">刪除</b-button>
        </b-button-group>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      fields: [
        { key: "id", label: "修改/刪除" },
        { key: "title", label: "文章標題" },
        { key: "body", label: "文章內容" },
      ],
    };
  },
  filters: {
    subTitle(value) {
      return value.substring(0, 20);
    },
    subBody(value) {
      return value.substring(0, 50);
    },
  },
  methods: {
    ...mapActions(["fetchArticles"]),
    editArticle: function (id) {
      this.$router.push({ name: "Admin-Edit", params: { id: id } });
    },
    delArticle: function (id) {
      const ensure = confirm("請問是否要刪除這篇文章？");
      if (ensure) {
        this.deleteArticle(id);
      }
    },
  },
  computed: {
    ...mapState(["account", "articles"]),
  },
};
</script>
