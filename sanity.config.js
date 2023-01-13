import { theme } from 'https://themer.sanity.build/api/hues?default=069292&primary=09d1d2;300&transparent=395f5f;600&positive=43d675;300&caution=fbd024;200&lightest=fcfdfd&darkest=0d1515';

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { sandboxTypes } from './schemas/sandbox';
import { singletonPlugin, structure } from './plugins/settings';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  theme,
  basePath: '/studio',
  name: 'default',
  title: 'sandbox',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
    singletonPlugin(['sandbox', 'inputs']),
  ],
  studio: {
    components: {},
  },

  schema: {
    types: sandboxTypes,
  },
});
