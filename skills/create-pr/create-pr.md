# /pr — Pull Requests Automatiques

> Crée des pull requests avec titre et description générés automatiquement.

## Utilisation

```
/pr
/create-pr
/pr "titre optionnel"
```

## Ce que fait ce skill

1. Analyse tous les commits de la branche
2. Génère un titre descriptif
3. Génère une description complète avec :
   - Résumé des changements
   - Liste des modifications
   - Plan de test
4. Crée la PR via GitHub CLI (`gh`)
5. Affiche le lien vers la PR

## Format de la PR

```markdown
## Summary
- Bullet points résumant les changements

## Changes
- Liste détaillée des fichiers modifiés

## Test Plan
- [ ] Tests à effectuer

---
Generated with [Claude Code](https://claude.ai/claude-code)
```

## Exemple

```bash
$ /pr

Analyzing branch feature/auth...
  - 3 commits
  - 5 files changed

Creating PR...

✓ Pull Request created:
  https://github.com/user/repo/pull/42

Title: Add JWT authentication system
```

## Prérequis

- GitHub CLI (`gh`) installé et authentifié
- Être sur une branche autre que main/master
- Avoir des commits à merger

---

*ATOOX LIGHT — /pr*
