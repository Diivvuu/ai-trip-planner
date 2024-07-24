export const SelectTavelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travels in exploration",
    icon: "🎰",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travels in tandem",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏚️",
    people: "3 to 4 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "⛵",
    people: "5 to 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "🪙",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location} for {totalDays} days for {traveler} with {budget} budget, give me a hotel options list with name, address,and correct/most recent image url (because sometimes image url's doesn't work i need them double checked), geo coordinates, rating, descriptions and suggest itinerary with placeName, placeDetails, placeImage URL, Geo Coordinates, ticket pricing, rating, time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format";
