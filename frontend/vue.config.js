const { defineConfig } = require('@vue/cli-service');

const path = require('path');

module.exports = {
  // Adjust output directory (default is 'dist')
  outputDir: path.resolve(__dirname, 'dist'),

  // Dev server proxy configuration
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8001', // Backend server
        changeOrigin: true, // Ensures correct Host header
        ws: true // Proxy websockets if needed
      }
    }
  }
};
