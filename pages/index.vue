<template>
<v-main>
  <TTlogo />
  <Navbar />
  <SideLinks />
  <Options />

  <div class="content">
    <v-container class="pa-0">
      <v-row>
        <v-col col="12" sm="5">
          <div class="d-flex justify-space-between">
            <div class="project-title text-uppercase text-h5 text-xl-h4 mb-6">project title:</div>
            <div class="project-title text-uppercase text-h5 text-xl-h4 mb-6 font-weight-light">тени тевтонов</div>
          </div>
          <div class="d-flex justify-space-between mt-2">
            <div class="project-title text-uppercase text-h5 text-xl-h4 mb-6">client:</div>
            <div v-if="$vuetify.theme.dark" class="project-title text-uppercase text-h5 text-xl-h4 mb-6 font-weight-light"><img class="storytel" src="/img/storytel_logo_white.svg" alt=""></div>
            <div v-else class="project-title text-uppercase text-h5 text-xl-h4 mb-6 font-weight-light"><img class="storytel" src="/img/storytel_logo.svg" alt=""></div>
          </div>
        </v-col>

        <v-spacer sm="2"></v-spacer>

        <v-col col="12" sm="5">
          <div class="d-flex flex-row justify-space-between">
            <div class="info-text project-title text-uppercase text-h5 text-xl-h4">project info: 
              <span class="ml-12 text-uppercase text-justify text-caption text-xl-h6">A SERIES OF BOOK COVERS AND PRODUCTION VIDEO/TRAILER FOR A FAMOUS WRITER NAMED ALEXEY IVANOV FOR HIS NEW ACTION AUDIO-BOOK ABOUT TWO.</span>
            </div>
          </div>
        </v-col>
     </v-row>
   </v-container>

  <Pic src="/img/Soldierback1.jpg?nf_resize=fit&w=3000" lazy-src="/img/Soldierback1.jpg?nf_resize=fit&w=500" />

  </div>

</v-main>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import TTlogo from '~/components/TTlogo.vue'
import SideLinks from '~/components/SideLinks.vue'
import Pic from '~/components/Pic.vue'

export default {
  components: { Navbar, TTlogo, SideLinks, Pic },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.content {
  height: 1000px;
  padding-top: 1rem;
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
}

@media screen and (min-width: 1906px) {
  .storytel {
    width: 280px;
  }
}

</style>
