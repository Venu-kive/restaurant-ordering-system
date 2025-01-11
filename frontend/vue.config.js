const { defineConfig } = require('@vue/cli-service');

const path = require('path');

module.exports = {
  // Adjust output directory (default is 'dist')
  outputDir: path.resolve(__dirname, 'dist'),

  // Dev server proxy configuration
  devServer: {
    proxy: {
      '/ws': {
        target: 'https://restaurant-ordering-system-backend-b93k.onrender.com',
        changeOrigin: true,
        ws: true
      }
    }    
  }
};
