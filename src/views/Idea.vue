<template>
  <div class="home">
    <h2>建业足球圈层运营idea库</h2>
    <div class="buttons">
        <div>
            <el-input v-model="keyWords" style="width:4.3rem" placeholder="请输入关键词" ></el-input>
        </div>
        <div class="search">
            <el-button type="primary" size="small">搜索</el-button>
            <el-button type="primary" size="small">新增</el-button>
        </div>
    </div>
    <div class="tableContent" v-loading="loading">
        <el-table
            :data="tableData"
            max-height="400"
            style="width: 100%"
            >
            <el-table-column
                prop="date"
                label="日期"
                width="120"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120"
               >
            </el-table-column>
            <el-table-column
                prop="name"
                label="标题"
                width="200"
                >
            </el-table-column>
             <el-table-column
                label="详情"
                prop="address"
                width="300">
             </el-table-column>
        </el-table>
        <div class="block" >
         <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="10"
            small
            layout=" prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
    </div>
    
  </div>
</template>

<script>
import { postIdea } from "@/api/login";
export default {
  name: 'Home',
  data() {
    
      return {
        keyWords:'',
        currentPage1:1,
        loading:false,
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
  },
  methods:{
      goIdea() {
        this.$router.push('idea')
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
  .buttons
    display flex
    justify-content center
    margin-bottom 0.4rem
    .search
        margin-left 0.1rem
        display flex
        align-items center
        
  .block
    text-align center
    margin-top 0.3rem
</style>
