<template>
  <nav class="nav">
    <div class="title">Lisa's Blog</div>
    <div class="header-right">
      <div class="nav-item">
        <div>Home</div>
        <div>About</div>
      </div>
      <form role="search">
        <input type="search" placeholder="Search" aria-label="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style scoped>
.title {
  color: white;
  font-size: 1.5rem;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #404040;
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
