export const CSP_POLICY = {
  'default-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https:", "data:", "blob:"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https:",
    "blob:",
    "https://cdn.jsdelivr.net",
    "https://unpkg.com"
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    "https:",
    "*.googleapis.com",
    "fonts.googleapis.com"
  ],
  'img-src': ["'self'", "data:", "https:", "blob:"],
  'font-src': [
    "'self'",
    "data:",
    "https:",
    "fonts.gstatic.com"
  ],
  'connect-src': ["'self'", "https:", "wss:", "blob:"],
  'media-src': ["'self'", "https:", "blob:"],
  'frame-src': ["'self'", "https:"],
  'worker-src': ["'self'", "blob:"],
  'child-src': ["'self'", "blob:"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
}; 