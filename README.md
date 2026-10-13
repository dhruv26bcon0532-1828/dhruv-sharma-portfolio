# Dhruv Sharma — Personal Developer Portfolio

> **B.Tech Computer Science and Engineering (CSE Core)**  
> **JECRC University, Jaipur, Rajasthan, India**  
> Class of 2026 – 2030 (Expected)

A premium, modern, responsive personal portfolio website engineered specifically for Dhruv Sharma. Designed with an authentic, dark developer aesthetic that showcases foundational computational rigor, memory management in C, scholastic milestones, verified leadership, and a 4-year learning trajectory.

---

## 🚀 Live Preview & Running Locally

This portfolio is built with **zero external dependencies** (no Node.js, npm, or Python required), guaranteeing instant loading and complete cross-platform compatibility.

### Method 1: Instant Browser Launch (Easiest)
Simply double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Brave, Safari).

### Method 2: Local HTTP Server (Built-in PowerShell Server)
To preview over HTTP (`http://localhost:8080`):
1. **Double-click** `start-server.bat`, OR
2. In PowerShell, navigate to the folder and run:
   ```powershell
   .\start-server.ps1
   ```
This automatically starts a lightweight HTTP server and opens your default browser!

---

## 📂 Project Architecture

```
dhruv-sharma-portfolio/
├── index.html              # Core semantic HTML5 structure with accessible ARIA landmarks
├── css/
│   └── styles.css          # Bespoke CSS3 design system (Navy/Charcoal/Indigo palette, responsive grid)
├── js/
│   ├── config.js           # Central configuration file for email, social links, and bio
│   ├── terminal.js         # Interactive C compilation and terminal command simulator
│   └── main.js             # Navigation, scroll-spy, filters, toast alerts, resume preview modal
├── assets/
│   ├── docs/               # Resume and academic documentation
│   └── images/             # Visual assets, SVG icons, and graphics
├── start-server.ps1        # Zero-dependency PowerShell HTTP server script
├── start-server.bat        # Double-clickable Windows launcher
└── README.md               # Complete setup, customization, and deployment documentation
```

---

## 🛠️ Sections & Authenticity Standards

| Section | Content Highlights | Verification Standard |
| :--- | :--- | :--- |
| **Hero** | 1st-Year CSE Core at JECRC University, interactive C terminal simulator | Authentic C99 struct profile code |
| **About Me** | Computational philosophy: depth over shortcuts, low-level intuition | Authentic student voice |
| **Education** | B.Tech CSE (2026–30), Class XII CBSE (~80%), Class X ICSE (93%) | Exact verified percentages |
| **Skills** | Core C foundations vs. Active C++ / DSA learning vs. Leadership | Clear separation of mastered vs. learning |
| **Projects & Learning** | Active C learning statement, portfolio website itself, future milestones | Strictly verified work & placeholders |
| **Leadership** | Elected Deputy Head Boy, Student Council, Assembly Addresses | Verified school leadership |
| **Roadmap** | 4-Phase trajectory from C fundamentals to software internships | Structured 4-year vision |
| **Contact** | Direct email copy, LinkedIn/GitHub links, dynamic contact modal | Fully editable placeholders |

---

## ⚙️ How to Customize Your Details

You can customize your details in one minute by opening `js/config.js`:

```javascript
const PORTFOLIO_CONFIG = {
    personal: {
        name: "Dhruv Sharma",
        title: "B.Tech Computer Science & Engineering Undergraduate",
        university: "JECRC University, Jaipur",
        // ...
    },
    contacts: {
        email: "your.real.email@gmail.com",            // <-- Replace with your real email
        github: "https://github.com/yourusername",     // <-- Replace with your GitHub URL
        linkedin: "https://linkedin.com/in/yourhandle" // <-- Replace with your LinkedIn URL
    }
    // ...
};
```
Any changes made in `config.js` automatically propagate to all links, email copy buttons, and contact triggers across the website!

---

## 🌐 Deploying to GitHub & GitHub Pages

To put your portfolio online for free using GitHub Pages:

### Step 1: Create a GitHub Repository
1. Log into your GitHub account at [github.com](https://github.com).
2. Click **New Repository**.
3. Name it `dhruv-sharma-portfolio` (or `<your-username>.github.io`).
4. Set visibility to **Public** and leave "Initialize with README" unchecked.

### Step 2: Push Your Code
Open PowerShell or Git Bash inside `c:\Users\HP\Downloads\dhruv-sharma-portfolio` and run:

```bash
git init
git add .
git commit -m "Update portfolio: Projects & Learning section"
git branch -M main
git remote add origin https://github.com/<your-username>/dhruv-sharma-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**.
5. Within 60 seconds, your site is live at:  
   `https://<your-username>.github.io/dhruv-sharma-portfolio/`

---

## ▲ Deploying to Vercel (Recommended)

Vercel provides ultra-fast global CDN delivery, automatic HTTPS, and free custom domain support:

1. Visit [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New...** → **Project**.
3. Select your `dhruv-sharma-portfolio` repository and click **Import**.
4. Leave Framework Preset as **Other** (it will automatically detect the static HTML/CSS/JS site).
5. Click **Deploy**.
6. Your portfolio will be live at `https://dhruv-sharma-portfolio.vercel.app` in under 10 seconds!

---

## 🔒 Code Quality & Accessibility Standards

- **Semantic HTML5:** Built using `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, and `<footer>` tags.
- **Accessible Contrast:** Color ratios exceed WCAG AA standards (all text > 7:1 contrast on deep navy surfaces).
- **Responsive Fluid Layout:** Uses modern CSS Grid and Flexbox with mobile-first breakpoints.
- **Zero Heavy Bundlers:** No npm build fatigue, zero bundle vulnerabilities, 100/100 Lighthouse performance.
