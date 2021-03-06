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
        <Pic class="full mt-2 mt-sm-15" src="/img/Soldierback1.jpg?nf_resize=fit&w=2000" lazy-src="/img/Soldierback1.jpg?nf_resize=fit&w=50" />
        <div class="left-half">
            <img style="width: 100%" src="/img/soldier.gif" alt="">
        </div>
        <div class="right-half">
          <div class="text-vid">
            <p class="text-normal">A SERIES OF BOOK COVERS AND PRODUCTION VIDEO/TRAILER FOR A FAMOUS WRITER NAMED ALEXEY IVANOV FOR HIS NEW ACTION AUDIO-BOOK ABOUT TWO.</p>
            <div>
                <video autoplay muted loop id="myVideo">
                  <source src="/img/demo.mp4" type="video/mp4">
                  Your browser does not support HTML5 video.
                </video>
            </div>
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
            <!-- <img class="fading-img" :src="item.fadeSrc" alt=""> -->
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

            <div class="left-third">
              <img v-for="(book, i) in booksL" :key="i" :src="book.src" style="width: 100%;"/>
            </div>
            <div id="text-move" class="center">
              <p id="book-text" class="text">final audiobook covers</p>
            </div>
            <div class="right-third">
              <img v-for="(book, i) in booksR" :key="i" :src="book.src" style="width: 100%;"/>
            </div>
          <div class="full">
            <div>
              <div>
                <p class="text">YOU CAN READ MORE ABOUT THE BOOK AND THE PROJECT ON SOME HUGE RESOURCES, SUCH AS :</p>
              </div>
              <div>

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
          src: "/img/carousel/Girl back.jpg?nf_resize=fit&w=2000",
          fadeSrc: "/img/carousel/Girl.png?nf_resize=fit&w=2000"
        },
        {
          src: "/img/carousel/Knight back.jpg?nf_resize=fit&w=2000",
          fadeSrc: "/img/carousel/Knight.png?nf_resize=fit&w=2000"
        },
        {
          src: "/img/carousel/Monk back.jpg?nf_resize=fit&w=2000",
          fadeSrc: "/img/carousel/Monk.png?nf_resize=fit&w=2000"
        },
        {
          src: "/img/carousel/Officer back.jpg?nf_resize=fit&w=2000",
          fadeSrc: "/img/carousel/Officer.png?nf_resize=fit&w=2000"
        },
        {
          src: "/img/carousel/Soldier back.jpg?nf_resize=fit&w=2000",
          fadeSrc: "/img/carousel/Soldier.png?nf_resize=fit&w=2000"
        },
        {
          src: "/img/carousel/Succub back.jpg?nf_resize=fit&w=2000",
          fadeSrc: "/img/carousel/Succub.png?nf_resize=fit&w=2000"
        },
      ],
      booksL: [
        {
          src: "/img/book1.png?nf_resize=fit&w=1000"
        },
        {
          src: "/img/book3.png?nf_resize=fit&w=1000"
        },
        {
          src: "/img/book5.png?nf_resize=fit&w=1000"
        },
        
      ],
      booksR: [
        {
          src: "/img/book2.png?nf_resize=fit&w=1000"
        },
        {
          src: "/img/book4.png?nf_resize=fit&w=1000"
        },
        {
          src: "/img/book6.png?nf_resize=fit&w=1000"
        },
      ],
    }
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal
    },
    moveText: function() {
      this.$gsap.to("#book-text", {
        y: 1360,
        duration: 2,
        scrollTrigger: {
          trigger: '#text-move',
          start: "top center",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      });
    }
  },
  // mounted() {
  //   this.moveText()
  // },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      this.moveText()
    })
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

.fading-img {
  // opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
  transition: opacity 4s;
}
.fading-active img {
  opacity: 100% !important;
}
.font-math {
  display: none;
}
#text-move {
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
  #text-move {
    display: block;
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
