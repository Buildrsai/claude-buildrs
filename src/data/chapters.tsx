import { CalloutBox, CodeBlock, TableBlock, OfferCTA, type QuizQuestion } from "@/components/dashboard/ChapterComponents"

/* ─── Chapter Type ─── */
export interface Chapter {
  number: string
  title: string
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
  subtitle: "Tu décris. Claude construit. GitHub sauvegarde. Vercel déploie. En ligne avant la fin de la journée.",
  bloc: "Configurer",
  actionPlan: [
    "Créer un compte GitHub (gratuit)",
    "Créer un compte Vercel (gratuit)",
    "Les connecter ensemble",
  ],
  quiz: [
    {
      question: "Avec Vercel, le déploiement fonctionne comment ?",
      options: ["Upload manuel", "Push GitHub = déploiement automatique", "Email au support"],
      correctIndex: 1,
    },
    {
      question: "Le workflow VibeCoding c'est :",
      options: [
        "Coder → Tester → Déployer",
        "Décrire → Claude construit → Preview → GitHub → Vercel → Live",
        "Wireframe → Dev",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>8.1 — La preview en temps réel</h3>
      <p>Chaque modification de Claude Code est visible en direct dans ton navigateur. Tu décris → Claude applique → tu vois le résultat.</p>

      <h3>8.2 — GitHub : ton coffre-fort de code</h3>
      <p>Stockage de code avec historique complet. Claude Code peut créer des repos, pusher, créer des Pull Requests.</p>

      <h3>8.3 — Vercel : déploiement en un clic</h3>
      <p>Connecte GitHub à Vercel → chaque push déploie automatiquement. Ton app est live en quelques secondes.</p>

      <h3>8.4 — Le workflow complet</h3>
      <CodeBlock code="Tu décris → Claude Code construit → Preview locale → Push GitHub → Vercel déploie → App en ligne" />

      <CalloutBox variant="usecase">
        Une freelance copywriter a construit un générateur de landing pages pour ses clients. Elle décrit le positionnement, Claude Code génère la page complète, elle prévisualise en temps réel, ajuste le copy, et déploie sur Vercel en un clic. Ses clients reçoivent la landing page en ligne dans la journée au lieu de 2 semaines. Elle a doublé son tarif — et ses clients sont plus satisfaits qu'avant.
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
  subtitle: "Claude est livré nu. Avec les bons Skills, il devient ton stratège, ton designer, ton dev.",
  bloc: "Supercharger",
  actionPlan: [
    "Installer Frontend Design + SuperPowers",
    "Tester /frontend-design sur un mini-projet",
    "Comprendre comment créer un skill custom",
  ],
  quiz: [
    {
      question: "Un Skill, c'est :",
      options: ["Un plugin payant", "Un fichier SKILL.md qui donne des instructions spécialisées à Claude", "Une API"],
      correctIndex: 1,
    },
    {
      question: "Le skill Frontend Design sert à :",
      options: ["Créer des logos", "Produire des interfaces premium anti-\"IA générique\"", "Optimiser le SEO"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>9.1 — C'est quoi un Skill ?</h3>
      <p>Un fichier SKILL.md qui donne à Claude des instructions spécialisées. Sans Skills = généraliste. Avec = spécialiste redoutable.</p>

      <h3>9.2 — Les Skills essentiels par Buildrs</h3>
      <TableBlock
        headers={["Skill", "Ce qu'il fait", "Commande"]}
        rows={[
          ["Frontend Design", "Interfaces premium, fini le design \"IA\"", "npx skills add frontend-design"],
          ["SuperPowers", "Brainstorming, TDD, debugging, code review", "/plugin install superpowers"],
          ["Feature Dev", "Brief → feature construite étape par étape", "/plugin install feature-dev"],
          ["Code Review", "4 agents analysent ton code en parallèle", "/plugin install code-review"],
        ]}
      />

      <h3>9.3 — Skills pour Claude AI</h3>
      <p>Fonctionnalités à activer dans Claude AI :</p>
      <ul>
        <li>Recherche web</li>
        <li>Exécution de code</li>
        <li>Deep Research</li>
        <li>Création de fichiers</li>
        <li>Artefacts</li>
      </ul>

      <h3>9.4 — Créer ses propres Skills</h3>
      <p>Un SKILL.md dans <code>~/.claude/skills/mon-skill/SKILL.md</code> = ton skill personnel, dispo dans tous tes projets.</p>

      <CalloutBox variant="usecase">
        Un entrepreneur a créé un Skill "expert-pricing" qui contient les frameworks de pricing SaaS (value-based, tiered, freemium). Quand il lance un nouveau produit, il demande à Claude "analyse cette offre et propose 3 structures de prix". Claude applique automatiquement les bonnes méthodes et sort un pricing optimisé en 30 secondes. Il a testé 4 structures de prix en une semaine et trouvé celle qui maximise son MRR — sans consultant à 3000€.
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
  subtitle: "GitHub, Supabase, Stripe, Google Workspace — Claude Code interagit directement avec tes outils.",
  bloc: "Supercharger",
  actionPlan: [
    "Ajouter Context7 MCP (indispensable)",
    "Ajouter GitHub MCP si tu build",
    "Comprendre : Skills = méthode, MCP = connexion",
  ],
  quiz: [
    {
      question: "La différence entre Skill et MCP ?",
      options: ["C'est pareil", "Skill = COMMENT travailler, MCP = accès aux services EXTERNES", "Skill = gratuit, MCP = payant"],
      correctIndex: 1,
    },
    {
      question: "Context7 MCP sert à :",
      options: ["Connecter ChatGPT", "Fournir à Claude la doc à jour des librairies en temps réel", "Traduire le code"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>10.1 — C'est quoi un MCP ?</h3>
      <p>MCP = Model Context Protocol. Des serveurs qui donnent à Claude Code accès à des services externes. Les Skills disent COMMENT travailler. Les MCP donnent accès à QUOI travailler.</p>

      <h3>10.2 — Les MCP essentiels</h3>
      <TableBlock
        headers={["MCP", "Ce qu'il fait", "Commande"]}
        rows={[
          ["Context7", "Docs à jour de toutes les librairies", "claude mcp add context7 -- npx -y @upstash/context7-mcp@latest"],
          ["GitHub", "Repos, PRs, issues", "MCP GitHub officiel"],
          ["Supabase", "BDD, auth, storage", "Supabase MCP"],
          ["Stripe", "Paiements, abonnements", "Stripe MCP"],
          ["Google Workspace", "Drive, Gmail, Calendar, Sheets", "GWS MCP"],
        ]}
      />

      <h3>10.3 — Skills + MCP = 80% des workflows</h3>
      <p>Les Skills donnent la méthodologie. Les MCP donnent les connexions. Ensemble, Claude Code peut tout faire : coder avec les bonnes pratiques ET interagir avec tes services.</p>

      <h3>10.4 — Hooks : le filet de sécurité</h3>
      <p>Actions automatiques à des moments précis :</p>
      <ul>
        <li>Avant chaque commit → lancer les tests</li>
        <li>Après chaque modification → vérifier le formatage</li>
      </ul>

      <CalloutBox variant="usecase">
        Un fondateur de marketplace a connecté Claude Code à Stripe via MCP. Résultat : il dit "ajoute un plan annuel à 197€ avec 14 jours d'essai gratuit" et Claude crée le produit Stripe, le price, le checkout flow, et le webhook — en une seule commande. Ce qui prenait 2h de documentation Stripe + code manuel se fait maintenant en 3 minutes. Il a lancé 3 formules d'abonnement en une après-midi.
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
  subtitle: "Chaque projet a son contexte. Claude le retient entre les sessions.",
  bloc: "Supercharger",
  actionPlan: [
    "Créer un CLAUDE.md dans ton projet principal",
    "Y mettre au minimum : description, conventions, design system",
    "Tester en lançant Claude Code",
  ],
  quiz: [
    {
      question: "Le CLAUDE.md c'est :",
      options: ["Un fichier que tu lis toi-même", "Un fichier que Claude Code lit automatiquement à chaque session", "Un template email"],
      correctIndex: 1,
    },
    {
      question: "Un non-dev peut créer un CLAUDE.md utile ?",
      options: ["Non", "Oui, il suffit de décrire qui tu es, ton style, ce que tu veux et ne veux pas", "Seulement avec un dev"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>11.1 — Le CLAUDE.md</h3>
      <p>Un fichier Markdown à la racine de ton projet. Claude Code le lit automatiquement à chaque session. C'est le brief permanent de ton projet.</p>

      <h3>11.2 — Template CLAUDE.md</h3>
      <CodeBlock
        language="markdown"
        code={`# Projet : [NOM]
## Description
[Ce que fait le projet] pour [qui].
## Stack
- Frontend : React + TypeScript + Tailwind
- Backend : Supabase
- Déploiement : Vercel
## Conventions
- Composants fonctionnels React avec hooks
- TypeScript strict
- Tailwind uniquement
## Design system
- Fond : #0A0A0A · Texte : #FFFFFF · Accent : #DA7756
## Ce qu'il ne faut PAS faire
- Ne pas modifier les migrations Supabase manuellement
- Pas de CSS inline`}
      />

      <h3>11.3 — Les 3 niveaux de mémoire</h3>
      <TableBlock
        headers={["Niveau", "Outil", "Portée"]}
        rows={[
          ["Global", "Mémoire Claude AI", "Toutes les conversations"],
          ["Projet", "CLAUDE.md", "Un projet spécifique"],
          ["Session", "Contexte de conversation", "Une seule conversation"],
        ]}
      />

      <h3>11.4 — CLAUDE.md pour les non-devs</h3>
      <CodeBlock
        language="markdown"
        code={`# Mon projet de coaching
## Qui je suis
Coach en dev perso, audience francophone, 25-45 ans.
## Mon style
Direct, bienveillant, pas de jargon. Tutoiement.
## Ce que je veux
Contenu de formation structuré avec exercices pratiques.
## Ce que je ne veux PAS
Pas de ton corporate. Pas de clichés motivationnels.`}
      />

      <CalloutBox variant="usecase">
        Un créateur de contenu a écrit un CLAUDE.md de 20 lignes pour son projet : ton, audience cible, sujets interdits, format préféré. Depuis, chaque fois qu'il ouvre Claude Code, ses articles de blog sortent directement dans le bon ton, avec les bonnes références, sans aucun re-briefing. Il publie 5 articles/semaine au lieu de 2. Sa newsletter a pris +800 abonnés en 2 mois — grâce à la régularité que la mémoire de Claude lui permet de tenir.
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
  subtitle: "Crée des agents qui bossent pour toi en continu. Prospection, contenu, reporting, veille.",
  bloc: "Supercharger",
  actionPlan: [
    "Créer ton premier agent \"Morning Brief\"",
    "Configurer la fréquence (quotidien 7h30)",
    "Vérifier que Claude Desktop est ouvert + ordi allumé aux horaires planifiés",
  ],
  quiz: [
    {
      question: "Les tâches planifiées Cowork permettent de :",
      options: [
        "Programmer des posts sur les réseaux",
        "Faire exécuter une tâche automatiquement à la fréquence choisie",
        "Planifier des réunions",
      ],
      correctIndex: 1,
    },
    {
      question: "Combien coûtent les \"employés IA\" de Buildrs ?",
      options: ["5000€/mois", "$20/mois (le prix de l'abo Pro)", "Gratuit"],
      correctIndex: 1,
    },
    {
      question: "Pour que les tâches planifiées s'exécutent, il faut :",
      options: ["Rien de spécial", "Que Claude Desktop soit ouvert et l'ordi allumé", "Un serveur dédié"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>12.1 — Le concept : des employés qui ne dorment pas</h3>
      <p>Imagine un assistant qui :</p>
      <ul>
        <li>Chaque matin compile ton briefing (emails, Slack, agenda)</li>
        <li>Chaque lundi génère ton rapport hebdomadaire</li>
        <li>Chaque vendredi prépare ta présentation de la semaine</li>
        <li>Chaque jour surveille tes concurrents et te résume les changements</li>
      </ul>
      <p>C'est exactement ce que font les tâches planifiées de Cowork.</p>

      <h3>12.2 — Comment créer ton premier employé IA</h3>
      <ol>
        <li>Claude Desktop → Cowork → Nouvelle tâche</li>
        <li>Tape <code>/schedule</code></li>
        <li>Décris la tâche en détail</li>
        <li>Choisis la fréquence (quotidien, hebdo, horaire, on demand)</li>
        <li>Claude sauvegarde et exécute automatiquement</li>
      </ol>

      <h3>12.3 — Exemples d'agents à mettre en place</h3>
      <p><strong>Agent "Morning Brief" — Quotidien 7h30</strong></p>
      <CodeBlock code={`Chaque matin, compile :
- Mes emails non lus importants (Gmail)
- Les messages Slack de mon équipe
- Mon agenda du jour (Calendar)
- Les KPIs business de la veille
Format : rapport structuré avec sections et priorités.`} />

      <p><strong>Agent "Weekly Report" — Lundi 9h</strong></p>
      <CodeBlock code={`Chaque lundi, génère un rapport de la semaine précédente :
- Réunions tenues et décisions prises
- Emails envoyés et reçus importants
- Tâches complétées
- Métriques business
Format : document avec résumé exécutif en haut.`} />

      <p><strong>Agent "Veille Concurrentielle" — Quotidien 12h</strong></p>
      <CodeBlock code={`Recherche les dernières actualités sur [mes concurrents].
Identifie les changements de pricing, nouvelles features, levées de fonds.
Résume en 5 bullet points max avec liens sources.`} />

      <p><strong>Agent "Content Ideas" — Mercredi 10h</strong></p>
      <CodeBlock code={`Analyse les tendances de mon secteur cette semaine.
Propose 5 idées de contenu (posts, articles, vidéos) avec :
- Le hook
- L'angle
- Le format recommandé`} />

      <h3>12.4 — Les plugins Cowork</h3>
      <p>Cowork a un écosystème de plugins vérifiés (design, RH, ops, etc.) que tu peux installer pour étendre les capacités de tes agents.</p>

      <CalloutBox variant="usecase">
        Un entrepreneur solo dans le SaaS B2B a monté une "équipe" de 5 agents IA :
        <ol>
          <li><strong>Prospecteur</strong> (quotidien 8h) — identifie 10 leads qualifiés/jour sur LinkedIn et rédige les messages d'approche</li>
          <li><strong>Content Machine</strong> (lundi + jeudi 9h) — génère 2 posts LinkedIn + 1 article de blog/semaine</li>
          <li><strong>Analyste Churn</strong> (vendredi 10h) — détecte les clients inactifs et propose des actions de rétention</li>
          <li><strong>Veille Produit</strong> (quotidien 12h) — surveille les features des concurrents et suggère des améliorations</li>
          <li><strong>Rapport Investisseur</strong> (1er du mois) — compile MRR, churn, LTV et génère un rapport formaté</li>
        </ol>
        Résultat : il gère seul un SaaS à 8K€ MRR avec zéro employé. Coût de son "équipe IA" : $20/mois.
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
  subtitle: "Ils ne codent pas. Ils n'ont pas d'équipe tech. Ils ont juste le bon écosystème.",
  bloc: "Exploiter",
  actionPlan: [
    "Identifier UN problème dans ton activité",
    "Noter l'audience précise",
    "Évaluer si des gens paieraient",
  ],
  quiz: [
    {
      question: "Un micro-SaaS c'est :",
      options: [
        "Un gros logiciel",
        "Un petit logiciel qui résout UN problème pour UNE audience, avec abonnement",
        "Un réseau social",
      ],
      correctIndex: 1,
    },
    {
      question: "Le coût pour lancer est d'environ :",
      options: ["10 000€", "$20-100/mois", "500€/mois"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>13.1 — Le paradigme a changé</h3>
      <p>Avant : coder ou payer un dev (300-800€/jour), des mois de développement, des dizaines de milliers d'euros.</p>
      <p>Maintenant : MVP en quelques heures, déploiement gratuit, monétisation immédiate.</p>

      <h3>13.2 — C'est quoi un micro-SaaS ?</h3>
      <p>Un petit logiciel en ligne qui résout UN problème pour UNE audience, avec un abonnement mensuel.</p>
      <ul>
        <li>Outil de facturation pour coachs → 19€/mois</li>
        <li>Générateur de contenu pour agents immo → 29€/mois</li>
        <li>Dashboard KPIs pour freelances → 9€/mois</li>
      </ul>

      <h3>13.3 — La stack (coût de lancement)</h3>
      <TableBlock
        headers={["Brique", "Outil", "Coût"]}
        rows={[
          ["Intelligence", "Claude Code", "$20-100/mois"],
          ["Frontend", "React + Tailwind", "Gratuit"],
          ["Backend", "Supabase", "Gratuit"],
          ["Paiements", "Stripe", "Commission uniquement"],
          ["Hébergement", "Vercel", "Gratuit"],
        ]}
      />
      <p><strong>Total : ~$20-100/mois</strong></p>

      <h3>13.4 — L'automatisation comme business</h3>
      <p>Au-delà des SaaS, vendre des workflows Cowork :</p>
      <ul>
        <li>Rapports hebdo automatiques pour des clients → 500-3000€/workflow</li>
        <li>Veille concurrentielle automatisée</li>
        <li>Organisation et traitement de documents</li>
      </ul>

      <CalloutBox variant="usecase">
        3 exemples de micro-SaaS lancés avec la méthode Buildrs :
        <ol>
          <li><strong>Outil de devis pour artisans</strong> — lancé en 4 jours. 29€/mois. 23 abonnés au bout de 6 semaines. Le fondateur est plombier.</li>
          <li><strong>Générateur de fiches produits e-commerce</strong> — lancé en 2 jours. Vendu 67€ en one-shot. +40 ventes le premier mois via un post LinkedIn viral.</li>
          <li><strong>Dashboard KPIs pour coachs</strong> — lancé en 5 jours. 19€/mois. 12 abonnés beta. Le fondateur n'avait jamais ouvert un terminal avant Buildrs.</li>
        </ol>
        Point commun : aucun ne sait coder. Tous ont utilisé Claude Code + ce guide.
      </CalloutBox>

      <OfferCTA variant="implementation" buttonLabel="Découvrir l'implémentation complète → 997€" buttonLink="/dashboard/offres">
        Tu veux passer directement à l'action ? Buildrs installe ton écosystème Claude complet en 48h.
      </OfferCTA>
    </>
  ),
}

const chapter14: Chapter = {
  number: "14",
  title: "Lance ton premier produit en une journée",
  subtitle: "De l'idée au produit en ligne qui accepte des paiements — même si tu pars de zéro.",
  bloc: "Exploiter",
  actionPlan: [
    "Définir ton MVP (1 problème, 1 audience, 1 feature)",
    "Lancer Claude Code avec le prompt de démarrage",
    "Déployer sur Vercel",
    "Partager avec 10 personnes",
  ],
  quiz: [
    {
      question: "MVP signifie :",
      options: ["Maximum Value Product", "Minimum Viable Product", "Most Valuable Player"],
      correctIndex: 1,
    },
    {
      question: "Temps moyen pour un MVP déployé :",
      options: ["3-6 mois", "~1 journée", "2-3 semaines"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>14.1 — Le framework en 5 étapes</h3>
      <ol>
        <li><strong>Étape 1 : Définir (30 min)</strong> — Problème, audience, feature principale, modèle de revenus</li>
        <li><strong>Étape 2 : Planifier (1h)</strong> — Architecture avec Claude Code + skill SuperPowers</li>
        <li><strong>Étape 3 : Construire (2-4h)</strong> — Claude Code build le MVP</li>
        <li><strong>Étape 4 : Déployer (30 min)</strong> — GitHub → Vercel + Stripe</li>
        <li><strong>Étape 5 : Valider (1 semaine)</strong> — 10-20 beta-testeurs → itérer</li>
      </ol>

      <h3>14.2 — Le prompt de démarrage (à copier)</h3>
      <CodeBlock
        language="Prompt Claude Code"
        code={`Je veux créer un micro-SaaS appelé [NOM].

## Le problème
[2-3 phrases]

## L'audience
[Qui ?]

## La solution
[Feature principale]

## Stack
- Frontend : React + TypeScript + Tailwind CSS
- Backend : Supabase (PostgreSQL + Auth + Storage)
- Paiements : Stripe (abonnement mensuel)
- Déploiement : Vercel
- Design : Dark mode, premium, glassmorphism

## Pages
1. Landing page (présentation + CTA)
2. Login/Signup (Supabase Auth)
3. Dashboard (feature principale)
4. Settings (profil + abonnement)

Commence par la structure du projet et la landing page.`}
      />

      <CalloutBox variant="usecase">
        Chronologie réelle du lancement d'un MVP par un membre Buildrs (agence événementielle) :
        <ol>
          <li><strong>Matin (2h)</strong> — Identifie le problème : ses clients perdent du temps à recueillir les besoins par email. Écrit le brief + CLAUDE.md.</li>
          <li><strong>Après-midi (3h)</strong> — Claude Code construit un formulaire intelligent qui génère un cahier des charges automatique avec devis estimé.</li>
          <li><strong>Soir (1h)</strong> — Stripe intégré. Déploiement Vercel. URL partagée aux 3 premiers clients.</li>
          <li><strong>J+7</strong> — 2 clients paient 49€/mois pour l'outil. ROI positif dès la première semaine.</li>
        </ol>
      </CalloutBox>

      <OfferCTA variant="accompagnement" buttonLabel="En savoir plus →" buttonLink="/dashboard/offres">
        Tu veux être accompagné de A à Z pour lancer ton activité avec Claude ? Découvre l'accompagnement Buildrs — 3 mois pour transformer ton business.
      </OfferCTA>
    </>
  ),
}

const chapter15: Chapter = {
  number: "15",
  title: "La stack gratuite qui remplace une équipe",
  subtitle: "Les 4 outils à connecter pour avoir l'infrastructure d'une startup — sans recruter.",
  bloc: "Exploiter",
  actionPlan: [
    "Créer les 4 comptes (GitHub, Vercel, Supabase, Stripe)",
    "Connecter GitHub ↔ Vercel",
    "Tous gratuits au lancement",
  ],
  quiz: [
    {
      question: "Le coût d'infrastructure pour lancer un MVP :",
      options: ["~500€/mois", "0€ (plans gratuits sur les 4 outils)", "100€/mois"],
      correctIndex: 1,
    },
    {
      question: "Vercel se connecte à :",
      options: ["Stripe", "GitHub (déploiement auto à chaque push)", "Gmail"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>15.1 — Les 4 piliers</h3>
      <TableBlock
        headers={["Outil", "Rôle", "Compte", "Coût"]}
        rows={[
          ["GitHub", "Stockage du code + versioning", "github.com", "Gratuit"],
          ["Vercel", "Hébergement + déploiement auto", "vercel.com", "Gratuit"],
          ["Supabase", "Base de données + auth + stockage", "supabase.com", "Gratuit"],
          ["Stripe", "Paiements + abonnements", "stripe.com", "Commission uniquement"],
        ]}
      />

      <h3>15.2 — Comment tout relier</h3>
      <CodeBlock code={`GitHub ← Claude Code push le code
GitHub → Vercel (auto-deploy à chaque push)
Supabase ← Claude Code configure la BDD + auth
Stripe ← Claude Code intègre les paiements`} />

      <h3>15.3 — Les outils bonus</h3>
      <ul>
        <li><strong>Resend</strong> : envoi d'emails transactionnels</li>
        <li><strong>Cloudflare</strong> : domaine custom + CDN</li>
        <li><strong>n8n</strong> : automatisations avancées (webhooks, workflows)</li>
        <li><strong>Lovable</strong> : prototypage rapide d'apps</li>
      </ul>

      <CalloutBox variant="usecase">
        Comparaison concrète — lancer un SaaS en 2024 vs 2026 :
        <ol>
          <li><strong>Avant</strong> : Dev freelance (8000€) + Hébergement (50€/mois) + Designer (2000€) + 3 mois de dev = <strong>~12 000€ et 3 mois</strong></li>
          <li><strong>Maintenant</strong> : Claude Code ($20/mois) + GitHub (gratuit) + Vercel (gratuit) + Supabase (gratuit) + Stripe (commission uniquement) = <strong>~20€ et 1-5 jours</strong></li>
        </ol>
        La barrière à l'entrée n'existe plus. Le seul frein, c'est de ne pas avoir le bon setup — et c'est exactement ce que ce guide résout.
      </CalloutBox>

      <OfferCTA variant="card" icon="⚡" title="TOUS CES OUTILS CONNECTÉS EN UN CLIC" buttonLabel="Obtenir le Kit → 97€" buttonLink="/dashboard/offres">
        Le Kit d'implémentation inclut les configs, les comptes à créer, et le workflow complet.
      </OfferCTA>
    </>
  ),
}

const chapterBonus: Chapter = {
  number: "BONUS",
  title: "Ton plan d'action de A à Z",
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
