<template>
<!-- <div class="pt-md-4 px-md-5">
    <img v-if="$vuetify.theme.dark" src="/img/logo_white.svg" alt="">
    <img v-else src="/img/logo.svg" alt="">
</div> -->
<div>
    <div class="box">
        <img v-if="this.$vuetify.theme.dark" src="/img/twenty_white.png" alt="">
        <img v-else src="/img/twenty.png" alt="">
        <p class="logo-text">twenty twos <span>art&design agency</span></p>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    img {
        width: 21vw;
        height: 100%;
        //margin-top: .4vh;
        margin-right: 1vw;
    }
}
.logo-text {
    font-size: 10vw;
    line-height: 90%;
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: bold;
    margin-bottom: 0;
    span {
        display: none;
    }
}
@media screen and (min-width: 960px) {
    .box {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        img {
            width: 10.5vw;
            height: 100%;
            //margin-top: 3px;
            margin-right: 1vw;
        }
    }
    .logo-text {
        font-size: 4.6vw;
        line-height: 90%;
        text-transform: uppercase;
        white-space: nowrap;
        font-weight: bold;
        margin-bottom: 0;
        span {
            display: inline;
            font-weight: normal;
        }
    }
}

</style>
