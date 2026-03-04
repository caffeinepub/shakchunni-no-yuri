import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useGetAllTributes, useLeaveTribute } from "../hooks/useQueries";

interface TributeSectionProps {
  accentColor?: "jade" | "crimson";
}

export function TributeSection({ accentColor = "jade" }: TributeSectionProps) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { data: tributes, isLoading, isError } = useGetAllTributes();
  const leaveTribute = useLeaveTribute();

  const accent =
    accentColor === "jade" ? "oklch(var(--jade))" : "oklch(var(--crimson))";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    try {
      await leaveTribute.mutateAsync({
        message: message.trim(),
        author: author.trim(),
      });
      setAuthor("");
      setMessage("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      // error handled by mutation state
    }
  };

  const formatDate = (timestamp: bigint) => {
    const ms = Number(timestamp / 1_000_000n);
    return new Date(ms).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-16 opacity-50"
              style={{ background: accent }}
            />
            <MessageCircle className="w-5 h-5" style={{ color: accent }} />
            <div
              className="h-px w-16 opacity-50"
              style={{ background: accent }}
            />
          </div>
          <h2 className="font-display text-3xl mb-3" style={{ color: accent }}>
            Leave a Tribute
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Whisper your words to the water. She is listening.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-xl p-6 mb-10 space-y-5"
          style={{
            background: "oklch(0.13 0.035 270 / 0.8)",
            border: `1px solid ${accentColor === "jade" ? "oklch(0.72 0.16 155 / 0.25)" : "oklch(0.60 0.22 25 / 0.25)"}`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div>
            <Label
              htmlFor="tribute-author"
              className="font-body text-sm mb-2 block"
              style={{ color: accent }}
            >
              Your Name
            </Label>
            <Input
              id="tribute-author"
              data-ocid="tribute.author.input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Who leaves this offering?"
              className="bg-background/50 border-border/60 font-body text-base focus-visible:ring-1 placeholder:text-muted-foreground/50"
              style={
                {
                  "--tw-ring-color": accent,
                } as React.CSSProperties
              }
              maxLength={60}
            />
          </div>

          <div>
            <Label
              htmlFor="tribute-message"
              className="font-body text-sm mb-2 block"
              style={{ color: accent }}
            >
              Your Tribute
            </Label>
            <Textarea
              id="tribute-message"
              data-ocid="tribute.message.textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Words offered to the spirit..."
              className="bg-background/50 border-border/60 font-body text-base min-h-[100px] focus-visible:ring-1 placeholder:text-muted-foreground/50 resize-none"
              style={
                {
                  "--tw-ring-color": accent,
                } as React.CSSProperties
              }
              maxLength={300}
            />
          </div>

          <div className="flex items-center justify-between">
            <AnimatePresence mode="wait">
              {submitted && (
                <motion.span
                  key="success"
                  data-ocid="tribute.success_state"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-body text-sm"
                  style={{ color: accent }}
                >
                  ✦ Your tribute has been placed by the water.
                </motion.span>
              )}
              {leaveTribute.isError && (
                <motion.span
                  key="error"
                  data-ocid="tribute.error_state"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-body text-sm text-destructive"
                >
                  Something went wrong. Try again.
                </motion.span>
              )}
              {!submitted && !leaveTribute.isError && <span key="empty" />}
            </AnimatePresence>

            <Button
              data-ocid="tribute.submit_button"
              type="submit"
              disabled={
                leaveTribute.isPending || !author.trim() || !message.trim()
              }
              className="font-body gap-2 transition-all duration-200"
              style={{
                background:
                  accentColor === "jade"
                    ? "oklch(0.72 0.16 155 / 0.15)"
                    : "oklch(0.60 0.22 25 / 0.15)",
                color: accent,
                border: `1px solid ${accentColor === "jade" ? "oklch(0.72 0.16 155 / 0.4)" : "oklch(0.60 0.22 25 / 0.4)"}`,
              }}
            >
              {leaveTribute.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {leaveTribute.isPending ? "Placing..." : "Leave Tribute"}
            </Button>
          </div>
        </motion.form>

        {/* Tributes List */}
        <div>
          {isLoading && (
            <div
              data-ocid="tribute.loading_state"
              className="flex items-center justify-center gap-3 py-12 text-muted-foreground"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="font-body">Calling across the veil...</span>
            </div>
          )}

          {isError && (
            <div
              data-ocid="tribute.error_state"
              className="text-center py-10 font-body text-destructive"
            >
              The spirits could not be reached. Please try again.
            </div>
          )}

          {!isLoading && !isError && tributes && tributes.length === 0 && (
            <motion.div
              data-ocid="tribute.empty_state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="font-body text-lg text-muted-foreground italic">
                No tributes yet. Be the first to leave an offering.
              </p>
            </motion.div>
          )}

          {!isLoading && tributes && tributes.length > 0 && (
            <motion.div
              data-ocid="tribute.list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {tributes.map((tribute, index) => (
                <motion.div
                  key={tribute.id.toString()}
                  data-ocid={`tribute.item.${index + 1}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-lg p-5"
                  style={{
                    background: "oklch(0.13 0.035 270 / 0.6)",
                    border: `1px solid ${accentColor === "jade" ? "oklch(0.72 0.16 155 / 0.15)" : "oklch(0.60 0.22 25 / 0.15)"}`,
                  }}
                >
                  <p className="font-body text-base text-foreground/90 italic mb-3 leading-relaxed">
                    &ldquo;{tribute.message}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-body text-sm font-medium"
                      style={{ color: accent }}
                    >
                      — {tribute.author}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {formatDate(tribute.timestamp)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
