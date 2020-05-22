process.on('uncaughtException', (error) => {
  console.error(error);
});

module.exports = {
  '/applets/demo': {
    changeOrigin: true,
    secure: false,
    target: 'http://localhost:24201',
    pathRewrite: {
      '^/applets/demo': '',
    },
  },
}
