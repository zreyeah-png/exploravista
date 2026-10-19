#  ExploraVista — Multi-City Travel Discovery & Trip Cost Estimator

> A beginner-friendly, highly interactive travel website that allows travelers to explore 10 world-famous destinations, construct custom multi-city itineraries, and calculate accurate, realistic trip budget estimates based on departure country, duration, group size, and travel style.

---

##  1. Project Overview & The Idea

### What is ExploraVista?
**ExploraVista** is an interactive travel discovery and multi-destination budgeting platform designed to solve one of the biggest friction points for travelers: *"How much will this multi-city trip actually cost from my home city, and how should I plan the route?"*

### Purpose
Instead of generic travel blogs with static lists, ExploraVista combines **dynamic visual destination exploration** across 10 global countries with a **smart multi-city budget estimation engine**. Users can explore top attractions in Italy, Japan, Switzerland, Thailand, France, Spain, Greece, UAE, Bali, or the UK, stitch them together into a personalized multi-stop route, and instantly compute realistic costs (international flights, inter-city trains/flights, hotel rooms, dining, and daily activities).

### Target Audience
- Vacation planners, backpackers, couples, and families planning single or multi-country international holidays.
- Students and young professionals budgeting for their dream Euro-trip or Asia tour.
- Travel enthusiasts seeking destination highlights, best visiting seasons, and visa guidelines.

---

##  2. Key Interactive Features

1. **10 Global Destinations Showcase:**
   - Instant visual switching between 10 iconic countries: **Italy, Japan, Switzerland, Thailand, France, Spain, Greece, Dubai/UAE, Bali/Indonesia, and the United Kingdom**.
   - High-resolution photo galleries featuring 3 iconic sights per country with location tags, descriptive guides, and one-click "+ Add to Trip" buttons.
   - Quick Travel Stats Bar showing best visiting months, local currency, primary languages, and visa rules.

2. **Custom Multi-City Itinerary Builder:**
   - **Multi-Stop Route Construction:** Add multiple countries (e.g., *Stop 1: Italy (4 days)* $\rightarrow$ *Stop 2: Switzerland (3 days)* $\rightarrow$ *Stop 3: France (4 days)*).
   - **Per-Destination Days Control:** Easily tweak the number of days spent in each country using direct inline counter inputs.
   - **Quick Dropdown & Card Addition:** Add countries directly from the destination gallery or from the calculator's itinerary dropdown.
   - **One-Click Stop Removal:** Remove any stop using the `[×]` button (minimum 1 stop enforced).

3. **Smart Multi-Destination Cost Estimator:**
   - **Origin-Aware Flights:** Adjusts return international flights based on departure origin (India, USA, UK, UAE, Singapore, Australia, Canada, Germany).
   - **Dynamic Inter-City Transit Calculation:** Automatically adds inter-country high-speed rail / flight costs when multiple stops are in the route.
   - **Travel Style Preferences:** Dynamic cost toggles between *Budget (Hostels)*, *Comfort (3-4★ Hotels)*, and *Luxury (5★ Resorts)*.
   - **Multi-Currency Converter:** Real-time currency conversions between **INR (₹)**, **USD ($)**, **EUR (€)**, **GBP (£)**, and **AUD (A$)**.
   - **Itemized Cost Breakdown:** Separate line-item cards for International Return Flights, Inter-City Transit, Accommodations Across All Stops, Dining, and Daily Sightseeing.

4. **Responsive Mobile Navigation:**
   - Clean hamburger menu with smooth slide-down navigation and real-time itinerary counter badge.

---

##  3. Technology Stack

- **HTML5:** Semantic architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) with accessible form elements.
- **CSS3:**
  - CSS Custom Properties (`:root` variables) with a warm terracotta, honey amber, and soft almond linen palette.
  - Topographic terrain texture (`radial-gradient` pattern) and sunset ambient glowing orbs.
  - Modern typography: *Cabinet Grotesk* for bold headlines + *Plus Jakarta Sans* for clean body text.
  - Responsive Flexbox & CSS Grid for fluid cross-device layout adaptation.
- **Vanilla JavaScript (ES6+):**
  - Multi-destination state management (`userItinerary` array).
  - Real-time DOM manipulation, dynamic HTML templating, and multi-currency formatting.
  - Zero heavy third-party framework dependencies for instant loading speed.

---

##  4. Setup & Local Preview Instructions

### Prerequisites
Any standard web browser (Chrome, Edge, Firefox, Safari).

### Running Locally:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/zreyeah-png/exploravista.git
   cd exploravista
   ```
2. **Open the website:**
   - Double click `index.html` to open it in your browser.
   - Or open in VS Code with the **Live Server** extension.

---

##  5. Deployment (GitHub Pages)

This project is deployed live using **GitHub Pages**:
- **Live Demo Link:** [https://zreyeah-png.github.io/exploravista/](https://zreyeah-png.github.io/exploravista/)
- **GitHub Repository:** [https://github.com/zreyeah-png/exploravista](https://github.com/zreyeah-png/exploravista)

---

##  6. Project Structure

```
exploravista/
│
├── index.html          # Semantic HTML structure & multi-destination controls
├── style.css           # Responsive styling & warm cozy design tokens
├── script.js           # 10 countries database, itinerary builder & cost engine
└── README.md           # Project documentation & instructions
```

---

## 📄 License
Created for academic demonstration and portfolio submission.
