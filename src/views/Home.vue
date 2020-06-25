<template>
  <div class="home">
    <h2>建业足球圈层运营idea收集</h2>
    <div class="content">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
          <div class="labelTitle">
            姓名：
          </div>
          <el-form-item  class="content-item" placeholder="请输入姓名，不超过10个字！" prop="name">
            <el-input type="text" maxlength="10"  v-model="ruleForm.name" autocomplete></el-input>
          </el-form-item>
          <div class="labelTitle">
            标题：
          </div>
          <el-form-item  class="content-item" prop="idea">
            <el-input type="textarea" rows="2" maxlength="50"  placeholder="请输入标题，不超过50个字！"  v-model="ruleForm.idea" ></el-input>
          </el-form-item>
           <div class="labelTitle">
            详情：
          </div>
          <el-form-item  class="content-item" prop="interpretation">
            <el-input type="textarea"  max="250" maxlength="250"  placeholder="请输入详情，不超过250个字！"  rows="3" v-model="ruleForm.interpretation"></el-input>
          </el-form-item>
      </el-form>
    </div>
    <div class="buttons">
      <el-button style="width:100%" type="primary" @click="goIdea">暂不提交，直接进入idea库</el-button>
    </div>
    <div class="buttons">
      <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </div>
  </div>
</template>

<script>
import { postIdea } from "@/api/login";
export default {
  name: 'Home',
  data() {
    var checkName = (rule, value, callback) => {
        if (!value) {
           callback(new Error('请输入姓名,不超过10个字！'));
        }else{
          callback()
        }
      };
      var checkIdea = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入标题，不超过50个字！'));
        } else {
          callback();
        }
      };
      var checkInterpretation = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入详情，不超过250个字！'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          idea: '',
          interpretation: ''
        },
        rules: {
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          idea: [
            { validator: checkIdea, trigger: 'blur' }
          ],
          interpretation: [
            { validator: checkInterpretation, trigger: 'blur' }
          ]
        }
      };
  },
  methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            postIdea(this.ruleForm).then(res=>{
              this.goIdea()
            }).catch(err=>{

            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goIdea() {
        this.$router.push('idea')
      }
  },
  components: {

  }
}
</script>
<style scoped lang="stylus">
  h2
    text-align center
    font-size 0.5rem
    margin 0.5rem
  .labelTitle
    margin-bottom 0.2rem
    font-size 0.4rem
    color black
  .buttons
    margin-bottom 0.5rem
  .content-item
    margin-bottom 0.6rem
</style>
