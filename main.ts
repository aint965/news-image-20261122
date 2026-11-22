// News-image entry for 22 November 2026 (Node 22, standard library only).
//
// The finished front page lives in this repository as entry.png — a one-image
// newspaper summing up Sunday 22 November 2026: 35 stories across 7 regions,
// three illustrated lead cards, a UTC timeline, a numbered world map and a
// DATE CHECK box. This program writes exactly that image to /output/entry.png.
//
// It runs with no network in a fresh container, so it only copies the file
// that ships beside it. The output is byte-identical on every run.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The sandbox gives us a writable /output, but it may not exist yet when the
// program starts; recursive mkdir is a no-op when it already does.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, 'entry.png'), join(outDir, 'entry.png'));
