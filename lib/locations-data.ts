export type LocationData = {
  slug: string;
  city: string;
  county: string;
  region: string;
  description: string;
  searchContext: string;
};

export const locationsData: LocationData[] = [
  {
    slug: "manchester",
    city: "Manchester",
    county: "Greater Manchester",
    region: "North West England",
    description: "one of the UK's most competitive and vibrant business cities",
    searchContext:
      "Manchester's local search landscape is highly competitive. Businesses in trades, home services, and professional services face fierce competition in the Google local pack.",
  },
  {
    slug: "london",
    city: "London",
    county: "Greater London",
    region: "South East England",
    description: "the UK's largest and most competitive local market",
    searchContext:
      "London's hyper-local nature means borough-level and neighbourhood-level targeting is essential. Generic 'London' rankings are hard to win — hyperlocal dominance is the smarter play.",
  },
  {
    slug: "birmingham",
    city: "Birmingham",
    county: "West Midlands",
    region: "Midlands",
    description: "the UK's second-largest city and a thriving hub for local service businesses",
    searchContext:
      "Birmingham's growing population and diverse service economy make Local SEO a critical growth channel for trades and service businesses across the city.",
  },
  {
    slug: "leeds",
    city: "Leeds",
    county: "West Yorkshire",
    region: "Yorkshire and the Humber",
    description: "Yorkshire's largest city and a major commercial centre",
    searchContext:
      "Leeds has a strong service economy with high demand for local tradespeople and professionals. Google Maps rankings are fiercely contested in the city centre and surrounding suburbs.",
  },
  {
    slug: "bristol",
    city: "Bristol",
    county: "Bristol",
    region: "South West England",
    description: "a fast-growing, innovative city with a strong local economy",
    searchContext:
      "Bristol's growing population and affluent suburbs create strong local search demand. Businesses that rank in the local pack see consistently high-quality leads.",
  },
  {
    slug: "sheffield",
    city: "Sheffield",
    county: "South Yorkshire",
    region: "Yorkshire and the Humber",
    description: "a diverse and ambitious city with a growing service sector",
    searchContext:
      "Sheffield's mix of residential neighbourhoods and business districts creates excellent local search opportunities for service businesses ready to compete.",
  },
  {
    slug: "liverpool",
    city: "Liverpool",
    county: "Merseyside",
    region: "North West England",
    description: "a city with a proud business heritage and strong community ties",
    searchContext:
      "Liverpool's strong sense of locality means customers actively prefer local businesses. A well-optimised Google Business Profile can transform how many customers you reach.",
  },
  {
    slug: "edinburgh",
    city: "Edinburgh",
    county: "City of Edinburgh",
    region: "Scotland",
    description: "Scotland's capital and one of the UK's most prosperous cities",
    searchContext:
      "Edinburgh's premium market means high-intent local searches from customers willing to pay for quality. Ranking in the Edinburgh local pack delivers some of the UK's best lead quality.",
  },
  {
    slug: "glasgow",
    city: "Glasgow",
    county: "City of Glasgow",
    region: "Scotland",
    description: "Scotland's largest city and a powerhouse of its economy",
    searchContext:
      "Glasgow's large population and strong local identity make it an excellent market for Local SEO. Customers search locally and trust local businesses — give them a reason to find you first.",
  },
  {
    slug: "cardiff",
    city: "Cardiff",
    county: "Cardiff",
    region: "Wales",
    description: "Wales's capital city and its most important business centre",
    searchContext:
      "Cardiff's growing status as a major UK city brings increasing local search volume. Being well-positioned in the Cardiff local pack puts you ahead of the majority of local competitors.",
  },
  {
    slug: "nottingham",
    city: "Nottingham",
    county: "Nottinghamshire",
    region: "East Midlands",
    description: "a dynamic East Midlands city with a growing service economy",
    searchContext:
      "Nottingham's compact city centre and surrounding suburbs create a well-defined local search market. Ranking in the local pack here delivers highly targeted, ready-to-buy leads.",
  },
  {
    slug: "newcastle",
    city: "Newcastle",
    county: "Tyne and Wear",
    region: "North East England",
    description: "the economic capital of North East England",
    searchContext:
      "Newcastle's tight-knit business community and strong local pride make Local SEO especially effective. Customers here are loyal — get found first and you keep them long-term.",
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locationsData.find((l) => l.slug === slug);
}
