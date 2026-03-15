import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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

  const ctaLabel = time.expired ? "Accéder pour 27€ →" : "Accéder gratuitement →";
  const mainText = time.expired
    ? "Offre expirée — Accès à 27€"
    : "🔓 Accès gratuit pendant 72h — ensuite 27€";

  return (
    <>
      <div
        className="urgency-banner"
        style={{
          position: "fixed",
          top: "64px", /* below header h-16 */
          left: 0,
          right: 0,
          zIndex: 40,
          width: "100%",
          padding: "10px 24px",
          background: "linear-gradient(90deg, #DA7756 0%, #FF6B35 50%, #DA7756 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          overflow: "hidden",
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
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
            animation: "urgency-shimmer 5s infinite",
            pointerEvents: "none",
          }}
        />

        {/* Main text */}
        <span
          className="urgency-text"
          style={{
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          {mainText}
        </span>

        {/* Countdown */}
        {!time.expired && (
          <span
            className="urgency-countdown"
            style={{
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 700,
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "0.5px",
              position: "relative",
              zIndex: 1,
              animation: "urgency-pulse 2s ease-in-out infinite",
            }}
          >
            {pad(time.hours)}h {pad(time.minutes)}m {pad(time.seconds)}s
          </span>
        )}

        {/* CTA Button */}
        <button
          onClick={handleClick}
          className="urgency-cta"
          style={{
            background: "#FFFFFF",
            color: "#0A0A0A",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            border: "none",
            transition: "opacity 0.2s",
            position: "relative",
            zIndex: 1,
            fontFamily: "'Geist', sans-serif",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {ctaLabel}
        </button>
      </div>

      <style>{`
        @keyframes urgency-shimmer {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }
        @keyframes urgency-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* ─── Mobile responsive ─── */
        @media (max-width: 640px) {
          .urgency-banner {
            flex-wrap: wrap !important;
            gap: 6px !important;
            padding: 8px 16px !important;
            justify-content: center !important;
          }
          .urgency-text {
            width: 100% !important;
            text-align: center !important;
            font-size: 12px !important;
            white-space: normal !important;
          }
          .urgency-countdown {
            font-size: 14px !important;
          }
          .urgency-cta {
            font-size: 12px !important;
            padding: 5px 14px !important;
          }
        }
      `}</style>
    </>
  );
}
