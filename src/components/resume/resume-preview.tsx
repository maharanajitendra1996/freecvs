"use client";

import type { ResumeData } from "@/types/resume";
import type { ResumeTemplate } from "@/types/template";

interface ResumePreviewProps {
  data: ResumeData;
  template: ResumeTemplate;
  scale?: number;
  id?: string;
}

function SectionTitle({
  title,
  theme,
}: {
  title: string;
  theme: ResumeTemplate["theme"];
}) {
  const base = "text-sm font-semibold uppercase tracking-wide mb-2";
  switch (theme.sectionStyle) {
    case "pill":
      return (
        <h3
          className={`${base} inline-block px-3 py-1 text-white`}
          style={{ backgroundColor: theme.primary, borderRadius: theme.borderRadius }}
        >
          {title}
        </h3>
      );
    case "bar":
      return (
        <h3 className={base} style={{ color: theme.primary, borderLeft: `4px solid ${theme.accent}`, paddingLeft: 8 }}>
          {title}
        </h3>
      );
    case "boxed":
      return (
        <h3
          className={`${base} px-2 py-1`}
          style={{ color: theme.primary, backgroundColor: `${theme.accent}33`, borderRadius: theme.borderRadius }}
        >
          {title}
        </h3>
      );
    case "minimal":
      return (
        <h3 className={`${base} text-xs`} style={{ color: theme.muted }}>
          {title}
        </h3>
      );
    default:
      return (
        <h3
          className={`${base} pb-1`}
          style={{ color: theme.primary, borderBottom: `2px solid ${theme.accent}` }}
        >
          {title}
        </h3>
      );
  }
}

function ContactBlock({ data, theme }: { data: ResumeData; theme: ResumeTemplate["theme"] }) {
  const { contact } = data;
  const lines = [
    contact.email,
    contact.phone,
    contact.location,
    contact.website,
    contact.linkedin,
  ].filter(Boolean);

  return (
    <div>
      <h1
        className="text-2xl font-bold leading-tight"
        style={{ fontFamily: theme.headingFont, color: theme.primary }}
      >
        {contact.fullName || "Your Name"}
      </h1>
      {lines.length > 0 && (
        <p className="mt-2 text-xs leading-relaxed" style={{ color: theme.muted }}>
          {lines.join(" · ")}
        </p>
      )}
    </div>
  );
}

