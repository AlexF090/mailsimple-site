# mailsimple-site

Support page and privacy policy for the iOS app MailSimple, published with GitHub Pages:

- Start: https://alexf090.github.io/mailsimple-site/
- Support URL (App Store Connect): https://alexf090.github.io/mailsimple-site/support/
- Privacy policy URL (App Store Connect): https://alexf090.github.io/mailsimple-site/datenschutz/

## Development

```bash
pnpm install
pnpm dev      # local preview
pnpm build    # static build into dist/
```

Astro with Tailwind CSS (Vite plugin) and the typography plugin. Every push to `main` deploys through `.github/workflows/deploy.yml`.

## Editing rules

- Contact email, responsible person, and the "last updated" date of the privacy policy live only in `src/siteConfiguration.ts`.
- Update the privacy policy whenever the app changes how it handles data (new network endpoints, analytics, purchases), and bump `privacyPolicyLastUpdated`.
- Colors come from the semantic tokens in `src/styles/global.css`; no raw color values in pages.
- Open item: postal address of the responsible person is not published yet (pending advice).
