import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUp, Bell, MapPin, ShieldCheck, Radio, Clock, Lock, Sparkles } from "lucide-react";
import heroAbstract from "@/assets/hero-abstract.jpg";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOSLY — Safety that moves with you" },
      {
        name: "description",
        content:
          "SOSLY is a personal safety system for women: a discreet push-button device paired with a 24/7 human response service. Launching soon.",
      },
      { property: "og:title", content: "SOSLY — Safety that moves with you" },
      {
        property: "og:description",
        content:
          "A discreet safety device and a 24/7 response service. Freedom to go anywhere, anytime.",
      },
    ],
  }),
  component: Index,
});

function BirdMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M6 38c10-2 16-8 22-16 3 5 8 7 14 7-2 6-7 11-14 12 4 3 9 4 14 4-6 6-15 9-24 7-7-1-11-7-12-14z"
        fill="currentColor"
      />
      <circle cx="38" cy="26" r="1.6" fill="var(--pink)" />
    </svg>
  );
}

function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-navy">
          <BirdMark className="h-9 w-9" />
          <span className="text-xl font-bold tracking-tight">SOSLY</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy/80 md:flex">
          <a href="#device" className="hover:text-navy">The Device</a>
          <a href="#how" className="hover:text-navy">How it works</a>
          <a href="#mission" className="hover:text-navy">Mission</a>
          <a href="#waitlist" className="hover:text-navy">Waitlist</a>
        </nav>
        <a
          href="#waitlist"
          className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition hover:opacity-90"
        >
          Join waitlist <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pink">
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-8 md:pt-24 lg:pb-32"
        style={{ animation: "hero-fade-in 0.8s ease-out forwards" }}
      >
        <div className="md:col-span-7 md:pr-8">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/60 px-3 py-1 text-xs font-medium text-navy"
            style={{ animation: "hero-fade-up 0.6s ease-out 0.1s both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-navy" />
            Launching soon · Join the waitlist
          </div>
          <h1
            className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-navy md:text-7xl lg:text-[88px]"
            style={{ animation: "hero-fade-up 0.7s ease-out 0.2s both" }}
          >
            Safety that moves <br className="hidden md:block" /> with you.
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy/75 md:text-xl"
            style={{ animation: "hero-fade-up 0.7s ease-out 0.35s both" }}
          >
            Every woman deserves the freedom to go anywhere, at any time, with
            confidence. SOSLY pairs a discreet push-button device with a 24/7
            human response team — so help is one press away.
          </p>
          <div
            className="mt-9 flex flex-wrap items-center gap-3"
            style={{ animation: "hero-fade-up 0.7s ease-out 0.5s both" }}
          >
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-base font-medium text-navy-foreground transition hover:opacity-90"
            >
              Get early access <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white/50 px-6 py-3.5 text-base font-medium text-navy transition hover:bg-white"
            >
              See how it works
            </a>
          </div>
          <dl
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
            style={{ animation: "hero-fade-up 0.7s ease-out 0.65s both" }}
          >
            {[
              { k: "24/7", v: "Live response" },
              { k: "<3s", v: "Alert to dispatch" },
              { k: "1 press", v: "All it takes" },
            ].map((s, i) => (
              <div key={s.k} style={{ animation: `hero-fade-up 0.5s ease-out ${0.75 + i * 0.1}s both` }}>
                <dt className="text-2xl font-bold text-navy">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-navy/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative md:col-span-5" style={{ animation: "hero-fade-up 0.8s ease-out 0.3s both" }}>
          <div
            className="relative overflow-hidden rounded-3xl bg-navy shadow-2xl shadow-navy/20"
            style={{ animation: "hero-float 6s ease-in-out infinite" }}
          >
            <img
              src={heroAbstract}
              alt="Abstract art representing safety and empowerment"
              width={1080}
              height={1920}
              className="h-[520px] w-full object-cover md:h-[640px]"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/95 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-navy-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">You're protected</p>
                  <p className="text-xs text-navy/60">Live monitoring · GPS active</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-xs font-medium text-navy">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-navy" /> Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["DISCREET", "ALWAYS ON", "GPS PRECISE", "HUMAN RESPONSE", "ENCRYPTED", "WOMEN-FIRST"];
  return (
    <div className="border-y border-navy/10 bg-background py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-xs font-semibold tracking-[0.2em] text-navy/60">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-3">
            {i}
            <span className="h-1 w-1 rounded-full bg-navy/30 last:hidden" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Device() {
  return (
    <section id="device" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <Reveal className="relative order-2 md:order-1 flex items-center justify-center">
          <div className="flex h-[420px] w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-navy/20 bg-pink/30 text-center md:h-[520px]">
            <BirdMark className="h-16 w-16 text-navy/40" />
            <p className="mt-4 text-2xl font-bold text-navy/60">Product reveal soon</p>
            <p className="mt-2 text-sm text-navy/50">Something small, powerful, and always with you.</p>
          </div>
        </Reveal>
        <Reveal className="order-1 md:order-2" delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/60">The Device</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Small enough to forget. Powerful enough to count on.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/75">
            Clip it to a bag, wear it on a keychain, slip it in a pocket. A
            single press silently signals our response team — no apps to open,
            no phone to unlock.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              { i: Radio, t: "Long-range cellular", d: "Works without your phone, anywhere with coverage." },
              { i: MapPin, t: "Precise GPS", d: "Real-time location shared the moment you press." },
              { i: Lock, t: "Private by design", d: "End-to-end encrypted. Activated only by you." },
            ].map(({ i: Icon, t, d }) => (
              <li key={t} className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy">{t}</p>
                  <p className="mt-0.5 text-navy/70">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", i: Bell, t: "Press the button", d: "A single press silently triggers an alert — no need to speak or unlock anything." },
    { n: "02", i: MapPin, t: "We see where you are", d: "Your precise location and profile reach our 24/7 response team instantly." },
    { n: "03", i: ShieldCheck, t: "Help is coordinated", d: "We stay with you — coordinating contacts, local services, and live updates." },
  ];
  return (
    <section id="how" className="bg-navy py-24 text-navy-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink">How it works</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Three seconds between a press and a plan.
            </h2>
          </div>
          <p className="max-w-sm text-navy-foreground/70">
            Built for real emergencies. Designed so you never have to think
            about it until you need it.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map(({ n, i: Icon, t, d }, idx) => (
            <Reveal key={n} delay={idx * 120} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:bg-white/[0.07]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-pink">{n}</span>
                <Icon className="h-6 w-6 text-pink" />
              </div>
              <h3 className="mt-10 text-2xl font-semibold">{t}</h3>
              <p className="mt-3 text-navy-foreground/70">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/60">Our mission</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Freedom, not fear.
          </h2>
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-relaxed text-navy/80 md:col-span-7" delay={120}>
          <p>
            We're building a future where safety empowers independence, not
            limits it. Where a late walk home, a solo trip, or a quiet morning
            run doesn't come with a calculation.
          </p>
          <p>
            SOSLY combines purposeful hardware with a human service that
            actually shows up. No theatre, no panic — just calm, capable
            backup, on call around the clock.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="rounded-2xl border border-navy/10 bg-pink/40 p-5">
              <Clock className="h-5 w-5 text-navy" />
              <p className="mt-3 font-semibold text-navy">24/7 coordination</p>
              <p className="mt-1 text-sm text-navy/70">Real humans, every hour.</p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-pink/40 p-5">
              <Sparkles className="h-5 w-5 text-navy" />
              <p className="mt-3 font-semibold text-navy">Built with women</p>
              <p className="mt-1 text-sm text-navy/70">Designed around real lives.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LaunchBanner() {
  return (
    <section className="bg-pink">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Reveal className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-navy/15 bg-background px-6 py-5 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-navy/40" />
              <span className="relative h-2 w-2 rounded-full bg-navy" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Product launching soon
            </p>
          </div>
          <p className="text-sm text-navy/70">
            Be first in line — early members get founding pricing and priority device shipping.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground transition hover:opacity-90"
          >
            Reserve my spot <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailSchema = z
    .string()
    .trim()
    .max(255, "Email is too long")
    .email("Please enter a valid email address");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading || submitted) return;

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email: parsed.data.toLowerCase() });
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast.success("You're already on the list — we'll be in touch.");
        setSubmitted(true);
        return;
      }
      toast.error("Something went wrong. Please try again.");
      return;
    }

    toast.success("You're on the list. Welcome to SOSLY.");
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="bg-navy py-24 text-navy-foreground md:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <BirdMark className="mx-auto h-10 w-10 text-pink" />
        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          Join our mailing list.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy-foreground/75">
          Be the first to know when SOSLY ships. Updates on the device, the
          service, and early-member access — straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            maxLength={255}
            disabled={loading || submitted}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-navy-foreground placeholder:text-navy-foreground/40 outline-none transition focus:border-pink focus:bg-white/10 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading || submitted}
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-pink px-6 text-sm font-semibold text-navy transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-80"
          >
            {submitted ? "You're on the list" : loading ? "Signing up…" : "Sign me up"}
            {!submitted && !loading && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
        <p className="mt-4 text-xs text-navy-foreground/50">
          No spam. Unsubscribe anytime.
        </p>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-navy">
          <BirdMark className="h-8 w-8" />
          <span className="text-lg font-semibold">SOSLY</span>
        </div>
        <p className="text-sm text-navy/60">© {new Date().getFullYear()} SOSLY. Safety, reimagined.</p>
        <div className="flex gap-6 text-sm text-navy/70">
          <a href="#mission" className="hover:text-navy">Mission</a>
          <a href="#device" className="hover:text-navy">Device</a>
          <a href="#waitlist" className="hover:text-navy">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <Device />
      <HowItWorks />
      <Mission />
      <LaunchBanner />
      <Waitlist />
      <Footer />
      <BackToTop />
    </main>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Ensure browser back/forward between hash sections scrolls smoothly.
    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (!id) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const handleClick = () => {
    // Push a hash-less state so back/forward returns to the previous section.
    if (window.location.hash) {
      history.pushState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-navy-foreground shadow-lg ring-1 ring-navy/20 transition-all duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/60 focus-visible:ring-offset-2 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
