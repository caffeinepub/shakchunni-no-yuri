import { motion } from "motion/react";
import { FloatingPetals } from "../components/FloatingPetals";

type Page = "home" | "yuri" | "kamala";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="min-h-screen relative overflow-hidden hero-gradient-home">
      <FloatingPetals count={16} accentHue={155} />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 noise-texture opacity-50 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-32 text-center">
        {/* Decorative top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 justify-center mb-2">
            <div
              className="h-px w-12 opacity-60"
              style={{ background: "oklch(var(--jade))" }}
            />
            <span className="font-body text-sm tracking-[0.3em] uppercase text-jade opacity-80">
              A Lore Shrine
            </span>
            <div
              className="h-px w-12 opacity-60"
              style={{ background: "oklch(var(--jade))" }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          style={{
            color: "oklch(var(--foreground))",
            textShadow: "0 0 60px oklch(0.72 0.16 155 / 0.3)",
          }}
        >
          Shakchunni
          <br />
          <span className="text-jade">no Yuri</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-xl sm:text-2xl text-muted-foreground max-w-md mb-16 leading-relaxed italic"
        >
          A tale of two souls, bound across the veil
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="section-divider w-48 mb-16"
        />

        {/* Character Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-8 items-stretch justify-center w-full max-w-3xl"
        >
          <CharacterCard
            ocid="home.yuri.card"
            name="Yuri Shankha"
            label="The Ghost"
            subtitle="Shakchunni of the Moonlit Pond"
            image="/assets/generated/yuri-shankha-portrait.dim_800x1000.jpg"
            accentColor="jade"
            onClick={() => onNavigate("yuri")}
          />
          <CharacterCard
            ocid="home.kamala.card"
            name="Kamala"
            label="The Beloved"
            subtitle="She Who Was Loved Beyond the Veil"
            image="/assets/generated/kamala-portrait.dim_800x1000.jpg"
            accentColor="crimson"
            onClick={() => onNavigate("kamala")}
          />
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 font-body text-sm tracking-wider text-muted-foreground/50 italic"
        >
          ✦ Born from Bengali ghost-lore, yuri, and waifu tradition ✦
        </motion.div>
      </div>
    </main>
  );
}

interface CharacterCardProps {
  ocid: string;
  name: string;
  label: string;
  subtitle: string;
  image: string;
  accentColor: "jade" | "crimson";
  onClick: () => void;
}

function CharacterCard({
  ocid,
  name,
  label,
  subtitle,
  image,
  accentColor,
  onClick,
}: CharacterCardProps) {
  const accent =
    accentColor === "jade" ? "oklch(var(--jade))" : "oklch(var(--crimson))";
  const glowClass =
    accentColor === "jade" ? "card-glow-jade" : "card-glow-crimson";

  return (
    <motion.button
      data-ocid={ocid}
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative flex-1 rounded-2xl overflow-hidden text-left cursor-pointer ${glowClass} transition-all duration-300`}
      style={{
        background: "oklch(0.13 0.035 270)",
        minHeight: "420px",
      }}
    >
      {/* Portrait */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, oklch(0.13 0.035 270) 100%)",
          }}
        />
        {/* Label badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs tracking-widest uppercase font-body"
          style={{
            background:
              accentColor === "jade"
                ? "oklch(0.72 0.16 155 / 0.2)"
                : "oklch(0.60 0.22 25 / 0.2)",
            border: `1px solid ${accent}`,
            color: accent,
            backdropFilter: "blur(8px)",
          }}
        >
          {label}
        </div>
      </div>

      {/* Info */}
      <div className="px-6 pb-6 pt-2">
        <h2
          className="font-display text-2xl mb-1 transition-colors duration-200"
          style={{ color: accent }}
        >
          {name}
        </h2>
        <p className="font-body text-sm text-muted-foreground italic">
          {subtitle}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span
            className="font-body text-sm tracking-wider"
            style={{ color: accent, opacity: 0.7 }}
          >
            Read her story
          </span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            style={{ color: accent }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
        }}
      />
    </motion.button>
  );
}
