'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    'Chat',
    {
      name: DataTypes.STRING,
      hash: DataTypes.STRING,
      membersCount: DataTypes.INTEGER,
    },
    {},
  );
  Chat.associate = function(models) {
    // associations can be defined here
    Chat.hasMany(models.Member, { as: 'members' });
    Chat.hasMany(models.Message, { as: 'messages' });
  };
  return Chat;
};
