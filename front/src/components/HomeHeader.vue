<template>
    <div style="width: 100%">
        <el-menu class="el-menu-demo" mode="horizontal" style="display: flex" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <div style="display: flex;width: 30%">
            <router-link to="/view1"><el-menu-item index="1">页面1</el-menu-item></router-link>
            <router-link to="/view2"><el-menu-item index="2">页面2</el-menu-item></router-link>
            <router-link to="/view3"><el-menu-item index="3">页面3</el-menu-item></router-link>
            <el-sub-menu index="4">
              <template #title>其他页面</template>
              <router-link to="/view01"><el-menu-item index="4-1">页面01</el-menu-item></router-link>
              <router-link to="/view02"><el-menu-item index="4-2">页面02</el-menu-item></router-link>
              <router-link to="/view03"><el-menu-item index="4-3">页面03</el-menu-item></router-link>
            </el-sub-menu>
          </div>

            <span style="margin-top: 15px;color: dodgerblue;font-size: 20px;font-weight:bold;letter-spacing: 0.3em;width: 40%;text-align: center">XXX系统</span>

            <div style="width: 30%;margin-top: 20px;margin-left: 650px;">
                <el-dropdown>
                <span class="el-dropdown-link" style="color: white;font-size: 15px;font-weight:bold;position: fixed;z-index: 1">
                  username
                </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="this.$router.push('/')">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-menu>

    </div>

</template>

<script>
    export default {
        name: "HomeHeader",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }

</style>