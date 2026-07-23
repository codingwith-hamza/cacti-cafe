// Central content + real business data for Cacti Café (Riyadh).
// Keeping copy here makes the section components clean and easy to re-edit.

export const site = {
  name: "Cacti Café",
  nameAr: "كاكتي",
  tagline: "An exceptional experience, wherever we are.",
  website: "https://cacti-sa.com/en/",

  location: {
    label: "Qurtubah",
    address: "Al Thoumamah Rd, Qurtubah",
    city: "Riyadh 13248",
    country: "Saudi Arabia",
    hoursPrimary: "Open 24 hours",
    hoursPrimaryDetail: "Every day, Qurtubah branch",
    hoursSecondary: "Al-Quds branch · 1:00 PM to 1:30 AM",
    mapsQuery: "Cacti Cafe Qurtubah Riyadh",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Cacti+Cafe+Qurtubah+Riyadh",
  },
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Coffee", href: "#coffee" },
  { label: "The room", href: "#interior" },
  { label: "Visit", href: "#visit" },
] as const;

// Signature drinks — presented editorially, not as product cards.
export const drinks = [
  {
    no: "01",
    name: "Spanish Latte",
    note: "Condensed milk, double ristretto, poured over slow ice.",
  },
  {
    no: "02",
    name: "Cacti Cold Brew",
    note: "Eighteen hours steeped. Clean, low-acid, quietly sweet.",
  },
  {
    no: "03",
    name: "Pistachio Flat White",
    note: "House pistachio, silk microfoam, a single origin base.",
  },
  {
    no: "04",
    name: "Saffron Cortado",
    note: "A local turn: Saudi saffron folded into warm milk.",
  },
] as const;

// "Why visit" — refined statements, no icons.
export const reasons = [
  {
    no: "01",
    title: "A garden that never sleeps",
    body: "Hundreds of living cacti under a double-height glass wall. The Qurtubah room is open around the clock.",
  },
  {
    no: "02",
    title: "Coffee made with intent",
    body: "A teal La Marzocco, single-origin beans and baristas who treat a cortado like a small ceremony.",
  },
  {
    no: "03",
    title: "A room built to slow you down",
    body: "River stone, warm pine and a sculptural stair. Come to work, to talk, or to sit with nothing at all.",
  },
] as const;
