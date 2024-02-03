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
  <div class="about-section">
    <div class="lab-info">
      <p class="title">Data Science Research Lab</p>
      <p class="description">
      The Data Science Research Lab is part of Morgan State University at the Computer Science Department. We focus on converging cutting edge data science techniques with diverse fields to address complex challenges
      </p>
    </div>
    <div class="upcoming-event">
      <div class="title">
        <img src="../assets/img/calendar-icon.png" alt="">
        <p>upcoming Event</p>
      </div>
      <p class="date">05/21/2024</p>
      <p class="event-name">2024 Data Science for Social Good Conference</p>
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