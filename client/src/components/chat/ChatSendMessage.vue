<template>
  <md-card class="send">
    <input
      class="send__input"
      v-model="text"
      placeholder="Type message"
      type="text"
    />
    <md-button class="md-icon-button">
      <md-icon>send</md-icon>
    </md-button>
  </md-card>
</template>

<script>
export default {
  name: "ChatSendMessage",
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style scoped lang="scss">
.send {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  &__input {
    border: none;
    width: calc(100% - 50px);
    height: 40px;
    padding: 4px 10px;
    outline: none;
  }
}
</style>
