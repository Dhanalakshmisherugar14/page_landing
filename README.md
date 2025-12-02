LP Onboarding – React + Vite + Tailwind CSS

A modern and beautiful onboarding landing page built using **React**, **Vite**, **Tailwind CSS**, and **React Icons**.  
This project features smooth animations, gradient UI, and a clean modular structure that is easy to customize.

---

## 📁 Project Setup

### 🔧 1. Create React + Vite Project

```bash
npm create vite@latest lp-onboarding --template react
cd lp-onboarding
npm install
🎨 2. Install & Configure Tailwind CSS
bash
Copy code
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Update tailwind.config.js:

js
Copy code
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
Add Tailwind to src/index.css:

css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
🔔 3. Install React Icons
bash
Copy code
npm install react-icons
🖥️ 4. Run the Development Server
bash
Copy code
npm run dev
```
