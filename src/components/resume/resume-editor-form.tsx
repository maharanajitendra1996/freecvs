"use client";

import { Plus, Trash2, Upload, X } from "lucide-react";
import type { ResumeData, ExperienceItem, EducationItem, SkillGroup } from "@/types/resume";
import { useResumeStore } from "@/store/resume-store";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

interface ResumeEditorFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function ResumeEditorForm({ data, onChange }: ResumeEditorFormProps) {
  const update = (partial: Partial<ResumeData>) => onChange({ ...data, ...partial });

  const updateContact = (field: keyof ResumeData["contact"], value: string) => {
    onChange({ ...data, contact: { ...data.contact, [field]: value } });
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        update({ photo: base64, showPhoto: true });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    update({ photo: undefined, showPhoto: false });
  };

  return (
    <div className="space-y-6 text-sm">
      <section>
        <h3 className="mb-3 font-semibold text-zinc-900">Personal Info</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {(
            [
              ["fullName", "Full Name"],
              ["email", "Email"],
              ["phone", "Phone"],
              ["location", "Location"],
              ["website", "Website"],
              ["linkedin", "LinkedIn"],
            ] as const
          ).map(([field, label]) => (
            <div key={field} className={field === "fullName" ? "sm:col-span-2" : ""}>
              <label className="mb-1 block text-xs font-medium text-zinc-500">{label}</label>
              <input
                className={inputClass}
                value={data.contact[field]}
                onChange={(e) => updateContact(field, e.target.value)}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-zinc-900">Photo (Optional)</h3>
        {data.photo ? (
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <img
                src={data.photo}
                alt="Profile"
                className="h-32 w-32 rounded-lg border border-zinc-200 object-cover"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={data.showPhoto}
                  onChange={(e) => update({ showPhoto: e.target.checked })}
                  className="rounded border-zinc-300"
                />
                <span className="text-xs text-zinc-600">Show in resume</span>
              </label>
              <button
                type="button"
                onClick={removePhoto}
                className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-3.5 w-3.5" /> Remove
              </button>
            </div>
          </div>
        ) : (
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-300 px-4 py-8 text-center hover:border-indigo-500 hover:bg-indigo-50">
            <Upload className="h-4 w-4 text-zinc-400" />
            <span className="text-xs text-zinc-500">Click to upload photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>
        )}
      </section>

      <section>
        <h3 className="mb-2 font-semibold text-zinc-900">Summary</h3>
        <textarea
          className={`${inputClass} min-h-[80px]`}
          value={data.summary}
          onChange={(e) => update({ summary: e.target.value })}
          placeholder="Brief professional summary..."
        />
      </section>

      <section>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-zinc-900">Experience</h3>
          <button
            type="button"
            onClick={() =>
              update({
                experience: [
                  ...data.experience,
                  {
                    id: uid(),
                    company: "",
                    role: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    current: false,
                    description: "",
                  },
                ],
              })
            }
            className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700"
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
        {data.experience.map((exp, i) => (
          <ExperienceFields
            key={exp.id}
            exp={exp}
            onChange={(updated) => {
              const experience = [...data.experience];
              experience[i] = updated;
              update({ experience });
            }}
            onRemove={() => update({ experience: data.experience.filter((e) => e.id !== exp.id) })}
            inputClass={inputClass}
          />
        ))}
      </section>

      <section>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-zinc-900">Education</h3>
          <button
            type="button"
            onClick={() =>
              update({
                education: [
                  ...data.education,
                  { id: uid(), school: "", degree: "", field: "", startDate: "", endDate: "", description: "" },
                ],
              })
            }
            className="flex items-center gap-1 text-xs font-medium text-indigo-600"
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
        {data.education.map((edu, i) => (
          <div key={edu.id} className="mb-4 rounded-lg border border-zinc-100 bg-zinc-50/50 p-3">
            <div className="mb-2 flex justify-end">
              <button type="button" onClick={() => update({ education: data.education.filter((e) => e.id !== edu.id) })} className="text-zinc-400 hover:text-red-500">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-2">
              <input className={inputClass} placeholder="Degree" value={edu.degree} onChange={(e) => { const education = [...data.education]; education[i] = { ...edu, degree: e.target.value }; update({ education }); }} />
              <input className={inputClass} placeholder="School" value={edu.school} onChange={(e) => { const education = [...data.education]; education[i] = { ...edu, school: e.target.value }; update({ education }); }} />
              <div className="grid grid-cols-2 gap-2">
                <input className={inputClass} placeholder="Start" value={edu.startDate} onChange={(e) => { const education = [...data.education]; education[i] = { ...edu, startDate: e.target.value }; update({ education }); }} />
                <input className={inputClass} placeholder="End" value={edu.endDate} onChange={(e) => { const education = [...data.education]; education[i] = { ...edu, endDate: e.target.value }; update({ education }); }} />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-zinc-900">Skills</h3>
          <button
            type="button"
            onClick={() => update({ skills: [...data.skills, { id: uid(), name: "Skills", skills: "" }] })}
            className="flex items-center gap-1 text-xs font-medium text-indigo-600"
          >
            <Plus className="h-3.5 w-3.5" /> Add group
          </button>
        </div>
        {data.skills.map((g, i) => (
          <div key={g.id} className="mb-2 flex gap-2">
            <input className={`${inputClass} w-1/3`} value={g.name} onChange={(e) => { const skills = [...data.skills]; skills[i] = { ...g, name: e.target.value }; update({ skills }); }} />
            <input className={`${inputClass} flex-1`} value={g.skills} placeholder="Comma-separated skills" onChange={(e) => { const skills = [...data.skills]; skills[i] = { ...g, skills: e.target.value }; update({ skills }); }} />
            <button type="button" onClick={() => update({ skills: data.skills.filter((s) => s.id !== g.id) })} className="text-zinc-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
          </div>
        ))}
      </section>

      <section>
        <h3 className="mb-2 font-semibold text-zinc-900">Languages & Certifications</h3>
        <input className={`${inputClass} mb-2`} placeholder="Languages" value={data.languages} onChange={(e) => update({ languages: e.target.value })} />
        <textarea className={inputClass} placeholder="Certifications" value={data.certifications} onChange={(e) => update({ certifications: e.target.value })} />
      </section>
    </div>
  );
}

function ExperienceFields({
  exp,
  onChange,
  onRemove,
  inputClass,
}: {
  exp: ExperienceItem;
  onChange: (e: ExperienceItem) => void;
  onRemove: () => void;
  inputClass: string;
}) {
  return (
    <div className="mb-4 rounded-lg border border-zinc-100 bg-zinc-50/50 p-3">
      <div className="mb-2 flex justify-end">
        <button type="button" onClick={onRemove} className="text-zinc-400 hover:text-red-500">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <div className="grid gap-2">
        <input className={inputClass} placeholder="Job title" value={exp.role} onChange={(e) => onChange({ ...exp, role: e.target.value })} />
        <input className={inputClass} placeholder="Company" value={exp.company} onChange={(e) => onChange({ ...exp, company: e.target.value })} />
        <input className={inputClass} placeholder="Location" value={exp.location} onChange={(e) => onChange({ ...exp, location: e.target.value })} />
        <div className="grid grid-cols-2 gap-2">
          <input className={inputClass} placeholder="Start" value={exp.startDate} onChange={(e) => onChange({ ...exp, startDate: e.target.value })} />
          <input className={inputClass} placeholder="End" value={exp.endDate} onChange={(e) => onChange({ ...exp, endDate: e.target.value })} disabled={exp.current} />
        </div>
        <label className="flex items-center gap-2 text-xs text-zinc-600">
          <input type="checkbox" checked={exp.current} onChange={(e) => onChange({ ...exp, current: e.target.checked, endDate: e.target.checked ? "Present" : exp.endDate })} />
          Currently working here
        </label>
        <textarea className={`${inputClass} min-h-[60px]`} placeholder="Description" value={exp.description} onChange={(e) => onChange({ ...exp, description: e.target.value })} />
      </div>
    </div>
  );
}
