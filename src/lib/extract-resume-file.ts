import mammoth from "mammoth";

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

export const ACCEPTED_RESUME_TYPES = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
  "application/msword": [".doc"],
} as const;

export const ACCEPTED_RESUME_EXTENSIONS = ".pdf,.doc,.docx";

export function validateResumeFile(file: File): string | null {
  if (file.size > MAX_BYTES) return "File is too large. Maximum size is 10 MB.";
  const ext = file.name.split(".").pop()?.toLowerCase();
  if (!ext || !["pdf", "doc", "docx"].includes(ext)) {
    return "Please upload a PDF, DOC, or DOCX file.";
  }
  return null;
}

async function extractPdfText(arrayBuffer: ArrayBuffer): Promise<string> {
  const pdfjs = await import("pdfjs-dist");

  if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url,
    ).toString();
  }

  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  const parts: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ");
    parts.push(pageText);
  }

  return parts.join("\n\n");
}

async function extractDocxText(arrayBuffer: ArrayBuffer): Promise<string> {
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
}

export async function extractTextFromResumeFile(file: File): Promise<string> {
  const error = validateResumeFile(file);
  if (error) throw new Error(error);

  const ext = file.name.split(".").pop()?.toLowerCase();
  const arrayBuffer = await file.arrayBuffer();

  if (ext === "pdf") {
    return extractPdfText(arrayBuffer);
  }

  if (ext === "docx" || ext === "doc") {
    try {
      return await extractDocxText(arrayBuffer);
    } catch {
      if (ext === "doc") {
        throw new Error(
          "Could not read this .doc file. Please save it as .docx or PDF and try again.",
        );
      }
      throw new Error("Could not read the Word document. Try exporting as PDF.");
    }
  }

  throw new Error("Unsupported file format.");
}
