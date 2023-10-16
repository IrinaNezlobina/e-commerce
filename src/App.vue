<template>
<TheHeader/>

  <main>
    <RouterView />
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
  methods: {},
  computed() {},
  components: {
    RouterLink,
    RouterView,
    TheHeader
  },
}
</script>

<style scoped>

</style>
