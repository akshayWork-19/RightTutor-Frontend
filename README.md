# 💎 Right Tutor Frontend

A premium, high-converting landing page and booking system for Right Tutor, built with modern web technologies to deliver a cinematic user experience.

## ✨ Key Features

- **Cinematic UI/UX**: High-end animations using Framer Motion and custom CSS transitions.
- **Smart Booking**: Integrated consultation modal that syncs directly with our backend and Google Sheets.
- **Responsive Mastery**: Tailored experiences for mobile, tablet, and desktop viewports.
- **Interactive Tutors**: Dynamic display of tutoring experiences and subject expertise.
- **Direct Communication**: Easy-to-use contact forms with real-time validation.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS & Vanilla CSS
- **Animations**: Framer Motion, GSAP (Subtle)
- **Icons**: Lucide React
- **State Management**: Context API (Local)
- **API Communication**: Fetch API

---

## 📁 Directory Structure

- `src/components/`: Reusable UI components (Modals, Nav, Hero, CTA).
- `src/pages/`: Main views (Home, Consultation, Contact).
- `src/styles/`: Global styles and Tailwind configurations.
- `public/`: Assets, images, and static files.

---

## ⚙️ Local Development

1. **Install Packages**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   Create a `.env` file based on `.env.example`:
   ```ini
   VITE_API_BASE_URL=http://localhost:8000
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

---

## 🚢 Deployment

This project is optimized for **Vercel** deployment.
- Simply connect your repository to Vercel.
- Ensure `VITE_API_BASE_URL` is set in the Vercel Dashboard Environment Variables.

---

## 🎨 Design System

We use a "Vibrant Premium" aesthetic:
- **Primary Color**: `#FF850A` (Right Amber)
- **Surface**: Dark/Glassmorphic (on dark sections)
- **Typography**: Modern Sans-Serif (Inter / Outfit)
- **Motion**: Consistent 0.3s - 0.5s spring physics for interactions.
