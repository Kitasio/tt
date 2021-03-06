<template>
<v-main>
    <TTlogo />
    <Navbar />
    <SideLinks />
    <Form :showModal="showModal" @close="toggleModal"/>
    <NuxtLink to="/portfolio/xor"><div>xor</div></NuxtLink>
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

<style>

</style>