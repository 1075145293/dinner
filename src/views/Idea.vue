<template>
  <div class="home">
    <h2>建业足球圈层运营idea库</h2>
    <div class="buttons">
      <div>
        <el-input v-model="keyWords" style="width:4.3rem" placeholder="请输入关键词"></el-input>
      </div>
      <div class="search">
        <el-button type="primary" size="small" @click="search(true)">搜索</el-button>
        <el-button type="primary" size="small" @click="goIdea">新增</el-button>
      </div>
    </div>
    <div class="tableContent" v-loading="loading">
      <el-table :data="tableData" max-height="400" style="width: 100%">
        <el-table-column prop="date" label="日期" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="idea" label="标题" width="200"></el-table-column>
        <el-table-column label="详情" prop="interpretation" width="300"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="pageSize"
          small
          layout=" prev, pager, next"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { searchIdea } from "@/api/login";
export default {
  name: "Home",
  data() {
    return {
      keyWords: "",
      pageSize: 20,
      currentPage1: 1,
      loading: false,
      tableData: [],
      total: 0
    };
  },
  created() {
    this.loading = true;
    searchIdea({
      page: this.currentPage1,
      keyWords: this.keyWords,
      pageSize: this.pageSize
    })
      .then(res => {
        console.log(res);
        if (res.data.code == 0) {
          this.tableData = res.data.res;
          this.total = res.data.total;
        } else {
          alert("服务器开小差了，请稍后再试");
        }
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
      });
  },
  methods: {
    goIdea() {
      this.$router.push("/");
    },
    search(flag) {
      if(flag){
        this.currentPage1 = 1;
      }
      this.loading = true;
      searchIdea({
        page: this.currentPage1,
        keyWords: this.keyWords,
        pageSize: this.pageSize
      })
        .then(res => {
          if (res.data.code == 0) {
            this.tableData = res.data.res;
            this.total = res.data.total;
          } else {
            alert("服务器开小差了，请稍后再试");
          }
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.search();
    }
  },
  components: {}
};
</script>
<style scoped lang="stylus">
h2 {
  text-align: center;
  font-size: 0.5rem;
  margin: 0.5rem;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 0.4rem;

  .search {
    margin-left: 0.1rem;
    display: flex;
    align-items: center;
  }
}

.block {
  text-align: center;
  margin-top: 0.3rem;
}
</style>
