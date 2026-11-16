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
- The start page compares MailSimple with other mail apps. Its content (advantages, statements about other apps, limitations) lives only in `src/comparisonData.ts`. Every statement about another app needs a source link to the vendor's own help page, pricing page, or App Store listing. Leave out what cannot be verified. Bump `comparisonCheckedOn` whenever a statement is added or checked again, and recheck all sources before each app release.
- Keep the start page plain enough for readers without technical knowledge: short sentences, everyday words, technical terms only with an explanation.
- MailSimple is currently free. Do not promise "free forever" or "never a subscription" on the site; a paid model may come later.
- Colors come from the semantic tokens in `src/styles/global.css`; no raw color values in pages.
- Open item: postal address of the responsible person is not published yet (pending advice).
