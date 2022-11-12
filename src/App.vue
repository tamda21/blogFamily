<template>
  <div class="container">
   <add-blog></add-blog> 
    <show-blog></show-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlog from './components/showBlog'
export default {
  components:{
    'add-blog':addBlog,
    'show-blog':showBlog
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>


</style>
