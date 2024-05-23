import React from 'react';
import jsPDF from 'jspdf';
import Sandbox from './Sandbox';
import { Helmet } from 'react-helmet';

const PdfDownloadComponent = () => {
  const handleDownloadPDF = () => {
    const pdf = new jsPDF('l', 'mm', 'a4'); // Set to landscape mode
    const pdfContent = document.getElementById('pdf-content');

    
    const pdfWidth = 259; 
    const pdfHeight = 181; 

    pdf.html(pdfContent, {
      callback: function (pdf) {
        const contentWidth = pdfContent.offsetWidth * 0.54; 
        const contentHeight = pdfContent.offsetHeight * 0.54; 

    
        const posX = (pdfWidth - (contentWidth / 2)) / 2; 
        const posY = (pdfHeight - (contentHeight / 2)) / 2; 

        // Clear the page and re-add HTML content at the centered position
        pdf.deletePage(1);
        pdf.addPage('a4', 'l');
        pdf.html(pdfContent, {
          callback: function (pdf) {
            pdf.save('downloaded-file.pdf');
          },
          x: posX,
          y: posY,
          html2canvas: {
            scale: 0.31 // Adjust scale to fit content correctly
          }
        });
      },
      x: 0,
      y: 0,
      html2canvas: {
        scale: 0.31 // Adjust scale to fit content correctly
      }
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




