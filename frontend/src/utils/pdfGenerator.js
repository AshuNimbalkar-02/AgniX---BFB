import { jsPDF } from 'jspdf';

export const generatePDF = (recommendations, lang) => {
  const doc = new jsPDF();
  doc.setFontSize(22);
  doc.text("Farmer Crop Intelligence Report", 20, 20);
  
  recommendations.forEach((crop, index) => {
    const y = 40 + (index * 80);
    doc.setFontSize(16);
    doc.text(`${index + 1}. ${crop.name[lang]}`, 20, y);
    doc.setFontSize(10);
    doc.text(`Why: ${crop.why[lang]}`, 20, y + 10, { maxWidth: 170 });
  });
  
  doc.save(`Crop_Report.pdf`);
};
