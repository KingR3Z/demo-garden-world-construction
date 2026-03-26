export const client = {
  // Business Details
  name: "Garden World Construction",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in London.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07970 633762",
  email: "",
  website: "",

  // Location
  address: "London",
  city: "London",
  county: "",
  postcode: "",
  basedIn: "London",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "9",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Julie Erridge", rating: 5, text: "Had the front of my house tiled. The results were amazing. The work was done on time and everything was left spotless. Would definitely recommend", date: "2 weeks ago" },
    { name: "Matthew Galligan", rating: 5, text: "Gavin and Bill recently renovated our front and back garden. Super professional and very happy with the final output. Would 100% recommend.", date: "2 weeks ago" },
    { name: "Nicola Murrell", rating: 5, text: "Gavin and his team were a pleasure to deal with, they were extremely hard working & have done a fabulous job putting up new fencing. I would highly recommend them & wouldn’t hesitate to use them again.", date: "3 months ago" },
    { name: "Jems Harris", rating: 5, text: "Front garden patio relaid. All done without fuss at a very fair price. Would highly recommend", date: "4 months ago" },
    { name: "Richard Harding", rating: 5, text: "Great work. Fantastic attention to detail. Very careful. Tidy and quick. Delighted with the result.", date: "6 months ago" },
    { name: "Ed Burns", rating: 5, text: "Gavin and his team from Garden World Construction were amazing at transforming an area of our garden! The work was completed quickly and efficiently and Gavin was excellent at making suitable adaptations to the brief when needed! Would highly recommend them!", date: "6 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Garden World Construction | Landscaper in London",
    description: "Professional landscaper in London. 5.0-star rated on Google. Call for a free quote.",
  },
};
