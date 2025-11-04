
// IMPORTANT: replace 'idwkcjhdbchwdcnascjdsv.67.41.com' with your final hostname
const CANONICAL_HOST = 'idwkcjhdbchwdcnascjdsv.67.41.com';
const PORTAL_COOKIE = 'portal_access';

// when granting the cookie:
res.cookie(PORTAL_COOKIE, '1', {
  maxAge: 1000 * 60 * 30,
  httpOnly: true,
  secure: true,             // requires HTTPS in production
  sameSite: 'Lax',
  domain: CANONICAL_HOST    // set the cookie domain explicitly if needed
});

// middleware to enforce canonical host (optional)
app.use((req, res, next) => {
  const host = req.headers.host && req.headers.host.split(':')[0];
  if(host && host !== CANONICAL_HOST){
    // redirect to canonical host, preserving path
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
  }
  next();
});
server.js
