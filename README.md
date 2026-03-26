# ◆ ATOOX — Vous avez une idée. Ils sont 73 à la construire avec vous.

> Bibliothèque de skills IA pour Claude Code, Cursor, OpenClaw.ai et tout agent compatible.
> 5 skills gratuits inclus. Parcours entrepreneur complet sur [atoox.com](https://atoox.com).

---

## Installation

```bash
npm install -g @atoox/atoox
```

Les skills sont automatiquement copiés dans `~/.claude/skills/`.
Redémarrez votre agent IA (Claude Code, Cursor), c'est prêt.

**Premier lancement ?** Tapez `/commit` dans un projet git pour tester.

---

## 5 Skills Gratuits

| Commande | Ce que ça fait | Exemple |
|----------|---------------|---------|
| `/commit` | Analyse le diff, génère un message conventionnel, push | Après avoir codé, tapez `/commit` |
| `/pr` | Crée une Pull Request avec titre, description et test plan | `/pr` après vos commits |
| `/fix` | Corrige toutes les erreurs TypeScript/ESLint en parallèle | `/fix` quand le linter est rouge |
| `/oneshot` | Implémente une feature complète (code + tests + docs) | `/oneshot "Ajouter export CSV"` |
| `/ultrathink` | Mode réflexion profonde pour les problèmes complexes | `/ultrathink "Comment gérer 10K users ?"` |

---

## Comment ça marche

Chaque skill est un fichier `SKILL.md` — des instructions structurées en Markdown avec des métadonnées YAML. Quand vous tapez une commande, votre agent IA lit le fichier et exécute les instructions.

```
~/.claude/skills/
├── commit/
│   └── SKILL.md       ← Instructions pour les commits
├── create-pr/
│   └── SKILL.md       ← Instructions pour les PR
├── fix-errors/
│   └── SKILL.md       ← Instructions pour corriger les erreurs
├── oneshot/
│   └── SKILL.md       ← Instructions pour les features rapides
└── ultrathink/
    └── SKILL.md       ← Instructions pour la réflexion profonde
```

---

## Compatibilité

| Agent / Plateforme | Support | Comment |
|--------------------|---------|---------|
| **Claude Code** (CLI) | ✅ Natif | `npm install` copie tout automatiquement |
| **Cursor** | ✅ Natif | Fonctionne avec les skills Claude intégrés |
| **Claude Desktop** | ✅ Manuel | Uploadez le `SKILL.md` comme document dans la conversation |
| **OpenClaw.ai** | ✅ Compatible | Chargez les skills dans la configuration agent |
| **Gemini CLI** | ⚡ Adaptable | Copiez les `.md` dans le dossier d'instructions |
| **Tout agent MCP** | ✅ Compatible | Format Markdown standard |

---

## Commandes CLI

```bash
atoox --help          # Voir les skills disponibles
atoox --version       # Version installée
atoox upgrade         # Infos sur la version PRO
```

---

## ATOOX PRO — L'écosystème complet

Les 5 skills gratuits sont un aperçu. L'écosystème complet comprend :

- **73 skills** dont 14 skills Revenue & Business (parcours entrepreneur de A à Z)
- **47 agents experts** spécialisés par domaine
- **45 protocoles** de qualité et de communication
- **45 commandes slash** prêtes à l'emploi
- **27 modes d'exécution** (--genesis, --autopilot, --cashflow, --tdd, --bugfix...)
- **Parcours entrepreneur complet** : idée → vision → marque → offre → page → contenu → revenus → trésorerie → admin → client
- **Orchestration automatique** — dites ce que vous voulez, ATOOX assemble l'équipe

**297 € une fois. Pas d'abonnement.** Détails sur **[atoox.com](https://atoox.com)**

---

## Désinstaller

```bash
npm uninstall -g @atoox/atoox
```

Les skills restent dans `~/.claude/skills/`. Pour les supprimer aussi :

```bash
rm -r ~/.claude/skills/commit ~/.claude/skills/create-pr ~/.claude/skills/fix-errors ~/.claude/skills/oneshot ~/.claude/skills/ultrathink
```

---

## Auteur

Créé par **Bertrand Bonnet** — [atoox.com](https://atoox.com)

## Licence

MIT
