<template>
  <div style="position: fixed;z-index: 2;width: 100%">
    <HomeHeader/>
  </div>
  <div style="height: 50px"></div>
  <div>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
export default {
  name: "HomeView",
  components: {HomeHeader}
}
</script>

<style scoped>

</style>