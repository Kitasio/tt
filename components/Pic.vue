<template>
    <v-img
      :lazy-src="lazySrc"
      :src="src"
      aspect-ratio="16/9"
    >
    <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
</template>

<script>
export default {
    props: ['src', 'lazySrc']
}
</script>

<style lang="scss" scoped>

</style>