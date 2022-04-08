import { join } from 'path';
import sourcebitSourceFilesystem from 'sourcebit-source-filesystem';
import sourcebitTargetNext from 'sourcebit-target-next';

export default {
  plugins: [
    {
      module: sourcebitSourceFilesystem,
      options: {
        watch: false,
        sources: [{ name: 'content', path: join(__dirname, 'content') }]
      }
    },
    {
      module: sourcebitTargetNext,
      options: { flattenAssetUrls: true }
    }
  ]
};
