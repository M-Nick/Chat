<template>
  <form novalidate @submit.prevent="validateChat" class="main-block">
    <md-card>
      <md-card-header>
        <Title title="Chat App" text="Create new chat" />
      </md-card-header>
      <md-card-content>
        <md-field :class="getValidationClass('name')">
          <label>Chat name</label>
          <md-input v-model.trim="name"></md-input>
          <span class="md-error" v-if="!$v.name.required"
            >Name is required</span
          >
          <span
            class="md-error"
            v-else-if="!$v.name.minlength || !$v.name.maxlength"
            >Name must consist of {{ $v.name.$params.minLength.min }} -
            {{ $v.name.$params.maxLength.max }} letters</span
          >
        </md-field>
        <md-field :class="getValidationClass('membersCount')">
          <label>Members count</label>
          <md-input v-model="membersCount"></md-input>
          <span class="md-error" v-if="!$v.name.required"
            >Count of members is required</span
          >
          <span class="md-error" v-else-if="!$v.name.minlength"
            >Count of members must be from
            {{ $v.membersCount.$params.between.min }} to
            {{ $v.membersCount.$params.between.max }}</span
          >
        </md-field>
      </md-card-content>
      <md-card-actions class="create__buttons">
        <md-button type="submit" class="md-raised">Create</md-button>
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
import { mapGetters } from "vuex";

export default {
  name: "Create",
  components: {
    Title
  },
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      membersCount: ""
    };
  },
  computed: {
    ...mapGetters("chat", ["getHash"])
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(30)
    },
    membersCount: {
      required,
      between: between(2, 8)
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    createChat() {
      this.$store.dispatch("chat/createChat", {
        name: this.name,
        membersCount: this.membersCount
      });
    },
    validateChat() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.createChat();
      }
      this.$forceUpdate();
    }
  },
  watch: {
    getHash(newValue) {
      if (newValue) {
        this.$router.push({ name: "SetUser" });
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
