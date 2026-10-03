// Script to generate a valid, clean single-page PDF resume
import fs from 'fs';
import path from 'path';

function generateResumePdf() {
  const lines = [
    { text: "CHARUKESH T", size: 18, font: "/F1", x: 50, y: 750 },
    { text: "Third-Year B.E. Electrical & Electronics Engineering Student", size: 10, font: "/F2", x: 50, y: 735 },
    { text: "Phone: +91 7092840941  |  Email: charukesh0212@gmail.com  |  Location: Vellore, Tamil Nadu", size: 9, font: "/F2", x: 50, y: 720 },
    { text: "LinkedIn: https://www.linkedin.com/in/charukesh-t-abb363324", size: 9, font: "/F2", x: 50, y: 708 },

    // Line separator
    { type: "line", x1: 50, y1: 698, x2: 560, y2: 698 },

    // Summary
    { text: "PROFILE SUMMARY", size: 11, font: "/F1", x: 50, y: 682 },
    { text: "Third-year B.E. Electrical & Electronics Engineering student with a current CGPA of 8.08 at SCSVMV University.", size: 9.5, font: "/F2", x: 50, y: 668 },
    { text: "Seeking internship opportunities to apply engineering fundamentals in embedded systems, IoT, and electrical systems.", size: 9.5, font: "/F2", x: 50, y: 655 },

    // Education
    { text: "EDUCATION", size: 11, font: "/F1", x: 50, y: 635 },
    { text: "B.E. Electrical & Electronics Engineering  -  CGPA: 8.08", size: 10, font: "/F1", x: 50, y: 620 },
    { text: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV University), Kanchipuram (2024 - 2028 Expected)", size: 9, font: "/F2", x: 50, y: 608 },
    { text: "Higher Secondary (HSC)  -  60.2%", size: 9.5, font: "/F1", x: 50, y: 593 },
    { text: "Vidyaniketan Matriculation Higher Secondary School", size: 9, font: "/F2", x: 50, y: 582 },
    { text: "Secondary School (SSLC)  -  68.8%", size: 9.5, font: "/F1", x: 50, y: 568 },
    { text: "Vidyaniketan Matriculation Higher Secondary School", size: 9, font: "/F2", x: 50, y: 557 },

    // Internship Experience
    { text: "INTERNSHIP EXPERIENCE", size: 11, font: "/F1", x: 50, y: 538 },
    { text: "Industrial Intern  -  Prabha Auto Products Pvt. Ltd.", size: 10, font: "/F1", x: 50, y: 523 },
    { text: "08 June 2026 - 20 June 2026 (15 Days)  |  Automotive Manufacturing", size: 8.5, font: "/F2", x: 50, y: 511 },
    { text: "- Gained hands-on exposure to industrial operations and automotive manufacturing practices.", size: 9, font: "/F2", x: 60, y: 498 },
    { text: "- Observed production processes and workplace safety standards on the shop floor.", size: 9, font: "/F2", x: 60, y: 486 },
    { text: "- Learned about the operation and maintenance awareness of industrial machinery.", size: 9, font: "/F2", x: 60, y: 474 },

    // Technical Skills
    { text: "TECHNICAL SKILLS", size: 11, font: "/F1", x: 50, y: 454 },
    { text: "Core EEE: Electrical Circuits, Electrical Machines, Basic Electronics, Power Systems Fundamentals", size: 9, font: "/F2", x: 50, y: 440 },
    { text: "Embedded & IoT: Arduino Programming, Microcontroller Interfacing, Sensors Prototyping, IoT Fundamentals", size: 9, font: "/F2", x: 50, y: 428 },
    { text: "Drone Technology: UAV Fundamentals, Drone Technology, Basic Drone Systems", size: 9, font: "/F2", x: 50, y: 416 },
    { text: "Programming & Tools: C Programming, Embedded C, Arduino IDE, MS Word, Excel, PowerPoint", size: 9, font: "/F2", x: 50, y: 404 },

    // Projects
    { text: "ACADEMIC & EXPLORATORY PROJECTS", size: 11, font: "/F1", x: 50, y: 384 },
    { text: "Arduino-Based Sensor System  [Embedded Systems / IoT]", size: 9.5, font: "/F1", x: 50, y: 370 },
    { text: "Microcontroller programming and multi-sensor data acquisition with breadboard circuit integration.", size: 9, font: "/F2", x: 50, y: 358 },
    { text: "Drone Technology Exploration  [UAV / Embedded Systems]", size: 9.5, font: "/F1", x: 50, y: 343 },
    { text: "Study of multi-rotor UAV components, flight dynamics, electronic speed controllers, and power systems.", size: 9, font: "/F2", x: 50, y: 331 },

    // Certifications
    { text: "CERTIFICATIONS & WORKSHOPS", size: 11, font: "/F1", x: 50, y: 311 },
    { text: "- Value Added Course on Drone Technology - Garuda UAV Center, SCSVMV University (Oct - Nov 2025)", size: 9, font: "/F2", x: 50, y: 297 },
    { text: "- PALS 'Think Like an Engineer' Workshop - Prof. Sivakumar M. Srinivasan, IIT Madras (Sep 2026)", size: 9, font: "/F2", x: 50, y: 284 },
    { text: "- C Programming Basics - Simplilearn SkillUp", size: 9, font: "/F2", x: 50, y: 271 },

    // Personal & Strengths
    { text: "KEY ATTRIBUTES", size: 11, font: "/F1", x: 50, y: 251 },
    { text: "Strong foundation in electrical fundamentals, quick learner, collaborative team player, and detail-oriented.", size: 9, font: "/F2", x: 50, y: 237 },
  ];

  let stream = "";
  // Draw line
  stream += "0.75 w\n0.8 0.8 0.8 RG\n50 698 m 560 698 l S\n";
  stream += "0.8 0.8 0.8 RG\n50 648 m 560 648 l S\n";
  stream += "0.8 0.8 0.8 RG\n50 550 m 560 550 l S\n";
  stream += "0.8 0.8 0.8 RG\n50 466 m 560 466 l S\n";
  stream += "0.8 0.8 0.8 RG\n50 396 m 560 396 l S\n";
  stream += "0.8 0.8 0.8 RG\n50 323 m 560 323 l S\n";

  // Stream text
  for (const item of lines) {
    if (item.type === "line") continue;
    const isHeader = item.font === "/F1";
    const color = isHeader ? "0.12 0.24 0.35 rg" : "0.15 0.15 0.15 rg";
    const escaped = item.text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    stream += `BT\n${color}\n${item.font} ${item.size} Tf\n${item.x} ${item.y} Td\n(${escaped}) Tj\nET\n`;
  }

  const objects = [];
  function addObject(content) {
    objects.push(content);
    return objects.length;
  }

  // 1: Catalog
  addObject("<< /Type /Catalog /Pages 2 0 R >>");
  // 2: Pages
  addObject("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  // 3: Page
  addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`);
  // 4: Font F1 (Helvetica-Bold)
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  // 5: Font F2 (Helvetica)
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  // 6: Stream
  const streamLength = Buffer.byteLength(stream);
  addObject(`<< /Length ${streamLength} >>\nstream\n${stream}\nendstream`);

  let pdf = "%PDF-1.4\n";
  const xref = [0];

  for (let i = 0; i < objects.length; i++) {
    const offset = Buffer.byteLength(pdf);
    xref.push(offset);
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${xref[i].toString().padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const destPath = path.resolve('public/assets/Charukesh_T_Resume.pdf');
  fs.writeFileSync(destPath, pdf, 'binary');
  console.log("Resume PDF generated successfully at:", destPath);
}

generateResumePdf();
