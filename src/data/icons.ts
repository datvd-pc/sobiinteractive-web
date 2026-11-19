import type { ImageMetadata } from 'astro';
import purr from '../assets/games/purr.png';
import hex from '../assets/games/hex.png';
import juice from '../assets/games/juice.png';
import grain from '../assets/games/grain.png';
import bumper from '../assets/games/bumper.png';
import dozer from '../assets/games/dozer.png';

/** Game icon files, keyed by the `icon` field in games.json. */
export const gameIcons: Record<string, ImageMetadata> = { purr, hex, juice, grain, bumper, dozer };
