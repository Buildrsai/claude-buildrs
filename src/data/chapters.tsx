import { CalloutBox, CodeBlock, TableBlock, QuizSection, ActionPlan, type QuizQuestion } from "@/components/dashboard/ChapterComponents"

/* ─── Chapter Type ─── */
export interface Chapter {
  number: string
  title: string
  subtitle: string
  bloc: "Comprendre" | "Configurer" | "Exploiter"
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
        "Il propose un écosystème complet : conversation (Claude AI) + code (Claude Code) + automatisation (Cowork)",
        "Il est plus rapide que ChatGPT",
      ],
      correctIndex: 1,
    },
    {
      question: "Le VibeCoding, c'est :",
      options: [
        "Un langage de programmation",
        "Construire des applications en décrivant ce qu'on veut en langage naturel",
        "Une technique de méditation pour développeurs",
      ],
      correctIndex: 1,
    },
    {
      question: "Buildrs est spécialisé dans :",
      options: [
        "Le développement de jeux vidéo",
        "L'implémentation d'écosystèmes IA et la création de micro-SaaS avec Claude comme moteur",
        "La vente de matériel informatique",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>1.1 — L'IA en 2026 : on ne parle plus de chatbots</h3>
      <p>L'IA générative a explosé en 2023 avec ChatGPT. Mais en 2026, le jeu a complètement changé. On ne parle plus de "poser des questions à un chatbot". On parle d'agents autonomes qui exécutent des tâches complexes, construisent des applications, et travaillent en arrière-plan pendant que tu dors.</p>
      <p>Claude, développé par Anthropic, est devenu le moteur central de cette révolution. Pas parce qu'il est "meilleur" sur un benchmark — mais parce qu'il est le seul à proposer un écosystème complet : une interface conversationnelle (Claude AI), un agent de code (Claude Code), et un assistant autonome (Cowork).</p>

      <CalloutBox variant="important">
        La plupart des gens utilisent Claude comme ils utilisaient ChatGPT en 2023 : ils posent des questions et copient-collent les réponses. C'est comme acheter une Ferrari et ne jamais dépasser la 2ème vitesse.
      </CalloutBox>

      <h3>1.2 — Ce que tu vas apprendre dans ce guide</h3>
      <p>Ce guide est structuré en 12 chapitres progressifs. Tu vas :</p>
      <ul>
        <li>Comprendre l'écosystème Claude en profondeur (chapitres 1-4)</li>
        <li>Installer et configurer chaque composant de façon optimale (chapitres 5-9)</li>
        <li>Découvrir comment exploiter Claude pour générer de la valeur et du revenu (chapitres 10-12)</li>
      </ul>

      <h3>1.3 — Le VibeCoding et les micro-SaaS : le business de 2026</h3>
      <p>Le "VibeCoding" — le fait de construire des applications en décrivant ce qu'on veut en langage naturel — est en train de devenir le business model le plus accessible de l'histoire. Des entrepreneurs sans aucune expérience technique lancent des micro-SaaS et génèrent du revenu récurrent.</p>
      <p>Ce guide ne te promet pas de devenir développeur. Il te montre que la frontière entre "technique" et "non-technique" n'existe plus — et que Claude est la clé.</p>

      <h3>1.4 — C'est quoi Buildrs ?</h3>
      <p><strong>Buildrs</strong>, c'est un spécialiste des écosystèmes en intelligence artificielle. Plus spécifiquement, on est spécialisés sur tout l'écosystème Claude — et on est certifiés par Anthropic.</p>
      <p>Concrètement, chez Buildrs on fait 3 choses :</p>
      <ol>
        <li><strong>On implémente des écosystèmes Claude complets</strong> — Skills, MCP, connecteurs, CLAUDE.md, workflows automatisés.</li>
        <li><strong>On construit des micro-SaaS IA</strong> — des logiciels intelligents qui résolvent un problème précis.</li>
        <li><strong>On forme et accompagne</strong> — pour que tu sois autonome sur l'ensemble de l'écosystème.</li>
      </ol>

      <CalloutBox variant="important">
        Ce guide n'est pas écrit par quelqu'un qui a lu la documentation. Il est écrit par une équipe qui build et déploie avec Claude tous les jours, pour des vrais clients, avec des vrais résultats.
      </CalloutBox>

      <CalloutBox variant="action">
        Si tu n'as pas encore de compte Claude, crée-le maintenant sur claude.ai. Choisis le plan Pro ($20/mois) pour accéder à toutes les fonctionnalités dont on parle dans ce guide.
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
    "Si entrepreneur/freelance sans background technique → commence par Claude AI puis Cowork",
    "Si tu veux builder des produits → passe au parcours Claude Code (chapitre 6)",
  ],
  quiz: [
    {
      question: "Tu veux automatiser un rapport hebdomadaire sans coder. Quel produit Claude utilises-tu ?",
      options: ["Claude AI", "Claude Code", "Claude Cowork avec tâches planifiées"],
      correctIndex: 2,
      explanation: "Cowork est fait pour les tâches récurrentes automatisées, sans aucune ligne de code.",
    },
    {
      question: "Claude Code se distingue de Claude AI parce que :",
      options: [
        "Il est plus intelligent",
        "Il a accès complet à ton projet, exécute des commandes, et peut déployer des applications",
        "Il est gratuit",
      ],
      correctIndex: 1,
    },
    {
      question: "Les tâches planifiées de Cowork permettent de :",
      options: [
        "Programmer une tâche une fois et la faire exécuter automatiquement à la fréquence choisie",
        "Envoyer des rappels de calendrier",
        "Planifier des posts sur les réseaux sociaux",
      ],
      correctIndex: 0,
    },
  ],
  content: (
    <>
      <h3>2.1 — Claude AI (claude.ai / app mobile)</h3>
      <p>C'est l'interface que la plupart des gens connaissent. Tu lui parles, il répond. Mais Claude AI en 2026, c'est bien plus qu'un chatbot :</p>
      <ul>
        <li><strong>Mémoire persistante</strong> : Claude se souvient de toi d'une conversation à l'autre.</li>
        <li><strong>Projects</strong> : Des espaces dédiés avec instructions et documents de référence.</li>
        <li><strong>Skills</strong> : Recherche web, exécution de code, création de fichiers, connexion à Google Drive, Gmail, etc.</li>
        <li><strong>Artefacts</strong> : Claude crée des fichiers (documents, tableurs, apps React) directement dans la conversation.</li>
        <li><strong>Connecteurs</strong> : Branchements directs avec tes outils (Drive, Gmail, Notion, Slack, Figma, Stripe…)</li>
      </ul>

      <CalloutBox variant="important">
        Claude AI avec Projects + Mémoire + Connecteurs, c'est comme avoir un assistant personnel qui connaît ton business par cœur et a accès à tous tes outils.
      </CalloutBox>

      <h3>2.2 — Claude Code</h3>
      <p>Claude Code est un agent de code qui vit dans ton terminal. Il ne se contente pas de suggérer du code — il le construit, le teste, le déploie.</p>
      <ul>
        <li><strong>Accès complet au projet</strong> : Il voit tout ton code, comprend l'architecture.</li>
        <li><strong>Exécution réelle</strong> : Il lance des commandes bash, installe des dépendances, crée des fichiers.</li>
        <li><strong>MCP (Model Context Protocol)</strong> : Des serveurs qui connectent Claude Code à GitHub, Supabase, Stripe…</li>
        <li><strong>Subagents</strong> : Claude Code peut déléguer à des sous-agents qui travaillent en parallèle.</li>
        <li><strong>CLAUDE.md</strong> : Un fichier de mémoire par projet.</li>
      </ul>

      <CalloutBox variant="important">
        Claude Code, c'est la raison pour laquelle des non-développeurs peuvent maintenant builder des applications. Tu décris ce que tu veux, il le construit. C'est ça, le VibeCoding.
      </CalloutBox>

      <h3>2.3 — Claude Cowork</h3>
      <p>Cowork est le plus récent et le plus révolutionnaire. C'est un agent autonome dans Claude Desktop qui exécute des tâches complexes en arrière-plan.</p>
      <ul>
        <li><strong>Accès à tes fichiers locaux</strong></li>
        <li><strong>Tâches multi-étapes</strong> : Tu décris un résultat, il planifie et exécute.</li>
        <li><strong>Tâches planifiées</strong> : Tu programmes une seule fois, Claude exécute automatiquement.</li>
        <li><strong>Plugins & Connecteurs</strong> : Slack, Gmail, Drive, calendrier, Figma…</li>
      </ul>
      <p>Exemples de tâches planifiées :</p>
      <ul>
        <li>Chaque matin : résumé de tes emails + messages Slack + agenda du jour</li>
        <li>Chaque lundi : rapport hebdo compilé depuis tes fichiers</li>
        <li>Chaque vendredi : présentation de la semaine générée automatiquement</li>
      </ul>

      <CalloutBox variant="important">
        Cowork transforme Claude en employé virtuel. Sans code, sans terminal, sans compétence technique. Tu lui dis quoi faire, à quelle fréquence, et il s'en occupe.
      </CalloutBox>

      <h3>2.4 — Le tableau comparatif</h3>
      <TableBlock
        headers={["", "Claude AI", "Claude Code", "Claude Cowork"]}
        rows={[
          ["Interface", "Web / App mobile", "Terminal / IDE", "Claude Desktop"],
          ["Pour qui", "Tout le monde", "Builders / Devs", "Tout le monde"],
          ["Force", "Intelligence & conversation", "Construction & déploiement", "Automatisation & tâches"],
          ["Mémoire", "✅ Persistante", "✅ CLAUDE.md par projet", "✅ Par tâche"],
          ["Automatisation", "❌", "Via scripts/hooks", "✅ Tâches planifiées"],
        ]}
      />
    </>
  ),
}

