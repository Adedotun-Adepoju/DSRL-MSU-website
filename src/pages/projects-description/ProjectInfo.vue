<template>
  <div class="container" :style="{ background: mode == 'light' ? 'white' : 'black'}">
    <div class="toggle-container">
      <q-icon 
        name="arrow_back" 
        size="lg" 
        :color="mode == 'light' ? 'black' : 'white'" 
        class="back-icon"
        @click="goToHomePage()"
      >
      </q-icon>
      <q-toggle
        v-model="mode"
        :color="mode == 'light' ? 'black' : 'white'"
        false-value="light"
        true-value="dark"
        size="lg"
      >
      </q-toggle>
    </div>
    <div class="details">
      <div class="info">
        <p class="name" :style="{ color: mode == 'light' ? 'black' : 'white'}">{{ project.name }}</p>
        <div class="icons">
          <!-- <q-icon name="email"></q-icon> -->
        </div>
      </div>
      <div class="circular-image">
        <img :src="project.image_link" :style="{ }"/>
      </div>
    </div>
    <div class="about">
      <p :style="{ color: mode == 'light' ? 'black' : 'white'}">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
import { projects } from "src/data/constants"
export default {
  name: 'ProjectInfo',

  data() {
    return {
      projects: projects,
      mode: "light",
      project:{}
    }
  },

  mounted() {
    const slug = this.$route.params.name
    const project = this.projects.filter(project => {
      return project.slug == slug
    })

    this.project = project[0]
  },
  computed: {

  }, 

  methods: {
    goToHomePage() {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
@import "./ProjectInfo.scss"
</style>