<template>
  <div class="form-container">
    <b-form class="form-box">
      <b-form-group
        id="input-group-1"
        label="輸入管理員帳號"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          placeholder="Enter Account"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="登入密碼" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="routerToAdmin"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    buttonDisabled: function () {
      return !(this.form.email && this.form.password);
    },
  },
  methods: {
    routerToAdmin: function () {
      this.$router.push({ name: "Admin" });
    },
  },
};
</script>
<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.form-box {
  width: 30%;
  min-width: 300px;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 16px;
  /* background-color: #dddddd; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
