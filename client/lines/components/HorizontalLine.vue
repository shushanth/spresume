<template>
  <div class="horizontal-line-wrapper">
    <div class="line-start">{{from}}</div>
    <div class="line" v-bind:style="{ 'height': `${parseInt(lineHeight)}px` }">
      <div class="line-end" v-bind:style="{'top': `${parseInt(lineHeight) + 10}px`}">{{to}}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class HorizontalLine extends Vue {
  @Prop({ default: "" })
  from: string;
  @Prop({ default: "" })
  to: string;
  @Prop({ default: "" })
  lineHeight: string;
}
</script>
<style lang="scss">
@import "../../styles/_vars.scss";
.horizontal-line-wrapper {
  display: flex;
  position: relative;
  margin: 15px 0;
  .line {
    border-left: 2px dotted $pf-dark-voilet-black;
    padding-top: 9px;
    width: 20px;
    position: absolute;
    height: inherit;
    top: 20px;
  }
  .content {
    flex: 1;
    margin-left: 80px;
    margin-top: 10px;
    width: 50%;
  }
  .line-start {
    font-size: 13px;
    width: 100%;
    position: absolute;
    top:0;
  }
  .line-end {
    font-size: 13px;
    position: absolute;
    bottom: 26px;
    left: -2px;
    width: 120px;
  }
}
</style>