# Leo9_Clone

Got it! I’ve drafted a **detailed README** that explicitly says this is a **clone of the Leo9 Studio website**, and explains the technologies used for each section like animation, navbar, Hero section, and footer. You can copy this directly:

---

# 🦁 Leo9 Studio – Website Clone

This project is a **clone of the official Leo9 Studio website**. It recreates the homepage with modern UI/UX features, animations, and a responsive layout.

The purpose of this project is to practice **frontend development, responsive design, and interactive animations** using modern tools.

---

## **Table of Contents**

* [Features](#features)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)

---

## **Features**

* **Hero Section**

  * Interactive lion animation created with **p5.js**.
  * Text beside animation dynamically styled for **light/dark mode**.
  * Smooth entrance animation for dots and lines forming the lion.

* **Navbar**

  * Responsive top navigation with brand logo and menu links.
  * Dark/Light mode support.

* **Footer**

  * Horizontal scrolling brand logos using **CSS animations**.
  * Transparent background with seamless looping effect.
  * Dark mode filter applied for invert colors automatically.

* **Responsive Design**

  * Fully mobile-first design using **Tailwind CSS**.
  * Flexbox and grid layout for consistent spacing and alignment.

* **Animations**

  * Lion animation built with **p5.js** for interactive drawing.
  * Scroller uses **CSS keyframes animation** for continuous movement.
  * Subtle transitions for hover and scroll effects.

---

## **Technologies**

* **React** – Component-based frontend development
* **Tailwind CSS** – Responsive and utility-first styling
* **p5.js** – Hero section interactive animation
* **Vercel / Netlify** – Continuous deployment and hosting
* **Git & GitHub** – Version control

---

## **Installation**

Clone the repository:

```bash
git clone https://github.com/your-username/leo9-website-clone.git
cd leo9-website-clone
```

Install dependencies:

```bash
npm install
```

---

## **Usage**

Start development server:

```bash
npm start
```

* Visit `http://localhost:3000` in your browser.
* Press **`D`** in the Hero section to toggle dark mode for the lion animation.
* Scroll horizontally in the footer to see brand logos move seamlessly.

Build for production:

```bash
npm run build
```

---

## **Project Structure**

```
leo9-website-clone/
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── assets/             # Logos and images for brands and Hero
│   ├── components/         # Navbar, HeroAnimation, FooterTagline, etc.
│   ├── App.jsx
│   └── index.jsx
├── package.json
├── tailwind.config.js
├── README.md
```

---

## **Deployment**

### **Vercel**

1. Push the repository to GitHub.
2. Import it into [Vercel](https://vercel.com/).
3. Vercel automatically detects React projects.
4. Set build command: `npm run build` and output folder: `build`.
5. Automatic redeploy occurs on every Git push.

---

## **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add feature"`
4. Push branch: `git push origin feature/your-feature`
5. Open a Pull Request


 add that?
