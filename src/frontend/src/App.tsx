import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { KamalaPage } from "./pages/KamalaPage";
import { YuriPage } from "./pages/YuriPage";

export type Page = "home" | "yuri" | "kamala";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const handleNavigate = (newPage: Page) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar currentPage={page} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {page === "home" && <HomePage onNavigate={handleNavigate} />}
          {page === "yuri" && <YuriPage />}
          {page === "kamala" && <KamalaPage />}
        </motion.div>
      </AnimatePresence>

      <Toaster />
    </div>
  );
}
