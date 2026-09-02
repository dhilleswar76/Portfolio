export const personalInfo = {
  name: "Dhilleswara Rao Malla",
  shortName: "Dhilleswara",
  title: "Dhilleswara Rao Malla | Portfolio",
  tagline: "Computer Science Student & Full Stack Developer",
  bio: "A passionate Computer Science student and Full Stack Developer who loves building meaningful software solutions, solving complex problems, and continuously learning new technologies.",
  aboutParagraphs: [
    "I'm Dhilleswara Rao Malla, a dedicated and driven Computer Science undergraduate with a strong foundation in software engineering and full-stack development. I thrive on turning ideas into functional, elegant applications.",
    "My passion lies at the intersection of problem-solving and technology. Whether it's designing an intuitive UI, architecting a robust backend, or optimizing algorithms, I approach every challenge with curiosity and precision.",
    "Outside of coding, I enjoy participating in hackathons, attending tech workshops, and contributing to open-source projects."
  ],
  roles: [
    "Full Stack Developer",
    "Computer Science Student",
    "Problem Solver",
    "Software Engineer",
    "Tech Enthusiast"
  ],
  stats: [
    { number: "10+", label: "Projects Built" },
    { number: "5+", label: "Certifications" },
    { number: "3+", label: "Tech Workshops" }
  ],
  quickInfo: [
    { label: "Location", value: "India", icon: "MapPin" },
    { label: "Degree", value: "B.Tech, CSE", icon: "GraduationCap" },
    { label: "Email", value: "dilleswararaomalla410@gmail.com", icon: "Mail" },
    { label: "Status", value: "Open to Opportunities", icon: "Briefcase" }
  ],
  socials: {
    github: "https://github.com/dhilleswar76",
    linkedin: "https://www.linkedin.com/in/dhilleswara-rao-malla/",
    email: "mailto:dilleswararaomalla410@gmail.com"
  },
  resumeUrl: "/certificates/1_GeeksforGeeks_Java_Course.pdf"
};

export const educationData = [
  {
    period: "2024 – Present",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "SRKR Engineering College, Bhimavaram",
    score: "CGPA: 8.44 / 10",
    description: "Relevant coursework: Data Structures, Algorithms, DBMS, Operating Systems, Web Development, Machine Learning.",
    type: "Degree"
  },
  {
    period: "2022 – 2024",
    degree: "Class XI & XII – MPC",
    institution: "Sri Viswa Junior College, Visakhapatnam",
    score: "Percentage: 93.2%",
    description: "Specialized in Mathematics, Physics, and Chemistry with academic excellence.",
    type: "Intermediate"
  },
  {
    period: "2022",
    degree: "Class X (Secondary School)",
    institution: "Pragathi School, Priyagraharam",
    score: "Percentage: 93.83%",
    description: "Completed secondary education with top honors in academics and science exhibitions.",
    type: "Schooling"
  }
];

export const skillsData = {
  categories: [
    {
      title: "Languages",
      icon: "Code2",
      skills: ["Java", "Python", "C", "JavaScript", "SQL"]
    },
    {
      title: "Web Development",
      icon: "Layout",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Node.js", "Express.js"]
    },
    {
      title: "Databases & Tools",
      icon: "Database",
      skills: ["MongoDB", "PostgreSQL", "SQL", "Git", "GitHub", "VS Code", "Postman"]
    },
    {
      title: "CS Fundamentals",
      icon: "Cpu",
      skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "OOP", "State Machines"]
    }
  ],
  proficiency: [
    { name: "Java", level: 85 },
    { name: "Python", level: 75 },
    { name: "Web Development (React, Next.js & Node)", level: 88 },
    { name: "CS Fundamentals & DSA", level: 80 }
  ]
};

export const experienceData = [
  {
    period: "Aug 2025 – Present",
    role: "Executive Body Member",
    organization: "SRKR Coding Club, SRKR Engineering College",
    tag: "Leadership",
    highlights: [
      "Organize and lead coding workshops, technical bootcamps, and hackathons.",
      "Mentor junior students on data structures, algorithms, and modern web development.",
      "Coordinate club initiatives, technical hackathons, and collaborate with faculty advisors."
    ]
  }
];

