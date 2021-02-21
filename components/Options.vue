<template>
  <div id="options" class="d-flex flex-row align-center">
      <v-card tile flat class="text-uppercase text-md-h5 text-xl-h4 font-weight-light pa-2 pt-3 mr-5">send request</v-card>
      <v-card tile flat class="text-uppercase text-md-h6 text-xl-h5 font-weight-bold pt-1">ru</v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#options {
    z-index: 100;
    position: fixed;
    right: 3%;
    bottom: 3%;
    div {
        cursor: pointer;
    }
}
</style>