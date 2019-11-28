<template>
    <div class="left-nav-main-wrapper">I'm left navigation</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({})
export default class LeftNav extends Vue {
  constructor() {
    super();
  }
}

</script>
<style scoped>
.left-nav-main-wrapper {
  order: 1;
  flex: 4;
  border: 1px solid #ccc;
}

</style>

