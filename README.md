<div align="center">

  <h1>⚡ WIZZO</h1>
  <h3>Premium Electrician & Telematics Web Application</h3>

  <p>
    A state-of-the-art, luxury bilingual web platform for electrical and telematics services.<br />
    Crafted with <b>React 19</b>, <b>TypeScript</b>, <b>Tailwind CSS v4</b>, <b>Framer Motion</b>, and <b>Vercel Serverless Functions</b>.
  </p>

  <p>
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-environment-variables">Environment Variables</a> •
    <a href="#-deployment">Deployment</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-13.1-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Vercel-Serverless-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Resend-API-black?style=for-the-badge&logo=resend&logoColor=white" alt="Resend" />
  </p>

  <br />
</div>

---

## 📌 Overview

**Wizzo** is a high-end web application built for professional electrical contractors and telematics service providers. Designed with luxury visual aesthetics—featuring dark navy palettes, vibrant electric blue accents, glassmorphic UI elements, micro-animations, and fluid theme transitions.

The application is completely bilingual (**French** & **English**), equipped with dynamic content switching, an interactive project showcase carousel, and a zero-config serverless contact workflow powered by **Resend** and **Vercel Serverless Functions**.

---

## ✨ Key Features

- 🎨 **Luxury Aesthetics & Micro-Animations**: Modern glassmorphism design system, ambient glow effects, smooth scroll interactions, and Framer Motion visual feedback.
- 🌐 **Full Bilingual Support (i18n)**: Seamless real-time toggle between **French (FR)** and **English (EN)** with persistent state management.
- 🌗 **Adaptive Dark & Light Themes**: Intelligent theme switcher with contrast optimization and persistent preference storage (`ThemeContext`).
- 📬 **Serverless Contact Engine**: Integrated Vercel Serverless Function (`/api/contact`) backed by the **Resend API** for direct-to-inbox lead delivery.
- 🖼️ **Dynamic Project Gallery**: Interactive showcase featuring automated image rotation on hover/touch, multi-photo lightboxes, and project filtering.
- ⚡ **Blazing Fast Performance**: Powered by React 19 + Vite 8, achieving instant HMR, minimal bundle footprints, and high lighthouse scores.
- 📱 **Responsive & Accessible Layout**: Carefully calibrated across ultra-wide monitors, tablets, and smartphones.

---

## 🛠️ Tech Stack

### **Frontend Core**
- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript 6](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)

### **Styling & Motion**
- **CSS Engine:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Iconography:** [Lucide React](https://lucide.dev/)

### **Backend & Services**
- **Serverless Runtime:** Vercel Serverless API (`api/contact.js`)
- **Transactional Email:** [Resend API](https://resend.com/)

---

## 📂 Project Architecture

```text
WIZZO/
├── 📁 api/
│   └── contact.js          # Vercel Serverless Function for Resend API email dispatch
├── 📁 public/
│   └── 📁 projects/        # Static assets & client project media galleries
├── 📁 src/
│   ├── 📁 components/      # Modular UI components (Hero, Navbar, About, Projects, Contact, Footer)
│   │   └── 📁 profile/     # Profile page components (/profil)
│   ├── 📁 context/         # React Context providers (LanguageContext, ThemeContext)
│   ├── 📁 data/            # Static dataset & project registries (content.ts)
│   ├── 📁 i18n/            # Internationalization dictionaries (translations.ts)
│   ├── 📁 pages/           # Application views (Home.tsx, Profile.tsx)
│   ├── index.css           # Global CSS variables, custom utilities & Tailwind setup
│   └── main.tsx            # Application entry point
├── vercel.json             # Vercel routing rules & SPA configuration
├── vite.config.ts          # Vite build parameters & aliases
├── package.json            # Scripts & project dependencies
└── README.md               # Project documentation
```

---

## ⚙️ Getting Started

### **Prerequisites**
Ensure you have the following installed on your machine:
- **Node.js** `>= 18.0.0`
- **npm** `>= 9.0.0`

### **1. Clone the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/WIZZO.git
cd WIZZO
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Setup Environment Variables**
Create a `.env` file in the root directory (or duplicate `.env.example`):
```env
RESEND_API_KEY=re_your_resend_api_key_here
CLIENT_EMAIL=contact.wizzo.75@gmail.com
```

### **4. Start Local Development Server**
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### **5. Build & Preview for Production**
```bash
# Type check and build bundle
npm run build

# Preview build locally
npm run preview
```

---

## 🔑 Environment Variables

The project requires the following environment variables for functional contact form email delivery:

| Variable | Required | Description | Example |
| :--- | :---: | :--- | :--- |
| `RESEND_API_KEY` | **Yes** | API key generated from your [Resend Dashboard](https://resend.com/) | `re_123456789_abcdefg` |
| `CLIENT_EMAIL` | **Yes** | Recipient email address where contact inquiries are sent | `contact.wizzo.75@gmail.com` |

---

## 🌐 Deployment

### **Method 1: Vercel GitHub Integration (Recommended)**

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/WIZZO.git
   git push -u origin main
   ```

2. Import to **Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/new).
   - Select your **WIZZO** GitHub repository.
   - Configure framework preset as **Vite**.
   - Add your **Environment Variables** (`RESEND_API_KEY` and `CLIENT_EMAIL`).
   - Click **Deploy**.

---

### **Method 2: Vercel CLI**

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Deploy from your local workspace:
   ```bash
   vercel
   ```

3. Add production environment variables:
   ```bash
   vercel env add RESEND_API_KEY
   vercel env add CLIENT_EMAIL
   ```

4. Deploy to production:
   ```bash
   vercel --prod
   ```

---

## 📸 Managing Project Photos

To add or update project photos shown in the portfolio:

1. Place image files (JPG, PNG, WebP) in `public/projects/<project-folder-name>/`.
2. Register the project entry in `src/data/content.ts` under the `projects` array:
   ```ts
   {
     id: 'kitchen-rewire',
     category: 'kitchen',
     title: { fr: 'Rénovation Cuisine', en: 'Kitchen Rewire' },
     location: 'Paris, France',
     description: { fr: '...', en: '...' },
     services: { fr: ['Rénovation'], en: ['Renovation'] },
     images: [
       '/projects/kitchen-rewire/photo-1.jpg',
       '/projects/kitchen-rewire/photo-2.jpg'
     ],
     imageAlt: { fr: 'Rénovation cuisine', en: 'Kitchen rewire' }
   }
   ```

---

## 📄 License & Credits

Distributed under the **MIT License**. See `LICENSE` for more details.

Designed & Built with ⚡ by **Wizzo Team**.
