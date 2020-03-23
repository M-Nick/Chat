const url = link => `http://localhost:3000/api/v1${link}`;

export default {
  async get(link) {
    try {
      const response = await fetch(url(link));
      return await response.json();
    } catch (e) {
      return e;
    }
  },

  async post(link, body) {
    const urlencoded = new URLSearchParams();
    Object.keys(body).forEach(key => urlencoded.append(key, body[key]));
    try {
      const response = await fetch(url(link), {
        method: "POST",
        body: urlencoded
      });
      return await response.json();
    } catch (e) {
      return e;
    }
  },

  async openChat(hash) {
    return await this.get(`/chats/hash/${hash}`);
  },

  async createChat(chat) {
    return await this.post("/chats", chat);
  }
};
