// ---------------------------------------------------------------------------
// SITE CONFIG
// Edit this file to update the guide's name, bio, and contact details.
// Nothing here touches the React components.
// ---------------------------------------------------------------------------

const siteConfig = {
  guideName: 'Charbel Abdallah',
  tagline: 'Explore Lebanon. Experience Nature.',
  intro:
    "Guided hiking trips, nature walks, family outings and kids' outdoor birthday adventures across Lebanon's mountains, valleys and coastline.",

  // Used for the "About" section.
  bio: [
    "I've spent the last nine years guiding hikers, families and school groups through Lebanon's trails — from the cedar forests of the Chouf to the waterfalls of the Qadisha Valley."
  ],
  experienceYears: 9,
  whyChooseMe: [
    'Small groups, so every trip stays personal',
    'Routes chosen for the season, weather and who is coming',
    'All safety gear and permits handled for you',
    'Comfortable with total beginners and seasoned hikers alike',
  ],

  // Contact details — update these to the guide's real information.
  whatsappNumber: '96171100721', // digits only, country code, no + or spaces
  instagramHandle: 'intothewild.lb',
  instagramUrl: 'https://www.instagram.com/intothewild.lb?stkn=ZDNlZDc0MzIxNw==',
  phoneDisplay: '+961 71 100 721',
  phoneDial: '+96171100721',
  email: 'intothewild.lb@gmail.com',

  // Placeholder images — replace files in public/images with real photos
  // using these exact filenames, or edit the paths below.
  images: {
    heroBackground: '/images/funny.jpg',
    guidePortrait: '/images/iris-pic.png',
    hikingCategory: '/images/hiking.jpg',
    familyCategory: '/images/family.jpg',
    kidsCategory: '/images/birthday.jpg',
  },
}

export default siteConfig
