<template>
<!--<TheHeader :search="getSearch" />-->
<TheHeader />

  <main>
    <div class="container">
      <RouterView />
    </div>

  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import TheHeader from "@/components/TheHeader";

export default {
  name: 'App',

  data() {
    return {
      str: '123',
    }
  },

  methods: {
    // getSearch(val) {
    //   this.searchResult = this.catalog.filter((elem) => elem.title.toLowerCase().includes(val.toLowerCase()));
    // },
  },

  components: {
    RouterLink,
    RouterView,
    TheHeader
  },
}
</script>

<style scoped>

</style>
