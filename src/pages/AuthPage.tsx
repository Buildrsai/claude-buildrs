import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/integrations/supabase/client'
import { lovable } from '@/integrations/lovable/index'
import { toast } from 'sonner'
import claudeIcon from '@/assets/claude-icon.png'
import buildrsLogo from '@/assets/buildrs-logo.png'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    setLoading(true)
    const { error } = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: window.location.origin,
    })
    if (error) {
      toast.error("Erreur avec Google : " + error.message)
      setLoading(false)
    }
  }

  const handleEmailAuth = async () => {
    if (!email || !password) {
      toast.error("Remplis ton email et mot de passe")
      return
    }
    setLoading(true)
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        toast.error(error.message)
        setLoading(false)
      } else {
        navigate('/onboarding')
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      })
      if (error) {
        toast.error(error.message)
        setLoading(false)
      } else {
        toast.success("Compte créé ! Vérifie ton email pour confirmer.")
        setLoading(false)
      }
    }
  }

  // Listen for auth state changes
  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN') {
      navigate('/onboarding')
    }
  })

  return (
    <div
      style={{
        background: '#080909',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Geist', sans-serif",
        padding: '20px',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Blurred backdrop content */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          opacity: 0.08,
          userSelect: 'none',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '13px', color: '#EDEEEF' }}>Guide Claude · by Buildrs</div>
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: '52px',
            fontStyle: 'italic',
            color: '#EDEEEF',
            lineHeight: 1.1,
          }}
        >
          Maîtrise Claude
          <br />
          &amp; le VibeCoding
        </div>
        <div style={{ fontSize: '14px', color: '#EDEEEF' }}>
          Comprends Claude, installe Claude Code et construis ton premier Micro-SaaS
        </div>
      </div>

      {/* Dim overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(8,9,9,0.7)',
          backdropFilter: 'blur(6px)',
          zIndex: 1,
        }}
      />

      {/* Modal with animated border */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '380px',
          borderRadius: '15px',
          padding: '1px',
          background: 'transparent',
          overflow: 'hidden',
        }}
      >
        {/* Rotating gradient border */}
        <div
          className="animate-[spin_4s_linear_infinite]"
          style={{
            position: 'absolute',
            inset: '-50%',
            background: 'conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(255,255,255,0.15) 70%, rgba(200,180,255,0.3) 75%, rgba(255,200,150,0.2) 80%, rgba(255,255,255,0.15) 85%, transparent 95%, transparent 100%)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            background: '#0C0D0E',
            borderRadius: '14px',
            padding: '32px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
          }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.10)' }}>
              <img src={claudeIcon} alt="Claude" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              <span style={{ fontSize: '14px', color: 'rgba(237,238,239,0.7)', fontWeight: 500 }}>Claude</span>
            </div>
            <span style={{ fontSize: '14px', color: 'rgba(237,238,239,0.4)' }}>×</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.10)' }}>
              <img src={buildrsLogo} alt="Buildrs" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              <span style={{ fontSize: '14px', color: 'rgba(237,238,239,0.7)', fontWeight: 500 }}>Buildrs</span>
            </div>
          </div>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: '22px',
              fontWeight: 400,
              color: '#EDEEEF',
              marginBottom: '6px',
              letterSpacing: '-0.04em',
            }}
          >
            {isLogin ? 'Accède au guide' : 'Crée ton compte'}
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(237,238,239,0.4)', lineHeight: 1.5 }}>
            Gratuit · 16 chapitres · Résultats immédiats
          </p>
        </div>

        {/* Google button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '11px 16px',
            background: '#EDEEEF',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 600,
            color: '#080909',
            fontFamily: 'inherit',
            cursor: loading ? 'wait' : 'pointer',
            marginBottom: '20px',
            border: 'none',
            opacity: loading ? 0.7 : 1,
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continuer avec Google
        </button>

        {/* OR divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
          <span style={{ fontSize: '11px', color: 'rgba(237,238,239,0.25)', letterSpacing: '0.06em' }}>ou</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* Email input */}
        <div style={{ marginBottom: '10px' }}>
          <label
            style={{
              fontSize: '11px',
              fontWeight: 500,
              color: 'rgba(237,238,239,0.35)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ton@email.com"
            style={{
              width: '100%',
              background: '#111214',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '13px',
              color: '#EDEEEF',
              fontFamily: 'inherit',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Password input */}
        <div style={{ marginBottom: '10px' }}>
          <label
            style={{
              fontSize: '11px',
              fontWeight: 500,
              color: 'rgba(237,238,239,0.35)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: '100%',
              background: '#111214',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '13px',
              color: '#EDEEEF',
              fontFamily: 'inherit',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          onClick={handleEmailAuth}
          disabled={loading}
          style={{
            width: '100%',
            padding: '11px 16px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            color: 'rgba(237,238,239,0.6)',
            fontFamily: 'inherit',
            cursor: loading ? 'wait' : 'pointer',
            marginTop: '10px',
            marginBottom: '12px',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {isLogin ? "Se connecter →" : "Créer mon compte →"}
        </button>

        {/* Toggle login/signup */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '12px',
              color: 'rgba(237,238,239,0.4)',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {isLogin ? "Pas encore de compte ? Créer un compte" : "Déjà un compte ? Se connecter"}
          </button>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: 'rgba(237,238,239,0.22)', lineHeight: 1.55 }}>
            En continuant, tu acceptes les{' '}
            <a href="#" style={{ color: 'rgba(237,238,239,0.4)' }}>CGU</a>{' '}
            et la{' '}
            <a href="#" style={{ color: 'rgba(237,238,239,0.4)' }}>politique de confidentialité</a>.
            <br />
            Ton email ne sera jamais partagé.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
