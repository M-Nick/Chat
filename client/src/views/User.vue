<template>
  <form @submit.prevent="validateUser" class="main-block user">
    <md-card>
      <md-card-header>
        <Title
          title="Chat App"
          text="Write your user name to start chatting"
        ></Title>
      </md-card-header>
      <md-card-content>
        <md-field :class="getValidationClass()">
          <label>Username</label>
          <md-input v-model="username"></md-input>
          <span class="md-error" v-if="!$v.username.required"
            >Username is required</span
          >
          <span
            class="md-error"
            v-else-if="!$v.username.minlength || !$v.username.maxlength"
            >Username must consist of {{ $v.username.$params.minLength.min }} -
            {{ $v.username.$params.maxLength.max }} letters</span
          >
        </md-field>
      </md-card-content>
      <md-card-actions class="user__buttons">
        <md-button type="submit" class="md-raised">Crate user</md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>

<script>
import Title from "@/components/Title.vue";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  between
} from "vuelidate/lib/validators";

export default {
  name: "User",
  components: {
    Title
  },
  mixins: [validationMixin],
  data() {
    return {
      username: ""
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(30)
    }
  },
  methods: {
    getValidationClass() {
      if (this.$v.username) {
        return {
          "md-invalid": this.$v.username.$invalid && this.$v.username.$dirty
        };
      }
    },
    createUser() {
      console.log("user was created");
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.createUser();
      }
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped lang="scss">
.user {
  &__buttons {
    justify-content: center;
  }
}
</style>
