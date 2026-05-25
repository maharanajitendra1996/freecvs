import type { ResumeData, ExperienceItem, EducationItem, SkillGroup } from "@/types/resume";
import { emptyResumeData } from "@/types/resume";

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

const SECTION_PATTERNS: { key: keyof ResumeData | "languages" | "certifications"; patterns: RegExp[] }[] = [
  { key: "summary", patterns: [/^(professional\s+)?summary$/i, /^profile$/i, /^objective$/i, /^about(\s+me)?$/i] },
  {
    key: "experience",
    patterns: [
      /^work\s+experience$/i,
      /^professional\s+experience$/i,
      /^employment(\s+history)?$/i,
      /^experience$/i,
      /^career\s+history$/i,
    ],
  },
  { key: "education", patterns: [/^education$/i, /^academic(\s+background)?$/i, /^qualifications$/i] },
  { key: "skills", patterns: [/^skills$/i, /^technical\s+skills$/i, /^core\s+competencies$/i, /^expertise$/i] },
  { key: "languages", patterns: [/^languages$/i] },
  { key: "certifications", patterns: [/^certifications?$/i, /^licenses?$/i, /^certificates$/i] },
];

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const PHONE_RE = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{2,4}[-.\s]?\d{2,4}[-.\s]?\d{0,4}/;
const LINKEDIN_RE = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/[\w-]+/i;
const URL_RE = /(?:https?:\/\/)?(?:www\.)?[\w.-]+\.[a-z]{2,}(?:\/\S*)?/i;
const DATE_RANGE_RE =
  /(\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}|\b\d{4})\s*[-–—to]+\s*(\b(?:Present|Current|Now|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*\d{0,4}|\b\d{4}|Present|Current)/i;
const YEAR_RANGE_RE = /(\d{4})\s*[-–—]\s*(\d{4}|Present|Current)/i;

function normalizeLines(text: string): string[] {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\u00a0/g, " ")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

function detectSection(line: string): (typeof SECTION_PATTERNS)[number]["key"] | null {
  const clean = line.replace(/[:\s]+$/, "").trim();
  for (const { key, patterns } of SECTION_PATTERNS) {
    if (patterns.some((p) => p.test(clean))) return key;
  }
  return null;
}

function extractContact(lines: string[]): ResumeData["contact"] {
  const contact = emptyResumeData().contact;
  const top = lines.slice(0, 12).join(" ");

  const email = top.match(EMAIL_RE);
  if (email) contact.email = email[0];

  const linkedin = top.match(LINKEDIN_RE);
  if (linkedin) contact.linkedin = linkedin[0];

  const phone = top.match(PHONE_RE);
  if (phone && phone[0].replace(/\D/g, "").length >= 8) contact.phone = phone[0].trim();

  const urls = top.match(new RegExp(URL_RE.source, "gi")) ?? [];
  const website = urls.find((u) => !/linkedin/i.test(u));
  if (website) contact.website = website;

  const nameLine = lines.find(
    (l) =>
      !EMAIL_RE.test(l) &&
      !PHONE_RE.test(l) &&
      !LINKEDIN_RE.test(l) &&
      l.length < 60 &&
      l.split(/\s+/).length >= 2 &&
      l.split(/\s+/).length <= 5 &&
      !detectSection(l),
  );
  if (nameLine) contact.fullName = nameLine;

  const locationLine = lines.find((l) => {
    if (l === contact.fullName || EMAIL_RE.test(l)) return false;
    return /^[A-Za-z\s.,]+,\s*[A-Za-z\s.]{2,}$/.test(l) || /\b[A-Z]{2}\s*\d{5}\b/.test(l);
  });
  if (locationLine) contact.location = locationLine;

  return contact;
}

function parseExperienceBlock(lines: string[]): ExperienceItem[] {
  const items: ExperienceItem[] = [];
  const chunks: string[][] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (DATE_RANGE_RE.test(line) || YEAR_RANGE_RE.test(line)) {
      if (current.length) chunks.push(current);
      current = [line];
    } else if (current.length) {
      current.push(line);
    } else if (line.length > 3) {
      current = [line];
    }
  }
  if (current.length) chunks.push(current);

  for (const chunk of chunks) {
    if (chunk.length === 0) continue;
    const dateLine = chunk.find((l) => DATE_RANGE_RE.test(l) || YEAR_RANGE_RE.test(l)) ?? "";
    const dateMatch = dateLine.match(DATE_RANGE_RE) ?? dateLine.match(YEAR_RANGE_RE);

    let startDate = "";
    let endDate = "";
    let current = false;
    if (dateMatch) {
      startDate = dateMatch[1]?.replace(/\.$/, "") ?? "";
      endDate = dateMatch[2] ?? "";
      current = /present|current|now/i.test(endDate);
    }

    const contentLines = chunk.filter((l) => l !== dateLine);
    const role = contentLines[0] ?? "Role";
    const company = contentLines[1] ?? "";
    const bullets = contentLines.slice(2).filter((l) => /^[•\-\*]/.test(l) || l.length > 20);
    const description = bullets.length
      ? bullets.map((b) => b.replace(/^[•\-\*]\s*/, "")).join("\n")
      : contentLines.slice(2).join("\n");

    items.push({
      id: uid(),
      role,
      company: company || contentLines[0] || "",
      location: "",
      startDate,
      endDate: current ? "Present" : endDate,
      current,
      description,
    });
  }

  if (items.length === 0 && lines.length > 0) {
    items.push({
      id: uid(),
      role: lines[0] ?? "",
      company: lines[1] ?? "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: lines.slice(2).join("\n"),
    });
  }

  return items;
}

