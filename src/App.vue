<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #41a0ff;

    &:hover {
      color: #e2ba1d;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>