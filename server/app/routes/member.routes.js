module.exports = (app) => {
  const chats = require('../controllers/member.controller.js');

  const router = require('express').Router();

  router.post('/', chats.create);
  router.get('/', chats.findAll);
  router.get('/:id', chats.findOne);
  router.put('/:id', chats.update);
  router.delete('/:id', chats.delete);
  router.delete('/', chats.deleteAll);

  app.use('/api/v1/members', router);
};
