# Charukesh T — Personal Portfolio Website
### Third-Year B.E. Electrical & Electronics Engineering (EEE)

A modern, elegant, and professional personal portfolio website designed for **Charukesh T**, showcasing academic credentials, industrial internship exposure, embedded systems/IoT skills, and drone technology exploration.

---

## 🛠️ Tech Stack

* **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
* **Typography:** Inter & Plus Jakarta Sans
* **Icons:** [Lucide React](https://lucide.dev/) + Clean SVG Icons
* **Aesthetic Direction:** Warm ivory (`#FAF9F5`), crisp white cards, muted engineering blue (`#1E3E56`), dark charcoal typography, and subtle circuit/grid accents.

---

## 📁 Project Structure

```
Charukesh_Portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg                 # Profile photograph
│       └── Charukesh_T_Resume.pdf      # One-click downloadable PDF resume
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   ├── components/
│   │   ├── Navbar.jsx                  # Sticky responsive navbar with mobile menu
│   │   ├── Hero.jsx                    # Minimal hero with protected profile image
│   │   ├── About.jsx                   # Academic intro + Currently Exploring card
│   │   ├── Education.jsx               # Elegant vertical timeline with CGPA & %
│   │   ├── Skills.jsx                  # Categorized skills (no fake percentage bars)
│   │   ├── Experience.jsx              # Industrial internship at Prabha Auto Products
│   │   ├── Projects.jsx                # Factual academic projects & filter pills
│   │   ├── Certifications.jsx          # Garuda UAV, PALS IIT Madras, SkillUp with modal viewer
│   │   ├── Interests.jsx               # 6 engineering interest cards with minimal line icons
│   │   ├── WhyWorkWithMe.jsx           # Grounded value proposition for a 3rd-year student
│   │   ├── Contact.jsx                 # Direct phone, email, LinkedIn, copy buttons & inquiry
│   │   └── Footer.jsx                  # Clean minimal footer with copyright
│   ├── data/
│   │   └── portfolio.js                # Centralized, easy-to-edit portfolio data source
│   ├── App.jsx                         # Main app component
│   ├── main.jsx                        # React root entry
│   └── index.css                       # Tailwind layers, engineering grid & security styles
├── index.html                          # SEO meta tags, Open Graph, and preconnected fonts
├── package.json                        # Dependencies and scripts
├── tailwind.config.js                  # Custom palette and theme configuration
└── vite.config.js                      # Vite build configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure Node.js (v18 or higher) and npm are installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory, ready to deploy to GitHub Pages, Vercel, or Netlify.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Update Portfolio Information

All personal details, skills, education milestones, project descriptions, and contact channels are centralized in:
📂 `src/data/portfolio.js`

To update any text or add new projects/certificates in the future, simply edit `src/data/portfolio.js` without touching component markup.

---

## 🛡️ Profile Image Protection
The profile picture container implements browser-level protection:
* Disables context menu (right-click)
* Prevents drag-and-drop actions
* Applies CSS `user-select: none` and `-webkit-user-drag: none`
* Overlays a transparent shield over the image to prevent direct click-saving

---

## 📄 License
© 2026 Charukesh T. All rights reserved.
