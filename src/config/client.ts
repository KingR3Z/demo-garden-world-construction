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
    { name: "janey rodger", rating: 5, text: "Gavin and his team did a fantastic job, delivered on all levels, my new garden looks fabulous. A hard working team that I would recommend. ", date: "9 months ago" },
    { name: "Ed Burns", rating: 5, text: "Gavin and his team from Garden World Construction were amazing at transforming an area of our garden! The work was completed quickly and efficiently and Gavin was excellent at making suitable adaptations to the brief when needed! Would highly recomme", date: "6 months ago" },
    { name: "YY Leo", rating: 5, text: "Gavin and his team replaced our asphalt driveway with resin stones and lined the edges with cobbles 5 years ago. He also did a brilliant job adding a stoned patio in front for our outdoor table and chairs in summer. His team was …    Response from", date: "5 years ago" },
    { name: "Nicola Murrell", rating: 5, text: "Gavin and his team were a pleasure to deal with, they were extremely hard working & have done a fabulous job putting up new fencing. I would highly recommend them & wouldn’t hesitate to use them again. ", date: "3 months ago" },
    { name: "Chris", rating: 5, text: "Gavin and his team were genuinely fantastic. Gavin was always cheerful, enthusiastic and eager to make things happen. We needed our decking replaced - Gavin made it happen within a week. Really great and responsive communication. End result …  ", date: "7 months ago" },
    { name: "Andrew Laird", rating: 5, text: "We had a great experience with Gavin and the team. Competitive price, fantastic finish and they made sure everything was perfect. They were very happy to come back and sort any minor snagging. Very nice people as well. ", date: "2 years ago" },
    { name: "G Tozer", rating: 5, text: "Gavin and his team were efficient and professional. Arrived on time every morning and worked hard throughout the day. Leaving my garden clean and tidy all rubbish was cleared away. Very pleased with my new patio. Highly recommend.   Response from t", date: "2 years ago" },
    { name: "Stephen WELCH", rating: 5, text: "Gavin and his team have been excellent.  From start to finish.  He communicates and plans exceptionally well.  The …    Response from the owner 9 months agoThank you Stephen and Lyn. You were great clients !", date: "9 months ago" },
    { name: "niels stchedroff", rating: 5, text: "Excellent Service  The job was a smallish one - replacing some decking with gravel. Gavin and his …  ", date: "8 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Garden World Construction | Landscaper in London",
    description: "Professional landscaper in London. 5.0-star rated on Google. Call for a free quote.",
  },
};
