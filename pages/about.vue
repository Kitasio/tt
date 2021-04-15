<template>
   <v-main>
    <TTlogo />
    <Navbar />
    <SideLinks />
    <Form :showModal="showModal" @close="toggleModal"/>

    <div class="mx-md-5 pa-md-5 pa-xl-10 mt-16 shades black">
      <div class="custom-main-text white--text text-md-h2 text-xl-h1 font-weight-thin text-justify">We're a team of creators and artists from Moscow who love art projects and experiment with <span class="animate-word"></span></div>
      <p class="custom-main-text white--text text-md-h2 text-xl-h1 font-weight-thin text-justify"></p>
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
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  components: { Navbar, TTlogo, SideLinks, Pic, Form },
  data() {
    return {
      showModal: false,
      selectedWord: 'branding',
      words: ['art', 'illustrations', 'huyart', 'mazafakaaaaa']
    }
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal
    },
    changeWord: function(word) {
      this.selectedWord = word
    },
    wordsAnim: function() {
      let tl = this.$gsap.timeline({repeat: -1})
      this.words.forEach(word => {
        tl.to(".animate-word", { duration: 1, height: "0em", delay: 2 })
        tl.call(this.changeWord, [word])
        tl.to(".animate-word", { duration: 1, height: "1em" })
      });
    },
    textAppear: function() {
      this.$gsap.to(".animate-word", {duration: 15, delay: 3, ease: "none", text: {
        value: "art, design, illustrations, crypto, music, mixin vodka with caffeine, unintended puns, chasing ghosts, I love dogs, doesen't eveyone?",
      }})
    }
  },
  mounted() {
    // this.wordsAnim()
    this.textAppear()
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