import api from "@/api/index.js";

export default {
  namespaced: true,
  state: {
    hash: ""
  },
  actions: {
    async createChat({ commit }, { name, membersCount }) {
      const chat = await api.createChat({ name, membersCount });

      if (chat) {
        commit("setChat", { chat });
      }
    }
  },
  mutations: {
    setChat(state, { chat }) {
      state.hash = chat.hash;
    }
  },
  getters: {
    getHash: state => state.hash
  }
};
