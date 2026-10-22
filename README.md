# Korean American Voter Hub (재미 한인 유권자 나침반 & 투표 가이드)

A modern, ultra-responsive, nonpartisan civic empowerment platform designed to help Korean American voters navigate complex controversial issues, understand major political party platforms, and exercise their constitutional voting rights.

![Korean American Voter Hub Banner](assets/hero-banner.jpg)

---

## 🌟 Key Features (주요 기능)

1. **Bilingual by Design (완벽한 이중언어 지원)**
   - Instant 1-click toggle between **English** and **한국어 (Korean)**.
   - Built to bridge the generational divide between 1st-generation immigrant parents and 1.5 / 2nd / 3rd generation English-speaking voters.

2. **10 Controversial Issues Compass (10대 핵심 현안 나침반)**
   - Covers real, nuanced policy debates directly impacting Korean Americans:
     1. **College Admissions & Meritocracy:** Affirmative action vs. standardized test scores (SFFA v. Harvard).
     2. **Public Safety & Justice:** Retail crime crackdowns & police patrols vs. criminal justice reform.
     3. **Small Business & Economy:** Lower corporate/small-business taxes & deregulation vs. minimum wage & worker protections.
     4. **U.S.–ROK Alliance & Defense:** Extended nuclear deterrence & military exercises vs. diplomatic peace dialogue.
     5. **Immigration & Border Security:** Merit/employment visas & border enforcement vs. DACA protections & family reunification.
     6. **K-12 Specialized Magnet High Schools:** Preserving competitive test admissions vs. lottery & equity quotas.
     7. **Second Amendment & Gun Laws:** Self-defense rights (post-1992 LA Riots reflection) vs. assault weapon bans & universal background checks.
     8. **Healthcare & Eldercare:** Public healthcare expansion & Medicare subsidies vs. free-market private health accounts.
     9. **Social Values & Reproductive Rights:** Traditional faith-based family values vs. civil liberties & abortion rights.
     10. **Capital Gains & Estate Taxes:** Protecting generational family wealth & business succession vs. taxing high wealth for public funding.
   - Includes contextual notes on **"Why This Matters to Korean Americans"**, arguments in favor, and arguments in opposition.
   - Custom priority weighting (Standard, High Priority, Low Priority).

3. **Multi-Dimensional Alignment Engine (정밀 성향 분석 엔진)**
   - Calculates alignments across **6 Core Policy Axes**: Economy, Public Safety, Education, Foreign Policy, Immigration, and Civil Values.
   - Matches with major party platforms (Democratic, Republican, Independent/Moderate) with transparent percentage scores and custom voter archetypes.

4. **Party Platform Issue Matrix (양당 공식 정책 비교표)**
   - Objective side-by-side comparison of where the Democratic and Republican parties stand on Korean American community priorities.

5. **Voting Action Hub & Legal Rights (투표 참여 및 법적 권리 허브)**
   - **Federal Voting Rights Act §203 Guide:** Explains legal rights to Korean-language ballots, sample guides, and bilingual poll workers in Los Angeles County, Orange County, Queens, Bergen County, Gwinnett County, Fairfax County, and Cook County.
   - **Registration Checker:** Quick verification links via Vote.org and official state databases.
   - **Mail-in Ballot Guidance:** Checklist for signatures, postmark deadlines, and tracking tools.
   - **Interactive Pledge to Vote (투표 참여 서약):** Issues an official personalized civic commitment certificate with proud community slogans.
   - **Printable Voting Cheat Sheet:** One-click clean print layout to bring to the voting booth.

---

## 🚀 Local Development (로컬 실행)

The project has zero external runtime dependencies—it runs on native standard web technologies (HTML5, Vanilla CSS, Modern ES6+ JavaScript).

### 1. Run with Node.js
```bash
# Start the local server
npm start
# or: node server.js
```
Open **[http://localhost:4180/](http://localhost:4180/)** in your web browser.

### 2. Run Tests
```bash
npm test
```
Verifies data integrity, bilingual schema completeness, quiz scoring algorithms, and HTTP 200 asset responses.

---

## 🌐 Production Deployment (배포 가이드)

### Option 1: GitHub Pages (자동 배포)
This repository includes `.github/workflows/deploy.yml` and `.nojekyll` pre-configured.

1. Initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Korean American Voter Hub"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/korean-american-voter-guide.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every push to `main` will automatically build and publish your site at:
   `https://YOUR_USERNAME.github.io/korean-american-voter-guide/`

---

### Option 2: Vercel (1-Click Deploy)
This repository includes `vercel.json` with pre-configured security headers and asset caching.

#### Using Vercel CLI:
```bash
npx vercel
```
Follow the interactive prompts (select defaults). To deploy to production:
```bash
npx vercel --prod
```

#### Using Vercel Web Dashboard:
1. Push this project to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and click **Deploy** (no build settings required; it automatically detects static HTML/JS/CSS).

---

### Option 3: Netlify / Cloudflare Pages
Simply point the publish directory to the project root (`./`) with no build command needed.

---

## 📁 Project Structure (프로젝트 구조)

```text
korean-american-voter-guide/
├── index.html                 # Main accessible semantic HTML5 single-page application
├── css/
│   └── styles.css             # Ultra-premium responsive design system (Dark & Light modes)
├── js/
│   ├── data.js                # Bilingual questions, party platforms, and §203 rights data
│   ├── quiz.js                # Political compass computation & alignment algorithm
│   └── app.js                 # UI controller, theme/language manager, certificate generator
├── assets/
│   └── hero-banner.jpg        # High-res Korean American civic engagement editorial illustration
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions CI/CD workflow for GitHub Pages
├── server.js                  # Lightweight zero-dependency static HTTP server
├── test-app.js                # Automated verification and scoring test suite
├── package.json               # Project manifest, scripts, and metadata
├── vercel.json                # Vercel deployment and security header configuration
├── .nojekyll                  # GitHub Pages Jekyll bypass flag
├── .gitignore                 # Standard clean repository gitignore
└── README.md                  # Project documentation
```

---

## ⚖️ Nonpartisan Civic Notice (초당적 안내문)

This platform is an independent, nonpartisan educational resource created to promote civic literacy and increase voter participation among Korean Americans. It does not endorse or oppose any political party, candidate, or ballot measure. All policy summaries are derived from official party platforms and publicly available legislative voting records.
