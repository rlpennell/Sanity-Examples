import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {sandboxTypes} from './schemas/sandbox'

export default defineConfig({
  name: 'default',
  title: 'sandbox',

  projectId: 'k8p6uw8a',
  dataset: 'sandbox',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: sandboxTypes,
  },
})
