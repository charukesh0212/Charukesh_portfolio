export const portfolioData = {
  personal: {
    name: "CHARUKESH T",
    title: "Electrical & Electronics Engineering Student",
    seeking: "Seeking Internship (Fresher)",
    badge: "EEE STUDENT • EMBEDDED SYSTEMS • IOT",
    summary:
      "Third-year B.E. Electrical and Electronics Engineering student with a CGPA of 8.08, a foundation in electrical circuits, electrical machines, and embedded systems using Arduino, and practical exposure to industrial operations and drone technology. Seeking an internship to apply technical knowledge in electrical systems, embedded systems, IoT, and power electronics while developing professional engineering skills.",
    quickStats: "B.E. EEE | CGPA 8.08 (till date) | SCSVMV University",
    profileImage: "/assets/profile.jpg",
    resumeUrl: "/assets/Charukesh_T_Resume.pdf",
    phone: "7092840941",
    email: "charukesh0212@gmail.com",
    location: "Vellore, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/charukesh-t-abb363324",
    linkedinDisplay: "linkedin.com/in/charukesh-t-abb363324",
  },

  education: [
    {
      degree: "B.E. – Electrical and Electronics Engineering (EEE)",
      institution:
        "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV University), Kanchipuram",
      period: "2024 – 2028 (Expected)",
      grade: "CGPA: 8.08 (till date)",
      current: true,
      description:
        "Core focus on Electrical Circuits, Electrical Machines, Basic Electronics, and Microcontroller Interfacing."
    },
    {
      degree: "Higher Secondary (HSC, 12th Standard)",
      institution: "Vidyaniketan Matriculation Higher Secondary School",
      period: "Completed",
      grade: "Percentage: 60.2%",
      current: false,
      description: "Science stream with Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School (SSLC, 10th Standard)",
      institution: "Vidyaniketan Matriculation Higher Secondary School",
      period: "Completed",
      grade: "Percentage: 68.8%",
      current: false,
      description: "Core foundational sciences and mathematics."
    }
  ],

  experience: [
    {
      role: "Industrial Intern",
      company: "Prabha Auto Products Pvt. Ltd.",
      period: "08 June 2026 – 20 June 2026",
      duration: "15 Days",
      badge: "Industrial Exposure",
      description: "Automotive component manufacturing environment",
      responsibilities: [
        "Gained hands-on exposure to industrial operations and automotive manufacturing practices.",
        "Observed production processes, workplace safety practices, and the working of industrial equipment.",
        "Maintained punctuality and took active part in assigned shop-floor activities."
      ]
    }
  ],

  technicalSkills: {
    coreEEE: {
      category: "Core EEE",
      items: [
        "Electrical Circuits",
        "Electrical Machines",
        "Basic Electronics",
        "Power Systems Fundamentals"
      ]
    },
    embeddedIoT: {
      category: "Embedded & IoT",
      items: [
        "Arduino Programming",
        "Microcontroller Interfacing",
        "Sensors & Hardware Prototyping",
        "Drone (UAV) Fundamentals"
      ]
    },
    programming: {
      category: "Programming",
      items: [
        "C Programming (Basics)",
        "Embedded C (Arduino IDE)"
      ]
    },
    softwareTools: {
      category: "Software Tools",
      items: [
        "MS Word",
        "MS Excel",
        "MS PowerPoint"
      ]
    }
  },

  softSkills: [
    "Problem Solving",
    "Critical Thinking",
    "Troubleshooting",
    "Teamwork",
    "Punctuality",
    "Quick Learner"
  ],

  languages: [
    { language: "English", level: "Professional" },
    { language: "Tamil", level: "Native" }
  ],

  projects: [
    {
      id: "arduino-sensor-system",
      title: "Arduino-Based Sensor System",
      category: "Embedded & IoT",
      description:
        "Arduino-based sensor interfacing project demonstrating microcontroller programming, sensor integration, and hardware prototyping.",
      status: "Academic / Personal Project",
      highlights: [
        "Analog and digital sensor integration with Arduino microcontroller",
        "Signal acquisition and real-time data monitoring via serial terminal",
        "Breadboard circuit prototyping, wire management, and power supply testing"
      ],
      tags: ["Arduino", "Sensors", "Microcontroller Interfacing", "Hardware Prototyping"]
    },
    {
      id: "drone-tech-exploration",
      title: "Drone Technology Exploration",
      category: "UAV & Flight Systems",
      description:
        "Exploration of fundamental drone technology, UAV components, flight systems, and practical applications.",
      status: "Training / Academic",
      highlights: [
        "Study of multi-rotor UAV mechanics, propulsion systems, and flight controllers",
        "Understanding electronic speed controllers (ESCs), BLDC motors, and battery management",
        "Investigation of practical aerial sensing and telemetry applications"
      ],
      tags: ["UAV Fundamentals", "Drone Technology", "Basic Drone Systems", "Hardware Integration"]
    }
  ],

  certifications: [
    {
      title: "Value Added Course on Drone Technology",
      issuer: "Garuda UAV Center, Dept. of ECE, SCSVMV University",
      period: "09 Oct – 14 Nov 2025",
      type: "Comprehensive Course",
      description: "Hands-on academic course in UAV configurations, components, flight controls, and safety protocols."
    },
    {
      title: "PALS \"Think Like an Engineer\" Workshop",
      issuer: "Conducted by Prof. Sivakumar M. Srinivasan, IIT Madras (Hosted at Prathyusha Engineering College, Chennai)",
      period: "19 Sept 2026",
      type: "Workshop",
      description: "Engineering first principles, structured technical problem solving, and analytical thinking."
    },
    {
      title: "C Programming Basics",
      issuer: "Simplilearn SkillUp",
      period: "Credential",
      type: "Certification",
      description: "Foundational programming constructs, logic building, functions, and memory handling."
    }
  ]
};
