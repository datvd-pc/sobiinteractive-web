// /llms.txt: a plain summary of the site for AI assistants and AI search (llmstxt.org format).
import type { APIRoute } from 'astro';
import games from '../data/games.json';
import { SITE, EMAIL, GENRES } from '../data/seo';

export const GET: APIRoute = () => {
  const body = `# SOBI Interactive

> SOBI Interactive is a mobile game studio in Vietnam. It makes ${GENRES.join(', ').toLowerCase()} games for Android and iOS, and works with publishers through co-development with revenue share, full-service development, and games from its existing library. Slogan: "Think big from small games."

## Key facts

- Type: independent mobile game studio
- Country: Vietnam
- Platforms: Android, iOS
- Genres: ${GENRES.join(', ')}
- Prototype speed: usually 2 to 5 days, depending on what the game needs
- Works with: game publishers
- Ways to work together: co-development with revenue share; full-service development; games from the studio's existing library
- Before signing, publishers see the concept and a playable prototype
- SOBI integrates the publisher's SDKs and shares all of the game's data
- Contact: ${EMAIL}
- Legal entity: Sophia Business Innovation Company Limited (Vietnam), trading as SOBI Interactive

## Games

${games.map((g) => `- ${g.name}: ${g.genre}, status ${g.status.toLowerCase()}`).join('\n')}

## Pages

- [Home](${SITE}/): who SOBI is, its games and how it works
- [Partners](${SITE}/partners/): the three ways publishers can work with SOBI, frequently asked questions, contact form
- [About](${SITE}/about/): mission, values and careers
- [Contact](${SITE}/contact/): how to reach the studio
- [Privacy Policy](${SITE}/privacy/)
- [Terms of Use](${SITE}/terms/)
- [Data Deletion](${SITE}/data-deletion/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
