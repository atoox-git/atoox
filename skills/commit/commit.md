# /commit — Commits Intelligents

> Génère des commits parfaits avec messages conventionnels et push automatique.

## Utilisation

```
/commit
/commit -m "message optionnel"
```

## Ce que fait ce skill

1. Analyse les changements avec `git diff`
2. Génère un message de commit conventionnel (feat:, fix:, refactor:, etc.)
3. Stage les fichiers modifiés
4. Crée le commit
5. Push vers la branche courante

## Format des messages

```
<type>(<scope>): <description>

[body optionnel]

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Types

- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `refactor` : Refactoring sans changement fonctionnel
- `docs` : Documentation
- `test` : Ajout ou modification de tests
- `chore` : Maintenance, dépendances

## Exemple

```bash
$ /commit

Analysing changes...
  - src/auth.ts (modified)
  - src/utils.ts (new)

Generated commit:
  feat(auth): add JWT token validation

  - Add validateToken utility function
  - Integrate with auth middleware
  - Add expiry check

  Co-Authored-By: Claude <noreply@anthropic.com>

Commit created and pushed to main
```

---

*ATOOX LIGHT — /commit*
