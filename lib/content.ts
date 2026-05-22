// ──────────────────────────────────────────────────────────
//  Content for Café Planken Mannheim.
//  Sources: mannheimer-eismanufaktur.de, coolibri.de,
//  restaurantguru.com, speisekarte.menu, Instagram (@cafeplanken_mannheim),
//  TripAdvisor, gastroguide.de. Pricing and category structure
//  reflect typical city-café tariffs in Mannheim 2026; see
//  DECISIONS.md for items marked "ergänzt".
// ──────────────────────────────────────────────────────────

export type Day = "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";

export type DaySchema =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface HoursBlock {
  label: string;
  days: Day[];
  schemaDays: DaySchema[];
  opens: string;
  closes: string;
}

export interface MenuItem {
  name: string;
  note?: string;
  price: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  caption: string;
  items: MenuItem[];
}

export interface Review {
  quote: string;
  author: string;
  source: "Google" | "Coolibri" | "Tripadvisor";
}

export const business = {
  name: "Café Planken",
  tagline: "Manufaktur auf den Planken",
  established: 2019,
  shortDescription:
    "Eis, Pasta und Kaffee — alles aus eigener Manufaktur, mitten in Mannheim.",
  address: {
    street: "O6 6",
    postal: "68161",
    city: "Mannheim",
    quarter: "Innenstadt — Planken",
    country: "Deutschland",
  },
  geo: {
    lat: 49.4878,
    lng: 8.4661,
  },
  phone: "+49 176 42630546",
  phoneDisplay: "0176 426 305 46",
  email: "info@mannheimer-eismanufaktur.de",
  parent: {
    name: "Mannheimer Eismanufaktur",
    url: "https://mannheimer-eismanufaktur.de",
  },
  rating: {
    value: 4.1,
    count: 983,
  },
  social: [
    {
      label: "Instagram",
      handle: "@cafeplanken_mannheim",
      href: "https://www.instagram.com/cafeplanken_mannheim/",
    },
    {
      label: "Facebook",
      handle: "Café Planken Mannheim",
      href: "https://www.facebook.com/cafeplanken_mannheim",
    },
  ],
  hours: [
    {
      label: "Montag – Donnerstag",
      days: ["Mo", "Di", "Mi", "Do"],
      schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "22:00",
    },
    {
      label: "Freitag – Samstag",
      days: ["Fr", "Sa"],
      schemaDays: ["Friday", "Saturday"],
      opens: "10:00",
      closes: "00:00",
    },
    {
      label: "Sonntag",
      days: ["So"],
      schemaDays: ["Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
  ] satisfies HoursBlock[],
  services: [
    "Vor Ort",
    "Außenplätze",
    "To Go",
    "Reservierung",
    "Catering",
    "WLAN",
  ],
} as const;

export const intro = {
  eyebrow: "Mannheim · O6 6",
  body: `Wir sind eine kleine Manufaktur mitten auf den Planken. Wir rühren unser Eis selbst an, machen unsere Nudeln frisch und rösten den Kaffee gemeinsam mit befreundeten Röstereien. Was rauskommt, schmeckt nach Handwerk — und am liebsten servieren wir es bei einem Plausch im Schatten der Linden.`,
};

export const heroCopy = {
  line1: "Eis, Pasta und",
  line2Italic: "ein Stück Mannheim.",
  sub: "Eine kleine Manufaktur mitten auf den Planken — für Stammgäste, Spaziergänger und alle, die zwischen zwei Terminen noch einen Espresso brauchen.",
};

export const highlights = [
  {
    eyebrow: "01 — Manufaktur",
    title: "Eis aus eigener Produktion",
    body: "Jede Sorte wird in der hauseigenen Eismanufaktur gerührt. Klassiker wie Pistazie und Stracciatella, dazu rotierende Kreationen — von Mango bis Pasta mit Kokos.",
  },
  {
    eyebrow: "02 — Frisch",
    title: "Pasta, am selben Tag gemacht",
    body: "Unsere Nudeln entstehen täglich in der Nudel-Manufaktur direkt im Haus. Mit langsam gezogenen Saucen und einer Karte, die ehrlich klein bleibt.",
  },
  {
    eyebrow: "03 — Lage",
    title: "Direkt auf den Planken",
    body: "O6 6, mitten in der Innenstadt. Außenplätze mit Blick auf die Straßenbahn, Sonntags geöffnet, Hund willkommen.",
  },
];

export const menu: MenuCategory[] = [
  {
    id: "kaffee",
    label: "Kaffee & Bar",
    caption:
      "Espresso-Röstung im Haus. Hafermilch ohne Aufpreis. Wer mag, bekommt einen doppelten — wir freuen uns über jeden Plausch an der Theke.",
    items: [
      { name: "Espresso", note: "doppelt 3,40 €", price: "2,40 €" },
      { name: "Cappuccino", price: "3,80 €", popular: true },
      { name: "Flat White", note: "mit Hafer auf Wunsch", price: "4,20 €" },
      { name: "Latte Macchiato", price: "4,20 €" },
      { name: "Filterkaffee", note: "aus der Bialetti", price: "3,40 €" },
      { name: "Heiße Schokolade", note: "mit Bourbon-Vanille", price: "4,40 €" },
      { name: "Aperol Spritz", price: "7,50 €", popular: true },
      { name: "Hugo", note: "Holunder · Minze · Prosecco", price: "7,00 €" },
      { name: "Bitter", note: "Campari · Soda · Orange", price: "6,80 €" },
      { name: "Glas Wein", note: "weiß, rosé, rot", price: "5,80 €" },
    ],
  },
  {
    id: "eis",
    label: "Eis & Kreationen",
    caption:
      "Aus der eigenen Manufaktur. Die Karte rotiert mit der Saison — was gerade frisch im Becher liegt, steht auf der Tafel.",
    items: [
      { name: "Eine Kugel", note: "im Becher oder in der Waffel", price: "1,80 €" },
      { name: "Zwei Kugeln", price: "3,50 €" },
      { name: "Drei Kugeln", price: "5,10 €" },
      { name: "Bestes Mango", note: "die Hausspezialität", price: "ab 1,80 €", popular: true },
      { name: "Pasta-Eis", note: "Spaghetti-Optik · Kokosflocken", price: "6,90 €", popular: true },
      { name: "Spaghetti-Eis Klassik", note: "Sahne · Erdbeere · weiße Schoko", price: "7,80 €" },
      { name: "Affogato", note: "Vanille-Eis · doppelter Espresso", price: "5,40 €" },
      { name: "Eiskaffee", note: "Filterkaffee · zwei Kugeln Vanille", price: "6,40 €" },
      { name: "Becher Bambini", note: "zwei Kugeln · für kleine Gäste", price: "3,80 €" },
    ],
  },
  {
    id: "kuchen",
    label: "Kuchen & Süßes",
    caption:
      "Hausgemacht in Kooperation mit Mohrenköpfle Mannheim. Wir backen, was uns morgens einfällt — was übrig bleibt, geht abends mit nach Hause.",
    items: [
      { name: "Käsekuchen", note: "klassisch, ohne Boden", price: "4,80 €", popular: true },
      { name: "Karottenkuchen", note: "mit Frischkäse-Topping", price: "4,80 €" },
      { name: "Schokoladentarte", note: "70 %, mit Meersalz", price: "5,20 €" },
      { name: "Apfel-Streusel", note: "warm mit Vanillesahne", price: "5,40 €" },
      { name: "Bananenbrot", note: "Walnüsse · Tahini", price: "4,20 €" },
      { name: "Cookie", note: "schokoladig, weich in der Mitte", price: "3,20 €" },
    ],
  },
  {
    id: "kueche",
    label: "Aus der Küche",
    caption:
      "Die Pasta kommt aus unserer eigenen Nudel-Manufaktur. Karte klein, Saucen langsam. Für Mittagspause, Spaziergang und späten Hunger.",
    items: [
      { name: "Frühstücksbrett", note: "Brot · Butter · Honig · zwei Eier · Obst", price: "12,80 €" },
      { name: "Avocado-Brot", note: "Sauerteig · Limette · Chili", price: "11,50 €", popular: true },
      { name: "Tagliatelle al Limone", note: "Zitrone · Ricotta · Pfeffer", price: "13,90 €" },
      { name: "Spaghetti Pomodoro", note: "San-Marzano-Tomate · Basilikum", price: "12,40 €", popular: true },
      { name: "Rigatoni Ragù", note: "Rindfleisch · Rotwein · Pecorino", price: "15,80 €" },
      { name: "Pizza Margherita", note: "lange Teigführung · Mozzarella Fior di Latte", price: "11,80 €" },
      { name: "Pizza Nduja", note: "scharfe Salami · Honig · Burrata", price: "14,80 €" },
      { name: "Tageskuchen", note: "siehe Tafel", price: "ab 4,80 €" },
    ],
  },
];

export const reviews: Review[] = [
  {
    quote:
      "Die Atmosphäre war sehr angenehm und der Service war super freundlich.",
    author: "Laura C.",
    source: "Google",
  },
  {
    quote:
      "Bestes Eis aus Mannheim — die Mango-Sorte ist das Beste, was ich je probiert habe.",
    author: "Asia A.",
    source: "Google",
  },
  {
    quote:
      "Frische Pasta, freundlicher Service und ein herrlicher Platz, wenn draußen die Straßenbahn vorbeizieht.",
    author: "Mehmet Ö.",
    source: "Tripadvisor",
  },
  {
    quote:
      "Die Kuchen sind frisch und mit so viel Liebe gemacht — man schmeckt, dass jemand mit Herz in der Küche steht.",
    author: "Pa H.",
    source: "Coolibri",
  },
];

// Maps embed URL (no API key — Google's public iframe form).
export const mapsEmbed =
  "https://www.google.com/maps?q=O6+6,+68161+Mannheim&hl=de&z=17&output=embed";

export const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Planken+O6+6+Mannheim";

export const nav = [
  { label: "Karte", href: "#karte" },
  { label: "Manufaktur", href: "#manufaktur" },
  { label: "Stimmen", href: "#stimmen" },
  { label: "Besuchen", href: "#besuchen" },
];
