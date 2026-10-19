/**
 * ExploraVista — Multi-City Travel Discovery & Trip Cost Estimator Engine
 * Features: 10 Global Destinations + Multi-Stop Custom Itinerary Builder
 */

// 1. Database of 10 Global Destinations
const travelDatabase = {
  italy: {
    name: "Italy",
    region: "Europe",
    title: "Exploring Italy: Ancient Wonders & Sunlit Coasts",
    subtext: "From the romantic canals of Venice to the ancient Roman Colosseum and cliffside coastal villages.",
    bestTime: "April – June & Sept – October",
    currency: "Euro (€)",
    language: "Italian (English common)",
    visa: "Schengen Visa",
    flightsUSD: {
      India: 600, USA: 750, UK: 120, UAE: 380, Singapore: 720, Australia: 1100, Canada: 820, Germany: 110
    },
    dailyRatesUSD: {
      budget: { hotel: 45, food: 30, activity: 15 },
      moderate: { hotel: 120, food: 55, activity: 30 },
      luxury: { hotel: 320, food: 140, activity: 80 }
    },
    attractions: [
      {
        name: "The Colosseum & Roman Forum",
        location: "Rome, Italy",
        desc: "Step inside the grand amphitheater where gladiators fought, followed by a walk through the ancient heart of Rome.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
        highlight: "Historic Icon"
      },
      {
        name: "Grand Canal & Gondolas",
        location: "Venice, Italy",
        desc: "Drift along the labyrinth of marble palaces reflecting over green lagoon waters in the floating city.",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
        highlight: "Scenic Waterfront"
      },
      {
        name: "Amalfi Coast & Positano",
        location: "Campania, Italy",
        desc: "Pastel-hued cliffside villas tumbling dramatically down into the turquoise Tyrrhenian Sea.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        highlight: "Coastal Paradise"
      }
    ]
  },

  japan: {
    name: "Japan",
    region: "Asia",
    title: "Exploring Japan: Neon Metropolises & Serene Temples",
    subtext: "Experience futuristic bullet trains, cherry blossom gardens, torii gates, and culinary mastery.",
    bestTime: "March – May & Sept – November",
    currency: "Japanese Yen (¥)",
    language: "Japanese (Signage in English)",
    visa: "Tourist eVisa",
    flightsUSD: {
      India: 550, USA: 850, UK: 780, UAE: 620, Singapore: 380, Australia: 650, Canada: 890, Germany: 760
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
        desc: "The electric heartbeat of Tokyo with towering neon screens, futuristic arcades, and alleyway izakayas.",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        highlight: "City Lights"
      }
    ]
  },

  switzerland: {
    name: "Switzerland",
    region: "Europe",
    title: "Exploring Switzerland: Majestic Alpine Peaks & Crystal Lakes",
    subtext: "Snowy glaciers, alpine cogwheel trains, sparkling pristine lakes, and storybook wooden chalets.",
    bestTime: "June – September (Hiking) or Dec – March (Skiing)",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian",
    visa: "Schengen Visa",
    flightsUSD: {
      India: 620, USA: 780, UK: 90, UAE: 390, Singapore: 750, Australia: 1200, Canada: 810, Germany: 80
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
    region: "Asia",
    title: "Exploring Thailand: Emerald Islands & Golden Temples",
    subtext: "Tropical white sand beaches, limestone sea cliffs, aromatic street night markets, and ancient Buddhist heritage.",
    bestTime: "November – April (Cool & Dry)",
    currency: "Thai Baht (฿)",
    language: "Thai (English common in tourist hubs)",
    visa: "Visa on Arrival / Visa Free",
    flightsUSD: {
      India: 240, USA: 850, UK: 650, UAE: 320, Singapore: 120, Australia: 420, Canada: 890, Germany: 620
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
        desc: "Towering karst cliffs guarding secluded white sand bays and clear sapphire waters filled with coral reefs.",
        image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80",
        highlight: "Tropical Lagoon"
      },
      {
        name: "The Grand Palace & Wat Phra Kaew",
        location: "Bangkok, Thailand",
        desc: "Spectacular golden spires, intricate mosaics, and the sacred Temple of the Emerald Buddha.",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=80",
        highlight: "Royal Temple"
      },
      {
        name: "Doi Inthanon & Chiang Mai Temples",
        location: "Chiang Mai, Thailand",
        desc: "Misty northern jungles, hill tribe villages, elephant sanctuaries, and mountain pagodas.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        highlight: "Northern Peaks"
      }
    ]
  },

  france: {
    name: "France",
    region: "Europe",
    title: "Exploring France: Parisian Elegance & Lavender Hills",
    subtext: "Iconic world-class museums, cafe culture, medieval fairy tale castles, and sun-drenched vineyards.",
    bestTime: "April – June & Sept – November",
    currency: "Euro (€)",
    language: "French (English common in cities)",
    visa: "Schengen Visa",
    flightsUSD: {
      India: 580, USA: 700, UK: 90, UAE: 370, Singapore: 690, Australia: 1150, Canada: 750, Germany: 90
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
        desc: "The timeless iron symbol of Paris sparkling over river cruises and tree-lined boulevards.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
        highlight: "World Icon"
      },
      {
        name: "Mont Saint-Michel Abbey",
        location: "Normandy, France",
        desc: "A dramatic medieval gravity-defying Gothic monastery crowning a tidal rock island in the Atlantic.",
        image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
        highlight: "Medieval Marvel"
      },
      {
        name: "Lavender Fields & Gorges",
        location: "Provence, France",
        desc: "Endless rolling purple scented lavender fields, rustic stone farmhouses, and canyon gorges.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        highlight: "Country Charm"
      }
    ]
  },

  spain: {
    name: "Spain",
    region: "Europe",
    title: "Exploring Spain: Vibrant Plazas, Tapas & Coastal Sun",
    subtext: "Gothic architecture, Moorish palaces, flamenco rhythms, and golden Mediterranean beaches.",
    bestTime: "April – June & September – October",
    currency: "Euro (€)",
    language: "Spanish (English common in tourist areas)",
    visa: "Schengen Visa",
    flightsUSD: {
      India: 570, USA: 680, UK: 75, UAE: 360, Singapore: 690, Australia: 1120, Canada: 740, Germany: 85
    },
    dailyRatesUSD: {
      budget: { hotel: 42, food: 25, activity: 15 },
      moderate: { hotel: 110, food: 50, activity: 28 },
      luxury: { hotel: 300, food: 130, activity: 75 }
    },
    attractions: [
      {
        name: "La Sagrada Família",
        location: "Barcelona, Spain",
        desc: "Antoni Gaudí's breathtaking forest-like basilica with towering sculptural spires and stained-glass light.",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
        highlight: "Gaudí Masterpiece"
      },
      {
        name: "The Alhambra Fortress",
        location: "Granada, Spain",
        desc: "A sprawling Moorish palace fortress complex with reflecting pools, intricate tilework, and Sierra Nevada views.",
        image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80",
        highlight: "Moorish Wonder"
      },
      {
        name: "Plaza de España & Seville Cathedral",
        location: "Seville, Spain",
        desc: "Grand semicircle palace with ceramic tiled alcoves and canals where rowboats drift in Andalusian sun.",
        image: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=800&q=80",
        highlight: "Andalusian Beauty"
      }
    ]
  },

  greece: {
    name: "Greece",
    region: "Europe",
    title: "Exploring Greece: Whitewashed Isles & Mythological Temples",
    subtext: "Cobblestone seaside alleyways, azure domed churches, ancient Acropolis ruins, and olive groves.",
    bestTime: "May – June & September – October",
    currency: "Euro (€)",
    language: "Greek (English very widely spoken)",
    visa: "Schengen Visa",
    flightsUSD: {
      India: 560, USA: 750, UK: 110, UAE: 340, Singapore: 680, Australia: 1150, Canada: 790, Germany: 95
    },
    dailyRatesUSD: {
      budget: { hotel: 45, food: 26, activity: 15 },
      moderate: { hotel: 115, food: 52, activity: 28 },
      luxury: { hotel: 340, food: 140, activity: 80 }
    },
    attractions: [
      {
        name: "Oia Cliffside & Blue Domes",
        location: "Santorini, Greece",
        desc: "The world's most photographed sunset spot, perched high on caldera cliffs over the Aegean Sea.",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
        highlight: "Iconic Sunset"
      },
      {
        name: "The Acropolis & Parthenon",
        location: "Athens, Greece",
        desc: "The ancient cradle of democracy and philosophy standing proudly over the Athens skyline since 447 BC.",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80",
        highlight: "Ancient Heritage"
      },
      {
        name: "Navagio Shipwreck Beach",
        location: "Zakynthos, Greece",
        desc: "An exposed sandy cove surrounded by sheer white limestone cliffs holding a rusty stranded freighter.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        highlight: "Secret Cove"
      }
    ]
  },

  uae: {
    name: "Dubai / UAE",
    region: "Middle East",
    title: "Exploring UAE: Futuristic Skylines & Golden Desert Dunes",
    subtext: "Record-breaking skyscrapers, luxury desert glamping, grand marble mosques, and traditional spice souks.",
    bestTime: "November – March (Pleasant Winter Sun)",
    currency: "UAE Dirham (AED)",
    language: "Arabic (English is the primary lingua franca)",
    visa: "Tourist eVisa / Visa on Arrival",
    flightsUSD: {
      India: 220, USA: 750, UK: 350, UAE: 0, Singapore: 380, Australia: 800, Canada: 820, Germany: 340
    },
    dailyRatesUSD: {
      budget: { hotel: 40, food: 25, activity: 20 },
      moderate: { hotel: 120, food: 55, activity: 40 },
      luxury: { hotel: 380, food: 160, activity: 110 }
    },
    attractions: [
      {
        name: "Burj Khalifa & Dubai Fountain",
        location: "Dubai, UAE",
        desc: "The tallest tower in human history rising 828 meters into the sky with choreographed water fountains below.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        highlight: "World's Tallest"
      },
      {
        name: "Sheikh Zayed Grand Mosque",
        location: "Abu Dhabi, UAE",
        desc: "One of the world's largest mosques crafted with pure white Macedonian marble, gold, and crystal chandeliers.",
        image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=800&q=80",
        highlight: "Architectural Marvel"
      },
      {
        name: "Desert Conservation Safari",
        location: "Dubai Desert, UAE",
        desc: "Dune bashing in 4x4s, camel riding at sunset, stargazing, and traditional bedouin campfire feasts.",
        image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&w=800&q=80",
        highlight: "Desert Adventure"
      }
    ]
  },

  indonesia: {
    name: "Bali / Indonesia",
    region: "Asia",
    title: "Exploring Bali: Jungle Cascades, Sacred Temples & Surf",
    subtext: "Emerald terraced rice paddies, volcanic lakes, beach clubs, and deep spiritual wellness culture.",
    bestTime: "April – October (Dry Season)",
    currency: "Indonesian Rupiah (IDR)",
    language: "Indonesian & Balinese (English common)",
    visa: "Visa on Arrival (e-VOA)",
    flightsUSD: {
      India: 350, USA: 920, UK: 720, UAE: 480, Singapore: 120, Australia: 280, Canada: 950, Germany: 740
    },
    dailyRatesUSD: {
      budget: { hotel: 20, food: 12, activity: 12 },
      moderate: { hotel: 65, food: 30, activity: 25 },
      luxury: { hotel: 220, food: 85, activity: 60 }
    },
    attractions: [
      {
        name: "Tegalalang Rice Terraces & Swing",
        location: "Ubud, Bali",
        desc: "Step through dramatic green stepped valley paddies maintained through centuries-old Balinese irrigation.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        highlight: "Lush Terraces"
      },
      {
        name: "Uluwatu Clifftop Temple",
        location: "South Bali, Indonesia",
        desc: "Perched high on a 70-meter steep sea cliff overlooking crashing Indian Ocean waves and sunset Kecak fire dances.",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
        highlight: "Cliffside Sunset"
      },
      {
        name: "Kelingking T-Rex Beach",
        location: "Nusa Penida, Bali",
        desc: "An awe-inspiring coastal formation resembling a Tyrannosaurus Rex overlooking secluded turquoise surf.",
        image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80",
        highlight: "Island Wonder"
      }
    ]
  },

  uk: {
    name: "United Kingdom",
    region: "Europe",
    title: "Exploring UK: Historic Castles, Royal Parks & Highlands",
    subtext: "Red double-decker buses, world-class free museums, dramatic Scottish lochs, and historic cobblestone pubs.",
    bestTime: "May – September (Long daylight hours)",
    currency: "British Pound (£)",
    language: "English",
    visa: "UK Standard Visitor Visa",
    flightsUSD: {
      India: 580, USA: 550, UK: 0, UAE: 380, Singapore: 700, Australia: 1050, Canada: 620, Germany: 80
    },
    dailyRatesUSD: {
      budget: { hotel: 55, food: 32, activity: 18 },
      moderate: { hotel: 150, food: 70, activity: 38 },
      luxury: { hotel: 400, food: 180, activity: 95 }
    },
    attractions: [
      {
        name: "Big Ben & Westminster Palace",
        location: "London, England",
        desc: "The gothic clock tower and parliament flanking the River Thames, surrounded by iconic red telephone boxes.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
        highlight: "Royal Capital"
      },
      {
        name: "Edinburgh Castle & Royal Mile",
        location: "Edinburgh, Scotland",
        desc: "A historic fortress sitting atop an extinct volcanic crag overlooking misty Scottish cobblestones.",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
        highlight: "Scottish Fortress"
      },
      {
        name: "Isle of Skye & The Quiraing",
        location: "Highlands, Scotland",
        desc: "Dramatic cinematic landscapes of ancient rock slips, fairy pools, and windswept green cliffs.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        highlight: "Highland Scenery"
      }
    ]
  }
};

