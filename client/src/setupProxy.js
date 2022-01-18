const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware(["/api", "/api/auth/register"], { target: "http://localhost:5000" })
    );
};