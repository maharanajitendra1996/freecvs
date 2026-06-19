export interface ContactInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  name: string;
  skills: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  languages: string;
  certifications: string;
  photo?: string;
  showPhoto?: boolean;
}

export const emptyResumeData = (): ResumeData => ({
  contact: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
  },
  summary: "",
  experience: [],
  education: [],
  skills: [],
  languages: "",
  certifications: "",
  photo: undefined,
  showPhoto: false,
});

export const sampleResumeData = (): ResumeData => ({
  contact: {
    fullName: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "alexjohnson.dev",
    linkedin: "linkedin.com/in/alexjohnson",
  },
  summary:
    "Results-driven software engineer with 6+ years building scalable web applications. Passionate about clean code, user experience, and mentoring junior developers.",
  experience: [
    {
      id: "1",
      company: "TechCorp Inc.",
      role: "Senior Software Engineer",
      location: "San Francisco, CA",
      startDate: "2021",
      endDate: "Present",
      current: true,
      description:
        "Led development of customer-facing dashboard serving 2M+ users. Reduced page load time by 40% through performance optimization. Mentored team of 4 junior engineers.",
    },
    {
      id: "2",
      company: "StartupXYZ",
      role: "Full Stack Developer",
      location: "Remote",
      startDate: "2018",
      endDate: "2021",
      current: false,
      description:
        "Built REST APIs and React frontends for B2B SaaS platform. Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes.",
    },
  ],
  education: [
    {
      id: "1",
      school: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      field: "",
      startDate: "2014",
      endDate: "2018",
      description: "GPA: 3.8/4.0 · Dean's List",
    },
  ],
  skills: [
    { id: "1", name: "Technical", skills: "JavaScript, TypeScript, React, Node.js, Python, PostgreSQL, AWS" },
    { id: "2", name: "Tools", skills: "Git, Docker, Kubernetes, Jest, Figma" },
  ],
  languages: "English (Native), Spanish (Professional)",
  certifications: "AWS Solutions Architect · Google Cloud Professional",
  photo: undefined,
  showPhoto: false,
});
