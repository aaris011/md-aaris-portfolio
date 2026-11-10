// Edit this file to add certifications. `image` is the preview, `url` opens the original certificate.
import ompImg from "@/assets/certs/one-million-prompters.jpg.asset.json";
import ompPdf from "@/assets/certs/one-million-prompters.pdf.asset.json";
import deloitteImg from "@/assets/certs/deloitte-data-analytics.jpg.asset.json";
import deloittePdf from "@/assets/certs/deloitte-data-analytics.pdf.asset.json";
import blockchainImg from "@/assets/certs/blockchain-101.jpg.asset.json";
import blockchainPdf from "@/assets/certs/blockchain-101.pdf.asset.json";
import nptelImg from "@/assets/certs/nptel-machine-learning.jpg.asset.json";
import nptelPdf from "@/assets/certs/nptel-machine-learning.pdf.asset.json";

export type Certification = { title: string; issuer: string; date?: string; url?: string; image?: string; placeholder?: boolean };

export const certifications: Certification[] = [
  { title: "Introduction to Machine Learning", issuer: "NPTEL · IIT Madras", date: "Jan–Apr 2026", image: nptelImg.url, url: nptelPdf.url },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte · Forage", date: "October 2025", image: deloitteImg.url, url: deloittePdf.url },
  { title: "One Million Prompters", issuer: "Dubai Future Foundation", date: "2026", image: ompImg.url, url: ompPdf.url },
  { title: "Blockchain 101", issuer: "Infosys Springboard", date: "October 2026", image: blockchainImg.url, url: blockchainPdf.url },
];
