import type { CSSProperties } from "react";
import type { ResumeTemplate } from "@/types/template";

const SAMPLE = {
  name: "Alexandra Morgan",
  title: "Senior Product Manager",
  contact: "alex.morgan@email.com · San Francisco",
};

function MiniSection({
  title,
  theme,
  lines = 3,
  compact,
}: {
  title: string;
  theme: ResumeTemplate["theme"];
  lines?: number;
  compact?: boolean;
}) {
  const fs = compact ? "6px" : "5px";
  const titleStyle: CSSProperties = (() => {
    switch (theme.sectionStyle) {
      case "pill":
        return {
          backgroundColor: theme.primary,
          color: "#fff",
          borderRadius: theme.borderRadius,
          padding: "2px 5px",
          fontSize: fs,
          fontWeight: 600,
          display: "inline-block",
          marginBottom: 3,
        };
      case "bar":
        return {
          color: theme.primary,
          borderLeft: `2px solid ${theme.accent}`,
          paddingLeft: 4,
          fontSize: fs,
          fontWeight: 700,
          marginBottom: 3,
        };
      case "boxed":
        return {
          color: theme.primary,
          backgroundColor: `${theme.accent}40`,
          padding: "2px 4px",
          fontSize: fs,
          fontWeight: 700,
          marginBottom: 3,
        };
      case "minimal":
        return { color: theme.muted, fontSize: "5px", fontWeight: 600, marginBottom: 3, letterSpacing: "0.05em" };
      default:
        return {
          color: theme.primary,
          borderBottom: `1px solid ${theme.accent}`,
          fontSize: fs,
          fontWeight: 700,
          marginBottom: 3,
          paddingBottom: 2,
        };
    }
  })();

  return (
    <div className="mb-2.5">
      <div style={titleStyle}>{title.toUpperCase()}</div>
      <div className="mb-1">
        <div className="h-[4px] w-[88%] rounded-sm" style={{ backgroundColor: theme.primary, opacity: 0.9 }} />
        <div className="mt-1 h-[3px] w-[60%] rounded-sm" style={{ backgroundColor: theme.secondary, opacity: 0.45 }} />
      </div>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="mb-[3px] h-[3px] rounded-sm bg-zinc-200/90"
          style={{ width: `${94 - i * 7}%` }}
        />
      ))}
    </div>
  );
}

function BulletLines({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-[3px]">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-1">
          <span className="text-[5px] text-zinc-400">•</span>
          <div className="h-[3px] flex-1 rounded-sm bg-zinc-200/80" style={{ maxWidth: `${90 - i * 5}%` }} />
        </div>
      ))}
    </div>
  );
}

function HeaderBlock({ theme, inverted = false, compact }: { theme: ResumeTemplate["theme"]; inverted?: boolean; compact?: boolean }) {
  const primary = inverted ? "#fff" : theme.primary;
  const muted = inverted ? "rgba(255,255,255,0.8)" : theme.muted;
  return (
    <div className="mb-2">
      <div className="font-bold leading-tight" style={{ fontSize: compact ? "11px" : "10px", color: primary, fontFamily: theme.headingFont }}>
        {SAMPLE.name}
      </div>
      <div className="mt-0.5 font-medium" style={{ fontSize: "6px", color: inverted ? "rgba(255,255,255,0.9)" : theme.secondary }}>
        {SAMPLE.title}
      </div>
      <div className="mt-1" style={{ fontSize: "5px", color: muted }}>{SAMPLE.contact}</div>
    </div>
  );
}

function ResumePage({ template, compact }: { template: ResumeTemplate; compact?: boolean }) {
  const { theme, layout } = template;

  if (layout === "header-banner") {
    return (
      <div className="flex h-full flex-col" style={{ backgroundColor: theme.background }}>
        <div className="px-3 py-2.5" style={{ backgroundColor: theme.primary }}>
          <HeaderBlock theme={theme} inverted compact={compact} />
        </div>
        <div className="flex flex-1 gap-2 px-3 py-2">
          <div className="flex-[2]">
            <MiniSection title="Experience" theme={theme} compact={compact} />
            <BulletLines count={4} />
          </div>
          <div className="flex-1">
            <MiniSection title="Skills" theme={theme} lines={2} compact={compact} />
          </div>
        </div>
      </div>
    );
  }

  if (layout === "sidebar-left") {
    return (
      <div className="flex h-full" style={{ backgroundColor: theme.background }}>
        <div className="flex w-[34%] shrink-0 flex-col px-2.5 py-3" style={{ backgroundColor: theme.primary }}>
          <HeaderBlock theme={theme} inverted compact={compact} />
          <MiniSection title="Skills" theme={{ ...theme, sectionStyle: "minimal" }} lines={2} compact={compact} />
        </div>
        <div className="flex-1 px-2.5 py-3">
          <MiniSection title="Experience" theme={theme} compact={compact} />
          <BulletLines count={4} />
        </div>
      </div>
    );
  }

  if (layout === "sidebar-right") {
    return (
      <div className="flex h-full" style={{ backgroundColor: theme.background }}>
        <div className="flex-1 px-2.5 py-3">
          <HeaderBlock theme={theme} compact={compact} />
          <MiniSection title="Experience" theme={theme} compact={compact} />
          <BulletLines count={3} />
        </div>
        <div className="w-[32%] shrink-0 px-2 py-3" style={{ backgroundColor: `${theme.accent}30` }}>
          <MiniSection title="Skills" theme={theme} lines={3} compact={compact} />
        </div>
      </div>
    );
  }

  if (layout === "two-column") {
    return (
      <div className="h-full px-3 py-3" style={{ backgroundColor: theme.background }}>
        <HeaderBlock theme={theme} compact={compact} />
        <div className="mt-2 flex gap-2">
          <div className="flex-1">
            <MiniSection title="Experience" theme={theme} compact={compact} />
            <BulletLines count={3} />
          </div>
          <div className="w-[36%] border-l pl-2" style={{ borderColor: `${theme.accent}50` }}>
            <MiniSection title="Skills" theme={theme} lines={2} compact={compact} />
            <MiniSection title="Education" theme={theme} lines={1} compact={compact} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full px-3 py-3" style={{ backgroundColor: theme.background }}>
      <HeaderBlock theme={theme} compact={compact} />
      <MiniSection title="Summary" theme={theme} lines={2} compact={compact} />
      <MiniSection title="Experience" theme={theme} compact={compact} />
      <BulletLines count={3} />
      <MiniSection title="Education" theme={theme} lines={1} compact={compact} />
    </div>
  );
}

export function TemplateThumbnail({ template }: { template: ResumeTemplate }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-zinc-100">
      <div
        className="h-full w-full origin-top transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ fontFamily: template.theme.bodyFont }}
      >
        <ResumePage template={template} compact />
      </div>
    </div>
  );
}
