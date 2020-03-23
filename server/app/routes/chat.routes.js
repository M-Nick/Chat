module.exports = (app) => {
  const chats = require('../controllers/chat.controller.js');

  const router = require('express').Router();

  router.post('/', chats.create);
  router.get('/', chats.findAll);
  router.get('/:id', chats.findOne);

  app.use('/api/v1/chats', router);
};
