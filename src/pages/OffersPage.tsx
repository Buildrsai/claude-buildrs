import { useState } from "react"
import { useNavigate } from "react-router-dom"
import buildrsLogo from "@/assets/buildrs-logo.png"
import claudeLogo from "@/assets/claude-logo.png"

/* ─── Offers data ─── */
const OFFERS = [
  {
    id: "kit",
    icon: "📦",
    name: "Kit d'implémentation",
    price: "97€",
    priceDetail: "Accès à vie",
    description: "Skills, templates CLAUDE.md, prompts, configs MCP, agents Cowork — prêts à copier.",
    includes: [
      "Skills Buildrs pré-configurés",
      "5 templates CLAUDE.md",
      "Fichier .mcp.json complet",
      "20 prompts systèmes optimisés",
      "7 agents Cowork d'Alfred",
      "Communauté privée",
      "Mises à jour permanentes",
    ],
    cta: "Obtenir le Kit → 97€",
    badge: null,
    borderColor: "rgba(255,255,255,0.12)",
    buttonStyle: { background: "#EDEEEF", color: "#080909" } as React.CSSProperties,
  },
  {
    id: "call",
    icon: "🤝",
    name: "Call d'implémentation",
    price: "197€",
    priceDetail: "60 min avec Alfred",
    description: "On configure ensemble ton Claude, personnalisé à ton activité. Kit inclus (97€).",
    includes: [
      "Tout le Kit d'implémentation",
      "Audit activité + besoins",
      "Configuration Claude AI",
      "Setup Claude Code / Cowork",
      "Plan d'action personnalisé",
    ],
    cta: "Réserver mon call → 197€",
    badge: "POPULAIRE",
    borderColor: "rgba(218,119,86,0.5)",
    buttonStyle: { background: "#DA7756", color: "#FFFFFF" } as React.CSSProperties,
  },
  {
    id: "implementation",
    icon: "🔥",
    name: "Implémentation complète",
    price: "997€",
    priceDetail: "Tout installé en 48h",
    description: "L'équipe Buildrs configure tout pour toi. Claude AI + Code + Cowork + Agents IA.",
    includes: [
      "Kit (97€) + Call (197€) inclus",
      "Audit complet",
      "3-5 Projects sur-mesure",
      "3-5 agents Cowork personnalisés",
      "Connexion de tous tes outils",
      "Session de prise en main (60 min)",
      "Support WhatsApp 14 jours",
    ],
    cta: "Réserver mon implémentation → 997€",
    badge: "MEILLEUR ROI",
    borderColor: "rgba(255,215,0,0.5)",
    buttonStyle: { background: "linear-gradient(135deg, #DA7756, #FF6B35)", color: "#FFFFFF" } as React.CSSProperties,
  },
  {
    id: "accompagnement",
    icon: "🚀",
    name: "Accompagnement Buildrs",
    price: "3 × 2 000€",
    priceDetail: "3 mois",
    description: "Transformation business complète. Agents IA = tes employés. Stratégie. Suivi.",
    includes: [
      "Implémentation (997€) + Kit inclus",
      "1 call groupe / semaine (90 min)",
      "1 call individuel / mois (45 min)",
      "Support WhatsApp illimité 3 mois",
      "Communauté privée cohorte",
      "Stratégie business + IA complémentaire",
      "8 places max par cohorte",
    ],
    cta: "Postuler →",
    badge: "PREMIUM",
    borderColor: "rgba(218,119,86,0.4)",
    buttonStyle: { background: "#EDEEEF", color: "#080909", border: "1px solid rgba(218,119,86,0.3)" } as React.CSSProperties,
  },
]

