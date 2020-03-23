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

// Update a Chat by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Chat.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Chat was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Chat with id=${id}. Maybe Chat was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Chat with id=' + id,
      });
    });
};

// Delete a Chat with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Chat.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Chat was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Chat with id=${id}. Maybe Chat was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Chat with id=' + id,
      });
    });
};

// Delete all Chats from the database.
exports.deleteAll = (req, res) => {
  Chat.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Chats were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Chats.',
      });
    });
};
