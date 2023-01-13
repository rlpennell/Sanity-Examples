import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { sandboxTypes } from './schemas/sandbox';
import { singletonPlugin, structure } from './plugins/settings';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
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
