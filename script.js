/**
 * RoamReady — Interactive Travel Discovery & Cost Estimator Engine
 * Fully commented and beginner-friendly!
 */

// 1. Destination Database (Photos, Top Spots, Living & Flight Costs)
const travelDatabase = {
  italy: {
    name: "Italy",
    flag: "🇮🇹",
    title: "Exploring Italy: Ancient Wonders & Sunlit Coasts",
    subtext: "From the romantic canals of Venice to the ancient Roman Colosseum and cliffside coastal villages.",
    bestTime: "April – June & Sept – October",
    currency: "Euro (€)",
    language: "Italian (English widely spoken)",
    visa: "Schengen Visa",
    // Flights from various origins in USD
    flightsUSD: {
      India: 600,
      USA: 750,
      UK: 120,
      UAE: 380,
      Singapore: 720,
      Australia: 1100
    },
    // Daily rates per person/room in USD
    dailyRatesUSD: {
      budget: { hotel: 45, food: 30, activity: 15 },
      moderate: { hotel: 120, food: 55, activity: 30 },
      luxury: { hotel: 320, food: 140, activity: 80 }
    },
    // Iconic Attractions
    attractions: [
      {
        name: "The Colosseum & Roman Forum",
        location: "Rome, Italy",
        desc: "Step inside the grand amphitheater where gladiators fought, followed by a walk through the ancient political heart of the Roman Empire.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
        highlight: "Historic Icon"
      },
      {
        name: "Grand Canal & Gondolas",
        location: "Venice, Italy",
        desc: "Drift along the labyrinth of marble palaces reflecting over green lagoon waters in the world's most romantic floating city.",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
        highlight: "Scenic Waterfront"
      },
      {
        name: "Amalfi Coast & Positano",
        location: "Campania, Italy",
        desc: "Pastel-hued cliffside villas tumbling dramatically down into the turquoise Tyrrhenian Sea, lined with fresh lemon groves.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        highlight: "Coastal Paradise"
      }
    ]
  },

  japan: {
    name: "Japan",
    flag: "🇯🇵",
    title: "Exploring Japan: Neon Metropolises & Serene Temples",
    subtext: "Experience futuristic bullet trains, cherry blossom gardens, torii gates, and culinary mastery.",
    bestTime: "March – May & Sept – November",
    currency: "Japanese Yen (¥)",
    language: "Japanese (Signage in English)",
    visa: "Tourist eVisa / Sticker",
    flightsUSD: {
      India: 550,
      USA: 850,
      UK: 780,
      UAE: 620,
      Singapore: 380,
      Australia: 650
    },
    dailyRatesUSD: {
      budget: { hotel: 50, food: 28, activity: 18 },
      moderate: { hotel: 130, food: 60, activity: 35 },
      luxury: { hotel: 350, food: 160, activity: 90 }
    },
    attractions: [
      {
        name: "Mount Fuji & Lake Kawaguchi",
        location: "Yamanashi, Japan",
        desc: "The sacred snow-capped volcano framed by peaceful alpine lakes and blooming cherry blossoms.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        highlight: "Natural Wonder"
      },
      {
        name: "Fushimi Inari-Taisha",
        location: "Kyoto, Japan",
        desc: "Walk through ten thousand vibrant vermilion torii gates winding up the sacred forested mountain.",
        image: "https://images.unsplash.com/photo-1478436127897-769e00d2c715?auto=format&fit=crop&w=800&q=80",
        highlight: "Ancient Shrine"
      },
      {
        name: "Shibuya Crossing & Shinjuku",
        location: "Tokyo, Japan",
        desc: "The electric heartbeat of Tokyo with towering neon screens, futuristic arcades, and bustling alleyway izakayas.",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        highlight: "City Lights"
      }
    ]
  },

  switzerland: {
    name: "Switzerland",
    flag: "🇨🇭",
    title: "Exploring Switzerland: Majestic Alpine Peaks & Crystal Lakes",
    subtext: "Snowy glaciers, alpine cogwheel trains, sparkling pristine lakes, and storybook wooden chalets.",
    bestTime: "June – September (Hiking) or Dec – March (Skiing)",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian",
    visa: "Schengen Visa",
    flightsUSD: {
      India: 620,
      USA: 780,
      UK: 90,
      UAE: 390,
      Singapore: 750,
      Australia: 1200
    },
    dailyRatesUSD: {
      budget: { hotel: 70, food: 45, activity: 25 },
      moderate: { hotel: 180, food: 90, activity: 50 },
      luxury: { hotel: 450, food: 220, activity: 120 }
    },
    attractions: [
      {
        name: "The Matterhorn Peak",
        location: "Zermatt, Switzerland",
        desc: "The iconic, razor-sharp pyramid mountain towering above the car-free alpine village of Zermatt.",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
        highlight: "Alpine Icon"
      },
      {
        name: "Lauterbrunnen Valley of 72 Waterfalls",
        location: "Bernese Oberland, Switzerland",
        desc: "A sheer glacial valley with cascading falls plunging over limestone cliffs, the inspiration for Rivendell.",
        image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80",
        highlight: "Glacial Valley"
      },
      {
        name: "Lake Lucerne & Chapel Bridge",
        location: "Lucerne, Switzerland",
        desc: "A fairytale wooden bridge spanning across turquoise glacial waters surrounded by snow-dusted mountains.",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
        highlight: "Historic Lake"
      }
    ]
  },

  thailand: {
    name: "Thailand",
    flag: "🇹🇭",
    title: "Exploring Thailand: Emerald Islands & Golden Temples",
    subtext: "Tropical white sand beaches, limestone sea cliffs, aromatic street night markets, and ancient Buddhist heritage.",
    bestTime: "November – April (Cool & Dry)",
    currency: "Thai Baht (฿)",
    language: "Thai (English common in tourist areas)",
    visa: "Visa on Arrival / Visa Free for many",
    flightsUSD: {
      India: 240,
      USA: 850,
      UK: 650,
      UAE: 320,
      Singapore: 120,
      Australia: 420
    },
    dailyRatesUSD: {
      budget: { hotel: 22, food: 14, activity: 10 },
      moderate: { hotel: 60, food: 32, activity: 22 },
      luxury: { hotel: 190, food: 85, activity: 55 }
    },
    attractions: [
      {
        name: "Phi Phi Islands & Maya Bay",
        location: "Krabi, Thailand",
        desc: "Towering karst cliffs guarding secluded white sand bays and clear sapphire waters filled with vibrant coral reefs.",
        image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80",
        highlight: "Tropical Lagoon"
      },
      {
        name: "The Grand Palace & Wat Phra Kaew",
        location: "Bangkok, Thailand",
        desc: "Spectacular golden spires, intricate mosaics, and the sacred Temple of the Emerald Buddha in Bangkok's royal heart.",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=80",
        highlight: "Royal Temple"
      },
      {
        name: "Doi Inthanon & Chiang Mai Temples",
        location: "Chiang Mai, Thailand",
        desc: "Misty northern jungles, hill tribe villages, elephant sanctuaries, and peaceful mountain pagodas.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        highlight: "Northern Peaks"
      }
    ]
  },

  france: {
    name: "France",
    flag: "🇫🇷",
    title: "Exploring France: Parisian Elegance & Lavender Hills",
    subtext: "Iconic world-class museums, cafe culture, medieval fairy tale castles, and sun-drenched vineyards.",
    bestTime: "April – June & Sept – November",
    currency: "Euro (€)",
    language: "French (English widely spoken in cities)",
    visa: "Schengen Visa",
    flightsUSD: {
      India: 580,
      USA: 700,
      UK: 90,
      UAE: 370,
      Singapore: 690,
      Australia: 1150
    },
    dailyRatesUSD: {
      budget: { hotel: 50, food: 32, activity: 18 },
      moderate: { hotel: 140, food: 65, activity: 35 },
      luxury: { hotel: 380, food: 160, activity: 90 }
    },
    attractions: [
      {
        name: "The Eiffel Tower & Seine River",
        location: "Paris, France",
        desc: "The timeless iron symbol of Paris sparkling over river cruises, open-air bistros, and tree-lined boulevards.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
        highlight: "World Icon"
      },
      {
        name: "Mont Saint-Michel Abbey",
        location: "Normandy, France",
        desc: "A dramatic medieval gravity-defying Gothic monastery crowning a tidal rock island in the Atlantic Ocean.",
        image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
        highlight: "Medieval Marvel"
      },
      {
        name: "Lavender Fields & Gorges",
        location: "Provence, France",
        desc: "Endless rolling purple scented lavender fields, rustic stone farmhouses, and breathtaking turquoise canyon gorges.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        highlight: "Country Charm"
      }
    ]
  }
};

