<template>
  <div>{{ thisAccount }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.thisAccount = this.$store.state.account;
  },
  data() {
    return {
      thisAccount: "",
    };
  },
  computed: {
    ...mapState(["account"]),
  },
};
</script>