function ContactBlockWithPhoto({ data, theme }: { data: ResumeData; theme: ResumeTemplate["theme"] }) {
  const { contact } = data;
  const lines = [
    contact.email,
    contact.phone,
    contact.location,
    contact.website,
    contact.linkedin,
  ].filter(Boolean);

  return (
    <div className="flex items-start gap-4">
      {data.showPhoto && data.photo && (
        <img
          src={data.photo}
          alt={contact.fullName}
          className="h-32 w-32 rounded-lg object-cover shadow-md"
        />
      )}
      <div className="flex-1">
        <h1
          className="text-2xl font-bold leading-tight"
          style={{ fontFamily: theme.headingFont, color: theme.primary }}
        >
          {contact.fullName || "Your Name"}
        </h1>
        {lines.length > 0 && (
          <p className="mt-2 text-xs leading-relaxed" style={{ color: theme.muted }}>
            {lines.join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
}

function MainContent({ data, theme }: { data: ResumeData; theme: ResumeTemplate["theme"] }) {
  return (
    <div className="space-y-4 text-sm" style={{ fontFamily: theme.bodyFont, color: theme.text }}>
      {data.summary && (
        <section>
          <SectionTitle title="Summary" theme={theme} />
          <p className="leading-relaxed" style={{ color: theme.text }}>{data.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section>
          <SectionTitle title="Experience" theme={theme} />
          <div className="space-y-3">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-wrap justify-between gap-1">
                  <p className="font-semibold" style={{ color: theme.primary }}>{exp.role}</p>
                  <p className="text-xs" style={{ color: theme.muted }}>
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </p>
                </div>
                <p className="text-xs font-medium" style={{ color: theme.secondary }}>
                  {exp.company}{exp.location ? ` · ${exp.location}` : ""}
                </p>
                {exp.description && (
                  <p className="mt-1 text-xs leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education.length > 0 && (
        <section>
          <SectionTitle title="Education" theme={theme} />
          <div className="space-y-2">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <p className="font-semibold" style={{ color: theme.primary }}>{edu.degree}</p>
                <p className="text-xs" style={{ color: theme.secondary }}>{edu.school}</p>
                <p className="text-xs" style={{ color: theme.muted }}>{edu.startDate} – {edu.endDate}</p>
                {edu.description && <p className="mt-0.5 text-xs">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.certifications && (
        <section>
          <SectionTitle title="Certifications" theme={theme} />
          <p className="text-xs whitespace-pre-wrap">{data.certifications}</p>
        </section>
      )}
    </div>
  );
}

function SidebarContent({ data, theme }: { data: ResumeData; theme: ResumeTemplate["theme"] }) {
  return (
    <div className="space-y-4 text-xs" style={{ fontFamily: theme.bodyFont }}>
      {data.skills.length > 0 && (
        <section>
          <SectionTitle title="Skills" theme={theme} />
          {data.skills.map((g) => (
            <div key={g.id} className="mb-2">
              <p className="font-semibold" style={{ color: theme.primary }}>{g.name}</p>
              <p className="leading-relaxed" style={{ color: theme.text }}>{g.skills}</p>
            </div>
          ))}
        </section>
      )}
      {data.languages && (
        <section>
          <SectionTitle title="Languages" theme={theme} />
          <p style={{ color: theme.text }}>{data.languages}</p>
        </section>
      )}
    </div>
  );
}

export function ResumePreview({ data, template, scale = 1, id = "resume-preview" }: ResumePreviewProps) {
  const { theme, layout } = template;
  const isSidebar = layout === "sidebar-left" || layout === "sidebar-right";
  const isTwoCol = layout === "two-column" || isSidebar;
  const isBanner = layout === "header-banner";

  const baseStyle: React.CSSProperties = {
    backgroundColor: theme.background,
    transform: scale !== 1 ? `scale(${scale})` : undefined,
    transformOrigin: "top center",
    fontFamily: theme.bodyFont,
  };

  if (isBanner) {
    return (
      <div
        id={id}
        className="mx-auto w-full max-w-[210mm] min-h-[297mm] shadow-lg"
        style={baseStyle}
      >
        <div className="px-8 py-6 text-white" style={{ backgroundColor: theme.primary }}>
          {template.supportsPhoto && data.showPhoto && data.photo ? (
            <ContactBlockWithPhoto data={data} theme={{ ...theme, primary: "#ffffff", muted: "#e2e8f0" }} />
          ) : (
            <ContactBlock data={data} theme={{ ...theme, primary: "#ffffff", muted: "#e2e8f0" }} />
          )}
        </div>
        <div className="grid grid-cols-3 gap-6 px-8 py-6">
          <div className="col-span-2">
            <MainContent data={data} theme={theme} />
          </div>
          <div>
            <SidebarContent data={data} theme={theme} />
          </div>
        </div>
      </div>
    );
  }

  if (layout === "sidebar-left") {
    return (
      <div id={id} className="mx-auto flex w-full max-w-[210mm] min-h-[297mm] shadow-lg" style={baseStyle}>
        <div className="w-[32%] shrink-0 px-5 py-6 text-white" style={{ backgroundColor: theme.primary }}>
          {template.supportsPhoto && data.showPhoto && data.photo ? (
            <div>
              <img
                src={data.photo}
                alt={data.contact.fullName}
                className="mb-4 h-28 w-28 rounded-lg object-cover shadow-md"
              />
              <h1
                className="text-lg font-bold leading-tight"
                style={{ fontFamily: theme.headingFont, color: "#fff" }}
              >
                {data.contact.fullName || "Your Name"}
              </h1>
            </div>
          ) : (
            <ContactBlock data={data} theme={{ ...theme, primary: "#fff", secondary: "#e2e8f0", muted: "#cbd5e1" }} />
          )}
          <div className="mt-6">
            <SidebarContent data={data} theme={{ ...theme, primary: "#fff", text: "#f1f5f9", muted: "#cbd5e1" }} />
          </div>
        </div>
        <div className="flex-1 px-6 py-6">
          <MainContent data={data} theme={theme} />
        </div>
      </div>
    );
  }

  if (layout === "sidebar-right") {
    return (
      <div id={id} className="mx-auto flex w-full max-w-[210mm] min-h-[297mm] shadow-lg" style={baseStyle}>
        <div className="flex-1 px-6 py-6">
          {template.supportsPhoto && data.showPhoto && data.photo ? (
            <ContactBlockWithPhoto data={data} theme={theme} />
          ) : (
            <ContactBlock data={data} theme={theme} />
          )}
          <div className="mt-4">
            <MainContent data={data} theme={theme} />
          </div>
        </div>
        <div className="w-[30%] shrink-0 px-4 py-6" style={{ backgroundColor: `${theme.accent}22` }}>
          <SidebarContent data={data} theme={theme} />
        </div>
      </div>
    );
  }

  if (layout === "two-column") {
    return (
      <div id={id} className="mx-auto w-full max-w-[210mm] min-h-[297mm] px-8 py-8 shadow-lg" style={baseStyle}>
        <ContactBlock data={data} theme={theme} />
        <div className="mt-6 grid grid-cols-2 gap-6">
          <MainContent
            data={{
              ...data,
              skills: [],
              languages: "",
            }}
            theme={theme}
          />
          <SidebarContent data={data} theme={theme} />
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="mx-auto w-full max-w-[210mm] min-h-[297mm] px-8 py-8 shadow-lg" style={baseStyle}>
      {template.supportsPhoto && data.showPhoto && data.photo ? (
        <ContactBlockWithPhoto data={data} theme={theme} />
      ) : (
        <ContactBlock data={data} theme={theme} />
      )}
      <div className="mt-6 space-y-4">
        <MainContent data={data} theme={theme} />
        {(data.skills.length > 0 || data.languages) && (
          <SidebarContent data={data} theme={theme} />
        )}
      </div>
    </div>
  );
}
