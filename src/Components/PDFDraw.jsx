




import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import DrawingBoard from './DrawingBoard';
import { Helmet } from 'react-helmet';

const PDFDraw = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-content-y');

    if (!input) {
      console.error("Element with ID 'pdf-content-y' not found.");
      return;
    }

    html2canvas(input).then((canvas) => {
      const pdfWidth = 297; // A4 width in mm
      const pdfHeight = 210; // A4 height in mm
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF('l', 'mm', 'a4');
      const positionY = (pdfHeight - imgHeight) / 2; 

      pdf.addImage(canvas, 'PNG', 0, positionY, imgWidth, imgHeight);
      pdf.save('downloaded-file.pdf');
    }).catch((error) => {
      console.error("Failed to generate canvas:", error);
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
      <DrawingBoard id="pdf-content-y" />
      <button className="dpdfb" onClick={handleDownloadPDF}>
        Print your art
      </button>
    </div>
  );
};

export default PDFDraw;
