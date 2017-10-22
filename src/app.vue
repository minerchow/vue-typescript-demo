<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Hello from './components/hello.vue';
  import VueResource from "vue-resource";
  Vue.use(VueResource);
  @Component({
    components: {
      Hello
    }
  })
   export default class App extends Vue {
     mounted(){
       this.$http.options.emulateJSON = true;
       this.$http.get('/topics').then((response) => {
        // success callback
        console.log(response)
        //传递数据到子模块
      }, (response) => {
        // error callback
      })
     }
   }
 
</script>
