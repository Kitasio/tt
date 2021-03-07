<template>
  <v-main>
    <div>
      <iframe :src="project.link" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" width="100%" height="800px" frameborder="0" seamless></iframe>
      <nuxt-content :document="project" />
    </div>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let project;
    try {
      // project = await $content("project", params.slug).fetch();
      project = await $content(`project/${params.proj}`).fetch()
    } catch (e) {
      error({ message: "Blog project not found" });
    }
    return {
      project,
    };
  },
};
</script>