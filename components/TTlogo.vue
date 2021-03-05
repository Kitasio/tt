<template>
<div class="pt-md-4 px-md-5" height="100">
    <picture v-if="$vuetify.theme.dark">
        <source media="(min-width: 600px)" srcset="/img/logo_white.svg">
        <img src="/img/mobile_white.svg" alt="">
    </picture>
    <picture v-else>
        <source media="(min-width: 600px)" srcset="/img/logo.svg">
        <img src="/img/mobile.svg" alt="">
    </picture>
    <!-- <img v-if="$vuetify.theme.dark" src="/img/logo_white.svg" srcset="/img/mobile_white.svg 320w" alt="">
    <img v-else src="/img/mobile.svg" srcset="/img/mobile.svg 320w, /img/logo.svg 600w" alt=""> -->
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