// Currency Exchange Multipliers (Base: USD)
const currencyRates = {
  INR: { symbol: "₹", rate: 83.5, format: "en-IN" },
  USD: { symbol: "$", rate: 1.0, format: "en-US" },
  EUR: { symbol: "€", rate: 0.92, format: "de-DE" },
  GBP: { symbol: "£", rate: 0.79, format: "en-GB" },
  AUD: { symbol: "A$", rate: 1.54, format: "en-AU" }
};

// --------------------------------------------------------------------------
// 2. Multi-Destination Itinerary State
// --------------------------------------------------------------------------
// Default: Starts with Italy for 7 days
let userItinerary = [
  { destKey: "italy", days: 7 }
];

let currentlyViewedDestination = "italy";

// --------------------------------------------------------------------------
// 3. Destination Showcase Switcher (Photos & Specs)
// --------------------------------------------------------------------------
function switchDestination(destKey) {
  currentlyViewedDestination = destKey;
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
          <button class="add-card-btn" onclick="addDestinationToItinerary('${destKey}')">+ Add to Trip</button>
        </div>
      </div>
    `;
    gallery.appendChild(card);
  });

  // Update Hero Pills Active State
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-dest") === destKey);
  });

  updateItineraryUI();
}

// --------------------------------------------------------------------------
// 4. Multi-Destination Itinerary Operations
// --------------------------------------------------------------------------
function addDestinationToItinerary(destKey) {
  // Check if already in itinerary
  const exists = userItinerary.find(item => item.destKey === destKey);
  if (exists) {
    exists.days += 3; // Increase stay duration
  } else {
    userItinerary.push({ destKey: destKey, days: 4 });
  }

  updateItineraryUI();
  calculateTripCost();

  // Scroll to calculator
  const calcSection = document.getElementById("calculator");
  calcSection.scrollIntoView({ behavior: "smooth" });
}

function removeDestinationFromItinerary(index) {
  if (userItinerary.length <= 1) {
    alert("Your trip must have at least 1 destination!");
    return;
  }
  userItinerary.splice(index, 1);
  updateItineraryUI();
  calculateTripCost();
}

function updateDestinationDays(index, newDays) {
  const days = Math.max(1, parseInt(newDays) || 1);
  userItinerary[index].days = days;
  updateItineraryUI();
  calculateTripCost();
}

function toggleCurrentDestinationInItinerary() {
  addDestinationToItinerary(currentlyViewedDestination);
}

function onDropdownAddDest() {
  const select = document.getElementById("quickAddDestDropdown");
  const chosen = select.value;
  if (chosen) {
    addDestinationToItinerary(chosen);
    select.value = "";
  }
}

// Render the Itinerary Ribbon and Cards
function updateItineraryUI() {
  const container = document.getElementById("itineraryTagsContainer");
  const countSpan = document.getElementById("navItineraryCount");
  const totalStopsSpan = document.getElementById("itineraryTotalStops");

  if (countSpan) countSpan.textContent = userItinerary.length;
  if (totalStopsSpan) totalStopsSpan.textContent = userItinerary.length;

  container.innerHTML = "";

  userItinerary.forEach((item, index) => {
    const dest = travelDatabase[item.destKey];
    if (!dest) return;

    const chip = document.createElement("div");
    chip.className = "itinerary-chip";
    chip.innerHTML = `
      <div class="chip-number">Stop ${index + 1}</div>
      <div class="chip-content">
        <strong class="chip-dest-name">${dest.name}</strong>
        <div class="chip-days-control">
          <input type="number" min="1" max="60" value="${item.days}" 
                 onchange="updateDestinationDays(${index}, this.value)">
          <small>days</small>
        </div>
      </div>
      ${userItinerary.length > 1 ? `<button class="chip-remove-btn" onclick="removeDestinationFromItinerary(${index})" title="Remove this stop">×</button>` : ''}
    `;
    container.appendChild(chip);
  });

  // Populate Add Dropdown with remaining unselected countries
  const dropdown = document.getElementById("quickAddDestDropdown");
  dropdown.innerHTML = `<option value="">+ Add Another Country...</option>`;
  Object.keys(travelDatabase).forEach(key => {
    const dest = travelDatabase[key];
    const isAdded = userItinerary.some(item => item.destKey === key);
    const option = document.createElement("option");
    option.value = key;
    option.textContent = isAdded ? `✓ ${dest.name} (Already in trip)` : `+ ${dest.name}`;
    dropdown.appendChild(option);
  });

  // Update current viewed button text
  const addBtn = document.getElementById("addCurrentDestBtn");
  if (addBtn) {
    const isCurrentInItinerary = userItinerary.some(item => item.destKey === currentlyViewedDestination);
    addBtn.textContent = isCurrentInItinerary ? "✓ In Your Itinerary (+Add Days)" : "+ Add to My Itinerary";
  }
}

// --------------------------------------------------------------------------
// 5. Multi-City Trip Cost Calculation Logic
// --------------------------------------------------------------------------
function calculateTripCost() {
  const origin = document.getElementById("departureOrigin").value;
  const travelers = parseInt(document.getElementById("travelerCount").value) || 2;
  const currencyKey = document.getElementById("currencySelect").value;

  const styleRadio = document.querySelector('input[name="travelStyle"]:checked');
  const travelStyle = styleRadio ? styleRadio.value : "moderate";

  const curr = currencyRates[currencyKey] || currencyRates.INR;

  // 1. International Return Flights
  // Base flight to the furthest/first destination from origin
  const firstDestKey = userItinerary[0].destKey;
  const firstDest = travelDatabase[firstDestKey];
  const primaryFlightUSD = (firstDest.flightsUSD[origin] || 700) * travelers;

  // 2. Inter-City Transit between destinations (if multi-stop)
  let interCityTransitUSD = 0;
  if (userItinerary.length > 1) {
    // ~$90 USD average per person for regional train/flight per leg
    const transitPerLegUSD = 95 * travelers;
    interCityTransitUSD = transitPerLegUSD * (userItinerary.length - 1);
  }

  // 3. Stays, Food, Activities across all destinations in itinerary
  let totalHotelUSD = 0;
  let totalFoodUSD = 0;
  let totalActivityUSD = 0;
  let totalTripDays = 0;

  const roomsNeeded = Math.ceil(travelers / 2);

  userItinerary.forEach(item => {
    const dest = travelDatabase[item.destKey];
    if (!dest) return;

    totalTripDays += item.days;

    // Hotels
    const dailyHotel = dest.dailyRatesUSD[travelStyle].hotel;
    totalHotelUSD += dailyHotel * item.days * roomsNeeded;

    // Food
    const dailyFood = dest.dailyRatesUSD[travelStyle].food;
    totalFoodUSD += dailyFood * item.days * travelers;

    // Activities
    const dailyActivity = dest.dailyRatesUSD[travelStyle].activity;
    totalActivityUSD += dailyActivity * item.days * travelers;
  });

  // Grand Total in USD
  const grandTotalUSD = primaryFlightUSD + interCityTransitUSD + totalHotelUSD + totalFoodUSD + totalActivityUSD;
  const perPersonUSD = grandTotalUSD / travelers;

  // Formatting Helper
  const formatMoney = (usdAmount) => {
    const converted = Math.round(usdAmount * curr.rate);
    return `${curr.symbol}${converted.toLocaleString(curr.format)}`;
  };

  // UI Updates
  const destNamesList = userItinerary.map(i => travelDatabase[i.destKey]?.name).join(" + ");
  document.getElementById("summaryTripTitle").textContent = 
    `Trip to ${destNamesList} (${totalTripDays} Total Days, ${travelers} Traveler${travelers > 1 ? 's' : ''})`;

  document.getElementById("summarySubCities").textContent = 
    `Covering ${userItinerary.length} destination stop(s) over ${totalTripDays} combined days`;

  document.getElementById("totalCostDisplay").textContent = formatMoney(grandTotalUSD);
  document.getElementById("perPersonDisplay").textContent = `~${formatMoney(perPersonUSD)} per traveler`;

  document.getElementById("flightCostDisplay").textContent = formatMoney(primaryFlightUSD);
  document.getElementById("flightSubtext").textContent = `Roundtrip international flights for ${travelers} from ${origin}`;

  // Inter-city transit visibility
  const transitRow = document.getElementById("interCityTransitItem");
  if (userItinerary.length > 1) {
    transitRow.style.display = "flex";
    document.getElementById("transitCostDisplay").textContent = formatMoney(interCityTransitUSD);
    document.getElementById("transitSubtext").textContent = 
      `High-speed rail/flights connecting your ${userItinerary.length} destinations`;
  } else {
    transitRow.style.display = "none";
  }

  document.getElementById("hotelCostDisplay").textContent = formatMoney(totalHotelUSD);
  document.getElementById("hotelSubtext").textContent = `${totalTripDays} nights total (${roomsNeeded} room${roomsNeeded > 1 ? 's' : ''}, ${travelStyle.toUpperCase()} style)`;

  document.getElementById("foodCostDisplay").textContent = formatMoney(totalFoodUSD);
  document.getElementById("activityCostDisplay").textContent = formatMoney(totalActivityUSD);
}

// --------------------------------------------------------------------------
// 6. Setup Listeners on Page Load
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Hero pill clicks
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const dest = btn.getAttribute("data-dest");
      switchDestination(dest);
    });
  });

  // Mobile menu toggle
  const toggleBtn = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
    });
  }

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
    });
  });

  // Initial load
  switchDestination("italy");
  updateItineraryUI();
  calculateTripCost();
});
