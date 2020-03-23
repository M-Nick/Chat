'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    'Member',
    {
      name: DataTypes.STRING,
    },
    {},
  );
  Member.associate = function(models) {
    // associations can be defined here
    Member.belongsTo(models.Chat);
    Member.hasMany(models.Message, { as: 'messages' });
  };
  return Member;
};