/* ─── Comparison table ─── */
const COMPARISON_HEADERS = ["", "Kit · 97€", "Call · 197€", "Implémentation · 997€", "Accompagnement · 3×2000€"]
const COMPARISON_ROWS = [
  ["Skills Buildrs", "✅", "✅", "✅", "✅"],
  ["Templates CLAUDE.md", "✅", "✅", "✅", "✅"],
  ["Config MCP", "✅", "✅", "✅", "✅"],
  ["Prompts optimisés", "✅", "✅", "✅", "✅"],
  ["Agents Cowork (templates)", "✅", "✅", "✅", "✅"],
  ["Communauté privée", "✅", "✅", "✅", "✅"],
  ["Mises à jour permanentes", "✅", "✅", "✅", "✅"],
  ["Call avec Alfred (60 min)", "—", "✅", "✅", "✅"],
  ["Setup personnalisé", "—", "✅", "✅", "✅"],
  ["Installation clé en main", "—", "—", "✅", "✅"],
  ["Agents IA sur-mesure", "—", "—", "✅", "✅"],
  ["Connexion outils complète", "—", "—", "✅", "✅"],
  ["Support WhatsApp", "—", "—", "14 jours", "3 mois"],
  ["Calls groupe hebdo", "—", "—", "—", "✅"],
  ["Call individuel mensuel", "—", "—", "—", "✅"],
  ["Stratégie business", "—", "—", "—", "✅"],
  ["Dashboards & KPIs", "—", "—", "—", "✅"],
]

/* ─── FAQ ─── */
const FAQ = [
  {
    q: "J'ai déjà le guide gratuit. Le Kit apporte quoi de plus ?",
    a: "Le guide t'explique QUOI faire. Le Kit te donne les FICHIERS exacts pour le faire en 10x moins de temps. Nos skills, configs, templates et prompts — prêts à copier.",
  },
  {
    q: "Quelle différence entre le Call (197€) et l'Implémentation (997€) ?",
    a: "Le Call = on fait ensemble en 1h (tu apprends + tu configures). L'Implémentation = on fait pour toi en 48h (tu ne fais rien). Le Call c'est \"done with you\", l'implémentation c'est \"done for you\".",
  },
  {
    q: "L'accompagnement à 6000€, c'est pour qui ?",
    a: "Pour les entrepreneurs qui veulent transformer leur business avec l'IA sur 3 mois. Pas juste configurer Claude — mais repenser leur activité, automatiser leurs process, et augmenter leur CA.",
  },
  {
    q: "Je peux upgrader plus tard ?",
    a: "Oui. Si tu prends le Kit (97€) et tu veux ensuite le Call, on déduit les 97€. Pareil pour l'implémentation. Chaque offre supérieure inclut les précédentes.",
  },
  {
    q: "Il faut quel abonnement Claude ?",
    a: "Minimum le plan Pro ($20/mois). On t'aide à choisir pendant le call ou l'implémentation.",
  },
]

/* ═══════════════════════════════════════ */
/*  OFFERS PAGE                            */
/* ═══════════════════════════════════════ */

