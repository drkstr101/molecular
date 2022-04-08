const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

/**
 * converts { __metadata, frontmatter, markdown }
 * to { __metadata, ...frontmater, content: markdown }
 */
function flattenMarkdownData() {
  return ({ data }) => {
    const objects = data.objects.map((model) => {
      if ('frontmatter' in model) {
        return {
          __metadata: model.__metadata,
          ...model.frontmatter,
          content: model.markdown ?? null
        };
      }
      return model;
    });

    return {
      ...data,
      objects
    };
  };
}

module.exports = {
  plugins: [
    {
      module: require('sourcebit-source-filesystem'),
      options: {
        watch: isDev,
        sources: [{ name: 'content', path: path.join(__dirname, 'content') }]
      }
    },

    {
      module: require('sourcebit-target-next'),
      options: { flattenAssetUrls: true }
    },

    flattenMarkdownData()
  ]
};
