import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadCertificate = () => {
  const input = document.getElementById("certificate");
  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "pt", [800, 600]);
    pdf.addImage(imgData, "PNG", 0, 0, 800, 600);
    pdf.save("certificate.pdf");
  });
};

export default downloadCertificate;
