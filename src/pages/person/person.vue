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
        <p class="name" :style="{ color: mode == 'light' ? 'black' : 'white'}">{{ individual.name }}</p>
        <p class="title" :style="{ color: 'grey'}">{{ individual.title }}</p>
        <div class="icons">
          <!-- <q-icon name="email"></q-icon> -->
        </div>
      </div>
      <div class="circular-image">
        <img :src="individual.image_link" :style="{ marginLeft: individual.left_margin, marginTop: individual.top_margin }"/>
      </div>
    </div>
    <div class="about">
      <p :style="{ color: mode == 'light' ? 'black' : 'white'}">{{ individual.description }}</p>
    </div>
  </div>
</template>

<script>
import { people } from "src/data/constants"
export default {
  name: 'Person',

  data() {
    return {
      people: people,
      mode: "light",
      individual:{}
    }
  },

  mounted() {
    const slug = this.$route.params.name
    const individual = this.people.filter(item => {
      return item.slug == slug
    })

    this.individual = individual[0]
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
@import "./person.scss"
</style>