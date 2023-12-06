<template>
  <div style="width: 100%;height: 100vh;overflow: hidden;display: flex;">
    <div style="background-color: dodgerblue;width: 65%" class="box">
      登录页图片
    </div>
    <div class="welcome-title">
      欢迎进入XXX系统
    </div>
    <div style="width: 35%;background-color: white;z-index: 1">
      <router-view v-slot="{Component}">
        <transition name="el-fade-in-linear">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: "LoginView",
  components:{

  },
  data(){
    return{

    }
  },

  methods:{

  },

}
</script>

<style scoped>
.welcome-title {
  text-align: center;
  position: absolute;
  bottom: 600px;
  left: 250px;
  color: white;
  text-shadow: 0 0 10px black;
}


h1 {
  font-size: 66px;
  color: black;
}



</style>