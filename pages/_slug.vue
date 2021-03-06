<template>
  <v-main>
    <div>
      <nuxt-content :document="post" />
    </div>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
    } catch (e) {
      error({ message: "Blog Post not found" });
    }
    return {
      post,
    };
  },
};
</script>