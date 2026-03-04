import { motion } from "motion/react";

type Page = "home" | "yuri" | "kamala";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.10 0.025 270 / 0.95), oklch(0.10 0.025 270 / 0))",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Logo */}
      <button
        type="button"
        data-ocid="nav.home.link"
        onClick={() => onNavigate("home")}
        className="font-display text-lg tracking-wide transition-colors duration-200"
        style={{
          color:
            currentPage === "home"
              ? "oklch(var(--jade))"
              : "oklch(var(--foreground))",
        }}
      >
        Shakchunni no Yuri
      </button>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <NavLink
          ocid="nav.yuri.link"
          label="Yuri Shankha"
          active={currentPage === "yuri"}
          onClick={() => onNavigate("yuri")}
          accentColor="jade"
        />
        <NavLink
          ocid="nav.kamala.link"
          label="Kamala"
          active={currentPage === "kamala"}
          onClick={() => onNavigate("kamala")}
          accentColor="crimson"
        />
      </div>
    </motion.nav>
  );
}

interface NavLinkProps {
  ocid: string;
  label: string;
  active: boolean;
  onClick: () => void;
  accentColor: "jade" | "crimson";
}

function NavLink({ ocid, label, active, onClick, accentColor }: NavLinkProps) {
  const color =
    accentColor === "jade" ? "oklch(var(--jade))" : "oklch(var(--crimson))";

  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={onClick}
      className="relative font-body text-base tracking-wider transition-colors duration-200 group"
      style={{ color: active ? color : "oklch(var(--muted-foreground))" }}
    >
      {label}
      <span
        className="absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300"
        style={{
          background: color,
          transform: active ? "scaleX(1)" : "scaleX(0)",
        }}
      />
      <span
        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{
          background: color,
          opacity: active ? 0 : 0.5,
        }}
      />
    </button>
  );
}
