<template>
<v-app>
  <div class="layout">
  <nuxt></nuxt>
  </div>
</v-app>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    Theme: function() {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTimeout(() => this.$vuetify.theme.dark = true, 0)
        console.log(this.$vuetify.theme.dark)
      } else {
        setTimeout(() => this.$vuetify.theme.dark = false, 0)  
        console.log(this.$vuetify.theme.dark)
     }
    },
    toggleTheme: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    ThemeTime: function() {
      let date = new Date()
      console.log(date.getHours())
      if (date.getHours() >= 19) {
        setTimeout(() => this.$vuetify.theme.dark = true, 0)
      }
    }
  },
  mounted() {
    this.ThemeTime()
  }
}
</script>

<style lang="scss">
.layout {
  padding: .7rem
}
@media screen and (min-width: 960px) {
  .layout {
    padding: 0;
  }
}
</style>