// Currency Exchange Multipliers (Base: USD)
const currencyRates = {
  USD: { symbol: "$", rate: 1.0, format: "en-US" },
  INR: { symbol: "₹", rate: 83.5, format: "en-IN" },
  EUR: { symbol: "€", rate: 0.92, format: "de-DE" },
  GBP: { symbol: "£", rate: 0.79, format: "en-GB" }
};

// Current Active State
let currentDestination = "italy";

// --------------------------------------------------------------------------
// 2. DOM Rendering: Destination Showcase (Photos & Stats)
// --------------------------------------------------------------------------
function switchDestination(destKey) {
  currentDestination = destKey;
  const destData = travelDatabase[destKey];
  if (!destData) return;

  // Update Section Header Texts
  document.getElementById("destHeaderTitle").textContent = `${destData.title}`;
  document.getElementById("destHeaderSub").textContent = destData.subtext;

  // Update Quick Stats Bar
  const statsBar = document.getElementById("destStatsBar");
  statsBar.innerHTML = `
    <div class="dest-stat-item">
      <span>🗓️</span>
      <div><small style="color:var(--text-muted);display:block;">Best Season</small><strong>${destData.bestTime}</strong></div>
    </div>
    <div class="dest-stat-item">
      <span>💱</span>
      <div><small style="color:var(--text-muted);display:block;">Currency</small><strong>${destData.currency}</strong></div>
    </div>
    <div class="dest-stat-item">
      <span>🗣️</span>
      <div><small style="color:var(--text-muted);display:block;">Language</small><strong>${destData.language}</strong></div>
    </div>
    <div class="dest-stat-item">
      <span>🛂</span>
      <div><small style="color:var(--text-muted);display:block;">Visa</small><strong>${destData.visa}</strong></div>
    </div>
  `;

  // Render Photo Cards
  const gallery = document.getElementById("photoGalleryGrid");
  gallery.innerHTML = "";

  destData.attractions.forEach(place => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.innerHTML = `
      <div class="gallery-card-img-wrap">
        <span class="location-tag">${place.highlight}</span>
        <img src="${place.image}" alt="${place.name}" loading="lazy">
      </div>
      <div class="gallery-card-body">
        <h3>${place.name}</h3>
        <p>${place.desc}</p>
        <div class="gallery-card-footer">
          <span>📍 ${place.location}</span>
          <a href="#calculator" onclick="selectDestinationInCalc('${destKey}')"><strong>Estimate Cost →</strong></a>
        </div>
      </div>
    `;
    gallery.appendChild(card);
  });

  // Update Hero Pills Active State
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-dest") === destKey);
  });

  // Sync with Calculator dropdown
  const calcSelect = document.getElementById("calcDestination");
  if (calcSelect && calcSelect.value !== destKey) {
    calcSelect.value = destKey;
  }

  // Recalculate trip budget
  calculateTripCost();
}

