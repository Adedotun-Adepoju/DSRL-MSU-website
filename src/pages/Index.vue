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
  <div class="projects-section">
    <div class="title-container">
      <p  class="title">Projects</p>
      <div id="border-bottom"></div>
    </div>
    <div class="project-tiles">
      <template v-for="(project, key) in projects">
        <ProjectCard
          :key="key"
          :name="project.name"
          :description="project.description"
          :image="project.image_link"
          class="project-card"
        />
      </template>
    </div>
  </div>
  <div class="people-section">
    <div class="title-container">
      <p  class="title">People</p>
    </div>
    <div class="people-tiles">
      <template v-for="(person, key) in people">
        <PersonCard
          :key="key"
          :name="person.name"
          :title="person.title"
          :image="person.image_link"
          :leftMargin="person.left_margin"
          class="person-card"
        />
      </template>
    </div>
  </div>
</div>
</template>

<script>
import ProjectCard from "src/components/project-card/project.vue"
import PersonCard from "src/components/people-card/people.vue"
import { projects, people } from "src/data/constants"
export default {
  name: 'PageIndex',
  components: {
    ProjectCard,
    PersonCard
  },

  data() {
    return {
      activeTab: "Home",
      projects: projects,
      people: people,
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