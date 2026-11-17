import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {itITLocale} from '@sanity/locale-it-it'
import {schemaTypes} from './schemas'
import {struttura} from './struttura'

export default defineConfig({
  name: 'samsara',
  title: 'Samsara Riccione',
  projectId: '2i09neph',
  dataset: 'production',
  plugins: [structureTool({structure: struttura}), itITLocale()],
  schema: {types: schemaTypes},
})
