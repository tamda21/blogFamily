<template>
  <div class="container">
    <div class="card mb-4" v-for="blog in blogs">
    <div class="card-body">
    <h3 class="card-title">{{blog.title}}</h3>
      <p class="card-text">{{blog.body}}</p>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      blogs:[]
    }
  },
  created(){
  this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
      this.blogs=data.body.slice(0,10);
    })
  }
}
</script>

<style>


</style>