export const projectsData = [
  {
    id: "recipro",
    title: "Recipro (SkillSwap Campus)",
    category: "Peer-to-Peer Learning & WebRTC Classroom Web App",
    description: "Decentralized campus skill barter platform & collaborative WebRTC video classroom with credit escrow.",
    explanation: `Recipro (SkillSwap Campus Protocol) is a decentralized peer-to-peer campus knowledge barter economy and interactive WebRTC classroom designed for university students to exchange mentorship without financial friction. Built with Next.js 14 App Router, PostgreSQL, and low-latency WebRTC, the protocol enables students to teach subjects they have mastered to earn zero-fee Skill Credits, and redeem those credits to learn from verified campus peers.

The application is powered by an authoritative finite state machine engine that orchestrates the entire session lifecycle: from booking requests and escrow reservation to confirmation and credit release. To ensure fair exchanges, Recipro features a pre-session return skill negotiation gate, requiring mentors and learners to mutually agree on return skills or credit terms before generating secure room access tokens.

For scheduling, the platform incorporates an IRCTC-style 3-tier smart slot finder with 15-minute preparation buffer protection that intelligently discovers mentors across local and partner campuses while preventing booking overlaps. Inside the live classroom, Recipro delivers hardware 720p HD video streaming with dynamic 30fps studio canvas fallbacks, real-time voice waveform visualizers, one-click screen sharing, persistent encrypted chat, and a synchronized real-time code scratchpad backed by PostgreSQL. The ecosystem is further enriched with Google Gemini 1.5 Flash AI to generate automated student skill assessments and personalized learning roadmaps.`,
    features: [
      "Real-time WebRTC 720p video classroom with dynamic studio canvas & voice waveform visualizers",
      "Authoritative credit escrow state machine & pre-session return skill negotiation gate",
      "IRCTC-style 3-tier smart mentor slot discovery with 15-minute buffer protection",
      "Collaborative synchronized code scratchpad & encrypted in-room chat backed by PostgreSQL",
      "AI-driven skill assessments & personalized study roadmaps powered by Google Gemini Flash"
    ],
    techStack: ["Next.js 14", "React.js", "PostgreSQL", "WebRTC", "Google Gemini AI", "Tailwind/CSS", "JWT Auth"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://recipro-3saz.vercel.app/",
    repoUrl: "https://github.com/dhilleswar76/Recipro.git"
  },
  {
    id: "skillsync",
    title: "SkillSync",
    category: "Learning & Resource Management Web App",
    description: "Full-stack learning platform for structured course management and interactive coding practice.",
    explanation: `SkillSync is an all-in-one full-stack learning and resource management platform engineered to streamline computer science education, structured course delivery, and interactive coding practice for engineering students. Built with a reactive React frontend and a scalable Node.js and MongoDB backend, the portal bridges the gap between theoretical computer science curriculum and real-world implementation.

The platform provides a role-based access control (RBAC) architecture separating student learners and course administrators. Students can enroll in curated tech tracks spanning full-stack web development, data structures, algorithms, and backend systems. Each module includes structured video and text modules, interactive quizzes with immediate evaluation, and progress milestone tracking that keeps learners motivated throughout their journey.

In addition to guided courses, SkillSync features an integrated browser-based coding sandbox that allows students to solve algorithmic challenges with test case validation. Upon successful completion of all course criteria and assessments, the backend triggers an automated PDF certificate generation engine that issues verifiable, downloadable course completion certificates with unique verification IDs. With responsive glassmorphic UI design, JWT authentication, and optimized REST APIs, SkillSync provides an end-to-end modern learning experience.`,
    features: [
      "Role-based access control for students and course instructors",
      "Interactive coding exercises, test case evaluation, and automated quizzes",
      "Dynamic verifiable PDF certificate generation upon module completion",
      "Real-time learner progress analytics, progress bars, and personal dashboard"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind/CSS", "JWT"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://skill-sync-learning-portal.vercel.app/",
    repoUrl: "https://github.com/dhilleswar76/SkillSync.git"
  },
  {
    id: "tasty-bite",
    title: "Tasty Bite",
    category: "Restaurant Management App",
    description: "Restaurant management app for handling orders, table reservations, and daily operations.",
    explanation: `Tasty Bite is a modern, high-performance restaurant operations and table reservation web application engineered to digitize customer dining and streamline kitchen order management in real time. Designed with a mobile-first, responsive user interface, the system eliminates traditional order bottlenecks and improves customer throughput during peak restaurant dining hours.

The customer-facing application features an interactive digital menu with dynamic category filtering, detailed ingredient breakdowns, dietary preference tags, and instant full-text search. Customers can customize menu selections, view real-time pricing calculations, and manage their orders through a responsive cart interface powered by React state management and Context API.

For restaurant management, Tasty Bite incorporates a real-time table booking engine that allows guests to reserve dining slots and track table availability in advance. The administrative interface provides restaurant staff with live order status trackers (Ordered, In Preparation, Ready, Served), menu item availability toggles, and daily sales summaries. With fluid micro-animations, glassmorphic UI cards, and optimized client-side rendering, Tasty Bite delivers a frictionless dining and restaurant management solution.`,
    features: [
      "Interactive digital menu with multi-category filtering and full-text search",
      "Real-time table reservation system and customer status tracking",
      "Smooth shopping cart and instant billing management interface",
      "Mobile-friendly responsive UI with fluid animations and transitions"
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "Context API", "CSS3", "Vercel"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://tastybite-restaurant.vercel.app/",
    repoUrl: "https://github.com/dhilleswar76/TastyBite.git"
  },
  {
    id: "swipe-learn",
    title: "Swipe Learn",
    category: "Learning Web App",
    description: "Fun-based learning app for students with interactive lessons, swipe gestures, and quizzes.",
    explanation: `Swipe Learn is an interactive, gamified micro-learning web application tailored for students to master complex technical concepts through bite-sized, touch-friendly knowledge cards and active recall quizzes. Inspired by modern swipe-based mobile interactions, the platform transforms traditional dense study material into engaging, digestible learning sessions that maximize retention.

The core interface is built around a gesture-driven card deck where students can swipe through concise topic summaries, code snippets, definitions, and visual diagrams. Each flashcard is crafted according to spaced repetition principles, breaking down complex programming languages, data structures, and system design concepts into single-concept takeaways.

To reinforce retention, each study module concludes with interactive checkpoint quizzes featuring instant grading, streak counters, and performance analytics. The application incorporates a Feature-Sliced Design (FSD) architecture ensuring high modularity and maintainability, complemented by responsive touch event listeners that provide a native mobile app feel across all web browsers and devices. With offline caching capabilities and fluid card physics, Swipe Learn makes daily computer science revision effortless and fun.`,
    features: [
      "Gesture-driven card deck inspired by modern touch mobile applications",
      "Spaced repetition topic flashcards and bite-sized core concepts",
      "Interactive knowledge check quizzes with instant grading and streak tracking",
      "Feature-Sliced Design (FSD) architecture with fluid card physics"
    ],
    techStack: ["React.js", "HTML5/CSS3", "JavaScript", "Touch Gestures", "FSD"],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://swipe-learn-fsd.vercel.app/",
    repoUrl: "https://github.com/dhilleswar76/SwipeLearn-FSD.git"
  }
];

export const certificationsData = [
  {
    id: "gfg-java",
    title: "Java Online Course",
    issuer: "GeeksforGeeks",
    date: "Certified",
    badge: "Programming",
    fileUrl: "/certificates/1_GeeksforGeeks_Java_Course.pdf"
  },
  {
    id: "nptel-dsa",
    title: "Data Structures and Algorithms in Java",
    issuer: "NPTEL / IIT",
    date: "Certified",
    badge: "Core CS",
    fileUrl: "/certificates/2_NPTEL_Data_Structures_and_Algorithms_Using_Java.pdf"
  },
  {
    id: "gfg-fsd",
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    date: "Certified",
    badge: "Full Stack",
    fileUrl: "/certificates/3_GeeksforGeeks_Full_Stack_Developer_Bootcamp.pdf"
  },
  {
    id: "google-aiml",
    title: "Google AIML Virtual Internship",
    issuer: "Eduskills Foundation & Google for Developers",
    date: "Certified",
    badge: "AI & ML",
    fileUrl: "/certificates/4_Google_AIML.pdf"
  },
  {
    id: "eduskills-mern",
    title: "MERN Full Stack Development + Project",
    issuer: "Eduskills Foundation",
    date: "Certified",
    badge: "MERN Stack",
    fileUrl: "/certificates/5_Eduskills_MERN.pdf"
  }
];

export const workshopsData = [
  {
    title: "Campus Coding Bootcamps & Problem-Solving Sessions",
    organizer: "SRKR Coding Club",
    details: "Participated in and helped organize technical workshops focusing on Data Structures, Algorithms, and practical programming fundamentals."
  },
  {
    title: "Full Stack Web Development Bootcamp",
    organizer: "GeeksforGeeks",
    details: "Hands-on training covering modern frontend structure, backend REST APIs, database integration, and deployment practices."
  },
  {
    title: "MERN Stack Development & AI/ML Virtual Training",
    organizer: "Eduskills Foundation",
    details: "Project-based technical training sessions covering MERN full-stack architecture and foundational machine learning workflows."
  }
];
