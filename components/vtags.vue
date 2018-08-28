<template>
  <button>{{text}}</button>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'vtags',
  props: ['text']
}
</script>

<style scoped>
button{
  font-size: 14px;
  color: #757575;
  border: none;
  background-color: transparent;
  margin-right: 6px;
}
</style>
