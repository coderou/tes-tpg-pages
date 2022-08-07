<template>
  <treeItem :treeData="mainData"></treeItem>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import treeItem from "./treeItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    treeItem,
  },
  setup() {
    const mainData = reactive({
      value: "root",
      children: [
        {
          value: "层级1-1",
          children: [
            {
              value: "层级2-1",
              children: [
                {
                  value: "层级3-1",
                  children: [],
                },
              ],
            },
            {
              value: "层级2-2",
              children: [],
            },
          ],
        },
        {
          value: "层级1-2",
          children: [],
        },
      ],
    });
    return {
      mainData,
    };
  },
});
</script>
