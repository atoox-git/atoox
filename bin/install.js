#!/usr/bin/env node
/**
 * ATOOX LIGHT — Post-installation script
 * Copie les skills vers ~/.claude/skills/
 */

import { existsSync, mkdirSync, cpSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { homedir } from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Couleurs ANSI
const green = '\x1b[32m';
const blue = '\x1b[34m';
const yellow = '\x1b[33m';
const reset = '\x1b[0m';

console.log('');
console.log(`${blue}◆ ATOOX${reset} — Installation des skills...`);
console.log('');

// Répertoire source des skills (dans le package npm)
const skillsSource = join(__dirname, '..', 'skills');

// Répertoire destination
const claudeSkillsDir = join(homedir(), '.claude', 'skills');

// Créer le répertoire si nécessaire
if (!existsSync(claudeSkillsDir)) {
    mkdirSync(claudeSkillsDir, { recursive: true });
    console.log(`  → Création de ${claudeSkillsDir}`);
}

// Copier les skills
if (existsSync(skillsSource)) {
    try {
        const skills = readdirSync(skillsSource);

        for (const skill of skills) {
            const source = join(skillsSource, skill);
            const dest = join(claudeSkillsDir, skill);
            cpSync(source, dest, { recursive: true });
        }

        console.log(`  → ${skills.length} skills installés`);
        console.log('');
        console.log(`${green}✓ Installation terminée !${reset}`);
        console.log('');
        console.log('  Skills installés :');
        console.log('    • /commit     — Commits intelligents');
        console.log('    • /pr         — Pull requests automatiques');
        console.log('    • /fix        — Correction d\'erreurs');
        console.log('    • /oneshot    — Feature rapide');
        console.log('    • /ultrathink — Mode réflexion profonde');
        console.log('');
        console.log(`${yellow}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${reset}`);
        console.log('');
        console.log(`${yellow}  Prochaines étapes :${reset}`);
        console.log('');
        console.log('  1. Redémarrez Claude Code (ou Cursor)');
        console.log(`  2. Tapez ${green}/commit${reset} dans un projet git pour tester`);
        console.log('');
        console.log('  5 commandes disponibles :');
        console.log(`    ${green}/commit${reset}  ${green}/pr${reset}  ${green}/fix${reset}  ${green}/oneshot${reset}  ${green}/ultrathink${reset}`);
        console.log('');
        console.log(`${yellow}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${reset}`);
        console.log('');
        console.log(`  ${blue}73 skills · 47 agents · Compatible Claude, Cursor, OpenClaw${reset}`);
        console.log(`  Écosystème complet → ${blue}https://atoox.com${reset}`);
        console.log('');
    } catch (error) {
        console.error('Erreur lors de la copie des skills:', error.message);
        process.exit(1);
    }
} else {
    console.error('Erreur: Dossier skills non trouvé');
    process.exit(1);
}
