// ---------------------------------------------------------------------------
// PACKAGE DATA
//
// This is the only file you should need to edit to add, remove or change
// a package. The React components read this list and generate all the
// cards automatically — you never need to touch the component code.
//
// "category" must be one of: "hiking", "family", "kids"
// It controls which section a package appears in and its accent color.
//
// To ADD a package: copy an existing object, give it a new unique "id",
// and fill in the fields.
//
// To REMOVE a package: delete its object from the array.
//
// "image" paths point to files in the public/images/ folder. Replace those
// image files with real photos (same filenames) and everything updates
// automatically. Using an https:// URL instead also works.
// ---------------------------------------------------------------------------

const packages = [
  // ---------------------------------------------------------------- hiking
  {
    id: 'mountain-hiking',
    category: 'hiking',
    name: 'Mountain Hiking',
    description:
      'A full day on Lebanon\'s high trails, through pine forest and open ridgeline with sweeping valley views.',
    duration: '5 hours',
    difficulty: 'Moderate',
    price: '$100',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'Water & trail snacks', 'First-aid kit', 'Transport from meeting point'],
  },
  {
    id: 'nature-walk',
    category: 'hiking',
    name: 'Nature Walk',
    description:
      'An easy, unhurried walk through forest trails and villages — a gentle way to see the countryside up close.',
    duration: '2.5 hours',
    difficulty: 'Easy',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'Water', 'Local plant & wildlife notes'],
  },
  {
    id: 'sunset-hike',
    category: 'hiking',
    name: 'Sunset Hike',
    description:
      'A short climb timed to reach a viewpoint just as the sky turns gold over the valley below.',
    duration: '3 hours',
    difficulty: 'Easy',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'Headlamp for the walk down', 'Hot tea at the summit'],
  },
  {
    id: 'waterfall-adventure',
    category: 'hiking',
    name: 'Waterfall Adventure',
    description:
      'A river-valley trail ending at one of Lebanon\'s waterfalls, with time to cool off and explore the pools.',
    duration: '5 hours',
    difficulty: 'Moderate',
    price: '$40',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'Water & snacks', 'Dry bag for valuables'],
  },

  // ---------------------------------------------------------------- family
  {
    id: 'family-trail-day',
    category: 'family',
    name: 'Family Trail Day',
    description:
      'A relaxed, flat-terrain trail built around younger legs and short attention spans, with plenty of stops to explore.',
    ageSuitability: 'All ages, buggy-friendly sections',
    duration: '3 hours',
    price: '$90 (up to 4 people)',
    activities: ['Nature scavenger hunt', 'Picnic stop', 'Photo spots'],
    image: 'https://images.unsplash.com/photo-1476611317561-60117649dd94?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'Water for the group', 'Picnic setup'],
  },
  {
    id: 'family-village-nature',
    category: 'family',
    name: 'Village & Nature Day',
    description:
      'A gentler day mixing a short walk with a visit to a mountain village — good for grandparents and toddlers alike.',
    ageSuitability: 'Ages 3 and up',
    duration: '4 hours',
    price: '$110 (up to 5 people)',
    activities: ['Village visit', 'Short nature walk', 'Local lunch stop (own cost)'],
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'Water for the group', 'Route planned around the group\'s pace'],
  },

  // ------------------------------------------------------------------ kids
  {
    id: 'outdoor-birthday-adventure',
    category: 'kids',
    name: 'Outdoor Birthday Adventure',
    description:
      'A full outdoor birthday party built around games, a short trail and a celebration moment in nature.',
    recommendedAge: '6–12 years',
    duration: '3 hours',
    groupSize: 'Up to 12 children',
    activities: ['Guided mini-hike', 'Team games', 'Birthday celebration moment'],
    price: '$180',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'All game equipment', 'Water for the group', 'Birthday sign for photos'],
  },
  {
    id: 'kids-hiking-adventure',
    category: 'kids',
    name: "Kids' Hiking Adventure",
    description:
      'A short, playful hike designed for young explorers, with stops built in for climbing, spotting wildlife and resting.',
    recommendedAge: '5–10 years',
    duration: '2 hours',
    groupSize: 'Up to 10 children',
    activities: ['Guided walk', 'Wildlife spotting', 'Snack break'],
    price: '$150',
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'Water for the group', 'Snack stop'],
  },
  {
    id: 'nature-games',
    category: 'kids',
    name: 'Nature Games',
    description:
      'An activity-first afternoon in a forest clearing, built around cooperative games rather than a set trail.',
    recommendedAge: '4–9 years',
    duration: '2 hours',
    groupSize: 'Up to 15 children',
    activities: ['Team games', 'Nature crafts', 'Group challenges'],
    price: '$160',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'All game equipment', 'Water for the group'],
  },
  {
    id: 'treasure-hunt',
    category: 'kids',
    name: 'Treasure Hunt',
    description:
      'A trail turned into a map-and-clues treasure hunt, ending with a small prize for every child.',
    recommendedAge: '5–11 years',
    duration: '2.5 hours',
    groupSize: 'Up to 12 children',
    activities: ['Map-reading challenge', 'Clue stations', 'Prize reveal'],
    price: '$170',
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=1200&auto=format&fit=crop',
    included: ['Certified guide', 'Treasure hunt props', 'Prizes for every child', 'Water for the group'],
  },
]

export default packages

// Category display metadata — labels and accent info used by the UI.
export const categories = {
  hiking: { label: 'Experiences', accent: 'clay' },
  family: { label: 'Family Packages', accent: 'sky' },
  kids: { label: 'Kids & Birthdays', accent: 'gold' },
}
