<template>
    <div>
      <nuxt-content :document="project" />
      <h2 v-for="p in project" :key="p.slug">{{ p.link }}</h2>
      helllooo
      <!-- <div style="height: 100vh;" v-for="i in project" :key="i.slug">
        {{ i.link }}
        <iframe :src="i.link" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" width="100%" height="800px" frameborder="0" seamless></iframe>
      </div> -->
    </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let project;
    try {
      project = await $content("project", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Project not found" });
    }

    return {
      project,
    };
  },
};
</script>