<template>
  <div class="container" v-media:bg="'sm'">
    <h1>All Blogs Title </h1>
 <div class="mb-3">
    <label class="form-label">Search Blog</label>
    <input type="text" class="form-control"  v-model="search" placeholder="search blog">
  </div>
    <div class="card mb-4" v-for="blog in filteredBlogs">
    <div class="card-body">
    <h3 class="card-title" v-rainbow>{{blog.title | upper-case }}</h3>
    </div>
    </div>
  </div>
</template>

<script>
import listMixin from '../Mixins/listMixin'
export default {
  data () {
    return {
      blogs:[],
      search:''
    }
  },
  created(){
  this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
      this.blogs=data.body.slice(0,10);
    })
  },
  computed:{
  
  },
filters:{
    upperCase(value){
      return value.toUpperCase();
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color='blue'
      }
    }
  },
mixins:[listMixin]
}
</script>

<style>


</style>
