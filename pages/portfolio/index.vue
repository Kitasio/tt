<template>
<v-main>
    <TTlogo />
    <Navbar />
    <SideLinks />
    <Form :showModal="showModal" @close="toggleModal"/>

      <div class="main-content">
        <div v-for="project in projects" :key="project.slug">
          <NuxtLink :to="`/portfolio/${project.slug}`">
            <v-img class="img" :aspect-ratio="16/9" :src="`${project.Thumbnail}?nf_resize=smartcrop&w=400&h=400`" alt=""></v-img>
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
    return { projects };
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
  margin: 3rem 0 3rem 0;
  .v-image__image--cover {
    transition: background-size 2s;
  }
  .v-image__image--cover:hover {
    //transform: scale(1.5);
    background-size: 150% 150%;
  }
}
@media only screen and (min-width: 400px) {
  .main-content {
    margin: 5rem 13% 0 13%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  .img {
    transition: ease .5s; 
  }
  .img:hover {
    margin: .3rem;
  }
}

</style>