function parseEducationBlock(lines: string[]): EducationItem[] {
  const items: EducationItem[] = [];
  const chunks: string[][] = [];
  let current: string[] = [];

  for (const line of lines) {
    const isDate = YEAR_RANGE_RE.test(line) || DATE_RANGE_RE.test(line);
    if (isDate && current.length > 0) {
      chunks.push(current);
      current = [line];
    } else {
      current.push(line);
    }
  }
  if (current.length) chunks.push(current);

  if (chunks.length === 0 && lines.length > 0) chunks.push(lines);

  for (const chunk of chunks) {
    const dateLine = chunk.find((l) => YEAR_RANGE_RE.test(l) || DATE_RANGE_RE.test(l)) ?? "";
    const ym = dateLine.match(YEAR_RANGE_RE) ?? dateLine.match(DATE_RANGE_RE);
    const rest = chunk.filter((l) => l !== dateLine);
    items.push({
      id: uid(),
      degree: rest[0] ?? "",
      school: rest[1] ?? rest[0] ?? "",
      field: "",
      startDate: ym?.[1] ?? "",
      endDate: ym?.[2] ?? "",
      description: rest.slice(2).join(" "),
    });
  }

  return items;
}

function parseSkillsBlock(lines: string[]): SkillGroup[] {
  const text = lines.join(", ");
  if (!text.trim()) return [];
  const commaSplit = text.split(/[,;|]/).map((s) => s.trim()).filter(Boolean);
  if (commaSplit.length >= 3) {
    return [{ id: uid(), name: "Skills", skills: commaSplit.join(", ") }];
  }
  return [{ id: uid(), name: "Skills", skills: lines.join(", ") }];
}

export function parseResumeText(rawText: string): ResumeData {
  const lines = normalizeLines(rawText);
  const data = emptyResumeData();
  data.contact = extractContact(lines);

  const sections: Record<string, string[]> = {};
  let currentKey: string | null = null;

  for (const line of lines) {
    const section = detectSection(line);
    if (section) {
      currentKey = section;
      if (!sections[currentKey]) sections[currentKey] = [];
      continue;
    }
    if (currentKey) {
      sections[currentKey].push(line);
    }
  }

  if (sections.summary?.length) {
    data.summary = sections.summary.join(" ");
  }

  if (sections.experience?.length) {
    data.experience = parseExperienceBlock(sections.experience);
  }

  if (sections.education?.length) {
    data.education = parseEducationBlock(sections.education);
  }

  if (sections.skills?.length) {
    data.skills = parseSkillsBlock(sections.skills);
  }

  if (sections.languages?.length) {
    data.languages = sections.languages.join(", ");
  }

  if (sections.certifications?.length) {
    data.certifications = sections.certifications.join(" · ");
  }

  if (!data.summary && !sections.summary) {
    const preSection = lines.filter((l) => !detectSection(l)).slice(0, 8);
    const summaryCandidates = preSection.filter(
      (l) =>
        l !== data.contact.fullName &&
        l !== data.contact.email &&
        l.length > 40 &&
        !DATE_RANGE_RE.test(l),
    );
    if (summaryCandidates[0]) data.summary = summaryCandidates.join(" ");
  }

  return data;
}

export function hasParsedContent(data: ResumeData): boolean {
  return Boolean(
    data.contact.fullName ||
      data.contact.email ||
      data.summary ||
      data.experience.length > 0 ||
      data.education.length > 0 ||
      data.skills.length > 0,
  );
}
