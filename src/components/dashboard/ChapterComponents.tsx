import { useState, useEffect, useCallback } from "react"

/* ─── Callout Box ─── */
export function CalloutBox({
  variant,
  children,
}: {
  variant: "important" | "action" | "buildrs" | "usecase"
  children: React.ReactNode
}) {
  const styles = {
    important: {
      border: "rgba(218,119,86,0.5)",
      bg: "#1A1A1A",
      icon: "💡",
      label: "Pourquoi c'est important",
      labelColor: "rgba(218,119,86,0.85)",
    },
    action: {
      border: "rgba(251,191,36,0.5)",
      bg: "#1A1A1A",
      icon: "⚡",
      label: "Action rapide",
      labelColor: "rgba(251,191,36,0.85)",
    },
    buildrs: {
      border: "rgba(218,119,86,0.5)",
      bg: "rgba(218,119,86,0.08)",
      icon: "🔥",
      label: "L'offre Buildrs",
      labelColor: "rgba(218,119,86,0.85)",
    },
    usecase: {
      border: "rgba(59,130,246,0.5)",
      bg: "#111827",
      icon: "🏢",
      label: "Use Case Buildrs",
      labelColor: "rgba(59,130,246,0.85)",
    },
  }

  const s = styles[variant]

  return (
    <div
      style={{
        borderLeft: `3px solid ${s.border}`,
        background: s.bg,
        borderRadius: "0 8px 8px 0",
        padding: "16px 20px",
        marginBottom: "24px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: s.labelColor,
          marginBottom: "8px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span>{s.icon}</span> {s.label}
      </div>
      <div style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(237,238,239,0.7)" }}>
        {children}
      </div>
    </div>
  )
}

/* ─── Code Block ─── */
export function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        background: "#1A1A1A",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        marginBottom: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {language && (
        <div
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(237,238,239,0.3)",
            padding: "8px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {language}
        </div>
      )}
      <pre
        style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: "13px",
          lineHeight: 1.6,
          color: "rgba(237,238,239,0.75)",
          padding: "16px",
          margin: 0,
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {code}
      </pre>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: language ? "36px" : "8px",
          right: "8px",
          fontSize: "11px",
          color: copied ? "rgba(74,222,128,0.8)" : "rgba(237,238,239,0.3)",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "4px",
          padding: "3px 8px",
          cursor: "pointer",
          fontFamily: "'Geist', sans-serif",
        }}
      >
        {copied ? "Copié ✓" : "Copier"}
      </button>
    </div>
  )
}