const chapter03: Chapter = {
  number: "03",
  title: "Haiku, Sonnet 4.6, Opus 4.6",
  subtitle: "Lequel utiliser, quand, et comment ne pas cramer tes tokens.",
  bloc: "Comprendre",
  actionPlan: [
    "Comprendre la logique Haiku / Sonnet / Opus",
    "Rester sur Sonnet 4.6 par défaut",
    "Réserver Opus pour la stratégie et l'architecture",
    "Utiliser Haiku pour les tâches simples et répétitives",
  ],
  quiz: [
    {
      question: "Tu dois résumer un article de blog de 500 mots. Quel modèle utilises-tu ?",
      options: ["Opus 4.6", "Sonnet 4.6", "Haiku"],
      correctIndex: 2,
      explanation: "Tâche simple et rapide, Haiku est parfait et économise tes tokens.",
    },
    {
      question: "Les tokens, c'est :",
      options: [
        "Une monnaie virtuelle pour payer Claude",
        "L'unité de mesure qui correspond à ce que tu envoies et ce que Claude génère",
        "Le nombre de conversations par jour",
      ],
      correctIndex: 1,
    },
    {
      question: "L'Extended Thinking, ça sert à quoi ?",
      options: [
        "Faire parler Claude plus longtemps",
        "Permettre à Claude de réfléchir étape par étape avant de répondre, pour des résultats plus profonds",
        "Accélérer la vitesse de réponse",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>3.1 — C'est quoi un "modèle" ?</h3>
      <p>Quand tu utilises Claude, tu parles à un modèle d'IA. Anthropic en propose plusieurs, chacun avec ses forces :</p>
      <ul>
        <li><strong>Haiku</strong> = le stagiaire ultra-rapide. Tâches simples, pas cher, efficace.</li>
        <li><strong>Sonnet 4.6</strong> = le cadre senior. Meilleur rapport qualité/vitesse/prix. 80% de ton usage.</li>
        <li><strong>Opus 4.6</strong> = le directeur stratégique. Le plus intelligent, le plus profond, le plus coûteux.</li>
      </ul>

      <h3>3.2 — Les tokens, c'est quoi ?</h3>
      <p>Les tokens sont l'unité de mesure de l'IA. Chaque mot consomme des tokens :</p>
      <ul>
        <li>1 mot français ≈ 1.3 tokens</li>
        <li>Une page A4 ≈ 500-700 tokens</li>
        <li>Une conversation longue ≈ 10 000 à 100 000 tokens</li>
      </ul>
      <p>Avec le plan Pro ($20/mois), tu as une allocation quotidienne. Le plan Max ($100/mois) supprime pratiquement cette limite.</p>

      <CalloutBox variant="important">
        Choisir le bon modèle au bon moment = plus de conversations, de meilleurs résultats, et pas de frustration en fin de journée quand tu as "cramé" tes tokens avec Opus alors que Haiku aurait suffi.
      </CalloutBox>

      <h3>3.3 — Quand utiliser quoi ?</h3>
      <TableBlock
        headers={["Tâche", "Modèle recommandé", "Pourquoi"]}
        rows={[
          ["Résumer un texte", "Haiku", "Rapide, simple, économique"],
          ["Reformuler un email", "Haiku ou Sonnet", "Pas besoin de réflexion profonde"],
          ["Rédiger du contenu long", "Sonnet 4.6", "Bon équilibre créativité/vitesse"],
          ["Analyser un document complexe", "Sonnet 4.6", "Capacité de raisonnement suffisante"],
          ["Stratégie business approfondie", "Opus 4.6", "Raisonnement en profondeur nécessaire"],
          ["Coder une application", "Sonnet 4.6", "Modèle par défaut de Claude Code"],
          ["Architecture technique complexe", "Opus 4.6", "Extended Thinking pour l'architecture"],
          ["Tâches Cowork planifiées", "Sonnet 4.6", "Meilleur ratio pour les automatisations"],
        ]}
      />

      <h3>3.4 — Le "Extended Thinking"</h3>
      <p>Opus 4.6 et Sonnet 4.6 ont une fonctionnalité unique : le mode "Extended Thinking". Au lieu de répondre immédiatement, Claude prend le temps de "réfléchir" étape par étape. C'est la différence entre répondre du tac au tac et prendre 30 secondes pour structurer sa pensée.</p>
      <p>Quand l'activer : problèmes complexes, analyses stratégiques, code qui nécessite une architecture bien pensée.</p>

      <CalloutBox variant="action">
        Dans Claude AI, le sélecteur de modèle est en bas à gauche de la zone de chat. Change de modèle en fonction de la tâche. Par défaut, reste sur Sonnet 4.6.
      </CalloutBox>
    </>
  ),
}

const chapter04: Chapter = {
  number: "04",
  title: "Le bon plan, les bons paramètres",
  subtitle: "Setup optimal en 10 minutes — pour ne rien rater.",
  bloc: "Comprendre",
  actionPlan: [
    "Choisir son plan (Pro recommandé pour débuter)",
    "Installer Claude Desktop",
    "Activer mémoire + recherche web + exécution de code",
    "Connecter Google Drive + Gmail minimum",
    "Installer l'extension Chrome",
  ],
  quiz: [
    {
      question: "Pourquoi Claude Desktop est indispensable ?",
      options: [
        "Il est plus joli que le navigateur",
        "C'est la seule façon d'accéder à Cowork, aux tâches planifiées et aux fichiers locaux",
        "Il est plus rapide",
      ],
      correctIndex: 1,
    },
    {
      question: "Quel plan est recommandé pour suivre ce guide et commencer à exploiter Claude ?",
      options: ["Free", "Pro ($20/mois)", "Enterprise"],
      correctIndex: 1,
      explanation: "Pro donne accès à tout : Claude AI, Claude Code, Cowork et les tâches planifiées.",
    },
    {
      question: "Les connecteurs permettent de :",
      options: [
        "Brancher Claude directement à tes outils (Drive, Gmail, Notion, Slack…) en un clic",
        "Connecter Claude à Internet",
        "Relier plusieurs comptes Claude entre eux",
      ],
      correctIndex: 0,
    },
  ],
  content: (
    <>
      <h3>4.1 — Les plans Claude</h3>
      <TableBlock
        headers={["Plan", "Prix", "Ce que tu obtiens"]}
        rows={[
          ["Free", "0€", "Conversations limitées, pas de Projects avancés, pas de Cowork"],
          ["Pro", "$20/mois", "Accès complet Claude AI + Code + Cowork + tâches planifiées + tous les modèles"],
          ["Max", "$100/mois", "Tout Pro + limites quasi-illimitées + usage intensif Claude Code"],
          ["Team", "$30/user/mois", "Pro + collaboration d'équipe + admin"],
        ]}
      />
      <p>Notre recommandation : <strong>Pro</strong> ($20/mois) pour débuter. <strong>Max</strong> ($100/mois) si tu utilises Claude Code intensivement.</p>

      <h3>4.2 — Installer Claude Desktop</h3>
      <p>Claude Desktop est l'application de bureau qui donne accès à Cowork. C'est aussi la meilleure façon d'utiliser Claude AI au quotidien.</p>
      <ol>
        <li>Va sur claude.ai/download</li>
        <li>Télécharge la version Mac ou Windows</li>
        <li>Connecte-toi avec ton compte Claude</li>
        <li>Tu as maintenant accès à Chat + Cowork + les connecteurs</li>
      </ol>

      <CalloutBox variant="important">
        L'application Desktop est indispensable. Le navigateur web est limité : pas de Cowork, pas de tâches planifiées, pas d'accès à tes fichiers locaux. Le Desktop, c'est Claude en mode "professionnel".
      </CalloutBox>

      <h3>4.3 — Activer les extensions et connecteurs</h3>
      <p>Dans Claude Desktop → Settings → Extensions :</p>
      <ul>
        <li><strong>Google Drive</strong> : Claude accède à tes documents</li>
        <li><strong>Gmail</strong> : Claude lit et rédige des emails</li>
        <li><strong>Google Calendar</strong> : Claude connaît ton planning</li>
        <li><strong>Notion</strong> : Claude accède à tes bases de données</li>
        <li><strong>Slack</strong> : Claude lit et envoie des messages</li>
        <li><strong>Figma</strong> : Claude voit tes designs</li>
        <li><strong>Stripe</strong> : Claude accède à tes données de paiement</li>
      </ul>

      <h3>4.4 — Paramètres recommandés</h3>
      <p>Dans Settings de Claude AI :</p>
      <ul>
        <li>✅ Activer la mémoire</li>
        <li>✅ Activer la recherche web</li>
        <li>✅ Activer l'exécution de code</li>
        <li>✅ Activer la création de fichiers</li>
        <li>✅ Connecter Google Drive et Gmail au minimum</li>
      </ul>

      <CalloutBox variant="action">
        Ouvre Claude Desktop maintenant. Va dans Settings. Active la mémoire, la recherche web, l'exécution de code. Connecte au moins Google Drive et Gmail. Ça prend 5 minutes.
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
    "Ajouter 1-2 documents de référence",
    "Configurer sa mémoire avec les infos de base",
  ],
  quiz: [
    {
      question: "Un bon prompt contient 4 éléments. Lesquels ?",
      options: [
        "Sujet, Longueur, Langue, Date",
        "Rôle, Contexte, Tâche, Format",
        "Question, Réponse, Source, Vérification",
      ],
      correctIndex: 1,
    },
    {
      question: "Un Project Claude, c'est :",
      options: [
        "Un dossier de code sur GitHub",
        "Un espace dédié avec un prompt système permanent et des documents de référence",
        "Un projet Notion partagé avec Claude",
      ],
      correctIndex: 1,
    },
    {
      question: "La mémoire persistante de Claude :",
      options: [
        "Retient tout ce que tu lui as dit, sans exception",
        "Retient tes préférences, des faits sur toi et tes instructions récurrentes",
        "Se réinitialise chaque jour",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>5.1 — Le problème avec la plupart des prompts</h3>
      <p>90% des gens écrivent des prompts comme ça : "Écris-moi un post Instagram sur l'IA". Et se plaignent que le résultat est "générique". Le problème n'est pas Claude — c'est l'instruction.</p>

      <h3>5.2 — La structure d'un bon prompt</h3>
      <p>Un bon prompt contient 4 éléments :</p>
      <ol>
        <li><strong>Rôle</strong> : Qui est Claude dans cette conversation ?</li>
        <li><strong>Contexte</strong> : Quel est le background ?</li>
        <li><strong>Tâche</strong> : Que doit-il faire précisément ?</li>
        <li><strong>Format</strong> : Comment tu veux le résultat ?</li>
      </ol>

      <CalloutBox variant="important">
        Un prompt de 5 lignes bien structuré produit un meilleur résultat qu'une conversation de 20 messages flous. Claude est un outil de précision — plus tu es clair, plus il est puissant.
      </CalloutBox>

      <h3>5.3 — Les Projects : ton arme secrète</h3>
      <p>Les Projects sont la fonctionnalité la plus sous-utilisée de Claude. Un Project, c'est :</p>
      <ul>
        <li>Un <strong>prompt système</strong> permanent</li>
        <li>Des <strong>documents de référence</strong></li>
        <li>Un <strong>espace isolé</strong></li>
      </ul>
      <p>Exemples de Projects à créer :</p>
      <ul>
        <li><strong>"Mon Business"</strong> → ta description d'activité, tes offres, ta cible, ton ton de voix</li>
        <li><strong>"Contenu Social"</strong> → ta charte éditoriale, exemples de posts qui marchent</li>
        <li><strong>"Stratégie"</strong> → ton business plan, tes objectifs, tes KPIs</li>
        <li><strong>"Client [Nom]"</strong> → brief client, historique, livrables</li>
      </ul>

      <h3>5.4 — La mémoire de Claude</h3>
      <p>Claude AI a une mémoire persistante qui retient tes préférences, des faits sur toi et tes instructions récurrentes. Tu peux la gérer dans Settings → Memory.</p>

      <CalloutBox variant="action">
        Crée ton premier Project : "Mon Business". Dans le prompt système, écris un paragraphe qui décrit ton activité, ton audience cible, et ton ton de voix. Ajoute un document de référence.
      </CalloutBox>
    </>
  ),
}

const chapter06: Chapter = {
  number: "06",
  title: "Ton agent de code, opérationnel en 20 minutes",
  subtitle: "Local, VS Code ou Anti-Gravity — on t'explique tout.",
  bloc: "Configurer",
  actionPlan: [
    "Installer Node.js",
    "Installer Claude Code via npm",
    "Lancer ta première session",
    "Créer ton premier \"Hello World\"",
  ],
  quiz: [
    {
      question: "Pourquoi utiliser Claude Code en local plutôt que dans le navigateur ?",
      options: [
        "C'est moins cher",
        "Claude Code a accès complet à ton projet, exécute des commandes et peut déployer",
        "Le navigateur est trop lent",
      ],
      correctIndex: 1,
    },
    {
      question: "Pour installer Claude Code, tu as besoin de :",
      options: ["Python", "Node.js + la commande npm install", "Un Mac obligatoirement"],
      correctIndex: 1,
    },
    {
      question: "Quand tu lances `claude` dans un dossier de projet, Claude Code peut :",
      options: [
        "Uniquement lire les fichiers",
        "Lire, modifier, créer des fichiers, exécuter des commandes, et déployer",
        "Uniquement répondre à des questions",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>6.1 — C'est quoi Claude Code concrètement ?</h3>
      <p>Claude Code est un programme qui tourne dans ton terminal. Quand tu le lances dans un dossier de projet, il a accès à tous les fichiers, peut les lire, les modifier, en créer de nouveaux, exécuter des commandes, et même déployer ton application.</p>

      <CalloutBox variant="important">
        En local, Claude Code a accès à ton système de fichiers complet. Il peut créer des projets, installer des dépendances, lancer un serveur, et voir le résultat en temps réel. C'est la vraie puissance du VibeCoding.
      </CalloutBox>

      <h3>6.2 — Les 3 options d'installation</h3>
      <p><strong>Option A — Installation locale (recommandé)</strong></p>
      <CodeBlock language="bash" code="npm install -g @anthropic-ai/claude-code" />
      <p>Ensuite, dans n'importe quel dossier :</p>
      <CodeBlock language="bash" code={`cd mon-projet\nclaude`} />

      <p><strong>Option B — Dans VS Code</strong> — Extension Claude Code dans le marketplace VS Code.</p>
      <p><strong>Option C — Anti-Gravity IDE</strong> — Un IDE conçu spécifiquement pour le VibeCoding avec les agents IA.</p>

      <h3>6.3 — Pourquoi le local est supérieur au navigateur</h3>
      <TableBlock
        headers={["", "Claude AI (navigateur)", "Claude Code (local)"]}
        rows={[
          ["Accès aux fichiers", "Upload uniquement", "Accès complet au projet"],
          ["Exécution de code", "Sandbox limité", "Terminal complet"],
          ["Déploiement", "❌", "✅ Direct"],
          ["MCP / Connecteurs", "Limité", "Complet"],
          ["Subagents", "❌", "✅ Parallèle"],
        ]}
      />

      <h3>6.4 — Ta première session Claude Code</h3>
      <CodeBlock language="bash" code={`mkdir mon-premier-projet\ncd mon-premier-projet\nclaude`} />
      <p>Puis tape : "Crée une application React avec une page d'accueil qui affiche 'Hello World' avec un design moderne et sombre."</p>
      <p>Regarde Claude Code créer la structure, installer les dépendances, écrire le code, et lancer le serveur. Tout ça, sans une seule ligne de code de ta part.</p>

      <CalloutBox variant="action">
        Installe Node.js (nodejs.org) puis lance <code>npm install -g @anthropic-ai/claude-code</code>. Ouvre un terminal, crée un dossier, lance <code>claude</code>. Fais ton premier "Hello World". Ça prend 15 minutes.
      </CalloutBox>
    </>
  ),
}

const chapter07: Chapter = {
  number: "07",
  title: "Prévisualise, pousse, déploie — sans friction",
  subtitle: "GitHub, Vercel, et la preview en temps réel.",
  bloc: "Configurer",
  actionPlan: [
    "Comprendre le flux Preview → GitHub → Vercel",
    "Créer un compte GitHub",
    "Créer un compte Vercel",
    "Connecter les deux",
  ],
  quiz: [
    {
      question: "GitHub sert à :",
      options: [
        "Héberger ton site web",
        "Stocker ton code avec un historique complet de chaque modification",
        "Gérer tes emails",
      ],
      correctIndex: 1,
    },
    {
      question: "Avec Vercel, le déploiement fonctionne comment ?",
      options: [
        "Tu dois uploader manuellement tes fichiers",
        "Tu pushes sur GitHub et Vercel déploie automatiquement à chaque changement",
        "Tu dois envoyer un email au support Vercel",
      ],
      correctIndex: 1,
    },
    {
      question: "Le workflow complet du VibeCoding c'est :",
      options: [
        "Coder → Tester → Déployer manuellement",
        "Décrire → Claude Code construit → Preview → Push GitHub → Vercel déploie automatiquement",
        "Dessiner un wireframe → Envoyer à un développeur",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>7.1 — La preview en temps réel</h3>
      <p>Quand Claude Code crée ou modifie une application, tu peux voir le résultat en direct dans ton navigateur. Chaque modification est immédiatement visible. C'est le cœur du VibeCoding : tu diriges, Claude exécute, tu valides visuellement.</p>

      <h3>7.2 — GitHub : ton coffre-fort de code</h3>
      <p>GitHub est la plateforme où tu stockes ton code. Pense à Google Drive mais pour le code. Claude Code peut créer un repository, pusher tes modifications, et gérer les versions de ton projet.</p>

      <h3>7.3 — Vercel : le déploiement en un clic</h3>
      <p>Vercel met ton application en ligne. Tu connectes ton GitHub à Vercel, et chaque push déploie automatiquement.</p>
      <CodeBlock code={`Tu décris → Claude Code construit → Push sur GitHub → Vercel déploie → Ton app est en ligne`} />

      <CalloutBox variant="important">
        Ce workflow, c'est exactement celui que les agences de développement facturent des milliers d'euros. Avec Claude Code + GitHub + Vercel, un entrepreneur seul peut faire la même chose gratuitement.
      </CalloutBox>

      <CalloutBox variant="action">
        Crée un compte GitHub (github.com) et un compte Vercel (vercel.com). Les deux sont gratuits.
      </CalloutBox>
    </>
  ),
}

const chapter08: Chapter = {
  number: "08",
  title: "Claude est livré nu. Habille-le.",
  subtitle: "Les Skills qui transforment Claude en machine de guerre.",
  bloc: "Configurer",
  actionPlan: [
    "Installer le skill Frontend Design",
    "Installer le skill SuperPowers",
    "Ajouter le MCP Context7",
    "Comprendre la différence Skills vs MCP",
    "Tester un /frontend-design sur un mini-projet",
  ],
  quiz: [
    {
      question: "Quelle est la différence entre un Skill et un MCP ?",
      options: [
        "C'est la même chose",
        "Un Skill dit à Claude COMMENT travailler, un MCP lui donne accès à des services EXTERNES",
        "Les Skills sont payants, les MCP sont gratuits",
      ],
      correctIndex: 1,
    },
    {
      question: "Le skill Frontend Design sert à :",
      options: [
        "Créer des logos",
        "Produire des interfaces premium qui évitent l'esthétique générique \"faite par l'IA\"",
        "Optimiser la vitesse du site",
      ],
      correctIndex: 1,
    },
    {
      question: "Context7 MCP, ça fait quoi concrètement ?",
      options: [
        "Il connecte Claude à ChatGPT",
        "Il fournit à Claude la documentation à jour des librairies en temps réel",
        "Il traduit le code en 7 langues",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>8.1 — C'est quoi un Skill ?</h3>
      <p>Un Skill est un fichier Markdown qui donne à Claude des instructions spécialisées. Sans Skills, Claude est un généraliste brillant. Avec les bons Skills, il devient un spécialiste redoutable.</p>
      <p>Analogie : Claude sans Skills = un couteau suisse fermé. Claude avec Skills = un atelier complet.</p>

      <h3>8.2 — Les Skills essentiels recommandés par Buildrs</h3>
      <TableBlock
        headers={["Skill", "Ce qu'il fait", "Pourquoi l'installer"]}
        rows={[
          ["Frontend Design", "Design d'interfaces premium", "Fini les designs génériques \"IA\""],
          ["SuperPowers", "Brainstorming, TDD, debugging, code review", "Le couteau suisse du développeur"],
          ["Feature Dev", "Planification et construction de features", "Brief → feature construite étape par étape"],
          ["Code Review", "Revue de code par agents parallèles", "4 agents analysent ton code en simultané"],
          ["Context7 (MCP)", "Documentation à jour en temps réel", "Claude ne code plus avec des infos obsolètes"],
        ]}
      />

      <h3>8.3 — Comment installer un Skill dans Claude Code</h3>
      <CodeBlock language="bash" code={`# Installer un plugin officiel\n/plugin install code-review@claude-plugins-official\n\n# Installer un skill depuis GitHub\nnpx skills add https://github.com/anthropic/frontend-design\n\n# Les skills personnels (dans ton dossier home)\n~/.claude/skills/mon-skill/SKILL.md`} />

      <h3>8.4 — Les MCP : connecter Claude Code au monde extérieur</h3>
      <p>MCP (Model Context Protocol) = des serveurs qui donnent à Claude Code accès à des services externes.</p>
      <CodeBlock language="bash" code="claude mcp add context7 -- npx -y @upstash/context7-mcp@latest" />

      <CalloutBox variant="important">
        Skills + MCP couvrent 80% des workflows. Les Skills disent à Claude COMMENT travailler. Les MCP lui donnent accès à QUOI travailler. Ensemble, c'est un écosystème complet.
      </CalloutBox>

      <h3>8.5 — Les Hooks : automatiser les vérifications</h3>
      <p>Les Hooks sont des actions automatiques qui se déclenchent à des moments précis : avant chaque commit, après chaque modification, à chaque démarrage de session. C'est le filet de sécurité de ton workflow.</p>
    </>
  ),
}

const chapter09: Chapter = {
  number: "09",
  title: "Fais en sorte que Claude se souvienne de tout",
  subtitle: "Projet par projet, automatiquement.",
  bloc: "Configurer",
  actionPlan: [
    "Créer un CLAUDE.md dans ton projet principal",
    "Y mettre au minimum : description, conventions, design system",
    "Tester en lançant Claude Code et en vérifiant qu'il respecte tes instructions",
  ],
  quiz: [
    {
      question: "Le CLAUDE.md, c'est :",
      options: [
        "Un fichier de documentation que tu lis toi-même",
        "Un fichier que Claude Code lit automatiquement à chaque session pour connaître le contexte de ton projet",
        "Un template de mail",
      ],
      correctIndex: 1,
    },
    {
      question: "Les 3 niveaux de mémoire dans l'écosystème Claude sont :",
      options: [
        "Court terme, moyen terme, long terme",
        "Globale (mémoire Claude AI), Projet (CLAUDE.md), Session (conversation en cours)",
        "Locale, cloud, hybride",
      ],
      correctIndex: 1,
    },
    {
      question: "Un non-développeur peut-il créer un CLAUDE.md utile ?",
      options: [
        "Non, il faut savoir coder",
        "Oui — il suffit de décrire qui tu es, ton style, ce que tu veux et ce que tu ne veux pas",
        "Seulement avec l'aide d'un développeur",
      ],
      correctIndex: 1,
      explanation: "Le CLAUDE.md du coach en développement personnel dans ce chapitre le prouve.",
    },
  ],
  content: (
    <>
      <h3>9.1 — Le problème de la mémoire contextuelle</h3>
      <p>Chaque conversation avec Claude commence avec un contexte vide. Même avec la mémoire persistante, le contexte spécifique à un projet se perd. Le CLAUDE.md résout ce problème pour Claude Code.</p>

      <h3>9.2 — C'est quoi un CLAUDE.md ?</h3>
      <p>C'est un fichier Markdown à la racine de ton projet. Claude Code le lit automatiquement à chaque session. C'est comme une lettre d'accueil : "Voici le projet, voici comment on travaille, voici ce qu'il ne faut PAS faire."</p>

      <h3>9.3 — Structure d'un bon CLAUDE.md</h3>
      <CodeBlock language="markdown" code={`# Projet : [Nom du projet]\n\n## Description\n[Ton projet] est un [type d'app] qui [ce qu'il fait] pour [qui].\n\n## Stack technique\n- Frontend : React + TypeScript + Tailwind CSS\n- Backend : Supabase\n- Déploiement : Vercel\n\n## Conventions\n- Composants fonctionnels React avec hooks\n- Noms de fichiers en kebab-case\n- TypeScript strict\n\n## Ce qu'il ne faut PAS faire\n- Ne jamais modifier les fichiers de migration manuellement\n- Ne pas utiliser de CSS inline — Tailwind uniquement\n- Ne pas stocker de secrets dans le code`} />

      <h3>9.4 — Les 3 niveaux de mémoire</h3>
      <TableBlock
        headers={["Niveau", "Outil", "Portée", "Persistance"]}
        rows={[
          ["Global", "Mémoire Claude AI", "Toutes les conversations", "✅ Permanente"],
          ["Projet", "CLAUDE.md", "Un projet spécifique", "✅ Fichier dans le repo"],
          ["Session", "Contexte de conversation", "Une conversation", "❌ Disparaît à la fermeture"],
        ]}
      />

      <h3>9.5 — CLAUDE.md pour les non-devs</h3>
      <CodeBlock language="markdown" code={`# Mon projet de formation en ligne\n\n## Qui je suis\nCoach en développement personnel, audience francophone, 25-45 ans.\n\n## Mon style\nDirect, bienveillant, pas de jargon. Tutoiement. Phrases courtes.\n\n## Ce que je veux\nClaude doit m'aider à créer du contenu de formation structuré.\n\n## Ce que je ne veux PAS\nPas de ton corporate. Pas de listes interminables.`} />

      <CalloutBox variant="important">
        Le CLAUDE.md est la raison pour laquelle les projets construits avec Claude Code sont cohérents et professionnels. Sans lui, chaque session repart de zéro. Avec lui, Claude est déjà briefé.
      </CalloutBox>

      <CalloutBox variant="action">
        Crée un fichier CLAUDE.md dans ton projet principal. Copie la structure ci-dessus et adapte-la. La prochaine fois que tu lances Claude Code, il sera déjà briefé.
      </CalloutBox>
    </>
  ),
}

/* ═══════════════════════════════════════ */
/* BLOC 3 — EXPLOITER                     */
/* ═══════════════════════════════════════ */

const chapter10: Chapter = {
  number: "10",
  title: "Comment des entrepreneurs non-techniques génèrent du revenu avec Claude",
  subtitle: "Le VibeCoding, les micro-SaaS, et l'automatisation comme business model.",
  bloc: "Exploiter",
  actionPlan: [
    "Identifier UN problème dans ton activité qu'un outil pourrait résoudre",
    "Noter l'audience précise qui a ce problème",
    "Évaluer si des gens paieraient pour cette solution",
    "Passer au chapitre 11 pour le construire",
  ],
  quiz: [
    {
      question: "Un micro-SaaS, c'est :",
      options: [
        "Un gros logiciel d'entreprise",
        "Un petit logiciel en ligne qui résout UN problème spécifique avec un abonnement mensuel",
        "Un réseau social",
      ],
      correctIndex: 1,
    },
    {
      question: "Le coût total pour lancer un micro-SaaS avec la stack Claude + Supabase + Vercel est d'environ :",
      options: [
        "10 000€ minimum",
        "20-100$/mois (principalement l'abonnement Claude)",
        "500€/mois",
      ],
      correctIndex: 1,
      explanation: "Supabase, Vercel et Stripe ont tous des plans gratuits pour démarrer.",
    },
    {
      question: "L'automatisation avec Cowork peut devenir un business parce que :",
      options: [
        "Anthropic paye les gens pour utiliser Cowork",
        "Tu peux configurer des workflows pour des clients et facturer entre 500€ et 3000€ par workflow",
        "Cowork génère de l'argent automatiquement",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>10.1 — Le paradigme a changé</h3>
      <p>Jusqu'en 2024, pour créer un logiciel, il te fallait savoir coder (ou payer 300-800€/jour), des mois de développement, et des dizaines de milliers d'euros.</p>
      <p>En 2026, avec Claude Code + le bon setup, tu peux construire un MVP en quelques heures, le déployer gratuitement (Vercel + Supabase), et le monétiser immédiatement (Stripe).</p>

      <CalloutBox variant="important">
        Des milliers d'entrepreneurs lancent des micro-SaaS chaque mois avec cette méthode. Le coût d'entrée est passé de 50 000€ à 20$/mois.
      </CalloutBox>

      <h3>10.2 — C'est quoi un micro-SaaS ?</h3>
      <p>Un micro-SaaS = un petit logiciel en ligne qui résout UN problème pour UNE audience, avec un abonnement mensuel. Exemples :</p>
      <ul>
        <li>Outil de facturation pour les coachs → 19€/mois</li>
        <li>Générateur de contenu pour les agents immobiliers → 29€/mois</li>
        <li>Dashboard de suivi de KPIs pour les freelances → 9€/mois</li>
      </ul>
      <p>Revenu moyen d'un micro-SaaS qui fonctionne : 500€ à 5 000€/mois de MRR.</p>

      <h3>10.3 — La stack technique (simplifiée)</h3>
      <TableBlock
        headers={["Brique", "Outil", "Coût"]}
        rows={[
          ["Intelligence", "Claude Code", "$20-100/mois"],
          ["Frontend", "React + Tailwind", "Gratuit"],
          ["Backend & BDD", "Supabase", "Gratuit (plan starter)"],
          ["Paiements", "Stripe", "Commission uniquement"],
          ["Hébergement", "Vercel", "Gratuit (plan hobby)"],
          ["Domaine", "Ton registrar", "~10€/an"],
        ]}
      />

      <h3>10.4 — L'automatisation comme business</h3>
      <p>Au-delà des micro-SaaS, Claude Cowork ouvre un autre modèle : la prestation d'automatisation. Des freelances facturent entre 500€ et 3 000€ par workflow.</p>

      <CalloutBox variant="buildrs">
        C'est exactement la méthodologie qu'on applique avec nos clients chez Buildrs. On les accompagne de l'idée au lancement, avec Claude au cœur de la stack. Si tu veux aller plus vite, on en parle à la fin de ce guide.
      </CalloutBox>
    </>
  ),
}

const chapter11: Chapter = {
  number: "11",
  title: "De l'idée au produit déployé",
  subtitle: "La méthode complète, étape par étape.",
  bloc: "Exploiter",
  actionPlan: [
    "Définir ton MVP (1 problème, 1 audience, 1 feature)",
    "Lancer Claude Code avec le prompt de démarrage",
    "Construire + prévisualiser",
    "Déployer sur Vercel",
    "Partager avec 10 personnes pour valider",
  ],
  quiz: [
    {
      question: "MVP signifie :",
      options: [
        "Maximum Value Product",
        "Minimum Viable Product — le produit le plus simple qui valide ton idée",
        "Most Valuable Player",
      ],
      correctIndex: 1,
    },
    {
      question: "Dans le framework Buildrs, combien de temps faut-il pour aller de l'idée au MVP déployé ?",
      options: [
        "3-6 mois",
        "Environ 1 journée (30 min + 1h + 2-4h + 30 min)",
        "2-3 semaines",
      ],
      correctIndex: 1,
      explanation: "C'est la puissance du VibeCoding avec Claude Code.",
    },
    {
      question: "La première chose à faire avant de builder, c'est :",
      options: [
        "Choisir les couleurs du design",
        "Définir clairement le problème, l'audience et la feature principale",
        "Créer un compte Stripe",
      ],
      correctIndex: 1,
      explanation: "Sans clarté sur le problème et l'audience, même le meilleur outil ne sert à rien.",
    },
  ],
  content: (
    <>
      <h3>11.1 — Qu'est-ce qu'un MVP ?</h3>
      <p>MVP = Minimum Viable Product. Le produit le plus simple qui valide ton idée. Pas 50 features — 1 à 3, bien exécutées.</p>

      <h3>11.2 — Le framework en 5 étapes</h3>
      <p><strong>Étape 1 : Définir (30 min)</strong></p>
      <ul>
        <li>Quel problème tu résous ?</li>
        <li>Pour qui ?</li>
        <li>Quelle est la feature principale (une seule) ?</li>
        <li>Comment les gens paient ?</li>
      </ul>

      <p><strong>Étape 2 : Planifier (1h)</strong> — Demande à Claude Code de créer un plan d'architecture.</p>

      <p><strong>Étape 3 : Construire (2-4h)</strong></p>
      <CodeBlock language="bash" code={`claude\n> Construis l'application selon le plan qu'on a défini.\n> Commence par le setup du projet (React + TypeScript + Tailwind + Supabase).\n> Utilise le skill frontend-design pour un design premium dark mode.`} />

      <p><strong>Étape 4 : Déployer (30 min)</strong></p>
      <CodeBlock language="bash" code={`> Connecte ce projet à GitHub et déploie sur Vercel.\n> Intègre Stripe pour un abonnement mensuel à 29€/mois.`} />

      <p><strong>Étape 5 : Valider (1 semaine)</strong> — Partage le lien avec 10-20 personnes de ta cible. Recueille les retours. Itère.</p>

      <h3>11.3 — Le prompt de démarrage type</h3>
      <CodeBlock language="markdown" code={`Je veux créer un micro-SaaS appelé [NOM].\n\n## Le problème\n[Décris le problème en 2-3 phrases]\n\n## L'audience\n[Qui sont les utilisateurs ?]\n\n## La solution\n[Décris la feature principale]\n\n## Stack technique\n- Frontend : React + TypeScript + Tailwind CSS\n- Backend : Supabase\n- Paiements : Stripe\n- Déploiement : Vercel\n- Design : Dark mode, premium\n\nCommence par créer la structure du projet et la landing page.`} />

      <CalloutBox variant="action">
        Reprends l'idée identifiée au chapitre 10. Copie le prompt ci-dessus, adapte-le, et lance Claude Code. Ton MVP sera en ligne avant la fin de la journée.
      </CalloutBox>
    </>
  ),
}

const chapter12: Chapter = {
  number: "12",
  title: "Ressources & Templates Buildrs",
  subtitle: "Nos fichiers, nos prompts, notre checklist — à copier.",
  bloc: "Exploiter",
  isBonus: true,
  actionPlan: [
    "Copier le template CLAUDE.md",
    "Sauvegarder les prompts qui te parlent",
    "Suivre la checklist de lancement MVP",
    "Réserver un appel avec Buildrs si tu veux aller plus vite",
  ],
  quiz: [
    {
      question: "Quel est le premier fichier à créer dans tout nouveau projet Claude Code ?",
      options: [
        "README.md",
        "CLAUDE.md — pour que Claude connaisse le contexte dès le départ",
        "index.html",
      ],
      correctIndex: 1,
    },
    {
      question: "La checklist de lancement MVP comporte des étapes dans quel ordre ?",
      options: [
        "Déployer → Construire → Définir",
        "Pré-lancement → Construction → Déploiement → Validation",
        "Trouver des clients → Construire → Installer Claude",
      ],
      correctIndex: 1,
    },
    {
      question: "Buildrs peut t'aider à :",
      options: [
        "Créer un compte Claude",
        "Configurer ton écosystème Claude complet, construire tes micro-SaaS, et automatiser tes process — en 48h",
        "Remplacer Claude par un autre outil",
      ],
      correctIndex: 1,
    },
  ],
  content: (
    <>
      <h3>12.1 — Template CLAUDE.md par Buildrs</h3>
      <p>Le fichier CLAUDE.md complet que notre équipe utilise pour chaque projet client :</p>
      <CodeBlock language="markdown" code={`# Projet : [Nom du projet]\n\n## Description\n[Ton projet] est un [type d'app] qui [ce qu'il fait] pour [qui].\n\n## Stack technique\n- Frontend : React + TypeScript + Tailwind CSS\n- Backend : Supabase (PostgreSQL + Auth + Storage + Edge Functions)\n- Paiements : Stripe\n- Déploiement : Vercel\n\n## Conventions\n- Composants fonctionnels React avec hooks\n- Noms de fichiers en kebab-case\n- TypeScript strict\n- Commits en français : type(scope): description\n\n## Design system\n- Fond : #0A0A0A\n- Texte : #FFFFFF / #A0A0A0\n- Accent : #DA7756\n- Border radius : 12px\n- Style : glassmorphism dark\n\n## Ce qu'il ne faut PAS faire\n- Ne jamais modifier les fichiers de migration manuellement\n- Pas de CSS inline — Tailwind uniquement\n- Pas de secrets dans le code`} />

      <h3>12.2 — Nos prompts favoris</h3>
      <p>Collection de prompts optimisés pour les cas d'usage les plus fréquents :</p>
      <ol>
        <li>Prompt de brainstorming business</li>
        <li>Prompt de rédaction de contenu social</li>
        <li>Prompt de copywriting landing page</li>
        <li>Prompt d'analyse de marché</li>
        <li>Prompt de planification de feature</li>
        <li>Prompt de code review</li>
        <li>Prompt de création de design system</li>
        <li>Prompt de rédaction d'email commercial</li>
        <li>Prompt d'automatisation Cowork (tâche planifiée)</li>
        <li>Prompt de lancement micro-SaaS (le prompt du chapitre 11)</li>
      </ol>

      <h3>12.3 — Checklist de lancement MVP</h3>
      <CodeBlock code={`PRÉ-LANCEMENT\n□ Compte Claude Pro/Max activé\n□ Claude Desktop installé\n□ Node.js + Claude Code installés\n□ Compte GitHub créé\n□ Compte Vercel créé\n□ Compte Supabase créé\n□ Compte Stripe créé\n\nCONSTRUCTION\n□ CLAUDE.md créé à la racine du projet\n□ Skills installés (Frontend Design + SuperPowers)\n□ MCP configurés (Context7 minimum)\n□ MVP construit et testé en preview locale\n□ Authentification fonctionnelle\n□ Paiement Stripe intégré\n\nDÉPLOIEMENT\n□ Code pushé sur GitHub\n□ Déploiement Vercel configuré\n□ Domaine personnalisé connecté\n□ SSL actif (automatique avec Vercel)\n\nVALIDATION\n□ Lien partagé avec 10 beta-testeurs\n□ Retours collectés\n□ Premières itérations appliquées\n□ Premier client/utilisateur payant`} />

      <h3>12.4 — Et maintenant ?</h3>
      <p>Tu as l'écosystème complet. Tu comprends Claude AI, Claude Code, et Cowork. Tu sais configurer les Skills, les MCP, les CLAUDE.md. Tu as un workflow de preview → GitHub → Vercel. Tu sais comment builder un MVP.</p>
      <p>Mais il y a une différence entre savoir et exécuter.</p>

      <CalloutBox variant="buildrs">
        <p><strong>Chez Buildrs, on fait exactement ce que ce guide t'apprend — mais à ta place et avec toi.</strong></p>
        <p style={{ marginTop: "12px" }}>Ce qu'on propose :</p>
        <ul>
          <li>Configuration complète de ton écosystème Claude</li>
          <li>Construction de tes outils et micro-SaaS avec Claude Code</li>
          <li>Automatisation de tes process avec Cowork</li>
          <li>Accompagnement stratégique : de l'idée au lancement</li>
        </ul>
        <p style={{ marginTop: "12px", fontStyle: "italic" }}>On configure Claude pour ton business en 48h.</p>
      </CalloutBox>
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
]

export const BLOCS = [
  { label: "Comprendre", icon: "📚", chapters: CHAPTERS.filter((c) => c.bloc === "Comprendre") },
  { label: "Configurer", icon: "⚙️", chapters: CHAPTERS.filter((c) => c.bloc === "Configurer") },
  { label: "Exploiter", icon: "🚀", chapters: CHAPTERS.filter((c) => c.bloc === "Exploiter") },
]
