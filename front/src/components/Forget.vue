<template>
    <div style="text-align: center;margin: 0 20px">
        <div style="margin-top: 150px">
            <div style="font-size: 25px;font-weight: bold">忘记密码页面</div>
        </div>

      <el-form :model="form">

        <el-form-item label="用户名">
          <el-input type="text" v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item label="电子邮箱">
          <el-input type="email" style="margin-top: 10px" v-model="form.email" placeholder="电子邮箱"></el-input>
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

        <el-divider>
            <span style="color: grey">想起密码？</span>
        </el-divider>

        <div>
            <el-button style="width: 270px" type="primary" plain @click="this.$router.push('/')">立即登录</el-button>
        </div>

        <el-divider>
            <span style="color: grey">没有账号？</span>
        </el-divider>
        <div>
            <el-button style="width: 270px" type="warning" plain @click="this.$router.push('/register')">注册账号</el-button>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Forget",
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