<template>
  <div class="message" :class="messageClass()">
    <p class="message__author">{{ message.memberName }}</p>
    <p class="message__text">{{ message.text }}</p>
    <p class="message__date">{{ message.date }}</p>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    message: {
      type: Object,
      default: () => ({ text: "", memberName: "", date: "", mine: false })
    }
  },
  data() {
    return {};
  },
  methods: {
    messageClass() {
      return this.message && this.message.mine ? "message--mine" : "";
    }
  }
};
</script>

<style scoped lang="scss">
.message {
  width: 85%;
  margin: 10px 0;
  &--mine {
    align-self: flex-end;
    text-align: right;
  }
  &__author {
    color: rgb(39, 39, 180);
    font-weight: bold;
    font-size: 12px;
  }
  &__text {
    text-align: justify;
    background-color: rgb(240, 240, 240);
    border-radius: 8px;
    padding: 4px 10px;
  }
  &__date {
    color: grey;
    font-size: 12px;
  }
}
</style>
