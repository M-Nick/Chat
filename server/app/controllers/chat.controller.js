const db = require('../models');
const hashGenerator = require('../helpers/generateHash');

const Chat = db.Chat;
const Op = db.Sequelize.Op;
// Create and Save a new Chat
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
      name: req.body.name,
    });
    return;
  }
  const hash = hashGenerator();
  // Create a Chat
  const chat = {
    name: req.body.name,
    membersCount: req.body.membersCount,
    hash: hash,
  };

  // Save Chat in the database
  Chat.create(chat)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Chat.',
      });
    });
};

// Retrieve all Chats from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  Chat.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Chats.',
      });
    });
};

// Find a single Chat with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Chat.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Chat with id=' + id,
      });
    });
};
