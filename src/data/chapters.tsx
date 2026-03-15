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
  title: "Pourquoi Claude change la donne en 2026",
  subtitle: "Et pourquoi maintenant, c'est le moment de s'y mettre.",
  bloc: "Comprendre",
  actionPlan: [
    "Créer son compte Claude (si pas encore fait)",
    "Télécharger Claude Desktop sur claude.ai/download",
    "Lire le chapitre 2 pour comprendre les 3 produits",
  ],
  quiz: [
    {
      question: "En 2026, Claude se distingue des autres IA parce que :",
      options: [
        "Il est gratuit",
        "Il propose un écosystème complet : conversation + code + automatisation",
        "Il est plus rapide que ChatGPT",
      ],
      correctIndex: 1,
    },
    {
      question: "Buildrs fonctionne avec :",
      options: [
        "Une équipe de 50 développeurs",
        "Alfred + Romane + 35 super agents IA dont 20% autonomes",
        "Uniquement des freelances",
      ],
      correctIndex: 1,
    },
    {
      question: "Le VibeCoding, c'est :",
      options: [
        "Un langage de programmation",
        "Construire des applications en décrivant ce qu'on veut en langage naturel",
        "Une technique de méditation",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>1.1 — L'IA en 2026 : on ne parle plus de chatbots</h3>
      <p>
        L'IA générative a explosé en 2023 avec ChatGPT. Mais en 2026, le jeu a complètement changé. On ne parle plus de "poser des questions à un chatbot". On parle d'agents autonomes qui exécutent des tâches complexes, construisent des applications, et travaillent en arrière-plan pendant que tu dors.
      </p>
      <p>
        Claude, développé par Anthropic, est devenu le moteur central de cette révolution. Pas parce qu'il est "meilleur" sur un benchmark — mais parce qu'il est le seul à proposer un écosystème complet : une interface conversationnelle (Claude AI), un agent de code (Claude Code), et un assistant autonome (Cowork).
      </p>
      <CalloutBox variant="important">
        La plupart des gens utilisent Claude comme ils utilisaient ChatGPT en 2023 : ils posent des questions et copient-collent les réponses. C'est comme acheter une Ferrari et ne jamais dépasser la 2ème vitesse.
      </CalloutBox>

      <h3>1.2 — Ce que tu vas apprendre dans ce guide</h3>
      <p>Ce guide est structuré en 16 chapitres progressifs + 1 bonus. Tu vas :</p>
      <ul>
        <li>Comprendre l'écosystème Claude en profondeur (chapitres 1-4)</li>
        <li>Installer et configurer chaque composant de façon optimale (chapitres 5-8)</li>
        <li>Supercharger Claude avec Skills, MCP, agents IA et mémoire (chapitres 9-12)</li>
        <li>Exploiter Claude pour générer de la valeur et du revenu (chapitres 13-15)</li>
        <li>Avoir un plan d'action complet de A à Z (bonus)</li>
      </ul>

      <h3>1.3 — Le VibeCoding et les micro-SaaS : le business de 2026</h3>
      <p>
        Le "VibeCoding" — construire des applications en décrivant ce qu'on veut en langage naturel — est en train de devenir le business model le plus accessible de l'histoire. Des entrepreneurs sans expérience technique lancent des micro-SaaS et génèrent du revenu récurrent.
      </p>
      <p>
        Ce guide ne te promet pas de devenir développeur. Il te montre que la frontière entre "technique" et "non-technique" n'existe plus — et que Claude est la clé.
      </p>

      <h3>1.4 — C'est quoi Buildrs ? Et qui est Alfred ?</h3>
      <p>
        <strong>Alfred Orsini</strong> a 32 ans et il pilote <strong>Buildrs</strong> comme Tony Stark pilote son labo.
      </p>
      <p>
        Pas avec une équipe classique de 50 salariés — mais avec <strong>une équipe augmentée de +35 super agents IA</strong>, dont 20% sont des agents totalement autonomes qui travaillent en continu. Rédaction, analyse, code review, veille concurrentielle, onboarding client, reporting — ces agents tournent 24h/24 sur l'écosystème Claude.
      </p>
      <p>
        Derrière cette armée d'agents, Alfred et <strong>Romane</strong> — son bras droit qui co-pilote les opérations au quotidien. À eux deux, appuyés par les 35 super agents, ils gèrent l'ensemble des projets clients, de la stratégie au déploiement.
      </p>
      <p><strong>Buildrs, c'est 3 choses :</strong></p>
      <ol>
        <li><strong>Un spécialiste des écosystèmes IA</strong> — certifié sur l'écosystème Claude, avec une base de connaissances terrain construite sur des centaines de projets réels.</li>
        <li><strong>Un constructeur de micro-SaaS IA</strong> — on build des petits logiciels intelligents pour des clients et avec des clients, avec Claude Code comme moteur.</li>
        <li><strong>Un accélérateur pour entrepreneurs</strong> — on aide ceux qui veulent lancer un business pérenne autour de l'IA à implémenter, comprendre et exploiter tout l'écosystème Claude.</li>
      </ol>
      <CalloutBox variant="usecase">
        Chez Buildrs, Alfred a configuré un agent Cowork qui chaque matin à 7h30 compile : les emails importants, les messages Slack de l'équipe, l'agenda du jour, et les KPIs business de la veille. Résultat : un briefing complet sur son bureau avant même qu'il ouvre son Mac. Temps de configuration : 15 minutes. Valeur quotidienne : inestimable. C'est ce genre de setup que tu vas apprendre dans ce guide.
      </CalloutBox>
    </>
  ),
}

const chapter02: Chapter = {
  number: "02",
  title: "Trois produits, trois rôles",
  subtitle: "Comment ils travaillent ensemble — et lequel utiliser pour quoi.",
  bloc: "Comprendre",
  actionPlan: [
    "Identifier lequel des 3 produits correspond à ton besoin immédiat",
    "Entrepreneur/freelance sans background technique → Claude AI + Cowork",
    "Tu veux builder des produits → Claude Code",
  ],
  quiz: [
    {
      question: "Tu veux automatiser un rapport hebdomadaire sans coder. Quel produit ?",
      options: ["Claude AI", "Claude Code", "Claude Cowork avec tâches planifiées"],
      correctIndex: 2,
    },
    {
      question: "Claude Code se distingue de Claude AI parce que :",
      options: ["Il est plus intelligent", "Il a accès complet au projet et peut déployer", "Il est gratuit"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>2.1 — Claude AI (claude.ai / app mobile / Desktop)</h3>
      <p>L'interface que tout le monde connaît. Mais en 2026 c'est bien plus qu'un chat :</p>
      <ul>
        <li><strong>Mémoire persistante</strong> : il se souvient de toi entre les conversations</li>
        <li><strong>Projects</strong> : des espaces dédiés avec instructions + documents de référence</li>
        <li><strong>Skills</strong> : recherche web, exécution de code, création de fichiers</li>
        <li><strong>Artefacts</strong> : création de documents, tableurs, présentations, apps React dans le chat</li>
        <li><strong>Connecteurs</strong> : Google Drive, Gmail, Notion, Slack, Figma, Stripe...</li>
      </ul>

      <h3>2.2 — Claude Code</h3>
      <p>L'agent de code qui vit dans ton terminal. Il ne suggère pas — il construit, teste, déploie :</p>
      <ul>
        <li>Accès complet au projet (tous les fichiers)</li>
        <li>Exécution réelle (commandes bash, installations, serveurs)</li>
        <li>Skills & Plugins (frontend-design, code-review, feature-dev...)</li>
        <li>MCP : connexions à GitHub, Supabase, Stripe, APIs</li>
        <li>Subagents & Agent Teams : délégation parallèle</li>
        <li>CLAUDE.md : mémoire par projet</li>
      </ul>

      <h3>2.3 — Claude Cowork</h3>
      <p>Le plus révolutionnaire. Un agent autonome dans Claude Desktop :</p>
      <ul>
        <li>Accès à tes fichiers locaux</li>
        <li>Tâches multi-étapes complexes</li>
        <li>Sub-agents parallèles</li>
        <li><strong>Tâches planifiées</strong> : programme une fois, Claude exécute automatiquement</li>
        <li>Plugins vérifiés</li>
        <li>Connecteurs (Slack, Gmail, Drive, Calendar...)</li>
      </ul>

      <h3>2.4 — Tableau comparatif</h3>
      <TableBlock
        headers={["", "Claude AI", "Claude Code", "Claude Cowork"]}
        rows={[
          ["Interface", "Web / App / Desktop", "Terminal / IDE", "Claude Desktop"],
          ["Pour qui", "Tout le monde", "Builders / Devs", "Tout le monde"],
          ["Force", "Intelligence & conversation", "Construction & déploiement", "Automatisation & tâches"],
          ["Mémoire", "✅ Persistante", "✅ CLAUDE.md", "✅ Par tâche"],
          ["Automatisation", "❌", "Via scripts/hooks", "✅ Tâches planifiées"],
          ["Extensions", "Connecteurs + Skills", "MCP + Skills + Plugins", "Plugins + Connecteurs"],
        ]}
      />

      <CalloutBox variant="usecase">
        Quand Buildrs lance un nouveau projet client, voici comment les 3 produits s'articulent : <strong>Claude AI</strong> (avec un Project dédié) gère la stratégie, le brief et le contenu. <strong>Claude Code</strong> construit l'application avec le CLAUDE.md du client. <strong>Cowork</strong> automatise le reporting hebdo et la veille concurrentielle. Les 3 tournent en parallèle sur le même projet. C'est comme avoir 3 départements qui collaborent — sauf que c'est un seul écosystème.
      </CalloutBox>
    </>
  ),
}

const chapter03: Chapter = {
  number: "03",
  title: "Haiku, Sonnet 4.6, Opus 4.6",
  subtitle: "Lequel utiliser, quand, et comment ne pas cramer ton quota.",
  bloc: "Comprendre",
  actionPlan: [
    "Rester sur Sonnet 4.6 par défaut",
    "Réserver Opus pour la stratégie et l'architecture",
    "Haiku pour les tâches simples et répétitives",
  ],
  quiz: [
    {
      question: "Tu dois résumer un article de 500 mots. Quel modèle ?",
      options: ["Opus 4.6", "Sonnet 4.6", "Haiku"],
      correctIndex: 2,
    },
    {
      question: "L'Extended Thinking sert à :",
      options: ["Accélérer Claude", "Le faire réfléchir étape par étape avant de répondre", "Réduire les tokens"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>3.1 — Les 3 modèles expliqués simplement</h3>
      <ul>
        <li><strong>Haiku</strong> = le stagiaire ultra-rapide. Tâches simples, pas cher, efficace.</li>
        <li><strong>Sonnet 4.6</strong> = le cadre senior. Meilleur rapport qualité/vitesse/prix. 80% de ton usage.</li>
        <li><strong>Opus 4.6</strong> = le directeur stratégique. Le plus intelligent, le plus lent, le plus coûteux.</li>
      </ul>

      <h3>3.2 — Les tokens</h3>
      <p>Les tokens = l'unité de mesure de l'IA. Chaque mot envoyé et généré en consomme.</p>
      <ul>
        <li>1 mot français ≈ 1.3 tokens</li>
        <li>Plan Pro ($20/mois) = allocation quotidienne. Limite atteinte = mode dégradé.</li>
        <li>Plan Max ($100/mois) = quasi-illimité.</li>
      </ul>

      <h3>3.3 — Quand utiliser quoi ?</h3>
      <TableBlock
        headers={["Tâche", "Modèle", "Pourquoi"]}
        rows={[
          ["Résumer un texte", "Haiku", "Rapide, économique"],
          ["Rédiger du contenu", "Sonnet 4.6", "Bon équilibre"],
          ["Stratégie business", "Opus 4.6", "Raisonnement profond"],
          ["Coder une app", "Sonnet 4.6", "Défaut de Claude Code"],
          ["Architecture complexe", "Opus 4.6", "Extended Thinking"],
          ["Tâches Cowork planifiées", "Sonnet 4.6", "Meilleur ratio"],
        ]}
      />

      <h3>3.4 — L'Extended Thinking</h3>
      <p>Opus et Sonnet ont un mode "réflexion étendue" : Claude prend le temps de structurer sa pensée avant de répondre. À activer pour les problèmes complexes.</p>

      <CalloutBox variant="usecase">
        Chez Buildrs, on a une règle simple : Haiku pour les messages Slack internes et les résumés. Sonnet pour 80% du travail quotidien (code, contenu, analyse). Opus uniquement pour les décisions d'architecture et les stratégies go-to-market. Résultat : on a divisé par 3 notre consommation de tokens sans perdre en qualité. Alfred utilise Opus max 2-3 fois par jour, toujours en Extended Thinking.
      </CalloutBox>
    </>
  ),
}

const chapter04: Chapter = {
  number: "04",
  title: "Le bon plan, les bons paramètres",
  subtitle: "Setup optimal en 10 minutes.",
  bloc: "Comprendre",
  actionPlan: [
    "Choisir son plan (Pro recommandé)",
    "Installer Claude Desktop",
    "Activer les 4 paramètres essentiels",
  ],
  quiz: [
    {
      question: "Pourquoi Claude Desktop est indispensable ?",
      options: ["Plus joli", "Seul accès à Cowork, tâches planifiées et fichiers locaux", "Plus rapide"],
      correctIndex: 1,
    },
    {
      question: "Quel plan pour suivre ce guide ?",
      options: ["Free", "Pro ($20/mois)", "Enterprise"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>4.1 — Les plans</h3>
      <TableBlock
        headers={["Plan", "Prix", "Accès"]}
        rows={[
          ["Free", "0€", "Limité, pas de Cowork"],
          ["Pro", "$20/mois", "Tout : Claude AI + Code + Cowork + tâches planifiées"],
          ["Max", "$100/mois", "Tout Pro + usage quasi-illimité"],
          ["Team", "$30/user/mois", "Pro + collaboration"],
          ["Enterprise", "Sur devis", "Team + SSO + conformité"],
        ]}
      />
      <p>→ <strong>Recommandation : Pro pour débuter, Max si tu utilises Claude Code intensivement.</strong></p>

      <h3>4.2 — Installer Claude Desktop</h3>
      <ol>
        <li>claude.ai/download → Mac ou Windows</li>
        <li>Se connecter avec ton compte</li>
        <li>Tu accèdes à Chat + Cowork + Connecteurs</li>
      </ol>

      <h3>4.3 — Paramètres essentiels à activer</h3>
      <p>Dans Settings :</p>
      <ul>
        <li>✅ Mémoire (Claude se souvient de toi)</li>
        <li>✅ Recherche web (infos en temps réel)</li>
        <li>✅ Exécution de code</li>
        <li>✅ Création de fichiers</li>
      </ul>

      <CalloutBox variant="usecase">
        Quand on onboarde un nouveau client chez Buildrs, la première chose qu'on fait c'est le setup de son Claude en 10 minutes chrono. Plan Pro, Desktop installé, mémoire activée, Drive + Gmail connectés. Le client repart avec un Claude opérationnel dès le premier jour. Pas de formation théorique de 3 heures — un setup concret qui marche immédiatement.
      </CalloutBox>
    </>
  ),
}

/* ═══════════════════════════════════════ */
/* BLOC 2 — CONFIGURER                    */
/* ═══════════════════════════════════════ */

const chapter05: Chapter = {
  number: "05",
  title: "Comment donner des instructions que Claude comprend vraiment",
  subtitle: "Et qu'il retient — d'une conversation à l'autre.",
  bloc: "Configurer",
  actionPlan: [
    "Créer son premier Project \"Mon Business\"",
    "Écrire un prompt système de 10-15 lignes",
    "Configurer sa mémoire avec les infos de base",
  ],
  quiz: [
    {
      question: "Un bon prompt contient :",
      options: ["Sujet, Longueur, Langue, Date", "Rôle, Contexte, Tâche, Format", "Question, Réponse, Source"],
      correctIndex: 1,
    },
    {
      question: "Un Project Claude, c'est :",
      options: ["Un dossier GitHub", "Un espace avec prompt permanent + documents de référence", "Un projet Notion"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>5.1 — La structure d'un bon prompt</h3>
      <p>4 éléments : <strong>Rôle</strong> (qui est Claude) + <strong>Contexte</strong> (le background) + <strong>Tâche</strong> (quoi faire) + <strong>Format</strong> (comment le rendre).</p>

      <h3>5.2 — Les Projects : ton arme secrète</h3>
      <p>Un Project = prompt système permanent + documents de référence + espace isolé.</p>
      <p>Exemples à créer :</p>
      <ul>
        <li>"Mon Business" → description, offres, cible, ton</li>
        <li>"Contenu Social" → charte éditoriale, exemples</li>
        <li>"Client [Nom]" → brief, historique, livrables</li>
      </ul>

      <h3>5.3 — La mémoire persistante</h3>
      <p>Dans Settings → Memory. Claude retient tes préférences, des faits sur toi, tes instructions récurrentes.</p>

      <CalloutBox variant="usecase">
        Alfred a un Project "Buildrs — Stratégie" avec un prompt système de 30 lignes qui décrit la vision, les offres, le positionnement, et le ton de communication. Chaque fois qu'il brainstorme dans ce projet, Claude est déjà aligné. Pas besoin de re-briefer à chaque conversation. Le gain de temps sur un mois : estimé à 15-20 heures.
      </CalloutBox>

      <OfferCTA variant="subtle" buttonLabel="Découvrir le Kit → 97€" buttonLink="/dashboard/offres">
        Tu veux les prompts systèmes exacts qu'Alfred utilise chez Buildrs ? Ils sont dans le Kit d'implémentation.
      </OfferCTA>
    </>
  ),
}

const chapter06: Chapter = {
  number: "06",
  title: "Branche Claude à tout ton écosystème",
  subtitle: "Plugin Chrome, Drive, Gmail, Slack, Notion — en quelques clics.",
  bloc: "Configurer",
  actionPlan: [
    "Connecter Google Drive + Gmail (minimum vital)",
    "Installer le plugin Chrome",
    "Connecter Slack et Calendar si tu les utilises",
  ],
  quiz: [
    {
      question: "Les connecteurs permettent de :",
      options: ["Brancher Claude à tes outils en un clic", "Accélérer Claude", "Relier plusieurs comptes Claude"],
      correctIndex: 0,
    },
    {
      question: "Le plugin Chrome permet à Claude de :",
      options: ["Changer le thème de Chrome", "Naviguer, extraire des données et agir sur n'importe quel site", "Bloquer les pubs"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>6.1 — Les connecteurs Claude</h3>
      <p>Dans Claude Desktop → Settings → Extensions. Chaque connecteur = 1 clic (OAuth) :</p>
      <TableBlock
        headers={["Connecteur", "Ce que Claude peut faire"]}
        rows={[
          ["Google Drive", "Lire, chercher, créer des documents"],
          ["Gmail", "Lire tes emails, rédiger des réponses"],
          ["Google Calendar", "Voir ton agenda, planifier"],
          ["Slack", "Lire les channels, envoyer des messages"],
          ["Notion", "Accéder à tes bases de données"],
          ["Figma", "Voir tes designs"],
          ["Stripe", "Accéder aux données de paiement"],
        ]}
      />

      <h3>6.2 — Le Plugin Chrome "Claude in Chrome"</h3>
      <p>L'extension qui transforme Claude en agent web. Il peut :</p>
      <ul>
        <li>Naviguer sur des pages</li>
        <li>Extraire des données</li>
        <li>Remplir des formulaires</li>
        <li>Effectuer des actions sur n'importe quel site</li>
      </ul>
      <p>Combiné avec Cowork + tâches planifiées = automatisation web puissante.</p>

      <h3>6.3 — Pourquoi les connecteurs changent tout</h3>
      <p>Sans connecteurs, tu dois copier-coller des infos entre tes outils et Claude. Avec connecteurs, Claude accède directement à tes données — il peut analyser tes emails, consulter ton planning, et rédiger un document dans ton Drive en une seule conversation.</p>

      <CalloutBox variant="usecase">
        L'agent Cowork "Daily Briefing" d'Alfred utilise 4 connecteurs simultanément : Gmail (emails non lus), Slack (messages importants), Google Calendar (réunions du jour), et Google Drive (documents modifiés récemment). Chaque matin, un rapport structuré est généré automatiquement. Sans les connecteurs, cette tâche nécessiterait de consulter 4 apps séparément pendant 20 minutes. Avec : 0 minutes, c'est automatique.
      </CalloutBox>

      <OfferCTA variant="subtle" buttonLabel="Découvrir le Kit → 97€" buttonLink="/dashboard/offres">
        La config connecteurs complète de Buildrs (les 7 branchements + l'ordre optimal) est dans le Kit.
      </OfferCTA>
    </>
  ),
}

const chapter07: Chapter = {
  number: "07",
  title: "Ton agent de code, opérationnel en 20 minutes",
  subtitle: "Local, VS Code ou Anti-Gravity — on t'explique tout.",
  bloc: "Configurer",
  actionPlan: [
    "Installer Node.js (nodejs.org)",
    "npm install -g @anthropic-ai/claude-code",
    "Créer ton premier Hello World",
  ],
  quiz: [
    {
      question: "Pourquoi le local plutôt que le navigateur ?",
      options: ["Moins cher", "Accès complet au projet + exécution + déploiement", "Plus rapide"],
      correctIndex: 1,
    },
    {
      question: "Pour installer Claude Code il faut :",
      options: ["Python", "Node.js + npm install", "Un Mac"],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>7.1 — C'est quoi Claude Code</h3>
      <p>Un programme qui tourne dans ton terminal. Quand tu le lances dans un dossier, il a accès à tous les fichiers, peut les lire, les modifier, exécuter des commandes, et déployer.</p>

      <h3>7.2 — Les 3 options</h3>
      <ul>
        <li><strong>Local (recommandé)</strong> : <code>npm install -g @anthropic-ai/claude-code</code> → la plus puissante</li>
        <li><strong>VS Code</strong> : extension Claude Code dans l'éditeur</li>
        <li><strong>Anti-Gravity IDE</strong> : IDE conçu pour le VibeCoding</li>
      </ul>

      <h3>7.3 — Ta première session</h3>
      <CodeBlock
        language="Terminal"
        code={`mkdir mon-premier-projet
cd mon-premier-projet
claude
> "Crée une application React avec une page Hello World, design sombre et moderne"`}
      />
      <p>Claude Code crée la structure, installe les dépendances, écrit le code, lance le serveur. Zéro ligne de code de ta part.</p>

      <CalloutBox variant="usecase">
        Chez Buildrs, chaque nouveau projet client démarre avec Claude Code en local. Temps moyen pour avoir un MVP fonctionnel avec authentification, base de données et design premium : 4 heures. Avant Claude Code, le même scope nécessitait 2-3 semaines de développement. Le ratio est de 1 à 20.
      </CalloutBox>
    </>
  ),
}

const chapter08: Chapter = {
  number: "08",
  title: "Prévisualise, pousse, déploie — sans friction",
  subtitle: "GitHub + Vercel = ton pipeline de production.",
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
        Pour le projet NOAH™ (générateur d'offres IA), Buildrs a utilisé ce workflow exact. Alfred décrit les features, Claude Code les construit, push automatique sur GitHub, déploiement Vercel instantané. Le client voit les mises à jour en temps réel sur l'URL de prod. Délai entre la demande et la mise en ligne d'une modification : souvent moins de 10 minutes.
      </CalloutBox>
    </>
  ),
}

/* ═══════════════════════════════════════ */
/* BLOC 3 — SUPERCHARGER                  */
/* ═══════════════════════════════════════ */

const chapter09: Chapter = {
  number: "09",
  title: "Claude est livré nu. Habille-le.",
  subtitle: "Les Skills qui transforment Claude en machine de guerre.",
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
        Buildrs a créé un skill custom "buildrs-brand" qui contient le design system complet (couleurs, typo, glassmorphism, ton). Chaque fois que Claude Code crée une interface pour un projet Buildrs, il applique automatiquement le style maison. Résultat : cohérence visuelle parfaite sur tous les projets, sans briefer manuellement le design à chaque fois.
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
  title: "Les serveurs qui branchent Claude Code à tout",
  subtitle: "GitHub, Supabase, Stripe, et 100+ services — depuis ton terminal.",
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
        Pour chaque projet client, Buildrs configure 3 MCP minimum : Context7 (documentation à jour), GitHub (gestion du code), et Supabase (base de données). Quand Alfred demande à Claude Code "ajoute l'authentification avec Supabase", Claude consulte la doc exacte via Context7, construit le code, et le connecte directement à la base Supabase du projet via le MCP. Zéro copier-coller de documentation, zéro erreur d'API obsolète.
      </CalloutBox>

      <OfferCTA variant="card" icon="⚡" title="LE FICHIER .MCP.JSON COMPLET DE BUILDRS" buttonLabel="Obtenir le Kit → 97€" buttonLink="/dashboard/offres">
        Le fichier .mcp.json complet de Buildrs (Context7 + GitHub + Supabase + Stripe + GWS) est inclus dans le Kit d'implémentation. <strong>Prêt à copier.</strong>
      </OfferCTA>
    </>
  ),
}

const chapter11: Chapter = {
  number: "11",
  title: "Fais en sorte que Claude se souvienne de tout",
  subtitle: "Projet par projet, automatiquement.",
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
        Le CLAUDE.md du projet "Claude SuperPowers" (ce guide que tu lis) fait 45 lignes. Il contient le design system (dark mode, terracotta, glassmorphism), les conventions React, et les instructions de ton éditorial. Résultat : chaque fois que Claude Code travaille sur ce projet, il produit du contenu et du code cohérents avec la vision — sans qu'on ait besoin de re-briefer. Ce fichier a été écrit une seule fois et a servi sur +50 sessions de développement.
      </CalloutBox>

      <OfferCTA variant="card" icon="⚡" title="5 TEMPLATES CLAUDE.MD PAR TYPE DE PROJET" buttonLabel="Obtenir le Kit → 97€" buttonLink="/dashboard/offres">
        5 templates CLAUDE.md par type de projet (SaaS, coaching, e-commerce, agence, freelance) → inclus dans le Kit d'implémentation.
      </OfferCTA>
    </>
  ),
}

const chapter12: Chapter = {
  number: "12",
  title: "Crée des agents qui bossent pour toi en continu",
  subtitle: "Tâches planifiées, rapports auto, veille — ton équipe IA ne dort jamais.",
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
        Chez Buildrs, Alfred a 7 agents Cowork en production :
        <ol>
          <li><strong>Daily Brief</strong> (7h30) — emails + Slack + agenda + KPIs</li>
          <li><strong>Client Report</strong> (lundi 9h) — rapport de progression pour chaque client actif</li>
          <li><strong>Veille IA</strong> (quotidien 12h) — news et annonces de l'écosystème Claude/Anthropic</li>
          <li><strong>Content Planner</strong> (mercredi 10h) — 5 idées de contenu pour la semaine</li>
          <li><strong>Invoice Reminder</strong> (vendredi 14h) — rappel des factures en attente</li>
          <li><strong>Week Review</strong> (vendredi 17h) — résumé de la semaine avec métriques</li>
          <li><strong>Competitor Watch</strong> (quotidien) — veille sur 3 concurrents directs</li>
        </ol>
        Total : 7 "employés" qui coûtent $20/mois (le prix de l'abo Pro). L'équivalent salarial ? Incalculable.
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
  title: "Comment des entrepreneurs non-techniques génèrent du revenu",
  subtitle: "Le VibeCoding, les micro-SaaS IA, et l'automatisation comme business model.",
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
        Le premier micro-SaaS construit par Buildrs avec Claude Code — NOAH™, un générateur d'offres IA pour les entrepreneurs — a été buildé en 5 jours. Le MVP complet : onboarding, génération d'offres en 4 tiers, intégration Stripe, landing page. Coût de développement : $100 (abo Claude Max pendant le build). Aujourd'hui NOAH™ est proposé à 67€ et a généré ses premiers revenus dès la première semaine de lancement.
      </CalloutBox>

      <OfferCTA variant="implementation" buttonLabel="Découvrir l'implémentation complète → 997€" buttonLink="/dashboard/offres">
        Tu veux passer directement à l'action ? Buildrs installe ton écosystème Claude complet en 48h.
      </OfferCTA>
    </>
  ),
}

const chapter14: Chapter = {
  number: "14",
  title: "De l'idée au produit déployé",
  subtitle: "La méthode complète, étape par étape.",
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
        Buildrs a un process interne pour lancer un MVP client en 5 jours. Jour 1 : brief + CLAUDE.md + architecture. Jour 2-3 : Claude Code construit les features. Jour 4 : intégrations (Stripe, Supabase Auth, emails). Jour 5 : QA + déploiement prod. Ce framework a été utilisé pour 12 projets clients en 2025-2026, avec un taux de satisfaction de 100%. Le secret : le CLAUDE.md du projet est hyper-détaillé dès le jour 1.
      </CalloutBox>

      <OfferCTA variant="accompagnement" buttonLabel="En savoir plus →" buttonLink="/dashboard/offres">
        Tu veux être accompagné de A à Z pour lancer ton activité avec Claude ? Découvre l'accompagnement Buildrs — 3 mois pour transformer ton business.
      </OfferCTA>
    </>
  ),
}

const chapter15: Chapter = {
  number: "15",
  title: "Les briques à connecter absolument",
  subtitle: "Vercel, Supabase, GitHub, Stripe — et comment les relier.",
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
        La stack standard de Buildrs pour chaque projet client : GitHub (code) + Vercel (hosting) + Supabase (backend) + Stripe (paiements) + Resend (emails). Cette stack est 100% gratuite au lancement. Le premier euro de coût infra arrive quand le projet dépasse les limites des plans gratuits — souvent autour de 1000+ utilisateurs. Pour un MVP, le coût est littéralement de 0€ en infra.
      </CalloutBox>

      <OfferCTA variant="card" icon="⚡" title="TOUS CES OUTILS CONNECTÉS EN UN CLIC" buttonLabel="Obtenir le Kit → 97€" buttonLink="/dashboard/offres">
        Le Kit d'implémentation inclut les configs, les comptes à créer, et le workflow complet.
      </OfferCTA>
    </>
  ),
}

const chapterBonus: Chapter = {
  number: "BONUS",
  title: "La feuille de route complète",
  subtitle: "28 étapes, 8 phases, ~2h30 — de zéro à machine de guerre.",
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
