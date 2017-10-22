<template>
  <h1 class="hello">
    {{ msg }}
    {{count}}
    <button @click="countNumber">+1</button>
  </h1>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class Hello extends Vue {
    msg: string = 'this is a typescript project now' 
    count:number=0   
    countNumber():void{
      this.count++;
      
    }
  }
</script>


<style lang="css" scoped>
  .hello {
    color: blue;
  }
</style>
