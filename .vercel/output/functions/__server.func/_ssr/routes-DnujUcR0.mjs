import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as supabase } from "./client-DKPluoHU.mjs";
import { a as Lock, c as ArrowUp, i as MapPin, l as ArrowRight, n as ShieldCheck, o as Clock, r as Radio, s as Bell, t as Sparkles } from "../_libs/lucide-react.mjs";
import { t as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DnujUcR0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_abstract_default = "/assets/hero-abstract-CeCGu2Ld.jpg";
function BirdMark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6 38c10-2 16-8 22-16 3 5 8 7 14 7-2 6-7 11-14 12 4 3 9 4 14 4-6 6-15 9-24 7-7-1-11-7-12-14z",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "38",
			cy: "26",
			r: "1.6",
			fill: "var(--pink)"
		})]
	});
}
function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				io.unobserve(entry.target);
			}
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal ${visible ? "is-visible" : ""}`,
		style: { ["--reveal-delay"]: `${delay}ms` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className,
			children
		})
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 w-full border-b border-navy/10 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 text-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirdMark, { className: "h-9 w-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-bold tracking-tight",
						children: "SOSLY"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 text-sm font-medium text-navy/80 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#device",
							className: "hover:text-navy",
							children: "The Device"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "hover:text-navy",
							children: "How it works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#mission",
							className: "hover:text-navy",
							children: "Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#waitlist",
							className: "hover:text-navy",
							children: "Waitlist"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#waitlist",
					className: "inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition hover:opacity-90",
					children: ["Join waitlist ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative overflow-hidden bg-pink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-8 md:pt-24 lg:pb-32",
			style: { animation: "hero-fade-in 0.8s ease-out forwards" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 md:pr-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/60 px-3 py-1 text-xs font-medium text-navy",
						style: { animation: "hero-fade-up 0.6s ease-out 0.1s both" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-navy" }), "Launching soon · Join the waitlist"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-navy md:text-7xl lg:text-[88px]",
						style: { animation: "hero-fade-up 0.7s ease-out 0.2s both" },
						children: [
							"Safety that moves ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
							" with you."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg leading-relaxed text-navy/75 md:text-xl",
						style: { animation: "hero-fade-up 0.7s ease-out 0.35s both" },
						children: "Every woman deserves the freedom to go anywhere, at any time, with confidence. SOSLY pairs a discreet push-button device with a 24/7 human response team — so help is one press away."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap items-center gap-3",
						style: { animation: "hero-fade-up 0.7s ease-out 0.5s both" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#waitlist",
							className: "inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-base font-medium text-navy-foreground btn-subtle",
							children: ["Get early access ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white/50 px-6 py-3.5 text-base font-medium text-navy btn-subtle btn-subtle--ghost",
							children: "See how it works"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-12 grid max-w-md grid-cols-3 gap-6",
						style: { animation: "hero-fade-up 0.7s ease-out 0.65s both" },
						children: [
							{
								k: "24/7",
								v: "Live response"
							},
							{
								k: "<3s",
								v: "Alert to dispatch"
							},
							{
								k: "1 press",
								v: "All it takes"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { animation: `hero-fade-up 0.5s ease-out ${.75 + i * .1}s both` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-2xl font-bold text-navy",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-xs uppercase tracking-wider text-navy/60",
								children: s.v
							})]
						}, s.k))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative md:col-span-5",
				style: { animation: "hero-fade-up 0.8s ease-out 0.3s both" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl bg-navy shadow-2xl shadow-navy/20",
					style: { animation: "hero-float 6s ease-in-out infinite" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_abstract_default,
						alt: "Abstract art representing safety and empowerment",
						width: 1080,
						height: 1920,
						className: "h-[520px] w-full object-cover md:h-[640px]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-4 bottom-4 rounded-2xl bg-background/95 p-4 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-navy text-navy-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-navy",
									children: "You're protected"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-navy/60",
									children: "Live monitoring · GPS active"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ml-auto flex items-center gap-1.5 text-xs font-medium text-navy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse rounded-full bg-navy" }), " Live"]
								})
							]
						})
					})]
				})
			})]
		})
	});
}
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-navy/10 bg-background py-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-xs font-semibold tracking-[0.2em] text-navy/60",
			children: [
				"DISCREET",
				"ALWAYS ON",
				"GPS PRECISE",
				"HUMAN RESPONSE",
				"ENCRYPTED",
				"WOMEN-FIRST"
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-3",
				children: [i, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-navy/30 last:hidden" })]
			}, i))
		})
	});
}
function Device() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "device",
		className: "bg-background py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "relative order-2 md:order-1 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-[420px] w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-navy/20 bg-pink/30 text-center md:h-[520px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirdMark, { className: "h-16 w-16 text-navy/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-2xl font-bold text-navy/60",
							children: "Product reveal soon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-navy/50",
							children: "Something small, powerful, and always with you."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "order-1 md:order-2",
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.2em] text-navy/60",
						children: "The Device"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl",
						children: "Small enough to forget. Powerful enough to count on."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-relaxed text-navy/75",
						children: "Clip it to a bag, wear it on a keychain, slip it in a pocket. A single press silently signals our response team — no apps to open, no phone to unlock."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-5",
						children: [
							{
								i: Radio,
								t: "Long-range cellular",
								d: "Works without your phone, anywhere with coverage."
							},
							{
								i: MapPin,
								t: "Precise GPS",
								d: "Real-time location shared the moment you press."
							},
							{
								i: Lock,
								t: "Private by design",
								d: "End-to-end encrypted. Activated only by you."
							}
						].map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink text-navy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-navy",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-navy/70",
								children: d
							})] })]
						}, t))
					})
				]
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "bg-navy py-24 text-navy-foreground md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.2em] text-pink",
						children: "How it works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-bold tracking-tight md:text-5xl",
						children: "Three seconds between a press and a plan."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-navy-foreground/70",
					children: "Built for real emergencies. Designed so you never have to think about it until you need it."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-5 md:grid-cols-3",
				children: [
					{
						n: "01",
						i: Bell,
						t: "Press the button",
						d: "A single press silently triggers an alert — no need to speak or unlock anything."
					},
					{
						n: "02",
						i: MapPin,
						t: "We see where you are",
						d: "Your precise location and profile reach our 24/7 response team instantly."
					},
					{
						n: "03",
						i: ShieldCheck,
						t: "Help is coordinated",
						d: "We stay with you — coordinating contacts, local services, and live updates."
					}
				].map(({ n, i: Icon, t, d }, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: idx * 120,
					className: "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 subtle-pop hover:bg-white/[0.07]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold tracking-widest text-pink",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-pink" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-10 text-2xl font-semibold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-navy-foreground/70",
							children: d
						})
					]
				}, n))
			})]
		})
	});
}
function Mission() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "mission",
		className: "bg-background py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-navy/60",
					children: "Our mission"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl",
					children: "Freedom, not fear."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "space-y-6 text-lg leading-relaxed text-navy/80 md:col-span-7",
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We're building a future where safety empowers independence, not limits it. Where a late walk home, a solo trip, or a quiet morning run doesn't come with a calculation." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SOSLY combines purposeful hardware with a human service that actually shows up. No theatre, no panic — just calm, capable backup, on call around the clock." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-6 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-navy/10 bg-pink/40 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-navy" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-semibold text-navy",
									children: "24/7 coordination"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-navy/70",
									children: "Real humans, every hour."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-navy/10 bg-pink/40 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-navy" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-semibold text-navy",
									children: "Built with women"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-navy/70",
									children: "Designed around real lives."
								})
							]
						})]
					})
				]
			})]
		})
	});
}
function LaunchBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-pink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-col items-center justify-between gap-4 rounded-3xl border border-navy/15 bg-background px-6 py-5 text-center md:flex-row md:text-left subtle-pop",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex h-2.5 w-2.5 items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-2.5 w-2.5 animate-ping rounded-full bg-navy/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative h-2 w-2 rounded-full bg-navy" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.18em] text-navy",
							children: "Product launching soon"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-navy/70",
						children: "Be first in line — early members get founding pricing and priority device shipping."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#waitlist",
						className: "inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground btn-subtle",
						children: ["Reserve my spot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})
				]
			})
		})
	});
}
function Waitlist() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const emailSchema = stringType().trim().max(255, "Email is too long").email("Please enter a valid email address");
	async function handleSubmit(e) {
		e.preventDefault();
		if (loading || submitted) return;
		const parsed = emailSchema.safeParse(email);
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
			return;
		}
		setLoading(true);
		const { error } = await supabase.from("waitlist_signups").insert({ email: parsed.data.toLowerCase() });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "waitlist",
		className: "bg-navy py-24 text-navy-foreground md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-3xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirdMark, { className: "mx-auto h-10 w-10 text-pink" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 text-4xl font-bold tracking-tight md:text-6xl",
					children: "Join our mailing list."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-xl text-lg text-navy-foreground/75",
					children: "Be the first to know when SOSLY ships. Updates on the device, the service, and early-member access — straight to your inbox."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						maxLength: 255,
						disabled: loading || submitted,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "you@example.com",
						className: "h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-navy-foreground placeholder:text-navy-foreground/40 outline-none transition focus:border-pink focus:bg-white/10 disabled:opacity-60"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: loading || submitted,
						className: "inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-pink px-6 text-sm font-semibold text-navy btn-subtle disabled:cursor-not-allowed disabled:opacity-80",
						children: [submitted ? "You're on the list" : loading ? "Signing up…" : "Sign me up", !submitted && !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-navy-foreground/50",
					children: "No spam. Unsubscribe anytime."
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-background py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirdMark, { className: "h-8 w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-semibold",
						children: "SOSLY"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-navy/60",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" SOSLY. Safety, reimagined."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6 text-sm text-navy/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#mission",
							className: "hover:text-navy",
							children: "Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#device",
							className: "hover:text-navy",
							children: "Device"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#waitlist",
							className: "hover:text-navy",
							children: "Contact"
						})
					]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Device, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mission, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaunchBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waitlist, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
		]
	});
}
function BackToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 480);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		const onHashChange = () => {
			const id = window.location.hash.slice(1);
			if (!id) {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return;
			}
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		};
		window.addEventListener("hashchange", onHashChange);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("hashchange", onHashChange);
		};
	}, []);
	const handleClick = () => {
		if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: handleClick,
		"aria-label": "Back to top",
		className: `fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-navy-foreground shadow-lg ring-1 ring-navy/20 transition-all duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/60 focus-visible:ring-offset-2 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
	});
}
//#endregion
export { Index as component };
