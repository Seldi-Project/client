const {
  createProxyMiddleware: proxy
} = require('http-proxy-middleware')

module.exports = app => {
  app.use(
     '/api',
     (req, res, next) => {
        if (req && req.headers && req.headers.origin) {
           delete req.headers.origin
        }

        next()
     }
  )

  app.use('/api', proxy({
     target: 'http://13.124.200.36:8080'
  }))
}