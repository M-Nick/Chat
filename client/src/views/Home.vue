<template>
  <div class="home main-block">
    <md-card>
      <md-card-header>
        <Title
          title="Chat App"
          text="Create new chat or open existing one with hash"
        />
      </md-card-header>
      <md-card-actions class="home__buttons">
        <md-button @click="createChat" class="md-raised">Create</md-button>
        <md-button @click="openChat" class="md-raised"
          >Open (with hash)</md-button
        >
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "Home",
  components: {
    Title
  },
  methods: {
    createChat() {
      this.$router.push({ name: "Create" });
    },
    openChat() {
      this.$router.push({ name: "Open" });
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  &__buttons {
    justify-content: center;
  }
}
</style>
