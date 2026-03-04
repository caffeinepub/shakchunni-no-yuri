import { motion } from "motion/react";
import { FloatingPetals } from "../components/FloatingPetals";
import { TributeSection } from "../components/TributeSection";

const QUOTES = [
  "You always looked at me like I was the whole river.",
  "I kept your letters. All of them. Even the ones you never sent.",
  "They gave me a husband. They could not give me a heart.",
  "In another life — a kinder one — I would have said yes.",
  "Leave jasmine by the water. She will know it is from me.",
];

const DIVINE_TRAITS = [
  "Radiant golden complexion",
  "Seat: the lotus",
  "Bathed by four elephants",
  "Represents prosperity & liberation",
  "Tantric form of Lakshmi",
];

const TRAITS = [
  "Warm golden-brown skin",
  "Long dark wavy hair with jasmine flowers",
  "Deep crimson silk saree",
  "Gentle expressive dark eyes",
  "Always smells of jasmine and sandalwood",
  "Carries an unfinished letter",
];

export function KamalaPage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero */}
      <section className="relative min-h-screen hero-gradient-kamala overflow-hidden flex items-end pb-24">
        <FloatingPetals count={12} accentHue={25} />
        <div className="absolute inset-0 noise-texture opacity-40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-end gap-12">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 w-64 md:w-80"
          >
            <div
              className="rounded-2xl overflow-hidden animate-float-slow card-glow-crimson"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src="/assets/generated/kamala-portrait.dim_800x1000.jpg"
                alt="Kamala"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Title text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="pb-8 flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-px w-8 opacity-60"
                style={{ background: "oklch(var(--crimson))" }}
              />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-crimson">
                The Beloved · Mortal Heart
              </span>
            </div>
            <h1
              className="font-display text-6xl sm:text-7xl lg:text-8xl mb-4 leading-tight"
              style={{
                color: "oklch(var(--foreground))",
                textShadow: "0 0 80px oklch(0.60 0.22 25 / 0.4)",
              }}
            >
              <span className="text-crimson">Kamala</span>
            </h1>
            <p className="font-serif text-xl text-muted-foreground italic max-w-sm">
              She who was loved beyond the veil — and never knew how to say it
              back in time
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
            title="Warmth and Laughter"
            accentColor="crimson"
          />
          <p className="font-body text-xl leading-relaxed text-foreground/85 mt-6">
            Kamala grew up beside the same river as Yuri, their lives threaded
            together since childhood. Where Yuri was quiet and watching, Kamala
            was warmth and laughter — jasmine in her hair, stories on her lips.
            She never knew, or perhaps always knew, the depth of Yuri&apos;s
            devotion. She was promised to another, as the world demanded. She
            died young, of a grief she could never name. Some say she still
            leaves jasmine flowers by the pond at dusk.
          </p>
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Appearance */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="Appearance"
          title="Her Form"
          accentColor="crimson"
        />
        <div className="mt-8 flex flex-col md:flex-row-reverse gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full md:w-72 rounded-xl overflow-hidden card-glow-crimson"
          >
            <img
              src="/assets/generated/kamala-flowers.dim_600x400.jpg"
              alt="Kamala's jasmine flowers"
              className="w-full h-auto object-cover"
            />
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 font-body text-lg"
              >
                <span className="text-crimson text-xl" aria-hidden="true">
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
          accentColor="crimson"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-2xl p-8 card-glow-crimson grid grid-cols-1 sm:grid-cols-2 gap-6"
          style={{
            background: "oklch(0.13 0.035 270 / 0.9)",
            border: "1px solid oklch(0.60 0.22 25 / 0.25)",
          }}
        >
          <ProfileRow
            label="Type"
            value="Mortal Beloved (Yuri genre / tragic romance)"
            color="crimson"
          />
          <ProfileRow
            label="Likes"
            value="Storytelling, jasmine garlands, monsoon rain, her childhood friend, firefly evenings"
            color="crimson"
          />
          <ProfileRow
            label="Dislikes"
            value="Arranged silences, the word 'impossible', losing people she loves"
            color="crimson"
          />
          <ProfileRow
            label="Ability"
            value="Her laughter is said to make spirits weep with longing"
            color="crimson"
          />
          <ProfileRow
            label="Last Known Words"
            value='"I should have said it sooner."'
            color="crimson"
            fullWidth
          />
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Quotes */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="Her Voice"
          title="Words She Carried"
          accentColor="crimson"
        />
        <div className="mt-8 space-y-5">
          {QUOTES.map((quote, index) => (
            <motion.div
              key={quote}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="quote-card quote-card-crimson rounded-r-xl"
            >
              <p className="font-serif text-lg leading-relaxed text-foreground/90 italic">
                {quote}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Last Known Words */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="The Last Night"
          title="Last Known Words"
          accentColor="crimson"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 rounded-2xl p-8 card-glow-gold relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.14 0.04 270) 0%, oklch(0.12 0.03 25) 100%)",
            border: "1px solid oklch(0.82 0.14 85 / 0.25)",
          }}
        >
          {/* Gold shimmer line */}
          <div
            className="absolute top-0 left-0 right-0 h-px animate-shimmer"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.82 0.14 85 / 0.6), transparent)",
            }}
          />

          <p className="font-serif text-xl leading-loose text-foreground/90 italic">
            On the last night before her betrothal, Kamala walked alone to the
            pond where Yuri used to wait. She left a garland of jasmine on the
            bank. No one heard what she whispered. But that night, the water
            glowed faintly green.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div
              className="h-px flex-1 opacity-30"
              style={{ background: "oklch(var(--gold))" }}
            />
            <span
              className="font-body text-xs tracking-[0.25em] uppercase"
              style={{ color: "oklch(var(--gold))" }}
            >
              As recorded in the village
            </span>
            <div
              className="h-px flex-1 opacity-30"
              style={{ background: "oklch(var(--gold))" }}
            />
          </div>
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Section: The Divine Echo */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="Mythology"
          title="The Divine Echo"
          accentColor="gold"
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 rounded-2xl overflow-hidden card-glow-gold relative"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.13 0.04 85 / 0.5) 0%, oklch(0.11 0.03 270) 60%, oklch(0.14 0.05 60 / 0.3) 100%)",
            border: "1px solid oklch(0.82 0.14 85 / 0.2)",
          }}
        >
          {/* Gold shimmer line at top */}
          <div
            className="absolute top-0 left-0 right-0 h-px animate-shimmer"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.82 0.14 85 / 0.7), transparent)",
            }}
          />

          <div className="p-8 flex flex-col md:flex-row gap-8">
            {/* Badge + prose */}
            <div className="flex-1">
              {/* Das Mahavidya badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-body"
                style={{
                  background: "oklch(0.82 0.14 85 / 0.12)",
                  border: "1px solid oklch(0.82 0.14 85 / 0.4)",
                  color: "oklch(var(--gold))",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "oklch(var(--gold))" }}
                />
                Das Mahavidya · X · Tenth Mahavidya
              </motion.div>

              <p className="font-body text-lg leading-relaxed text-foreground/85">
                The fictional Kamala is named after the Tantric goddess{" "}
                <em className="text-gold font-serif">Kamalatmika</em> — tenth of
                the Das Mahavidyas. Like her divine namesake, she radiates
                golden light, born of prosperity and grace. Where the goddess
                sits upon a lotus flanked by four elephants pouring nectar, this
                Kamala too commanded reverence she never asked for.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/75 mt-4">
                She carried that divine weight unknowingly — the full-blossomed
                state of grace that blinded everyone around her to her own inner
                grief.
              </p>
            </div>

            {/* Traits grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-shrink-0 w-full md:w-64"
            >
              <p
                className="font-body text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: "oklch(var(--gold))" }}
              >
                Divine Attributes
              </p>
              <ul className="space-y-3">
                {DIVINE_TRAITS.map((trait, i) => (
                  <motion.li
                    key={trait}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3 font-body text-sm"
                  >
                    <span
                      className="mt-0.5 text-xs flex-shrink-0"
                      style={{ color: "oklch(var(--gold))" }}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    <span className="text-foreground/80">{trait}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Section: Sundori Komola */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="Folk Legacy"
          title="Sundori Komola"
          accentColor="crimson"
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 rounded-2xl relative overflow-hidden card-glow-crimson"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.14 0.04 25 / 0.45) 0%, oklch(0.11 0.025 270) 70%)",
            border: "1px solid oklch(0.60 0.22 25 / 0.25)",
          }}
        >
          {/* Shimmer border effect */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.60 0.22 25 / 0.06) 0%, transparent 50%, oklch(0.60 0.22 25 / 0.06) 100%)",
            }}
          />

          {/* Lyric quote block */}
          <div className="px-8 pt-10 pb-6 relative">
            <div
              className="absolute top-4 left-6 font-display text-8xl leading-none pointer-events-none select-none opacity-15"
              style={{ color: "oklch(var(--crimson))" }}
              aria-hidden="true"
            >
              "
            </div>
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative z-10 pl-6"
            >
              <p
                className="font-serif text-2xl sm:text-3xl leading-snug italic"
                style={{ color: "oklch(var(--foreground))" }}
              >
                "Sundori Komola nache —
              </p>
              <p
                className="font-serif text-2xl sm:text-3xl leading-snug italic mt-1"
                style={{ color: "oklch(0.80 0.12 25)" }}
              >
                Beautiful Kamala dances,
              </p>
              <p className="font-serif text-xl sm:text-2xl leading-snug italic mt-1 text-foreground/70">
                her sari shimmering in the sun,
                <br />
                her nose ring swaying..."
              </p>
            </motion.blockquote>

            {/* Song attribution */}
            <div className="mt-6 flex items-center gap-3 pl-6">
              <div
                className="h-px w-6 opacity-50"
                style={{ background: "oklch(var(--crimson))" }}
              />
              <span
                className="font-body text-xs tracking-[0.2em] uppercase"
                style={{ color: "oklch(var(--crimson))" }}
              >
                Bhawaiya · Chatka Folk Song · Northern Bengal
              </span>
            </div>
          </div>

          {/* Prose below */}
          <div
            className="px-8 py-6 border-t"
            style={{ borderColor: "oklch(0.60 0.22 25 / 0.15)" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-body text-lg leading-relaxed text-foreground/80"
            >
              In the Bhawaiya and Chatka folk songs of Northern Bengal,{" "}
              <em className="text-crimson font-serif">Kamala Sundari</em> is the
              eternal feminine ideal. Sung at Koch Rajbanshi weddings (
              <em>Biya Geet</em>), her name means "Beautiful Kamala" — a woman
              whose grace is so overwhelming it becomes part of the land itself.
              Our Kamala hummed these songs without realising she was their
              subject.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Section: The Wolf Child */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="The Shadow Myth"
          title="The Wolf Child of Midnapore"
          accentColor="jade"
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 rounded-2xl relative overflow-hidden card-glow-jade"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.03 270) 0%, oklch(0.13 0.04 155 / 0.4) 50%, oklch(0.10 0.02 270) 100%)",
            border: "1px solid oklch(0.72 0.16 155 / 0.2)",
          }}
        >
          {/* Dark vignette texture */}
          <div className="absolute inset-0 noise-texture opacity-60 pointer-events-none" />

          <div className="relative z-10 p-8">
            {/* Location & year label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="h-px w-8 opacity-50"
                style={{ background: "oklch(var(--jade))" }}
              />
              <span
                className="font-body text-xs tracking-[0.25em] uppercase"
                style={{ color: "oklch(var(--jade))" }}
              >
                Midnapore, Bengal · 1920s
              </span>
              <div
                className="h-px flex-1 opacity-20"
                style={{ background: "oklch(var(--jade))" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-xl leading-relaxed text-foreground/85"
            >
              In Midnapore, 1920s Bengal, legend speaks of two feral children
              raised by wolves —{" "}
              <em className="text-jade font-serif">Amala and Kamala</em>. Kamala
              survived longer, caught between the wild and the human world,
              belonging to neither. Some say our Kamala carries this same
              liminal curse: the girl who grew up between worlds, between
              devotion and duty, between the river and the village —{" "}
              <em>never fully tame, never fully free.</em>
            </motion.p>

            {/* Divider */}
            <div
              className="my-7 h-px opacity-20"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(var(--jade)), transparent)",
              }}
            />

            {/* Footnote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-serif text-sm italic text-foreground/45 leading-relaxed"
            >
              <span
                className="not-italic font-body text-xs mr-2 tracking-widest"
                style={{ color: "oklch(0.72 0.16 155 / 0.5)" }}
              >
                †
              </span>
              Historical accounts of the wolf children of Midnapore remain
              disputed by scholars — but in folklore, truth bends to need.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Tributes */}
      <TributeSection accentColor="crimson" />

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
  accentColor: "jade" | "crimson" | "gold";
}) {
  const accent =
    accentColor === "jade"
      ? "oklch(var(--jade))"
      : accentColor === "gold"
        ? "oklch(var(--gold))"
        : "oklch(var(--crimson))";

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