/* ─── Table Block ─── */
export function TableBlock({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div
      style={{
        overflowX: "auto",
        marginBottom: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13px",
          fontFamily: "'Geist', sans-serif",
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "10px 14px",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "rgba(237,238,239,0.5)",
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: "10px 14px",
                    color: "rgba(237,238,239,0.65)",
                    borderBottom:
                      ri < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    lineHeight: 1.5,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ─── Quiz Section — STATE ISOLÉ PAR CHAPITRE ─── */
export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
}

/**
 * Quiz with isolated state per chapter.
 * Uses chapterNum as unique key for localStorage and radio name attributes.
 * BUG FIX: Each quiz now has completely independent state via unique localStorage
 * keys (quiz_chXX) and unique radio name attributes (quiz-chXX-qY).
 */
export function QuizSection({
  chapterNum,
  questions,
  onComplete,
}: {
  chapterNum: string
  questions: QuizQuestion[]
  onComplete?: () => void
}) {
  const storageKey = `quiz_ch${chapterNum}`

  // Load saved state from localStorage (isolated per chapter)
  const loadSavedState = useCallback(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) return JSON.parse(saved)
    } catch { /* ignore */ }
    return { answers: {}, revealed: {} }
  }, [storageKey])

  const [answers, setAnswers] = useState<Record<number, number>>(() => loadSavedState().answers)
  const [revealed, setRevealed] = useState<Record<number, boolean>>(() => loadSavedState().revealed)

  // Reset state when chapter changes
  useEffect(() => {
    const saved = loadSavedState()
    setAnswers(saved.answers)
    setRevealed(saved.revealed)
  }, [chapterNum, loadSavedState])

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ answers, revealed }))
  }, [answers, revealed, storageKey])

  const totalAnswered = Object.keys(revealed).length
  const totalCorrect = Object.entries(answers).filter(
    ([qi, ai]) => revealed[Number(qi)] && questions[Number(qi)]?.correctIndex === ai
  ).length

  const allDone = totalAnswered === questions.length

  useEffect(() => {
    if (allDone && onComplete) onComplete()
  }, [allDone, onComplete])

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (revealed[questionIndex]) return
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }))
    setRevealed((prev) => ({ ...prev, [questionIndex]: true }))
  }

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "24px",
        marginTop: "48px",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(218,119,86,0.85)",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        🧠 Quiz — Chapitre {chapterNum}
      </div>

      {questions.map((q, qi) => {
        const isRevealed = revealed[qi]
        const selectedAnswer = answers[qi]
        const isCorrect = selectedAnswer === q.correctIndex
        // Unique ID prefix for this chapter + question
        const idPrefix = `quiz-ch${chapterNum}-q${qi}`

        return (
          <div key={`${chapterNum}-${qi}`} style={{ marginBottom: qi < questions.length - 1 ? "24px" : "0" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#EDEEEF",
                marginBottom: "10px",
                lineHeight: 1.5,
              }}
            >
              {q.question}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {q.options.map((opt, oi) => {
                const isSelected = selectedAnswer === oi
                const isCorrectOption = oi === q.correctIndex
                let bg = "rgba(255,255,255,0.03)"
                let border = "rgba(255,255,255,0.08)"
                let color = "rgba(237,238,239,0.65)"

                if (isRevealed) {
                  if (isCorrectOption) {
                    bg = "rgba(74,222,128,0.08)"
                    border = "rgba(74,222,128,0.3)"
                    color = "rgba(74,222,128,0.9)"
                  } else if (isSelected && !isCorrect) {
                    bg = "rgba(248,113,113,0.08)"
                    border = "rgba(248,113,113,0.3)"
                    color = "rgba(248,113,113,0.9)"
                  }
                }

                return (
                  <button
                    key={`${idPrefix}-opt${oi}`}
                    id={`${idPrefix}-opt${oi}`}
                    onClick={() => handleAnswer(qi, oi)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 14px",
                      background: bg,
                      border: `1px solid ${border}`,
                      borderRadius: "8px",
                      cursor: isRevealed ? "default" : "pointer",
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "13px",
                      color,
                      textAlign: "left",
                      transition: "all 0.15s",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        border: `1px solid ${border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      {isRevealed && isCorrectOption
                        ? "✓"
                        : isRevealed && isSelected && !isCorrect
                        ? "✗"
                        : String.fromCharCode(65 + oi)}
                    </span>
                    <span style={{ flex: 1 }}>{opt}</span>
                  </button>
                )
              })}
            </div>

            {isRevealed && q.explanation && (
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(237,238,239,0.45)",
                  marginTop: "8px",
                  paddingLeft: "32px",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                {q.explanation}
              </p>
            )}
          </div>
        )
      })}

      {allDone && (
        <div
          style={{
            marginTop: "20px",
            padding: "12px 16px",
            background:
              totalCorrect === questions.length
                ? "rgba(74,222,128,0.08)"
                : "rgba(251,191,36,0.08)",
            border: `1px solid ${
              totalCorrect === questions.length
                ? "rgba(74,222,128,0.2)"
                : "rgba(251,191,36,0.2)"
            }`,
            borderRadius: "8px",
            fontSize: "13px",
            color:
              totalCorrect === questions.length
                ? "rgba(74,222,128,0.9)"
                : "rgba(251,191,36,0.9)",
            fontWeight: 500,
          }}
        >
          Score : {totalCorrect}/{questions.length}{" "}
          {totalCorrect === questions.length ? "— Parfait !" : "— Continue ta progression."}
        </div>
      )}
    </div>
  )
}

/* ─── Action Plan ─── */
export function ActionPlan({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(237,238,239,0.35)",
          marginBottom: "12px",
        }}
      >
        ✅ Ce que tu dois faire maintenant
      </div>
      {items.map((item, i) => (
        <label
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 0",
            fontSize: "14px",
            color: checked[i] ? "rgba(74,222,128,0.7)" : "rgba(237,238,239,0.65)",
            cursor: "pointer",
            textDecoration: checked[i] ? "line-through" : "none",
            transition: "color 0.15s",
          }}
        >
          <input
            type="checkbox"
            checked={!!checked[i]}
            onChange={() => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))}
            style={{ accentColor: "rgba(74,222,128,0.7)" }}
          />
          {item}
        </label>
      ))}
    </div>
  )
}

/* ─── Chapter Navigation ─── */
export function ChapterNav({
  currentChapter,
  totalChapters,
  onNavigate,
  onMarkDone,
}: {
  currentChapter: number
  totalChapters: number
  onNavigate: (chapter: number) => void
  onMarkDone: () => void
}) {
  return (
    <div
      style={{
        marginTop: "48px",
        paddingTop: "24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {currentChapter > 1 ? (
        <button
          onClick={() => onNavigate(currentChapter - 1)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            fontSize: "13px",
            color: "rgba(237,238,239,0.45)",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            cursor: "pointer",
            fontFamily: "'Geist', sans-serif",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Précédent
        </button>
      ) : (
        <div />
      )}

      <button
        onClick={onMarkDone}
        style={{
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
        }}
      >
        {currentChapter < totalChapters ? "Chapitre suivant" : "Terminer le guide"}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
