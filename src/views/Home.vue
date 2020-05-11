<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      password: '',
    }
  },
  mounted() {
    this.$tips({
      message: '你是我的眼',
      position: 'middle',
      duration: 1000
    })
  },
  components: {

  }
}
</script>
