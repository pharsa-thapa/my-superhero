// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Superhero } = initSchema(schema);

export {
  Superhero
};