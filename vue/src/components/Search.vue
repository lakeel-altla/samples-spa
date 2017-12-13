<template>
  <div class="mdl-textfield mdl-js-textfield">
     <input @change="onQueryChanged($event.target.value)" @keyup.enter="onSearch" class="mdl-textfield__input" type="text" id="sample1">
     <i @click="onSearch" class="material-icons">search</i>
  </div>
</template>

<<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      onQueryChanged: 'timeline/onQueryChanged',
      onSearch: 'timeline/fetchGifs'
    })
  }
}
</script>

<style media="screen">
.mdl-textfield {
  padding: 0;
  background-color: #f6f6f6;
  margin: 30px auto;
  width: 60%;
  display: flex;
  margin-bottom: 60px;
}
</style>