import { useState, useEffect, useRef } from "react"
import { CHAPTERS, BLOCS } from "@/data/chapters"
import { QuizSection, ActionPlan, ChapterNav } from "@/components/dashboard/ChapterComponents"
import buildrsLogo from "@/assets/buildrs-logo.png"
import claudeLogo from "@/assets/claude-logo.png"

/* ─── Persistent state helpers ─── */
function loadCompleted(): number[] {
  try {
    return JSON.parse(localStorage.getItem("buildrs-completed") || "[]")
  } catch {
    return []
  }
}
function saveCompleted(ids: number[]) {
  localStorage.setItem("buildrs-completed", JSON.stringify(ids))
}

/* ═══════════════════════════════════════ */
/*  DASHBOARD PAGE                         */
/* ═══════════════════════════════════════ */

export default function DashboardPage() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [completedChapters, setCompletedChapters] = useState<number[]>(loadCompleted)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const chapter = CHAPTERS[activeChapter]
  const progress = Math.round((completedChapters.length / CHAPTERS.length) * 100)

  useEffect(() => {
    saveCompleted(completedChapters)
  }, [completedChapters])

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" })
    setSidebarOpen(false)
  }, [activeChapter])

  const markDoneAndNext = () => {
    if (!completedChapters.includes(activeChapter)) {
      setCompletedChapters((prev) => [...prev, activeChapter])
    }
    if (activeChapter < CHAPTERS.length - 1) {
      setActiveChapter(activeChapter + 1)
    }
  }

  return (
    <div
      style={{
        background: "#080909",
        color: "#EDEEEF",
        fontFamily: "'Geist', sans-serif",
        fontSize: "14px",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ─── Topbar ─── */}
      <div
        style={{
          height: "52px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          flexShrink: 0,
          zIndex: 20,
          background: "#080909",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Mobile burger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#EDEEEF",
              cursor: "pointer",
              padding: "4px",
            }}
            className="mobile-burger"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>

          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#EDEEEF",
              textDecoration: "none",
            }}
          >
            <img src={claudeLogo} alt="Claude" style={{ width: "20px", height: "20px", borderRadius: "4px" }} />
            <span>Claude SuperPowers</span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300 }}>·</span>
            <span style={{ fontWeight: 400, color: "rgba(237,238,239,0.45)", fontSize: "12px" }}>by Buildrs</span>
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Progress pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              color: progress === 100 ? "rgba(74,222,128,0.9)" : "rgba(237,238,239,0.5)",
              background: progress === 100 ? "rgba(74,222,128,0.08)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${progress === 100 ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "20px",
              padding: "4px 12px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: progress === 100 ? "rgba(74,222,128,0.9)" : "rgba(237,238,239,0.3)",
              }}
            />
            {progress}%
          </div>

          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: 600,
              color: "rgba(237,238,239,0.6)",
            }}
          >
            A
          </div>
        </div>
      </div>

      {/* ─── Body ─── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>
        {/* ─── Sidebar ─── */}
        <div
          className={sidebarOpen ? "sidebar-open" : ""}
          style={{
            width: "260px",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 0",
            flexShrink: 0,
            background: "rgba(8,9,9,0.95)",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            zIndex: 15,
          }}
        >
          {/* Progress bar */}
          <div style={{ padding: "0 16px", marginBottom: "16px" }}>
            <div
              style={{
                height: "3px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "rgba(218,119,86,0.7)",
                  borderRadius: "2px",
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(237,238,239,0.3)",
                marginTop: "6px",
                textAlign: "right",
              }}
            >
              {completedChapters.length}/{CHAPTERS.length} chapitres
            </div>
          </div>

          {/* Chapter navigation by bloc */}
          <div style={{ flex: 1 }}>
            {BLOCS.map((bloc) => (
              <div key={bloc.label} style={{ marginBottom: "8px" }}>
                {/* Bloc label */}
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(237,238,239,0.2)",
                    padding: "8px 16px 4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>{bloc.icon}</span> {bloc.label}
                </div>

                {/* Chapter items */}
                {bloc.chapters.map((ch) => {
                  const globalIndex = CHAPTERS.indexOf(ch)
                  const isActive = activeChapter === globalIndex
                  const isDone = completedChapters.includes(globalIndex)

                  return (
                    <div
                      key={ch.number}
                      onClick={() => setActiveChapter(globalIndex)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "7px 16px",
                        fontSize: "12px",
                        color: isActive
                          ? "#EDEEEF"
                          : isDone
                          ? "rgba(237,238,239,0.45)"
                          : "rgba(237,238,239,0.35)",
                        cursor: "pointer",
                        background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                        borderRight: isActive ? "2px solid rgba(218,119,86,0.6)" : "2px solid transparent",
                        transition: "all 0.15s",
                        lineHeight: 1.4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          color: "rgba(237,238,239,0.2)",
                          fontFamily: "'Geist Mono', monospace",
                          width: "20px",
                          flexShrink: 0,
                        }}
                      >
                        {ch.number}
                      </span>
                      <span style={{ flex: 1 }}>{ch.title.length > 35 ? ch.title.slice(0, 35) + "…" : ch.title}</span>
                      {isDone && (
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            background: "rgba(74,222,128,0.12)",
                            border: "1px solid rgba(74,222,128,0.25)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path
                              d="M1.5 4L3.5 6L6.5 2"
                              stroke="rgba(74,222,128,0.7)"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                      {ch.isBonus && !isDone && (
                        <span
                          style={{
                            fontSize: "8px",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(251,191,36,0.7)",
                            border: "1px solid rgba(251,191,36,0.2)",
                            borderRadius: "3px",
                            padding: "1px 5px",
                            flexShrink: 0,
                          }}
                        >
                          BONUS
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          {/* CTA Buildrs — visible from bloc 3 (chapter 9 = index 8) */}
          {activeChapter >= 8 && (
            <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <a
                href="https://buildrs.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 12px",
                  background: "rgba(218,119,86,0.1)",
                  border: "1px solid rgba(218,119,86,0.25)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(218,119,86,0.9)",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
              >
                <img src={buildrsLogo} alt="Buildrs" style={{ width: "18px", height: "18px" }} />
                <span>🔥 Buildrs implémente pour toi →</span>
              </a>
            </div>
          )}
        </div>

        {/* ─── Main content ─── */}
        <div
          ref={contentRef}
          style={{
            flex: 1,
            padding: "48px 64px",
            paddingBottom: "120px",
            overflowY: "auto",
            background: "#080909",
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          className="dashboard-content"
        >
          <div style={{ maxWidth: "720px" }}>
            {/* Chapter label */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(218,119,86,0.7)",
                }}
              >
                {chapter.isBonus ? "Bonus" : `Chapitre ${chapter.number}`} — {chapter.bloc}
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)",
                }}
              />
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "36px",
                fontWeight: 400,
                color: "#EDEEEF",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                marginBottom: "8px",
              }}
            >
              {chapter.title}
            </h1>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(237,238,239,0.4)",
                marginBottom: "40px",
                fontStyle: "italic",
              }}
            >
              {chapter.subtitle}
            </p>

            {/* Chapter content */}
            <div className="chapter-body">{chapter.content}</div>

            {/* Action plan */}
            <div style={{ marginTop: "40px" }}>
              <ActionPlan items={chapter.actionPlan} />
            </div>

            {/* Quiz */}
            <QuizSection chapterNum={chapter.number} questions={chapter.quiz} />

            {/* Chapter navigation */}
            <ChapterNav
              currentChapter={activeChapter + 1}
              totalChapters={CHAPTERS.length}
              onNavigate={(ch) => setActiveChapter(ch - 1)}
              onMarkDone={markDoneAndNext}
            />
          </div>
        </div>
      </div>

      {/* ─── Mobile sidebar overlay ─── */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 14,
          }}
        />
      )}

      {/* ─── CSS for responsive & content styles ─── */}
      <style>{`
        .chapter-body h3 {
          font-family: 'Geist', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #EDEEEF;
          margin-top: 36px;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .chapter-body h3:first-child {
          margin-top: 0;
        }
        .chapter-body p {
          font-size: 15px;
          color: rgba(237,238,239,0.7);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .chapter-body ul, .chapter-body ol {
          padding-left: 20px;
          margin-bottom: 16px;
        }
        .chapter-body li {
          font-size: 14px;
          color: rgba(237,238,239,0.65);
          line-height: 1.7;
          margin-bottom: 6px;
        }
        .chapter-body strong {
          color: #EDEEEF;
          font-weight: 600;
        }
        .chapter-body code {
          font-family: 'Geist Mono', monospace;
          font-size: 12px;
          background: rgba(255,255,255,0.06);
          padding: 2px 6px;
          border-radius: 4px;
          color: rgba(218,119,86,0.85);
        }

        @media (max-width: 768px) {
          .mobile-burger {
            display: flex !important;
          }
          .dashboard-content {
            padding: 24px 20px !important;
          }
          div[style*="width: 260px"] {
            position: fixed;
            top: 52px;
            left: 0;
            bottom: 0;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
          }
          div[style*="width: 260px"].sidebar-open {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
