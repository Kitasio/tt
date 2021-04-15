<template>
<v-card flat tile class="d-flex justify-space-between mt-3 px-md-5 text-md-h5 text-xl-h4">
    <NuxtLink to="/portfolio">
        <v-card @mouseenter="borderAnim1" id="links" flat tile class="font-weight-light text-uppercase">portfolio
            <div class="navs1 line info"></div>
        </v-card>
    </NuxtLink>
    <!-- <v-card @mouseenter="borderAnim2" id="links" flat tile class="font-weight-light text-uppercase">courses
        <div class="navs2 line info"></div>
    </v-card> -->
    <NuxtLink to="/about">
    <v-card @mouseenter="borderAnim3" id="links" flat tile class="font-weight-light text-uppercase">about us
        <div class="navs3 line info"></div>
    </v-card>
    </NuxtLink>
</v-card>
</template>

<script>
import { gsap } from "gsap"

export default {
    methods: {
        borderAnim1: function(e) {
            if (window.innerWidth > 1900) {
                let navs1 = gsap.timeline()
                navs1.to(".navs1", {duration: .9, top: 40, opacity: 1})
                navs1.set(".navs1", {top: 0})
            } else {
                let navs1 = gsap.timeline()
                navs1.to(".navs1", {duration: .7, top: 25, opacity: 1})
                navs1.set(".navs1", {top: 0})
            }
        },
        borderAnim2: function(e) {
            if (window.innerWidth > 1900) {
                let navs1 = gsap.timeline()
                navs1.to(".navs2", {duration: .9, top: 40, opacity: 1})
                navs1.set(".navs2", {top: 0})
            } else {
                let navs1 = gsap.timeline()
                navs1.to(".navs2", {duration: .7, top: 25, opacity: 1})
                navs1.set(".navs2", {top: 0})
            }
        },
        borderAnim3: function(e) {
            if (window.innerWidth > 1900) {
                let navs1 = gsap.timeline()
                navs1.to(".navs3", {duration: .9, top: 40, opacity: 1})
                navs1.set(".navs3", {top: 0})
            } else {
                let navs1 = gsap.timeline()
                navs1.to(".navs3", {duration: .7, top: 25, opacity: 1})
                navs1.set(".navs3", {top: 0})
            }
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
.line {
   position: absolute; 
   height: 5%; 
   top: 0%; 
   width: 100%;
}
</style>