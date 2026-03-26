# /ultrathink — Mode Réflexion Profonde

> Active le mode de réflexion approfondie pour les problèmes complexes.

## Utilisation

```
/ultrathink "problème ou question complexe"
```

## Ce que fait ce skill

Active un mode de pensée approfondie où chaque décision est :

1. **Analysée** sous plusieurs angles
2. **Challengée** avec des contre-arguments
3. **Validée** avec des preuves concrètes
4. **Documentée** avec le raisonnement

## Quand l'utiliser

- Décisions d'architecture
- Problèmes de performance complexes
- Bugs difficiles à reproduire
- Choix technologiques importants
- Refactoring majeur

## Exemple

```bash
$ /ultrathink "Microservices vs Monolithe pour notre API"

[Analyse Initiale]
  Contexte : API avec 10k req/min, équipe de 5

[Arguments Microservices]
  + Scalabilité indépendante
  + Déploiements isolés
  + Technologies variées possibles

[Arguments Monolithe]
  + Simplicité de développement
  + Pas de latence réseau
  + Debugging plus facile
  + Transactions ACID natives

[Contre-Arguments]
  - Microservices : Complexité opérationnelle pour équipe de 5
  - Monolithe : Scaling vertical limité

[Synthèse]
  Recommandation : Monolithe modulaire
  Raison : Équipe trop petite pour overhead microservices

[Plan d'Évolution]
  1. Monolithe modulaire maintenant
  2. Extraire services quand bottleneck identifié
  3. Réévaluer à 50k req/min
```

## Mode de pensée

Ultrathink force une réflexion structurée :

```
Problème
    ↓
Analyse multi-angle
    ↓
Thèse vs Antithèse
    ↓
Synthèse argumentée
    ↓
Recommandation actionnable
```

---

*ATOOX LIGHT — /ultrathink*
