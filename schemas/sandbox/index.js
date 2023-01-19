//Singletons
import { inputs } from './inputs';
import { sandbox } from './sandbox';
import { commonSchemas } from './commonSchemas';
//Component Dependencies
import { componentDependencies } from './componentDependencies';

export const sandboxTypes = [
  //Singletons
  sandbox,
  inputs,
  commonSchemas,

  //Documents

  //Dependencies
  ...componentDependencies,
];
