# ✈️ ExploraVista — Interactive Travel Discovery & Trip Cost Estimator

> A beginner-friendly, highly interactive travel website that allows travelers to explore world-famous destinations and calculate accurate, realistic trip budget estimates based on departure country, duration, group size, and travel style.

---

## 🌟 1. Project Overview & The Idea

### What is ExploraVista?
**ExploraVista** is an interactive travel discovery and budgeting platform designed to solve one of the biggest friction points for travelers: *"How much will this trip actually cost from where I live, and what are the best spots to see?"*

### Purpose
Instead of generic travel blogs with vague advice, ExploraVista combines **dynamic visual destination exploration** with a **smart budget estimation engine**. Users can explore top attractions in Italy, Japan, Switzerland, Thailand, or France, and instantly compute realistic costs (flights, accommodation, food, and activities) tailored to their departure origin.

### Target Audience
- Vacation planners, solo backpackers, and families planning international holidays.
- Students and young professionals budgeting for their first overseas trip.
- Travel enthusiasts seeking destination highlights, best visiting seasons, and visa guidelines.

---

## ✨ 2. Key Interactive Features

1. **Dynamic Destination Showcase:**
   - Instant visual switching between countries (Italy, Japan, Switzerland, Thailand, France).
   - High-resolution photo galleries featuring iconic sights with location tags, descriptive guides, and links directly into the budget estimator.
   - Quick Travel Stats Bar showing best visiting months, local currency, primary languages, and visa rules.

2. **Smart Trip Cost Estimator:**
   - **Origin-Aware Flights:** Adjusts flight estimates based on departure location (India, USA, UK, UAE, Singapore, Australia).
   - **Travel Style Preferences:** Dynamic cost toggles between *Budget (Hostels)*, *Comfort (3-Star Hotels)*, and *Luxury (5-Star Resorts)*.
   - **Multi-Currency Converter:** Real-time currency conversions between **INR (₹)**, **USD ($)**, **EUR (€)**, and **GBP (£)**.
   - **Itemized Cost Breakdown:** Separate line-item cards for Roundtrip Flights, Hotel Nights, Dining, and Daily Sightseeing.

3. **Responsive Mobile Navigation:**
   - Clean hamburger menu with smooth slide-down navigation for smartphones and tablets.

4. **Insider Travel Tips:**
   - Practical money-saving advice on shoulder-season booking, regional rail passes, and zero-forex cards.

---

## 🛠️ 3. Technology Stack

- **HTML5:** Semantic architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) with accessible form elements.
- **CSS3:**
  - CSS Custom Properties (`:root` variables) for effortless color and theme customization.
  - Modern typography: *Cabinet Grotesk* for bold headlines + *Plus Jakarta Sans* for clean body text.
  - Responsive Flexbox & CSS Grid for fluid cross-device layout adaptation.
  - Mobile-first media queries (`@media (max-width: 768px)`).
- **Vanilla JavaScript (ES6+):**
  - Event listeners, dynamic DOM manipulation, real-time calculation logic, and currency conversion formatting.
  - Zero heavy third-party framework dependencies for instant loading speed.

---

## 🎨 4. How to Customize the Design (Colors & Emojis)

ExploraVista was built to be easily personalized:

1. **Changing Theme Colors:**
   Open `style.css` and edit the `:root` variables at the top of the file:
   ```css
   :root {
     --primary-color: #2563eb;    /* Change main blue brand color */
     --accent-color: #f97316;     /* Change sunset orange button highlights */
     --bg-main: #f8fafc;          /* Change page background */
   }
   ```

2. **Changing Icons & Emojis:**
   All icons (✈️, 🏨, 🍕, 🎟️, 💰) are standard text characters in `index.html` and `script.js`. You can replace or remove them directly without breaking any layout.

3. **Adding New Destinations:**
   Open `script.js` and add or edit any country entry in the `travelDatabase` object!

---

## 🚀 5. Setup & Local Preview Instructions

### Prerequisites
Any standard web browser (Chrome, Edge, Firefox, Safari).

### Running Locally:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/exploravista.git
   cd exploravista
   ```
2. **Open the website:**
   - Double click `index.html` to open it in your browser.
   - Or open in VS Code with the **Live Server** extension.

---

## 🌐 6. Deployment (GitHub Pages)

This project is deployed live using **GitHub Pages**:
- **Live Demo Link:** [https://YOUR_USERNAME.github.io/exploravista/](https://YOUR_USERNAME.github.io/exploravista/)
- **GitHub Repository:** [https://github.com/YOUR_USERNAME/exploravista](https://github.com/YOUR_USERNAME/exploravista)

---

## 📁 7. Project Structure

```
exploravista/
│
├── index.html          # Semantic HTML structure & content
├── style.css           # Responsive styling & customizable design tokens
├── script.js           # Interactive destination switcher & trip cost calculator
└── README.md           # Project documentation & instructions
```

---

## 📄 License
Created for academic demonstration and portfolio submission.
