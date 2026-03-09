import type { ReactNode } from "react";

interface ServiceAccent {
  highlight: string;
  className: string;
}

const SERVICE_TITLE_ACCENTS: Record<string, ServiceAccent> = {
  "settlement-support-for-newcomers": {
    highlight: "Settlement",
    className: "text-[#e39054]",
  },
  "early-childhood-education-and-care": {
    highlight: "Early",
    className: "text-[#e39054]",
  },
  "seniors-and-womens-support-services": {
    highlight: "Women",
    className: "text-[#e39054]",
  },
  "interfaith-harmony-and-community-cohesion": {
    highlight: "Interfaith",
    className: "text-[#e39054]",
  },
};

function renderHighlight(text: string, highlight: string, className: string): ReactNode {
  const start = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (start === -1) return text;

  const end = start + highlight.length;
  return (
    <>
      {text.slice(0, start)}
      <span className={className}>{text.slice(start, end)}</span>
      {text.slice(end)}
    </>
  );
}

export function renderServiceTitleWithAccent(title: string, slug: string): ReactNode {
  const accent = SERVICE_TITLE_ACCENTS[slug];
  if (!accent) return title;
  return renderHighlight(title, accent.highlight, accent.className);
}
