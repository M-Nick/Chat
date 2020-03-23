<template>
  <md-card>
    <md-card-actions class="card__content">
      <p class="link__class">chat hash: aoaisdfoiuho</p>
      <md-button class="md-icon-button">
        <md-icon>file_copy</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "ChatLink",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.card {
  &__content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
