<template>
  <div class="main-container">
    <div v-for="(item, key) in publicationYears" :key="key" class="year">
      <p>{{ item }}</p>
      <hr>
      <div v-for="(publication, key) in getPublicationsByYear(item)" :key="key" class="publication">
        <span v-for="(person, key) in publication.people" :key="key"> {{ person }},</span>
        <span class="title"> {{ publication.title }}</span>
        <span class="extras"> {{ publication.extras }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { publications } from "src/data/constants"
export default {
  name: 'Publications',

  data() {
    return {
      publications: publications
    }
  },
  computed: {
    publicationYears() {
      let years = this.publications.map(item => {
        return item.year
      })

      years = new Set(years)

      return years
    }
  }, 

  methods: {
    getPublicationsByYear(year) {
      const publications = this.publications.filter(item => {
        return item.year == year
      })
      console.log({year})
      console.log({ publications })
      return publications
    }
  }
}
</script>

<style scoped>
@import "./publications.scss"
</style>