<template>
  <v-main>
    <TTlogo />
    <Navbar />
    <SideLinks />
    <Form :showModal="showModal" @close="toggleModal"/>

    <div class="grid">
       <div class="left-third">
           <div class="d-flex justify-space-between">
             <p class="text-big">project title:</p>
             <p class="text-big-light">тени тевтонов</p>
           </div>
           <div class="d-flex justify-space-between mt-sm-7">
             <p class="text-big">client:</p>
             <img class="storytel-logo" src="/img/storytel_logo.svg" alt="">
           </div>
       </div>
       <div class="right-third">
         <p class="text-big d-block">project info: <span class="text-normal ml-10">A SERIES OF BOOK COVERS AND PRODUCTION VIDEO/TRAILER FOR A FAMOUS WRITER NAMED ALEXEY IVANOV FOR HIS NEW ACTION AUDIO-BOOK ABOUT TWO.</span></p>
       </div>
        <Pic class="full mt-2 mt-sm-15" src="/img/Soldierback1.jpg?nf_resize=fit&w=2000" lazy-src="/img/Soldierback1.jpg?nf_resize=fit&w=500" />
        <div class="left-half">
          <v-lazy transition="fade-transition">
            <img style="width: 100%" src="/img/soldier.gif" alt="">
          </v-lazy>
        </div>
        <div class="right-half">
          <div class="text-vid">
            <p class="text-normal">A SERIES OF BOOK COVERS AND PRODUCTION VIDEO/TRAILER FOR A FAMOUS WRITER NAMED ALEXEY IVANOV FOR HIS NEW ACTION AUDIO-BOOK ABOUT TWO.</p>

            <v-lazy class="pa-0" transition="fade-transition">
              <video autoplay muted loop id="myVideo">
                <source src="img/demo.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
            </v-lazy>
          </div>
        </div>

        <v-carousel
          class="full"
          height="70vh"
          cycle
          hide-delimiters
          interval="5000"
          show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item,i) in caroItems"
              :key="i"
              :src="item.src"
            >
              <img class="fading-img" :src="item.fadeSrc" alt="">
            </v-carousel-item>
          </v-carousel>

          <div class="full">
            <div class="font-math">
              <div>
                <img src="/img/gothic.png" alt="">
              </div>
              <div>+</div>
              <div>
                <img src="/img/knight.png" alt="">
              </div>
              <div>=</div>
              <div>
                <img src="/img/shadows.png" alt="">
              </div>
            </div>
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
      showModal: false,
      caroItems: [
        {
          src: "/img/carousel/Girl back.jpg",
          fadeSrc: "/img/carousel/Girl.png"
        },
        {
          src: "/img/carousel/Knight back.jpg",
          fadeSrc: "/img/carousel/Knight.png"
        },
        {
          src: "/img/carousel/Monk back.jpg",
          fadeSrc: "/img/carousel/Monk.png"
        },
        {
          src: "/img/carousel/Officer back.jpg",
          fadeSrc: "/img/carousel/Officer.png"
        },
        {
          src: "/img/carousel/Soldier back.jpg",
          fadeSrc: "/img/carousel/Soldier.png"
        },
        {
          src: "/img/carousel/Succub back.jpg",
          fadeSrc: "/img/carousel/Succub.png"
        },
      ]
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
.grid {
  margin-top: 5vh;
}
.storytel-logo {
  width: 150px;
}
#myVideo {
  max-width: 100%;
  min-height: 100%;
}
.text-vid p {
  line-height: 2;
}
@keyframes fade {
  from {opacity: 0;}
  to {opacity: 100%;}
}
.fading-img {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  animation-name: fade;
  animation-duration: 5s;
  animation-delay: 1s;
}
.font-math {
  display: none;
}
@media screen and (min-width: 600px) {
  .grid {
    margin-top: 10vh;
  }
  .text-vid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    p {
      margin: auto 0 auto 5rem;
      line-height: 2.5;
      
    }
  }
}
@media screen and (min-width: 960px) {
  .storytel-logo {
    width: 200px;
  }
  .font-math {
    height: 60vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
@media screen and (min-width: 1906px) {
  .storytel-logo {
    width: 300px;
  }
}
</style>
