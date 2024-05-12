import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Sandbox from './Sandbox'; 
import { Helmet } from 'react-helmet';
const PdfDownloadComponent = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-content'); 
 
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('downloaded-file.pdf'); 
     
    });
  };
  return (
    <div>
        <Helmet><link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&family=Smokum&family=Viga&display=swap" rel="stylesheet" /></Helmet>
      <Sandbox id="pdf-content" /> 
      
      <button className="dpdfb" onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};
export default PdfDownloadComponent;