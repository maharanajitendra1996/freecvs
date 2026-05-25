import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from "docx";
import { saveAs } from "file-saver";
import type { ResumeData } from "@/types/resume";

export async function exportToPdf(element: HTMLElement, filename: string): Promise<void> {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(`${filename}.pdf`);
}

function sectionHeading(text: string): Paragraph {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 120 },
  });
}

export async function exportToDoc(data: ResumeData, filename: string): Promise<void> {
  const { contact, summary, experience, education, skills, languages, certifications } = data;

  const children: Paragraph[] = [
    new Paragraph({
      children: [new TextRun({ text: contact.fullName || "Your Name", bold: true, size: 32 })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
    }),
    new Paragraph({
      text: [contact.email, contact.phone, contact.location, contact.website, contact.linkedin]
        .filter(Boolean)
        .join(" · "),
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    }),
  ];

  if (summary) {
    children.push(sectionHeading("Professional Summary"));
    children.push(new Paragraph({ text: summary, spacing: { after: 200 } }));
  }

  if (experience.length > 0) {
    children.push(sectionHeading("Experience"));
    for (const exp of experience) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: exp.role, bold: true }),
            new TextRun({ text: ` — ${exp.company}` }),
          ],
          spacing: { before: 120 },
        }),
      );
      children.push(
        new Paragraph({
          text: `${exp.startDate} – ${exp.current ? "Present" : exp.endDate}${exp.location ? ` · ${exp.location}` : ""}`,
          spacing: { after: 80 },
        }),
      );
      if (exp.description) {
        children.push(new Paragraph({ text: exp.description, spacing: { after: 120 } }));
      }
    }
  }

  if (education.length > 0) {
    children.push(sectionHeading("Education"));
    for (const edu of education) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: edu.degree, bold: true }),
            new TextRun({ text: ` — ${edu.school}` }),
          ],
          spacing: { before: 120 },
        }),
      );
      children.push(
        new Paragraph({
          text: `${edu.startDate} – ${edu.endDate}`,
          spacing: { after: edu.description ? 80 : 120 },
        }),
      );
      if (edu.description) children.push(new Paragraph({ text: edu.description, spacing: { after: 120 } }));
    }
  }

  if (skills.length > 0) {
    children.push(sectionHeading("Skills"));
    for (const group of skills) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: `${group.name}: `, bold: true }),
            new TextRun({ text: group.skills }),
          ],
          spacing: { after: 80 },
        }),
      );
    }
  }

  if (languages) {
    children.push(sectionHeading("Languages"));
    children.push(new Paragraph({ text: languages, spacing: { after: 120 } }));
  }

  if (certifications) {
    children.push(sectionHeading("Certifications"));
    children.push(new Paragraph({ text: certifications }));
  }

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${filename}.docx`);
}
