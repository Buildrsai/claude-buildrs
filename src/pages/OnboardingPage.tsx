import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import confetti from "canvas-confetti"
import claudeLogo from "@/assets/claude-logo.png"

type Step = 1 | 2 | 3 | "done"

/* ─── Q1 — Objectif ─── */
const OBJECTIVES = [
  {
    icon: "⚡",
    label: "Booster mon business existant",
    sub: "Marketing, contenu, stratégie, service client IA",
    value: "boost_business",
  },
  {
    icon: "🔧",
    label: "Automatiser mon quotidien",
    sub: "Gagner du temps sur les tâches répétitives",
    value: "automatiser",
  },
  {
    icon: "💡",
    label: "Créer un produit ou outil IA",
    sub: "Construire un micro-SaaS, une app, un outil avec le VibeCoding",
    value: "creer_produit",
  },
  {
    icon: "🌱",
    label: "Découvrir et comprendre l'IA",
    sub: "Pas encore de projet précis, je veux apprendre",
    value: "decouvrir",
  },
]

/* ─── Q2 — Outils actuels ─── */
const TOOLS = [
  {
    icon: "🤖",
    label: "ChatGPT / GPT-4",
    sub: "OpenAI",
    value: "chatgpt",
  },
  {
    icon: "🧠",
    label: "Claude — je débute",
    sub: "J'ai un compte mais j'explore encore",
    value: "claude_debutant",
  },
  {
    icon: "⚡",
    label: "Claude — je l'utilise déjà",
    sub: "Je l'utilise régulièrement dans mon travail",
    value: "claude_regulier",
  },
  {
    icon: "🔀",
    label: "D'autres outils IA",
    sub: "Gemini, Copilot, Mistral, etc.",
    value: "autres_ia",
  },
  {
    icon: "🆕",
    label: "Rien encore",
    sub: "Je démarre dans l'IA",
    value: "rien",
  },
]

/* ─── Q3 — Niveau ─── */
const LEVELS = [
  { icon: "🌱", label: "Débutant", sub: "Je découvre", value: "debutant" },
  { icon: "👀", label: "Curieux", sub: "Je teste depuis peu", value: "curieux" },
  { icon: "⚡", label: "Pratiquant", sub: "Je l'utilise régulièrement", value: "pratiquant" },
  { icon: "🚀", label: "Avancé", sub: "Je build déjà avec", value: "avance" },
]

/* ─── Objective label for recap ─── */
const objectiveLabels: Record<string, string> = {
  boost_business: "Booster ton business",
  automatiser: "Automatiser ton quotidien",
  creer_produit: "Créer un produit IA",
  decouvrir: "Découvrir l'IA",
}

const levelLabels: Record<string, string> = {
  debutant: "Débutant",
  curieux: "Curieux",
  pratiquant: "Pratiquant",
  avance: "Avancé",
}

/* ═══════════════════════════════════════ */
/*  ONBOARDING PAGE                        */
/* ═══════════════════════════════════════ */

