const path = require('path');

require('dotenv').config();

module.exports = {
  env: {
    // 'API_HOST': process.env.API_HOST || 'http://localhost:8000',
  },
  webpack(config, {}) {
    config.resolve.alias['src'] = path.join(__dirname, '/src');
    return config
  },
};
