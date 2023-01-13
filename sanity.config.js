import { theme } from 'https://themer.sanity.build/api/hues?default=069292&primary=09d1d2;300&transparent=395f5f;600&positive=43d675;300&caution=fbd024;200&lightest=fcfdfd&darkest=0d1515';

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { sandboxTypes } from './lib/sandbox/schemas';
import { structure } from './lib/sandbox/src/desk';
import { resolveActions } from './lib/sandbox/src/resolveActions';
import { resolveTemplates } from './lib/sandbox/src/resolveTemplates';

export default defineConfig({
  theme,
  name: 'default',
  title: 'sandbox',

  projectId: 'k8p6uw8a',
  dataset: 'sandbox',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
  ],
  studio: {
    components: {},
  },

  document: {
    actions: resolveActions,
  },
  schema: {
    types: sandboxTypes,
    templates: resolveTemplates,
  },
});
