# Security Verification & Best Practices

This document outlines security verification steps and best practices for the BASSMANUEL website.

## Security Headers Configuration

The site uses comprehensive security headers configured in `next.config.ts`:

- **Content Security Policy (CSP)**: Prevents XSS attacks by controlling which resources can be loaded
- **Strict-Transport-Security (HSTS)**: Enforces HTTPS connections
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **Referrer-Policy**: Controls referrer information in requests
- **Permissions-Policy**: Restricts access to browser features
- **X-XSS-Protection**: Activates browser XSS filters

## Security Verification Steps

### 1. Dependency Security Audits

Run security audits before deploying:

```bash
# Check for vulnerabilities in dependencies
pnpm audit

# Fix vulnerabilities automatically
pnpm audit --fix

# Check only production dependencies
pnpm audit --prod
```

**Note on Dev Dependency Vulnerabilities**: The `braces` package (v3.0.3) has a known high-severity vulnerability (GHSA-vfj7-8cjw-p6xm) but is only used in development via ESLint. This does not affect production builds. The version is pinned via pnpm overrides in package.json to ensure consistency when a patched version becomes available.

### 2. Build Verification

Always build and test before deploying:

```bash
# Lint the code
pnpm lint

# Build the production bundle
pnpm build

# Start production server
pnpm start
```

### 3. Environment Variable Validation

Ensure environment variables are properly configured:

```bash
# Copy the example file
cp .env.example .env.local

# Fill in required values
# Never commit .env.local files with secrets
```

### 4. CSP Testing

Test the Content Security Policy:

1. Use browser developer tools to check for CSP violations
2. Report CSP violations using the configured report-uri endpoint
3. Monitor `/api/csp-report` for violations in production

### 5. Security Headers Testing

Verify security headers are properly set:

```bash
# Use curl to check headers
curl -I https://bassmanuel.com

# Expected headers should include:
# - Content-Security-Policy
# - Strict-Transport-Security
# - X-Frame-Options
# - X-Content-Type-Options
# - Referrer-Policy
# - Permissions-Policy
```

## Security Best Practices

### Development

1. **Never commit secrets**: Use `.env.local` for local development secrets
2. **Keep dependencies updated**: Run `pnpm audit` regularly
3. **Use strong CSP**: The CSP in `next.config.ts` is configured for security
4. **Avoid inline scripts**: The JSON-LD script uses nonce for CSP compliance
5. **Validate all inputs**: Always validate user inputs and data from external sources

### Production

1. **Use HTTPS**: Always deploy with HTTPS (HSTS header enforces this)
2. **Secure environment variables**: Use Vercel Environment Variables or similar
3. **Monitor security headers**: Regularly verify headers are being served correctly
4. **Update dependencies**: Apply security patches promptly
5. **Review CSP reports**: Monitor and respond to CSP violation reports

### Image Security

- Images are optimized to AVIF and WebP formats
- Only trusted domains (YouTube) are allowed for remote images
- SVG files are not allowed to prevent XSS via SVG
- Image optimization is enabled

### Third-Party Integrations

The site integrates with:

- YouTube (for video embeds)
- Social media platforms (Facebook, Instagram, TikTok, WhatsApp)

All external links use `rel="noopener noreferrer"` to prevent tabnabbing attacks.

## Regular Security Maintenance

### Weekly

- Run `pnpm audit` to check for new vulnerabilities
- Review CSP violation reports (if any)

### Monthly

- Update dependencies to latest secure versions
- Review and update security headers if needed
- Check for new security best practices

### Quarterly

- Conduct full security audit
- Review and rotate secrets if applicable
- Update security documentation

## Security Contact

Security issues should be reported via the security.txt file at:
`/.well-known/security.txt`

Contact: mailto:ariseemmanuel23@gmail.com

## Important Files

- `next.config.ts` - Security headers and CSP configuration
- `.env.example` - Environment variable template
- `src/lib/env.ts` - Environment variable validation utilities
- `.well-known/security.txt` - Security disclosure policy
- `.gitignore` - Ensures secrets are not committed

## Build Commands

```bash
# Development
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint

# Security audit
pnpm audit
```

## Additional Security Resources

- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Level 3](https://www.w3.org/TR/CSP3/)
