import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
// @ts-ignore
import contactHandler from './api/contact.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      {
        name: 'dev-api-contact-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = ''
              req.on('data', (chunk) => {
                body += chunk
              })
              req.on('end', async () => {
                try {
                  const jsonBody = JSON.parse(body || '{}')
                  const mockReq = {
                    method: 'POST',
                    body: jsonBody,
                    headers: req.headers,
                  }
                  const mockRes = {
                    statusCode: 200,
                    status(code: number) {
                      this.statusCode = code
                      res.statusCode = code
                      return this
                    },
                    json(data: any) {
                      res.statusCode = this.statusCode || 200
                      res.setHeader('Content-Type', 'application/json')
                      res.end(JSON.stringify(data))
                      return this
                    },
                  }
                  await contactHandler(mockReq, mockRes)
                } catch (err: any) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ success: false, error: err.message }))
                }
              })
              return
            }
            next()
          })
        },
      },
    ],
  }
})
