import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ContactModal } from "@/components/ContactModal";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Handshake,
  Bot,
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 overflow-x-hidden">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-12 lg:mt-20"
        >
          <motion.div variants={fadeInUp} className="max-w-5xl mb-12">
            <h1 className="text-[4rem] sm:text-[5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight font-display font-bold text-primary text-balance">
              Dubai real estate, done right.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left — stat + CTA */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col gap-10">
              <div>
                <p className="text-muted-foreground font-medium">
                  Complete brokerage platform. RERA-compliant, AI-powered, built to scale.
                </p>
              </div>
              <div>
                <p className="text-xl font-medium text-primary leading-relaxed mb-6">
                  A transparent, licensed ecosystem for buyers, sellers, agents, and developers — all under one roof.
                </p>
                <button
                  onClick={() => {
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-secondary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Explore the Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Right — hero image + floating card */}
            <motion.div variants={fadeInUp} className="lg:col-span-9 relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 relative h-[400px] lg:h-[600px] group">
                <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
                  alt="Dubai skyline — Kizz Properties"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-8 lg:bottom-12 -right-2 lg:-right-12 bg-card p-6 lg:p-8 rounded-[2rem] shadow-2xl shadow-black/10 max-w-[320px] border border-border/50"
              >
                <p className="text-3xl font-display font-bold text-primary mb-2">100%</p>
                <p className="text-sm font-semibold text-primary mb-3">RERA & DLD Compliant</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Every listing verified. Every agent checked. Every deal tracked — under your brokerage license.
                </p>
                <ContactModal>
                  <button className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5 hover:text-primary/70 hover:border-primary/70 transition-colors inline-flex items-center gap-1">
                    Get Early Access <ArrowRight className="w-4 h-4" />
                  </button>
                </ContactModal>
              </motion.div>
            </motion.div>

          </div>
        </motion.section>

        {/* ── PLATFORM MODULES ─────────────────────────────────────────────── */}
        <section id="services" className="mt-40 lg:mt-52">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight">
              Everything in one platform
            </h2>
            <p className="text-muted-foreground font-medium max-w-sm">
              Four powerful modules — one unified brokerage ecosystem built for Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* 01 — Admin Middleware (navy featured) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 flex flex-col justify-between aspect-square group hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-primary/20"
            >
              <div className="flex justify-between items-start">
                <span className="text-primary-foreground/50 font-display font-medium text-lg">01</span>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">Admin Middleware</h3>
                <p className="text-primary-foreground/80 leading-relaxed font-medium">
                  Every listing approved by admin before going live. Auto-email + unique live link sent to the owner the moment it's approved.
                </p>
              </div>
            </motion.div>

            {/* 02 — Referral Engine */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card text-card-foreground rounded-[2.5rem] p-10 flex flex-col justify-between aspect-square group hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-black/5 border border-border/50"
            >
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-display font-medium text-lg">02</span>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">Referral Engine</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Refer a buyer (60%), a seller (30%), or both (100%). Automatic wallet, transparent commission tracking after every closed deal.
                </p>
              </div>
            </motion.div>

            {/* 03 — AI Assistant */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card text-card-foreground rounded-[2.5rem] p-10 flex flex-col justify-between aspect-square group hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-black/5 border border-border/50"
            >
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-display font-medium text-lg">03</span>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">AI Assistant</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Ask anything about Dubai real estate — ROI, area comparison, rental yields, legal processes. Powered by live DLD transaction data.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <section className="mt-32 lg:mt-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight mb-4">
              Built for every user
            </h2>
            <p className="text-muted-foreground font-medium">
              Four roles. One platform. Full control under your brokerage license.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ahmed R.",
                role: "Senior Property Agent, Dubai",
                text: "My pipeline, commissions, and leads all in one place. The leaderboard keeps me sharp — I know exactly where I stand every single day."
              },
              {
                name: "Skyline Group",
                role: "Off-Plan Developer, Dubai",
                text: "We manage three off-plan projects through Kizz. EOI tracking, unit status, payment plans — all visible in real time. Leads go straight to the assigned agent."
              },
              {
                name: "Priya M.",
                role: "Property Investor",
                text: "After my deal closed I could see the exact breakdown — what I owe, when it's due, what I'll receive. No surprises. Completely transparent."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-card p-8 rounded-[2rem] shadow-lg shadow-black/5 border border-border/50"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} fill="currentColor" className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-primary font-medium leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold font-display">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary font-display">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FOOTER / CTA ──────────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-32 lg:mt-40 mb-12"
        >
          <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[150%] bg-white/5 rounded-[100%] blur-3xl" />
            <div className="absolute -bottom-[50%] -right-[10%] w-[80%] h-[150%] bg-white/5 rounded-[100%] blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-5xl lg:text-7xl font-display font-bold text-primary-foreground tracking-tight mb-6">
                Launch is coming.
              </h2>
              <p className="text-xl text-primary-foreground/80 font-medium mb-12 max-w-2xl leading-relaxed">
                Kizz Properties is a fully licensed, AI-powered real estate brokerage platform for Dubai — built for agents, developers, buyers, and sellers. Get in touch to secure early access.
              </p>

              <ContactModal>
                <button className="px-10 py-5 rounded-full bg-white text-primary font-bold text-lg shadow-xl shadow-black/10 hover:scale-105 transition-transform duration-300 flex items-center gap-3">
                  Request Early Access
                  <ArrowRight className="w-5 h-5" />
                </button>
              </ContactModal>

              <p className="text-primary-foreground/40 text-sm font-medium mt-6">
                Launching Q2 2026 · Dubai, UAE
              </p>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
