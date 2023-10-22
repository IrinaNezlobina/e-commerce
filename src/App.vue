<template>
<TheHeader :search="getSearch" />
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<script>
import { RouterView } from 'vue-router';
import TheHeader from "@/components/TheHeader";

export default {
  name: 'App',

  setup() {},

  data() {
    return {
      str: '123',
    }
  },

  methods: {
    getSearch(val) {
      this.searchResult = this.catalog.filter((elem) => elem.title.toLowerCase().includes(val.toLowerCase()));
    },
  },

  computed() {},

  components: {
    RouterView,
    TheHeader
  },
}
</script>

<style scoped>

</style>
