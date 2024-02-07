<template>
  <div class="main-container">
    <div class="wrapper">
      <div class="circular-image">
        <img :src="image" :style="{ marginLeft: `${leftMargin}`, marginTop: `${topMargin}` }"/>
      </div>
    </div>
    <div class="info">
      <p class="name">{{ name }}</p>
      <p class="title">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
   leftMargin: {
    type: String,
    required: true
   },
   topMargin: {
    type: String,
    required: true
   }
  },
  data() {
    return {

    }
  },
  computed: {

  }, 
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "./people.scss"
</style>