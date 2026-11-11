# EPC Marketing website

Current static website source synchronized from the Desktop working copy on 11 November 2026 (Asia/Kuala_Lumpur).

Includes HTML, CSS, JavaScript, images, videos, public resources, sitemap and robots.txt. Google Ads, Analytics and WhatsApp conversion tracking are retained.

## Local preview

From this folder, run:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080/ in your browser.

## Deployment and private files

Publishing this repository does not itself confirm a production hosting deployment. The private `.env` files, Vercel project/account configuration, temporary files and local credentials are excluded.

`snapshot-manifest.json` lists SHA-256 checksums of the public files synchronized from the Desktop source. Other previously committed assets remain available in repository history and the working tree.
