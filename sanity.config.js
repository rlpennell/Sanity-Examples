import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { sandboxTypes } from './schemas/sandbox';
import { singletonPlugin, structure } from './plugins/settings';
import { theme } from './plugins/theme';
import { ecommerceTypes } from './schemas/ecommerce';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const sharedConfig = {
  projectId,
  dataset,
};

export default defineConfig([
  {
    ...sharedConfig,
    theme,
    basePath: '/studio/sandbox',
    name: 'default',
    title: 'sandbox',
    plugins: [
      deskTool({
        structure,
      }),
      visionTool(),
      singletonPlugin(['sandbox', 'inputs', 'commonSchemas']),
      codeInput(),
    ],
    studio: {
      components: {},
    },

    schema: {
      types: sandboxTypes,
    },
    document: {
      productionUrl: async (prev, { document }) =>
        `http://localhost:3000/preview/${document?.slug?.current}`,
    },
  },
  {
    ...sharedConfig,
    theme,
    basePath: '/studio/ecommerce',
    name: 'ecommerce',
    title: 'Ecommerce',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: ecommerceTypes,
    },
  },
]);
