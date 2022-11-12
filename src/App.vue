<template>
  <div class="container">
   <add-blog></add-blog> 
   <show-blog></show-blog>
   <list-title></list-title>
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlog from './components/showBlog'
import listTitle from './components/listTitle'
export default {
  components:{
    'add-blog':addBlog,
    'show-blog':showBlog,
    'list-title':listTitle
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>


</style>
