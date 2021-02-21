<template>
<v-card flat tile class="d-flex justify-space-between px-md-5 text-md-h5 text-xl-h4">
    <v-card @mouseenter="borderAnim1" id="links" flat tile class="font-weight-light text-uppercase">portfolio
        <div class="navs1 info" style="height: 2px; top: 0%; position: absolute; width: 100%;"></div>
    </v-card>
    <v-card @mouseenter="borderAnim2" id="links" flat tile class="font-weight-light text-uppercase">courses
        <div class="navs2 info" style="height: 2px; top: 0%; position: absolute; width: 100%;"></div>
    </v-card>
    <v-card @mouseenter="borderAnim3" id="links" flat tile class="font-weight-light text-uppercase">about us
        <div class="navs3 info" style="height: 2px; top: 0%; position: absolute; width: 100%;"></div>
    </v-card>
</v-card>
</template>

<script>
import { gsap } from "gsap"

export default {
    methods: {
        borderAnim1: function(e) {
            let navs1 = gsap.timeline()
            navs1.to(".navs1", {duration: .7, y: 25, opacity: 1})
            navs1.set(".navs1", {y: 0})
        },
        borderAnim2: function(e) {
            let navs1 = gsap.timeline()
            navs1.to(".navs2", {duration: .7, y: 25, opacity: 1})
            navs1.set(".navs2", {y: 0})
        },
        borderAnim3: function(e) {
            let navs1 = gsap.timeline()
            navs1.to(".navs3", {duration: .7, y: 25, opacity: 1})
            navs1.set(".navs3", {y: 0})
        },
    }
}
</script>


<style lang="scss">
#no-background-hover::before {
   background-color: transparent !important;
}
#links {
    cursor: pointer;
}
</style>