export default function OffersPage() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div
      style={{
        background: "#080909",
        color: "#EDEEEF",
        fontFamily: "'Geist', sans-serif",
        fontSize: "14px",
        minHeight: "100vh",
        overflowY: "auto",
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
          background: "#080909",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              background: "none",
              border: "none",
              color: "rgba(237,238,239,0.5)",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Dashboard
          </button>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
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
          </a>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 96px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(218,119,86,0.85)",
              marginBottom: "12px",
            }}
          >
            🔥 OFFRES BUILDRS
          </div>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "36px",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Tu as compris la puissance de Claude.
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(237,238,239,0.5)", maxWidth: "480px", margin: "0 auto" }}>
            Maintenant, choisis comment tu veux avancer.
          </p>
        </div>

        {/* ─── Offer Cards ─── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              style={{
                background: "#111111",
                border: `1px solid ${offer.borderColor}`,
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              {/* Badge */}
              {offer.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    background: offer.id === "call"
                      ? "#DA7756"
                      : offer.id === "implementation"
                      ? "rgba(255,215,0,0.8)"
                      : "rgba(218,119,86,0.7)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {offer.badge}
                </span>
              )}

              {/* Icon + Name */}
              <div style={{ fontSize: "20px", marginBottom: "6px" }}>{offer.icon}</div>
              <h3
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                {offer.name}
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
                <span style={{ fontSize: "22px", fontWeight: 700, color: "#EDEEEF" }}>{offer.price}</span>
                <span style={{ fontSize: "12px", color: "rgba(237,238,239,0.4)" }}>{offer.priceDetail}</span>
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(237,238,239,0.55)", marginBottom: "20px" }}>
                {offer.description}
              </p>

              {/* Includes */}
              <div style={{ flex: 1, marginBottom: "20px" }}>
                {offer.includes.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "12px",
                      color: "rgba(237,238,239,0.6)",
                      marginBottom: "8px",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "rgba(74,222,128,0.7)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate("/auth")}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Geist', sans-serif",
                  transition: "opacity 0.15s",
                  ...offer.buttonStyle,
                }}
              >
                {offer.cta}
              </button>
            </div>
          ))}
        </div>

        {/* ─── Guarantee ─── */}
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "13px",
            color: "rgba(237,238,239,0.4)",
            marginBottom: "56px",
          }}
        >
          ✅ Satisfait ou remboursé 14 jours · Chaque offre supérieure inclut les précédentes
        </div>

        {/* ─── Comparison table ─── */}
        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "24px",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Comparatif détaillé
          </h2>

          <div
            style={{
              overflowX: "auto",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "12px",
                fontFamily: "'Geist', sans-serif",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr>
                  {COMPARISON_HEADERS.map((h, i) => (
                    <th
                      key={i}
                      style={{
                        textAlign: i === 0 ? "left" : "center",
                        padding: "12px 14px",
                        fontWeight: 600,
                        fontSize: "11px",
                        letterSpacing: "0.03em",
                        color: "rgba(237,238,239,0.6)",
                        background: "#111111",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        position: "sticky",
                        top: "52px",
                        zIndex: 2,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        style={{
                          textAlign: ci === 0 ? "left" : "center",
                          padding: "10px 14px",
                          color:
                            cell === "✅"
                              ? "rgba(74,222,128,0.8)"
                              : cell === "—"
                              ? "rgba(255,255,255,0.15)"
                              : "rgba(237,238,239,0.6)",
                          borderBottom:
                            ri < COMPARISON_ROWS.length - 1
                              ? "1px solid rgba(255,255,255,0.04)"
                              : "none",
                          background: ri % 2 === 0 ? "#0A0A0A" : "#0D0D0D",
                          fontSize: ci === 0 ? "12px" : "13px",
                          fontWeight: ci === 0 ? 500 : 400,
                          whiteSpace: "nowrap",
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
        </div>

        {/* ─── FAQ ─── */}
        <div style={{ maxWidth: "680px", margin: "0 auto", marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "24px",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Questions fréquentes
          </h2>

          {FAQ.map((faq, i) => {
            const isOpen = openFaq === i
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#EDEEEF",
                    textAlign: "left",
                  }}
                >
                  <span>{faq.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      flexShrink: 0,
                      marginLeft: "12px",
                      color: "rgba(237,238,239,0.3)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    style={{
                      paddingBottom: "16px",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      color: "rgba(237,238,239,0.55)",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ─── Final CTA ─── */}
        <div
          style={{
            textAlign: "center",
            padding: "40px 24px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: 500, marginBottom: "8px" }}>
            💬 Tu ne sais pas quelle offre choisir ?
          </p>
          <p style={{ fontSize: "13px", color: "rgba(237,238,239,0.5)", marginBottom: "20px" }}>
            Envoie-nous un message et on t'oriente en 2 minutes.
          </p>
          <a
            href="https://wa.me/33612345678"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#080909",
              background: "#EDEEEF",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
          >
            Nous contacter sur WhatsApp →
          </a>
        </div>

        {/* Footer note */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <img src={buildrsLogo} alt="Buildrs" style={{ width: "16px", height: "16px" }} />
            <span style={{ fontSize: "11px", color: "rgba(237,238,239,0.25)" }}>
              Buildrs Group · buildrs.fr
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
