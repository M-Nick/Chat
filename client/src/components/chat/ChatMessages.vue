<template>
  <md-card class="messages">
    <div class="messages__body">
      <Message
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
      />
    </div>
  </md-card>
</template>

<script>
import Message from "@/components/chat/ChatMessage.vue";

export default {
  name: "ChatMessages",
  components: {
    Message
  },
  data() {
    return {
      messages: [
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: true
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        },
        {
          text:
            "aldskf asdhfg kajs kjygi asdkjhg kiaysdg iakjhs   kasyd gf kjhasd ",
          memberName: "SLKdflksdj",
          date: "12.03.1995",
          mine: false
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.messages {
  overflow: auto;
  padding: 8px;
  &__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
