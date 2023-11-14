<template>
  <div class="flex flex-col h-screen">
    <layout-header />
    <router-view></router-view>
    <layout-footer />
  </div>
</template>
<script>
import LayoutFooter from "@/components/layout/LayoutFooter.vue";
import LayoutHeader from "@/components/layout/LayoutHeader.vue";



export default {
  name: 'App',
  components: {
    LayoutFooter,
    LayoutHeader
  },
  setup() {

  },
  data() {
    return {
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
}
</script>