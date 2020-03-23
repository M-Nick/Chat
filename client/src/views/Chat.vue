<template>
  <div class="main-block chat">
    <div class="chat__info">
      <ChatMembers class="chat__members" />
    </div>
    <div class="chat__messaging">
      <ChatLink class="chat__link" />
      <ChatMessages class="chat__messages" />
      <ChatSendMessage class="chat__send" />
    </div>
  </div>
</template>

<script>
import ChatMembers from "@/components/chat/ChatMembers.vue";
import ChatMessages from "@/components/chat/ChatMessages.vue";
import ChatSendMessage from "@/components/chat/ChatSendMessage.vue";
import ChatLink from "@/components/chat/ChatLink.vue";

export default {
  name: "Chat",
  components: {
    ChatMembers,
    ChatMessages,
    ChatSendMessage,
    ChatLink
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.chat {
  width: 800px;
  display: flex;
  justify-content: space-between;
  --col-height: calc(100vh - 10px - 30px);
  &__info {
    width: 195px;
    height: var(--col-height);
  }
  &__members {
    height: 30px;
  }
  &__messaging {
    width: 595px;
    height: var(--col-height);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__link {
    height: 60px;
  }
  &__messages {
    height: calc(100% - 70px - 70px);
  }
  &__send {
    height: 60px;
  }
}
</style>
