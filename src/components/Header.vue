<template>
  <nav class="nav">
    <router-link to="/" class="title">Lisa's Blog</router-link>
    <div class="header-right">
      <div class="nav-item">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
      </div>
      <form role="search">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchKey"
        />
        <button type="submit" @click="submitSearchKey">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchKey: "",
    };
  },
  methods: {
    ...mapActions(["changeSearchKey"]),

    submitSearchKey: function () {
      this.changeSearchKey(this.searchKey);
    },
  },
  watch: {
    searchKey: function () {
      if (this.searchKey === "") {
        this.submitSearchKey(this.searchKey);
      }
    },
  },
};
</script>

<style scoped>
.title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2e2e2e;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-item {
  display: flex;
  align-items: center;
  color: aliceblue;
  cursor: pointer;
  gap: 20px;
}

.nav-item a {
  color: white;
  text-decoration: none;
}

.header-right form {
  display: flex;
  gap: 20px;
}

.nav input {
  border-radius: 0.25rem;
}

.nav button {
  border-radius: 0.25rem;
  background-color: #505050;
  color: white;
  border: none;
}
</style>
