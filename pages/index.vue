<template>
  <v-main>
    <TTlogo />
    <Navbar />
    <SideLinks />
    <Options @open="toggleModal" />
    <Form :showModal="showModal" @close="toggleModal"/>

    <div class="grid">
       <div class="left-half">

       </div>
       <div class="right-half">

       </div>
    </div>
  </v-main>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import TTlogo from '~/components/TTlogo.vue'
import SideLinks from '~/components/SideLinks.vue'
import Pic from '~/components/Pic.vue'
import Form from '~/components/Form'

export default {
  components: { Navbar, TTlogo, SideLinks, Pic, Form },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";


.left-half {
    @include left-child;
}
.right-half {
    @include right-child;
}
</style>>
