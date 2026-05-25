export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatarColor: string;
  highlight?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Product Manager",
    location: "Bangalore, India",
    quote:
      "I had a recruiter callback within a week of sending my ResumeForge PDF. The Urban Modern template looked polished without feeling over-designed — exactly what I needed for tech PM roles.",
    rating: 5,
    avatarColor: "#7c3aed",
    highlight: "Landed 3 interviews in 2 weeks",
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Software Engineer",
    location: "Toronto, Canada",
    quote:
      "Switched from a cluttered Word doc to the ATS Classic template. No watermarks, unlimited downloads, and my resume finally parsed cleanly on Greenhouse and Lever.",
    rating: 5,
    avatarColor: "#0891b2",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Marketing Coordinator",
    location: "Austin, TX",
    quote:
      "As a recent grad I was nervous about my CV. Campus Ready made me look professional on day one. Downloaded PDF and DOC versions for different applications — all free.",
    rating: 5,
    avatarColor: "#db2777",
    highlight: "First full-time offer",
  },
  {
    id: "4",
    name: "James Okonkwo",
    role: "Financial Analyst",
    location: "London, UK",
    quote:
      "Banking Standard is conservative enough for finance recruiters but still readable. I appreciate that I didn't need to sign up or enter a card just to download.",
    rating: 5,
    avatarColor: "#14532d",
  },
  {
    id: "5",
    name: "Sofia Lindström",
    role: "UX Designer",
    location: "Stockholm, Sweden",
    quote:
      "Designer Portfolio actually reflects creative work without gimmicks. Clients have complimented how clean the layout is. I've rebuilt my resume four times — still no paywall.",
    rating: 5,
    avatarColor: "#7e22ce",
  },
  {
    id: "6",
    name: "David Kim",
    role: "Operations Lead",
    location: "Seoul, South Korea",
    quote:
      "Our whole team used ResumeForge for internal role changes. Two-column layouts fit more experience on one page. Export to Word was a lifesaver for HR systems.",
    rating: 4,
    avatarColor: "#ea580c",
  },
];

export const TRUST_STATS = [
  { value: "120K+", label: "Resumes created" },
  { value: "4.9/5", label: "Average rating" },
  { value: "80", label: "Free templates" },
  { value: "0", label: "Watermarks" },
];
