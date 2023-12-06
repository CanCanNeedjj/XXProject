<template>
    <div style="text-align: center;margin: 0 20px">
        <div style="margin-top: 150px">
            <div style="font-size: 25px;font-weight: bold">登录页面</div>
            <div style="font-size: 14px;color: grey">在进入系统之前请先输入用户名和密码进行登录</div>
        </div>

      <div style="margin-top: 50px">

        <el-form :model="form" ref="form">

          <el-form-item label="用户名">
            <el-input type="text" v-model="form.username" placeholder="用户名"></el-input>
          </el-form-item>

          <el-form-item label="密  码">
            <el-input type="password" style="margin-top: 10px" v-model="form.password" placeholder="密码"></el-input>
          </el-form-item>

        </el-form>

      </div>


        <el-row style="margin-top: 5px">
            <el-col :span="12" style="text-align: left">
                <el-checkbox label="记住我" size="large" />
            </el-col>
            <el-col :span="12" style="text-align: right">
                <el-link @click="this.$router.push('/forget')">忘记密码</el-link>
            </el-col>
        </el-row>

        <div style="margin-top: 40px">
            <el-button style="width: 270px" type="success" plain @click="this.$router.push('/home')">立即登录</el-button>
        </div>
        <el-divider>
            <span style="color: grey">没有账号</span>
        </el-divider>
        <div>
            <el-button style="width: 270px" type="warning" plain @click="this.$router.push('/register')">注册账号</el-button>
        </div>

    </div>
</template>

<script>
    import request from "@/utils/request";

    export default {
        name: "Login",
        data(){
            return{
              form:{}
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>