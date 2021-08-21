const { GraphQLDateTime } = require('graphql-iso-date');

const Mutation = require('./mutation');
const Query = require('./query');
const Note = require('./note');
const User = require('./user');

module.exports = {
  DateTime: GraphQLDateTime,
  Mutation,
  Query,
  Note,
  User
};
