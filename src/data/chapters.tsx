import { CalloutBox, CodeBlock, TableBlock, OfferCTA, type QuizQuestion } from "@/components/dashboard/ChapterComponents"

/* ─── Chapter Type ─── */
export interface Chapter {
  number: string
  title: string
  sidebarTitle?: string
  subtitle: string
  bloc: "Comprendre" | "Configurer" | "Supercharger" | "Exploiter"
  content: React.ReactNode
  quiz: QuizQuestion[]
  actionPlan: string[]
  isBonus?: boolean
}

/* ═══════════════════════════════════════ */
/* BLOC 1 — COMPRENDRE                    */
/* ═══════════════════════════════════════ */

const chapter01: Chapter = {
  number: "01",
  title: "Pourquoi Claude va tout changer pour toi",
  sidebarTitle: "Pourquoi Claude AI",
  subtitle: "L'IA a évolué. Ceux qui comprennent le nouvel écosystème prennent une longueur d'avance.",
  bloc: "Comprendre",
  actionPlan: [
    "Créer son compte Claude sur claude.ai",
    "Télécharger Claude Desktop (claude.ai/download)",
    "Choisir le plan Pro ($20/mois)",
    "Passer au chapitre 2",
  ],
  quiz: [
    {
      question: "L'écosystème Claude est composé de :",
      options: [
        "Un seul chatbot très performant",
        "Trois produits complémentaires : Claude AI (pense), Claude Code (construit), Cowork (automatise)",
        "Une suite bureautique IA",
      ],
      correctIndex: 1,
    },
    {
      question: "Le VibeCoding, c'est :",
      options: [
        "Un langage de programmation",
        "Construire des applications en décrivant ce qu'on veut en langage naturel",
        "Un framework JavaScript",
      ],
      correctIndex: 1,
    },
    {
      question: "Buildrs, c'est :",
      options: [
        "Une agence web classique",
        "Un accélérateur pour entrepreneurs augmentés par l'IA — écosystèmes Claude, agents autonomes, VibeCoding",
        "Un éditeur de logiciels",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>1.1 — L'IA en 2026 : le jeu a changé</h3>
      <p>
        Il y a 3 ans, on découvrait ChatGPT et on trouvait ça magique de poser une question et d'avoir une réponse. En 2026, ce n'est plus du tout le sujet.
      </p>
      <p>
        Aujourd'hui, l'IA construit des applications. L'IA gère des tâches en arrière-plan pendant que tu dors. L'IA analyse tes données, rédige ton contenu, automatise ta prospection, et déploie tes outils — sans que tu écrives une seule ligne de code.
      </p>
      <p>
        Et au centre de cette révolution, il y a Claude.
      </p>
      <p>
        Pas parce que c'est "le meilleur chatbot". Mais parce que c'est le seul écosystème complet : une intelligence qui pense avec toi (Claude AI), un agent qui construit pour toi (Claude Code), et un assistant autonome qui exécute pour toi (Cowork). Trois produits. Un seul cockpit.
      </p>
      <CalloutBox variant="important">
        La majorité des gens utilisent encore Claude comme un ChatGPT amélioré — ils posent des questions et copient-collent les réponses. C'est comme avoir une Tesla et ne jamais activer l'autopilot. Ce guide existe pour corriger ça.
      </CalloutBox>

      <h3>1.2 — Ce que ce guide va changer pour toi</h3>
      <p>
        Ce n'est pas un tutoriel. C'est une méthode.
      </p>
      <p>
        En 16 chapitres, tu vas passer de "j'ai un compte Claude" à "Claude gère une partie de mon business". Concrètement :
      </p>
      <p>
        Tu vas <strong>comprendre</strong> pourquoi l'écosystème Claude est différent de tout ce qui existe — et comment l'utiliser à 100% de son potentiel.
      </p>
      <p>
        Tu vas <strong>configurer</strong> Claude de façon optimale — les bons paramètres, les bons connecteurs, les bons outils — pour que chaque session soit productive dès la première seconde.
      </p>
      <p>
        Tu vas <strong>supercharger</strong> Claude avec des Skills, des MCP, des agents IA autonomes et un système de mémoire qui fait que Claude connaît ton business par cœur.
      </p>
      <p>
        Et tu vas découvrir comment des entrepreneurs utilisent cet écosystème pour <strong>automatiser leur quotidien</strong>, construire leurs propres produits, et <strong>générer du revenu</strong> — avec l'IA comme levier.
      </p>
      <p>
        Le plan d'action complet est dans le bonus. 28 étapes. De zéro à machine de guerre.
      </p>

      <h3>1.3 — Le VibeCoding : quand décrire suffit à construire</h3>
      <p>
        Un mot sur une révolution silencieuse qui est en train de changer les règles du jeu.
      </p>
      <p>
        Le VibeCoding, c'est construire des applications en décrivant ce qu'on veut — en français, en langage naturel. Tu dis "je veux un outil de facturation avec un dashboard et un paiement Stripe", et Claude Code le construit. Pas un mockup. Pas un wireframe. Une vraie application, fonctionnelle, déployée.
      </p>
      <p>
        Des entrepreneurs sans aucune expérience technique lancent des micro-SaaS — des petits logiciels en ligne vendus en abonnement — et génèrent du revenu récurrent. Le coût de développement ? Le prix de l'abonnement Claude.
      </p>
      <p>
        Ce guide ne te promet pas de devenir développeur. Il te montre que cette frontière n'existe plus.
      </p>

      <h3>1.4 — Buildrs : l'IA comme levier. Claude comme moteur.</h3>
      <p>
        Ce guide est créé par Buildrs.
      </p>
      <p>
        Buildrs aide les entrepreneurs à piloter leur business avec l'IA. On construit des écosystèmes IA complets avec Claude comme moteur central. On orchestre des agents intelligents et autonomes qui travaillent pour nos clients. Et on apprend aux entrepreneurs à créer leurs propres produits et business grâce au VibeCoding.
      </p>
      <p>
        Fondé par Alfred Orsini, Buildrs fonctionne avec +35 agents IA dont 20% tournent en autonomie totale, 24h/24. Rédaction, analyse, code review, veille concurrentielle, onboarding, reporting — ces agents gèrent l'opérationnel pendant qu'Alfred se concentre sur la stratégie et l'accompagnement.
      </p>
      <p>
        Ni agence classique. Ni formation théorique. Buildrs, c'est un accélérateur pour entrepreneurs augmentés par l'IA.
      </p>
      <CalloutBox variant="important">
        Ce guide n'est pas écrit par quelqu'un qui a lu la documentation. Il est construit par une équipe qui vit dans Claude au quotidien — qui build, déploie, et automatise avec, chaque jour, pour de vrais clients. Chaque conseil, chaque template, chaque recommandation vient du terrain.
      </CalloutBox>

      <h3>1.5 — Ce que Buildrs fait concrètement avec Claude (chaque jour)</h3>
      <p>
        Pour que tu comprennes la puissance de ce que tu vas apprendre, voici à quoi ressemble une journée type chez Buildrs :
      </p>
      <p>
        <strong>7h30</strong> — Un agent Cowork compile automatiquement le briefing du jour : emails non lus, messages de l'équipe, agenda, KPIs business de la veille. Alfred ouvre son Mac, tout est prêt.
      </p>
      <p>
        <strong>9h00</strong> — Alfred ouvre Claude AI avec son Project "Stratégie Buildrs" pour travailler sur le positionnement d'une offre client. Claude connaît déjà le contexte — pas besoin de re-briefer.
      </p>
      <p>
        <strong>10h00</strong> — Claude Code construit une nouvelle feature sur un micro-SaaS client. Le CLAUDE.md du projet contient toutes les conventions. Le code est cohérent avec le reste du projet, automatiquement.
      </p>
      <p>
        <strong>12h00</strong> — Un agent de veille concurrentielle livre son rapport quotidien : 3 concurrents analysés, changements de prix détectés, nouvelles features repérées.
      </p>
      <p>
        <strong>14h00</strong> — Un client reçoit son écosystème Claude implémenté en 48h : 5 Projects configurés, 4 agents Cowork planifiés, tous les connecteurs branchés. Il est autonome.
      </p>
      <p>
        <strong>17h00</strong> — L'agent "Week Review" prépare automatiquement le résumé de la semaine pour vendredi.
      </p>
      <p>
        Tout ça, c'est Claude. Configuré correctement. C'est exactement ce que ce guide t'apprend à faire.
      </p>
      <CalloutBox variant="action">
        Si tu n'as pas encore de compte Claude, crée-le maintenant sur claude.ai. Choisis le plan Pro ($20/mois) pour accéder à toutes les fonctionnalités dont on parle dans ce guide. Et télécharge Claude Desktop sur claude.ai/download — c'est indispensable pour la suite.
      </CalloutBox>

      {/* Diagramme — L'écosystème Buildrs */}
      <div
        style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(237,238,239,0.35)",
            marginBottom: "20px",
          }}
        >
          🗺️ L'écosystème Buildrs
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Alfred — Pilote */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "rgba(218,119,86,0.15)",
                border: "1px solid rgba(218,119,86,0.3)",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#DA7756",
                textAlign: "center",
              }}
            >
              Alfred — Pilote
            </div>
          </div>
          {/* Flèche */}
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.15)", fontSize: "16px" }}>↓</div>
          {/* 35+ Agents */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(237,238,239,0.7)",
                textAlign: "center",
              }}
            >
              35+ Agents IA
            </div>
          </div>
          {/* Split */}
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,215,0,0.3)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(255,215,0,0.8)",
                  marginBottom: "6px",
                }}
              >
                20% Autonomes 24/7
              </div>
              <p style={{ fontSize: "11px", color: "rgba(237,238,239,0.4)", margin: 0 }}>
                Veille · Reporting · Code Review · Onboarding
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(237,238,239,0.6)",
                  marginBottom: "6px",
                }}
              >
                80% Assistés
              </div>
              <p style={{ fontSize: "11px", color: "rgba(237,238,239,0.4)", margin: 0 }}>
                Stratégie · Contenu · Build · Support
              </p>
            </div>
          </div>
          {/* Flèche */}
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.15)", fontSize: "16px" }}>↓</div>
          {/* Clients */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {["Maîtriser Claude", "Automatiser avec des agents", "Construire leurs produits"].map((label) => (
              <div
                key={label}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(218,119,86,0.25)",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(218,119,86,0.8)",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  ),
}

const chapter02: Chapter = {
  number: "02",
  title: "3 produits. Un seul écosystème. Zéro limite.",
  sidebarTitle: "L'écosystème Claude",
  subtitle: "Claude AI pense. Claude Code construit. Cowork exécute. Ensemble, ils remplacent une équipe.",
  bloc: "Comprendre",
  actionPlan: [
    "Identifier lequel des 3 produits correspond à ton besoin immédiat",
    "Entrepreneur / freelance → commence par Claude AI + Cowork",
    "Tu veux builder des produits → ajoute Claude Code",
    "Passer au chapitre 3",
  ],
  quiz: [
    {
      question: "Tu veux automatiser un rapport hebdomadaire sans coder. Quel produit ?",
      options: ["Claude AI", "Claude Code", "Claude Cowork avec tâches planifiées"],
      correctIndex: 2,
    },
    {
      question: "Claude Code se distingue de Claude AI parce que :",
      options: ["Il est plus intelligent", "Il a accès complet au projet, exécute des commandes, et peut déployer des applications", "Il est gratuit"],
      correctIndex: 1,
    },
    {
      question: "La vraie puissance de l'écosystème Claude vient de :",
      options: ["La vitesse de réponse", "La combinaison des 3 produits : penser + construire + automatiser", "Le prix de l'abonnement"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>2.1 — Claude AI : ton intelligence à la demande</h3>
      <p>
        Claude AI, c'est l'interface que tu connais peut-être déjà — le chat. Mais en 2026, c'est devenu bien plus qu'un endroit où poser des questions.
      </p>
      <p>
        Imagine un collaborateur qui connaît ton business par cœur, qui se souvient de chaque conversation, qui a accès à tes documents, tes emails, ton agenda — et qui peut créer des fichiers, des présentations, des outils directement dans la discussion.
      </p>
      <p>
        C'est ça, Claude AI aujourd'hui.
      </p>
      <p>Les fonctionnalités qui changent tout :</p>
      <p>
        <strong>Mémoire persistante</strong> — Claude se souvient de toi d'une session à l'autre. Ton nom, ton activité, tes préférences, tes projets en cours. Plus tu l'utilises, plus il est pertinent.
      </p>
      <p>
        <strong>Projects</strong> — Des espaces dédiés avec un brief permanent et des documents de référence. Tu crées un Project "Mon Business" et chaque conversation dans cet espace est déjà contextualisée. Fini de re-briefer à chaque fois.
      </p>
      <p>
        <strong>Connecteurs</strong> — Claude se branche directement à Google Drive, Gmail, Slack, Notion, Calendar, Figma, Stripe. Il ne travaille plus en vase clos — il accède à tes outils et agit dedans.
      </p>
      <p>
        <strong>Artefacts</strong> — Claude crée des documents, des tableurs, des présentations, des applications React, directement dans la conversation. Tu demandes, il livre.
      </p>

      <h3>2.2 — Claude Code : ton builder personnel</h3>
      <p>
        Claude Code, c'est là que ça devient puissant.
      </p>
      <p>
        C'est un agent qui vit dans ton terminal (ou dans un éditeur de code). Tu le lances dans un dossier de projet, et il a accès à tout : il lit les fichiers, les modifie, en crée de nouveaux, installe des dépendances, lance des serveurs, et déploie ton application.
      </p>
      <p>
        La différence avec Claude AI : Claude AI travaille avec ce que tu lui donnes. Claude Code voit tout et agit sur tout.
      </p>
      <p>Ce qui le rend unique :</p>
      <p>
        <strong>Construction réelle</strong> — Il ne suggère pas du code dans un chat. Il crée des fichiers, exécute des commandes, et te montre le résultat en preview live. Tu vois ton app se construire en temps réel.
      </p>
      <p>
        <strong>Skills & Plugins</strong> — Tu peux lui installer des compétences spécialisées. Frontend-design pour des interfaces premium. SuperPowers pour le brainstorming et le debugging. Code-review pour que 4 agents analysent ton code en parallèle.
      </p>
      <p>
        <strong>MCP</strong> — Des connexions directes à GitHub, Supabase, Stripe, et des centaines d'autres services. Claude Code ne travaille pas en isolation — il interagit avec ta stack complète.
      </p>
      <p>
        <strong>Subagents</strong> — Claude Code peut déléguer des sous-tâches à d'autres agents qui travaillent en parallèle. Un agent construit le frontend pendant qu'un autre configure la base de données.
      </p>
      <p>
        <strong>CLAUDE.md</strong> — Un fichier de mémoire par projet. Claude Code le lit à chaque session et connaît le contexte, les conventions, le design system — sans que tu réexpliques quoi que ce soit.
      </p>

      <h3>2.3 — Claude Cowork : ton équipe qui ne dort jamais</h3>
      <p>
        Cowork, c'est la pièce qui transforme tout.
      </p>
      <p>
        C'est un agent autonome dans Claude Desktop. Tu lui décris un résultat, il planifie les étapes, exécute, et te livre le travail fini. Il accède à tes fichiers locaux, utilise tes connecteurs, et peut même coordonner plusieurs sous-agents en parallèle.
      </p>
      <p>
        Mais la vraie révolution, c'est les <strong>tâches planifiées</strong>.
      </p>
      <p>
        Tu programmes une tâche une seule fois — avec une fréquence (quotidien, hebdo, horaire) — et Cowork l'exécute automatiquement. Chaque matin. Chaque lundi. Chaque vendredi à 17h. Sans que tu fasses quoi que ce soit.
      </p>
      <p>
        C'est comme avoir des employés qui travaillent 24/7, qui ne tombent jamais malades, qui n'oublient jamais rien, et qui coûtent $20/mois.
      </p>
      <p>Des exemples concrets :</p>
      <ul>
        <li>Un briefing matinal qui compile tes emails, tes messages Slack et ton agenda</li>
        <li>Un rapport hebdomadaire généré automatiquement chaque lundi</li>
        <li>Une veille concurrentielle quotidienne livrée à midi</li>
        <li>Un résumé de la semaine prêt vendredi soir sans que tu lèves le petit doigt</li>
      </ul>

      <h3>2.4 — Comment les 3 travaillent ensemble</h3>
      <p>
        La vraie puissance, c'est quand les 3 produits collaborent sur le même objectif.
      </p>
      <p>
        <strong>Tu réfléchis</strong> avec Claude AI — stratégie, brainstorming, contenu, analyse. Claude connaît ton business grâce aux Projects et à la mémoire.
      </p>
      <p>
        <strong>Tu construis</strong> avec Claude Code — applications, outils, sites, micro-SaaS. Claude Code a le contexte grâce au CLAUDE.md et les connexions grâce aux MCP.
      </p>
      <p>
        <strong>Tu automatises</strong> avec Cowork — les tâches récurrentes, le reporting, la veille, le contenu. Cowork tourne en arrière-plan avec les tâches planifiées.
      </p>
      <p>
        C'est un seul écosystème. Un seul abonnement. Et ça remplace ce qui nécessiterait autrement un assistant, un développeur et un automaticien.
      </p>

      {/* ── Diagramme : Les 3 produits en action ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          Les 3 produits en action
        </p>
        {/* Top: TON BUSINESS */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            TON BUSINESS
          </div>
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* 3 columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
          {[
            { label: "Claude AI", action: "Tu réfléchis", desc: "Stratégie · Contenu · Analyse" },
            { label: "Claude Code", action: "Tu construis", desc: "Apps · Sites · Outils · SaaS" },
            { label: "Cowork", action: "Tu automatises", desc: "Tâches auto · Rapports · Veille" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" as const }}>
              <div style={{
                padding: "10px 8px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                marginBottom: "8px",
              }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#EDEEEF", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "10px", color: "rgba(237,238,239,0.4)" }}>{item.desc}</div>
              </div>
              <div style={{ fontSize: "11px", fontWeight: 500, color: "rgba(218,119,86,0.8)" }}>{item.action}</div>
            </div>
          ))}
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Bottom: Result */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Un business piloté par l'IA
          </div>
        </div>
      </div>

      <CalloutBox variant="important">
        La plupart des gens n'utilisent qu'un seul des trois produits — généralement Claude AI en mode chat. C'est comme n'utiliser que le volant d'une voiture sans jamais démarrer le moteur. La puissance vient de la combinaison.
      </CalloutBox>

      <h3>2.5 — Comment on utilise les 3 chez Buildrs</h3>
      <p>
        Chez Buildrs, les 3 produits tournent en parallèle sur chaque projet client.
      </p>
      <p>
        <strong>Claude AI</strong> — Alfred a un Project dédié par client avec le brief, le positionnement, l'historique. Quand il travaille sur la stratégie d'un client, Claude est déjà aligné en 0 seconde.
      </p>
      <p>
        <strong>Claude Code</strong> — Chaque projet a son CLAUDE.md avec la stack technique, les conventions, le design system. Quand on build une feature, Claude Code produit du code cohérent avec le reste du projet sans qu'on ait besoin de superviser le style.
      </p>
      <p>
        <strong>Cowork</strong> — 7 agents planifiés tournent en continu : briefing matinal, rapport client hebdo, veille IA, content planning, suivi facturation, review de la semaine, surveillance concurrentielle. Ces 7 "employés" coûtent le prix d'un abo Pro.
      </p>
      <CalloutBox variant="buildrs">
        Le résultat : Buildrs opère comme une structure de 15 personnes — avec 2 humains et 35 agents.
      </CalloutBox>
    </>
  ),
}

const chapter03: Chapter = {
  number: "03",
  title: "Utilise le bon modèle au bon moment",
  sidebarTitle: "Modèles & Tokens",
  subtitle: "Divise par 3 tes coûts et double la qualité de tes résultats.",
  bloc: "Comprendre",
  actionPlan: [
    "Rester sur Sonnet 4.6 par défaut",
    "Switcher sur Haiku pour les tâches simples",
    "Réserver Opus + Extended Thinking pour la stratégie (2-3x/jour max)",
    "Passer au chapitre 4",
  ],
  quiz: [
    {
      question: "Tu dois résumer un article de 500 mots. Quel modèle ?",
      options: ["Opus 4.6", "Sonnet 4.6", "Haiku"],
      correctIndex: 2,
    },
    {
      question: "L'Extended Thinking sert à :",
      options: ["Accélérer Claude", "Permettre à Claude de réfléchir étape par étape avant de répondre, pour des résultats plus profonds", "Réduire la consommation de tokens"],
      correctIndex: 1,
    },
    {
      question: "La règle Buildrs pour les modèles c'est :",
      options: ["Toujours utiliser Opus pour tout", "Haiku pour le mécanique, Sonnet pour 80% du quotidien, Opus 2-3x/jour en Extended Thinking", "Alterner aléatoirement entre les 3"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>3.1 — 3 modèles, 3 niveaux de puissance</h3>
      <p>
        Quand tu utilises Claude, tu ne parles pas toujours au même "cerveau". Anthropic propose 3 modèles, chacun calibré pour un type de tâche. Choisir le bon au bon moment, c'est la différence entre cramer ton quota en 2 heures et tenir toute la journée avec des résultats supérieurs.
      </p>
      <p>Pense à une entreprise avec 3 profils :</p>
      <p>
        <strong>Haiku — L'exécutant ultra-rapide.</strong> Il fait le boulot simple en un clin d'œil. Résumer un texte, reformuler un email, classer des données, trier des infos. Il ne réfléchit pas en profondeur — il exécute vite et bien. Et il consomme très peu de tokens.
      </p>
      <p>
        <strong>Sonnet 4.6 — Le bras droit polyvalent.</strong> C'est lui que tu utilises 80% du temps. Il rédige du contenu de qualité, analyse des documents, code des applications, gère des conversations complexes. Le meilleur rapport entre intelligence, vitesse et coût. C'est le modèle par défaut de Claude Code et de Cowork — et c'est pas un hasard.
      </p>
      <p>
        <strong>Opus 4.6 — Le stratège.</strong> Le plus intelligent. Le plus profond. Celui que tu appelles quand il faut réfléchir vraiment : architecture d'un projet complexe, décision stratégique, analyse de marché en profondeur. Il prend plus de temps, consomme plus de tokens — mais la qualité de raisonnement est sur un autre niveau.
      </p>
      <CalloutBox variant="important">
        La majorité des utilisateurs laissent le modèle par défaut et ne changent jamais. Résultat : ils utilisent Sonnet pour résumer un email de 3 lignes (gaspillage) ou pire, ils n'activent jamais Opus quand ils ont une décision critique à prendre (sous-performance). Savoir switcher, c'est un superpouvoir.
      </CalloutBox>

      <h3>3.2 — Les tokens : comprendre ta "monnaie" IA</h3>
      <p>
        Chaque mot que tu envoies à Claude et chaque mot qu'il génère consomme des tokens. C'est la monnaie de l'IA.
      </p>
      <p>Quelques repères :</p>
      <ul>
        <li>1 mot français ≈ 1.3 tokens</li>
        <li>Un email de 200 mots ≈ 260 tokens</li>
        <li>Une conversation longue peut atteindre 10 000 à 100 000 tokens</li>
      </ul>
      <p>
        Avec le <strong>plan Pro</strong> ($20/mois), tu as une allocation quotidienne. Si tu l'atteins, Claude passe en mode dégradé — modèle plus lent, réponses moins riches. Pas idéal quand tu es en plein build.
      </p>
      <p>
        Avec le <strong>plan Max</strong> ($100/mois), cette limite saute. Tu ne penses plus aux tokens. C'est l'option si tu utilises Claude Code intensivement.
      </p>
      <p>
        La clé pour ne jamais être limité, même en Pro : <strong>utiliser le bon modèle pour chaque tâche.</strong> Haiku pour le simple, Sonnet pour le quotidien, Opus pour le stratégique. C'est comme ça qu'on triple l'efficacité sans tripler le budget.
      </p>

      <h3>3.3 — Le guide pratique : quel modèle pour quelle situation</h3>
      <p><strong>Utilise Haiku quand :</strong></p>
      <ul>
        <li>Tu résumes un article ou un document</li>
        <li>Tu reformules un email ou un message</li>
        <li>Tu classes, tries ou extrais des données</li>
        <li>Tu fais des tâches répétitives en volume</li>
      </ul>
      <p style={{ fontSize: "13px", color: "rgba(237,238,239,0.5)", marginTop: "-4px" }}>
        → Rapide, économique, pas besoin de réflexion profonde.
      </p>

      <p><strong>Utilise Sonnet 4.6 quand :</strong></p>
      <ul>
        <li>Tu rédiges du contenu (posts, articles, pages de vente)</li>
        <li>Tu codes une application avec Claude Code</li>
        <li>Tu analyses un document complexe</li>
        <li>Tu planifies des features ou des workflows</li>
        <li>Tu lances des tâches Cowork planifiées</li>
      </ul>
      <p style={{ fontSize: "13px", color: "rgba(237,238,239,0.5)", marginTop: "-4px" }}>
        → C'est ton défaut. 80% de ton usage sera ici.
      </p>

      <p><strong>Utilise Opus 4.6 quand :</strong></p>
      <ul>
        <li>Tu travailles sur une stratégie business</li>
        <li>Tu prends une décision d'architecture technique</li>
        <li>Tu analyses un marché en profondeur</li>
        <li>Tu as besoin que Claude "réfléchisse vraiment" avant de répondre</li>
      </ul>
      <p style={{ fontSize: "13px", color: "rgba(237,238,239,0.5)", marginTop: "-4px" }}>
        → Active l'Extended Thinking. Réserve Opus pour 2-3 sessions par jour, max.
      </p>

      <h3>3.4 — L'Extended Thinking : quand Claude prend le temps de réfléchir</h3>
      <p>
        Opus 4.6 et Sonnet 4.6 ont une fonctionnalité que la plupart des utilisateurs ignorent : le mode Extended Thinking.
      </p>
      <p>
        Au lieu de répondre immédiatement, Claude prend le temps de structurer sa réflexion étape par étape avant de formuler sa réponse. C'est la différence entre quelqu'un qui te répond du tac au tac et quelqu'un qui prend 30 secondes pour organiser sa pensée.
      </p>
      <p>
        Le résultat est significativement meilleur sur les problèmes complexes — architecture de projet, stratégie business, analyse de données, debugging d'un problème technique épineux.
      </p>
      <p>
        <strong>Quand l'activer :</strong> dès que ta demande nécessite du raisonnement en profondeur. Pas pour résumer un email — pour construire un plan de lancement.
      </p>

      <h3>3.5 — La règle Buildrs : comment on gère nos modèles au quotidien</h3>
      <p>
        Chez Buildrs, on a une règle simple qu'Alfred applique chaque jour :
      </p>
      <p>
        <strong>Haiku</strong> — Pour tout ce qui est mécanique. Les agents Cowork qui font du tri, du classement, des résumés courts. Les messages internes. Les tâches de reformulation. On ne gaspille jamais du Sonnet sur une tâche que Haiku peut faire aussi bien.
      </p>
      <p>
        <strong>Sonnet 4.6</strong> — Pour 80% du travail réel. Le contenu des clients, le code des projets, les analyses de documents, les conversations stratégiques de niveau intermédiaire. C'est le modèle par défaut partout — Claude AI, Claude Code, et les agents Cowork.
      </p>
      <p>
        <strong>Opus 4.6</strong> — Alfred l'utilise 2-3 fois par jour, maximum. Toujours en Extended Thinking. Pour les décisions d'architecture sur les projets clients, les stratégies go-to-market, et les moments où il faut que Claude creuse vraiment un sujet avant de répondre.
      </p>
      <p>
        Le résultat de cette discipline : on a divisé par 3 notre consommation de tokens par rapport à quand on utilisait Sonnet pour tout. La qualité n'a pas bougé — elle a même augmenté, parce qu'Opus sur les bons sujets donne des résultats qu'aucun autre modèle ne peut atteindre.
      </p>

      {/* ── Diagramme : La règle des modèles ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          La règle des modèles
        </p>
        {/* Top: TA TÂCHE */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#EDEEEF",
            textAlign: "center" as const,
          }}>
            Ta tâche → Complexité ?
          </div>
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* 3 columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
          {[
            { label: "Haiku", type: "Simple · Mécanique · Volume", tokens: "~10% de tes tokens", color: "rgba(74,222,128,0.7)", bg: "rgba(74,222,128,0.08)", border: "rgba(74,222,128,0.2)" },
            { label: "Sonnet 4.6", type: "Quotidien · Contenu · Code", tokens: "~70% de tes tokens", color: "#DA7756", bg: "rgba(218,119,86,0.08)", border: "rgba(218,119,86,0.2)" },
            { label: "Opus 4.6", type: "Stratégique · Architecture", tokens: "~20% de tes tokens", color: "rgba(168,130,255,0.8)", bg: "rgba(168,130,255,0.08)", border: "rgba(168,130,255,0.2)" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" as const }}>
              <div style={{
                padding: "12px 8px",
                background: item.bg,
                border: `1px solid ${item.border}`,
                borderRadius: "8px",
                marginBottom: "8px",
              }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: item.color, marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "10px", color: "rgba(237,238,239,0.4)", lineHeight: "1.4" }}>{item.type}</div>
              </div>
              <div style={{ fontSize: "11px", fontWeight: 500, color: "rgba(237,238,239,0.5)" }}>{item.tokens}</div>
            </div>
          ))}
        </div>
      </div>

      <CalloutBox variant="action">
        Dans Claude AI, le sélecteur de modèle est en bas à gauche de la zone de chat. Change-le en fonction de la tâche. Règle simple : si la tâche prend moins de 30 secondes à expliquer, c'est Haiku. Si c'est du travail quotidien, Sonnet. Si c'est stratégique, Opus + Extended Thinking.
      </CalloutBox>
    </>
  ),
}

const chapter04: Chapter = {
  number: "04",
  title: "10 minutes pour un Claude opérationnel",
  sidebarTitle: "Setup en 10 min",
  subtitle: "Le bon abonnement, les bons paramètres — tu repars avec un Claude qui travaille vraiment.",
  bloc: "Comprendre",
  actionPlan: [
    "Souscrire au plan Pro ($20/mois)",
    "Installer Claude Desktop",
    "Activer Mémoire + Web + Code + Fichiers",
    "Connecter Google Drive + Gmail",
    "Faire la conversation de calibration",
    "Installer l'extension Chrome",
    "Passer au chapitre 5",
  ],
  quiz: [
    {
      question: "Pourquoi Claude Desktop est indispensable ?",
      options: ["Il est plus joli que le navigateur", "C'est le seul accès à Cowork, aux tâches planifiées, aux fichiers locaux et aux plugins", "Il est plus rapide"],
      correctIndex: 1,
    },
    {
      question: "Quel plan pour suivre ce guide ?",
      options: ["Free", "Pro ($20/mois)", "Enterprise"],
      correctIndex: 1,
    },
    {
      question: "Les 4 paramètres à activer en priorité :",
      options: ["Thème sombre, police grande, notifications, langue", "Mémoire, recherche web, exécution de code, création de fichiers", "GPS, Bluetooth, NFC, mode avion"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>4.1 — Choisir le bon plan (sans réfléchir 3 heures)</h3>
      <p>
        C'est simple. Il y a 5 plans, mais tu n'as besoin de connaître que 2 :
      </p>
      <p>
        <strong>Pro — $20/mois</strong> — C'est celui qu'on recommande pour 90% des gens. Il débloque tout : Claude AI complet, Claude Code, Cowork avec les tâches planifiées, tous les modèles (Haiku, Sonnet, Opus), tous les connecteurs. C'est le plan pour suivre ce guide et commencer à exploiter Claude sérieusement.
      </p>
      <p>
        <strong>Max — $100/mois</strong> — Pour ceux qui utilisent Claude Code intensivement. La différence : tu ne seras jamais limité. Si tu codes tous les jours, si tu lances des builds de plusieurs heures, si tu as 10 agents Cowork qui tournent en parallèle — c'est le Max qu'il te faut. Sinon, le Pro suffit largement.
      </p>
      <p>Les autres plans en bref :</p>
      <ul>
        <li><strong>Free</strong> — Très limité, pas de Cowork, pas de tâches planifiées. Pour tester 5 minutes, pas pour travailler.</li>
        <li><strong>Team</strong> ($30/user/mois) — Si tu es une équipe qui veut collaborer sur Claude.</li>
        <li><strong>Enterprise</strong> (sur devis) — Grandes entreprises, SSO, conformité.</li>
      </ul>
      <CalloutBox variant="important">
        Beaucoup de gens restent sur le plan Free et se disent "Claude c'est moyen". Non — Claude Free c'est moyen. Claude Pro c'est un autre monde. C'est la différence entre la version d'essai d'un logiciel et la version complète. $20/mois pour un assistant qui travaille 24h/24, c'est l'investissement le plus rentable que tu feras cette année.
      </CalloutBox>

      <h3>4.2 — Installer Claude Desktop (obligatoire)</h3>
      <p>
        Ce point est crucial : <strong>le navigateur web ne suffit pas.</strong>
      </p>
      <p>
        Claude dans le navigateur (claude.ai), c'est bien pour du chat rapide. Mais tu n'as pas accès à Cowork, pas aux tâches planifiées, pas à tes fichiers locaux, pas aux plugins. C'est Claude en mode limité.
      </p>
      <p>
        Claude Desktop, c'est Claude en mode professionnel. C'est là que tout se passe.
      </p>
      <p><strong>L'installation prend 2 minutes :</strong></p>
      <ol>
        <li>Va sur <strong>claude.ai/download</strong></li>
        <li>Télécharge la version Mac ou Windows</li>
        <li>Installe et connecte-toi avec ton compte</li>
        <li>Tu as maintenant accès à Chat + Cowork + Connecteurs + Plugins</li>
      </ol>
      <p>
        À partir de maintenant, oublie le navigateur. Travaille dans Claude Desktop.
      </p>

      <h3>4.3 — Les 4 paramètres à activer immédiatement</h3>
      <p>
        Ouvre Claude Desktop. Va dans Settings. Active ces 4 choses :
      </p>
      <p>
        <strong>Mémoire — ON.</strong> Claude va commencer à retenir des choses sur toi : ton nom, ton activité, tes préférences, tes projets. Plus tu l'utilises, plus il devient pertinent. Sans la mémoire, chaque conversation repart de zéro.
      </p>
      <p>
        <strong>Recherche web — ON.</strong> Claude accède à des informations en temps réel. Il peut chercher des données, vérifier des faits, trouver des sources. Sans ça, il est limité à ses connaissances d'entraînement.
      </p>
      <p>
        <strong>Exécution de code — ON.</strong> Claude peut tester du code, faire des calculs, manipuler des données directement dans la conversation. Indispensable dès que tu travailles avec des chiffres ou du développement.
      </p>
      <p>
        <strong>Création de fichiers — ON.</strong> Claude génère des documents Word, des tableurs Excel, des présentations, des PDFs — directement téléchargeables. Sans cette option, tu dois tout copier-coller manuellement.
      </p>
      <p>
        Ces 4 activations prennent 30 secondes. Elles multiplient par 10 ce que Claude peut faire pour toi.
      </p>

      <h3>4.4 — Le setup Buildrs en 10 minutes chrono</h3>
      <p>
        Voici exactement ce qu'on fait chez Buildrs quand on onboarde un client ou quand Alfred configure un nouveau compte :
      </p>
      <p>
        <strong>Minute 0-2 :</strong> Souscription au plan Pro. Téléchargement et installation de Claude Desktop. Connexion.
      </p>
      <p>
        <strong>Minute 2-4 :</strong> Activation des 4 paramètres (mémoire, web, code, fichiers). C'est fait en 30 secondes mais on vérifie que tout est bien ON.
      </p>
      <p>
        <strong>Minute 4-7 :</strong> Configuration des connecteurs essentiels (on verra le détail au chapitre 6, mais voici le minimum vital) :
      </p>
      <ul>
        <li>Google Drive → Claude accède à tes documents</li>
        <li>Gmail → Claude lit et rédige tes emails</li>
      </ul>
      <p>Chaque connecteur = 1 clic, autorisation OAuth, c'est branché.</p>
      <p>
        <strong>Minute 7-9 :</strong> Première conversation de calibration. On dit à Claude :
      </p>
      <p style={{ fontStyle: "italic", color: "rgba(237,238,239,0.6)", padding: "8px 16px", borderLeft: "2px solid rgba(255,255,255,0.1)" }}>
        "Je m'appelle [Prénom]. Je suis [activité]. Mon audience c'est [cible]. Mon ton est [style]. Souviens-toi de ces informations."
      </p>
      <p>Claude mémorise. À partir de maintenant, il te connaît.</p>
      <p>
        <strong>Minute 9-10 :</strong> Installation de l'extension Chrome "Claude in Chrome" depuis le Chrome Web Store. Claude peut maintenant naviguer sur le web et agir sur les sites.
      </p>
      <p>
        C'est tout. 10 minutes. Ton Claude est passé de "chatbot générique" à "assistant personnel configuré pour toi".
      </p>

      {/* ── Diagramme : Le setup en 10 minutes ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          Le setup en 10 minutes
        </p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
          {[
            { time: "0-2 min", label: "Pro + Desktop", color: "rgba(237,238,239,0.6)" },
            { time: "2-4 min", label: "4 paramètres ON", color: "rgba(237,238,239,0.6)" },
            { time: "4-7 min", label: "Drive + Gmail connectés", color: "rgba(237,238,239,0.6)" },
            { time: "7-9 min", label: "Conversation de calibration", color: "rgba(237,238,239,0.6)" },
            { time: "9-10 min", label: "Extension Chrome", color: "rgba(237,238,239,0.6)" },
          ].map((step, i) => (
            <div key={step.time} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "64px",
                flexShrink: 0,
                fontSize: "11px",
                fontWeight: 600,
                color: "rgba(218,119,86,0.8)",
                textAlign: "right" as const,
                fontVariantNumeric: "tabular-nums",
              }}>
                {step.time}
              </div>
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: i === 4 ? "#DA7756" : "rgba(255,255,255,0.15)",
                border: i === 4 ? "none" : "1px solid rgba(255,255,255,0.1)",
                flexShrink: 0,
              }} />
              <div style={{
                flex: 1,
                padding: "8px 14px",
                background: i === 4 ? "rgba(218,119,86,0.08)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${i === 4 ? "rgba(218,119,86,0.2)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "6px",
                fontSize: "12px",
                color: i === 4 ? "#DA7756" : step.color,
                fontWeight: i === 4 ? 600 : 400,
              }}>
                {step.label}{i === 4 ? " → Claude opérationnel ✅" : ""}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CalloutBox variant="action">
        Fais-le maintenant. Littéralement. Ouvre un nouvel onglet, va sur claude.ai/download, installe, active les 4 paramètres, connecte Drive et Gmail. Chronomètre-toi — tu verras que 10 minutes c'est même large.
      </CalloutBox>
    </>
  ),
}

/* ═══════════════════════════════════════ */
/* BLOC 2 — CONFIGURER                    */
/* ═══════════════════════════════════════ */

const chapter05: Chapter = {
  number: "05",
  title: "Donne des instructions que Claude n'oublie jamais",
  sidebarTitle: "Prompts & Projects",
  subtitle: "Avec les Projects et la mémoire, Claude connaît ton business par cœur.",
  bloc: "Configurer",
  actionPlan: [
    "Créer le Project \"Mon Business\" avec prompt système de 10-15 lignes",
    "Ajouter 1-2 documents de référence",
    "Créer le Project \"Contenu\" si tu produis du contenu",
    "Configurer ta mémoire avec tes infos de base",
    "Passer au chapitre 6",
  ],
  quiz: [
    {
      question: "Un bon prompt contient :",
      options: ["Sujet, Longueur, Langue, Date", "Rôle, Contexte, Tâche, Format", "Question, Réponse, Source"],
      correctIndex: 1,
    },
    {
      question: "Un Project Claude, c'est :",
      options: ["Un dossier GitHub", "Un espace avec prompt permanent + documents de référence + conversations isolées", "Un projet Notion"],
      correctIndex: 1,
    },
    {
      question: "Chez Buildrs, les Projects permettent de :",
      options: ["Décorer l'interface Claude", "Passer d'un contexte à l'autre en un clic sans jamais re-briefer Claude", "Partager des fichiers avec des clients"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>5.1 — Pourquoi 90% des gens obtiennent des résultats médiocres avec Claude</h3>
      <p>
        Ce n'est pas Claude le problème. C'est la façon dont on lui parle.
      </p>
      <p>
        La majorité des utilisateurs écrivent des instructions comme ça :
      </p>
      <p style={{ fontStyle: "italic", color: "rgba(237,238,239,0.6)", padding: "8px 16px", borderLeft: "2px solid rgba(255,255,255,0.1)" }}>
        "Écris-moi un post Instagram sur l'IA"
      </p>
      <p>
        Et se plaignent que le résultat est générique. Normal. Claude ne sait rien de toi, de ton audience, de ton ton, de ton objectif. Il fait au mieux avec le peu que tu lui donnes.
      </p>
      <p>
        Maintenant imagine que Claude sait déjà que tu es coach business, que ton audience c'est des freelances de 25-40 ans, que ton ton est direct et bienveillant, que tu tutoies, et que tes posts doivent toujours commencer par un hook de 2 lignes max. Le même prompt produit un résultat 10x meilleur — sans effort supplémentaire de ta part.
      </p>
      <p>
        C'est exactement ce que permettent les Projects et la mémoire. Et c'est ce qu'on va configurer maintenant.
      </p>

      <h3>5.2 — La structure d'un prompt qui obtient des résultats</h3>
      <p>
        Un prompt efficace contient 4 éléments. Pas besoin de les écrire dans cet ordre, mais ils doivent tous être là :
      </p>
      <p>
        <strong>Rôle</strong> — Qui est Claude dans cette conversation ?
      </p>
      <p style={{ fontStyle: "italic", color: "rgba(237,238,239,0.5)", paddingLeft: "16px" }}>
        "Tu es un expert en copywriting direct-response, spécialisé marché francophone."
      </p>
      <p>
        <strong>Contexte</strong> — Quel est le background de ta demande ?
      </p>
      <p style={{ fontStyle: "italic", color: "rgba(237,238,239,0.5)", paddingLeft: "16px" }}>
        "Mon audience : des freelances qui veulent vendre des formations. Mon offre : un programme de 8 semaines à 497€."
      </p>
      <p>
        <strong>Tâche</strong> — Que doit-il faire précisément ?
      </p>
      <p style={{ fontStyle: "italic", color: "rgba(237,238,239,0.5)", paddingLeft: "16px" }}>
        "Rédige 5 hooks Instagram de 2 lignes max, format question → promesse."
      </p>
      <p>
        <strong>Format</strong> — Comment tu veux le résultat ?
      </p>
      <p style={{ fontStyle: "italic", color: "rgba(237,238,239,0.5)", paddingLeft: "16px" }}>
        "Chaque hook sur une ligne. Pas de hashtags. Pas d'emoji."
      </p>
      <p>
        La différence entre un prompt vague et un prompt structuré, c'est la différence entre demander "fais-moi un truc" à un stagiaire et donner un brief précis à un expert. Claude est l'expert — mais il a besoin de ton brief.
      </p>
      <CalloutBox variant="important">
        Un prompt de 5 lignes bien structuré produit un meilleur résultat qu'une conversation de 20 messages flous. C'est contre-intuitif, mais moins de messages avec plus de clarté = meilleurs résultats + moins de tokens consommés.
      </CalloutBox>

      <h3>5.3 — Les Projects : le game-changer que personne n'utilise</h3>
      <p>
        Les Projects sont la fonctionnalité la plus puissante et la plus sous-utilisée de Claude. C'est celle qui fait passer Claude de "chatbot généraliste" à "collaborateur qui connaît ton business".
      </p>
      <p>Un Project, c'est 3 choses :</p>
      <p>
        <strong>Un prompt système permanent</strong> — Des instructions que Claude suit dans chaque conversation de ce projet. Tu les écris une fois, elles s'appliquent à chaque message. C'est comme briefer un collaborateur le jour de son arrivée — après, il sait comment travailler.
      </p>
      <p>
        <strong>Des documents de référence</strong> — PDFs, textes, images que Claude peut consulter à tout moment dans ce projet. Ta charte, ton offre, tes exemples, tes process — tout est là, accessible.
      </p>
      <p>
        <strong>Un espace isolé</strong> — Les conversations d'un projet ne polluent pas les autres. Ton projet "Contenu" et ton projet "Stratégie" sont séparés. Claude ne confond pas les contextes.
      </p>

      <h3>5.4 — Les Projects que tu dois créer (maintenant)</h3>
      <p>
        <strong>Project 1 — "Mon Business"</strong>
      </p>
      <p>
        Le projet principal. Prompt système avec ta description d'activité, tes offres, ta cible, ton ton de voix, tes valeurs. Documents de référence : ta page À propos, ton pitch deck, ton manifeste. Tout ce que tu aurais dit à un nouvel employé pour qu'il comprenne ton business en 30 minutes.
      </p>
      <p>
        <strong>Project 2 — "Contenu"</strong>
      </p>
      <p>
        Dédié à la production de contenu. Prompt système avec ta charte éditoriale, tes formats préférés, tes contraintes. Documents : exemples de posts qui marchent, ta ligne éditoriale, tes sujets récurrents. Claude produit du contenu aligné avec ton style dès le premier message.
      </p>
      <p>
        <strong>Project 3 — "Stratégie"</strong>
      </p>
      <p>
        Pour les sessions de réflexion. Prompt système orienté analyse et conseil. Documents : ton business plan, tes objectifs trimestriels, tes KPIs. Claude devient ton sparring partner stratégique avec tout le contexte nécessaire.
      </p>
      <p>
        <strong>Project 4+ — "Client [Nom]"</strong> (si tu as des clients)
      </p>
      <p>
        Un projet par client. Brief, historique, livrables en cours. Quand tu switches d'un client à l'autre, Claude switch de contexte instantanément.
      </p>

      <h3>5.5 — La mémoire : ce que Claude retient de toi entre les sessions</h3>
      <p>
        En parallèle des Projects, Claude a une mémoire persistante globale. Elle retient des choses sur toi à travers toutes tes conversations :
      </p>
      <ul>
        <li>Ton prénom, ton activité, ta localisation</li>
        <li>Tes préférences de format et de ton</li>
        <li>Des faits sur tes projets en cours</li>
        <li>Tes instructions récurrentes</li>
      </ul>
      <p>
        Tu peux la gérer dans Settings → Memory. Tu peux aussi simplement dire à Claude : <em>"Souviens-toi que j'utilise toujours le tutoiement, que je déteste le ton corporate, et que mes réponses doivent être directes et concrètes."</em>
      </p>
      <p>
        La mémoire + les Projects = Claude qui te connaît par cœur. Tu ouvres une conversation et il sait déjà à qui il parle, dans quel contexte, et comment tu veux qu'il travaille.
      </p>

      <h3>5.6 — Comment Alfred a configuré ses Projects chez Buildrs</h3>
      <p>
        Chez Buildrs, Alfred a 6 Projects actifs en permanence :
      </p>
      <p>
        <strong>"Buildrs — Stratégie"</strong> — Le prompt système fait 30 lignes. Vision, positionnement, offres, cible, ton. Quand Alfred brainstorme sur une nouvelle offre ou un pivot, Claude est aligné en 0 seconde. Pas besoin de contexte — il sait tout.
      </p>
      <p>
        <strong>"Buildrs — Contenu"</strong> — Charte éditoriale, exemples de posts qui ont performé, sujets à aborder, sujets à éviter. Alfred décrit un angle en une phrase, Claude sort un contenu calibré.
      </p>
      <p>
        <strong>"Buildrs — Clients"</strong> — Un sous-projet par client actif. Brief, stack technique, avancement. Quand on travaille sur le projet d'un client, on ouvre son Project et Claude a tout le contexte du projet sans qu'on ré-explique quoi que ce soit.
      </p>
      <p>
        <strong>"Buildrs — Recrutement Agents"</strong> — Un Project dédié à la conception de nouveaux agents IA. Les specs de chaque agent, les prompts qui marchent, les retours d'expérience.
      </p>
      <p>
        <strong>"Buildrs — Ops"</strong> — Process internes, templates de livrables, checklists qualité. Tout ce qui fait tourner la machine au quotidien.
      </p>
      <p>
        <strong>"Buildrs — R&D"</strong> — Veille, expérimentations, tests de nouveaux outils et workflows. Le labo.
      </p>
      <CalloutBox variant="buildrs">
        Le résultat : Alfred passe d'un contexte à l'autre en un clic. Chaque Project est un département de l'entreprise avec son propre brief. Claude ne mélange jamais les contextes. Le gain de temps estimé : 15-20 heures par mois de re-briefing évité.
      </CalloutBox>

      {/* ── Diagramme : Architecture Projects Buildrs ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          L'architecture Projects de Buildrs
        </p>
        {/* Top: Alfred */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Alfred
          </div>
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* 6 Projects grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "20px" }}>
          {[
            { label: "Stratégie", desc: "Prompt 30 lignes + docs" },
            { label: "Contenu", desc: "Charte + exemples" },
            { label: "Clients", desc: "Brief par client" },
            { label: "Agents IA", desc: "Specs + prompts" },
            { label: "Ops", desc: "Process + templates" },
            { label: "R&D", desc: "Veille + expériences" },
          ].map((item) => (
            <div key={item.label} style={{
              padding: "10px 8px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              textAlign: "center" as const,
            }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "#EDEEEF", marginBottom: "3px" }}>{item.label}</div>
              <div style={{ fontSize: "9px", color: "rgba(237,238,239,0.4)" }}>{item.desc}</div>
            </div>
          ))}
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Bottom: Result */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Claude aligné en 0 sec
          </div>
        </div>
      </div>

      <CalloutBox variant="action">
        Crée ton premier Project maintenant. Appelle-le "Mon Business". Écris un prompt système de 10-15 lignes qui décrit : qui tu es, ce que tu fais, pour qui, et comment tu veux que Claude te parle. Ajoute un document de référence (ta page À propos, ton pitch, ou même un simple texte qui décrit ton activité). C'est fait en 5 minutes et ça change tout pour la suite.
      </CalloutBox>

      <OfferCTA variant="subtle" buttonLabel="Découvrir le Kit → 97€" buttonLink="/dashboard/offres">
        Tu veux les prompts systèmes exacts qu'Alfred utilise chez Buildrs ? Ils sont dans le Kit d'implémentation.
      </OfferCTA>
    </>
  ),
}

const chapter06: Chapter = {
  number: "06",
  title: "Branche Claude à tous tes outils en un clic",
  sidebarTitle: "Extensions & Connecteurs",
  subtitle: "Drive, Gmail, Slack, Notion, Chrome — Claude accède à tout et agit directement dedans.",
  bloc: "Configurer",
  actionPlan: [
    "Brancher Google Drive + Gmail (20 secondes chacun)",
    "Brancher Slack + Calendar si tu les utilises",
    "Installer l'extension Chrome",
    "Passer au chapitre 7",
  ],
  quiz: [
    {
      question: "Les connecteurs permettent de :",
      options: ["Brancher Claude directement à tes outils pour qu'il y accède et y agisse", "Accélérer la vitesse de réponse de Claude", "Relier plusieurs comptes Claude entre eux"],
      correctIndex: 0,
    },
    {
      question: "Le plugin Chrome permet à Claude de :",
      options: ["Changer le thème de Chrome", "Naviguer sur des sites, extraire des données, remplir des formulaires et agir sur le web", "Bloquer les publicités"],
      correctIndex: 1,
    },
    {
      question: "L'ordre optimal pour brancher les connecteurs c'est :",
      options: ["Tous en même temps", "Drive + Gmail d'abord, puis Slack + Calendar, puis le reste selon les besoins", "Chrome en premier"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>6.1 — Le problème quand Claude travaille en vase clos</h3>
      <p>
        Sans connecteurs, Claude est intelligent mais aveugle. Il ne sait rien de tes emails, de ton agenda, de tes documents, de tes conversations Slack. À chaque fois que tu veux qu'il travaille avec tes données, tu dois copier-coller, uploader, réexpliquer.
      </p>
      <p>
        C'est comme avoir un assistant brillant mais enfermé dans une pièce sans fenêtre. Il peut réfléchir — mais il n'a accès à rien.
      </p>
      <p>
        Les connecteurs ouvrent les fenêtres. Claude se branche directement à tes outils et agit dedans. Plus de copier-coller. Plus de contexte perdu. Il voit ce que tu vois, et il peut agir là où tu agis.
      </p>

      <h3>6.2 — Les connecteurs : ce que chaque branchement débloque</h3>
      <p>
        Tout se passe dans Claude Desktop → Settings → Extensions. Chaque connecteur se branche en un clic (autorisation OAuth, 10 secondes).
      </p>
      <p>
        <strong>Google Drive</strong> — Claude lit, cherche et crée des documents dans ton Drive. Tu lui dis "trouve le brief du projet X" ou "crée un doc avec le récap de notre conversation" — il le fait directement dans ton Drive.
      </p>
      <p>
        <strong>Gmail</strong> — Claude accède à ta boîte mail. Il peut lire tes emails non lus, chercher un message ancien, rédiger une réponse, préparer un brouillon. Tu lui dis "résume mes 10 derniers emails non lus" — il le fait en 5 secondes.
      </p>
      <p>
        <strong>Google Calendar</strong> — Claude voit ton planning. Il sait quand tu es libre, quand tu as des réunions, avec qui. Combiné avec Cowork, il peut préparer tes briefings pré-réunion automatiquement.
      </p>
      <p>
        <strong>Slack</strong> — Claude lit tes channels et tes DMs. Il peut résumer les conversations, identifier les messages importants, et même envoyer des messages. Parfait pour le briefing matinal automatisé.
      </p>
      <p>
        <strong>Notion</strong> — Claude accède à tes bases de données, tes pages, tes wikis. Si ton business tourne sur Notion, Claude peut y lire et y écrire.
      </p>
      <p>
        <strong>Figma</strong> — Claude voit tes designs. Utile quand tu travailles sur un projet qui a un volet visuel — il comprend le design existant avant de coder.
      </p>
      <p>
        <strong>Stripe</strong> — Claude accède à tes données de paiement. Revenus, abonnements, transactions. Tu lui demandes "combien j'ai fait ce mois-ci" et il te répond avec les vrais chiffres.
      </p>
      <CalloutBox variant="important">
        Chaque connecteur que tu branches multiplie ce que Claude peut faire pour toi. Un Claude sans connecteur = un chat. Un Claude avec 5 connecteurs = un assistant qui a accès à tout ton écosystème de travail. La différence de productivité est massive.
      </CalloutBox>

      <h3>6.3 — Le Plugin Chrome : Claude prend le contrôle du web</h3>
      <p>
        L'extension "Claude in Chrome" transforme Claude en agent web. Installe-la depuis le Chrome Web Store, et Claude peut :
      </p>
      <p>
        <strong>Naviguer</strong> — Il ouvre des pages, suit des liens, parcourt des sites.
      </p>
      <p>
        <strong>Extraire</strong> — Il récupère des données, des prix, des contenus depuis n'importe quelle page.
      </p>
      <p>
        <strong>Remplir</strong> — Il remplit des formulaires, complète des champs.
      </p>
      <p>
        <strong>Agir</strong> — Il clique, soumet, effectue des actions sur les sites.
      </p>
      <p>
        Tout seul, c'est déjà utile pour du scraping ou de la veille. Combiné avec Cowork et les tâches planifiées, ça devient de l'automatisation web pure. Un agent qui navigue sur le web pour toi chaque jour, extrait ce qui t'intéresse, et te livre un résumé.
      </p>

      <h3>6.4 — L'ordre optimal pour brancher tes connecteurs</h3>
      <p>
        Ne branche pas tout d'un coup sans réfléchir. Voici l'ordre qu'on recommande — du plus impactant au plus optionnel :
      </p>
      <p>
        <strong>Étape 1 (immédiat) — Le duo fondamental :</strong>
      </p>
      <p>
        Google Drive + Gmail. Ces deux-là couvrent 80% des besoins. Claude accède à tes documents et tes emails — c'est le minimum pour qu'il soit utile au quotidien.
      </p>
      <p>
        <strong>Étape 2 (jour 2) — La communication :</strong>
      </p>
      <p>
        Slack + Google Calendar. Claude voit avec qui tu parles et quand tu es dispo. C'est ce qui rend les briefings automatiques Cowork possibles.
      </p>
      <p>
        <strong>Étape 3 (quand tu en as besoin) — Le spécifique :</strong>
      </p>
      <p>
        Notion si tu y travailles. Figma si tu fais du design. Stripe si tu vends. Branche-les quand le besoin se présente, pas avant.
      </p>
      <p>
        <strong>Étape 4 — Chrome :</strong>
      </p>
      <p>
        L'extension Chrome en dernier. C'est puissant mais tu n'en auras pas besoin tant que tu n'as pas configuré Cowork et les tâches planifiées (chapitre 12).
      </p>

      <h3>6.5 — Comment les connecteurs fonctionnent chez Buildrs</h3>
      <p>
        Chez Buildrs, chaque connecteur a un rôle précis dans la machine :
      </p>
      <p>
        <strong>Gmail + Slack</strong> — Ce sont les deux sources du briefing matinal d'Alfred. Chaque matin à 7h30, un agent Cowork lit les emails non lus et les messages Slack importants des dernières 24h, et compile un résumé structuré avec les priorités. Alfred ouvre son Mac, tout est prêt. Avant les connecteurs, ça prenait 25 minutes de scroll manuel. Maintenant : 0 minutes.
      </p>
      <p>
        <strong>Google Calendar</strong> — Combiné avec Gmail, Claude prépare un briefing pré-réunion pour chaque meeting du jour. Qui participe, quel est le contexte (emails échangés avec cette personne), quels sujets aborder. Alfred arrive en réunion préparé sans avoir rien fait.
      </p>
      <p>
        <strong>Google Drive</strong> — Tous les livrables clients sont dans Drive. Quand Claude Code finit un build, le rapport de livraison est généré automatiquement et déposé dans le dossier du client. Quand Alfred travaille sur la stratégie dans un Project Claude, il peut dire "consulte le brief dans le Drive" et Claude le lit en temps réel.
      </p>
      <p>
        <strong>Stripe</strong> — Un agent Cowork hebdomadaire compile les métriques business : MRR, nombre de clients, transactions de la semaine, taux de churn. Le rapport arrive chaque lundi sans qu'Alfred ouvre Stripe une seule fois.
      </p>
      <CalloutBox variant="buildrs">
        Le résultat global : Alfred touche rarement à ses outils directement. Claude y accède pour lui, compile, analyse, et livre. Les outils sont devenus des sources de données pour les agents — pas des interfaces qu'Alfred utilise manuellement.
      </CalloutBox>

      {/* ── Diagramme : Les connecteurs en action ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          Les connecteurs en action
        </p>
        {/* Top: Claude */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Claude
          </div>
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Sources grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", marginBottom: "20px" }}>
          {["Gmail", "Drive", "Slack", "Calendar", "Notion", "Stripe", "Figma", "Chrome"].map((tool) => (
            <div key={tool} style={{
              padding: "8px 4px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px",
              textAlign: "center" as const,
              fontSize: "10px",
              fontWeight: 500,
              color: "rgba(237,238,239,0.6)",
            }}>
              {tool}
            </div>
          ))}
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Outputs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "20px" }}>
          {[
            { label: "Briefing matinal auto", sources: "Gmail + Slack + Drive" },
            { label: "Briefing pré-réunion", sources: "Calendar + Gmail" },
            { label: "Rapport business hebdo", sources: "Stripe" },
          ].map((item) => (
            <div key={item.label} style={{
              padding: "10px 8px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              textAlign: "center" as const,
            }}>
              <div style={{ fontSize: "11px", fontWeight: 500, color: "#EDEEEF", marginBottom: "3px" }}>{item.label}</div>
              <div style={{ fontSize: "9px", color: "rgba(237,238,239,0.35)" }}>{item.sources}</div>
            </div>
          ))}
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Tout arrive prêt. Tu ne fais rien.
          </div>
        </div>
      </div>

      <CalloutBox variant="action">
        Ouvre Claude Desktop → Settings → Extensions. Branche Google Drive et Gmail maintenant — ça prend 20 secondes chacun. Si tu utilises Slack, branche-le aussi. Tu sentiras la différence dès ta prochaine conversation avec Claude.
      </CalloutBox>

      <OfferCTA variant="subtle" buttonLabel="Découvrir le Kit → 97€" buttonLink="/dashboard/offres">
        La config connecteurs complète de Buildrs (les 7 branchements + l'ordre optimal) est dans le Kit.
      </OfferCTA>
    </>
  ),
}

const chapter07: Chapter = {
  number: "07",
  title: "Installe ton agent de code en 20 minutes",
  sidebarTitle: "Installer Claude Code",
  subtitle: "Tu décris, il construit. Pas besoin de savoir coder.",
  bloc: "Configurer",
  actionPlan: [
    "Installer Node.js (nodejs.org — version LTS)",
    "npm install -g @anthropic-ai/claude-code",
    "mkdir mon-premier-projet && cd mon-premier-projet && claude",
    "Faire ton premier Hello World",
    "Passer au chapitre 8",
  ],
  quiz: [
    {
      question: "Pourquoi utiliser Claude Code en local plutôt que dans le navigateur ?",
      options: ["C'est moins cher", "Claude Code a accès complet au projet, exécute des commandes, et déploie — impossible depuis le navigateur", "C'est plus rapide"],
      correctIndex: 1,
    },
    {
      question: "Pour installer Claude Code il faut :",
      options: ["Python", "Node.js + la commande npm install", "Obligatoirement un Mac"],
      correctIndex: 1,
    },
    {
      question: "Le temps moyen d'un MVP complet chez Buildrs avec Claude Code :",
      options: ["2-3 semaines", "Environ 4 heures", "3-6 mois"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>7.1 — Claude Code : le truc qui change les règles du jeu</h3>
      <p>
        Jusqu'ici, on a vu Claude AI (le chat intelligent) et Cowork (l'agent autonome). Claude Code, c'est le troisième pilier — et pour beaucoup d'entrepreneurs, c'est celui qui transforme tout.
      </p>
      <p>
        Claude Code est un agent qui tourne dans ton terminal — la ligne de commande de ton ordinateur. Tu le lances dans un dossier, et il a accès à tout : les fichiers, le code, les dépendances, le serveur. Il ne suggère pas du code dans un chat. Il crée des fichiers réels, exécute de vraies commandes, et te montre le résultat en preview live.
      </p>
      <p>
        La différence avec Claude AI c'est simple : Claude AI travaille avec ce que tu lui donnes dans la conversation. Claude Code voit tout ton projet et agit dessus directement.
      </p>
      <p>
        Et la magie du VibeCoding : tu décris ce que tu veux en français, Claude Code le construit. Tu n'as pas besoin de savoir coder. Tu as besoin de savoir ce que tu veux.
      </p>
      <CalloutBox variant="important">
        Claude Code est la raison pour laquelle des gens sans background technique construisent et déploient des applications en quelques heures. Avant, il fallait savoir coder ou payer un développeur. Ce paradigme est terminé.
      </CalloutBox>

      <h3>7.2 — Les 3 façons d'installer Claude Code</h3>
      <p>
        <strong>Option A — En local dans ton terminal (recommandé)</strong>
      </p>
      <p>
        C'est la méthode la plus puissante. Claude Code a accès à tout ton système de fichiers, peut installer des packages, lancer des serveurs, et déployer. C'est la configuration qu'on utilise chez Buildrs pour tous les projets.
      </p>
      <p>
        Prérequis : Node.js installé sur ton ordinateur (télécharge sur nodejs.org).
      </p>
      <CodeBlock
        language="Terminal"
        code="npm install -g @anthropic-ai/claude-code"
      />
      <p>C'est tout. Une commande. Claude Code est installé.</p>
      <p>
        <strong>Option B — Dans VS Code</strong>
      </p>
      <p>
        Si tu utilises déjà VS Code (un éditeur de code gratuit et populaire), tu peux installer l'extension Claude Code. Tu gardes l'interface familière de VS Code avec Claude Code en panel latéral. C'est un bon compromis si tu veux voir le code ET parler à Claude dans la même fenêtre.
      </p>
      <p>
        <strong>Option C — Anti-Gravity IDE</strong>
      </p>
      <p>
        Anti-Gravity est un éditeur de code nouvelle génération conçu spécifiquement pour le VibeCoding. Il intègre Claude Code nativement avec une interface pensée pour la collaboration homme-IA. C'est l'option la plus "clé en main" — mais c'est aussi un nouvel outil à apprendre.
      </p>
      <p>
        Notre recommandation : <strong>commence en local.</strong> C'est le plus flexible, le plus puissant, et c'est celui qu'on utilise au quotidien. Tu pourras toujours migrer vers VS Code ou Anti-Gravity plus tard.
      </p>

      <h3>7.3 — Pourquoi le local est supérieur au navigateur</h3>
      <p>
        Tu pourrais te dire "pourquoi installer un truc alors que Claude AI fait déjà du code dans le navigateur ?" La réponse :
      </p>
      <p>
        <strong>Claude AI dans le navigateur</strong> — Il génère du code dans la conversation. Toi, tu dois le copier, le coller dans un fichier, installer les dépendances manuellement, configurer l'environnement, résoudre les erreurs. C'est du ping-pong.
      </p>
      <p>
        <strong>Claude Code en local</strong> — Il crée directement les fichiers dans ton projet. Il installe les dépendances lui-même. Il lance le serveur. Il voit le résultat. Si ça plante, il debug et corrige. Tu ne touches à rien. Tu décris, il fait.
      </p>
      <p>
        C'est la différence entre donner des instructions par téléphone à quelqu'un qui est dans une autre pièce, et avoir quelqu'un à côté de toi qui fait le travail devant tes yeux.
      </p>

      <h3>7.4 — Ta première session : de zéro à une app en 5 minutes</h3>
      <p>Ouvre ton terminal. Tape exactement ça :</p>
      <CodeBlock
        language="Terminal"
        code={`mkdir mon-premier-projet
cd mon-premier-projet
claude`}
      />
      <p>
        Claude Code se lance. Tu es dans une conversation — mais cette fois, Claude voit ton dossier et peut agir dessus.
      </p>
      <p>Tape :</p>
      <CodeBlock
        language="Prompt"
        code={`Crée une application React avec une page d'accueil moderne.
Design sombre, minimaliste, avec un titre "Hello World" centré
et un sous-titre "Mon premier projet avec Claude Code".`}
      />
      <p>Regarde ce qui se passe :</p>
      <ol>
        <li>Claude crée la structure du projet (dossiers, fichiers de config)</li>
        <li>Il installe les dépendances (React, Tailwind, etc.)</li>
        <li>Il écrit le code de l'interface</li>
        <li>Il lance le serveur de développement</li>
        <li>Il t'affiche l'URL de preview — tu ouvres dans ton navigateur et tu vois ton app</li>
      </ol>
      <p>
        Tu viens de construire une application web. Sans écrire une seule ligne de code. En décrivant ce que tu voulais.
      </p>
      <p>
        Maintenant imagine faire ça avec un vrai projet : un outil pour tes clients, une landing page, un tableau de bord, un micro-SaaS. C'est exactement le même processus — tu décris, Claude construit.
      </p>

      <h3>7.5 — Comment on utilise Claude Code chez Buildrs</h3>
      <p>
        Claude Code est l'outil principal de production chez Buildrs. Chaque projet client passe par là.
      </p>
      <p>
        <strong>Le process standard :</strong> Alfred ou l'équipe définit les specs dans un Project Claude AI. Ensuite, on lance Claude Code dans le dossier du projet — qui contient déjà un CLAUDE.md (on verra ça au chapitre 11) avec toutes les conventions, le design system, la stack technique. Claude Code lit le CLAUDE.md et sait exactement comment travailler.
      </p>
      <p>
        <strong>Les chiffres :</strong> Temps moyen pour un MVP fonctionnel avec authentification, base de données, paiement Stripe et design premium → 4 heures. Avant Claude Code, le même périmètre nécessitait 2-3 semaines de développement. Le ratio est de 1 à 20.
      </p>
      <p><strong>Ce qu'on a construit avec Claude Code cette année :</strong></p>
      <ul>
        <li>NOAH™ — un générateur d'offres IA pour entrepreneurs (buildé en 5 jours)</li>
        <li>Ce guide que tu lis en ce moment — le dashboard, l'onboarding, la LP</li>
        <li>Des outils internes : scoring clients, générateur de briefs, dashboard de KPIs</li>
        <li>Des micro-SaaS clients : facturation, booking, matching, automation</li>
      </ul>
      <CalloutBox variant="buildrs">
        Tout ça avec Claude Code comme moteur. Pas de développeurs externalisés. Pas de no-code limité. Du VibeCoding pur.
      </CalloutBox>

      {/* ── Diagramme : Claude Code en action ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          Claude Code en action
        </p>
        {/* Flow: Toi → Claude Code → Actions → Preview → Loop */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
          {/* Row 1: Toi */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              padding: "10px 24px",
              background: "rgba(218,119,86,0.12)",
              border: "1px solid rgba(218,119,86,0.25)",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#DA7756",
            }}>
              Toi — tu décris
            </div>
          </div>
          {/* Connector */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
          </div>
          {/* Row 2: Claude Code */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              padding: "10px 24px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#EDEEEF",
            }}>
              Claude Code
            </div>
          </div>
          {/* Connector */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
          </div>
          {/* Row 3: 4 actions */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "6px" }}>
            {["Crée les fichiers", "Installe les deps", "Écrit le code", "Lance le serveur"].map((action) => (
              <div key={action} style={{
                padding: "8px 4px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                textAlign: "center" as const,
                fontSize: "10px",
                color: "rgba(237,238,239,0.6)",
              }}>
                {action}
              </div>
            ))}
          </div>
          {/* Connector */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
          </div>
          {/* Row 4: Preview */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              padding: "10px 24px",
              background: "rgba(218,119,86,0.12)",
              border: "1px solid rgba(218,119,86,0.25)",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#DA7756",
            }}>
              Preview live → tu vois ton app en direct
            </div>
          </div>
          {/* Loop indicator */}
          <p style={{
            textAlign: "center" as const,
            fontSize: "10px",
            color: "rgba(237,238,239,0.3)",
            marginTop: "8px",
          }}>
            ↻ Tu décris un changement → Claude Code l'applique en temps réel
          </p>
        </div>
      </div>

      <CalloutBox variant="action">
        Installe Node.js maintenant (nodejs.org — prends la version LTS). Puis ouvre ton terminal et lance : npm install -g @anthropic-ai/claude-code. Crée un dossier, lance claude, et fais ton premier Hello World. Chronomètre-toi : 20 minutes max, tout inclus.
      </CalloutBox>
    </>
  ),
}

const chapter08: Chapter = {
  number: "08",
  title: "Du code à la mise en ligne — sans friction",
  sidebarTitle: "Déployer avec Vercel",
  subtitle: "Tu décris. Claude construit. GitHub sauvegarde. Vercel déploie. En ligne avant la fin de la journée.",
  bloc: "Configurer",
  actionPlan: [
    "Créer un compte GitHub (github.com — gratuit)",
    "Créer un compte Vercel (vercel.com — gratuit, connecte avec GitHub)",
    "Comprendre le flux : Décrire → Build → Preview → Push → Deploy → Live",
    "Passer au chapitre 9",
  ],
  quiz: [
    {
      question: "Avec Vercel, le déploiement fonctionne comment ?",
      options: ["Tu uploades manuellement tes fichiers", "Tu pushes sur GitHub et Vercel déploie automatiquement à chaque changement", "Tu envoies un email au support Vercel"],
      correctIndex: 1,
    },
    {
      question: "Le workflow VibeCoding c'est :",
      options: [
        "Coder → Tester → Déployer manuellement",
        "Décrire → Claude construit → Preview → Push GitHub → Vercel déploie → Live",
        "Dessiner un wireframe → Envoyer à un dev",
      ],
      correctIndex: 1,
    },
    {
      question: "Chez Buildrs, le délai entre \"je veux ce changement\" et \"c'est en ligne\" est de :",
      options: ["2-3 jours", "Souvent moins de 10 minutes", "1-2 heures"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>8.1 — Le workflow qui rend tout le reste obsolète</h3>
      <p>
        Ce que tu vas découvrir dans ce chapitre, c'est le pipeline qui permet à Buildrs de livrer des produits en quelques heures au lieu de quelques semaines. Et c'est le même pipeline que tu vas utiliser.
      </p>
      <p>
        Le principe est simple : tu ne touches jamais aux serveurs, tu ne configures jamais d'hébergement, tu ne gères jamais de déploiement manuel. Tout est automatique. Tu décris ce que tu veux, Claude Code le construit, et en quelques clics c'est en ligne — avec une vraie URL, accessible par le monde entier.
      </p>
      <p>
        C'est cette fluidité qui rend le VibeCoding si puissant. Il n'y a plus de mur entre "j'ai une idée" et "c'est en ligne". Ce mur n'existe plus.
      </p>

      <h3>8.2 — La preview en temps réel : ton feedback instantané</h3>
      <p>
        Quand Claude Code travaille sur ton projet, tu peux voir chaque modification en direct dans ton navigateur. Pas besoin d'attendre, pas besoin de compiler manuellement. Tu décris un changement, Claude l'applique, et la preview se met à jour.
      </p>
      <p>
        C'est ce qui rend le VibeCoding si naturel. Tu diriges comme un réalisateur — "change cette couleur", "ajoute un bouton ici", "le texte est trop long, raccourcis" — et tu vois le résultat en direct. Si ça ne te plaît pas, tu dis pourquoi, Claude corrige. Boucle de feedback en secondes, pas en jours.
      </p>
      <p>
        C'est la fin du cycle classique : brief → attendre 5 jours → recevoir une maquette → faire des retours → attendre encore → etc. Ici, tout se passe en temps réel.
      </p>

      <h3>8.3 — GitHub : chaque version est sauvegardée, pour toujours</h3>
      <p>
        GitHub c'est le coffre-fort de ton code. Pense à Google Drive, mais pour le code source.
      </p>
      <p>
        Chaque fois que tu fais un "push" (une sauvegarde), GitHub enregistre l'état complet de ton projet à cet instant. Si tu fais une erreur demain, tu peux revenir à la version d'aujourd'hui en un clic. Si tu veux comparer ce qui a changé entre lundi et vendredi, tout est tracé.
      </p>
      <p>Claude Code gère GitHub pour toi. Il peut :</p>
      <ul>
        <li>Créer un nouveau repository (dépôt de code)</li>
        <li>Sauvegarder tes modifications avec un message de commit</li>
        <li>Créer des Pull Requests (propositions de modification)</li>
        <li>Gérer les branches (versions parallèles de ton projet)</li>
      </ul>
      <p>
        Tu n'as pas besoin de comprendre Git en profondeur. Tu dis à Claude Code "push le code sur GitHub" et il le fait.
      </p>

      <h3>8.4 — Vercel : ton app en ligne en 30 secondes</h3>
      <p>
        Vercel est le service qui met ton application en ligne. L'idée est simple : tu connectes ton repository GitHub à Vercel, et à chaque push, Vercel détecte le changement et déploie automatiquement la nouvelle version.
      </p>
      <p>
        Le résultat : ton app est accessible sur une URL type <code>ton-projet.vercel.app</code> — avec HTTPS, un CDN mondial (ton site est rapide partout dans le monde), et zéro configuration serveur.
      </p>
      <p>
        Tu peux ensuite connecter ton propre nom de domaine si tu veux <code>monoutil.com</code> au lieu de <code>ton-projet.vercel.app</code>.
      </p>
      <p>
        Et le plus beau : <strong>le plan gratuit de Vercel suffit largement pour lancer.</strong> Tu ne paies rien tant que tu n'as pas des milliers d'utilisateurs.
      </p>

      <h3>8.5 — Le pipeline complet, étape par étape</h3>
      <p>Voici comment une modification passe de ton idée à la production :</p>
      <p>
        <strong>Étape 1 — Tu décris</strong> ce que tu veux à Claude Code. En français. En langage naturel.
      </p>
      <p>
        <strong>Étape 2 — Claude Code construit.</strong> Il modifie les fichiers, crée du code, installe ce qui manque.
      </p>
      <p>
        <strong>Étape 3 — Tu prévisualises</strong> dans ton navigateur. Tu valides visuellement. Si c'est bon, on avance. Sinon, tu décris ce qu'il faut changer et on boucle.
      </p>
      <p>
        <strong>Étape 4 — Claude Code push sur GitHub.</strong> Le code est sauvegardé avec un historique propre.
      </p>
      <p>
        <strong>Étape 5 — Vercel détecte le push et déploie automatiquement.</strong> En 10-30 secondes, la nouvelle version est en ligne.
      </p>
      <p>
        <strong>Étape 6 — C'est live.</strong> Ton app est accessible au monde entier. Tes utilisateurs voient la dernière version.
      </p>
      <p>
        Ce pipeline tourne en boucle : chaque itération prend quelques minutes. En une après-midi, tu peux faire 20 itérations — ce qui équivaut à 20 jours de cycle de développement classique.
      </p>
      <CalloutBox variant="important">
        Ce workflow, c'est exactement celui que les startups et les agences de développement facturent des milliers d'euros. GitHub + Vercel + un développeur senior = 500-800€/jour. Toi, tu as le même pipeline avec Claude Code pour le prix de ton abonnement Pro. La démocratisation est totale.
      </CalloutBox>

      {/* ── Diagramme : Le pipeline VibeCoding ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          Le pipeline VibeCoding
        </p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "6px" }}>
          {[
            { step: "1", label: "Tu décris", detail: "En français, en langage naturel", accent: false },
            { step: "2", label: "Claude Code construit", detail: "Fichiers, code, dépendances", accent: false },
            { step: "3", label: "Tu prévisualises", detail: "Feedback en direct dans le navigateur", accent: false },
            { step: "4", label: "Push GitHub", detail: "Code sauvegardé avec historique", accent: false },
            { step: "5", label: "Vercel déploie", detail: "Auto en 10-30 secondes", accent: false },
            { step: "6", label: "C'est live", detail: "Accessible au monde entier", accent: true },
          ].map((item) => (
            <div key={item.step} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: item.accent ? "rgba(218,119,86,0.15)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${item.accent ? "rgba(218,119,86,0.3)" : "rgba(255,255,255,0.08)"}`,
                fontSize: "10px",
                fontWeight: 600,
                color: item.accent ? "#DA7756" : "rgba(237,238,239,0.5)",
                flexShrink: 0,
              }}>
                {item.step}
              </div>
              <div style={{
                flex: 1,
                padding: "8px 14px",
                background: item.accent ? "rgba(218,119,86,0.08)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${item.accent ? "rgba(218,119,86,0.2)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <span style={{ fontSize: "12px", fontWeight: item.accent ? 600 : 500, color: item.accent ? "#DA7756" : "#EDEEEF" }}>{item.label}</span>
                <span style={{ fontSize: "10px", color: "rgba(237,238,239,0.35)" }}>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: "center" as const,
          fontSize: "10px",
          color: "rgba(237,238,239,0.3)",
          marginTop: "12px",
        }}>
          ↻ Nouvelle itération → retour à l'étape 1
        </p>
      </div>

      <h3>8.6 — Comment ce pipeline tourne chez Buildrs</h3>
      <p>
        Chez Buildrs, ce workflow est le cœur de la production. Chaque projet client l'utilise.
      </p>
      <p>
        <strong>Le cas NOAH™</strong> — Le générateur d'offres IA que Buildrs a construit pour les entrepreneurs. Pendant les 5 jours de build, le pipeline tournait en continu : Alfred décrivait une feature, Claude Code la construisait, push sur GitHub, Vercel déployait, le client testait sur l'URL de staging. Délai entre "je veux ce changement" et "c'est en ligne" : souvent moins de 10 minutes. Sur 5 jours, on a fait +100 itérations. En développement classique, ça aurait pris 3-4 mois.
      </p>
      <p>
        <strong>Ce guide que tu lis</strong> — Ce dashboard a été construit avec exactement ce pipeline. La LP, l'onboarding, le contenu des chapitres — tout passe par Claude Code → GitHub → Vercel. Chaque modification que tu vois a été décrite, buildée, et déployée en quelques minutes.
      </p>
      <p>
        <strong>Les mises à jour clients en temps réel</strong> — Quand un client Buildrs demande une modification sur son micro-SaaS, on lance Claude Code, on applique le changement, on push. Le client rafraîchit sa page — c'est déjà en ligne. Pas de ticket Jira, pas d'attente, pas de "ce sera dans la prochaine release". C'est fait.
      </p>
      <CalloutBox variant="buildrs">
        Le pipeline n'est pas juste un gain de temps. C'est un changement de relation avec le produit. Tu n'es plus en mode "je planifie, j'attends, je reçois". Tu es en mode "je veux, c'est fait".
      </CalloutBox>

      <CalloutBox variant="action">
        Crée un compte GitHub sur github.com (gratuit, 2 minutes). Crée un compte Vercel sur vercel.com (gratuit, 2 minutes — connecte-toi avec ton compte GitHub directement). C'est tout. La connexion entre les deux est automatique. La prochaine fois que tu pushes du code avec Claude Code, Vercel le déploiera sans que tu fasses quoi que ce soit.
      </CalloutBox>
    </>
  ),
}

/* ═══════════════════════════════════════ */
/* BLOC 3 — SUPERCHARGER                  */
/* ═══════════════════════════════════════ */

const chapter09: Chapter = {
  number: "09",
  title: "Transforme Claude en spécialiste de ton métier",
  sidebarTitle: "Skills & Compétences",
  subtitle: "Claude est livré nu. Avec les bons Skills, il devient ton stratège, ton designer, ton dev.",
  bloc: "Supercharger",
  actionPlan: [
    "Installer Frontend Design : npx skills add frontend-design",
    "Installer SuperPowers : /plugin install superpowers",
    "Tester /frontend-design sur un mini-projet",
    "Réfléchir à 1 Skill custom pour ton activité",
    "Passer au chapitre 10",
  ],
  quiz: [
    {
      question: "Un Skill, c'est :",
      options: ["Un plugin payant qui nécessite une API", "Un fichier SKILL.md qui donne des instructions spécialisées à Claude — pas de code, pas d'API", "Une fonctionnalité intégrée qu'on ne peut pas modifier"],
      correctIndex: 1,
    },
    {
      question: "Le skill Frontend Design sert à :",
      options: ["Créer des logos", "Produire des interfaces avec de la personnalité et des choix de design pro — fini le générique IA", "Optimiser le référencement"],
      correctIndex: 1,
    },
    {
      question: "Chez Buildrs, les Skills custom servent à :",
      options: ["Décorer l'interface Claude", "Codifier le design system, le ton de communication et les conventions techniques pour que chaque résultat soit calibré automatiquement", "Remplacer les Skills communautaires"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>9.1 — Le problème avec Claude "par défaut"</h3>
      <p>
        Claude sans Skills, c'est un génie généraliste. Il sait un peu de tout, mais il n'est expert en rien. Demande-lui de designer une interface : tu auras du fonctionnel mais du générique. Le genre de résultat où tu devines que c'est "fait par l'IA" en 2 secondes — fond blanc, police Inter, gradient violet, zéro personnalité.
      </p>
      <p>
        C'est ce qu'Anthropic appelle la "convergence distributionnelle". Les modèles d'IA sont entraînés sur la moyenne statistique des décisions de design, de code, de stratégie. Résultat : sans guidance, ils reproduisent la moyenne. Et la moyenne, c'est médiocre.
      </p>
      <p>
        Les Skills corrigent ça. Un Skill, c'est un fichier SKILL.md qui donne à Claude des instructions spécialisées — une méthodologie, des contraintes, des standards de qualité. C'est comme la différence entre un consultant junior qui arrive le premier jour et le même consultant après 6 mois de formation intensive dans ton domaine.
      </p>
      <CalloutBox variant="important">
        Sans Skills, Claude produit du travail correct mais générique. Avec les bons Skills, il produit du travail qui a l'air d'avoir été fait par un spécialiste de ton domaine. La différence est visible immédiatement — et c'est ce qui fait que tes clients, tes utilisateurs ou ton audience voient de la qualité pro, pas du "fait par l'IA".
      </CalloutBox>

      <h3>9.2 — Comment fonctionne un Skill (en 30 secondes)</h3>
      <p>
        Un Skill, c'est un fichier texte en Markdown. Pas de code. Pas d'API. Pas de build. Tu places un fichier <code>SKILL.md</code> dans le bon dossier, et Claude le lit automatiquement quand c'est pertinent — ou tu l'invoques manuellement avec <code>/nom-du-skill</code>.
      </p>
      <p>
        Le fichier contient des instructions : comment approcher un type de tâche, quels standards respecter, quelles erreurs éviter, quelle méthodologie suivre. Claude les intègre dans son fonctionnement et produit un résultat calibré.
      </p>
      <p>
        Tu peux utiliser des Skills créés par d'autres (Anthropic, la communauté, Buildrs) ou créer les tiens. On verra les deux.
      </p>

      <h3>9.3 — Les 4 Skills essentiels que Buildrs installe sur chaque projet</h3>
      <p>
        <strong>Frontend Design</strong> — Le skill le plus installé de l'écosystème Claude Code (277 000+ installations). Il donne à Claude un système de design et une philosophie esthétique avant qu'il touche au moindre pixel. Le résultat : des interfaces avec de la personnalité, des choix typographiques audacieux, des animations intentionnelles, des palettes de couleurs cohérentes. La fin du "générique IA".
      </p>
      <CodeBlock language="Terminal" code="npx skills add frontend-design" />
      <p>
        <strong>SuperPowers</strong> — Le couteau suisse. Il structure le cycle de vie complet d'un projet : brainstorming, planification, développement, debugging, code review. Quand tu lances un projet avec SuperPowers, Claude suit un processus professionnel — pas une réponse improvisée.
      </p>
      <CodeBlock language="Terminal" code="/plugin install superpowers" />
      <p>
        <strong>Feature Dev</strong> — Tu décris une feature en 3 phrases. Le skill décompose le travail en étapes, planifie l'architecture, et guide Claude Code à travers la construction étape par étape. C'est le process qu'un senior dev utilise instinctivement — sauf que c'est automatisé.
      </p>
      <CodeBlock language="Terminal" code="/plugin install feature-dev" />
      <p>
        <strong>Code Review</strong> — Le plus impressionnant techniquement. Au lieu d'un seul Claude qui "regarde ton code", ce skill déploie 4 agents spécialisés en parallèle : un qui cherche les bugs logiques, un qui audite la sécurité, un qui évalue la couverture de tests, un qui analyse l'architecture. Ils travaillent en simultané et livrent un rapport structuré. C'est l'équivalent d'une PR review par un senior — avant même que tu pushes.
      </p>
      <CodeBlock language="Terminal" code="/plugin install code-review" />

      <h3>9.4 — Les Skills dans Claude AI (pas que Claude Code)</h3>
      <p>
        Les Skills ne sont pas réservés à Claude Code. Dans Claude AI, tu actives des fonctionnalités qui transforment aussi l'expérience :
      </p>
      <p>
        <strong>Recherche web</strong> — Claude accède à des infos en temps réel. Il ne répond plus uniquement depuis ses connaissances d'entraînement.
      </p>
      <p>
        <strong>Exécution de code</strong> — Claude teste du code, fait des calculs, manipule des données directement dans la conversation.
      </p>
      <p>
        <strong>Deep Research</strong> — Claude conduit une recherche approfondie sur un sujet et te livre un rapport structuré avec sources. C'est un analyste qui travaille pour toi.
      </p>
      <p>
        <strong>Création de fichiers</strong> — Documents Word, tableurs, présentations, PDFs — générés et téléchargeables.
      </p>
      <p>
        <strong>Artefacts</strong> — Claude crée des applications React, des visualisations, des outils interactifs directement dans le chat. Tu vois le résultat et tu peux l'utiliser immédiatement.
      </p>

      <h3>9.5 — Créer tes propres Skills (la vraie puissance)</h3>
      <p>
        Les Skills de la communauté sont un bon point de départ. Mais la vraie puissance, c'est quand tu crées les tiens — calibrés pour TON business, TON style, TES standards.
      </p>
      <p>Un Skill personnel se place dans :</p>
      <CodeBlock language="Chemin" code="~/.claude/skills/mon-skill/SKILL.md" />
      <p>
        Il est disponible dans tous tes projets Claude Code, automatiquement.
      </p>
      <p>Exemple de Skill custom qu'un entrepreneur pourrait créer :</p>
      <CodeBlock
        language="SKILL.md — expert-offre"
        code={`---
name: expert-offre
description: Analyse et structure des offres commerciales
---

Quand l'utilisateur te demande d'analyser ou créer une offre,
suis cette méthodologie :

1. Identifie le problème que l'offre résout
2. Définis la cible précise (qui a ce problème)
3. Structure l'offre en 3 tiers (entrée, principal, premium)
4. Pour chaque tier : inclus, prix, justification
5. Propose un nom qui évoque la transformation, pas la feature
6. Ajoute un élément de rareté ou d'urgence

Standards :
- Prix basés sur la valeur perçue, pas sur le temps passé
- Chaque tier : un "pourquoi pas le tier en-dessous" évident
- Le tier principal = choix logique pour 70% des acheteurs`}
      />
      <p>
        Tu l'écris une fois. Claude le suit à chaque fois. C'est ton expertise codifiée.
      </p>

      <h3>9.6 — Les Skills qui font tourner Buildrs</h3>
      <p>
        Chez Buildrs, on a 3 catégories de Skills :
      </p>
      <p>
        <strong>Les Skills communautaires (installés sur chaque projet) :</strong>
      </p>
      <p>
        Frontend Design, SuperPowers, Feature Dev, Code Review. Ce sont les fondamentaux — on ne lance jamais un projet sans eux.
      </p>
      <p>
        <strong>Les Skills custom Buildrs :</strong>
      </p>
      <p>
        <strong>"buildrs-brand"</strong> — Le design system complet de Buildrs : couleurs (#0A0A0A, #DA7756, #FFFFFF), typographies (serif pour les titres, sans-serif pour le body), effets (glassmorphism, grain overlay), spacing, border-radius. Chaque interface générée par Claude Code a automatiquement le look Buildrs. Cohérence parfaite sur tous les projets, sans briefer manuellement.
      </p>
      <p>
        <strong>"buildrs-copy"</strong> — Le ton de communication Buildrs : direct, sans jargon, tutoiement, phrases courtes, orienté action. Quand Claude rédige du contenu dans un projet Buildrs, il écrit comme nous — automatiquement.
      </p>
      <p>
        <strong>"buildrs-architecture"</strong> — Les conventions techniques : stack standard (React + TypeScript + Tailwind + Supabase), structure de dossiers, naming conventions, patterns à utiliser et patterns à éviter. Claude Code produit du code qui s'intègre parfaitement dans l'existant.
      </p>
      <p>
        <strong>Le résultat concret :</strong> quand Alfred dit à Claude Code "crée une landing page pour cette offre", le résultat a le bon design, le bon ton, la bonne structure technique — dès le premier jet. Pas 5 itérations pour corriger le style. Pas de "non c'est trop corporate". C'est calibré.
      </p>

      {/* ── Diagramme : L'écosystème Skills ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          L'écosystème Skills
        </p>
        {/* Sans vs Avec */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
          <div style={{
            padding: "16px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "8px",
            textAlign: "center" as const,
          }}>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(237,238,239,0.4)", marginBottom: "8px" }}>Sans Skills</div>
            <div style={{ fontSize: "13px", color: "rgba(237,238,239,0.5)" }}>Correct mais générique</div>
          </div>
          <div style={{
            padding: "16px",
            background: "rgba(218,119,86,0.08)",
            border: "1px solid rgba(218,119,86,0.2)",
            borderRadius: "8px",
            textAlign: "center" as const,
          }}>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "#DA7756", marginBottom: "8px" }}>Avec Skills</div>
            <div style={{ fontSize: "13px", color: "rgba(237,238,239,0.7)" }}>Calibré, pro, différenciant</div>
          </div>
        </div>
        {/* Skills grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {[
            { label: "Frontend Design", desc: "Interfaces premium" },
            { label: "SuperPowers", desc: "Cycle de vie complet" },
            { label: "Feature Dev", desc: "Brief → Code structuré" },
            { label: "Code Review", desc: "4 agents en parallèle" },
            { label: "Skills custom", desc: "Ton expertise codifiée" },
            { label: "Skills Claude AI", desc: "Web, code, research, files" },
          ].map((item) => (
            <div key={item.label} style={{
              padding: "10px 12px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px",
            }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "#EDEEEF", marginBottom: "2px" }}>{item.label}</div>
              <div style={{ fontSize: "10px", color: "rgba(237,238,239,0.4)" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <CalloutBox variant="action">
        Ouvre ton terminal et installe les 2 Skills essentiels maintenant : <code>npx skills add frontend-design</code> puis <code>/plugin install superpowers</code>. Teste : lance Claude Code dans un dossier et tape <code>/frontend-design</code>. Décris une interface — et compare le résultat avec ce que Claude produit sans le Skill. La différence est flagrante.
      </CalloutBox>

      <OfferCTA variant="card" icon="⚡" title="LES SKILLS BUILDRS — PRÊTS À INSTALLER" buttonLabel="Obtenir le Kit d'implémentation → 97€" buttonLink="/dashboard/offres">
        Tu viens de comprendre ce que les Skills peuvent faire. Le Kit d'implémentation contient nos Skills pré-configurés, nos fichiers SKILL.md optimisés, et la config complète qu'on utilise en production chez Buildrs.
        <br /><br />
        <strong>Copie. Colle. C'est installé.</strong>
      </OfferCTA>
    </>
  ),
}

const chapter10: Chapter = {
  number: "10",
  title: "Connecte Claude à 100+ services externes",
  sidebarTitle: "MCP & Connexions",
  subtitle: "GitHub, Supabase, Stripe, Google Workspace — Claude Code interagit directement avec tes outils.",
  bloc: "Supercharger",
  actionPlan: [
    "Installer Context7 MCP (indispensable)",
    "Ajouter GitHub MCP si tu build des projets",
    "Retenir : Skills = méthode, MCP = connexion, Hooks = sécurité",
    "Passer au chapitre 11",
  ],
  quiz: [
    {
      question: "La différence entre Skill et MCP ?",
      options: ["C'est la même chose", "Skill = COMMENT travailler (méthodologie), MCP = accès aux services EXTERNES (données, APIs)", "Skill = gratuit, MCP = payant"],
      correctIndex: 1,
    },
    {
      question: "Context7 MCP sert à :",
      options: ["Connecter Claude à ChatGPT", "Fournir à Claude Code la documentation à jour des librairies en temps réel — fini les APIs obsolètes", "Traduire le code en plusieurs langues"],
      correctIndex: 1,
    },
    {
      question: "Chez Buildrs, le trio Skills + MCP + Hooks permet de :",
      options: ["Décorer l'interface", "Avoir un agent qui code avec les bonnes pratiques, accède aux vrais services, et vérifie son travail automatiquement", "Remplacer le plan Pro"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>10.1 — Le problème : Claude Code est puissant mais isolé</h3>
      <p>
        Au chapitre 9, tu as donné à Claude Code des compétences avec les Skills. Il sait maintenant COMMENT travailler. Mais il ne sait pas encore AVEC QUOI travailler.
      </p>
      <p>
        Par défaut, Claude Code peut lire et modifier les fichiers de ton projet. C'est déjà énorme. Mais dans un vrai projet, tu as besoin de bien plus : une base de données, un système de paiement, un repo GitHub, des documents Google, une API tierce.
      </p>
      <p>
        Sans MCP, tu dois tout faire manuellement. Tu ouvres Stripe dans un onglet, tu copies un ID produit, tu le colles dans ton code. Tu vas sur la doc Supabase, tu cherches la bonne syntaxe, tu l'intègres à la main. C'est du ping-pong entre onglets.
      </p>
      <p>
        Les MCP éliminent ça. Ils branchent Claude Code directement aux services. Il n'a plus besoin de toi comme intermédiaire — il interagit avec tes outils de production en direct.
      </p>

      <h3>10.2 — MCP : le concept en 30 secondes</h3>
      <p>
        MCP = Model Context Protocol. Derrière ce nom technique, c'est simple : ce sont des serveurs qui donnent à Claude Code l'accès à des services externes.
      </p>
      <p>
        Pense aux MCP comme des rallonges. Ton Claude Code est une machine puissante, mais il est branché sur une seule prise (tes fichiers locaux). Chaque MCP ajoute une prise supplémentaire : une vers GitHub, une vers Supabase, une vers Stripe, une vers Google Workspace.
      </p>
      <p>La règle à retenir :</p>
      <ul>
        <li><strong>Skills</strong> = COMMENT travailler (méthodologie, standards, process)</li>
        <li><strong>MCP</strong> = accès à QUOI travailler (services, données, APIs)</li>
        <li><strong>Skills + MCP</strong> = 80% de tes workflows couverts</li>
      </ul>

      <h3>10.3 — Les 5 MCP que Buildrs installe sur chaque projet</h3>
      <p>
        <strong>Context7 — La documentation vivante</strong>
      </p>
      <p>
        Le MCP le plus important. Problème classique : tu demandes à Claude Code d'intégrer une librairie, et il utilise une syntaxe obsolète parce que ses connaissances d'entraînement datent. Résultat : du code qui plante et des heures de debugging.
      </p>
      <p>
        Context7 résout ça. Il récupère la documentation à jour, en temps réel, de n'importe quelle librairie — React, Next.js, Supabase, Stripe, Tailwind, Prisma, etc. Claude Code consulte la vraie doc avant d'écrire une seule ligne. Fini les API obsolètes et les méthodes qui n'existent plus.
      </p>
      <CodeBlock language="Terminal" code="claude mcp add context7 -- npx -y @upstash/context7-mcp@latest" />
      <p>
        <strong>GitHub — Le gestionnaire de code</strong>
      </p>
      <p>
        Claude Code gère tes repositories directement. Il crée des repos, pousse du code, crée des Pull Requests, gère les branches. Tu ne touches plus à l'interface GitHub — Claude s'en charge.
      </p>
      <p>
        <strong>Supabase — Le backend complet</strong>
      </p>
      <p>
        Base de données PostgreSQL, authentification, stockage de fichiers, fonctions serverless — tout Supabase est accessible depuis Claude Code. Tu dis "ajoute l'authentification par email" et Claude configure la table users, les policies de sécurité, et le flow de login. Directement dans ta base Supabase.
      </p>
      <p>
        <strong>Stripe — Les paiements</strong>
      </p>
      <p>
        Claude Code crée des produits, des plans d'abonnement, des pages de checkout, des webhooks — directement dans ton compte Stripe. Tu décris ton modèle de pricing, il le construit.
      </p>
      <p>
        <strong>Google Workspace — L'écosystème bureautique</strong>
      </p>
      <p>
        Drive, Gmail, Calendar, Sheets. Claude Code peut lire des données depuis un Google Sheet, envoyer un email, créer un document. Utile pour les automatisations et les intégrations avec tes outils quotidiens.
      </p>
      <CalloutBox variant="important">
        Sans MCP, chaque intégration est manuelle : tu lis la doc, tu copies des snippets, tu configures des clés API à la main. Avec MCP, tu décris ce que tu veux et Claude Code le fait — parce qu'il a un accès direct au service. Le gain de temps sur une intégration Stripe par exemple : de 2-3 heures à 5 minutes.
      </CalloutBox>

      <h3>10.4 — Les Hooks : le filet de sécurité automatique</h3>
      <p>
        Les Hooks sont un complément aux MCP. Ce sont des actions automatiques qui se déclenchent à des moments précis du workflow de Claude Code :
      </p>
      <p>
        <strong>Avant chaque commit</strong> → Claude lance les tests automatiquement. Si ça casse, il ne push pas.
      </p>
      <p>
        <strong>Après chaque modification de fichier</strong> → Vérification du formatage et du linting. Le code reste propre.
      </p>
      <p>
        <strong>Au démarrage d'une session</strong> → Chargement de la configuration projet. Claude est briefé dès la première seconde.
      </p>
      <p>
        Tu ne les configures qu'une fois. Ensuite, ils tournent en arrière-plan et t'empêchent de faire des erreurs. C'est un filet de sécurité invisible.
      </p>

      <h3>10.5 — Le trio gagnant : Skills + MCP + Hooks</h3>
      <p>
        Pour bien comprendre comment tout s'emboîte :
      </p>
      <p>
        Les <strong>Skills</strong> disent à Claude Code comment travailler — les méthodes, les standards, la qualité attendue.
      </p>
      <p>
        Les <strong>MCP</strong> lui donnent accès aux services — les bases de données, les APIs, les outils de paiement.
      </p>
      <p>
        Les <strong>Hooks</strong> automatisent les vérifications — les tests, le formatage, la qualité du code.
      </p>
      <p>
        Ensemble, c'est un écosystème complet. Claude Code ne code pas dans le vide : il suit une méthodologie (Skills), interagit avec les vrais services (MCP), et vérifie son travail automatiquement (Hooks).
      </p>

      {/* ── Diagramme : Skills + MCP + Hooks ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          Skills + MCP + Hooks
        </p>
        {/* Top: Claude Code */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Claude Code
          </div>
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* 3 columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
          {[
            { label: "Skills", role: "COMMENT travailler", items: "frontend-design · superpowers · feature-dev · customs", color: "rgba(74,222,128,0.7)", bg: "rgba(74,222,128,0.06)", border: "rgba(74,222,128,0.15)" },
            { label: "MCP", role: "AVEC QUOI travailler", items: "Context7 · GitHub · Supabase · Stripe · GWS", color: "#DA7756", bg: "rgba(218,119,86,0.06)", border: "rgba(218,119,86,0.15)" },
            { label: "Hooks", role: "VÉRIFICATIONS auto", items: "Tests · Linting · Formatage", color: "rgba(168,130,255,0.8)", bg: "rgba(168,130,255,0.06)", border: "rgba(168,130,255,0.15)" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" as const }}>
              <div style={{
                padding: "12px 8px",
                background: item.bg,
                border: `1px solid ${item.border}`,
                borderRadius: "8px",
                marginBottom: "6px",
              }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: item.color, marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "10px", color: "rgba(237,238,239,0.4)", marginBottom: "6px" }}>{item.role}</div>
                <div style={{ fontSize: "9px", color: "rgba(237,238,239,0.3)", lineHeight: "1.4" }}>{item.items}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Un agent qui code comme un senior avec accès à tout
          </div>
        </div>
      </div>

      <h3>10.6 — Comment les MCP fonctionnent chez Buildrs</h3>
      <p>
        Sur chaque projet client, Buildrs configure minimum 3 MCP dès le jour 1 :
      </p>
      <p>
        <strong>Context7</strong> est systématique. C'est non-négociable. On ne lance jamais un build sans que Claude Code ait accès à la documentation à jour. C'est ce qui fait que notre code fonctionne du premier coup dans 90% des cas — pas parce qu'on est des génies, mais parce que Claude consulte la bonne doc avant de coder.
      </p>
      <p>
        <strong>GitHub + Supabase</strong> sont le socle de chaque projet. Claude Code push le code sur GitHub automatiquement, et configure la base de données Supabase directement. Quand Alfred dit "ajoute un système d'authentification avec Supabase", Claude consulte la doc exacte via Context7, construit le code avec les bonnes pratiques via le Skill architecture, et le connecte directement à la base Supabase via le MCP. Trois couches qui travaillent ensemble en une seule commande.
      </p>
      <p>
        <strong>Stripe</strong> est ajouté dès qu'il y a de la monétisation. Le moment concret : Alfred dit "intègre un abonnement mensuel à 29€ avec 7 jours d'essai gratuit". Claude Code crée le produit dans Stripe, configure le prix, génère le checkout flow, met en place le webhook pour gérer les événements de paiement, et intègre tout dans l'app. Ce qui prenait une demi-journée de lecture de doc Stripe + code + tests se fait en quelques minutes.
      </p>
      <p>
        Le fichier <code>.mcp.json</code> qui configure tout ça fait 15 lignes. On le copie d'un projet à l'autre. C'est devenu un standard Buildrs.
      </p>

      <CalloutBox variant="action">
        Installe Context7 maintenant — c'est le MCP le plus impactant et le plus simple : <code>claude mcp add context7 -- npx -y @upstash/context7-mcp@latest</code>. Ensuite, teste : lance Claude Code et demande-lui d'utiliser une librairie récente. Compare la qualité du code avec et sans Context7. Tu verras la différence.
      </CalloutBox>

      <OfferCTA variant="card" icon="⚡" title="LE FICHIER .MCP.JSON COMPLET DE BUILDRS" buttonLabel="Obtenir le Kit → 97€" buttonLink="/dashboard/offres">
        Le fichier .mcp.json complet de Buildrs (Context7 + GitHub + Supabase + Stripe + GWS) est inclus dans le Kit d'implémentation. <strong>Prêt à copier.</strong>
      </OfferCTA>
    </>
  ),
}

const chapter11: Chapter = {
  number: "11",
  title: "Un Claude qui se souvient de tout, automatiquement",
  sidebarTitle: "CLAUDE.md & Mémoire",
  subtitle: "Chaque projet a son contexte. Claude le retient entre les sessions.",
  bloc: "Supercharger",
  actionPlan: [
    "Créer un CLAUDE.md à la racine de ton projet principal",
    "Y mettre au minimum : description, conventions, design system, interdits",
    "Lancer Claude Code et vérifier qu'il respecte les instructions",
    "Passer au chapitre 12",
  ],
  quiz: [
    {
      question: "Le CLAUDE.md c'est :",
      options: ["Un fichier de documentation que tu lis toi-même", "Un fichier que Claude Code lit automatiquement à chaque session pour connaître le contexte du projet", "Un template d'email marketing"],
      correctIndex: 1,
    },
    {
      question: "Un non-dev peut créer un CLAUDE.md utile ?",
      options: ["Non, il faut connaître le code", "Oui — il suffit de décrire qui tu es, ton style, ce que tu veux et ce que tu ne veux pas", "Seulement avec l'aide d'un développeur"],
      correctIndex: 1,
    },
    {
      question: "La section la plus importante d'un CLAUDE.md selon Buildrs :",
      options: ["La description du projet", "La section \"Ce qu'il ne faut PAS faire\" — c'est elle qui empêche Claude de dériver", "La liste des couleurs"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>11.1 — Le problème que personne ne voit venir</h3>
      <p>
        Tu as installé Claude Code. Tu as configuré tes Skills et tes MCP. Tu commences à builder. Claude produit du bon travail. Et puis tu fermes le terminal.
      </p>
      <p>
        Le lendemain, tu relances Claude Code sur le même projet. Et là — il a tout oublié. Il ne sait plus que ton design est en dark mode. Il ne sait plus que tu utilises TypeScript strict. Il ne sait plus que tu as un accent terracotta #DA7756. Il repart de zéro.
      </p>
      <p>
        Tu te retrouves à ré-expliquer les mêmes choses à chaque session. Le ton. Les conventions. Le design system. Les trucs à ne pas faire. C'est frustrant et c'est du temps perdu.
      </p>
      <p>
        Le CLAUDE.md résout ce problème. Définitivement.
      </p>

      <h3>11.2 — Le CLAUDE.md : le brief que Claude n'oublie jamais</h3>
      <p>
        C'est un fichier Markdown que tu places à la racine de ton projet. Un seul fichier. Claude Code le lit automatiquement à chaque session — avant même que tu tapes quoi que ce soit.
      </p>
      <p>
        C'est l'équivalent d'une lettre d'accueil que tu donnerais à un collaborateur le premier jour : voici le projet, voici comment on travaille ici, voici ce qu'il faut respecter, voici ce qu'il ne faut jamais faire.
      </p>
      <p>
        Sauf que cette lettre, Claude la relit à chaque fois qu'il "arrive au bureau". Il n'oublie jamais. Il ne dérive jamais. Il est briefé avant que tu dises un mot.
      </p>

      <h3>11.3 — Template CLAUDE.md pour les projets techniques</h3>
      <p>
        Si tu builds une application avec Claude Code, voici la structure qu'on utilise chez Buildrs :
      </p>
      <CodeBlock
        language="markdown"
        code={`# Projet : [NOM DU PROJET]

## Description
[Ce que fait le projet] pour [quelle audience].
[En une phrase : quel problème ça résout.]

## Stack technique
- Frontend : React + TypeScript + Tailwind CSS
- Backend : Supabase (PostgreSQL + Auth + Storage)
- Déploiement : Vercel
- Paiements : Stripe (si applicable)

## Conventions
- Composants fonctionnels React avec hooks
- TypeScript strict — pas de \`any\`
- Tailwind uniquement — pas de CSS inline, pas de fichiers CSS séparés
- Noms de fichiers en kebab-case
- Commits en français : type(scope): description

## Design system
- Fond : #0A0A0A
- Texte principal : #FFFFFF
- Texte secondaire : #A0A0A0
- Accent : #DA7756 (terracotta)
- Border radius : 12px
- Typo titre : serif
- Typo body : sans-serif
- Style : glassmorphism avec fond semi-transparent

## Ce qu'il ne faut PAS faire
- Ne jamais modifier les fichiers de migration Supabase manuellement
- Ne pas utiliser de CSS inline — Tailwind uniquement
- Ne pas stocker de secrets dans le code — variables d'environnement
- Ne pas créer de composants class — uniquement fonctionnels

## Structure du projet
src/
  components/   → composants réutilisables
  pages/        → pages de l'application
  hooks/        → hooks personnalisés
  lib/          → utilitaires et configuration
  types/        → types TypeScript`}
      />
      <p>
        Ce template fait 40 lignes. Tu l'adaptes en 10 minutes. Et à partir de là, chaque session Claude Code est cohérente avec les précédentes.
      </p>

      <h3>11.4 — Template CLAUDE.md pour les non-devs</h3>
      <p>
        Tu n'as pas besoin de connaître React ou TypeScript pour créer un CLAUDE.md utile. Si tu utilises Claude Code pour du contenu, de la stratégie ou n'importe quel projet non-technique, le CLAUDE.md marche aussi bien.
      </p>
      <CodeBlock
        language="markdown"
        code={`# Projet : [NOM]

## Qui je suis
[Ton métier], audience [description], [tranche d'âge/profil].

## Mon style de communication
[Direct/Bienveillant/Provocateur/etc.]. Tutoiement/Vouvoiement.
Phrases [courtes/longues]. Ton [chaud/pro/décontracté].

## Ce que je veux que Claude fasse
[Décrire le type de travail attendu dans ce projet]
Exemples : contenu structuré, exercices pratiques, analyses marché...

## Ce que je ne veux PAS
[Les choses à éviter absolument]
Exemples : ton corporate, listes interminables, clichés, jargon...

## Références
[Ce qui inspire le ton ou le style]
Exemples : "écris comme [personne]", "le style de [marque]"`}
      />
      <p>
        C'est tout. 15 lignes. Et ça change complètement la pertinence de ce que Claude produit — parce qu'il ne démarre plus d'une page blanche. Il démarre avec TON contexte.
      </p>

      <h3>11.5 — Les 3 niveaux de mémoire : comment ils s'empilent</h3>
      <p>
        L'écosystème Claude a 3 couches de mémoire qui se complètent :
      </p>
      <p>
        <strong>Niveau 1 — Mémoire globale (Claude AI)</strong>
      </p>
      <p>
        Ce que Claude retient sur toi à travers toutes les conversations : ton nom, ton activité, tes préférences de format, tes instructions récurrentes. C'est ta "carte d'identité" pour Claude. Active dans Settings → Memory.
      </p>
      <p>
        <strong>Niveau 2 — Mémoire projet (CLAUDE.md)</strong>
      </p>
      <p>
        Ce que Claude retient pour UN projet spécifique : la stack, les conventions, le design system, les contraintes. C'est le brief permanent d'un projet. Lu automatiquement par Claude Code à chaque session.
      </p>
      <p>
        <strong>Niveau 3 — Mémoire de session (conversation en cours)</strong>
      </p>
      <p>
        Ce que Claude retient dans la conversation active : les détails de la tâche, les décisions prises, les fichiers modifiés. Ça disparaît quand tu fermes le terminal.
      </p>
      <p>L'idéal : utiliser les 3 ensemble.</p>
      <ul>
        <li>La mémoire globale pour que Claude te connaisse toi</li>
        <li>Le CLAUDE.md pour que Claude connaisse le projet</li>
        <li>La session pour le travail en cours</li>
      </ul>
      <p>
        Le résultat : tu ouvres Claude Code, et il sait qui tu es (niveau 1), comment travailler sur ce projet (niveau 2), et ce que tu lui demandes maintenant (niveau 3). Zéro friction.
      </p>

      {/* ── Diagramme : Les 3 niveaux de mémoire ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          Les 3 niveaux de mémoire
        </p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
          {[
            { level: "1", label: "Mémoire globale", scope: "Permanent · Toutes les conversations", what: "Qui tu es", color: "rgba(74,222,128,0.7)", bg: "rgba(74,222,128,0.06)", border: "rgba(74,222,128,0.15)" },
            { level: "2", label: "CLAUDE.md", scope: "Permanent · Un projet spécifique", what: "Le projet", color: "#DA7756", bg: "rgba(218,119,86,0.06)", border: "rgba(218,119,86,0.15)" },
            { level: "3", label: "Session", scope: "Temporaire · Une conversation", what: "La tâche en cours", color: "rgba(168,130,255,0.8)", bg: "rgba(168,130,255,0.06)", border: "rgba(168,130,255,0.15)" },
          ].map((item) => (
            <div key={item.level} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: item.bg,
                border: `1px solid ${item.border}`,
                fontSize: "11px",
                fontWeight: 700,
                color: item.color,
                flexShrink: 0,
              }}>
                {item.level}
              </div>
              <div style={{
                flex: 1,
                padding: "10px 14px",
                background: item.bg,
                border: `1px solid ${item.border}`,
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap" as const,
                gap: "4px",
              }}>
                <div>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: item.color }}>{item.label}</span>
                  <span style={{ fontSize: "10px", color: "rgba(237,238,239,0.35)", marginLeft: "8px" }}>{item.scope}</span>
                </div>
                <span style={{ fontSize: "11px", color: "rgba(237,238,239,0.5)" }}>{item.what}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Arrow + result */}
        <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 8px" }}>
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Réponse parfaitement contextualisée — dès le premier message
          </div>
        </div>
      </div>

      <h3>11.6 — Le CLAUDE.md chez Buildrs : le fichier qui fait tourner la machine</h3>
      <p>
        Chez Buildrs, le CLAUDE.md n'est pas optionnel. C'est la première chose qu'on crée sur chaque projet — avant même d'écrire une ligne de code.
      </p>
      <p>
        <strong>Le CLAUDE.md de ce guide</strong> (celui que tu lis en ce moment) fait 45 lignes. Il contient le design system complet (dark mode, terracotta, glassmorphism), les conventions React, les instructions de ton éditorial (tutoiement, direct, concret), et les contraintes (pas de jargon non-expliqué, pas de listes sans contexte). Ce fichier a été écrit une seule fois et a servi sur +50 sessions de développement. Claude Code n'a jamais dévié du style — parce que le CLAUDE.md le recadre à chaque démarrage.
      </p>
      <p>
        <strong>Le CLAUDE.md type d'un projet client</strong> fait entre 30 et 60 lignes. Il est écrit lors du kickoff avec le client (jour 1 de l'implémentation). Alfred pose les questions : stack ? Design ? Conventions ? Ton ? Interdits ? Et le CLAUDE.md est rédigé en 15 minutes. À partir de là, n'importe quelle session Claude Code sur ce projet produit du travail cohérent — que ce soit Alfred, un agent autonome, ou même le client lui-même qui lance Claude Code.
      </p>
      <p>
        <strong>Le secret :</strong> la section "Ce qu'il ne faut PAS faire" est la plus importante du fichier. C'est elle qui empêche Claude de dériver. Sans elle, Claude fait des choix par défaut qui peuvent casser la cohérence. Avec elle, il sait exactement ce qui est interdit — et il respecte.
      </p>
      <CalloutBox variant="buildrs">
        La différence entre un projet avec un bon CLAUDE.md et un projet sans : le premier produit des résultats cohérents à la première session. Le second nécessite 5-10 messages de correction à chaque fois. Sur 50 sessions, ça représente des heures de gagnées.
      </CalloutBox>

      <CalloutBox variant="action">
        Crée un fichier CLAUDE.md à la racine de ton projet principal. Copie le template qui correspond à ton cas (technique ou non-dev) et adapte-le en 10 minutes. La prochaine fois que tu lances Claude Code dans ce dossier, tu verras la différence immédiatement — Claude est déjà briefé.
      </CalloutBox>

      <OfferCTA variant="card" icon="⚡" title="5 TEMPLATES CLAUDE.MD PAR TYPE DE PROJET" buttonLabel="Obtenir le Kit → 97€" buttonLink="/dashboard/offres">
        5 templates CLAUDE.md par type de projet (SaaS, coaching, e-commerce, agence, freelance) → inclus dans le Kit d'implémentation.
      </OfferCTA>
    </>
  ),
}

const chapter12: Chapter = {
  number: "12",
  title: "Tes employés IA — disponibles 24/7",
  sidebarTitle: "Agents IA 24/7",
  subtitle: "Crée des agents qui bossent pour toi en continu. Prospection, contenu, reporting, veille.",
  bloc: "Supercharger",
  actionPlan: [
    "Créer ton premier agent \"Morning Brief\" avec /schedule",
    "Adapter le prompt à tes connecteurs (Gmail, Slack, Calendar)",
    "Vérifier que Claude Desktop reste ouvert aux horaires planifiés",
    "Ajouter un 2ème agent (Veille ou Content Planner) dans la semaine",
    "Passer au chapitre 13",
  ],
  quiz: [
    {
      question: "Les tâches planifiées Cowork permettent de :",
      options: [
        "Programmer des posts sur les réseaux sociaux",
        "Faire exécuter une tâche automatiquement à la fréquence choisie — sans intervention",
        "Planifier des réunions dans le calendrier",
      ],
      correctIndex: 1,
    },
    {
      question: "Chez Buildrs, les 7 agents Cowork coûtent :",
      options: ["5 000€/mois", "$20/mois — le prix de l'abo Pro", "Gratuit"],
      correctIndex: 1,
    },
    {
      question: "Pour que les tâches planifiées s'exécutent, il faut :",
      options: ["Rien de spécial", "Que Claude Desktop soit ouvert et l'ordinateur allumé à l'heure planifiée", "Un serveur cloud dédié"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>12.1 — Le moment où tout bascule</h3>
      <p>
        Tout ce que tu as appris jusqu'ici — Claude AI, Claude Code, les Skills, les MCP, le CLAUDE.md — c'est la fondation. Ce chapitre, c'est le moment où la fondation devient une machine qui tourne sans toi.
      </p>
      <p>Imagine que demain matin, quand tu ouvres ton Mac :</p>
      <ul>
        <li>Un rapport t'attend avec tes emails importants, tes messages Slack, et ton agenda du jour — déjà trié par priorité</li>
        <li>Un document compile les métriques de la semaine dernière</li>
        <li>5 idées de contenu sont prêtes, avec les hooks et les angles</li>
        <li>Un résumé de ce que tes concurrents ont fait cette semaine est posé sur ton bureau</li>
      </ul>
      <p>
        Tu n'as rien demandé. Tu n'as rien lancé. C'est fait.
      </p>
      <p>
        C'est exactement ce que font les tâches planifiées de Cowork. Tu configures une tâche une seule fois — avec une fréquence (chaque matin, chaque lundi, chaque premier du mois) — et Cowork l'exécute automatiquement. À l'heure que tu as choisie. Sans intervention.
      </p>
      <p>
        C'est la version 2026 d'avoir des employés. Sauf qu'ils ne prennent pas de vacances, ne tombent pas malades, n'oublient jamais, et coûtent $20/mois.
      </p>
      <CalloutBox variant="important">
        La plupart des entrepreneurs passent 2-3 heures par jour sur des tâches récurrentes : lire les emails, compiler des rapports, chercher des idées de contenu, surveiller le marché. Ce sont des tâches à haute valeur quand elles sont bien faites — mais elles prennent un temps fou. Les agents Cowork les font en arrière-plan, mieux et plus régulièrement que tu ne les ferais toi-même.
      </CalloutBox>

      <h3>12.2 — Comment créer un agent en 3 minutes</h3>
      <p>C'est plus simple que ce que tu imagines :</p>
      <p>
        <strong>Étape 1</strong> — Ouvre Claude Desktop. Va dans Cowork (onglet dans le sidebar).
      </p>
      <p>
        <strong>Étape 2</strong> — Crée une nouvelle tâche ou ouvre une tâche existante. Tape <code>/schedule</code>.
      </p>
      <p>
        <strong>Étape 3</strong> — Claude te pose quelques questions : quel est le nom de la tâche, que doit-elle faire, à quelle fréquence. Tu réponds.
      </p>
      <p>
        <strong>Étape 4</strong> — Claude crée la tâche planifiée. Elle apparaît dans l'onglet "Scheduled" du sidebar Cowork.
      </p>
      <p>
        <strong>Étape 5</strong> — C'est fait. L'agent tournera automatiquement à l'heure et à la fréquence que tu as choisie.
      </p>
      <p>
        Un point crucial : les tâches planifiées ne s'exécutent que quand ton Mac est allumé et Claude Desktop est ouvert. Si ton ordi est en veille à l'heure planifiée, Cowork rattrapera la tâche dès que tu rallumes.
      </p>

      <h3>12.3 — Les 5 agents que tout entrepreneur devrait avoir</h3>
      <p>
        Ce ne sont pas des idées théoriques. Ce sont les agents les plus demandés par les clients Buildrs — ceux qui ont le plus d'impact immédiat.
      </p>
      <p><strong>Agent 1 — "Morning Brief" (quotidien, 7h30)</strong></p>
      <p>Le plus impactant. L'agent qui change ta matinée.</p>
      <CodeBlock code={`Chaque matin à 7h30, compile un briefing structuré :

1. EMAILS — Résume mes emails non lus importants (Gmail).
   Ignore les newsletters et les notifs automatiques.
   Pour chaque email important : expéditeur, sujet, action requise.

2. MESSAGES — Résume les messages Slack pertinents des dernières 24h.
   Identifie les décisions prises et les questions en attente.

3. AGENDA — Liste mes réunions du jour (Calendar).
   Pour chaque réunion : qui, quand, sujet, contexte.

4. PRIORITÉS — Basé sur les emails, messages et réunions,
   propose un top 3 des priorités de la journée.

Format : rapport structuré avec sections claires.
Commence toujours par les priorités.`} />

      <p><strong>Agent 2 — "Veille Concurrentielle" (quotidien, 12h)</strong></p>
      <p>L'agent qui surveille pendant que tu travailles.</p>
      <CodeBlock code={`Chaque jour à 12h, recherche les dernières actualités
sur [Concurrent A], [Concurrent B], [Concurrent C].

Identifie :
- Changements de pricing ou de positionnement
- Nouvelles features ou produits lancés
- Levées de fonds ou changements d'équipe
- Posts ou contenus qui ont performé

Résume en 5 points max, avec liens sources.
Si rien de notable : "RAS" en une ligne.`} />

      <p><strong>Agent 3 — "Content Planner" (mercredi, 10h)</strong></p>
      <p>L'agent qui t'empêche de chercher des idées de contenu.</p>
      <CodeBlock code={`Chaque mercredi à 10h, analyse les tendances de mon secteur
[décrire ton secteur] et propose 5 idées de contenu.

Pour chaque idée :
- Le hook (2 lignes max, accrocheur)
- L'angle (quel point de vue original)
- Le format recommandé (post court, post long, article, vidéo)
- Pourquoi maintenant (le lien avec l'actualité ou la tendance)

Mon ton : [décrire ton style].
Mon audience : [décrire ta cible].`} />

      <p><strong>Agent 4 — "Weekly Report" (vendredi, 17h)</strong></p>
      <p>L'agent qui clôture ta semaine.</p>
      <CodeBlock code={`Chaque vendredi à 17h, génère un rapport de la semaine :

1. RÉUNIONS — Liste des réunions tenues, décisions clés
2. EMAILS — Échanges importants envoyés et reçus
3. MÉTRIQUES — [tes KPIs : CA, leads, clients, etc.]
4. ACCOMPLISSEMENTS — Ce qui a avancé cette semaine
5. SEMAINE PROCHAINE — Les sujets en attente et les priorités

Format : document structuré avec résumé exécutif en haut (5 lignes).`} />

      <p><strong>Agent 5 — "Invoice Tracker" (vendredi, 14h)</strong></p>
      <p>L'agent qui ne laisse plus passer une facture.</p>
      <CodeBlock code={`Chaque vendredi à 14h, vérifie mes échanges emails (Gmail)
pour identifier les factures en attente de paiement,
les relances à faire, et les paiements reçus cette semaine.

Format : liste avec montant, client, statut (payé/en attente/à relancer),
et le nombre de jours depuis l'envoi.`} />

      <h3>12.4 — Les plugins Cowork : des capacités supplémentaires</h3>
      <p>
        Au-delà des tâches planifiées, Cowork a un écosystème de plugins vérifiés par Anthropic. Design, RH, opérations, recherche — des extensions qui ajoutent des capacités spécialisées à tes agents.
      </p>
      <p>
        Tu les trouves dans Claude Desktop → Plugins → Explorer.
      </p>
      <p>
        Les plugins et les tâches planifiées fonctionnent ensemble : un plugin donne une capacité à Cowork, et la tâche planifiée utilise cette capacité de façon récurrente. C'est comme ça que tu construis des agents de plus en plus sophistiqués au fil du temps.
      </p>

      <h3>12.5 — Les 7 agents qui font tourner Buildrs</h3>
      <p>
        Ce n'est pas de la théorie. Voici les 7 agents qui tournent en production chez Buildrs, avec leur vraie fréquence et leur vrai impact :
      </p>
      <p>
        <strong>1. Daily Brief</strong> — Tous les jours, 7h30
      </p>
      <p>
        Ce qu'il fait : compile emails (Gmail), messages (Slack), agenda (Calendar), KPIs (Stripe). Alfred ouvre son Mac, le briefing est là. Impact : 25 minutes de scroll manuel éliminées chaque matin. Sur un mois, c'est plus de 8 heures récupérées.
      </p>
      <p>
        <strong>2. Client Report</strong> — Chaque lundi, 9h
      </p>
      <p>
        Ce qu'il fait : pour chaque client actif, compile l'avancement du projet, les derniers livrables, les points en attente. Impact : les clients reçoivent un update structuré chaque semaine sans qu'Alfred rédige quoi que ce soit manuellement.
      </p>
      <p>
        <strong>3. Veille IA</strong> — Tous les jours, 12h
      </p>
      <p>
        Ce qu'il fait : surveille les annonces d'Anthropic, les nouveaux Skills/MCP, les évolutions de l'écosystème Claude. Impact : Buildrs est toujours à jour sur les dernières fonctionnalités — souvent avant la plupart des utilisateurs.
      </p>
      <p>
        <strong>4. Content Planner</strong> — Chaque mercredi, 10h
      </p>
      <p>
        Ce qu'il fait : 5 idées de contenu avec hooks, angles, formats. Basé sur les tendances du secteur IA/entrepreneuriat. Impact : la régularité de publication. Fini les "je ne sais pas quoi poster cette semaine".
      </p>
      <p>
        <strong>5. Invoice Reminder</strong> — Chaque vendredi, 14h
      </p>
      <p>
        Ce qu'il fait : identifie les factures en attente, les paiements reçus, les relances à faire. Impact : zéro facture oubliée. Le cash flow est suivi sans y penser.
      </p>
      <p>
        <strong>6. Week Review</strong> — Chaque vendredi, 17h
      </p>
      <p>
        Ce qu'il fait : résumé complet de la semaine avec métriques, accomplissements, et priorités pour lundi. Impact : Alfred part en week-end avec une vue claire. Il reprend lundi avec les priorités déjà posées.
      </p>
      <p>
        <strong>7. Competitor Watch</strong> — Tous les jours, quotidien
      </p>
      <p>
        Ce qu'il fait : surveille 3 acteurs du marché, identifie les changements de positionnement ou de pricing. Impact : aucune surprise concurrentielle. Buildrs voit tout, tout le temps.
      </p>
      <CalloutBox variant="buildrs">
        Le coût total de ces 7 "employés" : $20/mois. Le prix de l'abonnement Pro. L'équivalent en temps humain : 15-20 heures par semaine. L'équivalent en salaire : incalculable.
      </CalloutBox>

      {/* ── Diagramme : Ton équipe IA ── */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          Ton équipe IA
        </p>
        {/* Top */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#EDEEEF",
            textAlign: "center" as const,
          }}>
            Toi — tu dors, tu travailles, tu vis
          </div>
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Agents grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "16px" }}>
          {[
            { label: "Morning Brief", time: "7h30 / quotidien" },
            { label: "Veille Concurrentielle", time: "12h / quotidien" },
            { label: "Content Planner", time: "Mercredi 10h" },
            { label: "Invoice Tracker", time: "Vendredi 14h" },
            { label: "Weekly Report", time: "Vendredi 17h" },
            { label: "Client Report", time: "Lundi 9h" },
          ].map((agent) => (
            <div key={agent.label} style={{
              padding: "8px 10px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px",
            }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "#EDEEEF", marginBottom: "2px" }}>{agent.label}</div>
              <div style={{ fontSize: "9px", color: "rgba(237,238,239,0.35)" }}>{agent.time}</div>
            </div>
          ))}
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#DA7756",
            textAlign: "center" as const,
          }}>
            Tu arrives. Tout est prêt. Tu décides.
          </div>
        </div>
      </div>

      <CalloutBox variant="action">
        Commence par l'agent le plus impactant : le Morning Brief. Ouvre Cowork, tape <code>/schedule</code>, et utilise le prompt de l'Agent 1 ci-dessus. Adapte-le à tes connecteurs (ceux que tu as branchés au chapitre 6). Demain matin, ton briefing sera prêt quand tu arriveras. Tu ne reviendras jamais en arrière.
      </CalloutBox>

      <OfferCTA
        variant="double"
        buttonLabel="Obtenir le Kit d'implémentation → 97€"
        buttonLink="/dashboard/offres"
        secondButton={{ label: "Call d'implémentation avec Alfred → 197€", link: "/dashboard/offres" }}
      >
        Les 7 agents Cowork d'Alfred (prompts exacts + config) → inclus dans le Kit d'implémentation.
      </OfferCTA>
    </>
  ),
}

/* ═══════════════════════════════════════ */
/* BLOC 4 — EXPLOITER                     */
/* ═══════════════════════════════════════ */

const chapter13: Chapter = {
  number: "13",
  title: "Des entrepreneurs génèrent du revenu avec Claude",
  sidebarTitle: "Business avec Claude",
  subtitle: "Ils ne codent pas. Ils n'ont pas d'équipe tech. Ils ont juste le bon écosystème.",
  bloc: "Exploiter",
  actionPlan: [
    "Identifier UN problème dans ton activité ou celle de ton audience",
    "Décrire l'audience précise qui a ce problème",
    "Évaluer si des gens paieraient pour la solution",
    "Passer au chapitre 14 pour le construire",
  ],
  quiz: [
    {
      question: "Un micro-SaaS c'est :",
      options: [
        "Un gros logiciel d'entreprise",
        "Un petit logiciel qui résout UN problème pour UNE audience, avec abonnement mensuel",
        "Un réseau social",
      ],
      correctIndex: 1,
    },
    {
      question: "Le coût d'infrastructure pour lancer :",
      options: ["~10 000€", "$20-100/mois (surtout l'abo Claude, le reste est gratuit au démarrage)", "~500€/mois"],
      correctIndex: 1,
    },
    {
      question: "L'automatisation Cowork peut se vendre en prestation entre :",
      options: ["10-50€", "500-3000€ par workflow", "Ça ne se vend pas"],
      correctIndex: 1,
      explanation: "Parce que tu configures en 1-2h ce qui économise des dizaines d'heures par mois à ton client. Marge quasi-100%.",
    },
  ],
  content: (
    <>
      <h3>13.1 — Ce qui a changé (et pourquoi ça te concerne)</h3>
      <p>Jusqu'en 2024, pour créer un logiciel, tu avais 2 options : apprendre à coder (des mois) ou payer un développeur (300-800€/jour, des semaines). Dans les deux cas, la barrière d'entrée était massive. Des milliers d'idées de produits sont mortes parce que leur créateur n'avait ni le temps, ni le budget, ni les compétences techniques.</p>
      <p><strong>En 2026, cette barrière n'existe plus.</strong></p>
      <p>Avec l'écosystème que tu as configuré dans les 12 chapitres précédents — Claude AI pour penser, Claude Code pour construire, Cowork pour automatiser, les Skills pour la qualité, les MCP pour les connexions — tu as entre les mains ce qui coûtait 50 000€ à mettre en place il y a 2 ans.</p>
      <p>Le coût d'entrée est passé de <strong>50 000€ à $20/mois</strong>. C'est le prix de ton abonnement Claude Pro.</p>
      <p>Et les entrepreneurs qui ont compris ça en premier ne sont pas des développeurs. Ce sont des gens comme toi — avec un problème à résoudre, une audience à servir, et maintenant les outils pour le faire.</p>

      <h3>13.2 — Le micro-SaaS : le business model le plus accessible de l'histoire</h3>
      <p>Un micro-SaaS, c'est un petit logiciel en ligne qui résout <strong>UN problème spécifique</strong> pour <strong>UNE audience précise</strong>. Pas une usine à gaz avec 200 features. Un outil simple, utile, qui se vend en abonnement mensuel.</p>
      <p>Pourquoi c'est le business model idéal avec Claude :</p>
      <p><strong>Revenu récurrent</strong> — chaque client paie chaque mois. Tu ne repars pas de zéro.</p>
      <p><strong>Pas besoin d'équipe</strong> — Claude Code build et maintient. Tu es seul et ça suffit.</p>
      <p><strong>Coût quasi-nul</strong> — la stack est gratuite au démarrage (on y vient).</p>
      <p><strong>Itération rapide</strong> — un client demande une feature, tu la builds dans l'heure.</p>
      <p><strong>Scalable</strong> — 10 clients ou 1000 clients, le coût d'infra reste négligeable.</p>
      <p>Des exemples concrets de ce que des entrepreneurs non-techniques construisent :</p>
      <p>• Un outil de facturation simple pour les coachs → <strong>19€/mois</strong></p>
      <p>• Un générateur de contenu spécialisé pour les agents immobiliers → <strong>29€/mois</strong></p>
      <p>• Un dashboard de suivi de KPIs pour les freelances → <strong>9€/mois</strong></p>
      <p>• Un système de booking pour les praticiens → <strong>39€/mois</strong></p>
      <p>• Un outil de scoring d'offres pour les consultants → <strong>49€/mois</strong></p>
      <p>Le revenu d'un micro-SaaS qui fonctionne : entre <strong>500€ et 5 000€ de MRR</strong> (revenu mensuel récurrent). Certains vont beaucoup plus loin.</p>

      <h3>13.3 — La stack : l'infrastructure d'une startup pour 0€</h3>
      <p>Grâce aux outils que tu as configurés dans ce guide, le coût de lancement d'un micro-SaaS est quasi-nul :</p>
      <p><strong>Claude Code</strong> ($20-100/mois) — C'est ton développeur. Il construit l'application, la maintient, l'améliore. Le seul vrai coût fixe.</p>
      <p><strong>React + Tailwind</strong> (gratuit) — Le frontend de ton app. Claude Code le génère automatiquement.</p>
      <p><strong>Supabase</strong> (gratuit au démarrage) — Ta base de données, ton système d'authentification, ton stockage de fichiers. Le plan gratuit supporte des milliers d'utilisateurs.</p>
      <p><strong>Vercel</strong> (gratuit au démarrage) — Ton hébergement. Déploiement automatique à chaque push. Le plan gratuit tient largement pour un lancement.</p>
      <p><strong>Stripe</strong> (commission uniquement) — Les paiements. Tu ne paies rien tant que tu ne gagnes pas d'argent. Stripe prend une commission sur chaque transaction.</p>
      <p>Total au lancement : <strong>$20-100/mois</strong>. C'est tout. Pas de serveur à louer. Pas de licence à acheter. Pas de développeur à payer. L'infrastructure d'une startup financée — pour le prix d'un abonnement Netflix.</p>

      <h3>13.4 — L'autre business : vendre de l'automatisation</h3>
      <p>Le micro-SaaS n'est pas le seul chemin. Les agents Cowork que tu as créés au chapitre 12 ouvrent un autre business model : <strong>la prestation d'automatisation</strong>.</p>
      <p>Tu maîtrises maintenant quelque chose que 99% des entrepreneurs ne savent pas faire : configurer des agents IA qui travaillent en autonomie. Cette compétence a une valeur énorme.</p>
      <p>Des freelances facturent entre <strong>500€ et 3 000€ par workflow d'automatisation</strong>. Le client décrit ce qu'il veut ("je veux un rapport hebdomadaire de mes KPIs", "je veux que mes leads soient qualifiés automatiquement", "je veux un briefing quotidien"), tu le configures dans Cowork en 1-2 heures, et il le paie parce que ça lui économise des dizaines d'heures par mois.</p>
      <p>C'est du service haut de gamme avec un coût de production quasi-nul. <strong>Ta marge est de presque 100%.</strong></p>

      <h3>13.5 — Le parcours type : de la configuration au revenu</h3>
      <p>Ce n'est pas de la théorie. Voici le chemin que suivent les entrepreneurs qui passent par Buildrs :</p>
      <p><strong>Mois 1</strong> — Tu configures ton écosystème Claude (ce guide). Tu mets en place tes agents. Tu comprends le système.</p>
      <p><strong>Mois 2</strong> — Tu identifies un problème dans ton activité ou celle de ton audience. Tu builds un premier micro-outil avec Claude Code — d'abord pour toi. Tu le testes, tu l'utilises, tu l'améliores.</p>
      <p><strong>Mois 3</strong> — Tu le proposes à d'autres. Premiers utilisateurs. Premiers retours. Premières itérations. Si tu factures, premiers revenus.</p>
      <p><strong>Mois 4+</strong> — Tu itères, tu améliores, tu monétises. Chaque nouveau client est du MRR. Chaque nouvelle feature prend des heures, pas des semaines.</p>
      <p>En parallèle, tu peux vendre des prestations d'automatisation à des clients qui veulent le même type de setup que celui que tu as.</p>

      <h3>13.6 — Ce que Buildrs a construit avec cette méthode</h3>
      <p><strong>NOAH™</strong> — Un générateur d'offres IA pour les entrepreneurs. Tu décris ton expertise, NOAH génère 4 offres structurées en 60 secondes avec pricing, positionnement et argumentaire. Buildé en 5 jours avec Claude Code. Stack : React + Supabase + Stripe. Proposé à 67€. Les premiers revenus sont arrivés la première semaine de lancement. Coût de développement : $100 (un abo Max pendant le build).</p>
      <p><strong>Ce guide que tu lis</strong> — Le dashboard, la LP, l'onboarding, le système d'offres. Tout construit avec Claude Code + le pipeline GitHub → Vercel. Des dizaines d'itérations en quelques jours. La preuve vivante que la méthode fonctionne.</p>
      <p><strong>Les outils internes Buildrs</strong> — Dashboard de KPIs, générateur de briefs clients, scoring de leads, système de suivi projet. Chaque outil a été buildé en quelques heures quand le besoin s'est présenté. Pas de cahier des charges. Pas de sprint de développement. "J'ai besoin de ça" → Claude Code le construit → c'est en ligne.</p>
      <p><strong>Les micro-SaaS clients</strong> — Des outils de facturation, de booking, de matching, d'automatisation — construits pour des clients qui n'ont jamais ouvert un terminal. Buildrs configure l'écosystème, Claude Code build le produit, le client le monétise.</p>
      <p>Le point commun de tout ça : la méthode est toujours la même. Identifier un problème → décrire la solution → Claude Code construit → déployer → monétiser. <strong>C'est ce que tu as appris à faire dans ce guide.</strong></p>

      <CalloutBox variant="important">
        On n'est pas dans la promesse vide. Chaque produit mentionné ici existe, tourne, et génère de la valeur. La méthode fonctionne parce qu'elle repose sur des outils qui marchent — et que tu as maintenant configurés. La question n'est plus "est-ce que c'est possible ?" La question c'est "quel problème tu résous en premier ?"
      </CalloutBox>

      {/* Diagramme — De l'idée au revenu */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          DE L'IDÉE AU REVENU
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "center", alignItems: "center", gap: "8px" }}>
          {[
            { label: "Un problème identifié", color: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.15)", text: "#EDEEEF" },
            { label: "→", color: "transparent", border: "transparent", text: "rgba(237,238,239,0.3)" },
            { label: "Claude Code le construit", color: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.15)", text: "#EDEEEF" },
            { label: "→", color: "transparent", border: "transparent", text: "rgba(237,238,239,0.3)" },
            { label: "Supabase + Vercel déploient", color: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.15)", text: "#EDEEEF" },
            { label: "→", color: "transparent", border: "transparent", text: "rgba(237,238,239,0.3)" },
            { label: "Stripe monétise", color: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.15)", text: "#EDEEEF" },
            { label: "→", color: "transparent", border: "transparent", text: "rgba(237,238,239,0.3)" },
            { label: "MRR — Revenu récurrent", color: "rgba(218,119,86,0.12)", border: "rgba(218,119,86,0.25)", text: "#DA7756" },
          ].map((item, i) => (
            item.label === "→" ? (
              <span key={i} style={{ color: item.text, fontSize: "16px", fontWeight: 300 }}>→</span>
            ) : (
              <div key={i} style={{
                padding: "10px 18px",
                background: item.color,
                border: `1px solid ${item.border}`,
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 500,
                color: item.text,
                textAlign: "center" as const,
                fontFamily: "'Geist', sans-serif",
              }}>
                {item.label}
              </div>
            )
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
          <span style={{ fontSize: "11px", color: "rgba(237,238,239,0.3)", fontStyle: "italic" }}>
            ↻ Retours utilisateurs → itération continue
          </span>
        </div>
      </div>

      <OfferCTA variant="implementation" buttonLabel="Découvrir l'implémentation complète → 997€" buttonLink="/dashboard/offres">
        Tu veux passer directement à l'action ? Buildrs installe ton écosystème Claude complet en 48h.
      </OfferCTA>
    </>
  ),
}

const chapter14: Chapter = {
  number: "14",
  title: "Lance ton premier produit en une journée",
  sidebarTitle: "Lancer son MVP",
  subtitle: "De l'idée au produit en ligne qui accepte des paiements — même si tu pars de zéro.",
  bloc: "Exploiter",
  actionPlan: [
    "Définir ton MVP (1 problème, 1 audience, 1 feature)",
    "Copier le prompt de démarrage et l'adapter",
    "Lancer Claude Code et construire",
    "Déployer sur Vercel + intégrer Stripe",
    "Partager avec 10 personnes de ta cible",
    "Passer au chapitre 15",
  ],
  quiz: [
    {
      question: "MVP signifie :",
      options: ["Maximum Value Product", "Minimum Viable Product — le produit le plus simple qui valide ton idée", "Most Valuable Player"],
      correctIndex: 1,
    },
    {
      question: "Temps moyen pour un MVP déployé avec ce framework :",
      options: ["3-6 mois", "~1 journée (définir + planifier + construire + déployer)", "2-3 semaines"],
      correctIndex: 1,
    },
    {
      question: "L'erreur la plus courante au lancement :",
      options: ["Ne pas avoir assez de couleurs dans le design", "Vouloir trop de features au lieu de se concentrer sur un seul problème bien résolu", "Ne pas avoir de logo"],
      correctIndex: 1,
      explanation: "1 problème. 1 audience. 1 feature. Le reste vient après les retours.",
    },
  ],
  content: (
    <>
      <h3>14.1 — Tu as tout ce qu'il faut. Il ne manque que l'action.</h3>
      <p>Récapitulons ce que tu as maintenant :</p>
      <p>• Claude AI configuré avec Projects et mémoire (chapitre 5)</p>
      <p>• Tes outils branchés via les connecteurs (chapitre 6)</p>
      <p>• Claude Code installé et opérationnel (chapitre 7)</p>
      <p>• Le pipeline GitHub → Vercel en place (chapitre 8)</p>
      <p>• Les Skills qui garantissent la qualité (chapitre 9)</p>
      <p>• Les MCP qui connectent aux services (chapitre 10)</p>
      <p>• Le CLAUDE.md qui donne le contexte (chapitre 11)</p>
      <p>• Des agents Cowork qui tournent en arrière-plan (chapitre 12)</p>
      <p>Tu as l'écosystème complet. L'infrastructure d'une équipe tech. Le pipeline de déploiement d'une startup. Les automatisations d'une entreprise structurée. Le tout pour <strong>$20/mois</strong>.</p>
      <p>Ce chapitre, c'est le moment de l'utiliser. <strong>On passe à la construction.</strong></p>

      <h3>14.2 — Le framework en 5 étapes</h3>
      <p>Ce framework, c'est celui que Buildrs utilise pour chaque projet client. Il a été testé sur des dizaines de lancements. Il fonctionne parce qu'il est séquencé, concret, et limité dans le temps.</p>
      <p><strong>Étape 1 — Définir (30 minutes)</strong></p>
      <p>Pas de brainstorming de 3 semaines. 30 minutes chrono pour répondre à 4 questions :</p>
      <p>• Quel problème tu résous ? (en une phrase)</p>
      <p>• Pour qui ? (une audience précise, pas "tout le monde")</p>
      <p>• Quelle est LA feature principale ? (une seule — pas trois, pas cinq)</p>
      <p>• Comment les gens paient ? (abonnement mensuel, achat unique, freemium)</p>
      <p>Utilise Claude AI dans ton Project "Mon Business" pour brainstormer. Il connaît déjà ton contexte — la conversation sera immédiatement pertinente.</p>
      <p><strong>Étape 2 — Planifier (1 heure)</strong></p>
      <p>Demande à Claude Code de créer un plan d'architecture. Avec le skill SuperPowers ou Feature Dev installé, il va structurer le projet proprement : les pages nécessaires, la structure de la base de données (Supabase), le système d'authentification, la logique métier principale, le modèle de données.</p>
      <p>Tu ne codes rien à cette étape. Tu valides le plan. Si ça te semble cohérent, on passe à la construction.</p>
      <p><strong>Étape 3 — Construire (2-4 heures)</strong></p>
      <p>C'est le cœur. Tu lances Claude Code dans ton dossier projet (qui a déjà son CLAUDE.md) et tu lui décris ce que tu veux. Le prompt de démarrage est dans la section suivante — prêt à copier.</p>
      <p>Claude Code va créer la structure, installer les dépendances, construire l'interface, implémenter la logique, et te montrer la preview. Tu guides, tu valides, tu ajustes. En 2-4 heures, tu as un produit fonctionnel.</p>
      <p><strong>Étape 4 — Déployer (30 minutes)</strong></p>
      <p>Tu dis à Claude Code "push sur GitHub et déploie sur Vercel". Il le fait. Ensuite, tu intègres Stripe pour les paiements : "intègre un abonnement mensuel à [prix] avec Stripe Checkout". Claude Code crée le produit Stripe, configure le checkout, et met en place les webhooks.</p>
      <p>Ton produit est en ligne. Avec un paiement fonctionnel. En une journée.</p>
      <p><strong>Étape 5 — Valider (1 semaine)</strong></p>
      <p>Partage le lien avec 10-20 personnes de ta cible. Pas des amis — des gens qui ont le problème que tu résous. Recueille les retours. Itère avec Claude Code : "les utilisateurs disent que [X], modifie [Y]". Chaque itération prend quelques minutes grâce au pipeline.</p>
      <p>Si des gens paient → le produit a de la valeur. Continue. Si personne ne paie → le problème n'est pas assez douloureux, ou l'audience n'est pas la bonne. Pivote.</p>

      <h3>14.3 — Le prompt de démarrage (à copier tel quel)</h3>
      <p>Ce prompt est optimisé pour lancer n'importe quel micro-SaaS. Copie-le, adapte les parties entre crochets, et colle-le dans Claude Code.</p>
      <CodeBlock
        language="Prompt Claude Code"
        code={`Je veux créer un micro-SaaS appelé [NOM].

## Le problème
[Décris le problème en 2-3 phrases. Sois spécifique.]

## L'audience
[Qui sont les utilisateurs ? Quel est leur profil, leur métier, leur niveau ?]

## La solution
[Décris la feature principale en 2-3 phrases. Qu'est-ce que l'outil fait concrètement ?]

## Stack technique
- Frontend : React + TypeScript + Tailwind CSS
- Backend : Supabase (PostgreSQL + Auth + Storage + Edge Functions)
- Paiements : Stripe (abonnement mensuel)
- Déploiement : Vercel
- Design : Dark mode, premium, glassmorphism

## Pages
1. Landing page (présentation + CTA d'inscription)
2. Login / Signup (Supabase Auth)
3. Dashboard (feature principale de l'outil)
4. Settings (profil utilisateur + gestion de l'abonnement)

Commence par créer la structure du projet et la landing page.
Utilise le skill frontend-design pour un design premium.`}
      />

      <h3>14.4 — Les erreurs qui tuent un lancement (et comment les éviter)</h3>
      <p><strong>Erreur 1 — Trop de features.</strong> Tu veux résoudre un problème, pas construire une suite logicielle. 1 feature principale, bien exécutée. Le reste viendra après les premiers retours.</p>
      <p><strong>Erreur 2 — Pas d'audience identifiée.</strong> "Tout le monde peut l'utiliser" = personne ne l'achète. Cible un métier, un profil, une douleur spécifique. Plus c'est précis, plus ça convertit.</p>
      <p><strong>Erreur 3 — Attendre la perfection.</strong> Le MVP est imparfait par définition. Il sert à valider, pas à impressionner. Lance avec 80% de ce que tu voudrais, et améliore avec les retours réels.</p>
      <p><strong>Erreur 4 — Ne pas mettre de paiement dès le jour 1.</strong> Si tu lances en "gratuit pour tester", tu ne sauras jamais si les gens sont prêts à payer. Mets un prix dès le départ — même petit. L'argent est la seule validation qui compte.</p>
      <p><strong>Erreur 5 — Construire en isolation.</strong> Partage avec ta cible dès que c'est déployé. Pas dans 3 semaines quand ce sera "prêt". Maintenant. Les retours réels valent 100x ton intuition.</p>

      <h3>14.5 — Comment Buildrs lance un MVP en 5 jours</h3>
      <p>Le process interne de Buildrs pour chaque projet client. C'est exactement ce framework, mais structuré sur une semaine :</p>
      <p><strong>Jour 1 — Brief + CLAUDE.md + Architecture</strong></p>
      <p>Alfred fait un call avec le client. En 45 minutes : problème, audience, feature principale, modèle de revenus. Le CLAUDE.md est rédigé dans la foulée. Claude Code génère le plan d'architecture. Le client valide.</p>
      <p><strong>Jour 2-3 — Construction</strong></p>
      <p>Claude Code build les features. Le CLAUDE.md assure la cohérence. Les Skills (Frontend Design, SuperPowers) assurent la qualité. Les MCP (Supabase, Stripe) connectent les services. Le client voit la preview en temps réel — il peut faire des retours en direct.</p>
      <p><strong>Jour 4 — Intégrations</strong></p>
      <p>Stripe pour les paiements. Supabase Auth pour l'authentification. Resend pour les emails transactionnels. Tout est configuré et testé.</p>
      <p><strong>Jour 5 — QA + Déploiement</strong></p>
      <p>Tests finaux. Push sur GitHub. Déploiement sur Vercel. Le client a son produit en ligne, avec paiement fonctionnel, et une URL à partager au monde.</p>
      <p>Ce process a été utilisé pour NOAH™, pour des outils de facturation, de booking, de matching, de scoring — à chaque fois avec le même résultat : <strong>un produit fonctionnel en 5 jours, pas en 5 mois.</strong></p>
      <p>Le temps que tu y passes seul avec ce guide : probablement 1-2 jours au lieu de 5, parce que tu n'as pas la complexité d'un projet client multi-parties.</p>

      <CalloutBox variant="action">
        Reprends l'idée que tu as identifiée au chapitre 13. Copie le prompt de démarrage ci-dessus. Remplace les crochets par tes réponses. Ouvre ton terminal, lance Claude Code, colle le prompt. Ton MVP sera en ligne avant la fin de la journée.
      </CalloutBox>

      {/* Diagramme — Le framework de lancement */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          LE FRAMEWORK DE LANCEMENT
        </p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px", alignItems: "center" }}>
          {[
            { label: "30 min — Définir", desc: "Problème · Audience · Feature · Pricing", accent: false },
            { label: "1h — Planifier", desc: "Architecture · BDD · Pages · Logique", accent: false },
            { label: "2-4h — Construire", desc: "Claude Code build le MVP complet", accent: true },
            { label: "30 min — Déployer", desc: "GitHub → Vercel + Stripe", accent: false },
            { label: "1 sem — Valider", desc: "10-20 testeurs → Itérer → Monétiser", accent: true },
          ].map((step, i) => (
            <div key={i} style={{ width: "100%", maxWidth: "400px" }}>
              {i > 0 && (
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                  <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
                </div>
              )}
              <div style={{
                padding: "14px 20px",
                background: step.accent ? "rgba(218,119,86,0.12)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${step.accent ? "rgba(218,119,86,0.25)" : "rgba(255,255,255,0.1)"}`,
                borderRadius: "8px",
                textAlign: "center" as const,
              }}>
                <div style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: step.accent ? "#DA7756" : "#EDEEEF",
                  marginBottom: "4px",
                  fontFamily: "'Geist', sans-serif",
                }}>{step.label}</div>
                <div style={{
                  fontSize: "11px",
                  color: "rgba(237,238,239,0.4)",
                  fontFamily: "'Geist', sans-serif",
                }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
          <span style={{ fontSize: "11px", color: "rgba(237,238,239,0.3)", fontStyle: "italic" }}>
            Retours → Itérer (boucle Étape 3-5) → Business validé
          </span>
        </div>
      </div>

      <OfferCTA variant="accompagnement" buttonLabel="En savoir plus →" buttonLink="/dashboard/offres">
        Tu veux être accompagné de A à Z pour lancer ton activité avec Claude ? Découvre l'accompagnement Buildrs — 3 mois pour transformer ton business.
      </OfferCTA>
    </>
  ),
}

const chapter15: Chapter = {
  number: "15",
  title: "La stack gratuite qui remplace une équipe",
  sidebarTitle: "La Stack Complète",
  subtitle: "Tous les outils pour avoir l'infrastructure d'une startup — sans recruter et sans budget.",
  bloc: "Exploiter",
  actionPlan: [
    "Créer les 4 comptes piliers (GitHub, Vercel, Supabase, Stripe)",
    "Connecter GitHub ↔ Vercel",
    "Explorer Mobbin pour l'inspiration design",
    "Bookmarker Magic UI pour les composants premium",
    "Passer au chapitre BONUS",
  ],
  quiz: [
    {
      question: "Le coût d'infrastructure pour lancer un MVP :",
      options: ["~500€/mois", "~0€ au lancement (plans gratuits sur les 4 piliers)", "~100€/mois"],
      correctIndex: 1,
      explanation: "Le premier coût réel arrive quand tu dépasses 1000+ utilisateurs.",
    },
    {
      question: "Vercel se connecte à :",
      options: ["Stripe directement", "GitHub — et déploie automatiquement à chaque push", "Gmail"],
      correctIndex: 1,
    },
    {
      question: "La stack complète de Buildrs coûte :",
      options: ["Plusieurs milliers d'euros par mois", "~$20-25/mois au lancement (Claude Pro + domaine, le reste gratuit)", "C'est entièrement gratuit"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>15.1 — La boîte à outils complète d'un entrepreneur augmenté</h3>
      <p>Dans les chapitres précédents, on a parlé de GitHub, Vercel, Supabase, Stripe. Ce sont les 4 piliers. Mais la vraie stack d'un entrepreneur qui build avec Claude est plus riche que ça.</p>
      <p>Ce chapitre te donne la liste complète — chaque outil que Buildrs utilise au quotidien, classé par rôle, avec le lien et le coût. Pas de théorie. <strong>La boîte à outils exacte.</strong></p>

      <h3>15.2 — Les 4 piliers (indispensables)</h3>
      <p>Ces 4 outils forment le socle. Sans eux, tu ne peux pas build ni déployer. Avec eux, tu as l'infrastructure d'une startup financée.</p>
      <p><strong>GitHub</strong> — github.com — Gratuit</p>
      <p>Le coffre-fort de ton code. Chaque modification est versionnée. Tu peux toujours revenir en arrière. Claude Code push directement dessus. C'est le point de départ de tout le pipeline.</p>
      <p><strong>Vercel</strong> — vercel.com — Gratuit au démarrage</p>
      <p>Ton hébergement. Connecte-le à GitHub et chaque push déclenche un déploiement automatique. Ton app est en ligne avec HTTPS, CDN mondial, en 30 secondes. Tu ne touches jamais à un serveur.</p>
      <p><strong>Supabase</strong> — supabase.com — Gratuit au démarrage</p>
      <p>Ton backend complet. Base de données PostgreSQL, système d'authentification, stockage de fichiers, Edge Functions. Le plan gratuit supporte des milliers d'utilisateurs. Claude Code configure tout via le MCP.</p>
      <p><strong>Stripe</strong> — stripe.com — Commission uniquement</p>
      <p>Les paiements. Tu ne paies rien tant que tu ne gagnes rien. Stripe prend une commission sur chaque transaction. Abonnements, paiements uniques, checkout — Claude Code intègre tout via le MCP.</p>
      <p>Le coût de ces 4 piliers au lancement : <strong>0€</strong>. Le premier coût d'infra arrive quand tu dépasses les limites des plans gratuits — en général autour de 1000+ utilisateurs actifs.</p>

      <h3>15.3 — Les outils de construction</h3>
      <p><strong>Anti-Gravity IDE</strong> — antigravity.dev</p>
      <p>L'éditeur de code pensé pour le VibeCoding. Si tu veux une alternative à VS Code avec Claude Code intégré nativement et une interface optimisée pour la collaboration homme-IA. Buildrs l'utilise comme environnement de build sur certains projets.</p>
      <p><strong>Lovable</strong> — lovable.dev</p>
      <p>Le prototypage rapide. Tu décris ton app en langage naturel, Lovable génère une application React + Supabase complète. Idéal pour valider une idée visuellement en 30 minutes avant de la construire proprement avec Claude Code. C'est sur Lovable qu'on a prototypé la LP de ce guide.</p>
      <p><strong>Magic UI</strong> — magicui.design</p>
      <p>Une bibliothèque de composants React animés, prêts à copier. Des effets visuels premium (shimmer, gradients, particles, glassmorphism) que Claude Code peut intégrer directement. C'est comme ça qu'on obtient des interfaces qui ne ressemblent pas à du "fait par l'IA".</p>

      <h3>15.4 — Les outils de communication et d'emailing</h3>
      <p><strong>Resend</strong> — resend.com — Gratuit au démarrage</p>
      <p>L'envoi d'emails transactionnels. Confirmation d'inscription, réinitialisation de mot de passe, notifications, emails de bienvenue. API moderne, simple à intégrer avec Claude Code. Le plan gratuit couvre 3000 emails/mois.</p>
      <p><strong>Hostinger</strong> — hostinger.fr — À partir de ~3€/mois</p>
      <p>L'hébergement de domaines et l'email professionnel. Quand tu veux passer de ton-projet.vercel.app à monoutil.com avec une boîte mail contact@monoutil.com. Le premier investissement après le lancement gratuit.</p>

      <h3>15.5 — Les outils de recherche et d'inspiration</h3>
      <p><strong>Perplexity</strong> — perplexity.ai — Gratuit / Pro $20/mois</p>
      <p>Le moteur de recherche IA. Quand tu as besoin de données marché, d'analyses concurrentielles, de chiffres pour valider ton idée. Plus rapide et plus structuré que Google pour de la recherche business. Alfred l'utilise en complément de Claude pour la veille et l'analyse de marché.</p>
      <p><strong>Mobbin</strong> — mobbin.com — Gratuit / Pro</p>
      <p>La plus grande bibliothèque de screenshots d'apps et de sites. Quand tu dis à Claude Code "je veux un design comme [telle app]", tu vas chercher l'inspiration sur Mobbin d'abord. Des milliers de références de design réel — pas des templates génériques.</p>
      <p><strong>Nano Banana</strong> — nanobanana.com</p>
      <p>Un outil de design et d'assets visuels pour les créateurs. Utile pour les éléments graphiques de tes landing pages, tes présentations, et tes contenus marketing.</p>

      <h3>15.6 — Comment tout s'assemble</h3>
      <p>Voici le schéma complet de la stack — comment chaque outil interagit avec les autres :</p>
      <CodeBlock
        language="Le flux de construction"
        code={`Toi → Claude Code (Anti-Gravity ou terminal)
         → construit le code (React + Tailwind)
         → configure Supabase (BDD + Auth) via MCP
         → intègre Stripe (paiements) via MCP
         → push sur GitHub
              → Vercel déploie automatiquement
                   → App en ligne sur ton domaine (Hostinger)
                        → Resend gère les emails transactionnels`}
      />
      <CodeBlock
        language="Le flux de recherche et design"
        code={`Perplexity → données marché, validation d'idée
Mobbin → inspiration design, références UX
Magic UI → composants premium pour Claude Code
Nano Banana → assets visuels pour le marketing
Lovable → prototypage rapide avant le build`}
      />
      <CodeBlock
        language="Le flux d'automatisation"
        code={`Claude AI → réflexion, stratégie, contenu
Claude Cowork → agents planifiés (briefing, veille, reporting)
Claude Code → construction et itération`}
      />
      <p>Tout tourne ensemble. Chaque outil a un rôle précis. <strong>Pas de redondance, pas de superflu.</strong></p>

      <h3>15.7 — La stack Buildrs — ce qu'on utilise vraiment</h3>
      <p>Pour que ce soit concret, voici la stack exacte qui fait tourner Buildrs au quotidien :</p>

      {/* Tableau stack Buildrs */}
      <div style={{
        margin: "24px 0",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        overflow: "hidden",
      }}>
        {[
          { cat: "Code", tool: "Claude Code (terminal)", why: "Le moteur de tout" },
          { cat: "IDE", tool: "Anti-Gravity / VS Code", why: "Environnement de build" },
          { cat: "Versioning", tool: "GitHub", why: "Historique + auto-deploy" },
          { cat: "Hosting", tool: "Vercel", why: "Déploiement automatique" },
          { cat: "Backend", tool: "Supabase", why: "BDD + Auth + Storage" },
          { cat: "Paiements", tool: "Stripe", why: "Abonnements + checkout" },
          { cat: "Emails", tool: "Resend", why: "Transactionnels" },
          { cat: "Domaines", tool: "Hostinger", why: "Noms de domaine + email pro" },
          { cat: "Prototypage", tool: "Lovable", why: "MVP visuels rapides" },
          { cat: "Design", tool: "Magic UI + Mobbin", why: "Composants premium + inspiration" },
          { cat: "Recherche", tool: "Perplexity", why: "Veille + data marché" },
          { cat: "Assets", tool: "Nano Banana", why: "Visuels marketing" },
          { cat: "Intelligence", tool: "Claude AI (Pro)", why: "Stratégie + contenu" },
          { cat: "Automatisation", tool: "Claude Cowork", why: "Agents planifiés 24/7" },
        ].map((row, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr 1.5fr",
            gap: "12px",
            padding: "10px 16px",
            borderBottom: i < 13 ? "1px solid rgba(255,255,255,0.06)" : "none",
            background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
          }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#DA7756", fontFamily: "'Geist', sans-serif" }}>{row.cat}</span>
            <span style={{ fontSize: "12px", fontWeight: 500, color: "#EDEEEF", fontFamily: "'Geist', sans-serif" }}>{row.tool}</span>
            <span style={{ fontSize: "11px", color: "rgba(237,238,239,0.5)", fontFamily: "'Geist', sans-serif" }}>{row.why}</span>
          </div>
        ))}
      </div>

      <p>Coût total de cette stack au lancement : <strong>~$20-25/mois</strong> (abo Claude Pro + domaine). Tout le reste est gratuit au démarrage.</p>
      <p>C'est avec cette stack que Buildrs gère des projets clients, build des micro-SaaS, et fait tourner ses propres outils. Pas avec 15 licences SaaS à 200€/mois. Avec des outils gratuits, intelligemment connectés, pilotés par Claude.</p>

      <CalloutBox variant="action">
        Crée les 4 comptes piliers maintenant si ce n'est pas déjà fait : GitHub, Vercel, Supabase, Stripe. Tous gratuits, tous en 2 minutes. Puis explore Mobbin et Magic UI pour commencer à nourrir ton œil en design — ça change la qualité de ce que tu demanderas à Claude Code.
      </CalloutBox>

      {/* Diagramme — La stack complète */}
      <div style={{
        margin: "32px 0",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(237,238,239,0.3)",
          marginBottom: "24px",
          textAlign: "center" as const,
        }}>
          LA STACK COMPLÈTE
        </p>
        {/* Claude Code au centre */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            padding: "12px 28px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#DA7756",
            fontFamily: "'Geist', sans-serif",
          }}>Claude Code</div>
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* 4 Piliers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "20px" }}>
          {["GitHub", "Vercel", "Supabase", "Stripe"].map((tool) => (
            <div key={tool} style={{
              padding: "10px 8px",
              background: "rgba(74,222,128,0.06)",
              border: "1px solid rgba(74,222,128,0.2)",
              borderRadius: "8px",
              fontSize: "11px",
              fontWeight: 600,
              color: "rgba(74,222,128,0.8)",
              textAlign: "center" as const,
              fontFamily: "'Geist', sans-serif",
            }}>{tool}</div>
          ))}
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* App en ligne */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            padding: "10px 24px",
            background: "rgba(218,119,86,0.12)",
            border: "1px solid rgba(218,119,86,0.25)",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#DA7756",
            fontFamily: "'Geist', sans-serif",
          }}>App en ligne</div>
        </div>
        {/* Connector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Outils complémentaires */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {[
            { label: "Hostinger", desc: "Domaine" },
            { label: "Resend", desc: "Emails" },
            { label: "Lovable", desc: "Prototype" },
            { label: "Perplexity", desc: "Recherche" },
            { label: "Mobbin + Magic UI", desc: "Design" },
            { label: "Nano Banana", desc: "Assets" },
          ].map((tool) => (
            <div key={tool.label} style={{
              padding: "8px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px",
              textAlign: "center" as const,
            }}>
              <div style={{ fontSize: "11px", fontWeight: 500, color: "#EDEEEF", fontFamily: "'Geist', sans-serif" }}>{tool.label}</div>
              <div style={{ fontSize: "9px", color: "rgba(237,238,239,0.35)", fontFamily: "'Geist', sans-serif" }}>{tool.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <OfferCTA variant="card" icon="⚡" title="TOUS CES OUTILS CONNECTÉS ET CONFIGURÉS" buttonLabel="Obtenir le Kit → 97€" buttonLink="/dashboard/offres">
        Le Kit d'implémentation inclut les configs, les comptes à créer dans l'ordre, et le workflow complet.
      </OfferCTA>
    </>
  ),
}

const chapterBonus: Chapter = {
  number: "BONUS",
  title: "Ton plan d'action de A à Z",
  sidebarTitle: "Plan d'action A→Z",
  subtitle: "28 étapes. 8 phases. ~2h30. De zéro à machine de guerre.",
  bloc: "Exploiter",
  isBonus: true,
  actionPlan: [
    "Suivre les 8 phases dans l'ordre",
    "Cocher chaque étape au fur et à mesure",
    "Réserver un appel Buildrs si tu veux un setup professionnel",
  ],
  quiz: [
    {
      question: "La première chose à faire pour configurer Claude :",
      options: ["Installer Claude Code", "Créer son compte + installer Claude Desktop + activer la mémoire", "Acheter le plan Max"],
      correctIndex: 1,
    },
    {
      question: "Un CLAUDE.md bien fait permet :",
      options: ["De réduire les tokens", "Que Claude Code comprenne ton projet sans re-briefer à chaque session", "D'accélérer l'IA"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>Phase 1 — Créer son compte & installer (15 min)</h3>
      <ol>
        <li>Créer un compte sur claude.ai</li>
        <li>Choisir le plan Pro ($20/mois)</li>
        <li>Installer Claude Desktop (claude.ai/download)</li>
        <li>Activer la mémoire dans Settings</li>
      </ol>

      <h3>Phase 2 — Activer les fonctionnalités (10 min)</h3>
      <ol>
        <li>Activer la recherche web</li>
        <li>Activer l'exécution de code</li>
        <li>Activer la création de fichiers</li>
        <li>Configurer tes préférences mémoire</li>
      </ol>

      <h3>Phase 3 — Connecter tes outils (15 min)</h3>
      <ol>
        <li>Connecter Google Drive</li>
        <li>Connecter Gmail</li>
        <li>Connecter Slack (si tu l'utilises)</li>
        <li>Installer le plugin Chrome</li>
      </ol>

      <h3>Phase 4 — Créer tes Projects (20 min)</h3>
      <ol>
        <li>Créer le Project "Mon Business"</li>
        <li>Écrire le prompt système (10-15 lignes)</li>
        <li>Ajouter tes documents de référence</li>
      </ol>

      <h3>Phase 5 — Installer Claude Code (20 min)</h3>
      <ol>
        <li>Installer Node.js</li>
        <li><code>npm install -g @anthropic-ai/claude-code</code></li>
        <li>Créer ton premier projet test</li>
        <li>Lancer <code>claude</code> et tester</li>
      </ol>

      <h3>Phase 6 — Ajouter Skills & MCP (20 min)</h3>
      <ol>
        <li>Installer Frontend Design</li>
        <li>Installer SuperPowers</li>
        <li>Ajouter Context7 MCP</li>
        <li>Ajouter GitHub MCP</li>
      </ol>

      <h3>Phase 7 — Créer ton CLAUDE.md (15 min)</h3>
      <ol>
        <li>Créer le fichier à la racine de ton projet</li>
        <li>Description + Stack + Conventions + Design system</li>
        <li>Tester en lançant Claude Code</li>
      </ol>

      <h3>Phase 8 — Lancer ton premier agent Cowork (15 min)</h3>
      <ol>
        <li>Ouvrir Cowork dans Claude Desktop</li>
        <li>Créer l'agent "Morning Brief"</li>
        <li>Configurer la fréquence (quotidien 7h30)</li>
        <li>Vérifier l'exécution le lendemain matin</li>
      </ol>

      <CalloutBox variant="buildrs">
        <strong>Tu veux qu'on fasse tout ça pour toi — en 48h ?</strong>
        <br /><br />
        Buildrs configure ton écosystème Claude complet : Skills, MCP, CLAUDE.md, connecteurs, agents Cowork, workflow de déploiement. Tu te concentres sur ton business, on s'occupe de la machine.
      </CalloutBox>

      <OfferCTA variant="implementation" buttonLabel="Voir toutes les offres Buildrs →" buttonLink="/dashboard/offres">
        <strong>Tu as terminé le guide. Tu sais ce que Claude peut faire.</strong> Maintenant, choisis comment tu veux avancer — du Kit à l'accompagnement complet.
      </OfferCTA>
    </>
  ),
}

/* ═══════════════════════════════════════ */
/* EXPORT                                 */
/* ═══════════════════════════════════════ */

export const CHAPTERS: Chapter[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06,
  chapter07,
  chapter08,
  chapter09,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter15,
  chapterBonus,
]

export const BLOCS = [
  { label: "Comprendre", icon: "📚", chapters: CHAPTERS.filter((c) => c.bloc === "Comprendre") },
  { label: "Configurer", icon: "⚙️", chapters: CHAPTERS.filter((c) => c.bloc === "Configurer") },
  { label: "Supercharger", icon: "🔌", chapters: CHAPTERS.filter((c) => c.bloc === "Supercharger") },
  { label: "Exploiter", icon: "🚀", chapters: CHAPTERS.filter((c) => c.bloc === "Exploiter") },
]
