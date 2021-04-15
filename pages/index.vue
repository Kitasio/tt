<template>
  <v-main>
    <TTlogo />
    <Navbar />
    <SideLinks />
    <Form :showModal="showModal" @close="toggleModal"/>

  </v-main>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import TTlogo from '~/components/TTlogo.vue'
import SideLinks from '~/components/SideLinks.vue'
import Pic from '~/components/Pic.vue'
import Form from '~/components/Form'



export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  components: { Navbar, TTlogo, SideLinks, Pic, Form },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";

.custom-main-text {
  line-height: 125%;
}

.left-half {
    @include left-child;
}
.right-half {
    @include right-child;
}
</style>
