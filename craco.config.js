const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@commons': path.resolve(__dirname, 'src/commons'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
};
