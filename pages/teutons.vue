<template>
<v-main>
  <TTlogo />
  <Navbar />
  <SideLinks />
  <Options @open="toggleModal" />
  <Form :showModal="showModal" @close="toggleModal"/>

  <div class="content">
    <v-container class="pa-0">
      <v-row class="d-flex flex-column flex-sm-row">
        <v-col col="12" sm="5">
          <div class="d-flex justify-space-between">
            <div class="project-title text-uppercase text-sm-h5 text-xl-h4 mb-sm-6">project title:</div>
            <div class="project-title text-uppercase text-sm-h5 text-xl-h4 mb-sm-6 font-weight-light">тени тевтонов</div>
          </div>
          <div class="d-flex justify-space-between mt-2">
            <div class="project-title text-uppercase text-sm-h5 text-xl-h4 mb-sm-6">client:</div>
            <div v-if="$vuetify.theme.dark" class="project-title text-uppercase text-h5 text-xl-h4 mb-sm-6 font-weight-light"><img class="storytel" src="/img/storytel_logo_white.svg" alt=""></div>
            <div v-else class="project-title text-uppercase text-h5 text-xl-h4 mb-6 font-weight-light"><img class="storytel" src="/img/storytel_logo.svg" alt=""></div>
          </div>
        </v-col>

        <v-spacer class="d-none d-sm-flex" sm="2"></v-spacer>

        <v-col col="12" sm="5">
          <div class="d-flex flex-row justify-space-between">
            <div class="info-text project-title text-uppercase text-sm-h5 text-xl-h4">project info: 
              <span class="ml-sm-12 ml-6 text-uppercase text-justify text-body-2 text-sm-caption text-xl-h6">A SERIES OF BOOK COVERS AND PRODUCTION VIDEO/TRAILER FOR A FAMOUS WRITER NAMED ALEXEY IVANOV FOR HIS NEW ACTION AUDIO-BOOK ABOUT TWO.</span>
            </div>
          </div>
        </v-col>
     </v-row>

     <v-row>
       <v-col cols="12" sm="12" class="pa-0">
        <Pic src="/img/Soldierback1.jpg?nf_resize=fit&w=2000" lazy-src="/img/Soldierback1.jpg?nf_resize=fit&w=500" />
       </v-col>
     </v-row>

     <v-row>
       <v-col cols="12" sm="6" class="pa-0">
         <Pic src="/img/soldier.png?nf_resize=fit&w=2000" lazy-src="/img/soldier.png?nf_resize=fit&w=500" />
       </v-col>
       <v-col cols="12" sm="6" class="pa-0 d-flex flex-column">
          <div class="right-side-text">
            <p>A SERIES OF BOOK COVERS AND PRODUCTION VIDEO/TRAILER FOR A FAMOUS WRITER NAMED ALEXEY IVANOV FOR HIS NEW ACTION AUDIO-BOOK ABOUT TWO.</p>
          </div>
          <Pic src="/img/soldierMaking.png?nf_resize=fit&w=2000" lazy-src="/img/soldierMaking.png?nf_resize=fit&w=500" />
       </v-col>
     </v-row>
   </v-container>

   <br>
   <p class="sample-text">saple text</p>

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

.sample-text {
  @include text-heading
}

.content {
  padding-top: 1rem;
  margin: 1%;
}
.storytel {
    width: 120px;
}


@media screen and (min-width: 960px) {
  .content {
    padding-top: 7rem;
    margin: 0 13%;
  }
  .storytel {
    width: 190px;
  }
  .right-side-text {
    height: 50%;
  }
}

@media screen and (min-width: 1906px) {
  .storytel {
    width: 280px;
  }
}

</style>
