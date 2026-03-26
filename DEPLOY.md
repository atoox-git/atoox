# Déploiement npm — @atoox/atoox

> **Guide interne** pour publier et maintenir le package npm.

---

## Structure du Package

```
npm/
├── package.json       ← Nom, version, description, keywords, bin
├── README.md          ← Affiché sur npmjs.com (marketing + doc utilisateur)
├── LICENSE            ← MIT
├── DEPLOY.md          ← CE FICHIER (guide interne, pas publié)
├── bin/
│   ├── atoox.js       ← CLI : aide, version, upgrade
│   └── install.js     ← Post-install : copie skills → ~/.claude/skills/
└── skills/            ← Les 5 skills LIGHT
    ├── commit/
    │   ├── SKILL.md   ← Fichier principal (frontmatter YAML + instructions)
    │   └── commit.md  ← Documentation complémentaire
    ├── create-pr/
    │   ├── SKILL.md
    │   └── create-pr.md
    ├── fix-errors/
    │   ├── SKILL.md
    │   └── fix-errors.md
    ├── oneshot/
    │   ├── SKILL.md
    │   └── oneshot.md
    └── ultrathink/
        ├── SKILL.md
        └── ultrathink.md
```

**IMPORTANT** : Chaque skill DOIT avoir un `SKILL.md` avec frontmatter YAML. Sans ça, l'agent IA ne le reconnaît pas comme un skill.

---

## Publier une Nouvelle Version

### 1. Vérifier le contenu

```bash
cd npm

# Vérifier que chaque skill a son SKILL.md
for d in skills/*/; do
  if [ ! -f "$d/SKILL.md" ]; then
    echo "ERREUR: $d manque SKILL.md"
  fi
done

# Vérifier ce qui sera publié
npm pack --dry-run
```

### 2. Bumper la version

Modifier `package.json` :
- **Patch** (5.3.1) → Fix dans un skill
- **Minor** (5.4.0) → Amélioration skill existant ou nouveau keyword
- **Major** (6.0.0) → Ajout/suppression d'un skill LIGHT

### 3. Publier

```bash
npm publish
```

### 4. Vérifier

```bash
npm info @atoox/atoox version
```

Puis vérifier sur https://www.npmjs.com/package/@atoox/atoox que le README s'affiche.

---

## Ce qui NE doit JAMAIS être dans ce package

- Skills PRO (atoox-sonar-pro, atoox-test-pro, etc.)
- Le skill principal `atoox` (framework complet)
- Les protocoles, agents, templates
- Les fichiers `core/` (routing-matrix, organigramme, etc.)
- Des liens vers le dépôt privé GitHub

---

## Mettre à Jour un Skill LIGHT

Les skills LIGHT sont des copies allégées. Pour les mettre à jour :

```bash
# Copier le SKILL.md depuis les skills installés
cp ~/.claude/skills/commit/SKILL.md npm/skills/commit/SKILL.md
```

Vérifier que le SKILL.md contient le frontmatter YAML :
```yaml
---
name: commit
description: ...
triggers:
  - /commit
---
```

---

## Synchronisation

Quand le contenu change, mettre à jour :

| Quoi | Où |
|------|-----|
| Stats (nb skills) | `npm/README.md` |
| Prix | NE PAS mettre de prix — renvoyer vers atoox.com |
| Version | `npm/package.json` |
| CLI texte | `npm/bin/atoox.js` |
| Post-install texte | `npm/bin/install.js` |
