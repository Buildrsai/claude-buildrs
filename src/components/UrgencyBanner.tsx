import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Unlock, ArrowRight } from "lucide-react";

const STORAGE_KEY = "buildrs_first_visit_timestamp";
const DURATION_MS = 72 * 60 * 60 * 1000; // 72 hours

interface TimeRemaining {
  expired: boolean;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeRemaining(): TimeRemaining {
  let firstVisit = localStorage.getItem(STORAGE_KEY);

  if (!firstVisit) {
    firstVisit = Date.now().toString();
    localStorage.setItem(STORAGE_KEY, firstVisit);
  }

  const elapsed = Date.now() - parseInt(firstVisit);
  const remaining = DURATION_MS - elapsed;

  if (remaining <= 0) {
    return { expired: true, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    expired: false,
    hours: Math.floor(remaining / (1000 * 60 * 60)),
    minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((remaining % (1000 * 60)) / 1000),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export function UrgencyBanner() {
  const navigate = useNavigate();
  const [time, setTime] = useState<TimeRemaining>(getTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  const ctaLabel = time.expired ? "Accéder pour 27€" : "Accéder gratuitement";

  return (
    <>
      <div
        className="urgency-banner"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          zIndex: 40,
          width: "100%",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#0A0A0A",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Inner content bar */}
        <div
          style={{
            width: "100%",
            padding: "8px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            position: "relative",
            background: "linear-gradient(90deg, rgba(218,119,86,0.08) 0%, rgba(218,119,86,0.15) 50%, rgba(218,119,86,0.08) 100%)",
          }}
        >
          {/* Shimmer overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(218,119,86,0.08), transparent)",
              animation: "urgency-shimmer 5s infinite",
              pointerEvents: "none",
            }}
          />

          {/* Icon + Main text */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "22px",
                height: "22px",
                borderRadius: "6px",
                background: "rgba(218,119,86,0.15)",
                border: "1px solid rgba(218,119,86,0.25)",
                flexShrink: 0,
              }}
            >
              <Unlock size={12} color="#DA7756" strokeWidth={2.5} />
            </div>
            <span
              className="urgency-text"
              style={{
                color: "rgba(237,238,239,0.8)",
                fontSize: "13px",
                fontWeight: 400,
                whiteSpace: "nowrap",
                letterSpacing: "-0.01em",
              }}
            >
              {time.expired
                ? "Offre expirée — Accès à 27€"
                : "Offre limitée pendant 72h — après 27€"}
            </span>
          </div>

          {/* Countdown pill */}
          {!time.expired && (
            <span
              className="urgency-countdown"
              style={{
                color: "#DA7756",
                fontSize: "12px",
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "0.02em",
                position: "relative",
                zIndex: 1,
                padding: "3px 10px",
                borderRadius: "20px",
                background: "rgba(218,119,86,0.1)",
                border: "1px solid rgba(218,119,86,0.2)",
              }}
            >
              {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
            </span>
          )}

          {/* CTA Button */}
          <button
            onClick={handleClick}
            className="urgency-cta group"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "#DA7756",
              color: "#FFFFFF",
              padding: "5px 14px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              border: "none",
              transition: "all 0.2s",
              position: "relative",
              zIndex: 1,
              fontFamily: "'Geist', sans-serif",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#c56a4c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#DA7756")}
          >
            {ctaLabel}
            <ArrowRight size={13} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes urgency-shimmer {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }

        @media (max-width: 640px) {
          .urgency-banner > div {
            flex-wrap: wrap !important;
            gap: 6px !important;
            padding: 8px 16px !important;
            justify-content: center !important;
          }
          .urgency-text {
            font-size: 11px !important;
            white-space: normal !important;
            text-align: center !important;
          }
          .urgency-countdown {
            font-size: 11px !important;
          }
          .urgency-cta {
            font-size: 11px !important;
            padding: 4px 12px !important;
          }
        }
      `}</style>
    </>
  );
}
