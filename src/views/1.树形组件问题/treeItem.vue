<template>
  <div class="tree-item">
    {{ treeData.value }}
    <treeItem
      v-for="(item, index) in treeData.children"
      :treeData="item"
      :key="index"
    ></treeItem>
  </div>
</template>

<script lang="ts">
export default {
  name: "treeItem",
  props: {
    treeData: {
      default: function () {
        return {};
      },
    },
  },
};

/* // 使用vue3的defineComponent就会有基于treeData的类型检查,template模板会报错 类型“{}”上不存在属性“treeData”,展示还不知道解决办法
import { defineComponent } from "vue";

export default defineComponent({
  name: "treeItem",
  props: {
    treeData: {
      type: null, // 设置type: null可解决问题,表示没有type?
      // default: function () {
      //   return {};
      // },
    },
  },
}); */
</script>

<style lang="less" scoped>
.tree-item {
  padding: 5px 0;
  margin: 1px 10px;
  text-align: left;
  font-size: 16px;
  max-width: 500px;
  border-left: 1px dashed #999;
  &:before {
    content: "--";
    display: inline-block;
    padding: 0 4px;
  }
}
</style>