export default function OnboardingPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState<Step>(1)
  const [selectedObjective, setSelectedObjective] = useState(0)
  const [selectedTools, setSelectedTools] = useState<number[]>([])
  const [selectedLevel, setSelectedLevel] = useState(1)
  const confettiFired = useRef(false)

  /* ─── Animations for done screen ─── */
  const [showLogo, setShowLogo] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const progressDots = [1, 2, 3]

  /* ─── Save data & go to done ─── */
  const finishOnboarding = () => {
    const data = {
      objectif: OBJECTIVES[selectedObjective].value,
      outils_actuels: selectedTools.map((i) => TOOLS[i].value),
      niveau: LEVELS[selectedLevel].value,
    }
    localStorage.setItem("buildrs-onboarding", JSON.stringify(data))
    setStep("done")
  }

  /* ─── Toggle tool selection (multi-select) ─── */
  const toggleTool = (index: number) => {
    setSelectedTools((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  /* ─── Confetti + staggered reveal on done screen ─── */
  useEffect(() => {
    if (step !== "done" || confettiFired.current) return
    confettiFired.current = true

    // Staggered reveal
    setTimeout(() => setShowLogo(true), 100)
    setTimeout(() => setShowTitle(true), 300)
    setTimeout(() => {
      // First confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.3 },
        colors: ["#DA7756", "#FFFFFF", "#FFD700", "#F5F0E8", "#FF6B35"],
      })
    }, 400)
    setTimeout(() => {
      // Second burst — lighter
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.4 },
        colors: ["#DA7756", "#FFFFFF", "#FFD700"],
      })
    }, 700)
    setTimeout(() => setShowSubtitle(true), 600)
    setTimeout(() => setShowButton(true), 900)
  }, [step])

  /* ═══════════════════════════════════════ */
  /*  DONE SCREEN                            */
  /* ═══════════════════════════════════════ */
  if (step === "done") {
    const objectiveText = objectiveLabels[OBJECTIVES[selectedObjective].value] || "Explorer Claude"
    const levelText = levelLabels[LEVELS[selectedLevel].value] || "Curieux"

    return (
      <div style={pageStyle}>
        <div style={glowStyle} />
        <div
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            maxWidth: "460px",
            width: "100%",
          }}
        >
          {/* Logo */}
          <div
            style={{
              opacity: showLogo ? 1 : 0,
              transform: showLogo ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              marginBottom: "28px",
            }}
          >
            <img
              src={claudeLogo}
              alt="Claude SuperPowers"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                margin: "0 auto 12px",
                display: "block",
              }}
            />
            <div
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(237,238,239,0.3)",
              }}
            >
              Claude SuperPowers · by Buildrs
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              opacity: showTitle ? 1 : 0,
              transform: showTitle ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontSize: "32px",
                fontWeight: 400,
                color: "#EDEEEF",
                marginBottom: "12px",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              Ton guide est prêt
            </h1>
          </div>

          {/* Subtitle + Profile recap */}
          <div
            style={{
              opacity: showSubtitle ? 1 : 0,
              transform: showSubtitle ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "rgba(237,238,239,0.4)",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              Personnalisé selon ton profil.
              <br />
              16 chapitres · Actions concrètes · Résultats immédiats.
            </p>

            {/* Profile recap card */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "14px 20px",
                marginBottom: "28px",
                display: "inline-flex",
                flexDirection: "column",
                gap: "8px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "rgba(237,238,239,0.6)",
                }}
              >
                <span style={{ fontSize: "14px" }}>🎯</span>
                <span style={{ color: "rgba(237,238,239,0.35)" }}>Objectif :</span>
                <span style={{ color: "#EDEEEF", fontWeight: 500 }}>{objectiveText}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "rgba(237,238,239,0.6)",
                }}
              >
                <span style={{ fontSize: "14px" }}>⚡</span>
                <span style={{ color: "rgba(237,238,239,0.35)" }}>Niveau :</span>
                <span style={{ color: "#EDEEEF", fontWeight: 500 }}>{levelText}</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div
            style={{
              opacity: showButton ? 1 : 0,
              transform: showButton ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <button
              onClick={() => navigate("/dashboard")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "#EDEEEF",
                color: "#080909",
                fontSize: "14px",
                fontWeight: 600,
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Geist', sans-serif",
                marginBottom: "16px",
              }}
            >
              Commencer le guide
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <div
              style={{
                fontSize: "11px",
                color: "rgba(237,238,239,0.2)",
                letterSpacing: "0.05em",
              }}
            >
              🔓 Accès intégral — 100% gratuit
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* ═══════════════════════════════════════ */
  /*  QUESTIONS FLOW                         */
  /* ═══════════════════════════════════════ */
  return (
    <div style={pageStyle}>
      <div style={glowStyle} />

      <div style={{ width: "100%", maxWidth: "460px", position: "relative", zIndex: 1 }}>
        {/* Progress bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
            justifyContent: "center",
          }}
        >
          {progressDots.map((dot) => (
            <div
              key={dot}
              style={{
                height: "3px",
                width: "48px",
                borderRadius: "99px",
                background:
                  dot < (step as number)
                    ? "rgba(255,255,255,0.5)"
                    : dot === (step as number)
                    ? "#EDEEEF"
                    : "rgba(255,255,255,0.08)",
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>

        {/* ─── STEP 1 — Objectif ─── */}
        {step === 1 && (
          <>
            <div style={eyebrowStyle}>Question 1 / 3</div>
            <h2 style={questionTitleStyle}>
              Quel est ton objectif principal
              <br />
              avec Claude ?
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
              {OBJECTIVES.map((opt, i) => {
                const isSelected = selectedObjective === i
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedObjective(i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 16px",
                      background: isSelected ? "#111214" : "#0C0D0E",
                      border: `1px solid ${isSelected ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "border-color 0.15s, background 0.15s",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        flexShrink: 0,
                      }}
                    >
                      {opt.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#EDEEEF",
                          marginBottom: "2px",
                        }}
                      >
                        {opt.label}
                      </div>
                      <div style={{ fontSize: "12px", color: "rgba(237,238,239,0.4)", lineHeight: 1.4 }}>
                        {opt.sub}
                      </div>
                    </div>
                    {/* Radio button */}
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        border: `1.5px solid ${isSelected ? "#EDEEEF" : "rgba(255,255,255,0.15)"}`,
                        background: isSelected ? "#EDEEEF" : "transparent",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#080909",
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div style={navStyle}>
              <button onClick={() => setStep(2)} style={skipBtnStyle}>
                Passer
              </button>
              <button onClick={() => setStep(2)} style={nextBtnStyle}>
                Continuer
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        )}

        {/* ─── STEP 2 — Outils actuels (multi-select) ─── */}
        {step === 2 && (
          <>
            <div style={eyebrowStyle}>Question 2 / 3</div>
            <h2 style={questionTitleStyle}>
              Aujourd'hui, tu utilises quoi
              <br />
              pour ton activité ?
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
              {TOOLS.map((tool, i) => {
                const isSelected = selectedTools.includes(i)
                return (
                  <div
                    key={i}
                    onClick={() => toggleTool(i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "12px 16px",
                      background: isSelected ? "#111214" : "#0C0D0E",
                      border: `1px solid ${isSelected ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "border-color 0.15s, background 0.15s",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        flexShrink: 0,
                      }}
                    >
                      {tool.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#EDEEEF",
                          marginBottom: "1px",
                        }}
                      >
                        {tool.label}
                      </div>
                      <div style={{ fontSize: "11px", color: "rgba(237,238,239,0.35)", lineHeight: 1.4 }}>
                        {tool.sub}
                      </div>
                    </div>
                    {/* Checkbox */}
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "4px",
                        border: `1.5px solid ${isSelected ? "#EDEEEF" : "rgba(255,255,255,0.15)"}`,
                        background: isSelected ? "#EDEEEF" : "transparent",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {isSelected && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M2 5L4.5 7.5L8 3"
                            stroke="#080909"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div style={navStyle}>
              <button onClick={() => setStep(3)} style={skipBtnStyle}>
                Passer
              </button>
              <button onClick={() => setStep(3)} style={nextBtnStyle}>
                Continuer
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        )}

        {/* ─── STEP 3 — Niveau ─── */}
        {step === 3 && (
          <>
            <div style={eyebrowStyle}>Question 3 / 3</div>
            <h2 style={questionTitleStyle}>
              Ton niveau avec l'IA
              <br />
              et le VibeCoding ?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "32px" }}>
              {LEVELS.map((lvl, i) => {
                const isSelected = selectedLevel === i
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedLevel(i)}
                    style={{
                      padding: "16px 8px 14px",
                      background: isSelected ? "#111214" : "#0C0D0E",
                      border: `1px solid ${isSelected ? "rgba(255,255,255,0.30)" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ fontSize: "20px", marginBottom: "6px" }}>{lvl.icon}</div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: isSelected ? 600 : 500,
                        color: isSelected ? "#EDEEEF" : "rgba(237,238,239,0.5)",
                        marginBottom: "4px",
                      }}
                    >
                      {lvl.label}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: isSelected ? "rgba(237,238,239,0.4)" : "rgba(237,238,239,0.2)",
                        lineHeight: 1.3,
                        fontStyle: "italic",
                      }}
                    >
                      {lvl.sub}
                    </div>
                  </div>
                )
              })}
            </div>
            <div style={navStyle}>
              <button onClick={finishOnboarding} style={skipBtnStyle}>
                Passer
              </button>
              <button onClick={finishOnboarding} style={nextBtnStyle}>
                Accéder au guide
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 520px) {
          div[style*="gridTemplateColumns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  )
}

/* ═══════════════════════════════════════ */
/*  SHARED STYLES                          */
/* ═══════════════════════════════════════ */

const pageStyle: React.CSSProperties = {
  background: "#080909",
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "60px 24px",
  fontFamily: "'Geist', sans-serif",
  color: "#EDEEEF",
  position: "relative",
}

const glowStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "400px",
  height: "200px",
  background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
  pointerEvents: "none",
}

const eyebrowStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(237,238,239,0.3)",
  marginBottom: "10px",
  textAlign: "center",
}

const questionTitleStyle: React.CSSProperties = {
  fontFamily: "'Geist', sans-serif",
  fontWeight: 400,
  fontSize: "26px",
  color: "#EDEEEF",
  textAlign: "center",
  marginBottom: "32px",
  letterSpacing: "-0.04em",
  lineHeight: 1.2,
}

const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

const skipBtnStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "rgba(237,238,239,0.25)",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: "'Geist', sans-serif",
}

const nextBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 20px",
  background: "#EDEEEF",
  color: "#080909",
  fontSize: "13px",
  fontWeight: 600,
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontFamily: "'Geist', sans-serif",
}
