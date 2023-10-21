<template>
  <div class="header__search">
    <input v-model="valueSearch"  type="search" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped lang="scss">
.header__search {
  margin-right: 20px;
  margin-left: auto;
  input {
    border: unset;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.1);
    padding: 8px 15px;

  }
}
</style>