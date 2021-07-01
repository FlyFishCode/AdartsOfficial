const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware(
        '/rpi', {
            target: 'http://adartstest.adarts-cn.com:9090/website',
            changeOrigin: true,
            pathRewrite: {
                '^/rpi': ''
            },
        }));
    app.use(createProxyMiddleware(
        '/rps', {
            target: 'http://adartstest.adarts-cn.com:9090/web',
            changeOrigin: true,
            pathRewrite: {
                '^/rps': ''
            },
        }));
};