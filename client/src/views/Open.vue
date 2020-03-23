<template>
  <div class="open main-block">
    <md-card>
      <md-card-header>
        <Title
          title="Chat App"
          text="Fill in the field with the hash of the chat you wnat to open"
        ></Title>
      </md-card-header>
      <md-card-content>
        <md-field :class="fieldClass()">
          <label>chat hash</label>
          <md-input v-model.trim="hash"></md-input>
          <span class="md-error">wrong hash</span>
        </md-field>
      </md-card-content>
      <md-card-actions class="open__buttons">
        <md-button @click="openChat()" class="md-raised">Open</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "Open",
  components: {
    Title
  },
  data() {
    return {
      hash: "",
      invalidHash: false
    };
  },
  methods: {
    fieldClass() {
      return this.invalidHash ? "md-invalid" : "";
    },
    openChat() {
      if (this.hash) {
        console.log("find hash");
        return;
      }

      this.invalidHash = true;
    }
  },
  watch: {
    hash() {
      if (this.invalidHash && this.hash) {
        this.invalidHash = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.open {
  &__buttons {
    justify-content: center;
  }
}
</style>
