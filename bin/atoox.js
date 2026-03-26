#!/usr/bin/env node
/**
 * ATOOX — CLI principal
 */

const args = process.argv.slice(2);
const command = args[0];

// Couleurs ANSI
const green = '\x1b[32m';
const blue = '\x1b[34m';
const yellow = '\x1b[33m';
const cyan = '\x1b[36m';
const reset = '\x1b[0m';

function showHelp() {
    console.log('');
    console.log(`${blue}◆ ATOOX${reset} — Vous avez une idée. Ils sont 73 à la construire avec vous.`);
    console.log('');
    console.log('Skills gratuits inclus :');
    console.log(`  ${cyan}/commit${reset}     Commits intelligents avec messages parfaits`);
    console.log(`  ${cyan}/pr${reset}         Pull requests automatiques`);
    console.log(`  ${cyan}/fix${reset}        Correction d'erreurs TypeScript/ESLint`);
    console.log(`  ${cyan}/oneshot${reset}    Implémentation rapide de features`);
    console.log(`  ${cyan}/ultrathink${reset} Mode réflexion profonde`);
    console.log('');
    console.log('Utilisation :');
    console.log('  1. Ouvrez Claude Code (ou Cursor)');
    console.log('  2. Tapez une commande, ex: /commit');
    console.log('');
    console.log(`${green}Compatible :${reset} Claude Code, Cursor, OpenClaw.ai, tout agent MCP`);
    console.log('');
    console.log(`${yellow}━━━ ATOOX FULL — 73 skills, 47 agents ━━━${reset}`);
    console.log('');
    console.log('  Pour : Devs, PMs, Freelances, Tech Leads, Marketeurs');
    console.log('  Audit code, tests, sécurité, docs, marketing, architecture');
    console.log('  Moteur multi-experts + validation contradictoire');
    console.log('  ALIVE (24/7) + NEXUS (multi-agents)');
    console.log('');
    console.log(`  ${yellow}297 € — Paiement unique (moins cher qu'un an de Copilot)${reset}`);
    console.log(`  → ${cyan}https://atoox.com/full${reset}`);
    console.log('');
}

function showVersion() {
    console.log('ATOOX v6.0.0 (LIGHT)');
}

switch (command) {
    case '--help':
    case '-h':
    case 'help':
        showHelp();
        break;
    case '--version':
    case '-v':
    case 'version':
        showVersion();
        break;
    case 'upgrade':
    case 'full':
        console.log('');
        console.log(`${yellow}━━━ ATOOX FULL ━━━${reset}`);
        console.log('');
        console.log('  73 skills (5 gratuits + 68 PRO)');
        console.log('  47 agents experts spécialisés par domaine');
        console.log('  Moteur de raisonnement multi-experts');
        console.log('  Validation contradictoire automatique');
        console.log('  ALIVE (agent 24/7) + NEXUS (multi-agents)');
        console.log('  Compatible Claude Code, Cursor, OpenClaw.ai');
        console.log('  1 an de mises à jour + support email prioritaire');
        console.log('');
        console.log(`  ${yellow}297 € — Paiement unique. À vous pour toujours.${reset}`);
        console.log(`  → ${cyan}https://atoox.com/full${reset}`);
        console.log('');
        break;
    default:
        showHelp();
}
