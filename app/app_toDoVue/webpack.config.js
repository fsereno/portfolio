module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'js'),
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  }
};