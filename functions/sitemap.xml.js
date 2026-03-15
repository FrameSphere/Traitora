// Dynamic Sitemap – Traitora
const API     = 'https://webcontrol-hq-api.karol-paschek.workers.dev';
const SITE_ID = 'traitora';
const BASE    = 'https://traitora.pages.dev';
const LANGS   = ['de', 'en', 'fr', 'es'];

function altLinks(map) {
  const enHref = map['en'] || map['de'];
  return Object.entries(map).map(([l, href]) =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`
  ).join('\n') + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${enHref}"/>`;
}

function staticUrl(loc, lastmod, freq, prio, alts = '') {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${prio}</priority>
${alts}
  </url>`;
}

const homeLangs = { de: `${BASE}/de/`, en: `${BASE}/en/`, fr: `${BASE}/fr/`, es: `${BASE}/es/` };

const STATIC_ENTRIES = [
  staticUrl(`${BASE}/`,         '2026-02-22', 'monthly', '1.0', altLinks(homeLangs)),
  ...LANGS.map(l => staticUrl(`${BASE}/${l}/`, '2026-02-22', 'weekly', '1.0', altLinks(homeLangs))),

  // Blog listing
  staticUrl(`${BASE}/blog/`,    '2026-03-15', 'weekly',  '0.8'),

  // About
  staticUrl(`${BASE}/de/about-traitora.html`,           '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/about-traitora.html`, en:`${BASE}/en/about-traitora.html`, es:`${BASE}/es/sobre-traitora.html`, fr:`${BASE}/fr/a-propos-de-traitora.html` })),
  staticUrl(`${BASE}/en/about-traitora.html`,           '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/about-traitora.html`, en:`${BASE}/en/about-traitora.html`, es:`${BASE}/es/sobre-traitora.html`, fr:`${BASE}/fr/a-propos-de-traitora.html` })),
  staticUrl(`${BASE}/es/sobre-traitora.html`,           '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/about-traitora.html`, en:`${BASE}/en/about-traitora.html`, es:`${BASE}/es/sobre-traitora.html`, fr:`${BASE}/fr/a-propos-de-traitora.html` })),
  staticUrl(`${BASE}/fr/a-propos-de-traitora.html`,     '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/about-traitora.html`, en:`${BASE}/en/about-traitora.html`, es:`${BASE}/es/sobre-traitora.html`, fr:`${BASE}/fr/a-propos-de-traitora.html` })),

  // FAQ
  staticUrl(`${BASE}/de/faq.html`, '2026-02-25', 'monthly', '0.6', altLinks({ de:`${BASE}/de/faq.html`, en:`${BASE}/en/faq.html`, es:`${BASE}/es/faq.html`, fr:`${BASE}/fr/faq.html` })),
  staticUrl(`${BASE}/en/faq.html`, '2026-02-25', 'monthly', '0.6', altLinks({ de:`${BASE}/de/faq.html`, en:`${BASE}/en/faq.html`, es:`${BASE}/es/faq.html`, fr:`${BASE}/fr/faq.html` })),
  staticUrl(`${BASE}/es/faq.html`, '2026-02-25', 'monthly', '0.6', altLinks({ de:`${BASE}/de/faq.html`, en:`${BASE}/en/faq.html`, es:`${BASE}/es/faq.html`, fr:`${BASE}/fr/faq.html` })),
  staticUrl(`${BASE}/fr/faq.html`, '2026-02-25', 'monthly', '0.6', altLinks({ de:`${BASE}/de/faq.html`, en:`${BASE}/en/faq.html`, es:`${BASE}/es/faq.html`, fr:`${BASE}/fr/faq.html` })),

  // IRT erklärt
  staticUrl(`${BASE}/de/irt-erklaert.html`,  '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/irt-erklaert.html`, en:`${BASE}/en/irt-explained.html`, es:`${BASE}/es/irt-explicados.html`, fr:`${BASE}/fr/irt-expliques.html` })),
  staticUrl(`${BASE}/en/irt-explained.html`, '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/irt-erklaert.html`, en:`${BASE}/en/irt-explained.html`, es:`${BASE}/es/irt-explicados.html`, fr:`${BASE}/fr/irt-expliques.html` })),
  staticUrl(`${BASE}/es/irt-explicados.html`,'2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/irt-erklaert.html`, en:`${BASE}/en/irt-explained.html`, es:`${BASE}/es/irt-explicados.html`, fr:`${BASE}/fr/irt-expliques.html` })),
  staticUrl(`${BASE}/fr/irt-expliques.html`, '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/irt-erklaert.html`, en:`${BASE}/en/irt-explained.html`, es:`${BASE}/es/irt-explicados.html`, fr:`${BASE}/fr/irt-expliques.html` })),

  // Persönlichkeitstest Vergleich
  staticUrl(`${BASE}/de/persoenlichkeitstest-vergleich.html`, '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/persoenlichkeitstest-vergleich.html`, en:`${BASE}/en/personality-test-comparison.html`, es:`${BASE}/es/comparacion-tests.html`, fr:`${BASE}/fr/comparaison-test.html` })),
  staticUrl(`${BASE}/en/personality-test-comparison.html`,    '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/persoenlichkeitstest-vergleich.html`, en:`${BASE}/en/personality-test-comparison.html`, es:`${BASE}/es/comparacion-tests.html`, fr:`${BASE}/fr/comparaison-test.html` })),
  staticUrl(`${BASE}/es/comparacion-tests.html`,              '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/persoenlichkeitstest-vergleich.html`, en:`${BASE}/en/personality-test-comparison.html`, es:`${BASE}/es/comparacion-tests.html`, fr:`${BASE}/fr/comparaison-test.html` })),
  staticUrl(`${BASE}/fr/comparaison-test.html`,               '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/persoenlichkeitstest-vergleich.html`, en:`${BASE}/en/personality-test-comparison.html`, es:`${BASE}/es/comparacion-tests.html`, fr:`${BASE}/fr/comparaison-test.html` })),

  // Persönlichkeitstypen
  staticUrl(`${BASE}/de/persoenlichkeitstypen.html`,   '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/persoenlichkeitstypen.html`, en:`${BASE}/en/personality-types.html`, es:`${BASE}/es/tipos-de-personalidad.html`, fr:`${BASE}/fr/types-de-personnalite.html` })),
  staticUrl(`${BASE}/en/personality-types.html`,       '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/persoenlichkeitstypen.html`, en:`${BASE}/en/personality-types.html`, es:`${BASE}/es/tipos-de-personalidad.html`, fr:`${BASE}/fr/types-de-personnalite.html` })),
  staticUrl(`${BASE}/es/tipos-de-personalidad.html`,   '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/persoenlichkeitstypen.html`, en:`${BASE}/en/personality-types.html`, es:`${BASE}/es/tipos-de-personalidad.html`, fr:`${BASE}/fr/types-de-personnalite.html` })),
  staticUrl(`${BASE}/fr/types-de-personnalite.html`,   '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/persoenlichkeitstypen.html`, en:`${BASE}/en/personality-types.html`, es:`${BASE}/es/tipos-de-personalidad.html`, fr:`${BASE}/fr/types-de-personnalite.html` })),

  // Traits erklärt
  staticUrl(`${BASE}/de/traits-erklaert.html`,  '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/traits-erklaert.html`, en:`${BASE}/en/traits-explained.html`, es:`${BASE}/es/rasgos-explicados.html`, fr:`${BASE}/fr/traits-expliques.html` })),
  staticUrl(`${BASE}/en/traits-explained.html`, '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/traits-erklaert.html`, en:`${BASE}/en/traits-explained.html`, es:`${BASE}/es/rasgos-explicados.html`, fr:`${BASE}/fr/traits-expliques.html` })),
  staticUrl(`${BASE}/es/rasgos-explicados.html`,'2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/traits-erklaert.html`, en:`${BASE}/en/traits-explained.html`, es:`${BASE}/es/rasgos-explicados.html`, fr:`${BASE}/fr/traits-expliques.html` })),
  staticUrl(`${BASE}/fr/traits-expliques.html`, '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/traits-erklaert.html`, en:`${BASE}/en/traits-explained.html`, es:`${BASE}/es/rasgos-explicados.html`, fr:`${BASE}/fr/traits-expliques.html` })),

  // Wie es funktioniert
  staticUrl(`${BASE}/de/wie-es-funktioniert.html`,    '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/wie-es-funktioniert.html`, en:`${BASE}/en/how-it-works.html`, es:`${BASE}/es/como-funciona.html`, fr:`${BASE}/fr/comment-ca-marche.html` })),
  staticUrl(`${BASE}/en/how-it-works.html`,            '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/wie-es-funktioniert.html`, en:`${BASE}/en/how-it-works.html`, es:`${BASE}/es/como-funciona.html`, fr:`${BASE}/fr/comment-ca-marche.html` })),
  staticUrl(`${BASE}/es/como-funciona.html`,           '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/wie-es-funktioniert.html`, en:`${BASE}/en/how-it-works.html`, es:`${BASE}/es/como-funciona.html`, fr:`${BASE}/fr/comment-ca-marche.html` })),
  staticUrl(`${BASE}/fr/comment-ca-marche.html`,       '2026-02-25', 'monthly', '0.7', altLinks({ de:`${BASE}/de/wie-es-funktioniert.html`, en:`${BASE}/en/how-it-works.html`, es:`${BASE}/es/como-funciona.html`, fr:`${BASE}/fr/comment-ca-marche.html` })),

  // Legal
  staticUrl(`${BASE}/impressum.html`,   '2026-02-22', 'yearly', '0.2'),
  staticUrl(`${BASE}/datenschutz.html`, '2026-02-22', 'yearly', '0.2'),
].join('\n');

export async function onRequestGet() {
  let posts = [];
  try {
    const res = await fetch(`${API}/api/blog/published?site_id=${SITE_ID}`);
    if (res.ok) posts = await res.json();
  } catch(_) {}

  const groups = {};
  const solo   = [];
  for (const p of posts) {
    if (p.group_id && p.group_id.trim()) {
      if (!groups[p.group_id]) groups[p.group_id] = [];
      groups[p.group_id].push(p);
    } else {
      solo.push(p);
    }
  }

  const today = new Date().toISOString().slice(0, 10);

  function postUrl(p, siblings) {
    const hreflang = siblings.map(s =>
      `    <xhtml:link rel="alternate" hreflang="${s.lang}" href="${BASE}/blog/${s.lang}/${s.slug}"/>`
    ).join('\n');
    const enSib = siblings.find(s => s.lang === 'en');
    const xd = enSib
      ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/blog/en/${enSib.slug}"/>`
      : '';
    return `  <url>
    <loc>${BASE}/blog/${p.lang}/${p.slug}</loc>
    <lastmod>${(p.published_at || p.created_at || today).slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
${hreflang}
${xd}
  </url>`;
  }

  const blogUrls = [
    ...Object.values(groups).flatMap(siblings => siblings.map(p => postUrl(p, siblings))),
    ...solo.map(p => postUrl(p, [p])),
  ].join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${STATIC_ENTRIES}
${blogUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
