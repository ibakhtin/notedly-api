import { GraphQLDateTime } from 'graphql-iso-date';

import { Mutation } from './mutation';
import { Query } from './query';
import Note from './note';
import User from './user';

export default {
  DateTime: GraphQLDateTime,
  Mutation,
  Query,
  Note,
  User
};
