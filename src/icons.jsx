// SVG icon set — thin, uniform stroke-based, 24x24
const Icon = ({ name, size = 22, stroke = 1.6, className = "" }) => {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round", className,
  };
  switch (name) {
    case "spark":
      return <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case "snow":
      return <svg {...common}><path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15"/></svg>;
    case "leaf":
      return <svg {...common}><path d="M4 20c0-8 6-14 16-14-1 10-7 16-16 14z"/><path d="M4 20l8-8"/></svg>;
    case "heart":
      return <svg {...common}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "hospital":
      return <svg {...common}><path d="M4 21V7l8-4 8 4v14"/><path d="M4 21h16"/><path d="M10 21v-5h4v5"/><path d="M12 8v4M10 10h4"/></svg>;
    case "check":
      return <svg {...common}><path d="M5 12l4 4 10-10"/></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "phone":
      return <svg {...common}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
    case "msg":
      return <svg {...common}><path d="M4 5h16v12H8l-4 4V5z"/></svg>;
    case "pin":
      return <svg {...common}><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "star":
      return <svg {...common} fill="currentColor" stroke="none"><path d="M12 2l2.9 6.3 6.8.8-5 4.8 1.4 6.8L12 17.5 5.9 20.7l1.4-6.8-5-4.8 6.8-.8L12 2z"/></svg>;
    case "plus":
      return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "scan":
      return <svg {...common}><path d="M3 8V5a2 2 0 0 1 2-2h3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M21 16v3a2 2 0 0 1-2 2h-3M3 12h18"/></svg>;
    case "dot":
      return <svg {...common}><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>;
    case "wave":
      return <svg {...common}><path d="M3 12c3 0 3-4 6-4s3 8 6 8 3-4 6-4"/></svg>;
    case "target":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>;
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>;
    case "feather":
      return <svg {...common}><path d="M20 4c-4 0-9 2-12 5s-5 7-5 11c4 0 8-2 11-5s5-7 5-11z"/><path d="M16 8L3 20"/></svg>;
    case "arr-down":
      return <svg {...common}><path d="M12 5v14M5 13l7 7 7-7"/></svg>;
    case "whatsapp":
      return <svg {...common}><path d="M4 20l1.5-4A8 8 0 1 1 8 20l-4 0z"/><path d="M9 10c.5 2 2 3.5 4 4l1.5-1 2 1.5a5 5 0 0 1-6-2 5 5 0 0 1-2-6l1.5 2-1 1.5z" fill="currentColor" stroke="none"/></svg>;
    default:
      return null;
  }
};

window.Icon = Icon;
