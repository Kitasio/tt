<template>
<v-main>
    <TTlogo />
    <Navbar />
    <SideLinks />
    <Form :showModal="showModal" @close="toggleModal"/>

    <div class="grid" style="margin-top: 2rem;">
      <div class="full">
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
        </li>
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
    const posts = await $content("blog").fetch();

    return {
      posts,
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

</style>