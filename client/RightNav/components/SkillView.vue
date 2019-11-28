<template>
    <span class="title">{{skill}}</span>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component({})
export default class SkillView extends Vue {
  @Prop({default: ''})
  skill: string;
}
</script>
<style lang="scss" scoped>
  @import "../../styles/_vars.scss";
  .title {
    display: inline-block;
    margin: 2px;
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    font-weight: 400;
    background: $pf-orange-pink-clay;
  }
</style>