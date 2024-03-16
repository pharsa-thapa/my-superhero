// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Superhero, User } = initSchema(schema);

export {
  Superhero,
  User
};