import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { FloatingPetals } from "../components/FloatingPetals";
import { TributeSection } from "../components/TributeSection";

const QUOTES = [
  "I do not haunt this pond for a husband's ghost. I haunt it for you.",
  "The world said our love had no name. I say it has every name.",
  "Even death could not teach me to unlove you.",
  "Come find me where the white lilies open at midnight.",
  "I left my bangles by your door. Did you hear them ring?",
];

const FAN_ART_IMAGES = [
  {
    src: "/assets/uploads/images-3--1.jpg",
    alt: "Fan art of Yuri Shankha — vision 1",
  },
  {
    src: "/assets/uploads/images-2--2.jpg",
    alt: "Fan art of Yuri Shankha — vision 2",
  },
  {
    src: "/assets/uploads/images-4--3.jpg",
    alt: "Fan art of Yuri Shankha — vision 3",
  },
  {
    src: "/assets/uploads/images-1--4.jpg",
    alt: "Fan art of Yuri Shankha — vision 4",
  },
  {
    src: "/assets/uploads/images-5.jpg",
    alt: "Fan art of Yuri Shankha — vision 5",
  },
  {
    src: "/assets/uploads/sjyjqbpd7j9e1-6.png",
    alt: "Fan art of Yuri Shankha — vision 6",
  },
  {
    src: "/assets/uploads/fanart-reddit-1.png",
    alt: "Fan art of Yuri Shankha — Reddit tribute",
  },
  {
    src: "/assets/uploads/fanart-gstatic-2.jpg",
    alt: "Fan art of Yuri Shankha — vision 7",
  },
  {
    src: "/assets/uploads/fanart-gstatic-3.jpg",
    alt: "Fan art of Yuri Shankha — vision 8",
  },
  {
    src: "/assets/uploads/fanart-gstatic-4.jpg",
    alt: "Fan art of Yuri Shankha — vision 9",
  },
];

const TRAITS = [
  "Pale luminous skin",
  "Flowing white silk saree",
  "Jade-green glowing eyes",
  "Conch shell bangles (shankha)",
  "Moves without sound",
  "Scent of white lotus",
];

