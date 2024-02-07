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
        <p class="name" :style="{ color: mode == 'light' ? 'black' : 'white'}">{{ person.name }}</p>
        <p class="title" :style="{ color: 'grey'}">{{ person.title }}</p>
        <div class="icons">
          <!-- <q-icon name="email"></q-icon> -->
        </div>
      </div>
      <div class="circular-image">
        <img :src="person.image_link" :style="{ marginLeft: '-40px' }"/>
      </div>
    </div>
    <div class="about">
      <p :style="{ color: mode == 'light' ? 'black' : 'white'}">{{ person.description }}</p>
    </div>
  </div>
</template>

<script>
import { people } from "src/data/constants"
export default {
  name: 'People',

  data() {
    return {
      people: people,
      mode: "light",
      person:{}
    }
  },

  mounted() {
    const slug = this.$route.params.name
    const person = this.people.filter(person => {
      return person.slug == slug
    })

    this.person = person[0]
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