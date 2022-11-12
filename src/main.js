import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
/*Vue.directive('rainbow',{
  bind(el,binding,vnode){
    //el.style.color='#'+Math.random().toString().slice(2,8);
    el.style.color='red';
    
  }
});*/
Vue.directive('media',{
  bind(el,binding,vnode){
    el.style.maxWidth='1200px';
    if (binding.value=='lg') {
      el.style.width='900px';
    }else if(binding.value=='sm'){
      el.style.width='520px'
    }
    if(binding.arg=='bg'){
      el.style.background='#ddd';
      el.style.padding ='20px';
      el.style.marginTop='20px'
    }
  }
});
//Filters
/*Vue.filter('upper-case',(value)=>{
  return value.toUpperCase();
});*/
Vue.filter('snippet',(value)=>{
  return value.slice(0,100)+'...'
})
Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
})
