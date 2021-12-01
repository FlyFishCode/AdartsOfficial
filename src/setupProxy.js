const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware(
        '/rpi', {
            target: 'http://adartstest.adarts-cn.com:9090/website',
            // target: 'http://127.0.0.1:9101/website', // 正式
            changeOrigin: true,
            pathRewrite: {
                '^/rpi': ''
            },
        }));
    app.use(createProxyMiddleware(
        '/rps', {
            target: 'http://adartstest.adarts-cn.com:9090/web',
            // target: 'http://127.0.0.1:9101/web', // 正式
            changeOrigin: true,
            pathRewrite: {
                '^/rps': ''
            },
        }));
};