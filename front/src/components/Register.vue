<template>
    <div style="text-align: center;margin: 0 20px">
        <div style="margin-top: 100px">
            <div style="font-size: 25px;font-weight: bold">注册新用户</div>
            <div style="font-size: 14px;color: grey">欢迎注册我们的学习平台，请在下方填写相关信息</div>
        </div>

      <div style="margin-top: 50px">
        <el-form :model="form">
          <el-form-item label="用户名">
            <el-input :maxlength="8" type="text" placeholder="用户名" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input :maxlength="16" type="password" placeholder="密码" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input :maxlength="16" type="password" placeholder="重复密码" v-model="form.surPassword"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input type="email" placeholder="电子邮件地址" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-row :gutter="10" style="width: 100%">
              <el-col :span="17">
                <el-input :maxlength="6" type="text" placeholder="请输入验证码" v-model="form.codes"></el-input>
              </el-col>
              <el-col :span="5">
                <el-button type="success">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </div>

        <div style="margin-top: 80px">
            <el-button style="width: 270px" type="warning" plain @click="this.$router.push('/')">立即注册</el-button>
        </div>
        <div style="margin-top: 20px">
            <span style="font-size: 14px;line-height: 15px;color: grey">已有账号? </span>
            <el-link type="primary" style="translate: 0 -2px" @click="this.$router.push('/')">立即登录</el-link>
        </div>
    </div>
</template>

<script>
    import request from "@/utils/request";

    export default {
        name: "Register",
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