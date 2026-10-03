import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

function createPerfectResume() {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 36, bottom: 36, left: 42, right: 42 },
    info: {
      Title: 'Charukesh T - Resume',
      Author: 'Charukesh T',
      Subject: 'Electrical and Electronics Engineering Student Resume',
      Keywords: 'Charukesh T, EEE, SCSVMV, Resume, Internship, Embedded Systems, IoT, Drone Technology',
    }
  });

  const publicDest = path.resolve('public/assets/Charukesh_T_Resume.pdf');
  const writeStream = fs.createWriteStream(publicDest);
  doc.pipe(writeStream);

  const primaryColor = '#0F2D4A';    // Deep Executive Navy
  const secondaryColor = '#2563EB';  // Clean Link Blue
  const textColor = '#1E293B';       // Slate 800
  const mutedColor = '#475569';      // Slate 600
  const ruleColor = '#CBD5E1';       // Slate 300 divider

  const pageWidth = 595.28;
  const marginX = 42;
  const contentWidth = pageWidth - (marginX * 2);

  // Helper for Section Titles
  function addSectionHeader(title) {
    doc.moveDown(0.45);
    doc.font('Helvetica-Bold')
       .fontSize(11)
       .fillColor(primaryColor)
       .text(title.toUpperCase(), { characterSpacing: 0.5 });
    
    const y = doc.y + 2;
    doc.strokeColor(primaryColor)
       .lineWidth(1)
       .moveTo(marginX, y)
       .lineTo(marginX + contentWidth, y)
       .stroke();
    doc.moveDown(0.35);
  }

  // HEADER
  doc.font('Helvetica-Bold')
     .fontSize(20)
     .fillColor(primaryColor)
     .text('CHARUKESH T', { align: 'center' });

  doc.moveDown(0.15);
  doc.font('Helvetica-Bold')
     .fontSize(10)
     .fillColor(textColor)
     .text('Electrical & Electronics Engineering Student  |  Seeking Internship (Fresher)', { align: 'center' });

  doc.moveDown(0.15);
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('Vellore, Tamil Nadu, India   |   +91 7092840941   |   charukesh0212@gmail.com', { align: 'center' });

  doc.moveDown(0.1);
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(secondaryColor)
     .text('LinkedIn: linkedin.com/in/charukesh-t-abb363324', {
       align: 'center',
       link: 'https://www.linkedin.com/in/charukesh-t-abb363324'
     });

  // 1. PROFESSIONAL SUMMARY
  addSectionHeader('Professional Summary');
  doc.font('Helvetica')
     .fontSize(9)
     .fillColor(textColor)
     .text(
       'Third-year B.E. Electrical and Electronics Engineering student with a CGPA of 8.08, a foundation in electrical circuits, electrical machines, and embedded systems using Arduino, and practical exposure to industrial operations and drone technology. Seeking an internship to apply technical knowledge in electrical systems, embedded systems, IoT, and power electronics while developing professional engineering skills.',
       { align: 'justify', lineGap: 1.5 }
     );

  // 2. EDUCATION
  addSectionHeader('Education');

  // Degree
  const eduY1 = doc.y;
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(textColor)
     .text('B.E. – Electrical and Electronics Engineering (EEE)', marginX, eduY1);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(textColor)
     .text('2024 – 2028 (Expected)', marginX + 370, eduY1, { align: 'right', width: 140 });

  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(mutedColor)
     .text('Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV University), Kanchipuram');
  doc.font('Helvetica').fontSize(8.5).fillColor(textColor)
     .text('  • CGPA: 8.08 (till date)');

  doc.moveDown(0.3);

  // HSC
  const eduY2 = doc.y;
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(textColor)
     .text('Higher Secondary (HSC, 12th Standard)', marginX, eduY2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(textColor)
     .text('Percentage: 60.2%', marginX + 370, eduY2, { align: 'right', width: 140 });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(mutedColor)
     .text('Vidyaniketan Matriculation Higher Secondary School');

  doc.moveDown(0.3);

  // SSLC
  const eduY3 = doc.y;
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(textColor)
     .text('Secondary School (SSLC, 10th Standard)', marginX, eduY3);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(textColor)
     .text('Percentage: 68.8%', marginX + 370, eduY3, { align: 'right', width: 140 });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(mutedColor)
     .text('Vidyaniketan Matriculation Higher Secondary School');

  // 3. INTERNSHIP EXPERIENCE
  addSectionHeader('Internship Experience');

  const expY = doc.y;
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(textColor)
     .text('Industrial Intern – Prabha Auto Products Pvt. Ltd.', marginX, expY);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(textColor)
     .text('08 June 2026 – 20 June 2026 (15 Days)', marginX + 300, expY, { align: 'right', width: 210 });

  doc.moveDown(0.2);
  const bullets = [
    'Gained hands-on exposure to industrial operations and automotive manufacturing practices.',
    'Observed production processes, workplace safety practices, and the working of industrial equipment.',
    'Maintained punctuality and took active part in assigned shop-floor activities.'
  ];

  bullets.forEach(b => {
    doc.font('Helvetica').fontSize(8.5).fillColor(textColor)
       .text(`  •  ${b}`, { lineGap: 1.2 });
  });

  // 4. TECHNICAL SKILLS
  addSectionHeader('Technical Skills');

  const skillsList = [
    { label: 'Core EEE', desc: 'Electrical Circuits, Electrical Machines, Basic Electronics, Power Systems Fundamentals' },
    { label: 'Embedded & IoT', desc: 'Arduino Programming, Microcontroller Interfacing, Sensors & Hardware Prototyping, Drone (UAV) Fundamentals' },
    { label: 'Programming', desc: 'C Programming (Basics), Embedded C (Arduino IDE)' },
    { label: 'Software Tools', desc: 'MS Word, MS Excel, MS PowerPoint' }
  ];

  skillsList.forEach(s => {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(textColor)
       .text(`${s.label}: `, { continued: true })
       .font('Helvetica')
       .fillColor(mutedColor)
       .text(s.desc, { lineGap: 1.2 });
  });

  // 5. CERTIFICATIONS & TRAINING
  addSectionHeader('Certifications & Training');

  const certs = [
    { title: 'Value Added Course on Drone Technology', issuer: 'Garuda UAV Center, Dept. of ECE, SCSVMV University (09 Oct – 14 Nov 2025)' },
    { title: 'PALS "Think Like an Engineer" Workshop', issuer: 'conducted by Prof. Sivakumar M. Srinivasan, IIT Madras; hosted at Prathyusha Engineering College, Chennai (19 Sept 2026)' },
    { title: 'C Programming Basics', issuer: 'Simplilearn SkillUp' }
  ];

  certs.forEach(c => {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(textColor)
       .text('  •  ', { continued: true })
       .text(c.title, { continued: true })
       .font('Helvetica')
       .fillColor(mutedColor)
       .text(` – ${c.issuer}`, { lineGap: 1.2 });
  });

  // 6. SOFT SKILLS
  addSectionHeader('Soft Skills');
  doc.font('Helvetica').fontSize(8.5).fillColor(textColor)
     .text('Problem Solving   |   Critical Thinking   |   Troubleshooting   |   Teamwork   |   Punctuality   |   Quick Learner', { align: 'left' });

  // 7. LANGUAGES
  addSectionHeader('Languages');
  doc.font('Helvetica').fontSize(8.5).fillColor(textColor)
     .text('English (Professional)   |   Tamil (Native)', { align: 'left' });

  doc.end();

  writeStream.on('finish', () => {
    console.log('Perfect PDF resume generated successfully at:', publicDest);
    // Also copy to src/assets
    try {
      fs.copyFileSync(publicDest, path.resolve('src/assets/Charukesh_T_Resume.pdf'));
      console.log('Copied to src/assets/Charukesh_T_Resume.pdf');
    } catch (e) {}
  });
}

createPerfectResume();
