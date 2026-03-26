# /fix — Correction d'Erreurs Automatique

> Corrige automatiquement les erreurs TypeScript et ESLint.

## Utilisation

```
/fix
/fix-errors
/fix src/
```

## Ce que fait ce skill

1. Détecte les erreurs TypeScript (`tsc --noEmit`)
2. Détecte les erreurs ESLint (`eslint .`)
3. Analyse chaque erreur
4. Applique les corrections appropriées
5. Vérifie que les erreurs sont résolues

## Types d'erreurs corrigées

### TypeScript
- Types manquants
- Imports incorrects
- Propriétés manquantes
- Incompatibilités de types
- Variables non utilisées

### ESLint
- Formatage
- Imports non utilisés
- Variables non définies
- Règles de style

## Exemple

```bash
$ /fix

Detecting errors...
  - TypeScript: 3 errors
  - ESLint: 5 warnings

Fixing...
  ✓ src/auth.ts:12 - Added missing type annotation
  ✓ src/auth.ts:25 - Fixed import path
  ✓ src/utils.ts:8 - Removed unused variable
  ✓ ESLint auto-fix applied

Result:
  ✓ 0 TypeScript errors
  ✓ 0 ESLint errors
```

## Options

- `/fix` : Corrige tout le projet
- `/fix src/` : Corrige un répertoire spécifique
- `/fix src/file.ts` : Corrige un fichier spécifique

---

*ATOOX LIGHT — /fix*
