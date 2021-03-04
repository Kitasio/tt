<template>
<div class="pt-md-4 px-md-5">
    <img v-if="$vuetify.theme.dark" src="/img/logo_white.svg" alt="">
    <img v-else src="/img/logo.svg" alt="">
</div>
<!-- <div>
    <div>
        <p>twenty twos <span>art&design agency</span></p>
    </div>
</div> -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
div {
    line-height: 0;
}
img {
    width: 100%;
}
</style>
