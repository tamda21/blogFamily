<template>
  <div id="add-blog">
    <form>
  <div class="mb-3">
    <label class="form-label">Blog Title</label>
    <input type="text" class="form-control"  v-model.lazy="blog.title">
  </div>
  <div class="mb-3">
    <label  class="form-label d-inline-block">Blog Content</label>
    <input type="text" class="form-control d-inline-block"  v-model.lazy="blog.content">
  </div>
  <div class="form-check">
  <label class="form-check-label d-inline-block" >
      Abderrahim
  </label>
  <input class="form-check-input d-inline-block" type="checkbox" value="Abderrahim" v-model="blog.familly">
  </div>
  <div class="form-check">
  <label class="form-check-label d-inline-block" >
      Meryem
  </label>
  <input class="form-check-input d-inline-block" type="checkbox" value="Meryem" v-model="blog.familly">
  </div>
  <div class="form-check">
  <label class="form-check-label d-inline-block"  >
      Loujaine
  </label>
  <input class="form-check-input d-inline-block" type="checkbox" value="Loujaine" v-model="blog.familly">
  </div>
</form>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
    <h5 class="card-title">Blog title  : {{blog.title}}</h5>
    <p class="card-text">Blog Contact :</p>
    <p class="card-text">{{blog.content}}</p>
    <ul class="list-group">
  <li class="list-group-item" v-for="family in blog.familly">{{family}}</li>
    </ul>
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
        content:"",
        familly:[]
      }
    }
  }
}
</script>

<style>


</style>
