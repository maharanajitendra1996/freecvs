import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ResumeData } from "@/types/resume";
import { emptyResumeData, sampleResumeData } from "@/types/resume";

interface ResumeStore {
  data: ResumeData;
  templateId: string | null;
  useSampleData: boolean;
  setData: (data: ResumeData) => void;
  updateContact: (field: keyof ResumeData["contact"], value: string) => void;
  setTemplateId: (id: string) => void;
  loadSampleData: () => void;
  resetData: () => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      data: emptyResumeData(),
      templateId: null,
      useSampleData: false,
      setData: (data) => set({ data }),
      updateContact: (field, value) =>
        set((s) => ({ data: { ...s.data, contact: { ...s.data.contact, [field]: value } } })),
      setTemplateId: (id) => set({ templateId: id }),
      loadSampleData: () => set({ data: sampleResumeData(), useSampleData: true }),
      resetData: () => set({ data: emptyResumeData(), useSampleData: false }),
    }),
    { name: "FreeCVs-draft" },
  ),
);
