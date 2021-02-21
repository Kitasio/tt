<template>
<v-app>
  <nuxt></nuxt>
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
    }
  },
  mounted() {
    this.Theme()
  }
}
</script>
