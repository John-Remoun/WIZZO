# ⚡ Wizzo — Site Web Électricien & Télématique (React + TypeScript + Vite)

موقع ويب احترافي وفاخر لخدمات أعمال الكهرباء والتجهيزات، مصمم بأحدث التقنيات ويدعم اللغتين (الفرنسية والإنجليزيّة)، مع الوضع الداكن والفيزيائي (Dark/Light Mode)، ونموذج تواصل ذكي مرتبط بـ Vercel Serverless Functions و Resend.

---

## 🚀 التقنيات المستخدمة (Tech Stack)

- **الفريمورك:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **أداة البناء:** [Vite](https://vitejs.dev/)
- **التصميم والإنيميشن:** [Tailwind CSS v4](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) + [Lucide Icons](https://lucide.dev/)
- **إرسال البريد الإلكتروني (Backend):** Vercel Serverless Functions (`/api/contact`) + [Resend API](https://resend.com/)

---

## 📌 مميزات المشروع

1. **تصميم عصري وفخم:** دعم التنسيقات الحديثة كـ Glassmorphism و Micro-animations باللون الكحلي الداكن والأزرق الكهربي المضيء.
2. **ثنائي اللغة (Bilingual FR / EN):** إمكانية التبديل الفوري بين اللغة الفرنسية والإنجليزيّة مع حفظ التفضيلات.
3. **وضع رؤية متكيف (Dark / Light Theme):** تبديل سلس بين الوضع الداكن والفاتح مع تحسين تباين الأيقونات.
4. **نموذج تواصل فعال (Contact Form):** إرسال واستقبال الرسائل مباشرة إلى بريد العميل الإلكتروني عبر خدمة Resend.
5. **روابط تواصل سريعة:** اتصال مباشر برقم الهاتف، واتساب، وإنستغرام.
6. **معرض الأعمال (Projects Showcase):** إمكانية استعراض صور المشاريع مع التمرير التلقائي.

---

## 📁 هيكل المشروع (Project Structure)

```text
electro-site/
├── api/
│   └── contact.js          # Vercel Serverless Function لإرسال البريد عبر Resend
├── public/
│   └── projects/           # صور المشاريع والملفات الاستاتيكية
├── src/
│   ├── components/         # المكونات الأساسية (Navbar, Hero, About, Projects, Contact, Footer...)
│   │   └── profile/        # مكونات صفحة البروفايل (/profil)
│   ├── context/            # إدارة الحالة (LanguageContext, ThemeContext)
│   ├── data/               # البيانات والمعلومات الأساسية (content.ts)
│   ├── i18n/               # نصوص الترجمة للغات (translations.ts)
│   ├── pages/              # صفحات التطبيق (Home.tsx, Profile.tsx)
│   └── index.css           # متغيرة التصميم والتنسيقات الأساسية
├── vercel.json             # توجيه الروابط وتكوين SPA على Vercel
├── .env                    # المتغيرات البيئية للمشروع
├── package.json
└── README.md
```

---

## ⚙️ التشغيل المحلي (Local Development)

1. **تثبيت الحزم والمكتبات:**
   ```bash
   npm install
   ```

2. **تشغيل سيرفر التطوير:**
   ```bash
   npm run dev
   ```

3. **إنشاء نسخة الإنتاج (Production Build):**
   ```bash
   npm run build
   ```

4. **معاينة البناء المحلي:**
   ```bash
   npm run preview
   ```

---

## 🔑 المتغيرات البيئية (Environment Variables)

عند رفع المشروع على Vercel، يجب إضافة المتغيرات البيئية التالية في إعدادات المشروع (Environment Variables):

| المتغير | الوصف | مثال |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | مفتاح API الخاص بخدمة Resend لإرسال الإيميلات | `re_xxxxxxxxx` |
| `CLIENT_EMAIL` | الإيميل الذي ستصل عليه رسائل نموذج التواصل | `contact.wizzo.75@gmail.com` |

---

## 🌐 خطوات الرفع على Vercel (Deployment Steps)

### الطريقة الأولى: عن طريق GitHub (الموصى بها)

1. **رفع الكود إلى حسابك في GitHub:**
   - قم بإنشاء مستودع (Repository) جديد على GitHub.
   - ارفع كود المشروع إليه:
     ```bash
     git init
     git add .
     git commit -m "Initial commit for production"
     git branch -M main
     git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
     git push -u origin main
     ```

2. **ربط المستودع بـ Vercel:**
   - توجه إلى موقع [Vercel](https://vercel.com/) وقم بتسجيل الدخول بحساب GitHub.
   - اضغط على **"Add New"** ثم اختر **"Project"**.
   - اختر مستودع المشروع من القائمة واضغط **"Import"**.

3. **إعدادات المشروع على Vercel (Project Configuration):**
   - **Framework Preset:** اختر `Vite`.
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Environment Variables:** أضف المفاتيح التالية:
     - `RESEND_API_KEY` = `مفتاح_resend_الخاص_بك`
     - `CLIENT_EMAIL` = `contact.wizzo.75@gmail.com`

4. **بدء النشر (Deploy):**
   - اضغط على زر **"Deploy"**.
   - خلال ثوانٍ معدودة سيكتمل الرفع وتحصل على رابط موقعك الحي (Live URL)!

---

### الطريقة الثانية: باستخدام Vercel CLI (مباشرة من التيرمينال)

1. **تثبيت Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **تسجيل الدخول ورفع المشروع:**
   ```bash
   vercel
   ```
   - اتبع التعليمات في التيرمينال (اختر حسابك، وافق على الخيارات الافتراضية).

3. **إضافة المتغيرات البيئية:**
   ```bash
   vercel env add RESEND_API_KEY
   vercel env add CLIENT_EMAIL
   ```

4. **الرفع إلى البرودكشن النهائي (Production Deploy):**
   ```bash
   vercel --prod
   ```
