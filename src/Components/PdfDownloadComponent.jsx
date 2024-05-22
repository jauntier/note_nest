import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Sandbox from './Sandbox';
import { Helmet } from 'react-helmet';

const PdfDownloadComponent = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input).then((canvas) => {
      
      const pdfWidth = 297; 
      const pdfHeight = 210; 
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF('l', 'mm', 'a4');
      const positionY = (pdfHeight - imgHeight) / 2; 

      pdf.addImage(canvas, 'PNG', 0, positionY, imgWidth, imgHeight);
      pdf.save('downloaded-file.pdf');
    });
  };

  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&family=Smokum&family=Viga&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Sandbox id="pdf-content" />

      <button className="dpdfb" onClick={handleDownloadPDF}>
        Print your code
      </button>
    </div>
  );
};

export default PdfDownloadComponent;
