// ── Cloudflare Pages Function ─────────────────────────────────────
// Route: /blog/[lang]/[slug]
// Renders a fully server-side blog post page for SEO + AdSense.
// ─────────────────────────────────────────────────────────────────

const API = 'https://webcontrol-hq-api.karol-paschek.workers.dev';
const SITE_ID = 'traitora';

const LANG_META = {
  de: { home: '/de/', blogHome: '/blog/', locale: 'de_DE',
        readMore: 'Mehr Artikel', notFound: 'Artikel nicht gefunden.',
        notFoundSub: 'Dieser Artikel existiert nicht oder wurde entfernt.' },
  en: { home: '/en/', blogHome: '/blog/', locale: 'en_US',
        readMore: 'More Articles', notFound: 'Article not found.',
        notFoundSub: 'This article does not exist or has been removed.' },
  fr: { home: '/fr/', blogHome: '/blog/', locale: 'fr_FR',
        readMore: "Plus d'articles", notFound: 'Article introuvable.',
        notFoundSub: "Cet article n'existe pas ou a \u00e9t\u00e9 supprim\u00e9." },
  es: { home: '/es/', blogHome: '/blog/', locale: 'es_ES',
        readMore: 'M\u00e1s art\u00edculos', notFound: 'Art\u00edculo no encontrado.',
        notFoundSub: 'Este art\u00edculo no existe o ha sido eliminado.' },
};

