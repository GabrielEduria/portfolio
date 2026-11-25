

// Categories shown in the sidebar on the Projects page.
// Each project's `category` must match one of these ids.
export const projectCategories = [
  { id: "web", label: "Web Projects", icon: "fa-solid fa-globe" },
  { id: "app", label: "App Projects", icon: "fa-solid fa-mobile-screen" },
  { id: "ai", label: "AI Automations", icon: "fa-solid fa-robot" },
];

//all the project data is stored here, this is used to populate the project cards on the portfolio page
// slug     → the project's URL, e.g. /projects/gabbers
// category → one of the projectCategories ids above
// gallery  → every photo shown on the project's own page (the first one is the big hero image)
//            add more by dropping files in public/images/ and listing their paths here

export const projectCards = [
  {
    title: "AI Recruitment Automation",
    slug: "ai-recruitment-automation",
    category: "ai",
    year: "2026",
    image: "/images/ai-recruitment-automation.png",
    gallery: ["/images/ai-recruitment-automation.png"],
    shortDescription: "An n8n hiring pipeline where Gemini screens resumes and a person approves every decision",
    fullDescription: "Applicants submit a resume PDF. The system acknowledges them, has Gemini score the resume against fixed job requirements, alerts the hiring manager about strong candidates, and sends interview invites and rejections only after a person approves. Tested on 8 sample resumes.",
    tags: ["n8n", "Gemini API", "Webhooks", "SMTP", "Telegram Bot API", "JavaScript"],
    live: null
  },
  {
    title: "Lead Capture and Follow-up Automation",
    slug: "lead-capture-automation",
    category: "ai",
    year: "2026",
    image: "/images/lead-capture-automation.png",
    gallery: ["/images/lead-capture-automation.png"],
    shortDescription: "An n8n workflow that replies to every lead instantly and follows up automatically",
    fullDescription: "Every lead gets an instant reply and the owner gets a Telegram alert. Leads with no reply after 48 hours get an automatic follow-up, and a daily summary shows the pipeline. Secured webhook with input validation and spam protection. Tested on sample leads.",
    tags: ["n8n", "Webhooks", "Data tables", "SMTP", "Telegram Bot API", "JavaScript"],
    live: null
  },
  {
    title: "EN Lead Desk",
    slug: "en-lead-desk",
    category: "ai",
    year: "2026",
    image: "/images/en-lead-desk-1.png",
    gallery: ["/images/en-lead-desk-1.png", "/images/en-lead-desk-2.png", "/images/en-lead-desk-3.png"],
    shortDescription: "Lead capture and follow-up automation for EN Construction, run from the owner's Telegram",
    fullDescription: "Lead capture and follow-up automation built for EN Construction, a solar and construction company in Metro Manila. Website enquiries are validated, saved and sent to the owner on Telegram with the customer's details. The owner updates a lead's status from his phone, and a daily 9 AM reminder lists the leads that need a call. Tested end to end.",
    tags: ["n8n", "Webhooks", "Data tables", "Telegram Bot API", "SMTP", "JavaScript"],
    live: null
  },
  {
    title: "EN-Construction",
    slug: "en-construction",
    category: "web",
    year: "2025",
    image: "/images/enconstruction.png",
    gallery: ["/images/enconstruction.png"],
    shortDescription: "A custom landing website for a construction company",
    fullDescription: "Built tailor-made for the company’s specific requirements right from the start, Custom landing website showcases key services and completed projects with a clean, modern design. The UI/UX was thoughtfully crafted to create an intuitive and engaging user experience. Featuring modular components, clear calls-to-action, and multiple contact options, the site is optimized for fast performance and responsiveness across devices, effectively driving client engagement and business growth.",
    tags: ["React", "TailwindCSS", "Framer Motion", "NextJs"],
    live: "https://testenconstruction.vercel.app/en-construction"
  },
  {
    title: "Gabbers",
    slug: "gabbers",
    category: "web",
    year: "2026",
    image: "/images/gabbers.png",
    gallery: ["/images/gabbers.png"],
    shortDescription: "An invoicing SaaS for freelancers and small studios",
    fullDescription: "Gabbers is an invoicing app built for freelancers, contractors, and small studios. It simplifies billing with automatic subtotal, discount, and VAT calculations, a live invoice preview, and one-click PDF export. Designed with Philippine users in mind, it defaults to PHP and 12% VAT while supporting USD, EUR, and GBP. Users can also include their Wise payment details and securely manage saved invoices through email authentication with verification and password recovery. Built with a clean, responsive interface, Gabbers makes creating professional invoices simple and straightforward.",
    tags: ["React", "Vite", "TailwindCSS", "Firebase Auth", "jsPDF"],
    live: "https://gabbers-six.vercel.app/"
  },
    {
    title: "NutriTakes",
    slug: "nutritakes",
    category: "app",
    year: "2025",
    image: "/images/NutriTakes.png",
    gallery: ["/images/NutriTakes.png"],
    shortDescription: "A Mobile Application food image classification with real time nutritional content analysis using AI",
    fullDescription: "A mobile application that uses image classification and a trained AI model to identify food items and provide real-time nutritional content analysis. Built with TensorFlow Lite and integrated into a mobile-friendly UI, it demonstrates practical application of computer vision, AI model deployment, and health-focused technology.",
    tags: ["React Native", "Tensorflow", "OpenAI", "Supabase", "Machine learning" ],
    url: "https://github.com/GabrielEduria/NutriTakes-",
    live: null
  },
  {
    title: "Nike landing page",
    slug: "nike-landing-page",
    category: "web",
    year: "2023",
    image: "/images/Nike1.jpg",
    gallery: ["/images/Nike1.jpg"],
    shortDescription: "A dynamic responsive Nike full landing page",
    fullDescription: "A fully responsive and dynamic Nike landing page mockup designed to showcase the brand’s latest products with sleek, modern UI. Built using HTML, Tailwind CSS, and JavaScript, it features smooth animations, clear calls-to-action, and optimized layouts for all devices. Focused on delivering a fast, engaging user experience that highlights product visuals and boosts brand presence.",
    tags: ["React", "TailwindCSS", "CMS"],
    live: "https://nike-landing-page-ten-snowy.vercel.app/"
  },
      {
    title: "StockQer",
    slug: "stockqer",
    category: "web",
    year: "2025",
    image: "/images/Stockqer-homepage1.png",
    gallery: ["/images/Stockqer-homepage1.png"],
    shortDescription: "A Fully personalized financial dashboard and live market tracker,",
    fullDescription: "A fully personalized financial dashboard and live market tracker, StockQer helps users monitor stocks, manage watchlists, and stay updated with real-time market news. The platform combines a clean, modern interface with powerful server-side functionality, delivering an intuitive experience for tracking investments. Features include event-driven notifications, seamless sign-up and authentication, and integration with live market APIs for accurate financial data. Optimized for speed and responsiveness, the app ensures users can stay informed and make trading decisions on any device.",
    tags: ["Next.Js", "TypeScript", "Tailwind CSS", "Inngest", "MongoDB Atlas", "Finnhub API"],
    url: "https://github.com/GabrielEduria/StockQer",
  },
  {
    title: "Luci Moto",
    slug: "luci-moto",
    category: "web",
    year: "2023",
    image: "/images/LuciMoto.png",
    gallery: ["/images/LuciMoto.png"],
    shortDescription: "A Ecommerce Website app for a motorcycle local shop",
    fullDescription: "A full-stack e-commerce web application developed for a local motorcycle shop. Features include product listings, search and filtering, cart management, and secure checkout to support real-time updates, inventory control, and a mobile-friendly user experience tailored to local buyers",
    tags: ["HTML / CSS", "Javascript", "mySQL"],
    url: "https://github.com/GabrielEduria/Luci-Moto-/tree/main",
    live: null
  },

  {
    title: "Furswipe – A Dog Adoption Application",
    slug: "furswipe",
    category: "app",
    year: "2024",
    image: "/images/furswipe.png",
    gallery: ["/images/furswipe.png"],
    shortDescription: "A dog adoption app using a swipe-based algorithm inspired by Tinder.",
    fullDescription: "A swipe-based dog adoption application inspired by Tinder, developed as my Computer Science sub-thesis, covering the Chapter 1–3 study. The app matches users with adoptable dogs using an intuitive interface and real-time interactions, demonstrating core principles of user-centered design, state management, and algorithmic decision-making",
    tags: ["Flutter", "Firebase", "React Native"],
    url: "https://github.com/GabrielEduria/furswipe",
    live: null
  },
  {
    title: "Music Emotion Recognition Web App",
    slug: "music-emotion-recognition",
    category: "ai",
    year: "2024",
    image: "/images/musicEmotion1.jpg",
    gallery: ["/images/musicEmotion1.jpg"],
    shortDescription: "A system using multimodal classification to detect emotions in music.",
    fullDescription: "A classification system that detects emotions in music using multimodal data (audio features + lyrical sentiment). Built with Python and scikit-learn, it showcases skills in ML pipelines, feature engineering, and audio analysis.",
    tags: ["Django", "HTML / CSS", "Javascript", "Chart.js"],
    live: null
  },
  {
    title: "Catigan Dental Clinic",
    slug: "catigan-dental-clinic",
    category: "web",
    year: "2022",
    image: "/images/catigan1.jpg",
    gallery: ["/images/catigan1.jpg"],
    shortDescription: "A web landing page for a dental clinic",
    fullDescription: "Designed and developed a responsive web landing page for a local dental clinic, applying modern front-end technologies, good front-end design principles, and deployment tools using HTML, CSS, and JavaScript. ",
    tags: ["HTML/CSS", "Javascript"],
    live: null
  },
];

export const getProjectBySlug = (slug) =>
  projectCards.find((project) => project.slug === slug);
