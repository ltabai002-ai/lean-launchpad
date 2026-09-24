import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import {
  MapPin,
  Camera,
  IndianRupee,
  Bell,
  PhoneOff,
  UserX,
  PhoneCall,
  FileWarning,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Menu,
  X,
  HardHat,
  Clock,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

import heroImg from "../assets/infield-hero.jpg";
import siteBandImg from "../assets/infield-site-band.jpg";
import finalCtaImg from "../assets/infield-final-cta.jpg";
import logoImg from "../assets/logo.png";

const WA_NUMBER = "919999999999"; // TODO: replace with INFIELD's real WhatsApp number

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INFIELD — Stop Proxy Attendance & Track Your Construction Workforce Live" },
      {
        name: "description",
        content:
          "Know who's on site, who left, and pay exact salaries automatically. INFIELD is the workforce management app for construction companies. Get your free demo.",
      },
      { property: "og:title", content: "INFIELD — Stop Proxy Attendance & Track Your Construction Workforce Live" },
      {
        property: "og:description",
        content:
          "Know who's on site, who left, and pay exact salaries automatically. INFIELD is the workforce management app for construction companies. Get your free demo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------- NAV ---------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#calculator", label: "Savings" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoImg} alt="INFIELD Logo" className="h-10 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Free Demo
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Get Free Demo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ---------------------------------- HERO --------------------------------- */

function LiveBadge() {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-[2px] w-8 bg-[#ffcc00]"></div>
      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" />
        142 workers on site right now
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#0b1e36] pt-16">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Construction site with workers tracked live by INFIELD"
          className="h-full w-full object-cover object-center md:object-right"
          loading="eager"
        />
        {/* Gradient overlay: solid blue on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1e36] via-[#0b1e36]/80 to-[#0b1e36] md:bg-gradient-to-r md:from-[#0b1e36] md:from-40% md:via-[#0b1e36]/80 md:via-60% md:to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <LiveBadge />
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Know exactly who's on your site.{" "}
              <span className="text-[#ffcc00]">Right now.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              INFIELD is a mobile app that shows your workers' attendance and location on every site — live.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffcc00] px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
              >
                Get Your Free Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Works on Android & iPhone · [Hindi supported]
            </p>
          </div>

          {/* Right Content: Floating Card */}
          <div className="hidden lg:flex lg:justify-end">
            <div className="w-80 animate-float-slow rounded-xl border border-white/20 bg-black/40 p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Site A — Live
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse-dot" />
                  LIVE
                </span>
              </div>
              <div className="mt-4 space-y-3 text-sm text-white">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" /> Ramesh K. — checked in 8:02 AM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" /> Sunita D. — checked in 8:15 AM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white/70">
                    <XCircle className="h-4 w-4 text-red-400" /> Proxy attempt blocked — 8:31 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PAIN POINTS ------------------------------ */

const pains = [
  {
    icon: UserX,
    title: "Proxy attendance",
    text: "One worker marks attendance for five friends who never showed up. You pay for ghosts.",
  },
  {
    icon: Clock,
    title: "Workers leaving early",
    text: "They check in, disappear by 11 AM, and you find out at the end of the month. Maybe.",
  },
  {
    icon: PhoneCall,
    title: "Endless phone calls",
    text: "\"Sir, how many people on Site B today?\" — 20 calls a day just to know what's happening.",
  },
  {
    icon: FileWarning,
    title: "Salary disputes",
    text: "\"I worked 26 days!\" \"No, you worked 21.\" No proof either way. Every month, the same fight.",
  },
];

function PainPoints() {
  return (
    <section className="bg-steel py-16 text-steel-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Sound familiar?
        </h2>
        <p className="mt-3 max-w-2xl text-steel-foreground/70">
          Every contractor we talk to loses money the same four ways. Most
          don't realise how much until they add it up.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <p.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-steel-foreground/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- HOW IT WORKS ----------------------------- */

const steps = [
  {
    n: "1",
    title: "Worker checks in with a selfie",
    text: "At the site gate, the worker takes a selfie in the app. Face match + GPS confirm it's really them, really on site. No buddy punching possible.",
  },
  {
    n: "2",
    title: "You see every site live",
    text: "One dashboard shows who's on each site, who left early, and who never came — updated in real time, no phone calls needed.",
  },
  {
    n: "3",
    title: "Salaries calculate themselves",
    text: "At month end, exact payable days and overtime are already computed. No registers, no arguments, no overpayment.",
  },
];

function UpAndRunning() {
  return (
    <section id="up-and-running" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-center md:text-left">
          Up and running in one day
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground text-center md:text-left">
          No hardware to install. No training headaches. If your supervisor can
          use WhatsApp, they can use INFIELD.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <span className="font-display text-3xl font-extrabold text-primary">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- NEW HOW IT WORKS --------------------------- */

function NewHowItWorks() {
  const howSteps = [
    {
      title: "Worker checks in on the app at the site",
      app: "Worker's phone",
      mockup: (
        <div className="relative flex h-full w-full flex-col bg-slate-50">
          <div className="flex h-4 items-center justify-between bg-black px-1.5 text-[7px] text-white">
            <span>8:58 AM</span>
            <div className="flex items-center gap-1">
              <span className="font-bold scale-75">5G</span>
              <div className="h-1.5 w-2 rounded-sm bg-white" />
            </div>
          </div>
          <div className="flex-1 p-2 pt-3 flex flex-col">
            <p className="text-center text-[10px] font-bold text-slate-800">Site A – Whitefield</p>
            <div className="mt-2 flex-1 rounded-md bg-slate-200 border border-slate-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-8 w-8 border-2 border-white rounded-md"></div>
            </div>
            <button className="mt-2 w-full rounded-md bg-primary py-1.5 text-[10px] font-bold text-white shadow active:scale-95 transition-transform">
              Check In
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "INFIELD verifies location inside site radius",
      app: "Automatic",
      mockup: (
        <div className="relative flex h-full w-full flex-col bg-[#e8f1f5] items-center justify-center overflow-hidden">
          {/* Map background lines */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
          <div className="relative h-16 w-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center animate-pulse">
            <MapPin className="h-5 w-5 text-primary absolute -mt-3" />
          </div>
          <div className="absolute bottom-4 flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[8px] font-bold text-green-700 shadow border border-green-200">
            <CheckCircle2 className="h-3 w-3" />
            Location verified ✓
          </div>
        </div>
      ),
    },
    {
      title: "Manager sees exactly who is present",
      app: "Manager's phone",
      mockup: (
        <div className="relative flex h-full w-full flex-col bg-slate-50">
          <div className="flex h-5 items-center justify-between bg-black px-2 pt-1 text-[7px] text-white">
            <span>9:05 AM</span>
            <div className="flex items-center gap-1">
              <span className="font-bold scale-75">5G</span>
              <div className="h-1.5 w-2 rounded-sm bg-white" />
            </div>
          </div>
          <div className="bg-steel px-2 py-2 text-white flex justify-between items-center shadow-sm relative z-10">
            <p className="text-[11px] font-extrabold tracking-tight">Dashboard</p>
            <div className="h-3 w-3 rounded-full bg-white/20 flex items-center justify-center">
              <div className="h-1 w-1 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2.5 flex-1 bg-gradient-to-b from-slate-100 to-slate-50">
            {/* Mini Chart Header */}
            <div className="flex items-center gap-2 mb-1">
              <div className="h-8 w-8 rounded-full border-[3px] border-green-500 border-l-red-500 border-t-orange-500 shadow-sm rotate-45 flex-shrink-0 bg-white"></div>
              <div className="flex flex-col">
                <span className="text-[7px] font-bold text-slate-500 uppercase tracking-wide">Total Workers</span>
                <span className="text-[14px] font-extrabold text-slate-800 leading-none">38</span>
              </div>
            </div>
            {/* List */}
            <div className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm border border-slate-200/60">
              <span className="text-[9px] font-bold text-slate-600 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Present</span>
              <span className="text-[10px] font-extrabold text-slate-800">32</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm border border-slate-200/60">
              <span className="text-[9px] font-bold text-slate-600 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Absent</span>
              <span className="text-[10px] font-extrabold text-slate-800">5</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm border border-slate-200/60">
              <span className="text-[9px] font-bold text-slate-600 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>Outside</span>
              <span className="text-[10px] font-extrabold text-slate-800">1</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Work hours automatically turn into salary",
      app: "Automatic",
      mockup: (
        <div className="relative flex h-full w-full flex-col bg-slate-100 items-center justify-center p-2">
          <div className="absolute top-0 inset-x-0 h-10 bg-primary/5 rounded-b-xl border-b border-primary/10"></div>
          <div className="relative w-full rounded-xl bg-white p-2.5 shadow-md border border-border/60">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">RK</div>
              <div>
                <p className="text-[10px] font-bold text-slate-800 leading-none">Ramesh K.</p>
                <p className="text-[7px] text-slate-500 mt-1">Mason • Site A</p>
              </div>
            </div>
            <div className="mt-2 flex justify-between text-[9px] text-slate-600 font-medium">
              <span>26 days</span>
              <span>208 hrs</span>
            </div>
            <div className="mt-2 pt-1 border-t border-slate-50 flex justify-between items-end">
              <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-wider">Net Salary</span>
              <span className="text-[13px] font-extrabold text-primary">₹20,800</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how" className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
          How it works
        </h2>
        
        {/* Connecting lines */}
        <div className="absolute top-[280px] left-10 right-10 hidden h-[2px] bg-border lg:block" />
        <div className="absolute top-24 left-1/2 -ml-[1px] h-[85%] w-[2px] bg-border lg:hidden" />
        
        <div className="mt-16 grid gap-12 lg:gap-8 lg:grid-cols-4 relative z-10">
          {howSteps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center relative group">
              <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground mb-5 shadow-sm">
                {s.app}
              </span>
              <div className="relative h-[240px] w-[120px] rounded-[1.5rem] border-[6px] border-[#1e293b] bg-white shadow-2xl mb-6 overflow-hidden flex-shrink-0 group-hover:-translate-y-2 transition-transform duration-300 ring-2 ring-black/10">
                {/* iPhone style Dynamic Island */}
                <div className="absolute top-1 left-1/2 z-30 h-3 w-10 -translate-x-1/2 rounded-full bg-[#1e293b]" />
                {s.mockup}
                {/* Subtle glass glare */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/30 z-20" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground mb-3 shadow-md relative z-10">
                {i + 1}
              </div>
              <h3 className="text-[18px] font-bold leading-snug text-foreground max-w-[200px]">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FEATURES -------------------------------- */

const newFeatures = [
  {
    title: "Live Availability",
    text: "See every worker's exact location on a map in real-time with connect buttons.",
    mockup: (
      <div className="relative flex h-full w-full flex-col bg-[#e8f1f5] group">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "8px 8px" }}></div>
        {/* Avatars on map */}
        <div className="absolute top-4 left-4 h-4 w-4 rounded-full bg-white border border-primary overflow-hidden shadow">
          <div className="h-full w-full bg-primary/20"></div>
        </div>
        <div className="absolute top-8 right-8 h-4 w-4 rounded-full bg-white border border-orange-500 overflow-hidden shadow">
          <div className="h-full w-full bg-orange-500/20"></div>
        </div>
        <div className="absolute top-16 left-12 h-4 w-4 rounded-full bg-white border border-slate-400 overflow-hidden shadow">
          <div className="h-full w-full bg-slate-400/20"></div>
        </div>
        
        {/* Bottom card */}
        <div className="absolute bottom-1 inset-x-1 rounded-lg bg-white p-1.5 shadow-md flex flex-col gap-1 border border-border group-hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-center text-[7px] font-bold pb-1 border-b border-slate-100">
            <span className="flex items-center gap-1"><div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>0.8 km</span>
            <span className="flex items-center gap-1"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>1.5 km</span>
            <span className="flex items-center gap-1"><div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>2.2 km</span>
          </div>
          <button className="w-full bg-primary text-white text-[8px] font-bold py-1 rounded-md shadow-sm">Connect</button>
        </div>
      </div>
    ),
  },
  {
    title: "Work Radius Alert",
    text: "Get a 30-minute alert the moment someone leaves the authorized site boundary.",
    mockup: (
      <div className="relative flex h-full w-full flex-col bg-[#e8f1f5] items-center group">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "8px 8px" }}></div>
        {/* Radius circle */}
        <div className="mt-4 h-16 w-16 rounded-full border border-primary/30 bg-primary/5 relative">
          <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
        </div>
        {/* Pin outside */}
        <MapPin className="absolute top-4 right-3 h-5 w-5 text-red-500 group-hover:animate-bounce" />
        
        {/* Notifications */}
        <div className="absolute bottom-2 inset-x-1 rounded-lg bg-white p-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-red-100 flex flex-col items-center">
          <span className="absolute -top-2 rounded-full bg-red-500 px-1.5 py-0.5 text-[6px] font-bold text-white shadow-sm animate-pulse">30 min</span>
          <span className="mt-1 text-[7px] font-bold text-slate-800 text-center">Employee Outside Work Radius</span>
        </div>
      </div>
    ),
  },
  {
    title: "Auto Resume",
    text: "Automatically tracks work time and resumes after breaks. No personal life tracking.",
    mockup: (
      <div className="relative flex h-full w-full flex-col bg-slate-50 items-center justify-center p-2 group">
        <div className="w-full rounded-lg bg-white p-2 shadow-sm border border-border flex flex-col gap-3">
          <div className="flex items-center gap-1.5 rounded-md bg-green-50 px-2 py-1 border border-green-100">
            <CheckCircle2 className="h-3 w-3 text-green-600" />
            <span className="text-[7px] font-bold text-green-700">Back in Work Area</span>
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 pt-2">
            <span className="text-[8px] font-bold text-slate-700">Tracking</span>
            {/* Toggle Switch */}
            <div className="h-3 w-6 rounded-full bg-slate-200 relative transition-colors duration-500 group-hover:bg-green-500">
              <div className="absolute left-0.5 top-0.5 h-2 w-2 rounded-full bg-white shadow transition-transform duration-500 group-hover:translate-x-3"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Site Attendance",
    text: "Live counts of workers walking in, categorized by Present, Absent, or On Leave.",
    mockup: (
      <div className="relative flex h-full w-full flex-col bg-slate-50 group">
        <div className="bg-steel px-2 py-2 text-white flex justify-between items-center shadow-sm relative z-10">
          <p className="text-[10px] font-extrabold tracking-tight">Attendance</p>
          <div className="h-3 w-3 rounded-full bg-white/20 flex items-center justify-center">
            <div className="h-1 w-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Chart Header */}
        <div className="flex items-center gap-2 p-2 bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200">
          <div className="h-6 w-6 rounded-full border-[3px] border-green-500 border-l-slate-200 border-t-slate-200 shadow-sm -rotate-45 flex-shrink-0 bg-white"></div>
          <div className="flex flex-col">
            <span className="text-[6px] font-bold text-slate-500 uppercase">Workers Present</span>
            <span className="text-[12px] font-extrabold text-slate-800 leading-none">32</span>
          </div>
        </div>
        
        {/* List */}
        <div className="flex-1 p-1.5 flex flex-col gap-1.5 bg-slate-50 overflow-hidden">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-white p-1.5 border border-slate-100 shadow-sm group-hover:-translate-y-1 transition-transform" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/40"></div>
                </div>
                <div className="flex flex-col">
                  <div className="h-1.5 w-10 rounded bg-slate-300 mb-1"></div>
                  <div className="h-1 w-6 rounded bg-slate-200"></div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[6px] text-green-600 font-bold bg-green-50 px-1 rounded">IN 8:05</span>
                <span className="text-[6px] text-slate-400 mt-0.5">OUT --</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Field Sales Tracking",
    text: "Track animated visit routes, completed ticks, and live count-up stats for your sales force.",
    mockup: (
      <div className="relative flex h-full w-full flex-col bg-[#e8f1f5] group">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "8px 8px" }}></div>
        {/* Route line */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none" style={{strokeDasharray: 4, strokeDashoffset: 10}}>
           <path d="M20,40 C40,20 60,80 100,50" fill="none" stroke="#2D5BE3" strokeWidth="2" className="group-hover:animate-[dash_2s_linear_infinite]" />
        </svg>
        <MapPin className="absolute top-[30px] left-[10px] h-4 w-4 text-primary" />
        <MapPin className="absolute top-[65px] left-[55px] h-4 w-4 text-primary" />
        <MapPin className="absolute top-[40px] left-[90px] h-4 w-4 text-slate-400" />
        
        {/* Bottom card */}
        <div className="absolute bottom-1 inset-x-1 rounded-lg bg-white p-1.5 shadow border border-border">
          <div className="flex justify-between items-center text-[7px] font-bold text-slate-700 mb-1">
            <span>Visit 01-03 ✓</span>
            <span className="text-primary">72%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full w-0 group-hover:w-[72%] transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Instant Payroll Flow",
    text: "Attendance converts to work hours, generating salary and payout sheets instantly.",
    mockup: (
      <div className="relative flex h-full w-full flex-col bg-slate-50 items-center justify-center p-1.5 group">
        <div className="w-full rounded-lg bg-white p-2 shadow-sm border border-border flex flex-col gap-1.5">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1">
            <span className="text-[7px] font-bold text-slate-500">Daily</span>
            <span className="text-[8px] font-extrabold text-slate-800">₹800</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-100 pb-1">
            <span className="text-[7px] font-bold text-slate-500">Weekly</span>
            <span className="text-[8px] font-extrabold text-slate-800">₹5,600</span>
          </div>
          <div className="flex justify-between items-center bg-primary/5 p-1 rounded">
            <span className="text-[8px] font-bold text-primary">Monthly</span>
            <span className="text-[10px] font-extrabold text-primary group-hover:scale-110 transition-transform">₹24,000</span>
          </div>
          <button className="mt-1 w-full bg-primary text-white text-[8px] font-bold py-1.5 rounded-md shadow-sm active:scale-95 transition-transform">
            Pay Now
          </button>
        </div>
      </div>
    ),
  },
];

function Features() {
  return (
    <section id="features" className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Built for sites, not offices
        </h2>
        <p className="mt-3 max-w-2xl text-base md:text-lg text-muted-foreground">
          Dust, heat, patchy network, shared phones — INFIELD is designed for
          how construction actually works in India.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newFeatures.map((f, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Mockup Area */}
              <div className="flex h-56 items-center justify-center bg-muted p-6 perspective-1000">
                <div className="relative h-[180px] w-[100px] rounded-[1.25rem] border-[5px] border-[#1e293b] bg-white shadow-xl overflow-hidden ring-2 ring-black/10 group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-1 left-1/2 z-30 h-2 w-8 -translate-x-1/2 rounded-full bg-[#1e293b]" />
                  {f.mockup}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/30 z-20" />
                </div>
              </div>
              {/* Text Area */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CALCULATOR ------------------------------- */

function Calculator() {
  const [workers, setWorkers] = useState(50);
  const [dailyWage, setDailyWage] = useState(800);
  const [timeLost, setTimeLost] = useState(30);

  const { monthly, yearly } = useMemo(() => {
    // workers × (wage ÷ 480) × minutes × 26
    const m = Math.round(workers * (dailyWage / 480) * timeLost * 26);
    return { monthly: m, yearly: m * 12 };
  }, [workers, dailyWage, timeLost]);

  const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");

  return (
    <section id="calculator" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              How much is proxy attendance costing you?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Most contractors are shocked by this number. Drag the sliders to
              match your site.
            </p>
            <div className="mt-8 space-y-8">
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold">Workers on site</label>
                  <span className="rounded-lg bg-secondary px-3 py-1 font-display text-lg font-bold">
                    {workers} workers
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={10}
                  value={workers}
                  onChange={(e) => setWorkers(Number(e.target.value))}
                  className="mt-3 w-full accent-[oklch(0.66_0.19_48)]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold">Average daily wage</label>
                  <span className="rounded-lg bg-secondary px-3 py-1 font-display text-lg font-bold">
                    ₹{dailyWage}/day
                  </span>
                </div>
                <input
                  type="range"
                  min={400}
                  max={2000}
                  step={50}
                  value={dailyWage}
                  onChange={(e) => setDailyWage(Number(e.target.value))}
                  className="mt-3 w-full accent-[oklch(0.66_0.19_48)]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold">Time lost per worker (min)</label>
                  <span className="rounded-lg bg-secondary px-3 py-1 font-display text-lg font-bold">
                    {timeLost} min
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={120}
                  step={5}
                  value={timeLost}
                  onChange={(e) => setTimeLost(Number(e.target.value))}
                  className="mt-3 w-full accent-[oklch(0.66_0.19_48)]"
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-steel p-8 text-steel-foreground shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-steel-foreground/60">
              Estimated Loss
            </p>
            <p className="mt-4 font-display text-5xl font-extrabold text-primary">
              {fmt(monthly)}
              <span className="text-lg font-semibold text-steel-foreground/60"> /month</span>
            </p>
            <p className="mt-2 font-display text-2xl font-bold">
              {fmt(yearly)} <span className="text-base font-medium text-steel-foreground/60">every year</span>
            </p>
            <div className="my-6 h-px bg-white/10" />
            <p className="text-xs font-medium text-steel-foreground/50 mb-3">
              Estimate math: Workers × (Wage ÷ 480 min) × Time lost × 26 days
            </p>
            <p className="text-sm leading-relaxed text-steel-foreground/70">
              That's money walking out of your gate every single month. INFIELD
              typically pays for itself within the first salary cycle.
            </p>
            <a
              href="#demo"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Stop the leakage — Get Free Demo <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ BEFORE / AFTER ---------------------------- */

const beforeAfter = [
  {
    before: "Register books that anyone can sign for anyone",
    after: "Selfie + GPS proof for every single check-in",
  },
  {
    before: "20 phone calls a day to know who's on site",
    after: "One live dashboard, all sites, zero calls",
  },
  {
    before: "Salary day = argument day",
    after: "Salary sheet with photo proof — no disputes",
  },
  {
    before: "Finding out about shortages at month end",
    after: "Instant alerts the moment something's wrong",
  },
];

function BeforeAfter() {
  return (
    <section className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-center">
          Life before and after INFIELD
        </h2>
        <div className="mt-12 space-y-4">
          <div className="hidden md:grid md:grid-cols-2 gap-4 px-4 text-sm font-bold uppercase tracking-wide text-muted-foreground">
            <p>Before</p>
            <p className="text-primary">After</p>
          </div>
          {beforeAfter.map((r, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 md:items-center">
                <XCircle className="mt-0.5 md:mt-0 h-5 w-5 shrink-0 text-destructive" />
                <p className="text-muted-foreground">{r.before}</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-card p-4 shadow-sm md:items-center">
                <CheckCircle2 className="mt-0.5 md:mt-0 h-5 w-5 shrink-0 text-green-600" />
                <p className="font-medium text-foreground">{r.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ----------------------------------- */

const faqs = [
  {
    q: "Do my workers need a smartphone?",
    a: "No. One supervisor phone per site is enough — workers check in on it one by one. If workers have their own phones, they can use those too.",
  },
  {
    q: "Does it work with poor network on site?",
    a: "Yes. INFIELD works offline. Attendance is captured on the phone and syncs automatically when the network returns. No data is ever lost.",
  },
  {
    q: "Is it available in Hindi?",
    a: "[CONFIRM] Yes, INFIELD is fully translated into Hindi and supports multiple regional languages for workers.",
  },
  {
    q: "Will my workers accept being tracked?",
    a: "[CONFIRM] INFIELD tracks location strictly during work hours and on the site premises. We emphasize privacy: 'Tracks Work Time. Not Their Personal Life.'",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on your worker count and sites. Book a free demo and we'll give you an exact quote — most customers recover the cost in their first salary cycle.",
  },
  {
    q: "Does it drain battery or data?",
    a: "[CONFIRM] INFIELD is optimized to run efficiently in the background, consuming minimal battery and data, usually less than a few MBs a day.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
          Questions contractors ask us
        </h2>
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <span
                  className={`font-display text-2xl text-primary transition-transform ${openIdx === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {openIdx === i && (
                <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- DEMO FORM ------------------------------- */

function DemoForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [workers, setWorkers] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `Hi INFIELD! I'd like a free demo.\n\nName: ${name}\nCompany: ${company}\nPhone: ${phone}\nWorkers: ${workers || "Not sure yet"}`;
    window.open(waLink(msg), "_blank");
  }

  const inputCls =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="demo" className="relative overflow-hidden py-16 md:py-24">
      <img
        src={finalCtaImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-steel/85" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="text-steel-foreground">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Book a 30-minute demo and see INFIELD on your own site.
          </h2>
          <p className="mt-4 max-w-md text-lg text-steel-foreground/80">
            Fill this in and we'll WhatsApp you to schedule your free demo.
            We'll show INFIELD running on a real site, with your questions
            answered live.
          </p>
          <ul className="mt-6 space-y-3 text-steel-foreground/80">
            {[
              "Free 30-minute demo, no commitment",
              "Exact pricing for your worker count",
              "Setup help included — live within 24 hours",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={submit}
          className="rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
        >
          <h3 className="font-display text-xl font-bold">Get your free demo</h3>
          <div className="mt-5 space-y-4">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputCls}
            />
            <input
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
              className={inputCls}
            />
            <input
              required
              type="tel"
              pattern="[0-9+ -]{10,15}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp number"
              className={inputCls}
            />
            <input
              value={workers}
              onChange={(e) => setWorkers(e.target.value)}
              placeholder="How many workers? (optional)"
              className={inputCls}
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Send on WhatsApp
            </button>
            <p className="text-center text-xs text-muted-foreground">
              We'll reply on WhatsApp within a few hours, usually much faster.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

/* --------------------------------- FOOTER --------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="INFIELD Logo" className="h-10 w-auto object-contain" />
        </div>
        <p className="text-sm text-muted-foreground">
          Workforce management for construction, service, and field teams.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
          <a href="#demo" className="hover:text-foreground">Demo</a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} INFIELD. All rights reserved.
      </p>
    </footer>
  );
}

/* ------------------------------ STICKY MOBILE CTA ------------------------- */

function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <a
        href="#demo"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground"
      >
        Get Your Free Demo <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

/* ---------------------------------- PAGE ---------------------------------- */

function Index() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <NewHowItWorks />
        <Features />
        <Calculator />
        <BeforeAfter />
        <UpAndRunning />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
