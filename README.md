# Git Übungen

Übungen mit git commands und git flow basics.

## Einleitung

Du bist Teil eines Entwicklerteams bei einem Tech-Startup namens FitTrack, das sich auf den Aufbau einer mobilen App für personalisiertes Fitness-Coaching konzentriert. Die App bietet Funktionen wie Benutzerkontoverwaltung, Trainingspläne, Live-Coaching-Sitzungen und Ernährungsverfolgung. Das Projekt wird auf GitHub gehostet, und der Hauptbranch sollte immer bereit für die Produktion sein.

### Projekt Setup

Repository Name: fittrack-app
Branch Struktur:

- main: Produktionsbereiter Branch.
- development: Integrations-Branch für Funktionen.
- feature-user-profile: Branch für die Entwicklung der Benutzerprofilverwaltung.
- feature-workout-tracking: Branch für die Entwicklung der Trainingsverfolgungsfunktionen.
- feature-nutrition-plans: Branch für die Entwicklung der Ernährungsplan-Funktionen.

## Übung 1: Git Klonen

Ziel: Klone das Repository, um mit den Funktionen zu arbeiten.

### Klone das Repository:

```bash
git clone https://github.com/yourusername/fittrack-app.git
```

### Wechsle in das Repository-Verzeichnis:

```bash
cd fittrack-app
```

## Übung 2: Git Merge (Feature-Branch in Entwicklung)

Ziel: Mergen von Updates aus feature-user-profile in den Branch development.

### Schritte:

Merge den Branch feature-user-profile in development:

In den Branch development wechseln:

```bash
git checkout development
```

Merge den Branch feature-user-profile in development:

```bash
git merge feature-user-profile
```

Jetzt sollte der Branch development die Updates aus feature-user-profile enthalten.

```bash
git push origin development
```

## Übung 3: Konfliktlösung mit Git Merge (Während der Entwicklung Integration)

Ziel: Handle einen Merge-Konflikt beim Integrieren von feature-workout-tracking in development.

Versuche zu mergen und löse den Konflikt.

Schritte:

Wechsel in den Branch development:

```bash
git checkout development
```

Merge den Branch feature-workout-tracking in development und löse den Konflikt:

```bash
git merge feature-workout-tracking
```

Wenn alles gelöst ist, pushe die Änderungen:

```bash
git add .
```

```bash
git commit -m "Konflikt zwischen Entwicklung und feature-workout-tracking gelöst"
```

```bash
git push origin development
```

### Fragen beantworten:

- Was ist ein Merge-Konflikt?
- Was löst einen Merge-Konflikt aus?
- Wie können Merge-Konflikte verhindert oder minimiert werden?

## Übung 4: Stash and Pop

Ziel: Verwende Stash, um Änderungen zu speichern, bevor du zu einem anderen Branch wechselst.

### Schritte:

Wechsle in den Branch feature-nutrition-plans:

```bash
git checkout feature-nutrition-plans
```

Füge im constructor der NutritionPlan-Klasse die neue property `meals` hinzu.

Jetzt hast bist du nicht fertig und möchtest im development-Branch weiterarbeiten, aber willst deine Änderungen noch nicht committen.

Speichere deine Änderungen mit Stash:

1. Füge die Änderungen hinzu:

```bash
git add .
```

2. Speichere die Änderungen mit Stash:

```bash
git stash
```

Wechsle in den development-Branch:

```bash
git checkout development
```

Schaue die nutritionPlan.js Datei an, um zu sehen, ob die Änderungen überhaupt nötig sind.

Wechsle zurück in den feature-nutrition-plans-Branch:

```bash
git checkout feature-nutrition-plans
```

Pope die Änderungen aus dem Stash:

```bash
git stash pop
```

### Fragen beantworten:

- Was ist Stash?
- Wann ist es sinnvoll, Stash zu verwenden?

## Übung 5: Cherry-Pick

Ziel: Wähle einen Commit aus einem Branch aus und füge ihn in einen anderen Branch ein.

### Schritte:

Wechsle in den Branch development:

```bash
git checkout development
```

Im Branch feature-cherry-pick wurde steht der Rest dieser Übung, aber in einem alten Commit. Du möchtest den Code aus diesem Commit in den development-Branch einfügen.

Wechsle in den Branch feature-cherry-pick:

```bash
git checkout feature-cherry-pick
```

Finde den Commit, den du einfügen möchtest:

```bash
git log
```

#### Kopiere den Commit-Hash, den du einfügen möchtest.

Wechsle zurück in den development-Branch:

```bash
git checkout development
```

Füge den Commit in den development-Branch ein:

```bash
git cherry-pick <commit-hash>
```

Falscher Commit, suche weiter.
