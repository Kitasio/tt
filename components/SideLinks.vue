<template> 
 <div id="icons">
  <v-card tile flat v-for="icon in icons" :key="icon.name" :style="icon.width">
    <a v-if="$vuetify.theme.dark" :href="icon.url"><img :src="icon.src_dark" :alt="icon.name"></a>
    <a v-else :href="icon.url"><img :src="icon.src" :alt="icon.name" ></a>
  </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                {name: 'tg', src: '/img/tg.svg', src_dark: '/img/tg_white.svg', width: 'width: 30px;', url: '#'},
                {name: 'behance', src: '/img/beh.svg', src_dark: '/img/beh_white.svg', width: 'width: 43px;', url: 'https://www.behance.net/TwentyTwos'},
                {name: 'instagram', src: '/img/ins.svg', src_dark: '/img/ins_white.svg', url: 'https://www.instagram.com/20_twos/?igshid=15n3ozy3avcw'},
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
            width: 70%;
            //min-width: 100%;
        }
    }
}
@media only screen and (min-width: 600px) {
    #icons {
        div {
            img {
                width: 100%;
            }
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
