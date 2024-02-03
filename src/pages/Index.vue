<template>
<div>
  <div class="navigation-section">
    <div class="logo-section">
      <img src="../assets/img/lab-logo.jpeg" alt="">
      <p>DSRL</p>
    </div>
    <div class="nav-items">
      <p 
        v-for="(item, key) in navItems" 
        :key="key"
        :class="`nav-item ${item.name == activeTab ? 'active-tab' : ''}`"
        @click="navItemClick(item.name)"
      >
        {{ item.name }} 
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      activeTab: "Home",
      navItems: [
        {
          name: "Home",
          to: ""
        },
        {
          name: "Projects",
          to: ""
        },
        {
          name: "People",
          to: ""
        },
        {
          name: "Publications",
          to: ""
        }
      ]
    }
  },
  
  computed: {

  },

  methods: {
    navItemClick(item) {
      this.activeTab = item
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>