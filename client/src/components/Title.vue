<template>
  <div class="title">
    <h1 class="title__title">{{ title }}</h1>
    <p class="title__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.title {
  &__title {
    text-align: center;
    margin-bottom: 10px;
  }
  &__text {
    text-align: center;
  }
}
</style>