function fmtDate(d, lang) {
  const locales = { de: 'de-DE', en: 'en-GB', fr: 'fr-FR', es: 'es-ES' };
  return new Date(d).toLocaleDateString(locales[lang] || 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderHTML(post, lang, m) {
  const tags = (post.tags || '').split(',').map(t => t.trim()).filter(Boolean);
  const dateStr = fmtDate(post.published_at || post.created_at, lang);
  const description = post.excerpt || post.title;
  const canonicalUrl = `https://traitora.pages.dev/blog/${lang}/${post.slug}`;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(post.title)} \u2013 Traitora Blog</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="alternate" hreflang="de" href="https://traitora.pages.dev/de/">
  <link rel="alternate" hreflang="en" href="https://traitora.pages.dev/en/">
  <link rel="alternate" hreflang="fr" href="https://traitora.pages.dev/fr/">
  <link rel="alternate" hreflang="es" href="https://traitora.pages.dev/es/">

  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(post.title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="Traitora">
  <meta property="og:locale" content="${m.locale}">
  <meta property="og:image" content="https://traitora.pages.dev/assets/favicon.svg">
  <meta property="article:published_time" content="${post.published_at || post.created_at}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(post.title)}">
  <meta name="twitter:description" content="${esc(description)}">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(post.title)},
    "description": ${JSON.stringify(description)},
    "datePublished": "${post.published_at || post.created_at}",
    "dateModified": "${post.published_at || post.created_at}",
    "author": { "@type": "Organization", "name": "Traitora" },
    "publisher": { "@type": "Organization", "name": "Traitora", "url": "https://traitora.pages.dev" },
    "url": "${canonicalUrl}",
    "inLanguage": "${lang}",
    "image": "https://traitora.pages.dev/assets/favicon.svg",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "${canonicalUrl}" }
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Traitora", "item": "https://traitora.pages.dev/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://traitora.pages.dev/blog/" },
      { "@type": "ListItem", "position": 3, "name": ${JSON.stringify(post.title)}, "item": "${canonicalUrl}" }
    ]
  }
  </script>

  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="stylesheet" href="/style.css">
  <script>(function(){const t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();</script>

  <style>
    .blog-post-page { max-width: 760px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
    .blog-nav { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 2rem; }
    .blog-nav a { color: var(--text-secondary); text-decoration: none; font-size: 14px; transition: color .2s; }
    .blog-nav a:hover { color: var(--primary, #8b5cf6); }
    .blog-post-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 1rem; }
    .blog-tag { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; background: rgba(139,92,246,.18); color: #c084fc; text-decoration: none; }
    .blog-tag:hover { background: rgba(139,92,246,.28); }
    .blog-post-date { font-size: 13px; color: var(--text-secondary); }
    .blog-post-title { font-size: clamp(1.6rem, 4vw, 2.2rem); font-weight: 800; line-height: 1.25; color: var(--text-primary); margin: 0 0 1rem; }
    .blog-post-excerpt { font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; border-left: 3px solid var(--primary, #8b5cf6); padding-left: 1rem; margin-bottom: 2rem; }
    .blog-post-body { font-size: 1rem; line-height: 1.8; color: var(--text-secondary); }
    .blog-post-body h2 { font-size: 1.4rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 0.75rem; }
    .blog-post-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 1.5rem 0 0.5rem; }
    .blog-post-body p { margin-bottom: 1.1rem; }
    .blog-post-body ul, .blog-post-body ol { padding-left: 1.4rem; margin-bottom: 1.1rem; }
    .blog-post-body li { margin-bottom: 0.4rem; }
    .blog-post-body strong { color: var(--text-primary); }
    .blog-post-body a { color: var(--primary, #8b5cf6); }
    .blog-post-body hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
    .blog-divider { border: none; border-top: 1px solid var(--border); margin: 2.5rem 0; }

    .blog-back-btn { display: inline-flex; align-items: center; gap: 6px; margin-top: 2.5rem;
      padding: 10px 20px; border-radius: 8px; background: rgba(139,92,246,.12); color: var(--primary, #8b5cf6);
      text-decoration: none; font-weight: 600; font-size: 14px; transition: background .2s; }
    .blog-back-btn:hover { background: rgba(139,92,246,.22); }
  </style>
</head>
<body>
  <div class="language-selector">
    <select onchange="window.location.href=({de:'/de/',en:'/en/',fr:'/fr/',es:'/es/'}[this.value]||'/de/')">
      <option value="de"${lang==='de'?' selected':''}>Deutsch</option>
      <option value="en"${lang==='en'?' selected':''}>English</option>
      <option value="fr"${lang==='fr'?' selected':''}>Fran\u00e7ais</option>
      <option value="es"${lang==='es'?' selected':''}>Espa\u00f1ol</option>
    </select>
  </div>

  <div class="theme-toggle">
    <button id="themeToggle" aria-label="Toggle theme" onclick="toggleTheme()">
      <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
      <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
  </div>

  <article class="blog-post-page" itemscope itemtype="https://schema.org/Article">

    <nav class="blog-nav" aria-label="Breadcrumb">
      <a href="${m.home}">Traitora</a>
      <a href="${m.blogHome}">\u2190 Blog</a>
    </nav>

    <header>
      <div class="blog-post-meta">
        ${tags.map(t => `<a href="${m.blogHome}?tag=${encodeURIComponent(t)}" class="blog-tag">${esc(t)}</a>`).join('')}
        <time class="blog-post-date" itemprop="datePublished" datetime="${post.published_at || post.created_at}">${dateStr}</time>
      </div>
      <h1 class="blog-post-title" itemprop="headline">${esc(post.title)}</h1>
      ${post.excerpt ? `<p class="blog-post-excerpt" itemprop="description">${esc(post.excerpt)}</p>` : ''}
    </header>

    <hr class="blog-divider">

    <div class="blog-post-body" itemprop="articleBody">
      ${post.content || `<p>${esc(post.excerpt || '')}</p>`}
    </div>

    <hr class="blog-divider">

    <a href="${m.blogHome}" class="blog-back-btn">\u2190 ${m.readMore}</a>

  </article>

  <footer class="footer">
    <div class="footer-links">
      <a href="${m.home}">Traitora</a>
      <span class="footer-separator">\u00b7</span>
      <a href="/blog/">Blog</a>
      <span class="footer-separator">\u00b7</span>
      <a href="/impressum.html">Impressum</a>
      <span class="footer-separator">\u00b7</span>
      <a href="/datenschutz.html">Datenschutz</a>
    </div>
    <div class="footer-copyright">
      <p class="copyright">\u00a9 Traitora 2026 \u00b7 powered by <a href="https://frame-sphere.vercel.app" class="footer-link">FrameSphere</a></p>
    </div>
  </footer>

  <script>
    function toggleTheme() {
      const html = document.documentElement;
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    }
  </script>
</body>
</html>`;
}

function render404(lang, m) {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 \u2013 Traitora Blog</title>
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="stylesheet" href="/style.css">
  <script>(function(){const t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();<\/script>
  <style>
    .not-found { max-width: 600px; margin: 6rem auto; padding: 2rem; text-align: center; }
    .not-found h1 { font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem; }
    .not-found p { color: var(--text-secondary); margin-bottom: 2rem; }
    .not-found a { display: inline-block; padding: 10px 24px; border-radius: 8px;
      background: rgba(139,92,246,.12); color: var(--primary,#8b5cf6);
      text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="not-found">
    <h1>404 \u2013 ${m.notFound}</h1>
    <p>${m.notFoundSub}</p>
    <a href="${m.blogHome}">\u2190 ${m.readMore}</a>
  </div>
</body>
</html>`;
}

export async function onRequestGet({ params }) {
  const { lang, slug } = params;
  const VALID = ['de', 'en', 'fr', 'es'];
  if (!VALID.includes(lang)) return new Response('Not Found', { status: 404 });

  const m = LANG_META[lang];

  let post;
  try {
    const res = await fetch(
      `${API}/api/blog/post?site_id=${SITE_ID}&lang=${lang}&slug=${encodeURIComponent(slug)}`
    );
    if (res.status === 404) {
      return new Response(render404(lang, m), {
        status: 404,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    if (!res.ok) throw new Error('API ' + res.status);
    post = await res.json();
  } catch (e) {
    return new Response(render404(lang, m), {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  return new Response(renderHTML(post, lang, m), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      // 10min Browser-Cache, 30min CDN — kurz genug dass Status-Änderungen schnell sichtbar sind
      'Cache-Control': 'public, max-age=600, s-maxage=1800',
    },
  });
}