// --------------------------------------------------------------------------
// 3. Trip Cost Calculation Logic
// --------------------------------------------------------------------------
function calculateTripCost() {
  const origin = document.getElementById("departureOrigin").value;
  const destKey = document.getElementById("calcDestination").value;
  const days = Math.max(1, parseInt(document.getElementById("tripDays").value) || 7);
  const travelers = parseInt(document.getElementById("travelerCount").value) || 2;
  const currencyKey = document.getElementById("currencySelect").value;

  // Selected radio button for travel style
  const styleRadio = document.querySelector('input[name="travelStyle"]:checked');
  const travelStyle = styleRadio ? styleRadio.value : "moderate";

  const destData = travelDatabase[destKey];
  const curr = currencyRates[currencyKey] || currencyRates.USD;

  // 1. Flight calculation (Roundtrip per traveler)
  const flightBaseUSD = destData.flightsUSD[origin] || 700;
  const totalFlightsUSD = flightBaseUSD * travelers;

  // 2. Hotel calculation (Assuming 2 travelers per hotel room)
  const roomsNeeded = Math.ceil(travelers / 2);
  const dailyHotelUSD = destData.dailyRatesUSD[travelStyle].hotel;
  const totalHotelUSD = dailyHotelUSD * days * roomsNeeded;

  // 3. Food & Dining
  const dailyFoodUSD = destData.dailyRatesUSD[travelStyle].food;
  const totalFoodUSD = dailyFoodUSD * days * travelers;

  // 4. Activities & Sightseeing
  const dailyActivityUSD = destData.dailyRatesUSD[travelStyle].activity;
  const totalActivityUSD = dailyActivityUSD * days * travelers;

  // Total in USD
  const grandTotalUSD = totalFlightsUSD + totalHotelUSD + totalFoodUSD + totalActivityUSD;
  const perPersonUSD = grandTotalUSD / travelers;

  // Helper function to format into chosen currency
  const formatMoney = (usdAmount) => {
    const converted = Math.round(usdAmount * curr.rate);
    return `${curr.symbol}${converted.toLocaleString(curr.format)}`;
  };

  // Update UI Elements
  document.getElementById("summaryTripTitle").textContent = 
    `Trip to ${destData.name} (${days} Days, ${travelers} Traveler${travelers > 1 ? 's' : ''})`;

  document.getElementById("totalCostDisplay").textContent = formatMoney(grandTotalUSD);
  document.getElementById("perPersonDisplay").textContent = `~${formatMoney(perPersonUSD)} per traveler`;

  document.getElementById("flightCostDisplay").textContent = formatMoney(totalFlightsUSD);
  document.getElementById("flightSubtext").textContent = `Roundtrip for ${travelers} traveler(s) from ${origin}`;

  document.getElementById("hotelCostDisplay").textContent = formatMoney(totalHotelUSD);
  document.getElementById("hotelSubtext").textContent = `${days} nights, ${roomsNeeded} room(s) (${travelStyle.toUpperCase()})`;

  document.getElementById("foodCostDisplay").textContent = formatMoney(totalFoodUSD);
  document.getElementById("activityCostDisplay").textContent = formatMoney(totalActivityUSD);
}

// When dropdown in calculator changes
function onCalculatorDestChange() {
  const chosen = document.getElementById("calcDestination").value;
  switchDestination(chosen);
}

// When user clicks 'Estimate Cost' from photo card
function selectDestinationInCalc(destKey) {
  switchDestination(destKey);
  const calcSection = document.getElementById("calculator");
  calcSection.scrollIntoView({ behavior: "smooth" });
}

// --------------------------------------------------------------------------
// 4. Mobile Navigation & Setup Listeners
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Pill button clicks
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const dest = btn.getAttribute("data-dest");
      switchDestination(dest);
    });
  });

  // Mobile menu toggle
  const toggleBtn = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
    });
  });

  // Initial load
  switchDestination("italy");
});
