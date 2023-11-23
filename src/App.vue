<template>
  <TheHeader/>
  <main class="main">
    <div class="container">
      <RouterView/>
    </div>
  </main>
</template>

<script>
import {RouterView} from 'vue-router';
import TheHeader from "@/components/TheHeader";
import "@/styles/base/mixins.scss";
import {useSearchStore} from "@/stores/SearchStore";

export default {
  name: 'App',

  setup() {
    const searchStore = useSearchStore();

    return {
      searchStore,
    }
  },

  data() {
    return {}
  },

  methods: {},
  mounted() {
    this.searchStore.getSearchProducts();
  },
  computed() {
  },

  components: {
    RouterView,
    TheHeader
  },
}
</script>

<style scoped>

</style>
