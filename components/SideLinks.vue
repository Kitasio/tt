<template>
<div id="icons">
  <v-card tile flat v-for="icon in icons" :key="icon.name">
    <img v-if="$vuetify.theme.dark" :src="icon.src_dark" :alt="icon.name">
    <img v-else :src="icon.src" :alt="icon.name">
  </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                {name: 'tg', src: '/img/tg.svg', src_dark: '/img/tg_white.svg'},
                {name: 'behance', src: '/img/beh.svg', src_dark: '/img/beh_white.svg'},
                {name: 'instagram', src: '/img/ins.svg', src_dark: '/img/ins_white.svg'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
#icons {
    position: fixed;
    left: 3%;
    bottom: 3%;
    display: flex;
    flex-direction: row;
    div {
        margin-right: 15px;
        cursor: pointer;
        img {
            width: 30px;
            min-width: 100%;
        }
    }
}
@media only screen and (min-width: 1904px) {
    #icons div {
        margin-right: 45px;
        img {
            min-width: 150%;
        }
    }
}
</style>
