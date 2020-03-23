'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'Message',
    {
      text: DataTypes.TEXT,
    },
    {},
  );
  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.Chat);
    Message.belongsTo(models.Member);
  };
  return Message;
};
