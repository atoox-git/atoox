# /oneshot — Implémentation Rapide

> Implémente une feature complète en une seule commande.

## Utilisation

```
/oneshot "description de la feature"
```

## Ce que fait ce skill

1. **Explore** le codebase pour comprendre l'architecture
2. **Planifie** l'implémentation
3. **Code** les fichiers nécessaires
4. **Teste** que tout fonctionne
5. **Commit** les changements

## Workflow

```
Explore → Code → Test
```

### Phase 1 : Explore
- Analyse la structure du projet
- Identifie les patterns existants
- Trouve les fichiers à modifier

### Phase 2 : Code
- Crée les nouveaux fichiers
- Modifie les fichiers existants
- Respecte les conventions du projet

### Phase 3 : Test
- Lance les tests existants
- Vérifie que rien n'est cassé
- Corrige les erreurs si nécessaire

## Exemple

```bash
$ /oneshot "ajouter un bouton de déconnexion dans le header"

[Explore]
  - Analyzing project structure...
  - Found: src/components/Header.tsx
  - Found: src/hooks/useAuth.ts

[Code]
  - Adding logout button to Header.tsx
  - Using existing useAuth hook

[Test]
  - Running tests... ✓
  - TypeScript check... ✓
  - ESLint check... ✓

✓ Feature implemented!
  - 1 file modified
  - Ready for review
```

## Bonnes pratiques

- Soyez précis dans la description
- Une feature à la fois
- Vérifiez le résultat avant de commiter

---

*ATOOX LIGHT — /oneshot*