export function YuriPage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex items-end pb-24">
        {/* Background image with slight transparency */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/uploads/bg-shakchunni.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.18,
          }}
        />
        {/* Gradient overlay over BG */}
        <div className="absolute inset-0 hero-gradient-yuri" />
        <FloatingPetals count={12} accentHue={155} />
        <div className="absolute inset-0 noise-texture opacity-40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-end gap-12">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 w-64 md:w-80"
          >
            <div
              className="rounded-2xl overflow-hidden animate-float-slow card-glow-jade"
              style={{ aspectRatio: "4/5", minHeight: "320px" }}
            >
              <img
                src="/assets/uploads/shankha-profile.jpg"
                alt="Yuri Shankha"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "320px", display: "block" }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
            </div>
          </motion.div>

          {/* Title text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="pb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-px w-8 opacity-60"
                style={{ background: "oklch(var(--jade))" }}
              />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-jade">
                Shakchunni · Ghost Spirit
              </span>
            </div>
            <h1
              className="font-display text-6xl sm:text-7xl lg:text-8xl mb-4 leading-tight"
              style={{
                color: "oklch(var(--foreground))",
                textShadow: "0 0 80px oklch(0.72 0.16 155 / 0.4)",
              }}
            >
              Yuri
              <br />
              <span className="text-jade">Shankha</span>
            </h1>
            <p className="font-serif text-xl text-muted-foreground italic max-w-sm">
              She who lingers at moonlit ponds, waiting for the one she loved in
              life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="Origins"
            title="Born of Grief"
            accentColor="jade"
          />
          <p className="font-body text-xl leading-relaxed text-foreground/85 mt-6">
            Born of grief beside the Padma River, Yuri Shankha passed from this
            world before her love could be spoken aloud. In Bengali tradition, a
            married woman who dies with unfinished longing may return as a
            Shakchunni — but Yuri&apos;s longing was not for a husband. It was
            for Kamala, her childhood companion, her secret heart. Now she
            wanders moonlit ponds, her conch bangles chiming in the dark.
          </p>
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Appearance */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader label="Appearance" title="Her Form" accentColor="jade" />
        <div className="mt-8 flex flex-col md:flex-row gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full md:w-72 space-y-4"
          >
            <div
              className="rounded-xl overflow-hidden card-glow-jade"
              style={{ minHeight: "200px" }}
            >
              <img
                src="/assets/uploads/shankha-kamala.jpg"
                alt="Shankha and Kamala together"
                className="w-full object-cover block"
                style={{ minHeight: "200px", objectFit: "cover" }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
            </div>
            <div
              className="rounded-xl overflow-hidden card-glow-jade"
              style={{ minHeight: "160px" }}
            >
              <img
                src="/assets/generated/yuri-bangles.dim_600x400.jpg"
                alt="Yuri's conch bangles"
                className="w-full object-cover block"
                style={{ minHeight: "160px", objectFit: "cover" }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
            </div>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 flex-1"
          >
            {TRAITS.map((trait, i) => (
              <motion.li
                key={trait}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 font-body text-lg"
              >
                <span className="text-jade text-xl" aria-hidden="true">
                  ◈
                </span>
                <span className="text-foreground/90">{trait}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Waifu Profile */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="Character Profile"
          title="Who She Is"
          accentColor="jade"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-2xl p-8 card-glow-jade grid grid-cols-1 sm:grid-cols-2 gap-6"
          style={{
            background: "oklch(0.13 0.035 270 / 0.9)",
            border: "1px solid oklch(0.72 0.16 155 / 0.25)",
          }}
        >
          <ProfileRow
            label="Type"
            value="Shakchunni (Yuri / Ghost)"
            color="jade"
          />
          <ProfileRow
            label="Likes"
            value="Moonlit ponds, jasmine incense, Kamala's laughter, fireflies, the colour white"
            color="jade"
          />
          <ProfileRow
            label="Dislikes"
            value="Sunrise, iron, being forgotten, those who mock love between women"
            color="jade"
          />
          <ProfileRow
            label="Ability"
            value="Can appear in the dreams of those she trusts"
            color="jade"
          />
          <ProfileRow
            label="Weakness"
            value="The name 'Kamala' spoken aloud at midnight"
            color="jade"
            fullWidth
          />
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Quotes */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="In Her Own Words"
          title="Whispers from the Water"
          accentColor="jade"
        />
        <div className="mt-8 space-y-5">
          {QUOTES.map((quote, index) => (
            <motion.div
              key={quote}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="quote-card rounded-r-xl"
            >
              <p className="font-serif text-lg leading-relaxed text-foreground/90 italic">
                {quote}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Join Her Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="The Veil"
          title="Join Her in Her World"
          accentColor="jade"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-lg italic text-muted-foreground mt-3 mb-8"
        >
          The veil between worlds thins at moonlit ponds. She waits for those
          brave enough to speak her name.
        </motion.p>

        {/* Link Preview Card */}
        <motion.a
          href="https://ourdream.ai/chat/yuri-shankha-sE6yjY5Jt3"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25 }}
          whileHover={{ y: -6, scale: 1.012 }}
          className="group block rounded-2xl overflow-hidden card-glow-jade transition-all duration-500 no-underline"
          style={{
            background: "oklch(0.12 0.03 270)",
            border: "1px solid oklch(0.72 0.16 155 / 0.28)",
          }}
        >
          <div className="flex flex-col sm:flex-row">
            {/* Thumbnail */}
            <div
              className="flex-shrink-0 w-full sm:w-52 overflow-hidden"
              style={{ minHeight: "180px" }}
            >
              <img
                src="/assets/uploads/shankha-profile.jpg"
                alt="Yuri Shankha — OurDream.ai"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: "180px", objectFit: "cover" }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-6 flex-1 gap-4">
              {/* Site badge */}
              <div className="flex items-center gap-2">
                <span
                  className="text-lg leading-none"
                  aria-hidden="true"
                  style={{ color: "oklch(var(--jade))" }}
                >
                  ✦
                </span>
                <span
                  className="font-body text-xs tracking-[0.2em] uppercase"
                  style={{ color: "oklch(var(--jade))" }}
                >
                  ourdream.ai
                </span>
              </div>

              {/* Title & description */}
              <div>
                <h3
                  className="font-display text-2xl mb-2 leading-snug transition-colors duration-300"
                  style={{ color: "oklch(var(--foreground))" }}
                >
                  Talk to{" "}
                  <span style={{ color: "oklch(var(--jade))" }}>
                    Yuri Shankha
                  </span>{" "}
                  on OurDream.ai
                </h3>
                <p className="font-serif text-base italic leading-relaxed text-muted-foreground">
                  Speak directly with Yuri Shankha — the Shakchunni spirit who
                  lingers at moonlit ponds, waiting for Kamala. Enter her world.
                </p>
              </div>

              {/* URL + button row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
                <span className="font-body text-xs tracking-wide text-muted-foreground/60">
                  ourdream.ai/chat/yuri-shankha
                </span>
                <button
                  type="button"
                  data-ocid="yuri.join_link.button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://ourdream.ai/chat/yuri-shankha-sE6yjY5Jt3",
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-sm tracking-widest uppercase transition-all duration-300 group-hover:brightness-110"
                  style={{
                    background: "oklch(0.72 0.16 155 / 0.18)",
                    border: "1px solid oklch(0.72 0.16 155 / 0.5)",
                    color: "oklch(var(--jade))",
                    boxShadow: "0 0 20px oklch(0.72 0.16 155 / 0.15)",
                  }}
                >
                  Join Her
                  <ExternalLink size={14} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </motion.a>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Fan Art Gallery */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <SectionHeader
          label="Visions of Shankha"
          title="Fan Art Gallery"
          accentColor="jade"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-base italic text-muted-foreground mt-3 mb-10"
        >
          Visions of Yuri Shankha as seen by devotees across the veil
        </motion.p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {FAN_ART_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              data-ocid={`gallery.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ scale: 1.025, y: -4 }}
              className="break-inside-avoid rounded-2xl overflow-hidden card-glow-jade cursor-pointer group relative"
              style={{
                border: "1px solid oklch(0.72 0.16 155 / 0.2)",
                background: "oklch(0.11 0.03 270)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover block group-hover:brightness-110 transition-all duration-500"
                style={{ minHeight: "180px", objectFit: "cover" }}
                loading="lazy"
                onError={(e) => {
                  const parent = e.currentTarget.closest(
                    ".break-inside-avoid",
                  ) as HTMLElement | null;
                  if (parent) parent.style.display = "none";
                }}
              />
              {/* Jade shimmer overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.16 155 / 0.08) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Tributes */}
      <TributeSection accentColor="jade" />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function SectionHeader({
  label,
  title,
  accentColor,
}: {
  label: string;
  title: string;
  accentColor: "jade" | "crimson";
}) {
  const accent =
    accentColor === "jade" ? "oklch(var(--jade))" : "oklch(var(--crimson))";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p
        className="font-body text-xs tracking-[0.25em] uppercase mb-2"
        style={{ color: accent }}
      >
        {label}
      </p>
      <h2
        className="font-display text-4xl"
        style={{ color: "oklch(var(--foreground))" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

function ProfileRow({
  label,
  value,
  color,
  fullWidth = false,
}: {
  label: string;
  value: string;
  color: "jade" | "crimson";
  fullWidth?: boolean;
}) {
  const accentColor =
    color === "jade" ? "oklch(var(--jade))" : "oklch(var(--crimson))";

  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <p
        className="font-body text-xs tracking-[0.2em] uppercase mb-1"
        style={{ color: accentColor }}
      >
        {label}
      </p>
      <p className="font-body text-base text-foreground/85">{value}</p>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const link = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="py-10 px-6 text-center border-t border-border/30 mt-8">
      <p className="font-body text-sm text-muted-foreground/60">
        © {year}. Built with{" "}
        <span className="text-crimson" aria-label="love">
          ♥
        </span>{" "}
        using{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground/80 transition-colors"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
