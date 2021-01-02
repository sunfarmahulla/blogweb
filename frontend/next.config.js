const withCSS = require('@zeit/next-css');

module.exports = {
    publicRuntimeConfig: {
        APP_NAME: 'SEOBLOG',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTION: 'https://seoblog.com/api',
        PRODUCTION:false,
        DOMAIN_DEVELOPMENT: 'https://localhost:3000',
        DOMAIN_PRODUCTION: 'https://seoblog.com',
        DISQUS_SHORTNAME: 'seoblog-yqw9urz9yd',
        DOMAIN_DISQUS: 'localhost:3000'
    }
};