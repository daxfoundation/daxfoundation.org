# DAX Foundation Website Deployment

## Current Status
- Website built and tested locally
- All files committed to the daxfoundation-build repository
- Ready for deployment to GitHub and Cloudflare

## Push to GitHub

The repo is ready to push. Run from a terminal on the machine where git credentials are configured:

```bash
cd /tmp/daxfoundation-build
git push origin main
```

Or with the PAT token:
```bash
cd /tmp/daxfoundation-build
git config user.email "skippy@daxfoundation.org"
git config user.name "Skippy"
git remote set-url origin "https://<YOUR_TOKEN>@github.com/daxfoundation/daxfoundation.org.git"
git push origin main -u
```

## Deploy to Cloudflare Pages

After pushing to GitHub:

1. **Option A: Connect GitHub to Cloudflare Pages**
   - Go to Cloudflare Dashboard
   - Pages > Create application > Connect to Git
   - Select `daxfoundation/daxfoundation.org`
   - Build settings:
     - Framework: Astro
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Deploy

2. **Option B: Direct upload to Cloudflare Pages**
   ```bash
   npm install -g wrangler
   wrangler pages deploy dist/
   ```

## DNS Configuration

Make sure daxfoundation.org DNS points to Cloudflare:
- Zone ID: `<ZONE_ID>`
- Nameservers should be Cloudflare's nameservers

## Verification

Once deployed:
- Visit https://daxfoundation.org
- Check that the hero section appears with correct DAX branding
- Verify the three initiatives (EdDAX, NovaDax, SkippyDAX) are visible
- Confirm links to GitHub and Open Collective work

## Site Structure

- `/` - Main landing page with hero, mission, three initiatives, CTA
- `/privacy` - Privacy policy (from template)
- `/blog` - Blog section (disabled in config, can enable later)
- `/robots.txt` - SEO
- `/sitemap-index.xml` - Sitemap

