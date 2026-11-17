import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {projectId: '2i09neph', dataset: 'production'},
  studioHost: 'samsara-riccione',
  deployment: {autoUpdates: true},
})
