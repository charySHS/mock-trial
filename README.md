# 🏛️ Servite High School Mock Trial Team Hub

The official, premium web platform and preparation command center for the **Servite High School Constitutional Rights Foundation Orange County (CRF-OC) Mock Trial Team**.

Designed with a high-fidelity legal aesthetic, the application provides a countdown to tournament rounds, trial schedule tables, searchable case repositories and errata vaults, interactive role playbooks, objection reference coaches, custom downloadable "Bar Badge" member card creators, and a custom simulated AI speech auditor ("ScalesAI").

---

## 🛠️ Technology Stack & Refactored Modularity
* **Core**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (Boasts a custom, super-fast `179ms` compile speed).
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Using a compile-time CSS-first pipeline) + Custom Vanilla CSS double-border presets.
* **Iconography**: [Lucide React](https://lucide.dev/) (Crisp legal vectors).
* **Motion & Choreography**: [GSAP (GreenSock)](https://gsap.com/) (Powering 3D card tilt physics, staggered entrances, score scaling, and smooth tab slide-fades).
* **Modularity**: Fully refactored into **15 independent, low-level React subcomponents** for optimal maintainability and speed.

---

## 💻 Local Development Setup

To run the application locally on your computer:

1. **Verify Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local hosting address (usually `http://localhost:5173`).
4. **Compile Production Bundle**:
   ```bash
   npm run build
   ```
   This generates highly optimized static assets (HTML, CSS, and JS) inside a new `dist/` directory.

---

## 🚀 Step-by-Step Deployment & Custom Domain Manual

Since Vite compiles your React app into pure, static client-side files, you can host the website completely **for free** on premium cloud providers.

---

### Phase A: Upload Your Project to GitHub
1. Create a free account at [GitHub](https://github.com) if you do not have one.
2. Open your terminal in the `D:\MockTrial` project folder and initialize git:
   ```bash
   git init
   git add .
   git commit -m "Initialize Servite Mock Trial modular platform"
   ```
3. Create a **New Repository** on GitHub (name it `servite-mock-trial-hub`). Leave it public or private.
4. Link your local project to GitHub and push (replace `YOUR-USERNAME` with your real GitHub name):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/servite-mock-trial-hub.git
   git branch -M main
   git push -u origin main
   ```

---

### Phase B: Deploy to Vercel (Recommended & Free)
[Vercel](https://vercel.com) provides lightning-fast static hosting with automated continuous deployment (every time you push changes to GitHub, your site auto-updates!).

1. Sign up for a free Vercel account using your **GitHub login**.
2. Click **Add New** > **Project** on your Vercel Dashboard.
3. Import your `servite-mock-trial-hub` repository from the list.
4. Under **Framework Preset**, Vercel will automatically detect `Vite`. Leave all default build configurations as is.
5. Click **Deploy**. Vercel will compile and host your site in less than a minute, supplying a default Vercel domain (e.g., `servite-mock-trial.vercel.app`).

---

### Phase C: Connect Your Squarespace Domain (`servite-mock-trial.org`)

To link your custom Squarespace domain to your Vercel deployment:

#### 1. Add Domain in Vercel
1. In your Vercel Dashboard, select your project.
2. Navigate to **Settings** > **Domains**.
3. Type `servite-mock-trial.org` and click **Add**.
4. Vercel will prompt you to add `www.servite-mock-trial.org` as well. Select the recommended option to redirect `servite-mock-trial.org` to `www.servite-mock-trial.org` (or vice-versa).
5. Vercel will now show the domain as "Invalid DNS" and display the specific record values you need to configure in Squarespace.

#### 2. Configure DNS in Squarespace
1. Log in to your [Squarespace Account](https://squarespace.com) and go to your **Domains Dashboard**.
2. Click on `servite-mock-trial.org` and select **DNS Settings** (sometimes under "Manage Domain" or "Settings").
3. **CRITICAL STEP**: Delete any existing default Squarespace parking/placeholder records (e.g., placeholder CNAME or A records) to prevent IP conflicts.
4. Add the following two custom records:

| Record Type | Host / Name | Value / Points To | Purpose / TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` (or leave blank) | `76.76.21.21` | Directs root domain to Vercel (Default/3600) |
| **CNAME Record** | `www` | `cname.vercel-dns.com` | Directs subdomain to Vercel (Default/3600) |

5. Save the DNS settings in Squarespace.

#### 3. Verification & SSL Provisioning
* **DNS Propagation**: DNS updates can take anywhere from **10 minutes to a few hours** (up to 24 hours in rare cases) to propagate worldwide.
* **Vercel Auto-SSL**: Vercel continuously polls your DNS records. The moment it detects the correct Squarespace DNS entries, it will instantly provision a free, secure **Let's Encrypt SSL certificate (HTTPS)**.
* Once the status turns green on your Vercel dashboard, `servite-mock-trial.org` is officially **LIVE**!
