<template>
<v-main>
    <TTlogo />
    <Navbar />
    <SideLinks />
    <Form :showModal="showModal" @close="toggleModal"/>

      <div class="main-content">
        <div v-for="project in projects" :key="project.slug">
          <NuxtLink :to="project.slug">
            <img :src="project.Thumbnail" alt="">
          </NuxtLink> 
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
  async asyncData({ $content }) {
    const projects = await $content("project").fetch();
    return {
      projects,
    };
  },
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
.main-content {
  margin-top: 1rem;
  img {
    max-width: 100%;
  }
}
@media only screen and (min-width: 400px) {
  .main-content {
    margin: 5rem 13% 0 13%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}

</style>