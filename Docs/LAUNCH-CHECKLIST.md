# XIGO xigo.se — Launch checklist

- [x] Swedish multi-page site (/, /tjanster, 5 service pages, /case, /om, /kontakt)
- [x] Legal stubs (/policy, /cookies, /tillganglighet)
- [x] Contact form API (`/api/contact`) with honeypot
- [x] sitemap.xml + robots.txt
- [x] Organization + Service JSON-LD
- [ ] Set `RESEND_API_KEY` + `RESEND_FROM` in production
- [ ] Set `NEXT_PUBLIC_BOOKINGS_URL` when Bookings page is ready
- [ ] Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=xigo.se` for analytics
- [ ] Add org.nr and address in `app/lib/site.ts`
- [ ] Generate OG image 1200×630 at `public/og.png`
- [ ] Run Lighthouse (target ≥95 mobile) and Axe before go-live
- [ ] E2E test contact form to contact@xigo.se
- [ ] Align LinkedIn company page with positioning
