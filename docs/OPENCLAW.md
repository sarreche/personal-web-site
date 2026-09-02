# OpenClaw Personal: public OAuth information

The static Spanish pages `/openclaw` and `/openclaw/privacidad` describe Santiago Arreche's personal Gmail and Calendar integration. They do not implement OAuth, accept credentials, expose the local gateway, or change the Google Cloud project.

## Content and maintenance

- `data/openclaw-content.ts`: operator contact, revision date and privacy sections.
- `app/openclaw/page.tsx`: application purpose and supported use cases.
- `app/openclaw/privacidad/page.tsx`: policy and external reference links.
- `components/openclaw-page.tsx` and `components/openclaw.module.css`: shared server-rendered navigation, layout and scoped styles.

The description reflects the setup provided by the operator: local OpenClaw, gog's encrypted file keyring, Gmail and Calendar OAuth access, Gemini, OpenRouter/model providers, and Telegram. Actual provider retention, model-training settings and deletion schedules have not been independently audited. Before publication, the operator should confirm that the policy describes the real installation and that provider settings support Google's Limited Use requirements. The policy makes no claim of technical read-only enforcement or universal zero retention.

The existing root layout includes Vercel Analytics and Microsoft Clarity in production; the policy discloses those website services. No assistant content or OAuth secrets belong in public site files, screenshots, URLs or forms.

## Publication and Google Cloud

1. Review the pages and merge via the normal pull-request workflow.
2. Confirm both public URLs return HTTP 200 without authentication and that the application page links to the privacy page.
3. Use the actual production host consistently for both URLs. `lib/site-config.ts` currently defaults to `https://sarreche.dev`; `NEXT_PUBLIC_SITE_URL` can set the metadata base at deployment time. The operator also supplied `https://sarreche.vercel.app`. Hosting and Google domain acceptance must be checked after deployment; neither is guaranteed by this change.
4. In Google Auth Platform → Branding, set application name `OpenClaw Personal`, support email `sarreche@gmail.com`, the application homepage ending in `/openclaw`, and the privacy URL ending in `/openclaw/privacidad`.
5. Resolve any domain-ownership requirements shown by Google. In Audience, change the publishing status to In production. Publishing status and OAuth verification are distinct; personal-use exceptions do not remove fields required by the console.
6. Reauthorize the existing Gmail and Calendar account once using `gog auth add` with `--services gmail,calendar --force-consent --manual`, under the same Linux user and keyring configuration. This is performed on the operator's OpenClaw computer, not on the website server.
7. Verify a read-only Gmail and Calendar request from the actual agent. Do not put credentials or redirect authorization codes into this repository.

## Review checks

Run `npx tsc --noEmit` and `npm run build` before opening the PR. Check both routes on desktop and narrow screens, heading hierarchy, keyboard navigation, privacy and contact links, metadata and sitemap entries. No new packages are required.

## References

- [Google OAuth policies](https://developers.google.com/identity/protocols/oauth2/policies)
- [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)
- [Google: verification exceptions](https://support.google.com/cloud/answer/13464323)
- [Google: application homepage requirements](https://support.google.com/cloud/answer/13807376)
- [gog quickstart and testing-token expiration](https://github.com/openclaw/gogcli/blob/main/docs/quickstart.md)
