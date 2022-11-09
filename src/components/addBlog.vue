<template>
  <div id="add-blog">
    <form>
  <div class="mb-3">
    <label class="form-label">Blog Title</label>
    <input type="text" class="form-control"  v-model.lazy="blog.title">
  </div>
  <div class="mb-3">
    <label  class="form-label">Blog Content</label>
    <input type="text" class="form-control"  v-model.lazy="blog.content">
  </div>
</form>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Blog title :{{blog.title}}</h5>
    <p class="card-text">Blog Contact </p>
    <p class="card-text">{{blog.content}}</p>
    
  </div>
</div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      blog:{
        title:"",
        content:""
      }
    }
  }
}
</script>

<style>


</style>
