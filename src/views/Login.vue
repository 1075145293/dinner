<template>
    <div class="loginBox">
        <div class="loginWrap">
            <div class="title">
                <span class="item login" :class="['item',isLogin ? 'showBorder':null ]" @click="isLogin=true" >登录</span>
                <span class="item " style="cursor: text">·</span>
                <span class="item register" @click="isLogin=false" :class="['item',isLogin ? null :'showBorder' ]">注册</span>
            </div>
            <template v-if="isLogin">
                <div class="content">
                    <el-input prefix-icon="el-icon-user-solid"  type="text" pattern="[0-9]*"  placeholder="手机号" v-model.trim="loginData.phone" class="username input-item"></el-input>
                    <el-input prefix-icon="el-icon-lock" type="password" placeholder="密码" v-model.trim="loginData.password" class="password"></el-input>
                </div>
                <div class="about">
                    <el-checkbox v-model="checked" class="rememberPassword">记住密码</el-checkbox>
                    <span class="problem" @click="hasError">遇到问题？</span>
                </div>
                <div class="btn">
                    <el-button class="loginBtn" @click ="loginNow">立即登录</el-button>
                </div>
            </template>
            <template v-else>
                <div class="content">
                    <el-input prefix-icon="el-icon-user-solid" placeholder="你的昵称" v-model.trim="registerData.nickName" class="nickName input-item"></el-input>
                    <el-input prefix-icon="el-icon-mobile-phone" pattern="[0-9]*"  type="text"  placeholder="手机号码" v-model.trim="registerData.phone" class="phoneNumber input-item"></el-input>
                    <el-input prefix-icon="el-icon-lock"  type="password" placeholder="设置密码" v-model.trim="registerData.password" class="password"></el-input>
                </div>
                <div class="btn">
                    <el-button class="loginBtn" @click="registerNow" >立即注册</el-button>
                    <p class="intro">
                        点击“注册”即表示您同意并愿意遵守<span style="cursor: pointer;color: #67C23A;" @click="userRules">用户协议和隐私政策</span>。
                    </p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import { sha256 } from 'js-sha256';
    import { register,login } from "@/api/login";
    export default {
        name: "Login",
        data() {
          return {
              isLogin : true, //判断是登录还是注册
              checked: false,
              password: '',
              registerErr:{

                  phoneMsg: '',
                  passwordMsg:'',
              },
              loginData: {
                  phone: '',
                  password: ''
              },
              registerData: {
                  nickName: '',
                  phone: '',
                  password: '',
              }
          }
        },
        methods: {
            checkRegister(){

            },
            hasError() {
            this.$message.alert('由于网络原因可能会出现无法登录的现象，请耐心等待!如有异常，请拨打客服热线4008 823 8823').then(action => {
                console.log(action)
            });
            },
            registerNow() {
                this.checkRegister()
                const data = {
                    nickName: this.registerData.nickName,
                    phone: this.registerData.phone,
                    password:sha256(this.registerData.password) ,
                }
                register(data).then(res=>{
                    console.log(res)
                    if (res.data.code !== 0){
                        this.$toast(res.data.msg)
                    }
                })
            },
            loginNow () {
                login({
                    phone: this.loginData.phone,
                    password: sha256(this.loginData.password)
                }).then(res =>{
                    console.log(res)
                })
            },
            userRules(){
                this.$message.alert('1：请文明使用本系统。2：厨师有一票否决权。3：最终解释权归李大帅所有').then(action => {
                    console.log(action)
                });
            },
        },
        watch: {
            isLogin(val){
                if (!val){
                    this.$set(this.loginData,'phone','')
                    this.$set(this.loginData,'password','')
                } else{
                    this.$set(this.registerData,'phone','')
                    this.$set(this.registerData,'nickName','')
                    this.$set(this.registerData,'password','')
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    .loginBox
        width 8rem
        height 100%
        display flex
        align-items center
        justify-content center
        margin 0 auto
        .loginWrap
            margin auto
            width 100%
            padding 0.2rem 0.5rem 0.5rem 0.5rem
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 0 8px rgba(0,0,0,.1);
            .title
                display flex
                justify-content center
                align-items center
                margin-bottom 20px
            .item
                padding 10px
                font-weight: 700;
                font-size 18px
                color #969696
                cursor pointer
            .register:hover
                border-bottom: 2px solid #ea6f5a;
            .login:hover
                border-bottom: 2px solid #ea6f5a;
            .showBorder
                color: #ea6f5a;
                border-bottom: 2px solid #ea6f5a;
            .content
                margin-bottom 0.5rem
                .username
                    margin-bottom 0.5rem
                .input-item
                    margin-bottom 0.5rem
            .about
                display flex
                justify-content space-between
                align-items center
                font-size 14px
                color #999
                .rememberPassword
                    display flex
                    align-items center
                    font-size 14px
                    color #999
                .problem
                    cursor pointer
            .btn
                margin-top 0.5rem
                .loginBtn
                    background-color deepskyblue
                    width 100%
                    color white
                    border-radius 5px
                .intro
                    font-size: 14px;
                    color: #b5b5b5;
                    text-align center

</style>
