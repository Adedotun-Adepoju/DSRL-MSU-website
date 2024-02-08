<template>
  <div class="main-container" :style="{ backgroundImage: `url(${image})`}">
    <div class="border">
      <div class="title-section">
        <p class="title">{{ name }}</p>
        <div id="border-bottom"></div>
      </div>
      <div class="description">
        <p class="info">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    name: {
      type: String,
      required: true
    },
   description: {
    type: String,
    required: true
   },
   image: {
    type: String,
    required: true
   },
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
@import "./project.scss";
</style>